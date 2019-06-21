/**
 * Diagram theme.
 */
"use strict";

define
(
    ["../mustache", "./default_theme", "./layers"],
    /**
     * @summary Theme of diagrams.
     * @exports diagram_theme
     * @version 1.0
     */
    function (mustache, DefaultTheme, layers)
    {
        /**
         * symbology
         */
        const junction_symbol = "alternate_junction";
        const connector_symbol = "connector";
        const distribution_box_symbol = "distribution_box";
        const energy_consumer_symbol = "energy_consumer";
        const fuse_symbol = "fuse";
        const other_symbol = "junction";
        const street_light_symbol = "street_light";
        const substation_symbol = "substation";
        const switch_symbol = "switch";
        const transformer_station_symbol = "transformer_station";
        const transformer_symbol = "transformer";
        const feeder_symbol = "feeder";

        let TheExtents;

        class DiagramTheme extends DefaultTheme
        {
            constructor ()
            {
                super ();
            }

            getName ()
            {
                return ("DiagramTheme");
            }

            getTitle ()
            {
                return ("Schematic");
            }

            getDescription ()
            {
                return ("Show the schematic layout objects on the map.");
            }

            getExtents ()
            {
                return (TheExtents);
            }

            /**
             * Add stylization information to elements and make a list of point and linear features.
             * @param {Object} data - the hash table object of CIM classes by class name
             * @param {Object} locations - the hash table object with properties that are locations with arrays of coordinates
             * @param {Object} options - options for processing
             * @return {Object} with points, lines and polygons feature collections
             */
            process_spatial_objects (data, locations, options)
            {
                // the points GeoJSON
                const points =
                {
                    "type" : "FeatureCollection",
                    "features" : []
                };
                // the special points (internal switches and transformers)
                const special_points =
                {
                    "type" : "FeatureCollection",
                    "features" : []
                };
                // the lines GeoJSON
                const lines =
                {
                    "type" : "FeatureCollection",
                    "features" : []
                };
                // the polygons GeoJSON
                const polygons =
                {
                    "type" : "FeatureCollection",
                    "features" : []
                };

                let coordinates;
                const objects = data.IdentifiedObject;

                function symbolize (id)
                {
                    if (2 === coordinates.length)
                    {
                        let target_array = points;
                        objects[id].id = id;
                        objects[id].rotation = 0.0;

                        // assign the symbol and color
                        if ("PowerTransformer" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = transformer_symbol;
                            objects[id].color = "rgb(0, 100, 0)";
                        }
                        else if ("Fuse" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = fuse_symbol;
                            objects[id].color = "rgb(0, 0, 139)";
                        }
                        else if ("Switch" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = switch_symbol;
                            objects[id].color = "rgb(0, 0, 139)";
                        }
                        else if ("Cut" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = switch_symbol;
                            objects[id].color = "rgb(0, 0, 139)";
                        }
                        else if ("Disconnector" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = switch_symbol;
                            objects[id].color = "rgb(0, 0, 139)";
                        }
                        else if ("GroundDisconnector" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = switch_symbol;
                            objects[id].color = "rgb(0, 0, 139)";
                        }
                        else if ("Jumper" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = switch_symbol;
                            objects[id].color = "rgb(0, 0, 139)";
                        }
                        else if ("MktSwitch" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = switch_symbol;
                            objects[id].color = "rgb(0, 0, 139)";
                        }
                        else if ("ProtectedSwitch" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = switch_symbol;
                            objects[id].color = "rgb(0, 0, 139)";
                        }
                        else if ("Breaker" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = switch_symbol;
                            objects[id].color = "rgb(0, 0, 139)";
                        }
                        else if ("LoadBreakSwitch" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = switch_symbol;
                            objects[id].color = "rgb(0, 0, 139)";
                        }
                        else if ("Recloser" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = switch_symbol;
                            objects[id].color = "rgb(0, 0, 139)";
                        }
                        else if ("Sectionaliser" === objects[id].cls)
                        {
                            if (coordinates.isInternal ()) target_array = special_points;
                            objects[id].symbol = switch_symbol;
                            objects[id].color = "rgb(0, 0, 139)";
                        }
                        else if ("EnergyConsumer" === objects[id].cls)
                        {
                            if (objects[id].PSRType === "PSRType_StreetLight")
                                objects[id].symbol = street_light_symbol;
                            else
                                objects[id].symbol = energy_consumer_symbol;
                            objects[id].color = "rgb(0, 139, 139)";
                        }
                        else if ("Connector" === objects[id].cls)
                        {
                            objects[id].symbol = feeder_symbol;
                            objects[id].color = "rgb(139, 0, 0)";
                        }
                        else if ("Junction" === objects[id].cls)
                        {
                            objects[id].symbol = other_symbol;
                            objects[id].color = "rgb(139, 0, 0)";
                        }
                        else if ("BusbarSection" === objects[id].cls)
                        {
                            objects[id].symbol = junction_symbol;
                            objects[id].color = "rgb(139, 0, 0)";
                        }
                        else
                        {
                            if (data.Substation && ("undefined" != typeof (data.Substation[id])))
                            {
                                if (objects[id].PSRType === "PSRType_DistributionBox")
                                    objects[id].symbol = distribution_box_symbol;
                                else if (objects[id].PSRType === "PSRType_Substation")
                                    objects[id].symbol = substation_symbol;
                                else if (objects[id].PSRType === "PSRType_TransformerStation")
                                    objects[id].symbol = transformer_station_symbol;
                                else
                                    objects[id].symbol = substation_symbol;
                                objects[id].color = "rgb(255, 0, 255)";
                            }
                            else
                            {
                                objects[id].symbol = other_symbol;
                                objects[id].color = "rgb(0, 0, 0)";
                            }
                        }
                        target_array.features.push
                        (
                            {
                                type : "Feature",
                                geometry :
                                    {
                                        type : "Point",
                                        coordinates : [ coordinates[0], coordinates[1] ]
                                    },
                                properties : objects[id]
                            }
                        );
                    }
                    else
                    {
                        const coords = coordinates.reduce
                        (
                            function (ret, item)
                            {
                                let next;

                                next = ret[ret.length - 1];
                                if (!next || (2 <= next.length))
                                {
                                    next = [];
                                    ret.push (next);
                                }
                                next.push (item);

                                return (ret);
                            },
                            []
                        );
                        if (coordinates.isPolygon ())
                        {
                            polygons.features.push
                            (
                                {
                                    type : "Feature",
                                    geometry :
                                        {
                                            type : "Polygon",
                                            coordinates : [ coords ]
                                        },
                                    properties : objects[id]
                                }
                            );
                            objects[id].id = id;
                            objects[id].kolour = "rgb(0, 0, 255)";
                        }
                        else
                        {
                            lines.features.push
                            (
                                {
                                    type : "Feature",
                                    geometry :
                                        {
                                            type : "LineString",
                                            coordinates : coords
                                        },
                                    properties : objects[id]
                                }
                            );
                            objects[id].id = id;
                            objects[id].color = "rgb(0, 0, 0)";
                        }
                    }
                }

                for (let id in objects)
                {
                    if (objects.hasOwnProperty (id))
                    {
                        coordinates = locations[id];
                        if (coordinates)
                        {
                            // don't show deleted elements
                            if (objects[id].EditDisposition && ("delete" === objects[id].EditDisposition))
                                continue;

                            symbolize (id);
                        }
                        coordinates = locations[id + "_internal"];
                        if (coordinates)
                        {
                            // don't show deleted elements
                            if (objects[id].EditDisposition && ("delete" === objects[id].EditDisposition))
                                continue;

                            symbolize (id);
                        }
                    }
                }

                return ({ points: points, special_points: special_points, lines: lines, polygons: polygons });
            }

            /**
             * Override stylization information.
             * @param {Object} data - the hash table object of CIM classes by class name
             * @param {Object} options - options for processing
             */
            process_spatial_objects_again (data, options)
            {
                const diagram_object = data.DiagramObject;
                for (let id in diagram_object)
                {
                    if (diagram_object.hasOwnProperty (id))
                    {
                        const obj = diagram_object[id];
                        if (null != obj.DiagramObjectStyle)
                        {
                            const id = obj.IdentifiedObject;
                            if (null != id)
                            {
                                const element = data.Element[id];
                                if (null != element)
                                {
                                    if ("feeder_internally_fed_style" === obj.DiagramObjectStyle)
                                        element.color = "rgb(139, 0, 0)";
                                    else if ("feeder_externally_feed_style" === obj.DiagramObjectStyle)
                                        element.color = "rgb(255, 0, 255)";
                                    else
                                    {
                                        const style = data.DiagramObjectStyle[obj.DiagramObjectStyle];
                                        if (style)
                                            element.kolour = style.name; // e.g. yellowgreen
                                    }
                                }
                            }
                        }
                    }
                }
            }

            /**
             * @summary Gather diagram object points into diagram objects.
             * @description Convert sequences of diagram object points into locations with coordinate array.
             * As a side effect, computes the minimum bounding rectangle and stores it in TheExtents.
             * @param {object} data - the hash table object of CIM classes by class name
             * @param {object} options layer options, e.g. show_internal_features
             * @return {object} object of arrays stored by Location.id
             */
            get_locations (data, options)
            {
                const ret = {};

                const location_points = data.PositionPoint;
                const locations = data.Location;
                const diagram_points = data.DiagramObjectPoint;
                const objects = data.DiagramObject;
                const extents = { xmin: Number.MAX_VALUE, ymin: Number.MAX_VALUE, xmax: -Number.MAX_VALUE, ymax: -Number.MAX_VALUE };
                // list of locations to include from normal locations
                const whitelist = {};
                if (options.show_internal_features)
                {
                    for (let location in locations)
                        if (locations.hasOwnProperty (location)  && (locations[location].CoordinateSystem === "pseudo_wgs84"))
                            whitelist[location] = true;

                    const locs = {};
                    for (let point in location_points)
                        if (location_points.hasOwnProperty (point))
                        {
                            const p = location_points[point];
                            if (!p.EditDisposition || (p.EditDisposition !== "delete"))
                            {
                                const location = p.Location;
                                if ((null != location) && whitelist[location])
                                {
                                    if (null == locs[location])
                                    {
                                        const array = [];
                                        array.isPolygon = function () { return (false); };
                                        array.isInternal = function () { return (true); };
                                        locs[location] = array;
                                    }
                                    const seq = Number (p.sequenceNumber);
                                    if (null != seq)
                                    {
                                        const x = Number (p.xPosition);
                                        const y = Number (p.yPosition);
                                        locs[location][seq * 2] = x;
                                        locs[location][seq * 2 + 1] = y;
                                        if ((x >= -180.0) && (x <= 180.0) && (y >= -90.0) && (y <= 90.0)) // eliminate fucked up coordinates
                                        {
                                            if (x < extents.xmin)
                                                extents.xmin = x;
                                            if (x > extents.xmax)
                                                extents.xmax = x;
                                            if (y < extents.ymin)
                                                extents.ymin = y;
                                            if (y > extents.ymax)
                                                extents.ymax = y;
                                        }
                                    }
                                }
                            }
                        }

                    const objects = data.IdentifiedObject;
                    for (let id in objects)
                        if (objects.hasOwnProperty (id))
                        {
                            const loc = objects[id].Location;
                            if (loc)
                            {
                                const coordinates = locs[loc];
                                if (coordinates)
                                    ret[id + "_internal"] = coordinates;
                            }
                        }
                }

                if (diagram_points && objects)
                    for (let point in diagram_points)
                        if (diagram_points.hasOwnProperty (point))
                        {
                            const p = diagram_points[point];
                            const obj = p.DiagramObject;
                            if (null != obj)
                            {
                                const object = objects[obj];
                                if (null != object)
                                {
                                    const id = object.IdentifiedObject;
                                    if (null != id)
                                    {
                                        if (null == ret[id])
                                        {
                                            const array = [];
                                            const polygon = object.isPolygon;
                                            array.isPolygon = polygon ? function () { return (true); } : function () { return (false); };
                                            array.isInternal = function () { return (false); };
                                            ret[id] = array;
                                        }
                                        const seq = Number (p.sequenceNumber);
                                        if (null != seq)
                                        {
                                            const x = Number (p.xPosition);
                                            const y = Number (p.yPosition);
                                            ret[id][seq * 2] = x;
                                            ret[id][seq * 2 + 1] = y;
                                            if ((x >= -180.0) && (x <= 180.0) && (y >= -90.0) && (y <= 90.0)) // eliminate fucked up coordinates
                                            {
                                                if (x < extents.xmin)
                                                    extents.xmin = x;
                                                if (x > extents.xmax)
                                                    extents.xmax = x;
                                                if (y < extents.ymin)
                                                    extents.ymin = y;
                                                if (y > extents.ymax)
                                                    extents.ymax = y;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                // fix non-zero based sequence numbers
                for (let property in ret)
                    if (ret.hasOwnProperty (property))
                    {
                        const a = ret[property];
                        if (("undefined" == typeof (a[0])) && ("undefined" == typeof (a[1])))
                        {
                            ret[property] = a.slice (2);
                            ret[property].isPolygon = a.isPolygon;
                            ret[property].isInternal = a.isInternal;
                        }
                    }

                TheExtents = extents;
                return (ret);
            }

            /**
             * Create the GeoJSON for the data with the given options.
             * @param {Object} data - the hash table object of CIM classes by class name
             * @param {Object} options - options for processing
             * @return {Object} with points, lines and polygons feature collections
             */
            make_geojson (data, options)
            {
                let ret;
                if (null != data)
                {
                    const locations = this.get_locations (data, options);
                    ret = this.process_spatial_objects (data, locations, options);
                    this.process_spatial_objects_again (data, options);
                }
                else
                {
                    const fc = { "type" : "FeatureCollection", "features" : [] };
                    ret = { points: fc, special_points: fc, lines: fc, polygons: fc };
                }
                return (ret);
            }


            /**
             * Remove layers and sources from the map.
             */
            remove_theme ()
            {
                if (this._TheChart)
                {
                    this._TheMap.removeControl (this._TheChart);
                    delete this._TheChart;
                }
                if ((null != this._TheMap) && this._TheMap.getSource ("cim points"))
                {
                    this._TheMap.removeLayer ("lines");
                    this._TheMap.removeLayer ("lines_highlight");
                    this._TheMap.removeLayer ("circle");
                    this._TheMap.removeLayer ("circle_highlight");
                    this._TheMap.removeLayer ("symbol");
                    this._TheMap.removeLayer ("symbol_highlight");
                    this._TheMap.removeLayer ("polygons");
                    this._TheMap.removeSource ("cim points");
                    this._TheMap.removeSource ("cim special points");
                    this._TheMap.removeSource ("cim lines");
                    this._TheMap.removeSource ("cim polygons");
                }
                if (this._TheMap)
                {
                    this._TheMap.off ("mousedown", this._mousedown_listener);
                    this._cimmap.add_listeners ();
                }
                super.remove_theme ();
            }

            // handle mouse click
            mousedown_listener (event)
            {
                // only do something if no key is pressed
                const key = event.originalEvent.ctrlKey || event.originalEvent.shiftKey || event.originalEvent.altKey || event.originalEvent.metaKey;
                if (!key)
                {
                    const buttons = event.originalEvent.buttons;
                    //    0  : No button or un-initialized
                    //    1  : Primary button (usually left)
                    //    2  : Secondary button (usually right)
                    const leftbutton = 0 !== (buttons & 1);
                    const rightbutton = 0 !== (buttons & 2);
                    if (leftbutton)
                        this._cimmap.default_mousedown_listener (event);
                }
            }

            clear ()
            {
                const fc = { type: "FeatureCollection", features: [] };
                this._TheMap.getSource ("cim points").setData (fc);
                this._TheMap.getSource ("cim special points").setData (fc);
                this._TheMap.getSource ("cim lines").setData (fc);
                this._TheMap.getSource ("cim polygons").setData (fc);
            }

            /**
             * Add sources and layers to the map.
             * @param {Object} cimmap - the CIM map object
             * @param {Object} options - object with rendering options, e.g.
             *   show_internal_features flag - render internal features
             */
            make_theme (cimmap, options)
            {
                const start = new Date ().getTime ();
                console.log ("rendering diagram data");

                this._cimmap = cimmap;
                const map = cimmap.get_map ();
                this._TheMap = map; // to be able to remove it later

                const geo = this.make_geojson (cimmap.get_data (), options);

                // update the map
                map.addSource
                (
                    "cim points",
                    {
                        type: "geojson",
                        data: geo.points,
                        maxzoom: 24
                    }
                );

                map.addSource
                (
                    "cim special points",
                    {
                        type: "geojson",
                        data: geo.special_points,
                        maxzoom: 24
                    }
                );

                map.addSource
                (
                    "cim lines",
                    {
                        type: "geojson",
                        data: geo.lines,
                        maxzoom: 24
                    }
                );

                map.addSource
                (
                    "cim polygons",
                    {
                        type: "geojson",
                        data: geo.polygons,
                        maxzoom: 24
                    }
                );

                // lines 3 pixels wide
                // note: really weird shit starts happening if the property name is "color", so use "kolour" instead
                map.addLayer (layers.line_layer ("lines", "cim lines", { type: "identity", property: "kolour" }, ["!has", "EditDisposition"]));
                map.addLayer (layers.line_layer ("lines_highlight", "cim lines", "rgb(255, 255, 0)", ["==", "mRID", ""]));

                // simple circle
                map.addLayer (layers.full_circle_layer ("circle", "cim points", { type: "identity", property: "color" }, ["!has", "EditDisposition"]));
                map.addLayer (layers.full_circle_layer ("circle_highlight", "cim points", "rgb(255, 255, 0)", ["==", "mRID", ""]));

                // symbol icon from 17 and deeper
                map.addLayer (layers.symbol_layer ("symbol", "cim special points", { type: "identity", property: "color" }, ["!has", "EditDisposition"], true));
                map.addLayer (layers.symbol_layer ("symbol_highlight", "cim special points", "rgb(255, 255, 0)", ["==", "mRID", ""], true));

                map.addLayer (layers.polygon_layer ("polygons", "cim polygons", { type: "identity", property: "kolour" }, "#000000"));

                // set the current filter
                this.legend_changed ();

                const end = new Date ().getTime ();
                console.log ("finished rendering diagram data (" + (Math.round (end - start) / 1000) + " seconds)");

                if (this._render_listener)
                    this._render_listener ();

                this._cimmap.remove_listeners ();
                this._mousedown_listener = this.mousedown_listener.bind (this);
                this._TheMap.on ("mousedown", this._mousedown_listener);
            }

            setRenderListener (fn)
            {
                this._render_listener = fn;
            }
        }

        return (DiagramTheme);
    }
);
