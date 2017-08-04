define
(
    ["model/base"],
    /**
     * Post-market accounting, calculation and meter data corrections to reduce invoicing errors and disputes.
     * Reduces manual validation, verification and correction of transactional data that could affect market settlements. Republishing of market results with affected data corrected.
     */
    function (base)
    {

        /**
         * Models Market clearing results for Auxillary costs
         */
        function parse_AuxiliaryCost (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AuxiliaryCost";
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:AuxiliaryCost.intervalStartTime>([\s\S]*?)<\/cim:AuxiliaryCost.intervalStartTime>/g, sub, context, true));
            obj["marketType"] = base.parse_element (/<cim:AuxiliaryCost.marketType>([\s\S]*?)<\/cim:AuxiliaryCost.marketType>/g, sub, context, true);
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:AuxiliaryCost.updateTimeStamp>([\s\S]*?)<\/cim:AuxiliaryCost.updateTimeStamp>/g, sub, context, true));
            obj["updateUser"] = base.parse_element (/<cim:AuxiliaryCost.updateUser>([\s\S]*?)<\/cim:AuxiliaryCost.updateUser>/g, sub, context, true);
            bucket = context.parsed.AuxiliaryCost;
            if (null == bucket)
                context.parsed.AuxiliaryCost = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model Expected Energy  from Market Clearing
         */
        function parse_ExpectedEnergyValues (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExpectedEnergyValues";
            obj["energyTypeCode"] = base.parse_element (/<cim:ExpectedEnergyValues.energyTypeCode>([\s\S]*?)<\/cim:ExpectedEnergyValues.energyTypeCode>/g, sub, context, true);
            obj["expectedMwh"] = base.to_float (base.parse_element (/<cim:ExpectedEnergyValues.expectedMwh>([\s\S]*?)<\/cim:ExpectedEnergyValues.expectedMwh>/g, sub, context, true));
            obj["RegisteredResource"] = base.parse_attribute (/<cim:ExpectedEnergyValues.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["ExpectedEnergy"] = base.parse_attribute (/<cim:ExpectedEnergyValues.ExpectedEnergy\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ExpectedEnergyValues;
            if (null == bucket)
                context.parsed.ExpectedEnergyValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models Auxillary Values
         */
        function parse_AuxiliaryObject (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AuxiliaryObject";
            obj["RegisteredLoad"] = base.parse_attribute (/<cim:AuxiliaryObject.RegisteredLoad\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:AuxiliaryObject.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AuxiliaryObject;
            if (null == bucket)
                context.parsed.AuxiliaryObject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models prices at Trading Hubs
         */
        function parse_TradingHubValues (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TradingHubValues";
            /**
             * Utilizes the Market type.
             * For DA, the price is hourly. For RTM the price is a 5 minute price.
             */
            obj["price"] = base.to_float (base.parse_element (/<cim:TradingHubValues.price>([\s\S]*?)<\/cim:TradingHubValues.price>/g, sub, context, true));
            obj["TradingHubPrice"] = base.parse_attribute (/<cim:TradingHubValues.TradingHubPrice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["AggregatedPnode"] = base.parse_attribute (/<cim:TradingHubValues.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TradingHubValues;
            if (null == bucket)
                context.parsed.TradingHubValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models prices at Trading Hubs, interval based
         */
        function parse_TradingHubPrice (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TradingHubPrice";
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:TradingHubPrice.intervalStartTime>([\s\S]*?)<\/cim:TradingHubPrice.intervalStartTime>/g, sub, context, true));
            obj["marketType"] = base.parse_element (/<cim:TradingHubPrice.marketType>([\s\S]*?)<\/cim:TradingHubPrice.marketType>/g, sub, context, true);
            obj["updateUser"] = base.parse_element (/<cim:TradingHubPrice.updateUser>([\s\S]*?)<\/cim:TradingHubPrice.updateUser>/g, sub, context, true);
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:TradingHubPrice.updateTimeStamp>([\s\S]*?)<\/cim:TradingHubPrice.updateTimeStamp>/g, sub, context, true));
            bucket = context.parsed.TradingHubPrice;
            if (null == bucket)
                context.parsed.TradingHubPrice = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model Expected Energy  from Market Clearing, interval based
         */
        function parse_ExpectedEnergy (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExpectedEnergy";
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:ExpectedEnergy.intervalStartTime>([\s\S]*?)<\/cim:ExpectedEnergy.intervalStartTime>/g, sub, context, true));
            obj["updateUser"] = base.parse_element (/<cim:ExpectedEnergy.updateUser>([\s\S]*?)<\/cim:ExpectedEnergy.updateUser>/g, sub, context, true);
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:ExpectedEnergy.updateTimeStamp>([\s\S]*?)<\/cim:ExpectedEnergy.updateTimeStamp>/g, sub, context, true));
            bucket = context.parsed.ExpectedEnergy;
            if (null == bucket)
                context.parsed.ExpectedEnergy = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models 10-Minutes Auxillary Data
         */
        function parse_TenMinAuxiliaryData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TenMinAuxiliaryData";
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:TenMinAuxiliaryData.intervalStartTime>([\s\S]*?)<\/cim:TenMinAuxiliaryData.intervalStartTime>/g, sub, context, true));
            obj["updateUser"] = base.parse_element (/<cim:TenMinAuxiliaryData.updateUser>([\s\S]*?)<\/cim:TenMinAuxiliaryData.updateUser>/g, sub, context, true);
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:TenMinAuxiliaryData.updateTimeStamp>([\s\S]*?)<\/cim:TenMinAuxiliaryData.updateTimeStamp>/g, sub, context, true));
            bucket = context.parsed.TenMinAuxiliaryData;
            if (null == bucket)
                context.parsed.TenMinAuxiliaryData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models Market clearing results.
         * Indicates market horizon, interval based. Used by a market quality system for billing and settlement purposes
         */
        function parse_AllocationResult (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AllocationResult";
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:AllocationResult.intervalStartTime>([\s\S]*?)<\/cim:AllocationResult.intervalStartTime>/g, sub, context, true));
            obj["updateUser"] = base.parse_element (/<cim:AllocationResult.updateUser>([\s\S]*?)<\/cim:AllocationResult.updateUser>/g, sub, context, true);
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:AllocationResult.updateTimeStamp>([\s\S]*?)<\/cim:AllocationResult.updateTimeStamp>/g, sub, context, true));
            bucket = context.parsed.AllocationResult;
            if (null == bucket)
                context.parsed.AllocationResult = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models Market clearing results in terms of price and MW values
         */
        function parse_AllocationResultValues (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AllocationResultValues";
            /**
             * "1" --  "Detail",
            "2" --  "Aggregate by Market service type", in which case, the "AllocationEnergyType" field will not be filled;
             * "3" --  "Aggregate by "AllocationEnergyType", in which case "MarketServiceType" will not be filled.
             */
            obj["aggregateType"] = base.parse_element (/<cim:AllocationResultValues.aggregateType>([\s\S]*?)<\/cim:AllocationResultValues.aggregateType>/g, sub, context, true);
            obj["allocationMwHour"] = base.to_float (base.parse_element (/<cim:AllocationResultValues.allocationMwHour>([\s\S]*?)<\/cim:AllocationResultValues.allocationMwHour>/g, sub, context, true));
            obj["allocationPrice"] = base.to_float (base.parse_element (/<cim:AllocationResultValues.allocationPrice>([\s\S]*?)<\/cim:AllocationResultValues.allocationPrice>/g, sub, context, true));
            obj["energyTypeCode"] = base.parse_element (/<cim:AllocationResultValues.energyTypeCode>([\s\S]*?)<\/cim:AllocationResultValues.energyTypeCode>/g, sub, context, true);
            /**
             * Choices are: 
            ME - Market Energy Capacity; 
            SR - Spinning Reserve Capacity; 
            NR - Non-Spinning Reserve Capacity; 
            DAC - Day Ahead Capacity;
             * DEC - Derate Capacity
             */
            obj["marketServiceType"] = base.parse_element (/<cim:AllocationResultValues.marketServiceType>([\s\S]*?)<\/cim:AllocationResultValues.marketServiceType>/g, sub, context, true);
            obj["RegisteredResource"] = base.parse_attribute (/<cim:AllocationResultValues.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["AllocationResult"] = base.parse_attribute (/<cim:AllocationResultValues.AllocationResult\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AllocationResultValues;
            if (null == bucket)
                context.parsed.AllocationResultValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models 5-Minutes Auxillary Data
         */
        function parse_FiveMinAuxiliaryData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FiveMinAuxiliaryData";
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:FiveMinAuxiliaryData.intervalStartTime>([\s\S]*?)<\/cim:FiveMinAuxiliaryData.intervalStartTime>/g, sub, context, true));
            obj["updateUser"] = base.parse_element (/<cim:FiveMinAuxiliaryData.updateUser>([\s\S]*?)<\/cim:FiveMinAuxiliaryData.updateUser>/g, sub, context, true);
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:FiveMinAuxiliaryData.updateTimeStamp>([\s\S]*?)<\/cim:FiveMinAuxiliaryData.updateTimeStamp>/g, sub, context, true));
            bucket = context.parsed.FiveMinAuxiliaryData;
            if (null == bucket)
                context.parsed.FiveMinAuxiliaryData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models Auxillary Values
         */
        function parse_AuxiliaryValues (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AuxiliaryObject (context, sub);
            obj.cls = "AuxiliaryValues";
            obj["minExpostCapacity"] = base.to_float (base.parse_element (/<cim:AuxiliaryValues.minExpostCapacity>([\s\S]*?)<\/cim:AuxiliaryValues.minExpostCapacity>/g, sub, context, true));
            obj["maxExpostCapacity"] = base.to_float (base.parse_element (/<cim:AuxiliaryValues.maxExpostCapacity>([\s\S]*?)<\/cim:AuxiliaryValues.maxExpostCapacity>/g, sub, context, true));
            obj["availUndispatchedQ"] = base.to_float (base.parse_element (/<cim:AuxiliaryValues.availUndispatchedQ>([\s\S]*?)<\/cim:AuxiliaryValues.availUndispatchedQ>/g, sub, context, true));
            obj["incrementalORAvail"] = base.to_float (base.parse_element (/<cim:AuxiliaryValues.incrementalORAvail>([\s\S]*?)<\/cim:AuxiliaryValues.incrementalORAvail>/g, sub, context, true));
            obj["startUpCost"] = base.to_float (base.parse_element (/<cim:AuxiliaryValues.startUpCost>([\s\S]*?)<\/cim:AuxiliaryValues.startUpCost>/g, sub, context, true));
            obj["startUpCostEligibilityFlag"] = base.parse_element (/<cim:AuxiliaryValues.startUpCostEligibilityFlag>([\s\S]*?)<\/cim:AuxiliaryValues.startUpCostEligibilityFlag>/g, sub, context, true);
            obj["noLoadCost"] = base.to_float (base.parse_element (/<cim:AuxiliaryValues.noLoadCost>([\s\S]*?)<\/cim:AuxiliaryValues.noLoadCost>/g, sub, context, true));
            obj["noLoadCostEligibilityFlag"] = base.parse_element (/<cim:AuxiliaryValues.noLoadCostEligibilityFlag>([\s\S]*?)<\/cim:AuxiliaryValues.noLoadCostEligibilityFlag>/g, sub, context, true);
            obj["AuxillaryCost"] = base.parse_attribute (/<cim:AuxiliaryValues.AuxillaryCost\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["FiveMinAuxillaryData"] = base.parse_attribute (/<cim:AuxiliaryValues.FiveMinAuxillaryData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["TenMinAuxillaryData"] = base.parse_attribute (/<cim:AuxiliaryValues.TenMinAuxillaryData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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