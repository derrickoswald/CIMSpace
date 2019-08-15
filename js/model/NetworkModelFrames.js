define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * A collection of model parts when combined form a case or part of a case.
         *
         */
        class AssemblyManifest extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssemblyManifest;
                if (null == bucket)
                   cim_data.AssemblyManifest = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssemblyManifest[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AssemblyManifest";
                let bucket = context.parsed.AssemblyManifest;
                if (null == bucket)
                   context.parsed.AssemblyManifest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssemblyManifest_collapse" aria-expanded="true" aria-controls="AssemblyManifest_collapse" style="margin-left: 10px;">AssemblyManifest</a></legend>
                    <div id="AssemblyManifest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssemblyManifest_collapse" aria-expanded="true" aria-controls="{{id}}_AssemblyManifest_collapse" style="margin-left: 10px;">AssemblyManifest</a></legend>
                    <div id="{{id}}_AssemblyManifest_collapse" class="collapse in show" style="margin-left: 10px;">
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
                obj = obj || { id: id, cls: "AssemblyManifest" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * The type of model.
         *
         * For example,  state estimator, planning, planning dynamics, short circuit, or real-time dynamics etc.     The model must conform to a profile.
         *
         */
        class ModelPartSpecification extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ModelPartSpecification;
                if (null == bucket)
                   cim_data.ModelPartSpecification = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelPartSpecification[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ModelPartSpecification";
                base.parse_attribute (/<cim:ModelPartSpecification.FrameworkPart\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FrameworkPart", sub, context);
                base.parse_attributes (/<cim:ModelPartSpecification.Model\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Model", sub, context);
                base.parse_attributes (/<cim:ModelPartSpecification.AssemblyDescription\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssemblyDescription", sub, context);
                let bucket = context.parsed.ModelPartSpecification;
                if (null == bucket)
                   context.parsed.ModelPartSpecification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ModelPartSpecification", "FrameworkPart", "FrameworkPart", fields);
                base.export_attributes (obj, "ModelPartSpecification", "Model", "Model", fields);
                base.export_attributes (obj, "ModelPartSpecification", "AssemblyDescription", "AssemblyDescription", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelPartSpecification_collapse" aria-expanded="true" aria-controls="ModelPartSpecification_collapse" style="margin-left: 10px;">ModelPartSpecification</a></legend>
                    <div id="ModelPartSpecification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#FrameworkPart}}<div><b>FrameworkPart</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FrameworkPart}}");}); return false;'>{{FrameworkPart}}</a></div>{{/FrameworkPart}}
                    {{#Model}}<div><b>Model</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Model}}
                    {{#AssemblyDescription}}<div><b>AssemblyDescription</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AssemblyDescription}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Model"]) obj["Model_string"] = obj["Model"].join ();
                if (obj["AssemblyDescription"]) obj["AssemblyDescription_string"] = obj["AssemblyDescription"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Model_string"];
                delete obj["AssemblyDescription_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelPartSpecification_collapse" aria-expanded="true" aria-controls="{{id}}_ModelPartSpecification_collapse" style="margin-left: 10px;">ModelPartSpecification</a></legend>
                    <div id="{{id}}_ModelPartSpecification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FrameworkPart'>FrameworkPart: </label><div class='col-sm-8'><input id='{{id}}_FrameworkPart' class='form-control' type='text'{{#FrameworkPart}} value='{{FrameworkPart}}'{{/FrameworkPart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssemblyDescription'>AssemblyDescription: </label><div class='col-sm-8'><input id='{{id}}_AssemblyDescription' class='form-control' type='text'{{#AssemblyDescription}} value='{{AssemblyDescription_string}}'{{/AssemblyDescription}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ModelPartSpecification" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_FrameworkPart").value; if ("" !== temp) obj["FrameworkPart"] = temp;
                temp = document.getElementById (id + "_AssemblyDescription").value; if ("" !== temp) obj["AssemblyDescription"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["FrameworkPart", "0..1", "0..*", "ModelAuthoritySet", "ModelSpecification"],
                            ["Model", "0..*", "1", "ModelPartVersion", "ModelSpecification"],
                            ["AssemblyDescription", "0..*", "0..*", "AssemblyDescription", "ModelSpecification"]
                        ]
                    )
                );
            }
        }

        /**
         * A Model is a collection of Datasets.
         *
         */
        class ModelToBeDeleted extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ModelToBeDeleted;
                if (null == bucket)
                   cim_data.ModelToBeDeleted = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelToBeDeleted[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ModelToBeDeleted";
                let bucket = context.parsed.ModelToBeDeleted;
                if (null == bucket)
                   context.parsed.ModelToBeDeleted = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelToBeDeleted_collapse" aria-expanded="true" aria-controls="ModelToBeDeleted_collapse" style="margin-left: 10px;">ModelToBeDeleted</a></legend>
                    <div id="ModelToBeDeleted_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelToBeDeleted_collapse" aria-expanded="true" aria-controls="{{id}}_ModelToBeDeleted_collapse" style="margin-left: 10px;">ModelToBeDeleted</a></legend>
                    <div id="{{id}}_ModelToBeDeleted_collapse" class="collapse in show" style="margin-left: 10px;">
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
                obj = obj || { id: id, cls: "ModelToBeDeleted" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Instructions to build a network model case, including when appropriate the results.
         *
         */
        class NetworkModelCaseDefinition extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkModelCaseDefinition;
                if (null == bucket)
                   cim_data.NetworkModelCaseDefinition = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkModelCaseDefinition[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkModelCaseDefinition";
                let bucket = context.parsed.NetworkModelCaseDefinition;
                if (null == bucket)
                   context.parsed.NetworkModelCaseDefinition = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkModelCaseDefinition_collapse" aria-expanded="true" aria-controls="NetworkModelCaseDefinition_collapse" style="margin-left: 10px;">NetworkModelCaseDefinition</a></legend>
                    <div id="NetworkModelCaseDefinition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkModelCaseDefinition_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkModelCaseDefinition_collapse" style="margin-left: 10px;">NetworkModelCaseDefinition</a></legend>
                    <div id="{{id}}_NetworkModelCaseDefinition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "NetworkModelCaseDefinition" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A Modeling Authority Set is a group of objects in a network model where the data is supplied and maintained by the same Modeling Authority.
         *
         * This class is typically not included in instance data exchange as this information is tracked by other mechanisms in the exchange.
         *
         */
        class ModelAuthoritySet extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ModelAuthoritySet;
                if (null == bucket)
                   cim_data.ModelAuthoritySet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelAuthoritySet[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ModelAuthoritySet";
                base.parse_attributes (/<cim:ModelAuthoritySet.ModelSpecification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelSpecification", sub, context);
                base.parse_attribute (/<cim:ModelAuthoritySet.ModelingAuthority\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelingAuthority", sub, context);
                let bucket = context.parsed.ModelAuthoritySet;
                if (null == bucket)
                   context.parsed.ModelAuthoritySet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ModelAuthoritySet", "ModelSpecification", "ModelSpecification", fields);
                base.export_attribute (obj, "ModelAuthoritySet", "ModelingAuthority", "ModelingAuthority", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelAuthoritySet_collapse" aria-expanded="true" aria-controls="ModelAuthoritySet_collapse" style="margin-left: 10px;">ModelAuthoritySet</a></legend>
                    <div id="ModelAuthoritySet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ModelSpecification}}<div><b>ModelSpecification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ModelSpecification}}
                    {{#ModelingAuthority}}<div><b>ModelingAuthority</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ModelingAuthority}}");}); return false;'>{{ModelingAuthority}}</a></div>{{/ModelingAuthority}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ModelSpecification"]) obj["ModelSpecification_string"] = obj["ModelSpecification"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ModelSpecification_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelAuthoritySet_collapse" aria-expanded="true" aria-controls="{{id}}_ModelAuthoritySet_collapse" style="margin-left: 10px;">ModelAuthoritySet</a></legend>
                    <div id="{{id}}_ModelAuthoritySet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ModelingAuthority'>ModelingAuthority: </label><div class='col-sm-8'><input id='{{id}}_ModelingAuthority' class='form-control' type='text'{{#ModelingAuthority}} value='{{ModelingAuthority}}'{{/ModelingAuthority}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ModelAuthoritySet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ModelingAuthority").value; if ("" !== temp) obj["ModelingAuthority"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ModelSpecification", "0..*", "0..1", "ModelPartSpecification", "FrameworkPart"],
                            ["ModelingAuthority", "1", "1..*", "ModelAuthority", "ModelingAuthoritySets"]
                        ]
                    )
                );
            }
        }

        class Operation extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Operation;
                if (null == bucket)
                   cim_data.Operation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Operation[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Operation";
                let bucket = context.parsed.Operation;
                if (null == bucket)
                   context.parsed.Operation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Operation_collapse" aria-expanded="true" aria-controls="Operation_collapse" style="margin-left: 10px;">Operation</a></legend>
                    <div id="Operation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Operation_collapse" aria-expanded="true" aria-controls="{{id}}_Operation_collapse" style="margin-left: 10px;">Operation</a></legend>
                    <div id="{{id}}_Operation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "Operation" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A Modeling Authority is an entity responsible for supplying and maintaining the data defining a specific set of objects in a network model.
         *
         */
        class ModelAuthority extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ModelAuthority;
                if (null == bucket)
                   cim_data.ModelAuthority = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelAuthority[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ModelAuthority";
                base.parse_attributes (/<cim:ModelAuthority.ModelingAuthoritySets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelingAuthoritySets", sub, context);
                let bucket = context.parsed.ModelAuthority;
                if (null == bucket)
                   context.parsed.ModelAuthority = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ModelAuthority", "ModelingAuthoritySets", "ModelingAuthoritySets", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelAuthority_collapse" aria-expanded="true" aria-controls="ModelAuthority_collapse" style="margin-left: 10px;">ModelAuthority</a></legend>
                    <div id="ModelAuthority_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ModelingAuthoritySets}}<div><b>ModelingAuthoritySets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ModelingAuthoritySets}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ModelingAuthoritySets"]) obj["ModelingAuthoritySets_string"] = obj["ModelingAuthoritySets"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ModelingAuthoritySets_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelAuthority_collapse" aria-expanded="true" aria-controls="{{id}}_ModelAuthority_collapse" style="margin-left: 10px;">ModelAuthority</a></legend>
                    <div id="{{id}}_ModelAuthority_collapse" class="collapse in show" style="margin-left: 10px;">
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
                obj = obj || { id: id, cls: "ModelAuthority" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ModelingAuthoritySets", "1..*", "1", "ModelAuthoritySet", "ModelingAuthority"]
                        ]
                    )
                );
            }
        }

        /**
         * A description for how to assemble model parts for a specific purpose.
         *
         */
        class AssemblyDescription extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssemblyDescription;
                if (null == bucket)
                   cim_data.AssemblyDescription = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssemblyDescription[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AssemblyDescription";
                base.parse_attributes (/<cim:AssemblyDescription.ModelSpecification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelSpecification", sub, context);
                let bucket = context.parsed.AssemblyDescription;
                if (null == bucket)
                   context.parsed.AssemblyDescription = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AssemblyDescription", "ModelSpecification", "ModelSpecification", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssemblyDescription_collapse" aria-expanded="true" aria-controls="AssemblyDescription_collapse" style="margin-left: 10px;">AssemblyDescription</a></legend>
                    <div id="AssemblyDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ModelSpecification}}<div><b>ModelSpecification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ModelSpecification}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ModelSpecification"]) obj["ModelSpecification_string"] = obj["ModelSpecification"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ModelSpecification_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssemblyDescription_collapse" aria-expanded="true" aria-controls="{{id}}_AssemblyDescription_collapse" style="margin-left: 10px;">AssemblyDescription</a></legend>
                    <div id="{{id}}_AssemblyDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ModelSpecification'>ModelSpecification: </label><div class='col-sm-8'><input id='{{id}}_ModelSpecification' class='form-control' type='text'{{#ModelSpecification}} value='{{ModelSpecification_string}}'{{/ModelSpecification}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssemblyDescription" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ModelSpecification").value; if ("" !== temp) obj["ModelSpecification"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ModelSpecification", "0..*", "0..*", "ModelPartSpecification", "AssemblyDescription"]
                        ]
                    )
                );
            }
        }

        /**
         * Load a model part version.
         *
         */
        class LoadModelPartVersion extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LoadModelPartVersion;
                if (null == bucket)
                   cim_data.LoadModelPartVersion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadModelPartVersion[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LoadModelPartVersion";
                let bucket = context.parsed.LoadModelPartVersion;
                if (null == bucket)
                   context.parsed.LoadModelPartVersion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadModelPartVersion_collapse" aria-expanded="true" aria-controls="LoadModelPartVersion_collapse" style="margin-left: 10px;">LoadModelPartVersion</a></legend>
                    <div id="LoadModelPartVersion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadModelPartVersion_collapse" aria-expanded="true" aria-controls="{{id}}_LoadModelPartVersion_collapse" style="margin-left: 10px;">LoadModelPartVersion</a></legend>
                    <div id="{{id}}_LoadModelPartVersion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "LoadModelPartVersion" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A complete model can be used in applications to perform meaningful calculations, e.g. a study case in offline tools or a real time model in a SCADA/EMS.
         *
         */
        class CompleteModelToBeDeleted extends ModelToBeDeleted
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CompleteModelToBeDeleted;
                if (null == bucket)
                   cim_data.CompleteModelToBeDeleted = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CompleteModelToBeDeleted[obj.id];
            }

            parse (context, sub)
            {
                let obj = ModelToBeDeleted.prototype.parse.call (this, context, sub);
                obj.cls = "CompleteModelToBeDeleted";
                let bucket = context.parsed.CompleteModelToBeDeleted;
                if (null == bucket)
                   context.parsed.CompleteModelToBeDeleted = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ModelToBeDeleted.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CompleteModelToBeDeleted_collapse" aria-expanded="true" aria-controls="CompleteModelToBeDeleted_collapse" style="margin-left: 10px;">CompleteModelToBeDeleted</a></legend>
                    <div id="CompleteModelToBeDeleted_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelToBeDeleted.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CompleteModelToBeDeleted_collapse" aria-expanded="true" aria-controls="{{id}}_CompleteModelToBeDeleted_collapse" style="margin-left: 10px;">CompleteModelToBeDeleted</a></legend>
                    <div id="{{id}}_CompleteModelToBeDeleted_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelToBeDeleted.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "CompleteModelToBeDeleted" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * This is a version of a part of a model.
         *
         * New instances of this class with new identity are instantiated upon changes to the content of this class or changes to the associated data set.  Instances of this class are considered immutable.  The case audit trail can reference this immutable data to exactly reproduce a case.
         *
         */
        class ModelPartVersion extends ModelToBeDeleted
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ModelPartVersion;
                if (null == bucket)
                   cim_data.ModelPartVersion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelPartVersion[obj.id];
            }

            parse (context, sub)
            {
                let obj = ModelToBeDeleted.prototype.parse.call (this, context, sub);
                obj.cls = "ModelPartVersion";
                base.parse_attribute (/<cim:ModelPartVersion.ModelSpecification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelSpecification", sub, context);
                let bucket = context.parsed.ModelPartVersion;
                if (null == bucket)
                   context.parsed.ModelPartVersion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ModelToBeDeleted.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ModelPartVersion", "ModelSpecification", "ModelSpecification", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelPartVersion_collapse" aria-expanded="true" aria-controls="ModelPartVersion_collapse" style="margin-left: 10px;">ModelPartVersion</a></legend>
                    <div id="ModelPartVersion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelToBeDeleted.prototype.template.call (this) +
                    `
                    {{#ModelSpecification}}<div><b>ModelSpecification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ModelSpecification}}");}); return false;'>{{ModelSpecification}}</a></div>{{/ModelSpecification}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelPartVersion_collapse" aria-expanded="true" aria-controls="{{id}}_ModelPartVersion_collapse" style="margin-left: 10px;">ModelPartVersion</a></legend>
                    <div id="{{id}}_ModelPartVersion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelToBeDeleted.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ModelSpecification'>ModelSpecification: </label><div class='col-sm-8'><input id='{{id}}_ModelSpecification' class='form-control' type='text'{{#ModelSpecification}} value='{{ModelSpecification}}'{{/ModelSpecification}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ModelPartVersion" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ModelSpecification").value; if ("" !== temp) obj["ModelSpecification"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ModelSpecification", "1", "0..*", "ModelPartSpecification", "Model"]
                        ]
                    )
                );
            }
        }

        /**
         * The type of alternate model frame.
         *
         * For example, it could be generator group used to represent generators in state estimator, planning, planning dynamics, short circuit, or real-time dynamics etc., but does not specifically represent any one alternative model. This need to know what objects to be removed in the realization of any one alternate model.
         *
         */
        class FrameworkPart extends ModelAuthoritySet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FrameworkPart;
                if (null == bucket)
                   cim_data.FrameworkPart = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FrameworkPart[obj.id];
            }

            parse (context, sub)
            {
                let obj = ModelAuthoritySet.prototype.parse.call (this, context, sub);
                obj.cls = "FrameworkPart";
                base.parse_attribute (/<cim:FrameworkPart.Frame\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Frame", sub, context);
                base.parse_attribute (/<cim:FrameworkPart.ModelFrameType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelFrameType", sub, context);
                let bucket = context.parsed.FrameworkPart;
                if (null == bucket)
                   context.parsed.FrameworkPart = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ModelAuthoritySet.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "FrameworkPart", "Frame", "Frame", fields);
                base.export_attribute (obj, "FrameworkPart", "ModelFrameType", "ModelFrameType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FrameworkPart_collapse" aria-expanded="true" aria-controls="FrameworkPart_collapse" style="margin-left: 10px;">FrameworkPart</a></legend>
                    <div id="FrameworkPart_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelAuthoritySet.prototype.template.call (this) +
                    `
                    {{#Frame}}<div><b>Frame</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Frame}}");}); return false;'>{{Frame}}</a></div>{{/Frame}}
                    {{#ModelFrameType}}<div><b>ModelFrameType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ModelFrameType}}");}); return false;'>{{ModelFrameType}}</a></div>{{/ModelFrameType}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FrameworkPart_collapse" aria-expanded="true" aria-controls="{{id}}_FrameworkPart_collapse" style="margin-left: 10px;">FrameworkPart</a></legend>
                    <div id="{{id}}_FrameworkPart_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelAuthoritySet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Frame'>Frame: </label><div class='col-sm-8'><input id='{{id}}_Frame' class='form-control' type='text'{{#Frame}} value='{{Frame}}'{{/Frame}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ModelFrameType'>ModelFrameType: </label><div class='col-sm-8'><input id='{{id}}_ModelFrameType' class='form-control' type='text'{{#ModelFrameType}} value='{{ModelFrameType}}'{{/ModelFrameType}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FrameworkPart" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Frame").value; if ("" !== temp) obj["Frame"] = temp;
                temp = document.getElementById (id + "_ModelFrameType").value; if ("" !== temp) obj["ModelFrameType"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Frame", "0..1", "0..*", "NetworkFrame", "FrameworkPart"],
                            ["ModelFrameType", "1", "0..*", "ModelFrameType", "ModelFrame"]
                        ]
                    )
                );
            }
        }

        /**
         * A framework part that is a boundary between 2 frames.
         *
         */
        class NetworkBoundary extends FrameworkPart
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkBoundary;
                if (null == bucket)
                   cim_data.NetworkBoundary = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkBoundary[obj.id];
            }

            parse (context, sub)
            {
                let obj = FrameworkPart.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkBoundary";
                let bucket = context.parsed.NetworkBoundary;
                if (null == bucket)
                   context.parsed.NetworkBoundary = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = FrameworkPart.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkBoundary_collapse" aria-expanded="true" aria-controls="NetworkBoundary_collapse" style="margin-left: 10px;">NetworkBoundary</a></legend>
                    <div id="NetworkBoundary_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + FrameworkPart.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkBoundary_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkBoundary_collapse" style="margin-left: 10px;">NetworkBoundary</a></legend>
                    <div id="{{id}}_NetworkBoundary_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + FrameworkPart.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "NetworkBoundary" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A region isolated by boundaries.
         *
         */
        class NetworkFrame extends FrameworkPart
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NetworkFrame;
                if (null == bucket)
                   cim_data.NetworkFrame = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NetworkFrame[obj.id];
            }

            parse (context, sub)
            {
                let obj = FrameworkPart.prototype.parse.call (this, context, sub);
                obj.cls = "NetworkFrame";
                base.parse_attributes (/<cim:NetworkFrame.FrameworkPart\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FrameworkPart", sub, context);
                let bucket = context.parsed.NetworkFrame;
                if (null == bucket)
                   context.parsed.NetworkFrame = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = FrameworkPart.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "NetworkFrame", "FrameworkPart", "FrameworkPart", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NetworkFrame_collapse" aria-expanded="true" aria-controls="NetworkFrame_collapse" style="margin-left: 10px;">NetworkFrame</a></legend>
                    <div id="NetworkFrame_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + FrameworkPart.prototype.template.call (this) +
                    `
                    {{#FrameworkPart}}<div><b>FrameworkPart</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FrameworkPart}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["FrameworkPart"]) obj["FrameworkPart_string"] = obj["FrameworkPart"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["FrameworkPart_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NetworkFrame_collapse" aria-expanded="true" aria-controls="{{id}}_NetworkFrame_collapse" style="margin-left: 10px;">NetworkFrame</a></legend>
                    <div id="{{id}}_NetworkFrame_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + FrameworkPart.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "NetworkFrame" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["FrameworkPart", "0..*", "0..1", "FrameworkPart", "Frame"]
                        ]
                    )
                );
            }
        }

        return (
            {
                AssemblyManifest: AssemblyManifest,
                ModelPartSpecification: ModelPartSpecification,
                NetworkModelCaseDefinition: NetworkModelCaseDefinition,
                NetworkFrame: NetworkFrame,
                LoadModelPartVersion: LoadModelPartVersion,
                ModelAuthority: ModelAuthority,
                ModelPartVersion: ModelPartVersion,
                Operation: Operation,
                CompleteModelToBeDeleted: CompleteModelToBeDeleted,
                ModelAuthoritySet: ModelAuthoritySet,
                NetworkBoundary: NetworkBoundary,
                ModelToBeDeleted: ModelToBeDeleted,
                AssemblyDescription: AssemblyDescription,
                FrameworkPart: FrameworkPart
            }
        );
    }
);