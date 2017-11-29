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
         * Parent class for different groupings of information collected and managed as a part of a business process.
         *
         * It will frequently contain references to other objects, such as assets, people and power system resources.
         *
         */
        class Document extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Document;
                if (null == bucket)
                   cim_data.Document = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Document[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.Document;
                if (null == bucket)
                   context.parsed.Document = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Document_collapse" aria-expanded="true" aria-controls="Document_collapse">Document</a>
<div id="Document_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#authorName}}<div><b>authorName</b>: {{authorName}}</div>{{/authorName}}
{{#createdDateTime}}<div><b>createdDateTime</b>: {{createdDateTime}}</div>{{/createdDateTime}}
{{#docStatus}}<div><b>docStatus</b>: {{docStatus}}</div>{{/docStatus}}
{{#electronicAddress}}<div><b>electronicAddress</b>: {{electronicAddress}}</div>{{/electronicAddress}}
{{#lastModifiedDateTime}}<div><b>lastModifiedDateTime</b>: {{lastModifiedDateTime}}</div>{{/lastModifiedDateTime}}
{{#revisionNumber}}<div><b>revisionNumber</b>: {{revisionNumber}}</div>{{/revisionNumber}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#subject}}<div><b>subject</b>: {{subject}}</div>{{/subject}}
{{#title}}<div><b>title</b>: {{title}}</div>{{/title}}
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
{{#comment}}<div><b>comment</b>: {{comment}}</div>{{/comment}}
</div>
`
                );
           }        }

        /**
         * General purpose street address information.
         *
         */
        class StreetAddress extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StreetAddress;
                if (null == bucket)
                   cim_data.StreetAddress = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StreetAddress[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "StreetAddress";
                base.parse_element (/<cim:StreetAddress.status>([\s\S]*?)<\/cim:StreetAddress.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:StreetAddress.streetDetail>([\s\S]*?)<\/cim:StreetAddress.streetDetail>/g, obj, "streetDetail", base.to_string, sub, context);
                base.parse_element (/<cim:StreetAddress.townDetail>([\s\S]*?)<\/cim:StreetAddress.townDetail>/g, obj, "townDetail", base.to_string, sub, context);

                var bucket = context.parsed.StreetAddress;
                if (null == bucket)
                   context.parsed.StreetAddress = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "StreetAddress", "status", base.from_string, fields);
                base.export_element (obj, "StreetAddress", "streetDetail", base.from_string, fields);
                base.export_element (obj, "StreetAddress", "townDetail", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#StreetAddress_collapse" aria-expanded="true" aria-controls="StreetAddress_collapse">StreetAddress</a>
<div id="StreetAddress_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#streetDetail}}<div><b>streetDetail</b>: {{streetDetail}}</div>{{/streetDetail}}
{{#townDetail}}<div><b>townDetail</b>: {{townDetail}}</div>{{/townDetail}}
</div>
`
                );
           }        }

        /**
         * Identifies a way in which an organisation may participate in the utility enterprise (e.g., customer, manufacturer, etc).
         *
         */
        class OrganisationRole extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OrganisationRole;
                if (null == bucket)
                   cim_data.OrganisationRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OrganisationRole[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OrganisationRole";
                base.parse_attribute (/<cim:OrganisationRole.Organisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Organisation", sub, context);

                var bucket = context.parsed.OrganisationRole;
                if (null == bucket)
                   context.parsed.OrganisationRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OrganisationRole", "Organisation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OrganisationRole_collapse" aria-expanded="true" aria-controls="OrganisationRole_collapse">OrganisationRole</a>
<div id="OrganisationRole_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#Organisation}}<div><b>Organisation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Organisation}}&quot;);})'>{{Organisation}}</a></div>{{/Organisation}}
</div>
`
                );
           }        }

        /**
         * Electronic address information.
         *
         */
        class ElectronicAddress extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ElectronicAddress;
                if (null == bucket)
                   cim_data.ElectronicAddress = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ElectronicAddress[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ElectronicAddress";
                base.parse_element (/<cim:ElectronicAddress.email1>([\s\S]*?)<\/cim:ElectronicAddress.email1>/g, obj, "email1", base.to_string, sub, context);
                base.parse_element (/<cim:ElectronicAddress.email2>([\s\S]*?)<\/cim:ElectronicAddress.email2>/g, obj, "email2", base.to_string, sub, context);
                base.parse_element (/<cim:ElectronicAddress.lan>([\s\S]*?)<\/cim:ElectronicAddress.lan>/g, obj, "lan", base.to_string, sub, context);
                base.parse_element (/<cim:ElectronicAddress.mac>([\s\S]*?)<\/cim:ElectronicAddress.mac>/g, obj, "mac", base.to_string, sub, context);
                base.parse_element (/<cim:ElectronicAddress.password>([\s\S]*?)<\/cim:ElectronicAddress.password>/g, obj, "password", base.to_string, sub, context);
                base.parse_element (/<cim:ElectronicAddress.radio>([\s\S]*?)<\/cim:ElectronicAddress.radio>/g, obj, "radio", base.to_string, sub, context);
                base.parse_element (/<cim:ElectronicAddress.userID>([\s\S]*?)<\/cim:ElectronicAddress.userID>/g, obj, "userID", base.to_string, sub, context);
                base.parse_element (/<cim:ElectronicAddress.web>([\s\S]*?)<\/cim:ElectronicAddress.web>/g, obj, "web", base.to_string, sub, context);

                var bucket = context.parsed.ElectronicAddress;
                if (null == bucket)
                   context.parsed.ElectronicAddress = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ElectronicAddress_collapse" aria-expanded="true" aria-controls="ElectronicAddress_collapse">ElectronicAddress</a>
<div id="ElectronicAddress_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#email1}}<div><b>email1</b>: {{email1}}</div>{{/email1}}
{{#email2}}<div><b>email2</b>: {{email2}}</div>{{/email2}}
{{#lan}}<div><b>lan</b>: {{lan}}</div>{{/lan}}
{{#mac}}<div><b>mac</b>: {{mac}}</div>{{/mac}}
{{#password}}<div><b>password</b>: {{password}}</div>{{/password}}
{{#radio}}<div><b>radio</b>: {{radio}}</div>{{/radio}}
{{#userID}}<div><b>userID</b>: {{userID}}</div>{{/userID}}
{{#web}}<div><b>web</b>: {{web}}</div>{{/web}}
</div>
`
                );
           }        }

        /**
         * Group of people with specific skills, tools, and vehicles.
         *
         */
        class Crew extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Crew;
                if (null == bucket)
                   cim_data.Crew = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Crew[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Crew";
                base.parse_element (/<cim:Crew.status>([\s\S]*?)<\/cim:Crew.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:Crew.CrewType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CrewType", sub, context);

                var bucket = context.parsed.Crew;
                if (null == bucket)
                   context.parsed.Crew = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Crew", "status", base.from_string, fields);
                base.export_attribute (obj, "Crew", "CrewType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Crew_collapse" aria-expanded="true" aria-controls="Crew_collapse">Crew</a>
<div id="Crew_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#CrewType}}<div><b>CrewType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CrewType}}&quot;);})'>{{CrewType}}</a></div>{{/CrewType}}
</div>
`
                );
           }        }

        /**
         * An event to trigger one or more activities, such as reading a meter, recalculating a bill, requesting work, when generating units must be scheduled for maintenance, when a transformer is scheduled to be refurbished, etc.
         *
         */
        class ScheduledEvent extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledEvent;
                if (null == bucket)
                   cim_data.ScheduledEvent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledEvent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledEvent";
                base.parse_element (/<cim:ScheduledEvent.duration>([\s\S]*?)<\/cim:ScheduledEvent.duration>/g, obj, "duration", base.to_string, sub, context);
                base.parse_element (/<cim:ScheduledEvent.status>([\s\S]*?)<\/cim:ScheduledEvent.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:ScheduledEvent.type>([\s\S]*?)<\/cim:ScheduledEvent.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attribute (/<cim:ScheduledEvent.ScheduledEventData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ScheduledEventData", sub, context);

                var bucket = context.parsed.ScheduledEvent;
                if (null == bucket)
                   context.parsed.ScheduledEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ScheduledEvent", "duration", base.from_string, fields);
                base.export_element (obj, "ScheduledEvent", "status", base.from_string, fields);
                base.export_element (obj, "ScheduledEvent", "type", base.from_string, fields);
                base.export_attribute (obj, "ScheduledEvent", "ScheduledEventData", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ScheduledEvent_collapse" aria-expanded="true" aria-controls="ScheduledEvent_collapse">ScheduledEvent</a>
<div id="ScheduledEvent_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#duration}}<div><b>duration</b>: {{duration}}</div>{{/duration}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
{{#ScheduledEventData}}<div><b>ScheduledEventData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ScheduledEventData}}&quot;);})'>{{ScheduledEventData}}</a></div>{{/ScheduledEventData}}
</div>
`
                );
           }        }

        /**
         * Priority definition.
         *
         */
        class Priority extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Priority;
                if (null == bucket)
                   cim_data.Priority = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Priority[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Priority";
                base.parse_element (/<cim:Priority.justification>([\s\S]*?)<\/cim:Priority.justification>/g, obj, "justification", base.to_string, sub, context);
                base.parse_element (/<cim:Priority.rank>([\s\S]*?)<\/cim:Priority.rank>/g, obj, "rank", base.to_string, sub, context);
                base.parse_element (/<cim:Priority.type>([\s\S]*?)<\/cim:Priority.type>/g, obj, "type", base.to_string, sub, context);

                var bucket = context.parsed.Priority;
                if (null == bucket)
                   context.parsed.Priority = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Priority", "justification", base.from_string, fields);
                base.export_element (obj, "Priority", "rank", base.from_string, fields);
                base.export_element (obj, "Priority", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Priority_collapse" aria-expanded="true" aria-controls="Priority_collapse">Priority</a>
<div id="Priority_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#justification}}<div><b>justification</b>: {{justification}}</div>{{/justification}}
{{#rank}}<div><b>rank</b>: {{rank}}</div>{{/rank}}
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
</div>
`
                );
           }        }

        /**
         * A point in time within a sequence of points in time relative to a time schedule.
         *
         */
        class TimePoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TimePoint;
                if (null == bucket)
                   cim_data.TimePoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TimePoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TimePoint";
                base.parse_element (/<cim:TimePoint.dateTime>([\s\S]*?)<\/cim:TimePoint.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:TimePoint.relativeTimeInterval>([\s\S]*?)<\/cim:TimePoint.relativeTimeInterval>/g, obj, "relativeTimeInterval", base.to_string, sub, context);
                base.parse_element (/<cim:TimePoint.sequenceNumber>([\s\S]*?)<\/cim:TimePoint.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:TimePoint.status>([\s\S]*?)<\/cim:TimePoint.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:TimePoint.window>([\s\S]*?)<\/cim:TimePoint.window>/g, obj, "window", base.to_string, sub, context);
                base.parse_attribute (/<cim:TimePoint.TimeSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TimeSchedule", sub, context);

                var bucket = context.parsed.TimePoint;
                if (null == bucket)
                   context.parsed.TimePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TimePoint", "dateTime", base.from_datetime, fields);
                base.export_element (obj, "TimePoint", "relativeTimeInterval", base.from_string, fields);
                base.export_element (obj, "TimePoint", "sequenceNumber", base.from_string, fields);
                base.export_element (obj, "TimePoint", "status", base.from_string, fields);
                base.export_element (obj, "TimePoint", "window", base.from_string, fields);
                base.export_attribute (obj, "TimePoint", "TimeSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TimePoint_collapse" aria-expanded="true" aria-controls="TimePoint_collapse">TimePoint</a>
<div id="TimePoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
{{#relativeTimeInterval}}<div><b>relativeTimeInterval</b>: {{relativeTimeInterval}}</div>{{/relativeTimeInterval}}
{{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#window}}<div><b>window</b>: {{window}}</div>{{/window}}
{{#TimeSchedule}}<div><b>TimeSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TimeSchedule}}&quot;);})'>{{TimeSchedule}}</a></div>{{/TimeSchedule}}
</div>
`
                );
           }        }

        /**
         * Records activity for an entity at a point in time; activity may be for an event that has already occurred or for a planned activity.
         *
         */
        class ActivityRecord extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ActivityRecord;
                if (null == bucket)
                   cim_data.ActivityRecord = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ActivityRecord[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ActivityRecord";
                base.parse_element (/<cim:ActivityRecord.createdDateTime>([\s\S]*?)<\/cim:ActivityRecord.createdDateTime>/g, obj, "createdDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ActivityRecord.reason>([\s\S]*?)<\/cim:ActivityRecord.reason>/g, obj, "reason", base.to_string, sub, context);
                base.parse_element (/<cim:ActivityRecord.severity>([\s\S]*?)<\/cim:ActivityRecord.severity>/g, obj, "severity", base.to_string, sub, context);
                base.parse_element (/<cim:ActivityRecord.status>([\s\S]*?)<\/cim:ActivityRecord.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:ActivityRecord.type>([\s\S]*?)<\/cim:ActivityRecord.type>/g, obj, "type", base.to_string, sub, context);

                var bucket = context.parsed.ActivityRecord;
                if (null == bucket)
                   context.parsed.ActivityRecord = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ActivityRecord", "createdDateTime", base.from_datetime, fields);
                base.export_element (obj, "ActivityRecord", "reason", base.from_string, fields);
                base.export_element (obj, "ActivityRecord", "severity", base.from_string, fields);
                base.export_element (obj, "ActivityRecord", "status", base.from_string, fields);
                base.export_element (obj, "ActivityRecord", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ActivityRecord_collapse" aria-expanded="true" aria-controls="ActivityRecord_collapse">ActivityRecord</a>
<div id="ActivityRecord_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#createdDateTime}}<div><b>createdDateTime</b>: {{createdDateTime}}</div>{{/createdDateTime}}
{{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
{{#severity}}<div><b>severity</b>: {{severity}}</div>{{/severity}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
</div>
`
                );
           }        }

        /**
         * General purpose postal address information.
         *
         */
        class PostalAddress extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PostalAddress;
                if (null == bucket)
                   cim_data.PostalAddress = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PostalAddress[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PostalAddress";
                base.parse_element (/<cim:PostalAddress.poBox>([\s\S]*?)<\/cim:PostalAddress.poBox>/g, obj, "poBox", base.to_string, sub, context);
                base.parse_element (/<cim:PostalAddress.postalCode>([\s\S]*?)<\/cim:PostalAddress.postalCode>/g, obj, "postalCode", base.to_string, sub, context);
                base.parse_element (/<cim:PostalAddress.streetDetail>([\s\S]*?)<\/cim:PostalAddress.streetDetail>/g, obj, "streetDetail", base.to_string, sub, context);
                base.parse_element (/<cim:PostalAddress.townDetail>([\s\S]*?)<\/cim:PostalAddress.townDetail>/g, obj, "townDetail", base.to_string, sub, context);

                var bucket = context.parsed.PostalAddress;
                if (null == bucket)
                   context.parsed.PostalAddress = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PostalAddress", "poBox", base.from_string, fields);
                base.export_element (obj, "PostalAddress", "postalCode", base.from_string, fields);
                base.export_element (obj, "PostalAddress", "streetDetail", base.from_string, fields);
                base.export_element (obj, "PostalAddress", "townDetail", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PostalAddress_collapse" aria-expanded="true" aria-controls="PostalAddress_collapse">PostalAddress</a>
<div id="PostalAddress_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#poBox}}<div><b>poBox</b>: {{poBox}}</div>{{/poBox}}
{{#postalCode}}<div><b>postalCode</b>: {{postalCode}}</div>{{/postalCode}}
{{#streetDetail}}<div><b>streetDetail</b>: {{streetDetail}}</div>{{/streetDetail}}
{{#townDetail}}<div><b>townDetail</b>: {{townDetail}}</div>{{/townDetail}}
</div>
`
                );
           }        }

        class PersonRole extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PersonRole;
                if (null == bucket)
                   cim_data.PersonRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PersonRole[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PersonRole";
                base.parse_attribute (/<cim:PersonRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Person", sub, context);

                var bucket = context.parsed.PersonRole;
                if (null == bucket)
                   context.parsed.PersonRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PersonRole", "Person", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PersonRole_collapse" aria-expanded="true" aria-controls="PersonRole_collapse">PersonRole</a>
<div id="PersonRole_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#Person}}<div><b>Person</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Person}}&quot;);})'>{{Person}}</a></div>{{/Person}}
</div>
`
                );
           }        }

        /**
         * Coordinate reference system.
         *
         */
        class CoordinateSystem extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CoordinateSystem;
                if (null == bucket)
                   cim_data.CoordinateSystem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CoordinateSystem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CoordinateSystem";
                base.parse_element (/<cim:CoordinateSystem.crsUrn>([\s\S]*?)<\/cim:CoordinateSystem.crsUrn>/g, obj, "crsUrn", base.to_string, sub, context);

                var bucket = context.parsed.CoordinateSystem;
                if (null == bucket)
                   context.parsed.CoordinateSystem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CoordinateSystem", "crsUrn", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CoordinateSystem_collapse" aria-expanded="true" aria-controls="CoordinateSystem_collapse">CoordinateSystem</a>
<div id="CoordinateSystem_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#crsUrn}}<div><b>crsUrn</b>: {{crsUrn}}</div>{{/crsUrn}}
</div>
`
                );
           }        }

        /**
         * An object or a condition that is a danger for causing loss or perils to an asset and/or people.
         *
         */
        class Hazard extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Hazard;
                if (null == bucket)
                   cim_data.Hazard = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Hazard[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Hazard";
                base.parse_element (/<cim:Hazard.status>([\s\S]*?)<\/cim:Hazard.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:Hazard.type>([\s\S]*?)<\/cim:Hazard.type>/g, obj, "type", base.to_string, sub, context);

                var bucket = context.parsed.Hazard;
                if (null == bucket)
                   context.parsed.Hazard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Hazard", "status", base.from_string, fields);
                base.export_element (obj, "Hazard", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Hazard_collapse" aria-expanded="true" aria-controls="Hazard_collapse">Hazard</a>
<div id="Hazard_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
</div>
`
                );
           }        }

        /**
         * Town details, in the context of address.
         *
         */
        class TownDetail extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TownDetail;
                if (null == bucket)
                   cim_data.TownDetail = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TownDetail[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TownDetail";
                base.parse_element (/<cim:TownDetail.code>([\s\S]*?)<\/cim:TownDetail.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:TownDetail.country>([\s\S]*?)<\/cim:TownDetail.country>/g, obj, "country", base.to_string, sub, context);
                base.parse_element (/<cim:TownDetail.name>([\s\S]*?)<\/cim:TownDetail.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_element (/<cim:TownDetail.section>([\s\S]*?)<\/cim:TownDetail.section>/g, obj, "section", base.to_string, sub, context);
                base.parse_element (/<cim:TownDetail.stateOrProvince>([\s\S]*?)<\/cim:TownDetail.stateOrProvince>/g, obj, "stateOrProvince", base.to_string, sub, context);

                var bucket = context.parsed.TownDetail;
                if (null == bucket)
                   context.parsed.TownDetail = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TownDetail", "code", base.from_string, fields);
                base.export_element (obj, "TownDetail", "country", base.from_string, fields);
                base.export_element (obj, "TownDetail", "name", base.from_string, fields);
                base.export_element (obj, "TownDetail", "section", base.from_string, fields);
                base.export_element (obj, "TownDetail", "stateOrProvince", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TownDetail_collapse" aria-expanded="true" aria-controls="TownDetail_collapse">TownDetail</a>
<div id="TownDetail_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
{{#country}}<div><b>country</b>: {{country}}</div>{{/country}}
{{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
{{#section}}<div><b>section</b>: {{section}}</div>{{/section}}
{{#stateOrProvince}}<div><b>stateOrProvince</b>: {{stateOrProvince}}</div>{{/stateOrProvince}}
</div>
`
                );
           }        }

        /**
         * Organisation that might have roles as utility, contractor, supplier, manufacturer, customer, etc.
         *
         */
        class Organisation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Organisation;
                if (null == bucket)
                   cim_data.Organisation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Organisation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Organisation";
                base.parse_element (/<cim:Organisation.electronicAddress>([\s\S]*?)<\/cim:Organisation.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);
                base.parse_element (/<cim:Organisation.phone1>([\s\S]*?)<\/cim:Organisation.phone1>/g, obj, "phone1", base.to_string, sub, context);
                base.parse_element (/<cim:Organisation.phone2>([\s\S]*?)<\/cim:Organisation.phone2>/g, obj, "phone2", base.to_string, sub, context);
                base.parse_element (/<cim:Organisation.postalAddress>([\s\S]*?)<\/cim:Organisation.postalAddress>/g, obj, "postalAddress", base.to_string, sub, context);
                base.parse_element (/<cim:Organisation.streetAddress>([\s\S]*?)<\/cim:Organisation.streetAddress>/g, obj, "streetAddress", base.to_string, sub, context);

                var bucket = context.parsed.Organisation;
                if (null == bucket)
                   context.parsed.Organisation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Organisation", "electronicAddress", base.from_string, fields);
                base.export_element (obj, "Organisation", "phone1", base.from_string, fields);
                base.export_element (obj, "Organisation", "phone2", base.from_string, fields);
                base.export_element (obj, "Organisation", "postalAddress", base.from_string, fields);
                base.export_element (obj, "Organisation", "streetAddress", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Organisation_collapse" aria-expanded="true" aria-controls="Organisation_collapse">Organisation</a>
<div id="Organisation_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#electronicAddress}}<div><b>electronicAddress</b>: {{electronicAddress}}</div>{{/electronicAddress}}
{{#phone1}}<div><b>phone1</b>: {{phone1}}</div>{{/phone1}}
{{#phone2}}<div><b>phone2</b>: {{phone2}}</div>{{/phone2}}
{{#postalAddress}}<div><b>postalAddress</b>: {{postalAddress}}</div>{{/postalAddress}}
{{#streetAddress}}<div><b>streetAddress</b>: {{streetAddress}}</div>{{/streetAddress}}
</div>
`
                );
           }        }

        /**
         * Custom description of the type of crew.
         *
         * This may be used to determine the type of work the crew can be assigned to. Examples include repair, tree trimming, switching, etc.
         *
         */
        class CrewType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CrewType;
                if (null == bucket)
                   cim_data.CrewType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CrewType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CrewType";

                var bucket = context.parsed.CrewType;
                if (null == bucket)
                   context.parsed.CrewType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CrewType_collapse" aria-expanded="true" aria-controls="CrewType_collapse">CrewType</a>
<div id="CrewType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * The place, scene, or point of something where someone or something has been, is, and/or will be at a given moment in time.
         *
         * It can be defined with one or more postition points (coordinates) in a given coordinate system.
         *
         */
        class Location extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Location;
                if (null == bucket)
                   cim_data.Location = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Location[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.Location;
                if (null == bucket)
                   context.parsed.Location = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Location_collapse" aria-expanded="true" aria-controls="Location_collapse">Location</a>
<div id="Location_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
{{#electronicAddress}}<div><b>electronicAddress</b>: {{electronicAddress}}</div>{{/electronicAddress}}
{{#geoInfoReference}}<div><b>geoInfoReference</b>: {{geoInfoReference}}</div>{{/geoInfoReference}}
{{#mainAddress}}<div><b>mainAddress</b>: {{mainAddress}}</div>{{/mainAddress}}
{{#phone1}}<div><b>phone1</b>: {{phone1}}</div>{{/phone1}}
{{#phone2}}<div><b>phone2</b>: {{phone2}}</div>{{/phone2}}
{{#secondaryAddress}}<div><b>secondaryAddress</b>: {{secondaryAddress}}</div>{{/secondaryAddress}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
{{#CoordinateSystem}}<div><b>CoordinateSystem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CoordinateSystem}}&quot;);})'>{{CoordinateSystem}}</a></div>{{/CoordinateSystem}}
</div>
`
                );
           }        }

        /**
         * Ownership of e.g. asset.
         *
         */
        class Ownership extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Ownership;
                if (null == bucket)
                   cim_data.Ownership = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Ownership[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Ownership";
                base.parse_element (/<cim:Ownership.share>([\s\S]*?)<\/cim:Ownership.share>/g, obj, "share", base.to_string, sub, context);
                base.parse_attribute (/<cim:Ownership.AssetOwner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetOwner", sub, context);
                base.parse_attribute (/<cim:Ownership.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);

                var bucket = context.parsed.Ownership;
                if (null == bucket)
                   context.parsed.Ownership = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Ownership", "share", base.from_string, fields);
                base.export_attribute (obj, "Ownership", "AssetOwner", fields);
                base.export_attribute (obj, "Ownership", "Asset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Ownership_collapse" aria-expanded="true" aria-controls="Ownership_collapse">Ownership</a>
<div id="Ownership_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#share}}<div><b>share</b>: {{share}}</div>{{/share}}
{{#AssetOwner}}<div><b>AssetOwner</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetOwner}}&quot;);})'>{{AssetOwner}}</a></div>{{/AssetOwner}}
{{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Asset}}&quot;);})'>{{Asset}}</a></div>{{/Asset}}
</div>
`
                );
           }        }

        /**
         * Telephone number.
         *
         */
        class TelephoneNumber extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TelephoneNumber;
                if (null == bucket)
                   cim_data.TelephoneNumber = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TelephoneNumber[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TelephoneNumber";
                base.parse_element (/<cim:TelephoneNumber.areaCode>([\s\S]*?)<\/cim:TelephoneNumber.areaCode>/g, obj, "areaCode", base.to_string, sub, context);
                base.parse_element (/<cim:TelephoneNumber.cityCode>([\s\S]*?)<\/cim:TelephoneNumber.cityCode>/g, obj, "cityCode", base.to_string, sub, context);
                base.parse_element (/<cim:TelephoneNumber.countryCode>([\s\S]*?)<\/cim:TelephoneNumber.countryCode>/g, obj, "countryCode", base.to_string, sub, context);
                base.parse_element (/<cim:TelephoneNumber.extension>([\s\S]*?)<\/cim:TelephoneNumber.extension>/g, obj, "extension", base.to_string, sub, context);
                base.parse_element (/<cim:TelephoneNumber.localNumber>([\s\S]*?)<\/cim:TelephoneNumber.localNumber>/g, obj, "localNumber", base.to_string, sub, context);

                var bucket = context.parsed.TelephoneNumber;
                if (null == bucket)
                   context.parsed.TelephoneNumber = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TelephoneNumber", "areaCode", base.from_string, fields);
                base.export_element (obj, "TelephoneNumber", "cityCode", base.from_string, fields);
                base.export_element (obj, "TelephoneNumber", "countryCode", base.from_string, fields);
                base.export_element (obj, "TelephoneNumber", "extension", base.from_string, fields);
                base.export_element (obj, "TelephoneNumber", "localNumber", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TelephoneNumber_collapse" aria-expanded="true" aria-controls="TelephoneNumber_collapse">TelephoneNumber</a>
<div id="TelephoneNumber_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#areaCode}}<div><b>areaCode</b>: {{areaCode}}</div>{{/areaCode}}
{{#cityCode}}<div><b>cityCode</b>: {{cityCode}}</div>{{/cityCode}}
{{#countryCode}}<div><b>countryCode</b>: {{countryCode}}</div>{{/countryCode}}
{{#extension}}<div><b>extension</b>: {{extension}}</div>{{/extension}}
{{#localNumber}}<div><b>localNumber</b>: {{localNumber}}</div>{{/localNumber}}
</div>
`
                );
           }        }

        /**
         * Set of spatial coordinates that determine a point, defined in the coordinate system specified in 'Location.
         *
         * CoordinateSystem'. Use a single position point instance to desribe a point-oriented location. Use a sequence of position points to describe a line-oriented object (physical location of non-point oriented objects like cables or lines), or area of an object (like a substation or a geographical zone - in this case, have first and last position point with the same values).
         *
         */
        class PositionPoint extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PositionPoint;
                if (null == bucket)
                   cim_data.PositionPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PositionPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PositionPoint";
                base.parse_element (/<cim:PositionPoint.sequenceNumber>([\s\S]*?)<\/cim:PositionPoint.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:PositionPoint.xPosition>([\s\S]*?)<\/cim:PositionPoint.xPosition>/g, obj, "xPosition", base.to_string, sub, context);
                base.parse_element (/<cim:PositionPoint.yPosition>([\s\S]*?)<\/cim:PositionPoint.yPosition>/g, obj, "yPosition", base.to_string, sub, context);
                base.parse_element (/<cim:PositionPoint.zPosition>([\s\S]*?)<\/cim:PositionPoint.zPosition>/g, obj, "zPosition", base.to_string, sub, context);
                base.parse_attribute (/<cim:PositionPoint.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);

                var bucket = context.parsed.PositionPoint;
                if (null == bucket)
                   context.parsed.PositionPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PositionPoint", "sequenceNumber", base.from_string, fields);
                base.export_element (obj, "PositionPoint", "xPosition", base.from_string, fields);
                base.export_element (obj, "PositionPoint", "yPosition", base.from_string, fields);
                base.export_element (obj, "PositionPoint", "zPosition", base.from_string, fields);
                base.export_attribute (obj, "PositionPoint", "Location", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PositionPoint_collapse" aria-expanded="true" aria-controls="PositionPoint_collapse">PositionPoint</a>
<div id="PositionPoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
{{#xPosition}}<div><b>xPosition</b>: {{xPosition}}</div>{{/xPosition}}
{{#yPosition}}<div><b>yPosition</b>: {{yPosition}}</div>{{/yPosition}}
{{#zPosition}}<div><b>zPosition</b>: {{zPosition}}</div>{{/zPosition}}
{{#Location}}<div><b>Location</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Location}}&quot;);})'>{{Location}}</a></div>{{/Location}}
</div>
`
                );
           }        }

        /**
         * Generic name-value pair class, with optional sequence number and units for value; can be used to model parts of information exchange when concrete types are not known in advance.
         *
         */
        class UserAttribute extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UserAttribute;
                if (null == bucket)
                   cim_data.UserAttribute = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UserAttribute[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "UserAttribute";
                base.parse_element (/<cim:UserAttribute.name>([\s\S]*?)<\/cim:UserAttribute.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_element (/<cim:UserAttribute.sequenceNumber>([\s\S]*?)<\/cim:UserAttribute.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:UserAttribute.value>([\s\S]*?)<\/cim:UserAttribute.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_attribute (/<cim:UserAttribute.Transaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Transaction", sub, context);
                base.parse_attribute (/<cim:UserAttribute.RatingSpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RatingSpecification", sub, context);
                base.parse_attribute (/<cim:UserAttribute.PropertySpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PropertySpecification", sub, context);

                var bucket = context.parsed.UserAttribute;
                if (null == bucket)
                   context.parsed.UserAttribute = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "UserAttribute", "name", base.from_string, fields);
                base.export_element (obj, "UserAttribute", "sequenceNumber", base.from_string, fields);
                base.export_element (obj, "UserAttribute", "value", base.from_string, fields);
                base.export_attribute (obj, "UserAttribute", "Transaction", fields);
                base.export_attribute (obj, "UserAttribute", "RatingSpecification", fields);
                base.export_attribute (obj, "UserAttribute", "PropertySpecification", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#UserAttribute_collapse" aria-expanded="true" aria-controls="UserAttribute_collapse">UserAttribute</a>
<div id="UserAttribute_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
{{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
{{#Transaction}}<div><b>Transaction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Transaction}}&quot;);})'>{{Transaction}}</a></div>{{/Transaction}}
{{#RatingSpecification}}<div><b>RatingSpecification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RatingSpecification}}&quot;);})'>{{RatingSpecification}}</a></div>{{/RatingSpecification}}
{{#PropertySpecification}}<div><b>PropertySpecification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PropertySpecification}}&quot;);})'>{{PropertySpecification}}</a></div>{{/PropertySpecification}}
</div>
`
                );
           }        }

        /**
         * Schedule parameters for an activity that is to occur, is occurring, or has completed.
         *
         */
        class ScheduledEventData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledEventData;
                if (null == bucket)
                   cim_data.ScheduledEventData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledEventData[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledEventData";
                base.parse_element (/<cim:ScheduledEventData.estimatedWindow>([\s\S]*?)<\/cim:ScheduledEventData.estimatedWindow>/g, obj, "estimatedWindow", base.to_string, sub, context);
                base.parse_element (/<cim:ScheduledEventData.requestedWindow>([\s\S]*?)<\/cim:ScheduledEventData.requestedWindow>/g, obj, "requestedWindow", base.to_string, sub, context);
                base.parse_element (/<cim:ScheduledEventData.status>([\s\S]*?)<\/cim:ScheduledEventData.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ScheduledEventData.InspectionDataSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InspectionDataSet", sub, context);

                var bucket = context.parsed.ScheduledEventData;
                if (null == bucket)
                   context.parsed.ScheduledEventData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ScheduledEventData", "estimatedWindow", base.from_string, fields);
                base.export_element (obj, "ScheduledEventData", "requestedWindow", base.from_string, fields);
                base.export_element (obj, "ScheduledEventData", "status", base.from_string, fields);
                base.export_attribute (obj, "ScheduledEventData", "InspectionDataSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ScheduledEventData_collapse" aria-expanded="true" aria-controls="ScheduledEventData_collapse">ScheduledEventData</a>
<div id="ScheduledEventData_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#estimatedWindow}}<div><b>estimatedWindow</b>: {{estimatedWindow}}</div>{{/estimatedWindow}}
{{#requestedWindow}}<div><b>requestedWindow</b>: {{requestedWindow}}</div>{{/requestedWindow}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#InspectionDataSet}}<div><b>InspectionDataSet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InspectionDataSet}}&quot;);})'>{{InspectionDataSet}}</a></div>{{/InspectionDataSet}}
</div>
`
                );
           }        }

        /**
         * Current status information relevant to an entity.
         *
         */
        class Status extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Status;
                if (null == bucket)
                   cim_data.Status = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Status[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Status";
                base.parse_element (/<cim:Status.dateTime>([\s\S]*?)<\/cim:Status.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Status.reason>([\s\S]*?)<\/cim:Status.reason>/g, obj, "reason", base.to_string, sub, context);
                base.parse_element (/<cim:Status.remark>([\s\S]*?)<\/cim:Status.remark>/g, obj, "remark", base.to_string, sub, context);
                base.parse_element (/<cim:Status.value>([\s\S]*?)<\/cim:Status.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.Status;
                if (null == bucket)
                   context.parsed.Status = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Status", "dateTime", base.from_datetime, fields);
                base.export_element (obj, "Status", "reason", base.from_string, fields);
                base.export_element (obj, "Status", "remark", base.from_string, fields);
                base.export_element (obj, "Status", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Status_collapse" aria-expanded="true" aria-controls="Status_collapse">Status</a>
<div id="Status_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
{{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
{{#remark}}<div><b>remark</b>: {{remark}}</div>{{/remark}}
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
</div>
`
                );
           }        }

        /**
         * General purpose information for name and other information to contact people.
         *
         */
        class Person extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Person;
                if (null == bucket)
                   cim_data.Person = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Person[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.Person;
                if (null == bucket)
                   context.parsed.Person = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Person_collapse" aria-expanded="true" aria-controls="Person_collapse">Person</a>
<div id="Person_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#electronicAddress}}<div><b>electronicAddress</b>: {{electronicAddress}}</div>{{/electronicAddress}}
{{#firstName}}<div><b>firstName</b>: {{firstName}}</div>{{/firstName}}
{{#landlinePhone}}<div><b>landlinePhone</b>: {{landlinePhone}}</div>{{/landlinePhone}}
{{#lastName}}<div><b>lastName</b>: {{lastName}}</div>{{/lastName}}
{{#mName}}<div><b>mName</b>: {{mName}}</div>{{/mName}}
{{#mobilePhone}}<div><b>mobilePhone</b>: {{mobilePhone}}</div>{{/mobilePhone}}
{{#prefix}}<div><b>prefix</b>: {{prefix}}</div>{{/prefix}}
{{#specialNeed}}<div><b>specialNeed</b>: {{specialNeed}}</div>{{/specialNeed}}
{{#suffix}}<div><b>suffix</b>: {{suffix}}</div>{{/suffix}}
</div>
`
                );
           }        }

        /**
         * Meeting time and location.
         *
         */
        class Appointment extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Appointment;
                if (null == bucket)
                   cim_data.Appointment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Appointment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Appointment";
                base.parse_element (/<cim:Appointment.callAhead>([\s\S]*?)<\/cim:Appointment.callAhead>/g, obj, "callAhead", base.to_boolean, sub, context);
                base.parse_element (/<cim:Appointment.meetingInterval>([\s\S]*?)<\/cim:Appointment.meetingInterval>/g, obj, "meetingInterval", base.to_string, sub, context);

                var bucket = context.parsed.Appointment;
                if (null == bucket)
                   context.parsed.Appointment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Appointment", "callAhead", base.from_boolean, fields);
                base.export_element (obj, "Appointment", "meetingInterval", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Appointment_collapse" aria-expanded="true" aria-controls="Appointment_collapse">Appointment</a>
<div id="Appointment_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#callAhead}}<div><b>callAhead</b>: {{callAhead}}</div>{{/callAhead}}
{{#meetingInterval}}<div><b>meetingInterval</b>: {{meetingInterval}}</div>{{/meetingInterval}}
</div>
`
                );
           }        }

        /**
         * Street details, in the context of address.
         *
         */
        class StreetDetail extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StreetDetail;
                if (null == bucket)
                   cim_data.StreetDetail = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StreetDetail[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.StreetDetail;
                if (null == bucket)
                   context.parsed.StreetDetail = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#StreetDetail_collapse" aria-expanded="true" aria-controls="StreetDetail_collapse">StreetDetail</a>
<div id="StreetDetail_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#addressGeneral}}<div><b>addressGeneral</b>: {{addressGeneral}}</div>{{/addressGeneral}}
{{#buildingName}}<div><b>buildingName</b>: {{buildingName}}</div>{{/buildingName}}
{{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
{{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
{{#number}}<div><b>number</b>: {{number}}</div>{{/number}}
{{#prefix}}<div><b>prefix</b>: {{prefix}}</div>{{/prefix}}
{{#suffix}}<div><b>suffix</b>: {{suffix}}</div>{{/suffix}}
{{#suiteNumber}}<div><b>suiteNumber</b>: {{suiteNumber}}</div>{{/suiteNumber}}
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
{{#withinTownLimits}}<div><b>withinTownLimits</b>: {{withinTownLimits}}</div>{{/withinTownLimits}}
</div>
`
                );
           }        }

        /**
         * Description of anything that changes through time.
         *
         * Time schedule is used to perform a single-valued function of time. Use inherited 'type' attribute to give additional information on this schedule, such as: periodic (hourly, daily, weekly, monthly, etc.), day of the month, by date, calendar (specific times and dates).
         *
         */
        class TimeSchedule extends Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TimeSchedule;
                if (null == bucket)
                   cim_data.TimeSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TimeSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Document.prototype.parse.call (this, context, sub);
                obj.cls = "TimeSchedule";
                base.parse_element (/<cim:TimeSchedule.disabled>([\s\S]*?)<\/cim:TimeSchedule.disabled>/g, obj, "disabled", base.to_boolean, sub, context);
                base.parse_element (/<cim:TimeSchedule.offset>([\s\S]*?)<\/cim:TimeSchedule.offset>/g, obj, "offset", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSchedule.recurrencePattern>([\s\S]*?)<\/cim:TimeSchedule.recurrencePattern>/g, obj, "recurrencePattern", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSchedule.recurrencePeriod>([\s\S]*?)<\/cim:TimeSchedule.recurrencePeriod>/g, obj, "recurrencePeriod", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSchedule.scheduleInterval>([\s\S]*?)<\/cim:TimeSchedule.scheduleInterval>/g, obj, "scheduleInterval", base.to_string, sub, context);

                var bucket = context.parsed.TimeSchedule;
                if (null == bucket)
                   context.parsed.TimeSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "TimeSchedule", "disabled", base.from_boolean, fields);
                base.export_element (obj, "TimeSchedule", "offset", base.from_string, fields);
                base.export_element (obj, "TimeSchedule", "recurrencePattern", base.from_string, fields);
                base.export_element (obj, "TimeSchedule", "recurrencePeriod", base.from_string, fields);
                base.export_element (obj, "TimeSchedule", "scheduleInterval", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TimeSchedule_collapse" aria-expanded="true" aria-controls="TimeSchedule_collapse">TimeSchedule</a>
<div id="TimeSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Document.prototype.template.call (this) +
`
{{#disabled}}<div><b>disabled</b>: {{disabled}}</div>{{/disabled}}
{{#offset}}<div><b>offset</b>: {{offset}}</div>{{/offset}}
{{#recurrencePattern}}<div><b>recurrencePattern</b>: {{recurrencePattern}}</div>{{/recurrencePattern}}
{{#recurrencePeriod}}<div><b>recurrencePeriod</b>: {{recurrencePeriod}}</div>{{/recurrencePeriod}}
{{#scheduleInterval}}<div><b>scheduleInterval</b>: {{scheduleInterval}}</div>{{/scheduleInterval}}
</div>
`
                );
           }        }

        /**
         * Formal agreement between two parties defining the terms and conditions for a set of services.
         *
         * The specifics of the services are, in turn, defined via one or more service agreements.
         *
         */
        class Agreement extends Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Agreement;
                if (null == bucket)
                   cim_data.Agreement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Agreement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Document.prototype.parse.call (this, context, sub);
                obj.cls = "Agreement";
                base.parse_element (/<cim:Agreement.signDate>([\s\S]*?)<\/cim:Agreement.signDate>/g, obj, "signDate", base.to_string, sub, context);
                base.parse_element (/<cim:Agreement.validityInterval>([\s\S]*?)<\/cim:Agreement.validityInterval>/g, obj, "validityInterval", base.to_string, sub, context);

                var bucket = context.parsed.Agreement;
                if (null == bucket)
                   context.parsed.Agreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Agreement", "signDate", base.from_string, fields);
                base.export_element (obj, "Agreement", "validityInterval", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Agreement_collapse" aria-expanded="true" aria-controls="Agreement_collapse">Agreement</a>
<div id="Agreement_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Document.prototype.template.call (this) +
`
{{#signDate}}<div><b>signDate</b>: {{signDate}}</div>{{/signDate}}
{{#validityInterval}}<div><b>validityInterval</b>: {{validityInterval}}</div>{{/validityInterval}}
</div>
`
                );
           }        }

        /**
         * Used to report details on creation, change or deletion of an entity or its configuration.
         *
         */
        class ConfigurationEvent extends ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConfigurationEvent;
                if (null == bucket)
                   cim_data.ConfigurationEvent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConfigurationEvent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ActivityRecord.prototype.parse.call (this, context, sub);
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

                var bucket = context.parsed.ConfigurationEvent;
                if (null == bucket)
                   context.parsed.ConfigurationEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ActivityRecord.prototype.export.call (this, obj, false);

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
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ConfigurationEvent_collapse" aria-expanded="true" aria-controls="ConfigurationEvent_collapse">ConfigurationEvent</a>
<div id="ConfigurationEvent_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ActivityRecord.prototype.template.call (this) +
`
{{#effectiveDateTime}}<div><b>effectiveDateTime</b>: {{effectiveDateTime}}</div>{{/effectiveDateTime}}
{{#modifiedBy}}<div><b>modifiedBy</b>: {{modifiedBy}}</div>{{/modifiedBy}}
{{#remark}}<div><b>remark</b>: {{remark}}</div>{{/remark}}
{{#ChangedPersonRole}}<div><b>ChangedPersonRole</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedPersonRole}}&quot;);})'>{{ChangedPersonRole}}</a></div>{{/ChangedPersonRole}}
{{#ChangedOrganisationRole}}<div><b>ChangedOrganisationRole</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedOrganisationRole}}&quot;);})'>{{ChangedOrganisationRole}}</a></div>{{/ChangedOrganisationRole}}
{{#ChangedAsset}}<div><b>ChangedAsset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedAsset}}&quot;);})'>{{ChangedAsset}}</a></div>{{/ChangedAsset}}
{{#ChangedLocation}}<div><b>ChangedLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedLocation}}&quot;);})'>{{ChangedLocation}}</a></div>{{/ChangedLocation}}
{{#ChangedServiceCategory}}<div><b>ChangedServiceCategory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedServiceCategory}}&quot;);})'>{{ChangedServiceCategory}}</a></div>{{/ChangedServiceCategory}}
{{#ChangedUsagePoint}}<div><b>ChangedUsagePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedUsagePoint}}&quot;);})'>{{ChangedUsagePoint}}</a></div>{{/ChangedUsagePoint}}
{{#ChangedDocument}}<div><b>ChangedDocument</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedDocument}}&quot;);})'>{{ChangedDocument}}</a></div>{{/ChangedDocument}}
</div>
`
                );
           }        }

        /**
         * Person role in the context of utility operations.
         *
         */
        class OperationPersonRole extends PersonRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperationPersonRole;
                if (null == bucket)
                   cim_data.OperationPersonRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperationPersonRole[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PersonRole.prototype.parse.call (this, context, sub);
                obj.cls = "OperationPersonRole";

                var bucket = context.parsed.OperationPersonRole;
                if (null == bucket)
                   context.parsed.OperationPersonRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PersonRole.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OperationPersonRole_collapse" aria-expanded="true" aria-controls="OperationPersonRole_collapse">OperationPersonRole</a>
<div id="OperationPersonRole_collapse" class="collapse in" style="margin-left: 10px;">
`
      + PersonRole.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * Member of a crew.
         *
         */
        class CrewMember extends OperationPersonRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CrewMember;
                if (null == bucket)
                   cim_data.CrewMember = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CrewMember[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationPersonRole.prototype.parse.call (this, context, sub);
                obj.cls = "CrewMember";
                base.parse_attribute (/<cim:CrewMember.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context);

                var bucket = context.parsed.CrewMember;
                if (null == bucket)
                   context.parsed.CrewMember = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OperationPersonRole.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CrewMember", "Crew", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CrewMember_collapse" aria-expanded="true" aria-controls="CrewMember_collapse">CrewMember</a>
<div id="CrewMember_collapse" class="collapse in" style="margin-left: 10px;">
`
      + OperationPersonRole.prototype.template.call (this) +
`
{{#Crew}}<div><b>Crew</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Crew}}&quot;);})'>{{Crew}}</a></div>{{/Crew}}
</div>
`
                );
           }        }

        /**
         * Control room operator.
         *
         */
        class Operator extends OperationPersonRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Operator;
                if (null == bucket)
                   cim_data.Operator = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Operator[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationPersonRole.prototype.parse.call (this, context, sub);
                obj.cls = "Operator";

                var bucket = context.parsed.Operator;
                if (null == bucket)
                   context.parsed.Operator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OperationPersonRole.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Operator_collapse" aria-expanded="true" aria-controls="Operator_collapse">Operator</a>
<div id="Operator_collapse" class="collapse in" style="margin-left: 10px;">
`
      + OperationPersonRole.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        return (
            {
                PersonRole: PersonRole,
                Location: Location,
                TelephoneNumber: TelephoneNumber,
                OperationPersonRole: OperationPersonRole,
                PostalAddress: PostalAddress,
                OrganisationRole: OrganisationRole,
                Operator: Operator,
                ScheduledEventData: ScheduledEventData,
                Status: Status,
                CoordinateSystem: CoordinateSystem,
                UserAttribute: UserAttribute,
                TownDetail: TownDetail,
                ScheduledEvent: ScheduledEvent,
                TimePoint: TimePoint,
                StreetDetail: StreetDetail,
                TimeSchedule: TimeSchedule,
                Organisation: Organisation,
                Ownership: Ownership,
                Person: Person,
                Agreement: Agreement,
                ElectronicAddress: ElectronicAddress,
                Priority: Priority,
                ActivityRecord: ActivityRecord,
                Appointment: Appointment,
                ConfigurationEvent: ConfigurationEvent,
                Crew: Crew,
                Hazard: Hazard,
                StreetAddress: StreetAddress,
                CrewMember: CrewMember,
                CrewType: CrewType,
                PositionPoint: PositionPoint,
                Document: Document
            }
        );
    }
);