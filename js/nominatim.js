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
        class Nominatim
        {
            /*
             * Create a Nominatim object.
             * @param cimmap access to the current CIM data (to avoid duplicate entries - normalized database)
             */
            constructor (cimmap)
            {
                this._cimmap = cimmap;
            }

            /**
             * Get the address of the given coordinates, if possible.
             * @param lon the longitude of the point to get the address for
             * @param lat the latitude of the point to get the address for
             * @return a Promise that resolves if successful and rejects if not.
             * @function getAddress
             * @memberOf Nominatim
             */
            getAddress (lon, lat)
            {
                return (
                    new Promise (
                        (resolve, reject) =>
                        {
                            // form the url
                            const url = "http://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + lat + "&lon=" + lon +"&zoom=18&addressdetails=1";
                            const xmlhttp = util.createCORSRequest ("GET", url);
                            xmlhttp.onreadystatechange = function ()
                            {
                                if (4 === xmlhttp.readyState)
                                {
                                    if (200 === xmlhttp.status || 201 === xmlhttp.status || 202 === xmlhttp.status)
                                    {
                                        const json = JSON.parse (xmlhttp.response);

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
                                        const bb = json.boundingbox;
                                        if (lat >= bb[0] && lat <= bb[1] && lon >= bb[2] && lon <= bb[3])
                                        {
                                            json.url = url;
                                            resolve (json);
                                        }
                                        else
                                            reject ({ error: "geocoded bounding box [" + bb + "] does not contain (" + lon + "," + lat + ")" });
                                    }
                                    else
                                        reject ({ error: "xmlhttp status " + xmlhttp.status });
                                }
                            };
                            xmlhttp.send ();
                        }
                    )
                );
            }

            /**
             * Check for an existing TownDetail with the same attributes.
             * @param town the new TownDetail to check if it exists
             * @return the matching town if any, null otherwise
             * @function isExisting
             * @memberOf Nominatim
             */
            isExisting (town)
            {
                function areEqual (obj1, obj2, filter)
                {
                    let a = JSON.stringify (obj1, filter);
                    let b = JSON.stringify (obj2, filter);
                    if (!a) a = "";
                    if (!b) b = "";
                    a = a.split ("").sort ().join ("");
                    b = b.split ("").sort ().join ("");
                    return (a === b);
                }
                function notid (key, value)
                {
                    return (key !== "id" ? (key !== "EditDisposition" ? value : undefined) : undefined);
                }
                let match = null;
                if (this._cimmap)
                    this._cimmap.forAll ("TownDetail", test => { if (areEqual (town, test, notid)) match = test; });
                return (match);
            }

            /**
             * Create CIM components matching the Nominatim geocode data.
             * @param parent the base object, used to generate new mRID from (with suffixes)
             * @param response The nominatim server response as a JavaScript object
             * @return an array of new CIM elements including StreetAddress, StreetDetail and Status,
             * with possibly a TownDetail unless it already exists in the map data
             * @function formStreetAddress
             * @memberOf Nominatim
             */
            formStreetAddress (parent, response)
            {
                const ret = [];
                if (null != response)
                {
                    const _data = {};
                    // set up status
                    const status = new Common.Status (
                        {
                            cls: "Status",
                            id: this._cimmap.get_editor ().get_cimmrid ().nextIdFor ("Status", parent, "_status"),
                            dateTime: new Date ().toISOString (),
                            reason: "Nominatim initialization",
                            remark: response.url.replace (/&/g, "&amp;"),
                            value: "valid"
                        },
                        _data
                    );
                    ret.push (status);

                    const street = new Common.StreetDetail (
                        {
                            cls: "StreetDetail",
                            id: this._cimmap.get_editor ().get_cimmrid ().nextIdFor ("Status", parent, "_street"),
                            addressGeneral: response.display_name,
                            buildingName: response.address.housename ? response.address.housename : response.address.building,
                            code: response.type,
                            number: response.address.house_number,
                            suiteNumber: response.address.flats
                        },
                        _data
                    );
                    const road = [];
                    if (response.address.pedestrian) road.push (response.address.pedestrian);
                    if (response.address.road)       road.push (response.address.road);
                    if (response.address.street)     road.push (response.address.street);
                    if (0 !== road.length) street.name = road.join (", ");
                    if (response.name) street.prefix = response.name;
                    if (response.addresstype) street.suffix = response.addresstype;
                    ret.push (street);

                    let town = new Common.TownDetail (
                        {
                            cls: "TownDetail",
                            id: response.address.country_code + "-" + response.address.postcode.replace (/\s/g, ""),
                            code: response.address.postcode, // there isn't a postal code field in the StreetDetail?, so we use this field
                            country: response.address.country,
                            name: response.address.town ? response.address.town : response.address.city,
                            stateOrProvince: response.address.state
                        },
                        _data
                    );
                    const section = [];
                    if (response.address.neighbourhood)  section.push (response.address.neighbourhood);
                    if (response.address.village)        section.push (response.address.village);
                    if (response.address.suburb)         section.push (response.address.suburb);
                    if (response.address.county)         section.push (response.address.county);
                    if (response.address.state_district) section.push (response.address.state_district);
                    if (0 !== section.length) town.section = section.join (", ");
                    const match = this.isExisting (town);
                    if (match)
                        town = match;
                    else
                        ret.push (town);
                    const address = new Common.StreetAddress (
                        {
                            cls: "StreetAddress",
                            id: this._cimmap.get_editor ().get_cimmrid ().nextIdFor ("Status", parent, "_address"),
                            status: status.id,
                            streetDetail: street.id,
                            townDetail: town.id
                        },
                        _data
                    );
                    ret.push (address);
                }
                return (ret);
            }

            /**
             * Create a StreetAddress for the given object, if possible.
             * @param array an array of CIM objects that must include a Location and one PositionPoint.
             * The mainAddress attribute of the first element of the array is set to the generated address if successful.
             * @return a Promise that resolves with the array with street address elements if successful or resolves with the unaltered array if not.
             * @function getStreetAddress
             * @memberOf Nominatim
             */
            getStreetAddress (array)
            {
                const locations = array.filter (o => o.cls === "Location");
                if (0 !== locations.length)
                {
                    const location = locations[0];
                    // get the position points
                    const pp = array.filter (o => o.cls === "PositionPoint").sort ((a, b) => a.sequenceNumber - b.sequenceNumber);
                    if (1 === pp.length) // only do this for point objects
                    {
                        const lon = Number (pp[0].xPosition);
                        const lat = Number (pp[0].yPosition);
                        return (
                            this.getAddress (lon, lat).then (
                                (response) =>
                                {
                                    const extra = this.formStreetAddress (array[0], response);
                                    // set the Location.mainAddress
                                    const address = extra.filter (o => o.cls === "StreetAddress")[0];
                                    location.mainAddress = address.id;
                                    return (array.concat (extra));
                                },
                                (error) =>
                                {
                                    // just return the original array
                                    return (array);
                                }
                            )
                        );
                    }
                    else
                        return (Promise.resolve (array));
                }
                else
                    return (Promise.resolve (array));
            }
        }

        return (Nominatim);
    }
);
