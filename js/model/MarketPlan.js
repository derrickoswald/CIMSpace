define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * Market plan definitions for planned markets, planned market events, actual market runs, actual market events.
     *
     */
    function (base, Common, Core)
    {

        /**
         * A product traded by an RTO (e.g. energy, 10 minute spinning reserve).
         *
         * Ancillary service product examples include:Regulation UpRegulation DnSpinning ReserveNon-Spinning ReserveOperating Reserve
         *
         */
        function parse_MarketProduct (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MarketProduct";
            base.parse_element (/<cim:MarketProduct.marketProductType>([\s\S]*?)<\/cim:MarketProduct.marketProductType>/g, obj, "marketProductType", base.to_string, sub, context);
            base.parse_element (/<cim:MarketProduct.rampInterval>([\s\S]*?)<\/cim:MarketProduct.rampInterval>/g, obj, "rampInterval", base.to_float, sub, context);
            base.parse_attribute (/<cim:MarketProduct.MarketRegionResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRegionResults", sub, context);
            base.parse_attribute (/<cim:MarketProduct.Market\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Market", sub, context);
            bucket = context.parsed.MarketProduct;
            if (null == bucket)
                context.parsed.MarketProduct = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketProduct (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "MarketProduct", "marketProductType", base.from_string, fields);
            base.export_element (obj, "MarketProduct", "rampInterval", base.from_float, fields);
            base.export_attribute (obj, "MarketProduct", "MarketRegionResults", fields);
            base.export_attribute (obj, "MarketProduct", "Market", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class represents planned events.
         *
         * Used to model the various planned events in a market (closing time, clearing time, etc).
         *
         */
        function parse_PlannedMarketEvent (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PlannedMarketEvent";
            base.parse_element (/<cim:PlannedMarketEvent.description>([\s\S]*?)<\/cim:PlannedMarketEvent.description>/g, obj, "description", base.to_string, sub, context);
            base.parse_element (/<cim:PlannedMarketEvent.eventType>([\s\S]*?)<\/cim:PlannedMarketEvent.eventType>/g, obj, "eventType", base.to_string, sub, context);
            base.parse_element (/<cim:PlannedMarketEvent.plannedEventID>([\s\S]*?)<\/cim:PlannedMarketEvent.plannedEventID>/g, obj, "plannedEventID", base.to_string, sub, context);
            base.parse_element (/<cim:PlannedMarketEvent.plannedTime>([\s\S]*?)<\/cim:PlannedMarketEvent.plannedTime>/g, obj, "plannedTime", base.to_string, sub, context);
            bucket = context.parsed.PlannedMarketEvent;
            if (null == bucket)
                context.parsed.PlannedMarketEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PlannedMarketEvent (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PlannedMarketEvent", "description", base.from_string, fields);
            base.export_element (obj, "PlannedMarketEvent", "eventType", base.from_string, fields);
            base.export_element (obj, "PlannedMarketEvent", "plannedEventID", base.from_string, fields);
            base.export_element (obj, "PlannedMarketEvent", "plannedTime", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class identifies a set of planned markets.
         *
         * This class is a container of these planned markets
         *
         */
        function parse_MarketPlan (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketPlan";
            base.parse_element (/<cim:MarketPlan.description>([\s\S]*?)<\/cim:MarketPlan.description>/g, obj, "description", base.to_string, sub, context);
            base.parse_element (/<cim:MarketPlan.marketPlanID>([\s\S]*?)<\/cim:MarketPlan.marketPlanID>/g, obj, "marketPlanID", base.to_string, sub, context);
            base.parse_element (/<cim:MarketPlan.name>([\s\S]*?)<\/cim:MarketPlan.name>/g, obj, "name", base.to_string, sub, context);
            base.parse_element (/<cim:MarketPlan.tradingDay>([\s\S]*?)<\/cim:MarketPlan.tradingDay>/g, obj, "tradingDay", base.to_datetime, sub, context);
            bucket = context.parsed.MarketPlan;
            if (null == bucket)
                context.parsed.MarketPlan = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketPlan (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MarketPlan", "description", base.from_string, fields);
            base.export_element (obj, "MarketPlan", "marketPlanID", base.from_string, fields);
            base.export_element (obj, "MarketPlan", "name", base.from_string, fields);
            base.export_element (obj, "MarketPlan", "tradingDay", base.from_datetime, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Aggregation of market information relative for a specific time interval.
         *
         */
        function parse_MarketFactors (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "MarketFactors";
            base.parse_element (/<cim:MarketFactors.intervalEndTime>([\s\S]*?)<\/cim:MarketFactors.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:MarketFactors.intervalStartTime>([\s\S]*?)<\/cim:MarketFactors.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
            base.parse_attribute (/<cim:MarketFactors.Market\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Market", sub, context);
            bucket = context.parsed.MarketFactors;
            if (null == bucket)
                context.parsed.MarketFactors = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketFactors (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "MarketFactors", "intervalEndTime", base.from_datetime, fields);
            base.export_element (obj, "MarketFactors", "intervalStartTime", base.from_datetime, fields);
            base.export_attribute (obj, "MarketFactors", "Market", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Market (e.g.
         *
         * Day Ahead Market, RealTime Market) with a description of the the Market operation control parameters.
         *
         */
        function parse_Market (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Market";
            base.parse_element (/<cim:Market.actualEnd>([\s\S]*?)<\/cim:Market.actualEnd>/g, obj, "actualEnd", base.to_datetime, sub, context);
            base.parse_element (/<cim:Market.actualStart>([\s\S]*?)<\/cim:Market.actualStart>/g, obj, "actualStart", base.to_datetime, sub, context);
            base.parse_element (/<cim:Market.dst>([\s\S]*?)<\/cim:Market.dst>/g, obj, "dst", base.to_boolean, sub, context);
            base.parse_element (/<cim:Market.end>([\s\S]*?)<\/cim:Market.end>/g, obj, "end", base.to_datetime, sub, context);
            base.parse_element (/<cim:Market.localTimeZone>([\s\S]*?)<\/cim:Market.localTimeZone>/g, obj, "localTimeZone", base.to_string, sub, context);
            base.parse_element (/<cim:Market.start>([\s\S]*?)<\/cim:Market.start>/g, obj, "start", base.to_datetime, sub, context);
            base.parse_element (/<cim:Market.status>([\s\S]*?)<\/cim:Market.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:Market.timeIntervalLength>([\s\S]*?)<\/cim:Market.timeIntervalLength>/g, obj, "timeIntervalLength", base.to_float, sub, context);
            base.parse_element (/<cim:Market.tradingDay>([\s\S]*?)<\/cim:Market.tradingDay>/g, obj, "tradingDay", base.to_datetime, sub, context);
            base.parse_element (/<cim:Market.tradingPeriod>([\s\S]*?)<\/cim:Market.tradingPeriod>/g, obj, "tradingPeriod", base.to_string, sub, context);
            bucket = context.parsed.Market;
            if (null == bucket)
                context.parsed.Market = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Market (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Market", "actualEnd", base.from_datetime, fields);
            base.export_element (obj, "Market", "actualStart", base.from_datetime, fields);
            base.export_element (obj, "Market", "dst", base.from_boolean, fields);
            base.export_element (obj, "Market", "end", base.from_datetime, fields);
            base.export_element (obj, "Market", "localTimeZone", base.from_string, fields);
            base.export_element (obj, "Market", "start", base.from_datetime, fields);
            base.export_element (obj, "Market", "status", base.from_string, fields);
            base.export_element (obj, "Market", "timeIntervalLength", base.from_float, fields);
            base.export_element (obj, "Market", "tradingDay", base.from_datetime, fields);
            base.export_element (obj, "Market", "tradingPeriod", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Energy and Ancillary Market (e.g.
         *
         * Energy, Spinning Reserve, Non-Spinning Reserve) with a description of the Market operation control parameters.
         *
         */
        function parse_EnergyMarket (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Market (context, sub);
            obj.cls = "EnergyMarket";
            base.parse_attribute (/<cim:EnergyMarket.MarketResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketResults", sub, context);
            base.parse_attribute (/<cim:EnergyMarket.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
            bucket = context.parsed.EnergyMarket;
            if (null == bucket)
                context.parsed.EnergyMarket = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnergyMarket (obj, exporters, full)
        {
            var fields = exporters["Market"](obj, exporters, false);

            base.export_attribute (obj, "EnergyMarket", "MarketResults", fields);
            base.export_attribute (obj, "EnergyMarket", "RTO", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class represent the actual instance of an event.
         *
         */
        function parse_MarketActualEvent (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketActualEvent";
            base.parse_element (/<cim:MarketActualEvent.description>([\s\S]*?)<\/cim:MarketActualEvent.description>/g, obj, "description", base.to_string, sub, context);
            base.parse_element (/<cim:MarketActualEvent.eventID>([\s\S]*?)<\/cim:MarketActualEvent.eventID>/g, obj, "eventID", base.to_string, sub, context);
            base.parse_element (/<cim:MarketActualEvent.eventTime>([\s\S]*?)<\/cim:MarketActualEvent.eventTime>/g, obj, "eventTime", base.to_datetime, sub, context);
            base.parse_attribute (/<cim:MarketActualEvent.PlannedMarketEvent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedMarketEvent", sub, context);
            base.parse_attribute (/<cim:MarketActualEvent.MarketRun\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRun", sub, context);
            bucket = context.parsed.MarketActualEvent;
            if (null == bucket)
                context.parsed.MarketActualEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketActualEvent (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MarketActualEvent", "description", base.from_string, fields);
            base.export_element (obj, "MarketActualEvent", "eventID", base.from_string, fields);
            base.export_element (obj, "MarketActualEvent", "eventTime", base.from_datetime, fields);
            base.export_attribute (obj, "MarketActualEvent", "PlannedMarketEvent", fields);
            base.export_attribute (obj, "MarketActualEvent", "MarketRun", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Model that describes the Congestion Revenue Rights Auction Market
         *
         */
        function parse_CRRMarket (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Market (context, sub);
            obj.cls = "CRRMarket";
            base.parse_element (/<cim:CRRMarket.labelID>([\s\S]*?)<\/cim:CRRMarket.labelID>/g, obj, "labelID", base.to_string, sub, context);
            bucket = context.parsed.CRRMarket;
            if (null == bucket)
                context.parsed.CRRMarket = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CRRMarket (obj, exporters, full)
        {
            var fields = exporters["Market"](obj, exporters, false);

            base.export_element (obj, "CRRMarket", "labelID", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Represent a planned market.
         *
         * For example an planned DA/HA/RT market.
         *
         */
        function parse_PlannedMarket (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PlannedMarket";
            base.parse_element (/<cim:PlannedMarket.marketEndTime>([\s\S]*?)<\/cim:PlannedMarket.marketEndTime>/g, obj, "marketEndTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:PlannedMarket.marketID>([\s\S]*?)<\/cim:PlannedMarket.marketID>/g, obj, "marketID", base.to_string, sub, context);
            base.parse_element (/<cim:PlannedMarket.marketStartTime>([\s\S]*?)<\/cim:PlannedMarket.marketStartTime>/g, obj, "marketStartTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:PlannedMarket.marketType>([\s\S]*?)<\/cim:PlannedMarket.marketType>/g, obj, "marketType", base.to_string, sub, context);
            base.parse_attribute (/<cim:PlannedMarket.MarketPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketPlan", sub, context);
            bucket = context.parsed.PlannedMarket;
            if (null == bucket)
                context.parsed.PlannedMarket = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PlannedMarket (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PlannedMarket", "marketEndTime", base.from_datetime, fields);
            base.export_element (obj, "PlannedMarket", "marketID", base.from_string, fields);
            base.export_element (obj, "PlannedMarket", "marketStartTime", base.from_datetime, fields);
            base.export_element (obj, "PlannedMarket", "marketType", base.from_string, fields);
            base.export_attribute (obj, "PlannedMarket", "MarketPlan", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class represent an actual instance of a planned market.
         *
         * For example, a Day Ahead market opens with the Bid Submission, ends with the closing of the Bid Submission. The market run represent the whole process. MarketRuns can be defined for markets such as Day Ahead Market, Real Time Market, Hour Ahead Market, Week Ahead Market,...
         *
         */
        function parse_MarketRun (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketRun";
            base.parse_element (/<cim:MarketRun.executionType>([\s\S]*?)<\/cim:MarketRun.executionType>/g, obj, "executionType", base.to_string, sub, context);
            base.parse_element (/<cim:MarketRun.marketApprovalTime>([\s\S]*?)<\/cim:MarketRun.marketApprovalTime>/g, obj, "marketApprovalTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:MarketRun.marketApprovedStatus>([\s\S]*?)<\/cim:MarketRun.marketApprovedStatus>/g, obj, "marketApprovedStatus", base.to_boolean, sub, context);
            base.parse_element (/<cim:MarketRun.marketEndTime>([\s\S]*?)<\/cim:MarketRun.marketEndTime>/g, obj, "marketEndTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:MarketRun.marketID>([\s\S]*?)<\/cim:MarketRun.marketID>/g, obj, "marketID", base.to_string, sub, context);
            base.parse_element (/<cim:MarketRun.marketRunID>([\s\S]*?)<\/cim:MarketRun.marketRunID>/g, obj, "marketRunID", base.to_string, sub, context);
            base.parse_element (/<cim:MarketRun.marketStartTime>([\s\S]*?)<\/cim:MarketRun.marketStartTime>/g, obj, "marketStartTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:MarketRun.marketType>([\s\S]*?)<\/cim:MarketRun.marketType>/g, obj, "marketType", base.to_string, sub, context);
            base.parse_element (/<cim:MarketRun.reportedState>([\s\S]*?)<\/cim:MarketRun.reportedState>/g, obj, "reportedState", base.to_string, sub, context);
            base.parse_element (/<cim:MarketRun.runState>([\s\S]*?)<\/cim:MarketRun.runState>/g, obj, "runState", base.to_string, sub, context);
            base.parse_attribute (/<cim:MarketRun.PlannedMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedMarket", sub, context);
            base.parse_attribute (/<cim:MarketRun.Market\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Market", sub, context);
            bucket = context.parsed.MarketRun;
            if (null == bucket)
                context.parsed.MarketRun = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketRun (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MarketRun", "executionType", base.from_string, fields);
            base.export_element (obj, "MarketRun", "marketApprovalTime", base.from_datetime, fields);
            base.export_element (obj, "MarketRun", "marketApprovedStatus", base.from_boolean, fields);
            base.export_element (obj, "MarketRun", "marketEndTime", base.from_datetime, fields);
            base.export_element (obj, "MarketRun", "marketID", base.from_string, fields);
            base.export_element (obj, "MarketRun", "marketRunID", base.from_string, fields);
            base.export_element (obj, "MarketRun", "marketStartTime", base.from_datetime, fields);
            base.export_element (obj, "MarketRun", "marketType", base.from_string, fields);
            base.export_element (obj, "MarketRun", "reportedState", base.from_string, fields);
            base.export_element (obj, "MarketRun", "runState", base.from_string, fields);
            base.export_attribute (obj, "MarketRun", "PlannedMarket", fields);
            base.export_attribute (obj, "MarketRun", "Market", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_PlannedMarketEvent: export_PlannedMarketEvent,
                export_CRRMarket: export_CRRMarket,
                parse_MarketFactors: parse_MarketFactors,
                parse_Market: parse_Market,
                parse_PlannedMarketEvent: parse_PlannedMarketEvent,
                parse_MarketActualEvent: parse_MarketActualEvent,
                export_MarketRun: export_MarketRun,
                export_PlannedMarket: export_PlannedMarket,
                parse_PlannedMarket: parse_PlannedMarket,
                parse_MarketPlan: parse_MarketPlan,
                parse_MarketProduct: parse_MarketProduct,
                parse_MarketRun: parse_MarketRun,
                export_Market: export_Market,
                export_MarketProduct: export_MarketProduct,
                export_MarketActualEvent: export_MarketActualEvent,
                export_MarketPlan: export_MarketPlan,
                export_EnergyMarket: export_EnergyMarket,
                parse_CRRMarket: parse_CRRMarket,
                export_MarketFactors: export_MarketFactors,
                parse_EnergyMarket: parse_EnergyMarket
            }
        );
    }
);