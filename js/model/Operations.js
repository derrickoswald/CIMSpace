define
(
    ["model/base", "model/Common"],
    /**
     * This package contains the core information classes that support operations and outage management applications.
     */
    function (base, Common)
    {

        /**
         * Action on clearance document as a switching step.
         */
        function parse_ClearanceAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "ClearanceAction";
            /**
             * Clearance action to perform.
             */
            obj["kind"] = base.parse_element (/<cim:ClearanceAction.kind>([\s\S]*?)<\/cim:ClearanceAction.kind>/g, sub, context, true);
            /**
             * Clearance associated with this clearance action.
             */
            obj["Clearance"] = base.parse_attribute (/<cim:ClearanceAction.Clearance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Group to which this step belongs.
             */
            obj["SwitchingStepGroup"] = base.parse_attribute (/<cim:ClearanceAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ClearanceAction;
            if (null == bucket)
                context.parsed.ClearanceAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A logical step, grouping atomic switching steps that are important to distinguish when they may change topology (e.g. placing a jumper between two cuts).
         */
        function parse_SwitchingStepGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "SwitchingStepGroup";
            /**
             * If true, the sequence number serves for presentation purposes only, and the activity itself may be executed at any time.
             */
            obj["isFreeSequence"] = base.to_boolean (base.parse_element (/<cim:SwitchingStepGroup.isFreeSequence>([\s\S]*?)<\/cim:SwitchingStepGroup.isFreeSequence>/g, sub, context, true));
            /**
             * Order of this activity in the sequence of activities within the switching plan.
             */
            obj["sequenceNumber"] = base.parse_element (/<cim:SwitchingStepGroup.sequenceNumber>([\s\S]*?)<\/cim:SwitchingStepGroup.sequenceNumber>/g, sub, context, true);
            /**
             * Switching plan to which this group belongs.
             */
            obj["SwitchingPlan"] = base.parse_attribute (/<cim:SwitchingStepGroup.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SwitchingStepGroup;
            if (null == bucket)
                context.parsed.SwitchingStepGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_OperationTag (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "OperationTag";
            /**
             * Asset on which this operation tag has been placed.
             */
            obj["Asset"] = base.parse_attribute (/<cim:OperationTag.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Tag action associated with this tag.
             */
            obj["TagAction"] = base.parse_attribute (/<cim:OperationTag.TagAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Power system resource on which this tag has been placed.
             */
            obj["PowerSystemResource"] = base.parse_attribute (/<cim:OperationTag.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.OperationTag;
            if (null == bucket)
                context.parsed.OperationTag = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Event recording the change in operational status of a power system resource; may be for an event that has already occurred or for a planned activity.
         */
        function parse_PSREvent (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_ActivityRecord (context, sub);
            obj.cls = "PSREvent";
            /**
             * Kind of event.
             */
            obj["kind"] = base.parse_element (/<cim:PSREvent.kind>([\s\S]*?)<\/cim:PSREvent.kind>/g, sub, context, true);
            /**
             * Power system resource that generated this event.
             */
            obj["PowerSystemResource"] = base.parse_attribute (/<cim:PSREvent.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PSREvent;
            if (null == bucket)
                context.parsed.PSREvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Action on ground as a switching step.
         */
        function parse_GroundAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "GroundAction";
            /**
             * Switching action to perform.
             */
            obj["kind"] = base.parse_element (/<cim:GroundAction.kind>([\s\S]*?)<\/cim:GroundAction.kind>/g, sub, context, true);
            /**
             * Ground on which this action is taken.
             */
            obj["Ground"] = base.parse_attribute (/<cim:GroundAction.Ground\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The line segment that this ground action will affect.
             * This is the only way to access relationship to clamp in case the ground needs to be placed along the line segment.
             */
            obj["AlongACLineSegment"] = base.parse_attribute (/<cim:GroundAction.AlongACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Equipment being grounded with this operation.
             * In case of placing a ground anywhere along a line segment, you must use the clamp (to get the distance from one terminal), so use the explicit relation with line segment. In all other cases (including placing the ground at a line segment terminal), reference to one or more conducting equipment is sufficient.
             */
            obj["GroundedEquipment"] = base.parse_attribute (/<cim:GroundAction.GroundedEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Group to which this step belongs.
             */
            obj["SwitchingStepGroup"] = base.parse_attribute (/<cim:GroundAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.GroundAction;
            if (null == bucket)
                context.parsed.GroundAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Document describing details of an active or planned outage in a part of the electrical network.
         * A non-planned outage may be created upon:
         */
        function parse_Outage (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "Outage";
            /**
             * One or more causes of this outage.
             * Note: At present, this is a free text; could be replaced with a separate associated class in case we have multiple causes (e.g. OutageCauseType, inheriting from IdentifiedObject).
             */
            obj["cause"] = base.parse_element (/<cim:Outage.cause>([\s\S]*?)<\/cim:Outage.cause>/g, sub, context, true);
            /**
             * Estimated outage period.
             * The start of the period makes sense in case of a planned outage only, whereas the end of the period corresponds to the estimated restoration time in general.
             */
            obj["estimatedPeriod"] = base.parse_element (/<cim:Outage.estimatedPeriod>([\s\S]*?)<\/cim:Outage.estimatedPeriod>/g, sub, context, true);
            /**
             * True if planned, false otherwise (for example due to a breaker trip).
             */
            obj["isPlanned"] = base.to_boolean (base.parse_element (/<cim:Outage.isPlanned>([\s\S]*?)<\/cim:Outage.isPlanned>/g, sub, context, true));
            /**
             * Actual outage period; end of the period corresponds to the actual restoration time.
             */
            obj["actualPeriod"] = base.parse_element (/<cim:Outage.actualPeriod>([\s\S]*?)<\/cim:Outage.actualPeriod>/g, sub, context, true);
            /**
             * Summary counts of service points (customers) affected by this outage.
             */
            obj["summary"] = base.parse_element (/<cim:Outage.summary>([\s\S]*?)<\/cim:Outage.summary>/g, sub, context, true);
            /**
             * Date and time planned outage has been cancelled.
             */
            obj["cancelledDateTime"] = base.to_datetime (base.parse_element (/<cim:Outage.cancelledDateTime>([\s\S]*?)<\/cim:Outage.cancelledDateTime>/g, sub, context, true));
            /**
             * Outage schedule whose execution will result in this outage.
             */
            obj["OutageSchedule"] = base.parse_attribute (/<cim:Outage.OutageSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Incident reported in trouble call that results in this outage.
             */
            obj["Incident"] = base.parse_attribute (/<cim:Outage.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Outage;
            if (null == bucket)
                context.parsed.Outage = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of action on switch.
         */
        function parse_SwitchActionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SwitchActionKind";
            /**
             * Open the switch.
             */
            obj["open"] = base.parse_element (/<cim:SwitchActionKind.open>([\s\S]*?)<\/cim:SwitchActionKind.open>/g, sub, context, true);
            /**
             * Close the switch.
             */
            obj["close"] = base.parse_element (/<cim:SwitchActionKind.close>([\s\S]*?)<\/cim:SwitchActionKind.close>/g, sub, context, true);
            /**
             * Disable (automatic) switch reclosing.
             */
            obj["disableReclosing"] = base.parse_element (/<cim:SwitchActionKind.disableReclosing>([\s\S]*?)<\/cim:SwitchActionKind.disableReclosing>/g, sub, context, true);
            /**
             * Enable (automatic) switch reclosing.
             */
            obj["enableReclosing"] = base.parse_element (/<cim:SwitchActionKind.enableReclosing>([\s\S]*?)<\/cim:SwitchActionKind.enableReclosing>/g, sub, context, true);
            bucket = context.parsed.SwitchActionKind;
            if (null == bucket)
                context.parsed.SwitchActionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Action on cut as a switching step.
         */
        function parse_CutAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "CutAction";
            /**
             * Switching action to perform.
             */
            obj["kind"] = base.parse_element (/<cim:CutAction.kind>([\s\S]*?)<\/cim:CutAction.kind>/g, sub, context, true);
            /**
             * Group to which this step belongs.
             */
            obj["SwitchingStepGroup"] = base.parse_attribute (/<cim:CutAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Cut on which this action is taken.
             */
            obj["Cut"] = base.parse_attribute (/<cim:CutAction.Cut\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CutAction;
            if (null == bucket)
                context.parsed.CutAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Action on switch as a switching step.
         */
        function parse_SwitchAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "SwitchAction";
            /**
             * Switching action to perform.
             */
            obj["kind"] = base.parse_element (/<cim:SwitchAction.kind>([\s\S]*?)<\/cim:SwitchAction.kind>/g, sub, context, true);
            /**
             * Planned outage for whose scope this switch action applies.
             */
            obj["PlannedOutage"] = base.parse_attribute (/<cim:SwitchAction.PlannedOutage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Switch that is the object of this switch action.
             */
            obj["OperatedSwitch"] = base.parse_attribute (/<cim:SwitchAction.OperatedSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Group to which this step belongs.
             */
            obj["SwitchingStepGroup"] = base.parse_attribute (/<cim:SwitchAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SwitchAction;
            if (null == bucket)
                context.parsed.SwitchAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A sequence of grouped or atomic steps intended to:
        - de-energise equipment or part of the network for safe work, and/or
         * - bring back in service previously de-energised equipment or part of the network.
         */
        function parse_SwitchingPlan (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStepGroup (context, sub);
            obj.cls = "SwitchingPlan";
            /**
             * Ranking in comparison to other switching plans.
             */
            obj["rank"] = base.parse_element (/<cim:SwitchingPlan.rank>([\s\S]*?)<\/cim:SwitchingPlan.rank>/g, sub, context, true);
            /**
             * Purpose of  this plan, such as whether it is to move the state from normal to some abnormal condition, or to restore the normal state after an abnormal condition, or to perform some kind of optimisation such as correction of overload, voltage control, etc.
             */
            obj["purpose"] = base.parse_element (/<cim:SwitchingPlan.purpose>([\s\S]*?)<\/cim:SwitchingPlan.purpose>/g, sub, context, true);
            /**
             * Outage that will be eliminated when this switching plan gets executed.
             */
            obj["Outage"] = base.parse_attribute (/<cim:SwitchingPlan.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SwitchingPlan;
            if (null == bucket)
                context.parsed.SwitchingPlan = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Action on jumper as a switching step.
         */
        function parse_JumperAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "JumperAction";
            /**
             * Switching action to perform.
             */
            obj["kind"] = base.parse_element (/<cim:JumperAction.kind>([\s\S]*?)<\/cim:JumperAction.kind>/g, sub, context, true);
            /**
             * Jumper on which this action is taken.
             */
            obj["Jumper"] = base.parse_attribute (/<cim:JumperAction.Jumper\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Group to which this step belongs.
             */
            obj["SwitchingStepGroup"] = base.parse_attribute (/<cim:JumperAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.JumperAction;
            if (null == bucket)
                context.parsed.JumperAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Description of a problem in the field that may be reported in a trouble ticket or come from another source.
         * It may have to do with an outage.
         */
        function parse_Incident (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "Incident";
            /**
             * Cause of this incident.
             */
            obj["cause"] = base.parse_element (/<cim:Incident.cause>([\s\S]*?)<\/cim:Incident.cause>/g, sub, context, true);
            /**
             * Operator who owns this incident.
             */
            obj["Owner"] = base.parse_attribute (/<cim:Incident.Owner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Outage for this incident.
             */
            obj["Outage"] = base.parse_attribute (/<cim:Incident.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Incident;
            if (null == bucket)
                context.parsed.Incident = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Action on operation tag as a switching step.
         */
        function parse_TagAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "TagAction";
            /**
             * Kind of tag action.
             */
            obj["kind"] = base.parse_element (/<cim:TagAction.kind>([\s\S]*?)<\/cim:TagAction.kind>/g, sub, context, true);
            /**
             * Tag associated with this tag action.
             */
            obj["OperationTag"] = base.parse_attribute (/<cim:TagAction.OperationTag\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Group to which this step belongs.
             */
            obj["SwitchingStepGroup"] = base.parse_attribute (/<cim:TagAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TagAction;
            if (null == bucket)
                context.parsed.TagAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of action on temporary equipment (such as cut, jumper, ground, energy source).
         */
        function parse_TempEquipActionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TempEquipActionKind";
            /**
             * Place the jumper (close) or the cut (open).
             */
            obj["place"] = base.parse_element (/<cim:TempEquipActionKind.place>([\s\S]*?)<\/cim:TempEquipActionKind.place>/g, sub, context, true);
            /**
             * Remove the jumper (open) or the cut (close).
             */
            obj["remove"] = base.parse_element (/<cim:TempEquipActionKind.remove>([\s\S]*?)<\/cim:TempEquipActionKind.remove>/g, sub, context, true);
            bucket = context.parsed.TempEquipActionKind;
            if (null == bucket)
                context.parsed.TempEquipActionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A document that can be associated with equipment to describe any sort of restrictions compared with the original manufacturer's specification or with the usual operational practice e.g. temporary maximum loadings, maximum switching current, do not operate if bus couplers are open, etc.
         * In the UK, for example, if a breaker or switch ever mal-operates, this is reported centrally and utilities use their asset systems to identify all the installed devices of the same manufacturer's type. They then apply operational restrictions in the operational systems to warn operators of potential problems. After appropriate inspection and maintenance, the operational restrictions may be removed.
         */
        function parse_OperationalRestriction (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "OperationalRestriction";
            /**
             * Interval during which this restriction is applied.
             */
            obj["activePeriod"] = base.parse_element (/<cim:OperationalRestriction.activePeriod>([\s\S]*?)<\/cim:OperationalRestriction.activePeriod>/g, sub, context, true);
            /**
             * Restricted (new) value; includes unit of measure and potentially multiplier.
             */
            obj["restrictedValue"] = base.parse_element (/<cim:OperationalRestriction.restrictedValue>([\s\S]*?)<\/cim:OperationalRestriction.restrictedValue>/g, sub, context, true);
            /**
             * Asset model to which this restriction applies.
             */
            obj["ProductAssetModel"] = base.parse_attribute (/<cim:OperationalRestriction.ProductAssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.OperationalRestriction;
            if (null == bucket)
                context.parsed.OperationalRestriction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of clearance action.
         */
        function parse_ClearanceActionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ClearanceActionKind";
            /**
             * Issue clearance.
             */
            obj["issue"] = base.parse_element (/<cim:ClearanceActionKind.issue>([\s\S]*?)<\/cim:ClearanceActionKind.issue>/g, sub, context, true);
            /**
             * Update clearance.
             */
            obj["update"] = base.parse_element (/<cim:ClearanceActionKind.update>([\s\S]*?)<\/cim:ClearanceActionKind.update>/g, sub, context, true);
            /**
             * Release clearance.
             */
            obj["release"] = base.parse_element (/<cim:ClearanceActionKind.release>([\s\S]*?)<\/cim:ClearanceActionKind.release>/g, sub, context, true);
            bucket = context.parsed.ClearanceActionKind;
            if (null == bucket)
                context.parsed.ClearanceActionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Document restricting or authorising works on electrical equipment (for example a permit to work, sanction for test, limitation of access, or certificate of isolation), defined based upon organisational practices.
         */
        function parse_SafetyDocument (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "SafetyDocument";
            /**
             * Switching plan to which this safety document applies.
             */
            obj["SwitchingPlan"] = base.parse_attribute (/<cim:SafetyDocument.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SafetyDocument;
            if (null == bucket)
                context.parsed.SafetyDocument = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Safety document used to authorise work on conducting equipment in the field.
         * Tagged equipment is not allowed to be operated.
         */
        function parse_ClearanceDocument (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SafetyDocument (context, sub);
            obj.cls = "ClearanceDocument";
            /**
             * If true, the equipment must be deenergised.
             */
            obj["mustBeDeenergised"] = base.to_boolean (base.parse_element (/<cim:ClearanceDocument.mustBeDeenergised>([\s\S]*?)<\/cim:ClearanceDocument.mustBeDeenergised>/g, sub, context, true));
            /**
             * If true, the equipment must be grounded.
             */
            obj["mustBeGrounded"] = base.to_boolean (base.parse_element (/<cim:ClearanceDocument.mustBeGrounded>([\s\S]*?)<\/cim:ClearanceDocument.mustBeGrounded>/g, sub, context, true));
            /**
             * Clearance action associated with this clearance.
             */
            obj["ClearanceAction"] = base.parse_attribute (/<cim:ClearanceDocument.ClearanceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ClearanceDocument;
            if (null == bucket)
                context.parsed.ClearanceDocument = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Summary counts of service points affected by an outage.
         * These counts are sometimes referred to as total and critical customer count.
         */
        function parse_ServicePointOutageSummary (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ServicePointOutageSummary";
            /**
             * Number of critical service (delivery) points affected by an outage.
             */
            obj["criticalCount"] = base.parse_element (/<cim:ServicePointOutageSummary.criticalCount>([\s\S]*?)<\/cim:ServicePointOutageSummary.criticalCount>/g, sub, context, true);
            /**
             * Number of all service (delivery) points affected by an outage.
             */
            obj["totalCount"] = base.parse_element (/<cim:ServicePointOutageSummary.totalCount>([\s\S]*?)<\/cim:ServicePointOutageSummary.totalCount>/g, sub, context, true);
            bucket = context.parsed.ServicePointOutageSummary;
            if (null == bucket)
                context.parsed.ServicePointOutageSummary = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Lowered capability because of deterioration or inadequacy (sometimes referred to as derating or partial outage) or other kind of operational rating change.
         */
        function parse_OperationalUpdatedRating (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OperationalRestriction (context, sub);
            obj.cls = "OperationalUpdatedRating";
            /**
             * Type of operational updated rating, e.g. a derate, a rerate or a return to normal.
             */
            obj["changeType"] = base.parse_element (/<cim:OperationalUpdatedRating.changeType>([\s\S]*?)<\/cim:OperationalUpdatedRating.changeType>/g, sub, context, true);
            /**
             * Planned equipment outage with this updated rating.
             */
            obj["PlannedOutage"] = base.parse_attribute (/<cim:OperationalUpdatedRating.PlannedOutage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.OperationalUpdatedRating;
            if (null == bucket)
                context.parsed.OperationalUpdatedRating = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of power system resource event.
         */
        function parse_PSREventKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PSREventKind";
            /**
             * Power system resource state change to in service.
             */
            obj["inService"] = base.parse_element (/<cim:PSREventKind.inService>([\s\S]*?)<\/cim:PSREventKind.inService>/g, sub, context, true);
            /**
             * Power system resource state change to out of service.
             */
            obj["outOfService"] = base.parse_element (/<cim:PSREventKind.outOfService>([\s\S]*?)<\/cim:PSREventKind.outOfService>/g, sub, context, true);
            /**
             * Power system resource state change to pending add.
             */
            obj["pendingAdd"] = base.parse_element (/<cim:PSREventKind.pendingAdd>([\s\S]*?)<\/cim:PSREventKind.pendingAdd>/g, sub, context, true);
            /**
             * Power system resource state change to pending remove.
             */
            obj["pendingRemove"] = base.parse_element (/<cim:PSREventKind.pendingRemove>([\s\S]*?)<\/cim:PSREventKind.pendingRemove>/g, sub, context, true);
            /**
             * Power system resource state change to pending replace.
             */
            obj["pendingReplace"] = base.parse_element (/<cim:PSREventKind.pendingReplace>([\s\S]*?)<\/cim:PSREventKind.pendingReplace>/g, sub, context, true);
            /**
             * Other power system resource state change.
             */
            obj["other"] = base.parse_element (/<cim:PSREventKind.other>([\s\S]*?)<\/cim:PSREventKind.other>/g, sub, context, true);
            /**
             * Unknown power system resource state change.
             */
            obj["unknown"] = base.parse_element (/<cim:PSREventKind.unknown>([\s\S]*?)<\/cim:PSREventKind.unknown>/g, sub, context, true);
            bucket = context.parsed.PSREventKind;
            if (null == bucket)
                context.parsed.PSREventKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Action on energy source as a switching step.
         */
        function parse_EnergySourceAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "EnergySourceAction";
            /**
             * Switching action to perform.
             */
            obj["kind"] = base.parse_element (/<cim:EnergySourceAction.kind>([\s\S]*?)<\/cim:EnergySourceAction.kind>/g, sub, context, true);
            /**
             * Energy source on which this action is taken.
             */
            obj["EnergySource"] = base.parse_attribute (/<cim:EnergySourceAction.EnergySource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Group to which this step belongs.
             */
            obj["SwitchingStepGroup"] = base.parse_attribute (/<cim:EnergySourceAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.EnergySourceAction;
            if (null == bucket)
                context.parsed.EnergySourceAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Document containing the definition of planned outages of equipment and/or service (delivery) points (sometimes referred to as customers).
         * It is used as specification for producing switching plans.
         */
        function parse_OutageSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "OutageSchedule";
            bucket = context.parsed.OutageSchedule;
            if (null == bucket)
                context.parsed.OutageSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of action on tag.
         */
        function parse_TagActionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TagActionKind";
            /**
             * Place the tag.
             */
            obj["place"] = base.parse_element (/<cim:TagActionKind.place>([\s\S]*?)<\/cim:TagActionKind.place>/g, sub, context, true);
            /**
             * Remove the tag.
             */
            obj["remove"] = base.parse_element (/<cim:TagActionKind.remove>([\s\S]*?)<\/cim:TagActionKind.remove>/g, sub, context, true);
            /**
             * Verify the tag.
             */
            obj["verify"] = base.parse_element (/<cim:TagActionKind.verify>([\s\S]*?)<\/cim:TagActionKind.verify>/g, sub, context, true);
            bucket = context.parsed.TagActionKind;
            if (null == bucket)
                context.parsed.TagActionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Atomic switching step; can be part of a switching step group, or of the switching plan.
         */
        function parse_SwitchingStep (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SwitchingStep";
            /**
             * Actual date and time of this switching step.
             */
            obj["executedDateTime"] = base.to_datetime (base.parse_element (/<cim:SwitchingStep.executedDateTime>([\s\S]*?)<\/cim:SwitchingStep.executedDateTime>/g, sub, context, true));
            /**
             * Planned date and time of this switching step.
             */
            obj["plannedDateTime"] = base.to_datetime (base.parse_element (/<cim:SwitchingStep.plannedDateTime>([\s\S]*?)<\/cim:SwitchingStep.plannedDateTime>/g, sub, context, true));
            /**
             * Free text description of this activity.
             */
            obj["description"] = base.parse_element (/<cim:SwitchingStep.description>([\s\S]*?)<\/cim:SwitchingStep.description>/g, sub, context, true);
            /**
             * If true, the sequence number serves for presentation purposes only, and the activity itself may be executed at any time.
             */
            obj["isFreeSequence"] = base.to_boolean (base.parse_element (/<cim:SwitchingStep.isFreeSequence>([\s\S]*?)<\/cim:SwitchingStep.isFreeSequence>/g, sub, context, true));
            /**
             * Order of this activity in the sequence of activities within the switching plan.
             */
            obj["sequenceNumber"] = base.parse_element (/<cim:SwitchingStep.sequenceNumber>([\s\S]*?)<\/cim:SwitchingStep.sequenceNumber>/g, sub, context, true);
            /**
             * Crew member responsible for this switching step.
             */
            obj["CrewMember"] = base.parse_attribute (/<cim:SwitchingStep.CrewMember\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Operator responsible for this switching step.
             */
            obj["Operator"] = base.parse_attribute (/<cim:SwitchingStep.Operator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SwitchingStep;
            if (null == bucket)
                context.parsed.SwitchingStep = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An arbitrary switching step.
         */
        function parse_GenericAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "GenericAction";
            /**
             * Group to which this step belongs.
             */
            obj["SwitchingStepGroup"] = base.parse_attribute (/<cim:GenericAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.GenericAction;
            if (null == bucket)
                context.parsed.GenericAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_PSREvent: parse_PSREvent,
                parse_SwitchActionKind: parse_SwitchActionKind,
                parse_OperationTag: parse_OperationTag,
                parse_ServicePointOutageSummary: parse_ServicePointOutageSummary,
                parse_Outage: parse_Outage,
                parse_ClearanceDocument: parse_ClearanceDocument,
                parse_SafetyDocument: parse_SafetyDocument,
                parse_ClearanceActionKind: parse_ClearanceActionKind,
                parse_TempEquipActionKind: parse_TempEquipActionKind,
                parse_OutageSchedule: parse_OutageSchedule,
                parse_ClearanceAction: parse_ClearanceAction,
                parse_OperationalUpdatedRating: parse_OperationalUpdatedRating,
                parse_TagActionKind: parse_TagActionKind,
                parse_GroundAction: parse_GroundAction,
                parse_CutAction: parse_CutAction,
                parse_GenericAction: parse_GenericAction,
                parse_SwitchingStep: parse_SwitchingStep,
                parse_SwitchingPlan: parse_SwitchingPlan,
                parse_PSREventKind: parse_PSREventKind,
                parse_Incident: parse_Incident,
                parse_JumperAction: parse_JumperAction,
                parse_SwitchAction: parse_SwitchAction,
                parse_TagAction: parse_TagAction,
                parse_SwitchingStepGroup: parse_SwitchingStepGroup,
                parse_OperationalRestriction: parse_OperationalRestriction,
                parse_EnergySourceAction: parse_EnergySourceAction
            }
        );
    }
);