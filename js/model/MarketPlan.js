define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * Market plan definitions for planned markets, planned market events, actual market runs, actual market events.
     */
    function (base, Common, Core)
    {

        /**
         * A product traded by an RTO (e.g. energy, 10 minute spinning reserve).
         * Ancillary service product examples include:Regulation UpRegulation DnSpinning ReserveNon-Spinning ReserveOperating Reserve
         */
        function parse_MarketProduct (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MarketProduct";
            /**
             * Market product type examples:
            
            EN (Energy)
            RU (Regulation Up)
            RD (Regulation Dn)
            SR (Spinning Reserve)
            NR (Non-Spinning Reserve)
             * RC (RUC)
             */
            obj["marketProductType"] = base.parse_element (/<cim:MarketProduct.marketProductType>([\s\S]*?)<\/cim:MarketProduct.marketProductType>/g, sub, context, true);
            /**
             * Ramping time interval for the specific market product type specified by marketProductType attribute.
             * For example, if marketProductType = EN (from enumeration MarketProductType), then the rampInterval is the ramping time interval for Energy.
             */
            obj["rampInterval"] = base.to_float (base.parse_element (/<cim:MarketProduct.rampInterval>([\s\S]*?)<\/cim:MarketProduct.rampInterval>/g, sub, context, true));
            /**
             * 
             */
            obj["MarketRegionResults"] = base.parse_attribute (/<cim:MarketProduct.MarketRegionResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["Market"] = base.parse_attribute (/<cim:MarketProduct.Market\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MarketProduct;
            if (null == bucket)
                context.parsed.MarketProduct = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class represents planned events.
         * Used to model the various planned events in a market (closing time, clearing time, etc).
         */
        function parse_PlannedMarketEvent (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PlannedMarketEvent";
            /**
             * Description of the planned event.
             */
            obj["description"] = base.parse_element (/<cim:PlannedMarketEvent.description>([\s\S]*?)<\/cim:PlannedMarketEvent.description>/g, sub, context, true);
            /**
             * Planned event type.
             */
            obj["eventType"] = base.parse_element (/<cim:PlannedMarketEvent.eventType>([\s\S]*?)<\/cim:PlannedMarketEvent.eventType>/g, sub, context, true);
            /**
             * Planned event identifier.
             */
            obj["plannedEventID"] = base.parse_element (/<cim:PlannedMarketEvent.plannedEventID>([\s\S]*?)<\/cim:PlannedMarketEvent.plannedEventID>/g, sub, context, true);
            /**
             * This is relative time so that this attribute can be used by more than one planned market.
             * For example the bid submission is 10am everyday.
             */
            obj["plannedTime"] = base.parse_element (/<cim:PlannedMarketEvent.plannedTime>([\s\S]*?)<\/cim:PlannedMarketEvent.plannedTime>/g, sub, context, true);
            bucket = context.parsed.PlannedMarketEvent;
            if (null == bucket)
                context.parsed.PlannedMarketEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class identifies a set of planned markets.
         * This class is a container of these planned markets
         */
        function parse_MarketPlan (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketPlan";
            /**
             * Description of the planned market.
             */
            obj["description"] = base.parse_element (/<cim:MarketPlan.description>([\s\S]*?)<\/cim:MarketPlan.description>/g, sub, context, true);
            /**
             * Planned market identifier.
             */
            obj["marketPlanID"] = base.parse_element (/<cim:MarketPlan.marketPlanID>([\s\S]*?)<\/cim:MarketPlan.marketPlanID>/g, sub, context, true);
            /**
             * Name of the planned market.
             */
            obj["name"] = base.parse_element (/<cim:MarketPlan.name>([\s\S]*?)<\/cim:MarketPlan.name>/g, sub, context, true);
            /**
             * Planned market trading day.
             */
            obj["tradingDay"] = base.to_datetime (base.parse_element (/<cim:MarketPlan.tradingDay>([\s\S]*?)<\/cim:MarketPlan.tradingDay>/g, sub, context, true));
            bucket = context.parsed.MarketPlan;
            if (null == bucket)
                context.parsed.MarketPlan = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Aggregation of market information relative for a specific time interval.
         */
        function parse_MarketFactors (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "MarketFactors";
            /**
             * The end of the time interval for which requirement is defined.
             */
            obj["intervalEndTime"] = base.to_datetime (base.parse_element (/<cim:MarketFactors.intervalEndTime>([\s\S]*?)<\/cim:MarketFactors.intervalEndTime>/g, sub, context, true));
            /**
             * The start of the time interval for which requirement is defined.
             */
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:MarketFactors.intervalStartTime>([\s\S]*?)<\/cim:MarketFactors.intervalStartTime>/g, sub, context, true));
            /**
             * 
             */
            obj["Market"] = base.parse_attribute (/<cim:MarketFactors.Market\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MarketFactors;
            if (null == bucket)
                context.parsed.MarketFactors = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market (e.g.
         * Day Ahead Market, RealTime Market) with a description of the the Market operation control parameters.
         */
        function parse_Market (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Market";
            /**
             * Market ending time - actual market end
             */
            obj["actualEnd"] = base.to_datetime (base.parse_element (/<cim:Market.actualEnd>([\s\S]*?)<\/cim:Market.actualEnd>/g, sub, context, true));
            /**
             * Market starting time - actual market start
             */
            obj["actualStart"] = base.to_datetime (base.parse_element (/<cim:Market.actualStart>([\s\S]*?)<\/cim:Market.actualStart>/g, sub, context, true));
            /**
             * True if daylight savings time (DST) is in effect.
             */
            obj["dst"] = base.to_boolean (base.parse_element (/<cim:Market.dst>([\s\S]*?)<\/cim:Market.dst>/g, sub, context, true));
            /**
             * Market end time.
             */
            obj["end"] = base.to_datetime (base.parse_element (/<cim:Market.end>([\s\S]*?)<\/cim:Market.end>/g, sub, context, true));
            /**
             * Local time zone.
             */
            obj["localTimeZone"] = base.parse_element (/<cim:Market.localTimeZone>([\s\S]*?)<\/cim:Market.localTimeZone>/g, sub, context, true);
            /**
             * Market start time.
             */
            obj["start"] = base.to_datetime (base.parse_element (/<cim:Market.start>([\s\S]*?)<\/cim:Market.start>/g, sub, context, true));
            /**
             * Market Status
             * 'OPEN', 'CLOSED', 'CLEARED', 'BLOCKED'
             */
            obj["status"] = base.parse_element (/<cim:Market.status>([\s\S]*?)<\/cim:Market.status>/g, sub, context, true);
            /**
             * Trading time interval length.
             */
            obj["timeIntervalLength"] = base.to_float (base.parse_element (/<cim:Market.timeIntervalLength>([\s\S]*?)<\/cim:Market.timeIntervalLength>/g, sub, context, true));
            /**
             * Market trading date
             */
            obj["tradingDay"] = base.to_datetime (base.parse_element (/<cim:Market.tradingDay>([\s\S]*?)<\/cim:Market.tradingDay>/g, sub, context, true));
            /**
             * Trading period that describes the market, possibilities could be for an Energy Market:
            Day
            Hour
            
            For a CRR Market:
            Year
            Month
             * Season
             */
            obj["tradingPeriod"] = base.parse_element (/<cim:Market.tradingPeriod>([\s\S]*?)<\/cim:Market.tradingPeriod>/g, sub, context, true);
            bucket = context.parsed.Market;
            if (null == bucket)
                context.parsed.Market = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Energy and Ancillary Market (e.g.
         * Energy, Spinning Reserve, Non-Spinning Reserve) with a description of the Market operation control parameters.
         */
        function parse_EnergyMarket (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Market (context, sub);
            obj.cls = "EnergyMarket";
            /**
             * 
             */
            obj["MarketResults"] = base.parse_attribute (/<cim:EnergyMarket.MarketResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RTO"] = base.parse_attribute (/<cim:EnergyMarket.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EnergyMarket;
            if (null == bucket)
                context.parsed.EnergyMarket = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class represent the actual instance of an event.
         */
        function parse_MarketActualEvent (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketActualEvent";
            /**
             * Description of the event.
             */
            obj["description"] = base.parse_element (/<cim:MarketActualEvent.description>([\s\S]*?)<\/cim:MarketActualEvent.description>/g, sub, context, true);
            /**
             * Actual event ID.
             */
            obj["eventID"] = base.parse_element (/<cim:MarketActualEvent.eventID>([\s\S]*?)<\/cim:MarketActualEvent.eventID>/g, sub, context, true);
            /**
             * Start time of the event.
             */
            obj["eventTime"] = base.to_datetime (base.parse_element (/<cim:MarketActualEvent.eventTime>([\s\S]*?)<\/cim:MarketActualEvent.eventTime>/g, sub, context, true));
            /**
             * Planned event executed by this actual event.
             */
            obj["PlannedMarketEvent"] = base.parse_attribute (/<cim:MarketActualEvent.PlannedMarketEvent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Market run triggered by this actual event.
             * For example, the DA run is triggered by the actual open bid submission event and terminated by the actual close bid submission event.
             */
            obj["MarketRun"] = base.parse_attribute (/<cim:MarketActualEvent.MarketRun\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MarketActualEvent;
            if (null == bucket)
                context.parsed.MarketActualEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model that describes the Congestion Revenue Rights Auction Market
         */
        function parse_CRRMarket (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Market (context, sub);
            obj.cls = "CRRMarket";
            /**
             * labelID - an ID for a set of apnodes/pnodes used in a CRR market
             */
            obj["labelID"] = base.parse_element (/<cim:CRRMarket.labelID>([\s\S]*?)<\/cim:CRRMarket.labelID>/g, sub, context, true);
            bucket = context.parsed.CRRMarket;
            if (null == bucket)
                context.parsed.CRRMarket = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Represent a planned market.
         * For example an planned DA/HA/RT market.
         */
        function parse_PlannedMarket (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PlannedMarket";
            /**
             * Market end time.
             */
            obj["marketEndTime"] = base.to_datetime (base.parse_element (/<cim:PlannedMarket.marketEndTime>([\s\S]*?)<\/cim:PlannedMarket.marketEndTime>/g, sub, context, true));
            /**
             * An identification that defines the attributes of the Market.
             * In todays terms: Market Type: DA, RTM, Trade Date:  1/25/04, Trade Hour: 1-25.
             */
            obj["marketID"] = base.parse_element (/<cim:PlannedMarket.marketID>([\s\S]*?)<\/cim:PlannedMarket.marketID>/g, sub, context, true);
            /**
             * Market start time.
             */
            obj["marketStartTime"] = base.to_datetime (base.parse_element (/<cim:PlannedMarket.marketStartTime>([\s\S]*?)<\/cim:PlannedMarket.marketStartTime>/g, sub, context, true));
            /**
             * Market type.
             */
            obj["marketType"] = base.parse_element (/<cim:PlannedMarket.marketType>([\s\S]*?)<\/cim:PlannedMarket.marketType>/g, sub, context, true);
            /**
             * a market plan has a number of markets (DA, HA, RT)
             */
            obj["MarketPlan"] = base.parse_attribute (/<cim:PlannedMarket.MarketPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PlannedMarket;
            if (null == bucket)
                context.parsed.PlannedMarket = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class represent an actual instance of a planned market.
         * For example, a Day Ahead market opens with the Bid Submission, ends with the closing of the Bid Submission. The market run represent the whole process. MarketRuns can be defined for markets such as Day Ahead Market, Real Time Market, Hour Ahead Market, Week Ahead Market,...
         */
        function parse_MarketRun (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketRun";
            /**
             * The execution type; Day Ahead, Intra Day, Real Time Pre-Dispatch, Real Time Dispatch
             */
            obj["executionType"] = base.parse_element (/<cim:MarketRun.executionType>([\s\S]*?)<\/cim:MarketRun.executionType>/g, sub, context, true);
            /**
             * Approved time for case.
             * Identifies the time that the dispatcher approved a specific real time unit dispatch case
             */
            obj["marketApprovalTime"] = base.to_datetime (base.parse_element (/<cim:MarketRun.marketApprovalTime>([\s\S]*?)<\/cim:MarketRun.marketApprovalTime>/g, sub, context, true));
            /**
             * Set to true when the plan is approved by authority and becomes the official plan for the day ahead market.
             * Identifies the approved case for the market for the specified time interval.
             */
            obj["marketApprovedStatus"] = base.to_boolean (base.parse_element (/<cim:MarketRun.marketApprovedStatus>([\s\S]*?)<\/cim:MarketRun.marketApprovedStatus>/g, sub, context, true));
            /**
             * The end time defined as the end of the market, market end time.
             */
            obj["marketEndTime"] = base.to_datetime (base.parse_element (/<cim:MarketRun.marketEndTime>([\s\S]*?)<\/cim:MarketRun.marketEndTime>/g, sub, context, true));
            /**
             * An identification that defines the attributes of the Market.
             * In todays terms: Market Type: DA, RTM, Trade Date:  1/25/04, Trade Hour: 1-25
             */
            obj["marketID"] = base.parse_element (/<cim:MarketRun.marketID>([\s\S]*?)<\/cim:MarketRun.marketID>/g, sub, context, true);
            /**
             * A unique identifier that differentiates the different runs of the same Market ID.
             * More specifically, if the market is re-opened and re-closed and rerun completely, the first set of results and the second set of results produced will have the same Market ID but will have different Market Run IDs since the multiple run is for the same market.
             */
            obj["marketRunID"] = base.parse_element (/<cim:MarketRun.marketRunID>([\s\S]*?)<\/cim:MarketRun.marketRunID>/g, sub, context, true);
            /**
             * The start time defined as the beginning of the market, market start time.
             */
            obj["marketStartTime"] = base.to_datetime (base.parse_element (/<cim:MarketRun.marketStartTime>([\s\S]*?)<\/cim:MarketRun.marketStartTime>/g, sub, context, true));
            /**
             * The market type, Day Ahead Market or Real Time Market.
             */
            obj["marketType"] = base.parse_element (/<cim:MarketRun.marketType>([\s\S]*?)<\/cim:MarketRun.marketType>/g, sub, context, true);
            /**
             * This is the state of market run activitie as reported by market systems to the market definition services.
             */
            obj["reportedState"] = base.parse_element (/<cim:MarketRun.reportedState>([\s\S]*?)<\/cim:MarketRun.reportedState>/g, sub, context, true);
            /**
             * This is the state controlled by market defintion service.
             * possible values could be but not limited by: Open, Close.
             */
            obj["runState"] = base.parse_element (/<cim:MarketRun.runState>([\s\S]*?)<\/cim:MarketRun.runState>/g, sub, context, true);
            /**
             * A planned market could have multiple market runs for the reason that a planned market could have a rerun.
             */
            obj["PlannedMarket"] = base.parse_attribute (/<cim:MarketRun.PlannedMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["Market"] = base.parse_attribute (/<cim:MarketRun.Market\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MarketRun;
            if (null == bucket)
                context.parsed.MarketRun = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_MarketRun: parse_MarketRun,
                parse_MarketProduct: parse_MarketProduct,
                parse_MarketFactors: parse_MarketFactors,
                parse_Market: parse_Market,
                parse_PlannedMarketEvent: parse_PlannedMarketEvent,
                parse_MarketActualEvent: parse_MarketActualEvent,
                parse_MarketPlan: parse_MarketPlan,
                parse_PlannedMarket: parse_PlannedMarket,
                parse_CRRMarket: parse_CRRMarket,
                parse_EnergyMarket: parse_EnergyMarket
            }
        );
    }
);