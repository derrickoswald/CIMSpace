/**
 * @fileOverview Read CIM files.
 * @name cim
 * @author Derrick Oswald
 * @version 1.0
 */
define
(
    [],
    /**
     * @summary CIM file reading functions.
     * @description Read an XML file with a restricted profile
     * (based on the PowerOn Advantage profile).
     * @name cim
     * @exports cim
     * @version 1.0
     */
    function ()
    {
        /**
         * Unique numbering for elements without an rdf:ID.
         */
        var UNIQUE_NUMBER = 0;

        /**
         * The size of chunks to read into memory.
         */
        var CHUNK_SIZE = 4000000;

        /**
         * Convert a string into UTF-8 encoded (all high order bytes are zero) string.
         * @see {http://monsur.hossa.in/2012/07/20/utf-8-in-javascript.html}
         * @param {String} str - the string to encode
         * @returns {String} UTF-8 encoded string
         * @memberOf module:cim
         */
        function encode_utf8 (str)
        {
            return (unescape (encodeURIComponent (str)));
        };

        /**
         * Create an index of newline characters in a string.
         * @param {String} str - the string to index
         * @param {Number} offset - optional offset to add to the index values
         * @param {Number[]} newlines - optional existing index to append to
         * Originally the idea behind this parameter was to:
         * read the file in 64K chunks using slice on the File blob,
         * and then read as text, scan with regex,
         * getting the last character position before the end of the slice or somewhere convenient,
         * and then to get the next slice starting on a character boundary (UTF8 encoded right) you need
         * to write out the characters seen so far and count the bytes,
         * then ask for the next 64K slice starting at that byte offset.
         * But reading in the entire file (64MB so far) seems to work OK, so this isn't used.
         * @returns {[Number]} the index of newlines, e.g. [15, 32, 64] for "Now is the time\nfor all good men\nto come to the aid of the party\n"
         * @memberOf module:cim
         */
        function index_string (str, offset, newlines)
        {
            var lines;
            var res;

            offset = offset || 0;
            var nl = newlines || [];
            lines = /\n/g;
            while (null != (res = lines.exec (str)))
                nl.push (res.index + offset);

            return (nl);
        }

        /**
         * Get a line number from the newline index of a context.
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @param {Number} offset - the character position to find line number of, default = context.start_character
         * @returns {Number} the one-based line number for the starting character position
         * @memberOf module:cim
         */
        function line_number (context, offset)
        {
            var min = 0;
            var max = context.newlines.length - 1;
            if ("undefined" == typeof (offset))
                offset = context.start_character;
            var index;
            var item;

            index = min;
            while (min <= max)
            {
                index = (min + max) / 2 | 0;
                item = context.newlines[index];

                if (item < offset)
                    min = index + 1;
                else if (item > offset)
                    max = index - 1;
                else
                    return (index + 1);
            }

            return ((context.newlines[index] <= offset ? index + 1 : index) + 1);
        }

        /**
         * Convert a string into a boolean value.
         * @param {String} str - the string to convert
         * @returns {Boolean} the boolean value
         * @memberOf module:cim
         */
        function to_boolean (str)
        {
            return (str.toLowerCase () === "true");
        }

        /**
         * Parse an element value - the first capture group of a regular expression.
         * @param {Object} regex - the regular expression
         * @param {String} str - the string to look in
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @param {Boolean} optional - if <em>true</em> return <em>null</em> if not found rather than throw an exception
         * @returns {String} the string found as the first capture group
         * @memberOf module:cim
         */
        function parse_element (regex, str, context, optional)
        {
            var result;
            var ret;

            ret = null;

            if (null != (result = regex.exec (str)))
                ret = result[1];
            else
                if (!optional)
                    throw ("regular expression " + regex.source + " not found while parsing at line " + line_number (context));
//                else
//                    console.log (regex.source + " not found at line " + line_number (context));

            return (ret);
        }

        /**
         * Parse an attribute - the second capture group of a regular expression.
         * @param {Object} regex - the regular expression
         * @param {String} str - the string to look in
         * @param {Object} context - the context object
         * @param {Number[]} context.newlines - the index of newline positions within the text
         * @param {Number} context.start_character - the starting character position for this context
         * @param {Boolean} optional - if <em>true</em> return <em>null</em> if not found rather than throw an exception
         * @returns {String} the string found as the second capture group (the first is the quote character used)
         * @memberOf module:cim
         */
        function parse_attribute (regex, str, context, optional)
        {
            var result;
            var ret;

            ret = null;

            if (null != (result = regex.exec (str)))
            {
                ret = result[2];
                if (ret.charAt (0) == '#') // remove '#'
                    ret = ret.substring (1);
            }
            else
                if (!optional)
                    throw ("regular expression " + regex.source + " not found while parsing at line " + line_number (context));
//                else
//                    console.log (regex.source + " not found at line " + line_number (context));

            return (ret);
        }

        /**
         * Parse an Element.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Element - the list of elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Element (context, sub)
        {
            var id;
            var elements;
            var ret;

            id = parse_attribute (/rdf:ID=("|')([\s\S]*?)\1/g, sub, context, true);
            if (null == id)
            {
                UNIQUE_NUMBER++;
                id = "element_" + UNIQUE_NUMBER;
            }
            elements = context.parsed.Element;
            if (null == elements)
                context.parsed.Element = elements = {};
            ret = { id: id, cls: "Element" };
            elements[id] = ret;

            return (ret);
        }

        /*
         * Package Common
         */

        /**
         * Parse an ActivityRecord.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ActivityRecord - the list of ActivityRecord elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_ActivityRecord (context, sub)
        {
            var obj;
            var records;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "ActivityRecord";
            obj.createdDateTime = parse_element (/<cim:ActivityRecord.createdDateTime>([\s\S]*?)<\/cim:ActivityRecord.createdDateTime>/g, sub, context, true);
            obj.reason = parse_element (/<cim:ActivityRecord.reason>([\s\S]*?)<\/cim:ActivityRecord.reason>/g, sub, context, true);
            obj.severity = parse_element (/<cim:ActivityRecord.severity>([\s\S]*?)<\/cim:ActivityRecord.severity>/g, sub, context, true);
            obj.type = parse_element (/<cim:ActivityRecord.type>([\s\S]*?)<\/cim:ActivityRecord.type>/g, sub, context, true);
            obj.status = parse_attribute (/<cim:ActivityRecord.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_Agreement (context, sub)
        {
            var obj;
            var agreements;

            obj = parse_Document (context, sub);
            obj.cls = "Agreement";
            obj.signDate = parse_element (/<cim:Agreement.signDate>([\s\S]*?)<\/cim:Agreement.signDate>/g, sub, context, true);
            obj.validityInterval = parse_attribute (/<cim:Agreement.validityInterval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_Appointment (context, sub)
        {
            var obj;
            var appointments;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "Appointment";
            obj.callAhead = parse_element (/<cim:Appointment.callAhead>([\s\S]*?)<\/cim:Appointment.callAhead>/g, sub, context, true);
            obj.meetingInterval = parse_attribute (/<cim:Appointment.meetingInterval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_ConfigurationEvent  (context, sub)
        {
            var obj;
            var events;

            obj = parse_ActivityRecord (context, sub);
            obj.cls = "ConfigurationEvent";
            obj.effectiveDateTime = parse_element (/<cim:ConfigurationEvent.effectiveDateTime>([\s\S]*?)<\/cim:ConfigurationEvent.effectiveDateTime>/g, sub, context, true);
            obj.modifiedBy = parse_element (/<cim:ConfigurationEvent.modifiedBy>([\s\S]*?)<\/cim:ConfigurationEvent.modifiedBy>/g, sub, context, true);
            obj.remark = parse_element (/<cim:ConfigurationEvent.remark>([\s\S]*?)<\/cim:ConfigurationEvent.remark>/g, sub, context, true);
            obj.ChangedAsset = parse_attribute (/<cim:ConfigurationEvent.ChangedAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ChangedDocument = parse_attribute (/<cim:ConfigurationEvent.ChangedDocument\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ChangedLocation = parse_attribute (/<cim:ConfigurationEvent.ChangedLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ChangedOrganisationRole = parse_attribute (/<cim:ConfigurationEvent.ChangedOrganisationRole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ChangedPersonRole = parse_attribute (/<cim:ConfigurationEvent.ChangedPersonRole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ChangedServiceCategory = parse_attribute (/<cim:ConfigurationEvent.ChangedServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ChangedUsagePoint = parse_attribute (/<cim:ConfigurationEvent.ChangedUsagePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_CoordinateSystem (context, sub)
        {
            var obj;
            var coordinate_systems;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "CoordinateSystem";
            obj.crsUrn = parse_element (/<cim:CoordinateSystem.crsUrn>([\s\S]*?)<\/cim:CoordinateSystem.crsUrn>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_Crew (context, sub)
        {
            var obj;
            var crews;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "Crew";
            obj.CrewType = parse_attribute (/<cim:Crew.CrewType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = parse_attribute (/<cim:Crew.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_CrewMember (context, sub)
        {
            var obj;
            var members;

            obj = parse_OperationPersonRole (context, sub);
            obj.cls = "CrewMember";
            obj.Crew = parse_attribute (/<cim:CrewMember.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_CrewType (context, sub)
        {
            var obj;
            var types;

            obj = parse_IdentifiedObject (context, sub);
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
         * @memberOf module:cim
         */
        function parse_Document  (context, sub)
        {
            var obj;
            var documents;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "Document";
            obj.authorName = parse_element (/<cim:Document.authorName>([\s\S]*?)<\/cim:Document.authorName>/g, sub, context, true);
            obj.comment = parse_element (/<cim:Document.comment>([\s\S]*?)<\/cim:Document.comment>/g, sub, context, true);
            obj.createdDateTime = parse_element (/<cim:Document.createdDateTime>([\s\S]*?)<\/cim:Document.createdDateTime>/g, sub, context, true);
            obj.lastModifiedDateTime = parse_element (/<cim:Document.lastModifiedDateTime>([\s\S]*?)<\/cim:Document.lastModifiedDateTime>/g, sub, context, true);
            obj.revisionNumber = parse_element (/<cim:Document.lastModifiedDateTime>([\s\S]*?)<\/cim:Document.lastModifiedDateTime>/g, sub, context, true);
            obj.subject = parse_element (/<cim:Document.subject>([\s\S]*?)<\/cim:Document.subject>/g, sub, context, true);
            obj.title = parse_element (/<cim:Document.title>([\s\S]*?)<\/cim:Document.title>/g, sub, context, true);
            obj.type = parse_element (/<cim:Document.type>([\s\S]*?)<\/cim:Document.type>/g, sub, context, true);
            obj.docStatus = parse_attribute (/<cim:Document.docStatus\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.electronicAddress = parse_attribute (/<cim:Document.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = parse_attribute (/<cim:Document.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_ElectronicAddress  (context, sub)
        {
            var obj;
            var addresses;

            obj = parse_Element (context, sub);
            obj.cls = "ElectronicAddress";
            obj.email1 = parse_element (/<cim:ElectronicAddress.email1>([\s\S]*?)<\/cim:ElectronicAddress.email1>/g, sub, context, true);
            obj.email2 = parse_element (/<cim:ElectronicAddress.email2>([\s\S]*?)<\/cim:ElectronicAddress.email2>/g, sub, context, true);
            obj.lan = parse_element (/<cim:ElectronicAddress.lan>([\s\S]*?)<\/cim:ElectronicAddress.lan>/g, sub, context, true);
            obj.mac = parse_element (/<cim:ElectronicAddress.mac>([\s\S]*?)<\/cim:ElectronicAddress.mac>/g, sub, context, true);
            obj.password = parse_element (/<cim:ElectronicAddress.password>([\s\S]*?)<\/cim:ElectronicAddress.password>/g, sub, context, true);
            obj.radio = parse_element (/<cim:ElectronicAddress.radio>([\s\S]*?)<\/cim:ElectronicAddress.radio>/g, sub, context, true);
            obj.userID = parse_element (/<cim:ElectronicAddress.userID>([\s\S]*?)<\/cim:ElectronicAddress.userID>/g, sub, context, true);
            obj.web = parse_element (/<cim:ElectronicAddress.web>([\s\S]*?)<\/cim:ElectronicAddress.web>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_Hazard (context, sub)
        {
            var obj;
            var hazards;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "Hazard";
            obj.type = parse_element (/<cim:Hazard.type>([\s\S]*?)<\/cim:Hazard.type>/g, sub, context, true);
            obj.status = parse_attribute (/<cim:Hazard.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_Location  (context, sub)
        {
            var obj;
            var locations;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "Location";
            obj.direction = parse_element (/<cim:Location.direction>([\s\S]*?)<\/cim:Location.direction>/g, sub, context, true);
            obj.geoInfoReference = parse_element (/<cim:Location.geoInfoReference>([\s\S]*?)<\/cim:Location.geoInfoReference>/g, sub, context, true);
            obj.type = parse_element (/<cim:Location.type>([\s\S]*?)<\/cim:Location.type>/g, sub, context, true);
            obj.CoordinateSystem = parse_attribute (/<cim:Location.CoordinateSystem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.electronicAddress = parse_attribute (/<cim:Location.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.mainAddress = parse_attribute (/<cim:Location.mainAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.phone1 = parse_attribute (/<cim:Location.phone1\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.phone2 = parse_attribute (/<cim:Location.phone2\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.secondaryAddress = parse_attribute (/<cim:Location.secondaryAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = parse_attribute (/<cim:Location.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
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
         * @memberOf module:cim
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
         * @memberOf module:cim
         */
        function parse_Organisation (context, sub)
        {
            var obj;
            var organisations;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "Organisation";
            obj.electronicAddress = parse_attribute (/<cim:Organisation.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.phone1 = parse_attribute (/<cim:Organisation.phone1\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.phone2 = parse_attribute (/<cim:Organisation.phone2\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.postalAddress = parse_attribute (/<cim:Organisation.postalAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.streetAddress = parse_attribute (/<cim:Organisation.streetAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_OrganisationRole (context, sub)
        {
            var obj;
            var roles;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "OrganisationRole";
            obj.Organisation = parse_attribute (/<cim:OrganisationRole.Organisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true); 
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
         * @memberOf module:cim
         */
        function parse_Ownership (context, sub)
        {
            var obj;
            var ownerships;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "Ownership";
            obj.share = parse_element (/<cim:Ownership.share>([\s\S]*?)<\/cim:Ownership.share>/g, sub, context, true);
            obj.Asset = parse_attribute (/<cim:Ownership.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.AssetOwner = parse_attribute (/<cim:Ownership.AssetOwner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_Person (context, sub)
        {
            var obj;
            var persons;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "Person";
            obj.firstName = parse_element (/<cim:Person.firstName>([\s\S]*?)<\/cim:Person.firstName>/g, sub, context, true);
            obj.lastName = parse_element (/<cim:Person.lastName>([\s\S]*?)<\/cim:Person.lastName>/g, sub, context, true);
            obj.mName = parse_element (/<cim:Person.mName>([\s\S]*?)<\/cim:Person.mName>/g, sub, context, true);
            obj.prefix = parse_element (/<cim:Person.prefix>([\s\S]*?)<\/cim:Person.prefix>/g, sub, context, true);
            obj.specialNeed = parse_element (/<cim:Person.specialNeed>([\s\S]*?)<\/cim:Person.specialNeed>/g, sub, context, true);
            obj.suffix = parse_element (/<cim:Person.suffix>([\s\S]*?)<\/cim:Person.suffix>/g, sub, context, true);
            obj.electronicAddress = parse_attribute (/<cim:Person.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.landlinePhone = parse_attribute (/<cim:Person.landlinePhone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.mobilePhone = parse_attribute (/<cim:Person.mobilePhone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_PersonRole (context, sub)
        {
            var obj;
            var roles;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "PersonRole";
            obj.Person = parse_attribute (/<cim:PersonRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_PositionPoint  (context, sub)
        {
            var obj;
            var points;

            obj = parse_Element (context, sub);
            obj.cls = "PositionPoint";
            obj.sequenceNumber = parse_element (/<cim:PositionPoint.sequenceNumber>([\s\S]*?)<\/cim:PositionPoint.sequenceNumber>/g, sub, context, true);
            obj.xPosition = parse_element (/<cim:PositionPoint.xPosition>([\s\S]*?)<\/cim:PositionPoint.xPosition>/g, sub, context, true);
            obj.yPosition = parse_element (/<cim:PositionPoint.yPosition>([\s\S]*?)<\/cim:PositionPoint.yPosition>/g, sub, context, true);
            obj.zPosition = parse_element (/<cim:PositionPoint.zPosition>([\s\S]*?)<\/cim:PositionPoint.zPosition>/g, sub, context, true);
            obj.Location = parse_attribute (/<cim:PositionPoint.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_PostalAddress (context, sub)
        {
            var obj;
            var addresses;

            obj = parse_Element (context, sub);
            obj.cls = "PostalAddress";
            obj.poBox = parse_element (/<cim:PostalAddress.poBox>([\s\S]*?)<\/cim:PostalAddress.poBox>/g, sub, context, true);
            obj.postalCode = parse_element (/<cim:PostalAddress.postalCode>([\s\S]*?)<\/cim:PostalAddress.postalCode>/g, sub, context, true);
            obj.streetDetail = parse_attribute (/<cim:PostalAddress.streetDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.townDetail = parse_attribute (/<cim:PostalAddress.townDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_Priority (context, sub)
        {
            var obj;
            var priorities;

            obj = parse_Element (context, sub);
            obj.cls = "Priority";
            obj.justification = parse_element (/<cim:Priority.justification>([\s\S]*?)<\/cim:Priority.justification>/g, sub, context, true);
            obj.rank = parse_element (/<cim:Priority.rank>([\s\S]*?)<\/cim:Priority.rank>/g, sub, context, true);
            obj.type = parse_element (/<cim:Priority.type>([\s\S]*?)<\/cim:Priority.type>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_ScheduledEvent (context, sub)
        {
            var obj;
            var events;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "ScheduledEvent";
            obj.duration = parse_element (/<cim:ScheduledEvent.duration>([\s\S]*?)<\/cim:ScheduledEvent.duration>/g, sub, context, true);
            obj.type = parse_element (/<cim:ScheduledEvent.type>([\s\S]*?)<\/cim:ScheduledEvent.type>/g, sub, context, true);
            obj.ScheduledEventData = parse_attribute (/<cim:ScheduledEvent.ScheduledEventData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = parse_attribute (/<cim:ScheduledEvent.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_ScheduledEventData (context, sub)
        {
            var obj;
            var edata;

            obj = parse_Element (context, sub);
            obj.cls = "ScheduledEventData";
            obj.InspectionDataSet = parse_attribute (/<cim:ScheduledEventData.InspectionDataSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.estimatedWindow = parse_attribute (/<cim:ScheduledEventData.estimatedWindow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.requestedWindow = parse_attribute (/<cim:ScheduledEventData.requestedWindow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = parse_attribute (/<cim:ScheduledEventData.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_Status (context, sub)
        {
            var obj;
            var pstatus;

            obj = parse_Element (context, sub);
            obj.cls = "Status";
            obj.dateTime = parse_element (/<cim:Status.dateTime>([\s\S]*?)<\/cim:Status.dateTime>/g, sub, context, true);
            obj.reason = parse_element (/<cim:Status.reason>([\s\S]*?)<\/cim:Status.reason>/g, sub, context, true);
            obj.remark = parse_element (/<cim:Status.remark>([\s\S]*?)<\/cim:Status.remark>/g, sub, context, true);
            obj.value = parse_element (/<cim:Status.value>([\s\S]*?)<\/cim:Status.value>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_StreetAddress (context, sub)
        {
            var obj;
            var addresses;

            obj = parse_Element (context, sub);
            obj.cls = "StreetAddress";
            obj.status = parse_attribute (/<cim:StreetAddress.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.streetDetail = parse_attribute (/<cim:StreetAddress.streetDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.townDetail = parse_attribute (/<cim:StreetAddress.townDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_StreetDetail (context, sub)
        {
            var obj;
            var details;

            obj = parse_Element (context, sub);
            obj.cls = "StreetDetail";
            obj.addressGeneral = parse_element (/<cim:StreetDetail.addressGeneral>([\s\S]*?)<\/cim:StreetDetail.addressGeneral>/g, sub, context, true);
            obj.buildingName = parse_element (/<cim:StreetDetail.buildingName>([\s\S]*?)<\/cim:StreetDetail.buildingName>/g, sub, context, true);
            obj.code = parse_element (/<cim:StreetDetail.code>([\s\S]*?)<\/cim:StreetDetail.code>/g, sub, context, true);
            obj.name = parse_element (/<cim:StreetDetail.name>([\s\S]*?)<\/cim:StreetDetail.name>/g, sub, context, true);
            obj.number = parse_element (/<cim:StreetDetail.number>([\s\S]*?)<\/cim:StreetDetail.number>/g, sub, context, true);
            obj.prefix = parse_element (/<cim:StreetDetail.prefix>([\s\S]*?)<\/cim:StreetDetail.prefix>/g, sub, context, true);
            obj.suffix = parse_element (/<cim:StreetDetail.suffix>([\s\S]*?)<\/cim:StreetDetail.suffix>/g, sub, context, true);
            obj.suiteNumber = parse_element (/<cim:StreetDetail.suiteNumber>([\s\S]*?)<\/cim:StreetDetail.suiteNumber>/g, sub, context, true);
            obj.type = parse_element (/<cim:StreetDetail.type>([\s\S]*?)<\/cim:StreetDetail.type>/g, sub, context, true);
            obj.withinTownLimits = parse_element (/<cim:StreetDetail.withinTownLimits>([\s\S]*?)<\/cim:StreetDetail.withinTownLimits>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_TelephoneNumber (context, sub)
        {
            var obj;
            var phonenumbers;

            obj = parse_Element (context, sub);
            obj.cls = "TelephoneNumber";
            obj.areaCode = parse_element (/<cim:TelephoneNumber.areaCode>([\s\S]*?)<\/cim:TelephoneNumber.areaCode>/g, sub, context, true);
            obj.cityCode = parse_element (/<cim:TelephoneNumber.cityCode>([\s\S]*?)<\/cim:TelephoneNumber.cityCode>/g, sub, context, true);
            obj.countryCode = parse_element (/<cim:TelephoneNumber.countryCode>([\s\S]*?)<\/cim:TelephoneNumber.countryCode>/g, sub, context, true);
            obj.extension = parse_element (/<cim:TelephoneNumber.extension>([\s\S]*?)<\/cim:TelephoneNumber.extension>/g, sub, context, true);
            obj.localNumber = parse_element (/<cim:TelephoneNumber.localNumber>([\s\S]*?)<\/cim:TelephoneNumber.localNumber>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_TimePoint (context, sub)
        {
            var obj;
            var points;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "TimePoint";
            obj.dateTime = parse_element (/<cim:TimePoint.dateTime>([\s\S]*?)<\/cim:TimePoint.dateTime>/g, sub, context, true);
            obj.relativeTimeInterval = parse_element (/<cim:TimePoint.relativeTimeInterval>([\s\S]*?)<\/cim:TimePoint.relativeTimeInterval>/g, sub, context, true);
            obj.sequenceNumber = parse_element (/<cim:TimePoint.sequenceNumber>([\s\S]*?)<\/cim:TimePoint.sequenceNumber>/g, sub, context, true);
            obj.TimeSchedule = parse_attribute (/<cim:TimePoint.TimeSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = parse_attribute (/<cim:TimePoint.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.window = parse_attribute (/<cim:TimePoint.window\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_TimeSchedule (context, sub)
        {
            var obj;
            var schedules;

            obj = parse_Document (context, sub);
            obj.cls = "TimeSchedule";
            obj.disabled = parse_element (/<cim:TimeSchedule.disabled>([\s\S]*?)<\/cim:TimeSchedule.disabled>/g, sub, context, true);
            obj.offset = parse_element (/<cim:TimeSchedule.offset>([\s\S]*?)<\/cim:TimeSchedule.offset>/g, sub, context, true);
            obj.recurrencePattern = parse_element (/<cim:TimeSchedule.recurrencePattern>([\s\S]*?)<\/cim:TimeSchedule.recurrencePattern>/g, sub, context, true);
            obj.recurrencePeriod = parse_element (/<cim:TimeSchedule.recurrencePeriod>([\s\S]*?)<\/cim:TimeSchedule.recurrencePeriod>/g, sub, context, true);
            obj.scheduleInterval = parse_attribute (/<cim:TimeSchedule.scheduleInterval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_TownDetail (context, sub)
        {
            var obj;
            var details;

            obj = parse_Element (context, sub);
            obj.cls = "TownDetail";
            obj.code = parse_element (/<cim:TownDetail.code>([\s\S]*?)<\/cim:TownDetail.code>/g, sub, context, true);
            obj.country = parse_element (/<cim:TownDetail.country>([\s\S]*?)<\/cim:TownDetail.country>/g, sub, context, true);
            obj.name = parse_element (/<cim:TownDetail.name>([\s\S]*?)<\/cim:TownDetail.name>/g, sub, context, true);
            obj.section = parse_element (/<cim:TownDetail.section>([\s\S]*?)<\/cim:TownDetail.section>/g, sub, context, true);
            obj.stateOrProvince = parse_element (/<cim:TownDetail.stateOrProvince>([\s\S]*?)<\/cim:TownDetail.stateOrProvince>/g, sub, context, true);
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
         * @memberOf module:cim
         */
        function parse_UserAttribute  (context, sub)
        {
            var obj;
            var attributes;

            obj = parse_Element (context, sub);
            obj.cls = "UserAttribute";
            obj.name = parse_element (/<cim:UserAttribute.name>([\s\S]*?)<\/cim:UserAttribute.name>/g, sub, context, true);
            obj.sequenceNumber = parse_element (/<cim:UserAttribute.sequenceNumber>([\s\S]*?)<\/cim:UserAttribute.sequenceNumber>/g, sub, context, true);
            obj.PropertySpecification = parse_attribute (/<cim:UserAttribute.PropertySpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.RatingSpecification = parse_attribute (/<cim:UserAttribute.RatingSpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Transaction = parse_attribute (/<cim:UserAttribute.Transaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.value = parse_attribute (/<cim:UserAttribute.value\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            if (null == obj.value)
                obj.value = parse_element (/<cim:UserAttribute.value>([\s\S]*?)<\/cim:UserAttribute.value>/g, sub, context, true);
            if (null != obj.sequenceNumber) obj.sequenceNumber = Number (obj.sequenceNumber);
            attributes = context.parsed.UserAttribute;
            if (null == attributes)
                context.parsed.UserAttribute = attributes = {};
            attributes[obj.id] = obj;

            return (obj);
        }

        /*
         * Package Core
         */

        /**
         * Parse a ACDCTerminal.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ACDCTerminale - the list of user attributes
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_ACDCTerminal  (context, sub)
        {
            var obj;
            var terminals;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "ACDCTerminal";
            obj.connected = parse_element (/<cim:ACDCTerminal.connected>([\s\S]*?)<\/cim:ACDCTerminal.connected>/g, sub, context, true);
            obj.sequenceNumber = parse_element (/<cim:ACDCTerminal.sequenceNumber>([\s\S]*?)<\/cim:ACDCTerminal.sequenceNumber>/g, sub, context, true);
            obj.BusNameMarker = parse_attribute (/<cim:ACDCTerminal.BusNameMarker\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            if (null != obj.connected) obj.connected = to_boolean (obj.connected);
            if (null != obj.sequenceNumber) obj.sequenceNumber = Number (obj.sequenceNumber);
            terminals = context.parsed.ACDCTerminal;
            if (null == terminals)
                context.parsed.ACDCTerminal = terminals = {};
            terminals[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a BaseVoltage.
         * @param {Object} context - the file reading context
         * @param {Object} parsed.BaseVoltage - the LIST OF voltages
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_BaseVoltage (context, sub)
        {
            var obj;
            var voltages;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "BaseVoltage";
            obj.nominalVoltage = parse_element (/<cim:BaseVoltage.nominalVoltage>([\s\S]*?)<\/cim:BaseVoltage.nominalVoltage>/g, sub, context, true);
            voltages = context.parsed.BaseVoltage;
            if (null == voltages)
                context.parsed.BaseVoltage = voltages = {};
            voltages[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Bay.
         * @param {Object} parsed - the parsed elements
         * @param {Object} parsed.PowerSystemResources - the object with power system resources
         * @param {Object} context - the file reading context
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Bay (context, sub)
        {
            var obj;
            var bay;

            obj = parse_EquipmentContainer (context, sub);
            obj.cls = "Bay";
            obj.bayEnergyMeasFlag = parse_element (/<cim:Bay.bayEnergyMeasFlag>([\s\S]*?)<\/cim:Bay.bayEnergyMeasFlag>/g, sub, context, true);
            obj.bayPowerMeasFlag = parse_element (/<cim:Bay.bayPowerMeasFlag>([\s\S]*?)<\/cim:Bay.bayPowerMeasFlag>/g, sub, context, true);
            obj.breakerConfiguration = parse_attribute (/<cim:Bay.breakerConfiguration\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.bayPowerMeasFlag = parse_attribute (/<cim:Bay.bayPowerMeasFlag\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Substation = parse_attribute (/<cim:Bay.Substation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.VoltageLevel = parse_attribute (/<cim:Bay.VoltageLevel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            if (null != obj.bayEnergyMeasFlag)
                obj.bayEnergyMeasFlag = to_boolean (obj.bayEnergyMeasFlag);
            if (null != obj.bayPowerMeasFlag)
                obj.bayPowerMeasFlag = to_boolean (obj.bayPowerMeasFlag);
            bay = context.parsed.Bay;
            if (null == bay)
                context.parsed.Bay = bay = {};
            bay[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ConductingEquipment.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ConductingEquipment - the list of conducting equipment
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_ConductingEquipment (context, sub)
        {
            var obj;
            var equipment;

            obj = parse_Equipment (context, sub);
            obj.cls = "ConductingEquipment";
            obj.BaseVoltage = parse_attribute (/<cim:ConductingEquipment.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.GroundingAction = parse_attribute (/<cim:ConductingEquipment.GroundingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.JumpingAction = parse_attribute (/<cim:ConductingEquipment.JumpingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.SvStatus = parse_attribute (/<cim:ConductingEquipment.SvStatus\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            equipment = context.parsed.ConductingEquipment;
            if (null == equipment)
                context.parsed.ConductingEquipment = equipment = {};
            equipment[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ConnectivityNode.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ConnectivityNode - the list of connectivity nodes
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_ConnectivityNode (context, sub)
        {
            var obj;
            var nodes;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "ConnectivityNode";
            obj.ConnectivityNodeContainer = parse_attribute (/<cim:ConnectivityNode.ConnectivityNodeContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.TopologicalNode = parse_attribute (/<cim:ConnectivityNode.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            nodes = context.parsed.ConnectivityNode;
            if (null == nodes)
                context.parsed.ConnectivityNode = nodes = {};
            nodes[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ConnectivityNodeContainer.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ConnectivityNodeContainer - the list of connectivity node containers
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_ConnectivityNodeContainer (context, sub)
        {
            var obj;
            var containers;

            obj = parse_PowerSystemResource (context, sub);
            obj.cls = "ConnectivityNodeContainer";
            containers = context.parsed.ConnectivityNodeContainer;
            if (null == containers)
                context.parsed.ConnectivityNodeContainer = containers = {};
            containers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an Equipment.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Equipment - the list of equipment
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Equipment (context, sub)
        {
            var obj;
            var equipment;

            obj = parse_PowerSystemResource (context, sub);
            obj.cls = "Equipment";
            obj.aggregate = parse_element (/<cim:Equipment.aggregate>([\s\S]*?)<\/cim:Equipment.aggregate>/g, sub, context, true);
            obj.normallyInService = parse_element (/<cim:Equipment.normallyInService>([\s\S]*?)<\/cim:Equipment.normallyInService>/g, sub, context, true);
            obj.EquipmentContainer = parse_attribute (/<cim:Equipment.EquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            equipment = context.parsed.Equipment;
            if (null == equipment)
                context.parsed.Equipment = equipment = {};
            equipment[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an EquipmentContainer.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Equipment - the list of equipment containers
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_EquipmentContainer (context, sub)
        {
            var obj;
            var containers;

            obj = parse_ConnectivityNodeContainer (context, sub);
            obj.cls = "EquipmentContainer";
            containers = context.parsed.EquipmentContainer;
            if (null == containers)
                context.parsed.EquipmentContainer = containers = {};
            containers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an IdentifiedObject.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.IdentifiedObject - the list of IdentifiedObject elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_IdentifiedObject (context, sub)
        {
            var obj;
            var identified_objects;

            obj = parse_Element (context, sub);
            obj.cls = "IdentifiedObject";
            obj.aliasName = parse_element (/<cim:IdentifiedObject.aliasName>([\s\S]*?)<\/cim:IdentifiedObject.aliasName>/g, sub, context, true);
            obj.description = parse_element (/<cim:IdentifiedObject.description>([\s\S]*?)<\/cim:IdentifiedObject.description>/g, sub, context, true);
            obj.mRID = parse_element (/<cim:IdentifiedObject.mRID>([\s\S]*?)<\/cim:IdentifiedObject.mRID>/g, sub, context, true);
            obj.name = parse_element (/<cim:IdentifiedObject.name>([\s\S]*?)<\/cim:IdentifiedObject.name>/g, sub, context, true);
            if (null == obj.mRID)
                obj.mRID = obj.id;
            if ((null != obj.mRID) && (obj.id != obj.mRID))
            {
                console.log ("***Warning*** rdf:ID != mRID [" + obj.id + " != " + obj.mRID + "]");
                obj.id = obj.mRID;
            }
            identified_objects = context.parsed.IdentifiedObject;
            if (null == identified_objects)
                context.parsed.IdentifiedObject = identified_objects = {};
            identified_objects[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Name.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Name - the list of Name elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Name (context, sub)
        {
            var obj;
            var names;

            obj = parse_Element (context, sub);
            obj.cls = "Name";
            obj.name = parse_element (/<cim:Name.name>([\s\S]*?)<\/cim:Name.name>/g, sub, context, true);
            obj.IdentifiedObject = parse_attribute (/<cim:Name.IdentifiedObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.NameType = parse_attribute (/<cim:Name.NameType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            names = context.parsed.Name;
            if (null == names)
                context.parsed.Name = names = {};
            names[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a NameType.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.NameType - the list of NameType elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_NameType (context, sub)
        {
            var obj;
            var types;

            obj = parse_Element (context, sub);
            obj.cls = "NameType";
            obj.description = parse_element (/<cim:NameType.description>([\s\S]*?)<\/cim:NameType.description>/g, sub, context, true);
            obj.name = parse_element (/<cim:NameType.name>([\s\S]*?)<\/cim:NameType.name>/g, sub, context, true);
            obj.NameTypeAuthority = parse_attribute (/<cim:Name.NameTypeAuthority\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            types = context.parsed.NameType;
            if (null == types)
                context.parsed.NameType = types = {};
            types[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a NameTypeAuthority.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.NameTypeAuthority - the list of NameTypeAuthority elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_NameTypeAuthority (context, sub)
        {
            var obj;
            var authorities;

            obj = parse_Element (context, sub);
            obj.cls = "NameTypeAuthority";
            obj.description = parse_element (/<cim:NameTypeAuthority.description>([\s\S]*?)<\/cim:NameTypeAuthority.description>/g, sub, context, true);
            obj.name = parse_element (/<cim:NameTypeAuthority.name>([\s\S]*?)<\/cim:NameTypeAuthority.name>/g, sub, context, true);
            authorities = context.parsed.NameTypeAuthority;
            if (null == authorities)
                context.parsed.NameTypeAuthority = authorities = {};
            authorities[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PSRType.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PSRType - the list of PSRType elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_PSRType (context, sub)
        {
            var obj;
            var types;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "PSRType";
            types = context.parsed.PSRType;
            if (null == types)
                context.parsed.PSRType = types = {};
            types[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PowerSystemResource.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PowerSystemResource - the list of PowerSystemResource elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_PowerSystemResource (context, sub)
        {
            var obj;
            var resources;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "PowerSystemResource";
            obj.AssetInfo = parse_attribute (/<cim:PowerSystemResource.AssetInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Location = parse_attribute (/<cim:PowerSystemResource.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.PSRType = parse_attribute (/<cim:PowerSystemResource.PSRType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            resources = context.parsed.PowerSystemResource;
            if (null == resources)
                context.parsed.PowerSystemResource = resources = {};
            resources[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Substation.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Substation - the list of Substation elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Substation (context, sub)
        {
            var obj;
            var stations;

            obj = parse_EquipmentContainer (context, sub);
            obj.cls = "Substation";
            obj.SubGeographicalRegion = parse_attribute (/<cim:Substation.SubGeographicalRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            stations = context.parsed.Substation;
            if (null == stations)
                context.parsed.Substation = stations = {};
            stations[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Terminal.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Terminal - the list of Terminal elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Terminal (context, sub)
        {
            var obj;
            var terminals;

            obj = parse_ACDCTerminal (context, sub);
            obj.cls = "Terminal";
            obj.PhaseCode = parse_element (/<cim:Terminal.PhaseCode>([\s\S]*?)<\/cim:Terminal.PhaseCode>/g, sub, context, true);
            obj.Bushing = parse_attribute (/<cim:Terminal.Bushing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ConductingEquipment = parse_attribute (/<cim:Terminal.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ConnectivityNode = parse_attribute (/<cim:Terminal.ConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.SvPowerFlow = parse_attribute (/<cim:Terminal.SvPowerFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.TopologicalNode = parse_attribute (/<cim:Terminal.TopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            terminals = context.parsed.Terminal;
            if (null == terminals)
                context.parsed.Terminal = terminals = {};
            terminals[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a VoltageLevel.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.VoltageLevel - the list of VoltageLevel elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_VoltageLevel (context, sub)
        {
            var obj;
            var levels;

            obj = parse_EquipmentContainer (context, sub);
            obj.cls = "VoltageLevel";
            obj.highVoltageLimit = parse_element (/<cim:VoltageLevel.highVoltageLimit>([\s\S]*?)<\/cim:VoltageLevel.highVoltageLimit>/g, sub, context, true);
            obj.lowVoltageLimit = parse_element (/<cim:VoltageLevel.lowVoltageLimit>([\s\S]*?)<\/cim:VoltageLevel.lowVoltageLimit>/g, sub, context, true);
            obj.BaseVoltage = parse_attribute (/<cim:VoltageLevel.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Substation = parse_attribute (/<cim:VoltageLevel.Substation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            levels = context.parsed.VoltageLevel;
            if (null == levels)
                context.parsed.VoltageLevel = levels = {};
            levels[obj.id] = obj;

            return (obj);
        }

        /*
         * Package Production
         */

        /**
         * Parse a GeneratingUnit.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.GeneratingUnit - the list of GeneratingUnit elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_GeneratingUnit (context, sub)
        {
            var obj;
            var units;

            obj = parse_Equipment (context, sub);
            obj.cls = "GeneratingUnit";
            obj.allocSpinResP = parse_element (/<cim:GeneratingUnit.allocSpinResP>([\s\S]*?)<\/cim:GeneratingUnit.allocSpinResP>/g, sub, context, true);
            obj.autoCntrlMarginP = parse_element (/<cim:GeneratingUnit.autoCntrlMarginP>([\s\S]*?)<\/cim:GeneratingUnit.autoCntrlMarginP>/g, sub, context, true);
            obj.baseP = parse_element (/<cim:GeneratingUnit.baseP>([\s\S]*?)<\/cim:GeneratingUnit.baseP>/g, sub, context, true);
            obj.controlDeadband = parse_element (/<cim:GeneratingUnit.controlDeadband>([\s\S]*?)<\/cim:GeneratingUnit.controlDeadband>/g, sub, context, true);
            obj.controlPulseHigh = parse_element (/<cim:GeneratingUnit.controlPulseHigh>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseHigh>/g, sub, context, true);
            obj.controlPulseLow = parse_element (/<cim:GeneratingUnit.controlPulseLow>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseLow>/g, sub, context, true);
            obj.controlResponseRate = parse_element (/<cim:GeneratingUnit.controlResponseRate>([\s\S]*?)<\/cim:GeneratingUnit.controlResponseRate>/g, sub, context, true);
            obj.efficiency = parse_element (/<cim:GeneratingUnit.efficiency>([\s\S]*?)<\/cim:GeneratingUnit.efficiency>/g, sub, context, true);
            obj.genControlMode = parse_attribute (/<cim:GeneratingUnit.genControlMode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.genControlSource = parse_attribute (/<cim:GeneratingUnit.genControlSource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.governorMPL = parse_element (/<cim:GeneratingUnit.governorMPL>([\s\S]*?)<\/cim:GeneratingUnit.governorMPL>/g, sub, context, true);
            obj.governorSCD = parse_element (/<cim:GeneratingUnit.governorSCD>([\s\S]*?)<\/cim:GeneratingUnit.governorSCD>/g, sub, context, true);
            obj.highControlLimit = parse_element (/<cim:GeneratingUnit.highControlLimit>([\s\S]*?)<\/cim:GeneratingUnit.highControlLimit>/g, sub, context, true);
            obj.initialP = parse_element (/<cim:GeneratingUnit.initialP>([\s\S]*?)<\/cim:GeneratingUnit.initialP>/g, sub, context, true);
            obj.longPF = parse_element (/<cim:GeneratingUnit.longPF>([\s\S]*?)<\/cim:GeneratingUnit.longPF>/g, sub, context, true);
            obj.lowControlLimit = parse_element (/<cim:GeneratingUnit.lowControlLimit>([\s\S]*?)<\/cim:GeneratingUnit.lowControlLimit>/g, sub, context, true);
            obj.lowerRampRate = parse_element (/<cim:GeneratingUnit.lowerRampRate>([\s\S]*?)<\/cim:GeneratingUnit.lowerRampRate>/g, sub, context, true);
            obj.maxEconomicP = parse_element (/<cim:GeneratingUnit.maxEconomicP>([\s\S]*?)<\/cim:GeneratingUnit.maxEconomicP>/g, sub, context, true);
            obj.maxOperatingP = parse_element (/<cim:GeneratingUnit.maxOperatingP>([\s\S]*?)<\/cim:GeneratingUnit.maxOperatingP>/g, sub, context, true);
            obj.maximumAllowableSpinningReserve = parse_element (/<cim:GeneratingUnit.maximumAllowableSpinningReserve>([\s\S]*?)<\/cim:GeneratingUnit.maximumAllowableSpinningReserve>/g, sub, context, true);
            obj.minEconomicP = parse_element (/<cim:GeneratingUnit.minEconomicP>([\s\S]*?)<\/cim:GeneratingUnit.minEconomicP>/g, sub, context, true);
            obj.minOperatingP = parse_element (/<cim:GeneratingUnit.minOperatingP>([\s\S]*?)<\/cim:GeneratingUnit.minOperatingP>/g, sub, context, true);
            obj.minimumOffTime = parse_element (/<cim:GeneratingUnit.minimumOffTime>([\s\S]*?)<\/cim:GeneratingUnit.minimumOffTime>/g, sub, context, true);
            obj.modelDetail = parse_element (/<cim:GeneratingUnit.modelDetail>([\s\S]*?)<\/cim:GeneratingUnit.modelDetail>/g, sub, context, true);
            obj.nominalP = parse_element (/<cim:GeneratingUnit.nominalP>([\s\S]*?)<\/cim:GeneratingUnit.nominalP>/g, sub, context, true);
            obj.normalPF = parse_element (/<cim:GeneratingUnit.normalPF>([\s\S]*?)<\/cim:GeneratingUnit.normalPF>/g, sub, context, true);
            obj.penaltyFactor = parse_element (/<cim:GeneratingUnit.penaltyFactor>([\s\S]*?)<\/cim:GeneratingUnit.penaltyFactor>/g, sub, context, true);
            obj.raiseRampRate = parse_element (/<cim:GeneratingUnit.raiseRampRate>([\s\S]*?)<\/cim:GeneratingUnit.raiseRampRate>/g, sub, context, true);
            obj.ratedGrossMaxP = parse_element (/<cim:GeneratingUnit.ratedGrossMaxP>([\s\S]*?)<\/cim:GeneratingUnit.ratedGrossMaxP>/g, sub, context, true);
            obj.ratedGrossMinP = parse_element (/<cim:GeneratingUnit.ratedGrossMinP>([\s\S]*?)<\/cim:GeneratingUnit.ratedGrossMinP>/g, sub, context, true);
            obj.ratedNetMaxP = parse_element (/<cim:GeneratingUnit.ratedNetMaxP>([\s\S]*?)<\/cim:GeneratingUnit.ratedNetMaxP>/g, sub, context, true);
            obj.shortPF = parse_element (/<cim:GeneratingUnit.shortPF>([\s\S]*?)<\/cim:GeneratingUnit.shortPF>/g, sub, context, true);
            obj.startupCost = parse_element (/<cim:GeneratingUnit.startupCost>([\s\S]*?)<\/cim:GeneratingUnit.startupCost>/g, sub, context, true);
            obj.startupTime = parse_element (/<cim:GeneratingUnit.startupTime>([\s\S]*?)<\/cim:GeneratingUnit.startupTime>/g, sub, context, true);
            obj.tieLinePF = parse_element (/<cim:GeneratingUnit.tieLinePF>([\s\S]*?)<\/cim:GeneratingUnit.tieLinePF>/g, sub, context, true);
            obj.totalEfficiency = parse_element (/<cim:GeneratingUnit.totalEfficiency>([\s\S]*?)<\/cim:GeneratingUnit.totalEfficiency>/g, sub, context, true);
            obj.variableCost = parse_element (/<cim:GeneratingUnit.variableCost>([\s\S]*?)<\/cim:GeneratingUnit.variableCost>/g, sub, context, true);
            units = context.parsed.GeneratingUnit;
            if (null == units)
                context.parsed.GeneratingUnit = units = {};
            units[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a SolarGeneratingUnit.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.SolarGeneratingUnit - the list of SolarGeneratingUnit elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_SolarGeneratingUnit (context, sub)
        {
            var obj;
            var pvs;

            obj = parse_GeneratingUnit (context, sub);
            obj.cls = "SolarGeneratingUnit";
            pvs = context.parsed.SolarGeneratingUnit;
            if (null == pvs)
                context.parsed.SolarGeneratingUnit = pvs = {};
            pvs[obj.id] = obj;

            return (obj);
        }

        /*
         * Package Protection
         */

        /**
         * Parse a CurrentRelay.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.CurrentRelay - the list of CurrentRelay elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_CurrentRelay (context, sub)
        {
            var obj;
            var relays;

            obj = parse_ProtectionEquipment (context, sub);
            obj.cls = "CurrentRelay";
            obj.currentLimit1 = parse_element (/<cim:CurrentRelay.currentLimit1>([\s\S]*?)<\/cim:CurrentRelay.currentLimit1>/g, sub, context, true);
            obj.currentLimit2 = parse_element (/<cim:CurrentRelay.currentLimit2>([\s\S]*?)<\/cim:CurrentRelay.currentLimit2>/g, sub, context, true);
            obj.currentLimit3 = parse_element (/<cim:CurrentRelay.currentLimit3>([\s\S]*?)<\/cim:CurrentRelay.currentLimit3>/g, sub, context, true);
            obj.inverseTimeFlag = parse_element (/<cim:CurrentRelay.inverseTimeFlag>([\s\S]*?)<\/cim:CurrentRelay.inverseTimeFlag>/g, sub, context, true);
            obj.timeDelay1 = parse_element (/<cim:CurrentRelay.timeDelay1>([\s\S]*?)<\/cim:CurrentRelay.timeDelay1>/g, sub, context, true);
            obj.timeDelay2 = parse_element (/<cim:CurrentRelay.timeDelay2>([\s\S]*?)<\/cim:CurrentRelay.timeDelay2>/g, sub, context, true);
            obj.timeDelay3 = parse_element (/<cim:CurrentRelay.timeDelay3>([\s\S]*?)<\/cim:CurrentRelay.timeDelay3>/g, sub, context, true);
            relays = context.parsed.CurrentRelay;
            if (null == relays)
                context.parsed.CurrentRelay = relays = {};
            relays[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ProtectionEquipment.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ProtectionEquipment - the list of ProtectionEquipment elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_ProtectionEquipment (context, sub)
        {
            var obj;
            var equipment;

            obj = parse_Equipment (context, sub);
            obj.cls = "ProtectionEquipment";
            obj.highLimit = parse_element (/<cim:ProtectionEquipment.highLimit>([\s\S]*?)<\/cim:ProtectionEquipment.highLimit>/g, sub, context, true);
            obj.lowLimit = parse_element (/<cim:ProtectionEquipment.lowLimit>([\s\S]*?)<\/cim:ProtectionEquipment.lowLimit>/g, sub, context, true);
            obj.powerDirectionFlag = parse_element (/<cim:ProtectionEquipment.powerDirectionFlag>([\s\S]*?)<\/cim:ProtectionEquipment.powerDirectionFlag>/g, sub, context, true);
            obj.relayDelayTime = parse_element (/<cim:ProtectionEquipment.relayDelayTime>([\s\S]*?)<\/cim:ProtectionEquipment.relayDelayTime>/g, sub, context, true);
            obj.unitMultiplier = parse_attribute (/<cim:ProtectionEquipment.unitMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.unitSymbol = parse_attribute (/<cim:ProtectionEquipment.unitSymbol\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            equipment = context.parsed.ProtectionEquipment;
            if (null == equipment)
                context.parsed.ProtectionEquipment = equipment = {};
            equipment[obj.id] = obj;

            return (obj);
        }

        /*
         * Package StateVariables
         */

        /**
         * Parse a StateVariable.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.StateVariable - the list of StateVariable elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_StateVariable (context, sub)
        {
            var obj;
            var variables;

            obj = parse_Element (context, sub);
            obj.cls = "StateVariable";
            variables = context.parsed.StateVariable;
            if (null == variables)
                context.parsed.StateVariable = variables = {};
            variables[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a SvStatus.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.SvStatus - the list of SvStatus elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_SvStatus (context, sub)
        {
            var obj;
            var statuses;

            obj = parse_StateVariable (context, sub);
            obj.cls = "SvStatus";
            obj.inService = parse_element (/<cim:SvStatus.inService>([\s\S]*?)<\/cim:SvStatus.inService>/g, sub, context, true);
            obj.ConductingEquipment = parse_attribute (/<cim:SvStatus.ConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            statuses = context.parsed.SvStatus;
            if (null == statuses)
                context.parsed.SvStatus = statuses = {};
            statuses[obj.id] = obj;

            return (obj);
        }

        /*
         * Package Customers
         */

        /**
         * Parse a Customer.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Customer - the list of Customer elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Customer (context, sub)
        {
            var obj;
            var customers;

            obj = parse_OrganizatinRole (context, sub);
            obj.cls = "Customer";
            obj.kind = parse_attribute (/<cim:Customer.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.locale = parse_element (/<cim:Customer.locale>([\s\S]*?)<\/cim:Customer.locale>/g, sub, context, true);
            obj.pucNumber = parse_element (/<cim:Customer.pucNumber>([\s\S]*?)<\/cim:Customer.pucNumber>/g, sub, context, true);
            obj.specialNeed = parse_element (/<cim:Customer.specialNeed>([\s\S]*?)<\/cim:Customer.specialNeed>/g, sub, context, true);
            obj.vip = parse_element (/<cim:Customer.vip>([\s\S]*?)<\/cim:Customer.vip>/g, sub, context, true);
            obj.priority = parse_attribute (/<cim:Customer.priority\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.status = parse_attribute (/<cim:Customer.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            customers = context.parsed.Customer;
            if (null == customers)
                context.parsed.Customer = customers = {};
            customers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a CustomerAccount.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.CustomerAccount - the list of CustomerAccount elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_CustomerAccount (context, sub)
        {
            var obj;
            var accounts;

            obj = parse_Document (context, sub);
            obj.cls = "CustomerAccount";
            obj.billingCycle = parse_element (/<cim:CustomerAccount.billingCycle>([\s\S]*?)<\/cim:CustomerAccount.billingCycle>/g, sub, context, true);
            obj.budgetBill = parse_element (/<cim:CustomerAccount.budgetBill>([\s\S]*?)<\/cim:CustomerAccount.budgetBill>/g, sub, context, true);
            obj.Customer = parse_attribute (/<cim:CustomerAccount.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            accounts = context.parsed.CustomerAccount;
            if (null == accounts)
                context.parsed.CustomerAccount = accounts = {};
            accounts[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a CustomerAgreement.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.CustomerAgreement - the list of CustomerAgreement elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_CustomerAgreement (context, sub)
        {
            var obj;
            var agreements;

            obj = parse_Agreement (context, sub);
            obj.cls = "CustomerAgreement";
            obj.loadMgmt = parse_element (/<cim:CustomerAgreement.loadMgmt>([\s\S]*?)<\/cim:CustomerAgreement.loadMgmt>/g, sub, context, true);
            obj.Customer = parse_attribute (/<cim:CustomerAgreement.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.CustomerAccount = parse_attribute (/<cim:CustomerAgreement.CustomerAccount\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ServiceCategory = parse_attribute (/<cim:CustomerAgreement.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ServiceSupplier = parse_attribute (/<cim:CustomerAgreement.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.StandardIndustryCode = parse_attribute (/<cim:CustomerAgreement.StandardIndustryCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            agreements = context.parsed.CustomerAgreement;
            if (null == agreements)
                context.parsed.CustomerAgreement = agreements = {};
            agreements[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a CustomerNotification.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.CustomerNotification - the list of CustomerNotification elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_CustomerNotification (context, sub)
        {
            var obj;
            var notifications;

            obj = parse_Element (context, sub);
            obj.cls = "CustomerNotification";
            obj.ContactType = parse_element (/<cim:CustomerNotification.ContactType>([\s\S]*?)<\/cim:CustomerNotification.ContactType>/g, sub, context, true);
            obj.ContactValue = parse_element (/<cim:CustomerNotification.ContactValue>([\s\S]*?)<\/cim:CustomerNotification.ContactValue>/g, sub, context, true);
            obj.earliestDateTimeToCall = parse_element (/<cim:CustomerNotification.earliestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.earliestDateTimeToCall>/g, sub, context, true);
            obj.latestDateTimeToCall = parse_element (/<cim:CustomerNotification.latestDateTimeToCall>([\s\S]*?)<\/cim:CustomerNotification.latestDateTimeToCall>/g, sub, context, true);
            obj.trigger = parse_attribute (/<cim:CustomerNotification.trigger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Customer = parse_attribute (/<cim:CustomerNotification.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Incident = parse_attribute (/<cim:CustomerNotification.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            notifications = context.parsed.CustomerNotification;
            if (null == notifications)
                context.parsed.CustomerNotification = notifications = {};
            notifications[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a IncidentHazard.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.IncidentHazard - the list of IncidentHazard elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_IncidentHazard (context, sub)
        {
            var obj;
            var hazards;

            obj = parse_Hazard (context, sub);
            obj.cls = "IncidentHazard";
            obj.Incident = parse_attribute (/<cim:IncidentHazard.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.TroubleTicket = parse_attribute (/<cim:IncidentHazard.TroubleTicket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            hazards = context.parsed.IncidentHazard;
            if (null == hazards)
                context.parsed.IncidentHazard = hazards = {};
            hazards[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PricingStructure.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PricingStructure - the list of PricingStructure elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_PricingStructure (context, sub)
        {
            var obj;
            var structures;

            obj = parse_Document (context, sub);
            obj.cls = "PricingStructure";
            obj.code = parse_element (/<cim:PricingStructure.code>([\s\S]*?)<\/cim:PricingStructure.code>/g, sub, context, true);
            obj.dailyCeilingUsage = parse_element (/<cim:PricingStructure.dailyCeilingUsage>([\s\S]*?)<\/cim:PricingStructure.dailyCeilingUsage>/g, sub, context, true);
            obj.dailyEstimatedUsage = parse_element (/<cim:PricingStructure.dailyEstimatedUsage>([\s\S]*?)<\/cim:PricingStructure.dailyEstimatedUsage>/g, sub, context, true);
            obj.dailyFloorUsage = parse_element (/<cim:PricingStructure.dailyFloorUsage>([\s\S]*?)<\/cim:PricingStructure.dailyFloorUsage>/g, sub, context, true);
            obj.revenueKind = parse_attribute (/<cim:PricingStructure.revenueKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.taxExemption = parse_element (/<cim:PricingStructure.taxExemption>([\s\S]*?)<\/cim:PricingStructure.taxExemption>/g, sub, context, true);
            obj.ServiceCategory = parse_attribute (/<cim:PricingStructure.ServiceCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            structures = context.parsed.PricingStructure;
            if (null == structures)
                context.parsed.PricingStructure = structures = {};
            structures[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ServiceCategory.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ServiceCategory - the list of ServiceCategory elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_ServiceCategory (context, sub)
        {
            var obj;
            var categories;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "ServiceCategory";
            obj.kind = parse_attribute (/<cim:ServiceCategory.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            categories = context.parsed.ServiceCategory;
            if (null == categories)
                context.parsed.ServiceCategory = categories = {};
            categories[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ServiceLocation.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ServiceLocation - the list of ServiceLocation elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_ServiceLocation (context, sub)
        {
            var obj;
            var locations;

            obj = parse_WorkLocation (context, sub);
            obj.cls = "ServiceLocation";
            obj.accessMethod = parse_element (/<cim:ServiceLocation.accessMethod>([\s\S]*?)<\/cim:ServiceLocation.accessMethod>/g, sub, context, true);
            obj.needsInspection = parse_element (/<cim:ServiceLocation.needsInspection>([\s\S]*?)<\/cim:ServiceLocation.needsInspection>/g, sub, context, true);
            obj.siteAccessProblem = parse_element (/<cim:ServiceLocation.siteAccessProblem>([\s\S]*?)<\/cim:ServiceLocation.siteAccessProblem>/g, sub, context, true);
            locations = context.parsed.ServiceLocation;
            if (null == locations)
                context.parsed.ServiceLocation = locations = {};
            locations[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Tariff.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Tariff - the list of Tariff elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Tariff (context, sub)
        {
            var obj;
            var tariffs;

            obj = parse_Document (context, sub);
            obj.cls = "Tariff";
            obj.endDate = parse_element (/<cim:Tariff.endDate>([\s\S]*?)<\/cim:Tariff.endDate>/g, sub, context, true);
            obj.startDate = parse_element (/<cim:Tariff.startDate>([\s\S]*?)<\/cim:Tariff.startDate>/g, sub, context, true);
            tariffs = context.parsed.Tariff;
            if (null == tariffs)
                context.parsed.Tariff = tariffs = {};
            tariffs[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a TroubleTicket.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.TroubleTicket - the list of TroubleTicket elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_TroubleTicket (context, sub)
        {
            var obj;
            var tickets;

            obj = parse_Document (context, sub);
            obj.cls = "TroubleTicket";
            obj.dateTimeOfReport = parse_element (/<cim:TroubleTicket.dateTimeOfReport>([\s\S]*?)<\/cim:TroubleTicket.dateTimeOfReport>/g, sub, context, true);
            obj.firstResponder = parse_element (/<cim:TroubleTicket.firstResponder>([\s\S]*?)<\/cim:TroubleTicket.firstResponder>/g, sub, context, true);
            obj.reportingKind = parse_attribute (/<cim:TroubleTicket.reportingKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.resolvedDateTime = parse_element (/<cim:TroubleTicket.resolvedDateTime>([\s\S]*?)<\/cim:TroubleTicket.resolvedDateTime>/g, sub, context, true);
            obj.troubleCode = parse_element (/<cim:TroubleTicket.troubleCode>([\s\S]*?)<\/cim:TroubleTicket.troubleCode>/g, sub, context, true);
            obj.Customer = parse_attribute (/<cim:TroubleTicket.Customer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Incident = parse_attribute (/<cim:TroubleTicket.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Notification = parse_attribute (/<cim:TroubleTicket.Notification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            tickets = context.parsed.TroubleTicket;
            if (null == tickets)
                context.parsed.TroubleTicket = tickets = {};
            tickets[obj.id] = obj;

            return (obj);
        }

        /*
         * Package Wires
         */

        /**
         * Parse a ACLineSegment.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ACLineSegment - the list of ACLineSegment elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_ACLineSegment (context, sub)
        {
            var obj;
            var lines;

            obj = parse_Conductor (context, sub);
            obj.cls = "ACLineSegment";
            obj.b0ch = parse_element (/<cim:ACLineSegment.b0ch>([\s\S]*?)<\/cim:ACLineSegment.b0ch>/g, sub, context, true);
            obj.bch = parse_element (/<cim:ACLineSegment.bch>([\s\S]*?)<\/cim:ACLineSegment.bch>/g, sub, context, true);
            obj.g0ch = parse_element (/<cim:ACLineSegment.g0ch>([\s\S]*?)<\/cim:ACLineSegment.g0ch>/g, sub, context, true);
            obj.gch = parse_element (/<cim:ACLineSegment.gch>([\s\S]*?)<\/cim:ACLineSegment.gch>/g, sub, context, true);
            obj.r0 = parse_element (/<cim:ACLineSegment.r0>([\s\S]*?)<\/cim:ACLineSegment.r0>/g, sub, context, true);
            obj.r = parse_element (/<cim:ACLineSegment.r>([\s\S]*?)<\/cim:ACLineSegment.r>/g, sub, context, true);
            obj.shortCircuitEndTemperature = parse_element (/<cim:ACLineSegment.shortCircuitEndTemperature>([\s\S]*?)<\/cim:ACLineSegment.shortCircuitEndTemperature>/g, sub, context, true);
            obj.x0 = parse_element (/<cim:ACLineSegment.x0>([\s\S]*?)<\/cim:ACLineSegment.x0>/g, sub, context, true);
            obj.x = parse_element (/<cim:ACLineSegment.x>([\s\S]*?)<\/cim:ACLineSegment.x>/g, sub, context, true);
            obj.LineGroundingAction = parse_attribute (/<cim:ACLineSegment.LineGroundingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.LineJumpingAction = parse_attribute (/<cim:ACLineSegment.LineJumpingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.perLengthImpedance = parse_attribute (/<cim:ACLineSegment.perLengthImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            lines = context.parsed.ACLineSegment;
            if (null == lines)
                context.parsed.ACLineSegment = lines = {};
            lines[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ACLineSegmentPhase.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ACLineSegmentPhase - the list of ACLineSegmentPhase elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_ACLineSegmentPhase (context, sub)
        {
            var obj;
            var phases;

            obj = parse_PowerSystemResource (context, sub);
            obj.cls = "ACLineSegmentPhase";
            obj.phase = parse_attribute (/<cim:ACLineSegmentPhase.phase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.ACLineSegment = parse_attribute (/<cim:ACLineSegmentPhase.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            phases = context.parsed.ACLineSegmentPhase;
            if (null == phases)
                context.parsed.ACLineSegmentPhase = phases = {};
            phases[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a BusbarSection.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.BusbarSection - the list of BusbarSection elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_BusbarSection (context, sub)
        {
            var obj;
            var sections;

            obj = parse_Connector (context, sub);
            obj.cls = "BusbarSection";
            obj.ipMax = parse_element (/<cim:BusbarSection.ipMax>([\s\S]*?)<\/cim:BusbarSection.ipMax>/g, sub, context, true);
            obj.VoltageControlZone = parse_attribute (/<cim:BusbarSection.VoltageControlZone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            sections = context.parsed.BusbarSection;
            if (null == sections)
                context.parsed.BusbarSection = sections = {};
            sections[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Conductor.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Conductor - the list of Conductor elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Conductor (context, sub)
        {
            var obj;
            var conductors;

            obj = parse_ConductingEquipment (context, sub);
            obj.cls = "Conductor";
            obj.length = parse_element (/<cim:Conductor.length>([\s\S]*?)<\/cim:Conductor.length>/g, sub, context, true);
            if (null != obj.length)
                obj.length = Number (obj.length);
            conductors = context.parsed.Conductor;
            if (null == conductors)
                context.parsed.Conductor = conductors = {};
            conductors[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Connector.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Connector - the list of Connector elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Connector (context, sub)
        {
            var obj;
            var conductors;

            obj = parse_ConductingEquipment (context, sub);
            obj.cls = "Connector";
            conductors = context.parsed.Connector;
            if (null == conductors)
                context.parsed.Connector = conductors = {};
            conductors[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Disconnector.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Disconnector - the list of Disconnector elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Disconnector (context, sub)
        {
            var obj;
            var disconnectors;

            obj = parse_Switch (context, sub);
            obj.cls = "Disconnector";
            disconnectors = context.parsed.Disconnector;
            if (null == disconnectors)
                context.parsed.Disconnector = disconnectors = {};
            disconnectors[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a EnergyConsumer.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.EnergyConsumer - the list of EnergyConsumer elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_EnergyConsumer (context, sub)
        {
            var obj;
            var consumers;

            obj = parse_ConductingEquipment (context, sub);
            obj.cls = "EnergyConsumer";
            obj.customerCount = parse_element (/<cim:EnergyConsumer.customerCount>([\s\S]*?)<\/cim:EnergyConsumer.customerCount>/g, sub, context, true);
            obj.grounded = parse_element (/<cim:EnergyConsumer.grounded>([\s\S]*?)<\/cim:EnergyConsumer.grounded>/g, sub, context, true);
            obj.p = parse_element (/<cim:EnergyConsumer.p>([\s\S]*?)<\/cim:EnergyConsumer.p>/g, sub, context, true);
            obj.pfixed = parse_element (/<cim:EnergyConsumer.pfixed>([\s\S]*?)<\/cim:EnergyConsumer.pfixed>/g, sub, context, true);
            obj.pfixedPct = parse_element (/<cim:EnergyConsumer.pfixedPct>([\s\S]*?)<\/cim:EnergyConsumer.pfixedPct>/g, sub, context, true);
            obj.phaseConnection = parse_attribute (/<cim:EnergyConsumer.phaseConnection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.q = parse_element (/<cim:EnergyConsumer.q>([\s\S]*?)<\/cim:EnergyConsumer.q>/g, sub, context, true);
            obj.qfixed = parse_element (/<cim:EnergyConsumer.qfixed>([\s\S]*?)<\/cim:EnergyConsumer.qfixed>/g, sub, context, true);
            obj.qfixedPct = parse_element (/<cim:EnergyConsumer.qfixedPct>([\s\S]*?)<\/cim:EnergyConsumer.qfixedPct>/g, sub, context, true);
            obj.LoadDynamics = parse_attribute (/<cim:EnergyConsumer.LoadDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.LoadResponse = parse_attribute (/<cim:EnergyConsumer.LoadResponse\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.PowerCutZone = parse_attribute (/<cim:EnergyConsumer.PowerCutZone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            consumers = context.parsed.EnergyConsumer;
            if (null == consumers)
                context.parsed.EnergyConsumer = consumers = {};
            consumers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Fuse.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Fuse - the list of Fuse elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Fuse (context, sub)
        {
            var obj;
            var fuses;

            obj = parse_Switch (context, sub);
            obj.cls = "Fuse";
            fuses = context.parsed.Fuse;
            if (null == fuses)
                context.parsed.Fuse = fuses = {};
            fuses[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a GroundDisconnector.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.GroundDisconnector - the list of GroundDisconnector elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_GroundDisconnector (context, sub)
        {
            var obj;
            var disconnectors;

            obj = parse_Switch (context, sub);
            obj.cls = "GroundDisconnector";
            disconnectors = context.parsed.GroundDisconnector;
            if (null == disconnectors)
                context.parsed.GroundDisconnector = disconnectors = {};
            disconnectors[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Jumper.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Jumper - the list of Jumper elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Jumper (context, sub)
        {
            var obj;
            var jumpers;

            obj = parse_Switch (context, sub);
            obj.cls = "Jumper";
            obj.JumperAction = parse_attribute (/<cim:Jumper.JumperAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            jumpers = context.parsed.Jumper;
            if (null == jumpers)
                context.parsed.Jumper = jumpers = {};
            jumpers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Junction.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Junction - the list of Junction elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Junction (context, sub)
        {
            var obj;
            var junctions;

            obj = parse_Connector (context, sub);
            obj.cls = "Junction";
            junctions = context.parsed.Junction;
            if (null == junctions)
                context.parsed.Junction = junctions = {};
            junctions[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Line.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Line - the list of Line elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Line (context, sub)
        {
            var obj;
            var lines;

            obj = parse_EquipmentContainer (context, sub);
            obj.cls = "Line";
            obj.Region = parse_attribute (/<cim:Line.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            lines = context.parsed.Line;
            if (null == lines)
                context.parsed.Line = lines = {};
            lines[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a LoadBreakSwitch.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.LoadBreakSwitch - the list of LoadBreakSwitch elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_LoadBreakSwitch (context, sub)
        {
            var obj;
            var switches;

            obj = parse_ProtectedSwitch (context, sub);
            obj.cls = "LoadBreakSwitch";
            switches = context.parsed.LoadBreakSwitch;
            if (null == switches)
                context.parsed.LoadBreakSwitch = switches = {};
            switches[obj.id] = obj;

            return (obj);
        }


        /**
         * Parse a PowerTransformer.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PowerTransformer - the list of PowerTransformer elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_PowerTransformer (context, sub)
        {
            var obj;
            var transformers;

            obj = parse_ConductingEquipment (context, sub);
            obj.cls = "PowerTransformer";
            obj.beforeShCircuitHighestOperatingCurrent = parse_element (/<cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent>([\s\S]*?)<\/cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent>/g, sub, context, true);
            obj.beforeShCircuitHighestOperatingVoltage = parse_element (/<cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage>([\s\S]*?)<\/cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage>/g, sub, context, true);
            obj.beforeShortCircuitAnglePf = parse_element (/<cim:PowerTransformer.beforeShortCircuitAnglePf>([\s\S]*?)<\/cim:PowerTransformer.beforeShortCircuitAnglePf>/g, sub, context, true);
            obj.highSideMinOperatingU = parse_element (/<cim:PowerTransformer.highSideMinOperatingU>([\s\S]*?)<\/cim:PowerTransformer.highSideMinOperatingU>/g, sub, context, true);
            obj.isPartOfGeneratorUnit = parse_element (/<cim:PowerTransformer.isPartOfGeneratorUnit>([\s\S]*?)<\/cim:PowerTransformer.isPartOfGeneratorUnit>/g, sub, context, true);
            obj.operationalValuesConsidered = parse_element (/<cim:PowerTransformer.operationalValuesConsidered>([\s\S]*?)<\/cim:PowerTransformer.operationalValuesConsidered>/g, sub, context, true);
            obj.vectorGroup = parse_element (/<cim:PowerTransformer.vectorGroup>([\s\S]*?)<\/cim:PowerTransformer.vectorGroup>/g, sub, context, true);
            obj.qfixedPct = parse_element (/<cim:PowerTransformer.qfixedPct>([\s\S]*?)<\/cim:PowerTransformer.qfixedPct>/g, sub, context, true);
            obj.qfixedPct = parse_element (/<cim:PowerTransformer.qfixedPct>([\s\S]*?)<\/cim:PowerTransformer.qfixedPct>/g, sub, context, true);
            obj.Region = parse_attribute (/<cim:PowerTransformer.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            transformers = context.parsed.PowerTransformer;
            if (null == transformers)
                context.parsed.PowerTransformer = transformers = {};
            transformers[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a PowerTransformerEnd.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.PowerTransformerEnd - the list of PowerTransformerEnd elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_PowerTransformerEnd (context, sub)
        {
            var obj;
            var ends;

            obj = parse_TransformerEnd (context, sub);
            obj.cls = "PowerTransformerEnd";
            obj.b0 = parse_element (/<cim:PowerTransformerEnd.b0>([\s\S]*?)<\/cim:PowerTransformerEnd.b0>/g, sub, context, true);
            obj.b = parse_element (/<cim:PowerTransformerEnd.b>([\s\S]*?)<\/cim:PowerTransformerEnd.b>/g, sub, context, true);
            obj.connectionKind = parse_attribute (/<cim:PowerTransformerEnd.connectionKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.g0 = parse_element (/<cim:PowerTransformerEnd.g0>([\s\S]*?)<\/cim:PowerTransformerEnd.g0>/g, sub, context, true);
            obj.g = parse_element (/<cim:PowerTransformerEnd.g>([\s\S]*?)<\/cim:PowerTransformerEnd.g>/g, sub, context, true);
            obj.phaseAngleClock = parse_element (/<cim:PowerTransformerEnd.phaseAngleClock>([\s\S]*?)<\/cim:PowerTransformerEnd.phaseAngleClock>/g, sub, context, true);
            obj.r0 = parse_element (/<cim:PowerTransformerEnd.r0>([\s\S]*?)<\/cim:PowerTransformerEnd.r0>/g, sub, context, true);
            obj.r = parse_element (/<cim:PowerTransformerEnd.r>([\s\S]*?)<\/cim:PowerTransformerEnd.r>/g, sub, context, true);
            obj.ratedS = parse_element (/<cim:PowerTransformerEnd.ratedS>([\s\S]*?)<\/cim:PowerTransformerEnd.ratedS>/g, sub, context, true);
            obj.ratedU = parse_element (/<cim:PowerTransformerEnd.ratedU>([\s\S]*?)<\/cim:PowerTransformerEnd.ratedU>/g, sub, context, true);
            obj.x0 = parse_element (/<cim:PowerTransformerEnd.x0>([\s\S]*?)<\/cim:PowerTransformerEnd.x0>/g, sub, context, true);
            obj.x = parse_element (/<cim:PowerTransformerEnd.x>([\s\S]*?)<\/cim:PowerTransformerEnd.x>/g, sub, context, true);
            obj.PowerTransformer = parse_attribute (/<cim:PowerTransformerEnd.PowerTransformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            ends = context.parsed.PowerTransformerEnd;
            if (null == ends)
                context.parsed.PowerTransformerEnd = ends = {};
            ends[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a ProtectedSwitch.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.ProtectedSwitch - the list of ProtectedSwitch elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_ProtectedSwitch (context, sub)
        {
            var obj;
            var switches;

            obj = parse_Switch (context, sub);
            obj.cls = "ProtectedSwitch";
            obj.breakingCapacity = parse_element (/<cim:ProtectedSwitch.breakingCapacity>([\s\S]*?)<\/cim:ProtectedSwitch.breakingCapacity>/g, sub, context, true);
            switches = context.parsed.ProtectedSwitch;
            if (null == switches)
                context.parsed.ProtectedSwitch = switches = {};
            switches[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a Switch.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.Switch - the list of Switch elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_Switch (context, sub)
        {
            var obj;
            var switches;

            obj = parse_ConductingEquipment (context, sub);
            obj.cls = "Switch";
            obj.normalOpen = parse_element (/<cim:Switch.normalOpen>([\s\S]*?)<\/cim:Switch.normalOpen>/g, sub, context, true);
            obj.open = parse_element (/<cim:Switch.open>([\s\S]*?)<\/cim:Switch.open>/g, sub, context, true);
            obj.ratedCurrent = parse_element (/<cim:Switch.ratedCurrent>([\s\S]*?)<\/cim:Switch.ratedCurrent>/g, sub, context, true);
            obj.retained = parse_element (/<cim:Switch.retained>([\s\S]*?)<\/cim:Switch.retained>/g, sub, context, true);
            obj.switchOnCount = parse_element (/<cim:Switch.switchOnCount>([\s\S]*?)<\/cim:Switch.switchOnCount>/g, sub, context, true);
            obj.switchOnDate = parse_element (/<cim:Switch.switchOnDate>([\s\S]*?)<\/cim:Switch.switchOnDate>/g, sub, context, true);
            obj.CompositeSwitch = parse_attribute (/<cim:Switch.CompositeSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Outage = parse_attribute (/<cim:Switch.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.SwitchAction = parse_attribute (/<cim:Switch.SwitchAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            switches = context.parsed.Switch;
            if (null == switches)
                context.parsed.Switch = switches = {};
            switches[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a TransformerEnd.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.TransformerEnd - the list of TransformerEnd elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_TransformerEnd (context, sub)
        {
            var obj;
            var ends;

            obj = parse_IdentifiedObject (context, sub);
            obj.cls = "TransformerEnd";
            obj.bmagSat = parse_element (/<cim:TransformerEnd.bmagSat>([\s\S]*?)<\/cim:TransformerEnd.bmagSat>/g, sub, context, true);
            obj.endNumber = parse_element (/<cim:TransformerEnd.endNumber>([\s\S]*?)<\/cim:TransformerEnd.endNumber>/g, sub, context, true);
            obj.grounded = parse_element (/<cim:TransformerEnd.grounded>([\s\S]*?)<\/cim:TransformerEnd.grounded>/g, sub, context, true);
            obj.magBaseU = parse_element (/<cim:TransformerEnd.magBaseU>([\s\S]*?)<\/cim:TransformerEnd.magBaseU>/g, sub, context, true);
            obj.magSatFlux = parse_element (/<cim:TransformerEnd.magSatFlux>([\s\S]*?)<\/cim:TransformerEnd.magSatFlux>/g, sub, context, true);
            obj.rground = parse_element (/<cim:TransformerEnd.rground>([\s\S]*?)<\/cim:TransformerEnd.rground>/g, sub, context, true);
            obj.xground = parse_element (/<cim:TransformerEnd.bmagSat>([\s\S]*?)<\/cim:TransformerEnd.xground>/g, sub, context, true);
            obj.BaseVoltage = parse_attribute (/<cim:TransformerEnd.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.CoreAdmittance = parse_attribute (/<cim:TransformerEnd.CoreAdmittance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.PhaseTapChanger = parse_attribute (/<cim:TransformerEnd.PhaseTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.StarImpedance = parse_attribute (/<cim:TransformerEnd.StarImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.Terminal = parse_attribute (/<cim:TransformerEnd.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.RatioTapChanger = parse_attribute (/<cim:TransformerEnd.RatioTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.RatioTapChanger = parse_attribute (/<cim:TransformerEnd.RatioTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj.RatioTapChanger = parse_attribute (/<cim:TransformerEnd.RatioTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            ends = context.parsed.TransformerEnd;
            if (null == ends)
                context.parsed.TransformerEnd = ends = {};
            ends[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a TransformerTank.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.TransformerTank - the list of TransformerTank elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_TransformerTank (context, sub)
        {
            var obj;
            var tanks;

            obj = parse_Equipment (context, sub);
            obj.cls = "TransformerTank";
            obj.PowerTransformer = parse_attribute (/<cim:TransformerTank.PowerTransformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            tanks = context.parsed.TransformerTank;
            if (null == tanks)
                context.parsed.TransformerTank = tanks = {};
            tanks[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse a TransformerTankEnd element.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.TransformerTankEnd - the list of TransformerTankEnd elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_TransformerTankEnd (context, sub)
        {
            var obj;
            var tanks;

            obj = parse_TransformerEnd (context, sub);
            obj.cls = "TransformerTankEnd";
            obj.TransformerTank = parse_attribute (/<cim:TransformerTankEnd.TransformerTank\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            tanks = context.parsed.TransformerTankEnd;
            if (null == tanks)
                context.parsed.TransformerTankEnd = tanks = {};
            tanks[obj.id] = obj;

            return (obj);
        }

        /*
         * Package Work
         */

        /**
         * Parse a WorkLocation.
         * @param {Object} context - the file reading context
         * @param {Object} context.parsed.WorkLocation - the list of WorkLocation elements
         * @param {String} sub - the substring within which to parse the element
         * @memberOf module:cim
         */
        function parse_WorkLocation (context, sub)
        {
            var obj;
            var locations;

            obj = parse_Location (context, sub);
            obj.cls = "WorkLocation";
            obj.TransformerTank = parse_attribute (/<cim:WorkLocation.OneCallRequest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            locations = context.parsed.WorkLocation;
            if (null == locations)
                context.parsed.WorkLocation = locations = {};
            locations[obj.id] = obj;

            return (obj);
        }

        /**
         * Parse an XML file into constituent parts
         * @param {String} xml - the string to parse
         * @param {Object} context - the file reading context
         * @param {Object} parsed - optional parsed elements to add to
         * @returns {Object} the parsed object
         * @memberOf module:cim
         */
        function read_xml (xml, context, parsed)
        {
            var regex;
            var startindex;
            var result;
            var subcontext;

            context = context ||
            {
                start_character: 0,
                end_character: 0,
                newlines: [],
                parsed: parsed || { ignored: 0 }
            };

            // update the newline index
            context.newlines = index_string (xml, context.start_character, context.newlines);
            context.end_character = context.start_character;

            // scan for cim elements
            regex = new RegExp ("\\s*<(cim:[^ >\\s]+)([\\s\\S]*?)<\\/\\1>\\s*", "g");
//            regex = /\s*<(cim:[^ >\\s]+)([\s\S]*?)<\/\1>\s*/g; // important to consume leading and trailing whitespace
            startindex = 0;
            while (null != (result = regex.exec (xml)))
            {
                // check for a complete outer element,
                // i.e. check that the matched pattern length fills starting index to ending index
                // this is in lieu of all browser support for the sticky flag - y
                if (startindex + result[0].length != regex.lastIndex)
                    break;
                startindex = regex.lastIndex;

                // update the last seen character position
                context.end_character = context.start_character + regex.lastIndex;
                // form the subcontext for parsing individual elements
                subcontext =
                {
                    start_character: context.start_character + result.index,
                    end_character: context.end_character,
                    newlines: context.newlines,
                    parsed: context.parsed
                };
                // parse individual elements
                var element = result[1];
                var guts = result[2];
                switch (element)
                {
                    case "cim:ActivityRecord":
                        parse_ActivityRecord (subcontext, guts);
                        break;
                    case "cim:Agreement":
                        parse_Agreement (subcontext, guts);
                        break;
                    case "cim:Appointment":
                        parse_Appointment (subcontext, guts);
                        break;
                    case "cim:ConfigurationEvent":
                        parse_ConfigurationEvent (subcontext, guts);
                        break;
                    case "cim:CoordinateSystem":
                        parse_CoordinateSystem (subcontext, guts);
                        break;
                    case "cim:Crew":
                        parse_Crew (subcontext, guts);
                        break;
                    case "cim:CrewMember":
                        parse_CrewMember (subcontext, guts);
                        break;
                    case "cim:CrewType":
                        parse_CrewType (subcontext, guts);
                        break;
                    case "cim:Document":
                        parse_Document (subcontext, guts);
                        break;
                    case "cim:ElectronicAddress":
                        parse_ElectronicAddress (subcontext, guts);
                        break;
                    case "cim:Hazard":
                        parse_Hazard (subcontext, guts);
                        break;
                    case "cim:Location":
                        parse_Location (subcontext, guts);
                        break;
                    case "cim:OperationPersonRole":
                        parse_OperationPersonRole (subcontext, guts);
                        break;
                    case "cim:Operator":
                        parse_Operator (subcontext, guts);
                        break;
                    case "cim:Organisation":
                        parse_Organisation (subcontext, guts);
                        break;
                    case "cim:OrganisationRole":
                        parse_OrganisationRole (subcontext, guts);
                        break;
                    case "cim:Ownership":
                        parse_Ownership (subcontext, guts);
                        break;
                    case "cim:Person":
                        parse_Person (subcontext, guts);
                        break;
                    case "cim:PersonRole":
                        parse_PersonRole (subcontext, guts);
                        break;
                    case "cim:PositionPoint":
                        parse_PositionPoint (subcontext, guts);
                        break;
                    case "cim:PostalAddress":
                        parse_PostalAddress (subcontext, guts);
                        break;
                    case "cim:Priority":
                        parse_Priority (subcontext, guts);
                        break;
                    case "cim:ScheduledEventData":
                        parse_ScheduledEventData (subcontext, guts);
                        break;
                    case "cim:Status":
                        parse_Status (subcontext, guts);
                        break;
                    case "cim:StreetAddress":
                        parse_StreetAddress (subcontext, guts);
                        break;
                    case "cim:StreetDetail":
                        parse_StreetDetail (subcontext, guts);
                        break;
                    case "cim:TelephoneNumber":
                        parse_TelephoneNumber (subcontext, guts);
                        break;
                    case "cim:TimePoint":
                        parse_TimePoint (subcontext, guts);
                        break;
                    case "cim:TimeSchedule":
                        parse_TimeSchedule (subcontext, guts);
                        break;
                    case "cim:TownDetail":
                        parse_TownDetail (subcontext, guts);
                        break;
                    case "cim:UserAttribute":
                        parse_UserAttribute (subcontext, guts);
                        break;
                    case "cim:ACDCTerminal":
                        parse_ACDCTerminal (subcontext, guts);
                        break;
                    case "cim:BaseVoltage":
                        parse_BaseVoltage (subcontext, guts);
                        break;
                    case "cim:Bay":
                        parse_Bay (subcontext, guts);
                        break;
                    case "cim:ConductingEquipment":
                        parse_ConductingEquipment (subcontext, guts);
                        break;
                    case "cim:ConnectivityNode":
                        parse_ConnectivityNode (subcontext, guts);
                        break;
                    case "cim:ConnectivityNodeContainer":
                        parse_ConnectivityNodeContainer (subcontext, guts);
                        break;
                    case "cim:Equipment":
                        parse_Equipment (subcontext, guts);
                        break;
                    case "cim:EquipmentContainer":
                        parse_EquipmentContainer (subcontext, guts);
                        break;
                    case "cim:IdentifiedObject":
                        parse_IdentifiedObject (subcontext, guts);
                        break;
                    case "cim:Name":
                        parse_Name (subcontext, guts);
                        break;
                    case "cim:NameType":
                        parse_NameType (subcontext, guts);
                        break;
                    case "cim:NameTypeAuthority":
                        parse_NameTypeAuthority (subcontext, guts);
                        break;
                    case "cim:PSRType":
                        parse_PSRType (subcontext, guts);
                        break;
                    case "cim:PowerSystemResource":
                        parse_PowerSystemResource (subcontext, guts);
                        break;
                    case "cim:Substation":
                        parse_Substation (subcontext, guts);
                        break;
                    case "cim:Terminal":
                        parse_Terminal (subcontext, guts);
                        break;
                    case "cim:VoltageLevel":
                        parse_VoltageLevel (subcontext, guts);
                        break;
                    case "cim:GeneratingUnit":
                        parse_GeneratingUnit (subcontext, guts);
                        break;
                    case "cim:SolarGeneratingUnit":
                        parse_SolarGeneratingUnit (subcontext, guts);
                        break;
                    case "cim:CurrentRelay":
                        parse_CurrentRelay (subcontext, guts);
                        break;
                    case "cim:ProtectionEquipment":
                        parse_ProtectionEquipment (subcontext, guts);
                        break;
                    case "cim:StateVariable":
                        parse_StateVariable (subcontext, guts);
                        break;
                    case "cim:SvStatus":
                        parse_SvStatus (subcontext, guts);
                        break;
                    case "cim:Customer":
                        parse_Customer (subcontext, guts);
                        break;
                    case "cim:CustomerAccount":
                        parse_CustomerAccount (subcontext, guts);
                        break;
                    case "cim:CustomerAgreement":
                        parse_CustomerAgreement (subcontext, guts);
                        break;
                    case "cim:CustomerNotification":
                        parse_CustomerNotification (subcontext, guts);
                        break;
                    case "cim:IncidentHazard":
                        parse_IncidentHazard (subcontext, guts);
                        break;
                    case "cim:PricingStructure":
                        parse_PricingStructure (subcontext, guts);
                        break;
                    case "cim:ServiceCategory":
                        parse_ServiceCategory (subcontext, guts);
                        break;
                    case "cim:ServiceLocation":
                        parse_ServiceLocation (subcontext, guts);
                        break;
                    case "cim:Tariff":
                        parse_Tariff (subcontext, guts);
                        break;
                    case "cim:TroubleTicket":
                        parse_TroubleTicket (subcontext, guts);
                        break;
                    case "cim:ACLineSegment":
                        parse_ACLineSegment (subcontext, guts);
                        break;
                    case "cim:ACLineSegmentPhase":
                        parse_ACLineSegmentPhase (subcontext, guts);
                        break;
                    case "cim:BusbarSection":
                        parse_BusbarSection (subcontext, guts);
                        break;
                    case "cim:Conductor":
                        parse_Conductor (subcontext, guts);
                        break;
                    case "cim:Connector":
                        parse_Connector (subcontext, guts);
                        break;
                    case "cim:Disconnector":
                        parse_Disconnector (subcontext, guts);
                        break;
                    case "cim:EnergyConsumer":
                        parse_EnergyConsumer (subcontext, guts);
                        break;
                    case "cim:Fuse":
                        parse_Fuse (subcontext, guts);
                        break;
                    case "cim:GroundDisconnector":
                        parse_GroundDisconnector (subcontext, guts);
                        break;
                    case "cim:Jumper":
                        parse_Jumper (subcontext, guts);
                        break;
                    case "cim:Junction":
                        parse_Junction (subcontext, guts);
                        break;
                    case "cim:Line":
                        parse_Line (subcontext, guts);
                        break;
                    case "cim:LoadBreakSwitch":
                        parse_LoadBreakSwitch (subcontext, guts);
                        break;
                    case "cim:PowerTransformer":
                        parse_PowerTransformer (subcontext, guts);
                        break;
                    case "cim:PowerTransformerEnd":
                        parse_PowerTransformerEnd (subcontext, guts);
                        break;
                    case "cim:ProtectedSwitch":
                        parse_ProtectedSwitch (subcontext, guts);
                        break;
                    case "cim:Switch":
                        parse_Switch (subcontext, guts);
                        break;
                    case "cim:TransformerEnd":
                        parse_TransformerEnd (subcontext, guts);
                        break;
                    case "cim:TransformerTank":
                        parse_TransformerTank (subcontext, guts);
                        break;
                    case "cim:TransformerTankEnd":
                        parse_TransformerTankEnd (subcontext, guts);
                        break;
                    case "cim:WorkLocation":
                        parse_WorkLocation (subcontext, guts);
                        break;

                    default:
                        if (context.parsed.ignored < 3)
                            console.log ("unrecognized element type '" + result[1] + "' at line " + line_number (subcontext));
                        context.parsed.ignored++;
                        break;
                }
                result = null;
            }

            return ({parsed: context.parsed, context: context});
        }

        /**
         * @summary Read a blob as XML and resolve or reject.
         * @description Reads a blob as UTF8 and parses the XML.
         * @param {Blob} blob - the blob to read
         * @param {Number} start - the starting byte to read from the blob
         * @param {Object} context - the state of the parser
         * @param {Object} parsed - the output of the parser so far
         * @param {Function} resolve - the function to call to resolve the promise
         * @param {Function} reject - the function to call to reject the promise
         * @function xml_read_promise
         * @memberOf module:cim
         */
        function xml_read_promise (blob, start, context, parsed, resolve, reject)
        {
            var size;
            var tbd;
            var subblob;
            var reader;

            size = blob.size;
            tbd = Math.min (CHUNK_SIZE, size - start);
            subblob = blob.slice (start, start + tbd, blob.type);
            reader = new FileReader ();
            reader.onload = function (event)
            {
                var xml;
                var subxml;
                var offset;
                var regex;
                var encoding;
                var result;
                var read;
                var bytes;
                var done;

                xml = event.target.result;
                subxml = xml;
                offset = 0;
                //console.log ("parsing at line " + (context ? line_number (context) : "0") + " beginning with:\n" + xml.substring (0, xml.indexOf ("\n")));

                // check for just starting
                if (0 == start)
                {
                    context = context ||
                    {
                        start_character: 0,
                        end_character: 0,
                        newlines: [],
                        parsed: { ignored: 0 }
                    };

                    // remove the XML declaration, i.e. <?xml version="1.0" encoding="UTF-8" standalone="no"?>
                    regex = /<\?([\s\S]*)\?>\s*/g;
                    if (null != (result = regex.exec (subxml)))
                    {
                        context.newlines = index_string (subxml.substring (0, regex.lastIndex), context.start_character, context.newlines);
                        context.start_character += regex.lastIndex;
                        subxml = subxml.substring (regex.lastIndex);
                        offset += regex.lastIndex;
                        // check the encoding
                        regex = /encoding="([^"]*)"/g;
                        if (null != (result = regex.exec (result[1])))
                        {
                            encoding = result[1];
                            if ("UTF-8" != encoding.toUpperCase ())
                                reject (Error ("unsupported encoding " + encoding));
                        }
                    }

                    // parse RDF, i.e. <rdf:RDF xmlns:dm="http://iec.ch/2002/schema/CIM_difference_model#" xmlns:cim="http://iec.ch/TC57/2010/CIM-schema-cim15#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                    regex = /<rdf:RDF([\s\S]*?)>\s*/g;
                    if (null != (result = regex.exec (subxml)))
                    {
                        context.newlines = index_string (subxml.substring (0, regex.lastIndex), context.start_character, context.newlines);
                        context.start_character += regex.lastIndex;
                        subxml = subxml.substring (regex.lastIndex);
                        offset += regex.lastIndex;
                    }

                    // parse FullModel, i.e. <md:FullModel ....  </md:FullModel>
                    regex = new RegExp ("\\s*<md:FullModel ([\\s\\S]*?)<\\/md:FullModel>\\s*", "g");
                    if (null != (result = regex.exec (subxml)))
                    {
                        context.newlines = index_string (subxml.substring (0, regex.lastIndex), context.start_character, context.newlines);
                        context.start_character += regex.lastIndex;
                        subxml = subxml.substring (regex.lastIndex);
                        offset += regex.lastIndex;
                    }
                }

                context.end_character = context.start_character;
                result = read_xml (subxml, context, parsed);
                read = result.context.end_character - result.context.start_character; // number of characters parsed
                if (0 == read)
                    reject (Error ("parse failed at line " + line_number (context)));
                else
                {
                    bytes = encode_utf8 (xml.substring (0, read + offset)).length;

                    context = result.context;
                    parsed = result.parsed;

                    // check for done
                    done = false;
                    regex = /\s*<\/rdf:RDF>\s*/g;
                    if (null != (result = regex.exec (subxml.substring (read))))
                    {
                        context.end_character += regex.lastIndex;
                        done = true;
                    }
                    else
                    {
                        context.start_character = context.start_character + read;
                        context.newlines = context.newlines.slice (0, line_number (context, context.end_character) - 1);
                    }

                    if (done)
                        resolve ({context: context, parsed: parsed});
                    else
                        xml_read_promise (blob, start + bytes, context, parsed, resolve, reject); // tail recursive
                }
            };
            reader.onerror = function ()
            {
                reject (Error ("reader error"));
            };
            reader.readAsText (subblob, "UTF-8");
        }

        /**
         * @summary Read a blob as XML.
         * @description Processes chunks of the file reading the blob as UTF8.
         * @param {Blob} blob - the blob to read
         * @param {Function} callback - function to call back with the data: { parsed: data, context: ctx }
         * @function read_xml_blob
         * @memberOf module:cim
         */
        function read_xml_blob (blob, callback)
        {
            var promise;

            promise = new Promise (xml_read_promise.bind (this, blob, 0, null, null));
            promise.then
            (
                function (result)
                {
                    callback (result);
                },
                function (err)
                {
                    console.log (err);
                }
            );
        }

        return (
            {
                index_string: index_string,
                line_number: line_number,
                parse_element: parse_element,
                parse_attribute: parse_attribute,
                read_xml: read_xml,
                read_xml_blob: read_xml_blob
            }
        );
    }
);