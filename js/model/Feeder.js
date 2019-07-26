define
(
    ["model/base", "model/Wires"],
    function (base, Wires)
    {

        class Circuit extends Wires.Line
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Circuit;
                if (null == bucket)
                   cim_data.Circuit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Circuit[obj.id];
            }

            parse (context, sub)
            {
                let obj = Wires.Line.prototype.parse.call (this, context, sub);
                obj.cls = "Circuit";
                base.parse_attributes (/<cim:Circuit.EndBay\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EndBay", sub, context);
                base.parse_attributes (/<cim:Circuit.EndTerminal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EndTerminal", sub, context);
                let bucket = context.parsed.Circuit;
                if (null == bucket)
                   context.parsed.Circuit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Wires.Line.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Circuit", "EndBay", "EndBay", fields);
                base.export_attributes (obj, "Circuit", "EndTerminal", "EndTerminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Circuit_collapse" aria-expanded="true" aria-controls="Circuit_collapse" style="margin-left: 10px;">Circuit</a></legend>
                    <div id="Circuit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.Line.prototype.template.call (this) +
                    `
                    {{#EndBay}}<div><b>EndBay</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/EndBay}}
                    {{#EndTerminal}}<div><b>EndTerminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/EndTerminal}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EndBay"]) obj["EndBay_string"] = obj["EndBay"].join ();
                if (obj["EndTerminal"]) obj["EndTerminal_string"] = obj["EndTerminal"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EndBay_string"];
                delete obj["EndTerminal_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Circuit_collapse" aria-expanded="true" aria-controls="{{id}}_Circuit_collapse" style="margin-left: 10px;">Circuit</a></legend>
                    <div id="{{id}}_Circuit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.Line.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "Circuit" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndBay", "0..*", "0..1", "Bay", "Circuit"],
                            ["EndTerminal", "0..*", "0..1", "Terminal", "Circuit"]
                        ]
                    )
                );
            }
        }

        return (
            {
                Circuit: Circuit
            }
        );
    }
);