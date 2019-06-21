/**
 * Digitizer for CIM Application
 */
"use strict";

define
(
    ["cancelablepromise"],
    /**
     * @summary Point and line digitizer.
     * @description functions to digitize a point or a line
     * @exports digitizer
     * @version 1.0
     */
    function (CancelablePromise)
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
             * @param p LngLat the point to test
             * @param {Array.<number>} p0 LngLat the coordinates of the line startpoint
             * @param {Array.<number>} p1 LngLat the coordinates of the line endpoint
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

            digitize_point_mousedown_listener (points, callback_success, callback_failure, event)
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
                    callback_success (feature);
                }
                else
                    callback_failure ();
            }

            set_point_listeners ()
            {
                if (this._mousedown)
                {
                    // set up our listeners
                    this._map.dragPan.disable ();
                    this._map.dragRotate.disable ();
                    this._cimmap.remove_listeners ();
                    this._map.on ("mousedown", this._mousedown);
                }
            }

            reset_point_listeners ()
            {
                if (this._mousedown)
                {
                    this._map.dragPan.enable ();
                    this._map.dragRotate.enable ();
                    this._map.off ("mousedown", this._mousedown);
                    delete this._mousedown;
                    this._cimmap.add_listeners ();
                }
            }

            digitize_point (obj, features, text, callback_success, callback_failure)
            {
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

                function cb_success (feature)
                {
                    if (this._popup)
                    {
                        this._popup.remove ();
                        delete this._popup;
                    }
                    this.reset_point_listeners ();
                    callback_success (feature);
                }
                function cb_failure ()
                {
                    if (this._popup)
                    {
                        this._popup.remove ();
                        delete this._popup;
                    }
                    this.reset_point_listeners ();
                    callback_failure ({canceled: true});
                }
                this._mousedown = this.digitize_point_mousedown_listener.bind (this, points, cb_success.bind (this), cb_failure.bind (this));

                this.set_point_listeners ();

                // pop up a prompt and wait
                this._popup = this.popup (text);
            }

            async digitize_point_wait (obj, features, text, callback_success, callback_failure)
            {
                let status = null;
                function cb_success (feature)
                {
                    status = "success";
                    callback_success (feature);
                }
                function cb_failure (error)
                {
                    status = "fail";
                    callback_failure (error);
                }
                function sleep (ms)
                {
                    return (new Promise (resolve => setTimeout (resolve, ms)));
                }
                this.digitize_point (obj, features, text, cb_success, cb_failure);
                do
                    await sleep (500);
                while (null == status);
            }

            point (obj, features, prompt)
            {
                const text = prompt || "<h1>Digitize point geometry</h1>";
                function abort ()
                {
                    if (this._popup)
                    {
                        this._popup.remove ();
                        delete this._popup;
                    }
                    this.reset_point_listeners ();
                }
                return (new CancelablePromise (new Promise (this.digitize_point_wait.bind (this, obj, features, text)), abort.bind (this)));
            }

            digitize_line_mousedown_listener (lines, callback_success, callback_failure, event)
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
                        callback_success (feature);
                    else
                        callback_failure ()
                }
            }

            digitize_line_mousemove_listener (lines, event)
            {
                event.originalEvent.preventDefault ();
                event.originalEvent.stopPropagation ();
                const lnglat = event.lngLat;
                const feature = lines.features[lines.features.length - 1];
                // ToDo: snap to point or end of line
                feature.transient = [lnglat.lng, lnglat.lat];
            }

            animate_line (lines)
            {
                const feature = lines.features[lines.features.length - 1];
                if (null != feature.transient)
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

            set_line_listeners ()
            {
                if (this._mousedown)
                {
                    // set up our listeners
                    this._cimmap.remove_listeners ();
                    this._map.dragPan.disable ();
                    this._map.dragRotate.disable ();
                    this._map.on ("mousedown", this._mousedown);
                    this._map.on ("mousemove", this._mousemove);
                    // start animation
                    this._animation = requestAnimationFrame (this._animate);
                }
            }

            reset_line_listeners ()
            {
                if (this._mousedown)
                {
                    cancelAnimationFrame (this._animation);
                    delete this._animation;
                    this._map.dragPan.enable ();
                    this._map.dragRotate.enable ();
                    this._map.off ("mousedown", this._mousedown);
                    delete this._mousedown;
                    this._map.off ("mousemove", this._mousemove);
                    delete this._mousemove;
                    this._cimmap.add_listeners ();
                }
            }

            digitize_line (obj, features, text, callback_success, callback_failure)
            {
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
                function cb_success (feature)
                {
                    if (this._popup)
                    {
                        this._popup.remove ();
                        delete this._popup;
                    }
                    this.reset_line_listeners ();
                    callback_success (feature);
                }
                function cb_failure ()
                {
                    if (this._popup)
                    {
                        this._popup.remove ();
                        delete this._popup;
                    }
                    this.reset_line_listeners ();
                    callback_failure ({canceled: true});
                }
                this._mousedown = this.digitize_line_mousedown_listener.bind (this, lines, cb_success.bind (this), cb_failure.bind (this));
                this._mousemove = this.digitize_line_mousemove_listener.bind (this, lines);
                this._animate = this.animate_line.bind (this, lines);

                this.set_line_listeners ();
                // pop up a prompt
                this._popup = this.popup (text);
            }

            async digitize_line_wait (obj, features, text, callback_success, callback_failure)
            {
                let status = null;
                function cb_success (feature)
                {
                    status = "success";
                    callback_success (feature);
                }
                function cb_failure (error)
                {
                    status = "fail";
                    callback_failure (error);
                }
                function sleep (ms)
                {
                    return (new Promise (resolve => setTimeout (resolve, ms)));
                }
                this.digitize_line (obj, features, text, cb_success, cb_failure)
                do
                    await sleep (500);
                while (null == status);
            }

            line (obj, features, prompt)
            {
                const text = prompt || "<h1>Digitize linear geometry<br>Right-click to finish</h1>";
                function abort ()
                {
                    if (this._popup)
                    {
                        this._popup.remove ();
                        delete this._popup;
                    }
                    this.reset_line_listeners ();
                }
                return (new CancelablePromise (new Promise (this.digitize_line_wait.bind (this, obj, features, text)), abort.bind (this)));
            }

        }

        return (Digitizer);
    }
);