/**
 * @fileOverview Read CIM files.
 * @name cim
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/AssetInfo", "model/Assets", "model/AsynchronousMachineDynamics", "model/AuxiliaryEquipment", "model/Common", "model/CongestionRevenueRights", "model/Contingency", "model/ControlArea", "model/Core", "model/Customers", "model/DC", "model/DiagramLayout", "model/DiscontinuousExcitationControlDynamics", "model/Domain", "model/Equivalents", "model/ExcitationSystemDynamics", "model/ExistingEnumExtensions", "model/ExternalInputs", "model/Faults", "model/GenerationTrainingSimulation", "model/ICCP", "model/IEC61968", "model/IEC61970", "model/IEC62325", "model/InfAssetInfo", "model/InfAssets", "model/InfCommon", "model/InfCongestionRevenueRights", "model/InfCustomers", "model/InfDomain", "model/InfERPSupport", "model/InfEnergyScheduling", "model/InfEnergySource", "model/InfExternalInputs", "model/InfFinancial", "model/InfLocations", "model/InfMarketOperations", "model/InfMarketResults", "model/InfNewAssets", "model/InfOperationalLimits", "model/InfParticipantInterfaces", "model/InfReservation", "model/InfSIPS", "model/InfTypeAsset", "model/InfWiresExt", "model/InfWork", "model/LoadControl", "model/LoadDynamics", "model/LoadModel", "model/MarketCommon", "model/MarketManagement", "model/MarketOpCommon", "model/MarketPlan", "model/MarketQualitySystem", "model/MarketResults", "model/Meas", "model/MechanicalLoadDynamics", "model/Metering", "model/MktDomain", "model/ModelAuthority", "model/ModelDescription", "model/OperationalLimits", "model/Operations", "model/OverexcitationLimiterDynamics", "model/PFVArControllerType1Dynamics", "model/PFVArControllerType2Dynamics", "model/PackageDependencies", "model/ParticipantInterfaces", "model/PaymentMetering", "model/PowerSystemProject", "model/PowerSystemStabilizerDynamics", "model/Production", "model/Protection", "model/ReadingTypeEnumerations", "model/ReferenceData", "model/SCADA", "model/StandardInterconnections", "model/StandardModels", "model/StateVariables", "model/SynchronousMachineDynamics", "model/Topology", "model/TurbineGovernorDynamics", "model/TurbineLoadControllerDynamics", "model/UnderexcitationLimiterDynamics", "model/UserDefinedModels", "model/VoltageAdjusterDynamics", "model/VoltageCompensatorDynamics", "model/WindDynamics", "model/Wires", "model/Work"],
    /**
     * @summary CIM file reading functions.
     * @description Read an XML file with a restricted profile
     * (based on the PowerOn Advantage profile).
     * @name cim
     * @exports cim
     * @version 1.0
     */
    function (base, AssetInfo, Assets, AsynchronousMachineDynamics, AuxiliaryEquipment, Common, CongestionRevenueRights, Contingency, ControlArea, Core, Customers, DC, DiagramLayout, DiscontinuousExcitationControlDynamics, Domain, Equivalents, ExcitationSystemDynamics, ExistingEnumExtensions, ExternalInputs, Faults, GenerationTrainingSimulation, ICCP, IEC61968, IEC61970, IEC62325, InfAssetInfo, InfAssets, InfCommon, InfCongestionRevenueRights, InfCustomers, InfDomain, InfERPSupport, InfEnergyScheduling, InfEnergySource, InfExternalInputs, InfFinancial, InfLocations, InfMarketOperations, InfMarketResults, InfNewAssets, InfOperationalLimits, InfParticipantInterfaces, InfReservation, InfSIPS, InfTypeAsset, InfWiresExt, InfWork, LoadControl, LoadDynamics, LoadModel, MarketCommon, MarketManagement, MarketOpCommon, MarketPlan, MarketQualitySystem, MarketResults, Meas, MechanicalLoadDynamics, Metering, MktDomain, ModelAuthority, ModelDescription, OperationalLimits, Operations, OverexcitationLimiterDynamics, PFVArControllerType1Dynamics, PFVArControllerType2Dynamics, PackageDependencies, ParticipantInterfaces, PaymentMetering, PowerSystemProject, PowerSystemStabilizerDynamics, Production, Protection, ReadingTypeEnumerations, ReferenceData, SCADA, StandardInterconnections, StandardModels, StateVariables, SynchronousMachineDynamics, Topology, TurbineGovernorDynamics, TurbineLoadControllerDynamics, UnderexcitationLimiterDynamics, UserDefinedModels, VoltageAdjusterDynamics, VoltageCompensatorDynamics, WindDynamics, Wires, Work)
    {
        /**
         * The size of chunks to read into memory.
         */
        var CHUNK_SIZE = 4000000;

        /**
         * Convert a string into UTF-8 encoded (all high order bytes are zero) string.
         * @see {http://monsur.hossa.in/2012/07/20/utf-8-in-javascript.html}
         * @param {String} str - the string to encode
         * @returns {String} UTF-8 encoded string
         * @function encode_utf8
         * @memberOf module:cim
         */
        function encode_utf8 (str)
        {
            return (unescape (encodeURIComponent (str)));
        };

        // create the mapping table
        var theMap = {};
        Array.prototype.map.call (arguments,
            function (x)
            {
                for (var property in x)
                    if (x.hasOwnProperty (property))
                        if (property.startsWith ("parse_"))
                            theMap["cim:" + property.substring (6)] = x[property];
            }
        );

        /**
         * Parse an XML file into constituent parts
         * @param {String} xml - the string to parse
         * @param {Object} context - the file reading context
         * @param {Object} parsed - optional parsed elements to add to
         * @returns {Object} the parsed object
         * @function read_xml
         * @memberOf module:cim
         */
        function read_xml (xml, context, parsed)
        {
            var regex;
            var startindex;
            var result;
            var subcontext;

            context = context ||
            {
                start_character: 0,
                end_character: 0,
                newlines: [],
                parsed: parsed || { ignored: 0 }
            };

            // update the newline index
            context.newlines = base.index_string (xml, context.start_character, context.newlines);
            context.end_character = context.start_character;

            // scan for cim elements
            regex = new RegExp ("\\s*<(cim:[^ >\\s]+)([\\s\\S]*?)<\\/\\1>\\s*", "g");
//            regex = /\s*<(cim:[^ >\\s]+)([\s\S]*?)<\/\1>\s*/g; // important to consume leading and trailing whitespace
            startindex = 0;
            while (null != (result = regex.exec (xml)))
            {
                // check for a complete outer element,
                // i.e. check that the matched pattern length fills starting index to ending index
                // this is in lieu of all browser support for the sticky flag - y
                if (startindex + result[0].length != regex.lastIndex)
                    break;
                startindex = regex.lastIndex;

                // update the last seen character position
                context.end_character = context.start_character + regex.lastIndex;
                // form the subcontext for parsing individual elements
                subcontext =
                {
                    start_character: context.start_character + result.index,
                    end_character: context.end_character,
                    newlines: context.newlines,
                    parsed: context.parsed
                };
                // parse individual elements
                var element = result[1];
                var guts = result[2];
                var parser = theMap[element];
                if ("undefined" != typeof (parser))
                    parser (subcontext, guts);
                else
                {
                    if (context.parsed.ignored < 3)
                        if ("undefined" != typeof (console))
                            console.log ("unrecognized element type '" + result[1] + "' at line " + base.line_number (subcontext));
                        else
                            print ("unrecognized element type '" + result[1] + "' at line " + base.line_number (subcontext));
                    context.parsed.ignored++;
                }

                result = null;
            }

            return ({parsed: context.parsed, context: context});
        }

        /**
         * Parse an XML file into constituent parts.
         * @param {String} xml - the string to parse
         * @param {Number} start - the position in the string to start parsing at
         * @param {Object} context - the file reading context
         * @returns {Object} the parsed object
         * @function read_full_xml
         * @memberOf module:cim
         */
        function read_full_xml (xml, start, context, parsed)
        {
            var subxml;
            var regex;
            var encoding;
            var result;

            // check for just starting
            if (0 == start)
            {
                context = context ||
                {
                    offset: 0,
                    start_character: 0,
                    end_character: 0,
                    newlines: [],
                    parsed: { ignored: 0 }
                };
                subxml = xml;

                // remove the XML declaration, i.e. <?xml version="1.0" encoding="UTF-8" standalone="no"?>
                regex = /<\?([\s\S]*)\?>\s*/g;
                if (null != (result = regex.exec (subxml)))
                {
                    context.offset += regex.lastIndex;
                    context.newlines = base.index_string (subxml.substring (0, regex.lastIndex), context.start_character, context.newlines);
                    context.start_character += regex.lastIndex;
                    subxml = subxml.substring (regex.lastIndex);
                    // check the encoding
                    regex = /encoding="([^"]*)"/g;
                    if (null != (result = regex.exec (result[1])))
                    {
                        encoding = result[1];
                        if ("UTF-8" != encoding.toUpperCase ())
                            reject (Error ("unsupported encoding " + encoding));
                    }
                }

                // parse RDF, i.e. <rdf:RDF xmlns:dm="http://iec.ch/2002/schema/CIM_difference_model#" xmlns:cim="http://iec.ch/TC57/2010/CIM-schema-cim15#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                regex = /<rdf:RDF([\s\S]*?)>\s*/g;
                if (null != (result = regex.exec (subxml)))
                {
                    context.offset += regex.lastIndex;
                    context.newlines = base.index_string (subxml.substring (0, regex.lastIndex), context.start_character, context.newlines);
                    context.start_character += regex.lastIndex;
                    subxml = subxml.substring (regex.lastIndex);
                }

                // parse FullModel, i.e. <md:FullModel ....  </md:FullModel>
                regex = new RegExp ("\\s*<md:FullModel ([\\s\\S]*?)<\\/md:FullModel>\\s*", "g");
                if (null != (result = regex.exec (subxml)))
                {
                    context.offset += regex.lastIndex;
                    context.newlines = base.index_string (subxml.substring (0, regex.lastIndex), context.start_character, context.newlines);
                    context.start_character += regex.lastIndex;
                    subxml = subxml.substring (regex.lastIndex);
                }
            }
            else
            {
                subxml = xml;
                context.offset = 0;
            }

            context.end_character = context.start_character;
            result = read_xml (subxml, context, parsed);

            return (result);
        }

        /**
         * @summary Read a blob as XML and resolve or reject.
         * @description Reads a blob as UTF8 and parses the XML.
         * @param {Blob} blob - the blob to read
         * @param {Number} start - the starting byte to read from the blob
         * @param {Object} context - the state of the parser
         * @param {Object} parsed - the output of the parser so far
         * @param {Function} resolve - the function to call to resolve the promise
         * @param {Function} reject - the function to call to reject the promise
         * @function xml_read_promise
         * @memberOf module:cim
         */
        function xml_read_promise (blob, start, context, parsed, resolve, reject)
        {
            var size;
            var tbd;
            var subblob;
            var reader;

            size = blob.size;
            tbd = Math.min (CHUNK_SIZE, size - start);
            subblob = blob.slice (start, start + tbd, blob.type);
            reader = new FileReader ();
            reader.onload = function (event)
            {
                var xml;
                var result;
                var read;
                var bytes;
                var done;

                xml = event.target.result;
                if ("" == xml)
                    resolve ({context: context, parsed: parsed});
                else
                {
                    result = read_full_xml (xml, start, context, parsed);
                    read = result.context.end_character - result.context.start_character; // number of characters parsed
                    if (0 == read)
                        reject (Error ("parse failed at line " + base.line_number (context)));
                    else
                    {
                        bytes = encode_utf8 (xml.substring (0, read + result.context.offset)).length;

                        context = result.context;
                        parsed = result.parsed;

                        // check for done
                        done = false;
                        regex = /\s*<\/rdf:RDF>\s*/g;
                        if (null != (result = regex.exec (xml.substring (read + result.context.offset))))
                        {
                            context.end_character += regex.lastIndex;
                            done = true;
                        }
                        else
                        {
                            context.start_character = context.start_character + read;
                            context.newlines = context.newlines.slice (0, base.line_number (context, context.end_character) - 1);
                        }

                        if (done)
                            resolve ({context: context, parsed: parsed});
                        else
                            xml_read_promise (blob, start + bytes, context, parsed, resolve, reject); // tail recursive
                    }
                }
            };
            reader.onerror = function ()
            {
                reject (Error ("reader error"));
            };
            reader.readAsText (subblob, "UTF-8");
        }

        /**
         * @summary Read a blob as XML.
         * @description Processes chunks of the file reading the blob as UTF8.
         * @param {Blob} blob - the blob to read
         * @param {Function} callback - function to call back with the data: { parsed: data, context: ctx }
         * @function read_xml_blob
         * @memberOf module:cim
         */
        function read_xml_blob (blob, callback)
        {
            var promise;

            promise = new Promise (xml_read_promise.bind (this, blob, 0, null, null));
            promise.then
            (
                function (result)
                {
                    callback (result);
                },
                function (err)
                {
                    if ("undefined" != typeof (console))
                        console.log (err);
                    else
                        print (err);
                }
            );
        }

        return (
            {
                read_full_xml: read_full_xml,
                read_xml_blob: read_xml_blob
            }
        );
    }
);