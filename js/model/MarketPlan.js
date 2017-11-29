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
        class MarketProduct extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketProduct;
                if (null == bucket)
                   cim_data.MarketProduct = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketProduct[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketProduct";
                base.parse_element (/<cim:MarketProduct.marketProductType>([\s\S]*?)<\/cim:MarketProduct.marketProductType>/g, obj, "marketProductType", base.to_string, sub, context);
                base.parse_element (/<cim:MarketProduct.rampInterval>([\s\S]*?)<\/cim:MarketProduct.rampInterval>/g, obj, "rampInterval", base.to_float, sub, context);
                base.parse_attribute (/<cim:MarketProduct.MarketRegionResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRegionResults", sub, context);
                base.parse_attribute (/<cim:MarketProduct.Market\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Market", sub, context);

                var bucket = context.parsed.MarketProduct;
                if (null == bucket)
                   context.parsed.MarketProduct = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketProduct", "marketProductType", base.from_string, fields);
                base.export_element (obj, "MarketProduct", "rampInterval", base.from_float, fields);
                base.export_attribute (obj, "MarketProduct", "MarketRegionResults", fields);
                base.export_attribute (obj, "MarketProduct", "Market", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketProduct_collapse" aria-expanded="true" aria-controls="MarketProduct_collapse">MarketProduct</a>
<div id="MarketProduct_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#marketProductType}}<div><b>marketProductType</b>: {{marketProductType}}</div>{{/marketProductType}}
{{#rampInterval}}<div><b>rampInterval</b>: {{rampInterval}}</div>{{/rampInterval}}
{{#MarketRegionResults}}<div><b>MarketRegionResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketRegionResults}}&quot;);})'>{{MarketRegionResults}}</a></div>{{/MarketRegionResults}}
{{#Market}}<div><b>Market</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Market}}&quot;);})'>{{Market}}</a></div>{{/Market}}
</div>
`
                );
           }        }

        /**
         * This class represents planned events.
         *
         * Used to model the various planned events in a market (closing time, clearing time, etc).
         *
         */
        class PlannedMarketEvent extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PlannedMarketEvent;
                if (null == bucket)
                   cim_data.PlannedMarketEvent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PlannedMarketEvent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PlannedMarketEvent";
                base.parse_element (/<cim:PlannedMarketEvent.description>([\s\S]*?)<\/cim:PlannedMarketEvent.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:PlannedMarketEvent.eventType>([\s\S]*?)<\/cim:PlannedMarketEvent.eventType>/g, obj, "eventType", base.to_string, sub, context);
                base.parse_element (/<cim:PlannedMarketEvent.plannedEventID>([\s\S]*?)<\/cim:PlannedMarketEvent.plannedEventID>/g, obj, "plannedEventID", base.to_string, sub, context);
                base.parse_element (/<cim:PlannedMarketEvent.plannedTime>([\s\S]*?)<\/cim:PlannedMarketEvent.plannedTime>/g, obj, "plannedTime", base.to_string, sub, context);

                var bucket = context.parsed.PlannedMarketEvent;
                if (null == bucket)
                   context.parsed.PlannedMarketEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PlannedMarketEvent", "description", base.from_string, fields);
                base.export_element (obj, "PlannedMarketEvent", "eventType", base.from_string, fields);
                base.export_element (obj, "PlannedMarketEvent", "plannedEventID", base.from_string, fields);
                base.export_element (obj, "PlannedMarketEvent", "plannedTime", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PlannedMarketEvent_collapse" aria-expanded="true" aria-controls="PlannedMarketEvent_collapse">PlannedMarketEvent</a>
<div id="PlannedMarketEvent_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
{{#eventType}}<div><b>eventType</b>: {{eventType}}</div>{{/eventType}}
{{#plannedEventID}}<div><b>plannedEventID</b>: {{plannedEventID}}</div>{{/plannedEventID}}
{{#plannedTime}}<div><b>plannedTime</b>: {{plannedTime}}</div>{{/plannedTime}}
</div>
`
                );
           }        }

        /**
         * This class identifies a set of planned markets.
         *
         * This class is a container of these planned markets
         *
         */
        class MarketPlan extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketPlan;
                if (null == bucket)
                   cim_data.MarketPlan = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketPlan[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketPlan";
                base.parse_element (/<cim:MarketPlan.description>([\s\S]*?)<\/cim:MarketPlan.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPlan.marketPlanID>([\s\S]*?)<\/cim:MarketPlan.marketPlanID>/g, obj, "marketPlanID", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPlan.name>([\s\S]*?)<\/cim:MarketPlan.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPlan.tradingDay>([\s\S]*?)<\/cim:MarketPlan.tradingDay>/g, obj, "tradingDay", base.to_datetime, sub, context);

                var bucket = context.parsed.MarketPlan;
                if (null == bucket)
                   context.parsed.MarketPlan = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketPlan", "description", base.from_string, fields);
                base.export_element (obj, "MarketPlan", "marketPlanID", base.from_string, fields);
                base.export_element (obj, "MarketPlan", "name", base.from_string, fields);
                base.export_element (obj, "MarketPlan", "tradingDay", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketPlan_collapse" aria-expanded="true" aria-controls="MarketPlan_collapse">MarketPlan</a>
<div id="MarketPlan_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
{{#marketPlanID}}<div><b>marketPlanID</b>: {{marketPlanID}}</div>{{/marketPlanID}}
{{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
{{#tradingDay}}<div><b>tradingDay</b>: {{tradingDay}}</div>{{/tradingDay}}
</div>
`
                );
           }        }

        /**
         * Aggregation of market information relative for a specific time interval.
         *
         */
        class MarketFactors extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketFactors;
                if (null == bucket)
                   cim_data.MarketFactors = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketFactors[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "MarketFactors";
                base.parse_element (/<cim:MarketFactors.intervalEndTime>([\s\S]*?)<\/cim:MarketFactors.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketFactors.intervalStartTime>([\s\S]*?)<\/cim:MarketFactors.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MarketFactors.Market\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Market", sub, context);

                var bucket = context.parsed.MarketFactors;
                if (null == bucket)
                   context.parsed.MarketFactors = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketFactors", "intervalEndTime", base.from_datetime, fields);
                base.export_element (obj, "MarketFactors", "intervalStartTime", base.from_datetime, fields);
                base.export_attribute (obj, "MarketFactors", "Market", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketFactors_collapse" aria-expanded="true" aria-controls="MarketFactors_collapse">MarketFactors</a>
<div id="MarketFactors_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Document.prototype.template.call (this) +
`
{{#intervalEndTime}}<div><b>intervalEndTime</b>: {{intervalEndTime}}</div>{{/intervalEndTime}}
{{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
{{#Market}}<div><b>Market</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Market}}&quot;);})'>{{Market}}</a></div>{{/Market}}
</div>
`
                );
           }        }

        /**
         * Market (e.g.
         *
         * Day Ahead Market, RealTime Market) with a description of the the Market operation control parameters.
         *
         */
        class Market extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Market;
                if (null == bucket)
                   cim_data.Market = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Market[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.Market;
                if (null == bucket)
                   context.parsed.Market = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Market_collapse" aria-expanded="true" aria-controls="Market_collapse">Market</a>
<div id="Market_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#actualEnd}}<div><b>actualEnd</b>: {{actualEnd}}</div>{{/actualEnd}}
{{#actualStart}}<div><b>actualStart</b>: {{actualStart}}</div>{{/actualStart}}
{{#dst}}<div><b>dst</b>: {{dst}}</div>{{/dst}}
{{#end}}<div><b>end</b>: {{end}}</div>{{/end}}
{{#localTimeZone}}<div><b>localTimeZone</b>: {{localTimeZone}}</div>{{/localTimeZone}}
{{#start}}<div><b>start</b>: {{start}}</div>{{/start}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#timeIntervalLength}}<div><b>timeIntervalLength</b>: {{timeIntervalLength}}</div>{{/timeIntervalLength}}
{{#tradingDay}}<div><b>tradingDay</b>: {{tradingDay}}</div>{{/tradingDay}}
{{#tradingPeriod}}<div><b>tradingPeriod</b>: {{tradingPeriod}}</div>{{/tradingPeriod}}
</div>
`
                );
           }        }

        /**
         * This class represent the actual instance of an event.
         *
         */
        class MarketActualEvent extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketActualEvent;
                if (null == bucket)
                   cim_data.MarketActualEvent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketActualEvent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketActualEvent";
                base.parse_element (/<cim:MarketActualEvent.description>([\s\S]*?)<\/cim:MarketActualEvent.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:MarketActualEvent.eventID>([\s\S]*?)<\/cim:MarketActualEvent.eventID>/g, obj, "eventID", base.to_string, sub, context);
                base.parse_element (/<cim:MarketActualEvent.eventTime>([\s\S]*?)<\/cim:MarketActualEvent.eventTime>/g, obj, "eventTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MarketActualEvent.PlannedMarketEvent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedMarketEvent", sub, context);
                base.parse_attribute (/<cim:MarketActualEvent.MarketRun\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRun", sub, context);

                var bucket = context.parsed.MarketActualEvent;
                if (null == bucket)
                   context.parsed.MarketActualEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketActualEvent", "description", base.from_string, fields);
                base.export_element (obj, "MarketActualEvent", "eventID", base.from_string, fields);
                base.export_element (obj, "MarketActualEvent", "eventTime", base.from_datetime, fields);
                base.export_attribute (obj, "MarketActualEvent", "PlannedMarketEvent", fields);
                base.export_attribute (obj, "MarketActualEvent", "MarketRun", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketActualEvent_collapse" aria-expanded="true" aria-controls="MarketActualEvent_collapse">MarketActualEvent</a>
<div id="MarketActualEvent_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
{{#eventID}}<div><b>eventID</b>: {{eventID}}</div>{{/eventID}}
{{#eventTime}}<div><b>eventTime</b>: {{eventTime}}</div>{{/eventTime}}
{{#PlannedMarketEvent}}<div><b>PlannedMarketEvent</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PlannedMarketEvent}}&quot;);})'>{{PlannedMarketEvent}}</a></div>{{/PlannedMarketEvent}}
{{#MarketRun}}<div><b>MarketRun</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketRun}}&quot;);})'>{{MarketRun}}</a></div>{{/MarketRun}}
</div>
`
                );
           }        }

        /**
         * Represent a planned market.
         *
         * For example an planned DA/HA/RT market.
         *
         */
        class PlannedMarket extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PlannedMarket;
                if (null == bucket)
                   cim_data.PlannedMarket = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PlannedMarket[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PlannedMarket";
                base.parse_element (/<cim:PlannedMarket.marketEndTime>([\s\S]*?)<\/cim:PlannedMarket.marketEndTime>/g, obj, "marketEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:PlannedMarket.marketID>([\s\S]*?)<\/cim:PlannedMarket.marketID>/g, obj, "marketID", base.to_string, sub, context);
                base.parse_element (/<cim:PlannedMarket.marketStartTime>([\s\S]*?)<\/cim:PlannedMarket.marketStartTime>/g, obj, "marketStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:PlannedMarket.marketType>([\s\S]*?)<\/cim:PlannedMarket.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_attribute (/<cim:PlannedMarket.MarketPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketPlan", sub, context);

                var bucket = context.parsed.PlannedMarket;
                if (null == bucket)
                   context.parsed.PlannedMarket = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PlannedMarket", "marketEndTime", base.from_datetime, fields);
                base.export_element (obj, "PlannedMarket", "marketID", base.from_string, fields);
                base.export_element (obj, "PlannedMarket", "marketStartTime", base.from_datetime, fields);
                base.export_element (obj, "PlannedMarket", "marketType", base.from_string, fields);
                base.export_attribute (obj, "PlannedMarket", "MarketPlan", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PlannedMarket_collapse" aria-expanded="true" aria-controls="PlannedMarket_collapse">PlannedMarket</a>
<div id="PlannedMarket_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#marketEndTime}}<div><b>marketEndTime</b>: {{marketEndTime}}</div>{{/marketEndTime}}
{{#marketID}}<div><b>marketID</b>: {{marketID}}</div>{{/marketID}}
{{#marketStartTime}}<div><b>marketStartTime</b>: {{marketStartTime}}</div>{{/marketStartTime}}
{{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
{{#MarketPlan}}<div><b>MarketPlan</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketPlan}}&quot;);})'>{{MarketPlan}}</a></div>{{/MarketPlan}}
</div>
`
                );
           }        }

        /**
         * This class represent an actual instance of a planned market.
         *
         * For example, a Day Ahead market opens with the Bid Submission, ends with the closing of the Bid Submission. The market run represent the whole process. MarketRuns can be defined for markets such as Day Ahead Market, Real Time Market, Hour Ahead Market, Week Ahead Market,...
         *
         */
        class MarketRun extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketRun;
                if (null == bucket)
                   cim_data.MarketRun = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketRun[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.MarketRun;
                if (null == bucket)
                   context.parsed.MarketRun = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketRun_collapse" aria-expanded="true" aria-controls="MarketRun_collapse">MarketRun</a>
<div id="MarketRun_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#executionType}}<div><b>executionType</b>: {{executionType}}</div>{{/executionType}}
{{#marketApprovalTime}}<div><b>marketApprovalTime</b>: {{marketApprovalTime}}</div>{{/marketApprovalTime}}
{{#marketApprovedStatus}}<div><b>marketApprovedStatus</b>: {{marketApprovedStatus}}</div>{{/marketApprovedStatus}}
{{#marketEndTime}}<div><b>marketEndTime</b>: {{marketEndTime}}</div>{{/marketEndTime}}
{{#marketID}}<div><b>marketID</b>: {{marketID}}</div>{{/marketID}}
{{#marketRunID}}<div><b>marketRunID</b>: {{marketRunID}}</div>{{/marketRunID}}
{{#marketStartTime}}<div><b>marketStartTime</b>: {{marketStartTime}}</div>{{/marketStartTime}}
{{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
{{#reportedState}}<div><b>reportedState</b>: {{reportedState}}</div>{{/reportedState}}
{{#runState}}<div><b>runState</b>: {{runState}}</div>{{/runState}}
{{#PlannedMarket}}<div><b>PlannedMarket</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PlannedMarket}}&quot;);})'>{{PlannedMarket}}</a></div>{{/PlannedMarket}}
{{#Market}}<div><b>Market</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Market}}&quot;);})'>{{Market}}</a></div>{{/Market}}
</div>
`
                );
           }        }

        /**
         * Energy and Ancillary Market (e.g.
         *
         * Energy, Spinning Reserve, Non-Spinning Reserve) with a description of the Market operation control parameters.
         *
         */
        class EnergyMarket extends Market
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyMarket;
                if (null == bucket)
                   cim_data.EnergyMarket = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyMarket[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Market.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyMarket";
                base.parse_attribute (/<cim:EnergyMarket.MarketResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketResults", sub, context);
                base.parse_attribute (/<cim:EnergyMarket.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);

                var bucket = context.parsed.EnergyMarket;
                if (null == bucket)
                   context.parsed.EnergyMarket = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Market.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnergyMarket", "MarketResults", fields);
                base.export_attribute (obj, "EnergyMarket", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EnergyMarket_collapse" aria-expanded="true" aria-controls="EnergyMarket_collapse">EnergyMarket</a>
<div id="EnergyMarket_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Market.prototype.template.call (this) +
`
{{#MarketResults}}<div><b>MarketResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketResults}}&quot;);})'>{{MarketResults}}</a></div>{{/MarketResults}}
{{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
</div>
`
                );
           }        }

        /**
         * Model that describes the Congestion Revenue Rights Auction Market
         *
         */
        class CRRMarket extends Market
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CRRMarket;
                if (null == bucket)
                   cim_data.CRRMarket = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CRRMarket[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Market.prototype.parse.call (this, context, sub);
                obj.cls = "CRRMarket";
                base.parse_element (/<cim:CRRMarket.labelID>([\s\S]*?)<\/cim:CRRMarket.labelID>/g, obj, "labelID", base.to_string, sub, context);

                var bucket = context.parsed.CRRMarket;
                if (null == bucket)
                   context.parsed.CRRMarket = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Market.prototype.export.call (this, obj, false);

                base.export_element (obj, "CRRMarket", "labelID", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CRRMarket_collapse" aria-expanded="true" aria-controls="CRRMarket_collapse">CRRMarket</a>
<div id="CRRMarket_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Market.prototype.template.call (this) +
`
{{#labelID}}<div><b>labelID</b>: {{labelID}}</div>{{/labelID}}
</div>
`
                );
           }        }

        return (
            {
                CRRMarket: CRRMarket,
                MarketPlan: MarketPlan,
                EnergyMarket: EnergyMarket,
                Market: Market,
                MarketActualEvent: MarketActualEvent,
                MarketProduct: MarketProduct,
                MarketFactors: MarketFactors,
                PlannedMarketEvent: PlannedMarketEvent,
                MarketRun: MarketRun,
                PlannedMarket: PlannedMarket
            }
        );
    }
);