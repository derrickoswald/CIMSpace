define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * Used to define the type of generation for scheduling purposes.
         *
         */
        class EnergySchedulingType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EnergySchedulingType;
                if (null == bucket)
                   cim_data.EnergySchedulingType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergySchedulingType[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EnergySchedulingType";
                base.parse_attributes (/<cim:EnergySchedulingType.EnergySource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySource", sub, context);
                var bucket = context.parsed.EnergySchedulingType;
                if (null == bucket)
                   context.parsed.EnergySchedulingType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "EnergySchedulingType", "EnergySource", "EnergySource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergySchedulingType_collapse" aria-expanded="true" aria-controls="EnergySchedulingType_collapse" style="margin-left: 10px;">EnergySchedulingType</a></legend>
                    <div id="EnergySchedulingType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#EnergySource}}<div><b>EnergySource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EnergySource}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EnergySource) obj.EnergySource_string = obj.EnergySource.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EnergySource_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EnergySchedulingType_collapse" aria-expanded="true" aria-controls="{{id}}_EnergySchedulingType_collapse" style="margin-left: 10px;">EnergySchedulingType</a></legend>
                    <div id="{{id}}_EnergySchedulingType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "EnergySchedulingType" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergySource", "0..*", "0..1", "EnergySource", "EnergySchedulingType"]
                        ]
                    )
                );
            }
        }

        return (
            {
                EnergySchedulingType: EnergySchedulingType
            }
        );
    }
);