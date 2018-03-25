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
                var bucket = cim_data.URI;
                if (null == bucket)
                   cim_data.URI = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.URI[obj.id];
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#URI_collapse" aria-expanded="true" aria-controls="URI_collapse" style="margin-left: 10px;">URI</a></legend>
                    <div id="URI_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_URI_collapse" aria-expanded="true" aria-controls="{{id}}_URI_collapse" style="margin-left: 10px;">URI</a></legend>
                    <div id="{{id}}_URI_collapse" class="collapse in show" style="margin-left: 10px;">
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
                var obj = obj || { id: id, cls: "URI" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class ModelDescriptionCIMVersion extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ModelDescriptionCIMVersion;
                if (null == bucket)
                   cim_data.ModelDescriptionCIMVersion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ModelDescriptionCIMVersion[obj.id];
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

                base.export_element (obj, "ModelDescriptionCIMVersion", "date", "date",  base.from_string, fields);
                base.export_element (obj, "ModelDescriptionCIMVersion", "version", "version",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ModelDescriptionCIMVersion_collapse" aria-expanded="true" aria-controls="ModelDescriptionCIMVersion_collapse" style="margin-left: 10px;">ModelDescriptionCIMVersion</a></legend>
                    <div id="ModelDescriptionCIMVersion_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ModelDescriptionCIMVersion_collapse" aria-expanded="true" aria-controls="{{id}}_ModelDescriptionCIMVersion_collapse" style="margin-left: 10px;">ModelDescriptionCIMVersion</a></legend>
                    <div id="{{id}}_ModelDescriptionCIMVersion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_date'>date: </label><div class='col-sm-8'><input id='{{id}}_date' class='form-control' type='text'{{#date}} value='{{date}}'{{/date}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_version'>version: </label><div class='col-sm-8'><input id='{{id}}_version' class='form-control' type='text'{{#version}} value='{{version}}'{{/version}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ModelDescriptionCIMVersion" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_date").value; if ("" != temp) obj.date = temp;
                temp = document.getElementById (id + "_version").value; if ("" != temp) obj.version = temp;

                return (obj);
            }
        }

        class FullModelDocumentElement extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.FullModelDocumentElement;
                if (null == bucket)
                   cim_data.FullModelDocumentElement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FullModelDocumentElement[obj.id];
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FullModelDocumentElement_collapse" aria-expanded="true" aria-controls="FullModelDocumentElement_collapse" style="margin-left: 10px;">FullModelDocumentElement</a></legend>
                    <div id="FullModelDocumentElement_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FullModelDocumentElement_collapse" aria-expanded="true" aria-controls="{{id}}_FullModelDocumentElement_collapse" style="margin-left: 10px;">FullModelDocumentElement</a></legend>
                    <div id="{{id}}_FullModelDocumentElement_collapse" class="collapse in show" style="margin-left: 10px;">
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
                var obj = obj || { id: id, cls: "FullModelDocumentElement" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.Description;
                if (null == bucket)
                   cim_data.Description = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Description[obj.id];
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

                base.export_element (obj, "Description", "description", "description",  base.from_string, fields);
                base.export_element (obj, "Description", "name", "name",  base.from_string, fields);
                base.export_element (obj, "Description", "version", "version",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Description_collapse" aria-expanded="true" aria-controls="Description_collapse" style="margin-left: 10px;">Description</a></legend>
                    <div id="Description_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Description_collapse" aria-expanded="true" aria-controls="{{id}}_Description_collapse" style="margin-left: 10px;">Description</a></legend>
                    <div id="{{id}}_Description_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_version'>version: </label><div class='col-sm-8'><input id='{{id}}_version' class='form-control' type='text'{{#version}} value='{{version}}'{{/version}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Description" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_description").value; if ("" != temp) obj.description = temp;
                temp = document.getElementById (id + "_name").value; if ("" != temp) obj.name = temp;
                temp = document.getElementById (id + "_version").value; if ("" != temp) obj.version = temp;

                return (obj);
            }
        }

        class Model extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Model;
                if (null == bucket)
                   cim_data.Model = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Model[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Model";
                base.parse_element (/<cim:Model.created>([\s\S]*?)<\/cim:Model.created>/g, obj, "created", base.to_datetime, sub, context);
                base.parse_element (/<cim:Model.scenarioTime>([\s\S]*?)<\/cim:Model.scenarioTime>/g, obj, "scenarioTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Model.description>([\s\S]*?)<\/cim:Model.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_attribute (/<cim:Model.modelingAuthoritySet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "modelingAuthoritySet", sub, context);
                base.parse_attribute (/<cim:Model.profile\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "profile", sub, context);
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

                base.export_element (obj, "Model", "created", "created",  base.from_datetime, fields);
                base.export_element (obj, "Model", "scenarioTime", "scenarioTime",  base.from_datetime, fields);
                base.export_element (obj, "Model", "description", "description",  base.from_string, fields);
                base.export_attribute (obj, "Model", "modelingAuthoritySet", "modelingAuthoritySet", fields);
                base.export_attribute (obj, "Model", "profile", "profile", fields);
                base.export_element (obj, "Model", "version", "version",  base.from_string, fields);
                base.export_attributes (obj, "Model", "Supersedes", "Supersedes", fields);
                base.export_attributes (obj, "Model", "SupersededBy", "SupersededBy", fields);
                base.export_attributes (obj, "Model", "DependentOn", "DependentOn", fields);
                base.export_attributes (obj, "Model", "Depending", "Depending", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Model_collapse" aria-expanded="true" aria-controls="Model_collapse" style="margin-left: 10px;">Model</a></legend>
                    <div id="Model_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#created}}<div><b>created</b>: {{created}}</div>{{/created}}
                    {{#scenarioTime}}<div><b>scenarioTime</b>: {{scenarioTime}}</div>{{/scenarioTime}}
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#modelingAuthoritySet}}<div><b>modelingAuthoritySet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{modelingAuthoritySet}}&quot;);}); return false;'>{{modelingAuthoritySet}}</a></div>{{/modelingAuthoritySet}}\n                    {{#profile}}<div><b>profile</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{profile}}&quot;);}); return false;'>{{profile}}</a></div>{{/profile}}\n                    {{#version}}<div><b>version</b>: {{version}}</div>{{/version}}
                    {{#Supersedes}}<div><b>Supersedes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Supersedes}}
                    {{#SupersededBy}}<div><b>SupersededBy</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/SupersededBy}}
                    {{#DependentOn}}<div><b>DependentOn</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/DependentOn}}
                    {{#Depending}}<div><b>Depending</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Depending}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.URI = []; if (!obj.modelingAuthoritySet) obj.URI.push ({ id: '', selected: true}); for (var property in URI) obj.URI.push ({ id: property, selected: obj.modelingAuthoritySet && obj.modelingAuthoritySet.endsWith ('.' + property)});
                obj.URI = []; if (!obj.profile) obj.URI.push ({ id: '', selected: true}); for (var property in URI) obj.URI.push ({ id: property, selected: obj.profile && obj.profile.endsWith ('.' + property)});
                if (obj.Supersedes) obj.Supersedes_string = obj.Supersedes.join ();
                if (obj.SupersededBy) obj.SupersededBy_string = obj.SupersededBy.join ();
                if (obj.DependentOn) obj.DependentOn_string = obj.DependentOn.join ();
                if (obj.Depending) obj.Depending_string = obj.Depending.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.URI;
                delete obj.URI;
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Model_collapse" aria-expanded="true" aria-controls="{{id}}_Model_collapse" style="margin-left: 10px;">Model</a></legend>
                    <div id="{{id}}_Model_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_created'>created: </label><div class='col-sm-8'><input id='{{id}}_created' class='form-control' type='text'{{#created}} value='{{created}}'{{/created}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scenarioTime'>scenarioTime: </label><div class='col-sm-8'><input id='{{id}}_scenarioTime' class='form-control' type='text'{{#scenarioTime}} value='{{scenarioTime}}'{{/scenarioTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_modelingAuthoritySet'>modelingAuthoritySet: </label><div class='col-sm-8'><select id='{{id}}_modelingAuthoritySet' class='form-control custom-select'>{{#URI}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/URI}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_profile'>profile: </label><div class='col-sm-8'><select id='{{id}}_profile' class='form-control custom-select'>{{#URI}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/URI}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_version'>version: </label><div class='col-sm-8'><input id='{{id}}_version' class='form-control' type='text'{{#version}} value='{{version}}'{{/version}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Supersedes'>Supersedes: </label><div class='col-sm-8'><input id='{{id}}_Supersedes' class='form-control' type='text'{{#Supersedes}} value='{{Supersedes_string}}'{{/Supersedes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SupersededBy'>SupersededBy: </label><div class='col-sm-8'><input id='{{id}}_SupersededBy' class='form-control' type='text'{{#SupersededBy}} value='{{SupersededBy_string}}'{{/SupersededBy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DependentOn'>DependentOn: </label><div class='col-sm-8'><input id='{{id}}_DependentOn' class='form-control' type='text'{{#DependentOn}} value='{{DependentOn_string}}'{{/DependentOn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Depending'>Depending: </label><div class='col-sm-8'><input id='{{id}}_Depending' class='form-control' type='text'{{#Depending}} value='{{Depending_string}}'{{/Depending}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Model" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_created").value; if ("" != temp) obj.created = temp;
                temp = document.getElementById (id + "_scenarioTime").value; if ("" != temp) obj.scenarioTime = temp;
                temp = document.getElementById (id + "_description").value; if ("" != temp) obj.description = temp;
                temp = document.getElementById (id + "_modelingAuthoritySet").value; if ("" != temp) { temp = URI[temp]; if ("undefined" != typeof (temp)) obj.modelingAuthoritySet = "http://iec.ch/TC57/2013/CIM-schema-cim16#URI." + temp; }
                temp = document.getElementById (id + "_profile").value; if ("" != temp) { temp = URI[temp]; if ("undefined" != typeof (temp)) obj.profile = "http://iec.ch/TC57/2013/CIM-schema-cim16#URI." + temp; }
                temp = document.getElementById (id + "_version").value; if ("" != temp) obj.version = temp;
                temp = document.getElementById (id + "_Supersedes").value; if ("" != temp) obj.Supersedes = temp.split (",");
                temp = document.getElementById (id + "_SupersededBy").value; if ("" != temp) obj.SupersededBy = temp.split (",");
                temp = document.getElementById (id + "_DependentOn").value; if ("" != temp) obj.DependentOn = temp.split (",");
                temp = document.getElementById (id + "_Depending").value; if ("" != temp) obj.Depending = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Supersedes", "0..*", "0..*", "Model", "SupersededBy"],
                            ["SupersededBy", "0..*", "0..*", "Model", "Supersedes"],
                            ["DependentOn", "0..*", "0..*", "Model", "Depending"],
                            ["Depending", "0..*", "0..*", "Model", "DependentOn"]
                        ]
                    )
                );
            }
        }

        class FullModel extends FullModelDocumentElement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.FullModel;
                if (null == bucket)
                   cim_data.FullModel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FullModel[obj.id];
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FullModel_collapse" aria-expanded="true" aria-controls="FullModel_collapse" style="margin-left: 10px;">FullModel</a></legend>
                    <div id="FullModel_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FullModel_collapse" aria-expanded="true" aria-controls="{{id}}_FullModel_collapse" style="margin-left: 10px;">FullModel</a></legend>
                    <div id="{{id}}_FullModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + FullModelDocumentElement.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "FullModel" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class Statements extends FullModelDocumentElement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Statements;
                if (null == bucket)
                   cim_data.Statements = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Statements[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = FullModelDocumentElement.prototype.parse.call (this, context, sub);
                obj.cls = "Statements";
                var bucket = context.parsed.Statements;
                if (null == bucket)
                   context.parsed.Statements = bucket = {};
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Statements_collapse" aria-expanded="true" aria-controls="Statements_collapse" style="margin-left: 10px;">Statements</a></legend>
                    <div id="Statements_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Statements_collapse" aria-expanded="true" aria-controls="{{id}}_Statements_collapse" style="margin-left: 10px;">Statements</a></legend>
                    <div id="{{id}}_Statements_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + FullModelDocumentElement.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Statements" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class DescriptionID extends Description
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DescriptionID;
                if (null == bucket)
                   cim_data.DescriptionID = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DescriptionID[obj.id];
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

                base.export_element (obj, "DescriptionID", "uri", "uri",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DescriptionID_collapse" aria-expanded="true" aria-controls="DescriptionID_collapse" style="margin-left: 10px;">DescriptionID</a></legend>
                    <div id="DescriptionID_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DescriptionID_collapse" aria-expanded="true" aria-controls="{{id}}_DescriptionID_collapse" style="margin-left: 10px;">DescriptionID</a></legend>
                    <div id="{{id}}_DescriptionID_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Description.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uri'>uri: </label><div class='col-sm-8'><input id='{{id}}_uri' class='form-control' type='text'{{#uri}} value='{{uri}}'{{/uri}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DescriptionID" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_uri").value; if ("" != temp) obj.uri = temp;

                return (obj);
            }
        }

        class DifferenceModel extends Model
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DifferenceModel;
                if (null == bucket)
                   cim_data.DifferenceModel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DifferenceModel[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Model.prototype.parse.call (this, context, sub);
                obj.cls = "DifferenceModel";
                base.parse_attribute (/<cim:DifferenceModel.forwardDifferences\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "forwardDifferences", sub, context);
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

                base.export_attribute (obj, "DifferenceModel", "forwardDifferences", "forwardDifferences", fields);
                base.export_attribute (obj, "DifferenceModel", "reverseDifferences", "reverseDifferences", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DifferenceModel_collapse" aria-expanded="true" aria-controls="DifferenceModel_collapse" style="margin-left: 10px;">DifferenceModel</a></legend>
                    <div id="DifferenceModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Model.prototype.template.call (this) +
                    `
                    {{#forwardDifferences}}<div><b>forwardDifferences</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{forwardDifferences}}&quot;);}); return false;'>{{forwardDifferences}}</a></div>{{/forwardDifferences}}
                    {{#reverseDifferences}}<div><b>reverseDifferences</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{reverseDifferences}}&quot;);}); return false;'>{{reverseDifferences}}</a></div>{{/reverseDifferences}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DifferenceModel_collapse" aria-expanded="true" aria-controls="{{id}}_DifferenceModel_collapse" style="margin-left: 10px;">DifferenceModel</a></legend>
                    <div id="{{id}}_DifferenceModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Model.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_forwardDifferences'>forwardDifferences: </label><div class='col-sm-8'><input id='{{id}}_forwardDifferences' class='form-control' type='text'{{#forwardDifferences}} value='{{forwardDifferences}}'{{/forwardDifferences}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reverseDifferences'>reverseDifferences: </label><div class='col-sm-8'><input id='{{id}}_reverseDifferences' class='form-control' type='text'{{#reverseDifferences}} value='{{reverseDifferences}}'{{/reverseDifferences}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DifferenceModel" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_forwardDifferences").value; if ("" != temp) obj.forwardDifferences = temp;
                temp = document.getElementById (id + "_reverseDifferences").value; if ("" != temp) obj.reverseDifferences = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["forwardDifferences", "0..1", "", "Statements", ""],
                            ["reverseDifferences", "0..1", "", "Statements", ""]
                        ]
                    )
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