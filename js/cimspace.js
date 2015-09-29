/**
 * Main javascript file for CIMSpace application
 */
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
//        <cim:Asset rdf:ID="_busbar_1772383_asset">^M
//                <cim:Asset.type>Busbar</cim:Asset.type>^M
//                <cim:IdentifiedObject.name>Busbar_SAM143</cim:IdentifiedObject.name>^M
//                <cim:Asset.PowerSystemResources rdf:resource="#_busbar_1772383"/>^M
//                <cim:Asset.AssetInfo rdf:resource="#_busbar_spec_566593648"/>^M
//        </cim:Asset>^M
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
//        <cim:BusbarInfo rdf:ID="_busbar_spec_566593648">^M
//                <cim:IdentifiedObject.name>unbekannt EWS</cim:IdentifiedObject.name>^M
//        </cim:BusbarInfo>^M
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
//        <cim:CableInfo rdf:ID="_cable_spec_566593874">^M
//                <cim:IdentifiedObject.name>TT 4x1x70</cim:IdentifiedObject.name>^M
//        </cim:CableInfo>^M
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
//        <cim:ACLineSegment rdf:ID="_internal_line_2094357">^M
//                <cim:IdentifiedObject.name>KLE8207</cim:IdentifiedObject.name>^M
//                <cim:Conductor.length>19.5</cim:Conductor.length>^M
//                <cim:PowerSystemResource.PSRType rdf:resource="#PSRType_Unknown"/>^M
//                <cim:ConductingEquipment.BaseVoltage rdf:resource="#BaseVoltage_0.400000000000"/>^M
//                <cim:Equipment.EquipmentContainer rdf:resource="_subnetwork_859028"/>^M
//        </cim:ACLineSegment>^M
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
//        <cim:ACLineSegmentPhase rdf:ID="_internal_line_2094357_phase_A">^M
//                <cim:IdentifiedObject.name>KLE8207_phase_A</cim:IdentifiedObject.name>^M
//                <cim:ACLineSegmentPhase.phase rdf:resource="http://iec.ch/TC57/2010/CIM-schema-cim15#SinglePhaseKind.A"/>^M
//                <cim:ACLineSegmentPhase.ACLineSegment rdf:resource="_internal_line_2094357"/>^M
//        </cim:ACLineSegmentPhase>^M
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
//        <cim:SwitchInfo rdf:ID="_switch_spec_566593661">^M
//                <cim:IdentifiedObject.name>G4</cim:IdentifiedObject.name>^M
//        </cim:SwitchInfo>^M
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
//        <cim:LoadBreakSwitch rdf:ID="_switch_1977502">^M
//                <cim:IdentifiedObject.name>TEI568</cim:IdentifiedObject.name>^M
//                <cim:Switch.normalOpen>false</cim:Switch.normalOpen>^M
//                <cim:PowerSystemResource.PSRType rdf:resource="#PSRType_Substation"/>^M
//                <cim:Equipment.EquipmentContainer rdf:resource="_substation_251865"/>^M
//        </cim:LoadBreakSwitch>^M
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
//        <cim:PowerTransformerInfo rdf:ID="_power_transformer_2083545">^M
//                <cim:IdentifiedObject.name>Rauscher + Stöckli 100 kVA</cim:IdentifiedObject.name>^M
//                <cim:PowerTransformerInfo.TransformerTankInfo rdf:resource="#_power_xfrmr_spec_2083545"/>^M
//        </cim:PowerTransformerInfo>^M
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
//        <cim:TransformerTankInfo rdf:ID="_power_xfrmr_spec_2083545">^M
//                <cim:IdentifiedObject.name>Rauscher + Stöckli 100 kVA tank</cim:IdentifiedObject.name>^M
//                <cim:TransformerTankInfo.PowerTransformerInfo rdf:resource="#_power_transformer_2083545"/>^M
//        </cim:TransformerTankInfo>^M
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
//        <cim:TransformerEndInfo rdf:ID="_power_transformer_2083545_end_info_1">^M
//                <cim:IdentifiedObject.name>Rauscher + Stöckli 100 kVA_tei_1</cim:IdentifiedObject.name>^M
//                <cim:TransformerEndInfo.endNumber>1</cim:TransformerEndInfo.endNumber>^M
//        </cim:TransformerEndInfo>^M
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
//        <cim:PowerTransformer rdf:ID="_transformer_2083545">^M
//                <cim:IdentifiedObject.name>TRA79</cim:IdentifiedObject.name>^M
//                <cim:PowerSystemResource.PSRType rdf:resource="#PSRType_Unknown"/>^M
//                <cim:Equipment.EquipmentContainer rdf:resource="#_substation_244441"/>^M
//        </cim:PowerTransformer>^M
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
//       <cim:TransformerTank rdf:ID="_transformer_2083545_tank">^M
//                <cim:IdentifiedObject.name>TRA79_tank</cim:IdentifiedObject.name>^M
//                <cim:TransformerTank.PowerTransformer rdf:resource="#_transformer_2083545"/>^M
//        </cim:TransformerTank>^M
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
//        <cim:TransformerTankEnd rdf:ID="_transformer_2083545_tank_end_1">^M
//                <cim:TransformerEnd.endNumber>1</cim:TransformerEnd.endNumber>^M
//                <cim:IdentifiedObject.name>TRA79_tank_end_1</cim:IdentifiedObject.name>^M
//                <cim:TransformerTankEnd.phases rdf:resource="http://iec.ch/TC57/2010/CIM-schema-cim15#PhaseCode.ABC"/>^M
//                <cim:TransformerTankEnd.TransformerTank rdf:resource="#_transformer_2083545_tank"/>^M
//                <cim:TransformerEnd.Terminal rdf:resource="#_transformer_2083545_terminal_1"/>^M
//                <cim:TransformerEnd.BaseVoltage rdf:resource="#BaseVoltage_16.0000000000"/>^M
//        </cim:TransformerTankEnd>^M
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
         * Handle the FileReader completion event.
         * @param {Object} event - the onload event
         * @memberOf module:cimspace
         */
        function read_files (event)
        {

            var next;
            var count_resources;
            var resources;
            var count_connectivity;
            var connections;

            console.log ("starting");

            next = read_xml (event.target.result);
            console.log ("done parsing");

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

            console.log ("done checking " + count_resources + " resources " + count_connectivity + " connections");
        }

        /**
         * @summary Handler for file change events.
         * @description Add files to the collection and update the display.
         * @param {object} event - the file change event
         * @function file_change
         * @memberOf module:thingmaker/files
         */
        function file_change (event)
        {
            var reader = new FileReader ();
            reader.onload = read_files;
            reader.readAsText(event.target.files[0], "UTF-8");
        }


        document.getElementById ("fake_files").onclick = fake_files;
        document.getElementById ("read_files").onchange = file_change;
    }
);