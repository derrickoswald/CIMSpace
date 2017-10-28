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
            /**
             * Crew to which this crew member belongs.
             *
             */
            base.parse_attribute (/<cim:CrewMember.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context, true);

            bucket = context.parsed.CrewMember;
            if (null == bucket)
                context.parsed.CrewMember = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Name of the author of this document.
             *
             */
            base.parse_element (/<cim:Document.authorName>([\s\S]*?)<\/cim:Document.authorName>/g, obj, "authorName", base.to_string, sub, context);

            /**
             * Date and time that this document was created.
             *
             */
            base.parse_element (/<cim:Document.createdDateTime>([\s\S]*?)<\/cim:Document.createdDateTime>/g, obj, "createdDateTime", base.to_datetime, sub, context);

            /**
             * Status of this document.
             *
             * For status of subject matter this document represents (e.g., Agreement, Work), use 'status' attribute.
             *
             */
            base.parse_element (/<cim:Document.docStatus>([\s\S]*?)<\/cim:Document.docStatus>/g, obj, "docStatus", base.to_string, sub, context);

            /**
             * Electronic address.
             *
             */
            base.parse_element (/<cim:Document.electronicAddress>([\s\S]*?)<\/cim:Document.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);

            /**
             * Date and time this document was last modified.
             *
             * Documents may potentially be modified many times during their lifetime.
             *
             */
            base.parse_element (/<cim:Document.lastModifiedDateTime>([\s\S]*?)<\/cim:Document.lastModifiedDateTime>/g, obj, "lastModifiedDateTime", base.to_datetime, sub, context);

            /**
             * Revision number for this document.
             *
             */
            base.parse_element (/<cim:Document.revisionNumber>([\s\S]*?)<\/cim:Document.revisionNumber>/g, obj, "revisionNumber", base.to_string, sub, context);

            /**
             * Status of subject matter (e.g., Agreement, Work) this document represents.
             *
             * For status of the document itself, use 'docStatus' attribute.
             *
             */
            base.parse_element (/<cim:Document.status>([\s\S]*?)<\/cim:Document.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Document subject.
             *
             */
            base.parse_element (/<cim:Document.subject>([\s\S]*?)<\/cim:Document.subject>/g, obj, "subject", base.to_string, sub, context);

            /**
             * Document title.
             *
             */
            base.parse_element (/<cim:Document.title>([\s\S]*?)<\/cim:Document.title>/g, obj, "title", base.to_string, sub, context);

            /**
             * Utility-specific classification of this document, according to its corporate standards, practices, and existing IT systems (e.g., for management of assets, maintenance, work, outage, customers, etc.).
             *
             */
            base.parse_element (/<cim:Document.type>([\s\S]*?)<\/cim:Document.type>/g, obj, "type", base.to_string, sub, context);

            /**
             * Free text comment.
             *
             */
            base.parse_element (/<cim:Document.comment>([\s\S]*?)<\/cim:Document.comment>/g, obj, "comment", base.to_string, sub, context);

            bucket = context.parsed.Document;
            if (null == bucket)
                context.parsed.Document = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Status of this address.
             *
             */
            base.parse_element (/<cim:StreetAddress.status>([\s\S]*?)<\/cim:StreetAddress.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Street detail.
             *
             */
            base.parse_element (/<cim:StreetAddress.streetDetail>([\s\S]*?)<\/cim:StreetAddress.streetDetail>/g, obj, "streetDetail", base.to_string, sub, context);

            /**
             * Town detail.
             *
             */
            base.parse_element (/<cim:StreetAddress.townDetail>([\s\S]*?)<\/cim:StreetAddress.townDetail>/g, obj, "townDetail", base.to_string, sub, context);

            bucket = context.parsed.StreetAddress;
            if (null == bucket)
                context.parsed.StreetAddress = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Organisation having this role.
             *
             */
            base.parse_attribute (/<cim:OrganisationRole.Organisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Organisation", sub, context, true);

            bucket = context.parsed.OrganisationRole;
            if (null == bucket)
                context.parsed.OrganisationRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Primary email address.
             *
             */
            base.parse_element (/<cim:ElectronicAddress.email1>([\s\S]*?)<\/cim:ElectronicAddress.email1>/g, obj, "email1", base.to_string, sub, context);

            /**
             * Alternate email address.
             *
             */
            base.parse_element (/<cim:ElectronicAddress.email2>([\s\S]*?)<\/cim:ElectronicAddress.email2>/g, obj, "email2", base.to_string, sub, context);

            /**
             * Address on local area network.
             *
             */
            base.parse_element (/<cim:ElectronicAddress.lan>([\s\S]*?)<\/cim:ElectronicAddress.lan>/g, obj, "lan", base.to_string, sub, context);

            /**
             * MAC (Media Access Control) address.
             *
             */
            base.parse_element (/<cim:ElectronicAddress.mac>([\s\S]*?)<\/cim:ElectronicAddress.mac>/g, obj, "mac", base.to_string, sub, context);

            /**
             * Password needed to log in.
             *
             */
            base.parse_element (/<cim:ElectronicAddress.password>([\s\S]*?)<\/cim:ElectronicAddress.password>/g, obj, "password", base.to_string, sub, context);

            /**
             * Radio address.
             *
             */
            base.parse_element (/<cim:ElectronicAddress.radio>([\s\S]*?)<\/cim:ElectronicAddress.radio>/g, obj, "radio", base.to_string, sub, context);

            /**
             * User ID needed to log in, which can be for an individual person, an organisation, a location, etc.
             *
             */
            base.parse_element (/<cim:ElectronicAddress.userID>([\s\S]*?)<\/cim:ElectronicAddress.userID>/g, obj, "userID", base.to_string, sub, context);

            /**
             * World wide web address.
             *
             */
            base.parse_element (/<cim:ElectronicAddress.web>([\s\S]*?)<\/cim:ElectronicAddress.web>/g, obj, "web", base.to_string, sub, context);

            bucket = context.parsed.ElectronicAddress;
            if (null == bucket)
                context.parsed.ElectronicAddress = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Status of this crew.
             *
             */
            base.parse_element (/<cim:Crew.status>([\s\S]*?)<\/cim:Crew.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Type of this crew.
             *
             */
            base.parse_attribute (/<cim:Crew.CrewType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CrewType", sub, context, true);

            bucket = context.parsed.Crew;
            if (null == bucket)
                context.parsed.Crew = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * True if this schedule is deactivated (disabled).
             *
             */
            base.parse_element (/<cim:TimeSchedule.disabled>([\s\S]*?)<\/cim:TimeSchedule.disabled>/g, obj, "disabled", base.to_boolean, sub, context);

            /**
             * The offset from midnight (i.e., 0 h, 0 min, 0 s) for the periodic time points to begin.
             *
             * For example, for an interval meter that is set up for five minute intervals ('recurrencePeriod'=300=5 min), setting 'offset'=120=2 min would result in scheduled events to read the meter executing at 2 min, 7 min, 12 min, 17 min, 22 min, 27 min, 32 min, 37 min, 42 min, 47 min, 52 min, and 57 min past each hour.
             *
             */
            base.parse_element (/<cim:TimeSchedule.offset>([\s\S]*?)<\/cim:TimeSchedule.offset>/g, obj, "offset", base.to_string, sub, context);

            /**
             * Interval at which the scheduled action repeats (e.g., first Monday of every month, last day of the month, etc.).
             *
             */
            base.parse_element (/<cim:TimeSchedule.recurrencePattern>([\s\S]*?)<\/cim:TimeSchedule.recurrencePattern>/g, obj, "recurrencePattern", base.to_string, sub, context);

            /**
             * Duration between time points, from the beginning of one period to the beginning of the next period.
             *
             * Note that a device like a meter may have multiple interval periods (e.g., 1 min, 5 min, 15 min, 30 min, or 60 min).
             *
             */
            base.parse_element (/<cim:TimeSchedule.recurrencePeriod>([\s\S]*?)<\/cim:TimeSchedule.recurrencePeriod>/g, obj, "recurrencePeriod", base.to_string, sub, context);

            /**
             * Schedule date and time interval.
             *
             */
            base.parse_element (/<cim:TimeSchedule.scheduleInterval>([\s\S]*?)<\/cim:TimeSchedule.scheduleInterval>/g, obj, "scheduleInterval", base.to_string, sub, context);

            bucket = context.parsed.TimeSchedule;
            if (null == bucket)
                context.parsed.TimeSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Date this agreement was consummated among associated persons and/or organisations.
             *
             */
            base.parse_element (/<cim:Agreement.signDate>([\s\S]*?)<\/cim:Agreement.signDate>/g, obj, "signDate", base.to_string, sub, context);

            /**
             * Date and time interval this agreement is valid (from going into effect to termination).
             *
             */
            base.parse_element (/<cim:Agreement.validityInterval>([\s\S]*?)<\/cim:Agreement.validityInterval>/g, obj, "validityInterval", base.to_string, sub, context);

            bucket = context.parsed.Agreement;
            if (null == bucket)
                context.parsed.Agreement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Duration of the scheduled event, for example, the time to ramp between values.
             *
             */
            base.parse_element (/<cim:ScheduledEvent.duration>([\s\S]*?)<\/cim:ScheduledEvent.duration>/g, obj, "duration", base.to_string, sub, context);

            base.parse_element (/<cim:ScheduledEvent.status>([\s\S]*?)<\/cim:ScheduledEvent.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Type of scheduled event.
             *
             */
            base.parse_element (/<cim:ScheduledEvent.type>([\s\S]*?)<\/cim:ScheduledEvent.type>/g, obj, "type", base.to_string, sub, context);

            /**
             * Specification for this scheduled event.
             *
             */
            base.parse_attribute (/<cim:ScheduledEvent.ScheduledEventData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ScheduledEventData", sub, context, true);

            bucket = context.parsed.ScheduledEvent;
            if (null == bucket)
                context.parsed.ScheduledEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Justification for 'rank'.
             *
             */
            base.parse_element (/<cim:Priority.justification>([\s\S]*?)<\/cim:Priority.justification>/g, obj, "justification", base.to_string, sub, context);

            /**
             * Priority level; usually, lower number means high priority, but the details are provided in 'type'.
             *
             */
            base.parse_element (/<cim:Priority.rank>([\s\S]*?)<\/cim:Priority.rank>/g, obj, "rank", base.to_string, sub, context);

            /**
             * Type describing 'rank'; e.g., high, emergency, etc.
             *
             */
            base.parse_element (/<cim:Priority.type>([\s\S]*?)<\/cim:Priority.type>/g, obj, "type", base.to_string, sub, context);

            bucket = context.parsed.Priority;
            if (null == bucket)
                context.parsed.Priority = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Absolute date and time for this time point.
             *
             * For calendar-based time point, it is typically manually entered, while for interval-based or sequence-based time point it is derived.
             *
             */
            base.parse_element (/<cim:TimePoint.dateTime>([\s\S]*?)<\/cim:TimePoint.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);

            /**
             * (if interval-based) A point in time relative to scheduled start time in 'TimeSchedule.scheduleInterval.start'.
             *
             */
            base.parse_element (/<cim:TimePoint.relativeTimeInterval>([\s\S]*?)<\/cim:TimePoint.relativeTimeInterval>/g, obj, "relativeTimeInterval", base.to_string, sub, context);

            /**
             * (if sequence-based) Relative sequence number for this time point.
             *
             */
            base.parse_element (/<cim:TimePoint.sequenceNumber>([\s\S]*?)<\/cim:TimePoint.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);

            /**
             * Status of this time point.
             *
             */
            base.parse_element (/<cim:TimePoint.status>([\s\S]*?)<\/cim:TimePoint.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Interval defining the window of time that this time point is valid (for example, seasonal, only on weekends, not on weekends, only 8:00 am to 5:00 pm, etc.).
             *
             */
            base.parse_element (/<cim:TimePoint.window>([\s\S]*?)<\/cim:TimePoint.window>/g, obj, "window", base.to_string, sub, context);

            /**
             * Time schedule owning this time point.
             *
             */
            base.parse_attribute (/<cim:TimePoint.TimeSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TimeSchedule", sub, context, true);

            bucket = context.parsed.TimePoint;
            if (null == bucket)
                context.parsed.TimePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Date and time this activity record has been created (different from the 'status.dateTime', which is the time of a status change of the associated object, if applicable).
             *
             */
            base.parse_element (/<cim:ActivityRecord.createdDateTime>([\s\S]*?)<\/cim:ActivityRecord.createdDateTime>/g, obj, "createdDateTime", base.to_datetime, sub, context);

            /**
             * Reason for event resulting in this activity record, typically supplied when user initiated.
             *
             */
            base.parse_element (/<cim:ActivityRecord.reason>([\s\S]*?)<\/cim:ActivityRecord.reason>/g, obj, "reason", base.to_string, sub, context);

            /**
             * Severity level of event resulting in this activity record.
             *
             */
            base.parse_element (/<cim:ActivityRecord.severity>([\s\S]*?)<\/cim:ActivityRecord.severity>/g, obj, "severity", base.to_string, sub, context);

            /**
             * Information on consequence of event resulting in this activity record.
             *
             */
            base.parse_element (/<cim:ActivityRecord.status>([\s\S]*?)<\/cim:ActivityRecord.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Type of event resulting in this activity record.
             *
             */
            base.parse_element (/<cim:ActivityRecord.type>([\s\S]*?)<\/cim:ActivityRecord.type>/g, obj, "type", base.to_string, sub, context);

            bucket = context.parsed.ActivityRecord;
            if (null == bucket)
                context.parsed.ActivityRecord = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Post office box.
             *
             */
            base.parse_element (/<cim:PostalAddress.poBox>([\s\S]*?)<\/cim:PostalAddress.poBox>/g, obj, "poBox", base.to_string, sub, context);

            /**
             * Postal code for the address.
             *
             */
            base.parse_element (/<cim:PostalAddress.postalCode>([\s\S]*?)<\/cim:PostalAddress.postalCode>/g, obj, "postalCode", base.to_string, sub, context);

            /**
             * Street detail.
             *
             */
            base.parse_element (/<cim:PostalAddress.streetDetail>([\s\S]*?)<\/cim:PostalAddress.streetDetail>/g, obj, "streetDetail", base.to_string, sub, context);

            /**
             * Town detail.
             *
             */
            base.parse_element (/<cim:PostalAddress.townDetail>([\s\S]*?)<\/cim:PostalAddress.townDetail>/g, obj, "townDetail", base.to_string, sub, context);

            bucket = context.parsed.PostalAddress;
            if (null == bucket)
                context.parsed.PostalAddress = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_PersonRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "PersonRole";
            /**
             * Person having this role.
             *
             */
            base.parse_attribute (/<cim:PersonRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Person", sub, context, true);

            bucket = context.parsed.PersonRole;
            if (null == bucket)
                context.parsed.PersonRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * A Uniform Resource Name (URN) for the coordinate reference system (crs) used to define 'Location.
             *
             * PositionPoints'.
             *
             */
            base.parse_element (/<cim:CoordinateSystem.crsUrn>([\s\S]*?)<\/cim:CoordinateSystem.crsUrn>/g, obj, "crsUrn", base.to_string, sub, context);

            bucket = context.parsed.CoordinateSystem;
            if (null == bucket)
                context.parsed.CoordinateSystem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Status of this hazard.
             *
             */
            base.parse_element (/<cim:Hazard.status>([\s\S]*?)<\/cim:Hazard.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Type of this hazard.
             *
             */
            base.parse_element (/<cim:Hazard.type>([\s\S]*?)<\/cim:Hazard.type>/g, obj, "type", base.to_string, sub, context);

            bucket = context.parsed.Hazard;
            if (null == bucket)
                context.parsed.Hazard = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Town code.
             *
             */
            base.parse_element (/<cim:TownDetail.code>([\s\S]*?)<\/cim:TownDetail.code>/g, obj, "code", base.to_string, sub, context);

            /**
             * Name of the country.
             *
             */
            base.parse_element (/<cim:TownDetail.country>([\s\S]*?)<\/cim:TownDetail.country>/g, obj, "country", base.to_string, sub, context);

            /**
             * Town name.
             *
             */
            base.parse_element (/<cim:TownDetail.name>([\s\S]*?)<\/cim:TownDetail.name>/g, obj, "name", base.to_string, sub, context);

            /**
             * Town section.
             *
             * For example, it is common for there to be 36 sections per township.
             *
             */
            base.parse_element (/<cim:TownDetail.section>([\s\S]*?)<\/cim:TownDetail.section>/g, obj, "section", base.to_string, sub, context);

            /**
             * Name of the state or province.
             *
             */
            base.parse_element (/<cim:TownDetail.stateOrProvince>([\s\S]*?)<\/cim:TownDetail.stateOrProvince>/g, obj, "stateOrProvince", base.to_string, sub, context);

            bucket = context.parsed.TownDetail;
            if (null == bucket)
                context.parsed.TownDetail = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Electronic address.
             *
             */
            base.parse_element (/<cim:Organisation.electronicAddress>([\s\S]*?)<\/cim:Organisation.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);

            /**
             * Phone number.
             *
             */
            base.parse_element (/<cim:Organisation.phone1>([\s\S]*?)<\/cim:Organisation.phone1>/g, obj, "phone1", base.to_string, sub, context);

            /**
             * Additional phone number.
             *
             */
            base.parse_element (/<cim:Organisation.phone2>([\s\S]*?)<\/cim:Organisation.phone2>/g, obj, "phone2", base.to_string, sub, context);

            /**
             * Postal address, potentially different than 'streetAddress' (e.g., another city).
             *
             */
            base.parse_element (/<cim:Organisation.postalAddress>([\s\S]*?)<\/cim:Organisation.postalAddress>/g, obj, "postalAddress", base.to_string, sub, context);

            /**
             * Street address.
             *
             */
            base.parse_element (/<cim:Organisation.streetAddress>([\s\S]*?)<\/cim:Organisation.streetAddress>/g, obj, "streetAddress", base.to_string, sub, context);

            bucket = context.parsed.Organisation;
            if (null == bucket)
                context.parsed.Organisation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * (if applicable) Direction that allows field crews to quickly find a given asset.
             *
             * For a given location, such as a street address, this is the relative direction in which to find the asset. For example, a streetlight may be located at the 'NW' (northwest) corner of the customer's site, or a usage point may be located on the second floor of an apartment building.
             *
             */
            base.parse_element (/<cim:Location.direction>([\s\S]*?)<\/cim:Location.direction>/g, obj, "direction", base.to_string, sub, context);

            /**
             * Electronic address.
             *
             */
            base.parse_element (/<cim:Location.electronicAddress>([\s\S]*?)<\/cim:Location.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);

            /**
             * (if applicable) Reference to geographical information source, often external to the utility.
             *
             */
            base.parse_element (/<cim:Location.geoInfoReference>([\s\S]*?)<\/cim:Location.geoInfoReference>/g, obj, "geoInfoReference", base.to_string, sub, context);

            /**
             * Main address of the location.
             *
             */
            base.parse_element (/<cim:Location.mainAddress>([\s\S]*?)<\/cim:Location.mainAddress>/g, obj, "mainAddress", base.to_string, sub, context);

            /**
             * Phone number.
             *
             */
            base.parse_element (/<cim:Location.phone1>([\s\S]*?)<\/cim:Location.phone1>/g, obj, "phone1", base.to_string, sub, context);

            /**
             * Additional phone number.
             *
             */
            base.parse_element (/<cim:Location.phone2>([\s\S]*?)<\/cim:Location.phone2>/g, obj, "phone2", base.to_string, sub, context);

            /**
             * Secondary address of the location.
             *
             * For example, PO Box address may have different ZIP code than that in the 'mainAddress'.
             *
             */
            base.parse_element (/<cim:Location.secondaryAddress>([\s\S]*?)<\/cim:Location.secondaryAddress>/g, obj, "secondaryAddress", base.to_string, sub, context);

            /**
             * Status of this location.
             *
             */
            base.parse_element (/<cim:Location.status>([\s\S]*?)<\/cim:Location.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * Classification by utility's corporate standards and practices, relative to the location itself (e.g., geographical, functional accounting, etc., not a given property that happens to exist at that location).
             *
             */
            base.parse_element (/<cim:Location.type>([\s\S]*?)<\/cim:Location.type>/g, obj, "type", base.to_string, sub, context);

            /**
             * Coordinate system used to describe position points of this location.
             *
             */
            base.parse_attribute (/<cim:Location.CoordinateSystem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CoordinateSystem", sub, context, true);

            bucket = context.parsed.Location;
            if (null == bucket)
                context.parsed.Location = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Share of this ownership.
             *
             */
            base.parse_element (/<cim:Ownership.share>([\s\S]*?)<\/cim:Ownership.share>/g, obj, "share", base.to_string, sub, context);

            /**
             * Asset owner that is subject in this ownership.
             *
             */
            base.parse_attribute (/<cim:Ownership.AssetOwner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetOwner", sub, context, true);

            /**
             * Asset that is object of this ownership.
             *
             */
            base.parse_attribute (/<cim:Ownership.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context, true);

            bucket = context.parsed.Ownership;
            if (null == bucket)
                context.parsed.Ownership = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Area or region code.
             *
             */
            base.parse_element (/<cim:TelephoneNumber.areaCode>([\s\S]*?)<\/cim:TelephoneNumber.areaCode>/g, obj, "areaCode", base.to_string, sub, context);

            /**
             * (if applicable) City code.
             *
             */
            base.parse_element (/<cim:TelephoneNumber.cityCode>([\s\S]*?)<\/cim:TelephoneNumber.cityCode>/g, obj, "cityCode", base.to_string, sub, context);

            /**
             * Country code.
             *
             */
            base.parse_element (/<cim:TelephoneNumber.countryCode>([\s\S]*?)<\/cim:TelephoneNumber.countryCode>/g, obj, "countryCode", base.to_string, sub, context);

            /**
             * (if applicable) Extension for this telephone number.
             *
             */
            base.parse_element (/<cim:TelephoneNumber.extension>([\s\S]*?)<\/cim:TelephoneNumber.extension>/g, obj, "extension", base.to_string, sub, context);

            /**
             * Main (local) part of this telephone number.
             *
             */
            base.parse_element (/<cim:TelephoneNumber.localNumber>([\s\S]*?)<\/cim:TelephoneNumber.localNumber>/g, obj, "localNumber", base.to_string, sub, context);

            bucket = context.parsed.TelephoneNumber;
            if (null == bucket)
                context.parsed.TelephoneNumber = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Zero-relative sequence number of this point within a series of points.
             *
             */
            base.parse_element (/<cim:PositionPoint.sequenceNumber>([\s\S]*?)<\/cim:PositionPoint.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);

            /**
             * X axis position.
             *
             */
            base.parse_element (/<cim:PositionPoint.xPosition>([\s\S]*?)<\/cim:PositionPoint.xPosition>/g, obj, "xPosition", base.to_string, sub, context);

            /**
             * Y axis position.
             *
             */
            base.parse_element (/<cim:PositionPoint.yPosition>([\s\S]*?)<\/cim:PositionPoint.yPosition>/g, obj, "yPosition", base.to_string, sub, context);

            /**
             * (if applicable) Z axis position.
             *
             */
            base.parse_element (/<cim:PositionPoint.zPosition>([\s\S]*?)<\/cim:PositionPoint.zPosition>/g, obj, "zPosition", base.to_string, sub, context);

            /**
             * Location described by this position point.
             *
             */
            base.parse_attribute (/<cim:PositionPoint.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context, true);

            bucket = context.parsed.PositionPoint;
            if (null == bucket)
                context.parsed.PositionPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Date and time this event has or will become effective.
             *
             */
            base.parse_element (/<cim:ConfigurationEvent.effectiveDateTime>([\s\S]*?)<\/cim:ConfigurationEvent.effectiveDateTime>/g, obj, "effectiveDateTime", base.to_datetime, sub, context);

            /**
             * Source/initiator of modification.
             *
             */
            base.parse_element (/<cim:ConfigurationEvent.modifiedBy>([\s\S]*?)<\/cim:ConfigurationEvent.modifiedBy>/g, obj, "modifiedBy", base.to_string, sub, context);

            /**
             * Free text remarks.
             *
             */
            base.parse_element (/<cim:ConfigurationEvent.remark>([\s\S]*?)<\/cim:ConfigurationEvent.remark>/g, obj, "remark", base.to_string, sub, context);

            /**
             * Person role whose change resulted in this configuration event.
             *
             */
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedPersonRole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedPersonRole", sub, context, true);

            /**
             * Organisation role whose change resulted in this configuration event.
             *
             */
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedOrganisationRole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedOrganisationRole", sub, context, true);

            /**
             * Asset whose change resulted in this configuration event.
             *
             */
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedAsset", sub, context, true);

            /**
             * Location whose change resulted in this configuration event.
             *
             */
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedLocation", sub, context, true);

            /**
             * Service category whose change resulted in this configuration event.
             *
             */
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedServiceCategory", sub, context, true);

            /**
             * Usage point whose change resulted in this configuration event.
             *
             */
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedUsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedUsagePoint", sub, context, true);

            /**
             * Document whose change resulted in this configuration event.
             *
             */
            base.parse_attribute (/<cim:ConfigurationEvent.ChangedDocument\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChangedDocument", sub, context, true);

            bucket = context.parsed.ConfigurationEvent;
            if (null == bucket)
                context.parsed.ConfigurationEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Name of an attribute.
             *
             */
            base.parse_element (/<cim:UserAttribute.name>([\s\S]*?)<\/cim:UserAttribute.name>/g, obj, "name", base.to_string, sub, context);

            /**
             * Sequence number for this attribute in a list of attributes.
             *
             */
            base.parse_element (/<cim:UserAttribute.sequenceNumber>([\s\S]*?)<\/cim:UserAttribute.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);

            /**
             * Value of an attribute, including unit information.
             *
             */
            base.parse_element (/<cim:UserAttribute.value>([\s\S]*?)<\/cim:UserAttribute.value>/g, obj, "value", base.to_string, sub, context);

            /**
             * Transaction for which this snapshot has been recorded.
             *
             */
            base.parse_attribute (/<cim:UserAttribute.Transaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Transaction", sub, context, true);

            base.parse_attribute (/<cim:UserAttribute.RatingSpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RatingSpecification", sub, context, true);

            base.parse_attribute (/<cim:UserAttribute.PropertySpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PropertySpecification", sub, context, true);

            bucket = context.parsed.UserAttribute;
            if (null == bucket)
                context.parsed.UserAttribute = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Estimated date and time for activity execution (with earliest possibility of activity initiation and latest possibility of activity completion).
             *
             */
            base.parse_element (/<cim:ScheduledEventData.estimatedWindow>([\s\S]*?)<\/cim:ScheduledEventData.estimatedWindow>/g, obj, "estimatedWindow", base.to_string, sub, context);

            /**
             * Requested date and time interval for activity execution.
             *
             */
            base.parse_element (/<cim:ScheduledEventData.requestedWindow>([\s\S]*?)<\/cim:ScheduledEventData.requestedWindow>/g, obj, "requestedWindow", base.to_string, sub, context);

            base.parse_element (/<cim:ScheduledEventData.status>([\s\S]*?)<\/cim:ScheduledEventData.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:ScheduledEventData.InspectionDataSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InspectionDataSet", sub, context, true);

            bucket = context.parsed.ScheduledEventData;
            if (null == bucket)
                context.parsed.ScheduledEventData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Date and time for which status 'value' applies.
             *
             */
            base.parse_element (/<cim:Status.dateTime>([\s\S]*?)<\/cim:Status.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);

            /**
             * Reason code or explanation for why an object went to the current status 'value'.
             *
             */
            base.parse_element (/<cim:Status.reason>([\s\S]*?)<\/cim:Status.reason>/g, obj, "reason", base.to_string, sub, context);

            /**
             * Pertinent information regarding the current 'value', as free form text.
             *
             */
            base.parse_element (/<cim:Status.remark>([\s\S]*?)<\/cim:Status.remark>/g, obj, "remark", base.to_string, sub, context);

            /**
             * Status value at 'dateTime'; prior status changes may have been kept in instances of activity records associated with the object to which this status applies.
             *
             */
            base.parse_element (/<cim:Status.value>([\s\S]*?)<\/cim:Status.value>/g, obj, "value", base.to_string, sub, context);

            bucket = context.parsed.Status;
            if (null == bucket)
                context.parsed.Status = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Electronic address.
             *
             */
            base.parse_element (/<cim:Person.electronicAddress>([\s\S]*?)<\/cim:Person.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);

            /**
             * Person's first name.
             *
             */
            base.parse_element (/<cim:Person.firstName>([\s\S]*?)<\/cim:Person.firstName>/g, obj, "firstName", base.to_string, sub, context);

            /**
             * Landline phone number.
             *
             */
            base.parse_element (/<cim:Person.landlinePhone>([\s\S]*?)<\/cim:Person.landlinePhone>/g, obj, "landlinePhone", base.to_string, sub, context);

            /**
             * Person's last (family, sir) name.
             *
             */
            base.parse_element (/<cim:Person.lastName>([\s\S]*?)<\/cim:Person.lastName>/g, obj, "lastName", base.to_string, sub, context);

            /**
             * Middle name(s) or initial(s).
             *
             */
            base.parse_element (/<cim:Person.mName>([\s\S]*?)<\/cim:Person.mName>/g, obj, "mName", base.to_string, sub, context);

            /**
             * Mobile phone number.
             *
             */
            base.parse_element (/<cim:Person.mobilePhone>([\s\S]*?)<\/cim:Person.mobilePhone>/g, obj, "mobilePhone", base.to_string, sub, context);

            /**
             * A prefix or title for the person's name, such as Miss, Mister, Doctor, etc.
             *
             */
            base.parse_element (/<cim:Person.prefix>([\s\S]*?)<\/cim:Person.prefix>/g, obj, "prefix", base.to_string, sub, context);

            /**
             * Special service needs for the person (contact) are described; examples include life support, etc.
             *
             */
            base.parse_element (/<cim:Person.specialNeed>([\s\S]*?)<\/cim:Person.specialNeed>/g, obj, "specialNeed", base.to_string, sub, context);

            /**
             * A suffix for the person's name, such as II, III, etc.
             *
             */
            base.parse_element (/<cim:Person.suffix>([\s\S]*?)<\/cim:Person.suffix>/g, obj, "suffix", base.to_string, sub, context);

            bucket = context.parsed.Person;
            if (null == bucket)
                context.parsed.Person = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * True if requested to call customer when someone is about to arrive at their premises.
             *
             */
            base.parse_element (/<cim:Appointment.callAhead>([\s\S]*?)<\/cim:Appointment.callAhead>/g, obj, "callAhead", base.to_boolean, sub, context);

            /**
             * Date and time reserved for appointment.
             *
             */
            base.parse_element (/<cim:Appointment.meetingInterval>([\s\S]*?)<\/cim:Appointment.meetingInterval>/g, obj, "meetingInterval", base.to_string, sub, context);

            bucket = context.parsed.Appointment;
            if (null == bucket)
                context.parsed.Appointment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Additional address information, for example a mailstop.
             *
             */
            base.parse_element (/<cim:StreetDetail.addressGeneral>([\s\S]*?)<\/cim:StreetDetail.addressGeneral>/g, obj, "addressGeneral", base.to_string, sub, context);

            /**
             * (if applicable) In certain cases the physical location of the place of interest does not have a direct point of entry from the street, but may be located inside a larger structure such as a building, complex, office block, apartment, etc.
             *
             */
            base.parse_element (/<cim:StreetDetail.buildingName>([\s\S]*?)<\/cim:StreetDetail.buildingName>/g, obj, "buildingName", base.to_string, sub, context);

            /**
             * (if applicable) Utilities often make use of external reference systems, such as those of the town-planner's department or surveyor general's mapping system, that allocate global reference codes to streets.
             *
             */
            base.parse_element (/<cim:StreetDetail.code>([\s\S]*?)<\/cim:StreetDetail.code>/g, obj, "code", base.to_string, sub, context);

            /**
             * Name of the street.
             *
             */
            base.parse_element (/<cim:StreetDetail.name>([\s\S]*?)<\/cim:StreetDetail.name>/g, obj, "name", base.to_string, sub, context);

            /**
             * Designator of the specific location on the street.
             *
             */
            base.parse_element (/<cim:StreetDetail.number>([\s\S]*?)<\/cim:StreetDetail.number>/g, obj, "number", base.to_string, sub, context);

            /**
             * Prefix to the street name.
             *
             * For example: North, South, East, West.
             *
             */
            base.parse_element (/<cim:StreetDetail.prefix>([\s\S]*?)<\/cim:StreetDetail.prefix>/g, obj, "prefix", base.to_string, sub, context);

            /**
             * Suffix to the street name.
             *
             * For example: North, South, East, West.
             *
             */
            base.parse_element (/<cim:StreetDetail.suffix>([\s\S]*?)<\/cim:StreetDetail.suffix>/g, obj, "suffix", base.to_string, sub, context);

            /**
             * Number of the apartment or suite.
             *
             */
            base.parse_element (/<cim:StreetDetail.suiteNumber>([\s\S]*?)<\/cim:StreetDetail.suiteNumber>/g, obj, "suiteNumber", base.to_string, sub, context);

            /**
             * Type of street.
             *
             * Examples include: street, circle, boulevard, avenue, road, drive, etc.
             *
             */
            base.parse_element (/<cim:StreetDetail.type>([\s\S]*?)<\/cim:StreetDetail.type>/g, obj, "type", base.to_string, sub, context);

            /**
             * True if this street is within the legal geographical boundaries of the specified town (default).
             *
             */
            base.parse_element (/<cim:StreetDetail.withinTownLimits>([\s\S]*?)<\/cim:StreetDetail.withinTownLimits>/g, obj, "withinTownLimits", base.to_boolean, sub, context);

            bucket = context.parsed.StreetDetail;
            if (null == bucket)
                context.parsed.StreetDetail = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ActivityRecord: parse_ActivityRecord,
                parse_OrganisationRole: parse_OrganisationRole,
                parse_Ownership: parse_Ownership,
                parse_StreetDetail: parse_StreetDetail,
                parse_ScheduledEvent: parse_ScheduledEvent,
                parse_PersonRole: parse_PersonRole,
                parse_CoordinateSystem: parse_CoordinateSystem,
                parse_UserAttribute: parse_UserAttribute,
                parse_Organisation: parse_Organisation,
                parse_Hazard: parse_Hazard,
                parse_StreetAddress: parse_StreetAddress,
                parse_Status: parse_Status,
                parse_PostalAddress: parse_PostalAddress,
                parse_PositionPoint: parse_PositionPoint,
                parse_CrewType: parse_CrewType,
                parse_TelephoneNumber: parse_TelephoneNumber,
                parse_TownDetail: parse_TownDetail,
                parse_ElectronicAddress: parse_ElectronicAddress,
                parse_Appointment: parse_Appointment,
                parse_OperationPersonRole: parse_OperationPersonRole,
                parse_Person: parse_Person,
                parse_Location: parse_Location,
                parse_Agreement: parse_Agreement,
                parse_Document: parse_Document,
                parse_CrewMember: parse_CrewMember,
                parse_Priority: parse_Priority,
                parse_Crew: parse_Crew,
                parse_ConfigurationEvent: parse_ConfigurationEvent,
                parse_Operator: parse_Operator,
                parse_TimeSchedule: parse_TimeSchedule,
                parse_TimePoint: parse_TimePoint,
                parse_ScheduledEventData: parse_ScheduledEventData
            }
        );
    }
);