define
(
    ["model/base", "model/AsynchronousMachineDynamics", "model/DiscontinuousExcitationControlDynamics", "model/ExcitationSystemDynamics", "model/LoadDynamics", "model/MechanicalLoadDynamics", "model/OverexcitationLimiterDynamics", "model/PFVArControllerType1Dynamics", "model/PFVArControllerType2Dynamics", "model/PowerSystemStabilizerDynamics", "model/SynchronousMachineDynamics", "model/TurbineGovernorDynamics", "model/TurbineLoadControllerDynamics", "model/UnderexcitationLimiterDynamics", "model/VoltageAdjusterDynamics", "model/VoltageCompensatorDynamics", "model/WindDynamics"],
    /**
     * This section contains user-defined dynamic model classes to support the exchange of both proprietary and explicitly defined user-defined models.
     * <u>
     * </u><u>Proprietary models</u> represent behaviour which, while not defined by a standard model class, is mutually understood by the sending and receiving applications based on the name passed in the .name attribute of the appropriate xxxUserDefined class.
     *
     * Proprietary model parameters are passed as general attributes using as many instances of the ProprietaryParameterDynamics class as there are parameters.
     *
     */
    function (base, AsynchronousMachineDynamics, DiscontinuousExcitationControlDynamics, ExcitationSystemDynamics, LoadDynamics, MechanicalLoadDynamics, OverexcitationLimiterDynamics, PFVArControllerType1Dynamics, PFVArControllerType2Dynamics, PowerSystemStabilizerDynamics, SynchronousMachineDynamics, TurbineGovernorDynamics, TurbineLoadControllerDynamics, UnderexcitationLimiterDynamics, VoltageAdjusterDynamics, VoltageCompensatorDynamics, WindDynamics)
    {

        /**
         * Power Factor or VAr controller Type II function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class PFVArControllerType2UserDefined extends PFVArControllerType2Dynamics.PFVArControllerType2Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PFVArControllerType2UserDefined;
                if (null == bucket)
                   cim_data.PFVArControllerType2UserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PFVArControllerType2UserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PFVArControllerType2Dynamics.PFVArControllerType2Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PFVArControllerType2UserDefined";
                base.parse_element (/<cim:PFVArControllerType2UserDefined.proprietary>([\s\S]*?)<\/cim:PFVArControllerType2UserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:PFVArControllerType2UserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.PFVArControllerType2UserDefined;
                if (null == bucket)
                   context.parsed.PFVArControllerType2UserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PFVArControllerType2Dynamics.PFVArControllerType2Dynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PFVArControllerType2UserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "PFVArControllerType2UserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArControllerType2UserDefined_collapse" aria-expanded="true" aria-controls="PFVArControllerType2UserDefined_collapse" style="margin-left: 10px;">PFVArControllerType2UserDefined</a></legend>
                    <div id="PFVArControllerType2UserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType2Dynamics.PFVArControllerType2Dynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArControllerType2UserDefined_collapse" aria-expanded="true" aria-controls="PFVArControllerType2UserDefined_collapse" style="margin-left: 10px;">PFVArControllerType2UserDefined</a></legend>
                    <div id="PFVArControllerType2UserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType2Dynamics.PFVArControllerType2Dynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PFVArControllerType2UserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Turbine load controller function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class TurbineLoadControllerUserDefined extends TurbineLoadControllerDynamics.TurbineLoadControllerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TurbineLoadControllerUserDefined;
                if (null == bucket)
                   cim_data.TurbineLoadControllerUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TurbineLoadControllerUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineLoadControllerDynamics.TurbineLoadControllerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "TurbineLoadControllerUserDefined";
                base.parse_element (/<cim:TurbineLoadControllerUserDefined.proprietary>([\s\S]*?)<\/cim:TurbineLoadControllerUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:TurbineLoadControllerUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.TurbineLoadControllerUserDefined;
                if (null == bucket)
                   context.parsed.TurbineLoadControllerUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineLoadControllerDynamics.TurbineLoadControllerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "TurbineLoadControllerUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "TurbineLoadControllerUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TurbineLoadControllerUserDefined_collapse" aria-expanded="true" aria-controls="TurbineLoadControllerUserDefined_collapse" style="margin-left: 10px;">TurbineLoadControllerUserDefined</a></legend>
                    <div id="TurbineLoadControllerUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineLoadControllerDynamics.TurbineLoadControllerDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TurbineLoadControllerUserDefined_collapse" aria-expanded="true" aria-controls="TurbineLoadControllerUserDefined_collapse" style="margin-left: 10px;">TurbineLoadControllerUserDefined</a></legend>
                    <div id="TurbineLoadControllerUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineLoadControllerDynamics.TurbineLoadControllerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TurbineLoadControllerUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * <font color="#0f0f0f">Voltage adjuster</font> function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class VoltageAdjusterUserDefined extends VoltageAdjusterDynamics.VoltageAdjusterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.VoltageAdjusterUserDefined;
                if (null == bucket)
                   cim_data.VoltageAdjusterUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VoltageAdjusterUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = VoltageAdjusterDynamics.VoltageAdjusterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "VoltageAdjusterUserDefined";
                base.parse_element (/<cim:VoltageAdjusterUserDefined.proprietary>([\s\S]*?)<\/cim:VoltageAdjusterUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:VoltageAdjusterUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.VoltageAdjusterUserDefined;
                if (null == bucket)
                   context.parsed.VoltageAdjusterUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = VoltageAdjusterDynamics.VoltageAdjusterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "VoltageAdjusterUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "VoltageAdjusterUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VoltageAdjusterUserDefined_collapse" aria-expanded="true" aria-controls="VoltageAdjusterUserDefined_collapse" style="margin-left: 10px;">VoltageAdjusterUserDefined</a></legend>
                    <div id="VoltageAdjusterUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + VoltageAdjusterDynamics.VoltageAdjusterDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VoltageAdjusterUserDefined_collapse" aria-expanded="true" aria-controls="VoltageAdjusterUserDefined_collapse" style="margin-left: 10px;">VoltageAdjusterUserDefined</a></legend>
                    <div id="VoltageAdjusterUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + VoltageAdjusterDynamics.VoltageAdjusterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "VoltageAdjusterUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Turbine-governor function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class TurbineGovernorUserDefined extends TurbineGovernorDynamics.TurbineGovernorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TurbineGovernorUserDefined;
                if (null == bucket)
                   cim_data.TurbineGovernorUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TurbineGovernorUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineGovernorDynamics.TurbineGovernorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "TurbineGovernorUserDefined";
                base.parse_element (/<cim:TurbineGovernorUserDefined.proprietary>([\s\S]*?)<\/cim:TurbineGovernorUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:TurbineGovernorUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.TurbineGovernorUserDefined;
                if (null == bucket)
                   context.parsed.TurbineGovernorUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineGovernorDynamics.TurbineGovernorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "TurbineGovernorUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "TurbineGovernorUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TurbineGovernorUserDefined_collapse" aria-expanded="true" aria-controls="TurbineGovernorUserDefined_collapse" style="margin-left: 10px;">TurbineGovernorUserDefined</a></legend>
                    <div id="TurbineGovernorUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.TurbineGovernorDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TurbineGovernorUserDefined_collapse" aria-expanded="true" aria-controls="TurbineGovernorUserDefined_collapse" style="margin-left: 10px;">TurbineGovernorUserDefined</a></legend>
                    <div id="TurbineGovernorUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineGovernorDynamics.TurbineGovernorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TurbineGovernorUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Load whose dynamic behaviour is described by a user-defined model.
         *
         */
        class LoadUserDefined extends LoadDynamics.LoadDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.LoadUserDefined;
                if (null == bucket)
                   cim_data.LoadUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadDynamics.LoadDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "LoadUserDefined";
                base.parse_element (/<cim:LoadUserDefined.proprietary>([\s\S]*?)<\/cim:LoadUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:LoadUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.LoadUserDefined;
                if (null == bucket)
                   context.parsed.LoadUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LoadDynamics.LoadDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "LoadUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadUserDefined_collapse" aria-expanded="true" aria-controls="LoadUserDefined_collapse" style="margin-left: 10px;">LoadUserDefined</a></legend>
                    <div id="LoadUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LoadDynamics.LoadDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadUserDefined_collapse" aria-expanded="true" aria-controls="LoadUserDefined_collapse" style="margin-left: 10px;">LoadUserDefined</a></legend>
                    <div id="LoadUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LoadDynamics.LoadDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "LoadUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Excitation system function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class ExcitationSystemUserDefined extends ExcitationSystemDynamics.ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcitationSystemUserDefined;
                if (null == bucket)
                   cim_data.ExcitationSystemUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcitationSystemUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "ExcitationSystemUserDefined";
                base.parse_element (/<cim:ExcitationSystemUserDefined.proprietary>([\s\S]*?)<\/cim:ExcitationSystemUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:ExcitationSystemUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.ExcitationSystemUserDefined;
                if (null == bucket)
                   context.parsed.ExcitationSystemUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcitationSystemUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "ExcitationSystemUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExcitationSystemUserDefined_collapse" aria-expanded="true" aria-controls="ExcitationSystemUserDefined_collapse" style="margin-left: 10px;">ExcitationSystemUserDefined</a></legend>
                    <div id="ExcitationSystemUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExcitationSystemUserDefined_collapse" aria-expanded="true" aria-controls="ExcitationSystemUserDefined_collapse" style="margin-left: 10px;">ExcitationSystemUserDefined</a></legend>
                    <div id="ExcitationSystemUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ExcitationSystemUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Wind plant function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class WindPlantUserDefined extends WindDynamics.WindPlantDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindPlantUserDefined;
                if (null == bucket)
                   cim_data.WindPlantUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindPlantUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindDynamics.WindPlantDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "WindPlantUserDefined";
                base.parse_element (/<cim:WindPlantUserDefined.proprietary>([\s\S]*?)<\/cim:WindPlantUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:WindPlantUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.WindPlantUserDefined;
                if (null == bucket)
                   context.parsed.WindPlantUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindDynamics.WindPlantDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindPlantUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "WindPlantUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindPlantUserDefined_collapse" aria-expanded="true" aria-controls="WindPlantUserDefined_collapse" style="margin-left: 10px;">WindPlantUserDefined</a></legend>
                    <div id="WindPlantUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindDynamics.WindPlantDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindPlantUserDefined_collapse" aria-expanded="true" aria-controls="WindPlantUserDefined_collapse" style="margin-left: 10px;">WindPlantUserDefined</a></legend>
                    <div id="WindPlantUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindDynamics.WindPlantDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "WindPlantUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * <font color="#0f0f0f">Power system stabilizer</font> function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class PowerSystemStabilizerUserDefined extends PowerSystemStabilizerDynamics.PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PowerSystemStabilizerUserDefined;
                if (null == bucket)
                   cim_data.PowerSystemStabilizerUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerSystemStabilizerUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PowerSystemStabilizerDynamics.PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PowerSystemStabilizerUserDefined";
                base.parse_element (/<cim:PowerSystemStabilizerUserDefined.proprietary>([\s\S]*?)<\/cim:PowerSystemStabilizerUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:PowerSystemStabilizerUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.PowerSystemStabilizerUserDefined;
                if (null == bucket)
                   context.parsed.PowerSystemStabilizerUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PowerSystemStabilizerDynamics.PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PowerSystemStabilizerUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "PowerSystemStabilizerUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PowerSystemStabilizerUserDefined_collapse" aria-expanded="true" aria-controls="PowerSystemStabilizerUserDefined_collapse" style="margin-left: 10px;">PowerSystemStabilizerUserDefined</a></legend>
                    <div id="PowerSystemStabilizerUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PowerSystemStabilizerUserDefined_collapse" aria-expanded="true" aria-controls="PowerSystemStabilizerUserDefined_collapse" style="margin-left: 10px;">PowerSystemStabilizerUserDefined</a></legend>
                    <div id="PowerSystemStabilizerUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PowerSystemStabilizerUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Wind Type 3 or Type 4 function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class WindType3or4UserDefined extends WindDynamics.WindTurbineType3or4Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindType3or4UserDefined;
                if (null == bucket)
                   cim_data.WindType3or4UserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindType3or4UserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindDynamics.WindTurbineType3or4Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "WindType3or4UserDefined";
                base.parse_element (/<cim:WindType3or4UserDefined.proprietary>([\s\S]*?)<\/cim:WindType3or4UserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:WindType3or4UserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.WindType3or4UserDefined;
                if (null == bucket)
                   context.parsed.WindType3or4UserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindDynamics.WindTurbineType3or4Dynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindType3or4UserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "WindType3or4UserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindType3or4UserDefined_collapse" aria-expanded="true" aria-controls="WindType3or4UserDefined_collapse" style="margin-left: 10px;">WindType3or4UserDefined</a></legend>
                    <div id="WindType3or4UserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindDynamics.WindTurbineType3or4Dynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindType3or4UserDefined_collapse" aria-expanded="true" aria-controls="WindType3or4UserDefined_collapse" style="margin-left: 10px;">WindType3or4UserDefined</a></legend>
                    <div id="WindType3or4UserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindDynamics.WindTurbineType3or4Dynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "WindType3or4UserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Asynchronous machine whose dynamic behaviour is described by a user-defined model.
         *
         */
        class AsynchronousMachineUserDefined extends AsynchronousMachineDynamics.AsynchronousMachineDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AsynchronousMachineUserDefined;
                if (null == bucket)
                   cim_data.AsynchronousMachineUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AsynchronousMachineUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AsynchronousMachineDynamics.AsynchronousMachineDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "AsynchronousMachineUserDefined";
                base.parse_element (/<cim:AsynchronousMachineUserDefined.proprietary>([\s\S]*?)<\/cim:AsynchronousMachineUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:AsynchronousMachineUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.AsynchronousMachineUserDefined;
                if (null == bucket)
                   context.parsed.AsynchronousMachineUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AsynchronousMachineDynamics.AsynchronousMachineDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "AsynchronousMachineUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "AsynchronousMachineUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AsynchronousMachineUserDefined_collapse" aria-expanded="true" aria-controls="AsynchronousMachineUserDefined_collapse" style="margin-left: 10px;">AsynchronousMachineUserDefined</a></legend>
                    <div id="AsynchronousMachineUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AsynchronousMachineDynamics.AsynchronousMachineDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AsynchronousMachineUserDefined_collapse" aria-expanded="true" aria-controls="AsynchronousMachineUserDefined_collapse" style="margin-left: 10px;">AsynchronousMachineUserDefined</a></legend>
                    <div id="AsynchronousMachineUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AsynchronousMachineDynamics.AsynchronousMachineDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "AsynchronousMachineUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Power Factor or VAr controller Type I function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class PFVArControllerType1UserDefined extends PFVArControllerType1Dynamics.PFVArControllerType1Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PFVArControllerType1UserDefined;
                if (null == bucket)
                   cim_data.PFVArControllerType1UserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PFVArControllerType1UserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PFVArControllerType1Dynamics.PFVArControllerType1Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PFVArControllerType1UserDefined";
                base.parse_element (/<cim:PFVArControllerType1UserDefined.proprietary>([\s\S]*?)<\/cim:PFVArControllerType1UserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:PFVArControllerType1UserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.PFVArControllerType1UserDefined;
                if (null == bucket)
                   context.parsed.PFVArControllerType1UserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PFVArControllerType1Dynamics.PFVArControllerType1Dynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PFVArControllerType1UserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "PFVArControllerType1UserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArControllerType1UserDefined_collapse" aria-expanded="true" aria-controls="PFVArControllerType1UserDefined_collapse" style="margin-left: 10px;">PFVArControllerType1UserDefined</a></legend>
                    <div id="PFVArControllerType1UserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType1Dynamics.PFVArControllerType1Dynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PFVArControllerType1UserDefined_collapse" aria-expanded="true" aria-controls="PFVArControllerType1UserDefined_collapse" style="margin-left: 10px;">PFVArControllerType1UserDefined</a></legend>
                    <div id="PFVArControllerType1UserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PFVArControllerType1Dynamics.PFVArControllerType1Dynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PFVArControllerType1UserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Mechanical load function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class MechanicalLoadUserDefined extends MechanicalLoadDynamics.MechanicalLoadDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MechanicalLoadUserDefined;
                if (null == bucket)
                   cim_data.MechanicalLoadUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MechanicalLoadUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MechanicalLoadDynamics.MechanicalLoadDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "MechanicalLoadUserDefined";
                base.parse_element (/<cim:MechanicalLoadUserDefined.proprietary>([\s\S]*?)<\/cim:MechanicalLoadUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:MechanicalLoadUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.MechanicalLoadUserDefined;
                if (null == bucket)
                   context.parsed.MechanicalLoadUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MechanicalLoadDynamics.MechanicalLoadDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "MechanicalLoadUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "MechanicalLoadUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MechanicalLoadUserDefined_collapse" aria-expanded="true" aria-controls="MechanicalLoadUserDefined_collapse" style="margin-left: 10px;">MechanicalLoadUserDefined</a></legend>
                    <div id="MechanicalLoadUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MechanicalLoadDynamics.MechanicalLoadDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MechanicalLoadUserDefined_collapse" aria-expanded="true" aria-controls="MechanicalLoadUserDefined_collapse" style="margin-left: 10px;">MechanicalLoadUserDefined</a></legend>
                    <div id="MechanicalLoadUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MechanicalLoadDynamics.MechanicalLoadDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MechanicalLoadUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Voltage compensator function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class VoltageCompensatorUserDefined extends VoltageCompensatorDynamics.VoltageCompensatorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.VoltageCompensatorUserDefined;
                if (null == bucket)
                   cim_data.VoltageCompensatorUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VoltageCompensatorUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = VoltageCompensatorDynamics.VoltageCompensatorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "VoltageCompensatorUserDefined";
                base.parse_element (/<cim:VoltageCompensatorUserDefined.proprietary>([\s\S]*?)<\/cim:VoltageCompensatorUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:VoltageCompensatorUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.VoltageCompensatorUserDefined;
                if (null == bucket)
                   context.parsed.VoltageCompensatorUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = VoltageCompensatorDynamics.VoltageCompensatorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "VoltageCompensatorUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "VoltageCompensatorUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VoltageCompensatorUserDefined_collapse" aria-expanded="true" aria-controls="VoltageCompensatorUserDefined_collapse" style="margin-left: 10px;">VoltageCompensatorUserDefined</a></legend>
                    <div id="VoltageCompensatorUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + VoltageCompensatorDynamics.VoltageCompensatorDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VoltageCompensatorUserDefined_collapse" aria-expanded="true" aria-controls="VoltageCompensatorUserDefined_collapse" style="margin-left: 10px;">VoltageCompensatorUserDefined</a></legend>
                    <div id="VoltageCompensatorUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + VoltageCompensatorDynamics.VoltageCompensatorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "VoltageCompensatorUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Underexcitation limiter function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class UnderexcitationLimiterUserDefined extends UnderexcitationLimiterDynamics.UnderexcitationLimiterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.UnderexcitationLimiterUserDefined;
                if (null == bucket)
                   cim_data.UnderexcitationLimiterUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UnderexcitationLimiterUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = UnderexcitationLimiterDynamics.UnderexcitationLimiterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "UnderexcitationLimiterUserDefined";
                base.parse_element (/<cim:UnderexcitationLimiterUserDefined.proprietary>([\s\S]*?)<\/cim:UnderexcitationLimiterUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:UnderexcitationLimiterUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.UnderexcitationLimiterUserDefined;
                if (null == bucket)
                   context.parsed.UnderexcitationLimiterUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = UnderexcitationLimiterDynamics.UnderexcitationLimiterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "UnderexcitationLimiterUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "UnderexcitationLimiterUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcitationLimiterUserDefined_collapse" aria-expanded="true" aria-controls="UnderexcitationLimiterUserDefined_collapse" style="margin-left: 10px;">UnderexcitationLimiterUserDefined</a></legend>
                    <div id="UnderexcitationLimiterUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + UnderexcitationLimiterDynamics.UnderexcitationLimiterDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcitationLimiterUserDefined_collapse" aria-expanded="true" aria-controls="UnderexcitationLimiterUserDefined_collapse" style="margin-left: 10px;">UnderexcitationLimiterUserDefined</a></legend>
                    <div id="UnderexcitationLimiterUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + UnderexcitationLimiterDynamics.UnderexcitationLimiterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "UnderexcitationLimiterUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Wind Type 1 or Type 2 function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class WindType1or2UserDefined extends WindDynamics.WindTurbineType1or2Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindType1or2UserDefined;
                if (null == bucket)
                   cim_data.WindType1or2UserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindType1or2UserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindDynamics.WindTurbineType1or2Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "WindType1or2UserDefined";
                base.parse_element (/<cim:WindType1or2UserDefined.proprietary>([\s\S]*?)<\/cim:WindType1or2UserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:WindType1or2UserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.WindType1or2UserDefined;
                if (null == bucket)
                   context.parsed.WindType1or2UserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindDynamics.WindTurbineType1or2Dynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindType1or2UserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "WindType1or2UserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindType1or2UserDefined_collapse" aria-expanded="true" aria-controls="WindType1or2UserDefined_collapse" style="margin-left: 10px;">WindType1or2UserDefined</a></legend>
                    <div id="WindType1or2UserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindDynamics.WindTurbineType1or2Dynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindType1or2UserDefined_collapse" aria-expanded="true" aria-controls="WindType1or2UserDefined_collapse" style="margin-left: 10px;">WindType1or2UserDefined</a></legend>
                    <div id="WindType1or2UserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindDynamics.WindTurbineType1or2Dynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "WindType1or2UserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Overexcitation limiter system function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class OverexcitationLimiterUserDefined extends OverexcitationLimiterDynamics.OverexcitationLimiterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OverexcitationLimiterUserDefined;
                if (null == bucket)
                   cim_data.OverexcitationLimiterUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OverexcitationLimiterUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OverexcitationLimiterDynamics.OverexcitationLimiterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "OverexcitationLimiterUserDefined";
                base.parse_element (/<cim:OverexcitationLimiterUserDefined.proprietary>([\s\S]*?)<\/cim:OverexcitationLimiterUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:OverexcitationLimiterUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.OverexcitationLimiterUserDefined;
                if (null == bucket)
                   context.parsed.OverexcitationLimiterUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OverexcitationLimiterDynamics.OverexcitationLimiterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "OverexcitationLimiterUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "OverexcitationLimiterUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverexcitationLimiterUserDefined_collapse" aria-expanded="true" aria-controls="OverexcitationLimiterUserDefined_collapse" style="margin-left: 10px;">OverexcitationLimiterUserDefined</a></legend>
                    <div id="OverexcitationLimiterUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OverexcitationLimiterDynamics.OverexcitationLimiterDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverexcitationLimiterUserDefined_collapse" aria-expanded="true" aria-controls="OverexcitationLimiterUserDefined_collapse" style="margin-left: 10px;">OverexcitationLimiterUserDefined</a></legend>
                    <div id="OverexcitationLimiterUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OverexcitationLimiterDynamics.OverexcitationLimiterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "OverexcitationLimiterUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Supports definition of one or more parameters of several different datatypes for use by proprietary user-defined models.
         *
         * NOTE: This class does not inherit from IdentifiedObject since it is not intended that a single instance of it be referenced by more than one proprietary user-defined model instance.
         *
         */
        class ProprietaryParameterDynamics extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ProprietaryParameterDynamics;
                if (null == bucket)
                   cim_data.ProprietaryParameterDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProprietaryParameterDynamics[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ProprietaryParameterDynamics";
                base.parse_element (/<cim:ProprietaryParameterDynamics.booleanParameterValue>([\s\S]*?)<\/cim:ProprietaryParameterDynamics.booleanParameterValue>/g, obj, "booleanParameterValue", base.to_boolean, sub, context);
                base.parse_element (/<cim:ProprietaryParameterDynamics.floatParameterValue>([\s\S]*?)<\/cim:ProprietaryParameterDynamics.floatParameterValue>/g, obj, "floatParameterValue", base.to_float, sub, context);
                base.parse_element (/<cim:ProprietaryParameterDynamics.integerParameterValue>([\s\S]*?)<\/cim:ProprietaryParameterDynamics.integerParameterValue>/g, obj, "integerParameterValue", base.to_string, sub, context);
                base.parse_element (/<cim:ProprietaryParameterDynamics.parameterNumber>([\s\S]*?)<\/cim:ProprietaryParameterDynamics.parameterNumber>/g, obj, "parameterNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.TurbineGovernorUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineGovernorUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.PFVArControllerType2UserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType2UserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.WindType1or2UserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindType1or2UserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.VoltageAdjusterUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageAdjusterUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.TurbineLoadControllerUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineLoadControllerUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.DiscontinuousExcitationControlUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiscontinuousExcitationControlUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.PowerSystemStabilizerUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemStabilizerUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.ExcitationSystemUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.LoadUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.AsynchronousMachineUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.VoltageCompensatorUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageCompensatorUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.SynchronousMachineUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.MechanicalLoadUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MechanicalLoadUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.WindType3or4UserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindType3or4UserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.PFVArControllerType1UserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType1UserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.WindPlantUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.UnderexcitationLimiterUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UnderexcitationLimiterUserDefined", sub, context);
                base.parse_attribute (/<cim:ProprietaryParameterDynamics.OverexcitationLimiterUserDefined\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OverexcitationLimiterUserDefined", sub, context);
                var bucket = context.parsed.ProprietaryParameterDynamics;
                if (null == bucket)
                   context.parsed.ProprietaryParameterDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ProprietaryParameterDynamics", "booleanParameterValue", "booleanParameterValue",  base.from_boolean, fields);
                base.export_element (obj, "ProprietaryParameterDynamics", "floatParameterValue", "floatParameterValue",  base.from_float, fields);
                base.export_element (obj, "ProprietaryParameterDynamics", "integerParameterValue", "integerParameterValue",  base.from_string, fields);
                base.export_element (obj, "ProprietaryParameterDynamics", "parameterNumber", "parameterNumber",  base.from_string, fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "TurbineGovernorUserDefined", "TurbineGovernorUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "PFVArControllerType2UserDefined", "PFVArControllerType2UserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "WindType1or2UserDefined", "WindType1or2UserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "VoltageAdjusterUserDefined", "VoltageAdjusterUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "TurbineLoadControllerUserDefined", "TurbineLoadControllerUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "DiscontinuousExcitationControlUserDefined", "DiscontinuousExcitationControlUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "PowerSystemStabilizerUserDefined", "PowerSystemStabilizerUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "ExcitationSystemUserDefined", "ExcitationSystemUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "LoadUserDefined", "LoadUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "AsynchronousMachineUserDefined", "AsynchronousMachineUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "VoltageCompensatorUserDefined", "VoltageCompensatorUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "SynchronousMachineUserDefined", "SynchronousMachineUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "MechanicalLoadUserDefined", "MechanicalLoadUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "WindType3or4UserDefined", "WindType3or4UserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "PFVArControllerType1UserDefined", "PFVArControllerType1UserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "WindPlantUserDefined", "WindPlantUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "UnderexcitationLimiterUserDefined", "UnderexcitationLimiterUserDefined", fields);
                base.export_attribute (obj, "ProprietaryParameterDynamics", "OverexcitationLimiterUserDefined", "OverexcitationLimiterUserDefined", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProprietaryParameterDynamics_collapse" aria-expanded="true" aria-controls="ProprietaryParameterDynamics_collapse" style="margin-left: 10px;">ProprietaryParameterDynamics</a></legend>
                    <div id="ProprietaryParameterDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#booleanParameterValue}}<div><b>booleanParameterValue</b>: {{booleanParameterValue}}</div>{{/booleanParameterValue}}
                    {{#floatParameterValue}}<div><b>floatParameterValue</b>: {{floatParameterValue}}</div>{{/floatParameterValue}}
                    {{#integerParameterValue}}<div><b>integerParameterValue</b>: {{integerParameterValue}}</div>{{/integerParameterValue}}
                    {{#parameterNumber}}<div><b>parameterNumber</b>: {{parameterNumber}}</div>{{/parameterNumber}}
                    {{#TurbineGovernorUserDefined}}<div><b>TurbineGovernorUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TurbineGovernorUserDefined}}&quot;);})'>{{TurbineGovernorUserDefined}}</a></div>{{/TurbineGovernorUserDefined}}
                    {{#PFVArControllerType2UserDefined}}<div><b>PFVArControllerType2UserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PFVArControllerType2UserDefined}}&quot;);})'>{{PFVArControllerType2UserDefined}}</a></div>{{/PFVArControllerType2UserDefined}}
                    {{#WindType1or2UserDefined}}<div><b>WindType1or2UserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindType1or2UserDefined}}&quot;);})'>{{WindType1or2UserDefined}}</a></div>{{/WindType1or2UserDefined}}
                    {{#VoltageAdjusterUserDefined}}<div><b>VoltageAdjusterUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VoltageAdjusterUserDefined}}&quot;);})'>{{VoltageAdjusterUserDefined}}</a></div>{{/VoltageAdjusterUserDefined}}
                    {{#TurbineLoadControllerUserDefined}}<div><b>TurbineLoadControllerUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TurbineLoadControllerUserDefined}}&quot;);})'>{{TurbineLoadControllerUserDefined}}</a></div>{{/TurbineLoadControllerUserDefined}}
                    {{#DiscontinuousExcitationControlUserDefined}}<div><b>DiscontinuousExcitationControlUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DiscontinuousExcitationControlUserDefined}}&quot;);})'>{{DiscontinuousExcitationControlUserDefined}}</a></div>{{/DiscontinuousExcitationControlUserDefined}}
                    {{#PowerSystemStabilizerUserDefined}}<div><b>PowerSystemStabilizerUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PowerSystemStabilizerUserDefined}}&quot;);})'>{{PowerSystemStabilizerUserDefined}}</a></div>{{/PowerSystemStabilizerUserDefined}}
                    {{#ExcitationSystemUserDefined}}<div><b>ExcitationSystemUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExcitationSystemUserDefined}}&quot;);})'>{{ExcitationSystemUserDefined}}</a></div>{{/ExcitationSystemUserDefined}}
                    {{#LoadUserDefined}}<div><b>LoadUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadUserDefined}}&quot;);})'>{{LoadUserDefined}}</a></div>{{/LoadUserDefined}}
                    {{#AsynchronousMachineUserDefined}}<div><b>AsynchronousMachineUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AsynchronousMachineUserDefined}}&quot;);})'>{{AsynchronousMachineUserDefined}}</a></div>{{/AsynchronousMachineUserDefined}}
                    {{#VoltageCompensatorUserDefined}}<div><b>VoltageCompensatorUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VoltageCompensatorUserDefined}}&quot;);})'>{{VoltageCompensatorUserDefined}}</a></div>{{/VoltageCompensatorUserDefined}}
                    {{#SynchronousMachineUserDefined}}<div><b>SynchronousMachineUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SynchronousMachineUserDefined}}&quot;);})'>{{SynchronousMachineUserDefined}}</a></div>{{/SynchronousMachineUserDefined}}
                    {{#MechanicalLoadUserDefined}}<div><b>MechanicalLoadUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MechanicalLoadUserDefined}}&quot;);})'>{{MechanicalLoadUserDefined}}</a></div>{{/MechanicalLoadUserDefined}}
                    {{#WindType3or4UserDefined}}<div><b>WindType3or4UserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindType3or4UserDefined}}&quot;);})'>{{WindType3or4UserDefined}}</a></div>{{/WindType3or4UserDefined}}
                    {{#PFVArControllerType1UserDefined}}<div><b>PFVArControllerType1UserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PFVArControllerType1UserDefined}}&quot;);})'>{{PFVArControllerType1UserDefined}}</a></div>{{/PFVArControllerType1UserDefined}}
                    {{#WindPlantUserDefined}}<div><b>WindPlantUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindPlantUserDefined}}&quot;);})'>{{WindPlantUserDefined}}</a></div>{{/WindPlantUserDefined}}
                    {{#UnderexcitationLimiterUserDefined}}<div><b>UnderexcitationLimiterUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UnderexcitationLimiterUserDefined}}&quot;);})'>{{UnderexcitationLimiterUserDefined}}</a></div>{{/UnderexcitationLimiterUserDefined}}
                    {{#OverexcitationLimiterUserDefined}}<div><b>OverexcitationLimiterUserDefined</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OverexcitationLimiterUserDefined}}&quot;);})'>{{OverexcitationLimiterUserDefined}}</a></div>{{/OverexcitationLimiterUserDefined}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProprietaryParameterDynamics_collapse" aria-expanded="true" aria-controls="ProprietaryParameterDynamics_collapse" style="margin-left: 10px;">ProprietaryParameterDynamics</a></legend>
                    <div id="ProprietaryParameterDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='booleanParameterValue'>booleanParameterValue: </label><div class='col-sm-8'><input id='booleanParameterValue' class='form-check-input' type='checkbox'{{#booleanParameterValue}} checked{{/booleanParameterValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='floatParameterValue'>floatParameterValue: </label><div class='col-sm-8'><input id='floatParameterValue' class='form-control' type='text'{{#floatParameterValue}} value='{{floatParameterValue}}'{{/floatParameterValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='integerParameterValue'>integerParameterValue: </label><div class='col-sm-8'><input id='integerParameterValue' class='form-control' type='text'{{#integerParameterValue}} value='{{integerParameterValue}}'{{/integerParameterValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='parameterNumber'>parameterNumber: </label><div class='col-sm-8'><input id='parameterNumber' class='form-control' type='text'{{#parameterNumber}} value='{{parameterNumber}}'{{/parameterNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TurbineGovernorUserDefined'>TurbineGovernorUserDefined: </label><div class='col-sm-8'><input id='TurbineGovernorUserDefined' class='form-control' type='text'{{#TurbineGovernorUserDefined}} value='{{TurbineGovernorUserDefined}}'{{/TurbineGovernorUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PFVArControllerType2UserDefined'>PFVArControllerType2UserDefined: </label><div class='col-sm-8'><input id='PFVArControllerType2UserDefined' class='form-control' type='text'{{#PFVArControllerType2UserDefined}} value='{{PFVArControllerType2UserDefined}}'{{/PFVArControllerType2UserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WindType1or2UserDefined'>WindType1or2UserDefined: </label><div class='col-sm-8'><input id='WindType1or2UserDefined' class='form-control' type='text'{{#WindType1or2UserDefined}} value='{{WindType1or2UserDefined}}'{{/WindType1or2UserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='VoltageAdjusterUserDefined'>VoltageAdjusterUserDefined: </label><div class='col-sm-8'><input id='VoltageAdjusterUserDefined' class='form-control' type='text'{{#VoltageAdjusterUserDefined}} value='{{VoltageAdjusterUserDefined}}'{{/VoltageAdjusterUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TurbineLoadControllerUserDefined'>TurbineLoadControllerUserDefined: </label><div class='col-sm-8'><input id='TurbineLoadControllerUserDefined' class='form-control' type='text'{{#TurbineLoadControllerUserDefined}} value='{{TurbineLoadControllerUserDefined}}'{{/TurbineLoadControllerUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DiscontinuousExcitationControlUserDefined'>DiscontinuousExcitationControlUserDefined: </label><div class='col-sm-8'><input id='DiscontinuousExcitationControlUserDefined' class='form-control' type='text'{{#DiscontinuousExcitationControlUserDefined}} value='{{DiscontinuousExcitationControlUserDefined}}'{{/DiscontinuousExcitationControlUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PowerSystemStabilizerUserDefined'>PowerSystemStabilizerUserDefined: </label><div class='col-sm-8'><input id='PowerSystemStabilizerUserDefined' class='form-control' type='text'{{#PowerSystemStabilizerUserDefined}} value='{{PowerSystemStabilizerUserDefined}}'{{/PowerSystemStabilizerUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ExcitationSystemUserDefined'>ExcitationSystemUserDefined: </label><div class='col-sm-8'><input id='ExcitationSystemUserDefined' class='form-control' type='text'{{#ExcitationSystemUserDefined}} value='{{ExcitationSystemUserDefined}}'{{/ExcitationSystemUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LoadUserDefined'>LoadUserDefined: </label><div class='col-sm-8'><input id='LoadUserDefined' class='form-control' type='text'{{#LoadUserDefined}} value='{{LoadUserDefined}}'{{/LoadUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AsynchronousMachineUserDefined'>AsynchronousMachineUserDefined: </label><div class='col-sm-8'><input id='AsynchronousMachineUserDefined' class='form-control' type='text'{{#AsynchronousMachineUserDefined}} value='{{AsynchronousMachineUserDefined}}'{{/AsynchronousMachineUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='VoltageCompensatorUserDefined'>VoltageCompensatorUserDefined: </label><div class='col-sm-8'><input id='VoltageCompensatorUserDefined' class='form-control' type='text'{{#VoltageCompensatorUserDefined}} value='{{VoltageCompensatorUserDefined}}'{{/VoltageCompensatorUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SynchronousMachineUserDefined'>SynchronousMachineUserDefined: </label><div class='col-sm-8'><input id='SynchronousMachineUserDefined' class='form-control' type='text'{{#SynchronousMachineUserDefined}} value='{{SynchronousMachineUserDefined}}'{{/SynchronousMachineUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MechanicalLoadUserDefined'>MechanicalLoadUserDefined: </label><div class='col-sm-8'><input id='MechanicalLoadUserDefined' class='form-control' type='text'{{#MechanicalLoadUserDefined}} value='{{MechanicalLoadUserDefined}}'{{/MechanicalLoadUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WindType3or4UserDefined'>WindType3or4UserDefined: </label><div class='col-sm-8'><input id='WindType3or4UserDefined' class='form-control' type='text'{{#WindType3or4UserDefined}} value='{{WindType3or4UserDefined}}'{{/WindType3or4UserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PFVArControllerType1UserDefined'>PFVArControllerType1UserDefined: </label><div class='col-sm-8'><input id='PFVArControllerType1UserDefined' class='form-control' type='text'{{#PFVArControllerType1UserDefined}} value='{{PFVArControllerType1UserDefined}}'{{/PFVArControllerType1UserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WindPlantUserDefined'>WindPlantUserDefined: </label><div class='col-sm-8'><input id='WindPlantUserDefined' class='form-control' type='text'{{#WindPlantUserDefined}} value='{{WindPlantUserDefined}}'{{/WindPlantUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='UnderexcitationLimiterUserDefined'>UnderexcitationLimiterUserDefined: </label><div class='col-sm-8'><input id='UnderexcitationLimiterUserDefined' class='form-control' type='text'{{#UnderexcitationLimiterUserDefined}} value='{{UnderexcitationLimiterUserDefined}}'{{/UnderexcitationLimiterUserDefined}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OverexcitationLimiterUserDefined'>OverexcitationLimiterUserDefined: </label><div class='col-sm-8'><input id='OverexcitationLimiterUserDefined' class='form-control' type='text'{{#OverexcitationLimiterUserDefined}} value='{{OverexcitationLimiterUserDefined}}'{{/OverexcitationLimiterUserDefined}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ProprietaryParameterDynamics" };
                super.submit (obj);
                temp = document.getElementById ("booleanParameterValue").checked; if (temp) obj.booleanParameterValue = true;
                temp = document.getElementById ("floatParameterValue").value; if ("" != temp) obj.floatParameterValue = temp;
                temp = document.getElementById ("integerParameterValue").value; if ("" != temp) obj.integerParameterValue = temp;
                temp = document.getElementById ("parameterNumber").value; if ("" != temp) obj.parameterNumber = temp;
                temp = document.getElementById ("TurbineGovernorUserDefined").value; if ("" != temp) obj.TurbineGovernorUserDefined = temp;
                temp = document.getElementById ("PFVArControllerType2UserDefined").value; if ("" != temp) obj.PFVArControllerType2UserDefined = temp;
                temp = document.getElementById ("WindType1or2UserDefined").value; if ("" != temp) obj.WindType1or2UserDefined = temp;
                temp = document.getElementById ("VoltageAdjusterUserDefined").value; if ("" != temp) obj.VoltageAdjusterUserDefined = temp;
                temp = document.getElementById ("TurbineLoadControllerUserDefined").value; if ("" != temp) obj.TurbineLoadControllerUserDefined = temp;
                temp = document.getElementById ("DiscontinuousExcitationControlUserDefined").value; if ("" != temp) obj.DiscontinuousExcitationControlUserDefined = temp;
                temp = document.getElementById ("PowerSystemStabilizerUserDefined").value; if ("" != temp) obj.PowerSystemStabilizerUserDefined = temp;
                temp = document.getElementById ("ExcitationSystemUserDefined").value; if ("" != temp) obj.ExcitationSystemUserDefined = temp;
                temp = document.getElementById ("LoadUserDefined").value; if ("" != temp) obj.LoadUserDefined = temp;
                temp = document.getElementById ("AsynchronousMachineUserDefined").value; if ("" != temp) obj.AsynchronousMachineUserDefined = temp;
                temp = document.getElementById ("VoltageCompensatorUserDefined").value; if ("" != temp) obj.VoltageCompensatorUserDefined = temp;
                temp = document.getElementById ("SynchronousMachineUserDefined").value; if ("" != temp) obj.SynchronousMachineUserDefined = temp;
                temp = document.getElementById ("MechanicalLoadUserDefined").value; if ("" != temp) obj.MechanicalLoadUserDefined = temp;
                temp = document.getElementById ("WindType3or4UserDefined").value; if ("" != temp) obj.WindType3or4UserDefined = temp;
                temp = document.getElementById ("PFVArControllerType1UserDefined").value; if ("" != temp) obj.PFVArControllerType1UserDefined = temp;
                temp = document.getElementById ("WindPlantUserDefined").value; if ("" != temp) obj.WindPlantUserDefined = temp;
                temp = document.getElementById ("UnderexcitationLimiterUserDefined").value; if ("" != temp) obj.UnderexcitationLimiterUserDefined = temp;
                temp = document.getElementById ("OverexcitationLimiterUserDefined").value; if ("" != temp) obj.OverexcitationLimiterUserDefined = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TurbineGovernorUserDefined", "TurbineGovernorUserDefined", "0..1", "0..*"],
                        ["PFVArControllerType2UserDefined", "PFVArControllerType2UserDefined", "0..1", "0..*"],
                        ["WindType1or2UserDefined", "WindType1or2UserDefined", "0..1", "0..*"],
                        ["VoltageAdjusterUserDefined", "VoltageAdjusterUserDefined", "0..1", "0..*"],
                        ["TurbineLoadControllerUserDefined", "TurbineLoadControllerUserDefined", "0..1", "0..*"],
                        ["DiscontinuousExcitationControlUserDefined", "DiscontinuousExcitationControlUserDefined", "0..1", "0..*"],
                        ["PowerSystemStabilizerUserDefined", "PowerSystemStabilizerUserDefined", "0..1", "0..*"],
                        ["ExcitationSystemUserDefined", "ExcitationSystemUserDefined", "0..1", "0..*"],
                        ["LoadUserDefined", "LoadUserDefined", "0..1", "0..*"],
                        ["AsynchronousMachineUserDefined", "AsynchronousMachineUserDefined", "0..1", "0..*"],
                        ["VoltageCompensatorUserDefined", "VoltageCompensatorUserDefined", "0..1", "0..*"],
                        ["SynchronousMachineUserDefined", "SynchronousMachineUserDefined", "0..1", "0..*"],
                        ["MechanicalLoadUserDefined", "MechanicalLoadUserDefined", "0..1", "0..*"],
                        ["WindType3or4UserDefined", "WindType3or4UserDefined", "0..1", "0..*"],
                        ["PFVArControllerType1UserDefined", "PFVArControllerType1UserDefined", "0..1", "0..*"],
                        ["WindPlantUserDefined", "WindPlantUserDefined", "0..1", "0..*"],
                        ["UnderexcitationLimiterUserDefined", "UnderexcitationLimiterUserDefined", "0..1", "0..*"],
                        ["OverexcitationLimiterUserDefined", "OverexcitationLimiterUserDefined", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Synchronous machine whose dynamic behaviour is described by a user-defined model.
         *
         */
        class SynchronousMachineUserDefined extends SynchronousMachineDynamics.SynchronousMachineDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SynchronousMachineUserDefined;
                if (null == bucket)
                   cim_data.SynchronousMachineUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SynchronousMachineUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SynchronousMachineDynamics.SynchronousMachineDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "SynchronousMachineUserDefined";
                base.parse_element (/<cim:SynchronousMachineUserDefined.proprietary>([\s\S]*?)<\/cim:SynchronousMachineUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:SynchronousMachineUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.SynchronousMachineUserDefined;
                if (null == bucket)
                   context.parsed.SynchronousMachineUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SynchronousMachineDynamics.SynchronousMachineDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "SynchronousMachineUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "SynchronousMachineUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchronousMachineUserDefined_collapse" aria-expanded="true" aria-controls="SynchronousMachineUserDefined_collapse" style="margin-left: 10px;">SynchronousMachineUserDefined</a></legend>
                    <div id="SynchronousMachineUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SynchronousMachineDynamics.SynchronousMachineDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchronousMachineUserDefined_collapse" aria-expanded="true" aria-controls="SynchronousMachineUserDefined_collapse" style="margin-left: 10px;">SynchronousMachineUserDefined</a></legend>
                    <div id="SynchronousMachineUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SynchronousMachineDynamics.SynchronousMachineDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "SynchronousMachineUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Discontinuous excitation control function block whose dynamic behaviour is described by <font color="#0f0f0f">a user-defined model.</font>
         *
         */
        class DiscontinuousExcitationControlUserDefined extends DiscontinuousExcitationControlDynamics.DiscontinuousExcitationControlDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DiscontinuousExcitationControlUserDefined;
                if (null == bucket)
                   cim_data.DiscontinuousExcitationControlUserDefined = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiscontinuousExcitationControlUserDefined[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DiscontinuousExcitationControlDynamics.DiscontinuousExcitationControlDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "DiscontinuousExcitationControlUserDefined";
                base.parse_element (/<cim:DiscontinuousExcitationControlUserDefined.proprietary>([\s\S]*?)<\/cim:DiscontinuousExcitationControlUserDefined.proprietary>/g, obj, "proprietary", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:DiscontinuousExcitationControlUserDefined.ProprietaryParameterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProprietaryParameterDynamics", sub, context);
                var bucket = context.parsed.DiscontinuousExcitationControlUserDefined;
                if (null == bucket)
                   context.parsed.DiscontinuousExcitationControlUserDefined = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DiscontinuousExcitationControlDynamics.DiscontinuousExcitationControlDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiscontinuousExcitationControlUserDefined", "proprietary", "proprietary",  base.from_boolean, fields);
                base.export_attributes (obj, "DiscontinuousExcitationControlUserDefined", "ProprietaryParameterDynamics", "ProprietaryParameterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiscontinuousExcitationControlUserDefined_collapse" aria-expanded="true" aria-controls="DiscontinuousExcitationControlUserDefined_collapse" style="margin-left: 10px;">DiscontinuousExcitationControlUserDefined</a></legend>
                    <div id="DiscontinuousExcitationControlUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.DiscontinuousExcitationControlDynamics.prototype.template.call (this) +
                    `
                    {{#proprietary}}<div><b>proprietary</b>: {{proprietary}}</div>{{/proprietary}}
                    {{#ProprietaryParameterDynamics}}<div><b>ProprietaryParameterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProprietaryParameterDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProprietaryParameterDynamics) obj.ProprietaryParameterDynamics_string = obj.ProprietaryParameterDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProprietaryParameterDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiscontinuousExcitationControlUserDefined_collapse" aria-expanded="true" aria-controls="DiscontinuousExcitationControlUserDefined_collapse" style="margin-left: 10px;">DiscontinuousExcitationControlUserDefined</a></legend>
                    <div id="DiscontinuousExcitationControlUserDefined_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.DiscontinuousExcitationControlDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='proprietary'>proprietary: </label><div class='col-sm-8'><input id='proprietary' class='form-check-input' type='checkbox'{{#proprietary}} checked{{/proprietary}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "DiscontinuousExcitationControlUserDefined" };
                super.submit (obj);
                temp = document.getElementById ("proprietary").checked; if (temp) obj.proprietary = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProprietaryParameterDynamics", "ProprietaryParameterDynamics", "0..*", "0..1"]
                    ]
                );
            }
        }

        return (
            {
                UnderexcitationLimiterUserDefined: UnderexcitationLimiterUserDefined,
                SynchronousMachineUserDefined: SynchronousMachineUserDefined,
                MechanicalLoadUserDefined: MechanicalLoadUserDefined,
                VoltageCompensatorUserDefined: VoltageCompensatorUserDefined,
                DiscontinuousExcitationControlUserDefined: DiscontinuousExcitationControlUserDefined,
                TurbineGovernorUserDefined: TurbineGovernorUserDefined,
                ProprietaryParameterDynamics: ProprietaryParameterDynamics,
                AsynchronousMachineUserDefined: AsynchronousMachineUserDefined,
                PowerSystemStabilizerUserDefined: PowerSystemStabilizerUserDefined,
                ExcitationSystemUserDefined: ExcitationSystemUserDefined,
                OverexcitationLimiterUserDefined: OverexcitationLimiterUserDefined,
                PFVArControllerType1UserDefined: PFVArControllerType1UserDefined,
                TurbineLoadControllerUserDefined: TurbineLoadControllerUserDefined,
                WindType1or2UserDefined: WindType1or2UserDefined,
                VoltageAdjusterUserDefined: VoltageAdjusterUserDefined,
                PFVArControllerType2UserDefined: PFVArControllerType2UserDefined,
                LoadUserDefined: LoadUserDefined,
                WindPlantUserDefined: WindPlantUserDefined,
                WindType3or4UserDefined: WindType3or4UserDefined
            }
        );
    }
);