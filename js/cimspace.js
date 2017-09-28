/**
 * Functions for CIMSpace application
 */
"use strict";
define
(
    ["es6-promise", "cim", "cimmap"],
    /**
     * @summary Main entry point for the application.
     * @description Performs application initialization as the first step in the RequireJS load sequence.
     * @see http://requirejs.org/docs/api.html#data-main
     * @name cimspace
     * @exports cimspace
     * @version 1.0
     */
    function (es6_promise, cim, cimmap)
    {
        // using Promise: backwards compatibility for older browsers
        es6_promise.polyfill ();

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
                        var end = new Date ().getTime ();
                        console.log ("finished XML read (" + (Math.round (end - start) / 1000) + " seconds)");
                        cimmap.set_data (result.parsed);
                    }
                );
            }
        }

        /**
         * @summary Browser independent CORS setup.
         * @description Creates the CORS request and opens it.
         * @param {string} method The method type, e.g. "GET" or "POST"
         * @param {string} url the URL to open the request on
         * @param {boolean} synchronous optional parameter for open() call, default <em>true</em>
         * @returns {object} the request object or <code>null</code> if CORS isn't supported
         * @memberOf module:cimspace
         */
        function createCORSRequest (method, url, synchronous)
        {
            var ret;

            if ("undefined" == typeof (synchronous))
                synchronous = true;
            ret = new XMLHttpRequest ();
            if ('withCredentials' in ret) // "withCredentials" only exists on XMLHTTPRequest2 objects
                ret.open (method, url, synchronous);
            else if (typeof XDomainRequest != 'undefined') // IE
            {
                ret = new XDomainRequest ();
                ret.open (method, url);
            }
            else
                ret = null; // CORS is not supported by the browser

            return (ret);
        }

        /**
         * @summary Handler for server connect event.
         * @description Process URL from the connect dialog.
         * @param {object} event - the button click event
         * @function process_url
         * @memberOf module:cimspace
         */
        function process_url (event)
        {
            var url;
            if ("" != (url = document.getElementById ("server_url").value))
            {
                var xmlhttp = createCORSRequest ("GET", url);
                xmlhttp.setRequestHeader ("Accept", "application/octet-stream");
                xmlhttp.onreadystatechange = function ()
                {
                    if (4 == xmlhttp.readyState)
                        if (200 == xmlhttp.status || 201 == xmlhttp.status || 202 == xmlhttp.status)
                        {
                            var start = new Date ().getTime ();
                            console.log ("starting XML read");
                            var result = cim.read_full_xml (xmlhttp.response, 0, null, null)
                            var end = new Date ().getTime ();
                            console.log ("finished XML read (" + (Math.round (end - start) / 1000) + " seconds)");
                            cimmap.set_data (result.parsed);
                        }
                        else
                            console.log ("xmlhttp status " + xmlhttp.status)
                };
                xmlhttp.send ();
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

        return (
            {
                file_change: file_change,
                file_drag: file_drag,
                file_drop: file_drop,
                process_url: process_url
            }
        );
    }
);
