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
                this._id = template.id;
                var bucket = cim_data.AuxiliaryCost;
                if (null == bucket)
                   cim_data.AuxiliaryCost = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AuxiliaryCost[this._id];
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

                var bucket = context.parsed.AuxiliaryCost;
                if (null == bucket)
                   context.parsed.AuxiliaryCost = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AuxiliaryCost", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "AuxiliaryCost", "marketType", base.from_string, fields);
                base.export_element (obj, "AuxiliaryCost", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "AuxiliaryCost", "updateUser", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AuxiliaryCost_collapse" aria-expanded="true" aria-controls="AuxiliaryCost_collapse">AuxiliaryCost</a>
<div id="AuxiliaryCost_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
{{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
{{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
{{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
</div>
`
                );
           }        }

        /**
         * Model Expected Energy  from Market Clearing
         *
         */
        class ExpectedEnergyValues extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ExpectedEnergyValues;
                if (null == bucket)
                   cim_data.ExpectedEnergyValues = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExpectedEnergyValues[this._id];
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

                base.export_element (obj, "ExpectedEnergyValues", "energyTypeCode", base.from_string, fields);
                base.export_element (obj, "ExpectedEnergyValues", "expectedMwh", base.from_float, fields);
                base.export_attribute (obj, "ExpectedEnergyValues", "RegisteredResource", fields);
                base.export_attribute (obj, "ExpectedEnergyValues", "ExpectedEnergy", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ExpectedEnergyValues_collapse" aria-expanded="true" aria-controls="ExpectedEnergyValues_collapse">ExpectedEnergyValues</a>
<div id="ExpectedEnergyValues_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#energyTypeCode}}<div><b>energyTypeCode</b>: {{energyTypeCode}}</div>{{/energyTypeCode}}
{{#expectedMwh}}<div><b>expectedMwh</b>: {{expectedMwh}}</div>{{/expectedMwh}}
{{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
{{#ExpectedEnergy}}<div><b>ExpectedEnergy</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExpectedEnergy}}&quot;);})'>{{ExpectedEnergy}}</a></div>{{/ExpectedEnergy}}
</div>
`
                );
           }        }

        /**
         * Models Auxillary Values
         *
         */
        class AuxiliaryObject extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AuxiliaryObject;
                if (null == bucket)
                   cim_data.AuxiliaryObject = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AuxiliaryObject[this._id];
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

                base.export_attribute (obj, "AuxiliaryObject", "RegisteredLoad", fields);
                base.export_attribute (obj, "AuxiliaryObject", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AuxiliaryObject_collapse" aria-expanded="true" aria-controls="AuxiliaryObject_collapse">AuxiliaryObject</a>
<div id="AuxiliaryObject_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#RegisteredLoad}}<div><b>RegisteredLoad</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredLoad}}&quot;);})'>{{RegisteredLoad}}</a></div>{{/RegisteredLoad}}
{{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
</div>
`
                );
           }        }

        /**
         * Models prices at Trading Hubs
         *
         */
        class TradingHubValues extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TradingHubValues;
                if (null == bucket)
                   cim_data.TradingHubValues = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TradingHubValues[this._id];
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

                base.export_element (obj, "TradingHubValues", "price", base.from_float, fields);
                base.export_attribute (obj, "TradingHubValues", "TradingHubPrice", fields);
                base.export_attribute (obj, "TradingHubValues", "AggregatedPnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TradingHubValues_collapse" aria-expanded="true" aria-controls="TradingHubValues_collapse">TradingHubValues</a>
<div id="TradingHubValues_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#price}}<div><b>price</b>: {{price}}</div>{{/price}}
{{#TradingHubPrice}}<div><b>TradingHubPrice</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TradingHubPrice}}&quot;);})'>{{TradingHubPrice}}</a></div>{{/TradingHubPrice}}
{{#AggregatedPnode}}<div><b>AggregatedPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AggregatedPnode}}&quot;);})'>{{AggregatedPnode}}</a></div>{{/AggregatedPnode}}
</div>
`
                );
           }        }

        /**
         * Models prices at Trading Hubs, interval based
         *
         */
        class TradingHubPrice extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TradingHubPrice;
                if (null == bucket)
                   cim_data.TradingHubPrice = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TradingHubPrice[this._id];
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

                var bucket = context.parsed.TradingHubPrice;
                if (null == bucket)
                   context.parsed.TradingHubPrice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TradingHubPrice", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "TradingHubPrice", "marketType", base.from_string, fields);
                base.export_element (obj, "TradingHubPrice", "updateUser", base.from_string, fields);
                base.export_element (obj, "TradingHubPrice", "updateTimeStamp", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TradingHubPrice_collapse" aria-expanded="true" aria-controls="TradingHubPrice_collapse">TradingHubPrice</a>
<div id="TradingHubPrice_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
{{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
{{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
{{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
</div>
`
                );
           }        }

        /**
         * Model Expected Energy  from Market Clearing, interval based
         *
         */
        class ExpectedEnergy extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ExpectedEnergy;
                if (null == bucket)
                   cim_data.ExpectedEnergy = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExpectedEnergy[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ExpectedEnergy";
                base.parse_element (/<cim:ExpectedEnergy.intervalStartTime>([\s\S]*?)<\/cim:ExpectedEnergy.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ExpectedEnergy.updateUser>([\s\S]*?)<\/cim:ExpectedEnergy.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:ExpectedEnergy.updateTimeStamp>([\s\S]*?)<\/cim:ExpectedEnergy.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);

                var bucket = context.parsed.ExpectedEnergy;
                if (null == bucket)
                   context.parsed.ExpectedEnergy = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ExpectedEnergy", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "ExpectedEnergy", "updateUser", base.from_string, fields);
                base.export_element (obj, "ExpectedEnergy", "updateTimeStamp", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ExpectedEnergy_collapse" aria-expanded="true" aria-controls="ExpectedEnergy_collapse">ExpectedEnergy</a>
<div id="ExpectedEnergy_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
{{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
{{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
</div>
`
                );
           }        }

        /**
         * Models 10-Minutes Auxillary Data
         *
         */
        class TenMinAuxiliaryData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TenMinAuxiliaryData;
                if (null == bucket)
                   cim_data.TenMinAuxiliaryData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TenMinAuxiliaryData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TenMinAuxiliaryData";
                base.parse_element (/<cim:TenMinAuxiliaryData.intervalStartTime>([\s\S]*?)<\/cim:TenMinAuxiliaryData.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:TenMinAuxiliaryData.updateUser>([\s\S]*?)<\/cim:TenMinAuxiliaryData.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:TenMinAuxiliaryData.updateTimeStamp>([\s\S]*?)<\/cim:TenMinAuxiliaryData.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);

                var bucket = context.parsed.TenMinAuxiliaryData;
                if (null == bucket)
                   context.parsed.TenMinAuxiliaryData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TenMinAuxiliaryData", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "TenMinAuxiliaryData", "updateUser", base.from_string, fields);
                base.export_element (obj, "TenMinAuxiliaryData", "updateTimeStamp", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TenMinAuxiliaryData_collapse" aria-expanded="true" aria-controls="TenMinAuxiliaryData_collapse">TenMinAuxiliaryData</a>
<div id="TenMinAuxiliaryData_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
{{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
{{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
</div>
`
                );
           }        }

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
                this._id = template.id;
                var bucket = cim_data.AllocationResult;
                if (null == bucket)
                   cim_data.AllocationResult = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AllocationResult[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AllocationResult";
                base.parse_element (/<cim:AllocationResult.intervalStartTime>([\s\S]*?)<\/cim:AllocationResult.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:AllocationResult.updateUser>([\s\S]*?)<\/cim:AllocationResult.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:AllocationResult.updateTimeStamp>([\s\S]*?)<\/cim:AllocationResult.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);

                var bucket = context.parsed.AllocationResult;
                if (null == bucket)
                   context.parsed.AllocationResult = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AllocationResult", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "AllocationResult", "updateUser", base.from_string, fields);
                base.export_element (obj, "AllocationResult", "updateTimeStamp", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AllocationResult_collapse" aria-expanded="true" aria-controls="AllocationResult_collapse">AllocationResult</a>
<div id="AllocationResult_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
{{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
{{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
</div>
`
                );
           }        }

        /**
         * Models Market clearing results in terms of price and MW values
         *
         */
        class AllocationResultValues extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AllocationResultValues;
                if (null == bucket)
                   cim_data.AllocationResultValues = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AllocationResultValues[this._id];
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

                base.export_element (obj, "AllocationResultValues", "aggregateType", base.from_string, fields);
                base.export_element (obj, "AllocationResultValues", "allocationMwHour", base.from_float, fields);
                base.export_element (obj, "AllocationResultValues", "allocationPrice", base.from_float, fields);
                base.export_element (obj, "AllocationResultValues", "energyTypeCode", base.from_string, fields);
                base.export_element (obj, "AllocationResultValues", "marketServiceType", base.from_string, fields);
                base.export_attribute (obj, "AllocationResultValues", "RegisteredResource", fields);
                base.export_attribute (obj, "AllocationResultValues", "AllocationResult", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AllocationResultValues_collapse" aria-expanded="true" aria-controls="AllocationResultValues_collapse">AllocationResultValues</a>
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
`
                );
           }        }

        /**
         * Models 5-Minutes Auxillary Data
         *
         */
        class FiveMinAuxiliaryData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FiveMinAuxiliaryData;
                if (null == bucket)
                   cim_data.FiveMinAuxiliaryData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FiveMinAuxiliaryData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FiveMinAuxiliaryData";
                base.parse_element (/<cim:FiveMinAuxiliaryData.intervalStartTime>([\s\S]*?)<\/cim:FiveMinAuxiliaryData.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:FiveMinAuxiliaryData.updateUser>([\s\S]*?)<\/cim:FiveMinAuxiliaryData.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:FiveMinAuxiliaryData.updateTimeStamp>([\s\S]*?)<\/cim:FiveMinAuxiliaryData.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);

                var bucket = context.parsed.FiveMinAuxiliaryData;
                if (null == bucket)
                   context.parsed.FiveMinAuxiliaryData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "FiveMinAuxiliaryData", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "FiveMinAuxiliaryData", "updateUser", base.from_string, fields);
                base.export_element (obj, "FiveMinAuxiliaryData", "updateTimeStamp", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#FiveMinAuxiliaryData_collapse" aria-expanded="true" aria-controls="FiveMinAuxiliaryData_collapse">FiveMinAuxiliaryData</a>
<div id="FiveMinAuxiliaryData_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
{{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
{{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
</div>
`
                );
           }        }

        /**
         * Models Auxillary Values
         *
         */
        class AuxiliaryValues extends AuxiliaryObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AuxiliaryValues;
                if (null == bucket)
                   cim_data.AuxiliaryValues = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AuxiliaryValues[this._id];
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AuxiliaryValues_collapse" aria-expanded="true" aria-controls="AuxiliaryValues_collapse">AuxiliaryValues</a>
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
`
                );
           }        }

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