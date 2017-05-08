define
(
    ["model/base", "model/Wires"],
    function (base, Wires)
    {

        /**
         * SVC asset allows the capacitive and inductive ratings for each phase to be specified individually if required.
         */
        function parse_SVC (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_ShuntCompensator (context, sub);
            obj.cls = "SVC";
            /**
             * Maximum capacitive reactive power.
             */
            obj["capacitiveRating"] = base.parse_element (/<cim:SVC.capacitiveRating>([\s\S]*?)<\/cim:SVC.capacitiveRating>/g, sub, context, true);
            /**
             * Maximum inductive reactive power.
             */
            obj["inductiveRating"] = base.parse_element (/<cim:SVC.inductiveRating>([\s\S]*?)<\/cim:SVC.inductiveRating>/g, sub, context, true);
            bucket = context.parsed.SVC;
            if (null == bucket)
                context.parsed.SVC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Distribution capacitor bank control settings.
         */
        function parse_ShuntCompensatorControl (context, sub)
        {
            var obj;
            var bucket;

            obj = Wires.parse_RegulatingControl (context, sub);
            obj.cls = "ShuntCompensatorControl";
            /**
             * For VAR, amp, or power factor locally controlled shunt impedances, the flow direction: in, out.
             */
            obj["branchDirect"] = base.parse_element (/<cim:ShuntCompensatorControl.branchDirect>([\s\S]*?)<\/cim:ShuntCompensatorControl.branchDirect>/g, sub, context, true);
            /**
             * The size of the individual units that make up the bank.
             */
            obj["cellSize"] = base.parse_element (/<cim:ShuntCompensatorControl.cellSize>([\s\S]*?)<\/cim:ShuntCompensatorControl.cellSize>/g, sub, context, true);
            /**
             * Kind of control (if any).
             */
            obj["controlKind"] = base.parse_element (/<cim:ShuntCompensatorControl.controlKind>([\s\S]*?)<\/cim:ShuntCompensatorControl.controlKind>/g, sub, context, true);
            /**
             * For locally controlled shunt impedances which have a voltage override feature, the high voltage override value.
             * If the voltage is above this value, the shunt impedance will be turned off regardless of the other local controller settings.
             */
            obj["highVoltageOverride"] = base.parse_element (/<cim:ShuntCompensatorControl.highVoltageOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.highVoltageOverride>/g, sub, context, true);
            /**
             * Kind of local controller.
             */
            obj["localControlKind"] = base.parse_element (/<cim:ShuntCompensatorControl.localControlKind>([\s\S]*?)<\/cim:ShuntCompensatorControl.localControlKind>/g, sub, context, true);
            /**
             * Upper control setting.
             */
            obj["localOffLevel"] = base.parse_element (/<cim:ShuntCompensatorControl.localOffLevel>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOffLevel>/g, sub, context, true);
            /**
             * Lower control setting.
             */
            obj["localOnLevel"] = base.parse_element (/<cim:ShuntCompensatorControl.localOnLevel>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOnLevel>/g, sub, context, true);
            /**
             * True if the locally controlled capacitor has voltage override capability.
             */
            obj["localOverride"] = base.to_boolean (base.parse_element (/<cim:ShuntCompensatorControl.localOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOverride>/g, sub, context, true));
            /**
             * For locally controlled shunt impedances which have a voltage override feature, the low voltage override value.
             * If the voltage is below this value, the shunt impedance will be turned on regardless of the other local controller settings.
             */
            obj["lowVoltageOverride"] = base.parse_element (/<cim:ShuntCompensatorControl.lowVoltageOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.lowVoltageOverride>/g, sub, context, true);
            /**
             * IdmsShuntImpedanceData.maxNumSwitchOps.
             */
            obj["maxSwitchOperationCount"] = base.parse_element (/<cim:ShuntCompensatorControl.maxSwitchOperationCount>([\s\S]*?)<\/cim:ShuntCompensatorControl.maxSwitchOperationCount>/g, sub, context, true);
            /**
             * True if open is normal status for a fixed capacitor bank, otherwise normal status is closed.
             */
            obj["normalOpen"] = base.to_boolean (base.parse_element (/<cim:ShuntCompensatorControl.normalOpen>([\s\S]*?)<\/cim:ShuntCompensatorControl.normalOpen>/g, sub, context, true));
            /**
             * For VAR, amp, or power factor locally controlled shunt impedances, the index of the regulation branch.
             */
            obj["regBranch"] = base.parse_element (/<cim:ShuntCompensatorControl.regBranch>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranch>/g, sub, context, true);
            /**
             * For VAR, amp, or power factor locally controlled shunt impedances, the end of the branch that is regulated.
             * The field has the following values: from side, to side, and tertiary (only if the branch is a transformer).
             */
            obj["regBranchEnd"] = base.parse_element (/<cim:ShuntCompensatorControl.regBranchEnd>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranchEnd>/g, sub, context, true);
            /**
             * (For VAR, amp, or power factor locally controlled shunt impedances) Kind of regulation branch.
             */
            obj["regBranchKind"] = base.parse_element (/<cim:ShuntCompensatorControl.regBranchKind>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranchKind>/g, sub, context, true);
            /**
             * Phases that are measured for controlling the device.
             */
            obj["sensingPhaseCode"] = base.parse_element (/<cim:ShuntCompensatorControl.sensingPhaseCode>([\s\S]*?)<\/cim:ShuntCompensatorControl.sensingPhaseCode>/g, sub, context, true);
            /**
             * Time interval between consecutive switching operations.
             */
            obj["switchOperationCycle"] = base.parse_element (/<cim:ShuntCompensatorControl.switchOperationCycle>([\s\S]*?)<\/cim:ShuntCompensatorControl.switchOperationCycle>/g, sub, context, true);
            /**
             * True if regulated voltages are measured line to line, otherwise they are measured line to ground.
             */
            obj["vRegLineLine"] = base.to_boolean (base.parse_element (/<cim:ShuntCompensatorControl.vRegLineLine>([\s\S]*?)<\/cim:ShuntCompensatorControl.vRegLineLine>/g, sub, context, true));
            /**
             * 
             */
            obj["ShuntCompensatorInfo"] = base.parse_attribute (/<cim:ShuntCompensatorControl.ShuntCompensatorInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ShuntCompensatorControl;
            if (null == bucket)
                context.parsed.ShuntCompensatorControl = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ShuntCompensatorControl: parse_ShuntCompensatorControl,
                parse_SVC: parse_SVC
            }
        );
    }
);