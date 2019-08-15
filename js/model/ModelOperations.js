define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * The type of model operation.
         *
         * This class is referenced by model operations and defines the kind of operation.
         *
         */
        class ModelOperationDescription extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ModelOperationDescription;
                if (null == bucket)
                   cim_data.ModelOperationDescription = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelOperationDescription[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ModelOperationDescription";
                base.parse_attributes (/<cim:ModelOperationDescription.OperationDatasetArgDescription\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperationDatasetArgDescription", sub, context);
                base.parse_attributes (/<cim:ModelOperationDescription.ModelOperation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelOperation", sub, context);
                let bucket = context.parsed.ModelOperationDescription;
                if (null == bucket)
                   context.parsed.ModelOperationDescription = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ModelOperationDescription", "OperationDatasetArgDescription", "OperationDatasetArgDescription", fields);
                base.export_attributes (obj, "ModelOperationDescription", "ModelOperation", "ModelOperation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelOperationDescription_collapse" aria-expanded="true" aria-controls="ModelOperationDescription_collapse" style="margin-left: 10px;">ModelOperationDescription</a></legend>
                    <div id="ModelOperationDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#OperationDatasetArgDescription}}<div><b>OperationDatasetArgDescription</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OperationDatasetArgDescription}}
                    {{#ModelOperation}}<div><b>ModelOperation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ModelOperation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["OperationDatasetArgDescription"]) obj["OperationDatasetArgDescription_string"] = obj["OperationDatasetArgDescription"].join ();
                if (obj["ModelOperation"]) obj["ModelOperation_string"] = obj["ModelOperation"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["OperationDatasetArgDescription_string"];
                delete obj["ModelOperation_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelOperationDescription_collapse" aria-expanded="true" aria-controls="{{id}}_ModelOperationDescription_collapse" style="margin-left: 10px;">ModelOperationDescription</a></legend>
                    <div id="{{id}}_ModelOperationDescription_collapse" class="collapse in show" style="margin-left: 10px;">
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
                obj = obj || { id: id, cls: "ModelOperationDescription" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperationDatasetArgDescription", "0..*", "1", "ModelOperationArgDescription", "ModelOperationDefinition"],
                            ["ModelOperation", "0..*", "1", "ModelOperation", "ModelOperationDescription"]
                        ]
                    )
                );
            }
        }

        /**
         * A concrete sequence of operations.
         *
         * For example, this may be used to describe a specific audit trail, a script or other specific set of actions on specific datasets.
         *
         */
        class ModelOperationSequence extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ModelOperationSequence;
                if (null == bucket)
                   cim_data.ModelOperationSequence = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelOperationSequence[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ModelOperationSequence";
                base.parse_attributes (/<cim:ModelOperationSequence.ModelOperation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelOperation", sub, context);
                let bucket = context.parsed.ModelOperationSequence;
                if (null == bucket)
                   context.parsed.ModelOperationSequence = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ModelOperationSequence", "ModelOperation", "ModelOperation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelOperationSequence_collapse" aria-expanded="true" aria-controls="ModelOperationSequence_collapse" style="margin-left: 10px;">ModelOperationSequence</a></legend>
                    <div id="ModelOperationSequence_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ModelOperation}}<div><b>ModelOperation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ModelOperation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ModelOperation"]) obj["ModelOperation_string"] = obj["ModelOperation"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ModelOperation_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelOperationSequence_collapse" aria-expanded="true" aria-controls="{{id}}_ModelOperationSequence_collapse" style="margin-left: 10px;">ModelOperationSequence</a></legend>
                    <div id="{{id}}_ModelOperationSequence_collapse" class="collapse in show" style="margin-left: 10px;">
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
                obj = obj || { id: id, cls: "ModelOperationSequence" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ModelOperation", "0..*", "1", "ModelOperation", "OperationSequence"]
                        ]
                    )
                );
            }
        }

        /**
         * The type of custom operation dataset role for an operation description.
         *
         */
        class ModelOperationArgDescription extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ModelOperationArgDescription;
                if (null == bucket)
                   cim_data.ModelOperationArgDescription = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelOperationArgDescription[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ModelOperationArgDescription";
                base.parse_element (/<cim:ModelOperationArgDescription.multiplicityMaximum>([\s\S]*?)<\/cim:ModelOperationArgDescription.multiplicityMaximum>/g, obj, "multiplicityMaximum", base.to_string, sub, context);
                base.parse_element (/<cim:ModelOperationArgDescription.multiplicityMinimum>([\s\S]*?)<\/cim:ModelOperationArgDescription.multiplicityMinimum>/g, obj, "multiplicityMinimum", base.to_string, sub, context);
                base.parse_attribute (/<cim:ModelOperationArgDescription.ModelOperationDefinition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelOperationDefinition", sub, context);
                let bucket = context.parsed.ModelOperationArgDescription;
                if (null == bucket)
                   context.parsed.ModelOperationArgDescription = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ModelOperationArgDescription", "multiplicityMaximum", "multiplicityMaximum",  base.from_string, fields);
                base.export_element (obj, "ModelOperationArgDescription", "multiplicityMinimum", "multiplicityMinimum",  base.from_string, fields);
                base.export_attribute (obj, "ModelOperationArgDescription", "ModelOperationDefinition", "ModelOperationDefinition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelOperationArgDescription_collapse" aria-expanded="true" aria-controls="ModelOperationArgDescription_collapse" style="margin-left: 10px;">ModelOperationArgDescription</a></legend>
                    <div id="ModelOperationArgDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#multiplicityMaximum}}<div><b>multiplicityMaximum</b>: {{multiplicityMaximum}}</div>{{/multiplicityMaximum}}
                    {{#multiplicityMinimum}}<div><b>multiplicityMinimum</b>: {{multiplicityMinimum}}</div>{{/multiplicityMinimum}}
                    {{#ModelOperationDefinition}}<div><b>ModelOperationDefinition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ModelOperationDefinition}}");}); return false;'>{{ModelOperationDefinition}}</a></div>{{/ModelOperationDefinition}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelOperationArgDescription_collapse" aria-expanded="true" aria-controls="{{id}}_ModelOperationArgDescription_collapse" style="margin-left: 10px;">ModelOperationArgDescription</a></legend>
                    <div id="{{id}}_ModelOperationArgDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplicityMaximum'>multiplicityMaximum: </label><div class='col-sm-8'><input id='{{id}}_multiplicityMaximum' class='form-control' type='text'{{#multiplicityMaximum}} value='{{multiplicityMaximum}}'{{/multiplicityMaximum}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplicityMinimum'>multiplicityMinimum: </label><div class='col-sm-8'><input id='{{id}}_multiplicityMinimum' class='form-control' type='text'{{#multiplicityMinimum}} value='{{multiplicityMinimum}}'{{/multiplicityMinimum}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ModelOperationDefinition'>ModelOperationDefinition: </label><div class='col-sm-8'><input id='{{id}}_ModelOperationDefinition' class='form-control' type='text'{{#ModelOperationDefinition}} value='{{ModelOperationDefinition}}'{{/ModelOperationDefinition}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ModelOperationArgDescription" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplicityMaximum").value; if ("" !== temp) obj["multiplicityMaximum"] = temp;
                temp = document.getElementById (id + "_multiplicityMinimum").value; if ("" !== temp) obj["multiplicityMinimum"] = temp;
                temp = document.getElementById (id + "_ModelOperationDefinition").value; if ("" !== temp) obj["ModelOperationDefinition"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ModelOperationDefinition", "1", "0..*", "ModelOperationDescription", "OperationDatasetArgDescription"]
                        ]
                    )
                );
            }
        }

        /**
         * An operation performed on models.
         *
         */
        class ModelOperation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ModelOperation;
                if (null == bucket)
                   cim_data.ModelOperation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelOperation[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ModelOperation";
                base.parse_element (/<cim:ModelOperation.sequenceNumber>([\s\S]*?)<\/cim:ModelOperation.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:ModelOperation.OperationSequence\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperationSequence", sub, context);
                base.parse_attribute (/<cim:ModelOperation.ModelOperationDescription\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelOperationDescription", sub, context);
                base.parse_attributes (/<cim:ModelOperation.ModelOperationArg\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelOperationArg", sub, context);
                let bucket = context.parsed.ModelOperation;
                if (null == bucket)
                   context.parsed.ModelOperation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ModelOperation", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_attribute (obj, "ModelOperation", "OperationSequence", "OperationSequence", fields);
                base.export_attribute (obj, "ModelOperation", "ModelOperationDescription", "ModelOperationDescription", fields);
                base.export_attributes (obj, "ModelOperation", "ModelOperationArg", "ModelOperationArg", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelOperation_collapse" aria-expanded="true" aria-controls="ModelOperation_collapse" style="margin-left: 10px;">ModelOperation</a></legend>
                    <div id="ModelOperation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#OperationSequence}}<div><b>OperationSequence</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OperationSequence}}");}); return false;'>{{OperationSequence}}</a></div>{{/OperationSequence}}
                    {{#ModelOperationDescription}}<div><b>ModelOperationDescription</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ModelOperationDescription}}");}); return false;'>{{ModelOperationDescription}}</a></div>{{/ModelOperationDescription}}
                    {{#ModelOperationArg}}<div><b>ModelOperationArg</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ModelOperationArg}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ModelOperationArg"]) obj["ModelOperationArg_string"] = obj["ModelOperationArg"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ModelOperationArg_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelOperation_collapse" aria-expanded="true" aria-controls="{{id}}_ModelOperation_collapse" style="margin-left: 10px;">ModelOperation</a></legend>
                    <div id="{{id}}_ModelOperation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OperationSequence'>OperationSequence: </label><div class='col-sm-8'><input id='{{id}}_OperationSequence' class='form-control' type='text'{{#OperationSequence}} value='{{OperationSequence}}'{{/OperationSequence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ModelOperationDescription'>ModelOperationDescription: </label><div class='col-sm-8'><input id='{{id}}_ModelOperationDescription' class='form-control' type='text'{{#ModelOperationDescription}} value='{{ModelOperationDescription}}'{{/ModelOperationDescription}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ModelOperation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" !== temp) obj["sequenceNumber"] = temp;
                temp = document.getElementById (id + "_OperationSequence").value; if ("" !== temp) obj["OperationSequence"] = temp;
                temp = document.getElementById (id + "_ModelOperationDescription").value; if ("" !== temp) obj["ModelOperationDescription"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperationSequence", "1", "0..*", "ModelOperationSequence", "ModelOperation"],
                            ["ModelOperationDescription", "1", "0..*", "ModelOperationDescription", "ModelOperation"],
                            ["ModelOperationArg", "0..*", "1", "ModelOperationArg", "ModelOperation"]
                        ]
                    )
                );
            }
        }

        /**
         * Describes the role a dataset plays in a model operation.
         *
         * The role is applicable only in the context of a single operation.
         *
         */
        class ModelOperationArg extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ModelOperationArg;
                if (null == bucket)
                   cim_data.ModelOperationArg = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelOperationArg[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ModelOperationArg";
                base.parse_element (/<cim:ModelOperationArg.sequenceNumber>([\s\S]*?)<\/cim:ModelOperationArg.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:ModelOperationArg.ModelOperation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ModelOperation", sub, context);
                let bucket = context.parsed.ModelOperationArg;
                if (null == bucket)
                   context.parsed.ModelOperationArg = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ModelOperationArg", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_attribute (obj, "ModelOperationArg", "ModelOperation", "ModelOperation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelOperationArg_collapse" aria-expanded="true" aria-controls="ModelOperationArg_collapse" style="margin-left: 10px;">ModelOperationArg</a></legend>
                    <div id="ModelOperationArg_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#ModelOperation}}<div><b>ModelOperation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ModelOperation}}");}); return false;'>{{ModelOperation}}</a></div>{{/ModelOperation}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelOperationArg_collapse" aria-expanded="true" aria-controls="{{id}}_ModelOperationArg_collapse" style="margin-left: 10px;">ModelOperationArg</a></legend>
                    <div id="{{id}}_ModelOperationArg_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ModelOperation'>ModelOperation: </label><div class='col-sm-8'><input id='{{id}}_ModelOperation' class='form-control' type='text'{{#ModelOperation}} value='{{ModelOperation}}'{{/ModelOperation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ModelOperationArg" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" !== temp) obj["sequenceNumber"] = temp;
                temp = document.getElementById (id + "_ModelOperation").value; if ("" !== temp) obj["ModelOperation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ModelOperation", "1", "0..*", "ModelOperation", "ModelOperationArg"]
                        ]
                    )
                );
            }
        }

        class IncrementalDatasetArgDescription extends ModelOperationArgDescription
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.IncrementalDatasetArgDescription;
                if (null == bucket)
                   cim_data.IncrementalDatasetArgDescription = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IncrementalDatasetArgDescription[obj.id];
            }

            parse (context, sub)
            {
                let obj = ModelOperationArgDescription.prototype.parse.call (this, context, sub);
                obj.cls = "IncrementalDatasetArgDescription";
                base.parse_attributes (/<cim:IncrementalDatasetArgDescription.IncrementalDatasetArg\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IncrementalDatasetArg", sub, context);
                let bucket = context.parsed.IncrementalDatasetArgDescription;
                if (null == bucket)
                   context.parsed.IncrementalDatasetArgDescription = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ModelOperationArgDescription.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "IncrementalDatasetArgDescription", "IncrementalDatasetArg", "IncrementalDatasetArg", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IncrementalDatasetArgDescription_collapse" aria-expanded="true" aria-controls="IncrementalDatasetArgDescription_collapse" style="margin-left: 10px;">IncrementalDatasetArgDescription</a></legend>
                    <div id="IncrementalDatasetArgDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelOperationArgDescription.prototype.template.call (this) +
                    `
                    {{#IncrementalDatasetArg}}<div><b>IncrementalDatasetArg</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/IncrementalDatasetArg}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["IncrementalDatasetArg"]) obj["IncrementalDatasetArg_string"] = obj["IncrementalDatasetArg"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["IncrementalDatasetArg_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IncrementalDatasetArgDescription_collapse" aria-expanded="true" aria-controls="{{id}}_IncrementalDatasetArgDescription_collapse" style="margin-left: 10px;">IncrementalDatasetArgDescription</a></legend>
                    <div id="{{id}}_IncrementalDatasetArgDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelOperationArgDescription.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "IncrementalDatasetArgDescription" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["IncrementalDatasetArg", "0..*", "1", "IncrementalDatasetArg", "IncrementalDatasetArgDescription"]
                        ]
                    )
                );
            }
        }

        class DatasetArgDescription extends ModelOperationArgDescription
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DatasetArgDescription;
                if (null == bucket)
                   cim_data.DatasetArgDescription = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DatasetArgDescription[obj.id];
            }

            parse (context, sub)
            {
                let obj = ModelOperationArgDescription.prototype.parse.call (this, context, sub);
                obj.cls = "DatasetArgDescription";
                base.parse_attributes (/<cim:DatasetArgDescription.OperationDatasetArg\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperationDatasetArg", sub, context);
                let bucket = context.parsed.DatasetArgDescription;
                if (null == bucket)
                   context.parsed.DatasetArgDescription = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ModelOperationArgDescription.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "DatasetArgDescription", "OperationDatasetArg", "OperationDatasetArg", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DatasetArgDescription_collapse" aria-expanded="true" aria-controls="DatasetArgDescription_collapse" style="margin-left: 10px;">DatasetArgDescription</a></legend>
                    <div id="DatasetArgDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelOperationArgDescription.prototype.template.call (this) +
                    `
                    {{#OperationDatasetArg}}<div><b>OperationDatasetArg</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OperationDatasetArg}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["OperationDatasetArg"]) obj["OperationDatasetArg_string"] = obj["OperationDatasetArg"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["OperationDatasetArg_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DatasetArgDescription_collapse" aria-expanded="true" aria-controls="{{id}}_DatasetArgDescription_collapse" style="margin-left: 10px;">DatasetArgDescription</a></legend>
                    <div id="{{id}}_DatasetArgDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelOperationArgDescription.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "DatasetArgDescription" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperationDatasetArg", "0..*", "1", "DatasetArg", "OperationDatasetArgDescription"]
                        ]
                    )
                );
            }
        }

        /**
         * A model operation argument referencing a dataset instance.
         *
         */
        class DatasetArg extends ModelOperationArg
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DatasetArg;
                if (null == bucket)
                   cim_data.DatasetArg = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DatasetArg[obj.id];
            }

            parse (context, sub)
            {
                let obj = ModelOperationArg.prototype.parse.call (this, context, sub);
                obj.cls = "DatasetArg";
                base.parse_attribute (/<cim:DatasetArg.OperationDatasetArgDescription\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OperationDatasetArgDescription", sub, context);
                base.parse_attribute (/<cim:DatasetArg.Dataset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Dataset", sub, context);
                let bucket = context.parsed.DatasetArg;
                if (null == bucket)
                   context.parsed.DatasetArg = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ModelOperationArg.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DatasetArg", "OperationDatasetArgDescription", "OperationDatasetArgDescription", fields);
                base.export_attribute (obj, "DatasetArg", "Dataset", "Dataset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DatasetArg_collapse" aria-expanded="true" aria-controls="DatasetArg_collapse" style="margin-left: 10px;">DatasetArg</a></legend>
                    <div id="DatasetArg_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelOperationArg.prototype.template.call (this) +
                    `
                    {{#OperationDatasetArgDescription}}<div><b>OperationDatasetArgDescription</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OperationDatasetArgDescription}}");}); return false;'>{{OperationDatasetArgDescription}}</a></div>{{/OperationDatasetArgDescription}}
                    {{#Dataset}}<div><b>Dataset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Dataset}}");}); return false;'>{{Dataset}}</a></div>{{/Dataset}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DatasetArg_collapse" aria-expanded="true" aria-controls="{{id}}_DatasetArg_collapse" style="margin-left: 10px;">DatasetArg</a></legend>
                    <div id="{{id}}_DatasetArg_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelOperationArg.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OperationDatasetArgDescription'>OperationDatasetArgDescription: </label><div class='col-sm-8'><input id='{{id}}_OperationDatasetArgDescription' class='form-control' type='text'{{#OperationDatasetArgDescription}} value='{{OperationDatasetArgDescription}}'{{/OperationDatasetArgDescription}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Dataset'>Dataset: </label><div class='col-sm-8'><input id='{{id}}_Dataset' class='form-control' type='text'{{#Dataset}} value='{{Dataset}}'{{/Dataset}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DatasetArg" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_OperationDatasetArgDescription").value; if ("" !== temp) obj["OperationDatasetArgDescription"] = temp;
                temp = document.getElementById (id + "_Dataset").value; if ("" !== temp) obj["Dataset"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperationDatasetArgDescription", "1", "0..*", "DatasetArgDescription", "OperationDatasetArg"],
                            ["Dataset", "1", "0..*", "InstanceSet", "DatasetArg"]
                        ]
                    )
                );
            }
        }

        /**
         * A generic model operation argument referencing an incremental change description.
         *
         */
        class IncrementalDatasetArg extends ModelOperationArg
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.IncrementalDatasetArg;
                if (null == bucket)
                   cim_data.IncrementalDatasetArg = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IncrementalDatasetArg[obj.id];
            }

            parse (context, sub)
            {
                let obj = ModelOperationArg.prototype.parse.call (this, context, sub);
                obj.cls = "IncrementalDatasetArg";
                base.parse_attribute (/<cim:IncrementalDatasetArg.IncrementalDatasetArgDescription\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IncrementalDatasetArgDescription", sub, context);
                base.parse_attribute (/<cim:IncrementalDatasetArg.IncrementalDataset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IncrementalDataset", sub, context);
                let bucket = context.parsed.IncrementalDatasetArg;
                if (null == bucket)
                   context.parsed.IncrementalDatasetArg = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ModelOperationArg.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "IncrementalDatasetArg", "IncrementalDatasetArgDescription", "IncrementalDatasetArgDescription", fields);
                base.export_attribute (obj, "IncrementalDatasetArg", "IncrementalDataset", "IncrementalDataset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IncrementalDatasetArg_collapse" aria-expanded="true" aria-controls="IncrementalDatasetArg_collapse" style="margin-left: 10px;">IncrementalDatasetArg</a></legend>
                    <div id="IncrementalDatasetArg_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelOperationArg.prototype.template.call (this) +
                    `
                    {{#IncrementalDatasetArgDescription}}<div><b>IncrementalDatasetArgDescription</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{IncrementalDatasetArgDescription}}");}); return false;'>{{IncrementalDatasetArgDescription}}</a></div>{{/IncrementalDatasetArgDescription}}
                    {{#IncrementalDataset}}<div><b>IncrementalDataset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{IncrementalDataset}}");}); return false;'>{{IncrementalDataset}}</a></div>{{/IncrementalDataset}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IncrementalDatasetArg_collapse" aria-expanded="true" aria-controls="{{id}}_IncrementalDatasetArg_collapse" style="margin-left: 10px;">IncrementalDatasetArg</a></legend>
                    <div id="{{id}}_IncrementalDatasetArg_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ModelOperationArg.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IncrementalDatasetArgDescription'>IncrementalDatasetArgDescription: </label><div class='col-sm-8'><input id='{{id}}_IncrementalDatasetArgDescription' class='form-control' type='text'{{#IncrementalDatasetArgDescription}} value='{{IncrementalDatasetArgDescription}}'{{/IncrementalDatasetArgDescription}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IncrementalDataset'>IncrementalDataset: </label><div class='col-sm-8'><input id='{{id}}_IncrementalDataset' class='form-control' type='text'{{#IncrementalDataset}} value='{{IncrementalDataset}}'{{/IncrementalDataset}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "IncrementalDatasetArg" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_IncrementalDatasetArgDescription").value; if ("" !== temp) obj["IncrementalDatasetArgDescription"] = temp;
                temp = document.getElementById (id + "_IncrementalDataset").value; if ("" !== temp) obj["IncrementalDataset"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["IncrementalDatasetArgDescription", "1", "0..*", "IncrementalDatasetArgDescription", "IncrementalDatasetArg"],
                            ["IncrementalDataset", "1", "0..*", "ChangeSet", "IncrementalDatasetArg"]
                        ]
                    )
                );
            }
        }

        return (
            {
                DatasetArgDescription: DatasetArgDescription,
                ModelOperationArg: ModelOperationArg,
                ModelOperation: ModelOperation,
                ModelOperationSequence: ModelOperationSequence,
                DatasetArg: DatasetArg,
                ModelOperationArgDescription: ModelOperationArgDescription,
                ModelOperationDescription: ModelOperationDescription,
                IncrementalDatasetArg: IncrementalDatasetArg,
                IncrementalDatasetArgDescription: IncrementalDatasetArgDescription
            }
        );
    }
);