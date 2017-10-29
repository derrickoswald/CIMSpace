define
(
    ["model/base", "model/Core", "model/LoadModel"],
    /**
     * An extension to the Core and Topology package that models information on the electrical characteristics of Transmission and Distribution networks.
     *
     * This package is used by network applications such as State Estimation, Load Flow and Optimal Power Flow.
     *
     */
    function (base, Core, LoadModel)
    {

        /**
         * Transformer star impedance (Pi-model) that accurately reflects impedance for transformers with 2 or 3 windings.
         *
         * For transformers with 4 or more windings, you must use TransformerMeshImpedance class.
         *
         */
        function parse_TransformerStarImpedance (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerStarImpedance";
            base.parse_element (/<cim:TransformerStarImpedance.r>([\s\S]*?)<\/cim:TransformerStarImpedance.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerStarImpedance.r0>([\s\S]*?)<\/cim:TransformerStarImpedance.r0>/g, obj, "r0", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerStarImpedance.x>([\s\S]*?)<\/cim:TransformerStarImpedance.x>/g, obj, "x", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerStarImpedance.x0>([\s\S]*?)<\/cim:TransformerStarImpedance.x0>/g, obj, "x0", base.to_string, sub, context);
            base.parse_attribute (/<cim:TransformerStarImpedance.TransformerEndInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEndInfo", sub, context);
            bucket = context.parsed.TransformerStarImpedance;
            if (null == bucket)
                context.parsed.TransformerStarImpedance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransformerStarImpedance (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "TransformerStarImpedance", "r", base.from_string, fields);
            base.export_element (obj, "TransformerStarImpedance", "r0", base.from_string, fields);
            base.export_element (obj, "TransformerStarImpedance", "x", base.from_string, fields);
            base.export_element (obj, "TransformerStarImpedance", "x0", base.from_string, fields);
            base.export_attribute (obj, "TransformerStarImpedance", "TransformerEndInfo", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Describes a symmetrical phase shifting transformer tap model in which the secondary side voltage magnitude is the same as at the primary side.
         *
         * The difference voltage magnitude is the base in an equal-sided triangle where the sides corresponds to the primary and secondary voltages. The phase angle difference corresponds to the top angle and can be expressed as twice the arctangent of half the total difference voltage.
         *
         */
        function parse_PhaseTapChangerSymmetrical (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PhaseTapChangerNonLinear (context, sub);
            obj.cls = "PhaseTapChangerSymmetrical";
            bucket = context.parsed.PhaseTapChangerSymmetrical;
            if (null == bucket)
                context.parsed.PhaseTapChangerSymmetrical = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PhaseTapChangerSymmetrical (obj, exporters, full)
        {
            var fields = exporters["PhaseTapChangerNonLinear"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A manually operated or motor operated mechanical switching device used for changing the connections in a circuit, or for isolating a circuit or equipment from a source of power.
         *
         * It is required to open or close circuits when negligible current is broken or made.
         *
         */
        function parse_Disconnector (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "Disconnector";
            bucket = context.parsed.Disconnector;
            if (null == bucket)
                context.parsed.Disconnector = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Disconnector (obj, exporters, full)
        {
            var fields = exporters["Switch"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A transformer phase shifting tap model that controls the phase angle difference across the power transformer and potentially the active power flow through the power transformer.
         *
         * This phase tap model may also impact the voltage magnitude.
         *
         */
        function parse_PhaseTapChanger (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TapChanger (context, sub);
            obj.cls = "PhaseTapChanger";
            base.parse_attribute (/<cim:PhaseTapChanger.TransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEnd", sub, context);
            bucket = context.parsed.PhaseTapChanger;
            if (null == bucket)
                context.parsed.PhaseTapChanger = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PhaseTapChanger (obj, exporters, full)
        {
            var fields = exporters["TapChanger"](obj, exporters, false);

            base.export_attribute (obj, "PhaseTapChanger", "TransformerEnd", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class represents the zero sequence line mutual coupling.
         *
         */
        function parse_MutualCoupling (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MutualCoupling";
            base.parse_element (/<cim:MutualCoupling.b0ch>([\s\S]*?)<\/cim:MutualCoupling.b0ch>/g, obj, "b0ch", base.to_string, sub, context);
            base.parse_element (/<cim:MutualCoupling.distance11>([\s\S]*?)<\/cim:MutualCoupling.distance11>/g, obj, "distance11", base.to_string, sub, context);
            base.parse_element (/<cim:MutualCoupling.distance12>([\s\S]*?)<\/cim:MutualCoupling.distance12>/g, obj, "distance12", base.to_string, sub, context);
            base.parse_element (/<cim:MutualCoupling.distance21>([\s\S]*?)<\/cim:MutualCoupling.distance21>/g, obj, "distance21", base.to_string, sub, context);
            base.parse_element (/<cim:MutualCoupling.distance22>([\s\S]*?)<\/cim:MutualCoupling.distance22>/g, obj, "distance22", base.to_string, sub, context);
            base.parse_element (/<cim:MutualCoupling.g0ch>([\s\S]*?)<\/cim:MutualCoupling.g0ch>/g, obj, "g0ch", base.to_string, sub, context);
            base.parse_element (/<cim:MutualCoupling.r0>([\s\S]*?)<\/cim:MutualCoupling.r0>/g, obj, "r0", base.to_string, sub, context);
            base.parse_element (/<cim:MutualCoupling.x0>([\s\S]*?)<\/cim:MutualCoupling.x0>/g, obj, "x0", base.to_string, sub, context);
            base.parse_attribute (/<cim:MutualCoupling.Second_Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Second_Terminal", sub, context);
            base.parse_attribute (/<cim:MutualCoupling.First_Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "First_Terminal", sub, context);
            bucket = context.parsed.MutualCoupling;
            if (null == bucket)
                context.parsed.MutualCoupling = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MutualCoupling (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "MutualCoupling", "b0ch", base.from_string, fields);
            base.export_element (obj, "MutualCoupling", "distance11", base.from_string, fields);
            base.export_element (obj, "MutualCoupling", "distance12", base.from_string, fields);
            base.export_element (obj, "MutualCoupling", "distance21", base.from_string, fields);
            base.export_element (obj, "MutualCoupling", "distance22", base.from_string, fields);
            base.export_element (obj, "MutualCoupling", "g0ch", base.from_string, fields);
            base.export_element (obj, "MutualCoupling", "r0", base.from_string, fields);
            base.export_element (obj, "MutualCoupling", "x0", base.from_string, fields);
            base.export_attribute (obj, "MutualCoupling", "Second_Terminal", fields);
            base.export_attribute (obj, "MutualCoupling", "First_Terminal", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Generic user of energy - a  point of consumption on the power system model.
         *
         */
        function parse_EnergyConsumer (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "EnergyConsumer";
            base.parse_element (/<cim:EnergyConsumer.customerCount>([\s\S]*?)<\/cim:EnergyConsumer.customerCount>/g, obj, "customerCount", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyConsumer.grounded>([\s\S]*?)<\/cim:EnergyConsumer.grounded>/g, obj, "grounded", base.to_boolean, sub, context);
            base.parse_element (/<cim:EnergyConsumer.pfixed>([\s\S]*?)<\/cim:EnergyConsumer.pfixed>/g, obj, "pfixed", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyConsumer.pfixedPct>([\s\S]*?)<\/cim:EnergyConsumer.pfixedPct>/g, obj, "pfixedPct", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyConsumer.phaseConnection>([\s\S]*?)<\/cim:EnergyConsumer.phaseConnection>/g, obj, "phaseConnection", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyConsumer.qfixed>([\s\S]*?)<\/cim:EnergyConsumer.qfixed>/g, obj, "qfixed", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyConsumer.qfixedPct>([\s\S]*?)<\/cim:EnergyConsumer.qfixedPct>/g, obj, "qfixedPct", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyConsumer.p>([\s\S]*?)<\/cim:EnergyConsumer.p>/g, obj, "p", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyConsumer.q>([\s\S]*?)<\/cim:EnergyConsumer.q>/g, obj, "q", base.to_string, sub, context);
            base.parse_attribute (/<cim:EnergyConsumer.PowerCutZone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerCutZone", sub, context);
            base.parse_attribute (/<cim:EnergyConsumer.LoadDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadDynamics", sub, context);
            base.parse_attribute (/<cim:EnergyConsumer.LoadResponse\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadResponse", sub, context);
            bucket = context.parsed.EnergyConsumer;
            if (null == bucket)
                context.parsed.EnergyConsumer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnergyConsumer (obj, exporters, full)
        {
            var fields = exporters["ConductingEquipment"](obj, exporters, false);

            base.export_element (obj, "EnergyConsumer", "customerCount", base.from_string, fields);
            base.export_element (obj, "EnergyConsumer", "grounded", base.from_boolean, fields);
            base.export_element (obj, "EnergyConsumer", "pfixed", base.from_string, fields);
            base.export_element (obj, "EnergyConsumer", "pfixedPct", base.from_string, fields);
            base.export_element (obj, "EnergyConsumer", "phaseConnection", base.from_string, fields);
            base.export_element (obj, "EnergyConsumer", "qfixed", base.from_string, fields);
            base.export_element (obj, "EnergyConsumer", "qfixedPct", base.from_string, fields);
            base.export_element (obj, "EnergyConsumer", "p", base.from_string, fields);
            base.export_element (obj, "EnergyConsumer", "q", base.from_string, fields);
            base.export_attribute (obj, "EnergyConsumer", "PowerCutZone", fields);
            base.export_attribute (obj, "EnergyConsumer", "LoadDynamics", fields);
            base.export_attribute (obj, "EnergyConsumer", "LoadResponse", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The mode of operation for a Petersen coil.
         *
         */
        function parse_PetersenCoilModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PetersenCoilModeKind";
            base.parse_element (/<cim:PetersenCoilModeKind.fixed>([\s\S]*?)<\/cim:PetersenCoilModeKind.fixed>/g, obj, "fixed", base.to_string, sub, context);
            base.parse_element (/<cim:PetersenCoilModeKind.manual>([\s\S]*?)<\/cim:PetersenCoilModeKind.manual>/g, obj, "manual", base.to_string, sub, context);
            base.parse_element (/<cim:PetersenCoilModeKind.automaticPositioning>([\s\S]*?)<\/cim:PetersenCoilModeKind.automaticPositioning>/g, obj, "automaticPositioning", base.to_string, sub, context);
            bucket = context.parsed.PetersenCoilModeKind;
            if (null == bucket)
                context.parsed.PetersenCoilModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PetersenCoilModeKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PetersenCoilModeKind", "fixed", base.from_string, fields);
            base.export_element (obj, "PetersenCoilModeKind", "manual", base.from_string, fields);
            base.export_element (obj, "PetersenCoilModeKind", "automaticPositioning", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A Series Compensator is a series capacitor or reactor or an AC transmission line without charging susceptance.
         *
         * It is a two terminal device.
         *
         */
        function parse_SeriesCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "SeriesCompensator";
            base.parse_element (/<cim:SeriesCompensator.r>([\s\S]*?)<\/cim:SeriesCompensator.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:SeriesCompensator.r0>([\s\S]*?)<\/cim:SeriesCompensator.r0>/g, obj, "r0", base.to_string, sub, context);
            base.parse_element (/<cim:SeriesCompensator.x>([\s\S]*?)<\/cim:SeriesCompensator.x>/g, obj, "x", base.to_string, sub, context);
            base.parse_element (/<cim:SeriesCompensator.x0>([\s\S]*?)<\/cim:SeriesCompensator.x0>/g, obj, "x0", base.to_string, sub, context);
            base.parse_element (/<cim:SeriesCompensator.varistorPresent>([\s\S]*?)<\/cim:SeriesCompensator.varistorPresent>/g, obj, "varistorPresent", base.to_boolean, sub, context);
            base.parse_element (/<cim:SeriesCompensator.varistorRatedCurrent>([\s\S]*?)<\/cim:SeriesCompensator.varistorRatedCurrent>/g, obj, "varistorRatedCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:SeriesCompensator.varistorVoltageThreshold>([\s\S]*?)<\/cim:SeriesCompensator.varistorVoltageThreshold>/g, obj, "varistorVoltageThreshold", base.to_string, sub, context);
            bucket = context.parsed.SeriesCompensator;
            if (null == bucket)
                context.parsed.SeriesCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SeriesCompensator (obj, exporters, full)
        {
            var fields = exporters["ConductingEquipment"](obj, exporters, false);

            base.export_element (obj, "SeriesCompensator", "r", base.from_string, fields);
            base.export_element (obj, "SeriesCompensator", "r0", base.from_string, fields);
            base.export_element (obj, "SeriesCompensator", "x", base.from_string, fields);
            base.export_element (obj, "SeriesCompensator", "x0", base.from_string, fields);
            base.export_element (obj, "SeriesCompensator", "varistorPresent", base.from_boolean, fields);
            base.export_element (obj, "SeriesCompensator", "varistorRatedCurrent", base.from_string, fields);
            base.export_element (obj, "SeriesCompensator", "varistorVoltageThreshold", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A rotating machine which may be used as a generator or motor.
         *
         */
        function parse_RotatingMachine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegulatingCondEq (context, sub);
            obj.cls = "RotatingMachine";
            base.parse_element (/<cim:RotatingMachine.ratedPowerFactor>([\s\S]*?)<\/cim:RotatingMachine.ratedPowerFactor>/g, obj, "ratedPowerFactor", base.to_float, sub, context);
            base.parse_element (/<cim:RotatingMachine.ratedS>([\s\S]*?)<\/cim:RotatingMachine.ratedS>/g, obj, "ratedS", base.to_string, sub, context);
            base.parse_element (/<cim:RotatingMachine.ratedU>([\s\S]*?)<\/cim:RotatingMachine.ratedU>/g, obj, "ratedU", base.to_string, sub, context);
            base.parse_element (/<cim:RotatingMachine.p>([\s\S]*?)<\/cim:RotatingMachine.p>/g, obj, "p", base.to_string, sub, context);
            base.parse_element (/<cim:RotatingMachine.q>([\s\S]*?)<\/cim:RotatingMachine.q>/g, obj, "q", base.to_string, sub, context);
            base.parse_attribute (/<cim:RotatingMachine.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
            base.parse_attribute (/<cim:RotatingMachine.HydroPump\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPump", sub, context);
            bucket = context.parsed.RotatingMachine;
            if (null == bucket)
                context.parsed.RotatingMachine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RotatingMachine (obj, exporters, full)
        {
            var fields = exporters["RegulatingCondEq"](obj, exporters, false);

            base.export_element (obj, "RotatingMachine", "ratedPowerFactor", base.from_float, fields);
            base.export_element (obj, "RotatingMachine", "ratedS", base.from_string, fields);
            base.export_element (obj, "RotatingMachine", "ratedU", base.from_string, fields);
            base.export_element (obj, "RotatingMachine", "p", base.from_string, fields);
            base.export_element (obj, "RotatingMachine", "q", base.from_string, fields);
            base.export_attribute (obj, "RotatingMachine", "GeneratingUnit", fields);
            base.export_attribute (obj, "RotatingMachine", "HydroPump", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A generic device designed to close, or open, or both, one or more electric circuits.
         *
         * All switches are two terminal devices including grounding switches.
         *
         */
        function parse_Switch (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "Switch";
            base.parse_element (/<cim:Switch.normalOpen>([\s\S]*?)<\/cim:Switch.normalOpen>/g, obj, "normalOpen", base.to_boolean, sub, context);
            base.parse_element (/<cim:Switch.ratedCurrent>([\s\S]*?)<\/cim:Switch.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:Switch.retained>([\s\S]*?)<\/cim:Switch.retained>/g, obj, "retained", base.to_boolean, sub, context);
            base.parse_element (/<cim:Switch.switchOnCount>([\s\S]*?)<\/cim:Switch.switchOnCount>/g, obj, "switchOnCount", base.to_string, sub, context);
            base.parse_element (/<cim:Switch.switchOnDate>([\s\S]*?)<\/cim:Switch.switchOnDate>/g, obj, "switchOnDate", base.to_datetime, sub, context);
            base.parse_element (/<cim:Switch.open>([\s\S]*?)<\/cim:Switch.open>/g, obj, "open", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:Switch.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
            base.parse_attribute (/<cim:Switch.CompositeSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompositeSwitch", sub, context);
            base.parse_attribute (/<cim:Switch.SwitchAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchAction", sub, context);
            bucket = context.parsed.Switch;
            if (null == bucket)
                context.parsed.Switch = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Switch (obj, exporters, full)
        {
            var fields = exporters["ConductingEquipment"](obj, exporters, false);

            base.export_element (obj, "Switch", "normalOpen", base.from_boolean, fields);
            base.export_element (obj, "Switch", "ratedCurrent", base.from_string, fields);
            base.export_element (obj, "Switch", "retained", base.from_boolean, fields);
            base.export_element (obj, "Switch", "switchOnCount", base.from_string, fields);
            base.export_element (obj, "Switch", "switchOnDate", base.from_datetime, fields);
            base.export_element (obj, "Switch", "open", base.from_boolean, fields);
            base.export_attribute (obj, "Switch", "Outage", fields);
            base.export_attribute (obj, "Switch", "CompositeSwitch", fields);
            base.export_attribute (obj, "Switch", "SwitchAction", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The transformer core admittance.
         *
         * Used to specify the core admittance of a transformer in a manner that can be shared among power transformers.
         *
         */
        function parse_TransformerCoreAdmittance (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerCoreAdmittance";
            base.parse_element (/<cim:TransformerCoreAdmittance.b>([\s\S]*?)<\/cim:TransformerCoreAdmittance.b>/g, obj, "b", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerCoreAdmittance.b0>([\s\S]*?)<\/cim:TransformerCoreAdmittance.b0>/g, obj, "b0", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerCoreAdmittance.g>([\s\S]*?)<\/cim:TransformerCoreAdmittance.g>/g, obj, "g", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerCoreAdmittance.g0>([\s\S]*?)<\/cim:TransformerCoreAdmittance.g0>/g, obj, "g0", base.to_string, sub, context);
            base.parse_attribute (/<cim:TransformerCoreAdmittance.TransformerEndInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEndInfo", sub, context);
            bucket = context.parsed.TransformerCoreAdmittance;
            if (null == bucket)
                context.parsed.TransformerCoreAdmittance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransformerCoreAdmittance (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "TransformerCoreAdmittance", "b", base.from_string, fields);
            base.export_element (obj, "TransformerCoreAdmittance", "b0", base.from_string, fields);
            base.export_element (obj, "TransformerCoreAdmittance", "g", base.from_string, fields);
            base.export_element (obj, "TransformerCoreAdmittance", "g0", base.from_string, fields);
            base.export_attribute (obj, "TransformerCoreAdmittance", "TransformerEndInfo", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An area of the power system network which is defined for secondary voltage control purposes.
         *
         * A voltage control zone consists of a collection of substations with a designated bus bar section whose voltage will be controlled.
         *
         */
        function parse_VoltageControlZone (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "VoltageControlZone";
            base.parse_attribute (/<cim:VoltageControlZone.RegulationSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegulationSchedule", sub, context);
            base.parse_attribute (/<cim:VoltageControlZone.BusbarSection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BusbarSection", sub, context);
            bucket = context.parsed.VoltageControlZone;
            if (null == bucket)
                context.parsed.VoltageControlZone = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_VoltageControlZone (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_attribute (obj, "VoltageControlZone", "RegulationSchedule", fields);
            base.export_attribute (obj, "VoltageControlZone", "BusbarSection", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Impedance and admittance parameters per unit length for n-wire unbalanced lines, in matrix form.
         *
         */
        function parse_PerLengthPhaseImpedance (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PerLengthImpedance (context, sub);
            obj.cls = "PerLengthPhaseImpedance";
            base.parse_element (/<cim:PerLengthPhaseImpedance.conductorCount>([\s\S]*?)<\/cim:PerLengthPhaseImpedance.conductorCount>/g, obj, "conductorCount", base.to_string, sub, context);
            bucket = context.parsed.PerLengthPhaseImpedance;
            if (null == bucket)
                context.parsed.PerLengthPhaseImpedance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PerLengthPhaseImpedance (obj, exporters, full)
        {
            var fields = exporters["PerLengthImpedance"](obj, exporters, false);

            base.export_element (obj, "PerLengthPhaseImpedance", "conductorCount", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Control modes for a transformer.
         *
         */
        function parse_TransformerControlMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TransformerControlMode";
            base.parse_element (/<cim:TransformerControlMode.volt>([\s\S]*?)<\/cim:TransformerControlMode.volt>/g, obj, "volt", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerControlMode.reactive>([\s\S]*?)<\/cim:TransformerControlMode.reactive>/g, obj, "reactive", base.to_string, sub, context);
            bucket = context.parsed.TransformerControlMode;
            if (null == bucket)
                context.parsed.TransformerControlMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransformerControlMode (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TransformerControlMode", "volt", base.from_string, fields);
            base.export_element (obj, "TransformerControlMode", "reactive", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Transformer mesh impedance (Delta-model) between transformer ends.
         *
         * The typical case is that this class describes the impedance between two transformer ends pair-wise, i.e. the cardinalities at both tranformer end associations are 1. But in cases where two or more transformer ends are modeled the cardinalities are larger than 1.
         *
         */
        function parse_TransformerMeshImpedance (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerMeshImpedance";
            base.parse_element (/<cim:TransformerMeshImpedance.r>([\s\S]*?)<\/cim:TransformerMeshImpedance.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerMeshImpedance.r0>([\s\S]*?)<\/cim:TransformerMeshImpedance.r0>/g, obj, "r0", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerMeshImpedance.x>([\s\S]*?)<\/cim:TransformerMeshImpedance.x>/g, obj, "x", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerMeshImpedance.x0>([\s\S]*?)<\/cim:TransformerMeshImpedance.x0>/g, obj, "x0", base.to_string, sub, context);
            base.parse_attribute (/<cim:TransformerMeshImpedance.FromTransformerEndInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FromTransformerEndInfo", sub, context);
            base.parse_attribute (/<cim:TransformerMeshImpedance.FromTransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FromTransformerEnd", sub, context);
            bucket = context.parsed.TransformerMeshImpedance;
            if (null == bucket)
                context.parsed.TransformerMeshImpedance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransformerMeshImpedance (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "TransformerMeshImpedance", "r", base.from_string, fields);
            base.export_element (obj, "TransformerMeshImpedance", "r0", base.from_string, fields);
            base.export_element (obj, "TransformerMeshImpedance", "x", base.from_string, fields);
            base.export_element (obj, "TransformerMeshImpedance", "x0", base.from_string, fields);
            base.export_attribute (obj, "TransformerMeshImpedance", "FromTransformerEndInfo", fields);
            base.export_attribute (obj, "TransformerMeshImpedance", "FromTransformerEnd", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A non linear shunt compensator bank or section admittance value.
         *
         */
        function parse_NonlinearShuntCompensatorPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "NonlinearShuntCompensatorPoint";
            base.parse_element (/<cim:NonlinearShuntCompensatorPoint.g>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.g>/g, obj, "g", base.to_string, sub, context);
            base.parse_element (/<cim:NonlinearShuntCompensatorPoint.b0>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.b0>/g, obj, "b0", base.to_string, sub, context);
            base.parse_element (/<cim:NonlinearShuntCompensatorPoint.b>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.b>/g, obj, "b", base.to_string, sub, context);
            base.parse_element (/<cim:NonlinearShuntCompensatorPoint.g0>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.g0>/g, obj, "g0", base.to_string, sub, context);
            base.parse_element (/<cim:NonlinearShuntCompensatorPoint.sectionNumber>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.sectionNumber>/g, obj, "sectionNumber", base.to_string, sub, context);
            base.parse_attribute (/<cim:NonlinearShuntCompensatorPoint.NonlinearShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NonlinearShuntCompensator", sub, context);
            bucket = context.parsed.NonlinearShuntCompensatorPoint;
            if (null == bucket)
                context.parsed.NonlinearShuntCompensatorPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_NonlinearShuntCompensatorPoint (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "NonlinearShuntCompensatorPoint", "g", base.from_string, fields);
            base.export_element (obj, "NonlinearShuntCompensatorPoint", "b0", base.from_string, fields);
            base.export_element (obj, "NonlinearShuntCompensatorPoint", "b", base.from_string, fields);
            base.export_element (obj, "NonlinearShuntCompensatorPoint", "g0", base.from_string, fields);
            base.export_element (obj, "NonlinearShuntCompensatorPoint", "sectionNumber", base.from_string, fields);
            base.export_attribute (obj, "NonlinearShuntCompensatorPoint", "NonlinearShuntCompensator", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A conductor, or group of conductors, with negligible impedance, that serve to connect other conducting equipment within a single substation.
         *
         * Voltage measurements are typically obtained from VoltageTransformers that are connected to busbar sections. A bus bar section may have many physical terminals but for analysis is modelled with exactly one logical terminal.
         *
         */
        function parse_BusbarSection (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Connector (context, sub);
            obj.cls = "BusbarSection";
            base.parse_element (/<cim:BusbarSection.ipMax>([\s\S]*?)<\/cim:BusbarSection.ipMax>/g, obj, "ipMax", base.to_string, sub, context);
            base.parse_attribute (/<cim:BusbarSection.VoltageControlZone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageControlZone", sub, context);
            bucket = context.parsed.BusbarSection;
            if (null == bucket)
                context.parsed.BusbarSection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BusbarSection (obj, exporters, full)
        {
            var fields = exporters["Connector"](obj, exporters, false);

            base.export_element (obj, "BusbarSection", "ipMax", base.from_string, fields);
            base.export_attribute (obj, "BusbarSection", "VoltageControlZone", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A per phase non linear shunt compensator bank or section admittance value.
         *
         */
        function parse_NonlinearShuntCompensatorPhasePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "NonlinearShuntCompensatorPhasePoint";
            base.parse_element (/<cim:NonlinearShuntCompensatorPhasePoint.sectionNumber>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPhasePoint.sectionNumber>/g, obj, "sectionNumber", base.to_string, sub, context);
            base.parse_element (/<cim:NonlinearShuntCompensatorPhasePoint.b>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPhasePoint.b>/g, obj, "b", base.to_string, sub, context);
            base.parse_element (/<cim:NonlinearShuntCompensatorPhasePoint.g>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPhasePoint.g>/g, obj, "g", base.to_string, sub, context);
            base.parse_attribute (/<cim:NonlinearShuntCompensatorPhasePoint.NonlinearShuntCompensatorPhase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NonlinearShuntCompensatorPhase", sub, context);
            bucket = context.parsed.NonlinearShuntCompensatorPhasePoint;
            if (null == bucket)
                context.parsed.NonlinearShuntCompensatorPhasePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_NonlinearShuntCompensatorPhasePoint (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "NonlinearShuntCompensatorPhasePoint", "sectionNumber", base.from_string, fields);
            base.export_element (obj, "NonlinearShuntCompensatorPhasePoint", "b", base.from_string, fields);
            base.export_element (obj, "NonlinearShuntCompensatorPhasePoint", "g", base.from_string, fields);
            base.export_attribute (obj, "NonlinearShuntCompensatorPhasePoint", "NonlinearShuntCompensatorPhase", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_TapChangerTablePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TapChangerTablePoint";
            base.parse_element (/<cim:TapChangerTablePoint.b>([\s\S]*?)<\/cim:TapChangerTablePoint.b>/g, obj, "b", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerTablePoint.g>([\s\S]*?)<\/cim:TapChangerTablePoint.g>/g, obj, "g", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerTablePoint.r>([\s\S]*?)<\/cim:TapChangerTablePoint.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerTablePoint.ratio>([\s\S]*?)<\/cim:TapChangerTablePoint.ratio>/g, obj, "ratio", base.to_float, sub, context);
            base.parse_element (/<cim:TapChangerTablePoint.step>([\s\S]*?)<\/cim:TapChangerTablePoint.step>/g, obj, "step", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerTablePoint.x>([\s\S]*?)<\/cim:TapChangerTablePoint.x>/g, obj, "x", base.to_string, sub, context);
            bucket = context.parsed.TapChangerTablePoint;
            if (null == bucket)
                context.parsed.TapChangerTablePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TapChangerTablePoint (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TapChangerTablePoint", "b", base.from_string, fields);
            base.export_element (obj, "TapChangerTablePoint", "g", base.from_string, fields);
            base.export_element (obj, "TapChangerTablePoint", "r", base.from_string, fields);
            base.export_element (obj, "TapChangerTablePoint", "ratio", base.from_float, fields);
            base.export_element (obj, "TapChangerTablePoint", "step", base.from_string, fields);
            base.export_element (obj, "TapChangerTablePoint", "x", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of Asynchronous Machine.
         *
         */
        function parse_AsynchronousMachineKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AsynchronousMachineKind";
            base.parse_element (/<cim:AsynchronousMachineKind.generator>([\s\S]*?)<\/cim:AsynchronousMachineKind.generator>/g, obj, "generator", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachineKind.motor>([\s\S]*?)<\/cim:AsynchronousMachineKind.motor>/g, obj, "motor", base.to_string, sub, context);
            bucket = context.parsed.AsynchronousMachineKind;
            if (null == bucket)
                context.parsed.AsynchronousMachineKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AsynchronousMachineKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AsynchronousMachineKind", "generator", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachineKind", "motor", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Reactive power rating envelope versus the synchronous machine's active power, in both the generating and motoring modes.
         *
         * For each active power value there is a corresponding high and low reactive power limit  value. Typically there will be a separate curve for each coolant condition, such as hydrogen pressure.  The Y1 axis values represent reactive minimum and the Y2 axis values represent reactive maximum.
         *
         */
        function parse_ReactiveCapabilityCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "ReactiveCapabilityCurve";
            base.parse_element (/<cim:ReactiveCapabilityCurve.coolantTemperature>([\s\S]*?)<\/cim:ReactiveCapabilityCurve.coolantTemperature>/g, obj, "coolantTemperature", base.to_string, sub, context);
            base.parse_element (/<cim:ReactiveCapabilityCurve.hydrogenPressure>([\s\S]*?)<\/cim:ReactiveCapabilityCurve.hydrogenPressure>/g, obj, "hydrogenPressure", base.to_string, sub, context);
            bucket = context.parsed.ReactiveCapabilityCurve;
            if (null == bucket)
                context.parsed.ReactiveCapabilityCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ReactiveCapabilityCurve (obj, exporters, full)
        {
            var fields = exporters["Curve"](obj, exporters, false);

            base.export_element (obj, "ReactiveCapabilityCurve", "coolantTemperature", base.from_string, fields);
            base.export_element (obj, "ReactiveCapabilityCurve", "hydrogenPressure", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A conductor, or group of conductors, with negligible impedance, that serve to connect other conducting equipment within a single substation and are modelled with a single logical terminal.
         *
         */
        function parse_Connector (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "Connector";
            bucket = context.parsed.Connector;
            if (null == bucket)
                context.parsed.Connector = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Connector (obj, exporters, full)
        {
            var fields = exporters["ConductingEquipment"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Automatic switch that will lock open to isolate a faulted section.
         *
         * It may, or may not, have load breaking capability. Its primary purpose is to provide fault sectionalising at locations where the fault current is either too high, or too low, for proper coordination of fuses.
         *
         */
        function parse_Sectionaliser (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "Sectionaliser";
            bucket = context.parsed.Sectionaliser;
            if (null == bucket)
                context.parsed.Sectionaliser = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Sectionaliser (obj, exporters, full)
        {
            var fields = exporters["Switch"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Describes a tap changer with a linear relation between the tap step and the phase angle difference across the transformer.
         *
         * This is a mathematical model that is an approximation of a real phase tap changer.
         *
         */
        function parse_PhaseTapChangerLinear (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PhaseTapChanger (context, sub);
            obj.cls = "PhaseTapChangerLinear";
            base.parse_element (/<cim:PhaseTapChangerLinear.stepPhaseShiftIncrement>([\s\S]*?)<\/cim:PhaseTapChangerLinear.stepPhaseShiftIncrement>/g, obj, "stepPhaseShiftIncrement", base.to_string, sub, context);
            base.parse_element (/<cim:PhaseTapChangerLinear.xMax>([\s\S]*?)<\/cim:PhaseTapChangerLinear.xMax>/g, obj, "xMax", base.to_string, sub, context);
            base.parse_element (/<cim:PhaseTapChangerLinear.xMin>([\s\S]*?)<\/cim:PhaseTapChangerLinear.xMin>/g, obj, "xMin", base.to_string, sub, context);
            bucket = context.parsed.PhaseTapChangerLinear;
            if (null == bucket)
                context.parsed.PhaseTapChangerLinear = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PhaseTapChangerLinear (obj, exporters, full)
        {
            var fields = exporters["PhaseTapChanger"](obj, exporters, false);

            base.export_element (obj, "PhaseTapChangerLinear", "stepPhaseShiftIncrement", base.from_string, fields);
            base.export_element (obj, "PhaseTapChangerLinear", "xMax", base.from_string, fields);
            base.export_element (obj, "PhaseTapChangerLinear", "xMin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A fixed impedance device used for grounding.
         *
         */
        function parse_GroundingImpedance (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EarthFaultCompensator (context, sub);
            obj.cls = "GroundingImpedance";
            base.parse_element (/<cim:GroundingImpedance.x>([\s\S]*?)<\/cim:GroundingImpedance.x>/g, obj, "x", base.to_string, sub, context);
            bucket = context.parsed.GroundingImpedance;
            if (null == bucket)
                context.parsed.GroundingImpedance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GroundingImpedance (obj, exporters, full)
        {
            var fields = exporters["EarthFaultCompensator"](obj, exporters, false);

            base.export_element (obj, "GroundingImpedance", "x", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Describes a curve for how the voltage magnitude and impedance varies with the tap step.
         *
         */
        function parse_RatioTapChangerTable (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "RatioTapChangerTable";
            bucket = context.parsed.RatioTapChangerTable;
            if (null == bucket)
                context.parsed.RatioTapChangerTable = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RatioTapChangerTable (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An overcurrent protective device with a circuit opening fusible part that is heated and severed by the passage of overcurrent through it.
         *
         * A fuse is considered a switching device because it breaks current.
         *
         */
        function parse_Fuse (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "Fuse";
            bucket = context.parsed.Fuse;
            if (null == bucket)
                context.parsed.Fuse = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Fuse (obj, exporters, full)
        {
            var fields = exporters["Switch"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A wire or combination of wires, with consistent electrical characteristics, building a single electrical system, used to carry alternating current between points in the power system.
         *
         * For symmetrical, transposed 3ph lines, it is sufficient to use  attributes of the line segment, which describe impedances and admittances for the entire length of the segment.  Additionally impedances can be computed by using length and associated per length impedances.
         *
         */
        function parse_ACLineSegment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Conductor (context, sub);
            obj.cls = "ACLineSegment";
            base.parse_element (/<cim:ACLineSegment.b0ch>([\s\S]*?)<\/cim:ACLineSegment.b0ch>/g, obj, "b0ch", base.to_string, sub, context);
            base.parse_element (/<cim:ACLineSegment.bch>([\s\S]*?)<\/cim:ACLineSegment.bch>/g, obj, "bch", base.to_string, sub, context);
            base.parse_element (/<cim:ACLineSegment.g0ch>([\s\S]*?)<\/cim:ACLineSegment.g0ch>/g, obj, "g0ch", base.to_string, sub, context);
            base.parse_element (/<cim:ACLineSegment.gch>([\s\S]*?)<\/cim:ACLineSegment.gch>/g, obj, "gch", base.to_string, sub, context);
            base.parse_element (/<cim:ACLineSegment.r>([\s\S]*?)<\/cim:ACLineSegment.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:ACLineSegment.r0>([\s\S]*?)<\/cim:ACLineSegment.r0>/g, obj, "r0", base.to_string, sub, context);
            base.parse_element (/<cim:ACLineSegment.shortCircuitEndTemperature>([\s\S]*?)<\/cim:ACLineSegment.shortCircuitEndTemperature>/g, obj, "shortCircuitEndTemperature", base.to_string, sub, context);
            base.parse_element (/<cim:ACLineSegment.x>([\s\S]*?)<\/cim:ACLineSegment.x>/g, obj, "x", base.to_string, sub, context);
            base.parse_element (/<cim:ACLineSegment.x0>([\s\S]*?)<\/cim:ACLineSegment.x0>/g, obj, "x0", base.to_string, sub, context);
            base.parse_attribute (/<cim:ACLineSegment.LineGroundingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LineGroundingAction", sub, context);
            base.parse_attribute (/<cim:ACLineSegment.LineJumpingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LineJumpingAction", sub, context);
            base.parse_attribute (/<cim:ACLineSegment.PerLengthImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PerLengthImpedance", sub, context);
            bucket = context.parsed.ACLineSegment;
            if (null == bucket)
                context.parsed.ACLineSegment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ACLineSegment (obj, exporters, full)
        {
            var fields = exporters["Conductor"](obj, exporters, false);

            base.export_element (obj, "ACLineSegment", "b0ch", base.from_string, fields);
            base.export_element (obj, "ACLineSegment", "bch", base.from_string, fields);
            base.export_element (obj, "ACLineSegment", "g0ch", base.from_string, fields);
            base.export_element (obj, "ACLineSegment", "gch", base.from_string, fields);
            base.export_element (obj, "ACLineSegment", "r", base.from_string, fields);
            base.export_element (obj, "ACLineSegment", "r0", base.from_string, fields);
            base.export_element (obj, "ACLineSegment", "shortCircuitEndTemperature", base.from_string, fields);
            base.export_element (obj, "ACLineSegment", "x", base.from_string, fields);
            base.export_element (obj, "ACLineSegment", "x0", base.from_string, fields);
            base.export_attribute (obj, "ACLineSegment", "LineGroundingAction", fields);
            base.export_attribute (obj, "ACLineSegment", "LineJumpingAction", fields);
            base.export_attribute (obj, "ACLineSegment", "PerLengthImpedance", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A device to convert from one frequency to another (e.g., frequency F1 to F2) comprises a pair of FrequencyConverter instances.
         *
         * One converts from F1 to DC, the other converts the DC to F2.
         *
         */
        function parse_FrequencyConverter (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegulatingCondEq (context, sub);
            obj.cls = "FrequencyConverter";
            base.parse_element (/<cim:FrequencyConverter.frequency>([\s\S]*?)<\/cim:FrequencyConverter.frequency>/g, obj, "frequency", base.to_string, sub, context);
            base.parse_element (/<cim:FrequencyConverter.maxP>([\s\S]*?)<\/cim:FrequencyConverter.maxP>/g, obj, "maxP", base.to_string, sub, context);
            base.parse_element (/<cim:FrequencyConverter.maxU>([\s\S]*?)<\/cim:FrequencyConverter.maxU>/g, obj, "maxU", base.to_string, sub, context);
            base.parse_element (/<cim:FrequencyConverter.minP>([\s\S]*?)<\/cim:FrequencyConverter.minP>/g, obj, "minP", base.to_string, sub, context);
            base.parse_element (/<cim:FrequencyConverter.minU>([\s\S]*?)<\/cim:FrequencyConverter.minU>/g, obj, "minU", base.to_string, sub, context);
            bucket = context.parsed.FrequencyConverter;
            if (null == bucket)
                context.parsed.FrequencyConverter = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FrequencyConverter (obj, exporters, full)
        {
            var fields = exporters["RegulatingCondEq"](obj, exporters, false);

            base.export_element (obj, "FrequencyConverter", "frequency", base.from_string, fields);
            base.export_element (obj, "FrequencyConverter", "maxP", base.from_string, fields);
            base.export_element (obj, "FrequencyConverter", "maxU", base.from_string, fields);
            base.export_element (obj, "FrequencyConverter", "minP", base.from_string, fields);
            base.export_element (obj, "FrequencyConverter", "minU", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An electrical device consisting of  two or more coupled windings, with or without a magnetic core, for introducing mutual coupling between electric circuits.
         *
         * Transformers can be used to control voltage and phase shift (active power flow).
         *
         */
        function parse_PowerTransformer (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "PowerTransformer";
            base.parse_element (/<cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent>([\s\S]*?)<\/cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent>/g, obj, "beforeShCircuitHighestOperatingCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage>([\s\S]*?)<\/cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage>/g, obj, "beforeShCircuitHighestOperatingVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformer.beforeShortCircuitAnglePf>([\s\S]*?)<\/cim:PowerTransformer.beforeShortCircuitAnglePf>/g, obj, "beforeShortCircuitAnglePf", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformer.highSideMinOperatingU>([\s\S]*?)<\/cim:PowerTransformer.highSideMinOperatingU>/g, obj, "highSideMinOperatingU", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformer.isPartOfGeneratorUnit>([\s\S]*?)<\/cim:PowerTransformer.isPartOfGeneratorUnit>/g, obj, "isPartOfGeneratorUnit", base.to_boolean, sub, context);
            base.parse_element (/<cim:PowerTransformer.operationalValuesConsidered>([\s\S]*?)<\/cim:PowerTransformer.operationalValuesConsidered>/g, obj, "operationalValuesConsidered", base.to_boolean, sub, context);
            base.parse_element (/<cim:PowerTransformer.vectorGroup>([\s\S]*?)<\/cim:PowerTransformer.vectorGroup>/g, obj, "vectorGroup", base.to_string, sub, context);
            bucket = context.parsed.PowerTransformer;
            if (null == bucket)
                context.parsed.PowerTransformer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PowerTransformer (obj, exporters, full)
        {
            var fields = exporters["ConductingEquipment"](obj, exporters, false);

            base.export_element (obj, "PowerTransformer", "beforeShCircuitHighestOperatingCurrent", base.from_string, fields);
            base.export_element (obj, "PowerTransformer", "beforeShCircuitHighestOperatingVoltage", base.from_string, fields);
            base.export_element (obj, "PowerTransformer", "beforeShortCircuitAnglePf", base.from_string, fields);
            base.export_element (obj, "PowerTransformer", "highSideMinOperatingU", base.from_string, fields);
            base.export_element (obj, "PowerTransformer", "isPartOfGeneratorUnit", base.from_boolean, fields);
            base.export_element (obj, "PowerTransformer", "operationalValuesConsidered", base.from_boolean, fields);
            base.export_element (obj, "PowerTransformer", "vectorGroup", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A PowerTransformerEnd is associated with each Terminal of a PowerTransformer.
         *
         * The impedance values r, r0, x, and x0 of a PowerTransformerEnd represents a star equivalent as follows
         *
         */
        function parse_PowerTransformerEnd (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TransformerEnd (context, sub);
            obj.cls = "PowerTransformerEnd";
            base.parse_element (/<cim:PowerTransformerEnd.b>([\s\S]*?)<\/cim:PowerTransformerEnd.b>/g, obj, "b", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformerEnd.b0>([\s\S]*?)<\/cim:PowerTransformerEnd.b0>/g, obj, "b0", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformerEnd.connectionKind>([\s\S]*?)<\/cim:PowerTransformerEnd.connectionKind>/g, obj, "connectionKind", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformerEnd.g>([\s\S]*?)<\/cim:PowerTransformerEnd.g>/g, obj, "g", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformerEnd.g0>([\s\S]*?)<\/cim:PowerTransformerEnd.g0>/g, obj, "g0", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformerEnd.phaseAngleClock>([\s\S]*?)<\/cim:PowerTransformerEnd.phaseAngleClock>/g, obj, "phaseAngleClock", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformerEnd.r>([\s\S]*?)<\/cim:PowerTransformerEnd.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformerEnd.r0>([\s\S]*?)<\/cim:PowerTransformerEnd.r0>/g, obj, "r0", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformerEnd.ratedS>([\s\S]*?)<\/cim:PowerTransformerEnd.ratedS>/g, obj, "ratedS", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformerEnd.ratedU>([\s\S]*?)<\/cim:PowerTransformerEnd.ratedU>/g, obj, "ratedU", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformerEnd.x>([\s\S]*?)<\/cim:PowerTransformerEnd.x>/g, obj, "x", base.to_string, sub, context);
            base.parse_element (/<cim:PowerTransformerEnd.x0>([\s\S]*?)<\/cim:PowerTransformerEnd.x0>/g, obj, "x0", base.to_string, sub, context);
            base.parse_attribute (/<cim:PowerTransformerEnd.PowerTransformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerTransformer", sub, context);
            bucket = context.parsed.PowerTransformerEnd;
            if (null == bucket)
                context.parsed.PowerTransformerEnd = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PowerTransformerEnd (obj, exporters, full)
        {
            var fields = exporters["TransformerEnd"](obj, exporters, false);

            base.export_element (obj, "PowerTransformerEnd", "b", base.from_string, fields);
            base.export_element (obj, "PowerTransformerEnd", "b0", base.from_string, fields);
            base.export_element (obj, "PowerTransformerEnd", "connectionKind", base.from_string, fields);
            base.export_element (obj, "PowerTransformerEnd", "g", base.from_string, fields);
            base.export_element (obj, "PowerTransformerEnd", "g0", base.from_string, fields);
            base.export_element (obj, "PowerTransformerEnd", "phaseAngleClock", base.from_string, fields);
            base.export_element (obj, "PowerTransformerEnd", "r", base.from_string, fields);
            base.export_element (obj, "PowerTransformerEnd", "r0", base.from_string, fields);
            base.export_element (obj, "PowerTransformerEnd", "ratedS", base.from_string, fields);
            base.export_element (obj, "PowerTransformerEnd", "ratedU", base.from_string, fields);
            base.export_element (obj, "PowerTransformerEnd", "x", base.from_string, fields);
            base.export_element (obj, "PowerTransformerEnd", "x0", base.from_string, fields);
            base.export_attribute (obj, "PowerTransformerEnd", "PowerTransformer", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A tap changer that changes the voltage ratio impacting the voltage magnitude but not the phase angle across the transformer.
         *
         */
        function parse_RatioTapChanger (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TapChanger (context, sub);
            obj.cls = "RatioTapChanger";
            base.parse_element (/<cim:RatioTapChanger.stepVoltageIncrement>([\s\S]*?)<\/cim:RatioTapChanger.stepVoltageIncrement>/g, obj, "stepVoltageIncrement", base.to_string, sub, context);
            base.parse_element (/<cim:RatioTapChanger.tculControlMode>([\s\S]*?)<\/cim:RatioTapChanger.tculControlMode>/g, obj, "tculControlMode", base.to_string, sub, context);
            base.parse_attribute (/<cim:RatioTapChanger.RatioTapChangerTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RatioTapChangerTable", sub, context);
            base.parse_attribute (/<cim:RatioTapChanger.TransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEnd", sub, context);
            bucket = context.parsed.RatioTapChanger;
            if (null == bucket)
                context.parsed.RatioTapChanger = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RatioTapChanger (obj, exporters, full)
        {
            var fields = exporters["TapChanger"](obj, exporters, false);

            base.export_element (obj, "RatioTapChanger", "stepVoltageIncrement", base.from_string, fields);
            base.export_element (obj, "RatioTapChanger", "tculControlMode", base.from_string, fields);
            base.export_attribute (obj, "RatioTapChanger", "RatioTapChangerTable", fields);
            base.export_attribute (obj, "RatioTapChanger", "TransformerEnd", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A single phase of an energy consumer.
         *
         */
        function parse_EnergyConsumerPhase (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "EnergyConsumerPhase";
            base.parse_element (/<cim:EnergyConsumerPhase.pfixed>([\s\S]*?)<\/cim:EnergyConsumerPhase.pfixed>/g, obj, "pfixed", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyConsumerPhase.pfixedPct>([\s\S]*?)<\/cim:EnergyConsumerPhase.pfixedPct>/g, obj, "pfixedPct", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyConsumerPhase.phase>([\s\S]*?)<\/cim:EnergyConsumerPhase.phase>/g, obj, "phase", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyConsumerPhase.qfixed>([\s\S]*?)<\/cim:EnergyConsumerPhase.qfixed>/g, obj, "qfixed", base.to_string, sub, context);
            base.parse_element (/<cim:EnergyConsumerPhase.qfixedPct>([\s\S]*?)<\/cim:EnergyConsumerPhase.qfixedPct>/g, obj, "qfixedPct", base.to_string, sub, context);
            base.parse_attribute (/<cim:EnergyConsumerPhase.EnergyConsumer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyConsumer", sub, context);
            bucket = context.parsed.EnergyConsumerPhase;
            if (null == bucket)
                context.parsed.EnergyConsumerPhase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnergyConsumerPhase (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "EnergyConsumerPhase", "pfixed", base.from_string, fields);
            base.export_element (obj, "EnergyConsumerPhase", "pfixedPct", base.from_string, fields);
            base.export_element (obj, "EnergyConsumerPhase", "phase", base.from_string, fields);
            base.export_element (obj, "EnergyConsumerPhase", "qfixed", base.from_string, fields);
            base.export_element (obj, "EnergyConsumerPhase", "qfixedPct", base.from_string, fields);
            base.export_attribute (obj, "EnergyConsumerPhase", "EnergyConsumer", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An electromechanical device that operates with shaft rotating synchronously with the network.
         *
         * It is a single machine operating either as a generator or synchronous condenser or pump.
         *
         */
        function parse_SynchronousMachine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RotatingMachine (context, sub);
            obj.cls = "SynchronousMachine";
            base.parse_element (/<cim:SynchronousMachine.aVRToManualLag>([\s\S]*?)<\/cim:SynchronousMachine.aVRToManualLag>/g, obj, "aVRToManualLag", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.aVRToManualLead>([\s\S]*?)<\/cim:SynchronousMachine.aVRToManualLead>/g, obj, "aVRToManualLead", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.baseQ>([\s\S]*?)<\/cim:SynchronousMachine.baseQ>/g, obj, "baseQ", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.condenserP>([\s\S]*?)<\/cim:SynchronousMachine.condenserP>/g, obj, "condenserP", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.coolantCondition>([\s\S]*?)<\/cim:SynchronousMachine.coolantCondition>/g, obj, "coolantCondition", base.to_float, sub, context);
            base.parse_element (/<cim:SynchronousMachine.coolantType>([\s\S]*?)<\/cim:SynchronousMachine.coolantType>/g, obj, "coolantType", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.earthing>([\s\S]*?)<\/cim:SynchronousMachine.earthing>/g, obj, "earthing", base.to_boolean, sub, context);
            base.parse_element (/<cim:SynchronousMachine.earthingStarPointR>([\s\S]*?)<\/cim:SynchronousMachine.earthingStarPointR>/g, obj, "earthingStarPointR", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.earthingStarPointX>([\s\S]*?)<\/cim:SynchronousMachine.earthingStarPointX>/g, obj, "earthingStarPointX", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.ikk>([\s\S]*?)<\/cim:SynchronousMachine.ikk>/g, obj, "ikk", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.manualToAVR>([\s\S]*?)<\/cim:SynchronousMachine.manualToAVR>/g, obj, "manualToAVR", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.maxQ>([\s\S]*?)<\/cim:SynchronousMachine.maxQ>/g, obj, "maxQ", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.maxU>([\s\S]*?)<\/cim:SynchronousMachine.maxU>/g, obj, "maxU", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.minQ>([\s\S]*?)<\/cim:SynchronousMachine.minQ>/g, obj, "minQ", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.minU>([\s\S]*?)<\/cim:SynchronousMachine.minU>/g, obj, "minU", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.mu>([\s\S]*?)<\/cim:SynchronousMachine.mu>/g, obj, "mu", base.to_float, sub, context);
            base.parse_element (/<cim:SynchronousMachine.operatingMode>([\s\S]*?)<\/cim:SynchronousMachine.operatingMode>/g, obj, "operatingMode", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.qPercent>([\s\S]*?)<\/cim:SynchronousMachine.qPercent>/g, obj, "qPercent", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.r>([\s\S]*?)<\/cim:SynchronousMachine.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.r0>([\s\S]*?)<\/cim:SynchronousMachine.r0>/g, obj, "r0", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.r2>([\s\S]*?)<\/cim:SynchronousMachine.r2>/g, obj, "r2", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.referencePriority>([\s\S]*?)<\/cim:SynchronousMachine.referencePriority>/g, obj, "referencePriority", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.satDirectSubtransX>([\s\S]*?)<\/cim:SynchronousMachine.satDirectSubtransX>/g, obj, "satDirectSubtransX", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.satDirectSyncX>([\s\S]*?)<\/cim:SynchronousMachine.satDirectSyncX>/g, obj, "satDirectSyncX", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.satDirectTransX>([\s\S]*?)<\/cim:SynchronousMachine.satDirectTransX>/g, obj, "satDirectTransX", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.shortCircuitRotorType>([\s\S]*?)<\/cim:SynchronousMachine.shortCircuitRotorType>/g, obj, "shortCircuitRotorType", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.type>([\s\S]*?)<\/cim:SynchronousMachine.type>/g, obj, "type", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.voltageRegulationRange>([\s\S]*?)<\/cim:SynchronousMachine.voltageRegulationRange>/g, obj, "voltageRegulationRange", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.x0>([\s\S]*?)<\/cim:SynchronousMachine.x0>/g, obj, "x0", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachine.x2>([\s\S]*?)<\/cim:SynchronousMachine.x2>/g, obj, "x2", base.to_string, sub, context);
            base.parse_attribute (/<cim:SynchronousMachine.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineDynamics", sub, context);
            base.parse_attribute (/<cim:SynchronousMachine.InitialReactiveCapabilityCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InitialReactiveCapabilityCurve", sub, context);
            bucket = context.parsed.SynchronousMachine;
            if (null == bucket)
                context.parsed.SynchronousMachine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SynchronousMachine (obj, exporters, full)
        {
            var fields = exporters["RotatingMachine"](obj, exporters, false);

            base.export_element (obj, "SynchronousMachine", "aVRToManualLag", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "aVRToManualLead", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "baseQ", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "condenserP", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "coolantCondition", base.from_float, fields);
            base.export_element (obj, "SynchronousMachine", "coolantType", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "earthing", base.from_boolean, fields);
            base.export_element (obj, "SynchronousMachine", "earthingStarPointR", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "earthingStarPointX", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "ikk", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "manualToAVR", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "maxQ", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "maxU", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "minQ", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "minU", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "mu", base.from_float, fields);
            base.export_element (obj, "SynchronousMachine", "operatingMode", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "qPercent", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "r", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "r0", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "r2", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "referencePriority", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "satDirectSubtransX", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "satDirectSyncX", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "satDirectTransX", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "shortCircuitRotorType", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "type", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "voltageRegulationRange", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "x0", base.from_string, fields);
            base.export_element (obj, "SynchronousMachine", "x2", base.from_string, fields);
            base.export_attribute (obj, "SynchronousMachine", "SynchronousMachineDynamics", fields);
            base.export_attribute (obj, "SynchronousMachine", "InitialReactiveCapabilityCurve", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Common type for per-length electrical catalogues describing line parameters.
         *
         */
        function parse_PerLengthLineParameter (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "PerLengthLineParameter";
            base.parse_attribute (/<cim:PerLengthLineParameter.WireSpacingInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WireSpacingInfo", sub, context);
            bucket = context.parsed.PerLengthLineParameter;
            if (null == bucket)
                context.parsed.PerLengthLineParameter = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PerLengthLineParameter (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "PerLengthLineParameter", "WireSpacingInfo", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Type of rotor, used by short circuit applications.
         *
         */
        function parse_ShortCircuitRotorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ShortCircuitRotorKind";
            base.parse_element (/<cim:ShortCircuitRotorKind.salientPole1>([\s\S]*?)<\/cim:ShortCircuitRotorKind.salientPole1>/g, obj, "salientPole1", base.to_string, sub, context);
            base.parse_element (/<cim:ShortCircuitRotorKind.salientPole2>([\s\S]*?)<\/cim:ShortCircuitRotorKind.salientPole2>/g, obj, "salientPole2", base.to_string, sub, context);
            base.parse_element (/<cim:ShortCircuitRotorKind.turboSeries1>([\s\S]*?)<\/cim:ShortCircuitRotorKind.turboSeries1>/g, obj, "turboSeries1", base.to_string, sub, context);
            base.parse_element (/<cim:ShortCircuitRotorKind.turboSeries2>([\s\S]*?)<\/cim:ShortCircuitRotorKind.turboSeries2>/g, obj, "turboSeries2", base.to_string, sub, context);
            bucket = context.parsed.ShortCircuitRotorKind;
            if (null == bucket)
                context.parsed.ShortCircuitRotorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ShortCircuitRotorKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ShortCircuitRotorKind", "salientPole1", base.from_string, fields);
            base.export_element (obj, "ShortCircuitRotorKind", "salientPole2", base.from_string, fields);
            base.export_element (obj, "ShortCircuitRotorKind", "turboSeries1", base.from_string, fields);
            base.export_element (obj, "ShortCircuitRotorKind", "turboSeries2", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Triplet of resistance, reactance, and susceptance matrix element values.
         *
         */
        function parse_PhaseImpedanceData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PhaseImpedanceData";
            base.parse_element (/<cim:PhaseImpedanceData.b>([\s\S]*?)<\/cim:PhaseImpedanceData.b>/g, obj, "b", base.to_string, sub, context);
            base.parse_element (/<cim:PhaseImpedanceData.r>([\s\S]*?)<\/cim:PhaseImpedanceData.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:PhaseImpedanceData.sequenceNumber>([\s\S]*?)<\/cim:PhaseImpedanceData.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
            base.parse_element (/<cim:PhaseImpedanceData.x>([\s\S]*?)<\/cim:PhaseImpedanceData.x>/g, obj, "x", base.to_string, sub, context);
            base.parse_attribute (/<cim:PhaseImpedanceData.PhaseImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PhaseImpedance", sub, context);
            bucket = context.parsed.PhaseImpedanceData;
            if (null == bucket)
                context.parsed.PhaseImpedanceData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PhaseImpedanceData (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PhaseImpedanceData", "b", base.from_string, fields);
            base.export_element (obj, "PhaseImpedanceData", "r", base.from_string, fields);
            base.export_element (obj, "PhaseImpedanceData", "sequenceNumber", base.from_string, fields);
            base.export_element (obj, "PhaseImpedanceData", "x", base.from_string, fields);
            base.export_attribute (obj, "PhaseImpedanceData", "PhaseImpedance", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A facility for providing variable and controllable shunt reactive power.
         *
         * The SVC typically consists of a stepdown transformer, filter, thyristor-controlled reactor, and thyristor-switched capacitor arms.
         *
         */
        function parse_StaticVarCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegulatingCondEq (context, sub);
            obj.cls = "StaticVarCompensator";
            base.parse_element (/<cim:StaticVarCompensator.capacitiveRating>([\s\S]*?)<\/cim:StaticVarCompensator.capacitiveRating>/g, obj, "capacitiveRating", base.to_string, sub, context);
            base.parse_element (/<cim:StaticVarCompensator.inductiveRating>([\s\S]*?)<\/cim:StaticVarCompensator.inductiveRating>/g, obj, "inductiveRating", base.to_string, sub, context);
            base.parse_element (/<cim:StaticVarCompensator.slope>([\s\S]*?)<\/cim:StaticVarCompensator.slope>/g, obj, "slope", base.to_string, sub, context);
            base.parse_element (/<cim:StaticVarCompensator.sVCControlMode>([\s\S]*?)<\/cim:StaticVarCompensator.sVCControlMode>/g, obj, "sVCControlMode", base.to_string, sub, context);
            base.parse_element (/<cim:StaticVarCompensator.voltageSetPoint>([\s\S]*?)<\/cim:StaticVarCompensator.voltageSetPoint>/g, obj, "voltageSetPoint", base.to_string, sub, context);
            base.parse_element (/<cim:StaticVarCompensator.q>([\s\S]*?)<\/cim:StaticVarCompensator.q>/g, obj, "q", base.to_string, sub, context);
            bucket = context.parsed.StaticVarCompensator;
            if (null == bucket)
                context.parsed.StaticVarCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StaticVarCompensator (obj, exporters, full)
        {
            var fields = exporters["RegulatingCondEq"](obj, exporters, false);

            base.export_element (obj, "StaticVarCompensator", "capacitiveRating", base.from_string, fields);
            base.export_element (obj, "StaticVarCompensator", "inductiveRating", base.from_string, fields);
            base.export_element (obj, "StaticVarCompensator", "slope", base.from_string, fields);
            base.export_element (obj, "StaticVarCompensator", "sVCControlMode", base.from_string, fields);
            base.export_element (obj, "StaticVarCompensator", "voltageSetPoint", base.from_string, fields);
            base.export_element (obj, "StaticVarCompensator", "q", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Describes a tabular curve for how the phase angle difference and impedance varies with the tap step.
         *
         */
        function parse_PhaseTapChangerTable (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "PhaseTapChangerTable";
            bucket = context.parsed.PhaseTapChangerTable;
            if (null == bucket)
                context.parsed.PhaseTapChangerTable = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PhaseTapChangerTable (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Transformer tank end represents an individual winding for unbalanced models or for transformer tanks connected into a bank (and bank is modelled with the PowerTransformer).
         *
         */
        function parse_TransformerTankEnd (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TransformerEnd (context, sub);
            obj.cls = "TransformerTankEnd";
            base.parse_element (/<cim:TransformerTankEnd.phases>([\s\S]*?)<\/cim:TransformerTankEnd.phases>/g, obj, "phases", base.to_string, sub, context);
            base.parse_attribute (/<cim:TransformerTankEnd.TransformerTank\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerTank", sub, context);
            bucket = context.parsed.TransformerTankEnd;
            if (null == bucket)
                context.parsed.TransformerTankEnd = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransformerTankEnd (obj, exporters, full)
        {
            var fields = exporters["TransformerEnd"](obj, exporters, false);

            base.export_element (obj, "TransformerTankEnd", "phases", base.from_string, fields);
            base.export_attribute (obj, "TransformerTankEnd", "TransformerTank", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Contains equipment beyond a substation belonging to a power transmission line.
         *
         */
        function parse_Line (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_EquipmentContainer (context, sub);
            obj.cls = "Line";
            base.parse_attribute (/<cim:Line.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Region", sub, context);
            bucket = context.parsed.Line;
            if (null == bucket)
                context.parsed.Line = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Line (obj, exporters, full)
        {
            var fields = exporters["EquipmentContainer"](obj, exporters, false);

            base.export_attribute (obj, "Line", "Region", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The non-linear phase tap changer describes the non-linear behavior of a phase tap changer.
         *
         * This is a base class for the symmetrical and asymmetrical phase tap changer models. The details of these models can be found in the IEC 61970-301 document.
         *
         */
        function parse_PhaseTapChangerNonLinear (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PhaseTapChanger (context, sub);
            obj.cls = "PhaseTapChangerNonLinear";
            base.parse_element (/<cim:PhaseTapChangerNonLinear.voltageStepIncrement>([\s\S]*?)<\/cim:PhaseTapChangerNonLinear.voltageStepIncrement>/g, obj, "voltageStepIncrement", base.to_string, sub, context);
            base.parse_element (/<cim:PhaseTapChangerNonLinear.xMax>([\s\S]*?)<\/cim:PhaseTapChangerNonLinear.xMax>/g, obj, "xMax", base.to_string, sub, context);
            base.parse_element (/<cim:PhaseTapChangerNonLinear.xMin>([\s\S]*?)<\/cim:PhaseTapChangerNonLinear.xMin>/g, obj, "xMin", base.to_string, sub, context);
            bucket = context.parsed.PhaseTapChangerNonLinear;
            if (null == bucket)
                context.parsed.PhaseTapChangerNonLinear = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PhaseTapChangerNonLinear (obj, exporters, full)
        {
            var fields = exporters["PhaseTapChanger"](obj, exporters, false);

            base.export_element (obj, "PhaseTapChangerNonLinear", "voltageStepIncrement", base.from_string, fields);
            base.export_element (obj, "PhaseTapChangerNonLinear", "xMax", base.from_string, fields);
            base.export_element (obj, "PhaseTapChangerNonLinear", "xMin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An assembly of two or more coupled windings that transform electrical power between voltage levels.
         *
         * These windings are bound on a common core and place in the same tank. Transformer tank can be used to model both single-phase and 3-phase transformers.
         *
         */
        function parse_TransformerTank (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Equipment (context, sub);
            obj.cls = "TransformerTank";
            base.parse_attribute (/<cim:TransformerTank.PowerTransformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerTransformer", sub, context);
            bucket = context.parsed.TransformerTank;
            if (null == bucket)
                context.parsed.TransformerTank = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransformerTank (obj, exporters, full)
        {
            var fields = exporters["Equipment"](obj, exporters, false);

            base.export_attribute (obj, "TransformerTank", "PowerTransformer", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A mechanical switching device capable of making, carrying, and breaking currents under normal operating conditions.
         *
         */
        function parse_LoadBreakSwitch (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectedSwitch (context, sub);
            obj.cls = "LoadBreakSwitch";
            bucket = context.parsed.LoadBreakSwitch;
            if (null == bucket)
                context.parsed.LoadBreakSwitch = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LoadBreakSwitch (obj, exporters, full)
        {
            var fields = exporters["ProtectedSwitch"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A per phase non linear shunt compensator has bank or section admittance values that differs.
         *
         */
        function parse_NonlinearShuntCompensatorPhase (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ShuntCompensatorPhase (context, sub);
            obj.cls = "NonlinearShuntCompensatorPhase";
            bucket = context.parsed.NonlinearShuntCompensatorPhase;
            if (null == bucket)
                context.parsed.NonlinearShuntCompensatorPhase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_NonlinearShuntCompensatorPhase (obj, exporters, full)
        {
            var fields = exporters["ShuntCompensatorPhase"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A pre-established pattern over time for a tap step.
         *
         */
        function parse_TapSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = LoadModel.parse_SeasonDayTypeSchedule (context, sub);
            obj.cls = "TapSchedule";
            base.parse_attribute (/<cim:TapSchedule.TapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TapChanger", sub, context);
            bucket = context.parsed.TapSchedule;
            if (null == bucket)
                context.parsed.TapSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TapSchedule (obj, exporters, full)
        {
            var fields = exporters["SeasonDayTypeSchedule"](obj, exporters, false);

            base.export_attribute (obj, "TapSchedule", "TapChanger", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_PhaseTapChangerTabular (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PhaseTapChanger (context, sub);
            obj.cls = "PhaseTapChangerTabular";
            base.parse_attribute (/<cim:PhaseTapChangerTabular.PhaseTapChangerTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PhaseTapChangerTable", sub, context);
            bucket = context.parsed.PhaseTapChangerTabular;
            if (null == bucket)
                context.parsed.PhaseTapChangerTabular = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PhaseTapChangerTabular (obj, exporters, full)
        {
            var fields = exporters["PhaseTapChanger"](obj, exporters, false);

            base.export_attribute (obj, "PhaseTapChangerTabular", "PhaseTapChangerTable", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A manually operated or motor operated mechanical switching device used for isolating a circuit or equipment from ground.
         *
         */
        function parse_GroundDisconnector (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "GroundDisconnector";
            bucket = context.parsed.GroundDisconnector;
            if (null == bucket)
                context.parsed.GroundDisconnector = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GroundDisconnector (obj, exporters, full)
        {
            var fields = exporters["Switch"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Sequence impedance and admittance parameters per unit length, for transposed lines of 1, 2, or 3 phases.
         *
         * For 1-phase lines, define x=x0=xself. For 2-phase lines, define x=xs-xm and x0=xs+xm.
         *
         */
        function parse_PerLengthSequenceImpedance (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PerLengthImpedance (context, sub);
            obj.cls = "PerLengthSequenceImpedance";
            base.parse_element (/<cim:PerLengthSequenceImpedance.b0ch>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.b0ch>/g, obj, "b0ch", base.to_string, sub, context);
            base.parse_element (/<cim:PerLengthSequenceImpedance.bch>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.bch>/g, obj, "bch", base.to_string, sub, context);
            base.parse_element (/<cim:PerLengthSequenceImpedance.g0ch>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.g0ch>/g, obj, "g0ch", base.to_string, sub, context);
            base.parse_element (/<cim:PerLengthSequenceImpedance.gch>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.gch>/g, obj, "gch", base.to_string, sub, context);
            base.parse_element (/<cim:PerLengthSequenceImpedance.r>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:PerLengthSequenceImpedance.r0>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.r0>/g, obj, "r0", base.to_string, sub, context);
            base.parse_element (/<cim:PerLengthSequenceImpedance.x>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.x>/g, obj, "x", base.to_string, sub, context);
            base.parse_element (/<cim:PerLengthSequenceImpedance.x0>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.x0>/g, obj, "x0", base.to_string, sub, context);
            bucket = context.parsed.PerLengthSequenceImpedance;
            if (null == bucket)
                context.parsed.PerLengthSequenceImpedance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PerLengthSequenceImpedance (obj, exporters, full)
        {
            var fields = exporters["PerLengthImpedance"](obj, exporters, false);

            base.export_element (obj, "PerLengthSequenceImpedance", "b0ch", base.from_string, fields);
            base.export_element (obj, "PerLengthSequenceImpedance", "bch", base.from_string, fields);
            base.export_element (obj, "PerLengthSequenceImpedance", "g0ch", base.from_string, fields);
            base.export_element (obj, "PerLengthSequenceImpedance", "gch", base.from_string, fields);
            base.export_element (obj, "PerLengthSequenceImpedance", "r", base.from_string, fields);
            base.export_element (obj, "PerLengthSequenceImpedance", "r0", base.from_string, fields);
            base.export_element (obj, "PerLengthSequenceImpedance", "x", base.from_string, fields);
            base.export_element (obj, "PerLengthSequenceImpedance", "x0", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A non linear shunt compensator has bank or section admittance values that differs.
         *
         */
        function parse_NonlinearShuntCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ShuntCompensator (context, sub);
            obj.cls = "NonlinearShuntCompensator";
            bucket = context.parsed.NonlinearShuntCompensator;
            if (null == bucket)
                context.parsed.NonlinearShuntCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_NonlinearShuntCompensator (obj, exporters, full)
        {
            var fields = exporters["ShuntCompensator"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A conducting equipment used to represent a connection to ground which is typically used to compensate earth faults..
         *
         * An earth fault compensator device modeled with a single terminal implies a second terminal solidly connected to ground.  If two terminals are modeled, the ground is not assumed and normal connection rules apply.
         *
         */
        function parse_EarthFaultCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "EarthFaultCompensator";
            base.parse_element (/<cim:EarthFaultCompensator.r>([\s\S]*?)<\/cim:EarthFaultCompensator.r>/g, obj, "r", base.to_string, sub, context);
            bucket = context.parsed.EarthFaultCompensator;
            if (null == bucket)
                context.parsed.EarthFaultCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EarthFaultCompensator (obj, exporters, full)
        {
            var fields = exporters["ConductingEquipment"](obj, exporters, false);

            base.export_element (obj, "EarthFaultCompensator", "r", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A Clamp is a galvanic connection at a line segment where other equipment is connected.
         *
         * A Clamp does not cut the line segment.
         *
         */
        function parse_Clamp (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "Clamp";
            base.parse_element (/<cim:Clamp.lengthFromTerminal1>([\s\S]*?)<\/cim:Clamp.lengthFromTerminal1>/g, obj, "lengthFromTerminal1", base.to_string, sub, context);
            base.parse_attribute (/<cim:Clamp.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ACLineSegment", sub, context);
            bucket = context.parsed.Clamp;
            if (null == bucket)
                context.parsed.Clamp = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Clamp (obj, exporters, full)
        {
            var fields = exporters["ConductingEquipment"](obj, exporters, false);

            base.export_element (obj, "Clamp", "lengthFromTerminal1", base.from_string, fields);
            base.export_attribute (obj, "Clamp", "ACLineSegment", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Describes each tap step in the phase tap changer tabular curve.
         *
         */
        function parse_PhaseTapChangerTablePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TapChangerTablePoint (context, sub);
            obj.cls = "PhaseTapChangerTablePoint";
            base.parse_element (/<cim:PhaseTapChangerTablePoint.angle>([\s\S]*?)<\/cim:PhaseTapChangerTablePoint.angle>/g, obj, "angle", base.to_string, sub, context);
            base.parse_attribute (/<cim:PhaseTapChangerTablePoint.PhaseTapChangerTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PhaseTapChangerTable", sub, context);
            bucket = context.parsed.PhaseTapChangerTablePoint;
            if (null == bucket)
                context.parsed.PhaseTapChangerTablePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PhaseTapChangerTablePoint (obj, exporters, full)
        {
            var fields = exporters["TapChangerTablePoint"](obj, exporters, false);

            base.export_element (obj, "PhaseTapChangerTablePoint", "angle", base.from_string, fields);
            base.export_attribute (obj, "PhaseTapChangerTablePoint", "PhaseTapChangerTable", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A ProtectedSwitch is a switching device that can be operated by ProtectionEquipment.
         *
         */
        function parse_ProtectedSwitch (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "ProtectedSwitch";
            base.parse_element (/<cim:ProtectedSwitch.breakingCapacity>([\s\S]*?)<\/cim:ProtectedSwitch.breakingCapacity>/g, obj, "breakingCapacity", base.to_string, sub, context);
            bucket = context.parsed.ProtectedSwitch;
            if (null == bucket)
                context.parsed.ProtectedSwitch = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProtectedSwitch (obj, exporters, full)
        {
            var fields = exporters["Switch"](obj, exporters, false);

            base.export_element (obj, "ProtectedSwitch", "breakingCapacity", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Synchronous machine type.
         *
         */
        function parse_SynchronousMachineKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SynchronousMachineKind";
            base.parse_element (/<cim:SynchronousMachineKind.generator>([\s\S]*?)<\/cim:SynchronousMachineKind.generator>/g, obj, "generator", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachineKind.condenser>([\s\S]*?)<\/cim:SynchronousMachineKind.condenser>/g, obj, "condenser", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachineKind.generatorOrCondenser>([\s\S]*?)<\/cim:SynchronousMachineKind.generatorOrCondenser>/g, obj, "generatorOrCondenser", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachineKind.motor>([\s\S]*?)<\/cim:SynchronousMachineKind.motor>/g, obj, "motor", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachineKind.generatorOrMotor>([\s\S]*?)<\/cim:SynchronousMachineKind.generatorOrMotor>/g, obj, "generatorOrMotor", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachineKind.motorOrCondenser>([\s\S]*?)<\/cim:SynchronousMachineKind.motorOrCondenser>/g, obj, "motorOrCondenser", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachineKind.generatorOrCondenserOrMotor>([\s\S]*?)<\/cim:SynchronousMachineKind.generatorOrCondenserOrMotor>/g, obj, "generatorOrCondenserOrMotor", base.to_string, sub, context);
            bucket = context.parsed.SynchronousMachineKind;
            if (null == bucket)
                context.parsed.SynchronousMachineKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SynchronousMachineKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SynchronousMachineKind", "generator", base.from_string, fields);
            base.export_element (obj, "SynchronousMachineKind", "condenser", base.from_string, fields);
            base.export_element (obj, "SynchronousMachineKind", "generatorOrCondenser", base.from_string, fields);
            base.export_element (obj, "SynchronousMachineKind", "motor", base.from_string, fields);
            base.export_element (obj, "SynchronousMachineKind", "generatorOrMotor", base.from_string, fields);
            base.export_element (obj, "SynchronousMachineKind", "motorOrCondenser", base.from_string, fields);
            base.export_element (obj, "SynchronousMachineKind", "generatorOrCondenserOrMotor", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The configuration of phase connections for a single terminal device such as a load or capactitor.
         *
         */
        function parse_PhaseShuntConnectionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PhaseShuntConnectionKind";
            base.parse_element (/<cim:PhaseShuntConnectionKind.D>([\s\S]*?)<\/cim:PhaseShuntConnectionKind.D>/g, obj, "D", base.to_string, sub, context);
            base.parse_element (/<cim:PhaseShuntConnectionKind.Y>([\s\S]*?)<\/cim:PhaseShuntConnectionKind.Y>/g, obj, "Y", base.to_string, sub, context);
            base.parse_element (/<cim:PhaseShuntConnectionKind.Yn>([\s\S]*?)<\/cim:PhaseShuntConnectionKind.Yn>/g, obj, "Yn", base.to_string, sub, context);
            base.parse_element (/<cim:PhaseShuntConnectionKind.I>([\s\S]*?)<\/cim:PhaseShuntConnectionKind.I>/g, obj, "I", base.to_string, sub, context);
            bucket = context.parsed.PhaseShuntConnectionKind;
            if (null == bucket)
                context.parsed.PhaseShuntConnectionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PhaseShuntConnectionKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PhaseShuntConnectionKind", "D", base.from_string, fields);
            base.export_element (obj, "PhaseShuntConnectionKind", "Y", base.from_string, fields);
            base.export_element (obj, "PhaseShuntConnectionKind", "Yn", base.from_string, fields);
            base.export_element (obj, "PhaseShuntConnectionKind", "I", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A cut separates a line segment into two parts.
         *
         * The cut appears as a switch inserted between these two parts and connects them together. As the cut is normally open there is no galvanic connection between the two line segment parts. But it is possible to close the cut to get galvanic connection.
         *
         */
        function parse_Cut (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "Cut";
            base.parse_element (/<cim:Cut.lengthFromTerminal1>([\s\S]*?)<\/cim:Cut.lengthFromTerminal1>/g, obj, "lengthFromTerminal1", base.to_string, sub, context);
            base.parse_attribute (/<cim:Cut.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ACLineSegment", sub, context);
            base.parse_attribute (/<cim:Cut.CutAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CutAction", sub, context);
            bucket = context.parsed.Cut;
            if (null == bucket)
                context.parsed.Cut = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Cut (obj, exporters, full)
        {
            var fields = exporters["Switch"](obj, exporters, false);

            base.export_element (obj, "Cut", "lengthFromTerminal1", base.from_string, fields);
            base.export_attribute (obj, "Cut", "ACLineSegment", fields);
            base.export_attribute (obj, "Cut", "CutAction", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A pre-established pattern over time for a controlled variable, e.g., busbar voltage.
         *
         */
        function parse_RegulationSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = LoadModel.parse_SeasonDayTypeSchedule (context, sub);
            obj.cls = "RegulationSchedule";
            base.parse_attribute (/<cim:RegulationSchedule.RegulatingControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegulatingControl", sub, context);
            bucket = context.parsed.RegulationSchedule;
            if (null == bucket)
                context.parsed.RegulationSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RegulationSchedule (obj, exporters, full)
        {
            var fields = exporters["SeasonDayTypeSchedule"](obj, exporters, false);

            base.export_attribute (obj, "RegulationSchedule", "RegulatingControl", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Represents a single wire of an alternating current line segment.
         *
         */
        function parse_ACLineSegmentPhase (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "ACLineSegmentPhase";
            base.parse_element (/<cim:ACLineSegmentPhase.phase>([\s\S]*?)<\/cim:ACLineSegmentPhase.phase>/g, obj, "phase", base.to_string, sub, context);
            base.parse_attribute (/<cim:ACLineSegmentPhase.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ACLineSegment", sub, context);
            bucket = context.parsed.ACLineSegmentPhase;
            if (null == bucket)
                context.parsed.ACLineSegmentPhase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ACLineSegmentPhase (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "ACLineSegmentPhase", "phase", base.from_string, fields);
            base.export_attribute (obj, "ACLineSegmentPhase", "ACLineSegment", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A mechanical switching device capable of making, carrying, and breaking currents under normal circuit conditions and also making, carrying for a specified time, and breaking currents under specified abnormal circuit conditions e.g.  those of short circuit.
         *
         */
        function parse_Breaker (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectedSwitch (context, sub);
            obj.cls = "Breaker";
            base.parse_element (/<cim:Breaker.inTransitTime>([\s\S]*?)<\/cim:Breaker.inTransitTime>/g, obj, "inTransitTime", base.to_string, sub, context);
            bucket = context.parsed.Breaker;
            if (null == bucket)
                context.parsed.Breaker = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Breaker (obj, exporters, full)
        {
            var fields = exporters["ProtectedSwitch"](obj, exporters, false);

            base.export_element (obj, "Breaker", "inTransitTime", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A short section of conductor with negligible impedance which can be manually removed and replaced if the circuit is de-energized.
         *
         * Note that zero-impedance branches can potentially be modeled by other equipment types.
         *
         */
        function parse_Jumper (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Switch (context, sub);
            obj.cls = "Jumper";
            base.parse_attribute (/<cim:Jumper.JumperAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "JumperAction", sub, context);
            bucket = context.parsed.Jumper;
            if (null == bucket)
                context.parsed.Jumper = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Jumper (obj, exporters, full)
        {
            var fields = exporters["Switch"](obj, exporters, false);

            base.export_attribute (obj, "Jumper", "JumperAction", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A conducting connection point of a power transformer.
         *
         * It corresponds to a physical transformer winding terminal.  In earlier CIM versions, the TransformerWinding class served a similar purpose, but this class is more flexible because it associates to terminal but is not a specialization of ConductingEquipment.
         *
         */
        function parse_TransformerEnd (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerEnd";
            base.parse_element (/<cim:TransformerEnd.bmagSat>([\s\S]*?)<\/cim:TransformerEnd.bmagSat>/g, obj, "bmagSat", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEnd.endNumber>([\s\S]*?)<\/cim:TransformerEnd.endNumber>/g, obj, "endNumber", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEnd.grounded>([\s\S]*?)<\/cim:TransformerEnd.grounded>/g, obj, "grounded", base.to_boolean, sub, context);
            base.parse_element (/<cim:TransformerEnd.magBaseU>([\s\S]*?)<\/cim:TransformerEnd.magBaseU>/g, obj, "magBaseU", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEnd.magSatFlux>([\s\S]*?)<\/cim:TransformerEnd.magSatFlux>/g, obj, "magSatFlux", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEnd.rground>([\s\S]*?)<\/cim:TransformerEnd.rground>/g, obj, "rground", base.to_string, sub, context);
            base.parse_element (/<cim:TransformerEnd.xground>([\s\S]*?)<\/cim:TransformerEnd.xground>/g, obj, "xground", base.to_string, sub, context);
            base.parse_attribute (/<cim:TransformerEnd.CoreAdmittance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CoreAdmittance", sub, context);
            base.parse_attribute (/<cim:TransformerEnd.PhaseTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PhaseTapChanger", sub, context);
            base.parse_attribute (/<cim:TransformerEnd.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseVoltage", sub, context);
            base.parse_attribute (/<cim:TransformerEnd.RatioTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RatioTapChanger", sub, context);
            base.parse_attribute (/<cim:TransformerEnd.StarImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StarImpedance", sub, context);
            base.parse_attribute (/<cim:TransformerEnd.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
            bucket = context.parsed.TransformerEnd;
            if (null == bucket)
                context.parsed.TransformerEnd = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TransformerEnd (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "TransformerEnd", "bmagSat", base.from_string, fields);
            base.export_element (obj, "TransformerEnd", "endNumber", base.from_string, fields);
            base.export_element (obj, "TransformerEnd", "grounded", base.from_boolean, fields);
            base.export_element (obj, "TransformerEnd", "magBaseU", base.from_string, fields);
            base.export_element (obj, "TransformerEnd", "magSatFlux", base.from_string, fields);
            base.export_element (obj, "TransformerEnd", "rground", base.from_string, fields);
            base.export_element (obj, "TransformerEnd", "xground", base.from_string, fields);
            base.export_attribute (obj, "TransformerEnd", "CoreAdmittance", fields);
            base.export_attribute (obj, "TransformerEnd", "PhaseTapChanger", fields);
            base.export_attribute (obj, "TransformerEnd", "BaseVoltage", fields);
            base.export_attribute (obj, "TransformerEnd", "RatioTapChanger", fields);
            base.export_attribute (obj, "TransformerEnd", "StarImpedance", fields);
            base.export_attribute (obj, "TransformerEnd", "Terminal", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A point where one or more conducting equipments are connected with zero resistance.
         *
         */
        function parse_Junction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Connector (context, sub);
            obj.cls = "Junction";
            bucket = context.parsed.Junction;
            if (null == bucket)
                context.parsed.Junction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Junction (obj, exporters, full)
        {
            var fields = exporters["Connector"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Common type for per-length impedance electrical catalogues.
         *
         */
        function parse_PerLengthImpedance (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PerLengthLineParameter (context, sub);
            obj.cls = "PerLengthImpedance";
            bucket = context.parsed.PerLengthImpedance;
            if (null == bucket)
                context.parsed.PerLengthImpedance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PerLengthImpedance (obj, exporters, full)
        {
            var fields = exporters["PerLengthLineParameter"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A schedule of switch positions.
         *
         * If RegularTimePoint.value1 is 0, the switch is open.  If 1, the switch is closed.
         *
         */
        function parse_SwitchSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = LoadModel.parse_SeasonDayTypeSchedule (context, sub);
            obj.cls = "SwitchSchedule";
            base.parse_attribute (/<cim:SwitchSchedule.Switch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Switch", sub, context);
            bucket = context.parsed.SwitchSchedule;
            if (null == bucket)
                context.parsed.SwitchSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SwitchSchedule (obj, exporters, full)
        {
            var fields = exporters["SeasonDayTypeSchedule"](obj, exporters, false);

            base.export_attribute (obj, "SwitchSchedule", "Switch", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Specifies a set of equipment that works together to control a power system quantity such as voltage or flow.
         *
         * Remote bus voltage control is possible by specifying the controlled terminal located at some place remote from the controlling equipment.
         *
         */
        function parse_RegulatingControl (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "RegulatingControl";
            base.parse_element (/<cim:RegulatingControl.discrete>([\s\S]*?)<\/cim:RegulatingControl.discrete>/g, obj, "discrete", base.to_boolean, sub, context);
            base.parse_element (/<cim:RegulatingControl.mode>([\s\S]*?)<\/cim:RegulatingControl.mode>/g, obj, "mode", base.to_string, sub, context);
            base.parse_element (/<cim:RegulatingControl.monitoredPhase>([\s\S]*?)<\/cim:RegulatingControl.monitoredPhase>/g, obj, "monitoredPhase", base.to_string, sub, context);
            base.parse_element (/<cim:RegulatingControl.targetDeadband>([\s\S]*?)<\/cim:RegulatingControl.targetDeadband>/g, obj, "targetDeadband", base.to_float, sub, context);
            base.parse_element (/<cim:RegulatingControl.targetValue>([\s\S]*?)<\/cim:RegulatingControl.targetValue>/g, obj, "targetValue", base.to_float, sub, context);
            base.parse_element (/<cim:RegulatingControl.targetValueUnitMultiplier>([\s\S]*?)<\/cim:RegulatingControl.targetValueUnitMultiplier>/g, obj, "targetValueUnitMultiplier", base.to_string, sub, context);
            base.parse_element (/<cim:RegulatingControl.enabled>([\s\S]*?)<\/cim:RegulatingControl.enabled>/g, obj, "enabled", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:RegulatingControl.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
            bucket = context.parsed.RegulatingControl;
            if (null == bucket)
                context.parsed.RegulatingControl = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RegulatingControl (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "RegulatingControl", "discrete", base.from_boolean, fields);
            base.export_element (obj, "RegulatingControl", "mode", base.from_string, fields);
            base.export_element (obj, "RegulatingControl", "monitoredPhase", base.from_string, fields);
            base.export_element (obj, "RegulatingControl", "targetDeadband", base.from_float, fields);
            base.export_element (obj, "RegulatingControl", "targetValue", base.from_float, fields);
            base.export_element (obj, "RegulatingControl", "targetValueUnitMultiplier", base.from_string, fields);
            base.export_element (obj, "RegulatingControl", "enabled", base.from_boolean, fields);
            base.export_attribute (obj, "RegulatingControl", "Terminal", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Mechanism for changing transformer winding tap positions.
         *
         */
        function parse_TapChanger (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "TapChanger";
            base.parse_element (/<cim:TapChanger.highStep>([\s\S]*?)<\/cim:TapChanger.highStep>/g, obj, "highStep", base.to_string, sub, context);
            base.parse_element (/<cim:TapChanger.initialDelay>([\s\S]*?)<\/cim:TapChanger.initialDelay>/g, obj, "initialDelay", base.to_string, sub, context);
            base.parse_element (/<cim:TapChanger.lowStep>([\s\S]*?)<\/cim:TapChanger.lowStep>/g, obj, "lowStep", base.to_string, sub, context);
            base.parse_element (/<cim:TapChanger.ltcFlag>([\s\S]*?)<\/cim:TapChanger.ltcFlag>/g, obj, "ltcFlag", base.to_boolean, sub, context);
            base.parse_element (/<cim:TapChanger.neutralStep>([\s\S]*?)<\/cim:TapChanger.neutralStep>/g, obj, "neutralStep", base.to_string, sub, context);
            base.parse_element (/<cim:TapChanger.neutralU>([\s\S]*?)<\/cim:TapChanger.neutralU>/g, obj, "neutralU", base.to_string, sub, context);
            base.parse_element (/<cim:TapChanger.normalStep>([\s\S]*?)<\/cim:TapChanger.normalStep>/g, obj, "normalStep", base.to_string, sub, context);
            base.parse_element (/<cim:TapChanger.subsequentDelay>([\s\S]*?)<\/cim:TapChanger.subsequentDelay>/g, obj, "subsequentDelay", base.to_string, sub, context);
            base.parse_element (/<cim:TapChanger.controlEnabled>([\s\S]*?)<\/cim:TapChanger.controlEnabled>/g, obj, "controlEnabled", base.to_boolean, sub, context);
            base.parse_element (/<cim:TapChanger.step>([\s\S]*?)<\/cim:TapChanger.step>/g, obj, "step", base.to_float, sub, context);
            base.parse_attribute (/<cim:TapChanger.TapChangerControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TapChangerControl", sub, context);
            base.parse_attribute (/<cim:TapChanger.SvTapStep\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SvTapStep", sub, context);
            bucket = context.parsed.TapChanger;
            if (null == bucket)
                context.parsed.TapChanger = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TapChanger (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "TapChanger", "highStep", base.from_string, fields);
            base.export_element (obj, "TapChanger", "initialDelay", base.from_string, fields);
            base.export_element (obj, "TapChanger", "lowStep", base.from_string, fields);
            base.export_element (obj, "TapChanger", "ltcFlag", base.from_boolean, fields);
            base.export_element (obj, "TapChanger", "neutralStep", base.from_string, fields);
            base.export_element (obj, "TapChanger", "neutralU", base.from_string, fields);
            base.export_element (obj, "TapChanger", "normalStep", base.from_string, fields);
            base.export_element (obj, "TapChanger", "subsequentDelay", base.from_string, fields);
            base.export_element (obj, "TapChanger", "controlEnabled", base.from_boolean, fields);
            base.export_element (obj, "TapChanger", "step", base.from_float, fields);
            base.export_attribute (obj, "TapChanger", "TapChangerControl", fields);
            base.export_attribute (obj, "TapChanger", "SvTapStep", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A generic equivalent for an energy supplier on a transmission or distribution voltage level.
         *
         */
        function parse_EnergySource (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "EnergySource";
            base.parse_element (/<cim:EnergySource.activePower>([\s\S]*?)<\/cim:EnergySource.activePower>/g, obj, "activePower", base.to_string, sub, context);
            base.parse_element (/<cim:EnergySource.nominalVoltage>([\s\S]*?)<\/cim:EnergySource.nominalVoltage>/g, obj, "nominalVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:EnergySource.r>([\s\S]*?)<\/cim:EnergySource.r>/g, obj, "r", base.to_string, sub, context);
            base.parse_element (/<cim:EnergySource.r0>([\s\S]*?)<\/cim:EnergySource.r0>/g, obj, "r0", base.to_string, sub, context);
            base.parse_element (/<cim:EnergySource.rn>([\s\S]*?)<\/cim:EnergySource.rn>/g, obj, "rn", base.to_string, sub, context);
            base.parse_element (/<cim:EnergySource.voltageAngle>([\s\S]*?)<\/cim:EnergySource.voltageAngle>/g, obj, "voltageAngle", base.to_string, sub, context);
            base.parse_element (/<cim:EnergySource.voltageMagnitude>([\s\S]*?)<\/cim:EnergySource.voltageMagnitude>/g, obj, "voltageMagnitude", base.to_string, sub, context);
            base.parse_element (/<cim:EnergySource.x>([\s\S]*?)<\/cim:EnergySource.x>/g, obj, "x", base.to_string, sub, context);
            base.parse_element (/<cim:EnergySource.x0>([\s\S]*?)<\/cim:EnergySource.x0>/g, obj, "x0", base.to_string, sub, context);
            base.parse_element (/<cim:EnergySource.xn>([\s\S]*?)<\/cim:EnergySource.xn>/g, obj, "xn", base.to_string, sub, context);
            base.parse_element (/<cim:EnergySource.reactivePower>([\s\S]*?)<\/cim:EnergySource.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);
            base.parse_attribute (/<cim:EnergySource.WindTurbineType3or4Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4Dynamics", sub, context);
            base.parse_attribute (/<cim:EnergySource.EnergySourceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySourceAction", sub, context);
            base.parse_attribute (/<cim:EnergySource.EnergySchedulingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySchedulingType", sub, context);
            bucket = context.parsed.EnergySource;
            if (null == bucket)
                context.parsed.EnergySource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnergySource (obj, exporters, full)
        {
            var fields = exporters["ConductingEquipment"](obj, exporters, false);

            base.export_element (obj, "EnergySource", "activePower", base.from_string, fields);
            base.export_element (obj, "EnergySource", "nominalVoltage", base.from_string, fields);
            base.export_element (obj, "EnergySource", "r", base.from_string, fields);
            base.export_element (obj, "EnergySource", "r0", base.from_string, fields);
            base.export_element (obj, "EnergySource", "rn", base.from_string, fields);
            base.export_element (obj, "EnergySource", "voltageAngle", base.from_string, fields);
            base.export_element (obj, "EnergySource", "voltageMagnitude", base.from_string, fields);
            base.export_element (obj, "EnergySource", "x", base.from_string, fields);
            base.export_element (obj, "EnergySource", "x0", base.from_string, fields);
            base.export_element (obj, "EnergySource", "xn", base.from_string, fields);
            base.export_element (obj, "EnergySource", "reactivePower", base.from_string, fields);
            base.export_attribute (obj, "EnergySource", "WindTurbineType3or4Dynamics", fields);
            base.export_attribute (obj, "EnergySource", "EnergySourceAction", fields);
            base.export_attribute (obj, "EnergySource", "EnergySchedulingType", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Static VAr Compensator control mode.
         *
         */
        function parse_SVCControlMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SVCControlMode";
            base.parse_element (/<cim:SVCControlMode.reactivePower>([\s\S]*?)<\/cim:SVCControlMode.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);
            base.parse_element (/<cim:SVCControlMode.voltage>([\s\S]*?)<\/cim:SVCControlMode.voltage>/g, obj, "voltage", base.to_string, sub, context);
            bucket = context.parsed.SVCControlMode;
            if (null == bucket)
                context.parsed.SVCControlMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SVCControlMode (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SVCControlMode", "reactivePower", base.from_string, fields);
            base.export_element (obj, "SVCControlMode", "voltage", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Describes each tap step in the ratio tap changer tabular curve.
         *
         */
        function parse_RatioTapChangerTablePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TapChangerTablePoint (context, sub);
            obj.cls = "RatioTapChangerTablePoint";
            base.parse_attribute (/<cim:RatioTapChangerTablePoint.RatioTapChangerTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RatioTapChangerTable", sub, context);
            bucket = context.parsed.RatioTapChangerTablePoint;
            if (null == bucket)
                context.parsed.RatioTapChangerTablePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RatioTapChangerTablePoint (obj, exporters, full)
        {
            var fields = exporters["TapChangerTablePoint"](obj, exporters, false);

            base.export_attribute (obj, "RatioTapChangerTablePoint", "RatioTapChangerTable", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Single phase of a multi-phase shunt compensator when its attributes might be different per phase.
         *
         */
        function parse_ShuntCompensatorPhase (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "ShuntCompensatorPhase";
            base.parse_element (/<cim:ShuntCompensatorPhase.maximumSections>([\s\S]*?)<\/cim:ShuntCompensatorPhase.maximumSections>/g, obj, "maximumSections", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensatorPhase.normalSections>([\s\S]*?)<\/cim:ShuntCompensatorPhase.normalSections>/g, obj, "normalSections", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensatorPhase.phase>([\s\S]*?)<\/cim:ShuntCompensatorPhase.phase>/g, obj, "phase", base.to_string, sub, context);
            base.parse_attribute (/<cim:ShuntCompensatorPhase.ShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensator", sub, context);
            bucket = context.parsed.ShuntCompensatorPhase;
            if (null == bucket)
                context.parsed.ShuntCompensatorPhase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ShuntCompensatorPhase (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "ShuntCompensatorPhase", "maximumSections", base.from_string, fields);
            base.export_element (obj, "ShuntCompensatorPhase", "normalSections", base.from_string, fields);
            base.export_element (obj, "ShuntCompensatorPhase", "phase", base.from_string, fields);
            base.export_attribute (obj, "ShuntCompensatorPhase", "ShuntCompensator", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Single phase of a multi-phase switch when its attributes might be different per phase.
         *
         */
        function parse_SwitchPhase (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "SwitchPhase";
            base.parse_element (/<cim:SwitchPhase.normalOpen>([\s\S]*?)<\/cim:SwitchPhase.normalOpen>/g, obj, "normalOpen", base.to_boolean, sub, context);
            base.parse_element (/<cim:SwitchPhase.phaseSide1>([\s\S]*?)<\/cim:SwitchPhase.phaseSide1>/g, obj, "phaseSide1", base.to_string, sub, context);
            base.parse_element (/<cim:SwitchPhase.phaseSide2>([\s\S]*?)<\/cim:SwitchPhase.phaseSide2>/g, obj, "phaseSide2", base.to_string, sub, context);
            base.parse_element (/<cim:SwitchPhase.closed>([\s\S]*?)<\/cim:SwitchPhase.closed>/g, obj, "closed", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:SwitchPhase.Switch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Switch", sub, context);
            bucket = context.parsed.SwitchPhase;
            if (null == bucket)
                context.parsed.SwitchPhase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SwitchPhase (obj, exporters, full)
        {
            var fields = exporters["PowerSystemResource"](obj, exporters, false);

            base.export_element (obj, "SwitchPhase", "normalOpen", base.from_boolean, fields);
            base.export_element (obj, "SwitchPhase", "phaseSide1", base.from_string, fields);
            base.export_element (obj, "SwitchPhase", "phaseSide2", base.from_string, fields);
            base.export_element (obj, "SwitchPhase", "closed", base.from_boolean, fields);
            base.export_attribute (obj, "SwitchPhase", "Switch", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class represents external network and it is used for IEC 60909 calculations.
         *
         */
        function parse_ExternalNetworkInjection (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegulatingCondEq (context, sub);
            obj.cls = "ExternalNetworkInjection";
            base.parse_element (/<cim:ExternalNetworkInjection.governorSCD>([\s\S]*?)<\/cim:ExternalNetworkInjection.governorSCD>/g, obj, "governorSCD", base.to_string, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.ikSecond>([\s\S]*?)<\/cim:ExternalNetworkInjection.ikSecond>/g, obj, "ikSecond", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.maxInitialSymShCCurrent>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxInitialSymShCCurrent>/g, obj, "maxInitialSymShCCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.maxP>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxP>/g, obj, "maxP", base.to_string, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.maxQ>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxQ>/g, obj, "maxQ", base.to_string, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.maxR0ToX0Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxR0ToX0Ratio>/g, obj, "maxR0ToX0Ratio", base.to_float, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.maxR1ToX1Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxR1ToX1Ratio>/g, obj, "maxR1ToX1Ratio", base.to_float, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.maxZ0ToZ1Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxZ0ToZ1Ratio>/g, obj, "maxZ0ToZ1Ratio", base.to_float, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.minInitialSymShCCurrent>([\s\S]*?)<\/cim:ExternalNetworkInjection.minInitialSymShCCurrent>/g, obj, "minInitialSymShCCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.minP>([\s\S]*?)<\/cim:ExternalNetworkInjection.minP>/g, obj, "minP", base.to_string, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.minQ>([\s\S]*?)<\/cim:ExternalNetworkInjection.minQ>/g, obj, "minQ", base.to_string, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.minR0ToX0Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.minR0ToX0Ratio>/g, obj, "minR0ToX0Ratio", base.to_float, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.minR1ToX1Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.minR1ToX1Ratio>/g, obj, "minR1ToX1Ratio", base.to_float, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.minZ0ToZ1Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.minZ0ToZ1Ratio>/g, obj, "minZ0ToZ1Ratio", base.to_float, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.referencePriority>([\s\S]*?)<\/cim:ExternalNetworkInjection.referencePriority>/g, obj, "referencePriority", base.to_string, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.voltageFactor>([\s\S]*?)<\/cim:ExternalNetworkInjection.voltageFactor>/g, obj, "voltageFactor", base.to_string, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.p>([\s\S]*?)<\/cim:ExternalNetworkInjection.p>/g, obj, "p", base.to_string, sub, context);
            base.parse_element (/<cim:ExternalNetworkInjection.q>([\s\S]*?)<\/cim:ExternalNetworkInjection.q>/g, obj, "q", base.to_string, sub, context);
            bucket = context.parsed.ExternalNetworkInjection;
            if (null == bucket)
                context.parsed.ExternalNetworkInjection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExternalNetworkInjection (obj, exporters, full)
        {
            var fields = exporters["RegulatingCondEq"](obj, exporters, false);

            base.export_element (obj, "ExternalNetworkInjection", "governorSCD", base.from_string, fields);
            base.export_element (obj, "ExternalNetworkInjection", "ikSecond", base.from_boolean, fields);
            base.export_element (obj, "ExternalNetworkInjection", "maxInitialSymShCCurrent", base.from_string, fields);
            base.export_element (obj, "ExternalNetworkInjection", "maxP", base.from_string, fields);
            base.export_element (obj, "ExternalNetworkInjection", "maxQ", base.from_string, fields);
            base.export_element (obj, "ExternalNetworkInjection", "maxR0ToX0Ratio", base.from_float, fields);
            base.export_element (obj, "ExternalNetworkInjection", "maxR1ToX1Ratio", base.from_float, fields);
            base.export_element (obj, "ExternalNetworkInjection", "maxZ0ToZ1Ratio", base.from_float, fields);
            base.export_element (obj, "ExternalNetworkInjection", "minInitialSymShCCurrent", base.from_string, fields);
            base.export_element (obj, "ExternalNetworkInjection", "minP", base.from_string, fields);
            base.export_element (obj, "ExternalNetworkInjection", "minQ", base.from_string, fields);
            base.export_element (obj, "ExternalNetworkInjection", "minR0ToX0Ratio", base.from_float, fields);
            base.export_element (obj, "ExternalNetworkInjection", "minR1ToX1Ratio", base.from_float, fields);
            base.export_element (obj, "ExternalNetworkInjection", "minZ0ToZ1Ratio", base.from_float, fields);
            base.export_element (obj, "ExternalNetworkInjection", "referencePriority", base.from_string, fields);
            base.export_element (obj, "ExternalNetworkInjection", "voltageFactor", base.from_string, fields);
            base.export_element (obj, "ExternalNetworkInjection", "p", base.from_string, fields);
            base.export_element (obj, "ExternalNetworkInjection", "q", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Describes behavior specific to tap changers, e.g. how the voltage at the end of a line varies with the load level and compensation of the voltage drop by tap adjustment.
         *
         */
        function parse_TapChangerControl (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegulatingControl (context, sub);
            obj.cls = "TapChangerControl";
            base.parse_element (/<cim:TapChangerControl.limitVoltage>([\s\S]*?)<\/cim:TapChangerControl.limitVoltage>/g, obj, "limitVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerControl.lineDropCompensation>([\s\S]*?)<\/cim:TapChangerControl.lineDropCompensation>/g, obj, "lineDropCompensation", base.to_boolean, sub, context);
            base.parse_element (/<cim:TapChangerControl.lineDropR>([\s\S]*?)<\/cim:TapChangerControl.lineDropR>/g, obj, "lineDropR", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerControl.lineDropX>([\s\S]*?)<\/cim:TapChangerControl.lineDropX>/g, obj, "lineDropX", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerControl.reverseLineDropR>([\s\S]*?)<\/cim:TapChangerControl.reverseLineDropR>/g, obj, "reverseLineDropR", base.to_string, sub, context);
            base.parse_element (/<cim:TapChangerControl.reverseLineDropX>([\s\S]*?)<\/cim:TapChangerControl.reverseLineDropX>/g, obj, "reverseLineDropX", base.to_string, sub, context);
            bucket = context.parsed.TapChangerControl;
            if (null == bucket)
                context.parsed.TapChangerControl = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TapChangerControl (obj, exporters, full)
        {
            var fields = exporters["RegulatingControl"](obj, exporters, false);

            base.export_element (obj, "TapChangerControl", "limitVoltage", base.from_string, fields);
            base.export_element (obj, "TapChangerControl", "lineDropCompensation", base.from_boolean, fields);
            base.export_element (obj, "TapChangerControl", "lineDropR", base.from_string, fields);
            base.export_element (obj, "TapChangerControl", "lineDropX", base.from_string, fields);
            base.export_element (obj, "TapChangerControl", "reverseLineDropR", base.from_string, fields);
            base.export_element (obj, "TapChangerControl", "reverseLineDropX", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Enumeration of single phase identifiers.
         *
         * Allows designation of single phases for both transmission and distribution equipment, circuits and loads.
         *
         */
        function parse_SinglePhaseKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SinglePhaseKind";
            base.parse_element (/<cim:SinglePhaseKind.A>([\s\S]*?)<\/cim:SinglePhaseKind.A>/g, obj, "A", base.to_string, sub, context);
            base.parse_element (/<cim:SinglePhaseKind.B>([\s\S]*?)<\/cim:SinglePhaseKind.B>/g, obj, "B", base.to_string, sub, context);
            base.parse_element (/<cim:SinglePhaseKind.C>([\s\S]*?)<\/cim:SinglePhaseKind.C>/g, obj, "C", base.to_string, sub, context);
            base.parse_element (/<cim:SinglePhaseKind.N>([\s\S]*?)<\/cim:SinglePhaseKind.N>/g, obj, "N", base.to_string, sub, context);
            base.parse_element (/<cim:SinglePhaseKind.s1>([\s\S]*?)<\/cim:SinglePhaseKind.s1>/g, obj, "s1", base.to_string, sub, context);
            base.parse_element (/<cim:SinglePhaseKind.s2>([\s\S]*?)<\/cim:SinglePhaseKind.s2>/g, obj, "s2", base.to_string, sub, context);
            bucket = context.parsed.SinglePhaseKind;
            if (null == bucket)
                context.parsed.SinglePhaseKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SinglePhaseKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SinglePhaseKind", "A", base.from_string, fields);
            base.export_element (obj, "SinglePhaseKind", "B", base.from_string, fields);
            base.export_element (obj, "SinglePhaseKind", "C", base.from_string, fields);
            base.export_element (obj, "SinglePhaseKind", "N", base.from_string, fields);
            base.export_element (obj, "SinglePhaseKind", "s1", base.from_string, fields);
            base.export_element (obj, "SinglePhaseKind", "s2", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A model of a set of individual Switches normally enclosed within the same cabinet and possibly with interlocks that restrict the combination of switch positions.
         *
         * These are typically found in medium voltage distribution networks.
         *
         */
        function parse_CompositeSwitch (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Equipment (context, sub);
            obj.cls = "CompositeSwitch";
            base.parse_element (/<cim:CompositeSwitch.compositeSwitchType>([\s\S]*?)<\/cim:CompositeSwitch.compositeSwitchType>/g, obj, "compositeSwitchType", base.to_string, sub, context);
            bucket = context.parsed.CompositeSwitch;
            if (null == bucket)
                context.parsed.CompositeSwitch = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CompositeSwitch (obj, exporters, full)
        {
            var fields = exporters["Equipment"](obj, exporters, false);

            base.export_element (obj, "CompositeSwitch", "compositeSwitchType", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A per phase linear shunt compensator has banks or sections with equal admittance values.
         *
         */
        function parse_LinearShuntCompensatorPhase (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ShuntCompensatorPhase (context, sub);
            obj.cls = "LinearShuntCompensatorPhase";
            base.parse_element (/<cim:LinearShuntCompensatorPhase.gPerSection>([\s\S]*?)<\/cim:LinearShuntCompensatorPhase.gPerSection>/g, obj, "gPerSection", base.to_string, sub, context);
            base.parse_element (/<cim:LinearShuntCompensatorPhase.bPerSection>([\s\S]*?)<\/cim:LinearShuntCompensatorPhase.bPerSection>/g, obj, "bPerSection", base.to_string, sub, context);
            bucket = context.parsed.LinearShuntCompensatorPhase;
            if (null == bucket)
                context.parsed.LinearShuntCompensatorPhase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LinearShuntCompensatorPhase (obj, exporters, full)
        {
            var fields = exporters["ShuntCompensatorPhase"](obj, exporters, false);

            base.export_element (obj, "LinearShuntCompensatorPhase", "gPerSection", base.from_string, fields);
            base.export_element (obj, "LinearShuntCompensatorPhase", "bPerSection", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A type of conducting equipment that can regulate a quantity (i.e. voltage or flow) at a specific point in the network.
         *
         */
        function parse_RegulatingCondEq (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "RegulatingCondEq";
            base.parse_element (/<cim:RegulatingCondEq.controlEnabled>([\s\S]*?)<\/cim:RegulatingCondEq.controlEnabled>/g, obj, "controlEnabled", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:RegulatingCondEq.RegulatingControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegulatingControl", sub, context);
            bucket = context.parsed.RegulatingCondEq;
            if (null == bucket)
                context.parsed.RegulatingCondEq = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RegulatingCondEq (obj, exporters, full)
        {
            var fields = exporters["ConductingEquipment"](obj, exporters, false);

            base.export_element (obj, "RegulatingCondEq", "controlEnabled", base.from_boolean, fields);
            base.export_attribute (obj, "RegulatingCondEq", "RegulatingControl", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A point where the system is grounded used for connecting conducting equipment to ground.
         *
         * The power system model can have any number of grounds.
         *
         */
        function parse_Ground (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "Ground";
            base.parse_attribute (/<cim:Ground.GroundAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GroundAction", sub, context);
            bucket = context.parsed.Ground;
            if (null == bucket)
                context.parsed.Ground = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Ground (obj, exporters, full)
        {
            var fields = exporters["ConductingEquipment"](obj, exporters, false);

            base.export_attribute (obj, "Ground", "GroundAction", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A linear shunt compensator has banks or sections with equal admittance values.
         *
         */
        function parse_LinearShuntCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ShuntCompensator (context, sub);
            obj.cls = "LinearShuntCompensator";
            base.parse_element (/<cim:LinearShuntCompensator.b0PerSection>([\s\S]*?)<\/cim:LinearShuntCompensator.b0PerSection>/g, obj, "b0PerSection", base.to_string, sub, context);
            base.parse_element (/<cim:LinearShuntCompensator.bPerSection>([\s\S]*?)<\/cim:LinearShuntCompensator.bPerSection>/g, obj, "bPerSection", base.to_string, sub, context);
            base.parse_element (/<cim:LinearShuntCompensator.g0PerSection>([\s\S]*?)<\/cim:LinearShuntCompensator.g0PerSection>/g, obj, "g0PerSection", base.to_string, sub, context);
            base.parse_element (/<cim:LinearShuntCompensator.gPerSection>([\s\S]*?)<\/cim:LinearShuntCompensator.gPerSection>/g, obj, "gPerSection", base.to_string, sub, context);
            bucket = context.parsed.LinearShuntCompensator;
            if (null == bucket)
                context.parsed.LinearShuntCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LinearShuntCompensator (obj, exporters, full)
        {
            var fields = exporters["ShuntCompensator"](obj, exporters, false);

            base.export_element (obj, "LinearShuntCompensator", "b0PerSection", base.from_string, fields);
            base.export_element (obj, "LinearShuntCompensator", "bPerSection", base.from_string, fields);
            base.export_element (obj, "LinearShuntCompensator", "g0PerSection", base.from_string, fields);
            base.export_element (obj, "LinearShuntCompensator", "gPerSection", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A rotating machine whose shaft rotates asynchronously with the electrical field.
         *
         * Also known as an induction machine with no external connection to the rotor windings, e.g squirrel-cage induction machine.
         *
         */
        function parse_AsynchronousMachine (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RotatingMachine (context, sub);
            obj.cls = "AsynchronousMachine";
            base.parse_element (/<cim:AsynchronousMachine.converterFedDrive>([\s\S]*?)<\/cim:AsynchronousMachine.converterFedDrive>/g, obj, "converterFedDrive", base.to_boolean, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.efficiency>([\s\S]*?)<\/cim:AsynchronousMachine.efficiency>/g, obj, "efficiency", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.iaIrRatio>([\s\S]*?)<\/cim:AsynchronousMachine.iaIrRatio>/g, obj, "iaIrRatio", base.to_float, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.nominalFrequency>([\s\S]*?)<\/cim:AsynchronousMachine.nominalFrequency>/g, obj, "nominalFrequency", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.nominalSpeed>([\s\S]*?)<\/cim:AsynchronousMachine.nominalSpeed>/g, obj, "nominalSpeed", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.polePairNumber>([\s\S]*?)<\/cim:AsynchronousMachine.polePairNumber>/g, obj, "polePairNumber", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.ratedMechanicalPower>([\s\S]*?)<\/cim:AsynchronousMachine.ratedMechanicalPower>/g, obj, "ratedMechanicalPower", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.reversible>([\s\S]*?)<\/cim:AsynchronousMachine.reversible>/g, obj, "reversible", base.to_boolean, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.rr1>([\s\S]*?)<\/cim:AsynchronousMachine.rr1>/g, obj, "rr1", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.rr2>([\s\S]*?)<\/cim:AsynchronousMachine.rr2>/g, obj, "rr2", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.rxLockedRotorRatio>([\s\S]*?)<\/cim:AsynchronousMachine.rxLockedRotorRatio>/g, obj, "rxLockedRotorRatio", base.to_float, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.tpo>([\s\S]*?)<\/cim:AsynchronousMachine.tpo>/g, obj, "tpo", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.tppo>([\s\S]*?)<\/cim:AsynchronousMachine.tppo>/g, obj, "tppo", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.xlr1>([\s\S]*?)<\/cim:AsynchronousMachine.xlr1>/g, obj, "xlr1", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.xlr2>([\s\S]*?)<\/cim:AsynchronousMachine.xlr2>/g, obj, "xlr2", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.xm>([\s\S]*?)<\/cim:AsynchronousMachine.xm>/g, obj, "xm", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.xp>([\s\S]*?)<\/cim:AsynchronousMachine.xp>/g, obj, "xp", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.xpp>([\s\S]*?)<\/cim:AsynchronousMachine.xpp>/g, obj, "xpp", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.xs>([\s\S]*?)<\/cim:AsynchronousMachine.xs>/g, obj, "xs", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachine.asynchronousMachineType>([\s\S]*?)<\/cim:AsynchronousMachine.asynchronousMachineType>/g, obj, "asynchronousMachineType", base.to_string, sub, context);
            base.parse_attribute (/<cim:AsynchronousMachine.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context);
            bucket = context.parsed.AsynchronousMachine;
            if (null == bucket)
                context.parsed.AsynchronousMachine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AsynchronousMachine (obj, exporters, full)
        {
            var fields = exporters["RotatingMachine"](obj, exporters, false);

            base.export_element (obj, "AsynchronousMachine", "converterFedDrive", base.from_boolean, fields);
            base.export_element (obj, "AsynchronousMachine", "efficiency", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "iaIrRatio", base.from_float, fields);
            base.export_element (obj, "AsynchronousMachine", "nominalFrequency", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "nominalSpeed", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "polePairNumber", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "ratedMechanicalPower", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "reversible", base.from_boolean, fields);
            base.export_element (obj, "AsynchronousMachine", "rr1", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "rr2", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "rxLockedRotorRatio", base.from_float, fields);
            base.export_element (obj, "AsynchronousMachine", "tpo", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "tppo", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "xlr1", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "xlr2", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "xm", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "xp", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "xpp", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "xs", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachine", "asynchronousMachineType", base.from_string, fields);
            base.export_attribute (obj, "AsynchronousMachine", "AsynchronousMachineDynamics", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Combination of conducting material with consistent electrical characteristics, building a single electrical system, used to carry current between points in the power system.
         *
         */
        function parse_Conductor (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "Conductor";
            base.parse_element (/<cim:Conductor.length>([\s\S]*?)<\/cim:Conductor.length>/g, obj, "length", base.to_string, sub, context);
            bucket = context.parsed.Conductor;
            if (null == bucket)
                context.parsed.Conductor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Conductor (obj, exporters, full)
        {
            var fields = exporters["ConductingEquipment"](obj, exporters, false);

            base.export_element (obj, "Conductor", "length", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Winding connection type.
         *
         */
        function parse_WindingConnection (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindingConnection";
            base.parse_element (/<cim:WindingConnection.D>([\s\S]*?)<\/cim:WindingConnection.D>/g, obj, "D", base.to_string, sub, context);
            base.parse_element (/<cim:WindingConnection.Y>([\s\S]*?)<\/cim:WindingConnection.Y>/g, obj, "Y", base.to_string, sub, context);
            base.parse_element (/<cim:WindingConnection.Z>([\s\S]*?)<\/cim:WindingConnection.Z>/g, obj, "Z", base.to_string, sub, context);
            base.parse_element (/<cim:WindingConnection.Yn>([\s\S]*?)<\/cim:WindingConnection.Yn>/g, obj, "Yn", base.to_string, sub, context);
            base.parse_element (/<cim:WindingConnection.Zn>([\s\S]*?)<\/cim:WindingConnection.Zn>/g, obj, "Zn", base.to_string, sub, context);
            base.parse_element (/<cim:WindingConnection.A>([\s\S]*?)<\/cim:WindingConnection.A>/g, obj, "A", base.to_string, sub, context);
            base.parse_element (/<cim:WindingConnection.I>([\s\S]*?)<\/cim:WindingConnection.I>/g, obj, "I", base.to_string, sub, context);
            bucket = context.parsed.WindingConnection;
            if (null == bucket)
                context.parsed.WindingConnection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WindingConnection (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "WindingConnection", "D", base.from_string, fields);
            base.export_element (obj, "WindingConnection", "Y", base.from_string, fields);
            base.export_element (obj, "WindingConnection", "Z", base.from_string, fields);
            base.export_element (obj, "WindingConnection", "Yn", base.from_string, fields);
            base.export_element (obj, "WindingConnection", "Zn", base.from_string, fields);
            base.export_element (obj, "WindingConnection", "A", base.from_string, fields);
            base.export_element (obj, "WindingConnection", "I", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A Plant is a collection of equipment for purposes of generation.
         *
         */
        function parse_Plant (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_EquipmentContainer (context, sub);
            obj.cls = "Plant";
            bucket = context.parsed.Plant;
            if (null == bucket)
                context.parsed.Plant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Plant (obj, exporters, full)
        {
            var fields = exporters["EquipmentContainer"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Method of cooling a machine.
         *
         */
        function parse_CoolantType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CoolantType";
            base.parse_element (/<cim:CoolantType.air>([\s\S]*?)<\/cim:CoolantType.air>/g, obj, "air", base.to_string, sub, context);
            base.parse_element (/<cim:CoolantType.hydrogenGas>([\s\S]*?)<\/cim:CoolantType.hydrogenGas>/g, obj, "hydrogenGas", base.to_string, sub, context);
            base.parse_element (/<cim:CoolantType.water>([\s\S]*?)<\/cim:CoolantType.water>/g, obj, "water", base.to_string, sub, context);
            bucket = context.parsed.CoolantType;
            if (null == bucket)
                context.parsed.CoolantType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CoolantType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "CoolantType", "air", base.from_string, fields);
            base.export_element (obj, "CoolantType", "hydrogenGas", base.from_string, fields);
            base.export_element (obj, "CoolantType", "water", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A shunt capacitor or reactor or switchable bank of shunt capacitors or reactors.
         *
         * A section of a shunt compensator is an individual capacitor or reactor.  A negative value for reactivePerSection indicates that the compensator is a reactor. ShuntCompensator is a single terminal device.  Ground is implied.
         *
         */
        function parse_ShuntCompensator (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegulatingCondEq (context, sub);
            obj.cls = "ShuntCompensator";
            base.parse_element (/<cim:ShuntCompensator.aVRDelay>([\s\S]*?)<\/cim:ShuntCompensator.aVRDelay>/g, obj, "aVRDelay", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensator.grounded>([\s\S]*?)<\/cim:ShuntCompensator.grounded>/g, obj, "grounded", base.to_boolean, sub, context);
            base.parse_element (/<cim:ShuntCompensator.maximumSections>([\s\S]*?)<\/cim:ShuntCompensator.maximumSections>/g, obj, "maximumSections", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensator.nomU>([\s\S]*?)<\/cim:ShuntCompensator.nomU>/g, obj, "nomU", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensator.normalSections>([\s\S]*?)<\/cim:ShuntCompensator.normalSections>/g, obj, "normalSections", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensator.phaseConnection>([\s\S]*?)<\/cim:ShuntCompensator.phaseConnection>/g, obj, "phaseConnection", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensator.switchOnCount>([\s\S]*?)<\/cim:ShuntCompensator.switchOnCount>/g, obj, "switchOnCount", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensator.switchOnDate>([\s\S]*?)<\/cim:ShuntCompensator.switchOnDate>/g, obj, "switchOnDate", base.to_datetime, sub, context);
            base.parse_element (/<cim:ShuntCompensator.voltageSensitivity>([\s\S]*?)<\/cim:ShuntCompensator.voltageSensitivity>/g, obj, "voltageSensitivity", base.to_string, sub, context);
            base.parse_element (/<cim:ShuntCompensator.sections>([\s\S]*?)<\/cim:ShuntCompensator.sections>/g, obj, "sections", base.to_float, sub, context);
            base.parse_attribute (/<cim:ShuntCompensator.SvShuntCompensatorSections\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SvShuntCompensatorSections", sub, context);
            bucket = context.parsed.ShuntCompensator;
            if (null == bucket)
                context.parsed.ShuntCompensator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ShuntCompensator (obj, exporters, full)
        {
            var fields = exporters["RegulatingCondEq"](obj, exporters, false);

            base.export_element (obj, "ShuntCompensator", "aVRDelay", base.from_string, fields);
            base.export_element (obj, "ShuntCompensator", "grounded", base.from_boolean, fields);
            base.export_element (obj, "ShuntCompensator", "maximumSections", base.from_string, fields);
            base.export_element (obj, "ShuntCompensator", "nomU", base.from_string, fields);
            base.export_element (obj, "ShuntCompensator", "normalSections", base.from_string, fields);
            base.export_element (obj, "ShuntCompensator", "phaseConnection", base.from_string, fields);
            base.export_element (obj, "ShuntCompensator", "switchOnCount", base.from_string, fields);
            base.export_element (obj, "ShuntCompensator", "switchOnDate", base.from_datetime, fields);
            base.export_element (obj, "ShuntCompensator", "voltageSensitivity", base.from_string, fields);
            base.export_element (obj, "ShuntCompensator", "sections", base.from_float, fields);
            base.export_attribute (obj, "ShuntCompensator", "SvShuntCompensatorSections", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Synchronous machine operating mode.
         *
         */
        function parse_SynchronousMachineOperatingMode (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SynchronousMachineOperatingMode";
            base.parse_element (/<cim:SynchronousMachineOperatingMode.generator>([\s\S]*?)<\/cim:SynchronousMachineOperatingMode.generator>/g, obj, "generator", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachineOperatingMode.condenser>([\s\S]*?)<\/cim:SynchronousMachineOperatingMode.condenser>/g, obj, "condenser", base.to_string, sub, context);
            base.parse_element (/<cim:SynchronousMachineOperatingMode.motor>([\s\S]*?)<\/cim:SynchronousMachineOperatingMode.motor>/g, obj, "motor", base.to_string, sub, context);
            bucket = context.parsed.SynchronousMachineOperatingMode;
            if (null == bucket)
                context.parsed.SynchronousMachineOperatingMode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SynchronousMachineOperatingMode (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SynchronousMachineOperatingMode", "generator", base.from_string, fields);
            base.export_element (obj, "SynchronousMachineOperatingMode", "condenser", base.from_string, fields);
            base.export_element (obj, "SynchronousMachineOperatingMode", "motor", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The kind of regulation model.
         *
         * For example regulating voltage, reactive power, active power, etc.
         *
         */
        function parse_RegulatingControlModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RegulatingControlModeKind";
            base.parse_element (/<cim:RegulatingControlModeKind.voltage>([\s\S]*?)<\/cim:RegulatingControlModeKind.voltage>/g, obj, "voltage", base.to_string, sub, context);
            base.parse_element (/<cim:RegulatingControlModeKind.activePower>([\s\S]*?)<\/cim:RegulatingControlModeKind.activePower>/g, obj, "activePower", base.to_string, sub, context);
            base.parse_element (/<cim:RegulatingControlModeKind.reactivePower>([\s\S]*?)<\/cim:RegulatingControlModeKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);
            base.parse_element (/<cim:RegulatingControlModeKind.currentFlow>([\s\S]*?)<\/cim:RegulatingControlModeKind.currentFlow>/g, obj, "currentFlow", base.to_string, sub, context);
            base.parse_element (/<cim:RegulatingControlModeKind.admittance>([\s\S]*?)<\/cim:RegulatingControlModeKind.admittance>/g, obj, "admittance", base.to_string, sub, context);
            base.parse_element (/<cim:RegulatingControlModeKind.timeScheduled>([\s\S]*?)<\/cim:RegulatingControlModeKind.timeScheduled>/g, obj, "timeScheduled", base.to_string, sub, context);
            base.parse_element (/<cim:RegulatingControlModeKind.temperature>([\s\S]*?)<\/cim:RegulatingControlModeKind.temperature>/g, obj, "temperature", base.to_string, sub, context);
            base.parse_element (/<cim:RegulatingControlModeKind.powerFactor>([\s\S]*?)<\/cim:RegulatingControlModeKind.powerFactor>/g, obj, "powerFactor", base.to_string, sub, context);
            bucket = context.parsed.RegulatingControlModeKind;
            if (null == bucket)
                context.parsed.RegulatingControlModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RegulatingControlModeKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "RegulatingControlModeKind", "voltage", base.from_string, fields);
            base.export_element (obj, "RegulatingControlModeKind", "activePower", base.from_string, fields);
            base.export_element (obj, "RegulatingControlModeKind", "reactivePower", base.from_string, fields);
            base.export_element (obj, "RegulatingControlModeKind", "currentFlow", base.from_string, fields);
            base.export_element (obj, "RegulatingControlModeKind", "admittance", base.from_string, fields);
            base.export_element (obj, "RegulatingControlModeKind", "timeScheduled", base.from_string, fields);
            base.export_element (obj, "RegulatingControlModeKind", "temperature", base.from_string, fields);
            base.export_element (obj, "RegulatingControlModeKind", "powerFactor", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Pole-mounted fault interrupter with built-in phase and ground relays, current transformer (CT), and supplemental controls.
         *
         */
        function parse_Recloser (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectedSwitch (context, sub);
            obj.cls = "Recloser";
            bucket = context.parsed.Recloser;
            if (null == bucket)
                context.parsed.Recloser = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Recloser (obj, exporters, full)
        {
            var fields = exporters["ProtectedSwitch"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A tunable impedance device normally used to offset line charging during single line faults in an ungrounded section of network.
         *
         */
        function parse_PetersenCoil (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_EarthFaultCompensator (context, sub);
            obj.cls = "PetersenCoil";
            base.parse_element (/<cim:PetersenCoil.mode>([\s\S]*?)<\/cim:PetersenCoil.mode>/g, obj, "mode", base.to_string, sub, context);
            base.parse_element (/<cim:PetersenCoil.nominalU>([\s\S]*?)<\/cim:PetersenCoil.nominalU>/g, obj, "nominalU", base.to_string, sub, context);
            base.parse_element (/<cim:PetersenCoil.offsetCurrent>([\s\S]*?)<\/cim:PetersenCoil.offsetCurrent>/g, obj, "offsetCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:PetersenCoil.positionCurrent>([\s\S]*?)<\/cim:PetersenCoil.positionCurrent>/g, obj, "positionCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:PetersenCoil.xGroundMax>([\s\S]*?)<\/cim:PetersenCoil.xGroundMax>/g, obj, "xGroundMax", base.to_string, sub, context);
            base.parse_element (/<cim:PetersenCoil.xGroundMin>([\s\S]*?)<\/cim:PetersenCoil.xGroundMin>/g, obj, "xGroundMin", base.to_string, sub, context);
            base.parse_element (/<cim:PetersenCoil.xGroundNominal>([\s\S]*?)<\/cim:PetersenCoil.xGroundNominal>/g, obj, "xGroundNominal", base.to_string, sub, context);
            bucket = context.parsed.PetersenCoil;
            if (null == bucket)
                context.parsed.PetersenCoil = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PetersenCoil (obj, exporters, full)
        {
            var fields = exporters["EarthFaultCompensator"](obj, exporters, false);

            base.export_element (obj, "PetersenCoil", "mode", base.from_string, fields);
            base.export_element (obj, "PetersenCoil", "nominalU", base.from_string, fields);
            base.export_element (obj, "PetersenCoil", "offsetCurrent", base.from_string, fields);
            base.export_element (obj, "PetersenCoil", "positionCurrent", base.from_string, fields);
            base.export_element (obj, "PetersenCoil", "xGroundMax", base.from_string, fields);
            base.export_element (obj, "PetersenCoil", "xGroundMin", base.from_string, fields);
            base.export_element (obj, "PetersenCoil", "xGroundNominal", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Describes the tap model for an asymmetrical phase shifting transformer in which the difference voltage vector adds to the primary side voltage.
         *
         * The angle between the primary side voltage and the difference voltage is named the winding connection angle. The phase shift depends on both the difference voltage magnitude and the winding connection angle.
         *
         */
        function parse_PhaseTapChangerAsymmetrical (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PhaseTapChangerNonLinear (context, sub);
            obj.cls = "PhaseTapChangerAsymmetrical";
            base.parse_element (/<cim:PhaseTapChangerAsymmetrical.windingConnectionAngle>([\s\S]*?)<\/cim:PhaseTapChangerAsymmetrical.windingConnectionAngle>/g, obj, "windingConnectionAngle", base.to_string, sub, context);
            bucket = context.parsed.PhaseTapChangerAsymmetrical;
            if (null == bucket)
                context.parsed.PhaseTapChangerAsymmetrical = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PhaseTapChangerAsymmetrical (obj, exporters, full)
        {
            var fields = exporters["PhaseTapChangerNonLinear"](obj, exporters, false);

            base.export_element (obj, "PhaseTapChangerAsymmetrical", "windingConnectionAngle", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_GroundDisconnector: parse_GroundDisconnector,
                export_PetersenCoil: export_PetersenCoil,
                parse_LoadBreakSwitch: parse_LoadBreakSwitch,
                export_RotatingMachine: export_RotatingMachine,
                parse_AsynchronousMachineKind: parse_AsynchronousMachineKind,
                parse_LinearShuntCompensator: parse_LinearShuntCompensator,
                export_LoadBreakSwitch: export_LoadBreakSwitch,
                export_Jumper: export_Jumper,
                parse_SVCControlMode: parse_SVCControlMode,
                parse_NonlinearShuntCompensator: parse_NonlinearShuntCompensator,
                export_RatioTapChangerTablePoint: export_RatioTapChangerTablePoint,
                parse_SwitchSchedule: parse_SwitchSchedule,
                parse_SynchronousMachine: parse_SynchronousMachine,
                export_ExternalNetworkInjection: export_ExternalNetworkInjection,
                export_PhaseTapChangerLinear: export_PhaseTapChangerLinear,
                parse_TapChanger: parse_TapChanger,
                parse_SinglePhaseKind: parse_SinglePhaseKind,
                parse_RegulationSchedule: parse_RegulationSchedule,
                parse_PhaseShuntConnectionKind: parse_PhaseShuntConnectionKind,
                export_WindingConnection: export_WindingConnection,
                parse_Breaker: parse_Breaker,
                export_Junction: export_Junction,
                export_TransformerStarImpedance: export_TransformerStarImpedance,
                export_PhaseTapChanger: export_PhaseTapChanger,
                export_SynchronousMachine: export_SynchronousMachine,
                export_EnergyConsumerPhase: export_EnergyConsumerPhase,
                parse_RegulatingControl: parse_RegulatingControl,
                export_CoolantType: export_CoolantType,
                export_SinglePhaseKind: export_SinglePhaseKind,
                export_LinearShuntCompensator: export_LinearShuntCompensator,
                parse_ShortCircuitRotorKind: parse_ShortCircuitRotorKind,
                parse_TapSchedule: parse_TapSchedule,
                export_ACLineSegmentPhase: export_ACLineSegmentPhase,
                parse_PhaseTapChangerLinear: parse_PhaseTapChangerLinear,
                parse_CompositeSwitch: parse_CompositeSwitch,
                parse_MutualCoupling: parse_MutualCoupling,
                export_Disconnector: export_Disconnector,
                parse_PerLengthPhaseImpedance: parse_PerLengthPhaseImpedance,
                export_PhaseTapChangerTable: export_PhaseTapChangerTable,
                export_NonlinearShuntCompensatorPoint: export_NonlinearShuntCompensatorPoint,
                parse_VoltageControlZone: parse_VoltageControlZone,
                parse_PhaseTapChangerAsymmetrical: parse_PhaseTapChangerAsymmetrical,
                parse_PhaseTapChangerTablePoint: parse_PhaseTapChangerTablePoint,
                export_StaticVarCompensator: export_StaticVarCompensator,
                export_NonlinearShuntCompensatorPhasePoint: export_NonlinearShuntCompensatorPhasePoint,
                parse_PerLengthImpedance: parse_PerLengthImpedance,
                export_Breaker: export_Breaker,
                parse_Conductor: parse_Conductor,
                export_SynchronousMachineKind: export_SynchronousMachineKind,
                parse_EnergySource: parse_EnergySource,
                export_EnergyConsumer: export_EnergyConsumer,
                parse_Line: parse_Line,
                parse_RatioTapChanger: parse_RatioTapChanger,
                parse_Jumper: parse_Jumper,
                parse_Disconnector: parse_Disconnector,
                parse_Clamp: parse_Clamp,
                export_TapChanger: export_TapChanger,
                export_Plant: export_Plant,
                parse_PhaseTapChangerNonLinear: parse_PhaseTapChangerNonLinear,
                parse_EarthFaultCompensator: parse_EarthFaultCompensator,
                export_Clamp: export_Clamp,
                export_TapChangerControl: export_TapChangerControl,
                export_MutualCoupling: export_MutualCoupling,
                export_ACLineSegment: export_ACLineSegment,
                parse_TransformerStarImpedance: parse_TransformerStarImpedance,
                export_Line: export_Line,
                export_Switch: export_Switch,
                parse_TransformerTank: parse_TransformerTank,
                export_FrequencyConverter: export_FrequencyConverter,
                export_Sectionaliser: export_Sectionaliser,
                parse_TapChangerTablePoint: parse_TapChangerTablePoint,
                parse_NonlinearShuntCompensatorPhase: parse_NonlinearShuntCompensatorPhase,
                export_PerLengthImpedance: export_PerLengthImpedance,
                parse_BusbarSection: parse_BusbarSection,
                export_SwitchSchedule: export_SwitchSchedule,
                export_PhaseTapChangerNonLinear: export_PhaseTapChangerNonLinear,
                export_CompositeSwitch: export_CompositeSwitch,
                parse_PhaseTapChangerSymmetrical: parse_PhaseTapChangerSymmetrical,
                parse_ExternalNetworkInjection: parse_ExternalNetworkInjection,
                parse_SeriesCompensator: parse_SeriesCompensator,
                export_Recloser: export_Recloser,
                parse_CoolantType: parse_CoolantType,
                export_Cut: export_Cut,
                export_Conductor: export_Conductor,
                export_TransformerTank: export_TransformerTank,
                export_VoltageControlZone: export_VoltageControlZone,
                export_TapChangerTablePoint: export_TapChangerTablePoint,
                parse_RatioTapChangerTable: parse_RatioTapChangerTable,
                parse_TransformerEnd: parse_TransformerEnd,
                parse_TapChangerControl: parse_TapChangerControl,
                parse_ShuntCompensator: parse_ShuntCompensator,
                parse_TransformerControlMode: parse_TransformerControlMode,
                export_SynchronousMachineOperatingMode: export_SynchronousMachineOperatingMode,
                parse_ShuntCompensatorPhase: parse_ShuntCompensatorPhase,
                export_PerLengthLineParameter: export_PerLengthLineParameter,
                parse_AsynchronousMachine: parse_AsynchronousMachine,
                export_ShuntCompensatorPhase: export_ShuntCompensatorPhase,
                export_TransformerControlMode: export_TransformerControlMode,
                export_BusbarSection: export_BusbarSection,
                parse_PhaseImpedanceData: parse_PhaseImpedanceData,
                export_NonlinearShuntCompensatorPhase: export_NonlinearShuntCompensatorPhase,
                export_TransformerMeshImpedance: export_TransformerMeshImpedance,
                export_AsynchronousMachineKind: export_AsynchronousMachineKind,
                parse_SynchronousMachineKind: parse_SynchronousMachineKind,
                parse_ProtectedSwitch: parse_ProtectedSwitch,
                export_ProtectedSwitch: export_ProtectedSwitch,
                parse_ACLineSegment: parse_ACLineSegment,
                parse_PowerTransformer: parse_PowerTransformer,
                parse_Fuse: parse_Fuse,
                parse_GroundingImpedance: parse_GroundingImpedance,
                export_TransformerCoreAdmittance: export_TransformerCoreAdmittance,
                parse_PhaseTapChangerTable: parse_PhaseTapChangerTable,
                parse_ReactiveCapabilityCurve: parse_ReactiveCapabilityCurve,
                export_PhaseTapChangerTablePoint: export_PhaseTapChangerTablePoint,
                parse_RotatingMachine: parse_RotatingMachine,
                parse_EnergyConsumer: parse_EnergyConsumer,
                export_ShuntCompensator: export_ShuntCompensator,
                parse_RatioTapChangerTablePoint: parse_RatioTapChangerTablePoint,
                parse_Sectionaliser: parse_Sectionaliser,
                parse_RegulatingCondEq: parse_RegulatingCondEq,
                parse_Connector: parse_Connector,
                parse_Ground: parse_Ground,
                export_EnergySource: export_EnergySource,
                parse_EnergyConsumerPhase: parse_EnergyConsumerPhase,
                export_SwitchPhase: export_SwitchPhase,
                parse_PhaseTapChanger: parse_PhaseTapChanger,
                export_PhaseTapChangerAsymmetrical: export_PhaseTapChangerAsymmetrical,
                parse_LinearShuntCompensatorPhase: parse_LinearShuntCompensatorPhase,
                export_RegulatingCondEq: export_RegulatingCondEq,
                parse_Recloser: parse_Recloser,
                export_RatioTapChangerTable: export_RatioTapChangerTable,
                parse_Switch: parse_Switch,
                parse_PerLengthSequenceImpedance: parse_PerLengthSequenceImpedance,
                export_RegulatingControl: export_RegulatingControl,
                export_TransformerEnd: export_TransformerEnd,
                parse_TransformerCoreAdmittance: parse_TransformerCoreAdmittance,
                parse_RegulatingControlModeKind: parse_RegulatingControlModeKind,
                export_SVCControlMode: export_SVCControlMode,
                export_Fuse: export_Fuse,
                parse_Junction: parse_Junction,
                export_EarthFaultCompensator: export_EarthFaultCompensator,
                parse_PetersenCoilModeKind: parse_PetersenCoilModeKind,
                parse_ACLineSegmentPhase: parse_ACLineSegmentPhase,
                parse_WindingConnection: parse_WindingConnection,
                export_PerLengthSequenceImpedance: export_PerLengthSequenceImpedance,
                export_PhaseTapChangerSymmetrical: export_PhaseTapChangerSymmetrical,
                parse_Cut: parse_Cut,
                parse_PhaseTapChangerTabular: parse_PhaseTapChangerTabular,
                export_NonlinearShuntCompensator: export_NonlinearShuntCompensator,
                export_Connector: export_Connector,
                export_GroundingImpedance: export_GroundingImpedance,
                export_GroundDisconnector: export_GroundDisconnector,
                export_PhaseTapChangerTabular: export_PhaseTapChangerTabular,
                export_PhaseImpedanceData: export_PhaseImpedanceData,
                export_TapSchedule: export_TapSchedule,
                export_SeriesCompensator: export_SeriesCompensator,
                export_TransformerTankEnd: export_TransformerTankEnd,
                parse_PetersenCoil: parse_PetersenCoil,
                parse_Plant: parse_Plant,
                parse_FrequencyConverter: parse_FrequencyConverter,
                export_ReactiveCapabilityCurve: export_ReactiveCapabilityCurve,
                parse_StaticVarCompensator: parse_StaticVarCompensator,
                export_RatioTapChanger: export_RatioTapChanger,
                export_RegulationSchedule: export_RegulationSchedule,
                parse_TransformerTankEnd: parse_TransformerTankEnd,
                export_PhaseShuntConnectionKind: export_PhaseShuntConnectionKind,
                export_ShortCircuitRotorKind: export_ShortCircuitRotorKind,
                export_PowerTransformerEnd: export_PowerTransformerEnd,
                export_Ground: export_Ground,
                export_PerLengthPhaseImpedance: export_PerLengthPhaseImpedance,
                parse_SynchronousMachineOperatingMode: parse_SynchronousMachineOperatingMode,
                export_LinearShuntCompensatorPhase: export_LinearShuntCompensatorPhase,
                parse_SwitchPhase: parse_SwitchPhase,
                export_RegulatingControlModeKind: export_RegulatingControlModeKind,
                parse_NonlinearShuntCompensatorPoint: parse_NonlinearShuntCompensatorPoint,
                export_PowerTransformer: export_PowerTransformer,
                parse_PowerTransformerEnd: parse_PowerTransformerEnd,
                export_PetersenCoilModeKind: export_PetersenCoilModeKind,
                parse_NonlinearShuntCompensatorPhasePoint: parse_NonlinearShuntCompensatorPhasePoint,
                parse_TransformerMeshImpedance: parse_TransformerMeshImpedance,
                export_AsynchronousMachine: export_AsynchronousMachine,
                parse_PerLengthLineParameter: parse_PerLengthLineParameter
            }
        );
    }
);