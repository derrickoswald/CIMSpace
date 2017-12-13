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
                var bucket = cim_data.MarketProduct;
                if (null == bucket)
                   cim_data.MarketProduct = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketProduct[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketProduct";
                base.parse_element (/<cim:MarketProduct.marketProductType>([\s\S]*?)<\/cim:MarketProduct.marketProductType>/g, obj, "marketProductType", base.to_string, sub, context);
                base.parse_element (/<cim:MarketProduct.rampInterval>([\s\S]*?)<\/cim:MarketProduct.rampInterval>/g, obj, "rampInterval", base.to_float, sub, context);
                base.parse_attribute (/<cim:MarketProduct.MarketRegionResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRegionResults", sub, context);
                base.parse_attributes (/<cim:MarketProduct.ResourceAwardInstruction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceAwardInstruction", sub, context);
                base.parse_attributes (/<cim:MarketProduct.BidPriceCap\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidPriceCap", sub, context);
                base.parse_attributes (/<cim:MarketProduct.ReserveReqs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReqs", sub, context);
                base.parse_attributes (/<cim:MarketProduct.ProductBids\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBids", sub, context);
                base.parse_attributes (/<cim:MarketProduct.BidError\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidError", sub, context);
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

                base.export_element (obj, "MarketProduct", "marketProductType", "marketProductType",  base.from_string, fields);
                base.export_element (obj, "MarketProduct", "rampInterval", "rampInterval",  base.from_float, fields);
                base.export_attribute (obj, "MarketProduct", "MarketRegionResults", "MarketRegionResults", fields);
                base.export_attributes (obj, "MarketProduct", "ResourceAwardInstruction", "ResourceAwardInstruction", fields);
                base.export_attributes (obj, "MarketProduct", "BidPriceCap", "BidPriceCap", fields);
                base.export_attributes (obj, "MarketProduct", "ReserveReqs", "ReserveReqs", fields);
                base.export_attributes (obj, "MarketProduct", "ProductBids", "ProductBids", fields);
                base.export_attributes (obj, "MarketProduct", "BidError", "BidError", fields);
                base.export_attribute (obj, "MarketProduct", "Market", "Market", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketProduct_collapse" aria-expanded="true" aria-controls="MarketProduct_collapse" style="margin-left: 10px;">MarketProduct</a></legend>
                    <div id="MarketProduct_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#marketProductType}}<div><b>marketProductType</b>: {{marketProductType}}</div>{{/marketProductType}}
                    {{#rampInterval}}<div><b>rampInterval</b>: {{rampInterval}}</div>{{/rampInterval}}
                    {{#MarketRegionResults}}<div><b>MarketRegionResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketRegionResults}}&quot;);})'>{{MarketRegionResults}}</a></div>{{/MarketRegionResults}}
                    {{#ResourceAwardInstruction}}<div><b>ResourceAwardInstruction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResourceAwardInstruction}}
                    {{#BidPriceCap}}<div><b>BidPriceCap</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BidPriceCap}}
                    {{#ReserveReqs}}<div><b>ReserveReqs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ReserveReqs}}
                    {{#ProductBids}}<div><b>ProductBids</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProductBids}}
                    {{#BidError}}<div><b>BidError</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BidError}}
                    {{#Market}}<div><b>Market</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Market}}&quot;);})'>{{Market}}</a></div>{{/Market}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ResourceAwardInstruction) obj.ResourceAwardInstruction_string = obj.ResourceAwardInstruction.join ();
                if (obj.BidPriceCap) obj.BidPriceCap_string = obj.BidPriceCap.join ();
                if (obj.ReserveReqs) obj.ReserveReqs_string = obj.ReserveReqs.join ();
                if (obj.ProductBids) obj.ProductBids_string = obj.ProductBids.join ();
                if (obj.BidError) obj.BidError_string = obj.BidError.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ResourceAwardInstruction_string;
                delete obj.BidPriceCap_string;
                delete obj.ReserveReqs_string;
                delete obj.ProductBids_string;
                delete obj.BidError_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MarketProduct_collapse" aria-expanded="true" aria-controls="{{id}}_MarketProduct_collapse" style="margin-left: 10px;">MarketProduct</a></legend>
                    <div id="{{id}}_MarketProduct_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketProductType'>marketProductType: </label><div class='col-sm-8'><input id='{{id}}_marketProductType' class='form-control' type='text'{{#marketProductType}} value='{{marketProductType}}'{{/marketProductType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rampInterval'>rampInterval: </label><div class='col-sm-8'><input id='{{id}}_rampInterval' class='form-control' type='text'{{#rampInterval}} value='{{rampInterval}}'{{/rampInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketRegionResults'>MarketRegionResults: </label><div class='col-sm-8'><input id='{{id}}_MarketRegionResults' class='form-control' type='text'{{#MarketRegionResults}} value='{{MarketRegionResults}}'{{/MarketRegionResults}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Market'>Market: </label><div class='col-sm-8'><input id='{{id}}_Market' class='form-control' type='text'{{#Market}} value='{{Market}}'{{/Market}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MarketProduct" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_marketProductType").value; if ("" != temp) obj.marketProductType = temp;
                temp = document.getElementById (id + "_rampInterval").value; if ("" != temp) obj.rampInterval = temp;
                temp = document.getElementById (id + "_MarketRegionResults").value; if ("" != temp) obj.MarketRegionResults = temp;
                temp = document.getElementById (id + "_Market").value; if ("" != temp) obj.Market = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MarketRegionResults", "MarketRegionResults", "0..1", "0..1"],
                        ["ResourceAwardInstruction", "ResourceAwardInstruction", "0..*", "1"],
                        ["BidPriceCap", "BidPriceCap", "0..*", "0..1"],
                        ["ReserveReqs", "ReserveReq", "0..*", "1"],
                        ["ProductBids", "ProductBid", "0..*", "1"],
                        ["BidError", "BidError", "0..*", "0..1"],
                        ["Market", "Market", "0..1", "1..*"]
                    ]
                );
            }
        }

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
                var bucket = cim_data.PlannedMarketEvent;
                if (null == bucket)
                   cim_data.PlannedMarketEvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PlannedMarketEvent[obj.id];
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
                base.parse_attributes (/<cim:PlannedMarketEvent.PlannedMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedMarket", sub, context);
                base.parse_attributes (/<cim:PlannedMarketEvent.MarketActualEvent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketActualEvent", sub, context);
                var bucket = context.parsed.PlannedMarketEvent;
                if (null == bucket)
                   context.parsed.PlannedMarketEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PlannedMarketEvent", "description", "description",  base.from_string, fields);
                base.export_element (obj, "PlannedMarketEvent", "eventType", "eventType",  base.from_string, fields);
                base.export_element (obj, "PlannedMarketEvent", "plannedEventID", "plannedEventID",  base.from_string, fields);
                base.export_element (obj, "PlannedMarketEvent", "plannedTime", "plannedTime",  base.from_string, fields);
                base.export_attributes (obj, "PlannedMarketEvent", "PlannedMarket", "PlannedMarket", fields);
                base.export_attributes (obj, "PlannedMarketEvent", "MarketActualEvent", "MarketActualEvent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PlannedMarketEvent_collapse" aria-expanded="true" aria-controls="PlannedMarketEvent_collapse" style="margin-left: 10px;">PlannedMarketEvent</a></legend>
                    <div id="PlannedMarketEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#eventType}}<div><b>eventType</b>: {{eventType}}</div>{{/eventType}}
                    {{#plannedEventID}}<div><b>plannedEventID</b>: {{plannedEventID}}</div>{{/plannedEventID}}
                    {{#plannedTime}}<div><b>plannedTime</b>: {{plannedTime}}</div>{{/plannedTime}}
                    {{#PlannedMarket}}<div><b>PlannedMarket</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PlannedMarket}}
                    {{#MarketActualEvent}}<div><b>MarketActualEvent</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketActualEvent}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PlannedMarket) obj.PlannedMarket_string = obj.PlannedMarket.join ();
                if (obj.MarketActualEvent) obj.MarketActualEvent_string = obj.MarketActualEvent.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PlannedMarket_string;
                delete obj.MarketActualEvent_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PlannedMarketEvent_collapse" aria-expanded="true" aria-controls="{{id}}_PlannedMarketEvent_collapse" style="margin-left: 10px;">PlannedMarketEvent</a></legend>
                    <div id="{{id}}_PlannedMarketEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eventType'>eventType: </label><div class='col-sm-8'><input id='{{id}}_eventType' class='form-control' type='text'{{#eventType}} value='{{eventType}}'{{/eventType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plannedEventID'>plannedEventID: </label><div class='col-sm-8'><input id='{{id}}_plannedEventID' class='form-control' type='text'{{#plannedEventID}} value='{{plannedEventID}}'{{/plannedEventID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plannedTime'>plannedTime: </label><div class='col-sm-8'><input id='{{id}}_plannedTime' class='form-control' type='text'{{#plannedTime}} value='{{plannedTime}}'{{/plannedTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedMarket'>PlannedMarket: </label><div class='col-sm-8'><input id='{{id}}_PlannedMarket' class='form-control' type='text'{{#PlannedMarket}} value='{{PlannedMarket}}_string'{{/PlannedMarket}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PlannedMarketEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_description").value; if ("" != temp) obj.description = temp;
                temp = document.getElementById (id + "_eventType").value; if ("" != temp) obj.eventType = temp;
                temp = document.getElementById (id + "_plannedEventID").value; if ("" != temp) obj.plannedEventID = temp;
                temp = document.getElementById (id + "_plannedTime").value; if ("" != temp) obj.plannedTime = temp;
                temp = document.getElementById (id + "_PlannedMarket").value; if ("" != temp) obj.PlannedMarket = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["PlannedMarket", "PlannedMarket", "0..*", "1..*"],
                        ["MarketActualEvent", "MarketActualEvent", "1..*", "1"]
                    ]
                );
            }
        }

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
                var bucket = cim_data.MarketPlan;
                if (null == bucket)
                   cim_data.MarketPlan = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketPlan[obj.id];
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
                base.parse_attributes (/<cim:MarketPlan.PlannedMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedMarket", sub, context);
                var bucket = context.parsed.MarketPlan;
                if (null == bucket)
                   context.parsed.MarketPlan = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketPlan", "description", "description",  base.from_string, fields);
                base.export_element (obj, "MarketPlan", "marketPlanID", "marketPlanID",  base.from_string, fields);
                base.export_element (obj, "MarketPlan", "name", "name",  base.from_string, fields);
                base.export_element (obj, "MarketPlan", "tradingDay", "tradingDay",  base.from_datetime, fields);
                base.export_attributes (obj, "MarketPlan", "PlannedMarket", "PlannedMarket", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketPlan_collapse" aria-expanded="true" aria-controls="MarketPlan_collapse" style="margin-left: 10px;">MarketPlan</a></legend>
                    <div id="MarketPlan_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#marketPlanID}}<div><b>marketPlanID</b>: {{marketPlanID}}</div>{{/marketPlanID}}
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#tradingDay}}<div><b>tradingDay</b>: {{tradingDay}}</div>{{/tradingDay}}
                    {{#PlannedMarket}}<div><b>PlannedMarket</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PlannedMarket}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PlannedMarket) obj.PlannedMarket_string = obj.PlannedMarket.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PlannedMarket_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MarketPlan_collapse" aria-expanded="true" aria-controls="{{id}}_MarketPlan_collapse" style="margin-left: 10px;">MarketPlan</a></legend>
                    <div id="{{id}}_MarketPlan_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketPlanID'>marketPlanID: </label><div class='col-sm-8'><input id='{{id}}_marketPlanID' class='form-control' type='text'{{#marketPlanID}} value='{{marketPlanID}}'{{/marketPlanID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tradingDay'>tradingDay: </label><div class='col-sm-8'><input id='{{id}}_tradingDay' class='form-control' type='text'{{#tradingDay}} value='{{tradingDay}}'{{/tradingDay}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MarketPlan" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_description").value; if ("" != temp) obj.description = temp;
                temp = document.getElementById (id + "_marketPlanID").value; if ("" != temp) obj.marketPlanID = temp;
                temp = document.getElementById (id + "_name").value; if ("" != temp) obj.name = temp;
                temp = document.getElementById (id + "_tradingDay").value; if ("" != temp) obj.tradingDay = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["PlannedMarket", "PlannedMarket", "1..*", "1"]
                    ]
                );
            }
        }

        /**
         * Aggregation of market information relative for a specific time interval.
         *
         */
        class MarketFactors extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MarketFactors;
                if (null == bucket)
                   cim_data.MarketFactors = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketFactors[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "MarketFactors";
                base.parse_element (/<cim:MarketFactors.intervalEndTime>([\s\S]*?)<\/cim:MarketFactors.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketFactors.intervalStartTime>([\s\S]*?)<\/cim:MarketFactors.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MarketFactors.Market\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Market", sub, context);
                base.parse_attributes (/<cim:MarketFactors.MktActivityRecord\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktActivityRecord", sub, context);
                var bucket = context.parsed.MarketFactors;
                if (null == bucket)
                   context.parsed.MarketFactors = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketFactors", "intervalEndTime", "intervalEndTime",  base.from_datetime, fields);
                base.export_element (obj, "MarketFactors", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_attribute (obj, "MarketFactors", "Market", "Market", fields);
                base.export_attributes (obj, "MarketFactors", "MktActivityRecord", "MktActivityRecord", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketFactors_collapse" aria-expanded="true" aria-controls="MarketFactors_collapse" style="margin-left: 10px;">MarketFactors</a></legend>
                    <div id="MarketFactors_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#intervalEndTime}}<div><b>intervalEndTime</b>: {{intervalEndTime}}</div>{{/intervalEndTime}}
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#Market}}<div><b>Market</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Market}}&quot;);})'>{{Market}}</a></div>{{/Market}}
                    {{#MktActivityRecord}}<div><b>MktActivityRecord</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktActivityRecord}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MktActivityRecord) obj.MktActivityRecord_string = obj.MktActivityRecord.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MktActivityRecord_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MarketFactors_collapse" aria-expanded="true" aria-controls="{{id}}_MarketFactors_collapse" style="margin-left: 10px;">MarketFactors</a></legend>
                    <div id="{{id}}_MarketFactors_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalEndTime'>intervalEndTime: </label><div class='col-sm-8'><input id='{{id}}_intervalEndTime' class='form-control' type='text'{{#intervalEndTime}} value='{{intervalEndTime}}'{{/intervalEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='{{id}}_intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Market'>Market: </label><div class='col-sm-8'><input id='{{id}}_Market' class='form-control' type='text'{{#Market}} value='{{Market}}'{{/Market}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktActivityRecord'>MktActivityRecord: </label><div class='col-sm-8'><input id='{{id}}_MktActivityRecord' class='form-control' type='text'{{#MktActivityRecord}} value='{{MktActivityRecord}}_string'{{/MktActivityRecord}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MarketFactors" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intervalEndTime").value; if ("" != temp) obj.intervalEndTime = temp;
                temp = document.getElementById (id + "_intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;
                temp = document.getElementById (id + "_Market").value; if ("" != temp) obj.Market = temp;
                temp = document.getElementById (id + "_MktActivityRecord").value; if ("" != temp) obj.MktActivityRecord = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Market", "Market", "0..1", "0..*"],
                        ["MktActivityRecord", "MktActivityRecord", "0..*", "0..*"]
                    ]
                );
            }
        }

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
                var bucket = cim_data.Market;
                if (null == bucket)
                   cim_data.Market = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Market[obj.id];
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
                base.parse_attributes (/<cim:Market.MarketFactors\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketFactors", sub, context);
                base.parse_attributes (/<cim:Market.MarketRun\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRun", sub, context);
                base.parse_attributes (/<cim:Market.MarketProducts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProducts", sub, context);
                var bucket = context.parsed.Market;
                if (null == bucket)
                   context.parsed.Market = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Market", "actualEnd", "actualEnd",  base.from_datetime, fields);
                base.export_element (obj, "Market", "actualStart", "actualStart",  base.from_datetime, fields);
                base.export_element (obj, "Market", "dst", "dst",  base.from_boolean, fields);
                base.export_element (obj, "Market", "end", "end",  base.from_datetime, fields);
                base.export_element (obj, "Market", "localTimeZone", "localTimeZone",  base.from_string, fields);
                base.export_element (obj, "Market", "start", "start",  base.from_datetime, fields);
                base.export_element (obj, "Market", "status", "status",  base.from_string, fields);
                base.export_element (obj, "Market", "timeIntervalLength", "timeIntervalLength",  base.from_float, fields);
                base.export_element (obj, "Market", "tradingDay", "tradingDay",  base.from_datetime, fields);
                base.export_element (obj, "Market", "tradingPeriod", "tradingPeriod",  base.from_string, fields);
                base.export_attributes (obj, "Market", "MarketFactors", "MarketFactors", fields);
                base.export_attributes (obj, "Market", "MarketRun", "MarketRun", fields);
                base.export_attributes (obj, "Market", "MarketProducts", "MarketProducts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Market_collapse" aria-expanded="true" aria-controls="Market_collapse" style="margin-left: 10px;">Market</a></legend>
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
                    {{#MarketFactors}}<div><b>MarketFactors</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketFactors}}
                    {{#MarketRun}}<div><b>MarketRun</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketRun}}
                    {{#MarketProducts}}<div><b>MarketProducts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketProducts}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MarketFactors) obj.MarketFactors_string = obj.MarketFactors.join ();
                if (obj.MarketRun) obj.MarketRun_string = obj.MarketRun.join ();
                if (obj.MarketProducts) obj.MarketProducts_string = obj.MarketProducts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MarketFactors_string;
                delete obj.MarketRun_string;
                delete obj.MarketProducts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Market_collapse" aria-expanded="true" aria-controls="{{id}}_Market_collapse" style="margin-left: 10px;">Market</a></legend>
                    <div id="{{id}}_Market_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actualEnd'>actualEnd: </label><div class='col-sm-8'><input id='{{id}}_actualEnd' class='form-control' type='text'{{#actualEnd}} value='{{actualEnd}}'{{/actualEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actualStart'>actualStart: </label><div class='col-sm-8'><input id='{{id}}_actualStart' class='form-control' type='text'{{#actualStart}} value='{{actualStart}}'{{/actualStart}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_dst'>dst: </label><div class='col-sm-8'><input id='{{id}}_dst' class='form-check-input' type='checkbox'{{#dst}} checked{{/dst}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_end'>end: </label><div class='col-sm-8'><input id='{{id}}_end' class='form-control' type='text'{{#end}} value='{{end}}'{{/end}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_localTimeZone'>localTimeZone: </label><div class='col-sm-8'><input id='{{id}}_localTimeZone' class='form-control' type='text'{{#localTimeZone}} value='{{localTimeZone}}'{{/localTimeZone}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_start'>start: </label><div class='col-sm-8'><input id='{{id}}_start' class='form-control' type='text'{{#start}} value='{{start}}'{{/start}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeIntervalLength'>timeIntervalLength: </label><div class='col-sm-8'><input id='{{id}}_timeIntervalLength' class='form-control' type='text'{{#timeIntervalLength}} value='{{timeIntervalLength}}'{{/timeIntervalLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tradingDay'>tradingDay: </label><div class='col-sm-8'><input id='{{id}}_tradingDay' class='form-control' type='text'{{#tradingDay}} value='{{tradingDay}}'{{/tradingDay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tradingPeriod'>tradingPeriod: </label><div class='col-sm-8'><input id='{{id}}_tradingPeriod' class='form-control' type='text'{{#tradingPeriod}} value='{{tradingPeriod}}'{{/tradingPeriod}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Market" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_actualEnd").value; if ("" != temp) obj.actualEnd = temp;
                temp = document.getElementById (id + "_actualStart").value; if ("" != temp) obj.actualStart = temp;
                temp = document.getElementById (id + "_dst").checked; if (temp) obj.dst = true;
                temp = document.getElementById (id + "_end").value; if ("" != temp) obj.end = temp;
                temp = document.getElementById (id + "_localTimeZone").value; if ("" != temp) obj.localTimeZone = temp;
                temp = document.getElementById (id + "_start").value; if ("" != temp) obj.start = temp;
                temp = document.getElementById (id + "_status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById (id + "_timeIntervalLength").value; if ("" != temp) obj.timeIntervalLength = temp;
                temp = document.getElementById (id + "_tradingDay").value; if ("" != temp) obj.tradingDay = temp;
                temp = document.getElementById (id + "_tradingPeriod").value; if ("" != temp) obj.tradingPeriod = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MarketFactors", "MarketFactors", "0..*", "0..1"],
                        ["MarketRun", "MarketRun", "0..*", "1"],
                        ["MarketProducts", "MarketProduct", "1..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * This class represent the actual instance of an event.
         *
         */
        class MarketActualEvent extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MarketActualEvent;
                if (null == bucket)
                   cim_data.MarketActualEvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketActualEvent[obj.id];
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

                base.export_element (obj, "MarketActualEvent", "description", "description",  base.from_string, fields);
                base.export_element (obj, "MarketActualEvent", "eventID", "eventID",  base.from_string, fields);
                base.export_element (obj, "MarketActualEvent", "eventTime", "eventTime",  base.from_datetime, fields);
                base.export_attribute (obj, "MarketActualEvent", "PlannedMarketEvent", "PlannedMarketEvent", fields);
                base.export_attribute (obj, "MarketActualEvent", "MarketRun", "MarketRun", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketActualEvent_collapse" aria-expanded="true" aria-controls="MarketActualEvent_collapse" style="margin-left: 10px;">MarketActualEvent</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MarketActualEvent_collapse" aria-expanded="true" aria-controls="{{id}}_MarketActualEvent_collapse" style="margin-left: 10px;">MarketActualEvent</a></legend>
                    <div id="{{id}}_MarketActualEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eventID'>eventID: </label><div class='col-sm-8'><input id='{{id}}_eventID' class='form-control' type='text'{{#eventID}} value='{{eventID}}'{{/eventID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eventTime'>eventTime: </label><div class='col-sm-8'><input id='{{id}}_eventTime' class='form-control' type='text'{{#eventTime}} value='{{eventTime}}'{{/eventTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedMarketEvent'>PlannedMarketEvent: </label><div class='col-sm-8'><input id='{{id}}_PlannedMarketEvent' class='form-control' type='text'{{#PlannedMarketEvent}} value='{{PlannedMarketEvent}}'{{/PlannedMarketEvent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketRun'>MarketRun: </label><div class='col-sm-8'><input id='{{id}}_MarketRun' class='form-control' type='text'{{#MarketRun}} value='{{MarketRun}}'{{/MarketRun}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MarketActualEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_description").value; if ("" != temp) obj.description = temp;
                temp = document.getElementById (id + "_eventID").value; if ("" != temp) obj.eventID = temp;
                temp = document.getElementById (id + "_eventTime").value; if ("" != temp) obj.eventTime = temp;
                temp = document.getElementById (id + "_PlannedMarketEvent").value; if ("" != temp) obj.PlannedMarketEvent = temp;
                temp = document.getElementById (id + "_MarketRun").value; if ("" != temp) obj.MarketRun = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["PlannedMarketEvent", "PlannedMarketEvent", "1", "1..*"],
                        ["MarketRun", "MarketRun", "0..1", "1..*"]
                    ]
                );
            }
        }

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
                var bucket = cim_data.PlannedMarket;
                if (null == bucket)
                   cim_data.PlannedMarket = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PlannedMarket[obj.id];
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
                base.parse_attributes (/<cim:PlannedMarket.PlannedMarketEvent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedMarketEvent", sub, context);
                base.parse_attributes (/<cim:PlannedMarket.MarketRun\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRun", sub, context);
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

                base.export_element (obj, "PlannedMarket", "marketEndTime", "marketEndTime",  base.from_datetime, fields);
                base.export_element (obj, "PlannedMarket", "marketID", "marketID",  base.from_string, fields);
                base.export_element (obj, "PlannedMarket", "marketStartTime", "marketStartTime",  base.from_datetime, fields);
                base.export_element (obj, "PlannedMarket", "marketType", "marketType",  base.from_string, fields);
                base.export_attributes (obj, "PlannedMarket", "PlannedMarketEvent", "PlannedMarketEvent", fields);
                base.export_attributes (obj, "PlannedMarket", "MarketRun", "MarketRun", fields);
                base.export_attribute (obj, "PlannedMarket", "MarketPlan", "MarketPlan", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PlannedMarket_collapse" aria-expanded="true" aria-controls="PlannedMarket_collapse" style="margin-left: 10px;">PlannedMarket</a></legend>
                    <div id="PlannedMarket_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#marketEndTime}}<div><b>marketEndTime</b>: {{marketEndTime}}</div>{{/marketEndTime}}
                    {{#marketID}}<div><b>marketID</b>: {{marketID}}</div>{{/marketID}}
                    {{#marketStartTime}}<div><b>marketStartTime</b>: {{marketStartTime}}</div>{{/marketStartTime}}
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#PlannedMarketEvent}}<div><b>PlannedMarketEvent</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PlannedMarketEvent}}
                    {{#MarketRun}}<div><b>MarketRun</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketRun}}
                    {{#MarketPlan}}<div><b>MarketPlan</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketPlan}}&quot;);})'>{{MarketPlan}}</a></div>{{/MarketPlan}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PlannedMarketEvent) obj.PlannedMarketEvent_string = obj.PlannedMarketEvent.join ();
                if (obj.MarketRun) obj.MarketRun_string = obj.MarketRun.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PlannedMarketEvent_string;
                delete obj.MarketRun_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PlannedMarket_collapse" aria-expanded="true" aria-controls="{{id}}_PlannedMarket_collapse" style="margin-left: 10px;">PlannedMarket</a></legend>
                    <div id="{{id}}_PlannedMarket_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketEndTime'>marketEndTime: </label><div class='col-sm-8'><input id='{{id}}_marketEndTime' class='form-control' type='text'{{#marketEndTime}} value='{{marketEndTime}}'{{/marketEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketID'>marketID: </label><div class='col-sm-8'><input id='{{id}}_marketID' class='form-control' type='text'{{#marketID}} value='{{marketID}}'{{/marketID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketStartTime'>marketStartTime: </label><div class='col-sm-8'><input id='{{id}}_marketStartTime' class='form-control' type='text'{{#marketStartTime}} value='{{marketStartTime}}'{{/marketStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketType'>marketType: </label><div class='col-sm-8'><input id='{{id}}_marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedMarketEvent'>PlannedMarketEvent: </label><div class='col-sm-8'><input id='{{id}}_PlannedMarketEvent' class='form-control' type='text'{{#PlannedMarketEvent}} value='{{PlannedMarketEvent}}_string'{{/PlannedMarketEvent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketPlan'>MarketPlan: </label><div class='col-sm-8'><input id='{{id}}_MarketPlan' class='form-control' type='text'{{#MarketPlan}} value='{{MarketPlan}}'{{/MarketPlan}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PlannedMarket" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_marketEndTime").value; if ("" != temp) obj.marketEndTime = temp;
                temp = document.getElementById (id + "_marketID").value; if ("" != temp) obj.marketID = temp;
                temp = document.getElementById (id + "_marketStartTime").value; if ("" != temp) obj.marketStartTime = temp;
                temp = document.getElementById (id + "_marketType").value; if ("" != temp) obj.marketType = temp;
                temp = document.getElementById (id + "_PlannedMarketEvent").value; if ("" != temp) obj.PlannedMarketEvent = temp.split (",");
                temp = document.getElementById (id + "_MarketPlan").value; if ("" != temp) obj.MarketPlan = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["PlannedMarketEvent", "PlannedMarketEvent", "1..*", "0..*"],
                        ["MarketRun", "MarketRun", "0..*", "1"],
                        ["MarketPlan", "MarketPlan", "1", "1..*"]
                    ]
                );
            }
        }

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
                var bucket = cim_data.MarketRun;
                if (null == bucket)
                   cim_data.MarketRun = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketRun[obj.id];
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
                base.parse_attributes (/<cim:MarketRun.MarketActualEvent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketActualEvent", sub, context);
                var bucket = context.parsed.MarketRun;
                if (null == bucket)
                   context.parsed.MarketRun = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketRun", "executionType", "executionType",  base.from_string, fields);
                base.export_element (obj, "MarketRun", "marketApprovalTime", "marketApprovalTime",  base.from_datetime, fields);
                base.export_element (obj, "MarketRun", "marketApprovedStatus", "marketApprovedStatus",  base.from_boolean, fields);
                base.export_element (obj, "MarketRun", "marketEndTime", "marketEndTime",  base.from_datetime, fields);
                base.export_element (obj, "MarketRun", "marketID", "marketID",  base.from_string, fields);
                base.export_element (obj, "MarketRun", "marketRunID", "marketRunID",  base.from_string, fields);
                base.export_element (obj, "MarketRun", "marketStartTime", "marketStartTime",  base.from_datetime, fields);
                base.export_element (obj, "MarketRun", "marketType", "marketType",  base.from_string, fields);
                base.export_element (obj, "MarketRun", "reportedState", "reportedState",  base.from_string, fields);
                base.export_element (obj, "MarketRun", "runState", "runState",  base.from_string, fields);
                base.export_attribute (obj, "MarketRun", "PlannedMarket", "PlannedMarket", fields);
                base.export_attribute (obj, "MarketRun", "Market", "Market", fields);
                base.export_attributes (obj, "MarketRun", "MarketActualEvent", "MarketActualEvent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketRun_collapse" aria-expanded="true" aria-controls="MarketRun_collapse" style="margin-left: 10px;">MarketRun</a></legend>
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
                    {{#MarketActualEvent}}<div><b>MarketActualEvent</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketActualEvent}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MarketActualEvent) obj.MarketActualEvent_string = obj.MarketActualEvent.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MarketActualEvent_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MarketRun_collapse" aria-expanded="true" aria-controls="{{id}}_MarketRun_collapse" style="margin-left: 10px;">MarketRun</a></legend>
                    <div id="{{id}}_MarketRun_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_executionType'>executionType: </label><div class='col-sm-8'><input id='{{id}}_executionType' class='form-control' type='text'{{#executionType}} value='{{executionType}}'{{/executionType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketApprovalTime'>marketApprovalTime: </label><div class='col-sm-8'><input id='{{id}}_marketApprovalTime' class='form-control' type='text'{{#marketApprovalTime}} value='{{marketApprovalTime}}'{{/marketApprovalTime}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_marketApprovedStatus'>marketApprovedStatus: </label><div class='col-sm-8'><input id='{{id}}_marketApprovedStatus' class='form-check-input' type='checkbox'{{#marketApprovedStatus}} checked{{/marketApprovedStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketEndTime'>marketEndTime: </label><div class='col-sm-8'><input id='{{id}}_marketEndTime' class='form-control' type='text'{{#marketEndTime}} value='{{marketEndTime}}'{{/marketEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketID'>marketID: </label><div class='col-sm-8'><input id='{{id}}_marketID' class='form-control' type='text'{{#marketID}} value='{{marketID}}'{{/marketID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketRunID'>marketRunID: </label><div class='col-sm-8'><input id='{{id}}_marketRunID' class='form-control' type='text'{{#marketRunID}} value='{{marketRunID}}'{{/marketRunID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketStartTime'>marketStartTime: </label><div class='col-sm-8'><input id='{{id}}_marketStartTime' class='form-control' type='text'{{#marketStartTime}} value='{{marketStartTime}}'{{/marketStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketType'>marketType: </label><div class='col-sm-8'><input id='{{id}}_marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reportedState'>reportedState: </label><div class='col-sm-8'><input id='{{id}}_reportedState' class='form-control' type='text'{{#reportedState}} value='{{reportedState}}'{{/reportedState}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_runState'>runState: </label><div class='col-sm-8'><input id='{{id}}_runState' class='form-control' type='text'{{#runState}} value='{{runState}}'{{/runState}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedMarket'>PlannedMarket: </label><div class='col-sm-8'><input id='{{id}}_PlannedMarket' class='form-control' type='text'{{#PlannedMarket}} value='{{PlannedMarket}}'{{/PlannedMarket}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Market'>Market: </label><div class='col-sm-8'><input id='{{id}}_Market' class='form-control' type='text'{{#Market}} value='{{Market}}'{{/Market}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MarketRun" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_executionType").value; if ("" != temp) obj.executionType = temp;
                temp = document.getElementById (id + "_marketApprovalTime").value; if ("" != temp) obj.marketApprovalTime = temp;
                temp = document.getElementById (id + "_marketApprovedStatus").checked; if (temp) obj.marketApprovedStatus = true;
                temp = document.getElementById (id + "_marketEndTime").value; if ("" != temp) obj.marketEndTime = temp;
                temp = document.getElementById (id + "_marketID").value; if ("" != temp) obj.marketID = temp;
                temp = document.getElementById (id + "_marketRunID").value; if ("" != temp) obj.marketRunID = temp;
                temp = document.getElementById (id + "_marketStartTime").value; if ("" != temp) obj.marketStartTime = temp;
                temp = document.getElementById (id + "_marketType").value; if ("" != temp) obj.marketType = temp;
                temp = document.getElementById (id + "_reportedState").value; if ("" != temp) obj.reportedState = temp;
                temp = document.getElementById (id + "_runState").value; if ("" != temp) obj.runState = temp;
                temp = document.getElementById (id + "_PlannedMarket").value; if ("" != temp) obj.PlannedMarket = temp;
                temp = document.getElementById (id + "_Market").value; if ("" != temp) obj.Market = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["PlannedMarket", "PlannedMarket", "1", "0..*"],
                        ["Market", "Market", "1", "0..*"],
                        ["MarketActualEvent", "MarketActualEvent", "1..*", "0..1"]
                    ]
                );
            }
        }

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
                var bucket = cim_data.EnergyMarket;
                if (null == bucket)
                   cim_data.EnergyMarket = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergyMarket[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Market.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyMarket";
                base.parse_attribute (/<cim:EnergyMarket.MarketResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketResults", sub, context);
                base.parse_attribute (/<cim:EnergyMarket.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attributes (/<cim:EnergyMarket.Bids\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bids", sub, context);
                base.parse_attributes (/<cim:EnergyMarket.RegisteredResources\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResources", sub, context);
                base.parse_attributes (/<cim:EnergyMarket.Settlements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Settlements", sub, context);
                var bucket = context.parsed.EnergyMarket;
                if (null == bucket)
                   context.parsed.EnergyMarket = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Market.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnergyMarket", "MarketResults", "MarketResults", fields);
                base.export_attribute (obj, "EnergyMarket", "RTO", "RTO", fields);
                base.export_attributes (obj, "EnergyMarket", "Bids", "Bids", fields);
                base.export_attributes (obj, "EnergyMarket", "RegisteredResources", "RegisteredResources", fields);
                base.export_attributes (obj, "EnergyMarket", "Settlements", "Settlements", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyMarket_collapse" aria-expanded="true" aria-controls="EnergyMarket_collapse" style="margin-left: 10px;">EnergyMarket</a></legend>
                    <div id="EnergyMarket_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Market.prototype.template.call (this) +
                    `
                    {{#MarketResults}}<div><b>MarketResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketResults}}&quot;);})'>{{MarketResults}}</a></div>{{/MarketResults}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
                    {{#Bids}}<div><b>Bids</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Bids}}
                    {{#RegisteredResources}}<div><b>RegisteredResources</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RegisteredResources}}
                    {{#Settlements}}<div><b>Settlements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Settlements}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Bids) obj.Bids_string = obj.Bids.join ();
                if (obj.RegisteredResources) obj.RegisteredResources_string = obj.RegisteredResources.join ();
                if (obj.Settlements) obj.Settlements_string = obj.Settlements.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Bids_string;
                delete obj.RegisteredResources_string;
                delete obj.Settlements_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EnergyMarket_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyMarket_collapse" style="margin-left: 10px;">EnergyMarket</a></legend>
                    <div id="{{id}}_EnergyMarket_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Market.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketResults'>MarketResults: </label><div class='col-sm-8'><input id='{{id}}_MarketResults' class='form-control' type='text'{{#MarketResults}} value='{{MarketResults}}'{{/MarketResults}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResources'>RegisteredResources: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResources' class='form-control' type='text'{{#RegisteredResources}} value='{{RegisteredResources}}_string'{{/RegisteredResources}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EnergyMarket" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MarketResults").value; if ("" != temp) obj.MarketResults = temp;
                temp = document.getElementById (id + "_RTO").value; if ("" != temp) obj.RTO = temp;
                temp = document.getElementById (id + "_RegisteredResources").value; if ("" != temp) obj.RegisteredResources = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MarketResults", "MarketResults", "0..1", "1"],
                        ["RTO", "RTO", "0..1", "0..*"],
                        ["Bids", "Bid", "0..*", "1"],
                        ["RegisteredResources", "RegisteredResource", "0..*", "0..*"],
                        ["Settlements", "Settlement", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Model that describes the Congestion Revenue Rights Auction Market
         *
         */
        class CRRMarket extends Market
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.CRRMarket;
                if (null == bucket)
                   cim_data.CRRMarket = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CRRMarket[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Market.prototype.parse.call (this, context, sub);
                obj.cls = "CRRMarket";
                base.parse_element (/<cim:CRRMarket.labelID>([\s\S]*?)<\/cim:CRRMarket.labelID>/g, obj, "labelID", base.to_string, sub, context);
                base.parse_attributes (/<cim:CRRMarket.CRR\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CRR", sub, context);
                var bucket = context.parsed.CRRMarket;
                if (null == bucket)
                   context.parsed.CRRMarket = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Market.prototype.export.call (this, obj, false);

                base.export_element (obj, "CRRMarket", "labelID", "labelID",  base.from_string, fields);
                base.export_attributes (obj, "CRRMarket", "CRR", "CRR", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CRRMarket_collapse" aria-expanded="true" aria-controls="CRRMarket_collapse" style="margin-left: 10px;">CRRMarket</a></legend>
                    <div id="CRRMarket_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Market.prototype.template.call (this) +
                    `
                    {{#labelID}}<div><b>labelID</b>: {{labelID}}</div>{{/labelID}}
                    {{#CRR}}<div><b>CRR</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CRR}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CRR) obj.CRR_string = obj.CRR.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CRR_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_CRRMarket_collapse" aria-expanded="true" aria-controls="{{id}}_CRRMarket_collapse" style="margin-left: 10px;">CRRMarket</a></legend>
                    <div id="{{id}}_CRRMarket_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Market.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_labelID'>labelID: </label><div class='col-sm-8'><input id='{{id}}_labelID' class='form-control' type='text'{{#labelID}} value='{{labelID}}'{{/labelID}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CRRMarket" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_labelID").value; if ("" != temp) obj.labelID = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CRR", "CRR", "1..*", "1"]
                    ]
                );
            }
        }

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