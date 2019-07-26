define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * Site of an interface between interchange areas.
         *
         * The tie point can be a network branch (e.g., transmission line or transformer) or a switching device. For transmission lines, the interchange area boundary is usually at a designated point such as the middle of the line. Line end metering is then corrected for line losses.
         *
         */
        class TiePoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TiePoint;
                if (null == bucket)
                   cim_data.TiePoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TiePoint[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TiePoint";
                base.parse_element (/<cim:TiePoint.tiePointMWRating>([\s\S]*?)<\/cim:TiePoint.tiePointMWRating>/g, obj, "tiePointMWRating", base.to_string, sub, context);
                base.parse_attributes (/<cim:TiePoint.ByMktMeasurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ByMktMeasurement", sub, context);
                base.parse_attributes (/<cim:TiePoint.ForMktMeasurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ForMktMeasurement", sub, context);
                let bucket = context.parsed.TiePoint;
                if (null == bucket)
                   context.parsed.TiePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TiePoint", "tiePointMWRating", "tiePointMWRating",  base.from_string, fields);
                base.export_attributes (obj, "TiePoint", "ByMktMeasurement", "ByMktMeasurement", fields);
                base.export_attributes (obj, "TiePoint", "ForMktMeasurement", "ForMktMeasurement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TiePoint_collapse" aria-expanded="true" aria-controls="TiePoint_collapse" style="margin-left: 10px;">TiePoint</a></legend>
                    <div id="TiePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#tiePointMWRating}}<div><b>tiePointMWRating</b>: {{tiePointMWRating}}</div>{{/tiePointMWRating}}
                    {{#ByMktMeasurement}}<div><b>ByMktMeasurement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ByMktMeasurement}}
                    {{#ForMktMeasurement}}<div><b>ForMktMeasurement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ForMktMeasurement}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ByMktMeasurement"]) obj["ByMktMeasurement_string"] = obj["ByMktMeasurement"].join ();
                if (obj["ForMktMeasurement"]) obj["ForMktMeasurement_string"] = obj["ForMktMeasurement"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ByMktMeasurement_string"];
                delete obj["ForMktMeasurement_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TiePoint_collapse" aria-expanded="true" aria-controls="{{id}}_TiePoint_collapse" style="margin-left: 10px;">TiePoint</a></legend>
                    <div id="{{id}}_TiePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tiePointMWRating'>tiePointMWRating: </label><div class='col-sm-8'><input id='{{id}}_tiePointMWRating' class='form-control' type='text'{{#tiePointMWRating}} value='{{tiePointMWRating}}'{{/tiePointMWRating}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TiePoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_tiePointMWRating").value; if ("" !== temp) obj["tiePointMWRating"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ByMktMeasurement", "1..*", "1", "MktMeasurement", "ByTiePoint"],
                            ["ForMktMeasurement", "1..*", "1", "MktMeasurement", "ForTiePoint"]
                        ]
                    )
                );
            }
        }

        return (
            {
                TiePoint: TiePoint
            }
        );
    }
);