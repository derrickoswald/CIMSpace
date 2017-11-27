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
         * A logical step, grouping atomic switching steps that are important to distinguish when they may change topology (e.g. placing a jumper between two cuts).
         *
         */
        class SwitchingStepGroup extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SwitchingStepGroup;
                if (null == bucket)
                   cim_data.SwitchingStepGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SwitchingStepGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingStepGroup";
                base.parse_element (/<cim:SwitchingStepGroup.isFreeSequence>([\s\S]*?)<\/cim:SwitchingStepGroup.isFreeSequence>/g, obj, "isFreeSequence", base.to_boolean, sub, context);
                base.parse_element (/<cim:SwitchingStepGroup.sequenceNumber>([\s\S]*?)<\/cim:SwitchingStepGroup.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:SwitchingStepGroup.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);

                var bucket = context.parsed.SwitchingStepGroup;
                if (null == bucket)
                   context.parsed.SwitchingStepGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_element (obj, "SwitchingStepGroup", "isFreeSequence", base.from_boolean, fields);
                base.export_element (obj, "SwitchingStepGroup", "sequenceNumber", base.from_string, fields);
                base.export_attribute (obj, "SwitchingStepGroup", "SwitchingPlan", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class OperationTag extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperationTag;
                if (null == bucket)
                   cim_data.OperationTag = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperationTag[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OperationTag";
                base.parse_attribute (/<cim:OperationTag.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                base.parse_attribute (/<cim:OperationTag.TagAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TagAction", sub, context);
                base.parse_attribute (/<cim:OperationTag.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);

                var bucket = context.parsed.OperationTag;
                if (null == bucket)
                   context.parsed.OperationTag = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_attribute (obj, "OperationTag", "Asset", fields);
                base.export_attribute (obj, "OperationTag", "TagAction", fields);
                base.export_attribute (obj, "OperationTag", "PowerSystemResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Event recording the change in operational status of a power system resource; may be for an event that has already occurred or for a planned activity.
         *
         */
        class PSREvent extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PSREvent;
                if (null == bucket)
                   cim_data.PSREvent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PSREvent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "PSREvent";
                base.parse_element (/<cim:PSREvent.kind>([\s\S]*?)<\/cim:PSREvent.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_attribute (/<cim:PSREvent.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);

                var bucket = context.parsed.PSREvent;
                if (null == bucket)
                   context.parsed.PSREvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ActivityRecord"](obj, exporters, false);

                base.export_element (obj, "PSREvent", "kind", base.from_string, fields);
                base.export_attribute (obj, "PSREvent", "PowerSystemResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Document describing details of an active or planned outage in a part of the electrical network.
         *
         * A non-planned outage may be created upon:
         *
         */
        class Outage extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Outage;
                if (null == bucket)
                   cim_data.Outage = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Outage[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Outage";
                base.parse_element (/<cim:Outage.cause>([\s\S]*?)<\/cim:Outage.cause>/g, obj, "cause", base.to_string, sub, context);
                base.parse_element (/<cim:Outage.estimatedPeriod>([\s\S]*?)<\/cim:Outage.estimatedPeriod>/g, obj, "estimatedPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:Outage.isPlanned>([\s\S]*?)<\/cim:Outage.isPlanned>/g, obj, "isPlanned", base.to_boolean, sub, context);
                base.parse_element (/<cim:Outage.actualPeriod>([\s\S]*?)<\/cim:Outage.actualPeriod>/g, obj, "actualPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:Outage.summary>([\s\S]*?)<\/cim:Outage.summary>/g, obj, "summary", base.to_string, sub, context);
                base.parse_element (/<cim:Outage.cancelledDateTime>([\s\S]*?)<\/cim:Outage.cancelledDateTime>/g, obj, "cancelledDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Outage.OutageSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OutageSchedule", sub, context);
                base.parse_attribute (/<cim:Outage.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);

                var bucket = context.parsed.Outage;
                if (null == bucket)
                   context.parsed.Outage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Kind of action on switch.
         *
         */
        class SwitchActionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SwitchActionKind;
                if (null == bucket)
                   cim_data.SwitchActionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SwitchActionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchActionKind";
                base.parse_element (/<cim:SwitchActionKind.open>([\s\S]*?)<\/cim:SwitchActionKind.open>/g, obj, "open", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchActionKind.close>([\s\S]*?)<\/cim:SwitchActionKind.close>/g, obj, "close", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchActionKind.disableReclosing>([\s\S]*?)<\/cim:SwitchActionKind.disableReclosing>/g, obj, "disableReclosing", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchActionKind.enableReclosing>([\s\S]*?)<\/cim:SwitchActionKind.enableReclosing>/g, obj, "enableReclosing", base.to_string, sub, context);

                var bucket = context.parsed.SwitchActionKind;
                if (null == bucket)
                   context.parsed.SwitchActionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "SwitchActionKind", "open", base.from_string, fields);
                base.export_element (obj, "SwitchActionKind", "close", base.from_string, fields);
                base.export_element (obj, "SwitchActionKind", "disableReclosing", base.from_string, fields);
                base.export_element (obj, "SwitchActionKind", "enableReclosing", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Description of a problem in the field that may be reported in a trouble ticket or come from another source.
         *
         * It may have to do with an outage.
         *
         */
        class Incident extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Incident;
                if (null == bucket)
                   cim_data.Incident = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Incident[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Incident";
                base.parse_element (/<cim:Incident.cause>([\s\S]*?)<\/cim:Incident.cause>/g, obj, "cause", base.to_string, sub, context);
                base.parse_attribute (/<cim:Incident.Owner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Owner", sub, context);
                base.parse_attribute (/<cim:Incident.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);

                var bucket = context.parsed.Incident;
                if (null == bucket)
                   context.parsed.Incident = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_element (obj, "Incident", "cause", base.from_string, fields);
                base.export_attribute (obj, "Incident", "Owner", fields);
                base.export_attribute (obj, "Incident", "Outage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Kind of action on temporary equipment (such as cut, jumper, ground, energy source).
         *
         */
        class TempEquipActionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TempEquipActionKind;
                if (null == bucket)
                   cim_data.TempEquipActionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TempEquipActionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TempEquipActionKind";
                base.parse_element (/<cim:TempEquipActionKind.place>([\s\S]*?)<\/cim:TempEquipActionKind.place>/g, obj, "place", base.to_string, sub, context);
                base.parse_element (/<cim:TempEquipActionKind.remove>([\s\S]*?)<\/cim:TempEquipActionKind.remove>/g, obj, "remove", base.to_string, sub, context);

                var bucket = context.parsed.TempEquipActionKind;
                if (null == bucket)
                   context.parsed.TempEquipActionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "TempEquipActionKind", "place", base.from_string, fields);
                base.export_element (obj, "TempEquipActionKind", "remove", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A document that can be associated with equipment to describe any sort of restrictions compared with the original manufacturer's specification or with the usual operational practice e.g. temporary maximum loadings, maximum switching current, do not operate if bus couplers are open, etc.
         *
         * In the UK, for example, if a breaker or switch ever mal-operates, this is reported centrally and utilities use their asset systems to identify all the installed devices of the same manufacturer's type. They then apply operational restrictions in the operational systems to warn operators of potential problems. After appropriate inspection and maintenance, the operational restrictions may be removed.
         *
         */
        class OperationalRestriction extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperationalRestriction;
                if (null == bucket)
                   cim_data.OperationalRestriction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperationalRestriction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalRestriction";
                base.parse_element (/<cim:OperationalRestriction.activePeriod>([\s\S]*?)<\/cim:OperationalRestriction.activePeriod>/g, obj, "activePeriod", base.to_string, sub, context);
                base.parse_element (/<cim:OperationalRestriction.restrictedValue>([\s\S]*?)<\/cim:OperationalRestriction.restrictedValue>/g, obj, "restrictedValue", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperationalRestriction.ProductAssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductAssetModel", sub, context);

                var bucket = context.parsed.OperationalRestriction;
                if (null == bucket)
                   context.parsed.OperationalRestriction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_element (obj, "OperationalRestriction", "activePeriod", base.from_string, fields);
                base.export_element (obj, "OperationalRestriction", "restrictedValue", base.from_string, fields);
                base.export_attribute (obj, "OperationalRestriction", "ProductAssetModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Type of clearance action.
         *
         */
        class ClearanceActionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ClearanceActionKind;
                if (null == bucket)
                   cim_data.ClearanceActionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ClearanceActionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ClearanceActionKind";
                base.parse_element (/<cim:ClearanceActionKind.issue>([\s\S]*?)<\/cim:ClearanceActionKind.issue>/g, obj, "issue", base.to_string, sub, context);
                base.parse_element (/<cim:ClearanceActionKind.update>([\s\S]*?)<\/cim:ClearanceActionKind.update>/g, obj, "update", base.to_string, sub, context);
                base.parse_element (/<cim:ClearanceActionKind.release>([\s\S]*?)<\/cim:ClearanceActionKind.release>/g, obj, "release", base.to_string, sub, context);

                var bucket = context.parsed.ClearanceActionKind;
                if (null == bucket)
                   context.parsed.ClearanceActionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ClearanceActionKind", "issue", base.from_string, fields);
                base.export_element (obj, "ClearanceActionKind", "update", base.from_string, fields);
                base.export_element (obj, "ClearanceActionKind", "release", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Document restricting or authorising works on electrical equipment (for example a permit to work, sanction for test, limitation of access, or certificate of isolation), defined based upon organisational practices.
         *
         */
        class SafetyDocument extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SafetyDocument;
                if (null == bucket)
                   cim_data.SafetyDocument = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SafetyDocument[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "SafetyDocument";
                base.parse_attribute (/<cim:SafetyDocument.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);

                var bucket = context.parsed.SafetyDocument;
                if (null == bucket)
                   context.parsed.SafetyDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_attribute (obj, "SafetyDocument", "SwitchingPlan", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Summary counts of service points affected by an outage.
         *
         * These counts are sometimes referred to as total and critical customer count.
         *
         */
        class ServicePointOutageSummary extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ServicePointOutageSummary;
                if (null == bucket)
                   cim_data.ServicePointOutageSummary = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ServicePointOutageSummary[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ServicePointOutageSummary";
                base.parse_element (/<cim:ServicePointOutageSummary.criticalCount>([\s\S]*?)<\/cim:ServicePointOutageSummary.criticalCount>/g, obj, "criticalCount", base.to_string, sub, context);
                base.parse_element (/<cim:ServicePointOutageSummary.totalCount>([\s\S]*?)<\/cim:ServicePointOutageSummary.totalCount>/g, obj, "totalCount", base.to_string, sub, context);

                var bucket = context.parsed.ServicePointOutageSummary;
                if (null == bucket)
                   context.parsed.ServicePointOutageSummary = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ServicePointOutageSummary", "criticalCount", base.from_string, fields);
                base.export_element (obj, "ServicePointOutageSummary", "totalCount", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Kind of power system resource event.
         *
         */
        class PSREventKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PSREventKind;
                if (null == bucket)
                   cim_data.PSREventKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PSREventKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PSREventKind";
                base.parse_element (/<cim:PSREventKind.inService>([\s\S]*?)<\/cim:PSREventKind.inService>/g, obj, "inService", base.to_string, sub, context);
                base.parse_element (/<cim:PSREventKind.outOfService>([\s\S]*?)<\/cim:PSREventKind.outOfService>/g, obj, "outOfService", base.to_string, sub, context);
                base.parse_element (/<cim:PSREventKind.pendingAdd>([\s\S]*?)<\/cim:PSREventKind.pendingAdd>/g, obj, "pendingAdd", base.to_string, sub, context);
                base.parse_element (/<cim:PSREventKind.pendingRemove>([\s\S]*?)<\/cim:PSREventKind.pendingRemove>/g, obj, "pendingRemove", base.to_string, sub, context);
                base.parse_element (/<cim:PSREventKind.pendingReplace>([\s\S]*?)<\/cim:PSREventKind.pendingReplace>/g, obj, "pendingReplace", base.to_string, sub, context);
                base.parse_element (/<cim:PSREventKind.other>([\s\S]*?)<\/cim:PSREventKind.other>/g, obj, "other", base.to_string, sub, context);
                base.parse_element (/<cim:PSREventKind.unknown>([\s\S]*?)<\/cim:PSREventKind.unknown>/g, obj, "unknown", base.to_string, sub, context);

                var bucket = context.parsed.PSREventKind;
                if (null == bucket)
                   context.parsed.PSREventKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Document containing the definition of planned outages of equipment and/or service (delivery) points (sometimes referred to as customers).
         *
         * It is used as specification for producing switching plans.
         *
         */
        class OutageSchedule extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OutageSchedule;
                if (null == bucket)
                   cim_data.OutageSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OutageSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OutageSchedule";

                var bucket = context.parsed.OutageSchedule;
                if (null == bucket)
                   context.parsed.OutageSchedule = bucket = {};
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
         * Kind of action on tag.
         *
         */
        class TagActionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TagActionKind;
                if (null == bucket)
                   cim_data.TagActionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TagActionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TagActionKind";
                base.parse_element (/<cim:TagActionKind.place>([\s\S]*?)<\/cim:TagActionKind.place>/g, obj, "place", base.to_string, sub, context);
                base.parse_element (/<cim:TagActionKind.remove>([\s\S]*?)<\/cim:TagActionKind.remove>/g, obj, "remove", base.to_string, sub, context);
                base.parse_element (/<cim:TagActionKind.verify>([\s\S]*?)<\/cim:TagActionKind.verify>/g, obj, "verify", base.to_string, sub, context);

                var bucket = context.parsed.TagActionKind;
                if (null == bucket)
                   context.parsed.TagActionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "TagActionKind", "place", base.from_string, fields);
                base.export_element (obj, "TagActionKind", "remove", base.from_string, fields);
                base.export_element (obj, "TagActionKind", "verify", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Atomic switching step; can be part of a switching step group, or of the switching plan.
         *
         */
        class SwitchingStep extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SwitchingStep;
                if (null == bucket)
                   cim_data.SwitchingStep = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SwitchingStep[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingStep";
                base.parse_element (/<cim:SwitchingStep.executedDateTime>([\s\S]*?)<\/cim:SwitchingStep.executedDateTime>/g, obj, "executedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:SwitchingStep.plannedDateTime>([\s\S]*?)<\/cim:SwitchingStep.plannedDateTime>/g, obj, "plannedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:SwitchingStep.description>([\s\S]*?)<\/cim:SwitchingStep.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingStep.isFreeSequence>([\s\S]*?)<\/cim:SwitchingStep.isFreeSequence>/g, obj, "isFreeSequence", base.to_boolean, sub, context);
                base.parse_element (/<cim:SwitchingStep.sequenceNumber>([\s\S]*?)<\/cim:SwitchingStep.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:SwitchingStep.CrewMember\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CrewMember", sub, context);
                base.parse_attribute (/<cim:SwitchingStep.Operator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Operator", sub, context);

                var bucket = context.parsed.SwitchingStep;
                if (null == bucket)
                   context.parsed.SwitchingStep = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A sequence of grouped or atomic steps intended to:
         * - de-energise equipment or part of the network for safe work, and/or
         *
         * - bring back in service previously de-energised equipment or part of the network.
         *
         */
        class SwitchingPlan extends SwitchingStepGroup
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SwitchingPlan;
                if (null == bucket)
                   cim_data.SwitchingPlan = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SwitchingPlan[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStepGroup.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingPlan";
                base.parse_element (/<cim:SwitchingPlan.rank>([\s\S]*?)<\/cim:SwitchingPlan.rank>/g, obj, "rank", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingPlan.purpose>([\s\S]*?)<\/cim:SwitchingPlan.purpose>/g, obj, "purpose", base.to_string, sub, context);
                base.parse_attribute (/<cim:SwitchingPlan.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);

                var bucket = context.parsed.SwitchingPlan;
                if (null == bucket)
                   context.parsed.SwitchingPlan = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["SwitchingStepGroup"](obj, exporters, false);

                base.export_element (obj, "SwitchingPlan", "rank", base.from_string, fields);
                base.export_element (obj, "SwitchingPlan", "purpose", base.from_string, fields);
                base.export_attribute (obj, "SwitchingPlan", "Outage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Lowered capability because of deterioration or inadequacy (sometimes referred to as derating or partial outage) or other kind of operational rating change.
         *
         */
        class OperationalUpdatedRating extends OperationalRestriction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperationalUpdatedRating;
                if (null == bucket)
                   cim_data.OperationalUpdatedRating = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperationalUpdatedRating[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationalRestriction.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalUpdatedRating";
                base.parse_element (/<cim:OperationalUpdatedRating.changeType>([\s\S]*?)<\/cim:OperationalUpdatedRating.changeType>/g, obj, "changeType", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperationalUpdatedRating.PlannedOutage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutage", sub, context);

                var bucket = context.parsed.OperationalUpdatedRating;
                if (null == bucket)
                   context.parsed.OperationalUpdatedRating = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["OperationalRestriction"](obj, exporters, false);

                base.export_element (obj, "OperationalUpdatedRating", "changeType", base.from_string, fields);
                base.export_attribute (obj, "OperationalUpdatedRating", "PlannedOutage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Safety document used to authorise work on conducting equipment in the field.
         *
         * Tagged equipment is not allowed to be operated.
         *
         */
        class ClearanceDocument extends SafetyDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ClearanceDocument;
                if (null == bucket)
                   cim_data.ClearanceDocument = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ClearanceDocument[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SafetyDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ClearanceDocument";
                base.parse_element (/<cim:ClearanceDocument.mustBeDeenergised>([\s\S]*?)<\/cim:ClearanceDocument.mustBeDeenergised>/g, obj, "mustBeDeenergised", base.to_boolean, sub, context);
                base.parse_element (/<cim:ClearanceDocument.mustBeGrounded>([\s\S]*?)<\/cim:ClearanceDocument.mustBeGrounded>/g, obj, "mustBeGrounded", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ClearanceDocument.ClearanceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ClearanceAction", sub, context);

                var bucket = context.parsed.ClearanceDocument;
                if (null == bucket)
                   context.parsed.ClearanceDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["SafetyDocument"](obj, exporters, false);

                base.export_element (obj, "ClearanceDocument", "mustBeDeenergised", base.from_boolean, fields);
                base.export_element (obj, "ClearanceDocument", "mustBeGrounded", base.from_boolean, fields);
                base.export_attribute (obj, "ClearanceDocument", "ClearanceAction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An arbitrary switching step.
         *
         */
        class GenericAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GenericAction;
                if (null == bucket)
                   cim_data.GenericAction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GenericAction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "GenericAction";
                base.parse_attribute (/<cim:GenericAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);

                var bucket = context.parsed.GenericAction;
                if (null == bucket)
                   context.parsed.GenericAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["SwitchingStep"](obj, exporters, false);

                base.export_attribute (obj, "GenericAction", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Action on clearance document as a switching step.
         *
         */
        class ClearanceAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ClearanceAction;
                if (null == bucket)
                   cim_data.ClearanceAction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ClearanceAction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "ClearanceAction";
                base.parse_element (/<cim:ClearanceAction.kind>([\s\S]*?)<\/cim:ClearanceAction.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_attribute (/<cim:ClearanceAction.Clearance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Clearance", sub, context);
                base.parse_attribute (/<cim:ClearanceAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);

                var bucket = context.parsed.ClearanceAction;
                if (null == bucket)
                   context.parsed.ClearanceAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["SwitchingStep"](obj, exporters, false);

                base.export_element (obj, "ClearanceAction", "kind", base.from_string, fields);
                base.export_attribute (obj, "ClearanceAction", "Clearance", fields);
                base.export_attribute (obj, "ClearanceAction", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Action on ground as a switching step.
         *
         */
        class GroundAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GroundAction;
                if (null == bucket)
                   cim_data.GroundAction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GroundAction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "GroundAction";
                base.parse_element (/<cim:GroundAction.kind>([\s\S]*?)<\/cim:GroundAction.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_attribute (/<cim:GroundAction.Ground\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Ground", sub, context);
                base.parse_attribute (/<cim:GroundAction.AlongACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AlongACLineSegment", sub, context);
                base.parse_attribute (/<cim:GroundAction.GroundedEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GroundedEquipment", sub, context);
                base.parse_attribute (/<cim:GroundAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);

                var bucket = context.parsed.GroundAction;
                if (null == bucket)
                   context.parsed.GroundAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["SwitchingStep"](obj, exporters, false);

                base.export_element (obj, "GroundAction", "kind", base.from_string, fields);
                base.export_attribute (obj, "GroundAction", "Ground", fields);
                base.export_attribute (obj, "GroundAction", "AlongACLineSegment", fields);
                base.export_attribute (obj, "GroundAction", "GroundedEquipment", fields);
                base.export_attribute (obj, "GroundAction", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Action on cut as a switching step.
         *
         */
        class CutAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CutAction;
                if (null == bucket)
                   cim_data.CutAction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CutAction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "CutAction";
                base.parse_element (/<cim:CutAction.kind>([\s\S]*?)<\/cim:CutAction.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_attribute (/<cim:CutAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                base.parse_attribute (/<cim:CutAction.Cut\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Cut", sub, context);

                var bucket = context.parsed.CutAction;
                if (null == bucket)
                   context.parsed.CutAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["SwitchingStep"](obj, exporters, false);

                base.export_element (obj, "CutAction", "kind", base.from_string, fields);
                base.export_attribute (obj, "CutAction", "SwitchingStepGroup", fields);
                base.export_attribute (obj, "CutAction", "Cut", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Action on switch as a switching step.
         *
         */
        class SwitchAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SwitchAction;
                if (null == bucket)
                   cim_data.SwitchAction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SwitchAction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchAction";
                base.parse_element (/<cim:SwitchAction.kind>([\s\S]*?)<\/cim:SwitchAction.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_attribute (/<cim:SwitchAction.PlannedOutage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutage", sub, context);
                base.parse_attribute (/<cim:SwitchAction.OperatedSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperatedSwitch", sub, context);
                base.parse_attribute (/<cim:SwitchAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);

                var bucket = context.parsed.SwitchAction;
                if (null == bucket)
                   context.parsed.SwitchAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["SwitchingStep"](obj, exporters, false);

                base.export_element (obj, "SwitchAction", "kind", base.from_string, fields);
                base.export_attribute (obj, "SwitchAction", "PlannedOutage", fields);
                base.export_attribute (obj, "SwitchAction", "OperatedSwitch", fields);
                base.export_attribute (obj, "SwitchAction", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Action on jumper as a switching step.
         *
         */
        class JumperAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.JumperAction;
                if (null == bucket)
                   cim_data.JumperAction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.JumperAction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "JumperAction";
                base.parse_element (/<cim:JumperAction.kind>([\s\S]*?)<\/cim:JumperAction.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_attribute (/<cim:JumperAction.Jumper\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Jumper", sub, context);
                base.parse_attribute (/<cim:JumperAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);

                var bucket = context.parsed.JumperAction;
                if (null == bucket)
                   context.parsed.JumperAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["SwitchingStep"](obj, exporters, false);

                base.export_element (obj, "JumperAction", "kind", base.from_string, fields);
                base.export_attribute (obj, "JumperAction", "Jumper", fields);
                base.export_attribute (obj, "JumperAction", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Action on operation tag as a switching step.
         *
         */
        class TagAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TagAction;
                if (null == bucket)
                   cim_data.TagAction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TagAction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "TagAction";
                base.parse_element (/<cim:TagAction.kind>([\s\S]*?)<\/cim:TagAction.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_attribute (/<cim:TagAction.OperationTag\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationTag", sub, context);
                base.parse_attribute (/<cim:TagAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);

                var bucket = context.parsed.TagAction;
                if (null == bucket)
                   context.parsed.TagAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["SwitchingStep"](obj, exporters, false);

                base.export_element (obj, "TagAction", "kind", base.from_string, fields);
                base.export_attribute (obj, "TagAction", "OperationTag", fields);
                base.export_attribute (obj, "TagAction", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Action on energy source as a switching step.
         *
         */
        class EnergySourceAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergySourceAction;
                if (null == bucket)
                   cim_data.EnergySourceAction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergySourceAction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "EnergySourceAction";
                base.parse_element (/<cim:EnergySourceAction.kind>([\s\S]*?)<\/cim:EnergySourceAction.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_attribute (/<cim:EnergySourceAction.EnergySource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySource", sub, context);
                base.parse_attribute (/<cim:EnergySourceAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);

                var bucket = context.parsed.EnergySourceAction;
                if (null == bucket)
                   context.parsed.EnergySourceAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["SwitchingStep"](obj, exporters, false);

                base.export_element (obj, "EnergySourceAction", "kind", base.from_string, fields);
                base.export_attribute (obj, "EnergySourceAction", "EnergySource", fields);
                base.export_attribute (obj, "EnergySourceAction", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                ClearanceAction: ClearanceAction,
                Outage: Outage,
                PSREvent: PSREvent,
                SafetyDocument: SafetyDocument,
                SwitchingPlan: SwitchingPlan,
                JumperAction: JumperAction,
                ClearanceDocument: ClearanceDocument,
                SwitchingStepGroup: SwitchingStepGroup,
                TempEquipActionKind: TempEquipActionKind,
                SwitchActionKind: SwitchActionKind,
                OperationalUpdatedRating: OperationalUpdatedRating,
                CutAction: CutAction,
                SwitchAction: SwitchAction,
                OperationTag: OperationTag,
                OperationalRestriction: OperationalRestriction,
                PSREventKind: PSREventKind,
                ClearanceActionKind: ClearanceActionKind,
                ServicePointOutageSummary: ServicePointOutageSummary,
                GenericAction: GenericAction,
                GroundAction: GroundAction,
                SwitchingStep: SwitchingStep,
                OutageSchedule: OutageSchedule,
                TagAction: TagAction,
                EnergySourceAction: EnergySourceAction,
                Incident: Incident,
                TagActionKind: TagActionKind
            }
        );
    }
);