define
(
    ["model/base"],
    /**
     * The package describes meta data for the exchange of power system model data.
     *
     */
    function (base)
    {

        /**
         * URI is a string following the rules defined by the W3C/IETF URI Planning Interest Group in a set of RFCs of which one is RFC 3305.
         *
         */
        class URI extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.URI;
                if (null == bucket)
                   cim_data.URI = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.URI[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "URI";
                var bucket = context.parsed.URI;
                if (null == bucket)
                   context.parsed.URI = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#URI_collapse" aria-expanded="true" aria-controls="URI_collapse" style="margin-left: 10px;">URI</a></legend>
                    <div id="URI_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#URI_collapse" aria-expanded="true" aria-controls="URI_collapse" style="margin-left: 10px;">URI</a></legend>
                    <div id="URI_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        class ModelDescriptionCIMVersion extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ModelDescriptionCIMVersion;
                if (null == bucket)
                   cim_data.ModelDescriptionCIMVersion = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ModelDescriptionCIMVersion[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ModelDescriptionCIMVersion";
                base.parse_element (/<cim:ModelDescriptionCIMVersion.date>([\s\S]*?)<\/cim:ModelDescriptionCIMVersion.date>/g, obj, "date", base.to_string, sub, context);
                base.parse_element (/<cim:ModelDescriptionCIMVersion.version>([\s\S]*?)<\/cim:ModelDescriptionCIMVersion.version>/g, obj, "version", base.to_string, sub, context);
                var bucket = context.parsed.ModelDescriptionCIMVersion;
                if (null == bucket)
                   context.parsed.ModelDescriptionCIMVersion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ModelDescriptionCIMVersion", "date", base.from_string, fields);
                base.export_element (obj, "ModelDescriptionCIMVersion", "version", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ModelDescriptionCIMVersion_collapse" aria-expanded="true" aria-controls="ModelDescriptionCIMVersion_collapse" style="margin-left: 10px;">ModelDescriptionCIMVersion</a></legend>
                    <div id="ModelDescriptionCIMVersion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#date}}<div><b>date</b>: {{date}}</div>{{/date}}
                    {{#version}}<div><b>version</b>: {{version}}</div>{{/version}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ModelDescriptionCIMVersion_collapse" aria-expanded="true" aria-controls="ModelDescriptionCIMVersion_collapse" style="margin-left: 10px;">ModelDescriptionCIMVersion</a></legend>
                    <div id="ModelDescriptionCIMVersion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='date'>date: </label><div class='col-sm-8'><input id='date' class='form-control' type='text'{{#date}} value='{{date}}'{{/date}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='version'>version: </label><div class='col-sm-8'><input id='version' class='form-control' type='text'{{#version}} value='{{version}}'{{/version}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        class FullModelDocumentElement extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FullModelDocumentElement;
                if (null == bucket)
                   cim_data.FullModelDocumentElement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FullModelDocumentElement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FullModelDocumentElement";
                var bucket = context.parsed.FullModelDocumentElement;
                if (null == bucket)
                   context.parsed.FullModelDocumentElement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FullModelDocumentElement_collapse" aria-expanded="true" aria-controls="FullModelDocumentElement_collapse" style="margin-left: 10px;">FullModelDocumentElement</a></legend>
                    <div id="FullModelDocumentElement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FullModelDocumentElement_collapse" aria-expanded="true" aria-controls="FullModelDocumentElement_collapse" style="margin-left: 10px;">FullModelDocumentElement</a></legend>
                    <div id="FullModelDocumentElement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * Identity contain comon descriptive information.
         *
         */
        class Description extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Description;
                if (null == bucket)
                   cim_data.Description = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Description[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Description";
                base.parse_element (/<cim:Description.description>([\s\S]*?)<\/cim:Description.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:Description.name>([\s\S]*?)<\/cim:Description.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_element (/<cim:Description.version>([\s\S]*?)<\/cim:Description.version>/g, obj, "version", base.to_string, sub, context);
                var bucket = context.parsed.Description;
                if (null == bucket)
                   context.parsed.Description = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Description", "description", base.from_string, fields);
                base.export_element (obj, "Description", "name", base.from_string, fields);
                base.export_element (obj, "Description", "version", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Description_collapse" aria-expanded="true" aria-controls="Description_collapse" style="margin-left: 10px;">Description</a></legend>
                    <div id="Description_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#version}}<div><b>version</b>: {{version}}</div>{{/version}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Description_collapse" aria-expanded="true" aria-controls="Description_collapse" style="margin-left: 10px;">Description</a></legend>
                    <div id="Description_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='description'>description: </label><div class='col-sm-8'><input id='description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='name'>name: </label><div class='col-sm-8'><input id='name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='version'>version: </label><div class='col-sm-8'><input id='version' class='form-control' type='text'{{#version}} value='{{version}}'{{/version}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        class Model extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Model;
                if (null == bucket)
                   cim_data.Model = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Model[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Model";
                base.parse_element (/<cim:Model.created>([\s\S]*?)<\/cim:Model.created>/g, obj, "created", base.to_datetime, sub, context);
                base.parse_element (/<cim:Model.scenarioTime>([\s\S]*?)<\/cim:Model.scenarioTime>/g, obj, "scenarioTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Model.description>([\s\S]*?)<\/cim:Model.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:Model.modelingAuthoritySet>([\s\S]*?)<\/cim:Model.modelingAuthoritySet>/g, obj, "modelingAuthoritySet", base.to_string, sub, context);
                base.parse_element (/<cim:Model.profile>([\s\S]*?)<\/cim:Model.profile>/g, obj, "profile", base.to_string, sub, context);
                base.parse_element (/<cim:Model.version>([\s\S]*?)<\/cim:Model.version>/g, obj, "version", base.to_string, sub, context);
                base.parse_attributes (/<cim:Model.Supersedes\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Supersedes", sub, context);
                base.parse_attributes (/<cim:Model.SupersededBy\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SupersededBy", sub, context);
                base.parse_attributes (/<cim:Model.DependentOn\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DependentOn", sub, context);
                base.parse_attributes (/<cim:Model.Depending\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Depending", sub, context);
                var bucket = context.parsed.Model;
                if (null == bucket)
                   context.parsed.Model = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Model", "created", base.from_datetime, fields);
                base.export_element (obj, "Model", "scenarioTime", base.from_datetime, fields);
                base.export_element (obj, "Model", "description", base.from_string, fields);
                base.export_element (obj, "Model", "modelingAuthoritySet", base.from_string, fields);
                base.export_element (obj, "Model", "profile", base.from_string, fields);
                base.export_element (obj, "Model", "version", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "Model", fields);
                base.export_attribute (obj, "export_attributes", "Model", fields);
                base.export_attribute (obj, "export_attributes", "Model", fields);
                base.export_attribute (obj, "export_attributes", "Model", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Model_collapse" aria-expanded="true" aria-controls="Model_collapse" style="margin-left: 10px;">Model</a></legend>
                    <div id="Model_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#created}}<div><b>created</b>: {{created}}</div>{{/created}}
                    {{#scenarioTime}}<div><b>scenarioTime</b>: {{scenarioTime}}</div>{{/scenarioTime}}
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#modelingAuthoritySet}}<div><b>modelingAuthoritySet</b>: {{modelingAuthoritySet}}</div>{{/modelingAuthoritySet}}
                    {{#profile}}<div><b>profile</b>: {{profile}}</div>{{/profile}}
                    {{#version}}<div><b>version</b>: {{version}}</div>{{/version}}
                    {{#Supersedes}}<div><b>Supersedes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Supersedes}}
                    {{#SupersededBy}}<div><b>SupersededBy</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SupersededBy}}
                    {{#DependentOn}}<div><b>DependentOn</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DependentOn}}
                    {{#Depending}}<div><b>Depending</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Depending}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Supersedes) obj.Supersedes_string = obj.Supersedes.join ();
                if (obj.SupersededBy) obj.SupersededBy_string = obj.SupersededBy.join ();
                if (obj.DependentOn) obj.DependentOn_string = obj.DependentOn.join ();
                if (obj.Depending) obj.Depending_string = obj.Depending.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Supersedes_string;
                delete obj.SupersededBy_string;
                delete obj.DependentOn_string;
                delete obj.Depending_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Model_collapse" aria-expanded="true" aria-controls="Model_collapse" style="margin-left: 10px;">Model</a></legend>
                    <div id="Model_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='created'>created: </label><div class='col-sm-8'><input id='created' class='form-control' type='text'{{#created}} value='{{created}}'{{/created}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scenarioTime'>scenarioTime: </label><div class='col-sm-8'><input id='scenarioTime' class='form-control' type='text'{{#scenarioTime}} value='{{scenarioTime}}'{{/scenarioTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='description'>description: </label><div class='col-sm-8'><input id='description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='modelingAuthoritySet'>modelingAuthoritySet: </label><div class='col-sm-8'><input id='modelingAuthoritySet' class='form-control' type='text'{{#modelingAuthoritySet}} value='{{modelingAuthoritySet}}'{{/modelingAuthoritySet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='profile'>profile: </label><div class='col-sm-8'><input id='profile' class='form-control' type='text'{{#profile}} value='{{profile}}'{{/profile}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='version'>version: </label><div class='col-sm-8'><input id='version' class='form-control' type='text'{{#version}} value='{{version}}'{{/version}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Supersedes'>Supersedes: </label><div class='col-sm-8'><input id='Supersedes' class='form-control' type='text'{{#Supersedes}} value='{{Supersedes}}_string'{{/Supersedes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SupersededBy'>SupersededBy: </label><div class='col-sm-8'><input id='SupersededBy' class='form-control' type='text'{{#SupersededBy}} value='{{SupersededBy}}_string'{{/SupersededBy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DependentOn'>DependentOn: </label><div class='col-sm-8'><input id='DependentOn' class='form-control' type='text'{{#DependentOn}} value='{{DependentOn}}_string'{{/DependentOn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Depending'>Depending: </label><div class='col-sm-8'><input id='Depending' class='form-control' type='text'{{#Depending}} value='{{Depending}}_string'{{/Depending}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Supersedes", "Model", "0..*", "0..*"],
                        ["SupersededBy", "Model", "0..*", "0..*"],
                        ["DependentOn", "Model", "0..*", "0..*"],
                        ["Depending", "Model", "0..*", "0..*"]
                    ]
                );
            }
        }

        class FullModel extends FullModelDocumentElement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FullModel;
                if (null == bucket)
                   cim_data.FullModel = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FullModel[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = FullModelDocumentElement.prototype.parse.call (this, context, sub);
                obj.cls = "FullModel";
                var bucket = context.parsed.FullModel;
                if (null == bucket)
                   context.parsed.FullModel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = FullModelDocumentElement.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FullModel_collapse" aria-expanded="true" aria-controls="FullModel_collapse" style="margin-left: 10px;">FullModel</a></legend>
                    <div id="FullModel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FullModelDocumentElement.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FullModel_collapse" aria-expanded="true" aria-controls="FullModel_collapse" style="margin-left: 10px;">FullModel</a></legend>
                    <div id="FullModel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FullModelDocumentElement.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        class Statements extends FullModelDocumentElement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Statements;
                if (null == bucket)
                   cim_data.Statements = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Statements[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = FullModelDocumentElement.prototype.parse.call (this, context, sub);
                obj.cls = "Statements";
                base.parse_attributes (/<cim:Statements.unknown\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
                base.parse_attributes (/<cim:Statements.unknown\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
                var bucket = context.parsed.Statements;
                if (null == bucket)
                   context.parsed.Statements = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = FullModelDocumentElement.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attributes", "Statements", fields);
                base.export_attribute (obj, "export_attributes", "Statements", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Statements_collapse" aria-expanded="true" aria-controls="Statements_collapse" style="margin-left: 10px;">Statements</a></legend>
                    <div id="Statements_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FullModelDocumentElement.prototype.template.call (this) +
                    `
                    {{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/}}
                    {{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.unknown) obj.unknown_string = obj.unknown.join ();
                if (obj.unknown) obj.unknown_string = obj.unknown.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.unknown_string;
                delete obj.unknown_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Statements_collapse" aria-expanded="true" aria-controls="Statements_collapse" style="margin-left: 10px;">Statements</a></legend>
                    <div id="Statements_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FullModelDocumentElement.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["unknown", "DifferenceModel", "", "0..1"],
                        ["unknown", "DifferenceModel", "", "0..1"]
                    ]
                );
            }
        }

        class DescriptionID extends Description
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DescriptionID;
                if (null == bucket)
                   cim_data.DescriptionID = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DescriptionID[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Description.prototype.parse.call (this, context, sub);
                obj.cls = "DescriptionID";
                base.parse_element (/<cim:DescriptionID.uri>([\s\S]*?)<\/cim:DescriptionID.uri>/g, obj, "uri", base.to_string, sub, context);
                var bucket = context.parsed.DescriptionID;
                if (null == bucket)
                   context.parsed.DescriptionID = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Description.prototype.export.call (this, obj, false);

                base.export_element (obj, "DescriptionID", "uri", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DescriptionID_collapse" aria-expanded="true" aria-controls="DescriptionID_collapse" style="margin-left: 10px;">DescriptionID</a></legend>
                    <div id="DescriptionID_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Description.prototype.template.call (this) +
                    `
                    {{#uri}}<div><b>uri</b>: {{uri}}</div>{{/uri}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DescriptionID_collapse" aria-expanded="true" aria-controls="DescriptionID_collapse" style="margin-left: 10px;">DescriptionID</a></legend>
                    <div id="DescriptionID_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Description.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='uri'>uri: </label><div class='col-sm-8'><input id='uri' class='form-control' type='text'{{#uri}} value='{{uri}}'{{/uri}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        class DifferenceModel extends Model
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DifferenceModel;
                if (null == bucket)
                   cim_data.DifferenceModel = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DifferenceModel[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Model.prototype.parse.call (this, context, sub);
                obj.cls = "DifferenceModel";
                base.parse_attribute (/<cim:DifferenceModel.forwardDifferences\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "forwardDifferences", sub, context);
                base.parse_attributes (/<cim:DifferenceModel.unknown\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
                base.parse_attribute (/<cim:DifferenceModel.reverseDifferences\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "reverseDifferences", sub, context);
                var bucket = context.parsed.DifferenceModel;
                if (null == bucket)
                   context.parsed.DifferenceModel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Model.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "DifferenceModel", fields);
                base.export_attribute (obj, "export_attributes", "DifferenceModel", fields);
                base.export_attribute (obj, "export_attribute", "DifferenceModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DifferenceModel_collapse" aria-expanded="true" aria-controls="DifferenceModel_collapse" style="margin-left: 10px;">DifferenceModel</a></legend>
                    <div id="DifferenceModel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Model.prototype.template.call (this) +
                    `
                    {{#forwardDifferences}}<div><b>forwardDifferences</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{forwardDifferences}}&quot;);})'>{{forwardDifferences}}</a></div>{{/forwardDifferences}}
                    {{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/}}
                    {{#reverseDifferences}}<div><b>reverseDifferences</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{reverseDifferences}}&quot;);})'>{{reverseDifferences}}</a></div>{{/reverseDifferences}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.unknown) obj.unknown_string = obj.unknown.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.unknown_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DifferenceModel_collapse" aria-expanded="true" aria-controls="DifferenceModel_collapse" style="margin-left: 10px;">DifferenceModel</a></legend>
                    <div id="DifferenceModel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Model.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='forwardDifferences'>forwardDifferences: </label><div class='col-sm-8'><input id='forwardDifferences' class='form-control' type='text'{{#forwardDifferences}} value='{{forwardDifferences}}'{{/forwardDifferences}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reverseDifferences'>reverseDifferences: </label><div class='col-sm-8'><input id='reverseDifferences' class='form-control' type='text'{{#reverseDifferences}} value='{{reverseDifferences}}'{{/reverseDifferences}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["forwardDifferences", "Statements", "0..1", ""],
                        ["unknown", "PowerSystemProject", "0..*", "0..1"],
                        ["reverseDifferences", "Statements", "0..1", ""]
                    ]
                );
            }
        }

        return (
            {
                Statements: Statements,
                ModelDescriptionCIMVersion: ModelDescriptionCIMVersion,
                DescriptionID: DescriptionID,
                DifferenceModel: DifferenceModel,
                Description: Description,
                URI: URI,
                FullModel: FullModel,
                FullModelDocumentElement: FullModelDocumentElement,
                Model: Model
            }
        );
    }
);