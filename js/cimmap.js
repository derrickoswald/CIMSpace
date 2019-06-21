/**
 * Map functions for CIM Application
 */
"use strict";
define
(
    ["cimcoordinates"],
    /**
     * @summary MapBox map.
     * @description Container and interface for map operations.
     * @exports cimmap
     * @version 1.0
     */
    function (cimcoordinates)
    {
        /**
         * The map object.
         * @see https://www.mapbox.com
         */
        let TheMap = null;

        /**
         * The extents of visible objects (those with Location and PositionPoint).
         */
        let TheExtents = null;

        /**
         * The editor control object.
         */
        let TheEditor = null;

        /**
         * The theme setting control object.
         */
        let TheThemer = null;

        /**
         * The scale bar control.
         */
        let TheScaleBar = null;

        /**
         * The coordinate display control.
         */
        let TheCoordinates = null;

        /**
         * The user specific token to access mapbox tiles.
         */
        const TheToken = "pk.eyJ1IjoiZG9zd2FsZCIsImEiOiJjaXdvd213aHgwMDBsMnlvZWY3amQ4YXR0In0.e9FmfCdPkY6I9DreofObwA";

        /**
         * Information about loaded file(s).
         */
        let CIM_File = null;

        /**
         * The CIM file contents after load.
         */
        let CIM_Data = null;

        /**
         * The last selected feature.
         */
        let CURRENT_FEATURE = null;

        /**
         * The last selected features.
         */
        let CURRENT_SELECTION = null;

        /**
         * Flag indicating map listeners are attached or not.
         */
        let Listening = false;

        /**
         * List of registered objects supporting selection_change (CURRENT_FEATURE, CURRENT_SELECTION).
         */
        let FeatureListeners = [
            {
                selection_change: function (mrid)
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
         */
        function get_map ()
        {
            return (TheMap);
        }

        /**
         * Set the loaded file information.
         *
         * @param {Object} info is of the form { files: ["filename"], options: {}, elements: int }
         */
        function set_loaded (info)
        {
            CIM_File = info;
            if (CIM_File && CIM_File.files)
            {
                const t = document.title;
                const index = t.indexOf (" - ");
                const banner = (-1 !== index) ? t.substring (0, index) : t;
                document.title = banner + " - " + CIM_File.files.map (x => x.replace (/\.(rdf|xml|RDF|XML)$/, "")).join ();
            }
        }

        /**
         * Get the loaded file information.
         */
        function get_loaded ()
        {
            return (CIM_File);
        }

        /**
         * Set the CIM data for the map to draw.
         * @param {JSON} data Data parsed from the cim module.
         * @param nozoom If <code>true</code> does not perform a zoom extents.
         */
        function set_data (data, nozoom)
        {
            CIM_Data = data;
            const make = make_map ();
            if (!nozoom)
                make.then (zoom_extents);
        }

        /**
         * Get the CIM data the map is displaying.
         * @return {JSON} Data parsed from the cim module.
         */
        function get_data ()
        {
            return (CIM_Data);
        }

        /**
         * Get the currently selected feature.
         * @return the mRID of the currently selected feature or null if none.
         */
        function get_selected_feature ()
        {
            return (CURRENT_FEATURE);
        }

        /**
         * Get the currently selected feature list.
         * @return the array of mRID of the currently selected features or null if none.
         */
        function get_selected_features ()
        {
            return (CURRENT_SELECTION);
        }

        /**
         * Add an object that will be called when feature selections change.
         * @param {Object} obj the feature listener
         */
        function add_feature_listener (obj)
        {
            if (!FeatureListeners.includes (obj))
                FeatureListeners.push (obj);
        }

        /**
         * Remove an object from the list of objects that will be called when feature selections change.
         * @param {Object} obj the feature listener
         */
        function remove_feature_listener (obj)
        {
            if (FeatureListeners.includes (obj))
            {
                const index = FeatureListeners.indexOf (obj);
                FeatureListeners = FeatureListeners.filter ((x, i) => i !== index);
            }
        }

        /**
         * Set the extents of the CIM data for the map to draw.
         * @param {Object} extents new extents value { xmin: , ymin: , xmax: , ymax: }
         */
        function set_extents (extents)
        {
            TheExtents = extents;
        }

        /**
         * Get the extents of the CIM data the map is displaying.
         * @return {Object} current extents value { xmin: , ymin: , xmax: , ymax: }
         */
        function get_extents ()
        {
            return (TheExtents);
        }

        /**
         * Get the theming object for access to themes.
         * @return {Object} The object handling theming.
         * @return {{ removeTheme : function(Object), addTheme : function(Object, [Boolean]) }} The current theme object.
         */
        function get_themer ()
        {
            return (TheThemer);
        }

        /**
         * Get the editor object for access to editing.
         * @return {Object} The object handling editing.
         */
        function get_editor ()
        {
            return (TheEditor);
        }

        /**
         * Get the user's choice for showing internal features.
         * @returns {boolean} <code>true</code> if internal features should be shown, <code>false</code> otherwise
         */
        function show_internal_features ()
        {
            return (document.getElementById ("internal_features").checked);
        }

        /**
         * Get the user's choice for 3d buildings.
         * @returns {boolean} <code>true</code> show buildings in 3D, <code>false</code> otherwise
         */
        function show_3d_buildings ()
        {
            return (document.getElementById ("buildings_3d").checked);
        }

        /**
         * Get the user's choice for whether a scale bar is displayed or not.
         * @returns {boolean} <code>true</code> if a scale bar should be shown, <code>false</code> otherwise
         */
        function show_scale_bar ()
        {
            return (document.getElementById ("scale_bar").checked);
        }

        /**
         * Get the user's choice for whether coordinates are displayed or not.
         * @returns {boolean} <code>true</code> if coordinates should be shown, <code>false</code> otherwise
         */
        function show_coordinates ()
        {
            return (document.getElementById ("coordinate").checked);
        }

        /**
         * Get the user's choice for whether StreetView links are displayed or not.
         * @returns {boolean} <code>true</code> if a streetview link for features should be shown, <code>false</code> otherwise
         */
        function show_streetview ()
        {
            return (document.getElementById ("streetview").checked);
        }

        /**
         * Sleep for some milliseconds.
         *
         * @param ms number of milliseconds to sleep
         * @return a Promise that resolves when the number of milliseconds elapses
         */
        function sleep (ms)
        {
            return (new Promise (resolve => setTimeout (resolve, ms)));
        }

        /**
         * Pause to wait for some occurrence.
         *
         * @param predicate function to test, returns false when the pause is over, true if pausing should continue
         * @param ms number of milliseconds to wait between predicate tests
         * @return a Promise that resolves only when the predicate fails
         */
        function pause (predicate, ms)
        {
            ms = ms || 1000;
            const ret = new Promise (
                (resolve, reject) =>
                {
                    if (predicate ())
                        sleep (ms).then (
                            () =>
                            {
                                pause (predicate, ms).then (resolve, reject);
                            }
                        );
                    else
                        resolve ();
                }
            );
            return (ret);
        }

        function wait_for_map ()
        {
            return (pause (() => null == TheMap));
        }

        function wait_for_map_loaded ()
        {
            function predicate ()
            {
                return (!TheMap.loaded ())
            }

            return (
                new Promise (
                    function (resolve, reject)
                    {
                        function handler (data) // {error: {message: string}}
                        {
                            const message = JSON.stringify (data);
                            console.log (message);
                            TheMap.off ("error", handler);
                            reject (message);
                        }

                        if (predicate ())
                        {
                            TheMap.on ("error", handler);
                            pause (predicate).then (() => { TheMap.off ("error", handler); resolve (); });
                        }
                        else
                            resolve ();
                    }
                )
            );
        }

        function domap ()
        {
            return (
                new Promise (
                    function (resolve)
                    {
                        select (null);
                        if (TheThemer)
                            if (TheThemer.getTheme ())
                                if (TheThemer.getTheme ().getLegend ().visible ())
                                    TheMap.removeControl (TheThemer.getTheme ().getLegend ());
                        TheThemer.theme (getInterface (),
                            {
                                show_internal_features: show_internal_features ()
                            });
                        TheExtents = TheThemer.getExtents ();
                        buildings_3d ();
                        resolve ();
                    }
                )
            );
        }

        /**
         * Returns a promise to create the map.
         * The resolve() action resolves with no argument.
         */
        function make_map ()
        {
            return (wait_for_map ().then (wait_for_map_loaded).then (domap));
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

        function get (classname, id)
        {
            let ret = undefined;
            if (classname && id)
            {
                let data = get_data ();
                if (data)
                {
                    const objects = data[classname];
                    if (objects)
                        ret = objects[id];
                }
                ret = (ret && ret.EditDisposition && ret.EditDisposition === "delete") ? undefined : ret;
                if (!ret && get_editor ().has_new_features ())
                {
                    data = get_editor ().new_features ();
                    const objects = data[classname];
                    if (objects)
                        ret = objects[id];
                }
            }
            return ((ret && ret.EditDisposition && ret.EditDisposition === "delete") ? undefined : ret);
        }

        function forAll (classname, fn)
        {
            let broken = false;
            function iterateOver (objects, fn)
            {
                if (objects)
                    for (let property in objects)
                    {
                        if (objects.hasOwnProperty (property))
                        {
                            const obj = objects[property];
                            if (!obj.EditDisposition || (obj.EditDisposition !== "delete"))
                                broken = fn (obj);
                        }
                        if (broken)
                            break;
                    }
            }
            let data = get_data ();
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
            const ret = [];
            function iterateOver (objects, fn)
            {
                if (objects)
                    for (let property in objects)
                        if (objects.hasOwnProperty (property))
                        {
                            const obj = objects[property];
                            if (!obj.EditDisposition || (obj.EditDisposition !== "delete"))
                                if (fn (obj))
                                    ret.push (obj);
                        }
            }
            let data = get_data ();
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
         * @param {string | Object} filter - the filter to apply to the highlight layers
         */
        function glow (filter)
        {
            if (TheMap && TheMap.getSource ("cim lines"))
            {
                if (TheMap.getLayer("lines_highlight"))
                    TheMap.setFilter ("lines_highlight", filter);
                if (TheMap.getLayer("circle_highlight"))
                    TheMap.setFilter ("circle_highlight", filter);
                if (TheMap.getLayer("symbol_highlight"))
                    TheMap.setFilter ("symbol_highlight", filter);
            }
            if (TheMap && TheMap.getSource ("edit lines"))
            {
                if (TheMap.getLayer("edit_lines_highlight"))
                    TheMap.setFilter ("edit_lines_highlight", filter);
                if (TheMap.getLayer("edit_circle_highlight"))
                    TheMap.setFilter ("edit_circle_highlight", filter);
                if (TheMap.getLayer("edit_symbol_highlight"))
                    TheMap.setFilter ("edit_symbol_highlight", filter);
            }
        }

        /**
         * @summary Display the current feature highlighted on the map.
         * @description Highlights the currently selected feature in the map.
         */
        function highlight ()
        {
            if ((null != CIM_Data) && (null != get_selected_feature ()))
                glow (["in", "mRID", get_selected_feature ()]);
        }

        /**
         * @summary Removes highlighting from the highlighted object.
         * @description Reverts any highlighting in the map.
         */
        function unhighlight ()
        {
            glow (["==", "mRID", ""]);
            return (false);
        }

        /**
         * @summary Handler for a current feature link click.
         * @description Sets the current feature and redisplay the highlighting appropriately and notify listeners.
         */
        function select (mrid, list)
        {
            // cheap check for array equality
            function lists_equal (list1, list2)
            {
                return (list1.sort ().join (",") === list2.sort ().join (","))
            }

            if (null != mrid)
            {
                if (mrid !== get_selected_feature () || !lists_equal (get_selected_features (), list))
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
         */
        function buildings_3d ()
        {
            if (show_3d_buildings ())
            {
                if ("undefined" == typeof (TheMap.getLayer ("3d-buildings")))
                {
                    // insert the layer beneath any symbol layer.
                    const layers = TheMap.getStyle ().layers.reverse ();
                    const index = layers.findIndex (
                        function (layer)
                        {
                            return (layer.type !== "symbol");
                        }
                    );
                    const id = index !== -1 ? layers[index].id : undefined;
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
         */
        function scale_bar ()
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
         */
        function coordinates ()
        {
            if (show_coordinates ())
            {
                if ((null != TheMap) && (null == TheCoordinates))
                {
                    TheCoordinates = new cimcoordinates ();
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
         */
        function trace_through_open_switches ()
        {
            return (document.getElementById ("trace_through_open_switches").checked);
        }

        /**
         * Get the user's choice for through transformer tracing.
         * @returns {boolean} <code>true</code> a trace across voltage level changes should be done, <code>false</code> otherwise
         */
        function trace_though_voltage_level_changes ()
        {
            return (document.getElementById ("trace_though_voltage_level_changes").checked);
        }

        /**
         * Get the user's choice for number of elements to trace.
         * @returns {number} Either the user's requested number or 0 indicating don't limit tracing.
         */
        function number_of_elements ()
        {
            const no = document.getElementById ("number_of_elements").value;
            let ret = Number (no);
            if (isNaN (ret))
                ret = 0;
            return (ret);
        }

        /**
         * Get voltage level boundary transformers.
         * @description Get a list of tranformers with ends where voltages differ.
         */
        function get_transformers ()
        {
            const transformers = {};
            const ret = {};

            for (let end in CIM_Data.PowerTransformerEnd)
                if (CIM_Data.PowerTransformerEnd.hasOwnProperty (end))
                {
                    const e = CIM_Data.PowerTransformerEnd[end];
                    const transformer = e.PowerTransformer;
                    if (null != transformer)
                    {
                        if (null == transformers[transformer])
                            transformers[transformer] = [];
                        const no = e.endNumber;
                        if (null != no)
                            transformers[transformer][Number(no)] = e
                    }
                }
            // eliminate transformers which have the same voltage on both ends
            for (let trans in transformers)
                if (transformers.hasOwnProperty (trans))
                {
                    const ends = transformers[trans];
                    if (ends && ends.length > 1)
                    {
                        const high_voltage = Number (CIM_Data.BaseVoltage[ends[1].BaseVoltage].nominalVoltage);
                        let unequal = false;
                        for (let i = 2; "undefined" != typeof (ends[i]); i++)
                            if (high_voltage !== Number (CIM_Data.BaseVoltage[ends[i].BaseVoltage].nominalVoltage))
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
            return (equipment.EditDisposition && ("delete" === equipment.EditDisposition));
        }

        /**
         * Trace the currently selected object and highlight the results.
         * @description Traverse through the ConnectivityNode, Terminal and ConductingEquipment
         * to make a list of connected devices and wires. Then highlight them on screen.
         */
        function trace ()
        {
            // the source feature
            let source;
            // the type of switch trace
            const through_opens = trace_through_open_switches ();
            // the type of transformer trace
            const through_voltages = trace_though_voltage_level_changes ();
            const transformers = (through_voltages) ? get_transformers () : {};

            function stop (equipment)
            {
                let ret = false;

                if (!through_opens && (equipment.open || ("undefined" == typeof (equipment.open) && equipment.normalOpen)))
                    ret = true;
                else if (!through_voltages && (null != transformers[equipment.mRID]))
                    ret = true;

                return (ret);
            }

            function preload (source, terminal, terminals_by_equp, terminals_by_node)
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
                                const terminal = CIM_Data.Terminal[t];
                                if (terminal.ConductingEquipment !== source.mRID)
                                    todo.push (terminal.ConductingEquipment);
                            }
                        );
                    }
            }

            if (null == CIM_Data)
                alert ("no CIM data loaded");
            else if (null == get_selected_feature ())
                alert ("no feature selected");
            else
            {
                // organize terminals by connectivity node and equipment
                const terminals_by_node = {};
                const terminals_by_equp = {};
                for (let t in CIM_Data.Terminal)
                    if (CIM_Data.Terminal.hasOwnProperty (t))
                    {
                        const terminal = CIM_Data.Terminal[t];
                        const node = terminal.ConnectivityNode;
                        if (null != node)
                        {
                            if (null == terminals_by_node[node])
                                terminals_by_node[node] = [];
                            if (!terminals_by_node[node].includes (terminal.mRID))
                                terminals_by_node[node].push (terminal.mRID);
                        }
                        const equp = terminal.ConductingEquipment;
                        if (null != equp)
                        {
                            if (null == terminals_by_equp[equp])
                                terminals_by_equp[equp] = [];
                            if (!terminals_by_equp[equp].includes (terminal.mRID))
                                terminals_by_equp[equp].push (terminal.mRID);
                        }
                    }

                // the list of things to trace
                const todo = [];

                // get the source equipment
                source = CIM_Data.ConductingEquipment[get_selected_feature ()];
                if (null == source)
                {
                    // try for a terminal
                    const term = CIM_Data.Terminal[get_selected_feature ()];
                    source = term ? CIM_Data.ConductingEquipment[term.ConductingEquipment] : null;
                    preload (source, term, terminals_by_equp, terminals_by_node);
                }
                if (null == source)
                {
                    // try for a node
                    const terms = terminals_by_node[get_selected_feature ()];
                    if (terms)
                        for (let i = 0; (i < terms.length) && (null == source); i++)
                        {
                            const term = CIM_Data.Terminal[terms[i]];
                            source = term ? CIM_Data.ConductingEquipment[term.ConductingEquipment] : null;
                            preload (source, term, terminals_by_equp, terminals_by_node);
                        }
                }
                if (null == source)
                    alert ("feature is not part of the topology");
                else
                {
                    todo.push (source.mRID);

                    // the list of traced conducting equipment
                    const equipment = [];
                    // iterate until done
                    let count = number_of_elements ();
                    while ("undefined" != typeof (source = todo.pop ())) // if you call pop() on an empty array, it returns undefined
                    {
                        // don't trace deleted elements
                        const element = CIM_Data.Element[source];
                        if (null == element || deleted (element))
                            continue;

                        equipment.push (source);
                        const ce = CIM_Data.ConductingEquipment[source];
                        if (null == ce || stop (ce))
                            continue;
                        const terms = terminals_by_equp[source];
                        if (null != terms)
                            for (let i = 0; i < terms.length; i++)
                            {
                                const terminal = CIM_Data.Terminal[terms[i]];
                                if (null != terminal && !deleted (terminal))
                                {
                                    const equp = terminal.ConductingEquipment;
                                    if (null != equp && !deleted (equp))
                                        if (!equipment.includes (equp) && !todo.includes (equp))
                                            todo.push (equp); // this should never happen
                                    const node = terminal.ConnectivityNode;
                                    if (null != node && !deleted (node))
                                    {
                                        const next = terminals_by_node[node];
                                        if (null != next)
                                            for (let j = 0; j < next.length; j++)
                                            {
                                                if (next[j] !== terms[i]) // don't trace back the way we came
                                                {
                                                    const t = CIM_Data.Terminal[next[j]];
                                                    if (null != t && !deleted (t))
                                                    {
                                                        const e = t.ConductingEquipment;
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
                        if (0 === count)
                            break;
                    }
                    // sort the list to make it easy to find an element
                    equipment.sort ();
                    // notify listeners
                    select (get_selected_feature (), equipment);
                    // highlight the elements on screen
                    const hl = equipment.slice (0);
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
         * @return {Object} the bounding box
         */
        function get_bounding_box (id)
        {
            let ret = null;

            let feature;
            let location;
            if (null != (feature = CIM_Data.Element[id]))
            {
                if (null != (location = feature.Location))
                {
                    let minx = Number.MAX_VALUE;
                    let maxx = Number.MIN_VALUE;
                    let miny = Number.MAX_VALUE;
                    let maxy = Number.MIN_VALUE;
                    const pp = CIM_Data.PositionPoint;
                    let valid = false;
                    for (let point in pp)
                        if (pp.hasOwnProperty (point))
                        {
                            const p = pp[point];
                            if (location === p.Location)
                            {
                                const x = Number (p.xPosition);
                                const y = Number (p.yPosition);
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

        function measure (lon1, lat1, lon2, lat2)
        {
            const rlat1 = lat1 * Math.PI / 180;
            const rlat2 = lat2 * Math.PI / 180;
            const dlat = rlat2 - rlat1;
            const dlon = (lon2 -lon1) * Math.PI / 180;
            const sin1 = Math.sin (dlat / 2.0);
            const sin2 = Math.sin (dlon / 2.0);
            const a = sin1 * sin1 + Math.cos (rlat1) * Math.cos (rlat2) * sin2 * sin2;
            const c = 2.0 * Math.atan2 (Math.sqrt (a), Math.sqrt (1.0 - a));
            return (c * 6378.137e3); // earth radius in meters
        }


        /**
         * Search the element identifiers to find those that match the search text.
         * @description Scan through all elements and make a list of those
         * where the id, mRID, name or aliasName match the user enetered text.
         * If some are found, highlight the first and zoom to the area that
         * contains the element.
         */
        function search ()
        {
            let text;
            if (null != CIM_Data)
                if ("" !== (text = document.getElementById ("search_text").value.trim ()))
                {
                    const match = [];
                    for (let id in CIM_Data.Element)
                        if (CIM_Data.Element.hasOwnProperty (id))
                        {
                            const obj = CIM_Data.Element[id];
                            if (!deleted (obj))
                            {
                                if (obj.id === text)
                                    match.push (id);
                                else if (obj.mRID === text)
                                    match.push (id);
                                else if (obj.name === text)
                                    match.push (id);
                                else if (obj.aliasName === text)
                                    match.push (id);
                            }
                        }
                    if (match.length > 0)
                    {
                        match.sort ();
                        const list = match;
                        let mrid = match[0];
                        let current = null;
                        let bb = null;
                        for (let i = 0; i < list.length; i++)
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
                            const bounds = TheMap.getBounds ();
                            const zoom = TheMap.getZoom ();
                            const x = (bb[1][0] - bb[0][0]) / 2.0 + bb[0][0];
                            const y = (bb[1][1] - bb[0][1]) / 2.0 + bb[0][1];
                            // resolution (meters/pixel) = (Math.cos (y * Math.PI / 180.0) * 2.0 * Math.PI * 6378.137e3) / (512 * Math.pow (2, zoom));
                            // zoom = Math.log2 ((Math.cos (y * Math.PI / 180.0) * 2.0 * Math.PI * 6378.137e3) / (512 * resolution)) ;
                            const margin = 20; // pixels
                            const pixels = TheMap.getContainer ().clientHeight - 2 * margin;
                            const height = measure (bb[0][0], bb[0][1], bb[0][0], bb[1][1]);
                            let new_zoom = Math.log2 ((Math.cos (y * Math.PI / 180.0) * 2.0 * Math.PI * 6378.137e3) / (512 * (height / pixels)));
                            // if we're not zoomed in already (showing symbols icons from 17 and deeper)
                            // or the object bounds are not within the map bounds,
                            // refocus the map
                            new_zoom = Math.min (Math.max (17, zoom), new_zoom);
                            if ((bb[0][0] < bounds.getWest ()) ||
                                (bb[1][0] > bounds.getEast ()) ||
                                (bb[0][1] < bounds.getSouth ()) ||
                                (bb[1][1] > bounds.getNorth ()) ||
                                (new_zoom !== zoom))
                            {
                                TheMap.easeTo
                                (
                                    {
                                        center: [x, y],
                                        zoom: new_zoom
                                    }
                                );
                            }
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
         */
        function redraw (event)
        {
            make_map ();
        }

        /**
         * @summary Checks for execution from file://.
         * @description Determines if the script is running from an active server or just loaded passively from file.
         * @returns {boolean} <code>true</code> if the code is running from file://
         */
        function running_local ()
        {
            return (
                ("null" === window.location.origin) // Firefox
             || ("file://" === window.location.origin) // chromium
                )
        }

        /**
         * @summary Doctor local urls.
         * @description Fix the brain-dead handling by mapbox for local URLs.
         * @param {string} url - the URL to massage.
         * @param {string} resourcetype - the resource type <em>not used</em>
         */
        function toURL (url, resourcetype)
        {
            let _url = url.startsWith (":///") ? url.substring (3) : url;
            if (_url.startsWith ("/"))
               _url = running_local () ? _url.substring (1) : window.location.origin + window.location.pathname + _url.substring (1);
            return ({ url: _url });
        }

        function poink (x, y)
        {
            const width = 4;
            const height = 4;
            const features = TheMap.queryRenderedFeatures
            (
                [
                  [x - width / 2, y - height / 2],
                  [x + width / 2, y + height / 2]
                ],
                {}
            );
            if ((null != features) && (0 !== features.length))
            {
                const selection = [];
                for (let i = 0; i < features.length; i++)
                {
                    const mrid = features[i].properties.mRID;
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
                    poink (event.point.x, event.point.y);
                else if (rightbutton)
                {
                    //<i id="" class="fa fa-map-marker"></i>
                    const element = document.createElement ("i");
                    element.className = "fa fa-map-marker fa-2x";
                    const marker = new mapboxgl.Marker (element)
                      .setLngLat (event.lngLat)
                      .addTo (event.target);
                }
            }
        }

        function default_touchstart_listener (event)
        {
            // only do something if no key is pressed
            const key = event.originalEvent.ctrlKey || event.originalEvent.shiftKey || event.originalEvent.altKey || event.originalEvent.metaKey;
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
         * @param nav the navigation control for the map
         * @param themer the theme setting control for the map
         * @param editor the CIM data editor
         */
        function initialize (nav, themer, editor)
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
                    maxZoom: 24,
                    // Note: this local copy is the same as mapbox (as of 3.10.2017) except for the reference
                    // to the sprite URL which is changed to     sprite: "/styles/streets-v9-sprites"
                    // style: "mapbox://styles/mapbox/streets-v9",
                    style: "/styles/streets-v9.json",
                    hash: true,
                    transformRequest: toURL
                }
            );
            // add zoom and rotation controls to the map
            TheMap.addControl (nav);
            TheEditor = editor;
            TheThemer = themer;
            TheThemer.theme_change_listener (redraw);
            add_listeners ();
        }

        /**
         * @summary Shut down the map.
         * @description Clean up and close the map.
         * @param {object} event - <em>not used</em>
         */
        function terminate (event)
        {
            if (null != TheMap)
            {
                TheMap.remove ();
                document.getElementById ("map").innerHTML = "";
            }
        }

        function getInterface ()
        {
            return (
                {
                    get_map: get_map,
                    set_loaded: set_loaded,
                    get_loaded: get_loaded,
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
                    show_internal_features: show_internal_features,
                    show_3d_buildings: show_3d_buildings,
                    show_scale_bar: show_scale_bar,
                    show_coordinates: show_coordinates,
                    show_streetview: show_streetview,
                    make_map: make_map,
                    wait_for_map_loaded: wait_for_map_loaded,
                    zoom_extents: zoom_extents,
                    get: get,
                    forAll: forAll,
                    fetch: fetch,
                    select: select,
                    buildings_3d: buildings_3d,
                    scale_bar: scale_bar,
                    coordinates: coordinates,
                    trace: trace,
                    measure: measure,
                    search: search,
                    redraw: redraw,
                    default_mousedown_listener: default_mousedown_listener,
                    default_touchstart_listener: default_touchstart_listener,
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
