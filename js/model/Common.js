define
(
    ["model/base", "model/Core"],
    /**
     * This package contains the information classes that support distribution management in general.
     *
     */
    function (base, Core)
    {

        /**
         * Member of a crew.
         *
         */
        function parse_CrewMember (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OperationPersonRole (context, sub);
            obj.cls = "CrewMember";
            base.parse_attribute (/<cim:CrewMember.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context);
            bucket = context.parsed.CrewMember;
            if (null == bucket)
                context.parsed.CrewMember = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CrewMember (obj, exporters, full)
        {
            var fields = exporters["OperationPersonRole"](obj, exporters, false);

            base.export_attribute (obj, "CrewMember", "Crew", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Parent class for different groupings of information collected and managed as a part of a business process.
         *
         * It will frequently contain references to other objects, such as assets, people and power system resources.
         *
         */
        function parse_Document (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Document";
            base.parse_element (/<cim:Document.authorName>([\s\S]*?)<\/cim:Document.authorName>/g, obj, "authorName", base.to_string, sub, context);
            base.parse_element (/<cim:Document.createdDateTime>([\s\S]*?)<\/cim:Document.createdDateTime>/g, obj, "createdDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:Document.docStatus>([\s\S]*?)<\/cim:Document.docStatus>/g, obj, "docStatus", base.to_string, sub, context);
            base.parse_element (/<cim:Document.electronicAddress>([\s\S]*?)<\/cim:Document.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);
            base.parse_element (/<cim:Document.lastModifiedDateTime>([\s\S]*?)<\/cim:Document.lastModifiedDateTime>/g, obj, "lastModifiedDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:Document.revisionNumber>([\s\S]*?)<\/cim:Document.revisionNumber>/g, obj, "revisionNumber", base.to_string, sub, context);
            base.parse_element (/<cim:Document.status>([\s\S]*?)<\/cim:Document.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:Document.subject>([\s\S]*?)<\/cim:Document.subject>/g, obj, "subject", base.to_string, sub, context);
            base.parse_element (/<cim:Document.title>([\s\S]*?)<\/cim:Document.title>/g, obj, "title", base.to_string, sub, context);
            base.parse_element (/<cim:Document.type>([\s\S]*?)<\/cim:Document.type>/g, obj, "type", base.to_string, sub, context);
            base.parse_element (/<cim:Document.comment>([\s\S]*?)<\/cim:Document.comment>/g, obj, "comment", base.to_string, sub, context);
            bucket = context.parsed.Document;
            if (null == bucket)
                context.parsed.Document = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Document (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Document", "authorName", base.from_string, fields);
            base.export_element (obj, "Document", "createdDateTime", base.from_datetime, fields);
            base.export_element (obj, "Document", "docStatus", base.from_string, fields);
            base.export_element (obj, "Document", "electronicAddress", base.from_string, fields);
            base.export_element (obj, "Document", "lastModifiedDateTime", base.from_datetime, fields);
            base.export_element (obj, "Document", "revisionNumber", base.from_string, fields);
            base.export_element (obj, "Document", "status", base.from_string, fields);
            base.export_element (obj, "Document", "subject", base.from_string, fields);
            base.export_element (obj, "Document", "title", base.from_string, fields);
            base.export_element (obj, "Document", "type", base.from_string, fields);
            base.export_element (obj, "Document", "comment", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * General purpose street address information.
         *
         */
        function parse_StreetAddress (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "StreetAddress";
            base.parse_element (/<cim:StreetAddress.status>([\s\S]*?)<\/cim:StreetAddress.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:StreetAddress.streetDetail>([\s\S]*?)<\/cim:StreetAddress.streetDetail>/g, obj, "streetDetail", base.to_string, sub, context);
            base.parse_element (/<cim:StreetAddress.townDetail>([\s\S]*?)<\/cim:StreetAddress.townDetail>/g, obj, "townDetail", base.to_string, sub, context);
            bucket = context.parsed.StreetAddress;
            if (null == bucket)
                context.parsed.StreetAddress = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StreetAddress (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "StreetAddress", "status", base.from_string, fields);
            base.export_element (obj, "StreetAddress", "streetDetail", base.from_string, fields);
            base.export_element (obj, "StreetAddress", "townDetail", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Identifies a way in which an organisation may participate in the utility enterprise (e.g., customer, manufacturer, etc).
         *
         */
        function parse_OrganisationRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "OrganisationRole";
            base.parse_attribute (/<cim:OrganisationRole.Organisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Organisation", sub, context);
            bucket = context.parsed.OrganisationRole;
            if (null == bucket)
                context.parsed.OrganisationRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OrganisationRole (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "OrganisationRole", "Organisation", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Electronic address information.
         *
         */
        function parse_ElectronicAddress (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ElectronicAddress";
            base.parse_element (/<cim:ElectronicAddress.email1>([\s\S]*?)<\/cim:ElectronicAddress.email1>/g, obj, "email1", base.to_string, sub, context);
            base.parse_element (/<cim:ElectronicAddress.email2>([\s\S]*?)<\/cim:ElectronicAddress.email2>/g, obj, "email2", base.to_string, sub, context);
            base.parse_element (/<cim:ElectronicAddress.lan>([\s\S]*?)<\/cim:ElectronicAddress.lan>/g, obj, "lan", base.to_string, sub, context);
            base.parse_element (/<cim:ElectronicAddress.mac>([\s\S]*?)<\/cim:ElectronicAddress.mac>/g, obj, "mac", base.to_string, sub, context);
            base.parse_element (/<cim:ElectronicAddress.password>([\s\S]*?)<\/cim:ElectronicAddress.password>/g, obj, "password", base.to_string, sub, context);
            base.parse_element (/<cim:ElectronicAddress.radio>([\s\S]*?)<\/cim:ElectronicAddress.radio>/g, obj, "radio", base.to_string, sub, context);
            base.parse_element (/<cim:ElectronicAddress.userID>([\s\S]*?)<\/cim:ElectronicAddress.userID>/g, obj, "userID", base.to_string, sub, context);
            base.parse_element (/<cim:ElectronicAddress.web>([\s\S]*?)<\/cim:ElectronicAddress.web>/g, obj, "web", base.to_string, sub, context);
            bucket = context.parsed.ElectronicAddress;
            if (null == bucket)
                context.parsed.ElectronicAddress = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ElectronicAddress (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ElectronicAddress", "email1", base.from_string, fields);
            base.export_element (obj, "ElectronicAddress", "email2", base.from_string, fields);
            base.export_element (obj, "ElectronicAddress", "lan", base.from_string, fields);
            base.export_element (obj, "ElectronicAddress", "mac", base.from_string, fields);
            base.export_element (obj, "ElectronicAddress", "password", base.from_string, fields);
            base.export_element (obj, "ElectronicAddress", "radio", base.from_string, fields);
            base.export_element (obj, "ElectronicAddress", "userID", base.from_string, fields);
            base.export_element (obj, "ElectronicAddress", "web", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Group of people with specific skills, tools, and vehicles.
         *
         */
        function parse_Crew (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Crew";
            base.parse_element (/<cim:Crew.status>([\s\S]*?)<\/cim:Crew.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_attribute (/<cim:Crew.CrewType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CrewType", sub, context);
            bucket = context.parsed.Crew;
            if (null == bucket)
                context.parsed.Crew = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Crew (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Crew", "status", base.from_string, fields);
            base.export_attribute (obj, "Crew", "CrewType", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Control room operator.
         *
         */
        function parse_Operator (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_OperationPersonRole (context, sub);
            obj.cls = "Operator";
            bucket = context.parsed.Operator;
            if (null == bucket)
                context.parsed.Operator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Operator (obj, exporters, full)
        {
            var fields = exporters["OperationPersonRole"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Description of anything that changes through time.
         *
         * Time schedule is used to perform a single-valued function of time. Use inherited 'type' attribute to give additional information on this schedule, such as: periodic (hourly, daily, weekly, monthly, etc.), day of the month, by date, calendar (specific times and dates).
         *
         */
        function parse_TimeSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Document (context, sub);
            obj.cls = "TimeSchedule";
            base.parse_element (/<cim:TimeSchedule.disabled>([\s\S]*?)<\/cim:TimeSchedule.disabled>/g, obj, "disabled", base.to_boolean, sub, context);
            base.parse_element (/<cim:TimeSchedule.offset>([\s\S]*?)<\/cim:TimeSchedule.offset>/g, obj, "offset", base.to_string, sub, context);
            base.parse_element (/<cim:TimeSchedule.recurrencePattern>([\s\S]*?)<\/cim:TimeSchedule.recurrencePattern>/g, obj, "recurrencePattern", base.to_string, sub, context);
            base.parse_element (/<cim:TimeSchedule.recurrencePeriod>([\s\S]*?)<\/cim:TimeSchedule.recurrencePeriod>/g, obj, "recurrencePeriod", base.to_string, sub, context);
            base.parse_element (/<cim:TimeSchedule.scheduleInterval>([\s\S]*?)<\/cim:TimeSchedule.scheduleInterval>/g, obj, "scheduleInterval", base.to_string, sub, context);
            bucket = context.parsed.TimeSchedule;
            if (null == bucket)
                context.parsed.TimeSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TimeSchedule (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "TimeSchedule", "disabled", base.from_boolean, fields);
            base.export_element (obj, "TimeSchedule", "offset", base.from_string, fields);
            base.export_element (obj, "TimeSchedule", "recurrencePattern", base.from_string, fields);
            base.export_element (obj, "TimeSchedule", "recurrencePeriod", base.from_string, fields);
            base.export_element (obj, "TimeSchedule", "scheduleInterval", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Formal agreement between two parties defining the terms and conditions for a set of services.
         *
         * The specifics of the services are, in turn, defined via one or more service agreements.
         *
         */
        function parse_Agreement (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Document (context, sub);
            obj.cls = "Agreement";
            base.parse_element (/<cim:Agreement.signDate>([\s\S]*?)<\/cim:Agreement.signDate>/g, obj, "signDate", base.to_string, sub, context);
            base.parse_element (/<cim:Agreement.validityInterval>([\s\S]*?)<\/cim:Agreement.validityInterval>/g, obj, "validityInterval", base.to_string, sub, context);
            bucket = context.parsed.Agreement;
            if (null == bucket)
                context.parsed.Agreement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Agreement (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "Agreement", "signDate", base.from_string, fields);
            base.export_element (obj, "Agreement", "validityInterval", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An event to trigger one or more activities, such as reading a meter, recalculating a bill, requesting work, when generating units must be scheduled for maintenance, when a transformer is scheduled to be refurbished, etc.
         *
         */
        function parse_ScheduledEvent (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ScheduledEvent";
            base.parse_element (/<cim:ScheduledEvent.duration>([\s\S]*?)<\/cim:ScheduledEvent.duration>/g, obj, "duration", base.to_string, sub, context);
            base.parse_element (/<cim:ScheduledEvent.status>([\s\S]*?)<\/cim:ScheduledEvent.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:ScheduledEvent.type>([\s\S]*?)<\/cim:ScheduledEvent.type>/g, obj, "type", base.to_string, sub, context);
            base.parse_attribute (/<cim:ScheduledEvent.ScheduledEventData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ScheduledEventData", sub, context);
            bucket = context.parsed.ScheduledEvent;
            if (null == bucket)
                context.parsed.ScheduledEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ScheduledEvent (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "ScheduledEvent", "duration", base.from_string, fields);
            base.export_element (obj, "ScheduledEvent", "status", base.from_string, fields);
            base.export_element (obj, "ScheduledEvent", "type", base.from_string, fields);
            base.export_attribute (obj, "ScheduledEvent", "ScheduledEventData", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Priority definition.
         *
         */
        function parse_Priority (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Priority";
            base.parse_element (/<cim:Priority.justification>([\s\S]*?)<\/cim:Priority.justification>/g, obj, "justification", base.to_string, sub, context);
            base.parse_element (/<cim:Priority.rank>([\s\S]*?)<\/cim:Priority.rank>/g, obj, "rank", base.to_string, sub, context);
            base.parse_element (/<cim:Priority.type>([\s\S]*?)<\/cim:Priority.type>/g, obj, "type", base.to_string, sub, context);
            bucket = context.parsed.Priority;
            if (null == bucket)
                context.parsed.Priority = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Priority (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Priority", "justification", base.from_string, fields);
            base.export_element (obj, "Priority", "rank", base.from_string, fields);
            base.export_element (obj, "Priority", "type", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A point in time within a sequence of points in time relative to a time schedule.
         *
         */
        function parse_TimePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TimePoint";
            base.parse_element (/<cim:TimePoint.dateTime>([\s\S]*?)<\/cim:TimePoint.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:TimePoint.relativeTimeInterval>([\s\S]*?)<\/cim:TimePoint.relativeTimeInterval>/g, obj, "relativeTimeInterval", base.to_string, sub, context);
            base.parse_element (/<cim:TimePoint.sequenceNumber>([\s\S]*?)<\/cim:TimePoint.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
            base.parse_element (/<cim:TimePoint.status>([\s\S]*?)<\/cim:TimePoint.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:TimePoint.window>([\s\S]*?)<\/cim:TimePoint.window>/g, obj, "window", base.to_string, sub, context);
            base.parse_attribute (/<cim:TimePoint.TimeSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TimeSchedule", sub, context);
            bucket = context.parsed.TimePoint;
            if (null == bucket)
                context.parsed.TimePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TimePoint (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "TimePoint", "dateTime", base.from_datetime, fields);
            base.export_element (obj, "TimePoint", "relativeTimeInterval", base.from_string, fields);
            base.export_element (obj, "TimePoint", "sequenceNumber", base.from_string, fields);
            base.export_element (obj, "TimePoint", "status", base.from_string, fields);
            base.export_element (obj, "TimePoint", "window", base.from_string, fields);
            base.export_attribute (obj, "TimePoint", "TimeSchedule", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Records activity for an entity at a point in time; activity may be for an event that has already occurred or for a planned activity.
         *
         */
        function parse_ActivityRecord (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ActivityRecord";
            base.parse_element (/<cim:ActivityRecord.createdDateTime>([\s\S]*?)<\/cim:ActivityRecord.createdDateTime>/g, obj, "createdDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:ActivityRecord.reason>([\s\S]*?)<\/cim:ActivityRecord.reason>/g, obj, "reason", base.to_string, sub, context);
            base.parse_element (/<cim:ActivityRecord.severity>([\s\S]*?)<\/cim:ActivityRecord.severity>/g, obj, "severity", base.to_string, sub, context);
            base.parse_element (/<cim:ActivityRecord.status>([\s\S]*?)<\/cim:ActivityRecord.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:ActivityRecord.type>([\s\S]*?)<\/cim:ActivityRecord.type>/g, obj, "type", base.to_string, sub, context);
            bucket = context.parsed.ActivityRecord;
            if (null == bucket)
                context.parsed.ActivityRecord = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ActivityRecord (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "ActivityRecord", "createdDateTime", base.from_datetime, fields);
            base.export_element (obj, "ActivityRecord", "reason", base.from_string, fields);
            base.export_element (obj, "ActivityRecord", "severity", base.from_string, fields);
            base.export_element (obj, "ActivityRecord", "status", base.from_string, fields);
            base.export_element (obj, "ActivityRecord", "type", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * General purpose postal address information.
         *
         */
        function parse_PostalAddress (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PostalAddress";
            base.parse_element (/<cim:PostalAddress.poBox>([\s\S]*?)<\/cim:PostalAddress.poBox>/g, obj, "poBox", base.to_string, sub, context);
            base.parse_element (/<cim:PostalAddress.postalCode>([\s\S]*?)<\/cim:PostalAddress.postalCode>/g, obj, "postalCode", base.to_string, sub, context);
            base.parse_element (/<cim:PostalAddress.streetDetail>([\s\S]*?)<\/cim:PostalAddress.streetDetail>/g, obj, "streetDetail", base.to_string, sub, context);
            base.parse_element (/<cim:PostalAddress.townDetail>([\s\S]*?)<\/cim:PostalAddress.townDetail>/g, obj, "townDetail", base.to_string, sub, context);
            bucket = context.parsed.PostalAddress;
            if (null == bucket)
                context.parsed.PostalAddress = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PostalAddress (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PostalAddress", "poBox", base.from_string, fields);
            base.export_element (obj, "PostalAddress", "postalCode", base.from_string, fields);
            base.export_element (obj, "PostalAddress", "streetDetail", base.from_string, fields);
            base.export_element (obj, "PostalAddress", "townDetail", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_PersonRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "PersonRole";
            base.parse_attribute (/<cim:PersonRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Person", sub, context);
            bucket = context.parsed.PersonRole;
            if (null == bucket)
                context.parsed.PersonRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PersonRole (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "PersonRole", "Person", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Coordinate reference system.
         *
         */
        function parse_CoordinateSystem (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "CoordinateSystem";
            base.parse_element (/<cim:CoordinateSystem.crsUrn>([\s\S]*?)<\/cim:CoordinateSystem.crsUrn>/g, obj, "crsUrn", base.to_string, sub, context);
            bucket = context.parsed.CoordinateSystem;
            if (null == bucket)
                context.parsed.CoordinateSystem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CoordinateSystem (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "CoordinateSystem", "crsUrn", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An object or a condition that is a danger for causing loss or perils to an asset and/or people.
         *
         */
        function parse_Hazard (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Hazard";
            base.parse_element (/<cim:Hazard.status>([\s\S]*?)<\/cim:Hazard.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:Hazard.type>([\s\S]*?)<\/cim:Hazard.type>/g, obj, "type", base.to_string, sub, context);
            bucket = context.parsed.Hazard;
            if (null == bucket)
                context.parsed.Hazard = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Hazard (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Hazard", "status", base.from_string, fields);
            base.export_element (obj, "Hazard", "type", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Town details, in the context of address.
         *
         */
        function parse_TownDetail (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TownDetail";
            base.parse_element (/<cim:TownDetail.code>([\s\S]*?)<\/cim:TownDetail.code>/g, obj, "code", base.to_string, sub, context);
            base.parse_element (/<cim:TownDetail.country>([\s\S]*?)<\/cim:TownDetail.country>/g, obj, "country", base.to_string, sub, context);
            base.parse_element (/<cim:TownDetail.name>([\s\S]*?)<\/cim:TownDetail.name>/g, obj, "name", base.to_string, sub, context);
            base.parse_element (/<cim:TownDetail.section>([\s\S]*?)<\/cim:TownDetail.section>/g, obj, "section", base.to_string, sub, context);
            base.parse_element (/<cim:TownDetail.stateOrProvince>([\s\S]*?)<\/cim:TownDetail.stateOrProvince>/g, obj, "stateOrProvince", base.to_string, sub, context);
            bucket = context.parsed.TownDetail;
            if (null == bucket)
                context.parsed.TownDetail = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TownDetail (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TownDetail", "code", base.from_string, fields);
            base.export_element (obj, "TownDetail", "country", base.from_string, fields);
            base.export_element (obj, "TownDetail", "name", base.from_string, fields);
            base.export_element (obj, "TownDetail", "section", base.from_string, fields);
            base.export_element (obj, "TownDetail", "stateOrProvince", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Organisation that might have roles as utility, contractor, supplier, manufacturer, customer, etc.
         *
         */
        function parse_Organisation (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Organisation";
            base.parse_element (/<cim:Organisation.electronicAddress>([\s\S]*?)<\/cim:Organisation.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);
            base.parse_element (/<cim:Organisation.phone1>([\s\S]*?)<\/cim:Organisation.phone1>/g, obj, "phone1", base.to_string, sub, context);
            base.parse_element (/<cim:Organisation.phone2>([\s\S]*?)<\/cim:Organisation.phone2>/g, obj, "phone2", base.to_string, sub, context);
            base.parse_element (/<cim:Organisation.postalAddress>([\s\S]*?)<\/cim:Organisation.postalAddress>/g, obj, "postalAddress", base.to_string, sub, context);
            base.parse_element (/<cim:Organisation.streetAddress>([\s\S]*?)<\/cim:Organisation.streetAddress>/g, obj, "streetAddress", base.to_string, sub, context);
            bucket = context.parsed.Organisation;
            if (null == bucket)
                context.parsed.Organisation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Organisation (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Organisation", "electronicAddress", base.from_string, fields);
            base.export_element (obj, "Organisation", "phone1", base.from_string, fields);
            base.export_element (obj, "Organisation", "phone2", base.from_string, fields);
            base.export_element (obj, "Organisation", "postalAddress", base.from_string, fields);
            base.export_element (obj, "Organisation", "streetAddress", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Custom description of the type of crew.
         *
         * This may be used to determine the type of work the crew can be assigned to. Examples include repair, tree trimming, switching, etc.
         *
         */
        function parse_CrewType (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "CrewType";
            bucket = context.parsed.CrewType;
            if (null == bucket)
                context.parsed.CrewType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CrewType (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Person role in the context of utility operations.
         *
         */
        function parse_OperationPersonRole (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_PersonRole (context, sub);
            obj.cls = "OperationPersonRole";
            bucket = context.parsed.OperationPersonRole;
            if (null == bucket)
                context.parsed.OperationPersonRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OperationPersonRole (obj, exporters, full)
        {
            var fields = exporters["PersonRole"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The place, scene, or point of something where someone or something has been, is, and/or will be at a given moment in time.
         *
         * It can be defined with one or more postition points (coordinates) in a given coordinate system.
         *
         */
        function parse_Location (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Location";
            base.parse_element (/<cim:Location.direction>([\s\S]*?)<\/cim:Location.direction>/g, obj, "direction", base.to_string, sub, context);
            base.parse_element (/<cim:Location.electronicAddress>([\s\S]*?)<\/cim:Location.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);
            base.parse_element (/<cim:Location.geoInfoReference>([\s\S]*?)<\/cim:Location.geoInfoReference>/g, obj, "geoInfoReference", base.to_string, sub, context);
            base.parse_element (/<cim:Location.mainAddress>([\s\S]*?)<\/cim:Location.mainAddress>/g, obj, "mainAddress", base.to_string, sub, context);
            base.parse_element (/<cim:Location.phone1>([\s\S]*?)<\/cim:Location.phone1>/g, obj, "phone1", base.to_string, sub, context);
            base.parse_element (/<cim:Location.phone2>([\s\S]*?)<\/cim:Location.phone2>/g, obj, "phone2", base.to_string, sub, context);
            base.parse_element (/<cim:Location.secondaryAddress>([\s\S]*?)<\/cim:Location.secondaryAddress>/g, obj, "secondaryAddress", base.to_string, sub, context);
            base.parse_element (/<cim:Location.status>([\s\S]*?)<\/cim:Location.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:Location.type>([\s\S]*?)<\/cim:Location.type>/g, obj, "type", base.to_string, sub, context);
            base.parse_attribute (/<cim:Location.CoordinateSystem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CoordinateSystem", sub, context);
            bucket = context.parsed.Location;
            if (null == bucket)
                context.parsed.Location = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Location (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Location", "direction", base.from_string, fields);
            base.export_element (obj, "Location", "electronicAddress", base.from_string, fields);
            base.export_element (obj, "Location", "geoInfoReference", base.from_string, fields);
            base.export_element (obj, "Location", "mainAddress", base.from_string, fields);
            base.export_element (obj, "Location", "phone1", base.from_string, fields);
            base.export_element (obj, "Location", "phone2", base.from_string, fields);
            base.export_element (obj, "Location", "secondaryAddress", base.from_string, fields);
            base.export_element (obj, "Location", "status", base.from_string, fields);
            base.export_element (obj, "Location", "type", base.from_string, fields);
            base.export_attribute (obj, "Location", "CoordinateSystem", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Ownership of e.g. asset.
         *
         */
        function parse_Ownership (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Ownership";
            base.parse_element (/<cim:Ownership.share>([\s\S]*?)<\/cim:Ownership.share>/g, obj, "share", base.to_string, sub, context);
            base.parse_attribute (/<cim:Ownership.AssetOwner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetOwner", sub, context);
            base.parse_attribute (/<cim:Ownership.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
            bucket = context.parsed.Ownership;
            if (null == bucket)
                context.parsed.Ownership = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Ownership (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Ownership", "share", base.from_string, fields);
            base.export_attribute (obj, "Ownership", "AssetOwner", fields);
            base.export_attribute (obj, "Ownership", "Asset", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Telephone number.
         *
         */
        function parse_TelephoneNumber (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TelephoneNumber";
            base.parse_element (/<cim:TelephoneNumber.areaCode>([\s\S]*?)<\/cim:TelephoneNumber.areaCode>/g, obj, "areaCode", base.to_string, sub, context);
            base.parse_element (/<cim:TelephoneNumber.cityCode>([\s\S]*?)<\/cim:TelephoneNumber.cityCode>/g, obj, "cityCode", base.to_string, sub, context);
            base.parse_element (/<cim:TelephoneNumber.countryCode>([\s\S]*?)<\/cim:TelephoneNumber.countryCode>/g, obj, "countryCode", base.to_string, sub, context);
            base.parse_element (/<cim:TelephoneNumber.extension>([\s\S]*?)<\/cim:TelephoneNumber.extension>/g, obj, "extension", base.to_string, sub, context);
            base.parse_element (/<cim:TelephoneNumber.localNumber>([\s\S]*?)<\/cim:TelephoneNumber.localNumber>/g, obj, "localNumber", base.to_string, sub, context);
            bucket = context.parsed.TelephoneNumber;
            if (null == bucket)
                context.parsed.TelephoneNumber = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TelephoneNumber (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "TelephoneNumber", "areaCode", base.from_string, fields);
            base.export_element (obj, "TelephoneNumber", "cityCode", base.from_string, fields);
            base.export_element (obj, "TelephoneNumber", "countryCode", base.from_string, fields);
            base.export_element (obj, "TelephoneNumber", "extension", base.from_string, fields);
            base.export_element (obj, "TelephoneNumber", "localNumber", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Set of spatial coordinates that determine a point, defined in the coordinate system specified in 'Location.
         *
         * CoordinateSystem'. Use a single position point instance to desribe a point-oriented location. Use a sequence of position points to describe a line-oriented object (physical location of non-point oriented objects like cables or lines), or area of an object (like a substation or a geographical zone - in this case, have first and last position point with the same values).
         *
         */
        function parse_PositionPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PositionPoint";
            base.parse_element (/<cim:PositionPoint.sequenceNumber>([\s\S]*?)<\/cim:PositionPoint.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
            base.parse_element (/<cim:PositionPoint.xPosition>([\s\S]*?)<\/cim:PositionPoint.xPosition>/g, obj, "xPosition", base.to_string, sub, context);
            base.parse_element (/<cim:PositionPoint.yPosition>([\s\S]*?)<\/cim:PositionPoint.yPosition>/g, obj, "yPosition", base.to_string, sub, context);
            base.parse_element (/<cim:PositionPoint.zPosition>([\s\S]*?)<\/cim:PositionPoint.zPosition>/g, obj, "zPosition", base.to_string, sub, context);
            base.parse_attribute (/<cim:PositionPoint.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
            bucket = context.parsed.PositionPoint;
            if (null == bucket)
                context.parsed.PositionPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PositionPoint (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PositionPoint", "sequenceNumber", base.from_string, fields);
            base.export_element (obj, "PositionPoint", "xPosition", base.from_string, fields);
            base.export_element (obj, "PositionPoint", "yPosition", base.from_string, fields);
            base.export_element (obj, "PositionPoint", "zPosition", base.from_string, fields);
            base.export_attribute (obj, "PositionPoint", "Location", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Used to report details on creation, change or deletion of an entity or its configuration.
         *
         */
        function parse_ConfigurationEvent (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ActivityRecord (context, sub);
            obj.cls = "ConfigurationEvent";
            base.parse_element (/<cim:ConfigurationEvent.effectiveDateTime>([\s\S]*?)<\/cim:ConfigurationEvent.effectiveDateTime>/g, obj, "effectiveDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:ConfigurationEvent.modifiedBy>([\s\S]*?)<\/cim:ConfigurationEvent.modifiedBy>/g, obj, "modifiedBy", base.to_string, sub, context);
            base.parse_element (/<cim:ConfigurationEvent.remark>([\s\S]*?)<\/cim:ConfigurationEvent.remark>/g, obj, "remark", base.to_string, sub, context);
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedPersonRole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedPersonRole", sub, context);
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedOrganisationRole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedOrganisationRole", sub, context);
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedAsset", sub, context);
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedLocation", sub, context);
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedServiceCategory", sub, context);
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedUsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedUsagePoint", sub, context);
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedDocument\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedDocument", sub, context);
            bucket = context.parsed.ConfigurationEvent;
            if (null == bucket)
                context.parsed.ConfigurationEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ConfigurationEvent (obj, exporters, full)
        {
            var fields = exporters["ActivityRecord"](obj, exporters, false);

            base.export_element (obj, "ConfigurationEvent", "effectiveDateTime", base.from_datetime, fields);
            base.export_element (obj, "ConfigurationEvent", "modifiedBy", base.from_string, fields);
            base.export_element (obj, "ConfigurationEvent", "remark", base.from_string, fields);
            base.export_attribute (obj, "ConfigurationEvent", "ChangedPersonRole", fields);
            base.export_attribute (obj, "ConfigurationEvent", "ChangedOrganisationRole", fields);
            base.export_attribute (obj, "ConfigurationEvent", "ChangedAsset", fields);
            base.export_attribute (obj, "ConfigurationEvent", "ChangedLocation", fields);
            base.export_attribute (obj, "ConfigurationEvent", "ChangedServiceCategory", fields);
            base.export_attribute (obj, "ConfigurationEvent", "ChangedUsagePoint", fields);
            base.export_attribute (obj, "ConfigurationEvent", "ChangedDocument", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Generic name-value pair class, with optional sequence number and units for value; can be used to model parts of information exchange when concrete types are not known in advance.
         *
         */
        function parse_UserAttribute (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "UserAttribute";
            base.parse_element (/<cim:UserAttribute.name>([\s\S]*?)<\/cim:UserAttribute.name>/g, obj, "name", base.to_string, sub, context);
            base.parse_element (/<cim:UserAttribute.sequenceNumber>([\s\S]*?)<\/cim:UserAttribute.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
            base.parse_element (/<cim:UserAttribute.value>([\s\S]*?)<\/cim:UserAttribute.value>/g, obj, "value", base.to_string, sub, context);
            base.parse_attribute (/<cim:UserAttribute.Transaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Transaction", sub, context);
            base.parse_attribute (/<cim:UserAttribute.RatingSpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RatingSpecification", sub, context);
            base.parse_attribute (/<cim:UserAttribute.PropertySpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PropertySpecification", sub, context);
            bucket = context.parsed.UserAttribute;
            if (null == bucket)
                context.parsed.UserAttribute = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_UserAttribute (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "UserAttribute", "name", base.from_string, fields);
            base.export_element (obj, "UserAttribute", "sequenceNumber", base.from_string, fields);
            base.export_element (obj, "UserAttribute", "value", base.from_string, fields);
            base.export_attribute (obj, "UserAttribute", "Transaction", fields);
            base.export_attribute (obj, "UserAttribute", "RatingSpecification", fields);
            base.export_attribute (obj, "UserAttribute", "PropertySpecification", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Schedule parameters for an activity that is to occur, is occurring, or has completed.
         *
         */
        function parse_ScheduledEventData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ScheduledEventData";
            base.parse_element (/<cim:ScheduledEventData.estimatedWindow>([\s\S]*?)<\/cim:ScheduledEventData.estimatedWindow>/g, obj, "estimatedWindow", base.to_string, sub, context);
            base.parse_element (/<cim:ScheduledEventData.requestedWindow>([\s\S]*?)<\/cim:ScheduledEventData.requestedWindow>/g, obj, "requestedWindow", base.to_string, sub, context);
            base.parse_element (/<cim:ScheduledEventData.status>([\s\S]*?)<\/cim:ScheduledEventData.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_attribute (/<cim:ScheduledEventData.InspectionDataSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InspectionDataSet", sub, context);
            bucket = context.parsed.ScheduledEventData;
            if (null == bucket)
                context.parsed.ScheduledEventData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ScheduledEventData (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ScheduledEventData", "estimatedWindow", base.from_string, fields);
            base.export_element (obj, "ScheduledEventData", "requestedWindow", base.from_string, fields);
            base.export_element (obj, "ScheduledEventData", "status", base.from_string, fields);
            base.export_attribute (obj, "ScheduledEventData", "InspectionDataSet", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Current status information relevant to an entity.
         *
         */
        function parse_Status (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Status";
            base.parse_element (/<cim:Status.dateTime>([\s\S]*?)<\/cim:Status.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:Status.reason>([\s\S]*?)<\/cim:Status.reason>/g, obj, "reason", base.to_string, sub, context);
            base.parse_element (/<cim:Status.remark>([\s\S]*?)<\/cim:Status.remark>/g, obj, "remark", base.to_string, sub, context);
            base.parse_element (/<cim:Status.value>([\s\S]*?)<\/cim:Status.value>/g, obj, "value", base.to_string, sub, context);
            bucket = context.parsed.Status;
            if (null == bucket)
                context.parsed.Status = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Status (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Status", "dateTime", base.from_datetime, fields);
            base.export_element (obj, "Status", "reason", base.from_string, fields);
            base.export_element (obj, "Status", "remark", base.from_string, fields);
            base.export_element (obj, "Status", "value", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * General purpose information for name and other information to contact people.
         *
         */
        function parse_Person (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Person";
            base.parse_element (/<cim:Person.electronicAddress>([\s\S]*?)<\/cim:Person.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);
            base.parse_element (/<cim:Person.firstName>([\s\S]*?)<\/cim:Person.firstName>/g, obj, "firstName", base.to_string, sub, context);
            base.parse_element (/<cim:Person.landlinePhone>([\s\S]*?)<\/cim:Person.landlinePhone>/g, obj, "landlinePhone", base.to_string, sub, context);
            base.parse_element (/<cim:Person.lastName>([\s\S]*?)<\/cim:Person.lastName>/g, obj, "lastName", base.to_string, sub, context);
            base.parse_element (/<cim:Person.mName>([\s\S]*?)<\/cim:Person.mName>/g, obj, "mName", base.to_string, sub, context);
            base.parse_element (/<cim:Person.mobilePhone>([\s\S]*?)<\/cim:Person.mobilePhone>/g, obj, "mobilePhone", base.to_string, sub, context);
            base.parse_element (/<cim:Person.prefix>([\s\S]*?)<\/cim:Person.prefix>/g, obj, "prefix", base.to_string, sub, context);
            base.parse_element (/<cim:Person.specialNeed>([\s\S]*?)<\/cim:Person.specialNeed>/g, obj, "specialNeed", base.to_string, sub, context);
            base.parse_element (/<cim:Person.suffix>([\s\S]*?)<\/cim:Person.suffix>/g, obj, "suffix", base.to_string, sub, context);
            bucket = context.parsed.Person;
            if (null == bucket)
                context.parsed.Person = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Person (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Person", "electronicAddress", base.from_string, fields);
            base.export_element (obj, "Person", "firstName", base.from_string, fields);
            base.export_element (obj, "Person", "landlinePhone", base.from_string, fields);
            base.export_element (obj, "Person", "lastName", base.from_string, fields);
            base.export_element (obj, "Person", "mName", base.from_string, fields);
            base.export_element (obj, "Person", "mobilePhone", base.from_string, fields);
            base.export_element (obj, "Person", "prefix", base.from_string, fields);
            base.export_element (obj, "Person", "specialNeed", base.from_string, fields);
            base.export_element (obj, "Person", "suffix", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Meeting time and location.
         *
         */
        function parse_Appointment (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Appointment";
            base.parse_element (/<cim:Appointment.callAhead>([\s\S]*?)<\/cim:Appointment.callAhead>/g, obj, "callAhead", base.to_boolean, sub, context);
            base.parse_element (/<cim:Appointment.meetingInterval>([\s\S]*?)<\/cim:Appointment.meetingInterval>/g, obj, "meetingInterval", base.to_string, sub, context);
            bucket = context.parsed.Appointment;
            if (null == bucket)
                context.parsed.Appointment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Appointment (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Appointment", "callAhead", base.from_boolean, fields);
            base.export_element (obj, "Appointment", "meetingInterval", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Street details, in the context of address.
         *
         */
        function parse_StreetDetail (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "StreetDetail";
            base.parse_element (/<cim:StreetDetail.addressGeneral>([\s\S]*?)<\/cim:StreetDetail.addressGeneral>/g, obj, "addressGeneral", base.to_string, sub, context);
            base.parse_element (/<cim:StreetDetail.buildingName>([\s\S]*?)<\/cim:StreetDetail.buildingName>/g, obj, "buildingName", base.to_string, sub, context);
            base.parse_element (/<cim:StreetDetail.code>([\s\S]*?)<\/cim:StreetDetail.code>/g, obj, "code", base.to_string, sub, context);
            base.parse_element (/<cim:StreetDetail.name>([\s\S]*?)<\/cim:StreetDetail.name>/g, obj, "name", base.to_string, sub, context);
            base.parse_element (/<cim:StreetDetail.number>([\s\S]*?)<\/cim:StreetDetail.number>/g, obj, "number", base.to_string, sub, context);
            base.parse_element (/<cim:StreetDetail.prefix>([\s\S]*?)<\/cim:StreetDetail.prefix>/g, obj, "prefix", base.to_string, sub, context);
            base.parse_element (/<cim:StreetDetail.suffix>([\s\S]*?)<\/cim:StreetDetail.suffix>/g, obj, "suffix", base.to_string, sub, context);
            base.parse_element (/<cim:StreetDetail.suiteNumber>([\s\S]*?)<\/cim:StreetDetail.suiteNumber>/g, obj, "suiteNumber", base.to_string, sub, context);
            base.parse_element (/<cim:StreetDetail.type>([\s\S]*?)<\/cim:StreetDetail.type>/g, obj, "type", base.to_string, sub, context);
            base.parse_element (/<cim:StreetDetail.withinTownLimits>([\s\S]*?)<\/cim:StreetDetail.withinTownLimits>/g, obj, "withinTownLimits", base.to_boolean, sub, context);
            bucket = context.parsed.StreetDetail;
            if (null == bucket)
                context.parsed.StreetDetail = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_StreetDetail (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "StreetDetail", "addressGeneral", base.from_string, fields);
            base.export_element (obj, "StreetDetail", "buildingName", base.from_string, fields);
            base.export_element (obj, "StreetDetail", "code", base.from_string, fields);
            base.export_element (obj, "StreetDetail", "name", base.from_string, fields);
            base.export_element (obj, "StreetDetail", "number", base.from_string, fields);
            base.export_element (obj, "StreetDetail", "prefix", base.from_string, fields);
            base.export_element (obj, "StreetDetail", "suffix", base.from_string, fields);
            base.export_element (obj, "StreetDetail", "suiteNumber", base.from_string, fields);
            base.export_element (obj, "StreetDetail", "type", base.from_string, fields);
            base.export_element (obj, "StreetDetail", "withinTownLimits", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_CrewType: export_CrewType,
                export_Priority: export_Priority,
                export_CoordinateSystem: export_CoordinateSystem,
                export_OrganisationRole: export_OrganisationRole,
                export_Status: export_Status,
                export_TownDetail: export_TownDetail,
                parse_PostalAddress: parse_PostalAddress,
                parse_PositionPoint: parse_PositionPoint,
                export_ScheduledEventData: export_ScheduledEventData,
                export_Crew: export_Crew,
                export_Organisation: export_Organisation,
                parse_CrewType: parse_CrewType,
                parse_TownDetail: parse_TownDetail,
                parse_ElectronicAddress: parse_ElectronicAddress,
                parse_Appointment: parse_Appointment,
                parse_Person: parse_Person,
                export_StreetAddress: export_StreetAddress,
                parse_Agreement: parse_Agreement,
                export_UserAttribute: export_UserAttribute,
                export_OperationPersonRole: export_OperationPersonRole,
                export_Document: export_Document,
                export_TimePoint: export_TimePoint,
                parse_Priority: parse_Priority,
                export_StreetDetail: export_StreetDetail,
                export_Location: export_Location,
                export_ActivityRecord: export_ActivityRecord,
                parse_Operator: parse_Operator,
                parse_TimeSchedule: parse_TimeSchedule,
                parse_TimePoint: parse_TimePoint,
                parse_ScheduledEventData: parse_ScheduledEventData,
                export_PersonRole: export_PersonRole,
                parse_ActivityRecord: parse_ActivityRecord,
                export_CrewMember: export_CrewMember,
                export_Operator: export_Operator,
                export_PositionPoint: export_PositionPoint,
                parse_OrganisationRole: parse_OrganisationRole,
                export_Appointment: export_Appointment,
                parse_Ownership: parse_Ownership,
                parse_StreetDetail: parse_StreetDetail,
                export_TimeSchedule: export_TimeSchedule,
                parse_ScheduledEvent: parse_ScheduledEvent,
                parse_PersonRole: parse_PersonRole,
                export_TelephoneNumber: export_TelephoneNumber,
                parse_CoordinateSystem: parse_CoordinateSystem,
                export_ConfigurationEvent: export_ConfigurationEvent,
                parse_UserAttribute: parse_UserAttribute,
                parse_Organisation: parse_Organisation,
                parse_Hazard: parse_Hazard,
                parse_StreetAddress: parse_StreetAddress,
                export_Hazard: export_Hazard,
                export_ScheduledEvent: export_ScheduledEvent,
                parse_Status: parse_Status,
                export_PostalAddress: export_PostalAddress,
                parse_TelephoneNumber: parse_TelephoneNumber,
                parse_OperationPersonRole: parse_OperationPersonRole,
                export_Person: export_Person,
                parse_Location: parse_Location,
                export_ElectronicAddress: export_ElectronicAddress,
                parse_Document: parse_Document,
                parse_CrewMember: parse_CrewMember,
                export_Agreement: export_Agreement,
                parse_Crew: parse_Crew,
                parse_ConfigurationEvent: parse_ConfigurationEvent,
                export_Ownership: export_Ownership
            }
        );
    }
);