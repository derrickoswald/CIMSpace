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
            /**
             * The active power injected into the bus in addition to injections from equipment terminals.
             *
             * Positive sign means injection into the TopologicalNode (bus).
             *
             */
            base.parse_element (/<cim:SvInjection.pInjection>([\s\S]*?)<\/cim:SvInjection.pInjection>/g, obj, "pInjection", base.to_string, sub, context);

            /**
             * The reactive power injected into the bus in addition to injections from equipment terminals.
             *
             * Positive sign means injection into the TopologicalNode (bus).
             *
             */
            base.parse_element (/<cim:SvInjection.qInjection>([\s\S]*?)<\/cim:SvInjection.qInjection>/g, obj, "qInjection", base.to_string, sub, context);

            /**
             * The topological node associated with the flow injection state variable.
             *
             */
            base.parse_attribute (/<cim:SvInjection.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context, true);

            bucket = context.parsed.SvInjection;
            if (null == bucket)
                context.parsed.SvInjection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The in service status as a result of topology processing.
             *
             */
            base.parse_element (/<cim:SvStatus.inService>([\s\S]*?)<\/cim:SvStatus.inService>/g, obj, "inService", base.to_boolean, sub, context);

            /**
             * The conducting equipment associated with the status state variable.
             *
             */
            base.parse_attribute (/<cim:SvStatus.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConductingEquipment", sub, context, true);

            bucket = context.parsed.SvStatus;
            if (null == bucket)
                context.parsed.SvStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The floating point tap position.
             *
             * This is not the tap ratio, but rather the tap step position as defined by the related tap changer model and normally is constrained to be within the range of minimum and maximum tap positions.
             *
             */
            base.parse_element (/<cim:SvTapStep.position>([\s\S]*?)<\/cim:SvTapStep.position>/g, obj, "position", base.to_float, sub, context);

            /**
             * The tap changer associated with the tap step state.
             *
             */
            base.parse_attribute (/<cim:SvTapStep.TapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TapChanger", sub, context, true);

            bucket = context.parsed.SvTapStep;
            if (null == bucket)
                context.parsed.SvTapStep = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The number of sections in service as a continous variable.
             *
             * To get integer value scale with ShuntCompensator.bPerSection.
             *
             */
            base.parse_element (/<cim:SvShuntCompensatorSections.sections>([\s\S]*?)<\/cim:SvShuntCompensatorSections.sections>/g, obj, "sections", base.to_float, sub, context);

            /**
             * The shunt compensator for which the state applies.
             *
             */
            base.parse_attribute (/<cim:SvShuntCompensatorSections.ShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensator", sub, context, true);

            bucket = context.parsed.SvShuntCompensatorSections;
            if (null == bucket)
                context.parsed.SvShuntCompensatorSections = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The active power flow.
             *
             * Load sign convention is used, i.e. positive sign means flow out from a TopologicalNode (bus) into the conducting equipment.
             *
             */
            base.parse_element (/<cim:SvPowerFlow.p>([\s\S]*?)<\/cim:SvPowerFlow.p>/g, obj, "p", base.to_string, sub, context);

            /**
             * The reactive power flow.
             *
             * Load sign convention is used, i.e. positive sign means flow out from a TopologicalNode (bus) into the conducting equipment.
             *
             */
            base.parse_element (/<cim:SvPowerFlow.q>([\s\S]*?)<\/cim:SvPowerFlow.q>/g, obj, "q", base.to_string, sub, context);

            /**
             * The terminal associated with the power flow state variable.
             *
             */
            base.parse_attribute (/<cim:SvPowerFlow.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context, true);

            bucket = context.parsed.SvPowerFlow;
            if (null == bucket)
                context.parsed.SvPowerFlow = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The voltage angle of the topological node complex voltage with respect to system reference.
             *
             */
            base.parse_element (/<cim:SvVoltage.angle>([\s\S]*?)<\/cim:SvVoltage.angle>/g, obj, "angle", base.to_string, sub, context);

            /**
             * The voltage magnitude of the topological node.
             *
             */
            base.parse_element (/<cim:SvVoltage.v>([\s\S]*?)<\/cim:SvVoltage.v>/g, obj, "v", base.to_string, sub, context);

            /**
             * The topological node associated with the voltage state.
             *
             */
            base.parse_attribute (/<cim:SvVoltage.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context, true);

            bucket = context.parsed.SvVoltage;
            if (null == bucket)
                context.parsed.SvVoltage = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

        return (
            {
                parse_SvStatus: parse_SvStatus,
                parse_SvVoltage: parse_SvVoltage,
                parse_SvTapStep: parse_SvTapStep,
                parse_StateVariable: parse_StateVariable,
                parse_SvShuntCompensatorSections: parse_SvShuntCompensatorSections,
                parse_SvPowerFlow: parse_SvPowerFlow,
                parse_SvInjection: parse_SvInjection
            }
        );
    }
);