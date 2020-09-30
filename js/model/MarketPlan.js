define
(
    ["model/base", "model/Common", "model/Core", "model/Domain", "model/MktDomain"],
    /**
     * Market plan definitions for planned markets, planned market events, actual market runs, actual market events.
     *
     */
    function (base, Common, Core, Domain, MktDomain)
    {
        /**
         * Market (e.g.
         *
         * Day Ahead Market, Real Time Market) with a description of the Market operation control parameters.
         *
         */
        class Market extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Market;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
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
                base.parse_attributes (/<cim:Market.MarketFactors\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketFactors", sub, context);
                base.parse_attributes (/<cim:Market.MarketProducts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketProducts", sub, context);
                base.parse_attributes (/<cim:Market.MarketRun\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketRun", sub, context);
                let bucket = context.parsed.Market;
                if (null == bucket)
                   context.parsed.Market = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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
                base.export_attributes (obj, "Market", "MarketProducts", "MarketProducts", fields);
                base.export_attributes (obj, "Market", "MarketRun", "MarketRun", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Market_collapse" aria-expanded="true" aria-controls="Market_collapse" style="margin-left: 10px;">Market</a></legend>
                    <div id="Market_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    {{#MarketFactors}}<div><b>MarketFactors</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketFactors}}
                    {{#MarketProducts}}<div><b>MarketProducts</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketProducts}}
                    {{#MarketRun}}<div><b>MarketRun</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketRun}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketFactors"]) obj["MarketFactors_string"] = obj["MarketFactors"].join ();
                if (obj["MarketProducts"]) obj["MarketProducts_string"] = obj["MarketProducts"].join ();
                if (obj["MarketRun"]) obj["MarketRun_string"] = obj["MarketRun"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketFactors_string"];
                delete obj["MarketProducts_string"];
                delete obj["MarketRun_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Market_collapse" aria-expanded="true" aria-controls="{{id}}_Market_collapse" style="margin-left: 10px;">Market</a></legend>
                    <div id="{{id}}_Market_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actualEnd'>actualEnd: </label><div class='col-sm-8'><input id='{{id}}_actualEnd' class='form-control' type='text'{{#actualEnd}} value='{{actualEnd}}'{{/actualEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actualStart'>actualStart: </label><div class='col-sm-8'><input id='{{id}}_actualStart' class='form-control' type='text'{{#actualStart}} value='{{actualStart}}'{{/actualStart}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_dst'>dst: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_dst' class='form-check-input' type='checkbox'{{#dst}} checked{{/dst}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_end'>end: </label><div class='col-sm-8'><input id='{{id}}_end' class='form-control' type='text'{{#end}} value='{{end}}'{{/end}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_localTimeZone'>localTimeZone: </label><div class='col-sm-8'><input id='{{id}}_localTimeZone' class='form-control' type='text'{{#localTimeZone}} value='{{localTimeZone}}'{{/localTimeZone}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_start'>start: </label><div class='col-sm-8'><input id='{{id}}_start' class='form-control' type='text'{{#start}} value='{{start}}'{{/start}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeIntervalLength'>timeIntervalLength: </label><div class='col-sm-8'><input id='{{id}}_timeIntervalLength' class='form-control' type='text'{{#timeIntervalLength}} value='{{timeIntervalLength}}'{{/timeIntervalLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tradingDay'>tradingDay: </label><div class='col-sm-8'><input id='{{id}}_tradingDay' class='form-control' type='text'{{#tradingDay}} value='{{tradingDay}}'{{/tradingDay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tradingPeriod'>tradingPeriod: </label><div class='col-sm-8'><input id='{{id}}_tradingPeriod' class='form-control' type='text'{{#tradingPeriod}} value='{{tradingPeriod}}'{{/tradingPeriod}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Market" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_actualEnd").value; if ("" !== temp) obj["actualEnd"] = temp;
                temp = document.getElementById (id + "_actualStart").value; if ("" !== temp) obj["actualStart"] = temp;
                temp = document.getElementById (id + "_dst").checked; if (temp) obj["dst"] = true;
                temp = document.getElementById (id + "_end").value; if ("" !== temp) obj["end"] = temp;
                temp = document.getElementById (id + "_localTimeZone").value; if ("" !== temp) obj["localTimeZone"] = temp;
                temp = document.getElementById (id + "_start").value; if ("" !== temp) obj["start"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_timeIntervalLength").value; if ("" !== temp) obj["timeIntervalLength"] = temp;
                temp = document.getElementById (id + "_tradingDay").value; if ("" !== temp) obj["tradingDay"] = temp;
                temp = document.getElementById (id + "_tradingPeriod").value; if ("" !== temp) obj["tradingPeriod"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketFactors", "0..*", "0..1", "MarketFactors", "Market"],
                            ["MarketProducts", "1..*", "0..1", "MarketProduct", "Market"],
                            ["MarketRun", "0..*", "1", "MarketRun", "Market"]
                        ]
                    )
                );
            }
        }

        /**
         * A product traded by an RTO (e.g. energy, 10 minute spinning reserve).
         *
         * Ancillary service product examples include: Regulation, Regulation Up, Regulation Down, Spinning Reserve, Non-Spinning Reserve, etc.
         *
         */
        class MarketProduct extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketProduct;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketProduct";
                base.parse_attribute (/<cim:MarketProduct.marketProductType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "marketProductType", sub, context);
                base.parse_element (/<cim:MarketProduct.rampInterval>([\s\S]*?)<\/cim:MarketProduct.rampInterval>/g, obj, "rampInterval", base.to_float, sub, context);
                base.parse_attributes (/<cim:MarketProduct.CommodityDefinition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CommodityDefinition", sub, context);
                base.parse_attributes (/<cim:MarketProduct.BidError\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BidError", sub, context);
                base.parse_attributes (/<cim:MarketProduct.ReserveReqs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReqs", sub, context);
                base.parse_attributes (/<cim:MarketProduct.ResourceAwardInstruction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceAwardInstruction", sub, context);
                base.parse_attribute (/<cim:MarketProduct.Market\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Market", sub, context);
                base.parse_attributes (/<cim:MarketProduct.BidPriceCap\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BidPriceCap", sub, context);
                base.parse_attributes (/<cim:MarketProduct.ProductBids\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProductBids", sub, context);
                base.parse_attribute (/<cim:MarketProduct.MarketRegionResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketRegionResults", sub, context);
                let bucket = context.parsed.MarketProduct;
                if (null == bucket)
                   context.parsed.MarketProduct = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MarketProduct", "marketProductType", "marketProductType", fields);
                base.export_element (obj, "MarketProduct", "rampInterval", "rampInterval",  base.from_float, fields);
                base.export_attributes (obj, "MarketProduct", "CommodityDefinition", "CommodityDefinition", fields);
                base.export_attributes (obj, "MarketProduct", "BidError", "BidError", fields);
                base.export_attributes (obj, "MarketProduct", "ReserveReqs", "ReserveReqs", fields);
                base.export_attributes (obj, "MarketProduct", "ResourceAwardInstruction", "ResourceAwardInstruction", fields);
                base.export_attribute (obj, "MarketProduct", "Market", "Market", fields);
                base.export_attributes (obj, "MarketProduct", "BidPriceCap", "BidPriceCap", fields);
                base.export_attributes (obj, "MarketProduct", "ProductBids", "ProductBids", fields);
                base.export_attribute (obj, "MarketProduct", "MarketRegionResults", "MarketRegionResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketProduct_collapse" aria-expanded="true" aria-controls="MarketProduct_collapse" style="margin-left: 10px;">MarketProduct</a></legend>
                    <div id="MarketProduct_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#marketProductType}}<div><b>marketProductType</b>: {{marketProductType}}</div>{{/marketProductType}}
                    {{#rampInterval}}<div><b>rampInterval</b>: {{rampInterval}}</div>{{/rampInterval}}
                    {{#CommodityDefinition}}<div><b>CommodityDefinition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CommodityDefinition}}
                    {{#BidError}}<div><b>BidError</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BidError}}
                    {{#ReserveReqs}}<div><b>ReserveReqs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ReserveReqs}}
                    {{#ResourceAwardInstruction}}<div><b>ResourceAwardInstruction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourceAwardInstruction}}
                    {{#Market}}<div><b>Market</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Market}}");}); return false;'>{{Market}}</a></div>{{/Market}}
                    {{#BidPriceCap}}<div><b>BidPriceCap</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BidPriceCap}}
                    {{#ProductBids}}<div><b>ProductBids</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProductBids}}
                    {{#MarketRegionResults}}<div><b>MarketRegionResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MarketRegionResults}}");}); return false;'>{{MarketRegionResults}}</a></div>{{/MarketRegionResults}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["marketProductTypeMarketProductType"] = [{ id: '', selected: (!obj["marketProductType"])}]; for (let property in MktDomain.MarketProductType) obj["marketProductTypeMarketProductType"].push ({ id: property, selected: obj["marketProductType"] && obj["marketProductType"].endsWith ('.' + property)});
                if (obj["CommodityDefinition"]) obj["CommodityDefinition_string"] = obj["CommodityDefinition"].join ();
                if (obj["BidError"]) obj["BidError_string"] = obj["BidError"].join ();
                if (obj["ReserveReqs"]) obj["ReserveReqs_string"] = obj["ReserveReqs"].join ();
                if (obj["ResourceAwardInstruction"]) obj["ResourceAwardInstruction_string"] = obj["ResourceAwardInstruction"].join ();
                if (obj["BidPriceCap"]) obj["BidPriceCap_string"] = obj["BidPriceCap"].join ();
                if (obj["ProductBids"]) obj["ProductBids_string"] = obj["ProductBids"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["marketProductTypeMarketProductType"];
                delete obj["CommodityDefinition_string"];
                delete obj["BidError_string"];
                delete obj["ReserveReqs_string"];
                delete obj["ResourceAwardInstruction_string"];
                delete obj["BidPriceCap_string"];
                delete obj["ProductBids_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketProduct_collapse" aria-expanded="true" aria-controls="{{id}}_MarketProduct_collapse" style="margin-left: 10px;">MarketProduct</a></legend>
                    <div id="{{id}}_MarketProduct_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketProductType'>marketProductType: </label><div class='col-sm-8'><select id='{{id}}_marketProductType' class='form-control custom-select'>{{#marketProductTypeMarketProductType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/marketProductTypeMarketProductType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rampInterval'>rampInterval: </label><div class='col-sm-8'><input id='{{id}}_rampInterval' class='form-control' type='text'{{#rampInterval}} value='{{rampInterval}}'{{/rampInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Market'>Market: </label><div class='col-sm-8'><input id='{{id}}_Market' class='form-control' type='text'{{#Market}} value='{{Market}}'{{/Market}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketRegionResults'>MarketRegionResults: </label><div class='col-sm-8'><input id='{{id}}_MarketRegionResults' class='form-control' type='text'{{#MarketRegionResults}} value='{{MarketRegionResults}}'{{/MarketRegionResults}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketProduct" };
                super.submit (id, obj);
                temp = MktDomain.MarketProductType[document.getElementById (id + "_marketProductType").value]; if (temp) obj["marketProductType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#MarketProductType." + temp; else delete obj["marketProductType"];
                temp = document.getElementById (id + "_rampInterval").value; if ("" !== temp) obj["rampInterval"] = temp;
                temp = document.getElementById (id + "_Market").value; if ("" !== temp) obj["Market"] = temp;
                temp = document.getElementById (id + "_MarketRegionResults").value; if ("" !== temp) obj["MarketRegionResults"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CommodityDefinition", "0..*", "1", "CommodityDefinition", "MarketProduct"],
                            ["BidError", "0..*", "0..1", "BidError", "MarketProduct"],
                            ["ReserveReqs", "0..*", "1", "ReserveReq", "MarketProduct"],
                            ["ResourceAwardInstruction", "0..*", "1", "ResourceAwardInstruction", "MarketProduct"],
                            ["Market", "0..1", "1..*", "Market", "MarketProducts"],
                            ["BidPriceCap", "0..*", "0..1", "BidPriceCap", "MarketProduct"],
                            ["ProductBids", "0..*", "1", "ProductBid", "MarketProduct"],
                            ["MarketRegionResults", "0..1", "0..1", "MarketRegionResults", "MarketProduct"]
                        ]
                    )
                );
            }
        }

        /**
         * This class represents the actual instance of an event.
         *
         */
        class MarketActualEvent extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketActualEvent;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketActualEvent";
                base.parse_element (/<cim:MarketActualEvent.eventComments>([\s\S]*?)<\/cim:MarketActualEvent.eventComments>/g, obj, "eventComments", base.to_string, sub, context);
                base.parse_element (/<cim:MarketActualEvent.eventEndTime>([\s\S]*?)<\/cim:MarketActualEvent.eventEndTime>/g, obj, "eventEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketActualEvent.eventStartTime>([\s\S]*?)<\/cim:MarketActualEvent.eventStartTime>/g, obj, "eventStartTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MarketActualEvent.eventStatus\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "eventStatus", sub, context);
                base.parse_element (/<cim:MarketActualEvent.eventType>([\s\S]*?)<\/cim:MarketActualEvent.eventType>/g, obj, "eventType", base.to_string, sub, context);
                base.parse_attribute (/<cim:MarketActualEvent.MarketRun\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketRun", sub, context);
                base.parse_attribute (/<cim:MarketActualEvent.PlannedMarketEvent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PlannedMarketEvent", sub, context);
                let bucket = context.parsed.MarketActualEvent;
                if (null == bucket)
                   context.parsed.MarketActualEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketActualEvent", "eventComments", "eventComments",  base.from_string, fields);
                base.export_element (obj, "MarketActualEvent", "eventEndTime", "eventEndTime",  base.from_datetime, fields);
                base.export_element (obj, "MarketActualEvent", "eventStartTime", "eventStartTime",  base.from_datetime, fields);
                base.export_attribute (obj, "MarketActualEvent", "eventStatus", "eventStatus", fields);
                base.export_element (obj, "MarketActualEvent", "eventType", "eventType",  base.from_string, fields);
                base.export_attribute (obj, "MarketActualEvent", "MarketRun", "MarketRun", fields);
                base.export_attribute (obj, "MarketActualEvent", "PlannedMarketEvent", "PlannedMarketEvent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketActualEvent_collapse" aria-expanded="true" aria-controls="MarketActualEvent_collapse" style="margin-left: 10px;">MarketActualEvent</a></legend>
                    <div id="MarketActualEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#eventComments}}<div><b>eventComments</b>: {{eventComments}}</div>{{/eventComments}}
                    {{#eventEndTime}}<div><b>eventEndTime</b>: {{eventEndTime}}</div>{{/eventEndTime}}
                    {{#eventStartTime}}<div><b>eventStartTime</b>: {{eventStartTime}}</div>{{/eventStartTime}}
                    {{#eventStatus}}<div><b>eventStatus</b>: {{eventStatus}}</div>{{/eventStatus}}
                    {{#eventType}}<div><b>eventType</b>: {{eventType}}</div>{{/eventType}}
                    {{#MarketRun}}<div><b>MarketRun</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MarketRun}}");}); return false;'>{{MarketRun}}</a></div>{{/MarketRun}}
                    {{#PlannedMarketEvent}}<div><b>PlannedMarketEvent</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PlannedMarketEvent}}");}); return false;'>{{PlannedMarketEvent}}</a></div>{{/PlannedMarketEvent}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["eventStatusMarketEventStatusKind"] = [{ id: '', selected: (!obj["eventStatus"])}]; for (let property in MktDomain.MarketEventStatusKind) obj["eventStatusMarketEventStatusKind"].push ({ id: property, selected: obj["eventStatus"] && obj["eventStatus"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["eventStatusMarketEventStatusKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketActualEvent_collapse" aria-expanded="true" aria-controls="{{id}}_MarketActualEvent_collapse" style="margin-left: 10px;">MarketActualEvent</a></legend>
                    <div id="{{id}}_MarketActualEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eventComments'>eventComments: </label><div class='col-sm-8'><input id='{{id}}_eventComments' class='form-control' type='text'{{#eventComments}} value='{{eventComments}}'{{/eventComments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eventEndTime'>eventEndTime: </label><div class='col-sm-8'><input id='{{id}}_eventEndTime' class='form-control' type='text'{{#eventEndTime}} value='{{eventEndTime}}'{{/eventEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eventStartTime'>eventStartTime: </label><div class='col-sm-8'><input id='{{id}}_eventStartTime' class='form-control' type='text'{{#eventStartTime}} value='{{eventStartTime}}'{{/eventStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eventStatus'>eventStatus: </label><div class='col-sm-8'><select id='{{id}}_eventStatus' class='form-control custom-select'>{{#eventStatusMarketEventStatusKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/eventStatusMarketEventStatusKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eventType'>eventType: </label><div class='col-sm-8'><input id='{{id}}_eventType' class='form-control' type='text'{{#eventType}} value='{{eventType}}'{{/eventType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketRun'>MarketRun: </label><div class='col-sm-8'><input id='{{id}}_MarketRun' class='form-control' type='text'{{#MarketRun}} value='{{MarketRun}}'{{/MarketRun}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedMarketEvent'>PlannedMarketEvent: </label><div class='col-sm-8'><input id='{{id}}_PlannedMarketEvent' class='form-control' type='text'{{#PlannedMarketEvent}} value='{{PlannedMarketEvent}}'{{/PlannedMarketEvent}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketActualEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_eventComments").value; if ("" !== temp) obj["eventComments"] = temp;
                temp = document.getElementById (id + "_eventEndTime").value; if ("" !== temp) obj["eventEndTime"] = temp;
                temp = document.getElementById (id + "_eventStartTime").value; if ("" !== temp) obj["eventStartTime"] = temp;
                temp = MktDomain.MarketEventStatusKind[document.getElementById (id + "_eventStatus").value]; if (temp) obj["eventStatus"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#MarketEventStatusKind." + temp; else delete obj["eventStatus"];
                temp = document.getElementById (id + "_eventType").value; if ("" !== temp) obj["eventType"] = temp;
                temp = document.getElementById (id + "_MarketRun").value; if ("" !== temp) obj["MarketRun"] = temp;
                temp = document.getElementById (id + "_PlannedMarketEvent").value; if ("" !== temp) obj["PlannedMarketEvent"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketRun", "0..1", "1..*", "MarketRun", "MarketActualEvent"],
                            ["PlannedMarketEvent", "0..1", "1..*", "PlannedMarketEvent", "MarketActualEvent"]
                        ]
                    )
                );
            }
        }

        /**
         * This class represents an actual instance of a planned market.
         *
         * For example, a Day Ahead market opens with the Bid Submission, ends with the closing of the Bid Submission. The market run represent the whole process. MarketRuns can be defined for markets such as Day Ahead Market, Real Time Market, Hour Ahead Market, Week Ahead Market, etc.
         *
         */
        class MarketRun extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketRun;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketRun";
                base.parse_attribute (/<cim:MarketRun.executionType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "executionType", sub, context);
                base.parse_element (/<cim:MarketRun.marketApprovalTime>([\s\S]*?)<\/cim:MarketRun.marketApprovalTime>/g, obj, "marketApprovalTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketRun.marketApprovedStatus>([\s\S]*?)<\/cim:MarketRun.marketApprovedStatus>/g, obj, "marketApprovedStatus", base.to_boolean, sub, context);
                base.parse_element (/<cim:MarketRun.marketEndTime>([\s\S]*?)<\/cim:MarketRun.marketEndTime>/g, obj, "marketEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketRun.marketStartTime>([\s\S]*?)<\/cim:MarketRun.marketStartTime>/g, obj, "marketStartTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MarketRun.marketType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "marketType", sub, context);
                base.parse_element (/<cim:MarketRun.reportedState>([\s\S]*?)<\/cim:MarketRun.reportedState>/g, obj, "reportedState", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRun.runState>([\s\S]*?)<\/cim:MarketRun.runState>/g, obj, "runState", base.to_string, sub, context);
                base.parse_attributes (/<cim:MarketRun.MarketActualEvent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketActualEvent", sub, context);
                base.parse_attribute (/<cim:MarketRun.PlannedMarket\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PlannedMarket", sub, context);
                base.parse_attribute (/<cim:MarketRun.Market\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Market", sub, context);
                let bucket = context.parsed.MarketRun;
                if (null == bucket)
                   context.parsed.MarketRun = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MarketRun", "executionType", "executionType", fields);
                base.export_element (obj, "MarketRun", "marketApprovalTime", "marketApprovalTime",  base.from_datetime, fields);
                base.export_element (obj, "MarketRun", "marketApprovedStatus", "marketApprovedStatus",  base.from_boolean, fields);
                base.export_element (obj, "MarketRun", "marketEndTime", "marketEndTime",  base.from_datetime, fields);
                base.export_element (obj, "MarketRun", "marketStartTime", "marketStartTime",  base.from_datetime, fields);
                base.export_attribute (obj, "MarketRun", "marketType", "marketType", fields);
                base.export_element (obj, "MarketRun", "reportedState", "reportedState",  base.from_string, fields);
                base.export_element (obj, "MarketRun", "runState", "runState",  base.from_string, fields);
                base.export_attributes (obj, "MarketRun", "MarketActualEvent", "MarketActualEvent", fields);
                base.export_attribute (obj, "MarketRun", "PlannedMarket", "PlannedMarket", fields);
                base.export_attribute (obj, "MarketRun", "Market", "Market", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketRun_collapse" aria-expanded="true" aria-controls="MarketRun_collapse" style="margin-left: 10px;">MarketRun</a></legend>
                    <div id="MarketRun_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#executionType}}<div><b>executionType</b>: {{executionType}}</div>{{/executionType}}
                    {{#marketApprovalTime}}<div><b>marketApprovalTime</b>: {{marketApprovalTime}}</div>{{/marketApprovalTime}}
                    {{#marketApprovedStatus}}<div><b>marketApprovedStatus</b>: {{marketApprovedStatus}}</div>{{/marketApprovedStatus}}
                    {{#marketEndTime}}<div><b>marketEndTime</b>: {{marketEndTime}}</div>{{/marketEndTime}}
                    {{#marketStartTime}}<div><b>marketStartTime</b>: {{marketStartTime}}</div>{{/marketStartTime}}
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#reportedState}}<div><b>reportedState</b>: {{reportedState}}</div>{{/reportedState}}
                    {{#runState}}<div><b>runState</b>: {{runState}}</div>{{/runState}}
                    {{#MarketActualEvent}}<div><b>MarketActualEvent</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketActualEvent}}
                    {{#PlannedMarket}}<div><b>PlannedMarket</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PlannedMarket}}");}); return false;'>{{PlannedMarket}}</a></div>{{/PlannedMarket}}
                    {{#Market}}<div><b>Market</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Market}}");}); return false;'>{{Market}}</a></div>{{/Market}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["executionTypeExecutionType"] = [{ id: '', selected: (!obj["executionType"])}]; for (let property in MktDomain.ExecutionType) obj["executionTypeExecutionType"].push ({ id: property, selected: obj["executionType"] && obj["executionType"].endsWith ('.' + property)});
                obj["marketTypeMarketType"] = [{ id: '', selected: (!obj["marketType"])}]; for (let property in MktDomain.MarketType) obj["marketTypeMarketType"].push ({ id: property, selected: obj["marketType"] && obj["marketType"].endsWith ('.' + property)});
                if (obj["MarketActualEvent"]) obj["MarketActualEvent_string"] = obj["MarketActualEvent"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["executionTypeExecutionType"];
                delete obj["marketTypeMarketType"];
                delete obj["MarketActualEvent_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketRun_collapse" aria-expanded="true" aria-controls="{{id}}_MarketRun_collapse" style="margin-left: 10px;">MarketRun</a></legend>
                    <div id="{{id}}_MarketRun_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_executionType'>executionType: </label><div class='col-sm-8'><select id='{{id}}_executionType' class='form-control custom-select'>{{#executionTypeExecutionType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/executionTypeExecutionType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketApprovalTime'>marketApprovalTime: </label><div class='col-sm-8'><input id='{{id}}_marketApprovalTime' class='form-control' type='text'{{#marketApprovalTime}} value='{{marketApprovalTime}}'{{/marketApprovalTime}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_marketApprovedStatus'>marketApprovedStatus: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_marketApprovedStatus' class='form-check-input' type='checkbox'{{#marketApprovedStatus}} checked{{/marketApprovedStatus}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketEndTime'>marketEndTime: </label><div class='col-sm-8'><input id='{{id}}_marketEndTime' class='form-control' type='text'{{#marketEndTime}} value='{{marketEndTime}}'{{/marketEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketStartTime'>marketStartTime: </label><div class='col-sm-8'><input id='{{id}}_marketStartTime' class='form-control' type='text'{{#marketStartTime}} value='{{marketStartTime}}'{{/marketStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketType'>marketType: </label><div class='col-sm-8'><select id='{{id}}_marketType' class='form-control custom-select'>{{#marketTypeMarketType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/marketTypeMarketType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reportedState'>reportedState: </label><div class='col-sm-8'><input id='{{id}}_reportedState' class='form-control' type='text'{{#reportedState}} value='{{reportedState}}'{{/reportedState}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_runState'>runState: </label><div class='col-sm-8'><input id='{{id}}_runState' class='form-control' type='text'{{#runState}} value='{{runState}}'{{/runState}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedMarket'>PlannedMarket: </label><div class='col-sm-8'><input id='{{id}}_PlannedMarket' class='form-control' type='text'{{#PlannedMarket}} value='{{PlannedMarket}}'{{/PlannedMarket}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Market'>Market: </label><div class='col-sm-8'><input id='{{id}}_Market' class='form-control' type='text'{{#Market}} value='{{Market}}'{{/Market}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketRun" };
                super.submit (id, obj);
                temp = MktDomain.ExecutionType[document.getElementById (id + "_executionType").value]; if (temp) obj["executionType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#ExecutionType." + temp; else delete obj["executionType"];
                temp = document.getElementById (id + "_marketApprovalTime").value; if ("" !== temp) obj["marketApprovalTime"] = temp;
                temp = document.getElementById (id + "_marketApprovedStatus").checked; if (temp) obj["marketApprovedStatus"] = true;
                temp = document.getElementById (id + "_marketEndTime").value; if ("" !== temp) obj["marketEndTime"] = temp;
                temp = document.getElementById (id + "_marketStartTime").value; if ("" !== temp) obj["marketStartTime"] = temp;
                temp = MktDomain.MarketType[document.getElementById (id + "_marketType").value]; if (temp) obj["marketType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#MarketType." + temp; else delete obj["marketType"];
                temp = document.getElementById (id + "_reportedState").value; if ("" !== temp) obj["reportedState"] = temp;
                temp = document.getElementById (id + "_runState").value; if ("" !== temp) obj["runState"] = temp;
                temp = document.getElementById (id + "_PlannedMarket").value; if ("" !== temp) obj["PlannedMarket"] = temp;
                temp = document.getElementById (id + "_Market").value; if ("" !== temp) obj["Market"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketActualEvent", "1..*", "0..1", "MarketActualEvent", "MarketRun"],
                            ["PlannedMarket", "1", "0..*", "PlannedMarket", "MarketRun"],
                            ["Market", "1", "0..*", "Market", "MarketRun"]
                        ]
                    )
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
                let bucket = cim_data.MarketFactors;
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
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "MarketFactors";
                base.parse_element (/<cim:MarketFactors.intervalEndTime>([\s\S]*?)<\/cim:MarketFactors.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketFactors.intervalStartTime>([\s\S]*?)<\/cim:MarketFactors.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:MarketFactors.MktActivityRecord\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktActivityRecord", sub, context);
                base.parse_attribute (/<cim:MarketFactors.Market\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Market", sub, context);
                let bucket = context.parsed.MarketFactors;
                if (null == bucket)
                   context.parsed.MarketFactors = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketFactors", "intervalEndTime", "intervalEndTime",  base.from_datetime, fields);
                base.export_element (obj, "MarketFactors", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_attributes (obj, "MarketFactors", "MktActivityRecord", "MktActivityRecord", fields);
                base.export_attribute (obj, "MarketFactors", "Market", "Market", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketFactors_collapse" aria-expanded="true" aria-controls="MarketFactors_collapse" style="margin-left: 10px;">MarketFactors</a></legend>
                    <div id="MarketFactors_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#intervalEndTime}}<div><b>intervalEndTime</b>: {{intervalEndTime}}</div>{{/intervalEndTime}}
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#MktActivityRecord}}<div><b>MktActivityRecord</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MktActivityRecord}}
                    {{#Market}}<div><b>Market</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Market}}");}); return false;'>{{Market}}</a></div>{{/Market}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MktActivityRecord"]) obj["MktActivityRecord_string"] = obj["MktActivityRecord"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MktActivityRecord_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketFactors_collapse" aria-expanded="true" aria-controls="{{id}}_MarketFactors_collapse" style="margin-left: 10px;">MarketFactors</a></legend>
                    <div id="{{id}}_MarketFactors_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalEndTime'>intervalEndTime: </label><div class='col-sm-8'><input id='{{id}}_intervalEndTime' class='form-control' type='text'{{#intervalEndTime}} value='{{intervalEndTime}}'{{/intervalEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='{{id}}_intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktActivityRecord'>MktActivityRecord: </label><div class='col-sm-8'><input id='{{id}}_MktActivityRecord' class='form-control' type='text'{{#MktActivityRecord}} value='{{MktActivityRecord_string}}'{{/MktActivityRecord}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Market'>Market: </label><div class='col-sm-8'><input id='{{id}}_Market' class='form-control' type='text'{{#Market}} value='{{Market}}'{{/Market}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketFactors" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intervalEndTime").value; if ("" !== temp) obj["intervalEndTime"] = temp;
                temp = document.getElementById (id + "_intervalStartTime").value; if ("" !== temp) obj["intervalStartTime"] = temp;
                temp = document.getElementById (id + "_MktActivityRecord").value; if ("" !== temp) obj["MktActivityRecord"] = temp.split (",");
                temp = document.getElementById (id + "_Market").value; if ("" !== temp) obj["Market"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktActivityRecord", "0..*", "0..*", "MktActivityRecord", "MarketFactors"],
                            ["Market", "0..1", "0..*", "Market", "MarketFactors"]
                        ]
                    )
                );
            }
        }

        /**
         * Represent a planned market.
         *
         * For example a planned DA/HA/RT market.
         *
         */
        class PlannedMarket extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PlannedMarket;
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
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PlannedMarket";
                base.parse_element (/<cim:PlannedMarket.marketEndTime>([\s\S]*?)<\/cim:PlannedMarket.marketEndTime>/g, obj, "marketEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:PlannedMarket.marketStartTime>([\s\S]*?)<\/cim:PlannedMarket.marketStartTime>/g, obj, "marketStartTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:PlannedMarket.marketType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "marketType", sub, context);
                base.parse_attribute (/<cim:PlannedMarket.MarketPlan\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketPlan", sub, context);
                base.parse_attributes (/<cim:PlannedMarket.MarketRun\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketRun", sub, context);
                base.parse_attributes (/<cim:PlannedMarket.PlannedMarketEvent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PlannedMarketEvent", sub, context);
                let bucket = context.parsed.PlannedMarket;
                if (null == bucket)
                   context.parsed.PlannedMarket = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "PlannedMarket", "marketEndTime", "marketEndTime",  base.from_datetime, fields);
                base.export_element (obj, "PlannedMarket", "marketStartTime", "marketStartTime",  base.from_datetime, fields);
                base.export_attribute (obj, "PlannedMarket", "marketType", "marketType", fields);
                base.export_attribute (obj, "PlannedMarket", "MarketPlan", "MarketPlan", fields);
                base.export_attributes (obj, "PlannedMarket", "MarketRun", "MarketRun", fields);
                base.export_attributes (obj, "PlannedMarket", "PlannedMarketEvent", "PlannedMarketEvent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PlannedMarket_collapse" aria-expanded="true" aria-controls="PlannedMarket_collapse" style="margin-left: 10px;">PlannedMarket</a></legend>
                    <div id="PlannedMarket_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#marketEndTime}}<div><b>marketEndTime</b>: {{marketEndTime}}</div>{{/marketEndTime}}
                    {{#marketStartTime}}<div><b>marketStartTime</b>: {{marketStartTime}}</div>{{/marketStartTime}}
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#MarketPlan}}<div><b>MarketPlan</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MarketPlan}}");}); return false;'>{{MarketPlan}}</a></div>{{/MarketPlan}}
                    {{#MarketRun}}<div><b>MarketRun</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketRun}}
                    {{#PlannedMarketEvent}}<div><b>PlannedMarketEvent</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PlannedMarketEvent}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["marketTypeMarketType"] = [{ id: '', selected: (!obj["marketType"])}]; for (let property in MktDomain.MarketType) obj["marketTypeMarketType"].push ({ id: property, selected: obj["marketType"] && obj["marketType"].endsWith ('.' + property)});
                if (obj["MarketRun"]) obj["MarketRun_string"] = obj["MarketRun"].join ();
                if (obj["PlannedMarketEvent"]) obj["PlannedMarketEvent_string"] = obj["PlannedMarketEvent"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["marketTypeMarketType"];
                delete obj["MarketRun_string"];
                delete obj["PlannedMarketEvent_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PlannedMarket_collapse" aria-expanded="true" aria-controls="{{id}}_PlannedMarket_collapse" style="margin-left: 10px;">PlannedMarket</a></legend>
                    <div id="{{id}}_PlannedMarket_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketEndTime'>marketEndTime: </label><div class='col-sm-8'><input id='{{id}}_marketEndTime' class='form-control' type='text'{{#marketEndTime}} value='{{marketEndTime}}'{{/marketEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketStartTime'>marketStartTime: </label><div class='col-sm-8'><input id='{{id}}_marketStartTime' class='form-control' type='text'{{#marketStartTime}} value='{{marketStartTime}}'{{/marketStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketType'>marketType: </label><div class='col-sm-8'><select id='{{id}}_marketType' class='form-control custom-select'>{{#marketTypeMarketType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/marketTypeMarketType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketPlan'>MarketPlan: </label><div class='col-sm-8'><input id='{{id}}_MarketPlan' class='form-control' type='text'{{#MarketPlan}} value='{{MarketPlan}}'{{/MarketPlan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedMarketEvent'>PlannedMarketEvent: </label><div class='col-sm-8'><input id='{{id}}_PlannedMarketEvent' class='form-control' type='text'{{#PlannedMarketEvent}} value='{{PlannedMarketEvent_string}}'{{/PlannedMarketEvent}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PlannedMarket" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_marketEndTime").value; if ("" !== temp) obj["marketEndTime"] = temp;
                temp = document.getElementById (id + "_marketStartTime").value; if ("" !== temp) obj["marketStartTime"] = temp;
                temp = MktDomain.MarketType[document.getElementById (id + "_marketType").value]; if (temp) obj["marketType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#MarketType." + temp; else delete obj["marketType"];
                temp = document.getElementById (id + "_MarketPlan").value; if ("" !== temp) obj["MarketPlan"] = temp;
                temp = document.getElementById (id + "_PlannedMarketEvent").value; if ("" !== temp) obj["PlannedMarketEvent"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketPlan", "1", "1..*", "MarketPlan", "PlannedMarket"],
                            ["MarketRun", "0..*", "1", "MarketRun", "PlannedMarket"],
                            ["PlannedMarketEvent", "1..*", "0..*", "PlannedMarketEvent", "PlannedMarket"]
                        ]
                    )
                );
            }
        }

        /**
         * Commodities in the context of IEC 62325 are MarketProducts (energy, regulation, reserve, etc) traded at a specific location, which in this case is a Pnode (either a specific pricing node or a pricing area or zone defined as a collection of pricing nodes).
         *
         * The CommodityDefinition is a container for these two parameters, plus the unit of measure and the currency in which the Commodity is traded.  Each CommodityDefinition should be relatively static; defined once and rarely changed.
         *
         */
        class CommodityDefinition extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CommodityDefinition;
                if (null == bucket)
                   cim_data.CommodityDefinition = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CommodityDefinition[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CommodityDefinition";
                base.parse_attribute (/<cim:CommodityDefinition.commodityCurrency\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "commodityCurrency", sub, context);
                base.parse_attribute (/<cim:CommodityDefinition.commodityUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "commodityUnit", sub, context);
                base.parse_attribute (/<cim:CommodityDefinition.commodityUnitMultiplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "commodityUnitMultiplier", sub, context);
                base.parse_attribute (/<cim:CommodityDefinition.MarketProduct\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);
                base.parse_attributes (/<cim:CommodityDefinition.CommodityPrice\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CommodityPrice", sub, context);
                base.parse_attribute (/<cim:CommodityDefinition.Pnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                base.parse_attribute (/<cim:CommodityDefinition.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                let bucket = context.parsed.CommodityDefinition;
                if (null == bucket)
                   context.parsed.CommodityDefinition = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CommodityDefinition", "commodityCurrency", "commodityCurrency", fields);
                base.export_attribute (obj, "CommodityDefinition", "commodityUnit", "commodityUnit", fields);
                base.export_attribute (obj, "CommodityDefinition", "commodityUnitMultiplier", "commodityUnitMultiplier", fields);
                base.export_attribute (obj, "CommodityDefinition", "MarketProduct", "MarketProduct", fields);
                base.export_attributes (obj, "CommodityDefinition", "CommodityPrice", "CommodityPrice", fields);
                base.export_attribute (obj, "CommodityDefinition", "Pnode", "Pnode", fields);
                base.export_attribute (obj, "CommodityDefinition", "RTO", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CommodityDefinition_collapse" aria-expanded="true" aria-controls="CommodityDefinition_collapse" style="margin-left: 10px;">CommodityDefinition</a></legend>
                    <div id="CommodityDefinition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#commodityCurrency}}<div><b>commodityCurrency</b>: {{commodityCurrency}}</div>{{/commodityCurrency}}
                    {{#commodityUnit}}<div><b>commodityUnit</b>: {{commodityUnit}}</div>{{/commodityUnit}}
                    {{#commodityUnitMultiplier}}<div><b>commodityUnitMultiplier</b>: {{commodityUnitMultiplier}}</div>{{/commodityUnitMultiplier}}
                    {{#MarketProduct}}<div><b>MarketProduct</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MarketProduct}}");}); return false;'>{{MarketProduct}}</a></div>{{/MarketProduct}}
                    {{#CommodityPrice}}<div><b>CommodityPrice</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CommodityPrice}}
                    {{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Pnode}}");}); return false;'>{{Pnode}}</a></div>{{/Pnode}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["commodityCurrencyCurrency"] = [{ id: '', selected: (!obj["commodityCurrency"])}]; for (let property in Domain.Currency) obj["commodityCurrencyCurrency"].push ({ id: property, selected: obj["commodityCurrency"] && obj["commodityCurrency"].endsWith ('.' + property)});
                obj["commodityUnitUnitSymbol"] = [{ id: '', selected: (!obj["commodityUnit"])}]; for (let property in Domain.UnitSymbol) obj["commodityUnitUnitSymbol"].push ({ id: property, selected: obj["commodityUnit"] && obj["commodityUnit"].endsWith ('.' + property)});
                obj["commodityUnitMultiplierUnitMultiplier"] = [{ id: '', selected: (!obj["commodityUnitMultiplier"])}]; for (let property in Domain.UnitMultiplier) obj["commodityUnitMultiplierUnitMultiplier"].push ({ id: property, selected: obj["commodityUnitMultiplier"] && obj["commodityUnitMultiplier"].endsWith ('.' + property)});
                if (obj["CommodityPrice"]) obj["CommodityPrice_string"] = obj["CommodityPrice"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["commodityCurrencyCurrency"];
                delete obj["commodityUnitUnitSymbol"];
                delete obj["commodityUnitMultiplierUnitMultiplier"];
                delete obj["CommodityPrice_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CommodityDefinition_collapse" aria-expanded="true" aria-controls="{{id}}_CommodityDefinition_collapse" style="margin-left: 10px;">CommodityDefinition</a></legend>
                    <div id="{{id}}_CommodityDefinition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_commodityCurrency'>commodityCurrency: </label><div class='col-sm-8'><select id='{{id}}_commodityCurrency' class='form-control custom-select'>{{#commodityCurrencyCurrency}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/commodityCurrencyCurrency}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_commodityUnit'>commodityUnit: </label><div class='col-sm-8'><select id='{{id}}_commodityUnit' class='form-control custom-select'>{{#commodityUnitUnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/commodityUnitUnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_commodityUnitMultiplier'>commodityUnitMultiplier: </label><div class='col-sm-8'><select id='{{id}}_commodityUnitMultiplier' class='form-control custom-select'>{{#commodityUnitMultiplierUnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/commodityUnitMultiplierUnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketProduct'>MarketProduct: </label><div class='col-sm-8'><input id='{{id}}_MarketProduct' class='form-control' type='text'{{#MarketProduct}} value='{{MarketProduct}}'{{/MarketProduct}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Pnode'>Pnode: </label><div class='col-sm-8'><input id='{{id}}_Pnode' class='form-control' type='text'{{#Pnode}} value='{{Pnode}}'{{/Pnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CommodityDefinition" };
                super.submit (id, obj);
                temp = Domain.Currency[document.getElementById (id + "_commodityCurrency").value]; if (temp) obj["commodityCurrency"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#Currency." + temp; else delete obj["commodityCurrency"];
                temp = Domain.UnitSymbol[document.getElementById (id + "_commodityUnit").value]; if (temp) obj["commodityUnit"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#UnitSymbol." + temp; else delete obj["commodityUnit"];
                temp = Domain.UnitMultiplier[document.getElementById (id + "_commodityUnitMultiplier").value]; if (temp) obj["commodityUnitMultiplier"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#UnitMultiplier." + temp; else delete obj["commodityUnitMultiplier"];
                temp = document.getElementById (id + "_MarketProduct").value; if ("" !== temp) obj["MarketProduct"] = temp;
                temp = document.getElementById (id + "_Pnode").value; if ("" !== temp) obj["Pnode"] = temp;
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketProduct", "1", "0..*", "MarketProduct", "CommodityDefinition"],
                            ["CommodityPrice", "1..*", "1", "CommodityPrice", "CommodityDefinition"],
                            ["Pnode", "1", "0..*", "Pnode", "CommodityDefinition"],
                            ["RTO", "1", "0..*", "RTO", "CommodityDefinition"]
                        ]
                    )
                );
            }
        }

        /**
         * This class represents planned events.
         *
         * Used to model the various planned events in a market (closing time, clearing time, etc.)
         *
         */
        class PlannedMarketEvent extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PlannedMarketEvent;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PlannedMarketEvent";
                base.parse_element (/<cim:PlannedMarketEvent.eventType>([\s\S]*?)<\/cim:PlannedMarketEvent.eventType>/g, obj, "eventType", base.to_string, sub, context);
                base.parse_element (/<cim:PlannedMarketEvent.plannedTime>([\s\S]*?)<\/cim:PlannedMarketEvent.plannedTime>/g, obj, "plannedTime", base.to_string, sub, context);
                base.parse_attributes (/<cim:PlannedMarketEvent.PlannedMarket\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PlannedMarket", sub, context);
                base.parse_attributes (/<cim:PlannedMarketEvent.MarketActualEvent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketActualEvent", sub, context);
                let bucket = context.parsed.PlannedMarketEvent;
                if (null == bucket)
                   context.parsed.PlannedMarketEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "PlannedMarketEvent", "eventType", "eventType",  base.from_string, fields);
                base.export_element (obj, "PlannedMarketEvent", "plannedTime", "plannedTime",  base.from_string, fields);
                base.export_attributes (obj, "PlannedMarketEvent", "PlannedMarket", "PlannedMarket", fields);
                base.export_attributes (obj, "PlannedMarketEvent", "MarketActualEvent", "MarketActualEvent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PlannedMarketEvent_collapse" aria-expanded="true" aria-controls="PlannedMarketEvent_collapse" style="margin-left: 10px;">PlannedMarketEvent</a></legend>
                    <div id="PlannedMarketEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#eventType}}<div><b>eventType</b>: {{eventType}}</div>{{/eventType}}
                    {{#plannedTime}}<div><b>plannedTime</b>: {{plannedTime}}</div>{{/plannedTime}}
                    {{#PlannedMarket}}<div><b>PlannedMarket</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PlannedMarket}}
                    {{#MarketActualEvent}}<div><b>MarketActualEvent</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketActualEvent}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["PlannedMarket"]) obj["PlannedMarket_string"] = obj["PlannedMarket"].join ();
                if (obj["MarketActualEvent"]) obj["MarketActualEvent_string"] = obj["MarketActualEvent"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["PlannedMarket_string"];
                delete obj["MarketActualEvent_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PlannedMarketEvent_collapse" aria-expanded="true" aria-controls="{{id}}_PlannedMarketEvent_collapse" style="margin-left: 10px;">PlannedMarketEvent</a></legend>
                    <div id="{{id}}_PlannedMarketEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eventType'>eventType: </label><div class='col-sm-8'><input id='{{id}}_eventType' class='form-control' type='text'{{#eventType}} value='{{eventType}}'{{/eventType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plannedTime'>plannedTime: </label><div class='col-sm-8'><input id='{{id}}_plannedTime' class='form-control' type='text'{{#plannedTime}} value='{{plannedTime}}'{{/plannedTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedMarket'>PlannedMarket: </label><div class='col-sm-8'><input id='{{id}}_PlannedMarket' class='form-control' type='text'{{#PlannedMarket}} value='{{PlannedMarket_string}}'{{/PlannedMarket}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PlannedMarketEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_eventType").value; if ("" !== temp) obj["eventType"] = temp;
                temp = document.getElementById (id + "_plannedTime").value; if ("" !== temp) obj["plannedTime"] = temp;
                temp = document.getElementById (id + "_PlannedMarket").value; if ("" !== temp) obj["PlannedMarket"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PlannedMarket", "0..*", "1..*", "PlannedMarket", "PlannedMarketEvent"],
                            ["MarketActualEvent", "1..*", "0..1", "MarketActualEvent", "PlannedMarketEvent"]
                        ]
                    )
                );
            }
        }

        /**
         * This class identifies a set of planned markets.
         *
         */
        class MarketPlan extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketPlan;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketPlan";
                base.parse_element (/<cim:MarketPlan.tradingDay>([\s\S]*?)<\/cim:MarketPlan.tradingDay>/g, obj, "tradingDay", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:MarketPlan.PlannedMarket\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PlannedMarket", sub, context);
                let bucket = context.parsed.MarketPlan;
                if (null == bucket)
                   context.parsed.MarketPlan = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketPlan", "tradingDay", "tradingDay",  base.from_datetime, fields);
                base.export_attributes (obj, "MarketPlan", "PlannedMarket", "PlannedMarket", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketPlan_collapse" aria-expanded="true" aria-controls="MarketPlan_collapse" style="margin-left: 10px;">MarketPlan</a></legend>
                    <div id="MarketPlan_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#tradingDay}}<div><b>tradingDay</b>: {{tradingDay}}</div>{{/tradingDay}}
                    {{#PlannedMarket}}<div><b>PlannedMarket</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PlannedMarket}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["PlannedMarket"]) obj["PlannedMarket_string"] = obj["PlannedMarket"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["PlannedMarket_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketPlan_collapse" aria-expanded="true" aria-controls="{{id}}_MarketPlan_collapse" style="margin-left: 10px;">MarketPlan</a></legend>
                    <div id="{{id}}_MarketPlan_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tradingDay'>tradingDay: </label><div class='col-sm-8'><input id='{{id}}_tradingDay' class='form-control' type='text'{{#tradingDay}} value='{{tradingDay}}'{{/tradingDay}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketPlan" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_tradingDay").value; if ("" !== temp) obj["tradingDay"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PlannedMarket", "1..*", "1", "PlannedMarket", "MarketPlan"]
                        ]
                    )
                );
            }
        }

        /**
         * Model that describes the Congestion Revenue Rights Auction Market.
         *
         */
        class CRRMarket extends Market
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CRRMarket;
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
                let obj = Market.prototype.parse.call (this, context, sub);
                obj.cls = "CRRMarket";
                base.parse_element (/<cim:CRRMarket.labelID>([\s\S]*?)<\/cim:CRRMarket.labelID>/g, obj, "labelID", base.to_string, sub, context);
                base.parse_attributes (/<cim:CRRMarket.CongestionRevenueRight\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CongestionRevenueRight", sub, context);
                let bucket = context.parsed.CRRMarket;
                if (null == bucket)
                   context.parsed.CRRMarket = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Market.prototype.export.call (this, obj, false);

                base.export_element (obj, "CRRMarket", "labelID", "labelID",  base.from_string, fields);
                base.export_attributes (obj, "CRRMarket", "CongestionRevenueRight", "CongestionRevenueRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CRRMarket_collapse" aria-expanded="true" aria-controls="CRRMarket_collapse" style="margin-left: 10px;">CRRMarket</a></legend>
                    <div id="CRRMarket_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Market.prototype.template.call (this) +
                    `
                    {{#labelID}}<div><b>labelID</b>: {{labelID}}</div>{{/labelID}}
                    {{#CongestionRevenueRight}}<div><b>CongestionRevenueRight</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CongestionRevenueRight}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CongestionRevenueRight"]) obj["CongestionRevenueRight_string"] = obj["CongestionRevenueRight"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CongestionRevenueRight_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CRRMarket_collapse" aria-expanded="true" aria-controls="{{id}}_CRRMarket_collapse" style="margin-left: 10px;">CRRMarket</a></legend>
                    <div id="{{id}}_CRRMarket_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Market.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_labelID'>labelID: </label><div class='col-sm-8'><input id='{{id}}_labelID' class='form-control' type='text'{{#labelID}} value='{{labelID}}'{{/labelID}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CRRMarket" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_labelID").value; if ("" !== temp) obj["labelID"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CongestionRevenueRight", "1..*", "1", "CongestionRevenueRight", "CRRMarket"]
                        ]
                    )
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
                let bucket = cim_data.EnergyMarket;
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
                let obj = Market.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyMarket";
                base.parse_attribute (/<cim:EnergyMarket.MarketResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketResults", sub, context);
                base.parse_attribute (/<cim:EnergyMarket.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attributes (/<cim:EnergyMarket.Bids\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Bids", sub, context);
                base.parse_attributes (/<cim:EnergyMarket.Settlements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Settlements", sub, context);
                base.parse_attributes (/<cim:EnergyMarket.RegisteredResources\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResources", sub, context);
                let bucket = context.parsed.EnergyMarket;
                if (null == bucket)
                   context.parsed.EnergyMarket = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Market.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnergyMarket", "MarketResults", "MarketResults", fields);
                base.export_attribute (obj, "EnergyMarket", "RTO", "RTO", fields);
                base.export_attributes (obj, "EnergyMarket", "Bids", "Bids", fields);
                base.export_attributes (obj, "EnergyMarket", "Settlements", "Settlements", fields);
                base.export_attributes (obj, "EnergyMarket", "RegisteredResources", "RegisteredResources", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergyMarket_collapse" aria-expanded="true" aria-controls="EnergyMarket_collapse" style="margin-left: 10px;">EnergyMarket</a></legend>
                    <div id="EnergyMarket_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Market.prototype.template.call (this) +
                    `
                    {{#MarketResults}}<div><b>MarketResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MarketResults}}");}); return false;'>{{MarketResults}}</a></div>{{/MarketResults}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RTO}}");}); return false;'>{{RTO}}</a></div>{{/RTO}}
                    {{#Bids}}<div><b>Bids</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Bids}}
                    {{#Settlements}}<div><b>Settlements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Settlements}}
                    {{#RegisteredResources}}<div><b>RegisteredResources</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResources}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Bids"]) obj["Bids_string"] = obj["Bids"].join ();
                if (obj["Settlements"]) obj["Settlements_string"] = obj["Settlements"].join ();
                if (obj["RegisteredResources"]) obj["RegisteredResources_string"] = obj["RegisteredResources"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Bids_string"];
                delete obj["Settlements_string"];
                delete obj["RegisteredResources_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergyMarket_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyMarket_collapse" style="margin-left: 10px;">EnergyMarket</a></legend>
                    <div id="{{id}}_EnergyMarket_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Market.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketResults'>MarketResults: </label><div class='col-sm-8'><input id='{{id}}_MarketResults' class='form-control' type='text'{{#MarketResults}} value='{{MarketResults}}'{{/MarketResults}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResources'>RegisteredResources: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResources' class='form-control' type='text'{{#RegisteredResources}} value='{{RegisteredResources_string}}'{{/RegisteredResources}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnergyMarket" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MarketResults").value; if ("" !== temp) obj["MarketResults"] = temp;
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;
                temp = document.getElementById (id + "_RegisteredResources").value; if ("" !== temp) obj["RegisteredResources"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketResults", "0..1", "1", "MarketResults", "EnergyMarket"],
                            ["RTO", "0..1", "0..*", "RTO", "EnergyMarkets"],
                            ["Bids", "0..*", "1", "Bid", "EnergyMarket"],
                            ["Settlements", "0..*", "0..1", "Settlement", "EnergyMarket"],
                            ["RegisteredResources", "0..*", "0..*", "RegisteredResource", "EnergyMarkets"]
                        ]
                    )
                );
            }
        }

        /**
         * A demand response event is created when there is a need to call upon resources to respond to demand adjustment requests.
         *
         * These events are created by ISO/RTO system operations and managed  by a demand response management system (DRMS). These events may or may not be coordinated with the Market Events and a defined Energy Market. The event will call for the deployment of a number of registered resources, or for deployment of resources within a zone (an organizational area within the power system that contains a number of resources).
         *
         */
        class DistributedResourceActualEvent extends MarketActualEvent
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DistributedResourceActualEvent;
                if (null == bucket)
                   cim_data.DistributedResourceActualEvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DistributedResourceActualEvent[obj.id];
            }

            parse (context, sub)
            {
                let obj = MarketActualEvent.prototype.parse.call (this, context, sub);
                obj.cls = "DistributedResourceActualEvent";
                base.parse_element (/<cim:DistributedResourceActualEvent.totalPowerAdjustment>([\s\S]*?)<\/cim:DistributedResourceActualEvent.totalPowerAdjustment>/g, obj, "totalPowerAdjustment", base.to_string, sub, context);
                base.parse_attributes (/<cim:DistributedResourceActualEvent.InstructionClearing\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InstructionClearing", sub, context);
                base.parse_attributes (/<cim:DistributedResourceActualEvent.InstructionClearingDOT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InstructionClearingDOT", sub, context);
                base.parse_attributes (/<cim:DistributedResourceActualEvent.ResourcePerformanceEvaluations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourcePerformanceEvaluations", sub, context);
                let bucket = context.parsed.DistributedResourceActualEvent;
                if (null == bucket)
                   context.parsed.DistributedResourceActualEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = MarketActualEvent.prototype.export.call (this, obj, false);

                base.export_element (obj, "DistributedResourceActualEvent", "totalPowerAdjustment", "totalPowerAdjustment",  base.from_string, fields);
                base.export_attributes (obj, "DistributedResourceActualEvent", "InstructionClearing", "InstructionClearing", fields);
                base.export_attributes (obj, "DistributedResourceActualEvent", "InstructionClearingDOT", "InstructionClearingDOT", fields);
                base.export_attributes (obj, "DistributedResourceActualEvent", "ResourcePerformanceEvaluations", "ResourcePerformanceEvaluations", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DistributedResourceActualEvent_collapse" aria-expanded="true" aria-controls="DistributedResourceActualEvent_collapse" style="margin-left: 10px;">DistributedResourceActualEvent</a></legend>
                    <div id="DistributedResourceActualEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketActualEvent.prototype.template.call (this) +
                    `
                    {{#totalPowerAdjustment}}<div><b>totalPowerAdjustment</b>: {{totalPowerAdjustment}}</div>{{/totalPowerAdjustment}}
                    {{#InstructionClearing}}<div><b>InstructionClearing</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InstructionClearing}}
                    {{#InstructionClearingDOT}}<div><b>InstructionClearingDOT</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InstructionClearingDOT}}
                    {{#ResourcePerformanceEvaluations}}<div><b>ResourcePerformanceEvaluations</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourcePerformanceEvaluations}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["InstructionClearing"]) obj["InstructionClearing_string"] = obj["InstructionClearing"].join ();
                if (obj["InstructionClearingDOT"]) obj["InstructionClearingDOT_string"] = obj["InstructionClearingDOT"].join ();
                if (obj["ResourcePerformanceEvaluations"]) obj["ResourcePerformanceEvaluations_string"] = obj["ResourcePerformanceEvaluations"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["InstructionClearing_string"];
                delete obj["InstructionClearingDOT_string"];
                delete obj["ResourcePerformanceEvaluations_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DistributedResourceActualEvent_collapse" aria-expanded="true" aria-controls="{{id}}_DistributedResourceActualEvent_collapse" style="margin-left: 10px;">DistributedResourceActualEvent</a></legend>
                    <div id="{{id}}_DistributedResourceActualEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketActualEvent.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_totalPowerAdjustment'>totalPowerAdjustment: </label><div class='col-sm-8'><input id='{{id}}_totalPowerAdjustment' class='form-control' type='text'{{#totalPowerAdjustment}} value='{{totalPowerAdjustment}}'{{/totalPowerAdjustment}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DistributedResourceActualEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_totalPowerAdjustment").value; if ("" !== temp) obj["totalPowerAdjustment"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["InstructionClearing", "0..*", "0..1", "InstructionClearing", "ActualDemandResponseEvent"],
                            ["InstructionClearingDOT", "0..*", "0..1", "InstructionClearingDOT", "DemandResponseActualEvent"],
                            ["ResourcePerformanceEvaluations", "0..*", "1", "ResourcePerformanceEvaluation", "DemandResponseActualEvent"]
                        ]
                    )
                );
            }
        }

        return (
            {
                CRRMarket: CRRMarket,
                DistributedResourceActualEvent: DistributedResourceActualEvent,
                MarketPlan: MarketPlan,
                EnergyMarket: EnergyMarket,
                Market: Market,
                MarketActualEvent: MarketActualEvent,
                MarketProduct: MarketProduct,
                MarketFactors: MarketFactors,
                PlannedMarketEvent: PlannedMarketEvent,
                CommodityDefinition: CommodityDefinition,
                MarketRun: MarketRun,
                PlannedMarket: PlannedMarket
            }
        );
    }
);