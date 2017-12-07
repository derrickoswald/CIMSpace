define
(
    ["model/base", "model/StandardModels"],
    /**
     * <font color="#0f0f0f">A voltage adjuster is a reference adjuster that uses inputs from a reactive power or power factor controller to modify the voltage regulator set point to maintain the synchronous machine steady-state power factor or reactive power at a predetermined value. </font>
     *
     * <font color="#0f0f0f">For additional information please refer to IEEE Standard 421.5-2005, Section 11.</font>
     *
     */
    function (base, StandardModels)
    {

        /**
         * Voltage adjuster function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class VoltageAdjusterDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VoltageAdjusterDynamics;
                if (null == bucket)
                   cim_data.VoltageAdjusterDynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VoltageAdjusterDynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "VoltageAdjusterDynamics";
                base.parse_attribute (/<cim:VoltageAdjusterDynamics.PFVArControllerType1Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType1Dynamics", sub, context);
                var bucket = context.parsed.VoltageAdjusterDynamics;
                if (null == bucket)
                   context.parsed.VoltageAdjusterDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "VoltageAdjusterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VoltageAdjusterDynamics_collapse" aria-expanded="true" aria-controls="VoltageAdjusterDynamics_collapse" style="margin-left: 10px;">VoltageAdjusterDynamics</a></legend>
                    <div id="VoltageAdjusterDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#PFVArControllerType1Dynamics}}<div><b>PFVArControllerType1Dynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PFVArControllerType1Dynamics}}&quot;);})'>{{PFVArControllerType1Dynamics}}</a></div>{{/PFVArControllerType1Dynamics}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VoltageAdjusterDynamics_collapse" aria-expanded="true" aria-controls="VoltageAdjusterDynamics_collapse" style="margin-left: 10px;">VoltageAdjusterDynamics</a></legend>
                    <div id="VoltageAdjusterDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PFVArControllerType1Dynamics'>PFVArControllerType1Dynamics: </label><div class='col-sm-8'><input id='PFVArControllerType1Dynamics' class='form-control' type='text'{{#PFVArControllerType1Dynamics}} value='{{PFVArControllerType1Dynamics}}'{{/PFVArControllerType1Dynamics}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["PFVArControllerType1Dynamics", "PFVArControllerType1Dynamics", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * The class represents IEEE Voltage Adjuster which is used to represent the voltage adjuster in either a power factor or var control system.
         *
         * Reference: IEEE Standard 421.5-2005 Section 11.1.
         *
         */
        class VAdjIEEE extends VoltageAdjusterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VAdjIEEE;
                if (null == bucket)
                   cim_data.VAdjIEEE = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VAdjIEEE[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = VoltageAdjusterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "VAdjIEEE";
                base.parse_element (/<cim:VAdjIEEE.adjslew>([\s\S]*?)<\/cim:VAdjIEEE.adjslew>/g, obj, "adjslew", base.to_float, sub, context);
                base.parse_element (/<cim:VAdjIEEE.taoff>([\s\S]*?)<\/cim:VAdjIEEE.taoff>/g, obj, "taoff", base.to_string, sub, context);
                base.parse_element (/<cim:VAdjIEEE.taon>([\s\S]*?)<\/cim:VAdjIEEE.taon>/g, obj, "taon", base.to_string, sub, context);
                base.parse_element (/<cim:VAdjIEEE.vadjf>([\s\S]*?)<\/cim:VAdjIEEE.vadjf>/g, obj, "vadjf", base.to_float, sub, context);
                base.parse_element (/<cim:VAdjIEEE.vadjmax>([\s\S]*?)<\/cim:VAdjIEEE.vadjmax>/g, obj, "vadjmax", base.to_string, sub, context);
                base.parse_element (/<cim:VAdjIEEE.vadjmin>([\s\S]*?)<\/cim:VAdjIEEE.vadjmin>/g, obj, "vadjmin", base.to_string, sub, context);
                var bucket = context.parsed.VAdjIEEE;
                if (null == bucket)
                   context.parsed.VAdjIEEE = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = VoltageAdjusterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "VAdjIEEE", "adjslew", base.from_float, fields);
                base.export_element (obj, "VAdjIEEE", "taoff", base.from_string, fields);
                base.export_element (obj, "VAdjIEEE", "taon", base.from_string, fields);
                base.export_element (obj, "VAdjIEEE", "vadjf", base.from_float, fields);
                base.export_element (obj, "VAdjIEEE", "vadjmax", base.from_string, fields);
                base.export_element (obj, "VAdjIEEE", "vadjmin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VAdjIEEE_collapse" aria-expanded="true" aria-controls="VAdjIEEE_collapse" style="margin-left: 10px;">VAdjIEEE</a></legend>
                    <div id="VAdjIEEE_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + VoltageAdjusterDynamics.prototype.template.call (this) +
                    `
                    {{#adjslew}}<div><b>adjslew</b>: {{adjslew}}</div>{{/adjslew}}
                    {{#taoff}}<div><b>taoff</b>: {{taoff}}</div>{{/taoff}}
                    {{#taon}}<div><b>taon</b>: {{taon}}</div>{{/taon}}
                    {{#vadjf}}<div><b>vadjf</b>: {{vadjf}}</div>{{/vadjf}}
                    {{#vadjmax}}<div><b>vadjmax</b>: {{vadjmax}}</div>{{/vadjmax}}
                    {{#vadjmin}}<div><b>vadjmin</b>: {{vadjmin}}</div>{{/vadjmin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VAdjIEEE_collapse" aria-expanded="true" aria-controls="VAdjIEEE_collapse" style="margin-left: 10px;">VAdjIEEE</a></legend>
                    <div id="VAdjIEEE_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + VoltageAdjusterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='adjslew'>adjslew: </label><div class='col-sm-8'><input id='adjslew' class='form-control' type='text'{{#adjslew}} value='{{adjslew}}'{{/adjslew}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='taoff'>taoff: </label><div class='col-sm-8'><input id='taoff' class='form-control' type='text'{{#taoff}} value='{{taoff}}'{{/taoff}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='taon'>taon: </label><div class='col-sm-8'><input id='taon' class='form-control' type='text'{{#taon}} value='{{taon}}'{{/taon}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vadjf'>vadjf: </label><div class='col-sm-8'><input id='vadjf' class='form-control' type='text'{{#vadjf}} value='{{vadjf}}'{{/vadjf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vadjmax'>vadjmax: </label><div class='col-sm-8'><input id='vadjmax' class='form-control' type='text'{{#vadjmax}} value='{{vadjmax}}'{{/vadjmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vadjmin'>vadjmin: </label><div class='col-sm-8'><input id='vadjmin' class='form-control' type='text'{{#vadjmin}} value='{{vadjmin}}'{{/vadjmin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        return (
            {
                VoltageAdjusterDynamics: VoltageAdjusterDynamics,
                VAdjIEEE: VAdjIEEE
            }
        );
    }
);