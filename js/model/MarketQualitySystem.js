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
        class AuxiliaryCost extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AuxiliaryCost;
                if (null == bucket)
                   cim_data.AuxiliaryCost = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AuxiliaryCost[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AuxiliaryCost";
                base.parse_element (/<cim:AuxiliaryCost.intervalStartTime>([\s\S]*?)<\/cim:AuxiliaryCost.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:AuxiliaryCost.marketType>([\s\S]*?)<\/cim:AuxiliaryCost.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_element (/<cim:AuxiliaryCost.updateTimeStamp>([\s\S]*?)<\/cim:AuxiliaryCost.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:AuxiliaryCost.updateUser>([\s\S]*?)<\/cim:AuxiliaryCost.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_attributes (/<cim:AuxiliaryCost.AuxillaryValues\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AuxillaryValues", sub, context);
                var bucket = context.parsed.AuxiliaryCost;
                if (null == bucket)
                   context.parsed.AuxiliaryCost = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AuxiliaryCost", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_element (obj, "AuxiliaryCost", "marketType", "marketType",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryCost", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "AuxiliaryCost", "updateUser", "updateUser",  base.from_string, fields);
                base.export_attributes (obj, "AuxiliaryCost", "AuxillaryValues", "AuxillaryValues", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AuxiliaryCost_collapse" aria-expanded="true" aria-controls="AuxiliaryCost_collapse" style="margin-left: 10px;">AuxiliaryCost</a></legend>
                    <div id="AuxiliaryCost_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#AuxillaryValues}}<div><b>AuxillaryValues</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AuxillaryValues}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.AuxillaryValues) obj.AuxillaryValues_string = obj.AuxillaryValues.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AuxillaryValues_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_AuxiliaryCost_collapse" aria-expanded="true" aria-controls="{{id}}_AuxiliaryCost_collapse" style="margin-left: 10px;">AuxiliaryCost</a></legend>
                    <div id="{{id}}_AuxiliaryCost_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='{{id}}_intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketType'>marketType: </label><div class='col-sm-8'><input id='{{id}}_marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='{{id}}_updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updateUser'>updateUser: </label><div class='col-sm-8'><input id='{{id}}_updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AuxiliaryCost" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;
                temp = document.getElementById (id + "_marketType").value; if ("" != temp) obj.marketType = temp;
                temp = document.getElementById (id + "_updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;
                temp = document.getElementById (id + "_updateUser").value; if ("" != temp) obj.updateUser = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AuxillaryValues", "AuxiliaryValues", "1..*", "1"]
                    ]
                );
            }
        }

        /**
         * Model Expected Energy  from Market Clearing
         *
         */
        class ExpectedEnergyValues extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExpectedEnergyValues;
                if (null == bucket)
                   cim_data.ExpectedEnergyValues = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExpectedEnergyValues[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ExpectedEnergyValues";
                base.parse_element (/<cim:ExpectedEnergyValues.energyTypeCode>([\s\S]*?)<\/cim:ExpectedEnergyValues.energyTypeCode>/g, obj, "energyTypeCode", base.to_string, sub, context);
                base.parse_element (/<cim:ExpectedEnergyValues.expectedMwh>([\s\S]*?)<\/cim:ExpectedEnergyValues.expectedMwh>/g, obj, "expectedMwh", base.to_float, sub, context);
                base.parse_attribute (/<cim:ExpectedEnergyValues.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:ExpectedEnergyValues.ExpectedEnergy\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExpectedEnergy", sub, context);
                var bucket = context.parsed.ExpectedEnergyValues;
                if (null == bucket)
                   context.parsed.ExpectedEnergyValues = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ExpectedEnergyValues", "energyTypeCode", "energyTypeCode",  base.from_string, fields);
                base.export_element (obj, "ExpectedEnergyValues", "expectedMwh", "expectedMwh",  base.from_float, fields);
                base.export_attribute (obj, "ExpectedEnergyValues", "RegisteredResource", "RegisteredResource", fields);
                base.export_attribute (obj, "ExpectedEnergyValues", "ExpectedEnergy", "ExpectedEnergy", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExpectedEnergyValues_collapse" aria-expanded="true" aria-controls="ExpectedEnergyValues_collapse" style="margin-left: 10px;">ExpectedEnergyValues</a></legend>
                    <div id="ExpectedEnergyValues_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#energyTypeCode}}<div><b>energyTypeCode</b>: {{energyTypeCode}}</div>{{/energyTypeCode}}
                    {{#expectedMwh}}<div><b>expectedMwh</b>: {{expectedMwh}}</div>{{/expectedMwh}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#ExpectedEnergy}}<div><b>ExpectedEnergy</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExpectedEnergy}}&quot;);})'>{{ExpectedEnergy}}</a></div>{{/ExpectedEnergy}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ExpectedEnergyValues_collapse" aria-expanded="true" aria-controls="{{id}}_ExpectedEnergyValues_collapse" style="margin-left: 10px;">ExpectedEnergyValues</a></legend>
                    <div id="{{id}}_ExpectedEnergyValues_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyTypeCode'>energyTypeCode: </label><div class='col-sm-8'><input id='{{id}}_energyTypeCode' class='form-control' type='text'{{#energyTypeCode}} value='{{energyTypeCode}}'{{/energyTypeCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_expectedMwh'>expectedMwh: </label><div class='col-sm-8'><input id='{{id}}_expectedMwh' class='form-control' type='text'{{#expectedMwh}} value='{{expectedMwh}}'{{/expectedMwh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ExpectedEnergy'>ExpectedEnergy: </label><div class='col-sm-8'><input id='{{id}}_ExpectedEnergy' class='form-control' type='text'{{#ExpectedEnergy}} value='{{ExpectedEnergy}}'{{/ExpectedEnergy}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExpectedEnergyValues" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_energyTypeCode").value; if ("" != temp) obj.energyTypeCode = temp;
                temp = document.getElementById (id + "_expectedMwh").value; if ("" != temp) obj.expectedMwh = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;
                temp = document.getElementById (id + "_ExpectedEnergy").value; if ("" != temp) obj.ExpectedEnergy = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredResource", "RegisteredResource", "0..1", "0..*"],
                        ["ExpectedEnergy", "ExpectedEnergy", "1", "1..*"]
                    ]
                );
            }
        }

        /**
         * Models Auxillary Values
         *
         */
        class AuxiliaryObject extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AuxiliaryObject;
                if (null == bucket)
                   cim_data.AuxiliaryObject = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AuxiliaryObject[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AuxiliaryObject";
                base.parse_attribute (/<cim:AuxiliaryObject.RegisteredLoad\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredLoad", sub, context);
                base.parse_attribute (/<cim:AuxiliaryObject.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                var bucket = context.parsed.AuxiliaryObject;
                if (null == bucket)
                   context.parsed.AuxiliaryObject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "AuxiliaryObject", "RegisteredLoad", "RegisteredLoad", fields);
                base.export_attribute (obj, "AuxiliaryObject", "RegisteredGenerator", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AuxiliaryObject_collapse" aria-expanded="true" aria-controls="AuxiliaryObject_collapse" style="margin-left: 10px;">AuxiliaryObject</a></legend>
                    <div id="AuxiliaryObject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#RegisteredLoad}}<div><b>RegisteredLoad</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredLoad}}&quot;);})'>{{RegisteredLoad}}</a></div>{{/RegisteredLoad}}
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_AuxiliaryObject_collapse" aria-expanded="true" aria-controls="{{id}}_AuxiliaryObject_collapse" style="margin-left: 10px;">AuxiliaryObject</a></legend>
                    <div id="{{id}}_AuxiliaryObject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredLoad'>RegisteredLoad: </label><div class='col-sm-8'><input id='{{id}}_RegisteredLoad' class='form-control' type='text'{{#RegisteredLoad}} value='{{RegisteredLoad}}'{{/RegisteredLoad}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='{{id}}_RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AuxiliaryObject" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegisteredLoad").value; if ("" != temp) obj.RegisteredLoad = temp;
                temp = document.getElementById (id + "_RegisteredGenerator").value; if ("" != temp) obj.RegisteredGenerator = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredLoad", "RegisteredLoad", "0..1", "0..*"],
                        ["RegisteredGenerator", "RegisteredGenerator", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Models prices at Trading Hubs
         *
         */
        class TradingHubValues extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TradingHubValues;
                if (null == bucket)
                   cim_data.TradingHubValues = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TradingHubValues[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TradingHubValues";
                base.parse_element (/<cim:TradingHubValues.price>([\s\S]*?)<\/cim:TradingHubValues.price>/g, obj, "price", base.to_float, sub, context);
                base.parse_attribute (/<cim:TradingHubValues.TradingHubPrice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TradingHubPrice", sub, context);
                base.parse_attribute (/<cim:TradingHubValues.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);
                var bucket = context.parsed.TradingHubValues;
                if (null == bucket)
                   context.parsed.TradingHubValues = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TradingHubValues", "price", "price",  base.from_float, fields);
                base.export_attribute (obj, "TradingHubValues", "TradingHubPrice", "TradingHubPrice", fields);
                base.export_attribute (obj, "TradingHubValues", "AggregatedPnode", "AggregatedPnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TradingHubValues_collapse" aria-expanded="true" aria-controls="TradingHubValues_collapse" style="margin-left: 10px;">TradingHubValues</a></legend>
                    <div id="TradingHubValues_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#price}}<div><b>price</b>: {{price}}</div>{{/price}}
                    {{#TradingHubPrice}}<div><b>TradingHubPrice</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TradingHubPrice}}&quot;);})'>{{TradingHubPrice}}</a></div>{{/TradingHubPrice}}
                    {{#AggregatedPnode}}<div><b>AggregatedPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AggregatedPnode}}&quot;);})'>{{AggregatedPnode}}</a></div>{{/AggregatedPnode}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_TradingHubValues_collapse" aria-expanded="true" aria-controls="{{id}}_TradingHubValues_collapse" style="margin-left: 10px;">TradingHubValues</a></legend>
                    <div id="{{id}}_TradingHubValues_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_price'>price: </label><div class='col-sm-8'><input id='{{id}}_price' class='form-control' type='text'{{#price}} value='{{price}}'{{/price}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TradingHubPrice'>TradingHubPrice: </label><div class='col-sm-8'><input id='{{id}}_TradingHubPrice' class='form-control' type='text'{{#TradingHubPrice}} value='{{TradingHubPrice}}'{{/TradingHubPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregatedPnode'>AggregatedPnode: </label><div class='col-sm-8'><input id='{{id}}_AggregatedPnode' class='form-control' type='text'{{#AggregatedPnode}} value='{{AggregatedPnode}}'{{/AggregatedPnode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TradingHubValues" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_price").value; if ("" != temp) obj.price = temp;
                temp = document.getElementById (id + "_TradingHubPrice").value; if ("" != temp) obj.TradingHubPrice = temp;
                temp = document.getElementById (id + "_AggregatedPnode").value; if ("" != temp) obj.AggregatedPnode = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TradingHubPrice", "TradingHubPrice", "1", "1..*"],
                        ["AggregatedPnode", "AggregatedPnode", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Models prices at Trading Hubs, interval based
         *
         */
        class TradingHubPrice extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TradingHubPrice;
                if (null == bucket)
                   cim_data.TradingHubPrice = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TradingHubPrice[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TradingHubPrice";
                base.parse_element (/<cim:TradingHubPrice.intervalStartTime>([\s\S]*?)<\/cim:TradingHubPrice.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:TradingHubPrice.marketType>([\s\S]*?)<\/cim:TradingHubPrice.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_element (/<cim:TradingHubPrice.updateUser>([\s\S]*?)<\/cim:TradingHubPrice.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:TradingHubPrice.updateTimeStamp>([\s\S]*?)<\/cim:TradingHubPrice.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:TradingHubPrice.TradingHubValues\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TradingHubValues", sub, context);
                var bucket = context.parsed.TradingHubPrice;
                if (null == bucket)
                   context.parsed.TradingHubPrice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TradingHubPrice", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_element (obj, "TradingHubPrice", "marketType", "marketType",  base.from_string, fields);
                base.export_element (obj, "TradingHubPrice", "updateUser", "updateUser",  base.from_string, fields);
                base.export_element (obj, "TradingHubPrice", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_attributes (obj, "TradingHubPrice", "TradingHubValues", "TradingHubValues", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TradingHubPrice_collapse" aria-expanded="true" aria-controls="TradingHubPrice_collapse" style="margin-left: 10px;">TradingHubPrice</a></legend>
                    <div id="TradingHubPrice_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#TradingHubValues}}<div><b>TradingHubValues</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TradingHubValues}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TradingHubValues) obj.TradingHubValues_string = obj.TradingHubValues.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TradingHubValues_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_TradingHubPrice_collapse" aria-expanded="true" aria-controls="{{id}}_TradingHubPrice_collapse" style="margin-left: 10px;">TradingHubPrice</a></legend>
                    <div id="{{id}}_TradingHubPrice_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='{{id}}_intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketType'>marketType: </label><div class='col-sm-8'><input id='{{id}}_marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updateUser'>updateUser: </label><div class='col-sm-8'><input id='{{id}}_updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='{{id}}_updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TradingHubPrice" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;
                temp = document.getElementById (id + "_marketType").value; if ("" != temp) obj.marketType = temp;
                temp = document.getElementById (id + "_updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById (id + "_updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TradingHubValues", "TradingHubValues", "1..*", "1"]
                    ]
                );
            }
        }

        /**
         * Model Expected Energy  from Market Clearing, interval based
         *
         */
        class ExpectedEnergy extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExpectedEnergy;
                if (null == bucket)
                   cim_data.ExpectedEnergy = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExpectedEnergy[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ExpectedEnergy";
                base.parse_element (/<cim:ExpectedEnergy.intervalStartTime>([\s\S]*?)<\/cim:ExpectedEnergy.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ExpectedEnergy.updateUser>([\s\S]*?)<\/cim:ExpectedEnergy.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:ExpectedEnergy.updateTimeStamp>([\s\S]*?)<\/cim:ExpectedEnergy.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:ExpectedEnergy.ExpectedEnergyValues\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExpectedEnergyValues", sub, context);
                var bucket = context.parsed.ExpectedEnergy;
                if (null == bucket)
                   context.parsed.ExpectedEnergy = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ExpectedEnergy", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_element (obj, "ExpectedEnergy", "updateUser", "updateUser",  base.from_string, fields);
                base.export_element (obj, "ExpectedEnergy", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_attributes (obj, "ExpectedEnergy", "ExpectedEnergyValues", "ExpectedEnergyValues", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExpectedEnergy_collapse" aria-expanded="true" aria-controls="ExpectedEnergy_collapse" style="margin-left: 10px;">ExpectedEnergy</a></legend>
                    <div id="ExpectedEnergy_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#ExpectedEnergyValues}}<div><b>ExpectedEnergyValues</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ExpectedEnergyValues}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ExpectedEnergyValues) obj.ExpectedEnergyValues_string = obj.ExpectedEnergyValues.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ExpectedEnergyValues_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ExpectedEnergy_collapse" aria-expanded="true" aria-controls="{{id}}_ExpectedEnergy_collapse" style="margin-left: 10px;">ExpectedEnergy</a></legend>
                    <div id="{{id}}_ExpectedEnergy_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='{{id}}_intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updateUser'>updateUser: </label><div class='col-sm-8'><input id='{{id}}_updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='{{id}}_updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExpectedEnergy" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;
                temp = document.getElementById (id + "_updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById (id + "_updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ExpectedEnergyValues", "ExpectedEnergyValues", "1..*", "1"]
                    ]
                );
            }
        }

        /**
         * Models 10-Minutes Auxillary Data
         *
         */
        class TenMinAuxiliaryData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TenMinAuxiliaryData;
                if (null == bucket)
                   cim_data.TenMinAuxiliaryData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TenMinAuxiliaryData[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TenMinAuxiliaryData";
                base.parse_element (/<cim:TenMinAuxiliaryData.intervalStartTime>([\s\S]*?)<\/cim:TenMinAuxiliaryData.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:TenMinAuxiliaryData.updateUser>([\s\S]*?)<\/cim:TenMinAuxiliaryData.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:TenMinAuxiliaryData.updateTimeStamp>([\s\S]*?)<\/cim:TenMinAuxiliaryData.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:TenMinAuxiliaryData.AuxillaryData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AuxillaryData", sub, context);
                var bucket = context.parsed.TenMinAuxiliaryData;
                if (null == bucket)
                   context.parsed.TenMinAuxiliaryData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TenMinAuxiliaryData", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_element (obj, "TenMinAuxiliaryData", "updateUser", "updateUser",  base.from_string, fields);
                base.export_element (obj, "TenMinAuxiliaryData", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_attributes (obj, "TenMinAuxiliaryData", "AuxillaryData", "AuxillaryData", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TenMinAuxiliaryData_collapse" aria-expanded="true" aria-controls="TenMinAuxiliaryData_collapse" style="margin-left: 10px;">TenMinAuxiliaryData</a></legend>
                    <div id="TenMinAuxiliaryData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#AuxillaryData}}<div><b>AuxillaryData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AuxillaryData}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.AuxillaryData) obj.AuxillaryData_string = obj.AuxillaryData.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AuxillaryData_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_TenMinAuxiliaryData_collapse" aria-expanded="true" aria-controls="{{id}}_TenMinAuxiliaryData_collapse" style="margin-left: 10px;">TenMinAuxiliaryData</a></legend>
                    <div id="{{id}}_TenMinAuxiliaryData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='{{id}}_intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updateUser'>updateUser: </label><div class='col-sm-8'><input id='{{id}}_updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='{{id}}_updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TenMinAuxiliaryData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;
                temp = document.getElementById (id + "_updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById (id + "_updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AuxillaryData", "AuxiliaryValues", "1..*", "1"]
                    ]
                );
            }
        }

        /**
         * Models Market clearing results.
         *
         * Indicates market horizon, interval based. Used by a market quality system for billing and settlement purposes
         *
         */
        class AllocationResult extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AllocationResult;
                if (null == bucket)
                   cim_data.AllocationResult = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AllocationResult[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AllocationResult";
                base.parse_element (/<cim:AllocationResult.intervalStartTime>([\s\S]*?)<\/cim:AllocationResult.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:AllocationResult.updateUser>([\s\S]*?)<\/cim:AllocationResult.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:AllocationResult.updateTimeStamp>([\s\S]*?)<\/cim:AllocationResult.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:AllocationResult.AllocationResultValues\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AllocationResultValues", sub, context);
                var bucket = context.parsed.AllocationResult;
                if (null == bucket)
                   context.parsed.AllocationResult = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AllocationResult", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_element (obj, "AllocationResult", "updateUser", "updateUser",  base.from_string, fields);
                base.export_element (obj, "AllocationResult", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_attributes (obj, "AllocationResult", "AllocationResultValues", "AllocationResultValues", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AllocationResult_collapse" aria-expanded="true" aria-controls="AllocationResult_collapse" style="margin-left: 10px;">AllocationResult</a></legend>
                    <div id="AllocationResult_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#AllocationResultValues}}<div><b>AllocationResultValues</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AllocationResultValues}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.AllocationResultValues) obj.AllocationResultValues_string = obj.AllocationResultValues.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AllocationResultValues_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_AllocationResult_collapse" aria-expanded="true" aria-controls="{{id}}_AllocationResult_collapse" style="margin-left: 10px;">AllocationResult</a></legend>
                    <div id="{{id}}_AllocationResult_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='{{id}}_intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updateUser'>updateUser: </label><div class='col-sm-8'><input id='{{id}}_updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='{{id}}_updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AllocationResult" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;
                temp = document.getElementById (id + "_updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById (id + "_updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AllocationResultValues", "AllocationResultValues", "1..*", "1"]
                    ]
                );
            }
        }

        /**
         * Models Market clearing results in terms of price and MW values
         *
         */
        class AllocationResultValues extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AllocationResultValues;
                if (null == bucket)
                   cim_data.AllocationResultValues = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AllocationResultValues[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AllocationResultValues";
                base.parse_element (/<cim:AllocationResultValues.aggregateType>([\s\S]*?)<\/cim:AllocationResultValues.aggregateType>/g, obj, "aggregateType", base.to_string, sub, context);
                base.parse_element (/<cim:AllocationResultValues.allocationMwHour>([\s\S]*?)<\/cim:AllocationResultValues.allocationMwHour>/g, obj, "allocationMwHour", base.to_float, sub, context);
                base.parse_element (/<cim:AllocationResultValues.allocationPrice>([\s\S]*?)<\/cim:AllocationResultValues.allocationPrice>/g, obj, "allocationPrice", base.to_float, sub, context);
                base.parse_element (/<cim:AllocationResultValues.energyTypeCode>([\s\S]*?)<\/cim:AllocationResultValues.energyTypeCode>/g, obj, "energyTypeCode", base.to_string, sub, context);
                base.parse_element (/<cim:AllocationResultValues.marketServiceType>([\s\S]*?)<\/cim:AllocationResultValues.marketServiceType>/g, obj, "marketServiceType", base.to_string, sub, context);
                base.parse_attribute (/<cim:AllocationResultValues.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:AllocationResultValues.AllocationResult\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AllocationResult", sub, context);
                var bucket = context.parsed.AllocationResultValues;
                if (null == bucket)
                   context.parsed.AllocationResultValues = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AllocationResultValues", "aggregateType", "aggregateType",  base.from_string, fields);
                base.export_element (obj, "AllocationResultValues", "allocationMwHour", "allocationMwHour",  base.from_float, fields);
                base.export_element (obj, "AllocationResultValues", "allocationPrice", "allocationPrice",  base.from_float, fields);
                base.export_element (obj, "AllocationResultValues", "energyTypeCode", "energyTypeCode",  base.from_string, fields);
                base.export_element (obj, "AllocationResultValues", "marketServiceType", "marketServiceType",  base.from_string, fields);
                base.export_attribute (obj, "AllocationResultValues", "RegisteredResource", "RegisteredResource", fields);
                base.export_attribute (obj, "AllocationResultValues", "AllocationResult", "AllocationResult", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AllocationResultValues_collapse" aria-expanded="true" aria-controls="AllocationResultValues_collapse" style="margin-left: 10px;">AllocationResultValues</a></legend>
                    <div id="AllocationResultValues_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#aggregateType}}<div><b>aggregateType</b>: {{aggregateType}}</div>{{/aggregateType}}
                    {{#allocationMwHour}}<div><b>allocationMwHour</b>: {{allocationMwHour}}</div>{{/allocationMwHour}}
                    {{#allocationPrice}}<div><b>allocationPrice</b>: {{allocationPrice}}</div>{{/allocationPrice}}
                    {{#energyTypeCode}}<div><b>energyTypeCode</b>: {{energyTypeCode}}</div>{{/energyTypeCode}}
                    {{#marketServiceType}}<div><b>marketServiceType</b>: {{marketServiceType}}</div>{{/marketServiceType}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#AllocationResult}}<div><b>AllocationResult</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AllocationResult}}&quot;);})'>{{AllocationResult}}</a></div>{{/AllocationResult}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_AllocationResultValues_collapse" aria-expanded="true" aria-controls="{{id}}_AllocationResultValues_collapse" style="margin-left: 10px;">AllocationResultValues</a></legend>
                    <div id="{{id}}_AllocationResultValues_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aggregateType'>aggregateType: </label><div class='col-sm-8'><input id='{{id}}_aggregateType' class='form-control' type='text'{{#aggregateType}} value='{{aggregateType}}'{{/aggregateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_allocationMwHour'>allocationMwHour: </label><div class='col-sm-8'><input id='{{id}}_allocationMwHour' class='form-control' type='text'{{#allocationMwHour}} value='{{allocationMwHour}}'{{/allocationMwHour}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_allocationPrice'>allocationPrice: </label><div class='col-sm-8'><input id='{{id}}_allocationPrice' class='form-control' type='text'{{#allocationPrice}} value='{{allocationPrice}}'{{/allocationPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyTypeCode'>energyTypeCode: </label><div class='col-sm-8'><input id='{{id}}_energyTypeCode' class='form-control' type='text'{{#energyTypeCode}} value='{{energyTypeCode}}'{{/energyTypeCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketServiceType'>marketServiceType: </label><div class='col-sm-8'><input id='{{id}}_marketServiceType' class='form-control' type='text'{{#marketServiceType}} value='{{marketServiceType}}'{{/marketServiceType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AllocationResult'>AllocationResult: </label><div class='col-sm-8'><input id='{{id}}_AllocationResult' class='form-control' type='text'{{#AllocationResult}} value='{{AllocationResult}}'{{/AllocationResult}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AllocationResultValues" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_aggregateType").value; if ("" != temp) obj.aggregateType = temp;
                temp = document.getElementById (id + "_allocationMwHour").value; if ("" != temp) obj.allocationMwHour = temp;
                temp = document.getElementById (id + "_allocationPrice").value; if ("" != temp) obj.allocationPrice = temp;
                temp = document.getElementById (id + "_energyTypeCode").value; if ("" != temp) obj.energyTypeCode = temp;
                temp = document.getElementById (id + "_marketServiceType").value; if ("" != temp) obj.marketServiceType = temp;
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;
                temp = document.getElementById (id + "_AllocationResult").value; if ("" != temp) obj.AllocationResult = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredResource", "RegisteredResource", "0..1", "0..*"],
                        ["AllocationResult", "AllocationResult", "1", "1..*"]
                    ]
                );
            }
        }

        /**
         * Models 5-Minutes Auxillary Data
         *
         */
        class FiveMinAuxiliaryData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.FiveMinAuxiliaryData;
                if (null == bucket)
                   cim_data.FiveMinAuxiliaryData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FiveMinAuxiliaryData[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FiveMinAuxiliaryData";
                base.parse_element (/<cim:FiveMinAuxiliaryData.intervalStartTime>([\s\S]*?)<\/cim:FiveMinAuxiliaryData.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:FiveMinAuxiliaryData.updateUser>([\s\S]*?)<\/cim:FiveMinAuxiliaryData.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:FiveMinAuxiliaryData.updateTimeStamp>([\s\S]*?)<\/cim:FiveMinAuxiliaryData.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:FiveMinAuxiliaryData.AuxillaryValues\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AuxillaryValues", sub, context);
                var bucket = context.parsed.FiveMinAuxiliaryData;
                if (null == bucket)
                   context.parsed.FiveMinAuxiliaryData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "FiveMinAuxiliaryData", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_element (obj, "FiveMinAuxiliaryData", "updateUser", "updateUser",  base.from_string, fields);
                base.export_element (obj, "FiveMinAuxiliaryData", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_attributes (obj, "FiveMinAuxiliaryData", "AuxillaryValues", "AuxillaryValues", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FiveMinAuxiliaryData_collapse" aria-expanded="true" aria-controls="FiveMinAuxiliaryData_collapse" style="margin-left: 10px;">FiveMinAuxiliaryData</a></legend>
                    <div id="FiveMinAuxiliaryData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#AuxillaryValues}}<div><b>AuxillaryValues</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AuxillaryValues}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.AuxillaryValues) obj.AuxillaryValues_string = obj.AuxillaryValues.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AuxillaryValues_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_FiveMinAuxiliaryData_collapse" aria-expanded="true" aria-controls="{{id}}_FiveMinAuxiliaryData_collapse" style="margin-left: 10px;">FiveMinAuxiliaryData</a></legend>
                    <div id="{{id}}_FiveMinAuxiliaryData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='{{id}}_intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updateUser'>updateUser: </label><div class='col-sm-8'><input id='{{id}}_updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='{{id}}_updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "FiveMinAuxiliaryData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;
                temp = document.getElementById (id + "_updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById (id + "_updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AuxillaryValues", "AuxiliaryValues", "1..*", "1"]
                    ]
                );
            }
        }

        /**
         * Models Auxillary Values
         *
         */
        class AuxiliaryValues extends AuxiliaryObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AuxiliaryValues;
                if (null == bucket)
                   cim_data.AuxiliaryValues = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AuxiliaryValues[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AuxiliaryObject.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.AuxiliaryValues;
                if (null == bucket)
                   context.parsed.AuxiliaryValues = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AuxiliaryObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "AuxiliaryValues", "minExpostCapacity", "minExpostCapacity",  base.from_float, fields);
                base.export_element (obj, "AuxiliaryValues", "maxExpostCapacity", "maxExpostCapacity",  base.from_float, fields);
                base.export_element (obj, "AuxiliaryValues", "availUndispatchedQ", "availUndispatchedQ",  base.from_float, fields);
                base.export_element (obj, "AuxiliaryValues", "incrementalORAvail", "incrementalORAvail",  base.from_float, fields);
                base.export_element (obj, "AuxiliaryValues", "startUpCost", "startUpCost",  base.from_float, fields);
                base.export_element (obj, "AuxiliaryValues", "startUpCostEligibilityFlag", "startUpCostEligibilityFlag",  base.from_string, fields);
                base.export_element (obj, "AuxiliaryValues", "noLoadCost", "noLoadCost",  base.from_float, fields);
                base.export_element (obj, "AuxiliaryValues", "noLoadCostEligibilityFlag", "noLoadCostEligibilityFlag",  base.from_string, fields);
                base.export_attribute (obj, "AuxiliaryValues", "AuxillaryCost", "AuxillaryCost", fields);
                base.export_attribute (obj, "AuxiliaryValues", "FiveMinAuxillaryData", "FiveMinAuxillaryData", fields);
                base.export_attribute (obj, "AuxiliaryValues", "TenMinAuxillaryData", "TenMinAuxillaryData", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AuxiliaryValues_collapse" aria-expanded="true" aria-controls="AuxiliaryValues_collapse" style="margin-left: 10px;">AuxiliaryValues</a></legend>
                    <div id="AuxiliaryValues_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AuxiliaryObject.prototype.template.call (this) +
                    `
                    {{#minExpostCapacity}}<div><b>minExpostCapacity</b>: {{minExpostCapacity}}</div>{{/minExpostCapacity}}
                    {{#maxExpostCapacity}}<div><b>maxExpostCapacity</b>: {{maxExpostCapacity}}</div>{{/maxExpostCapacity}}
                    {{#availUndispatchedQ}}<div><b>availUndispatchedQ</b>: {{availUndispatchedQ}}</div>{{/availUndispatchedQ}}
                    {{#incrementalORAvail}}<div><b>incrementalORAvail</b>: {{incrementalORAvail}}</div>{{/incrementalORAvail}}
                    {{#startUpCost}}<div><b>startUpCost</b>: {{startUpCost}}</div>{{/startUpCost}}
                    {{#startUpCostEligibilityFlag}}<div><b>startUpCostEligibilityFlag</b>: {{startUpCostEligibilityFlag}}</div>{{/startUpCostEligibilityFlag}}
                    {{#noLoadCost}}<div><b>noLoadCost</b>: {{noLoadCost}}</div>{{/noLoadCost}}
                    {{#noLoadCostEligibilityFlag}}<div><b>noLoadCostEligibilityFlag</b>: {{noLoadCostEligibilityFlag}}</div>{{/noLoadCostEligibilityFlag}}
                    {{#AuxillaryCost}}<div><b>AuxillaryCost</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AuxillaryCost}}&quot;);})'>{{AuxillaryCost}}</a></div>{{/AuxillaryCost}}
                    {{#FiveMinAuxillaryData}}<div><b>FiveMinAuxillaryData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FiveMinAuxillaryData}}&quot;);})'>{{FiveMinAuxillaryData}}</a></div>{{/FiveMinAuxillaryData}}
                    {{#TenMinAuxillaryData}}<div><b>TenMinAuxillaryData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TenMinAuxillaryData}}&quot;);})'>{{TenMinAuxillaryData}}</a></div>{{/TenMinAuxillaryData}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_AuxiliaryValues_collapse" aria-expanded="true" aria-controls="{{id}}_AuxiliaryValues_collapse" style="margin-left: 10px;">AuxiliaryValues</a></legend>
                    <div id="{{id}}_AuxiliaryValues_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AuxiliaryObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minExpostCapacity'>minExpostCapacity: </label><div class='col-sm-8'><input id='{{id}}_minExpostCapacity' class='form-control' type='text'{{#minExpostCapacity}} value='{{minExpostCapacity}}'{{/minExpostCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxExpostCapacity'>maxExpostCapacity: </label><div class='col-sm-8'><input id='{{id}}_maxExpostCapacity' class='form-control' type='text'{{#maxExpostCapacity}} value='{{maxExpostCapacity}}'{{/maxExpostCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_availUndispatchedQ'>availUndispatchedQ: </label><div class='col-sm-8'><input id='{{id}}_availUndispatchedQ' class='form-control' type='text'{{#availUndispatchedQ}} value='{{availUndispatchedQ}}'{{/availUndispatchedQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_incrementalORAvail'>incrementalORAvail: </label><div class='col-sm-8'><input id='{{id}}_incrementalORAvail' class='form-control' type='text'{{#incrementalORAvail}} value='{{incrementalORAvail}}'{{/incrementalORAvail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startUpCost'>startUpCost: </label><div class='col-sm-8'><input id='{{id}}_startUpCost' class='form-control' type='text'{{#startUpCost}} value='{{startUpCost}}'{{/startUpCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startUpCostEligibilityFlag'>startUpCostEligibilityFlag: </label><div class='col-sm-8'><input id='{{id}}_startUpCostEligibilityFlag' class='form-control' type='text'{{#startUpCostEligibilityFlag}} value='{{startUpCostEligibilityFlag}}'{{/startUpCostEligibilityFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_noLoadCost'>noLoadCost: </label><div class='col-sm-8'><input id='{{id}}_noLoadCost' class='form-control' type='text'{{#noLoadCost}} value='{{noLoadCost}}'{{/noLoadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_noLoadCostEligibilityFlag'>noLoadCostEligibilityFlag: </label><div class='col-sm-8'><input id='{{id}}_noLoadCostEligibilityFlag' class='form-control' type='text'{{#noLoadCostEligibilityFlag}} value='{{noLoadCostEligibilityFlag}}'{{/noLoadCostEligibilityFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AuxillaryCost'>AuxillaryCost: </label><div class='col-sm-8'><input id='{{id}}_AuxillaryCost' class='form-control' type='text'{{#AuxillaryCost}} value='{{AuxillaryCost}}'{{/AuxillaryCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FiveMinAuxillaryData'>FiveMinAuxillaryData: </label><div class='col-sm-8'><input id='{{id}}_FiveMinAuxillaryData' class='form-control' type='text'{{#FiveMinAuxillaryData}} value='{{FiveMinAuxillaryData}}'{{/FiveMinAuxillaryData}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TenMinAuxillaryData'>TenMinAuxillaryData: </label><div class='col-sm-8'><input id='{{id}}_TenMinAuxillaryData' class='form-control' type='text'{{#TenMinAuxillaryData}} value='{{TenMinAuxillaryData}}'{{/TenMinAuxillaryData}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AuxiliaryValues" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_minExpostCapacity").value; if ("" != temp) obj.minExpostCapacity = temp;
                temp = document.getElementById (id + "_maxExpostCapacity").value; if ("" != temp) obj.maxExpostCapacity = temp;
                temp = document.getElementById (id + "_availUndispatchedQ").value; if ("" != temp) obj.availUndispatchedQ = temp;
                temp = document.getElementById (id + "_incrementalORAvail").value; if ("" != temp) obj.incrementalORAvail = temp;
                temp = document.getElementById (id + "_startUpCost").value; if ("" != temp) obj.startUpCost = temp;
                temp = document.getElementById (id + "_startUpCostEligibilityFlag").value; if ("" != temp) obj.startUpCostEligibilityFlag = temp;
                temp = document.getElementById (id + "_noLoadCost").value; if ("" != temp) obj.noLoadCost = temp;
                temp = document.getElementById (id + "_noLoadCostEligibilityFlag").value; if ("" != temp) obj.noLoadCostEligibilityFlag = temp;
                temp = document.getElementById (id + "_AuxillaryCost").value; if ("" != temp) obj.AuxillaryCost = temp;
                temp = document.getElementById (id + "_FiveMinAuxillaryData").value; if ("" != temp) obj.FiveMinAuxillaryData = temp;
                temp = document.getElementById (id + "_TenMinAuxillaryData").value; if ("" != temp) obj.TenMinAuxillaryData = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AuxillaryCost", "AuxiliaryCost", "1", "1..*"],
                        ["FiveMinAuxillaryData", "FiveMinAuxiliaryData", "1", "1..*"],
                        ["TenMinAuxillaryData", "TenMinAuxiliaryData", "1", "1..*"]
                    ]
                );
            }
        }

        return (
            {
                AuxiliaryCost: AuxiliaryCost,
                AllocationResult: AllocationResult,
                TenMinAuxiliaryData: TenMinAuxiliaryData,
                AllocationResultValues: AllocationResultValues,
                ExpectedEnergyValues: ExpectedEnergyValues,
                AuxiliaryValues: AuxiliaryValues,
                ExpectedEnergy: ExpectedEnergy,
                FiveMinAuxiliaryData: FiveMinAuxiliaryData,
                TradingHubValues: TradingHubValues,
                TradingHubPrice: TradingHubPrice,
                AuxiliaryObject: AuxiliaryObject
            }
        );
    }
);