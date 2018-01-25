define
(
    ["model/base", "model/Core"],
    /**
     * The equivalents package models equivalent networks.
     *
     */
    function (base, Core)
    {

        /**
         * A class that represents an external meshed network that has been reduced to an electrically equivalent model.
         *
         * The ConnectivityNodes contained in the equivalent are intended to reflect internal nodes of the equivalent. The boundary Connectivity nodes where the equivalent connects outside itself are NOT contained by the equivalent.
         *
         */
        class EquivalentNetwork extends Core.ConnectivityNodeContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EquivalentNetwork;
                if (null == bucket)
                   cim_data.EquivalentNetwork = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EquivalentNetwork[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConnectivityNodeContainer.prototype.parse.call (this, context, sub);
                obj.cls = "EquivalentNetwork";
                base.parse_attributes (/<cim:EquivalentNetwork.EquivalentEquipments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EquivalentEquipments", sub, context);
                var bucket = context.parsed.EquivalentNetwork;
                if (null == bucket)
                   context.parsed.EquivalentNetwork = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConnectivityNodeContainer.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "EquivalentNetwork", "EquivalentEquipments", "EquivalentEquipments", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EquivalentNetwork_collapse" aria-expanded="true" aria-controls="EquivalentNetwork_collapse" style="margin-left: 10px;">EquivalentNetwork</a></legend>
                    <div id="EquivalentNetwork_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConnectivityNodeContainer.prototype.template.call (this) +
                    `
                    {{#EquivalentEquipments}}<div><b>EquivalentEquipments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EquivalentEquipments}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EquivalentEquipments) obj.EquivalentEquipments_string = obj.EquivalentEquipments.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EquivalentEquipments_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EquivalentNetwork_collapse" aria-expanded="true" aria-controls="{{id}}_EquivalentNetwork_collapse" style="margin-left: 10px;">EquivalentNetwork</a></legend>
                    <div id="{{id}}_EquivalentNetwork_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConnectivityNodeContainer.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "EquivalentNetwork" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EquivalentEquipments", "0..*", "0..1", "EquivalentEquipment", "EquivalentNetwork"]
                        ]
                    )
                );
            }
        }

        /**
         * The class represents equivalent objects that are the result of a network reduction.
         *
         * The class is the base for equivalent objects of different types.
         *
         */
        class EquivalentEquipment extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EquivalentEquipment;
                if (null == bucket)
                   cim_data.EquivalentEquipment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EquivalentEquipment[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "EquivalentEquipment";
                base.parse_attribute (/<cim:EquivalentEquipment.EquivalentNetwork\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EquivalentNetwork", sub, context);
                var bucket = context.parsed.EquivalentEquipment;
                if (null == bucket)
                   context.parsed.EquivalentEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EquivalentEquipment", "EquivalentNetwork", "EquivalentNetwork", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EquivalentEquipment_collapse" aria-expanded="true" aria-controls="EquivalentEquipment_collapse" style="margin-left: 10px;">EquivalentEquipment</a></legend>
                    <div id="EquivalentEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    {{#EquivalentNetwork}}<div><b>EquivalentNetwork</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EquivalentNetwork}}&quot;);})'>{{EquivalentNetwork}}</a></div>{{/EquivalentNetwork}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EquivalentEquipment_collapse" aria-expanded="true" aria-controls="{{id}}_EquivalentEquipment_collapse" style="margin-left: 10px;">EquivalentEquipment</a></legend>
                    <div id="{{id}}_EquivalentEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EquivalentNetwork'>EquivalentNetwork: </label><div class='col-sm-8'><input id='{{id}}_EquivalentNetwork' class='form-control' type='text'{{#EquivalentNetwork}} value='{{EquivalentNetwork}}'{{/EquivalentNetwork}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EquivalentEquipment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EquivalentNetwork").value; if ("" != temp) obj.EquivalentNetwork = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EquivalentNetwork", "0..1", "0..*", "EquivalentNetwork", "EquivalentEquipments"]
                        ]
                    )
                );
            }
        }

        /**
         * The class represents equivalent shunts.
         *
         */
        class EquivalentShunt extends EquivalentEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EquivalentShunt;
                if (null == bucket)
                   cim_data.EquivalentShunt = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EquivalentShunt[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EquivalentEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "EquivalentShunt";
                base.parse_element (/<cim:EquivalentShunt.b>([\s\S]*?)<\/cim:EquivalentShunt.b>/g, obj, "b", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentShunt.g>([\s\S]*?)<\/cim:EquivalentShunt.g>/g, obj, "g", base.to_string, sub, context);
                var bucket = context.parsed.EquivalentShunt;
                if (null == bucket)
                   context.parsed.EquivalentShunt = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EquivalentEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "EquivalentShunt", "b", "b",  base.from_string, fields);
                base.export_element (obj, "EquivalentShunt", "g", "g",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EquivalentShunt_collapse" aria-expanded="true" aria-controls="EquivalentShunt_collapse" style="margin-left: 10px;">EquivalentShunt</a></legend>
                    <div id="EquivalentShunt_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquivalentEquipment.prototype.template.call (this) +
                    `
                    {{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
                    {{#g}}<div><b>g</b>: {{g}}</div>{{/g}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EquivalentShunt_collapse" aria-expanded="true" aria-controls="{{id}}_EquivalentShunt_collapse" style="margin-left: 10px;">EquivalentShunt</a></legend>
                    <div id="{{id}}_EquivalentShunt_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquivalentEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b'>b: </label><div class='col-sm-8'><input id='{{id}}_b' class='form-control' type='text'{{#b}} value='{{b}}'{{/b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g'>g: </label><div class='col-sm-8'><input id='{{id}}_g' class='form-control' type='text'{{#g}} value='{{g}}'{{/g}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EquivalentShunt" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_b").value; if ("" != temp) obj.b = temp;
                temp = document.getElementById (id + "_g").value; if ("" != temp) obj.g = temp;

                return (obj);
            }
        }

        /**
         * The class represents equivalent branches.
         *
         */
        class EquivalentBranch extends EquivalentEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EquivalentBranch;
                if (null == bucket)
                   cim_data.EquivalentBranch = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EquivalentBranch[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EquivalentEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "EquivalentBranch";
                base.parse_element (/<cim:EquivalentBranch.negativeR12>([\s\S]*?)<\/cim:EquivalentBranch.negativeR12>/g, obj, "negativeR12", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.negativeR21>([\s\S]*?)<\/cim:EquivalentBranch.negativeR21>/g, obj, "negativeR21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.negativeX12>([\s\S]*?)<\/cim:EquivalentBranch.negativeX12>/g, obj, "negativeX12", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.negativeX21>([\s\S]*?)<\/cim:EquivalentBranch.negativeX21>/g, obj, "negativeX21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.positiveR12>([\s\S]*?)<\/cim:EquivalentBranch.positiveR12>/g, obj, "positiveR12", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.positiveR21>([\s\S]*?)<\/cim:EquivalentBranch.positiveR21>/g, obj, "positiveR21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.positiveX12>([\s\S]*?)<\/cim:EquivalentBranch.positiveX12>/g, obj, "positiveX12", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.positiveX21>([\s\S]*?)<\/cim:EquivalentBranch.positiveX21>/g, obj, "positiveX21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.r>([\s\S]*?)<\/cim:EquivalentBranch.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.r21>([\s\S]*?)<\/cim:EquivalentBranch.r21>/g, obj, "r21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.x>([\s\S]*?)<\/cim:EquivalentBranch.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.x21>([\s\S]*?)<\/cim:EquivalentBranch.x21>/g, obj, "x21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.zeroR12>([\s\S]*?)<\/cim:EquivalentBranch.zeroR12>/g, obj, "zeroR12", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.zeroR21>([\s\S]*?)<\/cim:EquivalentBranch.zeroR21>/g, obj, "zeroR21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.zeroX12>([\s\S]*?)<\/cim:EquivalentBranch.zeroX12>/g, obj, "zeroX12", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.zeroX21>([\s\S]*?)<\/cim:EquivalentBranch.zeroX21>/g, obj, "zeroX21", base.to_string, sub, context);
                var bucket = context.parsed.EquivalentBranch;
                if (null == bucket)
                   context.parsed.EquivalentBranch = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EquivalentEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "EquivalentBranch", "negativeR12", "negativeR12",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "negativeR21", "negativeR21",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "negativeX12", "negativeX12",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "negativeX21", "negativeX21",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "positiveR12", "positiveR12",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "positiveR21", "positiveR21",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "positiveX12", "positiveX12",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "positiveX21", "positiveX21",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "r", "r",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "r21", "r21",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "x", "x",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "x21", "x21",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "zeroR12", "zeroR12",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "zeroR21", "zeroR21",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "zeroX12", "zeroX12",  base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "zeroX21", "zeroX21",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EquivalentBranch_collapse" aria-expanded="true" aria-controls="EquivalentBranch_collapse" style="margin-left: 10px;">EquivalentBranch</a></legend>
                    <div id="EquivalentBranch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquivalentEquipment.prototype.template.call (this) +
                    `
                    {{#negativeR12}}<div><b>negativeR12</b>: {{negativeR12}}</div>{{/negativeR12}}
                    {{#negativeR21}}<div><b>negativeR21</b>: {{negativeR21}}</div>{{/negativeR21}}
                    {{#negativeX12}}<div><b>negativeX12</b>: {{negativeX12}}</div>{{/negativeX12}}
                    {{#negativeX21}}<div><b>negativeX21</b>: {{negativeX21}}</div>{{/negativeX21}}
                    {{#positiveR12}}<div><b>positiveR12</b>: {{positiveR12}}</div>{{/positiveR12}}
                    {{#positiveR21}}<div><b>positiveR21</b>: {{positiveR21}}</div>{{/positiveR21}}
                    {{#positiveX12}}<div><b>positiveX12</b>: {{positiveX12}}</div>{{/positiveX12}}
                    {{#positiveX21}}<div><b>positiveX21</b>: {{positiveX21}}</div>{{/positiveX21}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#r21}}<div><b>r21</b>: {{r21}}</div>{{/r21}}
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
                    {{#x21}}<div><b>x21</b>: {{x21}}</div>{{/x21}}
                    {{#zeroR12}}<div><b>zeroR12</b>: {{zeroR12}}</div>{{/zeroR12}}
                    {{#zeroR21}}<div><b>zeroR21</b>: {{zeroR21}}</div>{{/zeroR21}}
                    {{#zeroX12}}<div><b>zeroX12</b>: {{zeroX12}}</div>{{/zeroX12}}
                    {{#zeroX21}}<div><b>zeroX21</b>: {{zeroX21}}</div>{{/zeroX21}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EquivalentBranch_collapse" aria-expanded="true" aria-controls="{{id}}_EquivalentBranch_collapse" style="margin-left: 10px;">EquivalentBranch</a></legend>
                    <div id="{{id}}_EquivalentBranch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquivalentEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_negativeR12'>negativeR12: </label><div class='col-sm-8'><input id='{{id}}_negativeR12' class='form-control' type='text'{{#negativeR12}} value='{{negativeR12}}'{{/negativeR12}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_negativeR21'>negativeR21: </label><div class='col-sm-8'><input id='{{id}}_negativeR21' class='form-control' type='text'{{#negativeR21}} value='{{negativeR21}}'{{/negativeR21}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_negativeX12'>negativeX12: </label><div class='col-sm-8'><input id='{{id}}_negativeX12' class='form-control' type='text'{{#negativeX12}} value='{{negativeX12}}'{{/negativeX12}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_negativeX21'>negativeX21: </label><div class='col-sm-8'><input id='{{id}}_negativeX21' class='form-control' type='text'{{#negativeX21}} value='{{negativeX21}}'{{/negativeX21}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_positiveR12'>positiveR12: </label><div class='col-sm-8'><input id='{{id}}_positiveR12' class='form-control' type='text'{{#positiveR12}} value='{{positiveR12}}'{{/positiveR12}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_positiveR21'>positiveR21: </label><div class='col-sm-8'><input id='{{id}}_positiveR21' class='form-control' type='text'{{#positiveR21}} value='{{positiveR21}}'{{/positiveR21}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_positiveX12'>positiveX12: </label><div class='col-sm-8'><input id='{{id}}_positiveX12' class='form-control' type='text'{{#positiveX12}} value='{{positiveX12}}'{{/positiveX12}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_positiveX21'>positiveX21: </label><div class='col-sm-8'><input id='{{id}}_positiveX21' class='form-control' type='text'{{#positiveX21}} value='{{positiveX21}}'{{/positiveX21}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r21'>r21: </label><div class='col-sm-8'><input id='{{id}}_r21' class='form-control' type='text'{{#r21}} value='{{r21}}'{{/r21}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x21'>x21: </label><div class='col-sm-8'><input id='{{id}}_x21' class='form-control' type='text'{{#x21}} value='{{x21}}'{{/x21}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_zeroR12'>zeroR12: </label><div class='col-sm-8'><input id='{{id}}_zeroR12' class='form-control' type='text'{{#zeroR12}} value='{{zeroR12}}'{{/zeroR12}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_zeroR21'>zeroR21: </label><div class='col-sm-8'><input id='{{id}}_zeroR21' class='form-control' type='text'{{#zeroR21}} value='{{zeroR21}}'{{/zeroR21}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_zeroX12'>zeroX12: </label><div class='col-sm-8'><input id='{{id}}_zeroX12' class='form-control' type='text'{{#zeroX12}} value='{{zeroX12}}'{{/zeroX12}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_zeroX21'>zeroX21: </label><div class='col-sm-8'><input id='{{id}}_zeroX21' class='form-control' type='text'{{#zeroX21}} value='{{zeroX21}}'{{/zeroX21}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EquivalentBranch" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_negativeR12").value; if ("" != temp) obj.negativeR12 = temp;
                temp = document.getElementById (id + "_negativeR21").value; if ("" != temp) obj.negativeR21 = temp;
                temp = document.getElementById (id + "_negativeX12").value; if ("" != temp) obj.negativeX12 = temp;
                temp = document.getElementById (id + "_negativeX21").value; if ("" != temp) obj.negativeX21 = temp;
                temp = document.getElementById (id + "_positiveR12").value; if ("" != temp) obj.positiveR12 = temp;
                temp = document.getElementById (id + "_positiveR21").value; if ("" != temp) obj.positiveR21 = temp;
                temp = document.getElementById (id + "_positiveX12").value; if ("" != temp) obj.positiveX12 = temp;
                temp = document.getElementById (id + "_positiveX21").value; if ("" != temp) obj.positiveX21 = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_r21").value; if ("" != temp) obj.r21 = temp;
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;
                temp = document.getElementById (id + "_x21").value; if ("" != temp) obj.x21 = temp;
                temp = document.getElementById (id + "_zeroR12").value; if ("" != temp) obj.zeroR12 = temp;
                temp = document.getElementById (id + "_zeroR21").value; if ("" != temp) obj.zeroR21 = temp;
                temp = document.getElementById (id + "_zeroX12").value; if ("" != temp) obj.zeroX12 = temp;
                temp = document.getElementById (id + "_zeroX21").value; if ("" != temp) obj.zeroX21 = temp;

                return (obj);
            }
        }

        /**
         * This class represents equivalent injections (generation or load).
         *
         * Voltage regulation is allowed only at the point of connection.
         *
         */
        class EquivalentInjection extends EquivalentEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EquivalentInjection;
                if (null == bucket)
                   cim_data.EquivalentInjection = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EquivalentInjection[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EquivalentEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "EquivalentInjection";
                base.parse_element (/<cim:EquivalentInjection.maxP>([\s\S]*?)<\/cim:EquivalentInjection.maxP>/g, obj, "maxP", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.maxQ>([\s\S]*?)<\/cim:EquivalentInjection.maxQ>/g, obj, "maxQ", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.minP>([\s\S]*?)<\/cim:EquivalentInjection.minP>/g, obj, "minP", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.minQ>([\s\S]*?)<\/cim:EquivalentInjection.minQ>/g, obj, "minQ", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.r>([\s\S]*?)<\/cim:EquivalentInjection.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.r0>([\s\S]*?)<\/cim:EquivalentInjection.r0>/g, obj, "r0", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.r2>([\s\S]*?)<\/cim:EquivalentInjection.r2>/g, obj, "r2", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.regulationCapability>([\s\S]*?)<\/cim:EquivalentInjection.regulationCapability>/g, obj, "regulationCapability", base.to_boolean, sub, context);
                base.parse_element (/<cim:EquivalentInjection.regulationStatus>([\s\S]*?)<\/cim:EquivalentInjection.regulationStatus>/g, obj, "regulationStatus", base.to_boolean, sub, context);
                base.parse_element (/<cim:EquivalentInjection.regulationTarget>([\s\S]*?)<\/cim:EquivalentInjection.regulationTarget>/g, obj, "regulationTarget", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.x>([\s\S]*?)<\/cim:EquivalentInjection.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.x0>([\s\S]*?)<\/cim:EquivalentInjection.x0>/g, obj, "x0", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.x2>([\s\S]*?)<\/cim:EquivalentInjection.x2>/g, obj, "x2", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.p>([\s\S]*?)<\/cim:EquivalentInjection.p>/g, obj, "p", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.q>([\s\S]*?)<\/cim:EquivalentInjection.q>/g, obj, "q", base.to_string, sub, context);
                base.parse_attribute (/<cim:EquivalentInjection.ReactiveCapabilityCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReactiveCapabilityCurve", sub, context);
                var bucket = context.parsed.EquivalentInjection;
                if (null == bucket)
                   context.parsed.EquivalentInjection = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EquivalentEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "EquivalentInjection", "maxP", "maxP",  base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "maxQ", "maxQ",  base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "minP", "minP",  base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "minQ", "minQ",  base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "r", "r",  base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "r0", "r0",  base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "r2", "r2",  base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "regulationCapability", "regulationCapability",  base.from_boolean, fields);
                base.export_element (obj, "EquivalentInjection", "regulationStatus", "regulationStatus",  base.from_boolean, fields);
                base.export_element (obj, "EquivalentInjection", "regulationTarget", "regulationTarget",  base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "x", "x",  base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "x0", "x0",  base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "x2", "x2",  base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "p", "p",  base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "q", "q",  base.from_string, fields);
                base.export_attribute (obj, "EquivalentInjection", "ReactiveCapabilityCurve", "ReactiveCapabilityCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EquivalentInjection_collapse" aria-expanded="true" aria-controls="EquivalentInjection_collapse" style="margin-left: 10px;">EquivalentInjection</a></legend>
                    <div id="EquivalentInjection_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquivalentEquipment.prototype.template.call (this) +
                    `
                    {{#maxP}}<div><b>maxP</b>: {{maxP}}</div>{{/maxP}}
                    {{#maxQ}}<div><b>maxQ</b>: {{maxQ}}</div>{{/maxQ}}
                    {{#minP}}<div><b>minP</b>: {{minP}}</div>{{/minP}}
                    {{#minQ}}<div><b>minQ</b>: {{minQ}}</div>{{/minQ}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#r0}}<div><b>r0</b>: {{r0}}</div>{{/r0}}
                    {{#r2}}<div><b>r2</b>: {{r2}}</div>{{/r2}}
                    {{#regulationCapability}}<div><b>regulationCapability</b>: {{regulationCapability}}</div>{{/regulationCapability}}
                    {{#regulationStatus}}<div><b>regulationStatus</b>: {{regulationStatus}}</div>{{/regulationStatus}}
                    {{#regulationTarget}}<div><b>regulationTarget</b>: {{regulationTarget}}</div>{{/regulationTarget}}
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
                    {{#x0}}<div><b>x0</b>: {{x0}}</div>{{/x0}}
                    {{#x2}}<div><b>x2</b>: {{x2}}</div>{{/x2}}
                    {{#p}}<div><b>p</b>: {{p}}</div>{{/p}}
                    {{#q}}<div><b>q</b>: {{q}}</div>{{/q}}
                    {{#ReactiveCapabilityCurve}}<div><b>ReactiveCapabilityCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReactiveCapabilityCurve}}&quot;);})'>{{ReactiveCapabilityCurve}}</a></div>{{/ReactiveCapabilityCurve}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EquivalentInjection_collapse" aria-expanded="true" aria-controls="{{id}}_EquivalentInjection_collapse" style="margin-left: 10px;">EquivalentInjection</a></legend>
                    <div id="{{id}}_EquivalentInjection_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EquivalentEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxP'>maxP: </label><div class='col-sm-8'><input id='{{id}}_maxP' class='form-control' type='text'{{#maxP}} value='{{maxP}}'{{/maxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxQ'>maxQ: </label><div class='col-sm-8'><input id='{{id}}_maxQ' class='form-control' type='text'{{#maxQ}} value='{{maxQ}}'{{/maxQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minP'>minP: </label><div class='col-sm-8'><input id='{{id}}_minP' class='form-control' type='text'{{#minP}} value='{{minP}}'{{/minP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minQ'>minQ: </label><div class='col-sm-8'><input id='{{id}}_minQ' class='form-control' type='text'{{#minQ}} value='{{minQ}}'{{/minQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r0'>r0: </label><div class='col-sm-8'><input id='{{id}}_r0' class='form-control' type='text'{{#r0}} value='{{r0}}'{{/r0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r2'>r2: </label><div class='col-sm-8'><input id='{{id}}_r2' class='form-control' type='text'{{#r2}} value='{{r2}}'{{/r2}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_regulationCapability'>regulationCapability: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_regulationCapability' class='form-check-input' type='checkbox'{{#regulationCapability}} checked{{/regulationCapability}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_regulationStatus'>regulationStatus: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_regulationStatus' class='form-check-input' type='checkbox'{{#regulationStatus}} checked{{/regulationStatus}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_regulationTarget'>regulationTarget: </label><div class='col-sm-8'><input id='{{id}}_regulationTarget' class='form-control' type='text'{{#regulationTarget}} value='{{regulationTarget}}'{{/regulationTarget}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x0'>x0: </label><div class='col-sm-8'><input id='{{id}}_x0' class='form-control' type='text'{{#x0}} value='{{x0}}'{{/x0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x2'>x2: </label><div class='col-sm-8'><input id='{{id}}_x2' class='form-control' type='text'{{#x2}} value='{{x2}}'{{/x2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_p'>p: </label><div class='col-sm-8'><input id='{{id}}_p' class='form-control' type='text'{{#p}} value='{{p}}'{{/p}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_q'>q: </label><div class='col-sm-8'><input id='{{id}}_q' class='form-control' type='text'{{#q}} value='{{q}}'{{/q}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReactiveCapabilityCurve'>ReactiveCapabilityCurve: </label><div class='col-sm-8'><input id='{{id}}_ReactiveCapabilityCurve' class='form-control' type='text'{{#ReactiveCapabilityCurve}} value='{{ReactiveCapabilityCurve}}'{{/ReactiveCapabilityCurve}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EquivalentInjection" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_maxP").value; if ("" != temp) obj.maxP = temp;
                temp = document.getElementById (id + "_maxQ").value; if ("" != temp) obj.maxQ = temp;
                temp = document.getElementById (id + "_minP").value; if ("" != temp) obj.minP = temp;
                temp = document.getElementById (id + "_minQ").value; if ("" != temp) obj.minQ = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_r0").value; if ("" != temp) obj.r0 = temp;
                temp = document.getElementById (id + "_r2").value; if ("" != temp) obj.r2 = temp;
                temp = document.getElementById (id + "_regulationCapability").checked; if (temp) obj.regulationCapability = true;
                temp = document.getElementById (id + "_regulationStatus").checked; if (temp) obj.regulationStatus = true;
                temp = document.getElementById (id + "_regulationTarget").value; if ("" != temp) obj.regulationTarget = temp;
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;
                temp = document.getElementById (id + "_x0").value; if ("" != temp) obj.x0 = temp;
                temp = document.getElementById (id + "_x2").value; if ("" != temp) obj.x2 = temp;
                temp = document.getElementById (id + "_p").value; if ("" != temp) obj.p = temp;
                temp = document.getElementById (id + "_q").value; if ("" != temp) obj.q = temp;
                temp = document.getElementById (id + "_ReactiveCapabilityCurve").value; if ("" != temp) obj.ReactiveCapabilityCurve = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReactiveCapabilityCurve", "0..1", "0..*", "ReactiveCapabilityCurve", "EquivalentInjection"]
                        ]
                    )
                );
            }
        }

        return (
            {
                EquivalentEquipment: EquivalentEquipment,
                EquivalentBranch: EquivalentBranch,
                EquivalentNetwork: EquivalentNetwork,
                EquivalentShunt: EquivalentShunt,
                EquivalentInjection: EquivalentInjection
            }
        );
    }
);