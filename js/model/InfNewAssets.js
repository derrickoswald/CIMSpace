define
(
    ["model/base", "model/Assets"],
    function (base, Assets)
    {

        /**
         * The result of a maintenance activity, a type of Procedure, for a given attribute of an asset.
         *
         */
        class MaintenanceDataSet extends Assets.ProcedureDataSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MaintenanceDataSet;
                if (null == bucket)
                   cim_data.MaintenanceDataSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MaintenanceDataSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.ProcedureDataSet.prototype.parse.call (this, context, sub);
                obj.cls = "MaintenanceDataSet";
                base.parse_element (/<cim:MaintenanceDataSet.conditionAfter>([\s\S]*?)<\/cim:MaintenanceDataSet.conditionAfter>/g, obj, "conditionAfter", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceDataSet.conditionBefore>([\s\S]*?)<\/cim:MaintenanceDataSet.conditionBefore>/g, obj, "conditionBefore", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceDataSet.maintCode>([\s\S]*?)<\/cim:MaintenanceDataSet.maintCode>/g, obj, "maintCode", base.to_string, sub, context);

                var bucket = context.parsed.MaintenanceDataSet;
                if (null == bucket)
                   context.parsed.MaintenanceDataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ProcedureDataSet"](obj, exporters, false);

                base.export_element (obj, "MaintenanceDataSet", "conditionAfter", base.from_string, fields);
                base.export_element (obj, "MaintenanceDataSet", "conditionBefore", base.from_string, fields);
                base.export_element (obj, "MaintenanceDataSet", "maintCode", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Documents the result of one inspection, for a given attribute of an asset.
         *
         */
        class InspectionDataSet extends Assets.ProcedureDataSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InspectionDataSet;
                if (null == bucket)
                   cim_data.InspectionDataSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InspectionDataSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.ProcedureDataSet.prototype.parse.call (this, context, sub);
                obj.cls = "InspectionDataSet";
                base.parse_element (/<cim:InspectionDataSet.locationCondition>([\s\S]*?)<\/cim:InspectionDataSet.locationCondition>/g, obj, "locationCondition", base.to_string, sub, context);

                var bucket = context.parsed.InspectionDataSet;
                if (null == bucket)
                   context.parsed.InspectionDataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ProcedureDataSet"](obj, exporters, false);

                base.export_element (obj, "InspectionDataSet", "locationCondition", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The result of a problem (typically an asset failure) diagnosis.
         *
         */
        class DiagnosisDataSet extends Assets.ProcedureDataSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DiagnosisDataSet;
                if (null == bucket)
                   cim_data.DiagnosisDataSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiagnosisDataSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.ProcedureDataSet.prototype.parse.call (this, context, sub);
                obj.cls = "DiagnosisDataSet";
                base.parse_element (/<cim:DiagnosisDataSet.effect>([\s\S]*?)<\/cim:DiagnosisDataSet.effect>/g, obj, "effect", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.failureMode>([\s\S]*?)<\/cim:DiagnosisDataSet.failureMode>/g, obj, "failureMode", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.finalCause>([\s\S]*?)<\/cim:DiagnosisDataSet.finalCause>/g, obj, "finalCause", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.finalCode>([\s\S]*?)<\/cim:DiagnosisDataSet.finalCode>/g, obj, "finalCode", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.finalOrigin>([\s\S]*?)<\/cim:DiagnosisDataSet.finalOrigin>/g, obj, "finalOrigin", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.finalRemark>([\s\S]*?)<\/cim:DiagnosisDataSet.finalRemark>/g, obj, "finalRemark", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.phaseCode>([\s\S]*?)<\/cim:DiagnosisDataSet.phaseCode>/g, obj, "phaseCode", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.preliminaryCode>([\s\S]*?)<\/cim:DiagnosisDataSet.preliminaryCode>/g, obj, "preliminaryCode", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.preliminaryDateTime>([\s\S]*?)<\/cim:DiagnosisDataSet.preliminaryDateTime>/g, obj, "preliminaryDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.preliminaryRemark>([\s\S]*?)<\/cim:DiagnosisDataSet.preliminaryRemark>/g, obj, "preliminaryRemark", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.rootCause>([\s\S]*?)<\/cim:DiagnosisDataSet.rootCause>/g, obj, "rootCause", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.rootOrigin>([\s\S]*?)<\/cim:DiagnosisDataSet.rootOrigin>/g, obj, "rootOrigin", base.to_string, sub, context);
                base.parse_element (/<cim:DiagnosisDataSet.rootRemark>([\s\S]*?)<\/cim:DiagnosisDataSet.rootRemark>/g, obj, "rootRemark", base.to_string, sub, context);

                var bucket = context.parsed.DiagnosisDataSet;
                if (null == bucket)
                   context.parsed.DiagnosisDataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ProcedureDataSet"](obj, exporters, false);

                base.export_element (obj, "DiagnosisDataSet", "effect", base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "failureMode", base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "finalCause", base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "finalCode", base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "finalOrigin", base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "finalRemark", base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "phaseCode", base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "preliminaryCode", base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "preliminaryDateTime", base.from_datetime, fields);
                base.export_element (obj, "DiagnosisDataSet", "preliminaryRemark", base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "rootCause", base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "rootOrigin", base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "rootRemark", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Test results, usually obtained by a lab or other independent organisation.
         *
         */
        class TestDataSet extends Assets.ProcedureDataSet
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TestDataSet;
                if (null == bucket)
                   cim_data.TestDataSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TestDataSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.ProcedureDataSet.prototype.parse.call (this, context, sub);
                obj.cls = "TestDataSet";
                base.parse_element (/<cim:TestDataSet.conclusion>([\s\S]*?)<\/cim:TestDataSet.conclusion>/g, obj, "conclusion", base.to_string, sub, context);
                base.parse_element (/<cim:TestDataSet.specimenID>([\s\S]*?)<\/cim:TestDataSet.specimenID>/g, obj, "specimenID", base.to_string, sub, context);
                base.parse_element (/<cim:TestDataSet.specimenToLabDateTime>([\s\S]*?)<\/cim:TestDataSet.specimenToLabDateTime>/g, obj, "specimenToLabDateTime", base.to_datetime, sub, context);

                var bucket = context.parsed.TestDataSet;
                if (null == bucket)
                   context.parsed.TestDataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ProcedureDataSet"](obj, exporters, false);

                base.export_element (obj, "TestDataSet", "conclusion", base.from_string, fields);
                base.export_element (obj, "TestDataSet", "specimenID", base.from_string, fields);
                base.export_element (obj, "TestDataSet", "specimenToLabDateTime", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                MaintenanceDataSet: MaintenanceDataSet,
                TestDataSet: TestDataSet,
                DiagnosisDataSet: DiagnosisDataSet,
                InspectionDataSet: InspectionDataSet
            }
        );
    }
);