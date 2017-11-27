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

            export (obj, exporters, full)
            {
                var fields = exporters["ActivityRecord"](obj, exporters, false);

                base.export_element (obj, "WorkStatusEntry", "percentComplete", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Kinds of activities to be performed on a Compatible Unit.
         *
         */
        class WorkActionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkActionKind;
                if (null == bucket)
                   cim_data.WorkActionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkActionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WorkActionKind";
                base.parse_element (/<cim:WorkActionKind.install>([\s\S]*?)<\/cim:WorkActionKind.install>/g, obj, "install", base.to_string, sub, context);
                base.parse_element (/<cim:WorkActionKind.remove>([\s\S]*?)<\/cim:WorkActionKind.remove>/g, obj, "remove", base.to_string, sub, context);
                base.parse_element (/<cim:WorkActionKind.abandon>([\s\S]*?)<\/cim:WorkActionKind.abandon>/g, obj, "abandon", base.to_string, sub, context);
                base.parse_element (/<cim:WorkActionKind.transfer>([\s\S]*?)<\/cim:WorkActionKind.transfer>/g, obj, "transfer", base.to_string, sub, context);

                var bucket = context.parsed.WorkActionKind;
                if (null == bucket)
                   context.parsed.WorkActionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "WorkActionKind", "install", base.from_string, fields);
                base.export_element (obj, "WorkActionKind", "remove", base.from_string, fields);
                base.export_element (obj, "WorkActionKind", "abandon", base.from_string, fields);
                base.export_element (obj, "WorkActionKind", "transfer", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Kind of condition factor.
         *
         */
        class ConditionFactorKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConditionFactorKind;
                if (null == bucket)
                   cim_data.ConditionFactorKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConditionFactorKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ConditionFactorKind";
                base.parse_element (/<cim:ConditionFactorKind.labor>([\s\S]*?)<\/cim:ConditionFactorKind.labor>/g, obj, "labor", base.to_string, sub, context);
                base.parse_element (/<cim:ConditionFactorKind.accountAllocation>([\s\S]*?)<\/cim:ConditionFactorKind.accountAllocation>/g, obj, "accountAllocation", base.to_string, sub, context);
                base.parse_element (/<cim:ConditionFactorKind.material>([\s\S]*?)<\/cim:ConditionFactorKind.material>/g, obj, "material", base.to_string, sub, context);
                base.parse_element (/<cim:ConditionFactorKind.travel>([\s\S]*?)<\/cim:ConditionFactorKind.travel>/g, obj, "travel", base.to_string, sub, context);
                base.parse_element (/<cim:ConditionFactorKind.other>([\s\S]*?)<\/cim:ConditionFactorKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.ConditionFactorKind;
                if (null == bucket)
                   context.parsed.ConditionFactorKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ConditionFactorKind", "labor", base.from_string, fields);
                base.export_element (obj, "ConditionFactorKind", "accountAllocation", base.from_string, fields);
                base.export_element (obj, "ConditionFactorKind", "material", base.from_string, fields);
                base.export_element (obj, "ConditionFactorKind", "travel", base.from_string, fields);
                base.export_element (obj, "ConditionFactorKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_attribute (/<cim:OldWorkTask.Design\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context);
                base.parse_attribute (/<cim:OldWorkTask.WorkFlowStep\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkFlowStep", sub, context);
                base.parse_attribute (/<cim:OldWorkTask.OverheadCost\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OverheadCost", sub, context);

                var bucket = context.parsed.OldWorkTask;
                if (null == bucket)
                   context.parsed.OldWorkTask = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkTask"](obj, exporters, false);

                base.export_attribute (obj, "OldWorkTask", "Design", fields);
                base.export_attribute (obj, "OldWorkTask", "WorkFlowStep", fields);
                base.export_attribute (obj, "OldWorkTask", "OverheadCost", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Kind of design.
         *
         */
        class DesignKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DesignKind;
                if (null == bucket)
                   cim_data.DesignKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DesignKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DesignKind";
                base.parse_element (/<cim:DesignKind.estimated>([\s\S]*?)<\/cim:DesignKind.estimated>/g, obj, "estimated", base.to_string, sub, context);
                base.parse_element (/<cim:DesignKind.asBuilt>([\s\S]*?)<\/cim:DesignKind.asBuilt>/g, obj, "asBuilt", base.to_string, sub, context);
                base.parse_element (/<cim:DesignKind.other>([\s\S]*?)<\/cim:DesignKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.DesignKind;
                if (null == bucket)
                   context.parsed.DesignKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "DesignKind", "estimated", base.from_string, fields);
                base.export_element (obj, "DesignKind", "asBuilt", base.from_string, fields);
                base.export_element (obj, "DesignKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.BusinessCase;
                if (null == bucket)
                   context.parsed.BusinessCase = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_element (obj, "BusinessCase", "corporateCode", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_element (obj, "Regulation", "referenceNumber", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.Assignment;
                if (null == bucket)
                   context.parsed.Assignment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_element (obj, "Assignment", "effectivePeriod", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_attribute (/<cim:Project.ParentProject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentProject", sub, context);
                base.parse_attribute (/<cim:Project.BusinessCase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BusinessCase", sub, context);
                base.parse_attribute (/<cim:Project.ErpProjectAccounting\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context);

                var bucket = context.parsed.Project;
                if (null == bucket)
                   context.parsed.Project = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_element (obj, "Project", "budget", base.from_string, fields);
                base.export_attribute (obj, "Project", "ParentProject", fields);
                base.export_attribute (obj, "Project", "BusinessCase", fields);
                base.export_attribute (obj, "Project", "ErpProjectAccounting", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_attribute (obj, "WorkCostSummary", "WorkCostDetail", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_attribute (/<cim:WorkCostDetail.CostType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CostType", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.OverheadCost\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OverheadCost", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.Design\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.ErpProjectAccounting\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context);
                base.parse_attribute (/<cim:WorkCostDetail.WorkCostSummary\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostSummary", sub, context);

                var bucket = context.parsed.WorkCostDetail;
                if (null == bucket)
                   context.parsed.WorkCostDetail = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_element (obj, "WorkCostDetail", "amount", base.from_string, fields);
                base.export_element (obj, "WorkCostDetail", "isDebit", base.from_boolean, fields);
                base.export_element (obj, "WorkCostDetail", "transactionDateTime", base.from_datetime, fields);
                base.export_attribute (obj, "WorkCostDetail", "CostType", fields);
                base.export_attribute (obj, "WorkCostDetail", "OverheadCost", fields);
                base.export_attribute (obj, "WorkCostDetail", "WorkTask", fields);
                base.export_attribute (obj, "WorkCostDetail", "Design", fields);
                base.export_attribute (obj, "WorkCostDetail", "ErpProjectAccounting", fields);
                base.export_attribute (obj, "WorkCostDetail", "WorkCostSummary", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_attribute (/<cim:CompatibleUnit.CUGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUGroup", sub, context);
                base.parse_attribute (/<cim:CompatibleUnit.PropertyUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PropertyUnit", sub, context);
                base.parse_attribute (/<cim:CompatibleUnit.CostType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CostType", sub, context);
                base.parse_attribute (/<cim:CompatibleUnit.CUAllowableAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUAllowableAction", sub, context);

                var bucket = context.parsed.CompatibleUnit;
                if (null == bucket)
                   context.parsed.CompatibleUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_element (obj, "CompatibleUnit", "estCost", base.from_string, fields);
                base.export_element (obj, "CompatibleUnit", "quantity", base.from_string, fields);
                base.export_attribute (obj, "CompatibleUnit", "CUGroup", fields);
                base.export_attribute (obj, "CompatibleUnit", "PropertyUnit", fields);
                base.export_attribute (obj, "CompatibleUnit", "CostType", fields);
                base.export_attribute (obj, "CompatibleUnit", "CUAllowableAction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_element (obj, "InfoQuestion", "answer", base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "answerDateTime", base.from_datetime, fields);
                base.export_element (obj, "InfoQuestion", "answerRemark", base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "questionCode", base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "questionRemark", base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "questionText", base.from_string, fields);
                base.export_element (obj, "InfoQuestion", "questionType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.TypeMaterial;
                if (null == bucket)
                   context.parsed.TypeMaterial = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_element (obj, "TypeMaterial", "costType", base.from_string, fields);
                base.export_element (obj, "TypeMaterial", "estUnitCost", base.from_string, fields);
                base.export_element (obj, "TypeMaterial", "quantity", base.from_string, fields);
                base.export_element (obj, "TypeMaterial", "stockItem", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_element (obj, "NonStandardItem", "amount", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_element (obj, "AccessPermit", "applicationNumber", base.from_string, fields);
                base.export_element (obj, "AccessPermit", "effectiveDate", base.from_string, fields);
                base.export_element (obj, "AccessPermit", "expirationDate", base.from_string, fields);
                base.export_element (obj, "AccessPermit", "payment", base.from_string, fields);
                base.export_element (obj, "AccessPermit", "permitID", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.OneCallRequest;
                if (null == bucket)
                   context.parsed.OneCallRequest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_element (obj, "OneCallRequest", "explosivesUsed", base.from_boolean, fields);
                base.export_element (obj, "OneCallRequest", "markedIndicator", base.from_boolean, fields);
                base.export_element (obj, "OneCallRequest", "markingInstruction", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_element (/<cim:Design.kind>([\s\S]*?)<\/cim:Design.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:Design.price>([\s\S]*?)<\/cim:Design.price>/g, obj, "price", base.to_string, sub, context);
                base.parse_attribute (/<cim:Design.Work\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Work", sub, context);
                base.parse_attribute (/<cim:Design.ErpQuoteLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuoteLineItem", sub, context);

                var bucket = context.parsed.Design;
                if (null == bucket)
                   context.parsed.Design = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkDocument"](obj, exporters, false);

                base.export_element (obj, "Design", "costEstimate", base.from_string, fields);
                base.export_element (obj, "Design", "kind", base.from_string, fields);
                base.export_element (obj, "Design", "price", base.from_string, fields);
                base.export_attribute (obj, "Design", "Work", fields);
                base.export_attribute (obj, "Design", "ErpQuoteLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.LaborItem;
                if (null == bucket)
                   context.parsed.LaborItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "LaborItem", "activityCode", base.from_string, fields);
                base.export_element (obj, "LaborItem", "cost", base.from_string, fields);
                base.export_element (obj, "LaborItem", "laborDuration", base.from_string, fields);
                base.export_element (obj, "LaborItem", "laborRate", base.from_string, fields);
                base.export_element (obj, "LaborItem", "status", base.from_string, fields);
                base.export_attribute (obj, "LaborItem", "WorkCostDetail", fields);
                base.export_attribute (obj, "LaborItem", "WorkTask", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_element (/<cim:ConditionFactor.kind>([\s\S]*?)<\/cim:ConditionFactor.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:ConditionFactor.status>([\s\S]*?)<\/cim:ConditionFactor.status>/g, obj, "status", base.to_string, sub, context);

                var bucket = context.parsed.ConditionFactor;
                if (null == bucket)
                   context.parsed.ConditionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "ConditionFactor", "cfValue", base.from_string, fields);
                base.export_element (obj, "ConditionFactor", "kind", base.from_string, fields);
                base.export_element (obj, "ConditionFactor", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "Usage", "status", base.from_string, fields);
                base.export_attribute (obj, "Usage", "WorkTask", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_attribute (/<cim:CostType.ParentCostType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentCostType", sub, context);

                var bucket = context.parsed.CostType;
                if (null == bucket)
                   context.parsed.CostType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "CostType", "amountAssignable", base.from_boolean, fields);
                base.export_element (obj, "CostType", "code", base.from_string, fields);
                base.export_element (obj, "CostType", "level", base.from_string, fields);
                base.export_element (obj, "CostType", "stage", base.from_string, fields);
                base.export_element (obj, "CostType", "status", base.from_string, fields);
                base.export_attribute (obj, "CostType", "ParentCostType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.CULaborCode;
                if (null == bucket)
                   context.parsed.CULaborCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "CULaborCode", "code", base.from_string, fields);
                base.export_element (obj, "CULaborCode", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.DesignLocation;
                if (null == bucket)
                   context.parsed.DesignLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "DesignLocation", "spanLength", base.from_string, fields);
                base.export_element (obj, "DesignLocation", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_attribute (/<cim:CUWorkEquipmentItem.TypeAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context);

                var bucket = context.parsed.CUWorkEquipmentItem;
                if (null == bucket)
                   context.parsed.CUWorkEquipmentItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "CUWorkEquipmentItem", "equipCode", base.from_string, fields);
                base.export_element (obj, "CUWorkEquipmentItem", "rate", base.from_string, fields);
                base.export_element (obj, "CUWorkEquipmentItem", "status", base.from_string, fields);
                base.export_attribute (obj, "CUWorkEquipmentItem", "TypeAsset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.CUMaterialItem;
                if (null == bucket)
                   context.parsed.CUMaterialItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "CUMaterialItem", "corporateCode", base.from_string, fields);
                base.export_element (obj, "CUMaterialItem", "quantity", base.from_string, fields);
                base.export_element (obj, "CUMaterialItem", "status", base.from_string, fields);
                base.export_attribute (obj, "CUMaterialItem", "TypeMaterial", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.OverheadCost;
                if (null == bucket)
                   context.parsed.OverheadCost = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "OverheadCost", "code", base.from_string, fields);
                base.export_element (obj, "OverheadCost", "cost", base.from_string, fields);
                base.export_element (obj, "OverheadCost", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_attribute (/<cim:WorkFlowStep.Work\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Work", sub, context);

                var bucket = context.parsed.WorkFlowStep;
                if (null == bucket)
                   context.parsed.WorkFlowStep = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WorkFlowStep", "sequenceNumber", base.from_string, fields);
                base.export_element (obj, "WorkFlowStep", "status", base.from_string, fields);
                base.export_attribute (obj, "WorkFlowStep", "Work", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.CUAllowableAction;
                if (null == bucket)
                   context.parsed.CUAllowableAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "CUAllowableAction", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.QualificationRequirement;
                if (null == bucket)
                   context.parsed.QualificationRequirement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "QualificationRequirement", "qualificationID", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_attribute (/<cim:ContractorItem.WorkCostDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context);
                base.parse_attribute (/<cim:ContractorItem.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);

                var bucket = context.parsed.ContractorItem;
                if (null == bucket)
                   context.parsed.ContractorItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "ContractorItem", "activityCode", base.from_string, fields);
                base.export_element (obj, "ContractorItem", "bidAmount", base.from_string, fields);
                base.export_element (obj, "ContractorItem", "cost", base.from_string, fields);
                base.export_element (obj, "ContractorItem", "status", base.from_string, fields);
                base.export_attribute (obj, "ContractorItem", "WorkCostDetail", fields);
                base.export_attribute (obj, "ContractorItem", "WorkTask", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.CUGroup;
                if (null == bucket)
                   context.parsed.CUGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "CUGroup", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.ShiftPattern;
                if (null == bucket)
                   context.parsed.ShiftPattern = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "ShiftPattern", "assignmentType", base.from_string, fields);
                base.export_element (obj, "ShiftPattern", "cycleCount", base.from_string, fields);
                base.export_element (obj, "ShiftPattern", "status", base.from_string, fields);
                base.export_element (obj, "ShiftPattern", "validityInterval", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_attribute (/<cim:CULaborItem.CULaborCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CULaborCode", sub, context);

                var bucket = context.parsed.CULaborItem;
                if (null == bucket)
                   context.parsed.CULaborItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "CULaborItem", "activityCode", base.from_string, fields);
                base.export_element (obj, "CULaborItem", "laborDuration", base.from_string, fields);
                base.export_element (obj, "CULaborItem", "laborRate", base.from_string, fields);
                base.export_element (obj, "CULaborItem", "status", base.from_string, fields);
                base.export_attribute (obj, "CULaborItem", "CULaborCode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_element (/<cim:PropertyUnit.activityCode>([\s\S]*?)<\/cim:PropertyUnit.activityCode>/g, obj, "activityCode", base.to_string, sub, context);
                base.parse_element (/<cim:PropertyUnit.propertyAccount>([\s\S]*?)<\/cim:PropertyUnit.propertyAccount>/g, obj, "propertyAccount", base.to_string, sub, context);
                base.parse_element (/<cim:PropertyUnit.status>([\s\S]*?)<\/cim:PropertyUnit.status>/g, obj, "status", base.to_string, sub, context);

                var bucket = context.parsed.PropertyUnit;
                if (null == bucket)
                   context.parsed.PropertyUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "PropertyUnit", "accountingUsage", base.from_string, fields);
                base.export_element (obj, "PropertyUnit", "activityCode", base.from_string, fields);
                base.export_element (obj, "PropertyUnit", "propertyAccount", base.from_string, fields);
                base.export_element (obj, "PropertyUnit", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_attribute (/<cim:Capability.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context);

                var bucket = context.parsed.Capability;
                if (null == bucket)
                   context.parsed.Capability = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "Capability", "performanceFactor", base.from_string, fields);
                base.export_element (obj, "Capability", "status", base.from_string, fields);
                base.export_element (obj, "Capability", "type", base.from_string, fields);
                base.export_element (obj, "Capability", "validityInterval", base.from_string, fields);
                base.export_attribute (obj, "Capability", "Crew", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_element (/<cim:DesignLocationCU.cuAction>([\s\S]*?)<\/cim:DesignLocationCU.cuAction>/g, obj, "cuAction", base.to_string, sub, context);
                base.parse_element (/<cim:DesignLocationCU.cuQuantity>([\s\S]*?)<\/cim:DesignLocationCU.cuQuantity>/g, obj, "cuQuantity", base.to_string, sub, context);
                base.parse_element (/<cim:DesignLocationCU.cuUsage>([\s\S]*?)<\/cim:DesignLocationCU.cuUsage>/g, obj, "cuUsage", base.to_string, sub, context);
                base.parse_element (/<cim:DesignLocationCU.removalDate>([\s\S]*?)<\/cim:DesignLocationCU.removalDate>/g, obj, "removalDate", base.to_string, sub, context);
                base.parse_element (/<cim:DesignLocationCU.status>([\s\S]*?)<\/cim:DesignLocationCU.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:DesignLocationCU.toBeEnergised>([\s\S]*?)<\/cim:DesignLocationCU.toBeEnergised>/g, obj, "toBeEnergised", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:DesignLocationCU.DesignLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocation", sub, context);

                var bucket = context.parsed.DesignLocationCU;
                if (null == bucket)
                   context.parsed.DesignLocationCU = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "DesignLocationCU", "cuAccount", base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "cuAction", base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "cuQuantity", base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "cuUsage", base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "removalDate", base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "status", base.from_string, fields);
                base.export_element (obj, "DesignLocationCU", "toBeEnergised", base.from_boolean, fields);
                base.export_attribute (obj, "DesignLocationCU", "DesignLocation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "MiscCostItem", "account", base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "costPerUnit", base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "costType", base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "externalRefID", base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "quantity", base.from_string, fields);
                base.export_element (obj, "MiscCostItem", "status", base.from_string, fields);
                base.export_attribute (obj, "MiscCostItem", "WorkTask", fields);
                base.export_attribute (obj, "MiscCostItem", "DesignLocation", fields);
                base.export_attribute (obj, "MiscCostItem", "WorkCostDetail", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

                var bucket = context.parsed.CUContractorItem;
                if (null == bucket)
                   context.parsed.CUContractorItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "CUContractorItem", "activityCode", base.from_string, fields);
                base.export_element (obj, "CUContractorItem", "bidAmount", base.from_string, fields);
                base.export_element (obj, "CUContractorItem", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_attribute (/<cim:CUAsset.TypeAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context);

                var bucket = context.parsed.CUAsset;
                if (null == bucket)
                   context.parsed.CUAsset = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WorkIdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "CUAsset", "quantity", base.from_string, fields);
                base.export_element (obj, "CUAsset", "status", base.from_string, fields);
                base.export_element (obj, "CUAsset", "typeAssetCode", base.from_string, fields);
                base.export_attribute (obj, "CUAsset", "TypeAsset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                ConditionFactorKind: ConditionFactorKind,
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
                WorkActionKind: WorkActionKind,
                DesignLocationCU: DesignLocationCU,
                DesignLocation: DesignLocation,
                CUGroup: CUGroup,
                DesignKind: DesignKind,
                PropertyUnit: PropertyUnit,
                OverheadCost: OverheadCost,
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