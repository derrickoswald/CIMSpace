define
(
    ["model/base", "model/Common", "model/Core", "model/Metering"],
    /**
     * This package contains all core CIM Market Extensions required for market management systems.
     *
     */
    function (base, Common, Core, Metering)
    {
        /**
         * Duration constraint to activate, to put in operation, to deactivate, ... a given event.
         *
         */
        class ConstraintDuration extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ConstraintDuration;
                if (null == bucket)
                   cim_data.ConstraintDuration = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConstraintDuration[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ConstraintDuration";
                base.parse_element (/<cim:ConstraintDuration.duration>([\s\S]*?)<\/cim:ConstraintDuration.duration>/g, obj, "duration", base.to_string, sub, context);
                base.parse_element (/<cim:ConstraintDuration.type>([\s\S]*?)<\/cim:ConstraintDuration.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:ConstraintDuration.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                let bucket = context.parsed.ConstraintDuration;
                if (null == bucket)
                   context.parsed.ConstraintDuration = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "ConstraintDuration", "duration", "duration",  base.from_string, fields);
                base.export_element (obj, "ConstraintDuration", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "ConstraintDuration", "TimeSeries", "TimeSeries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ConstraintDuration_collapse" aria-expanded="true" aria-controls="ConstraintDuration_collapse" style="margin-left: 10px;">ConstraintDuration</a></legend>
                    <div id="ConstraintDuration_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#duration}}<div><b>duration</b>: {{duration}}</div>{{/duration}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TimeSeries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ConstraintDuration_collapse" aria-expanded="true" aria-controls="{{id}}_ConstraintDuration_collapse" style="margin-left: 10px;">ConstraintDuration</a></legend>
                    <div id="{{id}}_ConstraintDuration_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_duration'>duration: </label><div class='col-sm-8'><input id='{{id}}_duration' class='form-control' type='text'{{#duration}} value='{{duration}}'{{/duration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ConstraintDuration" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_duration").value; if ("" !== temp) obj["duration"] = temp;
                temp = document.getElementById (id + "_type").value; if ("" !== temp) obj["type"] = temp;
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "ConstraintDuration"]
                        ]
                    )
                );
            }
        }

        /**
         * The cost corresponding to a specific measure and expressed in a currency.
         *
         */
        class Price extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Price;
                if (null == bucket)
                   cim_data.Price = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Price[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Price";
                base.parse_element (/<cim:Price.amount>([\s\S]*?)<\/cim:Price.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:Price.category>([\s\S]*?)<\/cim:Price.category>/g, obj, "category", base.to_string, sub, context);
                base.parse_element (/<cim:Price.direction>([\s\S]*?)<\/cim:Price.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_attributes (/<cim:Price.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                base.parse_attribute (/<cim:Price.Point\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Point", sub, context);
                base.parse_attributes (/<cim:Price.Domain\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Domain", sub, context);
                let bucket = context.parsed.Price;
                if (null == bucket)
                   context.parsed.Price = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "Price", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "Price", "category", "category",  base.from_string, fields);
                base.export_element (obj, "Price", "direction", "direction",  base.from_string, fields);
                base.export_attributes (obj, "Price", "TimeSeries", "TimeSeries", fields);
                base.export_attribute (obj, "Price", "Point", "Point", fields);
                base.export_attributes (obj, "Price", "Domain", "Domain", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Price_collapse" aria-expanded="true" aria-controls="Price_collapse" style="margin-left: 10px;">Price</a></legend>
                    <div id="Price_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#category}}<div><b>category</b>: {{category}}</div>{{/category}}
                    {{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    {{#Point}}<div><b>Point</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Point}}");}); return false;'>{{Point}}</a></div>{{/Point}}
                    {{#Domain}}<div><b>Domain</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Domain}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
                if (obj["Domain"]) obj["Domain_string"] = obj["Domain"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TimeSeries_string"];
                delete obj["Domain_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Price_collapse" aria-expanded="true" aria-controls="{{id}}_Price_collapse" style="margin-left: 10px;">Price</a></legend>
                    <div id="{{id}}_Price_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amount'>amount: </label><div class='col-sm-8'><input id='{{id}}_amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_category'>category: </label><div class='col-sm-8'><input id='{{id}}_category' class='form-control' type='text'{{#category}} value='{{category}}'{{/category}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_direction'>direction: </label><div class='col-sm-8'><input id='{{id}}_direction' class='form-control' type='text'{{#direction}} value='{{direction}}'{{/direction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Point'>Point: </label><div class='col-sm-8'><input id='{{id}}_Point' class='form-control' type='text'{{#Point}} value='{{Point}}'{{/Point}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Domain'>Domain: </label><div class='col-sm-8'><input id='{{id}}_Domain' class='form-control' type='text'{{#Domain}} value='{{Domain_string}}'{{/Domain}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Price" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_amount").value; if ("" !== temp) obj["amount"] = temp;
                temp = document.getElementById (id + "_category").value; if ("" !== temp) obj["category"] = temp;
                temp = document.getElementById (id + "_direction").value; if ("" !== temp) obj["direction"] = temp;
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");
                temp = document.getElementById (id + "_Point").value; if ("" !== temp) obj["Point"] = temp;
                temp = document.getElementById (id + "_Domain").value; if ("" !== temp) obj["Domain"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "Price"],
                            ["Point", "0..1", "0..*", "Point", "Price"],
                            ["Domain", "0..*", "0..*", "Domain", "Price"]
                        ]
                    )
                );
            }
        }

        /**
         * A class providing the identification and type of an auction.
         *
         */
        class Auction extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Auction;
                if (null == bucket)
                   cim_data.Auction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Auction[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Auction";
                base.parse_element (/<cim:Auction.allocationMode>([\s\S]*?)<\/cim:Auction.allocationMode>/g, obj, "allocationMode", base.to_string, sub, context);
                base.parse_element (/<cim:Auction.cancelled>([\s\S]*?)<\/cim:Auction.cancelled>/g, obj, "cancelled", base.to_string, sub, context);
                base.parse_element (/<cim:Auction.category>([\s\S]*?)<\/cim:Auction.category>/g, obj, "category", base.to_string, sub, context);
                base.parse_element (/<cim:Auction.paymentTerms>([\s\S]*?)<\/cim:Auction.paymentTerms>/g, obj, "paymentTerms", base.to_string, sub, context);
                base.parse_element (/<cim:Auction.rights>([\s\S]*?)<\/cim:Auction.rights>/g, obj, "rights", base.to_string, sub, context);
                base.parse_element (/<cim:Auction.type>([\s\S]*?)<\/cim:Auction.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:Auction.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                let bucket = context.parsed.Auction;
                if (null == bucket)
                   context.parsed.Auction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Auction", "allocationMode", "allocationMode",  base.from_string, fields);
                base.export_element (obj, "Auction", "cancelled", "cancelled",  base.from_string, fields);
                base.export_element (obj, "Auction", "category", "category",  base.from_string, fields);
                base.export_element (obj, "Auction", "paymentTerms", "paymentTerms",  base.from_string, fields);
                base.export_element (obj, "Auction", "rights", "rights",  base.from_string, fields);
                base.export_element (obj, "Auction", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "Auction", "TimeSeries", "TimeSeries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Auction_collapse" aria-expanded="true" aria-controls="Auction_collapse" style="margin-left: 10px;">Auction</a></legend>
                    <div id="Auction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#allocationMode}}<div><b>allocationMode</b>: {{allocationMode}}</div>{{/allocationMode}}
                    {{#cancelled}}<div><b>cancelled</b>: {{cancelled}}</div>{{/cancelled}}
                    {{#category}}<div><b>category</b>: {{category}}</div>{{/category}}
                    {{#paymentTerms}}<div><b>paymentTerms</b>: {{paymentTerms}}</div>{{/paymentTerms}}
                    {{#rights}}<div><b>rights</b>: {{rights}}</div>{{/rights}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TimeSeries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Auction_collapse" aria-expanded="true" aria-controls="{{id}}_Auction_collapse" style="margin-left: 10px;">Auction</a></legend>
                    <div id="{{id}}_Auction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_allocationMode'>allocationMode: </label><div class='col-sm-8'><input id='{{id}}_allocationMode' class='form-control' type='text'{{#allocationMode}} value='{{allocationMode}}'{{/allocationMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cancelled'>cancelled: </label><div class='col-sm-8'><input id='{{id}}_cancelled' class='form-control' type='text'{{#cancelled}} value='{{cancelled}}'{{/cancelled}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_category'>category: </label><div class='col-sm-8'><input id='{{id}}_category' class='form-control' type='text'{{#category}} value='{{category}}'{{/category}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_paymentTerms'>paymentTerms: </label><div class='col-sm-8'><input id='{{id}}_paymentTerms' class='form-control' type='text'{{#paymentTerms}} value='{{paymentTerms}}'{{/paymentTerms}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rights'>rights: </label><div class='col-sm-8'><input id='{{id}}_rights' class='form-control' type='text'{{#rights}} value='{{rights}}'{{/rights}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Auction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_allocationMode").value; if ("" !== temp) obj["allocationMode"] = temp;
                temp = document.getElementById (id + "_cancelled").value; if ("" !== temp) obj["cancelled"] = temp;
                temp = document.getElementById (id + "_category").value; if ("" !== temp) obj["category"] = temp;
                temp = document.getElementById (id + "_paymentTerms").value; if ("" !== temp) obj["paymentTerms"] = temp;
                temp = document.getElementById (id + "_rights").value; if ("" !== temp) obj["rights"] = temp;
                temp = document.getElementById (id + "_type").value; if ("" !== temp) obj["type"] = temp;
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "Auction"]
                        ]
                    )
                );
            }
        }

        /**
         * The condition or position of an object with regard to its standing.
         *
         */
        class MarketObjectStatus extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketObjectStatus;
                if (null == bucket)
                   cim_data.MarketObjectStatus = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketObjectStatus[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketObjectStatus";
                base.parse_element (/<cim:MarketObjectStatus.status>([\s\S]*?)<\/cim:MarketObjectStatus.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:MarketObjectStatus.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attributes (/<cim:MarketObjectStatus.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                let bucket = context.parsed.MarketObjectStatus;
                if (null == bucket)
                   context.parsed.MarketObjectStatus = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "MarketObjectStatus", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "MarketObjectStatus", "RegisteredResource", "RegisteredResource", fields);
                base.export_attributes (obj, "MarketObjectStatus", "TimeSeries", "TimeSeries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketObjectStatus_collapse" aria-expanded="true" aria-controls="MarketObjectStatus_collapse" style="margin-left: 10px;">MarketObjectStatus</a></legend>
                    <div id="MarketObjectStatus_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["RegisteredResource_string"];
                delete obj["TimeSeries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketObjectStatus_collapse" aria-expanded="true" aria-controls="{{id}}_MarketObjectStatus_collapse" style="margin-left: 10px;">MarketObjectStatus</a></legend>
                    <div id="{{id}}_MarketObjectStatus_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource_string}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketObjectStatus" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp.split (",");
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "0..*", "0..*", "RegisteredResource", "MarketObjectStatus"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "MarketObjectStatus"]
                        ]
                    )
                );
            }
        }

        /**
         * Electronic document containing the information necessary to satisfy a given business process set of requirements.
         *
         */
        class MarketDocument extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketDocument;
                if (null == bucket)
                   cim_data.MarketDocument = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketDocument[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "MarketDocument";
                base.parse_attributes (/<cim:MarketDocument.Reason\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Reason", sub, context);
                base.parse_attributes (/<cim:MarketDocument.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                base.parse_attributes (/<cim:MarketDocument.Period\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Period", sub, context);
                base.parse_attributes (/<cim:MarketDocument.DateAndOrTime\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DateAndOrTime", sub, context);
                base.parse_attributes (/<cim:MarketDocument.Process\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Process", sub, context);
                base.parse_attributes (/<cim:MarketDocument.AttributeInstanceComponent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AttributeInstanceComponent", sub, context);
                base.parse_attributes (/<cim:MarketDocument.SelfMarketDocument\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SelfMarketDocument", sub, context);
                base.parse_attributes (/<cim:MarketDocument.MarketDocument\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketDocument", sub, context);
                base.parse_attributes (/<cim:MarketDocument.MarketParticipant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketParticipant", sub, context);
                base.parse_attributes (/<cim:MarketDocument.Domain\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Domain", sub, context);
                base.parse_attributes (/<cim:MarketDocument.AceTariffType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AceTariffType", sub, context);
                let bucket = context.parsed.MarketDocument;
                if (null == bucket)
                   context.parsed.MarketDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MarketDocument", "Reason", "Reason", fields);
                base.export_attributes (obj, "MarketDocument", "TimeSeries", "TimeSeries", fields);
                base.export_attributes (obj, "MarketDocument", "Period", "Period", fields);
                base.export_attributes (obj, "MarketDocument", "DateAndOrTime", "DateAndOrTime", fields);
                base.export_attributes (obj, "MarketDocument", "Process", "Process", fields);
                base.export_attributes (obj, "MarketDocument", "AttributeInstanceComponent", "AttributeInstanceComponent", fields);
                base.export_attributes (obj, "MarketDocument", "SelfMarketDocument", "SelfMarketDocument", fields);
                base.export_attributes (obj, "MarketDocument", "MarketDocument", "MarketDocument", fields);
                base.export_attributes (obj, "MarketDocument", "MarketParticipant", "MarketParticipant", fields);
                base.export_attributes (obj, "MarketDocument", "Domain", "Domain", fields);
                base.export_attributes (obj, "MarketDocument", "AceTariffType", "AceTariffType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketDocument_collapse" aria-expanded="true" aria-controls="MarketDocument_collapse" style="margin-left: 10px;">MarketDocument</a></legend>
                    <div id="MarketDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#Reason}}<div><b>Reason</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Reason}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    {{#Period}}<div><b>Period</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Period}}
                    {{#DateAndOrTime}}<div><b>DateAndOrTime</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DateAndOrTime}}
                    {{#Process}}<div><b>Process</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Process}}
                    {{#AttributeInstanceComponent}}<div><b>AttributeInstanceComponent</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AttributeInstanceComponent}}
                    {{#SelfMarketDocument}}<div><b>SelfMarketDocument</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SelfMarketDocument}}
                    {{#MarketDocument}}<div><b>MarketDocument</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketDocument}}
                    {{#MarketParticipant}}<div><b>MarketParticipant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketParticipant}}
                    {{#Domain}}<div><b>Domain</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Domain}}
                    {{#AceTariffType}}<div><b>AceTariffType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AceTariffType}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Reason"]) obj["Reason_string"] = obj["Reason"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
                if (obj["Period"]) obj["Period_string"] = obj["Period"].join ();
                if (obj["DateAndOrTime"]) obj["DateAndOrTime_string"] = obj["DateAndOrTime"].join ();
                if (obj["Process"]) obj["Process_string"] = obj["Process"].join ();
                if (obj["AttributeInstanceComponent"]) obj["AttributeInstanceComponent_string"] = obj["AttributeInstanceComponent"].join ();
                if (obj["SelfMarketDocument"]) obj["SelfMarketDocument_string"] = obj["SelfMarketDocument"].join ();
                if (obj["MarketDocument"]) obj["MarketDocument_string"] = obj["MarketDocument"].join ();
                if (obj["MarketParticipant"]) obj["MarketParticipant_string"] = obj["MarketParticipant"].join ();
                if (obj["Domain"]) obj["Domain_string"] = obj["Domain"].join ();
                if (obj["AceTariffType"]) obj["AceTariffType_string"] = obj["AceTariffType"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Reason_string"];
                delete obj["TimeSeries_string"];
                delete obj["Period_string"];
                delete obj["DateAndOrTime_string"];
                delete obj["Process_string"];
                delete obj["AttributeInstanceComponent_string"];
                delete obj["SelfMarketDocument_string"];
                delete obj["MarketDocument_string"];
                delete obj["MarketParticipant_string"];
                delete obj["Domain_string"];
                delete obj["AceTariffType_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketDocument_collapse" aria-expanded="true" aria-controls="{{id}}_MarketDocument_collapse" style="margin-left: 10px;">MarketDocument</a></legend>
                    <div id="{{id}}_MarketDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Reason'>Reason: </label><div class='col-sm-8'><input id='{{id}}_Reason' class='form-control' type='text'{{#Reason}} value='{{Reason_string}}'{{/Reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Period'>Period: </label><div class='col-sm-8'><input id='{{id}}_Period' class='form-control' type='text'{{#Period}} value='{{Period_string}}'{{/Period}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DateAndOrTime'>DateAndOrTime: </label><div class='col-sm-8'><input id='{{id}}_DateAndOrTime' class='form-control' type='text'{{#DateAndOrTime}} value='{{DateAndOrTime_string}}'{{/DateAndOrTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Process'>Process: </label><div class='col-sm-8'><input id='{{id}}_Process' class='form-control' type='text'{{#Process}} value='{{Process_string}}'{{/Process}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AttributeInstanceComponent'>AttributeInstanceComponent: </label><div class='col-sm-8'><input id='{{id}}_AttributeInstanceComponent' class='form-control' type='text'{{#AttributeInstanceComponent}} value='{{AttributeInstanceComponent_string}}'{{/AttributeInstanceComponent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SelfMarketDocument'>SelfMarketDocument: </label><div class='col-sm-8'><input id='{{id}}_SelfMarketDocument' class='form-control' type='text'{{#SelfMarketDocument}} value='{{SelfMarketDocument_string}}'{{/SelfMarketDocument}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketDocument'>MarketDocument: </label><div class='col-sm-8'><input id='{{id}}_MarketDocument' class='form-control' type='text'{{#MarketDocument}} value='{{MarketDocument_string}}'{{/MarketDocument}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketParticipant'>MarketParticipant: </label><div class='col-sm-8'><input id='{{id}}_MarketParticipant' class='form-control' type='text'{{#MarketParticipant}} value='{{MarketParticipant_string}}'{{/MarketParticipant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Domain'>Domain: </label><div class='col-sm-8'><input id='{{id}}_Domain' class='form-control' type='text'{{#Domain}} value='{{Domain_string}}'{{/Domain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AceTariffType'>AceTariffType: </label><div class='col-sm-8'><input id='{{id}}_AceTariffType' class='form-control' type='text'{{#AceTariffType}} value='{{AceTariffType_string}}'{{/AceTariffType}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketDocument" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Reason").value; if ("" !== temp) obj["Reason"] = temp.split (",");
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");
                temp = document.getElementById (id + "_Period").value; if ("" !== temp) obj["Period"] = temp.split (",");
                temp = document.getElementById (id + "_DateAndOrTime").value; if ("" !== temp) obj["DateAndOrTime"] = temp.split (",");
                temp = document.getElementById (id + "_Process").value; if ("" !== temp) obj["Process"] = temp.split (",");
                temp = document.getElementById (id + "_AttributeInstanceComponent").value; if ("" !== temp) obj["AttributeInstanceComponent"] = temp.split (",");
                temp = document.getElementById (id + "_SelfMarketDocument").value; if ("" !== temp) obj["SelfMarketDocument"] = temp.split (",");
                temp = document.getElementById (id + "_MarketDocument").value; if ("" !== temp) obj["MarketDocument"] = temp.split (",");
                temp = document.getElementById (id + "_MarketParticipant").value; if ("" !== temp) obj["MarketParticipant"] = temp.split (",");
                temp = document.getElementById (id + "_Domain").value; if ("" !== temp) obj["Domain"] = temp.split (",");
                temp = document.getElementById (id + "_AceTariffType").value; if ("" !== temp) obj["AceTariffType"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Reason", "0..*", "0..*", "Reason", "MarketDocument"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "MarketDocument"],
                            ["Period", "0..*", "0..*", "Period", "MarketDocument"],
                            ["DateAndOrTime", "0..*", "0..*", "DateAndOrTime", "MarketDocument"],
                            ["Process", "0..*", "0..*", "Process", "MarketDocument"],
                            ["AttributeInstanceComponent", "0..*", "0..*", "AttributeInstanceComponent", "MarketDocument"],
                            ["SelfMarketDocument", "0..*", "0..*", "MarketDocument", "MarketDocument"],
                            ["MarketDocument", "0..*", "0..*", "MarketDocument", "SelfMarketDocument"],
                            ["MarketParticipant", "0..*", "0..*", "MarketParticipant", "MarketDocument"],
                            ["Domain", "0..*", "0..*", "Domain", "MarketDocument"],
                            ["AceTariffType", "0..*", "0..*", "AceTariffType", "MarketDocument"]
                        ]
                    )
                );
            }
        }

        /**
         * An identification of a set of values beeing adressed within a specific interval of time.
         *
         */
        class Point extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Point;
                if (null == bucket)
                   cim_data.Point = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Point[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Point";
                base.parse_element (/<cim:Point.position>([\s\S]*?)<\/cim:Point.position>/g, obj, "position", base.to_string, sub, context);
                base.parse_element (/<cim:Point.quality>([\s\S]*?)<\/cim:Point.quality>/g, obj, "quality", base.to_string, sub, context);
                base.parse_element (/<cim:Point.quantity>([\s\S]*?)<\/cim:Point.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:Point.secondaryQuantity>([\s\S]*?)<\/cim:Point.secondaryQuantity>/g, obj, "secondaryQuantity", base.to_string, sub, context);
                base.parse_attributes (/<cim:Point.Price\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Price", sub, context);
                base.parse_attributes (/<cim:Point.FlowDirection\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FlowDirection", sub, context);
                base.parse_attribute (/<cim:Point.Period\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Period", sub, context);
                base.parse_attributes (/<cim:Point.Reason\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Reason", sub, context);
                base.parse_attributes (/<cim:Point.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                base.parse_attributes (/<cim:Point.AceTariffType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AceTariffType", sub, context);
                base.parse_attributes (/<cim:Point.Quantity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Quantity", sub, context);
                let bucket = context.parsed.Point;
                if (null == bucket)
                   context.parsed.Point = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "Point", "position", "position",  base.from_string, fields);
                base.export_element (obj, "Point", "quality", "quality",  base.from_string, fields);
                base.export_element (obj, "Point", "quantity", "quantity",  base.from_string, fields);
                base.export_element (obj, "Point", "secondaryQuantity", "secondaryQuantity",  base.from_string, fields);
                base.export_attributes (obj, "Point", "Price", "Price", fields);
                base.export_attributes (obj, "Point", "FlowDirection", "FlowDirection", fields);
                base.export_attribute (obj, "Point", "Period", "Period", fields);
                base.export_attributes (obj, "Point", "Reason", "Reason", fields);
                base.export_attributes (obj, "Point", "TimeSeries", "TimeSeries", fields);
                base.export_attributes (obj, "Point", "AceTariffType", "AceTariffType", fields);
                base.export_attributes (obj, "Point", "Quantity", "Quantity", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Point_collapse" aria-expanded="true" aria-controls="Point_collapse" style="margin-left: 10px;">Point</a></legend>
                    <div id="Point_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#position}}<div><b>position</b>: {{position}}</div>{{/position}}
                    {{#quality}}<div><b>quality</b>: {{quality}}</div>{{/quality}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#secondaryQuantity}}<div><b>secondaryQuantity</b>: {{secondaryQuantity}}</div>{{/secondaryQuantity}}
                    {{#Price}}<div><b>Price</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Price}}
                    {{#FlowDirection}}<div><b>FlowDirection</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FlowDirection}}
                    {{#Period}}<div><b>Period</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Period}}");}); return false;'>{{Period}}</a></div>{{/Period}}
                    {{#Reason}}<div><b>Reason</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Reason}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    {{#AceTariffType}}<div><b>AceTariffType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AceTariffType}}
                    {{#Quantity}}<div><b>Quantity</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Quantity}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Price"]) obj["Price_string"] = obj["Price"].join ();
                if (obj["FlowDirection"]) obj["FlowDirection_string"] = obj["FlowDirection"].join ();
                if (obj["Reason"]) obj["Reason_string"] = obj["Reason"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
                if (obj["AceTariffType"]) obj["AceTariffType_string"] = obj["AceTariffType"].join ();
                if (obj["Quantity"]) obj["Quantity_string"] = obj["Quantity"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Price_string"];
                delete obj["FlowDirection_string"];
                delete obj["Reason_string"];
                delete obj["TimeSeries_string"];
                delete obj["AceTariffType_string"];
                delete obj["Quantity_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Point_collapse" aria-expanded="true" aria-controls="{{id}}_Point_collapse" style="margin-left: 10px;">Point</a></legend>
                    <div id="{{id}}_Point_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_position'>position: </label><div class='col-sm-8'><input id='{{id}}_position' class='form-control' type='text'{{#position}} value='{{position}}'{{/position}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quality'>quality: </label><div class='col-sm-8'><input id='{{id}}_quality' class='form-control' type='text'{{#quality}} value='{{quality}}'{{/quality}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><input id='{{id}}_quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_secondaryQuantity'>secondaryQuantity: </label><div class='col-sm-8'><input id='{{id}}_secondaryQuantity' class='form-control' type='text'{{#secondaryQuantity}} value='{{secondaryQuantity}}'{{/secondaryQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FlowDirection'>FlowDirection: </label><div class='col-sm-8'><input id='{{id}}_FlowDirection' class='form-control' type='text'{{#FlowDirection}} value='{{FlowDirection_string}}'{{/FlowDirection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Period'>Period: </label><div class='col-sm-8'><input id='{{id}}_Period' class='form-control' type='text'{{#Period}} value='{{Period}}'{{/Period}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Reason'>Reason: </label><div class='col-sm-8'><input id='{{id}}_Reason' class='form-control' type='text'{{#Reason}} value='{{Reason_string}}'{{/Reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AceTariffType'>AceTariffType: </label><div class='col-sm-8'><input id='{{id}}_AceTariffType' class='form-control' type='text'{{#AceTariffType}} value='{{AceTariffType_string}}'{{/AceTariffType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Quantity'>Quantity: </label><div class='col-sm-8'><input id='{{id}}_Quantity' class='form-control' type='text'{{#Quantity}} value='{{Quantity_string}}'{{/Quantity}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Point" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_position").value; if ("" !== temp) obj["position"] = temp;
                temp = document.getElementById (id + "_quality").value; if ("" !== temp) obj["quality"] = temp;
                temp = document.getElementById (id + "_quantity").value; if ("" !== temp) obj["quantity"] = temp;
                temp = document.getElementById (id + "_secondaryQuantity").value; if ("" !== temp) obj["secondaryQuantity"] = temp;
                temp = document.getElementById (id + "_FlowDirection").value; if ("" !== temp) obj["FlowDirection"] = temp.split (",");
                temp = document.getElementById (id + "_Period").value; if ("" !== temp) obj["Period"] = temp;
                temp = document.getElementById (id + "_Reason").value; if ("" !== temp) obj["Reason"] = temp.split (",");
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");
                temp = document.getElementById (id + "_AceTariffType").value; if ("" !== temp) obj["AceTariffType"] = temp.split (",");
                temp = document.getElementById (id + "_Quantity").value; if ("" !== temp) obj["Quantity"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Price", "0..*", "0..1", "Price", "Point"],
                            ["FlowDirection", "0..*", "0..*", "FlowDirection", "Point"],
                            ["Period", "1", "0..*", "Period", "Point"],
                            ["Reason", "0..*", "0..*", "Reason", "Point"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "Point"],
                            ["AceTariffType", "0..*", "0..*", "AceTariffType", "Point"],
                            ["Quantity", "0..*", "0..*", "Quantity", "Point"]
                        ]
                    )
                );
            }
        }

        /**
         * The motivation of an act.
         *
         */
        class Reason extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Reason;
                if (null == bucket)
                   cim_data.Reason = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Reason[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Reason";
                base.parse_element (/<cim:Reason.code>([\s\S]*?)<\/cim:Reason.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:Reason.text>([\s\S]*?)<\/cim:Reason.text>/g, obj, "text", base.to_string, sub, context);
                base.parse_attributes (/<cim:Reason.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attributes (/<cim:Reason.MarketDocument\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketDocument", sub, context);
                base.parse_attributes (/<cim:Reason.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                base.parse_attributes (/<cim:Reason.Point\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Point", sub, context);
                base.parse_attributes (/<cim:Reason.Period\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Period", sub, context);
                let bucket = context.parsed.Reason;
                if (null == bucket)
                   context.parsed.Reason = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "Reason", "code", "code",  base.from_string, fields);
                base.export_element (obj, "Reason", "text", "text",  base.from_string, fields);
                base.export_attributes (obj, "Reason", "RegisteredResource", "RegisteredResource", fields);
                base.export_attributes (obj, "Reason", "MarketDocument", "MarketDocument", fields);
                base.export_attributes (obj, "Reason", "TimeSeries", "TimeSeries", fields);
                base.export_attributes (obj, "Reason", "Point", "Point", fields);
                base.export_attributes (obj, "Reason", "Period", "Period", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Reason_collapse" aria-expanded="true" aria-controls="Reason_collapse" style="margin-left: 10px;">Reason</a></legend>
                    <div id="Reason_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
                    {{#text}}<div><b>text</b>: {{text}}</div>{{/text}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    {{#MarketDocument}}<div><b>MarketDocument</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketDocument}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    {{#Point}}<div><b>Point</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Point}}
                    {{#Period}}<div><b>Period</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Period}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
                if (obj["MarketDocument"]) obj["MarketDocument_string"] = obj["MarketDocument"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
                if (obj["Point"]) obj["Point_string"] = obj["Point"].join ();
                if (obj["Period"]) obj["Period_string"] = obj["Period"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["RegisteredResource_string"];
                delete obj["MarketDocument_string"];
                delete obj["TimeSeries_string"];
                delete obj["Point_string"];
                delete obj["Period_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Reason_collapse" aria-expanded="true" aria-controls="{{id}}_Reason_collapse" style="margin-left: 10px;">Reason</a></legend>
                    <div id="{{id}}_Reason_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_code'>code: </label><div class='col-sm-8'><input id='{{id}}_code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_text'>text: </label><div class='col-sm-8'><input id='{{id}}_text' class='form-control' type='text'{{#text}} value='{{text}}'{{/text}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource_string}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketDocument'>MarketDocument: </label><div class='col-sm-8'><input id='{{id}}_MarketDocument' class='form-control' type='text'{{#MarketDocument}} value='{{MarketDocument_string}}'{{/MarketDocument}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Point'>Point: </label><div class='col-sm-8'><input id='{{id}}_Point' class='form-control' type='text'{{#Point}} value='{{Point_string}}'{{/Point}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Period'>Period: </label><div class='col-sm-8'><input id='{{id}}_Period' class='form-control' type='text'{{#Period}} value='{{Period_string}}'{{/Period}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Reason" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_code").value; if ("" !== temp) obj["code"] = temp;
                temp = document.getElementById (id + "_text").value; if ("" !== temp) obj["text"] = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp.split (",");
                temp = document.getElementById (id + "_MarketDocument").value; if ("" !== temp) obj["MarketDocument"] = temp.split (",");
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");
                temp = document.getElementById (id + "_Point").value; if ("" !== temp) obj["Point"] = temp.split (",");
                temp = document.getElementById (id + "_Period").value; if ("" !== temp) obj["Period"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "0..*", "0..*", "RegisteredResource", "Reason"],
                            ["MarketDocument", "0..*", "0..*", "MarketDocument", "Reason"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "Reason"],
                            ["Point", "0..*", "0..*", "Point", "Reason"],
                            ["Period", "0..*", "0..*", "Period", "Reason"]
                        ]
                    )
                );
            }
        }

        /**
         * Description of quantities needed in the data exchange.
         *
         * The type of the quantity is described either by the role of the association or the type attribute.
         * The quality attribute provides the information about the quality of the quantity (measured, estimated, etc.).
         *
         */
        class Quantity extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Quantity;
                if (null == bucket)
                   cim_data.Quantity = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Quantity[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Quantity";
                base.parse_element (/<cim:Quantity.quality>([\s\S]*?)<\/cim:Quantity.quality>/g, obj, "quality", base.to_string, sub, context);
                base.parse_element (/<cim:Quantity.quantity>([\s\S]*?)<\/cim:Quantity.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:Quantity.type>([\s\S]*?)<\/cim:Quantity.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attribute (/<cim:Quantity.quantity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "quantity", sub, context);
                base.parse_attributes (/<cim:Quantity.Detail_Quantity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Detail_Quantity", sub, context);
                base.parse_attributes (/<cim:Quantity.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                base.parse_attributes (/<cim:Quantity.Domain\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Domain", sub, context);
                base.parse_attributes (/<cim:Quantity.Point\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Point", sub, context);
                let bucket = context.parsed.Quantity;
                if (null == bucket)
                   context.parsed.Quantity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "Quantity", "quality", "quality",  base.from_string, fields);
                base.export_element (obj, "Quantity", "quantity", "quantity",  base.from_string, fields);
                base.export_element (obj, "Quantity", "type", "type",  base.from_string, fields);
                base.export_attribute (obj, "Quantity", "quantity", "quantity", fields);
                base.export_attributes (obj, "Quantity", "Detail_Quantity", "Detail_Quantity", fields);
                base.export_attributes (obj, "Quantity", "TimeSeries", "TimeSeries", fields);
                base.export_attributes (obj, "Quantity", "Domain", "Domain", fields);
                base.export_attributes (obj, "Quantity", "Point", "Point", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Quantity_collapse" aria-expanded="true" aria-controls="Quantity_collapse" style="margin-left: 10px;">Quantity</a></legend>
                    <div id="Quantity_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#quality}}<div><b>quality</b>: {{quality}}</div>{{/quality}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#quantity}}<div><b>quantity</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{quantity}}");}); return false;'>{{quantity}}</a></div>{{/quantity}}
                    {{#Detail_Quantity}}<div><b>Detail_Quantity</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Detail_Quantity}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    {{#Domain}}<div><b>Domain</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Domain}}
                    {{#Point}}<div><b>Point</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Point}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Detail_Quantity"]) obj["Detail_Quantity_string"] = obj["Detail_Quantity"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
                if (obj["Domain"]) obj["Domain_string"] = obj["Domain"].join ();
                if (obj["Point"]) obj["Point_string"] = obj["Point"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Detail_Quantity_string"];
                delete obj["TimeSeries_string"];
                delete obj["Domain_string"];
                delete obj["Point_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Quantity_collapse" aria-expanded="true" aria-controls="{{id}}_Quantity_collapse" style="margin-left: 10px;">Quantity</a></legend>
                    <div id="{{id}}_Quantity_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quality'>quality: </label><div class='col-sm-8'><input id='{{id}}_quality' class='form-control' type='text'{{#quality}} value='{{quality}}'{{/quality}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><input id='{{id}}_quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><input id='{{id}}_quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Domain'>Domain: </label><div class='col-sm-8'><input id='{{id}}_Domain' class='form-control' type='text'{{#Domain}} value='{{Domain_string}}'{{/Domain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Point'>Point: </label><div class='col-sm-8'><input id='{{id}}_Point' class='form-control' type='text'{{#Point}} value='{{Point_string}}'{{/Point}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Quantity" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_quality").value; if ("" !== temp) obj["quality"] = temp;
                temp = document.getElementById (id + "_quantity").value; if ("" !== temp) obj["quantity"] = temp;
                temp = document.getElementById (id + "_type").value; if ("" !== temp) obj["type"] = temp;
                temp = document.getElementById (id + "_quantity").value; if ("" !== temp) obj["quantity"] = temp;
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");
                temp = document.getElementById (id + "_Domain").value; if ("" !== temp) obj["Domain"] = temp.split (",");
                temp = document.getElementById (id + "_Point").value; if ("" !== temp) obj["Point"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["quantity", "0..1", "0..*", "Quantity", "Detail_Quantity"],
                            ["Detail_Quantity", "0..*", "0..1", "Quantity", "quantity"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "Quantity"],
                            ["Domain", "0..*", "0..*", "Domain", "Quantity"],
                            ["Point", "0..*", "0..*", "Point", "Quantity"]
                        ]
                    )
                );
            }
        }

        /**
         * A class used to provide information about an attribute.
         *
         */
        class AttributeInstanceComponent extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AttributeInstanceComponent;
                if (null == bucket)
                   cim_data.AttributeInstanceComponent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AttributeInstanceComponent[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AttributeInstanceComponent";
                base.parse_element (/<cim:AttributeInstanceComponent.attribute>([\s\S]*?)<\/cim:AttributeInstanceComponent.attribute>/g, obj, "attribute", base.to_string, sub, context);
                base.parse_element (/<cim:AttributeInstanceComponent.attributeValue>([\s\S]*?)<\/cim:AttributeInstanceComponent.attributeValue>/g, obj, "attributeValue", base.to_string, sub, context);
                base.parse_element (/<cim:AttributeInstanceComponent.position>([\s\S]*?)<\/cim:AttributeInstanceComponent.position>/g, obj, "position", base.to_string, sub, context);
                base.parse_attributes (/<cim:AttributeInstanceComponent.MarketDocument\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketDocument", sub, context);
                base.parse_attributes (/<cim:AttributeInstanceComponent.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                let bucket = context.parsed.AttributeInstanceComponent;
                if (null == bucket)
                   context.parsed.AttributeInstanceComponent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "AttributeInstanceComponent", "attribute", "attribute",  base.from_string, fields);
                base.export_element (obj, "AttributeInstanceComponent", "attributeValue", "attributeValue",  base.from_string, fields);
                base.export_element (obj, "AttributeInstanceComponent", "position", "position",  base.from_string, fields);
                base.export_attributes (obj, "AttributeInstanceComponent", "MarketDocument", "MarketDocument", fields);
                base.export_attributes (obj, "AttributeInstanceComponent", "TimeSeries", "TimeSeries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AttributeInstanceComponent_collapse" aria-expanded="true" aria-controls="AttributeInstanceComponent_collapse" style="margin-left: 10px;">AttributeInstanceComponent</a></legend>
                    <div id="AttributeInstanceComponent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#attribute}}<div><b>attribute</b>: {{attribute}}</div>{{/attribute}}
                    {{#attributeValue}}<div><b>attributeValue</b>: {{attributeValue}}</div>{{/attributeValue}}
                    {{#position}}<div><b>position</b>: {{position}}</div>{{/position}}
                    {{#MarketDocument}}<div><b>MarketDocument</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketDocument}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketDocument"]) obj["MarketDocument_string"] = obj["MarketDocument"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketDocument_string"];
                delete obj["TimeSeries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AttributeInstanceComponent_collapse" aria-expanded="true" aria-controls="{{id}}_AttributeInstanceComponent_collapse" style="margin-left: 10px;">AttributeInstanceComponent</a></legend>
                    <div id="{{id}}_AttributeInstanceComponent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_attribute'>attribute: </label><div class='col-sm-8'><input id='{{id}}_attribute' class='form-control' type='text'{{#attribute}} value='{{attribute}}'{{/attribute}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_attributeValue'>attributeValue: </label><div class='col-sm-8'><input id='{{id}}_attributeValue' class='form-control' type='text'{{#attributeValue}} value='{{attributeValue}}'{{/attributeValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_position'>position: </label><div class='col-sm-8'><input id='{{id}}_position' class='form-control' type='text'{{#position}} value='{{position}}'{{/position}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketDocument'>MarketDocument: </label><div class='col-sm-8'><input id='{{id}}_MarketDocument' class='form-control' type='text'{{#MarketDocument}} value='{{MarketDocument_string}}'{{/MarketDocument}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AttributeInstanceComponent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_attribute").value; if ("" !== temp) obj["attribute"] = temp;
                temp = document.getElementById (id + "_attributeValue").value; if ("" !== temp) obj["attributeValue"] = temp;
                temp = document.getElementById (id + "_position").value; if ("" !== temp) obj["position"] = temp;
                temp = document.getElementById (id + "_MarketDocument").value; if ("" !== temp) obj["MarketDocument"] = temp.split (",");
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketDocument", "0..*", "0..*", "MarketDocument", "AttributeInstanceComponent"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "AttributeInstanceComponent"]
                        ]
                    )
                );
            }
        }

        /**
         * The date and/or the time.
         *
         */
        class DateAndOrTime extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DateAndOrTime;
                if (null == bucket)
                   cim_data.DateAndOrTime = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DateAndOrTime[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DateAndOrTime";
                base.parse_element (/<cim:DateAndOrTime.date>([\s\S]*?)<\/cim:DateAndOrTime.date>/g, obj, "date", base.to_string, sub, context);
                base.parse_element (/<cim:DateAndOrTime.time>([\s\S]*?)<\/cim:DateAndOrTime.time>/g, obj, "time", base.to_string, sub, context);
                base.parse_attributes (/<cim:DateAndOrTime.MarketDocument\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketDocument", sub, context);
                base.parse_attributes (/<cim:DateAndOrTime.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                let bucket = context.parsed.DateAndOrTime;
                if (null == bucket)
                   context.parsed.DateAndOrTime = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "DateAndOrTime", "date", "date",  base.from_string, fields);
                base.export_element (obj, "DateAndOrTime", "time", "time",  base.from_string, fields);
                base.export_attributes (obj, "DateAndOrTime", "MarketDocument", "MarketDocument", fields);
                base.export_attributes (obj, "DateAndOrTime", "TimeSeries", "TimeSeries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DateAndOrTime_collapse" aria-expanded="true" aria-controls="DateAndOrTime_collapse" style="margin-left: 10px;">DateAndOrTime</a></legend>
                    <div id="DateAndOrTime_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#date}}<div><b>date</b>: {{date}}</div>{{/date}}
                    {{#time}}<div><b>time</b>: {{time}}</div>{{/time}}
                    {{#MarketDocument}}<div><b>MarketDocument</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketDocument}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketDocument"]) obj["MarketDocument_string"] = obj["MarketDocument"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketDocument_string"];
                delete obj["TimeSeries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DateAndOrTime_collapse" aria-expanded="true" aria-controls="{{id}}_DateAndOrTime_collapse" style="margin-left: 10px;">DateAndOrTime</a></legend>
                    <div id="{{id}}_DateAndOrTime_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_date'>date: </label><div class='col-sm-8'><input id='{{id}}_date' class='form-control' type='text'{{#date}} value='{{date}}'{{/date}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_time'>time: </label><div class='col-sm-8'><input id='{{id}}_time' class='form-control' type='text'{{#time}} value='{{time}}'{{/time}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketDocument'>MarketDocument: </label><div class='col-sm-8'><input id='{{id}}_MarketDocument' class='form-control' type='text'{{#MarketDocument}} value='{{MarketDocument_string}}'{{/MarketDocument}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DateAndOrTime" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_date").value; if ("" !== temp) obj["date"] = temp;
                temp = document.getElementById (id + "_time").value; if ("" !== temp) obj["time"] = temp;
                temp = document.getElementById (id + "_MarketDocument").value; if ("" !== temp) obj["MarketDocument"] = temp.split (",");
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketDocument", "0..*", "0..*", "MarketDocument", "DateAndOrTime"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "DateAndOrTime"]
                        ]
                    )
                );
            }
        }

        /**
         * An identification of a time interval that may have a given resolution.
         *
         */
        class Period extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Period;
                if (null == bucket)
                   cim_data.Period = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Period[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Period";
                base.parse_element (/<cim:Period.resolution>([\s\S]*?)<\/cim:Period.resolution>/g, obj, "resolution", base.to_string, sub, context);
                base.parse_attribute (/<cim:Period.timeInterval\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "timeInterval", sub, context);
                base.parse_attributes (/<cim:Period.MarketDocument\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketDocument", sub, context);
                base.parse_attributes (/<cim:Period.Point\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Point", sub, context);
                base.parse_attributes (/<cim:Period.Reason\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Reason", sub, context);
                base.parse_attributes (/<cim:Period.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                let bucket = context.parsed.Period;
                if (null == bucket)
                   context.parsed.Period = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "Period", "resolution", "resolution",  base.from_string, fields);
                base.export_attribute (obj, "Period", "timeInterval", "timeInterval", fields);
                base.export_attributes (obj, "Period", "MarketDocument", "MarketDocument", fields);
                base.export_attributes (obj, "Period", "Point", "Point", fields);
                base.export_attributes (obj, "Period", "Reason", "Reason", fields);
                base.export_attributes (obj, "Period", "TimeSeries", "TimeSeries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Period_collapse" aria-expanded="true" aria-controls="Period_collapse" style="margin-left: 10px;">Period</a></legend>
                    <div id="Period_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#resolution}}<div><b>resolution</b>: {{resolution}}</div>{{/resolution}}
                    {{#timeInterval}}<div><b>timeInterval</b>: {{timeInterval}}</div>{{/timeInterval}}
                    {{#MarketDocument}}<div><b>MarketDocument</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketDocument}}
                    {{#Point}}<div><b>Point</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Point}}
                    {{#Reason}}<div><b>Reason</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Reason}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketDocument"]) obj["MarketDocument_string"] = obj["MarketDocument"].join ();
                if (obj["Point"]) obj["Point_string"] = obj["Point"].join ();
                if (obj["Reason"]) obj["Reason_string"] = obj["Reason"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketDocument_string"];
                delete obj["Point_string"];
                delete obj["Reason_string"];
                delete obj["TimeSeries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Period_collapse" aria-expanded="true" aria-controls="{{id}}_Period_collapse" style="margin-left: 10px;">Period</a></legend>
                    <div id="{{id}}_Period_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resolution'>resolution: </label><div class='col-sm-8'><input id='{{id}}_resolution' class='form-control' type='text'{{#resolution}} value='{{resolution}}'{{/resolution}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeInterval'>timeInterval: </label><div class='col-sm-8'><input id='{{id}}_timeInterval' class='form-control' type='text'{{#timeInterval}} value='{{timeInterval}}'{{/timeInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketDocument'>MarketDocument: </label><div class='col-sm-8'><input id='{{id}}_MarketDocument' class='form-control' type='text'{{#MarketDocument}} value='{{MarketDocument_string}}'{{/MarketDocument}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Reason'>Reason: </label><div class='col-sm-8'><input id='{{id}}_Reason' class='form-control' type='text'{{#Reason}} value='{{Reason_string}}'{{/Reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Period" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_resolution").value; if ("" !== temp) obj["resolution"] = temp;
                temp = document.getElementById (id + "_timeInterval").value; if ("" !== temp) obj["timeInterval"] = temp;
                temp = document.getElementById (id + "_MarketDocument").value; if ("" !== temp) obj["MarketDocument"] = temp.split (",");
                temp = document.getElementById (id + "_Reason").value; if ("" !== temp) obj["Reason"] = temp.split (",");
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketDocument", "0..*", "0..*", "MarketDocument", "Period"],
                            ["Point", "0..*", "1", "Point", "Period"],
                            ["Reason", "0..*", "0..*", "Reason", "Period"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "Period"]
                        ]
                    )
                );
            }
        }

        /**
         * The identification of an entity where energy products are measured or computed.
         *
         */
        class MarketEvaluationPoint extends Metering.UsagePoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketEvaluationPoint;
                if (null == bucket)
                   cim_data.MarketEvaluationPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketEvaluationPoint[obj.id];
            }

            parse (context, sub)
            {
                let obj = Metering.UsagePoint.prototype.parse.call (this, context, sub);
                obj.cls = "MarketEvaluationPoint";
                base.parse_attributes (/<cim:MarketEvaluationPoint.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                let bucket = context.parsed.MarketEvaluationPoint;
                if (null == bucket)
                   context.parsed.MarketEvaluationPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Metering.UsagePoint.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MarketEvaluationPoint", "TimeSeries", "TimeSeries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketEvaluationPoint_collapse" aria-expanded="true" aria-controls="MarketEvaluationPoint_collapse" style="margin-left: 10px;">MarketEvaluationPoint</a></legend>
                    <div id="MarketEvaluationPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Metering.UsagePoint.prototype.template.call (this) +
                    `
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TimeSeries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketEvaluationPoint_collapse" aria-expanded="true" aria-controls="{{id}}_MarketEvaluationPoint_collapse" style="margin-left: 10px;">MarketEvaluationPoint</a></legend>
                    <div id="{{id}}_MarketEvaluationPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Metering.UsagePoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketEvaluationPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "MarketEvaluationPoint"]
                        ]
                    )
                );
            }
        }

        /**
         * The formal specification of a set of business transactions having the same business goal.
         *
         */
        class Process extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Process;
                if (null == bucket)
                   cim_data.Process = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Process[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Process";
                base.parse_element (/<cim:Process.classificationType>([\s\S]*?)<\/cim:Process.classificationType>/g, obj, "classificationType", base.to_string, sub, context);
                base.parse_element (/<cim:Process.processType>([\s\S]*?)<\/cim:Process.processType>/g, obj, "processType", base.to_string, sub, context);
                base.parse_attributes (/<cim:Process.MarketDocument\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketDocument", sub, context);
                let bucket = context.parsed.Process;
                if (null == bucket)
                   context.parsed.Process = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Process", "classificationType", "classificationType",  base.from_string, fields);
                base.export_element (obj, "Process", "processType", "processType",  base.from_string, fields);
                base.export_attributes (obj, "Process", "MarketDocument", "MarketDocument", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Process_collapse" aria-expanded="true" aria-controls="Process_collapse" style="margin-left: 10px;">Process</a></legend>
                    <div id="Process_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#classificationType}}<div><b>classificationType</b>: {{classificationType}}</div>{{/classificationType}}
                    {{#processType}}<div><b>processType</b>: {{processType}}</div>{{/processType}}
                    {{#MarketDocument}}<div><b>MarketDocument</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketDocument}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketDocument"]) obj["MarketDocument_string"] = obj["MarketDocument"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketDocument_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Process_collapse" aria-expanded="true" aria-controls="{{id}}_Process_collapse" style="margin-left: 10px;">Process</a></legend>
                    <div id="{{id}}_Process_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_classificationType'>classificationType: </label><div class='col-sm-8'><input id='{{id}}_classificationType' class='form-control' type='text'{{#classificationType}} value='{{classificationType}}'{{/classificationType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_processType'>processType: </label><div class='col-sm-8'><input id='{{id}}_processType' class='form-control' type='text'{{#processType}} value='{{processType}}'{{/processType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketDocument'>MarketDocument: </label><div class='col-sm-8'><input id='{{id}}_MarketDocument' class='form-control' type='text'{{#MarketDocument}} value='{{MarketDocument_string}}'{{/MarketDocument}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Process" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_classificationType").value; if ("" !== temp) obj["classificationType"] = temp;
                temp = document.getElementById (id + "_processType").value; if ("" !== temp) obj["processType"] = temp;
                temp = document.getElementById (id + "_MarketDocument").value; if ("" !== temp) obj["MarketDocument"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketDocument", "0..*", "0..*", "MarketDocument", "Process"]
                        ]
                    )
                );
            }
        }

        /**
         * A set of regular time-ordered measurements or values of quantitative nature of an individual or collective phenomenon taken at successive, in most cases equidistant, periods / points of time.
         *
         */
        class TimeSeries extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TimeSeries;
                if (null == bucket)
                   cim_data.TimeSeries = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TimeSeries[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TimeSeries";
                base.parse_element (/<cim:TimeSeries.businessType>([\s\S]*?)<\/cim:TimeSeries.businessType>/g, obj, "businessType", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSeries.cancelledTS>([\s\S]*?)<\/cim:TimeSeries.cancelledTS>/g, obj, "cancelledTS", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSeries.curveType>([\s\S]*?)<\/cim:TimeSeries.curveType>/g, obj, "curveType", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSeries.objectAggregation>([\s\S]*?)<\/cim:TimeSeries.objectAggregation>/g, obj, "objectAggregation", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSeries.product>([\s\S]*?)<\/cim:TimeSeries.product>/g, obj, "product", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSeries.version>([\s\S]*?)<\/cim:TimeSeries.version>/g, obj, "version", base.to_string, sub, context);
                base.parse_attributes (/<cim:TimeSeries.MarketParticipant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketParticipant", sub, context);
                base.parse_attributes (/<cim:TimeSeries.Price\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Price", sub, context);
                base.parse_attributes (/<cim:TimeSeries.MarketDocument\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketDocument", sub, context);
                base.parse_attributes (/<cim:TimeSeries.ConstraintDuration\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConstraintDuration", sub, context);
                base.parse_attributes (/<cim:TimeSeries.MarketObjectStatus\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketObjectStatus", sub, context);
                base.parse_attributes (/<cim:TimeSeries.EnvironmentalMonitoringStation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalMonitoringStation", sub, context);
                base.parse_attributes (/<cim:TimeSeries.MktPSRType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktPSRType", sub, context);
                base.parse_attributes (/<cim:TimeSeries.Quantity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Quantity", sub, context);
                base.parse_attributes (/<cim:TimeSeries.Reason\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Reason", sub, context);
                base.parse_attributes (/<cim:TimeSeries.MarketEvaluationPoint\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketEvaluationPoint", sub, context);
                base.parse_attributes (/<cim:TimeSeries.DateAndOrTime\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DateAndOrTime", sub, context);
                base.parse_attributes (/<cim:TimeSeries.AttributeInstanceComponent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AttributeInstanceComponent", sub, context);
                base.parse_attributes (/<cim:TimeSeries.FlowDirection\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FlowDirection", sub, context);
                base.parse_attributes (/<cim:TimeSeries.Point\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Point", sub, context);
                base.parse_attributes (/<cim:TimeSeries.Unit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Unit", sub, context);
                base.parse_attributes (/<cim:TimeSeries.Auction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Auction", sub, context);
                base.parse_attributes (/<cim:TimeSeries.Period\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Period", sub, context);
                base.parse_attributes (/<cim:TimeSeries.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attributes (/<cim:TimeSeries.Domain\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Domain", sub, context);
                let bucket = context.parsed.TimeSeries;
                if (null == bucket)
                   context.parsed.TimeSeries = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TimeSeries", "businessType", "businessType",  base.from_string, fields);
                base.export_element (obj, "TimeSeries", "cancelledTS", "cancelledTS",  base.from_string, fields);
                base.export_element (obj, "TimeSeries", "curveType", "curveType",  base.from_string, fields);
                base.export_element (obj, "TimeSeries", "objectAggregation", "objectAggregation",  base.from_string, fields);
                base.export_element (obj, "TimeSeries", "product", "product",  base.from_string, fields);
                base.export_element (obj, "TimeSeries", "version", "version",  base.from_string, fields);
                base.export_attributes (obj, "TimeSeries", "MarketParticipant", "MarketParticipant", fields);
                base.export_attributes (obj, "TimeSeries", "Price", "Price", fields);
                base.export_attributes (obj, "TimeSeries", "MarketDocument", "MarketDocument", fields);
                base.export_attributes (obj, "TimeSeries", "ConstraintDuration", "ConstraintDuration", fields);
                base.export_attributes (obj, "TimeSeries", "MarketObjectStatus", "MarketObjectStatus", fields);
                base.export_attributes (obj, "TimeSeries", "EnvironmentalMonitoringStation", "EnvironmentalMonitoringStation", fields);
                base.export_attributes (obj, "TimeSeries", "MktPSRType", "MktPSRType", fields);
                base.export_attributes (obj, "TimeSeries", "Quantity", "Quantity", fields);
                base.export_attributes (obj, "TimeSeries", "Reason", "Reason", fields);
                base.export_attributes (obj, "TimeSeries", "MarketEvaluationPoint", "MarketEvaluationPoint", fields);
                base.export_attributes (obj, "TimeSeries", "DateAndOrTime", "DateAndOrTime", fields);
                base.export_attributes (obj, "TimeSeries", "AttributeInstanceComponent", "AttributeInstanceComponent", fields);
                base.export_attributes (obj, "TimeSeries", "FlowDirection", "FlowDirection", fields);
                base.export_attributes (obj, "TimeSeries", "Point", "Point", fields);
                base.export_attributes (obj, "TimeSeries", "Unit", "Unit", fields);
                base.export_attributes (obj, "TimeSeries", "Auction", "Auction", fields);
                base.export_attributes (obj, "TimeSeries", "Period", "Period", fields);
                base.export_attributes (obj, "TimeSeries", "RegisteredResource", "RegisteredResource", fields);
                base.export_attributes (obj, "TimeSeries", "Domain", "Domain", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TimeSeries_collapse" aria-expanded="true" aria-controls="TimeSeries_collapse" style="margin-left: 10px;">TimeSeries</a></legend>
                    <div id="TimeSeries_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#businessType}}<div><b>businessType</b>: {{businessType}}</div>{{/businessType}}
                    {{#cancelledTS}}<div><b>cancelledTS</b>: {{cancelledTS}}</div>{{/cancelledTS}}
                    {{#curveType}}<div><b>curveType</b>: {{curveType}}</div>{{/curveType}}
                    {{#objectAggregation}}<div><b>objectAggregation</b>: {{objectAggregation}}</div>{{/objectAggregation}}
                    {{#product}}<div><b>product</b>: {{product}}</div>{{/product}}
                    {{#version}}<div><b>version</b>: {{version}}</div>{{/version}}
                    {{#MarketParticipant}}<div><b>MarketParticipant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketParticipant}}
                    {{#Price}}<div><b>Price</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Price}}
                    {{#MarketDocument}}<div><b>MarketDocument</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketDocument}}
                    {{#ConstraintDuration}}<div><b>ConstraintDuration</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ConstraintDuration}}
                    {{#MarketObjectStatus}}<div><b>MarketObjectStatus</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketObjectStatus}}
                    {{#EnvironmentalMonitoringStation}}<div><b>EnvironmentalMonitoringStation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalMonitoringStation}}
                    {{#MktPSRType}}<div><b>MktPSRType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MktPSRType}}
                    {{#Quantity}}<div><b>Quantity</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Quantity}}
                    {{#Reason}}<div><b>Reason</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Reason}}
                    {{#MarketEvaluationPoint}}<div><b>MarketEvaluationPoint</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketEvaluationPoint}}
                    {{#DateAndOrTime}}<div><b>DateAndOrTime</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DateAndOrTime}}
                    {{#AttributeInstanceComponent}}<div><b>AttributeInstanceComponent</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AttributeInstanceComponent}}
                    {{#FlowDirection}}<div><b>FlowDirection</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FlowDirection}}
                    {{#Point}}<div><b>Point</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Point}}
                    {{#Unit}}<div><b>Unit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Unit}}
                    {{#Auction}}<div><b>Auction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Auction}}
                    {{#Period}}<div><b>Period</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Period}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    {{#Domain}}<div><b>Domain</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Domain}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketParticipant"]) obj["MarketParticipant_string"] = obj["MarketParticipant"].join ();
                if (obj["Price"]) obj["Price_string"] = obj["Price"].join ();
                if (obj["MarketDocument"]) obj["MarketDocument_string"] = obj["MarketDocument"].join ();
                if (obj["ConstraintDuration"]) obj["ConstraintDuration_string"] = obj["ConstraintDuration"].join ();
                if (obj["MarketObjectStatus"]) obj["MarketObjectStatus_string"] = obj["MarketObjectStatus"].join ();
                if (obj["EnvironmentalMonitoringStation"]) obj["EnvironmentalMonitoringStation_string"] = obj["EnvironmentalMonitoringStation"].join ();
                if (obj["MktPSRType"]) obj["MktPSRType_string"] = obj["MktPSRType"].join ();
                if (obj["Quantity"]) obj["Quantity_string"] = obj["Quantity"].join ();
                if (obj["Reason"]) obj["Reason_string"] = obj["Reason"].join ();
                if (obj["MarketEvaluationPoint"]) obj["MarketEvaluationPoint_string"] = obj["MarketEvaluationPoint"].join ();
                if (obj["DateAndOrTime"]) obj["DateAndOrTime_string"] = obj["DateAndOrTime"].join ();
                if (obj["AttributeInstanceComponent"]) obj["AttributeInstanceComponent_string"] = obj["AttributeInstanceComponent"].join ();
                if (obj["FlowDirection"]) obj["FlowDirection_string"] = obj["FlowDirection"].join ();
                if (obj["Point"]) obj["Point_string"] = obj["Point"].join ();
                if (obj["Unit"]) obj["Unit_string"] = obj["Unit"].join ();
                if (obj["Auction"]) obj["Auction_string"] = obj["Auction"].join ();
                if (obj["Period"]) obj["Period_string"] = obj["Period"].join ();
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
                if (obj["Domain"]) obj["Domain_string"] = obj["Domain"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketParticipant_string"];
                delete obj["Price_string"];
                delete obj["MarketDocument_string"];
                delete obj["ConstraintDuration_string"];
                delete obj["MarketObjectStatus_string"];
                delete obj["EnvironmentalMonitoringStation_string"];
                delete obj["MktPSRType_string"];
                delete obj["Quantity_string"];
                delete obj["Reason_string"];
                delete obj["MarketEvaluationPoint_string"];
                delete obj["DateAndOrTime_string"];
                delete obj["AttributeInstanceComponent_string"];
                delete obj["FlowDirection_string"];
                delete obj["Point_string"];
                delete obj["Unit_string"];
                delete obj["Auction_string"];
                delete obj["Period_string"];
                delete obj["RegisteredResource_string"];
                delete obj["Domain_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TimeSeries_collapse" aria-expanded="true" aria-controls="{{id}}_TimeSeries_collapse" style="margin-left: 10px;">TimeSeries</a></legend>
                    <div id="{{id}}_TimeSeries_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_businessType'>businessType: </label><div class='col-sm-8'><input id='{{id}}_businessType' class='form-control' type='text'{{#businessType}} value='{{businessType}}'{{/businessType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cancelledTS'>cancelledTS: </label><div class='col-sm-8'><input id='{{id}}_cancelledTS' class='form-control' type='text'{{#cancelledTS}} value='{{cancelledTS}}'{{/cancelledTS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_curveType'>curveType: </label><div class='col-sm-8'><input id='{{id}}_curveType' class='form-control' type='text'{{#curveType}} value='{{curveType}}'{{/curveType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_objectAggregation'>objectAggregation: </label><div class='col-sm-8'><input id='{{id}}_objectAggregation' class='form-control' type='text'{{#objectAggregation}} value='{{objectAggregation}}'{{/objectAggregation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_product'>product: </label><div class='col-sm-8'><input id='{{id}}_product' class='form-control' type='text'{{#product}} value='{{product}}'{{/product}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_version'>version: </label><div class='col-sm-8'><input id='{{id}}_version' class='form-control' type='text'{{#version}} value='{{version}}'{{/version}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketParticipant'>MarketParticipant: </label><div class='col-sm-8'><input id='{{id}}_MarketParticipant' class='form-control' type='text'{{#MarketParticipant}} value='{{MarketParticipant_string}}'{{/MarketParticipant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Price'>Price: </label><div class='col-sm-8'><input id='{{id}}_Price' class='form-control' type='text'{{#Price}} value='{{Price_string}}'{{/Price}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketDocument'>MarketDocument: </label><div class='col-sm-8'><input id='{{id}}_MarketDocument' class='form-control' type='text'{{#MarketDocument}} value='{{MarketDocument_string}}'{{/MarketDocument}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConstraintDuration'>ConstraintDuration: </label><div class='col-sm-8'><input id='{{id}}_ConstraintDuration' class='form-control' type='text'{{#ConstraintDuration}} value='{{ConstraintDuration_string}}'{{/ConstraintDuration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketObjectStatus'>MarketObjectStatus: </label><div class='col-sm-8'><input id='{{id}}_MarketObjectStatus' class='form-control' type='text'{{#MarketObjectStatus}} value='{{MarketObjectStatus_string}}'{{/MarketObjectStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalMonitoringStation'>EnvironmentalMonitoringStation: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalMonitoringStation' class='form-control' type='text'{{#EnvironmentalMonitoringStation}} value='{{EnvironmentalMonitoringStation_string}}'{{/EnvironmentalMonitoringStation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktPSRType'>MktPSRType: </label><div class='col-sm-8'><input id='{{id}}_MktPSRType' class='form-control' type='text'{{#MktPSRType}} value='{{MktPSRType_string}}'{{/MktPSRType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Quantity'>Quantity: </label><div class='col-sm-8'><input id='{{id}}_Quantity' class='form-control' type='text'{{#Quantity}} value='{{Quantity_string}}'{{/Quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Reason'>Reason: </label><div class='col-sm-8'><input id='{{id}}_Reason' class='form-control' type='text'{{#Reason}} value='{{Reason_string}}'{{/Reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketEvaluationPoint'>MarketEvaluationPoint: </label><div class='col-sm-8'><input id='{{id}}_MarketEvaluationPoint' class='form-control' type='text'{{#MarketEvaluationPoint}} value='{{MarketEvaluationPoint_string}}'{{/MarketEvaluationPoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DateAndOrTime'>DateAndOrTime: </label><div class='col-sm-8'><input id='{{id}}_DateAndOrTime' class='form-control' type='text'{{#DateAndOrTime}} value='{{DateAndOrTime_string}}'{{/DateAndOrTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AttributeInstanceComponent'>AttributeInstanceComponent: </label><div class='col-sm-8'><input id='{{id}}_AttributeInstanceComponent' class='form-control' type='text'{{#AttributeInstanceComponent}} value='{{AttributeInstanceComponent_string}}'{{/AttributeInstanceComponent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FlowDirection'>FlowDirection: </label><div class='col-sm-8'><input id='{{id}}_FlowDirection' class='form-control' type='text'{{#FlowDirection}} value='{{FlowDirection_string}}'{{/FlowDirection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Point'>Point: </label><div class='col-sm-8'><input id='{{id}}_Point' class='form-control' type='text'{{#Point}} value='{{Point_string}}'{{/Point}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Unit'>Unit: </label><div class='col-sm-8'><input id='{{id}}_Unit' class='form-control' type='text'{{#Unit}} value='{{Unit_string}}'{{/Unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Auction'>Auction: </label><div class='col-sm-8'><input id='{{id}}_Auction' class='form-control' type='text'{{#Auction}} value='{{Auction_string}}'{{/Auction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Period'>Period: </label><div class='col-sm-8'><input id='{{id}}_Period' class='form-control' type='text'{{#Period}} value='{{Period_string}}'{{/Period}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource_string}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Domain'>Domain: </label><div class='col-sm-8'><input id='{{id}}_Domain' class='form-control' type='text'{{#Domain}} value='{{Domain_string}}'{{/Domain}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TimeSeries" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_businessType").value; if ("" !== temp) obj["businessType"] = temp;
                temp = document.getElementById (id + "_cancelledTS").value; if ("" !== temp) obj["cancelledTS"] = temp;
                temp = document.getElementById (id + "_curveType").value; if ("" !== temp) obj["curveType"] = temp;
                temp = document.getElementById (id + "_objectAggregation").value; if ("" !== temp) obj["objectAggregation"] = temp;
                temp = document.getElementById (id + "_product").value; if ("" !== temp) obj["product"] = temp;
                temp = document.getElementById (id + "_version").value; if ("" !== temp) obj["version"] = temp;
                temp = document.getElementById (id + "_MarketParticipant").value; if ("" !== temp) obj["MarketParticipant"] = temp.split (",");
                temp = document.getElementById (id + "_Price").value; if ("" !== temp) obj["Price"] = temp.split (",");
                temp = document.getElementById (id + "_MarketDocument").value; if ("" !== temp) obj["MarketDocument"] = temp.split (",");
                temp = document.getElementById (id + "_ConstraintDuration").value; if ("" !== temp) obj["ConstraintDuration"] = temp.split (",");
                temp = document.getElementById (id + "_MarketObjectStatus").value; if ("" !== temp) obj["MarketObjectStatus"] = temp.split (",");
                temp = document.getElementById (id + "_EnvironmentalMonitoringStation").value; if ("" !== temp) obj["EnvironmentalMonitoringStation"] = temp.split (",");
                temp = document.getElementById (id + "_MktPSRType").value; if ("" !== temp) obj["MktPSRType"] = temp.split (",");
                temp = document.getElementById (id + "_Quantity").value; if ("" !== temp) obj["Quantity"] = temp.split (",");
                temp = document.getElementById (id + "_Reason").value; if ("" !== temp) obj["Reason"] = temp.split (",");
                temp = document.getElementById (id + "_MarketEvaluationPoint").value; if ("" !== temp) obj["MarketEvaluationPoint"] = temp.split (",");
                temp = document.getElementById (id + "_DateAndOrTime").value; if ("" !== temp) obj["DateAndOrTime"] = temp.split (",");
                temp = document.getElementById (id + "_AttributeInstanceComponent").value; if ("" !== temp) obj["AttributeInstanceComponent"] = temp.split (",");
                temp = document.getElementById (id + "_FlowDirection").value; if ("" !== temp) obj["FlowDirection"] = temp.split (",");
                temp = document.getElementById (id + "_Point").value; if ("" !== temp) obj["Point"] = temp.split (",");
                temp = document.getElementById (id + "_Unit").value; if ("" !== temp) obj["Unit"] = temp.split (",");
                temp = document.getElementById (id + "_Auction").value; if ("" !== temp) obj["Auction"] = temp.split (",");
                temp = document.getElementById (id + "_Period").value; if ("" !== temp) obj["Period"] = temp.split (",");
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp.split (",");
                temp = document.getElementById (id + "_Domain").value; if ("" !== temp) obj["Domain"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketParticipant", "0..*", "0..*", "MarketParticipant", "TimeSeries"],
                            ["Price", "0..*", "0..*", "Price", "TimeSeries"],
                            ["MarketDocument", "0..*", "0..*", "MarketDocument", "TimeSeries"],
                            ["ConstraintDuration", "0..*", "0..*", "ConstraintDuration", "TimeSeries"],
                            ["MarketObjectStatus", "0..*", "0..*", "MarketObjectStatus", "TimeSeries"],
                            ["EnvironmentalMonitoringStation", "0..*", "0..*", "EnvironmentalMonitoringStation", "TimeSeries"],
                            ["MktPSRType", "0..*", "0..*", "MktPSRType", "TimeSeries"],
                            ["Quantity", "0..*", "0..*", "Quantity", "TimeSeries"],
                            ["Reason", "0..*", "0..*", "Reason", "TimeSeries"],
                            ["MarketEvaluationPoint", "0..*", "0..*", "MarketEvaluationPoint", "TimeSeries"],
                            ["DateAndOrTime", "0..*", "0..*", "DateAndOrTime", "TimeSeries"],
                            ["AttributeInstanceComponent", "0..*", "0..*", "AttributeInstanceComponent", "TimeSeries"],
                            ["FlowDirection", "0..*", "0..*", "FlowDirection", "TimeSeries"],
                            ["Point", "0..*", "0..*", "Point", "TimeSeries"],
                            ["Unit", "0..*", "0..*", "Unit", "TimeSeries"],
                            ["Auction", "0..*", "0..*", "Auction", "TimeSeries"],
                            ["Period", "0..*", "0..*", "Period", "TimeSeries"],
                            ["RegisteredResource", "0..*", "0..*", "RegisteredResource", "TimeSeries"],
                            ["Domain", "0..*", "0..*", "Domain", "TimeSeries"]
                        ]
                    )
                );
            }
        }

        /**
         * The Area Control Error tariff type that is applied or used.
         *
         */
        class AceTariffType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AceTariffType;
                if (null == bucket)
                   cim_data.AceTariffType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AceTariffType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AceTariffType";
                base.parse_element (/<cim:AceTariffType.type>([\s\S]*?)<\/cim:AceTariffType.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:AceTariffType.Unit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Unit", sub, context);
                base.parse_attributes (/<cim:AceTariffType.MarketDocument\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketDocument", sub, context);
                base.parse_attributes (/<cim:AceTariffType.Point\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Point", sub, context);
                let bucket = context.parsed.AceTariffType;
                if (null == bucket)
                   context.parsed.AceTariffType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "AceTariffType", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "AceTariffType", "Unit", "Unit", fields);
                base.export_attributes (obj, "AceTariffType", "MarketDocument", "MarketDocument", fields);
                base.export_attributes (obj, "AceTariffType", "Point", "Point", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AceTariffType_collapse" aria-expanded="true" aria-controls="AceTariffType_collapse" style="margin-left: 10px;">AceTariffType</a></legend>
                    <div id="AceTariffType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#Unit}}<div><b>Unit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Unit}}
                    {{#MarketDocument}}<div><b>MarketDocument</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketDocument}}
                    {{#Point}}<div><b>Point</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Point}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Unit"]) obj["Unit_string"] = obj["Unit"].join ();
                if (obj["MarketDocument"]) obj["MarketDocument_string"] = obj["MarketDocument"].join ();
                if (obj["Point"]) obj["Point_string"] = obj["Point"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Unit_string"];
                delete obj["MarketDocument_string"];
                delete obj["Point_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AceTariffType_collapse" aria-expanded="true" aria-controls="{{id}}_AceTariffType_collapse" style="margin-left: 10px;">AceTariffType</a></legend>
                    <div id="{{id}}_AceTariffType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Unit'>Unit: </label><div class='col-sm-8'><input id='{{id}}_Unit' class='form-control' type='text'{{#Unit}} value='{{Unit_string}}'{{/Unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketDocument'>MarketDocument: </label><div class='col-sm-8'><input id='{{id}}_MarketDocument' class='form-control' type='text'{{#MarketDocument}} value='{{MarketDocument_string}}'{{/MarketDocument}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Point'>Point: </label><div class='col-sm-8'><input id='{{id}}_Point' class='form-control' type='text'{{#Point}} value='{{Point_string}}'{{/Point}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AceTariffType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" !== temp) obj["type"] = temp;
                temp = document.getElementById (id + "_Unit").value; if ("" !== temp) obj["Unit"] = temp.split (",");
                temp = document.getElementById (id + "_MarketDocument").value; if ("" !== temp) obj["MarketDocument"] = temp.split (",");
                temp = document.getElementById (id + "_Point").value; if ("" !== temp) obj["Point"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Unit", "0..*", "0..*", "Unit", "AceTariffType"],
                            ["MarketDocument", "0..*", "0..*", "MarketDocument", "AceTariffType"],
                            ["Point", "0..*", "0..*", "Point", "AceTariffType"]
                        ]
                    )
                );
            }
        }

        /**
         * The type of a power system resource.
         *
         */
        class MktPSRType extends Core.PSRType
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktPSRType;
                if (null == bucket)
                   cim_data.MktPSRType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktPSRType[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.PSRType.prototype.parse.call (this, context, sub);
                obj.cls = "MktPSRType";
                base.parse_element (/<cim:MktPSRType.psrType>([\s\S]*?)<\/cim:MktPSRType.psrType>/g, obj, "psrType", base.to_string, sub, context);
                base.parse_attributes (/<cim:MktPSRType.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                let bucket = context.parsed.MktPSRType;
                if (null == bucket)
                   context.parsed.MktPSRType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PSRType.prototype.export.call (this, obj, false);

                base.export_element (obj, "MktPSRType", "psrType", "psrType",  base.from_string, fields);
                base.export_attributes (obj, "MktPSRType", "TimeSeries", "TimeSeries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktPSRType_collapse" aria-expanded="true" aria-controls="MktPSRType_collapse" style="margin-left: 10px;">MktPSRType</a></legend>
                    <div id="MktPSRType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PSRType.prototype.template.call (this) +
                    `
                    {{#psrType}}<div><b>psrType</b>: {{psrType}}</div>{{/psrType}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TimeSeries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktPSRType_collapse" aria-expanded="true" aria-controls="{{id}}_MktPSRType_collapse" style="margin-left: 10px;">MktPSRType</a></legend>
                    <div id="{{id}}_MktPSRType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PSRType.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_psrType'>psrType: </label><div class='col-sm-8'><input id='{{id}}_psrType' class='form-control' type='text'{{#psrType}} value='{{psrType}}'{{/psrType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MktPSRType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_psrType").value; if ("" !== temp) obj["psrType"] = temp;
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "MktPSRType"]
                        ]
                    )
                );
            }
        }

        /**
         * The coded identification of the direction of energy flow.
         *
         */
        class FlowDirection extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FlowDirection;
                if (null == bucket)
                   cim_data.FlowDirection = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FlowDirection[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FlowDirection";
                base.parse_element (/<cim:FlowDirection.direction>([\s\S]*?)<\/cim:FlowDirection.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_attributes (/<cim:FlowDirection.Point\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Point", sub, context);
                base.parse_attributes (/<cim:FlowDirection.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                let bucket = context.parsed.FlowDirection;
                if (null == bucket)
                   context.parsed.FlowDirection = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "FlowDirection", "direction", "direction",  base.from_string, fields);
                base.export_attributes (obj, "FlowDirection", "Point", "Point", fields);
                base.export_attributes (obj, "FlowDirection", "TimeSeries", "TimeSeries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FlowDirection_collapse" aria-expanded="true" aria-controls="FlowDirection_collapse" style="margin-left: 10px;">FlowDirection</a></legend>
                    <div id="FlowDirection_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
                    {{#Point}}<div><b>Point</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Point}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Point"]) obj["Point_string"] = obj["Point"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Point_string"];
                delete obj["TimeSeries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FlowDirection_collapse" aria-expanded="true" aria-controls="{{id}}_FlowDirection_collapse" style="margin-left: 10px;">FlowDirection</a></legend>
                    <div id="{{id}}_FlowDirection_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_direction'>direction: </label><div class='col-sm-8'><input id='{{id}}_direction' class='form-control' type='text'{{#direction}} value='{{direction}}'{{/direction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Point'>Point: </label><div class='col-sm-8'><input id='{{id}}_Point' class='form-control' type='text'{{#Point}} value='{{Point_string}}'{{/Point}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FlowDirection" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_direction").value; if ("" !== temp) obj["direction"] = temp;
                temp = document.getElementById (id + "_Point").value; if ("" !== temp) obj["Point"] = temp.split (",");
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Point", "0..*", "0..*", "Point", "FlowDirection"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "FlowDirection"]
                        ]
                    )
                );
            }
        }

        /**
         * An area of activity defined within the energy market.
         *
         */
        class Domain_ extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Domain;
                if (null == bucket)
                   cim_data.Domain = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Domain[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Domain";
                base.parse_attributes (/<cim:Domain.Quantity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Quantity", sub, context);
                base.parse_attributes (/<cim:Domain.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attributes (/<cim:Domain.MarketDocument\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketDocument", sub, context);
                base.parse_attributes (/<cim:Domain.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                base.parse_attributes (/<cim:Domain.Price\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Price", sub, context);
                let bucket = context.parsed.Domain;
                if (null == bucket)
                   context.parsed.Domain = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Domain", "Quantity", "Quantity", fields);
                base.export_attributes (obj, "Domain", "RegisteredResource", "RegisteredResource", fields);
                base.export_attributes (obj, "Domain", "MarketDocument", "MarketDocument", fields);
                base.export_attributes (obj, "Domain", "TimeSeries", "TimeSeries", fields);
                base.export_attributes (obj, "Domain", "Price", "Price", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Domain_collapse" aria-expanded="true" aria-controls="Domain_collapse" style="margin-left: 10px;">Domain</a></legend>
                    <div id="Domain_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Quantity}}<div><b>Quantity</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Quantity}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    {{#MarketDocument}}<div><b>MarketDocument</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketDocument}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    {{#Price}}<div><b>Price</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Price}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Quantity"]) obj["Quantity_string"] = obj["Quantity"].join ();
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
                if (obj["MarketDocument"]) obj["MarketDocument_string"] = obj["MarketDocument"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
                if (obj["Price"]) obj["Price_string"] = obj["Price"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Quantity_string"];
                delete obj["RegisteredResource_string"];
                delete obj["MarketDocument_string"];
                delete obj["TimeSeries_string"];
                delete obj["Price_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Domain_collapse" aria-expanded="true" aria-controls="{{id}}_Domain_collapse" style="margin-left: 10px;">Domain</a></legend>
                    <div id="{{id}}_Domain_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Quantity'>Quantity: </label><div class='col-sm-8'><input id='{{id}}_Quantity' class='form-control' type='text'{{#Quantity}} value='{{Quantity_string}}'{{/Quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource_string}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketDocument'>MarketDocument: </label><div class='col-sm-8'><input id='{{id}}_MarketDocument' class='form-control' type='text'{{#MarketDocument}} value='{{MarketDocument_string}}'{{/MarketDocument}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Price'>Price: </label><div class='col-sm-8'><input id='{{id}}_Price' class='form-control' type='text'{{#Price}} value='{{Price_string}}'{{/Price}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Domain" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Quantity").value; if ("" !== temp) obj["Quantity"] = temp.split (",");
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp.split (",");
                temp = document.getElementById (id + "_MarketDocument").value; if ("" !== temp) obj["MarketDocument"] = temp.split (",");
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");
                temp = document.getElementById (id + "_Price").value; if ("" !== temp) obj["Price"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Quantity", "0..*", "0..*", "Quantity", "Domain"],
                            ["RegisteredResource", "0..*", "0..*", "RegisteredResource", "Domain"],
                            ["MarketDocument", "0..*", "0..*", "MarketDocument", "Domain"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "Domain"],
                            ["Price", "0..*", "0..*", "Price", "Domain"]
                        ]
                    )
                );
            }
        }

        /**
         * The identification of the unit name for the time series quantities.
         *
         */
        class Unit extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Unit;
                if (null == bucket)
                   cim_data.Unit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Unit[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Unit";
                base.parse_element (/<cim:Unit.name>([\s\S]*?)<\/cim:Unit.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_attributes (/<cim:Unit.AceTariffType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AceTariffType", sub, context);
                base.parse_attributes (/<cim:Unit.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                let bucket = context.parsed.Unit;
                if (null == bucket)
                   context.parsed.Unit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "Unit", "name", "name",  base.from_string, fields);
                base.export_attributes (obj, "Unit", "AceTariffType", "AceTariffType", fields);
                base.export_attributes (obj, "Unit", "TimeSeries", "TimeSeries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Unit_collapse" aria-expanded="true" aria-controls="Unit_collapse" style="margin-left: 10px;">Unit</a></legend>
                    <div id="Unit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#AceTariffType}}<div><b>AceTariffType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AceTariffType}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["AceTariffType"]) obj["AceTariffType_string"] = obj["AceTariffType"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["AceTariffType_string"];
                delete obj["TimeSeries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Unit_collapse" aria-expanded="true" aria-controls="{{id}}_Unit_collapse" style="margin-left: 10px;">Unit</a></legend>
                    <div id="{{id}}_Unit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AceTariffType'>AceTariffType: </label><div class='col-sm-8'><input id='{{id}}_AceTariffType' class='form-control' type='text'{{#AceTariffType}} value='{{AceTariffType_string}}'{{/AceTariffType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Unit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_name").value; if ("" !== temp) obj["name"] = temp;
                temp = document.getElementById (id + "_AceTariffType").value; if ("" !== temp) obj["AceTariffType"] = temp.split (",");
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AceTariffType", "0..*", "0..*", "AceTariffType", "Unit"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "Unit"]
                        ]
                    )
                );
            }
        }

        /**
         * An identification  or eventually the contents of an agreement between two or more parties.
         *
         */
        class MarketAgreement extends MarketDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketAgreement;
                if (null == bucket)
                   cim_data.MarketAgreement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketAgreement[obj.id];
            }

            parse (context, sub)
            {
                let obj = MarketDocument.prototype.parse.call (this, context, sub);
                obj.cls = "MarketAgreement";
                let bucket = context.parsed.MarketAgreement;
                if (null == bucket)
                   context.parsed.MarketAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = MarketDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketAgreement_collapse" aria-expanded="true" aria-controls="MarketAgreement_collapse" style="margin-left: 10px;">MarketAgreement</a></legend>
                    <div id="MarketAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketDocument.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketAgreement_collapse" aria-expanded="true" aria-controls="{{id}}_MarketAgreement_collapse" style="margin-left: 10px;">MarketAgreement</a></legend>
                    <div id="{{id}}_MarketAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketDocument.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "MarketAgreement" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A set of similar physical or conceptual objects defined for the same period or point of time.
         *
         */
        class Series extends TimeSeries
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Series;
                if (null == bucket)
                   cim_data.Series = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Series[obj.id];
            }

            parse (context, sub)
            {
                let obj = TimeSeries.prototype.parse.call (this, context, sub);
                obj.cls = "Series";
                base.parse_element (/<cim:Series.lastUpdateDate>([\s\S]*?)<\/cim:Series.lastUpdateDate>/g, obj, "lastUpdateDate", base.to_string, sub, context);
                base.parse_element (/<cim:Series.methodType>([\s\S]*?)<\/cim:Series.methodType>/g, obj, "methodType", base.to_string, sub, context);
                base.parse_element (/<cim:Series.registrationDate>([\s\S]*?)<\/cim:Series.registrationDate>/g, obj, "registrationDate", base.to_string, sub, context);
                base.parse_attributes (/<cim:Series.SelfSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SelfSeries", sub, context);
                base.parse_attributes (/<cim:Series.Series\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Series", sub, context);
                let bucket = context.parsed.Series;
                if (null == bucket)
                   context.parsed.Series = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = TimeSeries.prototype.export.call (this, obj, false);

                base.export_element (obj, "Series", "lastUpdateDate", "lastUpdateDate",  base.from_string, fields);
                base.export_element (obj, "Series", "methodType", "methodType",  base.from_string, fields);
                base.export_element (obj, "Series", "registrationDate", "registrationDate",  base.from_string, fields);
                base.export_attributes (obj, "Series", "SelfSeries", "SelfSeries", fields);
                base.export_attributes (obj, "Series", "Series", "Series", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Series_collapse" aria-expanded="true" aria-controls="Series_collapse" style="margin-left: 10px;">Series</a></legend>
                    <div id="Series_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TimeSeries.prototype.template.call (this) +
                    `
                    {{#lastUpdateDate}}<div><b>lastUpdateDate</b>: {{lastUpdateDate}}</div>{{/lastUpdateDate}}
                    {{#methodType}}<div><b>methodType</b>: {{methodType}}</div>{{/methodType}}
                    {{#registrationDate}}<div><b>registrationDate</b>: {{registrationDate}}</div>{{/registrationDate}}
                    {{#SelfSeries}}<div><b>SelfSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SelfSeries}}
                    {{#Series}}<div><b>Series</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Series}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["SelfSeries"]) obj["SelfSeries_string"] = obj["SelfSeries"].join ();
                if (obj["Series"]) obj["Series_string"] = obj["Series"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["SelfSeries_string"];
                delete obj["Series_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Series_collapse" aria-expanded="true" aria-controls="{{id}}_Series_collapse" style="margin-left: 10px;">Series</a></legend>
                    <div id="{{id}}_Series_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TimeSeries.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastUpdateDate'>lastUpdateDate: </label><div class='col-sm-8'><input id='{{id}}_lastUpdateDate' class='form-control' type='text'{{#lastUpdateDate}} value='{{lastUpdateDate}}'{{/lastUpdateDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_methodType'>methodType: </label><div class='col-sm-8'><input id='{{id}}_methodType' class='form-control' type='text'{{#methodType}} value='{{methodType}}'{{/methodType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_registrationDate'>registrationDate: </label><div class='col-sm-8'><input id='{{id}}_registrationDate' class='form-control' type='text'{{#registrationDate}} value='{{registrationDate}}'{{/registrationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SelfSeries'>SelfSeries: </label><div class='col-sm-8'><input id='{{id}}_SelfSeries' class='form-control' type='text'{{#SelfSeries}} value='{{SelfSeries_string}}'{{/SelfSeries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Series'>Series: </label><div class='col-sm-8'><input id='{{id}}_Series' class='form-control' type='text'{{#Series}} value='{{Series_string}}'{{/Series}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Series" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_lastUpdateDate").value; if ("" !== temp) obj["lastUpdateDate"] = temp;
                temp = document.getElementById (id + "_methodType").value; if ("" !== temp) obj["methodType"] = temp;
                temp = document.getElementById (id + "_registrationDate").value; if ("" !== temp) obj["registrationDate"] = temp;
                temp = document.getElementById (id + "_SelfSeries").value; if ("" !== temp) obj["SelfSeries"] = temp.split (",");
                temp = document.getElementById (id + "_Series").value; if ("" !== temp) obj["Series"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SelfSeries", "0..*", "0..*", "Series", "Series"],
                            ["Series", "0..*", "0..*", "Series", "SelfSeries"]
                        ]
                    )
                );
            }
        }

        /**
         * The formal specification of specific characteristics related to a bid.
         *
         */
        class BidTimeSeries extends TimeSeries
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BidTimeSeries;
                if (null == bucket)
                   cim_data.BidTimeSeries = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BidTimeSeries[obj.id];
            }

            parse (context, sub)
            {
                let obj = TimeSeries.prototype.parse.call (this, context, sub);
                obj.cls = "BidTimeSeries";
                base.parse_element (/<cim:BidTimeSeries.blockBid>([\s\S]*?)<\/cim:BidTimeSeries.blockBid>/g, obj, "blockBid", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.direction>([\s\S]*?)<\/cim:BidTimeSeries.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.divisible>([\s\S]*?)<\/cim:BidTimeSeries.divisible>/g, obj, "divisible", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.exclusiveBidsIdentification>([\s\S]*?)<\/cim:BidTimeSeries.exclusiveBidsIdentification>/g, obj, "exclusiveBidsIdentification", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.linkedBidsIdentification>([\s\S]*?)<\/cim:BidTimeSeries.linkedBidsIdentification>/g, obj, "linkedBidsIdentification", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.minimumActivationQuantity>([\s\S]*?)<\/cim:BidTimeSeries.minimumActivationQuantity>/g, obj, "minimumActivationQuantity", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.priority>([\s\S]*?)<\/cim:BidTimeSeries.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.status>([\s\S]*?)<\/cim:BidTimeSeries.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.stepIncrementQuantity>([\s\S]*?)<\/cim:BidTimeSeries.stepIncrementQuantity>/g, obj, "stepIncrementQuantity", base.to_string, sub, context);
                let bucket = context.parsed.BidTimeSeries;
                if (null == bucket)
                   context.parsed.BidTimeSeries = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = TimeSeries.prototype.export.call (this, obj, false);

                base.export_element (obj, "BidTimeSeries", "blockBid", "blockBid",  base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "direction", "direction",  base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "divisible", "divisible",  base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "exclusiveBidsIdentification", "exclusiveBidsIdentification",  base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "linkedBidsIdentification", "linkedBidsIdentification",  base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "minimumActivationQuantity", "minimumActivationQuantity",  base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "priority", "priority",  base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "status", "status",  base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "stepIncrementQuantity", "stepIncrementQuantity",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BidTimeSeries_collapse" aria-expanded="true" aria-controls="BidTimeSeries_collapse" style="margin-left: 10px;">BidTimeSeries</a></legend>
                    <div id="BidTimeSeries_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TimeSeries.prototype.template.call (this) +
                    `
                    {{#blockBid}}<div><b>blockBid</b>: {{blockBid}}</div>{{/blockBid}}
                    {{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
                    {{#divisible}}<div><b>divisible</b>: {{divisible}}</div>{{/divisible}}
                    {{#exclusiveBidsIdentification}}<div><b>exclusiveBidsIdentification</b>: {{exclusiveBidsIdentification}}</div>{{/exclusiveBidsIdentification}}
                    {{#linkedBidsIdentification}}<div><b>linkedBidsIdentification</b>: {{linkedBidsIdentification}}</div>{{/linkedBidsIdentification}}
                    {{#minimumActivationQuantity}}<div><b>minimumActivationQuantity</b>: {{minimumActivationQuantity}}</div>{{/minimumActivationQuantity}}
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#stepIncrementQuantity}}<div><b>stepIncrementQuantity</b>: {{stepIncrementQuantity}}</div>{{/stepIncrementQuantity}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BidTimeSeries_collapse" aria-expanded="true" aria-controls="{{id}}_BidTimeSeries_collapse" style="margin-left: 10px;">BidTimeSeries</a></legend>
                    <div id="{{id}}_BidTimeSeries_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TimeSeries.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_blockBid'>blockBid: </label><div class='col-sm-8'><input id='{{id}}_blockBid' class='form-control' type='text'{{#blockBid}} value='{{blockBid}}'{{/blockBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_direction'>direction: </label><div class='col-sm-8'><input id='{{id}}_direction' class='form-control' type='text'{{#direction}} value='{{direction}}'{{/direction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_divisible'>divisible: </label><div class='col-sm-8'><input id='{{id}}_divisible' class='form-control' type='text'{{#divisible}} value='{{divisible}}'{{/divisible}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_exclusiveBidsIdentification'>exclusiveBidsIdentification: </label><div class='col-sm-8'><input id='{{id}}_exclusiveBidsIdentification' class='form-control' type='text'{{#exclusiveBidsIdentification}} value='{{exclusiveBidsIdentification}}'{{/exclusiveBidsIdentification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_linkedBidsIdentification'>linkedBidsIdentification: </label><div class='col-sm-8'><input id='{{id}}_linkedBidsIdentification' class='form-control' type='text'{{#linkedBidsIdentification}} value='{{linkedBidsIdentification}}'{{/linkedBidsIdentification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumActivationQuantity'>minimumActivationQuantity: </label><div class='col-sm-8'><input id='{{id}}_minimumActivationQuantity' class='form-control' type='text'{{#minimumActivationQuantity}} value='{{minimumActivationQuantity}}'{{/minimumActivationQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priority'>priority: </label><div class='col-sm-8'><input id='{{id}}_priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stepIncrementQuantity'>stepIncrementQuantity: </label><div class='col-sm-8'><input id='{{id}}_stepIncrementQuantity' class='form-control' type='text'{{#stepIncrementQuantity}} value='{{stepIncrementQuantity}}'{{/stepIncrementQuantity}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BidTimeSeries" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_blockBid").value; if ("" !== temp) obj["blockBid"] = temp;
                temp = document.getElementById (id + "_direction").value; if ("" !== temp) obj["direction"] = temp;
                temp = document.getElementById (id + "_divisible").value; if ("" !== temp) obj["divisible"] = temp;
                temp = document.getElementById (id + "_exclusiveBidsIdentification").value; if ("" !== temp) obj["exclusiveBidsIdentification"] = temp;
                temp = document.getElementById (id + "_linkedBidsIdentification").value; if ("" !== temp) obj["linkedBidsIdentification"] = temp;
                temp = document.getElementById (id + "_minimumActivationQuantity").value; if ("" !== temp) obj["minimumActivationQuantity"] = temp;
                temp = document.getElementById (id + "_priority").value; if ("" !== temp) obj["priority"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_stepIncrementQuantity").value; if ("" !== temp) obj["stepIncrementQuantity"] = temp;

                return (obj);
            }
        }

        return (
            {
                AttributeInstanceComponent: AttributeInstanceComponent,
                FlowDirection: FlowDirection,
                Reason: Reason,
                TimeSeries: TimeSeries,
                MarketObjectStatus: MarketObjectStatus,
                Domain: Domain_,
                Series: Series,
                MarketAgreement: MarketAgreement,
                AceTariffType: AceTariffType,
                ConstraintDuration: ConstraintDuration,
                MarketEvaluationPoint: MarketEvaluationPoint,
                MktPSRType: MktPSRType,
                Unit: Unit,
                Quantity: Quantity,
                Point: Point,
                Process: Process,
                Auction: Auction,
                Price: Price,
                BidTimeSeries: BidTimeSeries,
                Period: Period,
                DateAndOrTime: DateAndOrTime,
                MarketDocument: MarketDocument
            }
        );
    }
);