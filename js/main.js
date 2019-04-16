/**
 * Main javascript file for CIMSpace application
 * Performs application initialization as the first step in the RequireJS load sequence.
 * @see http://requirejs.org/docs/api.html#data-main
 */
"use strict";
requirejs
(
    ["cimspace", "cimmap", "cimnav", "cimdetails", "cimedit", "cimconnectivity", "cimdiagram",
     "themes/cimthemes", "themes/default_theme", "themes/voltage", "themes/island", "themes/inservice", "themes/diagram"],
    function (cimspace, cimmap, cimnav, CIMDetails, CIMEdit, CIMConnectivity, CIMDiagram,
              ThemeControl, DefaultTheme, VoltageTheme, IslandTheme, InServiceTheme, DiagramTheme)
    {
        // initialize widgets
        document.getElementById ("file_button").onchange = cimspace.file_change;
        document.getElementById ("connect").onclick = cimspace.process_url;
        document.getElementById ("save_name").onchange = cimspace.save_name_change;
        document.getElementById ("rdf_about").onchange = cimspace.about_change;
        document.getElementById ("md_description").onchange = cimspace.description_change;
        document.getElementById ("full_model").onchange = cimspace.save_mode_change;
        document.getElementById ("difference_model").onchange = cimspace.save_mode_change;
        document.getElementById ("only_new").onchange = cimspace.save_mode_change;
        document.getElementById ("save_file").onclick = cimspace.generate_rdf;
        document.getElementById ("internal_features").onchange = cimmap.redraw;
        document.getElementById ("buildings_3d").onchange = cimmap.buildings_3d;
        document.getElementById ("scale_bar").onchange = cimmap.scale_bar;
        document.getElementById ("coordinate").onchange = cimmap.coordinates;

        // drag and drop listeners
        document.getElementById ("files_drop_zone").ondragover = cimspace.file_drag;
        document.getElementById ("files_drop_zone").ondrop = cimspace.file_drop;

        // javascript functions
        document.getElementById ("trace").onclick = cimmap.trace;
        document.getElementById ("unhighlight").onclick = function () { cimmap.select (null); };
        document.getElementById ("search").onsubmit = cimmap.search;
        document.getElementById ("search_button").onclick = cimmap.search;

        /**
         * The detail view control object.
         */
        var TheDetails = new CIMDetails (cimmap);

        /**
         * The editor control object.
         */
        var TheEditor = new CIMEdit (cimmap);

        /**
         * The connectivity control object.
         */
        var TheConnectivity = new CIMConnectivity (cimmap, TheEditor);

        /**
         * The diagram control object.
         */
        var TheDiagram = new CIMDiagram (cimmap);

        /**
         * The theme setting control object.
         */
        var TheThemer = new ThemeControl ();
        TheThemer.addTheme (new DefaultTheme ());
        TheThemer.addTheme (new VoltageTheme ());
        TheThemer.addTheme (new IslandTheme ());
        TheThemer.addTheme (new InServiceTheme ());
        TheThemer.addTheme (new DiagramTheme ());

        /**
         * Get the detail view object for access to viewing.
         * @return {Object} The object handling details view.
         * @function get_details
         * @memberOf module:cimmain
         */
        function get_details ()
        {
            return (TheDetails);
        }

        /**
         * Get the editor object for access to editing.
         * @return {Object} The object handling editing.
         * @function get_editor
         * @memberOf module:main
         */
        function get_editor ()
        {
            return (TheEditor);
        }

        /**
         * Get the connectivity for changing connectivity.
         * @return {Object} The object handling connectivity.
         * @function get_connectivity
         * @memberOf module:main
         */
        function get_connectivity ()
        {
            return (TheConnectivity);
        }

        /**
         * Get the diagram editor.
         * @return {Object} The object handling diagrams.
         * @function get_diagram
         * @memberOf module:main
         */
        function get_diagram ()
        {
            return (TheDiagram);
        }

        /**
         * Get the theming object for access to themes.
         * @return {Object} The object handling theming.
         * @function get_themer
         * @memberOf module:main
         */
        function get_themer ()
        {
            return (TheThemer);
        }

        function toggle (control_function)
        {
            return (
                function ()
                {
                    var control = control_function ();
                    if (control.visible ())
                        cimmap.get_map ().removeControl (control);
                    else
                    {
                        cimmap.get_map ().addControl (control);
                        control.initialize ();
                    }
                }
            );
        }

        var TheNavigator =  new cimnav.NavigationControl (
            cimmap.zoom_extents,
            toggle (get_details),
            toggle (get_themer),
            toggle (function () { return (get_themer ().getTheme ().getLegend ()); }),
            toggle (get_editor),
            toggle (get_connectivity),
            toggle (get_diagram));

        cimmap.initialize (TheNavigator, TheThemer, TheEditor);
    }
);
