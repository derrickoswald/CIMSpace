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
                this._id = template.id;
                var bucket = cim_data.PowerSystemProjectSchedule;
                if (null == bucket)
                   cim_data.PowerSystemProjectSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PowerSystemProjectSchedule[this._id];
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
                base.parse_attribute (/<cim:PowerSystemProjectSchedule.unknown\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
                var bucket = context.parsed.PowerSystemProjectSchedule;
                if (null == bucket)
                   context.parsed.PowerSystemProjectSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PowerSystemProjectSchedule", "actualEnd", base.from_datetime, fields);
                base.export_element (obj, "PowerSystemProjectSchedule", "actualStart", base.from_datetime, fields);
                base.export_element (obj, "PowerSystemProjectSchedule", "scheduledEnd", base.from_datetime, fields);
                base.export_element (obj, "PowerSystemProjectSchedule", "scheduledStart", base.from_datetime, fields);
                base.export_element (obj, "PowerSystemProjectSchedule", "status", base.from_string, fields);
                base.export_element (obj, "PowerSystemProjectSchedule", "stepType", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "PowerSystemProjectSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PowerSystemProjectSchedule_collapse" aria-expanded="true" aria-controls="PowerSystemProjectSchedule_collapse" style="margin-left: 10px;">PowerSystemProjectSchedule</a></legend>
                    <div id="PowerSystemProjectSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#actualEnd}}<div><b>actualEnd</b>: {{actualEnd}}</div>{{/actualEnd}}
                    {{#actualStart}}<div><b>actualStart</b>: {{actualStart}}</div>{{/actualStart}}
                    {{#scheduledEnd}}<div><b>scheduledEnd</b>: {{scheduledEnd}}</div>{{/scheduledEnd}}
                    {{#scheduledStart}}<div><b>scheduledStart</b>: {{scheduledStart}}</div>{{/scheduledStart}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#stepType}}<div><b>stepType</b>: {{stepType}}</div>{{/stepType}}
                    {{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PowerSystemProjectSchedule_collapse" aria-expanded="true" aria-controls="PowerSystemProjectSchedule_collapse" style="margin-left: 10px;">PowerSystemProjectSchedule</a></legend>
                    <div id="PowerSystemProjectSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='actualEnd'>actualEnd: </label><div class='col-sm-8'><input id='actualEnd' class='form-control' type='text'{{#actualEnd}} value='{{actualEnd}}'{{/actualEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='actualStart'>actualStart: </label><div class='col-sm-8'><input id='actualStart' class='form-control' type='text'{{#actualStart}} value='{{actualStart}}'{{/actualStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scheduledEnd'>scheduledEnd: </label><div class='col-sm-8'><input id='scheduledEnd' class='form-control' type='text'{{#scheduledEnd}} value='{{scheduledEnd}}'{{/scheduledEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scheduledStart'>scheduledStart: </label><div class='col-sm-8'><input id='scheduledStart' class='form-control' type='text'{{#scheduledStart}} value='{{scheduledStart}}'{{/scheduledStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><select id='status' class='form-control'>{{#ProjectStepStatusKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ProjectStepStatusKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='stepType'>stepType: </label><div class='col-sm-8'><select id='stepType' class='form-control'>{{#StepKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StepKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for=''>: </label><div class='col-sm-8'><input id='' class='form-control' type='text'{{#}} value='{{}}'{{/}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["unknown", "PowerSystemProject", "1", "1..*"]
                    ]
                );
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
                this._id = template.id;
                var bucket = cim_data.PowerSystemProject;
                if (null == bucket)
                   cim_data.PowerSystemProject = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PowerSystemProject[this._id];
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
                base.parse_attribute (/<cim:PowerSystemProject.unknown\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
                base.parse_attributes (/<cim:PowerSystemProject.Collection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Collection", sub, context);
                base.parse_attributes (/<cim:PowerSystemProject.Collection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Collection", sub, context);
                base.parse_attribute (/<cim:PowerSystemProject.Project\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Project", sub, context);
                base.parse_attributes (/<cim:PowerSystemProject.unknown\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
                var bucket = context.parsed.PowerSystemProject;
                if (null == bucket)
                   context.parsed.PowerSystemProject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PowerSystemProject", "name", base.from_string, fields);
                base.export_element (obj, "PowerSystemProject", "priority", base.from_string, fields);
                base.export_element (obj, "PowerSystemProject", "state", base.from_string, fields);
                base.export_element (obj, "PowerSystemProject", "type", base.from_string, fields);
                base.export_element (obj, "PowerSystemProject", "version", base.from_string, fields);
                base.export_element (obj, "PowerSystemProject", "description", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "PowerSystemProject", fields);
                base.export_attribute (obj, "export_attributes", "PowerSystemProject", fields);
                base.export_attribute (obj, "export_attributes", "PowerSystemProject", fields);
                base.export_attribute (obj, "export_attribute", "PowerSystemProject", fields);
                base.export_attribute (obj, "export_attributes", "PowerSystemProject", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PowerSystemProject_collapse" aria-expanded="true" aria-controls="PowerSystemProject_collapse" style="margin-left: 10px;">PowerSystemProject</a></legend>
                    <div id="PowerSystemProject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#state}}<div><b>state</b>: {{state}}</div>{{/state}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#version}}<div><b>version</b>: {{version}}</div>{{/version}}
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
                    {{#Collection}}<div><b>Collection</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Collection}}
                    {{#Collection}}<div><b>Collection</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Collection}}
                    {{#Project}}<div><b>Project</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Project}}&quot;);})'>{{Project}}</a></div>{{/Project}}
                    {{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/}}
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
                if (obj.unknown) obj.unknown_string = obj.unknown.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.StepKind;
                delete obj.Collection_string;
                delete obj.Collection_string;
                delete obj.unknown_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PowerSystemProject_collapse" aria-expanded="true" aria-controls="PowerSystemProject_collapse" style="margin-left: 10px;">PowerSystemProject</a></legend>
                    <div id="PowerSystemProject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='name'>name: </label><div class='col-sm-8'><input id='name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priority'>priority: </label><div class='col-sm-8'><input id='priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='state'>state: </label><div class='col-sm-8'><select id='state' class='form-control'>{{#StepKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StepKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='version'>version: </label><div class='col-sm-8'><input id='version' class='form-control' type='text'{{#version}} value='{{version}}'{{/version}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='description'>description: </label><div class='col-sm-8'><input id='description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for=''>: </label><div class='col-sm-8'><input id='' class='form-control' type='text'{{#}} value='{{}}'{{/}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Project'>Project: </label><div class='col-sm-8'><input id='Project' class='form-control' type='text'{{#Project}} value='{{Project}}'{{/Project}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["unknown", "DifferenceModel", "0..1", "0..*"],
                        ["Collection", "PowerSystemSubProject", "0..*", "1"],
                        ["Collection", "PowerSystemProject", "0..*", "0..1"],
                        ["Project", "PowerSystemProject", "0..1", "0..*"],
                        ["unknown", "PowerSystemProjectSchedule", "1..*", "1"]
                    ]
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
                this._id = template.id;
                var bucket = cim_data.ProjectStep;
                if (null == bucket)
                   cim_data.ProjectStep = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProjectStep[this._id];
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

                base.export_element (obj, "ProjectStep", "actualEnd", base.from_datetime, fields);
                base.export_element (obj, "ProjectStep", "actualStart", base.from_datetime, fields);
                base.export_element (obj, "ProjectStep", "scheduledEnd", base.from_datetime, fields);
                base.export_element (obj, "ProjectStep", "scheduledStart", base.from_datetime, fields);
                base.export_element (obj, "ProjectStep", "status", base.from_string, fields);
                base.export_element (obj, "ProjectStep", "stepType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProjectStep_collapse" aria-expanded="true" aria-controls="ProjectStep_collapse" style="margin-left: 10px;">ProjectStep</a></legend>
                    <div id="ProjectStep_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProjectStep_collapse" aria-expanded="true" aria-controls="ProjectStep_collapse" style="margin-left: 10px;">ProjectStep</a></legend>
                    <div id="ProjectStep_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='actualEnd'>actualEnd: </label><div class='col-sm-8'><input id='actualEnd' class='form-control' type='text'{{#actualEnd}} value='{{actualEnd}}'{{/actualEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='actualStart'>actualStart: </label><div class='col-sm-8'><input id='actualStart' class='form-control' type='text'{{#actualStart}} value='{{actualStart}}'{{/actualStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scheduledEnd'>scheduledEnd: </label><div class='col-sm-8'><input id='scheduledEnd' class='form-control' type='text'{{#scheduledEnd}} value='{{scheduledEnd}}'{{/scheduledEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scheduledStart'>scheduledStart: </label><div class='col-sm-8'><input id='scheduledStart' class='form-control' type='text'{{#scheduledStart}} value='{{scheduledStart}}'{{/scheduledStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><select id='status' class='form-control'>{{#ProjectStepStatusKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ProjectStepStatusKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='stepType'>stepType: </label><div class='col-sm-8'><select id='stepType' class='form-control'>{{#StepKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StepKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.PowerSystemSubProject;
                if (null == bucket)
                   cim_data.PowerSystemSubProject = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PowerSystemSubProject[this._id];
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

                base.export_attribute (obj, "export_attribute", "PowerSystemSubProject", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PowerSystemSubProject_collapse" aria-expanded="true" aria-controls="PowerSystemSubProject_collapse" style="margin-left: 10px;">PowerSystemSubProject</a></legend>
                    <div id="PowerSystemSubProject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PowerSystemProject.prototype.template.call (this) +
                    `
                    {{#Project}}<div><b>Project</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Project}}&quot;);})'>{{Project}}</a></div>{{/Project}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PowerSystemSubProject_collapse" aria-expanded="true" aria-controls="PowerSystemSubProject_collapse" style="margin-left: 10px;">PowerSystemSubProject</a></legend>
                    <div id="PowerSystemSubProject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PowerSystemProject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Project'>Project: </label><div class='col-sm-8'><input id='Project' class='form-control' type='text'{{#Project}} value='{{Project}}'{{/Project}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Project", "PowerSystemProject", "1", "0..*"]
                    ]
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