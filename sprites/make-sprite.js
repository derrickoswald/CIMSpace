#!/usr/bin/env node

/*
 * Append sdf png files to existing mapbox json and png files.
 *
 */

/*
 Assumes the input files have been downloaded with something like:

wget --output-document=sprite.json https://api.mapbox.com/styles/v1/mapbox/streets-v9/sprite.json?access_token=pk.eyJ1IjoiZGVycmlja29zd2FsZCIsImEiOiJjaWV6b2szd3MwMHFidDRtNDZoejMyc3hsIn0.wnEkePEuhYiNcXDLACSxVw
wget --output-document=sprite.png https://api.mapbox.com/styles/v1/mapbox/streets-v9/sprite.png?access_token=pk.eyJ1IjoiZGVycmlja29zd2FsZCIsImEiOiJjaWV6b2szd3MwMHFidDRtNDZoejMyc3hsIn0.wnEkePEuhYiNcXDLACSxVw
wget --output-document=sprite@2x.json https://api.mapbox.com/styles/v1/mapbox/streets-v9/sprite@2x.json?access_token=pk.eyJ1IjoiZGVycmlja29zd2FsZCIsImEiOiJjaWV6b2szd3MwMHFidDRtNDZoejMyc3hsIn0.wnEkePEuhYiNcXDLACSxVw
wget --output-document=sprite@2x.png https://api.mapbox.com/styles/v1/mapbox/streets-v9/sprite@2x.png?access_token=pk.eyJ1IjoiZGVycmlja29zd2FsZCIsImEiOiJjaWV6b2szd3MwMHFidDRtNDZoejMyc3hsIn0.wnEkePEuhYiNcXDLACSxVw

*/

var fs = require ('fs');
var glob = require ('glob');
var PNG = require ('pngjs').PNG;

function get_files (callback)
{
    glob ('sdf/*.png',
        function (err, files)
        {
            if (err) throw err;
            var list = [];
            function done ()
            {
                if (list.length == files.length)
                    callback (list);
            }
            files.forEach (
                function (file)
                {
                    var name = file.match (/sdf\/(.*)\.png/)[1];
                    var ratio = 1;
                    if (name.endsWith ("@2x"))
                    {
                        ratio = 2;
                        name = name.substring (0, name.length - 3);
                    }
                    fs.createReadStream (file).pipe (new PNG ({ filterType: 4 })).on('parsed',
                        function ()
                        {
                            list.push (
                                {
                                    name: name,
                                    file: file,
                                    width: this.width,
                                    height: this.height,
                                    ratio: ratio
                                }
                            );
                            done ();
                        }
                    );
                }
            );
        }
    );
}

function montage (files, width, height)
{
    var x = width;
    var y = height;
    var max = height;
    for (var i = 0; i < files.length; i++)
    {
        var file = files[i];
        if (file.width + x > width) // new row?
        {
            x = 0;
            y = max;
        }
        if (y + file.height > max) // higher than bitmap
            max = y + file.height;
        file.x = x;
        file.y = y;
        x = x + file.width;
    }
    return ({ width: width, height: max });
}

/*
 * copy all of input bitmap (size iwidth x iheight) to output (size owidth x oheight) at offset (xoffset, yoffset)
 */
function bit_blt (input, iwidth, iheight, output, owidth, oheight, xoffset, yoffset)
{
    for (var y = 0; y < iheight; y++)
        for (var x = 0; x < iwidth; x++)
        {
            var idx = (iwidth * y + x) << 2;
            var odx = (owidth * (y + yoffset) + (x + xoffset)) << 2;
            output[odx + 0] = input[idx + 0];
            output[odx + 1] = input[idx + 1];
            output[odx + 2] = input[idx + 2];
            output[odx + 3] = input[idx + 3];
        }
}

function merge_pngs (source, files, target)
{
    var data = fs.readFileSync (source);
    var original = PNG.sync.read (data);
    console.log (source + " width: " + original.width + " height: " + original.height);
    var size = montage (files, original.width, original.height)
    console.log (target + " width: " + size.width + " height: " + size.height);
    var png = new PNG ({width: size.width, height: size.height });
    // blit the original
    bit_blt (original.data, original.width, original.height, png.data, size.width, size.height, 0, 0);
    for (var i = 0; i < files.length; i++)
    {
        var file = files[i];
        var data = fs.readFileSync (file.file);
        var sub = PNG.sync.read (data);
        bit_blt (sub.data, sub.width, sub.height, png.data, size.width, size.height, file.x, file.y);
    }
    png.pack ().pipe (fs.createWriteStream (target));
    return (files);
}

function merge_json (source, files, target)
{
    var json = fs.readFileSync (source);
    var object = JSON.parse (json);
    for (var i = 0; i < files.length; i++)
    {
        var file = files[i];
        object[file.name] =
        {
            "x" : file.x,
            "y" : file.y,
            "width" : file.width,
            "height" : file.height,
            "pixelRatio" : file.ratio,
            "visible" : true,
            "sdf" : true
        }
    }
    fs.writeFileSync (target, JSON.stringify (object, null, 4));
}

function doit ()
{
    // get the list of files and their sizes
    get_files (function (files)
        {
            // files.forEach (function (file) { console.log (JSON.stringify (file, null, 4)); });
            var x1 = files.filter (function (file) { return (file.ratio == 1); });
            var x2 = files.filter (function (file) { return (file.ratio == 2); });
            x1 = merge_pngs ("sprite.png", x1, "streets-v9-sprites.png");
            x2 = merge_pngs ("sprite@2x.png", x2, "streets-v9-sprites@2x.png");
            merge_json ("sprite.json", x1, "streets-v9-sprites.json");
            merge_json ("sprite@2x.json", x2, "streets-v9-sprites@2x.json");
        }
    );
}

doit ();