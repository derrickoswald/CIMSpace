/**
 * Functions for CIMSpace application
 */
"use strict";
define
(
    ["util", "cim", "cimmap"],
    /**
     * @summary Main entry point for the application.
     * @description Performs application initialization as the first step in the RequireJS load sequence.
     * @see http://requirejs.org/docs/api.html#data-main
     * @name cimspace
     * @exports cimspace
     * @version 1.0
     */
    function (util, cim, cimmap)
    {
        // the pending xml creation
        var Pending = null;

        // the base name of the currently loaded file
        var TheCurrentName = null;

        // the rdf:about text for saving
        var TheCurrentAbout = null;

        // the md:description text for saving
        var TheCurrentDescription = null;

        /**
         * @summary Parse a zip file.
         * @description Read in a CIM file.
         * @param {Blob} blob - the blob of CIM data
         * @function read_cim
         * @memberOf module:cimspace
         */
        function read_cim (blob)
        {
            var start = new Date ().getTime ();
            console.log ("starting CIM read");
            cim.read_xml_blob
            (
                blob,
                function (result)
                {
                    var end = new Date ().getTime ();
                    console.log ("finished CIM read (" + (Math.round (end - start) / 1000) + " seconds)");
                    if (0 != result.parsed.ignored)
                        console.log (result.parsed.ignored.toString () + " unrecognized element" + ((1 < result.parsed.ignored) ? "s" : ""));
                    delete result.parsed.ignored
                    cimmap.set_data (result.parsed);
                    cimmap.set_loaded ({ files: [blob.name], options: {}, elements: Object.keys (result.parsed.Element).length });
                }
            );
        }

        /**
         * @summary Uncompress a zip file and then parse it.
         * @description Use AMD wrapped zip.js (see https://github.com/MeltingMosaic/zip-amd) to read in a CIM file.
         * @param {Blob} blob - the blob of zipped data
         * @function read_zip
         * @memberOf module:cimspace
         */
        function read_zip (blob)
        {
            var start = new Date ().getTime ();
            console.log ("starting unzip");
            require (
                ["zip/zip", "zip/mime-types"],
                function (zip, mimeTypes)
                {
                    //zip.workerScriptsPath = "js/zip/";
                    zip.useWebWorkers = false;
                    zip.createReader (new zip.BlobReader (blob),
                        function (zipReader)
                        {
                            zipReader.getEntries (
                                function (entries)
                                {
                                    // find the CIM file with extension rdf or xml... if any
                                    var j = 0;
                                    for (var i = 0; i < entries.length; i++)
                                    {
                                        var name = entries[i].filename.toLowerCase ();
                                        if (name.endsWith (".rdf") || name.endsWith (".xml"))
                                            j = i;
                                    }
                                    console.log ("file: " + entries[j].filename);
                                    entries[j].getData (
                                        new zip.BlobWriter (mimeTypes.getMimeType (entries[0].filename)),
                                        function (data)
                                        {
                                            zipReader.close ();
                                            var end = new Date ().getTime ();
                                            console.log ("finished unzip (" + (Math.round (end - start) / 1000) + " seconds)");
                                            data.name = entries[j].filename;
                                            read_cim (data);
                                        }
                                    );
                                }
                            )
                        }
                    );
                }
            );
        }

        /**
         * @summary Extract the base file name.
         * @description Strip off extension and remove any prefix.
         * @param {String} name - the raw name or URL
         * @function base_name
         * @memberOf module:cimspace
         */
        function base_name (name)
        {
            var index;

            index = name.lastIndexOf ("/");
            if (-1 != index)
                name = name.substring (index + 1);
            index = name.lastIndexOf (".");
            if (-1 != index)
                name = name.substring (0, index);

            return (name);
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
                TheCurrentName = base_name (files[0].name);
                if (files[0].name.endsWith (".zip"))
                    read_zip (files[0]);
                else
                    read_cim (files[0]);
            }
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
                var xmlhttp = util.createCORSRequest ("GET", url);
                if (url.endsWith (".zip"))
                {
                    xmlhttp.setRequestHeader ("Accept", "application/zip");
                    xmlhttp.responseType = "blob";
                }
                else
                    xmlhttp.setRequestHeader ("Accept", "application/octet-stream");
                xmlhttp.onreadystatechange = function ()
                {
                    if (4 == xmlhttp.readyState)
                        if (200 == xmlhttp.status || 201 == xmlhttp.status || 202 == xmlhttp.status)
                        {
                            TheCurrentName = base_name (url);
                            if (url.endsWith (".zip"))
                                read_zip (xmlhttp.response);
                            else
                            {
                                var start = new Date ().getTime ();
                                console.log ("starting CIM read");
                                var result = cim.read_full_xml (xmlhttp.response, 0, null, null);
                                var end = new Date ().getTime ();
                                console.log ("finished CIM read (" + (Math.round (end - start) / 1000) + " seconds)");
                                if (0 != result.parsed.ignored)
                                    console.log (result.parsed.ignored.toString () + " unrecognized element" + ((1 < result.parsed.ignored) ? "s" : ""));
                                delete result.parsed.ignored
                                cimmap.set_data (result.parsed);
                            }
                        }
                        else
                            console.log ("xmlhttp status " + xmlhttp.status);
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
            $("#file_modal").modal("hide");
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
            event.dataTransfer.dropEffect = "copy";
        }

        /**
         * @summary Blob to base64 conversion.
         * @description Convert the blob into base64 characters.
         * @param {Blob} blob - the blob of data
         * @param {Function} callback - the callback to recieve the converted data: signature function (base64)
         * @function blob2base64
         * @memberOf module:cimspace
         */
        function blob2base64 (blob, callback)
        {
            var reader = new FileReader ();
            reader.onload = function ()
            {
                var dataUrl = reader.result;
                var base64 = dataUrl.split (",")[1];
                callback (base64);
            };
            reader.readAsDataURL (blob);
        }

        /**
         * @summary Event handler for changing the Save As file name.
         * @description Attached to the input field for file name, sets the download attribute of the Save link.
         * @param {object} event - the change event - <em>not used</em>
         * @function save_name_change
         * @memberOf module:cimspace
         */
        function save_name_change (event)
        {
            var name = base_name (document.getElementById ("save_name").value);
            TheCurrentName = name;
            var a = document.getElementById ("save");
            a.setAttribute ("download", name + ".zip");
            Pending.then (generate_rdf, generate_rdf);
        }
        /**
         * @summary Event handler for changing the rdf:about text.
         * @description Attached to the about input field.
         * @param {object} event - the change event - <em>not used</em>
         * @function about_change
         * @memberOf module:cimspace
         */
        function about_change (event)
        {
            TheCurrentAbout = document.getElementById ("rdf_about").value;
            Pending.then (generate_rdf, generate_rdf);
        }

        /**
         * @summary Event handler for changing changing the md:description text.
         * @description Attached to the description input field.
         * @param {object} event - the change event - <em>not used</em>
         * @function description_change
         * @memberOf module:cimspace
         */
        function description_change (event)
        {
            TheCurrentDescription = document.getElementById ("md_description").value;
            Pending.then (generate_rdf, generate_rdf);
        }

        /**
         * @summary Event handler for changing to a different save mode.
         * @description Attached to the difference_model checkbox.
         * @param {object} event - the change event - <em>not used</em>
         * @function save_mode_change
         * @memberOf module:cimspace
         */
        function save_mode_change (event)
        {
            Pending.then (generate_rdf, generate_rdf);
        }

        /**
         * @summary Event handler for Save.
         * @description Attached to the Save menu item, performs the CIM export and zipping.
         * @param {object} event - the click event - <em>not used</em>
         * @function generate_rdf
         * @memberOf module:cimspace
         */
        function generate_rdf (event)
        {
            var name = TheCurrentName || "save";
            var about = TheCurrentAbout || "";
            var description = TheCurrentDescription || "";
            var full_model = document.getElementById ("full_model").checked;
            var difference_model = document.getElementById ("difference_model").checked;
            var only_new = document.getElementById ("only_new").checked;
            var suffix = "";
            if (difference_model)
                suffix = "_diff";
            else if (only_new)
                suffix = "_new";
            document.getElementById ("save_name").value = name + suffix;
            if (null == cimmap.get_data ())
                Pending = Promise.resolve ("no data");
            else
                Pending =
                    new Promise (
                        function (resolve, reject)
                        {
                            // disable the link until it's ready
                            var a = document.getElementById ("save");
                            a.setAttribute ("disabled", "disabled");
                            var file = name + (difference_model ? "_diff" : "") + ".zip"
                            a.setAttribute ("download", file);
                            a.onclick = function (event) { event.preventDefault (); event.stopPropagation (); alert ("sorry... not ready yet"); }
                            var begin = new Date ().getTime ();
                            console.log ("starting xml creation");
                            var text = cim.write_xml (cimmap.get_data ().Element, difference_model, only_new, about, description);
                            var start = new Date ().getTime ();
                            console.log ("finished xml creation (" + (Math.round (start - begin) / 1000) + " seconds)");
                            console.log ("starting zip");
                            require (
                                ["zip/zip", "zip/mime-types"],
                                function (zip, mimeTypes)
                                {
                                    //zip.workerScriptsPath = "js/zip/";
                                    zip.useWebWorkers = false;
                                    zip.createWriter (new zip.BlobWriter (),
                                        function (writer)
                                        {
                                            writer.add (name + suffix + ".rdf", new zip.TextReader (text),
                                                function ()
                                                {
                                                    writer.close (
                                                        function (blob) // blob contains the zip file as a Blob object
                                                        {
                                                            var end = new Date ().getTime ();
                                                            console.log ("finished zip (" + (Math.round (end - start) / 1000) + " seconds)");

                                                            // this is surprisingly not performant:
                                                            // var url = URL.createObjectURL (blob);
                                                            // a.setAttribute ("href", url);

                                                            // so we do this instead
                                                            console.log ("starting base64 conversion");
                                                            blob2base64 (blob,
                                                                function (data)
                                                                {
                                                                    var finish = new Date ().getTime ();
                                                                    console.log ("finished base64 conversion (" + (Math.round (finish - end) / 1000) + " seconds)");
                                                                    a.setAttribute ("href", "data:application/zip;base64," + data);
                                                                    a.setAttribute ("type", "application/zip");
                                                                    a.onclick = function (event) { $("#save_modal").modal ("hide"); }
                                                                    a.removeAttribute ("disabled");
                                                                    console.log ("ready (" + (Math.round (new Date ().getTime () - finish) / 1000) + " seconds)");
                                                                    resolve ("OK");
                                                                }
                                                            );
                                                        }
                                                    );
                                                }
                                            );
                                        },
                                        function (error)
                                        {
                                           console.log (error);
                                           reject (error);
                                        }
                                    );
                                }
                            );
                        }
                    );
        }

        return (
            {
                file_change: file_change,
                file_drag: file_drag,
                file_drop: file_drop,
                process_url: process_url,
                save_name_change: save_name_change,
                about_change: about_change,
                description_change: description_change,
                save_mode_change: save_mode_change,
                generate_rdf: generate_rdf
            }
        );
    }
);
