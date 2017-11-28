/**
 * Map functions for CIM Application
 */
"use strict";
define
(
    ["cimnav", "cimedit", "themes/cimthemes", "themes/default_theme", "themes/voltage", "themes/island", "themes/inservice"],
    /**
     * @summary Main entry point for the application.
     * @description Performs application initialization as the first step in the RequireJS load sequence.
     * @see http://requirejs.org/docs/api.html#data-main
     * @name cimmap
     * @exports cimmap
     * @version 1.0
     */
    function (cimnav, CIMEdit, ThemeControl, DefaultTheme, VoltageTheme, IslandTheme, InServiceTheme)
    {
        /**
         * The map object.
         * @see https://www.mapbox.com
         */
        var TheMap = null;

        /**
         * The extents of visible objects (those with Location and PositionPoint).
         */
        var TheExtents = null;

        /**
         * The theme setting control object.
         */
        var TheThemer = null;

        /**
         * The editor control object.
         */
        var TheEditor = null;

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

        /**
         * Set the CIM data for the map to draw.
         * @param {JSON} Data parsed from the cim module.
         * @function set_data
         * @memberOf module:cimmap
         */
        function set_data (data)
        {
            CIM_Data = data;
            if (null != CIM_Data)
                make_map (function () { zoom_extents (); });
        }

        /**
         * Get the CIM data the map is displaying.
         * @return {JSON} Data parsed from the cim module.
         * @function get_data
         * @memberOf module:cimmap
         */
        function get_data ()
        {
            return (CIM_Data);
        }

        /**
         * Set the extents of the CIM data for the map to draw.
         * @param {Object} new extents value { xmin: , ymin: , xmax: , ymax: }
         * @function set_extents
         * @memberOf module:cimmap
         */
        function set_extents (extents)
        {
            TheExtents = extents;
        }

        /**
         * Get the extents of the CIM data the map is displaying.
         * @return {Object} current extents value { xmin: , ymin: , xmax: , ymax: }
         * @function get_extents
         * @memberOf module:cimmap
         */
        function get_extents ()
        {
            return (TheExtents);
        }

        /**
         * Get the theming object for access to themes.
         * @return {Object} The object handling theming.
         * @function get_themer
         * @memberOf module:cimmap
         */
        function get_themer ()
        {
            return (TheThemer);
        }

        /**
         * Get the user's choice for showing internal features.
         * @returns {boolean} <code>true</code> if internal features should be shown, <code>false</code> otherwise
         * @function show_internal_features
         * @memberOf module:cimmap
         */
        function show_internal_features ()
        {
            return (document.getElementById ("internal_features").checked);
        }

        /**
         * Get the user's choice for 3d buildings.
         * @returns {boolean} <code>true</code> show buildings in 3D, <code>false</code> otherwise
         * @function show_3d_buildings
         * @memberOf module:cimmap
         */
        function show_3d_buildings ()
        {
            return (document.getElementById ("buildings_3d").checked);
        }

        /**
         * Get the user's choice for whether PositionPoint.sequenceNumber is zero-based or not.
         * @returns {boolean} <code>true</code> if PositionPoint sequenceNumber values start at zero, <code>false</code> otherwise
         * @function zero_based_point_sequence
         * @memberOf module:cimmap
         */
        function zero_based_point_sequence ()
        {
            return (document.getElementById ("zero_based_point_sequence").checked);
        }

        /**
         * Generate a map.
         * @param {function} callback The function to invoke when the map is complete.
         * @function make_map
         * @memberOf module:cimmap
         */
        async function make_map (callback)
        {
            var start = new Date ().getTime ();
            console.log ("rendering CIM data");

            function sleep(ms)
            {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            do
                await sleep (2000);
            while (!TheMap.loaded ())

            if (TheThemer.getTheme ().getLegend ().visible ())
                TheMap.removeControl (TheThemer.getTheme ().getLegend ());
            TheThemer.theme (TheMap, CIM_Data,
                {
                    show_internal_features: show_internal_features (),
                    zero_based_point_sequence: zero_based_point_sequence (),
                    editing: false
                });
            TheExtents = TheThemer.getExtents ();

            buildings_3d ();

            var end = new Date ().getTime ();
            console.log ("finished rendering CIM data (" + (Math.round (end - start) / 1000) + " seconds)");
            if (callback)
                callback ();
        }

        function zoom_extents ()
        {
            if (null != TheExtents)
                TheMap.fitBounds (
                    [[TheExtents.xmin, TheExtents.ymin], [TheExtents.xmax, TheExtents.ymax]],
                    { linear: true, padding: 50 });
        }

        function toggle_themer ()
        {
            if (TheThemer.visible ())
                TheMap.removeControl (TheThemer);
            else
                TheMap.addControl (TheThemer);
        }

        function toggle_legend ()
        {
            if (TheThemer.getTheme ().getLegend ().visible ())
                TheMap.removeControl (TheThemer.getTheme ().getLegend ());
            else
                TheMap.addControl (TheThemer.getTheme ().getLegend ());
        }

        function edit ()
        {
            if (TheEditor.visible ())
                TheMap.removeControl (TheEditor);
            else
            {
                if (TheThemer.getTheme ().getLegend ().visible ())
                    TheMap.removeControl (TheThemer.getTheme ().getLegend ());
                TheMap.addControl (TheEditor);
            }
        }

        /**
         * @summary Make the details non-model dialog visible.
         * @description Uses jQuery to show the panel.
         * @function show_details
         * @memberOf module:cimmap
         */
        function show_details ()
        {
            $("#feature_details").show ();
        }

        /**
         * @summary Make the details non-model dialog invisible.
         * @description Uses jQuery to hide the panel.
         * @function hide_details
         * @memberOf module:cimmap
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
         * @memberOf module:cimmap
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
         * @memberOf module:cimmap
         */
        function glow (filter)
        {
            if (TheMap.getSource ("cim lines"))
            {
                TheMap.setFilter ("lines_highlight", filter);
                TheMap.setFilter ("circle_highlight", filter);
                TheMap.setFilter ("symbol_highlight", filter);
            }
            if (TheMap.getSource ("edit lines"))
            {
                TheMap.setFilter ("edit_lines_highlight", filter);
                TheMap.setFilter ("edit_circle_highlight", filter);
                TheMap.setFilter ("edit_symbol_highlight", filter);
            }
        }

        /**
         * @summary JSON replacer function for element details display.
         * @description Makes links out of strings that are also element id values.
         * @function detail_helper
         * @memberOf module:cimmap
         */
        function detail_helper (key, value)
        {
            var feature;
            if ((key == "symbol") || (key == "color"))
                return undefined;
            if (typeof value === "string")
                if (null != (feature = CIM_Data.Element[value]))
                {
                    value = "<a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;" + value + "&quot;);})'>" + value + "</a>"
                }
            return (value);
        }

        /**
         * @summary Display the current feature properties and highlight it on the map.
         * @description Shows a JSON properties sheet in the details window,
         * and highlights the current feature in the map.
         * Other features in the current selection are provided links in the details window
         * to make them the current feature.
         * @function highlight
         * @memberOf module:cimmap
         */
        function highlight ()
        {
            var feature;
            if ((null != CIM_Data) && (null != CURRENT_FEATURE))
                if (null != (feature = CIM_Data.Element[CURRENT_FEATURE]))
                {
                    var text = JSON.stringify (feature, detail_helper, 2);
                    if (null != CURRENT_SELECTION)
                        for (var i = 0; i < CURRENT_SELECTION.length; i++)
                        {
                            if (CURRENT_SELECTION[i] != CURRENT_FEATURE)
                                text = text + "\n<a href='#' onclick='require([\"cimmap\"], function(cimmap) {cimmap.select (\"" + CURRENT_SELECTION[i] + "\");})'>" + CURRENT_SELECTION[i] + "</a>";
                        }
                    showDetails (text);
                    glow (["in", "mRID", CURRENT_FEATURE]);
                }
        }

        /**
         * @summary Clears the current feature and selection.
         * @description Hides the details non-modal dialog and reverts any highlighting in the map.
         * @function unhighlight
         * @memberOf module:cimmap
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
         * @memberOf module:cimmap
         */
        function select (mrid)
        {
            if (mrid != CURRENT_SELECTION)
            {
                CURRENT_FEATURE = mrid;
                if (!CURRENT_SELECTION.includes (mrid))
                    CURRENT_SELECTION = [mrid];
                highlight ();
            }
        }

        /**
         * Turn on or off 3D building display.
         * @description Insert or remove a layer showing buildings with height.
         * The 'building' layer in the mapbox-streets vector source contains building-height data from OpenStreetMap.
         * @ param {object} event - optional event trigger <em>not used</em>
         * @function buildings_3d
         * @memberOf module:cimmap
         */
        function buildings_3d (event)
        {
            if (show_3d_buildings ())
            {
                if ("undefined" == typeof (TheMap.getLayer ("3d-buildings")))
                {
                    // insert the layer beneath any symbol layer.
                    var layers = TheMap.getStyle ().layers.reverse ();
                    var index = layers.findIndex (
                        function (layer)
                        {
                            return (layer.type !== "symbol");
                        }
                    );
                    var id = index !== -1 ? layers[index].id : undefined;
                    TheMap.addLayer (
                        {
                            "id": "3d-buildings",
                            "source": "composite",
                            "source-layer": "building",
                            "filter": ["==", "extrude", "true"],
                            "type": "fill-extrusion",
                            "minzoom": 15,
                            "paint":
                            {
                                "fill-extrusion-color": "#aaa",
                                "fill-extrusion-height":
                                {
                                    "type": "identity",
                                    "property": "height"
                                },
                                "fill-extrusion-base":
                                {
                                    "type": "identity",
                                    "property": "min_height"
                                },
                                "fill-extrusion-opacity": .6
                            }
                        },
                        id);
                }
            }
            else
                if ("undefined" != typeof (TheMap.getLayer ("3d-buildings")))
                    TheMap.removeLayer ("3d-buildings");
        }

        /**
         * Get the user's choice for through switch tracing.
         * @returns {boolean} <code>true</code> a trace through open switches should be done, <code>false</code> otherwise
         * @function trace_through_open_switches
         * @memberOf module:cimmap
         */
        function trace_through_open_switches ()
        {
            return (document.getElementById ("trace_through_open_switches").checked);
        }

        /**
         * Get the user's choice for through transformer tracing.
         * @returns {boolean} <code>true</code> a trace across voltage level changes should be done, <code>false</code> otherwise
         * @function trace_though_voltage_level_changes
         * @memberOf module:cimmap
         */
        function trace_though_voltage_level_changes ()
        {
            return (document.getElementById ("trace_though_voltage_level_changes").checked);
        }

        /**
         * Get the user's choice for number of elements to trace.
         * @returns {number} Either the user's requested number or 0 indicating don't limit tracing.
         * @function number_of_elements
         * @memberOf module:cimmap
         */
        function number_of_elements ()
        {
            var no = document.getElementById ("number_of_elements").value;
            var ret = Number (no);
            if (isNaN (ret))
                ret = 0;
            return (ret);
        }

        /**
         * Get voltage level boundary transformers.
         * @description Get a list of tranformers with ends where voltages differ.
         * @function get_transformers
         * @memberOf module:cimmap
         */
        function get_transformers ()
        {
            var transformers = {};
            var ret = {};

            for (var end in CIM_Data.PowerTransformerEnd)
            {
                var e = CIM_Data.PowerTransformerEnd[end]
                var transformer = e.PowerTransformer;
                if (null != transformer)
                {
                    if (null == transformers[transformer])
                        transformers[transformer] = [];
                    var no = e.endNumber;
                    if (null != no)
                        transformers[transformer][Number(no)] = e
                }
            }
            // eliminate transformers which have the same voltage on both ends
            for (var trans in transformers)
            {
                var ends = transformers[trans];
                if (ends && ends.length > 1)
                {
                    var high_voltage = Number (CIM_Data.BaseVoltage[ends[1].BaseVoltage].nominalVoltage);
                    var unequal = false;
                    for (var i = 2; "undefined" != typeof (ends[i]); i++)
                        if (high_voltage != Number (CIM_Data.BaseVoltage[ends[i].BaseVoltage].nominalVoltage))
                            unequal = true;
                    if (unequal)
                        ret[trans] = ends; // could also store something else here - the test is just for non-null
                }
            }
            //alert(JSON.stringify(ret, null, 4));

            return (ret);
        }

        /**
         * Trace the currently selected object and highlight the results.
         * @description Traverse through the ConnectivityNode, Terminal and ConductingEquipment
         * to make a list of connected devices and wires. Then highlight them on screen.
         * @function trace
         * @memberOf module:cimmap
         */
        function trace ()
        {
            // the source feature
            var source;
            // the type of switch trace
            var through_opens = trace_through_open_switches ();
            // the type of transformer trace
            var through_voltages = trace_though_voltage_level_changes ();

            if (null == CIM_Data)
                alert ("no CIM data loaded");
            else if (null == CURRENT_FEATURE)
                alert ("no feature selected");
            else
            {
                // organize terminals by connectivity node and equipment
                var terminals_by_node = {};
                var terminals_by_equp = {};
                for (var t in CIM_Data.Terminal)
                {
                    var terminal = CIM_Data.Terminal[t];
                    var node = terminal.ConnectivityNode;
                    if (null != node)
                    {
                        if (null == terminals_by_node[node])
                            terminals_by_node[node] = [];
                        if (!terminals_by_node[node].includes (terminal.mRID))
                            terminals_by_node[node].push (terminal.mRID);
                    }
                    var equp = terminal.ConductingEquipment;
                    if (null != equp)
                    {
                        if (null == terminals_by_equp[equp])
                            terminals_by_equp[equp] = [];
                        if (!terminals_by_equp[equp].includes (terminal.mRID))
                            terminals_by_equp[equp].push (terminal.mRID);
                    }
                }

                // the list of things to trace
                var todo = [];
                var transformers = (!through_voltages) ? get_transformers () : {};

                function stop (equipment)
                {
                    var ret = false;

                    if (!through_opens && (("undefined" != typeof (equipment.normalOpen)) && equipment.normalOpen))
                        ret = true;
                    else if (!through_voltages && (null != transformers[equipment.mRID]))
                        ret = true;

                    return (ret);
                }

                function preload (source, terminal)
                {
                    if (null != source)
                        // check for an open switch or step-down transformer, and if so, remove all but this terminal from the source
                        if (stop (source))
                        {
                            terminals_by_equp[source.mRID] = [terminal.mRID];
                            // add all connected equipment
                            terminals_by_node[terminal.ConnectivityNode].forEach (
                                function (t)
                                {
                                    var terminal = CIM_Data.Terminal[t];
                                    if (terminal.ConductingEquipment != source.mRID)
                                        todo.push (terminal.ConductingEquipment);
                                }
                            );
                        }
                }

                // get the source equipment
                source = CIM_Data.ConductingEquipment[CURRENT_FEATURE];
                if (null == source)
                {
                    // try for a terminal
                    var term = CIM_Data.Terminal[CURRENT_FEATURE];
                    source = term ? CIM_Data.ConductingEquipment[term.ConductingEquipment] : null;
                    preload (source, term);
                }
                if (null == source)
                {
                    // try for a node
                    var terms = terminals_by_node[CURRENT_FEATURE];
                    if (terms)
                        for (var i = 0; (i < terms.length) && (null == source); i++)
                        {
                            var term = CIM_Data.Terminal[terms[i]];
                            source = term ? CIM_Data.ConductingEquipment[term.ConductingEquipment] : null;
                            preload (source, term);
                        }
                }
                if (null == source)
                    alert ("feature is not part of the topology");
                else
                {
                    todo.push (source.mRID);

                    // the list of traced conducting equipment
                    var equipment = [];
                    // iterate until done
                    var count = number_of_elements ();
                    while ("undefined" != typeof (source = todo.pop ())) // if you call pop() on an empty array, it returns undefined
                    {
                        equipment.push (source);
                        var ce = CIM_Data.ConductingEquipment[source];
                        if (null == ce || stop (ce))
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
                        count -= 1;
                        if (0 == count)
                            break;
                    }
                    // sort the list to make it easy to find an element
                    equipment.sort ();
                    // create the text to show in the details window
                    var text = JSON.stringify (CIM_Data.Element[CURRENT_FEATURE], detail_helper, 2) +
                        "\n" +
                        equipment.join (', ');
                    if (null != CURRENT_SELECTION)
                        for (var i = 0; i < CURRENT_SELECTION.length; i++)
                        {
                            if (CURRENT_SELECTION[i] != CURRENT_FEATURE)
                                text = text + "\n<a href='#' onclick='require([\"cimmap\"], function(cimmap) {cimmap.select (\"" + CURRENT_SELECTION[i] + "\");})'>" + CURRENT_SELECTION[i] + "</a>";
                        }
                    // post the text
                    showDetails (text);
                    // highlight the elements on screen
                    equipment.unshift ("in", "mRID");
                    glow (equipment);
                }
            }
        }

        /**
         * Compute the bounding box for the currently selected element.
         * @description Look up all PositionPoint elements associated with elemen's location,
         * and compute the minimum bounding box that would enclose it.
         * @parm {string} id - the id of the element to process
         * @function get_bounding_box
         * @memberOf module:cimmap
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
                            var x = Number (p.xPosition);
                            var y = Number (p.yPosition);
                            if (minx > x)
                                minx = x;
                            if (maxx < x)
                                maxx = x;
                            if (miny > y)
                                miny = y;
                            if (maxy < y)
                                maxy = y;
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
         * @memberOf module:cimmap
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
                        CURRENT_SELECTION = match;
                        CURRENT_FEATURE = match[0];
                        var current = null;
                        var bb = null;
                        for (var i = 0; i < CURRENT_SELECTION.length; i++)
                        {
                            bb = get_bounding_box (match[i]);
                            if (null != bb)
                            {
                                current = match[i];
                                break;
                            }
                        }
                        if (null != current)
                        {
                            CURRENT_FEATURE = current;
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
                            alert ("No geometry for selected object(s)");
                        highlight ();
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
         * @summary Redraw the map.
         * @description Given some CIM datra has been loaded, redraws the map.
         * @param {object} event - optional, the vector tile checkbox change event
         * @function redraw
         * @memberOf module:cimmap
         */
        function redraw (event)
        {
            if (null != CIM_Data)
                make_map ();
        }

        /**
         * @summary Checks for execution from file://.
         * @description Determines if the script is running from an active server or just loaded passively from file.
         * @returns {boolean} <code>true</code> if the code is running from file://
         * @memberOf module:cimmap
         */
        function running_local ()
        {
            return (
                ("null" == window.location.origin) // Firefox
             || ("file://" == window.location.origin) // chromium
                )
        }

        /**
         * @summary Doctor local urls.
         * @description Fix the brain-dead handling by mapbox for local URLs.
         * @param {string} url - the URL to massage.
         * @param {string} resourcetype - the resource type <em>not used</em>
         * @function toURL
         * @memberOf module:cimmap
         */
        function toURL (url, resourcetype)
        {
            var _url = url.startsWith (":///") ? url.substring (3) : url;
            if (_url.startsWith ("/"))
               _url = running_local () ? _url.substring (1) : window.location.origin + window.location.pathname + _url.substring (1);
            return ({ url: _url });
        }

        /**
         * @summary Shut down the map.
         * @description Clean up and close the map.
         * @param {object} event - <em>not used</em>
         * @function terminate
         * @memberOf module:cimmap
         */
        function terminate (event)
        {
            if (null != TheMap)
            {
                var map = TheMap;
                map.remove ();
                document.getElementById ("main").innerHTML = "";
            }
        }

        /**
         * @summary Initialize the map.
         * @description Create the background map, centered on Bern and showing most of Switzerland.
         * @param {object} event - <em>not used</em>
         * @function initialize
         * @memberOf module:cimmap
         */
        function initialize (event)
        {
            // make the map
            document.getElementById ("main").innerHTML = "";
            mapboxgl.accessToken = TheToken;
            TheMap = new mapboxgl.Map
            (
                {
                    name: "TheMap",
                    version: 8,
                    container: "main",
                    center: [7.48634000000001, 46.93003],
                    zoom: 8,
                    maxZoom: 25,
                    // Note: this local copy is the same as mapbox (as of 3.10.2017) except for the reference
                    // to the sprite URL which is changed to     sprite: "/styles/streets-v9-sprites"
                    // style: "mapbox://styles/mapbox/streets-v9",
                    style: "/styles/streets-v9.json",
                    hash: true,
                    transformRequest: toURL
                }
            );
            // add zoom and rotation controls to the map
            TheMap.addControl (new cimnav.NavigationControl (zoom_extents, toggle_themer, toggle_legend, edit));
            // handle mouse click
            TheMap.on
            (
                'mousedown',
                function (event)
                {
                    var width = 4;
                    var height = 4;
                    var features = TheMap.queryRenderedFeatures
                    (
                        [
                          [event.point.x - width / 2, event.point.y - height / 2],
                          [event.point.x + width / 2, event.point.y + height / 2]
                        ],
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
            TheThemer = new ThemeControl ([new DefaultTheme (), new VoltageTheme (), new IslandTheme (), new InServiceTheme ()]);
            TheThemer.theme_change_listener (redraw);
            TheEditor = new CIMEdit (getInterface ());
            // display any existing data
            redraw ();
        }

        function getInterface ()
        {
            return (
                {
                     set_data: set_data,
                     get_data: get_data,
                     set_extents: set_extents,
                     get_extents: get_extents,
                     get_themer: get_themer,
                     zoom_extents: zoom_extents,
                     redraw: redraw,
                     initialize: initialize,
                     show_internal_features: show_internal_features,
                     show_3d_buildings: show_3d_buildings,
                     zero_based_point_sequence: zero_based_point_sequence,
                     buildings_3d: buildings_3d,
                     trace: trace,
                     unhighlight: unhighlight,
                     select: select,
                     search: search,
                     terminate: terminate
                }
            );
        }

        return (getInterface ());
    }
);
