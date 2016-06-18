/**
 * Main javascript file for CIMSpace application
 */
"use strict";
requirejs
(
    ["es6-promise", "cim"],
    /**
     * @summary Main entry point for the application.
     * @description Performs application initialization as the first step in the RequireJS load sequence.
     * @see http://requirejs.org/docs/api.html#data-main
     * @name cimspace
     * @exports cimspace
     * @version 1.0
     */
    function (es6_promise, cim)
    {
        /**
         * The map object.
         * @see https://www.mapbox.com
         */
        var TheMap = null;

        /**
         * The user specific token to access mapbox tiles.
         */
        var TheToken = "pk.eyJ1IjoiZGVycmlja29zd2FsZCIsImEiOiJjaWV6b2szd3MwMHFidDRtNDZoejMyc3hsIn0.wnEkePEuhYiNcXDLACSxVw";

        // using Promise: backwards compatibility for older browsers
        es6_promise.polyfill ();

        /**
         * @summary Count the resource entries.
         * @description Cycle through the resource object and check they are valid.
         * @param {Object} resources - the resource object (like a big hash table) of power system resources
         * @param {Object} connections - the connections object (like a big hash table) of connection nodes
         * @return {Number} the number of resource entries
         * @function count_resources
         * @memberOf module:cimspace
         */
        function count_resources (resources, connections)
        {
            var ret;

            ret = 0;
            for (var property in resources)
                if (resources.hasOwnProperty (property))
                {
                    if (!resources[property].name && !(0 == property.indexOf ("_location_")))
                        console.log (property + " has no name");
                    if (0 == property.indexOf ("_substation"))
                    {
                        if (!resources[property].contents)
                            console.log (property + " has no contents");
                        else
                            if (0 == resources[property].contents.length)
                                console.log (property + " contents has zero length");
                    }
                    if (0 == property.indexOf ("_terminal"))
                    {
                        if (null != resources[property].node)
                        {
                            if (null == connections[resources[property].node])
                                console.log (property + " has unknown node " + resources[property].node);
                        }
                        else
                            console.log (property + " has no node");
                    }
                    ret++;
                }

            return (ret);
        }

        /**
         * @summary Count the connections.
         * @description Cycle through the connection object and check they are valid.
         * @param {Object} connections - the connections object (like a big hash table) of connection nodes
         * @return {Number} the number of connection entries
         * @function count_connections
         * @memberOf module:cimspace
         */
        function count_connections (connections)
        {
            var ret;

            ret = 0;
            for (var property in connections)
                if (connections.hasOwnProperty (property))
                {
                    if (!connections[property].container)
                        console.log (property + " has no container");
                    if (!connections[property].name)
                        console.log (property + " has no name");
                    ret++;
                }

            return (ret);
        }

        /**
         * Get the user's choice for vector/image tiles.
         * @returns {boolean} <code>true</code> if vector tiles should be used, <code>false</code> otherwise
         * @function do_vector_tiles
         * @memberOf module:cimspace
         */
        function do_vector_tiles ()
        {
            return (document.getElementById ("vector_tiles").checked && mapboxgl.supported ());
        }

        /**
         * Create a circle layer object.
         * @param {String} id - the layer id
         * @param {Any[]} filter - the filter to apply to the points
         * @param {String} color - the symbol color to use (doesn't work)
         * @returns {Object} the layer
         * @function circle_layer
         * @memberOf module:cimspace
         */
        function circle_layer (id, filter, color)
        {
            return (
                {
                    id: id,
                    type: "circle",
                    source: "the cim points",
                    minzoom: 14,
                    maxzoom: 17,
                    filter: filter,
                    paint:
                    {
                        "circle-radius": 5, // Optional number. Units in pixels. Defaults to 5.
                        "circle-color": color, // Optional color. Defaults to #000000.
                        "circle-blur": 0, // Optional number. Defaults to 0. 1 blurs the circle such that only the centerpoint is full opacity.
                        "circle-opacity": 1, // Optional number. Defaults to 1.
                        "circle-translate": [0, 0], // Optional array. Units in pixels. Defaults to 0,0. Values are [x, y] where negatives indicate left and up, respectively.
                        "circle-translate-anchor": "map", // Optional enum. One of map, viewport. Defaults to map. Requires circle-translate.
                    }
                }
            );
        }

        /**
         * Create a symbol layer object.
         * @param {String} id - the layer id
         * @param {Any[]} filter - the filter to apply to the points
         * @param {String} symbol - the symbol name
         * @param {Number} orientation - the symbol orientation
         * @param {Number[]} offset - the symbol offset
         * @param {String} color - the symbol color (doesn't work)
         * @returns {Object} the layer
         * @function symbol_layer
         * @memberOf module:cimspace
         */
        function symbol_layer (id, filter, symbol, orientation, offset, color)
        {
            //console.log (id + " " + JSON.stringify (filter, null, 4));
            return (
                {
                    id: id,
                    type: "symbol",
                    source: "the cim points",
                    minzoom: 17,
                    filter: filter,
                    interactive: true,
                    layout:
                    {
                        "icon-image": symbol,
                        "icon-color": color,
                        "icon-allow-overlap": true,
                        "icon-size":
                        {
                            stops: [[17, 1], [18, 1], [19, 1.2], [20, 1.4], [21, 1.6], [22, 1.8], [23, 2], [24, 2.2], [25, 2.4]]
                        },
                        "icon-rotate": orientation,
                        "icon-offset": offset,
                        "text-field": "{name}",
                        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                        "text-offset": [0, 1],
                        "text-anchor": "top",
                        "text-allow-overlap": true,
                        "text-size":
                        {
                            stops: [[17, 4], [18, 8], [19, 12], [20, 14], [21, 18], [22, 24], [23, 30], [24, 38], [25, 48]]
                        }
                    }
                }
            );

        }

        /**
         * Generate a map.
         * @param {Object} points - the points GeoJSON
         * @param {Object} lines - the lines GeoJSON
         * @function make_map
         * @memberOf module:cimspace
         */
        function make_map (points, lines)
        {
            var mapbox_classic;

            // update the map
            mapbox_classic = !do_vector_tiles ();
            if (mapbox_classic)
            {
                var l = L.mapbox.featureLayer (lines);
                l.addTo (TheMap);
                var p = L.mapbox.featureLayer (points);
                p.addTo (TheMap);
            }
            else
            {
                TheMap.addSource
                (
                    "the cim lines",
                    {
                        type: "geojson",
                        data: lines,
                        maxzoom: 25
                    }
                );

                TheMap.addSource
                (
                    "the cim points",
                    {
                        type: "geojson",
                        data: points,
                        maxzoom: 25
                    }
                );

                TheMap.addLayer
                (
                    {
                        id: "lines",
                        type: "line",
                        source: "the cim lines",
                        filter: ["==", "generated", false],
                        layout:
                        {
                            "line-join": "round",
                            "line-cap": "round"
                        },
                        paint:
                        {
                            "line-color": "#000",
                            "line-width": 3
                        }
                    }
                );

                TheMap.addLayer
                (
                    {
                        id: "generated_lines",
                        type: "line",
                        source: "the cim lines",
                        filter: ["==", "generated", true],
                        layout:
                        {
                        },
                        paint:
                        {
                            "line-color": "#555555",
                            "line-width": 1
                        }
                    }
                );

                // simple circle from 14 to 17
                TheMap.addLayer (circle_layer ("circle_transformer", ["==", "symbol", "transformer"], "rgb(0, 255, 0)"));
                TheMap.addLayer (circle_layer ("circle_switch", ["==", "symbol", "switch"], "rgb(0, 0, 255)"));
                TheMap.addLayer (circle_layer ("circle_house_connection", ["==", "symbol", "house_connection"], "rgb(255, 0, 0)"));
                TheMap.addLayer (circle_layer ("circle_other", ["==", "symbol", "monument-24"], "black"));

                // symbol icon from 17 and deeper
//                var increment = 5.0;
//                for (var orientation = 0; orientation < 360.0; orientation += increment)
//                    TheMap.addLayer (symbol_layer ("symbol_" + orientation, ["all", ["==", "symbol", "house_connection"], [">=", "orientation", (orientation - (increment / 2.0))], ["<", "orientation", (orientation + (increment / 2.0))]], "{symbol}", orientation, [0, 12], "{color}"));
                TheMap.addLayer (symbol_layer ("symbol_house_connection", ["==", "symbol", "house_connection"], "{symbol}", 0.0, [0, 0], "{color}"));

                // don't rotate others
                TheMap.addLayer (symbol_layer ("symbol_other", ["!=", "symbol", "house_connection"], "{symbol}", 0.0, [0, 0], "{color}"));
            }
        }

        function process_spatial_objects (psr, locations, points, lines)
        {
            var coordinates;
            var location;
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
                            // assign the symbol
                            if (0 == psr[id].name.indexOf ("TRA"))
                            {
                                psr[id].symbol = "transformer";
                                psr[id].color = "rgb(0, 255, 0)";
                            }
                            else if (0 == psr[id].name.indexOf ("TEI"))
                            {
                                psr[id].symbol = "switch";
                                psr[id].color = "rgb(0, 0, 255)";
                            }
                            else if (0 == psr[id].name.indexOf ("HAS"))
                            {
                                psr[id].symbol = "house_connection";
                                psr[id].color = "rgb(255, 0, 0)";
                            }
                            else
                            {
                                psr[id].symbol = "monument-24";
                                psr[id].color = "rgb(255, 255, 255)";
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
//                                    {
//                                        id : id
//                                    }
                                }
                            );
                            psr[id].id = id;
                            psr[id].generated = (null == psr[id].name) ? false : (0 == psr[id].name.indexOf ("_generated"));
                        }
                    }
                }
            }
        }

        /**
         * @summary Handler for file change events.
         * @description Process files from the browse dialog.
         * @param {File[]} files - the list of files
         * @function file_change
         * @memberOf module:cimspace
         */
        function process_files (files)
        {
            if (1 == files.length)
            {
                var start = new Date ().getTime ();
                console.log ("starting XML read");
                cim.read_xml_blob
                (
                    files[0],
                    function (result)
                    {
                        var locations;
                        var pp;
                        var location;
                        var lines =
                        {
                            "type" : "FeatureCollection",
                            "features" : []
                        };
                        var points =
                        {
                            "type" : "FeatureCollection",
                            "features" : []
                        };

                        var end = new Date ().getTime ();
                        console.log ("finished XML read (" + (Math.round (end - start) / 1000) + " seconds)");

                        // gather position points into locations
                        locations = {};
                        pp = result.parsed.PositionPoint;
                        for (var point in pp)
                        {
                            var p = pp[point];
                            location = p.Location;
                            if (null != location)
                            {
                                if (null == locations[location])
                                    locations[location] = [];
                                var seq = p.sequenceNumber;
                                if (null != seq)
                                {
                                    locations[location][seq * 2] = p.xPosition;
                                    locations[location][seq * 2 + 1] = p.yPosition;
                                }
                            }
                        }

                        process_spatial_objects (result.parsed.PowerSystemResource, locations, points, lines);
                        make_map (points, lines);
                    }
                );
            }
            else
                for (var i = 0; i < files.length; i++)
                {
                    var file = files[i];
                    var name = file.name;
                    var extension = name.substring (name.length - Math.min (4, name.length)).toLowerCase ();
                    var self = this;
                    if (".xml" == extension)
                    {
                        var start = new Date ().getTime ();
                        console.log ("starting XML read");
                        cim.read_xml_blob
                        (
                            file,
                            function (result)
                            {
                                var end = new Date ().getTime ();
                                console.log ("finished XML read (" + (Math.round (end - start) / 1000) + " seconds)");
                            }
                        );
                        break;
                    }
                }
        }

        /**
         * @summary Close the file dialog.
         * @description Hide the modal dialog.
         * @function close_file_modal
         * @memberOf module:cimspace
         */
        function close_file_modal ()
        {
            //var modal = document.getElementById ("file_modal").onchange = file_change;
            $ ("#file_modal").modal("hide");
        }

        /**
         * @summary Handler for file change events.
         * @description Process files from the browse dialog.
         * @param {object} event - the file change event
         * @function file_change
         * @memberOf module:cimspace
         */
        function file_change (event)
        {
            close_file_modal ();
            process_files (event.target.files);
        }

        /**
         * @summary Event handler for dropped files.
         * @description Attached to the drop target, this handler responds to dropped files.
         * @param {object} event - the drop event
         * @memberOf module:cimspace
         */
        function file_drop (event)
        {
            event.stopPropagation ();
            event.preventDefault ();
            close_file_modal ();
            process_files (event.dataTransfer.files);
        }

        /**
         * @summary Event handler for dragging files.
         * @description Attached to the drop target, this handler simply modifies the effect to copy,
         * (which produces the typical hand cursor).
         * @param {object} event - the dragover event
         * @memberOf module:cimspace
         */
        function file_drag (event)
        {
            event.stopPropagation ();
            event.preventDefault ();
            event.dataTransfer.dropEffect = 'copy';
        }

        /**
         * @summary Initialize the map.
         * @description Create the background map.
         * @param {object} event - optional, the vector tile checkbox change event
         * @function init_map
         * @memberOf module:cimspace
         */
        function init_map (event)
        {
            var mapbox_classic = !do_vector_tiles ();

            document.getElementById ("map").innerHTML = "";
            if (mapbox_classic)
            {
                L.mapbox.accessToken = TheToken;
                TheMap = L.mapbox.map ("map", "derrickoswald.ciezok3nc00ovsvlth7rs7tcz").setView([46.93003, 7.48634000000001], 9);
            }
            else
            {
                mapboxgl.accessToken = TheToken;
                TheMap = new mapboxgl.Map
                (
                    {
                        name: "TheMap",
                        version: 8,
                        container: "map",
                        center: [7.48634000000001, 46.93003],
                        zoom: 9,
                        maxZoom: 25,
                        //style: "mapbox://styles/mapbox/streets-v8",
                        style: "styles/streets-v8.json",
                        hash: true
                    }
                );
                // add zoom and rotation controls to the map.
                TheMap.addControl (new mapboxgl.Navigation ());
                // handle mouse movement
                var last = null;
                TheMap.on
                (
                    'mousemove',
                    function (event)
                    {
                        TheMap.featuresAt
                        (
                            event.point,
                            {radius: 5},
                            function (err, features)
                            {
                                if (err)
                                    throw err;
                                if (0 != features.length)
                                {
                                    if (features[0].properties.name != last)
                                        console.log (JSON.stringify (features[0].properties, null, 2));
                                    last = features[0].properties.name;
                                }
                            }
                        );
                    }
                );
            }
        }

        // initialize material design for bootstrap (https://github.com/FezVrasta/bootstrap-material-design)
        $.material.init ();
        // initialize buttons
        document.getElementById ("file_button").onchange = file_change;
        document.getElementById ("vector_tiles").onchange = init_map;
        // drag and drop listeners
        document.getElementById ("files_drop_zone").ondragover = file_drag;
        document.getElementById ("files_drop_zone").ondrop = file_drop;
        init_map ();
    }
);