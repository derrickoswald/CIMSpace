define
(
    ["model/base", "model/StandardModels"],
    /**
     * Static var compensator (SVC) models.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Static var compensator whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class StaticVarCompensatorDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.StaticVarCompensatorDynamics;
                if (null == bucket)
                   cim_data.StaticVarCompensatorDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StaticVarCompensatorDynamics[obj.id];
            }

            parse (context, sub)
            {
                let obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "StaticVarCompensatorDynamics";
                base.parse_attribute (/<cim:StaticVarCompensatorDynamics.StaticVarCompensator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StaticVarCompensator", sub, context);
                let bucket = context.parsed.StaticVarCompensatorDynamics;
                if (null == bucket)
                   context.parsed.StaticVarCompensatorDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "StaticVarCompensatorDynamics", "StaticVarCompensator", "StaticVarCompensator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StaticVarCompensatorDynamics_collapse" aria-expanded="true" aria-controls="StaticVarCompensatorDynamics_collapse" style="margin-left: 10px;">StaticVarCompensatorDynamics</a></legend>
                    <div id="StaticVarCompensatorDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#StaticVarCompensator}}<div><b>StaticVarCompensator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StaticVarCompensator}}&quot;);}); return false;'>{{StaticVarCompensator}}</a></div>{{/StaticVarCompensator}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StaticVarCompensatorDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_StaticVarCompensatorDynamics_collapse" style="margin-left: 10px;">StaticVarCompensatorDynamics</a></legend>
                    <div id="{{id}}_StaticVarCompensatorDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StaticVarCompensator'>StaticVarCompensator: </label><div class='col-sm-8'><input id='{{id}}_StaticVarCompensator' class='form-control' type='text'{{#StaticVarCompensator}} value='{{StaticVarCompensator}}'{{/StaticVarCompensator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "StaticVarCompensatorDynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_StaticVarCompensator").value; if ("" !== temp) obj["StaticVarCompensator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["StaticVarCompensator", "1", "0..1", "StaticVarCompensator", "StaticVarCompensatorDynamics"]
                        ]
                    )
                );
            }
        }

        return (
            {
                StaticVarCompensatorDynamics: StaticVarCompensatorDynamics
            }
        );
    }
);