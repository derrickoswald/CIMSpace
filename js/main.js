/**
 * Main javascript file for CIMSpace application
 */
"use strict";
requirejs
(
    ["cimspace"],
    function (cimspace)
    {
        // initialize material design for bootstrap (https://github.com/FezVrasta/bootstrap-material-design)
        $.material.init ();
        // initialize buttons
        document.getElementById ("file_button").onchange = cimspace.file_change;
        document.getElementById ("vector_tiles").onchange = cimspace.init_map;
        // drag and drop listeners
        document.getElementById ("files_drop_zone").ondragover = cimspace.file_drag;
        document.getElementById ("files_drop_zone").ondrop = cimspace.file_drop;
        // javascript functions
        document.getElementById ("trace").onclick = cimspace.trace;
        document.getElementById ("unhighlight").onclick = cimspace.unhighlight;
        document.getElementById ("search").onsubmit = cimspace.search;

        cimspace.init_map ();
    }
);
