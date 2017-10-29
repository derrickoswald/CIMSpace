define
(
    ["model/base", "model/Common"],
    /**
     * This package contains the core information classes that support operations and outage management applications.
     *
     */
    function (base, Common)
    {

        /**
         * Action on clearance document as a switching step.
         *
         */
        function parse_ClearanceAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "ClearanceAction";
            base.parse_element (/<cim:ClearanceAction.kind>([\s\S]*?)<\/cim:ClearanceAction.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_attribute (/<cim:ClearanceAction.Clearance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Clearance", sub, context);
            base.parse_attribute (/<cim:ClearanceAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
            bucket = context.parsed.ClearanceAction;
            if (null == bucket)
                context.parsed.ClearanceAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ClearanceAction (obj, exporters, full)
        {
            var fields = exporters["SwitchingStep"](obj, exporters, false);

            base.export_element (obj, "ClearanceAction", "kind", base.from_string, fields);
            base.export_attribute (obj, "ClearanceAction", "Clearance", fields);
            base.export_attribute (obj, "ClearanceAction", "SwitchingStepGroup", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A logical step, grouping atomic switching steps that are important to distinguish when they may change topology (e.g. placing a jumper between two cuts).
         *
         */
        function parse_SwitchingStepGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "SwitchingStepGroup";
            base.parse_element (/<cim:SwitchingStepGroup.isFreeSequence>([\s\S]*?)<\/cim:SwitchingStepGroup.isFreeSequence>/g, obj, "isFreeSequence", base.to_boolean, sub, context);
            base.parse_element (/<cim:SwitchingStepGroup.sequenceNumber>([\s\S]*?)<\/cim:SwitchingStepGroup.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
            base.parse_attribute (/<cim:SwitchingStepGroup.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
            bucket = context.parsed.SwitchingStepGroup;
            if (null == bucket)
                context.parsed.SwitchingStepGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SwitchingStepGroup (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "SwitchingStepGroup", "isFreeSequence", base.from_boolean, fields);
            base.export_element (obj, "SwitchingStepGroup", "sequenceNumber", base.from_string, fields);
            base.export_attribute (obj, "SwitchingStepGroup", "SwitchingPlan", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_OperationTag (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "OperationTag";
            base.parse_attribute (/<cim:OperationTag.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
            base.parse_attribute (/<cim:OperationTag.TagAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TagAction", sub, context);
            base.parse_attribute (/<cim:OperationTag.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
            bucket = context.parsed.OperationTag;
            if (null == bucket)
                context.parsed.OperationTag = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OperationTag (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_attribute (obj, "OperationTag", "Asset", fields);
            base.export_attribute (obj, "OperationTag", "TagAction", fields);
            base.export_attribute (obj, "OperationTag", "PowerSystemResource", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Event recording the change in operational status of a power system resource; may be for an event that has already occurred or for a planned activity.
         *
         */
        function parse_PSREvent (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_ActivityRecord (context, sub);
            obj.cls = "PSREvent";
            base.parse_element (/<cim:PSREvent.kind>([\s\S]*?)<\/cim:PSREvent.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_attribute (/<cim:PSREvent.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
            bucket = context.parsed.PSREvent;
            if (null == bucket)
                context.parsed.PSREvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PSREvent (obj, exporters, full)
        {
            var fields = exporters["ActivityRecord"](obj, exporters, false);

            base.export_element (obj, "PSREvent", "kind", base.from_string, fields);
            base.export_attribute (obj, "PSREvent", "PowerSystemResource", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Action on ground as a switching step.
         *
         */
        function parse_GroundAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "GroundAction";
            base.parse_element (/<cim:GroundAction.kind>([\s\S]*?)<\/cim:GroundAction.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_attribute (/<cim:GroundAction.Ground\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Ground", sub, context);
            base.parse_attribute (/<cim:GroundAction.AlongACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AlongACLineSegment", sub, context);
            base.parse_attribute (/<cim:GroundAction.GroundedEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GroundedEquipment", sub, context);
            base.parse_attribute (/<cim:GroundAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
            bucket = context.parsed.GroundAction;
            if (null == bucket)
                context.parsed.GroundAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GroundAction (obj, exporters, full)
        {
            var fields = exporters["SwitchingStep"](obj, exporters, false);

            base.export_element (obj, "GroundAction", "kind", base.from_string, fields);
            base.export_attribute (obj, "GroundAction", "Ground", fields);
            base.export_attribute (obj, "GroundAction", "AlongACLineSegment", fields);
            base.export_attribute (obj, "GroundAction", "GroundedEquipment", fields);
            base.export_attribute (obj, "GroundAction", "SwitchingStepGroup", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Document describing details of an active or planned outage in a part of the electrical network.
         *
         * A non-planned outage may be created upon:
         *
         */
        function parse_Outage (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "Outage";
            base.parse_element (/<cim:Outage.cause>([\s\S]*?)<\/cim:Outage.cause>/g, obj, "cause", base.to_string, sub, context);
            base.parse_element (/<cim:Outage.estimatedPeriod>([\s\S]*?)<\/cim:Outage.estimatedPeriod>/g, obj, "estimatedPeriod", base.to_string, sub, context);
            base.parse_element (/<cim:Outage.isPlanned>([\s\S]*?)<\/cim:Outage.isPlanned>/g, obj, "isPlanned", base.to_boolean, sub, context);
            base.parse_element (/<cim:Outage.actualPeriod>([\s\S]*?)<\/cim:Outage.actualPeriod>/g, obj, "actualPeriod", base.to_string, sub, context);
            base.parse_element (/<cim:Outage.summary>([\s\S]*?)<\/cim:Outage.summary>/g, obj, "summary", base.to_string, sub, context);
            base.parse_element (/<cim:Outage.cancelledDateTime>([\s\S]*?)<\/cim:Outage.cancelledDateTime>/g, obj, "cancelledDateTime", base.to_datetime, sub, context);
            base.parse_attribute (/<cim:Outage.OutageSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OutageSchedule", sub, context);
            base.parse_attribute (/<cim:Outage.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
            bucket = context.parsed.Outage;
            if (null == bucket)
                context.parsed.Outage = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Outage (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "Outage", "cause", base.from_string, fields);
            base.export_element (obj, "Outage", "estimatedPeriod", base.from_string, fields);
            base.export_element (obj, "Outage", "isPlanned", base.from_boolean, fields);
            base.export_element (obj, "Outage", "actualPeriod", base.from_string, fields);
            base.export_element (obj, "Outage", "summary", base.from_string, fields);
            base.export_element (obj, "Outage", "cancelledDateTime", base.from_datetime, fields);
            base.export_attribute (obj, "Outage", "OutageSchedule", fields);
            base.export_attribute (obj, "Outage", "Incident", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of action on switch.
         *
         */
        function parse_SwitchActionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SwitchActionKind";
            base.parse_element (/<cim:SwitchActionKind.open>([\s\S]*?)<\/cim:SwitchActionKind.open>/g, obj, "open", base.to_string, sub, context);
            base.parse_element (/<cim:SwitchActionKind.close>([\s\S]*?)<\/cim:SwitchActionKind.close>/g, obj, "close", base.to_string, sub, context);
            base.parse_element (/<cim:SwitchActionKind.disableReclosing>([\s\S]*?)<\/cim:SwitchActionKind.disableReclosing>/g, obj, "disableReclosing", base.to_string, sub, context);
            base.parse_element (/<cim:SwitchActionKind.enableReclosing>([\s\S]*?)<\/cim:SwitchActionKind.enableReclosing>/g, obj, "enableReclosing", base.to_string, sub, context);
            bucket = context.parsed.SwitchActionKind;
            if (null == bucket)
                context.parsed.SwitchActionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SwitchActionKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SwitchActionKind", "open", base.from_string, fields);
            base.export_element (obj, "SwitchActionKind", "close", base.from_string, fields);
            base.export_element (obj, "SwitchActionKind", "disableReclosing", base.from_string, fields);
            base.export_element (obj, "SwitchActionKind", "enableReclosing", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Action on cut as a switching step.
         *
         */
        function parse_CutAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "CutAction";
            base.parse_element (/<cim:CutAction.kind>([\s\S]*?)<\/cim:CutAction.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_attribute (/<cim:CutAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
            base.parse_attribute (/<cim:CutAction.Cut\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Cut", sub, context);
            bucket = context.parsed.CutAction;
            if (null == bucket)
                context.parsed.CutAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CutAction (obj, exporters, full)
        {
            var fields = exporters["SwitchingStep"](obj, exporters, false);

            base.export_element (obj, "CutAction", "kind", base.from_string, fields);
            base.export_attribute (obj, "CutAction", "SwitchingStepGroup", fields);
            base.export_attribute (obj, "CutAction", "Cut", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Action on switch as a switching step.
         *
         */
        function parse_SwitchAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "SwitchAction";
            base.parse_element (/<cim:SwitchAction.kind>([\s\S]*?)<\/cim:SwitchAction.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_attribute (/<cim:SwitchAction.PlannedOutage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutage", sub, context);
            base.parse_attribute (/<cim:SwitchAction.OperatedSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperatedSwitch", sub, context);
            base.parse_attribute (/<cim:SwitchAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
            bucket = context.parsed.SwitchAction;
            if (null == bucket)
                context.parsed.SwitchAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SwitchAction (obj, exporters, full)
        {
            var fields = exporters["SwitchingStep"](obj, exporters, false);

            base.export_element (obj, "SwitchAction", "kind", base.from_string, fields);
            base.export_attribute (obj, "SwitchAction", "PlannedOutage", fields);
            base.export_attribute (obj, "SwitchAction", "OperatedSwitch", fields);
            base.export_attribute (obj, "SwitchAction", "SwitchingStepGroup", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A sequence of grouped or atomic steps intended to:
         * - de-energise equipment or part of the network for safe work, and/or
         *
         * - bring back in service previously de-energised equipment or part of the network.
         *
         */
        function parse_SwitchingPlan (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStepGroup (context, sub);
            obj.cls = "SwitchingPlan";
            base.parse_element (/<cim:SwitchingPlan.rank>([\s\S]*?)<\/cim:SwitchingPlan.rank>/g, obj, "rank", base.to_string, sub, context);
            base.parse_element (/<cim:SwitchingPlan.purpose>([\s\S]*?)<\/cim:SwitchingPlan.purpose>/g, obj, "purpose", base.to_string, sub, context);
            base.parse_attribute (/<cim:SwitchingPlan.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
            bucket = context.parsed.SwitchingPlan;
            if (null == bucket)
                context.parsed.SwitchingPlan = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SwitchingPlan (obj, exporters, full)
        {
            var fields = exporters["SwitchingStepGroup"](obj, exporters, false);

            base.export_element (obj, "SwitchingPlan", "rank", base.from_string, fields);
            base.export_element (obj, "SwitchingPlan", "purpose", base.from_string, fields);
            base.export_attribute (obj, "SwitchingPlan", "Outage", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Action on jumper as a switching step.
         *
         */
        function parse_JumperAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "JumperAction";
            base.parse_element (/<cim:JumperAction.kind>([\s\S]*?)<\/cim:JumperAction.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_attribute (/<cim:JumperAction.Jumper\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Jumper", sub, context);
            base.parse_attribute (/<cim:JumperAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
            bucket = context.parsed.JumperAction;
            if (null == bucket)
                context.parsed.JumperAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_JumperAction (obj, exporters, full)
        {
            var fields = exporters["SwitchingStep"](obj, exporters, false);

            base.export_element (obj, "JumperAction", "kind", base.from_string, fields);
            base.export_attribute (obj, "JumperAction", "Jumper", fields);
            base.export_attribute (obj, "JumperAction", "SwitchingStepGroup", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Description of a problem in the field that may be reported in a trouble ticket or come from another source.
         *
         * It may have to do with an outage.
         *
         */
        function parse_Incident (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "Incident";
            base.parse_element (/<cim:Incident.cause>([\s\S]*?)<\/cim:Incident.cause>/g, obj, "cause", base.to_string, sub, context);
            base.parse_attribute (/<cim:Incident.Owner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Owner", sub, context);
            base.parse_attribute (/<cim:Incident.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
            bucket = context.parsed.Incident;
            if (null == bucket)
                context.parsed.Incident = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Incident (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "Incident", "cause", base.from_string, fields);
            base.export_attribute (obj, "Incident", "Owner", fields);
            base.export_attribute (obj, "Incident", "Outage", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Action on operation tag as a switching step.
         *
         */
        function parse_TagAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "TagAction";
            base.parse_element (/<cim:TagAction.kind>([\s\S]*?)<\/cim:TagAction.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_attribute (/<cim:TagAction.OperationTag\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationTag", sub, context);
            base.parse_attribute (/<cim:TagAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
            bucket = context.parsed.TagAction;
            if (null == bucket)
                context.parsed.TagAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TagAction (obj, exporters, full)
        {
            var fields = exporters["SwitchingStep"](obj, exporters, false);

            base.export_element (obj, "TagAction", "kind", base.from_string, fields);
            base.export_attribute (obj, "TagAction", "OperationTag", fields);
            base.export_attribute (obj, "TagAction", "SwitchingStepGroup", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of action on temporary equipment (such as cut, jumper, ground, energy source).
         *
         */
        function parse_TempEquipActionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TempEquipActionKind";
            base.parse_element (/<cim:TempEquipActionKind.place>([\s\S]*?)<\/cim:TempEquipActionKind.place>/g, obj, "place", base.to_string, sub, context);
            base.parse_element (/<cim:TempEquipActionKind.remove>([\s\S]*?)<\/cim:TempEquipActionKind.remove>/g, obj, "remove", base.to_string, sub, context);
            bucket = context.parsed.TempEquipActionKind;
            if (null == bucket)
                context.parsed.TempEquipActionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TempEquipActionKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TempEquipActionKind", "place", base.from_string, fields);
            base.export_element (obj, "TempEquipActionKind", "remove", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A document that can be associated with equipment to describe any sort of restrictions compared with the original manufacturer's specification or with the usual operational practice e.g. temporary maximum loadings, maximum switching current, do not operate if bus couplers are open, etc.
         *
         * In the UK, for example, if a breaker or switch ever mal-operates, this is reported centrally and utilities use their asset systems to identify all the installed devices of the same manufacturer's type. They then apply operational restrictions in the operational systems to warn operators of potential problems. After appropriate inspection and maintenance, the operational restrictions may be removed.
         *
         */
        function parse_OperationalRestriction (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "OperationalRestriction";
            base.parse_element (/<cim:OperationalRestriction.activePeriod>([\s\S]*?)<\/cim:OperationalRestriction.activePeriod>/g, obj, "activePeriod", base.to_string, sub, context);
            base.parse_element (/<cim:OperationalRestriction.restrictedValue>([\s\S]*?)<\/cim:OperationalRestriction.restrictedValue>/g, obj, "restrictedValue", base.to_string, sub, context);
            base.parse_attribute (/<cim:OperationalRestriction.ProductAssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductAssetModel", sub, context);
            bucket = context.parsed.OperationalRestriction;
            if (null == bucket)
                context.parsed.OperationalRestriction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OperationalRestriction (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "OperationalRestriction", "activePeriod", base.from_string, fields);
            base.export_element (obj, "OperationalRestriction", "restrictedValue", base.from_string, fields);
            base.export_attribute (obj, "OperationalRestriction", "ProductAssetModel", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Type of clearance action.
         *
         */
        function parse_ClearanceActionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ClearanceActionKind";
            base.parse_element (/<cim:ClearanceActionKind.issue>([\s\S]*?)<\/cim:ClearanceActionKind.issue>/g, obj, "issue", base.to_string, sub, context);
            base.parse_element (/<cim:ClearanceActionKind.update>([\s\S]*?)<\/cim:ClearanceActionKind.update>/g, obj, "update", base.to_string, sub, context);
            base.parse_element (/<cim:ClearanceActionKind.release>([\s\S]*?)<\/cim:ClearanceActionKind.release>/g, obj, "release", base.to_string, sub, context);
            bucket = context.parsed.ClearanceActionKind;
            if (null == bucket)
                context.parsed.ClearanceActionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ClearanceActionKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ClearanceActionKind", "issue", base.from_string, fields);
            base.export_element (obj, "ClearanceActionKind", "update", base.from_string, fields);
            base.export_element (obj, "ClearanceActionKind", "release", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Document restricting or authorising works on electrical equipment (for example a permit to work, sanction for test, limitation of access, or certificate of isolation), defined based upon organisational practices.
         *
         */
        function parse_SafetyDocument (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "SafetyDocument";
            base.parse_attribute (/<cim:SafetyDocument.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
            bucket = context.parsed.SafetyDocument;
            if (null == bucket)
                context.parsed.SafetyDocument = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SafetyDocument (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_attribute (obj, "SafetyDocument", "SwitchingPlan", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Safety document used to authorise work on conducting equipment in the field.
         *
         * Tagged equipment is not allowed to be operated.
         *
         */
        function parse_ClearanceDocument (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SafetyDocument (context, sub);
            obj.cls = "ClearanceDocument";
            base.parse_element (/<cim:ClearanceDocument.mustBeDeenergised>([\s\S]*?)<\/cim:ClearanceDocument.mustBeDeenergised>/g, obj, "mustBeDeenergised", base.to_boolean, sub, context);
            base.parse_element (/<cim:ClearanceDocument.mustBeGrounded>([\s\S]*?)<\/cim:ClearanceDocument.mustBeGrounded>/g, obj, "mustBeGrounded", base.to_boolean, sub, context);
            base.parse_attribute (/<cim:ClearanceDocument.ClearanceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ClearanceAction", sub, context);
            bucket = context.parsed.ClearanceDocument;
            if (null == bucket)
                context.parsed.ClearanceDocument = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ClearanceDocument (obj, exporters, full)
        {
            var fields = exporters["SafetyDocument"](obj, exporters, false);

            base.export_element (obj, "ClearanceDocument", "mustBeDeenergised", base.from_boolean, fields);
            base.export_element (obj, "ClearanceDocument", "mustBeGrounded", base.from_boolean, fields);
            base.export_attribute (obj, "ClearanceDocument", "ClearanceAction", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Summary counts of service points affected by an outage.
         *
         * These counts are sometimes referred to as total and critical customer count.
         *
         */
        function parse_ServicePointOutageSummary (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ServicePointOutageSummary";
            base.parse_element (/<cim:ServicePointOutageSummary.criticalCount>([\s\S]*?)<\/cim:ServicePointOutageSummary.criticalCount>/g, obj, "criticalCount", base.to_string, sub, context);
            base.parse_element (/<cim:ServicePointOutageSummary.totalCount>([\s\S]*?)<\/cim:ServicePointOutageSummary.totalCount>/g, obj, "totalCount", base.to_string, sub, context);
            bucket = context.parsed.ServicePointOutageSummary;
            if (null == bucket)
                context.parsed.ServicePointOutageSummary = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ServicePointOutageSummary (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ServicePointOutageSummary", "criticalCount", base.from_string, fields);
            base.export_element (obj, "ServicePointOutageSummary", "totalCount", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Lowered capability because of deterioration or inadequacy (sometimes referred to as derating or partial outage) or other kind of operational rating change.
         *
         */
        function parse_OperationalUpdatedRating (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OperationalRestriction (context, sub);
            obj.cls = "OperationalUpdatedRating";
            base.parse_element (/<cim:OperationalUpdatedRating.changeType>([\s\S]*?)<\/cim:OperationalUpdatedRating.changeType>/g, obj, "changeType", base.to_string, sub, context);
            base.parse_attribute (/<cim:OperationalUpdatedRating.PlannedOutage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutage", sub, context);
            bucket = context.parsed.OperationalUpdatedRating;
            if (null == bucket)
                context.parsed.OperationalUpdatedRating = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OperationalUpdatedRating (obj, exporters, full)
        {
            var fields = exporters["OperationalRestriction"](obj, exporters, false);

            base.export_element (obj, "OperationalUpdatedRating", "changeType", base.from_string, fields);
            base.export_attribute (obj, "OperationalUpdatedRating", "PlannedOutage", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of power system resource event.
         *
         */
        function parse_PSREventKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PSREventKind";
            base.parse_element (/<cim:PSREventKind.inService>([\s\S]*?)<\/cim:PSREventKind.inService>/g, obj, "inService", base.to_string, sub, context);
            base.parse_element (/<cim:PSREventKind.outOfService>([\s\S]*?)<\/cim:PSREventKind.outOfService>/g, obj, "outOfService", base.to_string, sub, context);
            base.parse_element (/<cim:PSREventKind.pendingAdd>([\s\S]*?)<\/cim:PSREventKind.pendingAdd>/g, obj, "pendingAdd", base.to_string, sub, context);
            base.parse_element (/<cim:PSREventKind.pendingRemove>([\s\S]*?)<\/cim:PSREventKind.pendingRemove>/g, obj, "pendingRemove", base.to_string, sub, context);
            base.parse_element (/<cim:PSREventKind.pendingReplace>([\s\S]*?)<\/cim:PSREventKind.pendingReplace>/g, obj, "pendingReplace", base.to_string, sub, context);
            base.parse_element (/<cim:PSREventKind.other>([\s\S]*?)<\/cim:PSREventKind.other>/g, obj, "other", base.to_string, sub, context);
            base.parse_element (/<cim:PSREventKind.unknown>([\s\S]*?)<\/cim:PSREventKind.unknown>/g, obj, "unknown", base.to_string, sub, context);
            bucket = context.parsed.PSREventKind;
            if (null == bucket)
                context.parsed.PSREventKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PSREventKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PSREventKind", "inService", base.from_string, fields);
            base.export_element (obj, "PSREventKind", "outOfService", base.from_string, fields);
            base.export_element (obj, "PSREventKind", "pendingAdd", base.from_string, fields);
            base.export_element (obj, "PSREventKind", "pendingRemove", base.from_string, fields);
            base.export_element (obj, "PSREventKind", "pendingReplace", base.from_string, fields);
            base.export_element (obj, "PSREventKind", "other", base.from_string, fields);
            base.export_element (obj, "PSREventKind", "unknown", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Action on energy source as a switching step.
         *
         */
        function parse_EnergySourceAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "EnergySourceAction";
            base.parse_element (/<cim:EnergySourceAction.kind>([\s\S]*?)<\/cim:EnergySourceAction.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_attribute (/<cim:EnergySourceAction.EnergySource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySource", sub, context);
            base.parse_attribute (/<cim:EnergySourceAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
            bucket = context.parsed.EnergySourceAction;
            if (null == bucket)
                context.parsed.EnergySourceAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnergySourceAction (obj, exporters, full)
        {
            var fields = exporters["SwitchingStep"](obj, exporters, false);

            base.export_element (obj, "EnergySourceAction", "kind", base.from_string, fields);
            base.export_attribute (obj, "EnergySourceAction", "EnergySource", fields);
            base.export_attribute (obj, "EnergySourceAction", "SwitchingStepGroup", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Document containing the definition of planned outages of equipment and/or service (delivery) points (sometimes referred to as customers).
         *
         * It is used as specification for producing switching plans.
         *
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

        function export_OutageSchedule (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of action on tag.
         *
         */
        function parse_TagActionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TagActionKind";
            base.parse_element (/<cim:TagActionKind.place>([\s\S]*?)<\/cim:TagActionKind.place>/g, obj, "place", base.to_string, sub, context);
            base.parse_element (/<cim:TagActionKind.remove>([\s\S]*?)<\/cim:TagActionKind.remove>/g, obj, "remove", base.to_string, sub, context);
            base.parse_element (/<cim:TagActionKind.verify>([\s\S]*?)<\/cim:TagActionKind.verify>/g, obj, "verify", base.to_string, sub, context);
            bucket = context.parsed.TagActionKind;
            if (null == bucket)
                context.parsed.TagActionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TagActionKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TagActionKind", "place", base.from_string, fields);
            base.export_element (obj, "TagActionKind", "remove", base.from_string, fields);
            base.export_element (obj, "TagActionKind", "verify", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Atomic switching step; can be part of a switching step group, or of the switching plan.
         *
         */
        function parse_SwitchingStep (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SwitchingStep";
            base.parse_element (/<cim:SwitchingStep.executedDateTime>([\s\S]*?)<\/cim:SwitchingStep.executedDateTime>/g, obj, "executedDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:SwitchingStep.plannedDateTime>([\s\S]*?)<\/cim:SwitchingStep.plannedDateTime>/g, obj, "plannedDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:SwitchingStep.description>([\s\S]*?)<\/cim:SwitchingStep.description>/g, obj, "description", base.to_string, sub, context);
            base.parse_element (/<cim:SwitchingStep.isFreeSequence>([\s\S]*?)<\/cim:SwitchingStep.isFreeSequence>/g, obj, "isFreeSequence", base.to_boolean, sub, context);
            base.parse_element (/<cim:SwitchingStep.sequenceNumber>([\s\S]*?)<\/cim:SwitchingStep.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
            base.parse_attribute (/<cim:SwitchingStep.CrewMember\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CrewMember", sub, context);
            base.parse_attribute (/<cim:SwitchingStep.Operator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Operator", sub, context);
            bucket = context.parsed.SwitchingStep;
            if (null == bucket)
                context.parsed.SwitchingStep = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SwitchingStep (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SwitchingStep", "executedDateTime", base.from_datetime, fields);
            base.export_element (obj, "SwitchingStep", "plannedDateTime", base.from_datetime, fields);
            base.export_element (obj, "SwitchingStep", "description", base.from_string, fields);
            base.export_element (obj, "SwitchingStep", "isFreeSequence", base.from_boolean, fields);
            base.export_element (obj, "SwitchingStep", "sequenceNumber", base.from_string, fields);
            base.export_attribute (obj, "SwitchingStep", "CrewMember", fields);
            base.export_attribute (obj, "SwitchingStep", "Operator", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An arbitrary switching step.
         *
         */
        function parse_GenericAction (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_SwitchingStep (context, sub);
            obj.cls = "GenericAction";
            base.parse_attribute (/<cim:GenericAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
            bucket = context.parsed.GenericAction;
            if (null == bucket)
                context.parsed.GenericAction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_GenericAction (obj, exporters, full)
        {
            var fields = exporters["SwitchingStep"](obj, exporters, false);

            base.export_attribute (obj, "GenericAction", "SwitchingStepGroup", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_OperationTag: parse_OperationTag,
                parse_Outage: parse_Outage,
                parse_ClearanceDocument: parse_ClearanceDocument,
                export_SwitchingStepGroup: export_SwitchingStepGroup,
                export_SwitchingStep: export_SwitchingStep,
                parse_ClearanceActionKind: parse_ClearanceActionKind,
                parse_TempEquipActionKind: parse_TempEquipActionKind,
                export_OperationTag: export_OperationTag,
                export_EnergySourceAction: export_EnergySourceAction,
                export_ClearanceDocument: export_ClearanceDocument,
                export_SwitchingPlan: export_SwitchingPlan,
                parse_TagActionKind: parse_TagActionKind,
                export_GenericAction: export_GenericAction,
                parse_GroundAction: parse_GroundAction,
                export_ClearanceActionKind: export_ClearanceActionKind,
                parse_CutAction: parse_CutAction,
                parse_SwitchingStep: parse_SwitchingStep,
                parse_SwitchingPlan: parse_SwitchingPlan,
                export_OperationalRestriction: export_OperationalRestriction,
                export_TagActionKind: export_TagActionKind,
                export_PSREvent: export_PSREvent,
                parse_JumperAction: parse_JumperAction,
                export_PSREventKind: export_PSREventKind,
                export_ServicePointOutageSummary: export_ServicePointOutageSummary,
                parse_TagAction: parse_TagAction,
                export_JumperAction: export_JumperAction,
                parse_OperationalRestriction: parse_OperationalRestriction,
                parse_PSREvent: parse_PSREvent,
                export_SwitchAction: export_SwitchAction,
                parse_SwitchActionKind: parse_SwitchActionKind,
                parse_ServicePointOutageSummary: parse_ServicePointOutageSummary,
                export_SafetyDocument: export_SafetyDocument,
                export_TagAction: export_TagAction,
                export_OperationalUpdatedRating: export_OperationalUpdatedRating,
                export_GroundAction: export_GroundAction,
                export_Outage: export_Outage,
                parse_SafetyDocument: parse_SafetyDocument,
                parse_OutageSchedule: parse_OutageSchedule,
                parse_ClearanceAction: parse_ClearanceAction,
                parse_OperationalUpdatedRating: parse_OperationalUpdatedRating,
                export_TempEquipActionKind: export_TempEquipActionKind,
                parse_GenericAction: parse_GenericAction,
                parse_PSREventKind: parse_PSREventKind,
                export_CutAction: export_CutAction,
                parse_Incident: parse_Incident,
                export_SwitchActionKind: export_SwitchActionKind,
                export_Incident: export_Incident,
                parse_SwitchAction: parse_SwitchAction,
                export_OutageSchedule: export_OutageSchedule,
                export_ClearanceAction: export_ClearanceAction,
                parse_SwitchingStepGroup: parse_SwitchingStepGroup,
                parse_EnergySourceAction: parse_EnergySourceAction
            }
        );
    }
);