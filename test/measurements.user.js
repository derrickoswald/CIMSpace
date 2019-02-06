// ==UserScript==
// @name        Measurements
// @namespace   measurements
// @description Show measurement data.
// @include     http://derrickoswald.github.io/CIMSpace/*
// @include     https://derrickoswald.github.io/CIMSpace/*
// @version     1.0
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    var TheListener = null;
    var TheData = null;
    var TheMapping = null;

    class Listener
    {
        constructor (cimmap)
        {
            this._cimmap = cimmap;
        }

        selection_change (current_feature, current_selection)
        {
            if (null != current_feature)
            {
                var text = current_feature;
                if ((null != TheMapping) && TheMapping[current_feature])
                {
                    text = JSON.stringify (TheMapping[current_feature], null, 4);
                    // you really need to know the schema
                    var ch_number = TheMapping[current_feature].Messpunktbezeichnung;
                    if ((null != TheData) && TheData[ch_number])
                    {
                        var i = 0;
                        for (var timestamp in TheData[ch_number])
                        {
                            if ((i < 10) && TheData[ch_number].hasOwnProperty (timestamp))
                            {
                                text = text + "\n" + JSON.stringify (TheData[ch_number][timestamp], null, 4).substring (0, 200) + "...";
                                i = i + 1;
                            }
                        }
                    }
                }
                alert (text);
            }
        }
    }

    function enable_disable ()
    {
        function doit (cimmap)
        {
            var checkbox = document.getElementById ("enable_measurements");
            if (checkbox.checked)
            {
                TheListener = new Listener (cimmap);
                cimmap.add_feature_listener (TheListener);
                console.log ("started listening");
            }
            else
            {
                cimmap.remove_feature_listener (TheListener);
                TheListener = null;
                console.log ("stopped listening");
            }
        }
        window.require(["cimmap"], doit);
    }

    function upload ()
    {
        function getAsText (file, processor)
        {
            function loadHandler (event)
            {
                var csv = event.target.result;
                processor (csv);
            }

            function errorHandler (evt)
            {
                if (evt.target.error.name == "NotReadableError")
                {
                    alert ("Can't read file " + evt.target.name);
                }
            }

            var reader = new FileReader ();
            reader.readAsText (file);
            reader.onload = loadHandler;
            reader.onerror = errorHandler;
        }

        function processMapping (csv)
        {
            var allTextLines = csv.split (/\r\n|\n/);
            var headers = allTextLines[0].split (';');
            var lines = {};
            for (var i = 1; i < allTextLines.length; i++)
            {
                var data = allTextLines[i].split (';');
                var key = data[0];
                var obj = {};
                for (var j = 1; j < headers.length; j++)
                {
                    obj[headers[j]] = data[j];
                }
                lines[key] = obj;
            }
            TheMapping = lines;
            console.log ("mapping");
        }

        function processData (csv)
        {
            var allTextLines = csv.split (/\r\n|\n/);

            // you really need to know the schema
            var lines = {};
            for (var i = 0; i < allTextLines.length; i++)
            {
                var data = allTextLines[i].split (';');
                var timestamp = data[0];
                var key = data[1];
                var array = [];
                for (var j = 2; j < data.length; j++)
                {
                    array.push (data[j]);
                }
                var obj = lines[key];
                if (null == obj)
                {
                    obj = {};
                    lines[key] = obj;
                }
                obj[timestamp] = array;
            }
            TheData = lines;
            console.log ("data");
        }

        var mapping = document.getElementById ("mapping_file");
        if (mapping.files.length > 0)
        {
            getAsText (mapping.files[0], processMapping);
        }
        var measurements = document.getElementById ("measurements_file");
        if (measurements.files.length > 0)
        {
            getAsText (measurements.files[0], processData);
        }
    }

/**
 * Run once function to set up menu.
 */
(
    function initialize ()
    {
            console.log ("initializing measurements");
            var ff = document.createElement ("div");
            ff.setAttribute ("style", "position: relative; height: 350px;");
            var template =
                "<div style='position: absolute; top: -350px; left: 20px;'>" +
                    "<div style='height: 100%'>" +
                        "<div style='position: relative; top: +12px; left: +15px; background: #f5f5f5; width: 135px; padding-left: 20px; color: #337ab7;'>Measurements</div>" +
                        "<input id='measurements_file' type='file' accept='.csv' style='max-width: 500px; overflow-x: hidden; max-height: 25%; overflow-y: auto; border: 5px solid #e3edf9; background-color: white; border-radius: 1em; padding: 1em; margin-bottom: 1em'>" +
                        "<div style='position: relative; top: +12px; left: +15px; background: #f5f5f5; width: 100px; padding-left: 20px; color: #337ab7;'>Mapping</div>" +
                        "<input id='mapping_file' type='file' accept='.csv' style='max-width: 500px; overflow-x: hidden; max-height: 25%; overflow-y: auto; border: 5px solid #e3edf9; background-color: white; border-radius: 1em; padding: 1em; margin-bottom: 1em'>" +
                        "<div style='margin-left: 25px;'><label for='images_as_dataurl'><input id='enable_measurements' type='checkbox'><span style='margin-left: 10px;'>Enable</span></label></div>" +
                        "<button id='upload_file_button' type='button' class='btn btn-lg btn-primary' style='float: right; text-shadow: initial; background-color: #337ab7;'>Upload</button>" +
                    "</div>" +
                "</div>";
            ff.innerHTML = template;
            var body = document.getElementsByTagName ("body")[0];
            body.appendChild (ff);
            var checkbox = document.getElementById ("enable_measurements");
            checkbox.addEventListener ("change", enable_disable, false);
            var button = document.getElementById ("upload_file_button");
            button.addEventListener ("click", upload, false);
    }
)();
})();