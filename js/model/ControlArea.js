define
(
    ["model/base", "model/Core"],
    /**
     * The ControlArea package models area specifications which can be used for a variety of purposes.
     * The package as a whole models potentially overlapping control area specifications for the purpose of actual generation control, load forecast area load capture, or powerflow based analysis.
     */
    function (base, Core)
    {

        /**
         * A flow specification in terms of location and direction for a control area.
         */
        function parse_TieFlow (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TieFlow";
            /**
             * True if the flow into the terminal (load convention) is also flow into the control area.
             * For example, this attribute should be true if using the tie line terminal further away from the control area. For example to represent a tie to a shunt component (like a load or generator) in another area, this is the near end of a branch and this attribute would be specified as false.
             */
            obj["positiveFlowIn"] = base.to_boolean (base.parse_element (/<cim:TieFlow.positiveFlowIn>([\s\S]*?)<\/cim:TieFlow.positiveFlowIn>/g, sub, context, true));
            /**
             * The terminal to which this tie flow belongs.
             */
            obj["Terminal"] = base.parse_attribute (/<cim:TieFlow.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The control area of the tie flows.
             */
            obj["ControlArea"] = base.parse_attribute (/<cim:TieFlow.ControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TieFlow;
            if (null == bucket)
                context.parsed.TieFlow = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A control area generating unit.
         * This class is needed so that alternate control area definitions may include the same generating unit.   Note only one instance within a control area should reference a specific generating unit.
         */
        function parse_ControlAreaGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ControlAreaGeneratingUnit";
            /**
             * The parent control area for the generating unit specifications.
             */
            obj["ControlArea"] = base.parse_attribute (/<cim:ControlAreaGeneratingUnit.ControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The generating unit specified for this control area.
             * Note that a control area should include a GeneratingUnit only once.
             */
            obj["GeneratingUnit"] = base.parse_attribute (/<cim:ControlAreaGeneratingUnit.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ControlAreaGeneratingUnit;
            if (null == bucket)
                context.parsed.ControlAreaGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The type of control area.
         */
        function parse_ControlAreaTypeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ControlAreaTypeKind";
            /**
             * Used for automatic generation control.
             */
            obj["AGC"] = base.parse_element (/<cim:ControlAreaTypeKind.AGC>([\s\S]*?)<\/cim:ControlAreaTypeKind.AGC>/g, sub, context, true);
            /**
             * Used for load forecast.
             */
            obj["Forecast"] = base.parse_element (/<cim:ControlAreaTypeKind.Forecast>([\s\S]*?)<\/cim:ControlAreaTypeKind.Forecast>/g, sub, context, true);
            /**
             * Used for interchange specification or control.
             */
            obj["Interchange"] = base.parse_element (/<cim:ControlAreaTypeKind.Interchange>([\s\S]*?)<\/cim:ControlAreaTypeKind.Interchange>/g, sub, context, true);
            bucket = context.parsed.ControlAreaTypeKind;
            if (null == bucket)
                context.parsed.ControlAreaTypeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A prioritized measurement to be used for the tie flow as part of the control area specification.
         */
        function parse_AltTieMeas (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AltTieMeas";
            /**
             * Priority of a measurement usage.
             * Lower numbers have first priority.
             */
            obj["priority"] = base.parse_element (/<cim:AltTieMeas.priority>([\s\S]*?)<\/cim:AltTieMeas.priority>/g, sub, context, true);
            /**
             * The tie flow of the alternate measurements.
             */
            obj["TieFlow"] = base.parse_attribute (/<cim:AltTieMeas.TieFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The specific analog value used as a source.
             */
            obj["AnalogValue"] = base.parse_attribute (/<cim:AltTieMeas.AnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AltTieMeas;
            if (null == bucket)
                context.parsed.AltTieMeas = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A prioritized measurement to be used for the generating unit in the control area specificaiton.
         */
        function parse_AltGeneratingUnitMeas (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AltGeneratingUnitMeas";
            /**
             * Priority of a measurement usage.
             * Lower numbers have first priority.
             */
            obj["priority"] = base.parse_element (/<cim:AltGeneratingUnitMeas.priority>([\s\S]*?)<\/cim:AltGeneratingUnitMeas.priority>/g, sub, context, true);
            /**
             * The specific analog value used as a source.
             */
            obj["AnalogValue"] = base.parse_attribute (/<cim:AltGeneratingUnitMeas.AnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The control aread generating unit to which the prioritized measurement assignment is applied.
             */
            obj["ControlAreaGeneratingUnit"] = base.parse_attribute (/<cim:AltGeneratingUnitMeas.ControlAreaGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AltGeneratingUnitMeas;
            if (null == bucket)
                context.parsed.AltGeneratingUnitMeas = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A control area<b> </b>is a grouping of generating units and/or loads and a cutset of tie lines (as terminals) which may be used for a variety of purposes including automatic generation control, powerflow solution area interchange control specification, and input to load forecasting.
         * Note that any number of overlapping control area specifications can be superimposed on the physical model.
         */
        function parse_ControlArea (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "ControlArea";
            /**
             * The specified positive net interchange into the control area, i.e. positive sign means flow in to the area.
             */
            obj["netInterchange"] = base.parse_element (/<cim:ControlArea.netInterchange>([\s\S]*?)<\/cim:ControlArea.netInterchange>/g, sub, context, true);
            /**
             * Active power net interchange tolerance
             */
            obj["pTolerance"] = base.parse_element (/<cim:ControlArea.pTolerance>([\s\S]*?)<\/cim:ControlArea.pTolerance>/g, sub, context, true);
            /**
             * The primary type of control area definition used to determine if this is used for automatic generation control, for planning interchange control, or other purposes.
             * A control area specified with primary type of automatic generation control could still be forecast and used as an interchange area in power flow analysis.
             */
            obj["type"] = base.parse_element (/<cim:ControlArea.type>([\s\S]*?)<\/cim:ControlArea.type>/g, sub, context, true);
            /**
             * The energy area that is forecast from this control area specification.
             */
            obj["EnergyArea"] = base.parse_attribute (/<cim:ControlArea.EnergyArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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