define
(
    ["model/base"],
    /**
     * The package describes how power system model data is managed and evolve over time in projects.
     */
    function (base)
    {

        function parse_PowerSystemProjectSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PowerSystemProjectSchedule";
            /**
             * Actual date and time for when the project is commissioned and committed to the network model.
             */
            obj["actualEnd"] = base.to_datetime (base.parse_element (/<cim:PowerSystemProjectSchedule.actualEnd>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.actualEnd>/g, sub, context, true));
            /**
             * Actual date and time for when the project is commissioned and committed to the network model.
             */
            obj["actualStart"] = base.to_datetime (base.parse_element (/<cim:PowerSystemProjectSchedule.actualStart>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.actualStart>/g, sub, context, true));
            /**
             * Estimated date and time for when the project will be commissioned and committed to the network model.
             */
            obj["scheduledEnd"] = base.to_datetime (base.parse_element (/<cim:PowerSystemProjectSchedule.scheduledEnd>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.scheduledEnd>/g, sub, context, true));
            /**
             * Estimated date and time for when the project will be commissioned and committed to the network model.
             */
            obj["scheduledStart"] = base.to_datetime (base.parse_element (/<cim:PowerSystemProjectSchedule.scheduledStart>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.scheduledStart>/g, sub, context, true));
            obj["status"] = base.parse_element (/<cim:PowerSystemProjectSchedule.status>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.status>/g, sub, context, true);
            obj["stepType"] = base.parse_element (/<cim:PowerSystemProjectSchedule.stepType>([\s\S]*?)<\/cim:PowerSystemProjectSchedule.stepType>/g, sub, context, true);
            /**
             * 
             */
            obj[""] = base.parse_attribute (/<cim:PowerSystemProjectSchedule.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PowerSystemProjectSchedule;
            if (null == bucket)
                context.parsed.PowerSystemProjectSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * State of the project
         */
        function parse_StepKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "StepKind";
            /**
             * First phase investigation and planning.
             */
            obj["planning"] = base.parse_element (/<cim:StepKind.planning>([\s\S]*?)<\/cim:StepKind.planning>/g, sub, context, true);
            /**
             * Project is approved for realisation and the construction is starting, under construction or in the state of being realist.
             */
            obj["design and construction"] = base.parse_element (/<cim:StepKind.design and construction>([\s\S]*?)<\/cim:StepKind.design and construction>/g, sub, context, true);
            /**
             * The project is commissioned and added to the network model.
             */
            obj["commissioning"] = base.parse_element (/<cim:StepKind.commissioning>([\s\S]*?)<\/cim:StepKind.commissioning>/g, sub, context, true);
            obj["... list incomplete, more to come"] = base.parse_element (/<cim:StepKind.... list incomplete, more to come>([\s\S]*?)<\/cim:StepKind.... list incomplete, more to come>/g, sub, context, true);
            obj["revision"] = base.parse_element (/<cim:StepKind.revision>([\s\S]*?)<\/cim:StepKind.revision>/g, sub, context, true);
            bucket = context.parsed.StepKind;
            if (null == bucket)
                context.parsed.StepKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A (document/collection) that describe a set of changes to the network.
         */
        function parse_PowerSystemProject (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PowerSystemProject";
            obj["name"] = base.parse_element (/<cim:PowerSystemProject.name>([\s\S]*?)<\/cim:PowerSystemProject.name>/g, sub, context, true);
            /**
             * Priority between competing projects.
             * Use 0 for don t care.  Use 1 for highest priority.  Use 2 as priority is less than 1 and so on.
             */
            obj["priority"] = base.parse_element (/<cim:PowerSystemProject.priority>([\s\S]*?)<\/cim:PowerSystemProject.priority>/g, sub, context, true);
            /**
             * Describes the state the project realisation are from starting planning until it is commissioned if not cancelled.
             */
            obj["state"] = base.parse_element (/<cim:PowerSystemProject.state>([\s\S]*?)<\/cim:PowerSystemProject.state>/g, sub, context, true);
            /**
             * Type of project.
             */
            obj["type"] = base.parse_element (/<cim:PowerSystemProject.type>([\s\S]*?)<\/cim:PowerSystemProject.type>/g, sub, context, true);
            /**
             * Version of the project.
             * Changes to a project is not modeled. So the project with the highest version are the valid/latest project. Only positive numbers equal or higher than 1 are allowed.
             */
            obj["version"] = base.parse_element (/<cim:PowerSystemProject.version>([\s\S]*?)<\/cim:PowerSystemProject.version>/g, sub, context, true);
            obj["description"] = base.parse_element (/<cim:PowerSystemProject.description>([\s\S]*?)<\/cim:PowerSystemProject.description>/g, sub, context, true);
            /**
             * 
             */
            obj[""] = base.parse_attribute (/<cim:PowerSystemProject.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["Project"] = base.parse_attribute (/<cim:PowerSystemProject.Project\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PowerSystemProject;
            if (null == bucket)
                context.parsed.PowerSystemProject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The ProjectSteps are ordered by the actualStart and actualEnds so that  a dependent ProjectStep will have a actualStart after an actualEnd.
         */
        function parse_ProjectStep (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ProjectStep";
            /**
             * Actual date and time for when the project is commissioned and committed to the network model.
             */
            obj["actualEnd"] = base.to_datetime (base.parse_element (/<cim:ProjectStep.actualEnd>([\s\S]*?)<\/cim:ProjectStep.actualEnd>/g, sub, context, true));
            /**
             * Actual date and time for when the project is commissioned and committed to the network model.
             */
            obj["actualStart"] = base.to_datetime (base.parse_element (/<cim:ProjectStep.actualStart>([\s\S]*?)<\/cim:ProjectStep.actualStart>/g, sub, context, true));
            /**
             * Estimated date and time for when the project will be commissioned and committed to the network model.
             */
            obj["scheduledEnd"] = base.to_datetime (base.parse_element (/<cim:ProjectStep.scheduledEnd>([\s\S]*?)<\/cim:ProjectStep.scheduledEnd>/g, sub, context, true));
            /**
             * Estimated date and time for when the project will be commissioned and committed to the network model.
             */
            obj["scheduledStart"] = base.to_datetime (base.parse_element (/<cim:ProjectStep.scheduledStart>([\s\S]*?)<\/cim:ProjectStep.scheduledStart>/g, sub, context, true));
            obj["status"] = base.parse_element (/<cim:ProjectStep.status>([\s\S]*?)<\/cim:ProjectStep.status>/g, sub, context, true);
            obj["stepType"] = base.parse_element (/<cim:ProjectStep.stepType>([\s\S]*?)<\/cim:ProjectStep.stepType>/g, sub, context, true);
            bucket = context.parsed.ProjectStep;
            if (null == bucket)
                context.parsed.ProjectStep = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_ProjectStepStatusKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ProjectStepStatusKind";
            obj["cancelled"] = base.parse_element (/<cim:ProjectStepStatusKind.cancelled>([\s\S]*?)<\/cim:ProjectStepStatusKind.cancelled>/g, sub, context, true);
            obj["inProgress"] = base.parse_element (/<cim:ProjectStepStatusKind.inProgress>([\s\S]*?)<\/cim:ProjectStepStatusKind.inProgress>/g, sub, context, true);
            obj["inactive"] = base.parse_element (/<cim:ProjectStepStatusKind.inactive>([\s\S]*?)<\/cim:ProjectStepStatusKind.inactive>/g, sub, context, true);
            obj["approved"] = base.parse_element (/<cim:ProjectStepStatusKind.approved>([\s\S]*?)<\/cim:ProjectStepStatusKind.approved>/g, sub, context, true);
            bucket = context.parsed.ProjectStepStatusKind;
            if (null == bucket)
                context.parsed.ProjectStepStatusKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A collection of dependent projects.
         */
        function parse_PowerSystemSubProject (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PowerSystemProject (context, sub);
            obj.cls = "PowerSystemSubProject";
            /**
             * 
             */
            obj["Project"] = base.parse_attribute (/<cim:PowerSystemSubProject.Project\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PowerSystemSubProject;
            if (null == bucket)
                context.parsed.PowerSystemSubProject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_PowerSystemProject: parse_PowerSystemProject,
                parse_PowerSystemSubProject: parse_PowerSystemSubProject,
                parse_ProjectStep: parse_ProjectStep,
                parse_ProjectStepStatusKind: parse_ProjectStepStatusKind,
                parse_StepKind: parse_StepKind,
                parse_PowerSystemProjectSchedule: parse_PowerSystemProjectSchedule
            }
        );
    }
);