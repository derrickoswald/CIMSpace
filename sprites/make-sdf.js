#!/usr/bin/env node

/*
 * Generate sdf png files from black and transparent png files (as exported from inkscape with genpng).
 *
 */

var fs = require ('fs');
var glob = require ('glob');
var PNG = require ('pngjs').PNG;

// see https://github.com/libgdx/libgdx/blob/master/extensions/gdx-tools/src/com/badlogic/gdx/tools/distancefield/DistanceFieldGenerator.java

/**
 * Detemines if this pixel is inside (black) the symbol.
 */
function inside (alpha)
{
    return ((alpha & 0x80) != 0);
}

/**
 * Caclulate the squared distance between two points
 *
 * @param x1 The x coordinate of the first point
 * @param y1 The y coordiante of the first point
 * @param x2 The x coordinate of the second point
 * @param y2 The y coordinate of the second point
 * @return The squared distance between the two points
 */
function squaredDistance (x1, y1, x2, y2)
{
    var dx = x1 - x2;
    var dy = y1 - y2;
    return (dx*dx + dy*dy);
}

/**
 * Returns the signed distance for a given point.
 *
 * For points "inside", this is the distance to the closest "outside" pixel.
 * For points "outside", this is the <em>negative</em> distance to the closest "inside" pixel.
 * If no pixel of different color is found within a radius of {@code spread}, returns
 * the {@code -spread} or {@code spread}, respectively.
 *
 * @param centerX the x coordinate of the center point
 * @param centerY the y coordinate of the center point
 * @param bitmap the array representation of an image, {@code true} representing "inside"
 * @return the signed distance
 */
function findSignedDistance (centerX, centerY, bitmap, width, height)
{
    var base = bitmap[centerY * width + centerX];

    var delta = Math.ceil (Math.sqrt (width * width + height * height));
    var startX = Math.max (0, centerX - delta);
    var endX  = Math.min (width - 1, centerX + delta);
    var startY = Math.max (0, centerY - delta);
    var endY = Math.min (height - 1, centerY + delta);

    var closestSquareDist = delta * delta;

    for (var y = startY; y <= endY; ++y)
        for (var x = startX; x <= endX; ++x)
            if (base != bitmap[y * width + x])
            {
                var squareDist = squaredDistance (centerX, centerY, x, y);
                if (squareDist < closestSquareDist)
                    closestSquareDist = squareDist;
            }

    var closestDist = Math.sqrt (closestSquareDist);
    return (base ? -1 : +1) * Math.ceil (Math.min (closestDist, delta));
}

function scale (dist)
{
    var cutoff = 1/8;

    // drop off quicker
    dist *= 24;
    // keep some negative
    dist -= cutoff * 256;

    // Clamp to 0-255.
    return (Math.ceil (Math.min (255.0, Math.max (0.0, 255 - dist))));
}

glob ('png/*.png',
    function (err, files)
    {
        if (err) throw err;
        files.forEach (
            function (file)
            {
                var name = file.match (/png\/(.*)\.png/)[1];
                fs.createReadStream (file).pipe (new PNG ({ filterType: 4 })).on('parsed',
                    function ()
                    {
                        console.log (name);
                        var bitmap = new Array (this.height * this.width)
                        for (var y = 0; y < this.height; y++)
                            for (var x = 0; x < this.width; x++)
                            {
                                var offset = this.width * y + x;
                                var idx = offset << 2;
                                bitmap[offset] = inside (this.data[idx + 3])
                            }

                        var png = new PNG ({width: this.width, height: this.height});
                        for (var y = 0; y < this.height; y++)
                            for (var x = 0; x < this.width; x++)
                            {
                                var offset = this.width * y + x;
                                var idx = offset << 2;
                                png.data[idx + 0] = 0;
                                png.data[idx + 1] = 0;
                                png.data[idx + 2] = 0;
                                png.data[idx + 3] = scale (findSignedDistance (x, y, bitmap, this.width, this.height));
                            }
                        png.pack ().pipe (fs.createWriteStream ('sdf/' + name + '.png'));
                    });
            }
        );
    }
);