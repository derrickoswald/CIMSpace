/**
 * Map functions for CIM Application
 */
"use strict";
define
(
    ["cimnav", "cimdetails", "cimcoordinates", "cimedit", "cimconnectivity", "cim", "mustache", "themes/cimthemes", "themes/default_theme", "themes/voltage", "themes/island", "themes/inservice"],
    /**
     * @summary Main entry point for the application.
     * @description Performs application initialization as the first step in the RequireJS load sequence.
     * @see http://requirejs.org/docs/api.html#data-main
     * @name cimmap
     * @exports cimmap
     * @version 1.0
     */
    function (cimnav, CIMDetails, CIMCoordinates, CIMEdit, CIMConnectivity, cim, mustache, ThemeControl, DefaultTheme, VoltageTheme, IslandTheme, InServiceTheme)
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
         * The detail view control object.
         */
        var TheDetails = null;

        /**
         * The editor control object.
         */
        var TheEditor = null;

        /**
         * The connectivity control object.
         */
        var TheConnectivity = null;

        /**
         * The scale bar control.
         */
        var TheScaleBar = null;

        /**
         * The coordinate display control.
         */
        var TheCoordinates = null;

        /**
         * The user specific token to access mapbox tiles.
         */
        var TheToken = "pk.eyJ1IjoiZG9zd2FsZCIsImEiOiJjaXdvd213aHgwMDBsMnlvZWY3amQ4YXR0In0.e9FmfCdPkY6I9DreofObwA";

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
         * Flag indicating map listeners are attached or not.
         */
        var Listening = false;

        /**
         * List of registered objects supporting selection_change (CURRENT_FEATURE, CURRENT_SELECTION).
         */
        var FeatureListeners = [
            {
                selection_change: function (mrid, list)
                {
                    if (null != mrid)
                        highlight ();
                    else
                        unhighlight ();
                }
            }
        ];

        /**
         * Get the MapBox map.
         * @function get_map
         * @memberOf module:cimmap
         */
        function get_map ()
        {
            return (TheMap);
        }

        /*
         * Predicate for an empty object.
         * @parm the object to check for emptiness
         * @return <code>true</code> if the object has no properties.
         */
        function empty (obj)
        {
            var ret = true;
            for (var property in CIM_Data)
            {
                ret = false;
                break;
            }
            return (ret);
        }

        /**
         * Set the CIM data for the map to draw.
         * @param {JSON} Data parsed from the cim module.
         * @function set_data
         * @memberOf module:cimmap
         */
        function set_data (data)
        {
            CIM_Data = data;
            if (null != CIM_Data && !empty (CIM_Data))
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
         * Get the currently selected feature.
         * @return the mRID of the currently selected feature or null if none.
         * @function get_selected_feature
         * @memberOf module:cimmap
         */
        function get_selected_feature ()
        {
            return (CURRENT_FEATURE);
        }

        /**
         * Get the currently selected feature list.
         * @return the array of mRID of the currently selected features or null if none.
         * @function get_selected_features
         * @memberOf module:cimmap
         */
        function get_selected_features ()
        {
            return (CURRENT_SELECTION);
        }

        /**
         * Add an object that will be called when feature selections change.
         * @function add_feature_listener
         * @memberOf module:cimmap
         */
        function add_feature_listener (obj)
        {
            if (!FeatureListeners.includes (obj))
            {
                FeatureListeners.push (obj);
                if (get_selected_feature ())
                    obj.selection_change (get_selected_feature (), get_selected_features ());
            }
        }

        /**
         * Remove an object from the list of objects that will be called when feature selections change.
         * @function remove_feature_listener
         * @memberOf module:cimmap
         */
        function remove_feature_listener (obj)
        {
            if (FeatureListeners.includes (obj))
            {
                var index = FeatureListeners.indexOf (obj);
                FeatureListeners = FeatureListeners.filter ((x, i) => i != index);
            }
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
         * Get the detail view object for access to viewing.
         * @return {Object} The object handling details view.
         * @function get_details
         * @memberOf module:cimmap
         */
        function get_details ()
        {
            return (TheDetails);
        }

        /**
         * Get the editor object for access to editing.
         * @return {Object} The object handling editing.
         * @function get_editor
         * @memberOf module:cimmap
         */
        function get_editor ()
        {
            return (TheEditor);
        }

        /**
         * Get the connectivity for changing connectivity.
         * @return {Object} The object handling connectivity.
         * @function get_connectivity
         * @memberOf module:cimmap
         */
        function get_connectivity ()
        {
            return (TheConnectivity);
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
         * Get the user's choice for whether a scale bar is displayed or not.
         * @returns {boolean} <code>true</code> if a scale bar should be shown, <code>false</code> otherwise
         * @function show_scale_bar
         * @memberOf module:cimmap
         */
        function show_scale_bar ()
        {
            return (document.getElementById ("scale_bar").checked);
        }

        /**
         * Get the user's choice for whether coordinates are displayed or not.
         * @returns {boolean} <code>true</code> if coordinates should be shown, <code>false</code> otherwise
         * @function show_coordinates
         */
        function show_coordinates ()
        {
            return (document.getElementById ("coordinate").checked);
        }

        /**
         * Get the user's choice for whether StreetView links are displayed or not.
         * @returns {boolean} <code>true</code> if a streetview link for features should be shown, <code>false</code> otherwise
         * @function show_streetview
         * @memberOf module:cimmap
         */
        function show_streetview ()
        {
            return (document.getElementById ("streetview").checked);
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
            select (null);

            function sleep(ms)
            {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            do
                await sleep (2000);
            while (!TheMap.loaded ())

            if (TheThemer.getTheme ())
                if (TheThemer.getTheme ().getLegend ().visible ())
                    TheMap.removeControl (TheThemer.getTheme ().getLegend ());
            TheThemer.theme (TheMap, CIM_Data,
                {
                    show_internal_features: show_internal_features ()
                });
            TheExtents = TheThemer.getExtents ();

            buildings_3d ();

            var end = new Date ().getTime ();
            console.log ("finished rendering CIM data (" + (Math.round (end - start) / 1000) + " seconds)");
            if (callback)
                callback ();
        }

        function valid_extents ()
        {
            return (null != TheExtents &&
                (TheExtents.xmin >= -180.0) && (TheExtents.xmin <= 180.0) &&
                (TheExtents.ymin >=  -90.0) && (TheExtents.ymin <=  90.0) &&
                (TheExtents.xmax >= -180.0) && (TheExtents.xmax <= 180.0) &&
                (TheExtents.ymax >=  -90.0) && (TheExtents.ymax <=  90.0));
        }

        function zoom_extents ()
        {
            if (valid_extents ())
                TheMap.fitBounds (
                    [[TheExtents.xmin, TheExtents.ymin], [TheExtents.xmax, TheExtents.ymax]],
                    { linear: true, padding: 50 });
        }

        function toggle_info ()
        {
            if (TheDetails.visible ())
                TheMap.removeControl (TheDetails);
            else
                TheMap.addControl (TheDetails);
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

        function toggle_edit ()
        {
            if (get_editor ().visible ())
                TheMap.removeControl (get_editor ());
            else
                TheMap.addControl (get_editor ());
        }

        function connectivity ()
        {
            if (get_connectivity ().visible ())
                TheMap.removeControl (get_connectivity ());
            else
                TheMap.addControl (get_connectivity ());
        }

        function get (classname, id)
        {
            var ret = undefined;
            if (classname && id)
            {
                var data = get_data ();
                if (data)
                {
                    var objects = data[classname];
                    if (objects)
                        ret = objects[id];
                }
                ret = (ret && ret.EditDisposition && ret.EditDisposition == "delete") ? undefined : ret;
                if (!ret && get_editor ().has_new_features ())
                {
                    data = get_editor ().new_features ();
                    var objects = data[classname];
                    if (objects)
                        ret = objects[id];
                }
            }
            return ((ret && ret.EditDisposition && ret.EditDisposition == "delete") ? undefined : ret);
        }

        function forAll (classname, fn)
        {
            var broken = false;
            function iterateOver (objects, fn)
            {
                if (objects)
                    for (var property in objects)
                    {
                        if (objects.hasOwnProperty (property))
                        {
                            var obj = objects[property];
                            if (!obj.EditDisposition || (obj.EditDisposition != "delete"))
                                broken = fn (obj);
                        }
                        if (broken)
                            break;
                    }
            }
            var data = get_data ();
            if (data)
                iterateOver (data[classname], fn);
            if (!broken && get_editor ().has_new_features ())
            {
                data = get_editor ().new_features ();
                if (data)
                    iterateOver (data[classname], fn);
            }
        }

        function fetch (classname, fn)
        {
            var ret = [];
            function iterateOver (objects, fn)
            {
                if (objects)
                    for (var property in objects)
                        if (objects.hasOwnProperty (property))
                        {
                            var obj = objects[property];
                            if (!obj.EditDisposition || (obj.EditDisposition != "delete"))
                                if (fn (obj))
                                    ret.push (obj);
                        }
            }
            var data = get_data ();
            if (data)
                iterateOver (data[classname], fn);
            if (get_editor ().has_new_features ())
            {
                data = get_editor ().new_features ();
                if (data)
                    iterateOver (data[classname], fn);
            }
            return (ret);
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
         * @summary Display the current feature properties and highlight it on the map.
         * @description Shows a properties sheet in the details window,
         * and highlights the current feature in the map.
         * Other features in the current selection are provided links in the details window
         * to make them the current feature.
         * @function highlight
         * @memberOf module:cimmap
         */
        function highlight ()
        {
            var feature;
            if ((null != CIM_Data) && (null != get_selected_feature ()))
                glow (["in", "mRID", get_selected_feature ()]);
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
            return (false);
        }

        /**
         * @summary Handler for a current feature link click.
         * @description Sets the current feature and redisplay the highlighting appropriately and notify listeners.
         * @function select
         * @memberOf module:cimmap
         */
        function select (mrid, list)
        {
            if (null != mrid)
            {
                // cheap check for array equality
                function lists_equal (list1, list2)
                {
                    return (list1.sort ().join (",") == list2.sort ().join (","))
                }
                if (mrid != get_selected_feature () || !lists_equal (get_selected_features (), list))
                {
                    if (!list || !list.includes (mrid))
                        list = [mrid];
                    CURRENT_FEATURE = mrid;
                    CURRENT_SELECTION = list;
                    FeatureListeners.map (x => x.selection_change (CURRENT_FEATURE, CURRENT_SELECTION));
                }
            }
            else
            {
                CURRENT_FEATURE = null;
                CURRENT_SELECTION = null;
                FeatureListeners.map (x => x.selection_change (CURRENT_FEATURE, CURRENT_SELECTION));
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
         * Turn on or off the scale bar.
         * @description Add or remove the scale bar control.
         * @ param {object} event - optional event trigger <em>not used</em>
         * @function scale_bar
         * @memberOf module:cimmap
         */
        function scale_bar (event)
        {
            if (show_scale_bar ())
            {
                if (null == TheScaleBar)
                {
                    TheScaleBar = new mapboxgl.ScaleControl ();
                    TheMap.addControl (TheScaleBar);
                }
            }
            else
            {
                if (null != TheScaleBar)
                {
                    TheMap.removeControl (TheScaleBar);
                    TheScaleBar = null;
                }
            }
        }

        /**
         * Turn on or off the coordinates
         * @description Add or remove the coordinates control.
         * @ param {object} event - optional event trigger <em>not used</em>
         * @function coordinates
         * @memberOf module:cimmap
         */
        function coordinates (event)
        {
            if (show_coordinates ())
            {
                if ((null != TheMap) && (null == TheCoordinates))
                {
                    TheCoordinates = new CIMCoordinates ();
                    TheMap.addControl (TheCoordinates);
                }
            }
            else
            {
                if ((null != TheMap) && (null != TheCoordinates))
                {
                    TheMap.removeControl (TheCoordinates);
                    TheCoordinates = null;
                }
            }
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

        function deleted (equipment)
        {
            return (equipment.EditDisposition && ("delete" == equipment.EditDisposition));
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
            else if (null == get_selected_feature ())
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

                    if (!through_opens &&
                        (equipment.open || ("undefined" == typeof (equipment.open) && equipment.normalOpen)))
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
                source = CIM_Data.ConductingEquipment[get_selected_feature ()];
                if (null == source)
                {
                    // try for a terminal
                    var term = CIM_Data.Terminal[get_selected_feature ()];
                    source = term ? CIM_Data.ConductingEquipment[term.ConductingEquipment] : null;
                    preload (source, term);
                }
                if (null == source)
                {
                    // try for a node
                    var terms = terminals_by_node[get_selected_feature ()];
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
                        // don't trace deleted elements
                        var element = CIM_Data.Element[source];
                        if (null == element || deleted (element))
                            continue;

                        equipment.push (source);
                        var ce = CIM_Data.ConductingEquipment[source];
                        if (null == ce || stop (ce))
                            continue;
                        var terms = terminals_by_equp[source];
                        if (null != terms)
                            for (var i = 0; i < terms.length; i++)
                            {
                                var terminal = CIM_Data.Terminal[terms[i]];
                                if (null != terminal && !deleted (terminal))
                                {
                                    var equp = terminal.ConductingEquipment;
                                    if (null != equp && !deleted (equp))
                                        if (!equipment.includes (equp) && !todo.includes (equp))
                                            todo.push (equp); // this should never happen
                                    var node = terminal.ConnectivityNode;
                                    if (null != node && !deleted (node))
                                    {
                                        var next = terminals_by_node[node];
                                        if (null != next)
                                            for (var j = 0; j < next.length; j++)
                                            {
                                                if (next[j] != terms[i]) // don't trace back the way we came
                                                {
                                                    var t = CIM_Data.Terminal[next[j]];
                                                    if (null != t && !deleted (t))
                                                    {
                                                        var e = t.ConductingEquipment;
                                                        if (null != e && !deleted (e))
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
                    // notify listeners
                    select (get_selected_feature (), equipment);
                    // highlight the elements on screen
                    var hl = equipment.slice (0);
                    hl.unshift ("in", "mRID");
                    glow (hl);
                }
            }

            return (false);
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
                if ("" != (text = document.getElementById ("search_text").value.trim ()))
                {
                    var match = [];
                    for (var id in CIM_Data.Element)
                    {
                        var obj = CIM_Data.Element[id];
                        if (!deleted (obj))
                        {
                            if (obj.id == text)
                                match.push (id);
                            else if (obj.mRID == text)
                                match.push (id);
                            else if (obj.name == text)
                                match.push (id);
                            else if (obj.aliasName == text)
                                match.push (id);
                        }
                    }
                    if (match.length > 0)
                    {
                        match.sort ();
                        var list = match;
                        var mrid = match[0];
                        var current = null;
                        var bb = null;
                        for (var i = 0; i < list.length; i++)
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
                            mrid = current;
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
                        select (mrid, list);
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
         * @description Given some CIM data has been loaded, redraws the map.
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

        function poink (x, y)
        {
            var width = 4;
            var height = 4;
            var features = TheMap.queryRenderedFeatures
            (
                [
                  [x - width / 2, y - height / 2],
                  [x + width / 2, y + height / 2]
                ],
                {}
            );
            if ((null != features) && (0 != features.length))
            {
                var selection = [];
                for (var i = 0; i < features.length; i++)
                {
                    var mrid = features[i].properties.mRID;
                    if (null != mrid && !selection.includes (mrid))
                        selection.push (mrid);
                }
                if (selection.length > 0)
                    select (selection[0], selection);
                else
                    select (null);
            }
            else
                select (null);
        }

        // handle mouse click
        function default_mousedown_listener (event)
        {
            // only do something if no key is pressed
            var key = event.originalEvent.ctrlKey || event.originalEvent.shiftKey || event.originalEvent.altKey || event.originalEvent.metaKey;
            if (!key)
            {
                var buttons = event.originalEvent.buttons;
                //    0  : No button or un-initialized
                //    1  : Primary button (usually left)
                //    2  : Secondary button (usually right)
                var leftbutton = 0 != (buttons & 1);
                var rightbutton = 0 != (buttons & 2);
                if (leftbutton)
                    poink (event.point.x, event.point.y);
                else if (rightbutton)
                {
                    //<i id="" class="fa fa-map-marker"></i>
                    var element = document.createElement ("i");
                    element.className = "fa fa-map-marker fa-2x";
                    var marker = new mapboxgl.Marker (element)
                      .setLngLat (event.lngLat)
                      .addTo (event.target);
                }
            }
        }

        function default_touchstart_listener (event)
        {
            // only do something if no key is pressed
            var key = event.originalEvent.ctrlKey || event.originalEvent.shiftKey || event.originalEvent.altKey || event.originalEvent.metaKey;
            if (!key)
                poink (event.point.x, event.point.y);
        }

        function add_listeners ()
        {
            if (!Listening)
            {
                TheMap.on ("mousedown", default_mousedown_listener);
                TheMap.on ("touchstart", default_touchstart_listener);
                Listening = true;
            }
        }

        function remove_listeners ()
        {
            if (Listening)
            {
                TheMap.off ("mousedown", default_mousedown_listener);
                TheMap.off ("touchstart", default_touchstart_listener);
                Listening = false;
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
            document.getElementById ("map").innerHTML = "";
            mapboxgl.accessToken = TheToken;
            TheMap = new mapboxgl.Map
            (
                {
                    name: "TheMap",
                    version: 8,
                    container: "map",
                    center: [7.48634000000001, 46.93003],
                    zoom: 8,
                    maxZoom: 22,
                    // Note: this local copy is the same as mapbox (as of 3.10.2017) except for the reference
                    // to the sprite URL which is changed to     sprite: "/styles/streets-v9-sprites"
                    // style: "mapbox://styles/mapbox/streets-v9",
                    style: "/styles/streets-v9.json",
                    hash: true,
                    transformRequest: toURL
                }
            );
            // add zoom and rotation controls to the map
            TheMap.addControl (new cimnav.NavigationControl (zoom_extents, toggle_info, toggle_themer, toggle_legend, toggle_edit, connectivity));
            add_listeners ();
            // set up themes
            TheThemer = new ThemeControl ();
            TheThemer.addTheme (new DefaultTheme ());
            TheThemer.addTheme (new VoltageTheme ());
            TheThemer.addTheme (new IslandTheme ());
            TheThemer.addTheme (new InServiceTheme ());
            TheThemer.theme_change_listener (redraw);
            // set up viewing
            TheDetails = new CIMDetails (getInterface ());
            // set up editing
            TheEditor = new CIMEdit (getInterface ());
            // set up connectivity
            TheConnectivity = new CIMConnectivity (getInterface (), TheEditor);
            // display any existing data
            redraw ();
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
                document.getElementById ("map").innerHTML = "";
            }
        }

        function getInterface ()
        {
            return (
                {
                     get_map: get_map,
                     set_data: set_data,
                     get_data: get_data,
                     get_selected_feature: get_selected_feature,
                     get_selected_features: get_selected_features,
                     add_feature_listener: add_feature_listener,
                     remove_feature_listener: remove_feature_listener,
                     set_extents: set_extents,
                     get_extents: get_extents,
                     get_themer: get_themer,
                     get_editor: get_editor,
                     get_connectivity: get_connectivity,
                     show_internal_features: show_internal_features,
                     show_3d_buildings: show_3d_buildings,
                     show_scale_bar: show_scale_bar,
                     show_coordinates: show_coordinates,
                     show_streetview: show_streetview,
                     make_map, make_map,
                     zoom_extents: zoom_extents,
                     get: get,
                     forAll: forAll,
                     fetch: fetch,
                     select: select,
                     buildings_3d: buildings_3d,
                     scale_bar: scale_bar,
                     coordinates: coordinates,
                     trace: trace,
                     search: search,
                     redraw: redraw,
                     add_listeners: add_listeners,
                     remove_listeners: remove_listeners,
                     initialize: initialize,
                     terminate: terminate
                }
            );
        }

        return (getInterface ());
    }
);
