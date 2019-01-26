/**
 * @fileOverview Google StreetView functions.
 * @name streetview
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["util"],
    /**
     * @summary Access Google StreetView API to generate a link for street viewing.
     * @description Finds the nearest panoramic point and orients a URL to view it with Google StreetView.
     * From original C# code http://topobaseinsiders.typepad.com/the_topobase_insiders/2009/07/street-view.html
     * @name streetview
     * @exports streetview
     * @version 1.0
     */
    function (util)
    {
        var data_properties_regex = new RegExp ("[\\s\\S]*<data_properties ([\\s\\S]*?)<\\/data_properties>[\\s\\S]*");
        var pano_id_regex = new RegExp ("pano_id=(\"|')([\\s\\S]*?)\\1");
        var latitude_regex = new RegExp ("lat=(\"|')([\\s\\S]*?)\\1");
        var longitude_regex = new RegExp ("lng=(\"|')([\\s\\S]*?)\\1");
        var projection_properties_regex = new RegExp ("[\\s\\S]*<projection_properties ([\\s\\S]*?)\\/>[\\s\\S]*");
        var pano_yaw_regex = new RegExp ("pano_yaw_deg=(\"|')([\\s\\S]*?)\\1");

        /**
         * Get the nearest panoramic point.
         * @param lon the longitude of the point to get the panoramic point for
         * @param lat the latitude of the point to get the panoramic point for
         * @return a Promise that will be fulfilled with the pano point,
         * e.g. { pano_id: "the_id", pano_lat: 43.7373, pano_lon: 8.66336, pano_yaw: 262 }
         */
        function getPanoPoint (lon, lat)
        {
            return (new Promise (
                (resolve, reject) =>
                {
                    var ret =
                    {
                        pano_id: "",
                        pano_lon: 0.0,
                        pano_lat: 0.0,
                        pano_yaw: 0.0
                    }
                    // form the url
                    var url = "http://maps.google.com/cbk?output=xml&ll=" + lat + "," + lon;
                    var xmlhttp = util.createCORSRequest ("GET", url);
                    xmlhttp.onreadystatechange = function ()
                    {
                        if (4 == xmlhttp.readyState)
                        {
                            if (200 == xmlhttp.status || 201 == xmlhttp.status || 202 == xmlhttp.status)
                            {
                                var result;
                                var xml = xmlhttp.response;

                                //    <?xml version="1.0" encoding="UTF-8" ?>
                                //    <panorama>
                                //        <data_properties image_width="13312" image_height="6656" tile_width="512" tile_height="512" image_date="2013-08"
                                //                         pano_id="oVi3A6P1RPZxp7YZryxtGw" imagery_type="1" num_zoom_levels="5" lat="47.116508"
                                //                         lng="7.252624" original_lat="47.116515" original_lng="7.252624" elevation_wgs84_m="499.582005"
                                //                         best_view_direction_deg="110.17577" elevation_egm96_m="450.624664">
                                //            <copyright>© 2017 Google</copyright>
                                //            <text>11 Hauptstrasse</text>
                                //            <street_range>11</street_range>
                                //            <region>Port, Canton of Bern</region>
                                //            <country>Switzerland</country>
                                //        </data_properties>
                                //        <projection_properties projection_type="spherical" pano_yaw_deg="264.18" tilt_yaw_deg="44.55"
                                //                               tilt_pitch_deg="3.73"/>
                                //        <annotation_properties>
                                //            <link yaw_deg="83.79" pano_id="mr_9eX7lbRGwjW9IebVn5Q" road_argb="0x80fdf872">
                                //                <link_text>Hauptstrasse</link_text>
                                //            </link>
                                //            <link yaw_deg="266.38" pano_id="C0jehpuEkKVdXnLh8WNl9Q" road_argb="0x80fdf872">
                                //                <link_text>Hauptstrasse</link_text>
                                //            </link>
                                //        </annotation_properties>
                                //    </panorama>
                                if (null != (result = data_properties_regex.exec (xml)))
                                {
                                    var guts = result[1];
                                    if (null != (result = pano_id_regex.exec (guts)))
                                        ret.pano_id = result[2];
                                    if (null != (result = latitude_regex.exec (guts)))
                                        ret.pano_lat = Number (result[2]);
                                    if (null != (result = longitude_regex.exec (guts)))
                                        ret.pano_lon = Number (result[2]);
                                }
                                if (null != (result = projection_properties_regex.exec (xml)))
                                {
                                    var guts = result[1];
                                    if (null != (result = pano_yaw_regex.exec (guts)))
                                        ret.pano_yaw = Number (result[2]);
                                }
                                // alert (JSON.stringify (ret, null, 4));
                                resolve (ret);
                            }
                            else
                                reject ("xmlhttp status " + xmlhttp.status);
                        }
                    };
                    xmlhttp.send ();
                }
            ));
        }

        /**
         * Get the Streetview URL for the given location.
         * @param lon the longitude of the point to get the Streetview URL for
         * @param lat the latitude of the point to get the Streetview URL for
         * @return a Promise that will be fulfilled with the URL
         */
        function urlFor (lon, lat)
        {
            return (new Promise (
                (resolve, reject) =>
                {
                    // query Google for nearest panorama and get it's coordinates
                    getPanoPoint (lon, lat).then (
                        function (pano) // { pano_id: "oVi3A6P1RPZxp7YZryxtGw", pano_lat: 47.116508, pano_lon: 7.252622, pano_yaw: 264 }
                        {
                            var url;
                            if ("" != pano.pano_id)
                            {
                                var azimuth = Math.atan2 (lat - pano.pano_lat, lon - pano.pano_lon);
                                azimuth = azimuth * 180.0 / Math.PI; // convert to degrees
                                // OK, this is a bit tricky, and it took a while to figure out.
                                // I envisage me facing north with a cylinder of photographic paper around my head.
                                // It's slit at the back, so it can be flattened. The panorama yaw is how many degrees
                                // clockwise (as seen from above) my head and the slit need to be rotated so I face
                                // in the direction that the vehicle was travelling. The back of my head was 180 degrees,
                                // and the yaw is added, so that the left edge of the flattened paper is 180+yaw
                                // and the right edge is 180+yaw+360.
                                // So if we want to look in the azimuth direction which is counterclockwise from
                                // the x axis, first we transform to degrees clockwise from the paper edge.
                                azimuth = 270.0 - azimuth - pano.pano_yaw;
                                // Then we add the angle of the left edge of the panorama.
                                azimuth += 180.0 + pano.pano_yaw;
                                if (azimuth >= 360.0)
                                    azimuth -= 360.0;
                                url = "http://maps.google.com/?" +
                                    "ie=UTF8&" +
                                    "layer=c&" +
                                    "om=0&" +
                                    "cbll=" + pano.pano_lat + "," + pano.pano_lon + "&" +
                                    "cbp=13," + azimuth + ",,0,5&" +
                                    "t=h&" +
                                    "ll=" + lat + "," + lon + "&" +
                                    "spn=0.052323,0.0842&" +
                                    "z=16&" +
                                    "panoid=" + pano.pano_id;
                            }
                            else
                                url = "http://maps.google.com/?" +
                                    "ie=UTF8&" +
                                    "om=0&" +
                                    "ll=" + lat + "," + lon + "&" +
                                    "spn=0.043666,0.088835&" +
                                    "z=16";
                            resolve (url); // "http://maps.google.com/?ie=UTF8&layer=c&om=0&cbll=47.116508,7.252622&cbp=13,74.35,,0,5&t=h&ll=47.116504,7.25264&spn=0.052323,0.0842&z=16&panoid=oVi3A6P1RPZxp7YZryxtGw"
                        },
                        reject
                    );
                }
            ));
        }

        return (
            {
                getPanoPoint: getPanoPoint,
                urlFor: urlFor
            }
        );
    }
);