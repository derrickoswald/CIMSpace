define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        class AlternateModelGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AlternateModelGroup;
                if (null == bucket)
                   cim_data.AlternateModelGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AlternateModelGroup[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AlternateModelGroup";
                base.parse_attributes (/<cim:AlternateModelGroup.AlternateModel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AlternateModel", sub, context);
                let bucket = context.parsed.AlternateModelGroup;
                if (null == bucket)
                   context.parsed.AlternateModelGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AlternateModelGroup", "AlternateModel", "AlternateModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AlternateModelGroup_collapse" aria-expanded="true" aria-controls="AlternateModelGroup_collapse" style="margin-left: 10px;">AlternateModelGroup</a></legend>
                    <div id="AlternateModelGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#AlternateModel}}<div><b>AlternateModel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AlternateModel}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["AlternateModel"]) obj["AlternateModel_string"] = obj["AlternateModel"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["AlternateModel_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AlternateModelGroup_collapse" aria-expanded="true" aria-controls="{{id}}_AlternateModelGroup_collapse" style="margin-left: 10px;">AlternateModelGroup</a></legend>
                    <div id="{{id}}_AlternateModelGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "AlternateModelGroup" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AlternateModel", "0..*", "1", "AlternateModel", "AlternateModelGroup"]
                        ]
                    )
                );
            }
        }

        class AlternateModel extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AlternateModel;
                if (null == bucket)
                   cim_data.AlternateModel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AlternateModel[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AlternateModel";
                base.parse_attribute (/<cim:AlternateModel.Dataset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Dataset", sub, context);
                base.parse_attribute (/<cim:AlternateModel.AlternateModelGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AlternateModelGroup", sub, context);
                let bucket = context.parsed.AlternateModel;
                if (null == bucket)
                   context.parsed.AlternateModel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AlternateModel", "Dataset", "Dataset", fields);
                base.export_attribute (obj, "AlternateModel", "AlternateModelGroup", "AlternateModelGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AlternateModel_collapse" aria-expanded="true" aria-controls="AlternateModel_collapse" style="margin-left: 10px;">AlternateModel</a></legend>
                    <div id="AlternateModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Dataset}}<div><b>Dataset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Dataset}}");}); return false;'>{{Dataset}}</a></div>{{/Dataset}}
                    {{#AlternateModelGroup}}<div><b>AlternateModelGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AlternateModelGroup}}");}); return false;'>{{AlternateModelGroup}}</a></div>{{/AlternateModelGroup}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AlternateModel_collapse" aria-expanded="true" aria-controls="{{id}}_AlternateModel_collapse" style="margin-left: 10px;">AlternateModel</a></legend>
                    <div id="{{id}}_AlternateModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Dataset'>Dataset: </label><div class='col-sm-8'><input id='{{id}}_Dataset' class='form-control' type='text'{{#Dataset}} value='{{Dataset}}'{{/Dataset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AlternateModelGroup'>AlternateModelGroup: </label><div class='col-sm-8'><input id='{{id}}_AlternateModelGroup' class='form-control' type='text'{{#AlternateModelGroup}} value='{{AlternateModelGroup}}'{{/AlternateModelGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AlternateModel" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Dataset").value; if ("" !== temp) obj["Dataset"] = temp;
                temp = document.getElementById (id + "_AlternateModelGroup").value; if ("" !== temp) obj["AlternateModelGroup"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Dataset", "1", "0..1", "DataSet", "AlternateModel"],
                            ["AlternateModelGroup", "1", "0..*", "AlternateModelGroup", "AlternateModel"]
                        ]
                    )
                );
            }
        }

        return (
            {
                AlternateModel: AlternateModel,
                AlternateModelGroup: AlternateModelGroup
            }
        );
    }
);