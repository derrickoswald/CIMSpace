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

                base.export_element (obj, "SecurityConstraintsClearing", "mwLimit", "mwLimit",  base.from_string, fields);
                base.export_element (obj, "SecurityConstraintsClearing", "mwFlow", "mwFlow",  base.from_string, fields);
                base.export_element (obj, "SecurityConstraintsClearing", "shadowPrice", "shadowPrice",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SecurityConstraintsClearing_collapse" aria-expanded="true" aria-controls="SecurityConstraintsClearing_collapse" style="margin-left: 10px;">SecurityConstraintsClearing</a></legend>
                    <div id="SecurityConstraintsClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#mwLimit}}<div><b>mwLimit</b>: {{mwLimit}}</div>{{/mwLimit}}
                    {{#mwFlow}}<div><b>mwFlow</b>: {{mwFlow}}</div>{{/mwFlow}}
                    {{#shadowPrice}}<div><b>shadowPrice</b>: {{shadowPrice}}</div>{{/shadowPrice}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SecurityConstraintsClearing_collapse" aria-expanded="true" aria-controls="SecurityConstraintsClearing_collapse" style="margin-left: 10px;">SecurityConstraintsClearing</a></legend>
                    <div id="SecurityConstraintsClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mwLimit'>mwLimit: </label><div class='col-sm-8'><input id='mwLimit' class='form-control' type='text'{{#mwLimit}} value='{{mwLimit}}'{{/mwLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mwFlow'>mwFlow: </label><div class='col-sm-8'><input id='mwFlow' class='form-control' type='text'{{#mwFlow}} value='{{mwFlow}}'{{/mwFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shadowPrice'>shadowPrice: </label><div class='col-sm-8'><input id='shadowPrice' class='form-control' type='text'{{#shadowPrice}} value='{{shadowPrice}}'{{/shadowPrice}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "SecurityConstraintsClearing" };
                super.submit (obj);
                temp = document.getElementById ("mwLimit").value; if ("" != temp) obj.mwLimit = temp;
                temp = document.getElementById ("mwFlow").value; if ("" != temp) obj.mwFlow = temp;
                temp = document.getElementById ("shadowPrice").value; if ("" != temp) obj.shadowPrice = temp;

                return (obj);
            }
        }

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
                base.parse_attributes (/<cim:MarketCaseClearing.MarketProductClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProductClearing", sub, context);
                var bucket = context.parsed.MarketCaseClearing;
                if (null == bucket)
                   context.parsed.MarketCaseClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketCaseClearing", "caseType", "caseType",  base.from_string, fields);
                base.export_element (obj, "MarketCaseClearing", "postedDate", "postedDate",  base.from_datetime, fields);
                base.export_element (obj, "MarketCaseClearing", "modifiedDate", "modifiedDate",  base.from_datetime, fields);
                base.export_attributes (obj, "MarketCaseClearing", "MarketProductClearing", "MarketProductClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketCaseClearing_collapse" aria-expanded="true" aria-controls="MarketCaseClearing_collapse" style="margin-left: 10px;">MarketCaseClearing</a></legend>
                    <div id="MarketCaseClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#caseType}}<div><b>caseType</b>: {{caseType}}</div>{{/caseType}}
                    {{#postedDate}}<div><b>postedDate</b>: {{postedDate}}</div>{{/postedDate}}
                    {{#modifiedDate}}<div><b>modifiedDate</b>: {{modifiedDate}}</div>{{/modifiedDate}}
                    {{#MarketProductClearing}}<div><b>MarketProductClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketProductClearing}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MarketProductClearing) obj.MarketProductClearing_string = obj.MarketProductClearing.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MarketProductClearing_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketCaseClearing_collapse" aria-expanded="true" aria-controls="MarketCaseClearing_collapse" style="margin-left: 10px;">MarketCaseClearing</a></legend>
                    <div id="MarketCaseClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='caseType'>caseType: </label><div class='col-sm-8'><input id='caseType' class='form-control' type='text'{{#caseType}} value='{{caseType}}'{{/caseType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='postedDate'>postedDate: </label><div class='col-sm-8'><input id='postedDate' class='form-control' type='text'{{#postedDate}} value='{{postedDate}}'{{/postedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='modifiedDate'>modifiedDate: </label><div class='col-sm-8'><input id='modifiedDate' class='form-control' type='text'{{#modifiedDate}} value='{{modifiedDate}}'{{/modifiedDate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MarketCaseClearing" };
                super.submit (obj);
                temp = document.getElementById ("caseType").value; if ("" != temp) obj.caseType = temp;
                temp = document.getElementById ("postedDate").value; if ("" != temp) obj.postedDate = temp;
                temp = document.getElementById ("modifiedDate").value; if ("" != temp) obj.modifiedDate = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MarketProductClearing", "AncillaryServiceClearing", "0..*", "0..1"]
                    ]
                );
            }
        }

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
                base.parse_attributes (/<cim:InterTieClearing.InterTieResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterTieResults", sub, context);
                var bucket = context.parsed.InterTieClearing;
                if (null == bucket)
                   context.parsed.InterTieClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "InterTieClearing", "InterTieResults", "InterTieResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InterTieClearing_collapse" aria-expanded="true" aria-controls="InterTieClearing_collapse" style="margin-left: 10px;">InterTieClearing</a></legend>
                    <div id="InterTieClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#InterTieResults}}<div><b>InterTieResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/InterTieResults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.InterTieResults) obj.InterTieResults_string = obj.InterTieResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.InterTieResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InterTieClearing_collapse" aria-expanded="true" aria-controls="InterTieClearing_collapse" style="margin-left: 10px;">InterTieClearing</a></legend>
                    <div id="InterTieClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "InterTieClearing" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["InterTieResults", "InterTieResults", "0..*", "0..1"]
                    ]
                );
            }
        }

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

                base.export_element (obj, "InterTieResults", "clearedValue", "clearedValue",  base.from_float, fields);
                base.export_element (obj, "InterTieResults", "baseMW", "baseMW",  base.from_float, fields);
                base.export_attribute (obj, "InterTieResults", "InterTieClearing", "InterTieClearing", fields);
                base.export_attribute (obj, "InterTieResults", "Flowgate", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InterTieResults_collapse" aria-expanded="true" aria-controls="InterTieResults_collapse" style="margin-left: 10px;">InterTieResults</a></legend>
                    <div id="InterTieResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#clearedValue}}<div><b>clearedValue</b>: {{clearedValue}}</div>{{/clearedValue}}
                    {{#baseMW}}<div><b>baseMW</b>: {{baseMW}}</div>{{/baseMW}}
                    {{#InterTieClearing}}<div><b>InterTieClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InterTieClearing}}&quot;);})'>{{InterTieClearing}}</a></div>{{/InterTieClearing}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InterTieResults_collapse" aria-expanded="true" aria-controls="InterTieResults_collapse" style="margin-left: 10px;">InterTieResults</a></legend>
                    <div id="InterTieResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clearedValue'>clearedValue: </label><div class='col-sm-8'><input id='clearedValue' class='form-control' type='text'{{#clearedValue}} value='{{clearedValue}}'{{/clearedValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='baseMW'>baseMW: </label><div class='col-sm-8'><input id='baseMW' class='form-control' type='text'{{#baseMW}} value='{{baseMW}}'{{/baseMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='InterTieClearing'>InterTieClearing: </label><div class='col-sm-8'><input id='InterTieClearing' class='form-control' type='text'{{#InterTieClearing}} value='{{InterTieClearing}}'{{/InterTieClearing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "InterTieResults" };
                super.submit (obj);
                temp = document.getElementById ("clearedValue").value; if ("" != temp) obj.clearedValue = temp;
                temp = document.getElementById ("baseMW").value; if ("" != temp) obj.baseMW = temp;
                temp = document.getElementById ("InterTieClearing").value; if ("" != temp) obj.InterTieClearing = temp;
                temp = document.getElementById ("Flowgate").value; if ("" != temp) obj.Flowgate = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["InterTieClearing", "InterTieClearing", "0..1", "0..*"],
                        ["Flowgate", "Flowgate", "1", "1..*"]
                    ]
                );
            }
        }

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