/**
 * @fileOverview Read CIM files.
 * @name cim
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/assets", "model/common", "model/core", "model/customers", "model/meas", "model/metering", "model/production", "model/protection", "model/statevariables", "model/wires", "model/work"],
    /**
     * @summary CIM file reading functions.
     * @description Read an XML file with a restricted profile
     * (based on the PowerOn Advantage profile).
     * @name cim
     * @exports cim
     * @version 1.0
     */
    function (base, assets, common, core, customers, meas, metering, production, protection, statevariables, wires, work)
    {
        /**
         * Unique numbering for elements without an rdf:ID.
         */
        var UNIQUE_NUMBER = 0;

        /**
         * The size of chunks to read into memory.
         */
        var CHUNK_SIZE = 4000000;

        /**
         * Convert a string into UTF-8 encoded (all high order bytes are zero) string.
         * @see {http://monsur.hossa.in/2012/07/20/utf-8-in-javascript.html}
         * @param {String} str - the string to encode
         * @returns {String} UTF-8 encoded string
         * @memberOf module:cim
         */
        function encode_utf8 (str)
        {
            return (unescape (encodeURIComponent (str)));
        };

        /**
         * Parse an XML file into constituent parts
         * @param {String} xml - the string to parse
         * @param {Object} context - the file reading context
         * @param {Object} parsed - optional parsed elements to add to
         * @returns {Object} the parsed object
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
                switch (element)
                {
                    case "cim:ActivityRecord":
                        common.parse_ActivityRecord (subcontext, guts);
                        break;
                    case "cim:Agreement":
                        common.parse_Agreement (subcontext, guts);
                        break;
                    case "cim:Appointment":
                        common.parse_Appointment (subcontext, guts);
                        break;
                    case "cim:ConfigurationEvent":
                        common.parse_ConfigurationEvent (subcontext, guts);
                        break;
                    case "cim:CoordinateSystem":
                        common.parse_CoordinateSystem (subcontext, guts);
                        break;
                    case "cim:Crew":
                        common.parse_Crew (subcontext, guts);
                        break;
                    case "cim:CrewMember":
                        common.parse_CrewMember (subcontext, guts);
                        break;
                    case "cim:CrewType":
                        common.parse_CrewType (subcontext, guts);
                        break;
                    case "cim:Document":
                        common.parse_Document (subcontext, guts);
                        break;
                    case "cim:ElectronicAddress":
                        common.parse_ElectronicAddress (subcontext, guts);
                        break;
                    case "cim:Hazard":
                        common.parse_Hazard (subcontext, guts);
                        break;
                    case "cim:Location":
                        common.parse_Location (subcontext, guts);
                        break;
                    case "cim:OperationPersonRole":
                        common.parse_OperationPersonRole (subcontext, guts);
                        break;
                    case "cim:Operator":
                        common.parse_Operator (subcontext, guts);
                        break;
                    case "cim:Organisation":
                        common.parse_Organisation (subcontext, guts);
                        break;
                    case "cim:OrganisationRole":
                        common.parse_OrganisationRole (subcontext, guts);
                        break;
                    case "cim:Ownership":
                        common.parse_Ownership (subcontext, guts);
                        break;
                    case "cim:Person":
                        common.parse_Person (subcontext, guts);
                        break;
                    case "cim:PersonRole":
                        common.parse_PersonRole (subcontext, guts);
                        break;
                    case "cim:PositionPoint":
                        common.parse_PositionPoint (subcontext, guts);
                        break;
                    case "cim:PostalAddress":
                        common.parse_PostalAddress (subcontext, guts);
                        break;
                    case "cim:Priority":
                        common.parse_Priority (subcontext, guts);
                        break;
                    case "cim:ScheduledEventData":
                        common.parse_ScheduledEventData (subcontext, guts);
                        break;
                    case "cim:Status":
                        common.parse_Status (subcontext, guts);
                        break;
                    case "cim:StreetAddress":
                        common.parse_StreetAddress (subcontext, guts);
                        break;
                    case "cim:StreetDetail":
                        common.parse_StreetDetail (subcontext, guts);
                        break;
                    case "cim:TelephoneNumber":
                        common.parse_TelephoneNumber (subcontext, guts);
                        break;
                    case "cim:TimePoint":
                        common.parse_TimePoint (subcontext, guts);
                        break;
                    case "cim:TimeSchedule":
                        common.parse_TimeSchedule (subcontext, guts);
                        break;
                    case "cim:TownDetail":
                        common.parse_TownDetail (subcontext, guts);
                        break;
                    case "cim:UserAttribute":
                        common.parse_UserAttribute (subcontext, guts);
                        break;
                    case "cim:ACDCTerminal":
                        core.parse_ACDCTerminal (subcontext, guts);
                        break;
                    case "cim:BaseVoltage":
                        core.parse_BaseVoltage (subcontext, guts);
                        break;
                    case "cim:Bay":
                        core.parse_Bay (subcontext, guts);
                        break;
                    case "cim:ConductingEquipment":
                        core.parse_ConductingEquipment (subcontext, guts);
                        break;
                    case "cim:ConnectivityNode":
                        core.parse_ConnectivityNode (subcontext, guts);
                        break;
                    case "cim:ConnectivityNodeContainer":
                        core.parse_ConnectivityNodeContainer (subcontext, guts);
                        break;
                    case "cim:Equipment":
                        core.parse_Equipment (subcontext, guts);
                        break;
                    case "cim:EquipmentContainer":
                        core.parse_EquipmentContainer (subcontext, guts);
                        break;
                    case "cim:IdentifiedObject":
                        core.parse_IdentifiedObject (subcontext, guts);
                        break;
                    case "cim:Name":
                        core.parse_Name (subcontext, guts);
                        break;
                    case "cim:NameType":
                        core.parse_NameType (subcontext, guts);
                        break;
                    case "cim:NameTypeAuthority":
                        core.parse_NameTypeAuthority (subcontext, guts);
                        break;
                    case "cim:PSRType":
                        core.parse_PSRType (subcontext, guts);
                        break;
                    case "cim:PowerSystemResource":
                        core.parse_PowerSystemResource (subcontext, guts);
                        break;
                    case "cim:Substation":
                        core.parse_Substation (subcontext, guts);
                        break;
                    case "cim:Terminal":
                        core.parse_Terminal (subcontext, guts);
                        break;
                    case "cim:VoltageLevel":
                        core.parse_VoltageLevel (subcontext, guts);
                        break;
                    case "cim:GeneratingUnit":
                        production.parse_GeneratingUnit (subcontext, guts);
                        break;
                    case "cim:SolarGeneratingUnit":
                        production.parse_SolarGeneratingUnit (subcontext, guts);
                        break;
                    case "cim:CurrentRelay":
                        protection.parse_CurrentRelay (subcontext, guts);
                        break;
                    case "cim:ProtectionEquipment":
                        protection.parse_ProtectionEquipment (subcontext, guts);
                        break;
                    case "cim:StateVariable":
                        statevariables.parse_StateVariable (subcontext, guts);
                        break;
                    case "cim:SvStatus":
                        statevariables.parse_SvStatus (subcontext, guts);
                        break;
                    case "cim:Customer":
                        customers.parse_Customer (subcontext, guts);
                        break;
                    case "cim:CustomerAccount":
                        customers.parse_CustomerAccount (subcontext, guts);
                        break;
                    case "cim:CustomerAgreement":
                        customers.parse_CustomerAgreement (subcontext, guts);
                        break;
                    case "cim:CustomerNotification":
                        customers.parse_CustomerNotification (subcontext, guts);
                        break;
                    case "cim:IncidentHazard":
                        customers.parse_IncidentHazard (subcontext, guts);
                        break;
                    case "cim:PricingStructure":
                        customers.parse_PricingStructure (subcontext, guts);
                        break;
                    case "cim:ServiceCategory":
                        customers.parse_ServiceCategory (subcontext, guts);
                        break;
                    case "cim:ServiceLocation":
                        customers.parse_ServiceLocation (subcontext, guts);
                        break;
                    case "cim:Tariff":
                        customers.parse_Tariff (subcontext, guts);
                        break;
                    case "cim:TroubleTicket":
                        customers.parse_TroubleTicket (subcontext, guts);
                        break;
                    case "cim:ACLineSegment":
                        wires.parse_ACLineSegment (subcontext, guts);
                        break;
                    case "cim:ACLineSegmentPhase":
                        wires.parse_ACLineSegmentPhase (subcontext, guts);
                        break;
                    case "cim:BusbarSection":
                        wires.parse_BusbarSection (subcontext, guts);
                        break;
                    case "cim:Conductor":
                        wires.parse_Conductor (subcontext, guts);
                        break;
                    case "cim:Connector":
                        wires.parse_Connector (subcontext, guts);
                        break;
                    case "cim:Disconnector":
                        wires.parse_Disconnector (subcontext, guts);
                        break;
                    case "cim:EnergyConsumer":
                        wires.parse_EnergyConsumer (subcontext, guts);
                        break;
                    case "cim:Fuse":
                        wires.parse_Fuse (subcontext, guts);
                        break;
                    case "cim:GroundDisconnector":
                        wires.parse_GroundDisconnector (subcontext, guts);
                        break;
                    case "cim:Jumper":
                        wires.parse_Jumper (subcontext, guts);
                        break;
                    case "cim:Junction":
                        wires.parse_Junction (subcontext, guts);
                        break;
                    case "cim:Line":
                        wires.parse_Line (subcontext, guts);
                        break;
                    case "cim:LoadBreakSwitch":
                        wires.parse_LoadBreakSwitch (subcontext, guts);
                        break;
                    case "cim:PowerTransformer":
                        wires.parse_PowerTransformer (subcontext, guts);
                        break;
                    case "cim:PowerTransformerEnd":
                        wires.parse_PowerTransformerEnd (subcontext, guts);
                        break;
                    case "cim:ProtectedSwitch":
                        wires.parse_ProtectedSwitch (subcontext, guts);
                        break;
                    case "cim:Switch":
                        wires.parse_Switch (subcontext, guts);
                        break;
                    case "cim:TransformerEnd":
                        wires.parse_TransformerEnd (subcontext, guts);
                        break;
                    case "cim:TransformerTank":
                        wires.parse_TransformerTank (subcontext, guts);
                        break;
                    case "cim:TransformerTankEnd":
                        wires.parse_TransformerTankEnd (subcontext, guts);
                        break;
                    case "cim:Asset":
                        assets.parse_Asset (subcontext, guts);
                        break;
                    case "cim:AssetContainer":
                        assets.parse_AssetContainer (subcontext, guts);
                        break;
                    case "cim:AssetFunction":
                        assets.parse_AssetFunction (subcontext, guts);
                        break;
                    case "cim:AssetInfo":
                        assets.parse_AssetInfo (subcontext, guts);
                        break;
                    case "cim:MeasurementValue":
                        meas.parse_MeasurementValue (subcontext, guts);
                        break;
                    case "cim:BaseReading":
                        metering.parse_BaseReading (subcontext, guts);
                        break;
                    case "cim:Channel":
                        metering.parse_Channel (subcontext, guts);
                        break;
                    case "cim:ComFunction":
                        metering.parse_ComFunction (subcontext, guts);
                        break;
                    case "cim:ComModule":
                        metering.parse_ComModule (subcontext, guts);
                        break;
                    case "cim:ControlledAppliance":
                        metering.parse_ControlledAppliance (subcontext, guts);
                        break;
                    case "cim:DemandResponseProgram":
                        metering.parse_DemandResponseProgram (subcontext, guts);
                        break;
                    case "cim:EndDevice":
                        metering.parse_EndDevice (subcontext, guts);
                        break;
                    case "cim:EndDeviceAction":
                        metering.parse_EndDeviceAction (subcontext, guts);
                        break;
                    case "cim:EndDeviceCapability":
                        metering.parse_EndDeviceCapability (subcontext, guts);
                        break;
                    case "cim:EndDeviceControl":
                        metering.parse_EndDeviceControl (subcontext, guts);
                        break;
                    case "cim:EndDeviceControlType":
                        metering.parse_EndDeviceControlType (subcontext, guts);
                        break;
                    case "cim:EndDeviceEvent":
                        metering.parse_EndDeviceEvent (subcontext, guts);
                        break;
                    case "cim:EndDeviceEventDetail":
                        metering.parse_EndDeviceEventDetail (subcontext, guts);
                        break;
                    case "cim:EndDeviceEventType":
                        metering.parse_EndDeviceEventType (subcontext, guts);
                        break;
                    case "cim:EndDeviceFunction":
                        metering.parse_EndDeviceFunction (subcontext, guts);
                        break;
                    case "cim:EndDeviceGroup":
                        metering.parse_EndDeviceGroup (subcontext, guts);
                        break;
                    case "cim:EndDeviceInfo":
                        metering.parse_EndDeviceInfo (subcontext, guts);
                        break;
                    case "cim:EndDeviceTiming":
                        metering.parse_EndDeviceTiming (subcontext, guts);
                        break;
                    case "cim:IntervalBlock":
                        metering.parse_IntervalBlock (subcontext, guts);
                        break;
                    case "cim:IntervalReading":
                        metering.parse_IntervalReading (subcontext, guts);
                        break;
                    case "cim:Meter":
                        metering.parse_Meter (subcontext, guts);
                        break;
                    case "cim:MeterMultiplier":
                        metering.parse_MeterMultiplier (subcontext, guts);
                        break;
                    case "cim:MeterReading":
                        metering.parse_MeterReading (subcontext, guts);
                        break;
                    case "cim:MeterServiceWork":
                        metering.parse_MeterServiceWork (subcontext, guts);
                        break;
                    case "cim:MetrologyRequirement":
                        metering.parse_MetrologyRequirement (subcontext, guts);
                        break;
                    case "cim:PanDemandResponse":
                        metering.parse_PanDemandResponse (subcontext, guts);
                        break;
                    case "cim:PanDisplay":
                        metering.parse_PanDisplay (subcontext, guts);
                        break;
                    case "cim:PanPricing":
                        metering.parse_PanPricing (subcontext, guts);
                        break;
                    case "cim:PanPricingDetail":
                        metering.parse_PanPricingDetail (subcontext, guts);
                        break;
                    case "cim:PendingCalculation":
                        metering.parse_PendingCalculation (subcontext, guts);
                        break;
                    case "cim:RationalNumber":
                        metering.parse_RationalNumber (subcontext, guts);
                        break;
                    case "cim:Reading":
                        metering.parse_Reading (subcontext, guts);
                        break;
                    case "cim:ReadingInterharmonic":
                        metering.parse_ReadingInterharmonic (subcontext, guts);
                        break;
                    case "cim:ReadingQuality":
                        metering.parse_ReadingQuality (subcontext, guts);
                        break;
                    case "cim:ReadingQualityType":
                        metering.parse_ReadingQualityType (subcontext, guts);
                        break;
                    case "cim:ReadingType":
                        metering.parse_ReadingType (subcontext, guts);
                        break;
                    case "cim:Register":
                        metering.parse_Register (subcontext, guts);
                        break;
                    case "cim:ServiceMultiplier":
                        metering.parse_ServiceMultiplier (subcontext, guts);
                        break;
                    case "cim:SimpleEndDeviceFunction":
                        metering.parse_SimpleEndDeviceFunction (subcontext, guts);
                        break;
                    case "cim:UsagePoint":
                        metering.parse_UsagePoint (subcontext, guts);
                        break;
                    case "cim:UsagePointGroup":
                        metering.parse_UsagePointGroup (subcontext, guts);
                        break;
                    case "cim:UsagePointLocation":
                        metering.parse_UsagePointLocation (subcontext, guts);
                        break;
                    case "cim:WorkLocation":
                        work.parse_WorkLocation (subcontext, guts);
                        break;

                    default:
                        if (context.parsed.ignored < 3)
                            console.log ("unrecognized element type '" + result[1] + "' at line " + base.line_number (subcontext));
                        context.parsed.ignored++;
                        break;
                }
                result = null;
            }

            return ({parsed: context.parsed, context: context});
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
                var subxml;
                var offset;
                var regex;
                var encoding;
                var result;
                var read;
                var bytes;
                var done;

                xml = event.target.result;
                subxml = xml;
                offset = 0;
                //console.log ("parsing at line " + (context ? base.line_number (context) : "0") + " beginning with:\n" + xml.substring (0, xml.indexOf ("\n")));

                // check for just starting
                if (0 == start)
                {
                    context = context ||
                    {
                        start_character: 0,
                        end_character: 0,
                        newlines: [],
                        parsed: { ignored: 0 }
                    };

                    // remove the XML declaration, i.e. <?xml version="1.0" encoding="UTF-8" standalone="no"?>
                    regex = /<\?([\s\S]*)\?>\s*/g;
                    if (null != (result = regex.exec (subxml)))
                    {
                        context.newlines = base.index_string (subxml.substring (0, regex.lastIndex), context.start_character, context.newlines);
                        context.start_character += regex.lastIndex;
                        subxml = subxml.substring (regex.lastIndex);
                        offset += regex.lastIndex;
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
                        context.newlines = base.index_string (subxml.substring (0, regex.lastIndex), context.start_character, context.newlines);
                        context.start_character += regex.lastIndex;
                        subxml = subxml.substring (regex.lastIndex);
                        offset += regex.lastIndex;
                    }

                    // parse FullModel, i.e. <md:FullModel ....  </md:FullModel>
                    regex = new RegExp ("\\s*<md:FullModel ([\\s\\S]*?)<\\/md:FullModel>\\s*", "g");
                    if (null != (result = regex.exec (subxml)))
                    {
                        context.newlines = base.index_string (subxml.substring (0, regex.lastIndex), context.start_character, context.newlines);
                        context.start_character += regex.lastIndex;
                        subxml = subxml.substring (regex.lastIndex);
                        offset += regex.lastIndex;
                    }
                }

                context.end_character = context.start_character;
                result = read_xml (subxml, context, parsed);
                read = result.context.end_character - result.context.start_character; // number of characters parsed
                if (0 == read)
                    reject (Error ("parse failed at line " + base.line_number (context)));
                else
                {
                    bytes = encode_utf8 (xml.substring (0, read + offset)).length;

                    context = result.context;
                    parsed = result.parsed;

                    // check for done
                    done = false;
                    regex = /\s*<\/rdf:RDF>\s*/g;
                    if (null != (result = regex.exec (subxml.substring (read))))
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
                    console.log (err);
                }
            );
        }

        return (
            {
                read_xml: read_xml,
                read_xml_blob: read_xml_blob
            }
        );
    }
);