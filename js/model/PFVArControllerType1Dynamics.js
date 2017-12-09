define
(
    ["model/base", "model/StandardModels"],
    /**
     * <font color="#0f0f0f">Excitation systems for synchronous machines are sometimes supplied with an optional means of automatically adjusting generator output reactive power (VAr) or power factor (PF) to a user-specified value This can be accomplished with either a reactive power or power factor controller or regulator.
     *
     * A reactive power or power factor controller is defined as a PF/VAr controller in IEEE Std 421.1 as �A control function that acts through the reference adjuster to modify the voltage regulator set point to maintain the synchronous machine steady-state power factor or reactive power at a predetermined value.� </font>
     *
     */
    function (base, StandardModels)
    {

        /**
         * Power Factor or VAr controller Type I function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class PFVArControllerType1Dynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PFVArControllerType1Dynamics;
                if (null == bucket)
                   cim_data.PFVArControllerType1Dynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PFVArControllerType1Dynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "PFVArControllerType1Dynamics";
                base.parse_attribute (/<cim:PFVArControllerType1Dynamics.VoltageAdjusterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageAdjusterDynamics", sub, context);
                base.parse_attribute (/<cim:PFVArControllerType1Dynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
                base.parse_attribute (/<cim:PFVArControllerType1Dynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);
                var bucket = context.parsed.PFVArControllerType1Dynamics;
                if (null == bucket)
                   context.parsed.PFVArControllerType1Dynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PFVArControllerType1Dynamics", "VoltageAdjusterDynamics", "VoltageAdjusterDynamics", fields);
                base.export_attribute (obj, "PFVArControllerType1Dynamics", "ExcitationSystemDynamics", "ExcitationSystemDynamics", fields);
                base.export_attribute (obj, "PFVArControllerType1Dynamics", "RemoteInputSignal", "RemoteInputSignal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArControllerType1Dynamics_collapse" aria-expanded="true" aria-controls="PFVArControllerType1Dynamics_collapse" style="margin-left: 10px;">PFVArControllerType1Dynamics</a></legend>
                    <div id="PFVArControllerType1Dynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#VoltageAdjusterDynamics}}<div><b>VoltageAdjusterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VoltageAdjusterDynamics}}&quot;);})'>{{VoltageAdjusterDynamics}}</a></div>{{/VoltageAdjusterDynamics}}
                    {{#ExcitationSystemDynamics}}<div><b>ExcitationSystemDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExcitationSystemDynamics}}&quot;);})'>{{ExcitationSystemDynamics}}</a></div>{{/ExcitationSystemDynamics}}
                    {{#RemoteInputSignal}}<div><b>RemoteInputSignal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RemoteInputSignal}}&quot;);})'>{{RemoteInputSignal}}</a></div>{{/RemoteInputSignal}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArControllerType1Dynamics_collapse" aria-expanded="true" aria-controls="PFVArControllerType1Dynamics_collapse" style="margin-left: 10px;">PFVArControllerType1Dynamics</a></legend>
                    <div id="PFVArControllerType1Dynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='VoltageAdjusterDynamics'>VoltageAdjusterDynamics: </label><div class='col-sm-8'><input id='VoltageAdjusterDynamics' class='form-control' type='text'{{#VoltageAdjusterDynamics}} value='{{VoltageAdjusterDynamics}}'{{/VoltageAdjusterDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ExcitationSystemDynamics'>ExcitationSystemDynamics: </label><div class='col-sm-8'><input id='ExcitationSystemDynamics' class='form-control' type='text'{{#ExcitationSystemDynamics}} value='{{ExcitationSystemDynamics}}'{{/ExcitationSystemDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RemoteInputSignal'>RemoteInputSignal: </label><div class='col-sm-8'><input id='RemoteInputSignal' class='form-control' type='text'{{#RemoteInputSignal}} value='{{RemoteInputSignal}}'{{/RemoteInputSignal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PFVArControllerType1Dynamics" };
                super.submit (obj);
                temp = document.getElementById ("VoltageAdjusterDynamics").value; if ("" != temp) obj.VoltageAdjusterDynamics = temp;
                temp = document.getElementById ("ExcitationSystemDynamics").value; if ("" != temp) obj.ExcitationSystemDynamics = temp;
                temp = document.getElementById ("RemoteInputSignal").value; if ("" != temp) obj.RemoteInputSignal = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["VoltageAdjusterDynamics", "VoltageAdjusterDynamics", "0..1", "1"],
                        ["ExcitationSystemDynamics", "ExcitationSystemDynamics", "1", "0..1"],
                        ["RemoteInputSignal", "RemoteInputSignal", "0..1", "0..1"]
                    ]
                );
            }
        }

        /**
         * The class represents IEEE VAR Controller Type 1 which operates by moving the voltage reference directly.
         *
         * Reference: IEEE Standard 421.5-2005 Section 11.3.
         *
         */
        class PFVArType1IEEEVArController extends PFVArControllerType1Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PFVArType1IEEEVArController;
                if (null == bucket)
                   cim_data.PFVArType1IEEEVArController = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PFVArType1IEEEVArController[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PFVArControllerType1Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PFVArType1IEEEVArController";
                base.parse_element (/<cim:PFVArType1IEEEVArController.tvarc>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.tvarc>/g, obj, "tvarc", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEVArController.vvar>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvar>/g, obj, "vvar", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEVArController.vvarcbw>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvarcbw>/g, obj, "vvarcbw", base.to_float, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEVArController.vvarref>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvarref>/g, obj, "vvarref", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEVArController.vvtmax>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvtmax>/g, obj, "vvtmax", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEVArController.vvtmin>([\s\S]*?)<\/cim:PFVArType1IEEEVArController.vvtmin>/g, obj, "vvtmin", base.to_string, sub, context);
                var bucket = context.parsed.PFVArType1IEEEVArController;
                if (null == bucket)
                   context.parsed.PFVArType1IEEEVArController = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PFVArControllerType1Dynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PFVArType1IEEEVArController", "tvarc", "tvarc",  base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEVArController", "vvar", "vvar",  base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEVArController", "vvarcbw", "vvarcbw",  base.from_float, fields);
                base.export_element (obj, "PFVArType1IEEEVArController", "vvarref", "vvarref",  base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEVArController", "vvtmax", "vvtmax",  base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEVArController", "vvtmin", "vvtmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArType1IEEEVArController_collapse" aria-expanded="true" aria-controls="PFVArType1IEEEVArController_collapse" style="margin-left: 10px;">PFVArType1IEEEVArController</a></legend>
                    <div id="PFVArType1IEEEVArController_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType1Dynamics.prototype.template.call (this) +
                    `
                    {{#tvarc}}<div><b>tvarc</b>: {{tvarc}}</div>{{/tvarc}}
                    {{#vvar}}<div><b>vvar</b>: {{vvar}}</div>{{/vvar}}
                    {{#vvarcbw}}<div><b>vvarcbw</b>: {{vvarcbw}}</div>{{/vvarcbw}}
                    {{#vvarref}}<div><b>vvarref</b>: {{vvarref}}</div>{{/vvarref}}
                    {{#vvtmax}}<div><b>vvtmax</b>: {{vvtmax}}</div>{{/vvtmax}}
                    {{#vvtmin}}<div><b>vvtmin</b>: {{vvtmin}}</div>{{/vvtmin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArType1IEEEVArController_collapse" aria-expanded="true" aria-controls="PFVArType1IEEEVArController_collapse" style="margin-left: 10px;">PFVArType1IEEEVArController</a></legend>
                    <div id="PFVArType1IEEEVArController_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType1Dynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tvarc'>tvarc: </label><div class='col-sm-8'><input id='tvarc' class='form-control' type='text'{{#tvarc}} value='{{tvarc}}'{{/tvarc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vvar'>vvar: </label><div class='col-sm-8'><input id='vvar' class='form-control' type='text'{{#vvar}} value='{{vvar}}'{{/vvar}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vvarcbw'>vvarcbw: </label><div class='col-sm-8'><input id='vvarcbw' class='form-control' type='text'{{#vvarcbw}} value='{{vvarcbw}}'{{/vvarcbw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vvarref'>vvarref: </label><div class='col-sm-8'><input id='vvarref' class='form-control' type='text'{{#vvarref}} value='{{vvarref}}'{{/vvarref}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vvtmax'>vvtmax: </label><div class='col-sm-8'><input id='vvtmax' class='form-control' type='text'{{#vvtmax}} value='{{vvtmax}}'{{/vvtmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vvtmin'>vvtmin: </label><div class='col-sm-8'><input id='vvtmin' class='form-control' type='text'{{#vvtmin}} value='{{vvtmin}}'{{/vvtmin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PFVArType1IEEEVArController" };
                super.submit (obj);
                temp = document.getElementById ("tvarc").value; if ("" != temp) obj.tvarc = temp;
                temp = document.getElementById ("vvar").value; if ("" != temp) obj.vvar = temp;
                temp = document.getElementById ("vvarcbw").value; if ("" != temp) obj.vvarcbw = temp;
                temp = document.getElementById ("vvarref").value; if ("" != temp) obj.vvarref = temp;
                temp = document.getElementById ("vvtmax").value; if ("" != temp) obj.vvtmax = temp;
                temp = document.getElementById ("vvtmin").value; if ("" != temp) obj.vvtmin = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE PF Controller Type 1 which operates by moving the voltage reference directly.
         *
         * Reference: IEEE Standard 421.5-2005 Section 11.2.
         *
         */
        class PFVArType1IEEEPFController extends PFVArControllerType1Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PFVArType1IEEEPFController;
                if (null == bucket)
                   cim_data.PFVArType1IEEEPFController = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PFVArType1IEEEPFController[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PFVArControllerType1Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PFVArType1IEEEPFController";
                base.parse_element (/<cim:PFVArType1IEEEPFController.ovex>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.ovex>/g, obj, "ovex", base.to_boolean, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.tpfc>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.tpfc>/g, obj, "tpfc", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.vitmin>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vitmin>/g, obj, "vitmin", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.vpf>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vpf>/g, obj, "vpf", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.vpfcbw>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vpfcbw>/g, obj, "vpfcbw", base.to_float, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.vpfref>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vpfref>/g, obj, "vpfref", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.vvtmax>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vvtmax>/g, obj, "vvtmax", base.to_string, sub, context);
                base.parse_element (/<cim:PFVArType1IEEEPFController.vvtmin>([\s\S]*?)<\/cim:PFVArType1IEEEPFController.vvtmin>/g, obj, "vvtmin", base.to_string, sub, context);
                var bucket = context.parsed.PFVArType1IEEEPFController;
                if (null == bucket)
                   context.parsed.PFVArType1IEEEPFController = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PFVArControllerType1Dynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PFVArType1IEEEPFController", "ovex", "ovex",  base.from_boolean, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "tpfc", "tpfc",  base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "vitmin", "vitmin",  base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "vpf", "vpf",  base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "vpfcbw", "vpfcbw",  base.from_float, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "vpfref", "vpfref",  base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "vvtmax", "vvtmax",  base.from_string, fields);
                base.export_element (obj, "PFVArType1IEEEPFController", "vvtmin", "vvtmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArType1IEEEPFController_collapse" aria-expanded="true" aria-controls="PFVArType1IEEEPFController_collapse" style="margin-left: 10px;">PFVArType1IEEEPFController</a></legend>
                    <div id="PFVArType1IEEEPFController_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType1Dynamics.prototype.template.call (this) +
                    `
                    {{#ovex}}<div><b>ovex</b>: {{ovex}}</div>{{/ovex}}
                    {{#tpfc}}<div><b>tpfc</b>: {{tpfc}}</div>{{/tpfc}}
                    {{#vitmin}}<div><b>vitmin</b>: {{vitmin}}</div>{{/vitmin}}
                    {{#vpf}}<div><b>vpf</b>: {{vpf}}</div>{{/vpf}}
                    {{#vpfcbw}}<div><b>vpfcbw</b>: {{vpfcbw}}</div>{{/vpfcbw}}
                    {{#vpfref}}<div><b>vpfref</b>: {{vpfref}}</div>{{/vpfref}}
                    {{#vvtmax}}<div><b>vvtmax</b>: {{vvtmax}}</div>{{/vvtmax}}
                    {{#vvtmin}}<div><b>vvtmin</b>: {{vvtmin}}</div>{{/vvtmin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArType1IEEEPFController_collapse" aria-expanded="true" aria-controls="PFVArType1IEEEPFController_collapse" style="margin-left: 10px;">PFVArType1IEEEPFController</a></legend>
                    <div id="PFVArType1IEEEPFController_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType1Dynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='ovex'>ovex: </label><div class='col-sm-8'><input id='ovex' class='form-check-input' type='checkbox'{{#ovex}} checked{{/ovex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tpfc'>tpfc: </label><div class='col-sm-8'><input id='tpfc' class='form-control' type='text'{{#tpfc}} value='{{tpfc}}'{{/tpfc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vitmin'>vitmin: </label><div class='col-sm-8'><input id='vitmin' class='form-control' type='text'{{#vitmin}} value='{{vitmin}}'{{/vitmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vpf'>vpf: </label><div class='col-sm-8'><input id='vpf' class='form-control' type='text'{{#vpf}} value='{{vpf}}'{{/vpf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vpfcbw'>vpfcbw: </label><div class='col-sm-8'><input id='vpfcbw' class='form-control' type='text'{{#vpfcbw}} value='{{vpfcbw}}'{{/vpfcbw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vpfref'>vpfref: </label><div class='col-sm-8'><input id='vpfref' class='form-control' type='text'{{#vpfref}} value='{{vpfref}}'{{/vpfref}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vvtmax'>vvtmax: </label><div class='col-sm-8'><input id='vvtmax' class='form-control' type='text'{{#vvtmax}} value='{{vvtmax}}'{{/vvtmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vvtmin'>vvtmin: </label><div class='col-sm-8'><input id='vvtmin' class='form-control' type='text'{{#vvtmin}} value='{{vvtmin}}'{{/vvtmin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PFVArType1IEEEPFController" };
                super.submit (obj);
                temp = document.getElementById ("ovex").checked; if (temp) obj.ovex = true;
                temp = document.getElementById ("tpfc").value; if ("" != temp) obj.tpfc = temp;
                temp = document.getElementById ("vitmin").value; if ("" != temp) obj.vitmin = temp;
                temp = document.getElementById ("vpf").value; if ("" != temp) obj.vpf = temp;
                temp = document.getElementById ("vpfcbw").value; if ("" != temp) obj.vpfcbw = temp;
                temp = document.getElementById ("vpfref").value; if ("" != temp) obj.vpfref = temp;
                temp = document.getElementById ("vvtmax").value; if ("" != temp) obj.vvtmax = temp;
                temp = document.getElementById ("vvtmin").value; if ("" != temp) obj.vvtmin = temp;

                return (obj);
            }
        }

        return (
            {
                PFVArType1IEEEVArController: PFVArType1IEEEVArController,
                PFVArType1IEEEPFController: PFVArType1IEEEPFController,
                PFVArControllerType1Dynamics: PFVArControllerType1Dynamics
            }
        );
    }
);