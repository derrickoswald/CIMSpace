define
(
    ["model/base", "model/Core"],
    /**
     * An extension to the Core and Wires packages that models information for protection equipment such as relays.
     *
     * These entities are used within training simulators and distribution network fault location applications.
     *
     */
    function (base, Core)
    {

        /**
         * A reclose sequence (open and close) is defined for each possible reclosure of a breaker.
         *
         */
        function parse_RecloseSequence (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "RecloseSequence";
            /**
             * Indicates the time lapse before the reclose step will execute a reclose.
             *
             */
            obj["recloseDelay"] = base.parse_element (/<cim:RecloseSequence.recloseDelay>([\s\S]*?)<\/cim:RecloseSequence.recloseDelay>/g, sub, context, true);
            /**
             * Indicates the ordinal position of the reclose step relative to other steps in the sequence.
             *
             */
            obj["recloseStep"] = base.parse_element (/<cim:RecloseSequence.recloseStep>([\s\S]*?)<\/cim:RecloseSequence.recloseStep>/g, sub, context, true);
            /**
             * A breaker may have zero or more automatic reclosures after a trip occurs.
             *
             */
            obj["ProtectedSwitch"] = base.parse_attribute (/<cim:RecloseSequence.ProtectedSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RecloseSequence;
            if (null == bucket)
                context.parsed.RecloseSequence = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A device that checks current flow values in any direction or designated direction.
         *
         */
        function parse_CurrentRelay (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectionEquipment (context, sub);
            obj.cls = "CurrentRelay";
            /**
             * Current limit number one 1 for inverse time pickup.
             *
             */
            obj["currentLimit1"] = base.parse_element (/<cim:CurrentRelay.currentLimit1>([\s\S]*?)<\/cim:CurrentRelay.currentLimit1>/g, sub, context, true);
            /**
             * Current limit number 2 for inverse time pickup.
             *
             */
            obj["currentLimit2"] = base.parse_element (/<cim:CurrentRelay.currentLimit2>([\s\S]*?)<\/cim:CurrentRelay.currentLimit2>/g, sub, context, true);
            /**
             * Current limit number 3 for inverse time pickup.
             *
             */
            obj["currentLimit3"] = base.parse_element (/<cim:CurrentRelay.currentLimit3>([\s\S]*?)<\/cim:CurrentRelay.currentLimit3>/g, sub, context, true);
            /**
             * Set true if the current relay has inverse time characteristic.
             *
             */
            obj["inverseTimeFlag"] = base.to_boolean (base.parse_element (/<cim:CurrentRelay.inverseTimeFlag>([\s\S]*?)<\/cim:CurrentRelay.inverseTimeFlag>/g, sub, context, true));
            /**
             * Inverse time delay number 1 for current limit number 1.
             *
             */
            obj["timeDelay1"] = base.parse_element (/<cim:CurrentRelay.timeDelay1>([\s\S]*?)<\/cim:CurrentRelay.timeDelay1>/g, sub, context, true);
            /**
             * Inverse time delay number 2 for current limit number 2.
             *
             */
            obj["timeDelay2"] = base.parse_element (/<cim:CurrentRelay.timeDelay2>([\s\S]*?)<\/cim:CurrentRelay.timeDelay2>/g, sub, context, true);
            /**
             * Inverse time delay number 3 for current limit number 3.
             *
             */
            obj["timeDelay3"] = base.parse_element (/<cim:CurrentRelay.timeDelay3>([\s\S]*?)<\/cim:CurrentRelay.timeDelay3>/g, sub, context, true);
            bucket = context.parsed.CurrentRelay;
            if (null == bucket)
                context.parsed.CurrentRelay = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A device that operates when two AC circuits are within the desired limits of frequency, phase angle, and voltage, to permit or to cause the paralleling of these two circuits.
         *
         * Used to prevent the paralleling of non-synchronous topological islands.
         *
         */
        function parse_SynchrocheckRelay (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ProtectionEquipment (context, sub);
            obj.cls = "SynchrocheckRelay";
            /**
             * The maximum allowable voltage vector phase angle difference across the open device.
             *
             */
            obj["maxAngleDiff"] = base.parse_element (/<cim:SynchrocheckRelay.maxAngleDiff>([\s\S]*?)<\/cim:SynchrocheckRelay.maxAngleDiff>/g, sub, context, true);
            /**
             * The maximum allowable frequency difference across the open device.
             *
             */
            obj["maxFreqDiff"] = base.parse_element (/<cim:SynchrocheckRelay.maxFreqDiff>([\s\S]*?)<\/cim:SynchrocheckRelay.maxFreqDiff>/g, sub, context, true);
            /**
             * The maximum allowable difference voltage across the open device.
             *
             */
            obj["maxVoltDiff"] = base.parse_element (/<cim:SynchrocheckRelay.maxVoltDiff>([\s\S]*?)<\/cim:SynchrocheckRelay.maxVoltDiff>/g, sub, context, true);
            bucket = context.parsed.SynchrocheckRelay;
            if (null == bucket)
                context.parsed.SynchrocheckRelay = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An electrical device designed to respond to input conditions in a prescribed manner and after specified conditions are met to cause contact operation or similar abrupt change in associated electric control circuits, or simply to display the detected condition.
         *
         * Protection equipment are associated with conducting equipment and usually operate circuit breakers.
         *
         */
        function parse_ProtectionEquipment (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Equipment (context, sub);
            obj.cls = "ProtectionEquipment";
            /**
             * The maximum allowable value.
             *
             */
            obj["highLimit"] = base.to_float (base.parse_element (/<cim:ProtectionEquipment.highLimit>([\s\S]*?)<\/cim:ProtectionEquipment.highLimit>/g, sub, context, true));
            /**
             * The minimum allowable value.
             *
             */
            obj["lowLimit"] = base.to_float (base.parse_element (/<cim:ProtectionEquipment.lowLimit>([\s\S]*?)<\/cim:ProtectionEquipment.lowLimit>/g, sub, context, true));
            /**
             * Direction same as positive active power flow value.
             *
             */
            obj["powerDirectionFlag"] = base.to_boolean (base.parse_element (/<cim:ProtectionEquipment.powerDirectionFlag>([\s\S]*?)<\/cim:ProtectionEquipment.powerDirectionFlag>/g, sub, context, true));
            /**
             * The time delay from detection of abnormal conditions to relay operation.
             *
             */
            obj["relayDelayTime"] = base.parse_element (/<cim:ProtectionEquipment.relayDelayTime>([\s\S]*?)<\/cim:ProtectionEquipment.relayDelayTime>/g, sub, context, true);
            /**
             * The unit multiplier of the value.
             *
             */
            obj["unitMultiplier"] = base.parse_element (/<cim:ProtectionEquipment.unitMultiplier>([\s\S]*?)<\/cim:ProtectionEquipment.unitMultiplier>/g, sub, context, true);
            /**
             * The unit of measure of the value.
             *
             */
            obj["unitSymbol"] = base.parse_element (/<cim:ProtectionEquipment.unitSymbol>([\s\S]*?)<\/cim:ProtectionEquipment.unitSymbol>/g, sub, context, true);
            bucket = context.parsed.ProtectionEquipment;
            if (null == bucket)
                context.parsed.ProtectionEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_CurrentRelay: parse_CurrentRelay,
                parse_RecloseSequence: parse_RecloseSequence,
                parse_SynchrocheckRelay: parse_SynchrocheckRelay,
                parse_ProtectionEquipment: parse_ProtectionEquipment
            }
        );
    }
);