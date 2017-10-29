define
(
    ["model/base"],
    /**
     * The package describes how power system model data is managed and evolve over time in projects.
     *
     */
    function (base)
    {

        function parse_PowerSystemProjectSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PowerSystemProjectSchedule";
            base.parse_element (/<cim:PowerSystemProjectSchedule.actualEnd>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.actualEnd>/g, obj, "actualEnd", base.to_datetime, sub, context);
            base.parse_element (/<cim:PowerSystemProjectSchedule.actualStart>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.actualStart>/g, obj, "actualStart", base.to_datetime, sub, context);
            base.parse_element (/<cim:PowerSystemProjectSchedule.scheduledEnd>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.scheduledEnd>/g, obj, "scheduledEnd", base.to_datetime, sub, context);
            base.parse_element (/<cim:PowerSystemProjectSchedule.scheduledStart>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.scheduledStart>/g, obj, "scheduledStart", base.to_datetime, sub, context);
            base.parse_element (/<cim:PowerSystemProjectSchedule.status>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:PowerSystemProjectSchedule.stepType>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.stepType>/g, obj, "stepType", base.to_string, sub, context);
            base.parse_attribute (/<cim:PowerSystemProjectSchedule.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
            bucket = context.parsed.PowerSystemProjectSchedule;
            if (null == bucket)
                context.parsed.PowerSystemProjectSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PowerSystemProjectSchedule (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PowerSystemProjectSchedule", "actualEnd", base.from_datetime, fields);
            base.export_element (obj, "PowerSystemProjectSchedule", "actualStart", base.from_datetime, fields);
            base.export_element (obj, "PowerSystemProjectSchedule", "scheduledEnd", base.from_datetime, fields);
            base.export_element (obj, "PowerSystemProjectSchedule", "scheduledStart", base.from_datetime, fields);
            base.export_element (obj, "PowerSystemProjectSchedule", "status", base.from_string, fields);
            base.export_element (obj, "PowerSystemProjectSchedule", "stepType", base.from_string, fields);
            base.export_attribute (obj, "PowerSystemProjectSchedule", "", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * State of the project
         *
         */
        function parse_StepKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "StepKind";
            base.parse_element (/<cim:StepKind.planning>([\s\S]*?)<\/cim:StepKind.planning>/g, obj, "planning", base.to_string, sub, context);
            base.parse_element (/<cim:StepKind.design and construction>([\s\S]*?)<\/cim:StepKind.design and construction>/g, obj, "design and construction", base.to_string, sub, context);
            base.parse_element (/<cim:StepKind.commissioning>([\s\S]*?)<\/cim:StepKind.commissioning>/g, obj, "commissioning", base.to_string, sub, context);
            base.parse_element (/<cim:StepKind.... list incomplete, more to come>([\s\S]*?)<\/cim:StepKind.... list incomplete, more to come>/g, obj, "... list incomplete, more to come", base.to_string, sub, context);
            base.parse_element (/<cim:StepKind.revision>([\s\S]*?)<\/cim:StepKind.revision>/g, obj, "revision", base.to_string, sub, context);
            bucket = context.parsed.StepKind;
            if (null == bucket)
                context.parsed.StepKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StepKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "StepKind", "planning", base.from_string, fields);
            base.export_element (obj, "StepKind", "design and construction", base.from_string, fields);
            base.export_element (obj, "StepKind", "commissioning", base.from_string, fields);
            base.export_element (obj, "StepKind", "... list incomplete, more to come", base.from_string, fields);
            base.export_element (obj, "StepKind", "revision", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A (document/collection) that describe a set of changes to the network.
         *
         */
        function parse_PowerSystemProject (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PowerSystemProject";
            base.parse_element (/<cim:PowerSystemProject.name>([\s\S]*?)<\/cim:PowerSystemProject.name>/g, obj, "name", base.to_string, sub, context);
            base.parse_element (/<cim:PowerSystemProject.priority>([\s\S]*?)<\/cim:PowerSystemProject.priority>/g, obj, "priority", base.to_string, sub, context);
            base.parse_element (/<cim:PowerSystemProject.state>([\s\S]*?)<\/cim:PowerSystemProject.state>/g, obj, "state", base.to_string, sub, context);
            base.parse_element (/<cim:PowerSystemProject.type>([\s\S]*?)<\/cim:PowerSystemProject.type>/g, obj, "type", base.to_string, sub, context);
            base.parse_element (/<cim:PowerSystemProject.version>([\s\S]*?)<\/cim:PowerSystemProject.version>/g, obj, "version", base.to_string, sub, context);
            base.parse_element (/<cim:PowerSystemProject.description>([\s\S]*?)<\/cim:PowerSystemProject.description>/g, obj, "description", base.to_string, sub, context);
            base.parse_attribute (/<cim:PowerSystemProject.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
            base.parse_attribute (/<cim:PowerSystemProject.Project\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Project", sub, context);
            bucket = context.parsed.PowerSystemProject;
            if (null == bucket)
                context.parsed.PowerSystemProject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PowerSystemProject (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PowerSystemProject", "name", base.from_string, fields);
            base.export_element (obj, "PowerSystemProject", "priority", base.from_string, fields);
            base.export_element (obj, "PowerSystemProject", "state", base.from_string, fields);
            base.export_element (obj, "PowerSystemProject", "type", base.from_string, fields);
            base.export_element (obj, "PowerSystemProject", "version", base.from_string, fields);
            base.export_element (obj, "PowerSystemProject", "description", base.from_string, fields);
            base.export_attribute (obj, "PowerSystemProject", "", fields);
            base.export_attribute (obj, "PowerSystemProject", "Project", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The ProjectSteps are ordered by the actualStart and actualEnds so that  a dependent ProjectStep will have a actualStart after an actualEnd.
         *
         */
        function parse_ProjectStep (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ProjectStep";
            base.parse_element (/<cim:ProjectStep.actualEnd>([\s\S]*?)<\/cim:ProjectStep.actualEnd>/g, obj, "actualEnd", base.to_datetime, sub, context);
            base.parse_element (/<cim:ProjectStep.actualStart>([\s\S]*?)<\/cim:ProjectStep.actualStart>/g, obj, "actualStart", base.to_datetime, sub, context);
            base.parse_element (/<cim:ProjectStep.scheduledEnd>([\s\S]*?)<\/cim:ProjectStep.scheduledEnd>/g, obj, "scheduledEnd", base.to_datetime, sub, context);
            base.parse_element (/<cim:ProjectStep.scheduledStart>([\s\S]*?)<\/cim:ProjectStep.scheduledStart>/g, obj, "scheduledStart", base.to_datetime, sub, context);
            base.parse_element (/<cim:ProjectStep.status>([\s\S]*?)<\/cim:ProjectStep.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:ProjectStep.stepType>([\s\S]*?)<\/cim:ProjectStep.stepType>/g, obj, "stepType", base.to_string, sub, context);
            bucket = context.parsed.ProjectStep;
            if (null == bucket)
                context.parsed.ProjectStep = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProjectStep (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ProjectStep", "actualEnd", base.from_datetime, fields);
            base.export_element (obj, "ProjectStep", "actualStart", base.from_datetime, fields);
            base.export_element (obj, "ProjectStep", "scheduledEnd", base.from_datetime, fields);
            base.export_element (obj, "ProjectStep", "scheduledStart", base.from_datetime, fields);
            base.export_element (obj, "ProjectStep", "status", base.from_string, fields);
            base.export_element (obj, "ProjectStep", "stepType", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ProjectStepStatusKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ProjectStepStatusKind";
            base.parse_element (/<cim:ProjectStepStatusKind.cancelled>([\s\S]*?)<\/cim:ProjectStepStatusKind.cancelled>/g, obj, "cancelled", base.to_string, sub, context);
            base.parse_element (/<cim:ProjectStepStatusKind.inProgress>([\s\S]*?)<\/cim:ProjectStepStatusKind.inProgress>/g, obj, "inProgress", base.to_string, sub, context);
            base.parse_element (/<cim:ProjectStepStatusKind.inactive>([\s\S]*?)<\/cim:ProjectStepStatusKind.inactive>/g, obj, "inactive", base.to_string, sub, context);
            base.parse_element (/<cim:ProjectStepStatusKind.approved>([\s\S]*?)<\/cim:ProjectStepStatusKind.approved>/g, obj, "approved", base.to_string, sub, context);
            bucket = context.parsed.ProjectStepStatusKind;
            if (null == bucket)
                context.parsed.ProjectStepStatusKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ProjectStepStatusKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ProjectStepStatusKind", "cancelled", base.from_string, fields);
            base.export_element (obj, "ProjectStepStatusKind", "inProgress", base.from_string, fields);
            base.export_element (obj, "ProjectStepStatusKind", "inactive", base.from_string, fields);
            base.export_element (obj, "ProjectStepStatusKind", "approved", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A collection of dependent projects.
         *
         */
        function parse_PowerSystemSubProject (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemProject (context, sub);
            obj.cls = "PowerSystemSubProject";
            base.parse_attribute (/<cim:PowerSystemSubProject.Project\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Project", sub, context);
            bucket = context.parsed.PowerSystemSubProject;
            if (null == bucket)
                context.parsed.PowerSystemSubProject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PowerSystemSubProject (obj, exporters, full)
        {
            var fields = exporters["PowerSystemProject"](obj, exporters, false);

            base.export_attribute (obj, "PowerSystemSubProject", "Project", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_StepKind: export_StepKind,
                parse_PowerSystemProject: parse_PowerSystemProject,
                export_ProjectStepStatusKind: export_ProjectStepStatusKind,
                export_PowerSystemProject: export_PowerSystemProject,
                parse_PowerSystemSubProject: parse_PowerSystemSubProject,
                parse_ProjectStep: parse_ProjectStep,
                parse_ProjectStepStatusKind: parse_ProjectStepStatusKind,
                parse_StepKind: parse_StepKind,
                parse_PowerSystemProjectSchedule: parse_PowerSystemProjectSchedule,
                export_ProjectStep: export_ProjectStep,
                export_PowerSystemSubProject: export_PowerSystemSubProject,
                export_PowerSystemProjectSchedule: export_PowerSystemProjectSchedule
            }
        );
    }
);