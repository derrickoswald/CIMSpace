define
(
    ["model/base", "model/Core"],
    /**
     * The ControlArea package models area specifications which can be used for a variety of purposes.
     *
     * The package as a whole models potentially overlapping control area specifications for the purpose of actual generation control, load forecast area load capture, or powerflow based analysis.
     *
     */
    function (base, Core)
    {

        /**
         * A flow specification in terms of location and direction for a control area.
         *
         */
        function parse_TieFlow (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TieFlow";
            /**
             * True if the flow into the terminal (load convention) is also flow into the control area.
             *
             * For example, this attribute should be true if using the tie line terminal further away from the control area. For example to represent a tie to a shunt component (like a load or generator) in another area, this is the near end of a branch and this attribute would be specified as false.
             *
             */
            base.parse_element (/<cim:TieFlow.positiveFlowIn>([\s\S]*?)<\/cim:TieFlow.positiveFlowIn>/g, obj, "positiveFlowIn", base.to_boolean, sub, context);

            /**
             * The terminal to which this tie flow belongs.
             *
             */
            base.parse_attribute (/<cim:TieFlow.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context, true);

            /**
             * The control area of the tie flows.
             *
             */
            base.parse_attribute (/<cim:TieFlow.ControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlArea", sub, context, true);

            bucket = context.parsed.TieFlow;
            if (null == bucket)
                context.parsed.TieFlow = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A control area generating unit.
         *
         * This class is needed so that alternate control area definitions may include the same generating unit.   Note only one instance within a control area should reference a specific generating unit.
         *
         */
        function parse_ControlAreaGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ControlAreaGeneratingUnit";
            /**
             * The parent control area for the generating unit specifications.
             *
             */
            base.parse_attribute (/<cim:ControlAreaGeneratingUnit.ControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlArea", sub, context, true);

            /**
             * The generating unit specified for this control area.
             *
             * Note that a control area should include a GeneratingUnit only once.
             *
             */
            base.parse_attribute (/<cim:ControlAreaGeneratingUnit.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context, true);

            bucket = context.parsed.ControlAreaGeneratingUnit;
            if (null == bucket)
                context.parsed.ControlAreaGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The type of control area.
         *
         */
        function parse_ControlAreaTypeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ControlAreaTypeKind";
            /**
             * Used for automatic generation control.
             *
             */
            base.parse_element (/<cim:ControlAreaTypeKind.AGC>([\s\S]*?)<\/cim:ControlAreaTypeKind.AGC>/g, obj, "AGC", base.to_string, sub, context);

            /**
             * Used for load forecast.
             *
             */
            base.parse_element (/<cim:ControlAreaTypeKind.Forecast>([\s\S]*?)<\/cim:ControlAreaTypeKind.Forecast>/g, obj, "Forecast", base.to_string, sub, context);

            /**
             * Used for interchange specification or control.
             *
             */
            base.parse_element (/<cim:ControlAreaTypeKind.Interchange>([\s\S]*?)<\/cim:ControlAreaTypeKind.Interchange>/g, obj, "Interchange", base.to_string, sub, context);

            bucket = context.parsed.ControlAreaTypeKind;
            if (null == bucket)
                context.parsed.ControlAreaTypeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A prioritized measurement to be used for the tie flow as part of the control area specification.
         *
         */
        function parse_AltTieMeas (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AltTieMeas";
            /**
             * Priority of a measurement usage.
             *
             * Lower numbers have first priority.
             *
             */
            base.parse_element (/<cim:AltTieMeas.priority>([\s\S]*?)<\/cim:AltTieMeas.priority>/g, obj, "priority", base.to_string, sub, context);

            /**
             * The tie flow of the alternate measurements.
             *
             */
            base.parse_attribute (/<cim:AltTieMeas.TieFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TieFlow", sub, context, true);

            /**
             * The specific analog value used as a source.
             *
             */
            base.parse_attribute (/<cim:AltTieMeas.AnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AnalogValue", sub, context, true);

            bucket = context.parsed.AltTieMeas;
            if (null == bucket)
                context.parsed.AltTieMeas = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A prioritized measurement to be used for the generating unit in the control area specificaiton.
         *
         */
        function parse_AltGeneratingUnitMeas (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AltGeneratingUnitMeas";
            /**
             * Priority of a measurement usage.
             *
             * Lower numbers have first priority.
             *
             */
            base.parse_element (/<cim:AltGeneratingUnitMeas.priority>([\s\S]*?)<\/cim:AltGeneratingUnitMeas.priority>/g, obj, "priority", base.to_string, sub, context);

            /**
             * The specific analog value used as a source.
             *
             */
            base.parse_attribute (/<cim:AltGeneratingUnitMeas.AnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AnalogValue", sub, context, true);

            /**
             * The control aread generating unit to which the prioritized measurement assignment is applied.
             *
             */
            base.parse_attribute (/<cim:AltGeneratingUnitMeas.ControlAreaGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlAreaGeneratingUnit", sub, context, true);

            bucket = context.parsed.AltGeneratingUnitMeas;
            if (null == bucket)
                context.parsed.AltGeneratingUnitMeas = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A control area<b> </b>is a grouping of generating units and/or loads and a cutset of tie lines (as terminals) which may be used for a variety of purposes including automatic generation control, powerflow solution area interchange control specification, and input to load forecasting.
         *
         * Note that any number of overlapping control area specifications can be superimposed on the physical model.
         *
         */
        function parse_ControlArea (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "ControlArea";
            /**
             * The specified positive net interchange into the control area, i.e. positive sign means flow in to the area.
             *
             */
            base.parse_element (/<cim:ControlArea.netInterchange>([\s\S]*?)<\/cim:ControlArea.netInterchange>/g, obj, "netInterchange", base.to_string, sub, context);

            /**
             * Active power net interchange tolerance
             *
             */
            base.parse_element (/<cim:ControlArea.pTolerance>([\s\S]*?)<\/cim:ControlArea.pTolerance>/g, obj, "pTolerance", base.to_string, sub, context);

            /**
             * The primary type of control area definition used to determine if this is used for automatic generation control, for planning interchange control, or other purposes.
             *
             * A control area specified with primary type of automatic generation control could still be forecast and used as an interchange area in power flow analysis.
             *
             */
            base.parse_element (/<cim:ControlArea.type>([\s\S]*?)<\/cim:ControlArea.type>/g, obj, "type", base.to_string, sub, context);

            /**
             * The energy area that is forecast from this control area specification.
             *
             */
            base.parse_attribute (/<cim:ControlArea.EnergyArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyArea", sub, context, true);

            bucket = context.parsed.ControlArea;
            if (null == bucket)
                context.parsed.ControlArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_TieFlow: parse_TieFlow,
                parse_ControlAreaGeneratingUnit: parse_ControlAreaGeneratingUnit,
                parse_AltGeneratingUnitMeas: parse_AltGeneratingUnitMeas,
                parse_ControlArea: parse_ControlArea,
                parse_AltTieMeas: parse_AltTieMeas,
                parse_ControlAreaTypeKind: parse_ControlAreaTypeKind
            }
        );
    }
);