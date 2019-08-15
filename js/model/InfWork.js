define
(
    ["model/base", "model/Common", "model/Core", "model/Work"],
    /**
     * The package covers all types of work, including inspection, maintenance, repair, restoration, and construction.
     *
     * It covers the full life cycle including request, initiate, track and record work. Standardized designs (compatible units) are used where possible.
     * 
     * TODO: The following has been copied from a very old version of draft Part 11, so the references are wrong, but we store the knowledge here to reuse later:
     * "The Work package is used to define classes related to work. There are several different aspects of work.
     * The Work Initiation (Work, Project, Request).
     * The Work Design package is used for managing designs (CompatibleUnit, Design, DesignLocation, WorkTask).
     * The Work Schedule package is used for the scheduling and coordination of work (AccessPermit, MaterialItem, OneCallRequest, Regulation).
     * The Work Closing package is used for tracking costs of work (CostType, LaborItem, WorkCostDetail, VehicleItem).
     * The Work Standards package is used for the definition of compatible units (CULaborItem, CUVehicleItem, CUGroup).
     * This package is used for inspection and maintenance (InspectionDataSet, Procedure).
     * The WorkService package defines Appointment class".
     *
     */
    function (base, Common, Core, Work)
    {

        /**
         * Kinds of activities to be performed on a Compatible Unit.
         *
         */
        let WorkActionKind =
        {
            "install": "install",
            "remove": "remove",
            "abandon": "abandon",
            "transfer": "transfer"
        };
        Object.freeze (WorkActionKind);

        /**
         * Kind of condition factor.
         *
         */
        let ConditionFactorKind =
        {
            "labor": "labor",
            "accountAllocation": "accountAllocation",
            "material": "material",
            "travel": "travel",
            "other": "other"
        };
        Object.freeze (ConditionFactorKind);

        /**
         * Kind of design.
         *
         */
        let DesignKind =
        {
            "estimated": "estimated",
            "asBuilt": "asBuilt",
            "other": "other"
        };
        Object.freeze (DesignKind);

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
                let bucket = cim_data.WorkDocument;
                if (null == bucket)
                   cim_data.WorkDocument = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkDocument[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "WorkDocument";
                let bucket = context.parsed.WorkDocument;
                if (null == bucket)
                   context.parsed.WorkDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkDocument_collapse" aria-expanded="true" aria-controls="WorkDocument_collapse" style="margin-left: 10px;">WorkDocument</a></legend>
                    <div id="WorkDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkDocument_collapse" aria-expanded="true" aria-controls="{{id}}_WorkDocument_collapse" style="margin-left: 10px;">WorkDocument</a></legend>
                    <div id="{{id}}_WorkDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "WorkDocument" };
                super.submit (id, obj);

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
                let bucket = cim_data.WorkIdentifiedObject;
                if (null == bucket)
                   cim_data.WorkIdentifiedObject = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkIdentifiedObject[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WorkIdentifiedObject";
                let bucket = context.parsed.WorkIdentifiedObject;
                if (null == bucket)
                   context.parsed.WorkIdentifiedObject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkIdentifiedObject_collapse" aria-expanded="true" aria-controls="WorkIdentifiedObject_collapse" style="margin-left: 10px;">WorkIdentifiedObject</a></legend>
                    <div id="WorkIdentifiedObject_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkIdentifiedObject_collapse" aria-expanded="true" aria-controls="{{id}}_WorkIdentifiedObject_collapse" style="margin-left: 10px;">WorkIdentifiedObject</a></legend>
                    <div id="{{id}}_WorkIdentifiedObject_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "WorkIdentifiedObject" };
                super.submit (id, obj);

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
                let bucket = cim_data.OldWorkTask;
                if (null == bucket)
                   cim_data.OldWorkTask = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OldWorkTask[obj.id];
            }

            parse (context, sub)
            {
                let obj = Work.WorkTask.prototype.parse.call (this, context, sub);
                obj.cls = "OldWorkTask";
                base.parse_attributes (/<cim:OldWorkTask.QualificationRequirements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "QualificationRequirements", sub, context);
                base.parse_attribute (/<cim:OldWorkTask.Design\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context);
                base.parse_attribute (/<cim:OldWorkTask.WorkFlowStep\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkFlowStep", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.DesignLocationCUs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocationCUs", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.WorkCostDetails\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.LaborItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LaborItems", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.ContractorItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ContractorItems", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.MiscCostItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MiscCostItems", sub, context);
                base.parse_attribute (/<cim:OldWorkTask.OverheadCost\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OverheadCost", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.Usages\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Usages", sub, context);
                base.parse_attributes (/<cim:OldWorkTask.Capabilities\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Capabilities", sub, context);
                let bucket = context.parsed.OldWorkTask;
                if (null == bucket)
                   context.parsed.OldWorkTask = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Work.WorkTask.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "OldWorkTask", "QualificationRequirements", "QualificationRequirements", fields);
                base.export_attribute (obj, "OldWorkTask", "Design", "Design", fields);
                base.export_attribute (obj, "OldWorkTask", "WorkFlowStep", "WorkFlowStep", fields);
                base.export_attributes (obj, "OldWorkTask", "DesignLocationCUs", "DesignLocationCUs", fields);
                base.export_attributes (obj, "OldWorkTask", "WorkCostDetails", "WorkCostDetails", fields);
                base.export_attributes (obj, "OldWorkTask", "LaborItems", "LaborItems", fields);
                base.export_attributes (obj, "OldWorkTask", "ContractorItems", "ContractorItems", fields);
                base.export_attributes (obj, "OldWorkTask", "MiscCostItems", "MiscCostItems", fields);
                base.export_attribute (obj, "OldWorkTask", "OverheadCost", "OverheadCost", fields);
                base.export_attributes (obj, "OldWorkTask", "Usages", "Usages", fields);
                base.export_attributes (obj, "OldWorkTask", "Capabilities", "Capabilities", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OldWorkTask_collapse" aria-expanded="true" aria-controls="OldWorkTask_collapse" style="margin-left: 10px;">OldWorkTask</a></legend>
                    <div id="OldWorkTask_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Work.WorkTask.prototype.template.call (this) +
                    `
                    {{#QualificationRequirements}}<div><b>QualificationRequirements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/QualificationRequirements}}
                    {{#Design}}<div><b>Design</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Design}}");}); return false;'>{{Design}}</a></div>{{/Design}}
                    {{#WorkFlowStep}}<div><b>WorkFlowStep</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkFlowStep}}");}); return false;'>{{WorkFlowStep}}</a></div>{{/WorkFlowStep}}
                    {{#DesignLocationCUs}}<div><b>DesignLocationCUs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DesignLocationCUs}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkCostDetails}}
                    {{#LaborItems}}<div><b>LaborItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LaborItems}}
                    {{#ContractorItems}}<div><b>ContractorItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ContractorItems}}
                    {{#MiscCostItems}}<div><b>MiscCostItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MiscCostItems}}
                    {{#OverheadCost}}<div><b>OverheadCost</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OverheadCost}}");}); return false;'>{{OverheadCost}}</a></div>{{/OverheadCost}}
                    {{#Usages}}<div><b>Usages</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Usages}}
                    {{#Capabilities}}<div><b>Capabilities</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Capabilities}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["QualificationRequirements"]) obj["QualificationRequirements_string"] = obj["QualificationRequirements"].join ();
                if (obj["DesignLocationCUs"]) obj["DesignLocationCUs_string"] = obj["DesignLocationCUs"].join ();
                if (obj["WorkCostDetails"]) obj["WorkCostDetails_string"] = obj["WorkCostDetails"].join ();
                if (obj["LaborItems"]) obj["LaborItems_string"] = obj["LaborItems"].join ();
                if (obj["ContractorItems"]) obj["ContractorItems_string"] = obj["ContractorItems"].join ();
                if (obj["MiscCostItems"]) obj["MiscCostItems_string"] = obj["MiscCostItems"].join ();
                if (obj["Usages"]) obj["Usages_string"] = obj["Usages"].join ();
                if (obj["Capabilities"]) obj["Capabilities_string"] = obj["Capabilities"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["QualificationRequirements_string"];
                delete obj["DesignLocationCUs_string"];
                delete obj["WorkCostDetails_string"];
                delete obj["LaborItems_string"];
                delete obj["ContractorItems_string"];
                delete obj["MiscCostItems_string"];
                delete obj["Usages_string"];
                delete obj["Capabilities_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OldWorkTask_collapse" aria-expanded="true" aria-controls="{{id}}_OldWorkTask_collapse" style="margin-left: 10px;">OldWorkTask</a></legend>
                    <div id="{{id}}_OldWorkTask_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Work.WorkTask.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_QualificationRequirements'>QualificationRequirements: </label><div class='col-sm-8'><input id='{{id}}_QualificationRequirements' class='form-control' type='text'{{#QualificationRequirements}} value='{{QualificationRequirements_string}}'{{/QualificationRequirements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Design'>Design: </label><div class='col-sm-8'><input id='{{id}}_Design' class='form-control' type='text'{{#Design}} value='{{Design}}'{{/Design}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkFlowStep'>WorkFlowStep: </label><div class='col-sm-8'><input id='{{id}}_WorkFlowStep' class='form-control' type='text'{{#WorkFlowStep}} value='{{WorkFlowStep}}'{{/WorkFlowStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DesignLocationCUs'>DesignLocationCUs: </label><div class='col-sm-8'><input id='{{id}}_DesignLocationCUs' class='form-control' type='text'{{#DesignLocationCUs}} value='{{DesignLocationCUs_string}}'{{/DesignLocationCUs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OverheadCost'>OverheadCost: </label><div class='col-sm-8'><input id='{{id}}_OverheadCost' class='form-control' type='text'{{#OverheadCost}} value='{{OverheadCost}}'{{/OverheadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Capabilities'>Capabilities: </label><div class='col-sm-8'><input id='{{id}}_Capabilities' class='form-control' type='text'{{#Capabilities}} value='{{Capabilities_string}}'{{/Capabilities}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OldWorkTask" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_QualificationRequirements").value; if ("" !== temp) obj["QualificationRequirements"] = temp.split (",");
                temp = document.getElementById (id + "_Design").value; if ("" !== temp) obj["Design"] = temp;
                temp = document.getElementById (id + "_WorkFlowStep").value; if ("" !== temp) obj["WorkFlowStep"] = temp;
                temp = document.getElementById (id + "_DesignLocationCUs").value; if ("" !== temp) obj["DesignLocationCUs"] = temp.split (",");
                temp = document.getElementById (id + "_OverheadCost").value; if ("" !== temp) obj["OverheadCost"] = temp;
                temp = document.getElementById (id + "_Capabilities").value; if ("" !== temp) obj["Capabilities"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["QualificationRequirements", "0..*", "0..*", "QualificationRequirement", "WorkTasks"],
                            ["Design", "0..1", "0..*", "Design", "WorkTasks"],
                            ["WorkFlowStep", "0..1", "0..*", "WorkFlowStep", "WorkTasks"],
                            ["DesignLocationCUs", "0..*", "0..*", "DesignLocationCU", "WorkTasks"],
                            ["WorkCostDetails", "0..*", "0..1", "WorkCostDetail", "WorkTask"],
                            ["LaborItems", "0..*", "0..1", "LaborItem", "WorkTask"],
                            ["ContractorItems", "0..*", "0..1", "ContractorItem", "WorkTask"],
                            ["MiscCostItems", "0..*", "0..1", "MiscCostItem", "WorkTask"],
                            ["OverheadCost", "0..1", "0..*", "OverheadCost", "WorkTasks"],
                            ["Usages", "0..*", "0..1", "Usage", "WorkTask"],
                            ["Capabilities", "0..*", "0..*", "Capability", "WorkTasks"]
                        ]
                    )
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
                let bucket = cim_data.Regulation;
                if (null == bucket)
                   cim_data.Regulation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Regulation[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "Regulation";
                base.parse_element (/<cim:Regulation.referenceNumber>([\s\S]*?)<\/cim:Regulation.referenceNumber>/g, obj, "referenceNumber", base.to_string, sub, context);
                let bucket = context.parsed.Regulation;
                if (null == bucket)
                   context.parsed.Regulation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "Regulation", "referenceNumber", "referenceNumber",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Regulation_collapse" aria-expanded="true" aria-controls="Regulation_collapse" style="margin-left: 10px;">Regulation</a></legend>
                    <div id="Regulation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#referenceNumber}}<div><b>referenceNumber</b>: {{referenceNumber}}</div>{{/referenceNumber}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Regulation_collapse" aria-expanded="true" aria-controls="{{id}}_Regulation_collapse" style="margin-left: 10px;">Regulation</a></legend>
                    <div id="{{id}}_Regulation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_referenceNumber'>referenceNumber: </label><div class='col-sm-8'><input id='{{id}}_referenceNumber' class='form-control' type='text'{{#referenceNumber}} value='{{referenceNumber}}'{{/referenceNumber}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Regulation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_referenceNumber").value; if ("" !== temp) obj["referenceNumber"] = temp;

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
                let bucket = cim_data.Assignment;
                if (null == bucket)
                   cim_data.Assignment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Assignment[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "Assignment";
                base.parse_attribute (/<cim:Assignment.effectivePeriod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "effectivePeriod", sub, context);
                base.parse_attributes (/<cim:Assignment.Crews\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Crews", sub, context);
                let bucket = context.parsed.Assignment;
                if (null == bucket)
                   context.parsed.Assignment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Assignment", "effectivePeriod", "effectivePeriod", fields);
                base.export_attributes (obj, "Assignment", "Crews", "Crews", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Assignment_collapse" aria-expanded="true" aria-controls="Assignment_collapse" style="margin-left: 10px;">Assignment</a></legend>
                    <div id="Assignment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#effectivePeriod}}<div><b>effectivePeriod</b>: {{effectivePeriod}}</div>{{/effectivePeriod}}
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Crews}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Crews"]) obj["Crews_string"] = obj["Crews"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Crews_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Assignment_collapse" aria-expanded="true" aria-controls="{{id}}_Assignment_collapse" style="margin-left: 10px;">Assignment</a></legend>
                    <div id="{{id}}_Assignment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effectivePeriod'>effectivePeriod: </label><div class='col-sm-8'><input id='{{id}}_effectivePeriod' class='form-control' type='text'{{#effectivePeriod}} value='{{effectivePeriod}}'{{/effectivePeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crews'>Crews: </label><div class='col-sm-8'><input id='{{id}}_Crews' class='form-control' type='text'{{#Crews}} value='{{Crews_string}}'{{/Crews}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Assignment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_effectivePeriod").value; if ("" !== temp) obj["effectivePeriod"] = temp;
                temp = document.getElementById (id + "_Crews").value; if ("" !== temp) obj["Crews"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Crews", "0..*", "0..*", "OldCrew", "Assignments"]
                        ]
                    )
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
                let bucket = cim_data.NonStandardItem;
                if (null == bucket)
                   cim_data.NonStandardItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NonStandardItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "NonStandardItem";
                base.parse_element (/<cim:NonStandardItem.amount>([\s\S]*?)<\/cim:NonStandardItem.amount>/g, obj, "amount", base.to_string, sub, context);
                let bucket = context.parsed.NonStandardItem;
                if (null == bucket)
                   context.parsed.NonStandardItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "NonStandardItem", "amount", "amount",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NonStandardItem_collapse" aria-expanded="true" aria-controls="NonStandardItem_collapse" style="margin-left: 10px;">NonStandardItem</a></legend>
                    <div id="NonStandardItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NonStandardItem_collapse" aria-expanded="true" aria-controls="{{id}}_NonStandardItem_collapse" style="margin-left: 10px;">NonStandardItem</a></legend>
                    <div id="{{id}}_NonStandardItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amount'>amount: </label><div class='col-sm-8'><input id='{{id}}_amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "NonStandardItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_amount").value; if ("" !== temp) obj["amount"] = temp;

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
                let bucket = cim_data.OneCallRequest;
                if (null == bucket)
                   cim_data.OneCallRequest = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OneCallRequest[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "OneCallRequest";
                base.parse_element (/<cim:OneCallRequest.markedIndicator>([\s\S]*?)<\/cim:OneCallRequest.markedIndicator>/g, obj, "markedIndicator", base.to_boolean, sub, context);
                base.parse_element (/<cim:OneCallRequest.explosivesUsed>([\s\S]*?)<\/cim:OneCallRequest.explosivesUsed>/g, obj, "explosivesUsed", base.to_boolean, sub, context);
                base.parse_element (/<cim:OneCallRequest.markingInstruction>([\s\S]*?)<\/cim:OneCallRequest.markingInstruction>/g, obj, "markingInstruction", base.to_string, sub, context);
                base.parse_attributes (/<cim:OneCallRequest.WorkLocations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkLocations", sub, context);
                let bucket = context.parsed.OneCallRequest;
                if (null == bucket)
                   context.parsed.OneCallRequest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "OneCallRequest", "markedIndicator", "markedIndicator",  base.from_boolean, fields);
                base.export_element (obj, "OneCallRequest", "explosivesUsed", "explosivesUsed",  base.from_boolean, fields);
                base.export_element (obj, "OneCallRequest", "markingInstruction", "markingInstruction",  base.from_string, fields);
                base.export_attributes (obj, "OneCallRequest", "WorkLocations", "WorkLocations", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OneCallRequest_collapse" aria-expanded="true" aria-controls="OneCallRequest_collapse" style="margin-left: 10px;">OneCallRequest</a></legend>
                    <div id="OneCallRequest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#markedIndicator}}<div><b>markedIndicator</b>: {{markedIndicator}}</div>{{/markedIndicator}}
                    {{#explosivesUsed}}<div><b>explosivesUsed</b>: {{explosivesUsed}}</div>{{/explosivesUsed}}
                    {{#markingInstruction}}<div><b>markingInstruction</b>: {{markingInstruction}}</div>{{/markingInstruction}}
                    {{#WorkLocations}}<div><b>WorkLocations</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkLocations}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["WorkLocations"]) obj["WorkLocations_string"] = obj["WorkLocations"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["WorkLocations_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OneCallRequest_collapse" aria-expanded="true" aria-controls="{{id}}_OneCallRequest_collapse" style="margin-left: 10px;">OneCallRequest</a></legend>
                    <div id="{{id}}_OneCallRequest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_markedIndicator'>markedIndicator: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_markedIndicator' class='form-check-input' type='checkbox'{{#markedIndicator}} checked{{/markedIndicator}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_explosivesUsed'>explosivesUsed: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_explosivesUsed' class='form-check-input' type='checkbox'{{#explosivesUsed}} checked{{/explosivesUsed}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_markingInstruction'>markingInstruction: </label><div class='col-sm-8'><input id='{{id}}_markingInstruction' class='form-control' type='text'{{#markingInstruction}} value='{{markingInstruction}}'{{/markingInstruction}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OneCallRequest" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_markedIndicator").checked; if (temp) obj["markedIndicator"] = true;
                temp = document.getElementById (id + "_explosivesUsed").checked; if (temp) obj["explosivesUsed"] = true;
                temp = document.getElementById (id + "_markingInstruction").value; if ("" !== temp) obj["markingInstruction"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkLocations", "0..*", "0..1", "WorkLocation", "OneCallRequest"]
                        ]
                    )
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
                let bucket = cim_data.CompatibleUnit;
                if (null == bucket)
                   cim_data.CompatibleUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CompatibleUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "CompatibleUnit";
                base.parse_element (/<cim:CompatibleUnit.quantity>([\s\S]*?)<\/cim:CompatibleUnit.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:CompatibleUnit.estCost>([\s\S]*?)<\/cim:CompatibleUnit.estCost>/g, obj, "estCost", base.to_string, sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.CUMaterialItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CUMaterialItems", sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.CUContractorItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CUContractorItems", sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.CUWorkEquipmentItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CUWorkEquipmentItems", sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.CULaborItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CULaborItems", sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.Procedures\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Procedures", sub, context);
                base.parse_attribute (/<cim:CompatibleUnit.PropertyUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PropertyUnit", sub, context);
                base.parse_attribute (/<cim:CompatibleUnit.CostType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CostType", sub, context);
                base.parse_attributes (/<cim:CompatibleUnit.DesignLocationCUs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocationCUs", sub, context);
                base.parse_attribute (/<cim:CompatibleUnit.CUAllowableAction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CUAllowableAction", sub, context);
                base.parse_attribute (/<cim:CompatibleUnit.CUGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CUGroup", sub, context);
                base.parse_attribute (/<cim:CompatibleUnit.GenericAssetModel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GenericAssetModel", sub, context);
                let bucket = context.parsed.CompatibleUnit;
                if (null == bucket)
                   context.parsed.CompatibleUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "CompatibleUnit", "quantity", "quantity",  base.from_string, fields);
                base.export_element (obj, "CompatibleUnit", "estCost", "estCost",  base.from_string, fields);
                base.export_attributes (obj, "CompatibleUnit", "CUMaterialItems", "CUMaterialItems", fields);
                base.export_attributes (obj, "CompatibleUnit", "CUContractorItems", "CUContractorItems", fields);
                base.export_attributes (obj, "CompatibleUnit", "CUWorkEquipmentItems", "CUWorkEquipmentItems", fields);
                base.export_attributes (obj, "CompatibleUnit", "CULaborItems", "CULaborItems", fields);
                base.export_attributes (obj, "CompatibleUnit", "Procedures", "Procedures", fields);
                base.export_attribute (obj, "CompatibleUnit", "PropertyUnit", "PropertyUnit", fields);
                base.export_attribute (obj, "CompatibleUnit", "CostType", "CostType", fields);
                base.export_attributes (obj, "CompatibleUnit", "DesignLocationCUs", "DesignLocationCUs", fields);
                base.export_attribute (obj, "CompatibleUnit", "CUAllowableAction", "CUAllowableAction", fields);
                base.export_attribute (obj, "CompatibleUnit", "CUGroup", "CUGroup", fields);
                base.export_attribute (obj, "CompatibleUnit", "GenericAssetModel", "GenericAssetModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CompatibleUnit_collapse" aria-expanded="true" aria-controls="CompatibleUnit_collapse" style="margin-left: 10px;">CompatibleUnit</a></legend>
                    <div id="CompatibleUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#estCost}}<div><b>estCost</b>: {{estCost}}</div>{{/estCost}}
                    {{#CUMaterialItems}}<div><b>CUMaterialItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CUMaterialItems}}
                    {{#CUContractorItems}}<div><b>CUContractorItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CUContractorItems}}
                    {{#CUWorkEquipmentItems}}<div><b>CUWorkEquipmentItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CUWorkEquipmentItems}}
                    {{#CULaborItems}}<div><b>CULaborItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CULaborItems}}
                    {{#Procedures}}<div><b>Procedures</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Procedures}}
                    {{#PropertyUnit}}<div><b>PropertyUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PropertyUnit}}");}); return false;'>{{PropertyUnit}}</a></div>{{/PropertyUnit}}
                    {{#CostType}}<div><b>CostType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CostType}}");}); return false;'>{{CostType}}</a></div>{{/CostType}}
                    {{#DesignLocationCUs}}<div><b>DesignLocationCUs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DesignLocationCUs}}
                    {{#CUAllowableAction}}<div><b>CUAllowableAction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CUAllowableAction}}");}); return false;'>{{CUAllowableAction}}</a></div>{{/CUAllowableAction}}
                    {{#CUGroup}}<div><b>CUGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CUGroup}}");}); return false;'>{{CUGroup}}</a></div>{{/CUGroup}}
                    {{#GenericAssetModel}}<div><b>GenericAssetModel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GenericAssetModel}}");}); return false;'>{{GenericAssetModel}}</a></div>{{/GenericAssetModel}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CUMaterialItems"]) obj["CUMaterialItems_string"] = obj["CUMaterialItems"].join ();
                if (obj["CUContractorItems"]) obj["CUContractorItems_string"] = obj["CUContractorItems"].join ();
                if (obj["CUWorkEquipmentItems"]) obj["CUWorkEquipmentItems_string"] = obj["CUWorkEquipmentItems"].join ();
                if (obj["CULaborItems"]) obj["CULaborItems_string"] = obj["CULaborItems"].join ();
                if (obj["Procedures"]) obj["Procedures_string"] = obj["Procedures"].join ();
                if (obj["DesignLocationCUs"]) obj["DesignLocationCUs_string"] = obj["DesignLocationCUs"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CUMaterialItems_string"];
                delete obj["CUContractorItems_string"];
                delete obj["CUWorkEquipmentItems_string"];
                delete obj["CULaborItems_string"];
                delete obj["Procedures_string"];
                delete obj["DesignLocationCUs_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CompatibleUnit_collapse" aria-expanded="true" aria-controls="{{id}}_CompatibleUnit_collapse" style="margin-left: 10px;">CompatibleUnit</a></legend>
                    <div id="{{id}}_CompatibleUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><input id='{{id}}_quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_estCost'>estCost: </label><div class='col-sm-8'><input id='{{id}}_estCost' class='form-control' type='text'{{#estCost}} value='{{estCost}}'{{/estCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CUMaterialItems'>CUMaterialItems: </label><div class='col-sm-8'><input id='{{id}}_CUMaterialItems' class='form-control' type='text'{{#CUMaterialItems}} value='{{CUMaterialItems_string}}'{{/CUMaterialItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CUContractorItems'>CUContractorItems: </label><div class='col-sm-8'><input id='{{id}}_CUContractorItems' class='form-control' type='text'{{#CUContractorItems}} value='{{CUContractorItems_string}}'{{/CUContractorItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CUWorkEquipmentItems'>CUWorkEquipmentItems: </label><div class='col-sm-8'><input id='{{id}}_CUWorkEquipmentItems' class='form-control' type='text'{{#CUWorkEquipmentItems}} value='{{CUWorkEquipmentItems_string}}'{{/CUWorkEquipmentItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CULaborItems'>CULaborItems: </label><div class='col-sm-8'><input id='{{id}}_CULaborItems' class='form-control' type='text'{{#CULaborItems}} value='{{CULaborItems_string}}'{{/CULaborItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Procedures'>Procedures: </label><div class='col-sm-8'><input id='{{id}}_Procedures' class='form-control' type='text'{{#Procedures}} value='{{Procedures_string}}'{{/Procedures}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PropertyUnit'>PropertyUnit: </label><div class='col-sm-8'><input id='{{id}}_PropertyUnit' class='form-control' type='text'{{#PropertyUnit}} value='{{PropertyUnit}}'{{/PropertyUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CostType'>CostType: </label><div class='col-sm-8'><input id='{{id}}_CostType' class='form-control' type='text'{{#CostType}} value='{{CostType}}'{{/CostType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DesignLocationCUs'>DesignLocationCUs: </label><div class='col-sm-8'><input id='{{id}}_DesignLocationCUs' class='form-control' type='text'{{#DesignLocationCUs}} value='{{DesignLocationCUs_string}}'{{/DesignLocationCUs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CUAllowableAction'>CUAllowableAction: </label><div class='col-sm-8'><input id='{{id}}_CUAllowableAction' class='form-control' type='text'{{#CUAllowableAction}} value='{{CUAllowableAction}}'{{/CUAllowableAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CUGroup'>CUGroup: </label><div class='col-sm-8'><input id='{{id}}_CUGroup' class='form-control' type='text'{{#CUGroup}} value='{{CUGroup}}'{{/CUGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GenericAssetModel'>GenericAssetModel: </label><div class='col-sm-8'><input id='{{id}}_GenericAssetModel' class='form-control' type='text'{{#GenericAssetModel}} value='{{GenericAssetModel}}'{{/GenericAssetModel}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CompatibleUnit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_quantity").value; if ("" !== temp) obj["quantity"] = temp;
                temp = document.getElementById (id + "_estCost").value; if ("" !== temp) obj["estCost"] = temp;
                temp = document.getElementById (id + "_CUMaterialItems").value; if ("" !== temp) obj["CUMaterialItems"] = temp.split (",");
                temp = document.getElementById (id + "_CUContractorItems").value; if ("" !== temp) obj["CUContractorItems"] = temp.split (",");
                temp = document.getElementById (id + "_CUWorkEquipmentItems").value; if ("" !== temp) obj["CUWorkEquipmentItems"] = temp.split (",");
                temp = document.getElementById (id + "_CULaborItems").value; if ("" !== temp) obj["CULaborItems"] = temp.split (",");
                temp = document.getElementById (id + "_Procedures").value; if ("" !== temp) obj["Procedures"] = temp.split (",");
                temp = document.getElementById (id + "_PropertyUnit").value; if ("" !== temp) obj["PropertyUnit"] = temp;
                temp = document.getElementById (id + "_CostType").value; if ("" !== temp) obj["CostType"] = temp;
                temp = document.getElementById (id + "_DesignLocationCUs").value; if ("" !== temp) obj["DesignLocationCUs"] = temp.split (",");
                temp = document.getElementById (id + "_CUAllowableAction").value; if ("" !== temp) obj["CUAllowableAction"] = temp;
                temp = document.getElementById (id + "_CUGroup").value; if ("" !== temp) obj["CUGroup"] = temp;
                temp = document.getElementById (id + "_GenericAssetModel").value; if ("" !== temp) obj["GenericAssetModel"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CUMaterialItems", "0..*", "0..*", "CUMaterialItem", "CompatibleUnits"],
                            ["CUContractorItems", "0..*", "0..*", "CUContractorItem", "CompatibleUnits"],
                            ["CUWorkEquipmentItems", "0..*", "0..*", "CUWorkEquipmentItem", "CompatibleUnits"],
                            ["CULaborItems", "0..*", "0..*", "CULaborItem", "CompatibleUnits"],
                            ["Procedures", "0..*", "0..*", "Procedure", "CompatibleUnits"],
                            ["PropertyUnit", "0..1", "0..*", "PropertyUnit", "CompatibleUnits"],
                            ["CostType", "0..1", "0..*", "CostType", "CompatibleUnits"],
                            ["DesignLocationCUs", "0..*", "0..*", "DesignLocationCU", "CompatibleUnits"],
                            ["CUAllowableAction", "0..1", "0..*", "CUAllowableAction", "CompatibleUnits"],
                            ["CUGroup", "0..1", "0..*", "CUGroup", "CompatibleUnits"],
                            ["GenericAssetModel", "0..1", "0..*", "CatalogAssetType", "CompatibleUnits"]
                        ]
                    )
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
                let bucket = cim_data.BusinessCase;
                if (null == bucket)
                   cim_data.BusinessCase = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BusinessCase[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "BusinessCase";
                base.parse_element (/<cim:BusinessCase.corporateCode>([\s\S]*?)<\/cim:BusinessCase.corporateCode>/g, obj, "corporateCode", base.to_string, sub, context);
                base.parse_attributes (/<cim:BusinessCase.Projects\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Projects", sub, context);
                base.parse_attributes (/<cim:BusinessCase.Works\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                let bucket = context.parsed.BusinessCase;
                if (null == bucket)
                   context.parsed.BusinessCase = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "BusinessCase", "corporateCode", "corporateCode",  base.from_string, fields);
                base.export_attributes (obj, "BusinessCase", "Projects", "Projects", fields);
                base.export_attributes (obj, "BusinessCase", "Works", "Works", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BusinessCase_collapse" aria-expanded="true" aria-controls="BusinessCase_collapse" style="margin-left: 10px;">BusinessCase</a></legend>
                    <div id="BusinessCase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#corporateCode}}<div><b>corporateCode</b>: {{corporateCode}}</div>{{/corporateCode}}
                    {{#Projects}}<div><b>Projects</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Projects}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Works}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Projects"]) obj["Projects_string"] = obj["Projects"].join ();
                if (obj["Works"]) obj["Works_string"] = obj["Works"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Projects_string"];
                delete obj["Works_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BusinessCase_collapse" aria-expanded="true" aria-controls="{{id}}_BusinessCase_collapse" style="margin-left: 10px;">BusinessCase</a></legend>
                    <div id="{{id}}_BusinessCase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_corporateCode'>corporateCode: </label><div class='col-sm-8'><input id='{{id}}_corporateCode' class='form-control' type='text'{{#corporateCode}} value='{{corporateCode}}'{{/corporateCode}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BusinessCase" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_corporateCode").value; if ("" !== temp) obj["corporateCode"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Projects", "0..*", "0..1", "Project", "BusinessCase"],
                            ["Works", "0..*", "0..1", "Work", "BusinessCase"]
                        ]
                    )
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
                let bucket = cim_data.InfoQuestion;
                if (null == bucket)
                   cim_data.InfoQuestion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InfoQuestion[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "InfoQuestion";
                base.parse_element (/<cim:InfoQuestion.questionType>([\s\S]*?)<\/cim:InfoQuestion.questionType>/g, obj, "questionType", base.to_string, sub, context);
                base.parse_element (/<cim:InfoQuestion.questionCode>([\s\S]*?)<\/cim:InfoQuestion.questionCode>/g, obj, "questionCode", base.to_string, sub, context);
                base.parse_element (/<cim:InfoQuestion.questionText>([\s\S]*?)<\/cim:InfoQuestion.questionText>/g, obj, "questionText", base.to_string, sub, context);
                base.parse_element (/<cim:InfoQuestion.questionRemark>([\s\S]*?)<\/cim:InfoQuestion.questionRemark>/g, obj, "questionRemark", base.to_string, sub, context);
                base.parse_element (/<cim:InfoQuestion.answer>([\s\S]*?)<\/cim:InfoQuestion.answer>/g, obj, "answer", base.to_string, sub, context);
                base.parse_element (/<cim:InfoQuestion.answerRemark>([\s\S]*?)<\/cim:InfoQuestion.answerRemark>/g, obj, "answerRemark", base.to_string, sub, context);
                base.parse_element (/<cim:InfoQuestion.answerDateTime>([\s\S]*?)<\/cim:InfoQuestion.answerDateTime>/g, obj, "answerDateTime", base.to_datetime, sub, context);
                let bucket = context.parsed.InfoQuestion;
                if (null == bucket)
                   context.parsed.InfoQuestion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "InfoQuestion", "questionType", "questionType",  base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "questionCode", "questionCode",  base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "questionText", "questionText",  base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "questionRemark", "questionRemark",  base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "answer", "answer",  base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "answerRemark", "answerRemark",  base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "answerDateTime", "answerDateTime",  base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InfoQuestion_collapse" aria-expanded="true" aria-controls="InfoQuestion_collapse" style="margin-left: 10px;">InfoQuestion</a></legend>
                    <div id="InfoQuestion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#questionType}}<div><b>questionType</b>: {{questionType}}</div>{{/questionType}}
                    {{#questionCode}}<div><b>questionCode</b>: {{questionCode}}</div>{{/questionCode}}
                    {{#questionText}}<div><b>questionText</b>: {{questionText}}</div>{{/questionText}}
                    {{#questionRemark}}<div><b>questionRemark</b>: {{questionRemark}}</div>{{/questionRemark}}
                    {{#answer}}<div><b>answer</b>: {{answer}}</div>{{/answer}}
                    {{#answerRemark}}<div><b>answerRemark</b>: {{answerRemark}}</div>{{/answerRemark}}
                    {{#answerDateTime}}<div><b>answerDateTime</b>: {{answerDateTime}}</div>{{/answerDateTime}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InfoQuestion_collapse" aria-expanded="true" aria-controls="{{id}}_InfoQuestion_collapse" style="margin-left: 10px;">InfoQuestion</a></legend>
                    <div id="{{id}}_InfoQuestion_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_questionType'>questionType: </label><div class='col-sm-8'><input id='{{id}}_questionType' class='form-control' type='text'{{#questionType}} value='{{questionType}}'{{/questionType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_questionCode'>questionCode: </label><div class='col-sm-8'><input id='{{id}}_questionCode' class='form-control' type='text'{{#questionCode}} value='{{questionCode}}'{{/questionCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_questionText'>questionText: </label><div class='col-sm-8'><input id='{{id}}_questionText' class='form-control' type='text'{{#questionText}} value='{{questionText}}'{{/questionText}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_questionRemark'>questionRemark: </label><div class='col-sm-8'><input id='{{id}}_questionRemark' class='form-control' type='text'{{#questionRemark}} value='{{questionRemark}}'{{/questionRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_answer'>answer: </label><div class='col-sm-8'><input id='{{id}}_answer' class='form-control' type='text'{{#answer}} value='{{answer}}'{{/answer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_answerRemark'>answerRemark: </label><div class='col-sm-8'><input id='{{id}}_answerRemark' class='form-control' type='text'{{#answerRemark}} value='{{answerRemark}}'{{/answerRemark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_answerDateTime'>answerDateTime: </label><div class='col-sm-8'><input id='{{id}}_answerDateTime' class='form-control' type='text'{{#answerDateTime}} value='{{answerDateTime}}'{{/answerDateTime}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "InfoQuestion" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_questionType").value; if ("" !== temp) obj["questionType"] = temp;
                temp = document.getElementById (id + "_questionCode").value; if ("" !== temp) obj["questionCode"] = temp;
                temp = document.getElementById (id + "_questionText").value; if ("" !== temp) obj["questionText"] = temp;
                temp = document.getElementById (id + "_questionRemark").value; if ("" !== temp) obj["questionRemark"] = temp;
                temp = document.getElementById (id + "_answer").value; if ("" !== temp) obj["answer"] = temp;
                temp = document.getElementById (id + "_answerRemark").value; if ("" !== temp) obj["answerRemark"] = temp;
                temp = document.getElementById (id + "_answerDateTime").value; if ("" !== temp) obj["answerDateTime"] = temp;

                return (obj);
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
                let bucket = cim_data.WorkCostDetail;
                if (null == bucket)
                   cim_data.WorkCostDetail = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkCostDetail[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "WorkCostDetail";
                base.parse_element (/<cim:WorkCostDetail.amount>([\s\S]*?)<\/cim:WorkCostDetail.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:WorkCostDetail.isDebit>([\s\S]*?)<\/cim:WorkCostDetail.isDebit>/g, obj, "isDebit", base.to_boolean, sub, context);
                base.parse_element (/<cim:WorkCostDetail.transactionDateTime>([\s\S]*?)<\/cim:WorkCostDetail.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:WorkCostDetail.MiscCostItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MiscCostItems", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.OverheadCost\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OverheadCost", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.Design\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.WorkTask\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                base.parse_attributes (/<cim:WorkCostDetail.PropertyUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PropertyUnits", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.CostType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CostType", sub, context);
                base.parse_attributes (/<cim:WorkCostDetail.Works\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                base.parse_attributes (/<cim:WorkCostDetail.ContractorItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ContractorItems", sub, context);
                base.parse_attributes (/<cim:WorkCostDetail.LaborItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LaborItems", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.ErpProjectAccounting\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.WorkCostSummary\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostSummary", sub, context);
                let bucket = context.parsed.WorkCostDetail;
                if (null == bucket)
                   context.parsed.WorkCostDetail = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "WorkCostDetail", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "WorkCostDetail", "isDebit", "isDebit",  base.from_boolean, fields);
                base.export_element (obj, "WorkCostDetail", "transactionDateTime", "transactionDateTime",  base.from_datetime, fields);
                base.export_attributes (obj, "WorkCostDetail", "MiscCostItems", "MiscCostItems", fields);
                base.export_attribute (obj, "WorkCostDetail", "OverheadCost", "OverheadCost", fields);
                base.export_attribute (obj, "WorkCostDetail", "Design", "Design", fields);
                base.export_attribute (obj, "WorkCostDetail", "WorkTask", "WorkTask", fields);
                base.export_attributes (obj, "WorkCostDetail", "PropertyUnits", "PropertyUnits", fields);
                base.export_attribute (obj, "WorkCostDetail", "CostType", "CostType", fields);
                base.export_attributes (obj, "WorkCostDetail", "Works", "Works", fields);
                base.export_attributes (obj, "WorkCostDetail", "ContractorItems", "ContractorItems", fields);
                base.export_attributes (obj, "WorkCostDetail", "LaborItems", "LaborItems", fields);
                base.export_attribute (obj, "WorkCostDetail", "ErpProjectAccounting", "ErpProjectAccounting", fields);
                base.export_attribute (obj, "WorkCostDetail", "WorkCostSummary", "WorkCostSummary", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkCostDetail_collapse" aria-expanded="true" aria-controls="WorkCostDetail_collapse" style="margin-left: 10px;">WorkCostDetail</a></legend>
                    <div id="WorkCostDetail_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#isDebit}}<div><b>isDebit</b>: {{isDebit}}</div>{{/isDebit}}
                    {{#transactionDateTime}}<div><b>transactionDateTime</b>: {{transactionDateTime}}</div>{{/transactionDateTime}}
                    {{#MiscCostItems}}<div><b>MiscCostItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MiscCostItems}}
                    {{#OverheadCost}}<div><b>OverheadCost</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OverheadCost}}");}); return false;'>{{OverheadCost}}</a></div>{{/OverheadCost}}
                    {{#Design}}<div><b>Design</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Design}}");}); return false;'>{{Design}}</a></div>{{/Design}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkTask}}");}); return false;'>{{WorkTask}}</a></div>{{/WorkTask}}
                    {{#PropertyUnits}}<div><b>PropertyUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PropertyUnits}}
                    {{#CostType}}<div><b>CostType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CostType}}");}); return false;'>{{CostType}}</a></div>{{/CostType}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Works}}
                    {{#ContractorItems}}<div><b>ContractorItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ContractorItems}}
                    {{#LaborItems}}<div><b>LaborItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LaborItems}}
                    {{#ErpProjectAccounting}}<div><b>ErpProjectAccounting</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ErpProjectAccounting}}");}); return false;'>{{ErpProjectAccounting}}</a></div>{{/ErpProjectAccounting}}
                    {{#WorkCostSummary}}<div><b>WorkCostSummary</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkCostSummary}}");}); return false;'>{{WorkCostSummary}}</a></div>{{/WorkCostSummary}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MiscCostItems"]) obj["MiscCostItems_string"] = obj["MiscCostItems"].join ();
                if (obj["PropertyUnits"]) obj["PropertyUnits_string"] = obj["PropertyUnits"].join ();
                if (obj["Works"]) obj["Works_string"] = obj["Works"].join ();
                if (obj["ContractorItems"]) obj["ContractorItems_string"] = obj["ContractorItems"].join ();
                if (obj["LaborItems"]) obj["LaborItems_string"] = obj["LaborItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MiscCostItems_string"];
                delete obj["PropertyUnits_string"];
                delete obj["Works_string"];
                delete obj["ContractorItems_string"];
                delete obj["LaborItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkCostDetail_collapse" aria-expanded="true" aria-controls="{{id}}_WorkCostDetail_collapse" style="margin-left: 10px;">WorkCostDetail</a></legend>
                    <div id="{{id}}_WorkCostDetail_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_amount'>amount: </label><div class='col-sm-8'><input id='{{id}}_amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isDebit'>isDebit: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isDebit' class='form-check-input' type='checkbox'{{#isDebit}} checked{{/isDebit}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transactionDateTime'>transactionDateTime: </label><div class='col-sm-8'><input id='{{id}}_transactionDateTime' class='form-control' type='text'{{#transactionDateTime}} value='{{transactionDateTime}}'{{/transactionDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OverheadCost'>OverheadCost: </label><div class='col-sm-8'><input id='{{id}}_OverheadCost' class='form-control' type='text'{{#OverheadCost}} value='{{OverheadCost}}'{{/OverheadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Design'>Design: </label><div class='col-sm-8'><input id='{{id}}_Design' class='form-control' type='text'{{#Design}} value='{{Design}}'{{/Design}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='{{id}}_WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PropertyUnits'>PropertyUnits: </label><div class='col-sm-8'><input id='{{id}}_PropertyUnits' class='form-control' type='text'{{#PropertyUnits}} value='{{PropertyUnits_string}}'{{/PropertyUnits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CostType'>CostType: </label><div class='col-sm-8'><input id='{{id}}_CostType' class='form-control' type='text'{{#CostType}} value='{{CostType}}'{{/CostType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Works'>Works: </label><div class='col-sm-8'><input id='{{id}}_Works' class='form-control' type='text'{{#Works}} value='{{Works_string}}'{{/Works}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpProjectAccounting'>ErpProjectAccounting: </label><div class='col-sm-8'><input id='{{id}}_ErpProjectAccounting' class='form-control' type='text'{{#ErpProjectAccounting}} value='{{ErpProjectAccounting}}'{{/ErpProjectAccounting}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkCostSummary'>WorkCostSummary: </label><div class='col-sm-8'><input id='{{id}}_WorkCostSummary' class='form-control' type='text'{{#WorkCostSummary}} value='{{WorkCostSummary}}'{{/WorkCostSummary}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WorkCostDetail" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_amount").value; if ("" !== temp) obj["amount"] = temp;
                temp = document.getElementById (id + "_isDebit").checked; if (temp) obj["isDebit"] = true;
                temp = document.getElementById (id + "_transactionDateTime").value; if ("" !== temp) obj["transactionDateTime"] = temp;
                temp = document.getElementById (id + "_OverheadCost").value; if ("" !== temp) obj["OverheadCost"] = temp;
                temp = document.getElementById (id + "_Design").value; if ("" !== temp) obj["Design"] = temp;
                temp = document.getElementById (id + "_WorkTask").value; if ("" !== temp) obj["WorkTask"] = temp;
                temp = document.getElementById (id + "_PropertyUnits").value; if ("" !== temp) obj["PropertyUnits"] = temp.split (",");
                temp = document.getElementById (id + "_CostType").value; if ("" !== temp) obj["CostType"] = temp;
                temp = document.getElementById (id + "_Works").value; if ("" !== temp) obj["Works"] = temp.split (",");
                temp = document.getElementById (id + "_ErpProjectAccounting").value; if ("" !== temp) obj["ErpProjectAccounting"] = temp;
                temp = document.getElementById (id + "_WorkCostSummary").value; if ("" !== temp) obj["WorkCostSummary"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MiscCostItems", "0..*", "0..1", "MiscCostItem", "WorkCostDetail"],
                            ["OverheadCost", "0..1", "0..*", "OverheadCost", "WorkCostDetails"],
                            ["Design", "0..1", "0..*", "Design", "WorkCostDetails"],
                            ["WorkTask", "0..1", "0..*", "OldWorkTask", "WorkCostDetails"],
                            ["PropertyUnits", "0..*", "0..*", "PropertyUnit", "WorkCostDetails"],
                            ["CostType", "1", "0..*", "CostType", "WorkCostDetails"],
                            ["Works", "0..*", "0..*", "Work", "WorkCostDetails"],
                            ["ContractorItems", "0..*", "1", "ContractorItem", "WorkCostDetail"],
                            ["LaborItems", "0..*", "1", "LaborItem", "WorkCostDetail"],
                            ["ErpProjectAccounting", "1", "0..*", "ErpProjectAccounting", "WorkCostDetails"],
                            ["WorkCostSummary", "0..1", "0..1", "WorkCostSummary", "WorkCostDetail"]
                        ]
                    )
                );
            }
        }

        /**
         * Documentation for a generic material item that may be used for design, work and other purposes.
         *
         * Any number of MaterialItems manufactured by various vendors may be used to perform this TypeMaterial.
         * Note that class analagous to "AssetModel" is not used for material items. This is because in some cases, for example, a utility sets up a Master material record for a 3 inch long half inch diameter steel bolt and they do not necessarily care what specific supplier is providing the material item. As different vendors are used to supply the part, the Stock Code of the material item can stay the same. In other cases, each time the vendor changes, a new stock code is set up so they can track material used by vendor. Therefore a Material Item "Model" is not typically needed.
         *
         */
        class TypeMaterial extends WorkDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TypeMaterial;
                if (null == bucket)
                   cim_data.TypeMaterial = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TypeMaterial[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "TypeMaterial";
                base.parse_element (/<cim:TypeMaterial.stockItem>([\s\S]*?)<\/cim:TypeMaterial.stockItem>/g, obj, "stockItem", base.to_boolean, sub, context);
                base.parse_element (/<cim:TypeMaterial.estUnitCost>([\s\S]*?)<\/cim:TypeMaterial.estUnitCost>/g, obj, "estUnitCost", base.to_string, sub, context);
                base.parse_element (/<cim:TypeMaterial.quantity>([\s\S]*?)<\/cim:TypeMaterial.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:TypeMaterial.costType>([\s\S]*?)<\/cim:TypeMaterial.costType>/g, obj, "costType", base.to_string, sub, context);
                base.parse_attributes (/<cim:TypeMaterial.ErpIssueInventories\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpIssueInventories", sub, context);
                base.parse_attributes (/<cim:TypeMaterial.ErpReqLineItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpReqLineItems", sub, context);
                base.parse_attributes (/<cim:TypeMaterial.CUMaterialItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CUMaterialItems", sub, context);
                base.parse_attributes (/<cim:TypeMaterial.MaterialItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MaterialItems", sub, context);
                let bucket = context.parsed.TypeMaterial;
                if (null == bucket)
                   context.parsed.TypeMaterial = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "TypeMaterial", "stockItem", "stockItem",  base.from_boolean, fields);
                base.export_element (obj, "TypeMaterial", "estUnitCost", "estUnitCost",  base.from_string, fields);
                base.export_element (obj, "TypeMaterial", "quantity", "quantity",  base.from_string, fields);
                base.export_element (obj, "TypeMaterial", "costType", "costType",  base.from_string, fields);
                base.export_attributes (obj, "TypeMaterial", "ErpIssueInventories", "ErpIssueInventories", fields);
                base.export_attributes (obj, "TypeMaterial", "ErpReqLineItems", "ErpReqLineItems", fields);
                base.export_attributes (obj, "TypeMaterial", "CUMaterialItems", "CUMaterialItems", fields);
                base.export_attributes (obj, "TypeMaterial", "MaterialItems", "MaterialItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TypeMaterial_collapse" aria-expanded="true" aria-controls="TypeMaterial_collapse" style="margin-left: 10px;">TypeMaterial</a></legend>
                    <div id="TypeMaterial_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#stockItem}}<div><b>stockItem</b>: {{stockItem}}</div>{{/stockItem}}
                    {{#estUnitCost}}<div><b>estUnitCost</b>: {{estUnitCost}}</div>{{/estUnitCost}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#costType}}<div><b>costType</b>: {{costType}}</div>{{/costType}}
                    {{#ErpIssueInventories}}<div><b>ErpIssueInventories</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpIssueInventories}}
                    {{#ErpReqLineItems}}<div><b>ErpReqLineItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpReqLineItems}}
                    {{#CUMaterialItems}}<div><b>CUMaterialItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CUMaterialItems}}
                    {{#MaterialItems}}<div><b>MaterialItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MaterialItems}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpIssueInventories"]) obj["ErpIssueInventories_string"] = obj["ErpIssueInventories"].join ();
                if (obj["ErpReqLineItems"]) obj["ErpReqLineItems_string"] = obj["ErpReqLineItems"].join ();
                if (obj["CUMaterialItems"]) obj["CUMaterialItems_string"] = obj["CUMaterialItems"].join ();
                if (obj["MaterialItems"]) obj["MaterialItems_string"] = obj["MaterialItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpIssueInventories_string"];
                delete obj["ErpReqLineItems_string"];
                delete obj["CUMaterialItems_string"];
                delete obj["MaterialItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TypeMaterial_collapse" aria-expanded="true" aria-controls="{{id}}_TypeMaterial_collapse" style="margin-left: 10px;">TypeMaterial</a></legend>
                    <div id="{{id}}_TypeMaterial_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_stockItem'>stockItem: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_stockItem' class='form-check-input' type='checkbox'{{#stockItem}} checked{{/stockItem}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_estUnitCost'>estUnitCost: </label><div class='col-sm-8'><input id='{{id}}_estUnitCost' class='form-control' type='text'{{#estUnitCost}} value='{{estUnitCost}}'{{/estUnitCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><input id='{{id}}_quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_costType'>costType: </label><div class='col-sm-8'><input id='{{id}}_costType' class='form-control' type='text'{{#costType}} value='{{costType}}'{{/costType}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TypeMaterial" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_stockItem").checked; if (temp) obj["stockItem"] = true;
                temp = document.getElementById (id + "_estUnitCost").value; if ("" !== temp) obj["estUnitCost"] = temp;
                temp = document.getElementById (id + "_quantity").value; if ("" !== temp) obj["quantity"] = temp;
                temp = document.getElementById (id + "_costType").value; if ("" !== temp) obj["costType"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpIssueInventories", "0..*", "0..1", "ErpIssueInventory", "TypeMaterial"],
                            ["ErpReqLineItems", "0..*", "0..1", "ErpReqLineItem", "TypeMaterial"],
                            ["CUMaterialItems", "0..*", "0..1", "CUMaterialItem", "TypeMaterial"],
                            ["MaterialItems", "0..*", "0..1", "MaterialItem", "TypeMaterial"]
                        ]
                    )
                );
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
                let bucket = cim_data.AccessPermit;
                if (null == bucket)
                   cim_data.AccessPermit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AccessPermit[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "AccessPermit";
                base.parse_element (/<cim:AccessPermit.permitID>([\s\S]*?)<\/cim:AccessPermit.permitID>/g, obj, "permitID", base.to_string, sub, context);
                base.parse_element (/<cim:AccessPermit.applicationNumber>([\s\S]*?)<\/cim:AccessPermit.applicationNumber>/g, obj, "applicationNumber", base.to_string, sub, context);
                base.parse_element (/<cim:AccessPermit.effectiveDate>([\s\S]*?)<\/cim:AccessPermit.effectiveDate>/g, obj, "effectiveDate", base.to_string, sub, context);
                base.parse_element (/<cim:AccessPermit.expirationDate>([\s\S]*?)<\/cim:AccessPermit.expirationDate>/g, obj, "expirationDate", base.to_string, sub, context);
                base.parse_element (/<cim:AccessPermit.payment>([\s\S]*?)<\/cim:AccessPermit.payment>/g, obj, "payment", base.to_string, sub, context);
                let bucket = context.parsed.AccessPermit;
                if (null == bucket)
                   context.parsed.AccessPermit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "AccessPermit", "permitID", "permitID",  base.from_string, fields);
                base.export_element (obj, "AccessPermit", "applicationNumber", "applicationNumber",  base.from_string, fields);
                base.export_element (obj, "AccessPermit", "effectiveDate", "effectiveDate",  base.from_string, fields);
                base.export_element (obj, "AccessPermit", "expirationDate", "expirationDate",  base.from_string, fields);
                base.export_element (obj, "AccessPermit", "payment", "payment",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AccessPermit_collapse" aria-expanded="true" aria-controls="AccessPermit_collapse" style="margin-left: 10px;">AccessPermit</a></legend>
                    <div id="AccessPermit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#permitID}}<div><b>permitID</b>: {{permitID}}</div>{{/permitID}}
                    {{#applicationNumber}}<div><b>applicationNumber</b>: {{applicationNumber}}</div>{{/applicationNumber}}
                    {{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
                    {{#expirationDate}}<div><b>expirationDate</b>: {{expirationDate}}</div>{{/expirationDate}}
                    {{#payment}}<div><b>payment</b>: {{payment}}</div>{{/payment}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AccessPermit_collapse" aria-expanded="true" aria-controls="{{id}}_AccessPermit_collapse" style="margin-left: 10px;">AccessPermit</a></legend>
                    <div id="{{id}}_AccessPermit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_permitID'>permitID: </label><div class='col-sm-8'><input id='{{id}}_permitID' class='form-control' type='text'{{#permitID}} value='{{permitID}}'{{/permitID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_applicationNumber'>applicationNumber: </label><div class='col-sm-8'><input id='{{id}}_applicationNumber' class='form-control' type='text'{{#applicationNumber}} value='{{applicationNumber}}'{{/applicationNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='{{id}}_effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_expirationDate'>expirationDate: </label><div class='col-sm-8'><input id='{{id}}_expirationDate' class='form-control' type='text'{{#expirationDate}} value='{{expirationDate}}'{{/expirationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_payment'>payment: </label><div class='col-sm-8'><input id='{{id}}_payment' class='form-control' type='text'{{#payment}} value='{{payment}}'{{/payment}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AccessPermit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_permitID").value; if ("" !== temp) obj["permitID"] = temp;
                temp = document.getElementById (id + "_applicationNumber").value; if ("" !== temp) obj["applicationNumber"] = temp;
                temp = document.getElementById (id + "_effectiveDate").value; if ("" !== temp) obj["effectiveDate"] = temp;
                temp = document.getElementById (id + "_expirationDate").value; if ("" !== temp) obj["expirationDate"] = temp;
                temp = document.getElementById (id + "_payment").value; if ("" !== temp) obj["payment"] = temp;

                return (obj);
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
                let bucket = cim_data.Project;
                if (null == bucket)
                   cim_data.Project = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Project[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "Project";
                base.parse_element (/<cim:Project.budget>([\s\S]*?)<\/cim:Project.budget>/g, obj, "budget", base.to_string, sub, context);
                base.parse_attributes (/<cim:Project.Works\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                base.parse_attribute (/<cim:Project.ParentProject\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ParentProject", sub, context);
                base.parse_attributes (/<cim:Project.SubProjects\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubProjects", sub, context);
                base.parse_attribute (/<cim:Project.BusinessCase\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BusinessCase", sub, context);
                base.parse_attribute (/<cim:Project.ErpProjectAccounting\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context);
                let bucket = context.parsed.Project;
                if (null == bucket)
                   context.parsed.Project = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "Project", "budget", "budget",  base.from_string, fields);
                base.export_attributes (obj, "Project", "Works", "Works", fields);
                base.export_attribute (obj, "Project", "ParentProject", "ParentProject", fields);
                base.export_attributes (obj, "Project", "SubProjects", "SubProjects", fields);
                base.export_attribute (obj, "Project", "BusinessCase", "BusinessCase", fields);
                base.export_attribute (obj, "Project", "ErpProjectAccounting", "ErpProjectAccounting", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Project_collapse" aria-expanded="true" aria-controls="Project_collapse" style="margin-left: 10px;">Project</a></legend>
                    <div id="Project_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#budget}}<div><b>budget</b>: {{budget}}</div>{{/budget}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Works}}
                    {{#ParentProject}}<div><b>ParentProject</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ParentProject}}");}); return false;'>{{ParentProject}}</a></div>{{/ParentProject}}
                    {{#SubProjects}}<div><b>SubProjects</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SubProjects}}
                    {{#BusinessCase}}<div><b>BusinessCase</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BusinessCase}}");}); return false;'>{{BusinessCase}}</a></div>{{/BusinessCase}}
                    {{#ErpProjectAccounting}}<div><b>ErpProjectAccounting</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ErpProjectAccounting}}");}); return false;'>{{ErpProjectAccounting}}</a></div>{{/ErpProjectAccounting}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Works"]) obj["Works_string"] = obj["Works"].join ();
                if (obj["SubProjects"]) obj["SubProjects_string"] = obj["SubProjects"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Works_string"];
                delete obj["SubProjects_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Project_collapse" aria-expanded="true" aria-controls="{{id}}_Project_collapse" style="margin-left: 10px;">Project</a></legend>
                    <div id="{{id}}_Project_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_budget'>budget: </label><div class='col-sm-8'><input id='{{id}}_budget' class='form-control' type='text'{{#budget}} value='{{budget}}'{{/budget}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ParentProject'>ParentProject: </label><div class='col-sm-8'><input id='{{id}}_ParentProject' class='form-control' type='text'{{#ParentProject}} value='{{ParentProject}}'{{/ParentProject}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BusinessCase'>BusinessCase: </label><div class='col-sm-8'><input id='{{id}}_BusinessCase' class='form-control' type='text'{{#BusinessCase}} value='{{BusinessCase}}'{{/BusinessCase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpProjectAccounting'>ErpProjectAccounting: </label><div class='col-sm-8'><input id='{{id}}_ErpProjectAccounting' class='form-control' type='text'{{#ErpProjectAccounting}} value='{{ErpProjectAccounting}}'{{/ErpProjectAccounting}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Project" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_budget").value; if ("" !== temp) obj["budget"] = temp;
                temp = document.getElementById (id + "_ParentProject").value; if ("" !== temp) obj["ParentProject"] = temp;
                temp = document.getElementById (id + "_BusinessCase").value; if ("" !== temp) obj["BusinessCase"] = temp;
                temp = document.getElementById (id + "_ErpProjectAccounting").value; if ("" !== temp) obj["ErpProjectAccounting"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Works", "0..*", "0..1", "Work", "Project"],
                            ["ParentProject", "0..1", "0..*", "Project", "SubProjects"],
                            ["SubProjects", "0..*", "0..1", "Project", "ParentProject"],
                            ["BusinessCase", "0..1", "0..*", "BusinessCase", "Projects"],
                            ["ErpProjectAccounting", "1", "0..*", "ErpProjectAccounting", "Projects"]
                        ]
                    )
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
                let bucket = cim_data.WorkCostSummary;
                if (null == bucket)
                   cim_data.WorkCostSummary = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkCostSummary[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "WorkCostSummary";
                base.parse_attribute (/<cim:WorkCostSummary.WorkCostDetail\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context);
                let bucket = context.parsed.WorkCostSummary;
                if (null == bucket)
                   context.parsed.WorkCostSummary = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WorkCostSummary", "WorkCostDetail", "WorkCostDetail", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkCostSummary_collapse" aria-expanded="true" aria-controls="WorkCostSummary_collapse" style="margin-left: 10px;">WorkCostSummary</a></legend>
                    <div id="WorkCostSummary_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#WorkCostDetail}}<div><b>WorkCostDetail</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkCostDetail}}");}); return false;'>{{WorkCostDetail}}</a></div>{{/WorkCostDetail}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkCostSummary_collapse" aria-expanded="true" aria-controls="{{id}}_WorkCostSummary_collapse" style="margin-left: 10px;">WorkCostSummary</a></legend>
                    <div id="{{id}}_WorkCostSummary_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkCostDetail'>WorkCostDetail: </label><div class='col-sm-8'><input id='{{id}}_WorkCostDetail' class='form-control' type='text'{{#WorkCostDetail}} value='{{WorkCostDetail}}'{{/WorkCostDetail}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WorkCostSummary" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WorkCostDetail").value; if ("" !== temp) obj["WorkCostDetail"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkCostDetail", "0..1", "0..1", "WorkCostDetail", "WorkCostSummary"]
                        ]
                    )
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
                let bucket = cim_data.Design;
                if (null == bucket)
                   cim_data.Design = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Design[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkDocument.prototype.parse.call (this, context, sub);
                obj.cls = "Design";
                base.parse_attribute (/<cim:Design.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Design.price>([\s\S]*?)<\/cim:Design.price>/g, obj, "price", base.to_string, sub, context);
                base.parse_element (/<cim:Design.costEstimate>([\s\S]*?)<\/cim:Design.costEstimate>/g, obj, "costEstimate", base.to_string, sub, context);
                base.parse_attributes (/<cim:Design.WorkTasks\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attribute (/<cim:Design.ErpQuoteLineItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuoteLineItem", sub, context);
                base.parse_attributes (/<cim:Design.WorkCostDetails\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                base.parse_attributes (/<cim:Design.ErpBOMs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpBOMs", sub, context);
                base.parse_attribute (/<cim:Design.Work\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Work", sub, context);
                base.parse_attributes (/<cim:Design.ConditionFactors\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConditionFactors", sub, context);
                base.parse_attributes (/<cim:Design.DesignLocations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocations", sub, context);
                base.parse_attributes (/<cim:Design.DesignLocationsCUs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocationsCUs", sub, context);
                let bucket = context.parsed.Design;
                if (null == bucket)
                   context.parsed.Design = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkDocument.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Design", "kind", "kind", fields);
                base.export_element (obj, "Design", "price", "price",  base.from_string, fields);
                base.export_element (obj, "Design", "costEstimate", "costEstimate",  base.from_string, fields);
                base.export_attributes (obj, "Design", "WorkTasks", "WorkTasks", fields);
                base.export_attribute (obj, "Design", "ErpQuoteLineItem", "ErpQuoteLineItem", fields);
                base.export_attributes (obj, "Design", "WorkCostDetails", "WorkCostDetails", fields);
                base.export_attributes (obj, "Design", "ErpBOMs", "ErpBOMs", fields);
                base.export_attribute (obj, "Design", "Work", "Work", fields);
                base.export_attributes (obj, "Design", "ConditionFactors", "ConditionFactors", fields);
                base.export_attributes (obj, "Design", "DesignLocations", "DesignLocations", fields);
                base.export_attributes (obj, "Design", "DesignLocationsCUs", "DesignLocationsCUs", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Design_collapse" aria-expanded="true" aria-controls="Design_collapse" style="margin-left: 10px;">Design</a></legend>
                    <div id="Design_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#price}}<div><b>price</b>: {{price}}</div>{{/price}}
                    {{#costEstimate}}<div><b>costEstimate</b>: {{costEstimate}}</div>{{/costEstimate}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    {{#ErpQuoteLineItem}}<div><b>ErpQuoteLineItem</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ErpQuoteLineItem}}");}); return false;'>{{ErpQuoteLineItem}}</a></div>{{/ErpQuoteLineItem}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkCostDetails}}
                    {{#ErpBOMs}}<div><b>ErpBOMs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpBOMs}}
                    {{#Work}}<div><b>Work</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Work}}");}); return false;'>{{Work}}</a></div>{{/Work}}
                    {{#ConditionFactors}}<div><b>ConditionFactors</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ConditionFactors}}
                    {{#DesignLocations}}<div><b>DesignLocations</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DesignLocations}}
                    {{#DesignLocationsCUs}}<div><b>DesignLocationsCUs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DesignLocationsCUs}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindDesignKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in DesignKind) obj["kindDesignKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["WorkTasks"]) obj["WorkTasks_string"] = obj["WorkTasks"].join ();
                if (obj["WorkCostDetails"]) obj["WorkCostDetails_string"] = obj["WorkCostDetails"].join ();
                if (obj["ErpBOMs"]) obj["ErpBOMs_string"] = obj["ErpBOMs"].join ();
                if (obj["ConditionFactors"]) obj["ConditionFactors_string"] = obj["ConditionFactors"].join ();
                if (obj["DesignLocations"]) obj["DesignLocations_string"] = obj["DesignLocations"].join ();
                if (obj["DesignLocationsCUs"]) obj["DesignLocationsCUs_string"] = obj["DesignLocationsCUs"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindDesignKind"];
                delete obj["WorkTasks_string"];
                delete obj["WorkCostDetails_string"];
                delete obj["ErpBOMs_string"];
                delete obj["ConditionFactors_string"];
                delete obj["DesignLocations_string"];
                delete obj["DesignLocationsCUs_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Design_collapse" aria-expanded="true" aria-controls="{{id}}_Design_collapse" style="margin-left: 10px;">Design</a></legend>
                    <div id="{{id}}_Design_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindDesignKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindDesignKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_price'>price: </label><div class='col-sm-8'><input id='{{id}}_price' class='form-control' type='text'{{#price}} value='{{price}}'{{/price}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_costEstimate'>costEstimate: </label><div class='col-sm-8'><input id='{{id}}_costEstimate' class='form-control' type='text'{{#costEstimate}} value='{{costEstimate}}'{{/costEstimate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpQuoteLineItem'>ErpQuoteLineItem: </label><div class='col-sm-8'><input id='{{id}}_ErpQuoteLineItem' class='form-control' type='text'{{#ErpQuoteLineItem}} value='{{ErpQuoteLineItem}}'{{/ErpQuoteLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Work'>Work: </label><div class='col-sm-8'><input id='{{id}}_Work' class='form-control' type='text'{{#Work}} value='{{Work}}'{{/Work}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConditionFactors'>ConditionFactors: </label><div class='col-sm-8'><input id='{{id}}_ConditionFactors' class='form-control' type='text'{{#ConditionFactors}} value='{{ConditionFactors_string}}'{{/ConditionFactors}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DesignLocations'>DesignLocations: </label><div class='col-sm-8'><input id='{{id}}_DesignLocations' class='form-control' type='text'{{#DesignLocations}} value='{{DesignLocations_string}}'{{/DesignLocations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DesignLocationsCUs'>DesignLocationsCUs: </label><div class='col-sm-8'><input id='{{id}}_DesignLocationsCUs' class='form-control' type='text'{{#DesignLocationsCUs}} value='{{DesignLocationsCUs_string}}'{{/DesignLocationsCUs}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Design" };
                super.submit (id, obj);
                temp = DesignKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#DesignKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_price").value; if ("" !== temp) obj["price"] = temp;
                temp = document.getElementById (id + "_costEstimate").value; if ("" !== temp) obj["costEstimate"] = temp;
                temp = document.getElementById (id + "_ErpQuoteLineItem").value; if ("" !== temp) obj["ErpQuoteLineItem"] = temp;
                temp = document.getElementById (id + "_Work").value; if ("" !== temp) obj["Work"] = temp;
                temp = document.getElementById (id + "_ConditionFactors").value; if ("" !== temp) obj["ConditionFactors"] = temp.split (",");
                temp = document.getElementById (id + "_DesignLocations").value; if ("" !== temp) obj["DesignLocations"] = temp.split (",");
                temp = document.getElementById (id + "_DesignLocationsCUs").value; if ("" !== temp) obj["DesignLocationsCUs"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkTasks", "0..*", "0..1", "OldWorkTask", "Design"],
                            ["ErpQuoteLineItem", "0..1", "0..1", "ErpQuoteLineItem", "Design"],
                            ["WorkCostDetails", "0..*", "0..1", "WorkCostDetail", "Design"],
                            ["ErpBOMs", "0..*", "0..1", "ErpBOM", "Design"],
                            ["Work", "0..1", "0..*", "Work", "Designs"],
                            ["ConditionFactors", "0..*", "0..*", "ConditionFactor", "Designs"],
                            ["DesignLocations", "0..*", "1..*", "DesignLocation", "Designs"],
                            ["DesignLocationsCUs", "0..*", "0..*", "DesignLocationCU", "Designs"]
                        ]
                    )
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
                let bucket = cim_data.CUAllowableAction;
                if (null == bucket)
                   cim_data.CUAllowableAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CUAllowableAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CUAllowableAction";
                base.parse_attribute (/<cim:CUAllowableAction.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:CUAllowableAction.CompatibleUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                let bucket = context.parsed.CUAllowableAction;
                if (null == bucket)
                   context.parsed.CUAllowableAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CUAllowableAction", "status", "status", fields);
                base.export_attributes (obj, "CUAllowableAction", "CompatibleUnits", "CompatibleUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CUAllowableAction_collapse" aria-expanded="true" aria-controls="CUAllowableAction_collapse" style="margin-left: 10px;">CUAllowableAction</a></legend>
                    <div id="CUAllowableAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CompatibleUnits}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CompatibleUnits"]) obj["CompatibleUnits_string"] = obj["CompatibleUnits"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CompatibleUnits_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CUAllowableAction_collapse" aria-expanded="true" aria-controls="{{id}}_CUAllowableAction_collapse" style="margin-left: 10px;">CUAllowableAction</a></legend>
                    <div id="{{id}}_CUAllowableAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CUAllowableAction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CompatibleUnits", "0..*", "0..1", "CompatibleUnit", "CUAllowableAction"]
                        ]
                    )
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
                let bucket = cim_data.LaborItem;
                if (null == bucket)
                   cim_data.LaborItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LaborItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LaborItem";
                base.parse_element (/<cim:LaborItem.activityCode>([\s\S]*?)<\/cim:LaborItem.activityCode>/g, obj, "activityCode", base.to_string, sub, context);
                base.parse_element (/<cim:LaborItem.laborDuration>([\s\S]*?)<\/cim:LaborItem.laborDuration>/g, obj, "laborDuration", base.to_string, sub, context);
                base.parse_element (/<cim:LaborItem.laborRate>([\s\S]*?)<\/cim:LaborItem.laborRate>/g, obj, "laborRate", base.to_string, sub, context);
                base.parse_element (/<cim:LaborItem.cost>([\s\S]*?)<\/cim:LaborItem.cost>/g, obj, "cost", base.to_string, sub, context);
                base.parse_attribute (/<cim:LaborItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:LaborItem.WorkTask\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                base.parse_attribute (/<cim:LaborItem.WorkCostDetail\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context);
                base.parse_attributes (/<cim:LaborItem.ErpPersons\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersons", sub, context);
                let bucket = context.parsed.LaborItem;
                if (null == bucket)
                   context.parsed.LaborItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "LaborItem", "activityCode", "activityCode",  base.from_string, fields);
                base.export_element (obj, "LaborItem", "laborDuration", "laborDuration",  base.from_string, fields);
                base.export_element (obj, "LaborItem", "laborRate", "laborRate",  base.from_string, fields);
                base.export_element (obj, "LaborItem", "cost", "cost",  base.from_string, fields);
                base.export_attribute (obj, "LaborItem", "status", "status", fields);
                base.export_attribute (obj, "LaborItem", "WorkTask", "WorkTask", fields);
                base.export_attribute (obj, "LaborItem", "WorkCostDetail", "WorkCostDetail", fields);
                base.export_attributes (obj, "LaborItem", "ErpPersons", "ErpPersons", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LaborItem_collapse" aria-expanded="true" aria-controls="LaborItem_collapse" style="margin-left: 10px;">LaborItem</a></legend>
                    <div id="LaborItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#activityCode}}<div><b>activityCode</b>: {{activityCode}}</div>{{/activityCode}}
                    {{#laborDuration}}<div><b>laborDuration</b>: {{laborDuration}}</div>{{/laborDuration}}
                    {{#laborRate}}<div><b>laborRate</b>: {{laborRate}}</div>{{/laborRate}}
                    {{#cost}}<div><b>cost</b>: {{cost}}</div>{{/cost}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkTask}}");}); return false;'>{{WorkTask}}</a></div>{{/WorkTask}}
                    {{#WorkCostDetail}}<div><b>WorkCostDetail</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkCostDetail}}");}); return false;'>{{WorkCostDetail}}</a></div>{{/WorkCostDetail}}
                    {{#ErpPersons}}<div><b>ErpPersons</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpPersons}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpPersons"]) obj["ErpPersons_string"] = obj["ErpPersons"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpPersons_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LaborItem_collapse" aria-expanded="true" aria-controls="{{id}}_LaborItem_collapse" style="margin-left: 10px;">LaborItem</a></legend>
                    <div id="{{id}}_LaborItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_activityCode'>activityCode: </label><div class='col-sm-8'><input id='{{id}}_activityCode' class='form-control' type='text'{{#activityCode}} value='{{activityCode}}'{{/activityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_laborDuration'>laborDuration: </label><div class='col-sm-8'><input id='{{id}}_laborDuration' class='form-control' type='text'{{#laborDuration}} value='{{laborDuration}}'{{/laborDuration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_laborRate'>laborRate: </label><div class='col-sm-8'><input id='{{id}}_laborRate' class='form-control' type='text'{{#laborRate}} value='{{laborRate}}'{{/laborRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cost'>cost: </label><div class='col-sm-8'><input id='{{id}}_cost' class='form-control' type='text'{{#cost}} value='{{cost}}'{{/cost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='{{id}}_WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkCostDetail'>WorkCostDetail: </label><div class='col-sm-8'><input id='{{id}}_WorkCostDetail' class='form-control' type='text'{{#WorkCostDetail}} value='{{WorkCostDetail}}'{{/WorkCostDetail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPersons'>ErpPersons: </label><div class='col-sm-8'><input id='{{id}}_ErpPersons' class='form-control' type='text'{{#ErpPersons}} value='{{ErpPersons_string}}'{{/ErpPersons}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LaborItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_activityCode").value; if ("" !== temp) obj["activityCode"] = temp;
                temp = document.getElementById (id + "_laborDuration").value; if ("" !== temp) obj["laborDuration"] = temp;
                temp = document.getElementById (id + "_laborRate").value; if ("" !== temp) obj["laborRate"] = temp;
                temp = document.getElementById (id + "_cost").value; if ("" !== temp) obj["cost"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_WorkTask").value; if ("" !== temp) obj["WorkTask"] = temp;
                temp = document.getElementById (id + "_WorkCostDetail").value; if ("" !== temp) obj["WorkCostDetail"] = temp;
                temp = document.getElementById (id + "_ErpPersons").value; if ("" !== temp) obj["ErpPersons"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkTask", "0..1", "0..*", "OldWorkTask", "LaborItems"],
                            ["WorkCostDetail", "1", "0..*", "WorkCostDetail", "LaborItems"],
                            ["ErpPersons", "0..*", "0..*", "OldPerson", "LaborItems"]
                        ]
                    )
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
                let bucket = cim_data.CUMaterialItem;
                if (null == bucket)
                   cim_data.CUMaterialItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CUMaterialItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CUMaterialItem";
                base.parse_element (/<cim:CUMaterialItem.corporateCode>([\s\S]*?)<\/cim:CUMaterialItem.corporateCode>/g, obj, "corporateCode", base.to_string, sub, context);
                base.parse_attribute (/<cim:CUMaterialItem.quantity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "quantity", sub, context);
                base.parse_attribute (/<cim:CUMaterialItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:CUMaterialItem.PropertyUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PropertyUnits", sub, context);
                base.parse_attributes (/<cim:CUMaterialItem.CompatibleUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                base.parse_attribute (/<cim:CUMaterialItem.TypeMaterial\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context);
                let bucket = context.parsed.CUMaterialItem;
                if (null == bucket)
                   context.parsed.CUMaterialItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CUMaterialItem", "corporateCode", "corporateCode",  base.from_string, fields);
                base.export_attribute (obj, "CUMaterialItem", "quantity", "quantity", fields);
                base.export_attribute (obj, "CUMaterialItem", "status", "status", fields);
                base.export_attributes (obj, "CUMaterialItem", "PropertyUnits", "PropertyUnits", fields);
                base.export_attributes (obj, "CUMaterialItem", "CompatibleUnits", "CompatibleUnits", fields);
                base.export_attribute (obj, "CUMaterialItem", "TypeMaterial", "TypeMaterial", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CUMaterialItem_collapse" aria-expanded="true" aria-controls="CUMaterialItem_collapse" style="margin-left: 10px;">CUMaterialItem</a></legend>
                    <div id="CUMaterialItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#corporateCode}}<div><b>corporateCode</b>: {{corporateCode}}</div>{{/corporateCode}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#PropertyUnits}}<div><b>PropertyUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PropertyUnits}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CompatibleUnits}}
                    {{#TypeMaterial}}<div><b>TypeMaterial</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TypeMaterial}}");}); return false;'>{{TypeMaterial}}</a></div>{{/TypeMaterial}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["PropertyUnits"]) obj["PropertyUnits_string"] = obj["PropertyUnits"].join ();
                if (obj["CompatibleUnits"]) obj["CompatibleUnits_string"] = obj["CompatibleUnits"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["PropertyUnits_string"];
                delete obj["CompatibleUnits_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CUMaterialItem_collapse" aria-expanded="true" aria-controls="{{id}}_CUMaterialItem_collapse" style="margin-left: 10px;">CUMaterialItem</a></legend>
                    <div id="{{id}}_CUMaterialItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_corporateCode'>corporateCode: </label><div class='col-sm-8'><input id='{{id}}_corporateCode' class='form-control' type='text'{{#corporateCode}} value='{{corporateCode}}'{{/corporateCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><input id='{{id}}_quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PropertyUnits'>PropertyUnits: </label><div class='col-sm-8'><input id='{{id}}_PropertyUnits' class='form-control' type='text'{{#PropertyUnits}} value='{{PropertyUnits_string}}'{{/PropertyUnits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='{{id}}_CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits_string}}'{{/CompatibleUnits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TypeMaterial'>TypeMaterial: </label><div class='col-sm-8'><input id='{{id}}_TypeMaterial' class='form-control' type='text'{{#TypeMaterial}} value='{{TypeMaterial}}'{{/TypeMaterial}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CUMaterialItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_corporateCode").value; if ("" !== temp) obj["corporateCode"] = temp;
                temp = document.getElementById (id + "_quantity").value; if ("" !== temp) obj["quantity"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_PropertyUnits").value; if ("" !== temp) obj["PropertyUnits"] = temp.split (",");
                temp = document.getElementById (id + "_CompatibleUnits").value; if ("" !== temp) obj["CompatibleUnits"] = temp.split (",");
                temp = document.getElementById (id + "_TypeMaterial").value; if ("" !== temp) obj["TypeMaterial"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PropertyUnits", "0..*", "0..*", "PropertyUnit", "CUMaterialItems"],
                            ["CompatibleUnits", "0..*", "0..*", "CompatibleUnit", "CUMaterialItems"],
                            ["TypeMaterial", "0..1", "0..*", "TypeMaterial", "CUMaterialItems"]
                        ]
                    )
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
                let bucket = cim_data.Capability;
                if (null == bucket)
                   cim_data.Capability = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Capability[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Capability";
                base.parse_element (/<cim:Capability.type>([\s\S]*?)<\/cim:Capability.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attribute (/<cim:Capability.validityInterval\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "validityInterval", sub, context);
                base.parse_element (/<cim:Capability.performanceFactor>([\s\S]*?)<\/cim:Capability.performanceFactor>/g, obj, "performanceFactor", base.to_string, sub, context);
                base.parse_attribute (/<cim:Capability.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:Capability.Crew\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context);
                base.parse_attributes (/<cim:Capability.Crafts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Crafts", sub, context);
                base.parse_attributes (/<cim:Capability.WorkTasks\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                let bucket = context.parsed.Capability;
                if (null == bucket)
                   context.parsed.Capability = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Capability", "type", "type",  base.from_string, fields);
                base.export_attribute (obj, "Capability", "validityInterval", "validityInterval", fields);
                base.export_element (obj, "Capability", "performanceFactor", "performanceFactor",  base.from_string, fields);
                base.export_attribute (obj, "Capability", "status", "status", fields);
                base.export_attribute (obj, "Capability", "Crew", "Crew", fields);
                base.export_attributes (obj, "Capability", "Crafts", "Crafts", fields);
                base.export_attributes (obj, "Capability", "WorkTasks", "WorkTasks", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Capability_collapse" aria-expanded="true" aria-controls="Capability_collapse" style="margin-left: 10px;">Capability</a></legend>
                    <div id="Capability_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#validityInterval}}<div><b>validityInterval</b>: {{validityInterval}}</div>{{/validityInterval}}
                    {{#performanceFactor}}<div><b>performanceFactor</b>: {{performanceFactor}}</div>{{/performanceFactor}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#Crew}}<div><b>Crew</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Crew}}");}); return false;'>{{Crew}}</a></div>{{/Crew}}
                    {{#Crafts}}<div><b>Crafts</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Crafts}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Crafts"]) obj["Crafts_string"] = obj["Crafts"].join ();
                if (obj["WorkTasks"]) obj["WorkTasks_string"] = obj["WorkTasks"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Crafts_string"];
                delete obj["WorkTasks_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Capability_collapse" aria-expanded="true" aria-controls="{{id}}_Capability_collapse" style="margin-left: 10px;">Capability</a></legend>
                    <div id="{{id}}_Capability_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_validityInterval'>validityInterval: </label><div class='col-sm-8'><input id='{{id}}_validityInterval' class='form-control' type='text'{{#validityInterval}} value='{{validityInterval}}'{{/validityInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_performanceFactor'>performanceFactor: </label><div class='col-sm-8'><input id='{{id}}_performanceFactor' class='form-control' type='text'{{#performanceFactor}} value='{{performanceFactor}}'{{/performanceFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crew'>Crew: </label><div class='col-sm-8'><input id='{{id}}_Crew' class='form-control' type='text'{{#Crew}} value='{{Crew}}'{{/Crew}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crafts'>Crafts: </label><div class='col-sm-8'><input id='{{id}}_Crafts' class='form-control' type='text'{{#Crafts}} value='{{Crafts_string}}'{{/Crafts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTasks'>WorkTasks: </label><div class='col-sm-8'><input id='{{id}}_WorkTasks' class='form-control' type='text'{{#WorkTasks}} value='{{WorkTasks_string}}'{{/WorkTasks}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Capability" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" !== temp) obj["type"] = temp;
                temp = document.getElementById (id + "_validityInterval").value; if ("" !== temp) obj["validityInterval"] = temp;
                temp = document.getElementById (id + "_performanceFactor").value; if ("" !== temp) obj["performanceFactor"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_Crew").value; if ("" !== temp) obj["Crew"] = temp;
                temp = document.getElementById (id + "_Crafts").value; if ("" !== temp) obj["Crafts"] = temp.split (",");
                temp = document.getElementById (id + "_WorkTasks").value; if ("" !== temp) obj["WorkTasks"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Crew", "0..1", "0..*", "OldCrew", "Capabilities"],
                            ["Crafts", "0..*", "0..*", "Craft", "Capabilities"],
                            ["WorkTasks", "0..*", "0..*", "OldWorkTask", "Capabilities"]
                        ]
                    )
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
                let bucket = cim_data.CUContractorItem;
                if (null == bucket)
                   cim_data.CUContractorItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CUContractorItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CUContractorItem";
                base.parse_element (/<cim:CUContractorItem.activityCode>([\s\S]*?)<\/cim:CUContractorItem.activityCode>/g, obj, "activityCode", base.to_string, sub, context);
                base.parse_element (/<cim:CUContractorItem.bidAmount>([\s\S]*?)<\/cim:CUContractorItem.bidAmount>/g, obj, "bidAmount", base.to_string, sub, context);
                base.parse_attribute (/<cim:CUContractorItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:CUContractorItem.CompatibleUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                let bucket = context.parsed.CUContractorItem;
                if (null == bucket)
                   context.parsed.CUContractorItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CUContractorItem", "activityCode", "activityCode",  base.from_string, fields);
                base.export_element (obj, "CUContractorItem", "bidAmount", "bidAmount",  base.from_string, fields);
                base.export_attribute (obj, "CUContractorItem", "status", "status", fields);
                base.export_attributes (obj, "CUContractorItem", "CompatibleUnits", "CompatibleUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CUContractorItem_collapse" aria-expanded="true" aria-controls="CUContractorItem_collapse" style="margin-left: 10px;">CUContractorItem</a></legend>
                    <div id="CUContractorItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#activityCode}}<div><b>activityCode</b>: {{activityCode}}</div>{{/activityCode}}
                    {{#bidAmount}}<div><b>bidAmount</b>: {{bidAmount}}</div>{{/bidAmount}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CompatibleUnits}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CompatibleUnits"]) obj["CompatibleUnits_string"] = obj["CompatibleUnits"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CompatibleUnits_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CUContractorItem_collapse" aria-expanded="true" aria-controls="{{id}}_CUContractorItem_collapse" style="margin-left: 10px;">CUContractorItem</a></legend>
                    <div id="{{id}}_CUContractorItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_activityCode'>activityCode: </label><div class='col-sm-8'><input id='{{id}}_activityCode' class='form-control' type='text'{{#activityCode}} value='{{activityCode}}'{{/activityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bidAmount'>bidAmount: </label><div class='col-sm-8'><input id='{{id}}_bidAmount' class='form-control' type='text'{{#bidAmount}} value='{{bidAmount}}'{{/bidAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='{{id}}_CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits_string}}'{{/CompatibleUnits}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CUContractorItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_activityCode").value; if ("" !== temp) obj["activityCode"] = temp;
                temp = document.getElementById (id + "_bidAmount").value; if ("" !== temp) obj["bidAmount"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_CompatibleUnits").value; if ("" !== temp) obj["CompatibleUnits"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CompatibleUnits", "0..*", "0..*", "CompatibleUnit", "CUContractorItems"]
                        ]
                    )
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
                let bucket = cim_data.ShiftPattern;
                if (null == bucket)
                   cim_data.ShiftPattern = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ShiftPattern[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ShiftPattern";
                base.parse_element (/<cim:ShiftPattern.assignmentType>([\s\S]*?)<\/cim:ShiftPattern.assignmentType>/g, obj, "assignmentType", base.to_string, sub, context);
                base.parse_element (/<cim:ShiftPattern.cycleCount>([\s\S]*?)<\/cim:ShiftPattern.cycleCount>/g, obj, "cycleCount", base.to_string, sub, context);
                base.parse_attribute (/<cim:ShiftPattern.validityInterval\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "validityInterval", sub, context);
                base.parse_attribute (/<cim:ShiftPattern.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:ShiftPattern.Crews\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Crews", sub, context);
                let bucket = context.parsed.ShiftPattern;
                if (null == bucket)
                   context.parsed.ShiftPattern = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ShiftPattern", "assignmentType", "assignmentType",  base.from_string, fields);
                base.export_element (obj, "ShiftPattern", "cycleCount", "cycleCount",  base.from_string, fields);
                base.export_attribute (obj, "ShiftPattern", "validityInterval", "validityInterval", fields);
                base.export_attribute (obj, "ShiftPattern", "status", "status", fields);
                base.export_attributes (obj, "ShiftPattern", "Crews", "Crews", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ShiftPattern_collapse" aria-expanded="true" aria-controls="ShiftPattern_collapse" style="margin-left: 10px;">ShiftPattern</a></legend>
                    <div id="ShiftPattern_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#assignmentType}}<div><b>assignmentType</b>: {{assignmentType}}</div>{{/assignmentType}}
                    {{#cycleCount}}<div><b>cycleCount</b>: {{cycleCount}}</div>{{/cycleCount}}
                    {{#validityInterval}}<div><b>validityInterval</b>: {{validityInterval}}</div>{{/validityInterval}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Crews}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Crews"]) obj["Crews_string"] = obj["Crews"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Crews_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ShiftPattern_collapse" aria-expanded="true" aria-controls="{{id}}_ShiftPattern_collapse" style="margin-left: 10px;">ShiftPattern</a></legend>
                    <div id="{{id}}_ShiftPattern_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_assignmentType'>assignmentType: </label><div class='col-sm-8'><input id='{{id}}_assignmentType' class='form-control' type='text'{{#assignmentType}} value='{{assignmentType}}'{{/assignmentType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cycleCount'>cycleCount: </label><div class='col-sm-8'><input id='{{id}}_cycleCount' class='form-control' type='text'{{#cycleCount}} value='{{cycleCount}}'{{/cycleCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_validityInterval'>validityInterval: </label><div class='col-sm-8'><input id='{{id}}_validityInterval' class='form-control' type='text'{{#validityInterval}} value='{{validityInterval}}'{{/validityInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crews'>Crews: </label><div class='col-sm-8'><input id='{{id}}_Crews' class='form-control' type='text'{{#Crews}} value='{{Crews_string}}'{{/Crews}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ShiftPattern" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_assignmentType").value; if ("" !== temp) obj["assignmentType"] = temp;
                temp = document.getElementById (id + "_cycleCount").value; if ("" !== temp) obj["cycleCount"] = temp;
                temp = document.getElementById (id + "_validityInterval").value; if ("" !== temp) obj["validityInterval"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_Crews").value; if ("" !== temp) obj["Crews"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Crews", "0..*", "0..*", "OldCrew", "ShiftPatterns"]
                        ]
                    )
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
                let bucket = cim_data.MiscCostItem;
                if (null == bucket)
                   cim_data.MiscCostItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MiscCostItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MiscCostItem";
                base.parse_attribute (/<cim:MiscCostItem.quantity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "quantity", sub, context);
                base.parse_element (/<cim:MiscCostItem.costPerUnit>([\s\S]*?)<\/cim:MiscCostItem.costPerUnit>/g, obj, "costPerUnit", base.to_string, sub, context);
                base.parse_element (/<cim:MiscCostItem.costType>([\s\S]*?)<\/cim:MiscCostItem.costType>/g, obj, "costType", base.to_string, sub, context);
                base.parse_element (/<cim:MiscCostItem.account>([\s\S]*?)<\/cim:MiscCostItem.account>/g, obj, "account", base.to_string, sub, context);
                base.parse_element (/<cim:MiscCostItem.externalRefID>([\s\S]*?)<\/cim:MiscCostItem.externalRefID>/g, obj, "externalRefID", base.to_string, sub, context);
                base.parse_attribute (/<cim:MiscCostItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:MiscCostItem.WorkCostDetail\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context);
                base.parse_attribute (/<cim:MiscCostItem.WorkTask\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                base.parse_attribute (/<cim:MiscCostItem.DesignLocation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocation", sub, context);
                let bucket = context.parsed.MiscCostItem;
                if (null == bucket)
                   context.parsed.MiscCostItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MiscCostItem", "quantity", "quantity", fields);
                base.export_element (obj, "MiscCostItem", "costPerUnit", "costPerUnit",  base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "costType", "costType",  base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "account", "account",  base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "externalRefID", "externalRefID",  base.from_string, fields);
                base.export_attribute (obj, "MiscCostItem", "status", "status", fields);
                base.export_attribute (obj, "MiscCostItem", "WorkCostDetail", "WorkCostDetail", fields);
                base.export_attribute (obj, "MiscCostItem", "WorkTask", "WorkTask", fields);
                base.export_attribute (obj, "MiscCostItem", "DesignLocation", "DesignLocation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MiscCostItem_collapse" aria-expanded="true" aria-controls="MiscCostItem_collapse" style="margin-left: 10px;">MiscCostItem</a></legend>
                    <div id="MiscCostItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#costPerUnit}}<div><b>costPerUnit</b>: {{costPerUnit}}</div>{{/costPerUnit}}
                    {{#costType}}<div><b>costType</b>: {{costType}}</div>{{/costType}}
                    {{#account}}<div><b>account</b>: {{account}}</div>{{/account}}
                    {{#externalRefID}}<div><b>externalRefID</b>: {{externalRefID}}</div>{{/externalRefID}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#WorkCostDetail}}<div><b>WorkCostDetail</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkCostDetail}}");}); return false;'>{{WorkCostDetail}}</a></div>{{/WorkCostDetail}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkTask}}");}); return false;'>{{WorkTask}}</a></div>{{/WorkTask}}
                    {{#DesignLocation}}<div><b>DesignLocation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DesignLocation}}");}); return false;'>{{DesignLocation}}</a></div>{{/DesignLocation}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MiscCostItem_collapse" aria-expanded="true" aria-controls="{{id}}_MiscCostItem_collapse" style="margin-left: 10px;">MiscCostItem</a></legend>
                    <div id="{{id}}_MiscCostItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><input id='{{id}}_quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_costPerUnit'>costPerUnit: </label><div class='col-sm-8'><input id='{{id}}_costPerUnit' class='form-control' type='text'{{#costPerUnit}} value='{{costPerUnit}}'{{/costPerUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_costType'>costType: </label><div class='col-sm-8'><input id='{{id}}_costType' class='form-control' type='text'{{#costType}} value='{{costType}}'{{/costType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_account'>account: </label><div class='col-sm-8'><input id='{{id}}_account' class='form-control' type='text'{{#account}} value='{{account}}'{{/account}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_externalRefID'>externalRefID: </label><div class='col-sm-8'><input id='{{id}}_externalRefID' class='form-control' type='text'{{#externalRefID}} value='{{externalRefID}}'{{/externalRefID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkCostDetail'>WorkCostDetail: </label><div class='col-sm-8'><input id='{{id}}_WorkCostDetail' class='form-control' type='text'{{#WorkCostDetail}} value='{{WorkCostDetail}}'{{/WorkCostDetail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='{{id}}_WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DesignLocation'>DesignLocation: </label><div class='col-sm-8'><input id='{{id}}_DesignLocation' class='form-control' type='text'{{#DesignLocation}} value='{{DesignLocation}}'{{/DesignLocation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MiscCostItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_quantity").value; if ("" !== temp) obj["quantity"] = temp;
                temp = document.getElementById (id + "_costPerUnit").value; if ("" !== temp) obj["costPerUnit"] = temp;
                temp = document.getElementById (id + "_costType").value; if ("" !== temp) obj["costType"] = temp;
                temp = document.getElementById (id + "_account").value; if ("" !== temp) obj["account"] = temp;
                temp = document.getElementById (id + "_externalRefID").value; if ("" !== temp) obj["externalRefID"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_WorkCostDetail").value; if ("" !== temp) obj["WorkCostDetail"] = temp;
                temp = document.getElementById (id + "_WorkTask").value; if ("" !== temp) obj["WorkTask"] = temp;
                temp = document.getElementById (id + "_DesignLocation").value; if ("" !== temp) obj["DesignLocation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkCostDetail", "0..1", "0..*", "WorkCostDetail", "MiscCostItems"],
                            ["WorkTask", "0..1", "0..*", "OldWorkTask", "MiscCostItems"],
                            ["DesignLocation", "0..1", "0..*", "DesignLocation", "MiscCostItems"]
                        ]
                    )
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
                let bucket = cim_data.CUGroup;
                if (null == bucket)
                   cim_data.CUGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CUGroup[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CUGroup";
                base.parse_attribute (/<cim:CUGroup.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:CUGroup.ParentCUGroups\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ParentCUGroups", sub, context);
                base.parse_attributes (/<cim:CUGroup.ChildCUGroups\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ChildCUGroups", sub, context);
                base.parse_attributes (/<cim:CUGroup.DesignLocationCUs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocationCUs", sub, context);
                base.parse_attributes (/<cim:CUGroup.CompatibleUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                let bucket = context.parsed.CUGroup;
                if (null == bucket)
                   context.parsed.CUGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CUGroup", "status", "status", fields);
                base.export_attributes (obj, "CUGroup", "ParentCUGroups", "ParentCUGroups", fields);
                base.export_attributes (obj, "CUGroup", "ChildCUGroups", "ChildCUGroups", fields);
                base.export_attributes (obj, "CUGroup", "DesignLocationCUs", "DesignLocationCUs", fields);
                base.export_attributes (obj, "CUGroup", "CompatibleUnits", "CompatibleUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CUGroup_collapse" aria-expanded="true" aria-controls="CUGroup_collapse" style="margin-left: 10px;">CUGroup</a></legend>
                    <div id="CUGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#ParentCUGroups}}<div><b>ParentCUGroups</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ParentCUGroups}}
                    {{#ChildCUGroups}}<div><b>ChildCUGroups</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ChildCUGroups}}
                    {{#DesignLocationCUs}}<div><b>DesignLocationCUs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DesignLocationCUs}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CompatibleUnits}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ParentCUGroups"]) obj["ParentCUGroups_string"] = obj["ParentCUGroups"].join ();
                if (obj["ChildCUGroups"]) obj["ChildCUGroups_string"] = obj["ChildCUGroups"].join ();
                if (obj["DesignLocationCUs"]) obj["DesignLocationCUs_string"] = obj["DesignLocationCUs"].join ();
                if (obj["CompatibleUnits"]) obj["CompatibleUnits_string"] = obj["CompatibleUnits"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ParentCUGroups_string"];
                delete obj["ChildCUGroups_string"];
                delete obj["DesignLocationCUs_string"];
                delete obj["CompatibleUnits_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CUGroup_collapse" aria-expanded="true" aria-controls="{{id}}_CUGroup_collapse" style="margin-left: 10px;">CUGroup</a></legend>
                    <div id="{{id}}_CUGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ParentCUGroups'>ParentCUGroups: </label><div class='col-sm-8'><input id='{{id}}_ParentCUGroups' class='form-control' type='text'{{#ParentCUGroups}} value='{{ParentCUGroups_string}}'{{/ParentCUGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ChildCUGroups'>ChildCUGroups: </label><div class='col-sm-8'><input id='{{id}}_ChildCUGroups' class='form-control' type='text'{{#ChildCUGroups}} value='{{ChildCUGroups_string}}'{{/ChildCUGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DesignLocationCUs'>DesignLocationCUs: </label><div class='col-sm-8'><input id='{{id}}_DesignLocationCUs' class='form-control' type='text'{{#DesignLocationCUs}} value='{{DesignLocationCUs_string}}'{{/DesignLocationCUs}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CUGroup" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_ParentCUGroups").value; if ("" !== temp) obj["ParentCUGroups"] = temp.split (",");
                temp = document.getElementById (id + "_ChildCUGroups").value; if ("" !== temp) obj["ChildCUGroups"] = temp.split (",");
                temp = document.getElementById (id + "_DesignLocationCUs").value; if ("" !== temp) obj["DesignLocationCUs"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ParentCUGroups", "0..*", "0..*", "CUGroup", "ChildCUGroups"],
                            ["ChildCUGroups", "0..*", "0..*", "CUGroup", "ParentCUGroups"],
                            ["DesignLocationCUs", "0..*", "0..*", "DesignLocationCU", "CUGroups"],
                            ["CompatibleUnits", "0..*", "0..1", "CompatibleUnit", "CUGroup"]
                        ]
                    )
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
                let bucket = cim_data.CUWorkEquipmentItem;
                if (null == bucket)
                   cim_data.CUWorkEquipmentItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CUWorkEquipmentItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CUWorkEquipmentItem";
                base.parse_element (/<cim:CUWorkEquipmentItem.equipCode>([\s\S]*?)<\/cim:CUWorkEquipmentItem.equipCode>/g, obj, "equipCode", base.to_string, sub, context);
                base.parse_element (/<cim:CUWorkEquipmentItem.rate>([\s\S]*?)<\/cim:CUWorkEquipmentItem.rate>/g, obj, "rate", base.to_string, sub, context);
                base.parse_attribute (/<cim:CUWorkEquipmentItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:CUWorkEquipmentItem.TypeAsset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context);
                base.parse_attributes (/<cim:CUWorkEquipmentItem.CompatibleUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                let bucket = context.parsed.CUWorkEquipmentItem;
                if (null == bucket)
                   context.parsed.CUWorkEquipmentItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CUWorkEquipmentItem", "equipCode", "equipCode",  base.from_string, fields);
                base.export_element (obj, "CUWorkEquipmentItem", "rate", "rate",  base.from_string, fields);
                base.export_attribute (obj, "CUWorkEquipmentItem", "status", "status", fields);
                base.export_attribute (obj, "CUWorkEquipmentItem", "TypeAsset", "TypeAsset", fields);
                base.export_attributes (obj, "CUWorkEquipmentItem", "CompatibleUnits", "CompatibleUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CUWorkEquipmentItem_collapse" aria-expanded="true" aria-controls="CUWorkEquipmentItem_collapse" style="margin-left: 10px;">CUWorkEquipmentItem</a></legend>
                    <div id="CUWorkEquipmentItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#equipCode}}<div><b>equipCode</b>: {{equipCode}}</div>{{/equipCode}}
                    {{#rate}}<div><b>rate</b>: {{rate}}</div>{{/rate}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#TypeAsset}}<div><b>TypeAsset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TypeAsset}}");}); return false;'>{{TypeAsset}}</a></div>{{/TypeAsset}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CompatibleUnits}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CompatibleUnits"]) obj["CompatibleUnits_string"] = obj["CompatibleUnits"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CompatibleUnits_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CUWorkEquipmentItem_collapse" aria-expanded="true" aria-controls="{{id}}_CUWorkEquipmentItem_collapse" style="margin-left: 10px;">CUWorkEquipmentItem</a></legend>
                    <div id="{{id}}_CUWorkEquipmentItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_equipCode'>equipCode: </label><div class='col-sm-8'><input id='{{id}}_equipCode' class='form-control' type='text'{{#equipCode}} value='{{equipCode}}'{{/equipCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rate'>rate: </label><div class='col-sm-8'><input id='{{id}}_rate' class='form-control' type='text'{{#rate}} value='{{rate}}'{{/rate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TypeAsset'>TypeAsset: </label><div class='col-sm-8'><input id='{{id}}_TypeAsset' class='form-control' type='text'{{#TypeAsset}} value='{{TypeAsset}}'{{/TypeAsset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='{{id}}_CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits_string}}'{{/CompatibleUnits}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CUWorkEquipmentItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_equipCode").value; if ("" !== temp) obj["equipCode"] = temp;
                temp = document.getElementById (id + "_rate").value; if ("" !== temp) obj["rate"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_TypeAsset").value; if ("" !== temp) obj["TypeAsset"] = temp;
                temp = document.getElementById (id + "_CompatibleUnits").value; if ("" !== temp) obj["CompatibleUnits"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TypeAsset", "0..1", "0..1", "WorkAsset", "CUWorkEquipmentAsset"],
                            ["CompatibleUnits", "0..*", "0..*", "CompatibleUnit", "CUWorkEquipmentItems"]
                        ]
                    )
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
                let bucket = cim_data.OverheadCost;
                if (null == bucket)
                   cim_data.OverheadCost = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OverheadCost[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OverheadCost";
                base.parse_element (/<cim:OverheadCost.code>([\s\S]*?)<\/cim:OverheadCost.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:OverheadCost.cost>([\s\S]*?)<\/cim:OverheadCost.cost>/g, obj, "cost", base.to_string, sub, context);
                base.parse_attribute (/<cim:OverheadCost.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:OverheadCost.WorkCostDetails\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                base.parse_attributes (/<cim:OverheadCost.WorkTasks\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                let bucket = context.parsed.OverheadCost;
                if (null == bucket)
                   context.parsed.OverheadCost = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "OverheadCost", "code", "code",  base.from_string, fields);
                base.export_element (obj, "OverheadCost", "cost", "cost",  base.from_string, fields);
                base.export_attribute (obj, "OverheadCost", "status", "status", fields);
                base.export_attributes (obj, "OverheadCost", "WorkCostDetails", "WorkCostDetails", fields);
                base.export_attributes (obj, "OverheadCost", "WorkTasks", "WorkTasks", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OverheadCost_collapse" aria-expanded="true" aria-controls="OverheadCost_collapse" style="margin-left: 10px;">OverheadCost</a></legend>
                    <div id="OverheadCost_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
                    {{#cost}}<div><b>cost</b>: {{cost}}</div>{{/cost}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkCostDetails}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["WorkCostDetails"]) obj["WorkCostDetails_string"] = obj["WorkCostDetails"].join ();
                if (obj["WorkTasks"]) obj["WorkTasks_string"] = obj["WorkTasks"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["WorkCostDetails_string"];
                delete obj["WorkTasks_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OverheadCost_collapse" aria-expanded="true" aria-controls="{{id}}_OverheadCost_collapse" style="margin-left: 10px;">OverheadCost</a></legend>
                    <div id="{{id}}_OverheadCost_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_code'>code: </label><div class='col-sm-8'><input id='{{id}}_code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cost'>cost: </label><div class='col-sm-8'><input id='{{id}}_cost' class='form-control' type='text'{{#cost}} value='{{cost}}'{{/cost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OverheadCost" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_code").value; if ("" !== temp) obj["code"] = temp;
                temp = document.getElementById (id + "_cost").value; if ("" !== temp) obj["cost"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkCostDetails", "0..*", "0..1", "WorkCostDetail", "OverheadCost"],
                            ["WorkTasks", "0..*", "0..1", "OldWorkTask", "OverheadCost"]
                        ]
                    )
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
                let bucket = cim_data.CostType;
                if (null == bucket)
                   cim_data.CostType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CostType[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CostType";
                base.parse_element (/<cim:CostType.code>([\s\S]*?)<\/cim:CostType.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:CostType.level>([\s\S]*?)<\/cim:CostType.level>/g, obj, "level", base.to_string, sub, context);
                base.parse_element (/<cim:CostType.amountAssignable>([\s\S]*?)<\/cim:CostType.amountAssignable>/g, obj, "amountAssignable", base.to_boolean, sub, context);
                base.parse_element (/<cim:CostType.stage>([\s\S]*?)<\/cim:CostType.stage>/g, obj, "stage", base.to_string, sub, context);
                base.parse_attribute (/<cim:CostType.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:CostType.WorkCostDetails\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                base.parse_attribute (/<cim:CostType.ParentCostType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ParentCostType", sub, context);
                base.parse_attributes (/<cim:CostType.ChildCostTypes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ChildCostTypes", sub, context);
                base.parse_attributes (/<cim:CostType.CompatibleUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                base.parse_attributes (/<cim:CostType.ErpJournalEntries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpJournalEntries", sub, context);
                let bucket = context.parsed.CostType;
                if (null == bucket)
                   context.parsed.CostType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CostType", "code", "code",  base.from_string, fields);
                base.export_element (obj, "CostType", "level", "level",  base.from_string, fields);
                base.export_element (obj, "CostType", "amountAssignable", "amountAssignable",  base.from_boolean, fields);
                base.export_element (obj, "CostType", "stage", "stage",  base.from_string, fields);
                base.export_attribute (obj, "CostType", "status", "status", fields);
                base.export_attributes (obj, "CostType", "WorkCostDetails", "WorkCostDetails", fields);
                base.export_attribute (obj, "CostType", "ParentCostType", "ParentCostType", fields);
                base.export_attributes (obj, "CostType", "ChildCostTypes", "ChildCostTypes", fields);
                base.export_attributes (obj, "CostType", "CompatibleUnits", "CompatibleUnits", fields);
                base.export_attributes (obj, "CostType", "ErpJournalEntries", "ErpJournalEntries", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CostType_collapse" aria-expanded="true" aria-controls="CostType_collapse" style="margin-left: 10px;">CostType</a></legend>
                    <div id="CostType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
                    {{#level}}<div><b>level</b>: {{level}}</div>{{/level}}
                    {{#amountAssignable}}<div><b>amountAssignable</b>: {{amountAssignable}}</div>{{/amountAssignable}}
                    {{#stage}}<div><b>stage</b>: {{stage}}</div>{{/stage}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkCostDetails}}
                    {{#ParentCostType}}<div><b>ParentCostType</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ParentCostType}}");}); return false;'>{{ParentCostType}}</a></div>{{/ParentCostType}}
                    {{#ChildCostTypes}}<div><b>ChildCostTypes</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ChildCostTypes}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CompatibleUnits}}
                    {{#ErpJournalEntries}}<div><b>ErpJournalEntries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpJournalEntries}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["WorkCostDetails"]) obj["WorkCostDetails_string"] = obj["WorkCostDetails"].join ();
                if (obj["ChildCostTypes"]) obj["ChildCostTypes_string"] = obj["ChildCostTypes"].join ();
                if (obj["CompatibleUnits"]) obj["CompatibleUnits_string"] = obj["CompatibleUnits"].join ();
                if (obj["ErpJournalEntries"]) obj["ErpJournalEntries_string"] = obj["ErpJournalEntries"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["WorkCostDetails_string"];
                delete obj["ChildCostTypes_string"];
                delete obj["CompatibleUnits_string"];
                delete obj["ErpJournalEntries_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CostType_collapse" aria-expanded="true" aria-controls="{{id}}_CostType_collapse" style="margin-left: 10px;">CostType</a></legend>
                    <div id="{{id}}_CostType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_code'>code: </label><div class='col-sm-8'><input id='{{id}}_code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_level'>level: </label><div class='col-sm-8'><input id='{{id}}_level' class='form-control' type='text'{{#level}} value='{{level}}'{{/level}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_amountAssignable'>amountAssignable: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_amountAssignable' class='form-check-input' type='checkbox'{{#amountAssignable}} checked{{/amountAssignable}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stage'>stage: </label><div class='col-sm-8'><input id='{{id}}_stage' class='form-control' type='text'{{#stage}} value='{{stage}}'{{/stage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ParentCostType'>ParentCostType: </label><div class='col-sm-8'><input id='{{id}}_ParentCostType' class='form-control' type='text'{{#ParentCostType}} value='{{ParentCostType}}'{{/ParentCostType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpJournalEntries'>ErpJournalEntries: </label><div class='col-sm-8'><input id='{{id}}_ErpJournalEntries' class='form-control' type='text'{{#ErpJournalEntries}} value='{{ErpJournalEntries_string}}'{{/ErpJournalEntries}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CostType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_code").value; if ("" !== temp) obj["code"] = temp;
                temp = document.getElementById (id + "_level").value; if ("" !== temp) obj["level"] = temp;
                temp = document.getElementById (id + "_amountAssignable").checked; if (temp) obj["amountAssignable"] = true;
                temp = document.getElementById (id + "_stage").value; if ("" !== temp) obj["stage"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_ParentCostType").value; if ("" !== temp) obj["ParentCostType"] = temp;
                temp = document.getElementById (id + "_ErpJournalEntries").value; if ("" !== temp) obj["ErpJournalEntries"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkCostDetails", "0..*", "1", "WorkCostDetail", "CostType"],
                            ["ParentCostType", "0..1", "0..*", "CostType", "ChildCostTypes"],
                            ["ChildCostTypes", "0..*", "0..1", "CostType", "ParentCostType"],
                            ["CompatibleUnits", "0..*", "0..1", "CompatibleUnit", "CostType"],
                            ["ErpJournalEntries", "0..*", "0..*", "ErpJournalEntry", "CostTypes"]
                        ]
                    )
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
                let bucket = cim_data.DesignLocation;
                if (null == bucket)
                   cim_data.DesignLocation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DesignLocation[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DesignLocation";
                base.parse_element (/<cim:DesignLocation.spanLength>([\s\S]*?)<\/cim:DesignLocation.spanLength>/g, obj, "spanLength", base.to_string, sub, context);
                base.parse_attribute (/<cim:DesignLocation.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:DesignLocation.WorkLocations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkLocations", sub, context);
                base.parse_attributes (/<cim:DesignLocation.ConditionFactors\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConditionFactors", sub, context);
                base.parse_attributes (/<cim:DesignLocation.DesignLocationCUs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocationCUs", sub, context);
                base.parse_attributes (/<cim:DesignLocation.MiscCostItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MiscCostItems", sub, context);
                base.parse_attributes (/<cim:DesignLocation.Designs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Designs", sub, context);
                base.parse_attributes (/<cim:DesignLocation.ErpBomItemDatas\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpBomItemDatas", sub, context);
                let bucket = context.parsed.DesignLocation;
                if (null == bucket)
                   context.parsed.DesignLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "DesignLocation", "spanLength", "spanLength",  base.from_string, fields);
                base.export_attribute (obj, "DesignLocation", "status", "status", fields);
                base.export_attributes (obj, "DesignLocation", "WorkLocations", "WorkLocations", fields);
                base.export_attributes (obj, "DesignLocation", "ConditionFactors", "ConditionFactors", fields);
                base.export_attributes (obj, "DesignLocation", "DesignLocationCUs", "DesignLocationCUs", fields);
                base.export_attributes (obj, "DesignLocation", "MiscCostItems", "MiscCostItems", fields);
                base.export_attributes (obj, "DesignLocation", "Designs", "Designs", fields);
                base.export_attributes (obj, "DesignLocation", "ErpBomItemDatas", "ErpBomItemDatas", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DesignLocation_collapse" aria-expanded="true" aria-controls="DesignLocation_collapse" style="margin-left: 10px;">DesignLocation</a></legend>
                    <div id="DesignLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#spanLength}}<div><b>spanLength</b>: {{spanLength}}</div>{{/spanLength}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#WorkLocations}}<div><b>WorkLocations</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkLocations}}
                    {{#ConditionFactors}}<div><b>ConditionFactors</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ConditionFactors}}
                    {{#DesignLocationCUs}}<div><b>DesignLocationCUs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DesignLocationCUs}}
                    {{#MiscCostItems}}<div><b>MiscCostItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MiscCostItems}}
                    {{#Designs}}<div><b>Designs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Designs}}
                    {{#ErpBomItemDatas}}<div><b>ErpBomItemDatas</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpBomItemDatas}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["WorkLocations"]) obj["WorkLocations_string"] = obj["WorkLocations"].join ();
                if (obj["ConditionFactors"]) obj["ConditionFactors_string"] = obj["ConditionFactors"].join ();
                if (obj["DesignLocationCUs"]) obj["DesignLocationCUs_string"] = obj["DesignLocationCUs"].join ();
                if (obj["MiscCostItems"]) obj["MiscCostItems_string"] = obj["MiscCostItems"].join ();
                if (obj["Designs"]) obj["Designs_string"] = obj["Designs"].join ();
                if (obj["ErpBomItemDatas"]) obj["ErpBomItemDatas_string"] = obj["ErpBomItemDatas"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["WorkLocations_string"];
                delete obj["ConditionFactors_string"];
                delete obj["DesignLocationCUs_string"];
                delete obj["MiscCostItems_string"];
                delete obj["Designs_string"];
                delete obj["ErpBomItemDatas_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DesignLocation_collapse" aria-expanded="true" aria-controls="{{id}}_DesignLocation_collapse" style="margin-left: 10px;">DesignLocation</a></legend>
                    <div id="{{id}}_DesignLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_spanLength'>spanLength: </label><div class='col-sm-8'><input id='{{id}}_spanLength' class='form-control' type='text'{{#spanLength}} value='{{spanLength}}'{{/spanLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkLocations'>WorkLocations: </label><div class='col-sm-8'><input id='{{id}}_WorkLocations' class='form-control' type='text'{{#WorkLocations}} value='{{WorkLocations_string}}'{{/WorkLocations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConditionFactors'>ConditionFactors: </label><div class='col-sm-8'><input id='{{id}}_ConditionFactors' class='form-control' type='text'{{#ConditionFactors}} value='{{ConditionFactors_string}}'{{/ConditionFactors}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Designs'>Designs: </label><div class='col-sm-8'><input id='{{id}}_Designs' class='form-control' type='text'{{#Designs}} value='{{Designs_string}}'{{/Designs}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DesignLocation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_spanLength").value; if ("" !== temp) obj["spanLength"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_WorkLocations").value; if ("" !== temp) obj["WorkLocations"] = temp.split (",");
                temp = document.getElementById (id + "_ConditionFactors").value; if ("" !== temp) obj["ConditionFactors"] = temp.split (",");
                temp = document.getElementById (id + "_Designs").value; if ("" !== temp) obj["Designs"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkLocations", "1..*", "0..*", "WorkLocation", "DesignLocations"],
                            ["ConditionFactors", "0..*", "0..*", "ConditionFactor", "DesignLocations"],
                            ["DesignLocationCUs", "0..*", "0..1", "DesignLocationCU", "DesignLocation"],
                            ["MiscCostItems", "0..*", "0..1", "MiscCostItem", "DesignLocation"],
                            ["Designs", "1..*", "0..*", "Design", "DesignLocations"],
                            ["ErpBomItemDatas", "0..*", "0..1", "ErpBomItemData", "DesignLocation"]
                        ]
                    )
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
                let bucket = cim_data.Usage;
                if (null == bucket)
                   cim_data.Usage = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Usage[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Usage";
                base.parse_attribute (/<cim:Usage.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:Usage.WorkTask\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                let bucket = context.parsed.Usage;
                if (null == bucket)
                   context.parsed.Usage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Usage", "status", "status", fields);
                base.export_attribute (obj, "Usage", "WorkTask", "WorkTask", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Usage_collapse" aria-expanded="true" aria-controls="Usage_collapse" style="margin-left: 10px;">Usage</a></legend>
                    <div id="Usage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkTask}}");}); return false;'>{{WorkTask}}</a></div>{{/WorkTask}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Usage_collapse" aria-expanded="true" aria-controls="{{id}}_Usage_collapse" style="margin-left: 10px;">Usage</a></legend>
                    <div id="{{id}}_Usage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='{{id}}_WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Usage" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_WorkTask").value; if ("" !== temp) obj["WorkTask"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkTask", "0..1", "0..*", "OldWorkTask", "Usages"]
                        ]
                    )
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
                let bucket = cim_data.ConditionFactor;
                if (null == bucket)
                   cim_data.ConditionFactor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConditionFactor[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ConditionFactor";
                base.parse_attribute (/<cim:ConditionFactor.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:ConditionFactor.cfValue>([\s\S]*?)<\/cim:ConditionFactor.cfValue>/g, obj, "cfValue", base.to_string, sub, context);
                base.parse_attribute (/<cim:ConditionFactor.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:ConditionFactor.DesignLocations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocations", sub, context);
                base.parse_attributes (/<cim:ConditionFactor.Designs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Designs", sub, context);
                base.parse_attributes (/<cim:ConditionFactor.DesignLocationCUs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocationCUs", sub, context);
                let bucket = context.parsed.ConditionFactor;
                if (null == bucket)
                   context.parsed.ConditionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ConditionFactor", "kind", "kind", fields);
                base.export_element (obj, "ConditionFactor", "cfValue", "cfValue",  base.from_string, fields);
                base.export_attribute (obj, "ConditionFactor", "status", "status", fields);
                base.export_attributes (obj, "ConditionFactor", "DesignLocations", "DesignLocations", fields);
                base.export_attributes (obj, "ConditionFactor", "Designs", "Designs", fields);
                base.export_attributes (obj, "ConditionFactor", "DesignLocationCUs", "DesignLocationCUs", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ConditionFactor_collapse" aria-expanded="true" aria-controls="ConditionFactor_collapse" style="margin-left: 10px;">ConditionFactor</a></legend>
                    <div id="ConditionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#cfValue}}<div><b>cfValue</b>: {{cfValue}}</div>{{/cfValue}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#DesignLocations}}<div><b>DesignLocations</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DesignLocations}}
                    {{#Designs}}<div><b>Designs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Designs}}
                    {{#DesignLocationCUs}}<div><b>DesignLocationCUs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DesignLocationCUs}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindConditionFactorKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in ConditionFactorKind) obj["kindConditionFactorKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["DesignLocations"]) obj["DesignLocations_string"] = obj["DesignLocations"].join ();
                if (obj["Designs"]) obj["Designs_string"] = obj["Designs"].join ();
                if (obj["DesignLocationCUs"]) obj["DesignLocationCUs_string"] = obj["DesignLocationCUs"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindConditionFactorKind"];
                delete obj["DesignLocations_string"];
                delete obj["Designs_string"];
                delete obj["DesignLocationCUs_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ConditionFactor_collapse" aria-expanded="true" aria-controls="{{id}}_ConditionFactor_collapse" style="margin-left: 10px;">ConditionFactor</a></legend>
                    <div id="{{id}}_ConditionFactor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindConditionFactorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindConditionFactorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cfValue'>cfValue: </label><div class='col-sm-8'><input id='{{id}}_cfValue' class='form-control' type='text'{{#cfValue}} value='{{cfValue}}'{{/cfValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DesignLocations'>DesignLocations: </label><div class='col-sm-8'><input id='{{id}}_DesignLocations' class='form-control' type='text'{{#DesignLocations}} value='{{DesignLocations_string}}'{{/DesignLocations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Designs'>Designs: </label><div class='col-sm-8'><input id='{{id}}_Designs' class='form-control' type='text'{{#Designs}} value='{{Designs_string}}'{{/Designs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DesignLocationCUs'>DesignLocationCUs: </label><div class='col-sm-8'><input id='{{id}}_DesignLocationCUs' class='form-control' type='text'{{#DesignLocationCUs}} value='{{DesignLocationCUs_string}}'{{/DesignLocationCUs}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ConditionFactor" };
                super.submit (id, obj);
                temp = ConditionFactorKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ConditionFactorKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_cfValue").value; if ("" !== temp) obj["cfValue"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_DesignLocations").value; if ("" !== temp) obj["DesignLocations"] = temp.split (",");
                temp = document.getElementById (id + "_Designs").value; if ("" !== temp) obj["Designs"] = temp.split (",");
                temp = document.getElementById (id + "_DesignLocationCUs").value; if ("" !== temp) obj["DesignLocationCUs"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DesignLocations", "0..*", "0..*", "DesignLocation", "ConditionFactors"],
                            ["Designs", "0..*", "0..*", "Design", "ConditionFactors"],
                            ["DesignLocationCUs", "0..*", "0..*", "DesignLocationCU", "ConditionFactors"]
                        ]
                    )
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
                let bucket = cim_data.CULaborCode;
                if (null == bucket)
                   cim_data.CULaborCode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CULaborCode[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CULaborCode";
                base.parse_element (/<cim:CULaborCode.code>([\s\S]*?)<\/cim:CULaborCode.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_attribute (/<cim:CULaborCode.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:CULaborCode.CULaborItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CULaborItems", sub, context);
                let bucket = context.parsed.CULaborCode;
                if (null == bucket)
                   context.parsed.CULaborCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CULaborCode", "code", "code",  base.from_string, fields);
                base.export_attribute (obj, "CULaborCode", "status", "status", fields);
                base.export_attributes (obj, "CULaborCode", "CULaborItems", "CULaborItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CULaborCode_collapse" aria-expanded="true" aria-controls="CULaborCode_collapse" style="margin-left: 10px;">CULaborCode</a></legend>
                    <div id="CULaborCode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#CULaborItems}}<div><b>CULaborItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CULaborItems}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CULaborItems"]) obj["CULaborItems_string"] = obj["CULaborItems"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CULaborItems_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CULaborCode_collapse" aria-expanded="true" aria-controls="{{id}}_CULaborCode_collapse" style="margin-left: 10px;">CULaborCode</a></legend>
                    <div id="{{id}}_CULaborCode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_code'>code: </label><div class='col-sm-8'><input id='{{id}}_code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CULaborCode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_code").value; if ("" !== temp) obj["code"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CULaborItems", "0..*", "0..1", "CULaborItem", "CULaborCode"]
                        ]
                    )
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
                let bucket = cim_data.WorkFlowStep;
                if (null == bucket)
                   cim_data.WorkFlowStep = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkFlowStep[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WorkFlowStep";
                base.parse_element (/<cim:WorkFlowStep.sequenceNumber>([\s\S]*?)<\/cim:WorkFlowStep.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:WorkFlowStep.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:WorkFlowStep.Work\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Work", sub, context);
                base.parse_attributes (/<cim:WorkFlowStep.WorkTasks\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                let bucket = context.parsed.WorkFlowStep;
                if (null == bucket)
                   context.parsed.WorkFlowStep = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WorkFlowStep", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_attribute (obj, "WorkFlowStep", "status", "status", fields);
                base.export_attribute (obj, "WorkFlowStep", "Work", "Work", fields);
                base.export_attributes (obj, "WorkFlowStep", "WorkTasks", "WorkTasks", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkFlowStep_collapse" aria-expanded="true" aria-controls="WorkFlowStep_collapse" style="margin-left: 10px;">WorkFlowStep</a></legend>
                    <div id="WorkFlowStep_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#Work}}<div><b>Work</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Work}}");}); return false;'>{{Work}}</a></div>{{/Work}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["WorkTasks"]) obj["WorkTasks_string"] = obj["WorkTasks"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["WorkTasks_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkFlowStep_collapse" aria-expanded="true" aria-controls="{{id}}_WorkFlowStep_collapse" style="margin-left: 10px;">WorkFlowStep</a></legend>
                    <div id="{{id}}_WorkFlowStep_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Work'>Work: </label><div class='col-sm-8'><input id='{{id}}_Work' class='form-control' type='text'{{#Work}} value='{{Work}}'{{/Work}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WorkFlowStep" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" !== temp) obj["sequenceNumber"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_Work").value; if ("" !== temp) obj["Work"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Work", "0..1", "0..*", "Work", "WorkFlowSteps"],
                            ["WorkTasks", "0..*", "0..1", "OldWorkTask", "WorkFlowStep"]
                        ]
                    )
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
                let bucket = cim_data.DesignLocationCU;
                if (null == bucket)
                   cim_data.DesignLocationCU = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DesignLocationCU[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DesignLocationCU";
                base.parse_attribute (/<cim:DesignLocationCU.cuQuantity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "cuQuantity", sub, context);
                base.parse_attribute (/<cim:DesignLocationCU.cuAction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "cuAction", sub, context);
                base.parse_element (/<cim:DesignLocationCU.cuUsage>([\s\S]*?)<\/cim:DesignLocationCU.cuUsage>/g, obj, "cuUsage", base.to_string, sub, context);
                base.parse_element (/<cim:DesignLocationCU.cuAccount>([\s\S]*?)<\/cim:DesignLocationCU.cuAccount>/g, obj, "cuAccount", base.to_string, sub, context);
                base.parse_element (/<cim:DesignLocationCU.toBeEnergised>([\s\S]*?)<\/cim:DesignLocationCU.toBeEnergised>/g, obj, "toBeEnergised", base.to_boolean, sub, context);
                base.parse_element (/<cim:DesignLocationCU.removalDate>([\s\S]*?)<\/cim:DesignLocationCU.removalDate>/g, obj, "removalDate", base.to_string, sub, context);
                base.parse_attribute (/<cim:DesignLocationCU.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:DesignLocationCU.WorkTasks\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attributes (/<cim:DesignLocationCU.ConditionFactors\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConditionFactors", sub, context);
                base.parse_attributes (/<cim:DesignLocationCU.CUGroups\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CUGroups", sub, context);
                base.parse_attributes (/<cim:DesignLocationCU.CompatibleUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                base.parse_attribute (/<cim:DesignLocationCU.DesignLocation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocation", sub, context);
                base.parse_attributes (/<cim:DesignLocationCU.Designs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Designs", sub, context);
                let bucket = context.parsed.DesignLocationCU;
                if (null == bucket)
                   context.parsed.DesignLocationCU = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DesignLocationCU", "cuQuantity", "cuQuantity", fields);
                base.export_attribute (obj, "DesignLocationCU", "cuAction", "cuAction", fields);
                base.export_element (obj, "DesignLocationCU", "cuUsage", "cuUsage",  base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "cuAccount", "cuAccount",  base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "toBeEnergised", "toBeEnergised",  base.from_boolean, fields);
                base.export_element (obj, "DesignLocationCU", "removalDate", "removalDate",  base.from_string, fields);
                base.export_attribute (obj, "DesignLocationCU", "status", "status", fields);
                base.export_attributes (obj, "DesignLocationCU", "WorkTasks", "WorkTasks", fields);
                base.export_attributes (obj, "DesignLocationCU", "ConditionFactors", "ConditionFactors", fields);
                base.export_attributes (obj, "DesignLocationCU", "CUGroups", "CUGroups", fields);
                base.export_attributes (obj, "DesignLocationCU", "CompatibleUnits", "CompatibleUnits", fields);
                base.export_attribute (obj, "DesignLocationCU", "DesignLocation", "DesignLocation", fields);
                base.export_attributes (obj, "DesignLocationCU", "Designs", "Designs", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DesignLocationCU_collapse" aria-expanded="true" aria-controls="DesignLocationCU_collapse" style="margin-left: 10px;">DesignLocationCU</a></legend>
                    <div id="DesignLocationCU_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#cuQuantity}}<div><b>cuQuantity</b>: {{cuQuantity}}</div>{{/cuQuantity}}
                    {{#cuAction}}<div><b>cuAction</b>: {{cuAction}}</div>{{/cuAction}}
                    {{#cuUsage}}<div><b>cuUsage</b>: {{cuUsage}}</div>{{/cuUsage}}
                    {{#cuAccount}}<div><b>cuAccount</b>: {{cuAccount}}</div>{{/cuAccount}}
                    {{#toBeEnergised}}<div><b>toBeEnergised</b>: {{toBeEnergised}}</div>{{/toBeEnergised}}
                    {{#removalDate}}<div><b>removalDate</b>: {{removalDate}}</div>{{/removalDate}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    {{#ConditionFactors}}<div><b>ConditionFactors</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ConditionFactors}}
                    {{#CUGroups}}<div><b>CUGroups</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CUGroups}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CompatibleUnits}}
                    {{#DesignLocation}}<div><b>DesignLocation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DesignLocation}}");}); return false;'>{{DesignLocation}}</a></div>{{/DesignLocation}}
                    {{#Designs}}<div><b>Designs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Designs}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["cuActionWorkActionKind"] = [{ id: '', selected: (!obj["cuAction"])}]; for (let property in WorkActionKind) obj["cuActionWorkActionKind"].push ({ id: property, selected: obj["cuAction"] && obj["cuAction"].endsWith ('.' + property)});
                if (obj["WorkTasks"]) obj["WorkTasks_string"] = obj["WorkTasks"].join ();
                if (obj["ConditionFactors"]) obj["ConditionFactors_string"] = obj["ConditionFactors"].join ();
                if (obj["CUGroups"]) obj["CUGroups_string"] = obj["CUGroups"].join ();
                if (obj["CompatibleUnits"]) obj["CompatibleUnits_string"] = obj["CompatibleUnits"].join ();
                if (obj["Designs"]) obj["Designs_string"] = obj["Designs"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["cuActionWorkActionKind"];
                delete obj["WorkTasks_string"];
                delete obj["ConditionFactors_string"];
                delete obj["CUGroups_string"];
                delete obj["CompatibleUnits_string"];
                delete obj["Designs_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DesignLocationCU_collapse" aria-expanded="true" aria-controls="{{id}}_DesignLocationCU_collapse" style="margin-left: 10px;">DesignLocationCU</a></legend>
                    <div id="{{id}}_DesignLocationCU_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cuQuantity'>cuQuantity: </label><div class='col-sm-8'><input id='{{id}}_cuQuantity' class='form-control' type='text'{{#cuQuantity}} value='{{cuQuantity}}'{{/cuQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cuAction'>cuAction: </label><div class='col-sm-8'><select id='{{id}}_cuAction' class='form-control custom-select'>{{#cuActionWorkActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/cuActionWorkActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cuUsage'>cuUsage: </label><div class='col-sm-8'><input id='{{id}}_cuUsage' class='form-control' type='text'{{#cuUsage}} value='{{cuUsage}}'{{/cuUsage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cuAccount'>cuAccount: </label><div class='col-sm-8'><input id='{{id}}_cuAccount' class='form-control' type='text'{{#cuAccount}} value='{{cuAccount}}'{{/cuAccount}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_toBeEnergised'>toBeEnergised: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_toBeEnergised' class='form-check-input' type='checkbox'{{#toBeEnergised}} checked{{/toBeEnergised}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_removalDate'>removalDate: </label><div class='col-sm-8'><input id='{{id}}_removalDate' class='form-control' type='text'{{#removalDate}} value='{{removalDate}}'{{/removalDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTasks'>WorkTasks: </label><div class='col-sm-8'><input id='{{id}}_WorkTasks' class='form-control' type='text'{{#WorkTasks}} value='{{WorkTasks_string}}'{{/WorkTasks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConditionFactors'>ConditionFactors: </label><div class='col-sm-8'><input id='{{id}}_ConditionFactors' class='form-control' type='text'{{#ConditionFactors}} value='{{ConditionFactors_string}}'{{/ConditionFactors}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CUGroups'>CUGroups: </label><div class='col-sm-8'><input id='{{id}}_CUGroups' class='form-control' type='text'{{#CUGroups}} value='{{CUGroups_string}}'{{/CUGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='{{id}}_CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits_string}}'{{/CompatibleUnits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DesignLocation'>DesignLocation: </label><div class='col-sm-8'><input id='{{id}}_DesignLocation' class='form-control' type='text'{{#DesignLocation}} value='{{DesignLocation}}'{{/DesignLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Designs'>Designs: </label><div class='col-sm-8'><input id='{{id}}_Designs' class='form-control' type='text'{{#Designs}} value='{{Designs_string}}'{{/Designs}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DesignLocationCU" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cuQuantity").value; if ("" !== temp) obj["cuQuantity"] = temp;
                temp = WorkActionKind[document.getElementById (id + "_cuAction").value]; if (temp) obj["cuAction"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#WorkActionKind." + temp; else delete obj["cuAction"];
                temp = document.getElementById (id + "_cuUsage").value; if ("" !== temp) obj["cuUsage"] = temp;
                temp = document.getElementById (id + "_cuAccount").value; if ("" !== temp) obj["cuAccount"] = temp;
                temp = document.getElementById (id + "_toBeEnergised").checked; if (temp) obj["toBeEnergised"] = true;
                temp = document.getElementById (id + "_removalDate").value; if ("" !== temp) obj["removalDate"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_WorkTasks").value; if ("" !== temp) obj["WorkTasks"] = temp.split (",");
                temp = document.getElementById (id + "_ConditionFactors").value; if ("" !== temp) obj["ConditionFactors"] = temp.split (",");
                temp = document.getElementById (id + "_CUGroups").value; if ("" !== temp) obj["CUGroups"] = temp.split (",");
                temp = document.getElementById (id + "_CompatibleUnits").value; if ("" !== temp) obj["CompatibleUnits"] = temp.split (",");
                temp = document.getElementById (id + "_DesignLocation").value; if ("" !== temp) obj["DesignLocation"] = temp;
                temp = document.getElementById (id + "_Designs").value; if ("" !== temp) obj["Designs"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkTasks", "0..*", "0..*", "OldWorkTask", "DesignLocationCUs"],
                            ["ConditionFactors", "0..*", "0..*", "ConditionFactor", "DesignLocationCUs"],
                            ["CUGroups", "0..*", "0..*", "CUGroup", "DesignLocationCUs"],
                            ["CompatibleUnits", "0..*", "0..*", "CompatibleUnit", "DesignLocationCUs"],
                            ["DesignLocation", "0..1", "0..*", "DesignLocation", "DesignLocationCUs"],
                            ["Designs", "0..*", "0..*", "Design", "DesignLocationsCUs"]
                        ]
                    )
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
                let bucket = cim_data.QualificationRequirement;
                if (null == bucket)
                   cim_data.QualificationRequirement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.QualificationRequirement[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "QualificationRequirement";
                base.parse_element (/<cim:QualificationRequirement.qualificationID>([\s\S]*?)<\/cim:QualificationRequirement.qualificationID>/g, obj, "qualificationID", base.to_string, sub, context);
                base.parse_attributes (/<cim:QualificationRequirement.WorkTasks\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attributes (/<cim:QualificationRequirement.Skills\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Skills", sub, context);
                base.parse_attributes (/<cim:QualificationRequirement.CULaborItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CULaborItems", sub, context);
                base.parse_attributes (/<cim:QualificationRequirement.Specifications\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Specifications", sub, context);
                let bucket = context.parsed.QualificationRequirement;
                if (null == bucket)
                   context.parsed.QualificationRequirement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "QualificationRequirement", "qualificationID", "qualificationID",  base.from_string, fields);
                base.export_attributes (obj, "QualificationRequirement", "WorkTasks", "WorkTasks", fields);
                base.export_attributes (obj, "QualificationRequirement", "Skills", "Skills", fields);
                base.export_attributes (obj, "QualificationRequirement", "CULaborItems", "CULaborItems", fields);
                base.export_attributes (obj, "QualificationRequirement", "Specifications", "Specifications", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#QualificationRequirement_collapse" aria-expanded="true" aria-controls="QualificationRequirement_collapse" style="margin-left: 10px;">QualificationRequirement</a></legend>
                    <div id="QualificationRequirement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#qualificationID}}<div><b>qualificationID</b>: {{qualificationID}}</div>{{/qualificationID}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    {{#Skills}}<div><b>Skills</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Skills}}
                    {{#CULaborItems}}<div><b>CULaborItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CULaborItems}}
                    {{#Specifications}}<div><b>Specifications</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Specifications}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["WorkTasks"]) obj["WorkTasks_string"] = obj["WorkTasks"].join ();
                if (obj["Skills"]) obj["Skills_string"] = obj["Skills"].join ();
                if (obj["CULaborItems"]) obj["CULaborItems_string"] = obj["CULaborItems"].join ();
                if (obj["Specifications"]) obj["Specifications_string"] = obj["Specifications"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["WorkTasks_string"];
                delete obj["Skills_string"];
                delete obj["CULaborItems_string"];
                delete obj["Specifications_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_QualificationRequirement_collapse" aria-expanded="true" aria-controls="{{id}}_QualificationRequirement_collapse" style="margin-left: 10px;">QualificationRequirement</a></legend>
                    <div id="{{id}}_QualificationRequirement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qualificationID'>qualificationID: </label><div class='col-sm-8'><input id='{{id}}_qualificationID' class='form-control' type='text'{{#qualificationID}} value='{{qualificationID}}'{{/qualificationID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTasks'>WorkTasks: </label><div class='col-sm-8'><input id='{{id}}_WorkTasks' class='form-control' type='text'{{#WorkTasks}} value='{{WorkTasks_string}}'{{/WorkTasks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Skills'>Skills: </label><div class='col-sm-8'><input id='{{id}}_Skills' class='form-control' type='text'{{#Skills}} value='{{Skills_string}}'{{/Skills}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CULaborItems'>CULaborItems: </label><div class='col-sm-8'><input id='{{id}}_CULaborItems' class='form-control' type='text'{{#CULaborItems}} value='{{CULaborItems_string}}'{{/CULaborItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Specifications'>Specifications: </label><div class='col-sm-8'><input id='{{id}}_Specifications' class='form-control' type='text'{{#Specifications}} value='{{Specifications_string}}'{{/Specifications}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "QualificationRequirement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_qualificationID").value; if ("" !== temp) obj["qualificationID"] = temp;
                temp = document.getElementById (id + "_WorkTasks").value; if ("" !== temp) obj["WorkTasks"] = temp.split (",");
                temp = document.getElementById (id + "_Skills").value; if ("" !== temp) obj["Skills"] = temp.split (",");
                temp = document.getElementById (id + "_CULaborItems").value; if ("" !== temp) obj["CULaborItems"] = temp.split (",");
                temp = document.getElementById (id + "_Specifications").value; if ("" !== temp) obj["Specifications"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkTasks", "0..*", "0..*", "OldWorkTask", "QualificationRequirements"],
                            ["Skills", "0..*", "0..*", "Skill", "QualificationRequirements"],
                            ["CULaborItems", "0..*", "0..*", "CULaborItem", "QualificationRequirements"],
                            ["Specifications", "0..*", "0..*", "Specification", "QualificationRequirements"]
                        ]
                    )
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
                let bucket = cim_data.ContractorItem;
                if (null == bucket)
                   cim_data.ContractorItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ContractorItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ContractorItem";
                base.parse_element (/<cim:ContractorItem.activityCode>([\s\S]*?)<\/cim:ContractorItem.activityCode>/g, obj, "activityCode", base.to_string, sub, context);
                base.parse_element (/<cim:ContractorItem.bidAmount>([\s\S]*?)<\/cim:ContractorItem.bidAmount>/g, obj, "bidAmount", base.to_string, sub, context);
                base.parse_element (/<cim:ContractorItem.cost>([\s\S]*?)<\/cim:ContractorItem.cost>/g, obj, "cost", base.to_string, sub, context);
                base.parse_attribute (/<cim:ContractorItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ContractorItem.WorkTask\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                base.parse_attribute (/<cim:ContractorItem.WorkCostDetail\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context);
                base.parse_attributes (/<cim:ContractorItem.ErpPayables\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPayables", sub, context);
                let bucket = context.parsed.ContractorItem;
                if (null == bucket)
                   context.parsed.ContractorItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ContractorItem", "activityCode", "activityCode",  base.from_string, fields);
                base.export_element (obj, "ContractorItem", "bidAmount", "bidAmount",  base.from_string, fields);
                base.export_element (obj, "ContractorItem", "cost", "cost",  base.from_string, fields);
                base.export_attribute (obj, "ContractorItem", "status", "status", fields);
                base.export_attribute (obj, "ContractorItem", "WorkTask", "WorkTask", fields);
                base.export_attribute (obj, "ContractorItem", "WorkCostDetail", "WorkCostDetail", fields);
                base.export_attributes (obj, "ContractorItem", "ErpPayables", "ErpPayables", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ContractorItem_collapse" aria-expanded="true" aria-controls="ContractorItem_collapse" style="margin-left: 10px;">ContractorItem</a></legend>
                    <div id="ContractorItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#activityCode}}<div><b>activityCode</b>: {{activityCode}}</div>{{/activityCode}}
                    {{#bidAmount}}<div><b>bidAmount</b>: {{bidAmount}}</div>{{/bidAmount}}
                    {{#cost}}<div><b>cost</b>: {{cost}}</div>{{/cost}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkTask}}");}); return false;'>{{WorkTask}}</a></div>{{/WorkTask}}
                    {{#WorkCostDetail}}<div><b>WorkCostDetail</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkCostDetail}}");}); return false;'>{{WorkCostDetail}}</a></div>{{/WorkCostDetail}}
                    {{#ErpPayables}}<div><b>ErpPayables</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ErpPayables}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ErpPayables"]) obj["ErpPayables_string"] = obj["ErpPayables"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ErpPayables_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ContractorItem_collapse" aria-expanded="true" aria-controls="{{id}}_ContractorItem_collapse" style="margin-left: 10px;">ContractorItem</a></legend>
                    <div id="{{id}}_ContractorItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_activityCode'>activityCode: </label><div class='col-sm-8'><input id='{{id}}_activityCode' class='form-control' type='text'{{#activityCode}} value='{{activityCode}}'{{/activityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bidAmount'>bidAmount: </label><div class='col-sm-8'><input id='{{id}}_bidAmount' class='form-control' type='text'{{#bidAmount}} value='{{bidAmount}}'{{/bidAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cost'>cost: </label><div class='col-sm-8'><input id='{{id}}_cost' class='form-control' type='text'{{#cost}} value='{{cost}}'{{/cost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='{{id}}_WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkCostDetail'>WorkCostDetail: </label><div class='col-sm-8'><input id='{{id}}_WorkCostDetail' class='form-control' type='text'{{#WorkCostDetail}} value='{{WorkCostDetail}}'{{/WorkCostDetail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPayables'>ErpPayables: </label><div class='col-sm-8'><input id='{{id}}_ErpPayables' class='form-control' type='text'{{#ErpPayables}} value='{{ErpPayables_string}}'{{/ErpPayables}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ContractorItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_activityCode").value; if ("" !== temp) obj["activityCode"] = temp;
                temp = document.getElementById (id + "_bidAmount").value; if ("" !== temp) obj["bidAmount"] = temp;
                temp = document.getElementById (id + "_cost").value; if ("" !== temp) obj["cost"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_WorkTask").value; if ("" !== temp) obj["WorkTask"] = temp;
                temp = document.getElementById (id + "_WorkCostDetail").value; if ("" !== temp) obj["WorkCostDetail"] = temp;
                temp = document.getElementById (id + "_ErpPayables").value; if ("" !== temp) obj["ErpPayables"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkTask", "0..1", "0..*", "OldWorkTask", "ContractorItems"],
                            ["WorkCostDetail", "1", "0..*", "WorkCostDetail", "ContractorItems"],
                            ["ErpPayables", "0..*", "0..*", "ErpPayable", "ContractorItems"]
                        ]
                    )
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
                let bucket = cim_data.PropertyUnit;
                if (null == bucket)
                   cim_data.PropertyUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PropertyUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PropertyUnit";
                base.parse_attribute (/<cim:PropertyUnit.activityCode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "activityCode", sub, context);
                base.parse_element (/<cim:PropertyUnit.propertyAccount>([\s\S]*?)<\/cim:PropertyUnit.propertyAccount>/g, obj, "propertyAccount", base.to_string, sub, context);
                base.parse_element (/<cim:PropertyUnit.accountingUsage>([\s\S]*?)<\/cim:PropertyUnit.accountingUsage>/g, obj, "accountingUsage", base.to_string, sub, context);
                base.parse_attribute (/<cim:PropertyUnit.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:PropertyUnit.CUMaterialItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CUMaterialItems", sub, context);
                base.parse_attributes (/<cim:PropertyUnit.WorkCostDetails\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                base.parse_attributes (/<cim:PropertyUnit.CompatibleUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                let bucket = context.parsed.PropertyUnit;
                if (null == bucket)
                   context.parsed.PropertyUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PropertyUnit", "activityCode", "activityCode", fields);
                base.export_element (obj, "PropertyUnit", "propertyAccount", "propertyAccount",  base.from_string, fields);
                base.export_element (obj, "PropertyUnit", "accountingUsage", "accountingUsage",  base.from_string, fields);
                base.export_attribute (obj, "PropertyUnit", "status", "status", fields);
                base.export_attributes (obj, "PropertyUnit", "CUMaterialItems", "CUMaterialItems", fields);
                base.export_attributes (obj, "PropertyUnit", "WorkCostDetails", "WorkCostDetails", fields);
                base.export_attributes (obj, "PropertyUnit", "CompatibleUnits", "CompatibleUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PropertyUnit_collapse" aria-expanded="true" aria-controls="PropertyUnit_collapse" style="margin-left: 10px;">PropertyUnit</a></legend>
                    <div id="PropertyUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#activityCode}}<div><b>activityCode</b>: {{activityCode}}</div>{{/activityCode}}
                    {{#propertyAccount}}<div><b>propertyAccount</b>: {{propertyAccount}}</div>{{/propertyAccount}}
                    {{#accountingUsage}}<div><b>accountingUsage</b>: {{accountingUsage}}</div>{{/accountingUsage}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#CUMaterialItems}}<div><b>CUMaterialItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CUMaterialItems}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkCostDetails}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CompatibleUnits}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["activityCodeWorkActionKind"] = [{ id: '', selected: (!obj["activityCode"])}]; for (let property in WorkActionKind) obj["activityCodeWorkActionKind"].push ({ id: property, selected: obj["activityCode"] && obj["activityCode"].endsWith ('.' + property)});
                if (obj["CUMaterialItems"]) obj["CUMaterialItems_string"] = obj["CUMaterialItems"].join ();
                if (obj["WorkCostDetails"]) obj["WorkCostDetails_string"] = obj["WorkCostDetails"].join ();
                if (obj["CompatibleUnits"]) obj["CompatibleUnits_string"] = obj["CompatibleUnits"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["activityCodeWorkActionKind"];
                delete obj["CUMaterialItems_string"];
                delete obj["WorkCostDetails_string"];
                delete obj["CompatibleUnits_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PropertyUnit_collapse" aria-expanded="true" aria-controls="{{id}}_PropertyUnit_collapse" style="margin-left: 10px;">PropertyUnit</a></legend>
                    <div id="{{id}}_PropertyUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_activityCode'>activityCode: </label><div class='col-sm-8'><select id='{{id}}_activityCode' class='form-control custom-select'>{{#activityCodeWorkActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/activityCodeWorkActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_propertyAccount'>propertyAccount: </label><div class='col-sm-8'><input id='{{id}}_propertyAccount' class='form-control' type='text'{{#propertyAccount}} value='{{propertyAccount}}'{{/propertyAccount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accountingUsage'>accountingUsage: </label><div class='col-sm-8'><input id='{{id}}_accountingUsage' class='form-control' type='text'{{#accountingUsage}} value='{{accountingUsage}}'{{/accountingUsage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CUMaterialItems'>CUMaterialItems: </label><div class='col-sm-8'><input id='{{id}}_CUMaterialItems' class='form-control' type='text'{{#CUMaterialItems}} value='{{CUMaterialItems_string}}'{{/CUMaterialItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkCostDetails'>WorkCostDetails: </label><div class='col-sm-8'><input id='{{id}}_WorkCostDetails' class='form-control' type='text'{{#WorkCostDetails}} value='{{WorkCostDetails_string}}'{{/WorkCostDetails}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PropertyUnit" };
                super.submit (id, obj);
                temp = WorkActionKind[document.getElementById (id + "_activityCode").value]; if (temp) obj["activityCode"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#WorkActionKind." + temp; else delete obj["activityCode"];
                temp = document.getElementById (id + "_propertyAccount").value; if ("" !== temp) obj["propertyAccount"] = temp;
                temp = document.getElementById (id + "_accountingUsage").value; if ("" !== temp) obj["accountingUsage"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_CUMaterialItems").value; if ("" !== temp) obj["CUMaterialItems"] = temp.split (",");
                temp = document.getElementById (id + "_WorkCostDetails").value; if ("" !== temp) obj["WorkCostDetails"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CUMaterialItems", "0..*", "0..*", "CUMaterialItem", "PropertyUnits"],
                            ["WorkCostDetails", "0..*", "0..*", "WorkCostDetail", "PropertyUnits"],
                            ["CompatibleUnits", "0..*", "0..1", "CompatibleUnit", "PropertyUnit"]
                        ]
                    )
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
                let bucket = cim_data.CULaborItem;
                if (null == bucket)
                   cim_data.CULaborItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CULaborItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkIdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CULaborItem";
                base.parse_element (/<cim:CULaborItem.activityCode>([\s\S]*?)<\/cim:CULaborItem.activityCode>/g, obj, "activityCode", base.to_string, sub, context);
                base.parse_element (/<cim:CULaborItem.laborDuration>([\s\S]*?)<\/cim:CULaborItem.laborDuration>/g, obj, "laborDuration", base.to_string, sub, context);
                base.parse_element (/<cim:CULaborItem.laborRate>([\s\S]*?)<\/cim:CULaborItem.laborRate>/g, obj, "laborRate", base.to_string, sub, context);
                base.parse_attribute (/<cim:CULaborItem.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:CULaborItem.CompatibleUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                base.parse_attributes (/<cim:CULaborItem.QualificationRequirements\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "QualificationRequirements", sub, context);
                base.parse_attribute (/<cim:CULaborItem.CULaborCode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CULaborCode", sub, context);
                let bucket = context.parsed.CULaborItem;
                if (null == bucket)
                   context.parsed.CULaborItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkIdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CULaborItem", "activityCode", "activityCode",  base.from_string, fields);
                base.export_element (obj, "CULaborItem", "laborDuration", "laborDuration",  base.from_string, fields);
                base.export_element (obj, "CULaborItem", "laborRate", "laborRate",  base.from_string, fields);
                base.export_attribute (obj, "CULaborItem", "status", "status", fields);
                base.export_attributes (obj, "CULaborItem", "CompatibleUnits", "CompatibleUnits", fields);
                base.export_attributes (obj, "CULaborItem", "QualificationRequirements", "QualificationRequirements", fields);
                base.export_attribute (obj, "CULaborItem", "CULaborCode", "CULaborCode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CULaborItem_collapse" aria-expanded="true" aria-controls="CULaborItem_collapse" style="margin-left: 10px;">CULaborItem</a></legend>
                    <div id="CULaborItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.template.call (this) +
                    `
                    {{#activityCode}}<div><b>activityCode</b>: {{activityCode}}</div>{{/activityCode}}
                    {{#laborDuration}}<div><b>laborDuration</b>: {{laborDuration}}</div>{{/laborDuration}}
                    {{#laborRate}}<div><b>laborRate</b>: {{laborRate}}</div>{{/laborRate}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CompatibleUnits}}
                    {{#QualificationRequirements}}<div><b>QualificationRequirements</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/QualificationRequirements}}
                    {{#CULaborCode}}<div><b>CULaborCode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CULaborCode}}");}); return false;'>{{CULaborCode}}</a></div>{{/CULaborCode}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CompatibleUnits"]) obj["CompatibleUnits_string"] = obj["CompatibleUnits"].join ();
                if (obj["QualificationRequirements"]) obj["QualificationRequirements_string"] = obj["QualificationRequirements"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CompatibleUnits_string"];
                delete obj["QualificationRequirements_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CULaborItem_collapse" aria-expanded="true" aria-controls="{{id}}_CULaborItem_collapse" style="margin-left: 10px;">CULaborItem</a></legend>
                    <div id="{{id}}_CULaborItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkIdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_activityCode'>activityCode: </label><div class='col-sm-8'><input id='{{id}}_activityCode' class='form-control' type='text'{{#activityCode}} value='{{activityCode}}'{{/activityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_laborDuration'>laborDuration: </label><div class='col-sm-8'><input id='{{id}}_laborDuration' class='form-control' type='text'{{#laborDuration}} value='{{laborDuration}}'{{/laborDuration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_laborRate'>laborRate: </label><div class='col-sm-8'><input id='{{id}}_laborRate' class='form-control' type='text'{{#laborRate}} value='{{laborRate}}'{{/laborRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='{{id}}_CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits_string}}'{{/CompatibleUnits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_QualificationRequirements'>QualificationRequirements: </label><div class='col-sm-8'><input id='{{id}}_QualificationRequirements' class='form-control' type='text'{{#QualificationRequirements}} value='{{QualificationRequirements_string}}'{{/QualificationRequirements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CULaborCode'>CULaborCode: </label><div class='col-sm-8'><input id='{{id}}_CULaborCode' class='form-control' type='text'{{#CULaborCode}} value='{{CULaborCode}}'{{/CULaborCode}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CULaborItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_activityCode").value; if ("" !== temp) obj["activityCode"] = temp;
                temp = document.getElementById (id + "_laborDuration").value; if ("" !== temp) obj["laborDuration"] = temp;
                temp = document.getElementById (id + "_laborRate").value; if ("" !== temp) obj["laborRate"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_CompatibleUnits").value; if ("" !== temp) obj["CompatibleUnits"] = temp.split (",");
                temp = document.getElementById (id + "_QualificationRequirements").value; if ("" !== temp) obj["QualificationRequirements"] = temp.split (",");
                temp = document.getElementById (id + "_CULaborCode").value; if ("" !== temp) obj["CULaborCode"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CompatibleUnits", "0..*", "0..*", "CompatibleUnit", "CULaborItems"],
                            ["QualificationRequirements", "0..*", "0..*", "QualificationRequirement", "CULaborItems"],
                            ["CULaborCode", "0..1", "0..*", "CULaborCode", "CULaborItems"]
                        ]
                    )
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
                InfoQuestion: InfoQuestion,
                Design: Design,
                Capability: Capability,
                CUMaterialItem: CUMaterialItem,
                WorkDocument: WorkDocument,
                ConditionFactorKind: ConditionFactorKind,
                CompatibleUnit: CompatibleUnit,
                NonStandardItem: NonStandardItem,
                WorkCostSummary: WorkCostSummary,
                CULaborItem: CULaborItem,
                ConditionFactor: ConditionFactor,
                Regulation: Regulation,
                CULaborCode: CULaborCode,
                OldWorkTask: OldWorkTask,
                CUContractorItem: CUContractorItem,
                AccessPermit: AccessPermit,
                BusinessCase: BusinessCase,
                CUAllowableAction: CUAllowableAction,
                WorkActionKind: WorkActionKind,
                CUWorkEquipmentItem: CUWorkEquipmentItem,
                Project: Project,
                DesignLocationCU: DesignLocationCU,
                DesignLocation: DesignLocation,
                CUGroup: CUGroup,
                DesignKind: DesignKind,
                OverheadCost: OverheadCost,
                PropertyUnit: PropertyUnit,
                WorkCostDetail: WorkCostDetail,
                WorkFlowStep: WorkFlowStep,
                OneCallRequest: OneCallRequest,
                QualificationRequirement: QualificationRequirement,
                CostType: CostType,
                TypeMaterial: TypeMaterial
            }
        );
    }
);