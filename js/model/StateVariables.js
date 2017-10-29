define
(
    ["model/base"],
    /**
     * State variables for analysis solutions such as powerflow.
     *
     */
    function (base)
    {

        /**
         * The SvInjection is reporting the calculated bus injection minus the sum of the terminal flows.
         *
         * The terminal flow is positive out from the bus (load sign convention) and bus injection has positive flow into the bus. SvInjection may have the remainder after state estimation or slack after power flow calculation.
         *
         */
        function parse_SvInjection (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_StateVariable (context, sub);
            obj.cls = "SvInjection";
            base.parse_element (/<cim:SvInjection.pInjection>([\s\S]*?)<\/cim:SvInjection.pInjection>/g, obj, "pInjection", base.to_string, sub, context);
            base.parse_element (/<cim:SvInjection.qInjection>([\s\S]*?)<\/cim:SvInjection.qInjection>/g, obj, "qInjection", base.to_string, sub, context);
            base.parse_attribute (/<cim:SvInjection.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context);
            bucket = context.parsed.SvInjection;
            if (null == bucket)
                context.parsed.SvInjection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SvInjection (obj, exporters, full)
        {
            var fields = exporters["StateVariable"](obj, exporters, false);

            base.export_element (obj, "SvInjection", "pInjection", base.from_string, fields);
            base.export_element (obj, "SvInjection", "qInjection", base.from_string, fields);
            base.export_attribute (obj, "SvInjection", "TopologicalNode", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * State variable for status.
         *
         */
        function parse_SvStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_StateVariable (context, sub);
            obj.cls = "SvStatus";
            base.parse_element (/<cim:SvStatus.inService>([\s\S]*?)<\/cim:SvStatus.inService>/g, obj, "inService", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:SvStatus.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConductingEquipment", sub, context);
            bucket = context.parsed.SvStatus;
            if (null == bucket)
                context.parsed.SvStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SvStatus (obj, exporters, full)
        {
            var fields = exporters["StateVariable"](obj, exporters, false);

            base.export_element (obj, "SvStatus", "inService", base.from_boolean, fields);
            base.export_attribute (obj, "SvStatus", "ConductingEquipment", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * State variable for transformer tap step.
         *
         * This class is to be used for taps of LTC (load tap changing) transformers, not fixed tap transformers.
         *
         */
        function parse_SvTapStep (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_StateVariable (context, sub);
            obj.cls = "SvTapStep";
            base.parse_element (/<cim:SvTapStep.position>([\s\S]*?)<\/cim:SvTapStep.position>/g, obj, "position", base.to_float, sub, context);
            base.parse_attribute (/<cim:SvTapStep.TapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TapChanger", sub, context);
            bucket = context.parsed.SvTapStep;
            if (null == bucket)
                context.parsed.SvTapStep = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SvTapStep (obj, exporters, full)
        {
            var fields = exporters["StateVariable"](obj, exporters, false);

            base.export_element (obj, "SvTapStep", "position", base.from_float, fields);
            base.export_attribute (obj, "SvTapStep", "TapChanger", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * State variable for the number of sections in service for a shunt compensator.
         *
         */
        function parse_SvShuntCompensatorSections (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_StateVariable (context, sub);
            obj.cls = "SvShuntCompensatorSections";
            base.parse_element (/<cim:SvShuntCompensatorSections.sections>([\s\S]*?)<\/cim:SvShuntCompensatorSections.sections>/g, obj, "sections", base.to_float, sub, context);
            base.parse_attribute (/<cim:SvShuntCompensatorSections.ShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensator", sub, context);
            bucket = context.parsed.SvShuntCompensatorSections;
            if (null == bucket)
                context.parsed.SvShuntCompensatorSections = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SvShuntCompensatorSections (obj, exporters, full)
        {
            var fields = exporters["StateVariable"](obj, exporters, false);

            base.export_element (obj, "SvShuntCompensatorSections", "sections", base.from_float, fields);
            base.export_attribute (obj, "SvShuntCompensatorSections", "ShuntCompensator", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * State variable for power flow.
         *
         * Load convention is used for flow direction. This means flow out from the TopologicalNode into the equipment is positive.
         *
         */
        function parse_SvPowerFlow (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_StateVariable (context, sub);
            obj.cls = "SvPowerFlow";
            base.parse_element (/<cim:SvPowerFlow.p>([\s\S]*?)<\/cim:SvPowerFlow.p>/g, obj, "p", base.to_string, sub, context);
            base.parse_element (/<cim:SvPowerFlow.q>([\s\S]*?)<\/cim:SvPowerFlow.q>/g, obj, "q", base.to_string, sub, context);
            base.parse_attribute (/<cim:SvPowerFlow.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
            bucket = context.parsed.SvPowerFlow;
            if (null == bucket)
                context.parsed.SvPowerFlow = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SvPowerFlow (obj, exporters, full)
        {
            var fields = exporters["StateVariable"](obj, exporters, false);

            base.export_element (obj, "SvPowerFlow", "p", base.from_string, fields);
            base.export_element (obj, "SvPowerFlow", "q", base.from_string, fields);
            base.export_attribute (obj, "SvPowerFlow", "Terminal", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * State variable for voltage.
         *
         */
        function parse_SvVoltage (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_StateVariable (context, sub);
            obj.cls = "SvVoltage";
            base.parse_element (/<cim:SvVoltage.angle>([\s\S]*?)<\/cim:SvVoltage.angle>/g, obj, "angle", base.to_string, sub, context);
            base.parse_element (/<cim:SvVoltage.v>([\s\S]*?)<\/cim:SvVoltage.v>/g, obj, "v", base.to_string, sub, context);
            base.parse_attribute (/<cim:SvVoltage.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context);
            bucket = context.parsed.SvVoltage;
            if (null == bucket)
                context.parsed.SvVoltage = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SvVoltage (obj, exporters, full)
        {
            var fields = exporters["StateVariable"](obj, exporters, false);

            base.export_element (obj, "SvVoltage", "angle", base.from_string, fields);
            base.export_element (obj, "SvVoltage", "v", base.from_string, fields);
            base.export_attribute (obj, "SvVoltage", "TopologicalNode", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An abstract class for state variables.
         *
         */
        function parse_StateVariable (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "StateVariable";
            bucket = context.parsed.StateVariable;
            if (null == bucket)
                context.parsed.StateVariable = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StateVariable (obj, exporters, full)
        {
            var fields = [];

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_SvStatus: parse_SvStatus,
                export_StateVariable: export_StateVariable,
                parse_SvVoltage: parse_SvVoltage,
                parse_SvTapStep: parse_SvTapStep,
                parse_StateVariable: parse_StateVariable,
                export_SvInjection: export_SvInjection,
                parse_SvShuntCompensatorSections: parse_SvShuntCompensatorSections,
                export_SvTapStep: export_SvTapStep,
                export_SvPowerFlow: export_SvPowerFlow,
                export_SvStatus: export_SvStatus,
                parse_SvPowerFlow: parse_SvPowerFlow,
                export_SvShuntCompensatorSections: export_SvShuntCompensatorSections,
                parse_SvInjection: parse_SvInjection,
                export_SvVoltage: export_SvVoltage
            }
        );
    }
);