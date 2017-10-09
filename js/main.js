/**
 * Main javascript file for CIMSpace application
 */
"use strict";
requirejs
(
    ["cimspace", "cimmap"],
    function (cimspace, cimmap)
    {
        // initialize material design for bootstrap (https://github.com/FezVrasta/bootstrap-material-design)
        $.material.init ();
        // initialize buttons
        document.getElementById ("file_button").onchange = cimspace.file_change;
        document.getElementById ("connect").onclick = cimspace.process_url;
        document.getElementById ("show_internal_features").onchange = cimmap.redraw;
        document.getElementById ("buildings_3d").onchange = cimmap.buildings_3d;

        // drag and drop listeners
        document.getElementById ("files_drop_zone").ondragover = cimspace.file_drag;
        document.getElementById ("files_drop_zone").ondrop = cimspace.file_drop;
        // javascript functions
        document.getElementById ("trace").onclick = cimmap.trace;
        document.getElementById ("unhighlight").onclick = cimmap.unhighlight;
        document.getElementById ("search").onsubmit = cimmap.search;
        document.getElementById ("search_button").onclick = cimmap.search;

        cimmap.initialize ();
    }
);
