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
                let bucket = cim_data.SecurityConstraintsClearing;
                if (null == bucket)
                   cim_data.SecurityConstraintsClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SecurityConstraintsClearing[obj.id];
            }

            parse (context, sub)
            {
                let obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "SecurityConstraintsClearing";
                base.parse_element (/<cim:SecurityConstraintsClearing.mwFlow>([\s\S]*?)<\/cim:SecurityConstraintsClearing.mwFlow>/g, obj, "mwFlow", base.to_string, sub, context);
                base.parse_element (/<cim:SecurityConstraintsClearing.mwLimit>([\s\S]*?)<\/cim:SecurityConstraintsClearing.mwLimit>/g, obj, "mwLimit", base.to_string, sub, context);
                base.parse_element (/<cim:SecurityConstraintsClearing.shadowPrice>([\s\S]*?)<\/cim:SecurityConstraintsClearing.shadowPrice>/g, obj, "shadowPrice", base.to_string, sub, context);
                let bucket = context.parsed.SecurityConstraintsClearing;
                if (null == bucket)
                   context.parsed.SecurityConstraintsClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "SecurityConstraintsClearing", "mwFlow", "mwFlow",  base.from_string, fields);
                base.export_element (obj, "SecurityConstraintsClearing", "mwLimit", "mwLimit",  base.from_string, fields);
                base.export_element (obj, "SecurityConstraintsClearing", "shadowPrice", "shadowPrice",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SecurityConstraintsClearing_collapse" aria-expanded="true" aria-controls="SecurityConstraintsClearing_collapse" style="margin-left: 10px;">SecurityConstraintsClearing</a></legend>
                    <div id="SecurityConstraintsClearing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#mwFlow}}<div><b>mwFlow</b>: {{mwFlow}}</div>{{/mwFlow}}
                    {{#mwLimit}}<div><b>mwLimit</b>: {{mwLimit}}</div>{{/mwLimit}}
                    {{#shadowPrice}}<div><b>shadowPrice</b>: {{shadowPrice}}</div>{{/shadowPrice}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SecurityConstraintsClearing_collapse" aria-expanded="true" aria-controls="{{id}}_SecurityConstraintsClearing_collapse" style="margin-left: 10px;">SecurityConstraintsClearing</a></legend>
                    <div id="{{id}}_SecurityConstraintsClearing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwFlow'>mwFlow: </label><div class='col-sm-8'><input id='{{id}}_mwFlow' class='form-control' type='text'{{#mwFlow}} value='{{mwFlow}}'{{/mwFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwLimit'>mwLimit: </label><div class='col-sm-8'><input id='{{id}}_mwLimit' class='form-control' type='text'{{#mwLimit}} value='{{mwLimit}}'{{/mwLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shadowPrice'>shadowPrice: </label><div class='col-sm-8'><input id='{{id}}_shadowPrice' class='form-control' type='text'{{#shadowPrice}} value='{{shadowPrice}}'{{/shadowPrice}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SecurityConstraintsClearing" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_mwFlow").value; if ("" !== temp) obj["mwFlow"] = temp;
                temp = document.getElementById (id + "_mwLimit").value; if ("" !== temp) obj["mwLimit"] = temp;
                temp = document.getElementById (id + "_shadowPrice").value; if ("" !== temp) obj["shadowPrice"] = temp;

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
                let bucket = cim_data.MarketCaseClearing;
                if (null == bucket)
                   cim_data.MarketCaseClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketCaseClearing[obj.id];
            }

            parse (context, sub)
            {
                let obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "MarketCaseClearing";
                base.parse_element (/<cim:MarketCaseClearing.caseType>([\s\S]*?)<\/cim:MarketCaseClearing.caseType>/g, obj, "caseType", base.to_string, sub, context);
                base.parse_element (/<cim:MarketCaseClearing.modifiedDate>([\s\S]*?)<\/cim:MarketCaseClearing.modifiedDate>/g, obj, "modifiedDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketCaseClearing.postedDate>([\s\S]*?)<\/cim:MarketCaseClearing.postedDate>/g, obj, "postedDate", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:MarketCaseClearing.MarketProductClearing\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketProductClearing", sub, context);
                let bucket = context.parsed.MarketCaseClearing;
                if (null == bucket)
                   context.parsed.MarketCaseClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketCaseClearing", "caseType", "caseType",  base.from_string, fields);
                base.export_element (obj, "MarketCaseClearing", "modifiedDate", "modifiedDate",  base.from_datetime, fields);
                base.export_element (obj, "MarketCaseClearing", "postedDate", "postedDate",  base.from_datetime, fields);
                base.export_attributes (obj, "MarketCaseClearing", "MarketProductClearing", "MarketProductClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketCaseClearing_collapse" aria-expanded="true" aria-controls="MarketCaseClearing_collapse" style="margin-left: 10px;">MarketCaseClearing</a></legend>
                    <div id="MarketCaseClearing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#caseType}}<div><b>caseType</b>: {{caseType}}</div>{{/caseType}}
                    {{#modifiedDate}}<div><b>modifiedDate</b>: {{modifiedDate}}</div>{{/modifiedDate}}
                    {{#postedDate}}<div><b>postedDate</b>: {{postedDate}}</div>{{/postedDate}}
                    {{#MarketProductClearing}}<div><b>MarketProductClearing</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketProductClearing}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketProductClearing"]) obj["MarketProductClearing_string"] = obj["MarketProductClearing"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketProductClearing_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketCaseClearing_collapse" aria-expanded="true" aria-controls="{{id}}_MarketCaseClearing_collapse" style="margin-left: 10px;">MarketCaseClearing</a></legend>
                    <div id="{{id}}_MarketCaseClearing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_caseType'>caseType: </label><div class='col-sm-8'><input id='{{id}}_caseType' class='form-control' type='text'{{#caseType}} value='{{caseType}}'{{/caseType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_modifiedDate'>modifiedDate: </label><div class='col-sm-8'><input id='{{id}}_modifiedDate' class='form-control' type='text'{{#modifiedDate}} value='{{modifiedDate}}'{{/modifiedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_postedDate'>postedDate: </label><div class='col-sm-8'><input id='{{id}}_postedDate' class='form-control' type='text'{{#postedDate}} value='{{postedDate}}'{{/postedDate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketCaseClearing" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_caseType").value; if ("" !== temp) obj["caseType"] = temp;
                temp = document.getElementById (id + "_modifiedDate").value; if ("" !== temp) obj["modifiedDate"] = temp;
                temp = document.getElementById (id + "_postedDate").value; if ("" !== temp) obj["postedDate"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketProductClearing", "0..*", "0..1", "AncillaryServiceClearing", "MarketCaseClearing"]
                        ]
                    )
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
                let bucket = cim_data.InterTieResults;
                if (null == bucket)
                   cim_data.InterTieResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InterTieResults[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "InterTieResults";
                base.parse_element (/<cim:InterTieResults.baseMW>([\s\S]*?)<\/cim:InterTieResults.baseMW>/g, obj, "baseMW", base.to_float, sub, context);
                base.parse_element (/<cim:InterTieResults.clearedValue>([\s\S]*?)<\/cim:InterTieResults.clearedValue>/g, obj, "clearedValue", base.to_float, sub, context);
                base.parse_attribute (/<cim:InterTieResults.InterTieClearing\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InterTieClearing", sub, context);
                base.parse_attribute (/<cim:InterTieResults.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                let bucket = context.parsed.InterTieResults;
                if (null == bucket)
                   context.parsed.InterTieResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "InterTieResults", "baseMW", "baseMW",  base.from_float, fields);
                base.export_element (obj, "InterTieResults", "clearedValue", "clearedValue",  base.from_float, fields);
                base.export_attribute (obj, "InterTieResults", "InterTieClearing", "InterTieClearing", fields);
                base.export_attribute (obj, "InterTieResults", "Flowgate", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InterTieResults_collapse" aria-expanded="true" aria-controls="InterTieResults_collapse" style="margin-left: 10px;">InterTieResults</a></legend>
                    <div id="InterTieResults_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#baseMW}}<div><b>baseMW</b>: {{baseMW}}</div>{{/baseMW}}
                    {{#clearedValue}}<div><b>clearedValue</b>: {{clearedValue}}</div>{{/clearedValue}}
                    {{#InterTieClearing}}<div><b>InterTieClearing</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{InterTieClearing}}");}); return false;'>{{InterTieClearing}}</a></div>{{/InterTieClearing}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Flowgate}}");}); return false;'>{{Flowgate}}</a></div>{{/Flowgate}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InterTieResults_collapse" aria-expanded="true" aria-controls="{{id}}_InterTieResults_collapse" style="margin-left: 10px;">InterTieResults</a></legend>
                    <div id="{{id}}_InterTieResults_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_baseMW'>baseMW: </label><div class='col-sm-8'><input id='{{id}}_baseMW' class='form-control' type='text'{{#baseMW}} value='{{baseMW}}'{{/baseMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_clearedValue'>clearedValue: </label><div class='col-sm-8'><input id='{{id}}_clearedValue' class='form-control' type='text'{{#clearedValue}} value='{{clearedValue}}'{{/clearedValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_InterTieClearing'>InterTieClearing: </label><div class='col-sm-8'><input id='{{id}}_InterTieClearing' class='form-control' type='text'{{#InterTieClearing}} value='{{InterTieClearing}}'{{/InterTieClearing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "InterTieResults" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_baseMW").value; if ("" !== temp) obj["baseMW"] = temp;
                temp = document.getElementById (id + "_clearedValue").value; if ("" !== temp) obj["clearedValue"] = temp;
                temp = document.getElementById (id + "_InterTieClearing").value; if ("" !== temp) obj["InterTieClearing"] = temp;
                temp = document.getElementById (id + "_Flowgate").value; if ("" !== temp) obj["Flowgate"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["InterTieClearing", "0..1", "0..*", "InterTieClearing", "InterTieResults"],
                            ["Flowgate", "1", "1..*", "Flowgate", "InterTieResults"]
                        ]
                    )
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
                let bucket = cim_data.InterTieClearing;
                if (null == bucket)
                   cim_data.InterTieClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InterTieClearing[obj.id];
            }

            parse (context, sub)
            {
                let obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "InterTieClearing";
                base.parse_attributes (/<cim:InterTieClearing.InterTieResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InterTieResults", sub, context);
                let bucket = context.parsed.InterTieClearing;
                if (null == bucket)
                   context.parsed.InterTieClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "InterTieClearing", "InterTieResults", "InterTieResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InterTieClearing_collapse" aria-expanded="true" aria-controls="InterTieClearing_collapse" style="margin-left: 10px;">InterTieClearing</a></legend>
                    <div id="InterTieClearing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#InterTieResults}}<div><b>InterTieResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InterTieResults}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["InterTieResults"]) obj["InterTieResults_string"] = obj["InterTieResults"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["InterTieResults_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InterTieClearing_collapse" aria-expanded="true" aria-controls="{{id}}_InterTieClearing_collapse" style="margin-left: 10px;">InterTieClearing</a></legend>
                    <div id="{{id}}_InterTieClearing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "InterTieClearing" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["InterTieResults", "0..*", "0..1", "InterTieResults", "InterTieClearing"]
                        ]
                    )
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