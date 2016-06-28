/**
 * Functions for CIMSpace application
 */
"use strict";
define
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
         * The last selected features.
         */
        var CURRENT_SELECTION = null;

        // using Promise: backwards compatibility for older browsers
        es6_promise.polyfill ();

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

        /**
         * Add stylization information to elements and make a list of point and linear features.
         * @param {Object} psr - the hash table object with properties that are (PowerSystemResource) elements keyed by mRID.
         * @param {Object} locations - the hash table object with properties that are locations with arrays of coordinates.
         * @param {Object[]} points - the resultant list of point GeoJSON objects.
         * @param {Object} psr - the resultant list of linear GeoJSON objects.
         * @function process_spatial_objects
         * @memberOf module:cimspace
         */
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
         * @function process_files
         * @memberOf module:cimspace
         */
        function process_files (files)
        {
            if (0 < files.length)
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
        }

        /**
         * @summary Close the file dialog.
         * @description Hide the modal dialog.
         * @function close_file_modal
         * @memberOf module:cimspace
         */
        function close_file_modal ()
        {
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
         * @function file_drop
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
         * @function file_drag
         * @memberOf module:cimspace
         */
        function file_drag (event)
        {
            event.stopPropagation ();
            event.preventDefault ();
            event.dataTransfer.dropEffect = 'copy';
        }

        /**
         * @summary Make the details non-model dialog visible.
         * @description Uses jQuery to show the panel.
         * @function show_details
         * @memberOf module:cimspace
         */
        function show_details ()
        {
            $("#feature_details").show ();
        }

        /**
         * @summary Make the details non-model dialog invisible.
         * @description Uses jQuery to hide the panel.
         * @function hide_details
         * @memberOf module:cimspace
         */
        function hide_details ()
        {
            $("#feature_details").hide (200);
        }

        /**
         * Show the content in a window.
         * @description Raise a popup window and populate it with the preformatted text provided.
         * @param {string} content - the detail content to display
         * @function showDetails
         * @memberOf module:cimspace
         */
        function showDetails (content)
        {
            var text =
                 "        <pre>" +
                 content +
                 "        </pre>";
            document.getElementById ("feature_detail_contents").innerHTML = text;
            show_details ();
        }

        /**
         * @summary Change the filter for the glow layers.
         * @description Applies the given filter to the highlight layers.
         * These layers are copies of the similarly named layers, but with a yellow color.
         * When a filter matches a feature, the yeloow layer is drawn on top of
         * the original layer creating a cheezy 'glow' effect.
         * Setting the filter to something that never matches effectively turns off the layer.
         * @param {string} filter - the filter to apply to the highlight layers
         * @function glow
         * @memberOf module:cimspace
         */
        function glow (filter)
        {
            TheMap.setFilter ("lines_highlight", filter);
            TheMap.setFilter ("circle_highlight", filter);
            TheMap.setFilter ("symbol_highlight", filter);
        }

        /**
         * @summary Display the current feature properties and highlight it on the map.
         * @description Shows a JSON properties sheet in the details window,
         * and highlights the current feature in the map.
         * Other features in the current selection are provided links in the details window
         * to make them the current feature.
         * @function highlight
         * @memberOf module:cimspace
         */
        function highlight ()
        {
            var feature;
            if ((null != CIM_Data) && (null != CURRENT_FEATURE))
                if (null != (feature = CIM_Data.Element[CURRENT_FEATURE]))
                {
                    var text = JSON.stringify (feature, null, 2);
                    if (null != CURRENT_SELECTION)
                        for (var i = 0; i < CURRENT_SELECTION.length; i++)
                        {
                            if (CURRENT_SELECTION[i] != CURRENT_FEATURE)
                                text = text + "\n<a href='#' onclick='require([\"cimspace\"], function(cimspace) {cimspace.select (\"" + CURRENT_SELECTION[i] + "\");})'>" + CURRENT_SELECTION[i] + "</a>";
                        }
                    showDetails (text);
                    glow (["in", "mRID", CURRENT_FEATURE]);
                }
        }

        /**
         * @summary Clears the current feature and selection.
         * @description Hides the details non-modal dialog and reverts any highlighting in the map.
         * @function unhighlight
         * @memberOf module:cimspace
         */
        function unhighlight ()
        {
            glow (["==", "mRID", ""]);
            CURRENT_FEATURE = null;
            CURRENT_SELECTION = null;
            document.getElementById ("feature_detail_contents").innerHTML = "";
            hide_details ();
        }

        /**
         * @summary Handler for a current feature link click.
         * @description Sets the current feature and redisplay the details window and highlighting appropriately.
         * @function select
         * @memberOf module:cimspace
         */
        function select (mrid)
        {
            if ((null != CURRENT_SELECTION) && CURRENT_SELECTION.includes (mrid))
            {
                CURRENT_FEATURE = mrid;
                highlight ();
            }
        }

        /**
         * Get the user's choice for full or limited tracing.
         * @returns {boolean} <code>true</code> a full trace should be done, <code>false</code> otherwise
         * @function trace_through_open_switches_and_fuses
         * @memberOf module:cimspace
         */
        function trace_through_open_switches_and_fuses ()
        {
            return (document.getElementById ("full_trace").checked);
        }

        /**
         * Trace the currently selected object and highlight the results.
         * @description Traverse through the ConnectivityNode, Terminal and ConductingEquipment
         * to make a list of connected devices and wires. Then highlight them on screen.
         * @function trace
         * @memberOf module:cimspace
         */
        function trace ()
        {
            // the source feature
            var source;
            // the list of traced conducting equipment
            var equipment = [];
            // the type of trace
            var all = trace_through_open_switches_and_fuses ();

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
                    if (!all && CIM_Data.ConductingEquipment[source].normalOpen == "true")
                        continue;
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
                // sort the list to make it easy to find an element
                equipment.sort ();
                // create the text to show in the details window
                var text = JSON.stringify (CIM_Data.PowerSystemResource[CURRENT_FEATURE], null, 2) +
                    "\n" +
                    equipment.join (', ');
                if (null != CURRENT_SELECTION)
                    for (var i = 0; i < CURRENT_SELECTION.length; i++)
                    {
                        if (CURRENT_SELECTION[i] != CURRENT_FEATURE)
                            text = text + "\n<a href='#' onclick='require([\"cimspace\"], function(cimspace) {cimspace.select (\"" + CURRENT_SELECTION[i] + "\");})'>" + CURRENT_SELECTION[i] + "</a>";
                    }
                // post the text
                showDetails (text);
                // highlight the elements on screen
                equipment.unshift ("in", "mRID");
                glow (equipment);
            }
        }

        /**
         * Compute the bounding box for the currentls selected element.
         * @description Look up all PositionPoint elements associated with elemen's location,
         * and compute the minimum bounding box that would enclose it.
         * @parm {string} id - the id of the element to process
         * @function get_bounding_box
         * @memberOf module:cimspace
         */
        function get_bounding_box (id)
        {
            var ret = null;

            var feature;
            var location;
            if (null != (feature = CIM_Data.Element[id]))
            {
                if (null != (location = feature.Location))
                {
                    var minx = Number.MAX_VALUE;
                    var maxx = Number.MIN_VALUE;
                    var miny = Number.MAX_VALUE;
                    var maxy = Number.MIN_VALUE;
                    var pp = CIM_Data.PositionPoint;
                    var valid = false;
                    for (var point in pp)
                    {
                        var p = pp[point];
                        if (location == p.Location)
                        {
                            if (minx > p.xPosition)
                                minx = p.xPosition;
                            if (maxx < p.xPosition)
                                maxx = p.xPosition;
                            if (miny > p.yPosition)
                                miny = p.yPosition;
                            if (maxy < p.yPosition)
                                maxy = p.yPosition;
                            valid = true;
                        }
                    }
                    if (valid)
                        ret = [[minx, miny], [maxx, maxy]];
                }
            }
            return (ret);
        }

        /**
         * Search the element identifiers to find those that match the search text.
         * @description Scan through all elements and make a list of those
         * where the id, mRID, name or aliasName match the user enetered text.
         * If some are found, highlight the first and zoom to the area that
         * contains the element.
         * @function search
         * @memberOf module:cimspace
         */
        function search ()
        {
            var text;
            if (null != CIM_Data)
                if ("" != (text = document.getElementById ("search_text").value))
                {
                    var match = [];
                    for (var id in CIM_Data.Element)
                        if (CIM_Data.Element[id].id == text)
                            match.push (id);
                        else if (CIM_Data.Element[id].mRID == text)
                            match.push (id);
                        else if (CIM_Data.Element[id].name == text)
                            match.push (id);
                        else if (CIM_Data.Element[id].aliasName == text)
                            match.push (id);
                    if (match.length > 0)
                    {
                        CURRENT_FEATURE = match[0];
                        CURRENT_SELECTION = match;
                        highlight ();
                        var bb = get_bounding_box (CURRENT_FEATURE);
                        if (null != bb)
                        {
                            var x = (bb[1][0] - bb[0][0]) / 2.0 + bb[0][0];
                            var y = (bb[1][1] - bb[0][1]) / 2.0 + bb[0][1];
                            TheMap.easeTo
                            (
                                {
                                    center: [x, y],
                                    zoom: 17
                                }
                            );
                        }
                        else
                            alert ("That object doesn't have geometry");
                    }
                    else
                        alert ("No matches found for '" + text + "'");
                }
                else
                    alert ("No search text");
            else
                alert ("No CIM data loaded");
        }

        /**
         * @summary Initialize the map.
         * @description Create the background map, centered on Bern and showing most of Switzerland.
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
                        zoom: 8,
                        maxZoom: 25,
                        //style: "mapbox://styles/mapbox/streets-v8",
                        style: "styles/streets-v8.json",
                        hash: true
                    }
                );
                // add zoom and rotation controls to the map.
                TheMap.addControl (new mapboxgl.Navigation ());
                // handle mouse click
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
                            var selection = [];
                            for (var i = 0; i < features.length; i++)
                            {
                                var mrid = features[i].properties.mRID;
                                if (null != mrid)
                                    selection[selection.length] = mrid;
                            }
                            if (selection.length > 0)
                            {
                                if (selection[0] != CURRENT_FEATURE)
                                {
                                    CURRENT_FEATURE = selection[0];
                                    CURRENT_SELECTION = selection;
                                    highlight ();
                                }
                            }
                            else
                                unhighlight ();
                        }
                        else
                            unhighlight ();
                    }
                );
                // handle mouse movement
                TheMap.on
                (
                    'mousemove',
                    function (event)
                    {
                        var lng = event.lngLat.lng;
                        var lat = event.lngLat.lat;
                        lng = Math.round (lng * 1000000) / 1000000;
                        lat = Math.round (lat * 1000000) / 1000000;
                        document.getElementById ("coordinates").innerHTML = "" + lng + "," + lat;
                    }
                );
            }
        }

        return (
            {
                file_change: file_change,
                init_map: init_map,
                file_drag: file_drag,
                file_drop: file_drop,
                trace: trace,
                unhighlight: unhighlight,
                select: select,
                search: search
            }
        );
    }
);