/**
 * @fileOverview OpenStreetmap Nominatim interface.
 * @name nominatim
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["util", "model/Common"],
    /**
     * @summary Access OpenStreetMap Nominatim API to create a street address for a point.
     * @description Calls nominatim service to geocode the point then generates CIM classes for the address if it was found.
     * @name nominatim
     * @exports nominatim
     * @version 1.0
     */
    function (util, Common)
    {
        /**
         * Get the address of the given coordinates, if possible.
         * @param lon the longitude of the point to get the address for
         * @param lat the latitude of the point to get the address for
         * @param callback the function to call back with the address details
         * e.g.
         * require (["nominatim"], function (nominatim) { nominatim.getAddress (7.486286, 46.93000, function (address) { alert (JSON.stringify (address, null, 4)); }); });
         * @function getAddress
         * @memberOf module:nominatim
         */
        function getAddress (lon, lat, callback)
        {
            var ret = null;
            // form the url
            var url = "http://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + lat + "&lon=" + lon +"&zoom=18&addressdetails=1";
            var xmlhttp = util.createCORSRequest ("GET", url);
            xmlhttp.onreadystatechange = function ()
            {
                if (4 == xmlhttp.readyState)
                {
                    if (200 == xmlhttp.status || 201 == xmlhttp.status || 202 == xmlhttp.status)
                    {
                        var result;
                        var json = JSON.parse (xmlhttp.response);

                        // https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=46.93000&lon=7.486286&zoom=18&addressdetails=1

                        //    {
                        //        "place_id": "45251734",
                        //        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
                        //        "osm_type": "node",
                        //        "osm_id": "3221803156",
                        //        "lat": "46.9299967",
                        //        "lon": "7.4862845",
                        //        "place_rank": "30",
                        //        "category": "place",
                        //        "type": "house",
                        //        "importance": "0",
                        //        "addresstype": "place",
                        //        "display_name": "7, Belpstrasse, Muri, Muri bei Bern, Verwaltungskreis Bern-Mittelland, Verwaltungsregion Bern-Mittelland, Bern, 3074, Switzerland",
                        //        "name": null,
                        //        "address": {
                        //            "house_number": "7",
                        //            "road": "Belpstrasse",
                        //            "suburb": "Muri",
                        //            "city": "Muri bei Bern",
                        //            "county": "Verwaltungskreis Bern-Mittelland",
                        //            "state_district": "Verwaltungsregion Bern-Mittelland",
                        //            "state": "Bern",
                        //            "postcode": "3074",
                        //            "country": "Switzerland",
                        //            "country_code": "ch"
                        //        },
                        //        "boundingbox": [
                        //            "46.9298967",
                        //            "46.9300967",
                        //            "7.4861845",
                        //            "7.4863845"
                        //        ]
                        //    }

                        // http://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=46.93019&lon=7.48667&zoom=18&addressdetails=1
                        //    {
                        //        "place_id": "44641666",
                        //        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
                        //        "osm_type": "node",
                        //        "osm_id": "3224434854",
                        //        "lat": "46.9301854",
                        //        "lon": "7.4866743",
                        //        "place_rank": "30",
                        //        "category": "shop",
                        //        "type": "bakery",
                        //        "importance": "0",
                        //        "addresstype": "shop",
                        //        "display_name": "Bonbonière, 3, Belpstrasse, Muri, Muri bei Bern, Verwaltungskreis Bern-Mittelland, Verwaltungsregion Bern-Mittelland, Bern, 3074, Switzerland",
                        //        "name": "Bonbonière",
                        //        "address": {
                        //            "bakery": "Bonbonière",
                        //            "house_number": "3",
                        //            "road": "Belpstrasse",
                        //            "suburb": "Muri",
                        //            "city": "Muri bei Bern",
                        //            "county": "Verwaltungskreis Bern-Mittelland",
                        //            "state_district": "Verwaltungsregion Bern-Mittelland",
                        //            "state": "Bern",
                        //            "postcode": "3074",
                        //            "country": "Switzerland",
                        //            "country_code": "ch"
                        //        },
                        //        "boundingbox": [
                        //            "46.9300854",
                        //            "46.9302854",
                        //            "7.4865743",
                        //            "7.4867743"
                        //        ]
                        //    }

                        // check provided point is inside the bounding box
                        if (lat >= json.boundingbox[0] && lat <= json.boundingbox[1] && lon >= json.boundingbox[2] && lon <= json.boundingbox[3])
                        {
                            ret = json;
                            ret.url = url;
                        }
                    }
                    else
                        console.log ("xmlhttp status " + xmlhttp.status);
                    if (callback)
                        callback (ret);
                }
            };
            xmlhttp.send ();
        }

// ToDo: break out into module:
        /**
         * Generate a GUID.
         * See https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript#2117523
         */
        function uuidv4 ()
        {
            var uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace (/[018]/g, c => (c ^ crypto.getRandomValues (new Uint8Array (1))[0] & 15 >> c / 4).toString (16));
            return ("_" + uuid);
        }

        function areEqual (obj1, obj2, filter)
        {
            var a = JSON.stringify (obj1, filter);
            var b = JSON.stringify (obj2, filter);
            if (!a) a = "";
            if (!b) b = "";
            a = a.split ("").sort ().join ("");
            b = b.split ("").sort ().join ("");
            return (a == b);
        }

        /**
         * Create a StreetAddress for the given coordinates, if possible.
         * @param lon the longitude of the point to get the address for
         * @param lat the latitude of the point to get the address for
         * @param callback the function to call back with the CIM objects
         * @param data the current CIM data (to avoid duplicate entries - normalized database)
         * e.g.
         * require (["nominatim"], function (nominatim) { nominatim.getStreetAddress (7.486286, 46.93000, function (address) { alert (JSON.stringify (address, null, 4)); }); });
         * @function getStreetAddress
         * @memberOf module:nominatim
         */
        function getStreetAddress (lon, lat, callback, data)
        {
            function fn (response)
            {
                var ret = [];
                if (null != response)
                {
                    var _data = {};
                    // set up status
                    var status = new Common.Status (
                        {
                            cls: "Status",
                            id: uuidv4 (),
                            dateTime: new Date ().toISOString (),
                            reason: "Nominatim initialization",
                            remark: response.url,
                            value: "valid"
                        },
                        _data
                    );
                    ret.push (status);

                    var street = new Common.StreetDetail (
                        {
                            cls: "StreetDetail",
                            id: uuidv4 (),
                            addressGeneral: response.display_name,
                            buildingName: response.address.housename ? response.address.housename : response.address.building,
                            code: response.type,
                            number: response.address.house_number,
                            suiteNumber: response.address.flats
                        },
                        _data
                    );
                    var road = [];
                    if (response.address.pedestrian) road.push (response.address.pedestrian);
                    if (response.address.road)       road.push (response.address.road);
                    if (response.address.street)     road.push (response.address.street);
                    if (0 != road.length) street.name = road.join (", ");
                    if (response.name) street.prefix = response.name;
                    if (response.addresstype) street.suffix = response.addresstype;
                    ret.push (street);

                    var town = new Common.TownDetail (
                        {
                            cls: "TownDetail",
                            id: uuidv4 (),
                            code: response.address.postcode, // there isn't a postal code field in the StreetDetail?, so we use this field
                            country: response.address.country, // country_code ?
                            name: response.address.town ? response.address.town : response.address.city,
                            stateOrProvince: response.address.state
                        },
                        _data
                    );
                    var section = [];
                    if (response.address.neighbourhood)  section.push (response.address.neighbourhood);
                    if (response.address.village)        section.push (response.address.village);
                    if (response.address.suburb)         section.push (response.address.suburb);
                    if (response.address.county)         section.push (response.address.county);
                    if (response.address.state_district) section.push (response.address.state_district);
                    if (0 != section.length) town.section = section.join (", ");
                    // check for an existing TownDetail with the same attributes
                    var match = null;
                    if (data)
                    {
                        var towns = data.TownDetail;
                        if (towns)
                        {
                            function notid (key, value)
                            {
                                return (key != "id" ? (key != "EditDisposition" ? value : undefined) : undefined);
                            }
                            for (var id in towns)
                            {
                                var test = towns[id];
                                if (areEqual (town, test, notid))
                                    match = test;
                            }
                        }
                    }
                    if (match)
                        town = match;
                    else
                        ret.push (town);
                    var address = new Common.StreetAddress (
                        {
                            cls: "StreetAddress",
                            id: uuidv4 (),
                            status: status.id,
                            streetDetail: street.id,
                            townDetail: town.id
                        },
                        _data
                    );
                    ret.push (address);
                }
                callback (ret);
            }
            getAddress (lon, lat, fn);
        }

        return (
            {
                getAddress: getAddress,
                getStreetAddress: getStreetAddress
            }
        );
    }
);
/*
require (["nominatim", "cimmap", "cim"],
   function (nominatim, map, cim)
   {
        function add (proto)
        {
            proto.EditDisposition = "new";
            var cls = cim.class_map (proto);
            return (new cls (proto, map.get_data ()));
        }
        function handler (address)
        {
            if (0 != address.length)
            {
                for (var i = 0; i < address.length; i++)
                    address[i] = add (address[i]);
                alert (JSON.stringify (address, null, 4));
            }
        }
        function mousedown_listener (event)
        {
            var key = event.originalEvent.ctrlKey || event.originalEvent.shiftKey || event.originalEvent.altKey || event.originalEvent.metaKey;
            if (!key)
            {
                var buttons = event.originalEvent.buttons;
                var leftbutton = 0 != (buttons & 1);
                var rightbutton = 0 != (buttons & 2);
                if (leftbutton)
                    nominatim.getStreetAddress (event.lngLat.lng, event.lngLat.lat, handler, map.get_data ());
                else if (rightbutton)
                    map.get_map ().off ("mousedown", mousedown_listener);
            }
            return (false);
        }
        map.get_map ().on ("mousedown", mousedown_listener);
   });
*/