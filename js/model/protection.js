/**
 * @fileOverview Package Protection CIM model.
 * @name model/protection
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/core"],
    /**
     * @summary Package Protection CIM model.
     * @description
     * @name model/protection
     * @exports model/protection
     * @version 1.0
     */
    function (base, core)
    {

        /*
         * Package Protection
         */

        /**
         * Parse a CurrentRelay.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.CurrentRelay - the list of CurrentRelay elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/protection
         */
        function parse_CurrentRelay (context, sub)
        {
            var obj;
            var relays;

            obj = parse_ProtectionEquipment (context, sub);
            obj.cls = "CurrentRelay";
            obj.currentLimit1 = base.parse_element (/<cim:CurrentRelay.currentLimit1>([\s\S]*?)<\/cim:CurrentRelay.currentLimit1>/g, sub, context, true);
            obj.currentLimit2 = base.parse_element (/<cim:CurrentRelay.currentLimit2>([\s\S]*?)<\/cim:CurrentRelay.currentLimit2>/g, sub, context, true);
            obj.currentLimit3 = base.parse_element (/<cim:CurrentRelay.currentLimit3>([\s\S]*?)<\/cim:CurrentRelay.currentLimit3>/g, sub, context, true);
            obj.inverseTimeFlag = base.parse_element (/<cim:CurrentRelay.inverseTimeFlag>([\s\S]*?)<\/cim:CurrentRelay.inverseTimeFlag>/g, sub, context, true);
            obj.timeDelay1 = base.parse_element (/<cim:CurrentRelay.timeDelay1>([\s\S]*?)<\/cim:CurrentRelay.timeDelay1>/g, sub, context, true);
            obj.timeDelay2 = base.parse_element (/<cim:CurrentRelay.timeDelay2>([\s\S]*?)<\/cim:CurrentRelay.timeDelay2>/g, sub, context, true);
            obj.timeDelay3 = base.parse_element (/<cim:CurrentRelay.timeDelay3>([\s\S]*?)<\/cim:CurrentRelay.timeDelay3>/g, sub, context, true);
            relays = context.parsed.CurrentRelay;
            if (null == relays)
                context.parsed.CurrentRelay = relays = {};
            relays[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ProtectionEquipment.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ProtectionEquipment - the list of ProtectionEquipment elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/protection
         */
        function parse_ProtectionEquipment (context, sub)
        {
            var obj;
            var equipment;

            obj = core.parse_Equipment (context, sub);
            obj.cls = "ProtectionEquipment";
            obj.highLimit = base.parse_element (/<cim:ProtectionEquipment.highLimit>([\s\S]*?)<\/cim:ProtectionEquipment.highLimit>/g, sub, context, true);
            obj.lowLimit = base.parse_element (/<cim:ProtectionEquipment.lowLimit>([\s\S]*?)<\/cim:ProtectionEquipment.lowLimit>/g, sub, context, true);
            obj.powerDirectionFlag = base.parse_element (/<cim:ProtectionEquipment.powerDirectionFlag>([\s\S]*?)<\/cim:ProtectionEquipment.powerDirectionFlag>/g, sub, context, true);
            obj.relayDelayTime = base.parse_element (/<cim:ProtectionEquipment.relayDelayTime>([\s\S]*?)<\/cim:ProtectionEquipment.relayDelayTime>/g, sub, context, true);
            obj.unitMultiplier = base.parse_attribute (/<cim:ProtectionEquipment.unitMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.unitSymbol = base.parse_attribute (/<cim:ProtectionEquipment.unitSymbol\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            equipment = context.parsed.ProtectionEquipment;
            if (null == equipment)
                context.parsed.ProtectionEquipment = equipment = {};
            equipment[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_CurrentRelay: parse_CurrentRelay,
                parse_ProtectionEquipment: parse_ProtectionEquipment
            }
        );
    }
);
