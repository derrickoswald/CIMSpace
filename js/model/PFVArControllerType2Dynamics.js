define
(
    ["model/base", "model/StandardModels"],
    /**
     * <font color="#0f0f0f">A var/pf regulator is defined as �A synchronous machine regulator that functions to maintain the power factor or reactive component of power at a predetermined value.�  </font>
     * <font color="#0f0f0f">
     * </font><font color="#0f0f0f">For additional information please refer to IEEE Standard 421.5-2005, Section 11.</font>
     * <font color="#0f0f0f">
     *
     * </font>
     *
     */
    function (base, StandardModels)
    {

        /**
         * Power Factor or VAr controller Type II function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class PFVArControllerType2Dynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PFVArControllerType2Dynamics;
                if (null == bucket)
                   cim_data.PFVArControllerType2Dynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PFVArControllerType2Dynamics[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "PFVArControllerType2Dynamics";
                base.parse_attribute (/<cim:PFVArControllerType2Dynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
                var bucket = context.parsed.PFVArControllerType2Dynamics;
                if (null == bucket)
                   context.parsed.PFVArControllerType2Dynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PFVArControllerType2Dynamics", "ExcitationSystemDynamics", "ExcitationSystemDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArControllerType2Dynamics_collapse" aria-expanded="true" aria-controls="PFVArControllerType2Dynamics_collapse" style="margin-left: 10px;">PFVArControllerType2Dynamics</a></legend>
                    <div id="PFVArControllerType2Dynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#ExcitationSystemDynamics}}<div><b>ExcitationSystemDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExcitationSystemDynamics}}&quot;);})'>{{ExcitationSystemDynamics}}</a></div>{{/ExcitationSystemDynamics}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PFVArControllerType2Dynamics_collapse" aria-expanded="true" aria-controls="{{id}}_PFVArControllerType2Dynamics_collapse" style="margin-left: 10px;">PFVArControllerType2Dynamics</a></legend>
                    <div id="{{id}}_PFVArControllerType2Dynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ExcitationSystemDynamics'>ExcitationSystemDynamics: </label><div class='col-sm-8'><input id='{{id}}_ExcitationSystemDynamics' class='form-control' type='text'{{#ExcitationSystemDynamics}} value='{{ExcitationSystemDynamics}}'{{/ExcitationSystemDynamics}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PFVArControllerType2Dynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ExcitationSystemDynamics").value; if ("" != temp) obj.ExcitationSystemDynamics = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ExcitationSystemDynamics", "1", "0..1", "ExcitationSystemDynamics", "PFVArControllerType2Dynamics"]
                        ]
                    )
                );
            }
        }

        /**
         * Power factor / Reactive power regulator.
         *
         * This model represents the power factor or reactive power controller such as the Basler SCP-250. The controller measures power factor or reactive power (PU on generator rated power) and compares it with the operator's set point.
         *
         */
        class PFVArType2Common1 extends PFVArControllerType2Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PFVArType2Common1;
                if (null == bucket)
                   cim_data.PFVArType2Common1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PFVArType2Common1[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PFVArControllerType2Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PFVArType2Common1";
                base.parse_element (/<cim:PFVArType2Common1.j>([\s\S]*?)<\/cim:PFVArType2Common1.j>/g, obj, "j", base.to_boolean, sub, context);
                base.parse_element (/<cim:PFVArType2Common1.ki>([\s\S]*?)<\/cim:PFVArType2Common1.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2Common1.kp>([\s\S]*?)<\/cim:PFVArType2Common1.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2Common1.max>([\s\S]*?)<\/cim:PFVArType2Common1.max>/g, obj, "max", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2Common1.ref>([\s\S]*?)<\/cim:PFVArType2Common1.ref>/g, obj, "ref", base.to_string, sub, context);
                var bucket = context.parsed.PFVArType2Common1;
                if (null == bucket)
                   context.parsed.PFVArType2Common1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PFVArControllerType2Dynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PFVArType2Common1", "j", "j",  base.from_boolean, fields);
                base.export_element (obj, "PFVArType2Common1", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "PFVArType2Common1", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "PFVArType2Common1", "max", "max",  base.from_string, fields);
                base.export_element (obj, "PFVArType2Common1", "ref", "ref",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArType2Common1_collapse" aria-expanded="true" aria-controls="PFVArType2Common1_collapse" style="margin-left: 10px;">PFVArType2Common1</a></legend>
                    <div id="PFVArType2Common1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType2Dynamics.prototype.template.call (this) +
                    `
                    {{#j}}<div><b>j</b>: {{j}}</div>{{/j}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#max}}<div><b>max</b>: {{max}}</div>{{/max}}
                    {{#ref}}<div><b>ref</b>: {{ref}}</div>{{/ref}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PFVArType2Common1_collapse" aria-expanded="true" aria-controls="{{id}}_PFVArType2Common1_collapse" style="margin-left: 10px;">PFVArType2Common1</a></legend>
                    <div id="{{id}}_PFVArType2Common1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType2Dynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_j'>j: </label><div class='col-sm-8'><input id='{{id}}_j' class='form-check-input' type='checkbox'{{#j}} checked{{/j}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_max'>max: </label><div class='col-sm-8'><input id='{{id}}_max' class='form-control' type='text'{{#max}} value='{{max}}'{{/max}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ref'>ref: </label><div class='col-sm-8'><input id='{{id}}_ref' class='form-control' type='text'{{#ref}} value='{{ref}}'{{/ref}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PFVArType2Common1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_j").checked; if (temp) obj.j = true;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_max").value; if ("" != temp) obj.max = temp;
                temp = document.getElementById (id + "_ref").value; if ("" != temp) obj.ref = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE VAR Controller Type 2 which is a summing point type controller.
         *
         * It makes up the outside loop of a two-loop system. This controller is implemented as a slow PI type controller, and the voltage regulator forms the inner loop and is implemented as a fast controller.
         *
         */
        class PFVArType2IEEEVArController extends PFVArControllerType2Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PFVArType2IEEEVArController;
                if (null == bucket)
                   cim_data.PFVArType2IEEEVArController = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PFVArType2IEEEVArController[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PFVArControllerType2Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PFVArType2IEEEVArController";
                base.parse_element (/<cim:PFVArType2IEEEVArController.exlon>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.exlon>/g, obj, "exlon", base.to_boolean, sub, context);
                base.parse_element (/<cim:PFVArType2IEEEVArController.ki>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2IEEEVArController.kp>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2IEEEVArController.qref>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.qref>/g, obj, "qref", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2IEEEVArController.vclmt>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.vclmt>/g, obj, "vclmt", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2IEEEVArController.vref>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.vref>/g, obj, "vref", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2IEEEVArController.vs>([\s\S]*?)<\/cim:PFVArType2IEEEVArController.vs>/g, obj, "vs", base.to_float, sub, context);
                var bucket = context.parsed.PFVArType2IEEEVArController;
                if (null == bucket)
                   context.parsed.PFVArType2IEEEVArController = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PFVArControllerType2Dynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PFVArType2IEEEVArController", "exlon", "exlon",  base.from_boolean, fields);
                base.export_element (obj, "PFVArType2IEEEVArController", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "PFVArType2IEEEVArController", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "PFVArType2IEEEVArController", "qref", "qref",  base.from_string, fields);
                base.export_element (obj, "PFVArType2IEEEVArController", "vclmt", "vclmt",  base.from_string, fields);
                base.export_element (obj, "PFVArType2IEEEVArController", "vref", "vref",  base.from_string, fields);
                base.export_element (obj, "PFVArType2IEEEVArController", "vs", "vs",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArType2IEEEVArController_collapse" aria-expanded="true" aria-controls="PFVArType2IEEEVArController_collapse" style="margin-left: 10px;">PFVArType2IEEEVArController</a></legend>
                    <div id="PFVArType2IEEEVArController_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType2Dynamics.prototype.template.call (this) +
                    `
                    {{#exlon}}<div><b>exlon</b>: {{exlon}}</div>{{/exlon}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#qref}}<div><b>qref</b>: {{qref}}</div>{{/qref}}
                    {{#vclmt}}<div><b>vclmt</b>: {{vclmt}}</div>{{/vclmt}}
                    {{#vref}}<div><b>vref</b>: {{vref}}</div>{{/vref}}
                    {{#vs}}<div><b>vs</b>: {{vs}}</div>{{/vs}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PFVArType2IEEEVArController_collapse" aria-expanded="true" aria-controls="{{id}}_PFVArType2IEEEVArController_collapse" style="margin-left: 10px;">PFVArType2IEEEVArController</a></legend>
                    <div id="{{id}}_PFVArType2IEEEVArController_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType2Dynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_exlon'>exlon: </label><div class='col-sm-8'><input id='{{id}}_exlon' class='form-check-input' type='checkbox'{{#exlon}} checked{{/exlon}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qref'>qref: </label><div class='col-sm-8'><input id='{{id}}_qref' class='form-control' type='text'{{#qref}} value='{{qref}}'{{/qref}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vclmt'>vclmt: </label><div class='col-sm-8'><input id='{{id}}_vclmt' class='form-control' type='text'{{#vclmt}} value='{{vclmt}}'{{/vclmt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vref'>vref: </label><div class='col-sm-8'><input id='{{id}}_vref' class='form-control' type='text'{{#vref}} value='{{vref}}'{{/vref}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vs'>vs: </label><div class='col-sm-8'><input id='{{id}}_vs' class='form-control' type='text'{{#vs}} value='{{vs}}'{{/vs}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PFVArType2IEEEVArController" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_exlon").checked; if (temp) obj.exlon = true;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_qref").value; if ("" != temp) obj.qref = temp;
                temp = document.getElementById (id + "_vclmt").value; if ("" != temp) obj.vclmt = temp;
                temp = document.getElementById (id + "_vref").value; if ("" != temp) obj.vref = temp;
                temp = document.getElementById (id + "_vs").value; if ("" != temp) obj.vs = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE PF Controller Type 2 which is a summing point type controller and makes up the outside loop of a two-loop system.
         *
         * This controller is implemented as a slow PI type controller. The voltage regulator forms the inner loop and is implemented as a fast controller.
         *
         */
        class PFVArType2IEEEPFController extends PFVArControllerType2Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PFVArType2IEEEPFController;
                if (null == bucket)
                   cim_data.PFVArType2IEEEPFController = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PFVArType2IEEEPFController[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PFVArControllerType2Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PFVArType2IEEEPFController";
                base.parse_element (/<cim:PFVArType2IEEEPFController.exlon>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.exlon>/g, obj, "exlon", base.to_boolean, sub, context);
                base.parse_element (/<cim:PFVArType2IEEEPFController.ki>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2IEEEPFController.kp>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2IEEEPFController.pfref>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.pfref>/g, obj, "pfref", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2IEEEPFController.vclmt>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.vclmt>/g, obj, "vclmt", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2IEEEPFController.vref>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.vref>/g, obj, "vref", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType2IEEEPFController.vs>([\s\S]*?)<\/cim:PFVArType2IEEEPFController.vs>/g, obj, "vs", base.to_float, sub, context);
                var bucket = context.parsed.PFVArType2IEEEPFController;
                if (null == bucket)
                   context.parsed.PFVArType2IEEEPFController = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PFVArControllerType2Dynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PFVArType2IEEEPFController", "exlon", "exlon",  base.from_boolean, fields);
                base.export_element (obj, "PFVArType2IEEEPFController", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "PFVArType2IEEEPFController", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "PFVArType2IEEEPFController", "pfref", "pfref",  base.from_string, fields);
                base.export_element (obj, "PFVArType2IEEEPFController", "vclmt", "vclmt",  base.from_string, fields);
                base.export_element (obj, "PFVArType2IEEEPFController", "vref", "vref",  base.from_string, fields);
                base.export_element (obj, "PFVArType2IEEEPFController", "vs", "vs",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArType2IEEEPFController_collapse" aria-expanded="true" aria-controls="PFVArType2IEEEPFController_collapse" style="margin-left: 10px;">PFVArType2IEEEPFController</a></legend>
                    <div id="PFVArType2IEEEPFController_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType2Dynamics.prototype.template.call (this) +
                    `
                    {{#exlon}}<div><b>exlon</b>: {{exlon}}</div>{{/exlon}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#pfref}}<div><b>pfref</b>: {{pfref}}</div>{{/pfref}}
                    {{#vclmt}}<div><b>vclmt</b>: {{vclmt}}</div>{{/vclmt}}
                    {{#vref}}<div><b>vref</b>: {{vref}}</div>{{/vref}}
                    {{#vs}}<div><b>vs</b>: {{vs}}</div>{{/vs}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PFVArType2IEEEPFController_collapse" aria-expanded="true" aria-controls="{{id}}_PFVArType2IEEEPFController_collapse" style="margin-left: 10px;">PFVArType2IEEEPFController</a></legend>
                    <div id="{{id}}_PFVArType2IEEEPFController_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType2Dynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_exlon'>exlon: </label><div class='col-sm-8'><input id='{{id}}_exlon' class='form-check-input' type='checkbox'{{#exlon}} checked{{/exlon}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pfref'>pfref: </label><div class='col-sm-8'><input id='{{id}}_pfref' class='form-control' type='text'{{#pfref}} value='{{pfref}}'{{/pfref}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vclmt'>vclmt: </label><div class='col-sm-8'><input id='{{id}}_vclmt' class='form-control' type='text'{{#vclmt}} value='{{vclmt}}'{{/vclmt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vref'>vref: </label><div class='col-sm-8'><input id='{{id}}_vref' class='form-control' type='text'{{#vref}} value='{{vref}}'{{/vref}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vs'>vs: </label><div class='col-sm-8'><input id='{{id}}_vs' class='form-control' type='text'{{#vs}} value='{{vs}}'{{/vs}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PFVArType2IEEEPFController" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_exlon").checked; if (temp) obj.exlon = true;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_pfref").value; if ("" != temp) obj.pfref = temp;
                temp = document.getElementById (id + "_vclmt").value; if ("" != temp) obj.vclmt = temp;
                temp = document.getElementById (id + "_vref").value; if ("" != temp) obj.vref = temp;
                temp = document.getElementById (id + "_vs").value; if ("" != temp) obj.vs = temp;

                return (obj);
            }
        }

        return (
            {
                PFVArType2Common1: PFVArType2Common1,
                PFVArType2IEEEVArController: PFVArType2IEEEVArController,
                PFVArControllerType2Dynamics: PFVArControllerType2Dynamics,
                PFVArType2IEEEPFController: PFVArType2IEEEPFController
            }
        );
    }
);