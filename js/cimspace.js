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

        /**
         * The CIM file contents after load.
         */
        var CIM_Data = null;

        /**
         * The last selected feature.
         */
        var CURRENT_FEATURE = null;

        /**
         * Flag to avoid multiple alert() boxes.
         */
        var ALERTED = false;

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
                    },
                    paint:
                    {
                        "icon-color": color,
                        "text-color": color
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

                TheMap.addLayer
                (
                    {
                        id: "lines_highlight",
                        type: "line",
                        source: "the cim lines",
                        filter: ["==", "mRID", ""],
                        layout:
                        {
                            "line-join": "round",
                            "line-cap": "round"
                        },
                        paint:
                        {
                            "line-color": "#ffff00",
                            "line-width": 3
                        }
                    }
                );

                // simple circle from 14 to 17
                TheMap.addLayer (circle_layer ("circle_transformer", ["==", "symbol", "transformer"], "rgb(0, 255, 0)"));
                TheMap.addLayer (circle_layer ("circle_switch", ["==", "symbol", "switch"], "rgb(0, 0, 255)"));
                TheMap.addLayer (circle_layer ("circle_house_connection", ["==", "symbol", "house_connection"], "rgb(255, 0, 0)"));
                TheMap.addLayer (circle_layer ("circle_other", ["==", "symbol", "monument-24"], "black"));

                TheMap.addLayer (circle_layer ("circle_highlight", ["==", "mRID", ""], "rgb(255, 255, 0)"));

                // symbol icon from 17 and deeper
                // ToDo: color the icons according to color on the object
                TheMap.addLayer (symbol_layer ("symbol", ["!=", "mRID", ""], "{symbol}", 0.0, [0, 0], "rgb(0, 0, 0)"));

                TheMap.addLayer (symbol_layer ("symbol_highlight", ["==", "mRID", ""], "{symbol}", 0.0, [0, 0], "rgb(255, 255, 0)"));
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
                            if (0 == psr[id].mRID.indexOf ("TRA"))
                            {
                                psr[id].symbol = "transformer";
                                psr[id].color = "rgb(0, 255, 0)";
                            }
                            else if (0 == psr[id].mRID.indexOf ("TEI"))
                            {
                                psr[id].symbol = "switch";
                                psr[id].color = "rgb(0, 0, 255)";
                            }
                            else if (0 == psr[id].mRID.indexOf ("HAS"))
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
                        CIM_Data = result.parsed;
                        console.log ("finished XML read (" + (Math.round (end - start) / 1000) + " seconds)");

                        // gather position points into locations
                        locations = {};
                        pp = CIM_Data.PositionPoint;
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

                        process_spatial_objects (CIM_Data.PowerSystemResource, locations, points, lines);
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
         * Show the content in a window.
         * @description Raise a popup window and populate it with the preformatted text provided.
         * @param {string} content - the detail content to display
         * @memberOf module:cimspace
         */
        function showDetails (content)
        {
            if (null == top.FeatureDetails)
                top.FeatureDetails = { closed: true };
            if (FeatureDetails.closed)
                top.FeatureDetails = window.open ("","details", "width=350,height=250,menubar=0,toolbar=1,status=0,scrollbars=1,resizable=1");
            else
                top.FeatureDetails.document.open ("text/html", "replace");
            if (!top.FeatureDetails || top.FeatureDetails.closed || typeof top.FeatureDetails.closed == 'undefined')
            {
                if (!ALERTED)
                {
                    alert ("Feature Detail popup blocked. Either enable popups for this page or examine the feature details in the console.");
                    ALERTED = true;
                }
                console.log (content);
            }
            else
            {
                top.FeatureDetails.document.writeln (
                 "<html>\n" +
                 "    <head>\n" +
                 "        <title>Feature Details</title>\n" +
                 "    </head>\n" +
                 "    <body bgcolor=white onLoad='self.focus()'>\n" +
                 "        <pre>" +
                 content +
                 "        </pre>" +
                 "    </body>\n" +
                 "</html>\n"
                );
                top.FeatureDetails.document.close ();
            }
        }

        function highlight (filter)
        {
            TheMap.setFilter ("lines_highlight", filter);
            TheMap.setFilter ("circle_highlight", filter);
            TheMap.setFilter ("symbol_highlight", filter);
        }

        function unhighlight ()
        {
            highlight (["==", "mRID", ""]);
            CURRENT_FEATURE = null;
            showDetails ("");
        }

        /**
         * Trace the currently displayed object and highlight the results.
         * @description Raise a popup window and populate it with the preformatted text provided.
         * @param {string} content - the detail content to display
         * @memberOf module:cimspace
         */
        function trace ()
        {
            // the source feature
            var source;
            // the list of traced conducting equipment
            var equipment = [];

            if (null == CIM_Data)
                alert ("no CIM data loaded");
            else if (null == CURRENT_FEATURE)
                alert ("no feature selected");
            else if (null == (source = CIM_Data.ConductingEquipment[CURRENT_FEATURE]))
                alert ("feature is not conducting equipment");
            else
            {
                // organize terminals by connectivity node and equipment
                var terminals_by_node = {};
                var terminals_by_equp = {};
                var tt = CIM_Data.Terminal;
                for (var t in tt)
                {
                    var terminal = tt[t];
                    var node = terminal.ConnectivityNode;
                    var equp = terminal.ConductingEquipment;
                    if ((null != node) && (null != equp))
                    {
                        if (null == terminals_by_node[node])
                            terminals_by_node[node] = [];
                        if (!terminals_by_node[node].includes (terminal.mRID))
                            terminals_by_node[node].push (terminal.mRID);
                        if (null == terminals_by_equp[equp])
                            terminals_by_equp[equp] = [];
                        if (!terminals_by_equp[equp].includes (terminal.mRID))
                            terminals_by_equp[equp].push (terminal.mRID);
                    }
                }

                // the list of things to trace
                var todo = [];
                todo.push (source.mRID);
                // iterate until done
                while ("undefined" != typeof (source = todo.pop ())) // if you call pop() on an empty array, it returns undefined
                {
                    equipment.push (source);
                    var terms = terminals_by_equp[source];
                    if (null != terms)
                        for (var i = 0; i < terms.length; i++)
                        {
                            var terminal = CIM_Data.Terminal[terms[i]];
                            if (null != terminal)
                            {
                                var equp = terminal.ConductingEquipment;
                                if (null != equp)
                                    if (!equipment.includes (equp) && !todo.includes (equp))
                                        todo.push (equp); // this should never happen
                                var node = terminal.ConnectivityNode;
                                if (null != node)
                                {
                                    var next = terminals_by_node[node];
                                    if (null != next)
                                        for (var j = 0; j < next.length; j++)
                                        {
                                            if (next[j] != terms[i]) // don't trace back the way we came
                                            {
                                                var t = CIM_Data.Terminal[next[j]];
                                                if (null != t)
                                                {
                                                    var e = t.ConductingEquipment;
                                                    if (null != e)
                                                        if (!equipment.includes (e) && !todo.includes (e))
                                                            todo.push (e);
                                                }
                                            }
                                        }
                                }
                            }

                        }
                }
            }

            equipment.sort ();
            showDetails (
                JSON.stringify (CIM_Data.PowerSystemResource[CURRENT_FEATURE], null, 2) +
                "\n" +
                equipment.join (', '));
            equipment.unshift ("in", "mRID");
            highlight (equipment);
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
                TheMap.on
                (
                    'mousedown',
                    function (event)
                    {
                        var features = TheMap.queryRenderedFeatures
                        (
                            event.point,
                            {}
                        );
                        if ((null != features) && (0 != features.length))
                        {
                            var mrid = features[0].properties.mRID;
                            if (null != mrid)
                            {
                                if (mrid != CURRENT_FEATURE)
                                {
                                    showDetails (JSON.stringify (features[0].properties, null, 2));
                                    highlight (["in", "mRID", mrid]);
                                }
                                CURRENT_FEATURE = mrid;
                            }
                        }
                        else
                            unhighlight ();
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
        // javascript functions
        document.getElementById ("trace").onclick = trace;
        document.getElementById ("unhighlight").onclick = unhighlight;
        init_map ();
    }
);