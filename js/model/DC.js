define
(
    ["model/base", "model/Core", "model/Wires"],
    /**
     * This package contains model for direct current equipment and controls.
     */
    function (base, Core, Wires)
    {

        /**
         * DC nodes are points where terminals of DC conducting equipment are connected together with zero impedance.
         */
        function parse_DCNode (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DCNode";
            /**
             * See association end ConnectivityNode.
             * TopologicalNode.
             */
            obj["DCTopologicalNode"] = base.parse_attribute (/<cim:DCNode.DCTopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["DCEquipmentContainer"] = base.parse_attribute (/<cim:DCNode.DCEquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DCNode;
            if (null == bucket)
                context.parsed.DCNode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An electrically connected subset of the network.
         * DC topological islands can change as the current network state changes: e.g. due to
         */
        function parse_DCTopologicalIsland (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DCTopologicalIsland";
            bucket = context.parsed.DCTopologicalIsland;
            if (null == bucket)
                context.parsed.DCTopologicalIsland = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Active power control modes for HVDC line operating as Current Source Converter.
         */
        function parse_CsPpccControlKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CsPpccControlKind";
            /**
             * Active power control at AC side.
             */
            obj["activePower"] = base.parse_element (/<cim:CsPpccControlKind.activePower>([\s\S]*?)<\/cim:CsPpccControlKind.activePower>/g, sub, context, true);
            /**
             * DC voltage control.
             */
            obj["dcVoltage"] = base.parse_element (/<cim:CsPpccControlKind.dcVoltage>([\s\S]*?)<\/cim:CsPpccControlKind.dcVoltage>/g, sub, context, true);
            /**
             * DC current control
             */
            obj["dcCurrent"] = base.parse_element (/<cim:CsPpccControlKind.dcCurrent>([\s\S]*?)<\/cim:CsPpccControlKind.dcCurrent>/g, sub, context, true);
            bucket = context.parsed.CsPpccControlKind;
            if (null == bucket)
                context.parsed.CsPpccControlKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * DC side of the voltage source converter (VSC).
         */
        function parse_VsConverter (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ACDCConverter (context, sub);
            obj.cls = "VsConverter";
            /**
             * Kind of control of real power and/or DC voltage.
             */
            obj["pPccControl"] = base.parse_element (/<cim:VsConverter.pPccControl>([\s\S]*?)<\/cim:VsConverter.pPccControl>/g, sub, context, true);
            /**
             * Reactive power sharing factor among parallel converters on Uac control.
             */
            obj["qShare"] = base.parse_element (/<cim:VsConverter.qShare>([\s\S]*?)<\/cim:VsConverter.qShare>/g, sub, context, true);
            /**
             * Reactive power injection target in AC grid, at point of common coupling.
             */
            obj["targetQpcc"] = base.parse_element (/<cim:VsConverter.targetQpcc>([\s\S]*?)<\/cim:VsConverter.targetQpcc>/g, sub, context, true);
            /**
             * Voltage target in AC grid, at point of common coupling.
             */
            obj["targetUpcc"] = base.parse_element (/<cim:VsConverter.targetUpcc>([\s\S]*?)<\/cim:VsConverter.targetUpcc>/g, sub, context, true);
            /**
             * Compensation constant.
             * Used to compensate for voltage drop when controlling voltage at a distant bus.
             */
            obj["droopCompensation"] = base.parse_element (/<cim:VsConverter.droopCompensation>([\s\S]*?)<\/cim:VsConverter.droopCompensation>/g, sub, context, true);
            /**
             * Droop constant; pu value is obtained as D [kV/MW] x Sb / Ubdc.
             */
            obj["droop"] = base.parse_element (/<cim:VsConverter.droop>([\s\S]*?)<\/cim:VsConverter.droop>/g, sub, context, true);
            /**
             * Angle between uf and uc.
             * Converter state variable used in power flow.
             */
            obj["delta"] = base.parse_element (/<cim:VsConverter.delta>([\s\S]*?)<\/cim:VsConverter.delta>/g, sub, context, true);
            /**
             * Line-to-line voltage on the valve side of the converter transformer.
             * Converter state variable, result from power flow.
             */
            obj["uf"] = base.parse_element (/<cim:VsConverter.uf>([\s\S]*?)<\/cim:VsConverter.uf>/g, sub, context, true);
            /**
             * The maximum current through a valve.
             * This current limit is the basis for calculating the capability diagram. VSC  configuration data.
             */
            obj["maxValveCurrent"] = base.parse_element (/<cim:VsConverter.maxValveCurrent>([\s\S]*?)<\/cim:VsConverter.maxValveCurrent>/g, sub, context, true);
            /**
             * The max quotient between the AC converter voltage (Uc) and DC voltage (Ud).
             * A factor typically less than 1. VSC configuration data used in power flow.
             */
            obj["maxModulationIndex"] = base.to_float (base.parse_element (/<cim:VsConverter.maxModulationIndex>([\s\S]*?)<\/cim:VsConverter.maxModulationIndex>/g, sub, context, true));
            obj["qPccControl"] = base.parse_element (/<cim:VsConverter.qPccControl>([\s\S]*?)<\/cim:VsConverter.qPccControl>/g, sub, context, true);
            /**
             * Capability curve of this converter.
             */
            obj["CapabilityCurve"] = base.parse_attribute (/<cim:VsConverter.CapabilityCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.VsConverter;
            if (null == bucket)
                context.parsed.VsConverter = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The operating mode of an HVDC bipole.
         */
        function parse_DCConverterOperatingModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DCConverterOperatingModeKind";
            /**
             * Bipolar operation.
             */
            obj["bipolar"] = base.parse_element (/<cim:DCConverterOperatingModeKind.bipolar>([\s\S]*?)<\/cim:DCConverterOperatingModeKind.bipolar>/g, sub, context, true);
            /**
             * Monopolar operation with metallic return
             */
            obj["monopolarMetallicReturn"] = base.parse_element (/<cim:DCConverterOperatingModeKind.monopolarMetallicReturn>([\s\S]*?)<\/cim:DCConverterOperatingModeKind.monopolarMetallicReturn>/g, sub, context, true);
            /**
             * Monopolar operation with ground return
             */
            obj["monopolarGroundReturn"] = base.parse_element (/<cim:DCConverterOperatingModeKind.monopolarGroundReturn>([\s\S]*?)<\/cim:DCConverterOperatingModeKind.monopolarGroundReturn>/g, sub, context, true);
            bucket = context.parsed.DCConverterOperatingModeKind;
            if (null == bucket)
                context.parsed.DCConverterOperatingModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A disconnector within a DC system.
         */
        function parse_DCDisconnector (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCSwitch (context, sub);
            obj.cls = "DCDisconnector";
            bucket = context.parsed.DCDisconnector;
            if (null == bucket)
                context.parsed.DCDisconnector = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_VsQpccControlKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "VsQpccControlKind";
            obj["reactivePcc"] = base.parse_element (/<cim:VsQpccControlKind.reactivePcc>([\s\S]*?)<\/cim:VsQpccControlKind.reactivePcc>/g, sub, context, true);
            obj["voltagePcc"] = base.parse_element (/<cim:VsQpccControlKind.voltagePcc>([\s\S]*?)<\/cim:VsQpccControlKind.voltagePcc>/g, sub, context, true);
            obj["powerFactorPcc"] = base.parse_element (/<cim:VsQpccControlKind.powerFactorPcc>([\s\S]*?)<\/cim:VsQpccControlKind.powerFactorPcc>/g, sub, context, true);
            bucket = context.parsed.VsQpccControlKind;
            if (null == bucket)
                context.parsed.VsQpccControlKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A series device within the DC system, typically a reactor used for filtering or smoothing.
         * Needed for transient and short circuit studies.
         */
        function parse_DCSeriesDevice (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCConductingEquipment (context, sub);
            obj.cls = "DCSeriesDevice";
            /**
             * Resistance of the DC device.
             */
            obj["resistance"] = base.parse_element (/<cim:DCSeriesDevice.resistance>([\s\S]*?)<\/cim:DCSeriesDevice.resistance>/g, sub, context, true);
            /**
             * Inductance of the device.
             */
            obj["inductance"] = base.parse_element (/<cim:DCSeriesDevice.inductance>([\s\S]*?)<\/cim:DCSeriesDevice.inductance>/g, sub, context, true);
            /**
             * Rated DC device voltage.
             * Converter configuration data used in power flow.
             */
            obj["ratedUdc"] = base.parse_element (/<cim:DCSeriesDevice.ratedUdc>([\s\S]*?)<\/cim:DCSeriesDevice.ratedUdc>/g, sub, context, true);
            bucket = context.parsed.DCSeriesDevice;
            if (null == bucket)
                context.parsed.DCSeriesDevice = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An electrical connection point at a piece of DC conducting equipment.
         * DC terminals are connected at one physical DC node that may have multiple DC terminals connected. A DC node is similar to an AC connectivity node. The model enforces that DC connections are distinct from AC connections.
         */
        function parse_DCBaseTerminal (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ACDCTerminal (context, sub);
            obj.cls = "DCBaseTerminal";
            obj["DCNode"] = base.parse_attribute (/<cim:DCBaseTerminal.DCNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * See association end Terminal.
             * TopologicalNode.
             */
            obj["DCTopologicalNode"] = base.parse_attribute (/<cim:DCBaseTerminal.DCTopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DCBaseTerminal;
            if (null == bucket)
                context.parsed.DCBaseTerminal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A busbar within a DC system.
         */
        function parse_DCBusbar (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCConductingEquipment (context, sub);
            obj.cls = "DCBusbar";
            bucket = context.parsed.DCBusbar;
            if (null == bucket)
                context.parsed.DCBusbar = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A unit with valves for three phases, together with unit control equipment, essential protective and switching devices, DC storage capacitors, phase reactors and auxiliaries, if any, used for conversion.
         */
        function parse_ACDCConverter (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "ACDCConverter";
            /**
             * Base apparent power of the converter pole.
             */
            obj["baseS"] = base.parse_element (/<cim:ACDCConverter.baseS>([\s\S]*?)<\/cim:ACDCConverter.baseS>/g, sub, context, true);
            /**
             * Switching losses, relative to the base apparent power 'baseS'.
             * Refer to poleLossP.
             */
            obj["switchingLoss"] = base.parse_element (/<cim:ACDCConverter.switchingLoss>([\s\S]*?)<\/cim:ACDCConverter.switchingLoss>/g, sub, context, true);
            /**
             * Real power injection target in AC grid, at point of common coupling.
             */
            obj["targetPpcc"] = base.parse_element (/<cim:ACDCConverter.targetPpcc>([\s\S]*?)<\/cim:ACDCConverter.targetPpcc>/g, sub, context, true);
            /**
             * Target value for DC voltage magnitude.
             */
            obj["targetUdc"] = base.parse_element (/<cim:ACDCConverter.targetUdc>([\s\S]*?)<\/cim:ACDCConverter.targetUdc>/g, sub, context, true);
            /**
             * Converter DC current, also called Id.
             * Converter state variable, result from power flow.
             */
            obj["idc"] = base.parse_element (/<cim:ACDCConverter.idc>([\s\S]*?)<\/cim:ACDCConverter.idc>/g, sub, context, true);
            /**
             * Active power loss in pole at no power transfer.
             * Converter configuration data used in power flow.
             */
            obj["idleLoss"] = base.parse_element (/<cim:ACDCConverter.idleLoss>([\s\S]*?)<\/cim:ACDCConverter.idleLoss>/g, sub, context, true);
            /**
             * The maximum voltage on the DC side at which the converter should operate.
             * Converter configuration data used in power flow.
             */
            obj["maxUdc"] = base.parse_element (/<cim:ACDCConverter.maxUdc>([\s\S]*?)<\/cim:ACDCConverter.maxUdc>/g, sub, context, true);
            /**
             * Min allowed converter DC voltage.
             * Converter configuration data used in power flow.
             */
            obj["minUdc"] = base.parse_element (/<cim:ACDCConverter.minUdc>([\s\S]*?)<\/cim:ACDCConverter.minUdc>/g, sub, context, true);
            /**
             * The active power loss at a DC Pole 
            = idleLoss + switchingLoss*|Idc| + resitiveLoss*Idc^2
            For lossless operation Pdc=Pac
            For rectifier operation with losses Pdc=Pac-lossP
            For inverter operation with losses Pdc=Pac+lossP
             * Converter state variable used in power flow.
             */
            obj["poleLossP"] = base.parse_element (/<cim:ACDCConverter.poleLossP>([\s\S]*?)<\/cim:ACDCConverter.poleLossP>/g, sub, context, true);
            /**
             * Rated converter DC voltage, also called UdN.
             * Converter configuration data used in power flow.
             */
            obj["ratedUdc"] = base.parse_element (/<cim:ACDCConverter.ratedUdc>([\s\S]*?)<\/cim:ACDCConverter.ratedUdc>/g, sub, context, true);
            /**
             * Converter configuration data used in power flow.
             * Refer to poleLossP.
             */
            obj["resistiveLoss"] = base.parse_element (/<cim:ACDCConverter.resistiveLoss>([\s\S]*?)<\/cim:ACDCConverter.resistiveLoss>/g, sub, context, true);
            /**
             * Line-to-line converter voltage, the voltage at the AC side of the valve.
             * Converter state variable, result from power flow.
             */
            obj["uc"] = base.parse_element (/<cim:ACDCConverter.uc>([\s\S]*?)<\/cim:ACDCConverter.uc>/g, sub, context, true);
            /**
             * Converter voltage at the DC side, also called Ud.
             * Converter state variable, result from power flow.
             */
            obj["udc"] = base.parse_element (/<cim:ACDCConverter.udc>([\s\S]*?)<\/cim:ACDCConverter.udc>/g, sub, context, true);
            /**
             * Valve threshold voltage, also called Uvalve.
             * Forward voltage drop when the valve is conducting. Used in loss calculations, i.e. the switchLoss depends on numberOfValves * valveU0.
             */
            obj["valveU0"] = base.parse_element (/<cim:ACDCConverter.valveU0>([\s\S]*?)<\/cim:ACDCConverter.valveU0>/g, sub, context, true);
            /**
             * Number of valves in the converter.
             * Used in loss calculations.
             */
            obj["numberOfValves"] = base.parse_element (/<cim:ACDCConverter.numberOfValves>([\s\S]*?)<\/cim:ACDCConverter.numberOfValves>/g, sub, context, true);
            /**
             * Active power at the point of common coupling.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["p"] = base.parse_element (/<cim:ACDCConverter.p>([\s\S]*?)<\/cim:ACDCConverter.p>/g, sub, context, true);
            /**
             * Reactive power at the point of common coupling.
             * Load sign convention is used, i.e. positive sign means flow out from a node.
             */
            obj["q"] = base.parse_element (/<cim:ACDCConverter.q>([\s\S]*?)<\/cim:ACDCConverter.q>/g, sub, context, true);
            /**
             * Point of common coupling terminal for this converter DC side.
             * It is typically the terminal on the power transformer (or switch) closest to the AC network. The power flow measurement must be the sum of all flows into the transformer.
             */
            obj["PccTerminal"] = base.parse_attribute (/<cim:ACDCConverter.PccTerminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ACDCConverter;
            if (null == bucket)
                context.parsed.ACDCConverter = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A shunt device within the DC system, typically used for filtering.
         * Needed for transient and short circuit studies.
         */
        function parse_DCShunt (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCConductingEquipment (context, sub);
            obj.cls = "DCShunt";
            /**
             * Capacitance of the DC shunt.
             */
            obj["capacitance"] = base.parse_element (/<cim:DCShunt.capacitance>([\s\S]*?)<\/cim:DCShunt.capacitance>/g, sub, context, true);
            /**
             * Rated DC device voltage.
             * Converter configuration data used in power flow.
             */
            obj["ratedUdc"] = base.parse_element (/<cim:DCShunt.ratedUdc>([\s\S]*?)<\/cim:DCShunt.ratedUdc>/g, sub, context, true);
            /**
             * Resistance of the DC device.
             */
            obj["resistance"] = base.parse_element (/<cim:DCShunt.resistance>([\s\S]*?)<\/cim:DCShunt.resistance>/g, sub, context, true);
            bucket = context.parsed.DCShunt;
            if (null == bucket)
                context.parsed.DCShunt = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A wire or combination of wires not insulated from one another, with consistent electrical characteristics, used to carry direct current between points in the DC region of the power system.
         */
        function parse_DCLineSegment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCConductingEquipment (context, sub);
            obj.cls = "DCLineSegment";
            /**
             * Resistance of the DC line segment.
             */
            obj["resistance"] = base.parse_element (/<cim:DCLineSegment.resistance>([\s\S]*?)<\/cim:DCLineSegment.resistance>/g, sub, context, true);
            /**
             * Capacitance of the DC line segment.
             * Significant for cables only.
             */
            obj["capacitance"] = base.parse_element (/<cim:DCLineSegment.capacitance>([\s\S]*?)<\/cim:DCLineSegment.capacitance>/g, sub, context, true);
            /**
             * Inductance of the DC line segment.
             * Neglectable compared with DCSeriesDevice used for smoothing.
             */
            obj["inductance"] = base.parse_element (/<cim:DCLineSegment.inductance>([\s\S]*?)<\/cim:DCLineSegment.inductance>/g, sub, context, true);
            /**
             * Segment length for calculating line section capabilities.
             */
            obj["length"] = base.parse_element (/<cim:DCLineSegment.length>([\s\S]*?)<\/cim:DCLineSegment.length>/g, sub, context, true);
            /**
             * Set of per-length parameters for this line segment.
             */
            obj["PerLengthParameter"] = base.parse_attribute (/<cim:DCLineSegment.PerLengthParameter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DCLineSegment;
            if (null == bucket)
                context.parsed.DCLineSegment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_PerLengthDCLineParameter (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_PerLengthLineParameter (context, sub);
            obj.cls = "PerLengthDCLineParameter";
            /**
             * Capacitance per unit of length of the DC line segment; significant for cables only.
             */
            obj["capacitance"] = base.parse_element (/<cim:PerLengthDCLineParameter.capacitance>([\s\S]*?)<\/cim:PerLengthDCLineParameter.capacitance>/g, sub, context, true);
            /**
             * Inductance per unit of length of the DC line segment.
             */
            obj["inductance"] = base.parse_element (/<cim:PerLengthDCLineParameter.inductance>([\s\S]*?)<\/cim:PerLengthDCLineParameter.inductance>/g, sub, context, true);
            /**
             * Resistance per length of the DC line segment.
             */
            obj["resistance"] = base.parse_element (/<cim:PerLengthDCLineParameter.resistance>([\s\S]*?)<\/cim:PerLengthDCLineParameter.resistance>/g, sub, context, true);
            bucket = context.parsed.PerLengthDCLineParameter;
            if (null == bucket)
                context.parsed.PerLengthDCLineParameter = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Types applicable to the control of real power and/or DC voltage by voltage source converter.
         */
        function parse_VsPpccControlKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "VsPpccControlKind";
            /**
             * Control variable (target) is real power at PCC bus.
             */
            obj["pPcc"] = base.parse_element (/<cim:VsPpccControlKind.pPcc>([\s\S]*?)<\/cim:VsPpccControlKind.pPcc>/g, sub, context, true);
            /**
             * Control variable (target) is DC voltage and real power at PCC bus is derived.
             */
            obj["udc"] = base.parse_element (/<cim:VsPpccControlKind.udc>([\s\S]*?)<\/cim:VsPpccControlKind.udc>/g, sub, context, true);
            /**
             * Control variables (targets) are both active power at point of common coupling and local DC voltage, with the droop.
             */
            obj["pPccAndUdcDroop"] = base.parse_element (/<cim:VsPpccControlKind.pPccAndUdcDroop>([\s\S]*?)<\/cim:VsPpccControlKind.pPccAndUdcDroop>/g, sub, context, true);
            /**
             * Control variables (targets) are both active power at point of common coupling and compensated DC voltage, with the droop; compensation factor is the resistance, as an approximation of the DC voltage of a common (real or virtual) node in the DC network.
             */
            obj["pPccAndUdcDroopWithCompensation"] = base.parse_element (/<cim:VsPpccControlKind.pPccAndUdcDroopWithCompensation>([\s\S]*?)<\/cim:VsPpccControlKind.pPccAndUdcDroopWithCompensation>/g, sub, context, true);
            /**
             * Control variables (targets) are both active power at point of common coupling and the pilot DC voltage, with the droop.
             */
            obj["pPccAndUdcDroopPilot"] = base.parse_element (/<cim:VsPpccControlKind.pPccAndUdcDroopPilot>([\s\S]*?)<\/cim:VsPpccControlKind.pPccAndUdcDroopPilot>/g, sub, context, true);
            bucket = context.parsed.VsPpccControlKind;
            if (null == bucket)
                context.parsed.VsPpccControlKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A ground within a DC system.
         */
        function parse_DCGround (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCConductingEquipment (context, sub);
            obj.cls = "DCGround";
            /**
             * Resistance to ground.
             */
            obj["r"] = base.parse_element (/<cim:DCGround.r>([\s\S]*?)<\/cim:DCGround.r>/g, sub, context, true);
            /**
             * Inductance to ground.
             */
            obj["inductance"] = base.parse_element (/<cim:DCGround.inductance>([\s\S]*?)<\/cim:DCGround.inductance>/g, sub, context, true);
            bucket = context.parsed.DCGround;
            if (null == bucket)
                context.parsed.DCGround = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A modeling construct to provide a root class for containment of DC as well as AC equipment.
         * The class differ from the EquipmentContaner for AC in that it may also contain DCNodes. Hence it can contain both AC and DC equipment.
         */
        function parse_DCEquipmentContainer (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_EquipmentContainer (context, sub);
            obj.cls = "DCEquipmentContainer";
            bucket = context.parsed.DCEquipmentContainer;
            if (null == bucket)
                context.parsed.DCEquipmentContainer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The P-Q capability curve for a voltage source converter, with P on x-axis and Qmin and Qmax on y1-axis and y2-axis.
         */
        function parse_VsCapabilityCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "VsCapabilityCurve";
            bucket = context.parsed.VsCapabilityCurve;
            if (null == bucket)
                context.parsed.VsCapabilityCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Overhead lines and/or cables connecting two or more HVDC substations.
         */
        function parse_DCLine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCEquipmentContainer (context, sub);
            obj.cls = "DCLine";
            obj["Region"] = base.parse_attribute (/<cim:DCLine.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DCLine;
            if (null == bucket)
                context.parsed.DCLine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Operating mode for HVDC line operating as Current Source Converter.
         */
        function parse_CsOperatingModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CsOperatingModeKind";
            /**
             * Operating as inverter
             */
            obj["inverter"] = base.parse_element (/<cim:CsOperatingModeKind.inverter>([\s\S]*?)<\/cim:CsOperatingModeKind.inverter>/g, sub, context, true);
            /**
             * Operating as rectifier.
             */
            obj["rectifier"] = base.parse_element (/<cim:CsOperatingModeKind.rectifier>([\s\S]*?)<\/cim:CsOperatingModeKind.rectifier>/g, sub, context, true);
            bucket = context.parsed.CsOperatingModeKind;
            if (null == bucket)
                context.parsed.CsOperatingModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A DC electrical connection point at the AC/DC converter.
         * The AC/DC converter is electrically connected also to the AC side. The AC connection is inherited from the AC conducting equipment in the same way as any other AC equipment. The AC/DC converter DC terminal is separate from generic DC terminal to restrict the connection with the AC side to AC/DC converter and so that no other DC conducting equipment can be connected to the AC side.
         */
        function parse_ACDCConverterDCTerminal (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCBaseTerminal (context, sub);
            obj.cls = "ACDCConverterDCTerminal";
            /**
             * Represents the normal network polarity condition.
             */
            obj["polarity"] = base.parse_element (/<cim:ACDCConverterDCTerminal.polarity>([\s\S]*?)<\/cim:ACDCConverterDCTerminal.polarity>/g, sub, context, true);
            obj["DCConductingEquipment"] = base.parse_attribute (/<cim:ACDCConverterDCTerminal.DCConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ACDCConverterDCTerminal;
            if (null == bucket)
                context.parsed.ACDCConverterDCTerminal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A breaker within a DC system.
         */
        function parse_DCBreaker (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCSwitch (context, sub);
            obj.cls = "DCBreaker";
            bucket = context.parsed.DCBreaker;
            if (null == bucket)
                context.parsed.DCBreaker = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Low resistance equipment used in the internal DC circuit to balance voltages.
         * It has typically positive and negative pole terminals and a ground.
         */
        function parse_DCChopper (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCConductingEquipment (context, sub);
            obj.cls = "DCChopper";
            bucket = context.parsed.DCChopper;
            if (null == bucket)
                context.parsed.DCChopper = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Polarity for DC circuits.
         */
        function parse_DCPolarityKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DCPolarityKind";
            /**
             * Positive pole.
             */
            obj["positive"] = base.parse_element (/<cim:DCPolarityKind.positive>([\s\S]*?)<\/cim:DCPolarityKind.positive>/g, sub, context, true);
            /**
             * Middle pole, potentially grounded.
             */
            obj["middle"] = base.parse_element (/<cim:DCPolarityKind.middle>([\s\S]*?)<\/cim:DCPolarityKind.middle>/g, sub, context, true);
            /**
             * Negative pole.
             */
            obj["negative"] = base.parse_element (/<cim:DCPolarityKind.negative>([\s\S]*?)<\/cim:DCPolarityKind.negative>/g, sub, context, true);
            bucket = context.parsed.DCPolarityKind;
            if (null == bucket)
                context.parsed.DCPolarityKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Indivisible operative unit comprising all equipment between the point of common coupling on the AC side and the point of common coupling � DC side, essentially one or more converters, together with one or more converter transformers, converter control equipment, essential protective and switching devices and auxiliaries, if any, used for conversion.
         */
        function parse_DCConverterUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCEquipmentContainer (context, sub);
            obj.cls = "DCConverterUnit";
            obj["operationMode"] = base.parse_element (/<cim:DCConverterUnit.operationMode>([\s\S]*?)<\/cim:DCConverterUnit.operationMode>/g, sub, context, true);
            obj["Substation"] = base.parse_attribute (/<cim:DCConverterUnit.Substation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DCConverterUnit;
            if (null == bucket)
                context.parsed.DCConverterUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * DC side of the current source converter (CSC).
         */
        function parse_CsConverter (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ACDCConverter (context, sub);
            obj.cls = "CsConverter";
            /**
             * The maximum direct current (Id) on the DC side at which the converter should operate.
             * Converter configuration data use in power flow.
             */
            obj["maxIdc"] = base.parse_element (/<cim:CsConverter.maxIdc>([\s\S]*?)<\/cim:CsConverter.maxIdc>/g, sub, context, true);
            /**
             * Rated converter DC current, also called IdN.
             * Converter configuration data used in power flow.
             */
            obj["ratedIdc"] = base.parse_element (/<cim:CsConverter.ratedIdc>([\s\S]*?)<\/cim:CsConverter.ratedIdc>/g, sub, context, true);
            obj["pPccControl"] = base.parse_element (/<cim:CsConverter.pPccControl>([\s\S]*?)<\/cim:CsConverter.pPccControl>/g, sub, context, true);
            /**
             * Firing angle, typical value between 10 and 18 degrees for a rectifier.
             * CSC state variable, result from power flow.
             */
            obj["alpha"] = base.parse_element (/<cim:CsConverter.alpha>([\s\S]*?)<\/cim:CsConverter.alpha>/g, sub, context, true);
            /**
             * Extinction angle.
             * CSC state variable, result from power flow.
             */
            obj["gamma"] = base.parse_element (/<cim:CsConverter.gamma>([\s\S]*?)<\/cim:CsConverter.gamma>/g, sub, context, true);
            /**
             * Maximum firing angle.
             * CSC configuration data used in power flow.
             */
            obj["maxAlpha"] = base.parse_element (/<cim:CsConverter.maxAlpha>([\s\S]*?)<\/cim:CsConverter.maxAlpha>/g, sub, context, true);
            /**
             * Maximum extinction angle.
             * CSC configuration data used in power flow.
             */
            obj["maxGamma"] = base.parse_element (/<cim:CsConverter.maxGamma>([\s\S]*?)<\/cim:CsConverter.maxGamma>/g, sub, context, true);
            /**
             * Minimum firing angle.
             * CSC configuration data used in power flow.
             */
            obj["minAlpha"] = base.parse_element (/<cim:CsConverter.minAlpha>([\s\S]*?)<\/cim:CsConverter.minAlpha>/g, sub, context, true);
            /**
             * Minimum extinction angle.
             * CSC configuration data used in power flow.
             */
            obj["minGamma"] = base.parse_element (/<cim:CsConverter.minGamma>([\s\S]*?)<\/cim:CsConverter.minGamma>/g, sub, context, true);
            /**
             * Target firing angle.
             * CSC control variable used in power flow.
             */
            obj["targetAlpha"] = base.parse_element (/<cim:CsConverter.targetAlpha>([\s\S]*?)<\/cim:CsConverter.targetAlpha>/g, sub, context, true);
            /**
             * Target extinction angle.
             * CSC  control variable used in power flow.
             */
            obj["targetGamma"] = base.parse_element (/<cim:CsConverter.targetGamma>([\s\S]*?)<\/cim:CsConverter.targetGamma>/g, sub, context, true);
            /**
             * DC current target value.
             * CSC control variable used in power flow.
             */
            obj["targetIdc"] = base.parse_element (/<cim:CsConverter.targetIdc>([\s\S]*?)<\/cim:CsConverter.targetIdc>/g, sub, context, true);
            /**
             * The minimum direct current (Id) on the DC side at which the converter should operate.
             * CSC configuration data used in power flow.
             */
            obj["minIdc"] = base.parse_element (/<cim:CsConverter.minIdc>([\s\S]*?)<\/cim:CsConverter.minIdc>/g, sub, context, true);
            /**
             * Indicates whether the DC pole is operating as an inverter or as a rectifier.
             * CSC control variable used in power flow.
             */
            obj["operatingMode"] = base.parse_element (/<cim:CsConverter.operatingMode>([\s\S]*?)<\/cim:CsConverter.operatingMode>/g, sub, context, true);
            bucket = context.parsed.CsConverter;
            if (null == bucket)
                context.parsed.CsConverter = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An electrical connection point to generic DC conducting equipment.
         */
        function parse_DCTerminal (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCBaseTerminal (context, sub);
            obj.cls = "DCTerminal";
            obj["DCConductingEquipment"] = base.parse_attribute (/<cim:DCTerminal.DCConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DCTerminal;
            if (null == bucket)
                context.parsed.DCTerminal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The parts of the DC power system that are designed to carry current or that are conductively connected through DC terminals.
         */
        function parse_DCConductingEquipment (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Equipment (context, sub);
            obj.cls = "DCConductingEquipment";
            bucket = context.parsed.DCConductingEquipment;
            if (null == bucket)
                context.parsed.DCConductingEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A switch within the DC system.
         */
        function parse_DCSwitch (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DCConductingEquipment (context, sub);
            obj.cls = "DCSwitch";
            bucket = context.parsed.DCSwitch;
            if (null == bucket)
                context.parsed.DCSwitch = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_DCChopper: parse_DCChopper,
                parse_DCTopologicalIsland: parse_DCTopologicalIsland,
                parse_DCNode: parse_DCNode,
                parse_VsPpccControlKind: parse_VsPpccControlKind,
                parse_DCConverterOperatingModeKind: parse_DCConverterOperatingModeKind,
                parse_DCBaseTerminal: parse_DCBaseTerminal,
                parse_DCBusbar: parse_DCBusbar,
                parse_DCTerminal: parse_DCTerminal,
                parse_DCConverterUnit: parse_DCConverterUnit,
                parse_CsOperatingModeKind: parse_CsOperatingModeKind,
                parse_ACDCConverter: parse_ACDCConverter,
                parse_VsQpccControlKind: parse_VsQpccControlKind,
                parse_DCConductingEquipment: parse_DCConductingEquipment,
                parse_PerLengthDCLineParameter: parse_PerLengthDCLineParameter,
                parse_VsConverter: parse_VsConverter,
                parse_DCShunt: parse_DCShunt,
                parse_DCLine: parse_DCLine,
                parse_DCLineSegment: parse_DCLineSegment,
                parse_DCGround: parse_DCGround,
                parse_DCBreaker: parse_DCBreaker,
                parse_DCSwitch: parse_DCSwitch,
                parse_CsConverter: parse_CsConverter,
                parse_DCSeriesDevice: parse_DCSeriesDevice,
                parse_VsCapabilityCurve: parse_VsCapabilityCurve,
                parse_ACDCConverterDCTerminal: parse_ACDCConverterDCTerminal,
                parse_DCEquipmentContainer: parse_DCEquipmentContainer,
                parse_CsPpccControlKind: parse_CsPpccControlKind,
                parse_DCDisconnector: parse_DCDisconnector,
                parse_DCPolarityKind: parse_DCPolarityKind
            }
        );
    }
);