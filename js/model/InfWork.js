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
         * A pre-defined set of work steps for a given type of work.
         *
         */
        function parse_WorkFlowStep (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "WorkFlowStep";
            /**
             * Used to define dependencies of each work flow step, which is for the instance of WorkTask associated with a given instance of WorkFlow.
             *
             */
            base.parse_element (/<cim:WorkFlowStep.sequenceNumber>([\s\S]*?)<\/cim:WorkFlowStep.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);

            base.parse_element (/<cim:WorkFlowStep.status>([\s\S]*?)<\/cim:WorkFlowStep.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:WorkFlowStep.Work\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Work", sub, context, true);

            bucket = context.parsed.WorkFlowStep;
            if (null == bucket)
                context.parsed.WorkFlowStep = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A pre-planned job model containing labor, material, and accounting requirements for standardized job planning.
         *
         */
        function parse_CompatibleUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "CompatibleUnit";
            /**
             * Estimated total cost for perfoming CU.
             *
             */
            base.parse_element (/<cim:CompatibleUnit.estCost>([\s\S]*?)<\/cim:CompatibleUnit.estCost>/g, obj, "estCost", base.to_string, sub, context);

            /**
             * The quantity, unit of measure, and multiplier at the CU level that applies to the materials.
             *
             */
            base.parse_element (/<cim:CompatibleUnit.quantity>([\s\S]*?)<\/cim:CompatibleUnit.quantity>/g, obj, "quantity", base.to_string, sub, context);

            base.parse_attribute (/<cim:CompatibleUnit.CUGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUGroup", sub, context, true);

            base.parse_attribute (/<cim:CompatibleUnit.PropertyUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PropertyUnit", sub, context, true);

            base.parse_attribute (/<cim:CompatibleUnit.CostType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CostType", sub, context, true);

            base.parse_attribute (/<cim:CompatibleUnit.CUAllowableAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUAllowableAction", sub, context, true);

            bucket = context.parsed.CompatibleUnit;
            if (null == bucket)
                context.parsed.CompatibleUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Allowed actions: Install, Remove, Transfer, Abandon, etc.
         *
         */
        function parse_CUAllowableAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "CUAllowableAction";
            base.parse_element (/<cim:CUAllowableAction.status>([\s\S]*?)<\/cim:CUAllowableAction.status>/g, obj, "status", base.to_string, sub, context);

            bucket = context.parsed.CUAllowableAction;
            if (null == bucket)
                context.parsed.CUAllowableAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Certain skills are required and must be certified in order for a person (typically a member of a crew) to be qualified to work on types of equipment.
         *
         */
        function parse_QualificationRequirement (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "QualificationRequirement";
            /**
             * Qualification identifier.
             *
             */
            base.parse_element (/<cim:QualificationRequirement.qualificationID>([\s\S]*?)<\/cim:QualificationRequirement.qualificationID>/g, obj, "qualificationID", base.to_string, sub, context);

            bucket = context.parsed.QualificationRequirement;
            if (null == bucket)
                context.parsed.QualificationRequirement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Questions and answers associated with a type of document for purposes of clarification.
         *
         * Questions may be predefined or ad hoc.
         *
         */
        function parse_InfoQuestion (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "InfoQuestion";
            /**
             * Answer to question.
             *
             */
            base.parse_element (/<cim:InfoQuestion.answer>([\s\S]*?)<\/cim:InfoQuestion.answer>/g, obj, "answer", base.to_string, sub, context);

            /**
             * The date and time the quesiton was answered.
             *
             */
            base.parse_element (/<cim:InfoQuestion.answerDateTime>([\s\S]*?)<\/cim:InfoQuestion.answerDateTime>/g, obj, "answerDateTime", base.to_datetime, sub, context);

            /**
             * Remarks to qualify the answer.
             *
             */
            base.parse_element (/<cim:InfoQuestion.answerRemark>([\s\S]*?)<\/cim:InfoQuestion.answerRemark>/g, obj, "answerRemark", base.to_string, sub, context);

            /**
             * The question code.
             *
             * If blank, refer to questionText.
             *
             */
            base.parse_element (/<cim:InfoQuestion.questionCode>([\s\S]*?)<\/cim:InfoQuestion.questionCode>/g, obj, "questionCode", base.to_string, sub, context);

            /**
             * Remarks to qualify the question in this situation.
             *
             */
            base.parse_element (/<cim:InfoQuestion.questionRemark>([\s\S]*?)<\/cim:InfoQuestion.questionRemark>/g, obj, "questionRemark", base.to_string, sub, context);

            /**
             * For non-coded questions, the question is provided here.
             *
             */
            base.parse_element (/<cim:InfoQuestion.questionText>([\s\S]*?)<\/cim:InfoQuestion.questionText>/g, obj, "questionText", base.to_string, sub, context);

            /**
             * The type of the question.
             *
             */
            base.parse_element (/<cim:InfoQuestion.questionType>([\s\S]*?)<\/cim:InfoQuestion.questionType>/g, obj, "questionType", base.to_string, sub, context);

            bucket = context.parsed.InfoQuestion;
            if (null == bucket)
                context.parsed.InfoQuestion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Contractor information for work task.
         *
         */
        function parse_ContractorItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "ContractorItem";
            /**
             * Activity code identifies a specific and distinguishable unit of work.
             *
             */
            base.parse_element (/<cim:ContractorItem.activityCode>([\s\S]*?)<\/cim:ContractorItem.activityCode>/g, obj, "activityCode", base.to_string, sub, context);

            /**
             * The amount that a given contractor will charge for performing this unit of work.
             *
             */
            base.parse_element (/<cim:ContractorItem.bidAmount>([\s\S]*?)<\/cim:ContractorItem.bidAmount>/g, obj, "bidAmount", base.to_string, sub, context);

            /**
             * The total amount charged.
             *
             */
            base.parse_element (/<cim:ContractorItem.cost>([\s\S]*?)<\/cim:ContractorItem.cost>/g, obj, "cost", base.to_string, sub, context);

            base.parse_element (/<cim:ContractorItem.status>([\s\S]*?)<\/cim:ContractorItem.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ContractorItem.WorkCostDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context, true);

            base.parse_attribute (/<cim:ContractorItem.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context, true);

            bucket = context.parsed.ContractorItem;
            if (null == bucket)
                context.parsed.ContractorItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A Compatible Unit Group identifies a set of compatible units which may be jointly utilized for estimating and designating jobs.
         *
         */
        function parse_CUGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "CUGroup";
            base.parse_element (/<cim:CUGroup.status>([\s\S]*?)<\/cim:CUGroup.status>/g, obj, "status", base.to_string, sub, context);

            bucket = context.parsed.CUGroup;
            if (null == bucket)
                context.parsed.CUGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Documentation for a generic material item that may be used for design, work and other purposes.
         *
         * Any number of MaterialItems manufactured by various vendors may be used to perform this TypeMaterial.
         *
         */
        function parse_TypeMaterial (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "TypeMaterial";
            /**
             * The type of cost to which this Material Item belongs.
             *
             */
            base.parse_element (/<cim:TypeMaterial.costType>([\s\S]*?)<\/cim:TypeMaterial.costType>/g, obj, "costType", base.to_string, sub, context);

            /**
             * The estimated unit cost of this type of material, either for a unit cost or cost per unit length.
             *
             * Cost is for material or asset only and does not include labor to install/construct or configure it.
             *
             */
            base.parse_element (/<cim:TypeMaterial.estUnitCost>([\s\S]*?)<\/cim:TypeMaterial.estUnitCost>/g, obj, "estUnitCost", base.to_string, sub, context);

            /**
             * The value, unit of measure, and multiplier for the quantity.
             *
             */
            base.parse_element (/<cim:TypeMaterial.quantity>([\s\S]*?)<\/cim:TypeMaterial.quantity>/g, obj, "quantity", base.to_string, sub, context);

            /**
             * True if item is a stock item (default).
             *
             */
            base.parse_element (/<cim:TypeMaterial.stockItem>([\s\S]*?)<\/cim:TypeMaterial.stockItem>/g, obj, "stockItem", base.to_boolean, sub, context);

            bucket = context.parsed.TypeMaterial;
            if (null == bucket)
                context.parsed.TypeMaterial = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This document provides information for non-standard items like customer contributions (e.g., customer digs trench), vouchers (e.g., credit), and contractor bids.
         *
         */
        function parse_NonStandardItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "NonStandardItem";
            /**
             * The projected cost for this item.
             *
             */
            base.parse_element (/<cim:NonStandardItem.amount>([\s\S]*?)<\/cim:NonStandardItem.amount>/g, obj, "amount", base.to_string, sub, context);

            bucket = context.parsed.NonStandardItem;
            if (null == bucket)
                context.parsed.NonStandardItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A permit is sometimes needed to provide legal access to land or equipment.
         *
         * For example, local authority permission for road works.
         *
         */
        function parse_AccessPermit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "AccessPermit";
            /**
             * Permit application number that is used by municipality, state, province, etc.
             *
             */
            base.parse_element (/<cim:AccessPermit.applicationNumber>([\s\S]*?)<\/cim:AccessPermit.applicationNumber>/g, obj, "applicationNumber", base.to_string, sub, context);

            /**
             * Date that permit became official.
             *
             */
            base.parse_element (/<cim:AccessPermit.effectiveDate>([\s\S]*?)<\/cim:AccessPermit.effectiveDate>/g, obj, "effectiveDate", base.to_string, sub, context);

            /**
             * Permit expiration date.
             *
             */
            base.parse_element (/<cim:AccessPermit.expirationDate>([\s\S]*?)<\/cim:AccessPermit.expirationDate>/g, obj, "expirationDate", base.to_string, sub, context);

            /**
             * Total cost of permit.
             *
             */
            base.parse_element (/<cim:AccessPermit.payment>([\s\S]*?)<\/cim:AccessPermit.payment>/g, obj, "payment", base.to_string, sub, context);

            /**
             * Permit identifier.
             *
             */
            base.parse_element (/<cim:AccessPermit.permitID>([\s\S]*?)<\/cim:AccessPermit.permitID>/g, obj, "permitID", base.to_string, sub, context);

            bucket = context.parsed.AccessPermit;
            if (null == bucket)
                context.parsed.AccessPermit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A type of ActivityRecord that records information about the status of an item, such as a Work or WorkTask, at a point in time.
         *
         */
        function parse_WorkStatusEntry (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_ActivityRecord (context, sub);
            obj.cls = "WorkStatusEntry";
            /**
             * Estimated percentage of completion of this individual work task or overall work order.
             *
             */
            base.parse_element (/<cim:WorkStatusEntry.percentComplete>([\s\S]*?)<\/cim:WorkStatusEntry.percentComplete>/g, obj, "percentComplete", base.to_string, sub, context);

            bucket = context.parsed.WorkStatusEntry;
            if (null == bucket)
                context.parsed.WorkStatusEntry = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The patterns of shifts worked by people or crews.
         *
         */
        function parse_ShiftPattern (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "ShiftPattern";
            /**
             * Type of assignement intended to be worked on this shift, for example, temporary, standard, etc.
             *
             */
            base.parse_element (/<cim:ShiftPattern.assignmentType>([\s\S]*?)<\/cim:ShiftPattern.assignmentType>/g, obj, "assignmentType", base.to_string, sub, context);

            /**
             * Number of cycles for a temporary shift.
             *
             */
            base.parse_element (/<cim:ShiftPattern.cycleCount>([\s\S]*?)<\/cim:ShiftPattern.cycleCount>/g, obj, "cycleCount", base.to_string, sub, context);

            base.parse_element (/<cim:ShiftPattern.status>([\s\S]*?)<\/cim:ShiftPattern.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Date and time interval for which this shift pattern is valid (when it became effective and when it expires).
             *
             */
            base.parse_element (/<cim:ShiftPattern.validityInterval>([\s\S]*?)<\/cim:ShiftPattern.validityInterval>/g, obj, "validityInterval", base.to_string, sub, context);

            bucket = context.parsed.ShiftPattern;
            if (null == bucket)
                context.parsed.ShiftPattern = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A request for other utilities to mark their underground facilities prior to commencement of construction and/or maintenance.
         *
         */
        function parse_OneCallRequest (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "OneCallRequest";
            /**
             * True if explosives have been or are planned to be used.
             *
             */
            base.parse_element (/<cim:OneCallRequest.explosivesUsed>([\s\S]*?)<\/cim:OneCallRequest.explosivesUsed>/g, obj, "explosivesUsed", base.to_boolean, sub, context);

            /**
             * True if work location has been marked, for example for a dig area.
             *
             */
            base.parse_element (/<cim:OneCallRequest.markedIndicator>([\s\S]*?)<\/cim:OneCallRequest.markedIndicator>/g, obj, "markedIndicator", base.to_boolean, sub, context);

            /**
             * Instructions for marking a dig area, if applicable.
             *
             */
            base.parse_element (/<cim:OneCallRequest.markingInstruction>([\s\S]*?)<\/cim:OneCallRequest.markingInstruction>/g, obj, "markingInstruction", base.to_string, sub, context);

            bucket = context.parsed.OneCallRequest;
            if (null == bucket)
                context.parsed.OneCallRequest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kinds of activities to be performed on a Compatible Unit.
         *
         */
        function parse_WorkActionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WorkActionKind";
            /**
             * Install.
             *
             */
            base.parse_element (/<cim:WorkActionKind.install>([\s\S]*?)<\/cim:WorkActionKind.install>/g, obj, "install", base.to_string, sub, context);

            /**
             * Remove.
             *
             */
            base.parse_element (/<cim:WorkActionKind.remove>([\s\S]*?)<\/cim:WorkActionKind.remove>/g, obj, "remove", base.to_string, sub, context);

            /**
             * Leave it in place but not use it.
             *
             */
            base.parse_element (/<cim:WorkActionKind.abandon>([\s\S]*?)<\/cim:WorkActionKind.abandon>/g, obj, "abandon", base.to_string, sub, context);

            /**
             * Remove from one and install at another loctation.
             *
             */
            base.parse_element (/<cim:WorkActionKind.transfer>([\s\S]*?)<\/cim:WorkActionKind.transfer>/g, obj, "transfer", base.to_string, sub, context);

            bucket = context.parsed.WorkActionKind;
            if (null == bucket)
                context.parsed.WorkActionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A design for consideration by customers, potential customers, or internal work.
         *
         * Note that the Version of design is the revision attribute that is inherited from Document.
         *
         */
        function parse_Design (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "Design";
            /**
             * Estimated cost (not price) of design.
             *
             */
            base.parse_element (/<cim:Design.costEstimate>([\s\S]*?)<\/cim:Design.costEstimate>/g, obj, "costEstimate", base.to_string, sub, context);

            /**
             * Kind of this design.
             *
             */
            base.parse_element (/<cim:Design.kind>([\s\S]*?)<\/cim:Design.kind>/g, obj, "kind", base.to_string, sub, context);

            /**
             * Price to customer for implementing design.
             *
             */
            base.parse_element (/<cim:Design.price>([\s\S]*?)<\/cim:Design.price>/g, obj, "price", base.to_string, sub, context);

            base.parse_attribute (/<cim:Design.Work\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Work", sub, context, true);

            base.parse_attribute (/<cim:Design.ErpQuoteLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuoteLineItem", sub, context, true);

            bucket = context.parsed.Design;
            if (null == bucket)
                context.parsed.Design = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Compatible unit labor item.
         *
         */
        function parse_CULaborItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "CULaborItem";
            /**
             * Activity code identifies a specific and distinguishable unit of work.
             *
             */
            base.parse_element (/<cim:CULaborItem.activityCode>([\s\S]*?)<\/cim:CULaborItem.activityCode>/g, obj, "activityCode", base.to_string, sub, context);

            /**
             * Estimated time to perform work.
             *
             */
            base.parse_element (/<cim:CULaborItem.laborDuration>([\s\S]*?)<\/cim:CULaborItem.laborDuration>/g, obj, "laborDuration", base.to_string, sub, context);

            /**
             * The labor rate applied for work.
             *
             */
            base.parse_element (/<cim:CULaborItem.laborRate>([\s\S]*?)<\/cim:CULaborItem.laborRate>/g, obj, "laborRate", base.to_string, sub, context);

            base.parse_element (/<cim:CULaborItem.status>([\s\S]*?)<\/cim:CULaborItem.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:CULaborItem.CULaborCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CULaborCode", sub, context, true);

            bucket = context.parsed.CULaborItem;
            if (null == bucket)
                context.parsed.CULaborItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Shadow class for Document, to isolate subclassing from this package.
         *
         * If any subclass gets normative and needs inheritance, it will inherit directly from Document.
         *
         */
        function parse_WorkDocument (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "WorkDocument";
            bucket = context.parsed.WorkDocument;
            if (null == bucket)
                context.parsed.WorkDocument = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Unit of property for reporting purposes.
         *
         */
        function parse_PropertyUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "PropertyUnit";
            /**
             * A code that identifies appropriate type of property accounts such as distribution, streetlgihts, communications.
             *
             */
            base.parse_element (/<cim:PropertyUnit.accountingUsage>([\s\S]*?)<\/cim:PropertyUnit.accountingUsage>/g, obj, "accountingUsage", base.to_string, sub, context);

            /**
             * Activity code identifies a specific and distinguishable work action.
             *
             */
            base.parse_element (/<cim:PropertyUnit.activityCode>([\s\S]*?)<\/cim:PropertyUnit.activityCode>/g, obj, "activityCode", base.to_string, sub, context);

            /**
             * Used for property record accounting.
             *
             * For example, in the USA, this would be a FERC account.
             *
             */
            base.parse_element (/<cim:PropertyUnit.propertyAccount>([\s\S]*?)<\/cim:PropertyUnit.propertyAccount>/g, obj, "propertyAccount", base.to_string, sub, context);

            base.parse_element (/<cim:PropertyUnit.status>([\s\S]*?)<\/cim:PropertyUnit.status>/g, obj, "status", base.to_string, sub, context);

            bucket = context.parsed.PropertyUnit;
            if (null == bucket)
                context.parsed.PropertyUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Capabilities of a crew.
         *
         */
        function parse_Capability (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "Capability";
            /**
             * Capability performance factor.
             *
             */
            base.parse_element (/<cim:Capability.performanceFactor>([\s\S]*?)<\/cim:Capability.performanceFactor>/g, obj, "performanceFactor", base.to_string, sub, context);

            base.parse_element (/<cim:Capability.status>([\s\S]*?)<\/cim:Capability.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Classification by utility's work management standards and practices.
             *
             */
            base.parse_element (/<cim:Capability.type>([\s\S]*?)<\/cim:Capability.type>/g, obj, "type", base.to_string, sub, context);

            /**
             * Date and time interval for which this capability is valid (when it became effective and when it expires).
             *
             */
            base.parse_element (/<cim:Capability.validityInterval>([\s\S]*?)<\/cim:Capability.validityInterval>/g, obj, "validityInterval", base.to_string, sub, context);

            base.parse_attribute (/<cim:Capability.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context, true);

            bucket = context.parsed.Capability;
            if (null == bucket)
                context.parsed.Capability = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Compatible unit at a given design location.
         *
         */
        function parse_DesignLocationCU (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "DesignLocationCU";
            /**
             * A code that helps direct accounting (capital, expense, or accounting treatment).
             *
             */
            base.parse_element (/<cim:DesignLocationCU.cuAccount>([\s\S]*?)<\/cim:DesignLocationCU.cuAccount>/g, obj, "cuAccount", base.to_string, sub, context);

            /**
             * A code that instructs the crew what action to perform.
             *
             */
            base.parse_element (/<cim:DesignLocationCU.cuAction>([\s\S]*?)<\/cim:DesignLocationCU.cuAction>/g, obj, "cuAction", base.to_string, sub, context);

            /**
             * The quantity of the CU being assigned to this location.
             *
             */
            base.parse_element (/<cim:DesignLocationCU.cuQuantity>([\s\S]*?)<\/cim:DesignLocationCU.cuQuantity>/g, obj, "cuQuantity", base.to_string, sub, context);

            /**
             * As the same CU can be used for different purposes and accounting purposes, usage must be specified.
             *
             * Examples include: distribution, transmission, substation.
             *
             */
            base.parse_element (/<cim:DesignLocationCU.cuUsage>([\s\S]*?)<\/cim:DesignLocationCU.cuUsage>/g, obj, "cuUsage", base.to_string, sub, context);

            /**
             * Year when a CU that represents an asset is removed.
             *
             */
            base.parse_element (/<cim:DesignLocationCU.removalDate>([\s\S]*?)<\/cim:DesignLocationCU.removalDate>/g, obj, "removalDate", base.to_string, sub, context);

            base.parse_element (/<cim:DesignLocationCU.status>([\s\S]*?)<\/cim:DesignLocationCU.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * True if associated electrical equipment is intended to be energized while work is being performed.
             *
             */
            base.parse_element (/<cim:DesignLocationCU.toBeEnergised>([\s\S]*?)<\/cim:DesignLocationCU.toBeEnergised>/g, obj, "toBeEnergised", base.to_boolean, sub, context);

            base.parse_attribute (/<cim:DesignLocationCU.DesignLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocation", sub, context, true);

            bucket = context.parsed.DesignLocationCU;
            if (null == bucket)
                context.parsed.DesignLocationCU = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Business justification for capital expenditures, usually addressing operations and maintenance costs as well.
         *
         */
        function parse_BusinessCase (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "BusinessCase";
            /**
             * A codified representation of the business case (i.e., codes for highway relocation, replace substation transformers, etc.).
             *
             */
            base.parse_element (/<cim:BusinessCase.corporateCode>([\s\S]*?)<\/cim:BusinessCase.corporateCode>/g, obj, "corporateCode", base.to_string, sub, context);

            bucket = context.parsed.BusinessCase;
            if (null == bucket)
                context.parsed.BusinessCase = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Various cost items that are not associated with compatible units.
         *
         * Examples include rental equipment, labor, materials, contractor costs, permits - anything not covered in a CU.
         *
         */
        function parse_MiscCostItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "MiscCostItem";
            /**
             * This drives the accounting treatment for this misc. item.
             *
             */
            base.parse_element (/<cim:MiscCostItem.account>([\s\S]*?)<\/cim:MiscCostItem.account>/g, obj, "account", base.to_string, sub, context);

            /**
             * The cost per unit for this misc. item.
             *
             */
            base.parse_element (/<cim:MiscCostItem.costPerUnit>([\s\S]*?)<\/cim:MiscCostItem.costPerUnit>/g, obj, "costPerUnit", base.to_string, sub, context);

            /**
             * The cost type for accounting, such as material, labor, vehicle, contractor, equipment, overhead.
             *
             */
            base.parse_element (/<cim:MiscCostItem.costType>([\s\S]*?)<\/cim:MiscCostItem.costType>/g, obj, "costType", base.to_string, sub, context);

            /**
             * External reference identifier (e.g. purchase order number, serial number) .
             *
             */
            base.parse_element (/<cim:MiscCostItem.externalRefID>([\s\S]*?)<\/cim:MiscCostItem.externalRefID>/g, obj, "externalRefID", base.to_string, sub, context);

            /**
             * The quantity of the misc. item being assigned to this location.
             *
             */
            base.parse_element (/<cim:MiscCostItem.quantity>([\s\S]*?)<\/cim:MiscCostItem.quantity>/g, obj, "quantity", base.to_string, sub, context);

            base.parse_element (/<cim:MiscCostItem.status>([\s\S]*?)<\/cim:MiscCostItem.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:MiscCostItem.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context, true);

            base.parse_attribute (/<cim:MiscCostItem.DesignLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocation", sub, context, true);

            base.parse_attribute (/<cim:MiscCostItem.WorkCostDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context, true);

            bucket = context.parsed.MiscCostItem;
            if (null == bucket)
                context.parsed.MiscCostItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Compatible unit contractor item.
         *
         */
        function parse_CUContractorItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "CUContractorItem";
            /**
             * Activity code identifies a specific and distinguishable unit of work.
             *
             */
            base.parse_element (/<cim:CUContractorItem.activityCode>([\s\S]*?)<\/cim:CUContractorItem.activityCode>/g, obj, "activityCode", base.to_string, sub, context);

            /**
             * The amount that a given contractor will charge for performing this unit of work.
             *
             */
            base.parse_element (/<cim:CUContractorItem.bidAmount>([\s\S]*?)<\/cim:CUContractorItem.bidAmount>/g, obj, "bidAmount", base.to_string, sub, context);

            base.parse_element (/<cim:CUContractorItem.status>([\s\S]*?)<\/cim:CUContractorItem.status>/g, obj, "status", base.to_string, sub, context);

            bucket = context.parsed.CUContractorItem;
            if (null == bucket)
                context.parsed.CUContractorItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of condition factor.
         *
         */
        function parse_ConditionFactorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ConditionFactorKind";
            base.parse_element (/<cim:ConditionFactorKind.labor>([\s\S]*?)<\/cim:ConditionFactorKind.labor>/g, obj, "labor", base.to_string, sub, context);

            base.parse_element (/<cim:ConditionFactorKind.accountAllocation>([\s\S]*?)<\/cim:ConditionFactorKind.accountAllocation>/g, obj, "accountAllocation", base.to_string, sub, context);

            base.parse_element (/<cim:ConditionFactorKind.material>([\s\S]*?)<\/cim:ConditionFactorKind.material>/g, obj, "material", base.to_string, sub, context);

            base.parse_element (/<cim:ConditionFactorKind.travel>([\s\S]*?)<\/cim:ConditionFactorKind.travel>/g, obj, "travel", base.to_string, sub, context);

            base.parse_element (/<cim:ConditionFactorKind.other>([\s\S]*?)<\/cim:ConditionFactorKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.ConditionFactorKind;
            if (null == bucket)
                context.parsed.ConditionFactorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Compatible unit for various types of assets such as transformers switches, substation fences, poles, etc..
         *
         */
        function parse_CUAsset (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "CUAsset";
            /**
             * Quantity of the type asset within the CU.
             *
             */
            base.parse_element (/<cim:CUAsset.quantity>([\s\S]*?)<\/cim:CUAsset.quantity>/g, obj, "quantity", base.to_string, sub, context);

            base.parse_element (/<cim:CUAsset.status>([\s\S]*?)<\/cim:CUAsset.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * The code for this type of asset.
             *
             */
            base.parse_element (/<cim:CUAsset.typeAssetCode>([\s\S]*?)<\/cim:CUAsset.typeAssetCode>/g, obj, "typeAssetCode", base.to_string, sub, context);

            base.parse_attribute (/<cim:CUAsset.TypeAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context, true);

            bucket = context.parsed.CUAsset;
            if (null == bucket)
                context.parsed.CUAsset = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Shadow class for IdentifiedObject, to isolate subclassing from this package.
         *
         * If any subclass gets normative and needs inheritance, it will inherit directly from IdentifiedObject.
         *
         */
        function parse_WorkIdentifiedObject (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WorkIdentifiedObject";
            bucket = context.parsed.WorkIdentifiedObject;
            if (null == bucket)
                context.parsed.WorkIdentifiedObject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Special requirements and/or regulations may pertain to certain types of assets or work.
         *
         * For example, fire protection and scaffolding.
         *
         */
        function parse_Regulation (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "Regulation";
            /**
             * External reference to regulation, if applicable.
             *
             */
            base.parse_element (/<cim:Regulation.referenceNumber>([\s\S]*?)<\/cim:Regulation.referenceNumber>/g, obj, "referenceNumber", base.to_string, sub, context);

            bucket = context.parsed.Regulation;
            if (null == bucket)
                context.parsed.Regulation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Labor used for work order.
         *
         */
        function parse_LaborItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "LaborItem";
            /**
             * Activity code identifies a specific and distinguishable unit of work.
             *
             */
            base.parse_element (/<cim:LaborItem.activityCode>([\s\S]*?)<\/cim:LaborItem.activityCode>/g, obj, "activityCode", base.to_string, sub, context);

            /**
             * Total cost for labor.
             *
             * Note that this may not be able to be derived from labor rate and time charged.
             *
             */
            base.parse_element (/<cim:LaborItem.cost>([\s\S]*?)<\/cim:LaborItem.cost>/g, obj, "cost", base.to_string, sub, context);

            /**
             * Time required to perform work.
             *
             */
            base.parse_element (/<cim:LaborItem.laborDuration>([\s\S]*?)<\/cim:LaborItem.laborDuration>/g, obj, "laborDuration", base.to_string, sub, context);

            /**
             * The labor rate applied for work.
             *
             */
            base.parse_element (/<cim:LaborItem.laborRate>([\s\S]*?)<\/cim:LaborItem.laborRate>/g, obj, "laborRate", base.to_string, sub, context);

            base.parse_element (/<cim:LaborItem.status>([\s\S]*?)<\/cim:LaborItem.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:LaborItem.WorkCostDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context, true);

            base.parse_attribute (/<cim:LaborItem.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context, true);

            bucket = context.parsed.LaborItem;
            if (null == bucket)
                context.parsed.LaborItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This is to specify the various condition factors for a design that may alter the cost estimate or the allocation.
         *
         */
        function parse_ConditionFactor (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "ConditionFactor";
            /**
             * The actual value of the condition factor, such as labor flat fee or percentage.
             *
             */
            base.parse_element (/<cim:ConditionFactor.cfValue>([\s\S]*?)<\/cim:ConditionFactor.cfValue>/g, obj, "cfValue", base.to_string, sub, context);

            /**
             * Kind of this condition factor.
             *
             */
            base.parse_element (/<cim:ConditionFactor.kind>([\s\S]*?)<\/cim:ConditionFactor.kind>/g, obj, "kind", base.to_string, sub, context);

            base.parse_element (/<cim:ConditionFactor.status>([\s\S]*?)<\/cim:ConditionFactor.status>/g, obj, "status", base.to_string, sub, context);

            bucket = context.parsed.ConditionFactor;
            if (null == bucket)
                context.parsed.ConditionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The way material and assets are used to perform a certain type of work task.
         *
         * The way is described in text in the inheritied description attribute.
         *
         */
        function parse_Usage (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "Usage";
            base.parse_element (/<cim:Usage.status>([\s\S]*?)<\/cim:Usage.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:Usage.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context, true);

            bucket = context.parsed.Usage;
            if (null == bucket)
                context.parsed.Usage = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A set of tasks is required to implement a design.
         *
         */
        function parse_OldWorkTask (context, sub)
        {
            var obj;
            var bucket;

            obj = Work.parse_WorkTask (context, sub);
            obj.cls = "OldWorkTask";
            base.parse_attribute (/<cim:OldWorkTask.Design\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context, true);

            base.parse_attribute (/<cim:OldWorkTask.WorkFlowStep\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkFlowStep", sub, context, true);

            base.parse_attribute (/<cim:OldWorkTask.OverheadCost\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OverheadCost", sub, context, true);

            bucket = context.parsed.OldWorkTask;
            if (null == bucket)
                context.parsed.OldWorkTask = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A categorization for resources, often costs, in accounting transactions.
         *
         * Examples include: material components, building in service, coal sales, overhead, etc.
         *
         */
        function parse_CostType (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "CostType";
            /**
             * True if an amount can be assigned to the resource element (e.g., building in service, transmission plant, software development capital); false otherwise (e.g., internal labor, material components).
             *
             */
            base.parse_element (/<cim:CostType.amountAssignable>([\s\S]*?)<\/cim:CostType.amountAssignable>/g, obj, "amountAssignable", base.to_boolean, sub, context);

            /**
             * A codified representation of the resource element.
             *
             */
            base.parse_element (/<cim:CostType.code>([\s\S]*?)<\/cim:CostType.code>/g, obj, "code", base.to_string, sub, context);

            /**
             * The level of the resource element in the hierarchy of resource elements (recursive relationship).
             *
             */
            base.parse_element (/<cim:CostType.level>([\s\S]*?)<\/cim:CostType.level>/g, obj, "level", base.to_string, sub, context);

            /**
             * The stage for which this costType applies: estimated design, estimated actual or actual actual.
             *
             */
            base.parse_element (/<cim:CostType.stage>([\s\S]*?)<\/cim:CostType.stage>/g, obj, "stage", base.to_string, sub, context);

            base.parse_element (/<cim:CostType.status>([\s\S]*?)<\/cim:CostType.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:CostType.ParentCostType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentCostType", sub, context, true);

            bucket = context.parsed.CostType;
            if (null == bucket)
                context.parsed.CostType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Labor code associated with various compatible unit labor items.
         *
         */
        function parse_CULaborCode (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "CULaborCode";
            /**
             * Labor code.
             *
             */
            base.parse_element (/<cim:CULaborCode.code>([\s\S]*?)<\/cim:CULaborCode.code>/g, obj, "code", base.to_string, sub, context);

            base.parse_element (/<cim:CULaborCode.status>([\s\S]*?)<\/cim:CULaborCode.status>/g, obj, "status", base.to_string, sub, context);

            bucket = context.parsed.CULaborCode;
            if (null == bucket)
                context.parsed.CULaborCode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An assignment is given to an ErpPerson, Crew, Organisation, Equipment Item, Tool, etc. and may be used to perform Work, WorkTasks, Procedures, etc.
         *
         * TimeSchedules may be set up directly for Assignments or indirectly via the associated WorkTask. Note that these associations are all inherited through the recursive relationship on Document.
         *
         */
        function parse_Assignment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "Assignment";
            /**
             * Period between the assignment becoming effective and its expiration.
             *
             */
            base.parse_element (/<cim:Assignment.effectivePeriod>([\s\S]*?)<\/cim:Assignment.effectivePeriod>/g, obj, "effectivePeriod", base.to_string, sub, context);

            bucket = context.parsed.Assignment;
            if (null == bucket)
                context.parsed.Assignment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A collection of related work.
         *
         * For construction projects and maintenance projects, multiple phases may be performed.
         *
         */
        function parse_Project (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "Project";
            /**
             * Overall project budget.
             *
             */
            base.parse_element (/<cim:Project.budget>([\s\S]*?)<\/cim:Project.budget>/g, obj, "budget", base.to_string, sub, context);

            base.parse_attribute (/<cim:Project.ParentProject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentProject", sub, context, true);

            base.parse_attribute (/<cim:Project.BusinessCase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BusinessCase", sub, context, true);

            base.parse_attribute (/<cim:Project.ErpProjectAccounting\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context, true);

            bucket = context.parsed.Project;
            if (null == bucket)
                context.parsed.Project = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A logical part of the design (e.g., pole and all equipment on a pole).
         *
         * This includes points and spans.
         *
         */
        function parse_DesignLocation (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "DesignLocation";
            /**
             * The legth of the span from the previous pole to this pole.
             *
             */
            base.parse_element (/<cim:DesignLocation.spanLength>([\s\S]*?)<\/cim:DesignLocation.spanLength>/g, obj, "spanLength", base.to_string, sub, context);

            base.parse_element (/<cim:DesignLocation.status>([\s\S]*?)<\/cim:DesignLocation.status>/g, obj, "status", base.to_string, sub, context);

            bucket = context.parsed.DesignLocation;
            if (null == bucket)
                context.parsed.DesignLocation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Compatible unit for various types of WorkEquipmentAssets, including vehicles.
         *
         */
        function parse_CUWorkEquipmentItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "CUWorkEquipmentItem";
            /**
             * The equipment type code.
             *
             */
            base.parse_element (/<cim:CUWorkEquipmentItem.equipCode>([\s\S]*?)<\/cim:CUWorkEquipmentItem.equipCode>/g, obj, "equipCode", base.to_string, sub, context);

            /**
             * Standard usage rate for the type of vehicle.
             *
             */
            base.parse_element (/<cim:CUWorkEquipmentItem.rate>([\s\S]*?)<\/cim:CUWorkEquipmentItem.rate>/g, obj, "rate", base.to_string, sub, context);

            base.parse_element (/<cim:CUWorkEquipmentItem.status>([\s\S]*?)<\/cim:CUWorkEquipmentItem.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:CUWorkEquipmentItem.TypeAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAsset", sub, context, true);

            bucket = context.parsed.CUWorkEquipmentItem;
            if (null == bucket)
                context.parsed.CUWorkEquipmentItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A roll up by cost type for the entire cost of a work order.
         *
         * For example, total labor.
         *
         */
        function parse_WorkCostSummary (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "WorkCostSummary";
            base.parse_attribute (/<cim:WorkCostSummary.WorkCostDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetail", sub, context, true);

            bucket = context.parsed.WorkCostSummary;
            if (null == bucket)
                context.parsed.WorkCostSummary = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Compatible unit of a consumable supply item.
         *
         * For example, nuts, bolts, brackets, glue, etc.
         *
         */
        function parse_CUMaterialItem (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "CUMaterialItem";
            /**
             * Code for material.
             *
             */
            base.parse_element (/<cim:CUMaterialItem.corporateCode>([\s\S]*?)<\/cim:CUMaterialItem.corporateCode>/g, obj, "corporateCode", base.to_string, sub, context);

            /**
             * Quantity of the TypeMaterial for this CU, used to determine estimated costs based on a per unit cost or a cost per unit length specified in the TypeMaterial.
             *
             */
            base.parse_element (/<cim:CUMaterialItem.quantity>([\s\S]*?)<\/cim:CUMaterialItem.quantity>/g, obj, "quantity", base.to_string, sub, context);

            base.parse_element (/<cim:CUMaterialItem.status>([\s\S]*?)<\/cim:CUMaterialItem.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:CUMaterialItem.TypeMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context, true);

            bucket = context.parsed.CUMaterialItem;
            if (null == bucket)
                context.parsed.CUMaterialItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A collection of all of the individual cost items collected from multiple sources.
         *
         */
        function parse_WorkCostDetail (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkDocument (context, sub);
            obj.cls = "WorkCostDetail";
            /**
             * Amount in designated currency for work, either a total or an individual element.
             *
             * As defined in the attribute "type," multiple instances are applicable to each work for: planned cost, actual cost, authorized cost, budgeted cost, forecasted cost, other.
             *
             */
            base.parse_element (/<cim:WorkCostDetail.amount>([\s\S]*?)<\/cim:WorkCostDetail.amount>/g, obj, "amount", base.to_string, sub, context);

            /**
             * True if 'amount' is a debit, false if it is a credit.
             *
             */
            base.parse_element (/<cim:WorkCostDetail.isDebit>([\s\S]*?)<\/cim:WorkCostDetail.isDebit>/g, obj, "isDebit", base.to_boolean, sub, context);

            /**
             * Date and time that 'amount' is posted to the work.
             *
             */
            base.parse_element (/<cim:WorkCostDetail.transactionDateTime>([\s\S]*?)<\/cim:WorkCostDetail.transactionDateTime>/g, obj, "transactionDateTime", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:WorkCostDetail.CostType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CostType", sub, context, true);

            base.parse_attribute (/<cim:WorkCostDetail.OverheadCost\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OverheadCost", sub, context, true);

            base.parse_attribute (/<cim:WorkCostDetail.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context, true);

            base.parse_attribute (/<cim:WorkCostDetail.Design\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Design", sub, context, true);

            base.parse_attribute (/<cim:WorkCostDetail.ErpProjectAccounting\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context, true);

            base.parse_attribute (/<cim:WorkCostDetail.WorkCostSummary\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostSummary", sub, context, true);

            bucket = context.parsed.WorkCostDetail;
            if (null == bucket)
                context.parsed.WorkCostDetail = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Overhead cost applied to work order.
         *
         */
        function parse_OverheadCost (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WorkIdentifiedObject (context, sub);
            obj.cls = "OverheadCost";
            /**
             * Overhead code.
             *
             */
            base.parse_element (/<cim:OverheadCost.code>([\s\S]*?)<\/cim:OverheadCost.code>/g, obj, "code", base.to_string, sub, context);

            /**
             * The overhead cost to be applied.
             *
             */
            base.parse_element (/<cim:OverheadCost.cost>([\s\S]*?)<\/cim:OverheadCost.cost>/g, obj, "cost", base.to_string, sub, context);

            base.parse_element (/<cim:OverheadCost.status>([\s\S]*?)<\/cim:OverheadCost.status>/g, obj, "status", base.to_string, sub, context);

            bucket = context.parsed.OverheadCost;
            if (null == bucket)
                context.parsed.OverheadCost = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of design.
         *
         */
        function parse_DesignKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DesignKind";
            base.parse_element (/<cim:DesignKind.estimated>([\s\S]*?)<\/cim:DesignKind.estimated>/g, obj, "estimated", base.to_string, sub, context);

            base.parse_element (/<cim:DesignKind.asBuilt>([\s\S]*?)<\/cim:DesignKind.asBuilt>/g, obj, "asBuilt", base.to_string, sub, context);

            base.parse_element (/<cim:DesignKind.other>([\s\S]*?)<\/cim:DesignKind.other>/g, obj, "other", base.to_string, sub, context);

            bucket = context.parsed.DesignKind;
            if (null == bucket)
                context.parsed.DesignKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_WorkDocument: parse_WorkDocument,
                parse_BusinessCase: parse_BusinessCase,
                parse_Regulation: parse_Regulation,
                parse_WorkCostDetail: parse_WorkCostDetail,
                parse_OldWorkTask: parse_OldWorkTask,
                parse_QualificationRequirement: parse_QualificationRequirement,
                parse_Project: parse_Project,
                parse_CUWorkEquipmentItem: parse_CUWorkEquipmentItem,
                parse_OneCallRequest: parse_OneCallRequest,
                parse_ConditionFactorKind: parse_ConditionFactorKind,
                parse_ConditionFactor: parse_ConditionFactor,
                parse_OverheadCost: parse_OverheadCost,
                parse_NonStandardItem: parse_NonStandardItem,
                parse_CUGroup: parse_CUGroup,
                parse_CUAllowableAction: parse_CUAllowableAction,
                parse_DesignLocationCU: parse_DesignLocationCU,
                parse_DesignKind: parse_DesignKind,
                parse_CULaborItem: parse_CULaborItem,
                parse_CULaborCode: parse_CULaborCode,
                parse_WorkCostSummary: parse_WorkCostSummary,
                parse_WorkIdentifiedObject: parse_WorkIdentifiedObject,
                parse_CUAsset: parse_CUAsset,
                parse_TypeMaterial: parse_TypeMaterial,
                parse_Usage: parse_Usage,
                parse_ContractorItem: parse_ContractorItem,
                parse_PropertyUnit: parse_PropertyUnit,
                parse_WorkActionKind: parse_WorkActionKind,
                parse_MiscCostItem: parse_MiscCostItem,
                parse_LaborItem: parse_LaborItem,
                parse_CostType: parse_CostType,
                parse_DesignLocation: parse_DesignLocation,
                parse_WorkStatusEntry: parse_WorkStatusEntry,
                parse_WorkFlowStep: parse_WorkFlowStep,
                parse_AccessPermit: parse_AccessPermit,
                parse_Capability: parse_Capability,
                parse_CUMaterialItem: parse_CUMaterialItem,
                parse_CompatibleUnit: parse_CompatibleUnit,
                parse_InfoQuestion: parse_InfoQuestion,
                parse_Design: parse_Design,
                parse_ShiftPattern: parse_ShiftPattern,
                parse_Assignment: parse_Assignment,
                parse_CUContractorItem: parse_CUContractorItem
            }
        );
    }
);