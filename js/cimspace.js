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
     * @exports cimspace
     * @version 1.0
     */
    function (util, cim, cimmap)
    {
        // the base name of the currently loaded file
        let TheCurrentName = null;

        /**
         * @summary Parse a set of CIM files.
         * @description Read in CIM files.
         * @param {Blob[]} blobs - the blobs of CIM data
         */
        function read_cim (blobs)
        {
            const start = new Date ().getTime ();
            console.log ("starting CIM read\n    " + blobs.map (x => x.name).join ("\n    "));
            cim.read_xml_blobs (blobs).then (
                function (context)
                {
                    const end = new Date ().getTime ();
                    const elements = Object.keys (context.parsed.Element).length;
                    console.log ("finished CIM read (" + (Math.round (end - start) / 1000) + " seconds, " + elements + " elements)");
                    if (0 !== context.ignored)
                        console.log (context.ignored.toString () + " unrecognized element" + ((1 < context.ignored) ? "s" : ""));
                    cimmap.set_data (context.parsed);
                    cimmap.set_loaded ({ files: blobs.map (b => b.name), options: {}, elements: elements });
                }
            );
        }

        /**
         * @summary Uncompress a zip file and then parse it.
         * @description Use AMD wrapped zip.js (see https://github.com/MeltingMosaic/zip-amd) to read in a CIM file.
         * @param {Blob} blob - the blob of zipped data
         * @param {Function} [fn = read_cim()] - the function to apply to the unzipped entry.
         */
        function read_zip (blob, fn)
        {
            fn = fn || function (data) { read_cim ([data])};
            require (
                ["zip/zip", "zip/mime-types"],
                function (zip, mimeTypes)
                {
                    const start = new Date ().getTime ();
                    console.log ("starting unzip '" + blob.name + "'");

                    //zip.workerScriptsPath = "js/zip/";
                    zip.useWebWorkers = false;
                    zip.createReader (new zip.BlobReader (blob),
                        function (zipReader)
                        {
                            zipReader.getEntries (
                                function (entries)
                                {
                                    // find the CIM file with extension rdf or xml... if any
                                    let j = 0;
                                    for (let i = 0; i < entries.length; i++)
                                    {
                                        const name = entries[i].filename.toLowerCase ();
                                        if (name.endsWith (".rdf") || name.endsWith (".xml"))
                                            j = i;
                                    }
                                    entries[j].getData (
                                        new zip.BlobWriter (mimeTypes.getMimeType (entries[j].filename)),
                                        function (data)
                                        {
                                            zipReader.close ();
                                            data.name = entries[j].filename;
                                            const end = new Date ().getTime ();
                                            console.log ("finished unzip '" + data.name + "' (" + (Math.round (end - start) / 1000) + " seconds)");
                                            fn (data);
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
         */
        function base_name (name)
        {
            let index;

            index = name.lastIndexOf ("/");
            if (-1 !== index)
                name = name.substring (index + 1);
            index = name.lastIndexOf (".");
            if (-1 !== index)
                name = name.substring (0, index);

            return (name);
        }

        /**
         * @summary Handler for file change events.
         * @description Process files from the browse dialog.
         * @param {FileList} files - the list of files
         */
        function process_files (files)
        {
            const array = Array (files.length).fill (null);
            function check ()
            {
                if (array.every (x => x != null))
                    read_cim (array);
            }
            function unzip (n)
            {
                read_zip (files[n], function (blob) { array[n] = blob; check (); });
            }
            if (0 < files.length)
            {
                TheCurrentName = base_name (files[0].name);
                for (let i = 0; i < files.length; i++)
                    if (files[i].name.endsWith (".zip"))
                        unzip (i);
                    else
                        array[i] = files[i];
                check ();
            }
        }

        /**
         * @summary Handler for server connect event.
         * @description Process URL from the connect dialog.
         * @param {object} event - the button click event
         */
        function process_url (event)
        {
            let url = document.getElementById ("server_url").value;
            if ("" !== url)
            {
                const xmlhttp = util.createCORSRequest ("GET", url);
                if (url.endsWith (".zip"))
                {
                    xmlhttp.setRequestHeader ("Accept", "application/zip");
                    xmlhttp.responseType = "blob";
                }
                else
                    xmlhttp.setRequestHeader ("Accept", "application/octet-stream");
                xmlhttp.onreadystatechange = function ()
                {
                    if (4 === xmlhttp.readyState)
                        if (200 === xmlhttp.status || 201 === xmlhttp.status || 202 === xmlhttp.status)
                        {
                            TheCurrentName = base_name (url);
                            if (url.endsWith (".zip"))
                            {
                                const blob = xmlhttp.response.slice();
                                if (!blob.name)
                                    blob.name = url;
                                read_zip (blob);
                            }
                            else
                            {
                                const start = new Date ().getTime ();
                                console.log ("starting CIM read");
                                const context = cim.read_full_xml (xmlhttp.response, 0, null);
                                const end = new Date ().getTime ();
                                const elements = Object.keys (context.parsed.Element).length;
                                console.log ("finished CIM read (" + (Math.round (end - start) / 1000) + " seconds, " + elements + " elements)");
                                if (0 !== context.ignored)
                                    console.log (context.ignored.toString () + " unrecognized element" + ((1 < context.ignored) ? "s" : ""));
                                cimmap.set_data (context.parsed);
                                cimmap.set_loaded ({ files: [TheCurrentName], options: {}, elements: elements });
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
         */
        function close_file_modal ()
        {
            $("#file_modal").modal("hide");
        }

        /**
         * @summary Handler for file change events.
         * @description Process files from the browse dialog.
         * @param {object} event - the file change event
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
         * @return a Promise that resolves with the converted string.
         */
        function blob2base64 (blob)
        {
            return (
                new Promise (
                    (resolve, reject) =>
                    {
                        const reader = new FileReader ();
                        reader.onload = function ()
                        {
                            const dataUrl = reader.result;
                            const base64 = dataUrl.split (",")[1];
                            resolve (base64);
                        };
                        reader.onerror = reject;
                        reader.readAsDataURL (blob);
                    }
                )
            );
        }

        function initialize_save_dialog ()
        {
            let save_name = document.getElementById ("save_name");
            if ("" === save_name.value)
                save_name.value = TheCurrentName;
        }

        /**
         * Save the current in-memory contents as a zipped CIM file.
         *
         * @param event The event that triggered the save (usually "id=save" clicked).
         */
        function save (event)
        {
            event.stopPropagation ();
            event.preventDefault ();
            let save_name = document.getElementById ("save_name").value;
            if ("" === save_name)
                save_name = TheCurrentName;
            const name = base_name (save_name);
            const about = document.getElementById ("rdf_about").value;
            const description = document.getElementById ("md_description").value;
            const difference_model = document.getElementById ("difference_model").checked;
            const only_new = document.getElementById ("only_new").checked;
            let suffix = "";
            if (difference_model)
                suffix = "_diff";
            else if (only_new)
                suffix = "_new";
            document.getElementById ("save_name").value = name + suffix;
            $("#save_modal").modal ("hide");
            if (null != cimmap.get_data ())
            {
                const file = name + (difference_model ? "_diff" : "") + ".zip";
                const begin = new Date ().getTime ();
                console.log ("starting xml creation");
                const text = cim.write_xml (cimmap.get_data ().Element, difference_model, only_new, about, description);
                const start = new Date ().getTime ();
                console.log ("finished xml creation (" + (Math.round (start - begin) / 1000) + " seconds)");
                console.log ("starting zip");
                require (
                    ["zip/zip"],
                    function (zip)
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
                                                const end = new Date ().getTime ();
                                                console.log ("finished zip (" + (Math.round (end - start) / 1000) + " seconds)");

                                                // this is surprisingly not performant:
                                                // const url = URL.createObjectURL (blob);
                                                // a.setAttribute ("href", url);

                                                // so we do this instead
                                                console.log ("starting base64 conversion");
                                                blob2base64 (blob).then (
                                                    function (data)
                                                    {
                                                        const finish = new Date ().getTime ();
                                                        console.log ("finished base64 conversion (" + (Math.round (finish - end) / 1000) + " seconds)");
                                                        const a = document.createElement ("a");
                                                        a.setAttribute ("href", "data:application/zip;base64," + data);
                                                        a.setAttribute ("download", file);
                                                        a.setAttribute ("type", "application/zip");
                                                        a.setAttribute ("style", "display: none;");
                                                        a.setAttribute ("target", "_blank");
                                                        document.body.appendChild (a);
                                                        a.click ();
                                                        document.body.removeChild (a);
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
                            }
                        );
                    }
                );
            }
        }

        return (
            {
                file_change: file_change,
                file_drag: file_drag,
                file_drop: file_drop,
                process_url: process_url,
                initialize_save_dialog: initialize_save_dialog,
                save: save
            }
        );
    }
);