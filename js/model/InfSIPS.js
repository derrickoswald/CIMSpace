define
(
    ["model/base", "model/Core"],
    /**
     * System Integrity Protection Schemes (SIPS) (IEC terminology).
     * Other names used are: Remedial Action Schemes (RAS) or System Protection Schemes (SPS)
     */
    function (base, Core)
    {

        /**
         * Gate input pin that is associated with a Measurement or a calculation of Measurement.
         */
        function parse_PinMeasurement (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GateInputPin (context, sub);
            obj.cls = "PinMeasurement";
            /**
             * 
             */
            obj["Measurement"] = base.parse_attribute (/<cim:PinMeasurement.Measurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["MeasurementCalculator"] = base.parse_attribute (/<cim:PinMeasurement.MeasurementCalculator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PinMeasurement;
            if (null == bucket)
                context.parsed.PinMeasurement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Input pin for a logical gate.
         * The condition described in the input pin will give a logical true or false. Result from measurement and calculation are converted to a true or false.
         */
        function parse_GateInputPin (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "GateInputPin";
            /**
             * If true, use the absolute value for compare..
             */
            obj["absoluteValue"] = base.to_boolean (base.parse_element (/<cim:GateInputPin.absoluteValue>([\s\S]*?)<\/cim:GateInputPin.absoluteValue>/g, sub, context, true));
            /**
             * The compare operation.
             */
            obj["aDLogicKind"] = base.parse_element (/<cim:GateInputPin.aDLogicKind>([\s\S]*?)<\/cim:GateInputPin.aDLogicKind>/g, sub, context, true);
            /**
             * The duration the compare condition need to be present before given a true.
             * Default is 0 seconds.
             */
            obj["duration"] = base.parse_element (/<cim:GateInputPin.duration>([\s\S]*?)<\/cim:GateInputPin.duration>/g, sub, context, true);
            /**
             * Invert/negate the result of the compare.
             */
            obj["negate"] = base.to_boolean (base.parse_element (/<cim:GateInputPin.negate>([\s\S]*?)<\/cim:GateInputPin.negate>/g, sub, context, true));
            /**
             * The threshold percentage that should be used for compare with the percentage change between input value and threshold value.
             */
            obj["thresholdPercentage"] = base.parse_element (/<cim:GateInputPin.thresholdPercentage>([\s\S]*?)<\/cim:GateInputPin.thresholdPercentage>/g, sub, context, true);
            /**
             * The threshold value that should be used for compare with the input value.
             */
            obj["thresholdValue"] = base.to_float (base.parse_element (/<cim:GateInputPin.thresholdValue>([\s\S]*?)<\/cim:GateInputPin.thresholdValue>/g, sub, context, true));
            /**
             * 
             */
            obj["Gate"] = base.parse_attribute (/<cim:GateInputPin.Gate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.GateInputPin;
            if (null == bucket)
                context.parsed.GateInputPin = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Remedial Action Scheme (RAS), Special Protection Schemes (SPS), System Protection Schemes (SPS) or System Integrity Protection Schemes (SIPS).
         */
        function parse_RemedialActionScheme (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "RemedialActionScheme";
            /**
             * The status of the class set by operation or by signal.
             * Optional field that will override other status fields.
             */
            obj["armed"] = base.to_boolean (base.parse_element (/<cim:RemedialActionScheme.armed>([\s\S]*?)<\/cim:RemedialActionScheme.armed>/g, sub, context, true));
            /**
             * Kind of Remedial Action Scheme (RAS)
             */
            obj["kind"] = base.parse_element (/<cim:RemedialActionScheme.kind>([\s\S]*?)<\/cim:RemedialActionScheme.kind>/g, sub, context, true);
            /**
             * The default/normal value used when other active signal/values are missing.
             */
            obj["normalArmed"] = base.to_boolean (base.parse_element (/<cim:RemedialActionScheme.normalArmed>([\s\S]*?)<\/cim:RemedialActionScheme.normalArmed>/g, sub, context, true));
            /**
             * 
             */
            obj["GateArmed"] = base.parse_attribute (/<cim:RemedialActionScheme.GateArmed\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RemedialActionScheme;
            if (null == bucket)
                context.parsed.RemedialActionScheme = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Condition that is triggered either by TriggerCondition of by gate condition within a stage and has remedial action-s.
         */
        function parse_StageTrigger (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "StageTrigger";
            /**
             * The status of the class set by operation or by signal.
             * Optional field that will override other status fields.
             */
            obj["armed"] = base.to_boolean (base.parse_element (/<cim:StageTrigger.armed>([\s\S]*?)<\/cim:StageTrigger.armed>/g, sub, context, true));
            /**
             * The default/normal value used when other active signal/values are missing.
             */
            obj["normalArmed"] = base.to_boolean (base.parse_element (/<cim:StageTrigger.normalArmed>([\s\S]*?)<\/cim:StageTrigger.normalArmed>/g, sub, context, true));
            /**
             * Priority of trigger. 0 = don t care (default) 1 = highest priority. 2 is less than 1 and so on.
             * A trigger with the highest priority will trigger first.
             */
            obj["priority"] = base.parse_element (/<cim:StageTrigger.priority>([\s\S]*?)<\/cim:StageTrigger.priority>/g, sub, context, true);
            /**
             * 
             */
            obj["Stage"] = base.parse_attribute (/<cim:StageTrigger.Stage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["GateTrigger"] = base.parse_attribute (/<cim:StageTrigger.GateTrigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["GateArmed"] = base.parse_attribute (/<cim:StageTrigger.GateArmed\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["ProtectiveActionCollection"] = base.parse_attribute (/<cim:StageTrigger.ProtectiveActionCollection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["GateComCondition"] = base.parse_attribute (/<cim:StageTrigger.GateComCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.StageTrigger;
            if (null == bucket)
                context.parsed.StageTrigger = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A protective action for supporting the integrity of the power system.
         */
        function parse_ProtectiveAction (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ProtectiveAction";
            /**
             * The status of the class set by operation or by signal.
             * Optional field that will override other status fields.
             */
            obj["enabled"] = base.to_boolean (base.parse_element (/<cim:ProtectiveAction.enabled>([\s\S]*?)<\/cim:ProtectiveAction.enabled>/g, sub, context, true));
            /**
             * The default/normal value used when other active signal/values are missing.
             */
            obj["normalEnabled"] = base.to_boolean (base.parse_element (/<cim:ProtectiveAction.normalEnabled>([\s\S]*?)<\/cim:ProtectiveAction.normalEnabled>/g, sub, context, true));
            /**
             * 
             */
            obj["ProtectionEquipment"] = base.parse_attribute (/<cim:ProtectiveAction.ProtectionEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["GateComCondition"] = base.parse_attribute (/<cim:ProtectiveAction.GateComCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["ProtectiveActionCollection"] = base.parse_attribute (/<cim:ProtectiveAction.ProtectiveActionCollection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["GateEnabledCondition"] = base.parse_attribute (/<cim:ProtectiveAction.GateEnabledCondition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ProtectiveAction;
            if (null == bucket)
                context.parsed.ProtectiveAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Input to measurement calculation.
         * Support Analog, Discrete and Accumulator.
         */
        function parse_MeasurementCalculatorInput (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MeasurementCalculatorInput";
            /**
             * If true, use the absolute value for the calculation.
             */
            obj["absoluteValue"] = base.to_boolean (base.parse_element (/<cim:MeasurementCalculatorInput.absoluteValue>([\s\S]*?)<\/cim:MeasurementCalculatorInput.absoluteValue>/g, sub, context, true));
            /**
             * Positive number that defines the order of the operant in the calculation. 0 = default.
             * The order is not relevant (e.g. summation).
             */
            obj["order"] = base.parse_element (/<cim:MeasurementCalculatorInput.order>([\s\S]*?)<\/cim:MeasurementCalculatorInput.order>/g, sub, context, true);
            /**
             * 
             */
            obj["MeasurementCalculator"] = base.parse_attribute (/<cim:MeasurementCalculatorInput.MeasurementCalculator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["Measurement"] = base.parse_attribute (/<cim:MeasurementCalculatorInput.Measurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MeasurementCalculatorInput;
            if (null == bucket)
                context.parsed.MeasurementCalculatorInput = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Value associated with Equipment is used as compare.
         */
        function parse_PinEquipment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GateInputPin (context, sub);
            obj.cls = "PinEquipment";
            /**
             * The compare operation done on the equipment.
             */
            obj["kind"] = base.parse_element (/<cim:PinEquipment.kind>([\s\S]*?)<\/cim:PinEquipment.kind>/g, sub, context, true);
            /**
             * 
             */
            obj["Equipment"] = base.parse_attribute (/<cim:PinEquipment.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PinEquipment;
            if (null == bucket)
                context.parsed.PinEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Categories of analog to digital (or logical result) comparison.
         */
        function parse_AnalogToDigitalLogicKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AnalogToDigitalLogicKind";
            /**
             * Not equal (unlike) comparison operation.
             */
            obj["ne"] = base.parse_element (/<cim:AnalogToDigitalLogicKind.ne>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.ne>/g, sub, context, true);
            /**
             * Equal (like) comparison operation.
             */
            obj["eq"] = base.parse_element (/<cim:AnalogToDigitalLogicKind.eq>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.eq>/g, sub, context, true);
            /**
             * Less or equal comparison operation.
             */
            obj["le"] = base.parse_element (/<cim:AnalogToDigitalLogicKind.le>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.le>/g, sub, context, true);
            /**
             * Less than comparison operation.
             */
            obj["lt"] = base.parse_element (/<cim:AnalogToDigitalLogicKind.lt>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.lt>/g, sub, context, true);
            /**
             * Greater or equal comparison operation.
             */
            obj["ge"] = base.parse_element (/<cim:AnalogToDigitalLogicKind.ge>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.ge>/g, sub, context, true);
            /**
             * Greater than comparison operation.
             */
            obj["gt"] = base.parse_element (/<cim:AnalogToDigitalLogicKind.gt>([\s\S]*?)<\/cim:AnalogToDigitalLogicKind.gt>/g, sub, context, true);
            bucket = context.parsed.AnalogToDigitalLogicKind;
            if (null == bucket)
                context.parsed.AnalogToDigitalLogicKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Categorisation of different protective action adjustments that can be performed on equipment.
         */
        function parse_ProtectiveActionAdjustmentKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ProtectiveActionAdjustmentKind";
            /**
             * The adjustment is in percentage of the active value.
             */
            obj["byPercentage"] = base.parse_element (/<cim:ProtectiveActionAdjustmentKind.byPercentage>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.byPercentage>/g, sub, context, true);
            /**
             * The adjustment is in given by a value that defined the changes that will be done to the active value.
             */
            obj["byValue"] = base.parse_element (/<cim:ProtectiveActionAdjustmentKind.byValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.byValue>/g, sub, context, true);
            /**
             * The equipment will operate on the new value.
             */
            obj["setValue"] = base.parse_element (/<cim:ProtectiveActionAdjustmentKind.setValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.setValue>/g, sub, context, true);
            /**
             * The equipment will operating on a value given by a measurement.
             */
            obj["measurement"] = base.parse_element (/<cim:ProtectiveActionAdjustmentKind.measurement>([\s\S]*?)<\/cim:ProtectiveActionAdjustmentKind.measurement>/g, sub, context, true);
            bucket = context.parsed.ProtectiveActionAdjustmentKind;
            if (null == bucket)
                context.parsed.ProtectiveActionAdjustmentKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Categorisation of type of compare done on a branch group.
         */
        function parse_PinBranchGroupKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PinBranchGroupKind";
            /**
             * Active power in the branch group.
             */
            obj["activePower"] = base.parse_element (/<cim:PinBranchGroupKind.activePower>([\s\S]*?)<\/cim:PinBranchGroupKind.activePower>/g, sub, context, true);
            /**
             * reactive power in the branch group.
             */
            obj["reactivePower"] = base.parse_element (/<cim:PinBranchGroupKind.reactivePower>([\s\S]*?)<\/cim:PinBranchGroupKind.reactivePower>/g, sub, context, true);
            bucket = context.parsed.PinBranchGroupKind;
            if (null == bucket)
                context.parsed.PinBranchGroupKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Protective action to change regulation to Equipment.
         */
        function parse_ProtectiveActionRegulation (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectiveAction (context, sub);
            obj.cls = "ProtectiveActionRegulation";
            /**
             * If true the regulator is put in-service, otherwise out-of-service (no regulation).
             */
            obj["isRegulating"] = base.to_boolean (base.parse_element (/<cim:ProtectiveActionRegulation.isRegulating>([\s\S]*?)<\/cim:ProtectiveActionRegulation.isRegulating>/g, sub, context, true));
            /**
             * The target value specified the new case input for the regulator.
             * The value has the units appropriate to the mode attribute. The protective action does not change the mode attribute.
             */
            obj["targetValue"] = base.to_float (base.parse_element (/<cim:ProtectiveActionRegulation.targetValue>([\s\S]*?)<\/cim:ProtectiveActionRegulation.targetValue>/g, sub, context, true));
            /**
             * 
             */
            obj["RegulatingControl"] = base.parse_attribute (/<cim:ProtectiveActionRegulation.RegulatingControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ProtectiveActionRegulation;
            if (null == bucket)
                context.parsed.ProtectiveActionRegulation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An output from one gate represent an input to another gate.
         */
        function parse_PinGate (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GateInputPin (context, sub);
            obj.cls = "PinGate";
            /**
             * 
             */
            obj["GateOutput"] = base.parse_attribute (/<cim:PinGate.GateOutput\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PinGate;
            if (null == bucket)
                context.parsed.PinGate = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Logical gate than support logical operation based on the input.
         */
        function parse_Gate (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Gate";
            /**
             * The logical operation of the gate.
             */
            obj["kind"] = base.parse_element (/<cim:Gate.kind>([\s\S]*?)<\/cim:Gate.kind>/g, sub, context, true);
            bucket = context.parsed.Gate;
            if (null == bucket)
                context.parsed.Gate = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Categorisation of type of compare done on Terminal.
         */
        function parse_PinTerminalKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PinTerminalKind";
            /**
             * Active Power on the Terminal.
             */
            obj["activePower"] = base.parse_element (/<cim:PinTerminalKind.activePower>([\s\S]*?)<\/cim:PinTerminalKind.activePower>/g, sub, context, true);
            /**
             * Apparent Power on the Terminal.
             */
            obj["apparentPower"] = base.parse_element (/<cim:PinTerminalKind.apparentPower>([\s\S]*?)<\/cim:PinTerminalKind.apparentPower>/g, sub, context, true);
            /**
             * Reactive Power on the Terminal.
             */
            obj["reactivePower"] = base.parse_element (/<cim:PinTerminalKind.reactivePower>([\s\S]*?)<\/cim:PinTerminalKind.reactivePower>/g, sub, context, true);
            /**
             * Voltage on the Terminal.
             */
            obj["voltage"] = base.parse_element (/<cim:PinTerminalKind.voltage>([\s\S]*?)<\/cim:PinTerminalKind.voltage>/g, sub, context, true);
            bucket = context.parsed.PinTerminalKind;
            if (null == bucket)
                context.parsed.PinTerminalKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Stage of a remedial action scheme.
         */
        function parse_Stage (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Stage";
            /**
             * The priority of the stage.   0 = don t care (default) 1 = highest priority. 2 is less than 1 and so on.
             * A stage with higher priority needs be activated before a lower stage can be activated.
             */
            obj["priority"] = base.parse_element (/<cim:Stage.priority>([\s\S]*?)<\/cim:Stage.priority>/g, sub, context, true);
            /**
             * 
             */
            obj["RemedialActionScheme"] = base.parse_attribute (/<cim:Stage.RemedialActionScheme\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Stage;
            if (null == bucket)
                context.parsed.Stage = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Result of a calculation of one or more measurement.
         */
        function parse_MeasurementCalculator (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MeasurementCalculator";
            /**
             * Calculation operation executed on the operants.
             */
            obj["kind"] = base.parse_element (/<cim:MeasurementCalculator.kind>([\s\S]*?)<\/cim:MeasurementCalculator.kind>/g, sub, context, true);
            bucket = context.parsed.MeasurementCalculator;
            if (null == bucket)
                context.parsed.MeasurementCalculator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Classification of Remedial Action Scheme.
         */
        function parse_RemedialActionSchemeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RemedialActionSchemeKind";
            /**
             * Remedial Action Scheme (RAS).
             */
            obj["rAS"] = base.parse_element (/<cim:RemedialActionSchemeKind.rAS>([\s\S]*?)<\/cim:RemedialActionSchemeKind.rAS>/g, sub, context, true);
            /**
             * Remedial Action Plan (RAP)
             */
            obj["rAP"] = base.parse_element (/<cim:RemedialActionSchemeKind.rAP>([\s\S]*?)<\/cim:RemedialActionSchemeKind.rAP>/g, sub, context, true);
            bucket = context.parsed.RemedialActionSchemeKind;
            if (null == bucket)
                context.parsed.RemedialActionSchemeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Define the different logical operations.
         */
        function parse_GateLogicKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GateLogicKind";
            /**
             * A logical AND operation.
             * True when all input are true.
             */
            obj["and"] = base.parse_element (/<cim:GateLogicKind.and>([\s\S]*?)<\/cim:GateLogicKind.and>/g, sub, context, true);
            /**
             * A logical OR operation.
             * True when one or more input are true.
             */
            obj["or"] = base.parse_element (/<cim:GateLogicKind.or>([\s\S]*?)<\/cim:GateLogicKind.or>/g, sub, context, true);
            /**
             * A logical NOR operation.
             * False when one or more input are true.
             */
            obj["nor"] = base.parse_element (/<cim:GateLogicKind.nor>([\s\S]*?)<\/cim:GateLogicKind.nor>/g, sub, context, true);
            /**
             * A logical NAND operation.
             * False when all input are true.
             */
            obj["nand"] = base.parse_element (/<cim:GateLogicKind.nand>([\s\S]*?)<\/cim:GateLogicKind.nand>/g, sub, context, true);
            /**
             * A logical NOT operation.
             * Only one input and true input will give false out and false in will give true out. An inverter.
             */
            obj["not"] = base.parse_element (/<cim:GateLogicKind.not>([\s\S]*?)<\/cim:GateLogicKind.not>/g, sub, context, true);
            /**
             * A logical XNOR operation.
             * The function is the inverse of the exclusive OR (XOR) gate. All input false or true will give true. Otherwise false.
             */
            obj["xnor"] = base.parse_element (/<cim:GateLogicKind.xnor>([\s\S]*?)<\/cim:GateLogicKind.xnor>/g, sub, context, true);
            /**
             * A logical XOR operation.
             * All input false or true will give false. Otherwise true.
             */
            obj["xor"] = base.parse_element (/<cim:GateLogicKind.xor>([\s\S]*?)<\/cim:GateLogicKind.xor>/g, sub, context, true);
            bucket = context.parsed.GateLogicKind;
            if (null == bucket)
                context.parsed.GateLogicKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Value associated with Terminal is used as compare.
         */
        function parse_PinTerminal (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GateInputPin (context, sub);
            obj.cls = "PinTerminal";
            /**
             * The compare operation done on the terminal.
             */
            obj["kind"] = base.parse_element (/<cim:PinTerminal.kind>([\s\S]*?)<\/cim:PinTerminal.kind>/g, sub, context, true);
            /**
             * 
             */
            obj["Terminal"] = base.parse_attribute (/<cim:PinTerminal.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PinTerminal;
            if (null == bucket)
                context.parsed.PinTerminal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Value associated with branch group is used as compare.
         */
        function parse_PinBranchGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_GateInputPin (context, sub);
            obj.cls = "PinBranchGroup";
            /**
             * The compare operation done on the branch group.
             */
            obj["kind"] = base.parse_element (/<cim:PinBranchGroup.kind>([\s\S]*?)<\/cim:PinBranchGroup.kind>/g, sub, context, true);
            /**
             * 
             */
            obj["BranchGroup"] = base.parse_attribute (/<cim:PinBranchGroup.BranchGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PinBranchGroup;
            if (null == bucket)
                context.parsed.PinBranchGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Protective actions on non-switching equipment.
         * The operating condition is adjusted.
         */
        function parse_ProtectiveActionAdjustment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectiveAction (context, sub);
            obj.cls = "ProtectiveActionAdjustment";
            /**
             * The adjustment is given in percent of the active value.
             */
            obj["byPercentage"] = base.parse_element (/<cim:ProtectiveActionAdjustment.byPercentage>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.byPercentage>/g, sub, context, true);
            /**
             * The adjustment is given in value of the active value.
             */
            obj["byValue"] = base.to_float (base.parse_element (/<cim:ProtectiveActionAdjustment.byValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.byValue>/g, sub, context, true));
            /**
             * Defines the kind of adjustment that should be done.
             * With this value the correct attribute containing the value needs to be used.
             */
            obj["kind"] = base.parse_element (/<cim:ProtectiveActionAdjustment.kind>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.kind>/g, sub, context, true);
            /**
             * If true, the adjusted value is an reduction.
             * Other wise it is an increase in the value.
             */
            obj["reduce"] = base.to_boolean (base.parse_element (/<cim:ProtectiveActionAdjustment.reduce>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.reduce>/g, sub, context, true));
            /**
             * The adjustment is given by a new active value.
             */
            obj["setValue"] = base.to_float (base.parse_element (/<cim:ProtectiveActionAdjustment.setValue>([\s\S]*?)<\/cim:ProtectiveActionAdjustment.setValue>/g, sub, context, true));
            /**
             * 
             */
            obj["Measurement"] = base.parse_attribute (/<cim:ProtectiveActionAdjustment.Measurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["ConductingEquipment"] = base.parse_attribute (/<cim:ProtectiveActionAdjustment.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["DCConductingEquipment"] = base.parse_attribute (/<cim:ProtectiveActionAdjustment.DCConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ProtectiveActionAdjustment;
            if (null == bucket)
                context.parsed.ProtectiveActionAdjustment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A conditions that can trigger remedial actions.
         */
        function parse_TriggerCondition (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TriggerCondition";
            /**
             * 
             */
            obj["RemedialActionScheme"] = base.parse_attribute (/<cim:TriggerCondition.RemedialActionScheme\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["GateTrigger"] = base.parse_attribute (/<cim:TriggerCondition.GateTrigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TriggerCondition;
            if (null == bucket)
                context.parsed.TriggerCondition = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Protective action to put an Equipment in-service/out-of-service.
         */
        function parse_ProtectiveActionEquipment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectiveAction (context, sub);
            obj.cls = "ProtectiveActionEquipment";
            /**
             * If true the equipment is put in-service, otherwise out-of-service.
             */
            obj["inService"] = base.to_boolean (base.parse_element (/<cim:ProtectiveActionEquipment.inService>([\s\S]*?)<\/cim:ProtectiveActionEquipment.inService>/g, sub, context, true));
            /**
             * 
             */
            obj["Equipment"] = base.parse_attribute (/<cim:ProtectiveActionEquipment.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ProtectiveActionEquipment;
            if (null == bucket)
                context.parsed.ProtectiveActionEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Categorisation of calculation operation that can be done to Measurement.
         */
        function parse_CalculationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CalculationKind";
            /**
             * Summation operation over the input values (operands).
             */
            obj["sum"] = base.parse_element (/<cim:CalculationKind.sum>([\s\S]*?)<\/cim:CalculationKind.sum>/g, sub, context, true);
            /**
             * Multiplication operation the input values (operands).
             */
            obj["mul"] = base.parse_element (/<cim:CalculationKind.mul>([\s\S]*?)<\/cim:CalculationKind.mul>/g, sub, context, true);
            /**
             * Division operation the input values (operands).
             */
            obj["div"] = base.parse_element (/<cim:CalculationKind.div>([\s\S]*?)<\/cim:CalculationKind.div>/g, sub, context, true);
            /**
             * Square root operator - only one input value (operands).
             */
            obj["sqrt"] = base.parse_element (/<cim:CalculationKind.sqrt>([\s\S]*?)<\/cim:CalculationKind.sqrt>/g, sub, context, true);
            bucket = context.parsed.CalculationKind;
            if (null == bucket)
                context.parsed.CalculationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Categorisation of type of compare done on Equipment.
         */
        function parse_PinEquipmentKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PinEquipmentKind";
            /**
             * Check if equipment is in service, True if in service otherwise false.
             */
            obj["inService"] = base.parse_element (/<cim:PinEquipmentKind.inService>([\s\S]*?)<\/cim:PinEquipmentKind.inService>/g, sub, context, true);
            /**
             * Compare load flow result against rated current on the equipment (switch).
             */
            obj["ratedCurrent"] = base.parse_element (/<cim:PinEquipmentKind.ratedCurrent>([\s\S]*?)<\/cim:PinEquipmentKind.ratedCurrent>/g, sub, context, true);
            /**
             * Compare load flow result against the active voltage limit for the equipment.
             */
            obj["voltageLimit"] = base.parse_element (/<cim:PinEquipmentKind.voltageLimit>([\s\S]*?)<\/cim:PinEquipmentKind.voltageLimit>/g, sub, context, true);
            /**
             * Compare load flow result against the active current limit for the equipment.
             */
            obj["currentLimit"] = base.parse_element (/<cim:PinEquipmentKind.currentLimit>([\s\S]*?)<\/cim:PinEquipmentKind.currentLimit>/g, sub, context, true);
            /**
             * Compare load flow result against the active limit for active power for the given equipment.
             */
            obj["activePowerLimit"] = base.parse_element (/<cim:PinEquipmentKind.activePowerLimit>([\s\S]*?)<\/cim:PinEquipmentKind.activePowerLimit>/g, sub, context, true);
            /**
             * Compare load flow result against the active limit for apparent power for the given equipment.
             */
            obj["apparentPowerLimit"] = base.parse_element (/<cim:PinEquipmentKind.apparentPowerLimit>([\s\S]*?)<\/cim:PinEquipmentKind.apparentPowerLimit>/g, sub, context, true);
            /**
             * Check if all terminal on the equipment is connected.
             */
            obj["connected"] = base.parse_element (/<cim:PinEquipmentKind.connected>([\s\S]*?)<\/cim:PinEquipmentKind.connected>/g, sub, context, true);
            bucket = context.parsed.PinEquipmentKind;
            if (null == bucket)
                context.parsed.PinEquipmentKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A collection of protective actions to protect the integrity of the power system.
         */
        function parse_ProtectiveActionCollection (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ProtectiveActionCollection";
            bucket = context.parsed.ProtectiveActionCollection;
            if (null == bucket)
                context.parsed.ProtectiveActionCollection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_RemedialActionScheme: parse_RemedialActionScheme,
                parse_ProtectiveActionAdjustmentKind: parse_ProtectiveActionAdjustmentKind,
                parse_ProtectiveActionRegulation: parse_ProtectiveActionRegulation,
                parse_ProtectiveActionAdjustment: parse_ProtectiveActionAdjustment,
                parse_GateLogicKind: parse_GateLogicKind,
                parse_AnalogToDigitalLogicKind: parse_AnalogToDigitalLogicKind,
                parse_CalculationKind: parse_CalculationKind,
                parse_PinEquipment: parse_PinEquipment,
                parse_PinTerminal: parse_PinTerminal,
                parse_StageTrigger: parse_StageTrigger,
                parse_ProtectiveActionEquipment: parse_ProtectiveActionEquipment,
                parse_RemedialActionSchemeKind: parse_RemedialActionSchemeKind,
                parse_TriggerCondition: parse_TriggerCondition,
                parse_MeasurementCalculator: parse_MeasurementCalculator,
                parse_MeasurementCalculatorInput: parse_MeasurementCalculatorInput,
                parse_PinMeasurement: parse_PinMeasurement,
                parse_PinTerminalKind: parse_PinTerminalKind,
                parse_Stage: parse_Stage,
                parse_ProtectiveActionCollection: parse_ProtectiveActionCollection,
                parse_GateInputPin: parse_GateInputPin,
                parse_PinBranchGroup: parse_PinBranchGroup,
                parse_PinGate: parse_PinGate,
                parse_Gate: parse_Gate,
                parse_ProtectiveAction: parse_ProtectiveAction,
                parse_PinBranchGroupKind: parse_PinBranchGroupKind,
                parse_PinEquipmentKind: parse_PinEquipmentKind
            }
        );
    }
);