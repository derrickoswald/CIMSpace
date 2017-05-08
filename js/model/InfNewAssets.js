define
(
    ["model/base", "model/Assets"],
    function (base, Assets)
    {

        /**
         * The result of a maintenance activity, a type of Procedure, for a given attribute of an asset.
         */
        function parse_MaintenanceDataSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_ProcedureDataSet (context, sub);
            obj.cls = "MaintenanceDataSet";
            /**
             * Condition of asset just following maintenance procedure.
             */
            obj["conditionAfter"] = base.parse_element (/<cim:MaintenanceDataSet.conditionAfter>([\s\S]*?)<\/cim:MaintenanceDataSet.conditionAfter>/g, sub, context, true);
            /**
             * Description of the condition of the asset just prior to maintenance being performed.
             */
            obj["conditionBefore"] = base.parse_element (/<cim:MaintenanceDataSet.conditionBefore>([\s\S]*?)<\/cim:MaintenanceDataSet.conditionBefore>/g, sub, context, true);
            /**
             * Code for the type of maintenance performed.
             */
            obj["maintCode"] = base.parse_element (/<cim:MaintenanceDataSet.maintCode>([\s\S]*?)<\/cim:MaintenanceDataSet.maintCode>/g, sub, context, true);
            bucket = context.parsed.MaintenanceDataSet;
            if (null == bucket)
                context.parsed.MaintenanceDataSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Documents the result of one inspection, for a given attribute of an asset.
         */
        function parse_InspectionDataSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_ProcedureDataSet (context, sub);
            obj.cls = "InspectionDataSet";
            /**
             * Description of the conditions of the location where the asset resides.
             */
            obj["locationCondition"] = base.parse_element (/<cim:InspectionDataSet.locationCondition>([\s\S]*?)<\/cim:InspectionDataSet.locationCondition>/g, sub, context, true);
            bucket = context.parsed.InspectionDataSet;
            if (null == bucket)
                context.parsed.InspectionDataSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The result of a problem (typically an asset failure) diagnosis.
         */
        function parse_DiagnosisDataSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_ProcedureDataSet (context, sub);
            obj.cls = "DiagnosisDataSet";
            /**
             * Effect of problem.
             */
            obj["effect"] = base.parse_element (/<cim:DiagnosisDataSet.effect>([\s\S]*?)<\/cim:DiagnosisDataSet.effect>/g, sub, context, true);
            /**
             * Failuer mode, for example: Failure to Insulate; Failure to conduct; Failure to contain oil; Failure to provide ground plane; Other.
             */
            obj["failureMode"] = base.parse_element (/<cim:DiagnosisDataSet.failureMode>([\s\S]*?)<\/cim:DiagnosisDataSet.failureMode>/g, sub, context, true);
            /**
             * Cause of problem determined during diagnosis.
             */
            obj["finalCause"] = base.parse_element (/<cim:DiagnosisDataSet.finalCause>([\s\S]*?)<\/cim:DiagnosisDataSet.finalCause>/g, sub, context, true);
            /**
             * Code for diagnosed probem type.
             */
            obj["finalCode"] = base.parse_element (/<cim:DiagnosisDataSet.finalCode>([\s\S]*?)<\/cim:DiagnosisDataSet.finalCode>/g, sub, context, true);
            /**
             * Origin of problem determined during diagnosis.
             */
            obj["finalOrigin"] = base.parse_element (/<cim:DiagnosisDataSet.finalOrigin>([\s\S]*?)<\/cim:DiagnosisDataSet.finalOrigin>/g, sub, context, true);
            /**
             * Remarks pertaining to findings during problem diagnosis.
             */
            obj["finalRemark"] = base.parse_element (/<cim:DiagnosisDataSet.finalRemark>([\s\S]*?)<\/cim:DiagnosisDataSet.finalRemark>/g, sub, context, true);
            /**
             * Phase(s) diagnosed.
             */
            obj["phaseCode"] = base.parse_element (/<cim:DiagnosisDataSet.phaseCode>([\s\S]*?)<\/cim:DiagnosisDataSet.phaseCode>/g, sub, context, true);
            /**
             * Code for problem type determined during preliminary assessment.
             */
            obj["preliminaryCode"] = base.parse_element (/<cim:DiagnosisDataSet.preliminaryCode>([\s\S]*?)<\/cim:DiagnosisDataSet.preliminaryCode>/g, sub, context, true);
            /**
             * Date and time preliminary assessment of problem was performed.
             */
            obj["preliminaryDateTime"] = base.to_datetime (base.parse_element (/<cim:DiagnosisDataSet.preliminaryDateTime>([\s\S]*?)<\/cim:DiagnosisDataSet.preliminaryDateTime>/g, sub, context, true));
            /**
             * Remarks pertaining to preliminary assessment of problem.
             */
            obj["preliminaryRemark"] = base.parse_element (/<cim:DiagnosisDataSet.preliminaryRemark>([\s\S]*?)<\/cim:DiagnosisDataSet.preliminaryRemark>/g, sub, context, true);
            /**
             * Root cause of problem determined during diagnosis.
             */
            obj["rootCause"] = base.parse_element (/<cim:DiagnosisDataSet.rootCause>([\s\S]*?)<\/cim:DiagnosisDataSet.rootCause>/g, sub, context, true);
            /**
             * Root origin of problem determined during diagnosis.
             */
            obj["rootOrigin"] = base.parse_element (/<cim:DiagnosisDataSet.rootOrigin>([\s\S]*?)<\/cim:DiagnosisDataSet.rootOrigin>/g, sub, context, true);
            /**
             * Remarks pertaining to root cause findings during problem diagnosis.
             */
            obj["rootRemark"] = base.parse_element (/<cim:DiagnosisDataSet.rootRemark>([\s\S]*?)<\/cim:DiagnosisDataSet.rootRemark>/g, sub, context, true);
            bucket = context.parsed.DiagnosisDataSet;
            if (null == bucket)
                context.parsed.DiagnosisDataSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Test results, usually obtained by a lab or other independent organisation.
         */
        function parse_TestDataSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Assets.parse_ProcedureDataSet (context, sub);
            obj.cls = "TestDataSet";
            /**
             * Conclusion drawn from test results.
             */
            obj["conclusion"] = base.parse_element (/<cim:TestDataSet.conclusion>([\s\S]*?)<\/cim:TestDataSet.conclusion>/g, sub, context, true);
            /**
             * Identifier of specimen used in inspection or test.
             */
            obj["specimenID"] = base.parse_element (/<cim:TestDataSet.specimenID>([\s\S]*?)<\/cim:TestDataSet.specimenID>/g, sub, context, true);
            /**
             * Date and time the specimen was received by the lab.
             */
            obj["specimenToLabDateTime"] = base.to_datetime (base.parse_element (/<cim:TestDataSet.specimenToLabDateTime>([\s\S]*?)<\/cim:TestDataSet.specimenToLabDateTime>/g, sub, context, true));
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