/**
 * @fileOverview Package Common CIM model.
 * @name model/common
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    ["model/base", "model/core"],
    /**
     * @summary Package Common CIM model.
     * @description
     * @name model/common
     * @exports model/common
     * @version 1.0
     */
    function (base, core)
    {
        /*
         * Package Common
         */

        /**
         * Parse an ActivityRecord.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ActivityRecord - the list of ActivityRecord elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_ActivityRecord (context, sub)
        {
            var obj;
            var records;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "ActivityRecord";
            obj.createdDateTime = base.parse_element (/<cim:ActivityRecord.createdDateTime>([\s\S]*?)<\/cim:ActivityRecord.createdDateTime>/g, sub, context, true);
            obj.reason = base.parse_element (/<cim:ActivityRecord.reason>([\s\S]*?)<\/cim:ActivityRecord.reason>/g, sub, context, true);
            obj.severity = base.parse_element (/<cim:ActivityRecord.severity>([\s\S]*?)<\/cim:ActivityRecord.severity>/g, sub, context, true);
            obj.type = base.parse_element (/<cim:ActivityRecord.type>([\s\S]*?)<\/cim:ActivityRecord.type>/g, sub, context, true);
            obj.status = base.parse_attribute (/<cim:ActivityRecord.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            records = context.parsed.ActivityRecord;
            if (null == records)
                context.parsed.ActivityRecord = records = {};
            records[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an Agreement.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Agreement - the list of Agreement elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_Agreement (context, sub)
        {
            var obj;
            var agreements;

            obj = parse_Document (context, sub);
            obj.cls = "Agreement";
            obj.signDate = base.parse_element (/<cim:Agreement.signDate>([\s\S]*?)<\/cim:Agreement.signDate>/g, sub, context, true);
            obj.validityInterval = base.parse_attribute (/<cim:Agreement.validityInterval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            agreements = context.parsed.Agreement;
            if (null == agreements)
                context.parsed.Agreement = agreements = {};
            agreements[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an Appointment.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Appointment - the list of Appointment elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_Appointment (context, sub)
        {
            var obj;
            var appointments;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "Appointment";
            obj.callAhead = base.parse_element (/<cim:Appointment.callAhead>([\s\S]*?)<\/cim:Appointment.callAhead>/g, sub, context, true);
            obj.meetingInterval = base.parse_attribute (/<cim:Appointment.meetingInterval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            appointments = context.parsed.Appointment;
            if (null == appointments)
                context.parsed.Appointment = appointments = {};
            appointments[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ConfigurationEvent.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ConfigurationEvent - the list of ConfigurationEvent elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_ConfigurationEvent  (context, sub)
        {
            var obj;
            var events;

            obj = parse_ActivityRecord (context, sub);
            obj.cls = "ConfigurationEvent";
            obj.effectiveDateTime = base.parse_element (/<cim:ConfigurationEvent.effectiveDateTime>([\s\S]*?)<\/cim:ConfigurationEvent.effectiveDateTime>/g, sub, context, true);
            obj.modifiedBy = base.parse_element (/<cim:ConfigurationEvent.modifiedBy>([\s\S]*?)<\/cim:ConfigurationEvent.modifiedBy>/g, sub, context, true);
            obj.remark = base.parse_element (/<cim:ConfigurationEvent.remark>([\s\S]*?)<\/cim:ConfigurationEvent.remark>/g, sub, context, true);
            obj.ChangedAsset = base.parse_attribute (/<cim:ConfigurationEvent.ChangedAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ChangedDocument = base.parse_attribute (/<cim:ConfigurationEvent.ChangedDocument\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ChangedLocation = base.parse_attribute (/<cim:ConfigurationEvent.ChangedLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ChangedOrganisationRole = base.parse_attribute (/<cim:ConfigurationEvent.ChangedOrganisationRole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ChangedPersonRole = base.parse_attribute (/<cim:ConfigurationEvent.ChangedPersonRole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ChangedServiceCategory = base.parse_attribute (/<cim:ConfigurationEvent.ChangedServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ChangedUsagePoint = base.parse_attribute (/<cim:ConfigurationEvent.ChangedUsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            events = context.parsed.ConfigurationEvent;
            if (null == events)
                context.parsed.ConfigurationEvent = events = {};
            events[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a CoordinateSystem.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.CoordinateSystem - the list of CoordinateSystem elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_CoordinateSystem (context, sub)
        {
            var obj;
            var coordinate_systems;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "CoordinateSystem";
            obj.crsUrn = base.parse_element (/<cim:CoordinateSystem.crsUrn>([\s\S]*?)<\/cim:CoordinateSystem.crsUrn>/g, sub, context, true);
            coordinate_systems = context.parsed.CoordinateSystem;
            if (null == coordinate_systems)
                context.parsed.CoordinateSystem = coordinate_systems = {};
            coordinate_systems[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Crew.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Crew - the list of Crew elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_Crew (context, sub)
        {
            var obj;
            var crews;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "Crew";
            obj.CrewType = base.parse_attribute (/<cim:Crew.CrewType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = base.parse_attribute (/<cim:Crew.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            crews = context.parsed.Crew;
            if (null == crews)
                context.parsed.Crew = crews = {};
            crews[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a CrewMember.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.CrewMember - the list of CrewMember elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_CrewMember (context, sub)
        {
            var obj;
            var members;

            obj = parse_OperationPersonRole (context, sub);
            obj.cls = "CrewMember";
            obj.Crew = base.parse_attribute (/<cim:CrewMember.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            members = context.parsed.CrewMember;
            if (null == members)
                context.parsed.CrewMember = members = {};
            members[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a CrewType.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.CrewType - the list of CrewType elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_CrewType (context, sub)
        {
            var obj;
            var types;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "CrewType";
            types = context.parsed.CrewType;
            if (null == types)
                context.parsed.CrewType = types = {};
            types[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Document.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Document - the list of Document elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_Document  (context, sub)
        {
            var obj;
            var documents;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "Document";
            obj.authorName = base.parse_element (/<cim:Document.authorName>([\s\S]*?)<\/cim:Document.authorName>/g, sub, context, true);
            obj.comment = base.parse_element (/<cim:Document.comment>([\s\S]*?)<\/cim:Document.comment>/g, sub, context, true);
            obj.createdDateTime = base.parse_element (/<cim:Document.createdDateTime>([\s\S]*?)<\/cim:Document.createdDateTime>/g, sub, context, true);
            obj.lastModifiedDateTime = base.parse_element (/<cim:Document.lastModifiedDateTime>([\s\S]*?)<\/cim:Document.lastModifiedDateTime>/g, sub, context, true);
            obj.revisionNumber = base.parse_element (/<cim:Document.lastModifiedDateTime>([\s\S]*?)<\/cim:Document.lastModifiedDateTime>/g, sub, context, true);
            obj.subject = base.parse_element (/<cim:Document.subject>([\s\S]*?)<\/cim:Document.subject>/g, sub, context, true);
            obj.title = base.parse_element (/<cim:Document.title>([\s\S]*?)<\/cim:Document.title>/g, sub, context, true);
            obj.type = base.parse_element (/<cim:Document.type>([\s\S]*?)<\/cim:Document.type>/g, sub, context, true);
            obj.docStatus = base.parse_attribute (/<cim:Document.docStatus\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.electronicAddress = base.parse_attribute (/<cim:Document.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = base.parse_attribute (/<cim:Document.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            documents = context.parsed.Document;
            if (null == documents)
                context.parsed.Document = documents = {};
            documents[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an ElectronicAddress.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ElectronicAddress - the list of ElectronicAddress elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_ElectronicAddress  (context, sub)
        {
            var obj;
            var addresses;

            obj = base.parse_Element (context, sub);
            obj.cls = "ElectronicAddress";
            obj.email1 = base.parse_element (/<cim:ElectronicAddress.email1>([\s\S]*?)<\/cim:ElectronicAddress.email1>/g, sub, context, true);
            obj.email2 = base.parse_element (/<cim:ElectronicAddress.email2>([\s\S]*?)<\/cim:ElectronicAddress.email2>/g, sub, context, true);
            obj.lan = base.parse_element (/<cim:ElectronicAddress.lan>([\s\S]*?)<\/cim:ElectronicAddress.lan>/g, sub, context, true);
            obj.mac = base.parse_element (/<cim:ElectronicAddress.mac>([\s\S]*?)<\/cim:ElectronicAddress.mac>/g, sub, context, true);
            obj.password = base.parse_element (/<cim:ElectronicAddress.password>([\s\S]*?)<\/cim:ElectronicAddress.password>/g, sub, context, true);
            obj.radio = base.parse_element (/<cim:ElectronicAddress.radio>([\s\S]*?)<\/cim:ElectronicAddress.radio>/g, sub, context, true);
            obj.userID = base.parse_element (/<cim:ElectronicAddress.userID>([\s\S]*?)<\/cim:ElectronicAddress.userID>/g, sub, context, true);
            obj.web = base.parse_element (/<cim:ElectronicAddress.web>([\s\S]*?)<\/cim:ElectronicAddress.web>/g, sub, context, true);
            addresses = context.parsed.ElectronicAddress;
            if (null == addresses)
                context.parsed.ElectronicAddress = addresses = {};
            addresses[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Hazard.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Hazard - the list of Hazard elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_Hazard (context, sub)
        {
            var obj;
            var hazards;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "Hazard";
            obj.type = base.parse_element (/<cim:Hazard.type>([\s\S]*?)<\/cim:Hazard.type>/g, sub, context, true);
            obj.status = base.parse_attribute (/<cim:Hazard.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            hazards = context.parsed.Hazard;
            if (null == hazards)
                context.parsed.Hazard = hazards = {};
            hazards[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Location.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Location - the list of Location elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_Location  (context, sub)
        {
            var obj;
            var locations;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "Location";
            obj.direction = base.parse_element (/<cim:Location.direction>([\s\S]*?)<\/cim:Location.direction>/g, sub, context, true);
            obj.geoInfoReference = base.parse_element (/<cim:Location.geoInfoReference>([\s\S]*?)<\/cim:Location.geoInfoReference>/g, sub, context, true);
            obj.type = base.parse_element (/<cim:Location.type>([\s\S]*?)<\/cim:Location.type>/g, sub, context, true);
            obj.CoordinateSystem = base.parse_attribute (/<cim:Location.CoordinateSystem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.electronicAddress = base.parse_attribute (/<cim:Location.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.mainAddress = base.parse_attribute (/<cim:Location.mainAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.phone1 = base.parse_attribute (/<cim:Location.phone1\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.phone2 = base.parse_attribute (/<cim:Location.phone2\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.secondaryAddress = base.parse_attribute (/<cim:Location.secondaryAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = base.parse_attribute (/<cim:Location.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            locations = context.parsed.Location;
            if (null == locations)
                context.parsed.Location = locations = {};
            locations[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an OperationPersonRole.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.OperationPersonRole - the list of OperationPersonRole elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_OperationPersonRole (context, sub)
        {
            var obj;
            var roles;

            obj = parse_PersonRole (context, sub);
            obj.cls = "OperationPersonRole";
            roles = context.parsed.OperationPersonRole;
            if (null == roles)
                context.parsed.OperationPersonRole = roles = {};
            roles[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an Operator.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Operator - the list of Operator elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_Operator (context, sub)
        {
            var obj;
            var operators;

            obj = parse_OperationPersonRole (context, sub);
            obj.cls = "Operator";
            operators = context.parsed.Operator;
            if (null == operators)
                context.parsed.Operator = operators = {};
            operators[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an Organisation.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Organisation - the list of Organisation elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_Organisation (context, sub)
        {
            var obj;
            var organisations;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "Organisation";
            obj.electronicAddress = base.parse_attribute (/<cim:Organisation.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.phone1 = base.parse_attribute (/<cim:Organisation.phone1\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.phone2 = base.parse_attribute (/<cim:Organisation.phone2\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.postalAddress = base.parse_attribute (/<cim:Organisation.postalAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.streetAddress = base.parse_attribute (/<cim:Organisation.streetAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            organisations = context.parsed.Organisation;
            if (null == organisations)
                context.parsed.Organisation = organisations = {};
            organisations[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an OrganisationRole.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.OrganisationRole - the list of OrganisationRole elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_OrganisationRole (context, sub)
        {
            var obj;
            var roles;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "OrganisationRole";
            obj.Organisation = base.parse_attribute (/<cim:OrganisationRole.Organisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            roles = context.parsed.OrganisationRole;
            if (null == roles)
                context.parsed.OrganisationRole = roles = {};
            roles[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an Ownership.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Ownership - the list of Ownership elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_Ownership (context, sub)
        {
            var obj;
            var ownerships;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "Ownership";
            obj.share = base.parse_element (/<cim:Ownership.share>([\s\S]*?)<\/cim:Ownership.share>/g, sub, context, true);
            obj.Asset = base.parse_attribute (/<cim:Ownership.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.AssetOwner = base.parse_attribute (/<cim:Ownership.AssetOwner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            ownerships = context.parsed.Ownership;
            if (null == ownerships)
                context.parsed.Ownership = ownerships = {};
            ownerships[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Person.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Person - the list of Person elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_Person (context, sub)
        {
            var obj;
            var persons;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "Person";
            obj.firstName = base.parse_element (/<cim:Person.firstName>([\s\S]*?)<\/cim:Person.firstName>/g, sub, context, true);
            obj.lastName = base.parse_element (/<cim:Person.lastName>([\s\S]*?)<\/cim:Person.lastName>/g, sub, context, true);
            obj.mName = base.parse_element (/<cim:Person.mName>([\s\S]*?)<\/cim:Person.mName>/g, sub, context, true);
            obj.prefix = base.parse_element (/<cim:Person.prefix>([\s\S]*?)<\/cim:Person.prefix>/g, sub, context, true);
            obj.specialNeed = base.parse_element (/<cim:Person.specialNeed>([\s\S]*?)<\/cim:Person.specialNeed>/g, sub, context, true);
            obj.suffix = base.parse_element (/<cim:Person.suffix>([\s\S]*?)<\/cim:Person.suffix>/g, sub, context, true);
            obj.electronicAddress = base.parse_attribute (/<cim:Person.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.landlinePhone = base.parse_attribute (/<cim:Person.landlinePhone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.mobilePhone = base.parse_attribute (/<cim:Person.mobilePhone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            persons = context.parsed.Person;
            if (null == persons)
                context.parsed.Person = persons = {};
            persons[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PersonRole.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PersonRole - the list of PersonRole elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_PersonRole (context, sub)
        {
            var obj;
            var roles;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "PersonRole";
            obj.Person = base.parse_attribute (/<cim:PersonRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            roles = context.parsed.PersonRole;
            if (null == roles)
                context.parsed.PersonRole = roles = {};
            roles[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PositionPoint.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PositionPoint - the list of position points
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_PositionPoint  (context, sub)
        {
            var obj;
            var points;

            obj = base.parse_Element (context, sub);
            obj.cls = "PositionPoint";
            obj.sequenceNumber = base.parse_element (/<cim:PositionPoint.sequenceNumber>([\s\S]*?)<\/cim:PositionPoint.sequenceNumber>/g, sub, context, true);
            obj.xPosition = base.parse_element (/<cim:PositionPoint.xPosition>([\s\S]*?)<\/cim:PositionPoint.xPosition>/g, sub, context, true);
            obj.yPosition = base.parse_element (/<cim:PositionPoint.yPosition>([\s\S]*?)<\/cim:PositionPoint.yPosition>/g, sub, context, true);
            obj.zPosition = base.parse_element (/<cim:PositionPoint.zPosition>([\s\S]*?)<\/cim:PositionPoint.zPosition>/g, sub, context, true);
            obj.Location = base.parse_attribute (/<cim:PositionPoint.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            if (null != obj.sequenceNumber) obj.sequenceNumber = Number (obj.sequenceNumber);
            if (null != obj.xPosition) obj.xPosition = Number (obj.xPosition);
            if (null != obj.yPosition) obj.yPosition = Number (obj.yPosition);
            if (null != obj.zPosition) obj.zPosition = Number (obj.zPosition);
            points = context.parsed.PositionPoint;
            if (null == points)
                context.parsed.PositionPoint = points = {};
            points[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PostalAddress.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PostalAddress - the list of PostalAddress elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_PostalAddress (context, sub)
        {
            var obj;
            var addresses;

            obj = base.parse_Element (context, sub);
            obj.cls = "PostalAddress";
            obj.poBox = base.parse_element (/<cim:PostalAddress.poBox>([\s\S]*?)<\/cim:PostalAddress.poBox>/g, sub, context, true);
            obj.postalCode = base.parse_element (/<cim:PostalAddress.postalCode>([\s\S]*?)<\/cim:PostalAddress.postalCode>/g, sub, context, true);
            obj.streetDetail = base.parse_attribute (/<cim:PostalAddress.streetDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.townDetail = base.parse_attribute (/<cim:PostalAddress.townDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            addresses = context.parsed.PostalAddress;
            if (null == addresses)
                context.parsed.PostalAddress = addresses = {};
            addresses[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Priority.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Priority - the list of Priority elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_Priority (context, sub)
        {
            var obj;
            var priorities;

            obj = base.parse_Element (context, sub);
            obj.cls = "Priority";
            obj.justification = base.parse_element (/<cim:Priority.justification>([\s\S]*?)<\/cim:Priority.justification>/g, sub, context, true);
            obj.rank = base.parse_element (/<cim:Priority.rank>([\s\S]*?)<\/cim:Priority.rank>/g, sub, context, true);
            obj.type = base.parse_element (/<cim:Priority.type>([\s\S]*?)<\/cim:Priority.type>/g, sub, context, true);
            priorities = context.parsed.Priority;
            if (null == priorities)
                context.parsed.Priority = priorities = {};
            priorities[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ScheduledEvent.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ScheduledEvent - the list of ScheduledEvent elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_ScheduledEvent (context, sub)
        {
            var obj;
            var events;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "ScheduledEvent";
            obj.duration = base.parse_element (/<cim:ScheduledEvent.duration>([\s\S]*?)<\/cim:ScheduledEvent.duration>/g, sub, context, true);
            obj.type = base.parse_element (/<cim:ScheduledEvent.type>([\s\S]*?)<\/cim:ScheduledEvent.type>/g, sub, context, true);
            obj.ScheduledEventData = base.parse_attribute (/<cim:ScheduledEvent.ScheduledEventData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = base.parse_attribute (/<cim:ScheduledEvent.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            events = context.parsed.ScheduledEvent;
            if (null == events)
                context.parsed.ScheduledEvent = events = {};
            events[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ScheduledEventData.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ScheduledEventData - the list of ScheduledEventData elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_ScheduledEventData (context, sub)
        {
            var obj;
            var edata;

            obj = base.parse_Element (context, sub);
            obj.cls = "ScheduledEventData";
            obj.InspectionDataSet = base.parse_attribute (/<cim:ScheduledEventData.InspectionDataSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.estimatedWindow = base.parse_attribute (/<cim:ScheduledEventData.estimatedWindow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.requestedWindow = base.parse_attribute (/<cim:ScheduledEventData.requestedWindow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = base.parse_attribute (/<cim:ScheduledEventData.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            edata = context.parsed.ScheduledEventData;
            if (null == edata)
                context.parsed.ScheduledEventData = edata = {};
            edata[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Status.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Status - the list of Status elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_Status (context, sub)
        {
            var obj;
            var pstatus;

            obj = base.parse_Element (context, sub);
            obj.cls = "Status";
            obj.dateTime = base.parse_element (/<cim:Status.dateTime>([\s\S]*?)<\/cim:Status.dateTime>/g, sub, context, true);
            obj.reason = base.parse_element (/<cim:Status.reason>([\s\S]*?)<\/cim:Status.reason>/g, sub, context, true);
            obj.remark = base.parse_element (/<cim:Status.remark>([\s\S]*?)<\/cim:Status.remark>/g, sub, context, true);
            obj.value = base.parse_element (/<cim:Status.value>([\s\S]*?)<\/cim:Status.value>/g, sub, context, true);
            pstatus = context.parsed.Status;
            if (null == pstatus)
                context.parsed.Status = pstatus = {};
            pstatus[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a StreetAddress.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.StreetAddress - the list of StreetAddress elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_StreetAddress (context, sub)
        {
            var obj;
            var addresses;

            obj = base.parse_Element (context, sub);
            obj.cls = "StreetAddress";
            obj.status = base.parse_attribute (/<cim:StreetAddress.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.streetDetail = base.parse_attribute (/<cim:StreetAddress.streetDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.townDetail = base.parse_attribute (/<cim:StreetAddress.townDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            addresses = context.parsed.StreetAddress;
            if (null == addresses)
                context.parsed.StreetAddress = addresses = {};
            addresses[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a StreetDetail.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.StreetDetail - the list of StreetDetail elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_StreetDetail (context, sub)
        {
            var obj;
            var details;

            obj = base.parse_Element (context, sub);
            obj.cls = "StreetDetail";
            obj.addressGeneral = base.parse_element (/<cim:StreetDetail.addressGeneral>([\s\S]*?)<\/cim:StreetDetail.addressGeneral>/g, sub, context, true);
            obj.buildingName = base.parse_element (/<cim:StreetDetail.buildingName>([\s\S]*?)<\/cim:StreetDetail.buildingName>/g, sub, context, true);
            obj.code = base.parse_element (/<cim:StreetDetail.code>([\s\S]*?)<\/cim:StreetDetail.code>/g, sub, context, true);
            obj.name = base.parse_element (/<cim:StreetDetail.name>([\s\S]*?)<\/cim:StreetDetail.name>/g, sub, context, true);
            obj.number = base.parse_element (/<cim:StreetDetail.number>([\s\S]*?)<\/cim:StreetDetail.number>/g, sub, context, true);
            obj.prefix = base.parse_element (/<cim:StreetDetail.prefix>([\s\S]*?)<\/cim:StreetDetail.prefix>/g, sub, context, true);
            obj.suffix = base.parse_element (/<cim:StreetDetail.suffix>([\s\S]*?)<\/cim:StreetDetail.suffix>/g, sub, context, true);
            obj.suiteNumber = base.parse_element (/<cim:StreetDetail.suiteNumber>([\s\S]*?)<\/cim:StreetDetail.suiteNumber>/g, sub, context, true);
            obj.type = base.parse_element (/<cim:StreetDetail.type>([\s\S]*?)<\/cim:StreetDetail.type>/g, sub, context, true);
            obj.withinTownLimits = base.parse_element (/<cim:StreetDetail.withinTownLimits>([\s\S]*?)<\/cim:StreetDetail.withinTownLimits>/g, sub, context, true);
            details = context.parsed.StreetDetail;
            if (null == details)
                context.parsed.StreetDetail = details = {};
            details[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a TelephoneNumber.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.TelephoneNumber - the list of TelephoneNumber elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_TelephoneNumber (context, sub)
        {
            var obj;
            var phonenumbers;

            obj = base.parse_Element (context, sub);
            obj.cls = "TelephoneNumber";
            obj.areaCode = base.parse_element (/<cim:TelephoneNumber.areaCode>([\s\S]*?)<\/cim:TelephoneNumber.areaCode>/g, sub, context, true);
            obj.cityCode = base.parse_element (/<cim:TelephoneNumber.cityCode>([\s\S]*?)<\/cim:TelephoneNumber.cityCode>/g, sub, context, true);
            obj.countryCode = base.parse_element (/<cim:TelephoneNumber.countryCode>([\s\S]*?)<\/cim:TelephoneNumber.countryCode>/g, sub, context, true);
            obj.extension = base.parse_element (/<cim:TelephoneNumber.extension>([\s\S]*?)<\/cim:TelephoneNumber.extension>/g, sub, context, true);
            obj.localNumber = base.parse_element (/<cim:TelephoneNumber.localNumber>([\s\S]*?)<\/cim:TelephoneNumber.localNumber>/g, sub, context, true);
            phonenumbers = context.parsed.TelephoneNumber;
            if (null == phonenumbers)
                context.parsed.TelephoneNumber = phonenumbers = {};
            phonenumbers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a TimePoint.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.TimePoint - the list of TimePoint elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_TimePoint (context, sub)
        {
            var obj;
            var points;

            obj = core.parse_IdentifiedObject (context, sub);
            obj.cls = "TimePoint";
            obj.dateTime = base.parse_element (/<cim:TimePoint.dateTime>([\s\S]*?)<\/cim:TimePoint.dateTime>/g, sub, context, true);
            obj.relativeTimeInterval = base.parse_element (/<cim:TimePoint.relativeTimeInterval>([\s\S]*?)<\/cim:TimePoint.relativeTimeInterval>/g, sub, context, true);
            obj.sequenceNumber = base.parse_element (/<cim:TimePoint.sequenceNumber>([\s\S]*?)<\/cim:TimePoint.sequenceNumber>/g, sub, context, true);
            obj.TimeSchedule = base.parse_attribute (/<cim:TimePoint.TimeSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = base.parse_attribute (/<cim:TimePoint.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.window = base.parse_attribute (/<cim:TimePoint.window\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            points = context.parsed.TimePoint;
            if (null == points)
                context.parsed.TimePoint = points = {};
            points[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a TimeSchedule.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.TimeSchedule - the list of TimeSchedule elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_TimeSchedule (context, sub)
        {
            var obj;
            var schedules;

            obj = parse_Document (context, sub);
            obj.cls = "TimeSchedule";
            obj.disabled = base.parse_element (/<cim:TimeSchedule.disabled>([\s\S]*?)<\/cim:TimeSchedule.disabled>/g, sub, context, true);
            obj.offset = base.parse_element (/<cim:TimeSchedule.offset>([\s\S]*?)<\/cim:TimeSchedule.offset>/g, sub, context, true);
            obj.recurrencePattern = base.parse_element (/<cim:TimeSchedule.recurrencePattern>([\s\S]*?)<\/cim:TimeSchedule.recurrencePattern>/g, sub, context, true);
            obj.recurrencePeriod = base.parse_element (/<cim:TimeSchedule.recurrencePeriod>([\s\S]*?)<\/cim:TimeSchedule.recurrencePeriod>/g, sub, context, true);
            obj.scheduleInterval = base.parse_attribute (/<cim:TimeSchedule.scheduleInterval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            schedules = context.parsed.TimeSchedule;
            if (null == schedules)
                context.parsed.TimeSchedule = schedules = {};
            schedules[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a TownDetail.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.TownDetail - the list of TownDetail elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_TownDetail (context, sub)
        {
            var obj;
            var details;

            obj = base.parse_Element (context, sub);
            obj.cls = "TownDetail";
            obj.code = base.parse_element (/<cim:TownDetail.code>([\s\S]*?)<\/cim:TownDetail.code>/g, sub, context, true);
            obj.country = base.parse_element (/<cim:TownDetail.country>([\s\S]*?)<\/cim:TownDetail.country>/g, sub, context, true);
            obj.name = base.parse_element (/<cim:TownDetail.name>([\s\S]*?)<\/cim:TownDetail.name>/g, sub, context, true);
            obj.section = base.parse_element (/<cim:TownDetail.section>([\s\S]*?)<\/cim:TownDetail.section>/g, sub, context, true);
            obj.stateOrProvince = base.parse_element (/<cim:TownDetail.stateOrProvince>([\s\S]*?)<\/cim:TownDetail.stateOrProvince>/g, sub, context, true);
            details = context.parsed.TownDetail;
            if (null == details)
                context.parsed.TownDetail = details = {};
            details[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a UserAttribute.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.UserAttribute - the list of user attributes
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:model/common
         */
        function parse_UserAttribute  (context, sub)
        {
            var obj;
            var attributes;

            obj = base.parse_Element (context, sub);
            obj.cls = "UserAttribute";
            obj.name = base.parse_element (/<cim:UserAttribute.name>([\s\S]*?)<\/cim:UserAttribute.name>/g, sub, context, true);
            obj.sequenceNumber = base.parse_element (/<cim:UserAttribute.sequenceNumber>([\s\S]*?)<\/cim:UserAttribute.sequenceNumber>/g, sub, context, true);
            obj.PropertySpecification = base.parse_attribute (/<cim:UserAttribute.PropertySpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.RatingSpecification = base.parse_attribute (/<cim:UserAttribute.RatingSpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Transaction = base.parse_attribute (/<cim:UserAttribute.Transaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.value = base.parse_attribute (/<cim:UserAttribute.value\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            if (null == obj.value)
                obj.value = base.parse_element (/<cim:UserAttribute.value>([\s\S]*?)<\/cim:UserAttribute.value>/g, sub, context, true);
            if (null != obj.sequenceNumber) obj.sequenceNumber = Number (obj.sequenceNumber);
            attributes = context.parsed.UserAttribute;
            if (null == attributes)
                context.parsed.UserAttribute = attributes = {};
            attributes[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ActivityRecord: parse_ActivityRecord,
                parse_Agreement: parse_Agreement,
                parse_Appointment: parse_Appointment,
                parse_ConfigurationEvent: parse_ConfigurationEvent,
                parse_CoordinateSystem: parse_CoordinateSystem,
                parse_Crew: parse_Crew,
                parse_CrewMember:parse_CrewMember,
                parse_CrewType: parse_CrewType,
                parse_Document: parse_Document,
                parse_ElectronicAddress: parse_ElectronicAddress,
                parse_Hazard: parse_Hazard,
                parse_Location: parse_Location,
                parse_OperationPersonRole: parse_OperationPersonRole,
                parse_Operator: parse_Operator,
                parse_Organisation: parse_Organisation,
                parse_OrganisationRole: parse_OrganisationRole,
                parse_Ownership: parse_Ownership,
                parse_Person: parse_Person,
                parse_PersonRole: parse_PersonRole,
                parse_PositionPoint: parse_PositionPoint,
                parse_PostalAddress: parse_PostalAddress,
                parse_Priority: parse_Priority,
                parse_ScheduledEvent: parse_ScheduledEvent,
                parse_ScheduledEventData: parse_ScheduledEventData,
                parse_Status: parse_Status,
                parse_StreetAddress: parse_StreetAddress,
                parse_StreetDetail: parse_StreetDetail,
                parse_TelephoneNumber: parse_TelephoneNumber,
                parse_TimePoint: parse_TimePoint,
                parse_TimeSchedule: parse_TimeSchedule,
                parse_TownDetail: parse_TownDetail,
                parse_UserAttribute: parse_UserAttribute
            }
        );
    }
);