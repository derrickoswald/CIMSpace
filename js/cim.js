/**
 * @fileOverview Read CIM files.
 * @name cim
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["cimmrid", "model/base", "model/AlternateModels", "model/AssetInfo", "model/AssetMeas", "model/Assets", "model/AsynchronousMachineDynamics", "model/AuxiliaryEquipment", "model/CSC", "model/Common", "model/CongestionRevenueRights", "model/Contingency", "model/ControlArea", "model/Core", "model/Customers", "model/DC", "model/DER", "model/DiagramLayout", "model/DiscontinuousExcitationControlDynamics", "model/Domain", "model/EnergyArea", "model/EnvDomain", "model/Environmental", "model/Equivalents", "model/ExcitationSystemDynamics", "model/ExternalInputs", "model/Faults", "model/Feeder", "model/GenerationTrainingSimulation", "model/GenericDataSet", "model/HVDCDynamics", "model/ICCPConfiguration", "model/IEC61968", "model/IEC61970", "model/IEC62325", "model/InfAssetInfo", "model/InfAssets", "model/InfAssets2", "model/InfAvailabilityPlans", "model/InfCommon", "model/InfCongestionRevenueRights", "model/InfCustomers", "model/InfDomain", "model/InfERPSupport", "model/InfEnergyScheduling", "model/InfExternalInputs", "model/InfFinancial", "model/InfHVDCDynamics", "model/InfLocations", "model/InfMarketOpCommon", "model/InfMarketOperations", "model/InfMarketResults", "model/InfOperationalLimits", "model/InfParticipantInterfaces", "model/InfReferenceData", "model/InfReservation", "model/InfSIPS", "model/InfTypeAsset", "model/InfWiresExt", "model/InfWork", "model/LoadControl", "model/LoadDynamics", "model/LoadModel", "model/LoadModel2", "model/MarketCommon", "model/MarketManagement", "model/MarketOpCommon", "model/MarketPlan", "model/MarketQualitySystem", "model/MarketResults", "model/Meas", "model/MechanicalLoadDynamics", "model/Metering", "model/MktDomain", "model/ModelOperations", "model/NetworkModelFrames", "model/NetworkModelProjects", "model/OperationalLimits", "model/Operations", "model/OverexcitationLimiterDynamics", "model/PFVArControllerType1Dynamics", "model/PFVArControllerType2Dynamics", "model/PackageDependencies", "model/ParticipantInterfaces", "model/PaymentMetering", "model/PowerSystemStabilizerDynamics", "model/Production", "model/Protection", "model/ReferenceData", "model/SCADA", "model/StandardInterconnections", "model/StandardModels", "model/StateVariables", "model/StaticVarCompensatorDynamics", "model/SynchronousMachineDynamics", "model/Topology", "model/TurbineGovernorDynamics", "model/TurbineLoadControllerDynamics", "model/UnderexcitationLimiterDynamics", "model/UserDefinedModels", "model/VSC", "model/VoltageAdjusterDynamics", "model/VoltageCompensatorDynamics", "model/WindDynamics", "model/Wires", "model/Work", "model/unused"],
    /**
     * @summary CIM file reading functions.
     * @description Read an XML file with a restricted profile
     * (based on the PowerOn Advantage profile).
     * @name cim
     * @exports cim
     * @version 1.0
     */
    function (CIMmrid, base, AlternateModels, AssetInfo, AssetMeas, Assets, AsynchronousMachineDynamics, AuxiliaryEquipment, CSC, Common, CongestionRevenueRights, Contingency, ControlArea, Core, Customers, DC, DER, DiagramLayout, DiscontinuousExcitationControlDynamics, Domain, EnergyArea, EnvDomain, Environmental, Equivalents, ExcitationSystemDynamics, ExternalInputs, Faults, Feeder, GenerationTrainingSimulation, GenericDataSet, HVDCDynamics, ICCPConfiguration, IEC61968, IEC61970, IEC62325, InfAssetInfo, InfAssets, InfAssets2, InfAvailabilityPlans, InfCommon, InfCongestionRevenueRights, InfCustomers, InfDomain, InfERPSupport, InfEnergyScheduling, InfExternalInputs, InfFinancial, InfHVDCDynamics, InfLocations, InfMarketOpCommon, InfMarketOperations, InfMarketResults, InfOperationalLimits, InfParticipantInterfaces, InfReferenceData, InfReservation, InfSIPS, InfTypeAsset, InfWiresExt, InfWork, LoadControl, LoadDynamics, LoadModel, LoadModel2, MarketCommon, MarketManagement, MarketOpCommon, MarketPlan, MarketQualitySystem, MarketResults, Meas, MechanicalLoadDynamics, Metering, MktDomain, ModelOperations, NetworkModelFrames, NetworkModelProjects, OperationalLimits, Operations, OverexcitationLimiterDynamics, PFVArControllerType1Dynamics, PFVArControllerType2Dynamics, PackageDependencies, ParticipantInterfaces, PaymentMetering, PowerSystemStabilizerDynamics, Production, Protection, ReferenceData, SCADA, StandardInterconnections, StandardModels, StateVariables, StaticVarCompensatorDynamics, SynchronousMachineDynamics, Topology, TurbineGovernorDynamics, TurbineLoadControllerDynamics, UnderexcitationLimiterDynamics, UserDefinedModels, VSC, VoltageAdjusterDynamics, VoltageCompensatorDynamics, WindDynamics, Wires, Work, unused)
    {
        /**
         * The size of chunks to read into memory.
         */
        const CHUNK_SIZE = 4000000;

        /**
         * Convert a string into UTF-8 encoded (all high order bytes are zero) string.
         * @see {@link http://monsur.hossa.in/2012/07/20/utf-8-in-javascript.html}
         * @param {String} str - the string to encode
         * @returns {String} UTF-8 encoded string
         */
        function encode_utf8 (str)
        {
            return (unescape (encodeURIComponent (str)));
        }

        // create the mapping tables
        const theParseMap = {};
        const theExportMap = {};
        Array.prototype.map.call (arguments,
            function (x)
            {
                for (let property in x)
                    if (x.hasOwnProperty (property))
                    {
                        const c = x[property];
                        if (c.prototype && c.prototype.parse) // a CIM class
                        {
                            theParseMap["cim:" + property] = x[property];
                            theExportMap[property] = x[property];
                        }
                    }
            }
        );

        /**
         * Get the registered classes.
         * @return the map between class name and ES6 class
         */
        function classes ()
        {
            return (theExportMap);
        }

        /**
         * Get the class for a given object.
         * @param {Object} obj the JavaScript bucket-o-properies' object.
         * @return the ES6 class for the object
         */
        function class_map (obj)
        {
            return (classes ()[obj.cls]);
        }

        /**
         * Parse an XML file into constituent parts
         * @param {String} xml - the string to parse
         * @param {Object} context - the CIM reading context
         * @returns {Object} the CIM reading context
         */
        function read_xml (xml, context)
        {
            let result;

            context = context ||
            {
                start_character: 0,
                end_character: 0,
                newlines: [],
                ignored: 0,
                parsed: { }
            };

            // update the newline index
            context.newlines = base.index_string (xml, context.start_character, context.newlines);
            context.end_character = context.start_character;

            // scan for cim elements
            const regex = new RegExp ("\\s*<(cim:[^ >\\s]+)([\\s\\S]*?)<\\/\\1>\\s*", "g");
//            regex = /\s*<(cim:[^ >\\s]+)([\s\S]*?)<\/\1>\s*/g; // important to consume leading and trailing whitespace
            let startindex = 0;
            while (null != (result = regex.exec (xml)))
            {
                // check for a complete outer element,
                // i.e. check that the matched pattern length fills starting index to ending index
                // this is in lieu of all browser support for the sticky flag - y
                if (startindex + result[0].length !== regex.lastIndex)
                    break;
                startindex = regex.lastIndex;

                // update the last seen character position
                context.end_character = context.start_character + regex.lastIndex;
                // form the subcontext for parsing individual elements
                const subcontext =
                {
                    start_character: context.start_character + result.index,
                    end_character: context.end_character,
                    newlines: context.newlines,
                    parsed: context.parsed
                };
                // parse individual elements
                const element = result[1];
                const guts = result[2];
                const parser = theParseMap[element];
                if ("undefined" != typeof (parser))
                    parser.prototype.parse (subcontext, guts);
                else
                {
                    if (context.ignored < 3)
                        if ("undefined" != typeof (console))
                            console.log ("unrecognized element type '" + result[1] + "' at line " + base.line_number (subcontext));
                        else
                            console.log ("unrecognized element type '" + result[1] + "' at line " + base.line_number (subcontext));
                    context.ignored++;
                }

                result = null;
            }

            return (context);
        }

        /**
         * Parse an XML file into constituent parts.
         * @param {String} xml - the string to parse
         * @param {Number} start - the position in the string to start parsing at
         * @param {Object} context - the CIM reading context
         * @returns {Object} the CIM reading context
         */
        function read_full_xml (xml, start, context)
        {
            let subxml;
            let result;

            // check for just starting
            if (0 === start)
            {
                context = context ||
                {
                    offset: 0,
                    start_character: 0,
                    end_character: 0,
                    newlines: [],
                    ignored: 0,
                    parsed: { }
                };
                subxml = xml;

                // remove the XML declaration, i.e. <?xml version="1.0" encoding="UTF-8" standalone="no"?>
                let regex = /<\?([\s\S]*)\?>\s*/g;
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
                        const encoding = result[1];
                        if ("UTF-8" !== encoding.toUpperCase ())
                            console.log ("unsupported encoding " + encoding);
                    }
                }

                // parse RDF, i.e. <rdf:RDF xmlns:dm="http://iec.ch/2002/schema/CIM_difference_model#" xmlns:cim="http://iec.ch/TC57/2010/CIM-schema-cim15#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                regex = /<(?:.*:)?RDF([\s\S]*?)>\s*/g;
                if (null != regex.exec (subxml))
                {
                    context.offset += regex.lastIndex;
                    context.newlines = base.index_string (subxml.substring (0, regex.lastIndex), context.start_character, context.newlines);
                    context.start_character += regex.lastIndex;
                    subxml = subxml.substring (regex.lastIndex);
                }

                // parse FullModel, i.e. <md:FullModel ....  </md:FullModel>
                regex = new RegExp ("\\s*<md:FullModel ([\\s\\S]*?)<\\/md:FullModel>\\s*", "g");
                if (null != regex.exec (subxml))
                {
                    // ToDo: how to get the header attributes from here to the caller
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
            context = read_xml (subxml, context);

            return (context);
        }

        /**
         * @summary Read a blob as XML and resolve or reject.
         * @description Reads a blob as UTF8 and parses the XML.
         * @param {Blob} blob - the blob to read
         * @param {Number} start - the starting byte to read from the blob
         * @param {Object} context - the state of the parser
         * @param {Function} resolve - the function to call to resolve the promise
         * @param {Function} reject - the function to call to reject the promise
         */
        function read_xml_promise (blob, start, context, resolve, reject)
        {
            const size = blob.size;
            const tbd = Math.min (CHUNK_SIZE, size - start);
            const subblob = blob.slice (start, start + tbd, blob.type);
            const reader = new FileReader ();
            reader.onload = function (event)
            {
                const xml = event.target.result;
                if ("" === xml)
                    resolve (context);
                else
                {
                    context = read_full_xml (xml, start, context);
                    const read = context.end_character - context.start_character; // number of characters parsed
                    if (0 === read)
                        reject (Error ("parse failed at line " + base.line_number (context)));
                    else
                    {
                        const bytes = encode_utf8 (xml.substring (0, read + context.offset)).length;
                        // check for done
                        let done = false;
                        const regex = /\s*<\/(?:.*:)?RDF>\s*/g;
                        if (null != regex.exec (xml.substring (read + context.offset)))
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
                            resolve (context);
                        else
                            read_xml_promise (blob, start + bytes, context, resolve, reject); // tail recursive
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
         * @summary Read blobs as XML.
         * @description Processes a file reading the blob as UTF8.
         * @param {Blob[]} blobs - array of blobs to read
         * @return a Promise that resolves with the parsing context (elements in context.parsed)
         */
        function read_xml_blobs (blobs)
        {
            const ret = new Promise (
                (resolve, reject) =>
                {
                    const promises = blobs.map (blob => new Promise (read_xml_promise.bind (this, blob, 0, null)));
                    Promise.all (promises).then
                    (
                        function (contexts)
                        {
                            // gather all the contexts
                            let context;
                            if (1 === contexts.length)
                                context = contexts[0];
                            else
                            {
                                const parsed = {};
                                let ignored = 0;
                                contexts.forEach (
                                    function (ctx)
                                    {
                                        ignored += ctx.ignored;
                                        for (let cls in ctx.parsed)
                                            if (ctx.parsed.hasOwnProperty (cls))
                                            {
                                                if (!parsed[cls]) parsed[cls] = {};
                                                for (let element in ctx.parsed[cls])
                                                    if (ctx.parsed[cls].hasOwnProperty (element))
                                                        parsed[cls][element] = ctx.parsed[cls][element];
                                            }
                                    }
                                );
                                context = {
                                    offset: 0,
                                    start_character: 0,
                                    end_character: 0,
                                    newlines: [],
                                    ignored: ignored,
                                    parsed: parsed
                                };
                            }
                            resolve (context);
                        },
                        reject
                    );
                }
            );
            return (ret);
        }

        /**
         * @summary Write the elements selected by the filter.
         * @description Writes each element where filter(element) returns <code>true</code>.
         * @param {Object} elements - the object with elements to write stored as properties of their mRID
         * (as returned from the parse context: context.parsed.Element[obj.mRID] = obj).
         * @param {Function} filter - predicate to determine if the element should be written or not.
         * @returns {String[]} The XML text as an array of Strings.
         */
        function write_elements (elements, filter)
        {
            const ret = [];

            for (let property in elements)
                if (elements.hasOwnProperty (property))
                {
                    const obj = elements[property];
                    if (filter (obj))
                    {
                        const exporter = class_map (obj);
                        if (exporter)
                            Array.prototype.push.apply (ret, exporter.prototype.export (obj, true));
                        else
                            ret.push (JSON.stringify (obj, null, 4));
                    }
                }

            return (ret);
        }

        /**
         * Get the delta objects to convert "from" into "to".
         *
         * @param {Object} from the starting objct
         * @param {Object} to the ending object
         * @return {Object[]} an array of two objects, the first with properties to be deleted,
         * and the second with properties to be added.
         * so modified properties appear in both objects,
         * and if there are no changes the array is empty.
         */
        function getDelta (from, to)
        {
            const final = JSON.parse (JSON.stringify (to));
            delete final["EditDisposition"];
            delete final["mRID"];
            const start = JSON.parse (JSON.stringify (from));
            start.id = final.id;
            delete start["EditDisposition"];
            delete start["mRID"];

            const begin = {};
            const end = {};
            for (let property in start)
                if (start.hasOwnProperty (property))
                    if (start[property] !== final[property])
                    {
                        begin[property] = start[property];
                        if (final[property])
                            end[property] = final[property];
                    }
            for (let property in final)
                if (final.hasOwnProperty (property))
                    if (!start[property])
                        end[property] = final[property];

            // check for any changes, if not return an empty array
            if ((0 === Object.keys (begin).length) && (0 === Object.keys (end).length))
                return ([]);
            else
            {
                const cimmrid = new CIMmrid (null); // null is OK, just don't call cimmrid.nextIdFor()
                begin.cls = start.cls;
                begin.id = cimmrid.uuidv4 ();
                begin.mRID = begin.id;
                end.cls = final.cls;
                end.id = cimmrid.uuidv4 ();
                end.mRID = end.id;
                return ([begin, end]);
            }
        }

        /**
         * @summary Write the elements as a CIM RDF.
         * @description Writes the RDF header, each element and the trailer to produce an RDF.
         * @param {Object} elements - the object with elements to write stored as properties of their mRID
         * (as returned from the parse context: context.parsed.Element[obj.mRID] = obj).
         * @param {Boolean} difference_model - if <code>true</code> output a CIM Difference Model rather than a full model.
         * @param {Boolean} only_new - if <code>true</code> output a CIM Full Model with only new elements.
         * @param {String} [about = CIMSpace] - the about string for the CIM header.
         * @param {String} [description = js export] - the description string for the CIM header.
         * @param {String} [date = now] - the created string for the CIM header.
         * @returns {String} The XML text.
         */
        function write_xml (elements, difference_model, only_new, about, description, date)
        {
            const chunks = []; // array of arrays of strings

            // ToDo: change "about" argument to "name"
            about = about || "CIMSpace";
            description = description || "CIMSpace cim.js export";
            // date = date || new Date ().toISOString ();

            let header = [
`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<rdf:RDF xmlns:cim="http://iec.ch/TC57/2016/CIM-schema-cim17#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">`
                ];
            let trailer = [
`</rdf:RDF>`
                ];

            chunks.push (header);
            if (difference_model)
            {
                // write the ChangeSet
                const cimmrid = new CIMmrid (null); // null is OK, just don't call cimmrid.nextIdFor()
                const csid = cimmrid.uuidv4 ();
                const changeset = new GenericDataSet.ChangeSet (
                    {
                        cls: "ChangeSet",
                        id: csid,
                        mRID: csid,
                        description: description,
                        name: about
                    },
                    {});
                chunks.push (GenericDataSet.ChangeSet.prototype.export (changeset, true));

                // gather the element versions, filtering out the unchanged elements
                let changes = {}
                for (let property in elements)
                    if (elements.hasOwnProperty (property))
                    {
                        const obj = elements[property];
                        const disp = obj.EditDisposition;
                        switch (disp)
                        {
                            case "new":
                            case "edit":
                                if (changes[obj.id])
                                    changes[obj.id][0] = obj;
                                else
                                    changes[obj.id] = [obj];
                                break;
                            case "delete":
                                const pair = obj.id.split (":");
                                const index = Number (pair[0]);
                                if (changes[pair[1]])
                                    changes[pair[1]][index] = obj;
                                else
                                {
                                    changes[pair[1]] = [];
                                    changes[pair[1]][index] = obj;
                                }
                                break;
                            case undefined:
                                // skip
                                break;
                            default:
                                alert (`unexpected EditDisposition "${disp}"`)
                        }
                    }

                for (let mrid in changes)
                    if (changes.hasOwnProperty (mrid))
                    {
                        const array = changes[mrid];
                        if (array[0] && ("new" === array[0].EditDisposition))
                        {
                            // new, ignore all the other versions
                            const obj = array[0];
                            const id = cimmrid.uuidv4 ();
                            const newobject = new GenericDataSet.ObjectCreation (
                                {
                                    cls: "ObjectCreation",
                                    id: id,
                                    mRID: id,
                                    Changeset: csid,
                                    PropertiesObject: obj.id
                                },
                                {});
                            const exporter = class_map (obj);
                            chunks.push (GenericDataSet.ObjectCreation.prototype.export (newobject, true));
                            chunks.push (exporter.prototype.export (obj, true));
                        }
                        else if (array[1] && ("undefined" == typeof (array[0])) && ("delete" === array[1].EditDisposition))
                        {
                            // delete
                            const obj = array[1];
                            const id = cimmrid.uuidv4 ();
                            const pair = obj.id.split (":");
                            const deletedobject = new GenericDataSet.ObjectDeletion (
                                {
                                    cls: "ObjectDeletion",
                                    id: id,
                                    mRID: id,
                                    Changeset: csid,
                                    TargetObject: pair[1]
                                },
                                {});
                            chunks.push (GenericDataSet.ObjectDeletion.prototype.export (deletedobject, true));
                        }
                        else if (array[0] && ("edit" === array[0].EditDisposition))
                        {
                            const obj = array[0];
                            const delta = getDelta (array[array.length - 1], obj);
                            if (0 !== delta.length)
                            {
                                const idm = cimmrid.uuidv4 ();
                                const idr = cimmrid.uuidv4 ();

                                const reversemodifiedobject = new GenericDataSet.ObjectReverseModification (
                                    {
                                        cls: "ObjectReverseModification",
                                        id: idr,
                                        mRID: idr,
                                        Changeset: csid,
                                        ObjectModification: idm,
                                        TargetObject: obj.id,
                                        PropertiesObject: delta[0].id
                                    },
                                    {});
                                const modifiedobject = new GenericDataSet.ObjectModification (
                                    {
                                        cls: "ObjectModification",
                                        id: idm,
                                        mRID: idm,
                                        Changeset: csid,
                                        ObjectReverseModification: idr,
                                        TargetObject: obj.id,
                                        PropertiesObject: delta[1].id
                                    },
                                    {});
                                const exporter = class_map (obj);
                                chunks.push (GenericDataSet.ObjectReverseModification.prototype.export (reversemodifiedobject, true));
                                chunks.push (exporter.prototype.export (delta[0], true));
                                chunks.push (GenericDataSet.ObjectModification.prototype.export (modifiedobject, true));
                                chunks.push (exporter.prototype.export (delta[1], true));
                            }
                        }
                    }
            }
            else if (only_new)
                chunks.push (write_elements (elements, function (obj) { const disp = obj.EditDisposition; return ("undefined" != typeof (disp) && "new" === disp); }));
            else
                chunks.push (write_elements (elements, function (obj) { const disp = obj.EditDisposition; return ("undefined" == typeof (disp) || "delete" !== disp); }));
            chunks.push (trailer);

            return (Array.prototype.concat.apply ([], chunks).join ("\n"));
        }

        return (
            {
                classes: classes,
                class_map: class_map,
                read_full_xml: read_full_xml,
                read_xml_promise: read_xml_promise,
                read_xml_blobs: read_xml_blobs,
                write_xml: write_xml
            }
        );
    }
);
