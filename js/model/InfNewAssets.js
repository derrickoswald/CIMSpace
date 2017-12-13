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
                var bucket = cim_data.MaintenanceDataSet;
                if (null == bucket)
                   cim_data.MaintenanceDataSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MaintenanceDataSet[obj.id];
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

                base.export_element (obj, "MaintenanceDataSet", "conditionAfter", "conditionAfter",  base.from_string, fields);
                base.export_element (obj, "MaintenanceDataSet", "conditionBefore", "conditionBefore",  base.from_string, fields);
                base.export_element (obj, "MaintenanceDataSet", "maintCode", "maintCode",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MaintenanceDataSet_collapse" aria-expanded="true" aria-controls="{{id}}_MaintenanceDataSet_collapse" style="margin-left: 10px;">MaintenanceDataSet</a></legend>
                    <div id="{{id}}_MaintenanceDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_conditionAfter'>conditionAfter: </label><div class='col-sm-8'><input id='{{id}}_conditionAfter' class='form-control' type='text'{{#conditionAfter}} value='{{conditionAfter}}'{{/conditionAfter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_conditionBefore'>conditionBefore: </label><div class='col-sm-8'><input id='{{id}}_conditionBefore' class='form-control' type='text'{{#conditionBefore}} value='{{conditionBefore}}'{{/conditionBefore}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maintCode'>maintCode: </label><div class='col-sm-8'><input id='{{id}}_maintCode' class='form-control' type='text'{{#maintCode}} value='{{maintCode}}'{{/maintCode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MaintenanceDataSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_conditionAfter").value; if ("" != temp) obj.conditionAfter = temp;
                temp = document.getElementById (id + "_conditionBefore").value; if ("" != temp) obj.conditionBefore = temp;
                temp = document.getElementById (id + "_maintCode").value; if ("" != temp) obj.maintCode = temp;

                return (obj);
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
                var bucket = cim_data.InspectionDataSet;
                if (null == bucket)
                   cim_data.InspectionDataSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InspectionDataSet[obj.id];
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

                base.export_element (obj, "InspectionDataSet", "locationCondition", "locationCondition",  base.from_string, fields);
                base.export_attributes (obj, "InspectionDataSet", "AccordingToSchedules", "AccordingToSchedules", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_InspectionDataSet_collapse" aria-expanded="true" aria-controls="{{id}}_InspectionDataSet_collapse" style="margin-left: 10px;">InspectionDataSet</a></legend>
                    <div id="{{id}}_InspectionDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_locationCondition'>locationCondition: </label><div class='col-sm-8'><input id='{{id}}_locationCondition' class='form-control' type='text'{{#locationCondition}} value='{{locationCondition}}'{{/locationCondition}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "InspectionDataSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_locationCondition").value; if ("" != temp) obj.locationCondition = temp;

                return (obj);
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
                var bucket = cim_data.DiagnosisDataSet;
                if (null == bucket)
                   cim_data.DiagnosisDataSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiagnosisDataSet[obj.id];
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

                base.export_element (obj, "DiagnosisDataSet", "effect", "effect",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "failureMode", "failureMode",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "finalCause", "finalCause",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "finalCode", "finalCode",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "finalOrigin", "finalOrigin",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "finalRemark", "finalRemark",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "phaseCode", "phaseCode",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "preliminaryCode", "preliminaryCode",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "preliminaryDateTime", "preliminaryDateTime",  base.from_datetime, fields);
                base.export_element (obj, "DiagnosisDataSet", "preliminaryRemark", "preliminaryRemark",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "rootCause", "rootCause",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "rootOrigin", "rootOrigin",  base.from_string, fields);
                base.export_element (obj, "DiagnosisDataSet", "rootRemark", "rootRemark",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_DiagnosisDataSet_collapse" aria-expanded="true" aria-controls="{{id}}_DiagnosisDataSet_collapse" style="margin-left: 10px;">DiagnosisDataSet</a></legend>
                    <div id="{{id}}_DiagnosisDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effect'>effect: </label><div class='col-sm-8'><input id='{{id}}_effect' class='form-control' type='text'{{#effect}} value='{{effect}}'{{/effect}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_failureMode'>failureMode: </label><div class='col-sm-8'><input id='{{id}}_failureMode' class='form-control' type='text'{{#failureMode}} value='{{failureMode}}'{{/failureMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_finalCause'>finalCause: </label><div class='col-sm-8'><input id='{{id}}_finalCause' class='form-control' type='text'{{#finalCause}} value='{{finalCause}}'{{/finalCause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_finalCode'>finalCode: </label><div class='col-sm-8'><input id='{{id}}_finalCode' class='form-control' type='text'{{#finalCode}} value='{{finalCode}}'{{/finalCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_finalOrigin'>finalOrigin: </label><div class='col-sm-8'><input id='{{id}}_finalOrigin' class='form-control' type='text'{{#finalOrigin}} value='{{finalOrigin}}'{{/finalOrigin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_finalRemark'>finalRemark: </label><div class='col-sm-8'><input id='{{id}}_finalRemark' class='form-control' type='text'{{#finalRemark}} value='{{finalRemark}}'{{/finalRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseCode'>phaseCode: </label><div class='col-sm-8'><input id='{{id}}_phaseCode' class='form-control' type='text'{{#phaseCode}} value='{{phaseCode}}'{{/phaseCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_preliminaryCode'>preliminaryCode: </label><div class='col-sm-8'><input id='{{id}}_preliminaryCode' class='form-control' type='text'{{#preliminaryCode}} value='{{preliminaryCode}}'{{/preliminaryCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_preliminaryDateTime'>preliminaryDateTime: </label><div class='col-sm-8'><input id='{{id}}_preliminaryDateTime' class='form-control' type='text'{{#preliminaryDateTime}} value='{{preliminaryDateTime}}'{{/preliminaryDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_preliminaryRemark'>preliminaryRemark: </label><div class='col-sm-8'><input id='{{id}}_preliminaryRemark' class='form-control' type='text'{{#preliminaryRemark}} value='{{preliminaryRemark}}'{{/preliminaryRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rootCause'>rootCause: </label><div class='col-sm-8'><input id='{{id}}_rootCause' class='form-control' type='text'{{#rootCause}} value='{{rootCause}}'{{/rootCause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rootOrigin'>rootOrigin: </label><div class='col-sm-8'><input id='{{id}}_rootOrigin' class='form-control' type='text'{{#rootOrigin}} value='{{rootOrigin}}'{{/rootOrigin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rootRemark'>rootRemark: </label><div class='col-sm-8'><input id='{{id}}_rootRemark' class='form-control' type='text'{{#rootRemark}} value='{{rootRemark}}'{{/rootRemark}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DiagnosisDataSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_effect").value; if ("" != temp) obj.effect = temp;
                temp = document.getElementById (id + "_failureMode").value; if ("" != temp) obj.failureMode = temp;
                temp = document.getElementById (id + "_finalCause").value; if ("" != temp) obj.finalCause = temp;
                temp = document.getElementById (id + "_finalCode").value; if ("" != temp) obj.finalCode = temp;
                temp = document.getElementById (id + "_finalOrigin").value; if ("" != temp) obj.finalOrigin = temp;
                temp = document.getElementById (id + "_finalRemark").value; if ("" != temp) obj.finalRemark = temp;
                temp = document.getElementById (id + "_phaseCode").value; if ("" != temp) obj.phaseCode = temp;
                temp = document.getElementById (id + "_preliminaryCode").value; if ("" != temp) obj.preliminaryCode = temp;
                temp = document.getElementById (id + "_preliminaryDateTime").value; if ("" != temp) obj.preliminaryDateTime = temp;
                temp = document.getElementById (id + "_preliminaryRemark").value; if ("" != temp) obj.preliminaryRemark = temp;
                temp = document.getElementById (id + "_rootCause").value; if ("" != temp) obj.rootCause = temp;
                temp = document.getElementById (id + "_rootOrigin").value; if ("" != temp) obj.rootOrigin = temp;
                temp = document.getElementById (id + "_rootRemark").value; if ("" != temp) obj.rootRemark = temp;

                return (obj);
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
                var bucket = cim_data.TestDataSet;
                if (null == bucket)
                   cim_data.TestDataSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TestDataSet[obj.id];
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

                base.export_element (obj, "TestDataSet", "conclusion", "conclusion",  base.from_string, fields);
                base.export_element (obj, "TestDataSet", "specimenID", "specimenID",  base.from_string, fields);
                base.export_element (obj, "TestDataSet", "specimenToLabDateTime", "specimenToLabDateTime",  base.from_datetime, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_TestDataSet_collapse" aria-expanded="true" aria-controls="{{id}}_TestDataSet_collapse" style="margin-left: 10px;">TestDataSet</a></legend>
                    <div id="{{id}}_TestDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.ProcedureDataSet.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_conclusion'>conclusion: </label><div class='col-sm-8'><input id='{{id}}_conclusion' class='form-control' type='text'{{#conclusion}} value='{{conclusion}}'{{/conclusion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_specimenID'>specimenID: </label><div class='col-sm-8'><input id='{{id}}_specimenID' class='form-control' type='text'{{#specimenID}} value='{{specimenID}}'{{/specimenID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_specimenToLabDateTime'>specimenToLabDateTime: </label><div class='col-sm-8'><input id='{{id}}_specimenToLabDateTime' class='form-control' type='text'{{#specimenToLabDateTime}} value='{{specimenToLabDateTime}}'{{/specimenToLabDateTime}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TestDataSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_conclusion").value; if ("" != temp) obj.conclusion = temp;
                temp = document.getElementById (id + "_specimenID").value; if ("" != temp) obj.specimenID = temp;
                temp = document.getElementById (id + "_specimenToLabDateTime").value; if ("" != temp) obj.specimenToLabDateTime = temp;

                return (obj);
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