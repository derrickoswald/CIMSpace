/**
 * Map themes control for CIM Application
 */
"use strict";

define
(
    [],
    /**
     * @summary Theme control.
     * @description UI element for theming.
     * @name cimthemes
     * @exports cimthemes
     * @version 1.0
     */
    function ()
    {
        /**
         * symbology
         */
        var junction_symbol = "alternate_junction";
        var connector_symbol = "connector";
        var distribution_box_symbol = "distribution_box";
        var energy_consumer_symbol = "energy_consumer";
        var fuse_symbol = "fuse";
        var other_symbol = "junction";
        var street_light_symbol = "street_light";
        var substation_symbol = "substation";
        var switch_symbol = "switch";
        var transformer_station_symbol = "transformer_station";
        var transformer_symbol = "transformer";

        var TheExtents;

        /**
         * Create a line layer object.
         * @param {String} id - the layer id
         * @param {String} color - the line color
         * @param {Any[]} filter - optional filter to apply to the lines
         * @returns {Object} the layer
         * @function line_layer
         * @memberOf module:cimthemes
         */
        function line_layer (id, color, filter)
        {
            var ret =
                {
                    id: id,
                    type: "line",
                    source: "cim lines",
                    layout:
                    {
                        "line-join": "round",
                        "line-cap": "round"
                    },
                    paint:
                    {
                        "line-color": color,
                        "line-width": 3
                    }
                };
            if ("undefined" != typeof (filter) && (null != filter))
                ret.filter = filter;

            return (ret);
        }

        /**
         * Create a circle layer object.
         * @param {String} id - the layer id
         * @param {String} color - the symbol color
         * @param {Any[]} filter - optional filter to apply to the points
         * @returns {Object} the layer
         * @function circle_layer
         * @memberOf module:cimthemes
         */
        function circle_layer (id, color, filter)
        {
            var ret =
                {
                    id: id,
                    type: "circle",
                    source: "cim points",
                    minzoom: 14,
                    maxzoom: 17,
                    paint:
                    {
                        "circle-radius": 5, // Optional number. Units in pixels. Defaults to 5.
                        "circle-color": color, // Optional color. Defaults to #000000.
                        "circle-blur": 0, // Optional number. Defaults to 0. 1 blurs the circle such that only the centerpoint is full opacity.
                        "circle-opacity": 1, // Optional number. Defaults to 1.
                        "circle-translate": [0, 0], // Optional array. Units in pixels. Defaults to 0,0. Values are [x, y] where negatives indicate left and up, respectively.
                        "circle-translate-anchor": "map", // Optional enum. One of map, viewport. Defaults to map. Requires circle-translate.
                    }
                };
            if ("undefined" != typeof (filter) && (null != filter))
                ret.filter = filter;

            return (ret);
        }

        /**
         * Create a symbol layer object.
         * @param {String} id - the layer id
         * @param {String} color - the symbol color
         * @param {Any[]} filter - optional filter to apply to the points
         * @returns {Object} the layer
         * @function symbol_layer
         * @memberOf module:cimthemes
         */
        function symbol_layer (id, color, filter)
        {
            var ret =
                {
                    id: id,
                    type: "symbol",
                    source: "cim points",
                    minzoom: 17,
                    interactive: true,
                    layout:
                    {
                        "icon-image": "{symbol}",
                        "icon-allow-overlap": true,
                        "icon-size":
                        {
                            stops: [[17, 0.1875], [18, 0.25], [19, 0.3], [20, 0.45], [21, 0.9], [22, 1.8], [23, 3.75], [24, 7.5], [25, 10.0]]
                        },
                        "icon-rotate": 0.0,
                        "icon-offset": [0, 0],
                        "text-field": "{name}",
                        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                        "text-offset":
                        {
                            stops: [[18, [0, 1.0]], [20, [0, 2.0]], [21, [0, 3.0]], [22, [0, 4.0]], [23, [0, 5.0]], [24, [0, 6.0]], [25, [0, 7.0]]]
                        },
                        "text-anchor": "top",
                        "text-allow-overlap": true,
                        "text-size":
                        {
                            stops: [[17, 4], [18, 8], [19, 12], [20, 14], [21, 18], [22, 24], [23, 30], [24, 38], [25, 48]]
                        }
                    },
                    paint:
                    {
                        "icon-color": color,
                        "text-color": color
                    }
                };
            if ("undefined" != typeof (filter) && (null != filter))
                ret.filter = filter;

            return (ret);
        }


        /**
         * @summary Gather position points into locations.
         * @description Convert sequences of position points into locations with coordinate array.
         * As a side effect, computes the minimum bounding rectangle and stores it in TheExtents.
         * @param {object} points PositionPoint objects stored by id (real or generated)
         * @param {object} locations Location objects stored by id (real or generated)
         * @return {object} object of arrays stored by Location.id
         * @function get_locations
         * @memberOf module:cimthemes
         */
        function get_locations (data, options)
        {
            var points = data.PositionPoint;
            var locations = data.Location;
            // list of locations to exclude
            var blacklist = {};
            var extents = { xmin: Number.MAX_VALUE, ymin: Number.MAX_VALUE, xmax: -Number.MAX_VALUE, ymax: -Number.MAX_VALUE };
            var ret = {};

            if (!options.show_internal_features)
            {
                for (var location in locations)
                {
                    var l = locations[location];
                    if (l.CoordinateSystem != "wgs84")
                        blacklist[location] = true;
                }
            }
            for (var point in points)
            {
                var p = points[point];
                var location = p.Location;
                if ((null != location) && ("undefined" == typeof (blacklist[location])))
                {
                    if (null == ret[location])
                        ret[location] = [];
                    var seq = p.sequenceNumber;
                    if (null != seq)
                    {
                        var x = Number (p.xPosition);
                        var y = Number (p.yPosition);
                        ret[location][seq * 2] = x;
                        ret[location][seq * 2 + 1] = y;
                        if ((x >= -180.0) && (x <= 180.0)) // eliminate fucked up coordinates
                        {
                            if (x < extents.xmin)
                                extents.xmin = x;
                            if (x > extents.xmax)
                                extents.xmax = x;
                        }
                        if ((y >= -90.0) && (y <= 90.0))
                        {
                            if (y < extents.ymin)
                                extents.ymin = y;
                            if (y > extents.ymax)
                                extents.ymax = y;
                        }
                    }
                }
            }

            TheExtents = extents;
            return (ret);
        }

        class DefaultTheme
        {
            constructor()
            {
            }

            getName ()
            {
                return ("DefaultTheme");
            }

            getTitle ()
            {
                return ("Default");
            }

            getDescription ()
            {
                return ("Equipment colored by function.");
            }

            /**
             * Add stylization information to elements and make a list of point and linear features.
             * @param {Object} psr - the hash table object with properties that are (PowerSystemResource) elements keyed by mRID.
             * @param {Object} locations - the hash table object with properties that are locations with arrays of coordinates.
             * @param {Object} points - the resultant list of point GeoJSON objects.
             * @param {Object} lines - the resultant list of linear GeoJSON objects.
             * @function process_spatial_objects
             * @memberOf module:cimmap
             */
            process_spatial_objects (data, locations, points, lines)
            {
                var coordinates;
                var location;
                var psr = data.PowerSystemResource
                for (var id in psr)
                {
                    if (null != (location = psr[id].Location))
                    {
                        if (null != (coordinates = locations[location]))
                        {
                            if (2 == coordinates.length)
                            {
                                points.features.push
                                (
                                    {
                                        type : "Feature",
                                        geometry :
                                        {
                                            type : "Point",
                                            coordinates : [ coordinates[0], coordinates[1] ]
                                        },
                                        properties : psr[id]
                                    }
                                );
                                psr[id].id = id;
                                psr[id].orientation = 0.0;

                                // assign the symbol and color
                                if ("PowerTransformer" == psr[id].cls)
                                {
                                    psr[id].symbol = transformer_symbol;
                                    psr[id].color = "rgb(0, 100, 0)";
                                }
                                else if ("Fuse" == psr[id].cls)
                                {
                                    psr[id].symbol = fuse_symbol;
                                    psr[id].color = "rgb(0, 0, 139)";
                                }
                                else if ("undefined" != typeof (psr[id].normalOpen)) // all switches have this attribute
                                {
                                    psr[id].symbol = switch_symbol;
                                    psr[id].color = "rgb(0, 0, 139)";
                                }
                                else if ("EnergyConsumer" == psr[id].cls)
                                {
                                    if (psr[id].PSRType == "PSRType_StreetLight")
                                        psr[id].symbol = street_light_symbol;
                                    else
                                        psr[id].symbol = energy_consumer_symbol;
                                    psr[id].color = "rgb(0, 139, 139)";
                                }
                                else if ("Connector" == psr[id].cls)
                                {
                                    psr[id].symbol = connector_symbol;
                                    psr[id].color = "rgb(139, 0, 0)";
                                }
                                else if ("Junction" == psr[id].cls)
                                {
                                    psr[id].symbol = other_symbol;
                                    psr[id].color = "rgb(139, 0, 0)";
                                }
                                else if ("BusbarSection" == psr[id].cls)
                                {
                                    psr[id].symbol = junction_symbol;
                                    psr[id].color = "rgb(139, 0, 0)";
                                }
                                else
                                {
                                    if ("undefined" != typeof (data.Substation[id]))
                                    {
                                        if (psr[id].PSRType == "PSRType_DistributionBox")
                                            psr[id].symbol = distribution_box_symbol;
                                        else if (psr[id].PSRType == "PSRType_Substation")
                                            psr[id].symbol = substation_symbol;
                                        else if (psr[id].PSRType == "PSRType_TransformerStation")
                                            psr[id].symbol = transformer_station_symbol;
                                        else
                                            psr[id].symbol = other_symbol;
                                        psr[id].color = "rgb(255, 0, 255)";
                                    }
                                    else
                                    {
                                        psr[id].symbol = other_symbol;
                                        psr[id].color = "rgb(0, 0, 0)";
                                    }
                                }
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
                                            coordinates : coordinates.reduce
                                            (
                                                function (ret, item)
                                                {
                                                    var next;

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
                                            )
                                        },
                                        properties : psr[id]
                                    }
                                );
                                psr[id].id = id;
                            }
                        }
                    }
                }
            }

            // remove layer data
            remove_theme (map)
            {

                if (this._TheMap.getSource ("cim lines"))
                {
                    this._TheMap.removeLayer ("lines");
                    this._TheMap.removeLayer ("lines_highlight");
                    this._TheMap.removeLayer ("circle");
                    this._TheMap.removeLayer ("circle_highlight");
                    this._TheMap.removeLayer ("symbol");
                    this._TheMap.removeLayer ("symbol_highlight");
                    this._TheMap.removeSource ("cim lines");
                    this._TheMap.removeSource ("cim points");
                }
            }

            make_theme (map, data, options)
            {
                this._TheMap = map; // to be able to remove it later
                var locations = get_locations (data, options);

                // the lines GeoJSON
                var lines =
                {
                    "type" : "FeatureCollection",
                    "features" : []
                };
                // the points GeoJSON
                var points =
                {
                    "type" : "FeatureCollection",
                    "features" : []
                };
                this.process_spatial_objects (data, locations, points, lines);


                // update the map
                map.addSource
                (
                    "cim lines",
                    {
                        type: "geojson",
                        data: lines,
                        maxzoom: 25
                    }
                );

                map.addSource
                (
                    "cim points",
                    {
                        type: "geojson",
                        data: points,
                        maxzoom: 25
                    }
                );

                // lines 3 pixels wide
                map.addLayer (line_layer ("lines", "#000"));
                map.addLayer (line_layer ("lines_highlight", "rgb(255, 255, 0)", ["==", "mRID", ""]));

                // simple circle from 14 to 17
                map.addLayer (circle_layer ("circle", { type: "identity", property: "color" }))
                map.addLayer (circle_layer ("circle_highlight", "rgb(255, 255, 0)", ["==", "mRID", ""]))

                // symbol icon from 17 and deeper
                map.addLayer (symbol_layer ("symbol", { type: "identity", property: "color" }));
                map.addLayer (symbol_layer ("symbol_highlight", "rgb(255, 255, 0)", ["==", "mRID", ""]));
            }
        }

        class VoltageTheme
        {
            constructor()
            {
            }

            getName ()
            {
                return ("VoltageTheme");
            }

            getTitle ()
            {
                return ("Nominal voltage");
            }

            getDescription ()
            {
                return ("Equipment and cables colored by nominal voltage.");
            }

            /**
             * Add stylization information to elements and make a list of point and linear features.
             * @param {Object} psr - the hash table object with properties that are (PowerSystemResource) elements keyed by mRID.
             * @param {Object} locations - the hash table object with properties that are locations with arrays of coordinates.
             * @param {Object} points - the resultant list of point GeoJSON objects.
             * @param {Object} lines - the resultant list of linear GeoJSON objects.
             * @function process_spatial_objects
             * @memberOf module:cimmap
             */
            process_spatial_objects (data, locations, points, lines)
            {
                var coordinates;
                var location;
                var colormap = {
                    BaseVoltage_Unknown: "rgb(0, 0, 0)",
	                BaseVoltage_0: "rgb(0, 0, 0)",
	                BaseVoltage_230: "rgb(0, 139, 0)",
	                BaseVoltage_400: "rgb(0, 0, 139)",
	                BaseVoltage_1000: "rgb(0, 139, 139)",
	                BaseVoltage_12000: "rgb(139, 139, 0)",
	                BaseVoltage_16000: "rgb(139, 0, 0)",
	                BaseVoltage_20000: "rgb(139, 0, 139)",
	                BaseVoltage_50000: "rgb(255, 0, 0)",
	                BaseVoltage_132000: "rgb(255, 0, 255)",
	                BaseVoltage_220000: "rgb(0, 255, 255)",
	                BaseVoltage_380000: "rgb(255, 255, 255)"
                };

                var psr = data.PowerSystemResource
                for (var id in psr)
                {
                    if (null != (location = psr[id].Location))
                    {
                        if (null != (coordinates = locations[location]))
                        {
                            psr[id].color = colormap[psr[id].BaseVoltage];
                            if ("undefined" == typeof (psr[id].color))
                                psr[id].color = "rgb(0, 0, 0)";

                            if (2 == coordinates.length)
                            {
                                points.features.push
                                (
                                    {
                                        type : "Feature",
                                        geometry :
                                        {
                                            type : "Point",
                                            coordinates : [ coordinates[0], coordinates[1] ]
                                        },
                                        properties : psr[id]
                                    }
                                );
                                psr[id].id = id;
                                psr[id].orientation = 0.0;

                                // assign the symbol and color
                                if ("PowerTransformer" == psr[id].cls)
                                    psr[id].symbol = transformer_symbol;
                                else if ("Fuse" == psr[id].cls)
                                    psr[id].symbol = fuse_symbol;
                                else if ("undefined" != typeof (psr[id].normalOpen)) // all switches have this attribute
                                    psr[id].symbol = switch_symbol;
                                else if ("EnergyConsumer" == psr[id].cls)
                                {
                                    if (psr[id].PSRType == "PSRType_StreetLight")
                                        psr[id].symbol = street_light_symbol;
                                    else
                                        psr[id].symbol = energy_consumer_symbol;
                                }
                                else if ("Connector" == psr[id].cls)
                                    psr[id].symbol = connector_symbol;
                                else if ("Junction" == psr[id].cls)
                                    psr[id].symbol = other_symbol;
                                else if ("BusbarSection" == psr[id].cls)
                                    psr[id].symbol = junction_symbol;
                                else
                                {
                                    if ("undefined" != typeof (data.Substation[id]))
                                    {
                                        if (psr[id].PSRType == "PSRType_DistributionBox")
                                            psr[id].symbol = distribution_box_symbol;
                                        else if (psr[id].PSRType == "PSRType_Substation")
                                            psr[id].symbol = substation_symbol;
                                        else if (psr[id].PSRType == "PSRType_TransformerStation")
                                            psr[id].symbol = transformer_station_symbol;
                                        else
                                            psr[id].symbol = other_symbol;
                                    }
                                    else
                                        psr[id].symbol = other_symbol;
                                }
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
                                            coordinates : coordinates.reduce
                                            (
                                                function (ret, item)
                                                {
                                                    var next;

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
                                            )
                                        },
                                        properties : psr[id]
                                    }
                                );
                                psr[id].id = id;
                            }
                        }
                    }
                }
            }

            // remove layer data
            remove_theme (map)
            {

                if (this._TheMap.getSource ("cim lines"))
                {
                    this._TheMap.removeLayer ("lines");
                    this._TheMap.removeLayer ("lines_highlight");
                    this._TheMap.removeLayer ("circle");
                    this._TheMap.removeLayer ("circle_highlight");
                    this._TheMap.removeLayer ("symbol");
                    this._TheMap.removeLayer ("symbol_highlight");
                    this._TheMap.removeSource ("cim lines");
                    this._TheMap.removeSource ("cim points");
                }
            }

            make_theme (map, data, options)
            {
                this._TheMap = map; // to be able to remove it later
                var locations = get_locations (data, options);

                // the lines GeoJSON
                var lines =
                {
                    "type" : "FeatureCollection",
                    "features" : []
                };
                // the points GeoJSON
                var points =
                {
                    "type" : "FeatureCollection",
                    "features" : []
                };
                this.process_spatial_objects (data, locations, points, lines);


                // update the map
                map.addSource
                (
                    "cim lines",
                    {
                        type: "geojson",
                        data: lines,
                        maxzoom: 25
                    }
                );

                map.addSource
                (
                    "cim points",
                    {
                        type: "geojson",
                        data: points,
                        maxzoom: 25
                    }
                );

                // lines 3 pixels wide
                map.addLayer (line_layer ("lines", { type: "identity", property: "color" }));
                map.addLayer (line_layer ("lines_highlight", "rgb(255, 255, 0)", ["==", "mRID", ""]));

                // simple circle from 14 to 17
                map.addLayer (circle_layer ("circle", { type: "identity", property: "color" }))
                map.addLayer (circle_layer ("circle_highlight", "rgb(255, 255, 0)", ["==", "mRID", ""]))

                // symbol icon from 17 and deeper
                map.addLayer (symbol_layer ("symbol", { type: "identity", property: "color" }));
                map.addLayer (symbol_layer ("symbol_highlight", "rgb(255, 255, 0)", ["==", "mRID", ""]));
            }
        }

        class ThemeControl
        {
            constructor()
            {
                this._onMap = false;
                this._themes = [new DefaultTheme (), new VoltageTheme ()];
                this._themer = this._themes[0];
                this._template =
                "<div class='well'>\n" +
                "  <h3>Themes</h3>\n";
                for (var i = 0; i < this._themes.length; i++) // where is mustache when you need it
                {
                    var name = this._themes[i].getName ();
                    var title = this._themes[i].getTitle ();
                    var description = this._themes[i].getDescription ();
                    this._template = this._template +
                        "  <div class='form-check'>\n" +
                        "    <label class='form-check-label'>\n" +
                        "      <input id='" + name + "' class='form-check-input' type='radio' name='themeRadios' value='" + name + "' aria-describedby='" + name + "Description'>\n" +
                        "      " + title + "\n" +
                        "    </label>\n" +
                        "  </div>\n" +
                        "  <em><small id='" + name + "Description' class='form-text text-muted'>\n" +
                        "    " + description + "\n" +
                        "  </small></em>\n";
                }
                this._template = this._template + "</div>\n";
            }

            onAdd (map)
            {
                this._map = map;
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl";
                this._container.innerHTML = this._template;
                var current = this._themer.getName ();
                var list = this._container.getElementsByTagName ("input")
                for (var i = 0; i < list.length; i++)
                    if (current == list[i].value)
                        list[i].setAttribute ("checked", "checked");
                for (var i = 0; i < list.length; i++)
                    list[i].onchange = this.theme_change.bind (this);
                this._onMap = true;
                return this._container;
            }

            onRemove ()
            {
                this._container.parentNode.removeChild (this._container);
                this._map = undefined;
                this._onMap = false;
            }

            getDefaultPosition ()
            {
                return ("bottom-right");
            }

            visible ()
            {
                return (this._onMap);
            }

            theme_change (event)
            {
                this._themer.remove_theme ();
                var name = event.target.value;
                for (var i = 0; i < this._themes.length; i++)
                    if (name == this._themes[i].getName ())
                    {
                        this._themer = this._themes[i];
                        break;
                    }
                if (this._theme_listener)
                    this._theme_listener ();
            }

            theme_change_listener (fn)
            {
                this._theme_listener = fn;
            }

            theme (map, data, options)
            {
                this._themer.make_theme (map, data, options);
            }

            getExtents ()
            {
                return (TheExtents);
            }
        }

        return (
            {
                ThemeControl: ThemeControl
            }
        );
    }
)