define
(
    ["model/base", "model/Core"],
    /**
     * This package models a specification of limits associated with equipment and other operational entities.
     */
    function (base, Core)
    {

        /**
         * Operational limit applied to voltage.
         */
        function parse_VoltageLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OperationalLimit (context, sub);
            obj.cls = "VoltageLimit";
            /**
             * Limit on voltage.
             * High or low limit nature of the limit depends upon the properties of the operational limit type.
             */
            obj["value"] = base.parse_element (/<cim:VoltageLimit.value>([\s\S]*?)<\/cim:VoltageLimit.value>/g, sub, context, true);
            bucket = context.parsed.VoltageLimit;
            if (null == bucket)
                context.parsed.VoltageLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A set of limits associated with equipment.
         * Sets of limits might apply to a specific temperature, or season for example. A set of limits may contain different severities of limit levels that would apply to the same equipment. The set may contain limits of different types such as apparent power and current limits or high and low voltage limits  that are logically applied together as a set.
         */
        function parse_OperationalLimitSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "OperationalLimitSet";
            /**
             * 
             */
            obj["Terminal"] = base.parse_attribute (/<cim:OperationalLimitSet.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The equipment to which the limit set applies.
             */
            obj["Equipment"] = base.parse_attribute (/<cim:OperationalLimitSet.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.OperationalLimitSet;
            if (null == bucket)
                context.parsed.OperationalLimitSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Limit on active power flow.
         */
        function parse_ActivePowerLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OperationalLimit (context, sub);
            obj.cls = "ActivePowerLimit";
            /**
             * Value of active power limit.
             */
            obj["value"] = base.parse_element (/<cim:ActivePowerLimit.value>([\s\S]*?)<\/cim:ActivePowerLimit.value>/g, sub, context, true);
            bucket = context.parsed.ActivePowerLimit;
            if (null == bucket)
                context.parsed.ActivePowerLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A value associated with a specific kind of limit.
         * The sub class value attribute shall be positive.
         */
        function parse_OperationalLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "OperationalLimit";
            /**
             * The limit type associated with this limit.
             */
            obj["OperationalLimitType"] = base.parse_attribute (/<cim:OperationalLimit.OperationalLimitType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.OperationalLimit;
            if (null == bucket)
                context.parsed.OperationalLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Operational limit on current.
         */
        function parse_CurrentLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OperationalLimit (context, sub);
            obj.cls = "CurrentLimit";
            /**
             * Limit on current flow.
             */
            obj["value"] = base.parse_element (/<cim:CurrentLimit.value>([\s\S]*?)<\/cim:CurrentLimit.value>/g, sub, context, true);
            bucket = context.parsed.CurrentLimit;
            if (null == bucket)
                context.parsed.CurrentLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A specific directed terminal flow for a branch group.
         */
        function parse_BranchGroupTerminal (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BranchGroupTerminal";
            /**
             * The flow into the terminal is summed if set true.
             * The flow out of the terminanl is summed if set false.
             */
            obj["positiveFlowIn"] = base.to_boolean (base.parse_element (/<cim:BranchGroupTerminal.positiveFlowIn>([\s\S]*?)<\/cim:BranchGroupTerminal.positiveFlowIn>/g, sub, context, true));
            /**
             * The terminal to be summed.
             */
            obj["Terminal"] = base.parse_attribute (/<cim:BranchGroupTerminal.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.BranchGroupTerminal;
            if (null == bucket)
                context.parsed.BranchGroupTerminal = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A group of branch terminals whose directed flow summation is to be monitored.
         * A branch group need not form a cutset of the network.
         */
        function parse_BranchGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "BranchGroup";
            /**
             * The maximum active power flow.
             */
            obj["maximumActivePower"] = base.parse_element (/<cim:BranchGroup.maximumActivePower>([\s\S]*?)<\/cim:BranchGroup.maximumActivePower>/g, sub, context, true);
            /**
             * The maximum reactive power flow.
             */
            obj["maximumReactivePower"] = base.parse_element (/<cim:BranchGroup.maximumReactivePower>([\s\S]*?)<\/cim:BranchGroup.maximumReactivePower>/g, sub, context, true);
            /**
             * The minimum active power flow.
             */
            obj["minimumActivePower"] = base.parse_element (/<cim:BranchGroup.minimumActivePower>([\s\S]*?)<\/cim:BranchGroup.minimumActivePower>/g, sub, context, true);
            /**
             * The minimum reactive power flow.
             */
            obj["minimumReactivePower"] = base.parse_element (/<cim:BranchGroup.minimumReactivePower>([\s\S]*?)<\/cim:BranchGroup.minimumReactivePower>/g, sub, context, true);
            /**
             * Monitor the active power flow.
             */
            obj["monitorActivePower"] = base.to_boolean (base.parse_element (/<cim:BranchGroup.monitorActivePower>([\s\S]*?)<\/cim:BranchGroup.monitorActivePower>/g, sub, context, true));
            /**
             * Monitor the reactive power flow.
             */
            obj["monitorReactivePower"] = base.to_boolean (base.parse_element (/<cim:BranchGroup.monitorReactivePower>([\s\S]*?)<\/cim:BranchGroup.monitorReactivePower>/g, sub, context, true));
            bucket = context.parsed.BranchGroup;
            if (null == bucket)
                context.parsed.BranchGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The operational meaning of a category of limits.
         */
        function parse_OperationalLimitType (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "OperationalLimitType";
            /**
             * The nominal acceptable duration of the limit.
             * Limits are commonly expressed in terms of the a time limit for which the limit is normally acceptable.   The actual acceptable duration of a specific limit may depend on other local factors such as temperature or wind speed.
             */
            obj["acceptableDuration"] = base.parse_element (/<cim:OperationalLimitType.acceptableDuration>([\s\S]*?)<\/cim:OperationalLimitType.acceptableDuration>/g, sub, context, true);
            /**
             * The direction of the limit.
             */
            obj["direction"] = base.parse_element (/<cim:OperationalLimitType.direction>([\s\S]*?)<\/cim:OperationalLimitType.direction>/g, sub, context, true);
            /**
             * 
             */
            obj["TargetOperationalLimitmTypeScaling"] = base.parse_attribute (/<cim:OperationalLimitType.TargetOperationalLimitmTypeScaling\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.OperationalLimitType;
            if (null == bucket)
                context.parsed.OperationalLimitType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The direction attribute describes the side of  a limit that is a violation.
         */
        function parse_OperationalLimitDirectionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OperationalLimitDirectionKind";
            /**
             * High means that a monitored value above the limit value is a violation.
             * If applied to a terminal flow, the positive direction is into the terminal.
             */
            obj["high"] = base.parse_element (/<cim:OperationalLimitDirectionKind.high>([\s\S]*?)<\/cim:OperationalLimitDirectionKind.high>/g, sub, context, true);
            /**
             * Low means a monitored value below the limit is a violation.
             * If applied to a terminal flow, the positive direction is into the terminal.
             */
            obj["low"] = base.parse_element (/<cim:OperationalLimitDirectionKind.low>([\s\S]*?)<\/cim:OperationalLimitDirectionKind.low>/g, sub, context, true);
            /**
             * An absoluteValue limit means that a monitored absolute value above the limit value is a violation.
             */
            obj["absoluteValue"] = base.parse_element (/<cim:OperationalLimitDirectionKind.absoluteValue>([\s\S]*?)<\/cim:OperationalLimitDirectionKind.absoluteValue>/g, sub, context, true);
            bucket = context.parsed.OperationalLimitDirectionKind;
            if (null == bucket)
                context.parsed.OperationalLimitDirectionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Apparent power limit.
         */
        function parse_ApparentPowerLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OperationalLimit (context, sub);
            obj.cls = "ApparentPowerLimit";
            /**
             * The apparent power limit.
             */
            obj["value"] = base.parse_element (/<cim:ApparentPowerLimit.value>([\s\S]*?)<\/cim:ApparentPowerLimit.value>/g, sub, context, true);
            bucket = context.parsed.ApparentPowerLimit;
            if (null == bucket)
                context.parsed.ApparentPowerLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_OperationalLimitSet: parse_OperationalLimitSet,
                parse_OperationalLimitType: parse_OperationalLimitType,
                parse_ActivePowerLimit: parse_ActivePowerLimit,
                parse_VoltageLimit: parse_VoltageLimit,
                parse_OperationalLimit: parse_OperationalLimit,
                parse_ApparentPowerLimit: parse_ApparentPowerLimit,
                parse_BranchGroupTerminal: parse_BranchGroupTerminal,
                parse_OperationalLimitDirectionKind: parse_OperationalLimitDirectionKind,
                parse_BranchGroup: parse_BranchGroup,
                parse_CurrentLimit: parse_CurrentLimit
            }
        );
    }
);