define
(
    ["model/base", "model/Core"],
    /**
     * This subclause contains standard dynamic model specifications grouped into packages by standard function block (type of equipment being modelled).
     *
     * In the CIM, standard dynamic models are expressed by means of a class named with the standard model name and attributes reflecting each of the parameters necessary to describe the behaviour of an instance of the standard model.
     *
     */
    function (base, Core)
    {
        /**
         * Abstract parent class for all Dynamics function blocks.
         *
         */
        class DynamicsFunctionBlock extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DynamicsFunctionBlock;
                if (null == bucket)
                   cim_data.DynamicsFunctionBlock = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DynamicsFunctionBlock[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DynamicsFunctionBlock";
                base.parse_element (/<cim:DynamicsFunctionBlock.enabled>([\s\S]*?)<\/cim:DynamicsFunctionBlock.enabled>/g, obj, "enabled", base.to_boolean, sub, context);
                let bucket = context.parsed.DynamicsFunctionBlock;
                if (null == bucket)
                   context.parsed.DynamicsFunctionBlock = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "DynamicsFunctionBlock", "enabled", "enabled",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DynamicsFunctionBlock_collapse" aria-expanded="true" aria-controls="DynamicsFunctionBlock_collapse" style="margin-left: 10px;">DynamicsFunctionBlock</a></legend>
                    <div id="DynamicsFunctionBlock_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#enabled}}<div><b>enabled</b>: {{enabled}}</div>{{/enabled}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DynamicsFunctionBlock_collapse" aria-expanded="true" aria-controls="{{id}}_DynamicsFunctionBlock_collapse" style="margin-left: 10px;">DynamicsFunctionBlock</a></legend>
                    <div id="{{id}}_DynamicsFunctionBlock_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_enabled'>enabled: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_enabled' class='form-check-input' type='checkbox'{{#enabled}} checked{{/enabled}}></div></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DynamicsFunctionBlock" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_enabled").checked; if (temp) obj["enabled"] = true;

                return (obj);
            }
        }

        /**
         * Abstract parent class for all synchronous and asynchronous machine standard models.
         *
         */
        class RotatingMachineDynamics extends DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RotatingMachineDynamics;
                if (null == bucket)
                   cim_data.RotatingMachineDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RotatingMachineDynamics[obj.id];
            }

            parse (context, sub)
            {
                let obj = DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "RotatingMachineDynamics";
                base.parse_element (/<cim:RotatingMachineDynamics.damping>([\s\S]*?)<\/cim:RotatingMachineDynamics.damping>/g, obj, "damping", base.to_float, sub, context);
                base.parse_element (/<cim:RotatingMachineDynamics.inertia>([\s\S]*?)<\/cim:RotatingMachineDynamics.inertia>/g, obj, "inertia", base.to_string, sub, context);
                base.parse_element (/<cim:RotatingMachineDynamics.saturationFactor>([\s\S]*?)<\/cim:RotatingMachineDynamics.saturationFactor>/g, obj, "saturationFactor", base.to_float, sub, context);
                base.parse_element (/<cim:RotatingMachineDynamics.saturationFactor120>([\s\S]*?)<\/cim:RotatingMachineDynamics.saturationFactor120>/g, obj, "saturationFactor120", base.to_float, sub, context);
                base.parse_element (/<cim:RotatingMachineDynamics.statorLeakageReactance>([\s\S]*?)<\/cim:RotatingMachineDynamics.statorLeakageReactance>/g, obj, "statorLeakageReactance", base.to_string, sub, context);
                base.parse_element (/<cim:RotatingMachineDynamics.statorResistance>([\s\S]*?)<\/cim:RotatingMachineDynamics.statorResistance>/g, obj, "statorResistance", base.to_string, sub, context);
                let bucket = context.parsed.RotatingMachineDynamics;
                if (null == bucket)
                   context.parsed.RotatingMachineDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_element (obj, "RotatingMachineDynamics", "damping", "damping",  base.from_float, fields);
                base.export_element (obj, "RotatingMachineDynamics", "inertia", "inertia",  base.from_string, fields);
                base.export_element (obj, "RotatingMachineDynamics", "saturationFactor", "saturationFactor",  base.from_float, fields);
                base.export_element (obj, "RotatingMachineDynamics", "saturationFactor120", "saturationFactor120",  base.from_float, fields);
                base.export_element (obj, "RotatingMachineDynamics", "statorLeakageReactance", "statorLeakageReactance",  base.from_string, fields);
                base.export_element (obj, "RotatingMachineDynamics", "statorResistance", "statorResistance",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RotatingMachineDynamics_collapse" aria-expanded="true" aria-controls="RotatingMachineDynamics_collapse" style="margin-left: 10px;">RotatingMachineDynamics</a></legend>
                    <div id="RotatingMachineDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#damping}}<div><b>damping</b>: {{damping}}</div>{{/damping}}
                    {{#inertia}}<div><b>inertia</b>: {{inertia}}</div>{{/inertia}}
                    {{#saturationFactor}}<div><b>saturationFactor</b>: {{saturationFactor}}</div>{{/saturationFactor}}
                    {{#saturationFactor120}}<div><b>saturationFactor120</b>: {{saturationFactor120}}</div>{{/saturationFactor120}}
                    {{#statorLeakageReactance}}<div><b>statorLeakageReactance</b>: {{statorLeakageReactance}}</div>{{/statorLeakageReactance}}
                    {{#statorResistance}}<div><b>statorResistance</b>: {{statorResistance}}</div>{{/statorResistance}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RotatingMachineDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_RotatingMachineDynamics_collapse" style="margin-left: 10px;">RotatingMachineDynamics</a></legend>
                    <div id="{{id}}_RotatingMachineDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_damping'>damping: </label><div class='col-sm-8'><input id='{{id}}_damping' class='form-control' type='text'{{#damping}} value='{{damping}}'{{/damping}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inertia'>inertia: </label><div class='col-sm-8'><input id='{{id}}_inertia' class='form-control' type='text'{{#inertia}} value='{{inertia}}'{{/inertia}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_saturationFactor'>saturationFactor: </label><div class='col-sm-8'><input id='{{id}}_saturationFactor' class='form-control' type='text'{{#saturationFactor}} value='{{saturationFactor}}'{{/saturationFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_saturationFactor120'>saturationFactor120: </label><div class='col-sm-8'><input id='{{id}}_saturationFactor120' class='form-control' type='text'{{#saturationFactor120}} value='{{saturationFactor120}}'{{/saturationFactor120}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_statorLeakageReactance'>statorLeakageReactance: </label><div class='col-sm-8'><input id='{{id}}_statorLeakageReactance' class='form-control' type='text'{{#statorLeakageReactance}} value='{{statorLeakageReactance}}'{{/statorLeakageReactance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_statorResistance'>statorResistance: </label><div class='col-sm-8'><input id='{{id}}_statorResistance' class='form-control' type='text'{{#statorResistance}} value='{{statorResistance}}'{{/statorResistance}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RotatingMachineDynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_damping").value; if ("" !== temp) obj["damping"] = temp;
                temp = document.getElementById (id + "_inertia").value; if ("" !== temp) obj["inertia"] = temp;
                temp = document.getElementById (id + "_saturationFactor").value; if ("" !== temp) obj["saturationFactor"] = temp;
                temp = document.getElementById (id + "_saturationFactor120").value; if ("" !== temp) obj["saturationFactor120"] = temp;
                temp = document.getElementById (id + "_statorLeakageReactance").value; if ("" !== temp) obj["statorLeakageReactance"] = temp;
                temp = document.getElementById (id + "_statorResistance").value; if ("" !== temp) obj["statorResistance"] = temp;

                return (obj);
            }
        }

        return (
            {
                DynamicsFunctionBlock: DynamicsFunctionBlock,
                RotatingMachineDynamics: RotatingMachineDynamics
            }
        );
    }
);