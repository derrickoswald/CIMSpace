/**
 * Pseudo-smart Master Resource Identifier generation.
 */
"use strict";

define
(
    ["cim"],
    /**
     * @summary Gnerate mRID values as best we can.
     * @description Uses heuristics to create new mRID values following user freindly patterns,
     * and if that fails falls back to Universally Unique Identifiers:
     * http://www.ietf.org/rfc/rfc4122.txt
     * @name cimmrid
     * @exports CIMmrid
     * @version 1.0
     */
    function (cim)
    {
        class CIMmrid
        {
            constructor (cimmap)
            {
                this._cimmap = cimmap;
                this._default_digits = 4;
                this._patterns =
                {
                    "ACLineSegment":    "CAB",
                    "Breaker":          "BRK",
                    "BusbarSection":    "BUS",
                    // use parent as template: "ConnectivityNode": "NOD",
                    "Connector":        "CN",
                    "EnergyConsumer":   "USR",
                    "Fuse":             "FUS",
                    "Junction":         "JCN",
                    "Switch":           "SW",
                    "Substation":       "STA",
                    // use parent as template: "Terminal":         "TER",
                    "PowerTransformer": "TX"
                };
            }

            /**
             * Generate a GUID.
             * See https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript#2117523
             */
            uuidv4 ()
            {
                var uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace (/[018]/g, c => (c ^ crypto.getRandomValues (new Uint8Array (1))[0] & 15 >> c / 4).toString (16));
                return ("_" + uuid);
            }

            /**
             * Predicate to check if the <code>id</code> looks like a GUID.
             * @param s the string to test
             * @return <code>true</code> if the string has the form of a GUID with an optional leading underscore, <code>false</code> otherwise.
             */
            isGUID (s)
            {
                return ((null != s) ? /^[_]?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test (s) : false);
            }

            /**
             * Generate a 'unique' id.
             * If the supplied string looks like a GUID, this generates another GUID,
             * else it appends the suffix to the supplied string to generate a 'unique' id - if you know what you are doing.
             * @param s the 'base' id
             * @param the suffix to add to the base id if the base id isn't a GUID
             * @return a GUID or the supplied string with the suffix
             */
            generateId (s, suffix)
            {
                return (this.isGUID (s) ? this.uuidv4 () : s + suffix);
            }

            /**
             * Pad a string on the left to width with padding.
             */
            pad (width, string, padding)
            {
                return ((width <= string.length) ? string : this.pad (width, padding + string, padding));
            }

            nextIdFor (cls, parent, suffix)
            {
                var ret = this.uuidv4 ();
                var prefix;
                var max = 0;
                if (this._patterns[cls])
                {
                    prefix = this._patterns[cls];
                    var offpattern = undefined;
                    var offprefix = undefined;
                    // get highest number and check all ids adhere to prefix
                    var regex = /(\S+[^\d])(\d+)$/;
                    this._cimmap.forAll (cls,
                        obj =>
                        {
                            if (obj.cls == cls)
                            {
                                var result = regex.exec (obj.id);
                                if (result)
                                {
                                    var n = Number (result[2]);
                                    if (n > max)
                                        max = n;
                                    var p = result[1];
                                    if (p != prefix)
                                        offprefix = p;
                                }
                                else
                                    offpattern = obj.id;
                            }
                        }
                    );
                    if (offpattern)
                        console.log ("object id does not match pattern /(\S+[^\d])(\d+)$/, e.g. " + offpattern);
                    else if (offprefix)
                        console.log ("object id does not match prefix " + prefix + ", e.g. " + offprefix);
                    else
                        ret = prefix + this.pad (this._default_digits, (max + 1).toString (), "0");
                }
                else
                {
                    if (parent && suffix)
                        ret = this.generateId (parent.id, suffix);
                }
                return (ret);
            }
        }

        return (CIMmrid);
    }
)