/**
 * Main javascript file for CIMSpace application
 * Performs application initialization as the first step in the RequireJS load sequence.
 * @see http://requirejs.org/docs/api.html#data-main
 */
"use strict";

requirejs.config({
    "paths": {
        "mustache": "lib/mustache.min"
    }
});

requirejs
(
    ["cimspace", "cimmap", "cimdetails", "cimedit", "cimconnectivity", "cimdiagram",
     "themes/cimthemes", "themes/default_theme", "themes/voltage", "themes/island", "themes/inservice", "themes/diagram",
     "nav/cimnav", "nav/zoominnav", "nav/zoomoutnav", "nav/rotationnav", "nav/zoomnav", "nav/infonav", "nav/themenav", "nav/legendnav", "nav/editnav", "nav/connectivitynav", "nav/diagramnav"],
    function (cimspace, cimmap, CIMDetails, CIMEdit, CIMConnectivity, CIMDiagram,
              ThemeControl, DefaultTheme, VoltageTheme, IslandTheme, InServiceTheme, DiagramTheme,
              NavigationControl, ZoomInNav, ZoomOutNav, RotationNav, ZoomNav, InfoNav, ThemeNav, LegendNav, EditNav, ConnectivityNav, DiagramNav)
    {
        // initialize widgets
        document.getElementById ("file_button").onchange = cimspace.file_change;
        document.getElementById ("connect").onclick = cimspace.process_url;
        document.getElementById ("save_file").onclick = cimspace.initialize_save_dialog;
        document.getElementById ("save").onclick = cimspace.save;
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
        const TheDetails = new CIMDetails (cimmap);

        /**
         * The editor control object.
         */
        const TheEditor = new CIMEdit (cimmap);

        /**
         * The connectivity control object.
         */
        const TheConnectivity = new CIMConnectivity (cimmap, TheEditor);

        /**
         * The diagram control object.
         */
        const TheDiagram = new CIMDiagram (cimmap);

        /**
         * The theme setting control object.
         */
        const TheThemer = new ThemeControl ();
        TheThemer.addTheme (new DefaultTheme ());
        TheThemer.addTheme (new VoltageTheme ());
        TheThemer.addTheme (new IslandTheme ());
        TheThemer.addTheme (new InServiceTheme ());
        TheThemer.addTheme (new DiagramTheme ());

        function toggle (control_or_function)
        {
            return (
                function (event)
                {
                    const control = ("function" == typeof (control_or_function)) ? control_or_function () : control_or_function;
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

        const zoom = document.createElement ("button", { is: "zoom-nav-button" });
        const info = document.createElement ("button", { is: "info-nav-button" });
        const theme = document.createElement ("button", { is: "theme-nav-button" });
        const legend = document.createElement ("button", { is: "legend-nav-button" });
        const edit = document.createElement ("button", { is: "edit-nav-button" });
        const connectivity = document.createElement ("button", { is: "connectivity-nav-button" });
        const diagram = document.createElement ("button", { is: "diagram-nav-button" });

        const TheNavigator =  new NavigationControl ();
        TheNavigator.addButton (document.createElement ("button", { is: "zoomin-nav-button" }));
        TheNavigator.addButton (document.createElement ("button", { is: "zoomout-nav-button" }));
        TheNavigator.addButton (document.createElement ("button", { is: "rotation-nav-button" }));
        TheNavigator.addButton (zoom);
        TheNavigator.addButton (info);
        TheNavigator.addButton (theme);
        TheNavigator.addButton (legend);
        TheNavigator.addButton (edit);
        TheNavigator.addButton (connectivity);
        TheNavigator.addButton (diagram);

        cimmap.initialize (TheNavigator, TheThemer, TheEditor);

        zoom.addEventListener ("click", cimmap.zoom_extents);
        info.addEventListener ("click", toggle (TheDetails));
        theme.addEventListener ("click", toggle (TheThemer));
        legend.addEventListener ("click", toggle (function () { return (TheThemer.getTheme ().getLegend ()); }));
        edit.addEventListener ("click", toggle (TheEditor));
        connectivity.addEventListener ("click", toggle (TheConnectivity));
        diagram.addEventListener ("click", toggle (TheDiagram));
    }
);
