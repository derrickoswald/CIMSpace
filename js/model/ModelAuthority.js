define
(
    ["model/base"],
    /**
     * The package describes meta data for partitioning  power system models into non overlapping subsets of objects managed by a model authority.
     *
     */
    function (base)
    {

        /**
         * A Modeling Authority is an entity responsible for supplying and maintaining the data defining a specific set of objects in a network model.
         *
         */
        class ModelingAuthority extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ModelingAuthority;
                if (null == bucket)
                   cim_data.ModelingAuthority = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelingAuthority[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ModelingAuthority";
                base.parse_attributes (/<cim:ModelingAuthority.ModelingAuthoritySets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ModelingAuthoritySets", sub, context);
                var bucket = context.parsed.ModelingAuthority;
                if (null == bucket)
                   context.parsed.ModelingAuthority = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attributes (obj, "ModelingAuthority", "ModelingAuthoritySets", "ModelingAuthoritySets", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelingAuthority_collapse" aria-expanded="true" aria-controls="ModelingAuthority_collapse" style="margin-left: 10px;">ModelingAuthority</a></legend>
                    <div id="ModelingAuthority_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#ModelingAuthoritySets}}<div><b>ModelingAuthoritySets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ModelingAuthoritySets}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ModelingAuthoritySets) obj.ModelingAuthoritySets_string = obj.ModelingAuthoritySets.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ModelingAuthoritySets_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelingAuthority_collapse" aria-expanded="true" aria-controls="{{id}}_ModelingAuthority_collapse" style="margin-left: 10px;">ModelingAuthority</a></legend>
                    <div id="{{id}}_ModelingAuthority_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "ModelingAuthority" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ModelingAuthoritySets", "1..*", "1", "ModelingAuthoritySet", "ModelingAuthority"]
                        ]
                    )
                );
            }
        }

        /**
         * A Modeling Authority Set is a group of objects in a network model where the data is supplied and maintained by the same Modeling Authority.
         *
         * This class is typically not included in instance data exchange as this information is tracked by other mechanisms in the exchange.
         *
         */
        class ModelingAuthoritySet extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ModelingAuthoritySet;
                if (null == bucket)
                   cim_data.ModelingAuthoritySet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelingAuthoritySet[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ModelingAuthoritySet";
                base.parse_attribute (/<cim:ModelingAuthoritySet.ModelingAuthority\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ModelingAuthority", sub, context);
                var bucket = context.parsed.ModelingAuthoritySet;
                if (null == bucket)
                   context.parsed.ModelingAuthoritySet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "ModelingAuthoritySet", "ModelingAuthority", "ModelingAuthority", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelingAuthoritySet_collapse" aria-expanded="true" aria-controls="ModelingAuthoritySet_collapse" style="margin-left: 10px;">ModelingAuthoritySet</a></legend>
                    <div id="ModelingAuthoritySet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#ModelingAuthority}}<div><b>ModelingAuthority</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ModelingAuthority}}&quot;);})'>{{ModelingAuthority}}</a></div>{{/ModelingAuthority}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelingAuthoritySet_collapse" aria-expanded="true" aria-controls="{{id}}_ModelingAuthoritySet_collapse" style="margin-left: 10px;">ModelingAuthoritySet</a></legend>
                    <div id="{{id}}_ModelingAuthoritySet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ModelingAuthority'>ModelingAuthority: </label><div class='col-sm-8'><input id='{{id}}_ModelingAuthority' class='form-control' type='text'{{#ModelingAuthority}} value='{{ModelingAuthority}}'{{/ModelingAuthority}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ModelingAuthoritySet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ModelingAuthority").value; if ("" != temp) obj.ModelingAuthority = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ModelingAuthority", "1", "1..*", "ModelingAuthority", "ModelingAuthoritySets"]
                        ]
                    )
                );
            }
        }

        return (
            {
                ModelingAuthority: ModelingAuthority,
                ModelingAuthoritySet: ModelingAuthoritySet
            }
        );
    }
);