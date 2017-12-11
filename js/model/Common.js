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
                base.parse_element (/<cim:Document.docStatus>([\s\S]*?)<\/cim:Document.docStatus>/g, obj, "docStatus", base.to_string, sub, context);
                base.parse_element (/<cim:Document.electronicAddress>([\s\S]*?)<\/cim:Document.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);
                base.parse_element (/<cim:Document.lastModifiedDateTime>([\s\S]*?)<\/cim:Document.lastModifiedDateTime>/g, obj, "lastModifiedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Document.revisionNumber>([\s\S]*?)<\/cim:Document.revisionNumber>/g, obj, "revisionNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Document.status>([\s\S]*?)<\/cim:Document.status>/g, obj, "status", base.to_string, sub, context);
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
                base.export_element (obj, "Document", "docStatus", "docStatus",  base.from_string, fields);
                base.export_element (obj, "Document", "electronicAddress", "electronicAddress",  base.from_string, fields);
                base.export_element (obj, "Document", "lastModifiedDateTime", "lastModifiedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "Document", "revisionNumber", "revisionNumber",  base.from_string, fields);
                base.export_element (obj, "Document", "status", "status",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Document_collapse" aria-expanded="true" aria-controls="Document_collapse" style="margin-left: 10px;">Document</a></legend>
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
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConfigurationEvents}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Document_collapse" aria-expanded="true" aria-controls="Document_collapse" style="margin-left: 10px;">Document</a></legend>
                    <div id="Document_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='authorName'>authorName: </label><div class='col-sm-8'><input id='authorName' class='form-control' type='text'{{#authorName}} value='{{authorName}}'{{/authorName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='createdDateTime'>createdDateTime: </label><div class='col-sm-8'><input id='createdDateTime' class='form-control' type='text'{{#createdDateTime}} value='{{createdDateTime}}'{{/createdDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='docStatus'>docStatus: </label><div class='col-sm-8'><input id='docStatus' class='form-control' type='text'{{#docStatus}} value='{{docStatus}}'{{/docStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='electronicAddress'>electronicAddress: </label><div class='col-sm-8'><input id='electronicAddress' class='form-control' type='text'{{#electronicAddress}} value='{{electronicAddress}}'{{/electronicAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lastModifiedDateTime'>lastModifiedDateTime: </label><div class='col-sm-8'><input id='lastModifiedDateTime' class='form-control' type='text'{{#lastModifiedDateTime}} value='{{lastModifiedDateTime}}'{{/lastModifiedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='revisionNumber'>revisionNumber: </label><div class='col-sm-8'><input id='revisionNumber' class='form-control' type='text'{{#revisionNumber}} value='{{revisionNumber}}'{{/revisionNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='subject'>subject: </label><div class='col-sm-8'><input id='subject' class='form-control' type='text'{{#subject}} value='{{subject}}'{{/subject}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='title'>title: </label><div class='col-sm-8'><input id='title' class='form-control' type='text'{{#title}} value='{{title}}'{{/title}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='comment'>comment: </label><div class='col-sm-8'><input id='comment' class='form-control' type='text'{{#comment}} value='{{comment}}'{{/comment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Document" };
                super.submit (obj);
                temp = document.getElementById ("authorName").value; if ("" != temp) obj.authorName = temp;
                temp = document.getElementById ("createdDateTime").value; if ("" != temp) obj.createdDateTime = temp;
                temp = document.getElementById ("docStatus").value; if ("" != temp) obj.docStatus = temp;
                temp = document.getElementById ("electronicAddress").value; if ("" != temp) obj.electronicAddress = temp;
                temp = document.getElementById ("lastModifiedDateTime").value; if ("" != temp) obj.lastModifiedDateTime = temp;
                temp = document.getElementById ("revisionNumber").value; if ("" != temp) obj.revisionNumber = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("subject").value; if ("" != temp) obj.subject = temp;
                temp = document.getElementById ("title").value; if ("" != temp) obj.title = temp;
                temp = document.getElementById ("type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById ("comment").value; if ("" != temp) obj.comment = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ConfigurationEvents", "ConfigurationEvent", "0..*", "0..1"]
                    ]
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

                base.export_element (obj, "StreetAddress", "status", "status",  base.from_string, fields);
                base.export_element (obj, "StreetAddress", "streetDetail", "streetDetail",  base.from_string, fields);
                base.export_element (obj, "StreetAddress", "townDetail", "townDetail",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StreetAddress_collapse" aria-expanded="true" aria-controls="StreetAddress_collapse" style="margin-left: 10px;">StreetAddress</a></legend>
                    <div id="StreetAddress_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#streetDetail}}<div><b>streetDetail</b>: {{streetDetail}}</div>{{/streetDetail}}
                    {{#townDetail}}<div><b>townDetail</b>: {{townDetail}}</div>{{/townDetail}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StreetAddress_collapse" aria-expanded="true" aria-controls="StreetAddress_collapse" style="margin-left: 10px;">StreetAddress</a></legend>
                    <div id="StreetAddress_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='streetDetail'>streetDetail: </label><div class='col-sm-8'><input id='streetDetail' class='form-control' type='text'{{#streetDetail}} value='{{streetDetail}}'{{/streetDetail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='townDetail'>townDetail: </label><div class='col-sm-8'><input id='townDetail' class='form-control' type='text'{{#townDetail}} value='{{townDetail}}'{{/townDetail}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "StreetAddress" };
                super.submit (obj);
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("streetDetail").value; if ("" != temp) obj.streetDetail = temp;
                temp = document.getElementById ("townDetail").value; if ("" != temp) obj.townDetail = temp;

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OrganisationRole_collapse" aria-expanded="true" aria-controls="OrganisationRole_collapse" style="margin-left: 10px;">OrganisationRole</a></legend>
                    <div id="OrganisationRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConfigurationEvents}}
                    {{#Organisation}}<div><b>Organisation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Organisation}}&quot;);})'>{{Organisation}}</a></div>{{/Organisation}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OrganisationRole_collapse" aria-expanded="true" aria-controls="OrganisationRole_collapse" style="margin-left: 10px;">OrganisationRole</a></legend>
                    <div id="OrganisationRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Organisation'>Organisation: </label><div class='col-sm-8'><input id='Organisation' class='form-control' type='text'{{#Organisation}} value='{{Organisation}}'{{/Organisation}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "OrganisationRole" };
                super.submit (obj);
                temp = document.getElementById ("Organisation").value; if ("" != temp) obj.Organisation = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ConfigurationEvents", "ConfigurationEvent", "0..*", "0..1"],
                        ["Organisation", "Organisation", "0..1", "0..*"]
                    ]
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ElectronicAddress_collapse" aria-expanded="true" aria-controls="ElectronicAddress_collapse" style="margin-left: 10px;">ElectronicAddress</a></legend>
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
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ElectronicAddress_collapse" aria-expanded="true" aria-controls="ElectronicAddress_collapse" style="margin-left: 10px;">ElectronicAddress</a></legend>
                    <div id="ElectronicAddress_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='email1'>email1: </label><div class='col-sm-8'><input id='email1' class='form-control' type='text'{{#email1}} value='{{email1}}'{{/email1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='email2'>email2: </label><div class='col-sm-8'><input id='email2' class='form-control' type='text'{{#email2}} value='{{email2}}'{{/email2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lan'>lan: </label><div class='col-sm-8'><input id='lan' class='form-control' type='text'{{#lan}} value='{{lan}}'{{/lan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mac'>mac: </label><div class='col-sm-8'><input id='mac' class='form-control' type='text'{{#mac}} value='{{mac}}'{{/mac}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='password'>password: </label><div class='col-sm-8'><input id='password' class='form-control' type='text'{{#password}} value='{{password}}'{{/password}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='radio'>radio: </label><div class='col-sm-8'><input id='radio' class='form-control' type='text'{{#radio}} value='{{radio}}'{{/radio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='userID'>userID: </label><div class='col-sm-8'><input id='userID' class='form-control' type='text'{{#userID}} value='{{userID}}'{{/userID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='web'>web: </label><div class='col-sm-8'><input id='web' class='form-control' type='text'{{#web}} value='{{web}}'{{/web}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ElectronicAddress" };
                super.submit (obj);
                temp = document.getElementById ("email1").value; if ("" != temp) obj.email1 = temp;
                temp = document.getElementById ("email2").value; if ("" != temp) obj.email2 = temp;
                temp = document.getElementById ("lan").value; if ("" != temp) obj.lan = temp;
                temp = document.getElementById ("mac").value; if ("" != temp) obj.mac = temp;
                temp = document.getElementById ("password").value; if ("" != temp) obj.password = temp;
                temp = document.getElementById ("radio").value; if ("" != temp) obj.radio = temp;
                temp = document.getElementById ("userID").value; if ("" != temp) obj.userID = temp;
                temp = document.getElementById ("web").value; if ("" != temp) obj.web = temp;

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
                base.parse_element (/<cim:Crew.status>([\s\S]*?)<\/cim:Crew.status>/g, obj, "status", base.to_string, sub, context);
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

                base.export_element (obj, "Crew", "status", "status",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Crew_collapse" aria-expanded="true" aria-controls="Crew_collapse" style="margin-left: 10px;">Crew</a></legend>
                    <div id="Crew_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#CrewMembers}}<div><b>CrewMembers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CrewMembers}}
                    {{#WorkAssets}}<div><b>WorkAssets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkAssets}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WorkTasks}}
                    {{#CrewType}}<div><b>CrewType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CrewType}}&quot;);})'>{{CrewType}}</a></div>{{/CrewType}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CrewMembers) obj.CrewMembers_string = obj.CrewMembers.join ();
                if (obj.WorkAssets) obj.WorkAssets_string = obj.WorkAssets.join ();
                if (obj.WorkTasks) obj.WorkTasks_string = obj.WorkTasks.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CrewMembers_string;
                delete obj.WorkAssets_string;
                delete obj.WorkTasks_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Crew_collapse" aria-expanded="true" aria-controls="Crew_collapse" style="margin-left: 10px;">Crew</a></legend>
                    <div id="Crew_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkTasks'>WorkTasks: </label><div class='col-sm-8'><input id='WorkTasks' class='form-control' type='text'{{#WorkTasks}} value='{{WorkTasks}}_string'{{/WorkTasks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CrewType'>CrewType: </label><div class='col-sm-8'><input id='CrewType' class='form-control' type='text'{{#CrewType}} value='{{CrewType}}'{{/CrewType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Crew" };
                super.submit (obj);
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("WorkTasks").value; if ("" != temp) obj.WorkTasks = temp.split (",");
                temp = document.getElementById ("CrewType").value; if ("" != temp) obj.CrewType = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CrewMembers", "CrewMember", "0..*", "0..1"],
                        ["WorkAssets", "WorkAsset", "0..*", "0..1"],
                        ["WorkTasks", "WorkTask", "0..*", "0..*"],
                        ["CrewType", "CrewType", "0..1", "0..*"]
                    ]
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
                base.parse_element (/<cim:ScheduledEvent.status>([\s\S]*?)<\/cim:ScheduledEvent.status>/g, obj, "status", base.to_string, sub, context);
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
                base.export_element (obj, "ScheduledEvent", "status", "status",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledEvent_collapse" aria-expanded="true" aria-controls="ScheduledEvent_collapse" style="margin-left: 10px;">ScheduledEvent</a></legend>
                    <div id="ScheduledEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#duration}}<div><b>duration</b>: {{duration}}</div>{{/duration}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Assets}}
                    {{#ScheduledEventData}}<div><b>ScheduledEventData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ScheduledEventData}}&quot;);})'>{{ScheduledEventData}}</a></div>{{/ScheduledEventData}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Assets_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledEvent_collapse" aria-expanded="true" aria-controls="ScheduledEvent_collapse" style="margin-left: 10px;">ScheduledEvent</a></legend>
                    <div id="ScheduledEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='duration'>duration: </label><div class='col-sm-8'><input id='duration' class='form-control' type='text'{{#duration}} value='{{duration}}'{{/duration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Assets'>Assets: </label><div class='col-sm-8'><input id='Assets' class='form-control' type='text'{{#Assets}} value='{{Assets}}_string'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ScheduledEventData'>ScheduledEventData: </label><div class='col-sm-8'><input id='ScheduledEventData' class='form-control' type='text'{{#ScheduledEventData}} value='{{ScheduledEventData}}'{{/ScheduledEventData}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ScheduledEvent" };
                super.submit (obj);
                temp = document.getElementById ("duration").value; if ("" != temp) obj.duration = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById ("Assets").value; if ("" != temp) obj.Assets = temp.split (",");
                temp = document.getElementById ("ScheduledEventData").value; if ("" != temp) obj.ScheduledEventData = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Assets", "Asset", "0..*", "0..*"],
                        ["ScheduledEventData", "ScheduledEventData", "0..1", "0..*"]
                    ]
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Priority_collapse" aria-expanded="true" aria-controls="Priority_collapse" style="margin-left: 10px;">Priority</a></legend>
                    <div id="Priority_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#justification}}<div><b>justification</b>: {{justification}}</div>{{/justification}}
                    {{#rank}}<div><b>rank</b>: {{rank}}</div>{{/rank}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Priority_collapse" aria-expanded="true" aria-controls="Priority_collapse" style="margin-left: 10px;">Priority</a></legend>
                    <div id="Priority_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='justification'>justification: </label><div class='col-sm-8'><input id='justification' class='form-control' type='text'{{#justification}} value='{{justification}}'{{/justification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rank'>rank: </label><div class='col-sm-8'><input id='rank' class='form-control' type='text'{{#rank}} value='{{rank}}'{{/rank}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Priority" };
                super.submit (obj);
                temp = document.getElementById ("justification").value; if ("" != temp) obj.justification = temp;
                temp = document.getElementById ("rank").value; if ("" != temp) obj.rank = temp;
                temp = document.getElementById ("type").value; if ("" != temp) obj.type = temp;

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

                base.export_element (obj, "TimePoint", "dateTime", "dateTime",  base.from_datetime, fields);
                base.export_element (obj, "TimePoint", "relativeTimeInterval", "relativeTimeInterval",  base.from_string, fields);
                base.export_element (obj, "TimePoint", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "TimePoint", "status", "status",  base.from_string, fields);
                base.export_element (obj, "TimePoint", "window", "window",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TimePoint_collapse" aria-expanded="true" aria-controls="TimePoint_collapse" style="margin-left: 10px;">TimePoint</a></legend>
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
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TimePoint_collapse" aria-expanded="true" aria-controls="TimePoint_collapse" style="margin-left: 10px;">TimePoint</a></legend>
                    <div id="TimePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dateTime'>dateTime: </label><div class='col-sm-8'><input id='dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='relativeTimeInterval'>relativeTimeInterval: </label><div class='col-sm-8'><input id='relativeTimeInterval' class='form-control' type='text'{{#relativeTimeInterval}} value='{{relativeTimeInterval}}'{{/relativeTimeInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='window'>window: </label><div class='col-sm-8'><input id='window' class='form-control' type='text'{{#window}} value='{{window}}'{{/window}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TimeSchedule'>TimeSchedule: </label><div class='col-sm-8'><input id='TimeSchedule' class='form-control' type='text'{{#TimeSchedule}} value='{{TimeSchedule}}'{{/TimeSchedule}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TimePoint" };
                super.submit (obj);
                temp = document.getElementById ("dateTime").value; if ("" != temp) obj.dateTime = temp;
                temp = document.getElementById ("relativeTimeInterval").value; if ("" != temp) obj.relativeTimeInterval = temp;
                temp = document.getElementById ("sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("window").value; if ("" != temp) obj.window = temp;
                temp = document.getElementById ("TimeSchedule").value; if ("" != temp) obj.TimeSchedule = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TimeSchedule", "TimeSchedule", "1", "0..*"]
                    ]
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
                base.parse_element (/<cim:ActivityRecord.status>([\s\S]*?)<\/cim:ActivityRecord.status>/g, obj, "status", base.to_string, sub, context);
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
                base.export_element (obj, "ActivityRecord", "status", "status",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ActivityRecord_collapse" aria-expanded="true" aria-controls="ActivityRecord_collapse" style="margin-left: 10px;">ActivityRecord</a></legend>
                    <div id="ActivityRecord_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#createdDateTime}}<div><b>createdDateTime</b>: {{createdDateTime}}</div>{{/createdDateTime}}
                    {{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
                    {{#severity}}<div><b>severity</b>: {{severity}}</div>{{/severity}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Assets}}
                    {{#Organisations}}<div><b>Organisations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Organisations}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
                if (obj.Organisations) obj.Organisations_string = obj.Organisations.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Assets_string;
                delete obj.Organisations_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ActivityRecord_collapse" aria-expanded="true" aria-controls="ActivityRecord_collapse" style="margin-left: 10px;">ActivityRecord</a></legend>
                    <div id="ActivityRecord_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='createdDateTime'>createdDateTime: </label><div class='col-sm-8'><input id='createdDateTime' class='form-control' type='text'{{#createdDateTime}} value='{{createdDateTime}}'{{/createdDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reason'>reason: </label><div class='col-sm-8'><input id='reason' class='form-control' type='text'{{#reason}} value='{{reason}}'{{/reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='severity'>severity: </label><div class='col-sm-8'><input id='severity' class='form-control' type='text'{{#severity}} value='{{severity}}'{{/severity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Assets'>Assets: </label><div class='col-sm-8'><input id='Assets' class='form-control' type='text'{{#Assets}} value='{{Assets}}_string'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Organisations'>Organisations: </label><div class='col-sm-8'><input id='Organisations' class='form-control' type='text'{{#Organisations}} value='{{Organisations}}_string'{{/Organisations}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ActivityRecord" };
                super.submit (obj);
                temp = document.getElementById ("createdDateTime").value; if ("" != temp) obj.createdDateTime = temp;
                temp = document.getElementById ("reason").value; if ("" != temp) obj.reason = temp;
                temp = document.getElementById ("severity").value; if ("" != temp) obj.severity = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById ("Assets").value; if ("" != temp) obj.Assets = temp.split (",");
                temp = document.getElementById ("Organisations").value; if ("" != temp) obj.Organisations = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Assets", "Asset", "0..*", "0..*"],
                        ["Organisations", "Organisation", "0..*", "0..*"]
                    ]
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

                base.export_element (obj, "PostalAddress", "poBox", "poBox",  base.from_string, fields);
                base.export_element (obj, "PostalAddress", "postalCode", "postalCode",  base.from_string, fields);
                base.export_element (obj, "PostalAddress", "streetDetail", "streetDetail",  base.from_string, fields);
                base.export_element (obj, "PostalAddress", "townDetail", "townDetail",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PostalAddress_collapse" aria-expanded="true" aria-controls="PostalAddress_collapse" style="margin-left: 10px;">PostalAddress</a></legend>
                    <div id="PostalAddress_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#poBox}}<div><b>poBox</b>: {{poBox}}</div>{{/poBox}}
                    {{#postalCode}}<div><b>postalCode</b>: {{postalCode}}</div>{{/postalCode}}
                    {{#streetDetail}}<div><b>streetDetail</b>: {{streetDetail}}</div>{{/streetDetail}}
                    {{#townDetail}}<div><b>townDetail</b>: {{townDetail}}</div>{{/townDetail}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PostalAddress_collapse" aria-expanded="true" aria-controls="PostalAddress_collapse" style="margin-left: 10px;">PostalAddress</a></legend>
                    <div id="PostalAddress_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='poBox'>poBox: </label><div class='col-sm-8'><input id='poBox' class='form-control' type='text'{{#poBox}} value='{{poBox}}'{{/poBox}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='postalCode'>postalCode: </label><div class='col-sm-8'><input id='postalCode' class='form-control' type='text'{{#postalCode}} value='{{postalCode}}'{{/postalCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='streetDetail'>streetDetail: </label><div class='col-sm-8'><input id='streetDetail' class='form-control' type='text'{{#streetDetail}} value='{{streetDetail}}'{{/streetDetail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='townDetail'>townDetail: </label><div class='col-sm-8'><input id='townDetail' class='form-control' type='text'{{#townDetail}} value='{{townDetail}}'{{/townDetail}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PostalAddress" };
                super.submit (obj);
                temp = document.getElementById ("poBox").value; if ("" != temp) obj.poBox = temp;
                temp = document.getElementById ("postalCode").value; if ("" != temp) obj.postalCode = temp;
                temp = document.getElementById ("streetDetail").value; if ("" != temp) obj.streetDetail = temp;
                temp = document.getElementById ("townDetail").value; if ("" != temp) obj.townDetail = temp;

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PersonRole_collapse" aria-expanded="true" aria-controls="PersonRole_collapse" style="margin-left: 10px;">PersonRole</a></legend>
                    <div id="PersonRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConfigurationEvents}}
                    {{#Person}}<div><b>Person</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Person}}&quot;);})'>{{Person}}</a></div>{{/Person}}
                    {{#Appointments}}<div><b>Appointments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Appointments}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PersonRole_collapse" aria-expanded="true" aria-controls="PersonRole_collapse" style="margin-left: 10px;">PersonRole</a></legend>
                    <div id="PersonRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Person'>Person: </label><div class='col-sm-8'><input id='Person' class='form-control' type='text'{{#Person}} value='{{Person}}'{{/Person}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Appointments'>Appointments: </label><div class='col-sm-8'><input id='Appointments' class='form-control' type='text'{{#Appointments}} value='{{Appointments}}_string'{{/Appointments}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PersonRole" };
                super.submit (obj);
                temp = document.getElementById ("Person").value; if ("" != temp) obj.Person = temp;
                temp = document.getElementById ("Appointments").value; if ("" != temp) obj.Appointments = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ConfigurationEvents", "ConfigurationEvent", "0..*", "0..1"],
                        ["Person", "Person", "0..1", "0..*"],
                        ["Appointments", "Appointment", "0..*", "0..*"]
                    ]
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CoordinateSystem_collapse" aria-expanded="true" aria-controls="CoordinateSystem_collapse" style="margin-left: 10px;">CoordinateSystem</a></legend>
                    <div id="CoordinateSystem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#crsUrn}}<div><b>crsUrn</b>: {{crsUrn}}</div>{{/crsUrn}}
                    {{#Locations}}<div><b>Locations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Locations}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CoordinateSystem_collapse" aria-expanded="true" aria-controls="CoordinateSystem_collapse" style="margin-left: 10px;">CoordinateSystem</a></legend>
                    <div id="CoordinateSystem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='crsUrn'>crsUrn: </label><div class='col-sm-8'><input id='crsUrn' class='form-control' type='text'{{#crsUrn}} value='{{crsUrn}}'{{/crsUrn}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CoordinateSystem" };
                super.submit (obj);
                temp = document.getElementById ("crsUrn").value; if ("" != temp) obj.crsUrn = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Locations", "Location", "0..*", "0..1"]
                    ]
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

                base.export_element (obj, "Hazard", "status", "status",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Hazard_collapse" aria-expanded="true" aria-controls="Hazard_collapse" style="margin-left: 10px;">Hazard</a></legend>
                    <div id="Hazard_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Hazard_collapse" aria-expanded="true" aria-controls="Hazard_collapse" style="margin-left: 10px;">Hazard</a></legend>
                    <div id="Hazard_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Hazard" };
                super.submit (obj);
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("type").value; if ("" != temp) obj.type = temp;

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TownDetail_collapse" aria-expanded="true" aria-controls="TownDetail_collapse" style="margin-left: 10px;">TownDetail</a></legend>
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
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TownDetail_collapse" aria-expanded="true" aria-controls="TownDetail_collapse" style="margin-left: 10px;">TownDetail</a></legend>
                    <div id="TownDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='code'>code: </label><div class='col-sm-8'><input id='code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='country'>country: </label><div class='col-sm-8'><input id='country' class='form-control' type='text'{{#country}} value='{{country}}'{{/country}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='name'>name: </label><div class='col-sm-8'><input id='name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='section'>section: </label><div class='col-sm-8'><input id='section' class='form-control' type='text'{{#section}} value='{{section}}'{{/section}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='stateOrProvince'>stateOrProvince: </label><div class='col-sm-8'><input id='stateOrProvince' class='form-control' type='text'{{#stateOrProvince}} value='{{stateOrProvince}}'{{/stateOrProvince}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TownDetail" };
                super.submit (obj);
                temp = document.getElementById ("code").value; if ("" != temp) obj.code = temp;
                temp = document.getElementById ("country").value; if ("" != temp) obj.country = temp;
                temp = document.getElementById ("name").value; if ("" != temp) obj.name = temp;
                temp = document.getElementById ("section").value; if ("" != temp) obj.section = temp;
                temp = document.getElementById ("stateOrProvince").value; if ("" != temp) obj.stateOrProvince = temp;

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
                base.parse_element (/<cim:Organisation.electronicAddress>([\s\S]*?)<\/cim:Organisation.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);
                base.parse_element (/<cim:Organisation.phone1>([\s\S]*?)<\/cim:Organisation.phone1>/g, obj, "phone1", base.to_string, sub, context);
                base.parse_element (/<cim:Organisation.phone2>([\s\S]*?)<\/cim:Organisation.phone2>/g, obj, "phone2", base.to_string, sub, context);
                base.parse_element (/<cim:Organisation.postalAddress>([\s\S]*?)<\/cim:Organisation.postalAddress>/g, obj, "postalAddress", base.to_string, sub, context);
                base.parse_element (/<cim:Organisation.streetAddress>([\s\S]*?)<\/cim:Organisation.streetAddress>/g, obj, "streetAddress", base.to_string, sub, context);
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

                base.export_element (obj, "Organisation", "electronicAddress", "electronicAddress",  base.from_string, fields);
                base.export_element (obj, "Organisation", "phone1", "phone1",  base.from_string, fields);
                base.export_element (obj, "Organisation", "phone2", "phone2",  base.from_string, fields);
                base.export_element (obj, "Organisation", "postalAddress", "postalAddress",  base.from_string, fields);
                base.export_element (obj, "Organisation", "streetAddress", "streetAddress",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Organisation_collapse" aria-expanded="true" aria-controls="Organisation_collapse" style="margin-left: 10px;">Organisation</a></legend>
                    <div id="Organisation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#electronicAddress}}<div><b>electronicAddress</b>: {{electronicAddress}}</div>{{/electronicAddress}}
                    {{#phone1}}<div><b>phone1</b>: {{phone1}}</div>{{/phone1}}
                    {{#phone2}}<div><b>phone2</b>: {{phone2}}</div>{{/phone2}}
                    {{#postalAddress}}<div><b>postalAddress</b>: {{postalAddress}}</div>{{/postalAddress}}
                    {{#streetAddress}}<div><b>streetAddress</b>: {{streetAddress}}</div>{{/streetAddress}}
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Crews}}
                    {{#ActivityRecords}}<div><b>ActivityRecords</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ActivityRecords}}
                    {{#Roles}}<div><b>Roles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Roles}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Crews) obj.Crews_string = obj.Crews.join ();
                if (obj.ActivityRecords) obj.ActivityRecords_string = obj.ActivityRecords.join ();
                if (obj.Roles) obj.Roles_string = obj.Roles.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Crews_string;
                delete obj.ActivityRecords_string;
                delete obj.Roles_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Organisation_collapse" aria-expanded="true" aria-controls="Organisation_collapse" style="margin-left: 10px;">Organisation</a></legend>
                    <div id="Organisation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='electronicAddress'>electronicAddress: </label><div class='col-sm-8'><input id='electronicAddress' class='form-control' type='text'{{#electronicAddress}} value='{{electronicAddress}}'{{/electronicAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phone1'>phone1: </label><div class='col-sm-8'><input id='phone1' class='form-control' type='text'{{#phone1}} value='{{phone1}}'{{/phone1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phone2'>phone2: </label><div class='col-sm-8'><input id='phone2' class='form-control' type='text'{{#phone2}} value='{{phone2}}'{{/phone2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='postalAddress'>postalAddress: </label><div class='col-sm-8'><input id='postalAddress' class='form-control' type='text'{{#postalAddress}} value='{{postalAddress}}'{{/postalAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='streetAddress'>streetAddress: </label><div class='col-sm-8'><input id='streetAddress' class='form-control' type='text'{{#streetAddress}} value='{{streetAddress}}'{{/streetAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Crews'>Crews: </label><div class='col-sm-8'><input id='Crews' class='form-control' type='text'{{#Crews}} value='{{Crews}}_string'{{/Crews}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ActivityRecords'>ActivityRecords: </label><div class='col-sm-8'><input id='ActivityRecords' class='form-control' type='text'{{#ActivityRecords}} value='{{ActivityRecords}}_string'{{/ActivityRecords}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Organisation" };
                super.submit (obj);
                temp = document.getElementById ("electronicAddress").value; if ("" != temp) obj.electronicAddress = temp;
                temp = document.getElementById ("phone1").value; if ("" != temp) obj.phone1 = temp;
                temp = document.getElementById ("phone2").value; if ("" != temp) obj.phone2 = temp;
                temp = document.getElementById ("postalAddress").value; if ("" != temp) obj.postalAddress = temp;
                temp = document.getElementById ("streetAddress").value; if ("" != temp) obj.streetAddress = temp;
                temp = document.getElementById ("Crews").value; if ("" != temp) obj.Crews = temp.split (",");
                temp = document.getElementById ("ActivityRecords").value; if ("" != temp) obj.ActivityRecords = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Crews", "OldCrew", "0..*", "1..*"],
                        ["ActivityRecords", "ActivityRecord", "0..*", "0..*"],
                        ["Roles", "OrganisationRole", "0..*", "0..1"]
                    ]
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CrewType_collapse" aria-expanded="true" aria-controls="CrewType_collapse" style="margin-left: 10px;">CrewType</a></legend>
                    <div id="CrewType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Crews}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CrewType_collapse" aria-expanded="true" aria-controls="CrewType_collapse" style="margin-left: 10px;">CrewType</a></legend>
                    <div id="CrewType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "CrewType" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Crews", "Crew", "0..*", "0..1"]
                    ]
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
                base.parse_element (/<cim:Location.electronicAddress>([\s\S]*?)<\/cim:Location.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);
                base.parse_element (/<cim:Location.geoInfoReference>([\s\S]*?)<\/cim:Location.geoInfoReference>/g, obj, "geoInfoReference", base.to_string, sub, context);
                base.parse_element (/<cim:Location.mainAddress>([\s\S]*?)<\/cim:Location.mainAddress>/g, obj, "mainAddress", base.to_string, sub, context);
                base.parse_element (/<cim:Location.phone1>([\s\S]*?)<\/cim:Location.phone1>/g, obj, "phone1", base.to_string, sub, context);
                base.parse_element (/<cim:Location.phone2>([\s\S]*?)<\/cim:Location.phone2>/g, obj, "phone2", base.to_string, sub, context);
                base.parse_element (/<cim:Location.secondaryAddress>([\s\S]*?)<\/cim:Location.secondaryAddress>/g, obj, "secondaryAddress", base.to_string, sub, context);
                base.parse_element (/<cim:Location.status>([\s\S]*?)<\/cim:Location.status>/g, obj, "status", base.to_string, sub, context);
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
                base.export_element (obj, "Location", "electronicAddress", "electronicAddress",  base.from_string, fields);
                base.export_element (obj, "Location", "geoInfoReference", "geoInfoReference",  base.from_string, fields);
                base.export_element (obj, "Location", "mainAddress", "mainAddress",  base.from_string, fields);
                base.export_element (obj, "Location", "phone1", "phone1",  base.from_string, fields);
                base.export_element (obj, "Location", "phone2", "phone2",  base.from_string, fields);
                base.export_element (obj, "Location", "secondaryAddress", "secondaryAddress",  base.from_string, fields);
                base.export_element (obj, "Location", "status", "status",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Location_collapse" aria-expanded="true" aria-controls="Location_collapse" style="margin-left: 10px;">Location</a></legend>
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
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Assets}}
                    {{#PowerSystemResources}}<div><b>PowerSystemResources</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PowerSystemResources}}
                    {{#Measurements}}<div><b>Measurements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Measurements}}
                    {{#Hazards}}<div><b>Hazards</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Hazards}}
                    {{#LandProperties}}<div><b>LandProperties</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LandProperties}}
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConfigurationEvents}}
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Crews}}
                    {{#PositionPoints}}<div><b>PositionPoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PositionPoints}}
                    {{#Routes}}<div><b>Routes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Routes}}
                    {{#CoordinateSystem}}<div><b>CoordinateSystem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CoordinateSystem}}&quot;);})'>{{CoordinateSystem}}</a></div>{{/CoordinateSystem}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Location_collapse" aria-expanded="true" aria-controls="Location_collapse" style="margin-left: 10px;">Location</a></legend>
                    <div id="Location_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='direction'>direction: </label><div class='col-sm-8'><input id='direction' class='form-control' type='text'{{#direction}} value='{{direction}}'{{/direction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='electronicAddress'>electronicAddress: </label><div class='col-sm-8'><input id='electronicAddress' class='form-control' type='text'{{#electronicAddress}} value='{{electronicAddress}}'{{/electronicAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='geoInfoReference'>geoInfoReference: </label><div class='col-sm-8'><input id='geoInfoReference' class='form-control' type='text'{{#geoInfoReference}} value='{{geoInfoReference}}'{{/geoInfoReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mainAddress'>mainAddress: </label><div class='col-sm-8'><input id='mainAddress' class='form-control' type='text'{{#mainAddress}} value='{{mainAddress}}'{{/mainAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phone1'>phone1: </label><div class='col-sm-8'><input id='phone1' class='form-control' type='text'{{#phone1}} value='{{phone1}}'{{/phone1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phone2'>phone2: </label><div class='col-sm-8'><input id='phone2' class='form-control' type='text'{{#phone2}} value='{{phone2}}'{{/phone2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='secondaryAddress'>secondaryAddress: </label><div class='col-sm-8'><input id='secondaryAddress' class='form-control' type='text'{{#secondaryAddress}} value='{{secondaryAddress}}'{{/secondaryAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Measurements'>Measurements: </label><div class='col-sm-8'><input id='Measurements' class='form-control' type='text'{{#Measurements}} value='{{Measurements}}_string'{{/Measurements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Hazards'>Hazards: </label><div class='col-sm-8'><input id='Hazards' class='form-control' type='text'{{#Hazards}} value='{{Hazards}}_string'{{/Hazards}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LandProperties'>LandProperties: </label><div class='col-sm-8'><input id='LandProperties' class='form-control' type='text'{{#LandProperties}} value='{{LandProperties}}_string'{{/LandProperties}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Crews'>Crews: </label><div class='col-sm-8'><input id='Crews' class='form-control' type='text'{{#Crews}} value='{{Crews}}_string'{{/Crews}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Routes'>Routes: </label><div class='col-sm-8'><input id='Routes' class='form-control' type='text'{{#Routes}} value='{{Routes}}_string'{{/Routes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CoordinateSystem'>CoordinateSystem: </label><div class='col-sm-8'><input id='CoordinateSystem' class='form-control' type='text'{{#CoordinateSystem}} value='{{CoordinateSystem}}'{{/CoordinateSystem}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Location" };
                super.submit (obj);
                temp = document.getElementById ("direction").value; if ("" != temp) obj.direction = temp;
                temp = document.getElementById ("electronicAddress").value; if ("" != temp) obj.electronicAddress = temp;
                temp = document.getElementById ("geoInfoReference").value; if ("" != temp) obj.geoInfoReference = temp;
                temp = document.getElementById ("mainAddress").value; if ("" != temp) obj.mainAddress = temp;
                temp = document.getElementById ("phone1").value; if ("" != temp) obj.phone1 = temp;
                temp = document.getElementById ("phone2").value; if ("" != temp) obj.phone2 = temp;
                temp = document.getElementById ("secondaryAddress").value; if ("" != temp) obj.secondaryAddress = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById ("Measurements").value; if ("" != temp) obj.Measurements = temp.split (",");
                temp = document.getElementById ("Hazards").value; if ("" != temp) obj.Hazards = temp.split (",");
                temp = document.getElementById ("LandProperties").value; if ("" != temp) obj.LandProperties = temp.split (",");
                temp = document.getElementById ("Crews").value; if ("" != temp) obj.Crews = temp.split (",");
                temp = document.getElementById ("Routes").value; if ("" != temp) obj.Routes = temp.split (",");
                temp = document.getElementById ("CoordinateSystem").value; if ("" != temp) obj.CoordinateSystem = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Assets", "Asset", "0..*", "0..1"],
                        ["PowerSystemResources", "PowerSystemResource", "0..*", "0..1"],
                        ["Measurements", "Measurement", "0..*", "0..*"],
                        ["Hazards", "AssetLocationHazard", "0..*", "0..*"],
                        ["LandProperties", "LandProperty", "0..*", "0..*"],
                        ["ConfigurationEvents", "ConfigurationEvent", "0..*", "0..1"],
                        ["Crews", "OldCrew", "0..*", "0..*"],
                        ["PositionPoints", "PositionPoint", "0..*", "1"],
                        ["Routes", "Route", "0..*", "0..*"],
                        ["CoordinateSystem", "CoordinateSystem", "0..1", "0..*"]
                    ]
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Ownership_collapse" aria-expanded="true" aria-controls="Ownership_collapse" style="margin-left: 10px;">Ownership</a></legend>
                    <div id="Ownership_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#share}}<div><b>share</b>: {{share}}</div>{{/share}}
                    {{#AssetOwner}}<div><b>AssetOwner</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetOwner}}&quot;);})'>{{AssetOwner}}</a></div>{{/AssetOwner}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Asset}}&quot;);})'>{{Asset}}</a></div>{{/Asset}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Ownership_collapse" aria-expanded="true" aria-controls="Ownership_collapse" style="margin-left: 10px;">Ownership</a></legend>
                    <div id="Ownership_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='share'>share: </label><div class='col-sm-8'><input id='share' class='form-control' type='text'{{#share}} value='{{share}}'{{/share}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AssetOwner'>AssetOwner: </label><div class='col-sm-8'><input id='AssetOwner' class='form-control' type='text'{{#AssetOwner}} value='{{AssetOwner}}'{{/AssetOwner}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Asset'>Asset: </label><div class='col-sm-8'><input id='Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Ownership" };
                super.submit (obj);
                temp = document.getElementById ("share").value; if ("" != temp) obj.share = temp;
                temp = document.getElementById ("AssetOwner").value; if ("" != temp) obj.AssetOwner = temp;
                temp = document.getElementById ("Asset").value; if ("" != temp) obj.Asset = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AssetOwner", "AssetOwner", "0..1", "0..*"],
                        ["Asset", "Asset", "0..1", "0..*"]
                    ]
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TelephoneNumber_collapse" aria-expanded="true" aria-controls="TelephoneNumber_collapse" style="margin-left: 10px;">TelephoneNumber</a></legend>
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
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TelephoneNumber_collapse" aria-expanded="true" aria-controls="TelephoneNumber_collapse" style="margin-left: 10px;">TelephoneNumber</a></legend>
                    <div id="TelephoneNumber_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='areaCode'>areaCode: </label><div class='col-sm-8'><input id='areaCode' class='form-control' type='text'{{#areaCode}} value='{{areaCode}}'{{/areaCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cityCode'>cityCode: </label><div class='col-sm-8'><input id='cityCode' class='form-control' type='text'{{#cityCode}} value='{{cityCode}}'{{/cityCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='countryCode'>countryCode: </label><div class='col-sm-8'><input id='countryCode' class='form-control' type='text'{{#countryCode}} value='{{countryCode}}'{{/countryCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='extension'>extension: </label><div class='col-sm-8'><input id='extension' class='form-control' type='text'{{#extension}} value='{{extension}}'{{/extension}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='localNumber'>localNumber: </label><div class='col-sm-8'><input id='localNumber' class='form-control' type='text'{{#localNumber}} value='{{localNumber}}'{{/localNumber}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TelephoneNumber" };
                super.submit (obj);
                temp = document.getElementById ("areaCode").value; if ("" != temp) obj.areaCode = temp;
                temp = document.getElementById ("cityCode").value; if ("" != temp) obj.cityCode = temp;
                temp = document.getElementById ("countryCode").value; if ("" != temp) obj.countryCode = temp;
                temp = document.getElementById ("extension").value; if ("" != temp) obj.extension = temp;
                temp = document.getElementById ("localNumber").value; if ("" != temp) obj.localNumber = temp;

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PositionPoint_collapse" aria-expanded="true" aria-controls="PositionPoint_collapse" style="margin-left: 10px;">PositionPoint</a></legend>
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
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PositionPoint_collapse" aria-expanded="true" aria-controls="PositionPoint_collapse" style="margin-left: 10px;">PositionPoint</a></legend>
                    <div id="PositionPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xPosition'>xPosition: </label><div class='col-sm-8'><input id='xPosition' class='form-control' type='text'{{#xPosition}} value='{{xPosition}}'{{/xPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='yPosition'>yPosition: </label><div class='col-sm-8'><input id='yPosition' class='form-control' type='text'{{#yPosition}} value='{{yPosition}}'{{/yPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='zPosition'>zPosition: </label><div class='col-sm-8'><input id='zPosition' class='form-control' type='text'{{#zPosition}} value='{{zPosition}}'{{/zPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Location'>Location: </label><div class='col-sm-8'><input id='Location' class='form-control' type='text'{{#Location}} value='{{Location}}'{{/Location}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PositionPoint" };
                super.submit (obj);
                temp = document.getElementById ("sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById ("xPosition").value; if ("" != temp) obj.xPosition = temp;
                temp = document.getElementById ("yPosition").value; if ("" != temp) obj.yPosition = temp;
                temp = document.getElementById ("zPosition").value; if ("" != temp) obj.zPosition = temp;
                temp = document.getElementById ("Location").value; if ("" != temp) obj.Location = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Location", "Location", "1", "0..*"]
                    ]
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
                base.parse_element (/<cim:UserAttribute.value>([\s\S]*?)<\/cim:UserAttribute.value>/g, obj, "value", base.to_string, sub, context);
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
                base.export_element (obj, "UserAttribute", "value", "value",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UserAttribute_collapse" aria-expanded="true" aria-controls="UserAttribute_collapse" style="margin-left: 10px;">UserAttribute</a></legend>
                    <div id="UserAttribute_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#name}}<div><b>name</b>: {{name}}</div>{{/name}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#ErpInvoiceLineItems}}<div><b>ErpInvoiceLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpInvoiceLineItems}}
                    {{#Transaction}}<div><b>Transaction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Transaction}}&quot;);})'>{{Transaction}}</a></div>{{/Transaction}}
                    {{#RatingSpecification}}<div><b>RatingSpecification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RatingSpecification}}&quot;);})'>{{RatingSpecification}}</a></div>{{/RatingSpecification}}
                    {{#ProcedureDataSets}}<div><b>ProcedureDataSets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProcedureDataSets}}
                    {{#ErpLedgerEntries}}<div><b>ErpLedgerEntries</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpLedgerEntries}}
                    {{#PropertySpecification}}<div><b>PropertySpecification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PropertySpecification}}&quot;);})'>{{PropertySpecification}}</a></div>{{/PropertySpecification}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ErpInvoiceLineItems) obj.ErpInvoiceLineItems_string = obj.ErpInvoiceLineItems.join ();
                if (obj.ProcedureDataSets) obj.ProcedureDataSets_string = obj.ProcedureDataSets.join ();
                if (obj.ErpLedgerEntries) obj.ErpLedgerEntries_string = obj.ErpLedgerEntries.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ErpInvoiceLineItems_string;
                delete obj.ProcedureDataSets_string;
                delete obj.ErpLedgerEntries_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UserAttribute_collapse" aria-expanded="true" aria-controls="UserAttribute_collapse" style="margin-left: 10px;">UserAttribute</a></legend>
                    <div id="UserAttribute_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='name'>name: </label><div class='col-sm-8'><input id='name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpInvoiceLineItems'>ErpInvoiceLineItems: </label><div class='col-sm-8'><input id='ErpInvoiceLineItems' class='form-control' type='text'{{#ErpInvoiceLineItems}} value='{{ErpInvoiceLineItems}}_string'{{/ErpInvoiceLineItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Transaction'>Transaction: </label><div class='col-sm-8'><input id='Transaction' class='form-control' type='text'{{#Transaction}} value='{{Transaction}}'{{/Transaction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RatingSpecification'>RatingSpecification: </label><div class='col-sm-8'><input id='RatingSpecification' class='form-control' type='text'{{#RatingSpecification}} value='{{RatingSpecification}}'{{/RatingSpecification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ProcedureDataSets'>ProcedureDataSets: </label><div class='col-sm-8'><input id='ProcedureDataSets' class='form-control' type='text'{{#ProcedureDataSets}} value='{{ProcedureDataSets}}_string'{{/ProcedureDataSets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpLedgerEntries'>ErpLedgerEntries: </label><div class='col-sm-8'><input id='ErpLedgerEntries' class='form-control' type='text'{{#ErpLedgerEntries}} value='{{ErpLedgerEntries}}_string'{{/ErpLedgerEntries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PropertySpecification'>PropertySpecification: </label><div class='col-sm-8'><input id='PropertySpecification' class='form-control' type='text'{{#PropertySpecification}} value='{{PropertySpecification}}'{{/PropertySpecification}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "UserAttribute" };
                super.submit (obj);
                temp = document.getElementById ("name").value; if ("" != temp) obj.name = temp;
                temp = document.getElementById ("sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById ("value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById ("ErpInvoiceLineItems").value; if ("" != temp) obj.ErpInvoiceLineItems = temp.split (",");
                temp = document.getElementById ("Transaction").value; if ("" != temp) obj.Transaction = temp;
                temp = document.getElementById ("RatingSpecification").value; if ("" != temp) obj.RatingSpecification = temp;
                temp = document.getElementById ("ProcedureDataSets").value; if ("" != temp) obj.ProcedureDataSets = temp.split (",");
                temp = document.getElementById ("ErpLedgerEntries").value; if ("" != temp) obj.ErpLedgerEntries = temp.split (",");
                temp = document.getElementById ("PropertySpecification").value; if ("" != temp) obj.PropertySpecification = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ErpInvoiceLineItems", "ErpInvoiceLineItem", "0..*", "0..*"],
                        ["Transaction", "Transaction", "0..1", "0..*"],
                        ["RatingSpecification", "Specification", "0..1", "0..*"],
                        ["ProcedureDataSets", "ProcedureDataSet", "0..*", "0..*"],
                        ["ErpLedgerEntries", "ErpLedgerEntry", "0..*", "0..*"],
                        ["PropertySpecification", "Specification", "0..1", "0..*"]
                    ]
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
                base.parse_element (/<cim:ScheduledEventData.estimatedWindow>([\s\S]*?)<\/cim:ScheduledEventData.estimatedWindow>/g, obj, "estimatedWindow", base.to_string, sub, context);
                base.parse_element (/<cim:ScheduledEventData.requestedWindow>([\s\S]*?)<\/cim:ScheduledEventData.requestedWindow>/g, obj, "requestedWindow", base.to_string, sub, context);
                base.parse_element (/<cim:ScheduledEventData.status>([\s\S]*?)<\/cim:ScheduledEventData.status>/g, obj, "status", base.to_string, sub, context);
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

                base.export_element (obj, "ScheduledEventData", "estimatedWindow", "estimatedWindow",  base.from_string, fields);
                base.export_element (obj, "ScheduledEventData", "requestedWindow", "requestedWindow",  base.from_string, fields);
                base.export_element (obj, "ScheduledEventData", "status", "status",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledEventData_collapse" aria-expanded="true" aria-controls="ScheduledEventData_collapse" style="margin-left: 10px;">ScheduledEventData</a></legend>
                    <div id="ScheduledEventData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#estimatedWindow}}<div><b>estimatedWindow</b>: {{estimatedWindow}}</div>{{/estimatedWindow}}
                    {{#requestedWindow}}<div><b>requestedWindow</b>: {{requestedWindow}}</div>{{/requestedWindow}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#InspectionDataSet}}<div><b>InspectionDataSet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InspectionDataSet}}&quot;);})'>{{InspectionDataSet}}</a></div>{{/InspectionDataSet}}
                    {{#ScheduledEvents}}<div><b>ScheduledEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ScheduledEvents}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ScheduledEvents) obj.ScheduledEvents_string = obj.ScheduledEvents.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ScheduledEvents_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledEventData_collapse" aria-expanded="true" aria-controls="ScheduledEventData_collapse" style="margin-left: 10px;">ScheduledEventData</a></legend>
                    <div id="ScheduledEventData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='estimatedWindow'>estimatedWindow: </label><div class='col-sm-8'><input id='estimatedWindow' class='form-control' type='text'{{#estimatedWindow}} value='{{estimatedWindow}}'{{/estimatedWindow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='requestedWindow'>requestedWindow: </label><div class='col-sm-8'><input id='requestedWindow' class='form-control' type='text'{{#requestedWindow}} value='{{requestedWindow}}'{{/requestedWindow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='InspectionDataSet'>InspectionDataSet: </label><div class='col-sm-8'><input id='InspectionDataSet' class='form-control' type='text'{{#InspectionDataSet}} value='{{InspectionDataSet}}'{{/InspectionDataSet}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ScheduledEventData" };
                super.submit (obj);
                temp = document.getElementById ("estimatedWindow").value; if ("" != temp) obj.estimatedWindow = temp;
                temp = document.getElementById ("requestedWindow").value; if ("" != temp) obj.requestedWindow = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("InspectionDataSet").value; if ("" != temp) obj.InspectionDataSet = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["InspectionDataSet", "InspectionDataSet", "1", "0..*"],
                        ["ScheduledEvents", "ScheduledEvent", "0..*", "0..1"]
                    ]
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Status_collapse" aria-expanded="true" aria-controls="Status_collapse" style="margin-left: 10px;">Status</a></legend>
                    <div id="Status_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
                    {{#reason}}<div><b>reason</b>: {{reason}}</div>{{/reason}}
                    {{#remark}}<div><b>remark</b>: {{remark}}</div>{{/remark}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Status_collapse" aria-expanded="true" aria-controls="Status_collapse" style="margin-left: 10px;">Status</a></legend>
                    <div id="Status_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dateTime'>dateTime: </label><div class='col-sm-8'><input id='dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reason'>reason: </label><div class='col-sm-8'><input id='reason' class='form-control' type='text'{{#reason}} value='{{reason}}'{{/reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='remark'>remark: </label><div class='col-sm-8'><input id='remark' class='form-control' type='text'{{#remark}} value='{{remark}}'{{/remark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Status" };
                super.submit (obj);
                temp = document.getElementById ("dateTime").value; if ("" != temp) obj.dateTime = temp;
                temp = document.getElementById ("reason").value; if ("" != temp) obj.reason = temp;
                temp = document.getElementById ("remark").value; if ("" != temp) obj.remark = temp;
                temp = document.getElementById ("value").value; if ("" != temp) obj.value = temp;

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
                base.parse_element (/<cim:Person.electronicAddress>([\s\S]*?)<\/cim:Person.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);
                base.parse_element (/<cim:Person.firstName>([\s\S]*?)<\/cim:Person.firstName>/g, obj, "firstName", base.to_string, sub, context);
                base.parse_element (/<cim:Person.landlinePhone>([\s\S]*?)<\/cim:Person.landlinePhone>/g, obj, "landlinePhone", base.to_string, sub, context);
                base.parse_element (/<cim:Person.lastName>([\s\S]*?)<\/cim:Person.lastName>/g, obj, "lastName", base.to_string, sub, context);
                base.parse_element (/<cim:Person.mName>([\s\S]*?)<\/cim:Person.mName>/g, obj, "mName", base.to_string, sub, context);
                base.parse_element (/<cim:Person.mobilePhone>([\s\S]*?)<\/cim:Person.mobilePhone>/g, obj, "mobilePhone", base.to_string, sub, context);
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

                base.export_element (obj, "Person", "electronicAddress", "electronicAddress",  base.from_string, fields);
                base.export_element (obj, "Person", "firstName", "firstName",  base.from_string, fields);
                base.export_element (obj, "Person", "landlinePhone", "landlinePhone",  base.from_string, fields);
                base.export_element (obj, "Person", "lastName", "lastName",  base.from_string, fields);
                base.export_element (obj, "Person", "mName", "mName",  base.from_string, fields);
                base.export_element (obj, "Person", "mobilePhone", "mobilePhone",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Person_collapse" aria-expanded="true" aria-controls="Person_collapse" style="margin-left: 10px;">Person</a></legend>
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
                    {{#Roles}}<div><b>Roles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Roles}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Roles) obj.Roles_string = obj.Roles.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Roles_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Person_collapse" aria-expanded="true" aria-controls="Person_collapse" style="margin-left: 10px;">Person</a></legend>
                    <div id="Person_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='electronicAddress'>electronicAddress: </label><div class='col-sm-8'><input id='electronicAddress' class='form-control' type='text'{{#electronicAddress}} value='{{electronicAddress}}'{{/electronicAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='firstName'>firstName: </label><div class='col-sm-8'><input id='firstName' class='form-control' type='text'{{#firstName}} value='{{firstName}}'{{/firstName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='landlinePhone'>landlinePhone: </label><div class='col-sm-8'><input id='landlinePhone' class='form-control' type='text'{{#landlinePhone}} value='{{landlinePhone}}'{{/landlinePhone}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lastName'>lastName: </label><div class='col-sm-8'><input id='lastName' class='form-control' type='text'{{#lastName}} value='{{lastName}}'{{/lastName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mName'>mName: </label><div class='col-sm-8'><input id='mName' class='form-control' type='text'{{#mName}} value='{{mName}}'{{/mName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mobilePhone'>mobilePhone: </label><div class='col-sm-8'><input id='mobilePhone' class='form-control' type='text'{{#mobilePhone}} value='{{mobilePhone}}'{{/mobilePhone}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='prefix'>prefix: </label><div class='col-sm-8'><input id='prefix' class='form-control' type='text'{{#prefix}} value='{{prefix}}'{{/prefix}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='specialNeed'>specialNeed: </label><div class='col-sm-8'><input id='specialNeed' class='form-control' type='text'{{#specialNeed}} value='{{specialNeed}}'{{/specialNeed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='suffix'>suffix: </label><div class='col-sm-8'><input id='suffix' class='form-control' type='text'{{#suffix}} value='{{suffix}}'{{/suffix}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Person" };
                super.submit (obj);
                temp = document.getElementById ("electronicAddress").value; if ("" != temp) obj.electronicAddress = temp;
                temp = document.getElementById ("firstName").value; if ("" != temp) obj.firstName = temp;
                temp = document.getElementById ("landlinePhone").value; if ("" != temp) obj.landlinePhone = temp;
                temp = document.getElementById ("lastName").value; if ("" != temp) obj.lastName = temp;
                temp = document.getElementById ("mName").value; if ("" != temp) obj.mName = temp;
                temp = document.getElementById ("mobilePhone").value; if ("" != temp) obj.mobilePhone = temp;
                temp = document.getElementById ("prefix").value; if ("" != temp) obj.prefix = temp;
                temp = document.getElementById ("specialNeed").value; if ("" != temp) obj.specialNeed = temp;
                temp = document.getElementById ("suffix").value; if ("" != temp) obj.suffix = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Roles", "PersonRole", "0..*", "0..1"]
                    ]
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
                base.parse_element (/<cim:Appointment.meetingInterval>([\s\S]*?)<\/cim:Appointment.meetingInterval>/g, obj, "meetingInterval", base.to_string, sub, context);
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
                base.export_element (obj, "Appointment", "meetingInterval", "meetingInterval",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Appointment_collapse" aria-expanded="true" aria-controls="Appointment_collapse" style="margin-left: 10px;">Appointment</a></legend>
                    <div id="Appointment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#callAhead}}<div><b>callAhead</b>: {{callAhead}}</div>{{/callAhead}}
                    {{#meetingInterval}}<div><b>meetingInterval</b>: {{meetingInterval}}</div>{{/meetingInterval}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Works}}
                    {{#Persons}}<div><b>Persons</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Persons}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Works) obj.Works_string = obj.Works.join ();
                if (obj.Persons) obj.Persons_string = obj.Persons.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Works_string;
                delete obj.Persons_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Appointment_collapse" aria-expanded="true" aria-controls="Appointment_collapse" style="margin-left: 10px;">Appointment</a></legend>
                    <div id="Appointment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='callAhead'>callAhead: </label><div class='col-sm-8'><input id='callAhead' class='form-check-input' type='checkbox'{{#callAhead}} checked{{/callAhead}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='meetingInterval'>meetingInterval: </label><div class='col-sm-8'><input id='meetingInterval' class='form-control' type='text'{{#meetingInterval}} value='{{meetingInterval}}'{{/meetingInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Works'>Works: </label><div class='col-sm-8'><input id='Works' class='form-control' type='text'{{#Works}} value='{{Works}}_string'{{/Works}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Persons'>Persons: </label><div class='col-sm-8'><input id='Persons' class='form-control' type='text'{{#Persons}} value='{{Persons}}_string'{{/Persons}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Appointment" };
                super.submit (obj);
                temp = document.getElementById ("callAhead").checked; if (temp) obj.callAhead = true;
                temp = document.getElementById ("meetingInterval").value; if ("" != temp) obj.meetingInterval = temp;
                temp = document.getElementById ("Works").value; if ("" != temp) obj.Works = temp.split (",");
                temp = document.getElementById ("Persons").value; if ("" != temp) obj.Persons = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Works", "Work", "0..*", "0..*"],
                        ["Persons", "PersonRole", "0..*", "0..*"]
                    ]
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StreetDetail_collapse" aria-expanded="true" aria-controls="StreetDetail_collapse" style="margin-left: 10px;">StreetDetail</a></legend>
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
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StreetDetail_collapse" aria-expanded="true" aria-controls="StreetDetail_collapse" style="margin-left: 10px;">StreetDetail</a></legend>
                    <div id="StreetDetail_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='addressGeneral'>addressGeneral: </label><div class='col-sm-8'><input id='addressGeneral' class='form-control' type='text'{{#addressGeneral}} value='{{addressGeneral}}'{{/addressGeneral}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='buildingName'>buildingName: </label><div class='col-sm-8'><input id='buildingName' class='form-control' type='text'{{#buildingName}} value='{{buildingName}}'{{/buildingName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='code'>code: </label><div class='col-sm-8'><input id='code' class='form-control' type='text'{{#code}} value='{{code}}'{{/code}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='name'>name: </label><div class='col-sm-8'><input id='name' class='form-control' type='text'{{#name}} value='{{name}}'{{/name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='number'>number: </label><div class='col-sm-8'><input id='number' class='form-control' type='text'{{#number}} value='{{number}}'{{/number}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='prefix'>prefix: </label><div class='col-sm-8'><input id='prefix' class='form-control' type='text'{{#prefix}} value='{{prefix}}'{{/prefix}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='suffix'>suffix: </label><div class='col-sm-8'><input id='suffix' class='form-control' type='text'{{#suffix}} value='{{suffix}}'{{/suffix}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='suiteNumber'>suiteNumber: </label><div class='col-sm-8'><input id='suiteNumber' class='form-control' type='text'{{#suiteNumber}} value='{{suiteNumber}}'{{/suiteNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='withinTownLimits'>withinTownLimits: </label><div class='col-sm-8'><input id='withinTownLimits' class='form-check-input' type='checkbox'{{#withinTownLimits}} checked{{/withinTownLimits}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "StreetDetail" };
                super.submit (obj);
                temp = document.getElementById ("addressGeneral").value; if ("" != temp) obj.addressGeneral = temp;
                temp = document.getElementById ("buildingName").value; if ("" != temp) obj.buildingName = temp;
                temp = document.getElementById ("code").value; if ("" != temp) obj.code = temp;
                temp = document.getElementById ("name").value; if ("" != temp) obj.name = temp;
                temp = document.getElementById ("number").value; if ("" != temp) obj.number = temp;
                temp = document.getElementById ("prefix").value; if ("" != temp) obj.prefix = temp;
                temp = document.getElementById ("suffix").value; if ("" != temp) obj.suffix = temp;
                temp = document.getElementById ("suiteNumber").value; if ("" != temp) obj.suiteNumber = temp;
                temp = document.getElementById ("type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById ("withinTownLimits").checked; if (temp) obj.withinTownLimits = true;

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
                base.parse_element (/<cim:TimeSchedule.scheduleInterval>([\s\S]*?)<\/cim:TimeSchedule.scheduleInterval>/g, obj, "scheduleInterval", base.to_string, sub, context);
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
                base.export_element (obj, "TimeSchedule", "scheduleInterval", "scheduleInterval",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TimeSchedule_collapse" aria-expanded="true" aria-controls="TimeSchedule_collapse" style="margin-left: 10px;">TimeSchedule</a></legend>
                    <div id="TimeSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Document.prototype.template.call (this) +
                    `
                    {{#disabled}}<div><b>disabled</b>: {{disabled}}</div>{{/disabled}}
                    {{#offset}}<div><b>offset</b>: {{offset}}</div>{{/offset}}
                    {{#recurrencePattern}}<div><b>recurrencePattern</b>: {{recurrencePattern}}</div>{{/recurrencePattern}}
                    {{#recurrencePeriod}}<div><b>recurrencePeriod</b>: {{recurrencePeriod}}</div>{{/recurrencePeriod}}
                    {{#scheduleInterval}}<div><b>scheduleInterval</b>: {{scheduleInterval}}</div>{{/scheduleInterval}}
                    {{#TimePoints}}<div><b>TimePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TimePoints}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TimePoints) obj.TimePoints_string = obj.TimePoints.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TimePoints_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TimeSchedule_collapse" aria-expanded="true" aria-controls="TimeSchedule_collapse" style="margin-left: 10px;">TimeSchedule</a></legend>
                    <div id="TimeSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='disabled'>disabled: </label><div class='col-sm-8'><input id='disabled' class='form-check-input' type='checkbox'{{#disabled}} checked{{/disabled}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='offset'>offset: </label><div class='col-sm-8'><input id='offset' class='form-control' type='text'{{#offset}} value='{{offset}}'{{/offset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='recurrencePattern'>recurrencePattern: </label><div class='col-sm-8'><input id='recurrencePattern' class='form-control' type='text'{{#recurrencePattern}} value='{{recurrencePattern}}'{{/recurrencePattern}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='recurrencePeriod'>recurrencePeriod: </label><div class='col-sm-8'><input id='recurrencePeriod' class='form-control' type='text'{{#recurrencePeriod}} value='{{recurrencePeriod}}'{{/recurrencePeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scheduleInterval'>scheduleInterval: </label><div class='col-sm-8'><input id='scheduleInterval' class='form-control' type='text'{{#scheduleInterval}} value='{{scheduleInterval}}'{{/scheduleInterval}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TimeSchedule" };
                super.submit (obj);
                temp = document.getElementById ("disabled").checked; if (temp) obj.disabled = true;
                temp = document.getElementById ("offset").value; if ("" != temp) obj.offset = temp;
                temp = document.getElementById ("recurrencePattern").value; if ("" != temp) obj.recurrencePattern = temp;
                temp = document.getElementById ("recurrencePeriod").value; if ("" != temp) obj.recurrencePeriod = temp;
                temp = document.getElementById ("scheduleInterval").value; if ("" != temp) obj.scheduleInterval = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TimePoints", "TimePoint", "0..*", "1"]
                    ]
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

                base.export_element (obj, "Agreement", "signDate", "signDate",  base.from_string, fields);
                base.export_element (obj, "Agreement", "validityInterval", "validityInterval",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Agreement_collapse" aria-expanded="true" aria-controls="Agreement_collapse" style="margin-left: 10px;">Agreement</a></legend>
                    <div id="Agreement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Document.prototype.template.call (this) +
                    `
                    {{#signDate}}<div><b>signDate</b>: {{signDate}}</div>{{/signDate}}
                    {{#validityInterval}}<div><b>validityInterval</b>: {{validityInterval}}</div>{{/validityInterval}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Agreement_collapse" aria-expanded="true" aria-controls="Agreement_collapse" style="margin-left: 10px;">Agreement</a></legend>
                    <div id="Agreement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='signDate'>signDate: </label><div class='col-sm-8'><input id='signDate' class='form-control' type='text'{{#signDate}} value='{{signDate}}'{{/signDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='validityInterval'>validityInterval: </label><div class='col-sm-8'><input id='validityInterval' class='form-control' type='text'{{#validityInterval}} value='{{validityInterval}}'{{/validityInterval}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Agreement" };
                super.submit (obj);
                temp = document.getElementById ("signDate").value; if ("" != temp) obj.signDate = temp;
                temp = document.getElementById ("validityInterval").value; if ("" != temp) obj.validityInterval = temp;

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConfigurationEvent_collapse" aria-expanded="true" aria-controls="ConfigurationEvent_collapse" style="margin-left: 10px;">ConfigurationEvent</a></legend>
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
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConfigurationEvent_collapse" aria-expanded="true" aria-controls="ConfigurationEvent_collapse" style="margin-left: 10px;">ConfigurationEvent</a></legend>
                    <div id="ConfigurationEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDateTime'>effectiveDateTime: </label><div class='col-sm-8'><input id='effectiveDateTime' class='form-control' type='text'{{#effectiveDateTime}} value='{{effectiveDateTime}}'{{/effectiveDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='modifiedBy'>modifiedBy: </label><div class='col-sm-8'><input id='modifiedBy' class='form-control' type='text'{{#modifiedBy}} value='{{modifiedBy}}'{{/modifiedBy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='remark'>remark: </label><div class='col-sm-8'><input id='remark' class='form-control' type='text'{{#remark}} value='{{remark}}'{{/remark}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChangedPersonRole'>ChangedPersonRole: </label><div class='col-sm-8'><input id='ChangedPersonRole' class='form-control' type='text'{{#ChangedPersonRole}} value='{{ChangedPersonRole}}'{{/ChangedPersonRole}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChangedOrganisationRole'>ChangedOrganisationRole: </label><div class='col-sm-8'><input id='ChangedOrganisationRole' class='form-control' type='text'{{#ChangedOrganisationRole}} value='{{ChangedOrganisationRole}}'{{/ChangedOrganisationRole}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChangedAsset'>ChangedAsset: </label><div class='col-sm-8'><input id='ChangedAsset' class='form-control' type='text'{{#ChangedAsset}} value='{{ChangedAsset}}'{{/ChangedAsset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChangedLocation'>ChangedLocation: </label><div class='col-sm-8'><input id='ChangedLocation' class='form-control' type='text'{{#ChangedLocation}} value='{{ChangedLocation}}'{{/ChangedLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChangedServiceCategory'>ChangedServiceCategory: </label><div class='col-sm-8'><input id='ChangedServiceCategory' class='form-control' type='text'{{#ChangedServiceCategory}} value='{{ChangedServiceCategory}}'{{/ChangedServiceCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChangedUsagePoint'>ChangedUsagePoint: </label><div class='col-sm-8'><input id='ChangedUsagePoint' class='form-control' type='text'{{#ChangedUsagePoint}} value='{{ChangedUsagePoint}}'{{/ChangedUsagePoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChangedDocument'>ChangedDocument: </label><div class='col-sm-8'><input id='ChangedDocument' class='form-control' type='text'{{#ChangedDocument}} value='{{ChangedDocument}}'{{/ChangedDocument}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ConfigurationEvent" };
                super.submit (obj);
                temp = document.getElementById ("effectiveDateTime").value; if ("" != temp) obj.effectiveDateTime = temp;
                temp = document.getElementById ("modifiedBy").value; if ("" != temp) obj.modifiedBy = temp;
                temp = document.getElementById ("remark").value; if ("" != temp) obj.remark = temp;
                temp = document.getElementById ("ChangedPersonRole").value; if ("" != temp) obj.ChangedPersonRole = temp;
                temp = document.getElementById ("ChangedOrganisationRole").value; if ("" != temp) obj.ChangedOrganisationRole = temp;
                temp = document.getElementById ("ChangedAsset").value; if ("" != temp) obj.ChangedAsset = temp;
                temp = document.getElementById ("ChangedLocation").value; if ("" != temp) obj.ChangedLocation = temp;
                temp = document.getElementById ("ChangedServiceCategory").value; if ("" != temp) obj.ChangedServiceCategory = temp;
                temp = document.getElementById ("ChangedUsagePoint").value; if ("" != temp) obj.ChangedUsagePoint = temp;
                temp = document.getElementById ("ChangedDocument").value; if ("" != temp) obj.ChangedDocument = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ChangedPersonRole", "PersonRole", "0..1", "0..*"],
                        ["ChangedOrganisationRole", "OrganisationRole", "0..1", "0..*"],
                        ["ChangedAsset", "Asset", "0..1", "0..*"],
                        ["ChangedLocation", "Location", "0..1", "0..*"],
                        ["ChangedServiceCategory", "ServiceCategory", "0..1", "0..*"],
                        ["ChangedUsagePoint", "UsagePoint", "0..1", "0..*"],
                        ["ChangedDocument", "Document", "0..1", "0..*"]
                    ]
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationPersonRole_collapse" aria-expanded="true" aria-controls="OperationPersonRole_collapse" style="margin-left: 10px;">OperationPersonRole</a></legend>
                    <div id="OperationPersonRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PersonRole.prototype.template.call (this) +
                    `
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationPersonRole_collapse" aria-expanded="true" aria-controls="OperationPersonRole_collapse" style="margin-left: 10px;">OperationPersonRole</a></legend>
                    <div id="OperationPersonRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PersonRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "OperationPersonRole" };
                super.submit (obj);

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CrewMember_collapse" aria-expanded="true" aria-controls="CrewMember_collapse" style="margin-left: 10px;">CrewMember</a></legend>
                    <div id="CrewMember_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationPersonRole.prototype.template.call (this) +
                    `
                    {{#Crew}}<div><b>Crew</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Crew}}&quot;);})'>{{Crew}}</a></div>{{/Crew}}
                    {{#SwitchingSteps}}<div><b>SwitchingSteps</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SwitchingSteps}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CrewMember_collapse" aria-expanded="true" aria-controls="CrewMember_collapse" style="margin-left: 10px;">CrewMember</a></legend>
                    <div id="CrewMember_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationPersonRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Crew'>Crew: </label><div class='col-sm-8'><input id='Crew' class='form-control' type='text'{{#Crew}} value='{{Crew}}'{{/Crew}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CrewMember" };
                super.submit (obj);
                temp = document.getElementById ("Crew").value; if ("" != temp) obj.Crew = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Crew", "Crew", "0..1", "0..*"],
                        ["SwitchingSteps", "SwitchingStep", "0..*", "0..1"]
                    ]
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Operator_collapse" aria-expanded="true" aria-controls="Operator_collapse" style="margin-left: 10px;">Operator</a></legend>
                    <div id="Operator_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationPersonRole.prototype.template.call (this) +
                    `
                    {{#Incidents}}<div><b>Incidents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Incidents}}
                    {{#SwitchingSteps}}<div><b>SwitchingSteps</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SwitchingSteps}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Operator_collapse" aria-expanded="true" aria-controls="Operator_collapse" style="margin-left: 10px;">Operator</a></legend>
                    <div id="Operator_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationPersonRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "Operator" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Incidents", "Incident", "0..*", "0..1"],
                        ["SwitchingSteps", "SwitchingStep", "0..*", "0..1"]
                    ]
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