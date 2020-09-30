define
(
    ["model/base", "model/Core"],
    /**
     * Contains classes used for generic dataset modelling.
     *
     */
    function (base, Core)
    {
        class GenericDataSetVersion extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.GenericDataSetVersion;
                if (null == bucket)
                   cim_data.GenericDataSetVersion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GenericDataSetVersion[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GenericDataSetVersion";
                base.parse_element (/<cim:GenericDataSetVersion.majorVersion>([\s\S]*?)<\/cim:GenericDataSetVersion.majorVersion>/g, obj, "majorVersion", base.to_string, sub, context);
                base.parse_element (/<cim:GenericDataSetVersion.minorVersion>([\s\S]*?)<\/cim:GenericDataSetVersion.minorVersion>/g, obj, "minorVersion", base.to_string, sub, context);
                base.parse_element (/<cim:GenericDataSetVersion.published>([\s\S]*?)<\/cim:GenericDataSetVersion.published>/g, obj, "published", base.to_string, sub, context);
                let bucket = context.parsed.GenericDataSetVersion;
                if (null == bucket)
                   context.parsed.GenericDataSetVersion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "GenericDataSetVersion", "majorVersion", "majorVersion",  base.from_string, fields);
                base.export_element (obj, "GenericDataSetVersion", "minorVersion", "minorVersion",  base.from_string, fields);
                base.export_element (obj, "GenericDataSetVersion", "published", "published",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GenericDataSetVersion_collapse" aria-expanded="true" aria-controls="GenericDataSetVersion_collapse" style="margin-left: 10px;">GenericDataSetVersion</a></legend>
                    <div id="GenericDataSetVersion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#majorVersion}}<div><b>majorVersion</b>: {{majorVersion}}</div>{{/majorVersion}}
                    {{#minorVersion}}<div><b>minorVersion</b>: {{minorVersion}}</div>{{/minorVersion}}
                    {{#published}}<div><b>published</b>: {{published}}</div>{{/published}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GenericDataSetVersion_collapse" aria-expanded="true" aria-controls="{{id}}_GenericDataSetVersion_collapse" style="margin-left: 10px;">GenericDataSetVersion</a></legend>
                    <div id="{{id}}_GenericDataSetVersion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_majorVersion'>majorVersion: </label><div class='col-sm-8'><input id='{{id}}_majorVersion' class='form-control' type='text'{{#majorVersion}} value='{{majorVersion}}'{{/majorVersion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minorVersion'>minorVersion: </label><div class='col-sm-8'><input id='{{id}}_minorVersion' class='form-control' type='text'{{#minorVersion}} value='{{minorVersion}}'{{/minorVersion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_published'>published: </label><div class='col-sm-8'><input id='{{id}}_published' class='form-control' type='text'{{#published}} value='{{published}}'{{/published}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "GenericDataSetVersion" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_majorVersion").value; if ("" !== temp) obj["majorVersion"] = temp;
                temp = document.getElementById (id + "_minorVersion").value; if ("" !== temp) obj["minorVersion"] = temp;
                temp = document.getElementById (id + "_published").value; if ("" !== temp) obj["published"] = temp;

                return (obj);
            }
        }

        /**
         * A generic container of a version of instance data.
         *
         * The MRID can be used in an audit trail, not in reusable script intended to work with new versions of data.
         * A dataset could be serialized multiple times and in multiple technologies, yet retain the same identity.
         *
         */
        class DataSet extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DataSet;
                if (null == bucket)
                   cim_data.DataSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DataSet[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DataSet";
                base.parse_element (/<cim:DataSet.mRID>([\s\S]*?)<\/cim:DataSet.mRID>/g, obj, "mRID", base.to_string, sub, context);
                base.parse_element (/<cim:DataSet.name>([\s\S]*?)<\/cim:DataSet.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_element (/<cim:DataSet.description>([\s\S]*?)<\/cim:DataSet.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_attribute (/<cim:DataSet.AlternateModel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AlternateModel", sub, context);
                base.parse_attributes (/<cim:DataSet.Profile\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Profile", sub, context);
                let bucket = context.parsed.DataSet;
                if (null == bucket)
                   context.parsed.DataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "DataSet", "mRID", "mRID",  base.from_string, fields);
                base.export_element (obj, "DataSet", "name", "name",  base.from_string, fields);
                base.export_element (obj, "DataSet", "description", "description",  base.from_string, fields);
                base.export_attribute (obj, "DataSet", "AlternateModel", "AlternateModel", fields);
                base.export_attributes (obj, "DataSet", "Profile", "Profile", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DataSet_collapse" aria-expanded="true" aria-controls="DataSet_collapse" style="margin-left: 10px;">DataSet</a></legend>
                    <div id="DataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#mRID}}<div><b>mRID</b>: {{mRID}}</div>{{/mRID}}
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#AlternateModel}}<div><b>AlternateModel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AlternateModel}}");}); return false;'>{{AlternateModel}}</a></div>{{/AlternateModel}}
                    {{#Profile}}<div><b>Profile</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Profile}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Profile"]) obj["Profile_string"] = obj["Profile"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Profile_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DataSet_collapse" aria-expanded="true" aria-controls="{{id}}_DataSet_collapse" style="margin-left: 10px;">DataSet</a></legend>
                    <div id="{{id}}_DataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mRID'>mRID: </label><div class='col-sm-8'><input id='{{id}}_mRID' class='form-control' type='text'{{#mRID}} value='{{mRID}}'{{/mRID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AlternateModel'>AlternateModel: </label><div class='col-sm-8'><input id='{{id}}_AlternateModel' class='form-control' type='text'{{#AlternateModel}} value='{{AlternateModel}}'{{/AlternateModel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Profile'>Profile: </label><div class='col-sm-8'><input id='{{id}}_Profile' class='form-control' type='text'{{#Profile}} value='{{Profile_string}}'{{/Profile}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DataSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_mRID").value; if ("" !== temp) obj["mRID"] = temp;
                temp = document.getElementById (id + "_name").value; if ("" !== temp) obj["name"] = temp;
                temp = document.getElementById (id + "_description").value; if ("" !== temp) obj["description"] = temp;
                temp = document.getElementById (id + "_AlternateModel").value; if ("" !== temp) obj["AlternateModel"] = temp;
                temp = document.getElementById (id + "_Profile").value; if ("" !== temp) obj["Profile"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AlternateModel", "0..1", "1", "AlternateModel", "Dataset"],
                            ["Profile", "1..*", "0..*", "Profile2", "DataSet"]
                        ]
                    )
                );
            }
        }

        /**
         * A CRUD-style data object.
         *
         */
        class ChangeSetMember extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ChangeSetMember;
                if (null == bucket)
                   cim_data.ChangeSetMember = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ChangeSetMember[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ChangeSetMember";
                base.parse_attribute (/<cim:ChangeSetMember.Changeset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Changeset", sub, context);
                base.parse_attribute (/<cim:ChangeSetMember.PropertiesObject\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PropertiesObject", sub, context);
                base.parse_attribute (/<cim:ChangeSetMember.TargetObject\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TargetObject", sub, context);
                let bucket = context.parsed.ChangeSetMember;
                if (null == bucket)
                   context.parsed.ChangeSetMember = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ChangeSetMember", "Changeset", "Changeset", fields);
                base.export_attribute (obj, "ChangeSetMember", "PropertiesObject", "PropertiesObject", fields);
                base.export_attribute (obj, "ChangeSetMember", "TargetObject", "TargetObject", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ChangeSetMember_collapse" aria-expanded="true" aria-controls="ChangeSetMember_collapse" style="margin-left: 10px;">ChangeSetMember</a></legend>
                    <div id="ChangeSetMember_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Changeset}}<div><b>Changeset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Changeset}}");}); return false;'>{{Changeset}}</a></div>{{/Changeset}}
                    {{#PropertiesObject}}<div><b>PropertiesObject</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PropertiesObject}}");}); return false;'>{{PropertiesObject}}</a></div>{{/PropertiesObject}}
                    {{#TargetObject}}<div><b>TargetObject</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TargetObject}}");}); return false;'>{{TargetObject}}</a></div>{{/TargetObject}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ChangeSetMember_collapse" aria-expanded="true" aria-controls="{{id}}_ChangeSetMember_collapse" style="margin-left: 10px;">ChangeSetMember</a></legend>
                    <div id="{{id}}_ChangeSetMember_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Changeset'>Changeset: </label><div class='col-sm-8'><input id='{{id}}_Changeset' class='form-control' type='text'{{#Changeset}} value='{{Changeset}}'{{/Changeset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PropertiesObject'>PropertiesObject: </label><div class='col-sm-8'><input id='{{id}}_PropertiesObject' class='form-control' type='text'{{#PropertiesObject}} value='{{PropertiesObject}}'{{/PropertiesObject}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TargetObject'>TargetObject: </label><div class='col-sm-8'><input id='{{id}}_TargetObject' class='form-control' type='text'{{#TargetObject}} value='{{TargetObject}}'{{/TargetObject}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ChangeSetMember" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Changeset").value; if ("" !== temp) obj["Changeset"] = temp;
                temp = document.getElementById (id + "_PropertiesObject").value; if ("" !== temp) obj["PropertiesObject"] = temp;
                temp = document.getElementById (id + "_TargetObject").value; if ("" !== temp) obj["TargetObject"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Changeset", "0..1", "0..*", "ChangeSet", "ChangeSetMember"],
                            ["PropertiesObject", "0..1", "0..1", "IdentifiedObject", "PropertiesCIMDataObject"],
                            ["TargetObject", "1", "0..*", "IdentifiedObject", "TargetingCIMDataObject"]
                        ]
                    )
                );
            }
        }

        /**
         * Describes the existence of a profile.
         *
         * The MRID is usually defined as a static value by the document or artifact that defines the contents of the profile and the rules for using the profile.
         *
         */
        class Profile2 extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Profile2;
                if (null == bucket)
                   cim_data.Profile2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Profile2[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Profile2";
                base.parse_attributes (/<cim:Profile2.DataSet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DataSet", sub, context);
                let bucket = context.parsed.Profile2;
                if (null == bucket)
                   context.parsed.Profile2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Profile2", "DataSet", "DataSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Profile2_collapse" aria-expanded="true" aria-controls="Profile2_collapse" style="margin-left: 10px;">Profile2</a></legend>
                    <div id="Profile2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#DataSet}}<div><b>DataSet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DataSet}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["DataSet"]) obj["DataSet_string"] = obj["DataSet"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["DataSet_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Profile2_collapse" aria-expanded="true" aria-controls="{{id}}_Profile2_collapse" style="margin-left: 10px;">Profile2</a></legend>
                    <div id="{{id}}_Profile2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DataSet'>DataSet: </label><div class='col-sm-8'><input id='{{id}}_DataSet' class='form-control' type='text'{{#DataSet}} value='{{DataSet_string}}'{{/DataSet}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Profile2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_DataSet").value; if ("" !== temp) obj["DataSet"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DataSet", "0..*", "1..*", "DataSet", "Profile"]
                        ]
                    )
                );
            }
        }

        /**
         * Describes a set of changes that can be applied in different situations.
         *
         * A given registered target object  MRID may only be referenced once by the contained change set members.
         *
         */
        class ChangeSet extends DataSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ChangeSet;
                if (null == bucket)
                   cim_data.ChangeSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ChangeSet[obj.id];
            }

            parse (context, sub)
            {
                let obj = DataSet.prototype.parse.call (this, context, sub);
                obj.cls = "ChangeSet";
                base.parse_attributes (/<cim:ChangeSet.NetworkModelProjectChangeVersion\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NetworkModelProjectChangeVersion", sub, context);
                base.parse_attribute (/<cim:ChangeSet.NMProjectStage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NMProjectStage", sub, context);
                base.parse_attributes (/<cim:ChangeSet.ChangeSetMember\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ChangeSetMember", sub, context);
                base.parse_attributes (/<cim:ChangeSet.IncrementalDatasetArg\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IncrementalDatasetArg", sub, context);
                let bucket = context.parsed.ChangeSet;
                if (null == bucket)
                   context.parsed.ChangeSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DataSet.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ChangeSet", "NetworkModelProjectChangeVersion", "NetworkModelProjectChangeVersion", fields);
                base.export_attribute (obj, "ChangeSet", "NMProjectStage", "NMProjectStage", fields);
                base.export_attributes (obj, "ChangeSet", "ChangeSetMember", "ChangeSetMember", fields);
                base.export_attributes (obj, "ChangeSet", "IncrementalDatasetArg", "IncrementalDatasetArg", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ChangeSet_collapse" aria-expanded="true" aria-controls="ChangeSet_collapse" style="margin-left: 10px;">ChangeSet</a></legend>
                    <div id="ChangeSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DataSet.prototype.template.call (this) +
                    `
                    {{#NetworkModelProjectChangeVersion}}<div><b>NetworkModelProjectChangeVersion</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/NetworkModelProjectChangeVersion}}
                    {{#NMProjectStage}}<div><b>NMProjectStage</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{NMProjectStage}}");}); return false;'>{{NMProjectStage}}</a></div>{{/NMProjectStage}}
                    {{#ChangeSetMember}}<div><b>ChangeSetMember</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ChangeSetMember}}
                    {{#IncrementalDatasetArg}}<div><b>IncrementalDatasetArg</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/IncrementalDatasetArg}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["NetworkModelProjectChangeVersion"]) obj["NetworkModelProjectChangeVersion_string"] = obj["NetworkModelProjectChangeVersion"].join ();
                if (obj["ChangeSetMember"]) obj["ChangeSetMember_string"] = obj["ChangeSetMember"].join ();
                if (obj["IncrementalDatasetArg"]) obj["IncrementalDatasetArg_string"] = obj["IncrementalDatasetArg"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["NetworkModelProjectChangeVersion_string"];
                delete obj["ChangeSetMember_string"];
                delete obj["IncrementalDatasetArg_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ChangeSet_collapse" aria-expanded="true" aria-controls="{{id}}_ChangeSet_collapse" style="margin-left: 10px;">ChangeSet</a></legend>
                    <div id="{{id}}_ChangeSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NMProjectStage'>NMProjectStage: </label><div class='col-sm-8'><input id='{{id}}_NMProjectStage' class='form-control' type='text'{{#NMProjectStage}} value='{{NMProjectStage}}'{{/NMProjectStage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ChangeSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_NMProjectStage").value; if ("" !== temp) obj["NMProjectStage"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["NetworkModelProjectChangeVersion", "0..*", "0..1", "NetworkModelProjectChangeVersion", "ChangeSet"],
                            ["NMProjectStage", "0..1", "1..*", "NetworkModelProjectStage", "ChangeSets"],
                            ["ChangeSetMember", "0..*", "0..1", "ChangeSetMember", "Changeset"],
                            ["IncrementalDatasetArg", "0..*", "1", "IncrementalDatasetArg", "IncrementalDataset"]
                        ]
                    )
                );
            }
        }

        /**
         * Instance of a version of a model part.
         *
         * This corresponds to a payload of instance data.
         *
         */
        class InstanceSet extends DataSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.InstanceSet;
                if (null == bucket)
                   cim_data.InstanceSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InstanceSet[obj.id];
            }

            parse (context, sub)
            {
                let obj = DataSet.prototype.parse.call (this, context, sub);
                obj.cls = "InstanceSet";
                base.parse_attributes (/<cim:InstanceSet.DatasetArg\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DatasetArg", sub, context);
                base.parse_attributes (/<cim:InstanceSet.InstanceSetMember\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InstanceSetMember", sub, context);
                let bucket = context.parsed.InstanceSet;
                if (null == bucket)
                   context.parsed.InstanceSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DataSet.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "InstanceSet", "DatasetArg", "DatasetArg", fields);
                base.export_attributes (obj, "InstanceSet", "InstanceSetMember", "InstanceSetMember", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InstanceSet_collapse" aria-expanded="true" aria-controls="InstanceSet_collapse" style="margin-left: 10px;">InstanceSet</a></legend>
                    <div id="InstanceSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DataSet.prototype.template.call (this) +
                    `
                    {{#DatasetArg}}<div><b>DatasetArg</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DatasetArg}}
                    {{#InstanceSetMember}}<div><b>InstanceSetMember</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InstanceSetMember}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["DatasetArg"]) obj["DatasetArg_string"] = obj["DatasetArg"].join ();
                if (obj["InstanceSetMember"]) obj["InstanceSetMember_string"] = obj["InstanceSetMember"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["DatasetArg_string"];
                delete obj["InstanceSetMember_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InstanceSet_collapse" aria-expanded="true" aria-controls="{{id}}_InstanceSet_collapse" style="margin-left: 10px;">InstanceSet</a></legend>
                    <div id="{{id}}_InstanceSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DataSet.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "InstanceSet" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DatasetArg", "0..*", "1", "DatasetArg", "Dataset"],
                            ["InstanceSetMember", "0..*", "1", "IdentifiedObject", "InstanceSet"]
                        ]
                    )
                );
            }
        }

        /**
         * An object is to be created in the context.
         *
         */
        class ObjectCreation extends ChangeSetMember
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ObjectCreation;
                if (null == bucket)
                   cim_data.ObjectCreation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ObjectCreation[obj.id];
            }

            parse (context, sub)
            {
                let obj = ChangeSetMember.prototype.parse.call (this, context, sub);
                obj.cls = "ObjectCreation";
                let bucket = context.parsed.ObjectCreation;
                if (null == bucket)
                   context.parsed.ObjectCreation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ChangeSetMember.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ObjectCreation_collapse" aria-expanded="true" aria-controls="ObjectCreation_collapse" style="margin-left: 10px;">ObjectCreation</a></legend>
                    <div id="ObjectCreation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ChangeSetMember.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ObjectCreation_collapse" aria-expanded="true" aria-controls="{{id}}_ObjectCreation_collapse" style="margin-left: 10px;">ObjectCreation</a></legend>
                    <div id="{{id}}_ObjectCreation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ChangeSetMember.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ObjectCreation" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * The object already exists and is to be modified.
         *
         */
        class ObjectModification extends ChangeSetMember
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ObjectModification;
                if (null == bucket)
                   cim_data.ObjectModification = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ObjectModification[obj.id];
            }

            parse (context, sub)
            {
                let obj = ChangeSetMember.prototype.parse.call (this, context, sub);
                obj.cls = "ObjectModification";
                base.parse_attribute (/<cim:ObjectModification.ObjectReverseModification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ObjectReverseModification", sub, context);
                let bucket = context.parsed.ObjectModification;
                if (null == bucket)
                   context.parsed.ObjectModification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ChangeSetMember.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ObjectModification", "ObjectReverseModification", "ObjectReverseModification", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ObjectModification_collapse" aria-expanded="true" aria-controls="ObjectModification_collapse" style="margin-left: 10px;">ObjectModification</a></legend>
                    <div id="ObjectModification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ChangeSetMember.prototype.template.call (this) +
                    `
                    {{#ObjectReverseModification}}<div><b>ObjectReverseModification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ObjectReverseModification}}");}); return false;'>{{ObjectReverseModification}}</a></div>{{/ObjectReverseModification}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ObjectModification_collapse" aria-expanded="true" aria-controls="{{id}}_ObjectModification_collapse" style="margin-left: 10px;">ObjectModification</a></legend>
                    <div id="{{id}}_ObjectModification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ChangeSetMember.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ObjectReverseModification'>ObjectReverseModification: </label><div class='col-sm-8'><input id='{{id}}_ObjectReverseModification' class='form-control' type='text'{{#ObjectReverseModification}} value='{{ObjectReverseModification}}'{{/ObjectReverseModification}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ObjectModification" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ObjectReverseModification").value; if ("" !== temp) obj["ObjectReverseModification"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ObjectReverseModification", "0..1", "0..1", "ObjectReverseModification", "ObjectModification"]
                        ]
                    )
                );
            }
        }

        /**
         * An object is to be deleted in the context.
         *
         */
        class ObjectDeletion extends ChangeSetMember
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ObjectDeletion;
                if (null == bucket)
                   cim_data.ObjectDeletion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ObjectDeletion[obj.id];
            }

            parse (context, sub)
            {
                let obj = ChangeSetMember.prototype.parse.call (this, context, sub);
                obj.cls = "ObjectDeletion";
                let bucket = context.parsed.ObjectDeletion;
                if (null == bucket)
                   context.parsed.ObjectDeletion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ChangeSetMember.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ObjectDeletion_collapse" aria-expanded="true" aria-controls="ObjectDeletion_collapse" style="margin-left: 10px;">ObjectDeletion</a></legend>
                    <div id="ObjectDeletion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ChangeSetMember.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ObjectDeletion_collapse" aria-expanded="true" aria-controls="{{id}}_ObjectDeletion_collapse" style="margin-left: 10px;">ObjectDeletion</a></legend>
                    <div id="{{id}}_ObjectDeletion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ChangeSetMember.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ObjectDeletion" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Used to specify precondition properties for a preconditioned update.
         *
         */
        class ObjectReverseModification extends ChangeSetMember
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ObjectReverseModification;
                if (null == bucket)
                   cim_data.ObjectReverseModification = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ObjectReverseModification[obj.id];
            }

            parse (context, sub)
            {
                let obj = ChangeSetMember.prototype.parse.call (this, context, sub);
                obj.cls = "ObjectReverseModification";
                base.parse_attribute (/<cim:ObjectReverseModification.ObjectModification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ObjectModification", sub, context);
                let bucket = context.parsed.ObjectReverseModification;
                if (null == bucket)
                   context.parsed.ObjectReverseModification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ChangeSetMember.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ObjectReverseModification", "ObjectModification", "ObjectModification", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ObjectReverseModification_collapse" aria-expanded="true" aria-controls="ObjectReverseModification_collapse" style="margin-left: 10px;">ObjectReverseModification</a></legend>
                    <div id="ObjectReverseModification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ChangeSetMember.prototype.template.call (this) +
                    `
                    {{#ObjectModification}}<div><b>ObjectModification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ObjectModification}}");}); return false;'>{{ObjectModification}}</a></div>{{/ObjectModification}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ObjectReverseModification_collapse" aria-expanded="true" aria-controls="{{id}}_ObjectReverseModification_collapse" style="margin-left: 10px;">ObjectReverseModification</a></legend>
                    <div id="{{id}}_ObjectReverseModification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ChangeSetMember.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ObjectModification'>ObjectModification: </label><div class='col-sm-8'><input id='{{id}}_ObjectModification' class='form-control' type='text'{{#ObjectModification}} value='{{ObjectModification}}'{{/ObjectModification}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ObjectReverseModification" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ObjectModification").value; if ("" !== temp) obj["ObjectModification"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ObjectModification", "0..1", "0..1", "ObjectModification", "ObjectReverseModification"]
                        ]
                    )
                );
            }
        }

        return (
            {
                GenericDataSetVersion: GenericDataSetVersion,
                ObjectModification: ObjectModification,
                ChangeSetMember: ChangeSetMember,
                ObjectCreation: ObjectCreation,
                InstanceSet: InstanceSet,
                ObjectDeletion: ObjectDeletion,
                ChangeSet: ChangeSet,
                DataSet: DataSet,
                ObjectReverseModification: ObjectReverseModification,
                Profile2: Profile2
            }
        );
    }
);