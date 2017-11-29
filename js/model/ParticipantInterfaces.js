define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * Market participant interfaces for bids and trades.
     *
     */
    function (base, Common, Core)
    {

        /**
         * Charge Group is the grouping of Charge Types for settlement invoicing purpose.
         *
         * Examples such as Ancillary Services, Interests, etc.
         *
         */
        class ChargeGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ChargeGroup;
                if (null == bucket)
                   cim_data.ChargeGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ChargeGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ChargeGroup";
                base.parse_element (/<cim:ChargeGroup.marketCode>([\s\S]*?)<\/cim:ChargeGroup.marketCode>/g, obj, "marketCode", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeGroup.effectiveDate>([\s\S]*?)<\/cim:ChargeGroup.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ChargeGroup.terminationDate>([\s\S]*?)<\/cim:ChargeGroup.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:ChargeGroup.ChargeGroupParent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeGroupParent", sub, context);

                var bucket = context.parsed.ChargeGroup;
                if (null == bucket)
                   context.parsed.ChargeGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ChargeGroup", "marketCode", base.from_string, fields);
                base.export_element (obj, "ChargeGroup", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "ChargeGroup", "terminationDate", base.from_datetime, fields);
                base.export_attribute (obj, "ChargeGroup", "ChargeGroupParent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ChargeGroup_collapse" aria-expanded="true" aria-controls="ChargeGroup_collapse">ChargeGroup</a>
<div id="ChargeGroup_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#marketCode}}<div><b>marketCode</b>: {{marketCode}}</div>{{/marketCode}}
{{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
{{#terminationDate}}<div><b>terminationDate</b>: {{terminationDate}}</div>{{/terminationDate}}
{{#ChargeGroupParent}}<div><b>ChargeGroupParent</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChargeGroupParent}}&quot;);})'>{{ChargeGroupParent}}</a></div>{{/ChargeGroupParent}}
</div>
`
                );
           }        }

        /**
         * Component of a bid that pertains to one market product.
         *
         */
        class ProductBid extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ProductBid;
                if (null == bucket)
                   cim_data.ProductBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProductBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ProductBid";
                base.parse_attribute (/<cim:ProductBid.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);
                base.parse_attribute (/<cim:ProductBid.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);

                var bucket = context.parsed.ProductBid;
                if (null == bucket)
                   context.parsed.ProductBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ProductBid", "MarketProduct", fields);
                base.export_attribute (obj, "ProductBid", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ProductBid_collapse" aria-expanded="true" aria-controls="ProductBid_collapse">ProductBid</a>
<div id="ProductBid_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#MarketProduct}}<div><b>MarketProduct</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketProduct}}&quot;);})'>{{MarketProduct}}</a></div>{{/MarketProduct}}
{{#Bid}}<div><b>Bid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Bid}}&quot;);})'>{{Bid}}</a></div>{{/Bid}}
</div>
`
                );
           }        }

        /**
         * Metered SubSystem Load Following Instruction
         *
         */
        class LoadFollowingInst extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadFollowingInst;
                if (null == bucket)
                   cim_data.LoadFollowingInst = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadFollowingInst[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LoadFollowingInst";
                base.parse_element (/<cim:LoadFollowingInst.mssInstructionID>([\s\S]*?)<\/cim:LoadFollowingInst.mssInstructionID>/g, obj, "mssInstructionID", base.to_string, sub, context);
                base.parse_element (/<cim:LoadFollowingInst.startTime>([\s\S]*?)<\/cim:LoadFollowingInst.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:LoadFollowingInst.endTime>([\s\S]*?)<\/cim:LoadFollowingInst.endTime>/g, obj, "endTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:LoadFollowingInst.loadFollowingMW>([\s\S]*?)<\/cim:LoadFollowingInst.loadFollowingMW>/g, obj, "loadFollowingMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:LoadFollowingInst.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.LoadFollowingInst;
                if (null == bucket)
                   context.parsed.LoadFollowingInst = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "LoadFollowingInst", "mssInstructionID", base.from_string, fields);
                base.export_element (obj, "LoadFollowingInst", "startTime", base.from_datetime, fields);
                base.export_element (obj, "LoadFollowingInst", "endTime", base.from_datetime, fields);
                base.export_element (obj, "LoadFollowingInst", "loadFollowingMW", base.from_float, fields);
                base.export_attribute (obj, "LoadFollowingInst", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LoadFollowingInst_collapse" aria-expanded="true" aria-controls="LoadFollowingInst_collapse">LoadFollowingInst</a>
<div id="LoadFollowingInst_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#mssInstructionID}}<div><b>mssInstructionID</b>: {{mssInstructionID}}</div>{{/mssInstructionID}}
{{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
{{#endTime}}<div><b>endTime</b>: {{endTime}}</div>{{/endTime}}
{{#loadFollowingMW}}<div><b>loadFollowingMW</b>: {{loadFollowingMW}}</div>{{/loadFollowingMW}}
{{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
</div>
`
                );
           }        }

        /**
         * Property for a particular attribute that contains name and value
         *
         */
        class AttributeProperty extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AttributeProperty;
                if (null == bucket)
                   cim_data.AttributeProperty = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AttributeProperty[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AttributeProperty";
                base.parse_element (/<cim:AttributeProperty.sequence>([\s\S]*?)<\/cim:AttributeProperty.sequence>/g, obj, "sequence", base.to_string, sub, context);
                base.parse_element (/<cim:AttributeProperty.propertyName>([\s\S]*?)<\/cim:AttributeProperty.propertyName>/g, obj, "propertyName", base.to_string, sub, context);
                base.parse_element (/<cim:AttributeProperty.propertyValue>([\s\S]*?)<\/cim:AttributeProperty.propertyValue>/g, obj, "propertyValue", base.to_string, sub, context);
                base.parse_attribute (/<cim:AttributeProperty.MktUserAttribute\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktUserAttribute", sub, context);

                var bucket = context.parsed.AttributeProperty;
                if (null == bucket)
                   context.parsed.AttributeProperty = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AttributeProperty", "sequence", base.from_string, fields);
                base.export_element (obj, "AttributeProperty", "propertyName", base.from_string, fields);
                base.export_element (obj, "AttributeProperty", "propertyValue", base.from_string, fields);
                base.export_attribute (obj, "AttributeProperty", "MktUserAttribute", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AttributeProperty_collapse" aria-expanded="true" aria-controls="AttributeProperty_collapse">AttributeProperty</a>
<div id="AttributeProperty_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#sequence}}<div><b>sequence</b>: {{sequence}}</div>{{/sequence}}
{{#propertyName}}<div><b>propertyName</b>: {{propertyName}}</div>{{/propertyName}}
{{#propertyValue}}<div><b>propertyValue</b>: {{propertyValue}}</div>{{/propertyValue}}
{{#MktUserAttribute}}<div><b>MktUserAttribute</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktUserAttribute}}&quot;);})'>{{MktUserAttribute}}</a></div>{{/MktUserAttribute}}
</div>
`
                );
           }        }

        /**
         * This is the price sensitivity that bidder expresses for allowing market load interruption.
         *
         * Relationship between price (Y1-axis) vs. MW (X-axis).
         *
         */
        class LoadReductionPriceCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadReductionPriceCurve;
                if (null == bucket)
                   cim_data.LoadReductionPriceCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadReductionPriceCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "LoadReductionPriceCurve";
                base.parse_attribute (/<cim:LoadReductionPriceCurve.LoadBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadBid", sub, context);

                var bucket = context.parsed.LoadReductionPriceCurve;
                if (null == bucket)
                   context.parsed.LoadReductionPriceCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "LoadReductionPriceCurve", "LoadBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LoadReductionPriceCurve_collapse" aria-expanded="true" aria-controls="LoadReductionPriceCurve_collapse">LoadReductionPriceCurve</a>
<div id="LoadReductionPriceCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#LoadBid}}<div><b>LoadBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadBid}}&quot;);})'>{{LoadBid}}</a></div>{{/LoadBid}}
</div>
`
                );
           }        }

        /**
         * Containment for bid parameters that are dependent on a market product type.
         *
         */
        class BidHourlyProductSchedule extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidHourlyProductSchedule;
                if (null == bucket)
                   cim_data.BidHourlyProductSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidHourlyProductSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "BidHourlyProductSchedule";
                base.parse_attribute (/<cim:BidHourlyProductSchedule.ProductBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBid", sub, context);

                var bucket = context.parsed.BidHourlyProductSchedule;
                if (null == bucket)
                   context.parsed.BidHourlyProductSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "BidHourlyProductSchedule", "ProductBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BidHourlyProductSchedule_collapse" aria-expanded="true" aria-controls="BidHourlyProductSchedule_collapse">BidHourlyProductSchedule</a>
<div id="BidHourlyProductSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.RegularIntervalSchedule.prototype.template.call (this) +
`
{{#ProductBid}}<div><b>ProductBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProductBid}}&quot;);})'>{{ProductBid}}</a></div>{{/ProductBid}}
</div>
`
                );
           }        }

        /**
         * Startup time curve as a function of down time, where time is specified in minutes.
         *
         * Relationship between unit startup time (Y1-axis) vs. unit elapsed down time (X-axis).
         *
         */
        class StartUpTimeCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StartUpTimeCurve;
                if (null == bucket)
                   cim_data.StartUpTimeCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StartUpTimeCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartUpTimeCurve";
                base.parse_attribute (/<cim:StartUpTimeCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.StartUpTimeCurve;
                if (null == bucket)
                   context.parsed.StartUpTimeCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "StartUpTimeCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#StartUpTimeCurve_collapse" aria-expanded="true" aria-controls="StartUpTimeCurve_collapse">StartUpTimeCurve</a>
<div id="StartUpTimeCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
</div>
`
                );
           }        }

        /**
         * Relationship between a price in \$(or other monetary unit) /hour (Y-axis) and a MW value (X-axis).
         *
         */
        class EnergyPriceCurve extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyPriceCurve;
                if (null == bucket)
                   cim_data.EnergyPriceCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyPriceCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyPriceCurve";

                var bucket = context.parsed.EnergyPriceCurve;
                if (null == bucket)
                   context.parsed.EnergyPriceCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EnergyPriceCurve_collapse" aria-expanded="true" aria-controls="EnergyPriceCurve_collapse">EnergyPriceCurve</a>
<div id="EnergyPriceCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * Defines self schedule values to be used for specified time intervals.
         *
         */
        class BidSelfSched extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidSelfSched;
                if (null == bucket)
                   cim_data.BidSelfSched = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidSelfSched[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "BidSelfSched";
                base.parse_element (/<cim:BidSelfSched.balancingFlag>([\s\S]*?)<\/cim:BidSelfSched.balancingFlag>/g, obj, "balancingFlag", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.bidType>([\s\S]*?)<\/cim:BidSelfSched.bidType>/g, obj, "bidType", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.priorityFlag>([\s\S]*?)<\/cim:BidSelfSched.priorityFlag>/g, obj, "priorityFlag", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.pumpSelfSchedMw>([\s\S]*?)<\/cim:BidSelfSched.pumpSelfSchedMw>/g, obj, "pumpSelfSchedMw", base.to_float, sub, context);
                base.parse_element (/<cim:BidSelfSched.referenceType>([\s\S]*?)<\/cim:BidSelfSched.referenceType>/g, obj, "referenceType", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.selfSchedMw>([\s\S]*?)<\/cim:BidSelfSched.selfSchedMw>/g, obj, "selfSchedMw", base.to_float, sub, context);
                base.parse_element (/<cim:BidSelfSched.selfSchedSptResource>([\s\S]*?)<\/cim:BidSelfSched.selfSchedSptResource>/g, obj, "selfSchedSptResource", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.selfSchedType>([\s\S]*?)<\/cim:BidSelfSched.selfSchedType>/g, obj, "selfSchedType", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.updateType>([\s\S]*?)<\/cim:BidSelfSched.updateType>/g, obj, "updateType", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.wheelingTransactionReference>([\s\S]*?)<\/cim:BidSelfSched.wheelingTransactionReference>/g, obj, "wheelingTransactionReference", base.to_string, sub, context);
                base.parse_attribute (/<cim:BidSelfSched.ProductBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBid", sub, context);
                base.parse_attribute (/<cim:BidSelfSched.TransmissionContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context);
                base.parse_attribute (/<cim:BidSelfSched.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attribute (/<cim:BidSelfSched.AdjacentCASet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AdjacentCASet", sub, context);
                base.parse_attribute (/<cim:BidSelfSched.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);

                var bucket = context.parsed.BidSelfSched;
                if (null == bucket)
                   context.parsed.BidSelfSched = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "BidSelfSched", "balancingFlag", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "bidType", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "priorityFlag", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "pumpSelfSchedMw", base.from_float, fields);
                base.export_element (obj, "BidSelfSched", "referenceType", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "selfSchedMw", base.from_float, fields);
                base.export_element (obj, "BidSelfSched", "selfSchedSptResource", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "selfSchedType", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "updateType", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "wheelingTransactionReference", base.from_string, fields);
                base.export_attribute (obj, "BidSelfSched", "ProductBid", fields);
                base.export_attribute (obj, "BidSelfSched", "TransmissionContractRight", fields);
                base.export_attribute (obj, "BidSelfSched", "HostControlArea", fields);
                base.export_attribute (obj, "BidSelfSched", "AdjacentCASet", fields);
                base.export_attribute (obj, "BidSelfSched", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BidSelfSched_collapse" aria-expanded="true" aria-controls="BidSelfSched_collapse">BidSelfSched</a>
<div id="BidSelfSched_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.RegularIntervalSchedule.prototype.template.call (this) +
`
{{#balancingFlag}}<div><b>balancingFlag</b>: {{balancingFlag}}</div>{{/balancingFlag}}
{{#bidType}}<div><b>bidType</b>: {{bidType}}</div>{{/bidType}}
{{#priorityFlag}}<div><b>priorityFlag</b>: {{priorityFlag}}</div>{{/priorityFlag}}
{{#pumpSelfSchedMw}}<div><b>pumpSelfSchedMw</b>: {{pumpSelfSchedMw}}</div>{{/pumpSelfSchedMw}}
{{#referenceType}}<div><b>referenceType</b>: {{referenceType}}</div>{{/referenceType}}
{{#selfSchedMw}}<div><b>selfSchedMw</b>: {{selfSchedMw}}</div>{{/selfSchedMw}}
{{#selfSchedSptResource}}<div><b>selfSchedSptResource</b>: {{selfSchedSptResource}}</div>{{/selfSchedSptResource}}
{{#selfSchedType}}<div><b>selfSchedType</b>: {{selfSchedType}}</div>{{/selfSchedType}}
{{#updateType}}<div><b>updateType</b>: {{updateType}}</div>{{/updateType}}
{{#wheelingTransactionReference}}<div><b>wheelingTransactionReference</b>: {{wheelingTransactionReference}}</div>{{/wheelingTransactionReference}}
{{#ProductBid}}<div><b>ProductBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProductBid}}&quot;);})'>{{ProductBid}}</a></div>{{/ProductBid}}
{{#TransmissionContractRight}}<div><b>TransmissionContractRight</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionContractRight}}&quot;);})'>{{TransmissionContractRight}}</a></div>{{/TransmissionContractRight}}
{{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HostControlArea}}&quot;);})'>{{HostControlArea}}</a></div>{{/HostControlArea}}
{{#AdjacentCASet}}<div><b>AdjacentCASet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AdjacentCASet}}&quot;);})'>{{AdjacentCASet}}</a></div>{{/AdjacentCASet}}
{{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SubControlArea}}&quot;);})'>{{SubControlArea}}</a></div>{{/SubControlArea}}
</div>
`
                );
           }        }

        /**
         * Defines bid schedules to allow a product bid to use specified bid price curves for different time intervals.
         *
         */
        class BidPriceSchedule extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidPriceSchedule;
                if (null == bucket)
                   cim_data.BidPriceSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidPriceSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "BidPriceSchedule";
                base.parse_element (/<cim:BidPriceSchedule.bidType>([\s\S]*?)<\/cim:BidPriceSchedule.bidType>/g, obj, "bidType", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceSchedule.mitigationStatus>([\s\S]*?)<\/cim:BidPriceSchedule.mitigationStatus>/g, obj, "mitigationStatus", base.to_string, sub, context);
                base.parse_attribute (/<cim:BidPriceSchedule.BidPriceCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidPriceCurve", sub, context);
                base.parse_attribute (/<cim:BidPriceSchedule.ProductBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBid", sub, context);

                var bucket = context.parsed.BidPriceSchedule;
                if (null == bucket)
                   context.parsed.BidPriceSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "BidPriceSchedule", "bidType", base.from_string, fields);
                base.export_element (obj, "BidPriceSchedule", "mitigationStatus", base.from_string, fields);
                base.export_attribute (obj, "BidPriceSchedule", "BidPriceCurve", fields);
                base.export_attribute (obj, "BidPriceSchedule", "ProductBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BidPriceSchedule_collapse" aria-expanded="true" aria-controls="BidPriceSchedule_collapse">BidPriceSchedule</a>
<div id="BidPriceSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.RegularIntervalSchedule.prototype.template.call (this) +
`
{{#bidType}}<div><b>bidType</b>: {{bidType}}</div>{{/bidType}}
{{#mitigationStatus}}<div><b>mitigationStatus</b>: {{mitigationStatus}}</div>{{/mitigationStatus}}
{{#BidPriceCurve}}<div><b>BidPriceCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BidPriceCurve}}&quot;);})'>{{BidPriceCurve}}</a></div>{{/BidPriceCurve}}
{{#ProductBid}}<div><b>ProductBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProductBid}}&quot;);})'>{{ProductBid}}</a></div>{{/ProductBid}}
</div>
`
                );
           }        }

        /**
         * A Charge Component is a list of configurable charge quality items to feed into settlement calculation and/or bill determinants.
         *
         */
        class ChargeComponent extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ChargeComponent;
                if (null == bucket)
                   cim_data.ChargeComponent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ChargeComponent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ChargeComponent";
                base.parse_element (/<cim:ChargeComponent.deleteStatus>([\s\S]*?)<\/cim:ChargeComponent.deleteStatus>/g, obj, "deleteStatus", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeComponent.effectiveDate>([\s\S]*?)<\/cim:ChargeComponent.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ChargeComponent.terminationDate>([\s\S]*?)<\/cim:ChargeComponent.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ChargeComponent.message>([\s\S]*?)<\/cim:ChargeComponent.message>/g, obj, "message", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeComponent.type>([\s\S]*?)<\/cim:ChargeComponent.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeComponent.sum>([\s\S]*?)<\/cim:ChargeComponent.sum>/g, obj, "sum", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeComponent.roundOff>([\s\S]*?)<\/cim:ChargeComponent.roundOff>/g, obj, "roundOff", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeComponent.equation>([\s\S]*?)<\/cim:ChargeComponent.equation>/g, obj, "equation", base.to_string, sub, context);

                var bucket = context.parsed.ChargeComponent;
                if (null == bucket)
                   context.parsed.ChargeComponent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ChargeComponent", "deleteStatus", base.from_string, fields);
                base.export_element (obj, "ChargeComponent", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "ChargeComponent", "terminationDate", base.from_datetime, fields);
                base.export_element (obj, "ChargeComponent", "message", base.from_string, fields);
                base.export_element (obj, "ChargeComponent", "type", base.from_string, fields);
                base.export_element (obj, "ChargeComponent", "sum", base.from_string, fields);
                base.export_element (obj, "ChargeComponent", "roundOff", base.from_string, fields);
                base.export_element (obj, "ChargeComponent", "equation", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ChargeComponent_collapse" aria-expanded="true" aria-controls="ChargeComponent_collapse">ChargeComponent</a>
<div id="ChargeComponent_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#deleteStatus}}<div><b>deleteStatus</b>: {{deleteStatus}}</div>{{/deleteStatus}}
{{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
{{#terminationDate}}<div><b>terminationDate</b>: {{terminationDate}}</div>{{/terminationDate}}
{{#message}}<div><b>message</b>: {{message}}</div>{{/message}}
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
{{#sum}}<div><b>sum</b>: {{sum}}</div>{{/sum}}
{{#roundOff}}<div><b>roundOff</b>: {{roundOff}}</div>{{/roundOff}}
{{#equation}}<div><b>equation</b>: {{equation}}</div>{{/equation}}
</div>
`
                );
           }        }

        /**
         * A Major Charge Group is the same as Invocie Type which provides the highest level of grouping for charge types configration.
         *
         * Examples as Market, FERC, RMR,
         *
         */
        class MajorChargeGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MajorChargeGroup;
                if (null == bucket)
                   cim_data.MajorChargeGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MajorChargeGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MajorChargeGroup";
                base.parse_element (/<cim:MajorChargeGroup.runType>([\s\S]*?)<\/cim:MajorChargeGroup.runType>/g, obj, "runType", base.to_string, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.runVersion>([\s\S]*?)<\/cim:MajorChargeGroup.runVersion>/g, obj, "runVersion", base.to_string, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.frequencyType>([\s\S]*?)<\/cim:MajorChargeGroup.frequencyType>/g, obj, "frequencyType", base.to_string, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.invoiceType>([\s\S]*?)<\/cim:MajorChargeGroup.invoiceType>/g, obj, "invoiceType", base.to_string, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.effectiveDate>([\s\S]*?)<\/cim:MajorChargeGroup.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.terminationDate>([\s\S]*?)<\/cim:MajorChargeGroup.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.requireAutorun>([\s\S]*?)<\/cim:MajorChargeGroup.requireAutorun>/g, obj, "requireAutorun", base.to_string, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.revisionNumber>([\s\S]*?)<\/cim:MajorChargeGroup.revisionNumber>/g, obj, "revisionNumber", base.to_string, sub, context);

                var bucket = context.parsed.MajorChargeGroup;
                if (null == bucket)
                   context.parsed.MajorChargeGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MajorChargeGroup", "runType", base.from_string, fields);
                base.export_element (obj, "MajorChargeGroup", "runVersion", base.from_string, fields);
                base.export_element (obj, "MajorChargeGroup", "frequencyType", base.from_string, fields);
                base.export_element (obj, "MajorChargeGroup", "invoiceType", base.from_string, fields);
                base.export_element (obj, "MajorChargeGroup", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "MajorChargeGroup", "terminationDate", base.from_datetime, fields);
                base.export_element (obj, "MajorChargeGroup", "requireAutorun", base.from_string, fields);
                base.export_element (obj, "MajorChargeGroup", "revisionNumber", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MajorChargeGroup_collapse" aria-expanded="true" aria-controls="MajorChargeGroup_collapse">MajorChargeGroup</a>
<div id="MajorChargeGroup_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#runType}}<div><b>runType</b>: {{runType}}</div>{{/runType}}
{{#runVersion}}<div><b>runVersion</b>: {{runVersion}}</div>{{/runVersion}}
{{#frequencyType}}<div><b>frequencyType</b>: {{frequencyType}}</div>{{/frequencyType}}
{{#invoiceType}}<div><b>invoiceType</b>: {{invoiceType}}</div>{{/invoiceType}}
{{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
{{#terminationDate}}<div><b>terminationDate</b>: {{terminationDate}}</div>{{/terminationDate}}
{{#requireAutorun}}<div><b>requireAutorun</b>: {{requireAutorun}}</div>{{/requireAutorun}}
{{#revisionNumber}}<div><b>revisionNumber</b>: {{revisionNumber}}</div>{{/revisionNumber}}
</div>
`
                );
           }        }

        /**
         * Charge Type is the basic level configuration for settlement to process specific charges for invoicing purpose.
         *
         * Examples such as: Day Ahead Spinning Reserve Default Invoice Interest Charge, etc.
         *
         */
        class ChargeType extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ChargeType;
                if (null == bucket)
                   cim_data.ChargeType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ChargeType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "ChargeType";
                base.parse_element (/<cim:ChargeType.effectiveDate>([\s\S]*?)<\/cim:ChargeType.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ChargeType.terminationDate>([\s\S]*?)<\/cim:ChargeType.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ChargeType.factor>([\s\S]*?)<\/cim:ChargeType.factor>/g, obj, "factor", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeType.chargeOrder>([\s\S]*?)<\/cim:ChargeType.chargeOrder>/g, obj, "chargeOrder", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeType.frequencyType>([\s\S]*?)<\/cim:ChargeType.frequencyType>/g, obj, "frequencyType", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeType.chargeVersion>([\s\S]*?)<\/cim:ChargeType.chargeVersion>/g, obj, "chargeVersion", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeType.totalInterval>([\s\S]*?)<\/cim:ChargeType.totalInterval>/g, obj, "totalInterval", base.to_string, sub, context);

                var bucket = context.parsed.ChargeType;
                if (null == bucket)
                   context.parsed.ChargeType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "ChargeType", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "ChargeType", "terminationDate", base.from_datetime, fields);
                base.export_element (obj, "ChargeType", "factor", base.from_string, fields);
                base.export_element (obj, "ChargeType", "chargeOrder", base.from_string, fields);
                base.export_element (obj, "ChargeType", "frequencyType", base.from_string, fields);
                base.export_element (obj, "ChargeType", "chargeVersion", base.from_string, fields);
                base.export_element (obj, "ChargeType", "totalInterval", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ChargeType_collapse" aria-expanded="true" aria-controls="ChargeType_collapse">ChargeType</a>
<div id="ChargeType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Document.prototype.template.call (this) +
`
{{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
{{#terminationDate}}<div><b>terminationDate</b>: {{terminationDate}}</div>{{/terminationDate}}
{{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
{{#chargeOrder}}<div><b>chargeOrder</b>: {{chargeOrder}}</div>{{/chargeOrder}}
{{#frequencyType}}<div><b>frequencyType</b>: {{frequencyType}}</div>{{/frequencyType}}
{{#chargeVersion}}<div><b>chargeVersion</b>: {{chargeVersion}}</div>{{/chargeVersion}}
{{#totalInterval}}<div><b>totalInterval</b>: {{totalInterval}}</div>{{/totalInterval}}
</div>
`
                );
           }        }

        /**
         * Startup costs and time as a function of down time.
         *
         * Relationship between unit startup cost (Y1-axis) vs. unit elapsed down time (X-axis).
         *
         */
        class StartUpCostCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StartUpCostCurve;
                if (null == bucket)
                   cim_data.StartUpCostCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StartUpCostCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartUpCostCurve";

                var bucket = context.parsed.StartUpCostCurve;
                if (null == bucket)
                   context.parsed.StartUpCostCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#StartUpCostCurve_collapse" aria-expanded="true" aria-controls="StartUpCostCurve_collapse">StartUpCostCurve</a>
<div id="StartUpCostCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * This class allows SC to input different time intervals for distribution factors
         *
         */
        class BidDistributionFactor extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidDistributionFactor;
                if (null == bucket)
                   cim_data.BidDistributionFactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidDistributionFactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BidDistributionFactor";
                base.parse_element (/<cim:BidDistributionFactor.timeIntervalStart>([\s\S]*?)<\/cim:BidDistributionFactor.timeIntervalStart>/g, obj, "timeIntervalStart", base.to_datetime, sub, context);
                base.parse_element (/<cim:BidDistributionFactor.timeIntervalEnd>([\s\S]*?)<\/cim:BidDistributionFactor.timeIntervalEnd>/g, obj, "timeIntervalEnd", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:BidDistributionFactor.ProductBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBid", sub, context);

                var bucket = context.parsed.BidDistributionFactor;
                if (null == bucket)
                   context.parsed.BidDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "BidDistributionFactor", "timeIntervalStart", base.from_datetime, fields);
                base.export_element (obj, "BidDistributionFactor", "timeIntervalEnd", base.from_datetime, fields);
                base.export_attribute (obj, "BidDistributionFactor", "ProductBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BidDistributionFactor_collapse" aria-expanded="true" aria-controls="BidDistributionFactor_collapse">BidDistributionFactor</a>
<div id="BidDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#timeIntervalStart}}<div><b>timeIntervalStart</b>: {{timeIntervalStart}}</div>{{/timeIntervalStart}}
{{#timeIntervalEnd}}<div><b>timeIntervalEnd</b>: {{timeIntervalEnd}}</div>{{/timeIntervalEnd}}
{{#ProductBid}}<div><b>ProductBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProductBid}}&quot;);})'>{{ProductBid}}</a></div>{{/ProductBid}}
</div>
`
                );
           }        }

        /**
         * <b>TradeType</b>                                        <b>TradeProduct</b>
         * IST  (InterSC Trade)                          PHY (Physical Energy Trade)
         * IST                                                  APN (Energy Trades at Aggregated Pricing Nodes)
         * IST                                                  CPT (Converted Physical Energy Trade)
         * AST (Ancilliary Services Trade)             RUT (Regulation Up Trade)
         * AST                                                 RDT (Regulation Down Trade)
         * AST                                                 SRT (Spinning Reserve Trade)
         * AST                                                 NRT (Non-Spinning Reserve Trade)
         *
         * UCT (Unit Commitment Trade)            null
         *
         */
        class TradeProduct extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TradeProduct;
                if (null == bucket)
                   cim_data.TradeProduct = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TradeProduct[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TradeProduct";
                base.parse_element (/<cim:TradeProduct.tradeType>([\s\S]*?)<\/cim:TradeProduct.tradeType>/g, obj, "tradeType", base.to_string, sub, context);
                base.parse_element (/<cim:TradeProduct.tradeProductType>([\s\S]*?)<\/cim:TradeProduct.tradeProductType>/g, obj, "tradeProductType", base.to_string, sub, context);

                var bucket = context.parsed.TradeProduct;
                if (null == bucket)
                   context.parsed.TradeProduct = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TradeProduct", "tradeType", base.from_string, fields);
                base.export_element (obj, "TradeProduct", "tradeProductType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TradeProduct_collapse" aria-expanded="true" aria-controls="TradeProduct_collapse">TradeProduct</a>
<div id="TradeProduct_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#tradeType}}<div><b>tradeType</b>: {{tradeType}}</div>{{/tradeType}}
{{#tradeProductType}}<div><b>tradeProductType</b>: {{tradeProductType}}</div>{{/tradeProductType}}
</div>
`
                );
           }        }

        /**
         * Trade error and warning messages associated with the rule engine processing of the submitted trade.
         *
         */
        class TradeError extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TradeError;
                if (null == bucket)
                   cim_data.TradeError = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TradeError[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TradeError";
                base.parse_element (/<cim:TradeError.errPriority>([\s\S]*?)<\/cim:TradeError.errPriority>/g, obj, "errPriority", base.to_string, sub, context);
                base.parse_element (/<cim:TradeError.errMessage>([\s\S]*?)<\/cim:TradeError.errMessage>/g, obj, "errMessage", base.to_string, sub, context);
                base.parse_element (/<cim:TradeError.ruleID>([\s\S]*?)<\/cim:TradeError.ruleID>/g, obj, "ruleID", base.to_string, sub, context);
                base.parse_element (/<cim:TradeError.startTime>([\s\S]*?)<\/cim:TradeError.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:TradeError.endTime>([\s\S]*?)<\/cim:TradeError.endTime>/g, obj, "endTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:TradeError.logTimeStamp>([\s\S]*?)<\/cim:TradeError.logTimeStamp>/g, obj, "logTimeStamp", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:TradeError.Trade\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Trade", sub, context);

                var bucket = context.parsed.TradeError;
                if (null == bucket)
                   context.parsed.TradeError = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TradeError", "errPriority", base.from_string, fields);
                base.export_element (obj, "TradeError", "errMessage", base.from_string, fields);
                base.export_element (obj, "TradeError", "ruleID", base.from_string, fields);
                base.export_element (obj, "TradeError", "startTime", base.from_datetime, fields);
                base.export_element (obj, "TradeError", "endTime", base.from_datetime, fields);
                base.export_element (obj, "TradeError", "logTimeStamp", base.from_datetime, fields);
                base.export_attribute (obj, "TradeError", "Trade", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TradeError_collapse" aria-expanded="true" aria-controls="TradeError_collapse">TradeError</a>
<div id="TradeError_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#errPriority}}<div><b>errPriority</b>: {{errPriority}}</div>{{/errPriority}}
{{#errMessage}}<div><b>errMessage</b>: {{errMessage}}</div>{{/errMessage}}
{{#ruleID}}<div><b>ruleID</b>: {{ruleID}}</div>{{/ruleID}}
{{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
{{#endTime}}<div><b>endTime</b>: {{endTime}}</div>{{/endTime}}
{{#logTimeStamp}}<div><b>logTimeStamp</b>: {{logTimeStamp}}</div>{{/logTimeStamp}}
{{#Trade}}<div><b>Trade</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Trade}}&quot;);})'>{{Trade}}</a></div>{{/Trade}}
</div>
`
                );
           }        }

        /**
         * Represents both bids to purchase and offers to sell energy or ancillary services in an RTO-sponsored market.
         *
         */
        class Bid extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Bid;
                if (null == bucket)
                   cim_data.Bid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Bid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Bid";
                base.parse_element (/<cim:Bid.startTime>([\s\S]*?)<\/cim:Bid.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Bid.stopTime>([\s\S]*?)<\/cim:Bid.stopTime>/g, obj, "stopTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Bid.marketType>([\s\S]*?)<\/cim:Bid.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_attribute (/<cim:Bid.ActionRequest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ActionRequest", sub, context);
                base.parse_attribute (/<cim:Bid.MarketParticipant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketParticipant", sub, context);
                base.parse_attribute (/<cim:Bid.EnergyMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyMarket", sub, context);
                base.parse_attribute (/<cim:Bid.SchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SchedulingCoordinator", sub, context);

                var bucket = context.parsed.Bid;
                if (null == bucket)
                   context.parsed.Bid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Bid", "startTime", base.from_datetime, fields);
                base.export_element (obj, "Bid", "stopTime", base.from_datetime, fields);
                base.export_element (obj, "Bid", "marketType", base.from_string, fields);
                base.export_attribute (obj, "Bid", "ActionRequest", fields);
                base.export_attribute (obj, "Bid", "MarketParticipant", fields);
                base.export_attribute (obj, "Bid", "EnergyMarket", fields);
                base.export_attribute (obj, "Bid", "SchedulingCoordinator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Bid_collapse" aria-expanded="true" aria-controls="Bid_collapse">Bid</a>
<div id="Bid_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Document.prototype.template.call (this) +
`
{{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
{{#stopTime}}<div><b>stopTime</b>: {{stopTime}}</div>{{/stopTime}}
{{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
{{#ActionRequest}}<div><b>ActionRequest</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ActionRequest}}&quot;);})'>{{ActionRequest}}</a></div>{{/ActionRequest}}
{{#MarketParticipant}}<div><b>MarketParticipant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketParticipant}}&quot;);})'>{{MarketParticipant}}</a></div>{{/MarketParticipant}}
{{#EnergyMarket}}<div><b>EnergyMarket</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyMarket}}&quot;);})'>{{EnergyMarket}}</a></div>{{/EnergyMarket}}
{{#SchedulingCoordinator}}<div><b>SchedulingCoordinator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SchedulingCoordinator}}&quot;);})'>{{SchedulingCoordinator}}</a></div>{{/SchedulingCoordinator}}
</div>
`
                );
           }        }

        /**
         * Inter Scheduling Coordinator Trades to model financial trades which may impact settlement
         *
         */
        class Trade extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Trade;
                if (null == bucket)
                   cim_data.Trade = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Trade[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Trade";
                base.parse_element (/<cim:Trade.adjustedTradeQuantity>([\s\S]*?)<\/cim:Trade.adjustedTradeQuantity>/g, obj, "adjustedTradeQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:Trade.counterTradeQuantity>([\s\S]*?)<\/cim:Trade.counterTradeQuantity>/g, obj, "counterTradeQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:Trade.dependOnTradeName>([\s\S]*?)<\/cim:Trade.dependOnTradeName>/g, obj, "dependOnTradeName", base.to_string, sub, context);
                base.parse_element (/<cim:Trade.lastModified>([\s\S]*?)<\/cim:Trade.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);
                base.parse_element (/<cim:Trade.marketType>([\s\S]*?)<\/cim:Trade.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_element (/<cim:Trade.startTime>([\s\S]*?)<\/cim:Trade.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Trade.stopTime>([\s\S]*?)<\/cim:Trade.stopTime>/g, obj, "stopTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Trade.submitFromTimeStamp>([\s\S]*?)<\/cim:Trade.submitFromTimeStamp>/g, obj, "submitFromTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:Trade.submitFromUser>([\s\S]*?)<\/cim:Trade.submitFromUser>/g, obj, "submitFromUser", base.to_string, sub, context);
                base.parse_element (/<cim:Trade.submitToTimeStamp>([\s\S]*?)<\/cim:Trade.submitToTimeStamp>/g, obj, "submitToTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:Trade.submitToUser >([\s\S]*?)<\/cim:Trade.submitToUser >/g, obj, "submitToUser ", base.to_string, sub, context);
                base.parse_element (/<cim:Trade.tradeQuantity>([\s\S]*?)<\/cim:Trade.tradeQuantity>/g, obj, "tradeQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:Trade.tradeStatus>([\s\S]*?)<\/cim:Trade.tradeStatus>/g, obj, "tradeStatus", base.to_string, sub, context);
                base.parse_element (/<cim:Trade.updateTimeStamp>([\s\S]*?)<\/cim:Trade.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:Trade.updateUser>([\s\S]*?)<\/cim:Trade.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_attribute (/<cim:Trade.TradeProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TradeProduct", sub, context);
                base.parse_attribute (/<cim:Trade.submitFromSchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "submitFromSchedulingCoordinator", sub, context);
                base.parse_attribute (/<cim:Trade.ActionRequest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ActionRequest", sub, context);
                base.parse_attribute (/<cim:Trade.To_SC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "To_SC", sub, context);
                base.parse_attribute (/<cim:Trade.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                base.parse_attribute (/<cim:Trade.submitToSchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "submitToSchedulingCoordinator", sub, context);
                base.parse_attribute (/<cim:Trade.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                base.parse_attribute (/<cim:Trade.From_SC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "From_SC", sub, context);

                var bucket = context.parsed.Trade;
                if (null == bucket)
                   context.parsed.Trade = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Trade", "adjustedTradeQuantity", base.from_float, fields);
                base.export_element (obj, "Trade", "counterTradeQuantity", base.from_float, fields);
                base.export_element (obj, "Trade", "dependOnTradeName", base.from_string, fields);
                base.export_element (obj, "Trade", "lastModified", base.from_datetime, fields);
                base.export_element (obj, "Trade", "marketType", base.from_string, fields);
                base.export_element (obj, "Trade", "startTime", base.from_datetime, fields);
                base.export_element (obj, "Trade", "stopTime", base.from_datetime, fields);
                base.export_element (obj, "Trade", "submitFromTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "Trade", "submitFromUser", base.from_string, fields);
                base.export_element (obj, "Trade", "submitToTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "Trade", "submitToUser ", base.from_string, fields);
                base.export_element (obj, "Trade", "tradeQuantity", base.from_float, fields);
                base.export_element (obj, "Trade", "tradeStatus", base.from_string, fields);
                base.export_element (obj, "Trade", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "Trade", "updateUser", base.from_string, fields);
                base.export_attribute (obj, "Trade", "TradeProduct", fields);
                base.export_attribute (obj, "Trade", "submitFromSchedulingCoordinator", fields);
                base.export_attribute (obj, "Trade", "ActionRequest", fields);
                base.export_attribute (obj, "Trade", "To_SC", fields);
                base.export_attribute (obj, "Trade", "Pnode", fields);
                base.export_attribute (obj, "Trade", "submitToSchedulingCoordinator", fields);
                base.export_attribute (obj, "Trade", "RegisteredGenerator", fields);
                base.export_attribute (obj, "Trade", "From_SC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Trade_collapse" aria-expanded="true" aria-controls="Trade_collapse">Trade</a>
<div id="Trade_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#adjustedTradeQuantity}}<div><b>adjustedTradeQuantity</b>: {{adjustedTradeQuantity}}</div>{{/adjustedTradeQuantity}}
{{#counterTradeQuantity}}<div><b>counterTradeQuantity</b>: {{counterTradeQuantity}}</div>{{/counterTradeQuantity}}
{{#dependOnTradeName}}<div><b>dependOnTradeName</b>: {{dependOnTradeName}}</div>{{/dependOnTradeName}}
{{#lastModified}}<div><b>lastModified</b>: {{lastModified}}</div>{{/lastModified}}
{{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
{{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
{{#stopTime}}<div><b>stopTime</b>: {{stopTime}}</div>{{/stopTime}}
{{#submitFromTimeStamp}}<div><b>submitFromTimeStamp</b>: {{submitFromTimeStamp}}</div>{{/submitFromTimeStamp}}
{{#submitFromUser}}<div><b>submitFromUser</b>: {{submitFromUser}}</div>{{/submitFromUser}}
{{#submitToTimeStamp}}<div><b>submitToTimeStamp</b>: {{submitToTimeStamp}}</div>{{/submitToTimeStamp}}
{{#submitToUser }}<div><b>submitToUser </b>: {{submitToUser }}</div>{{/submitToUser }}
{{#tradeQuantity}}<div><b>tradeQuantity</b>: {{tradeQuantity}}</div>{{/tradeQuantity}}
{{#tradeStatus}}<div><b>tradeStatus</b>: {{tradeStatus}}</div>{{/tradeStatus}}
{{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
{{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
{{#TradeProduct}}<div><b>TradeProduct</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TradeProduct}}&quot;);})'>{{TradeProduct}}</a></div>{{/TradeProduct}}
{{#submitFromSchedulingCoordinator}}<div><b>submitFromSchedulingCoordinator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{submitFromSchedulingCoordinator}}&quot;);})'>{{submitFromSchedulingCoordinator}}</a></div>{{/submitFromSchedulingCoordinator}}
{{#ActionRequest}}<div><b>ActionRequest</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ActionRequest}}&quot;);})'>{{ActionRequest}}</a></div>{{/ActionRequest}}
{{#To_SC}}<div><b>To_SC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{To_SC}}&quot;);})'>{{To_SC}}</a></div>{{/To_SC}}
{{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Pnode}}&quot;);})'>{{Pnode}}</a></div>{{/Pnode}}
{{#submitToSchedulingCoordinator}}<div><b>submitToSchedulingCoordinator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{submitToSchedulingCoordinator}}&quot;);})'>{{submitToSchedulingCoordinator}}</a></div>{{/submitToSchedulingCoordinator}}
{{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
{{#From_SC}}<div><b>From_SC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{From_SC}}&quot;);})'>{{From_SC}}</a></div>{{/From_SC}}
</div>
`
                );
           }        }

        /**
         * This class represent the error information for a bid that is detected during bid validation
         *
         */
        class BidError extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidError;
                if (null == bucket)
                   cim_data.BidError = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidError[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BidError";
                base.parse_element (/<cim:BidError.errPriority>([\s\S]*?)<\/cim:BidError.errPriority>/g, obj, "errPriority", base.to_string, sub, context);
                base.parse_element (/<cim:BidError.errMessage>([\s\S]*?)<\/cim:BidError.errMessage>/g, obj, "errMessage", base.to_string, sub, context);
                base.parse_element (/<cim:BidError.ruleID>([\s\S]*?)<\/cim:BidError.ruleID>/g, obj, "ruleID", base.to_string, sub, context);
                base.parse_element (/<cim:BidError.startTime>([\s\S]*?)<\/cim:BidError.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:BidError.endTime>([\s\S]*?)<\/cim:BidError.endTime>/g, obj, "endTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:BidError.logTimeStamp>([\s\S]*?)<\/cim:BidError.logTimeStamp>/g, obj, "logTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:BidError.componentType>([\s\S]*?)<\/cim:BidError.componentType>/g, obj, "componentType", base.to_string, sub, context);
                base.parse_element (/<cim:BidError.msgLevel>([\s\S]*?)<\/cim:BidError.msgLevel>/g, obj, "msgLevel", base.to_string, sub, context);
                base.parse_attribute (/<cim:BidError.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);

                var bucket = context.parsed.BidError;
                if (null == bucket)
                   context.parsed.BidError = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BidError", "errPriority", base.from_string, fields);
                base.export_element (obj, "BidError", "errMessage", base.from_string, fields);
                base.export_element (obj, "BidError", "ruleID", base.from_string, fields);
                base.export_element (obj, "BidError", "startTime", base.from_datetime, fields);
                base.export_element (obj, "BidError", "endTime", base.from_datetime, fields);
                base.export_element (obj, "BidError", "logTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "BidError", "componentType", base.from_string, fields);
                base.export_element (obj, "BidError", "msgLevel", base.from_string, fields);
                base.export_attribute (obj, "BidError", "MarketProduct", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BidError_collapse" aria-expanded="true" aria-controls="BidError_collapse">BidError</a>
<div id="BidError_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#errPriority}}<div><b>errPriority</b>: {{errPriority}}</div>{{/errPriority}}
{{#errMessage}}<div><b>errMessage</b>: {{errMessage}}</div>{{/errMessage}}
{{#ruleID}}<div><b>ruleID</b>: {{ruleID}}</div>{{/ruleID}}
{{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
{{#endTime}}<div><b>endTime</b>: {{endTime}}</div>{{/endTime}}
{{#logTimeStamp}}<div><b>logTimeStamp</b>: {{logTimeStamp}}</div>{{/logTimeStamp}}
{{#componentType}}<div><b>componentType</b>: {{componentType}}</div>{{/componentType}}
{{#msgLevel}}<div><b>msgLevel</b>: {{msgLevel}}</div>{{/msgLevel}}
{{#MarketProduct}}<div><b>MarketProduct</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketProduct}}&quot;);})'>{{MarketProduct}}</a></div>{{/MarketProduct}}
</div>
`
                );
           }        }

        /**
         * Action request against an existing Trade.
         *
         */
        class ActionRequest extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ActionRequest;
                if (null == bucket)
                   cim_data.ActionRequest = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ActionRequest[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ActionRequest";
                base.parse_element (/<cim:ActionRequest.actionName>([\s\S]*?)<\/cim:ActionRequest.actionName>/g, obj, "actionName", base.to_string, sub, context);

                var bucket = context.parsed.ActionRequest;
                if (null == bucket)
                   context.parsed.ActionRequest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ActionRequest", "actionName", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ActionRequest_collapse" aria-expanded="true" aria-controls="ActionRequest_collapse">ActionRequest</a>
<div id="ActionRequest_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#actionName}}<div><b>actionName</b>: {{actionName}}</div>{{/actionName}}
</div>
`
                );
           }        }

        /**
         * Response from an intertie resource acknowleging receipt of dispatch instructions
         *
         */
        class InterTieDispatchResponse extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InterTieDispatchResponse;
                if (null == bucket)
                   cim_data.InterTieDispatchResponse = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InterTieDispatchResponse[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "InterTieDispatchResponse";
                base.parse_element (/<cim:InterTieDispatchResponse.acceptStatus>([\s\S]*?)<\/cim:InterTieDispatchResponse.acceptStatus>/g, obj, "acceptStatus", base.to_string, sub, context);
                base.parse_element (/<cim:InterTieDispatchResponse.acceptMW>([\s\S]*?)<\/cim:InterTieDispatchResponse.acceptMW>/g, obj, "acceptMW", base.to_float, sub, context);
                base.parse_element (/<cim:InterTieDispatchResponse.clearedMW>([\s\S]*?)<\/cim:InterTieDispatchResponse.clearedMW>/g, obj, "clearedMW", base.to_float, sub, context);
                base.parse_element (/<cim:InterTieDispatchResponse.startTime>([\s\S]*?)<\/cim:InterTieDispatchResponse.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:InterTieDispatchResponse.passIndicator>([\s\S]*?)<\/cim:InterTieDispatchResponse.passIndicator>/g, obj, "passIndicator", base.to_string, sub, context);
                base.parse_attribute (/<cim:InterTieDispatchResponse.RegisteredInterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredInterTie", sub, context);

                var bucket = context.parsed.InterTieDispatchResponse;
                if (null == bucket)
                   context.parsed.InterTieDispatchResponse = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "InterTieDispatchResponse", "acceptStatus", base.from_string, fields);
                base.export_element (obj, "InterTieDispatchResponse", "acceptMW", base.from_float, fields);
                base.export_element (obj, "InterTieDispatchResponse", "clearedMW", base.from_float, fields);
                base.export_element (obj, "InterTieDispatchResponse", "startTime", base.from_datetime, fields);
                base.export_element (obj, "InterTieDispatchResponse", "passIndicator", base.from_string, fields);
                base.export_attribute (obj, "InterTieDispatchResponse", "RegisteredInterTie", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#InterTieDispatchResponse_collapse" aria-expanded="true" aria-controls="InterTieDispatchResponse_collapse">InterTieDispatchResponse</a>
<div id="InterTieDispatchResponse_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#acceptStatus}}<div><b>acceptStatus</b>: {{acceptStatus}}</div>{{/acceptStatus}}
{{#acceptMW}}<div><b>acceptMW</b>: {{acceptMW}}</div>{{/acceptMW}}
{{#clearedMW}}<div><b>clearedMW</b>: {{clearedMW}}</div>{{/clearedMW}}
{{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
{{#passIndicator}}<div><b>passIndicator</b>: {{passIndicator}}</div>{{/passIndicator}}
{{#RegisteredInterTie}}<div><b>RegisteredInterTie</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredInterTie}}&quot;);})'>{{RegisteredInterTie}}</a></div>{{/RegisteredInterTie}}
</div>
`
                );
           }        }

        /**
         * As set of mutually exclusive bids for which a maximum of one may be scheduled.
         *
         * Of these generating bids, only one generating bid can be scheduled at a time.
         *
         */
        class BidSet extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidSet;
                if (null == bucket)
                   cim_data.BidSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BidSet";

                var bucket = context.parsed.BidSet;
                if (null == bucket)
                   context.parsed.BidSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BidSet_collapse" aria-expanded="true" aria-controls="BidSet_collapse">BidSet</a>
<div id="BidSet_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * Ramp rate as a function of resource MW output
         *
         */
        class RampRateCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RampRateCurve;
                if (null == bucket)
                   cim_data.RampRateCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RampRateCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "RampRateCurve";
                base.parse_element (/<cim:RampRateCurve.condition>([\s\S]*?)<\/cim:RampRateCurve.condition>/g, obj, "condition", base.to_string, sub, context);
                base.parse_element (/<cim:RampRateCurve.constraintRampType>([\s\S]*?)<\/cim:RampRateCurve.constraintRampType>/g, obj, "constraintRampType", base.to_string, sub, context);
                base.parse_element (/<cim:RampRateCurve.rampRateType>([\s\S]*?)<\/cim:RampRateCurve.rampRateType>/g, obj, "rampRateType", base.to_string, sub, context);
                base.parse_attribute (/<cim:RampRateCurve.GeneratingBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingBid", sub, context);
                base.parse_attribute (/<cim:RampRateCurve.LoadBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadBid", sub, context);
                base.parse_attribute (/<cim:RampRateCurve.InterTieBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterTieBid", sub, context);

                var bucket = context.parsed.RampRateCurve;
                if (null == bucket)
                   context.parsed.RampRateCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "RampRateCurve", "condition", base.from_string, fields);
                base.export_element (obj, "RampRateCurve", "constraintRampType", base.from_string, fields);
                base.export_element (obj, "RampRateCurve", "rampRateType", base.from_string, fields);
                base.export_attribute (obj, "RampRateCurve", "GeneratingBid", fields);
                base.export_attribute (obj, "RampRateCurve", "LoadBid", fields);
                base.export_attribute (obj, "RampRateCurve", "InterTieBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RampRateCurve_collapse" aria-expanded="true" aria-controls="RampRateCurve_collapse">RampRateCurve</a>
<div id="RampRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#condition}}<div><b>condition</b>: {{condition}}</div>{{/condition}}
{{#constraintRampType}}<div><b>constraintRampType</b>: {{constraintRampType}}</div>{{/constraintRampType}}
{{#rampRateType}}<div><b>rampRateType</b>: {{rampRateType}}</div>{{/rampRateType}}
{{#GeneratingBid}}<div><b>GeneratingBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingBid}}&quot;);})'>{{GeneratingBid}}</a></div>{{/GeneratingBid}}
{{#LoadBid}}<div><b>LoadBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadBid}}&quot;);})'>{{LoadBid}}</a></div>{{/LoadBid}}
{{#InterTieBid}}<div><b>InterTieBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InterTieBid}}&quot;);})'>{{InterTieBid}}</a></div>{{/InterTieBid}}
</div>
`
                );
           }        }

        /**
         * Response from registered resource acknowleging receipt of dispatch instructions
         *
         */
        class DispatchInstReply extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DispatchInstReply;
                if (null == bucket)
                   cim_data.DispatchInstReply = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DispatchInstReply[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DispatchInstReply";
                base.parse_element (/<cim:DispatchInstReply.acceptMW>([\s\S]*?)<\/cim:DispatchInstReply.acceptMW>/g, obj, "acceptMW", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchInstReply.acceptStatus>([\s\S]*?)<\/cim:DispatchInstReply.acceptStatus>/g, obj, "acceptStatus", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchInstReply.certificationName>([\s\S]*?)<\/cim:DispatchInstReply.certificationName>/g, obj, "certificationName", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchInstReply.clearedMW>([\s\S]*?)<\/cim:DispatchInstReply.clearedMW>/g, obj, "clearedMW", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchInstReply.instructionTime>([\s\S]*?)<\/cim:DispatchInstReply.instructionTime>/g, obj, "instructionTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DispatchInstReply.instructionType>([\s\S]*?)<\/cim:DispatchInstReply.instructionType>/g, obj, "instructionType", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchInstReply.passIndicator>([\s\S]*?)<\/cim:DispatchInstReply.passIndicator>/g, obj, "passIndicator", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchInstReply.receivedTime>([\s\S]*?)<\/cim:DispatchInstReply.receivedTime>/g, obj, "receivedTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DispatchInstReply.startTime>([\s\S]*?)<\/cim:DispatchInstReply.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:DispatchInstReply.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.DispatchInstReply;
                if (null == bucket)
                   context.parsed.DispatchInstReply = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "DispatchInstReply", "acceptMW", base.from_string, fields);
                base.export_element (obj, "DispatchInstReply", "acceptStatus", base.from_string, fields);
                base.export_element (obj, "DispatchInstReply", "certificationName", base.from_string, fields);
                base.export_element (obj, "DispatchInstReply", "clearedMW", base.from_string, fields);
                base.export_element (obj, "DispatchInstReply", "instructionTime", base.from_datetime, fields);
                base.export_element (obj, "DispatchInstReply", "instructionType", base.from_string, fields);
                base.export_element (obj, "DispatchInstReply", "passIndicator", base.from_string, fields);
                base.export_element (obj, "DispatchInstReply", "receivedTime", base.from_datetime, fields);
                base.export_element (obj, "DispatchInstReply", "startTime", base.from_datetime, fields);
                base.export_attribute (obj, "DispatchInstReply", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#DispatchInstReply_collapse" aria-expanded="true" aria-controls="DispatchInstReply_collapse">DispatchInstReply</a>
<div id="DispatchInstReply_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#acceptMW}}<div><b>acceptMW</b>: {{acceptMW}}</div>{{/acceptMW}}
{{#acceptStatus}}<div><b>acceptStatus</b>: {{acceptStatus}}</div>{{/acceptStatus}}
{{#certificationName}}<div><b>certificationName</b>: {{certificationName}}</div>{{/certificationName}}
{{#clearedMW}}<div><b>clearedMW</b>: {{clearedMW}}</div>{{/clearedMW}}
{{#instructionTime}}<div><b>instructionTime</b>: {{instructionTime}}</div>{{/instructionTime}}
{{#instructionType}}<div><b>instructionType</b>: {{instructionType}}</div>{{/instructionType}}
{{#passIndicator}}<div><b>passIndicator</b>: {{passIndicator}}</div>{{/passIndicator}}
{{#receivedTime}}<div><b>receivedTime</b>: {{receivedTime}}</div>{{/receivedTime}}
{{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
{{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
</div>
`
                );
           }        }

        /**
         * Notification time curve as a function of down time.
         *
         * Relationship between crew notification time (Y1-axis) and unit startup time (Y2-axis) vs. unit elapsed down time (X-axis).
         *
         */
        class NotificationTimeCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NotificationTimeCurve;
                if (null == bucket)
                   cim_data.NotificationTimeCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NotificationTimeCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "NotificationTimeCurve";

                var bucket = context.parsed.NotificationTimeCurve;
                if (null == bucket)
                   context.parsed.NotificationTimeCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#NotificationTimeCurve_collapse" aria-expanded="true" aria-controls="NotificationTimeCurve_collapse">NotificationTimeCurve</a>
<div id="NotificationTimeCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * Signifies an event to trigger one or more activities, such as reading a meter, recalculating a bill, requesting work, when generating units shall be scheduled for maintenance, when a transformer is scheduled to be refurbished, etc.
         *
         */
        class MarketScheduledEvent extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketScheduledEvent;
                if (null == bucket)
                   cim_data.MarketScheduledEvent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketScheduledEvent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketScheduledEvent";
                base.parse_element (/<cim:MarketScheduledEvent.category>([\s\S]*?)<\/cim:MarketScheduledEvent.category>/g, obj, "category", base.to_string, sub, context);
                base.parse_element (/<cim:MarketScheduledEvent.duration>([\s\S]*?)<\/cim:MarketScheduledEvent.duration>/g, obj, "duration", base.to_string, sub, context);
                base.parse_element (/<cim:MarketScheduledEvent.status>([\s\S]*?)<\/cim:MarketScheduledEvent.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:MarketScheduledEvent.MajorChargeGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MajorChargeGroup", sub, context);

                var bucket = context.parsed.MarketScheduledEvent;
                if (null == bucket)
                   context.parsed.MarketScheduledEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketScheduledEvent", "category", base.from_string, fields);
                base.export_element (obj, "MarketScheduledEvent", "duration", base.from_string, fields);
                base.export_element (obj, "MarketScheduledEvent", "status", base.from_string, fields);
                base.export_attribute (obj, "MarketScheduledEvent", "MajorChargeGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketScheduledEvent_collapse" aria-expanded="true" aria-controls="MarketScheduledEvent_collapse">MarketScheduledEvent</a>
<div id="MarketScheduledEvent_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#category}}<div><b>category</b>: {{category}}</div>{{/category}}
{{#duration}}<div><b>duration</b>: {{duration}}</div>{{/duration}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#MajorChargeGroup}}<div><b>MajorChargeGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MajorChargeGroup}}&quot;);})'>{{MajorChargeGroup}}</a></div>{{/MajorChargeGroup}}
</div>
`
                );
           }        }

        /**
         * Relationship between unit operating price in \$/hour (Y-axis) and unit output in MW (X-axis).
         *
         */
        class BidPriceCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidPriceCurve;
                if (null == bucket)
                   cim_data.BidPriceCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidPriceCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "BidPriceCurve";

                var bucket = context.parsed.BidPriceCurve;
                if (null == bucket)
                   context.parsed.BidPriceCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BidPriceCurve_collapse" aria-expanded="true" aria-controls="BidPriceCurve_collapse">BidPriceCurve</a>
<div id="BidPriceCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * Containment for bid hourly parameters that are not product dependent.
         *
         */
        class BidHourlySchedule extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidHourlySchedule;
                if (null == bucket)
                   cim_data.BidHourlySchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidHourlySchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "BidHourlySchedule";
                base.parse_attribute (/<cim:BidHourlySchedule.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);

                var bucket = context.parsed.BidHourlySchedule;
                if (null == bucket)
                   context.parsed.BidHourlySchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "BidHourlySchedule", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BidHourlySchedule_collapse" aria-expanded="true" aria-controls="BidHourlySchedule_collapse">BidHourlySchedule</a>
<div id="BidHourlySchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.RegularIntervalSchedule.prototype.template.call (this) +
`
{{#Bid}}<div><b>Bid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Bid}}&quot;);})'>{{Bid}}</a></div>{{/Bid}}
</div>
`
                );
           }        }

        /**
         * The fixed operating level of a Pump Storage Hydro Unit operating as a hydro pump.
         *
         * Associated with the energy market product type.
         *
         */
        class PumpingLevelSchedule extends BidHourlyProductSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PumpingLevelSchedule;
                if (null == bucket)
                   cim_data.PumpingLevelSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PumpingLevelSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BidHourlyProductSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "PumpingLevelSchedule";
                base.parse_element (/<cim:PumpingLevelSchedule.value>([\s\S]*?)<\/cim:PumpingLevelSchedule.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.PumpingLevelSchedule;
                if (null == bucket)
                   context.parsed.PumpingLevelSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BidHourlyProductSchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "PumpingLevelSchedule", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PumpingLevelSchedule_collapse" aria-expanded="true" aria-controls="PumpingLevelSchedule_collapse">PumpingLevelSchedule</a>
<div id="PumpingLevelSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + BidHourlyProductSchedule.prototype.template.call (this) +
`
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
</div>
`
                );
           }        }

        /**
         * The operating cost of a Pump Storage Hydro Unit operating as a hydro pump.
         *
         * This schedule is assocated with the hourly parameters in a resource bid associated with a specific product within the bid.
         *
         */
        class PumpingCostSchedule extends BidHourlyProductSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PumpingCostSchedule;
                if (null == bucket)
                   cim_data.PumpingCostSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PumpingCostSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BidHourlyProductSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "PumpingCostSchedule";
                base.parse_element (/<cim:PumpingCostSchedule.value>([\s\S]*?)<\/cim:PumpingCostSchedule.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.PumpingCostSchedule;
                if (null == bucket)
                   context.parsed.PumpingCostSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BidHourlyProductSchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "PumpingCostSchedule", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PumpingCostSchedule_collapse" aria-expanded="true" aria-controls="PumpingCostSchedule_collapse">PumpingCostSchedule</a>
<div id="PumpingCostSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + BidHourlyProductSchedule.prototype.template.call (this) +
`
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
</div>
`
                );
           }        }

        /**
         * The cost to shutdown a Pump Storage Hydro Unit (in pump mode) or a pump.
         *
         * This schedule is assocated with the hourly parameters in a resource bid associated with a specific product within the bid.
         *
         */
        class PumpingShutDownCostSchedule extends BidHourlyProductSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PumpingShutDownCostSchedule;
                if (null == bucket)
                   cim_data.PumpingShutDownCostSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PumpingShutDownCostSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BidHourlyProductSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "PumpingShutDownCostSchedule";
                base.parse_element (/<cim:PumpingShutDownCostSchedule.value>([\s\S]*?)<\/cim:PumpingShutDownCostSchedule.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.PumpingShutDownCostSchedule;
                if (null == bucket)
                   context.parsed.PumpingShutDownCostSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BidHourlyProductSchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "PumpingShutDownCostSchedule", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PumpingShutDownCostSchedule_collapse" aria-expanded="true" aria-controls="PumpingShutDownCostSchedule_collapse">PumpingShutDownCostSchedule</a>
<div id="PumpingShutDownCostSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + BidHourlyProductSchedule.prototype.template.call (this) +
`
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
</div>
`
                );
           }        }

        /**
         * Energy bid for generation, load, or virtual type for the whole of the market-trading period (i.e., one day in day ahead market or one hour in the real time market)
         *
         */
        class ResourceBid extends Bid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ResourceBid;
                if (null == bucket)
                   cim_data.ResourceBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Bid.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceBid";
                base.parse_element (/<cim:ResourceBid.aggregationFlag>([\s\S]*?)<\/cim:ResourceBid.aggregationFlag>/g, obj, "aggregationFlag", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.bidStatus>([\s\S]*?)<\/cim:ResourceBid.bidStatus>/g, obj, "bidStatus", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.commodityType>([\s\S]*?)<\/cim:ResourceBid.commodityType>/g, obj, "commodityType", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.contingencyAvailFlag>([\s\S]*?)<\/cim:ResourceBid.contingencyAvailFlag>/g, obj, "contingencyAvailFlag", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.createdISO>([\s\S]*?)<\/cim:ResourceBid.createdISO>/g, obj, "createdISO", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.energyMaxDay>([\s\S]*?)<\/cim:ResourceBid.energyMaxDay>/g, obj, "energyMaxDay", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceBid.energyMinDay>([\s\S]*?)<\/cim:ResourceBid.energyMinDay>/g, obj, "energyMinDay", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceBid.marketSepFlag>([\s\S]*?)<\/cim:ResourceBid.marketSepFlag>/g, obj, "marketSepFlag", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.minDispatchTime>([\s\S]*?)<\/cim:ResourceBid.minDispatchTime>/g, obj, "minDispatchTime", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.resourceLoadingType>([\s\S]*?)<\/cim:ResourceBid.resourceLoadingType>/g, obj, "resourceLoadingType", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.shutDownsMaxDay>([\s\S]*?)<\/cim:ResourceBid.shutDownsMaxDay>/g, obj, "shutDownsMaxDay", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.shutDownsMaxWeek>([\s\S]*?)<\/cim:ResourceBid.shutDownsMaxWeek>/g, obj, "shutDownsMaxWeek", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.startUpsMaxDay>([\s\S]*?)<\/cim:ResourceBid.startUpsMaxDay>/g, obj, "startUpsMaxDay", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.startUpsMaxWeek>([\s\S]*?)<\/cim:ResourceBid.startUpsMaxWeek>/g, obj, "startUpsMaxWeek", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.virtual>([\s\S]*?)<\/cim:ResourceBid.virtual>/g, obj, "virtual", base.to_boolean, sub, context);

                var bucket = context.parsed.ResourceBid;
                if (null == bucket)
                   context.parsed.ResourceBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Bid.prototype.export.call (this, obj, false);

                base.export_element (obj, "ResourceBid", "aggregationFlag", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "bidStatus", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "commodityType", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "contingencyAvailFlag", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "createdISO", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "energyMaxDay", base.from_float, fields);
                base.export_element (obj, "ResourceBid", "energyMinDay", base.from_float, fields);
                base.export_element (obj, "ResourceBid", "marketSepFlag", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "minDispatchTime", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "resourceLoadingType", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "shutDownsMaxDay", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "shutDownsMaxWeek", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "startUpsMaxDay", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "startUpsMaxWeek", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "virtual", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ResourceBid_collapse" aria-expanded="true" aria-controls="ResourceBid_collapse">ResourceBid</a>
<div id="ResourceBid_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Bid.prototype.template.call (this) +
`
{{#aggregationFlag}}<div><b>aggregationFlag</b>: {{aggregationFlag}}</div>{{/aggregationFlag}}
{{#bidStatus}}<div><b>bidStatus</b>: {{bidStatus}}</div>{{/bidStatus}}
{{#commodityType}}<div><b>commodityType</b>: {{commodityType}}</div>{{/commodityType}}
{{#contingencyAvailFlag}}<div><b>contingencyAvailFlag</b>: {{contingencyAvailFlag}}</div>{{/contingencyAvailFlag}}
{{#createdISO}}<div><b>createdISO</b>: {{createdISO}}</div>{{/createdISO}}
{{#energyMaxDay}}<div><b>energyMaxDay</b>: {{energyMaxDay}}</div>{{/energyMaxDay}}
{{#energyMinDay}}<div><b>energyMinDay</b>: {{energyMinDay}}</div>{{/energyMinDay}}
{{#marketSepFlag}}<div><b>marketSepFlag</b>: {{marketSepFlag}}</div>{{/marketSepFlag}}
{{#minDispatchTime}}<div><b>minDispatchTime</b>: {{minDispatchTime}}</div>{{/minDispatchTime}}
{{#resourceLoadingType}}<div><b>resourceLoadingType</b>: {{resourceLoadingType}}</div>{{/resourceLoadingType}}
{{#shutDownsMaxDay}}<div><b>shutDownsMaxDay</b>: {{shutDownsMaxDay}}</div>{{/shutDownsMaxDay}}
{{#shutDownsMaxWeek}}<div><b>shutDownsMaxWeek</b>: {{shutDownsMaxWeek}}</div>{{/shutDownsMaxWeek}}
{{#startUpsMaxDay}}<div><b>startUpsMaxDay</b>: {{startUpsMaxDay}}</div>{{/startUpsMaxDay}}
{{#startUpsMaxWeek}}<div><b>startUpsMaxWeek</b>: {{startUpsMaxWeek}}</div>{{/startUpsMaxWeek}}
{{#virtual}}<div><b>virtual</b>: {{virtual}}</div>{{/virtual}}
</div>
`
                );
           }        }

        /**
         * This class represents the inter tie bid
         *
         */
        class InterTieBid extends ResourceBid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InterTieBid;
                if (null == bucket)
                   cim_data.InterTieBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InterTieBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ResourceBid.prototype.parse.call (this, context, sub);
                obj.cls = "InterTieBid";
                base.parse_element (/<cim:InterTieBid.minHourlyBlock >([\s\S]*?)<\/cim:InterTieBid.minHourlyBlock >/g, obj, "minHourlyBlock ", base.to_string, sub, context);
                base.parse_attribute (/<cim:InterTieBid.RegisteredInterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredInterTie", sub, context);

                var bucket = context.parsed.InterTieBid;
                if (null == bucket)
                   context.parsed.InterTieBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ResourceBid.prototype.export.call (this, obj, false);

                base.export_element (obj, "InterTieBid", "minHourlyBlock ", base.from_string, fields);
                base.export_attribute (obj, "InterTieBid", "RegisteredInterTie", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#InterTieBid_collapse" aria-expanded="true" aria-controls="InterTieBid_collapse">InterTieBid</a>
<div id="InterTieBid_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ResourceBid.prototype.template.call (this) +
`
{{#minHourlyBlock }}<div><b>minHourlyBlock </b>: {{minHourlyBlock }}</div>{{/minHourlyBlock }}
{{#RegisteredInterTie}}<div><b>RegisteredInterTie</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredInterTie}}&quot;);})'>{{RegisteredInterTie}}</a></div>{{/RegisteredInterTie}}
</div>
`
                );
           }        }

        /**
         * Bilateral or scheduled transactions for energy and ancillary services considered by market clearing process
         *
         */
        class TransactionBid extends Bid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransactionBid;
                if (null == bucket)
                   cim_data.TransactionBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransactionBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Bid.prototype.parse.call (this, context, sub);
                obj.cls = "TransactionBid";
                base.parse_element (/<cim:TransactionBid.demandTransaction>([\s\S]*?)<\/cim:TransactionBid.demandTransaction>/g, obj, "demandTransaction", base.to_boolean, sub, context);
                base.parse_element (/<cim:TransactionBid.dispatchable>([\s\S]*?)<\/cim:TransactionBid.dispatchable>/g, obj, "dispatchable", base.to_boolean, sub, context);
                base.parse_element (/<cim:TransactionBid.payCongestion>([\s\S]*?)<\/cim:TransactionBid.payCongestion>/g, obj, "payCongestion", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:TransactionBid.Receipt_Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Receipt_Pnode", sub, context);
                base.parse_attribute (/<cim:TransactionBid.Delivery_Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Delivery_Pnode", sub, context);
                base.parse_attribute (/<cim:TransactionBid.TransmissionReservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionReservation", sub, context);

                var bucket = context.parsed.TransactionBid;
                if (null == bucket)
                   context.parsed.TransactionBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Bid.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransactionBid", "demandTransaction", base.from_boolean, fields);
                base.export_element (obj, "TransactionBid", "dispatchable", base.from_boolean, fields);
                base.export_element (obj, "TransactionBid", "payCongestion", base.from_boolean, fields);
                base.export_attribute (obj, "TransactionBid", "Receipt_Pnode", fields);
                base.export_attribute (obj, "TransactionBid", "Delivery_Pnode", fields);
                base.export_attribute (obj, "TransactionBid", "TransmissionReservation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TransactionBid_collapse" aria-expanded="true" aria-controls="TransactionBid_collapse">TransactionBid</a>
<div id="TransactionBid_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Bid.prototype.template.call (this) +
`
{{#demandTransaction}}<div><b>demandTransaction</b>: {{demandTransaction}}</div>{{/demandTransaction}}
{{#dispatchable}}<div><b>dispatchable</b>: {{dispatchable}}</div>{{/dispatchable}}
{{#payCongestion}}<div><b>payCongestion</b>: {{payCongestion}}</div>{{/payCongestion}}
{{#Receipt_Pnode}}<div><b>Receipt_Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Receipt_Pnode}}&quot;);})'>{{Receipt_Pnode}}</a></div>{{/Receipt_Pnode}}
{{#Delivery_Pnode}}<div><b>Delivery_Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Delivery_Pnode}}&quot;);})'>{{Delivery_Pnode}}</a></div>{{/Delivery_Pnode}}
{{#TransmissionReservation}}<div><b>TransmissionReservation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionReservation}}&quot;);})'>{{TransmissionReservation}}</a></div>{{/TransmissionReservation}}
</div>
`
                );
           }        }

        /**
         * AreaLoadBid is not submitted by a market participant into the Markets.
         *
         * Instead, it is simply an aggregation of all LoadBids contained wtihin a specific SubControlArea. This entity should inherit from Bid for representation of the timeframe (startTime, stopTime) and the market type.
         *
         */
        class AreaLoadBid extends Bid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AreaLoadBid;
                if (null == bucket)
                   cim_data.AreaLoadBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AreaLoadBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Bid.prototype.parse.call (this, context, sub);
                obj.cls = "AreaLoadBid";
                base.parse_element (/<cim:AreaLoadBid.demandBidMW>([\s\S]*?)<\/cim:AreaLoadBid.demandBidMW>/g, obj, "demandBidMW", base.to_float, sub, context);

                var bucket = context.parsed.AreaLoadBid;
                if (null == bucket)
                   context.parsed.AreaLoadBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Bid.prototype.export.call (this, obj, false);

                base.export_element (obj, "AreaLoadBid", "demandBidMW", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AreaLoadBid_collapse" aria-expanded="true" aria-controls="AreaLoadBid_collapse">AreaLoadBid</a>
<div id="AreaLoadBid_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Bid.prototype.template.call (this) +
`
{{#demandBidMW}}<div><b>demandBidMW</b>: {{demandBidMW}}</div>{{/demandBidMW}}
</div>
`
                );
           }        }

        /**
         * Offer to supply energy/ancillary services from a load resource (participating load reduces consumption)
         *
         */
        class LoadBid extends ResourceBid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadBid;
                if (null == bucket)
                   cim_data.LoadBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ResourceBid.prototype.parse.call (this, context, sub);
                obj.cls = "LoadBid";
                base.parse_element (/<cim:LoadBid.dropRampRate>([\s\S]*?)<\/cim:LoadBid.dropRampRate>/g, obj, "dropRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:LoadBid.loadRedInitiationCost>([\s\S]*?)<\/cim:LoadBid.loadRedInitiationCost>/g, obj, "loadRedInitiationCost", base.to_string, sub, context);
                base.parse_element (/<cim:LoadBid.loadRedInitiationTime>([\s\S]*?)<\/cim:LoadBid.loadRedInitiationTime>/g, obj, "loadRedInitiationTime", base.to_float, sub, context);
                base.parse_element (/<cim:LoadBid.marketDate>([\s\S]*?)<\/cim:LoadBid.marketDate>/g, obj, "marketDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:LoadBid.meteredValue>([\s\S]*?)<\/cim:LoadBid.meteredValue>/g, obj, "meteredValue", base.to_boolean, sub, context);
                base.parse_element (/<cim:LoadBid.minLoad>([\s\S]*?)<\/cim:LoadBid.minLoad>/g, obj, "minLoad", base.to_string, sub, context);
                base.parse_element (/<cim:LoadBid.minLoadReduction>([\s\S]*?)<\/cim:LoadBid.minLoadReduction>/g, obj, "minLoadReduction", base.to_string, sub, context);
                base.parse_element (/<cim:LoadBid.minLoadReductionCost>([\s\S]*?)<\/cim:LoadBid.minLoadReductionCost>/g, obj, "minLoadReductionCost", base.to_string, sub, context);
                base.parse_element (/<cim:LoadBid.minLoadReductionInterval>([\s\S]*?)<\/cim:LoadBid.minLoadReductionInterval>/g, obj, "minLoadReductionInterval", base.to_float, sub, context);
                base.parse_element (/<cim:LoadBid.minTimeBetLoadRed>([\s\S]*?)<\/cim:LoadBid.minTimeBetLoadRed>/g, obj, "minTimeBetLoadRed", base.to_float, sub, context);
                base.parse_element (/<cim:LoadBid.pickUpRampRate>([\s\S]*?)<\/cim:LoadBid.pickUpRampRate>/g, obj, "pickUpRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:LoadBid.priceSetting>([\s\S]*?)<\/cim:LoadBid.priceSetting>/g, obj, "priceSetting", base.to_boolean, sub, context);
                base.parse_element (/<cim:LoadBid.reqNoticeTime>([\s\S]*?)<\/cim:LoadBid.reqNoticeTime>/g, obj, "reqNoticeTime", base.to_float, sub, context);
                base.parse_element (/<cim:LoadBid.shutdownCost>([\s\S]*?)<\/cim:LoadBid.shutdownCost>/g, obj, "shutdownCost", base.to_string, sub, context);
                base.parse_attribute (/<cim:LoadBid.AreaLoadBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AreaLoadBid", sub, context);
                base.parse_attribute (/<cim:LoadBid.RegisteredLoad\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredLoad", sub, context);

                var bucket = context.parsed.LoadBid;
                if (null == bucket)
                   context.parsed.LoadBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ResourceBid.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadBid", "dropRampRate", base.from_string, fields);
                base.export_element (obj, "LoadBid", "loadRedInitiationCost", base.from_string, fields);
                base.export_element (obj, "LoadBid", "loadRedInitiationTime", base.from_float, fields);
                base.export_element (obj, "LoadBid", "marketDate", base.from_datetime, fields);
                base.export_element (obj, "LoadBid", "meteredValue", base.from_boolean, fields);
                base.export_element (obj, "LoadBid", "minLoad", base.from_string, fields);
                base.export_element (obj, "LoadBid", "minLoadReduction", base.from_string, fields);
                base.export_element (obj, "LoadBid", "minLoadReductionCost", base.from_string, fields);
                base.export_element (obj, "LoadBid", "minLoadReductionInterval", base.from_float, fields);
                base.export_element (obj, "LoadBid", "minTimeBetLoadRed", base.from_float, fields);
                base.export_element (obj, "LoadBid", "pickUpRampRate", base.from_string, fields);
                base.export_element (obj, "LoadBid", "priceSetting", base.from_boolean, fields);
                base.export_element (obj, "LoadBid", "reqNoticeTime", base.from_float, fields);
                base.export_element (obj, "LoadBid", "shutdownCost", base.from_string, fields);
                base.export_attribute (obj, "LoadBid", "AreaLoadBid", fields);
                base.export_attribute (obj, "LoadBid", "RegisteredLoad", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LoadBid_collapse" aria-expanded="true" aria-controls="LoadBid_collapse">LoadBid</a>
<div id="LoadBid_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ResourceBid.prototype.template.call (this) +
`
{{#dropRampRate}}<div><b>dropRampRate</b>: {{dropRampRate}}</div>{{/dropRampRate}}
{{#loadRedInitiationCost}}<div><b>loadRedInitiationCost</b>: {{loadRedInitiationCost}}</div>{{/loadRedInitiationCost}}
{{#loadRedInitiationTime}}<div><b>loadRedInitiationTime</b>: {{loadRedInitiationTime}}</div>{{/loadRedInitiationTime}}
{{#marketDate}}<div><b>marketDate</b>: {{marketDate}}</div>{{/marketDate}}
{{#meteredValue}}<div><b>meteredValue</b>: {{meteredValue}}</div>{{/meteredValue}}
{{#minLoad}}<div><b>minLoad</b>: {{minLoad}}</div>{{/minLoad}}
{{#minLoadReduction}}<div><b>minLoadReduction</b>: {{minLoadReduction}}</div>{{/minLoadReduction}}
{{#minLoadReductionCost}}<div><b>minLoadReductionCost</b>: {{minLoadReductionCost}}</div>{{/minLoadReductionCost}}
{{#minLoadReductionInterval}}<div><b>minLoadReductionInterval</b>: {{minLoadReductionInterval}}</div>{{/minLoadReductionInterval}}
{{#minTimeBetLoadRed}}<div><b>minTimeBetLoadRed</b>: {{minTimeBetLoadRed}}</div>{{/minTimeBetLoadRed}}
{{#pickUpRampRate}}<div><b>pickUpRampRate</b>: {{pickUpRampRate}}</div>{{/pickUpRampRate}}
{{#priceSetting}}<div><b>priceSetting</b>: {{priceSetting}}</div>{{/priceSetting}}
{{#reqNoticeTime}}<div><b>reqNoticeTime</b>: {{reqNoticeTime}}</div>{{/reqNoticeTime}}
{{#shutdownCost}}<div><b>shutdownCost</b>: {{shutdownCost}}</div>{{/shutdownCost}}
{{#AreaLoadBid}}<div><b>AreaLoadBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AreaLoadBid}}&quot;);})'>{{AreaLoadBid}}</a></div>{{/AreaLoadBid}}
{{#RegisteredLoad}}<div><b>RegisteredLoad</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredLoad}}&quot;);})'>{{RegisteredLoad}}</a></div>{{/RegisteredLoad}}
</div>
`
                );
           }        }

        /**
         * Offer to supply energy/ancillary services from a generating unit or resource
         *
         */
        class GeneratingBid extends ResourceBid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GeneratingBid;
                if (null == bucket)
                   cim_data.GeneratingBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GeneratingBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ResourceBid.prototype.parse.call (this, context, sub);
                obj.cls = "GeneratingBid";
                base.parse_element (/<cim:GeneratingBid.combinedCycleUnitOffer>([\s\S]*?)<\/cim:GeneratingBid.combinedCycleUnitOffer>/g, obj, "combinedCycleUnitOffer", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.downTimeMax>([\s\S]*?)<\/cim:GeneratingBid.downTimeMax>/g, obj, "downTimeMax", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.installedCapacity>([\s\S]*?)<\/cim:GeneratingBid.installedCapacity>/g, obj, "installedCapacity", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.lowerRampRate>([\s\S]*?)<\/cim:GeneratingBid.lowerRampRate>/g, obj, "lowerRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.maxEmergencyMW>([\s\S]*?)<\/cim:GeneratingBid.maxEmergencyMW>/g, obj, "maxEmergencyMW", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.maximumEconomicMW>([\s\S]*?)<\/cim:GeneratingBid.maximumEconomicMW>/g, obj, "maximumEconomicMW", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.minEmergencyMW>([\s\S]*?)<\/cim:GeneratingBid.minEmergencyMW>/g, obj, "minEmergencyMW", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.minimumEconomicMW>([\s\S]*?)<\/cim:GeneratingBid.minimumEconomicMW>/g, obj, "minimumEconomicMW", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.noLoadCost>([\s\S]*?)<\/cim:GeneratingBid.noLoadCost>/g, obj, "noLoadCost", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.notificationTime>([\s\S]*?)<\/cim:GeneratingBid.notificationTime>/g, obj, "notificationTime", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.operatingMode>([\s\S]*?)<\/cim:GeneratingBid.operatingMode>/g, obj, "operatingMode", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.raiseRampRate>([\s\S]*?)<\/cim:GeneratingBid.raiseRampRate>/g, obj, "raiseRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.rampCurveType>([\s\S]*?)<\/cim:GeneratingBid.rampCurveType>/g, obj, "rampCurveType", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.startupCost>([\s\S]*?)<\/cim:GeneratingBid.startupCost>/g, obj, "startupCost", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.startUpRampRate>([\s\S]*?)<\/cim:GeneratingBid.startUpRampRate>/g, obj, "startUpRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.startUpType>([\s\S]*?)<\/cim:GeneratingBid.startUpType>/g, obj, "startUpType", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.upTimeMax>([\s\S]*?)<\/cim:GeneratingBid.upTimeMax>/g, obj, "upTimeMax", base.to_float, sub, context);
                base.parse_attribute (/<cim:GeneratingBid.NotificationTimeCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NotificationTimeCurve", sub, context);
                base.parse_attribute (/<cim:GeneratingBid.StartUpCostCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartUpCostCurve", sub, context);
                base.parse_attribute (/<cim:GeneratingBid.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                base.parse_attribute (/<cim:GeneratingBid.StartUpTimeCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartUpTimeCurve", sub, context);
                base.parse_attribute (/<cim:GeneratingBid.BidSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidSet", sub, context);

                var bucket = context.parsed.GeneratingBid;
                if (null == bucket)
                   context.parsed.GeneratingBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ResourceBid.prototype.export.call (this, obj, false);

                base.export_element (obj, "GeneratingBid", "combinedCycleUnitOffer", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "downTimeMax", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "installedCapacity", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "lowerRampRate", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "maxEmergencyMW", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "maximumEconomicMW", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "minEmergencyMW", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "minimumEconomicMW", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "noLoadCost", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "notificationTime", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "operatingMode", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "raiseRampRate", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "rampCurveType", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "startupCost", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "startUpRampRate", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "startUpType", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "upTimeMax", base.from_float, fields);
                base.export_attribute (obj, "GeneratingBid", "NotificationTimeCurve", fields);
                base.export_attribute (obj, "GeneratingBid", "StartUpCostCurve", fields);
                base.export_attribute (obj, "GeneratingBid", "RegisteredGenerator", fields);
                base.export_attribute (obj, "GeneratingBid", "StartUpTimeCurve", fields);
                base.export_attribute (obj, "GeneratingBid", "BidSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GeneratingBid_collapse" aria-expanded="true" aria-controls="GeneratingBid_collapse">GeneratingBid</a>
<div id="GeneratingBid_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ResourceBid.prototype.template.call (this) +
`
{{#combinedCycleUnitOffer}}<div><b>combinedCycleUnitOffer</b>: {{combinedCycleUnitOffer}}</div>{{/combinedCycleUnitOffer}}
{{#downTimeMax}}<div><b>downTimeMax</b>: {{downTimeMax}}</div>{{/downTimeMax}}
{{#installedCapacity}}<div><b>installedCapacity</b>: {{installedCapacity}}</div>{{/installedCapacity}}
{{#lowerRampRate}}<div><b>lowerRampRate</b>: {{lowerRampRate}}</div>{{/lowerRampRate}}
{{#maxEmergencyMW}}<div><b>maxEmergencyMW</b>: {{maxEmergencyMW}}</div>{{/maxEmergencyMW}}
{{#maximumEconomicMW}}<div><b>maximumEconomicMW</b>: {{maximumEconomicMW}}</div>{{/maximumEconomicMW}}
{{#minEmergencyMW}}<div><b>minEmergencyMW</b>: {{minEmergencyMW}}</div>{{/minEmergencyMW}}
{{#minimumEconomicMW}}<div><b>minimumEconomicMW</b>: {{minimumEconomicMW}}</div>{{/minimumEconomicMW}}
{{#noLoadCost}}<div><b>noLoadCost</b>: {{noLoadCost}}</div>{{/noLoadCost}}
{{#notificationTime}}<div><b>notificationTime</b>: {{notificationTime}}</div>{{/notificationTime}}
{{#operatingMode}}<div><b>operatingMode</b>: {{operatingMode}}</div>{{/operatingMode}}
{{#raiseRampRate}}<div><b>raiseRampRate</b>: {{raiseRampRate}}</div>{{/raiseRampRate}}
{{#rampCurveType}}<div><b>rampCurveType</b>: {{rampCurveType}}</div>{{/rampCurveType}}
{{#startupCost}}<div><b>startupCost</b>: {{startupCost}}</div>{{/startupCost}}
{{#startUpRampRate}}<div><b>startUpRampRate</b>: {{startUpRampRate}}</div>{{/startUpRampRate}}
{{#startUpType}}<div><b>startUpType</b>: {{startUpType}}</div>{{/startUpType}}
{{#upTimeMax}}<div><b>upTimeMax</b>: {{upTimeMax}}</div>{{/upTimeMax}}
{{#NotificationTimeCurve}}<div><b>NotificationTimeCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{NotificationTimeCurve}}&quot;);})'>{{NotificationTimeCurve}}</a></div>{{/NotificationTimeCurve}}
{{#StartUpCostCurve}}<div><b>StartUpCostCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartUpCostCurve}}&quot;);})'>{{StartUpCostCurve}}</a></div>{{/StartUpCostCurve}}
{{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
{{#StartUpTimeCurve}}<div><b>StartUpTimeCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartUpTimeCurve}}&quot;);})'>{{StartUpTimeCurve}}</a></div>{{/StartUpTimeCurve}}
{{#BidSet}}<div><b>BidSet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BidSet}}&quot;);})'>{{BidSet}}</a></div>{{/BidSet}}
</div>
`
                );
           }        }

        /**
         * Result of bid validation against conditions that may exist on an interchange that becomes disconnected or is heavily discounted with respect the MW flow.
         *
         * This schedule is assocated with the hourly parameters in a resource bid.
         *
         */
        class OpenTieSchedule extends BidHourlySchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OpenTieSchedule;
                if (null == bucket)
                   cim_data.OpenTieSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OpenTieSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BidHourlySchedule.prototype.parse.call (this, context, sub);
                obj.cls = "OpenTieSchedule";
                base.parse_element (/<cim:OpenTieSchedule.value>([\s\S]*?)<\/cim:OpenTieSchedule.value>/g, obj, "value", base.to_boolean, sub, context);

                var bucket = context.parsed.OpenTieSchedule;
                if (null == bucket)
                   context.parsed.OpenTieSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BidHourlySchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "OpenTieSchedule", "value", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OpenTieSchedule_collapse" aria-expanded="true" aria-controls="OpenTieSchedule_collapse">OpenTieSchedule</a>
<div id="OpenTieSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + BidHourlySchedule.prototype.template.call (this) +
`
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
</div>
`
                );
           }        }

        /**
         * An indicator specifying that a resource shall have an Hourly Pre-Dispatch.
         *
         * The resource could be a RegisteredGenerator or a RegisteredInterTie.
         *
         */
        class HourlyPreDispatchSchedule extends BidHourlySchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HourlyPreDispatchSchedule;
                if (null == bucket)
                   cim_data.HourlyPreDispatchSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HourlyPreDispatchSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BidHourlySchedule.prototype.parse.call (this, context, sub);
                obj.cls = "HourlyPreDispatchSchedule";
                base.parse_element (/<cim:HourlyPreDispatchSchedule.value>([\s\S]*?)<\/cim:HourlyPreDispatchSchedule.value>/g, obj, "value", base.to_boolean, sub, context);

                var bucket = context.parsed.HourlyPreDispatchSchedule;
                if (null == bucket)
                   context.parsed.HourlyPreDispatchSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BidHourlySchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "HourlyPreDispatchSchedule", "value", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#HourlyPreDispatchSchedule_collapse" aria-expanded="true" aria-controls="HourlyPreDispatchSchedule_collapse">HourlyPreDispatchSchedule</a>
<div id="HourlyPreDispatchSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + BidHourlySchedule.prototype.template.call (this) +
`
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
</div>
`
                );
           }        }

        return (
            {
                BidHourlySchedule: BidHourlySchedule,
                ChargeComponent: ChargeComponent,
                BidSet: BidSet,
                MarketScheduledEvent: MarketScheduledEvent,
                LoadBid: LoadBid,
                OpenTieSchedule: OpenTieSchedule,
                BidError: BidError,
                PumpingShutDownCostSchedule: PumpingShutDownCostSchedule,
                BidHourlyProductSchedule: BidHourlyProductSchedule,
                HourlyPreDispatchSchedule: HourlyPreDispatchSchedule,
                InterTieDispatchResponse: InterTieDispatchResponse,
                LoadReductionPriceCurve: LoadReductionPriceCurve,
                LoadFollowingInst: LoadFollowingInst,
                BidPriceSchedule: BidPriceSchedule,
                PumpingLevelSchedule: PumpingLevelSchedule,
                StartUpCostCurve: StartUpCostCurve,
                BidDistributionFactor: BidDistributionFactor,
                EnergyPriceCurve: EnergyPriceCurve,
                AreaLoadBid: AreaLoadBid,
                ProductBid: ProductBid,
                DispatchInstReply: DispatchInstReply,
                BidPriceCurve: BidPriceCurve,
                ResourceBid: ResourceBid,
                Bid: Bid,
                RampRateCurve: RampRateCurve,
                NotificationTimeCurve: NotificationTimeCurve,
                BidSelfSched: BidSelfSched,
                ActionRequest: ActionRequest,
                MajorChargeGroup: MajorChargeGroup,
                PumpingCostSchedule: PumpingCostSchedule,
                GeneratingBid: GeneratingBid,
                TransactionBid: TransactionBid,
                ChargeGroup: ChargeGroup,
                TradeProduct: TradeProduct,
                StartUpTimeCurve: StartUpTimeCurve,
                Trade: Trade,
                InterTieBid: InterTieBid,
                AttributeProperty: AttributeProperty,
                ChargeType: ChargeType,
                TradeError: TradeError
            }
        );
    }
);