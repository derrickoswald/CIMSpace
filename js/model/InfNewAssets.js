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

            export (obj, full)
            {
                var fields = Assets.ProcedureDataSet.prototype.export.call (this, obj, false);

                base.export_element (obj, "MaintenanceDataSet", "conditionAfter", base.from_string, fields);
                base.export_element (obj, "MaintenanceDataSet", "conditionBefore", base.from_string, fields);
                base.export_element (obj, "MaintenanceDataSet", "maintCode", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MaintenanceDataSet_collapse" aria-expanded="true" aria-controls="MaintenanceDataSet_collapse" style="margin-left: 10px;">MaintenanceDataSet</a></legend>
                    <div id="MaintenanceDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.ProcedureDataSet.prototype.template.call (this) +
                    `
                    {{#conditionAfter}}<div><b>conditionAfter</b>: {{conditionAfter}}</div>{{/conditionAfter}}
                    {{#conditionBefore}}<div><b>conditionBefore</b>: {{conditionBefore}}</div>{{/conditionBefore}}
                    {{#maintCode}}<div><b>maintCode</b>: {{maintCode}}</div>{{/maintCode}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MaintenanceDataSet_collapse" aria-expanded="true" aria-controls="MaintenanceDataSet_collapse" style="margin-left: 10px;">MaintenanceDataSet</a></legend>
                    <div id="MaintenanceDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='conditionAfter'>conditionAfter: </label><div class='col-sm-8'><input id='conditionAfter' class='form-control' type='text'{{#conditionAfter}} value='{{conditionAfter}}'{{/conditionAfter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='conditionBefore'>conditionBefore: </label><div class='col-sm-8'><input id='conditionBefore' class='form-control' type='text'{{#conditionBefore}} value='{{conditionBefore}}'{{/conditionBefore}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maintCode'>maintCode: </label><div class='col-sm-8'><input id='maintCode' class='form-control' type='text'{{#maintCode}} value='{{maintCode}}'{{/maintCode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                base.parse_attributes (/<cim:InspectionDataSet.AccordingToSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AccordingToSchedules", sub, context);
                var bucket = context.parsed.InspectionDataSet;
                if (null == bucket)
                   context.parsed.InspectionDataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.ProcedureDataSet.prototype.export.call (this, obj, false);

                base.export_element (obj, "InspectionDataSet", "locationCondition", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "InspectionDataSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InspectionDataSet_collapse" aria-expanded="true" aria-controls="InspectionDataSet_collapse" style="margin-left: 10px;">InspectionDataSet</a></legend>
                    <div id="InspectionDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.ProcedureDataSet.prototype.template.call (this) +
                    `
                    {{#locationCondition}}<div><b>locationCondition</b>: {{locationCondition}}</div>{{/locationCondition}}
                    {{#AccordingToSchedules}}<div><b>AccordingToSchedules</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AccordingToSchedules}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.AccordingToSchedules) obj.AccordingToSchedules_string = obj.AccordingToSchedules.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AccordingToSchedules_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InspectionDataSet_collapse" aria-expanded="true" aria-controls="InspectionDataSet_collapse" style="margin-left: 10px;">InspectionDataSet</a></legend>
                    <div id="InspectionDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='locationCondition'>locationCondition: </label><div class='col-sm-8'><input id='locationCondition' class='form-control' type='text'{{#locationCondition}} value='{{locationCondition}}'{{/locationCondition}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["AccordingToSchedules", "ScheduledEventData", "0..*", "1"]
                    ]
                );
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

            export (obj, full)
            {
                var fields = Assets.ProcedureDataSet.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiagnosisDataSet_collapse" aria-expanded="true" aria-controls="DiagnosisDataSet_collapse" style="margin-left: 10px;">DiagnosisDataSet</a></legend>
                    <div id="DiagnosisDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.ProcedureDataSet.prototype.template.call (this) +
                    `
                    {{#effect}}<div><b>effect</b>: {{effect}}</div>{{/effect}}
                    {{#failureMode}}<div><b>failureMode</b>: {{failureMode}}</div>{{/failureMode}}
                    {{#finalCause}}<div><b>finalCause</b>: {{finalCause}}</div>{{/finalCause}}
                    {{#finalCode}}<div><b>finalCode</b>: {{finalCode}}</div>{{/finalCode}}
                    {{#finalOrigin}}<div><b>finalOrigin</b>: {{finalOrigin}}</div>{{/finalOrigin}}
                    {{#finalRemark}}<div><b>finalRemark</b>: {{finalRemark}}</div>{{/finalRemark}}
                    {{#phaseCode}}<div><b>phaseCode</b>: {{phaseCode}}</div>{{/phaseCode}}
                    {{#preliminaryCode}}<div><b>preliminaryCode</b>: {{preliminaryCode}}</div>{{/preliminaryCode}}
                    {{#preliminaryDateTime}}<div><b>preliminaryDateTime</b>: {{preliminaryDateTime}}</div>{{/preliminaryDateTime}}
                    {{#preliminaryRemark}}<div><b>preliminaryRemark</b>: {{preliminaryRemark}}</div>{{/preliminaryRemark}}
                    {{#rootCause}}<div><b>rootCause</b>: {{rootCause}}</div>{{/rootCause}}
                    {{#rootOrigin}}<div><b>rootOrigin</b>: {{rootOrigin}}</div>{{/rootOrigin}}
                    {{#rootRemark}}<div><b>rootRemark</b>: {{rootRemark}}</div>{{/rootRemark}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiagnosisDataSet_collapse" aria-expanded="true" aria-controls="DiagnosisDataSet_collapse" style="margin-left: 10px;">DiagnosisDataSet</a></legend>
                    <div id="DiagnosisDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effect'>effect: </label><div class='col-sm-8'><input id='effect' class='form-control' type='text'{{#effect}} value='{{effect}}'{{/effect}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='failureMode'>failureMode: </label><div class='col-sm-8'><input id='failureMode' class='form-control' type='text'{{#failureMode}} value='{{failureMode}}'{{/failureMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='finalCause'>finalCause: </label><div class='col-sm-8'><input id='finalCause' class='form-control' type='text'{{#finalCause}} value='{{finalCause}}'{{/finalCause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='finalCode'>finalCode: </label><div class='col-sm-8'><input id='finalCode' class='form-control' type='text'{{#finalCode}} value='{{finalCode}}'{{/finalCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='finalOrigin'>finalOrigin: </label><div class='col-sm-8'><input id='finalOrigin' class='form-control' type='text'{{#finalOrigin}} value='{{finalOrigin}}'{{/finalOrigin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='finalRemark'>finalRemark: </label><div class='col-sm-8'><input id='finalRemark' class='form-control' type='text'{{#finalRemark}} value='{{finalRemark}}'{{/finalRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phaseCode'>phaseCode: </label><div class='col-sm-8'><input id='phaseCode' class='form-control' type='text'{{#phaseCode}} value='{{phaseCode}}'{{/phaseCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='preliminaryCode'>preliminaryCode: </label><div class='col-sm-8'><input id='preliminaryCode' class='form-control' type='text'{{#preliminaryCode}} value='{{preliminaryCode}}'{{/preliminaryCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='preliminaryDateTime'>preliminaryDateTime: </label><div class='col-sm-8'><input id='preliminaryDateTime' class='form-control' type='text'{{#preliminaryDateTime}} value='{{preliminaryDateTime}}'{{/preliminaryDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='preliminaryRemark'>preliminaryRemark: </label><div class='col-sm-8'><input id='preliminaryRemark' class='form-control' type='text'{{#preliminaryRemark}} value='{{preliminaryRemark}}'{{/preliminaryRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rootCause'>rootCause: </label><div class='col-sm-8'><input id='rootCause' class='form-control' type='text'{{#rootCause}} value='{{rootCause}}'{{/rootCause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rootOrigin'>rootOrigin: </label><div class='col-sm-8'><input id='rootOrigin' class='form-control' type='text'{{#rootOrigin}} value='{{rootOrigin}}'{{/rootOrigin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rootRemark'>rootRemark: </label><div class='col-sm-8'><input id='rootRemark' class='form-control' type='text'{{#rootRemark}} value='{{rootRemark}}'{{/rootRemark}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Assets.ProcedureDataSet.prototype.export.call (this, obj, false);

                base.export_element (obj, "TestDataSet", "conclusion", base.from_string, fields);
                base.export_element (obj, "TestDataSet", "specimenID", base.from_string, fields);
                base.export_element (obj, "TestDataSet", "specimenToLabDateTime", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TestDataSet_collapse" aria-expanded="true" aria-controls="TestDataSet_collapse" style="margin-left: 10px;">TestDataSet</a></legend>
                    <div id="TestDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.ProcedureDataSet.prototype.template.call (this) +
                    `
                    {{#conclusion}}<div><b>conclusion</b>: {{conclusion}}</div>{{/conclusion}}
                    {{#specimenID}}<div><b>specimenID</b>: {{specimenID}}</div>{{/specimenID}}
                    {{#specimenToLabDateTime}}<div><b>specimenToLabDateTime</b>: {{specimenToLabDateTime}}</div>{{/specimenToLabDateTime}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TestDataSet_collapse" aria-expanded="true" aria-controls="TestDataSet_collapse" style="margin-left: 10px;">TestDataSet</a></legend>
                    <div id="TestDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='conclusion'>conclusion: </label><div class='col-sm-8'><input id='conclusion' class='form-control' type='text'{{#conclusion}} value='{{conclusion}}'{{/conclusion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='specimenID'>specimenID: </label><div class='col-sm-8'><input id='specimenID' class='form-control' type='text'{{#specimenID}} value='{{specimenID}}'{{/specimenID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='specimenToLabDateTime'>specimenToLabDateTime: </label><div class='col-sm-8'><input id='specimenToLabDateTime' class='form-control' type='text'{{#specimenToLabDateTime}} value='{{specimenToLabDateTime}}'{{/specimenToLabDateTime}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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