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
                base.parse_attributes (/<cim:ChargeGroup.ChargeGroupChild\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeGroupChild", sub, context);
                base.parse_attributes (/<cim:ChargeGroup.MktUserAttribute\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktUserAttribute", sub, context);
                base.parse_attributes (/<cim:ChargeGroup.ChargeType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeType", sub, context);
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
                base.export_attribute (obj, "export_attribute", "ChargeGroup", fields);
                base.export_attribute (obj, "export_attributes", "ChargeGroup", fields);
                base.export_attribute (obj, "export_attributes", "ChargeGroup", fields);
                base.export_attribute (obj, "export_attributes", "ChargeGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ChargeGroup_collapse" aria-expanded="true" aria-controls="ChargeGroup_collapse" style="margin-left: 10px;">ChargeGroup</a></legend>
                    <div id="ChargeGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#marketCode}}<div><b>marketCode</b>: {{marketCode}}</div>{{/marketCode}}
                    {{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
                    {{#terminationDate}}<div><b>terminationDate</b>: {{terminationDate}}</div>{{/terminationDate}}
                    {{#ChargeGroupParent}}<div><b>ChargeGroupParent</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChargeGroupParent}}&quot;);})'>{{ChargeGroupParent}}</a></div>{{/ChargeGroupParent}}
                    {{#ChargeGroupChild}}<div><b>ChargeGroupChild</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChargeGroupChild}}
                    {{#MktUserAttribute}}<div><b>MktUserAttribute</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktUserAttribute}}
                    {{#ChargeType}}<div><b>ChargeType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChargeType}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ChargeGroupChild) obj.ChargeGroupChild_string = obj.ChargeGroupChild.join ();
                if (obj.MktUserAttribute) obj.MktUserAttribute_string = obj.MktUserAttribute.join ();
                if (obj.ChargeType) obj.ChargeType_string = obj.ChargeType.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ChargeGroupChild_string;
                delete obj.MktUserAttribute_string;
                delete obj.ChargeType_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ChargeGroup_collapse" aria-expanded="true" aria-controls="ChargeGroup_collapse" style="margin-left: 10px;">ChargeGroup</a></legend>
                    <div id="ChargeGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marketCode'>marketCode: </label><div class='col-sm-8'><input id='marketCode' class='form-control' type='text'{{#marketCode}} value='{{marketCode}}'{{/marketCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='terminationDate'>terminationDate: </label><div class='col-sm-8'><input id='terminationDate' class='form-control' type='text'{{#terminationDate}} value='{{terminationDate}}'{{/terminationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChargeGroupParent'>ChargeGroupParent: </label><div class='col-sm-8'><input id='ChargeGroupParent' class='form-control' type='text'{{#ChargeGroupParent}} value='{{ChargeGroupParent}}'{{/ChargeGroupParent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktUserAttribute'>MktUserAttribute: </label><div class='col-sm-8'><input id='MktUserAttribute' class='form-control' type='text'{{#MktUserAttribute}} value='{{MktUserAttribute}}_string'{{/MktUserAttribute}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChargeType'>ChargeType: </label><div class='col-sm-8'><input id='ChargeType' class='form-control' type='text'{{#ChargeType}} value='{{ChargeType}}_string'{{/ChargeType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ChargeGroupParent", "ChargeGroup", "0..1", "0..*"],
                        ["ChargeGroupChild", "ChargeGroup", "0..*", "0..1"],
                        ["MktUserAttribute", "MktUserAttribute", "0..*", "0..*"],
                        ["ChargeType", "ChargeType", "0..*", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:ProductBid.BidSelfSched\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidSelfSched", sub, context);
                base.parse_attribute (/<cim:ProductBid.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);
                base.parse_attributes (/<cim:ProductBid.BidDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidDistributionFactor", sub, context);
                base.parse_attributes (/<cim:ProductBid.BidHourlyProductSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidHourlyProductSchedule", sub, context);
                base.parse_attribute (/<cim:ProductBid.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);
                base.parse_attributes (/<cim:ProductBid.BidSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidSchedule", sub, context);
                var bucket = context.parsed.ProductBid;
                if (null == bucket)
                   context.parsed.ProductBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attributes", "ProductBid", fields);
                base.export_attribute (obj, "export_attribute", "ProductBid", fields);
                base.export_attribute (obj, "export_attributes", "ProductBid", fields);
                base.export_attribute (obj, "export_attributes", "ProductBid", fields);
                base.export_attribute (obj, "export_attribute", "ProductBid", fields);
                base.export_attribute (obj, "export_attributes", "ProductBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProductBid_collapse" aria-expanded="true" aria-controls="ProductBid_collapse" style="margin-left: 10px;">ProductBid</a></legend>
                    <div id="ProductBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#BidSelfSched}}<div><b>BidSelfSched</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BidSelfSched}}
                    {{#MarketProduct}}<div><b>MarketProduct</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketProduct}}&quot;);})'>{{MarketProduct}}</a></div>{{/MarketProduct}}
                    {{#BidDistributionFactor}}<div><b>BidDistributionFactor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BidDistributionFactor}}
                    {{#BidHourlyProductSchedule}}<div><b>BidHourlyProductSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BidHourlyProductSchedule}}
                    {{#Bid}}<div><b>Bid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Bid}}&quot;);})'>{{Bid}}</a></div>{{/Bid}}
                    {{#BidSchedule}}<div><b>BidSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BidSchedule}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.BidSelfSched) obj.BidSelfSched_string = obj.BidSelfSched.join ();
                if (obj.BidDistributionFactor) obj.BidDistributionFactor_string = obj.BidDistributionFactor.join ();
                if (obj.BidHourlyProductSchedule) obj.BidHourlyProductSchedule_string = obj.BidHourlyProductSchedule.join ();
                if (obj.BidSchedule) obj.BidSchedule_string = obj.BidSchedule.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.BidSelfSched_string;
                delete obj.BidDistributionFactor_string;
                delete obj.BidHourlyProductSchedule_string;
                delete obj.BidSchedule_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProductBid_collapse" aria-expanded="true" aria-controls="ProductBid_collapse" style="margin-left: 10px;">ProductBid</a></legend>
                    <div id="ProductBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketProduct'>MarketProduct: </label><div class='col-sm-8'><input id='MarketProduct' class='form-control' type='text'{{#MarketProduct}} value='{{MarketProduct}}'{{/MarketProduct}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Bid'>Bid: </label><div class='col-sm-8'><input id='Bid' class='form-control' type='text'{{#Bid}} value='{{Bid}}'{{/Bid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["BidSelfSched", "BidSelfSched", "0..*", "1"],
                        ["MarketProduct", "MarketProduct", "1", "0..*"],
                        ["BidDistributionFactor", "BidDistributionFactor", "0..*", "1"],
                        ["BidHourlyProductSchedule", "BidHourlyProductSchedule", "0..*", "1"],
                        ["Bid", "Bid", "1", "1..*"],
                        ["BidSchedule", "BidPriceSchedule", "0..*", "1"]
                    ]
                );
            }
        }

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
                base.export_attribute (obj, "export_attribute", "LoadFollowingInst", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadFollowingInst_collapse" aria-expanded="true" aria-controls="LoadFollowingInst_collapse" style="margin-left: 10px;">LoadFollowingInst</a></legend>
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadFollowingInst_collapse" aria-expanded="true" aria-controls="LoadFollowingInst_collapse" style="margin-left: 10px;">LoadFollowingInst</a></legend>
                    <div id="LoadFollowingInst_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mssInstructionID'>mssInstructionID: </label><div class='col-sm-8'><input id='mssInstructionID' class='form-control' type='text'{{#mssInstructionID}} value='{{mssInstructionID}}'{{/mssInstructionID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startTime'>startTime: </label><div class='col-sm-8'><input id='startTime' class='form-control' type='text'{{#startTime}} value='{{startTime}}'{{/startTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endTime'>endTime: </label><div class='col-sm-8'><input id='endTime' class='form-control' type='text'{{#endTime}} value='{{endTime}}'{{/endTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadFollowingMW'>loadFollowingMW: </label><div class='col-sm-8'><input id='loadFollowingMW' class='form-control' type='text'{{#loadFollowingMW}} value='{{loadFollowingMW}}'{{/loadFollowingMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredResource", "RegisteredResource", "1", "0..*"]
                    ]
                );
            }
        }

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
                base.export_attribute (obj, "export_attribute", "AttributeProperty", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AttributeProperty_collapse" aria-expanded="true" aria-controls="AttributeProperty_collapse" style="margin-left: 10px;">AttributeProperty</a></legend>
                    <div id="AttributeProperty_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sequence}}<div><b>sequence</b>: {{sequence}}</div>{{/sequence}}
                    {{#propertyName}}<div><b>propertyName</b>: {{propertyName}}</div>{{/propertyName}}
                    {{#propertyValue}}<div><b>propertyValue</b>: {{propertyValue}}</div>{{/propertyValue}}
                    {{#MktUserAttribute}}<div><b>MktUserAttribute</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktUserAttribute}}&quot;);})'>{{MktUserAttribute}}</a></div>{{/MktUserAttribute}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AttributeProperty_collapse" aria-expanded="true" aria-controls="AttributeProperty_collapse" style="margin-left: 10px;">AttributeProperty</a></legend>
                    <div id="AttributeProperty_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequence'>sequence: </label><div class='col-sm-8'><input id='sequence' class='form-control' type='text'{{#sequence}} value='{{sequence}}'{{/sequence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='propertyName'>propertyName: </label><div class='col-sm-8'><input id='propertyName' class='form-control' type='text'{{#propertyName}} value='{{propertyName}}'{{/propertyName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='propertyValue'>propertyValue: </label><div class='col-sm-8'><input id='propertyValue' class='form-control' type='text'{{#propertyValue}} value='{{propertyValue}}'{{/propertyValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktUserAttribute'>MktUserAttribute: </label><div class='col-sm-8'><input id='MktUserAttribute' class='form-control' type='text'{{#MktUserAttribute}} value='{{MktUserAttribute}}'{{/MktUserAttribute}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["MktUserAttribute", "MktUserAttribute", "1", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:LoadReductionPriceCurve.RegisteredLoad\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredLoad", sub, context);
                var bucket = context.parsed.LoadReductionPriceCurve;
                if (null == bucket)
                   context.parsed.LoadReductionPriceCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "LoadReductionPriceCurve", fields);
                base.export_attribute (obj, "export_attributes", "LoadReductionPriceCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadReductionPriceCurve_collapse" aria-expanded="true" aria-controls="LoadReductionPriceCurve_collapse" style="margin-left: 10px;">LoadReductionPriceCurve</a></legend>
                    <div id="LoadReductionPriceCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#LoadBid}}<div><b>LoadBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadBid}}&quot;);})'>{{LoadBid}}</a></div>{{/LoadBid}}
                    {{#RegisteredLoad}}<div><b>RegisteredLoad</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RegisteredLoad}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.RegisteredLoad) obj.RegisteredLoad_string = obj.RegisteredLoad.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RegisteredLoad_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadReductionPriceCurve_collapse" aria-expanded="true" aria-controls="LoadReductionPriceCurve_collapse" style="margin-left: 10px;">LoadReductionPriceCurve</a></legend>
                    <div id="LoadReductionPriceCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LoadBid'>LoadBid: </label><div class='col-sm-8'><input id='LoadBid' class='form-control' type='text'{{#LoadBid}} value='{{LoadBid}}'{{/LoadBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredLoad'>RegisteredLoad: </label><div class='col-sm-8'><input id='RegisteredLoad' class='form-control' type='text'{{#RegisteredLoad}} value='{{RegisteredLoad}}_string'{{/RegisteredLoad}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["LoadBid", "LoadBid", "1", "0..*"],
                        ["RegisteredLoad", "RegisteredLoad", "0..*", "0..*"]
                    ]
                );
            }
        }

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

                base.export_attribute (obj, "export_attribute", "BidHourlyProductSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidHourlyProductSchedule_collapse" aria-expanded="true" aria-controls="BidHourlyProductSchedule_collapse" style="margin-left: 10px;">BidHourlyProductSchedule</a></legend>
                    <div id="BidHourlyProductSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#ProductBid}}<div><b>ProductBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProductBid}}&quot;);})'>{{ProductBid}}</a></div>{{/ProductBid}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidHourlyProductSchedule_collapse" aria-expanded="true" aria-controls="BidHourlyProductSchedule_collapse" style="margin-left: 10px;">BidHourlyProductSchedule</a></legend>
                    <div id="BidHourlyProductSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ProductBid'>ProductBid: </label><div class='col-sm-8'><input id='ProductBid' class='form-control' type='text'{{#ProductBid}} value='{{ProductBid}}'{{/ProductBid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ProductBid", "ProductBid", "1", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:StartUpTimeCurve.GeneratingBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingBid", sub, context);
                var bucket = context.parsed.StartUpTimeCurve;
                if (null == bucket)
                   context.parsed.StartUpTimeCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "StartUpTimeCurve", fields);
                base.export_attribute (obj, "export_attributes", "StartUpTimeCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartUpTimeCurve_collapse" aria-expanded="true" aria-controls="StartUpTimeCurve_collapse" style="margin-left: 10px;">StartUpTimeCurve</a></legend>
                    <div id="StartUpTimeCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    {{#GeneratingBid}}<div><b>GeneratingBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GeneratingBid}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.GeneratingBid) obj.GeneratingBid_string = obj.GeneratingBid.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.GeneratingBid_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartUpTimeCurve_collapse" aria-expanded="true" aria-controls="StartUpTimeCurve_collapse" style="margin-left: 10px;">StartUpTimeCurve</a></legend>
                    <div id="StartUpTimeCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredGenerator", "RegisteredGenerator", "0..1", "0..1"],
                        ["GeneratingBid", "GeneratingBid", "0..*", "0..1"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:EnergyPriceCurve.EnergyTransactions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransactions", sub, context);
                base.parse_attributes (/<cim:EnergyPriceCurve.FTRs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FTRs", sub, context);
                var bucket = context.parsed.EnergyPriceCurve;
                if (null == bucket)
                   context.parsed.EnergyPriceCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "export_attributes", "EnergyPriceCurve", fields);
                base.export_attribute (obj, "export_attributes", "EnergyPriceCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyPriceCurve_collapse" aria-expanded="true" aria-controls="EnergyPriceCurve_collapse" style="margin-left: 10px;">EnergyPriceCurve</a></legend>
                    <div id="EnergyPriceCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#EnergyTransactions}}<div><b>EnergyTransactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EnergyTransactions}}
                    {{#FTRs}}<div><b>FTRs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/FTRs}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EnergyTransactions) obj.EnergyTransactions_string = obj.EnergyTransactions.join ();
                if (obj.FTRs) obj.FTRs_string = obj.FTRs.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EnergyTransactions_string;
                delete obj.FTRs_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyPriceCurve_collapse" aria-expanded="true" aria-controls="EnergyPriceCurve_collapse" style="margin-left: 10px;">EnergyPriceCurve</a></legend>
                    <div id="EnergyPriceCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyTransactions'>EnergyTransactions: </label><div class='col-sm-8'><input id='EnergyTransactions' class='form-control' type='text'{{#EnergyTransactions}} value='{{EnergyTransactions}}_string'{{/EnergyTransactions}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["EnergyTransactions", "EnergyTransaction", "0..*", "0..*"],
                        ["FTRs", "FTR", "0..*", "0..1"]
                    ]
                );
            }
        }

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
                base.export_attribute (obj, "export_attribute", "BidSelfSched", fields);
                base.export_attribute (obj, "export_attribute", "BidSelfSched", fields);
                base.export_attribute (obj, "export_attribute", "BidSelfSched", fields);
                base.export_attribute (obj, "export_attribute", "BidSelfSched", fields);
                base.export_attribute (obj, "export_attribute", "BidSelfSched", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidSelfSched_collapse" aria-expanded="true" aria-controls="BidSelfSched_collapse" style="margin-left: 10px;">BidSelfSched</a></legend>
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidSelfSched_collapse" aria-expanded="true" aria-controls="BidSelfSched_collapse" style="margin-left: 10px;">BidSelfSched</a></legend>
                    <div id="BidSelfSched_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='balancingFlag'>balancingFlag: </label><div class='col-sm-8'><input id='balancingFlag' class='form-control' type='text'{{#balancingFlag}} value='{{balancingFlag}}'{{/balancingFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bidType'>bidType: </label><div class='col-sm-8'><input id='bidType' class='form-control' type='text'{{#bidType}} value='{{bidType}}'{{/bidType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priorityFlag'>priorityFlag: </label><div class='col-sm-8'><input id='priorityFlag' class='form-control' type='text'{{#priorityFlag}} value='{{priorityFlag}}'{{/priorityFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpSelfSchedMw'>pumpSelfSchedMw: </label><div class='col-sm-8'><input id='pumpSelfSchedMw' class='form-control' type='text'{{#pumpSelfSchedMw}} value='{{pumpSelfSchedMw}}'{{/pumpSelfSchedMw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='referenceType'>referenceType: </label><div class='col-sm-8'><input id='referenceType' class='form-control' type='text'{{#referenceType}} value='{{referenceType}}'{{/referenceType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='selfSchedMw'>selfSchedMw: </label><div class='col-sm-8'><input id='selfSchedMw' class='form-control' type='text'{{#selfSchedMw}} value='{{selfSchedMw}}'{{/selfSchedMw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='selfSchedSptResource'>selfSchedSptResource: </label><div class='col-sm-8'><input id='selfSchedSptResource' class='form-control' type='text'{{#selfSchedSptResource}} value='{{selfSchedSptResource}}'{{/selfSchedSptResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='selfSchedType'>selfSchedType: </label><div class='col-sm-8'><input id='selfSchedType' class='form-control' type='text'{{#selfSchedType}} value='{{selfSchedType}}'{{/selfSchedType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateType'>updateType: </label><div class='col-sm-8'><input id='updateType' class='form-control' type='text'{{#updateType}} value='{{updateType}}'{{/updateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='wheelingTransactionReference'>wheelingTransactionReference: </label><div class='col-sm-8'><input id='wheelingTransactionReference' class='form-control' type='text'{{#wheelingTransactionReference}} value='{{wheelingTransactionReference}}'{{/wheelingTransactionReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ProductBid'>ProductBid: </label><div class='col-sm-8'><input id='ProductBid' class='form-control' type='text'{{#ProductBid}} value='{{ProductBid}}'{{/ProductBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransmissionContractRight'>TransmissionContractRight: </label><div class='col-sm-8'><input id='TransmissionContractRight' class='form-control' type='text'{{#TransmissionContractRight}} value='{{TransmissionContractRight}}'{{/TransmissionContractRight}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AdjacentCASet'>AdjacentCASet: </label><div class='col-sm-8'><input id='AdjacentCASet' class='form-control' type='text'{{#AdjacentCASet}} value='{{AdjacentCASet}}'{{/AdjacentCASet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea}}'{{/SubControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ProductBid", "ProductBid", "1", "0..*"],
                        ["TransmissionContractRight", "ContractRight", "0..1", "0..*"],
                        ["HostControlArea", "HostControlArea", "0..1", "0..*"],
                        ["AdjacentCASet", "AdjacentCASet", "0..1", "0..*"],
                        ["SubControlArea", "SubControlArea", "0..1", "0..*"]
                    ]
                );
            }
        }

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
                base.export_attribute (obj, "export_attribute", "BidPriceSchedule", fields);
                base.export_attribute (obj, "export_attribute", "BidPriceSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidPriceSchedule_collapse" aria-expanded="true" aria-controls="BidPriceSchedule_collapse" style="margin-left: 10px;">BidPriceSchedule</a></legend>
                    <div id="BidPriceSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#bidType}}<div><b>bidType</b>: {{bidType}}</div>{{/bidType}}
                    {{#mitigationStatus}}<div><b>mitigationStatus</b>: {{mitigationStatus}}</div>{{/mitigationStatus}}
                    {{#BidPriceCurve}}<div><b>BidPriceCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BidPriceCurve}}&quot;);})'>{{BidPriceCurve}}</a></div>{{/BidPriceCurve}}
                    {{#ProductBid}}<div><b>ProductBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProductBid}}&quot;);})'>{{ProductBid}}</a></div>{{/ProductBid}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidPriceSchedule_collapse" aria-expanded="true" aria-controls="BidPriceSchedule_collapse" style="margin-left: 10px;">BidPriceSchedule</a></legend>
                    <div id="BidPriceSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bidType'>bidType: </label><div class='col-sm-8'><input id='bidType' class='form-control' type='text'{{#bidType}} value='{{bidType}}'{{/bidType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mitigationStatus'>mitigationStatus: </label><div class='col-sm-8'><input id='mitigationStatus' class='form-control' type='text'{{#mitigationStatus}} value='{{mitigationStatus}}'{{/mitigationStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BidPriceCurve'>BidPriceCurve: </label><div class='col-sm-8'><input id='BidPriceCurve' class='form-control' type='text'{{#BidPriceCurve}} value='{{BidPriceCurve}}'{{/BidPriceCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ProductBid'>ProductBid: </label><div class='col-sm-8'><input id='ProductBid' class='form-control' type='text'{{#ProductBid}} value='{{ProductBid}}'{{/ProductBid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["BidPriceCurve", "BidPriceCurve", "1", "0..*"],
                        ["ProductBid", "ProductBid", "1", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:ChargeComponent.ChargeTypes\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeTypes", sub, context);
                base.parse_attributes (/<cim:ChargeComponent.BillDeterminants\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BillDeterminants", sub, context);
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
                base.export_attribute (obj, "export_attributes", "ChargeComponent", fields);
                base.export_attribute (obj, "export_attributes", "ChargeComponent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ChargeComponent_collapse" aria-expanded="true" aria-controls="ChargeComponent_collapse" style="margin-left: 10px;">ChargeComponent</a></legend>
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
                    {{#ChargeTypes}}<div><b>ChargeTypes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChargeTypes}}
                    {{#BillDeterminants}}<div><b>BillDeterminants</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BillDeterminants}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ChargeTypes) obj.ChargeTypes_string = obj.ChargeTypes.join ();
                if (obj.BillDeterminants) obj.BillDeterminants_string = obj.BillDeterminants.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ChargeTypes_string;
                delete obj.BillDeterminants_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ChargeComponent_collapse" aria-expanded="true" aria-controls="ChargeComponent_collapse" style="margin-left: 10px;">ChargeComponent</a></legend>
                    <div id="ChargeComponent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='deleteStatus'>deleteStatus: </label><div class='col-sm-8'><input id='deleteStatus' class='form-control' type='text'{{#deleteStatus}} value='{{deleteStatus}}'{{/deleteStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='terminationDate'>terminationDate: </label><div class='col-sm-8'><input id='terminationDate' class='form-control' type='text'{{#terminationDate}} value='{{terminationDate}}'{{/terminationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='message'>message: </label><div class='col-sm-8'><input id='message' class='form-control' type='text'{{#message}} value='{{message}}'{{/message}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sum'>sum: </label><div class='col-sm-8'><input id='sum' class='form-control' type='text'{{#sum}} value='{{sum}}'{{/sum}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='roundOff'>roundOff: </label><div class='col-sm-8'><input id='roundOff' class='form-control' type='text'{{#roundOff}} value='{{roundOff}}'{{/roundOff}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='equation'>equation: </label><div class='col-sm-8'><input id='equation' class='form-control' type='text'{{#equation}} value='{{equation}}'{{/equation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChargeTypes'>ChargeTypes: </label><div class='col-sm-8'><input id='ChargeTypes' class='form-control' type='text'{{#ChargeTypes}} value='{{ChargeTypes}}_string'{{/ChargeTypes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BillDeterminants'>BillDeterminants: </label><div class='col-sm-8'><input id='BillDeterminants' class='form-control' type='text'{{#BillDeterminants}} value='{{BillDeterminants}}_string'{{/BillDeterminants}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ChargeTypes", "ChargeType", "0..*", "0..*"],
                        ["BillDeterminants", "BillDeterminant", "0..*", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:MajorChargeGroup.Settlement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Settlement", sub, context);
                base.parse_attributes (/<cim:MajorChargeGroup.MarketInvoice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketInvoice", sub, context);
                base.parse_attributes (/<cim:MajorChargeGroup.ChargeType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeType", sub, context);
                base.parse_attributes (/<cim:MajorChargeGroup.MktScheduledEvent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktScheduledEvent", sub, context);
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
                base.export_attribute (obj, "export_attributes", "MajorChargeGroup", fields);
                base.export_attribute (obj, "export_attributes", "MajorChargeGroup", fields);
                base.export_attribute (obj, "export_attributes", "MajorChargeGroup", fields);
                base.export_attribute (obj, "export_attributes", "MajorChargeGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MajorChargeGroup_collapse" aria-expanded="true" aria-controls="MajorChargeGroup_collapse" style="margin-left: 10px;">MajorChargeGroup</a></legend>
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
                    {{#Settlement}}<div><b>Settlement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Settlement}}
                    {{#MarketInvoice}}<div><b>MarketInvoice</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketInvoice}}
                    {{#ChargeType}}<div><b>ChargeType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChargeType}}
                    {{#MktScheduledEvent}}<div><b>MktScheduledEvent</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktScheduledEvent}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Settlement) obj.Settlement_string = obj.Settlement.join ();
                if (obj.MarketInvoice) obj.MarketInvoice_string = obj.MarketInvoice.join ();
                if (obj.ChargeType) obj.ChargeType_string = obj.ChargeType.join ();
                if (obj.MktScheduledEvent) obj.MktScheduledEvent_string = obj.MktScheduledEvent.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Settlement_string;
                delete obj.MarketInvoice_string;
                delete obj.ChargeType_string;
                delete obj.MktScheduledEvent_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MajorChargeGroup_collapse" aria-expanded="true" aria-controls="MajorChargeGroup_collapse" style="margin-left: 10px;">MajorChargeGroup</a></legend>
                    <div id="MajorChargeGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='runType'>runType: </label><div class='col-sm-8'><input id='runType' class='form-control' type='text'{{#runType}} value='{{runType}}'{{/runType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='runVersion'>runVersion: </label><div class='col-sm-8'><input id='runVersion' class='form-control' type='text'{{#runVersion}} value='{{runVersion}}'{{/runVersion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='frequencyType'>frequencyType: </label><div class='col-sm-8'><input id='frequencyType' class='form-control' type='text'{{#frequencyType}} value='{{frequencyType}}'{{/frequencyType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='invoiceType'>invoiceType: </label><div class='col-sm-8'><input id='invoiceType' class='form-control' type='text'{{#invoiceType}} value='{{invoiceType}}'{{/invoiceType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='terminationDate'>terminationDate: </label><div class='col-sm-8'><input id='terminationDate' class='form-control' type='text'{{#terminationDate}} value='{{terminationDate}}'{{/terminationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='requireAutorun'>requireAutorun: </label><div class='col-sm-8'><input id='requireAutorun' class='form-control' type='text'{{#requireAutorun}} value='{{requireAutorun}}'{{/requireAutorun}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='revisionNumber'>revisionNumber: </label><div class='col-sm-8'><input id='revisionNumber' class='form-control' type='text'{{#revisionNumber}} value='{{revisionNumber}}'{{/revisionNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Settlement'>Settlement: </label><div class='col-sm-8'><input id='Settlement' class='form-control' type='text'{{#Settlement}} value='{{Settlement}}_string'{{/Settlement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketInvoice'>MarketInvoice: </label><div class='col-sm-8'><input id='MarketInvoice' class='form-control' type='text'{{#MarketInvoice}} value='{{MarketInvoice}}_string'{{/MarketInvoice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChargeType'>ChargeType: </label><div class='col-sm-8'><input id='ChargeType' class='form-control' type='text'{{#ChargeType}} value='{{ChargeType}}_string'{{/ChargeType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Settlement", "Settlement", "0..*", "1..*"],
                        ["MarketInvoice", "MarketInvoice", "0..*", "1..*"],
                        ["ChargeType", "ChargeType", "0..*", "0..*"],
                        ["MktScheduledEvent", "MarketScheduledEvent", "0..*", "0..1"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:ChargeType.MajorChargeGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MajorChargeGroup", sub, context);
                base.parse_attributes (/<cim:ChargeType.MktUserAttribute\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktUserAttribute", sub, context);
                base.parse_attributes (/<cim:ChargeType.ChargeComponents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeComponents", sub, context);
                base.parse_attributes (/<cim:ChargeType.ChargeGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeGroup", sub, context);
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
                base.export_attribute (obj, "export_attributes", "ChargeType", fields);
                base.export_attribute (obj, "export_attributes", "ChargeType", fields);
                base.export_attribute (obj, "export_attributes", "ChargeType", fields);
                base.export_attribute (obj, "export_attributes", "ChargeType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ChargeType_collapse" aria-expanded="true" aria-controls="ChargeType_collapse" style="margin-left: 10px;">ChargeType</a></legend>
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
                    {{#MajorChargeGroup}}<div><b>MajorChargeGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MajorChargeGroup}}
                    {{#MktUserAttribute}}<div><b>MktUserAttribute</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktUserAttribute}}
                    {{#ChargeComponents}}<div><b>ChargeComponents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChargeComponents}}
                    {{#ChargeGroup}}<div><b>ChargeGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChargeGroup}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MajorChargeGroup) obj.MajorChargeGroup_string = obj.MajorChargeGroup.join ();
                if (obj.MktUserAttribute) obj.MktUserAttribute_string = obj.MktUserAttribute.join ();
                if (obj.ChargeComponents) obj.ChargeComponents_string = obj.ChargeComponents.join ();
                if (obj.ChargeGroup) obj.ChargeGroup_string = obj.ChargeGroup.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MajorChargeGroup_string;
                delete obj.MktUserAttribute_string;
                delete obj.ChargeComponents_string;
                delete obj.ChargeGroup_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ChargeType_collapse" aria-expanded="true" aria-controls="ChargeType_collapse" style="margin-left: 10px;">ChargeType</a></legend>
                    <div id="ChargeType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='terminationDate'>terminationDate: </label><div class='col-sm-8'><input id='terminationDate' class='form-control' type='text'{{#terminationDate}} value='{{terminationDate}}'{{/terminationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='factor'>factor: </label><div class='col-sm-8'><input id='factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='chargeOrder'>chargeOrder: </label><div class='col-sm-8'><input id='chargeOrder' class='form-control' type='text'{{#chargeOrder}} value='{{chargeOrder}}'{{/chargeOrder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='frequencyType'>frequencyType: </label><div class='col-sm-8'><input id='frequencyType' class='form-control' type='text'{{#frequencyType}} value='{{frequencyType}}'{{/frequencyType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='chargeVersion'>chargeVersion: </label><div class='col-sm-8'><input id='chargeVersion' class='form-control' type='text'{{#chargeVersion}} value='{{chargeVersion}}'{{/chargeVersion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='totalInterval'>totalInterval: </label><div class='col-sm-8'><input id='totalInterval' class='form-control' type='text'{{#totalInterval}} value='{{totalInterval}}'{{/totalInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MajorChargeGroup'>MajorChargeGroup: </label><div class='col-sm-8'><input id='MajorChargeGroup' class='form-control' type='text'{{#MajorChargeGroup}} value='{{MajorChargeGroup}}_string'{{/MajorChargeGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktUserAttribute'>MktUserAttribute: </label><div class='col-sm-8'><input id='MktUserAttribute' class='form-control' type='text'{{#MktUserAttribute}} value='{{MktUserAttribute}}_string'{{/MktUserAttribute}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChargeComponents'>ChargeComponents: </label><div class='col-sm-8'><input id='ChargeComponents' class='form-control' type='text'{{#ChargeComponents}} value='{{ChargeComponents}}_string'{{/ChargeComponents}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChargeGroup'>ChargeGroup: </label><div class='col-sm-8'><input id='ChargeGroup' class='form-control' type='text'{{#ChargeGroup}} value='{{ChargeGroup}}_string'{{/ChargeGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["MajorChargeGroup", "MajorChargeGroup", "0..*", "0..*"],
                        ["MktUserAttribute", "MktUserAttribute", "0..*", "0..*"],
                        ["ChargeComponents", "ChargeComponent", "0..*", "0..*"],
                        ["ChargeGroup", "ChargeGroup", "0..*", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:StartUpCostCurve.GeneratingBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingBid", sub, context);
                base.parse_attributes (/<cim:StartUpCostCurve.RegisteredGenerators\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerators", sub, context);
                var bucket = context.parsed.StartUpCostCurve;
                if (null == bucket)
                   context.parsed.StartUpCostCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attributes", "StartUpCostCurve", fields);
                base.export_attribute (obj, "export_attributes", "StartUpCostCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartUpCostCurve_collapse" aria-expanded="true" aria-controls="StartUpCostCurve_collapse" style="margin-left: 10px;">StartUpCostCurve</a></legend>
                    <div id="StartUpCostCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#GeneratingBid}}<div><b>GeneratingBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GeneratingBid}}
                    {{#RegisteredGenerators}}<div><b>RegisteredGenerators</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RegisteredGenerators}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.GeneratingBid) obj.GeneratingBid_string = obj.GeneratingBid.join ();
                if (obj.RegisteredGenerators) obj.RegisteredGenerators_string = obj.RegisteredGenerators.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.GeneratingBid_string;
                delete obj.RegisteredGenerators_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartUpCostCurve_collapse" aria-expanded="true" aria-controls="StartUpCostCurve_collapse" style="margin-left: 10px;">StartUpCostCurve</a></legend>
                    <div id="StartUpCostCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerators'>RegisteredGenerators: </label><div class='col-sm-8'><input id='RegisteredGenerators' class='form-control' type='text'{{#RegisteredGenerators}} value='{{RegisteredGenerators}}_string'{{/RegisteredGenerators}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["GeneratingBid", "GeneratingBid", "0..*", "0..1"],
                        ["RegisteredGenerators", "RegisteredGenerator", "0..*", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:BidDistributionFactor.PnodeDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PnodeDistributionFactor", sub, context);
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
                base.export_attribute (obj, "export_attribute", "BidDistributionFactor", fields);
                base.export_attribute (obj, "export_attributes", "BidDistributionFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidDistributionFactor_collapse" aria-expanded="true" aria-controls="BidDistributionFactor_collapse" style="margin-left: 10px;">BidDistributionFactor</a></legend>
                    <div id="BidDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#timeIntervalStart}}<div><b>timeIntervalStart</b>: {{timeIntervalStart}}</div>{{/timeIntervalStart}}
                    {{#timeIntervalEnd}}<div><b>timeIntervalEnd</b>: {{timeIntervalEnd}}</div>{{/timeIntervalEnd}}
                    {{#ProductBid}}<div><b>ProductBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProductBid}}&quot;);})'>{{ProductBid}}</a></div>{{/ProductBid}}
                    {{#PnodeDistributionFactor}}<div><b>PnodeDistributionFactor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PnodeDistributionFactor}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PnodeDistributionFactor) obj.PnodeDistributionFactor_string = obj.PnodeDistributionFactor.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PnodeDistributionFactor_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidDistributionFactor_collapse" aria-expanded="true" aria-controls="BidDistributionFactor_collapse" style="margin-left: 10px;">BidDistributionFactor</a></legend>
                    <div id="BidDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeIntervalStart'>timeIntervalStart: </label><div class='col-sm-8'><input id='timeIntervalStart' class='form-control' type='text'{{#timeIntervalStart}} value='{{timeIntervalStart}}'{{/timeIntervalStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeIntervalEnd'>timeIntervalEnd: </label><div class='col-sm-8'><input id='timeIntervalEnd' class='form-control' type='text'{{#timeIntervalEnd}} value='{{timeIntervalEnd}}'{{/timeIntervalEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ProductBid'>ProductBid: </label><div class='col-sm-8'><input id='ProductBid' class='form-control' type='text'{{#ProductBid}} value='{{ProductBid}}'{{/ProductBid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ProductBid", "ProductBid", "1", "0..*"],
                        ["PnodeDistributionFactor", "PnodeDistributionFactor", "0..*", "0..1"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:TradeProduct.Trade\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Trade", sub, context);
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
                base.export_attribute (obj, "export_attributes", "TradeProduct", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TradeProduct_collapse" aria-expanded="true" aria-controls="TradeProduct_collapse" style="margin-left: 10px;">TradeProduct</a></legend>
                    <div id="TradeProduct_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#tradeType}}<div><b>tradeType</b>: {{tradeType}}</div>{{/tradeType}}
                    {{#tradeProductType}}<div><b>tradeProductType</b>: {{tradeProductType}}</div>{{/tradeProductType}}
                    {{#Trade}}<div><b>Trade</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Trade}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Trade) obj.Trade_string = obj.Trade.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Trade_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TradeProduct_collapse" aria-expanded="true" aria-controls="TradeProduct_collapse" style="margin-left: 10px;">TradeProduct</a></legend>
                    <div id="TradeProduct_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tradeType'>tradeType: </label><div class='col-sm-8'><input id='tradeType' class='form-control' type='text'{{#tradeType}} value='{{tradeType}}'{{/tradeType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tradeProductType'>tradeProductType: </label><div class='col-sm-8'><input id='tradeProductType' class='form-control' type='text'{{#tradeProductType}} value='{{tradeProductType}}'{{/tradeProductType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Trade", "Trade", "0..*", "1"]
                    ]
                );
            }
        }

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
                base.export_attribute (obj, "export_attribute", "TradeError", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TradeError_collapse" aria-expanded="true" aria-controls="TradeError_collapse" style="margin-left: 10px;">TradeError</a></legend>
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TradeError_collapse" aria-expanded="true" aria-controls="TradeError_collapse" style="margin-left: 10px;">TradeError</a></legend>
                    <div id="TradeError_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='errPriority'>errPriority: </label><div class='col-sm-8'><input id='errPriority' class='form-control' type='text'{{#errPriority}} value='{{errPriority}}'{{/errPriority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='errMessage'>errMessage: </label><div class='col-sm-8'><input id='errMessage' class='form-control' type='text'{{#errMessage}} value='{{errMessage}}'{{/errMessage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ruleID'>ruleID: </label><div class='col-sm-8'><input id='ruleID' class='form-control' type='text'{{#ruleID}} value='{{ruleID}}'{{/ruleID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startTime'>startTime: </label><div class='col-sm-8'><input id='startTime' class='form-control' type='text'{{#startTime}} value='{{startTime}}'{{/startTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endTime'>endTime: </label><div class='col-sm-8'><input id='endTime' class='form-control' type='text'{{#endTime}} value='{{endTime}}'{{/endTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='logTimeStamp'>logTimeStamp: </label><div class='col-sm-8'><input id='logTimeStamp' class='form-control' type='text'{{#logTimeStamp}} value='{{logTimeStamp}}'{{/logTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Trade'>Trade: </label><div class='col-sm-8'><input id='Trade' class='form-control' type='text'{{#Trade}} value='{{Trade}}'{{/Trade}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Trade", "Trade", "0..1", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:Bid.BidHourlySchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidHourlySchedule", sub, context);
                base.parse_attributes (/<cim:Bid.RMRDetermination\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RMRDetermination", sub, context);
                base.parse_attributes (/<cim:Bid.ProductBids\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBids", sub, context);
                base.parse_attribute (/<cim:Bid.MarketParticipant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketParticipant", sub, context);
                base.parse_attribute (/<cim:Bid.EnergyMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyMarket", sub, context);
                base.parse_attributes (/<cim:Bid.MitigatedBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MitigatedBid", sub, context);
                base.parse_attributes (/<cim:Bid.ChargeProfiles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeProfiles", sub, context);
                base.parse_attributes (/<cim:Bid.MitigatedBidSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MitigatedBidSegment", sub, context);
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
                base.export_attribute (obj, "export_attribute", "Bid", fields);
                base.export_attribute (obj, "export_attributes", "Bid", fields);
                base.export_attribute (obj, "export_attributes", "Bid", fields);
                base.export_attribute (obj, "export_attributes", "Bid", fields);
                base.export_attribute (obj, "export_attribute", "Bid", fields);
                base.export_attribute (obj, "export_attribute", "Bid", fields);
                base.export_attribute (obj, "export_attributes", "Bid", fields);
                base.export_attribute (obj, "export_attributes", "Bid", fields);
                base.export_attribute (obj, "export_attributes", "Bid", fields);
                base.export_attribute (obj, "export_attribute", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Bid_collapse" aria-expanded="true" aria-controls="Bid_collapse" style="margin-left: 10px;">Bid</a></legend>
                    <div id="Bid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
                    {{#stopTime}}<div><b>stopTime</b>: {{stopTime}}</div>{{/stopTime}}
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#ActionRequest}}<div><b>ActionRequest</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ActionRequest}}&quot;);})'>{{ActionRequest}}</a></div>{{/ActionRequest}}
                    {{#BidHourlySchedule}}<div><b>BidHourlySchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BidHourlySchedule}}
                    {{#RMRDetermination}}<div><b>RMRDetermination</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RMRDetermination}}
                    {{#ProductBids}}<div><b>ProductBids</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProductBids}}
                    {{#MarketParticipant}}<div><b>MarketParticipant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketParticipant}}&quot;);})'>{{MarketParticipant}}</a></div>{{/MarketParticipant}}
                    {{#EnergyMarket}}<div><b>EnergyMarket</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyMarket}}&quot;);})'>{{EnergyMarket}}</a></div>{{/EnergyMarket}}
                    {{#MitigatedBid}}<div><b>MitigatedBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MitigatedBid}}
                    {{#ChargeProfiles}}<div><b>ChargeProfiles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChargeProfiles}}
                    {{#MitigatedBidSegment}}<div><b>MitigatedBidSegment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MitigatedBidSegment}}
                    {{#SchedulingCoordinator}}<div><b>SchedulingCoordinator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SchedulingCoordinator}}&quot;);})'>{{SchedulingCoordinator}}</a></div>{{/SchedulingCoordinator}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.BidHourlySchedule) obj.BidHourlySchedule_string = obj.BidHourlySchedule.join ();
                if (obj.RMRDetermination) obj.RMRDetermination_string = obj.RMRDetermination.join ();
                if (obj.ProductBids) obj.ProductBids_string = obj.ProductBids.join ();
                if (obj.MitigatedBid) obj.MitigatedBid_string = obj.MitigatedBid.join ();
                if (obj.ChargeProfiles) obj.ChargeProfiles_string = obj.ChargeProfiles.join ();
                if (obj.MitigatedBidSegment) obj.MitigatedBidSegment_string = obj.MitigatedBidSegment.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.BidHourlySchedule_string;
                delete obj.RMRDetermination_string;
                delete obj.ProductBids_string;
                delete obj.MitigatedBid_string;
                delete obj.ChargeProfiles_string;
                delete obj.MitigatedBidSegment_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Bid_collapse" aria-expanded="true" aria-controls="Bid_collapse" style="margin-left: 10px;">Bid</a></legend>
                    <div id="Bid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startTime'>startTime: </label><div class='col-sm-8'><input id='startTime' class='form-control' type='text'{{#startTime}} value='{{startTime}}'{{/startTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='stopTime'>stopTime: </label><div class='col-sm-8'><input id='stopTime' class='form-control' type='text'{{#stopTime}} value='{{stopTime}}'{{/stopTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marketType'>marketType: </label><div class='col-sm-8'><input id='marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ActionRequest'>ActionRequest: </label><div class='col-sm-8'><input id='ActionRequest' class='form-control' type='text'{{#ActionRequest}} value='{{ActionRequest}}'{{/ActionRequest}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketParticipant'>MarketParticipant: </label><div class='col-sm-8'><input id='MarketParticipant' class='form-control' type='text'{{#MarketParticipant}} value='{{MarketParticipant}}'{{/MarketParticipant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyMarket'>EnergyMarket: </label><div class='col-sm-8'><input id='EnergyMarket' class='form-control' type='text'{{#EnergyMarket}} value='{{EnergyMarket}}'{{/EnergyMarket}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SchedulingCoordinator'>SchedulingCoordinator: </label><div class='col-sm-8'><input id='SchedulingCoordinator' class='form-control' type='text'{{#SchedulingCoordinator}} value='{{SchedulingCoordinator}}'{{/SchedulingCoordinator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ActionRequest", "ActionRequest", "1", "0..*"],
                        ["BidHourlySchedule", "BidHourlySchedule", "0..*", "1"],
                        ["RMRDetermination", "RMRDetermination", "0..*", "0..1"],
                        ["ProductBids", "ProductBid", "1..*", "1"],
                        ["MarketParticipant", "MarketParticipant", "0..1", "0..*"],
                        ["EnergyMarket", "EnergyMarket", "1", "0..*"],
                        ["MitigatedBid", "MitigatedBid", "0..*", "0..1"],
                        ["ChargeProfiles", "ChargeProfile", "0..*", "0..1"],
                        ["MitigatedBidSegment", "MitigatedBidSegment", "0..*", "1"],
                        ["SchedulingCoordinator", "SchedulingCoordinator", "0..1", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:Trade.TradeError\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TradeError", sub, context);
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
                base.export_attribute (obj, "export_attribute", "Trade", fields);
                base.export_attribute (obj, "export_attribute", "Trade", fields);
                base.export_attribute (obj, "export_attributes", "Trade", fields);
                base.export_attribute (obj, "export_attribute", "Trade", fields);
                base.export_attribute (obj, "export_attribute", "Trade", fields);
                base.export_attribute (obj, "export_attribute", "Trade", fields);
                base.export_attribute (obj, "export_attribute", "Trade", fields);
                base.export_attribute (obj, "export_attribute", "Trade", fields);
                base.export_attribute (obj, "export_attribute", "Trade", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Trade_collapse" aria-expanded="true" aria-controls="Trade_collapse" style="margin-left: 10px;">Trade</a></legend>
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
                    {{#TradeError}}<div><b>TradeError</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TradeError}}
                    {{#ActionRequest}}<div><b>ActionRequest</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ActionRequest}}&quot;);})'>{{ActionRequest}}</a></div>{{/ActionRequest}}
                    {{#To_SC}}<div><b>To_SC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{To_SC}}&quot;);})'>{{To_SC}}</a></div>{{/To_SC}}
                    {{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Pnode}}&quot;);})'>{{Pnode}}</a></div>{{/Pnode}}
                    {{#submitToSchedulingCoordinator}}<div><b>submitToSchedulingCoordinator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{submitToSchedulingCoordinator}}&quot;);})'>{{submitToSchedulingCoordinator}}</a></div>{{/submitToSchedulingCoordinator}}
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    {{#From_SC}}<div><b>From_SC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{From_SC}}&quot;);})'>{{From_SC}}</a></div>{{/From_SC}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TradeError) obj.TradeError_string = obj.TradeError.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TradeError_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Trade_collapse" aria-expanded="true" aria-controls="Trade_collapse" style="margin-left: 10px;">Trade</a></legend>
                    <div id="Trade_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='adjustedTradeQuantity'>adjustedTradeQuantity: </label><div class='col-sm-8'><input id='adjustedTradeQuantity' class='form-control' type='text'{{#adjustedTradeQuantity}} value='{{adjustedTradeQuantity}}'{{/adjustedTradeQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='counterTradeQuantity'>counterTradeQuantity: </label><div class='col-sm-8'><input id='counterTradeQuantity' class='form-control' type='text'{{#counterTradeQuantity}} value='{{counterTradeQuantity}}'{{/counterTradeQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dependOnTradeName'>dependOnTradeName: </label><div class='col-sm-8'><input id='dependOnTradeName' class='form-control' type='text'{{#dependOnTradeName}} value='{{dependOnTradeName}}'{{/dependOnTradeName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lastModified'>lastModified: </label><div class='col-sm-8'><input id='lastModified' class='form-control' type='text'{{#lastModified}} value='{{lastModified}}'{{/lastModified}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marketType'>marketType: </label><div class='col-sm-8'><input id='marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startTime'>startTime: </label><div class='col-sm-8'><input id='startTime' class='form-control' type='text'{{#startTime}} value='{{startTime}}'{{/startTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='stopTime'>stopTime: </label><div class='col-sm-8'><input id='stopTime' class='form-control' type='text'{{#stopTime}} value='{{stopTime}}'{{/stopTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='submitFromTimeStamp'>submitFromTimeStamp: </label><div class='col-sm-8'><input id='submitFromTimeStamp' class='form-control' type='text'{{#submitFromTimeStamp}} value='{{submitFromTimeStamp}}'{{/submitFromTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='submitFromUser'>submitFromUser: </label><div class='col-sm-8'><input id='submitFromUser' class='form-control' type='text'{{#submitFromUser}} value='{{submitFromUser}}'{{/submitFromUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='submitToTimeStamp'>submitToTimeStamp: </label><div class='col-sm-8'><input id='submitToTimeStamp' class='form-control' type='text'{{#submitToTimeStamp}} value='{{submitToTimeStamp}}'{{/submitToTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='submitToUser '>submitToUser : </label><div class='col-sm-8'><input id='submitToUser ' class='form-control' type='text'{{#submitToUser }} value='{{submitToUser }}'{{/submitToUser }}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tradeQuantity'>tradeQuantity: </label><div class='col-sm-8'><input id='tradeQuantity' class='form-control' type='text'{{#tradeQuantity}} value='{{tradeQuantity}}'{{/tradeQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tradeStatus'>tradeStatus: </label><div class='col-sm-8'><input id='tradeStatus' class='form-control' type='text'{{#tradeStatus}} value='{{tradeStatus}}'{{/tradeStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateUser'>updateUser: </label><div class='col-sm-8'><input id='updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TradeProduct'>TradeProduct: </label><div class='col-sm-8'><input id='TradeProduct' class='form-control' type='text'{{#TradeProduct}} value='{{TradeProduct}}'{{/TradeProduct}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='submitFromSchedulingCoordinator'>submitFromSchedulingCoordinator: </label><div class='col-sm-8'><input id='submitFromSchedulingCoordinator' class='form-control' type='text'{{#submitFromSchedulingCoordinator}} value='{{submitFromSchedulingCoordinator}}'{{/submitFromSchedulingCoordinator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ActionRequest'>ActionRequest: </label><div class='col-sm-8'><input id='ActionRequest' class='form-control' type='text'{{#ActionRequest}} value='{{ActionRequest}}'{{/ActionRequest}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='To_SC'>To_SC: </label><div class='col-sm-8'><input id='To_SC' class='form-control' type='text'{{#To_SC}} value='{{To_SC}}'{{/To_SC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Pnode'>Pnode: </label><div class='col-sm-8'><input id='Pnode' class='form-control' type='text'{{#Pnode}} value='{{Pnode}}'{{/Pnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='submitToSchedulingCoordinator'>submitToSchedulingCoordinator: </label><div class='col-sm-8'><input id='submitToSchedulingCoordinator' class='form-control' type='text'{{#submitToSchedulingCoordinator}} value='{{submitToSchedulingCoordinator}}'{{/submitToSchedulingCoordinator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='From_SC'>From_SC: </label><div class='col-sm-8'><input id='From_SC' class='form-control' type='text'{{#From_SC}} value='{{From_SC}}'{{/From_SC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["TradeProduct", "TradeProduct", "1", "0..*"],
                        ["submitFromSchedulingCoordinator", "SchedulingCoordinator", "0..1", "0..*"],
                        ["TradeError", "TradeError", "0..*", "0..1"],
                        ["ActionRequest", "ActionRequest", "1", "0..*"],
                        ["To_SC", "SchedulingCoordinator", "1", "0..*"],
                        ["Pnode", "Pnode", "0..1", "0..*"],
                        ["submitToSchedulingCoordinator", "SchedulingCoordinator", "0..1", "0..*"],
                        ["RegisteredGenerator", "RegisteredGenerator", "0..1", "0..*"],
                        ["From_SC", "SchedulingCoordinator", "1", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:BidError.ResourceBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceBid", sub, context);
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
                base.export_attribute (obj, "export_attributes", "BidError", fields);
                base.export_attribute (obj, "export_attribute", "BidError", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidError_collapse" aria-expanded="true" aria-controls="BidError_collapse" style="margin-left: 10px;">BidError</a></legend>
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
                    {{#ResourceBid}}<div><b>ResourceBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResourceBid}}
                    {{#MarketProduct}}<div><b>MarketProduct</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketProduct}}&quot;);})'>{{MarketProduct}}</a></div>{{/MarketProduct}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ResourceBid) obj.ResourceBid_string = obj.ResourceBid.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ResourceBid_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidError_collapse" aria-expanded="true" aria-controls="BidError_collapse" style="margin-left: 10px;">BidError</a></legend>
                    <div id="BidError_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='errPriority'>errPriority: </label><div class='col-sm-8'><input id='errPriority' class='form-control' type='text'{{#errPriority}} value='{{errPriority}}'{{/errPriority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='errMessage'>errMessage: </label><div class='col-sm-8'><input id='errMessage' class='form-control' type='text'{{#errMessage}} value='{{errMessage}}'{{/errMessage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ruleID'>ruleID: </label><div class='col-sm-8'><input id='ruleID' class='form-control' type='text'{{#ruleID}} value='{{ruleID}}'{{/ruleID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startTime'>startTime: </label><div class='col-sm-8'><input id='startTime' class='form-control' type='text'{{#startTime}} value='{{startTime}}'{{/startTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endTime'>endTime: </label><div class='col-sm-8'><input id='endTime' class='form-control' type='text'{{#endTime}} value='{{endTime}}'{{/endTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='logTimeStamp'>logTimeStamp: </label><div class='col-sm-8'><input id='logTimeStamp' class='form-control' type='text'{{#logTimeStamp}} value='{{logTimeStamp}}'{{/logTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='componentType'>componentType: </label><div class='col-sm-8'><input id='componentType' class='form-control' type='text'{{#componentType}} value='{{componentType}}'{{/componentType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='msgLevel'>msgLevel: </label><div class='col-sm-8'><input id='msgLevel' class='form-control' type='text'{{#msgLevel}} value='{{msgLevel}}'{{/msgLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ResourceBid'>ResourceBid: </label><div class='col-sm-8'><input id='ResourceBid' class='form-control' type='text'{{#ResourceBid}} value='{{ResourceBid}}_string'{{/ResourceBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketProduct'>MarketProduct: </label><div class='col-sm-8'><input id='MarketProduct' class='form-control' type='text'{{#MarketProduct}} value='{{MarketProduct}}'{{/MarketProduct}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ResourceBid", "ResourceBid", "0..*", "0..*"],
                        ["MarketProduct", "MarketProduct", "0..1", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:ActionRequest.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);
                base.parse_attributes (/<cim:ActionRequest.Trade\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Trade", sub, context);
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
                base.export_attribute (obj, "export_attributes", "ActionRequest", fields);
                base.export_attribute (obj, "export_attributes", "ActionRequest", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ActionRequest_collapse" aria-expanded="true" aria-controls="ActionRequest_collapse" style="margin-left: 10px;">ActionRequest</a></legend>
                    <div id="ActionRequest_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#actionName}}<div><b>actionName</b>: {{actionName}}</div>{{/actionName}}
                    {{#Bid}}<div><b>Bid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Bid}}
                    {{#Trade}}<div><b>Trade</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Trade}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Bid) obj.Bid_string = obj.Bid.join ();
                if (obj.Trade) obj.Trade_string = obj.Trade.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Bid_string;
                delete obj.Trade_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ActionRequest_collapse" aria-expanded="true" aria-controls="ActionRequest_collapse" style="margin-left: 10px;">ActionRequest</a></legend>
                    <div id="ActionRequest_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='actionName'>actionName: </label><div class='col-sm-8'><input id='actionName' class='form-control' type='text'{{#actionName}} value='{{actionName}}'{{/actionName}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Bid", "Bid", "0..*", "1"],
                        ["Trade", "Trade", "0..*", "1"]
                    ]
                );
            }
        }

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
                base.export_attribute (obj, "export_attribute", "InterTieDispatchResponse", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InterTieDispatchResponse_collapse" aria-expanded="true" aria-controls="InterTieDispatchResponse_collapse" style="margin-left: 10px;">InterTieDispatchResponse</a></legend>
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InterTieDispatchResponse_collapse" aria-expanded="true" aria-controls="InterTieDispatchResponse_collapse" style="margin-left: 10px;">InterTieDispatchResponse</a></legend>
                    <div id="InterTieDispatchResponse_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='acceptStatus'>acceptStatus: </label><div class='col-sm-8'><input id='acceptStatus' class='form-control' type='text'{{#acceptStatus}} value='{{acceptStatus}}'{{/acceptStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='acceptMW'>acceptMW: </label><div class='col-sm-8'><input id='acceptMW' class='form-control' type='text'{{#acceptMW}} value='{{acceptMW}}'{{/acceptMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clearedMW'>clearedMW: </label><div class='col-sm-8'><input id='clearedMW' class='form-control' type='text'{{#clearedMW}} value='{{clearedMW}}'{{/clearedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startTime'>startTime: </label><div class='col-sm-8'><input id='startTime' class='form-control' type='text'{{#startTime}} value='{{startTime}}'{{/startTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='passIndicator'>passIndicator: </label><div class='col-sm-8'><input id='passIndicator' class='form-control' type='text'{{#passIndicator}} value='{{passIndicator}}'{{/passIndicator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredInterTie'>RegisteredInterTie: </label><div class='col-sm-8'><input id='RegisteredInterTie' class='form-control' type='text'{{#RegisteredInterTie}} value='{{RegisteredInterTie}}'{{/RegisteredInterTie}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredInterTie", "RegisteredInterTie", "1", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:BidSet.GeneratingBids\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingBids", sub, context);
                var bucket = context.parsed.BidSet;
                if (null == bucket)
                   context.parsed.BidSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attributes", "BidSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidSet_collapse" aria-expanded="true" aria-controls="BidSet_collapse" style="margin-left: 10px;">BidSet</a></legend>
                    <div id="BidSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#GeneratingBids}}<div><b>GeneratingBids</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GeneratingBids}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.GeneratingBids) obj.GeneratingBids_string = obj.GeneratingBids.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.GeneratingBids_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidSet_collapse" aria-expanded="true" aria-controls="BidSet_collapse" style="margin-left: 10px;">BidSet</a></legend>
                    <div id="BidSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["GeneratingBids", "GeneratingBid", "1..*", "0..1"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:RampRateCurve.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
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
                base.export_attribute (obj, "export_attribute", "RampRateCurve", fields);
                base.export_attribute (obj, "export_attribute", "RampRateCurve", fields);
                base.export_attribute (obj, "export_attributes", "RampRateCurve", fields);
                base.export_attribute (obj, "export_attribute", "RampRateCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RampRateCurve_collapse" aria-expanded="true" aria-controls="RampRateCurve_collapse" style="margin-left: 10px;">RampRateCurve</a></legend>
                    <div id="RampRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#condition}}<div><b>condition</b>: {{condition}}</div>{{/condition}}
                    {{#constraintRampType}}<div><b>constraintRampType</b>: {{constraintRampType}}</div>{{/constraintRampType}}
                    {{#rampRateType}}<div><b>rampRateType</b>: {{rampRateType}}</div>{{/rampRateType}}
                    {{#GeneratingBid}}<div><b>GeneratingBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingBid}}&quot;);})'>{{GeneratingBid}}</a></div>{{/GeneratingBid}}
                    {{#LoadBid}}<div><b>LoadBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadBid}}&quot;);})'>{{LoadBid}}</a></div>{{/LoadBid}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RegisteredResource}}
                    {{#InterTieBid}}<div><b>InterTieBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InterTieBid}}&quot;);})'>{{InterTieBid}}</a></div>{{/InterTieBid}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.RegisteredResource) obj.RegisteredResource_string = obj.RegisteredResource.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RegisteredResource_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RampRateCurve_collapse" aria-expanded="true" aria-controls="RampRateCurve_collapse" style="margin-left: 10px;">RampRateCurve</a></legend>
                    <div id="RampRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='condition'>condition: </label><div class='col-sm-8'><input id='condition' class='form-control' type='text'{{#condition}} value='{{condition}}'{{/condition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='constraintRampType'>constraintRampType: </label><div class='col-sm-8'><input id='constraintRampType' class='form-control' type='text'{{#constraintRampType}} value='{{constraintRampType}}'{{/constraintRampType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rampRateType'>rampRateType: </label><div class='col-sm-8'><input id='rampRateType' class='form-control' type='text'{{#rampRateType}} value='{{rampRateType}}'{{/rampRateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GeneratingBid'>GeneratingBid: </label><div class='col-sm-8'><input id='GeneratingBid' class='form-control' type='text'{{#GeneratingBid}} value='{{GeneratingBid}}'{{/GeneratingBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LoadBid'>LoadBid: </label><div class='col-sm-8'><input id='LoadBid' class='form-control' type='text'{{#LoadBid}} value='{{LoadBid}}'{{/LoadBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}_string'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='InterTieBid'>InterTieBid: </label><div class='col-sm-8'><input id='InterTieBid' class='form-control' type='text'{{#InterTieBid}} value='{{InterTieBid}}'{{/InterTieBid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["GeneratingBid", "GeneratingBid", "0..1", "0..*"],
                        ["LoadBid", "LoadBid", "0..1", "0..*"],
                        ["RegisteredResource", "RegisteredResource", "0..*", "0..*"],
                        ["InterTieBid", "InterTieBid", "0..1", "0..*"]
                    ]
                );
            }
        }

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
                base.export_attribute (obj, "export_attribute", "DispatchInstReply", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DispatchInstReply_collapse" aria-expanded="true" aria-controls="DispatchInstReply_collapse" style="margin-left: 10px;">DispatchInstReply</a></legend>
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DispatchInstReply_collapse" aria-expanded="true" aria-controls="DispatchInstReply_collapse" style="margin-left: 10px;">DispatchInstReply</a></legend>
                    <div id="DispatchInstReply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='acceptMW'>acceptMW: </label><div class='col-sm-8'><input id='acceptMW' class='form-control' type='text'{{#acceptMW}} value='{{acceptMW}}'{{/acceptMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='acceptStatus'>acceptStatus: </label><div class='col-sm-8'><input id='acceptStatus' class='form-control' type='text'{{#acceptStatus}} value='{{acceptStatus}}'{{/acceptStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='certificationName'>certificationName: </label><div class='col-sm-8'><input id='certificationName' class='form-control' type='text'{{#certificationName}} value='{{certificationName}}'{{/certificationName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clearedMW'>clearedMW: </label><div class='col-sm-8'><input id='clearedMW' class='form-control' type='text'{{#clearedMW}} value='{{clearedMW}}'{{/clearedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='instructionTime'>instructionTime: </label><div class='col-sm-8'><input id='instructionTime' class='form-control' type='text'{{#instructionTime}} value='{{instructionTime}}'{{/instructionTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='instructionType'>instructionType: </label><div class='col-sm-8'><input id='instructionType' class='form-control' type='text'{{#instructionType}} value='{{instructionType}}'{{/instructionType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='passIndicator'>passIndicator: </label><div class='col-sm-8'><input id='passIndicator' class='form-control' type='text'{{#passIndicator}} value='{{passIndicator}}'{{/passIndicator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='receivedTime'>receivedTime: </label><div class='col-sm-8'><input id='receivedTime' class='form-control' type='text'{{#receivedTime}} value='{{receivedTime}}'{{/receivedTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startTime'>startTime: </label><div class='col-sm-8'><input id='startTime' class='form-control' type='text'{{#startTime}} value='{{startTime}}'{{/startTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredResource", "RegisteredResource", "1", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:NotificationTimeCurve.GeneratingBids\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingBids", sub, context);
                var bucket = context.parsed.NotificationTimeCurve;
                if (null == bucket)
                   context.parsed.NotificationTimeCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attributes", "NotificationTimeCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NotificationTimeCurve_collapse" aria-expanded="true" aria-controls="NotificationTimeCurve_collapse" style="margin-left: 10px;">NotificationTimeCurve</a></legend>
                    <div id="NotificationTimeCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#GeneratingBids}}<div><b>GeneratingBids</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GeneratingBids}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.GeneratingBids) obj.GeneratingBids_string = obj.GeneratingBids.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.GeneratingBids_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NotificationTimeCurve_collapse" aria-expanded="true" aria-controls="NotificationTimeCurve_collapse" style="margin-left: 10px;">NotificationTimeCurve</a></legend>
                    <div id="NotificationTimeCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["GeneratingBids", "GeneratingBid", "0..*", "0..1"]
                    ]
                );
            }
        }

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
                base.export_attribute (obj, "export_attribute", "MarketScheduledEvent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketScheduledEvent_collapse" aria-expanded="true" aria-controls="MarketScheduledEvent_collapse" style="margin-left: 10px;">MarketScheduledEvent</a></legend>
                    <div id="MarketScheduledEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#category}}<div><b>category</b>: {{category}}</div>{{/category}}
                    {{#duration}}<div><b>duration</b>: {{duration}}</div>{{/duration}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#MajorChargeGroup}}<div><b>MajorChargeGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MajorChargeGroup}}&quot;);})'>{{MajorChargeGroup}}</a></div>{{/MajorChargeGroup}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketScheduledEvent_collapse" aria-expanded="true" aria-controls="MarketScheduledEvent_collapse" style="margin-left: 10px;">MarketScheduledEvent</a></legend>
                    <div id="MarketScheduledEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='category'>category: </label><div class='col-sm-8'><input id='category' class='form-control' type='text'{{#category}} value='{{category}}'{{/category}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='duration'>duration: </label><div class='col-sm-8'><input id='duration' class='form-control' type='text'{{#duration}} value='{{duration}}'{{/duration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MajorChargeGroup'>MajorChargeGroup: </label><div class='col-sm-8'><input id='MajorChargeGroup' class='form-control' type='text'{{#MajorChargeGroup}} value='{{MajorChargeGroup}}'{{/MajorChargeGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["MajorChargeGroup", "MajorChargeGroup", "0..1", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:BidPriceCurve.BidSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidSchedule", sub, context);
                var bucket = context.parsed.BidPriceCurve;
                if (null == bucket)
                   context.parsed.BidPriceCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attributes", "BidPriceCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidPriceCurve_collapse" aria-expanded="true" aria-controls="BidPriceCurve_collapse" style="margin-left: 10px;">BidPriceCurve</a></legend>
                    <div id="BidPriceCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#BidSchedule}}<div><b>BidSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BidSchedule}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.BidSchedule) obj.BidSchedule_string = obj.BidSchedule.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.BidSchedule_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidPriceCurve_collapse" aria-expanded="true" aria-controls="BidPriceCurve_collapse" style="margin-left: 10px;">BidPriceCurve</a></legend>
                    <div id="BidPriceCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["BidSchedule", "BidPriceSchedule", "0..*", "1"]
                    ]
                );
            }
        }

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

                base.export_attribute (obj, "export_attribute", "BidHourlySchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidHourlySchedule_collapse" aria-expanded="true" aria-controls="BidHourlySchedule_collapse" style="margin-left: 10px;">BidHourlySchedule</a></legend>
                    <div id="BidHourlySchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#Bid}}<div><b>Bid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Bid}}&quot;);})'>{{Bid}}</a></div>{{/Bid}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidHourlySchedule_collapse" aria-expanded="true" aria-controls="BidHourlySchedule_collapse" style="margin-left: 10px;">BidHourlySchedule</a></legend>
                    <div id="BidHourlySchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Bid'>Bid: </label><div class='col-sm-8'><input id='Bid' class='form-control' type='text'{{#Bid}} value='{{Bid}}'{{/Bid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Bid", "Bid", "1", "0..*"]
                    ]
                );
            }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PumpingLevelSchedule_collapse" aria-expanded="true" aria-controls="PumpingLevelSchedule_collapse" style="margin-left: 10px;">PumpingLevelSchedule</a></legend>
                    <div id="PumpingLevelSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BidHourlyProductSchedule.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PumpingLevelSchedule_collapse" aria-expanded="true" aria-controls="PumpingLevelSchedule_collapse" style="margin-left: 10px;">PumpingLevelSchedule</a></legend>
                    <div id="PumpingLevelSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BidHourlyProductSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PumpingCostSchedule_collapse" aria-expanded="true" aria-controls="PumpingCostSchedule_collapse" style="margin-left: 10px;">PumpingCostSchedule</a></legend>
                    <div id="PumpingCostSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BidHourlyProductSchedule.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PumpingCostSchedule_collapse" aria-expanded="true" aria-controls="PumpingCostSchedule_collapse" style="margin-left: 10px;">PumpingCostSchedule</a></legend>
                    <div id="PumpingCostSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BidHourlyProductSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PumpingShutDownCostSchedule_collapse" aria-expanded="true" aria-controls="PumpingShutDownCostSchedule_collapse" style="margin-left: 10px;">PumpingShutDownCostSchedule</a></legend>
                    <div id="PumpingShutDownCostSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BidHourlyProductSchedule.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PumpingShutDownCostSchedule_collapse" aria-expanded="true" aria-controls="PumpingShutDownCostSchedule_collapse" style="margin-left: 10px;">PumpingShutDownCostSchedule</a></legend>
                    <div id="PumpingShutDownCostSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BidHourlyProductSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

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
                base.parse_attributes (/<cim:ResourceBid.BidError\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidError", sub, context);
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
                base.export_attribute (obj, "export_attributes", "ResourceBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceBid_collapse" aria-expanded="true" aria-controls="ResourceBid_collapse" style="margin-left: 10px;">ResourceBid</a></legend>
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
                    {{#BidError}}<div><b>BidError</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BidError}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.BidError) obj.BidError_string = obj.BidError.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.BidError_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceBid_collapse" aria-expanded="true" aria-controls="ResourceBid_collapse" style="margin-left: 10px;">ResourceBid</a></legend>
                    <div id="ResourceBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Bid.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='aggregationFlag'>aggregationFlag: </label><div class='col-sm-8'><input id='aggregationFlag' class='form-control' type='text'{{#aggregationFlag}} value='{{aggregationFlag}}'{{/aggregationFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bidStatus'>bidStatus: </label><div class='col-sm-8'><input id='bidStatus' class='form-control' type='text'{{#bidStatus}} value='{{bidStatus}}'{{/bidStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='commodityType'>commodityType: </label><div class='col-sm-8'><input id='commodityType' class='form-control' type='text'{{#commodityType}} value='{{commodityType}}'{{/commodityType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contingencyAvailFlag'>contingencyAvailFlag: </label><div class='col-sm-8'><input id='contingencyAvailFlag' class='form-control' type='text'{{#contingencyAvailFlag}} value='{{contingencyAvailFlag}}'{{/contingencyAvailFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='createdISO'>createdISO: </label><div class='col-sm-8'><input id='createdISO' class='form-control' type='text'{{#createdISO}} value='{{createdISO}}'{{/createdISO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyMaxDay'>energyMaxDay: </label><div class='col-sm-8'><input id='energyMaxDay' class='form-control' type='text'{{#energyMaxDay}} value='{{energyMaxDay}}'{{/energyMaxDay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyMinDay'>energyMinDay: </label><div class='col-sm-8'><input id='energyMinDay' class='form-control' type='text'{{#energyMinDay}} value='{{energyMinDay}}'{{/energyMinDay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marketSepFlag'>marketSepFlag: </label><div class='col-sm-8'><input id='marketSepFlag' class='form-control' type='text'{{#marketSepFlag}} value='{{marketSepFlag}}'{{/marketSepFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minDispatchTime'>minDispatchTime: </label><div class='col-sm-8'><input id='minDispatchTime' class='form-control' type='text'{{#minDispatchTime}} value='{{minDispatchTime}}'{{/minDispatchTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='resourceLoadingType'>resourceLoadingType: </label><div class='col-sm-8'><input id='resourceLoadingType' class='form-control' type='text'{{#resourceLoadingType}} value='{{resourceLoadingType}}'{{/resourceLoadingType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shutDownsMaxDay'>shutDownsMaxDay: </label><div class='col-sm-8'><input id='shutDownsMaxDay' class='form-control' type='text'{{#shutDownsMaxDay}} value='{{shutDownsMaxDay}}'{{/shutDownsMaxDay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shutDownsMaxWeek'>shutDownsMaxWeek: </label><div class='col-sm-8'><input id='shutDownsMaxWeek' class='form-control' type='text'{{#shutDownsMaxWeek}} value='{{shutDownsMaxWeek}}'{{/shutDownsMaxWeek}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startUpsMaxDay'>startUpsMaxDay: </label><div class='col-sm-8'><input id='startUpsMaxDay' class='form-control' type='text'{{#startUpsMaxDay}} value='{{startUpsMaxDay}}'{{/startUpsMaxDay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startUpsMaxWeek'>startUpsMaxWeek: </label><div class='col-sm-8'><input id='startUpsMaxWeek' class='form-control' type='text'{{#startUpsMaxWeek}} value='{{startUpsMaxWeek}}'{{/startUpsMaxWeek}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='virtual'>virtual: </label><div class='col-sm-8'><input id='virtual' class='form-check-input' type='checkbox'{{#virtual}} checked{{/virtual}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BidError'>BidError: </label><div class='col-sm-8'><input id='BidError' class='form-control' type='text'{{#BidError}} value='{{BidError}}_string'{{/BidError}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["BidError", "BidError", "0..*", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:InterTieBid.RampRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RampRateCurve", sub, context);
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
                base.export_attribute (obj, "export_attribute", "InterTieBid", fields);
                base.export_attribute (obj, "export_attributes", "InterTieBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InterTieBid_collapse" aria-expanded="true" aria-controls="InterTieBid_collapse" style="margin-left: 10px;">InterTieBid</a></legend>
                    <div id="InterTieBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ResourceBid.prototype.template.call (this) +
                    `
                    {{#minHourlyBlock }}<div><b>minHourlyBlock </b>: {{minHourlyBlock }}</div>{{/minHourlyBlock }}
                    {{#RegisteredInterTie}}<div><b>RegisteredInterTie</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredInterTie}}&quot;);})'>{{RegisteredInterTie}}</a></div>{{/RegisteredInterTie}}
                    {{#RampRateCurve}}<div><b>RampRateCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RampRateCurve}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.RampRateCurve) obj.RampRateCurve_string = obj.RampRateCurve.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RampRateCurve_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InterTieBid_collapse" aria-expanded="true" aria-controls="InterTieBid_collapse" style="margin-left: 10px;">InterTieBid</a></legend>
                    <div id="InterTieBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ResourceBid.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minHourlyBlock '>minHourlyBlock : </label><div class='col-sm-8'><input id='minHourlyBlock ' class='form-control' type='text'{{#minHourlyBlock }} value='{{minHourlyBlock }}'{{/minHourlyBlock }}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredInterTie'>RegisteredInterTie: </label><div class='col-sm-8'><input id='RegisteredInterTie' class='form-control' type='text'{{#RegisteredInterTie}} value='{{RegisteredInterTie}}'{{/RegisteredInterTie}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredInterTie", "RegisteredInterTie", "0..1", "0..1"],
                        ["RampRateCurve", "RampRateCurve", "0..*", "0..1"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:TransactionBid.EnergyProfiles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyProfiles", sub, context);
                base.parse_attribute (/<cim:TransactionBid.Receipt_Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Receipt_Pnode", sub, context);
                base.parse_attribute (/<cim:TransactionBid.Delivery_Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Delivery_Pnode", sub, context);
                base.parse_attribute (/<cim:TransactionBid.TransmissionReservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionReservation", sub, context);
                base.parse_attributes (/<cim:TransactionBid.TransactionBidResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransactionBidResults", sub, context);
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
                base.export_attribute (obj, "export_attributes", "TransactionBid", fields);
                base.export_attribute (obj, "export_attribute", "TransactionBid", fields);
                base.export_attribute (obj, "export_attribute", "TransactionBid", fields);
                base.export_attribute (obj, "export_attribute", "TransactionBid", fields);
                base.export_attribute (obj, "export_attributes", "TransactionBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransactionBid_collapse" aria-expanded="true" aria-controls="TransactionBid_collapse" style="margin-left: 10px;">TransactionBid</a></legend>
                    <div id="TransactionBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Bid.prototype.template.call (this) +
                    `
                    {{#demandTransaction}}<div><b>demandTransaction</b>: {{demandTransaction}}</div>{{/demandTransaction}}
                    {{#dispatchable}}<div><b>dispatchable</b>: {{dispatchable}}</div>{{/dispatchable}}
                    {{#payCongestion}}<div><b>payCongestion</b>: {{payCongestion}}</div>{{/payCongestion}}
                    {{#EnergyProfiles}}<div><b>EnergyProfiles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EnergyProfiles}}
                    {{#Receipt_Pnode}}<div><b>Receipt_Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Receipt_Pnode}}&quot;);})'>{{Receipt_Pnode}}</a></div>{{/Receipt_Pnode}}
                    {{#Delivery_Pnode}}<div><b>Delivery_Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Delivery_Pnode}}&quot;);})'>{{Delivery_Pnode}}</a></div>{{/Delivery_Pnode}}
                    {{#TransmissionReservation}}<div><b>TransmissionReservation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionReservation}}&quot;);})'>{{TransmissionReservation}}</a></div>{{/TransmissionReservation}}
                    {{#TransactionBidResults}}<div><b>TransactionBidResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TransactionBidResults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EnergyProfiles) obj.EnergyProfiles_string = obj.EnergyProfiles.join ();
                if (obj.TransactionBidResults) obj.TransactionBidResults_string = obj.TransactionBidResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EnergyProfiles_string;
                delete obj.TransactionBidResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransactionBid_collapse" aria-expanded="true" aria-controls="TransactionBid_collapse" style="margin-left: 10px;">TransactionBid</a></legend>
                    <div id="TransactionBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Bid.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='demandTransaction'>demandTransaction: </label><div class='col-sm-8'><input id='demandTransaction' class='form-check-input' type='checkbox'{{#demandTransaction}} checked{{/demandTransaction}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='dispatchable'>dispatchable: </label><div class='col-sm-8'><input id='dispatchable' class='form-check-input' type='checkbox'{{#dispatchable}} checked{{/dispatchable}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='payCongestion'>payCongestion: </label><div class='col-sm-8'><input id='payCongestion' class='form-check-input' type='checkbox'{{#payCongestion}} checked{{/payCongestion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Receipt_Pnode'>Receipt_Pnode: </label><div class='col-sm-8'><input id='Receipt_Pnode' class='form-control' type='text'{{#Receipt_Pnode}} value='{{Receipt_Pnode}}'{{/Receipt_Pnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Delivery_Pnode'>Delivery_Pnode: </label><div class='col-sm-8'><input id='Delivery_Pnode' class='form-control' type='text'{{#Delivery_Pnode}} value='{{Delivery_Pnode}}'{{/Delivery_Pnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransmissionReservation'>TransmissionReservation: </label><div class='col-sm-8'><input id='TransmissionReservation' class='form-control' type='text'{{#TransmissionReservation}} value='{{TransmissionReservation}}'{{/TransmissionReservation}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["EnergyProfiles", "EnergyProfile", "1..*", "1"],
                        ["Receipt_Pnode", "Pnode", "0..1", "0..*"],
                        ["Delivery_Pnode", "Pnode", "0..1", "0..*"],
                        ["TransmissionReservation", "TransmissionReservation", "0..1", "0..1"],
                        ["TransactionBidResults", "TransactionBidResults", "0..*", "0..1"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:AreaLoadBid.LoadBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadBid", sub, context);
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
                base.export_attribute (obj, "export_attributes", "AreaLoadBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AreaLoadBid_collapse" aria-expanded="true" aria-controls="AreaLoadBid_collapse" style="margin-left: 10px;">AreaLoadBid</a></legend>
                    <div id="AreaLoadBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Bid.prototype.template.call (this) +
                    `
                    {{#demandBidMW}}<div><b>demandBidMW</b>: {{demandBidMW}}</div>{{/demandBidMW}}
                    {{#LoadBid}}<div><b>LoadBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LoadBid}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.LoadBid) obj.LoadBid_string = obj.LoadBid.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.LoadBid_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AreaLoadBid_collapse" aria-expanded="true" aria-controls="AreaLoadBid_collapse" style="margin-left: 10px;">AreaLoadBid</a></legend>
                    <div id="AreaLoadBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Bid.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='demandBidMW'>demandBidMW: </label><div class='col-sm-8'><input id='demandBidMW' class='form-control' type='text'{{#demandBidMW}} value='{{demandBidMW}}'{{/demandBidMW}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["LoadBid", "LoadBid", "0..*", "0..1"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:LoadBid.RampRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RampRateCurve", sub, context);
                base.parse_attributes (/<cim:LoadBid.LoadReductionPriceCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadReductionPriceCurve", sub, context);
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
                base.export_attribute (obj, "export_attributes", "LoadBid", fields);
                base.export_attribute (obj, "export_attributes", "LoadBid", fields);
                base.export_attribute (obj, "export_attribute", "LoadBid", fields);
                base.export_attribute (obj, "export_attribute", "LoadBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadBid_collapse" aria-expanded="true" aria-controls="LoadBid_collapse" style="margin-left: 10px;">LoadBid</a></legend>
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
                    {{#RampRateCurve}}<div><b>RampRateCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RampRateCurve}}
                    {{#LoadReductionPriceCurve}}<div><b>LoadReductionPriceCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LoadReductionPriceCurve}}
                    {{#AreaLoadBid}}<div><b>AreaLoadBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AreaLoadBid}}&quot;);})'>{{AreaLoadBid}}</a></div>{{/AreaLoadBid}}
                    {{#RegisteredLoad}}<div><b>RegisteredLoad</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredLoad}}&quot;);})'>{{RegisteredLoad}}</a></div>{{/RegisteredLoad}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.RampRateCurve) obj.RampRateCurve_string = obj.RampRateCurve.join ();
                if (obj.LoadReductionPriceCurve) obj.LoadReductionPriceCurve_string = obj.LoadReductionPriceCurve.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RampRateCurve_string;
                delete obj.LoadReductionPriceCurve_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadBid_collapse" aria-expanded="true" aria-controls="LoadBid_collapse" style="margin-left: 10px;">LoadBid</a></legend>
                    <div id="LoadBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ResourceBid.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dropRampRate'>dropRampRate: </label><div class='col-sm-8'><input id='dropRampRate' class='form-control' type='text'{{#dropRampRate}} value='{{dropRampRate}}'{{/dropRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadRedInitiationCost'>loadRedInitiationCost: </label><div class='col-sm-8'><input id='loadRedInitiationCost' class='form-control' type='text'{{#loadRedInitiationCost}} value='{{loadRedInitiationCost}}'{{/loadRedInitiationCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadRedInitiationTime'>loadRedInitiationTime: </label><div class='col-sm-8'><input id='loadRedInitiationTime' class='form-control' type='text'{{#loadRedInitiationTime}} value='{{loadRedInitiationTime}}'{{/loadRedInitiationTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marketDate'>marketDate: </label><div class='col-sm-8'><input id='marketDate' class='form-control' type='text'{{#marketDate}} value='{{marketDate}}'{{/marketDate}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='meteredValue'>meteredValue: </label><div class='col-sm-8'><input id='meteredValue' class='form-check-input' type='checkbox'{{#meteredValue}} checked{{/meteredValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minLoad'>minLoad: </label><div class='col-sm-8'><input id='minLoad' class='form-control' type='text'{{#minLoad}} value='{{minLoad}}'{{/minLoad}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minLoadReduction'>minLoadReduction: </label><div class='col-sm-8'><input id='minLoadReduction' class='form-control' type='text'{{#minLoadReduction}} value='{{minLoadReduction}}'{{/minLoadReduction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minLoadReductionCost'>minLoadReductionCost: </label><div class='col-sm-8'><input id='minLoadReductionCost' class='form-control' type='text'{{#minLoadReductionCost}} value='{{minLoadReductionCost}}'{{/minLoadReductionCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minLoadReductionInterval'>minLoadReductionInterval: </label><div class='col-sm-8'><input id='minLoadReductionInterval' class='form-control' type='text'{{#minLoadReductionInterval}} value='{{minLoadReductionInterval}}'{{/minLoadReductionInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minTimeBetLoadRed'>minTimeBetLoadRed: </label><div class='col-sm-8'><input id='minTimeBetLoadRed' class='form-control' type='text'{{#minTimeBetLoadRed}} value='{{minTimeBetLoadRed}}'{{/minTimeBetLoadRed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pickUpRampRate'>pickUpRampRate: </label><div class='col-sm-8'><input id='pickUpRampRate' class='form-control' type='text'{{#pickUpRampRate}} value='{{pickUpRampRate}}'{{/pickUpRampRate}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='priceSetting'>priceSetting: </label><div class='col-sm-8'><input id='priceSetting' class='form-check-input' type='checkbox'{{#priceSetting}} checked{{/priceSetting}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reqNoticeTime'>reqNoticeTime: </label><div class='col-sm-8'><input id='reqNoticeTime' class='form-control' type='text'{{#reqNoticeTime}} value='{{reqNoticeTime}}'{{/reqNoticeTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shutdownCost'>shutdownCost: </label><div class='col-sm-8'><input id='shutdownCost' class='form-control' type='text'{{#shutdownCost}} value='{{shutdownCost}}'{{/shutdownCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AreaLoadBid'>AreaLoadBid: </label><div class='col-sm-8'><input id='AreaLoadBid' class='form-control' type='text'{{#AreaLoadBid}} value='{{AreaLoadBid}}'{{/AreaLoadBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredLoad'>RegisteredLoad: </label><div class='col-sm-8'><input id='RegisteredLoad' class='form-control' type='text'{{#RegisteredLoad}} value='{{RegisteredLoad}}'{{/RegisteredLoad}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["RampRateCurve", "RampRateCurve", "0..*", "0..1"],
                        ["LoadReductionPriceCurve", "LoadReductionPriceCurve", "0..*", "1"],
                        ["AreaLoadBid", "AreaLoadBid", "0..1", "0..*"],
                        ["RegisteredLoad", "RegisteredLoad", "0..1", "0..*"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:GeneratingBid.RampRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RampRateCurve", sub, context);
                base.parse_attribute (/<cim:GeneratingBid.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                base.parse_attributes (/<cim:GeneratingBid.SecurityConstraints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraints", sub, context);
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
                base.export_attribute (obj, "export_attribute", "GeneratingBid", fields);
                base.export_attribute (obj, "export_attribute", "GeneratingBid", fields);
                base.export_attribute (obj, "export_attributes", "GeneratingBid", fields);
                base.export_attribute (obj, "export_attribute", "GeneratingBid", fields);
                base.export_attribute (obj, "export_attributes", "GeneratingBid", fields);
                base.export_attribute (obj, "export_attribute", "GeneratingBid", fields);
                base.export_attribute (obj, "export_attribute", "GeneratingBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeneratingBid_collapse" aria-expanded="true" aria-controls="GeneratingBid_collapse" style="margin-left: 10px;">GeneratingBid</a></legend>
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
                    {{#RampRateCurve}}<div><b>RampRateCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RampRateCurve}}
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
                    {{#SecurityConstraints}}<div><b>SecurityConstraints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SecurityConstraints}}
                    {{#StartUpTimeCurve}}<div><b>StartUpTimeCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartUpTimeCurve}}&quot;);})'>{{StartUpTimeCurve}}</a></div>{{/StartUpTimeCurve}}
                    {{#BidSet}}<div><b>BidSet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BidSet}}&quot;);})'>{{BidSet}}</a></div>{{/BidSet}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.RampRateCurve) obj.RampRateCurve_string = obj.RampRateCurve.join ();
                if (obj.SecurityConstraints) obj.SecurityConstraints_string = obj.SecurityConstraints.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RampRateCurve_string;
                delete obj.SecurityConstraints_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeneratingBid_collapse" aria-expanded="true" aria-controls="GeneratingBid_collapse" style="margin-left: 10px;">GeneratingBid</a></legend>
                    <div id="GeneratingBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ResourceBid.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='combinedCycleUnitOffer'>combinedCycleUnitOffer: </label><div class='col-sm-8'><input id='combinedCycleUnitOffer' class='form-control' type='text'{{#combinedCycleUnitOffer}} value='{{combinedCycleUnitOffer}}'{{/combinedCycleUnitOffer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='downTimeMax'>downTimeMax: </label><div class='col-sm-8'><input id='downTimeMax' class='form-control' type='text'{{#downTimeMax}} value='{{downTimeMax}}'{{/downTimeMax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='installedCapacity'>installedCapacity: </label><div class='col-sm-8'><input id='installedCapacity' class='form-control' type='text'{{#installedCapacity}} value='{{installedCapacity}}'{{/installedCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowerRampRate'>lowerRampRate: </label><div class='col-sm-8'><input id='lowerRampRate' class='form-control' type='text'{{#lowerRampRate}} value='{{lowerRampRate}}'{{/lowerRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxEmergencyMW'>maxEmergencyMW: </label><div class='col-sm-8'><input id='maxEmergencyMW' class='form-control' type='text'{{#maxEmergencyMW}} value='{{maxEmergencyMW}}'{{/maxEmergencyMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maximumEconomicMW'>maximumEconomicMW: </label><div class='col-sm-8'><input id='maximumEconomicMW' class='form-control' type='text'{{#maximumEconomicMW}} value='{{maximumEconomicMW}}'{{/maximumEconomicMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minEmergencyMW'>minEmergencyMW: </label><div class='col-sm-8'><input id='minEmergencyMW' class='form-control' type='text'{{#minEmergencyMW}} value='{{minEmergencyMW}}'{{/minEmergencyMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumEconomicMW'>minimumEconomicMW: </label><div class='col-sm-8'><input id='minimumEconomicMW' class='form-control' type='text'{{#minimumEconomicMW}} value='{{minimumEconomicMW}}'{{/minimumEconomicMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='noLoadCost'>noLoadCost: </label><div class='col-sm-8'><input id='noLoadCost' class='form-control' type='text'{{#noLoadCost}} value='{{noLoadCost}}'{{/noLoadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='notificationTime'>notificationTime: </label><div class='col-sm-8'><input id='notificationTime' class='form-control' type='text'{{#notificationTime}} value='{{notificationTime}}'{{/notificationTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='operatingMode'>operatingMode: </label><div class='col-sm-8'><input id='operatingMode' class='form-control' type='text'{{#operatingMode}} value='{{operatingMode}}'{{/operatingMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='raiseRampRate'>raiseRampRate: </label><div class='col-sm-8'><input id='raiseRampRate' class='form-control' type='text'{{#raiseRampRate}} value='{{raiseRampRate}}'{{/raiseRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rampCurveType'>rampCurveType: </label><div class='col-sm-8'><input id='rampCurveType' class='form-control' type='text'{{#rampCurveType}} value='{{rampCurveType}}'{{/rampCurveType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startupCost'>startupCost: </label><div class='col-sm-8'><input id='startupCost' class='form-control' type='text'{{#startupCost}} value='{{startupCost}}'{{/startupCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startUpRampRate'>startUpRampRate: </label><div class='col-sm-8'><input id='startUpRampRate' class='form-control' type='text'{{#startUpRampRate}} value='{{startUpRampRate}}'{{/startUpRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startUpType'>startUpType: </label><div class='col-sm-8'><input id='startUpType' class='form-control' type='text'{{#startUpType}} value='{{startUpType}}'{{/startUpType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='upTimeMax'>upTimeMax: </label><div class='col-sm-8'><input id='upTimeMax' class='form-control' type='text'{{#upTimeMax}} value='{{upTimeMax}}'{{/upTimeMax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='NotificationTimeCurve'>NotificationTimeCurve: </label><div class='col-sm-8'><input id='NotificationTimeCurve' class='form-control' type='text'{{#NotificationTimeCurve}} value='{{NotificationTimeCurve}}'{{/NotificationTimeCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StartUpCostCurve'>StartUpCostCurve: </label><div class='col-sm-8'><input id='StartUpCostCurve' class='form-control' type='text'{{#StartUpCostCurve}} value='{{StartUpCostCurve}}'{{/StartUpCostCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StartUpTimeCurve'>StartUpTimeCurve: </label><div class='col-sm-8'><input id='StartUpTimeCurve' class='form-control' type='text'{{#StartUpTimeCurve}} value='{{StartUpTimeCurve}}'{{/StartUpTimeCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BidSet'>BidSet: </label><div class='col-sm-8'><input id='BidSet' class='form-control' type='text'{{#BidSet}} value='{{BidSet}}'{{/BidSet}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["NotificationTimeCurve", "NotificationTimeCurve", "0..1", "0..*"],
                        ["StartUpCostCurve", "StartUpCostCurve", "0..1", "0..*"],
                        ["RampRateCurve", "RampRateCurve", "0..*", "0..1"],
                        ["RegisteredGenerator", "RegisteredGenerator", "0..1", "0..*"],
                        ["SecurityConstraints", "SecurityConstraints", "0..*", "0..1"],
                        ["StartUpTimeCurve", "StartUpTimeCurve", "0..1", "0..*"],
                        ["BidSet", "BidSet", "0..1", "1..*"]
                    ]
                );
            }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OpenTieSchedule_collapse" aria-expanded="true" aria-controls="OpenTieSchedule_collapse" style="margin-left: 10px;">OpenTieSchedule</a></legend>
                    <div id="OpenTieSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BidHourlySchedule.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OpenTieSchedule_collapse" aria-expanded="true" aria-controls="OpenTieSchedule_collapse" style="margin-left: 10px;">OpenTieSchedule</a></legend>
                    <div id="OpenTieSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BidHourlySchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-check-input' type='checkbox'{{#value}} checked{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HourlyPreDispatchSchedule_collapse" aria-expanded="true" aria-controls="HourlyPreDispatchSchedule_collapse" style="margin-left: 10px;">HourlyPreDispatchSchedule</a></legend>
                    <div id="HourlyPreDispatchSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BidHourlySchedule.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HourlyPreDispatchSchedule_collapse" aria-expanded="true" aria-controls="HourlyPreDispatchSchedule_collapse" style="margin-left: 10px;">HourlyPreDispatchSchedule</a></legend>
                    <div id="HourlyPreDispatchSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BidHourlySchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-check-input' type='checkbox'{{#value}} checked{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

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