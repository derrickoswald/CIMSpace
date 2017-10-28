define
(
    ["model/base"],
    /**
     * Post-market accounting, calculation and meter data corrections to reduce invoicing errors and disputes.
     *
     * Reduces manual validation, verification and correction of transactional data that could affect market settlements. Republishing of market results with affected data corrected.
     *
     */
    function (base)
    {

        /**
         * Models Market clearing results for Auxillary costs
         *
         */
        function parse_AuxiliaryCost (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AuxiliaryCost";
            base.parse_element (/<cim:AuxiliaryCost.intervalStartTime>([\s\S]*?)<\/cim:AuxiliaryCost.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);

            base.parse_element (/<cim:AuxiliaryCost.marketType>([\s\S]*?)<\/cim:AuxiliaryCost.marketType>/g, obj, "marketType", base.to_string, sub, context);

            base.parse_element (/<cim:AuxiliaryCost.updateTimeStamp>([\s\S]*?)<\/cim:AuxiliaryCost.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);

            base.parse_element (/<cim:AuxiliaryCost.updateUser>([\s\S]*?)<\/cim:AuxiliaryCost.updateUser>/g, obj, "updateUser", base.to_string, sub, context);

            bucket = context.parsed.AuxiliaryCost;
            if (null == bucket)
                context.parsed.AuxiliaryCost = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model Expected Energy  from Market Clearing
         *
         */
        function parse_ExpectedEnergyValues (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExpectedEnergyValues";
            base.parse_element (/<cim:ExpectedEnergyValues.energyTypeCode>([\s\S]*?)<\/cim:ExpectedEnergyValues.energyTypeCode>/g, obj, "energyTypeCode", base.to_string, sub, context);

            base.parse_element (/<cim:ExpectedEnergyValues.expectedMwh>([\s\S]*?)<\/cim:ExpectedEnergyValues.expectedMwh>/g, obj, "expectedMwh", base.to_float, sub, context);

            base.parse_attribute (/<cim:ExpectedEnergyValues.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context, true);

            base.parse_attribute (/<cim:ExpectedEnergyValues.ExpectedEnergy\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExpectedEnergy", sub, context, true);

            bucket = context.parsed.ExpectedEnergyValues;
            if (null == bucket)
                context.parsed.ExpectedEnergyValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models Auxillary Values
         *
         */
        function parse_AuxiliaryObject (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AuxiliaryObject";
            base.parse_attribute (/<cim:AuxiliaryObject.RegisteredLoad\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredLoad", sub, context, true);

            base.parse_attribute (/<cim:AuxiliaryObject.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context, true);

            bucket = context.parsed.AuxiliaryObject;
            if (null == bucket)
                context.parsed.AuxiliaryObject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models prices at Trading Hubs
         *
         */
        function parse_TradingHubValues (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TradingHubValues";
            /**
             * Utilizes the Market type.
             *
             * For DA, the price is hourly. For RTM the price is a 5 minute price.
             *
             */
            base.parse_element (/<cim:TradingHubValues.price>([\s\S]*?)<\/cim:TradingHubValues.price>/g, obj, "price", base.to_float, sub, context);

            base.parse_attribute (/<cim:TradingHubValues.TradingHubPrice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TradingHubPrice", sub, context, true);

            base.parse_attribute (/<cim:TradingHubValues.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context, true);

            bucket = context.parsed.TradingHubValues;
            if (null == bucket)
                context.parsed.TradingHubValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models prices at Trading Hubs, interval based
         *
         */
        function parse_TradingHubPrice (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TradingHubPrice";
            base.parse_element (/<cim:TradingHubPrice.intervalStartTime>([\s\S]*?)<\/cim:TradingHubPrice.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);

            base.parse_element (/<cim:TradingHubPrice.marketType>([\s\S]*?)<\/cim:TradingHubPrice.marketType>/g, obj, "marketType", base.to_string, sub, context);

            base.parse_element (/<cim:TradingHubPrice.updateUser>([\s\S]*?)<\/cim:TradingHubPrice.updateUser>/g, obj, "updateUser", base.to_string, sub, context);

            base.parse_element (/<cim:TradingHubPrice.updateTimeStamp>([\s\S]*?)<\/cim:TradingHubPrice.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);

            bucket = context.parsed.TradingHubPrice;
            if (null == bucket)
                context.parsed.TradingHubPrice = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model Expected Energy  from Market Clearing, interval based
         *
         */
        function parse_ExpectedEnergy (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExpectedEnergy";
            base.parse_element (/<cim:ExpectedEnergy.intervalStartTime>([\s\S]*?)<\/cim:ExpectedEnergy.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);

            base.parse_element (/<cim:ExpectedEnergy.updateUser>([\s\S]*?)<\/cim:ExpectedEnergy.updateUser>/g, obj, "updateUser", base.to_string, sub, context);

            base.parse_element (/<cim:ExpectedEnergy.updateTimeStamp>([\s\S]*?)<\/cim:ExpectedEnergy.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);

            bucket = context.parsed.ExpectedEnergy;
            if (null == bucket)
                context.parsed.ExpectedEnergy = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models 10-Minutes Auxillary Data
         *
         */
        function parse_TenMinAuxiliaryData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TenMinAuxiliaryData";
            base.parse_element (/<cim:TenMinAuxiliaryData.intervalStartTime>([\s\S]*?)<\/cim:TenMinAuxiliaryData.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);

            base.parse_element (/<cim:TenMinAuxiliaryData.updateUser>([\s\S]*?)<\/cim:TenMinAuxiliaryData.updateUser>/g, obj, "updateUser", base.to_string, sub, context);

            base.parse_element (/<cim:TenMinAuxiliaryData.updateTimeStamp>([\s\S]*?)<\/cim:TenMinAuxiliaryData.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);

            bucket = context.parsed.TenMinAuxiliaryData;
            if (null == bucket)
                context.parsed.TenMinAuxiliaryData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models Market clearing results.
         *
         * Indicates market horizon, interval based. Used by a market quality system for billing and settlement purposes
         *
         */
        function parse_AllocationResult (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AllocationResult";
            base.parse_element (/<cim:AllocationResult.intervalStartTime>([\s\S]*?)<\/cim:AllocationResult.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);

            base.parse_element (/<cim:AllocationResult.updateUser>([\s\S]*?)<\/cim:AllocationResult.updateUser>/g, obj, "updateUser", base.to_string, sub, context);

            base.parse_element (/<cim:AllocationResult.updateTimeStamp>([\s\S]*?)<\/cim:AllocationResult.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);

            bucket = context.parsed.AllocationResult;
            if (null == bucket)
                context.parsed.AllocationResult = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models Market clearing results in terms of price and MW values
         *
         */
        function parse_AllocationResultValues (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AllocationResultValues";
            /**
             * "1" --  "Detail",
             * "2" --  "Aggregate by Market service type", in which case, the "AllocationEnergyType" field will not be filled;
             *
             * "3" --  "Aggregate by "AllocationEnergyType", in which case "MarketServiceType" will not be filled.
             *
             */
            base.parse_element (/<cim:AllocationResultValues.aggregateType>([\s\S]*?)<\/cim:AllocationResultValues.aggregateType>/g, obj, "aggregateType", base.to_string, sub, context);

            base.parse_element (/<cim:AllocationResultValues.allocationMwHour>([\s\S]*?)<\/cim:AllocationResultValues.allocationMwHour>/g, obj, "allocationMwHour", base.to_float, sub, context);

            base.parse_element (/<cim:AllocationResultValues.allocationPrice>([\s\S]*?)<\/cim:AllocationResultValues.allocationPrice>/g, obj, "allocationPrice", base.to_float, sub, context);

            base.parse_element (/<cim:AllocationResultValues.energyTypeCode>([\s\S]*?)<\/cim:AllocationResultValues.energyTypeCode>/g, obj, "energyTypeCode", base.to_string, sub, context);

            /**
             * Choices are:
             * ME - Market Energy Capacity;
             * SR - Spinning Reserve Capacity;
             * NR - Non-Spinning Reserve Capacity;
             * DAC - Day Ahead Capacity;
             *
             * DEC - Derate Capacity
             *
             */
            base.parse_element (/<cim:AllocationResultValues.marketServiceType>([\s\S]*?)<\/cim:AllocationResultValues.marketServiceType>/g, obj, "marketServiceType", base.to_string, sub, context);

            base.parse_attribute (/<cim:AllocationResultValues.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context, true);

            base.parse_attribute (/<cim:AllocationResultValues.AllocationResult\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AllocationResult", sub, context, true);

            bucket = context.parsed.AllocationResultValues;
            if (null == bucket)
                context.parsed.AllocationResultValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models 5-Minutes Auxillary Data
         *
         */
        function parse_FiveMinAuxiliaryData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FiveMinAuxiliaryData";
            base.parse_element (/<cim:FiveMinAuxiliaryData.intervalStartTime>([\s\S]*?)<\/cim:FiveMinAuxiliaryData.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);

            base.parse_element (/<cim:FiveMinAuxiliaryData.updateUser>([\s\S]*?)<\/cim:FiveMinAuxiliaryData.updateUser>/g, obj, "updateUser", base.to_string, sub, context);

            base.parse_element (/<cim:FiveMinAuxiliaryData.updateTimeStamp>([\s\S]*?)<\/cim:FiveMinAuxiliaryData.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);

            bucket = context.parsed.FiveMinAuxiliaryData;
            if (null == bucket)
                context.parsed.FiveMinAuxiliaryData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models Auxillary Values
         *
         */
        function parse_AuxiliaryValues (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AuxiliaryObject (context, sub);
            obj.cls = "AuxiliaryValues";
            base.parse_element (/<cim:AuxiliaryValues.minExpostCapacity>([\s\S]*?)<\/cim:AuxiliaryValues.minExpostCapacity>/g, obj, "minExpostCapacity", base.to_float, sub, context);

            base.parse_element (/<cim:AuxiliaryValues.maxExpostCapacity>([\s\S]*?)<\/cim:AuxiliaryValues.maxExpostCapacity>/g, obj, "maxExpostCapacity", base.to_float, sub, context);

            base.parse_element (/<cim:AuxiliaryValues.availUndispatchedQ>([\s\S]*?)<\/cim:AuxiliaryValues.availUndispatchedQ>/g, obj, "availUndispatchedQ", base.to_float, sub, context);

            base.parse_element (/<cim:AuxiliaryValues.incrementalORAvail>([\s\S]*?)<\/cim:AuxiliaryValues.incrementalORAvail>/g, obj, "incrementalORAvail", base.to_float, sub, context);

            base.parse_element (/<cim:AuxiliaryValues.startUpCost>([\s\S]*?)<\/cim:AuxiliaryValues.startUpCost>/g, obj, "startUpCost", base.to_float, sub, context);

            base.parse_element (/<cim:AuxiliaryValues.startUpCostEligibilityFlag>([\s\S]*?)<\/cim:AuxiliaryValues.startUpCostEligibilityFlag>/g, obj, "startUpCostEligibilityFlag", base.to_string, sub, context);

            base.parse_element (/<cim:AuxiliaryValues.noLoadCost>([\s\S]*?)<\/cim:AuxiliaryValues.noLoadCost>/g, obj, "noLoadCost", base.to_float, sub, context);

            base.parse_element (/<cim:AuxiliaryValues.noLoadCostEligibilityFlag>([\s\S]*?)<\/cim:AuxiliaryValues.noLoadCostEligibilityFlag>/g, obj, "noLoadCostEligibilityFlag", base.to_string, sub, context);

            base.parse_attribute (/<cim:AuxiliaryValues.AuxillaryCost\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AuxillaryCost", sub, context, true);

            base.parse_attribute (/<cim:AuxiliaryValues.FiveMinAuxillaryData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FiveMinAuxillaryData", sub, context, true);

            base.parse_attribute (/<cim:AuxiliaryValues.TenMinAuxillaryData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TenMinAuxillaryData", sub, context, true);

            bucket = context.parsed.AuxiliaryValues;
            if (null == bucket)
                context.parsed.AuxiliaryValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ExpectedEnergy: parse_ExpectedEnergy,
                parse_TradingHubPrice: parse_TradingHubPrice,
                parse_TenMinAuxiliaryData: parse_TenMinAuxiliaryData,
                parse_AllocationResultValues: parse_AllocationResultValues,
                parse_AllocationResult: parse_AllocationResult,
                parse_AuxiliaryCost: parse_AuxiliaryCost,
                parse_AuxiliaryObject: parse_AuxiliaryObject,
                parse_ExpectedEnergyValues: parse_ExpectedEnergyValues,
                parse_AuxiliaryValues: parse_AuxiliaryValues,
                parse_TradingHubValues: parse_TradingHubValues,
                parse_FiveMinAuxiliaryData: parse_FiveMinAuxiliaryData
            }
        );
    }
);