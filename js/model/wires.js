/**
 * @fileOverview Package Wires CIM model.
 * @name model/wires
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/core"],
    /**
     * @summary Package Wires CIM model.
     * @description
     * @name model/wires
     * @exports model/wires
     * @version 1.0
     */
    function (base, core)
    {
        /*
         * Package Wires
         */

        /**
         * Parse a ACLineSegment.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ACLineSegment - the list of ACLineSegment elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_ACLineSegment (context, sub)
        {
            var obj;
            var lines;

            obj = parse_Conductor (context, sub);
            obj.cls = "ACLineSegment";
            obj.b0ch = base.parse_element (/<cim:ACLineSegment.b0ch>([\s\S]*?)<\/cim:ACLineSegment.b0ch>/g, sub, context, true);
            obj.bch = base.parse_element (/<cim:ACLineSegment.bch>([\s\S]*?)<\/cim:ACLineSegment.bch>/g, sub, context, true);
            obj.g0ch = base.parse_element (/<cim:ACLineSegment.g0ch>([\s\S]*?)<\/cim:ACLineSegment.g0ch>/g, sub, context, true);
            obj.gch = base.parse_element (/<cim:ACLineSegment.gch>([\s\S]*?)<\/cim:ACLineSegment.gch>/g, sub, context, true);
            obj.r0 = base.parse_element (/<cim:ACLineSegment.r0>([\s\S]*?)<\/cim:ACLineSegment.r0>/g, sub, context, true);
            obj.r = base.parse_element (/<cim:ACLineSegment.r>([\s\S]*?)<\/cim:ACLineSegment.r>/g, sub, context, true);
            obj.shortCircuitEndTemperature = base.parse_element (/<cim:ACLineSegment.shortCircuitEndTemperature>([\s\S]*?)<\/cim:ACLineSegment.shortCircuitEndTemperature>/g, sub, context, true);
            obj.x0 = base.parse_element (/<cim:ACLineSegment.x0>([\s\S]*?)<\/cim:ACLineSegment.x0>/g, sub, context, true);
            obj.x = base.parse_element (/<cim:ACLineSegment.x>([\s\S]*?)<\/cim:ACLineSegment.x>/g, sub, context, true);
            obj.LineGroundingAction = base.parse_attribute (/<cim:ACLineSegment.LineGroundingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.LineJumpingAction = base.parse_attribute (/<cim:ACLineSegment.LineJumpingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.perLengthImpedance = base.parse_attribute (/<cim:ACLineSegment.perLengthImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            lines = context.parsed.ACLineSegment;
            if (null == lines)
                context.parsed.ACLineSegment = lines = {};
            lines[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ACLineSegmentPhase.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ACLineSegmentPhase - the list of ACLineSegmentPhase elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_ACLineSegmentPhase (context, sub)
        {
            var obj;
            var phases;

            obj = core.parse_PowerSystemResource (context, sub);
            obj.cls = "ACLineSegmentPhase";
            obj.phase = base.parse_attribute (/<cim:ACLineSegmentPhase.phase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ACLineSegment = base.parse_attribute (/<cim:ACLineSegmentPhase.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            phases = context.parsed.ACLineSegmentPhase;
            if (null == phases)
                context.parsed.ACLineSegmentPhase = phases = {};
            phases[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a BusbarSection.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.BusbarSection - the list of BusbarSection elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_BusbarSection (context, sub)
        {
            var obj;
            var sections;

            obj = parse_Connector (context, sub);
            obj.cls = "BusbarSection";
            obj.ipMax = base.parse_element (/<cim:BusbarSection.ipMax>([\s\S]*?)<\/cim:BusbarSection.ipMax>/g, sub, context, true);
            obj.VoltageControlZone = base.parse_attribute (/<cim:BusbarSection.VoltageControlZone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            sections = context.parsed.BusbarSection;
            if (null == sections)
                context.parsed.BusbarSection = sections = {};
            sections[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Conductor.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Conductor - the list of Conductor elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_Conductor (context, sub)
        {
            var obj;
            var conductors;

            obj = core.parse_ConductingEquipment (context, sub);
            obj.cls = "Conductor";
            obj.length = base.parse_element (/<cim:Conductor.length>([\s\S]*?)<\/cim:Conductor.length>/g, sub, context, true);
            if (null != obj.length)
                obj.length = Number (obj.length);
            conductors = context.parsed.Conductor;
            if (null == conductors)
                context.parsed.Conductor = conductors = {};
            conductors[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Connector.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Connector - the list of Connector elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_Connector (context, sub)
        {
            var obj;
            var conductors;

            obj = core.parse_ConductingEquipment (context, sub);
            obj.cls = "Connector";
            conductors = context.parsed.Connector;
            if (null == conductors)
                context.parsed.Connector = conductors = {};
            conductors[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Disconnector.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Disconnector - the list of Disconnector elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_Disconnector (context, sub)
        {
            var obj;
            var disconnectors;

            obj = parse_Switch (context, sub);
            obj.cls = "Disconnector";
            disconnectors = context.parsed.Disconnector;
            if (null == disconnectors)
                context.parsed.Disconnector = disconnectors = {};
            disconnectors[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a EnergyConsumer.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EnergyConsumer - the list of EnergyConsumer elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_EnergyConsumer (context, sub)
        {
            var obj;
            var consumers;

            obj = core.parse_ConductingEquipment (context, sub);
            obj.cls = "EnergyConsumer";
            obj.customerCount = base.parse_element (/<cim:EnergyConsumer.customerCount>([\s\S]*?)<\/cim:EnergyConsumer.customerCount>/g, sub, context, true);
            obj.grounded = base.parse_element (/<cim:EnergyConsumer.grounded>([\s\S]*?)<\/cim:EnergyConsumer.grounded>/g, sub, context, true);
            obj.p = base.parse_element (/<cim:EnergyConsumer.p>([\s\S]*?)<\/cim:EnergyConsumer.p>/g, sub, context, true);
            obj.pfixed = base.parse_element (/<cim:EnergyConsumer.pfixed>([\s\S]*?)<\/cim:EnergyConsumer.pfixed>/g, sub, context, true);
            obj.pfixedPct = base.parse_element (/<cim:EnergyConsumer.pfixedPct>([\s\S]*?)<\/cim:EnergyConsumer.pfixedPct>/g, sub, context, true);
            obj.phaseConnection = base.parse_attribute (/<cim:EnergyConsumer.phaseConnection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.q = base.parse_element (/<cim:EnergyConsumer.q>([\s\S]*?)<\/cim:EnergyConsumer.q>/g, sub, context, true);
            obj.qfixed = base.parse_element (/<cim:EnergyConsumer.qfixed>([\s\S]*?)<\/cim:EnergyConsumer.qfixed>/g, sub, context, true);
            obj.qfixedPct = base.parse_element (/<cim:EnergyConsumer.qfixedPct>([\s\S]*?)<\/cim:EnergyConsumer.qfixedPct>/g, sub, context, true);
            obj.LoadDynamics = base.parse_attribute (/<cim:EnergyConsumer.LoadDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.LoadResponse = base.parse_attribute (/<cim:EnergyConsumer.LoadResponse\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.PowerCutZone = base.parse_attribute (/<cim:EnergyConsumer.PowerCutZone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            consumers = context.parsed.EnergyConsumer;
            if (null == consumers)
                context.parsed.EnergyConsumer = consumers = {};
            consumers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Fuse.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Fuse - the list of Fuse elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_Fuse (context, sub)
        {
            var obj;
            var fuses;

            obj = parse_Switch (context, sub);
            obj.cls = "Fuse";
            fuses = context.parsed.Fuse;
            if (null == fuses)
                context.parsed.Fuse = fuses = {};
            fuses[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a GroundDisconnector.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.GroundDisconnector - the list of GroundDisconnector elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_GroundDisconnector (context, sub)
        {
            var obj;
            var disconnectors;

            obj = parse_Switch (context, sub);
            obj.cls = "GroundDisconnector";
            disconnectors = context.parsed.GroundDisconnector;
            if (null == disconnectors)
                context.parsed.GroundDisconnector = disconnectors = {};
            disconnectors[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Jumper.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Jumper - the list of Jumper elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_Jumper (context, sub)
        {
            var obj;
            var jumpers;

            obj = parse_Switch (context, sub);
            obj.cls = "Jumper";
            obj.JumperAction = base.parse_attribute (/<cim:Jumper.JumperAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            jumpers = context.parsed.Jumper;
            if (null == jumpers)
                context.parsed.Jumper = jumpers = {};
            jumpers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Junction.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Junction - the list of Junction elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_Junction (context, sub)
        {
            var obj;
            var junctions;

            obj = parse_Connector (context, sub);
            obj.cls = "Junction";
            junctions = context.parsed.Junction;
            if (null == junctions)
                context.parsed.Junction = junctions = {};
            junctions[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Line.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Line - the list of Line elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_Line (context, sub)
        {
            var obj;
            var lines;

            obj = core.parse_EquipmentContainer (context, sub);
            obj.cls = "Line";
            obj.Region = base.parse_attribute (/<cim:Line.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            lines = context.parsed.Line;
            if (null == lines)
                context.parsed.Line = lines = {};
            lines[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a LoadBreakSwitch.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.LoadBreakSwitch - the list of LoadBreakSwitch elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_LoadBreakSwitch (context, sub)
        {
            var obj;
            var switches;

            obj = parse_ProtectedSwitch (context, sub);
            obj.cls = "LoadBreakSwitch";
            switches = context.parsed.LoadBreakSwitch;
            if (null == switches)
                context.parsed.LoadBreakSwitch = switches = {};
            switches[obj.id] = obj;

            return (obj);
        }


        /**
         * Parse a PowerTransformer.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PowerTransformer - the list of PowerTransformer elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_PowerTransformer (context, sub)
        {
            var obj;
            var transformers;

            obj = core.parse_ConductingEquipment (context, sub);
            obj.cls = "PowerTransformer";
            obj.beforeShCircuitHighestOperatingCurrent = base.parse_element (/<cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent>([\s\S]*?)<\/cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent>/g, sub, context, true);
            obj.beforeShCircuitHighestOperatingVoltage = base.parse_element (/<cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage>([\s\S]*?)<\/cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage>/g, sub, context, true);
            obj.beforeShortCircuitAnglePf = base.parse_element (/<cim:PowerTransformer.beforeShortCircuitAnglePf>([\s\S]*?)<\/cim:PowerTransformer.beforeShortCircuitAnglePf>/g, sub, context, true);
            obj.highSideMinOperatingU = base.parse_element (/<cim:PowerTransformer.highSideMinOperatingU>([\s\S]*?)<\/cim:PowerTransformer.highSideMinOperatingU>/g, sub, context, true);
            obj.isPartOfGeneratorUnit = base.parse_element (/<cim:PowerTransformer.isPartOfGeneratorUnit>([\s\S]*?)<\/cim:PowerTransformer.isPartOfGeneratorUnit>/g, sub, context, true);
            obj.operationalValuesConsidered = base.parse_element (/<cim:PowerTransformer.operationalValuesConsidered>([\s\S]*?)<\/cim:PowerTransformer.operationalValuesConsidered>/g, sub, context, true);
            obj.vectorGroup = base.parse_element (/<cim:PowerTransformer.vectorGroup>([\s\S]*?)<\/cim:PowerTransformer.vectorGroup>/g, sub, context, true);
            obj.qfixedPct = base.parse_element (/<cim:PowerTransformer.qfixedPct>([\s\S]*?)<\/cim:PowerTransformer.qfixedPct>/g, sub, context, true);
            obj.qfixedPct = base.parse_element (/<cim:PowerTransformer.qfixedPct>([\s\S]*?)<\/cim:PowerTransformer.qfixedPct>/g, sub, context, true);
            obj.Region = base.parse_attribute (/<cim:PowerTransformer.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            transformers = context.parsed.PowerTransformer;
            if (null == transformers)
                context.parsed.PowerTransformer = transformers = {};
            transformers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PowerTransformerEnd.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PowerTransformerEnd - the list of PowerTransformerEnd elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_PowerTransformerEnd (context, sub)
        {
            var obj;
            var ends;

            obj = parse_TransformerEnd (context, sub);
            obj.cls = "PowerTransformerEnd";
            obj.b0 = base.parse_element (/<cim:PowerTransformerEnd.b0>([\s\S]*?)<\/cim:PowerTransformerEnd.b0>/g, sub, context, true);
            obj.b = base.parse_element (/<cim:PowerTransformerEnd.b>([\s\S]*?)<\/cim:PowerTransformerEnd.b>/g, sub, context, true);
            obj.connectionKind = base.parse_attribute (/<cim:PowerTransformerEnd.connectionKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.g0 = base.parse_element (/<cim:PowerTransformerEnd.g0>([\s\S]*?)<\/cim:PowerTransformerEnd.g0>/g, sub, context, true);
            obj.g = base.parse_element (/<cim:PowerTransformerEnd.g>([\s\S]*?)<\/cim:PowerTransformerEnd.g>/g, sub, context, true);
            obj.phaseAngleClock = base.parse_element (/<cim:PowerTransformerEnd.phaseAngleClock>([\s\S]*?)<\/cim:PowerTransformerEnd.phaseAngleClock>/g, sub, context, true);
            obj.r0 = base.parse_element (/<cim:PowerTransformerEnd.r0>([\s\S]*?)<\/cim:PowerTransformerEnd.r0>/g, sub, context, true);
            obj.r = base.parse_element (/<cim:PowerTransformerEnd.r>([\s\S]*?)<\/cim:PowerTransformerEnd.r>/g, sub, context, true);
            obj.ratedS = base.parse_element (/<cim:PowerTransformerEnd.ratedS>([\s\S]*?)<\/cim:PowerTransformerEnd.ratedS>/g, sub, context, true);
            obj.ratedU = base.parse_element (/<cim:PowerTransformerEnd.ratedU>([\s\S]*?)<\/cim:PowerTransformerEnd.ratedU>/g, sub, context, true);
            obj.x0 = base.parse_element (/<cim:PowerTransformerEnd.x0>([\s\S]*?)<\/cim:PowerTransformerEnd.x0>/g, sub, context, true);
            obj.x = base.parse_element (/<cim:PowerTransformerEnd.x>([\s\S]*?)<\/cim:PowerTransformerEnd.x>/g, sub, context, true);
            obj.PowerTransformer = base.parse_attribute (/<cim:PowerTransformerEnd.PowerTransformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            ends = context.parsed.PowerTransformerEnd;
            if (null == ends)
                context.parsed.PowerTransformerEnd = ends = {};
            ends[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ProtectedSwitch.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ProtectedSwitch - the list of ProtectedSwitch elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_ProtectedSwitch (context, sub)
        {
            var obj;
            var switches;

            obj = parse_Switch (context, sub);
            obj.cls = "ProtectedSwitch";
            obj.breakingCapacity = base.parse_element (/<cim:ProtectedSwitch.breakingCapacity>([\s\S]*?)<\/cim:ProtectedSwitch.breakingCapacity>/g, sub, context, true);
            switches = context.parsed.ProtectedSwitch;
            if (null == switches)
                context.parsed.ProtectedSwitch = switches = {};
            switches[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Switch.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Switch - the list of Switch elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_Switch (context, sub)
        {
            var obj;
            var switches;

            obj = core.parse_ConductingEquipment (context, sub);
            obj.cls = "Switch";
            obj.normalOpen = base.parse_element (/<cim:Switch.normalOpen>([\s\S]*?)<\/cim:Switch.normalOpen>/g, sub, context, true);
            obj.open = base.parse_element (/<cim:Switch.open>([\s\S]*?)<\/cim:Switch.open>/g, sub, context, true);
            obj.ratedCurrent = base.parse_element (/<cim:Switch.ratedCurrent>([\s\S]*?)<\/cim:Switch.ratedCurrent>/g, sub, context, true);
            obj.retained = base.parse_element (/<cim:Switch.retained>([\s\S]*?)<\/cim:Switch.retained>/g, sub, context, true);
            obj.switchOnCount = base.parse_element (/<cim:Switch.switchOnCount>([\s\S]*?)<\/cim:Switch.switchOnCount>/g, sub, context, true);
            obj.switchOnDate = base.parse_element (/<cim:Switch.switchOnDate>([\s\S]*?)<\/cim:Switch.switchOnDate>/g, sub, context, true);
            obj.CompositeSwitch = base.parse_attribute (/<cim:Switch.CompositeSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Outage = base.parse_attribute (/<cim:Switch.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.SwitchAction = base.parse_attribute (/<cim:Switch.SwitchAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            switches = context.parsed.Switch;
            if (null == switches)
                context.parsed.Switch = switches = {};
            switches[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a TransformerEnd.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.TransformerEnd - the list of TransformerEnd elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_TransformerEnd (context, sub)
        {
            var obj;
            var ends;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerEnd";
            obj.bmagSat = base.parse_element (/<cim:TransformerEnd.bmagSat>([\s\S]*?)<\/cim:TransformerEnd.bmagSat>/g, sub, context, true);
            obj.endNumber = base.parse_element (/<cim:TransformerEnd.endNumber>([\s\S]*?)<\/cim:TransformerEnd.endNumber>/g, sub, context, true);
            obj.grounded = base.parse_element (/<cim:TransformerEnd.grounded>([\s\S]*?)<\/cim:TransformerEnd.grounded>/g, sub, context, true);
            obj.magBaseU = base.parse_element (/<cim:TransformerEnd.magBaseU>([\s\S]*?)<\/cim:TransformerEnd.magBaseU>/g, sub, context, true);
            obj.magSatFlux = base.parse_element (/<cim:TransformerEnd.magSatFlux>([\s\S]*?)<\/cim:TransformerEnd.magSatFlux>/g, sub, context, true);
            obj.rground = base.parse_element (/<cim:TransformerEnd.rground>([\s\S]*?)<\/cim:TransformerEnd.rground>/g, sub, context, true);
            obj.xground = base.parse_element (/<cim:TransformerEnd.bmagSat>([\s\S]*?)<\/cim:TransformerEnd.xground>/g, sub, context, true);
            obj.BaseVoltage = base.parse_attribute (/<cim:TransformerEnd.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.CoreAdmittance = base.parse_attribute (/<cim:TransformerEnd.CoreAdmittance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.PhaseTapChanger = base.parse_attribute (/<cim:TransformerEnd.PhaseTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.StarImpedance = base.parse_attribute (/<cim:TransformerEnd.StarImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Terminal = base.parse_attribute (/<cim:TransformerEnd.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.RatioTapChanger = base.parse_attribute (/<cim:TransformerEnd.RatioTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.RatioTapChanger = base.parse_attribute (/<cim:TransformerEnd.RatioTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.RatioTapChanger = base.parse_attribute (/<cim:TransformerEnd.RatioTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            ends = context.parsed.TransformerEnd;
            if (null == ends)
                context.parsed.TransformerEnd = ends = {};
            ends[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a TransformerTank.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.TransformerTank - the list of TransformerTank elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_TransformerTank (context, sub)
        {
            var obj;
            var tanks;

            obj = core.parse_Equipment (context, sub);
            obj.cls = "TransformerTank";
            obj.PowerTransformer = base.parse_attribute (/<cim:TransformerTank.PowerTransformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            tanks = context.parsed.TransformerTank;
            if (null == tanks)
                context.parsed.TransformerTank = tanks = {};
            tanks[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a TransformerTankEnd.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.TransformerTankEnd - the list of TransformerTankEnd elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/wires
         */
        function parse_TransformerTankEnd (context, sub)
        {
            var obj;
            var tanks;

            obj = parse_TransformerEnd (context, sub);
            obj.cls = "TransformerTankEnd";
            obj.TransformerTank = base.parse_attribute (/<cim:TransformerTankEnd.TransformerTank\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            tanks = context.parsed.TransformerTankEnd;
            if (null == tanks)
                context.parsed.TransformerTankEnd = tanks = {};
            tanks[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ACLineSegment: parse_ACLineSegment,
                parse_ACLineSegmentPhase: parse_ACLineSegmentPhase,
                parse_BusbarSection: parse_BusbarSection,
                parse_Conductor: parse_Conductor,
                parse_Connector: parse_Connector,
                parse_Disconnector: parse_Disconnector,
                parse_EnergyConsumer: parse_EnergyConsumer,
                parse_Fuse: parse_Fuse,
                parse_GroundDisconnector: parse_GroundDisconnector,
                parse_Jumper: parse_Jumper,
                parse_Junction: parse_Junction,
                parse_Line: parse_Line,
                parse_LoadBreakSwitch: parse_LoadBreakSwitch,
                parse_PowerTransformer: parse_PowerTransformer,
                parse_PowerTransformerEnd: parse_PowerTransformerEnd,
                parse_ProtectedSwitch: parse_ProtectedSwitch,
                parse_Switch: parse_Switch,
                parse_TransformerEnd: parse_TransformerEnd,
                parse_TransformerTank: parse_TransformerTank,
                parse_TransformerTankEnd: parse_TransformerTankEnd
            }
        );
    }
);
