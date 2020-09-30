define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {
        /**
         * Examples would be "Boundary" or "Region" type of frame.
         *
         */
        class ModelFrameType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ModelFrameType;
                if (null == bucket)
                   cim_data.ModelFrameType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelFrameType[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ModelFrameType";
                base.parse_attributes (/<cim:ModelFrameType.ModelFrame\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelFrame", sub, context);
                let bucket = context.parsed.ModelFrameType;
                if (null == bucket)
                   context.parsed.ModelFrameType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ModelFrameType", "ModelFrame", "ModelFrame", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelFrameType_collapse" aria-expanded="true" aria-controls="ModelFrameType_collapse" style="margin-left: 10px;">ModelFrameType</a></legend>
                    <div id="ModelFrameType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ModelFrame}}<div><b>ModelFrame</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ModelFrame}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ModelFrame"]) obj["ModelFrame_string"] = obj["ModelFrame"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ModelFrame_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelFrameType_collapse" aria-expanded="true" aria-controls="{{id}}_ModelFrameType_collapse" style="margin-left: 10px;">ModelFrameType</a></legend>
                    <div id="{{id}}_ModelFrameType_collapse" class="collapse in show" style="margin-left: 10px;">
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
                obj = obj || { id: id, cls: "ModelFrameType" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ModelFrame", "0..*", "1", "FrameworkPart", "ModelFrameType"]
                        ]
                    )
                );
            }
        }

        return (
            {
                ModelFrameType: ModelFrameType
            }
        );
    }
);