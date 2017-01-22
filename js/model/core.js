/**
 * @fileOverview Package Core CIM model.
 * @name model/core
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base"],
    /**
     * @summary Package Core CIM model.
     * @description
     * @name model/core
     * @exports model/core
     * @version 1.0
     */
    function (base)
    {
        /*
         * Package Core
         */

        /**
         * Parse a ACDCTerminal.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ACDCTerminale - the list of user attributes
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_ACDCTerminal  (context, sub)
        {
            var obj;
            var terminals;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "ACDCTerminal";
            obj.connected = base.parse_element (/<cim:ACDCTerminal.connected>([\s\S]*?)<\/cim:ACDCTerminal.connected>/g, sub, context, true);
            obj.sequenceNumber = base.parse_element (/<cim:ACDCTerminal.sequenceNumber>([\s\S]*?)<\/cim:ACDCTerminal.sequenceNumber>/g, sub, context, true);
            obj.BusNameMarker = base.parse_attribute (/<cim:ACDCTerminal.BusNameMarker\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            if (null != obj.connected) obj.connected = base.to_boolean (obj.connected);
            if (null != obj.sequenceNumber) obj.sequenceNumber = Number (obj.sequenceNumber);
            terminals = context.parsed.ACDCTerminal;
            if (null == terminals)
                context.parsed.ACDCTerminal = terminals = {};
            terminals[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a BaseVoltage.
         * @param {Object} context - the file reading context
         * @param {Object} parsed.BaseVoltage - the LIST OF voltages
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_BaseVoltage (context, sub)
        {
            var obj;
            var voltages;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "BaseVoltage";
            obj.nominalVoltage = base.parse_element (/<cim:BaseVoltage.nominalVoltage>([\s\S]*?)<\/cim:BaseVoltage.nominalVoltage>/g, sub, context, true);
            voltages = context.parsed.BaseVoltage;
            if (null == voltages)
                context.parsed.BaseVoltage = voltages = {};
            voltages[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Bay.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_Bay (context, sub)
        {
            var obj;
            var bay;

            obj = parse_EquipmentContainer (context, sub);
            obj.cls = "Bay";
            obj.bayEnergyMeasFlag = base.parse_element (/<cim:Bay.bayEnergyMeasFlag>([\s\S]*?)<\/cim:Bay.bayEnergyMeasFlag>/g, sub, context, true);
            obj.bayPowerMeasFlag = base.parse_element (/<cim:Bay.bayPowerMeasFlag>([\s\S]*?)<\/cim:Bay.bayPowerMeasFlag>/g, sub, context, true);
            obj.breakerConfiguration = base.parse_attribute (/<cim:Bay.breakerConfiguration\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.bayPowerMeasFlag = base.parse_attribute (/<cim:Bay.bayPowerMeasFlag\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Substation = base.parse_attribute (/<cim:Bay.Substation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.VoltageLevel = base.parse_attribute (/<cim:Bay.VoltageLevel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            if (null != obj.bayEnergyMeasFlag)
                obj.bayEnergyMeasFlag = base.to_boolean (obj.bayEnergyMeasFlag);
            if (null != obj.bayPowerMeasFlag)
                obj.bayPowerMeasFlag = base.to_boolean (obj.bayPowerMeasFlag);
            bay = context.parsed.Bay;
            if (null == bay)
                context.parsed.Bay = bay = {};
            bay[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ConductingEquipment.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ConductingEquipment - the list of conducting equipment
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_ConductingEquipment (context, sub)
        {
            var obj;
            var equipment;

            obj = parse_Equipment (context, sub);
            obj.cls = "ConductingEquipment";
            obj.BaseVoltage = base.parse_attribute (/<cim:ConductingEquipment.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.GroundingAction = base.parse_attribute (/<cim:ConductingEquipment.GroundingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.JumpingAction = base.parse_attribute (/<cim:ConductingEquipment.JumpingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.SvStatus = base.parse_attribute (/<cim:ConductingEquipment.SvStatus\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            equipment = context.parsed.ConductingEquipment;
            if (null == equipment)
                context.parsed.ConductingEquipment = equipment = {};
            equipment[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ConnectivityNode.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ConnectivityNode - the list of connectivity nodes
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_ConnectivityNode (context, sub)
        {
            var obj;
            var nodes;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "ConnectivityNode";
            obj.ConnectivityNodeContainer = base.parse_attribute (/<cim:ConnectivityNode.ConnectivityNodeContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.TopologicalNode = base.parse_attribute (/<cim:ConnectivityNode.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            nodes = context.parsed.ConnectivityNode;
            if (null == nodes)
                context.parsed.ConnectivityNode = nodes = {};
            nodes[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ConnectivityNodeContainer.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ConnectivityNodeContainer - the list of connectivity node containers
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_ConnectivityNodeContainer (context, sub)
        {
            var obj;
            var containers;

            obj = parse_PowerSystemResource (context, sub);
            obj.cls = "ConnectivityNodeContainer";
            containers = context.parsed.ConnectivityNodeContainer;
            if (null == containers)
                context.parsed.ConnectivityNodeContainer = containers = {};
            containers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an Equipment.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Equipment - the list of equipment
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_Equipment (context, sub)
        {
            var obj;
            var equipment;

            obj = parse_PowerSystemResource (context, sub);
            obj.cls = "Equipment";
            obj.aggregate = base.parse_element (/<cim:Equipment.aggregate>([\s\S]*?)<\/cim:Equipment.aggregate>/g, sub, context, true);
            obj.normallyInService = base.parse_element (/<cim:Equipment.normallyInService>([\s\S]*?)<\/cim:Equipment.normallyInService>/g, sub, context, true);
            obj.EquipmentContainer = base.parse_attribute (/<cim:Equipment.EquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            equipment = context.parsed.Equipment;
            if (null == equipment)
                context.parsed.Equipment = equipment = {};
            equipment[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EquipmentContainer.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Equipment - the list of equipment containers
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_EquipmentContainer (context, sub)
        {
            var obj;
            var containers;

            obj = parse_ConnectivityNodeContainer (context, sub);
            obj.cls = "EquipmentContainer";
            containers = context.parsed.EquipmentContainer;
            if (null == containers)
                context.parsed.EquipmentContainer = containers = {};
            containers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an IdentifiedObject.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.IdentifiedObject - the list of IdentifiedObject elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_IdentifiedObject (context, sub)
        {
            var obj;
            var identified_objects;

            obj = base.parse_Element (context, sub);
            obj.cls = "IdentifiedObject";
            obj.aliasName = base.parse_element (/<cim:IdentifiedObject.aliasName>([\s\S]*?)<\/cim:IdentifiedObject.aliasName>/g, sub, context, true);
            obj.description = base.parse_element (/<cim:IdentifiedObject.description>([\s\S]*?)<\/cim:IdentifiedObject.description>/g, sub, context, true);
            obj.mRID = base.parse_element (/<cim:IdentifiedObject.mRID>([\s\S]*?)<\/cim:IdentifiedObject.mRID>/g, sub, context, true);
            obj.name = base.parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context, true);
            if (null == obj.mRID)
                obj.mRID = obj.id;
            if ((null != obj.mRID) && (obj.id != obj.mRID))
            {
                if ("undefined" != typeof (console))
                    console.log ("***Warning*** rdf:ID != mRID [" + obj.id + " != " + obj.mRID + "]");
                else
                    print ("***Warning*** rdf:ID != mRID [" + obj.id + " != " + obj.mRID + "]");
                obj.id = obj.mRID;
            }
            identified_objects = context.parsed.IdentifiedObject;
            if (null == identified_objects)
                context.parsed.IdentifiedObject = identified_objects = {};
            identified_objects[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Name.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Name - the list of Name elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_Name (context, sub)
        {
            var obj;
            var names;

            obj = base.parse_Element (context, sub);
            obj.cls = "Name";
            obj.name = base.parse_element (/<cim:Name.name>([\s\S]*?)<\/cim:Name.name>/g, sub, context, true);
            obj.IdentifiedObject = base.parse_attribute (/<cim:Name.IdentifiedObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.NameType = base.parse_attribute (/<cim:Name.NameType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            names = context.parsed.Name;
            if (null == names)
                context.parsed.Name = names = {};
            names[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a NameType.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.NameType - the list of NameType elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_NameType (context, sub)
        {
            var obj;
            var types;

            obj = base.parse_Element (context, sub);
            obj.cls = "NameType";
            obj.description = base.parse_element (/<cim:NameType.description>([\s\S]*?)<\/cim:NameType.description>/g, sub, context, true);
            obj.name = base.parse_element (/<cim:NameType.name>([\s\S]*?)<\/cim:NameType.name>/g, sub, context, true);
            obj.NameTypeAuthority = base.parse_attribute (/<cim:Name.NameTypeAuthority\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            types = context.parsed.NameType;
            if (null == types)
                context.parsed.NameType = types = {};
            types[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a NameTypeAuthority.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.NameTypeAuthority - the list of NameTypeAuthority elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_NameTypeAuthority (context, sub)
        {
            var obj;
            var authorities;

            obj = base.parse_Element (context, sub);
            obj.cls = "NameTypeAuthority";
            obj.description = base.parse_element (/<cim:NameTypeAuthority.description>([\s\S]*?)<\/cim:NameTypeAuthority.description>/g, sub, context, true);
            obj.name = base.parse_element (/<cim:NameTypeAuthority.name>([\s\S]*?)<\/cim:NameTypeAuthority.name>/g, sub, context, true);
            authorities = context.parsed.NameTypeAuthority;
            if (null == authorities)
                context.parsed.NameTypeAuthority = authorities = {};
            authorities[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PSRType.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PSRType - the list of PSRType elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_PSRType (context, sub)
        {
            var obj;
            var types;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "PSRType";
            types = context.parsed.PSRType;
            if (null == types)
                context.parsed.PSRType = types = {};
            types[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PowerSystemResource.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PowerSystemResource - the list of PowerSystemResource elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_PowerSystemResource (context, sub)
        {
            var obj;
            var resources;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "PowerSystemResource";
            obj.AssetDatasheet = base.parse_attribute (/<cim:PowerSystemResource.AssetDatasheet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Location = base.parse_attribute (/<cim:PowerSystemResource.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.PSRType = base.parse_attribute (/<cim:PowerSystemResource.PSRType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            resources = context.parsed.PowerSystemResource;
            if (null == resources)
                context.parsed.PowerSystemResource = resources = {};
            resources[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Substation.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Substation - the list of Substation elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_Substation (context, sub)
        {
            var obj;
            var stations;

            obj = parse_EquipmentContainer (context, sub);
            obj.cls = "Substation";
            obj.SubGeographicalRegion = base.parse_attribute (/<cim:Substation.SubGeographicalRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            stations = context.parsed.Substation;
            if (null == stations)
                context.parsed.Substation = stations = {};
            stations[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Terminal.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Terminal - the list of Terminal elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_Terminal (context, sub)
        {
            var obj;
            var terminals;

            obj = parse_ACDCTerminal (context, sub);
            obj.cls = "Terminal";
            obj.PhaseCode = base.parse_element (/<cim:Terminal.PhaseCode>([\s\S]*?)<\/cim:Terminal.PhaseCode>/g, sub, context, true);
            obj.Bushing = base.parse_attribute (/<cim:Terminal.Bushing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ConductingEquipment = base.parse_attribute (/<cim:Terminal.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ConnectivityNode = base.parse_attribute (/<cim:Terminal.ConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.SvPowerFlow = base.parse_attribute (/<cim:Terminal.SvPowerFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.TopologicalNode = base.parse_attribute (/<cim:Terminal.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            terminals = context.parsed.Terminal;
            if (null == terminals)
                context.parsed.Terminal = terminals = {};
            terminals[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a VoltageLevel.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.VoltageLevel - the list of VoltageLevel elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/core
         */
        function parse_VoltageLevel (context, sub)
        {
            var obj;
            var levels;

            obj = parse_EquipmentContainer (context, sub);
            obj.cls = "VoltageLevel";
            obj.highVoltageLimit = base.parse_element (/<cim:VoltageLevel.highVoltageLimit>([\s\S]*?)<\/cim:VoltageLevel.highVoltageLimit>/g, sub, context, true);
            obj.lowVoltageLimit = base.parse_element (/<cim:VoltageLevel.lowVoltageLimit>([\s\S]*?)<\/cim:VoltageLevel.lowVoltageLimit>/g, sub, context, true);
            obj.BaseVoltage = base.parse_attribute (/<cim:VoltageLevel.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Substation = base.parse_attribute (/<cim:VoltageLevel.Substation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            levels = context.parsed.VoltageLevel;
            if (null == levels)
                context.parsed.VoltageLevel = levels = {};
            levels[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ACDCTerminal: parse_ACDCTerminal,
                parse_BaseVoltage: parse_BaseVoltage,
                parse_Bay: parse_Bay,
                parse_ConductingEquipment: parse_ConductingEquipment,
                parse_ConnectivityNode: parse_ConnectivityNode,
                parse_ConnectivityNodeContainer: parse_ConnectivityNodeContainer,
                parse_Equipment: parse_Equipment,
                parse_EquipmentContainer: parse_EquipmentContainer,
                parse_IdentifiedObject: parse_IdentifiedObject,
                parse_Name: parse_Name,
                parse_NameType: parse_NameType,
                parse_NameTypeAuthority: parse_NameTypeAuthority,
                parse_PSRType: parse_PSRType,
                parse_PowerSystemResource: parse_PowerSystemResource,
                parse_Substation: parse_Substation,
                parse_Terminal: parse_Terminal,
                parse_VoltageLevel: parse_VoltageLevel
            }
        );

    }
);
