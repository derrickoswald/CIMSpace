define
(
    ["model/base", "model/StandardModels"],
    /**
     * The turbine-governor model is linked to one or two synchronous generators and determines the shaft mechanical power (Pm) or torque (Tm) for the generator model.
     *
     * Unlike IEEE standard models for other function blocks, the three IEEE turbine-governor standard models (GovHydroIEEE0, GovHydroIEEE2, GovSteamIEEE1) are documented in IEEE Transactions not in IEEE standards. For that reason, diagrams are supplied for those models.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Governor control flag for Francis hydro model.
         *
         */
        var FrancisGovernorControlKind =
        {
            mechanicHydrolicTachoAccelerator: "mechanicHydrolicTachoAccelerator",
            mechanicHydraulicTransientFeedback: "mechanicHydraulicTransientFeedback",
            electromechanicalElectrohydraulic: "electromechanicalElectrohydraulic"
        };
        Object.freeze (FrancisGovernorControlKind);

        /**
         * Governor droop signal feedback source.
         *
         */
        var DroopSignalFeedbackKind =
        {
            electricalPower: "electricalPower",
            none: "none",
            fuelValveStroke: "fuelValveStroke",
            governorOutput: "governorOutput"
        };
        Object.freeze (DroopSignalFeedbackKind);

        /**
         * Turbine-governor function block whose behavior is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class TurbineGovernorDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TurbineGovernorDynamics;
                if (null == bucket)
                   cim_data.TurbineGovernorDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TurbineGovernorDynamics[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "TurbineGovernorDynamics";
                base.parse_attribute (/<cim:TurbineGovernorDynamics.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context);
                base.parse_attribute (/<cim:TurbineGovernorDynamics.TurbineLoadControllerDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineLoadControllerDynamics", sub, context);
                base.parse_attributes (/<cim:TurbineGovernorDynamics.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineDynamics", sub, context);
                var bucket = context.parsed.TurbineGovernorDynamics;
                if (null == bucket)
                   context.parsed.TurbineGovernorDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TurbineGovernorDynamics", "AsynchronousMachineDynamics", "AsynchronousMachineDynamics", fields);
                base.export_attribute (obj, "TurbineGovernorDynamics", "TurbineLoadControllerDynamics", "TurbineLoadControllerDynamics", fields);
                base.export_attributes (obj, "TurbineGovernorDynamics", "SynchronousMachineDynamics", "SynchronousMachineDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TurbineGovernorDynamics_collapse" aria-expanded="true" aria-controls="TurbineGovernorDynamics_collapse" style="margin-left: 10px;">TurbineGovernorDynamics</a></legend>
                    <div id="TurbineGovernorDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#AsynchronousMachineDynamics}}<div><b>AsynchronousMachineDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AsynchronousMachineDynamics}}&quot;);})'>{{AsynchronousMachineDynamics}}</a></div>{{/AsynchronousMachineDynamics}}
                    {{#TurbineLoadControllerDynamics}}<div><b>TurbineLoadControllerDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TurbineLoadControllerDynamics}}&quot;);})'>{{TurbineLoadControllerDynamics}}</a></div>{{/TurbineLoadControllerDynamics}}
                    {{#SynchronousMachineDynamics}}<div><b>SynchronousMachineDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SynchronousMachineDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SynchronousMachineDynamics) obj.SynchronousMachineDynamics_string = obj.SynchronousMachineDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SynchronousMachineDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_TurbineGovernorDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_TurbineGovernorDynamics_collapse" style="margin-left: 10px;">TurbineGovernorDynamics</a></legend>
                    <div id="{{id}}_TurbineGovernorDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AsynchronousMachineDynamics'>AsynchronousMachineDynamics: </label><div class='col-sm-8'><input id='{{id}}_AsynchronousMachineDynamics' class='form-control' type='text'{{#AsynchronousMachineDynamics}} value='{{AsynchronousMachineDynamics}}'{{/AsynchronousMachineDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TurbineLoadControllerDynamics'>TurbineLoadControllerDynamics: </label><div class='col-sm-8'><input id='{{id}}_TurbineLoadControllerDynamics' class='form-control' type='text'{{#TurbineLoadControllerDynamics}} value='{{TurbineLoadControllerDynamics}}'{{/TurbineLoadControllerDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SynchronousMachineDynamics'>SynchronousMachineDynamics: </label><div class='col-sm-8'><input id='{{id}}_SynchronousMachineDynamics' class='form-control' type='text'{{#SynchronousMachineDynamics}} value='{{SynchronousMachineDynamics}}_string'{{/SynchronousMachineDynamics}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TurbineGovernorDynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_AsynchronousMachineDynamics").value; if ("" != temp) obj.AsynchronousMachineDynamics = temp;
                temp = document.getElementById (id + "_TurbineLoadControllerDynamics").value; if ("" != temp) obj.TurbineLoadControllerDynamics = temp;
                temp = document.getElementById (id + "_SynchronousMachineDynamics").value; if ("" != temp) obj.SynchronousMachineDynamics = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AsynchronousMachineDynamics", "AsynchronousMachineDynamics", "0..1", "0..1"],
                        ["TurbineLoadControllerDynamics", "TurbineLoadControllerDynamics", "0..1", "1"],
                        ["SynchronousMachineDynamics", "SynchronousMachineDynamics", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Cross compound turbine governor model.
         *
         */
        class GovSteamCC extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovSteamCC;
                if (null == bucket)
                   cim_data.GovSteamCC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovSteamCC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamCC";
                base.parse_element (/<cim:GovSteamCC.dhp>([\s\S]*?)<\/cim:GovSteamCC.dhp>/g, obj, "dhp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.dlp>([\s\S]*?)<\/cim:GovSteamCC.dlp>/g, obj, "dlp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.fhp>([\s\S]*?)<\/cim:GovSteamCC.fhp>/g, obj, "fhp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.flp>([\s\S]*?)<\/cim:GovSteamCC.flp>/g, obj, "flp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.mwbase>([\s\S]*?)<\/cim:GovSteamCC.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.pmaxhp>([\s\S]*?)<\/cim:GovSteamCC.pmaxhp>/g, obj, "pmaxhp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.pmaxlp>([\s\S]*?)<\/cim:GovSteamCC.pmaxlp>/g, obj, "pmaxlp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.rhp>([\s\S]*?)<\/cim:GovSteamCC.rhp>/g, obj, "rhp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.rlp>([\s\S]*?)<\/cim:GovSteamCC.rlp>/g, obj, "rlp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t1hp>([\s\S]*?)<\/cim:GovSteamCC.t1hp>/g, obj, "t1hp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t1lp>([\s\S]*?)<\/cim:GovSteamCC.t1lp>/g, obj, "t1lp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t3hp>([\s\S]*?)<\/cim:GovSteamCC.t3hp>/g, obj, "t3hp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t3lp>([\s\S]*?)<\/cim:GovSteamCC.t3lp>/g, obj, "t3lp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t4hp>([\s\S]*?)<\/cim:GovSteamCC.t4hp>/g, obj, "t4hp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t4lp>([\s\S]*?)<\/cim:GovSteamCC.t4lp>/g, obj, "t4lp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t5hp>([\s\S]*?)<\/cim:GovSteamCC.t5hp>/g, obj, "t5hp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamCC.t5lp>([\s\S]*?)<\/cim:GovSteamCC.t5lp>/g, obj, "t5lp", base.to_string, sub, context);
                var bucket = context.parsed.GovSteamCC;
                if (null == bucket)
                   context.parsed.GovSteamCC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamCC", "dhp", "dhp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "dlp", "dlp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "fhp", "fhp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "flp", "flp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "pmaxhp", "pmaxhp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "pmaxlp", "pmaxlp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "rhp", "rhp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "rlp", "rlp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t1hp", "t1hp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t1lp", "t1lp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t3hp", "t3hp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t3lp", "t3lp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t4hp", "t4hp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t4lp", "t4lp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t5hp", "t5hp",  base.from_string, fields);
                base.export_element (obj, "GovSteamCC", "t5lp", "t5lp",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovSteamCC_collapse" aria-expanded="true" aria-controls="GovSteamCC_collapse" style="margin-left: 10px;">GovSteamCC</a></legend>
                    <div id="GovSteamCC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#dhp}}<div><b>dhp</b>: {{dhp}}</div>{{/dhp}}
                    {{#dlp}}<div><b>dlp</b>: {{dlp}}</div>{{/dlp}}
                    {{#fhp}}<div><b>fhp</b>: {{fhp}}</div>{{/fhp}}
                    {{#flp}}<div><b>flp</b>: {{flp}}</div>{{/flp}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pmaxhp}}<div><b>pmaxhp</b>: {{pmaxhp}}</div>{{/pmaxhp}}
                    {{#pmaxlp}}<div><b>pmaxlp</b>: {{pmaxlp}}</div>{{/pmaxlp}}
                    {{#rhp}}<div><b>rhp</b>: {{rhp}}</div>{{/rhp}}
                    {{#rlp}}<div><b>rlp</b>: {{rlp}}</div>{{/rlp}}
                    {{#t1hp}}<div><b>t1hp</b>: {{t1hp}}</div>{{/t1hp}}
                    {{#t1lp}}<div><b>t1lp</b>: {{t1lp}}</div>{{/t1lp}}
                    {{#t3hp}}<div><b>t3hp</b>: {{t3hp}}</div>{{/t3hp}}
                    {{#t3lp}}<div><b>t3lp</b>: {{t3lp}}</div>{{/t3lp}}
                    {{#t4hp}}<div><b>t4hp</b>: {{t4hp}}</div>{{/t4hp}}
                    {{#t4lp}}<div><b>t4lp</b>: {{t4lp}}</div>{{/t4lp}}
                    {{#t5hp}}<div><b>t5hp</b>: {{t5hp}}</div>{{/t5hp}}
                    {{#t5lp}}<div><b>t5lp</b>: {{t5lp}}</div>{{/t5lp}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovSteamCC_collapse" aria-expanded="true" aria-controls="{{id}}_GovSteamCC_collapse" style="margin-left: 10px;">GovSteamCC</a></legend>
                    <div id="{{id}}_GovSteamCC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dhp'>dhp: </label><div class='col-sm-8'><input id='{{id}}_dhp' class='form-control' type='text'{{#dhp}} value='{{dhp}}'{{/dhp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dlp'>dlp: </label><div class='col-sm-8'><input id='{{id}}_dlp' class='form-control' type='text'{{#dlp}} value='{{dlp}}'{{/dlp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fhp'>fhp: </label><div class='col-sm-8'><input id='{{id}}_fhp' class='form-control' type='text'{{#fhp}} value='{{fhp}}'{{/fhp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flp'>flp: </label><div class='col-sm-8'><input id='{{id}}_flp' class='form-control' type='text'{{#flp}} value='{{flp}}'{{/flp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmaxhp'>pmaxhp: </label><div class='col-sm-8'><input id='{{id}}_pmaxhp' class='form-control' type='text'{{#pmaxhp}} value='{{pmaxhp}}'{{/pmaxhp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmaxlp'>pmaxlp: </label><div class='col-sm-8'><input id='{{id}}_pmaxlp' class='form-control' type='text'{{#pmaxlp}} value='{{pmaxlp}}'{{/pmaxlp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rhp'>rhp: </label><div class='col-sm-8'><input id='{{id}}_rhp' class='form-control' type='text'{{#rhp}} value='{{rhp}}'{{/rhp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rlp'>rlp: </label><div class='col-sm-8'><input id='{{id}}_rlp' class='form-control' type='text'{{#rlp}} value='{{rlp}}'{{/rlp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1hp'>t1hp: </label><div class='col-sm-8'><input id='{{id}}_t1hp' class='form-control' type='text'{{#t1hp}} value='{{t1hp}}'{{/t1hp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1lp'>t1lp: </label><div class='col-sm-8'><input id='{{id}}_t1lp' class='form-control' type='text'{{#t1lp}} value='{{t1lp}}'{{/t1lp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3hp'>t3hp: </label><div class='col-sm-8'><input id='{{id}}_t3hp' class='form-control' type='text'{{#t3hp}} value='{{t3hp}}'{{/t3hp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3lp'>t3lp: </label><div class='col-sm-8'><input id='{{id}}_t3lp' class='form-control' type='text'{{#t3lp}} value='{{t3lp}}'{{/t3lp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4hp'>t4hp: </label><div class='col-sm-8'><input id='{{id}}_t4hp' class='form-control' type='text'{{#t4hp}} value='{{t4hp}}'{{/t4hp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4lp'>t4lp: </label><div class='col-sm-8'><input id='{{id}}_t4lp' class='form-control' type='text'{{#t4lp}} value='{{t4lp}}'{{/t4lp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5hp'>t5hp: </label><div class='col-sm-8'><input id='{{id}}_t5hp' class='form-control' type='text'{{#t5hp}} value='{{t5hp}}'{{/t5hp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5lp'>t5lp: </label><div class='col-sm-8'><input id='{{id}}_t5lp' class='form-control' type='text'{{#t5lp}} value='{{t5lp}}'{{/t5lp}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovSteamCC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dhp").value; if ("" != temp) obj.dhp = temp;
                temp = document.getElementById (id + "_dlp").value; if ("" != temp) obj.dlp = temp;
                temp = document.getElementById (id + "_fhp").value; if ("" != temp) obj.fhp = temp;
                temp = document.getElementById (id + "_flp").value; if ("" != temp) obj.flp = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pmaxhp").value; if ("" != temp) obj.pmaxhp = temp;
                temp = document.getElementById (id + "_pmaxlp").value; if ("" != temp) obj.pmaxlp = temp;
                temp = document.getElementById (id + "_rhp").value; if ("" != temp) obj.rhp = temp;
                temp = document.getElementById (id + "_rlp").value; if ("" != temp) obj.rlp = temp;
                temp = document.getElementById (id + "_t1hp").value; if ("" != temp) obj.t1hp = temp;
                temp = document.getElementById (id + "_t1lp").value; if ("" != temp) obj.t1lp = temp;
                temp = document.getElementById (id + "_t3hp").value; if ("" != temp) obj.t3hp = temp;
                temp = document.getElementById (id + "_t3lp").value; if ("" != temp) obj.t3lp = temp;
                temp = document.getElementById (id + "_t4hp").value; if ("" != temp) obj.t4hp = temp;
                temp = document.getElementById (id + "_t4lp").value; if ("" != temp) obj.t4lp = temp;
                temp = document.getElementById (id + "_t5hp").value; if ("" != temp) obj.t5hp = temp;
                temp = document.getElementById (id + "_t5lp").value; if ("" != temp) obj.t5lp = temp;

                return (obj);
            }
        }

        /**
         * PID governor and turbine.
         *
         */
        class GovHydroPID extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydroPID;
                if (null == bucket)
                   cim_data.GovHydroPID = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydroPID[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroPID";
                base.parse_element (/<cim:GovHydroPID.aturb>([\s\S]*?)<\/cim:GovHydroPID.aturb>/g, obj, "aturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.bturb>([\s\S]*?)<\/cim:GovHydroPID.bturb>/g, obj, "bturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.db1>([\s\S]*?)<\/cim:GovHydroPID.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.db2>([\s\S]*?)<\/cim:GovHydroPID.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.eps>([\s\S]*?)<\/cim:GovHydroPID.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.gv1>([\s\S]*?)<\/cim:GovHydroPID.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.gv2>([\s\S]*?)<\/cim:GovHydroPID.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.gv3>([\s\S]*?)<\/cim:GovHydroPID.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.gv4>([\s\S]*?)<\/cim:GovHydroPID.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.gv5>([\s\S]*?)<\/cim:GovHydroPID.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.gv6>([\s\S]*?)<\/cim:GovHydroPID.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.inputSignal>([\s\S]*?)<\/cim:GovHydroPID.inputSignal>/g, obj, "inputSignal", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroPID.kd>([\s\S]*?)<\/cim:GovHydroPID.kd>/g, obj, "kd", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.kg>([\s\S]*?)<\/cim:GovHydroPID.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.ki>([\s\S]*?)<\/cim:GovHydroPID.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.kp>([\s\S]*?)<\/cim:GovHydroPID.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.mwbase>([\s\S]*?)<\/cim:GovHydroPID.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pgv1>([\s\S]*?)<\/cim:GovHydroPID.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pgv2>([\s\S]*?)<\/cim:GovHydroPID.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pgv3>([\s\S]*?)<\/cim:GovHydroPID.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pgv4>([\s\S]*?)<\/cim:GovHydroPID.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pgv5>([\s\S]*?)<\/cim:GovHydroPID.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pgv6>([\s\S]*?)<\/cim:GovHydroPID.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pmax>([\s\S]*?)<\/cim:GovHydroPID.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.pmin>([\s\S]*?)<\/cim:GovHydroPID.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.r>([\s\S]*?)<\/cim:GovHydroPID.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.td>([\s\S]*?)<\/cim:GovHydroPID.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.tf>([\s\S]*?)<\/cim:GovHydroPID.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.tp>([\s\S]*?)<\/cim:GovHydroPID.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.tt>([\s\S]*?)<\/cim:GovHydroPID.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.tturb>([\s\S]*?)<\/cim:GovHydroPID.tturb>/g, obj, "tturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID.velcl>([\s\S]*?)<\/cim:GovHydroPID.velcl>/g, obj, "velcl", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroPID.velop>([\s\S]*?)<\/cim:GovHydroPID.velop>/g, obj, "velop", base.to_float, sub, context);
                var bucket = context.parsed.GovHydroPID;
                if (null == bucket)
                   context.parsed.GovHydroPID = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroPID", "aturb", "aturb",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "bturb", "bturb",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "db1", "db1",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "db2", "db2",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "eps", "eps",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "gv1", "gv1",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "gv2", "gv2",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "gv3", "gv3",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "gv4", "gv4",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "gv5", "gv5",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "gv6", "gv6",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "inputSignal", "inputSignal",  base.from_boolean, fields);
                base.export_element (obj, "GovHydroPID", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "kg", "kg",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pgv1", "pgv1",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pgv2", "pgv2",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pgv3", "pgv3",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pgv4", "pgv4",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pgv5", "pgv5",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pgv6", "pgv6",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "r", "r",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "td", "td",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "tp", "tp",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "tt", "tt",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "tturb", "tturb",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID", "velcl", "velcl",  base.from_float, fields);
                base.export_element (obj, "GovHydroPID", "velop", "velop",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydroPID_collapse" aria-expanded="true" aria-controls="GovHydroPID_collapse" style="margin-left: 10px;">GovHydroPID</a></legend>
                    <div id="GovHydroPID_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#aturb}}<div><b>aturb</b>: {{aturb}}</div>{{/aturb}}
                    {{#bturb}}<div><b>bturb</b>: {{bturb}}</div>{{/bturb}}
                    {{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
                    {{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
                    {{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
                    {{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
                    {{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
                    {{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
                    {{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
                    {{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
                    {{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
                    {{#inputSignal}}<div><b>inputSignal</b>: {{inputSignal}}</div>{{/inputSignal}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
                    {{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
                    {{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
                    {{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
                    {{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
                    {{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
                    {{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
                    {{#tturb}}<div><b>tturb</b>: {{tturb}}</div>{{/tturb}}
                    {{#velcl}}<div><b>velcl</b>: {{velcl}}</div>{{/velcl}}
                    {{#velop}}<div><b>velop</b>: {{velop}}</div>{{/velop}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydroPID_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydroPID_collapse" style="margin-left: 10px;">GovHydroPID</a></legend>
                    <div id="{{id}}_GovHydroPID_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aturb'>aturb: </label><div class='col-sm-8'><input id='{{id}}_aturb' class='form-control' type='text'{{#aturb}} value='{{aturb}}'{{/aturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bturb'>bturb: </label><div class='col-sm-8'><input id='{{id}}_bturb' class='form-control' type='text'{{#bturb}} value='{{bturb}}'{{/bturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db1'>db1: </label><div class='col-sm-8'><input id='{{id}}_db1' class='form-control' type='text'{{#db1}} value='{{db1}}'{{/db1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db2'>db2: </label><div class='col-sm-8'><input id='{{id}}_db2' class='form-control' type='text'{{#db2}} value='{{db2}}'{{/db2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eps'>eps: </label><div class='col-sm-8'><input id='{{id}}_eps' class='form-control' type='text'{{#eps}} value='{{eps}}'{{/eps}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv1'>gv1: </label><div class='col-sm-8'><input id='{{id}}_gv1' class='form-control' type='text'{{#gv1}} value='{{gv1}}'{{/gv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv2'>gv2: </label><div class='col-sm-8'><input id='{{id}}_gv2' class='form-control' type='text'{{#gv2}} value='{{gv2}}'{{/gv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv3'>gv3: </label><div class='col-sm-8'><input id='{{id}}_gv3' class='form-control' type='text'{{#gv3}} value='{{gv3}}'{{/gv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv4'>gv4: </label><div class='col-sm-8'><input id='{{id}}_gv4' class='form-control' type='text'{{#gv4}} value='{{gv4}}'{{/gv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv5'>gv5: </label><div class='col-sm-8'><input id='{{id}}_gv5' class='form-control' type='text'{{#gv5}} value='{{gv5}}'{{/gv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv6'>gv6: </label><div class='col-sm-8'><input id='{{id}}_gv6' class='form-control' type='text'{{#gv6}} value='{{gv6}}'{{/gv6}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_inputSignal'>inputSignal: </label><div class='col-sm-8'><input id='{{id}}_inputSignal' class='form-check-input' type='checkbox'{{#inputSignal}} checked{{/inputSignal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kg'>kg: </label><div class='col-sm-8'><input id='{{id}}_kg' class='form-control' type='text'{{#kg}} value='{{kg}}'{{/kg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv1'>pgv1: </label><div class='col-sm-8'><input id='{{id}}_pgv1' class='form-control' type='text'{{#pgv1}} value='{{pgv1}}'{{/pgv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv2'>pgv2: </label><div class='col-sm-8'><input id='{{id}}_pgv2' class='form-control' type='text'{{#pgv2}} value='{{pgv2}}'{{/pgv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv3'>pgv3: </label><div class='col-sm-8'><input id='{{id}}_pgv3' class='form-control' type='text'{{#pgv3}} value='{{pgv3}}'{{/pgv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv4'>pgv4: </label><div class='col-sm-8'><input id='{{id}}_pgv4' class='form-control' type='text'{{#pgv4}} value='{{pgv4}}'{{/pgv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv5'>pgv5: </label><div class='col-sm-8'><input id='{{id}}_pgv5' class='form-control' type='text'{{#pgv5}} value='{{pgv5}}'{{/pgv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv6'>pgv6: </label><div class='col-sm-8'><input id='{{id}}_pgv6' class='form-control' type='text'{{#pgv6}} value='{{pgv6}}'{{/pgv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td'>td: </label><div class='col-sm-8'><input id='{{id}}_td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tt'>tt: </label><div class='col-sm-8'><input id='{{id}}_tt' class='form-control' type='text'{{#tt}} value='{{tt}}'{{/tt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tturb'>tturb: </label><div class='col-sm-8'><input id='{{id}}_tturb' class='form-control' type='text'{{#tturb}} value='{{tturb}}'{{/tturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velcl'>velcl: </label><div class='col-sm-8'><input id='{{id}}_velcl' class='form-control' type='text'{{#velcl}} value='{{velcl}}'{{/velcl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velop'>velop: </label><div class='col-sm-8'><input id='{{id}}_velop' class='form-control' type='text'{{#velop}} value='{{velop}}'{{/velop}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydroPID" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_aturb").value; if ("" != temp) obj.aturb = temp;
                temp = document.getElementById (id + "_bturb").value; if ("" != temp) obj.bturb = temp;
                temp = document.getElementById (id + "_db1").value; if ("" != temp) obj.db1 = temp;
                temp = document.getElementById (id + "_db2").value; if ("" != temp) obj.db2 = temp;
                temp = document.getElementById (id + "_eps").value; if ("" != temp) obj.eps = temp;
                temp = document.getElementById (id + "_gv1").value; if ("" != temp) obj.gv1 = temp;
                temp = document.getElementById (id + "_gv2").value; if ("" != temp) obj.gv2 = temp;
                temp = document.getElementById (id + "_gv3").value; if ("" != temp) obj.gv3 = temp;
                temp = document.getElementById (id + "_gv4").value; if ("" != temp) obj.gv4 = temp;
                temp = document.getElementById (id + "_gv5").value; if ("" != temp) obj.gv5 = temp;
                temp = document.getElementById (id + "_gv6").value; if ("" != temp) obj.gv6 = temp;
                temp = document.getElementById (id + "_inputSignal").checked; if (temp) obj.inputSignal = true;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_kg").value; if ("" != temp) obj.kg = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pgv1").value; if ("" != temp) obj.pgv1 = temp;
                temp = document.getElementById (id + "_pgv2").value; if ("" != temp) obj.pgv2 = temp;
                temp = document.getElementById (id + "_pgv3").value; if ("" != temp) obj.pgv3 = temp;
                temp = document.getElementById (id + "_pgv4").value; if ("" != temp) obj.pgv4 = temp;
                temp = document.getElementById (id + "_pgv5").value; if ("" != temp) obj.pgv5 = temp;
                temp = document.getElementById (id + "_pgv6").value; if ("" != temp) obj.pgv6 = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_td").value; if ("" != temp) obj.td = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_tp").value; if ("" != temp) obj.tp = temp;
                temp = document.getElementById (id + "_tt").value; if ("" != temp) obj.tt = temp;
                temp = document.getElementById (id + "_tturb").value; if ("" != temp) obj.tturb = temp;
                temp = document.getElementById (id + "_velcl").value; if ("" != temp) obj.velcl = temp;
                temp = document.getElementById (id + "_velop").value; if ("" != temp) obj.velop = temp;

                return (obj);
            }
        }

        /**
         * General governor model with frequency-dependent fuel flow limit.
         *
         * This model is a modification of the GovCT1<b> </b>model in order to represent the frequency-dependent fuel flow limit of a specific gas turbine manufacturer.
         *
         */
        class GovCT2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovCT2;
                if (null == bucket)
                   cim_data.GovCT2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovCT2[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovCT2";
                base.parse_element (/<cim:GovCT2.aset>([\s\S]*?)<\/cim:GovCT2.aset>/g, obj, "aset", base.to_float, sub, context);
                base.parse_element (/<cim:GovCT2.db>([\s\S]*?)<\/cim:GovCT2.db>/g, obj, "db", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.dm>([\s\S]*?)<\/cim:GovCT2.dm>/g, obj, "dm", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim1>([\s\S]*?)<\/cim:GovCT2.flim1>/g, obj, "flim1", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim10>([\s\S]*?)<\/cim:GovCT2.flim10>/g, obj, "flim10", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim2>([\s\S]*?)<\/cim:GovCT2.flim2>/g, obj, "flim2", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim3>([\s\S]*?)<\/cim:GovCT2.flim3>/g, obj, "flim3", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim4>([\s\S]*?)<\/cim:GovCT2.flim4>/g, obj, "flim4", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim5>([\s\S]*?)<\/cim:GovCT2.flim5>/g, obj, "flim5", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim6>([\s\S]*?)<\/cim:GovCT2.flim6>/g, obj, "flim6", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim7>([\s\S]*?)<\/cim:GovCT2.flim7>/g, obj, "flim7", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim8>([\s\S]*?)<\/cim:GovCT2.flim8>/g, obj, "flim8", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.flim9>([\s\S]*?)<\/cim:GovCT2.flim9>/g, obj, "flim9", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.ka>([\s\S]*?)<\/cim:GovCT2.ka>/g, obj, "ka", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kdgov>([\s\S]*?)<\/cim:GovCT2.kdgov>/g, obj, "kdgov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kigov>([\s\S]*?)<\/cim:GovCT2.kigov>/g, obj, "kigov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kiload>([\s\S]*?)<\/cim:GovCT2.kiload>/g, obj, "kiload", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kimw>([\s\S]*?)<\/cim:GovCT2.kimw>/g, obj, "kimw", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kpgov>([\s\S]*?)<\/cim:GovCT2.kpgov>/g, obj, "kpgov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kpload>([\s\S]*?)<\/cim:GovCT2.kpload>/g, obj, "kpload", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.kturb>([\s\S]*?)<\/cim:GovCT2.kturb>/g, obj, "kturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.ldref>([\s\S]*?)<\/cim:GovCT2.ldref>/g, obj, "ldref", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.maxerr>([\s\S]*?)<\/cim:GovCT2.maxerr>/g, obj, "maxerr", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.minerr>([\s\S]*?)<\/cim:GovCT2.minerr>/g, obj, "minerr", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.mwbase>([\s\S]*?)<\/cim:GovCT2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim1>([\s\S]*?)<\/cim:GovCT2.plim1>/g, obj, "plim1", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim10>([\s\S]*?)<\/cim:GovCT2.plim10>/g, obj, "plim10", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim2>([\s\S]*?)<\/cim:GovCT2.plim2>/g, obj, "plim2", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim3>([\s\S]*?)<\/cim:GovCT2.plim3>/g, obj, "plim3", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim4>([\s\S]*?)<\/cim:GovCT2.plim4>/g, obj, "plim4", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim5>([\s\S]*?)<\/cim:GovCT2.plim5>/g, obj, "plim5", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim6>([\s\S]*?)<\/cim:GovCT2.plim6>/g, obj, "plim6", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim7>([\s\S]*?)<\/cim:GovCT2.plim7>/g, obj, "plim7", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim8>([\s\S]*?)<\/cim:GovCT2.plim8>/g, obj, "plim8", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.plim9>([\s\S]*?)<\/cim:GovCT2.plim9>/g, obj, "plim9", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.prate>([\s\S]*?)<\/cim:GovCT2.prate>/g, obj, "prate", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.r>([\s\S]*?)<\/cim:GovCT2.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.rclose>([\s\S]*?)<\/cim:GovCT2.rclose>/g, obj, "rclose", base.to_float, sub, context);
                base.parse_element (/<cim:GovCT2.rdown>([\s\S]*?)<\/cim:GovCT2.rdown>/g, obj, "rdown", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.ropen>([\s\S]*?)<\/cim:GovCT2.ropen>/g, obj, "ropen", base.to_float, sub, context);
                base.parse_attribute (/<cim:GovCT2.rselect\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "rselect", sub, context);
                base.parse_element (/<cim:GovCT2.rup>([\s\S]*?)<\/cim:GovCT2.rup>/g, obj, "rup", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.ta>([\s\S]*?)<\/cim:GovCT2.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tact>([\s\S]*?)<\/cim:GovCT2.tact>/g, obj, "tact", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tb>([\s\S]*?)<\/cim:GovCT2.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tc>([\s\S]*?)<\/cim:GovCT2.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tdgov>([\s\S]*?)<\/cim:GovCT2.tdgov>/g, obj, "tdgov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.teng>([\s\S]*?)<\/cim:GovCT2.teng>/g, obj, "teng", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tfload>([\s\S]*?)<\/cim:GovCT2.tfload>/g, obj, "tfload", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tpelec>([\s\S]*?)<\/cim:GovCT2.tpelec>/g, obj, "tpelec", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tsa>([\s\S]*?)<\/cim:GovCT2.tsa>/g, obj, "tsa", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.tsb>([\s\S]*?)<\/cim:GovCT2.tsb>/g, obj, "tsb", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.vmax>([\s\S]*?)<\/cim:GovCT2.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.vmin>([\s\S]*?)<\/cim:GovCT2.vmin>/g, obj, "vmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.wfnl>([\s\S]*?)<\/cim:GovCT2.wfnl>/g, obj, "wfnl", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT2.wfspd>([\s\S]*?)<\/cim:GovCT2.wfspd>/g, obj, "wfspd", base.to_boolean, sub, context);
                var bucket = context.parsed.GovCT2;
                if (null == bucket)
                   context.parsed.GovCT2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovCT2", "aset", "aset",  base.from_float, fields);
                base.export_element (obj, "GovCT2", "db", "db",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "dm", "dm",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim1", "flim1",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim10", "flim10",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim2", "flim2",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim3", "flim3",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim4", "flim4",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim5", "flim5",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim6", "flim6",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim7", "flim7",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim8", "flim8",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "flim9", "flim9",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "kdgov", "kdgov",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "kigov", "kigov",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "kiload", "kiload",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "kimw", "kimw",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "kpgov", "kpgov",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "kpload", "kpload",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "kturb", "kturb",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "ldref", "ldref",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "maxerr", "maxerr",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "minerr", "minerr",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim1", "plim1",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim10", "plim10",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim2", "plim2",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim3", "plim3",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim4", "plim4",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim5", "plim5",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim6", "plim6",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim7", "plim7",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim8", "plim8",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "plim9", "plim9",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "prate", "prate",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "r", "r",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "rclose", "rclose",  base.from_float, fields);
                base.export_element (obj, "GovCT2", "rdown", "rdown",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "ropen", "ropen",  base.from_float, fields);
                base.export_attribute (obj, "GovCT2", "rselect", "rselect", fields);
                base.export_element (obj, "GovCT2", "rup", "rup",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "tact", "tact",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "tdgov", "tdgov",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "teng", "teng",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "tfload", "tfload",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "tpelec", "tpelec",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "tsa", "tsa",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "tsb", "tsb",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "vmax", "vmax",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "vmin", "vmin",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "wfnl", "wfnl",  base.from_string, fields);
                base.export_element (obj, "GovCT2", "wfspd", "wfspd",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovCT2_collapse" aria-expanded="true" aria-controls="GovCT2_collapse" style="margin-left: 10px;">GovCT2</a></legend>
                    <div id="GovCT2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#aset}}<div><b>aset</b>: {{aset}}</div>{{/aset}}
                    {{#db}}<div><b>db</b>: {{db}}</div>{{/db}}
                    {{#dm}}<div><b>dm</b>: {{dm}}</div>{{/dm}}
                    {{#flim1}}<div><b>flim1</b>: {{flim1}}</div>{{/flim1}}
                    {{#flim10}}<div><b>flim10</b>: {{flim10}}</div>{{/flim10}}
                    {{#flim2}}<div><b>flim2</b>: {{flim2}}</div>{{/flim2}}
                    {{#flim3}}<div><b>flim3</b>: {{flim3}}</div>{{/flim3}}
                    {{#flim4}}<div><b>flim4</b>: {{flim4}}</div>{{/flim4}}
                    {{#flim5}}<div><b>flim5</b>: {{flim5}}</div>{{/flim5}}
                    {{#flim6}}<div><b>flim6</b>: {{flim6}}</div>{{/flim6}}
                    {{#flim7}}<div><b>flim7</b>: {{flim7}}</div>{{/flim7}}
                    {{#flim8}}<div><b>flim8</b>: {{flim8}}</div>{{/flim8}}
                    {{#flim9}}<div><b>flim9</b>: {{flim9}}</div>{{/flim9}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kdgov}}<div><b>kdgov</b>: {{kdgov}}</div>{{/kdgov}}
                    {{#kigov}}<div><b>kigov</b>: {{kigov}}</div>{{/kigov}}
                    {{#kiload}}<div><b>kiload</b>: {{kiload}}</div>{{/kiload}}
                    {{#kimw}}<div><b>kimw</b>: {{kimw}}</div>{{/kimw}}
                    {{#kpgov}}<div><b>kpgov</b>: {{kpgov}}</div>{{/kpgov}}
                    {{#kpload}}<div><b>kpload</b>: {{kpload}}</div>{{/kpload}}
                    {{#kturb}}<div><b>kturb</b>: {{kturb}}</div>{{/kturb}}
                    {{#ldref}}<div><b>ldref</b>: {{ldref}}</div>{{/ldref}}
                    {{#maxerr}}<div><b>maxerr</b>: {{maxerr}}</div>{{/maxerr}}
                    {{#minerr}}<div><b>minerr</b>: {{minerr}}</div>{{/minerr}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#plim1}}<div><b>plim1</b>: {{plim1}}</div>{{/plim1}}
                    {{#plim10}}<div><b>plim10</b>: {{plim10}}</div>{{/plim10}}
                    {{#plim2}}<div><b>plim2</b>: {{plim2}}</div>{{/plim2}}
                    {{#plim3}}<div><b>plim3</b>: {{plim3}}</div>{{/plim3}}
                    {{#plim4}}<div><b>plim4</b>: {{plim4}}</div>{{/plim4}}
                    {{#plim5}}<div><b>plim5</b>: {{plim5}}</div>{{/plim5}}
                    {{#plim6}}<div><b>plim6</b>: {{plim6}}</div>{{/plim6}}
                    {{#plim7}}<div><b>plim7</b>: {{plim7}}</div>{{/plim7}}
                    {{#plim8}}<div><b>plim8</b>: {{plim8}}</div>{{/plim8}}
                    {{#plim9}}<div><b>plim9</b>: {{plim9}}</div>{{/plim9}}
                    {{#prate}}<div><b>prate</b>: {{prate}}</div>{{/prate}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#rclose}}<div><b>rclose</b>: {{rclose}}</div>{{/rclose}}
                    {{#rdown}}<div><b>rdown</b>: {{rdown}}</div>{{/rdown}}
                    {{#ropen}}<div><b>ropen</b>: {{ropen}}</div>{{/ropen}}
                    {{#rselect}}<div><b>rselect</b>: {{rselect}}</div>{{/rselect}}
                    {{#rup}}<div><b>rup</b>: {{rup}}</div>{{/rup}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tact}}<div><b>tact</b>: {{tact}}</div>{{/tact}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#tdgov}}<div><b>tdgov</b>: {{tdgov}}</div>{{/tdgov}}
                    {{#teng}}<div><b>teng</b>: {{teng}}</div>{{/teng}}
                    {{#tfload}}<div><b>tfload</b>: {{tfload}}</div>{{/tfload}}
                    {{#tpelec}}<div><b>tpelec</b>: {{tpelec}}</div>{{/tpelec}}
                    {{#tsa}}<div><b>tsa</b>: {{tsa}}</div>{{/tsa}}
                    {{#tsb}}<div><b>tsb</b>: {{tsb}}</div>{{/tsb}}
                    {{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
                    {{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
                    {{#wfnl}}<div><b>wfnl</b>: {{wfnl}}</div>{{/wfnl}}
                    {{#wfspd}}<div><b>wfspd</b>: {{wfspd}}</div>{{/wfspd}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.DroopSignalFeedbackKind = []; if (!obj.rselect) obj.DroopSignalFeedbackKind.push ({ id: '', selected: true}); for (var property in DroopSignalFeedbackKind) obj.DroopSignalFeedbackKind.push ({ id: property, selected: obj.rselect && obj.rselect.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DroopSignalFeedbackKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovCT2_collapse" aria-expanded="true" aria-controls="{{id}}_GovCT2_collapse" style="margin-left: 10px;">GovCT2</a></legend>
                    <div id="{{id}}_GovCT2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aset'>aset: </label><div class='col-sm-8'><input id='{{id}}_aset' class='form-control' type='text'{{#aset}} value='{{aset}}'{{/aset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db'>db: </label><div class='col-sm-8'><input id='{{id}}_db' class='form-control' type='text'{{#db}} value='{{db}}'{{/db}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dm'>dm: </label><div class='col-sm-8'><input id='{{id}}_dm' class='form-control' type='text'{{#dm}} value='{{dm}}'{{/dm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flim1'>flim1: </label><div class='col-sm-8'><input id='{{id}}_flim1' class='form-control' type='text'{{#flim1}} value='{{flim1}}'{{/flim1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flim10'>flim10: </label><div class='col-sm-8'><input id='{{id}}_flim10' class='form-control' type='text'{{#flim10}} value='{{flim10}}'{{/flim10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flim2'>flim2: </label><div class='col-sm-8'><input id='{{id}}_flim2' class='form-control' type='text'{{#flim2}} value='{{flim2}}'{{/flim2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flim3'>flim3: </label><div class='col-sm-8'><input id='{{id}}_flim3' class='form-control' type='text'{{#flim3}} value='{{flim3}}'{{/flim3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flim4'>flim4: </label><div class='col-sm-8'><input id='{{id}}_flim4' class='form-control' type='text'{{#flim4}} value='{{flim4}}'{{/flim4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flim5'>flim5: </label><div class='col-sm-8'><input id='{{id}}_flim5' class='form-control' type='text'{{#flim5}} value='{{flim5}}'{{/flim5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flim6'>flim6: </label><div class='col-sm-8'><input id='{{id}}_flim6' class='form-control' type='text'{{#flim6}} value='{{flim6}}'{{/flim6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flim7'>flim7: </label><div class='col-sm-8'><input id='{{id}}_flim7' class='form-control' type='text'{{#flim7}} value='{{flim7}}'{{/flim7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flim8'>flim8: </label><div class='col-sm-8'><input id='{{id}}_flim8' class='form-control' type='text'{{#flim8}} value='{{flim8}}'{{/flim8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flim9'>flim9: </label><div class='col-sm-8'><input id='{{id}}_flim9' class='form-control' type='text'{{#flim9}} value='{{flim9}}'{{/flim9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kdgov'>kdgov: </label><div class='col-sm-8'><input id='{{id}}_kdgov' class='form-control' type='text'{{#kdgov}} value='{{kdgov}}'{{/kdgov}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kigov'>kigov: </label><div class='col-sm-8'><input id='{{id}}_kigov' class='form-control' type='text'{{#kigov}} value='{{kigov}}'{{/kigov}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kiload'>kiload: </label><div class='col-sm-8'><input id='{{id}}_kiload' class='form-control' type='text'{{#kiload}} value='{{kiload}}'{{/kiload}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kimw'>kimw: </label><div class='col-sm-8'><input id='{{id}}_kimw' class='form-control' type='text'{{#kimw}} value='{{kimw}}'{{/kimw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpgov'>kpgov: </label><div class='col-sm-8'><input id='{{id}}_kpgov' class='form-control' type='text'{{#kpgov}} value='{{kpgov}}'{{/kpgov}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpload'>kpload: </label><div class='col-sm-8'><input id='{{id}}_kpload' class='form-control' type='text'{{#kpload}} value='{{kpload}}'{{/kpload}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kturb'>kturb: </label><div class='col-sm-8'><input id='{{id}}_kturb' class='form-control' type='text'{{#kturb}} value='{{kturb}}'{{/kturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ldref'>ldref: </label><div class='col-sm-8'><input id='{{id}}_ldref' class='form-control' type='text'{{#ldref}} value='{{ldref}}'{{/ldref}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxerr'>maxerr: </label><div class='col-sm-8'><input id='{{id}}_maxerr' class='form-control' type='text'{{#maxerr}} value='{{maxerr}}'{{/maxerr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minerr'>minerr: </label><div class='col-sm-8'><input id='{{id}}_minerr' class='form-control' type='text'{{#minerr}} value='{{minerr}}'{{/minerr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plim1'>plim1: </label><div class='col-sm-8'><input id='{{id}}_plim1' class='form-control' type='text'{{#plim1}} value='{{plim1}}'{{/plim1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plim10'>plim10: </label><div class='col-sm-8'><input id='{{id}}_plim10' class='form-control' type='text'{{#plim10}} value='{{plim10}}'{{/plim10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plim2'>plim2: </label><div class='col-sm-8'><input id='{{id}}_plim2' class='form-control' type='text'{{#plim2}} value='{{plim2}}'{{/plim2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plim3'>plim3: </label><div class='col-sm-8'><input id='{{id}}_plim3' class='form-control' type='text'{{#plim3}} value='{{plim3}}'{{/plim3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plim4'>plim4: </label><div class='col-sm-8'><input id='{{id}}_plim4' class='form-control' type='text'{{#plim4}} value='{{plim4}}'{{/plim4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plim5'>plim5: </label><div class='col-sm-8'><input id='{{id}}_plim5' class='form-control' type='text'{{#plim5}} value='{{plim5}}'{{/plim5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plim6'>plim6: </label><div class='col-sm-8'><input id='{{id}}_plim6' class='form-control' type='text'{{#plim6}} value='{{plim6}}'{{/plim6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plim7'>plim7: </label><div class='col-sm-8'><input id='{{id}}_plim7' class='form-control' type='text'{{#plim7}} value='{{plim7}}'{{/plim7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plim8'>plim8: </label><div class='col-sm-8'><input id='{{id}}_plim8' class='form-control' type='text'{{#plim8}} value='{{plim8}}'{{/plim8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plim9'>plim9: </label><div class='col-sm-8'><input id='{{id}}_plim9' class='form-control' type='text'{{#plim9}} value='{{plim9}}'{{/plim9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_prate'>prate: </label><div class='col-sm-8'><input id='{{id}}_prate' class='form-control' type='text'{{#prate}} value='{{prate}}'{{/prate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rclose'>rclose: </label><div class='col-sm-8'><input id='{{id}}_rclose' class='form-control' type='text'{{#rclose}} value='{{rclose}}'{{/rclose}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rdown'>rdown: </label><div class='col-sm-8'><input id='{{id}}_rdown' class='form-control' type='text'{{#rdown}} value='{{rdown}}'{{/rdown}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ropen'>ropen: </label><div class='col-sm-8'><input id='{{id}}_ropen' class='form-control' type='text'{{#ropen}} value='{{ropen}}'{{/ropen}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rselect'>rselect: </label><div class='col-sm-8'><select id='{{id}}_rselect' class='form-control'>{{#DroopSignalFeedbackKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/DroopSignalFeedbackKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rup'>rup: </label><div class='col-sm-8'><input id='{{id}}_rup' class='form-control' type='text'{{#rup}} value='{{rup}}'{{/rup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tact'>tact: </label><div class='col-sm-8'><input id='{{id}}_tact' class='form-control' type='text'{{#tact}} value='{{tact}}'{{/tact}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tdgov'>tdgov: </label><div class='col-sm-8'><input id='{{id}}_tdgov' class='form-control' type='text'{{#tdgov}} value='{{tdgov}}'{{/tdgov}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_teng'>teng: </label><div class='col-sm-8'><input id='{{id}}_teng' class='form-control' type='text'{{#teng}} value='{{teng}}'{{/teng}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tfload'>tfload: </label><div class='col-sm-8'><input id='{{id}}_tfload' class='form-control' type='text'{{#tfload}} value='{{tfload}}'{{/tfload}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpelec'>tpelec: </label><div class='col-sm-8'><input id='{{id}}_tpelec' class='form-control' type='text'{{#tpelec}} value='{{tpelec}}'{{/tpelec}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tsa'>tsa: </label><div class='col-sm-8'><input id='{{id}}_tsa' class='form-control' type='text'{{#tsa}} value='{{tsa}}'{{/tsa}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tsb'>tsb: </label><div class='col-sm-8'><input id='{{id}}_tsb' class='form-control' type='text'{{#tsb}} value='{{tsb}}'{{/tsb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmax'>vmax: </label><div class='col-sm-8'><input id='{{id}}_vmax' class='form-control' type='text'{{#vmax}} value='{{vmax}}'{{/vmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmin'>vmin: </label><div class='col-sm-8'><input id='{{id}}_vmin' class='form-control' type='text'{{#vmin}} value='{{vmin}}'{{/vmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_wfnl'>wfnl: </label><div class='col-sm-8'><input id='{{id}}_wfnl' class='form-control' type='text'{{#wfnl}} value='{{wfnl}}'{{/wfnl}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_wfspd'>wfspd: </label><div class='col-sm-8'><input id='{{id}}_wfspd' class='form-check-input' type='checkbox'{{#wfspd}} checked{{/wfspd}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovCT2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_aset").value; if ("" != temp) obj.aset = temp;
                temp = document.getElementById (id + "_db").value; if ("" != temp) obj.db = temp;
                temp = document.getElementById (id + "_dm").value; if ("" != temp) obj.dm = temp;
                temp = document.getElementById (id + "_flim1").value; if ("" != temp) obj.flim1 = temp;
                temp = document.getElementById (id + "_flim10").value; if ("" != temp) obj.flim10 = temp;
                temp = document.getElementById (id + "_flim2").value; if ("" != temp) obj.flim2 = temp;
                temp = document.getElementById (id + "_flim3").value; if ("" != temp) obj.flim3 = temp;
                temp = document.getElementById (id + "_flim4").value; if ("" != temp) obj.flim4 = temp;
                temp = document.getElementById (id + "_flim5").value; if ("" != temp) obj.flim5 = temp;
                temp = document.getElementById (id + "_flim6").value; if ("" != temp) obj.flim6 = temp;
                temp = document.getElementById (id + "_flim7").value; if ("" != temp) obj.flim7 = temp;
                temp = document.getElementById (id + "_flim8").value; if ("" != temp) obj.flim8 = temp;
                temp = document.getElementById (id + "_flim9").value; if ("" != temp) obj.flim9 = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kdgov").value; if ("" != temp) obj.kdgov = temp;
                temp = document.getElementById (id + "_kigov").value; if ("" != temp) obj.kigov = temp;
                temp = document.getElementById (id + "_kiload").value; if ("" != temp) obj.kiload = temp;
                temp = document.getElementById (id + "_kimw").value; if ("" != temp) obj.kimw = temp;
                temp = document.getElementById (id + "_kpgov").value; if ("" != temp) obj.kpgov = temp;
                temp = document.getElementById (id + "_kpload").value; if ("" != temp) obj.kpload = temp;
                temp = document.getElementById (id + "_kturb").value; if ("" != temp) obj.kturb = temp;
                temp = document.getElementById (id + "_ldref").value; if ("" != temp) obj.ldref = temp;
                temp = document.getElementById (id + "_maxerr").value; if ("" != temp) obj.maxerr = temp;
                temp = document.getElementById (id + "_minerr").value; if ("" != temp) obj.minerr = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_plim1").value; if ("" != temp) obj.plim1 = temp;
                temp = document.getElementById (id + "_plim10").value; if ("" != temp) obj.plim10 = temp;
                temp = document.getElementById (id + "_plim2").value; if ("" != temp) obj.plim2 = temp;
                temp = document.getElementById (id + "_plim3").value; if ("" != temp) obj.plim3 = temp;
                temp = document.getElementById (id + "_plim4").value; if ("" != temp) obj.plim4 = temp;
                temp = document.getElementById (id + "_plim5").value; if ("" != temp) obj.plim5 = temp;
                temp = document.getElementById (id + "_plim6").value; if ("" != temp) obj.plim6 = temp;
                temp = document.getElementById (id + "_plim7").value; if ("" != temp) obj.plim7 = temp;
                temp = document.getElementById (id + "_plim8").value; if ("" != temp) obj.plim8 = temp;
                temp = document.getElementById (id + "_plim9").value; if ("" != temp) obj.plim9 = temp;
                temp = document.getElementById (id + "_prate").value; if ("" != temp) obj.prate = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_rclose").value; if ("" != temp) obj.rclose = temp;
                temp = document.getElementById (id + "_rdown").value; if ("" != temp) obj.rdown = temp;
                temp = document.getElementById (id + "_ropen").value; if ("" != temp) obj.ropen = temp;
                temp = document.getElementById (id + "_rselect").value; if ("" != temp) { temp = DroopSignalFeedbackKind[temp]; if ("undefined" != typeof (temp)) obj.rselect = "#http://iec.ch/TC57/2013/CIM-schema-cim16#DroopSignalFeedbackKind." + temp; }
                temp = document.getElementById (id + "_rup").value; if ("" != temp) obj.rup = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tact").value; if ("" != temp) obj.tact = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_tdgov").value; if ("" != temp) obj.tdgov = temp;
                temp = document.getElementById (id + "_teng").value; if ("" != temp) obj.teng = temp;
                temp = document.getElementById (id + "_tfload").value; if ("" != temp) obj.tfload = temp;
                temp = document.getElementById (id + "_tpelec").value; if ("" != temp) obj.tpelec = temp;
                temp = document.getElementById (id + "_tsa").value; if ("" != temp) obj.tsa = temp;
                temp = document.getElementById (id + "_tsb").value; if ("" != temp) obj.tsb = temp;
                temp = document.getElementById (id + "_vmax").value; if ("" != temp) obj.vmax = temp;
                temp = document.getElementById (id + "_vmin").value; if ("" != temp) obj.vmin = temp;
                temp = document.getElementById (id + "_wfnl").value; if ("" != temp) obj.wfnl = temp;
                temp = document.getElementById (id + "_wfspd").checked; if (temp) obj.wfspd = true;

                return (obj);
            }
        }

        /**
         * IEEE hydro turbine governor model represents plants with straightforward penstock configurations and hydraulic-dashpot governors.
         *
         */
        class GovHydro2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydro2;
                if (null == bucket)
                   cim_data.GovHydro2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydro2[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydro2";
                base.parse_element (/<cim:GovHydro2.aturb>([\s\S]*?)<\/cim:GovHydro2.aturb>/g, obj, "aturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.bturb>([\s\S]*?)<\/cim:GovHydro2.bturb>/g, obj, "bturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.db1>([\s\S]*?)<\/cim:GovHydro2.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.db2>([\s\S]*?)<\/cim:GovHydro2.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.eps>([\s\S]*?)<\/cim:GovHydro2.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.gv1>([\s\S]*?)<\/cim:GovHydro2.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.gv2>([\s\S]*?)<\/cim:GovHydro2.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.gv3>([\s\S]*?)<\/cim:GovHydro2.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.gv4>([\s\S]*?)<\/cim:GovHydro2.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.gv5>([\s\S]*?)<\/cim:GovHydro2.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.gv6>([\s\S]*?)<\/cim:GovHydro2.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.kturb>([\s\S]*?)<\/cim:GovHydro2.kturb>/g, obj, "kturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.mwbase>([\s\S]*?)<\/cim:GovHydro2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pgv1>([\s\S]*?)<\/cim:GovHydro2.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pgv2>([\s\S]*?)<\/cim:GovHydro2.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pgv3>([\s\S]*?)<\/cim:GovHydro2.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pgv4>([\s\S]*?)<\/cim:GovHydro2.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pgv5>([\s\S]*?)<\/cim:GovHydro2.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pgv6>([\s\S]*?)<\/cim:GovHydro2.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pmax>([\s\S]*?)<\/cim:GovHydro2.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.pmin>([\s\S]*?)<\/cim:GovHydro2.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.rperm>([\s\S]*?)<\/cim:GovHydro2.rperm>/g, obj, "rperm", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.rtemp>([\s\S]*?)<\/cim:GovHydro2.rtemp>/g, obj, "rtemp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.tg>([\s\S]*?)<\/cim:GovHydro2.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.tp>([\s\S]*?)<\/cim:GovHydro2.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.tr>([\s\S]*?)<\/cim:GovHydro2.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.tw>([\s\S]*?)<\/cim:GovHydro2.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro2.uc>([\s\S]*?)<\/cim:GovHydro2.uc>/g, obj, "uc", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydro2.uo>([\s\S]*?)<\/cim:GovHydro2.uo>/g, obj, "uo", base.to_float, sub, context);
                var bucket = context.parsed.GovHydro2;
                if (null == bucket)
                   context.parsed.GovHydro2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydro2", "aturb", "aturb",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "bturb", "bturb",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "db1", "db1",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "db2", "db2",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "eps", "eps",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "gv1", "gv1",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "gv2", "gv2",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "gv3", "gv3",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "gv4", "gv4",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "gv5", "gv5",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "gv6", "gv6",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "kturb", "kturb",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pgv1", "pgv1",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pgv2", "pgv2",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pgv3", "pgv3",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pgv4", "pgv4",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pgv5", "pgv5",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pgv6", "pgv6",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "rperm", "rperm",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "rtemp", "rtemp",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "tg", "tg",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "tp", "tp",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "tr", "tr",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "tw", "tw",  base.from_string, fields);
                base.export_element (obj, "GovHydro2", "uc", "uc",  base.from_float, fields);
                base.export_element (obj, "GovHydro2", "uo", "uo",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydro2_collapse" aria-expanded="true" aria-controls="GovHydro2_collapse" style="margin-left: 10px;">GovHydro2</a></legend>
                    <div id="GovHydro2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#aturb}}<div><b>aturb</b>: {{aturb}}</div>{{/aturb}}
                    {{#bturb}}<div><b>bturb</b>: {{bturb}}</div>{{/bturb}}
                    {{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
                    {{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
                    {{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
                    {{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
                    {{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
                    {{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
                    {{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
                    {{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
                    {{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
                    {{#kturb}}<div><b>kturb</b>: {{kturb}}</div>{{/kturb}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
                    {{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
                    {{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
                    {{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
                    {{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
                    {{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#rperm}}<div><b>rperm</b>: {{rperm}}</div>{{/rperm}}
                    {{#rtemp}}<div><b>rtemp</b>: {{rtemp}}</div>{{/rtemp}}
                    {{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
                    {{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
                    {{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
                    {{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
                    {{#uo}}<div><b>uo</b>: {{uo}}</div>{{/uo}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydro2_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydro2_collapse" style="margin-left: 10px;">GovHydro2</a></legend>
                    <div id="{{id}}_GovHydro2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aturb'>aturb: </label><div class='col-sm-8'><input id='{{id}}_aturb' class='form-control' type='text'{{#aturb}} value='{{aturb}}'{{/aturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bturb'>bturb: </label><div class='col-sm-8'><input id='{{id}}_bturb' class='form-control' type='text'{{#bturb}} value='{{bturb}}'{{/bturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db1'>db1: </label><div class='col-sm-8'><input id='{{id}}_db1' class='form-control' type='text'{{#db1}} value='{{db1}}'{{/db1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db2'>db2: </label><div class='col-sm-8'><input id='{{id}}_db2' class='form-control' type='text'{{#db2}} value='{{db2}}'{{/db2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eps'>eps: </label><div class='col-sm-8'><input id='{{id}}_eps' class='form-control' type='text'{{#eps}} value='{{eps}}'{{/eps}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv1'>gv1: </label><div class='col-sm-8'><input id='{{id}}_gv1' class='form-control' type='text'{{#gv1}} value='{{gv1}}'{{/gv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv2'>gv2: </label><div class='col-sm-8'><input id='{{id}}_gv2' class='form-control' type='text'{{#gv2}} value='{{gv2}}'{{/gv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv3'>gv3: </label><div class='col-sm-8'><input id='{{id}}_gv3' class='form-control' type='text'{{#gv3}} value='{{gv3}}'{{/gv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv4'>gv4: </label><div class='col-sm-8'><input id='{{id}}_gv4' class='form-control' type='text'{{#gv4}} value='{{gv4}}'{{/gv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv5'>gv5: </label><div class='col-sm-8'><input id='{{id}}_gv5' class='form-control' type='text'{{#gv5}} value='{{gv5}}'{{/gv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv6'>gv6: </label><div class='col-sm-8'><input id='{{id}}_gv6' class='form-control' type='text'{{#gv6}} value='{{gv6}}'{{/gv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kturb'>kturb: </label><div class='col-sm-8'><input id='{{id}}_kturb' class='form-control' type='text'{{#kturb}} value='{{kturb}}'{{/kturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv1'>pgv1: </label><div class='col-sm-8'><input id='{{id}}_pgv1' class='form-control' type='text'{{#pgv1}} value='{{pgv1}}'{{/pgv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv2'>pgv2: </label><div class='col-sm-8'><input id='{{id}}_pgv2' class='form-control' type='text'{{#pgv2}} value='{{pgv2}}'{{/pgv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv3'>pgv3: </label><div class='col-sm-8'><input id='{{id}}_pgv3' class='form-control' type='text'{{#pgv3}} value='{{pgv3}}'{{/pgv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv4'>pgv4: </label><div class='col-sm-8'><input id='{{id}}_pgv4' class='form-control' type='text'{{#pgv4}} value='{{pgv4}}'{{/pgv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv5'>pgv5: </label><div class='col-sm-8'><input id='{{id}}_pgv5' class='form-control' type='text'{{#pgv5}} value='{{pgv5}}'{{/pgv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv6'>pgv6: </label><div class='col-sm-8'><input id='{{id}}_pgv6' class='form-control' type='text'{{#pgv6}} value='{{pgv6}}'{{/pgv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rperm'>rperm: </label><div class='col-sm-8'><input id='{{id}}_rperm' class='form-control' type='text'{{#rperm}} value='{{rperm}}'{{/rperm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rtemp'>rtemp: </label><div class='col-sm-8'><input id='{{id}}_rtemp' class='form-control' type='text'{{#rtemp}} value='{{rtemp}}'{{/rtemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tg'>tg: </label><div class='col-sm-8'><input id='{{id}}_tg' class='form-control' type='text'{{#tg}} value='{{tg}}'{{/tg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tr'>tr: </label><div class='col-sm-8'><input id='{{id}}_tr' class='form-control' type='text'{{#tr}} value='{{tr}}'{{/tr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw'>tw: </label><div class='col-sm-8'><input id='{{id}}_tw' class='form-control' type='text'{{#tw}} value='{{tw}}'{{/tw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uc'>uc: </label><div class='col-sm-8'><input id='{{id}}_uc' class='form-control' type='text'{{#uc}} value='{{uc}}'{{/uc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uo'>uo: </label><div class='col-sm-8'><input id='{{id}}_uo' class='form-control' type='text'{{#uo}} value='{{uo}}'{{/uo}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydro2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_aturb").value; if ("" != temp) obj.aturb = temp;
                temp = document.getElementById (id + "_bturb").value; if ("" != temp) obj.bturb = temp;
                temp = document.getElementById (id + "_db1").value; if ("" != temp) obj.db1 = temp;
                temp = document.getElementById (id + "_db2").value; if ("" != temp) obj.db2 = temp;
                temp = document.getElementById (id + "_eps").value; if ("" != temp) obj.eps = temp;
                temp = document.getElementById (id + "_gv1").value; if ("" != temp) obj.gv1 = temp;
                temp = document.getElementById (id + "_gv2").value; if ("" != temp) obj.gv2 = temp;
                temp = document.getElementById (id + "_gv3").value; if ("" != temp) obj.gv3 = temp;
                temp = document.getElementById (id + "_gv4").value; if ("" != temp) obj.gv4 = temp;
                temp = document.getElementById (id + "_gv5").value; if ("" != temp) obj.gv5 = temp;
                temp = document.getElementById (id + "_gv6").value; if ("" != temp) obj.gv6 = temp;
                temp = document.getElementById (id + "_kturb").value; if ("" != temp) obj.kturb = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pgv1").value; if ("" != temp) obj.pgv1 = temp;
                temp = document.getElementById (id + "_pgv2").value; if ("" != temp) obj.pgv2 = temp;
                temp = document.getElementById (id + "_pgv3").value; if ("" != temp) obj.pgv3 = temp;
                temp = document.getElementById (id + "_pgv4").value; if ("" != temp) obj.pgv4 = temp;
                temp = document.getElementById (id + "_pgv5").value; if ("" != temp) obj.pgv5 = temp;
                temp = document.getElementById (id + "_pgv6").value; if ("" != temp) obj.pgv6 = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_rperm").value; if ("" != temp) obj.rperm = temp;
                temp = document.getElementById (id + "_rtemp").value; if ("" != temp) obj.rtemp = temp;
                temp = document.getElementById (id + "_tg").value; if ("" != temp) obj.tg = temp;
                temp = document.getElementById (id + "_tp").value; if ("" != temp) obj.tp = temp;
                temp = document.getElementById (id + "_tr").value; if ("" != temp) obj.tr = temp;
                temp = document.getElementById (id + "_tw").value; if ("" != temp) obj.tw = temp;
                temp = document.getElementById (id + "_uc").value; if ("" != temp) obj.uc = temp;
                temp = document.getElementById (id + "_uo").value; if ("" != temp) obj.uo = temp;

                return (obj);
            }
        }

        /**
         * IEEE hydro turbine governor model represents plants with straightforward penstock configurations and hydraulic-dashpot governors.
         *
         * Ref<font color="#0f0f0f">erence: IEEE Transactions on Power Apparatus and Systems</font>
         *
         */
        class GovHydroIEEE2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydroIEEE2;
                if (null == bucket)
                   cim_data.GovHydroIEEE2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydroIEEE2[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroIEEE2";
                base.parse_element (/<cim:GovHydroIEEE2.aturb>([\s\S]*?)<\/cim:GovHydroIEEE2.aturb>/g, obj, "aturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.bturb>([\s\S]*?)<\/cim:GovHydroIEEE2.bturb>/g, obj, "bturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.gv1>([\s\S]*?)<\/cim:GovHydroIEEE2.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.gv2>([\s\S]*?)<\/cim:GovHydroIEEE2.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.gv3>([\s\S]*?)<\/cim:GovHydroIEEE2.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.gv4>([\s\S]*?)<\/cim:GovHydroIEEE2.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.gv5>([\s\S]*?)<\/cim:GovHydroIEEE2.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.gv6>([\s\S]*?)<\/cim:GovHydroIEEE2.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.kturb>([\s\S]*?)<\/cim:GovHydroIEEE2.kturb>/g, obj, "kturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.mwbase>([\s\S]*?)<\/cim:GovHydroIEEE2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pgv1>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pgv2>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pgv3>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pgv4>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pgv5>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pgv6>([\s\S]*?)<\/cim:GovHydroIEEE2.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pmax>([\s\S]*?)<\/cim:GovHydroIEEE2.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.pmin>([\s\S]*?)<\/cim:GovHydroIEEE2.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.rperm>([\s\S]*?)<\/cim:GovHydroIEEE2.rperm>/g, obj, "rperm", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.rtemp>([\s\S]*?)<\/cim:GovHydroIEEE2.rtemp>/g, obj, "rtemp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.tg>([\s\S]*?)<\/cim:GovHydroIEEE2.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.tp>([\s\S]*?)<\/cim:GovHydroIEEE2.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.tr>([\s\S]*?)<\/cim:GovHydroIEEE2.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.tw>([\s\S]*?)<\/cim:GovHydroIEEE2.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.uc>([\s\S]*?)<\/cim:GovHydroIEEE2.uc>/g, obj, "uc", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroIEEE2.uo>([\s\S]*?)<\/cim:GovHydroIEEE2.uo>/g, obj, "uo", base.to_float, sub, context);
                var bucket = context.parsed.GovHydroIEEE2;
                if (null == bucket)
                   context.parsed.GovHydroIEEE2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroIEEE2", "aturb", "aturb",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "bturb", "bturb",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "gv1", "gv1",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "gv2", "gv2",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "gv3", "gv3",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "gv4", "gv4",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "gv5", "gv5",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "gv6", "gv6",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "kturb", "kturb",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pgv1", "pgv1",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pgv2", "pgv2",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pgv3", "pgv3",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pgv4", "pgv4",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pgv5", "pgv5",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pgv6", "pgv6",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "rperm", "rperm",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "rtemp", "rtemp",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "tg", "tg",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "tp", "tp",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "tr", "tr",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "tw", "tw",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE2", "uc", "uc",  base.from_float, fields);
                base.export_element (obj, "GovHydroIEEE2", "uo", "uo",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydroIEEE2_collapse" aria-expanded="true" aria-controls="GovHydroIEEE2_collapse" style="margin-left: 10px;">GovHydroIEEE2</a></legend>
                    <div id="GovHydroIEEE2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#aturb}}<div><b>aturb</b>: {{aturb}}</div>{{/aturb}}
                    {{#bturb}}<div><b>bturb</b>: {{bturb}}</div>{{/bturb}}
                    {{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
                    {{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
                    {{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
                    {{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
                    {{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
                    {{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
                    {{#kturb}}<div><b>kturb</b>: {{kturb}}</div>{{/kturb}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
                    {{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
                    {{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
                    {{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
                    {{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
                    {{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#rperm}}<div><b>rperm</b>: {{rperm}}</div>{{/rperm}}
                    {{#rtemp}}<div><b>rtemp</b>: {{rtemp}}</div>{{/rtemp}}
                    {{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
                    {{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
                    {{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
                    {{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
                    {{#uo}}<div><b>uo</b>: {{uo}}</div>{{/uo}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydroIEEE2_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydroIEEE2_collapse" style="margin-left: 10px;">GovHydroIEEE2</a></legend>
                    <div id="{{id}}_GovHydroIEEE2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aturb'>aturb: </label><div class='col-sm-8'><input id='{{id}}_aturb' class='form-control' type='text'{{#aturb}} value='{{aturb}}'{{/aturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bturb'>bturb: </label><div class='col-sm-8'><input id='{{id}}_bturb' class='form-control' type='text'{{#bturb}} value='{{bturb}}'{{/bturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv1'>gv1: </label><div class='col-sm-8'><input id='{{id}}_gv1' class='form-control' type='text'{{#gv1}} value='{{gv1}}'{{/gv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv2'>gv2: </label><div class='col-sm-8'><input id='{{id}}_gv2' class='form-control' type='text'{{#gv2}} value='{{gv2}}'{{/gv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv3'>gv3: </label><div class='col-sm-8'><input id='{{id}}_gv3' class='form-control' type='text'{{#gv3}} value='{{gv3}}'{{/gv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv4'>gv4: </label><div class='col-sm-8'><input id='{{id}}_gv4' class='form-control' type='text'{{#gv4}} value='{{gv4}}'{{/gv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv5'>gv5: </label><div class='col-sm-8'><input id='{{id}}_gv5' class='form-control' type='text'{{#gv5}} value='{{gv5}}'{{/gv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv6'>gv6: </label><div class='col-sm-8'><input id='{{id}}_gv6' class='form-control' type='text'{{#gv6}} value='{{gv6}}'{{/gv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kturb'>kturb: </label><div class='col-sm-8'><input id='{{id}}_kturb' class='form-control' type='text'{{#kturb}} value='{{kturb}}'{{/kturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv1'>pgv1: </label><div class='col-sm-8'><input id='{{id}}_pgv1' class='form-control' type='text'{{#pgv1}} value='{{pgv1}}'{{/pgv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv2'>pgv2: </label><div class='col-sm-8'><input id='{{id}}_pgv2' class='form-control' type='text'{{#pgv2}} value='{{pgv2}}'{{/pgv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv3'>pgv3: </label><div class='col-sm-8'><input id='{{id}}_pgv3' class='form-control' type='text'{{#pgv3}} value='{{pgv3}}'{{/pgv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv4'>pgv4: </label><div class='col-sm-8'><input id='{{id}}_pgv4' class='form-control' type='text'{{#pgv4}} value='{{pgv4}}'{{/pgv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv5'>pgv5: </label><div class='col-sm-8'><input id='{{id}}_pgv5' class='form-control' type='text'{{#pgv5}} value='{{pgv5}}'{{/pgv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv6'>pgv6: </label><div class='col-sm-8'><input id='{{id}}_pgv6' class='form-control' type='text'{{#pgv6}} value='{{pgv6}}'{{/pgv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rperm'>rperm: </label><div class='col-sm-8'><input id='{{id}}_rperm' class='form-control' type='text'{{#rperm}} value='{{rperm}}'{{/rperm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rtemp'>rtemp: </label><div class='col-sm-8'><input id='{{id}}_rtemp' class='form-control' type='text'{{#rtemp}} value='{{rtemp}}'{{/rtemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tg'>tg: </label><div class='col-sm-8'><input id='{{id}}_tg' class='form-control' type='text'{{#tg}} value='{{tg}}'{{/tg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tr'>tr: </label><div class='col-sm-8'><input id='{{id}}_tr' class='form-control' type='text'{{#tr}} value='{{tr}}'{{/tr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw'>tw: </label><div class='col-sm-8'><input id='{{id}}_tw' class='form-control' type='text'{{#tw}} value='{{tw}}'{{/tw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uc'>uc: </label><div class='col-sm-8'><input id='{{id}}_uc' class='form-control' type='text'{{#uc}} value='{{uc}}'{{/uc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uo'>uo: </label><div class='col-sm-8'><input id='{{id}}_uo' class='form-control' type='text'{{#uo}} value='{{uo}}'{{/uo}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydroIEEE2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_aturb").value; if ("" != temp) obj.aturb = temp;
                temp = document.getElementById (id + "_bturb").value; if ("" != temp) obj.bturb = temp;
                temp = document.getElementById (id + "_gv1").value; if ("" != temp) obj.gv1 = temp;
                temp = document.getElementById (id + "_gv2").value; if ("" != temp) obj.gv2 = temp;
                temp = document.getElementById (id + "_gv3").value; if ("" != temp) obj.gv3 = temp;
                temp = document.getElementById (id + "_gv4").value; if ("" != temp) obj.gv4 = temp;
                temp = document.getElementById (id + "_gv5").value; if ("" != temp) obj.gv5 = temp;
                temp = document.getElementById (id + "_gv6").value; if ("" != temp) obj.gv6 = temp;
                temp = document.getElementById (id + "_kturb").value; if ("" != temp) obj.kturb = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pgv1").value; if ("" != temp) obj.pgv1 = temp;
                temp = document.getElementById (id + "_pgv2").value; if ("" != temp) obj.pgv2 = temp;
                temp = document.getElementById (id + "_pgv3").value; if ("" != temp) obj.pgv3 = temp;
                temp = document.getElementById (id + "_pgv4").value; if ("" != temp) obj.pgv4 = temp;
                temp = document.getElementById (id + "_pgv5").value; if ("" != temp) obj.pgv5 = temp;
                temp = document.getElementById (id + "_pgv6").value; if ("" != temp) obj.pgv6 = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_rperm").value; if ("" != temp) obj.rperm = temp;
                temp = document.getElementById (id + "_rtemp").value; if ("" != temp) obj.rtemp = temp;
                temp = document.getElementById (id + "_tg").value; if ("" != temp) obj.tg = temp;
                temp = document.getElementById (id + "_tp").value; if ("" != temp) obj.tp = temp;
                temp = document.getElementById (id + "_tr").value; if ("" != temp) obj.tr = temp;
                temp = document.getElementById (id + "_tw").value; if ("" != temp) obj.tw = temp;
                temp = document.getElementById (id + "_uc").value; if ("" != temp) obj.uc = temp;
                temp = document.getElementById (id + "_uo").value; if ("" != temp) obj.uo = temp;

                return (obj);
            }
        }

        /**
         * Woodward PID Hydro Governor.
         *
         */
        class GovHydroWPID extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydroWPID;
                if (null == bucket)
                   cim_data.GovHydroWPID = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydroWPID[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroWPID";
                base.parse_element (/<cim:GovHydroWPID.d>([\s\S]*?)<\/cim:GovHydroWPID.d>/g, obj, "d", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.gatmax>([\s\S]*?)<\/cim:GovHydroWPID.gatmax>/g, obj, "gatmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.gatmin>([\s\S]*?)<\/cim:GovHydroWPID.gatmin>/g, obj, "gatmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.gv1>([\s\S]*?)<\/cim:GovHydroWPID.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.gv2>([\s\S]*?)<\/cim:GovHydroWPID.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.gv3>([\s\S]*?)<\/cim:GovHydroWPID.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.kd>([\s\S]*?)<\/cim:GovHydroWPID.kd>/g, obj, "kd", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.ki>([\s\S]*?)<\/cim:GovHydroWPID.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.kp>([\s\S]*?)<\/cim:GovHydroWPID.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.mwbase>([\s\S]*?)<\/cim:GovHydroWPID.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.pgv1>([\s\S]*?)<\/cim:GovHydroWPID.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.pgv2>([\s\S]*?)<\/cim:GovHydroWPID.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.pgv3>([\s\S]*?)<\/cim:GovHydroWPID.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.pmax>([\s\S]*?)<\/cim:GovHydroWPID.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.pmin>([\s\S]*?)<\/cim:GovHydroWPID.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.reg>([\s\S]*?)<\/cim:GovHydroWPID.reg>/g, obj, "reg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.ta>([\s\S]*?)<\/cim:GovHydroWPID.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.tb>([\s\S]*?)<\/cim:GovHydroWPID.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.treg>([\s\S]*?)<\/cim:GovHydroWPID.treg>/g, obj, "treg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.tw>([\s\S]*?)<\/cim:GovHydroWPID.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.velmax>([\s\S]*?)<\/cim:GovHydroWPID.velmax>/g, obj, "velmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWPID.velmin>([\s\S]*?)<\/cim:GovHydroWPID.velmin>/g, obj, "velmin", base.to_string, sub, context);
                var bucket = context.parsed.GovHydroWPID;
                if (null == bucket)
                   context.parsed.GovHydroWPID = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroWPID", "d", "d",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "gatmax", "gatmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "gatmin", "gatmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "gv1", "gv1",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "gv2", "gv2",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "gv3", "gv3",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "pgv1", "pgv1",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "pgv2", "pgv2",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "pgv3", "pgv3",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "reg", "reg",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "treg", "treg",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "tw", "tw",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "velmax", "velmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroWPID", "velmin", "velmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydroWPID_collapse" aria-expanded="true" aria-controls="GovHydroWPID_collapse" style="margin-left: 10px;">GovHydroWPID</a></legend>
                    <div id="GovHydroWPID_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#d}}<div><b>d</b>: {{d}}</div>{{/d}}
                    {{#gatmax}}<div><b>gatmax</b>: {{gatmax}}</div>{{/gatmax}}
                    {{#gatmin}}<div><b>gatmin</b>: {{gatmin}}</div>{{/gatmin}}
                    {{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
                    {{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
                    {{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
                    {{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
                    {{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#reg}}<div><b>reg</b>: {{reg}}</div>{{/reg}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#treg}}<div><b>treg</b>: {{treg}}</div>{{/treg}}
                    {{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
                    {{#velmax}}<div><b>velmax</b>: {{velmax}}</div>{{/velmax}}
                    {{#velmin}}<div><b>velmin</b>: {{velmin}}</div>{{/velmin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydroWPID_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydroWPID_collapse" style="margin-left: 10px;">GovHydroWPID</a></legend>
                    <div id="{{id}}_GovHydroWPID_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_d'>d: </label><div class='col-sm-8'><input id='{{id}}_d' class='form-control' type='text'{{#d}} value='{{d}}'{{/d}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gatmax'>gatmax: </label><div class='col-sm-8'><input id='{{id}}_gatmax' class='form-control' type='text'{{#gatmax}} value='{{gatmax}}'{{/gatmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gatmin'>gatmin: </label><div class='col-sm-8'><input id='{{id}}_gatmin' class='form-control' type='text'{{#gatmin}} value='{{gatmin}}'{{/gatmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv1'>gv1: </label><div class='col-sm-8'><input id='{{id}}_gv1' class='form-control' type='text'{{#gv1}} value='{{gv1}}'{{/gv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv2'>gv2: </label><div class='col-sm-8'><input id='{{id}}_gv2' class='form-control' type='text'{{#gv2}} value='{{gv2}}'{{/gv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv3'>gv3: </label><div class='col-sm-8'><input id='{{id}}_gv3' class='form-control' type='text'{{#gv3}} value='{{gv3}}'{{/gv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv1'>pgv1: </label><div class='col-sm-8'><input id='{{id}}_pgv1' class='form-control' type='text'{{#pgv1}} value='{{pgv1}}'{{/pgv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv2'>pgv2: </label><div class='col-sm-8'><input id='{{id}}_pgv2' class='form-control' type='text'{{#pgv2}} value='{{pgv2}}'{{/pgv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv3'>pgv3: </label><div class='col-sm-8'><input id='{{id}}_pgv3' class='form-control' type='text'{{#pgv3}} value='{{pgv3}}'{{/pgv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reg'>reg: </label><div class='col-sm-8'><input id='{{id}}_reg' class='form-control' type='text'{{#reg}} value='{{reg}}'{{/reg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_treg'>treg: </label><div class='col-sm-8'><input id='{{id}}_treg' class='form-control' type='text'{{#treg}} value='{{treg}}'{{/treg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw'>tw: </label><div class='col-sm-8'><input id='{{id}}_tw' class='form-control' type='text'{{#tw}} value='{{tw}}'{{/tw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velmax'>velmax: </label><div class='col-sm-8'><input id='{{id}}_velmax' class='form-control' type='text'{{#velmax}} value='{{velmax}}'{{/velmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velmin'>velmin: </label><div class='col-sm-8'><input id='{{id}}_velmin' class='form-control' type='text'{{#velmin}} value='{{velmin}}'{{/velmin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydroWPID" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_d").value; if ("" != temp) obj.d = temp;
                temp = document.getElementById (id + "_gatmax").value; if ("" != temp) obj.gatmax = temp;
                temp = document.getElementById (id + "_gatmin").value; if ("" != temp) obj.gatmin = temp;
                temp = document.getElementById (id + "_gv1").value; if ("" != temp) obj.gv1 = temp;
                temp = document.getElementById (id + "_gv2").value; if ("" != temp) obj.gv2 = temp;
                temp = document.getElementById (id + "_gv3").value; if ("" != temp) obj.gv3 = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pgv1").value; if ("" != temp) obj.pgv1 = temp;
                temp = document.getElementById (id + "_pgv2").value; if ("" != temp) obj.pgv2 = temp;
                temp = document.getElementById (id + "_pgv3").value; if ("" != temp) obj.pgv3 = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_reg").value; if ("" != temp) obj.reg = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_treg").value; if ("" != temp) obj.treg = temp;
                temp = document.getElementById (id + "_tw").value; if ("" != temp) obj.tw = temp;
                temp = document.getElementById (id + "_velmax").value; if ("" != temp) obj.velmax = temp;
                temp = document.getElementById (id + "_velmin").value; if ("" != temp) obj.velmin = temp;

                return (obj);
            }
        }

        /**
         * Detailed electro-hydraulic governor for steam unit.
         *
         */
        class GovSteamFV4 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovSteamFV4;
                if (null == bucket)
                   cim_data.GovSteamFV4 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovSteamFV4[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamFV4";
                base.parse_element (/<cim:GovSteamFV4.cpsmn>([\s\S]*?)<\/cim:GovSteamFV4.cpsmn>/g, obj, "cpsmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.cpsmx>([\s\S]*?)<\/cim:GovSteamFV4.cpsmx>/g, obj, "cpsmx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.crmn>([\s\S]*?)<\/cim:GovSteamFV4.crmn>/g, obj, "crmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.crmx>([\s\S]*?)<\/cim:GovSteamFV4.crmx>/g, obj, "crmx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kdc>([\s\S]*?)<\/cim:GovSteamFV4.kdc>/g, obj, "kdc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kf1>([\s\S]*?)<\/cim:GovSteamFV4.kf1>/g, obj, "kf1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kf3>([\s\S]*?)<\/cim:GovSteamFV4.kf3>/g, obj, "kf3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.khp>([\s\S]*?)<\/cim:GovSteamFV4.khp>/g, obj, "khp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kic>([\s\S]*?)<\/cim:GovSteamFV4.kic>/g, obj, "kic", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kip>([\s\S]*?)<\/cim:GovSteamFV4.kip>/g, obj, "kip", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kit>([\s\S]*?)<\/cim:GovSteamFV4.kit>/g, obj, "kit", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kmp1>([\s\S]*?)<\/cim:GovSteamFV4.kmp1>/g, obj, "kmp1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kmp2>([\s\S]*?)<\/cim:GovSteamFV4.kmp2>/g, obj, "kmp2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kpc>([\s\S]*?)<\/cim:GovSteamFV4.kpc>/g, obj, "kpc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kpp>([\s\S]*?)<\/cim:GovSteamFV4.kpp>/g, obj, "kpp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.kpt>([\s\S]*?)<\/cim:GovSteamFV4.kpt>/g, obj, "kpt", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.krc>([\s\S]*?)<\/cim:GovSteamFV4.krc>/g, obj, "krc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.ksh>([\s\S]*?)<\/cim:GovSteamFV4.ksh>/g, obj, "ksh", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.lpi>([\s\S]*?)<\/cim:GovSteamFV4.lpi>/g, obj, "lpi", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.lps>([\s\S]*?)<\/cim:GovSteamFV4.lps>/g, obj, "lps", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.mnef>([\s\S]*?)<\/cim:GovSteamFV4.mnef>/g, obj, "mnef", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.mxef>([\s\S]*?)<\/cim:GovSteamFV4.mxef>/g, obj, "mxef", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.pr1>([\s\S]*?)<\/cim:GovSteamFV4.pr1>/g, obj, "pr1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.pr2>([\s\S]*?)<\/cim:GovSteamFV4.pr2>/g, obj, "pr2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.psmn>([\s\S]*?)<\/cim:GovSteamFV4.psmn>/g, obj, "psmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.rsmimn>([\s\S]*?)<\/cim:GovSteamFV4.rsmimn>/g, obj, "rsmimn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.rsmimx>([\s\S]*?)<\/cim:GovSteamFV4.rsmimx>/g, obj, "rsmimx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.rvgmn>([\s\S]*?)<\/cim:GovSteamFV4.rvgmn>/g, obj, "rvgmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.rvgmx>([\s\S]*?)<\/cim:GovSteamFV4.rvgmx>/g, obj, "rvgmx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.srmn>([\s\S]*?)<\/cim:GovSteamFV4.srmn>/g, obj, "srmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.srmx>([\s\S]*?)<\/cim:GovSteamFV4.srmx>/g, obj, "srmx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.srsmp>([\s\S]*?)<\/cim:GovSteamFV4.srsmp>/g, obj, "srsmp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.svmn>([\s\S]*?)<\/cim:GovSteamFV4.svmn>/g, obj, "svmn", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamFV4.svmx>([\s\S]*?)<\/cim:GovSteamFV4.svmx>/g, obj, "svmx", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamFV4.ta>([\s\S]*?)<\/cim:GovSteamFV4.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tam>([\s\S]*?)<\/cim:GovSteamFV4.tam>/g, obj, "tam", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tc>([\s\S]*?)<\/cim:GovSteamFV4.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tcm>([\s\S]*?)<\/cim:GovSteamFV4.tcm>/g, obj, "tcm", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tdc>([\s\S]*?)<\/cim:GovSteamFV4.tdc>/g, obj, "tdc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tf1>([\s\S]*?)<\/cim:GovSteamFV4.tf1>/g, obj, "tf1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tf2>([\s\S]*?)<\/cim:GovSteamFV4.tf2>/g, obj, "tf2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.thp>([\s\S]*?)<\/cim:GovSteamFV4.thp>/g, obj, "thp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tmp>([\s\S]*?)<\/cim:GovSteamFV4.tmp>/g, obj, "tmp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.trh>([\s\S]*?)<\/cim:GovSteamFV4.trh>/g, obj, "trh", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.tv>([\s\S]*?)<\/cim:GovSteamFV4.tv>/g, obj, "tv", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.ty>([\s\S]*?)<\/cim:GovSteamFV4.ty>/g, obj, "ty", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.y>([\s\S]*?)<\/cim:GovSteamFV4.y>/g, obj, "y", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.yhpmn>([\s\S]*?)<\/cim:GovSteamFV4.yhpmn>/g, obj, "yhpmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.yhpmx>([\s\S]*?)<\/cim:GovSteamFV4.yhpmx>/g, obj, "yhpmx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.ympmn>([\s\S]*?)<\/cim:GovSteamFV4.ympmn>/g, obj, "ympmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV4.ympmx>([\s\S]*?)<\/cim:GovSteamFV4.ympmx>/g, obj, "ympmx", base.to_string, sub, context);
                var bucket = context.parsed.GovSteamFV4;
                if (null == bucket)
                   context.parsed.GovSteamFV4 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamFV4", "cpsmn", "cpsmn",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "cpsmx", "cpsmx",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "crmn", "crmn",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "crmx", "crmx",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kdc", "kdc",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kf1", "kf1",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kf3", "kf3",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "khp", "khp",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kic", "kic",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kip", "kip",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kit", "kit",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kmp1", "kmp1",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kmp2", "kmp2",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kpc", "kpc",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kpp", "kpp",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "kpt", "kpt",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "krc", "krc",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "ksh", "ksh",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "lpi", "lpi",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "lps", "lps",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "mnef", "mnef",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "mxef", "mxef",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "pr1", "pr1",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "pr2", "pr2",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "psmn", "psmn",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "rsmimn", "rsmimn",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "rsmimx", "rsmimx",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "rvgmn", "rvgmn",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "rvgmx", "rvgmx",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "srmn", "srmn",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "srmx", "srmx",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "srsmp", "srsmp",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "svmn", "svmn",  base.from_float, fields);
                base.export_element (obj, "GovSteamFV4", "svmx", "svmx",  base.from_float, fields);
                base.export_element (obj, "GovSteamFV4", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tam", "tam",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tcm", "tcm",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tdc", "tdc",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tf1", "tf1",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tf2", "tf2",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "thp", "thp",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tmp", "tmp",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "trh", "trh",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "tv", "tv",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "ty", "ty",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "y", "y",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "yhpmn", "yhpmn",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "yhpmx", "yhpmx",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "ympmn", "ympmn",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV4", "ympmx", "ympmx",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovSteamFV4_collapse" aria-expanded="true" aria-controls="GovSteamFV4_collapse" style="margin-left: 10px;">GovSteamFV4</a></legend>
                    <div id="GovSteamFV4_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#cpsmn}}<div><b>cpsmn</b>: {{cpsmn}}</div>{{/cpsmn}}
                    {{#cpsmx}}<div><b>cpsmx</b>: {{cpsmx}}</div>{{/cpsmx}}
                    {{#crmn}}<div><b>crmn</b>: {{crmn}}</div>{{/crmn}}
                    {{#crmx}}<div><b>crmx</b>: {{crmx}}</div>{{/crmx}}
                    {{#kdc}}<div><b>kdc</b>: {{kdc}}</div>{{/kdc}}
                    {{#kf1}}<div><b>kf1</b>: {{kf1}}</div>{{/kf1}}
                    {{#kf3}}<div><b>kf3</b>: {{kf3}}</div>{{/kf3}}
                    {{#khp}}<div><b>khp</b>: {{khp}}</div>{{/khp}}
                    {{#kic}}<div><b>kic</b>: {{kic}}</div>{{/kic}}
                    {{#kip}}<div><b>kip</b>: {{kip}}</div>{{/kip}}
                    {{#kit}}<div><b>kit</b>: {{kit}}</div>{{/kit}}
                    {{#kmp1}}<div><b>kmp1</b>: {{kmp1}}</div>{{/kmp1}}
                    {{#kmp2}}<div><b>kmp2</b>: {{kmp2}}</div>{{/kmp2}}
                    {{#kpc}}<div><b>kpc</b>: {{kpc}}</div>{{/kpc}}
                    {{#kpp}}<div><b>kpp</b>: {{kpp}}</div>{{/kpp}}
                    {{#kpt}}<div><b>kpt</b>: {{kpt}}</div>{{/kpt}}
                    {{#krc}}<div><b>krc</b>: {{krc}}</div>{{/krc}}
                    {{#ksh}}<div><b>ksh</b>: {{ksh}}</div>{{/ksh}}
                    {{#lpi}}<div><b>lpi</b>: {{lpi}}</div>{{/lpi}}
                    {{#lps}}<div><b>lps</b>: {{lps}}</div>{{/lps}}
                    {{#mnef}}<div><b>mnef</b>: {{mnef}}</div>{{/mnef}}
                    {{#mxef}}<div><b>mxef</b>: {{mxef}}</div>{{/mxef}}
                    {{#pr1}}<div><b>pr1</b>: {{pr1}}</div>{{/pr1}}
                    {{#pr2}}<div><b>pr2</b>: {{pr2}}</div>{{/pr2}}
                    {{#psmn}}<div><b>psmn</b>: {{psmn}}</div>{{/psmn}}
                    {{#rsmimn}}<div><b>rsmimn</b>: {{rsmimn}}</div>{{/rsmimn}}
                    {{#rsmimx}}<div><b>rsmimx</b>: {{rsmimx}}</div>{{/rsmimx}}
                    {{#rvgmn}}<div><b>rvgmn</b>: {{rvgmn}}</div>{{/rvgmn}}
                    {{#rvgmx}}<div><b>rvgmx</b>: {{rvgmx}}</div>{{/rvgmx}}
                    {{#srmn}}<div><b>srmn</b>: {{srmn}}</div>{{/srmn}}
                    {{#srmx}}<div><b>srmx</b>: {{srmx}}</div>{{/srmx}}
                    {{#srsmp}}<div><b>srsmp</b>: {{srsmp}}</div>{{/srsmp}}
                    {{#svmn}}<div><b>svmn</b>: {{svmn}}</div>{{/svmn}}
                    {{#svmx}}<div><b>svmx</b>: {{svmx}}</div>{{/svmx}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tam}}<div><b>tam</b>: {{tam}}</div>{{/tam}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#tcm}}<div><b>tcm</b>: {{tcm}}</div>{{/tcm}}
                    {{#tdc}}<div><b>tdc</b>: {{tdc}}</div>{{/tdc}}
                    {{#tf1}}<div><b>tf1</b>: {{tf1}}</div>{{/tf1}}
                    {{#tf2}}<div><b>tf2</b>: {{tf2}}</div>{{/tf2}}
                    {{#thp}}<div><b>thp</b>: {{thp}}</div>{{/thp}}
                    {{#tmp}}<div><b>tmp</b>: {{tmp}}</div>{{/tmp}}
                    {{#trh}}<div><b>trh</b>: {{trh}}</div>{{/trh}}
                    {{#tv}}<div><b>tv</b>: {{tv}}</div>{{/tv}}
                    {{#ty}}<div><b>ty</b>: {{ty}}</div>{{/ty}}
                    {{#y}}<div><b>y</b>: {{y}}</div>{{/y}}
                    {{#yhpmn}}<div><b>yhpmn</b>: {{yhpmn}}</div>{{/yhpmn}}
                    {{#yhpmx}}<div><b>yhpmx</b>: {{yhpmx}}</div>{{/yhpmx}}
                    {{#ympmn}}<div><b>ympmn</b>: {{ympmn}}</div>{{/ympmn}}
                    {{#ympmx}}<div><b>ympmx</b>: {{ympmx}}</div>{{/ympmx}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovSteamFV4_collapse" aria-expanded="true" aria-controls="{{id}}_GovSteamFV4_collapse" style="margin-left: 10px;">GovSteamFV4</a></legend>
                    <div id="{{id}}_GovSteamFV4_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cpsmn'>cpsmn: </label><div class='col-sm-8'><input id='{{id}}_cpsmn' class='form-control' type='text'{{#cpsmn}} value='{{cpsmn}}'{{/cpsmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cpsmx'>cpsmx: </label><div class='col-sm-8'><input id='{{id}}_cpsmx' class='form-control' type='text'{{#cpsmx}} value='{{cpsmx}}'{{/cpsmx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_crmn'>crmn: </label><div class='col-sm-8'><input id='{{id}}_crmn' class='form-control' type='text'{{#crmn}} value='{{crmn}}'{{/crmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_crmx'>crmx: </label><div class='col-sm-8'><input id='{{id}}_crmx' class='form-control' type='text'{{#crmx}} value='{{crmx}}'{{/crmx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kdc'>kdc: </label><div class='col-sm-8'><input id='{{id}}_kdc' class='form-control' type='text'{{#kdc}} value='{{kdc}}'{{/kdc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf1'>kf1: </label><div class='col-sm-8'><input id='{{id}}_kf1' class='form-control' type='text'{{#kf1}} value='{{kf1}}'{{/kf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf3'>kf3: </label><div class='col-sm-8'><input id='{{id}}_kf3' class='form-control' type='text'{{#kf3}} value='{{kf3}}'{{/kf3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_khp'>khp: </label><div class='col-sm-8'><input id='{{id}}_khp' class='form-control' type='text'{{#khp}} value='{{khp}}'{{/khp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kic'>kic: </label><div class='col-sm-8'><input id='{{id}}_kic' class='form-control' type='text'{{#kic}} value='{{kic}}'{{/kic}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kip'>kip: </label><div class='col-sm-8'><input id='{{id}}_kip' class='form-control' type='text'{{#kip}} value='{{kip}}'{{/kip}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kit'>kit: </label><div class='col-sm-8'><input id='{{id}}_kit' class='form-control' type='text'{{#kit}} value='{{kit}}'{{/kit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kmp1'>kmp1: </label><div class='col-sm-8'><input id='{{id}}_kmp1' class='form-control' type='text'{{#kmp1}} value='{{kmp1}}'{{/kmp1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kmp2'>kmp2: </label><div class='col-sm-8'><input id='{{id}}_kmp2' class='form-control' type='text'{{#kmp2}} value='{{kmp2}}'{{/kmp2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpc'>kpc: </label><div class='col-sm-8'><input id='{{id}}_kpc' class='form-control' type='text'{{#kpc}} value='{{kpc}}'{{/kpc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpp'>kpp: </label><div class='col-sm-8'><input id='{{id}}_kpp' class='form-control' type='text'{{#kpp}} value='{{kpp}}'{{/kpp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpt'>kpt: </label><div class='col-sm-8'><input id='{{id}}_kpt' class='form-control' type='text'{{#kpt}} value='{{kpt}}'{{/kpt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_krc'>krc: </label><div class='col-sm-8'><input id='{{id}}_krc' class='form-control' type='text'{{#krc}} value='{{krc}}'{{/krc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ksh'>ksh: </label><div class='col-sm-8'><input id='{{id}}_ksh' class='form-control' type='text'{{#ksh}} value='{{ksh}}'{{/ksh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lpi'>lpi: </label><div class='col-sm-8'><input id='{{id}}_lpi' class='form-control' type='text'{{#lpi}} value='{{lpi}}'{{/lpi}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lps'>lps: </label><div class='col-sm-8'><input id='{{id}}_lps' class='form-control' type='text'{{#lps}} value='{{lps}}'{{/lps}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mnef'>mnef: </label><div class='col-sm-8'><input id='{{id}}_mnef' class='form-control' type='text'{{#mnef}} value='{{mnef}}'{{/mnef}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mxef'>mxef: </label><div class='col-sm-8'><input id='{{id}}_mxef' class='form-control' type='text'{{#mxef}} value='{{mxef}}'{{/mxef}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pr1'>pr1: </label><div class='col-sm-8'><input id='{{id}}_pr1' class='form-control' type='text'{{#pr1}} value='{{pr1}}'{{/pr1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pr2'>pr2: </label><div class='col-sm-8'><input id='{{id}}_pr2' class='form-control' type='text'{{#pr2}} value='{{pr2}}'{{/pr2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_psmn'>psmn: </label><div class='col-sm-8'><input id='{{id}}_psmn' class='form-control' type='text'{{#psmn}} value='{{psmn}}'{{/psmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rsmimn'>rsmimn: </label><div class='col-sm-8'><input id='{{id}}_rsmimn' class='form-control' type='text'{{#rsmimn}} value='{{rsmimn}}'{{/rsmimn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rsmimx'>rsmimx: </label><div class='col-sm-8'><input id='{{id}}_rsmimx' class='form-control' type='text'{{#rsmimx}} value='{{rsmimx}}'{{/rsmimx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rvgmn'>rvgmn: </label><div class='col-sm-8'><input id='{{id}}_rvgmn' class='form-control' type='text'{{#rvgmn}} value='{{rvgmn}}'{{/rvgmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rvgmx'>rvgmx: </label><div class='col-sm-8'><input id='{{id}}_rvgmx' class='form-control' type='text'{{#rvgmx}} value='{{rvgmx}}'{{/rvgmx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_srmn'>srmn: </label><div class='col-sm-8'><input id='{{id}}_srmn' class='form-control' type='text'{{#srmn}} value='{{srmn}}'{{/srmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_srmx'>srmx: </label><div class='col-sm-8'><input id='{{id}}_srmx' class='form-control' type='text'{{#srmx}} value='{{srmx}}'{{/srmx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_srsmp'>srsmp: </label><div class='col-sm-8'><input id='{{id}}_srsmp' class='form-control' type='text'{{#srsmp}} value='{{srsmp}}'{{/srsmp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_svmn'>svmn: </label><div class='col-sm-8'><input id='{{id}}_svmn' class='form-control' type='text'{{#svmn}} value='{{svmn}}'{{/svmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_svmx'>svmx: </label><div class='col-sm-8'><input id='{{id}}_svmx' class='form-control' type='text'{{#svmx}} value='{{svmx}}'{{/svmx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tam'>tam: </label><div class='col-sm-8'><input id='{{id}}_tam' class='form-control' type='text'{{#tam}} value='{{tam}}'{{/tam}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tcm'>tcm: </label><div class='col-sm-8'><input id='{{id}}_tcm' class='form-control' type='text'{{#tcm}} value='{{tcm}}'{{/tcm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tdc'>tdc: </label><div class='col-sm-8'><input id='{{id}}_tdc' class='form-control' type='text'{{#tdc}} value='{{tdc}}'{{/tdc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf1'>tf1: </label><div class='col-sm-8'><input id='{{id}}_tf1' class='form-control' type='text'{{#tf1}} value='{{tf1}}'{{/tf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf2'>tf2: </label><div class='col-sm-8'><input id='{{id}}_tf2' class='form-control' type='text'{{#tf2}} value='{{tf2}}'{{/tf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thp'>thp: </label><div class='col-sm-8'><input id='{{id}}_thp' class='form-control' type='text'{{#thp}} value='{{thp}}'{{/thp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tmp'>tmp: </label><div class='col-sm-8'><input id='{{id}}_tmp' class='form-control' type='text'{{#tmp}} value='{{tmp}}'{{/tmp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_trh'>trh: </label><div class='col-sm-8'><input id='{{id}}_trh' class='form-control' type='text'{{#trh}} value='{{trh}}'{{/trh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tv'>tv: </label><div class='col-sm-8'><input id='{{id}}_tv' class='form-control' type='text'{{#tv}} value='{{tv}}'{{/tv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ty'>ty: </label><div class='col-sm-8'><input id='{{id}}_ty' class='form-control' type='text'{{#ty}} value='{{ty}}'{{/ty}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_y'>y: </label><div class='col-sm-8'><input id='{{id}}_y' class='form-control' type='text'{{#y}} value='{{y}}'{{/y}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_yhpmn'>yhpmn: </label><div class='col-sm-8'><input id='{{id}}_yhpmn' class='form-control' type='text'{{#yhpmn}} value='{{yhpmn}}'{{/yhpmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_yhpmx'>yhpmx: </label><div class='col-sm-8'><input id='{{id}}_yhpmx' class='form-control' type='text'{{#yhpmx}} value='{{yhpmx}}'{{/yhpmx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ympmn'>ympmn: </label><div class='col-sm-8'><input id='{{id}}_ympmn' class='form-control' type='text'{{#ympmn}} value='{{ympmn}}'{{/ympmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ympmx'>ympmx: </label><div class='col-sm-8'><input id='{{id}}_ympmx' class='form-control' type='text'{{#ympmx}} value='{{ympmx}}'{{/ympmx}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovSteamFV4" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cpsmn").value; if ("" != temp) obj.cpsmn = temp;
                temp = document.getElementById (id + "_cpsmx").value; if ("" != temp) obj.cpsmx = temp;
                temp = document.getElementById (id + "_crmn").value; if ("" != temp) obj.crmn = temp;
                temp = document.getElementById (id + "_crmx").value; if ("" != temp) obj.crmx = temp;
                temp = document.getElementById (id + "_kdc").value; if ("" != temp) obj.kdc = temp;
                temp = document.getElementById (id + "_kf1").value; if ("" != temp) obj.kf1 = temp;
                temp = document.getElementById (id + "_kf3").value; if ("" != temp) obj.kf3 = temp;
                temp = document.getElementById (id + "_khp").value; if ("" != temp) obj.khp = temp;
                temp = document.getElementById (id + "_kic").value; if ("" != temp) obj.kic = temp;
                temp = document.getElementById (id + "_kip").value; if ("" != temp) obj.kip = temp;
                temp = document.getElementById (id + "_kit").value; if ("" != temp) obj.kit = temp;
                temp = document.getElementById (id + "_kmp1").value; if ("" != temp) obj.kmp1 = temp;
                temp = document.getElementById (id + "_kmp2").value; if ("" != temp) obj.kmp2 = temp;
                temp = document.getElementById (id + "_kpc").value; if ("" != temp) obj.kpc = temp;
                temp = document.getElementById (id + "_kpp").value; if ("" != temp) obj.kpp = temp;
                temp = document.getElementById (id + "_kpt").value; if ("" != temp) obj.kpt = temp;
                temp = document.getElementById (id + "_krc").value; if ("" != temp) obj.krc = temp;
                temp = document.getElementById (id + "_ksh").value; if ("" != temp) obj.ksh = temp;
                temp = document.getElementById (id + "_lpi").value; if ("" != temp) obj.lpi = temp;
                temp = document.getElementById (id + "_lps").value; if ("" != temp) obj.lps = temp;
                temp = document.getElementById (id + "_mnef").value; if ("" != temp) obj.mnef = temp;
                temp = document.getElementById (id + "_mxef").value; if ("" != temp) obj.mxef = temp;
                temp = document.getElementById (id + "_pr1").value; if ("" != temp) obj.pr1 = temp;
                temp = document.getElementById (id + "_pr2").value; if ("" != temp) obj.pr2 = temp;
                temp = document.getElementById (id + "_psmn").value; if ("" != temp) obj.psmn = temp;
                temp = document.getElementById (id + "_rsmimn").value; if ("" != temp) obj.rsmimn = temp;
                temp = document.getElementById (id + "_rsmimx").value; if ("" != temp) obj.rsmimx = temp;
                temp = document.getElementById (id + "_rvgmn").value; if ("" != temp) obj.rvgmn = temp;
                temp = document.getElementById (id + "_rvgmx").value; if ("" != temp) obj.rvgmx = temp;
                temp = document.getElementById (id + "_srmn").value; if ("" != temp) obj.srmn = temp;
                temp = document.getElementById (id + "_srmx").value; if ("" != temp) obj.srmx = temp;
                temp = document.getElementById (id + "_srsmp").value; if ("" != temp) obj.srsmp = temp;
                temp = document.getElementById (id + "_svmn").value; if ("" != temp) obj.svmn = temp;
                temp = document.getElementById (id + "_svmx").value; if ("" != temp) obj.svmx = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tam").value; if ("" != temp) obj.tam = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_tcm").value; if ("" != temp) obj.tcm = temp;
                temp = document.getElementById (id + "_tdc").value; if ("" != temp) obj.tdc = temp;
                temp = document.getElementById (id + "_tf1").value; if ("" != temp) obj.tf1 = temp;
                temp = document.getElementById (id + "_tf2").value; if ("" != temp) obj.tf2 = temp;
                temp = document.getElementById (id + "_thp").value; if ("" != temp) obj.thp = temp;
                temp = document.getElementById (id + "_tmp").value; if ("" != temp) obj.tmp = temp;
                temp = document.getElementById (id + "_trh").value; if ("" != temp) obj.trh = temp;
                temp = document.getElementById (id + "_tv").value; if ("" != temp) obj.tv = temp;
                temp = document.getElementById (id + "_ty").value; if ("" != temp) obj.ty = temp;
                temp = document.getElementById (id + "_y").value; if ("" != temp) obj.y = temp;
                temp = document.getElementById (id + "_yhpmn").value; if ("" != temp) obj.yhpmn = temp;
                temp = document.getElementById (id + "_yhpmx").value; if ("" != temp) obj.yhpmx = temp;
                temp = document.getElementById (id + "_ympmn").value; if ("" != temp) obj.ympmn = temp;
                temp = document.getElementById (id + "_ympmx").value; if ("" != temp) obj.ympmx = temp;

                return (obj);
            }
        }

        /**
         * Hydro turbine and governor.
         *
         * Represents plants with straight forward penstock configurations and "three term" electro-hydraulic governors (i.e. Woodard electronic).
         *
         */
        class GovHydroPID2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydroPID2;
                if (null == bucket)
                   cim_data.GovHydroPID2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydroPID2[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroPID2";
                base.parse_element (/<cim:GovHydroPID2.atw>([\s\S]*?)<\/cim:GovHydroPID2.atw>/g, obj, "atw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.d>([\s\S]*?)<\/cim:GovHydroPID2.d>/g, obj, "d", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.feedbackSignal>([\s\S]*?)<\/cim:GovHydroPID2.feedbackSignal>/g, obj, "feedbackSignal", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroPID2.g0>([\s\S]*?)<\/cim:GovHydroPID2.g0>/g, obj, "g0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.g1>([\s\S]*?)<\/cim:GovHydroPID2.g1>/g, obj, "g1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.g2>([\s\S]*?)<\/cim:GovHydroPID2.g2>/g, obj, "g2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.gmax>([\s\S]*?)<\/cim:GovHydroPID2.gmax>/g, obj, "gmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.gmin>([\s\S]*?)<\/cim:GovHydroPID2.gmin>/g, obj, "gmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.kd>([\s\S]*?)<\/cim:GovHydroPID2.kd>/g, obj, "kd", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.ki>([\s\S]*?)<\/cim:GovHydroPID2.ki>/g, obj, "ki", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroPID2.kp>([\s\S]*?)<\/cim:GovHydroPID2.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.mwbase>([\s\S]*?)<\/cim:GovHydroPID2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.p1>([\s\S]*?)<\/cim:GovHydroPID2.p1>/g, obj, "p1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.p2>([\s\S]*?)<\/cim:GovHydroPID2.p2>/g, obj, "p2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.p3>([\s\S]*?)<\/cim:GovHydroPID2.p3>/g, obj, "p3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.rperm>([\s\S]*?)<\/cim:GovHydroPID2.rperm>/g, obj, "rperm", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.ta>([\s\S]*?)<\/cim:GovHydroPID2.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.tb>([\s\S]*?)<\/cim:GovHydroPID2.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.treg>([\s\S]*?)<\/cim:GovHydroPID2.treg>/g, obj, "treg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.tw>([\s\S]*?)<\/cim:GovHydroPID2.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPID2.velmax>([\s\S]*?)<\/cim:GovHydroPID2.velmax>/g, obj, "velmax", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroPID2.velmin>([\s\S]*?)<\/cim:GovHydroPID2.velmin>/g, obj, "velmin", base.to_float, sub, context);
                var bucket = context.parsed.GovHydroPID2;
                if (null == bucket)
                   context.parsed.GovHydroPID2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroPID2", "atw", "atw",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "d", "d",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "feedbackSignal", "feedbackSignal",  base.from_boolean, fields);
                base.export_element (obj, "GovHydroPID2", "g0", "g0",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "g1", "g1",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "g2", "g2",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "gmax", "gmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "gmin", "gmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "ki", "ki",  base.from_float, fields);
                base.export_element (obj, "GovHydroPID2", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "p1", "p1",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "p2", "p2",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "p3", "p3",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "rperm", "rperm",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "treg", "treg",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "tw", "tw",  base.from_string, fields);
                base.export_element (obj, "GovHydroPID2", "velmax", "velmax",  base.from_float, fields);
                base.export_element (obj, "GovHydroPID2", "velmin", "velmin",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydroPID2_collapse" aria-expanded="true" aria-controls="GovHydroPID2_collapse" style="margin-left: 10px;">GovHydroPID2</a></legend>
                    <div id="GovHydroPID2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#atw}}<div><b>atw</b>: {{atw}}</div>{{/atw}}
                    {{#d}}<div><b>d</b>: {{d}}</div>{{/d}}
                    {{#feedbackSignal}}<div><b>feedbackSignal</b>: {{feedbackSignal}}</div>{{/feedbackSignal}}
                    {{#g0}}<div><b>g0</b>: {{g0}}</div>{{/g0}}
                    {{#g1}}<div><b>g1</b>: {{g1}}</div>{{/g1}}
                    {{#g2}}<div><b>g2</b>: {{g2}}</div>{{/g2}}
                    {{#gmax}}<div><b>gmax</b>: {{gmax}}</div>{{/gmax}}
                    {{#gmin}}<div><b>gmin</b>: {{gmin}}</div>{{/gmin}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#p1}}<div><b>p1</b>: {{p1}}</div>{{/p1}}
                    {{#p2}}<div><b>p2</b>: {{p2}}</div>{{/p2}}
                    {{#p3}}<div><b>p3</b>: {{p3}}</div>{{/p3}}
                    {{#rperm}}<div><b>rperm</b>: {{rperm}}</div>{{/rperm}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#treg}}<div><b>treg</b>: {{treg}}</div>{{/treg}}
                    {{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
                    {{#velmax}}<div><b>velmax</b>: {{velmax}}</div>{{/velmax}}
                    {{#velmin}}<div><b>velmin</b>: {{velmin}}</div>{{/velmin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydroPID2_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydroPID2_collapse" style="margin-left: 10px;">GovHydroPID2</a></legend>
                    <div id="{{id}}_GovHydroPID2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_atw'>atw: </label><div class='col-sm-8'><input id='{{id}}_atw' class='form-control' type='text'{{#atw}} value='{{atw}}'{{/atw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_d'>d: </label><div class='col-sm-8'><input id='{{id}}_d' class='form-control' type='text'{{#d}} value='{{d}}'{{/d}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_feedbackSignal'>feedbackSignal: </label><div class='col-sm-8'><input id='{{id}}_feedbackSignal' class='form-check-input' type='checkbox'{{#feedbackSignal}} checked{{/feedbackSignal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g0'>g0: </label><div class='col-sm-8'><input id='{{id}}_g0' class='form-control' type='text'{{#g0}} value='{{g0}}'{{/g0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g1'>g1: </label><div class='col-sm-8'><input id='{{id}}_g1' class='form-control' type='text'{{#g1}} value='{{g1}}'{{/g1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g2'>g2: </label><div class='col-sm-8'><input id='{{id}}_g2' class='form-control' type='text'{{#g2}} value='{{g2}}'{{/g2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmax'>gmax: </label><div class='col-sm-8'><input id='{{id}}_gmax' class='form-control' type='text'{{#gmax}} value='{{gmax}}'{{/gmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmin'>gmin: </label><div class='col-sm-8'><input id='{{id}}_gmin' class='form-control' type='text'{{#gmin}} value='{{gmin}}'{{/gmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_p1'>p1: </label><div class='col-sm-8'><input id='{{id}}_p1' class='form-control' type='text'{{#p1}} value='{{p1}}'{{/p1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_p2'>p2: </label><div class='col-sm-8'><input id='{{id}}_p2' class='form-control' type='text'{{#p2}} value='{{p2}}'{{/p2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_p3'>p3: </label><div class='col-sm-8'><input id='{{id}}_p3' class='form-control' type='text'{{#p3}} value='{{p3}}'{{/p3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rperm'>rperm: </label><div class='col-sm-8'><input id='{{id}}_rperm' class='form-control' type='text'{{#rperm}} value='{{rperm}}'{{/rperm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_treg'>treg: </label><div class='col-sm-8'><input id='{{id}}_treg' class='form-control' type='text'{{#treg}} value='{{treg}}'{{/treg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw'>tw: </label><div class='col-sm-8'><input id='{{id}}_tw' class='form-control' type='text'{{#tw}} value='{{tw}}'{{/tw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velmax'>velmax: </label><div class='col-sm-8'><input id='{{id}}_velmax' class='form-control' type='text'{{#velmax}} value='{{velmax}}'{{/velmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velmin'>velmin: </label><div class='col-sm-8'><input id='{{id}}_velmin' class='form-control' type='text'{{#velmin}} value='{{velmin}}'{{/velmin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydroPID2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_atw").value; if ("" != temp) obj.atw = temp;
                temp = document.getElementById (id + "_d").value; if ("" != temp) obj.d = temp;
                temp = document.getElementById (id + "_feedbackSignal").checked; if (temp) obj.feedbackSignal = true;
                temp = document.getElementById (id + "_g0").value; if ("" != temp) obj.g0 = temp;
                temp = document.getElementById (id + "_g1").value; if ("" != temp) obj.g1 = temp;
                temp = document.getElementById (id + "_g2").value; if ("" != temp) obj.g2 = temp;
                temp = document.getElementById (id + "_gmax").value; if ("" != temp) obj.gmax = temp;
                temp = document.getElementById (id + "_gmin").value; if ("" != temp) obj.gmin = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_p1").value; if ("" != temp) obj.p1 = temp;
                temp = document.getElementById (id + "_p2").value; if ("" != temp) obj.p2 = temp;
                temp = document.getElementById (id + "_p3").value; if ("" != temp) obj.p3 = temp;
                temp = document.getElementById (id + "_rperm").value; if ("" != temp) obj.rperm = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_treg").value; if ("" != temp) obj.treg = temp;
                temp = document.getElementById (id + "_tw").value; if ("" != temp) obj.tw = temp;
                temp = document.getElementById (id + "_velmax").value; if ("" != temp) obj.velmax = temp;
                temp = document.getElementById (id + "_velmin").value; if ("" != temp) obj.velmin = temp;

                return (obj);
            }
        }

        /**
         * Single shaft gas turbine.
         *
         */
        class GovGAST extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovGAST;
                if (null == bucket)
                   cim_data.GovGAST = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovGAST[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovGAST";
                base.parse_element (/<cim:GovGAST.at>([\s\S]*?)<\/cim:GovGAST.at>/g, obj, "at", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.dturb>([\s\S]*?)<\/cim:GovGAST.dturb>/g, obj, "dturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.kt>([\s\S]*?)<\/cim:GovGAST.kt>/g, obj, "kt", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.mwbase>([\s\S]*?)<\/cim:GovGAST.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.r>([\s\S]*?)<\/cim:GovGAST.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.t1>([\s\S]*?)<\/cim:GovGAST.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.t2>([\s\S]*?)<\/cim:GovGAST.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.t3>([\s\S]*?)<\/cim:GovGAST.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.vmax>([\s\S]*?)<\/cim:GovGAST.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST.vmin>([\s\S]*?)<\/cim:GovGAST.vmin>/g, obj, "vmin", base.to_string, sub, context);
                var bucket = context.parsed.GovGAST;
                if (null == bucket)
                   context.parsed.GovGAST = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovGAST", "at", "at",  base.from_string, fields);
                base.export_element (obj, "GovGAST", "dturb", "dturb",  base.from_string, fields);
                base.export_element (obj, "GovGAST", "kt", "kt",  base.from_string, fields);
                base.export_element (obj, "GovGAST", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovGAST", "r", "r",  base.from_string, fields);
                base.export_element (obj, "GovGAST", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "GovGAST", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "GovGAST", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "GovGAST", "vmax", "vmax",  base.from_string, fields);
                base.export_element (obj, "GovGAST", "vmin", "vmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovGAST_collapse" aria-expanded="true" aria-controls="GovGAST_collapse" style="margin-left: 10px;">GovGAST</a></legend>
                    <div id="GovGAST_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#at}}<div><b>at</b>: {{at}}</div>{{/at}}
                    {{#dturb}}<div><b>dturb</b>: {{dturb}}</div>{{/dturb}}
                    {{#kt}}<div><b>kt</b>: {{kt}}</div>{{/kt}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
                    {{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovGAST_collapse" aria-expanded="true" aria-controls="{{id}}_GovGAST_collapse" style="margin-left: 10px;">GovGAST</a></legend>
                    <div id="{{id}}_GovGAST_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_at'>at: </label><div class='col-sm-8'><input id='{{id}}_at' class='form-control' type='text'{{#at}} value='{{at}}'{{/at}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dturb'>dturb: </label><div class='col-sm-8'><input id='{{id}}_dturb' class='form-control' type='text'{{#dturb}} value='{{dturb}}'{{/dturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kt'>kt: </label><div class='col-sm-8'><input id='{{id}}_kt' class='form-control' type='text'{{#kt}} value='{{kt}}'{{/kt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmax'>vmax: </label><div class='col-sm-8'><input id='{{id}}_vmax' class='form-control' type='text'{{#vmax}} value='{{vmax}}'{{/vmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmin'>vmin: </label><div class='col-sm-8'><input id='{{id}}_vmin' class='form-control' type='text'{{#vmin}} value='{{vmin}}'{{/vmin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovGAST" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_at").value; if ("" != temp) obj.at = temp;
                temp = document.getElementById (id + "_dturb").value; if ("" != temp) obj.dturb = temp;
                temp = document.getElementById (id + "_kt").value; if ("" != temp) obj.kt = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_vmax").value; if ("" != temp) obj.vmax = temp;
                temp = document.getElementById (id + "_vmin").value; if ("" != temp) obj.vmin = temp;

                return (obj);
            }
        }

        /**
         * Simplified model  of boiler and steam turbine with PID governor.
         *
         */
        class GovSteamEU extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovSteamEU;
                if (null == bucket)
                   cim_data.GovSteamEU = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovSteamEU[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamEU";
                base.parse_element (/<cim:GovSteamEU.chc>([\s\S]*?)<\/cim:GovSteamEU.chc>/g, obj, "chc", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamEU.cho>([\s\S]*?)<\/cim:GovSteamEU.cho>/g, obj, "cho", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamEU.cic>([\s\S]*?)<\/cim:GovSteamEU.cic>/g, obj, "cic", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.cio>([\s\S]*?)<\/cim:GovSteamEU.cio>/g, obj, "cio", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.db1>([\s\S]*?)<\/cim:GovSteamEU.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.db2>([\s\S]*?)<\/cim:GovSteamEU.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.hhpmax>([\s\S]*?)<\/cim:GovSteamEU.hhpmax>/g, obj, "hhpmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.ke>([\s\S]*?)<\/cim:GovSteamEU.ke>/g, obj, "ke", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.kfcor>([\s\S]*?)<\/cim:GovSteamEU.kfcor>/g, obj, "kfcor", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.khp>([\s\S]*?)<\/cim:GovSteamEU.khp>/g, obj, "khp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.klp>([\s\S]*?)<\/cim:GovSteamEU.klp>/g, obj, "klp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.kwcor>([\s\S]*?)<\/cim:GovSteamEU.kwcor>/g, obj, "kwcor", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.mwbase>([\s\S]*?)<\/cim:GovSteamEU.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.pmax>([\s\S]*?)<\/cim:GovSteamEU.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.prhmax>([\s\S]*?)<\/cim:GovSteamEU.prhmax>/g, obj, "prhmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.simx>([\s\S]*?)<\/cim:GovSteamEU.simx>/g, obj, "simx", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tb>([\s\S]*?)<\/cim:GovSteamEU.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tdp>([\s\S]*?)<\/cim:GovSteamEU.tdp>/g, obj, "tdp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.ten>([\s\S]*?)<\/cim:GovSteamEU.ten>/g, obj, "ten", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tf>([\s\S]*?)<\/cim:GovSteamEU.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tfp>([\s\S]*?)<\/cim:GovSteamEU.tfp>/g, obj, "tfp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.thp>([\s\S]*?)<\/cim:GovSteamEU.thp>/g, obj, "thp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tip>([\s\S]*?)<\/cim:GovSteamEU.tip>/g, obj, "tip", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tlp>([\s\S]*?)<\/cim:GovSteamEU.tlp>/g, obj, "tlp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tp>([\s\S]*?)<\/cim:GovSteamEU.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.trh>([\s\S]*?)<\/cim:GovSteamEU.trh>/g, obj, "trh", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tvhp>([\s\S]*?)<\/cim:GovSteamEU.tvhp>/g, obj, "tvhp", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tvip>([\s\S]*?)<\/cim:GovSteamEU.tvip>/g, obj, "tvip", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.tw>([\s\S]*?)<\/cim:GovSteamEU.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.wfmax>([\s\S]*?)<\/cim:GovSteamEU.wfmax>/g, obj, "wfmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.wfmin>([\s\S]*?)<\/cim:GovSteamEU.wfmin>/g, obj, "wfmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.wmax1>([\s\S]*?)<\/cim:GovSteamEU.wmax1>/g, obj, "wmax1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.wmax2>([\s\S]*?)<\/cim:GovSteamEU.wmax2>/g, obj, "wmax2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.wwmax>([\s\S]*?)<\/cim:GovSteamEU.wwmax>/g, obj, "wwmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamEU.wwmin>([\s\S]*?)<\/cim:GovSteamEU.wwmin>/g, obj, "wwmin", base.to_string, sub, context);
                var bucket = context.parsed.GovSteamEU;
                if (null == bucket)
                   context.parsed.GovSteamEU = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamEU", "chc", "chc",  base.from_float, fields);
                base.export_element (obj, "GovSteamEU", "cho", "cho",  base.from_float, fields);
                base.export_element (obj, "GovSteamEU", "cic", "cic",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "cio", "cio",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "db1", "db1",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "db2", "db2",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "hhpmax", "hhpmax",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "kfcor", "kfcor",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "khp", "khp",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "klp", "klp",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "kwcor", "kwcor",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "prhmax", "prhmax",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "simx", "simx",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tdp", "tdp",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "ten", "ten",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tfp", "tfp",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "thp", "thp",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tip", "tip",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tlp", "tlp",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tp", "tp",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "trh", "trh",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tvhp", "tvhp",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tvip", "tvip",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "tw", "tw",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "wfmax", "wfmax",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "wfmin", "wfmin",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "wmax1", "wmax1",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "wmax2", "wmax2",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "wwmax", "wwmax",  base.from_string, fields);
                base.export_element (obj, "GovSteamEU", "wwmin", "wwmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovSteamEU_collapse" aria-expanded="true" aria-controls="GovSteamEU_collapse" style="margin-left: 10px;">GovSteamEU</a></legend>
                    <div id="GovSteamEU_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#chc}}<div><b>chc</b>: {{chc}}</div>{{/chc}}
                    {{#cho}}<div><b>cho</b>: {{cho}}</div>{{/cho}}
                    {{#cic}}<div><b>cic</b>: {{cic}}</div>{{/cic}}
                    {{#cio}}<div><b>cio</b>: {{cio}}</div>{{/cio}}
                    {{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
                    {{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
                    {{#hhpmax}}<div><b>hhpmax</b>: {{hhpmax}}</div>{{/hhpmax}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kfcor}}<div><b>kfcor</b>: {{kfcor}}</div>{{/kfcor}}
                    {{#khp}}<div><b>khp</b>: {{khp}}</div>{{/khp}}
                    {{#klp}}<div><b>klp</b>: {{klp}}</div>{{/klp}}
                    {{#kwcor}}<div><b>kwcor</b>: {{kwcor}}</div>{{/kwcor}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#prhmax}}<div><b>prhmax</b>: {{prhmax}}</div>{{/prhmax}}
                    {{#simx}}<div><b>simx</b>: {{simx}}</div>{{/simx}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tdp}}<div><b>tdp</b>: {{tdp}}</div>{{/tdp}}
                    {{#ten}}<div><b>ten</b>: {{ten}}</div>{{/ten}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tfp}}<div><b>tfp</b>: {{tfp}}</div>{{/tfp}}
                    {{#thp}}<div><b>thp</b>: {{thp}}</div>{{/thp}}
                    {{#tip}}<div><b>tip</b>: {{tip}}</div>{{/tip}}
                    {{#tlp}}<div><b>tlp</b>: {{tlp}}</div>{{/tlp}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
                    {{#trh}}<div><b>trh</b>: {{trh}}</div>{{/trh}}
                    {{#tvhp}}<div><b>tvhp</b>: {{tvhp}}</div>{{/tvhp}}
                    {{#tvip}}<div><b>tvip</b>: {{tvip}}</div>{{/tvip}}
                    {{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
                    {{#wfmax}}<div><b>wfmax</b>: {{wfmax}}</div>{{/wfmax}}
                    {{#wfmin}}<div><b>wfmin</b>: {{wfmin}}</div>{{/wfmin}}
                    {{#wmax1}}<div><b>wmax1</b>: {{wmax1}}</div>{{/wmax1}}
                    {{#wmax2}}<div><b>wmax2</b>: {{wmax2}}</div>{{/wmax2}}
                    {{#wwmax}}<div><b>wwmax</b>: {{wwmax}}</div>{{/wwmax}}
                    {{#wwmin}}<div><b>wwmin</b>: {{wwmin}}</div>{{/wwmin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovSteamEU_collapse" aria-expanded="true" aria-controls="{{id}}_GovSteamEU_collapse" style="margin-left: 10px;">GovSteamEU</a></legend>
                    <div id="{{id}}_GovSteamEU_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_chc'>chc: </label><div class='col-sm-8'><input id='{{id}}_chc' class='form-control' type='text'{{#chc}} value='{{chc}}'{{/chc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cho'>cho: </label><div class='col-sm-8'><input id='{{id}}_cho' class='form-control' type='text'{{#cho}} value='{{cho}}'{{/cho}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cic'>cic: </label><div class='col-sm-8'><input id='{{id}}_cic' class='form-control' type='text'{{#cic}} value='{{cic}}'{{/cic}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cio'>cio: </label><div class='col-sm-8'><input id='{{id}}_cio' class='form-control' type='text'{{#cio}} value='{{cio}}'{{/cio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db1'>db1: </label><div class='col-sm-8'><input id='{{id}}_db1' class='form-control' type='text'{{#db1}} value='{{db1}}'{{/db1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db2'>db2: </label><div class='col-sm-8'><input id='{{id}}_db2' class='form-control' type='text'{{#db2}} value='{{db2}}'{{/db2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hhpmax'>hhpmax: </label><div class='col-sm-8'><input id='{{id}}_hhpmax' class='form-control' type='text'{{#hhpmax}} value='{{hhpmax}}'{{/hhpmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kfcor'>kfcor: </label><div class='col-sm-8'><input id='{{id}}_kfcor' class='form-control' type='text'{{#kfcor}} value='{{kfcor}}'{{/kfcor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_khp'>khp: </label><div class='col-sm-8'><input id='{{id}}_khp' class='form-control' type='text'{{#khp}} value='{{khp}}'{{/khp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_klp'>klp: </label><div class='col-sm-8'><input id='{{id}}_klp' class='form-control' type='text'{{#klp}} value='{{klp}}'{{/klp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kwcor'>kwcor: </label><div class='col-sm-8'><input id='{{id}}_kwcor' class='form-control' type='text'{{#kwcor}} value='{{kwcor}}'{{/kwcor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_prhmax'>prhmax: </label><div class='col-sm-8'><input id='{{id}}_prhmax' class='form-control' type='text'{{#prhmax}} value='{{prhmax}}'{{/prhmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_simx'>simx: </label><div class='col-sm-8'><input id='{{id}}_simx' class='form-control' type='text'{{#simx}} value='{{simx}}'{{/simx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tdp'>tdp: </label><div class='col-sm-8'><input id='{{id}}_tdp' class='form-control' type='text'{{#tdp}} value='{{tdp}}'{{/tdp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ten'>ten: </label><div class='col-sm-8'><input id='{{id}}_ten' class='form-control' type='text'{{#ten}} value='{{ten}}'{{/ten}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tfp'>tfp: </label><div class='col-sm-8'><input id='{{id}}_tfp' class='form-control' type='text'{{#tfp}} value='{{tfp}}'{{/tfp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thp'>thp: </label><div class='col-sm-8'><input id='{{id}}_thp' class='form-control' type='text'{{#thp}} value='{{thp}}'{{/thp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tip'>tip: </label><div class='col-sm-8'><input id='{{id}}_tip' class='form-control' type='text'{{#tip}} value='{{tip}}'{{/tip}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tlp'>tlp: </label><div class='col-sm-8'><input id='{{id}}_tlp' class='form-control' type='text'{{#tlp}} value='{{tlp}}'{{/tlp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_trh'>trh: </label><div class='col-sm-8'><input id='{{id}}_trh' class='form-control' type='text'{{#trh}} value='{{trh}}'{{/trh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tvhp'>tvhp: </label><div class='col-sm-8'><input id='{{id}}_tvhp' class='form-control' type='text'{{#tvhp}} value='{{tvhp}}'{{/tvhp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tvip'>tvip: </label><div class='col-sm-8'><input id='{{id}}_tvip' class='form-control' type='text'{{#tvip}} value='{{tvip}}'{{/tvip}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw'>tw: </label><div class='col-sm-8'><input id='{{id}}_tw' class='form-control' type='text'{{#tw}} value='{{tw}}'{{/tw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_wfmax'>wfmax: </label><div class='col-sm-8'><input id='{{id}}_wfmax' class='form-control' type='text'{{#wfmax}} value='{{wfmax}}'{{/wfmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_wfmin'>wfmin: </label><div class='col-sm-8'><input id='{{id}}_wfmin' class='form-control' type='text'{{#wfmin}} value='{{wfmin}}'{{/wfmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_wmax1'>wmax1: </label><div class='col-sm-8'><input id='{{id}}_wmax1' class='form-control' type='text'{{#wmax1}} value='{{wmax1}}'{{/wmax1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_wmax2'>wmax2: </label><div class='col-sm-8'><input id='{{id}}_wmax2' class='form-control' type='text'{{#wmax2}} value='{{wmax2}}'{{/wmax2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_wwmax'>wwmax: </label><div class='col-sm-8'><input id='{{id}}_wwmax' class='form-control' type='text'{{#wwmax}} value='{{wwmax}}'{{/wwmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_wwmin'>wwmin: </label><div class='col-sm-8'><input id='{{id}}_wwmin' class='form-control' type='text'{{#wwmin}} value='{{wwmin}}'{{/wwmin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovSteamEU" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_chc").value; if ("" != temp) obj.chc = temp;
                temp = document.getElementById (id + "_cho").value; if ("" != temp) obj.cho = temp;
                temp = document.getElementById (id + "_cic").value; if ("" != temp) obj.cic = temp;
                temp = document.getElementById (id + "_cio").value; if ("" != temp) obj.cio = temp;
                temp = document.getElementById (id + "_db1").value; if ("" != temp) obj.db1 = temp;
                temp = document.getElementById (id + "_db2").value; if ("" != temp) obj.db2 = temp;
                temp = document.getElementById (id + "_hhpmax").value; if ("" != temp) obj.hhpmax = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kfcor").value; if ("" != temp) obj.kfcor = temp;
                temp = document.getElementById (id + "_khp").value; if ("" != temp) obj.khp = temp;
                temp = document.getElementById (id + "_klp").value; if ("" != temp) obj.klp = temp;
                temp = document.getElementById (id + "_kwcor").value; if ("" != temp) obj.kwcor = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_prhmax").value; if ("" != temp) obj.prhmax = temp;
                temp = document.getElementById (id + "_simx").value; if ("" != temp) obj.simx = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tdp").value; if ("" != temp) obj.tdp = temp;
                temp = document.getElementById (id + "_ten").value; if ("" != temp) obj.ten = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_tfp").value; if ("" != temp) obj.tfp = temp;
                temp = document.getElementById (id + "_thp").value; if ("" != temp) obj.thp = temp;
                temp = document.getElementById (id + "_tip").value; if ("" != temp) obj.tip = temp;
                temp = document.getElementById (id + "_tlp").value; if ("" != temp) obj.tlp = temp;
                temp = document.getElementById (id + "_tp").value; if ("" != temp) obj.tp = temp;
                temp = document.getElementById (id + "_trh").value; if ("" != temp) obj.trh = temp;
                temp = document.getElementById (id + "_tvhp").value; if ("" != temp) obj.tvhp = temp;
                temp = document.getElementById (id + "_tvip").value; if ("" != temp) obj.tvip = temp;
                temp = document.getElementById (id + "_tw").value; if ("" != temp) obj.tw = temp;
                temp = document.getElementById (id + "_wfmax").value; if ("" != temp) obj.wfmax = temp;
                temp = document.getElementById (id + "_wfmin").value; if ("" != temp) obj.wfmin = temp;
                temp = document.getElementById (id + "_wmax1").value; if ("" != temp) obj.wmax1 = temp;
                temp = document.getElementById (id + "_wmax2").value; if ("" != temp) obj.wmax2 = temp;
                temp = document.getElementById (id + "_wwmax").value; if ("" != temp) obj.wwmax = temp;
                temp = document.getElementById (id + "_wwmin").value; if ("" != temp) obj.wwmin = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE Hydro Governor-Turbine Model.
         *
         * This model differs from that defined in the IEEE modeling guideline paper in that the limits on gate position and velocity do not permit "wind up" of the upstream signals.
         *
         */
        class GovHydro3 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydro3;
                if (null == bucket)
                   cim_data.GovHydro3 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydro3[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydro3";
                base.parse_element (/<cim:GovHydro3.at>([\s\S]*?)<\/cim:GovHydro3.at>/g, obj, "at", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.db1>([\s\S]*?)<\/cim:GovHydro3.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.db2>([\s\S]*?)<\/cim:GovHydro3.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.dturb>([\s\S]*?)<\/cim:GovHydro3.dturb>/g, obj, "dturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.eps>([\s\S]*?)<\/cim:GovHydro3.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.governorControl>([\s\S]*?)<\/cim:GovHydro3.governorControl>/g, obj, "governorControl", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydro3.gv1>([\s\S]*?)<\/cim:GovHydro3.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.gv2>([\s\S]*?)<\/cim:GovHydro3.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.gv3>([\s\S]*?)<\/cim:GovHydro3.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.gv4>([\s\S]*?)<\/cim:GovHydro3.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.gv5>([\s\S]*?)<\/cim:GovHydro3.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.gv6>([\s\S]*?)<\/cim:GovHydro3.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.h0>([\s\S]*?)<\/cim:GovHydro3.h0>/g, obj, "h0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.k1>([\s\S]*?)<\/cim:GovHydro3.k1>/g, obj, "k1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.k2>([\s\S]*?)<\/cim:GovHydro3.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.kg>([\s\S]*?)<\/cim:GovHydro3.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.ki>([\s\S]*?)<\/cim:GovHydro3.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.mwbase>([\s\S]*?)<\/cim:GovHydro3.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pgv1>([\s\S]*?)<\/cim:GovHydro3.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pgv2>([\s\S]*?)<\/cim:GovHydro3.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pgv3>([\s\S]*?)<\/cim:GovHydro3.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pgv4>([\s\S]*?)<\/cim:GovHydro3.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pgv5>([\s\S]*?)<\/cim:GovHydro3.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pgv6>([\s\S]*?)<\/cim:GovHydro3.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pmax>([\s\S]*?)<\/cim:GovHydro3.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.pmin>([\s\S]*?)<\/cim:GovHydro3.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.qnl>([\s\S]*?)<\/cim:GovHydro3.qnl>/g, obj, "qnl", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.relec>([\s\S]*?)<\/cim:GovHydro3.relec>/g, obj, "relec", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.rgate>([\s\S]*?)<\/cim:GovHydro3.rgate>/g, obj, "rgate", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.td>([\s\S]*?)<\/cim:GovHydro3.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.tf>([\s\S]*?)<\/cim:GovHydro3.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.tp>([\s\S]*?)<\/cim:GovHydro3.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.tt>([\s\S]*?)<\/cim:GovHydro3.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.tw>([\s\S]*?)<\/cim:GovHydro3.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro3.velcl>([\s\S]*?)<\/cim:GovHydro3.velcl>/g, obj, "velcl", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydro3.velop>([\s\S]*?)<\/cim:GovHydro3.velop>/g, obj, "velop", base.to_float, sub, context);
                var bucket = context.parsed.GovHydro3;
                if (null == bucket)
                   context.parsed.GovHydro3 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydro3", "at", "at",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "db1", "db1",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "db2", "db2",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "dturb", "dturb",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "eps", "eps",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "governorControl", "governorControl",  base.from_boolean, fields);
                base.export_element (obj, "GovHydro3", "gv1", "gv1",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "gv2", "gv2",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "gv3", "gv3",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "gv4", "gv4",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "gv5", "gv5",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "gv6", "gv6",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "h0", "h0",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "k1", "k1",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "k2", "k2",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "kg", "kg",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pgv1", "pgv1",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pgv2", "pgv2",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pgv3", "pgv3",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pgv4", "pgv4",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pgv5", "pgv5",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pgv6", "pgv6",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "qnl", "qnl",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "relec", "relec",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "rgate", "rgate",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "td", "td",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "tp", "tp",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "tt", "tt",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "tw", "tw",  base.from_string, fields);
                base.export_element (obj, "GovHydro3", "velcl", "velcl",  base.from_float, fields);
                base.export_element (obj, "GovHydro3", "velop", "velop",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydro3_collapse" aria-expanded="true" aria-controls="GovHydro3_collapse" style="margin-left: 10px;">GovHydro3</a></legend>
                    <div id="GovHydro3_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#at}}<div><b>at</b>: {{at}}</div>{{/at}}
                    {{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
                    {{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
                    {{#dturb}}<div><b>dturb</b>: {{dturb}}</div>{{/dturb}}
                    {{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
                    {{#governorControl}}<div><b>governorControl</b>: {{governorControl}}</div>{{/governorControl}}
                    {{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
                    {{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
                    {{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
                    {{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
                    {{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
                    {{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
                    {{#h0}}<div><b>h0</b>: {{h0}}</div>{{/h0}}
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
                    {{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
                    {{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
                    {{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
                    {{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
                    {{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#qnl}}<div><b>qnl</b>: {{qnl}}</div>{{/qnl}}
                    {{#relec}}<div><b>relec</b>: {{relec}}</div>{{/relec}}
                    {{#rgate}}<div><b>rgate</b>: {{rgate}}</div>{{/rgate}}
                    {{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
                    {{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
                    {{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
                    {{#velcl}}<div><b>velcl</b>: {{velcl}}</div>{{/velcl}}
                    {{#velop}}<div><b>velop</b>: {{velop}}</div>{{/velop}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydro3_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydro3_collapse" style="margin-left: 10px;">GovHydro3</a></legend>
                    <div id="{{id}}_GovHydro3_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_at'>at: </label><div class='col-sm-8'><input id='{{id}}_at' class='form-control' type='text'{{#at}} value='{{at}}'{{/at}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db1'>db1: </label><div class='col-sm-8'><input id='{{id}}_db1' class='form-control' type='text'{{#db1}} value='{{db1}}'{{/db1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db2'>db2: </label><div class='col-sm-8'><input id='{{id}}_db2' class='form-control' type='text'{{#db2}} value='{{db2}}'{{/db2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dturb'>dturb: </label><div class='col-sm-8'><input id='{{id}}_dturb' class='form-control' type='text'{{#dturb}} value='{{dturb}}'{{/dturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eps'>eps: </label><div class='col-sm-8'><input id='{{id}}_eps' class='form-control' type='text'{{#eps}} value='{{eps}}'{{/eps}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_governorControl'>governorControl: </label><div class='col-sm-8'><input id='{{id}}_governorControl' class='form-check-input' type='checkbox'{{#governorControl}} checked{{/governorControl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv1'>gv1: </label><div class='col-sm-8'><input id='{{id}}_gv1' class='form-control' type='text'{{#gv1}} value='{{gv1}}'{{/gv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv2'>gv2: </label><div class='col-sm-8'><input id='{{id}}_gv2' class='form-control' type='text'{{#gv2}} value='{{gv2}}'{{/gv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv3'>gv3: </label><div class='col-sm-8'><input id='{{id}}_gv3' class='form-control' type='text'{{#gv3}} value='{{gv3}}'{{/gv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv4'>gv4: </label><div class='col-sm-8'><input id='{{id}}_gv4' class='form-control' type='text'{{#gv4}} value='{{gv4}}'{{/gv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv5'>gv5: </label><div class='col-sm-8'><input id='{{id}}_gv5' class='form-control' type='text'{{#gv5}} value='{{gv5}}'{{/gv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv6'>gv6: </label><div class='col-sm-8'><input id='{{id}}_gv6' class='form-control' type='text'{{#gv6}} value='{{gv6}}'{{/gv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_h0'>h0: </label><div class='col-sm-8'><input id='{{id}}_h0' class='form-control' type='text'{{#h0}} value='{{h0}}'{{/h0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kg'>kg: </label><div class='col-sm-8'><input id='{{id}}_kg' class='form-control' type='text'{{#kg}} value='{{kg}}'{{/kg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv1'>pgv1: </label><div class='col-sm-8'><input id='{{id}}_pgv1' class='form-control' type='text'{{#pgv1}} value='{{pgv1}}'{{/pgv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv2'>pgv2: </label><div class='col-sm-8'><input id='{{id}}_pgv2' class='form-control' type='text'{{#pgv2}} value='{{pgv2}}'{{/pgv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv3'>pgv3: </label><div class='col-sm-8'><input id='{{id}}_pgv3' class='form-control' type='text'{{#pgv3}} value='{{pgv3}}'{{/pgv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv4'>pgv4: </label><div class='col-sm-8'><input id='{{id}}_pgv4' class='form-control' type='text'{{#pgv4}} value='{{pgv4}}'{{/pgv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv5'>pgv5: </label><div class='col-sm-8'><input id='{{id}}_pgv5' class='form-control' type='text'{{#pgv5}} value='{{pgv5}}'{{/pgv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv6'>pgv6: </label><div class='col-sm-8'><input id='{{id}}_pgv6' class='form-control' type='text'{{#pgv6}} value='{{pgv6}}'{{/pgv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qnl'>qnl: </label><div class='col-sm-8'><input id='{{id}}_qnl' class='form-control' type='text'{{#qnl}} value='{{qnl}}'{{/qnl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_relec'>relec: </label><div class='col-sm-8'><input id='{{id}}_relec' class='form-control' type='text'{{#relec}} value='{{relec}}'{{/relec}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rgate'>rgate: </label><div class='col-sm-8'><input id='{{id}}_rgate' class='form-control' type='text'{{#rgate}} value='{{rgate}}'{{/rgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td'>td: </label><div class='col-sm-8'><input id='{{id}}_td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tt'>tt: </label><div class='col-sm-8'><input id='{{id}}_tt' class='form-control' type='text'{{#tt}} value='{{tt}}'{{/tt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw'>tw: </label><div class='col-sm-8'><input id='{{id}}_tw' class='form-control' type='text'{{#tw}} value='{{tw}}'{{/tw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velcl'>velcl: </label><div class='col-sm-8'><input id='{{id}}_velcl' class='form-control' type='text'{{#velcl}} value='{{velcl}}'{{/velcl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velop'>velop: </label><div class='col-sm-8'><input id='{{id}}_velop' class='form-control' type='text'{{#velop}} value='{{velop}}'{{/velop}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydro3" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_at").value; if ("" != temp) obj.at = temp;
                temp = document.getElementById (id + "_db1").value; if ("" != temp) obj.db1 = temp;
                temp = document.getElementById (id + "_db2").value; if ("" != temp) obj.db2 = temp;
                temp = document.getElementById (id + "_dturb").value; if ("" != temp) obj.dturb = temp;
                temp = document.getElementById (id + "_eps").value; if ("" != temp) obj.eps = temp;
                temp = document.getElementById (id + "_governorControl").checked; if (temp) obj.governorControl = true;
                temp = document.getElementById (id + "_gv1").value; if ("" != temp) obj.gv1 = temp;
                temp = document.getElementById (id + "_gv2").value; if ("" != temp) obj.gv2 = temp;
                temp = document.getElementById (id + "_gv3").value; if ("" != temp) obj.gv3 = temp;
                temp = document.getElementById (id + "_gv4").value; if ("" != temp) obj.gv4 = temp;
                temp = document.getElementById (id + "_gv5").value; if ("" != temp) obj.gv5 = temp;
                temp = document.getElementById (id + "_gv6").value; if ("" != temp) obj.gv6 = temp;
                temp = document.getElementById (id + "_h0").value; if ("" != temp) obj.h0 = temp;
                temp = document.getElementById (id + "_k1").value; if ("" != temp) obj.k1 = temp;
                temp = document.getElementById (id + "_k2").value; if ("" != temp) obj.k2 = temp;
                temp = document.getElementById (id + "_kg").value; if ("" != temp) obj.kg = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pgv1").value; if ("" != temp) obj.pgv1 = temp;
                temp = document.getElementById (id + "_pgv2").value; if ("" != temp) obj.pgv2 = temp;
                temp = document.getElementById (id + "_pgv3").value; if ("" != temp) obj.pgv3 = temp;
                temp = document.getElementById (id + "_pgv4").value; if ("" != temp) obj.pgv4 = temp;
                temp = document.getElementById (id + "_pgv5").value; if ("" != temp) obj.pgv5 = temp;
                temp = document.getElementById (id + "_pgv6").value; if ("" != temp) obj.pgv6 = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_qnl").value; if ("" != temp) obj.qnl = temp;
                temp = document.getElementById (id + "_relec").value; if ("" != temp) obj.relec = temp;
                temp = document.getElementById (id + "_rgate").value; if ("" != temp) obj.rgate = temp;
                temp = document.getElementById (id + "_td").value; if ("" != temp) obj.td = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_tp").value; if ("" != temp) obj.tp = temp;
                temp = document.getElementById (id + "_tt").value; if ("" != temp) obj.tt = temp;
                temp = document.getElementById (id + "_tw").value; if ("" != temp) obj.tw = temp;
                temp = document.getElementById (id + "_velcl").value; if ("" != temp) obj.velcl = temp;
                temp = document.getElementById (id + "_velop").value; if ("" != temp) obj.velop = temp;

                return (obj);
            }
        }

        /**
         * IEEE steam turbine governor model.
         *
         * Ref<font color="#0f0f0f">erence: IEEE Transactions on Power Apparatus and Systems</font>
         *
         */
        class GovSteamIEEE1 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovSteamIEEE1;
                if (null == bucket)
                   cim_data.GovSteamIEEE1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovSteamIEEE1[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamIEEE1";
                base.parse_element (/<cim:GovSteamIEEE1.k>([\s\S]*?)<\/cim:GovSteamIEEE1.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k1>([\s\S]*?)<\/cim:GovSteamIEEE1.k1>/g, obj, "k1", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k2>([\s\S]*?)<\/cim:GovSteamIEEE1.k2>/g, obj, "k2", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k3>([\s\S]*?)<\/cim:GovSteamIEEE1.k3>/g, obj, "k3", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k4>([\s\S]*?)<\/cim:GovSteamIEEE1.k4>/g, obj, "k4", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k5>([\s\S]*?)<\/cim:GovSteamIEEE1.k5>/g, obj, "k5", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k6>([\s\S]*?)<\/cim:GovSteamIEEE1.k6>/g, obj, "k6", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k7>([\s\S]*?)<\/cim:GovSteamIEEE1.k7>/g, obj, "k7", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.k8>([\s\S]*?)<\/cim:GovSteamIEEE1.k8>/g, obj, "k8", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.mwbase>([\s\S]*?)<\/cim:GovSteamIEEE1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.pmax>([\s\S]*?)<\/cim:GovSteamIEEE1.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.pmin>([\s\S]*?)<\/cim:GovSteamIEEE1.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t1>([\s\S]*?)<\/cim:GovSteamIEEE1.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t2>([\s\S]*?)<\/cim:GovSteamIEEE1.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t3>([\s\S]*?)<\/cim:GovSteamIEEE1.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t4>([\s\S]*?)<\/cim:GovSteamIEEE1.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t5>([\s\S]*?)<\/cim:GovSteamIEEE1.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t6>([\s\S]*?)<\/cim:GovSteamIEEE1.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.t7>([\s\S]*?)<\/cim:GovSteamIEEE1.t7>/g, obj, "t7", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.uc>([\s\S]*?)<\/cim:GovSteamIEEE1.uc>/g, obj, "uc", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamIEEE1.uo>([\s\S]*?)<\/cim:GovSteamIEEE1.uo>/g, obj, "uo", base.to_float, sub, context);
                var bucket = context.parsed.GovSteamIEEE1;
                if (null == bucket)
                   context.parsed.GovSteamIEEE1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamIEEE1", "k", "k",  base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "k1", "k1",  base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k2", "k2",  base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k3", "k3",  base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k4", "k4",  base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k5", "k5",  base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k6", "k6",  base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k7", "k7",  base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "k8", "k8",  base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "t7", "t7",  base.from_string, fields);
                base.export_element (obj, "GovSteamIEEE1", "uc", "uc",  base.from_float, fields);
                base.export_element (obj, "GovSteamIEEE1", "uo", "uo",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovSteamIEEE1_collapse" aria-expanded="true" aria-controls="GovSteamIEEE1_collapse" style="margin-left: 10px;">GovSteamIEEE1</a></legend>
                    <div id="GovSteamIEEE1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
                    {{#k4}}<div><b>k4</b>: {{k4}}</div>{{/k4}}
                    {{#k5}}<div><b>k5</b>: {{k5}}</div>{{/k5}}
                    {{#k6}}<div><b>k6</b>: {{k6}}</div>{{/k6}}
                    {{#k7}}<div><b>k7</b>: {{k7}}</div>{{/k7}}
                    {{#k8}}<div><b>k8</b>: {{k8}}</div>{{/k8}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#t7}}<div><b>t7</b>: {{t7}}</div>{{/t7}}
                    {{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
                    {{#uo}}<div><b>uo</b>: {{uo}}</div>{{/uo}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovSteamIEEE1_collapse" aria-expanded="true" aria-controls="{{id}}_GovSteamIEEE1_collapse" style="margin-left: 10px;">GovSteamIEEE1</a></legend>
                    <div id="{{id}}_GovSteamIEEE1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k3'>k3: </label><div class='col-sm-8'><input id='{{id}}_k3' class='form-control' type='text'{{#k3}} value='{{k3}}'{{/k3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k4'>k4: </label><div class='col-sm-8'><input id='{{id}}_k4' class='form-control' type='text'{{#k4}} value='{{k4}}'{{/k4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k5'>k5: </label><div class='col-sm-8'><input id='{{id}}_k5' class='form-control' type='text'{{#k5}} value='{{k5}}'{{/k5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k6'>k6: </label><div class='col-sm-8'><input id='{{id}}_k6' class='form-control' type='text'{{#k6}} value='{{k6}}'{{/k6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k7'>k7: </label><div class='col-sm-8'><input id='{{id}}_k7' class='form-control' type='text'{{#k7}} value='{{k7}}'{{/k7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k8'>k8: </label><div class='col-sm-8'><input id='{{id}}_k8' class='form-control' type='text'{{#k8}} value='{{k8}}'{{/k8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t7'>t7: </label><div class='col-sm-8'><input id='{{id}}_t7' class='form-control' type='text'{{#t7}} value='{{t7}}'{{/t7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uc'>uc: </label><div class='col-sm-8'><input id='{{id}}_uc' class='form-control' type='text'{{#uc}} value='{{uc}}'{{/uc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uo'>uo: </label><div class='col-sm-8'><input id='{{id}}_uo' class='form-control' type='text'{{#uo}} value='{{uo}}'{{/uo}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovSteamIEEE1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_k").value; if ("" != temp) obj.k = temp;
                temp = document.getElementById (id + "_k1").value; if ("" != temp) obj.k1 = temp;
                temp = document.getElementById (id + "_k2").value; if ("" != temp) obj.k2 = temp;
                temp = document.getElementById (id + "_k3").value; if ("" != temp) obj.k3 = temp;
                temp = document.getElementById (id + "_k4").value; if ("" != temp) obj.k4 = temp;
                temp = document.getElementById (id + "_k5").value; if ("" != temp) obj.k5 = temp;
                temp = document.getElementById (id + "_k6").value; if ("" != temp) obj.k6 = temp;
                temp = document.getElementById (id + "_k7").value; if ("" != temp) obj.k7 = temp;
                temp = document.getElementById (id + "_k8").value; if ("" != temp) obj.k8 = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_t5").value; if ("" != temp) obj.t5 = temp;
                temp = document.getElementById (id + "_t6").value; if ("" != temp) obj.t6 = temp;
                temp = document.getElementById (id + "_t7").value; if ("" != temp) obj.t7 = temp;
                temp = document.getElementById (id + "_uc").value; if ("" != temp) obj.uc = temp;
                temp = document.getElementById (id + "_uo").value; if ("" != temp) obj.uo = temp;

                return (obj);
            }
        }

        /**
         * Woodward Gas turbine governor model.
         *
         */
        class GovGASTWD extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovGASTWD;
                if (null == bucket)
                   cim_data.GovGASTWD = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovGASTWD[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovGASTWD";
                base.parse_element (/<cim:GovGASTWD.a>([\s\S]*?)<\/cim:GovGASTWD.a>/g, obj, "a", base.to_float, sub, context);
                base.parse_element (/<cim:GovGASTWD.af1>([\s\S]*?)<\/cim:GovGASTWD.af1>/g, obj, "af1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.af2>([\s\S]*?)<\/cim:GovGASTWD.af2>/g, obj, "af2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.b>([\s\S]*?)<\/cim:GovGASTWD.b>/g, obj, "b", base.to_float, sub, context);
                base.parse_element (/<cim:GovGASTWD.bf1>([\s\S]*?)<\/cim:GovGASTWD.bf1>/g, obj, "bf1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.bf2>([\s\S]*?)<\/cim:GovGASTWD.bf2>/g, obj, "bf2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.c>([\s\S]*?)<\/cim:GovGASTWD.c>/g, obj, "c", base.to_float, sub, context);
                base.parse_element (/<cim:GovGASTWD.cf2>([\s\S]*?)<\/cim:GovGASTWD.cf2>/g, obj, "cf2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.ecr>([\s\S]*?)<\/cim:GovGASTWD.ecr>/g, obj, "ecr", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.etd>([\s\S]*?)<\/cim:GovGASTWD.etd>/g, obj, "etd", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.k3>([\s\S]*?)<\/cim:GovGASTWD.k3>/g, obj, "k3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.k4>([\s\S]*?)<\/cim:GovGASTWD.k4>/g, obj, "k4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.k5>([\s\S]*?)<\/cim:GovGASTWD.k5>/g, obj, "k5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.k6>([\s\S]*?)<\/cim:GovGASTWD.k6>/g, obj, "k6", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.kd>([\s\S]*?)<\/cim:GovGASTWD.kd>/g, obj, "kd", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.kdroop>([\s\S]*?)<\/cim:GovGASTWD.kdroop>/g, obj, "kdroop", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.kf>([\s\S]*?)<\/cim:GovGASTWD.kf>/g, obj, "kf", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.ki>([\s\S]*?)<\/cim:GovGASTWD.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.kp>([\s\S]*?)<\/cim:GovGASTWD.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.mwbase>([\s\S]*?)<\/cim:GovGASTWD.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.t>([\s\S]*?)<\/cim:GovGASTWD.t>/g, obj, "t", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.t3>([\s\S]*?)<\/cim:GovGASTWD.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.t4>([\s\S]*?)<\/cim:GovGASTWD.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.t5>([\s\S]*?)<\/cim:GovGASTWD.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tc>([\s\S]*?)<\/cim:GovGASTWD.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tcd>([\s\S]*?)<\/cim:GovGASTWD.tcd>/g, obj, "tcd", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.td>([\s\S]*?)<\/cim:GovGASTWD.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tf>([\s\S]*?)<\/cim:GovGASTWD.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tmax>([\s\S]*?)<\/cim:GovGASTWD.tmax>/g, obj, "tmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tmin>([\s\S]*?)<\/cim:GovGASTWD.tmin>/g, obj, "tmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tr>([\s\S]*?)<\/cim:GovGASTWD.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.trate>([\s\S]*?)<\/cim:GovGASTWD.trate>/g, obj, "trate", base.to_string, sub, context);
                base.parse_element (/<cim:GovGASTWD.tt>([\s\S]*?)<\/cim:GovGASTWD.tt>/g, obj, "tt", base.to_string, sub, context);
                var bucket = context.parsed.GovGASTWD;
                if (null == bucket)
                   context.parsed.GovGASTWD = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovGASTWD", "a", "a",  base.from_float, fields);
                base.export_element (obj, "GovGASTWD", "af1", "af1",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "af2", "af2",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "b", "b",  base.from_float, fields);
                base.export_element (obj, "GovGASTWD", "bf1", "bf1",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "bf2", "bf2",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "c", "c",  base.from_float, fields);
                base.export_element (obj, "GovGASTWD", "cf2", "cf2",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "ecr", "ecr",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "etd", "etd",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "k3", "k3",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "k4", "k4",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "k5", "k5",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "k6", "k6",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "kdroop", "kdroop",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "t", "t",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tcd", "tcd",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "td", "td",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tmax", "tmax",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tmin", "tmin",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tr", "tr",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "trate", "trate",  base.from_string, fields);
                base.export_element (obj, "GovGASTWD", "tt", "tt",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovGASTWD_collapse" aria-expanded="true" aria-controls="GovGASTWD_collapse" style="margin-left: 10px;">GovGASTWD</a></legend>
                    <div id="GovGASTWD_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#a}}<div><b>a</b>: {{a}}</div>{{/a}}
                    {{#af1}}<div><b>af1</b>: {{af1}}</div>{{/af1}}
                    {{#af2}}<div><b>af2</b>: {{af2}}</div>{{/af2}}
                    {{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
                    {{#bf1}}<div><b>bf1</b>: {{bf1}}</div>{{/bf1}}
                    {{#bf2}}<div><b>bf2</b>: {{bf2}}</div>{{/bf2}}
                    {{#c}}<div><b>c</b>: {{c}}</div>{{/c}}
                    {{#cf2}}<div><b>cf2</b>: {{cf2}}</div>{{/cf2}}
                    {{#ecr}}<div><b>ecr</b>: {{ecr}}</div>{{/ecr}}
                    {{#etd}}<div><b>etd</b>: {{etd}}</div>{{/etd}}
                    {{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
                    {{#k4}}<div><b>k4</b>: {{k4}}</div>{{/k4}}
                    {{#k5}}<div><b>k5</b>: {{k5}}</div>{{/k5}}
                    {{#k6}}<div><b>k6</b>: {{k6}}</div>{{/k6}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#kdroop}}<div><b>kdroop</b>: {{kdroop}}</div>{{/kdroop}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#t}}<div><b>t</b>: {{t}}</div>{{/t}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#tcd}}<div><b>tcd</b>: {{tcd}}</div>{{/tcd}}
                    {{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tmax}}<div><b>tmax</b>: {{tmax}}</div>{{/tmax}}
                    {{#tmin}}<div><b>tmin</b>: {{tmin}}</div>{{/tmin}}
                    {{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
                    {{#trate}}<div><b>trate</b>: {{trate}}</div>{{/trate}}
                    {{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovGASTWD_collapse" aria-expanded="true" aria-controls="{{id}}_GovGASTWD_collapse" style="margin-left: 10px;">GovGASTWD</a></legend>
                    <div id="{{id}}_GovGASTWD_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a'>a: </label><div class='col-sm-8'><input id='{{id}}_a' class='form-control' type='text'{{#a}} value='{{a}}'{{/a}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_af1'>af1: </label><div class='col-sm-8'><input id='{{id}}_af1' class='form-control' type='text'{{#af1}} value='{{af1}}'{{/af1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_af2'>af2: </label><div class='col-sm-8'><input id='{{id}}_af2' class='form-control' type='text'{{#af2}} value='{{af2}}'{{/af2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b'>b: </label><div class='col-sm-8'><input id='{{id}}_b' class='form-control' type='text'{{#b}} value='{{b}}'{{/b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bf1'>bf1: </label><div class='col-sm-8'><input id='{{id}}_bf1' class='form-control' type='text'{{#bf1}} value='{{bf1}}'{{/bf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bf2'>bf2: </label><div class='col-sm-8'><input id='{{id}}_bf2' class='form-control' type='text'{{#bf2}} value='{{bf2}}'{{/bf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_c'>c: </label><div class='col-sm-8'><input id='{{id}}_c' class='form-control' type='text'{{#c}} value='{{c}}'{{/c}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cf2'>cf2: </label><div class='col-sm-8'><input id='{{id}}_cf2' class='form-control' type='text'{{#cf2}} value='{{cf2}}'{{/cf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ecr'>ecr: </label><div class='col-sm-8'><input id='{{id}}_ecr' class='form-control' type='text'{{#ecr}} value='{{ecr}}'{{/ecr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_etd'>etd: </label><div class='col-sm-8'><input id='{{id}}_etd' class='form-control' type='text'{{#etd}} value='{{etd}}'{{/etd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k3'>k3: </label><div class='col-sm-8'><input id='{{id}}_k3' class='form-control' type='text'{{#k3}} value='{{k3}}'{{/k3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k4'>k4: </label><div class='col-sm-8'><input id='{{id}}_k4' class='form-control' type='text'{{#k4}} value='{{k4}}'{{/k4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k5'>k5: </label><div class='col-sm-8'><input id='{{id}}_k5' class='form-control' type='text'{{#k5}} value='{{k5}}'{{/k5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k6'>k6: </label><div class='col-sm-8'><input id='{{id}}_k6' class='form-control' type='text'{{#k6}} value='{{k6}}'{{/k6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kdroop'>kdroop: </label><div class='col-sm-8'><input id='{{id}}_kdroop' class='form-control' type='text'{{#kdroop}} value='{{kdroop}}'{{/kdroop}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t'>t: </label><div class='col-sm-8'><input id='{{id}}_t' class='form-control' type='text'{{#t}} value='{{t}}'{{/t}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tcd'>tcd: </label><div class='col-sm-8'><input id='{{id}}_tcd' class='form-control' type='text'{{#tcd}} value='{{tcd}}'{{/tcd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td'>td: </label><div class='col-sm-8'><input id='{{id}}_td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tmax'>tmax: </label><div class='col-sm-8'><input id='{{id}}_tmax' class='form-control' type='text'{{#tmax}} value='{{tmax}}'{{/tmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tmin'>tmin: </label><div class='col-sm-8'><input id='{{id}}_tmin' class='form-control' type='text'{{#tmin}} value='{{tmin}}'{{/tmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tr'>tr: </label><div class='col-sm-8'><input id='{{id}}_tr' class='form-control' type='text'{{#tr}} value='{{tr}}'{{/tr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_trate'>trate: </label><div class='col-sm-8'><input id='{{id}}_trate' class='form-control' type='text'{{#trate}} value='{{trate}}'{{/trate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tt'>tt: </label><div class='col-sm-8'><input id='{{id}}_tt' class='form-control' type='text'{{#tt}} value='{{tt}}'{{/tt}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovGASTWD" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_a").value; if ("" != temp) obj.a = temp;
                temp = document.getElementById (id + "_af1").value; if ("" != temp) obj.af1 = temp;
                temp = document.getElementById (id + "_af2").value; if ("" != temp) obj.af2 = temp;
                temp = document.getElementById (id + "_b").value; if ("" != temp) obj.b = temp;
                temp = document.getElementById (id + "_bf1").value; if ("" != temp) obj.bf1 = temp;
                temp = document.getElementById (id + "_bf2").value; if ("" != temp) obj.bf2 = temp;
                temp = document.getElementById (id + "_c").value; if ("" != temp) obj.c = temp;
                temp = document.getElementById (id + "_cf2").value; if ("" != temp) obj.cf2 = temp;
                temp = document.getElementById (id + "_ecr").value; if ("" != temp) obj.ecr = temp;
                temp = document.getElementById (id + "_etd").value; if ("" != temp) obj.etd = temp;
                temp = document.getElementById (id + "_k3").value; if ("" != temp) obj.k3 = temp;
                temp = document.getElementById (id + "_k4").value; if ("" != temp) obj.k4 = temp;
                temp = document.getElementById (id + "_k5").value; if ("" != temp) obj.k5 = temp;
                temp = document.getElementById (id + "_k6").value; if ("" != temp) obj.k6 = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_kdroop").value; if ("" != temp) obj.kdroop = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_t").value; if ("" != temp) obj.t = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_t5").value; if ("" != temp) obj.t5 = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_tcd").value; if ("" != temp) obj.tcd = temp;
                temp = document.getElementById (id + "_td").value; if ("" != temp) obj.td = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_tmax").value; if ("" != temp) obj.tmax = temp;
                temp = document.getElementById (id + "_tmin").value; if ("" != temp) obj.tmin = temp;
                temp = document.getElementById (id + "_tr").value; if ("" != temp) obj.tr = temp;
                temp = document.getElementById (id + "_trate").value; if ("" != temp) obj.trate = temp;
                temp = document.getElementById (id + "_tt").value; if ("" != temp) obj.tt = temp;

                return (obj);
            }
        }

        /**
         * Generic turbogas with acceleration and temperature controller.
         *
         */
        class GovGAST3 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovGAST3;
                if (null == bucket)
                   cim_data.GovGAST3 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovGAST3[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovGAST3";
                base.parse_element (/<cim:GovGAST3.bca>([\s\S]*?)<\/cim:GovGAST3.bca>/g, obj, "bca", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST3.bp>([\s\S]*?)<\/cim:GovGAST3.bp>/g, obj, "bp", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.dtc>([\s\S]*?)<\/cim:GovGAST3.dtc>/g, obj, "dtc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.ka>([\s\S]*?)<\/cim:GovGAST3.ka>/g, obj, "ka", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.kac>([\s\S]*?)<\/cim:GovGAST3.kac>/g, obj, "kac", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST3.kca>([\s\S]*?)<\/cim:GovGAST3.kca>/g, obj, "kca", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST3.ksi>([\s\S]*?)<\/cim:GovGAST3.ksi>/g, obj, "ksi", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST3.ky>([\s\S]*?)<\/cim:GovGAST3.ky>/g, obj, "ky", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST3.mnef>([\s\S]*?)<\/cim:GovGAST3.mnef>/g, obj, "mnef", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.mxef>([\s\S]*?)<\/cim:GovGAST3.mxef>/g, obj, "mxef", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.rcmn>([\s\S]*?)<\/cim:GovGAST3.rcmn>/g, obj, "rcmn", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.rcmx>([\s\S]*?)<\/cim:GovGAST3.rcmx>/g, obj, "rcmx", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.tac>([\s\S]*?)<\/cim:GovGAST3.tac>/g, obj, "tac", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.tc>([\s\S]*?)<\/cim:GovGAST3.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.td>([\s\S]*?)<\/cim:GovGAST3.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.tfen>([\s\S]*?)<\/cim:GovGAST3.tfen>/g, obj, "tfen", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.tg>([\s\S]*?)<\/cim:GovGAST3.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.tsi>([\s\S]*?)<\/cim:GovGAST3.tsi>/g, obj, "tsi", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.tt>([\s\S]*?)<\/cim:GovGAST3.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.ttc>([\s\S]*?)<\/cim:GovGAST3.ttc>/g, obj, "ttc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST3.ty>([\s\S]*?)<\/cim:GovGAST3.ty>/g, obj, "ty", base.to_string, sub, context);
                var bucket = context.parsed.GovGAST3;
                if (null == bucket)
                   context.parsed.GovGAST3 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovGAST3", "bca", "bca",  base.from_float, fields);
                base.export_element (obj, "GovGAST3", "bp", "bp",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "dtc", "dtc",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "kac", "kac",  base.from_float, fields);
                base.export_element (obj, "GovGAST3", "kca", "kca",  base.from_float, fields);
                base.export_element (obj, "GovGAST3", "ksi", "ksi",  base.from_float, fields);
                base.export_element (obj, "GovGAST3", "ky", "ky",  base.from_float, fields);
                base.export_element (obj, "GovGAST3", "mnef", "mnef",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "mxef", "mxef",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "rcmn", "rcmn",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "rcmx", "rcmx",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "tac", "tac",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "td", "td",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "tfen", "tfen",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "tg", "tg",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "tsi", "tsi",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "tt", "tt",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "ttc", "ttc",  base.from_string, fields);
                base.export_element (obj, "GovGAST3", "ty", "ty",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovGAST3_collapse" aria-expanded="true" aria-controls="GovGAST3_collapse" style="margin-left: 10px;">GovGAST3</a></legend>
                    <div id="GovGAST3_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#bca}}<div><b>bca</b>: {{bca}}</div>{{/bca}}
                    {{#bp}}<div><b>bp</b>: {{bp}}</div>{{/bp}}
                    {{#dtc}}<div><b>dtc</b>: {{dtc}}</div>{{/dtc}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kac}}<div><b>kac</b>: {{kac}}</div>{{/kac}}
                    {{#kca}}<div><b>kca</b>: {{kca}}</div>{{/kca}}
                    {{#ksi}}<div><b>ksi</b>: {{ksi}}</div>{{/ksi}}
                    {{#ky}}<div><b>ky</b>: {{ky}}</div>{{/ky}}
                    {{#mnef}}<div><b>mnef</b>: {{mnef}}</div>{{/mnef}}
                    {{#mxef}}<div><b>mxef</b>: {{mxef}}</div>{{/mxef}}
                    {{#rcmn}}<div><b>rcmn</b>: {{rcmn}}</div>{{/rcmn}}
                    {{#rcmx}}<div><b>rcmx</b>: {{rcmx}}</div>{{/rcmx}}
                    {{#tac}}<div><b>tac</b>: {{tac}}</div>{{/tac}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
                    {{#tfen}}<div><b>tfen</b>: {{tfen}}</div>{{/tfen}}
                    {{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
                    {{#tsi}}<div><b>tsi</b>: {{tsi}}</div>{{/tsi}}
                    {{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
                    {{#ttc}}<div><b>ttc</b>: {{ttc}}</div>{{/ttc}}
                    {{#ty}}<div><b>ty</b>: {{ty}}</div>{{/ty}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovGAST3_collapse" aria-expanded="true" aria-controls="{{id}}_GovGAST3_collapse" style="margin-left: 10px;">GovGAST3</a></legend>
                    <div id="{{id}}_GovGAST3_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bca'>bca: </label><div class='col-sm-8'><input id='{{id}}_bca' class='form-control' type='text'{{#bca}} value='{{bca}}'{{/bca}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bp'>bp: </label><div class='col-sm-8'><input id='{{id}}_bp' class='form-control' type='text'{{#bp}} value='{{bp}}'{{/bp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dtc'>dtc: </label><div class='col-sm-8'><input id='{{id}}_dtc' class='form-control' type='text'{{#dtc}} value='{{dtc}}'{{/dtc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kac'>kac: </label><div class='col-sm-8'><input id='{{id}}_kac' class='form-control' type='text'{{#kac}} value='{{kac}}'{{/kac}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kca'>kca: </label><div class='col-sm-8'><input id='{{id}}_kca' class='form-control' type='text'{{#kca}} value='{{kca}}'{{/kca}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ksi'>ksi: </label><div class='col-sm-8'><input id='{{id}}_ksi' class='form-control' type='text'{{#ksi}} value='{{ksi}}'{{/ksi}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ky'>ky: </label><div class='col-sm-8'><input id='{{id}}_ky' class='form-control' type='text'{{#ky}} value='{{ky}}'{{/ky}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mnef'>mnef: </label><div class='col-sm-8'><input id='{{id}}_mnef' class='form-control' type='text'{{#mnef}} value='{{mnef}}'{{/mnef}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mxef'>mxef: </label><div class='col-sm-8'><input id='{{id}}_mxef' class='form-control' type='text'{{#mxef}} value='{{mxef}}'{{/mxef}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rcmn'>rcmn: </label><div class='col-sm-8'><input id='{{id}}_rcmn' class='form-control' type='text'{{#rcmn}} value='{{rcmn}}'{{/rcmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rcmx'>rcmx: </label><div class='col-sm-8'><input id='{{id}}_rcmx' class='form-control' type='text'{{#rcmx}} value='{{rcmx}}'{{/rcmx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tac'>tac: </label><div class='col-sm-8'><input id='{{id}}_tac' class='form-control' type='text'{{#tac}} value='{{tac}}'{{/tac}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td'>td: </label><div class='col-sm-8'><input id='{{id}}_td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tfen'>tfen: </label><div class='col-sm-8'><input id='{{id}}_tfen' class='form-control' type='text'{{#tfen}} value='{{tfen}}'{{/tfen}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tg'>tg: </label><div class='col-sm-8'><input id='{{id}}_tg' class='form-control' type='text'{{#tg}} value='{{tg}}'{{/tg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tsi'>tsi: </label><div class='col-sm-8'><input id='{{id}}_tsi' class='form-control' type='text'{{#tsi}} value='{{tsi}}'{{/tsi}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tt'>tt: </label><div class='col-sm-8'><input id='{{id}}_tt' class='form-control' type='text'{{#tt}} value='{{tt}}'{{/tt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ttc'>ttc: </label><div class='col-sm-8'><input id='{{id}}_ttc' class='form-control' type='text'{{#ttc}} value='{{ttc}}'{{/ttc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ty'>ty: </label><div class='col-sm-8'><input id='{{id}}_ty' class='form-control' type='text'{{#ty}} value='{{ty}}'{{/ty}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovGAST3" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bca").value; if ("" != temp) obj.bca = temp;
                temp = document.getElementById (id + "_bp").value; if ("" != temp) obj.bp = temp;
                temp = document.getElementById (id + "_dtc").value; if ("" != temp) obj.dtc = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kac").value; if ("" != temp) obj.kac = temp;
                temp = document.getElementById (id + "_kca").value; if ("" != temp) obj.kca = temp;
                temp = document.getElementById (id + "_ksi").value; if ("" != temp) obj.ksi = temp;
                temp = document.getElementById (id + "_ky").value; if ("" != temp) obj.ky = temp;
                temp = document.getElementById (id + "_mnef").value; if ("" != temp) obj.mnef = temp;
                temp = document.getElementById (id + "_mxef").value; if ("" != temp) obj.mxef = temp;
                temp = document.getElementById (id + "_rcmn").value; if ("" != temp) obj.rcmn = temp;
                temp = document.getElementById (id + "_rcmx").value; if ("" != temp) obj.rcmx = temp;
                temp = document.getElementById (id + "_tac").value; if ("" != temp) obj.tac = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_td").value; if ("" != temp) obj.td = temp;
                temp = document.getElementById (id + "_tfen").value; if ("" != temp) obj.tfen = temp;
                temp = document.getElementById (id + "_tg").value; if ("" != temp) obj.tg = temp;
                temp = document.getElementById (id + "_tsi").value; if ("" != temp) obj.tsi = temp;
                temp = document.getElementById (id + "_tt").value; if ("" != temp) obj.tt = temp;
                temp = document.getElementById (id + "_ttc").value; if ("" != temp) obj.ttc = temp;
                temp = document.getElementById (id + "_ty").value; if ("" != temp) obj.ty = temp;

                return (obj);
            }
        }

        /**
         * Steam turbine governor with reheat time constants and modeling of the effects of fast valve closing to reduce mechanical power.
         *
         */
        class GovSteamFV2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovSteamFV2;
                if (null == bucket)
                   cim_data.GovSteamFV2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovSteamFV2[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamFV2";
                base.parse_element (/<cim:GovSteamFV2.dt>([\s\S]*?)<\/cim:GovSteamFV2.dt>/g, obj, "dt", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.k>([\s\S]*?)<\/cim:GovSteamFV2.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.mwbase>([\s\S]*?)<\/cim:GovSteamFV2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.r>([\s\S]*?)<\/cim:GovSteamFV2.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.t1>([\s\S]*?)<\/cim:GovSteamFV2.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.t3>([\s\S]*?)<\/cim:GovSteamFV2.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.ta>([\s\S]*?)<\/cim:GovSteamFV2.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.tb>([\s\S]*?)<\/cim:GovSteamFV2.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.tc>([\s\S]*?)<\/cim:GovSteamFV2.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.ti>([\s\S]*?)<\/cim:GovSteamFV2.ti>/g, obj, "ti", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.tt>([\s\S]*?)<\/cim:GovSteamFV2.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.vmax>([\s\S]*?)<\/cim:GovSteamFV2.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV2.vmin>([\s\S]*?)<\/cim:GovSteamFV2.vmin>/g, obj, "vmin", base.to_string, sub, context);
                var bucket = context.parsed.GovSteamFV2;
                if (null == bucket)
                   context.parsed.GovSteamFV2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamFV2", "dt", "dt",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "k", "k",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "r", "r",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "ti", "ti",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "tt", "tt",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "vmax", "vmax",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV2", "vmin", "vmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovSteamFV2_collapse" aria-expanded="true" aria-controls="GovSteamFV2_collapse" style="margin-left: 10px;">GovSteamFV2</a></legend>
                    <div id="GovSteamFV2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#dt}}<div><b>dt</b>: {{dt}}</div>{{/dt}}
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#ti}}<div><b>ti</b>: {{ti}}</div>{{/ti}}
                    {{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
                    {{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
                    {{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovSteamFV2_collapse" aria-expanded="true" aria-controls="{{id}}_GovSteamFV2_collapse" style="margin-left: 10px;">GovSteamFV2</a></legend>
                    <div id="{{id}}_GovSteamFV2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dt'>dt: </label><div class='col-sm-8'><input id='{{id}}_dt' class='form-control' type='text'{{#dt}} value='{{dt}}'{{/dt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti'>ti: </label><div class='col-sm-8'><input id='{{id}}_ti' class='form-control' type='text'{{#ti}} value='{{ti}}'{{/ti}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tt'>tt: </label><div class='col-sm-8'><input id='{{id}}_tt' class='form-control' type='text'{{#tt}} value='{{tt}}'{{/tt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmax'>vmax: </label><div class='col-sm-8'><input id='{{id}}_vmax' class='form-control' type='text'{{#vmax}} value='{{vmax}}'{{/vmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmin'>vmin: </label><div class='col-sm-8'><input id='{{id}}_vmin' class='form-control' type='text'{{#vmin}} value='{{vmin}}'{{/vmin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovSteamFV2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dt").value; if ("" != temp) obj.dt = temp;
                temp = document.getElementById (id + "_k").value; if ("" != temp) obj.k = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_ti").value; if ("" != temp) obj.ti = temp;
                temp = document.getElementById (id + "_tt").value; if ("" != temp) obj.tt = temp;
                temp = document.getElementById (id + "_vmax").value; if ("" != temp) obj.vmax = temp;
                temp = document.getElementById (id + "_vmin").value; if ("" != temp) obj.vmin = temp;

                return (obj);
            }
        }

        /**
         * Detailed hydro unit - Pelton model.
         *
         * This model can be used to represent the dynamic related to water tunnel and surge chamber.
         *
         */
        class GovHydroPelton extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydroPelton;
                if (null == bucket)
                   cim_data.GovHydroPelton = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydroPelton[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroPelton";
                base.parse_element (/<cim:GovHydroPelton.av0>([\s\S]*?)<\/cim:GovHydroPelton.av0>/g, obj, "av0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.av1>([\s\S]*?)<\/cim:GovHydroPelton.av1>/g, obj, "av1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.bp>([\s\S]*?)<\/cim:GovHydroPelton.bp>/g, obj, "bp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.db1>([\s\S]*?)<\/cim:GovHydroPelton.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.db2>([\s\S]*?)<\/cim:GovHydroPelton.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.h1>([\s\S]*?)<\/cim:GovHydroPelton.h1>/g, obj, "h1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.h2>([\s\S]*?)<\/cim:GovHydroPelton.h2>/g, obj, "h2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.hn>([\s\S]*?)<\/cim:GovHydroPelton.hn>/g, obj, "hn", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.kc>([\s\S]*?)<\/cim:GovHydroPelton.kc>/g, obj, "kc", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.kg>([\s\S]*?)<\/cim:GovHydroPelton.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.qc0>([\s\S]*?)<\/cim:GovHydroPelton.qc0>/g, obj, "qc0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.qn>([\s\S]*?)<\/cim:GovHydroPelton.qn>/g, obj, "qn", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.simplifiedPelton>([\s\S]*?)<\/cim:GovHydroPelton.simplifiedPelton>/g, obj, "simplifiedPelton", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroPelton.staticCompensating>([\s\S]*?)<\/cim:GovHydroPelton.staticCompensating>/g, obj, "staticCompensating", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroPelton.ta>([\s\S]*?)<\/cim:GovHydroPelton.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.ts>([\s\S]*?)<\/cim:GovHydroPelton.ts>/g, obj, "ts", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.tv>([\s\S]*?)<\/cim:GovHydroPelton.tv>/g, obj, "tv", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.twnc>([\s\S]*?)<\/cim:GovHydroPelton.twnc>/g, obj, "twnc", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.twng>([\s\S]*?)<\/cim:GovHydroPelton.twng>/g, obj, "twng", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.tx>([\s\S]*?)<\/cim:GovHydroPelton.tx>/g, obj, "tx", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.va>([\s\S]*?)<\/cim:GovHydroPelton.va>/g, obj, "va", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroPelton.valvmax>([\s\S]*?)<\/cim:GovHydroPelton.valvmax>/g, obj, "valvmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.valvmin>([\s\S]*?)<\/cim:GovHydroPelton.valvmin>/g, obj, "valvmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.vav>([\s\S]*?)<\/cim:GovHydroPelton.vav>/g, obj, "vav", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.vc>([\s\S]*?)<\/cim:GovHydroPelton.vc>/g, obj, "vc", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroPelton.vcv>([\s\S]*?)<\/cim:GovHydroPelton.vcv>/g, obj, "vcv", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroPelton.waterTunnelSurgeChamberSimulation>([\s\S]*?)<\/cim:GovHydroPelton.waterTunnelSurgeChamberSimulation>/g, obj, "waterTunnelSurgeChamberSimulation", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroPelton.zsfc>([\s\S]*?)<\/cim:GovHydroPelton.zsfc>/g, obj, "zsfc", base.to_string, sub, context);
                var bucket = context.parsed.GovHydroPelton;
                if (null == bucket)
                   context.parsed.GovHydroPelton = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroPelton", "av0", "av0",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "av1", "av1",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "bp", "bp",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "db1", "db1",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "db2", "db2",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "h1", "h1",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "h2", "h2",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "hn", "hn",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "kg", "kg",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "qc0", "qc0",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "qn", "qn",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "simplifiedPelton", "simplifiedPelton",  base.from_boolean, fields);
                base.export_element (obj, "GovHydroPelton", "staticCompensating", "staticCompensating",  base.from_boolean, fields);
                base.export_element (obj, "GovHydroPelton", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "ts", "ts",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "tv", "tv",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "twnc", "twnc",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "twng", "twng",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "tx", "tx",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "va", "va",  base.from_float, fields);
                base.export_element (obj, "GovHydroPelton", "valvmax", "valvmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "valvmin", "valvmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "vav", "vav",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "vc", "vc",  base.from_float, fields);
                base.export_element (obj, "GovHydroPelton", "vcv", "vcv",  base.from_string, fields);
                base.export_element (obj, "GovHydroPelton", "waterTunnelSurgeChamberSimulation", "waterTunnelSurgeChamberSimulation",  base.from_boolean, fields);
                base.export_element (obj, "GovHydroPelton", "zsfc", "zsfc",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydroPelton_collapse" aria-expanded="true" aria-controls="GovHydroPelton_collapse" style="margin-left: 10px;">GovHydroPelton</a></legend>
                    <div id="GovHydroPelton_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#av0}}<div><b>av0</b>: {{av0}}</div>{{/av0}}
                    {{#av1}}<div><b>av1</b>: {{av1}}</div>{{/av1}}
                    {{#bp}}<div><b>bp</b>: {{bp}}</div>{{/bp}}
                    {{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
                    {{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
                    {{#h1}}<div><b>h1</b>: {{h1}}</div>{{/h1}}
                    {{#h2}}<div><b>h2</b>: {{h2}}</div>{{/h2}}
                    {{#hn}}<div><b>hn</b>: {{hn}}</div>{{/hn}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
                    {{#qc0}}<div><b>qc0</b>: {{qc0}}</div>{{/qc0}}
                    {{#qn}}<div><b>qn</b>: {{qn}}</div>{{/qn}}
                    {{#simplifiedPelton}}<div><b>simplifiedPelton</b>: {{simplifiedPelton}}</div>{{/simplifiedPelton}}
                    {{#staticCompensating}}<div><b>staticCompensating</b>: {{staticCompensating}}</div>{{/staticCompensating}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#ts}}<div><b>ts</b>: {{ts}}</div>{{/ts}}
                    {{#tv}}<div><b>tv</b>: {{tv}}</div>{{/tv}}
                    {{#twnc}}<div><b>twnc</b>: {{twnc}}</div>{{/twnc}}
                    {{#twng}}<div><b>twng</b>: {{twng}}</div>{{/twng}}
                    {{#tx}}<div><b>tx</b>: {{tx}}</div>{{/tx}}
                    {{#va}}<div><b>va</b>: {{va}}</div>{{/va}}
                    {{#valvmax}}<div><b>valvmax</b>: {{valvmax}}</div>{{/valvmax}}
                    {{#valvmin}}<div><b>valvmin</b>: {{valvmin}}</div>{{/valvmin}}
                    {{#vav}}<div><b>vav</b>: {{vav}}</div>{{/vav}}
                    {{#vc}}<div><b>vc</b>: {{vc}}</div>{{/vc}}
                    {{#vcv}}<div><b>vcv</b>: {{vcv}}</div>{{/vcv}}
                    {{#waterTunnelSurgeChamberSimulation}}<div><b>waterTunnelSurgeChamberSimulation</b>: {{waterTunnelSurgeChamberSimulation}}</div>{{/waterTunnelSurgeChamberSimulation}}
                    {{#zsfc}}<div><b>zsfc</b>: {{zsfc}}</div>{{/zsfc}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydroPelton_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydroPelton_collapse" style="margin-left: 10px;">GovHydroPelton</a></legend>
                    <div id="{{id}}_GovHydroPelton_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_av0'>av0: </label><div class='col-sm-8'><input id='{{id}}_av0' class='form-control' type='text'{{#av0}} value='{{av0}}'{{/av0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_av1'>av1: </label><div class='col-sm-8'><input id='{{id}}_av1' class='form-control' type='text'{{#av1}} value='{{av1}}'{{/av1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bp'>bp: </label><div class='col-sm-8'><input id='{{id}}_bp' class='form-control' type='text'{{#bp}} value='{{bp}}'{{/bp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db1'>db1: </label><div class='col-sm-8'><input id='{{id}}_db1' class='form-control' type='text'{{#db1}} value='{{db1}}'{{/db1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db2'>db2: </label><div class='col-sm-8'><input id='{{id}}_db2' class='form-control' type='text'{{#db2}} value='{{db2}}'{{/db2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_h1'>h1: </label><div class='col-sm-8'><input id='{{id}}_h1' class='form-control' type='text'{{#h1}} value='{{h1}}'{{/h1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_h2'>h2: </label><div class='col-sm-8'><input id='{{id}}_h2' class='form-control' type='text'{{#h2}} value='{{h2}}'{{/h2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hn'>hn: </label><div class='col-sm-8'><input id='{{id}}_hn' class='form-control' type='text'{{#hn}} value='{{hn}}'{{/hn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kg'>kg: </label><div class='col-sm-8'><input id='{{id}}_kg' class='form-control' type='text'{{#kg}} value='{{kg}}'{{/kg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qc0'>qc0: </label><div class='col-sm-8'><input id='{{id}}_qc0' class='form-control' type='text'{{#qc0}} value='{{qc0}}'{{/qc0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qn'>qn: </label><div class='col-sm-8'><input id='{{id}}_qn' class='form-control' type='text'{{#qn}} value='{{qn}}'{{/qn}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_simplifiedPelton'>simplifiedPelton: </label><div class='col-sm-8'><input id='{{id}}_simplifiedPelton' class='form-check-input' type='checkbox'{{#simplifiedPelton}} checked{{/simplifiedPelton}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_staticCompensating'>staticCompensating: </label><div class='col-sm-8'><input id='{{id}}_staticCompensating' class='form-check-input' type='checkbox'{{#staticCompensating}} checked{{/staticCompensating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ts'>ts: </label><div class='col-sm-8'><input id='{{id}}_ts' class='form-control' type='text'{{#ts}} value='{{ts}}'{{/ts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tv'>tv: </label><div class='col-sm-8'><input id='{{id}}_tv' class='form-control' type='text'{{#tv}} value='{{tv}}'{{/tv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_twnc'>twnc: </label><div class='col-sm-8'><input id='{{id}}_twnc' class='form-control' type='text'{{#twnc}} value='{{twnc}}'{{/twnc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_twng'>twng: </label><div class='col-sm-8'><input id='{{id}}_twng' class='form-control' type='text'{{#twng}} value='{{twng}}'{{/twng}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tx'>tx: </label><div class='col-sm-8'><input id='{{id}}_tx' class='form-control' type='text'{{#tx}} value='{{tx}}'{{/tx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_va'>va: </label><div class='col-sm-8'><input id='{{id}}_va' class='form-control' type='text'{{#va}} value='{{va}}'{{/va}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_valvmax'>valvmax: </label><div class='col-sm-8'><input id='{{id}}_valvmax' class='form-control' type='text'{{#valvmax}} value='{{valvmax}}'{{/valvmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_valvmin'>valvmin: </label><div class='col-sm-8'><input id='{{id}}_valvmin' class='form-control' type='text'{{#valvmin}} value='{{valvmin}}'{{/valvmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vav'>vav: </label><div class='col-sm-8'><input id='{{id}}_vav' class='form-control' type='text'{{#vav}} value='{{vav}}'{{/vav}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vc'>vc: </label><div class='col-sm-8'><input id='{{id}}_vc' class='form-control' type='text'{{#vc}} value='{{vc}}'{{/vc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vcv'>vcv: </label><div class='col-sm-8'><input id='{{id}}_vcv' class='form-control' type='text'{{#vcv}} value='{{vcv}}'{{/vcv}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_waterTunnelSurgeChamberSimulation'>waterTunnelSurgeChamberSimulation: </label><div class='col-sm-8'><input id='{{id}}_waterTunnelSurgeChamberSimulation' class='form-check-input' type='checkbox'{{#waterTunnelSurgeChamberSimulation}} checked{{/waterTunnelSurgeChamberSimulation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_zsfc'>zsfc: </label><div class='col-sm-8'><input id='{{id}}_zsfc' class='form-control' type='text'{{#zsfc}} value='{{zsfc}}'{{/zsfc}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydroPelton" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_av0").value; if ("" != temp) obj.av0 = temp;
                temp = document.getElementById (id + "_av1").value; if ("" != temp) obj.av1 = temp;
                temp = document.getElementById (id + "_bp").value; if ("" != temp) obj.bp = temp;
                temp = document.getElementById (id + "_db1").value; if ("" != temp) obj.db1 = temp;
                temp = document.getElementById (id + "_db2").value; if ("" != temp) obj.db2 = temp;
                temp = document.getElementById (id + "_h1").value; if ("" != temp) obj.h1 = temp;
                temp = document.getElementById (id + "_h2").value; if ("" != temp) obj.h2 = temp;
                temp = document.getElementById (id + "_hn").value; if ("" != temp) obj.hn = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kg").value; if ("" != temp) obj.kg = temp;
                temp = document.getElementById (id + "_qc0").value; if ("" != temp) obj.qc0 = temp;
                temp = document.getElementById (id + "_qn").value; if ("" != temp) obj.qn = temp;
                temp = document.getElementById (id + "_simplifiedPelton").checked; if (temp) obj.simplifiedPelton = true;
                temp = document.getElementById (id + "_staticCompensating").checked; if (temp) obj.staticCompensating = true;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_ts").value; if ("" != temp) obj.ts = temp;
                temp = document.getElementById (id + "_tv").value; if ("" != temp) obj.tv = temp;
                temp = document.getElementById (id + "_twnc").value; if ("" != temp) obj.twnc = temp;
                temp = document.getElementById (id + "_twng").value; if ("" != temp) obj.twng = temp;
                temp = document.getElementById (id + "_tx").value; if ("" != temp) obj.tx = temp;
                temp = document.getElementById (id + "_va").value; if ("" != temp) obj.va = temp;
                temp = document.getElementById (id + "_valvmax").value; if ("" != temp) obj.valvmax = temp;
                temp = document.getElementById (id + "_valvmin").value; if ("" != temp) obj.valvmin = temp;
                temp = document.getElementById (id + "_vav").value; if ("" != temp) obj.vav = temp;
                temp = document.getElementById (id + "_vc").value; if ("" != temp) obj.vc = temp;
                temp = document.getElementById (id + "_vcv").value; if ("" != temp) obj.vcv = temp;
                temp = document.getElementById (id + "_waterTunnelSurgeChamberSimulation").checked; if (temp) obj.waterTunnelSurgeChamberSimulation = true;
                temp = document.getElementById (id + "_zsfc").value; if ("" != temp) obj.zsfc = temp;

                return (obj);
            }
        }

        /**
         * General model for any prime mover with a PID governor, used primarily for combustion turbine and combined cycle units.
         *
         * This model can be used to represent a variety of prime movers controlled by PID governors.  It is suitable, for example, for representation of
         *
         */
        class GovCT1 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovCT1;
                if (null == bucket)
                   cim_data.GovCT1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovCT1[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovCT1";
                base.parse_element (/<cim:GovCT1.aset>([\s\S]*?)<\/cim:GovCT1.aset>/g, obj, "aset", base.to_float, sub, context);
                base.parse_element (/<cim:GovCT1.db>([\s\S]*?)<\/cim:GovCT1.db>/g, obj, "db", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.dm>([\s\S]*?)<\/cim:GovCT1.dm>/g, obj, "dm", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.ka>([\s\S]*?)<\/cim:GovCT1.ka>/g, obj, "ka", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kdgov>([\s\S]*?)<\/cim:GovCT1.kdgov>/g, obj, "kdgov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kigov>([\s\S]*?)<\/cim:GovCT1.kigov>/g, obj, "kigov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kiload>([\s\S]*?)<\/cim:GovCT1.kiload>/g, obj, "kiload", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kimw>([\s\S]*?)<\/cim:GovCT1.kimw>/g, obj, "kimw", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kpgov>([\s\S]*?)<\/cim:GovCT1.kpgov>/g, obj, "kpgov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kpload>([\s\S]*?)<\/cim:GovCT1.kpload>/g, obj, "kpload", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.kturb>([\s\S]*?)<\/cim:GovCT1.kturb>/g, obj, "kturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.ldref>([\s\S]*?)<\/cim:GovCT1.ldref>/g, obj, "ldref", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.maxerr>([\s\S]*?)<\/cim:GovCT1.maxerr>/g, obj, "maxerr", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.minerr>([\s\S]*?)<\/cim:GovCT1.minerr>/g, obj, "minerr", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.mwbase>([\s\S]*?)<\/cim:GovCT1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.r>([\s\S]*?)<\/cim:GovCT1.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.rclose>([\s\S]*?)<\/cim:GovCT1.rclose>/g, obj, "rclose", base.to_float, sub, context);
                base.parse_element (/<cim:GovCT1.rdown>([\s\S]*?)<\/cim:GovCT1.rdown>/g, obj, "rdown", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.ropen>([\s\S]*?)<\/cim:GovCT1.ropen>/g, obj, "ropen", base.to_float, sub, context);
                base.parse_attribute (/<cim:GovCT1.rselect\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "rselect", sub, context);
                base.parse_element (/<cim:GovCT1.rup>([\s\S]*?)<\/cim:GovCT1.rup>/g, obj, "rup", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.ta>([\s\S]*?)<\/cim:GovCT1.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tact>([\s\S]*?)<\/cim:GovCT1.tact>/g, obj, "tact", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tb>([\s\S]*?)<\/cim:GovCT1.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tc>([\s\S]*?)<\/cim:GovCT1.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tdgov>([\s\S]*?)<\/cim:GovCT1.tdgov>/g, obj, "tdgov", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.teng>([\s\S]*?)<\/cim:GovCT1.teng>/g, obj, "teng", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tfload>([\s\S]*?)<\/cim:GovCT1.tfload>/g, obj, "tfload", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tpelec>([\s\S]*?)<\/cim:GovCT1.tpelec>/g, obj, "tpelec", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tsa>([\s\S]*?)<\/cim:GovCT1.tsa>/g, obj, "tsa", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.tsb>([\s\S]*?)<\/cim:GovCT1.tsb>/g, obj, "tsb", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.vmax>([\s\S]*?)<\/cim:GovCT1.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.vmin>([\s\S]*?)<\/cim:GovCT1.vmin>/g, obj, "vmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.wfnl>([\s\S]*?)<\/cim:GovCT1.wfnl>/g, obj, "wfnl", base.to_string, sub, context);
                base.parse_element (/<cim:GovCT1.wfspd>([\s\S]*?)<\/cim:GovCT1.wfspd>/g, obj, "wfspd", base.to_boolean, sub, context);
                var bucket = context.parsed.GovCT1;
                if (null == bucket)
                   context.parsed.GovCT1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovCT1", "aset", "aset",  base.from_float, fields);
                base.export_element (obj, "GovCT1", "db", "db",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "dm", "dm",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "kdgov", "kdgov",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "kigov", "kigov",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "kiload", "kiload",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "kimw", "kimw",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "kpgov", "kpgov",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "kpload", "kpload",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "kturb", "kturb",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "ldref", "ldref",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "maxerr", "maxerr",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "minerr", "minerr",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "r", "r",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "rclose", "rclose",  base.from_float, fields);
                base.export_element (obj, "GovCT1", "rdown", "rdown",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "ropen", "ropen",  base.from_float, fields);
                base.export_attribute (obj, "GovCT1", "rselect", "rselect", fields);
                base.export_element (obj, "GovCT1", "rup", "rup",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "tact", "tact",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "tdgov", "tdgov",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "teng", "teng",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "tfload", "tfload",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "tpelec", "tpelec",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "tsa", "tsa",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "tsb", "tsb",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "vmax", "vmax",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "vmin", "vmin",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "wfnl", "wfnl",  base.from_string, fields);
                base.export_element (obj, "GovCT1", "wfspd", "wfspd",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovCT1_collapse" aria-expanded="true" aria-controls="GovCT1_collapse" style="margin-left: 10px;">GovCT1</a></legend>
                    <div id="GovCT1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#aset}}<div><b>aset</b>: {{aset}}</div>{{/aset}}
                    {{#db}}<div><b>db</b>: {{db}}</div>{{/db}}
                    {{#dm}}<div><b>dm</b>: {{dm}}</div>{{/dm}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kdgov}}<div><b>kdgov</b>: {{kdgov}}</div>{{/kdgov}}
                    {{#kigov}}<div><b>kigov</b>: {{kigov}}</div>{{/kigov}}
                    {{#kiload}}<div><b>kiload</b>: {{kiload}}</div>{{/kiload}}
                    {{#kimw}}<div><b>kimw</b>: {{kimw}}</div>{{/kimw}}
                    {{#kpgov}}<div><b>kpgov</b>: {{kpgov}}</div>{{/kpgov}}
                    {{#kpload}}<div><b>kpload</b>: {{kpload}}</div>{{/kpload}}
                    {{#kturb}}<div><b>kturb</b>: {{kturb}}</div>{{/kturb}}
                    {{#ldref}}<div><b>ldref</b>: {{ldref}}</div>{{/ldref}}
                    {{#maxerr}}<div><b>maxerr</b>: {{maxerr}}</div>{{/maxerr}}
                    {{#minerr}}<div><b>minerr</b>: {{minerr}}</div>{{/minerr}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#rclose}}<div><b>rclose</b>: {{rclose}}</div>{{/rclose}}
                    {{#rdown}}<div><b>rdown</b>: {{rdown}}</div>{{/rdown}}
                    {{#ropen}}<div><b>ropen</b>: {{ropen}}</div>{{/ropen}}
                    {{#rselect}}<div><b>rselect</b>: {{rselect}}</div>{{/rselect}}
                    {{#rup}}<div><b>rup</b>: {{rup}}</div>{{/rup}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tact}}<div><b>tact</b>: {{tact}}</div>{{/tact}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#tdgov}}<div><b>tdgov</b>: {{tdgov}}</div>{{/tdgov}}
                    {{#teng}}<div><b>teng</b>: {{teng}}</div>{{/teng}}
                    {{#tfload}}<div><b>tfload</b>: {{tfload}}</div>{{/tfload}}
                    {{#tpelec}}<div><b>tpelec</b>: {{tpelec}}</div>{{/tpelec}}
                    {{#tsa}}<div><b>tsa</b>: {{tsa}}</div>{{/tsa}}
                    {{#tsb}}<div><b>tsb</b>: {{tsb}}</div>{{/tsb}}
                    {{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
                    {{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
                    {{#wfnl}}<div><b>wfnl</b>: {{wfnl}}</div>{{/wfnl}}
                    {{#wfspd}}<div><b>wfspd</b>: {{wfspd}}</div>{{/wfspd}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.DroopSignalFeedbackKind = []; if (!obj.rselect) obj.DroopSignalFeedbackKind.push ({ id: '', selected: true}); for (var property in DroopSignalFeedbackKind) obj.DroopSignalFeedbackKind.push ({ id: property, selected: obj.rselect && obj.rselect.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DroopSignalFeedbackKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovCT1_collapse" aria-expanded="true" aria-controls="{{id}}_GovCT1_collapse" style="margin-left: 10px;">GovCT1</a></legend>
                    <div id="{{id}}_GovCT1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aset'>aset: </label><div class='col-sm-8'><input id='{{id}}_aset' class='form-control' type='text'{{#aset}} value='{{aset}}'{{/aset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db'>db: </label><div class='col-sm-8'><input id='{{id}}_db' class='form-control' type='text'{{#db}} value='{{db}}'{{/db}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dm'>dm: </label><div class='col-sm-8'><input id='{{id}}_dm' class='form-control' type='text'{{#dm}} value='{{dm}}'{{/dm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kdgov'>kdgov: </label><div class='col-sm-8'><input id='{{id}}_kdgov' class='form-control' type='text'{{#kdgov}} value='{{kdgov}}'{{/kdgov}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kigov'>kigov: </label><div class='col-sm-8'><input id='{{id}}_kigov' class='form-control' type='text'{{#kigov}} value='{{kigov}}'{{/kigov}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kiload'>kiload: </label><div class='col-sm-8'><input id='{{id}}_kiload' class='form-control' type='text'{{#kiload}} value='{{kiload}}'{{/kiload}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kimw'>kimw: </label><div class='col-sm-8'><input id='{{id}}_kimw' class='form-control' type='text'{{#kimw}} value='{{kimw}}'{{/kimw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpgov'>kpgov: </label><div class='col-sm-8'><input id='{{id}}_kpgov' class='form-control' type='text'{{#kpgov}} value='{{kpgov}}'{{/kpgov}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpload'>kpload: </label><div class='col-sm-8'><input id='{{id}}_kpload' class='form-control' type='text'{{#kpload}} value='{{kpload}}'{{/kpload}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kturb'>kturb: </label><div class='col-sm-8'><input id='{{id}}_kturb' class='form-control' type='text'{{#kturb}} value='{{kturb}}'{{/kturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ldref'>ldref: </label><div class='col-sm-8'><input id='{{id}}_ldref' class='form-control' type='text'{{#ldref}} value='{{ldref}}'{{/ldref}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxerr'>maxerr: </label><div class='col-sm-8'><input id='{{id}}_maxerr' class='form-control' type='text'{{#maxerr}} value='{{maxerr}}'{{/maxerr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minerr'>minerr: </label><div class='col-sm-8'><input id='{{id}}_minerr' class='form-control' type='text'{{#minerr}} value='{{minerr}}'{{/minerr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rclose'>rclose: </label><div class='col-sm-8'><input id='{{id}}_rclose' class='form-control' type='text'{{#rclose}} value='{{rclose}}'{{/rclose}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rdown'>rdown: </label><div class='col-sm-8'><input id='{{id}}_rdown' class='form-control' type='text'{{#rdown}} value='{{rdown}}'{{/rdown}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ropen'>ropen: </label><div class='col-sm-8'><input id='{{id}}_ropen' class='form-control' type='text'{{#ropen}} value='{{ropen}}'{{/ropen}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rselect'>rselect: </label><div class='col-sm-8'><select id='{{id}}_rselect' class='form-control'>{{#DroopSignalFeedbackKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/DroopSignalFeedbackKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rup'>rup: </label><div class='col-sm-8'><input id='{{id}}_rup' class='form-control' type='text'{{#rup}} value='{{rup}}'{{/rup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tact'>tact: </label><div class='col-sm-8'><input id='{{id}}_tact' class='form-control' type='text'{{#tact}} value='{{tact}}'{{/tact}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tdgov'>tdgov: </label><div class='col-sm-8'><input id='{{id}}_tdgov' class='form-control' type='text'{{#tdgov}} value='{{tdgov}}'{{/tdgov}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_teng'>teng: </label><div class='col-sm-8'><input id='{{id}}_teng' class='form-control' type='text'{{#teng}} value='{{teng}}'{{/teng}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tfload'>tfload: </label><div class='col-sm-8'><input id='{{id}}_tfload' class='form-control' type='text'{{#tfload}} value='{{tfload}}'{{/tfload}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpelec'>tpelec: </label><div class='col-sm-8'><input id='{{id}}_tpelec' class='form-control' type='text'{{#tpelec}} value='{{tpelec}}'{{/tpelec}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tsa'>tsa: </label><div class='col-sm-8'><input id='{{id}}_tsa' class='form-control' type='text'{{#tsa}} value='{{tsa}}'{{/tsa}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tsb'>tsb: </label><div class='col-sm-8'><input id='{{id}}_tsb' class='form-control' type='text'{{#tsb}} value='{{tsb}}'{{/tsb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmax'>vmax: </label><div class='col-sm-8'><input id='{{id}}_vmax' class='form-control' type='text'{{#vmax}} value='{{vmax}}'{{/vmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmin'>vmin: </label><div class='col-sm-8'><input id='{{id}}_vmin' class='form-control' type='text'{{#vmin}} value='{{vmin}}'{{/vmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_wfnl'>wfnl: </label><div class='col-sm-8'><input id='{{id}}_wfnl' class='form-control' type='text'{{#wfnl}} value='{{wfnl}}'{{/wfnl}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_wfspd'>wfspd: </label><div class='col-sm-8'><input id='{{id}}_wfspd' class='form-check-input' type='checkbox'{{#wfspd}} checked{{/wfspd}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovCT1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_aset").value; if ("" != temp) obj.aset = temp;
                temp = document.getElementById (id + "_db").value; if ("" != temp) obj.db = temp;
                temp = document.getElementById (id + "_dm").value; if ("" != temp) obj.dm = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kdgov").value; if ("" != temp) obj.kdgov = temp;
                temp = document.getElementById (id + "_kigov").value; if ("" != temp) obj.kigov = temp;
                temp = document.getElementById (id + "_kiload").value; if ("" != temp) obj.kiload = temp;
                temp = document.getElementById (id + "_kimw").value; if ("" != temp) obj.kimw = temp;
                temp = document.getElementById (id + "_kpgov").value; if ("" != temp) obj.kpgov = temp;
                temp = document.getElementById (id + "_kpload").value; if ("" != temp) obj.kpload = temp;
                temp = document.getElementById (id + "_kturb").value; if ("" != temp) obj.kturb = temp;
                temp = document.getElementById (id + "_ldref").value; if ("" != temp) obj.ldref = temp;
                temp = document.getElementById (id + "_maxerr").value; if ("" != temp) obj.maxerr = temp;
                temp = document.getElementById (id + "_minerr").value; if ("" != temp) obj.minerr = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_rclose").value; if ("" != temp) obj.rclose = temp;
                temp = document.getElementById (id + "_rdown").value; if ("" != temp) obj.rdown = temp;
                temp = document.getElementById (id + "_ropen").value; if ("" != temp) obj.ropen = temp;
                temp = document.getElementById (id + "_rselect").value; if ("" != temp) { temp = DroopSignalFeedbackKind[temp]; if ("undefined" != typeof (temp)) obj.rselect = "#http://iec.ch/TC57/2013/CIM-schema-cim16#DroopSignalFeedbackKind." + temp; }
                temp = document.getElementById (id + "_rup").value; if ("" != temp) obj.rup = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tact").value; if ("" != temp) obj.tact = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_tdgov").value; if ("" != temp) obj.tdgov = temp;
                temp = document.getElementById (id + "_teng").value; if ("" != temp) obj.teng = temp;
                temp = document.getElementById (id + "_tfload").value; if ("" != temp) obj.tfload = temp;
                temp = document.getElementById (id + "_tpelec").value; if ("" != temp) obj.tpelec = temp;
                temp = document.getElementById (id + "_tsa").value; if ("" != temp) obj.tsa = temp;
                temp = document.getElementById (id + "_tsb").value; if ("" != temp) obj.tsb = temp;
                temp = document.getElementById (id + "_vmax").value; if ("" != temp) obj.vmax = temp;
                temp = document.getElementById (id + "_vmin").value; if ("" != temp) obj.vmin = temp;
                temp = document.getElementById (id + "_wfnl").value; if ("" != temp) obj.wfnl = temp;
                temp = document.getElementById (id + "_wfspd").checked; if (temp) obj.wfspd = true;

                return (obj);
            }
        }

        /**
         * Basic Hydro turbine governor model.
         *
         */
        class GovHydro1 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydro1;
                if (null == bucket)
                   cim_data.GovHydro1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydro1[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydro1";
                base.parse_element (/<cim:GovHydro1.at>([\s\S]*?)<\/cim:GovHydro1.at>/g, obj, "at", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.dturb>([\s\S]*?)<\/cim:GovHydro1.dturb>/g, obj, "dturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.gmax>([\s\S]*?)<\/cim:GovHydro1.gmax>/g, obj, "gmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.gmin>([\s\S]*?)<\/cim:GovHydro1.gmin>/g, obj, "gmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.hdam>([\s\S]*?)<\/cim:GovHydro1.hdam>/g, obj, "hdam", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.mwbase>([\s\S]*?)<\/cim:GovHydro1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.qnl>([\s\S]*?)<\/cim:GovHydro1.qnl>/g, obj, "qnl", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.rperm>([\s\S]*?)<\/cim:GovHydro1.rperm>/g, obj, "rperm", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.rtemp>([\s\S]*?)<\/cim:GovHydro1.rtemp>/g, obj, "rtemp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.tf>([\s\S]*?)<\/cim:GovHydro1.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.tg>([\s\S]*?)<\/cim:GovHydro1.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.tr>([\s\S]*?)<\/cim:GovHydro1.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.tw>([\s\S]*?)<\/cim:GovHydro1.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro1.velm>([\s\S]*?)<\/cim:GovHydro1.velm>/g, obj, "velm", base.to_float, sub, context);
                var bucket = context.parsed.GovHydro1;
                if (null == bucket)
                   context.parsed.GovHydro1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydro1", "at", "at",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "dturb", "dturb",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "gmax", "gmax",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "gmin", "gmin",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "hdam", "hdam",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "qnl", "qnl",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "rperm", "rperm",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "rtemp", "rtemp",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "tg", "tg",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "tr", "tr",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "tw", "tw",  base.from_string, fields);
                base.export_element (obj, "GovHydro1", "velm", "velm",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydro1_collapse" aria-expanded="true" aria-controls="GovHydro1_collapse" style="margin-left: 10px;">GovHydro1</a></legend>
                    <div id="GovHydro1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#at}}<div><b>at</b>: {{at}}</div>{{/at}}
                    {{#dturb}}<div><b>dturb</b>: {{dturb}}</div>{{/dturb}}
                    {{#gmax}}<div><b>gmax</b>: {{gmax}}</div>{{/gmax}}
                    {{#gmin}}<div><b>gmin</b>: {{gmin}}</div>{{/gmin}}
                    {{#hdam}}<div><b>hdam</b>: {{hdam}}</div>{{/hdam}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#qnl}}<div><b>qnl</b>: {{qnl}}</div>{{/qnl}}
                    {{#rperm}}<div><b>rperm</b>: {{rperm}}</div>{{/rperm}}
                    {{#rtemp}}<div><b>rtemp</b>: {{rtemp}}</div>{{/rtemp}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
                    {{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
                    {{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
                    {{#velm}}<div><b>velm</b>: {{velm}}</div>{{/velm}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydro1_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydro1_collapse" style="margin-left: 10px;">GovHydro1</a></legend>
                    <div id="{{id}}_GovHydro1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_at'>at: </label><div class='col-sm-8'><input id='{{id}}_at' class='form-control' type='text'{{#at}} value='{{at}}'{{/at}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dturb'>dturb: </label><div class='col-sm-8'><input id='{{id}}_dturb' class='form-control' type='text'{{#dturb}} value='{{dturb}}'{{/dturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmax'>gmax: </label><div class='col-sm-8'><input id='{{id}}_gmax' class='form-control' type='text'{{#gmax}} value='{{gmax}}'{{/gmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmin'>gmin: </label><div class='col-sm-8'><input id='{{id}}_gmin' class='form-control' type='text'{{#gmin}} value='{{gmin}}'{{/gmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hdam'>hdam: </label><div class='col-sm-8'><input id='{{id}}_hdam' class='form-control' type='text'{{#hdam}} value='{{hdam}}'{{/hdam}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qnl'>qnl: </label><div class='col-sm-8'><input id='{{id}}_qnl' class='form-control' type='text'{{#qnl}} value='{{qnl}}'{{/qnl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rperm'>rperm: </label><div class='col-sm-8'><input id='{{id}}_rperm' class='form-control' type='text'{{#rperm}} value='{{rperm}}'{{/rperm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rtemp'>rtemp: </label><div class='col-sm-8'><input id='{{id}}_rtemp' class='form-control' type='text'{{#rtemp}} value='{{rtemp}}'{{/rtemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tg'>tg: </label><div class='col-sm-8'><input id='{{id}}_tg' class='form-control' type='text'{{#tg}} value='{{tg}}'{{/tg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tr'>tr: </label><div class='col-sm-8'><input id='{{id}}_tr' class='form-control' type='text'{{#tr}} value='{{tr}}'{{/tr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw'>tw: </label><div class='col-sm-8'><input id='{{id}}_tw' class='form-control' type='text'{{#tw}} value='{{tw}}'{{/tw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velm'>velm: </label><div class='col-sm-8'><input id='{{id}}_velm' class='form-control' type='text'{{#velm}} value='{{velm}}'{{/velm}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydro1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_at").value; if ("" != temp) obj.at = temp;
                temp = document.getElementById (id + "_dturb").value; if ("" != temp) obj.dturb = temp;
                temp = document.getElementById (id + "_gmax").value; if ("" != temp) obj.gmax = temp;
                temp = document.getElementById (id + "_gmin").value; if ("" != temp) obj.gmin = temp;
                temp = document.getElementById (id + "_hdam").value; if ("" != temp) obj.hdam = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_qnl").value; if ("" != temp) obj.qnl = temp;
                temp = document.getElementById (id + "_rperm").value; if ("" != temp) obj.rperm = temp;
                temp = document.getElementById (id + "_rtemp").value; if ("" != temp) obj.rtemp = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_tg").value; if ("" != temp) obj.tg = temp;
                temp = document.getElementById (id + "_tr").value; if ("" != temp) obj.tr = temp;
                temp = document.getElementById (id + "_tw").value; if ("" != temp) obj.tw = temp;
                temp = document.getElementById (id + "_velm").value; if ("" != temp) obj.velm = temp;

                return (obj);
            }
        }

        /**
         * Simplified governor model.
         *
         */
        class GovSteam2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovSteam2;
                if (null == bucket)
                   cim_data.GovSteam2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovSteam2[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteam2";
                base.parse_element (/<cim:GovSteam2.dbf>([\s\S]*?)<\/cim:GovSteam2.dbf>/g, obj, "dbf", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam2.k>([\s\S]*?)<\/cim:GovSteam2.k>/g, obj, "k", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam2.mnef>([\s\S]*?)<\/cim:GovSteam2.mnef>/g, obj, "mnef", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam2.mxef>([\s\S]*?)<\/cim:GovSteam2.mxef>/g, obj, "mxef", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam2.pmax>([\s\S]*?)<\/cim:GovSteam2.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam2.pmin>([\s\S]*?)<\/cim:GovSteam2.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam2.t1>([\s\S]*?)<\/cim:GovSteam2.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam2.t2>([\s\S]*?)<\/cim:GovSteam2.t2>/g, obj, "t2", base.to_string, sub, context);
                var bucket = context.parsed.GovSteam2;
                if (null == bucket)
                   context.parsed.GovSteam2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteam2", "dbf", "dbf",  base.from_string, fields);
                base.export_element (obj, "GovSteam2", "k", "k",  base.from_float, fields);
                base.export_element (obj, "GovSteam2", "mnef", "mnef",  base.from_string, fields);
                base.export_element (obj, "GovSteam2", "mxef", "mxef",  base.from_string, fields);
                base.export_element (obj, "GovSteam2", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovSteam2", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovSteam2", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "GovSteam2", "t2", "t2",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovSteam2_collapse" aria-expanded="true" aria-controls="GovSteam2_collapse" style="margin-left: 10px;">GovSteam2</a></legend>
                    <div id="GovSteam2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#dbf}}<div><b>dbf</b>: {{dbf}}</div>{{/dbf}}
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#mnef}}<div><b>mnef</b>: {{mnef}}</div>{{/mnef}}
                    {{#mxef}}<div><b>mxef</b>: {{mxef}}</div>{{/mxef}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovSteam2_collapse" aria-expanded="true" aria-controls="{{id}}_GovSteam2_collapse" style="margin-left: 10px;">GovSteam2</a></legend>
                    <div id="{{id}}_GovSteam2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dbf'>dbf: </label><div class='col-sm-8'><input id='{{id}}_dbf' class='form-control' type='text'{{#dbf}} value='{{dbf}}'{{/dbf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mnef'>mnef: </label><div class='col-sm-8'><input id='{{id}}_mnef' class='form-control' type='text'{{#mnef}} value='{{mnef}}'{{/mnef}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mxef'>mxef: </label><div class='col-sm-8'><input id='{{id}}_mxef' class='form-control' type='text'{{#mxef}} value='{{mxef}}'{{/mxef}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovSteam2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dbf").value; if ("" != temp) obj.dbf = temp;
                temp = document.getElementById (id + "_k").value; if ("" != temp) obj.k = temp;
                temp = document.getElementById (id + "_mnef").value; if ("" != temp) obj.mnef = temp;
                temp = document.getElementById (id + "_mxef").value; if ("" != temp) obj.mxef = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;

                return (obj);
            }
        }

        /**
         * Double derivative hydro governor and turbine.
         *
         */
        class GovHydroDD extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydroDD;
                if (null == bucket)
                   cim_data.GovHydroDD = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydroDD[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroDD";
                base.parse_element (/<cim:GovHydroDD.aturb>([\s\S]*?)<\/cim:GovHydroDD.aturb>/g, obj, "aturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.bturb>([\s\S]*?)<\/cim:GovHydroDD.bturb>/g, obj, "bturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.db1>([\s\S]*?)<\/cim:GovHydroDD.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.db2>([\s\S]*?)<\/cim:GovHydroDD.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.eps>([\s\S]*?)<\/cim:GovHydroDD.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gmax>([\s\S]*?)<\/cim:GovHydroDD.gmax>/g, obj, "gmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gmin>([\s\S]*?)<\/cim:GovHydroDD.gmin>/g, obj, "gmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gv1>([\s\S]*?)<\/cim:GovHydroDD.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gv2>([\s\S]*?)<\/cim:GovHydroDD.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gv3>([\s\S]*?)<\/cim:GovHydroDD.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gv4>([\s\S]*?)<\/cim:GovHydroDD.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gv5>([\s\S]*?)<\/cim:GovHydroDD.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.gv6>([\s\S]*?)<\/cim:GovHydroDD.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.inputSignal>([\s\S]*?)<\/cim:GovHydroDD.inputSignal>/g, obj, "inputSignal", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroDD.k1>([\s\S]*?)<\/cim:GovHydroDD.k1>/g, obj, "k1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.k2>([\s\S]*?)<\/cim:GovHydroDD.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.kg>([\s\S]*?)<\/cim:GovHydroDD.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.ki>([\s\S]*?)<\/cim:GovHydroDD.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.mwbase>([\s\S]*?)<\/cim:GovHydroDD.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pgv1>([\s\S]*?)<\/cim:GovHydroDD.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pgv2>([\s\S]*?)<\/cim:GovHydroDD.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pgv3>([\s\S]*?)<\/cim:GovHydroDD.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pgv4>([\s\S]*?)<\/cim:GovHydroDD.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pgv5>([\s\S]*?)<\/cim:GovHydroDD.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pgv6>([\s\S]*?)<\/cim:GovHydroDD.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pmax>([\s\S]*?)<\/cim:GovHydroDD.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.pmin>([\s\S]*?)<\/cim:GovHydroDD.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.r>([\s\S]*?)<\/cim:GovHydroDD.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.td>([\s\S]*?)<\/cim:GovHydroDD.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.tf>([\s\S]*?)<\/cim:GovHydroDD.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.tp>([\s\S]*?)<\/cim:GovHydroDD.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.tt>([\s\S]*?)<\/cim:GovHydroDD.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.tturb>([\s\S]*?)<\/cim:GovHydroDD.tturb>/g, obj, "tturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroDD.velcl>([\s\S]*?)<\/cim:GovHydroDD.velcl>/g, obj, "velcl", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroDD.velop>([\s\S]*?)<\/cim:GovHydroDD.velop>/g, obj, "velop", base.to_float, sub, context);
                var bucket = context.parsed.GovHydroDD;
                if (null == bucket)
                   context.parsed.GovHydroDD = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroDD", "aturb", "aturb",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "bturb", "bturb",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "db1", "db1",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "db2", "db2",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "eps", "eps",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gmax", "gmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gmin", "gmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gv1", "gv1",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gv2", "gv2",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gv3", "gv3",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gv4", "gv4",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gv5", "gv5",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "gv6", "gv6",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "inputSignal", "inputSignal",  base.from_boolean, fields);
                base.export_element (obj, "GovHydroDD", "k1", "k1",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "k2", "k2",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "kg", "kg",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pgv1", "pgv1",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pgv2", "pgv2",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pgv3", "pgv3",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pgv4", "pgv4",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pgv5", "pgv5",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pgv6", "pgv6",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "r", "r",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "td", "td",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "tp", "tp",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "tt", "tt",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "tturb", "tturb",  base.from_string, fields);
                base.export_element (obj, "GovHydroDD", "velcl", "velcl",  base.from_float, fields);
                base.export_element (obj, "GovHydroDD", "velop", "velop",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydroDD_collapse" aria-expanded="true" aria-controls="GovHydroDD_collapse" style="margin-left: 10px;">GovHydroDD</a></legend>
                    <div id="GovHydroDD_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#aturb}}<div><b>aturb</b>: {{aturb}}</div>{{/aturb}}
                    {{#bturb}}<div><b>bturb</b>: {{bturb}}</div>{{/bturb}}
                    {{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
                    {{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
                    {{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
                    {{#gmax}}<div><b>gmax</b>: {{gmax}}</div>{{/gmax}}
                    {{#gmin}}<div><b>gmin</b>: {{gmin}}</div>{{/gmin}}
                    {{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
                    {{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
                    {{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
                    {{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
                    {{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
                    {{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
                    {{#inputSignal}}<div><b>inputSignal</b>: {{inputSignal}}</div>{{/inputSignal}}
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
                    {{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
                    {{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
                    {{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
                    {{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
                    {{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
                    {{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
                    {{#tturb}}<div><b>tturb</b>: {{tturb}}</div>{{/tturb}}
                    {{#velcl}}<div><b>velcl</b>: {{velcl}}</div>{{/velcl}}
                    {{#velop}}<div><b>velop</b>: {{velop}}</div>{{/velop}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydroDD_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydroDD_collapse" style="margin-left: 10px;">GovHydroDD</a></legend>
                    <div id="{{id}}_GovHydroDD_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aturb'>aturb: </label><div class='col-sm-8'><input id='{{id}}_aturb' class='form-control' type='text'{{#aturb}} value='{{aturb}}'{{/aturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bturb'>bturb: </label><div class='col-sm-8'><input id='{{id}}_bturb' class='form-control' type='text'{{#bturb}} value='{{bturb}}'{{/bturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db1'>db1: </label><div class='col-sm-8'><input id='{{id}}_db1' class='form-control' type='text'{{#db1}} value='{{db1}}'{{/db1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db2'>db2: </label><div class='col-sm-8'><input id='{{id}}_db2' class='form-control' type='text'{{#db2}} value='{{db2}}'{{/db2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eps'>eps: </label><div class='col-sm-8'><input id='{{id}}_eps' class='form-control' type='text'{{#eps}} value='{{eps}}'{{/eps}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmax'>gmax: </label><div class='col-sm-8'><input id='{{id}}_gmax' class='form-control' type='text'{{#gmax}} value='{{gmax}}'{{/gmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmin'>gmin: </label><div class='col-sm-8'><input id='{{id}}_gmin' class='form-control' type='text'{{#gmin}} value='{{gmin}}'{{/gmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv1'>gv1: </label><div class='col-sm-8'><input id='{{id}}_gv1' class='form-control' type='text'{{#gv1}} value='{{gv1}}'{{/gv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv2'>gv2: </label><div class='col-sm-8'><input id='{{id}}_gv2' class='form-control' type='text'{{#gv2}} value='{{gv2}}'{{/gv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv3'>gv3: </label><div class='col-sm-8'><input id='{{id}}_gv3' class='form-control' type='text'{{#gv3}} value='{{gv3}}'{{/gv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv4'>gv4: </label><div class='col-sm-8'><input id='{{id}}_gv4' class='form-control' type='text'{{#gv4}} value='{{gv4}}'{{/gv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv5'>gv5: </label><div class='col-sm-8'><input id='{{id}}_gv5' class='form-control' type='text'{{#gv5}} value='{{gv5}}'{{/gv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv6'>gv6: </label><div class='col-sm-8'><input id='{{id}}_gv6' class='form-control' type='text'{{#gv6}} value='{{gv6}}'{{/gv6}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_inputSignal'>inputSignal: </label><div class='col-sm-8'><input id='{{id}}_inputSignal' class='form-check-input' type='checkbox'{{#inputSignal}} checked{{/inputSignal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kg'>kg: </label><div class='col-sm-8'><input id='{{id}}_kg' class='form-control' type='text'{{#kg}} value='{{kg}}'{{/kg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv1'>pgv1: </label><div class='col-sm-8'><input id='{{id}}_pgv1' class='form-control' type='text'{{#pgv1}} value='{{pgv1}}'{{/pgv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv2'>pgv2: </label><div class='col-sm-8'><input id='{{id}}_pgv2' class='form-control' type='text'{{#pgv2}} value='{{pgv2}}'{{/pgv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv3'>pgv3: </label><div class='col-sm-8'><input id='{{id}}_pgv3' class='form-control' type='text'{{#pgv3}} value='{{pgv3}}'{{/pgv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv4'>pgv4: </label><div class='col-sm-8'><input id='{{id}}_pgv4' class='form-control' type='text'{{#pgv4}} value='{{pgv4}}'{{/pgv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv5'>pgv5: </label><div class='col-sm-8'><input id='{{id}}_pgv5' class='form-control' type='text'{{#pgv5}} value='{{pgv5}}'{{/pgv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv6'>pgv6: </label><div class='col-sm-8'><input id='{{id}}_pgv6' class='form-control' type='text'{{#pgv6}} value='{{pgv6}}'{{/pgv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td'>td: </label><div class='col-sm-8'><input id='{{id}}_td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tt'>tt: </label><div class='col-sm-8'><input id='{{id}}_tt' class='form-control' type='text'{{#tt}} value='{{tt}}'{{/tt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tturb'>tturb: </label><div class='col-sm-8'><input id='{{id}}_tturb' class='form-control' type='text'{{#tturb}} value='{{tturb}}'{{/tturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velcl'>velcl: </label><div class='col-sm-8'><input id='{{id}}_velcl' class='form-control' type='text'{{#velcl}} value='{{velcl}}'{{/velcl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velop'>velop: </label><div class='col-sm-8'><input id='{{id}}_velop' class='form-control' type='text'{{#velop}} value='{{velop}}'{{/velop}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydroDD" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_aturb").value; if ("" != temp) obj.aturb = temp;
                temp = document.getElementById (id + "_bturb").value; if ("" != temp) obj.bturb = temp;
                temp = document.getElementById (id + "_db1").value; if ("" != temp) obj.db1 = temp;
                temp = document.getElementById (id + "_db2").value; if ("" != temp) obj.db2 = temp;
                temp = document.getElementById (id + "_eps").value; if ("" != temp) obj.eps = temp;
                temp = document.getElementById (id + "_gmax").value; if ("" != temp) obj.gmax = temp;
                temp = document.getElementById (id + "_gmin").value; if ("" != temp) obj.gmin = temp;
                temp = document.getElementById (id + "_gv1").value; if ("" != temp) obj.gv1 = temp;
                temp = document.getElementById (id + "_gv2").value; if ("" != temp) obj.gv2 = temp;
                temp = document.getElementById (id + "_gv3").value; if ("" != temp) obj.gv3 = temp;
                temp = document.getElementById (id + "_gv4").value; if ("" != temp) obj.gv4 = temp;
                temp = document.getElementById (id + "_gv5").value; if ("" != temp) obj.gv5 = temp;
                temp = document.getElementById (id + "_gv6").value; if ("" != temp) obj.gv6 = temp;
                temp = document.getElementById (id + "_inputSignal").checked; if (temp) obj.inputSignal = true;
                temp = document.getElementById (id + "_k1").value; if ("" != temp) obj.k1 = temp;
                temp = document.getElementById (id + "_k2").value; if ("" != temp) obj.k2 = temp;
                temp = document.getElementById (id + "_kg").value; if ("" != temp) obj.kg = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pgv1").value; if ("" != temp) obj.pgv1 = temp;
                temp = document.getElementById (id + "_pgv2").value; if ("" != temp) obj.pgv2 = temp;
                temp = document.getElementById (id + "_pgv3").value; if ("" != temp) obj.pgv3 = temp;
                temp = document.getElementById (id + "_pgv4").value; if ("" != temp) obj.pgv4 = temp;
                temp = document.getElementById (id + "_pgv5").value; if ("" != temp) obj.pgv5 = temp;
                temp = document.getElementById (id + "_pgv6").value; if ("" != temp) obj.pgv6 = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_td").value; if ("" != temp) obj.td = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_tp").value; if ("" != temp) obj.tp = temp;
                temp = document.getElementById (id + "_tt").value; if ("" != temp) obj.tt = temp;
                temp = document.getElementById (id + "_tturb").value; if ("" != temp) obj.tturb = temp;
                temp = document.getElementById (id + "_velcl").value; if ("" != temp) obj.velcl = temp;
                temp = document.getElementById (id + "_velop").value; if ("" != temp) obj.velop = temp;

                return (obj);
            }
        }

        /**
         * IEEE Simplified Hydro Governor-Turbine Model.
         *
         * Used for Mechanical-Hydraulic and Electro-Hydraulic turbine governors, with our without steam feedback. Typical values given are for Mechanical-Hydraulic.
         *
         */
        class GovHydroIEEE0 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydroIEEE0;
                if (null == bucket)
                   cim_data.GovHydroIEEE0 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydroIEEE0[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroIEEE0";
                base.parse_element (/<cim:GovHydroIEEE0.k>([\s\S]*?)<\/cim:GovHydroIEEE0.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.mwbase>([\s\S]*?)<\/cim:GovHydroIEEE0.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.pmax>([\s\S]*?)<\/cim:GovHydroIEEE0.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.pmin>([\s\S]*?)<\/cim:GovHydroIEEE0.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.t1>([\s\S]*?)<\/cim:GovHydroIEEE0.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.t2>([\s\S]*?)<\/cim:GovHydroIEEE0.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.t3>([\s\S]*?)<\/cim:GovHydroIEEE0.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroIEEE0.t4>([\s\S]*?)<\/cim:GovHydroIEEE0.t4>/g, obj, "t4", base.to_string, sub, context);
                var bucket = context.parsed.GovHydroIEEE0;
                if (null == bucket)
                   context.parsed.GovHydroIEEE0 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroIEEE0", "k", "k",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "GovHydroIEEE0", "t4", "t4",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydroIEEE0_collapse" aria-expanded="true" aria-controls="GovHydroIEEE0_collapse" style="margin-left: 10px;">GovHydroIEEE0</a></legend>
                    <div id="GovHydroIEEE0_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydroIEEE0_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydroIEEE0_collapse" style="margin-left: 10px;">GovHydroIEEE0</a></legend>
                    <div id="{{id}}_GovHydroIEEE0_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydroIEEE0" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_k").value; if ("" != temp) obj.k = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;

                return (obj);
            }
        }

        /**
         * A simplified steam turbine governor model.
         *
         */
        class GovSteam0 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovSteam0;
                if (null == bucket)
                   cim_data.GovSteam0 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovSteam0[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteam0";
                base.parse_element (/<cim:GovSteam0.dt>([\s\S]*?)<\/cim:GovSteam0.dt>/g, obj, "dt", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.mwbase>([\s\S]*?)<\/cim:GovSteam0.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.r>([\s\S]*?)<\/cim:GovSteam0.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.t1>([\s\S]*?)<\/cim:GovSteam0.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.t2>([\s\S]*?)<\/cim:GovSteam0.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.t3>([\s\S]*?)<\/cim:GovSteam0.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.vmax>([\s\S]*?)<\/cim:GovSteam0.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam0.vmin>([\s\S]*?)<\/cim:GovSteam0.vmin>/g, obj, "vmin", base.to_string, sub, context);
                var bucket = context.parsed.GovSteam0;
                if (null == bucket)
                   context.parsed.GovSteam0 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteam0", "dt", "dt",  base.from_string, fields);
                base.export_element (obj, "GovSteam0", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovSteam0", "r", "r",  base.from_string, fields);
                base.export_element (obj, "GovSteam0", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "GovSteam0", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "GovSteam0", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "GovSteam0", "vmax", "vmax",  base.from_string, fields);
                base.export_element (obj, "GovSteam0", "vmin", "vmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovSteam0_collapse" aria-expanded="true" aria-controls="GovSteam0_collapse" style="margin-left: 10px;">GovSteam0</a></legend>
                    <div id="GovSteam0_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#dt}}<div><b>dt</b>: {{dt}}</div>{{/dt}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
                    {{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovSteam0_collapse" aria-expanded="true" aria-controls="{{id}}_GovSteam0_collapse" style="margin-left: 10px;">GovSteam0</a></legend>
                    <div id="{{id}}_GovSteam0_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dt'>dt: </label><div class='col-sm-8'><input id='{{id}}_dt' class='form-control' type='text'{{#dt}} value='{{dt}}'{{/dt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmax'>vmax: </label><div class='col-sm-8'><input id='{{id}}_vmax' class='form-control' type='text'{{#vmax}} value='{{vmax}}'{{/vmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmin'>vmin: </label><div class='col-sm-8'><input id='{{id}}_vmin' class='form-control' type='text'{{#vmin}} value='{{vmin}}'{{/vmin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovSteam0" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dt").value; if ("" != temp) obj.dt = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_vmax").value; if ("" != temp) obj.vmax = temp;
                temp = document.getElementById (id + "_vmin").value; if ("" != temp) obj.vmin = temp;

                return (obj);
            }
        }

        /**
         * Simplified Steam turbine governor model.
         *
         */
        class GovSteamSGO extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovSteamSGO;
                if (null == bucket)
                   cim_data.GovSteamSGO = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovSteamSGO[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamSGO";
                base.parse_element (/<cim:GovSteamSGO.k1>([\s\S]*?)<\/cim:GovSteamSGO.k1>/g, obj, "k1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.k2>([\s\S]*?)<\/cim:GovSteamSGO.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.k3>([\s\S]*?)<\/cim:GovSteamSGO.k3>/g, obj, "k3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.mwbase>([\s\S]*?)<\/cim:GovSteamSGO.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.pmax>([\s\S]*?)<\/cim:GovSteamSGO.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.pmin>([\s\S]*?)<\/cim:GovSteamSGO.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.t1>([\s\S]*?)<\/cim:GovSteamSGO.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.t2>([\s\S]*?)<\/cim:GovSteamSGO.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.t3>([\s\S]*?)<\/cim:GovSteamSGO.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.t4>([\s\S]*?)<\/cim:GovSteamSGO.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.t5>([\s\S]*?)<\/cim:GovSteamSGO.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamSGO.t6>([\s\S]*?)<\/cim:GovSteamSGO.t6>/g, obj, "t6", base.to_string, sub, context);
                var bucket = context.parsed.GovSteamSGO;
                if (null == bucket)
                   context.parsed.GovSteamSGO = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamSGO", "k1", "k1",  base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "k2", "k2",  base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "k3", "k3",  base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "GovSteamSGO", "t6", "t6",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovSteamSGO_collapse" aria-expanded="true" aria-controls="GovSteamSGO_collapse" style="margin-left: 10px;">GovSteamSGO</a></legend>
                    <div id="GovSteamSGO_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovSteamSGO_collapse" aria-expanded="true" aria-controls="{{id}}_GovSteamSGO_collapse" style="margin-left: 10px;">GovSteamSGO</a></legend>
                    <div id="{{id}}_GovSteamSGO_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k3'>k3: </label><div class='col-sm-8'><input id='{{id}}_k3' class='form-control' type='text'{{#k3}} value='{{k3}}'{{/k3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovSteamSGO" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_k1").value; if ("" != temp) obj.k1 = temp;
                temp = document.getElementById (id + "_k2").value; if ("" != temp) obj.k2 = temp;
                temp = document.getElementById (id + "_k3").value; if ("" != temp) obj.k3 = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_t5").value; if ("" != temp) obj.t5 = temp;
                temp = document.getElementById (id + "_t6").value; if ("" != temp) obj.t6 = temp;

                return (obj);
            }
        }

        /**
         * Fourth order lead-lag governor and hydro turbine.
         *
         */
        class GovHydroR extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydroR;
                if (null == bucket)
                   cim_data.GovHydroR = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydroR[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroR";
                base.parse_element (/<cim:GovHydroR.at>([\s\S]*?)<\/cim:GovHydroR.at>/g, obj, "at", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.db1>([\s\S]*?)<\/cim:GovHydroR.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.db2>([\s\S]*?)<\/cim:GovHydroR.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.dturb>([\s\S]*?)<\/cim:GovHydroR.dturb>/g, obj, "dturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.eps>([\s\S]*?)<\/cim:GovHydroR.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gmax>([\s\S]*?)<\/cim:GovHydroR.gmax>/g, obj, "gmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gmin>([\s\S]*?)<\/cim:GovHydroR.gmin>/g, obj, "gmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gv1>([\s\S]*?)<\/cim:GovHydroR.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gv2>([\s\S]*?)<\/cim:GovHydroR.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gv3>([\s\S]*?)<\/cim:GovHydroR.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gv4>([\s\S]*?)<\/cim:GovHydroR.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gv5>([\s\S]*?)<\/cim:GovHydroR.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.gv6>([\s\S]*?)<\/cim:GovHydroR.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.h0>([\s\S]*?)<\/cim:GovHydroR.h0>/g, obj, "h0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.inputSignal>([\s\S]*?)<\/cim:GovHydroR.inputSignal>/g, obj, "inputSignal", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroR.kg>([\s\S]*?)<\/cim:GovHydroR.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.ki>([\s\S]*?)<\/cim:GovHydroR.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.mwbase>([\s\S]*?)<\/cim:GovHydroR.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pgv1>([\s\S]*?)<\/cim:GovHydroR.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pgv2>([\s\S]*?)<\/cim:GovHydroR.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pgv3>([\s\S]*?)<\/cim:GovHydroR.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pgv4>([\s\S]*?)<\/cim:GovHydroR.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pgv5>([\s\S]*?)<\/cim:GovHydroR.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pgv6>([\s\S]*?)<\/cim:GovHydroR.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pmax>([\s\S]*?)<\/cim:GovHydroR.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.pmin>([\s\S]*?)<\/cim:GovHydroR.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.qnl>([\s\S]*?)<\/cim:GovHydroR.qnl>/g, obj, "qnl", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.r>([\s\S]*?)<\/cim:GovHydroR.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t1>([\s\S]*?)<\/cim:GovHydroR.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t2>([\s\S]*?)<\/cim:GovHydroR.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t3>([\s\S]*?)<\/cim:GovHydroR.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t4>([\s\S]*?)<\/cim:GovHydroR.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t5>([\s\S]*?)<\/cim:GovHydroR.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t6>([\s\S]*?)<\/cim:GovHydroR.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t7>([\s\S]*?)<\/cim:GovHydroR.t7>/g, obj, "t7", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.t8>([\s\S]*?)<\/cim:GovHydroR.t8>/g, obj, "t8", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.td>([\s\S]*?)<\/cim:GovHydroR.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.tp>([\s\S]*?)<\/cim:GovHydroR.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.tt>([\s\S]*?)<\/cim:GovHydroR.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.tw>([\s\S]*?)<\/cim:GovHydroR.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroR.velcl>([\s\S]*?)<\/cim:GovHydroR.velcl>/g, obj, "velcl", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroR.velop>([\s\S]*?)<\/cim:GovHydroR.velop>/g, obj, "velop", base.to_float, sub, context);
                var bucket = context.parsed.GovHydroR;
                if (null == bucket)
                   context.parsed.GovHydroR = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroR", "at", "at",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "db1", "db1",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "db2", "db2",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "dturb", "dturb",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "eps", "eps",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gmax", "gmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gmin", "gmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gv1", "gv1",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gv2", "gv2",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gv3", "gv3",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gv4", "gv4",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gv5", "gv5",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "gv6", "gv6",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "h0", "h0",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "inputSignal", "inputSignal",  base.from_boolean, fields);
                base.export_element (obj, "GovHydroR", "kg", "kg",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pgv1", "pgv1",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pgv2", "pgv2",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pgv3", "pgv3",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pgv4", "pgv4",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pgv5", "pgv5",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pgv6", "pgv6",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "qnl", "qnl",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "r", "r",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t7", "t7",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "t8", "t8",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "td", "td",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "tp", "tp",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "tt", "tt",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "tw", "tw",  base.from_string, fields);
                base.export_element (obj, "GovHydroR", "velcl", "velcl",  base.from_float, fields);
                base.export_element (obj, "GovHydroR", "velop", "velop",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydroR_collapse" aria-expanded="true" aria-controls="GovHydroR_collapse" style="margin-left: 10px;">GovHydroR</a></legend>
                    <div id="GovHydroR_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#at}}<div><b>at</b>: {{at}}</div>{{/at}}
                    {{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
                    {{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
                    {{#dturb}}<div><b>dturb</b>: {{dturb}}</div>{{/dturb}}
                    {{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
                    {{#gmax}}<div><b>gmax</b>: {{gmax}}</div>{{/gmax}}
                    {{#gmin}}<div><b>gmin</b>: {{gmin}}</div>{{/gmin}}
                    {{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
                    {{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
                    {{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
                    {{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
                    {{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
                    {{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
                    {{#h0}}<div><b>h0</b>: {{h0}}</div>{{/h0}}
                    {{#inputSignal}}<div><b>inputSignal</b>: {{inputSignal}}</div>{{/inputSignal}}
                    {{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
                    {{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
                    {{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
                    {{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
                    {{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
                    {{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#qnl}}<div><b>qnl</b>: {{qnl}}</div>{{/qnl}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#t7}}<div><b>t7</b>: {{t7}}</div>{{/t7}}
                    {{#t8}}<div><b>t8</b>: {{t8}}</div>{{/t8}}
                    {{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
                    {{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
                    {{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
                    {{#velcl}}<div><b>velcl</b>: {{velcl}}</div>{{/velcl}}
                    {{#velop}}<div><b>velop</b>: {{velop}}</div>{{/velop}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydroR_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydroR_collapse" style="margin-left: 10px;">GovHydroR</a></legend>
                    <div id="{{id}}_GovHydroR_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_at'>at: </label><div class='col-sm-8'><input id='{{id}}_at' class='form-control' type='text'{{#at}} value='{{at}}'{{/at}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db1'>db1: </label><div class='col-sm-8'><input id='{{id}}_db1' class='form-control' type='text'{{#db1}} value='{{db1}}'{{/db1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db2'>db2: </label><div class='col-sm-8'><input id='{{id}}_db2' class='form-control' type='text'{{#db2}} value='{{db2}}'{{/db2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dturb'>dturb: </label><div class='col-sm-8'><input id='{{id}}_dturb' class='form-control' type='text'{{#dturb}} value='{{dturb}}'{{/dturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eps'>eps: </label><div class='col-sm-8'><input id='{{id}}_eps' class='form-control' type='text'{{#eps}} value='{{eps}}'{{/eps}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmax'>gmax: </label><div class='col-sm-8'><input id='{{id}}_gmax' class='form-control' type='text'{{#gmax}} value='{{gmax}}'{{/gmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmin'>gmin: </label><div class='col-sm-8'><input id='{{id}}_gmin' class='form-control' type='text'{{#gmin}} value='{{gmin}}'{{/gmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv1'>gv1: </label><div class='col-sm-8'><input id='{{id}}_gv1' class='form-control' type='text'{{#gv1}} value='{{gv1}}'{{/gv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv2'>gv2: </label><div class='col-sm-8'><input id='{{id}}_gv2' class='form-control' type='text'{{#gv2}} value='{{gv2}}'{{/gv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv3'>gv3: </label><div class='col-sm-8'><input id='{{id}}_gv3' class='form-control' type='text'{{#gv3}} value='{{gv3}}'{{/gv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv4'>gv4: </label><div class='col-sm-8'><input id='{{id}}_gv4' class='form-control' type='text'{{#gv4}} value='{{gv4}}'{{/gv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv5'>gv5: </label><div class='col-sm-8'><input id='{{id}}_gv5' class='form-control' type='text'{{#gv5}} value='{{gv5}}'{{/gv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv6'>gv6: </label><div class='col-sm-8'><input id='{{id}}_gv6' class='form-control' type='text'{{#gv6}} value='{{gv6}}'{{/gv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_h0'>h0: </label><div class='col-sm-8'><input id='{{id}}_h0' class='form-control' type='text'{{#h0}} value='{{h0}}'{{/h0}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_inputSignal'>inputSignal: </label><div class='col-sm-8'><input id='{{id}}_inputSignal' class='form-check-input' type='checkbox'{{#inputSignal}} checked{{/inputSignal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kg'>kg: </label><div class='col-sm-8'><input id='{{id}}_kg' class='form-control' type='text'{{#kg}} value='{{kg}}'{{/kg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv1'>pgv1: </label><div class='col-sm-8'><input id='{{id}}_pgv1' class='form-control' type='text'{{#pgv1}} value='{{pgv1}}'{{/pgv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv2'>pgv2: </label><div class='col-sm-8'><input id='{{id}}_pgv2' class='form-control' type='text'{{#pgv2}} value='{{pgv2}}'{{/pgv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv3'>pgv3: </label><div class='col-sm-8'><input id='{{id}}_pgv3' class='form-control' type='text'{{#pgv3}} value='{{pgv3}}'{{/pgv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv4'>pgv4: </label><div class='col-sm-8'><input id='{{id}}_pgv4' class='form-control' type='text'{{#pgv4}} value='{{pgv4}}'{{/pgv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv5'>pgv5: </label><div class='col-sm-8'><input id='{{id}}_pgv5' class='form-control' type='text'{{#pgv5}} value='{{pgv5}}'{{/pgv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv6'>pgv6: </label><div class='col-sm-8'><input id='{{id}}_pgv6' class='form-control' type='text'{{#pgv6}} value='{{pgv6}}'{{/pgv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qnl'>qnl: </label><div class='col-sm-8'><input id='{{id}}_qnl' class='form-control' type='text'{{#qnl}} value='{{qnl}}'{{/qnl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t7'>t7: </label><div class='col-sm-8'><input id='{{id}}_t7' class='form-control' type='text'{{#t7}} value='{{t7}}'{{/t7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t8'>t8: </label><div class='col-sm-8'><input id='{{id}}_t8' class='form-control' type='text'{{#t8}} value='{{t8}}'{{/t8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td'>td: </label><div class='col-sm-8'><input id='{{id}}_td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tt'>tt: </label><div class='col-sm-8'><input id='{{id}}_tt' class='form-control' type='text'{{#tt}} value='{{tt}}'{{/tt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw'>tw: </label><div class='col-sm-8'><input id='{{id}}_tw' class='form-control' type='text'{{#tw}} value='{{tw}}'{{/tw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velcl'>velcl: </label><div class='col-sm-8'><input id='{{id}}_velcl' class='form-control' type='text'{{#velcl}} value='{{velcl}}'{{/velcl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_velop'>velop: </label><div class='col-sm-8'><input id='{{id}}_velop' class='form-control' type='text'{{#velop}} value='{{velop}}'{{/velop}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydroR" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_at").value; if ("" != temp) obj.at = temp;
                temp = document.getElementById (id + "_db1").value; if ("" != temp) obj.db1 = temp;
                temp = document.getElementById (id + "_db2").value; if ("" != temp) obj.db2 = temp;
                temp = document.getElementById (id + "_dturb").value; if ("" != temp) obj.dturb = temp;
                temp = document.getElementById (id + "_eps").value; if ("" != temp) obj.eps = temp;
                temp = document.getElementById (id + "_gmax").value; if ("" != temp) obj.gmax = temp;
                temp = document.getElementById (id + "_gmin").value; if ("" != temp) obj.gmin = temp;
                temp = document.getElementById (id + "_gv1").value; if ("" != temp) obj.gv1 = temp;
                temp = document.getElementById (id + "_gv2").value; if ("" != temp) obj.gv2 = temp;
                temp = document.getElementById (id + "_gv3").value; if ("" != temp) obj.gv3 = temp;
                temp = document.getElementById (id + "_gv4").value; if ("" != temp) obj.gv4 = temp;
                temp = document.getElementById (id + "_gv5").value; if ("" != temp) obj.gv5 = temp;
                temp = document.getElementById (id + "_gv6").value; if ("" != temp) obj.gv6 = temp;
                temp = document.getElementById (id + "_h0").value; if ("" != temp) obj.h0 = temp;
                temp = document.getElementById (id + "_inputSignal").checked; if (temp) obj.inputSignal = true;
                temp = document.getElementById (id + "_kg").value; if ("" != temp) obj.kg = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pgv1").value; if ("" != temp) obj.pgv1 = temp;
                temp = document.getElementById (id + "_pgv2").value; if ("" != temp) obj.pgv2 = temp;
                temp = document.getElementById (id + "_pgv3").value; if ("" != temp) obj.pgv3 = temp;
                temp = document.getElementById (id + "_pgv4").value; if ("" != temp) obj.pgv4 = temp;
                temp = document.getElementById (id + "_pgv5").value; if ("" != temp) obj.pgv5 = temp;
                temp = document.getElementById (id + "_pgv6").value; if ("" != temp) obj.pgv6 = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_qnl").value; if ("" != temp) obj.qnl = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_t5").value; if ("" != temp) obj.t5 = temp;
                temp = document.getElementById (id + "_t6").value; if ("" != temp) obj.t6 = temp;
                temp = document.getElementById (id + "_t7").value; if ("" != temp) obj.t7 = temp;
                temp = document.getElementById (id + "_t8").value; if ("" != temp) obj.t8 = temp;
                temp = document.getElementById (id + "_td").value; if ("" != temp) obj.td = temp;
                temp = document.getElementById (id + "_tp").value; if ("" != temp) obj.tp = temp;
                temp = document.getElementById (id + "_tt").value; if ("" != temp) obj.tt = temp;
                temp = document.getElementById (id + "_tw").value; if ("" != temp) obj.tw = temp;
                temp = document.getElementById (id + "_velcl").value; if ("" != temp) obj.velcl = temp;
                temp = document.getElementById (id + "_velop").value; if ("" != temp) obj.velop = temp;

                return (obj);
            }
        }

        /**
         * Hydro turbine and governor.
         *
         * Represents plants with straight-forward penstock configurations and hydraulic governors of traditional 'dashpot' type.  This model can be used to represent simple, Francis, Pelton or Kaplan turbines.
         *
         */
        class GovHydro4 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydro4;
                if (null == bucket)
                   cim_data.GovHydro4 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydro4[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydro4";
                base.parse_element (/<cim:GovHydro4.at>([\s\S]*?)<\/cim:GovHydro4.at>/g, obj, "at", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bgv0>([\s\S]*?)<\/cim:GovHydro4.bgv0>/g, obj, "bgv0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bgv1>([\s\S]*?)<\/cim:GovHydro4.bgv1>/g, obj, "bgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bgv2>([\s\S]*?)<\/cim:GovHydro4.bgv2>/g, obj, "bgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bgv3>([\s\S]*?)<\/cim:GovHydro4.bgv3>/g, obj, "bgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bgv4>([\s\S]*?)<\/cim:GovHydro4.bgv4>/g, obj, "bgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bgv5>([\s\S]*?)<\/cim:GovHydro4.bgv5>/g, obj, "bgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.bmax>([\s\S]*?)<\/cim:GovHydro4.bmax>/g, obj, "bmax", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydro4.db1>([\s\S]*?)<\/cim:GovHydro4.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.db2>([\s\S]*?)<\/cim:GovHydro4.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.dturb>([\s\S]*?)<\/cim:GovHydro4.dturb>/g, obj, "dturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.eps>([\s\S]*?)<\/cim:GovHydro4.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gmax>([\s\S]*?)<\/cim:GovHydro4.gmax>/g, obj, "gmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gmin>([\s\S]*?)<\/cim:GovHydro4.gmin>/g, obj, "gmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gv0>([\s\S]*?)<\/cim:GovHydro4.gv0>/g, obj, "gv0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gv1>([\s\S]*?)<\/cim:GovHydro4.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gv2>([\s\S]*?)<\/cim:GovHydro4.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gv3>([\s\S]*?)<\/cim:GovHydro4.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gv4>([\s\S]*?)<\/cim:GovHydro4.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.gv5>([\s\S]*?)<\/cim:GovHydro4.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.hdam>([\s\S]*?)<\/cim:GovHydro4.hdam>/g, obj, "hdam", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.mwbase>([\s\S]*?)<\/cim:GovHydro4.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.pgv0>([\s\S]*?)<\/cim:GovHydro4.pgv0>/g, obj, "pgv0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.pgv1>([\s\S]*?)<\/cim:GovHydro4.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.pgv2>([\s\S]*?)<\/cim:GovHydro4.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.pgv3>([\s\S]*?)<\/cim:GovHydro4.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.pgv4>([\s\S]*?)<\/cim:GovHydro4.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.pgv5>([\s\S]*?)<\/cim:GovHydro4.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.qn1>([\s\S]*?)<\/cim:GovHydro4.qn1>/g, obj, "qn1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.rperm>([\s\S]*?)<\/cim:GovHydro4.rperm>/g, obj, "rperm", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.rtemp>([\s\S]*?)<\/cim:GovHydro4.rtemp>/g, obj, "rtemp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.tblade>([\s\S]*?)<\/cim:GovHydro4.tblade>/g, obj, "tblade", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.tg>([\s\S]*?)<\/cim:GovHydro4.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.tp>([\s\S]*?)<\/cim:GovHydro4.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.tr>([\s\S]*?)<\/cim:GovHydro4.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.tw>([\s\S]*?)<\/cim:GovHydro4.tw>/g, obj, "tw", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydro4.uc>([\s\S]*?)<\/cim:GovHydro4.uc>/g, obj, "uc", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydro4.uo>([\s\S]*?)<\/cim:GovHydro4.uo>/g, obj, "uo", base.to_float, sub, context);
                var bucket = context.parsed.GovHydro4;
                if (null == bucket)
                   context.parsed.GovHydro4 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydro4", "at", "at",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bgv0", "bgv0",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bgv1", "bgv1",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bgv2", "bgv2",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bgv3", "bgv3",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bgv4", "bgv4",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bgv5", "bgv5",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "bmax", "bmax",  base.from_float, fields);
                base.export_element (obj, "GovHydro4", "db1", "db1",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "db2", "db2",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "dturb", "dturb",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "eps", "eps",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gmax", "gmax",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gmin", "gmin",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gv0", "gv0",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gv1", "gv1",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gv2", "gv2",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gv3", "gv3",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gv4", "gv4",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "gv5", "gv5",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "hdam", "hdam",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "pgv0", "pgv0",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "pgv1", "pgv1",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "pgv2", "pgv2",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "pgv3", "pgv3",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "pgv4", "pgv4",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "pgv5", "pgv5",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "qn1", "qn1",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "rperm", "rperm",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "rtemp", "rtemp",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "tblade", "tblade",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "tg", "tg",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "tp", "tp",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "tr", "tr",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "tw", "tw",  base.from_string, fields);
                base.export_element (obj, "GovHydro4", "uc", "uc",  base.from_float, fields);
                base.export_element (obj, "GovHydro4", "uo", "uo",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydro4_collapse" aria-expanded="true" aria-controls="GovHydro4_collapse" style="margin-left: 10px;">GovHydro4</a></legend>
                    <div id="GovHydro4_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#at}}<div><b>at</b>: {{at}}</div>{{/at}}
                    {{#bgv0}}<div><b>bgv0</b>: {{bgv0}}</div>{{/bgv0}}
                    {{#bgv1}}<div><b>bgv1</b>: {{bgv1}}</div>{{/bgv1}}
                    {{#bgv2}}<div><b>bgv2</b>: {{bgv2}}</div>{{/bgv2}}
                    {{#bgv3}}<div><b>bgv3</b>: {{bgv3}}</div>{{/bgv3}}
                    {{#bgv4}}<div><b>bgv4</b>: {{bgv4}}</div>{{/bgv4}}
                    {{#bgv5}}<div><b>bgv5</b>: {{bgv5}}</div>{{/bgv5}}
                    {{#bmax}}<div><b>bmax</b>: {{bmax}}</div>{{/bmax}}
                    {{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
                    {{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
                    {{#dturb}}<div><b>dturb</b>: {{dturb}}</div>{{/dturb}}
                    {{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
                    {{#gmax}}<div><b>gmax</b>: {{gmax}}</div>{{/gmax}}
                    {{#gmin}}<div><b>gmin</b>: {{gmin}}</div>{{/gmin}}
                    {{#gv0}}<div><b>gv0</b>: {{gv0}}</div>{{/gv0}}
                    {{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
                    {{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
                    {{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
                    {{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
                    {{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
                    {{#hdam}}<div><b>hdam</b>: {{hdam}}</div>{{/hdam}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pgv0}}<div><b>pgv0</b>: {{pgv0}}</div>{{/pgv0}}
                    {{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
                    {{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
                    {{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
                    {{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
                    {{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
                    {{#qn1}}<div><b>qn1</b>: {{qn1}}</div>{{/qn1}}
                    {{#rperm}}<div><b>rperm</b>: {{rperm}}</div>{{/rperm}}
                    {{#rtemp}}<div><b>rtemp</b>: {{rtemp}}</div>{{/rtemp}}
                    {{#tblade}}<div><b>tblade</b>: {{tblade}}</div>{{/tblade}}
                    {{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
                    {{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
                    {{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
                    {{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
                    {{#uo}}<div><b>uo</b>: {{uo}}</div>{{/uo}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydro4_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydro4_collapse" style="margin-left: 10px;">GovHydro4</a></legend>
                    <div id="{{id}}_GovHydro4_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_at'>at: </label><div class='col-sm-8'><input id='{{id}}_at' class='form-control' type='text'{{#at}} value='{{at}}'{{/at}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bgv0'>bgv0: </label><div class='col-sm-8'><input id='{{id}}_bgv0' class='form-control' type='text'{{#bgv0}} value='{{bgv0}}'{{/bgv0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bgv1'>bgv1: </label><div class='col-sm-8'><input id='{{id}}_bgv1' class='form-control' type='text'{{#bgv1}} value='{{bgv1}}'{{/bgv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bgv2'>bgv2: </label><div class='col-sm-8'><input id='{{id}}_bgv2' class='form-control' type='text'{{#bgv2}} value='{{bgv2}}'{{/bgv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bgv3'>bgv3: </label><div class='col-sm-8'><input id='{{id}}_bgv3' class='form-control' type='text'{{#bgv3}} value='{{bgv3}}'{{/bgv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bgv4'>bgv4: </label><div class='col-sm-8'><input id='{{id}}_bgv4' class='form-control' type='text'{{#bgv4}} value='{{bgv4}}'{{/bgv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bgv5'>bgv5: </label><div class='col-sm-8'><input id='{{id}}_bgv5' class='form-control' type='text'{{#bgv5}} value='{{bgv5}}'{{/bgv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bmax'>bmax: </label><div class='col-sm-8'><input id='{{id}}_bmax' class='form-control' type='text'{{#bmax}} value='{{bmax}}'{{/bmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db1'>db1: </label><div class='col-sm-8'><input id='{{id}}_db1' class='form-control' type='text'{{#db1}} value='{{db1}}'{{/db1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db2'>db2: </label><div class='col-sm-8'><input id='{{id}}_db2' class='form-control' type='text'{{#db2}} value='{{db2}}'{{/db2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dturb'>dturb: </label><div class='col-sm-8'><input id='{{id}}_dturb' class='form-control' type='text'{{#dturb}} value='{{dturb}}'{{/dturb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eps'>eps: </label><div class='col-sm-8'><input id='{{id}}_eps' class='form-control' type='text'{{#eps}} value='{{eps}}'{{/eps}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmax'>gmax: </label><div class='col-sm-8'><input id='{{id}}_gmax' class='form-control' type='text'{{#gmax}} value='{{gmax}}'{{/gmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmin'>gmin: </label><div class='col-sm-8'><input id='{{id}}_gmin' class='form-control' type='text'{{#gmin}} value='{{gmin}}'{{/gmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv0'>gv0: </label><div class='col-sm-8'><input id='{{id}}_gv0' class='form-control' type='text'{{#gv0}} value='{{gv0}}'{{/gv0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv1'>gv1: </label><div class='col-sm-8'><input id='{{id}}_gv1' class='form-control' type='text'{{#gv1}} value='{{gv1}}'{{/gv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv2'>gv2: </label><div class='col-sm-8'><input id='{{id}}_gv2' class='form-control' type='text'{{#gv2}} value='{{gv2}}'{{/gv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv3'>gv3: </label><div class='col-sm-8'><input id='{{id}}_gv3' class='form-control' type='text'{{#gv3}} value='{{gv3}}'{{/gv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv4'>gv4: </label><div class='col-sm-8'><input id='{{id}}_gv4' class='form-control' type='text'{{#gv4}} value='{{gv4}}'{{/gv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv5'>gv5: </label><div class='col-sm-8'><input id='{{id}}_gv5' class='form-control' type='text'{{#gv5}} value='{{gv5}}'{{/gv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hdam'>hdam: </label><div class='col-sm-8'><input id='{{id}}_hdam' class='form-control' type='text'{{#hdam}} value='{{hdam}}'{{/hdam}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv0'>pgv0: </label><div class='col-sm-8'><input id='{{id}}_pgv0' class='form-control' type='text'{{#pgv0}} value='{{pgv0}}'{{/pgv0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv1'>pgv1: </label><div class='col-sm-8'><input id='{{id}}_pgv1' class='form-control' type='text'{{#pgv1}} value='{{pgv1}}'{{/pgv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv2'>pgv2: </label><div class='col-sm-8'><input id='{{id}}_pgv2' class='form-control' type='text'{{#pgv2}} value='{{pgv2}}'{{/pgv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv3'>pgv3: </label><div class='col-sm-8'><input id='{{id}}_pgv3' class='form-control' type='text'{{#pgv3}} value='{{pgv3}}'{{/pgv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv4'>pgv4: </label><div class='col-sm-8'><input id='{{id}}_pgv4' class='form-control' type='text'{{#pgv4}} value='{{pgv4}}'{{/pgv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv5'>pgv5: </label><div class='col-sm-8'><input id='{{id}}_pgv5' class='form-control' type='text'{{#pgv5}} value='{{pgv5}}'{{/pgv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qn1'>qn1: </label><div class='col-sm-8'><input id='{{id}}_qn1' class='form-control' type='text'{{#qn1}} value='{{qn1}}'{{/qn1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rperm'>rperm: </label><div class='col-sm-8'><input id='{{id}}_rperm' class='form-control' type='text'{{#rperm}} value='{{rperm}}'{{/rperm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rtemp'>rtemp: </label><div class='col-sm-8'><input id='{{id}}_rtemp' class='form-control' type='text'{{#rtemp}} value='{{rtemp}}'{{/rtemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tblade'>tblade: </label><div class='col-sm-8'><input id='{{id}}_tblade' class='form-control' type='text'{{#tblade}} value='{{tblade}}'{{/tblade}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tg'>tg: </label><div class='col-sm-8'><input id='{{id}}_tg' class='form-control' type='text'{{#tg}} value='{{tg}}'{{/tg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tr'>tr: </label><div class='col-sm-8'><input id='{{id}}_tr' class='form-control' type='text'{{#tr}} value='{{tr}}'{{/tr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw'>tw: </label><div class='col-sm-8'><input id='{{id}}_tw' class='form-control' type='text'{{#tw}} value='{{tw}}'{{/tw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uc'>uc: </label><div class='col-sm-8'><input id='{{id}}_uc' class='form-control' type='text'{{#uc}} value='{{uc}}'{{/uc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uo'>uo: </label><div class='col-sm-8'><input id='{{id}}_uo' class='form-control' type='text'{{#uo}} value='{{uo}}'{{/uo}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydro4" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_at").value; if ("" != temp) obj.at = temp;
                temp = document.getElementById (id + "_bgv0").value; if ("" != temp) obj.bgv0 = temp;
                temp = document.getElementById (id + "_bgv1").value; if ("" != temp) obj.bgv1 = temp;
                temp = document.getElementById (id + "_bgv2").value; if ("" != temp) obj.bgv2 = temp;
                temp = document.getElementById (id + "_bgv3").value; if ("" != temp) obj.bgv3 = temp;
                temp = document.getElementById (id + "_bgv4").value; if ("" != temp) obj.bgv4 = temp;
                temp = document.getElementById (id + "_bgv5").value; if ("" != temp) obj.bgv5 = temp;
                temp = document.getElementById (id + "_bmax").value; if ("" != temp) obj.bmax = temp;
                temp = document.getElementById (id + "_db1").value; if ("" != temp) obj.db1 = temp;
                temp = document.getElementById (id + "_db2").value; if ("" != temp) obj.db2 = temp;
                temp = document.getElementById (id + "_dturb").value; if ("" != temp) obj.dturb = temp;
                temp = document.getElementById (id + "_eps").value; if ("" != temp) obj.eps = temp;
                temp = document.getElementById (id + "_gmax").value; if ("" != temp) obj.gmax = temp;
                temp = document.getElementById (id + "_gmin").value; if ("" != temp) obj.gmin = temp;
                temp = document.getElementById (id + "_gv0").value; if ("" != temp) obj.gv0 = temp;
                temp = document.getElementById (id + "_gv1").value; if ("" != temp) obj.gv1 = temp;
                temp = document.getElementById (id + "_gv2").value; if ("" != temp) obj.gv2 = temp;
                temp = document.getElementById (id + "_gv3").value; if ("" != temp) obj.gv3 = temp;
                temp = document.getElementById (id + "_gv4").value; if ("" != temp) obj.gv4 = temp;
                temp = document.getElementById (id + "_gv5").value; if ("" != temp) obj.gv5 = temp;
                temp = document.getElementById (id + "_hdam").value; if ("" != temp) obj.hdam = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pgv0").value; if ("" != temp) obj.pgv0 = temp;
                temp = document.getElementById (id + "_pgv1").value; if ("" != temp) obj.pgv1 = temp;
                temp = document.getElementById (id + "_pgv2").value; if ("" != temp) obj.pgv2 = temp;
                temp = document.getElementById (id + "_pgv3").value; if ("" != temp) obj.pgv3 = temp;
                temp = document.getElementById (id + "_pgv4").value; if ("" != temp) obj.pgv4 = temp;
                temp = document.getElementById (id + "_pgv5").value; if ("" != temp) obj.pgv5 = temp;
                temp = document.getElementById (id + "_qn1").value; if ("" != temp) obj.qn1 = temp;
                temp = document.getElementById (id + "_rperm").value; if ("" != temp) obj.rperm = temp;
                temp = document.getElementById (id + "_rtemp").value; if ("" != temp) obj.rtemp = temp;
                temp = document.getElementById (id + "_tblade").value; if ("" != temp) obj.tblade = temp;
                temp = document.getElementById (id + "_tg").value; if ("" != temp) obj.tg = temp;
                temp = document.getElementById (id + "_tp").value; if ("" != temp) obj.tp = temp;
                temp = document.getElementById (id + "_tr").value; if ("" != temp) obj.tr = temp;
                temp = document.getElementById (id + "_tw").value; if ("" != temp) obj.tw = temp;
                temp = document.getElementById (id + "_uc").value; if ("" != temp) obj.uc = temp;
                temp = document.getElementById (id + "_uo").value; if ("" != temp) obj.uo = temp;

                return (obj);
            }
        }

        /**
         * Modified single shaft gas turbine.
         *
         */
        class GovGAST1 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovGAST1;
                if (null == bucket)
                   cim_data.GovGAST1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovGAST1[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovGAST1";
                base.parse_element (/<cim:GovGAST1.a>([\s\S]*?)<\/cim:GovGAST1.a>/g, obj, "a", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST1.b>([\s\S]*?)<\/cim:GovGAST1.b>/g, obj, "b", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST1.db1>([\s\S]*?)<\/cim:GovGAST1.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.db2>([\s\S]*?)<\/cim:GovGAST1.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.eps>([\s\S]*?)<\/cim:GovGAST1.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.fidle>([\s\S]*?)<\/cim:GovGAST1.fidle>/g, obj, "fidle", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.gv1>([\s\S]*?)<\/cim:GovGAST1.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.gv2>([\s\S]*?)<\/cim:GovGAST1.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.gv3>([\s\S]*?)<\/cim:GovGAST1.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.gv4>([\s\S]*?)<\/cim:GovGAST1.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.gv5>([\s\S]*?)<\/cim:GovGAST1.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.gv6>([\s\S]*?)<\/cim:GovGAST1.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.ka>([\s\S]*?)<\/cim:GovGAST1.ka>/g, obj, "ka", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.kt>([\s\S]*?)<\/cim:GovGAST1.kt>/g, obj, "kt", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.lmax>([\s\S]*?)<\/cim:GovGAST1.lmax>/g, obj, "lmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.loadinc>([\s\S]*?)<\/cim:GovGAST1.loadinc>/g, obj, "loadinc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.ltrate>([\s\S]*?)<\/cim:GovGAST1.ltrate>/g, obj, "ltrate", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST1.mwbase>([\s\S]*?)<\/cim:GovGAST1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.pgv1>([\s\S]*?)<\/cim:GovGAST1.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.pgv2>([\s\S]*?)<\/cim:GovGAST1.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.pgv3>([\s\S]*?)<\/cim:GovGAST1.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.pgv4>([\s\S]*?)<\/cim:GovGAST1.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.pgv5>([\s\S]*?)<\/cim:GovGAST1.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.pgv6>([\s\S]*?)<\/cim:GovGAST1.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.r>([\s\S]*?)<\/cim:GovGAST1.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.rmax>([\s\S]*?)<\/cim:GovGAST1.rmax>/g, obj, "rmax", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST1.t1>([\s\S]*?)<\/cim:GovGAST1.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.t2>([\s\S]*?)<\/cim:GovGAST1.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.t3>([\s\S]*?)<\/cim:GovGAST1.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.t4>([\s\S]*?)<\/cim:GovGAST1.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.t5>([\s\S]*?)<\/cim:GovGAST1.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.tltr>([\s\S]*?)<\/cim:GovGAST1.tltr>/g, obj, "tltr", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.vmax>([\s\S]*?)<\/cim:GovGAST1.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST1.vmin>([\s\S]*?)<\/cim:GovGAST1.vmin>/g, obj, "vmin", base.to_string, sub, context);
                var bucket = context.parsed.GovGAST1;
                if (null == bucket)
                   context.parsed.GovGAST1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovGAST1", "a", "a",  base.from_float, fields);
                base.export_element (obj, "GovGAST1", "b", "b",  base.from_float, fields);
                base.export_element (obj, "GovGAST1", "db1", "db1",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "db2", "db2",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "eps", "eps",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "fidle", "fidle",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "gv1", "gv1",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "gv2", "gv2",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "gv3", "gv3",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "gv4", "gv4",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "gv5", "gv5",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "gv6", "gv6",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "kt", "kt",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "lmax", "lmax",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "loadinc", "loadinc",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "ltrate", "ltrate",  base.from_float, fields);
                base.export_element (obj, "GovGAST1", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "pgv1", "pgv1",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "pgv2", "pgv2",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "pgv3", "pgv3",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "pgv4", "pgv4",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "pgv5", "pgv5",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "pgv6", "pgv6",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "r", "r",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "rmax", "rmax",  base.from_float, fields);
                base.export_element (obj, "GovGAST1", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "tltr", "tltr",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "vmax", "vmax",  base.from_string, fields);
                base.export_element (obj, "GovGAST1", "vmin", "vmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovGAST1_collapse" aria-expanded="true" aria-controls="GovGAST1_collapse" style="margin-left: 10px;">GovGAST1</a></legend>
                    <div id="GovGAST1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#a}}<div><b>a</b>: {{a}}</div>{{/a}}
                    {{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
                    {{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
                    {{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
                    {{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
                    {{#fidle}}<div><b>fidle</b>: {{fidle}}</div>{{/fidle}}
                    {{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
                    {{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
                    {{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
                    {{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
                    {{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
                    {{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kt}}<div><b>kt</b>: {{kt}}</div>{{/kt}}
                    {{#lmax}}<div><b>lmax</b>: {{lmax}}</div>{{/lmax}}
                    {{#loadinc}}<div><b>loadinc</b>: {{loadinc}}</div>{{/loadinc}}
                    {{#ltrate}}<div><b>ltrate</b>: {{ltrate}}</div>{{/ltrate}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
                    {{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
                    {{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
                    {{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
                    {{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
                    {{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#rmax}}<div><b>rmax</b>: {{rmax}}</div>{{/rmax}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#tltr}}<div><b>tltr</b>: {{tltr}}</div>{{/tltr}}
                    {{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
                    {{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovGAST1_collapse" aria-expanded="true" aria-controls="{{id}}_GovGAST1_collapse" style="margin-left: 10px;">GovGAST1</a></legend>
                    <div id="{{id}}_GovGAST1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a'>a: </label><div class='col-sm-8'><input id='{{id}}_a' class='form-control' type='text'{{#a}} value='{{a}}'{{/a}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b'>b: </label><div class='col-sm-8'><input id='{{id}}_b' class='form-control' type='text'{{#b}} value='{{b}}'{{/b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db1'>db1: </label><div class='col-sm-8'><input id='{{id}}_db1' class='form-control' type='text'{{#db1}} value='{{db1}}'{{/db1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db2'>db2: </label><div class='col-sm-8'><input id='{{id}}_db2' class='form-control' type='text'{{#db2}} value='{{db2}}'{{/db2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eps'>eps: </label><div class='col-sm-8'><input id='{{id}}_eps' class='form-control' type='text'{{#eps}} value='{{eps}}'{{/eps}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fidle'>fidle: </label><div class='col-sm-8'><input id='{{id}}_fidle' class='form-control' type='text'{{#fidle}} value='{{fidle}}'{{/fidle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv1'>gv1: </label><div class='col-sm-8'><input id='{{id}}_gv1' class='form-control' type='text'{{#gv1}} value='{{gv1}}'{{/gv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv2'>gv2: </label><div class='col-sm-8'><input id='{{id}}_gv2' class='form-control' type='text'{{#gv2}} value='{{gv2}}'{{/gv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv3'>gv3: </label><div class='col-sm-8'><input id='{{id}}_gv3' class='form-control' type='text'{{#gv3}} value='{{gv3}}'{{/gv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv4'>gv4: </label><div class='col-sm-8'><input id='{{id}}_gv4' class='form-control' type='text'{{#gv4}} value='{{gv4}}'{{/gv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv5'>gv5: </label><div class='col-sm-8'><input id='{{id}}_gv5' class='form-control' type='text'{{#gv5}} value='{{gv5}}'{{/gv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv6'>gv6: </label><div class='col-sm-8'><input id='{{id}}_gv6' class='form-control' type='text'{{#gv6}} value='{{gv6}}'{{/gv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kt'>kt: </label><div class='col-sm-8'><input id='{{id}}_kt' class='form-control' type='text'{{#kt}} value='{{kt}}'{{/kt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lmax'>lmax: </label><div class='col-sm-8'><input id='{{id}}_lmax' class='form-control' type='text'{{#lmax}} value='{{lmax}}'{{/lmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loadinc'>loadinc: </label><div class='col-sm-8'><input id='{{id}}_loadinc' class='form-control' type='text'{{#loadinc}} value='{{loadinc}}'{{/loadinc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ltrate'>ltrate: </label><div class='col-sm-8'><input id='{{id}}_ltrate' class='form-control' type='text'{{#ltrate}} value='{{ltrate}}'{{/ltrate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv1'>pgv1: </label><div class='col-sm-8'><input id='{{id}}_pgv1' class='form-control' type='text'{{#pgv1}} value='{{pgv1}}'{{/pgv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv2'>pgv2: </label><div class='col-sm-8'><input id='{{id}}_pgv2' class='form-control' type='text'{{#pgv2}} value='{{pgv2}}'{{/pgv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv3'>pgv3: </label><div class='col-sm-8'><input id='{{id}}_pgv3' class='form-control' type='text'{{#pgv3}} value='{{pgv3}}'{{/pgv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv4'>pgv4: </label><div class='col-sm-8'><input id='{{id}}_pgv4' class='form-control' type='text'{{#pgv4}} value='{{pgv4}}'{{/pgv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv5'>pgv5: </label><div class='col-sm-8'><input id='{{id}}_pgv5' class='form-control' type='text'{{#pgv5}} value='{{pgv5}}'{{/pgv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv6'>pgv6: </label><div class='col-sm-8'><input id='{{id}}_pgv6' class='form-control' type='text'{{#pgv6}} value='{{pgv6}}'{{/pgv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rmax'>rmax: </label><div class='col-sm-8'><input id='{{id}}_rmax' class='form-control' type='text'{{#rmax}} value='{{rmax}}'{{/rmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tltr'>tltr: </label><div class='col-sm-8'><input id='{{id}}_tltr' class='form-control' type='text'{{#tltr}} value='{{tltr}}'{{/tltr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmax'>vmax: </label><div class='col-sm-8'><input id='{{id}}_vmax' class='form-control' type='text'{{#vmax}} value='{{vmax}}'{{/vmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmin'>vmin: </label><div class='col-sm-8'><input id='{{id}}_vmin' class='form-control' type='text'{{#vmin}} value='{{vmin}}'{{/vmin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovGAST1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_a").value; if ("" != temp) obj.a = temp;
                temp = document.getElementById (id + "_b").value; if ("" != temp) obj.b = temp;
                temp = document.getElementById (id + "_db1").value; if ("" != temp) obj.db1 = temp;
                temp = document.getElementById (id + "_db2").value; if ("" != temp) obj.db2 = temp;
                temp = document.getElementById (id + "_eps").value; if ("" != temp) obj.eps = temp;
                temp = document.getElementById (id + "_fidle").value; if ("" != temp) obj.fidle = temp;
                temp = document.getElementById (id + "_gv1").value; if ("" != temp) obj.gv1 = temp;
                temp = document.getElementById (id + "_gv2").value; if ("" != temp) obj.gv2 = temp;
                temp = document.getElementById (id + "_gv3").value; if ("" != temp) obj.gv3 = temp;
                temp = document.getElementById (id + "_gv4").value; if ("" != temp) obj.gv4 = temp;
                temp = document.getElementById (id + "_gv5").value; if ("" != temp) obj.gv5 = temp;
                temp = document.getElementById (id + "_gv6").value; if ("" != temp) obj.gv6 = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kt").value; if ("" != temp) obj.kt = temp;
                temp = document.getElementById (id + "_lmax").value; if ("" != temp) obj.lmax = temp;
                temp = document.getElementById (id + "_loadinc").value; if ("" != temp) obj.loadinc = temp;
                temp = document.getElementById (id + "_ltrate").value; if ("" != temp) obj.ltrate = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pgv1").value; if ("" != temp) obj.pgv1 = temp;
                temp = document.getElementById (id + "_pgv2").value; if ("" != temp) obj.pgv2 = temp;
                temp = document.getElementById (id + "_pgv3").value; if ("" != temp) obj.pgv3 = temp;
                temp = document.getElementById (id + "_pgv4").value; if ("" != temp) obj.pgv4 = temp;
                temp = document.getElementById (id + "_pgv5").value; if ("" != temp) obj.pgv5 = temp;
                temp = document.getElementById (id + "_pgv6").value; if ("" != temp) obj.pgv6 = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_rmax").value; if ("" != temp) obj.rmax = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_t5").value; if ("" != temp) obj.t5 = temp;
                temp = document.getElementById (id + "_tltr").value; if ("" != temp) obj.tltr = temp;
                temp = document.getElementById (id + "_vmax").value; if ("" != temp) obj.vmax = temp;
                temp = document.getElementById (id + "_vmin").value; if ("" != temp) obj.vmin = temp;

                return (obj);
            }
        }

        /**
         * Steam turbine governor model, based on the GovSteamIEEE1 model  (with optional deadband and nonlinear valve gain added).
         *
         */
        class GovSteam1 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovSteam1;
                if (null == bucket)
                   cim_data.GovSteam1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovSteam1[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteam1";
                base.parse_element (/<cim:GovSteam1.db1>([\s\S]*?)<\/cim:GovSteam1.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.db2>([\s\S]*?)<\/cim:GovSteam1.db2>/g, obj, "db2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.eps>([\s\S]*?)<\/cim:GovSteam1.eps>/g, obj, "eps", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.gv1>([\s\S]*?)<\/cim:GovSteam1.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.gv2>([\s\S]*?)<\/cim:GovSteam1.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.gv3>([\s\S]*?)<\/cim:GovSteam1.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.gv4>([\s\S]*?)<\/cim:GovSteam1.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.gv5>([\s\S]*?)<\/cim:GovSteam1.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.gv6>([\s\S]*?)<\/cim:GovSteam1.gv6>/g, obj, "gv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.k>([\s\S]*?)<\/cim:GovSteam1.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.k1>([\s\S]*?)<\/cim:GovSteam1.k1>/g, obj, "k1", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k2>([\s\S]*?)<\/cim:GovSteam1.k2>/g, obj, "k2", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k3>([\s\S]*?)<\/cim:GovSteam1.k3>/g, obj, "k3", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k4>([\s\S]*?)<\/cim:GovSteam1.k4>/g, obj, "k4", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k5>([\s\S]*?)<\/cim:GovSteam1.k5>/g, obj, "k5", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k6>([\s\S]*?)<\/cim:GovSteam1.k6>/g, obj, "k6", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k7>([\s\S]*?)<\/cim:GovSteam1.k7>/g, obj, "k7", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.k8>([\s\S]*?)<\/cim:GovSteam1.k8>/g, obj, "k8", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.mwbase>([\s\S]*?)<\/cim:GovSteam1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pgv1>([\s\S]*?)<\/cim:GovSteam1.pgv1>/g, obj, "pgv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pgv2>([\s\S]*?)<\/cim:GovSteam1.pgv2>/g, obj, "pgv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pgv3>([\s\S]*?)<\/cim:GovSteam1.pgv3>/g, obj, "pgv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pgv4>([\s\S]*?)<\/cim:GovSteam1.pgv4>/g, obj, "pgv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pgv5>([\s\S]*?)<\/cim:GovSteam1.pgv5>/g, obj, "pgv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pgv6>([\s\S]*?)<\/cim:GovSteam1.pgv6>/g, obj, "pgv6", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pmax>([\s\S]*?)<\/cim:GovSteam1.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.pmin>([\s\S]*?)<\/cim:GovSteam1.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.sdb1>([\s\S]*?)<\/cim:GovSteam1.sdb1>/g, obj, "sdb1", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovSteam1.sdb2>([\s\S]*?)<\/cim:GovSteam1.sdb2>/g, obj, "sdb2", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovSteam1.t1>([\s\S]*?)<\/cim:GovSteam1.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.t2>([\s\S]*?)<\/cim:GovSteam1.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.t3>([\s\S]*?)<\/cim:GovSteam1.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.t4>([\s\S]*?)<\/cim:GovSteam1.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.t5>([\s\S]*?)<\/cim:GovSteam1.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.t6>([\s\S]*?)<\/cim:GovSteam1.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.t7>([\s\S]*?)<\/cim:GovSteam1.t7>/g, obj, "t7", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteam1.uc>([\s\S]*?)<\/cim:GovSteam1.uc>/g, obj, "uc", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.uo>([\s\S]*?)<\/cim:GovSteam1.uo>/g, obj, "uo", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteam1.valve>([\s\S]*?)<\/cim:GovSteam1.valve>/g, obj, "valve", base.to_boolean, sub, context);
                var bucket = context.parsed.GovSteam1;
                if (null == bucket)
                   context.parsed.GovSteam1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteam1", "db1", "db1",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "db2", "db2",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "eps", "eps",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "gv1", "gv1",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "gv2", "gv2",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "gv3", "gv3",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "gv4", "gv4",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "gv5", "gv5",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "gv6", "gv6",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "k", "k",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "k1", "k1",  base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k2", "k2",  base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k3", "k3",  base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k4", "k4",  base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k5", "k5",  base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k6", "k6",  base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k7", "k7",  base.from_float, fields);
                base.export_element (obj, "GovSteam1", "k8", "k8",  base.from_float, fields);
                base.export_element (obj, "GovSteam1", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pgv1", "pgv1",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pgv2", "pgv2",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pgv3", "pgv3",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pgv4", "pgv4",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pgv5", "pgv5",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pgv6", "pgv6",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "sdb1", "sdb1",  base.from_boolean, fields);
                base.export_element (obj, "GovSteam1", "sdb2", "sdb2",  base.from_boolean, fields);
                base.export_element (obj, "GovSteam1", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "t7", "t7",  base.from_string, fields);
                base.export_element (obj, "GovSteam1", "uc", "uc",  base.from_float, fields);
                base.export_element (obj, "GovSteam1", "uo", "uo",  base.from_float, fields);
                base.export_element (obj, "GovSteam1", "valve", "valve",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovSteam1_collapse" aria-expanded="true" aria-controls="GovSteam1_collapse" style="margin-left: 10px;">GovSteam1</a></legend>
                    <div id="GovSteam1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
                    {{#db2}}<div><b>db2</b>: {{db2}}</div>{{/db2}}
                    {{#eps}}<div><b>eps</b>: {{eps}}</div>{{/eps}}
                    {{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
                    {{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
                    {{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
                    {{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
                    {{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
                    {{#gv6}}<div><b>gv6</b>: {{gv6}}</div>{{/gv6}}
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
                    {{#k4}}<div><b>k4</b>: {{k4}}</div>{{/k4}}
                    {{#k5}}<div><b>k5</b>: {{k5}}</div>{{/k5}}
                    {{#k6}}<div><b>k6</b>: {{k6}}</div>{{/k6}}
                    {{#k7}}<div><b>k7</b>: {{k7}}</div>{{/k7}}
                    {{#k8}}<div><b>k8</b>: {{k8}}</div>{{/k8}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pgv1}}<div><b>pgv1</b>: {{pgv1}}</div>{{/pgv1}}
                    {{#pgv2}}<div><b>pgv2</b>: {{pgv2}}</div>{{/pgv2}}
                    {{#pgv3}}<div><b>pgv3</b>: {{pgv3}}</div>{{/pgv3}}
                    {{#pgv4}}<div><b>pgv4</b>: {{pgv4}}</div>{{/pgv4}}
                    {{#pgv5}}<div><b>pgv5</b>: {{pgv5}}</div>{{/pgv5}}
                    {{#pgv6}}<div><b>pgv6</b>: {{pgv6}}</div>{{/pgv6}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#sdb1}}<div><b>sdb1</b>: {{sdb1}}</div>{{/sdb1}}
                    {{#sdb2}}<div><b>sdb2</b>: {{sdb2}}</div>{{/sdb2}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#t7}}<div><b>t7</b>: {{t7}}</div>{{/t7}}
                    {{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
                    {{#uo}}<div><b>uo</b>: {{uo}}</div>{{/uo}}
                    {{#valve}}<div><b>valve</b>: {{valve}}</div>{{/valve}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovSteam1_collapse" aria-expanded="true" aria-controls="{{id}}_GovSteam1_collapse" style="margin-left: 10px;">GovSteam1</a></legend>
                    <div id="{{id}}_GovSteam1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db1'>db1: </label><div class='col-sm-8'><input id='{{id}}_db1' class='form-control' type='text'{{#db1}} value='{{db1}}'{{/db1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db2'>db2: </label><div class='col-sm-8'><input id='{{id}}_db2' class='form-control' type='text'{{#db2}} value='{{db2}}'{{/db2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eps'>eps: </label><div class='col-sm-8'><input id='{{id}}_eps' class='form-control' type='text'{{#eps}} value='{{eps}}'{{/eps}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv1'>gv1: </label><div class='col-sm-8'><input id='{{id}}_gv1' class='form-control' type='text'{{#gv1}} value='{{gv1}}'{{/gv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv2'>gv2: </label><div class='col-sm-8'><input id='{{id}}_gv2' class='form-control' type='text'{{#gv2}} value='{{gv2}}'{{/gv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv3'>gv3: </label><div class='col-sm-8'><input id='{{id}}_gv3' class='form-control' type='text'{{#gv3}} value='{{gv3}}'{{/gv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv4'>gv4: </label><div class='col-sm-8'><input id='{{id}}_gv4' class='form-control' type='text'{{#gv4}} value='{{gv4}}'{{/gv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv5'>gv5: </label><div class='col-sm-8'><input id='{{id}}_gv5' class='form-control' type='text'{{#gv5}} value='{{gv5}}'{{/gv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv6'>gv6: </label><div class='col-sm-8'><input id='{{id}}_gv6' class='form-control' type='text'{{#gv6}} value='{{gv6}}'{{/gv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k3'>k3: </label><div class='col-sm-8'><input id='{{id}}_k3' class='form-control' type='text'{{#k3}} value='{{k3}}'{{/k3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k4'>k4: </label><div class='col-sm-8'><input id='{{id}}_k4' class='form-control' type='text'{{#k4}} value='{{k4}}'{{/k4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k5'>k5: </label><div class='col-sm-8'><input id='{{id}}_k5' class='form-control' type='text'{{#k5}} value='{{k5}}'{{/k5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k6'>k6: </label><div class='col-sm-8'><input id='{{id}}_k6' class='form-control' type='text'{{#k6}} value='{{k6}}'{{/k6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k7'>k7: </label><div class='col-sm-8'><input id='{{id}}_k7' class='form-control' type='text'{{#k7}} value='{{k7}}'{{/k7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k8'>k8: </label><div class='col-sm-8'><input id='{{id}}_k8' class='form-control' type='text'{{#k8}} value='{{k8}}'{{/k8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv1'>pgv1: </label><div class='col-sm-8'><input id='{{id}}_pgv1' class='form-control' type='text'{{#pgv1}} value='{{pgv1}}'{{/pgv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv2'>pgv2: </label><div class='col-sm-8'><input id='{{id}}_pgv2' class='form-control' type='text'{{#pgv2}} value='{{pgv2}}'{{/pgv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv3'>pgv3: </label><div class='col-sm-8'><input id='{{id}}_pgv3' class='form-control' type='text'{{#pgv3}} value='{{pgv3}}'{{/pgv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv4'>pgv4: </label><div class='col-sm-8'><input id='{{id}}_pgv4' class='form-control' type='text'{{#pgv4}} value='{{pgv4}}'{{/pgv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv5'>pgv5: </label><div class='col-sm-8'><input id='{{id}}_pgv5' class='form-control' type='text'{{#pgv5}} value='{{pgv5}}'{{/pgv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pgv6'>pgv6: </label><div class='col-sm-8'><input id='{{id}}_pgv6' class='form-control' type='text'{{#pgv6}} value='{{pgv6}}'{{/pgv6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_sdb1'>sdb1: </label><div class='col-sm-8'><input id='{{id}}_sdb1' class='form-check-input' type='checkbox'{{#sdb1}} checked{{/sdb1}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_sdb2'>sdb2: </label><div class='col-sm-8'><input id='{{id}}_sdb2' class='form-check-input' type='checkbox'{{#sdb2}} checked{{/sdb2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t7'>t7: </label><div class='col-sm-8'><input id='{{id}}_t7' class='form-control' type='text'{{#t7}} value='{{t7}}'{{/t7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uc'>uc: </label><div class='col-sm-8'><input id='{{id}}_uc' class='form-control' type='text'{{#uc}} value='{{uc}}'{{/uc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uo'>uo: </label><div class='col-sm-8'><input id='{{id}}_uo' class='form-control' type='text'{{#uo}} value='{{uo}}'{{/uo}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_valve'>valve: </label><div class='col-sm-8'><input id='{{id}}_valve' class='form-check-input' type='checkbox'{{#valve}} checked{{/valve}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovSteam1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_db1").value; if ("" != temp) obj.db1 = temp;
                temp = document.getElementById (id + "_db2").value; if ("" != temp) obj.db2 = temp;
                temp = document.getElementById (id + "_eps").value; if ("" != temp) obj.eps = temp;
                temp = document.getElementById (id + "_gv1").value; if ("" != temp) obj.gv1 = temp;
                temp = document.getElementById (id + "_gv2").value; if ("" != temp) obj.gv2 = temp;
                temp = document.getElementById (id + "_gv3").value; if ("" != temp) obj.gv3 = temp;
                temp = document.getElementById (id + "_gv4").value; if ("" != temp) obj.gv4 = temp;
                temp = document.getElementById (id + "_gv5").value; if ("" != temp) obj.gv5 = temp;
                temp = document.getElementById (id + "_gv6").value; if ("" != temp) obj.gv6 = temp;
                temp = document.getElementById (id + "_k").value; if ("" != temp) obj.k = temp;
                temp = document.getElementById (id + "_k1").value; if ("" != temp) obj.k1 = temp;
                temp = document.getElementById (id + "_k2").value; if ("" != temp) obj.k2 = temp;
                temp = document.getElementById (id + "_k3").value; if ("" != temp) obj.k3 = temp;
                temp = document.getElementById (id + "_k4").value; if ("" != temp) obj.k4 = temp;
                temp = document.getElementById (id + "_k5").value; if ("" != temp) obj.k5 = temp;
                temp = document.getElementById (id + "_k6").value; if ("" != temp) obj.k6 = temp;
                temp = document.getElementById (id + "_k7").value; if ("" != temp) obj.k7 = temp;
                temp = document.getElementById (id + "_k8").value; if ("" != temp) obj.k8 = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pgv1").value; if ("" != temp) obj.pgv1 = temp;
                temp = document.getElementById (id + "_pgv2").value; if ("" != temp) obj.pgv2 = temp;
                temp = document.getElementById (id + "_pgv3").value; if ("" != temp) obj.pgv3 = temp;
                temp = document.getElementById (id + "_pgv4").value; if ("" != temp) obj.pgv4 = temp;
                temp = document.getElementById (id + "_pgv5").value; if ("" != temp) obj.pgv5 = temp;
                temp = document.getElementById (id + "_pgv6").value; if ("" != temp) obj.pgv6 = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_sdb1").checked; if (temp) obj.sdb1 = true;
                temp = document.getElementById (id + "_sdb2").checked; if (temp) obj.sdb2 = true;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_t5").value; if ("" != temp) obj.t5 = temp;
                temp = document.getElementById (id + "_t6").value; if ("" != temp) obj.t6 = temp;
                temp = document.getElementById (id + "_t7").value; if ("" != temp) obj.t7 = temp;
                temp = document.getElementById (id + "_uc").value; if ("" != temp) obj.uc = temp;
                temp = document.getElementById (id + "_uo").value; if ("" != temp) obj.uo = temp;
                temp = document.getElementById (id + "_valve").checked; if (temp) obj.valve = true;

                return (obj);
            }
        }

        /**
         * Detailed hydro unit - Francis model.
         *
         * This model can be used to represent three types of governors.
         *
         */
        class GovHydroFrancis extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydroFrancis;
                if (null == bucket)
                   cim_data.GovHydroFrancis = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydroFrancis[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroFrancis";
                base.parse_element (/<cim:GovHydroFrancis.am>([\s\S]*?)<\/cim:GovHydroFrancis.am>/g, obj, "am", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.av0>([\s\S]*?)<\/cim:GovHydroFrancis.av0>/g, obj, "av0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.av1>([\s\S]*?)<\/cim:GovHydroFrancis.av1>/g, obj, "av1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.bp>([\s\S]*?)<\/cim:GovHydroFrancis.bp>/g, obj, "bp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.db1>([\s\S]*?)<\/cim:GovHydroFrancis.db1>/g, obj, "db1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.etamax>([\s\S]*?)<\/cim:GovHydroFrancis.etamax>/g, obj, "etamax", base.to_string, sub, context);
                base.parse_attribute (/<cim:GovHydroFrancis.governorControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "governorControl", sub, context);
                base.parse_element (/<cim:GovHydroFrancis.h1>([\s\S]*?)<\/cim:GovHydroFrancis.h1>/g, obj, "h1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.h2>([\s\S]*?)<\/cim:GovHydroFrancis.h2>/g, obj, "h2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.hn>([\s\S]*?)<\/cim:GovHydroFrancis.hn>/g, obj, "hn", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.kc>([\s\S]*?)<\/cim:GovHydroFrancis.kc>/g, obj, "kc", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.kg>([\s\S]*?)<\/cim:GovHydroFrancis.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.kt>([\s\S]*?)<\/cim:GovHydroFrancis.kt>/g, obj, "kt", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.qc0>([\s\S]*?)<\/cim:GovHydroFrancis.qc0>/g, obj, "qc0", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.qn>([\s\S]*?)<\/cim:GovHydroFrancis.qn>/g, obj, "qn", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.ta>([\s\S]*?)<\/cim:GovHydroFrancis.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.td>([\s\S]*?)<\/cim:GovHydroFrancis.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.ts>([\s\S]*?)<\/cim:GovHydroFrancis.ts>/g, obj, "ts", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.twnc>([\s\S]*?)<\/cim:GovHydroFrancis.twnc>/g, obj, "twnc", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.twng>([\s\S]*?)<\/cim:GovHydroFrancis.twng>/g, obj, "twng", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.tx>([\s\S]*?)<\/cim:GovHydroFrancis.tx>/g, obj, "tx", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.va>([\s\S]*?)<\/cim:GovHydroFrancis.va>/g, obj, "va", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.valvmax>([\s\S]*?)<\/cim:GovHydroFrancis.valvmax>/g, obj, "valvmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.valvmin>([\s\S]*?)<\/cim:GovHydroFrancis.valvmin>/g, obj, "valvmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.vc>([\s\S]*?)<\/cim:GovHydroFrancis.vc>/g, obj, "vc", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation>([\s\S]*?)<\/cim:GovHydroFrancis.waterTunnelSurgeChamberSimulation>/g, obj, "waterTunnelSurgeChamberSimulation", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroFrancis.zsfc>([\s\S]*?)<\/cim:GovHydroFrancis.zsfc>/g, obj, "zsfc", base.to_string, sub, context);
                var bucket = context.parsed.GovHydroFrancis;
                if (null == bucket)
                   context.parsed.GovHydroFrancis = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroFrancis", "am", "am",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "av0", "av0",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "av1", "av1",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "bp", "bp",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "db1", "db1",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "etamax", "etamax",  base.from_string, fields);
                base.export_attribute (obj, "GovHydroFrancis", "governorControl", "governorControl", fields);
                base.export_element (obj, "GovHydroFrancis", "h1", "h1",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "h2", "h2",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "hn", "hn",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "kg", "kg",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "kt", "kt",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "qc0", "qc0",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "qn", "qn",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "td", "td",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "ts", "ts",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "twnc", "twnc",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "twng", "twng",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "tx", "tx",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "va", "va",  base.from_float, fields);
                base.export_element (obj, "GovHydroFrancis", "valvmax", "valvmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "valvmin", "valvmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroFrancis", "vc", "vc",  base.from_float, fields);
                base.export_element (obj, "GovHydroFrancis", "waterTunnelSurgeChamberSimulation", "waterTunnelSurgeChamberSimulation",  base.from_boolean, fields);
                base.export_element (obj, "GovHydroFrancis", "zsfc", "zsfc",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydroFrancis_collapse" aria-expanded="true" aria-controls="GovHydroFrancis_collapse" style="margin-left: 10px;">GovHydroFrancis</a></legend>
                    <div id="GovHydroFrancis_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#am}}<div><b>am</b>: {{am}}</div>{{/am}}
                    {{#av0}}<div><b>av0</b>: {{av0}}</div>{{/av0}}
                    {{#av1}}<div><b>av1</b>: {{av1}}</div>{{/av1}}
                    {{#bp}}<div><b>bp</b>: {{bp}}</div>{{/bp}}
                    {{#db1}}<div><b>db1</b>: {{db1}}</div>{{/db1}}
                    {{#etamax}}<div><b>etamax</b>: {{etamax}}</div>{{/etamax}}
                    {{#governorControl}}<div><b>governorControl</b>: {{governorControl}}</div>{{/governorControl}}
                    {{#h1}}<div><b>h1</b>: {{h1}}</div>{{/h1}}
                    {{#h2}}<div><b>h2</b>: {{h2}}</div>{{/h2}}
                    {{#hn}}<div><b>hn</b>: {{hn}}</div>{{/hn}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
                    {{#kt}}<div><b>kt</b>: {{kt}}</div>{{/kt}}
                    {{#qc0}}<div><b>qc0</b>: {{qc0}}</div>{{/qc0}}
                    {{#qn}}<div><b>qn</b>: {{qn}}</div>{{/qn}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
                    {{#ts}}<div><b>ts</b>: {{ts}}</div>{{/ts}}
                    {{#twnc}}<div><b>twnc</b>: {{twnc}}</div>{{/twnc}}
                    {{#twng}}<div><b>twng</b>: {{twng}}</div>{{/twng}}
                    {{#tx}}<div><b>tx</b>: {{tx}}</div>{{/tx}}
                    {{#va}}<div><b>va</b>: {{va}}</div>{{/va}}
                    {{#valvmax}}<div><b>valvmax</b>: {{valvmax}}</div>{{/valvmax}}
                    {{#valvmin}}<div><b>valvmin</b>: {{valvmin}}</div>{{/valvmin}}
                    {{#vc}}<div><b>vc</b>: {{vc}}</div>{{/vc}}
                    {{#waterTunnelSurgeChamberSimulation}}<div><b>waterTunnelSurgeChamberSimulation</b>: {{waterTunnelSurgeChamberSimulation}}</div>{{/waterTunnelSurgeChamberSimulation}}
                    {{#zsfc}}<div><b>zsfc</b>: {{zsfc}}</div>{{/zsfc}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.FrancisGovernorControlKind = []; if (!obj.governorControl) obj.FrancisGovernorControlKind.push ({ id: '', selected: true}); for (var property in FrancisGovernorControlKind) obj.FrancisGovernorControlKind.push ({ id: property, selected: obj.governorControl && obj.governorControl.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.FrancisGovernorControlKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydroFrancis_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydroFrancis_collapse" style="margin-left: 10px;">GovHydroFrancis</a></legend>
                    <div id="{{id}}_GovHydroFrancis_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_am'>am: </label><div class='col-sm-8'><input id='{{id}}_am' class='form-control' type='text'{{#am}} value='{{am}}'{{/am}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_av0'>av0: </label><div class='col-sm-8'><input id='{{id}}_av0' class='form-control' type='text'{{#av0}} value='{{av0}}'{{/av0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_av1'>av1: </label><div class='col-sm-8'><input id='{{id}}_av1' class='form-control' type='text'{{#av1}} value='{{av1}}'{{/av1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bp'>bp: </label><div class='col-sm-8'><input id='{{id}}_bp' class='form-control' type='text'{{#bp}} value='{{bp}}'{{/bp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db1'>db1: </label><div class='col-sm-8'><input id='{{id}}_db1' class='form-control' type='text'{{#db1}} value='{{db1}}'{{/db1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_etamax'>etamax: </label><div class='col-sm-8'><input id='{{id}}_etamax' class='form-control' type='text'{{#etamax}} value='{{etamax}}'{{/etamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_governorControl'>governorControl: </label><div class='col-sm-8'><select id='{{id}}_governorControl' class='form-control'>{{#FrancisGovernorControlKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/FrancisGovernorControlKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_h1'>h1: </label><div class='col-sm-8'><input id='{{id}}_h1' class='form-control' type='text'{{#h1}} value='{{h1}}'{{/h1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_h2'>h2: </label><div class='col-sm-8'><input id='{{id}}_h2' class='form-control' type='text'{{#h2}} value='{{h2}}'{{/h2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hn'>hn: </label><div class='col-sm-8'><input id='{{id}}_hn' class='form-control' type='text'{{#hn}} value='{{hn}}'{{/hn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kg'>kg: </label><div class='col-sm-8'><input id='{{id}}_kg' class='form-control' type='text'{{#kg}} value='{{kg}}'{{/kg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kt'>kt: </label><div class='col-sm-8'><input id='{{id}}_kt' class='form-control' type='text'{{#kt}} value='{{kt}}'{{/kt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qc0'>qc0: </label><div class='col-sm-8'><input id='{{id}}_qc0' class='form-control' type='text'{{#qc0}} value='{{qc0}}'{{/qc0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qn'>qn: </label><div class='col-sm-8'><input id='{{id}}_qn' class='form-control' type='text'{{#qn}} value='{{qn}}'{{/qn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td'>td: </label><div class='col-sm-8'><input id='{{id}}_td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ts'>ts: </label><div class='col-sm-8'><input id='{{id}}_ts' class='form-control' type='text'{{#ts}} value='{{ts}}'{{/ts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_twnc'>twnc: </label><div class='col-sm-8'><input id='{{id}}_twnc' class='form-control' type='text'{{#twnc}} value='{{twnc}}'{{/twnc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_twng'>twng: </label><div class='col-sm-8'><input id='{{id}}_twng' class='form-control' type='text'{{#twng}} value='{{twng}}'{{/twng}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tx'>tx: </label><div class='col-sm-8'><input id='{{id}}_tx' class='form-control' type='text'{{#tx}} value='{{tx}}'{{/tx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_va'>va: </label><div class='col-sm-8'><input id='{{id}}_va' class='form-control' type='text'{{#va}} value='{{va}}'{{/va}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_valvmax'>valvmax: </label><div class='col-sm-8'><input id='{{id}}_valvmax' class='form-control' type='text'{{#valvmax}} value='{{valvmax}}'{{/valvmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_valvmin'>valvmin: </label><div class='col-sm-8'><input id='{{id}}_valvmin' class='form-control' type='text'{{#valvmin}} value='{{valvmin}}'{{/valvmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vc'>vc: </label><div class='col-sm-8'><input id='{{id}}_vc' class='form-control' type='text'{{#vc}} value='{{vc}}'{{/vc}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_waterTunnelSurgeChamberSimulation'>waterTunnelSurgeChamberSimulation: </label><div class='col-sm-8'><input id='{{id}}_waterTunnelSurgeChamberSimulation' class='form-check-input' type='checkbox'{{#waterTunnelSurgeChamberSimulation}} checked{{/waterTunnelSurgeChamberSimulation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_zsfc'>zsfc: </label><div class='col-sm-8'><input id='{{id}}_zsfc' class='form-control' type='text'{{#zsfc}} value='{{zsfc}}'{{/zsfc}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydroFrancis" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_am").value; if ("" != temp) obj.am = temp;
                temp = document.getElementById (id + "_av0").value; if ("" != temp) obj.av0 = temp;
                temp = document.getElementById (id + "_av1").value; if ("" != temp) obj.av1 = temp;
                temp = document.getElementById (id + "_bp").value; if ("" != temp) obj.bp = temp;
                temp = document.getElementById (id + "_db1").value; if ("" != temp) obj.db1 = temp;
                temp = document.getElementById (id + "_etamax").value; if ("" != temp) obj.etamax = temp;
                temp = document.getElementById (id + "_governorControl").value; if ("" != temp) { temp = FrancisGovernorControlKind[temp]; if ("undefined" != typeof (temp)) obj.governorControl = "#http://iec.ch/TC57/2013/CIM-schema-cim16#FrancisGovernorControlKind." + temp; }
                temp = document.getElementById (id + "_h1").value; if ("" != temp) obj.h1 = temp;
                temp = document.getElementById (id + "_h2").value; if ("" != temp) obj.h2 = temp;
                temp = document.getElementById (id + "_hn").value; if ("" != temp) obj.hn = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kg").value; if ("" != temp) obj.kg = temp;
                temp = document.getElementById (id + "_kt").value; if ("" != temp) obj.kt = temp;
                temp = document.getElementById (id + "_qc0").value; if ("" != temp) obj.qc0 = temp;
                temp = document.getElementById (id + "_qn").value; if ("" != temp) obj.qn = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_td").value; if ("" != temp) obj.td = temp;
                temp = document.getElementById (id + "_ts").value; if ("" != temp) obj.ts = temp;
                temp = document.getElementById (id + "_twnc").value; if ("" != temp) obj.twnc = temp;
                temp = document.getElementById (id + "_twng").value; if ("" != temp) obj.twng = temp;
                temp = document.getElementById (id + "_tx").value; if ("" != temp) obj.tx = temp;
                temp = document.getElementById (id + "_va").value; if ("" != temp) obj.va = temp;
                temp = document.getElementById (id + "_valvmax").value; if ("" != temp) obj.valvmax = temp;
                temp = document.getElementById (id + "_valvmin").value; if ("" != temp) obj.valvmin = temp;
                temp = document.getElementById (id + "_vc").value; if ("" != temp) obj.vc = temp;
                temp = document.getElementById (id + "_waterTunnelSurgeChamberSimulation").checked; if (temp) obj.waterTunnelSurgeChamberSimulation = true;
                temp = document.getElementById (id + "_zsfc").value; if ("" != temp) obj.zsfc = temp;

                return (obj);
            }
        }

        /**
         * Generic turbogas.
         *
         */
        class GovGAST4 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovGAST4;
                if (null == bucket)
                   cim_data.GovGAST4 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovGAST4[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovGAST4";
                base.parse_element (/<cim:GovGAST4.bp>([\s\S]*?)<\/cim:GovGAST4.bp>/g, obj, "bp", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.ktm>([\s\S]*?)<\/cim:GovGAST4.ktm>/g, obj, "ktm", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.mnef>([\s\S]*?)<\/cim:GovGAST4.mnef>/g, obj, "mnef", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.mxef>([\s\S]*?)<\/cim:GovGAST4.mxef>/g, obj, "mxef", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.rymn>([\s\S]*?)<\/cim:GovGAST4.rymn>/g, obj, "rymn", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.rymx>([\s\S]*?)<\/cim:GovGAST4.rymx>/g, obj, "rymx", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.ta>([\s\S]*?)<\/cim:GovGAST4.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.tc>([\s\S]*?)<\/cim:GovGAST4.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.tcm>([\s\S]*?)<\/cim:GovGAST4.tcm>/g, obj, "tcm", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.tm>([\s\S]*?)<\/cim:GovGAST4.tm>/g, obj, "tm", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST4.tv>([\s\S]*?)<\/cim:GovGAST4.tv>/g, obj, "tv", base.to_string, sub, context);
                var bucket = context.parsed.GovGAST4;
                if (null == bucket)
                   context.parsed.GovGAST4 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovGAST4", "bp", "bp",  base.from_string, fields);
                base.export_element (obj, "GovGAST4", "ktm", "ktm",  base.from_string, fields);
                base.export_element (obj, "GovGAST4", "mnef", "mnef",  base.from_string, fields);
                base.export_element (obj, "GovGAST4", "mxef", "mxef",  base.from_string, fields);
                base.export_element (obj, "GovGAST4", "rymn", "rymn",  base.from_string, fields);
                base.export_element (obj, "GovGAST4", "rymx", "rymx",  base.from_string, fields);
                base.export_element (obj, "GovGAST4", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "GovGAST4", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "GovGAST4", "tcm", "tcm",  base.from_string, fields);
                base.export_element (obj, "GovGAST4", "tm", "tm",  base.from_string, fields);
                base.export_element (obj, "GovGAST4", "tv", "tv",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovGAST4_collapse" aria-expanded="true" aria-controls="GovGAST4_collapse" style="margin-left: 10px;">GovGAST4</a></legend>
                    <div id="GovGAST4_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#bp}}<div><b>bp</b>: {{bp}}</div>{{/bp}}
                    {{#ktm}}<div><b>ktm</b>: {{ktm}}</div>{{/ktm}}
                    {{#mnef}}<div><b>mnef</b>: {{mnef}}</div>{{/mnef}}
                    {{#mxef}}<div><b>mxef</b>: {{mxef}}</div>{{/mxef}}
                    {{#rymn}}<div><b>rymn</b>: {{rymn}}</div>{{/rymn}}
                    {{#rymx}}<div><b>rymx</b>: {{rymx}}</div>{{/rymx}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#tcm}}<div><b>tcm</b>: {{tcm}}</div>{{/tcm}}
                    {{#tm}}<div><b>tm</b>: {{tm}}</div>{{/tm}}
                    {{#tv}}<div><b>tv</b>: {{tv}}</div>{{/tv}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovGAST4_collapse" aria-expanded="true" aria-controls="{{id}}_GovGAST4_collapse" style="margin-left: 10px;">GovGAST4</a></legend>
                    <div id="{{id}}_GovGAST4_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bp'>bp: </label><div class='col-sm-8'><input id='{{id}}_bp' class='form-control' type='text'{{#bp}} value='{{bp}}'{{/bp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ktm'>ktm: </label><div class='col-sm-8'><input id='{{id}}_ktm' class='form-control' type='text'{{#ktm}} value='{{ktm}}'{{/ktm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mnef'>mnef: </label><div class='col-sm-8'><input id='{{id}}_mnef' class='form-control' type='text'{{#mnef}} value='{{mnef}}'{{/mnef}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mxef'>mxef: </label><div class='col-sm-8'><input id='{{id}}_mxef' class='form-control' type='text'{{#mxef}} value='{{mxef}}'{{/mxef}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rymn'>rymn: </label><div class='col-sm-8'><input id='{{id}}_rymn' class='form-control' type='text'{{#rymn}} value='{{rymn}}'{{/rymn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rymx'>rymx: </label><div class='col-sm-8'><input id='{{id}}_rymx' class='form-control' type='text'{{#rymx}} value='{{rymx}}'{{/rymx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tcm'>tcm: </label><div class='col-sm-8'><input id='{{id}}_tcm' class='form-control' type='text'{{#tcm}} value='{{tcm}}'{{/tcm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tm'>tm: </label><div class='col-sm-8'><input id='{{id}}_tm' class='form-control' type='text'{{#tm}} value='{{tm}}'{{/tm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tv'>tv: </label><div class='col-sm-8'><input id='{{id}}_tv' class='form-control' type='text'{{#tv}} value='{{tv}}'{{/tv}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovGAST4" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bp").value; if ("" != temp) obj.bp = temp;
                temp = document.getElementById (id + "_ktm").value; if ("" != temp) obj.ktm = temp;
                temp = document.getElementById (id + "_mnef").value; if ("" != temp) obj.mnef = temp;
                temp = document.getElementById (id + "_mxef").value; if ("" != temp) obj.mxef = temp;
                temp = document.getElementById (id + "_rymn").value; if ("" != temp) obj.rymn = temp;
                temp = document.getElementById (id + "_rymx").value; if ("" != temp) obj.rymx = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_tcm").value; if ("" != temp) obj.tcm = temp;
                temp = document.getElementById (id + "_tm").value; if ("" != temp) obj.tm = temp;
                temp = document.getElementById (id + "_tv").value; if ("" != temp) obj.tv = temp;

                return (obj);
            }
        }

        /**
         * Simplified GovSteamIEEE1 Steam turbine governor model with Prmax limit and fast valving.
         *
         */
        class GovSteamFV3 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovSteamFV3;
                if (null == bucket)
                   cim_data.GovSteamFV3 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovSteamFV3[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovSteamFV3";
                base.parse_element (/<cim:GovSteamFV3.k>([\s\S]*?)<\/cim:GovSteamFV3.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.k1>([\s\S]*?)<\/cim:GovSteamFV3.k1>/g, obj, "k1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.k2>([\s\S]*?)<\/cim:GovSteamFV3.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.k3>([\s\S]*?)<\/cim:GovSteamFV3.k3>/g, obj, "k3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.mwbase>([\s\S]*?)<\/cim:GovSteamFV3.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.pmax>([\s\S]*?)<\/cim:GovSteamFV3.pmax>/g, obj, "pmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.pmin>([\s\S]*?)<\/cim:GovSteamFV3.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.prmax>([\s\S]*?)<\/cim:GovSteamFV3.prmax>/g, obj, "prmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.t1>([\s\S]*?)<\/cim:GovSteamFV3.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.t2>([\s\S]*?)<\/cim:GovSteamFV3.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.t3>([\s\S]*?)<\/cim:GovSteamFV3.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.t4>([\s\S]*?)<\/cim:GovSteamFV3.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.t5>([\s\S]*?)<\/cim:GovSteamFV3.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.t6>([\s\S]*?)<\/cim:GovSteamFV3.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.ta>([\s\S]*?)<\/cim:GovSteamFV3.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.tb>([\s\S]*?)<\/cim:GovSteamFV3.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.tc>([\s\S]*?)<\/cim:GovSteamFV3.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovSteamFV3.uc>([\s\S]*?)<\/cim:GovSteamFV3.uc>/g, obj, "uc", base.to_float, sub, context);
                base.parse_element (/<cim:GovSteamFV3.uo>([\s\S]*?)<\/cim:GovSteamFV3.uo>/g, obj, "uo", base.to_float, sub, context);
                var bucket = context.parsed.GovSteamFV3;
                if (null == bucket)
                   context.parsed.GovSteamFV3 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovSteamFV3", "k", "k",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "k1", "k1",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "k2", "k2",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "k3", "k3",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "pmax", "pmax",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "prmax", "prmax",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "GovSteamFV3", "uc", "uc",  base.from_float, fields);
                base.export_element (obj, "GovSteamFV3", "uo", "uo",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovSteamFV3_collapse" aria-expanded="true" aria-controls="GovSteamFV3_collapse" style="margin-left: 10px;">GovSteamFV3</a></legend>
                    <div id="GovSteamFV3_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pmax}}<div><b>pmax</b>: {{pmax}}</div>{{/pmax}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#prmax}}<div><b>prmax</b>: {{prmax}}</div>{{/prmax}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
                    {{#uo}}<div><b>uo</b>: {{uo}}</div>{{/uo}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovSteamFV3_collapse" aria-expanded="true" aria-controls="{{id}}_GovSteamFV3_collapse" style="margin-left: 10px;">GovSteamFV3</a></legend>
                    <div id="{{id}}_GovSteamFV3_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k3'>k3: </label><div class='col-sm-8'><input id='{{id}}_k3' class='form-control' type='text'{{#k3}} value='{{k3}}'{{/k3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmax'>pmax: </label><div class='col-sm-8'><input id='{{id}}_pmax' class='form-control' type='text'{{#pmax}} value='{{pmax}}'{{/pmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_prmax'>prmax: </label><div class='col-sm-8'><input id='{{id}}_prmax' class='form-control' type='text'{{#prmax}} value='{{prmax}}'{{/prmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uc'>uc: </label><div class='col-sm-8'><input id='{{id}}_uc' class='form-control' type='text'{{#uc}} value='{{uc}}'{{/uc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uo'>uo: </label><div class='col-sm-8'><input id='{{id}}_uo' class='form-control' type='text'{{#uo}} value='{{uo}}'{{/uo}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovSteamFV3" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_k").value; if ("" != temp) obj.k = temp;
                temp = document.getElementById (id + "_k1").value; if ("" != temp) obj.k1 = temp;
                temp = document.getElementById (id + "_k2").value; if ("" != temp) obj.k2 = temp;
                temp = document.getElementById (id + "_k3").value; if ("" != temp) obj.k3 = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pmax").value; if ("" != temp) obj.pmax = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_prmax").value; if ("" != temp) obj.prmax = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_t5").value; if ("" != temp) obj.t5 = temp;
                temp = document.getElementById (id + "_t6").value; if ("" != temp) obj.t6 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_uc").value; if ("" != temp) obj.uc = temp;
                temp = document.getElementById (id + "_uo").value; if ("" != temp) obj.uo = temp;

                return (obj);
            }
        }

        /**
         * Woodward Electric Hydro Governor Model.
         *
         */
        class GovHydroWEH extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovHydroWEH;
                if (null == bucket)
                   cim_data.GovHydroWEH = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovHydroWEH[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovHydroWEH";
                base.parse_element (/<cim:GovHydroWEH.db>([\s\S]*?)<\/cim:GovHydroWEH.db>/g, obj, "db", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.dicn>([\s\S]*?)<\/cim:GovHydroWEH.dicn>/g, obj, "dicn", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.dpv>([\s\S]*?)<\/cim:GovHydroWEH.dpv>/g, obj, "dpv", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.dturb>([\s\S]*?)<\/cim:GovHydroWEH.dturb>/g, obj, "dturb", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.feedbackSignal>([\s\S]*?)<\/cim:GovHydroWEH.feedbackSignal>/g, obj, "feedbackSignal", base.to_boolean, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fl1>([\s\S]*?)<\/cim:GovHydroWEH.fl1>/g, obj, "fl1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fl2>([\s\S]*?)<\/cim:GovHydroWEH.fl2>/g, obj, "fl2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fl3>([\s\S]*?)<\/cim:GovHydroWEH.fl3>/g, obj, "fl3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fl4>([\s\S]*?)<\/cim:GovHydroWEH.fl4>/g, obj, "fl4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fl5>([\s\S]*?)<\/cim:GovHydroWEH.fl5>/g, obj, "fl5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp1>([\s\S]*?)<\/cim:GovHydroWEH.fp1>/g, obj, "fp1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp10>([\s\S]*?)<\/cim:GovHydroWEH.fp10>/g, obj, "fp10", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp2>([\s\S]*?)<\/cim:GovHydroWEH.fp2>/g, obj, "fp2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp3>([\s\S]*?)<\/cim:GovHydroWEH.fp3>/g, obj, "fp3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp4>([\s\S]*?)<\/cim:GovHydroWEH.fp4>/g, obj, "fp4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp5>([\s\S]*?)<\/cim:GovHydroWEH.fp5>/g, obj, "fp5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp6>([\s\S]*?)<\/cim:GovHydroWEH.fp6>/g, obj, "fp6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp7>([\s\S]*?)<\/cim:GovHydroWEH.fp7>/g, obj, "fp7", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp8>([\s\S]*?)<\/cim:GovHydroWEH.fp8>/g, obj, "fp8", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.fp9>([\s\S]*?)<\/cim:GovHydroWEH.fp9>/g, obj, "fp9", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gmax>([\s\S]*?)<\/cim:GovHydroWEH.gmax>/g, obj, "gmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gmin>([\s\S]*?)<\/cim:GovHydroWEH.gmin>/g, obj, "gmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gtmxcl>([\s\S]*?)<\/cim:GovHydroWEH.gtmxcl>/g, obj, "gtmxcl", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gtmxop>([\s\S]*?)<\/cim:GovHydroWEH.gtmxop>/g, obj, "gtmxop", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gv1>([\s\S]*?)<\/cim:GovHydroWEH.gv1>/g, obj, "gv1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gv2>([\s\S]*?)<\/cim:GovHydroWEH.gv2>/g, obj, "gv2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gv3>([\s\S]*?)<\/cim:GovHydroWEH.gv3>/g, obj, "gv3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gv4>([\s\S]*?)<\/cim:GovHydroWEH.gv4>/g, obj, "gv4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.gv5>([\s\S]*?)<\/cim:GovHydroWEH.gv5>/g, obj, "gv5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.kd>([\s\S]*?)<\/cim:GovHydroWEH.kd>/g, obj, "kd", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.ki>([\s\S]*?)<\/cim:GovHydroWEH.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.kp>([\s\S]*?)<\/cim:GovHydroWEH.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.mwbase>([\s\S]*?)<\/cim:GovHydroWEH.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss1>([\s\S]*?)<\/cim:GovHydroWEH.pmss1>/g, obj, "pmss1", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss10>([\s\S]*?)<\/cim:GovHydroWEH.pmss10>/g, obj, "pmss10", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss2>([\s\S]*?)<\/cim:GovHydroWEH.pmss2>/g, obj, "pmss2", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss3>([\s\S]*?)<\/cim:GovHydroWEH.pmss3>/g, obj, "pmss3", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss4>([\s\S]*?)<\/cim:GovHydroWEH.pmss4>/g, obj, "pmss4", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss5>([\s\S]*?)<\/cim:GovHydroWEH.pmss5>/g, obj, "pmss5", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss6>([\s\S]*?)<\/cim:GovHydroWEH.pmss6>/g, obj, "pmss6", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss7>([\s\S]*?)<\/cim:GovHydroWEH.pmss7>/g, obj, "pmss7", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss8>([\s\S]*?)<\/cim:GovHydroWEH.pmss8>/g, obj, "pmss8", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.pmss9>([\s\S]*?)<\/cim:GovHydroWEH.pmss9>/g, obj, "pmss9", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.rpg>([\s\S]*?)<\/cim:GovHydroWEH.rpg>/g, obj, "rpg", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroWEH.rpp>([\s\S]*?)<\/cim:GovHydroWEH.rpp>/g, obj, "rpp", base.to_float, sub, context);
                base.parse_element (/<cim:GovHydroWEH.td>([\s\S]*?)<\/cim:GovHydroWEH.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.tdv>([\s\S]*?)<\/cim:GovHydroWEH.tdv>/g, obj, "tdv", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.tg>([\s\S]*?)<\/cim:GovHydroWEH.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.tp>([\s\S]*?)<\/cim:GovHydroWEH.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.tpe>([\s\S]*?)<\/cim:GovHydroWEH.tpe>/g, obj, "tpe", base.to_string, sub, context);
                base.parse_element (/<cim:GovHydroWEH.tw>([\s\S]*?)<\/cim:GovHydroWEH.tw>/g, obj, "tw", base.to_string, sub, context);
                var bucket = context.parsed.GovHydroWEH;
                if (null == bucket)
                   context.parsed.GovHydroWEH = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovHydroWEH", "db", "db",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "dicn", "dicn",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "dpv", "dpv",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "dturb", "dturb",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "feedbackSignal", "feedbackSignal",  base.from_boolean, fields);
                base.export_element (obj, "GovHydroWEH", "fl1", "fl1",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fl2", "fl2",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fl3", "fl3",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fl4", "fl4",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fl5", "fl5",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp1", "fp1",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp10", "fp10",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp2", "fp2",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp3", "fp3",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp4", "fp4",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp5", "fp5",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp6", "fp6",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp7", "fp7",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp8", "fp8",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "fp9", "fp9",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gmax", "gmax",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gmin", "gmin",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gtmxcl", "gtmxcl",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gtmxop", "gtmxop",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gv1", "gv1",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gv2", "gv2",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gv3", "gv3",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gv4", "gv4",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "gv5", "gv5",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss1", "pmss1",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss10", "pmss10",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss2", "pmss2",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss3", "pmss3",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss4", "pmss4",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss5", "pmss5",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss6", "pmss6",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss7", "pmss7",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss8", "pmss8",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "pmss9", "pmss9",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "rpg", "rpg",  base.from_float, fields);
                base.export_element (obj, "GovHydroWEH", "rpp", "rpp",  base.from_float, fields);
                base.export_element (obj, "GovHydroWEH", "td", "td",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "tdv", "tdv",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "tg", "tg",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "tp", "tp",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "tpe", "tpe",  base.from_string, fields);
                base.export_element (obj, "GovHydroWEH", "tw", "tw",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovHydroWEH_collapse" aria-expanded="true" aria-controls="GovHydroWEH_collapse" style="margin-left: 10px;">GovHydroWEH</a></legend>
                    <div id="GovHydroWEH_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#db}}<div><b>db</b>: {{db}}</div>{{/db}}
                    {{#dicn}}<div><b>dicn</b>: {{dicn}}</div>{{/dicn}}
                    {{#dpv}}<div><b>dpv</b>: {{dpv}}</div>{{/dpv}}
                    {{#dturb}}<div><b>dturb</b>: {{dturb}}</div>{{/dturb}}
                    {{#feedbackSignal}}<div><b>feedbackSignal</b>: {{feedbackSignal}}</div>{{/feedbackSignal}}
                    {{#fl1}}<div><b>fl1</b>: {{fl1}}</div>{{/fl1}}
                    {{#fl2}}<div><b>fl2</b>: {{fl2}}</div>{{/fl2}}
                    {{#fl3}}<div><b>fl3</b>: {{fl3}}</div>{{/fl3}}
                    {{#fl4}}<div><b>fl4</b>: {{fl4}}</div>{{/fl4}}
                    {{#fl5}}<div><b>fl5</b>: {{fl5}}</div>{{/fl5}}
                    {{#fp1}}<div><b>fp1</b>: {{fp1}}</div>{{/fp1}}
                    {{#fp10}}<div><b>fp10</b>: {{fp10}}</div>{{/fp10}}
                    {{#fp2}}<div><b>fp2</b>: {{fp2}}</div>{{/fp2}}
                    {{#fp3}}<div><b>fp3</b>: {{fp3}}</div>{{/fp3}}
                    {{#fp4}}<div><b>fp4</b>: {{fp4}}</div>{{/fp4}}
                    {{#fp5}}<div><b>fp5</b>: {{fp5}}</div>{{/fp5}}
                    {{#fp6}}<div><b>fp6</b>: {{fp6}}</div>{{/fp6}}
                    {{#fp7}}<div><b>fp7</b>: {{fp7}}</div>{{/fp7}}
                    {{#fp8}}<div><b>fp8</b>: {{fp8}}</div>{{/fp8}}
                    {{#fp9}}<div><b>fp9</b>: {{fp9}}</div>{{/fp9}}
                    {{#gmax}}<div><b>gmax</b>: {{gmax}}</div>{{/gmax}}
                    {{#gmin}}<div><b>gmin</b>: {{gmin}}</div>{{/gmin}}
                    {{#gtmxcl}}<div><b>gtmxcl</b>: {{gtmxcl}}</div>{{/gtmxcl}}
                    {{#gtmxop}}<div><b>gtmxop</b>: {{gtmxop}}</div>{{/gtmxop}}
                    {{#gv1}}<div><b>gv1</b>: {{gv1}}</div>{{/gv1}}
                    {{#gv2}}<div><b>gv2</b>: {{gv2}}</div>{{/gv2}}
                    {{#gv3}}<div><b>gv3</b>: {{gv3}}</div>{{/gv3}}
                    {{#gv4}}<div><b>gv4</b>: {{gv4}}</div>{{/gv4}}
                    {{#gv5}}<div><b>gv5</b>: {{gv5}}</div>{{/gv5}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pmss1}}<div><b>pmss1</b>: {{pmss1}}</div>{{/pmss1}}
                    {{#pmss10}}<div><b>pmss10</b>: {{pmss10}}</div>{{/pmss10}}
                    {{#pmss2}}<div><b>pmss2</b>: {{pmss2}}</div>{{/pmss2}}
                    {{#pmss3}}<div><b>pmss3</b>: {{pmss3}}</div>{{/pmss3}}
                    {{#pmss4}}<div><b>pmss4</b>: {{pmss4}}</div>{{/pmss4}}
                    {{#pmss5}}<div><b>pmss5</b>: {{pmss5}}</div>{{/pmss5}}
                    {{#pmss6}}<div><b>pmss6</b>: {{pmss6}}</div>{{/pmss6}}
                    {{#pmss7}}<div><b>pmss7</b>: {{pmss7}}</div>{{/pmss7}}
                    {{#pmss8}}<div><b>pmss8</b>: {{pmss8}}</div>{{/pmss8}}
                    {{#pmss9}}<div><b>pmss9</b>: {{pmss9}}</div>{{/pmss9}}
                    {{#rpg}}<div><b>rpg</b>: {{rpg}}</div>{{/rpg}}
                    {{#rpp}}<div><b>rpp</b>: {{rpp}}</div>{{/rpp}}
                    {{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
                    {{#tdv}}<div><b>tdv</b>: {{tdv}}</div>{{/tdv}}
                    {{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
                    {{#tpe}}<div><b>tpe</b>: {{tpe}}</div>{{/tpe}}
                    {{#tw}}<div><b>tw</b>: {{tw}}</div>{{/tw}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovHydroWEH_collapse" aria-expanded="true" aria-controls="{{id}}_GovHydroWEH_collapse" style="margin-left: 10px;">GovHydroWEH</a></legend>
                    <div id="{{id}}_GovHydroWEH_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_db'>db: </label><div class='col-sm-8'><input id='{{id}}_db' class='form-control' type='text'{{#db}} value='{{db}}'{{/db}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dicn'>dicn: </label><div class='col-sm-8'><input id='{{id}}_dicn' class='form-control' type='text'{{#dicn}} value='{{dicn}}'{{/dicn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dpv'>dpv: </label><div class='col-sm-8'><input id='{{id}}_dpv' class='form-control' type='text'{{#dpv}} value='{{dpv}}'{{/dpv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dturb'>dturb: </label><div class='col-sm-8'><input id='{{id}}_dturb' class='form-control' type='text'{{#dturb}} value='{{dturb}}'{{/dturb}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_feedbackSignal'>feedbackSignal: </label><div class='col-sm-8'><input id='{{id}}_feedbackSignal' class='form-check-input' type='checkbox'{{#feedbackSignal}} checked{{/feedbackSignal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fl1'>fl1: </label><div class='col-sm-8'><input id='{{id}}_fl1' class='form-control' type='text'{{#fl1}} value='{{fl1}}'{{/fl1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fl2'>fl2: </label><div class='col-sm-8'><input id='{{id}}_fl2' class='form-control' type='text'{{#fl2}} value='{{fl2}}'{{/fl2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fl3'>fl3: </label><div class='col-sm-8'><input id='{{id}}_fl3' class='form-control' type='text'{{#fl3}} value='{{fl3}}'{{/fl3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fl4'>fl4: </label><div class='col-sm-8'><input id='{{id}}_fl4' class='form-control' type='text'{{#fl4}} value='{{fl4}}'{{/fl4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fl5'>fl5: </label><div class='col-sm-8'><input id='{{id}}_fl5' class='form-control' type='text'{{#fl5}} value='{{fl5}}'{{/fl5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fp1'>fp1: </label><div class='col-sm-8'><input id='{{id}}_fp1' class='form-control' type='text'{{#fp1}} value='{{fp1}}'{{/fp1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fp10'>fp10: </label><div class='col-sm-8'><input id='{{id}}_fp10' class='form-control' type='text'{{#fp10}} value='{{fp10}}'{{/fp10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fp2'>fp2: </label><div class='col-sm-8'><input id='{{id}}_fp2' class='form-control' type='text'{{#fp2}} value='{{fp2}}'{{/fp2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fp3'>fp3: </label><div class='col-sm-8'><input id='{{id}}_fp3' class='form-control' type='text'{{#fp3}} value='{{fp3}}'{{/fp3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fp4'>fp4: </label><div class='col-sm-8'><input id='{{id}}_fp4' class='form-control' type='text'{{#fp4}} value='{{fp4}}'{{/fp4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fp5'>fp5: </label><div class='col-sm-8'><input id='{{id}}_fp5' class='form-control' type='text'{{#fp5}} value='{{fp5}}'{{/fp5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fp6'>fp6: </label><div class='col-sm-8'><input id='{{id}}_fp6' class='form-control' type='text'{{#fp6}} value='{{fp6}}'{{/fp6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fp7'>fp7: </label><div class='col-sm-8'><input id='{{id}}_fp7' class='form-control' type='text'{{#fp7}} value='{{fp7}}'{{/fp7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fp8'>fp8: </label><div class='col-sm-8'><input id='{{id}}_fp8' class='form-control' type='text'{{#fp8}} value='{{fp8}}'{{/fp8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fp9'>fp9: </label><div class='col-sm-8'><input id='{{id}}_fp9' class='form-control' type='text'{{#fp9}} value='{{fp9}}'{{/fp9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmax'>gmax: </label><div class='col-sm-8'><input id='{{id}}_gmax' class='form-control' type='text'{{#gmax}} value='{{gmax}}'{{/gmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmin'>gmin: </label><div class='col-sm-8'><input id='{{id}}_gmin' class='form-control' type='text'{{#gmin}} value='{{gmin}}'{{/gmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gtmxcl'>gtmxcl: </label><div class='col-sm-8'><input id='{{id}}_gtmxcl' class='form-control' type='text'{{#gtmxcl}} value='{{gtmxcl}}'{{/gtmxcl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gtmxop'>gtmxop: </label><div class='col-sm-8'><input id='{{id}}_gtmxop' class='form-control' type='text'{{#gtmxop}} value='{{gtmxop}}'{{/gtmxop}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv1'>gv1: </label><div class='col-sm-8'><input id='{{id}}_gv1' class='form-control' type='text'{{#gv1}} value='{{gv1}}'{{/gv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv2'>gv2: </label><div class='col-sm-8'><input id='{{id}}_gv2' class='form-control' type='text'{{#gv2}} value='{{gv2}}'{{/gv2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv3'>gv3: </label><div class='col-sm-8'><input id='{{id}}_gv3' class='form-control' type='text'{{#gv3}} value='{{gv3}}'{{/gv3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv4'>gv4: </label><div class='col-sm-8'><input id='{{id}}_gv4' class='form-control' type='text'{{#gv4}} value='{{gv4}}'{{/gv4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gv5'>gv5: </label><div class='col-sm-8'><input id='{{id}}_gv5' class='form-control' type='text'{{#gv5}} value='{{gv5}}'{{/gv5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmss1'>pmss1: </label><div class='col-sm-8'><input id='{{id}}_pmss1' class='form-control' type='text'{{#pmss1}} value='{{pmss1}}'{{/pmss1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmss10'>pmss10: </label><div class='col-sm-8'><input id='{{id}}_pmss10' class='form-control' type='text'{{#pmss10}} value='{{pmss10}}'{{/pmss10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmss2'>pmss2: </label><div class='col-sm-8'><input id='{{id}}_pmss2' class='form-control' type='text'{{#pmss2}} value='{{pmss2}}'{{/pmss2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmss3'>pmss3: </label><div class='col-sm-8'><input id='{{id}}_pmss3' class='form-control' type='text'{{#pmss3}} value='{{pmss3}}'{{/pmss3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmss4'>pmss4: </label><div class='col-sm-8'><input id='{{id}}_pmss4' class='form-control' type='text'{{#pmss4}} value='{{pmss4}}'{{/pmss4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmss5'>pmss5: </label><div class='col-sm-8'><input id='{{id}}_pmss5' class='form-control' type='text'{{#pmss5}} value='{{pmss5}}'{{/pmss5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmss6'>pmss6: </label><div class='col-sm-8'><input id='{{id}}_pmss6' class='form-control' type='text'{{#pmss6}} value='{{pmss6}}'{{/pmss6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmss7'>pmss7: </label><div class='col-sm-8'><input id='{{id}}_pmss7' class='form-control' type='text'{{#pmss7}} value='{{pmss7}}'{{/pmss7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmss8'>pmss8: </label><div class='col-sm-8'><input id='{{id}}_pmss8' class='form-control' type='text'{{#pmss8}} value='{{pmss8}}'{{/pmss8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmss9'>pmss9: </label><div class='col-sm-8'><input id='{{id}}_pmss9' class='form-control' type='text'{{#pmss9}} value='{{pmss9}}'{{/pmss9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rpg'>rpg: </label><div class='col-sm-8'><input id='{{id}}_rpg' class='form-control' type='text'{{#rpg}} value='{{rpg}}'{{/rpg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rpp'>rpp: </label><div class='col-sm-8'><input id='{{id}}_rpp' class='form-control' type='text'{{#rpp}} value='{{rpp}}'{{/rpp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td'>td: </label><div class='col-sm-8'><input id='{{id}}_td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tdv'>tdv: </label><div class='col-sm-8'><input id='{{id}}_tdv' class='form-control' type='text'{{#tdv}} value='{{tdv}}'{{/tdv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tg'>tg: </label><div class='col-sm-8'><input id='{{id}}_tg' class='form-control' type='text'{{#tg}} value='{{tg}}'{{/tg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpe'>tpe: </label><div class='col-sm-8'><input id='{{id}}_tpe' class='form-control' type='text'{{#tpe}} value='{{tpe}}'{{/tpe}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw'>tw: </label><div class='col-sm-8'><input id='{{id}}_tw' class='form-control' type='text'{{#tw}} value='{{tw}}'{{/tw}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovHydroWEH" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_db").value; if ("" != temp) obj.db = temp;
                temp = document.getElementById (id + "_dicn").value; if ("" != temp) obj.dicn = temp;
                temp = document.getElementById (id + "_dpv").value; if ("" != temp) obj.dpv = temp;
                temp = document.getElementById (id + "_dturb").value; if ("" != temp) obj.dturb = temp;
                temp = document.getElementById (id + "_feedbackSignal").checked; if (temp) obj.feedbackSignal = true;
                temp = document.getElementById (id + "_fl1").value; if ("" != temp) obj.fl1 = temp;
                temp = document.getElementById (id + "_fl2").value; if ("" != temp) obj.fl2 = temp;
                temp = document.getElementById (id + "_fl3").value; if ("" != temp) obj.fl3 = temp;
                temp = document.getElementById (id + "_fl4").value; if ("" != temp) obj.fl4 = temp;
                temp = document.getElementById (id + "_fl5").value; if ("" != temp) obj.fl5 = temp;
                temp = document.getElementById (id + "_fp1").value; if ("" != temp) obj.fp1 = temp;
                temp = document.getElementById (id + "_fp10").value; if ("" != temp) obj.fp10 = temp;
                temp = document.getElementById (id + "_fp2").value; if ("" != temp) obj.fp2 = temp;
                temp = document.getElementById (id + "_fp3").value; if ("" != temp) obj.fp3 = temp;
                temp = document.getElementById (id + "_fp4").value; if ("" != temp) obj.fp4 = temp;
                temp = document.getElementById (id + "_fp5").value; if ("" != temp) obj.fp5 = temp;
                temp = document.getElementById (id + "_fp6").value; if ("" != temp) obj.fp6 = temp;
                temp = document.getElementById (id + "_fp7").value; if ("" != temp) obj.fp7 = temp;
                temp = document.getElementById (id + "_fp8").value; if ("" != temp) obj.fp8 = temp;
                temp = document.getElementById (id + "_fp9").value; if ("" != temp) obj.fp9 = temp;
                temp = document.getElementById (id + "_gmax").value; if ("" != temp) obj.gmax = temp;
                temp = document.getElementById (id + "_gmin").value; if ("" != temp) obj.gmin = temp;
                temp = document.getElementById (id + "_gtmxcl").value; if ("" != temp) obj.gtmxcl = temp;
                temp = document.getElementById (id + "_gtmxop").value; if ("" != temp) obj.gtmxop = temp;
                temp = document.getElementById (id + "_gv1").value; if ("" != temp) obj.gv1 = temp;
                temp = document.getElementById (id + "_gv2").value; if ("" != temp) obj.gv2 = temp;
                temp = document.getElementById (id + "_gv3").value; if ("" != temp) obj.gv3 = temp;
                temp = document.getElementById (id + "_gv4").value; if ("" != temp) obj.gv4 = temp;
                temp = document.getElementById (id + "_gv5").value; if ("" != temp) obj.gv5 = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_pmss1").value; if ("" != temp) obj.pmss1 = temp;
                temp = document.getElementById (id + "_pmss10").value; if ("" != temp) obj.pmss10 = temp;
                temp = document.getElementById (id + "_pmss2").value; if ("" != temp) obj.pmss2 = temp;
                temp = document.getElementById (id + "_pmss3").value; if ("" != temp) obj.pmss3 = temp;
                temp = document.getElementById (id + "_pmss4").value; if ("" != temp) obj.pmss4 = temp;
                temp = document.getElementById (id + "_pmss5").value; if ("" != temp) obj.pmss5 = temp;
                temp = document.getElementById (id + "_pmss6").value; if ("" != temp) obj.pmss6 = temp;
                temp = document.getElementById (id + "_pmss7").value; if ("" != temp) obj.pmss7 = temp;
                temp = document.getElementById (id + "_pmss8").value; if ("" != temp) obj.pmss8 = temp;
                temp = document.getElementById (id + "_pmss9").value; if ("" != temp) obj.pmss9 = temp;
                temp = document.getElementById (id + "_rpg").value; if ("" != temp) obj.rpg = temp;
                temp = document.getElementById (id + "_rpp").value; if ("" != temp) obj.rpp = temp;
                temp = document.getElementById (id + "_td").value; if ("" != temp) obj.td = temp;
                temp = document.getElementById (id + "_tdv").value; if ("" != temp) obj.tdv = temp;
                temp = document.getElementById (id + "_tg").value; if ("" != temp) obj.tg = temp;
                temp = document.getElementById (id + "_tp").value; if ("" != temp) obj.tp = temp;
                temp = document.getElementById (id + "_tpe").value; if ("" != temp) obj.tpe = temp;
                temp = document.getElementById (id + "_tw").value; if ("" != temp) obj.tw = temp;

                return (obj);
            }
        }

        /**
         * Gas turbine model.
         *
         */
        class GovGAST2 extends TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GovGAST2;
                if (null == bucket)
                   cim_data.GovGAST2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GovGAST2[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "GovGAST2";
                base.parse_element (/<cim:GovGAST2.a>([\s\S]*?)<\/cim:GovGAST2.a>/g, obj, "a", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST2.af1>([\s\S]*?)<\/cim:GovGAST2.af1>/g, obj, "af1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.af2>([\s\S]*?)<\/cim:GovGAST2.af2>/g, obj, "af2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.b>([\s\S]*?)<\/cim:GovGAST2.b>/g, obj, "b", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST2.bf1>([\s\S]*?)<\/cim:GovGAST2.bf1>/g, obj, "bf1", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.bf2>([\s\S]*?)<\/cim:GovGAST2.bf2>/g, obj, "bf2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.c>([\s\S]*?)<\/cim:GovGAST2.c>/g, obj, "c", base.to_float, sub, context);
                base.parse_element (/<cim:GovGAST2.cf2>([\s\S]*?)<\/cim:GovGAST2.cf2>/g, obj, "cf2", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.ecr>([\s\S]*?)<\/cim:GovGAST2.ecr>/g, obj, "ecr", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.etd>([\s\S]*?)<\/cim:GovGAST2.etd>/g, obj, "etd", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.k3>([\s\S]*?)<\/cim:GovGAST2.k3>/g, obj, "k3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.k4>([\s\S]*?)<\/cim:GovGAST2.k4>/g, obj, "k4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.k5>([\s\S]*?)<\/cim:GovGAST2.k5>/g, obj, "k5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.k6>([\s\S]*?)<\/cim:GovGAST2.k6>/g, obj, "k6", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.kf>([\s\S]*?)<\/cim:GovGAST2.kf>/g, obj, "kf", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.mwbase>([\s\S]*?)<\/cim:GovGAST2.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.t>([\s\S]*?)<\/cim:GovGAST2.t>/g, obj, "t", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.t3>([\s\S]*?)<\/cim:GovGAST2.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.t4>([\s\S]*?)<\/cim:GovGAST2.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.t5>([\s\S]*?)<\/cim:GovGAST2.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tc>([\s\S]*?)<\/cim:GovGAST2.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tcd>([\s\S]*?)<\/cim:GovGAST2.tcd>/g, obj, "tcd", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tf>([\s\S]*?)<\/cim:GovGAST2.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tmax>([\s\S]*?)<\/cim:GovGAST2.tmax>/g, obj, "tmax", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tmin>([\s\S]*?)<\/cim:GovGAST2.tmin>/g, obj, "tmin", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tr>([\s\S]*?)<\/cim:GovGAST2.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.trate>([\s\S]*?)<\/cim:GovGAST2.trate>/g, obj, "trate", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.tt>([\s\S]*?)<\/cim:GovGAST2.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.w>([\s\S]*?)<\/cim:GovGAST2.w>/g, obj, "w", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.x>([\s\S]*?)<\/cim:GovGAST2.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.y>([\s\S]*?)<\/cim:GovGAST2.y>/g, obj, "y", base.to_string, sub, context);
                base.parse_element (/<cim:GovGAST2.z>([\s\S]*?)<\/cim:GovGAST2.z>/g, obj, "z", base.to_boolean, sub, context);
                var bucket = context.parsed.GovGAST2;
                if (null == bucket)
                   context.parsed.GovGAST2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "GovGAST2", "a", "a",  base.from_float, fields);
                base.export_element (obj, "GovGAST2", "af1", "af1",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "af2", "af2",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "b", "b",  base.from_float, fields);
                base.export_element (obj, "GovGAST2", "bf1", "bf1",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "bf2", "bf2",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "c", "c",  base.from_float, fields);
                base.export_element (obj, "GovGAST2", "cf2", "cf2",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "ecr", "ecr",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "etd", "etd",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "k3", "k3",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "k4", "k4",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "k5", "k5",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "k6", "k6",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "mwbase", "mwbase",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "t", "t",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tcd", "tcd",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tmax", "tmax",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tmin", "tmin",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tr", "tr",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "trate", "trate",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "tt", "tt",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "w", "w",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "x", "x",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "y", "y",  base.from_string, fields);
                base.export_element (obj, "GovGAST2", "z", "z",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GovGAST2_collapse" aria-expanded="true" aria-controls="GovGAST2_collapse" style="margin-left: 10px;">GovGAST2</a></legend>
                    <div id="GovGAST2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#a}}<div><b>a</b>: {{a}}</div>{{/a}}
                    {{#af1}}<div><b>af1</b>: {{af1}}</div>{{/af1}}
                    {{#af2}}<div><b>af2</b>: {{af2}}</div>{{/af2}}
                    {{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
                    {{#bf1}}<div><b>bf1</b>: {{bf1}}</div>{{/bf1}}
                    {{#bf2}}<div><b>bf2</b>: {{bf2}}</div>{{/bf2}}
                    {{#c}}<div><b>c</b>: {{c}}</div>{{/c}}
                    {{#cf2}}<div><b>cf2</b>: {{cf2}}</div>{{/cf2}}
                    {{#ecr}}<div><b>ecr</b>: {{ecr}}</div>{{/ecr}}
                    {{#etd}}<div><b>etd</b>: {{etd}}</div>{{/etd}}
                    {{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
                    {{#k4}}<div><b>k4</b>: {{k4}}</div>{{/k4}}
                    {{#k5}}<div><b>k5</b>: {{k5}}</div>{{/k5}}
                    {{#k6}}<div><b>k6</b>: {{k6}}</div>{{/k6}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#t}}<div><b>t</b>: {{t}}</div>{{/t}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#tcd}}<div><b>tcd</b>: {{tcd}}</div>{{/tcd}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tmax}}<div><b>tmax</b>: {{tmax}}</div>{{/tmax}}
                    {{#tmin}}<div><b>tmin</b>: {{tmin}}</div>{{/tmin}}
                    {{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
                    {{#trate}}<div><b>trate</b>: {{trate}}</div>{{/trate}}
                    {{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
                    {{#w}}<div><b>w</b>: {{w}}</div>{{/w}}
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
                    {{#y}}<div><b>y</b>: {{y}}</div>{{/y}}
                    {{#z}}<div><b>z</b>: {{z}}</div>{{/z}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GovGAST2_collapse" aria-expanded="true" aria-controls="{{id}}_GovGAST2_collapse" style="margin-left: 10px;">GovGAST2</a></legend>
                    <div id="{{id}}_GovGAST2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a'>a: </label><div class='col-sm-8'><input id='{{id}}_a' class='form-control' type='text'{{#a}} value='{{a}}'{{/a}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_af1'>af1: </label><div class='col-sm-8'><input id='{{id}}_af1' class='form-control' type='text'{{#af1}} value='{{af1}}'{{/af1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_af2'>af2: </label><div class='col-sm-8'><input id='{{id}}_af2' class='form-control' type='text'{{#af2}} value='{{af2}}'{{/af2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b'>b: </label><div class='col-sm-8'><input id='{{id}}_b' class='form-control' type='text'{{#b}} value='{{b}}'{{/b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bf1'>bf1: </label><div class='col-sm-8'><input id='{{id}}_bf1' class='form-control' type='text'{{#bf1}} value='{{bf1}}'{{/bf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bf2'>bf2: </label><div class='col-sm-8'><input id='{{id}}_bf2' class='form-control' type='text'{{#bf2}} value='{{bf2}}'{{/bf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_c'>c: </label><div class='col-sm-8'><input id='{{id}}_c' class='form-control' type='text'{{#c}} value='{{c}}'{{/c}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cf2'>cf2: </label><div class='col-sm-8'><input id='{{id}}_cf2' class='form-control' type='text'{{#cf2}} value='{{cf2}}'{{/cf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ecr'>ecr: </label><div class='col-sm-8'><input id='{{id}}_ecr' class='form-control' type='text'{{#ecr}} value='{{ecr}}'{{/ecr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_etd'>etd: </label><div class='col-sm-8'><input id='{{id}}_etd' class='form-control' type='text'{{#etd}} value='{{etd}}'{{/etd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k3'>k3: </label><div class='col-sm-8'><input id='{{id}}_k3' class='form-control' type='text'{{#k3}} value='{{k3}}'{{/k3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k4'>k4: </label><div class='col-sm-8'><input id='{{id}}_k4' class='form-control' type='text'{{#k4}} value='{{k4}}'{{/k4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k5'>k5: </label><div class='col-sm-8'><input id='{{id}}_k5' class='form-control' type='text'{{#k5}} value='{{k5}}'{{/k5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k6'>k6: </label><div class='col-sm-8'><input id='{{id}}_k6' class='form-control' type='text'{{#k6}} value='{{k6}}'{{/k6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mwbase'>mwbase: </label><div class='col-sm-8'><input id='{{id}}_mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t'>t: </label><div class='col-sm-8'><input id='{{id}}_t' class='form-control' type='text'{{#t}} value='{{t}}'{{/t}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tcd'>tcd: </label><div class='col-sm-8'><input id='{{id}}_tcd' class='form-control' type='text'{{#tcd}} value='{{tcd}}'{{/tcd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tmax'>tmax: </label><div class='col-sm-8'><input id='{{id}}_tmax' class='form-control' type='text'{{#tmax}} value='{{tmax}}'{{/tmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tmin'>tmin: </label><div class='col-sm-8'><input id='{{id}}_tmin' class='form-control' type='text'{{#tmin}} value='{{tmin}}'{{/tmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tr'>tr: </label><div class='col-sm-8'><input id='{{id}}_tr' class='form-control' type='text'{{#tr}} value='{{tr}}'{{/tr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_trate'>trate: </label><div class='col-sm-8'><input id='{{id}}_trate' class='form-control' type='text'{{#trate}} value='{{trate}}'{{/trate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tt'>tt: </label><div class='col-sm-8'><input id='{{id}}_tt' class='form-control' type='text'{{#tt}} value='{{tt}}'{{/tt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_w'>w: </label><div class='col-sm-8'><input id='{{id}}_w' class='form-control' type='text'{{#w}} value='{{w}}'{{/w}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_y'>y: </label><div class='col-sm-8'><input id='{{id}}_y' class='form-control' type='text'{{#y}} value='{{y}}'{{/y}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_z'>z: </label><div class='col-sm-8'><input id='{{id}}_z' class='form-check-input' type='checkbox'{{#z}} checked{{/z}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GovGAST2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_a").value; if ("" != temp) obj.a = temp;
                temp = document.getElementById (id + "_af1").value; if ("" != temp) obj.af1 = temp;
                temp = document.getElementById (id + "_af2").value; if ("" != temp) obj.af2 = temp;
                temp = document.getElementById (id + "_b").value; if ("" != temp) obj.b = temp;
                temp = document.getElementById (id + "_bf1").value; if ("" != temp) obj.bf1 = temp;
                temp = document.getElementById (id + "_bf2").value; if ("" != temp) obj.bf2 = temp;
                temp = document.getElementById (id + "_c").value; if ("" != temp) obj.c = temp;
                temp = document.getElementById (id + "_cf2").value; if ("" != temp) obj.cf2 = temp;
                temp = document.getElementById (id + "_ecr").value; if ("" != temp) obj.ecr = temp;
                temp = document.getElementById (id + "_etd").value; if ("" != temp) obj.etd = temp;
                temp = document.getElementById (id + "_k3").value; if ("" != temp) obj.k3 = temp;
                temp = document.getElementById (id + "_k4").value; if ("" != temp) obj.k4 = temp;
                temp = document.getElementById (id + "_k5").value; if ("" != temp) obj.k5 = temp;
                temp = document.getElementById (id + "_k6").value; if ("" != temp) obj.k6 = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_mwbase").value; if ("" != temp) obj.mwbase = temp;
                temp = document.getElementById (id + "_t").value; if ("" != temp) obj.t = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_t5").value; if ("" != temp) obj.t5 = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_tcd").value; if ("" != temp) obj.tcd = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_tmax").value; if ("" != temp) obj.tmax = temp;
                temp = document.getElementById (id + "_tmin").value; if ("" != temp) obj.tmin = temp;
                temp = document.getElementById (id + "_tr").value; if ("" != temp) obj.tr = temp;
                temp = document.getElementById (id + "_trate").value; if ("" != temp) obj.trate = temp;
                temp = document.getElementById (id + "_tt").value; if ("" != temp) obj.tt = temp;
                temp = document.getElementById (id + "_w").value; if ("" != temp) obj.w = temp;
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;
                temp = document.getElementById (id + "_y").value; if ("" != temp) obj.y = temp;
                temp = document.getElementById (id + "_z").checked; if (temp) obj.z = true;

                return (obj);
            }
        }

        return (
            {
                GovHydroPID2: GovHydroPID2,
                TurbineGovernorDynamics: TurbineGovernorDynamics,
                GovHydroIEEE2: GovHydroIEEE2,
                GovCT2: GovCT2,
                GovHydro3: GovHydro3,
                GovCT1: GovCT1,
                GovSteamIEEE1: GovSteamIEEE1,
                GovSteamFV3: GovSteamFV3,
                GovGAST3: GovGAST3,
                GovHydroIEEE0: GovHydroIEEE0,
                GovSteam2: GovSteam2,
                GovHydro2: GovHydro2,
                GovGAST1: GovGAST1,
                GovHydroFrancis: GovHydroFrancis,
                GovGASTWD: GovGASTWD,
                GovSteam1: GovSteam1,
                GovGAST4: GovGAST4,
                GovHydroDD: GovHydroDD,
                GovHydro1: GovHydro1,
                GovGAST2: GovGAST2,
                GovHydroWPID: GovHydroWPID,
                GovSteamFV4: GovSteamFV4,
                GovHydroPID: GovHydroPID,
                GovHydroR: GovHydroR,
                GovHydro4: GovHydro4,
                GovSteamSGO: GovSteamSGO,
                GovGAST: GovGAST,
                GovSteamEU: GovSteamEU,
                GovHydroWEH: GovHydroWEH,
                GovHydroPelton: GovHydroPelton,
                GovSteamCC: GovSteamCC,
                GovSteamFV2: GovSteamFV2,
                GovSteam0: GovSteam0
            }
        );
    }
);