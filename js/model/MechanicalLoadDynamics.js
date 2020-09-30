define
(
    ["model/base", "model/StandardModels"],
    /**
     * A mechanical load represents the variation in a motor's shaft torque or power as a function of shaft speed.
     *
     */
    function (base, StandardModels)
    {
        /**
         * Mechanical load function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class MechanicalLoadDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MechanicalLoadDynamics;
                if (null == bucket)
                   cim_data.MechanicalLoadDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MechanicalLoadDynamics[obj.id];
            }

            parse (context, sub)
            {
                let obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "MechanicalLoadDynamics";
                base.parse_attribute (/<cim:MechanicalLoadDynamics.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineDynamics", sub, context);
                base.parse_attribute (/<cim:MechanicalLoadDynamics.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context);
                let bucket = context.parsed.MechanicalLoadDynamics;
                if (null == bucket)
                   context.parsed.MechanicalLoadDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MechanicalLoadDynamics", "SynchronousMachineDynamics", "SynchronousMachineDynamics", fields);
                base.export_attribute (obj, "MechanicalLoadDynamics", "AsynchronousMachineDynamics", "AsynchronousMachineDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MechanicalLoadDynamics_collapse" aria-expanded="true" aria-controls="MechanicalLoadDynamics_collapse" style="margin-left: 10px;">MechanicalLoadDynamics</a></legend>
                    <div id="MechanicalLoadDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#SynchronousMachineDynamics}}<div><b>SynchronousMachineDynamics</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SynchronousMachineDynamics}}");}); return false;'>{{SynchronousMachineDynamics}}</a></div>{{/SynchronousMachineDynamics}}
                    {{#AsynchronousMachineDynamics}}<div><b>AsynchronousMachineDynamics</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AsynchronousMachineDynamics}}");}); return false;'>{{AsynchronousMachineDynamics}}</a></div>{{/AsynchronousMachineDynamics}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MechanicalLoadDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_MechanicalLoadDynamics_collapse" style="margin-left: 10px;">MechanicalLoadDynamics</a></legend>
                    <div id="{{id}}_MechanicalLoadDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SynchronousMachineDynamics'>SynchronousMachineDynamics: </label><div class='col-sm-8'><input id='{{id}}_SynchronousMachineDynamics' class='form-control' type='text'{{#SynchronousMachineDynamics}} value='{{SynchronousMachineDynamics}}'{{/SynchronousMachineDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AsynchronousMachineDynamics'>AsynchronousMachineDynamics: </label><div class='col-sm-8'><input id='{{id}}_AsynchronousMachineDynamics' class='form-control' type='text'{{#AsynchronousMachineDynamics}} value='{{AsynchronousMachineDynamics}}'{{/AsynchronousMachineDynamics}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MechanicalLoadDynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_SynchronousMachineDynamics").value; if ("" !== temp) obj["SynchronousMachineDynamics"] = temp;
                temp = document.getElementById (id + "_AsynchronousMachineDynamics").value; if ("" !== temp) obj["AsynchronousMachineDynamics"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SynchronousMachineDynamics", "0..1", "0..1", "SynchronousMachineDynamics", "MechanicalLoadDynamics"],
                            ["AsynchronousMachineDynamics", "0..1", "0..1", "AsynchronousMachineDynamics", "MechanicalLoadDynamics"]
                        ]
                    )
                );
            }
        }

        /**
         * Mechanical load model type 1.
         *
         */
        class MechLoad1 extends MechanicalLoadDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MechLoad1;
                if (null == bucket)
                   cim_data.MechLoad1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MechLoad1[obj.id];
            }

            parse (context, sub)
            {
                let obj = MechanicalLoadDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "MechLoad1";
                base.parse_element (/<cim:MechLoad1.a>([\s\S]*?)<\/cim:MechLoad1.a>/g, obj, "a", base.to_float, sub, context);
                base.parse_element (/<cim:MechLoad1.b>([\s\S]*?)<\/cim:MechLoad1.b>/g, obj, "b", base.to_float, sub, context);
                base.parse_element (/<cim:MechLoad1.d>([\s\S]*?)<\/cim:MechLoad1.d>/g, obj, "d", base.to_float, sub, context);
                base.parse_element (/<cim:MechLoad1.e>([\s\S]*?)<\/cim:MechLoad1.e>/g, obj, "e", base.to_float, sub, context);
                let bucket = context.parsed.MechLoad1;
                if (null == bucket)
                   context.parsed.MechLoad1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = MechanicalLoadDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "MechLoad1", "a", "a",  base.from_float, fields);
                base.export_element (obj, "MechLoad1", "b", "b",  base.from_float, fields);
                base.export_element (obj, "MechLoad1", "d", "d",  base.from_float, fields);
                base.export_element (obj, "MechLoad1", "e", "e",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MechLoad1_collapse" aria-expanded="true" aria-controls="MechLoad1_collapse" style="margin-left: 10px;">MechLoad1</a></legend>
                    <div id="MechLoad1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MechanicalLoadDynamics.prototype.template.call (this) +
                    `
                    {{#a}}<div><b>a</b>: {{a}}</div>{{/a}}
                    {{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
                    {{#d}}<div><b>d</b>: {{d}}</div>{{/d}}
                    {{#e}}<div><b>e</b>: {{e}}</div>{{/e}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MechLoad1_collapse" aria-expanded="true" aria-controls="{{id}}_MechLoad1_collapse" style="margin-left: 10px;">MechLoad1</a></legend>
                    <div id="{{id}}_MechLoad1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + MechanicalLoadDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a'>a: </label><div class='col-sm-8'><input id='{{id}}_a' class='form-control' type='text'{{#a}} value='{{a}}'{{/a}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b'>b: </label><div class='col-sm-8'><input id='{{id}}_b' class='form-control' type='text'{{#b}} value='{{b}}'{{/b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_d'>d: </label><div class='col-sm-8'><input id='{{id}}_d' class='form-control' type='text'{{#d}} value='{{d}}'{{/d}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e'>e: </label><div class='col-sm-8'><input id='{{id}}_e' class='form-control' type='text'{{#e}} value='{{e}}'{{/e}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MechLoad1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_a").value; if ("" !== temp) obj["a"] = temp;
                temp = document.getElementById (id + "_b").value; if ("" !== temp) obj["b"] = temp;
                temp = document.getElementById (id + "_d").value; if ("" !== temp) obj["d"] = temp;
                temp = document.getElementById (id + "_e").value; if ("" !== temp) obj["e"] = temp;

                return (obj);
            }
        }

        return (
            {
                MechanicalLoadDynamics: MechanicalLoadDynamics,
                MechLoad1: MechLoad1
            }
        );
    }
);