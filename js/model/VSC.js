define
(
    ["model/base", "model/HVDCDynamics"],
    function (base, HVDCDynamics)
    {
        class Qlimiter extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Qlimiter;
                if (null == bucket)
                   cim_data.Qlimiter = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Qlimiter[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Qlimiter";
                base.parse_attribute (/<cim:Qlimiter.Delay\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Delay", sub, context);
                base.parse_attribute (/<cim:Qlimiter.VSCtype1\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VSCtype1", sub, context);
                let bucket = context.parsed.Qlimiter;
                if (null == bucket)
                   context.parsed.Qlimiter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "Qlimiter", "Delay", "Delay", fields);
                base.export_attribute (obj, "Qlimiter", "VSCtype1", "VSCtype1", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Qlimiter_collapse" aria-expanded="true" aria-controls="Qlimiter_collapse" style="margin-left: 10px;">Qlimiter</a></legend>
                    <div id="Qlimiter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Delay}}<div><b>Delay</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Delay}}");}); return false;'>{{Delay}}</a></div>{{/Delay}}
                    {{#VSCtype1}}<div><b>VSCtype1</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{VSCtype1}}");}); return false;'>{{VSCtype1}}</a></div>{{/VSCtype1}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Qlimiter_collapse" aria-expanded="true" aria-controls="{{id}}_Qlimiter_collapse" style="margin-left: 10px;">Qlimiter</a></legend>
                    <div id="{{id}}_Qlimiter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Delay'>Delay: </label><div class='col-sm-8'><input id='{{id}}_Delay' class='form-control' type='text'{{#Delay}} value='{{Delay}}'{{/Delay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VSCtype1'>VSCtype1: </label><div class='col-sm-8'><input id='{{id}}_VSCtype1' class='form-control' type='text'{{#VSCtype1}} value='{{VSCtype1}}'{{/VSCtype1}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Qlimiter" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Delay").value; if ("" !== temp) obj["Delay"] = temp;
                temp = document.getElementById (id + "_VSCtype1").value; if ("" !== temp) obj["VSCtype1"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Delay", "1", "0..1", "Delay", "Qlimiter"],
                            ["VSCtype1", "0..1", "1", "VSCtype1", "Qlimiter"]
                        ]
                    )
                );
            }
        }

        class PFmode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PFmode;
                if (null == bucket)
                   cim_data.PFmode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PFmode[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PFmode";
                base.parse_attribute (/<cim:PFmode.Delay\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Delay", sub, context);
                base.parse_attribute (/<cim:PFmode.VSCtype1\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VSCtype1", sub, context);
                let bucket = context.parsed.PFmode;
                if (null == bucket)
                   context.parsed.PFmode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "PFmode", "Delay", "Delay", fields);
                base.export_attribute (obj, "PFmode", "VSCtype1", "VSCtype1", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PFmode_collapse" aria-expanded="true" aria-controls="PFmode_collapse" style="margin-left: 10px;">PFmode</a></legend>
                    <div id="PFmode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Delay}}<div><b>Delay</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Delay}}");}); return false;'>{{Delay}}</a></div>{{/Delay}}
                    {{#VSCtype1}}<div><b>VSCtype1</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{VSCtype1}}");}); return false;'>{{VSCtype1}}</a></div>{{/VSCtype1}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PFmode_collapse" aria-expanded="true" aria-controls="{{id}}_PFmode_collapse" style="margin-left: 10px;">PFmode</a></legend>
                    <div id="{{id}}_PFmode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Delay'>Delay: </label><div class='col-sm-8'><input id='{{id}}_Delay' class='form-control' type='text'{{#Delay}} value='{{Delay}}'{{/Delay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VSCtype1'>VSCtype1: </label><div class='col-sm-8'><input id='{{id}}_VSCtype1' class='form-control' type='text'{{#VSCtype1}} value='{{VSCtype1}}'{{/VSCtype1}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PFmode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Delay").value; if ("" !== temp) obj["Delay"] = temp;
                temp = document.getElementById (id + "_VSCtype1").value; if ("" !== temp) obj["VSCtype1"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Delay", "1", "0..1", "Delay", "PFmode"],
                            ["VSCtype1", "0..1", "1", "VSCtype1", "PFmodel"]
                        ]
                    )
                );
            }
        }

        class Umode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Umode;
                if (null == bucket)
                   cim_data.Umode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Umode[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Umode";
                base.parse_attribute (/<cim:Umode.Delay\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Delay", sub, context);
                base.parse_attribute (/<cim:Umode.VSCtype1\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VSCtype1", sub, context);
                let bucket = context.parsed.Umode;
                if (null == bucket)
                   context.parsed.Umode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "Umode", "Delay", "Delay", fields);
                base.export_attribute (obj, "Umode", "VSCtype1", "VSCtype1", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Umode_collapse" aria-expanded="true" aria-controls="Umode_collapse" style="margin-left: 10px;">Umode</a></legend>
                    <div id="Umode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Delay}}<div><b>Delay</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Delay}}");}); return false;'>{{Delay}}</a></div>{{/Delay}}
                    {{#VSCtype1}}<div><b>VSCtype1</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{VSCtype1}}");}); return false;'>{{VSCtype1}}</a></div>{{/VSCtype1}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Umode_collapse" aria-expanded="true" aria-controls="{{id}}_Umode_collapse" style="margin-left: 10px;">Umode</a></legend>
                    <div id="{{id}}_Umode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Delay'>Delay: </label><div class='col-sm-8'><input id='{{id}}_Delay' class='form-control' type='text'{{#Delay}} value='{{Delay}}'{{/Delay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VSCtype1'>VSCtype1: </label><div class='col-sm-8'><input id='{{id}}_VSCtype1' class='form-control' type='text'{{#VSCtype1}} value='{{VSCtype1}}'{{/VSCtype1}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Umode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Delay").value; if ("" !== temp) obj["Delay"] = temp;
                temp = document.getElementById (id + "_VSCtype1").value; if ("" !== temp) obj["VSCtype1"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Delay", "1", "0..1", "Delay", "Umode"],
                            ["VSCtype1", "0..1", "1", "VSCtype1", "Umode"]
                        ]
                    )
                );
            }
        }

        class Qregulator extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Qregulator;
                if (null == bucket)
                   cim_data.Qregulator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Qregulator[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Qregulator";
                base.parse_attribute (/<cim:Qregulator.Delay\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Delay", sub, context);
                base.parse_attribute (/<cim:Qregulator.VSCtype1\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VSCtype1", sub, context);
                base.parse_attributes (/<cim:Qregulator.HVDClookUpTable\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HVDClookUpTable", sub, context);
                let bucket = context.parsed.Qregulator;
                if (null == bucket)
                   context.parsed.Qregulator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "Qregulator", "Delay", "Delay", fields);
                base.export_attribute (obj, "Qregulator", "VSCtype1", "VSCtype1", fields);
                base.export_attributes (obj, "Qregulator", "HVDClookUpTable", "HVDClookUpTable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Qregulator_collapse" aria-expanded="true" aria-controls="Qregulator_collapse" style="margin-left: 10px;">Qregulator</a></legend>
                    <div id="Qregulator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Delay}}<div><b>Delay</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Delay}}");}); return false;'>{{Delay}}</a></div>{{/Delay}}
                    {{#VSCtype1}}<div><b>VSCtype1</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{VSCtype1}}");}); return false;'>{{VSCtype1}}</a></div>{{/VSCtype1}}
                    {{#HVDClookUpTable}}<div><b>HVDClookUpTable</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/HVDClookUpTable}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["HVDClookUpTable"]) obj["HVDClookUpTable_string"] = obj["HVDClookUpTable"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["HVDClookUpTable_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Qregulator_collapse" aria-expanded="true" aria-controls="{{id}}_Qregulator_collapse" style="margin-left: 10px;">Qregulator</a></legend>
                    <div id="{{id}}_Qregulator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Delay'>Delay: </label><div class='col-sm-8'><input id='{{id}}_Delay' class='form-control' type='text'{{#Delay}} value='{{Delay}}'{{/Delay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VSCtype1'>VSCtype1: </label><div class='col-sm-8'><input id='{{id}}_VSCtype1' class='form-control' type='text'{{#VSCtype1}} value='{{VSCtype1}}'{{/VSCtype1}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Qregulator" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Delay").value; if ("" !== temp) obj["Delay"] = temp;
                temp = document.getElementById (id + "_VSCtype1").value; if ("" !== temp) obj["VSCtype1"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Delay", "1", "0..1", "Delay", "Qregulator"],
                            ["VSCtype1", "0..1", "1", "VSCtype1", "Qregulator"],
                            ["HVDClookUpTable", "1..*", "0..1", "HVDCLookUpTable", "Qregulator"]
                        ]
                    )
                );
            }
        }

        class BlockingFunction extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BlockingFunction;
                if (null == bucket)
                   cim_data.BlockingFunction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BlockingFunction[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BlockingFunction";
                base.parse_attribute (/<cim:BlockingFunction.VSCtype1\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VSCtype1", sub, context);
                base.parse_attribute (/<cim:BlockingFunction.Delay\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Delay", sub, context);
                let bucket = context.parsed.BlockingFunction;
                if (null == bucket)
                   context.parsed.BlockingFunction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "BlockingFunction", "VSCtype1", "VSCtype1", fields);
                base.export_attribute (obj, "BlockingFunction", "Delay", "Delay", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BlockingFunction_collapse" aria-expanded="true" aria-controls="BlockingFunction_collapse" style="margin-left: 10px;">BlockingFunction</a></legend>
                    <div id="BlockingFunction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#VSCtype1}}<div><b>VSCtype1</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{VSCtype1}}");}); return false;'>{{VSCtype1}}</a></div>{{/VSCtype1}}
                    {{#Delay}}<div><b>Delay</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Delay}}");}); return false;'>{{Delay}}</a></div>{{/Delay}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BlockingFunction_collapse" aria-expanded="true" aria-controls="{{id}}_BlockingFunction_collapse" style="margin-left: 10px;">BlockingFunction</a></legend>
                    <div id="{{id}}_BlockingFunction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VSCtype1'>VSCtype1: </label><div class='col-sm-8'><input id='{{id}}_VSCtype1' class='form-control' type='text'{{#VSCtype1}} value='{{VSCtype1}}'{{/VSCtype1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Delay'>Delay: </label><div class='col-sm-8'><input id='{{id}}_Delay' class='form-control' type='text'{{#Delay}} value='{{Delay}}'{{/Delay}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BlockingFunction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_VSCtype1").value; if ("" !== temp) obj["VSCtype1"] = temp;
                temp = document.getElementById (id + "_Delay").value; if ("" !== temp) obj["Delay"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["VSCtype1", "0..1", "1", "VSCtype1", "BlockingFunction"],
                            ["Delay", "1", "0..1", "Delay", "BlockingFunction"]
                        ]
                    )
                );
            }
        }

        class Qmode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Qmode;
                if (null == bucket)
                   cim_data.Qmode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Qmode[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Qmode";
                base.parse_attribute (/<cim:Qmode.Delay\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Delay", sub, context);
                base.parse_attribute (/<cim:Qmode.VSCtype1\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VSCtype1", sub, context);
                let bucket = context.parsed.Qmode;
                if (null == bucket)
                   context.parsed.Qmode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "Qmode", "Delay", "Delay", fields);
                base.export_attribute (obj, "Qmode", "VSCtype1", "VSCtype1", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Qmode_collapse" aria-expanded="true" aria-controls="Qmode_collapse" style="margin-left: 10px;">Qmode</a></legend>
                    <div id="Qmode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Delay}}<div><b>Delay</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Delay}}");}); return false;'>{{Delay}}</a></div>{{/Delay}}
                    {{#VSCtype1}}<div><b>VSCtype1</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{VSCtype1}}");}); return false;'>{{VSCtype1}}</a></div>{{/VSCtype1}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Qmode_collapse" aria-expanded="true" aria-controls="{{id}}_Qmode_collapse" style="margin-left: 10px;">Qmode</a></legend>
                    <div id="{{id}}_Qmode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Delay'>Delay: </label><div class='col-sm-8'><input id='{{id}}_Delay' class='form-control' type='text'{{#Delay}} value='{{Delay}}'{{/Delay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VSCtype1'>VSCtype1: </label><div class='col-sm-8'><input id='{{id}}_VSCtype1' class='form-control' type='text'{{#VSCtype1}} value='{{VSCtype1}}'{{/VSCtype1}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Qmode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Delay").value; if ("" !== temp) obj["Delay"] = temp;
                temp = document.getElementById (id + "_VSCtype1").value; if ("" !== temp) obj["VSCtype1"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Delay", "1", "0..1", "Delay", "Qmode"],
                            ["VSCtype1", "0..1", "1", "VSCtype1", "Qmode"]
                        ]
                    )
                );
            }
        }

        /**
         * DC voltage control used for voltage regulation.
         *
         */
        class DCvoltageControl extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCvoltageControl;
                if (null == bucket)
                   cim_data.DCvoltageControl = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCvoltageControl[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DCvoltageControl";
                base.parse_element (/<cim:DCvoltageControl.kivdc>([\s\S]*?)<\/cim:DCvoltageControl.kivdc>/g, obj, "kivdc", base.to_string, sub, context);
                base.parse_element (/<cim:DCvoltageControl.kpvdc>([\s\S]*?)<\/cim:DCvoltageControl.kpvdc>/g, obj, "kpvdc", base.to_string, sub, context);
                base.parse_element (/<cim:DCvoltageControl.vdcmax>([\s\S]*?)<\/cim:DCvoltageControl.vdcmax>/g, obj, "vdcmax", base.to_string, sub, context);
                base.parse_element (/<cim:DCvoltageControl.vdcmin>([\s\S]*?)<\/cim:DCvoltageControl.vdcmin>/g, obj, "vdcmin", base.to_string, sub, context);
                base.parse_attribute (/<cim:DCvoltageControl.Delay\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Delay", sub, context);
                base.parse_attribute (/<cim:DCvoltageControl.VSCtype1\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VSCtype1", sub, context);
                let bucket = context.parsed.DCvoltageControl;
                if (null == bucket)
                   context.parsed.DCvoltageControl = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "DCvoltageControl", "kivdc", "kivdc",  base.from_string, fields);
                base.export_element (obj, "DCvoltageControl", "kpvdc", "kpvdc",  base.from_string, fields);
                base.export_element (obj, "DCvoltageControl", "vdcmax", "vdcmax",  base.from_string, fields);
                base.export_element (obj, "DCvoltageControl", "vdcmin", "vdcmin",  base.from_string, fields);
                base.export_attribute (obj, "DCvoltageControl", "Delay", "Delay", fields);
                base.export_attribute (obj, "DCvoltageControl", "VSCtype1", "VSCtype1", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCvoltageControl_collapse" aria-expanded="true" aria-controls="DCvoltageControl_collapse" style="margin-left: 10px;">DCvoltageControl</a></legend>
                    <div id="DCvoltageControl_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#kivdc}}<div><b>kivdc</b>: {{kivdc}}</div>{{/kivdc}}
                    {{#kpvdc}}<div><b>kpvdc</b>: {{kpvdc}}</div>{{/kpvdc}}
                    {{#vdcmax}}<div><b>vdcmax</b>: {{vdcmax}}</div>{{/vdcmax}}
                    {{#vdcmin}}<div><b>vdcmin</b>: {{vdcmin}}</div>{{/vdcmin}}
                    {{#Delay}}<div><b>Delay</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Delay}}");}); return false;'>{{Delay}}</a></div>{{/Delay}}
                    {{#VSCtype1}}<div><b>VSCtype1</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{VSCtype1}}");}); return false;'>{{VSCtype1}}</a></div>{{/VSCtype1}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCvoltageControl_collapse" aria-expanded="true" aria-controls="{{id}}_DCvoltageControl_collapse" style="margin-left: 10px;">DCvoltageControl</a></legend>
                    <div id="{{id}}_DCvoltageControl_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kivdc'>kivdc: </label><div class='col-sm-8'><input id='{{id}}_kivdc' class='form-control' type='text'{{#kivdc}} value='{{kivdc}}'{{/kivdc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpvdc'>kpvdc: </label><div class='col-sm-8'><input id='{{id}}_kpvdc' class='form-control' type='text'{{#kpvdc}} value='{{kpvdc}}'{{/kpvdc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vdcmax'>vdcmax: </label><div class='col-sm-8'><input id='{{id}}_vdcmax' class='form-control' type='text'{{#vdcmax}} value='{{vdcmax}}'{{/vdcmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vdcmin'>vdcmin: </label><div class='col-sm-8'><input id='{{id}}_vdcmin' class='form-control' type='text'{{#vdcmin}} value='{{vdcmin}}'{{/vdcmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Delay'>Delay: </label><div class='col-sm-8'><input id='{{id}}_Delay' class='form-control' type='text'{{#Delay}} value='{{Delay}}'{{/Delay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VSCtype1'>VSCtype1: </label><div class='col-sm-8'><input id='{{id}}_VSCtype1' class='form-control' type='text'{{#VSCtype1}} value='{{VSCtype1}}'{{/VSCtype1}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DCvoltageControl" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kivdc").value; if ("" !== temp) obj["kivdc"] = temp;
                temp = document.getElementById (id + "_kpvdc").value; if ("" !== temp) obj["kpvdc"] = temp;
                temp = document.getElementById (id + "_vdcmax").value; if ("" !== temp) obj["vdcmax"] = temp;
                temp = document.getElementById (id + "_vdcmin").value; if ("" !== temp) obj["vdcmin"] = temp;
                temp = document.getElementById (id + "_Delay").value; if ("" !== temp) obj["Delay"] = temp;
                temp = document.getElementById (id + "_VSCtype1").value; if ("" !== temp) obj["VSCtype1"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Delay", "1", "0..1", "Delay", "DCvoltageControl"],
                            ["VSCtype1", "0..1", "1", "VSCtype1", "DCvoltageControl"]
                        ]
                    )
                );
            }
        }

        class Pcontrol extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Pcontrol;
                if (null == bucket)
                   cim_data.Pcontrol = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Pcontrol[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Pcontrol";
                base.parse_attribute (/<cim:Pcontrol.VSCtype1\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VSCtype1", sub, context);
                base.parse_attribute (/<cim:Pcontrol.Delay\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Delay", sub, context);
                let bucket = context.parsed.Pcontrol;
                if (null == bucket)
                   context.parsed.Pcontrol = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "Pcontrol", "VSCtype1", "VSCtype1", fields);
                base.export_attribute (obj, "Pcontrol", "Delay", "Delay", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Pcontrol_collapse" aria-expanded="true" aria-controls="Pcontrol_collapse" style="margin-left: 10px;">Pcontrol</a></legend>
                    <div id="Pcontrol_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#VSCtype1}}<div><b>VSCtype1</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{VSCtype1}}");}); return false;'>{{VSCtype1}}</a></div>{{/VSCtype1}}
                    {{#Delay}}<div><b>Delay</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Delay}}");}); return false;'>{{Delay}}</a></div>{{/Delay}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Pcontrol_collapse" aria-expanded="true" aria-controls="{{id}}_Pcontrol_collapse" style="margin-left: 10px;">Pcontrol</a></legend>
                    <div id="{{id}}_Pcontrol_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VSCtype1'>VSCtype1: </label><div class='col-sm-8'><input id='{{id}}_VSCtype1' class='form-control' type='text'{{#VSCtype1}} value='{{VSCtype1}}'{{/VSCtype1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Delay'>Delay: </label><div class='col-sm-8'><input id='{{id}}_Delay' class='form-control' type='text'{{#Delay}} value='{{Delay}}'{{/Delay}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Pcontrol" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_VSCtype1").value; if ("" !== temp) obj["VSCtype1"] = temp;
                temp = document.getElementById (id + "_Delay").value; if ("" !== temp) obj["Delay"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["VSCtype1", "0..1", "1", "VSCtype1", "Pcontrol"],
                            ["Delay", "1", "0..1", "Delay", "Pcontrol"]
                        ]
                    )
                );
            }
        }

        class VSCtype1 extends HVDCDynamics.VSCDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.VSCtype1;
                if (null == bucket)
                   cim_data.VSCtype1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VSCtype1[obj.id];
            }

            parse (context, sub)
            {
                let obj = HVDCDynamics.VSCDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "VSCtype1";
                base.parse_attribute (/<cim:VSCtype1.Pcontrol\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Pcontrol", sub, context);
                base.parse_attribute (/<cim:VSCtype1.Qlimiter\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Qlimiter", sub, context);
                base.parse_attribute (/<cim:VSCtype1.BlockingFunction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BlockingFunction", sub, context);
                base.parse_attribute (/<cim:VSCtype1.Qregulator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Qregulator", sub, context);
                base.parse_attribute (/<cim:VSCtype1.Umode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Umode", sub, context);
                base.parse_attribute (/<cim:VSCtype1.Qmode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Qmode", sub, context);
                base.parse_attribute (/<cim:VSCtype1.PFmodel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PFmodel", sub, context);
                base.parse_attribute (/<cim:VSCtype1.DCvoltageControl\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCvoltageControl", sub, context);
                let bucket = context.parsed.VSCtype1;
                if (null == bucket)
                   context.parsed.VSCtype1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = HVDCDynamics.VSCDynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "VSCtype1", "Pcontrol", "Pcontrol", fields);
                base.export_attribute (obj, "VSCtype1", "Qlimiter", "Qlimiter", fields);
                base.export_attribute (obj, "VSCtype1", "BlockingFunction", "BlockingFunction", fields);
                base.export_attribute (obj, "VSCtype1", "Qregulator", "Qregulator", fields);
                base.export_attribute (obj, "VSCtype1", "Umode", "Umode", fields);
                base.export_attribute (obj, "VSCtype1", "Qmode", "Qmode", fields);
                base.export_attribute (obj, "VSCtype1", "PFmodel", "PFmodel", fields);
                base.export_attribute (obj, "VSCtype1", "DCvoltageControl", "DCvoltageControl", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#VSCtype1_collapse" aria-expanded="true" aria-controls="VSCtype1_collapse" style="margin-left: 10px;">VSCtype1</a></legend>
                    <div id="VSCtype1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HVDCDynamics.VSCDynamics.prototype.template.call (this) +
                    `
                    {{#Pcontrol}}<div><b>Pcontrol</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Pcontrol}}");}); return false;'>{{Pcontrol}}</a></div>{{/Pcontrol}}
                    {{#Qlimiter}}<div><b>Qlimiter</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Qlimiter}}");}); return false;'>{{Qlimiter}}</a></div>{{/Qlimiter}}
                    {{#BlockingFunction}}<div><b>BlockingFunction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BlockingFunction}}");}); return false;'>{{BlockingFunction}}</a></div>{{/BlockingFunction}}
                    {{#Qregulator}}<div><b>Qregulator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Qregulator}}");}); return false;'>{{Qregulator}}</a></div>{{/Qregulator}}
                    {{#Umode}}<div><b>Umode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Umode}}");}); return false;'>{{Umode}}</a></div>{{/Umode}}
                    {{#Qmode}}<div><b>Qmode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Qmode}}");}); return false;'>{{Qmode}}</a></div>{{/Qmode}}
                    {{#PFmodel}}<div><b>PFmodel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PFmodel}}");}); return false;'>{{PFmodel}}</a></div>{{/PFmodel}}
                    {{#DCvoltageControl}}<div><b>DCvoltageControl</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DCvoltageControl}}");}); return false;'>{{DCvoltageControl}}</a></div>{{/DCvoltageControl}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_VSCtype1_collapse" aria-expanded="true" aria-controls="{{id}}_VSCtype1_collapse" style="margin-left: 10px;">VSCtype1</a></legend>
                    <div id="{{id}}_VSCtype1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HVDCDynamics.VSCDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Pcontrol'>Pcontrol: </label><div class='col-sm-8'><input id='{{id}}_Pcontrol' class='form-control' type='text'{{#Pcontrol}} value='{{Pcontrol}}'{{/Pcontrol}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Qlimiter'>Qlimiter: </label><div class='col-sm-8'><input id='{{id}}_Qlimiter' class='form-control' type='text'{{#Qlimiter}} value='{{Qlimiter}}'{{/Qlimiter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BlockingFunction'>BlockingFunction: </label><div class='col-sm-8'><input id='{{id}}_BlockingFunction' class='form-control' type='text'{{#BlockingFunction}} value='{{BlockingFunction}}'{{/BlockingFunction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Qregulator'>Qregulator: </label><div class='col-sm-8'><input id='{{id}}_Qregulator' class='form-control' type='text'{{#Qregulator}} value='{{Qregulator}}'{{/Qregulator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Umode'>Umode: </label><div class='col-sm-8'><input id='{{id}}_Umode' class='form-control' type='text'{{#Umode}} value='{{Umode}}'{{/Umode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Qmode'>Qmode: </label><div class='col-sm-8'><input id='{{id}}_Qmode' class='form-control' type='text'{{#Qmode}} value='{{Qmode}}'{{/Qmode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PFmodel'>PFmodel: </label><div class='col-sm-8'><input id='{{id}}_PFmodel' class='form-control' type='text'{{#PFmodel}} value='{{PFmodel}}'{{/PFmodel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DCvoltageControl'>DCvoltageControl: </label><div class='col-sm-8'><input id='{{id}}_DCvoltageControl' class='form-control' type='text'{{#DCvoltageControl}} value='{{DCvoltageControl}}'{{/DCvoltageControl}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "VSCtype1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Pcontrol").value; if ("" !== temp) obj["Pcontrol"] = temp;
                temp = document.getElementById (id + "_Qlimiter").value; if ("" !== temp) obj["Qlimiter"] = temp;
                temp = document.getElementById (id + "_BlockingFunction").value; if ("" !== temp) obj["BlockingFunction"] = temp;
                temp = document.getElementById (id + "_Qregulator").value; if ("" !== temp) obj["Qregulator"] = temp;
                temp = document.getElementById (id + "_Umode").value; if ("" !== temp) obj["Umode"] = temp;
                temp = document.getElementById (id + "_Qmode").value; if ("" !== temp) obj["Qmode"] = temp;
                temp = document.getElementById (id + "_PFmodel").value; if ("" !== temp) obj["PFmodel"] = temp;
                temp = document.getElementById (id + "_DCvoltageControl").value; if ("" !== temp) obj["DCvoltageControl"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Pcontrol", "1", "0..1", "Pcontrol", "VSCtype1"],
                            ["Qlimiter", "1", "0..1", "Qlimiter", "VSCtype1"],
                            ["BlockingFunction", "1", "0..1", "BlockingFunction", "VSCtype1"],
                            ["Qregulator", "1", "0..1", "Qregulator", "VSCtype1"],
                            ["Umode", "1", "0..1", "Umode", "VSCtype1"],
                            ["Qmode", "1", "0..1", "Qmode", "VSCtype1"],
                            ["PFmodel", "1", "0..1", "PFmode", "VSCtype1"],
                            ["DCvoltageControl", "1", "0..1", "DCvoltageControl", "VSCtype1"]
                        ]
                    )
                );
            }
        }

        return (
            {
                DCvoltageControl: DCvoltageControl,
                Qmode: Qmode,
                Qlimiter: Qlimiter,
                Umode: Umode,
                Pcontrol: Pcontrol,
                VSCtype1: VSCtype1,
                BlockingFunction: BlockingFunction,
                PFmode: PFmode,
                Qregulator: Qregulator
            }
        );
    }
);