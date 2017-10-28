define
(
    ["model/base", "model/Assets"],
    function (base, Assets)
    {

        /**
         * The result of a maintenance activity, a type of Procedure, for a given attribute of an asset.
         *
         */
        function parse_MaintenanceDataSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_ProcedureDataSet (context, sub);
            obj.cls = "MaintenanceDataSet";
            /**
             * Condition of asset just following maintenance procedure.
             *
             */
            base.parse_element (/<cim:MaintenanceDataSet.conditionAfter>([\s\S]*?)<\/cim:MaintenanceDataSet.conditionAfter>/g, obj, "conditionAfter", base.to_string, sub, context);

            /**
             * Description of the condition of the asset just prior to maintenance being performed.
             *
             */
            base.parse_element (/<cim:MaintenanceDataSet.conditionBefore>([\s\S]*?)<\/cim:MaintenanceDataSet.conditionBefore>/g, obj, "conditionBefore", base.to_string, sub, context);

            /**
             * Code for the type of maintenance performed.
             *
             */
            base.parse_element (/<cim:MaintenanceDataSet.maintCode>([\s\S]*?)<\/cim:MaintenanceDataSet.maintCode>/g, obj, "maintCode", base.to_string, sub, context);

            bucket = context.parsed.MaintenanceDataSet;
            if (null == bucket)
                context.parsed.MaintenanceDataSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Documents the result of one inspection, for a given attribute of an asset.
         *
         */
        function parse_InspectionDataSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_ProcedureDataSet (context, sub);
            obj.cls = "InspectionDataSet";
            /**
             * Description of the conditions of the location where the asset resides.
             *
             */
            base.parse_element (/<cim:InspectionDataSet.locationCondition>([\s\S]*?)<\/cim:InspectionDataSet.locationCondition>/g, obj, "locationCondition", base.to_string, sub, context);

            bucket = context.parsed.InspectionDataSet;
            if (null == bucket)
                context.parsed.InspectionDataSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The result of a problem (typically an asset failure) diagnosis.
         *
         */
        function parse_DiagnosisDataSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_ProcedureDataSet (context, sub);
            obj.cls = "DiagnosisDataSet";
            /**
             * Effect of problem.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.effect>([\s\S]*?)<\/cim:DiagnosisDataSet.effect>/g, obj, "effect", base.to_string, sub, context);

            /**
             * Failuer mode, for example: Failure to Insulate; Failure to conduct; Failure to contain oil; Failure to provide ground plane; Other.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.failureMode>([\s\S]*?)<\/cim:DiagnosisDataSet.failureMode>/g, obj, "failureMode", base.to_string, sub, context);

            /**
             * Cause of problem determined during diagnosis.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.finalCause>([\s\S]*?)<\/cim:DiagnosisDataSet.finalCause>/g, obj, "finalCause", base.to_string, sub, context);

            /**
             * Code for diagnosed probem type.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.finalCode>([\s\S]*?)<\/cim:DiagnosisDataSet.finalCode>/g, obj, "finalCode", base.to_string, sub, context);

            /**
             * Origin of problem determined during diagnosis.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.finalOrigin>([\s\S]*?)<\/cim:DiagnosisDataSet.finalOrigin>/g, obj, "finalOrigin", base.to_string, sub, context);

            /**
             * Remarks pertaining to findings during problem diagnosis.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.finalRemark>([\s\S]*?)<\/cim:DiagnosisDataSet.finalRemark>/g, obj, "finalRemark", base.to_string, sub, context);

            /**
             * Phase(s) diagnosed.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.phaseCode>([\s\S]*?)<\/cim:DiagnosisDataSet.phaseCode>/g, obj, "phaseCode", base.to_string, sub, context);

            /**
             * Code for problem type determined during preliminary assessment.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.preliminaryCode>([\s\S]*?)<\/cim:DiagnosisDataSet.preliminaryCode>/g, obj, "preliminaryCode", base.to_string, sub, context);

            /**
             * Date and time preliminary assessment of problem was performed.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.preliminaryDateTime>([\s\S]*?)<\/cim:DiagnosisDataSet.preliminaryDateTime>/g, obj, "preliminaryDateTime", base.to_datetime, sub, context);

            /**
             * Remarks pertaining to preliminary assessment of problem.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.preliminaryRemark>([\s\S]*?)<\/cim:DiagnosisDataSet.preliminaryRemark>/g, obj, "preliminaryRemark", base.to_string, sub, context);

            /**
             * Root cause of problem determined during diagnosis.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.rootCause>([\s\S]*?)<\/cim:DiagnosisDataSet.rootCause>/g, obj, "rootCause", base.to_string, sub, context);

            /**
             * Root origin of problem determined during diagnosis.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.rootOrigin>([\s\S]*?)<\/cim:DiagnosisDataSet.rootOrigin>/g, obj, "rootOrigin", base.to_string, sub, context);

            /**
             * Remarks pertaining to root cause findings during problem diagnosis.
             *
             */
            base.parse_element (/<cim:DiagnosisDataSet.rootRemark>([\s\S]*?)<\/cim:DiagnosisDataSet.rootRemark>/g, obj, "rootRemark", base.to_string, sub, context);

            bucket = context.parsed.DiagnosisDataSet;
            if (null == bucket)
                context.parsed.DiagnosisDataSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Test results, usually obtained by a lab or other independent organisation.
         *
         */
        function parse_TestDataSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_ProcedureDataSet (context, sub);
            obj.cls = "TestDataSet";
            /**
             * Conclusion drawn from test results.
             *
             */
            base.parse_element (/<cim:TestDataSet.conclusion>([\s\S]*?)<\/cim:TestDataSet.conclusion>/g, obj, "conclusion", base.to_string, sub, context);

            /**
             * Identifier of specimen used in inspection or test.
             *
             */
            base.parse_element (/<cim:TestDataSet.specimenID>([\s\S]*?)<\/cim:TestDataSet.specimenID>/g, obj, "specimenID", base.to_string, sub, context);

            /**
             * Date and time the specimen was received by the lab.
             *
             */
            base.parse_element (/<cim:TestDataSet.specimenToLabDateTime>([\s\S]*?)<\/cim:TestDataSet.specimenToLabDateTime>/g, obj, "specimenToLabDateTime", base.to_datetime, sub, context);

            bucket = context.parsed.TestDataSet;
            if (null == bucket)
                context.parsed.TestDataSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_InspectionDataSet: parse_InspectionDataSet,
                parse_DiagnosisDataSet: parse_DiagnosisDataSet,
                parse_TestDataSet: parse_TestDataSet,
                parse_MaintenanceDataSet: parse_MaintenanceDataSet
            }
        );
    }
);