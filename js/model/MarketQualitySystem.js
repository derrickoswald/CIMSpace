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

        function export_AuxiliaryCost (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AuxiliaryCost", "intervalStartTime", base.from_datetime, fields);
            base.export_element (obj, "AuxiliaryCost", "marketType", base.from_string, fields);
            base.export_element (obj, "AuxiliaryCost", "updateTimeStamp", base.from_datetime, fields);
            base.export_element (obj, "AuxiliaryCost", "updateUser", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_attribute (/<cim:ExpectedEnergyValues.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
            base.parse_attribute (/<cim:ExpectedEnergyValues.ExpectedEnergy\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExpectedEnergy", sub, context);
            bucket = context.parsed.ExpectedEnergyValues;
            if (null == bucket)
                context.parsed.ExpectedEnergyValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExpectedEnergyValues (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ExpectedEnergyValues", "energyTypeCode", base.from_string, fields);
            base.export_element (obj, "ExpectedEnergyValues", "expectedMwh", base.from_float, fields);
            base.export_attribute (obj, "ExpectedEnergyValues", "RegisteredResource", fields);
            base.export_attribute (obj, "ExpectedEnergyValues", "ExpectedEnergy", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_attribute (/<cim:AuxiliaryObject.RegisteredLoad\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredLoad", sub, context);
            base.parse_attribute (/<cim:AuxiliaryObject.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
            bucket = context.parsed.AuxiliaryObject;
            if (null == bucket)
                context.parsed.AuxiliaryObject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AuxiliaryObject (obj, exporters, full)
        {
            var fields = [];

            base.export_attribute (obj, "AuxiliaryObject", "RegisteredLoad", fields);
            base.export_attribute (obj, "AuxiliaryObject", "RegisteredGenerator", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:TradingHubValues.price>([\s\S]*?)<\/cim:TradingHubValues.price>/g, obj, "price", base.to_float, sub, context);
            base.parse_attribute (/<cim:TradingHubValues.TradingHubPrice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TradingHubPrice", sub, context);
            base.parse_attribute (/<cim:TradingHubValues.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);
            bucket = context.parsed.TradingHubValues;
            if (null == bucket)
                context.parsed.TradingHubValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TradingHubValues (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TradingHubValues", "price", base.from_float, fields);
            base.export_attribute (obj, "TradingHubValues", "TradingHubPrice", fields);
            base.export_attribute (obj, "TradingHubValues", "AggregatedPnode", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_TradingHubPrice (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TradingHubPrice", "intervalStartTime", base.from_datetime, fields);
            base.export_element (obj, "TradingHubPrice", "marketType", base.from_string, fields);
            base.export_element (obj, "TradingHubPrice", "updateUser", base.from_string, fields);
            base.export_element (obj, "TradingHubPrice", "updateTimeStamp", base.from_datetime, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_ExpectedEnergy (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ExpectedEnergy", "intervalStartTime", base.from_datetime, fields);
            base.export_element (obj, "ExpectedEnergy", "updateUser", base.from_string, fields);
            base.export_element (obj, "ExpectedEnergy", "updateTimeStamp", base.from_datetime, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_TenMinAuxiliaryData (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TenMinAuxiliaryData", "intervalStartTime", base.from_datetime, fields);
            base.export_element (obj, "TenMinAuxiliaryData", "updateUser", base.from_string, fields);
            base.export_element (obj, "TenMinAuxiliaryData", "updateTimeStamp", base.from_datetime, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_AllocationResult (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AllocationResult", "intervalStartTime", base.from_datetime, fields);
            base.export_element (obj, "AllocationResult", "updateUser", base.from_string, fields);
            base.export_element (obj, "AllocationResult", "updateTimeStamp", base.from_datetime, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_element (/<cim:AllocationResultValues.aggregateType>([\s\S]*?)<\/cim:AllocationResultValues.aggregateType>/g, obj, "aggregateType", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationResultValues.allocationMwHour>([\s\S]*?)<\/cim:AllocationResultValues.allocationMwHour>/g, obj, "allocationMwHour", base.to_float, sub, context);
            base.parse_element (/<cim:AllocationResultValues.allocationPrice>([\s\S]*?)<\/cim:AllocationResultValues.allocationPrice>/g, obj, "allocationPrice", base.to_float, sub, context);
            base.parse_element (/<cim:AllocationResultValues.energyTypeCode>([\s\S]*?)<\/cim:AllocationResultValues.energyTypeCode>/g, obj, "energyTypeCode", base.to_string, sub, context);
            base.parse_element (/<cim:AllocationResultValues.marketServiceType>([\s\S]*?)<\/cim:AllocationResultValues.marketServiceType>/g, obj, "marketServiceType", base.to_string, sub, context);
            base.parse_attribute (/<cim:AllocationResultValues.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
            base.parse_attribute (/<cim:AllocationResultValues.AllocationResult\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AllocationResult", sub, context);
            bucket = context.parsed.AllocationResultValues;
            if (null == bucket)
                context.parsed.AllocationResultValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AllocationResultValues (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AllocationResultValues", "aggregateType", base.from_string, fields);
            base.export_element (obj, "AllocationResultValues", "allocationMwHour", base.from_float, fields);
            base.export_element (obj, "AllocationResultValues", "allocationPrice", base.from_float, fields);
            base.export_element (obj, "AllocationResultValues", "energyTypeCode", base.from_string, fields);
            base.export_element (obj, "AllocationResultValues", "marketServiceType", base.from_string, fields);
            base.export_attribute (obj, "AllocationResultValues", "RegisteredResource", fields);
            base.export_attribute (obj, "AllocationResultValues", "AllocationResult", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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

        function export_FiveMinAuxiliaryData (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "FiveMinAuxiliaryData", "intervalStartTime", base.from_datetime, fields);
            base.export_element (obj, "FiveMinAuxiliaryData", "updateUser", base.from_string, fields);
            base.export_element (obj, "FiveMinAuxiliaryData", "updateTimeStamp", base.from_datetime, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
            base.parse_attribute (/<cim:AuxiliaryValues.AuxillaryCost\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AuxillaryCost", sub, context);
            base.parse_attribute (/<cim:AuxiliaryValues.FiveMinAuxillaryData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FiveMinAuxillaryData", sub, context);
            base.parse_attribute (/<cim:AuxiliaryValues.TenMinAuxillaryData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TenMinAuxillaryData", sub, context);
            bucket = context.parsed.AuxiliaryValues;
            if (null == bucket)
                context.parsed.AuxiliaryValues = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AuxiliaryValues (obj, exporters, full)
        {
            var fields = exporters["AuxiliaryObject"](obj, exporters, false);

            base.export_element (obj, "AuxiliaryValues", "minExpostCapacity", base.from_float, fields);
            base.export_element (obj, "AuxiliaryValues", "maxExpostCapacity", base.from_float, fields);
            base.export_element (obj, "AuxiliaryValues", "availUndispatchedQ", base.from_float, fields);
            base.export_element (obj, "AuxiliaryValues", "incrementalORAvail", base.from_float, fields);
            base.export_element (obj, "AuxiliaryValues", "startUpCost", base.from_float, fields);
            base.export_element (obj, "AuxiliaryValues", "startUpCostEligibilityFlag", base.from_string, fields);
            base.export_element (obj, "AuxiliaryValues", "noLoadCost", base.from_float, fields);
            base.export_element (obj, "AuxiliaryValues", "noLoadCostEligibilityFlag", base.from_string, fields);
            base.export_attribute (obj, "AuxiliaryValues", "AuxillaryCost", fields);
            base.export_attribute (obj, "AuxiliaryValues", "FiveMinAuxillaryData", fields);
            base.export_attribute (obj, "AuxiliaryValues", "TenMinAuxillaryData", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_FiveMinAuxiliaryData: parse_FiveMinAuxiliaryData,
                parse_AllocationResultValues: parse_AllocationResultValues,
                export_ExpectedEnergy: export_ExpectedEnergy,
                parse_TenMinAuxiliaryData: parse_TenMinAuxiliaryData,
                export_AuxiliaryObject: export_AuxiliaryObject,
                parse_AllocationResult: parse_AllocationResult,
                export_AllocationResultValues: export_AllocationResultValues,
                export_AllocationResult: export_AllocationResult,
                parse_AuxiliaryObject: parse_AuxiliaryObject,
                export_TradingHubPrice: export_TradingHubPrice,
                export_FiveMinAuxiliaryData: export_FiveMinAuxiliaryData,
                parse_AuxiliaryValues: parse_AuxiliaryValues,
                parse_TradingHubValues: parse_TradingHubValues,
                export_TenMinAuxiliaryData: export_TenMinAuxiliaryData,
                parse_TradingHubPrice: parse_TradingHubPrice,
                parse_AuxiliaryCost: parse_AuxiliaryCost,
                export_AuxiliaryValues: export_AuxiliaryValues,
                parse_ExpectedEnergyValues: parse_ExpectedEnergyValues,
                export_ExpectedEnergyValues: export_ExpectedEnergyValues,
                export_AuxiliaryCost: export_AuxiliaryCost,
                export_TradingHubValues: export_TradingHubValues,
                parse_ExpectedEnergy: parse_ExpectedEnergy
            }
        );
    }
);