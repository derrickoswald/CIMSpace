/**
 * @fileOverview Digitizer for CIM Application.
 * @name digitizer
 * @author Derrick Oswald
 * @version 1.0
 */
"use strict";

define
(
    ["cancelablepromise", "lib/mapbox-gl"],
    /**
     * @summary Point and line digitizer.
     * @description functions to digitize a point or a line
     * @exports digitizer
     * @version 1.0
     */
    function (CancelablePromise, mapboxgl)
    {
        class Digitizer
        {
            constructor (map, cimmap)
            {
                this._map = map;
                this._cimmap = cimmap;
                this._mrid = null;
            }

            popup (html, position)
            {
                const lnglat = position || this._map.getCenter ();
                const popup = new mapboxgl.Popup ();
                popup.setLngLat (lnglat);
                popup.setHTML (html);
                popup.addTo (this._map);
                return (popup);
            }

            distance (a, b)
            {
                const dx = a.lng - b.lng;
                const dy = a.lat - b.lat;
                return (Math.sqrt (dx * dx + dy * dy));
            }

            /**
             * The distance of p to line (p0,p1).
             * @param {{lng: number, lat: number}} p LngLat the point to test
             * @param {{lng: number, lat: number}} p0 LngLat the coordinates of the line startpoint
             * @param {{lng: number, lat: number}} p1 LngLat the coordinates of the line endpoint
             * @return {Object} the perpendicular point on (p0,p1) and
             * the value of t (the corresponding value for the parametric line).
             * Note: if t < 0.0 or t > 1.0 the perpendicular point is not on the line segment.
             * See: http://geomalgorithms.com/a02-_lines.html
             */
            point_line_distance (p, p0, p1)
            {
                let ret;
                const l = [p1.lng - p0.lng, p1.lat - p0.lat]; // L(t) = p0 + t*l
                const l2 = l[0] * l[0] + l[1] * l[1];
                if (l2 === 0.0)
                    ret = { valid: false };
                else
                {
                    const w = [p.lng - p0.lng, p.lat - p0.lat];
                    const t = (w[0] * l[0] + w[1] * l[1]) / l2;
                    const perp = [p0.lng + t * l[0], p0.lat + t * l[1]];
                    const point = mapboxgl.LngLat.convert (perp);
                    ret = { point: point, t: t, distance: this.distance (p, point), valid: true }
                }
                return (ret);
            }

            snap (event)
            {
                let ret = event.lngLat;
                const width = 4;
                const height = 4;
                const features = this._map.queryRenderedFeatures
                (
                    [
                      [event.point.x - width / 2, event.point.y - height / 2],
                      [event.point.x + width / 2, event.point.y + height / 2]
                    ],
                    {}
                );
                if ((null != features) && (0 !== features.length))
                {
                    const mrid = this._mrid;
                    const candidates = [];
                    for (let i = 0; i < features.length; i++)
                    {
                        const feature = features[i];
                        if (feature.properties.mRID && (mrid !== feature.properties.mRID)) // only our features and not the current one
                        {
                            const geometry = feature.geometry;
                            if ("Point" === geometry.type)
                            {
                                const candidate = mapboxgl.LngLat.convert (geometry.coordinates);
                                candidates.push ({ distance: this.distance (ret, candidate), feature: feature, point: candidate, type: "POINT" });
                            }
                            else if ("LineString" === geometry.type)
                            {
                                for (let j = 0; j < geometry.coordinates.length; j++)
                                {
                                    const candidate = mapboxgl.LngLat.convert (geometry.coordinates[j]);
                                    candidates.push ({ distance: this.distance (ret, candidate), feature: feature, point: candidate, type: "ENDPOINT" });
                                }
                                for (let j = 0; j < geometry.coordinates.length - 1; j++)
                                {
                                    const p0 = mapboxgl.LngLat.convert (geometry.coordinates[j]);
                                    const p1 = mapboxgl.LngLat.convert (geometry.coordinates[j + 1]);
                                    const pl = this.point_line_distance (ret, p0, p1);
                                    if (pl.valid)
                                        if ((pl.t >= 0.0) && (pl.t <= 1.0))
                                            candidates.push ({ distance: pl.distance, feature: feature, point: pl.point, type: "NEAR" });
                                }
                            }
                        }
                    }
                    if (0 < candidates.length)
                    {
                        let threshold = Number.POSITIVE_INFINITY;
                        // set up the threshold as ten times the "NEAR"est point
                        candidates.forEach (candidate => { if ((candidate.type === "NEAR") && (candidate.distance < threshold)) threshold = candidate.distance; });
                        if (threshold !== Number.POSITIVE_INFINITY)
                            threshold = threshold * 10.0;
                        // discard anything over the threshold
                        const culled = candidates.filter (candidate => candidate.distance <= threshold);
                        // choose in order of POINT, ENDPOINT, NEAR
                        let chosen = null;
                        culled.forEach (candidate => { if ((candidate.type === "POINT") && ((null == chosen) || (candidate.distance < chosen.distance))) chosen = candidate; });
                        if (null == chosen)
                            culled.forEach (candidate => { if ((candidate.type === "ENDPOINT") && ((null == chosen) || (candidate.distance < chosen.distance))) chosen = candidate; });
                        if (null == chosen)
                            culled.forEach (candidate => { if ((candidate.type === "NEAR") && ((null == chosen) || (candidate.distance < chosen.distance))) chosen = candidate; });
                        if (null != chosen)
                        {
                            console.log ("snap " + chosen.type + " " + chosen.feature.properties.cls + ":" + chosen.feature.properties.mRID + " " + chosen.distance + " " + chosen.point);
                            ret = chosen.point;
                        }
                    }
                }

                return (ret);
            }

            digitize_point_promise (points)
            {
                return (
                    new Promise (
                        (resolve, reject) =>
                        {
                            this._cimmap.push_listeners (
                                {
                                    "mousedown":
                                        (event) =>
                                        {
                                            event.originalEvent.preventDefault ();
                                            event.originalEvent.stopPropagation ();
                                            const buttons = event.originalEvent.buttons;
                                            const leftbutton = 0 !== (buttons & 1);
                                            if (leftbutton)
                                            {
                                                const lnglat = this.snap (event);
                                                const feature = points.features[points.features.length - 1];
                                                feature.geometry.coordinates = [lnglat.lng, lnglat.lat];
                                                this._map.getSource ("edit points").setData (points);
                                                resolve (feature);
                                            }
                                            else
                                                reject ();
                                        },
                                    "dragPan": false,
                                    "dragRotate": false
                                }
                            );
                        }
                    )
                    .finally (
                        () =>
                            this._cimmap.pop_listeners ())
                );
            }

            point (obj, features, prompt)
            {
                const text = prompt || "<h1>Digitize point geometry</h1>";
                this._mrid = obj.mRID;

                // get the current GeoJSON
                const options =
                    {
                        show_internal_features: this._cimmap.show_internal_features ()
                    };
                const geo = this._cimmap.get_themer ().getTheme ().make_geojson (features, options);
                const points = geo.points;
                points.features.push
                (
                    {
                        type: "Feature",
                        geometry:
                        {
                            type: "Point",
                            coordinates: []
                        },
                        properties: obj
                    }
                );

                // pop up a prompt and wait
                const popup = this.popup (text);

                return (
                    new CancelablePromise (
                        this.digitize_point_promise (points).finally (() => popup.remove ()),
                        () =>
                        {
                            popup.remove ();
                            this._cimmap.pop_listeners ();
                        }
                    )
                );
            }

            animate_line (lines)
            {
                const feature = lines.features[lines.features.length - 1];
                if (feature)
                {
                    if (feature.transient)
                    {
                        const coordinates = feature.geometry.coordinates;
                        coordinates.push (feature.transient);
                        if (coordinates.length >= 2)
                            this._map.getSource ("edit lines").setData (lines);
                        coordinates.length = coordinates.length - 1;
                        feature.transient = null;
                    }
                    // trigger next animation
                    this._animation = requestAnimationFrame (this._animate);
                }
            }

            digitize_line_promise (lines)
            {
                return (
                    new Promise (
                        (resolve, reject) =>
                        {
                            this._cimmap.push_listeners (
                                {
                                    "mousedown":
                                        (event) =>
                                        {
                                            event.originalEvent.preventDefault ();
                                            event.originalEvent.stopPropagation ();
                                            const feature = lines.features[lines.features.length - 1];
                                            const coordinates = feature.geometry.coordinates;
                                            const lnglat = this.snap (event);
                                            const buttons = event.originalEvent.buttons;
                                            const leftbutton = 0 !== (buttons & 1);
                                            const rightbutton = 0 !== (buttons & 2);

                                            if (leftbutton)
                                            {
                                                coordinates.push ([lnglat.lng, lnglat.lat]);
                                                if (coordinates.length > 2)
                                                    this._map.getSource ("edit lines").setData (lines);
                                            }
                                            else if (rightbutton)
                                            {
                                                lines.features.length = lines.features.length - 1;
                                                if (coordinates.length > 1)
                                                    resolve (feature);
                                                else
                                                    reject ();
                                            }
                                        },
                                    "mousemove":
                                        (event) =>
                                        {
                                            event.originalEvent.preventDefault ();
                                            event.originalEvent.stopPropagation ();
                                            const lnglat = event.lngLat;
                                            const feature = lines.features[lines.features.length - 1];
                                            // ToDo: snap to point or end of line
                                            feature.transient = [lnglat.lng, lnglat.lat];
                                        },
                                    "dragPan": false,
                                    "dragRotate": false
                                }
                            );
                            // start animation
                            this._animate = this.animate_line.bind (this, lines);
                            this._animation = requestAnimationFrame (this._animate);
                        }
                    )
                    .finally (
                        () =>
                        {
                            cancelAnimationFrame (this._animation);
                            this._cimmap.pop_listeners ();
                        }
                    )
                );
            }

            line (obj, features, prompt)
            {
                const text = prompt || "<h1>Digitize linear geometry<br>Right-click to finish</h1>";
                this._mrid = obj.mRID;

                // get the current GeoJSON
                const options =
                    {
                        show_internal_features: this._cimmap.show_internal_features ()
                    };
                const geo = this._cimmap.get_themer ().getTheme ().make_geojson (features, options);
                const lines = geo.lines;

                // add an empty line
                lines.features.push
                (
                    {
                        type: "Feature",
                        geometry:
                        {
                            type: "LineString",
                            coordinates: []
                        },
                        properties: obj,
                        transient: null
                    }
                );

                // pop up a prompt
                const popup = this.popup (text);

                return (new CancelablePromise (
                    this.digitize_line_promise (lines).finally (() => popup.remove ()),
                    () =>
                    {
                        popup.remove ();
                        cancelAnimationFrame (this._animation);
                        this._cimmap.pop_listeners ();
                    }
                ));
            }
        }

        return (Digitizer);
    }
);