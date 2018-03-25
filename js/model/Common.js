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
                var bucket = cim_data.Document;
                if (null == bucket)
                   cim_data.Document = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Document[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Document";
                base.parse_element (/<cim:Document.authorName>([\s\S]*?)<\/cim:Document.authorName>/g, obj, "authorName", base.to_string, sub, context);
                base.parse_element (/<cim:Document.createdDateTime>([\s\S]*?)<\/cim:Document.createdDateTime>/g, obj, "createdDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Document.docStatus\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "docStatus", sub, context);
                base.parse_attribute (/<cim:Document.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "electronicAddress", sub, context);
                base.parse_element (/<cim:Document.lastModifiedDateTime>([\s\S]*?)<\/cim:Document.lastModifiedDateTime>/g, obj, "lastModifiedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Document.revisionNumber>([\s\S]*?)<\/cim:Document.revisionNumber>/g, obj, "revisionNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:Document.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_element (/<cim:Document.subject>([\s\S]*?)<\/cim:Document.subject>/g, obj, "subject", base.to_string, sub, context);
                base.parse_element (/<cim:Document.title>([\s\S]*?)<\/cim:Document.title>/g, obj, "title", base.to_string, sub, context);
                base.parse_element (/<cim:Document.type>([\s\S]*?)<\/cim:Document.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:Document.comment>([\s\S]*?)<\/cim:Document.comment>/g, obj, "comment", base.to_string, sub, context);
                base.parse_attributes (/<cim:Document.ConfigurationEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConfigurationEvents", sub, context);
                var bucket = context.parsed.Document;
                if (null == bucket)
                   context.parsed.Document = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Document", "authorName", "authorName",  base.from_string, fields);
                base.export_element (obj, "Document", "createdDateTime", "createdDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "Document", "docStatus", "docStatus", fields);
                base.export_attribute (obj, "Document", "electronicAddress", "electronicAddress", fields);
                base.export_element (obj, "Document", "lastModifiedDateTime", "lastModifiedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "Document", "revisionNumber", "revisionNumber",  base.from_string, fields);
                base.export_attribute (obj, "Document", "status", "status", fields);
                base.export_element (obj, "Document", "subject", "subject",  base.from_string, fields);
                base.export_element (obj, "Document", "title", "title",  base.from_string, fields);
                base.export_element (obj, "Document", "type", "type",  base.from_string, fields);
                base.export_element (obj, "Document", "comment", "comment",  base.from_string, fields);
                base.export_attributes (obj, "Document", "ConfigurationEvents", "ConfigurationEvents", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Document_collapse" aria-expanded="true" aria-controls="Document_collapse" style="margin-left: 10px;">Document</a></legend>
                    <div id="Document_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#authorName}}<div><b>authorName</b>: {{authorName}}</div>{{/authorName}}
                    {{#createdDateTime}}<div><b>createdDateTime</b>: {{createdDateTime}}</div>{{/createdDateTime}}
                    {{#docStatus}}<div><b>docStatus</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{docStatus}}&quot;);}); return false;'>{{docStatus}}</a></div>{{/docStatus}}\n                    {{#electronicAddress}}<div><b>electronicAddress</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{electronicAddress}}&quot;);}); return false;'>{{electronicAddress}}</a></div>{{/electronicAddress}}\n                    {{#lastModifiedDateTime}}<div><b>lastModifiedDateTime</b>: {{lastModifiedDateTime}}</div>{{/lastModifiedDateTime}}
                    {{#revisionNumber}}<div><b>revisionNumber</b>: {{revisionNumber}}</div>{{/revisionNumber}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#subject}}<div><b>subject</b>: {{subject}}</div>{{/subject}}
                    {{#title}}<div><b>title</b>: {{title}}</div>{{/title}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#comment}}<div><b>comment</b>: {{comment}}</div>{{/comment}}
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ConfigurationEvents}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.Status = []; if (!obj.docStatus) obj.Status.push ({ id: '', selected: true}); for (var property in Status) obj.Status.push ({ id: property, selected: obj.docStatus && obj.docStatus.endsWith ('.' + property)});
                obj.ElectronicAddress = []; if (!obj.electronicAddress) obj.ElectronicAddress.push ({ id: '', selected: true}); for (var property in ElectronicAddress) obj.ElectronicAddress.push ({ id: property, selected: obj.electronicAddress && obj.electronicAddress.endsWith ('.' + property)});
                obj.Status = []; if (!obj.status) obj.Status.push ({ id: '', selected: true}); for (var property in Status) obj.Status.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
                if (obj.ConfigurationEvents) obj.ConfigurationEvents_string = obj.ConfigurationEvents.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Status;
                delete obj.ElectronicAddress;
                delete obj.Status;
                delete obj.ConfigurationEvents_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Document_collapse" aria-expanded="true" aria-controls="{{id}}_Document_collapse" style="margin-left: 10px;">Document</a></legend>
                    <div id="{{id}}_Document_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_authorName'>authorName: </label><div class='col-sm-8'><input id='{{id}}_authorName' class='form-control' type='text'{{#authorName}} value='{{authorName}}'{{/authorName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_createdDateTime'>createdDateTime: </label><div class='col-sm-8'><input id='{{id}}_createdDateTime' class='form-control' type='text'{{#createdDateTime}} value='{{createdDateTime}}'{{/createdDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_docStatus'>docStatus: </label><div class='col-sm-8'><select id='{{id}}_docStatus' class='form-control custom-select'>{{#Status}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Status}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_electronicAddress'>electronicAddress: </label><div class='col-sm-8'><select id='{{id}}_electronicAddress' class='form-control custom-select'>{{#ElectronicAddress}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ElectronicAddress}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastModifiedDateTime'>lastModifiedDateTime: </label><div class='col-sm-8'><input id='{{id}}_lastModifiedDateTime' class='form-control' type='text'{{#lastModifiedDateTime}} value='{{lastModifiedDateTime}}'{{/lastModifiedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_revisionNumber'>revisionNumber: </label><div class='col-sm-8'><input id='{{id}}_revisionNumber' class='form-control' type='text'{{#revisionNumber}} value='{{revisionNumber}}'{{/revisionNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control custom-select'>{{#Status}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Status}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_subject'>subject: </label><div class='col-sm-8'><input id='{{id}}_subject' class='form-control' type='text'{{#subject}} value='{{subject}}'{{/subject}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_title'>title: </label><div class='col-sm-8'><input id='{{id}}_title' class='form-control' type='text'{{#title}} value='{{title}}'{{/title}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_comment'>comment: </label><div class='col-sm-8'><input id='{{id}}_comment' class='form-control' type='text'{{#comment}} value='{{comment}}'{{/comment}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Document" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_authorName").value; if ("" != temp) obj.authorName = temp;
                temp = document.getElementById (id + "_createdDateTime").value; if ("" != temp) obj.createdDateTime = temp;
                temp = document.getElementById (id + "_docStatus").value; if ("" != temp) { temp = Status[temp]; if ("undefined" != typeof (temp)) obj.docStatus = "http://iec.ch/TC57/2013/CIM-schema-cim16#Status." + temp; }
                temp = document.getElementById (id + "_electronicAddress").value; if ("" != temp) { temp = ElectronicAddress[temp]; if ("undefined" != typeof (temp)) obj.electronicAddress = "http://iec.ch/TC57/2013/CIM-schema-cim16#ElectronicAddress." + temp; }
                temp = document.getElementById (id + "_lastModifiedDateTime").value; if ("" != temp) obj.lastModifiedDateTime = temp;
                temp = document.getElementById (id + "_revisionNumber").value; if ("" != temp) obj.revisionNumber = temp;
                temp = document.getElementById (id + "_status").value; if ("" != temp) { temp = Status[temp]; if ("undefined" != typeof (temp)) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#Status." + temp; }
                temp = document.getElementById (id + "_subject").value; if ("" != temp) obj.subject = temp;
                temp = document.getElementById (id + "_title").value; if ("" != temp) obj.title = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_comment").value; if ("" != temp) obj.comment = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ConfigurationEvents", "0..*", "0..1", "ConfigurationEvent", "ChangedDocument"]
                        ]
                    )
                );
            }
        }

        /**
         * General purpose street address information.
         *
         */
        class StreetAddress extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.StreetAddress;
                if (null == bucket)
                   cim_data.StreetAddress = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StreetAddress[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "StreetAddress";
                base.parse_attribute (/<cim:StreetAddress.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:StreetAddress.streetDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "streetDetail", sub, context);
                base.parse_attribute (/<cim:StreetAddress.townDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "townDetail", sub, context);
                var bucket = context.parsed.StreetAddress;
                if (null == bucket)
                   context.parsed.StreetAddress = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "StreetAddress", "status", "status", fields);
                base.export_attribute (obj, "StreetAddress", "streetDetail", "streetDetail", fields);
                base.export_attribute (obj, "StreetAddress", "townDetail", "townDetail", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StreetAddress_collapse" aria-expanded="true" aria-controls="StreetAddress_collapse" style="margin-left: 10px;">StreetAddress</a></legend>
                    <div id="StreetAddress_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#streetDetail}}<div><b>streetDetail</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{streetDetail}}&quot;);}); return false;'>{{streetDetail}}</a></div>{{/streetDetail}}\n                    {{#townDetail}}<div><b>townDetail</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{townDetail}}&quot;);}); return false;'>{{townDetail}}</a></div>{{/townDetail}}\n                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.Status = []; if (!obj.status) obj.Status.push ({ id: '', selected: true}); for (var property in Status) obj.Status.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
                obj.StreetDetail = []; if (!obj.streetDetail) obj.StreetDetail.push ({ id: '', selected: true}); for (var property in StreetDetail) obj.StreetDetail.push ({ id: property, selected: obj.streetDetail && obj.streetDetail.endsWith ('.' + property)});
                obj.TownDetail = []; if (!obj.townDetail) obj.TownDetail.push ({ id: '', selected: true}); for (var property in TownDetail) obj.TownDetail.push ({ id: property, selected: obj.townDetail && obj.townDetail.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Status;
                delete obj.StreetDetail;
                delete obj.TownDetail;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StreetAddress_collapse" aria-expanded="true" aria-controls="{{id}}_StreetAddress_collapse" style="margin-left: 10px;">StreetAddress</a></legend>
                    <div id="{{id}}_StreetAddress_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control custom-select'>{{#Status}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Status}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_streetDetail'>streetDetail: </label><div class='col-sm-8'><select id='{{id}}_streetDetail' class='form-control custom-select'>{{#StreetDetail}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StreetDetail}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_townDetail'>townDetail: </label><div class='col-sm-8'><select id='{{id}}_townDetail' class='form-control custom-select'>{{#TownDetail}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TownDetail}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "StreetAddress" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" != temp) { temp = Status[temp]; if ("undefined" != typeof (temp)) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#Status." + temp; }
                temp = document.getElementById (id + "_streetDetail").value; if ("" != temp) { temp = StreetDetail[temp]; if ("undefined" != typeof (temp)) obj.streetDetail = "http://iec.ch/TC57/2013/CIM-schema-cim16#StreetDetail." + temp; }
                temp = document.getElementById (id + "_townDetail").value; if ("" != temp) { temp = TownDetail[temp]; if ("undefined" != typeof (temp)) obj.townDetail = "http://iec.ch/TC57/2013/CIM-schema-cim16#TownDetail." + temp; }

                return (obj);
            }
        }

        /**
         * Identifies a way in which an organisation may participate in the utility enterprise (e.g., customer, manufacturer, etc).
         *
         */
        class OrganisationRole extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OrganisationRole;
                if (null == bucket)
                   cim_data.OrganisationRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OrganisationRole[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OrganisationRole";
                base.parse_attributes (/<cim:OrganisationRole.ConfigurationEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConfigurationEvents", sub, context);
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

                base.export_attributes (obj, "OrganisationRole", "ConfigurationEvents", "ConfigurationEvents", fields);
                base.export_attribute (obj, "OrganisationRole", "Organisation", "Organisation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OrganisationRole_collapse" aria-expanded="true" aria-controls="OrganisationRole_collapse" style="margin-left: 10px;">OrganisationRole</a></legend>
                    <div id="OrganisationRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ConfigurationEvents}}
                    {{#Organisation}}<div><b>Organisation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Organisation}}&quot;);}); return false;'>{{Organisation}}</a></div>{{/Organisation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ConfigurationEvents) obj.ConfigurationEvents_string = obj.ConfigurationEvents.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ConfigurationEvents_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OrganisationRole_collapse" aria-expanded="true" aria-controls="{{id}}_OrganisationRole_collapse" style="margin-left: 10px;">OrganisationRole</a></legend>
                    <div id="{{id}}_OrganisationRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Organisation'>Organisation: </label><div class='col-sm-8'><input id='{{id}}_Organisation' class='form-control' type='text'{{#Organisation}} value='{{Organisation}}'{{/Organisation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OrganisationRole" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Organisation").value; if ("" != temp) obj.Organisation = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ConfigurationEvents", "0..*", "0..1", "ConfigurationEvent", "ChangedOrganisationRole"],
                            ["Organisation", "0..1", "0..*", "Organisation", "Roles"]
                        ]
                    )
                );
            }
        }

        /**
         * Electronic address information.
         *
         */
        class ElectronicAddress extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ElectronicAddress;
                if (null == bucket)
                   cim_data.ElectronicAddress = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ElectronicAddress[obj.id];
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

                base.export_element (obj, "ElectronicAddress", "email1", "email1",  base.from_string, fields);
                base.export_element (obj, "ElectronicAddress", "email2", "email2",  base.from_string, fields);
                base.export_element (obj, "ElectronicAddress", "lan", "lan",  base.from_string, fields);
                base.export_element (obj, "ElectronicAddress", "mac", "mac",  base.from_string, fields);
                base.export_element (obj, "ElectronicAddress", "password", "password",  base.from_string, fields);
                base.export_element (obj, "ElectronicAddress", "radio", "radio",  base.from_string, fields);
                base.export_element (obj, "ElectronicAddress", "userID", "userID",  base.from_string, fields);
                base.export_element (obj, "ElectronicAddress", "web", "web",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ElectronicAddress_collapse" aria-expanded="true" aria-controls="ElectronicAddress_collapse" style="margin-left: 10px;">ElectronicAddress</a></legend>
                    <div id="ElectronicAddress_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ElectronicAddress_collapse" aria-expanded="true" aria-controls="{{id}}_ElectronicAddress_collapse" style="margin-left: 10px;">ElectronicAddress</a></legend>
                    <div id="{{id}}_ElectronicAddress_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_email1'>email1: </label><div class='col-sm-8'><input id='{{id}}_email1' class='form-control' type='text'{{#email1}} value='{{email1}}'{{/email1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_email2'>email2: </label><div class='col-sm-8'><input id='{{id}}_email2' class='form-control' type='text'{{#email2}} value='{{email2}}'{{/email2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lan'>lan: </label><div class='col-sm-8'><input id='{{id}}_lan' class='form-control' type='text'{{#lan}} value='{{lan}}'{{/lan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mac'>mac: </label><div class='col-sm-8'><input id='{{id}}_mac' class='form-control' type='text'{{#mac}} value='{{mac}}'{{/mac}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_password'>password: </label><div class='col-sm-8'><input id='{{id}}_password' class='form-control' type='text'{{#password}} value='{{password}}'{{/password}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_radio'>radio: </label><div class='col-sm-8'><input id='{{id}}_radio' class='form-control' type='text'{{#radio}} value='{{radio}}'{{/radio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_userID'>userID: </label><div class='col-sm-8'><input id='{{id}}_userID' class='form-control' type='text'{{#userID}} value='{{userID}}'{{/userID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_web'>web: </label><div class='col-sm-8'><input id='{{id}}_web' class='form-control' type='text'{{#web}} value='{{web}}'{{/web}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ElectronicAddress" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_email1").value; if ("" != temp) obj.email1 = temp;
                temp = document.getElementById (id + "_email2").value; if ("" != temp) obj.email2 = temp;
                temp = document.getElementById (id + "_lan").value; if ("" != temp) obj.lan = temp;
                temp = document.getElementById (id + "_mac").value; if ("" != temp) obj.mac = temp;
                temp = document.getElementById (id + "_password").value; if ("" != temp) obj.password = temp;
                temp = document.getElementById (id + "_radio").value; if ("" != temp) obj.radio = temp;
                temp = document.getElementById (id + "_userID").value; if ("" != temp) obj.userID = temp;
                temp = document.getElementById (id + "_web").value; if ("" != temp) obj.web = temp;

                return (obj);
            }
        }

        /**
         * Group of people with specific skills, tools, and vehicles.
         *
         */
        class Crew extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Crew;
                if (null == bucket)
                   cim_data.Crew = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Crew[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Crew";
                base.parse_attribute (/<cim:Crew.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:Crew.CrewMembers\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CrewMembers", sub, context);
                base.parse_attributes (/<cim:Crew.WorkAssets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkAssets", sub, context);
                base.parse_attributes (/<cim:Crew.WorkTasks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
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

                base.export_attribute (obj, "Crew", "status", "status", fields);
                base.export_attributes (obj, "Crew", "CrewMembers", "CrewMembers", fields);
                base.export_attributes (obj, "Crew", "WorkAssets", "WorkAssets", fields);
                base.export_attributes (obj, "Crew", "WorkTasks", "WorkTasks", fields);
                base.export_attribute (obj, "Crew", "CrewType", "CrewType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Crew_collapse" aria-expanded="true" aria-controls="Crew_collapse" style="margin-left: 10px;">Crew</a></legend>
                    <div id="Crew_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#CrewMembers}}<div><b>CrewMembers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CrewMembers}}
                    {{#WorkAssets}}<div><b>WorkAssets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/WorkAssets}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    {{#CrewType}}<div><b>CrewType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CrewType}}&quot;);}); return false;'>{{CrewType}}</a></div>{{/CrewType}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.Status = []; if (!obj.status) obj.Status.push ({ id: '', selected: true}); for (var property in Status) obj.Status.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
                if (obj.CrewMembers) obj.CrewMembers_string = obj.CrewMembers.join ();
                if (obj.WorkAssets) obj.WorkAssets_string = obj.WorkAssets.join ();
                if (obj.WorkTasks) obj.WorkTasks_string = obj.WorkTasks.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Status;
                delete obj.CrewMembers_string;
                delete obj.WorkAssets_string;
                delete obj.WorkTasks_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Crew_collapse" aria-expanded="true" aria-controls="{{id}}_Crew_collapse" style="margin-left: 10px;">Crew</a></legend>
                    <div id="{{id}}_Crew_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control custom-select'>{{#Status}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Status}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTasks'>WorkTasks: </label><div class='col-sm-8'><input id='{{id}}_WorkTasks' class='form-control' type='text'{{#WorkTasks}} value='{{WorkTasks_string}}'{{/WorkTasks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CrewType'>CrewType: </label><div class='col-sm-8'><input id='{{id}}_CrewType' class='form-control' type='text'{{#CrewType}} value='{{CrewType}}'{{/CrewType}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Crew" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" != temp) { temp = Status[temp]; if ("undefined" != typeof (temp)) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#Status." + temp; }
                temp = document.getElementById (id + "_WorkTasks").value; if ("" != temp) obj.WorkTasks = temp.split (",");
                temp = document.getElementById (id + "_CrewType").value; if ("" != temp) obj.CrewType = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CrewMembers", "0..*", "0..1", "CrewMember", "Crew"],
                            ["WorkAssets", "0..*", "0..1", "WorkAsset", "Crew"],
                            ["WorkTasks", "0..*", "0..*", "WorkTask", "Crews"],
                            ["CrewType", "0..1", "0..*", "CrewType", "Crews"]
                        ]
                    )
                );
            }
        }

        /**
         * An event to trigger one or more activities, such as reading a meter, recalculating a bill, requesting work, when generating units must be scheduled for maintenance, when a transformer is scheduled to be refurbished, etc.
         *
         */
        class ScheduledEvent extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ScheduledEvent;
                if (null == bucket)
                   cim_data.ScheduledEvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ScheduledEvent[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledEvent";
                base.parse_element (/<cim:ScheduledEvent.duration>([\s\S]*?)<\/cim:ScheduledEvent.duration>/g, obj, "duration", base.to_string, sub, context);
                base.parse_attribute (/<cim:ScheduledEvent.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_element (/<cim:ScheduledEvent.type>([\s\S]*?)<\/cim:ScheduledEvent.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:ScheduledEvent.Assets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
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

                base.export_element (obj, "ScheduledEvent", "duration", "duration",  base.from_string, fields);
                base.export_attribute (obj, "ScheduledEvent", "status", "status", fields);
                base.export_element (obj, "ScheduledEvent", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "ScheduledEvent", "Assets", "Assets", fields);
                base.export_attribute (obj, "ScheduledEvent", "ScheduledEventData", "ScheduledEventData", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ScheduledEvent_collapse" aria-expanded="true" aria-controls="ScheduledEvent_collapse" style="margin-left: 10px;">ScheduledEvent</a></legend>
                    <div id="ScheduledEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#duration}}<div><b>duration</b>: {{duration}}</div>{{/duration}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#ScheduledEventData}}<div><b>ScheduledEventData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ScheduledEventData}}&quot;);}); return false;'>{{ScheduledEventData}}</a></div>{{/ScheduledEventData}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.Status = []; if (!obj.status) obj.Status.push ({ id: '', selected: true}); for (var property in Status) obj.Status.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Status;
                delete obj.Assets_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ScheduledEvent_collapse" aria-expanded="true" aria-controls="{{id}}_ScheduledEvent_collapse" style="margin-left: 10px;">ScheduledEvent</a></legend>
                    <div id="{{id}}_ScheduledEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_duration'>duration: </label><div class='col-sm-8'><input id='{{id}}_duration' class='form-control' type='text'{{#duration}} value='{{duration}}'{{/duration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control custom-select'>{{#Status}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Status}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assets'>Assets: </label><div class='col-sm-8'><input id='{{id}}_Assets' class='form-control' type='text'{{#Assets}} value='{{Assets_string}}'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ScheduledEventData'>ScheduledEventData: </label><div class='col-sm-8'><input id='{{id}}_ScheduledEventData' class='form-control' type='text'{{#ScheduledEventData}} value='{{ScheduledEventData}}'{{/ScheduledEventData}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ScheduledEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_duration").value; if ("" != temp) obj.duration = temp;
                temp = document.getElementById (id + "_status").value; if ("" != temp) { temp = Status[temp]; if ("undefined" != typeof (temp)) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#Status." + temp; }
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_Assets").value; if ("" != temp) obj.Assets = temp.split (",");
                temp = document.getElementById (id + "_ScheduledEventData").value; if ("" != temp) obj.ScheduledEventData = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Assets", "0..*", "0..*", "Asset", "ScheduledEvents"],
                            ["ScheduledEventData", "0..1", "0..*", "ScheduledEventData", "ScheduledEvents"]
                        ]
                    )
                );
            }
        }

        /**
         * Priority definition.
         *
         */
        class Priority extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Priority;
                if (null == bucket)
                   cim_data.Priority = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Priority[obj.id];
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

                base.export_element (obj, "Priority", "justification", "justification",  base.from_string, fields);
                base.export_element (obj, "Priority", "rank", "rank",  base.from_string, fields);
                base.export_element (obj, "Priority", "type", "type",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Priority_collapse" aria-expanded="true" aria-controls="Priority_collapse" style="margin-left: 10px;">Priority</a></legend>
                    <div id="Priority_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#justification}}<div><b>justification</b>: {{justification}}</div>{{/justification}}
                    {{#rank}}<div><b>rank</b>: {{rank}}</div>{{/rank}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Priority_collapse" aria-expanded="true" aria-controls="{{id}}_Priority_collapse" style="margin-left: 10px;">Priority</a></legend>
                    <div id="{{id}}_Priority_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_justification'>justification: </label><div class='col-sm-8'><input id='{{id}}_justification' class='form-control' type='text'{{#justification}} value='{{justification}}'{{/justification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rank'>rank: </label><div class='col-sm-8'><input id='{{id}}_rank' class='form-control' type='text'{{#rank}} value='{{rank}}'{{/rank}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Priority" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_justification").value; if ("" != temp) obj.justification = temp;
                temp = document.getElementById (id + "_rank").value; if ("" != temp) obj.rank = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;

                return (obj);
            }
        }

        /**
         * A point in time within a sequence of points in time relative to a time schedule.
         *
         */
        class TimePoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TimePoint;
                if (null == bucket)
                   cim_data.TimePoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TimePoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TimePoint";
                base.parse_element (/<cim:TimePoint.dateTime>([\s\S]*?)<\/cim:TimePoint.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:TimePoint.relativeTimeInterval>([\s\S]*?)<\/cim:TimePoint.relativeTimeInterval>/g, obj, "relativeTimeInterval", base.to_string, sub, context);
                base.parse_element (/<cim:TimePoint.sequenceNumber>([\s\S]*?)<\/cim:TimePoint.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:TimePoint.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:TimePoint.window\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "window", sub, context);
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

                base.export_element (obj, "TimePoint", "dateTime", "dateTime",  base.from_datetime, fields);
                base.export_element (obj, "TimePoint", "relativeTimeInterval", "relativeTimeInterval",  base.from_string, fields);
                base.export_element (obj, "TimePoint", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_attribute (obj, "TimePoint", "status", "status", fields);
                base.export_attribute (obj, "TimePoint", "window", "window", fields);
                base.export_attribute (obj, "TimePoint", "TimeSchedule", "TimeSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TimePoint_collapse" aria-expanded="true" aria-controls="TimePoint_collapse" style="margin-left: 10px;">TimePoint</a></legend>
                    <div id="TimePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
                    {{#relativeTimeInterval}}<div><b>relativeTimeInterval</b>: {{relativeTimeInterval}}</div>{{/relativeTimeInterval}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#window}}<div><b>window</b>: {{window}}</div>{{/window}}
                    {{#TimeSchedule}}<div><b>TimeSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TimeSchedule}}&quot;);}); return false;'>{{TimeSchedule}}</a></div>{{/TimeSchedule}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.Status = []; if (!obj.status) obj.Status.push ({ id: '', selected: true}); for (var property in Status) obj.Status.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
                obj.DateTimeInterval = []; if (!obj.window) obj.DateTimeInterval.push ({ id: '', selected: true}); for (var property in DateTimeInterval) obj.DateTimeInterval.push ({ id: property, selected: obj.window && obj.window.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Status;
                delete obj.DateTimeInterval;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TimePoint_collapse" aria-expanded="true" aria-controls="{{id}}_TimePoint_collapse" style="margin-left: 10px;">TimePoint</a></legend>
                    <div id="{{id}}_TimePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dateTime'>dateTime: </label><div class='col-sm-8'><input id='{{id}}_dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_relativeTimeInterval'>relativeTimeInterval: </label><div class='col-sm-8'><input id='{{id}}_relativeTimeInterval' class='form-control' type='text'{{#relativeTimeInterval}} value='{{relativeTimeInterval}}'{{/relativeTimeInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control custom-select'>{{#Status}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Status}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_window'>window: </label><div class='col-sm-8'><select id='{{id}}_window' class='form-control custom-select'>{{#DateTimeInterval}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/DateTimeInterval}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSchedule'>TimeSchedule: </label><div class='col-sm-8'><input id='{{id}}_TimeSchedule' class='form-control' type='text'{{#TimeSchedule}} value='{{TimeSchedule}}'{{/TimeSchedule}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TimePoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dateTime").value; if ("" != temp) obj.dateTime = temp;
                temp = document.getElementById (id + "_relativeTimeInterval").value; if ("" != temp) obj.relativeTimeInterval = temp;
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById (id + "_status").value; if ("" != temp) { temp = Status[temp]; if ("undefined" != typeof (temp)) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#Status." + temp; }
                temp = document.getElementById (id + "_window").value; if ("" != temp) { temp = DateTimeInterval[temp]; if ("undefined" != typeof (temp)) obj.window = "http://iec.ch/TC57/2013/CIM-schema-cim16#DateTimeInterval." + temp; }
                temp = document.getElementById (id + "_TimeSchedule").value; if ("" != temp) obj.TimeSchedule = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TimeSchedule", "1", "0..*", "TimeSchedule", "TimePoints"]
                        ]
                    )
                );
            }
        }

        /**
         * Records activity for an entity at a point in time; activity may be for an event that has already occurred or for a planned activity.
         *
         */
        class ActivityRecord extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ActivityRecord;
                if (null == bucket)
                   cim_data.ActivityRecord = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ActivityRecord[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ActivityRecord";
                base.parse_element (/<cim:ActivityRecord.createdDateTime>([\s\S]*?)<\/cim:ActivityRecord.createdDateTime>/g, obj, "createdDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ActivityRecord.reason>([\s\S]*?)<\/cim:ActivityRecord.reason>/g, obj, "reason", base.to_string, sub, context);
                base.parse_element (/<cim:ActivityRecord.severity>([\s\S]*?)<\/cim:ActivityRecord.severity>/g, obj, "severity", base.to_string, sub, context);
                base.parse_attribute (/<cim:ActivityRecord.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_element (/<cim:ActivityRecord.type>([\s\S]*?)<\/cim:ActivityRecord.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:ActivityRecord.Assets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attributes (/<cim:ActivityRecord.Organisations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Organisations", sub, context);
                var bucket = context.parsed.ActivityRecord;
                if (null == bucket)
                   context.parsed.ActivityRecord = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ActivityRecord", "createdDateTime", "createdDateTime",  base.from_datetime, fields);
                base.export_element (obj, "ActivityRecord", "reason", "reason",  base.from_string, fields);
                base.export_element (obj, "ActivityRecord", "severity", "severity",  base.from_string, fields);
                base.export_attribute (obj, "ActivityRecord", "status", "status", fields);
                base.export_element (obj, "ActivityRecord", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "ActivityRecord", "Assets", "Assets", fields);
                base.export_attributes (obj, "ActivityRecord", "Organisations", "Organisations", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ActivityRecord_collapse" aria-expanded="true" aria-controls="ActivityRecord_collapse" style="margin-left: 10px;">ActivityRecord</a></legend>
                    <div id="ActivityRecord_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#createdDateTime}}<div><b>createdDateTime</b>: {{createdDateTime}}</div>{{/createdDateTime}}
                    {{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
                    {{#severity}}<div><b>severity</b>: {{severity}}</div>{{/severity}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#Organisations}}<div><b>Organisations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Organisations}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.Status = []; if (!obj.status) obj.Status.push ({ id: '', selected: true}); for (var property in Status) obj.Status.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
                if (obj.Organisations) obj.Organisations_string = obj.Organisations.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Status;
                delete obj.Assets_string;
                delete obj.Organisations_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ActivityRecord_collapse" aria-expanded="true" aria-controls="{{id}}_ActivityRecord_collapse" style="margin-left: 10px;">ActivityRecord</a></legend>
                    <div id="{{id}}_ActivityRecord_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_createdDateTime'>createdDateTime: </label><div class='col-sm-8'><input id='{{id}}_createdDateTime' class='form-control' type='text'{{#createdDateTime}} value='{{createdDateTime}}'{{/createdDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reason'>reason: </label><div class='col-sm-8'><input id='{{id}}_reason' class='form-control' type='text'{{#reason}} value='{{reason}}'{{/reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_severity'>severity: </label><div class='col-sm-8'><input id='{{id}}_severity' class='form-control' type='text'{{#severity}} value='{{severity}}'{{/severity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control custom-select'>{{#Status}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Status}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assets'>Assets: </label><div class='col-sm-8'><input id='{{id}}_Assets' class='form-control' type='text'{{#Assets}} value='{{Assets_string}}'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Organisations'>Organisations: </label><div class='col-sm-8'><input id='{{id}}_Organisations' class='form-control' type='text'{{#Organisations}} value='{{Organisations_string}}'{{/Organisations}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ActivityRecord" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_createdDateTime").value; if ("" != temp) obj.createdDateTime = temp;
                temp = document.getElementById (id + "_reason").value; if ("" != temp) obj.reason = temp;
                temp = document.getElementById (id + "_severity").value; if ("" != temp) obj.severity = temp;
                temp = document.getElementById (id + "_status").value; if ("" != temp) { temp = Status[temp]; if ("undefined" != typeof (temp)) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#Status." + temp; }
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_Assets").value; if ("" != temp) obj.Assets = temp.split (",");
                temp = document.getElementById (id + "_Organisations").value; if ("" != temp) obj.Organisations = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Assets", "0..*", "0..*", "Asset", "ActivityRecords"],
                            ["Organisations", "0..*", "0..*", "Organisation", "ActivityRecords"]
                        ]
                    )
                );
            }
        }

        /**
         * General purpose postal address information.
         *
         */
        class PostalAddress extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PostalAddress;
                if (null == bucket)
                   cim_data.PostalAddress = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PostalAddress[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PostalAddress";
                base.parse_element (/<cim:PostalAddress.poBox>([\s\S]*?)<\/cim:PostalAddress.poBox>/g, obj, "poBox", base.to_string, sub, context);
                base.parse_element (/<cim:PostalAddress.postalCode>([\s\S]*?)<\/cim:PostalAddress.postalCode>/g, obj, "postalCode", base.to_string, sub, context);
                base.parse_attribute (/<cim:PostalAddress.streetDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "streetDetail", sub, context);
                base.parse_attribute (/<cim:PostalAddress.townDetail\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "townDetail", sub, context);
                var bucket = context.parsed.PostalAddress;
                if (null == bucket)
                   context.parsed.PostalAddress = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PostalAddress", "poBox", "poBox",  base.from_string, fields);
                base.export_element (obj, "PostalAddress", "postalCode", "postalCode",  base.from_string, fields);
                base.export_attribute (obj, "PostalAddress", "streetDetail", "streetDetail", fields);
                base.export_attribute (obj, "PostalAddress", "townDetail", "townDetail", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PostalAddress_collapse" aria-expanded="true" aria-controls="PostalAddress_collapse" style="margin-left: 10px;">PostalAddress</a></legend>
                    <div id="PostalAddress_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#poBox}}<div><b>poBox</b>: {{poBox}}</div>{{/poBox}}
                    {{#postalCode}}<div><b>postalCode</b>: {{postalCode}}</div>{{/postalCode}}
                    {{#streetDetail}}<div><b>streetDetail</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{streetDetail}}&quot;);}); return false;'>{{streetDetail}}</a></div>{{/streetDetail}}\n                    {{#townDetail}}<div><b>townDetail</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{townDetail}}&quot;);}); return false;'>{{townDetail}}</a></div>{{/townDetail}}\n                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.StreetDetail = []; if (!obj.streetDetail) obj.StreetDetail.push ({ id: '', selected: true}); for (var property in StreetDetail) obj.StreetDetail.push ({ id: property, selected: obj.streetDetail && obj.streetDetail.endsWith ('.' + property)});
                obj.TownDetail = []; if (!obj.townDetail) obj.TownDetail.push ({ id: '', selected: true}); for (var property in TownDetail) obj.TownDetail.push ({ id: property, selected: obj.townDetail && obj.townDetail.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.StreetDetail;
                delete obj.TownDetail;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PostalAddress_collapse" aria-expanded="true" aria-controls="{{id}}_PostalAddress_collapse" style="margin-left: 10px;">PostalAddress</a></legend>
                    <div id="{{id}}_PostalAddress_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_poBox'>poBox: </label><div class='col-sm-8'><input id='{{id}}_poBox' class='form-control' type='text'{{#poBox}} value='{{poBox}}'{{/poBox}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_postalCode'>postalCode: </label><div class='col-sm-8'><input id='{{id}}_postalCode' class='form-control' type='text'{{#postalCode}} value='{{postalCode}}'{{/postalCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_streetDetail'>streetDetail: </label><div class='col-sm-8'><select id='{{id}}_streetDetail' class='form-control custom-select'>{{#StreetDetail}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StreetDetail}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_townDetail'>townDetail: </label><div class='col-sm-8'><select id='{{id}}_townDetail' class='form-control custom-select'>{{#TownDetail}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TownDetail}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PostalAddress" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_poBox").value; if ("" != temp) obj.poBox = temp;
                temp = document.getElementById (id + "_postalCode").value; if ("" != temp) obj.postalCode = temp;
                temp = document.getElementById (id + "_streetDetail").value; if ("" != temp) { temp = StreetDetail[temp]; if ("undefined" != typeof (temp)) obj.streetDetail = "http://iec.ch/TC57/2013/CIM-schema-cim16#StreetDetail." + temp; }
                temp = document.getElementById (id + "_townDetail").value; if ("" != temp) { temp = TownDetail[temp]; if ("undefined" != typeof (temp)) obj.townDetail = "http://iec.ch/TC57/2013/CIM-schema-cim16#TownDetail." + temp; }

                return (obj);
            }
        }

        class PersonRole extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PersonRole;
                if (null == bucket)
                   cim_data.PersonRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PersonRole[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PersonRole";
                base.parse_attributes (/<cim:PersonRole.ConfigurationEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConfigurationEvents", sub, context);
                base.parse_attribute (/<cim:PersonRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Person", sub, context);
                base.parse_attributes (/<cim:PersonRole.Appointments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Appointments", sub, context);
                var bucket = context.parsed.PersonRole;
                if (null == bucket)
                   context.parsed.PersonRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "PersonRole", "ConfigurationEvents", "ConfigurationEvents", fields);
                base.export_attribute (obj, "PersonRole", "Person", "Person", fields);
                base.export_attributes (obj, "PersonRole", "Appointments", "Appointments", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PersonRole_collapse" aria-expanded="true" aria-controls="PersonRole_collapse" style="margin-left: 10px;">PersonRole</a></legend>
                    <div id="PersonRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ConfigurationEvents}}
                    {{#Person}}<div><b>Person</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Person}}&quot;);}); return false;'>{{Person}}</a></div>{{/Person}}
                    {{#Appointments}}<div><b>Appointments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Appointments}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ConfigurationEvents) obj.ConfigurationEvents_string = obj.ConfigurationEvents.join ();
                if (obj.Appointments) obj.Appointments_string = obj.Appointments.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ConfigurationEvents_string;
                delete obj.Appointments_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PersonRole_collapse" aria-expanded="true" aria-controls="{{id}}_PersonRole_collapse" style="margin-left: 10px;">PersonRole</a></legend>
                    <div id="{{id}}_PersonRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Person'>Person: </label><div class='col-sm-8'><input id='{{id}}_Person' class='form-control' type='text'{{#Person}} value='{{Person}}'{{/Person}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Appointments'>Appointments: </label><div class='col-sm-8'><input id='{{id}}_Appointments' class='form-control' type='text'{{#Appointments}} value='{{Appointments_string}}'{{/Appointments}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PersonRole" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Person").value; if ("" != temp) obj.Person = temp;
                temp = document.getElementById (id + "_Appointments").value; if ("" != temp) obj.Appointments = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ConfigurationEvents", "0..*", "0..1", "ConfigurationEvent", "ChangedPersonRole"],
                            ["Person", "0..1", "0..*", "Person", "Roles"],
                            ["Appointments", "0..*", "0..*", "Appointment", "Persons"]
                        ]
                    )
                );
            }
        }

        /**
         * Coordinate reference system.
         *
         */
        class CoordinateSystem extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.CoordinateSystem;
                if (null == bucket)
                   cim_data.CoordinateSystem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CoordinateSystem[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CoordinateSystem";
                base.parse_element (/<cim:CoordinateSystem.crsUrn>([\s\S]*?)<\/cim:CoordinateSystem.crsUrn>/g, obj, "crsUrn", base.to_string, sub, context);
                base.parse_attributes (/<cim:CoordinateSystem.Locations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Locations", sub, context);
                var bucket = context.parsed.CoordinateSystem;
                if (null == bucket)
                   context.parsed.CoordinateSystem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CoordinateSystem", "crsUrn", "crsUrn",  base.from_string, fields);
                base.export_attributes (obj, "CoordinateSystem", "Locations", "Locations", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CoordinateSystem_collapse" aria-expanded="true" aria-controls="CoordinateSystem_collapse" style="margin-left: 10px;">CoordinateSystem</a></legend>
                    <div id="CoordinateSystem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#crsUrn}}<div><b>crsUrn</b>: {{crsUrn}}</div>{{/crsUrn}}
                    {{#Locations}}<div><b>Locations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Locations}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Locations) obj.Locations_string = obj.Locations.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Locations_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CoordinateSystem_collapse" aria-expanded="true" aria-controls="{{id}}_CoordinateSystem_collapse" style="margin-left: 10px;">CoordinateSystem</a></legend>
                    <div id="{{id}}_CoordinateSystem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_crsUrn'>crsUrn: </label><div class='col-sm-8'><input id='{{id}}_crsUrn' class='form-control' type='text'{{#crsUrn}} value='{{crsUrn}}'{{/crsUrn}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CoordinateSystem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_crsUrn").value; if ("" != temp) obj.crsUrn = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Locations", "0..*", "0..1", "Location", "CoordinateSystem"]
                        ]
                    )
                );
            }
        }

        /**
         * An object or a condition that is a danger for causing loss or perils to an asset and/or people.
         *
         */
        class Hazard extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Hazard;
                if (null == bucket)
                   cim_data.Hazard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Hazard[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Hazard";
                base.parse_attribute (/<cim:Hazard.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
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

                base.export_attribute (obj, "Hazard", "status", "status", fields);
                base.export_element (obj, "Hazard", "type", "type",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Hazard_collapse" aria-expanded="true" aria-controls="Hazard_collapse" style="margin-left: 10px;">Hazard</a></legend>
                    <div id="Hazard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.Status = []; if (!obj.status) obj.Status.push ({ id: '', selected: true}); for (var property in Status) obj.Status.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Status;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Hazard_collapse" aria-expanded="true" aria-controls="{{id}}_Hazard_collapse" style="margin-left: 10px;">Hazard</a></legend>
                    <div id="{{id}}_Hazard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control custom-select'>{{#Status}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Status}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Hazard" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" != temp) { temp = Status[temp]; if ("undefined" != typeof (temp)) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#Status." + temp; }
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;

                return (obj);
            }
        }

        /**
         * Town details, in the context of address.
         *
         */
        class TownDetail extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TownDetail;
                if (null == bucket)
                   cim_data.TownDetail = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TownDetail[obj.id];
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

                base.export_element (obj, "TownDetail", "code", "code",  base.from_string, fields);
                base.export_element (obj, "TownDetail", "country", "country",  base.from_string, fields);
                base.export_element (obj, "TownDetail", "name", "name",  base.from_string, fields);
                base.export_element (obj, "TownDetail", "section", "section",  base.from_string, fields);
                base.export_element (obj, "TownDetail", "stateOrProvince", "stateOrProvince",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TownDetail_collapse" aria-expanded="true" aria-controls="TownDetail_collapse" style="margin-left: 10px;">TownDetail</a></legend>
                    <div id="TownDetail_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#code}}<div><b>code</b>: {{code}}</div>{{/code}}
                    {{#country}}<div><b>country</b>: {{country}}</div>{{/country}}
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#section}}<div><b>section</b>: {{section}}</div>{{/section}}
                    {{#stateOrProvince}}<div><b>stateOrProvince</b>: {{stateOrProvince}}</div>{{/stateOrProvince}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TownDetail_collapse" aria-expanded="true" aria-controls="{{id}}_TownDetail_collapse" style="margin-left: 10px;">TownDetail</a></legend>
                    <div id="{{id}}_TownDetail_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_code'>code: </label><div class='col-sm-8'><input id='{{id}}_code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_country'>country: </label><div class='col-sm-8'><input id='{{id}}_country' class='form-control' type='text'{{#country}} value='{{country}}'{{/country}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_section'>section: </label><div class='col-sm-8'><input id='{{id}}_section' class='form-control' type='text'{{#section}} value='{{section}}'{{/section}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stateOrProvince'>stateOrProvince: </label><div class='col-sm-8'><input id='{{id}}_stateOrProvince' class='form-control' type='text'{{#stateOrProvince}} value='{{stateOrProvince}}'{{/stateOrProvince}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TownDetail" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_code").value; if ("" != temp) obj.code = temp;
                temp = document.getElementById (id + "_country").value; if ("" != temp) obj.country = temp;
                temp = document.getElementById (id + "_name").value; if ("" != temp) obj.name = temp;
                temp = document.getElementById (id + "_section").value; if ("" != temp) obj.section = temp;
                temp = document.getElementById (id + "_stateOrProvince").value; if ("" != temp) obj.stateOrProvince = temp;

                return (obj);
            }
        }

        /**
         * Organisation that might have roles as utility, contractor, supplier, manufacturer, customer, etc.
         *
         */
        class Organisation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Organisation;
                if (null == bucket)
                   cim_data.Organisation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Organisation[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Organisation";
                base.parse_attribute (/<cim:Organisation.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "electronicAddress", sub, context);
                base.parse_attribute (/<cim:Organisation.phone1\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phone1", sub, context);
                base.parse_attribute (/<cim:Organisation.phone2\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phone2", sub, context);
                base.parse_attribute (/<cim:Organisation.postalAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "postalAddress", sub, context);
                base.parse_attribute (/<cim:Organisation.streetAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "streetAddress", sub, context);
                base.parse_attributes (/<cim:Organisation.Crews\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crews", sub, context);
                base.parse_attributes (/<cim:Organisation.ActivityRecords\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ActivityRecords", sub, context);
                base.parse_attributes (/<cim:Organisation.Roles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Roles", sub, context);
                var bucket = context.parsed.Organisation;
                if (null == bucket)
                   context.parsed.Organisation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Organisation", "electronicAddress", "electronicAddress", fields);
                base.export_attribute (obj, "Organisation", "phone1", "phone1", fields);
                base.export_attribute (obj, "Organisation", "phone2", "phone2", fields);
                base.export_attribute (obj, "Organisation", "postalAddress", "postalAddress", fields);
                base.export_attribute (obj, "Organisation", "streetAddress", "streetAddress", fields);
                base.export_attributes (obj, "Organisation", "Crews", "Crews", fields);
                base.export_attributes (obj, "Organisation", "ActivityRecords", "ActivityRecords", fields);
                base.export_attributes (obj, "Organisation", "Roles", "Roles", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Organisation_collapse" aria-expanded="true" aria-controls="Organisation_collapse" style="margin-left: 10px;">Organisation</a></legend>
                    <div id="Organisation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#electronicAddress}}<div><b>electronicAddress</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{electronicAddress}}&quot;);}); return false;'>{{electronicAddress}}</a></div>{{/electronicAddress}}\n                    {{#phone1}}<div><b>phone1</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{phone1}}&quot;);}); return false;'>{{phone1}}</a></div>{{/phone1}}\n                    {{#phone2}}<div><b>phone2</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{phone2}}&quot;);}); return false;'>{{phone2}}</a></div>{{/phone2}}\n                    {{#postalAddress}}<div><b>postalAddress</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{postalAddress}}&quot;);}); return false;'>{{postalAddress}}</a></div>{{/postalAddress}}\n                    {{#streetAddress}}<div><b>streetAddress</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{streetAddress}}&quot;);}); return false;'>{{streetAddress}}</a></div>{{/streetAddress}}\n                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Crews}}
                    {{#ActivityRecords}}<div><b>ActivityRecords</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ActivityRecords}}
                    {{#Roles}}<div><b>Roles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Roles}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ElectronicAddress = []; if (!obj.electronicAddress) obj.ElectronicAddress.push ({ id: '', selected: true}); for (var property in ElectronicAddress) obj.ElectronicAddress.push ({ id: property, selected: obj.electronicAddress && obj.electronicAddress.endsWith ('.' + property)});
                obj.TelephoneNumber = []; if (!obj.phone1) obj.TelephoneNumber.push ({ id: '', selected: true}); for (var property in TelephoneNumber) obj.TelephoneNumber.push ({ id: property, selected: obj.phone1 && obj.phone1.endsWith ('.' + property)});
                obj.TelephoneNumber = []; if (!obj.phone2) obj.TelephoneNumber.push ({ id: '', selected: true}); for (var property in TelephoneNumber) obj.TelephoneNumber.push ({ id: property, selected: obj.phone2 && obj.phone2.endsWith ('.' + property)});
                obj.PostalAddress = []; if (!obj.postalAddress) obj.PostalAddress.push ({ id: '', selected: true}); for (var property in PostalAddress) obj.PostalAddress.push ({ id: property, selected: obj.postalAddress && obj.postalAddress.endsWith ('.' + property)});
                obj.StreetAddress = []; if (!obj.streetAddress) obj.StreetAddress.push ({ id: '', selected: true}); for (var property in StreetAddress) obj.StreetAddress.push ({ id: property, selected: obj.streetAddress && obj.streetAddress.endsWith ('.' + property)});
                if (obj.Crews) obj.Crews_string = obj.Crews.join ();
                if (obj.ActivityRecords) obj.ActivityRecords_string = obj.ActivityRecords.join ();
                if (obj.Roles) obj.Roles_string = obj.Roles.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ElectronicAddress;
                delete obj.TelephoneNumber;
                delete obj.TelephoneNumber;
                delete obj.PostalAddress;
                delete obj.StreetAddress;
                delete obj.Crews_string;
                delete obj.ActivityRecords_string;
                delete obj.Roles_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Organisation_collapse" aria-expanded="true" aria-controls="{{id}}_Organisation_collapse" style="margin-left: 10px;">Organisation</a></legend>
                    <div id="{{id}}_Organisation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_electronicAddress'>electronicAddress: </label><div class='col-sm-8'><select id='{{id}}_electronicAddress' class='form-control custom-select'>{{#ElectronicAddress}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ElectronicAddress}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phone1'>phone1: </label><div class='col-sm-8'><select id='{{id}}_phone1' class='form-control custom-select'>{{#TelephoneNumber}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TelephoneNumber}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phone2'>phone2: </label><div class='col-sm-8'><select id='{{id}}_phone2' class='form-control custom-select'>{{#TelephoneNumber}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TelephoneNumber}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_postalAddress'>postalAddress: </label><div class='col-sm-8'><select id='{{id}}_postalAddress' class='form-control custom-select'>{{#PostalAddress}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PostalAddress}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_streetAddress'>streetAddress: </label><div class='col-sm-8'><select id='{{id}}_streetAddress' class='form-control custom-select'>{{#StreetAddress}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StreetAddress}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crews'>Crews: </label><div class='col-sm-8'><input id='{{id}}_Crews' class='form-control' type='text'{{#Crews}} value='{{Crews_string}}'{{/Crews}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ActivityRecords'>ActivityRecords: </label><div class='col-sm-8'><input id='{{id}}_ActivityRecords' class='form-control' type='text'{{#ActivityRecords}} value='{{ActivityRecords_string}}'{{/ActivityRecords}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Organisation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_electronicAddress").value; if ("" != temp) { temp = ElectronicAddress[temp]; if ("undefined" != typeof (temp)) obj.electronicAddress = "http://iec.ch/TC57/2013/CIM-schema-cim16#ElectronicAddress." + temp; }
                temp = document.getElementById (id + "_phone1").value; if ("" != temp) { temp = TelephoneNumber[temp]; if ("undefined" != typeof (temp)) obj.phone1 = "http://iec.ch/TC57/2013/CIM-schema-cim16#TelephoneNumber." + temp; }
                temp = document.getElementById (id + "_phone2").value; if ("" != temp) { temp = TelephoneNumber[temp]; if ("undefined" != typeof (temp)) obj.phone2 = "http://iec.ch/TC57/2013/CIM-schema-cim16#TelephoneNumber." + temp; }
                temp = document.getElementById (id + "_postalAddress").value; if ("" != temp) { temp = PostalAddress[temp]; if ("undefined" != typeof (temp)) obj.postalAddress = "http://iec.ch/TC57/2013/CIM-schema-cim16#PostalAddress." + temp; }
                temp = document.getElementById (id + "_streetAddress").value; if ("" != temp) { temp = StreetAddress[temp]; if ("undefined" != typeof (temp)) obj.streetAddress = "http://iec.ch/TC57/2013/CIM-schema-cim16#StreetAddress." + temp; }
                temp = document.getElementById (id + "_Crews").value; if ("" != temp) obj.Crews = temp.split (",");
                temp = document.getElementById (id + "_ActivityRecords").value; if ("" != temp) obj.ActivityRecords = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Crews", "0..*", "1..*", "OldCrew", "Organisations"],
                            ["ActivityRecords", "0..*", "0..*", "ActivityRecord", "Organisations"],
                            ["Roles", "0..*", "0..1", "OrganisationRole", "Organisation"]
                        ]
                    )
                );
            }
        }

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
                var bucket = cim_data.CrewType;
                if (null == bucket)
                   cim_data.CrewType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CrewType[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CrewType";
                base.parse_attributes (/<cim:CrewType.Crews\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crews", sub, context);
                var bucket = context.parsed.CrewType;
                if (null == bucket)
                   context.parsed.CrewType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "CrewType", "Crews", "Crews", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CrewType_collapse" aria-expanded="true" aria-controls="CrewType_collapse" style="margin-left: 10px;">CrewType</a></legend>
                    <div id="CrewType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Crews}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Crews) obj.Crews_string = obj.Crews.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Crews_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CrewType_collapse" aria-expanded="true" aria-controls="{{id}}_CrewType_collapse" style="margin-left: 10px;">CrewType</a></legend>
                    <div id="{{id}}_CrewType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "CrewType" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Crews", "0..*", "0..1", "Crew", "CrewType"]
                        ]
                    )
                );
            }
        }

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
                var bucket = cim_data.Location;
                if (null == bucket)
                   cim_data.Location = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Location[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Location";
                base.parse_element (/<cim:Location.direction>([\s\S]*?)<\/cim:Location.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_attribute (/<cim:Location.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "electronicAddress", sub, context);
                base.parse_element (/<cim:Location.geoInfoReference>([\s\S]*?)<\/cim:Location.geoInfoReference>/g, obj, "geoInfoReference", base.to_string, sub, context);
                base.parse_attribute (/<cim:Location.mainAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "mainAddress", sub, context);
                base.parse_attribute (/<cim:Location.phone1\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phone1", sub, context);
                base.parse_attribute (/<cim:Location.phone2\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phone2", sub, context);
                base.parse_attribute (/<cim:Location.secondaryAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "secondaryAddress", sub, context);
                base.parse_attribute (/<cim:Location.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_element (/<cim:Location.type>([\s\S]*?)<\/cim:Location.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:Location.Assets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attributes (/<cim:Location.PowerSystemResources\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResources", sub, context);
                base.parse_attributes (/<cim:Location.Measurements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Measurements", sub, context);
                base.parse_attributes (/<cim:Location.Hazards\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Hazards", sub, context);
                base.parse_attributes (/<cim:Location.LandProperties\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LandProperties", sub, context);
                base.parse_attributes (/<cim:Location.ConfigurationEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConfigurationEvents", sub, context);
                base.parse_attributes (/<cim:Location.Crews\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crews", sub, context);
                base.parse_attributes (/<cim:Location.PositionPoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PositionPoints", sub, context);
                base.parse_attributes (/<cim:Location.Routes\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Routes", sub, context);
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

                base.export_element (obj, "Location", "direction", "direction",  base.from_string, fields);
                base.export_attribute (obj, "Location", "electronicAddress", "electronicAddress", fields);
                base.export_element (obj, "Location", "geoInfoReference", "geoInfoReference",  base.from_string, fields);
                base.export_attribute (obj, "Location", "mainAddress", "mainAddress", fields);
                base.export_attribute (obj, "Location", "phone1", "phone1", fields);
                base.export_attribute (obj, "Location", "phone2", "phone2", fields);
                base.export_attribute (obj, "Location", "secondaryAddress", "secondaryAddress", fields);
                base.export_attribute (obj, "Location", "status", "status", fields);
                base.export_element (obj, "Location", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "Location", "Assets", "Assets", fields);
                base.export_attributes (obj, "Location", "PowerSystemResources", "PowerSystemResources", fields);
                base.export_attributes (obj, "Location", "Measurements", "Measurements", fields);
                base.export_attributes (obj, "Location", "Hazards", "Hazards", fields);
                base.export_attributes (obj, "Location", "LandProperties", "LandProperties", fields);
                base.export_attributes (obj, "Location", "ConfigurationEvents", "ConfigurationEvents", fields);
                base.export_attributes (obj, "Location", "Crews", "Crews", fields);
                base.export_attributes (obj, "Location", "PositionPoints", "PositionPoints", fields);
                base.export_attributes (obj, "Location", "Routes", "Routes", fields);
                base.export_attribute (obj, "Location", "CoordinateSystem", "CoordinateSystem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Location_collapse" aria-expanded="true" aria-controls="Location_collapse" style="margin-left: 10px;">Location</a></legend>
                    <div id="Location_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
                    {{#electronicAddress}}<div><b>electronicAddress</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{electronicAddress}}&quot;);}); return false;'>{{electronicAddress}}</a></div>{{/electronicAddress}}\n                    {{#geoInfoReference}}<div><b>geoInfoReference</b>: {{geoInfoReference}}</div>{{/geoInfoReference}}
                    {{#mainAddress}}<div><b>mainAddress</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{mainAddress}}&quot;);}); return false;'>{{mainAddress}}</a></div>{{/mainAddress}}\n                    {{#phone1}}<div><b>phone1</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{phone1}}&quot;);}); return false;'>{{phone1}}</a></div>{{/phone1}}\n                    {{#phone2}}<div><b>phone2</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{phone2}}&quot;);}); return false;'>{{phone2}}</a></div>{{/phone2}}\n                    {{#secondaryAddress}}<div><b>secondaryAddress</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{secondaryAddress}}&quot;);}); return false;'>{{secondaryAddress}}</a></div>{{/secondaryAddress}}\n                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#PowerSystemResources}}<div><b>PowerSystemResources</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PowerSystemResources}}
                    {{#Measurements}}<div><b>Measurements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Measurements}}
                    {{#Hazards}}<div><b>Hazards</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Hazards}}
                    {{#LandProperties}}<div><b>LandProperties</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/LandProperties}}
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ConfigurationEvents}}
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Crews}}
                    {{#PositionPoints}}<div><b>PositionPoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PositionPoints}}
                    {{#Routes}}<div><b>Routes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Routes}}
                    {{#CoordinateSystem}}<div><b>CoordinateSystem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CoordinateSystem}}&quot;);}); return false;'>{{CoordinateSystem}}</a></div>{{/CoordinateSystem}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ElectronicAddress = []; if (!obj.electronicAddress) obj.ElectronicAddress.push ({ id: '', selected: true}); for (var property in ElectronicAddress) obj.ElectronicAddress.push ({ id: property, selected: obj.electronicAddress && obj.electronicAddress.endsWith ('.' + property)});
                obj.StreetAddress = []; if (!obj.mainAddress) obj.StreetAddress.push ({ id: '', selected: true}); for (var property in StreetAddress) obj.StreetAddress.push ({ id: property, selected: obj.mainAddress && obj.mainAddress.endsWith ('.' + property)});
                obj.TelephoneNumber = []; if (!obj.phone1) obj.TelephoneNumber.push ({ id: '', selected: true}); for (var property in TelephoneNumber) obj.TelephoneNumber.push ({ id: property, selected: obj.phone1 && obj.phone1.endsWith ('.' + property)});
                obj.TelephoneNumber = []; if (!obj.phone2) obj.TelephoneNumber.push ({ id: '', selected: true}); for (var property in TelephoneNumber) obj.TelephoneNumber.push ({ id: property, selected: obj.phone2 && obj.phone2.endsWith ('.' + property)});
                obj.StreetAddress = []; if (!obj.secondaryAddress) obj.StreetAddress.push ({ id: '', selected: true}); for (var property in StreetAddress) obj.StreetAddress.push ({ id: property, selected: obj.secondaryAddress && obj.secondaryAddress.endsWith ('.' + property)});
                obj.Status = []; if (!obj.status) obj.Status.push ({ id: '', selected: true}); for (var property in Status) obj.Status.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
                if (obj.PowerSystemResources) obj.PowerSystemResources_string = obj.PowerSystemResources.join ();
                if (obj.Measurements) obj.Measurements_string = obj.Measurements.join ();
                if (obj.Hazards) obj.Hazards_string = obj.Hazards.join ();
                if (obj.LandProperties) obj.LandProperties_string = obj.LandProperties.join ();
                if (obj.ConfigurationEvents) obj.ConfigurationEvents_string = obj.ConfigurationEvents.join ();
                if (obj.Crews) obj.Crews_string = obj.Crews.join ();
                if (obj.PositionPoints) obj.PositionPoints_string = obj.PositionPoints.join ();
                if (obj.Routes) obj.Routes_string = obj.Routes.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ElectronicAddress;
                delete obj.StreetAddress;
                delete obj.TelephoneNumber;
                delete obj.TelephoneNumber;
                delete obj.StreetAddress;
                delete obj.Status;
                delete obj.Assets_string;
                delete obj.PowerSystemResources_string;
                delete obj.Measurements_string;
                delete obj.Hazards_string;
                delete obj.LandProperties_string;
                delete obj.ConfigurationEvents_string;
                delete obj.Crews_string;
                delete obj.PositionPoints_string;
                delete obj.Routes_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Location_collapse" aria-expanded="true" aria-controls="{{id}}_Location_collapse" style="margin-left: 10px;">Location</a></legend>
                    <div id="{{id}}_Location_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_direction'>direction: </label><div class='col-sm-8'><input id='{{id}}_direction' class='form-control' type='text'{{#direction}} value='{{direction}}'{{/direction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_electronicAddress'>electronicAddress: </label><div class='col-sm-8'><select id='{{id}}_electronicAddress' class='form-control custom-select'>{{#ElectronicAddress}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ElectronicAddress}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_geoInfoReference'>geoInfoReference: </label><div class='col-sm-8'><input id='{{id}}_geoInfoReference' class='form-control' type='text'{{#geoInfoReference}} value='{{geoInfoReference}}'{{/geoInfoReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mainAddress'>mainAddress: </label><div class='col-sm-8'><select id='{{id}}_mainAddress' class='form-control custom-select'>{{#StreetAddress}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StreetAddress}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phone1'>phone1: </label><div class='col-sm-8'><select id='{{id}}_phone1' class='form-control custom-select'>{{#TelephoneNumber}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TelephoneNumber}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phone2'>phone2: </label><div class='col-sm-8'><select id='{{id}}_phone2' class='form-control custom-select'>{{#TelephoneNumber}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TelephoneNumber}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_secondaryAddress'>secondaryAddress: </label><div class='col-sm-8'><select id='{{id}}_secondaryAddress' class='form-control custom-select'>{{#StreetAddress}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StreetAddress}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control custom-select'>{{#Status}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Status}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Measurements'>Measurements: </label><div class='col-sm-8'><input id='{{id}}_Measurements' class='form-control' type='text'{{#Measurements}} value='{{Measurements_string}}'{{/Measurements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Hazards'>Hazards: </label><div class='col-sm-8'><input id='{{id}}_Hazards' class='form-control' type='text'{{#Hazards}} value='{{Hazards_string}}'{{/Hazards}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LandProperties'>LandProperties: </label><div class='col-sm-8'><input id='{{id}}_LandProperties' class='form-control' type='text'{{#LandProperties}} value='{{LandProperties_string}}'{{/LandProperties}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crews'>Crews: </label><div class='col-sm-8'><input id='{{id}}_Crews' class='form-control' type='text'{{#Crews}} value='{{Crews_string}}'{{/Crews}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Routes'>Routes: </label><div class='col-sm-8'><input id='{{id}}_Routes' class='form-control' type='text'{{#Routes}} value='{{Routes_string}}'{{/Routes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CoordinateSystem'>CoordinateSystem: </label><div class='col-sm-8'><input id='{{id}}_CoordinateSystem' class='form-control' type='text'{{#CoordinateSystem}} value='{{CoordinateSystem}}'{{/CoordinateSystem}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Location" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_direction").value; if ("" != temp) obj.direction = temp;
                temp = document.getElementById (id + "_electronicAddress").value; if ("" != temp) { temp = ElectronicAddress[temp]; if ("undefined" != typeof (temp)) obj.electronicAddress = "http://iec.ch/TC57/2013/CIM-schema-cim16#ElectronicAddress." + temp; }
                temp = document.getElementById (id + "_geoInfoReference").value; if ("" != temp) obj.geoInfoReference = temp;
                temp = document.getElementById (id + "_mainAddress").value; if ("" != temp) { temp = StreetAddress[temp]; if ("undefined" != typeof (temp)) obj.mainAddress = "http://iec.ch/TC57/2013/CIM-schema-cim16#StreetAddress." + temp; }
                temp = document.getElementById (id + "_phone1").value; if ("" != temp) { temp = TelephoneNumber[temp]; if ("undefined" != typeof (temp)) obj.phone1 = "http://iec.ch/TC57/2013/CIM-schema-cim16#TelephoneNumber." + temp; }
                temp = document.getElementById (id + "_phone2").value; if ("" != temp) { temp = TelephoneNumber[temp]; if ("undefined" != typeof (temp)) obj.phone2 = "http://iec.ch/TC57/2013/CIM-schema-cim16#TelephoneNumber." + temp; }
                temp = document.getElementById (id + "_secondaryAddress").value; if ("" != temp) { temp = StreetAddress[temp]; if ("undefined" != typeof (temp)) obj.secondaryAddress = "http://iec.ch/TC57/2013/CIM-schema-cim16#StreetAddress." + temp; }
                temp = document.getElementById (id + "_status").value; if ("" != temp) { temp = Status[temp]; if ("undefined" != typeof (temp)) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#Status." + temp; }
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_Measurements").value; if ("" != temp) obj.Measurements = temp.split (",");
                temp = document.getElementById (id + "_Hazards").value; if ("" != temp) obj.Hazards = temp.split (",");
                temp = document.getElementById (id + "_LandProperties").value; if ("" != temp) obj.LandProperties = temp.split (",");
                temp = document.getElementById (id + "_Crews").value; if ("" != temp) obj.Crews = temp.split (",");
                temp = document.getElementById (id + "_Routes").value; if ("" != temp) obj.Routes = temp.split (",");
                temp = document.getElementById (id + "_CoordinateSystem").value; if ("" != temp) obj.CoordinateSystem = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Assets", "0..*", "0..1", "Asset", "Location"],
                            ["PowerSystemResources", "0..*", "0..1", "PowerSystemResource", "Location"],
                            ["Measurements", "0..*", "0..*", "Measurement", "Locations"],
                            ["Hazards", "0..*", "0..*", "AssetLocationHazard", "Locations"],
                            ["LandProperties", "0..*", "0..*", "LandProperty", "Locations"],
                            ["ConfigurationEvents", "0..*", "0..1", "ConfigurationEvent", "ChangedLocation"],
                            ["Crews", "0..*", "0..*", "OldCrew", "Locations"],
                            ["PositionPoints", "0..*", "1", "PositionPoint", "Location"],
                            ["Routes", "0..*", "0..*", "Route", "Locations"],
                            ["CoordinateSystem", "0..1", "0..*", "CoordinateSystem", "Locations"]
                        ]
                    )
                );
            }
        }

        /**
         * Ownership of e.g. asset.
         *
         */
        class Ownership extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Ownership;
                if (null == bucket)
                   cim_data.Ownership = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Ownership[obj.id];
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

                base.export_element (obj, "Ownership", "share", "share",  base.from_string, fields);
                base.export_attribute (obj, "Ownership", "AssetOwner", "AssetOwner", fields);
                base.export_attribute (obj, "Ownership", "Asset", "Asset", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Ownership_collapse" aria-expanded="true" aria-controls="Ownership_collapse" style="margin-left: 10px;">Ownership</a></legend>
                    <div id="Ownership_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#share}}<div><b>share</b>: {{share}}</div>{{/share}}
                    {{#AssetOwner}}<div><b>AssetOwner</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetOwner}}&quot;);}); return false;'>{{AssetOwner}}</a></div>{{/AssetOwner}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Asset}}&quot;);}); return false;'>{{Asset}}</a></div>{{/Asset}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Ownership_collapse" aria-expanded="true" aria-controls="{{id}}_Ownership_collapse" style="margin-left: 10px;">Ownership</a></legend>
                    <div id="{{id}}_Ownership_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_share'>share: </label><div class='col-sm-8'><input id='{{id}}_share' class='form-control' type='text'{{#share}} value='{{share}}'{{/share}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetOwner'>AssetOwner: </label><div class='col-sm-8'><input id='{{id}}_AssetOwner' class='form-control' type='text'{{#AssetOwner}} value='{{AssetOwner}}'{{/AssetOwner}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Ownership" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_share").value; if ("" != temp) obj.share = temp;
                temp = document.getElementById (id + "_AssetOwner").value; if ("" != temp) obj.AssetOwner = temp;
                temp = document.getElementById (id + "_Asset").value; if ("" != temp) obj.Asset = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AssetOwner", "0..1", "0..*", "AssetOwner", "Ownerships"],
                            ["Asset", "0..1", "0..*", "Asset", "Ownerships"]
                        ]
                    )
                );
            }
        }

        /**
         * Telephone number.
         *
         */
        class TelephoneNumber extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TelephoneNumber;
                if (null == bucket)
                   cim_data.TelephoneNumber = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TelephoneNumber[obj.id];
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

                base.export_element (obj, "TelephoneNumber", "areaCode", "areaCode",  base.from_string, fields);
                base.export_element (obj, "TelephoneNumber", "cityCode", "cityCode",  base.from_string, fields);
                base.export_element (obj, "TelephoneNumber", "countryCode", "countryCode",  base.from_string, fields);
                base.export_element (obj, "TelephoneNumber", "extension", "extension",  base.from_string, fields);
                base.export_element (obj, "TelephoneNumber", "localNumber", "localNumber",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TelephoneNumber_collapse" aria-expanded="true" aria-controls="TelephoneNumber_collapse" style="margin-left: 10px;">TelephoneNumber</a></legend>
                    <div id="TelephoneNumber_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#areaCode}}<div><b>areaCode</b>: {{areaCode}}</div>{{/areaCode}}
                    {{#cityCode}}<div><b>cityCode</b>: {{cityCode}}</div>{{/cityCode}}
                    {{#countryCode}}<div><b>countryCode</b>: {{countryCode}}</div>{{/countryCode}}
                    {{#extension}}<div><b>extension</b>: {{extension}}</div>{{/extension}}
                    {{#localNumber}}<div><b>localNumber</b>: {{localNumber}}</div>{{/localNumber}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TelephoneNumber_collapse" aria-expanded="true" aria-controls="{{id}}_TelephoneNumber_collapse" style="margin-left: 10px;">TelephoneNumber</a></legend>
                    <div id="{{id}}_TelephoneNumber_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_areaCode'>areaCode: </label><div class='col-sm-8'><input id='{{id}}_areaCode' class='form-control' type='text'{{#areaCode}} value='{{areaCode}}'{{/areaCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cityCode'>cityCode: </label><div class='col-sm-8'><input id='{{id}}_cityCode' class='form-control' type='text'{{#cityCode}} value='{{cityCode}}'{{/cityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_countryCode'>countryCode: </label><div class='col-sm-8'><input id='{{id}}_countryCode' class='form-control' type='text'{{#countryCode}} value='{{countryCode}}'{{/countryCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_extension'>extension: </label><div class='col-sm-8'><input id='{{id}}_extension' class='form-control' type='text'{{#extension}} value='{{extension}}'{{/extension}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_localNumber'>localNumber: </label><div class='col-sm-8'><input id='{{id}}_localNumber' class='form-control' type='text'{{#localNumber}} value='{{localNumber}}'{{/localNumber}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TelephoneNumber" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_areaCode").value; if ("" != temp) obj.areaCode = temp;
                temp = document.getElementById (id + "_cityCode").value; if ("" != temp) obj.cityCode = temp;
                temp = document.getElementById (id + "_countryCode").value; if ("" != temp) obj.countryCode = temp;
                temp = document.getElementById (id + "_extension").value; if ("" != temp) obj.extension = temp;
                temp = document.getElementById (id + "_localNumber").value; if ("" != temp) obj.localNumber = temp;

                return (obj);
            }
        }

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
                var bucket = cim_data.PositionPoint;
                if (null == bucket)
                   cim_data.PositionPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PositionPoint[obj.id];
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

                base.export_element (obj, "PositionPoint", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "PositionPoint", "xPosition", "xPosition",  base.from_string, fields);
                base.export_element (obj, "PositionPoint", "yPosition", "yPosition",  base.from_string, fields);
                base.export_element (obj, "PositionPoint", "zPosition", "zPosition",  base.from_string, fields);
                base.export_attribute (obj, "PositionPoint", "Location", "Location", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PositionPoint_collapse" aria-expanded="true" aria-controls="PositionPoint_collapse" style="margin-left: 10px;">PositionPoint</a></legend>
                    <div id="PositionPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#xPosition}}<div><b>xPosition</b>: {{xPosition}}</div>{{/xPosition}}
                    {{#yPosition}}<div><b>yPosition</b>: {{yPosition}}</div>{{/yPosition}}
                    {{#zPosition}}<div><b>zPosition</b>: {{zPosition}}</div>{{/zPosition}}
                    {{#Location}}<div><b>Location</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Location}}&quot;);}); return false;'>{{Location}}</a></div>{{/Location}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PositionPoint_collapse" aria-expanded="true" aria-controls="{{id}}_PositionPoint_collapse" style="margin-left: 10px;">PositionPoint</a></legend>
                    <div id="{{id}}_PositionPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xPosition'>xPosition: </label><div class='col-sm-8'><input id='{{id}}_xPosition' class='form-control' type='text'{{#xPosition}} value='{{xPosition}}'{{/xPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_yPosition'>yPosition: </label><div class='col-sm-8'><input id='{{id}}_yPosition' class='form-control' type='text'{{#yPosition}} value='{{yPosition}}'{{/yPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_zPosition'>zPosition: </label><div class='col-sm-8'><input id='{{id}}_zPosition' class='form-control' type='text'{{#zPosition}} value='{{zPosition}}'{{/zPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Location'>Location: </label><div class='col-sm-8'><input id='{{id}}_Location' class='form-control' type='text'{{#Location}} value='{{Location}}'{{/Location}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PositionPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById (id + "_xPosition").value; if ("" != temp) obj.xPosition = temp;
                temp = document.getElementById (id + "_yPosition").value; if ("" != temp) obj.yPosition = temp;
                temp = document.getElementById (id + "_zPosition").value; if ("" != temp) obj.zPosition = temp;
                temp = document.getElementById (id + "_Location").value; if ("" != temp) obj.Location = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Location", "1", "0..*", "Location", "PositionPoints"]
                        ]
                    )
                );
            }
        }

        /**
         * Generic name-value pair class, with optional sequence number and units for value; can be used to model parts of information exchange when concrete types are not known in advance.
         *
         */
        class UserAttribute extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.UserAttribute;
                if (null == bucket)
                   cim_data.UserAttribute = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UserAttribute[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "UserAttribute";
                base.parse_element (/<cim:UserAttribute.name>([\s\S]*?)<\/cim:UserAttribute.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_element (/<cim:UserAttribute.sequenceNumber>([\s\S]*?)<\/cim:UserAttribute.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:UserAttribute.value\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "value", sub, context);
                base.parse_attributes (/<cim:UserAttribute.ErpInvoiceLineItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInvoiceLineItems", sub, context);
                base.parse_attribute (/<cim:UserAttribute.Transaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Transaction", sub, context);
                base.parse_attribute (/<cim:UserAttribute.RatingSpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RatingSpecification", sub, context);
                base.parse_attributes (/<cim:UserAttribute.ProcedureDataSets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProcedureDataSets", sub, context);
                base.parse_attributes (/<cim:UserAttribute.ErpLedgerEntries\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpLedgerEntries", sub, context);
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

                base.export_element (obj, "UserAttribute", "name", "name",  base.from_string, fields);
                base.export_element (obj, "UserAttribute", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_attribute (obj, "UserAttribute", "value", "value", fields);
                base.export_attributes (obj, "UserAttribute", "ErpInvoiceLineItems", "ErpInvoiceLineItems", fields);
                base.export_attribute (obj, "UserAttribute", "Transaction", "Transaction", fields);
                base.export_attribute (obj, "UserAttribute", "RatingSpecification", "RatingSpecification", fields);
                base.export_attributes (obj, "UserAttribute", "ProcedureDataSets", "ProcedureDataSets", fields);
                base.export_attributes (obj, "UserAttribute", "ErpLedgerEntries", "ErpLedgerEntries", fields);
                base.export_attribute (obj, "UserAttribute", "PropertySpecification", "PropertySpecification", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#UserAttribute_collapse" aria-expanded="true" aria-controls="UserAttribute_collapse" style="margin-left: 10px;">UserAttribute</a></legend>
                    <div id="UserAttribute_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#ErpInvoiceLineItems}}<div><b>ErpInvoiceLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpInvoiceLineItems}}
                    {{#Transaction}}<div><b>Transaction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Transaction}}&quot;);}); return false;'>{{Transaction}}</a></div>{{/Transaction}}
                    {{#RatingSpecification}}<div><b>RatingSpecification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RatingSpecification}}&quot;);}); return false;'>{{RatingSpecification}}</a></div>{{/RatingSpecification}}
                    {{#ProcedureDataSets}}<div><b>ProcedureDataSets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ProcedureDataSets}}
                    {{#ErpLedgerEntries}}<div><b>ErpLedgerEntries</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpLedgerEntries}}
                    {{#PropertySpecification}}<div><b>PropertySpecification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PropertySpecification}}&quot;);}); return false;'>{{PropertySpecification}}</a></div>{{/PropertySpecification}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.StringQuantity = []; if (!obj.value) obj.StringQuantity.push ({ id: '', selected: true}); for (var property in StringQuantity) obj.StringQuantity.push ({ id: property, selected: obj.value && obj.value.endsWith ('.' + property)});
                if (obj.ErpInvoiceLineItems) obj.ErpInvoiceLineItems_string = obj.ErpInvoiceLineItems.join ();
                if (obj.ProcedureDataSets) obj.ProcedureDataSets_string = obj.ProcedureDataSets.join ();
                if (obj.ErpLedgerEntries) obj.ErpLedgerEntries_string = obj.ErpLedgerEntries.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.StringQuantity;
                delete obj.ErpInvoiceLineItems_string;
                delete obj.ProcedureDataSets_string;
                delete obj.ErpLedgerEntries_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_UserAttribute_collapse" aria-expanded="true" aria-controls="{{id}}_UserAttribute_collapse" style="margin-left: 10px;">UserAttribute</a></legend>
                    <div id="{{id}}_UserAttribute_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><select id='{{id}}_value' class='form-control custom-select'>{{#StringQuantity}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StringQuantity}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpInvoiceLineItems'>ErpInvoiceLineItems: </label><div class='col-sm-8'><input id='{{id}}_ErpInvoiceLineItems' class='form-control' type='text'{{#ErpInvoiceLineItems}} value='{{ErpInvoiceLineItems_string}}'{{/ErpInvoiceLineItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Transaction'>Transaction: </label><div class='col-sm-8'><input id='{{id}}_Transaction' class='form-control' type='text'{{#Transaction}} value='{{Transaction}}'{{/Transaction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RatingSpecification'>RatingSpecification: </label><div class='col-sm-8'><input id='{{id}}_RatingSpecification' class='form-control' type='text'{{#RatingSpecification}} value='{{RatingSpecification}}'{{/RatingSpecification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProcedureDataSets'>ProcedureDataSets: </label><div class='col-sm-8'><input id='{{id}}_ProcedureDataSets' class='form-control' type='text'{{#ProcedureDataSets}} value='{{ProcedureDataSets_string}}'{{/ProcedureDataSets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpLedgerEntries'>ErpLedgerEntries: </label><div class='col-sm-8'><input id='{{id}}_ErpLedgerEntries' class='form-control' type='text'{{#ErpLedgerEntries}} value='{{ErpLedgerEntries_string}}'{{/ErpLedgerEntries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PropertySpecification'>PropertySpecification: </label><div class='col-sm-8'><input id='{{id}}_PropertySpecification' class='form-control' type='text'{{#PropertySpecification}} value='{{PropertySpecification}}'{{/PropertySpecification}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "UserAttribute" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_name").value; if ("" != temp) obj.name = temp;
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById (id + "_value").value; if ("" != temp) { temp = StringQuantity[temp]; if ("undefined" != typeof (temp)) obj.value = "http://iec.ch/TC57/2013/CIM-schema-cim16#StringQuantity." + temp; }
                temp = document.getElementById (id + "_ErpInvoiceLineItems").value; if ("" != temp) obj.ErpInvoiceLineItems = temp.split (",");
                temp = document.getElementById (id + "_Transaction").value; if ("" != temp) obj.Transaction = temp;
                temp = document.getElementById (id + "_RatingSpecification").value; if ("" != temp) obj.RatingSpecification = temp;
                temp = document.getElementById (id + "_ProcedureDataSets").value; if ("" != temp) obj.ProcedureDataSets = temp.split (",");
                temp = document.getElementById (id + "_ErpLedgerEntries").value; if ("" != temp) obj.ErpLedgerEntries = temp.split (",");
                temp = document.getElementById (id + "_PropertySpecification").value; if ("" != temp) obj.PropertySpecification = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpInvoiceLineItems", "0..*", "0..*", "ErpInvoiceLineItem", "UserAttributes"],
                            ["Transaction", "0..1", "0..*", "Transaction", "UserAttributes"],
                            ["RatingSpecification", "0..1", "0..*", "Specification", "Ratings"],
                            ["ProcedureDataSets", "0..*", "0..*", "ProcedureDataSet", "Properties"],
                            ["ErpLedgerEntries", "0..*", "0..*", "ErpLedgerEntry", "UserAttributes"],
                            ["PropertySpecification", "0..1", "0..*", "Specification", "AssetProperites"]
                        ]
                    )
                );
            }
        }

        /**
         * Schedule parameters for an activity that is to occur, is occurring, or has completed.
         *
         */
        class ScheduledEventData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ScheduledEventData;
                if (null == bucket)
                   cim_data.ScheduledEventData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ScheduledEventData[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledEventData";
                base.parse_attribute (/<cim:ScheduledEventData.estimatedWindow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "estimatedWindow", sub, context);
                base.parse_attribute (/<cim:ScheduledEventData.requestedWindow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "requestedWindow", sub, context);
                base.parse_attribute (/<cim:ScheduledEventData.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attribute (/<cim:ScheduledEventData.InspectionDataSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InspectionDataSet", sub, context);
                base.parse_attributes (/<cim:ScheduledEventData.ScheduledEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ScheduledEvents", sub, context);
                var bucket = context.parsed.ScheduledEventData;
                if (null == bucket)
                   context.parsed.ScheduledEventData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "ScheduledEventData", "estimatedWindow", "estimatedWindow", fields);
                base.export_attribute (obj, "ScheduledEventData", "requestedWindow", "requestedWindow", fields);
                base.export_attribute (obj, "ScheduledEventData", "status", "status", fields);
                base.export_attribute (obj, "ScheduledEventData", "InspectionDataSet", "InspectionDataSet", fields);
                base.export_attributes (obj, "ScheduledEventData", "ScheduledEvents", "ScheduledEvents", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ScheduledEventData_collapse" aria-expanded="true" aria-controls="ScheduledEventData_collapse" style="margin-left: 10px;">ScheduledEventData</a></legend>
                    <div id="ScheduledEventData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#estimatedWindow}}<div><b>estimatedWindow</b>: {{estimatedWindow}}</div>{{/estimatedWindow}}
                    {{#requestedWindow}}<div><b>requestedWindow</b>: {{requestedWindow}}</div>{{/requestedWindow}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#InspectionDataSet}}<div><b>InspectionDataSet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InspectionDataSet}}&quot;);}); return false;'>{{InspectionDataSet}}</a></div>{{/InspectionDataSet}}
                    {{#ScheduledEvents}}<div><b>ScheduledEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ScheduledEvents}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.DateTimeInterval = []; if (!obj.estimatedWindow) obj.DateTimeInterval.push ({ id: '', selected: true}); for (var property in DateTimeInterval) obj.DateTimeInterval.push ({ id: property, selected: obj.estimatedWindow && obj.estimatedWindow.endsWith ('.' + property)});
                obj.DateTimeInterval = []; if (!obj.requestedWindow) obj.DateTimeInterval.push ({ id: '', selected: true}); for (var property in DateTimeInterval) obj.DateTimeInterval.push ({ id: property, selected: obj.requestedWindow && obj.requestedWindow.endsWith ('.' + property)});
                obj.Status = []; if (!obj.status) obj.Status.push ({ id: '', selected: true}); for (var property in Status) obj.Status.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
                if (obj.ScheduledEvents) obj.ScheduledEvents_string = obj.ScheduledEvents.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DateTimeInterval;
                delete obj.DateTimeInterval;
                delete obj.Status;
                delete obj.ScheduledEvents_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ScheduledEventData_collapse" aria-expanded="true" aria-controls="{{id}}_ScheduledEventData_collapse" style="margin-left: 10px;">ScheduledEventData</a></legend>
                    <div id="{{id}}_ScheduledEventData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_estimatedWindow'>estimatedWindow: </label><div class='col-sm-8'><select id='{{id}}_estimatedWindow' class='form-control custom-select'>{{#DateTimeInterval}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/DateTimeInterval}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_requestedWindow'>requestedWindow: </label><div class='col-sm-8'><select id='{{id}}_requestedWindow' class='form-control custom-select'>{{#DateTimeInterval}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/DateTimeInterval}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control custom-select'>{{#Status}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Status}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_InspectionDataSet'>InspectionDataSet: </label><div class='col-sm-8'><input id='{{id}}_InspectionDataSet' class='form-control' type='text'{{#InspectionDataSet}} value='{{InspectionDataSet}}'{{/InspectionDataSet}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ScheduledEventData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_estimatedWindow").value; if ("" != temp) { temp = DateTimeInterval[temp]; if ("undefined" != typeof (temp)) obj.estimatedWindow = "http://iec.ch/TC57/2013/CIM-schema-cim16#DateTimeInterval." + temp; }
                temp = document.getElementById (id + "_requestedWindow").value; if ("" != temp) { temp = DateTimeInterval[temp]; if ("undefined" != typeof (temp)) obj.requestedWindow = "http://iec.ch/TC57/2013/CIM-schema-cim16#DateTimeInterval." + temp; }
                temp = document.getElementById (id + "_status").value; if ("" != temp) { temp = Status[temp]; if ("undefined" != typeof (temp)) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#Status." + temp; }
                temp = document.getElementById (id + "_InspectionDataSet").value; if ("" != temp) obj.InspectionDataSet = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["InspectionDataSet", "1", "0..*", "InspectionDataSet", "AccordingToSchedules"],
                            ["ScheduledEvents", "0..*", "0..1", "ScheduledEvent", "ScheduledEventData"]
                        ]
                    )
                );
            }
        }

        /**
         * Current status information relevant to an entity.
         *
         */
        class Status extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Status;
                if (null == bucket)
                   cim_data.Status = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Status[obj.id];
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

                base.export_element (obj, "Status", "dateTime", "dateTime",  base.from_datetime, fields);
                base.export_element (obj, "Status", "reason", "reason",  base.from_string, fields);
                base.export_element (obj, "Status", "remark", "remark",  base.from_string, fields);
                base.export_element (obj, "Status", "value", "value",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Status_collapse" aria-expanded="true" aria-controls="Status_collapse" style="margin-left: 10px;">Status</a></legend>
                    <div id="Status_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
                    {{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
                    {{#remark}}<div><b>remark</b>: {{remark}}</div>{{/remark}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Status_collapse" aria-expanded="true" aria-controls="{{id}}_Status_collapse" style="margin-left: 10px;">Status</a></legend>
                    <div id="{{id}}_Status_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dateTime'>dateTime: </label><div class='col-sm-8'><input id='{{id}}_dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reason'>reason: </label><div class='col-sm-8'><input id='{{id}}_reason' class='form-control' type='text'{{#reason}} value='{{reason}}'{{/reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_remark'>remark: </label><div class='col-sm-8'><input id='{{id}}_remark' class='form-control' type='text'{{#remark}} value='{{remark}}'{{/remark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Status" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dateTime").value; if ("" != temp) obj.dateTime = temp;
                temp = document.getElementById (id + "_reason").value; if ("" != temp) obj.reason = temp;
                temp = document.getElementById (id + "_remark").value; if ("" != temp) obj.remark = temp;
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
            }
        }

        /**
         * General purpose information for name and other information to contact people.
         *
         */
        class Person extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Person;
                if (null == bucket)
                   cim_data.Person = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Person[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Person";
                base.parse_attribute (/<cim:Person.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "electronicAddress", sub, context);
                base.parse_element (/<cim:Person.firstName>([\s\S]*?)<\/cim:Person.firstName>/g, obj, "firstName", base.to_string, sub, context);
                base.parse_attribute (/<cim:Person.landlinePhone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "landlinePhone", sub, context);
                base.parse_element (/<cim:Person.lastName>([\s\S]*?)<\/cim:Person.lastName>/g, obj, "lastName", base.to_string, sub, context);
                base.parse_element (/<cim:Person.mName>([\s\S]*?)<\/cim:Person.mName>/g, obj, "mName", base.to_string, sub, context);
                base.parse_attribute (/<cim:Person.mobilePhone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "mobilePhone", sub, context);
                base.parse_element (/<cim:Person.prefix>([\s\S]*?)<\/cim:Person.prefix>/g, obj, "prefix", base.to_string, sub, context);
                base.parse_element (/<cim:Person.specialNeed>([\s\S]*?)<\/cim:Person.specialNeed>/g, obj, "specialNeed", base.to_string, sub, context);
                base.parse_element (/<cim:Person.suffix>([\s\S]*?)<\/cim:Person.suffix>/g, obj, "suffix", base.to_string, sub, context);
                base.parse_attributes (/<cim:Person.Roles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Roles", sub, context);
                var bucket = context.parsed.Person;
                if (null == bucket)
                   context.parsed.Person = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Person", "electronicAddress", "electronicAddress", fields);
                base.export_element (obj, "Person", "firstName", "firstName",  base.from_string, fields);
                base.export_attribute (obj, "Person", "landlinePhone", "landlinePhone", fields);
                base.export_element (obj, "Person", "lastName", "lastName",  base.from_string, fields);
                base.export_element (obj, "Person", "mName", "mName",  base.from_string, fields);
                base.export_attribute (obj, "Person", "mobilePhone", "mobilePhone", fields);
                base.export_element (obj, "Person", "prefix", "prefix",  base.from_string, fields);
                base.export_element (obj, "Person", "specialNeed", "specialNeed",  base.from_string, fields);
                base.export_element (obj, "Person", "suffix", "suffix",  base.from_string, fields);
                base.export_attributes (obj, "Person", "Roles", "Roles", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Person_collapse" aria-expanded="true" aria-controls="Person_collapse" style="margin-left: 10px;">Person</a></legend>
                    <div id="Person_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#electronicAddress}}<div><b>electronicAddress</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{electronicAddress}}&quot;);}); return false;'>{{electronicAddress}}</a></div>{{/electronicAddress}}\n                    {{#firstName}}<div><b>firstName</b>: {{firstName}}</div>{{/firstName}}
                    {{#landlinePhone}}<div><b>landlinePhone</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{landlinePhone}}&quot;);}); return false;'>{{landlinePhone}}</a></div>{{/landlinePhone}}\n                    {{#lastName}}<div><b>lastName</b>: {{lastName}}</div>{{/lastName}}
                    {{#mName}}<div><b>mName</b>: {{mName}}</div>{{/mName}}
                    {{#mobilePhone}}<div><b>mobilePhone</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{mobilePhone}}&quot;);}); return false;'>{{mobilePhone}}</a></div>{{/mobilePhone}}\n                    {{#prefix}}<div><b>prefix</b>: {{prefix}}</div>{{/prefix}}
                    {{#specialNeed}}<div><b>specialNeed</b>: {{specialNeed}}</div>{{/specialNeed}}
                    {{#suffix}}<div><b>suffix</b>: {{suffix}}</div>{{/suffix}}
                    {{#Roles}}<div><b>Roles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Roles}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ElectronicAddress = []; if (!obj.electronicAddress) obj.ElectronicAddress.push ({ id: '', selected: true}); for (var property in ElectronicAddress) obj.ElectronicAddress.push ({ id: property, selected: obj.electronicAddress && obj.electronicAddress.endsWith ('.' + property)});
                obj.TelephoneNumber = []; if (!obj.landlinePhone) obj.TelephoneNumber.push ({ id: '', selected: true}); for (var property in TelephoneNumber) obj.TelephoneNumber.push ({ id: property, selected: obj.landlinePhone && obj.landlinePhone.endsWith ('.' + property)});
                obj.TelephoneNumber = []; if (!obj.mobilePhone) obj.TelephoneNumber.push ({ id: '', selected: true}); for (var property in TelephoneNumber) obj.TelephoneNumber.push ({ id: property, selected: obj.mobilePhone && obj.mobilePhone.endsWith ('.' + property)});
                if (obj.Roles) obj.Roles_string = obj.Roles.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ElectronicAddress;
                delete obj.TelephoneNumber;
                delete obj.TelephoneNumber;
                delete obj.Roles_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Person_collapse" aria-expanded="true" aria-controls="{{id}}_Person_collapse" style="margin-left: 10px;">Person</a></legend>
                    <div id="{{id}}_Person_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_electronicAddress'>electronicAddress: </label><div class='col-sm-8'><select id='{{id}}_electronicAddress' class='form-control custom-select'>{{#ElectronicAddress}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ElectronicAddress}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_firstName'>firstName: </label><div class='col-sm-8'><input id='{{id}}_firstName' class='form-control' type='text'{{#firstName}} value='{{firstName}}'{{/firstName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_landlinePhone'>landlinePhone: </label><div class='col-sm-8'><select id='{{id}}_landlinePhone' class='form-control custom-select'>{{#TelephoneNumber}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TelephoneNumber}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastName'>lastName: </label><div class='col-sm-8'><input id='{{id}}_lastName' class='form-control' type='text'{{#lastName}} value='{{lastName}}'{{/lastName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mName'>mName: </label><div class='col-sm-8'><input id='{{id}}_mName' class='form-control' type='text'{{#mName}} value='{{mName}}'{{/mName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mobilePhone'>mobilePhone: </label><div class='col-sm-8'><select id='{{id}}_mobilePhone' class='form-control custom-select'>{{#TelephoneNumber}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TelephoneNumber}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_prefix'>prefix: </label><div class='col-sm-8'><input id='{{id}}_prefix' class='form-control' type='text'{{#prefix}} value='{{prefix}}'{{/prefix}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_specialNeed'>specialNeed: </label><div class='col-sm-8'><input id='{{id}}_specialNeed' class='form-control' type='text'{{#specialNeed}} value='{{specialNeed}}'{{/specialNeed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_suffix'>suffix: </label><div class='col-sm-8'><input id='{{id}}_suffix' class='form-control' type='text'{{#suffix}} value='{{suffix}}'{{/suffix}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Person" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_electronicAddress").value; if ("" != temp) { temp = ElectronicAddress[temp]; if ("undefined" != typeof (temp)) obj.electronicAddress = "http://iec.ch/TC57/2013/CIM-schema-cim16#ElectronicAddress." + temp; }
                temp = document.getElementById (id + "_firstName").value; if ("" != temp) obj.firstName = temp;
                temp = document.getElementById (id + "_landlinePhone").value; if ("" != temp) { temp = TelephoneNumber[temp]; if ("undefined" != typeof (temp)) obj.landlinePhone = "http://iec.ch/TC57/2013/CIM-schema-cim16#TelephoneNumber." + temp; }
                temp = document.getElementById (id + "_lastName").value; if ("" != temp) obj.lastName = temp;
                temp = document.getElementById (id + "_mName").value; if ("" != temp) obj.mName = temp;
                temp = document.getElementById (id + "_mobilePhone").value; if ("" != temp) { temp = TelephoneNumber[temp]; if ("undefined" != typeof (temp)) obj.mobilePhone = "http://iec.ch/TC57/2013/CIM-schema-cim16#TelephoneNumber." + temp; }
                temp = document.getElementById (id + "_prefix").value; if ("" != temp) obj.prefix = temp;
                temp = document.getElementById (id + "_specialNeed").value; if ("" != temp) obj.specialNeed = temp;
                temp = document.getElementById (id + "_suffix").value; if ("" != temp) obj.suffix = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Roles", "0..*", "0..1", "PersonRole", "Person"]
                        ]
                    )
                );
            }
        }

        /**
         * Meeting time and location.
         *
         */
        class Appointment extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Appointment;
                if (null == bucket)
                   cim_data.Appointment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Appointment[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Appointment";
                base.parse_element (/<cim:Appointment.callAhead>([\s\S]*?)<\/cim:Appointment.callAhead>/g, obj, "callAhead", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:Appointment.meetingInterval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "meetingInterval", sub, context);
                base.parse_attributes (/<cim:Appointment.Works\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                base.parse_attributes (/<cim:Appointment.Persons\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Persons", sub, context);
                var bucket = context.parsed.Appointment;
                if (null == bucket)
                   context.parsed.Appointment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Appointment", "callAhead", "callAhead",  base.from_boolean, fields);
                base.export_attribute (obj, "Appointment", "meetingInterval", "meetingInterval", fields);
                base.export_attributes (obj, "Appointment", "Works", "Works", fields);
                base.export_attributes (obj, "Appointment", "Persons", "Persons", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Appointment_collapse" aria-expanded="true" aria-controls="Appointment_collapse" style="margin-left: 10px;">Appointment</a></legend>
                    <div id="Appointment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#callAhead}}<div><b>callAhead</b>: {{callAhead}}</div>{{/callAhead}}
                    {{#meetingInterval}}<div><b>meetingInterval</b>: {{meetingInterval}}</div>{{/meetingInterval}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Works}}
                    {{#Persons}}<div><b>Persons</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Persons}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.DateTimeInterval = []; if (!obj.meetingInterval) obj.DateTimeInterval.push ({ id: '', selected: true}); for (var property in DateTimeInterval) obj.DateTimeInterval.push ({ id: property, selected: obj.meetingInterval && obj.meetingInterval.endsWith ('.' + property)});
                if (obj.Works) obj.Works_string = obj.Works.join ();
                if (obj.Persons) obj.Persons_string = obj.Persons.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DateTimeInterval;
                delete obj.Works_string;
                delete obj.Persons_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Appointment_collapse" aria-expanded="true" aria-controls="{{id}}_Appointment_collapse" style="margin-left: 10px;">Appointment</a></legend>
                    <div id="{{id}}_Appointment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_callAhead'>callAhead: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_callAhead' class='form-check-input' type='checkbox'{{#callAhead}} checked{{/callAhead}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_meetingInterval'>meetingInterval: </label><div class='col-sm-8'><select id='{{id}}_meetingInterval' class='form-control custom-select'>{{#DateTimeInterval}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/DateTimeInterval}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Works'>Works: </label><div class='col-sm-8'><input id='{{id}}_Works' class='form-control' type='text'{{#Works}} value='{{Works_string}}'{{/Works}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Persons'>Persons: </label><div class='col-sm-8'><input id='{{id}}_Persons' class='form-control' type='text'{{#Persons}} value='{{Persons_string}}'{{/Persons}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Appointment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_callAhead").checked; if (temp) obj.callAhead = true;
                temp = document.getElementById (id + "_meetingInterval").value; if ("" != temp) { temp = DateTimeInterval[temp]; if ("undefined" != typeof (temp)) obj.meetingInterval = "http://iec.ch/TC57/2013/CIM-schema-cim16#DateTimeInterval." + temp; }
                temp = document.getElementById (id + "_Works").value; if ("" != temp) obj.Works = temp.split (",");
                temp = document.getElementById (id + "_Persons").value; if ("" != temp) obj.Persons = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Works", "0..*", "0..*", "Work", "Appointments"],
                            ["Persons", "0..*", "0..*", "PersonRole", "Appointments"]
                        ]
                    )
                );
            }
        }

        /**
         * Street details, in the context of address.
         *
         */
        class StreetDetail extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.StreetDetail;
                if (null == bucket)
                   cim_data.StreetDetail = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StreetDetail[obj.id];
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

                base.export_element (obj, "StreetDetail", "addressGeneral", "addressGeneral",  base.from_string, fields);
                base.export_element (obj, "StreetDetail", "buildingName", "buildingName",  base.from_string, fields);
                base.export_element (obj, "StreetDetail", "code", "code",  base.from_string, fields);
                base.export_element (obj, "StreetDetail", "name", "name",  base.from_string, fields);
                base.export_element (obj, "StreetDetail", "number", "number",  base.from_string, fields);
                base.export_element (obj, "StreetDetail", "prefix", "prefix",  base.from_string, fields);
                base.export_element (obj, "StreetDetail", "suffix", "suffix",  base.from_string, fields);
                base.export_element (obj, "StreetDetail", "suiteNumber", "suiteNumber",  base.from_string, fields);
                base.export_element (obj, "StreetDetail", "type", "type",  base.from_string, fields);
                base.export_element (obj, "StreetDetail", "withinTownLimits", "withinTownLimits",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StreetDetail_collapse" aria-expanded="true" aria-controls="StreetDetail_collapse" style="margin-left: 10px;">StreetDetail</a></legend>
                    <div id="StreetDetail_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StreetDetail_collapse" aria-expanded="true" aria-controls="{{id}}_StreetDetail_collapse" style="margin-left: 10px;">StreetDetail</a></legend>
                    <div id="{{id}}_StreetDetail_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_addressGeneral'>addressGeneral: </label><div class='col-sm-8'><input id='{{id}}_addressGeneral' class='form-control' type='text'{{#addressGeneral}} value='{{addressGeneral}}'{{/addressGeneral}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_buildingName'>buildingName: </label><div class='col-sm-8'><input id='{{id}}_buildingName' class='form-control' type='text'{{#buildingName}} value='{{buildingName}}'{{/buildingName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_code'>code: </label><div class='col-sm-8'><input id='{{id}}_code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_name'>name: </label><div class='col-sm-8'><input id='{{id}}_name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_number'>number: </label><div class='col-sm-8'><input id='{{id}}_number' class='form-control' type='text'{{#number}} value='{{number}}'{{/number}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_prefix'>prefix: </label><div class='col-sm-8'><input id='{{id}}_prefix' class='form-control' type='text'{{#prefix}} value='{{prefix}}'{{/prefix}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_suffix'>suffix: </label><div class='col-sm-8'><input id='{{id}}_suffix' class='form-control' type='text'{{#suffix}} value='{{suffix}}'{{/suffix}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_suiteNumber'>suiteNumber: </label><div class='col-sm-8'><input id='{{id}}_suiteNumber' class='form-control' type='text'{{#suiteNumber}} value='{{suiteNumber}}'{{/suiteNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_withinTownLimits'>withinTownLimits: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_withinTownLimits' class='form-check-input' type='checkbox'{{#withinTownLimits}} checked{{/withinTownLimits}}></div></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "StreetDetail" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_addressGeneral").value; if ("" != temp) obj.addressGeneral = temp;
                temp = document.getElementById (id + "_buildingName").value; if ("" != temp) obj.buildingName = temp;
                temp = document.getElementById (id + "_code").value; if ("" != temp) obj.code = temp;
                temp = document.getElementById (id + "_name").value; if ("" != temp) obj.name = temp;
                temp = document.getElementById (id + "_number").value; if ("" != temp) obj.number = temp;
                temp = document.getElementById (id + "_prefix").value; if ("" != temp) obj.prefix = temp;
                temp = document.getElementById (id + "_suffix").value; if ("" != temp) obj.suffix = temp;
                temp = document.getElementById (id + "_suiteNumber").value; if ("" != temp) obj.suiteNumber = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_withinTownLimits").checked; if (temp) obj.withinTownLimits = true;

                return (obj);
            }
        }

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
                var bucket = cim_data.TimeSchedule;
                if (null == bucket)
                   cim_data.TimeSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TimeSchedule[obj.id];
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
                base.parse_attribute (/<cim:TimeSchedule.scheduleInterval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "scheduleInterval", sub, context);
                base.parse_attributes (/<cim:TimeSchedule.TimePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TimePoints", sub, context);
                var bucket = context.parsed.TimeSchedule;
                if (null == bucket)
                   context.parsed.TimeSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "TimeSchedule", "disabled", "disabled",  base.from_boolean, fields);
                base.export_element (obj, "TimeSchedule", "offset", "offset",  base.from_string, fields);
                base.export_element (obj, "TimeSchedule", "recurrencePattern", "recurrencePattern",  base.from_string, fields);
                base.export_element (obj, "TimeSchedule", "recurrencePeriod", "recurrencePeriod",  base.from_string, fields);
                base.export_attribute (obj, "TimeSchedule", "scheduleInterval", "scheduleInterval", fields);
                base.export_attributes (obj, "TimeSchedule", "TimePoints", "TimePoints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TimeSchedule_collapse" aria-expanded="true" aria-controls="TimeSchedule_collapse" style="margin-left: 10px;">TimeSchedule</a></legend>
                    <div id="TimeSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Document.prototype.template.call (this) +
                    `
                    {{#disabled}}<div><b>disabled</b>: {{disabled}}</div>{{/disabled}}
                    {{#offset}}<div><b>offset</b>: {{offset}}</div>{{/offset}}
                    {{#recurrencePattern}}<div><b>recurrencePattern</b>: {{recurrencePattern}}</div>{{/recurrencePattern}}
                    {{#recurrencePeriod}}<div><b>recurrencePeriod</b>: {{recurrencePeriod}}</div>{{/recurrencePeriod}}
                    {{#scheduleInterval}}<div><b>scheduleInterval</b>: {{scheduleInterval}}</div>{{/scheduleInterval}}
                    {{#TimePoints}}<div><b>TimePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TimePoints}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.DateTimeInterval = []; if (!obj.scheduleInterval) obj.DateTimeInterval.push ({ id: '', selected: true}); for (var property in DateTimeInterval) obj.DateTimeInterval.push ({ id: property, selected: obj.scheduleInterval && obj.scheduleInterval.endsWith ('.' + property)});
                if (obj.TimePoints) obj.TimePoints_string = obj.TimePoints.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DateTimeInterval;
                delete obj.TimePoints_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TimeSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_TimeSchedule_collapse" style="margin-left: 10px;">TimeSchedule</a></legend>
                    <div id="{{id}}_TimeSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_disabled'>disabled: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_disabled' class='form-check-input' type='checkbox'{{#disabled}} checked{{/disabled}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_offset'>offset: </label><div class='col-sm-8'><input id='{{id}}_offset' class='form-control' type='text'{{#offset}} value='{{offset}}'{{/offset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_recurrencePattern'>recurrencePattern: </label><div class='col-sm-8'><input id='{{id}}_recurrencePattern' class='form-control' type='text'{{#recurrencePattern}} value='{{recurrencePattern}}'{{/recurrencePattern}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_recurrencePeriod'>recurrencePeriod: </label><div class='col-sm-8'><input id='{{id}}_recurrencePeriod' class='form-control' type='text'{{#recurrencePeriod}} value='{{recurrencePeriod}}'{{/recurrencePeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scheduleInterval'>scheduleInterval: </label><div class='col-sm-8'><select id='{{id}}_scheduleInterval' class='form-control custom-select'>{{#DateTimeInterval}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/DateTimeInterval}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TimeSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_disabled").checked; if (temp) obj.disabled = true;
                temp = document.getElementById (id + "_offset").value; if ("" != temp) obj.offset = temp;
                temp = document.getElementById (id + "_recurrencePattern").value; if ("" != temp) obj.recurrencePattern = temp;
                temp = document.getElementById (id + "_recurrencePeriod").value; if ("" != temp) obj.recurrencePeriod = temp;
                temp = document.getElementById (id + "_scheduleInterval").value; if ("" != temp) { temp = DateTimeInterval[temp]; if ("undefined" != typeof (temp)) obj.scheduleInterval = "http://iec.ch/TC57/2013/CIM-schema-cim16#DateTimeInterval." + temp; }

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TimePoints", "0..*", "1", "TimePoint", "TimeSchedule"]
                        ]
                    )
                );
            }
        }

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
                var bucket = cim_data.Agreement;
                if (null == bucket)
                   cim_data.Agreement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Agreement[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Document.prototype.parse.call (this, context, sub);
                obj.cls = "Agreement";
                base.parse_element (/<cim:Agreement.signDate>([\s\S]*?)<\/cim:Agreement.signDate>/g, obj, "signDate", base.to_string, sub, context);
                base.parse_attribute (/<cim:Agreement.validityInterval\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "validityInterval", sub, context);
                var bucket = context.parsed.Agreement;
                if (null == bucket)
                   context.parsed.Agreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Agreement", "signDate", "signDate",  base.from_string, fields);
                base.export_attribute (obj, "Agreement", "validityInterval", "validityInterval", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Agreement_collapse" aria-expanded="true" aria-controls="Agreement_collapse" style="margin-left: 10px;">Agreement</a></legend>
                    <div id="Agreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Document.prototype.template.call (this) +
                    `
                    {{#signDate}}<div><b>signDate</b>: {{signDate}}</div>{{/signDate}}
                    {{#validityInterval}}<div><b>validityInterval</b>: {{validityInterval}}</div>{{/validityInterval}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.DateTimeInterval = []; if (!obj.validityInterval) obj.DateTimeInterval.push ({ id: '', selected: true}); for (var property in DateTimeInterval) obj.DateTimeInterval.push ({ id: property, selected: obj.validityInterval && obj.validityInterval.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DateTimeInterval;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Agreement_collapse" aria-expanded="true" aria-controls="{{id}}_Agreement_collapse" style="margin-left: 10px;">Agreement</a></legend>
                    <div id="{{id}}_Agreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_signDate'>signDate: </label><div class='col-sm-8'><input id='{{id}}_signDate' class='form-control' type='text'{{#signDate}} value='{{signDate}}'{{/signDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_validityInterval'>validityInterval: </label><div class='col-sm-8'><select id='{{id}}_validityInterval' class='form-control custom-select'>{{#DateTimeInterval}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/DateTimeInterval}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Agreement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_signDate").value; if ("" != temp) obj.signDate = temp;
                temp = document.getElementById (id + "_validityInterval").value; if ("" != temp) { temp = DateTimeInterval[temp]; if ("undefined" != typeof (temp)) obj.validityInterval = "http://iec.ch/TC57/2013/CIM-schema-cim16#DateTimeInterval." + temp; }

                return (obj);
            }
        }

        /**
         * Used to report details on creation, change or deletion of an entity or its configuration.
         *
         */
        class ConfigurationEvent extends ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ConfigurationEvent;
                if (null == bucket)
                   cim_data.ConfigurationEvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConfigurationEvent[obj.id];
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

                base.export_element (obj, "ConfigurationEvent", "effectiveDateTime", "effectiveDateTime",  base.from_datetime, fields);
                base.export_element (obj, "ConfigurationEvent", "modifiedBy", "modifiedBy",  base.from_string, fields);
                base.export_element (obj, "ConfigurationEvent", "remark", "remark",  base.from_string, fields);
                base.export_attribute (obj, "ConfigurationEvent", "ChangedPersonRole", "ChangedPersonRole", fields);
                base.export_attribute (obj, "ConfigurationEvent", "ChangedOrganisationRole", "ChangedOrganisationRole", fields);
                base.export_attribute (obj, "ConfigurationEvent", "ChangedAsset", "ChangedAsset", fields);
                base.export_attribute (obj, "ConfigurationEvent", "ChangedLocation", "ChangedLocation", fields);
                base.export_attribute (obj, "ConfigurationEvent", "ChangedServiceCategory", "ChangedServiceCategory", fields);
                base.export_attribute (obj, "ConfigurationEvent", "ChangedUsagePoint", "ChangedUsagePoint", fields);
                base.export_attribute (obj, "ConfigurationEvent", "ChangedDocument", "ChangedDocument", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ConfigurationEvent_collapse" aria-expanded="true" aria-controls="ConfigurationEvent_collapse" style="margin-left: 10px;">ConfigurationEvent</a></legend>
                    <div id="ConfigurationEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ActivityRecord.prototype.template.call (this) +
                    `
                    {{#effectiveDateTime}}<div><b>effectiveDateTime</b>: {{effectiveDateTime}}</div>{{/effectiveDateTime}}
                    {{#modifiedBy}}<div><b>modifiedBy</b>: {{modifiedBy}}</div>{{/modifiedBy}}
                    {{#remark}}<div><b>remark</b>: {{remark}}</div>{{/remark}}
                    {{#ChangedPersonRole}}<div><b>ChangedPersonRole</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedPersonRole}}&quot;);}); return false;'>{{ChangedPersonRole}}</a></div>{{/ChangedPersonRole}}
                    {{#ChangedOrganisationRole}}<div><b>ChangedOrganisationRole</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedOrganisationRole}}&quot;);}); return false;'>{{ChangedOrganisationRole}}</a></div>{{/ChangedOrganisationRole}}
                    {{#ChangedAsset}}<div><b>ChangedAsset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedAsset}}&quot;);}); return false;'>{{ChangedAsset}}</a></div>{{/ChangedAsset}}
                    {{#ChangedLocation}}<div><b>ChangedLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedLocation}}&quot;);}); return false;'>{{ChangedLocation}}</a></div>{{/ChangedLocation}}
                    {{#ChangedServiceCategory}}<div><b>ChangedServiceCategory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedServiceCategory}}&quot;);}); return false;'>{{ChangedServiceCategory}}</a></div>{{/ChangedServiceCategory}}
                    {{#ChangedUsagePoint}}<div><b>ChangedUsagePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedUsagePoint}}&quot;);}); return false;'>{{ChangedUsagePoint}}</a></div>{{/ChangedUsagePoint}}
                    {{#ChangedDocument}}<div><b>ChangedDocument</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChangedDocument}}&quot;);}); return false;'>{{ChangedDocument}}</a></div>{{/ChangedDocument}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ConfigurationEvent_collapse" aria-expanded="true" aria-controls="{{id}}_ConfigurationEvent_collapse" style="margin-left: 10px;">ConfigurationEvent</a></legend>
                    <div id="{{id}}_ConfigurationEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effectiveDateTime'>effectiveDateTime: </label><div class='col-sm-8'><input id='{{id}}_effectiveDateTime' class='form-control' type='text'{{#effectiveDateTime}} value='{{effectiveDateTime}}'{{/effectiveDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_modifiedBy'>modifiedBy: </label><div class='col-sm-8'><input id='{{id}}_modifiedBy' class='form-control' type='text'{{#modifiedBy}} value='{{modifiedBy}}'{{/modifiedBy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_remark'>remark: </label><div class='col-sm-8'><input id='{{id}}_remark' class='form-control' type='text'{{#remark}} value='{{remark}}'{{/remark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ChangedPersonRole'>ChangedPersonRole: </label><div class='col-sm-8'><input id='{{id}}_ChangedPersonRole' class='form-control' type='text'{{#ChangedPersonRole}} value='{{ChangedPersonRole}}'{{/ChangedPersonRole}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ChangedOrganisationRole'>ChangedOrganisationRole: </label><div class='col-sm-8'><input id='{{id}}_ChangedOrganisationRole' class='form-control' type='text'{{#ChangedOrganisationRole}} value='{{ChangedOrganisationRole}}'{{/ChangedOrganisationRole}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ChangedAsset'>ChangedAsset: </label><div class='col-sm-8'><input id='{{id}}_ChangedAsset' class='form-control' type='text'{{#ChangedAsset}} value='{{ChangedAsset}}'{{/ChangedAsset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ChangedLocation'>ChangedLocation: </label><div class='col-sm-8'><input id='{{id}}_ChangedLocation' class='form-control' type='text'{{#ChangedLocation}} value='{{ChangedLocation}}'{{/ChangedLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ChangedServiceCategory'>ChangedServiceCategory: </label><div class='col-sm-8'><input id='{{id}}_ChangedServiceCategory' class='form-control' type='text'{{#ChangedServiceCategory}} value='{{ChangedServiceCategory}}'{{/ChangedServiceCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ChangedUsagePoint'>ChangedUsagePoint: </label><div class='col-sm-8'><input id='{{id}}_ChangedUsagePoint' class='form-control' type='text'{{#ChangedUsagePoint}} value='{{ChangedUsagePoint}}'{{/ChangedUsagePoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ChangedDocument'>ChangedDocument: </label><div class='col-sm-8'><input id='{{id}}_ChangedDocument' class='form-control' type='text'{{#ChangedDocument}} value='{{ChangedDocument}}'{{/ChangedDocument}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ConfigurationEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_effectiveDateTime").value; if ("" != temp) obj.effectiveDateTime = temp;
                temp = document.getElementById (id + "_modifiedBy").value; if ("" != temp) obj.modifiedBy = temp;
                temp = document.getElementById (id + "_remark").value; if ("" != temp) obj.remark = temp;
                temp = document.getElementById (id + "_ChangedPersonRole").value; if ("" != temp) obj.ChangedPersonRole = temp;
                temp = document.getElementById (id + "_ChangedOrganisationRole").value; if ("" != temp) obj.ChangedOrganisationRole = temp;
                temp = document.getElementById (id + "_ChangedAsset").value; if ("" != temp) obj.ChangedAsset = temp;
                temp = document.getElementById (id + "_ChangedLocation").value; if ("" != temp) obj.ChangedLocation = temp;
                temp = document.getElementById (id + "_ChangedServiceCategory").value; if ("" != temp) obj.ChangedServiceCategory = temp;
                temp = document.getElementById (id + "_ChangedUsagePoint").value; if ("" != temp) obj.ChangedUsagePoint = temp;
                temp = document.getElementById (id + "_ChangedDocument").value; if ("" != temp) obj.ChangedDocument = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ChangedPersonRole", "0..1", "0..*", "PersonRole", "ConfigurationEvents"],
                            ["ChangedOrganisationRole", "0..1", "0..*", "OrganisationRole", "ConfigurationEvents"],
                            ["ChangedAsset", "0..1", "0..*", "Asset", "ConfigurationEvents"],
                            ["ChangedLocation", "0..1", "0..*", "Location", "ConfigurationEvents"],
                            ["ChangedServiceCategory", "0..1", "0..*", "ServiceCategory", "ConfigurationEvents"],
                            ["ChangedUsagePoint", "0..1", "0..*", "UsagePoint", "ConfigurationEvents"],
                            ["ChangedDocument", "0..1", "0..*", "Document", "ConfigurationEvents"]
                        ]
                    )
                );
            }
        }

        /**
         * Person role in the context of utility operations.
         *
         */
        class OperationPersonRole extends PersonRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OperationPersonRole;
                if (null == bucket)
                   cim_data.OperationPersonRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperationPersonRole[obj.id];
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
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OperationPersonRole_collapse" aria-expanded="true" aria-controls="OperationPersonRole_collapse" style="margin-left: 10px;">OperationPersonRole</a></legend>
                    <div id="OperationPersonRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PersonRole.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OperationPersonRole_collapse" aria-expanded="true" aria-controls="{{id}}_OperationPersonRole_collapse" style="margin-left: 10px;">OperationPersonRole</a></legend>
                    <div id="{{id}}_OperationPersonRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PersonRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "OperationPersonRole" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Member of a crew.
         *
         */
        class CrewMember extends OperationPersonRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.CrewMember;
                if (null == bucket)
                   cim_data.CrewMember = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CrewMember[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationPersonRole.prototype.parse.call (this, context, sub);
                obj.cls = "CrewMember";
                base.parse_attribute (/<cim:CrewMember.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context);
                base.parse_attributes (/<cim:CrewMember.SwitchingSteps\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingSteps", sub, context);
                var bucket = context.parsed.CrewMember;
                if (null == bucket)
                   context.parsed.CrewMember = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OperationPersonRole.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CrewMember", "Crew", "Crew", fields);
                base.export_attributes (obj, "CrewMember", "SwitchingSteps", "SwitchingSteps", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CrewMember_collapse" aria-expanded="true" aria-controls="CrewMember_collapse" style="margin-left: 10px;">CrewMember</a></legend>
                    <div id="CrewMember_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + OperationPersonRole.prototype.template.call (this) +
                    `
                    {{#Crew}}<div><b>Crew</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Crew}}&quot;);}); return false;'>{{Crew}}</a></div>{{/Crew}}
                    {{#SwitchingSteps}}<div><b>SwitchingSteps</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/SwitchingSteps}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SwitchingSteps) obj.SwitchingSteps_string = obj.SwitchingSteps.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SwitchingSteps_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CrewMember_collapse" aria-expanded="true" aria-controls="{{id}}_CrewMember_collapse" style="margin-left: 10px;">CrewMember</a></legend>
                    <div id="{{id}}_CrewMember_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + OperationPersonRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crew'>Crew: </label><div class='col-sm-8'><input id='{{id}}_Crew' class='form-control' type='text'{{#Crew}} value='{{Crew}}'{{/Crew}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CrewMember" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Crew").value; if ("" != temp) obj.Crew = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Crew", "0..1", "0..*", "Crew", "CrewMembers"],
                            ["SwitchingSteps", "0..*", "0..1", "SwitchingStep", "CrewMember"]
                        ]
                    )
                );
            }
        }

        /**
         * Control room operator.
         *
         */
        class Operator extends OperationPersonRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Operator;
                if (null == bucket)
                   cim_data.Operator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Operator[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationPersonRole.prototype.parse.call (this, context, sub);
                obj.cls = "Operator";
                base.parse_attributes (/<cim:Operator.Incidents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incidents", sub, context);
                base.parse_attributes (/<cim:Operator.SwitchingSteps\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingSteps", sub, context);
                var bucket = context.parsed.Operator;
                if (null == bucket)
                   context.parsed.Operator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OperationPersonRole.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Operator", "Incidents", "Incidents", fields);
                base.export_attributes (obj, "Operator", "SwitchingSteps", "SwitchingSteps", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Operator_collapse" aria-expanded="true" aria-controls="Operator_collapse" style="margin-left: 10px;">Operator</a></legend>
                    <div id="Operator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + OperationPersonRole.prototype.template.call (this) +
                    `
                    {{#Incidents}}<div><b>Incidents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Incidents}}
                    {{#SwitchingSteps}}<div><b>SwitchingSteps</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/SwitchingSteps}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Incidents) obj.Incidents_string = obj.Incidents.join ();
                if (obj.SwitchingSteps) obj.SwitchingSteps_string = obj.SwitchingSteps.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Incidents_string;
                delete obj.SwitchingSteps_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Operator_collapse" aria-expanded="true" aria-controls="{{id}}_Operator_collapse" style="margin-left: 10px;">Operator</a></legend>
                    <div id="{{id}}_Operator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + OperationPersonRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Operator" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Incidents", "0..*", "0..1", "Incident", "Owner"],
                            ["SwitchingSteps", "0..*", "0..1", "SwitchingStep", "Operator"]
                        ]
                    )
                );
            }
        }

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