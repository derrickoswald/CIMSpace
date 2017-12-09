define
(
    ["model/base", "model/Common", "model/Core", "model/Work"],
    /**
     * The package covers all types of work, including inspection, maintenance, repair, restoration, and construction.
     *
     * It covers the full life cycle including request, initiate, track and record work. Standardized designs (compatible units) are used where possible.
     *
     */
    function (base, Common, Core, Work)
    {

        /**
         * Kinds of activities to be performed on a Compatible Unit.
         *
         */
        var WorkActionKind =
        {
            install: "install",
            remove: "remove",
            abandon: "abandon",
            transfer: "transfer"
        };
        Object.freeze (WorkActionKind);

        /**
         * Kind of condition factor.
         *
         */
        var ConditionFactorKind =
        {
            labor: "labor",
            accountAllocation: "accountAllocation",
            material: "material",
            travel: "travel",
            other: "other"
        };
        Object.freeze (ConditionFactorKind);

        /**
         * Kind of design.
         *
         */
        var DesignKind =
        {
            estimated: "estimated",
            asBuilt: "asBuilt",
            other: "other"
        };
        Object.freeze (DesignKind);

        /**
         * A type of ActivityRecord that records information about the status of an item, such as a Work or WorkTask, at a point in time.
         *
         */
        class WorkStatusEntry extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkStatusEntry;
                if (null == bucket)
                   cim_data.WorkStatusEntry = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkStatusEntry[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "WorkStatusEntry";
                base.parse_element (/<cim:WorkStatusEntry.percentComplete>([\s\S]*?)<\/cim:WorkStatusEntry.percentComplete>/g, obj, "percentComplete", base.to_string, sub, context);
                var bucket = context.parsed.WorkStatusEntry;
                if (null == bucket)
                   context.parsed.WorkStatusEntry = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_element (obj, "WorkStatusEntry", "percentComplete", "percentComplete",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkStatusEntry_collapse" aria-expanded="true" aria-controls="WorkStatusEntry_collapse" style="margin-left: 10px;">WorkStatusEntry</a></legend>
                    <div id="WorkStatusEntry_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#percentComplete}}<div><b>percentComplete</b>: {{percentComplete}}</div>{{/percentComplete}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkStatusEntry_collapse" aria-expanded="true" aria-controls="WorkStatusEntry_collapse" style="margin-left: 10px;">WorkStatusEntry</a></legend>
                    <div id="WorkStatusEntry_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='percentComplete'>percentComplete: </label><div class='col-sm-8'><input id='percentComplete' class='form-control' type='text'{{#percentComplete}} value='{{percentComplete}}'{{/percentComplete}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "WorkStatusEntry" };
                super.submit (obj);
                temp = document.getElementById ("percentComplete").value; if ("" != temp) obj.percentComplete = temp;

                return (obj);
            }
        }

        /**
         * Shadow class for Document, to isolate subclassing from this package.
         *
         * If any subclass gets normative and needs inheritance, it will inherit directly from Document.
         *
         */
        class WorkDocument extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkDocument;
                if (null == bucket)
                   cim_data.WorkDocument = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkDocument[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "WorkDocument";
                var bucket = context.parsed.WorkDocument;
                if (null == bucket)
                   context.parsed.WorkDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkDocument_collapse" aria-expanded="true" aria-controls="WorkDocument_collapse" style="margin-left: 10px;">WorkDocument</a></legend>
                    <div id="WorkDocument_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkDocument_collapse" aria-expanded="true" aria-controls="WorkDocument_collapse" style="margin-left: 10px;">WorkDocument</a></legend>
                    <div id="WorkDocument_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "WorkDocument" };
                super.submit (obj);

                return (obj);
            }
        }

        /**
         * Shadow class for IdentifiedObject, to isolate subclassing from this package.
         *
         * If any subclass gets normative and needs inheritance, it will inherit directly from IdentifiedObject.
         *
         */
        class WorkIdentifiedObject extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkIdentifiedObject;
                if (null == bucket)
                   cim_data.WorkIdentifiedObject = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkIdentifiedObject[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WorkIdentifiedObject";
                var bucket = context.parsed.WorkIdentifiedObject;
                if (null == bucket)
                   context.parsed.WorkIdentifiedObject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkIdentifiedObject_collapse" aria-expanded="true" aria-controls="WorkIdentifiedObject_collapse" style="margin-left: 10px;">WorkIdentifiedObject</a></legend>
                    <div id="WorkIdentifiedObject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkIdentifiedObject_collapse" aria-expanded="true" aria-controls="WorkIdentifiedObject_collapse" style="margin-left: 10px;">WorkIdentifiedObject</a></legend>
                    <div id="WorkIdentifiedObject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "WorkIdentifiedObject" };
                super.submit (obj);

                return (obj);
            }
        }

        /**
         * A set of tasks is required to implement a design.
         *
         */
        class OldWorkTask extends Work.WorkTask
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OldWorkTask;
                if (null == bucket)
                   cim_data.OldWorkTask = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OldWorkTask[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Work.WorkTask.prototype.parse.call (this, context, sub);
                obj.cls = "OldWorkTask";
                base.parse_attributes (/<cim:OldWorkTask.QualificationRequirements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "QualificationRequirements", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.MiscCostItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MiscCostItems", sub, context);
                base.parse_attribute (/<cim:OldWorkTask.Design\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.Capabilities\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Capabilities", sub, context);
                base.parse_attribute (/<cim:OldWorkTask.WorkFlowStep\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkFlowStep", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.WorkCostDetails\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.Usages\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Usages", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.LaborItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LaborItems", sub, context);
                base.parse_attribute (/<cim:OldWorkTask.OverheadCost\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OverheadCost", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.DesignLocationCUs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocationCUs", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.ContractorItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContractorItems", sub, context);
                var bucket = context.parsed.OldWorkTask;
                if (null == bucket)
                   context.parsed.OldWorkTask = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Work.WorkTask.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "OldWorkTask", "QualificationRequirements", "QualificationRequirements", fields);
                base.export_attributes (obj, "OldWorkTask", "MiscCostItems", "MiscCostItems", fields);
                base.export_attribute (obj, "OldWorkTask", "Design", "Design", fields);
                base.export_attributes (obj, "OldWorkTask", "Capabilities", "Capabilities", fields);
                base.export_attribute (obj, "OldWorkTask", "WorkFlowStep", "WorkFlowStep", fields);
                base.export_attributes (obj, "OldWorkTask", "WorkCostDetails", "WorkCostDetails", fields);
                base.export_attributes (obj, "OldWorkTask", "Usages", "Usages", fields);
                base.export_attributes (obj, "OldWorkTask", "LaborItems", "LaborItems", fields);
                base.export_attribute (obj, "OldWorkTask", "OverheadCost", "OverheadCost", fields);
                base.export_attributes (obj, "OldWorkTask", "DesignLocationCUs", "DesignLocationCUs", fields);
                base.export_attributes (obj, "OldWorkTask", "ContractorItems", "ContractorItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OldWorkTask_collapse" aria-expanded="true" aria-controls="OldWorkTask_collapse" style="margin-left: 10px;">OldWorkTask</a></legend>
                    <div id="OldWorkTask_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Work.WorkTask.prototype.template.call (this) +
                    `
                    {{#QualificationRequirements}}<div><b>QualificationRequirements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/QualificationRequirements}}
                    {{#MiscCostItems}}<div><b>MiscCostItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MiscCostItems}}
                    {{#Design}}<div><b>Design</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Design}}&quot;);})'>{{Design}}</a></div>{{/Design}}
                    {{#Capabilities}}<div><b>Capabilities</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Capabilities}}
                    {{#WorkFlowStep}}<div><b>WorkFlowStep</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkFlowStep}}&quot;);})'>{{WorkFlowStep}}</a></div>{{/WorkFlowStep}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkCostDetails}}
                    {{#Usages}}<div><b>Usages</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Usages}}
                    {{#LaborItems}}<div><b>LaborItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LaborItems}}
                    {{#OverheadCost}}<div><b>OverheadCost</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OverheadCost}}&quot;);})'>{{OverheadCost}}</a></div>{{/OverheadCost}}
                    {{#DesignLocationCUs}}<div><b>DesignLocationCUs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DesignLocationCUs}}
                    {{#ContractorItems}}<div><b>ContractorItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ContractorItems}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.QualificationRequirements) obj.QualificationRequirements_string = obj.QualificationRequirements.join ();
                if (obj.MiscCostItems) obj.MiscCostItems_string = obj.MiscCostItems.join ();
                if (obj.Capabilities) obj.Capabilities_string = obj.Capabilities.join ();
                if (obj.WorkCostDetails) obj.WorkCostDetails_string = obj.WorkCostDetails.join ();
                if (obj.Usages) obj.Usages_string = obj.Usages.join ();
                if (obj.LaborItems) obj.LaborItems_string = obj.LaborItems.join ();
                if (obj.DesignLocationCUs) obj.DesignLocationCUs_string = obj.DesignLocationCUs.join ();
                if (obj.ContractorItems) obj.ContractorItems_string = obj.ContractorItems.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.QualificationRequirements_string;
                delete obj.MiscCostItems_string;
                delete obj.Capabilities_string;
                delete obj.WorkCostDetails_string;
                delete obj.Usages_string;
                delete obj.LaborItems_string;
                delete obj.DesignLocationCUs_string;
                delete obj.ContractorItems_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OldWorkTask_collapse" aria-expanded="true" aria-controls="OldWorkTask_collapse" style="margin-left: 10px;">OldWorkTask</a></legend>
                    <div id="OldWorkTask_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Work.WorkTask.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='QualificationRequirements'>QualificationRequirements: </label><div class='col-sm-8'><input id='QualificationRequirements' class='form-control' type='text'{{#QualificationRequirements}} value='{{QualificationRequirements}}_string'{{/QualificationRequirements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Design'>Design: </label><div class='col-sm-8'><input id='Design' class='form-control' type='text'{{#Design}} value='{{Design}}'{{/Design}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Capabilities'>Capabilities: </label><div class='col-sm-8'><input id='Capabilities' class='form-control' type='text'{{#Capabilities}} value='{{Capabilities}}_string'{{/Capabilities}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkFlowStep'>WorkFlowStep: </label><div class='col-sm-8'><input id='WorkFlowStep' class='form-control' type='text'{{#WorkFlowStep}} value='{{WorkFlowStep}}'{{/WorkFlowStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OverheadCost'>OverheadCost: </label><div class='col-sm-8'><input id='OverheadCost' class='form-control' type='text'{{#OverheadCost}} value='{{OverheadCost}}'{{/OverheadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DesignLocationCUs'>DesignLocationCUs: </label><div class='col-sm-8'><input id='DesignLocationCUs' class='form-control' type='text'{{#DesignLocationCUs}} value='{{DesignLocationCUs}}_string'{{/DesignLocationCUs}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "OldWorkTask" };
                super.submit (obj);
                temp = document.getElementById ("QualificationRequirements").value; if ("" != temp) obj.QualificationRequirements = temp.split (",");
                temp = document.getElementById ("Design").value; if ("" != temp) obj.Design = temp;
                temp = document.getElementById ("Capabilities").value; if ("" != temp) obj.Capabilities = temp.split (",");
                temp = document.getElementById ("WorkFlowStep").value; if ("" != temp) obj.WorkFlowStep = temp;
                temp = document.getElementById ("OverheadCost").value; if ("" != temp) obj.OverheadCost = temp;
                temp = document.getElementById ("DesignLocationCUs").value; if ("" != temp) obj.DesignLocationCUs = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["QualificationRequirements", "QualificationRequirement", "0..*", "0..*"],
                        ["MiscCostItems", "MiscCostItem", "0..*", "0..1"],
                        ["Design", "Design", "0..1", "0..*"],
                        ["Capabilities", "Capability", "0..*", "0..*"],
                        ["WorkFlowStep", "WorkFlowStep", "0..1", "0..*"],
                        ["WorkCostDetails", "WorkCostDetail", "0..*", "0..1"],
                        ["Usages", "Usage", "0..*", "0..1"],
                        ["LaborItems", "LaborItem", "0..*", "0..1"],
                        ["OverheadCost", "OverheadCost", "0..1", "0..*"],
                        ["DesignLocationCUs", "DesignLocationCU", "0..*", "0..*"],
                        ["ContractorItems", "ContractorItem", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Business justification for capital expenditures, usually addressing operations and maintenance costs as well.
         *
         */
        class BusinessCase extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BusinessCase;
                if (null == bucket)
                   cim_data.BusinessCase = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BusinessCase[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "BusinessCase";
                base.parse_element (/<cim:BusinessCase.corporateCode>([\s\S]*?)<\/cim:BusinessCase.corporateCode>/g, obj, "corporateCode", base.to_string, sub, context);
                base.parse_attributes (/<cim:BusinessCase.Projects\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Projects", sub, context);
                base.parse_attributes (/<cim:BusinessCase.Works\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                var bucket = context.parsed.BusinessCase;
                if (null == bucket)
                   context.parsed.BusinessCase = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "BusinessCase", "corporateCode", "corporateCode",  base.from_string, fields);
                base.export_attributes (obj, "BusinessCase", "Projects", "Projects", fields);
                base.export_attributes (obj, "BusinessCase", "Works", "Works", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BusinessCase_collapse" aria-expanded="true" aria-controls="BusinessCase_collapse" style="margin-left: 10px;">BusinessCase</a></legend>
                    <div id="BusinessCase_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#corporateCode}}<div><b>corporateCode</b>: {{corporateCode}}</div>{{/corporateCode}}
                    {{#Projects}}<div><b>Projects</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Projects}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Works}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Projects) obj.Projects_string = obj.Projects.join ();
                if (obj.Works) obj.Works_string = obj.Works.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Projects_string;
                delete obj.Works_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BusinessCase_collapse" aria-expanded="true" aria-controls="BusinessCase_collapse" style="margin-left: 10px;">BusinessCase</a></legend>
                    <div id="BusinessCase_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='corporateCode'>corporateCode: </label><div class='col-sm-8'><input id='corporateCode' class='form-control' type='text'{{#corporateCode}} value='{{corporateCode}}'{{/corporateCode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "BusinessCase" };
                super.submit (obj);
                temp = document.getElementById ("corporateCode").value; if ("" != temp) obj.corporateCode = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Projects", "Project", "0..*", "0..1"],
                        ["Works", "Work", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Special requirements and/or regulations may pertain to certain types of assets or work.
         *
         * For example, fire protection and scaffolding.
         *
         */
        class Regulation extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Regulation;
                if (null == bucket)
                   cim_data.Regulation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Regulation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "Regulation";
                base.parse_element (/<cim:Regulation.referenceNumber>([\s\S]*?)<\/cim:Regulation.referenceNumber>/g, obj, "referenceNumber", base.to_string, sub, context);
                var bucket = context.parsed.Regulation;
                if (null == bucket)
                   context.parsed.Regulation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "Regulation", "referenceNumber", "referenceNumber",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Regulation_collapse" aria-expanded="true" aria-controls="Regulation_collapse" style="margin-left: 10px;">Regulation</a></legend>
                    <div id="Regulation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#referenceNumber}}<div><b>referenceNumber</b>: {{referenceNumber}}</div>{{/referenceNumber}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Regulation_collapse" aria-expanded="true" aria-controls="Regulation_collapse" style="margin-left: 10px;">Regulation</a></legend>
                    <div id="Regulation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='referenceNumber'>referenceNumber: </label><div class='col-sm-8'><input id='referenceNumber' class='form-control' type='text'{{#referenceNumber}} value='{{referenceNumber}}'{{/referenceNumber}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Regulation" };
                super.submit (obj);
                temp = document.getElementById ("referenceNumber").value; if ("" != temp) obj.referenceNumber = temp;

                return (obj);
            }
        }

        /**
         * An assignment is given to an ErpPerson, Crew, Organisation, Equipment Item, Tool, etc. and may be used to perform Work, WorkTasks, Procedures, etc.
         *
         * TimeSchedules may be set up directly for Assignments or indirectly via the associated WorkTask. Note that these associations are all inherited through the recursive relationship on Document.
         *
         */
        class Assignment extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Assignment;
                if (null == bucket)
                   cim_data.Assignment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Assignment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "Assignment";
                base.parse_element (/<cim:Assignment.effectivePeriod>([\s\S]*?)<\/cim:Assignment.effectivePeriod>/g, obj, "effectivePeriod", base.to_string, sub, context);
                base.parse_attributes (/<cim:Assignment.Crews\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crews", sub, context);
                var bucket = context.parsed.Assignment;
                if (null == bucket)
                   context.parsed.Assignment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "Assignment", "effectivePeriod", "effectivePeriod",  base.from_string, fields);
                base.export_attributes (obj, "Assignment", "Crews", "Crews", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Assignment_collapse" aria-expanded="true" aria-controls="Assignment_collapse" style="margin-left: 10px;">Assignment</a></legend>
                    <div id="Assignment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#effectivePeriod}}<div><b>effectivePeriod</b>: {{effectivePeriod}}</div>{{/effectivePeriod}}
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Crews}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Crews) obj.Crews_string = obj.Crews.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Crews_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Assignment_collapse" aria-expanded="true" aria-controls="Assignment_collapse" style="margin-left: 10px;">Assignment</a></legend>
                    <div id="Assignment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectivePeriod'>effectivePeriod: </label><div class='col-sm-8'><input id='effectivePeriod' class='form-control' type='text'{{#effectivePeriod}} value='{{effectivePeriod}}'{{/effectivePeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Crews'>Crews: </label><div class='col-sm-8'><input id='Crews' class='form-control' type='text'{{#Crews}} value='{{Crews}}_string'{{/Crews}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Assignment" };
                super.submit (obj);
                temp = document.getElementById ("effectivePeriod").value; if ("" != temp) obj.effectivePeriod = temp;
                temp = document.getElementById ("Crews").value; if ("" != temp) obj.Crews = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Crews", "OldCrew", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * A collection of related work.
         *
         * For construction projects and maintenance projects, multiple phases may be performed.
         *
         */
        class Project extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Project;
                if (null == bucket)
                   cim_data.Project = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Project[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "Project";
                base.parse_element (/<cim:Project.budget>([\s\S]*?)<\/cim:Project.budget>/g, obj, "budget", base.to_string, sub, context);
                base.parse_attributes (/<cim:Project.SubProjects\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubProjects", sub, context);
                base.parse_attribute (/<cim:Project.ParentProject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentProject", sub, context);
                base.parse_attribute (/<cim:Project.BusinessCase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BusinessCase", sub, context);
                base.parse_attributes (/<cim:Project.Works\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                base.parse_attribute (/<cim:Project.ErpProjectAccounting\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context);
                var bucket = context.parsed.Project;
                if (null == bucket)
                   context.parsed.Project = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "Project", "budget", "budget",  base.from_string, fields);
                base.export_attributes (obj, "Project", "SubProjects", "SubProjects", fields);
                base.export_attribute (obj, "Project", "ParentProject", "ParentProject", fields);
                base.export_attribute (obj, "Project", "BusinessCase", "BusinessCase", fields);
                base.export_attributes (obj, "Project", "Works", "Works", fields);
                base.export_attribute (obj, "Project", "ErpProjectAccounting", "ErpProjectAccounting", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Project_collapse" aria-expanded="true" aria-controls="Project_collapse" style="margin-left: 10px;">Project</a></legend>
                    <div id="Project_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#budget}}<div><b>budget</b>: {{budget}}</div>{{/budget}}
                    {{#SubProjects}}<div><b>SubProjects</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SubProjects}}
                    {{#ParentProject}}<div><b>ParentProject</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ParentProject}}&quot;);})'>{{ParentProject}}</a></div>{{/ParentProject}}
                    {{#BusinessCase}}<div><b>BusinessCase</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BusinessCase}}&quot;);})'>{{BusinessCase}}</a></div>{{/BusinessCase}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Works}}
                    {{#ErpProjectAccounting}}<div><b>ErpProjectAccounting</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpProjectAccounting}}&quot;);})'>{{ErpProjectAccounting}}</a></div>{{/ErpProjectAccounting}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SubProjects) obj.SubProjects_string = obj.SubProjects.join ();
                if (obj.Works) obj.Works_string = obj.Works.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SubProjects_string;
                delete obj.Works_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Project_collapse" aria-expanded="true" aria-controls="Project_collapse" style="margin-left: 10px;">Project</a></legend>
                    <div id="Project_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='budget'>budget: </label><div class='col-sm-8'><input id='budget' class='form-control' type='text'{{#budget}} value='{{budget}}'{{/budget}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ParentProject'>ParentProject: </label><div class='col-sm-8'><input id='ParentProject' class='form-control' type='text'{{#ParentProject}} value='{{ParentProject}}'{{/ParentProject}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BusinessCase'>BusinessCase: </label><div class='col-sm-8'><input id='BusinessCase' class='form-control' type='text'{{#BusinessCase}} value='{{BusinessCase}}'{{/BusinessCase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpProjectAccounting'>ErpProjectAccounting: </label><div class='col-sm-8'><input id='ErpProjectAccounting' class='form-control' type='text'{{#ErpProjectAccounting}} value='{{ErpProjectAccounting}}'{{/ErpProjectAccounting}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Project" };
                super.submit (obj);
                temp = document.getElementById ("budget").value; if ("" != temp) obj.budget = temp;
                temp = document.getElementById ("ParentProject").value; if ("" != temp) obj.ParentProject = temp;
                temp = document.getElementById ("BusinessCase").value; if ("" != temp) obj.BusinessCase = temp;
                temp = document.getElementById ("ErpProjectAccounting").value; if ("" != temp) obj.ErpProjectAccounting = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SubProjects", "Project", "0..*", "0..1"],
                        ["ParentProject", "Project", "0..1", "0..*"],
                        ["BusinessCase", "BusinessCase", "0..1", "0..*"],
                        ["Works", "Work", "0..*", "0..1"],
                        ["ErpProjectAccounting", "ErpProjectAccounting", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A roll up by cost type for the entire cost of a work order.
         *
         * For example, total labor.
         *
         */
        class WorkCostSummary extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkCostSummary;
                if (null == bucket)
                   cim_data.WorkCostSummary = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkCostSummary[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "WorkCostSummary";
                base.parse_attribute (/<cim:WorkCostSummary.WorkCostDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context);
                var bucket = context.parsed.WorkCostSummary;
                if (null == bucket)
                   context.parsed.WorkCostSummary = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WorkCostSummary", "WorkCostDetail", "WorkCostDetail", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkCostSummary_collapse" aria-expanded="true" aria-controls="WorkCostSummary_collapse" style="margin-left: 10px;">WorkCostSummary</a></legend>
                    <div id="WorkCostSummary_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#WorkCostDetail}}<div><b>WorkCostDetail</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkCostDetail}}&quot;);})'>{{WorkCostDetail}}</a></div>{{/WorkCostDetail}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkCostSummary_collapse" aria-expanded="true" aria-controls="WorkCostSummary_collapse" style="margin-left: 10px;">WorkCostSummary</a></legend>
                    <div id="WorkCostSummary_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkCostDetail'>WorkCostDetail: </label><div class='col-sm-8'><input id='WorkCostDetail' class='form-control' type='text'{{#WorkCostDetail}} value='{{WorkCostDetail}}'{{/WorkCostDetail}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "WorkCostSummary" };
                super.submit (obj);
                temp = document.getElementById ("WorkCostDetail").value; if ("" != temp) obj.WorkCostDetail = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["WorkCostDetail", "WorkCostDetail", "0..1", "0..1"]
                    ]
                );
            }
        }

        /**
         * A collection of all of the individual cost items collected from multiple sources.
         *
         */
        class WorkCostDetail extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkCostDetail;
                if (null == bucket)
                   cim_data.WorkCostDetail = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkCostDetail[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "WorkCostDetail";
                base.parse_element (/<cim:WorkCostDetail.amount>([\s\S]*?)<\/cim:WorkCostDetail.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:WorkCostDetail.isDebit>([\s\S]*?)<\/cim:WorkCostDetail.isDebit>/g, obj, "isDebit", base.to_boolean, sub, context);
                base.parse_element (/<cim:WorkCostDetail.transactionDateTime>([\s\S]*?)<\/cim:WorkCostDetail.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:WorkCostDetail.LaborItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LaborItems", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.CostType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CostType", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.OverheadCost\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OverheadCost", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.Design\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.ErpProjectAccounting\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context);
                base.parse_attributes (/<cim:WorkCostDetail.MiscCostItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MiscCostItems", sub, context);
                base.parse_attributes (/<cim:WorkCostDetail.ContractorItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContractorItems", sub, context);
                base.parse_attributes (/<cim:WorkCostDetail.Works\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.WorkCostSummary\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostSummary", sub, context);
                base.parse_attributes (/<cim:WorkCostDetail.PropertyUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PropertyUnits", sub, context);
                var bucket = context.parsed.WorkCostDetail;
                if (null == bucket)
                   context.parsed.WorkCostDetail = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "WorkCostDetail", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "WorkCostDetail", "isDebit", "isDebit",  base.from_boolean, fields);
                base.export_element (obj, "WorkCostDetail", "transactionDateTime", "transactionDateTime",  base.from_datetime, fields);
                base.export_attributes (obj, "WorkCostDetail", "LaborItems", "LaborItems", fields);
                base.export_attribute (obj, "WorkCostDetail", "CostType", "CostType", fields);
                base.export_attribute (obj, "WorkCostDetail", "OverheadCost", "OverheadCost", fields);
                base.export_attribute (obj, "WorkCostDetail", "WorkTask", "WorkTask", fields);
                base.export_attribute (obj, "WorkCostDetail", "Design", "Design", fields);
                base.export_attribute (obj, "WorkCostDetail", "ErpProjectAccounting", "ErpProjectAccounting", fields);
                base.export_attributes (obj, "WorkCostDetail", "MiscCostItems", "MiscCostItems", fields);
                base.export_attributes (obj, "WorkCostDetail", "ContractorItems", "ContractorItems", fields);
                base.export_attributes (obj, "WorkCostDetail", "Works", "Works", fields);
                base.export_attribute (obj, "WorkCostDetail", "WorkCostSummary", "WorkCostSummary", fields);
                base.export_attributes (obj, "WorkCostDetail", "PropertyUnits", "PropertyUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkCostDetail_collapse" aria-expanded="true" aria-controls="WorkCostDetail_collapse" style="margin-left: 10px;">WorkCostDetail</a></legend>
                    <div id="WorkCostDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#isDebit}}<div><b>isDebit</b>: {{isDebit}}</div>{{/isDebit}}
                    {{#transactionDateTime}}<div><b>transactionDateTime</b>: {{transactionDateTime}}</div>{{/transactionDateTime}}
                    {{#LaborItems}}<div><b>LaborItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LaborItems}}
                    {{#CostType}}<div><b>CostType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CostType}}&quot;);})'>{{CostType}}</a></div>{{/CostType}}
                    {{#OverheadCost}}<div><b>OverheadCost</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OverheadCost}}&quot;);})'>{{OverheadCost}}</a></div>{{/OverheadCost}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkTask}}&quot;);})'>{{WorkTask}}</a></div>{{/WorkTask}}
                    {{#Design}}<div><b>Design</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Design}}&quot;);})'>{{Design}}</a></div>{{/Design}}
                    {{#ErpProjectAccounting}}<div><b>ErpProjectAccounting</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpProjectAccounting}}&quot;);})'>{{ErpProjectAccounting}}</a></div>{{/ErpProjectAccounting}}
                    {{#MiscCostItems}}<div><b>MiscCostItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MiscCostItems}}
                    {{#ContractorItems}}<div><b>ContractorItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ContractorItems}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Works}}
                    {{#WorkCostSummary}}<div><b>WorkCostSummary</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkCostSummary}}&quot;);})'>{{WorkCostSummary}}</a></div>{{/WorkCostSummary}}
                    {{#PropertyUnits}}<div><b>PropertyUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PropertyUnits}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.LaborItems) obj.LaborItems_string = obj.LaborItems.join ();
                if (obj.MiscCostItems) obj.MiscCostItems_string = obj.MiscCostItems.join ();
                if (obj.ContractorItems) obj.ContractorItems_string = obj.ContractorItems.join ();
                if (obj.Works) obj.Works_string = obj.Works.join ();
                if (obj.PropertyUnits) obj.PropertyUnits_string = obj.PropertyUnits.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.LaborItems_string;
                delete obj.MiscCostItems_string;
                delete obj.ContractorItems_string;
                delete obj.Works_string;
                delete obj.PropertyUnits_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkCostDetail_collapse" aria-expanded="true" aria-controls="WorkCostDetail_collapse" style="margin-left: 10px;">WorkCostDetail</a></legend>
                    <div id="WorkCostDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='amount'>amount: </label><div class='col-sm-8'><input id='amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isDebit'>isDebit: </label><div class='col-sm-8'><input id='isDebit' class='form-check-input' type='checkbox'{{#isDebit}} checked{{/isDebit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='transactionDateTime'>transactionDateTime: </label><div class='col-sm-8'><input id='transactionDateTime' class='form-control' type='text'{{#transactionDateTime}} value='{{transactionDateTime}}'{{/transactionDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CostType'>CostType: </label><div class='col-sm-8'><input id='CostType' class='form-control' type='text'{{#CostType}} value='{{CostType}}'{{/CostType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OverheadCost'>OverheadCost: </label><div class='col-sm-8'><input id='OverheadCost' class='form-control' type='text'{{#OverheadCost}} value='{{OverheadCost}}'{{/OverheadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Design'>Design: </label><div class='col-sm-8'><input id='Design' class='form-control' type='text'{{#Design}} value='{{Design}}'{{/Design}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpProjectAccounting'>ErpProjectAccounting: </label><div class='col-sm-8'><input id='ErpProjectAccounting' class='form-control' type='text'{{#ErpProjectAccounting}} value='{{ErpProjectAccounting}}'{{/ErpProjectAccounting}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Works'>Works: </label><div class='col-sm-8'><input id='Works' class='form-control' type='text'{{#Works}} value='{{Works}}_string'{{/Works}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkCostSummary'>WorkCostSummary: </label><div class='col-sm-8'><input id='WorkCostSummary' class='form-control' type='text'{{#WorkCostSummary}} value='{{WorkCostSummary}}'{{/WorkCostSummary}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PropertyUnits'>PropertyUnits: </label><div class='col-sm-8'><input id='PropertyUnits' class='form-control' type='text'{{#PropertyUnits}} value='{{PropertyUnits}}_string'{{/PropertyUnits}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "WorkCostDetail" };
                super.submit (obj);
                temp = document.getElementById ("amount").value; if ("" != temp) obj.amount = temp;
                temp = document.getElementById ("isDebit").checked; if (temp) obj.isDebit = true;
                temp = document.getElementById ("transactionDateTime").value; if ("" != temp) obj.transactionDateTime = temp;
                temp = document.getElementById ("CostType").value; if ("" != temp) obj.CostType = temp;
                temp = document.getElementById ("OverheadCost").value; if ("" != temp) obj.OverheadCost = temp;
                temp = document.getElementById ("WorkTask").value; if ("" != temp) obj.WorkTask = temp;
                temp = document.getElementById ("Design").value; if ("" != temp) obj.Design = temp;
                temp = document.getElementById ("ErpProjectAccounting").value; if ("" != temp) obj.ErpProjectAccounting = temp;
                temp = document.getElementById ("Works").value; if ("" != temp) obj.Works = temp.split (",");
                temp = document.getElementById ("WorkCostSummary").value; if ("" != temp) obj.WorkCostSummary = temp;
                temp = document.getElementById ("PropertyUnits").value; if ("" != temp) obj.PropertyUnits = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["LaborItems", "LaborItem", "0..*", "1"],
                        ["CostType", "CostType", "1", "0..*"],
                        ["OverheadCost", "OverheadCost", "0..1", "0..*"],
                        ["WorkTask", "OldWorkTask", "0..1", "0..*"],
                        ["Design", "Design", "0..1", "0..*"],
                        ["ErpProjectAccounting", "ErpProjectAccounting", "1", "0..*"],
                        ["MiscCostItems", "MiscCostItem", "0..*", "0..1"],
                        ["ContractorItems", "ContractorItem", "0..*", "1"],
                        ["Works", "Work", "0..*", "0..*"],
                        ["WorkCostSummary", "WorkCostSummary", "0..1", "0..1"],
                        ["PropertyUnits", "PropertyUnit", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * A pre-planned job model containing labor, material, and accounting requirements for standardized job planning.
         *
         */
        class CompatibleUnit extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CompatibleUnit;
                if (null == bucket)
                   cim_data.CompatibleUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CompatibleUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "CompatibleUnit";
                base.parse_element (/<cim:CompatibleUnit.estCost>([\s\S]*?)<\/cim:CompatibleUnit.estCost>/g, obj, "estCost", base.to_string, sub, context);
                base.parse_element (/<cim:CompatibleUnit.quantity>([\s\S]*?)<\/cim:CompatibleUnit.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.CUWorkEquipmentItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUWorkEquipmentItems", sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.CUAssets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUAssets", sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.DesignLocationCUs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocationCUs", sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.CUContractorItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUContractorItems", sub, context);
                base.parse_attribute (/<cim:CompatibleUnit.CUGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUGroup", sub, context);
                base.parse_attribute (/<cim:CompatibleUnit.PropertyUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PropertyUnit", sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.CULaborItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CULaborItems", sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.CUMaterialItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUMaterialItems", sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.Procedures\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Procedures", sub, context);
                base.parse_attribute (/<cim:CompatibleUnit.CostType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CostType", sub, context);
                base.parse_attribute (/<cim:CompatibleUnit.CUAllowableAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUAllowableAction", sub, context);
                var bucket = context.parsed.CompatibleUnit;
                if (null == bucket)
                   context.parsed.CompatibleUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "CompatibleUnit", "estCost", "estCost",  base.from_string, fields);
                base.export_element (obj, "CompatibleUnit", "quantity", "quantity",  base.from_string, fields);
                base.export_attributes (obj, "CompatibleUnit", "CUWorkEquipmentItems", "CUWorkEquipmentItems", fields);
                base.export_attributes (obj, "CompatibleUnit", "CUAssets", "CUAssets", fields);
                base.export_attributes (obj, "CompatibleUnit", "DesignLocationCUs", "DesignLocationCUs", fields);
                base.export_attributes (obj, "CompatibleUnit", "CUContractorItems", "CUContractorItems", fields);
                base.export_attribute (obj, "CompatibleUnit", "CUGroup", "CUGroup", fields);
                base.export_attribute (obj, "CompatibleUnit", "PropertyUnit", "PropertyUnit", fields);
                base.export_attributes (obj, "CompatibleUnit", "CULaborItems", "CULaborItems", fields);
                base.export_attributes (obj, "CompatibleUnit", "CUMaterialItems", "CUMaterialItems", fields);
                base.export_attributes (obj, "CompatibleUnit", "Procedures", "Procedures", fields);
                base.export_attribute (obj, "CompatibleUnit", "CostType", "CostType", fields);
                base.export_attribute (obj, "CompatibleUnit", "CUAllowableAction", "CUAllowableAction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CompatibleUnit_collapse" aria-expanded="true" aria-controls="CompatibleUnit_collapse" style="margin-left: 10px;">CompatibleUnit</a></legend>
                    <div id="CompatibleUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#estCost}}<div><b>estCost</b>: {{estCost}}</div>{{/estCost}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#CUWorkEquipmentItems}}<div><b>CUWorkEquipmentItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CUWorkEquipmentItems}}
                    {{#CUAssets}}<div><b>CUAssets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CUAssets}}
                    {{#DesignLocationCUs}}<div><b>DesignLocationCUs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DesignLocationCUs}}
                    {{#CUContractorItems}}<div><b>CUContractorItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CUContractorItems}}
                    {{#CUGroup}}<div><b>CUGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CUGroup}}&quot;);})'>{{CUGroup}}</a></div>{{/CUGroup}}
                    {{#PropertyUnit}}<div><b>PropertyUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PropertyUnit}}&quot;);})'>{{PropertyUnit}}</a></div>{{/PropertyUnit}}
                    {{#CULaborItems}}<div><b>CULaborItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CULaborItems}}
                    {{#CUMaterialItems}}<div><b>CUMaterialItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CUMaterialItems}}
                    {{#Procedures}}<div><b>Procedures</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Procedures}}
                    {{#CostType}}<div><b>CostType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CostType}}&quot;);})'>{{CostType}}</a></div>{{/CostType}}
                    {{#CUAllowableAction}}<div><b>CUAllowableAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CUAllowableAction}}&quot;);})'>{{CUAllowableAction}}</a></div>{{/CUAllowableAction}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CUWorkEquipmentItems) obj.CUWorkEquipmentItems_string = obj.CUWorkEquipmentItems.join ();
                if (obj.CUAssets) obj.CUAssets_string = obj.CUAssets.join ();
                if (obj.DesignLocationCUs) obj.DesignLocationCUs_string = obj.DesignLocationCUs.join ();
                if (obj.CUContractorItems) obj.CUContractorItems_string = obj.CUContractorItems.join ();
                if (obj.CULaborItems) obj.CULaborItems_string = obj.CULaborItems.join ();
                if (obj.CUMaterialItems) obj.CUMaterialItems_string = obj.CUMaterialItems.join ();
                if (obj.Procedures) obj.Procedures_string = obj.Procedures.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CUWorkEquipmentItems_string;
                delete obj.CUAssets_string;
                delete obj.DesignLocationCUs_string;
                delete obj.CUContractorItems_string;
                delete obj.CULaborItems_string;
                delete obj.CUMaterialItems_string;
                delete obj.Procedures_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CompatibleUnit_collapse" aria-expanded="true" aria-controls="CompatibleUnit_collapse" style="margin-left: 10px;">CompatibleUnit</a></legend>
                    <div id="CompatibleUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='estCost'>estCost: </label><div class='col-sm-8'><input id='estCost' class='form-control' type='text'{{#estCost}} value='{{estCost}}'{{/estCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quantity'>quantity: </label><div class='col-sm-8'><input id='quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CUWorkEquipmentItems'>CUWorkEquipmentItems: </label><div class='col-sm-8'><input id='CUWorkEquipmentItems' class='form-control' type='text'{{#CUWorkEquipmentItems}} value='{{CUWorkEquipmentItems}}_string'{{/CUWorkEquipmentItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CUAssets'>CUAssets: </label><div class='col-sm-8'><input id='CUAssets' class='form-control' type='text'{{#CUAssets}} value='{{CUAssets}}_string'{{/CUAssets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DesignLocationCUs'>DesignLocationCUs: </label><div class='col-sm-8'><input id='DesignLocationCUs' class='form-control' type='text'{{#DesignLocationCUs}} value='{{DesignLocationCUs}}_string'{{/DesignLocationCUs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CUContractorItems'>CUContractorItems: </label><div class='col-sm-8'><input id='CUContractorItems' class='form-control' type='text'{{#CUContractorItems}} value='{{CUContractorItems}}_string'{{/CUContractorItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CUGroup'>CUGroup: </label><div class='col-sm-8'><input id='CUGroup' class='form-control' type='text'{{#CUGroup}} value='{{CUGroup}}'{{/CUGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PropertyUnit'>PropertyUnit: </label><div class='col-sm-8'><input id='PropertyUnit' class='form-control' type='text'{{#PropertyUnit}} value='{{PropertyUnit}}'{{/PropertyUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CULaborItems'>CULaborItems: </label><div class='col-sm-8'><input id='CULaborItems' class='form-control' type='text'{{#CULaborItems}} value='{{CULaborItems}}_string'{{/CULaborItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CUMaterialItems'>CUMaterialItems: </label><div class='col-sm-8'><input id='CUMaterialItems' class='form-control' type='text'{{#CUMaterialItems}} value='{{CUMaterialItems}}_string'{{/CUMaterialItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Procedures'>Procedures: </label><div class='col-sm-8'><input id='Procedures' class='form-control' type='text'{{#Procedures}} value='{{Procedures}}_string'{{/Procedures}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CostType'>CostType: </label><div class='col-sm-8'><input id='CostType' class='form-control' type='text'{{#CostType}} value='{{CostType}}'{{/CostType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CUAllowableAction'>CUAllowableAction: </label><div class='col-sm-8'><input id='CUAllowableAction' class='form-control' type='text'{{#CUAllowableAction}} value='{{CUAllowableAction}}'{{/CUAllowableAction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CompatibleUnit" };
                super.submit (obj);
                temp = document.getElementById ("estCost").value; if ("" != temp) obj.estCost = temp;
                temp = document.getElementById ("quantity").value; if ("" != temp) obj.quantity = temp;
                temp = document.getElementById ("CUWorkEquipmentItems").value; if ("" != temp) obj.CUWorkEquipmentItems = temp.split (",");
                temp = document.getElementById ("CUAssets").value; if ("" != temp) obj.CUAssets = temp.split (",");
                temp = document.getElementById ("DesignLocationCUs").value; if ("" != temp) obj.DesignLocationCUs = temp.split (",");
                temp = document.getElementById ("CUContractorItems").value; if ("" != temp) obj.CUContractorItems = temp.split (",");
                temp = document.getElementById ("CUGroup").value; if ("" != temp) obj.CUGroup = temp;
                temp = document.getElementById ("PropertyUnit").value; if ("" != temp) obj.PropertyUnit = temp;
                temp = document.getElementById ("CULaborItems").value; if ("" != temp) obj.CULaborItems = temp.split (",");
                temp = document.getElementById ("CUMaterialItems").value; if ("" != temp) obj.CUMaterialItems = temp.split (",");
                temp = document.getElementById ("Procedures").value; if ("" != temp) obj.Procedures = temp.split (",");
                temp = document.getElementById ("CostType").value; if ("" != temp) obj.CostType = temp;
                temp = document.getElementById ("CUAllowableAction").value; if ("" != temp) obj.CUAllowableAction = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CUWorkEquipmentItems", "CUWorkEquipmentItem", "0..*", "0..*"],
                        ["CUAssets", "CUAsset", "0..*", "0..*"],
                        ["DesignLocationCUs", "DesignLocationCU", "0..*", "0..*"],
                        ["CUContractorItems", "CUContractorItem", "0..*", "0..*"],
                        ["CUGroup", "CUGroup", "0..1", "0..*"],
                        ["PropertyUnit", "PropertyUnit", "0..1", "0..*"],
                        ["CULaborItems", "CULaborItem", "0..*", "0..*"],
                        ["CUMaterialItems", "CUMaterialItem", "0..*", "0..*"],
                        ["Procedures", "Procedure", "0..*", "0..*"],
                        ["CostType", "CostType", "0..1", "0..*"],
                        ["CUAllowableAction", "CUAllowableAction", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Questions and answers associated with a type of document for purposes of clarification.
         *
         * Questions may be predefined or ad hoc.
         *
         */
        class InfoQuestion extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InfoQuestion;
                if (null == bucket)
                   cim_data.InfoQuestion = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InfoQuestion[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "InfoQuestion";
                base.parse_element (/<cim:InfoQuestion.answer>([\s\S]*?)<\/cim:InfoQuestion.answer>/g, obj, "answer", base.to_string, sub, context);
                base.parse_element (/<cim:InfoQuestion.answerDateTime>([\s\S]*?)<\/cim:InfoQuestion.answerDateTime>/g, obj, "answerDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:InfoQuestion.answerRemark>([\s\S]*?)<\/cim:InfoQuestion.answerRemark>/g, obj, "answerRemark", base.to_string, sub, context);
                base.parse_element (/<cim:InfoQuestion.questionCode>([\s\S]*?)<\/cim:InfoQuestion.questionCode>/g, obj, "questionCode", base.to_string, sub, context);
                base.parse_element (/<cim:InfoQuestion.questionRemark>([\s\S]*?)<\/cim:InfoQuestion.questionRemark>/g, obj, "questionRemark", base.to_string, sub, context);
                base.parse_element (/<cim:InfoQuestion.questionText>([\s\S]*?)<\/cim:InfoQuestion.questionText>/g, obj, "questionText", base.to_string, sub, context);
                base.parse_element (/<cim:InfoQuestion.questionType>([\s\S]*?)<\/cim:InfoQuestion.questionType>/g, obj, "questionType", base.to_string, sub, context);
                var bucket = context.parsed.InfoQuestion;
                if (null == bucket)
                   context.parsed.InfoQuestion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "InfoQuestion", "answer", "answer",  base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "answerDateTime", "answerDateTime",  base.from_datetime, fields);
                base.export_element (obj, "InfoQuestion", "answerRemark", "answerRemark",  base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "questionCode", "questionCode",  base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "questionRemark", "questionRemark",  base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "questionText", "questionText",  base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "questionType", "questionType",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InfoQuestion_collapse" aria-expanded="true" aria-controls="InfoQuestion_collapse" style="margin-left: 10px;">InfoQuestion</a></legend>
                    <div id="InfoQuestion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#answer}}<div><b>answer</b>: {{answer}}</div>{{/answer}}
                    {{#answerDateTime}}<div><b>answerDateTime</b>: {{answerDateTime}}</div>{{/answerDateTime}}
                    {{#answerRemark}}<div><b>answerRemark</b>: {{answerRemark}}</div>{{/answerRemark}}
                    {{#questionCode}}<div><b>questionCode</b>: {{questionCode}}</div>{{/questionCode}}
                    {{#questionRemark}}<div><b>questionRemark</b>: {{questionRemark}}</div>{{/questionRemark}}
                    {{#questionText}}<div><b>questionText</b>: {{questionText}}</div>{{/questionText}}
                    {{#questionType}}<div><b>questionType</b>: {{questionType}}</div>{{/questionType}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InfoQuestion_collapse" aria-expanded="true" aria-controls="InfoQuestion_collapse" style="margin-left: 10px;">InfoQuestion</a></legend>
                    <div id="InfoQuestion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='answer'>answer: </label><div class='col-sm-8'><input id='answer' class='form-control' type='text'{{#answer}} value='{{answer}}'{{/answer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='answerDateTime'>answerDateTime: </label><div class='col-sm-8'><input id='answerDateTime' class='form-control' type='text'{{#answerDateTime}} value='{{answerDateTime}}'{{/answerDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='answerRemark'>answerRemark: </label><div class='col-sm-8'><input id='answerRemark' class='form-control' type='text'{{#answerRemark}} value='{{answerRemark}}'{{/answerRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='questionCode'>questionCode: </label><div class='col-sm-8'><input id='questionCode' class='form-control' type='text'{{#questionCode}} value='{{questionCode}}'{{/questionCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='questionRemark'>questionRemark: </label><div class='col-sm-8'><input id='questionRemark' class='form-control' type='text'{{#questionRemark}} value='{{questionRemark}}'{{/questionRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='questionText'>questionText: </label><div class='col-sm-8'><input id='questionText' class='form-control' type='text'{{#questionText}} value='{{questionText}}'{{/questionText}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='questionType'>questionType: </label><div class='col-sm-8'><input id='questionType' class='form-control' type='text'{{#questionType}} value='{{questionType}}'{{/questionType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "InfoQuestion" };
                super.submit (obj);
                temp = document.getElementById ("answer").value; if ("" != temp) obj.answer = temp;
                temp = document.getElementById ("answerDateTime").value; if ("" != temp) obj.answerDateTime = temp;
                temp = document.getElementById ("answerRemark").value; if ("" != temp) obj.answerRemark = temp;
                temp = document.getElementById ("questionCode").value; if ("" != temp) obj.questionCode = temp;
                temp = document.getElementById ("questionRemark").value; if ("" != temp) obj.questionRemark = temp;
                temp = document.getElementById ("questionText").value; if ("" != temp) obj.questionText = temp;
                temp = document.getElementById ("questionType").value; if ("" != temp) obj.questionType = temp;

                return (obj);
            }
        }

        /**
         * Documentation for a generic material item that may be used for design, work and other purposes.
         *
         * Any number of MaterialItems manufactured by various vendors may be used to perform this TypeMaterial.
         *
         */
        class TypeMaterial extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TypeMaterial;
                if (null == bucket)
                   cim_data.TypeMaterial = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TypeMaterial[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "TypeMaterial";
                base.parse_element (/<cim:TypeMaterial.costType>([\s\S]*?)<\/cim:TypeMaterial.costType>/g, obj, "costType", base.to_string, sub, context);
                base.parse_element (/<cim:TypeMaterial.estUnitCost>([\s\S]*?)<\/cim:TypeMaterial.estUnitCost>/g, obj, "estUnitCost", base.to_string, sub, context);
                base.parse_element (/<cim:TypeMaterial.quantity>([\s\S]*?)<\/cim:TypeMaterial.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:TypeMaterial.stockItem>([\s\S]*?)<\/cim:TypeMaterial.stockItem>/g, obj, "stockItem", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:TypeMaterial.ErpIssueInventories\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpIssueInventories", sub, context);
                base.parse_attributes (/<cim:TypeMaterial.ErpReqLineItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpReqLineItems", sub, context);
                base.parse_attributes (/<cim:TypeMaterial.CUMaterialItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUMaterialItems", sub, context);
                base.parse_attributes (/<cim:TypeMaterial.MaterialItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MaterialItems", sub, context);
                var bucket = context.parsed.TypeMaterial;
                if (null == bucket)
                   context.parsed.TypeMaterial = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "TypeMaterial", "costType", "costType",  base.from_string, fields);
                base.export_element (obj, "TypeMaterial", "estUnitCost", "estUnitCost",  base.from_string, fields);
                base.export_element (obj, "TypeMaterial", "quantity", "quantity",  base.from_string, fields);
                base.export_element (obj, "TypeMaterial", "stockItem", "stockItem",  base.from_boolean, fields);
                base.export_attributes (obj, "TypeMaterial", "ErpIssueInventories", "ErpIssueInventories", fields);
                base.export_attributes (obj, "TypeMaterial", "ErpReqLineItems", "ErpReqLineItems", fields);
                base.export_attributes (obj, "TypeMaterial", "CUMaterialItems", "CUMaterialItems", fields);
                base.export_attributes (obj, "TypeMaterial", "MaterialItems", "MaterialItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TypeMaterial_collapse" aria-expanded="true" aria-controls="TypeMaterial_collapse" style="margin-left: 10px;">TypeMaterial</a></legend>
                    <div id="TypeMaterial_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#costType}}<div><b>costType</b>: {{costType}}</div>{{/costType}}
                    {{#estUnitCost}}<div><b>estUnitCost</b>: {{estUnitCost}}</div>{{/estUnitCost}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#stockItem}}<div><b>stockItem</b>: {{stockItem}}</div>{{/stockItem}}
                    {{#ErpIssueInventories}}<div><b>ErpIssueInventories</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpIssueInventories}}
                    {{#ErpReqLineItems}}<div><b>ErpReqLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpReqLineItems}}
                    {{#CUMaterialItems}}<div><b>CUMaterialItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CUMaterialItems}}
                    {{#MaterialItems}}<div><b>MaterialItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MaterialItems}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ErpIssueInventories) obj.ErpIssueInventories_string = obj.ErpIssueInventories.join ();
                if (obj.ErpReqLineItems) obj.ErpReqLineItems_string = obj.ErpReqLineItems.join ();
                if (obj.CUMaterialItems) obj.CUMaterialItems_string = obj.CUMaterialItems.join ();
                if (obj.MaterialItems) obj.MaterialItems_string = obj.MaterialItems.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ErpIssueInventories_string;
                delete obj.ErpReqLineItems_string;
                delete obj.CUMaterialItems_string;
                delete obj.MaterialItems_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TypeMaterial_collapse" aria-expanded="true" aria-controls="TypeMaterial_collapse" style="margin-left: 10px;">TypeMaterial</a></legend>
                    <div id="TypeMaterial_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='costType'>costType: </label><div class='col-sm-8'><input id='costType' class='form-control' type='text'{{#costType}} value='{{costType}}'{{/costType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='estUnitCost'>estUnitCost: </label><div class='col-sm-8'><input id='estUnitCost' class='form-control' type='text'{{#estUnitCost}} value='{{estUnitCost}}'{{/estUnitCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quantity'>quantity: </label><div class='col-sm-8'><input id='quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='stockItem'>stockItem: </label><div class='col-sm-8'><input id='stockItem' class='form-check-input' type='checkbox'{{#stockItem}} checked{{/stockItem}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TypeMaterial" };
                super.submit (obj);
                temp = document.getElementById ("costType").value; if ("" != temp) obj.costType = temp;
                temp = document.getElementById ("estUnitCost").value; if ("" != temp) obj.estUnitCost = temp;
                temp = document.getElementById ("quantity").value; if ("" != temp) obj.quantity = temp;
                temp = document.getElementById ("stockItem").checked; if (temp) obj.stockItem = true;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ErpIssueInventories", "ErpIssueInventory", "0..*", "0..1"],
                        ["ErpReqLineItems", "ErpReqLineItem", "0..*", "0..1"],
                        ["CUMaterialItems", "CUMaterialItem", "0..*", "0..1"],
                        ["MaterialItems", "MaterialItem", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * This document provides information for non-standard items like customer contributions (e.g., customer digs trench), vouchers (e.g., credit), and contractor bids.
         *
         */
        class NonStandardItem extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NonStandardItem;
                if (null == bucket)
                   cim_data.NonStandardItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NonStandardItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "NonStandardItem";
                base.parse_element (/<cim:NonStandardItem.amount>([\s\S]*?)<\/cim:NonStandardItem.amount>/g, obj, "amount", base.to_string, sub, context);
                var bucket = context.parsed.NonStandardItem;
                if (null == bucket)
                   context.parsed.NonStandardItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "NonStandardItem", "amount", "amount",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NonStandardItem_collapse" aria-expanded="true" aria-controls="NonStandardItem_collapse" style="margin-left: 10px;">NonStandardItem</a></legend>
                    <div id="NonStandardItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NonStandardItem_collapse" aria-expanded="true" aria-controls="NonStandardItem_collapse" style="margin-left: 10px;">NonStandardItem</a></legend>
                    <div id="NonStandardItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='amount'>amount: </label><div class='col-sm-8'><input id='amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "NonStandardItem" };
                super.submit (obj);
                temp = document.getElementById ("amount").value; if ("" != temp) obj.amount = temp;

                return (obj);
            }
        }

        /**
         * A permit is sometimes needed to provide legal access to land or equipment.
         *
         * For example, local authority permission for road works.
         *
         */
        class AccessPermit extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AccessPermit;
                if (null == bucket)
                   cim_data.AccessPermit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AccessPermit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "AccessPermit";
                base.parse_element (/<cim:AccessPermit.applicationNumber>([\s\S]*?)<\/cim:AccessPermit.applicationNumber>/g, obj, "applicationNumber", base.to_string, sub, context);
                base.parse_element (/<cim:AccessPermit.effectiveDate>([\s\S]*?)<\/cim:AccessPermit.effectiveDate>/g, obj, "effectiveDate", base.to_string, sub, context);
                base.parse_element (/<cim:AccessPermit.expirationDate>([\s\S]*?)<\/cim:AccessPermit.expirationDate>/g, obj, "expirationDate", base.to_string, sub, context);
                base.parse_element (/<cim:AccessPermit.payment>([\s\S]*?)<\/cim:AccessPermit.payment>/g, obj, "payment", base.to_string, sub, context);
                base.parse_element (/<cim:AccessPermit.permitID>([\s\S]*?)<\/cim:AccessPermit.permitID>/g, obj, "permitID", base.to_string, sub, context);
                var bucket = context.parsed.AccessPermit;
                if (null == bucket)
                   context.parsed.AccessPermit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "AccessPermit", "applicationNumber", "applicationNumber",  base.from_string, fields);
                base.export_element (obj, "AccessPermit", "effectiveDate", "effectiveDate",  base.from_string, fields);
                base.export_element (obj, "AccessPermit", "expirationDate", "expirationDate",  base.from_string, fields);
                base.export_element (obj, "AccessPermit", "payment", "payment",  base.from_string, fields);
                base.export_element (obj, "AccessPermit", "permitID", "permitID",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AccessPermit_collapse" aria-expanded="true" aria-controls="AccessPermit_collapse" style="margin-left: 10px;">AccessPermit</a></legend>
                    <div id="AccessPermit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#applicationNumber}}<div><b>applicationNumber</b>: {{applicationNumber}}</div>{{/applicationNumber}}
                    {{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
                    {{#expirationDate}}<div><b>expirationDate</b>: {{expirationDate}}</div>{{/expirationDate}}
                    {{#payment}}<div><b>payment</b>: {{payment}}</div>{{/payment}}
                    {{#permitID}}<div><b>permitID</b>: {{permitID}}</div>{{/permitID}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AccessPermit_collapse" aria-expanded="true" aria-controls="AccessPermit_collapse" style="margin-left: 10px;">AccessPermit</a></legend>
                    <div id="AccessPermit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='applicationNumber'>applicationNumber: </label><div class='col-sm-8'><input id='applicationNumber' class='form-control' type='text'{{#applicationNumber}} value='{{applicationNumber}}'{{/applicationNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='expirationDate'>expirationDate: </label><div class='col-sm-8'><input id='expirationDate' class='form-control' type='text'{{#expirationDate}} value='{{expirationDate}}'{{/expirationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='payment'>payment: </label><div class='col-sm-8'><input id='payment' class='form-control' type='text'{{#payment}} value='{{payment}}'{{/payment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='permitID'>permitID: </label><div class='col-sm-8'><input id='permitID' class='form-control' type='text'{{#permitID}} value='{{permitID}}'{{/permitID}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "AccessPermit" };
                super.submit (obj);
                temp = document.getElementById ("applicationNumber").value; if ("" != temp) obj.applicationNumber = temp;
                temp = document.getElementById ("effectiveDate").value; if ("" != temp) obj.effectiveDate = temp;
                temp = document.getElementById ("expirationDate").value; if ("" != temp) obj.expirationDate = temp;
                temp = document.getElementById ("payment").value; if ("" != temp) obj.payment = temp;
                temp = document.getElementById ("permitID").value; if ("" != temp) obj.permitID = temp;

                return (obj);
            }
        }

        /**
         * A request for other utilities to mark their underground facilities prior to commencement of construction and/or maintenance.
         *
         */
        class OneCallRequest extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OneCallRequest;
                if (null == bucket)
                   cim_data.OneCallRequest = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OneCallRequest[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "OneCallRequest";
                base.parse_element (/<cim:OneCallRequest.explosivesUsed>([\s\S]*?)<\/cim:OneCallRequest.explosivesUsed>/g, obj, "explosivesUsed", base.to_boolean, sub, context);
                base.parse_element (/<cim:OneCallRequest.markedIndicator>([\s\S]*?)<\/cim:OneCallRequest.markedIndicator>/g, obj, "markedIndicator", base.to_boolean, sub, context);
                base.parse_element (/<cim:OneCallRequest.markingInstruction>([\s\S]*?)<\/cim:OneCallRequest.markingInstruction>/g, obj, "markingInstruction", base.to_string, sub, context);
                base.parse_attributes (/<cim:OneCallRequest.WorkLocations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkLocations", sub, context);
                var bucket = context.parsed.OneCallRequest;
                if (null == bucket)
                   context.parsed.OneCallRequest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "OneCallRequest", "explosivesUsed", "explosivesUsed",  base.from_boolean, fields);
                base.export_element (obj, "OneCallRequest", "markedIndicator", "markedIndicator",  base.from_boolean, fields);
                base.export_element (obj, "OneCallRequest", "markingInstruction", "markingInstruction",  base.from_string, fields);
                base.export_attributes (obj, "OneCallRequest", "WorkLocations", "WorkLocations", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OneCallRequest_collapse" aria-expanded="true" aria-controls="OneCallRequest_collapse" style="margin-left: 10px;">OneCallRequest</a></legend>
                    <div id="OneCallRequest_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#explosivesUsed}}<div><b>explosivesUsed</b>: {{explosivesUsed}}</div>{{/explosivesUsed}}
                    {{#markedIndicator}}<div><b>markedIndicator</b>: {{markedIndicator}}</div>{{/markedIndicator}}
                    {{#markingInstruction}}<div><b>markingInstruction</b>: {{markingInstruction}}</div>{{/markingInstruction}}
                    {{#WorkLocations}}<div><b>WorkLocations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkLocations}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WorkLocations) obj.WorkLocations_string = obj.WorkLocations.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkLocations_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OneCallRequest_collapse" aria-expanded="true" aria-controls="OneCallRequest_collapse" style="margin-left: 10px;">OneCallRequest</a></legend>
                    <div id="OneCallRequest_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='explosivesUsed'>explosivesUsed: </label><div class='col-sm-8'><input id='explosivesUsed' class='form-check-input' type='checkbox'{{#explosivesUsed}} checked{{/explosivesUsed}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='markedIndicator'>markedIndicator: </label><div class='col-sm-8'><input id='markedIndicator' class='form-check-input' type='checkbox'{{#markedIndicator}} checked{{/markedIndicator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='markingInstruction'>markingInstruction: </label><div class='col-sm-8'><input id='markingInstruction' class='form-control' type='text'{{#markingInstruction}} value='{{markingInstruction}}'{{/markingInstruction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "OneCallRequest" };
                super.submit (obj);
                temp = document.getElementById ("explosivesUsed").checked; if (temp) obj.explosivesUsed = true;
                temp = document.getElementById ("markedIndicator").checked; if (temp) obj.markedIndicator = true;
                temp = document.getElementById ("markingInstruction").value; if ("" != temp) obj.markingInstruction = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["WorkLocations", "WorkLocation", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * A design for consideration by customers, potential customers, or internal work.
         *
         * Note that the Version of design is the revision attribute that is inherited from Document.
         *
         */
        class Design extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Design;
                if (null == bucket)
                   cim_data.Design = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Design[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "Design";
                base.parse_element (/<cim:Design.costEstimate>([\s\S]*?)<\/cim:Design.costEstimate>/g, obj, "costEstimate", base.to_string, sub, context);
                base.parse_attribute (/<cim:Design.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Design.price>([\s\S]*?)<\/cim:Design.price>/g, obj, "price", base.to_string, sub, context);
                base.parse_attribute (/<cim:Design.Work\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Work", sub, context);
                base.parse_attribute (/<cim:Design.ErpQuoteLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuoteLineItem", sub, context);
                base.parse_attributes (/<cim:Design.WorkTasks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attributes (/<cim:Design.ErpBOMs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpBOMs", sub, context);
                base.parse_attributes (/<cim:Design.WorkCostDetails\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                base.parse_attributes (/<cim:Design.ConditionFactors\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConditionFactors", sub, context);
                base.parse_attributes (/<cim:Design.DesignLocations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocations", sub, context);
                base.parse_attributes (/<cim:Design.DesignLocationsCUs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocationsCUs", sub, context);
                var bucket = context.parsed.Design;
                if (null == bucket)
                   context.parsed.Design = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "Design", "costEstimate", "costEstimate",  base.from_string, fields);
                base.export_element (obj, "Design", "kind", "kind",  base.from_string, fields);
                base.export_element (obj, "Design", "price", "price",  base.from_string, fields);
                base.export_attribute (obj, "Design", "Work", "Work", fields);
                base.export_attribute (obj, "Design", "ErpQuoteLineItem", "ErpQuoteLineItem", fields);
                base.export_attributes (obj, "Design", "WorkTasks", "WorkTasks", fields);
                base.export_attributes (obj, "Design", "ErpBOMs", "ErpBOMs", fields);
                base.export_attributes (obj, "Design", "WorkCostDetails", "WorkCostDetails", fields);
                base.export_attributes (obj, "Design", "ConditionFactors", "ConditionFactors", fields);
                base.export_attributes (obj, "Design", "DesignLocations", "DesignLocations", fields);
                base.export_attributes (obj, "Design", "DesignLocationsCUs", "DesignLocationsCUs", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Design_collapse" aria-expanded="true" aria-controls="Design_collapse" style="margin-left: 10px;">Design</a></legend>
                    <div id="Design_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#costEstimate}}<div><b>costEstimate</b>: {{costEstimate}}</div>{{/costEstimate}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#price}}<div><b>price</b>: {{price}}</div>{{/price}}
                    {{#Work}}<div><b>Work</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Work}}&quot;);})'>{{Work}}</a></div>{{/Work}}
                    {{#ErpQuoteLineItem}}<div><b>ErpQuoteLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpQuoteLineItem}}&quot;);})'>{{ErpQuoteLineItem}}</a></div>{{/ErpQuoteLineItem}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkTasks}}
                    {{#ErpBOMs}}<div><b>ErpBOMs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpBOMs}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkCostDetails}}
                    {{#ConditionFactors}}<div><b>ConditionFactors</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConditionFactors}}
                    {{#DesignLocations}}<div><b>DesignLocations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DesignLocations}}
                    {{#DesignLocationsCUs}}<div><b>DesignLocationsCUs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DesignLocationsCUs}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.DesignKind = []; if (!obj.kind) obj.DesignKind.push ({ id: '', selected: true}); for (var property in DesignKind) obj.DesignKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.WorkTasks) obj.WorkTasks_string = obj.WorkTasks.join ();
                if (obj.ErpBOMs) obj.ErpBOMs_string = obj.ErpBOMs.join ();
                if (obj.WorkCostDetails) obj.WorkCostDetails_string = obj.WorkCostDetails.join ();
                if (obj.ConditionFactors) obj.ConditionFactors_string = obj.ConditionFactors.join ();
                if (obj.DesignLocations) obj.DesignLocations_string = obj.DesignLocations.join ();
                if (obj.DesignLocationsCUs) obj.DesignLocationsCUs_string = obj.DesignLocationsCUs.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DesignKind;
                delete obj.WorkTasks_string;
                delete obj.ErpBOMs_string;
                delete obj.WorkCostDetails_string;
                delete obj.ConditionFactors_string;
                delete obj.DesignLocations_string;
                delete obj.DesignLocationsCUs_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Design_collapse" aria-expanded="true" aria-controls="Design_collapse" style="margin-left: 10px;">Design</a></legend>
                    <div id="Design_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='costEstimate'>costEstimate: </label><div class='col-sm-8'><input id='costEstimate' class='form-control' type='text'{{#costEstimate}} value='{{costEstimate}}'{{/costEstimate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#DesignKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/DesignKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='price'>price: </label><div class='col-sm-8'><input id='price' class='form-control' type='text'{{#price}} value='{{price}}'{{/price}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Work'>Work: </label><div class='col-sm-8'><input id='Work' class='form-control' type='text'{{#Work}} value='{{Work}}'{{/Work}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpQuoteLineItem'>ErpQuoteLineItem: </label><div class='col-sm-8'><input id='ErpQuoteLineItem' class='form-control' type='text'{{#ErpQuoteLineItem}} value='{{ErpQuoteLineItem}}'{{/ErpQuoteLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConditionFactors'>ConditionFactors: </label><div class='col-sm-8'><input id='ConditionFactors' class='form-control' type='text'{{#ConditionFactors}} value='{{ConditionFactors}}_string'{{/ConditionFactors}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DesignLocations'>DesignLocations: </label><div class='col-sm-8'><input id='DesignLocations' class='form-control' type='text'{{#DesignLocations}} value='{{DesignLocations}}_string'{{/DesignLocations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DesignLocationsCUs'>DesignLocationsCUs: </label><div class='col-sm-8'><input id='DesignLocationsCUs' class='form-control' type='text'{{#DesignLocationsCUs}} value='{{DesignLocationsCUs}}_string'{{/DesignLocationsCUs}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Design" };
                super.submit (obj);
                temp = document.getElementById ("costEstimate").value; if ("" != temp) obj.costEstimate = temp;
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = DesignKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#DesignKind." + temp; }
                temp = document.getElementById ("price").value; if ("" != temp) obj.price = temp;
                temp = document.getElementById ("Work").value; if ("" != temp) obj.Work = temp;
                temp = document.getElementById ("ErpQuoteLineItem").value; if ("" != temp) obj.ErpQuoteLineItem = temp;
                temp = document.getElementById ("ConditionFactors").value; if ("" != temp) obj.ConditionFactors = temp.split (",");
                temp = document.getElementById ("DesignLocations").value; if ("" != temp) obj.DesignLocations = temp.split (",");
                temp = document.getElementById ("DesignLocationsCUs").value; if ("" != temp) obj.DesignLocationsCUs = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Work", "Work", "0..1", "0..*"],
                        ["ErpQuoteLineItem", "ErpQuoteLineItem", "0..1", "0..1"],
                        ["WorkTasks", "OldWorkTask", "0..*", "0..1"],
                        ["ErpBOMs", "ErpBOM", "0..*", "0..1"],
                        ["WorkCostDetails", "WorkCostDetail", "0..*", "0..1"],
                        ["ConditionFactors", "ConditionFactor", "0..*", "0..*"],
                        ["DesignLocations", "DesignLocation", "0..*", "1..*"],
                        ["DesignLocationsCUs", "DesignLocationCU", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Labor used for work order.
         *
         */
        class LaborItem extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LaborItem;
                if (null == bucket)
                   cim_data.LaborItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LaborItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LaborItem";
                base.parse_element (/<cim:LaborItem.activityCode>([\s\S]*?)<\/cim:LaborItem.activityCode>/g, obj, "activityCode", base.to_string, sub, context);
                base.parse_element (/<cim:LaborItem.cost>([\s\S]*?)<\/cim:LaborItem.cost>/g, obj, "cost", base.to_string, sub, context);
                base.parse_element (/<cim:LaborItem.laborDuration>([\s\S]*?)<\/cim:LaborItem.laborDuration>/g, obj, "laborDuration", base.to_string, sub, context);
                base.parse_element (/<cim:LaborItem.laborRate>([\s\S]*?)<\/cim:LaborItem.laborRate>/g, obj, "laborRate", base.to_string, sub, context);
                base.parse_element (/<cim:LaborItem.status>([\s\S]*?)<\/cim:LaborItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:LaborItem.WorkCostDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context);
                base.parse_attribute (/<cim:LaborItem.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                base.parse_attributes (/<cim:LaborItem.ErpPersons\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersons", sub, context);
                var bucket = context.parsed.LaborItem;
                if (null == bucket)
                   context.parsed.LaborItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "LaborItem", "activityCode", "activityCode",  base.from_string, fields);
                base.export_element (obj, "LaborItem", "cost", "cost",  base.from_string, fields);
                base.export_element (obj, "LaborItem", "laborDuration", "laborDuration",  base.from_string, fields);
                base.export_element (obj, "LaborItem", "laborRate", "laborRate",  base.from_string, fields);
                base.export_element (obj, "LaborItem", "status", "status",  base.from_string, fields);
                base.export_attribute (obj, "LaborItem", "WorkCostDetail", "WorkCostDetail", fields);
                base.export_attribute (obj, "LaborItem", "WorkTask", "WorkTask", fields);
                base.export_attributes (obj, "LaborItem", "ErpPersons", "ErpPersons", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LaborItem_collapse" aria-expanded="true" aria-controls="LaborItem_collapse" style="margin-left: 10px;">LaborItem</a></legend>
                    <div id="LaborItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#activityCode}}<div><b>activityCode</b>: {{activityCode}}</div>{{/activityCode}}
                    {{#cost}}<div><b>cost</b>: {{cost}}</div>{{/cost}}
                    {{#laborDuration}}<div><b>laborDuration</b>: {{laborDuration}}</div>{{/laborDuration}}
                    {{#laborRate}}<div><b>laborRate</b>: {{laborRate}}</div>{{/laborRate}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#WorkCostDetail}}<div><b>WorkCostDetail</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkCostDetail}}&quot;);})'>{{WorkCostDetail}}</a></div>{{/WorkCostDetail}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkTask}}&quot;);})'>{{WorkTask}}</a></div>{{/WorkTask}}
                    {{#ErpPersons}}<div><b>ErpPersons</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpPersons}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ErpPersons) obj.ErpPersons_string = obj.ErpPersons.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ErpPersons_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LaborItem_collapse" aria-expanded="true" aria-controls="LaborItem_collapse" style="margin-left: 10px;">LaborItem</a></legend>
                    <div id="LaborItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='activityCode'>activityCode: </label><div class='col-sm-8'><input id='activityCode' class='form-control' type='text'{{#activityCode}} value='{{activityCode}}'{{/activityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cost'>cost: </label><div class='col-sm-8'><input id='cost' class='form-control' type='text'{{#cost}} value='{{cost}}'{{/cost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='laborDuration'>laborDuration: </label><div class='col-sm-8'><input id='laborDuration' class='form-control' type='text'{{#laborDuration}} value='{{laborDuration}}'{{/laborDuration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='laborRate'>laborRate: </label><div class='col-sm-8'><input id='laborRate' class='form-control' type='text'{{#laborRate}} value='{{laborRate}}'{{/laborRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkCostDetail'>WorkCostDetail: </label><div class='col-sm-8'><input id='WorkCostDetail' class='form-control' type='text'{{#WorkCostDetail}} value='{{WorkCostDetail}}'{{/WorkCostDetail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpPersons'>ErpPersons: </label><div class='col-sm-8'><input id='ErpPersons' class='form-control' type='text'{{#ErpPersons}} value='{{ErpPersons}}_string'{{/ErpPersons}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "LaborItem" };
                super.submit (obj);
                temp = document.getElementById ("activityCode").value; if ("" != temp) obj.activityCode = temp;
                temp = document.getElementById ("cost").value; if ("" != temp) obj.cost = temp;
                temp = document.getElementById ("laborDuration").value; if ("" != temp) obj.laborDuration = temp;
                temp = document.getElementById ("laborRate").value; if ("" != temp) obj.laborRate = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("WorkCostDetail").value; if ("" != temp) obj.WorkCostDetail = temp;
                temp = document.getElementById ("WorkTask").value; if ("" != temp) obj.WorkTask = temp;
                temp = document.getElementById ("ErpPersons").value; if ("" != temp) obj.ErpPersons = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["WorkCostDetail", "WorkCostDetail", "1", "0..*"],
                        ["WorkTask", "OldWorkTask", "0..1", "0..*"],
                        ["ErpPersons", "OldPerson", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * This is to specify the various condition factors for a design that may alter the cost estimate or the allocation.
         *
         */
        class ConditionFactor extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConditionFactor;
                if (null == bucket)
                   cim_data.ConditionFactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConditionFactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ConditionFactor";
                base.parse_element (/<cim:ConditionFactor.cfValue>([\s\S]*?)<\/cim:ConditionFactor.cfValue>/g, obj, "cfValue", base.to_string, sub, context);
                base.parse_attribute (/<cim:ConditionFactor.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:ConditionFactor.status>([\s\S]*?)<\/cim:ConditionFactor.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:ConditionFactor.DesignLocations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocations", sub, context);
                base.parse_attributes (/<cim:ConditionFactor.Designs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Designs", sub, context);
                base.parse_attributes (/<cim:ConditionFactor.DesignLocationCUs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocationCUs", sub, context);
                var bucket = context.parsed.ConditionFactor;
                if (null == bucket)
                   context.parsed.ConditionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ConditionFactor", "cfValue", "cfValue",  base.from_string, fields);
                base.export_element (obj, "ConditionFactor", "kind", "kind",  base.from_string, fields);
                base.export_element (obj, "ConditionFactor", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "ConditionFactor", "DesignLocations", "DesignLocations", fields);
                base.export_attributes (obj, "ConditionFactor", "Designs", "Designs", fields);
                base.export_attributes (obj, "ConditionFactor", "DesignLocationCUs", "DesignLocationCUs", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConditionFactor_collapse" aria-expanded="true" aria-controls="ConditionFactor_collapse" style="margin-left: 10px;">ConditionFactor</a></legend>
                    <div id="ConditionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#cfValue}}<div><b>cfValue</b>: {{cfValue}}</div>{{/cfValue}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#DesignLocations}}<div><b>DesignLocations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DesignLocations}}
                    {{#Designs}}<div><b>Designs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Designs}}
                    {{#DesignLocationCUs}}<div><b>DesignLocationCUs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DesignLocationCUs}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ConditionFactorKind = []; if (!obj.kind) obj.ConditionFactorKind.push ({ id: '', selected: true}); for (var property in ConditionFactorKind) obj.ConditionFactorKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.DesignLocations) obj.DesignLocations_string = obj.DesignLocations.join ();
                if (obj.Designs) obj.Designs_string = obj.Designs.join ();
                if (obj.DesignLocationCUs) obj.DesignLocationCUs_string = obj.DesignLocationCUs.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ConditionFactorKind;
                delete obj.DesignLocations_string;
                delete obj.Designs_string;
                delete obj.DesignLocationCUs_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConditionFactor_collapse" aria-expanded="true" aria-controls="ConditionFactor_collapse" style="margin-left: 10px;">ConditionFactor</a></legend>
                    <div id="ConditionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cfValue'>cfValue: </label><div class='col-sm-8'><input id='cfValue' class='form-control' type='text'{{#cfValue}} value='{{cfValue}}'{{/cfValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#ConditionFactorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ConditionFactorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DesignLocations'>DesignLocations: </label><div class='col-sm-8'><input id='DesignLocations' class='form-control' type='text'{{#DesignLocations}} value='{{DesignLocations}}_string'{{/DesignLocations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Designs'>Designs: </label><div class='col-sm-8'><input id='Designs' class='form-control' type='text'{{#Designs}} value='{{Designs}}_string'{{/Designs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DesignLocationCUs'>DesignLocationCUs: </label><div class='col-sm-8'><input id='DesignLocationCUs' class='form-control' type='text'{{#DesignLocationCUs}} value='{{DesignLocationCUs}}_string'{{/DesignLocationCUs}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ConditionFactor" };
                super.submit (obj);
                temp = document.getElementById ("cfValue").value; if ("" != temp) obj.cfValue = temp;
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = ConditionFactorKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#ConditionFactorKind." + temp; }
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("DesignLocations").value; if ("" != temp) obj.DesignLocations = temp.split (",");
                temp = document.getElementById ("Designs").value; if ("" != temp) obj.Designs = temp.split (",");
                temp = document.getElementById ("DesignLocationCUs").value; if ("" != temp) obj.DesignLocationCUs = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["DesignLocations", "DesignLocation", "0..*", "0..*"],
                        ["Designs", "Design", "0..*", "0..*"],
                        ["DesignLocationCUs", "DesignLocationCU", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * The way material and assets are used to perform a certain type of work task.
         *
         * The way is described in text in the inheritied description attribute.
         *
         */
        class Usage extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Usage;
                if (null == bucket)
                   cim_data.Usage = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Usage[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Usage";
                base.parse_element (/<cim:Usage.status>([\s\S]*?)<\/cim:Usage.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:Usage.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                var bucket = context.parsed.Usage;
                if (null == bucket)
                   context.parsed.Usage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Usage", "status", "status",  base.from_string, fields);
                base.export_attribute (obj, "Usage", "WorkTask", "WorkTask", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Usage_collapse" aria-expanded="true" aria-controls="Usage_collapse" style="margin-left: 10px;">Usage</a></legend>
                    <div id="Usage_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkTask}}&quot;);})'>{{WorkTask}}</a></div>{{/WorkTask}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Usage_collapse" aria-expanded="true" aria-controls="Usage_collapse" style="margin-left: 10px;">Usage</a></legend>
                    <div id="Usage_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Usage" };
                super.submit (obj);
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("WorkTask").value; if ("" != temp) obj.WorkTask = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["WorkTask", "OldWorkTask", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A categorization for resources, often costs, in accounting transactions.
         *
         * Examples include: material components, building in service, coal sales, overhead, etc.
         *
         */
        class CostType extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CostType;
                if (null == bucket)
                   cim_data.CostType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CostType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CostType";
                base.parse_element (/<cim:CostType.amountAssignable>([\s\S]*?)<\/cim:CostType.amountAssignable>/g, obj, "amountAssignable", base.to_boolean, sub, context);
                base.parse_element (/<cim:CostType.code>([\s\S]*?)<\/cim:CostType.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:CostType.level>([\s\S]*?)<\/cim:CostType.level>/g, obj, "level", base.to_string, sub, context);
                base.parse_element (/<cim:CostType.stage>([\s\S]*?)<\/cim:CostType.stage>/g, obj, "stage", base.to_string, sub, context);
                base.parse_element (/<cim:CostType.status>([\s\S]*?)<\/cim:CostType.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:CostType.WorkCostDetails\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                base.parse_attributes (/<cim:CostType.ChildCostTypes\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChildCostTypes", sub, context);
                base.parse_attribute (/<cim:CostType.ParentCostType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentCostType", sub, context);
                base.parse_attributes (/<cim:CostType.ErpJournalEntries\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpJournalEntries", sub, context);
                base.parse_attributes (/<cim:CostType.CompatibleUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                var bucket = context.parsed.CostType;
                if (null == bucket)
                   context.parsed.CostType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CostType", "amountAssignable", "amountAssignable",  base.from_boolean, fields);
                base.export_element (obj, "CostType", "code", "code",  base.from_string, fields);
                base.export_element (obj, "CostType", "level", "level",  base.from_string, fields);
                base.export_element (obj, "CostType", "stage", "stage",  base.from_string, fields);
                base.export_element (obj, "CostType", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "CostType", "WorkCostDetails", "WorkCostDetails", fields);
                base.export_attributes (obj, "CostType", "ChildCostTypes", "ChildCostTypes", fields);
                base.export_attribute (obj, "CostType", "ParentCostType", "ParentCostType", fields);
                base.export_attributes (obj, "CostType", "ErpJournalEntries", "ErpJournalEntries", fields);
                base.export_attributes (obj, "CostType", "CompatibleUnits", "CompatibleUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CostType_collapse" aria-expanded="true" aria-controls="CostType_collapse" style="margin-left: 10px;">CostType</a></legend>
                    <div id="CostType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#amountAssignable}}<div><b>amountAssignable</b>: {{amountAssignable}}</div>{{/amountAssignable}}
                    {{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
                    {{#level}}<div><b>level</b>: {{level}}</div>{{/level}}
                    {{#stage}}<div><b>stage</b>: {{stage}}</div>{{/stage}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkCostDetails}}
                    {{#ChildCostTypes}}<div><b>ChildCostTypes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChildCostTypes}}
                    {{#ParentCostType}}<div><b>ParentCostType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ParentCostType}}&quot;);})'>{{ParentCostType}}</a></div>{{/ParentCostType}}
                    {{#ErpJournalEntries}}<div><b>ErpJournalEntries</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpJournalEntries}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CompatibleUnits}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WorkCostDetails) obj.WorkCostDetails_string = obj.WorkCostDetails.join ();
                if (obj.ChildCostTypes) obj.ChildCostTypes_string = obj.ChildCostTypes.join ();
                if (obj.ErpJournalEntries) obj.ErpJournalEntries_string = obj.ErpJournalEntries.join ();
                if (obj.CompatibleUnits) obj.CompatibleUnits_string = obj.CompatibleUnits.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkCostDetails_string;
                delete obj.ChildCostTypes_string;
                delete obj.ErpJournalEntries_string;
                delete obj.CompatibleUnits_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CostType_collapse" aria-expanded="true" aria-controls="CostType_collapse" style="margin-left: 10px;">CostType</a></legend>
                    <div id="CostType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='amountAssignable'>amountAssignable: </label><div class='col-sm-8'><input id='amountAssignable' class='form-check-input' type='checkbox'{{#amountAssignable}} checked{{/amountAssignable}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='code'>code: </label><div class='col-sm-8'><input id='code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='level'>level: </label><div class='col-sm-8'><input id='level' class='form-control' type='text'{{#level}} value='{{level}}'{{/level}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='stage'>stage: </label><div class='col-sm-8'><input id='stage' class='form-control' type='text'{{#stage}} value='{{stage}}'{{/stage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ParentCostType'>ParentCostType: </label><div class='col-sm-8'><input id='ParentCostType' class='form-control' type='text'{{#ParentCostType}} value='{{ParentCostType}}'{{/ParentCostType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpJournalEntries'>ErpJournalEntries: </label><div class='col-sm-8'><input id='ErpJournalEntries' class='form-control' type='text'{{#ErpJournalEntries}} value='{{ErpJournalEntries}}_string'{{/ErpJournalEntries}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CostType" };
                super.submit (obj);
                temp = document.getElementById ("amountAssignable").checked; if (temp) obj.amountAssignable = true;
                temp = document.getElementById ("code").value; if ("" != temp) obj.code = temp;
                temp = document.getElementById ("level").value; if ("" != temp) obj.level = temp;
                temp = document.getElementById ("stage").value; if ("" != temp) obj.stage = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("ParentCostType").value; if ("" != temp) obj.ParentCostType = temp;
                temp = document.getElementById ("ErpJournalEntries").value; if ("" != temp) obj.ErpJournalEntries = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["WorkCostDetails", "WorkCostDetail", "0..*", "1"],
                        ["ChildCostTypes", "CostType", "0..*", "0..1"],
                        ["ParentCostType", "CostType", "0..1", "0..*"],
                        ["ErpJournalEntries", "ErpJournalEntry", "0..*", "0..*"],
                        ["CompatibleUnits", "CompatibleUnit", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Labor code associated with various compatible unit labor items.
         *
         */
        class CULaborCode extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CULaborCode;
                if (null == bucket)
                   cim_data.CULaborCode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CULaborCode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CULaborCode";
                base.parse_element (/<cim:CULaborCode.code>([\s\S]*?)<\/cim:CULaborCode.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:CULaborCode.status>([\s\S]*?)<\/cim:CULaborCode.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:CULaborCode.CULaborItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CULaborItems", sub, context);
                var bucket = context.parsed.CULaborCode;
                if (null == bucket)
                   context.parsed.CULaborCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CULaborCode", "code", "code",  base.from_string, fields);
                base.export_element (obj, "CULaborCode", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "CULaborCode", "CULaborItems", "CULaborItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CULaborCode_collapse" aria-expanded="true" aria-controls="CULaborCode_collapse" style="margin-left: 10px;">CULaborCode</a></legend>
                    <div id="CULaborCode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#CULaborItems}}<div><b>CULaborItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CULaborItems}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CULaborItems) obj.CULaborItems_string = obj.CULaborItems.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CULaborItems_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CULaborCode_collapse" aria-expanded="true" aria-controls="CULaborCode_collapse" style="margin-left: 10px;">CULaborCode</a></legend>
                    <div id="CULaborCode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='code'>code: </label><div class='col-sm-8'><input id='code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CULaborCode" };
                super.submit (obj);
                temp = document.getElementById ("code").value; if ("" != temp) obj.code = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CULaborItems", "CULaborItem", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * A logical part of the design (e.g., pole and all equipment on a pole).
         *
         * This includes points and spans.
         *
         */
        class DesignLocation extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DesignLocation;
                if (null == bucket)
                   cim_data.DesignLocation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DesignLocation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DesignLocation";
                base.parse_element (/<cim:DesignLocation.spanLength>([\s\S]*?)<\/cim:DesignLocation.spanLength>/g, obj, "spanLength", base.to_string, sub, context);
                base.parse_element (/<cim:DesignLocation.status>([\s\S]*?)<\/cim:DesignLocation.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:DesignLocation.ConditionFactors\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConditionFactors", sub, context);
                base.parse_attributes (/<cim:DesignLocation.DesignLocationCUs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocationCUs", sub, context);
                base.parse_attributes (/<cim:DesignLocation.MiscCostItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MiscCostItems", sub, context);
                base.parse_attributes (/<cim:DesignLocation.ErpBomItemDatas\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpBomItemDatas", sub, context);
                base.parse_attributes (/<cim:DesignLocation.WorkLocations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkLocations", sub, context);
                base.parse_attributes (/<cim:DesignLocation.Designs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Designs", sub, context);
                var bucket = context.parsed.DesignLocation;
                if (null == bucket)
                   context.parsed.DesignLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "DesignLocation", "spanLength", "spanLength",  base.from_string, fields);
                base.export_element (obj, "DesignLocation", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "DesignLocation", "ConditionFactors", "ConditionFactors", fields);
                base.export_attributes (obj, "DesignLocation", "DesignLocationCUs", "DesignLocationCUs", fields);
                base.export_attributes (obj, "DesignLocation", "MiscCostItems", "MiscCostItems", fields);
                base.export_attributes (obj, "DesignLocation", "ErpBomItemDatas", "ErpBomItemDatas", fields);
                base.export_attributes (obj, "DesignLocation", "WorkLocations", "WorkLocations", fields);
                base.export_attributes (obj, "DesignLocation", "Designs", "Designs", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DesignLocation_collapse" aria-expanded="true" aria-controls="DesignLocation_collapse" style="margin-left: 10px;">DesignLocation</a></legend>
                    <div id="DesignLocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#spanLength}}<div><b>spanLength</b>: {{spanLength}}</div>{{/spanLength}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#ConditionFactors}}<div><b>ConditionFactors</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConditionFactors}}
                    {{#DesignLocationCUs}}<div><b>DesignLocationCUs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DesignLocationCUs}}
                    {{#MiscCostItems}}<div><b>MiscCostItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MiscCostItems}}
                    {{#ErpBomItemDatas}}<div><b>ErpBomItemDatas</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpBomItemDatas}}
                    {{#WorkLocations}}<div><b>WorkLocations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkLocations}}
                    {{#Designs}}<div><b>Designs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Designs}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ConditionFactors) obj.ConditionFactors_string = obj.ConditionFactors.join ();
                if (obj.DesignLocationCUs) obj.DesignLocationCUs_string = obj.DesignLocationCUs.join ();
                if (obj.MiscCostItems) obj.MiscCostItems_string = obj.MiscCostItems.join ();
                if (obj.ErpBomItemDatas) obj.ErpBomItemDatas_string = obj.ErpBomItemDatas.join ();
                if (obj.WorkLocations) obj.WorkLocations_string = obj.WorkLocations.join ();
                if (obj.Designs) obj.Designs_string = obj.Designs.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ConditionFactors_string;
                delete obj.DesignLocationCUs_string;
                delete obj.MiscCostItems_string;
                delete obj.ErpBomItemDatas_string;
                delete obj.WorkLocations_string;
                delete obj.Designs_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DesignLocation_collapse" aria-expanded="true" aria-controls="DesignLocation_collapse" style="margin-left: 10px;">DesignLocation</a></legend>
                    <div id="DesignLocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='spanLength'>spanLength: </label><div class='col-sm-8'><input id='spanLength' class='form-control' type='text'{{#spanLength}} value='{{spanLength}}'{{/spanLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConditionFactors'>ConditionFactors: </label><div class='col-sm-8'><input id='ConditionFactors' class='form-control' type='text'{{#ConditionFactors}} value='{{ConditionFactors}}_string'{{/ConditionFactors}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkLocations'>WorkLocations: </label><div class='col-sm-8'><input id='WorkLocations' class='form-control' type='text'{{#WorkLocations}} value='{{WorkLocations}}_string'{{/WorkLocations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Designs'>Designs: </label><div class='col-sm-8'><input id='Designs' class='form-control' type='text'{{#Designs}} value='{{Designs}}_string'{{/Designs}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "DesignLocation" };
                super.submit (obj);
                temp = document.getElementById ("spanLength").value; if ("" != temp) obj.spanLength = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("ConditionFactors").value; if ("" != temp) obj.ConditionFactors = temp.split (",");
                temp = document.getElementById ("WorkLocations").value; if ("" != temp) obj.WorkLocations = temp.split (",");
                temp = document.getElementById ("Designs").value; if ("" != temp) obj.Designs = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ConditionFactors", "ConditionFactor", "0..*", "0..*"],
                        ["DesignLocationCUs", "DesignLocationCU", "0..*", "0..1"],
                        ["MiscCostItems", "MiscCostItem", "0..*", "0..1"],
                        ["ErpBomItemDatas", "ErpBomItemData", "0..*", "0..1"],
                        ["WorkLocations", "WorkLocation", "1..*", "0..*"],
                        ["Designs", "Design", "1..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Compatible unit for various types of WorkEquipmentAssets, including vehicles.
         *
         */
        class CUWorkEquipmentItem extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CUWorkEquipmentItem;
                if (null == bucket)
                   cim_data.CUWorkEquipmentItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CUWorkEquipmentItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CUWorkEquipmentItem";
                base.parse_element (/<cim:CUWorkEquipmentItem.equipCode>([\s\S]*?)<\/cim:CUWorkEquipmentItem.equipCode>/g, obj, "equipCode", base.to_string, sub, context);
                base.parse_element (/<cim:CUWorkEquipmentItem.rate>([\s\S]*?)<\/cim:CUWorkEquipmentItem.rate>/g, obj, "rate", base.to_string, sub, context);
                base.parse_element (/<cim:CUWorkEquipmentItem.status>([\s\S]*?)<\/cim:CUWorkEquipmentItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:CUWorkEquipmentItem.CompatibleUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                base.parse_attribute (/<cim:CUWorkEquipmentItem.TypeAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context);
                var bucket = context.parsed.CUWorkEquipmentItem;
                if (null == bucket)
                   context.parsed.CUWorkEquipmentItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CUWorkEquipmentItem", "equipCode", "equipCode",  base.from_string, fields);
                base.export_element (obj, "CUWorkEquipmentItem", "rate", "rate",  base.from_string, fields);
                base.export_element (obj, "CUWorkEquipmentItem", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "CUWorkEquipmentItem", "CompatibleUnits", "CompatibleUnits", fields);
                base.export_attribute (obj, "CUWorkEquipmentItem", "TypeAsset", "TypeAsset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CUWorkEquipmentItem_collapse" aria-expanded="true" aria-controls="CUWorkEquipmentItem_collapse" style="margin-left: 10px;">CUWorkEquipmentItem</a></legend>
                    <div id="CUWorkEquipmentItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#equipCode}}<div><b>equipCode</b>: {{equipCode}}</div>{{/equipCode}}
                    {{#rate}}<div><b>rate</b>: {{rate}}</div>{{/rate}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CompatibleUnits}}
                    {{#TypeAsset}}<div><b>TypeAsset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TypeAsset}}&quot;);})'>{{TypeAsset}}</a></div>{{/TypeAsset}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CompatibleUnits) obj.CompatibleUnits_string = obj.CompatibleUnits.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CompatibleUnits_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CUWorkEquipmentItem_collapse" aria-expanded="true" aria-controls="CUWorkEquipmentItem_collapse" style="margin-left: 10px;">CUWorkEquipmentItem</a></legend>
                    <div id="CUWorkEquipmentItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='equipCode'>equipCode: </label><div class='col-sm-8'><input id='equipCode' class='form-control' type='text'{{#equipCode}} value='{{equipCode}}'{{/equipCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rate'>rate: </label><div class='col-sm-8'><input id='rate' class='form-control' type='text'{{#rate}} value='{{rate}}'{{/rate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits}}_string'{{/CompatibleUnits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TypeAsset'>TypeAsset: </label><div class='col-sm-8'><input id='TypeAsset' class='form-control' type='text'{{#TypeAsset}} value='{{TypeAsset}}'{{/TypeAsset}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CUWorkEquipmentItem" };
                super.submit (obj);
                temp = document.getElementById ("equipCode").value; if ("" != temp) obj.equipCode = temp;
                temp = document.getElementById ("rate").value; if ("" != temp) obj.rate = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("CompatibleUnits").value; if ("" != temp) obj.CompatibleUnits = temp.split (",");
                temp = document.getElementById ("TypeAsset").value; if ("" != temp) obj.TypeAsset = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CompatibleUnits", "CompatibleUnit", "0..*", "0..*"],
                        ["TypeAsset", "GenericAssetModelOrMaterial", "0..1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Compatible unit of a consumable supply item.
         *
         * For example, nuts, bolts, brackets, glue, etc.
         *
         */
        class CUMaterialItem extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CUMaterialItem;
                if (null == bucket)
                   cim_data.CUMaterialItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CUMaterialItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CUMaterialItem";
                base.parse_element (/<cim:CUMaterialItem.corporateCode>([\s\S]*?)<\/cim:CUMaterialItem.corporateCode>/g, obj, "corporateCode", base.to_string, sub, context);
                base.parse_element (/<cim:CUMaterialItem.quantity>([\s\S]*?)<\/cim:CUMaterialItem.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:CUMaterialItem.status>([\s\S]*?)<\/cim:CUMaterialItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:CUMaterialItem.TypeMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context);
                base.parse_attributes (/<cim:CUMaterialItem.PropertyUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PropertyUnits", sub, context);
                base.parse_attributes (/<cim:CUMaterialItem.CompatibleUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                var bucket = context.parsed.CUMaterialItem;
                if (null == bucket)
                   context.parsed.CUMaterialItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CUMaterialItem", "corporateCode", "corporateCode",  base.from_string, fields);
                base.export_element (obj, "CUMaterialItem", "quantity", "quantity",  base.from_string, fields);
                base.export_element (obj, "CUMaterialItem", "status", "status",  base.from_string, fields);
                base.export_attribute (obj, "CUMaterialItem", "TypeMaterial", "TypeMaterial", fields);
                base.export_attributes (obj, "CUMaterialItem", "PropertyUnits", "PropertyUnits", fields);
                base.export_attributes (obj, "CUMaterialItem", "CompatibleUnits", "CompatibleUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CUMaterialItem_collapse" aria-expanded="true" aria-controls="CUMaterialItem_collapse" style="margin-left: 10px;">CUMaterialItem</a></legend>
                    <div id="CUMaterialItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#corporateCode}}<div><b>corporateCode</b>: {{corporateCode}}</div>{{/corporateCode}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#TypeMaterial}}<div><b>TypeMaterial</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TypeMaterial}}&quot;);})'>{{TypeMaterial}}</a></div>{{/TypeMaterial}}
                    {{#PropertyUnits}}<div><b>PropertyUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PropertyUnits}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CompatibleUnits}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PropertyUnits) obj.PropertyUnits_string = obj.PropertyUnits.join ();
                if (obj.CompatibleUnits) obj.CompatibleUnits_string = obj.CompatibleUnits.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PropertyUnits_string;
                delete obj.CompatibleUnits_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CUMaterialItem_collapse" aria-expanded="true" aria-controls="CUMaterialItem_collapse" style="margin-left: 10px;">CUMaterialItem</a></legend>
                    <div id="CUMaterialItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='corporateCode'>corporateCode: </label><div class='col-sm-8'><input id='corporateCode' class='form-control' type='text'{{#corporateCode}} value='{{corporateCode}}'{{/corporateCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quantity'>quantity: </label><div class='col-sm-8'><input id='quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TypeMaterial'>TypeMaterial: </label><div class='col-sm-8'><input id='TypeMaterial' class='form-control' type='text'{{#TypeMaterial}} value='{{TypeMaterial}}'{{/TypeMaterial}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PropertyUnits'>PropertyUnits: </label><div class='col-sm-8'><input id='PropertyUnits' class='form-control' type='text'{{#PropertyUnits}} value='{{PropertyUnits}}_string'{{/PropertyUnits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits}}_string'{{/CompatibleUnits}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CUMaterialItem" };
                super.submit (obj);
                temp = document.getElementById ("corporateCode").value; if ("" != temp) obj.corporateCode = temp;
                temp = document.getElementById ("quantity").value; if ("" != temp) obj.quantity = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("TypeMaterial").value; if ("" != temp) obj.TypeMaterial = temp;
                temp = document.getElementById ("PropertyUnits").value; if ("" != temp) obj.PropertyUnits = temp.split (",");
                temp = document.getElementById ("CompatibleUnits").value; if ("" != temp) obj.CompatibleUnits = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TypeMaterial", "TypeMaterial", "0..1", "0..*"],
                        ["PropertyUnits", "PropertyUnit", "0..*", "0..*"],
                        ["CompatibleUnits", "CompatibleUnit", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Overhead cost applied to work order.
         *
         */
        class OverheadCost extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OverheadCost;
                if (null == bucket)
                   cim_data.OverheadCost = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OverheadCost[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OverheadCost";
                base.parse_element (/<cim:OverheadCost.code>([\s\S]*?)<\/cim:OverheadCost.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:OverheadCost.cost>([\s\S]*?)<\/cim:OverheadCost.cost>/g, obj, "cost", base.to_string, sub, context);
                base.parse_element (/<cim:OverheadCost.status>([\s\S]*?)<\/cim:OverheadCost.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:OverheadCost.WorkCostDetails\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                base.parse_attributes (/<cim:OverheadCost.WorkTasks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                var bucket = context.parsed.OverheadCost;
                if (null == bucket)
                   context.parsed.OverheadCost = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "OverheadCost", "code", "code",  base.from_string, fields);
                base.export_element (obj, "OverheadCost", "cost", "cost",  base.from_string, fields);
                base.export_element (obj, "OverheadCost", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "OverheadCost", "WorkCostDetails", "WorkCostDetails", fields);
                base.export_attributes (obj, "OverheadCost", "WorkTasks", "WorkTasks", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverheadCost_collapse" aria-expanded="true" aria-controls="OverheadCost_collapse" style="margin-left: 10px;">OverheadCost</a></legend>
                    <div id="OverheadCost_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
                    {{#cost}}<div><b>cost</b>: {{cost}}</div>{{/cost}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkCostDetails}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkTasks}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WorkCostDetails) obj.WorkCostDetails_string = obj.WorkCostDetails.join ();
                if (obj.WorkTasks) obj.WorkTasks_string = obj.WorkTasks.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkCostDetails_string;
                delete obj.WorkTasks_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverheadCost_collapse" aria-expanded="true" aria-controls="OverheadCost_collapse" style="margin-left: 10px;">OverheadCost</a></legend>
                    <div id="OverheadCost_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='code'>code: </label><div class='col-sm-8'><input id='code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cost'>cost: </label><div class='col-sm-8'><input id='cost' class='form-control' type='text'{{#cost}} value='{{cost}}'{{/cost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "OverheadCost" };
                super.submit (obj);
                temp = document.getElementById ("code").value; if ("" != temp) obj.code = temp;
                temp = document.getElementById ("cost").value; if ("" != temp) obj.cost = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["WorkCostDetails", "WorkCostDetail", "0..*", "0..1"],
                        ["WorkTasks", "OldWorkTask", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * A pre-defined set of work steps for a given type of work.
         *
         */
        class WorkFlowStep extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkFlowStep;
                if (null == bucket)
                   cim_data.WorkFlowStep = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkFlowStep[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WorkFlowStep";
                base.parse_element (/<cim:WorkFlowStep.sequenceNumber>([\s\S]*?)<\/cim:WorkFlowStep.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:WorkFlowStep.status>([\s\S]*?)<\/cim:WorkFlowStep.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:WorkFlowStep.WorkTasks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attribute (/<cim:WorkFlowStep.Work\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Work", sub, context);
                var bucket = context.parsed.WorkFlowStep;
                if (null == bucket)
                   context.parsed.WorkFlowStep = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WorkFlowStep", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "WorkFlowStep", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "WorkFlowStep", "WorkTasks", "WorkTasks", fields);
                base.export_attribute (obj, "WorkFlowStep", "Work", "Work", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkFlowStep_collapse" aria-expanded="true" aria-controls="WorkFlowStep_collapse" style="margin-left: 10px;">WorkFlowStep</a></legend>
                    <div id="WorkFlowStep_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkTasks}}
                    {{#Work}}<div><b>Work</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Work}}&quot;);})'>{{Work}}</a></div>{{/Work}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WorkTasks) obj.WorkTasks_string = obj.WorkTasks.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkTasks_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkFlowStep_collapse" aria-expanded="true" aria-controls="WorkFlowStep_collapse" style="margin-left: 10px;">WorkFlowStep</a></legend>
                    <div id="WorkFlowStep_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Work'>Work: </label><div class='col-sm-8'><input id='Work' class='form-control' type='text'{{#Work}} value='{{Work}}'{{/Work}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "WorkFlowStep" };
                super.submit (obj);
                temp = document.getElementById ("sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("Work").value; if ("" != temp) obj.Work = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["WorkTasks", "OldWorkTask", "0..*", "0..1"],
                        ["Work", "Work", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Allowed actions: Install, Remove, Transfer, Abandon, etc.
         *
         */
        class CUAllowableAction extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CUAllowableAction;
                if (null == bucket)
                   cim_data.CUAllowableAction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CUAllowableAction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CUAllowableAction";
                base.parse_element (/<cim:CUAllowableAction.status>([\s\S]*?)<\/cim:CUAllowableAction.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:CUAllowableAction.CompatibleUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                var bucket = context.parsed.CUAllowableAction;
                if (null == bucket)
                   context.parsed.CUAllowableAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CUAllowableAction", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "CUAllowableAction", "CompatibleUnits", "CompatibleUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CUAllowableAction_collapse" aria-expanded="true" aria-controls="CUAllowableAction_collapse" style="margin-left: 10px;">CUAllowableAction</a></legend>
                    <div id="CUAllowableAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CompatibleUnits}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CompatibleUnits) obj.CompatibleUnits_string = obj.CompatibleUnits.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CompatibleUnits_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CUAllowableAction_collapse" aria-expanded="true" aria-controls="CUAllowableAction_collapse" style="margin-left: 10px;">CUAllowableAction</a></legend>
                    <div id="CUAllowableAction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CUAllowableAction" };
                super.submit (obj);
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CompatibleUnits", "CompatibleUnit", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Certain skills are required and must be certified in order for a person (typically a member of a crew) to be qualified to work on types of equipment.
         *
         */
        class QualificationRequirement extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.QualificationRequirement;
                if (null == bucket)
                   cim_data.QualificationRequirement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.QualificationRequirement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "QualificationRequirement";
                base.parse_element (/<cim:QualificationRequirement.qualificationID>([\s\S]*?)<\/cim:QualificationRequirement.qualificationID>/g, obj, "qualificationID", base.to_string, sub, context);
                base.parse_attributes (/<cim:QualificationRequirement.WorkTasks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attributes (/<cim:QualificationRequirement.Specifications\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Specifications", sub, context);
                base.parse_attributes (/<cim:QualificationRequirement.CULaborItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CULaborItems", sub, context);
                base.parse_attributes (/<cim:QualificationRequirement.Skills\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Skills", sub, context);
                var bucket = context.parsed.QualificationRequirement;
                if (null == bucket)
                   context.parsed.QualificationRequirement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "QualificationRequirement", "qualificationID", "qualificationID",  base.from_string, fields);
                base.export_attributes (obj, "QualificationRequirement", "WorkTasks", "WorkTasks", fields);
                base.export_attributes (obj, "QualificationRequirement", "Specifications", "Specifications", fields);
                base.export_attributes (obj, "QualificationRequirement", "CULaborItems", "CULaborItems", fields);
                base.export_attributes (obj, "QualificationRequirement", "Skills", "Skills", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#QualificationRequirement_collapse" aria-expanded="true" aria-controls="QualificationRequirement_collapse" style="margin-left: 10px;">QualificationRequirement</a></legend>
                    <div id="QualificationRequirement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#qualificationID}}<div><b>qualificationID</b>: {{qualificationID}}</div>{{/qualificationID}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkTasks}}
                    {{#Specifications}}<div><b>Specifications</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Specifications}}
                    {{#CULaborItems}}<div><b>CULaborItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CULaborItems}}
                    {{#Skills}}<div><b>Skills</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Skills}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WorkTasks) obj.WorkTasks_string = obj.WorkTasks.join ();
                if (obj.Specifications) obj.Specifications_string = obj.Specifications.join ();
                if (obj.CULaborItems) obj.CULaborItems_string = obj.CULaborItems.join ();
                if (obj.Skills) obj.Skills_string = obj.Skills.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkTasks_string;
                delete obj.Specifications_string;
                delete obj.CULaborItems_string;
                delete obj.Skills_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#QualificationRequirement_collapse" aria-expanded="true" aria-controls="QualificationRequirement_collapse" style="margin-left: 10px;">QualificationRequirement</a></legend>
                    <div id="QualificationRequirement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qualificationID'>qualificationID: </label><div class='col-sm-8'><input id='qualificationID' class='form-control' type='text'{{#qualificationID}} value='{{qualificationID}}'{{/qualificationID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkTasks'>WorkTasks: </label><div class='col-sm-8'><input id='WorkTasks' class='form-control' type='text'{{#WorkTasks}} value='{{WorkTasks}}_string'{{/WorkTasks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Specifications'>Specifications: </label><div class='col-sm-8'><input id='Specifications' class='form-control' type='text'{{#Specifications}} value='{{Specifications}}_string'{{/Specifications}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CULaborItems'>CULaborItems: </label><div class='col-sm-8'><input id='CULaborItems' class='form-control' type='text'{{#CULaborItems}} value='{{CULaborItems}}_string'{{/CULaborItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Skills'>Skills: </label><div class='col-sm-8'><input id='Skills' class='form-control' type='text'{{#Skills}} value='{{Skills}}_string'{{/Skills}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "QualificationRequirement" };
                super.submit (obj);
                temp = document.getElementById ("qualificationID").value; if ("" != temp) obj.qualificationID = temp;
                temp = document.getElementById ("WorkTasks").value; if ("" != temp) obj.WorkTasks = temp.split (",");
                temp = document.getElementById ("Specifications").value; if ("" != temp) obj.Specifications = temp.split (",");
                temp = document.getElementById ("CULaborItems").value; if ("" != temp) obj.CULaborItems = temp.split (",");
                temp = document.getElementById ("Skills").value; if ("" != temp) obj.Skills = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["WorkTasks", "OldWorkTask", "0..*", "0..*"],
                        ["Specifications", "Specification", "0..*", "0..*"],
                        ["CULaborItems", "CULaborItem", "0..*", "0..*"],
                        ["Skills", "Skill", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Contractor information for work task.
         *
         */
        class ContractorItem extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ContractorItem;
                if (null == bucket)
                   cim_data.ContractorItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ContractorItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ContractorItem";
                base.parse_element (/<cim:ContractorItem.activityCode>([\s\S]*?)<\/cim:ContractorItem.activityCode>/g, obj, "activityCode", base.to_string, sub, context);
                base.parse_element (/<cim:ContractorItem.bidAmount>([\s\S]*?)<\/cim:ContractorItem.bidAmount>/g, obj, "bidAmount", base.to_string, sub, context);
                base.parse_element (/<cim:ContractorItem.cost>([\s\S]*?)<\/cim:ContractorItem.cost>/g, obj, "cost", base.to_string, sub, context);
                base.parse_element (/<cim:ContractorItem.status>([\s\S]*?)<\/cim:ContractorItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:ContractorItem.ErpPayables\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayables", sub, context);
                base.parse_attribute (/<cim:ContractorItem.WorkCostDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context);
                base.parse_attribute (/<cim:ContractorItem.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                var bucket = context.parsed.ContractorItem;
                if (null == bucket)
                   context.parsed.ContractorItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ContractorItem", "activityCode", "activityCode",  base.from_string, fields);
                base.export_element (obj, "ContractorItem", "bidAmount", "bidAmount",  base.from_string, fields);
                base.export_element (obj, "ContractorItem", "cost", "cost",  base.from_string, fields);
                base.export_element (obj, "ContractorItem", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "ContractorItem", "ErpPayables", "ErpPayables", fields);
                base.export_attribute (obj, "ContractorItem", "WorkCostDetail", "WorkCostDetail", fields);
                base.export_attribute (obj, "ContractorItem", "WorkTask", "WorkTask", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ContractorItem_collapse" aria-expanded="true" aria-controls="ContractorItem_collapse" style="margin-left: 10px;">ContractorItem</a></legend>
                    <div id="ContractorItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#activityCode}}<div><b>activityCode</b>: {{activityCode}}</div>{{/activityCode}}
                    {{#bidAmount}}<div><b>bidAmount</b>: {{bidAmount}}</div>{{/bidAmount}}
                    {{#cost}}<div><b>cost</b>: {{cost}}</div>{{/cost}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#ErpPayables}}<div><b>ErpPayables</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpPayables}}
                    {{#WorkCostDetail}}<div><b>WorkCostDetail</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkCostDetail}}&quot;);})'>{{WorkCostDetail}}</a></div>{{/WorkCostDetail}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkTask}}&quot;);})'>{{WorkTask}}</a></div>{{/WorkTask}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ErpPayables) obj.ErpPayables_string = obj.ErpPayables.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ErpPayables_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ContractorItem_collapse" aria-expanded="true" aria-controls="ContractorItem_collapse" style="margin-left: 10px;">ContractorItem</a></legend>
                    <div id="ContractorItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='activityCode'>activityCode: </label><div class='col-sm-8'><input id='activityCode' class='form-control' type='text'{{#activityCode}} value='{{activityCode}}'{{/activityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bidAmount'>bidAmount: </label><div class='col-sm-8'><input id='bidAmount' class='form-control' type='text'{{#bidAmount}} value='{{bidAmount}}'{{/bidAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cost'>cost: </label><div class='col-sm-8'><input id='cost' class='form-control' type='text'{{#cost}} value='{{cost}}'{{/cost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpPayables'>ErpPayables: </label><div class='col-sm-8'><input id='ErpPayables' class='form-control' type='text'{{#ErpPayables}} value='{{ErpPayables}}_string'{{/ErpPayables}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkCostDetail'>WorkCostDetail: </label><div class='col-sm-8'><input id='WorkCostDetail' class='form-control' type='text'{{#WorkCostDetail}} value='{{WorkCostDetail}}'{{/WorkCostDetail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ContractorItem" };
                super.submit (obj);
                temp = document.getElementById ("activityCode").value; if ("" != temp) obj.activityCode = temp;
                temp = document.getElementById ("bidAmount").value; if ("" != temp) obj.bidAmount = temp;
                temp = document.getElementById ("cost").value; if ("" != temp) obj.cost = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("ErpPayables").value; if ("" != temp) obj.ErpPayables = temp.split (",");
                temp = document.getElementById ("WorkCostDetail").value; if ("" != temp) obj.WorkCostDetail = temp;
                temp = document.getElementById ("WorkTask").value; if ("" != temp) obj.WorkTask = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ErpPayables", "ErpPayable", "0..*", "0..*"],
                        ["WorkCostDetail", "WorkCostDetail", "1", "0..*"],
                        ["WorkTask", "OldWorkTask", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A Compatible Unit Group identifies a set of compatible units which may be jointly utilized for estimating and designating jobs.
         *
         */
        class CUGroup extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CUGroup;
                if (null == bucket)
                   cim_data.CUGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CUGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CUGroup";
                base.parse_element (/<cim:CUGroup.status>([\s\S]*?)<\/cim:CUGroup.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:CUGroup.ChildCUGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChildCUGroups", sub, context);
                base.parse_attributes (/<cim:CUGroup.ParentCUGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentCUGroups", sub, context);
                base.parse_attributes (/<cim:CUGroup.CompatibleUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                base.parse_attributes (/<cim:CUGroup.DesignLocationCUs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocationCUs", sub, context);
                var bucket = context.parsed.CUGroup;
                if (null == bucket)
                   context.parsed.CUGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CUGroup", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "CUGroup", "ChildCUGroups", "ChildCUGroups", fields);
                base.export_attributes (obj, "CUGroup", "ParentCUGroups", "ParentCUGroups", fields);
                base.export_attributes (obj, "CUGroup", "CompatibleUnits", "CompatibleUnits", fields);
                base.export_attributes (obj, "CUGroup", "DesignLocationCUs", "DesignLocationCUs", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CUGroup_collapse" aria-expanded="true" aria-controls="CUGroup_collapse" style="margin-left: 10px;">CUGroup</a></legend>
                    <div id="CUGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#ChildCUGroups}}<div><b>ChildCUGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChildCUGroups}}
                    {{#ParentCUGroups}}<div><b>ParentCUGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ParentCUGroups}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CompatibleUnits}}
                    {{#DesignLocationCUs}}<div><b>DesignLocationCUs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DesignLocationCUs}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ChildCUGroups) obj.ChildCUGroups_string = obj.ChildCUGroups.join ();
                if (obj.ParentCUGroups) obj.ParentCUGroups_string = obj.ParentCUGroups.join ();
                if (obj.CompatibleUnits) obj.CompatibleUnits_string = obj.CompatibleUnits.join ();
                if (obj.DesignLocationCUs) obj.DesignLocationCUs_string = obj.DesignLocationCUs.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ChildCUGroups_string;
                delete obj.ParentCUGroups_string;
                delete obj.CompatibleUnits_string;
                delete obj.DesignLocationCUs_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CUGroup_collapse" aria-expanded="true" aria-controls="CUGroup_collapse" style="margin-left: 10px;">CUGroup</a></legend>
                    <div id="CUGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChildCUGroups'>ChildCUGroups: </label><div class='col-sm-8'><input id='ChildCUGroups' class='form-control' type='text'{{#ChildCUGroups}} value='{{ChildCUGroups}}_string'{{/ChildCUGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ParentCUGroups'>ParentCUGroups: </label><div class='col-sm-8'><input id='ParentCUGroups' class='form-control' type='text'{{#ParentCUGroups}} value='{{ParentCUGroups}}_string'{{/ParentCUGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DesignLocationCUs'>DesignLocationCUs: </label><div class='col-sm-8'><input id='DesignLocationCUs' class='form-control' type='text'{{#DesignLocationCUs}} value='{{DesignLocationCUs}}_string'{{/DesignLocationCUs}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CUGroup" };
                super.submit (obj);
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("ChildCUGroups").value; if ("" != temp) obj.ChildCUGroups = temp.split (",");
                temp = document.getElementById ("ParentCUGroups").value; if ("" != temp) obj.ParentCUGroups = temp.split (",");
                temp = document.getElementById ("DesignLocationCUs").value; if ("" != temp) obj.DesignLocationCUs = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ChildCUGroups", "CUGroup", "0..*", "0..*"],
                        ["ParentCUGroups", "CUGroup", "0..*", "0..*"],
                        ["CompatibleUnits", "CompatibleUnit", "0..*", "0..1"],
                        ["DesignLocationCUs", "DesignLocationCU", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * The patterns of shifts worked by people or crews.
         *
         */
        class ShiftPattern extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ShiftPattern;
                if (null == bucket)
                   cim_data.ShiftPattern = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ShiftPattern[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ShiftPattern";
                base.parse_element (/<cim:ShiftPattern.assignmentType>([\s\S]*?)<\/cim:ShiftPattern.assignmentType>/g, obj, "assignmentType", base.to_string, sub, context);
                base.parse_element (/<cim:ShiftPattern.cycleCount>([\s\S]*?)<\/cim:ShiftPattern.cycleCount>/g, obj, "cycleCount", base.to_string, sub, context);
                base.parse_element (/<cim:ShiftPattern.status>([\s\S]*?)<\/cim:ShiftPattern.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:ShiftPattern.validityInterval>([\s\S]*?)<\/cim:ShiftPattern.validityInterval>/g, obj, "validityInterval", base.to_string, sub, context);
                base.parse_attributes (/<cim:ShiftPattern.Crews\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crews", sub, context);
                var bucket = context.parsed.ShiftPattern;
                if (null == bucket)
                   context.parsed.ShiftPattern = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ShiftPattern", "assignmentType", "assignmentType",  base.from_string, fields);
                base.export_element (obj, "ShiftPattern", "cycleCount", "cycleCount",  base.from_string, fields);
                base.export_element (obj, "ShiftPattern", "status", "status",  base.from_string, fields);
                base.export_element (obj, "ShiftPattern", "validityInterval", "validityInterval",  base.from_string, fields);
                base.export_attributes (obj, "ShiftPattern", "Crews", "Crews", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ShiftPattern_collapse" aria-expanded="true" aria-controls="ShiftPattern_collapse" style="margin-left: 10px;">ShiftPattern</a></legend>
                    <div id="ShiftPattern_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#assignmentType}}<div><b>assignmentType</b>: {{assignmentType}}</div>{{/assignmentType}}
                    {{#cycleCount}}<div><b>cycleCount</b>: {{cycleCount}}</div>{{/cycleCount}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#validityInterval}}<div><b>validityInterval</b>: {{validityInterval}}</div>{{/validityInterval}}
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Crews}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Crews) obj.Crews_string = obj.Crews.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Crews_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ShiftPattern_collapse" aria-expanded="true" aria-controls="ShiftPattern_collapse" style="margin-left: 10px;">ShiftPattern</a></legend>
                    <div id="ShiftPattern_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='assignmentType'>assignmentType: </label><div class='col-sm-8'><input id='assignmentType' class='form-control' type='text'{{#assignmentType}} value='{{assignmentType}}'{{/assignmentType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cycleCount'>cycleCount: </label><div class='col-sm-8'><input id='cycleCount' class='form-control' type='text'{{#cycleCount}} value='{{cycleCount}}'{{/cycleCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='validityInterval'>validityInterval: </label><div class='col-sm-8'><input id='validityInterval' class='form-control' type='text'{{#validityInterval}} value='{{validityInterval}}'{{/validityInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Crews'>Crews: </label><div class='col-sm-8'><input id='Crews' class='form-control' type='text'{{#Crews}} value='{{Crews}}_string'{{/Crews}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ShiftPattern" };
                super.submit (obj);
                temp = document.getElementById ("assignmentType").value; if ("" != temp) obj.assignmentType = temp;
                temp = document.getElementById ("cycleCount").value; if ("" != temp) obj.cycleCount = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("validityInterval").value; if ("" != temp) obj.validityInterval = temp;
                temp = document.getElementById ("Crews").value; if ("" != temp) obj.Crews = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Crews", "OldCrew", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Compatible unit labor item.
         *
         */
        class CULaborItem extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CULaborItem;
                if (null == bucket)
                   cim_data.CULaborItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CULaborItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CULaborItem";
                base.parse_element (/<cim:CULaborItem.activityCode>([\s\S]*?)<\/cim:CULaborItem.activityCode>/g, obj, "activityCode", base.to_string, sub, context);
                base.parse_element (/<cim:CULaborItem.laborDuration>([\s\S]*?)<\/cim:CULaborItem.laborDuration>/g, obj, "laborDuration", base.to_string, sub, context);
                base.parse_element (/<cim:CULaborItem.laborRate>([\s\S]*?)<\/cim:CULaborItem.laborRate>/g, obj, "laborRate", base.to_string, sub, context);
                base.parse_element (/<cim:CULaborItem.status>([\s\S]*?)<\/cim:CULaborItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:CULaborItem.QualificationRequirements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "QualificationRequirements", sub, context);
                base.parse_attributes (/<cim:CULaborItem.CompatibleUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                base.parse_attribute (/<cim:CULaborItem.CULaborCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CULaborCode", sub, context);
                var bucket = context.parsed.CULaborItem;
                if (null == bucket)
                   context.parsed.CULaborItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CULaborItem", "activityCode", "activityCode",  base.from_string, fields);
                base.export_element (obj, "CULaborItem", "laborDuration", "laborDuration",  base.from_string, fields);
                base.export_element (obj, "CULaborItem", "laborRate", "laborRate",  base.from_string, fields);
                base.export_element (obj, "CULaborItem", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "CULaborItem", "QualificationRequirements", "QualificationRequirements", fields);
                base.export_attributes (obj, "CULaborItem", "CompatibleUnits", "CompatibleUnits", fields);
                base.export_attribute (obj, "CULaborItem", "CULaborCode", "CULaborCode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CULaborItem_collapse" aria-expanded="true" aria-controls="CULaborItem_collapse" style="margin-left: 10px;">CULaborItem</a></legend>
                    <div id="CULaborItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#activityCode}}<div><b>activityCode</b>: {{activityCode}}</div>{{/activityCode}}
                    {{#laborDuration}}<div><b>laborDuration</b>: {{laborDuration}}</div>{{/laborDuration}}
                    {{#laborRate}}<div><b>laborRate</b>: {{laborRate}}</div>{{/laborRate}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#QualificationRequirements}}<div><b>QualificationRequirements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/QualificationRequirements}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CompatibleUnits}}
                    {{#CULaborCode}}<div><b>CULaborCode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CULaborCode}}&quot;);})'>{{CULaborCode}}</a></div>{{/CULaborCode}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.QualificationRequirements) obj.QualificationRequirements_string = obj.QualificationRequirements.join ();
                if (obj.CompatibleUnits) obj.CompatibleUnits_string = obj.CompatibleUnits.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.QualificationRequirements_string;
                delete obj.CompatibleUnits_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CULaborItem_collapse" aria-expanded="true" aria-controls="CULaborItem_collapse" style="margin-left: 10px;">CULaborItem</a></legend>
                    <div id="CULaborItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='activityCode'>activityCode: </label><div class='col-sm-8'><input id='activityCode' class='form-control' type='text'{{#activityCode}} value='{{activityCode}}'{{/activityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='laborDuration'>laborDuration: </label><div class='col-sm-8'><input id='laborDuration' class='form-control' type='text'{{#laborDuration}} value='{{laborDuration}}'{{/laborDuration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='laborRate'>laborRate: </label><div class='col-sm-8'><input id='laborRate' class='form-control' type='text'{{#laborRate}} value='{{laborRate}}'{{/laborRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='QualificationRequirements'>QualificationRequirements: </label><div class='col-sm-8'><input id='QualificationRequirements' class='form-control' type='text'{{#QualificationRequirements}} value='{{QualificationRequirements}}_string'{{/QualificationRequirements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits}}_string'{{/CompatibleUnits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CULaborCode'>CULaborCode: </label><div class='col-sm-8'><input id='CULaborCode' class='form-control' type='text'{{#CULaborCode}} value='{{CULaborCode}}'{{/CULaborCode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CULaborItem" };
                super.submit (obj);
                temp = document.getElementById ("activityCode").value; if ("" != temp) obj.activityCode = temp;
                temp = document.getElementById ("laborDuration").value; if ("" != temp) obj.laborDuration = temp;
                temp = document.getElementById ("laborRate").value; if ("" != temp) obj.laborRate = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("QualificationRequirements").value; if ("" != temp) obj.QualificationRequirements = temp.split (",");
                temp = document.getElementById ("CompatibleUnits").value; if ("" != temp) obj.CompatibleUnits = temp.split (",");
                temp = document.getElementById ("CULaborCode").value; if ("" != temp) obj.CULaborCode = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["QualificationRequirements", "QualificationRequirement", "0..*", "0..*"],
                        ["CompatibleUnits", "CompatibleUnit", "0..*", "0..*"],
                        ["CULaborCode", "CULaborCode", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Unit of property for reporting purposes.
         *
         */
        class PropertyUnit extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PropertyUnit;
                if (null == bucket)
                   cim_data.PropertyUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PropertyUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PropertyUnit";
                base.parse_element (/<cim:PropertyUnit.accountingUsage>([\s\S]*?)<\/cim:PropertyUnit.accountingUsage>/g, obj, "accountingUsage", base.to_string, sub, context);
                base.parse_attribute (/<cim:PropertyUnit.activityCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "activityCode", sub, context);
                base.parse_element (/<cim:PropertyUnit.propertyAccount>([\s\S]*?)<\/cim:PropertyUnit.propertyAccount>/g, obj, "propertyAccount", base.to_string, sub, context);
                base.parse_element (/<cim:PropertyUnit.status>([\s\S]*?)<\/cim:PropertyUnit.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:PropertyUnit.CUMaterialItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUMaterialItems", sub, context);
                base.parse_attributes (/<cim:PropertyUnit.CompatibleUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                base.parse_attributes (/<cim:PropertyUnit.WorkCostDetails\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                var bucket = context.parsed.PropertyUnit;
                if (null == bucket)
                   context.parsed.PropertyUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "PropertyUnit", "accountingUsage", "accountingUsage",  base.from_string, fields);
                base.export_element (obj, "PropertyUnit", "activityCode", "activityCode",  base.from_string, fields);
                base.export_element (obj, "PropertyUnit", "propertyAccount", "propertyAccount",  base.from_string, fields);
                base.export_element (obj, "PropertyUnit", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "PropertyUnit", "CUMaterialItems", "CUMaterialItems", fields);
                base.export_attributes (obj, "PropertyUnit", "CompatibleUnits", "CompatibleUnits", fields);
                base.export_attributes (obj, "PropertyUnit", "WorkCostDetails", "WorkCostDetails", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PropertyUnit_collapse" aria-expanded="true" aria-controls="PropertyUnit_collapse" style="margin-left: 10px;">PropertyUnit</a></legend>
                    <div id="PropertyUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#accountingUsage}}<div><b>accountingUsage</b>: {{accountingUsage}}</div>{{/accountingUsage}}
                    {{#activityCode}}<div><b>activityCode</b>: {{activityCode}}</div>{{/activityCode}}
                    {{#propertyAccount}}<div><b>propertyAccount</b>: {{propertyAccount}}</div>{{/propertyAccount}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#CUMaterialItems}}<div><b>CUMaterialItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CUMaterialItems}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CompatibleUnits}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkCostDetails}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WorkActionKind = []; if (!obj.activityCode) obj.WorkActionKind.push ({ id: '', selected: true}); for (var property in WorkActionKind) obj.WorkActionKind.push ({ id: property, selected: obj.activityCode && obj.activityCode.endsWith ('.' + property)});
                if (obj.CUMaterialItems) obj.CUMaterialItems_string = obj.CUMaterialItems.join ();
                if (obj.CompatibleUnits) obj.CompatibleUnits_string = obj.CompatibleUnits.join ();
                if (obj.WorkCostDetails) obj.WorkCostDetails_string = obj.WorkCostDetails.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkActionKind;
                delete obj.CUMaterialItems_string;
                delete obj.CompatibleUnits_string;
                delete obj.WorkCostDetails_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PropertyUnit_collapse" aria-expanded="true" aria-controls="PropertyUnit_collapse" style="margin-left: 10px;">PropertyUnit</a></legend>
                    <div id="PropertyUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='accountingUsage'>accountingUsage: </label><div class='col-sm-8'><input id='accountingUsage' class='form-control' type='text'{{#accountingUsage}} value='{{accountingUsage}}'{{/accountingUsage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='activityCode'>activityCode: </label><div class='col-sm-8'><select id='activityCode' class='form-control'>{{#WorkActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WorkActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='propertyAccount'>propertyAccount: </label><div class='col-sm-8'><input id='propertyAccount' class='form-control' type='text'{{#propertyAccount}} value='{{propertyAccount}}'{{/propertyAccount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CUMaterialItems'>CUMaterialItems: </label><div class='col-sm-8'><input id='CUMaterialItems' class='form-control' type='text'{{#CUMaterialItems}} value='{{CUMaterialItems}}_string'{{/CUMaterialItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkCostDetails'>WorkCostDetails: </label><div class='col-sm-8'><input id='WorkCostDetails' class='form-control' type='text'{{#WorkCostDetails}} value='{{WorkCostDetails}}_string'{{/WorkCostDetails}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PropertyUnit" };
                super.submit (obj);
                temp = document.getElementById ("accountingUsage").value; if ("" != temp) obj.accountingUsage = temp;
                temp = document.getElementById ("activityCode").value; if ("" != temp) { temp = WorkActionKind[temp]; if ("undefined" != typeof (temp)) obj.activityCode = "#http://iec.ch/TC57/2013/CIM-schema-cim16#WorkActionKind." + temp; }
                temp = document.getElementById ("propertyAccount").value; if ("" != temp) obj.propertyAccount = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("CUMaterialItems").value; if ("" != temp) obj.CUMaterialItems = temp.split (",");
                temp = document.getElementById ("WorkCostDetails").value; if ("" != temp) obj.WorkCostDetails = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CUMaterialItems", "CUMaterialItem", "0..*", "0..*"],
                        ["CompatibleUnits", "CompatibleUnit", "0..*", "0..1"],
                        ["WorkCostDetails", "WorkCostDetail", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Capabilities of a crew.
         *
         */
        class Capability extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Capability;
                if (null == bucket)
                   cim_data.Capability = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Capability[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Capability";
                base.parse_element (/<cim:Capability.performanceFactor>([\s\S]*?)<\/cim:Capability.performanceFactor>/g, obj, "performanceFactor", base.to_string, sub, context);
                base.parse_element (/<cim:Capability.status>([\s\S]*?)<\/cim:Capability.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:Capability.type>([\s\S]*?)<\/cim:Capability.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:Capability.validityInterval>([\s\S]*?)<\/cim:Capability.validityInterval>/g, obj, "validityInterval", base.to_string, sub, context);
                base.parse_attributes (/<cim:Capability.Crafts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crafts", sub, context);
                base.parse_attributes (/<cim:Capability.WorkTasks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attribute (/<cim:Capability.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context);
                var bucket = context.parsed.Capability;
                if (null == bucket)
                   context.parsed.Capability = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Capability", "performanceFactor", "performanceFactor",  base.from_string, fields);
                base.export_element (obj, "Capability", "status", "status",  base.from_string, fields);
                base.export_element (obj, "Capability", "type", "type",  base.from_string, fields);
                base.export_element (obj, "Capability", "validityInterval", "validityInterval",  base.from_string, fields);
                base.export_attributes (obj, "Capability", "Crafts", "Crafts", fields);
                base.export_attributes (obj, "Capability", "WorkTasks", "WorkTasks", fields);
                base.export_attribute (obj, "Capability", "Crew", "Crew", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Capability_collapse" aria-expanded="true" aria-controls="Capability_collapse" style="margin-left: 10px;">Capability</a></legend>
                    <div id="Capability_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#performanceFactor}}<div><b>performanceFactor</b>: {{performanceFactor}}</div>{{/performanceFactor}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#validityInterval}}<div><b>validityInterval</b>: {{validityInterval}}</div>{{/validityInterval}}
                    {{#Crafts}}<div><b>Crafts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Crafts}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkTasks}}
                    {{#Crew}}<div><b>Crew</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Crew}}&quot;);})'>{{Crew}}</a></div>{{/Crew}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Crafts) obj.Crafts_string = obj.Crafts.join ();
                if (obj.WorkTasks) obj.WorkTasks_string = obj.WorkTasks.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Crafts_string;
                delete obj.WorkTasks_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Capability_collapse" aria-expanded="true" aria-controls="Capability_collapse" style="margin-left: 10px;">Capability</a></legend>
                    <div id="Capability_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='performanceFactor'>performanceFactor: </label><div class='col-sm-8'><input id='performanceFactor' class='form-control' type='text'{{#performanceFactor}} value='{{performanceFactor}}'{{/performanceFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='validityInterval'>validityInterval: </label><div class='col-sm-8'><input id='validityInterval' class='form-control' type='text'{{#validityInterval}} value='{{validityInterval}}'{{/validityInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Crafts'>Crafts: </label><div class='col-sm-8'><input id='Crafts' class='form-control' type='text'{{#Crafts}} value='{{Crafts}}_string'{{/Crafts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkTasks'>WorkTasks: </label><div class='col-sm-8'><input id='WorkTasks' class='form-control' type='text'{{#WorkTasks}} value='{{WorkTasks}}_string'{{/WorkTasks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Crew'>Crew: </label><div class='col-sm-8'><input id='Crew' class='form-control' type='text'{{#Crew}} value='{{Crew}}'{{/Crew}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Capability" };
                super.submit (obj);
                temp = document.getElementById ("performanceFactor").value; if ("" != temp) obj.performanceFactor = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById ("validityInterval").value; if ("" != temp) obj.validityInterval = temp;
                temp = document.getElementById ("Crafts").value; if ("" != temp) obj.Crafts = temp.split (",");
                temp = document.getElementById ("WorkTasks").value; if ("" != temp) obj.WorkTasks = temp.split (",");
                temp = document.getElementById ("Crew").value; if ("" != temp) obj.Crew = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Crafts", "Craft", "0..*", "0..*"],
                        ["WorkTasks", "OldWorkTask", "0..*", "0..*"],
                        ["Crew", "OldCrew", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Compatible unit at a given design location.
         *
         */
        class DesignLocationCU extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DesignLocationCU;
                if (null == bucket)
                   cim_data.DesignLocationCU = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DesignLocationCU[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DesignLocationCU";
                base.parse_element (/<cim:DesignLocationCU.cuAccount>([\s\S]*?)<\/cim:DesignLocationCU.cuAccount>/g, obj, "cuAccount", base.to_string, sub, context);
                base.parse_attribute (/<cim:DesignLocationCU.cuAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "cuAction", sub, context);
                base.parse_element (/<cim:DesignLocationCU.cuQuantity>([\s\S]*?)<\/cim:DesignLocationCU.cuQuantity>/g, obj, "cuQuantity", base.to_string, sub, context);
                base.parse_element (/<cim:DesignLocationCU.cuUsage>([\s\S]*?)<\/cim:DesignLocationCU.cuUsage>/g, obj, "cuUsage", base.to_string, sub, context);
                base.parse_element (/<cim:DesignLocationCU.removalDate>([\s\S]*?)<\/cim:DesignLocationCU.removalDate>/g, obj, "removalDate", base.to_string, sub, context);
                base.parse_element (/<cim:DesignLocationCU.status>([\s\S]*?)<\/cim:DesignLocationCU.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:DesignLocationCU.toBeEnergised>([\s\S]*?)<\/cim:DesignLocationCU.toBeEnergised>/g, obj, "toBeEnergised", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:DesignLocationCU.DesignLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocation", sub, context);
                base.parse_attributes (/<cim:DesignLocationCU.CompatibleUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                base.parse_attributes (/<cim:DesignLocationCU.CUGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUGroups", sub, context);
                base.parse_attributes (/<cim:DesignLocationCU.WorkTasks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attributes (/<cim:DesignLocationCU.Designs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Designs", sub, context);
                base.parse_attributes (/<cim:DesignLocationCU.ConditionFactors\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConditionFactors", sub, context);
                var bucket = context.parsed.DesignLocationCU;
                if (null == bucket)
                   context.parsed.DesignLocationCU = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "DesignLocationCU", "cuAccount", "cuAccount",  base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "cuAction", "cuAction",  base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "cuQuantity", "cuQuantity",  base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "cuUsage", "cuUsage",  base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "removalDate", "removalDate",  base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "status", "status",  base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "toBeEnergised", "toBeEnergised",  base.from_boolean, fields);
                base.export_attribute (obj, "DesignLocationCU", "DesignLocation", "DesignLocation", fields);
                base.export_attributes (obj, "DesignLocationCU", "CompatibleUnits", "CompatibleUnits", fields);
                base.export_attributes (obj, "DesignLocationCU", "CUGroups", "CUGroups", fields);
                base.export_attributes (obj, "DesignLocationCU", "WorkTasks", "WorkTasks", fields);
                base.export_attributes (obj, "DesignLocationCU", "Designs", "Designs", fields);
                base.export_attributes (obj, "DesignLocationCU", "ConditionFactors", "ConditionFactors", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DesignLocationCU_collapse" aria-expanded="true" aria-controls="DesignLocationCU_collapse" style="margin-left: 10px;">DesignLocationCU</a></legend>
                    <div id="DesignLocationCU_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#cuAccount}}<div><b>cuAccount</b>: {{cuAccount}}</div>{{/cuAccount}}
                    {{#cuAction}}<div><b>cuAction</b>: {{cuAction}}</div>{{/cuAction}}
                    {{#cuQuantity}}<div><b>cuQuantity</b>: {{cuQuantity}}</div>{{/cuQuantity}}
                    {{#cuUsage}}<div><b>cuUsage</b>: {{cuUsage}}</div>{{/cuUsage}}
                    {{#removalDate}}<div><b>removalDate</b>: {{removalDate}}</div>{{/removalDate}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#toBeEnergised}}<div><b>toBeEnergised</b>: {{toBeEnergised}}</div>{{/toBeEnergised}}
                    {{#DesignLocation}}<div><b>DesignLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DesignLocation}}&quot;);})'>{{DesignLocation}}</a></div>{{/DesignLocation}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CompatibleUnits}}
                    {{#CUGroups}}<div><b>CUGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CUGroups}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkTasks}}
                    {{#Designs}}<div><b>Designs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Designs}}
                    {{#ConditionFactors}}<div><b>ConditionFactors</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConditionFactors}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WorkActionKind = []; if (!obj.cuAction) obj.WorkActionKind.push ({ id: '', selected: true}); for (var property in WorkActionKind) obj.WorkActionKind.push ({ id: property, selected: obj.cuAction && obj.cuAction.endsWith ('.' + property)});
                if (obj.CompatibleUnits) obj.CompatibleUnits_string = obj.CompatibleUnits.join ();
                if (obj.CUGroups) obj.CUGroups_string = obj.CUGroups.join ();
                if (obj.WorkTasks) obj.WorkTasks_string = obj.WorkTasks.join ();
                if (obj.Designs) obj.Designs_string = obj.Designs.join ();
                if (obj.ConditionFactors) obj.ConditionFactors_string = obj.ConditionFactors.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkActionKind;
                delete obj.CompatibleUnits_string;
                delete obj.CUGroups_string;
                delete obj.WorkTasks_string;
                delete obj.Designs_string;
                delete obj.ConditionFactors_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DesignLocationCU_collapse" aria-expanded="true" aria-controls="DesignLocationCU_collapse" style="margin-left: 10px;">DesignLocationCU</a></legend>
                    <div id="DesignLocationCU_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cuAccount'>cuAccount: </label><div class='col-sm-8'><input id='cuAccount' class='form-control' type='text'{{#cuAccount}} value='{{cuAccount}}'{{/cuAccount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cuAction'>cuAction: </label><div class='col-sm-8'><select id='cuAction' class='form-control'>{{#WorkActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WorkActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cuQuantity'>cuQuantity: </label><div class='col-sm-8'><input id='cuQuantity' class='form-control' type='text'{{#cuQuantity}} value='{{cuQuantity}}'{{/cuQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cuUsage'>cuUsage: </label><div class='col-sm-8'><input id='cuUsage' class='form-control' type='text'{{#cuUsage}} value='{{cuUsage}}'{{/cuUsage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='removalDate'>removalDate: </label><div class='col-sm-8'><input id='removalDate' class='form-control' type='text'{{#removalDate}} value='{{removalDate}}'{{/removalDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='toBeEnergised'>toBeEnergised: </label><div class='col-sm-8'><input id='toBeEnergised' class='form-check-input' type='checkbox'{{#toBeEnergised}} checked{{/toBeEnergised}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DesignLocation'>DesignLocation: </label><div class='col-sm-8'><input id='DesignLocation' class='form-control' type='text'{{#DesignLocation}} value='{{DesignLocation}}'{{/DesignLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits}}_string'{{/CompatibleUnits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CUGroups'>CUGroups: </label><div class='col-sm-8'><input id='CUGroups' class='form-control' type='text'{{#CUGroups}} value='{{CUGroups}}_string'{{/CUGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkTasks'>WorkTasks: </label><div class='col-sm-8'><input id='WorkTasks' class='form-control' type='text'{{#WorkTasks}} value='{{WorkTasks}}_string'{{/WorkTasks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Designs'>Designs: </label><div class='col-sm-8'><input id='Designs' class='form-control' type='text'{{#Designs}} value='{{Designs}}_string'{{/Designs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConditionFactors'>ConditionFactors: </label><div class='col-sm-8'><input id='ConditionFactors' class='form-control' type='text'{{#ConditionFactors}} value='{{ConditionFactors}}_string'{{/ConditionFactors}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "DesignLocationCU" };
                super.submit (obj);
                temp = document.getElementById ("cuAccount").value; if ("" != temp) obj.cuAccount = temp;
                temp = document.getElementById ("cuAction").value; if ("" != temp) { temp = WorkActionKind[temp]; if ("undefined" != typeof (temp)) obj.cuAction = "#http://iec.ch/TC57/2013/CIM-schema-cim16#WorkActionKind." + temp; }
                temp = document.getElementById ("cuQuantity").value; if ("" != temp) obj.cuQuantity = temp;
                temp = document.getElementById ("cuUsage").value; if ("" != temp) obj.cuUsage = temp;
                temp = document.getElementById ("removalDate").value; if ("" != temp) obj.removalDate = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("toBeEnergised").checked; if (temp) obj.toBeEnergised = true;
                temp = document.getElementById ("DesignLocation").value; if ("" != temp) obj.DesignLocation = temp;
                temp = document.getElementById ("CompatibleUnits").value; if ("" != temp) obj.CompatibleUnits = temp.split (",");
                temp = document.getElementById ("CUGroups").value; if ("" != temp) obj.CUGroups = temp.split (",");
                temp = document.getElementById ("WorkTasks").value; if ("" != temp) obj.WorkTasks = temp.split (",");
                temp = document.getElementById ("Designs").value; if ("" != temp) obj.Designs = temp.split (",");
                temp = document.getElementById ("ConditionFactors").value; if ("" != temp) obj.ConditionFactors = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["DesignLocation", "DesignLocation", "0..1", "0..*"],
                        ["CompatibleUnits", "CompatibleUnit", "0..*", "0..*"],
                        ["CUGroups", "CUGroup", "0..*", "0..*"],
                        ["WorkTasks", "OldWorkTask", "0..*", "0..*"],
                        ["Designs", "Design", "0..*", "0..*"],
                        ["ConditionFactors", "ConditionFactor", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Various cost items that are not associated with compatible units.
         *
         * Examples include rental equipment, labor, materials, contractor costs, permits - anything not covered in a CU.
         *
         */
        class MiscCostItem extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MiscCostItem;
                if (null == bucket)
                   cim_data.MiscCostItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MiscCostItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MiscCostItem";
                base.parse_element (/<cim:MiscCostItem.account>([\s\S]*?)<\/cim:MiscCostItem.account>/g, obj, "account", base.to_string, sub, context);
                base.parse_element (/<cim:MiscCostItem.costPerUnit>([\s\S]*?)<\/cim:MiscCostItem.costPerUnit>/g, obj, "costPerUnit", base.to_string, sub, context);
                base.parse_element (/<cim:MiscCostItem.costType>([\s\S]*?)<\/cim:MiscCostItem.costType>/g, obj, "costType", base.to_string, sub, context);
                base.parse_element (/<cim:MiscCostItem.externalRefID>([\s\S]*?)<\/cim:MiscCostItem.externalRefID>/g, obj, "externalRefID", base.to_string, sub, context);
                base.parse_element (/<cim:MiscCostItem.quantity>([\s\S]*?)<\/cim:MiscCostItem.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:MiscCostItem.status>([\s\S]*?)<\/cim:MiscCostItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:MiscCostItem.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                base.parse_attribute (/<cim:MiscCostItem.DesignLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocation", sub, context);
                base.parse_attribute (/<cim:MiscCostItem.WorkCostDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context);
                var bucket = context.parsed.MiscCostItem;
                if (null == bucket)
                   context.parsed.MiscCostItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MiscCostItem", "account", "account",  base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "costPerUnit", "costPerUnit",  base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "costType", "costType",  base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "externalRefID", "externalRefID",  base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "quantity", "quantity",  base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "status", "status",  base.from_string, fields);
                base.export_attribute (obj, "MiscCostItem", "WorkTask", "WorkTask", fields);
                base.export_attribute (obj, "MiscCostItem", "DesignLocation", "DesignLocation", fields);
                base.export_attribute (obj, "MiscCostItem", "WorkCostDetail", "WorkCostDetail", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MiscCostItem_collapse" aria-expanded="true" aria-controls="MiscCostItem_collapse" style="margin-left: 10px;">MiscCostItem</a></legend>
                    <div id="MiscCostItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#account}}<div><b>account</b>: {{account}}</div>{{/account}}
                    {{#costPerUnit}}<div><b>costPerUnit</b>: {{costPerUnit}}</div>{{/costPerUnit}}
                    {{#costType}}<div><b>costType</b>: {{costType}}</div>{{/costType}}
                    {{#externalRefID}}<div><b>externalRefID</b>: {{externalRefID}}</div>{{/externalRefID}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkTask}}&quot;);})'>{{WorkTask}}</a></div>{{/WorkTask}}
                    {{#DesignLocation}}<div><b>DesignLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DesignLocation}}&quot;);})'>{{DesignLocation}}</a></div>{{/DesignLocation}}
                    {{#WorkCostDetail}}<div><b>WorkCostDetail</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkCostDetail}}&quot;);})'>{{WorkCostDetail}}</a></div>{{/WorkCostDetail}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MiscCostItem_collapse" aria-expanded="true" aria-controls="MiscCostItem_collapse" style="margin-left: 10px;">MiscCostItem</a></legend>
                    <div id="MiscCostItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='account'>account: </label><div class='col-sm-8'><input id='account' class='form-control' type='text'{{#account}} value='{{account}}'{{/account}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='costPerUnit'>costPerUnit: </label><div class='col-sm-8'><input id='costPerUnit' class='form-control' type='text'{{#costPerUnit}} value='{{costPerUnit}}'{{/costPerUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='costType'>costType: </label><div class='col-sm-8'><input id='costType' class='form-control' type='text'{{#costType}} value='{{costType}}'{{/costType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='externalRefID'>externalRefID: </label><div class='col-sm-8'><input id='externalRefID' class='form-control' type='text'{{#externalRefID}} value='{{externalRefID}}'{{/externalRefID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quantity'>quantity: </label><div class='col-sm-8'><input id='quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DesignLocation'>DesignLocation: </label><div class='col-sm-8'><input id='DesignLocation' class='form-control' type='text'{{#DesignLocation}} value='{{DesignLocation}}'{{/DesignLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkCostDetail'>WorkCostDetail: </label><div class='col-sm-8'><input id='WorkCostDetail' class='form-control' type='text'{{#WorkCostDetail}} value='{{WorkCostDetail}}'{{/WorkCostDetail}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MiscCostItem" };
                super.submit (obj);
                temp = document.getElementById ("account").value; if ("" != temp) obj.account = temp;
                temp = document.getElementById ("costPerUnit").value; if ("" != temp) obj.costPerUnit = temp;
                temp = document.getElementById ("costType").value; if ("" != temp) obj.costType = temp;
                temp = document.getElementById ("externalRefID").value; if ("" != temp) obj.externalRefID = temp;
                temp = document.getElementById ("quantity").value; if ("" != temp) obj.quantity = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("WorkTask").value; if ("" != temp) obj.WorkTask = temp;
                temp = document.getElementById ("DesignLocation").value; if ("" != temp) obj.DesignLocation = temp;
                temp = document.getElementById ("WorkCostDetail").value; if ("" != temp) obj.WorkCostDetail = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["WorkTask", "OldWorkTask", "0..1", "0..*"],
                        ["DesignLocation", "DesignLocation", "0..1", "0..*"],
                        ["WorkCostDetail", "WorkCostDetail", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Compatible unit contractor item.
         *
         */
        class CUContractorItem extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CUContractorItem;
                if (null == bucket)
                   cim_data.CUContractorItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CUContractorItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CUContractorItem";
                base.parse_element (/<cim:CUContractorItem.activityCode>([\s\S]*?)<\/cim:CUContractorItem.activityCode>/g, obj, "activityCode", base.to_string, sub, context);
                base.parse_element (/<cim:CUContractorItem.bidAmount>([\s\S]*?)<\/cim:CUContractorItem.bidAmount>/g, obj, "bidAmount", base.to_string, sub, context);
                base.parse_element (/<cim:CUContractorItem.status>([\s\S]*?)<\/cim:CUContractorItem.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:CUContractorItem.CompatibleUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                var bucket = context.parsed.CUContractorItem;
                if (null == bucket)
                   context.parsed.CUContractorItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CUContractorItem", "activityCode", "activityCode",  base.from_string, fields);
                base.export_element (obj, "CUContractorItem", "bidAmount", "bidAmount",  base.from_string, fields);
                base.export_element (obj, "CUContractorItem", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "CUContractorItem", "CompatibleUnits", "CompatibleUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CUContractorItem_collapse" aria-expanded="true" aria-controls="CUContractorItem_collapse" style="margin-left: 10px;">CUContractorItem</a></legend>
                    <div id="CUContractorItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#activityCode}}<div><b>activityCode</b>: {{activityCode}}</div>{{/activityCode}}
                    {{#bidAmount}}<div><b>bidAmount</b>: {{bidAmount}}</div>{{/bidAmount}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CompatibleUnits}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CompatibleUnits) obj.CompatibleUnits_string = obj.CompatibleUnits.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CompatibleUnits_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CUContractorItem_collapse" aria-expanded="true" aria-controls="CUContractorItem_collapse" style="margin-left: 10px;">CUContractorItem</a></legend>
                    <div id="CUContractorItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='activityCode'>activityCode: </label><div class='col-sm-8'><input id='activityCode' class='form-control' type='text'{{#activityCode}} value='{{activityCode}}'{{/activityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bidAmount'>bidAmount: </label><div class='col-sm-8'><input id='bidAmount' class='form-control' type='text'{{#bidAmount}} value='{{bidAmount}}'{{/bidAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits}}_string'{{/CompatibleUnits}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CUContractorItem" };
                super.submit (obj);
                temp = document.getElementById ("activityCode").value; if ("" != temp) obj.activityCode = temp;
                temp = document.getElementById ("bidAmount").value; if ("" != temp) obj.bidAmount = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("CompatibleUnits").value; if ("" != temp) obj.CompatibleUnits = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CompatibleUnits", "CompatibleUnit", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Compatible unit for various types of assets such as transformers switches, substation fences, poles, etc..
         *
         */
        class CUAsset extends WorkIdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CUAsset;
                if (null == bucket)
                   cim_data.CUAsset = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CUAsset[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CUAsset";
                base.parse_element (/<cim:CUAsset.quantity>([\s\S]*?)<\/cim:CUAsset.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:CUAsset.status>([\s\S]*?)<\/cim:CUAsset.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:CUAsset.typeAssetCode>([\s\S]*?)<\/cim:CUAsset.typeAssetCode>/g, obj, "typeAssetCode", base.to_string, sub, context);
                base.parse_attributes (/<cim:CUAsset.CompatibleUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                base.parse_attribute (/<cim:CUAsset.TypeAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context);
                var bucket = context.parsed.CUAsset;
                if (null == bucket)
                   context.parsed.CUAsset = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CUAsset", "quantity", "quantity",  base.from_string, fields);
                base.export_element (obj, "CUAsset", "status", "status",  base.from_string, fields);
                base.export_element (obj, "CUAsset", "typeAssetCode", "typeAssetCode",  base.from_string, fields);
                base.export_attributes (obj, "CUAsset", "CompatibleUnits", "CompatibleUnits", fields);
                base.export_attribute (obj, "CUAsset", "TypeAsset", "TypeAsset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CUAsset_collapse" aria-expanded="true" aria-controls="CUAsset_collapse" style="margin-left: 10px;">CUAsset</a></legend>
                    <div id="CUAsset_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#typeAssetCode}}<div><b>typeAssetCode</b>: {{typeAssetCode}}</div>{{/typeAssetCode}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CompatibleUnits}}
                    {{#TypeAsset}}<div><b>TypeAsset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TypeAsset}}&quot;);})'>{{TypeAsset}}</a></div>{{/TypeAsset}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CompatibleUnits) obj.CompatibleUnits_string = obj.CompatibleUnits.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CompatibleUnits_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CUAsset_collapse" aria-expanded="true" aria-controls="CUAsset_collapse" style="margin-left: 10px;">CUAsset</a></legend>
                    <div id="CUAsset_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quantity'>quantity: </label><div class='col-sm-8'><input id='quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='typeAssetCode'>typeAssetCode: </label><div class='col-sm-8'><input id='typeAssetCode' class='form-control' type='text'{{#typeAssetCode}} value='{{typeAssetCode}}'{{/typeAssetCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits}}_string'{{/CompatibleUnits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TypeAsset'>TypeAsset: </label><div class='col-sm-8'><input id='TypeAsset' class='form-control' type='text'{{#TypeAsset}} value='{{TypeAsset}}'{{/TypeAsset}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CUAsset" };
                super.submit (obj);
                temp = document.getElementById ("quantity").value; if ("" != temp) obj.quantity = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("typeAssetCode").value; if ("" != temp) obj.typeAssetCode = temp;
                temp = document.getElementById ("CompatibleUnits").value; if ("" != temp) obj.CompatibleUnits = temp.split (",");
                temp = document.getElementById ("TypeAsset").value; if ("" != temp) obj.TypeAsset = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CompatibleUnits", "CompatibleUnit", "0..*", "0..*"],
                        ["TypeAsset", "GenericAssetModelOrMaterial", "0..1", "0..1"]
                    ]
                );
            }
        }

        return (
            {
                Usage: Usage,
                WorkIdentifiedObject: WorkIdentifiedObject,
                ContractorItem: ContractorItem,
                ShiftPattern: ShiftPattern,
                MiscCostItem: MiscCostItem,
                LaborItem: LaborItem,
                Assignment: Assignment,
                Design: Design,
                InfoQuestion: InfoQuestion,
                Capability: Capability,
                CUMaterialItem: CUMaterialItem,
                WorkDocument: WorkDocument,
                WorkStatusEntry: WorkStatusEntry,
                CompatibleUnit: CompatibleUnit,
                NonStandardItem: NonStandardItem,
                WorkCostSummary: WorkCostSummary,
                CULaborItem: CULaborItem,
                ConditionFactor: ConditionFactor,
                Regulation: Regulation,
                CUAsset: CUAsset,
                CULaborCode: CULaborCode,
                OldWorkTask: OldWorkTask,
                CUContractorItem: CUContractorItem,
                AccessPermit: AccessPermit,
                BusinessCase: BusinessCase,
                CUAllowableAction: CUAllowableAction,
                Project: Project,
                CUWorkEquipmentItem: CUWorkEquipmentItem,
                DesignLocationCU: DesignLocationCU,
                DesignLocation: DesignLocation,
                CUGroup: CUGroup,
                WorkCostDetail: WorkCostDetail,
                PropertyUnit: PropertyUnit,
                OverheadCost: OverheadCost,
                WorkFlowStep: WorkFlowStep,
                OneCallRequest: OneCallRequest,
                QualificationRequirement: QualificationRequirement,
                CostType: CostType,
                TypeMaterial: TypeMaterial
            }
        );
    }
);