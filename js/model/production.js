/**
 * @fileOverview Package Production CIM model.
 * @name model/production
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/core"],
    /**
     * @summary Package Production CIM model.
     * @description
     * @name model/production
     * @exports model/production
     * @version 1.0
     */
    function (base, core)
    {

        /*
         * Package Production
         */

        /**
         * Parse a GeneratingUnit.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.GeneratingUnit - the list of GeneratingUnit elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/production
         */
        function parse_GeneratingUnit (context, sub)
        {
            var obj;
            var units;

            obj = core.parse_Equipment (context, sub);
            obj.cls = "GeneratingUnit";
            obj.allocSpinResP = base.parse_element (/<cim:GeneratingUnit.allocSpinResP>([\s\S]*?)<\/cim:GeneratingUnit.allocSpinResP>/g, sub, context, true);
            obj.autoCntrlMarginP = base.parse_element (/<cim:GeneratingUnit.autoCntrlMarginP>([\s\S]*?)<\/cim:GeneratingUnit.autoCntrlMarginP>/g, sub, context, true);
            obj.baseP = base.parse_element (/<cim:GeneratingUnit.baseP>([\s\S]*?)<\/cim:GeneratingUnit.baseP>/g, sub, context, true);
            obj.controlDeadband = base.parse_element (/<cim:GeneratingUnit.controlDeadband>([\s\S]*?)<\/cim:GeneratingUnit.controlDeadband>/g, sub, context, true);
            obj.controlPulseHigh = base.parse_element (/<cim:GeneratingUnit.controlPulseHigh>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseHigh>/g, sub, context, true);
            obj.controlPulseLow = base.parse_element (/<cim:GeneratingUnit.controlPulseLow>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseLow>/g, sub, context, true);
            obj.controlResponseRate = base.parse_element (/<cim:GeneratingUnit.controlResponseRate>([\s\S]*?)<\/cim:GeneratingUnit.controlResponseRate>/g, sub, context, true);
            obj.efficiency = base.parse_element (/<cim:GeneratingUnit.efficiency>([\s\S]*?)<\/cim:GeneratingUnit.efficiency>/g, sub, context, true);
            obj.genControlMode = base.parse_attribute (/<cim:GeneratingUnit.genControlMode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.genControlSource = base.parse_attribute (/<cim:GeneratingUnit.genControlSource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.governorMPL = base.parse_element (/<cim:GeneratingUnit.governorMPL>([\s\S]*?)<\/cim:GeneratingUnit.governorMPL>/g, sub, context, true);
            obj.governorSCD = base.parse_element (/<cim:GeneratingUnit.governorSCD>([\s\S]*?)<\/cim:GeneratingUnit.governorSCD>/g, sub, context, true);
            obj.highControlLimit = base.parse_element (/<cim:GeneratingUnit.highControlLimit>([\s\S]*?)<\/cim:GeneratingUnit.highControlLimit>/g, sub, context, true);
            obj.initialP = base.parse_element (/<cim:GeneratingUnit.initialP>([\s\S]*?)<\/cim:GeneratingUnit.initialP>/g, sub, context, true);
            obj.longPF = base.parse_element (/<cim:GeneratingUnit.longPF>([\s\S]*?)<\/cim:GeneratingUnit.longPF>/g, sub, context, true);
            obj.lowControlLimit = base.parse_element (/<cim:GeneratingUnit.lowControlLimit>([\s\S]*?)<\/cim:GeneratingUnit.lowControlLimit>/g, sub, context, true);
            obj.lowerRampRate = base.parse_element (/<cim:GeneratingUnit.lowerRampRate>([\s\S]*?)<\/cim:GeneratingUnit.lowerRampRate>/g, sub, context, true);
            obj.maxEconomicP = base.parse_element (/<cim:GeneratingUnit.maxEconomicP>([\s\S]*?)<\/cim:GeneratingUnit.maxEconomicP>/g, sub, context, true);
            obj.maxOperatingP = base.parse_element (/<cim:GeneratingUnit.maxOperatingP>([\s\S]*?)<\/cim:GeneratingUnit.maxOperatingP>/g, sub, context, true);
            obj.maximumAllowableSpinningReserve = base.parse_element (/<cim:GeneratingUnit.maximumAllowableSpinningReserve>([\s\S]*?)<\/cim:GeneratingUnit.maximumAllowableSpinningReserve>/g, sub, context, true);
            obj.minEconomicP = base.parse_element (/<cim:GeneratingUnit.minEconomicP>([\s\S]*?)<\/cim:GeneratingUnit.minEconomicP>/g, sub, context, true);
            obj.minOperatingP = base.parse_element (/<cim:GeneratingUnit.minOperatingP>([\s\S]*?)<\/cim:GeneratingUnit.minOperatingP>/g, sub, context, true);
            obj.minimumOffTime = base.parse_element (/<cim:GeneratingUnit.minimumOffTime>([\s\S]*?)<\/cim:GeneratingUnit.minimumOffTime>/g, sub, context, true);
            obj.modelDetail = base.parse_element (/<cim:GeneratingUnit.modelDetail>([\s\S]*?)<\/cim:GeneratingUnit.modelDetail>/g, sub, context, true);
            obj.nominalP = base.parse_element (/<cim:GeneratingUnit.nominalP>([\s\S]*?)<\/cim:GeneratingUnit.nominalP>/g, sub, context, true);
            obj.normalPF = base.parse_element (/<cim:GeneratingUnit.normalPF>([\s\S]*?)<\/cim:GeneratingUnit.normalPF>/g, sub, context, true);
            obj.penaltyFactor = base.parse_element (/<cim:GeneratingUnit.penaltyFactor>([\s\S]*?)<\/cim:GeneratingUnit.penaltyFactor>/g, sub, context, true);
            obj.raiseRampRate = base.parse_element (/<cim:GeneratingUnit.raiseRampRate>([\s\S]*?)<\/cim:GeneratingUnit.raiseRampRate>/g, sub, context, true);
            obj.ratedGrossMaxP = base.parse_element (/<cim:GeneratingUnit.ratedGrossMaxP>([\s\S]*?)<\/cim:GeneratingUnit.ratedGrossMaxP>/g, sub, context, true);
            obj.ratedGrossMinP = base.parse_element (/<cim:GeneratingUnit.ratedGrossMinP>([\s\S]*?)<\/cim:GeneratingUnit.ratedGrossMinP>/g, sub, context, true);
            obj.ratedNetMaxP = base.parse_element (/<cim:GeneratingUnit.ratedNetMaxP>([\s\S]*?)<\/cim:GeneratingUnit.ratedNetMaxP>/g, sub, context, true);
            obj.shortPF = base.parse_element (/<cim:GeneratingUnit.shortPF>([\s\S]*?)<\/cim:GeneratingUnit.shortPF>/g, sub, context, true);
            obj.startupCost = base.parse_element (/<cim:GeneratingUnit.startupCost>([\s\S]*?)<\/cim:GeneratingUnit.startupCost>/g, sub, context, true);
            obj.startupTime = base.parse_element (/<cim:GeneratingUnit.startupTime>([\s\S]*?)<\/cim:GeneratingUnit.startupTime>/g, sub, context, true);
            obj.tieLinePF = base.parse_element (/<cim:GeneratingUnit.tieLinePF>([\s\S]*?)<\/cim:GeneratingUnit.tieLinePF>/g, sub, context, true);
            obj.totalEfficiency = base.parse_element (/<cim:GeneratingUnit.totalEfficiency>([\s\S]*?)<\/cim:GeneratingUnit.totalEfficiency>/g, sub, context, true);
            obj.variableCost = base.parse_element (/<cim:GeneratingUnit.variableCost>([\s\S]*?)<\/cim:GeneratingUnit.variableCost>/g, sub, context, true);
            units = context.parsed.GeneratingUnit;
            if (null == units)
                context.parsed.GeneratingUnit = units = {};
            units[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a SolarGeneratingUnit.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.SolarGeneratingUnit - the list of SolarGeneratingUnit elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/production
         */
        function parse_SolarGeneratingUnit (context, sub)
        {
            var obj;
            var pvs;

            obj = parse_GeneratingUnit (context, sub);
            obj.cls = "SolarGeneratingUnit";
            pvs = context.parsed.SolarGeneratingUnit;
            if (null == pvs)
                context.parsed.SolarGeneratingUnit = pvs = {};
            pvs[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_GeneratingUnit: parse_GeneratingUnit,
                parse_SolarGeneratingUnit: parse_SolarGeneratingUnit
            }
        );
    }
);