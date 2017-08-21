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
            obj["Crew"] = base.parse_attribute (/<cim:CrewMember.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["authorName"] = base.parse_element (/<cim:Document.authorName>([\s\S]*?)<\/cim:Document.authorName>/g, sub, context, true);
            /**
             * Date and time that this document was created.
             *
             */
            obj["createdDateTime"] = base.to_datetime (base.parse_element (/<cim:Document.createdDateTime>([\s\S]*?)<\/cim:Document.createdDateTime>/g, sub, context, true));
            /**
             * Status of this document.
             *
             * For status of subject matter this document represents (e.g., Agreement, Work), use 'status' attribute.
             *
             */
            obj["docStatus"] = base.parse_element (/<cim:Document.docStatus>([\s\S]*?)<\/cim:Document.docStatus>/g, sub, context, true);
            /**
             * Electronic address.
             *
             */
            obj["electronicAddress"] = base.parse_element (/<cim:Document.electronicAddress>([\s\S]*?)<\/cim:Document.electronicAddress>/g, sub, context, true);
            /**
             * Date and time this document was last modified.
             *
             * Documents may potentially be modified many times during their lifetime.
             *
             */
            obj["lastModifiedDateTime"] = base.to_datetime (base.parse_element (/<cim:Document.lastModifiedDateTime>([\s\S]*?)<\/cim:Document.lastModifiedDateTime>/g, sub, context, true));
            /**
             * Revision number for this document.
             *
             */
            obj["revisionNumber"] = base.parse_element (/<cim:Document.revisionNumber>([\s\S]*?)<\/cim:Document.revisionNumber>/g, sub, context, true);
            /**
             * Status of subject matter (e.g., Agreement, Work) this document represents.
             *
             * For status of the document itself, use 'docStatus' attribute.
             *
             */
            obj["status"] = base.parse_element (/<cim:Document.status>([\s\S]*?)<\/cim:Document.status>/g, sub, context, true);
            /**
             * Document subject.
             *
             */
            obj["subject"] = base.parse_element (/<cim:Document.subject>([\s\S]*?)<\/cim:Document.subject>/g, sub, context, true);
            /**
             * Document title.
             *
             */
            obj["title"] = base.parse_element (/<cim:Document.title>([\s\S]*?)<\/cim:Document.title>/g, sub, context, true);
            /**
             * Utility-specific classification of this document, according to its corporate standards, practices, and existing IT systems (e.g., for management of assets, maintenance, work, outage, customers, etc.).
             *
             */
            obj["type"] = base.parse_element (/<cim:Document.type>([\s\S]*?)<\/cim:Document.type>/g, sub, context, true);
            /**
             * Free text comment.
             *
             */
            obj["comment"] = base.parse_element (/<cim:Document.comment>([\s\S]*?)<\/cim:Document.comment>/g, sub, context, true);
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
            obj["status"] = base.parse_element (/<cim:StreetAddress.status>([\s\S]*?)<\/cim:StreetAddress.status>/g, sub, context, true);
            /**
             * Street detail.
             *
             */
            obj["streetDetail"] = base.parse_element (/<cim:StreetAddress.streetDetail>([\s\S]*?)<\/cim:StreetAddress.streetDetail>/g, sub, context, true);
            /**
             * Town detail.
             *
             */
            obj["townDetail"] = base.parse_element (/<cim:StreetAddress.townDetail>([\s\S]*?)<\/cim:StreetAddress.townDetail>/g, sub, context, true);
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
            obj["Organisation"] = base.parse_attribute (/<cim:OrganisationRole.Organisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["email1"] = base.parse_element (/<cim:ElectronicAddress.email1>([\s\S]*?)<\/cim:ElectronicAddress.email1>/g, sub, context, true);
            /**
             * Alternate email address.
             *
             */
            obj["email2"] = base.parse_element (/<cim:ElectronicAddress.email2>([\s\S]*?)<\/cim:ElectronicAddress.email2>/g, sub, context, true);
            /**
             * Address on local area network.
             *
             */
            obj["lan"] = base.parse_element (/<cim:ElectronicAddress.lan>([\s\S]*?)<\/cim:ElectronicAddress.lan>/g, sub, context, true);
            /**
             * MAC (Media Access Control) address.
             *
             */
            obj["mac"] = base.parse_element (/<cim:ElectronicAddress.mac>([\s\S]*?)<\/cim:ElectronicAddress.mac>/g, sub, context, true);
            /**
             * Password needed to log in.
             *
             */
            obj["password"] = base.parse_element (/<cim:ElectronicAddress.password>([\s\S]*?)<\/cim:ElectronicAddress.password>/g, sub, context, true);
            /**
             * Radio address.
             *
             */
            obj["radio"] = base.parse_element (/<cim:ElectronicAddress.radio>([\s\S]*?)<\/cim:ElectronicAddress.radio>/g, sub, context, true);
            /**
             * User ID needed to log in, which can be for an individual person, an organisation, a location, etc.
             *
             */
            obj["userID"] = base.parse_element (/<cim:ElectronicAddress.userID>([\s\S]*?)<\/cim:ElectronicAddress.userID>/g, sub, context, true);
            /**
             * World wide web address.
             *
             */
            obj["web"] = base.parse_element (/<cim:ElectronicAddress.web>([\s\S]*?)<\/cim:ElectronicAddress.web>/g, sub, context, true);
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
            obj["status"] = base.parse_element (/<cim:Crew.status>([\s\S]*?)<\/cim:Crew.status>/g, sub, context, true);
            /**
             * Type of this crew.
             *
             */
            obj["CrewType"] = base.parse_attribute (/<cim:Crew.CrewType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["disabled"] = base.to_boolean (base.parse_element (/<cim:TimeSchedule.disabled>([\s\S]*?)<\/cim:TimeSchedule.disabled>/g, sub, context, true));
            /**
             * The offset from midnight (i.e., 0 h, 0 min, 0 s) for the periodic time points to begin.
             *
             * For example, for an interval meter that is set up for five minute intervals ('recurrencePeriod'=300=5 min), setting 'offset'=120=2 min would result in scheduled events to read the meter executing at 2 min, 7 min, 12 min, 17 min, 22 min, 27 min, 32 min, 37 min, 42 min, 47 min, 52 min, and 57 min past each hour.
             *
             */
            obj["offset"] = base.parse_element (/<cim:TimeSchedule.offset>([\s\S]*?)<\/cim:TimeSchedule.offset>/g, sub, context, true);
            /**
             * Interval at which the scheduled action repeats (e.g., first Monday of every month, last day of the month, etc.).
             *
             */
            obj["recurrencePattern"] = base.parse_element (/<cim:TimeSchedule.recurrencePattern>([\s\S]*?)<\/cim:TimeSchedule.recurrencePattern>/g, sub, context, true);
            /**
             * Duration between time points, from the beginning of one period to the beginning of the next period.
             *
             * Note that a device like a meter may have multiple interval periods (e.g., 1 min, 5 min, 15 min, 30 min, or 60 min).
             *
             */
            obj["recurrencePeriod"] = base.parse_element (/<cim:TimeSchedule.recurrencePeriod>([\s\S]*?)<\/cim:TimeSchedule.recurrencePeriod>/g, sub, context, true);
            /**
             * Schedule date and time interval.
             *
             */
            obj["scheduleInterval"] = base.parse_element (/<cim:TimeSchedule.scheduleInterval>([\s\S]*?)<\/cim:TimeSchedule.scheduleInterval>/g, sub, context, true);
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
            obj["signDate"] = base.parse_element (/<cim:Agreement.signDate>([\s\S]*?)<\/cim:Agreement.signDate>/g, sub, context, true);
            /**
             * Date and time interval this agreement is valid (from going into effect to termination).
             *
             */
            obj["validityInterval"] = base.parse_element (/<cim:Agreement.validityInterval>([\s\S]*?)<\/cim:Agreement.validityInterval>/g, sub, context, true);
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
            obj["duration"] = base.parse_element (/<cim:ScheduledEvent.duration>([\s\S]*?)<\/cim:ScheduledEvent.duration>/g, sub, context, true);
            obj["status"] = base.parse_element (/<cim:ScheduledEvent.status>([\s\S]*?)<\/cim:ScheduledEvent.status>/g, sub, context, true);
            /**
             * Type of scheduled event.
             *
             */
            obj["type"] = base.parse_element (/<cim:ScheduledEvent.type>([\s\S]*?)<\/cim:ScheduledEvent.type>/g, sub, context, true);
            /**
             * Specification for this scheduled event.
             *
             */
            obj["ScheduledEventData"] = base.parse_attribute (/<cim:ScheduledEvent.ScheduledEventData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["justification"] = base.parse_element (/<cim:Priority.justification>([\s\S]*?)<\/cim:Priority.justification>/g, sub, context, true);
            /**
             * Priority level; usually, lower number means high priority, but the details are provided in 'type'.
             *
             */
            obj["rank"] = base.parse_element (/<cim:Priority.rank>([\s\S]*?)<\/cim:Priority.rank>/g, sub, context, true);
            /**
             * Type describing 'rank'; e.g., high, emergency, etc.
             *
             */
            obj["type"] = base.parse_element (/<cim:Priority.type>([\s\S]*?)<\/cim:Priority.type>/g, sub, context, true);
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
            obj["dateTime"] = base.to_datetime (base.parse_element (/<cim:TimePoint.dateTime>([\s\S]*?)<\/cim:TimePoint.dateTime>/g, sub, context, true));
            /**
             * (if interval-based) A point in time relative to scheduled start time in 'TimeSchedule.scheduleInterval.start'.
             *
             */
            obj["relativeTimeInterval"] = base.parse_element (/<cim:TimePoint.relativeTimeInterval>([\s\S]*?)<\/cim:TimePoint.relativeTimeInterval>/g, sub, context, true);
            /**
             * (if sequence-based) Relative sequence number for this time point.
             *
             */
            obj["sequenceNumber"] = base.parse_element (/<cim:TimePoint.sequenceNumber>([\s\S]*?)<\/cim:TimePoint.sequenceNumber>/g, sub, context, true);
            /**
             * Status of this time point.
             *
             */
            obj["status"] = base.parse_element (/<cim:TimePoint.status>([\s\S]*?)<\/cim:TimePoint.status>/g, sub, context, true);
            /**
             * Interval defining the window of time that this time point is valid (for example, seasonal, only on weekends, not on weekends, only 8:00 am to 5:00 pm, etc.).
             *
             */
            obj["window"] = base.parse_element (/<cim:TimePoint.window>([\s\S]*?)<\/cim:TimePoint.window>/g, sub, context, true);
            /**
             * Time schedule owning this time point.
             *
             */
            obj["TimeSchedule"] = base.parse_attribute (/<cim:TimePoint.TimeSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["createdDateTime"] = base.to_datetime (base.parse_element (/<cim:ActivityRecord.createdDateTime>([\s\S]*?)<\/cim:ActivityRecord.createdDateTime>/g, sub, context, true));
            /**
             * Reason for event resulting in this activity record, typically supplied when user initiated.
             *
             */
            obj["reason"] = base.parse_element (/<cim:ActivityRecord.reason>([\s\S]*?)<\/cim:ActivityRecord.reason>/g, sub, context, true);
            /**
             * Severity level of event resulting in this activity record.
             *
             */
            obj["severity"] = base.parse_element (/<cim:ActivityRecord.severity>([\s\S]*?)<\/cim:ActivityRecord.severity>/g, sub, context, true);
            /**
             * Information on consequence of event resulting in this activity record.
             *
             */
            obj["status"] = base.parse_element (/<cim:ActivityRecord.status>([\s\S]*?)<\/cim:ActivityRecord.status>/g, sub, context, true);
            /**
             * Type of event resulting in this activity record.
             *
             */
            obj["type"] = base.parse_element (/<cim:ActivityRecord.type>([\s\S]*?)<\/cim:ActivityRecord.type>/g, sub, context, true);
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
            obj["poBox"] = base.parse_element (/<cim:PostalAddress.poBox>([\s\S]*?)<\/cim:PostalAddress.poBox>/g, sub, context, true);
            /**
             * Postal code for the address.
             *
             */
            obj["postalCode"] = base.parse_element (/<cim:PostalAddress.postalCode>([\s\S]*?)<\/cim:PostalAddress.postalCode>/g, sub, context, true);
            /**
             * Street detail.
             *
             */
            obj["streetDetail"] = base.parse_element (/<cim:PostalAddress.streetDetail>([\s\S]*?)<\/cim:PostalAddress.streetDetail>/g, sub, context, true);
            /**
             * Town detail.
             *
             */
            obj["townDetail"] = base.parse_element (/<cim:PostalAddress.townDetail>([\s\S]*?)<\/cim:PostalAddress.townDetail>/g, sub, context, true);
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
            obj["Person"] = base.parse_attribute (/<cim:PersonRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["crsUrn"] = base.parse_element (/<cim:CoordinateSystem.crsUrn>([\s\S]*?)<\/cim:CoordinateSystem.crsUrn>/g, sub, context, true);
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
            obj["status"] = base.parse_element (/<cim:Hazard.status>([\s\S]*?)<\/cim:Hazard.status>/g, sub, context, true);
            /**
             * Type of this hazard.
             *
             */
            obj["type"] = base.parse_element (/<cim:Hazard.type>([\s\S]*?)<\/cim:Hazard.type>/g, sub, context, true);
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
            obj["code"] = base.parse_element (/<cim:TownDetail.code>([\s\S]*?)<\/cim:TownDetail.code>/g, sub, context, true);
            /**
             * Name of the country.
             *
             */
            obj["country"] = base.parse_element (/<cim:TownDetail.country>([\s\S]*?)<\/cim:TownDetail.country>/g, sub, context, true);
            /**
             * Town name.
             *
             */
            obj["name"] = base.parse_element (/<cim:TownDetail.name>([\s\S]*?)<\/cim:TownDetail.name>/g, sub, context, true);
            /**
             * Town section.
             *
             * For example, it is common for there to be 36 sections per township.
             *
             */
            obj["section"] = base.parse_element (/<cim:TownDetail.section>([\s\S]*?)<\/cim:TownDetail.section>/g, sub, context, true);
            /**
             * Name of the state or province.
             *
             */
            obj["stateOrProvince"] = base.parse_element (/<cim:TownDetail.stateOrProvince>([\s\S]*?)<\/cim:TownDetail.stateOrProvince>/g, sub, context, true);
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
            obj["electronicAddress"] = base.parse_element (/<cim:Organisation.electronicAddress>([\s\S]*?)<\/cim:Organisation.electronicAddress>/g, sub, context, true);
            /**
             * Phone number.
             *
             */
            obj["phone1"] = base.parse_element (/<cim:Organisation.phone1>([\s\S]*?)<\/cim:Organisation.phone1>/g, sub, context, true);
            /**
             * Additional phone number.
             *
             */
            obj["phone2"] = base.parse_element (/<cim:Organisation.phone2>([\s\S]*?)<\/cim:Organisation.phone2>/g, sub, context, true);
            /**
             * Postal address, potentially different than 'streetAddress' (e.g., another city).
             *
             */
            obj["postalAddress"] = base.parse_element (/<cim:Organisation.postalAddress>([\s\S]*?)<\/cim:Organisation.postalAddress>/g, sub, context, true);
            /**
             * Street address.
             *
             */
            obj["streetAddress"] = base.parse_element (/<cim:Organisation.streetAddress>([\s\S]*?)<\/cim:Organisation.streetAddress>/g, sub, context, true);
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
            obj["direction"] = base.parse_element (/<cim:Location.direction>([\s\S]*?)<\/cim:Location.direction>/g, sub, context, true);
            /**
             * Electronic address.
             *
             */
            obj["electronicAddress"] = base.parse_element (/<cim:Location.electronicAddress>([\s\S]*?)<\/cim:Location.electronicAddress>/g, sub, context, true);
            /**
             * (if applicable) Reference to geographical information source, often external to the utility.
             *
             */
            obj["geoInfoReference"] = base.parse_element (/<cim:Location.geoInfoReference>([\s\S]*?)<\/cim:Location.geoInfoReference>/g, sub, context, true);
            /**
             * Main address of the location.
             *
             */
            obj["mainAddress"] = base.parse_element (/<cim:Location.mainAddress>([\s\S]*?)<\/cim:Location.mainAddress>/g, sub, context, true);
            /**
             * Phone number.
             *
             */
            obj["phone1"] = base.parse_element (/<cim:Location.phone1>([\s\S]*?)<\/cim:Location.phone1>/g, sub, context, true);
            /**
             * Additional phone number.
             *
             */
            obj["phone2"] = base.parse_element (/<cim:Location.phone2>([\s\S]*?)<\/cim:Location.phone2>/g, sub, context, true);
            /**
             * Secondary address of the location.
             *
             * For example, PO Box address may have different ZIP code than that in the 'mainAddress'.
             *
             */
            obj["secondaryAddress"] = base.parse_element (/<cim:Location.secondaryAddress>([\s\S]*?)<\/cim:Location.secondaryAddress>/g, sub, context, true);
            /**
             * Status of this location.
             *
             */
            obj["status"] = base.parse_element (/<cim:Location.status>([\s\S]*?)<\/cim:Location.status>/g, sub, context, true);
            /**
             * Classification by utility's corporate standards and practices, relative to the location itself (e.g., geographical, functional accounting, etc., not a given property that happens to exist at that location).
             *
             */
            obj["type"] = base.parse_element (/<cim:Location.type>([\s\S]*?)<\/cim:Location.type>/g, sub, context, true);
            /**
             * Coordinate system used to describe position points of this location.
             *
             */
            obj["CoordinateSystem"] = base.parse_attribute (/<cim:Location.CoordinateSystem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["share"] = base.parse_element (/<cim:Ownership.share>([\s\S]*?)<\/cim:Ownership.share>/g, sub, context, true);
            /**
             * Asset owner that is subject in this ownership.
             *
             */
            obj["AssetOwner"] = base.parse_attribute (/<cim:Ownership.AssetOwner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Asset that is object of this ownership.
             *
             */
            obj["Asset"] = base.parse_attribute (/<cim:Ownership.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["areaCode"] = base.parse_element (/<cim:TelephoneNumber.areaCode>([\s\S]*?)<\/cim:TelephoneNumber.areaCode>/g, sub, context, true);
            /**
             * (if applicable) City code.
             *
             */
            obj["cityCode"] = base.parse_element (/<cim:TelephoneNumber.cityCode>([\s\S]*?)<\/cim:TelephoneNumber.cityCode>/g, sub, context, true);
            /**
             * Country code.
             *
             */
            obj["countryCode"] = base.parse_element (/<cim:TelephoneNumber.countryCode>([\s\S]*?)<\/cim:TelephoneNumber.countryCode>/g, sub, context, true);
            /**
             * (if applicable) Extension for this telephone number.
             *
             */
            obj["extension"] = base.parse_element (/<cim:TelephoneNumber.extension>([\s\S]*?)<\/cim:TelephoneNumber.extension>/g, sub, context, true);
            /**
             * Main (local) part of this telephone number.
             *
             */
            obj["localNumber"] = base.parse_element (/<cim:TelephoneNumber.localNumber>([\s\S]*?)<\/cim:TelephoneNumber.localNumber>/g, sub, context, true);
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
            obj["sequenceNumber"] = base.parse_element (/<cim:PositionPoint.sequenceNumber>([\s\S]*?)<\/cim:PositionPoint.sequenceNumber>/g, sub, context, true);
            /**
             * X axis position.
             *
             */
            obj["xPosition"] = base.parse_element (/<cim:PositionPoint.xPosition>([\s\S]*?)<\/cim:PositionPoint.xPosition>/g, sub, context, true);
            /**
             * Y axis position.
             *
             */
            obj["yPosition"] = base.parse_element (/<cim:PositionPoint.yPosition>([\s\S]*?)<\/cim:PositionPoint.yPosition>/g, sub, context, true);
            /**
             * (if applicable) Z axis position.
             *
             */
            obj["zPosition"] = base.parse_element (/<cim:PositionPoint.zPosition>([\s\S]*?)<\/cim:PositionPoint.zPosition>/g, sub, context, true);
            /**
             * Location described by this position point.
             *
             */
            obj["Location"] = base.parse_attribute (/<cim:PositionPoint.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["effectiveDateTime"] = base.to_datetime (base.parse_element (/<cim:ConfigurationEvent.effectiveDateTime>([\s\S]*?)<\/cim:ConfigurationEvent.effectiveDateTime>/g, sub, context, true));
            /**
             * Source/initiator of modification.
             *
             */
            obj["modifiedBy"] = base.parse_element (/<cim:ConfigurationEvent.modifiedBy>([\s\S]*?)<\/cim:ConfigurationEvent.modifiedBy>/g, sub, context, true);
            /**
             * Free text remarks.
             *
             */
            obj["remark"] = base.parse_element (/<cim:ConfigurationEvent.remark>([\s\S]*?)<\/cim:ConfigurationEvent.remark>/g, sub, context, true);
            /**
             * Person role whose change resulted in this configuration event.
             *
             */
            obj["ChangedPersonRole"] = base.parse_attribute (/<cim:ConfigurationEvent.ChangedPersonRole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Organisation role whose change resulted in this configuration event.
             *
             */
            obj["ChangedOrganisationRole"] = base.parse_attribute (/<cim:ConfigurationEvent.ChangedOrganisationRole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Asset whose change resulted in this configuration event.
             *
             */
            obj["ChangedAsset"] = base.parse_attribute (/<cim:ConfigurationEvent.ChangedAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Location whose change resulted in this configuration event.
             *
             */
            obj["ChangedLocation"] = base.parse_attribute (/<cim:ConfigurationEvent.ChangedLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Service category whose change resulted in this configuration event.
             *
             */
            obj["ChangedServiceCategory"] = base.parse_attribute (/<cim:ConfigurationEvent.ChangedServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Usage point whose change resulted in this configuration event.
             *
             */
            obj["ChangedUsagePoint"] = base.parse_attribute (/<cim:ConfigurationEvent.ChangedUsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Document whose change resulted in this configuration event.
             *
             */
            obj["ChangedDocument"] = base.parse_attribute (/<cim:ConfigurationEvent.ChangedDocument\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["name"] = base.parse_element (/<cim:UserAttribute.name>([\s\S]*?)<\/cim:UserAttribute.name>/g, sub, context, true);
            /**
             * Sequence number for this attribute in a list of attributes.
             *
             */
            obj["sequenceNumber"] = base.parse_element (/<cim:UserAttribute.sequenceNumber>([\s\S]*?)<\/cim:UserAttribute.sequenceNumber>/g, sub, context, true);
            /**
             * Value of an attribute, including unit information.
             *
             */
            obj["value"] = base.parse_element (/<cim:UserAttribute.value>([\s\S]*?)<\/cim:UserAttribute.value>/g, sub, context, true);
            /**
             * Transaction for which this snapshot has been recorded.
             *
             */
            obj["Transaction"] = base.parse_attribute (/<cim:UserAttribute.Transaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["RatingSpecification"] = base.parse_attribute (/<cim:UserAttribute.RatingSpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["PropertySpecification"] = base.parse_attribute (/<cim:UserAttribute.PropertySpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["estimatedWindow"] = base.parse_element (/<cim:ScheduledEventData.estimatedWindow>([\s\S]*?)<\/cim:ScheduledEventData.estimatedWindow>/g, sub, context, true);
            /**
             * Requested date and time interval for activity execution.
             *
             */
            obj["requestedWindow"] = base.parse_element (/<cim:ScheduledEventData.requestedWindow>([\s\S]*?)<\/cim:ScheduledEventData.requestedWindow>/g, sub, context, true);
            obj["status"] = base.parse_element (/<cim:ScheduledEventData.status>([\s\S]*?)<\/cim:ScheduledEventData.status>/g, sub, context, true);
            obj["InspectionDataSet"] = base.parse_attribute (/<cim:ScheduledEventData.InspectionDataSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
            obj["dateTime"] = base.to_datetime (base.parse_element (/<cim:Status.dateTime>([\s\S]*?)<\/cim:Status.dateTime>/g, sub, context, true));
            /**
             * Reason code or explanation for why an object went to the current status 'value'.
             *
             */
            obj["reason"] = base.parse_element (/<cim:Status.reason>([\s\S]*?)<\/cim:Status.reason>/g, sub, context, true);
            /**
             * Pertinent information regarding the current 'value', as free form text.
             *
             */
            obj["remark"] = base.parse_element (/<cim:Status.remark>([\s\S]*?)<\/cim:Status.remark>/g, sub, context, true);
            /**
             * Status value at 'dateTime'; prior status changes may have been kept in instances of activity records associated with the object to which this status applies.
             *
             */
            obj["value"] = base.parse_element (/<cim:Status.value>([\s\S]*?)<\/cim:Status.value>/g, sub, context, true);
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
            obj["electronicAddress"] = base.parse_element (/<cim:Person.electronicAddress>([\s\S]*?)<\/cim:Person.electronicAddress>/g, sub, context, true);
            /**
             * Person's first name.
             *
             */
            obj["firstName"] = base.parse_element (/<cim:Person.firstName>([\s\S]*?)<\/cim:Person.firstName>/g, sub, context, true);
            /**
             * Landline phone number.
             *
             */
            obj["landlinePhone"] = base.parse_element (/<cim:Person.landlinePhone>([\s\S]*?)<\/cim:Person.landlinePhone>/g, sub, context, true);
            /**
             * Person's last (family, sir) name.
             *
             */
            obj["lastName"] = base.parse_element (/<cim:Person.lastName>([\s\S]*?)<\/cim:Person.lastName>/g, sub, context, true);
            /**
             * Middle name(s) or initial(s).
             *
             */
            obj["mName"] = base.parse_element (/<cim:Person.mName>([\s\S]*?)<\/cim:Person.mName>/g, sub, context, true);
            /**
             * Mobile phone number.
             *
             */
            obj["mobilePhone"] = base.parse_element (/<cim:Person.mobilePhone>([\s\S]*?)<\/cim:Person.mobilePhone>/g, sub, context, true);
            /**
             * A prefix or title for the person's name, such as Miss, Mister, Doctor, etc.
             *
             */
            obj["prefix"] = base.parse_element (/<cim:Person.prefix>([\s\S]*?)<\/cim:Person.prefix>/g, sub, context, true);
            /**
             * Special service needs for the person (contact) are described; examples include life support, etc.
             *
             */
            obj["specialNeed"] = base.parse_element (/<cim:Person.specialNeed>([\s\S]*?)<\/cim:Person.specialNeed>/g, sub, context, true);
            /**
             * A suffix for the person's name, such as II, III, etc.
             *
             */
            obj["suffix"] = base.parse_element (/<cim:Person.suffix>([\s\S]*?)<\/cim:Person.suffix>/g, sub, context, true);
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
            obj["callAhead"] = base.to_boolean (base.parse_element (/<cim:Appointment.callAhead>([\s\S]*?)<\/cim:Appointment.callAhead>/g, sub, context, true));
            /**
             * Date and time reserved for appointment.
             *
             */
            obj["meetingInterval"] = base.parse_element (/<cim:Appointment.meetingInterval>([\s\S]*?)<\/cim:Appointment.meetingInterval>/g, sub, context, true);
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
            obj["addressGeneral"] = base.parse_element (/<cim:StreetDetail.addressGeneral>([\s\S]*?)<\/cim:StreetDetail.addressGeneral>/g, sub, context, true);
            /**
             * (if applicable) In certain cases the physical location of the place of interest does not have a direct point of entry from the street, but may be located inside a larger structure such as a building, complex, office block, apartment, etc.
             *
             */
            obj["buildingName"] = base.parse_element (/<cim:StreetDetail.buildingName>([\s\S]*?)<\/cim:StreetDetail.buildingName>/g, sub, context, true);
            /**
             * (if applicable) Utilities often make use of external reference systems, such as those of the town-planner's department or surveyor general's mapping system, that allocate global reference codes to streets.
             *
             */
            obj["code"] = base.parse_element (/<cim:StreetDetail.code>([\s\S]*?)<\/cim:StreetDetail.code>/g, sub, context, true);
            /**
             * Name of the street.
             *
             */
            obj["name"] = base.parse_element (/<cim:StreetDetail.name>([\s\S]*?)<\/cim:StreetDetail.name>/g, sub, context, true);
            /**
             * Designator of the specific location on the street.
             *
             */
            obj["number"] = base.parse_element (/<cim:StreetDetail.number>([\s\S]*?)<\/cim:StreetDetail.number>/g, sub, context, true);
            /**
             * Prefix to the street name.
             *
             * For example: North, South, East, West.
             *
             */
            obj["prefix"] = base.parse_element (/<cim:StreetDetail.prefix>([\s\S]*?)<\/cim:StreetDetail.prefix>/g, sub, context, true);
            /**
             * Suffix to the street name.
             *
             * For example: North, South, East, West.
             *
             */
            obj["suffix"] = base.parse_element (/<cim:StreetDetail.suffix>([\s\S]*?)<\/cim:StreetDetail.suffix>/g, sub, context, true);
            /**
             * Number of the apartment or suite.
             *
             */
            obj["suiteNumber"] = base.parse_element (/<cim:StreetDetail.suiteNumber>([\s\S]*?)<\/cim:StreetDetail.suiteNumber>/g, sub, context, true);
            /**
             * Type of street.
             *
             * Examples include: street, circle, boulevard, avenue, road, drive, etc.
             *
             */
            obj["type"] = base.parse_element (/<cim:StreetDetail.type>([\s\S]*?)<\/cim:StreetDetail.type>/g, sub, context, true);
            /**
             * True if this street is within the legal geographical boundaries of the specified town (default).
             *
             */
            obj["withinTownLimits"] = base.to_boolean (base.parse_element (/<cim:StreetDetail.withinTownLimits>([\s\S]*?)<\/cim:StreetDetail.withinTownLimits>/g, sub, context, true));
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