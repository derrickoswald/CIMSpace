define
(
    ["model/base"],
    /**
     * The package describes how power system model data is managed and evolve over time in projects.
     *
     */
    function (base)
    {

        /**
         * State of the project
         *
         */
        var StepKind =
        {
            planning: "planning",
            design_and_construction: "design and construction",
            commissioning: "commissioning",
            ____list_incomplete__more_to_come: "... list incomplete, more to come",
            revision: "revision"
        };
        Object.freeze (StepKind);

        var ProjectStepStatusKind =
        {
            cancelled: "cancelled",
            inProgress: "inProgress",
            inactive: "inactive",
            approved: "approved"
        };
        Object.freeze (ProjectStepStatusKind);

        class PowerSystemProjectSchedule extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PowerSystemProjectSchedule;
                if (null == bucket)
                   cim_data.PowerSystemProjectSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerSystemProjectSchedule[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PowerSystemProjectSchedule";
                base.parse_element (/<cim:PowerSystemProjectSchedule.actualEnd>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.actualEnd>/g, obj, "actualEnd", base.to_datetime, sub, context);
                base.parse_element (/<cim:PowerSystemProjectSchedule.actualStart>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.actualStart>/g, obj, "actualStart", base.to_datetime, sub, context);
                base.parse_element (/<cim:PowerSystemProjectSchedule.scheduledEnd>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.scheduledEnd>/g, obj, "scheduledEnd", base.to_datetime, sub, context);
                base.parse_element (/<cim:PowerSystemProjectSchedule.scheduledStart>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.scheduledStart>/g, obj, "scheduledStart", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:PowerSystemProjectSchedule.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:PowerSystemProjectSchedule.stepType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "stepType", sub, context);
                var bucket = context.parsed.PowerSystemProjectSchedule;
                if (null == bucket)
                   context.parsed.PowerSystemProjectSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PowerSystemProjectSchedule", "actualEnd", "actualEnd",  base.from_datetime, fields);
                base.export_element (obj, "PowerSystemProjectSchedule", "actualStart", "actualStart",  base.from_datetime, fields);
                base.export_element (obj, "PowerSystemProjectSchedule", "scheduledEnd", "scheduledEnd",  base.from_datetime, fields);
                base.export_element (obj, "PowerSystemProjectSchedule", "scheduledStart", "scheduledStart",  base.from_datetime, fields);
                base.export_attribute (obj, "PowerSystemProjectSchedule", "status", "status", fields);
                base.export_attribute (obj, "PowerSystemProjectSchedule", "stepType", "stepType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PowerSystemProjectSchedule_collapse" aria-expanded="true" aria-controls="PowerSystemProjectSchedule_collapse" style="margin-left: 10px;">PowerSystemProjectSchedule</a></legend>
                    <div id="PowerSystemProjectSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#actualEnd}}<div><b>actualEnd</b>: {{actualEnd}}</div>{{/actualEnd}}
                    {{#actualStart}}<div><b>actualStart</b>: {{actualStart}}</div>{{/actualStart}}
                    {{#scheduledEnd}}<div><b>scheduledEnd</b>: {{scheduledEnd}}</div>{{/scheduledEnd}}
                    {{#scheduledStart}}<div><b>scheduledStart</b>: {{scheduledStart}}</div>{{/scheduledStart}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#stepType}}<div><b>stepType</b>: {{stepType}}</div>{{/stepType}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ProjectStepStatusKind = []; if (!obj.status) obj.ProjectStepStatusKind.push ({ id: '', selected: true}); for (var property in ProjectStepStatusKind) obj.ProjectStepStatusKind.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
                obj.StepKind = []; if (!obj.stepType) obj.StepKind.push ({ id: '', selected: true}); for (var property in StepKind) obj.StepKind.push ({ id: property, selected: obj.stepType && obj.stepType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProjectStepStatusKind;
                delete obj.StepKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PowerSystemProjectSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_PowerSystemProjectSchedule_collapse" style="margin-left: 10px;">PowerSystemProjectSchedule</a></legend>
                    <div id="{{id}}_PowerSystemProjectSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actualEnd'>actualEnd: </label><div class='col-sm-8'><input id='{{id}}_actualEnd' class='form-control' type='text'{{#actualEnd}} value='{{actualEnd}}'{{/actualEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actualStart'>actualStart: </label><div class='col-sm-8'><input id='{{id}}_actualStart' class='form-control' type='text'{{#actualStart}} value='{{actualStart}}'{{/actualStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scheduledEnd'>scheduledEnd: </label><div class='col-sm-8'><input id='{{id}}_scheduledEnd' class='form-control' type='text'{{#scheduledEnd}} value='{{scheduledEnd}}'{{/scheduledEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scheduledStart'>scheduledStart: </label><div class='col-sm-8'><input id='{{id}}_scheduledStart' class='form-control' type='text'{{#scheduledStart}} value='{{scheduledStart}}'{{/scheduledStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control'>{{#ProjectStepStatusKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ProjectStepStatusKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stepType'>stepType: </label><div class='col-sm-8'><select id='{{id}}_stepType' class='form-control'>{{#StepKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StepKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PowerSystemProjectSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_actualEnd").value; if ("" != temp) obj.actualEnd = temp;
                temp = document.getElementById (id + "_actualStart").value; if ("" != temp) obj.actualStart = temp;
                temp = document.getElementById (id + "_scheduledEnd").value; if ("" != temp) obj.scheduledEnd = temp;
                temp = document.getElementById (id + "_scheduledStart").value; if ("" != temp) obj.scheduledStart = temp;
                temp = document.getElementById (id + "_status").value; if ("" != temp) { temp = ProjectStepStatusKind[temp]; if ("undefined" != typeof (temp)) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#ProjectStepStatusKind." + temp; }
                temp = document.getElementById (id + "_stepType").value; if ("" != temp) { temp = StepKind[temp]; if ("undefined" != typeof (temp)) obj.stepType = "http://iec.ch/TC57/2013/CIM-schema-cim16#StepKind." + temp; }

                return (obj);
            }
        }

        /**
         * A (document/collection) that describe a set of changes to the network.
         *
         */
        class PowerSystemProject extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PowerSystemProject;
                if (null == bucket)
                   cim_data.PowerSystemProject = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerSystemProject[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PowerSystemProject";
                base.parse_element (/<cim:PowerSystemProject.name>([\s\S]*?)<\/cim:PowerSystemProject.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_element (/<cim:PowerSystemProject.priority>([\s\S]*?)<\/cim:PowerSystemProject.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_attribute (/<cim:PowerSystemProject.state\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "state", sub, context);
                base.parse_element (/<cim:PowerSystemProject.type>([\s\S]*?)<\/cim:PowerSystemProject.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:PowerSystemProject.version>([\s\S]*?)<\/cim:PowerSystemProject.version>/g, obj, "version", base.to_string, sub, context);
                base.parse_element (/<cim:PowerSystemProject.description>([\s\S]*?)<\/cim:PowerSystemProject.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_attributes (/<cim:PowerSystemProject.Collection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Collection", sub, context);
                base.parse_attributes (/<cim:PowerSystemProject.Collection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Collection", sub, context);
                base.parse_attribute (/<cim:PowerSystemProject.Project\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Project", sub, context);
                var bucket = context.parsed.PowerSystemProject;
                if (null == bucket)
                   context.parsed.PowerSystemProject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PowerSystemProject", "name", "name",  base.from_string, fields);
                base.export_element (obj, "PowerSystemProject", "priority", "priority",  base.from_string, fields);
                base.export_attribute (obj, "PowerSystemProject", "state", "state", fields);
                base.export_element (obj, "PowerSystemProject", "type", "type",  base.from_string, fields);
                base.export_element (obj, "PowerSystemProject", "version", "version",  base.from_string, fields);
                base.export_element (obj, "PowerSystemProject", "description", "description",  base.from_string, fields);
                base.export_attributes (obj, "PowerSystemProject", "Collection", "Collection", fields);
                base.export_attributes (obj, "PowerSystemProject", "Collection", "Collection", fields);
                base.export_attribute (obj, "PowerSystemProject", "Project", "Project", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PowerSystemProject_collapse" aria-expanded="true" aria-controls="PowerSystemProject_collapse" style="margin-left: 10px;">PowerSystemProject</a></legend>
                    <div id="PowerSystemProject_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#state}}<div><b>state</b>: {{state}}</div>{{/state}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#version}}<div><b>version</b>: {{version}}</div>{{/version}}
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#Collection}}<div><b>Collection</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Collection}}
                    {{#Collection}}<div><b>Collection</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Collection}}
                    {{#Project}}<div><b>Project</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Project}}&quot;);}); return false;'>{{Project}}</a></div>{{/Project}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.StepKind = []; if (!obj.state) obj.StepKind.push ({ id: '', selected: true}); for (var property in StepKind) obj.StepKind.push ({ id: property, selected: obj.state && obj.state.endsWith ('.' + property)});
                if (obj.Collection) obj.Collection_string = obj.Collection.join ();
                if (obj.Collection) obj.Collection_string = obj.Collection.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.StepKind;
                delete obj.Collection_string;
                delete obj.Collection_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PowerSystemProject_collapse" aria-expanded="true" aria-controls="{{id}}_PowerSystemProject_collapse" style="margin-left: 10px;">PowerSystemProject</a></legend>
                    <div id="{{id}}_PowerSystemProject_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priority'>priority: </label><div class='col-sm-8'><input id='{{id}}_priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_state'>state: </label><div class='col-sm-8'><select id='{{id}}_state' class='form-control'>{{#StepKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StepKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_version'>version: </label><div class='col-sm-8'><input id='{{id}}_version' class='form-control' type='text'{{#version}} value='{{version}}'{{/version}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Project'>Project: </label><div class='col-sm-8'><input id='{{id}}_Project' class='form-control' type='text'{{#Project}} value='{{Project}}'{{/Project}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PowerSystemProject" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_name").value; if ("" != temp) obj.name = temp;
                temp = document.getElementById (id + "_priority").value; if ("" != temp) obj.priority = temp;
                temp = document.getElementById (id + "_state").value; if ("" != temp) { temp = StepKind[temp]; if ("undefined" != typeof (temp)) obj.state = "http://iec.ch/TC57/2013/CIM-schema-cim16#StepKind." + temp; }
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_version").value; if ("" != temp) obj.version = temp;
                temp = document.getElementById (id + "_description").value; if ("" != temp) obj.description = temp;
                temp = document.getElementById (id + "_Project").value; if ("" != temp) obj.Project = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Collection", "0..*", "1", "PowerSystemSubProject", "Project"],
                            ["Collection", "0..*", "0..1", "PowerSystemProject", "Project"],
                            ["Project", "0..1", "0..*", "PowerSystemProject", "Collection"]
                        ]
                    )
                );
            }
        }

        /**
         * The ProjectSteps are ordered by the actualStart and actualEnds so that  a dependent ProjectStep will have a actualStart after an actualEnd.
         *
         */
        class ProjectStep extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ProjectStep;
                if (null == bucket)
                   cim_data.ProjectStep = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProjectStep[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ProjectStep";
                base.parse_element (/<cim:ProjectStep.actualEnd>([\s\S]*?)<\/cim:ProjectStep.actualEnd>/g, obj, "actualEnd", base.to_datetime, sub, context);
                base.parse_element (/<cim:ProjectStep.actualStart>([\s\S]*?)<\/cim:ProjectStep.actualStart>/g, obj, "actualStart", base.to_datetime, sub, context);
                base.parse_element (/<cim:ProjectStep.scheduledEnd>([\s\S]*?)<\/cim:ProjectStep.scheduledEnd>/g, obj, "scheduledEnd", base.to_datetime, sub, context);
                base.parse_element (/<cim:ProjectStep.scheduledStart>([\s\S]*?)<\/cim:ProjectStep.scheduledStart>/g, obj, "scheduledStart", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:ProjectStep.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ProjectStep.stepType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "stepType", sub, context);
                var bucket = context.parsed.ProjectStep;
                if (null == bucket)
                   context.parsed.ProjectStep = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ProjectStep", "actualEnd", "actualEnd",  base.from_datetime, fields);
                base.export_element (obj, "ProjectStep", "actualStart", "actualStart",  base.from_datetime, fields);
                base.export_element (obj, "ProjectStep", "scheduledEnd", "scheduledEnd",  base.from_datetime, fields);
                base.export_element (obj, "ProjectStep", "scheduledStart", "scheduledStart",  base.from_datetime, fields);
                base.export_attribute (obj, "ProjectStep", "status", "status", fields);
                base.export_attribute (obj, "ProjectStep", "stepType", "stepType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProjectStep_collapse" aria-expanded="true" aria-controls="ProjectStep_collapse" style="margin-left: 10px;">ProjectStep</a></legend>
                    <div id="ProjectStep_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#actualEnd}}<div><b>actualEnd</b>: {{actualEnd}}</div>{{/actualEnd}}
                    {{#actualStart}}<div><b>actualStart</b>: {{actualStart}}</div>{{/actualStart}}
                    {{#scheduledEnd}}<div><b>scheduledEnd</b>: {{scheduledEnd}}</div>{{/scheduledEnd}}
                    {{#scheduledStart}}<div><b>scheduledStart</b>: {{scheduledStart}}</div>{{/scheduledStart}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#stepType}}<div><b>stepType</b>: {{stepType}}</div>{{/stepType}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ProjectStepStatusKind = []; if (!obj.status) obj.ProjectStepStatusKind.push ({ id: '', selected: true}); for (var property in ProjectStepStatusKind) obj.ProjectStepStatusKind.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
                obj.StepKind = []; if (!obj.stepType) obj.StepKind.push ({ id: '', selected: true}); for (var property in StepKind) obj.StepKind.push ({ id: property, selected: obj.stepType && obj.stepType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProjectStepStatusKind;
                delete obj.StepKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProjectStep_collapse" aria-expanded="true" aria-controls="{{id}}_ProjectStep_collapse" style="margin-left: 10px;">ProjectStep</a></legend>
                    <div id="{{id}}_ProjectStep_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actualEnd'>actualEnd: </label><div class='col-sm-8'><input id='{{id}}_actualEnd' class='form-control' type='text'{{#actualEnd}} value='{{actualEnd}}'{{/actualEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actualStart'>actualStart: </label><div class='col-sm-8'><input id='{{id}}_actualStart' class='form-control' type='text'{{#actualStart}} value='{{actualStart}}'{{/actualStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scheduledEnd'>scheduledEnd: </label><div class='col-sm-8'><input id='{{id}}_scheduledEnd' class='form-control' type='text'{{#scheduledEnd}} value='{{scheduledEnd}}'{{/scheduledEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scheduledStart'>scheduledStart: </label><div class='col-sm-8'><input id='{{id}}_scheduledStart' class='form-control' type='text'{{#scheduledStart}} value='{{scheduledStart}}'{{/scheduledStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control'>{{#ProjectStepStatusKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ProjectStepStatusKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stepType'>stepType: </label><div class='col-sm-8'><select id='{{id}}_stepType' class='form-control'>{{#StepKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StepKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ProjectStep" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_actualEnd").value; if ("" != temp) obj.actualEnd = temp;
                temp = document.getElementById (id + "_actualStart").value; if ("" != temp) obj.actualStart = temp;
                temp = document.getElementById (id + "_scheduledEnd").value; if ("" != temp) obj.scheduledEnd = temp;
                temp = document.getElementById (id + "_scheduledStart").value; if ("" != temp) obj.scheduledStart = temp;
                temp = document.getElementById (id + "_status").value; if ("" != temp) { temp = ProjectStepStatusKind[temp]; if ("undefined" != typeof (temp)) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#ProjectStepStatusKind." + temp; }
                temp = document.getElementById (id + "_stepType").value; if ("" != temp) { temp = StepKind[temp]; if ("undefined" != typeof (temp)) obj.stepType = "http://iec.ch/TC57/2013/CIM-schema-cim16#StepKind." + temp; }

                return (obj);
            }
        }

        /**
         * A collection of dependent projects.
         *
         */
        class PowerSystemSubProject extends PowerSystemProject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PowerSystemSubProject;
                if (null == bucket)
                   cim_data.PowerSystemSubProject = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerSystemSubProject[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PowerSystemProject.prototype.parse.call (this, context, sub);
                obj.cls = "PowerSystemSubProject";
                base.parse_attribute (/<cim:PowerSystemSubProject.Project\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Project", sub, context);
                var bucket = context.parsed.PowerSystemSubProject;
                if (null == bucket)
                   context.parsed.PowerSystemSubProject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PowerSystemProject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PowerSystemSubProject", "Project", "Project", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PowerSystemSubProject_collapse" aria-expanded="true" aria-controls="PowerSystemSubProject_collapse" style="margin-left: 10px;">PowerSystemSubProject</a></legend>
                    <div id="PowerSystemSubProject_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemProject.prototype.template.call (this) +
                    `
                    {{#Project}}<div><b>Project</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Project}}&quot;);}); return false;'>{{Project}}</a></div>{{/Project}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PowerSystemSubProject_collapse" aria-expanded="true" aria-controls="{{id}}_PowerSystemSubProject_collapse" style="margin-left: 10px;">PowerSystemSubProject</a></legend>
                    <div id="{{id}}_PowerSystemSubProject_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemProject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Project'>Project: </label><div class='col-sm-8'><input id='{{id}}_Project' class='form-control' type='text'{{#Project}} value='{{Project}}'{{/Project}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PowerSystemSubProject" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Project").value; if ("" != temp) obj.Project = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Project", "1", "0..*", "PowerSystemProject", "Collection"]
                        ]
                    )
                );
            }
        }

        return (
            {
                PowerSystemProjectSchedule: PowerSystemProjectSchedule,
                PowerSystemProject: PowerSystemProject,
                ProjectStep: ProjectStep,
                PowerSystemSubProject: PowerSystemSubProject
            }
        );
    }
);