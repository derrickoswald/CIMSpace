// ==UserScript==
// @name        Measurements
// @namespace   measurements
// @description Show measurement data.
// @include     http://derrickoswald.github.io/CIMSpace/*
// @include     https://derrickoswald.github.io/CIMSpace/*
// @version     1.0
// @grant       none
// ==/UserScript==

/**
 * Run once function to set up menu.
 */
(
    function capture ()
    {
        alert ("hello world");
    }

    function initialize ()
    {
            console.log ("initializing measurements");
            var ff = document.createElement ("div");
            ff.setAttribute ("style", "position: relative; height: 100px;");
            var template =
                "<div style='position: absolute; top: 80px; left: 20px;'>" +
                    "<div style='height: 100%'>" +
                        "<div style='position: relative; top: +12px; left: +35px; background: #f5f5f5; width: 135px; padding-left: 20px; color: #337ab7;'>Thing Metadata</div>" +
                        "<pre id='metadata_panel' style='max-width: 500px; overflow-x: hidden; max-height: 25%; overflow-y: auto; border: 5px solid #e3edf9;border-radius: 2em; padding: 2em; margin-bottom: 1em'></pre>" +
                        "<div style='position: relative; top: +12px; left: +35px; background: #f5f5f5; width: 100px; padding-left: 20px; color: #337ab7;'>Thing Files</div>" +
                        "<pre id='files_panel' style='max-width: 500px; overflow-x: hidden; max-height: 25%; overflow-y: auto; border: 5px solid #e3edf9;border-radius: 2em; padding: 2em; margin-bottom: 1em'></pre>" +
                        "<div style='position: relative; top: +12px; left: +35px; background: #f5f5f5; width: 100px; padding-left: 20px; color: #337ab7;'>Messages</div>" +
                        "<pre id='console_panel' style='max-width: 500px; overflow-x: hidden; max-height: 25%; overflow-y: auto; border: 5px solid #e3edf9;border-radius: 2em; padding: 2em; margin-bottom: 1em'></pre>" +
                        "<div style='margin-left: 25px;'><label for='images_as_dataurl'><input id='images_as_dataurl' type='checkbox'><span style='margin-left: 10px;'>Images as data urls</span></label></div>" +
                        "<button id='import_thing_button' type='button' class='btn btn-lg btn-primary' disabled style='float: right; text-shadow: initial; background-color: #337ab7;'>Import to things</button>" +
                    "</div>" +
                "</div>";
            ff.innerHTML = template;
            document.getElementsByTagName ("body")[0].appendChild (ff);
            var button = document.getElementById ("import_thing_button");
            button.addEventListener ("click", capture);
    }
)();
