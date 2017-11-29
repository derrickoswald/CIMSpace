define
(
    ["model/base", "model/MarketPlan"],
    function (base, MarketPlan)
    {

        /**
         * Binding security constrained clearing results posted for a given settlement period.
         *
         */
        class SecurityConstraintsClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SecurityConstraintsClearing;
                if (null == bucket)
                   cim_data.SecurityConstraintsClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SecurityConstraintsClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "SecurityConstraintsClearing";
                base.parse_element (/<cim:SecurityConstraintsClearing.mwLimit>([\s\S]*?)<\/cim:SecurityConstraintsClearing.mwLimit>/g, obj, "mwLimit", base.to_string, sub, context);
                base.parse_element (/<cim:SecurityConstraintsClearing.mwFlow>([\s\S]*?)<\/cim:SecurityConstraintsClearing.mwFlow>/g, obj, "mwFlow", base.to_string, sub, context);
                base.parse_element (/<cim:SecurityConstraintsClearing.shadowPrice>([\s\S]*?)<\/cim:SecurityConstraintsClearing.shadowPrice>/g, obj, "shadowPrice", base.to_string, sub, context);

                var bucket = context.parsed.SecurityConstraintsClearing;
                if (null == bucket)
                   context.parsed.SecurityConstraintsClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "SecurityConstraintsClearing", "mwLimit", base.from_string, fields);
                base.export_element (obj, "SecurityConstraintsClearing", "mwFlow", base.from_string, fields);
                base.export_element (obj, "SecurityConstraintsClearing", "shadowPrice", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SecurityConstraintsClearing_collapse" aria-expanded="true" aria-controls="SecurityConstraintsClearing_collapse">SecurityConstraintsClearing</a>
<div id="SecurityConstraintsClearing_collapse" class="collapse in" style="margin-left: 10px;">
`
      + MarketPlan.MarketFactors.prototype.template.call (this) +
`
{{#mwLimit}}<div><b>mwLimit</b>: {{mwLimit}}</div>{{/mwLimit}}
{{#mwFlow}}<div><b>mwFlow</b>: {{mwFlow}}</div>{{/mwFlow}}
{{#shadowPrice}}<div><b>shadowPrice</b>: {{shadowPrice}}</div>{{/shadowPrice}}
</div>
`
                );
           }        }

        /**
         * Market case clearing results are posted for a given settlement period.
         *
         */
        class MarketCaseClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketCaseClearing;
                if (null == bucket)
                   cim_data.MarketCaseClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketCaseClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "MarketCaseClearing";
                base.parse_element (/<cim:MarketCaseClearing.caseType>([\s\S]*?)<\/cim:MarketCaseClearing.caseType>/g, obj, "caseType", base.to_string, sub, context);
                base.parse_element (/<cim:MarketCaseClearing.postedDate>([\s\S]*?)<\/cim:MarketCaseClearing.postedDate>/g, obj, "postedDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketCaseClearing.modifiedDate>([\s\S]*?)<\/cim:MarketCaseClearing.modifiedDate>/g, obj, "modifiedDate", base.to_datetime, sub, context);

                var bucket = context.parsed.MarketCaseClearing;
                if (null == bucket)
                   context.parsed.MarketCaseClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketCaseClearing", "caseType", base.from_string, fields);
                base.export_element (obj, "MarketCaseClearing", "postedDate", base.from_datetime, fields);
                base.export_element (obj, "MarketCaseClearing", "modifiedDate", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketCaseClearing_collapse" aria-expanded="true" aria-controls="MarketCaseClearing_collapse">MarketCaseClearing</a>
<div id="MarketCaseClearing_collapse" class="collapse in" style="margin-left: 10px;">
`
      + MarketPlan.MarketFactors.prototype.template.call (this) +
`
{{#caseType}}<div><b>caseType</b>: {{caseType}}</div>{{/caseType}}
{{#postedDate}}<div><b>postedDate</b>: {{postedDate}}</div>{{/postedDate}}
{{#modifiedDate}}<div><b>modifiedDate</b>: {{modifiedDate}}</div>{{/modifiedDate}}
</div>
`
                );
           }        }

        /**
         * Model of market clearing related to results at the inter-ties.
         *
         * Identifies interval
         *
         */
        class InterTieClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InterTieClearing;
                if (null == bucket)
                   cim_data.InterTieClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InterTieClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "InterTieClearing";

                var bucket = context.parsed.InterTieClearing;
                if (null == bucket)
                   context.parsed.InterTieClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#InterTieClearing_collapse" aria-expanded="true" aria-controls="InterTieClearing_collapse">InterTieClearing</a>
<div id="InterTieClearing_collapse" class="collapse in" style="margin-left: 10px;">
`
      + MarketPlan.MarketFactors.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * Provides the tie point specific output from the market applications.
         *
         * Currently, this is defined as the loop flow compensation MW value.
         *
         */
        class InterTieResults extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InterTieResults;
                if (null == bucket)
                   cim_data.InterTieResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InterTieResults[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "InterTieResults";
                base.parse_element (/<cim:InterTieResults.clearedValue>([\s\S]*?)<\/cim:InterTieResults.clearedValue>/g, obj, "clearedValue", base.to_float, sub, context);
                base.parse_element (/<cim:InterTieResults.baseMW>([\s\S]*?)<\/cim:InterTieResults.baseMW>/g, obj, "baseMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:InterTieResults.InterTieClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterTieClearing", sub, context);
                base.parse_attribute (/<cim:InterTieResults.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);

                var bucket = context.parsed.InterTieResults;
                if (null == bucket)
                   context.parsed.InterTieResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "InterTieResults", "clearedValue", base.from_float, fields);
                base.export_element (obj, "InterTieResults", "baseMW", base.from_float, fields);
                base.export_attribute (obj, "InterTieResults", "InterTieClearing", fields);
                base.export_attribute (obj, "InterTieResults", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#InterTieResults_collapse" aria-expanded="true" aria-controls="InterTieResults_collapse">InterTieResults</a>
<div id="InterTieResults_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#clearedValue}}<div><b>clearedValue</b>: {{clearedValue}}</div>{{/clearedValue}}
{{#baseMW}}<div><b>baseMW</b>: {{baseMW}}</div>{{/baseMW}}
{{#InterTieClearing}}<div><b>InterTieClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InterTieClearing}}&quot;);})'>{{InterTieClearing}}</a></div>{{/InterTieClearing}}
{{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
</div>
`
                );
           }        }

        return (
            {
                InterTieResults: InterTieResults,
                InterTieClearing: InterTieClearing,
                SecurityConstraintsClearing: SecurityConstraintsClearing,
                MarketCaseClearing: MarketCaseClearing
            }
        );
    }
);