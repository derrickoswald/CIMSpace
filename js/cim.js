/**
 * @fileOverview Read CIM files.
 * @name cim
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    [],
    /**
     * @summary CIM file reading functions.
     * @description Read an XML file with a restricted profile
     * (based on the PowerOn Advantage profile).
     * @name cim
     * @exports cim
     * @version 1.0
     */
    function ()
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
         * @memberOf module:cim
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
         * Originally the idea behind this parameter was to:
         * read the file in 64K chunks using slice on the File blob,
         * and then read as text, scan with regex,
         * getting the last character position before the end of the slice or somewhere convenient,
         * and then to get the next slice starting on a character boundary (UTF8 encoded right) you need
         * to write out the characters seen so far and count the bytes,
         * then ask for the next 64K slice starting at that byte offset.
         * But reading in the entire file (64MB so far) seems to work OK, so this isn't used.
         * @returns {[Number]} the index of newlines, e.g. [15, 32, 64] for "Now is the time\nfor all good men\nto come to the aid of the party\n"
         * @memberOf module:cim
         */
        function index_string (str, offset, newlines)
        {
            var lines;
            var res;

            offset = offset || 0;
            var nl = newlines || [];
            lines = /\n/g;
            while (null != (res = lines.exec (str)))
                nl.push (res.index + offset);

            return (nl);
        }

        /**
         * Get a line number from the newline index of a context.
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @param {Number} offset - the character position to find line number of, default = context.start_character
         * @returns {Number} the one-based line number for the starting character position
         * @memberOf module:cim
         */
        function line_number (context, offset)
        {
            var min = 0;
            var max = context.newlines.length - 1;
            if ("undefined" == typeof (offset))
                offset = context.start_character;
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
                    return (index + 1);
            }

            return ((context.newlines[index] <= offset ? index + 1 : index) + 1);
        }

        /**
         * Convert a string into a boolean value.
         * @param {String} str - the string to convert
         * @returns {Boolean} the boolean value
         * @memberOf module:cim
         */
        function to_boolean (str)
        {
            return (str.toLowerCase () === "true");
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
         * @memberOf module:cim
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
         * @memberOf module:cim
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

        function bogus1 () // ToDo: only needed for Eclipse braindead Javascript outlining
        {
        }

        /**
         * Parse a PSRType element and add it to the PowerSystemResourceTypes.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResourceTypes - the object with PSR types
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the PSRType element
         * @memberOf module:cim
         */
        function parse_psrtype (parsed, context, sub)
        {
            var typex;
            var id;
            var value;
//        <cim:PSRType rdf:ID="PSRType_Substation">
//                <cim:IdentifiedObject.name>Substation</cim:IdentifiedObject.name>
//        </cim:PSRType>

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
         * @memberOf module:cim
         */
        function parse_connectivity (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var container;
            var node;
//        <cim:ConnectivityNode rdf:ID="_pin_1555069">
//                <cim:IdentifiedObject.name>PIN2</cim:IdentifiedObject.name>
//                <cim:ConnectivityNode.ConnectivityNodeContainer rdf:resource="_subnetwork_349554"/>
//        </cim:ConnectivityNode>

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
         * @memberOf module:cim
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
         * @memberOf module:cim
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
         * @memberOf module:cim
         */
        function parse_voltage (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var resource;
            var voltage;
//        <cim:BaseVoltage rdf:ID="BaseVoltage_0.400000000000">
//                <cim:IdentifiedObject.name>400.000 V</cim:IdentifiedObject.name>
//                <cim:BaseVoltage.nominalVoltage>0.400000000000</cim:BaseVoltage.nominalVoltage>
//        </cim:BaseVoltage>

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

        function dummy () // ToDo: only needed for Eclipse braindead Javascript outlining
        {
        }

        /**
         * Parse a Asset element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
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

        function bogus2 () // ToDo: only needed for Eclipse braindead Javascript outlining
        {
        }

       /**
         * Parse a EnergyConsumer element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
         */
        function parse_consumer (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var location;
            var type;
            var voltage;
            var container;
            var phase;
            var resource;

//        <cim:EnergyConsumer rdf:ID="_house_connection_1469932">
//                <cim:IdentifiedObject.name>HAS1</cim:IdentifiedObject.name>
//                <cim:PowerSystemResource.Location>_location_5773088_1107287243_317923</cim:PowerSystemResource.Location>
//                <cim:PowerSystemResource.PSRType rdf:resource="#PSRType_Unknown"/>
//                <cim:ConductingEquipment.BaseVoltage rdf:resource="#BaseVoltage_0.400000000000"/>
//                <cim:Equipment.EquipmentContainer rdf:resource="_subnetwork_350063"/>
//                <cim:EnergyConsumer.PhaseConnection rdf:resource="http://iec.ch/TC57/2010/CIM-schema-cim15#PhaseShuntConnectionKind.Y"/>
//        </cim:EnergyConsumer>

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            location = parse_element (/<cim:PowerSystemResource.Location>([\s\S]*?)<\/cim:PowerSystemResource.Location>/g, sub, context, true);
            type = parse_attribute (/<cim:PowerSystemResource.PSRType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            voltage = parse_attribute (/<cim:ConductingEquipment.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            container = parse_attribute (/<cim:Equipment.EquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);
            phase = parse_attribute (/<cim:EnergyConsumer.PhaseConnection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context);

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
            if (null != location)
            {
                if (null == parsed.PowerSystemResources[location])
                    parsed.PowerSystemResources[location] = { coordinates: [] };
                resource.location = location;
            }
            parsed.PowerSystemResources[container].contents.push (resource);
        }

       /**
         * Parse a Terminal element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
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
         * @memberOf module:cim
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

        function bogus3 () // ToDo: only needed for Eclipse braindead Javascript outlining
        {
        }

        /**
         * Parse a BusBarSection element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
         */
        function parse_busbar (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var location;
            var type;
            var voltage;
            var container;
            var resource;

//        <cim:BusbarSection rdf:ID="_busbar_1772383">
//                <cim:IdentifiedObject.name>SAM143</cim:IdentifiedObject.name>
//                <cim:PowerSystemResource.Location>_location_1610657792_427078125_1772388</cim:PowerSystemResource.Location>
//                <cim:PowerSystemResource.PSRType rdf:resource="#PSRType_Substation"/>
//                <cim:ConductingEquipment.BaseVoltage rdf:resource="#BaseVoltage_0.400000000000"/>
//                <cim:Equipment.EquipmentContainer rdf:resource="_subnetwork_858945"/>
//        </cim:BusbarSection>

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            location = parse_element (/<cim:PowerSystemResource.Location>([\s\S]*?)<\/cim:PowerSystemResource.Location>/g, sub, context, true);
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
            if (null != location)
            {
                if (null == parsed.PowerSystemResources[location])
                    parsed.PowerSystemResources[location] = { coordinates: [] };
                resource.location = location;
            }
            parsed.PowerSystemResources[container].contents.push (resource);
        }

       /**
         * Parse a CableInfo element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
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

        function bogus4 () // ToDo: only needed for Eclipse braindead Javascript outlining
        {
        }

        /**
         * Parse a ACLineSegment element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
         */
        function parse_aclinesegment (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var location;
            var length;
            var type;
            var voltage;
            var container;
            var resource;

//        <cim:ACLineSegment rdf:ID="_internal_line_2094357">
//                <cim:IdentifiedObject.name>KLE8207</cim:IdentifiedObject.name>
//                <cim:PowerSystemResource.Location>_location_1610630656_427084375_2094361</cim:PowerSystemResource.Location>
//                <cim:Conductor.length>19.5</cim:Conductor.length>
//                <cim:PowerSystemResource.PSRType rdf:resource="#PSRType_Unknown"/>
//                <cim:ConductingEquipment.BaseVoltage rdf:resource="#BaseVoltage_0.400000000000"/>
//                <cim:Equipment.EquipmentContainer rdf:resource="_subnetwork_859028"/>
//        </cim:ACLineSegment>

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            location = parse_element (/<cim:PowerSystemResource.Location>([\s\S]*?)<\/cim:PowerSystemResource.Location>/g, sub, context, true);
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
            if (null != location)
            {
                if (null == parsed.PowerSystemResources[location])
                    parsed.PowerSystemResources[location] = { coordinates: [] };
                resource.location = location;
            }
            parsed.PowerSystemResources[container].contents.push (resource);
        }

        /**
         * Parse a ACLineSegmentPhase element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
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

        function bogus5 () // ToDo: only needed for Eclipse braindead Javascript outlining
        {
        }

        /**
         * Parse a SwitchInfo element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
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

        function bogus6 () // ToDo: only needed for Eclipse braindead Javascript outlining
        {
        }

        /**
         * Parse a LoadBreakSwitch element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
         */
        function parse_switch (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var location;
            var open;
            var type;
            var container;
            var resource;

//        <cim:LoadBreakSwitch rdf:ID="_switch_1977502">
//                <cim:IdentifiedObject.name>TEI568</cim:IdentifiedObject.name>
//                <cim:PowerSystemResource.Location>_location_1610720512_427087414_1977506</cim:PowerSystemResource.Location>
//                <cim:Switch.normalOpen>false</cim:Switch.normalOpen>
//                <cim:PowerSystemResource.PSRType rdf:resource="#PSRType_Substation"/>
//                <cim:Equipment.EquipmentContainer rdf:resource="_substation_251865"/>
//        </cim:LoadBreakSwitch>

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            location = parse_element (/<cim:PowerSystemResource.Location>([\s\S]*?)<\/cim:PowerSystemResource.Location>/g, sub, context, true);
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
            if (null != location)
            {
                if (null == parsed.PowerSystemResources[location])
                    parsed.PowerSystemResources[location] = { coordinates: [] };
                resource.location = location;
            }
            parsed.PowerSystemResources[container].contents.push (resource);
        }

        function bogus7 () // ToDo: only needed for Eclipse braindead Javascript outlining
        {
        }

        /**
         * Parse a PowerTransformerInfo element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
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

        function bogus8 () // ToDo: only needed for Eclipse braindead Javascript outlining
        {
        }

        /**
         * Parse a TransformerTankInfo element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
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

        function bogus9 () // ToDo: only needed for Eclipse braindead Javascript outlining
        {
        }

        /**
         * Parse a TransformerEndInfo element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
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

        function bogus10 () // ToDo: only needed for Eclipse braindead Javascript outlining
        {
        }

        /**
         * Parse a PowerTransformer element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
         */
        function parse_transformer (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var location;
            var type;
            var container;
            var resource;

//        <cim:PowerTransformer rdf:ID="_transformer_2083545">
//                <cim:IdentifiedObject.name>TRA79</cim:IdentifiedObject.name>
//                <cim:PowerSystemResource.Location>_location_1610630656_427085543_2083549</cim:PowerSystemResource.Location>
//                <cim:PowerSystemResource.PSRType rdf:resource="#PSRType_Unknown"/>
//                <cim:Equipment.EquipmentContainer rdf:resource="#_substation_244441"/>
//        </cim:PowerTransformer>

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            location = parse_element (/<cim:PowerSystemResource.Location>([\s\S]*?)<\/cim:PowerSystemResource.Location>/g, sub, context, true);
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
            if (null != location)
            {
                if (null == parsed.PowerSystemResources[location])
                    parsed.PowerSystemResources[location] = { coordinates: [] };
                resource.location = location;
            }
            parsed.PowerSystemResources[container].contents.push (resource);
        }

        /**
         * Parse a TransformerTank element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
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
         * @memberOf module:cim
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
         * Parse a CoordinateSystem element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
         */
        function parse_cs (parsed, context, sub)
        {
            var idex;
            var id;
            var name;
            var urn;
            var resource;

//        <cim:CoordinateSystem rdf:ID="wgs_84">
//                <cim:IdentifiedObject.name>WGS 84</cim:IdentifiedObject.name>
//                <cim:CoordinateSystem.crsUrn>EPSG::4326</cim:crsUrn>
//        </cim:CoordinateSystem>

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context);
            urn = parse_element (/<cim:CoordinateSystem.crsUrn>([\s\S]*?)<\/cim:CoordinateSystem.crsUrn>/g, sub, context);

            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = { };
            resource.name = name;
            resource.urn = urn;
        }

        /**
         * Parse a Location element and add it to the PowerSystemResources.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
         */
        function parse_location  (parsed, context, sub)
        {
            var idex;
            var id;
            var cs;
            var type;
            var resource;

//        <cim:Location rdf:ID="_location_5773088_1107287243_317923">
//                <cim:Location.CoordinateSystem>wgs_84</cim:Location.CoordinateSystem>
//                <cim:Location.type>geographic</cim:Location.type>
//        </cim:Location>

            idex = /rdf:ID=("|')([\s\S]*?)\1/g;
            id = parse_attribute (idex, sub, context);
            sub = sub.substring (idex.lastIndex);
            cs = parse_element (/<cim:Location.CoordinateSystem>([\s\S]*?)<\/cim:Location.CoordinateSystem>/g, sub, context);
            type = parse_element (/<cim:Location.type>([\s\S]*?)<\/cim:Location.type>/g, sub, context);

            resource = parsed.PowerSystemResources[id];
            if (null == resource)
                parsed.PowerSystemResources[id] = resource = { coordinates: []};
            resource.cs = cs;
            resource.type = type;
        }

        /**
         * Parse a PositionPoint element and add it to the location.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within the Line element
         * @memberOf module:cim
         */
        function parse_position_point  (parsed, context, sub)
        {
            var location;
            var sequence;
            var x;
            var y;
            var resource;

//        <cim:PositionPoint>
//                <cim:PositionPoint.Location>_location_5773088_1107287243_317923</cim:PositionPoint.Location>
//                <cim:PositionPoint.sequenceNumber>0</cim:sequenceNumber>
//                <cim:PositionPoint.xPosition>8.78184724183</cim:xPosition>
//                <cim:PositionPoint.yPosition>47.0400997930</cim:yPosition>
//        </cim:PositionPoint>

            location = parse_element (/<cim:PositionPoint.Location>([\s\S]*?)<\/cim:PositionPoint.Location>/g, sub, context);
            sequence = Number (parse_element (/<cim:PositionPoint.sequenceNumber>([\s\S]*?)<\/cim:PositionPoint.sequenceNumber>/g, sub, context));
            x = Number (parse_element (/<cim:PositionPoint.xPosition>([\s\S]*?)<\/cim:PositionPoint.xPosition>/g, sub, context));
            y = Number (parse_element (/<cim:PositionPoint.yPosition>([\s\S]*?)<\/cim:PositionPoint.yPosition>/g, sub, context));

            resource = parsed.PowerSystemResources[location];
            if (null == resource)
                parsed.PowerSystemResources[location] = resource = { coordinates: []};
            resource.coordinates[sequence * 2] = x;
            resource.coordinates[sequence * 2 + 1] = y;
        }

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
                newlines: []
            };
            parsed = parsed ||
            {
                ConnectivityNodes: {},
                PowerSystemResourceTypes: {},
                PowerSystemResources: {},
                Voltages: {},
                ignored: 0
            };

            // update the newline index
            context.newlines = index_string (xml, context.start_character, context.newlines);

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

                    case "cim:CoordinateSystem":
                        parse_cs (parsed, subcontext, guts);
                        break;

                    case "cim:Location":
                        parse_location (parsed, subcontext, guts);
                        break;

                    case "cim:PositionPoint":
                        parse_position_point (parsed, subcontext, guts);
                        break;

                    default:
                        if (parsed.ignored < 3)
                            console.log ("unrecognized element type '" + result[1] + "' at line " + line_number (subcontext));
                        parsed.ignored++;
                        break;
                }
                result = null;
            }

            return ({parsed: parsed, context: context});
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
                //console.log ("parsing at line " + (context ? line_number (context) : "0") + " beginning with:\n" + xml.substring (0, xml.indexOf ("\n")));

                // check for just starting
                if (0 == start)
                {
                    context = context ||
                    {
                        start_character: 0,
                        end_character: 0,
                        newlines: []
                    };

                    // remove the XML declaration, i.e. <?xml version="1.0" encoding="UTF-8" standalone="no"?>
                    regex = /<\?([\s\S]*)\?>\s*/g;
                    if (null != (result = regex.exec (subxml)))
                    {
                        context.newlines = index_string (subxml.substring (0, regex.lastIndex), context.start_character, context.newlines);
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
                        context.newlines = index_string (subxml.substring (0, regex.lastIndex), context.start_character, context.newlines);
                        context.start_character += regex.lastIndex;
                        subxml = subxml.substring (regex.lastIndex);
                        offset += regex.lastIndex;
                        // ToDo: need we/can we handle different prefix values
                    }
                }

                result = read_xml (subxml, context, parsed);
                read = result.context.end_character - result.context.start_character; // number of characters parsed
                if (0 == read)
                    reject (Error ("parse failed at line " + line_number (context)));
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
                        context.newlines = context.newlines.slice (0, line_number (context, context.end_character) - 1);
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
                index_string: index_string,
                line_number: line_number,
                parse_element: parse_element,
                parse_attribute: parse_attribute,
                read_xml: read_xml,
                read_xml_blob: read_xml_blob
            }
        );
    }
);