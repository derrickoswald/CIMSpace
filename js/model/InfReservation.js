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
                this._id = template.id;
                var bucket = cim_data.TiePoint;
                if (null == bucket)
                   cim_data.TiePoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TiePoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TiePoint";
                base.parse_element (/<cim:TiePoint.tiePointMWRating>([\s\S]*?)<\/cim:TiePoint.tiePointMWRating>/g, obj, "tiePointMWRating", base.to_string, sub, context);
                base.parse_attributes (/<cim:TiePoint.ForMktMeasurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ForMktMeasurement", sub, context);
                base.parse_attributes (/<cim:TiePoint.ByMktMeasurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ByMktMeasurement", sub, context);
                var bucket = context.parsed.TiePoint;
                if (null == bucket)
                   context.parsed.TiePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TiePoint", "tiePointMWRating", "tiePointMWRating",  base.from_string, fields);
                base.export_attributes (obj, "TiePoint", "ForMktMeasurement", "ForMktMeasurement", fields);
                base.export_attributes (obj, "TiePoint", "ByMktMeasurement", "ByMktMeasurement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TiePoint_collapse" aria-expanded="true" aria-controls="TiePoint_collapse" style="margin-left: 10px;">TiePoint</a></legend>
                    <div id="TiePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#tiePointMWRating}}<div><b>tiePointMWRating</b>: {{tiePointMWRating}}</div>{{/tiePointMWRating}}
                    {{#ForMktMeasurement}}<div><b>ForMktMeasurement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ForMktMeasurement}}
                    {{#ByMktMeasurement}}<div><b>ByMktMeasurement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ByMktMeasurement}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ForMktMeasurement) obj.ForMktMeasurement_string = obj.ForMktMeasurement.join ();
                if (obj.ByMktMeasurement) obj.ByMktMeasurement_string = obj.ByMktMeasurement.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ForMktMeasurement_string;
                delete obj.ByMktMeasurement_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TiePoint_collapse" aria-expanded="true" aria-controls="TiePoint_collapse" style="margin-left: 10px;">TiePoint</a></legend>
                    <div id="TiePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tiePointMWRating'>tiePointMWRating: </label><div class='col-sm-8'><input id='tiePointMWRating' class='form-control' type='text'{{#tiePointMWRating}} value='{{tiePointMWRating}}'{{/tiePointMWRating}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TiePoint" };
                super.submit (obj);
                temp = document.getElementById ("tiePointMWRating").value; if ("" != temp) obj.tiePointMWRating = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ForMktMeasurement", "MktMeasurement", "1..*", "1"],
                        ["ByMktMeasurement", "MktMeasurement", "1..*", "1"]
                    ]
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