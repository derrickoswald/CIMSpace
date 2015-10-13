/**
 * Main javascript file for CIMSpace application
 */
"use strict"
requirejs
(
    [],
    /**
     * @summary Main entry point for the application.
     * @description Performs application initialization as the first step in the RequireJS load sequence.
     * @see http://requirejs.org/docs/api.html#data-main
     * @name cimspace
     * @exports cimspace
     * @version 1.0
     */
    function ()
    {
        /**
         * The map object.
         * @see https://www.mapbox.com
         */
        var TheMap;

        /**
         * The user specific token to access mapbox tiles.
         */
        var TheToken = "pk.eyJ1IjoiZGVycmlja29zd2FsZCIsImEiOiJjaWV6b2szd3MwMHFidDRtNDZoejMyc3hsIn0.wnEkePEuhYiNcXDLACSxVw";

        /**
         * Convert a string into a boolean value.
         * @param {String} str - the string to convert
         * @returns {Boolean} the boolean value
         * @memberOf module:cimspace
         */
        function to_boolean (str)
        {
            return (str.toLowerCase () === "true");
        }

        /**
         * Convert a string into UTF-8 encoded (all high order bytes are zero) string.
         * @see {http://monsur.hossa.in/2012/07/20/utf-8-in-javascript.html}
         * @param {String} str - the string to encode
         * @returns {String} UTF-8 encoded string
         * @memberOf module:cimspace
         */
        function encode_utf8 (str)
        {
            return (unescape (encodeURIComponent (str)));
        };

        /**
         * Create an index of newline characters in a string.
         * @param {String} str - the string to index
         * @param {Number} offset - optional offset to add to the index values
         * @param {Number[]} newlines - optional existing index to append to
         * @returns {Number[]} the index of newlines, e.g. [15, 32, 64] for "Now is the time\nfor all good men\nto come to the aid of the party\n"
         * @memberOf module:cimspace
         */
        function index_string (str, offset, newlines)
        {
            var lines;
            var res;

            offset = offset || 0;
            newlines = newlines || [];
            lines = /\n/g;
            while (null != (res = lines.exec (str)))
                newlines.push (res.index + offset);

            return (newlines);
        }

        /**
         * Get a line number from the newline index of a context.
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @returns {Number} the line number for the starting character position
         * @memberOf module:cimspace
         */
        function line_number (context)
        {
            var min = 0;
            var max = context.newlines.length - 1;
            var offset = context.start_character; // the character position to find line number of
            var index;
            var item;

            index = min;
            while (min <= max)
            {
                index = (min + max) / 2 | 0;
                item = context.newlines[index];

                if (item < offset)
                    min = index + 1;
                else if (item > offset)
                    max = index - 1;
                else
                    return (index);
            }

            return (index);
        }

        /**
         * Parse an element value - the first capture group of a regular expression.
         * @param {Object} regex - the regular expression
         * @param {String} str - the string to look in
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @param {Boolean} optional - if <em>true</em> return <em>null</em> if not found rather than throw an exception
         * @returns {String} the string found as the first capture group
         * @memberOf module:cimspace
         */
        function parse_element (regex, str, context, optional)
        {
            var result;
            var ret;

            ret = null;

            if (null != (result = regex.exec (str)))
                ret = result[1];
            else
                if (!optional)
                    throw ("regular expression " + regex.source + " not found while parsing at line " + line_number (context));
//                else
//                    console.log (regex.source + " not found at line " + line_number (context));

            return (ret);
        }

        /**
         * Parse an attribute - the second capture group of a regular expression.
         * @param {Object} regex - the regular expression
         * @param {String} str - the string to look in
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @param {Boolean} optional - if <em>true</em> return <em>null</em> if not found rather than throw an exception
         * @returns {String} the string found as the second capture group (the first is the quote character used)
         * @memberOf module:cimspace
         */
        function parse_attribute (regex, str, context, optional)
        {
            var result;
            var ret;

            ret = null;

            if (null != (result = regex.exec (str)))
            {
                ret = result[2];
                if (ret.charAt (0) == '#') // remove '#'
                    ret = ret.substring (1);
            }
            else
                if (!optional)
                    throw ("regular expression " + regex.source + " not found while parsing at line " + line_number (context));
//                else
//                    console.log (regex.source + " not found at line " + line_number (context));

            return (ret);
        }

        /**
         * Parse a PSRType element and add it to the PowerSystemResourceTypes.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResourceTypes - the object with PSR types
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the PSRType element
         * @memberOf module:cimspace
         */
        function parse_psrtype (parsed, context, sub)
        {
            var typex;
            var id;
            var value;

            typex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (typex, sub, context);
            sub = sub.substring (typex.lastIndex);
            value = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            parsed.PowerSystemResourceTypes[id] = value;
        }

        /**
         * Parse a ConnectivityNode element and add it to the ConnectivityNodes.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with resources
         * @param {Object} parsed.ConnectivityNodes - the object with connectivity
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the ConnectivityNode element
         * @memberOf module:cimspace
         */
        function parse_connectivity (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var container;
            var node;

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            container = parse_attribute (/<cim:ConnectivityNode.ConnectivityNodeContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

            if (null == parsed.PowerSystemResources[container])
                parsed.PowerSystemResources[container] = { contents: [] };
            node = parsed.ConnectivityNodes[id];
            if (null == node)
                parsed.ConnectivityNodes[id] = node = {};
            node.name = name;
            node.container = container;
            parsed.PowerSystemResources[container].contents.push (id);
        }

        /**
         * Parse a Line element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_line (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var resource;

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);

            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = {name: name, contents: []};
            else
                resource.name = name;
        }

        /**
         * Parse a Substation element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_substation (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var resource;

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);

            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = {name: name, contents: []};
            else
                resource.name = name;
        }

        /**
         * Parse a Voltage element and add it to the Voltages.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.Voltages - the object with voltages
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_voltage (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var resource;
            var voltage;

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            voltage = parse_element (/<cim:BaseVoltage.nominalVoltage>([\s\S]*?)<\/cim:BaseVoltage.nominalVoltage>/g, sub, context);

            resource = parsed.Voltages[id];
            if (null == resource)
                parsed.Voltages[id] = resource = {};
            resource.name = name;
            resource.voltage = voltage;
        }


       /**
         * Parse a Asset element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_asset (parsed, context, sub)
        {
            var idex;
            var id;
            var type;
            var name;
            var asset;
            var info;
            var resource;
//        <cim:Asset rdf:ID="_busbar_1772383_asset">
//                <cim:Asset.type>Busbar</cim:Asset.type>
//                <cim:IdentifiedObject.name>Busbar_SAM143</cim:IdentifiedObject.name>
//                <cim:Asset.PowerSystemResources rdf:resource="#_busbar_1772383"/>
//                <cim:Asset.AssetInfo rdf:resource="#_busbar_spec_566593648"/>
//        </cim:Asset>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            type = parse_element (/<cim:Asset.type>([\s\S]*?)<\/cim:Asset.type>/g, sub, context);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            asset = parse_attribute (/<cim:Asset.PowerSystemResources\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            info = parse_attribute (/<cim:Asset.AssetInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

            if (null == parsed.PowerSystemResources[info])
                parsed.PowerSystemResources[info] = {};
            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.type = type;
            resource.name = name;
            resource.asset = asset;
            resource.info = info;
        }

       /**
         * Parse a EnergyConsumer element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_consumer (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var type;
            var voltage;
            var container;
            var phase;
            var resource;

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            type = parse_attribute (/<cim:PowerSystemResource.PSRType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            voltage = parse_attribute (/<cim:ConductingEquipment.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            container = parse_attribute (/<cim:Equipment.EquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            phase = parse_attribute (/<cim:PhaseConnection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

            if (null == parsed.PowerSystemResources[container])
                parsed.PowerSystemResources[container] = { contents: [] };
            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
            resource.type = type;
            resource.voltage = voltage;
            resource.container = container;
            resource.phase = phase;
            parsed.PowerSystemResources[container].contents.push (resource);
        }

       /**
         * Parse a Terminal element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_terminal (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var sequence;
            var phases;
            var node;
            var equipment;
            var resource;

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            sequence = Number (parse_element (/<cim:Terminal.sequenceNumber>([\s\S]*?)<\/cim:Terminal.sequenceNumber>/g, sub, context));
            phases = parse_attribute (/<cim:Terminal.phases\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            node = parse_attribute (/<cim:Terminal.ConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            equipment = parse_attribute (/<cim:Terminal.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

            if (null != node)
                if (null == parsed.ConnectivityNodes[node])
                    parsed.ConnectivityNodes[node] = { }; // no name or container
            if (null == parsed.PowerSystemResources[equipment])
                parsed.PowerSystemResources[equipment] = { };
            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
            resource.sequence = sequence;
            resource.phases = phases;
            resource.equipment = equipment;
            if (null != node)
                resource.node = node;
            // parsed.PowerSystemResources[container].contents.push (resource);
        }


        /**
         * Parse a BusbarInfo element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_busbar_info (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var resource;
//        <cim:BusbarInfo rdf:ID="_busbar_spec_566593648">
//                <cim:IdentifiedObject.name>unbekannt EWS</cim:IdentifiedObject.name>
//        </cim:BusbarInfo>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);

            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
        }

        /**
         * Parse a BusBarSection element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_busbar (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var type;
            var voltage;
            var container;
            var resource;
//    <cim:BusbarSection rdf:ID="_busbar_1772383">
//        <cim:IdentifiedObject.name>SAM143</cim:IdentifiedObject.name>
//        <cim:PowerSystemResource.PSRType rdf:resource="#PSRType_Substation"/>
//        <cim:ConductingEquipment.BaseVoltage rdf:resource="#BaseVoltage_0.400000000000"/>
//        <cim:Equipment.EquipmentContainer rdf:resource="_subnetwork_858945"/>
//    </cim:BusbarSection>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            type = parse_attribute (/<cim:PowerSystemResource.PSRType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            voltage = parse_attribute (/<cim:ConductingEquipment.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            container = parse_attribute (/<cim:Equipment.EquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);

            if (null == parsed.PowerSystemResources[container])
                parsed.PowerSystemResources[container] = { contents: [] };
            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
            resource.type = type;
            resource.voltage = voltage;
            resource.container = container;
            parsed.PowerSystemResources[container].contents.push (resource);
        }

       /**
         * Parse a CableInfo element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_cable_info (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var resource;
//        <cim:CableInfo rdf:ID="_cable_spec_566593874">
//                <cim:IdentifiedObject.name>TT 4x1x70</cim:IdentifiedObject.name>
//        </cim:CableInfo>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);

            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
        }

        /**
         * Parse a ACLineSegment element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_aclinesegment (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var length;
            var type;
            var voltage;
            var container;
            var resource;
//        <cim:ACLineSegment rdf:ID="_internal_line_2094357">
//                <cim:IdentifiedObject.name>KLE8207</cim:IdentifiedObject.name>
//                <cim:Conductor.length>19.5</cim:Conductor.length>
//                <cim:PowerSystemResource.PSRType rdf:resource="#PSRType_Unknown"/>
//                <cim:ConductingEquipment.BaseVoltage rdf:resource="#BaseVoltage_0.400000000000"/>
//                <cim:Equipment.EquipmentContainer rdf:resource="_subnetwork_859028"/>
//        </cim:ACLineSegment>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            length = Number (parse_element (/<cim:Conductor.length>([\s\S]*?)<\/cim:Conductor.length>/g, sub, context));
            type = parse_attribute (/<cim:PowerSystemResource.PSRType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            voltage = parse_attribute (/<cim:ConductingEquipment.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            container = parse_attribute (/<cim:Equipment.EquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

            if (null == parsed.PowerSystemResources[container])
                parsed.PowerSystemResources[container] = { contents: [] };
            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
            resource.length = length;
            resource.type = type;
            resource.voltage = voltage;
            resource.container = container;
            parsed.PowerSystemResources[container].contents.push (resource);
        }

        /**
         * Parse a ACLineSegmentPhase element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_aclinesegmentphase (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var phase;
            var segment;
            var resource;
//        <cim:ACLineSegmentPhase rdf:ID="_internal_line_2094357_phase_A">
//                <cim:IdentifiedObject.name>KLE8207_phase_A</cim:IdentifiedObject.name>
//                <cim:ACLineSegmentPhase.phase rdf:resource="http://iec.ch/TC57/2010/CIM-schema-cim15#SinglePhaseKind.A"/>
//                <cim:ACLineSegmentPhase.ACLineSegment rdf:resource="_internal_line_2094357"/>
//        </cim:ACLineSegmentPhase>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            phase = parse_attribute (/<cim:ACLineSegmentPhase.phase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            segment = parse_attribute (/<cim:ACLineSegmentPhase.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

            if (null == parsed.PowerSystemResources[segment])
                parsed.PowerSystemResources[segment] = { };
            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
            resource.phase = phase;
            resource.segment = segment;
        }

       /**
         * Parse a SwitchInfo element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_switch_info (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var resource;
//        <cim:SwitchInfo rdf:ID="_switch_spec_566593661">
//                <cim:IdentifiedObject.name>G4</cim:IdentifiedObject.name>
//        </cim:SwitchInfo>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);

            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
        }

        /**
         * Parse a LoadBreakSwitch element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_switch (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var open;
            var type;
            var container;
            var resource;
//        <cim:LoadBreakSwitch rdf:ID="_switch_1977502">
//                <cim:IdentifiedObject.name>TEI568</cim:IdentifiedObject.name>
//                <cim:Switch.normalOpen>false</cim:Switch.normalOpen>
//                <cim:PowerSystemResource.PSRType rdf:resource="#PSRType_Substation"/>
//                <cim:Equipment.EquipmentContainer rdf:resource="_substation_251865"/>
//        </cim:LoadBreakSwitch>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            open = to_boolean (parse_element (/<cim:Switch.normalOpen>([\s\S]*?)<\/cim:Switch.normalOpen>/g, sub, context));
            type = parse_attribute (/<cim:PowerSystemResource.PSRType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            container = parse_attribute (/<cim:Equipment.EquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

            if (null == parsed.PowerSystemResources[container])
                parsed.PowerSystemResources[container] = { contents: [] };
            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
            resource.normallyOpen = open;
            resource.type = type;
            resource.container = container;
            parsed.PowerSystemResources[container].contents.push (resource);
        }

        /**
         * Parse a PowerTransformerInfo element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_transformer_info (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var tank_info;
            var resource;
//        <cim:PowerTransformerInfo rdf:ID="_power_transformer_2083545">
//                <cim:IdentifiedObject.name>Rauscher + Stöckli 100 kVA</cim:IdentifiedObject.name>
//                <cim:PowerTransformerInfo.TransformerTankInfo rdf:resource="#_power_xfrmr_spec_2083545"/>
//        </cim:PowerTransformerInfo>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            tank_info = parse_attribute (/<cim:PowerTransformerInfo.TransformerTankInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
            resource.tank_info = tank_info;
        }

        /**
         * Parse a TransformerTankInfo element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_transformer_tank_info (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var transformer_info;
            var resource;
//        <cim:TransformerTankInfo rdf:ID="_power_xfrmr_spec_2083545">
//                <cim:IdentifiedObject.name>Rauscher + Stöckli 100 kVA tank</cim:IdentifiedObject.name>
//                <cim:TransformerTankInfo.PowerTransformerInfo rdf:resource="#_power_transformer_2083545"/>
//        </cim:TransformerTankInfo>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            transformer_info = parse_attribute (/<cim:TransformerTankInfo.PowerTransformerInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
            resource.transformer_info = transformer_info;
        }

        /**
         * Parse a TransformerEndInfo element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_transformer_end_info (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var end;
            var resource;
//        <cim:TransformerEndInfo rdf:ID="_power_transformer_2083545_end_info_1">
//                <cim:IdentifiedObject.name>Rauscher + Stöckli 100 kVA_tei_1</cim:IdentifiedObject.name>
//                <cim:TransformerEndInfo.endNumber>1</cim:TransformerEndInfo.endNumber>
//        </cim:TransformerEndInfo>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            end = Number (parse_element (/<cim:TransformerEndInfo.endNumber>([\s\S]*?)<\/cim:TransformerEndInfo.endNumber>/g, sub, context));

            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
            resource.end = end;
        }
        /**
         * Parse a PowerTransformer element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_transformer (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var type;
            var container;
            var resource;
//        <cim:PowerTransformer rdf:ID="_transformer_2083545">
//                <cim:IdentifiedObject.name>TRA79</cim:IdentifiedObject.name>
//                <cim:PowerSystemResource.PSRType rdf:resource="#PSRType_Unknown"/>
//                <cim:Equipment.EquipmentContainer rdf:resource="#_substation_244441"/>
//        </cim:PowerTransformer>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            type = parse_attribute (/<cim:PowerSystemResource.PSRType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            container = parse_attribute (/<cim:Equipment.EquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

            if (null == parsed.PowerSystemResources[container])
                parsed.PowerSystemResources[container] = { contents: []};
            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
            resource.type = type;
            resource.container = container;
            resource.tanks = [];
            parsed.PowerSystemResources[container].contents.push (resource);
        }

        /**
         * Parse a TransformerTank element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_transformer_tank (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var transformer;
            var resource;
//       <cim:TransformerTank rdf:ID="_transformer_2083545_tank">
//                <cim:IdentifiedObject.name>TRA79_tank</cim:IdentifiedObject.name>
//                <cim:TransformerTank.PowerTransformer rdf:resource="#_transformer_2083545"/>
//        </cim:TransformerTank>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            transformer = parse_attribute (/<cim:TransformerTank.PowerTransformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

            if (null == parsed.PowerSystemResources[transformer])
                parsed.PowerSystemResources[transformer] = { tanks: []};
            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.name = name;
            resource.transformer = transformer;
            resource.ends = [];
            parsed.PowerSystemResources[transformer].tanks.push (resource);
        }

        /**
         * Parse a TransformerTankEnd element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cimspace
         */
        function parse_transformer_tank_end (parsed, context, sub)
        {
            var idex;
            var id;
            var end;
            var name;
            var phases;
            var tank;
            var terminal;
            var voltage;
            var resource;
//        <cim:TransformerTankEnd rdf:ID="_transformer_2083545_tank_end_1">
//                <cim:TransformerEnd.endNumber>1</cim:TransformerEnd.endNumber>
//                <cim:IdentifiedObject.name>TRA79_tank_end_1</cim:IdentifiedObject.name>
//                <cim:TransformerTankEnd.phases rdf:resource="http://iec.ch/TC57/2010/CIM-schema-cim15#PhaseCode.ABC"/>
//                <cim:TransformerTankEnd.TransformerTank rdf:resource="#_transformer_2083545_tank"/>
//                <cim:TransformerEnd.Terminal rdf:resource="#_transformer_2083545_terminal_1"/>
//                <cim:TransformerEnd.BaseVoltage rdf:resource="#BaseVoltage_16.0000000000"/>
//        </cim:TransformerTankEnd>
            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            end = parse_element (/<cim:TransformerEnd.endNumber>([\s\S]*?)<\/cim:TransformerEnd.endNumber>/g, sub, context);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            phases = parse_attribute (/<cim:TransformerTankEnd.phases\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            tank = parse_attribute (/<cim:TransformerTankEnd.TransformerTank\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            terminal = parse_attribute (/<cim:TransformerEnd.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            voltage = parse_attribute (/<cim:TransformerEnd.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

            if (null == parsed.PowerSystemResources[tank])
                parsed.PowerSystemResources[tank] = { ends: []};
            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = {};
            resource.end = end;
            resource.name = name;
            resource.phases = phases;
            resource.tank = tank;
            resource.terminal = terminal;
            resource.voltage = voltage;
            parsed.PowerSystemResources[tank].ends.push (resource);
        }

        /**
         * Parse an XML file into constituent parts
         * @param {String} xml - the string to parse
         * @param {Object} context - the file reading context
         * @param {Object} parsed - optional parsed elements to add to
         * @returns {Object} the parsed object
         * @memberOf module:cimspace
         */
        function read_xml (xml, context, parsed)
        {
            var regex;
            var result;
            var subcontext;
            var ignored = 0;

            context = context ||
            {
                start_character: 0,
                end_character: 0,
                newlines: []
            };
            parsed = parsed ||
            {
                ConnectivityNodes: {},
                PowerSystemResourceTypes: {},
                PowerSystemResources: {},
                Voltages: {}
            };

            // update the newline index
            context.newlines = index_string (xml, context.start_character);

            // scan for cim elements
            regex = /<(cim:\S+)([\s\S]*?)<\/\1>/g;
            while (null != (result = regex.exec (xml)))
            {
                // update the last seen character position
                context.end_character = context.start_character + regex.lastIndex;
                // form the subcontext for parsing individual elements
                subcontext =
                {
                    start_character: context.start_character + result.index,
                    end_character: context.end_character,
                    newlines: context.newlines
                };
                // parse individual elements
                var element = result[1];
                var guts = result[2];
                switch (element)
                {
                    case "cim:PSRType":
                        parse_psrtype (parsed, subcontext, guts); // ' rdf:ID="PSRType_Substation">\n        <cim:IdentifiedObject.name>Substation</cim:IdentifiedObject.name>\n    '
                        break;

                    case "cim:ConnectivityNode":
                        parse_connectivity (parsed, subcontext, guts); // ' rdf:ID="_pin_1555069">\n        <cim:IdentifiedObject.name>PIN2</cim:IdentifiedObject.name>\n        <cim:ConnectivityNode.ConnectivityNodeContainer rdf:resource="_subnetwork_349554"/>\n    '
                        break;

                    case "cim:Line":
                        parse_line (parsed, subcontext, guts); // ' rdf:ID="_subnetwork_349554">\n        <cim:IdentifiedObject.name>ABG2236|ABG7246|APP197|FLT13|FLU20|FLU21|FLU22|FLU23|HAS332|HAS333|HAS334|HAS335|MUF2681|MUF2682|PIN2</cim:IdentifiedObject.name>\n    '
                        break;

                    case "cim:Substation":
                        parse_substation (parsed, subcontext, guts);
                        break;

                    case "cim:BaseVoltage":
                        parse_voltage (parsed, subcontext, guts);
                        break;

                    case "cim:Asset":
                        parse_asset (parsed, subcontext, guts);
                        break;

                    case "cim:EnergyConsumer":
                        parse_consumer (parsed, subcontext, guts);
                        break;

                    case "cim:Terminal":
                        parse_terminal (parsed, subcontext, guts);
                        break;

                    case "cim:BusbarInfo":
                        parse_busbar_info (parsed, subcontext, guts);
                        break;

                    case "cim:BusbarSection":
                        parse_busbar (parsed, subcontext, guts);
                        break;

                    case "cim:CableInfo":
                        parse_cable_info (parsed, subcontext, guts);
                        break;

                    case "cim:ACLineSegment":
                        parse_aclinesegment (parsed, subcontext, guts);
                        break;

                    case "cim:ACLineSegmentPhase":
                        parse_aclinesegmentphase (parsed, subcontext, guts);
                        break;

                    case "cim:SwitchInfo":
                        parse_switch_info (parsed, subcontext, guts);
                        break;

                    case "cim:LoadBreakSwitch":
                        parse_switch (parsed, subcontext, guts);
                        break;

                    case "cim:PowerTransformerInfo":
                        parse_transformer_info (parsed, subcontext, guts);
                        break;

                    case "cim:TransformerTankInfo":
                        parse_transformer_tank_info (parsed, subcontext, guts);
                        break;

                    case "cim:TransformerEndInfo":
                        parse_transformer_end_info (parsed, subcontext, guts);
                        break;

                    case "cim:PowerTransformer":
                        parse_transformer (parsed, subcontext, guts);
                        break;

                    case "cim:TransformerTank":
                        parse_transformer_tank (parsed, subcontext, guts);
                        break;

                    case "cim:TransformerTankEnd":
                        parse_transformer_tank_end (parsed, subcontext, guts);
                        break;

                    default:
                        //console.log ("unrecognized element type '" + result[1] + "' at line " + line_number (subcontext));
                        ignored++;
                        break;
                }
            }

            console.log ("ignored " + ignored + " elements");
            return ({parsed: parsed, context: context});
        }

        /**
         * Test parse a chunk of XML file into constituent parts
         * @memberOf module:cimspace
         */
        function fake_files ()
        {

            var ss =
            '    <rdf:RDF xmlns:dm="http://iec.ch/2002/schema/CIM_difference_model#" xmlns:cim="http://iec.ch/TC57/2010/CIM-schema-cim15#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n' +
            '    <cim:PSRType rdf:ID="PSRType_Substation">\n' +
            '        <cim:IdentifiedObject.name>Substation</cim:IdentifiedObject.name>\n' +
            '    </cim:PSRType>\n' +
            '    <cim:Line rdf:ID="_subnetwork_349554">\n' +
            '        <cim:IdentifiedObject.name>ABG2236|ABG7246|APP197|FLT13|FLU20|FLU21|FLU22|FLU23|HAS332|HAS333|HAS334|HAS335|MUF2681|MUF2682|PIN2</cim:IdentifiedObject.name>\n' +
            '    </cim:Line>\n' +
            '    <cim:ConnectivityNode rdf:ID="_pin_1555069">\n' +
            '        <cim:IdentifiedObject.name>PIN2</cim:IdentifiedObject.name>\n' +
            '        <cim:ConnectivityNode.ConnectivityNodeContainer rdf:resource="_subnetwork_349554"/>\n' +
            '    </cim:ConnectivityNode>\n';

            var next;

            next = read_xml (ss);
            console.log (JSON.stringify (next, null, 4));
            return (next);
        }

        /**
         * Handle the FileReader completion event for an XML file.
         * @param {Object[]} files - the array of files
         * @param {Object} event - the onload event
         * @memberOf module:cimspace
         */
        function read_xml_file (files, event)
        {

            var next;
            var count_resources;
            var resources;
            var count_connectivity;
            var connections;

            console.log ("starting XML parse");

            next = read_xml (event.target.result);
            console.log ("done XML parse");

            // check some stuff
            count_resources = 0;
            resources = next.parsed.PowerSystemResources;
            for (var property in resources)
                if (resources.hasOwnProperty (property))
                {
                    if (0 == property.indexOf ("_substation"))
                    {
                        if (!resources[property].contents)
                            console.log (property + " has no contents");
                        else
                            if (0 == resources[property].length)
                                console.log (property + " contents has zero length");
                    }
                    if (!resources[property].name)
                        console.log (property + " has no name");
                    count_resources++;
                }
            count_connectivity = 0;
            connections = next.parsed.ConnectivityNodes;
            for (var property in connections)
                if (connections.hasOwnProperty (property))
                {
                    if (0 == property.indexOf ("_pin")) // ToDo: just do Transformer high voltage pins
                    {
                        if ((!connections[property].container) && (!connections[property].name))
                        {
                            // unnamed pins come from transformer high sides: don't count them
                        }
                        else
                        {
                            if (!connections[property].container)
                                console.log (property + " has no container");
                            if (!connections[property].name)
                                console.log (property + " has no name");
                            count_connectivity++;
                        }
                    }
                    else
                    {
                        if (!connections[property].container)
                            console.log (property + " has no container");
                        if (!connections[property].name)
                            console.log (property + " has no name");
                        count_connectivity++;
                    }
                }
            console.log (event.target.result.length + " characters yields "
                + count_resources + " resources "
                + count_connectivity + " connections.");

            // chain to the gml file reader
            for (var i = 0; i < files.length; i++)
            {
                var file = files[i];
                var name = file.name;
                var extension = name.substring (name.length - Math.min (4, name.length)).toLowerCase ();
                if (".gml" == extension)
                {
                    console.log ("starting GML read");
                    var reader = new FileReader ();
                    reader.onload = read_gml_file.bind (this, next.parsed);
                    reader.readAsText (file, "UTF-8");
                    break;
                }
            }
        }

        /**
         * Convert the provided GML into GeoJSON
         * @param {String} gml - the gml text
         * @param {Object} context - the file reading context
         * @param {Object} parsed - optional parsed elements to add to
         * @returns {Object} the parsed object
         * @memberOf module:cimspace
         */
        function read_gml (gml, context, parsed)
        {
//                        <gml:boundedBy>
//                                <gml:Envelope srsName="EPSG:4326">
//                                        <gml:lowerCorner>8.58640801325 47.0567348335</gml:lowerCorner>
//                                        <gml:upperCorner>8.58653962013 47.0567361498</gml:upperCorner>
//                                </gml:Envelope>
//                        </gml:boundedBy>
//                        <nmm:ID>_busbar_1772407</nmm:ID>
//                        <nmm:Angle>0</nmm:Angle>
//                        <nmm:NMMGeometry>
//                                <nmm:FieldName>path</nmm:FieldName>
//                                <gml:LineString srsName="EPSG:4326">
//                                        <gml:posList>8.58640801325 47.0567361498 8.58644091497 47.0567358207 8.58647381669 47.0567354916 8.58650671841 47.0567351626 8.58653962013 47.0567348335</gml:posList>
//                                </gml:LineString>
//                        </nmm:NMMGeometry>


//                        <gml:boundedBy>
//                                <gml:Envelope srsName="EPSG:4326">
//                                        <gml:lowerCorner>8.78184724183 47.0400997930</gml:lowerCorner>
//                                        <gml:upperCorner>8.78184724183 47.0400997930</gml:upperCorner>
//                                </gml:Envelope>
//                        </gml:boundedBy>
//                        <nmm:ID>_house_connection_1469932</nmm:ID>
//                        <nmm:Angle>147.307201327</nmm:Angle>
//                        <nmm:NMMGeometry>
//                                <nmm:FieldName>location</nmm:FieldName>
//                                <gml:Point srsName="EPSG:4326">
//                                        <gml:pos>8.78184724183 47.0400997930</gml:pos>
//                                </gml:Point>
//                        </nmm:NMMGeometry>
            var regex;
            var result;
            var subcontext;
            var guts;
            var id;
            //var angle;
            var type;
            var coords;

            context = context ||
            {
                start_character: 0,
                end_character: 0,
                newlines: []
            };
            parsed = parsed ||
            {
                lines:
                {
                    "type" : "FeatureCollection",
                    "features" :
                    [
//                        {
//                            "type" : "Feature",
//                            "geometry" :
//                            {
//                                "type" : "LineString",
//                                "coordinates" : [ [ 102.0, 0.0 ], [ 103.0, 1.0 ], [ 104.0, 0.0 ], [ 105.0, 1.0 ] ]
//                            },
//                            "properties" :
//                            {
//                                "prop0" : "value0",
//                                "prop1" : 0.0
//                            }
//                        }
                    ]
                },
                points:
                {
                    "type" : "FeatureCollection",
                    "features" :
                    [
//                        {
//                            "type" : "Feature",
//                            "geometry" :
//                            {
//                                "type" : "Point",
//                                "coordinates" : [ 102.0, 0.5 ]
//                            },
//                            "properties" :
//                            {
//                                "prop0" : "value0"
//                            }
//                        }
                    ]
                }
            };

            // update the newline index
            context.newlines = index_string (gml, context.start_character);

            // scan for device elements
            regex = /<nmm:DeviceMember>\s*<nmm:Device>([\s\S]*?)<\/nmm:Device>\s*<\/nmm:DeviceMember>/g;
            while (null != (result = regex.exec (gml)))
            {
                // update the last seen character position
                context.end_character = context.start_character + regex.lastIndex;
                // form the subcontext for parsing individual elements
                subcontext =
                {
                    start_character: context.start_character + result.index,
                    end_character: context.end_character,
                    newlines: context.newlines
                };
                guts = result[1];
                id = parse_element (/<nmm:ID>([\s\S]*?)<\/nmm:ID>/g, guts, subcontext);
                //angle= parse_element (/<nmm:Angle>([\s\S]*?)<\/nmm:Angle>/g, guts, subcontext);
                type = parse_element (/<nmm:FieldName>([\s\S]*?)<\/nmm:FieldName>/g, guts, subcontext);
                if ("path" == type)
                {
                    coords = parse_element (/<gml:posList>([\s\S]*?)<\/gml:posList>/g, guts, subcontext).split (" ");
                    parsed.lines.features.push
                    (
                        {
                            "type" : "Feature",
                            "geometry" :
                            {
                                "type" : "LineString",
                                "coordinates" : coords.reduce
                                (
                                    function (ret, item)
                                    {
                                        var next;

                                        next = ret[ret.length - 1];
                                        if (!next || (2 <= next.length))
                                        {
                                            next = [];
                                            ret.push (next);
                                        }
                                        next.push (item);

                                        return (ret);
                                    },
                                    []
                                )
                            },
                            "properties" :
                            {
                                "id" : id
                            }
                        }
                    );
                }
                else if ("location" == type)
                {
                    coords = parse_element (/<gml:pos>([\s\S]*?)<\/gml:pos>/g, guts, subcontext).split (" ");
                    parsed.points.features.push
                    (
                        {
                            "type" : "Feature",
                            "geometry" :
                            {
                                "type" : "Point",
                                "coordinates" : [ coords[0], coords[1] ]
                            },
                            "properties" :
                            {
                                "id" : id
                            }
                        }
                    );
                }
            }

            return ({parsed: parsed, context: context});
        }

        function do_vector_tiles ()
        {
            return (document.getElementById ("vector_tiles").checked && mapboxgl.supported ());
        }

        /**
         * Handle the FileReader completion event for a GML file.
         * @param {Object} data - the XML parsed data
         * @param {Object} event - the onload event
         * @memberOf module:cimspace
         */
        function read_gml_file (data, event)
        {
            var next;
            var feature;
            var item;

            console.log ("starting GML parse");
            next = read_gml (event.target.result);
            console.log ("done GML parse")
            console.log (event.target.result.length + " characters yields "
                + next.parsed.lines.features.length + " lines and "
                + next.parsed.points.features.length + " points.");

            // match up the data
            for (var i = 0; i < next.parsed.lines.features.length; i++)
            {
                feature = next.parsed.lines.features[i];
                item = data.PowerSystemResources[feature.properties.id];
                if (null != item)
                    feature.properties = item;
            }
            for (var j = 0; j < next.parsed.points.features.length; j++)
            {
                feature = next.parsed.points.features[j];
                item = data.PowerSystemResources[feature.properties.id];
                if (null != item)
                    feature.properties = item;
            }

            // split out the generated lines
            var features =
            {
                normal_lines:
                {
                    "type" : "FeatureCollection",
                    "features" :
                    [
                    ]
                },
                generated_lines:
                {
                    "type" : "FeatureCollection",
                    "features" :
                    [
                    ]
                }
            };
            next.parsed.lines.features.reduce
            (
                function (ret, item)
                {
                    if (0 == item.properties.name.indexOf ("_generated"))
                        ret.generated_lines.features.push (item);
                    else
                        ret.normal_lines.features.push (item);

                    return (ret);
                },
                features
            );

            // update the map
            var mapbox_classic = !do_vector_tiles ();
            if (mapbox_classic)
            {
                var lines = L.mapbox.featureLayer (next.parsed.lines);
                lines.addTo (TheMap);
                var points = L.mapbox.featureLayer (next.parsed.points);
                points.addTo (TheMap);
            }
            else
            {
                TheMap.addSource
                (
                    "the cim lines",
                    {
                        type: "geojson",
                        data: features.normal_lines,
                        maxzoom: 25
                    }
                );

                TheMap.addSource
                (
                    "the generated lines",
                    {
                        type: "geojson",
                        data: features.generated_lines,
                        maxzoom: 25
                    }
                );

                TheMap.addSource
                (
                    "the cim points",
                    {
                        type: "geojson",
                        data: next.parsed.points,
                        maxzoom: 25
                    }
                );

                TheMap.addLayer
                (
                    {
                        id: "lines",
                        type: "line",
                        source: "the cim lines",
                        layout:
                        {
                            "line-join": "round",
                            "line-cap": "round"
                        },
                        paint:
                        {
                            "line-color": "#000",
                            "line-width": 3
                        }
                    }
                );

                TheMap.addLayer
                (
                    {
                        id: "generated_lines",
                        type: "line",
                        source: "the generated lines",
                        layout:
                        {
                        },
                        paint:
                        {
                            "line-color": "#555555",
                            "line-width": 1
                        }
                    }
                );

                // simple circle from 14 to 17
                TheMap.addLayer
                (
                    {
                        id: "circles",
                        type: "circle",
                        source: "the cim points",
                        minzoom: 14,
                        maxzoom: 17,
                        layout:
                        {
                            "visibility": "visible"
                        },
                        paint:
                        {
                            "circle-radius": 5, // Optional number. Units in pixels. Defaults to 5.
                            "circle-color": "rgb(0, 0, 0)", // Optional color. Defaults to #000000.
                            "circle-blur": 0, // Optional number. Defaults to 0. 1 blurs the circle such that only the centerpoint is full opacity.
                            "circle-opacity": 1, // Optional number. Defaults to 1.
                            "circle-translate": [0, 0], // Optional array. Units in pixels. Defaults to 0,0. Values are [x, y] where negatives indicate left and up, respectively.
                            "circle-translate-anchor": "map", // Optional enum. One of map, viewport. Defaults to map. Requires circle-translate.
                        }
                    }
                );

                // symbol icon from 17 and deeper
                TheMap.addLayer
                (
                    {
                        id: "symbols",
                        type: "symbol",
                        source: "the cim points",
                        minzoom: 17,
                        interactive: true,
                        layout:
                        {
                            "icon-image": "monument-11",
                            "icon-allow-overlap": true,
                            "text-field": "{name}",
                            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                            "text-offset": [0, 0.6],
                            "text-anchor": "top",
                            "text-allow-overlap": true
                        },
                        paint:
                        {
                            "text-size": 12
                        }
                    }
                );
            }
        }

        /**
         * @summary Handler for file change events.
         * @description Add files to the collection and update the display.
         * @param {object} event - the file change event
         * @function file_change
         * @memberOf module:cimspace
         */
        function file_change (event)
        {
            for (var i = 0; i < event.target.files.length; i++)
            {
                var file = event.target.files[i];
                var name = file.name;
                var extension = name.substring (name.length - Math.min (4, name.length)).toLowerCase ();
                if (".xml" == extension)
                {
                    console.log ("starting XML read");
                    var reader = new FileReader ();
                    reader.onload = read_xml_file.bind (this, event.target.files);
                    reader.readAsText (file, "UTF-8");
                    break;
                }
            }
        }

        /**
         * @summary Initialize the map.
         * @description Create the background map.
         * @param {object} event - optional, the vector tile checkbox change event
         * @function init_map
         * @memberOf module:cimspace
         */
        function init_map (event)
        {
            var mapbox_classic = !do_vector_tiles ();

            document.getElementById ("map").innerHTML = "";
            if (mapbox_classic)
            {
                L.mapbox.accessToken = TheToken;
                TheMap = L.mapbox.map ("map", "derrickoswald.ciezok3nc00ovsvlth7rs7tcz").setView([46.93003, 7.48634000000001], 9);
            }
            else
            {
                mapboxgl.accessToken = TheToken;
                TheMap = new mapboxgl.Map
                (
                    {
                        name: "TheMap",
                        version: 8,
                        container: "map",
                        center: [7.48634000000001, 46.93003],
                        zoom: 9,
                        maxZoom: 25,
                        style: "mapbox://styles/mapbox/streets-v8",
                        hash: true
                    }
                );
                // add zoom and rotation controls to the map.
                TheMap.addControl (new mapboxgl.Navigation ());
                // handle mouse movement
                var last;
                TheMap.on
                (
                    'mousemove',
                    function (event)
                    {
                        TheMap.featuresAt
                        (
                            event.point,
                            {radius: 5},
                            function (err, features)
                            {
                                if (err)
                                    throw err;
                                if (0 != features.length)
                                {
                                    if (features[0].properties.name != last)
                                        console.log (JSON.stringify (features[0].properties, null, 2));
                                    last = features[0].properties.name;
                                }
                            }
                        );
                    }
                );
            }
        }

        document.getElementById ("fake_files").onclick = fake_files;
        document.getElementById ("read_files").onchange = file_change;
        //document.getElementById ("file_button").onchange = file_change;
        document.getElementById ("vector_tiles").onchange = init_map;
        init_map ();
    }
);