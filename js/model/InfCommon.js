define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * This package contains functions common for distribution management.
     *
     */
    function (base, Common, Core)
    {

        /**
         * Kind of skill level.
         *
         */
        var SkillLevelKind =
        {
            master: "master",
            standard: "standard",
            apprentice: "apprentice",
            other: "other"
        };
        Object.freeze (SkillLevelKind);

        /**
         * Organisation that is a commercial bank, agency, or other institution that offers a similar service.
         *
         */
        class Bank extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Bank;
                if (null == bucket)
                   cim_data.Bank = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Bank[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "Bank";
                base.parse_element (/<cim:Bank.bic>([\s\S]*?)<\/cim:Bank.bic>/g, obj, "bic", base.to_string, sub, context);
                base.parse_element (/<cim:Bank.iban>([\s\S]*?)<\/cim:Bank.iban>/g, obj, "iban", base.to_string, sub, context);
                base.parse_attributes (/<cim:Bank.BankAccounts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BankAccounts", sub, context);
                var bucket = context.parsed.Bank;
                if (null == bucket)
                   context.parsed.Bank = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_element (obj, "Bank", "bic", "bic",  base.from_string, fields);
                base.export_element (obj, "Bank", "iban", "iban",  base.from_string, fields);
                base.export_attributes (obj, "Bank", "BankAccounts", "BankAccounts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Bank_collapse" aria-expanded="true" aria-controls="Bank_collapse" style="margin-left: 10px;">Bank</a></legend>
                    <div id="Bank_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#bic}}<div><b>bic</b>: {{bic}}</div>{{/bic}}
                    {{#iban}}<div><b>iban</b>: {{iban}}</div>{{/iban}}
                    {{#BankAccounts}}<div><b>BankAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BankAccounts}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.BankAccounts) obj.BankAccounts_string = obj.BankAccounts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.BankAccounts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Bank_collapse" aria-expanded="true" aria-controls="{{id}}_Bank_collapse" style="margin-left: 10px;">Bank</a></legend>
                    <div id="{{id}}_Bank_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bic'>bic: </label><div class='col-sm-8'><input id='{{id}}_bic' class='form-control' type='text'{{#bic}} value='{{bic}}'{{/bic}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_iban'>iban: </label><div class='col-sm-8'><input id='{{id}}_iban' class='form-control' type='text'{{#iban}} value='{{iban}}'{{/iban}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Bank" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bic").value; if ("" != temp) obj.bic = temp;
                temp = document.getElementById (id + "_iban").value; if ("" != temp) obj.iban = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["BankAccounts", "0..*", "0..1", "BankAccount", "Bank"]
                        ]
                    )
                );
            }
        }

        /**
         * A business role that this organisation plays.
         *
         * A single organisation typically performs many functions, each one described as a role.
         *
         */
        class BusinessRole extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.BusinessRole;
                if (null == bucket)
                   cim_data.BusinessRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BusinessRole[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "BusinessRole";
                base.parse_element (/<cim:BusinessRole.status>([\s\S]*?)<\/cim:BusinessRole.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:BusinessRole.type>([\s\S]*?)<\/cim:BusinessRole.type>/g, obj, "type", base.to_string, sub, context);
                var bucket = context.parsed.BusinessRole;
                if (null == bucket)
                   context.parsed.BusinessRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_element (obj, "BusinessRole", "status", "status",  base.from_string, fields);
                base.export_element (obj, "BusinessRole", "type", "type",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BusinessRole_collapse" aria-expanded="true" aria-controls="BusinessRole_collapse" style="margin-left: 10px;">BusinessRole</a></legend>
                    <div id="BusinessRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BusinessRole_collapse" aria-expanded="true" aria-controls="{{id}}_BusinessRole_collapse" style="margin-left: 10px;">BusinessRole</a></legend>
                    <div id="{{id}}_BusinessRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "BusinessRole" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;

                return (obj);
            }
        }

        /**
         * Role an organisation plays with respect to property (for example, the organisation may be the owner, renter, occupier, taxiing authority, etc.).
         *
         */
        class PropertyOrganisationRole extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PropertyOrganisationRole;
                if (null == bucket)
                   cim_data.PropertyOrganisationRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PropertyOrganisationRole[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "PropertyOrganisationRole";
                base.parse_attributes (/<cim:PropertyOrganisationRole.LandProperty\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LandProperty", sub, context);
                var bucket = context.parsed.PropertyOrganisationRole;
                if (null == bucket)
                   context.parsed.PropertyOrganisationRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "PropertyOrganisationRole", "LandProperty", "LandProperty", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PropertyOrganisationRole_collapse" aria-expanded="true" aria-controls="PropertyOrganisationRole_collapse" style="margin-left: 10px;">PropertyOrganisationRole</a></legend>
                    <div id="PropertyOrganisationRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#LandProperty}}<div><b>LandProperty</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LandProperty}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.LandProperty) obj.LandProperty_string = obj.LandProperty.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.LandProperty_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PropertyOrganisationRole_collapse" aria-expanded="true" aria-controls="{{id}}_PropertyOrganisationRole_collapse" style="margin-left: 10px;">PropertyOrganisationRole</a></legend>
                    <div id="{{id}}_PropertyOrganisationRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "PropertyOrganisationRole" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LandProperty", "1..", "0..*", "LandProperty", "ErpOrganisationRoles"]
                        ]
                    )
                );
            }
        }

        /**
         * A crew is a group of people with specific skills, tools, and vehicles.
         *
         */
        class OldCrew extends Common.Crew
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OldCrew;
                if (null == bucket)
                   cim_data.OldCrew = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OldCrew[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Crew.prototype.parse.call (this, context, sub);
                obj.cls = "OldCrew";
                base.parse_element (/<cim:OldCrew.type>([\s\S]*?)<\/cim:OldCrew.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:OldCrew.Assignments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Assignments", sub, context);
                base.parse_attributes (/<cim:OldCrew.Organisations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Organisations", sub, context);
                base.parse_attributes (/<cim:OldCrew.ShiftPatterns\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShiftPatterns", sub, context);
                base.parse_attributes (/<cim:OldCrew.Locations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Locations", sub, context);
                base.parse_attributes (/<cim:OldCrew.Capabilities\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Capabilities", sub, context);
                base.parse_attribute (/<cim:OldCrew.Route\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Route", sub, context);
                var bucket = context.parsed.OldCrew;
                if (null == bucket)
                   context.parsed.OldCrew = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Crew.prototype.export.call (this, obj, false);

                base.export_element (obj, "OldCrew", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "OldCrew", "Assignments", "Assignments", fields);
                base.export_attributes (obj, "OldCrew", "Organisations", "Organisations", fields);
                base.export_attributes (obj, "OldCrew", "ShiftPatterns", "ShiftPatterns", fields);
                base.export_attributes (obj, "OldCrew", "Locations", "Locations", fields);
                base.export_attributes (obj, "OldCrew", "Capabilities", "Capabilities", fields);
                base.export_attribute (obj, "OldCrew", "Route", "Route", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OldCrew_collapse" aria-expanded="true" aria-controls="OldCrew_collapse" style="margin-left: 10px;">OldCrew</a></legend>
                    <div id="OldCrew_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Crew.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#Assignments}}<div><b>Assignments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Assignments}}
                    {{#Organisations}}<div><b>Organisations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Organisations}}
                    {{#ShiftPatterns}}<div><b>ShiftPatterns</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ShiftPatterns}}
                    {{#Locations}}<div><b>Locations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Locations}}
                    {{#Capabilities}}<div><b>Capabilities</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Capabilities}}
                    {{#Route}}<div><b>Route</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Route}}&quot;);})'>{{Route}}</a></div>{{/Route}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Assignments) obj.Assignments_string = obj.Assignments.join ();
                if (obj.Organisations) obj.Organisations_string = obj.Organisations.join ();
                if (obj.ShiftPatterns) obj.ShiftPatterns_string = obj.ShiftPatterns.join ();
                if (obj.Locations) obj.Locations_string = obj.Locations.join ();
                if (obj.Capabilities) obj.Capabilities_string = obj.Capabilities.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Assignments_string;
                delete obj.Organisations_string;
                delete obj.ShiftPatterns_string;
                delete obj.Locations_string;
                delete obj.Capabilities_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OldCrew_collapse" aria-expanded="true" aria-controls="{{id}}_OldCrew_collapse" style="margin-left: 10px;">OldCrew</a></legend>
                    <div id="{{id}}_OldCrew_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Crew.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assignments'>Assignments: </label><div class='col-sm-8'><input id='{{id}}_Assignments' class='form-control' type='text'{{#Assignments}} value='{{Assignments}}_string'{{/Assignments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Organisations'>Organisations: </label><div class='col-sm-8'><input id='{{id}}_Organisations' class='form-control' type='text'{{#Organisations}} value='{{Organisations}}_string'{{/Organisations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ShiftPatterns'>ShiftPatterns: </label><div class='col-sm-8'><input id='{{id}}_ShiftPatterns' class='form-control' type='text'{{#ShiftPatterns}} value='{{ShiftPatterns}}_string'{{/ShiftPatterns}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Locations'>Locations: </label><div class='col-sm-8'><input id='{{id}}_Locations' class='form-control' type='text'{{#Locations}} value='{{Locations}}_string'{{/Locations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Route'>Route: </label><div class='col-sm-8'><input id='{{id}}_Route' class='form-control' type='text'{{#Route}} value='{{Route}}'{{/Route}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OldCrew" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_Assignments").value; if ("" != temp) obj.Assignments = temp.split (",");
                temp = document.getElementById (id + "_Organisations").value; if ("" != temp) obj.Organisations = temp.split (",");
                temp = document.getElementById (id + "_ShiftPatterns").value; if ("" != temp) obj.ShiftPatterns = temp.split (",");
                temp = document.getElementById (id + "_Locations").value; if ("" != temp) obj.Locations = temp.split (",");
                temp = document.getElementById (id + "_Route").value; if ("" != temp) obj.Route = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Assignments", "0..*", "0..*", "Assignment", "Crews"],
                            ["Organisations", "1..*", "0..*", "Organisation", "Crews"],
                            ["ShiftPatterns", "0..*", "0..*", "ShiftPattern", "Crews"],
                            ["Locations", "0..*", "0..*", "Location", "Crews"],
                            ["Capabilities", "0..*", "0..1", "Capability", "Crew"],
                            ["Route", "0..1", "0..*", "Route", "Crews"]
                        ]
                    )
                );
            }
        }

        /**
         * Roles played between Organisations and other Organisations.
         *
         * This includes role ups for ogranisations, cost centers, profit centers, regulatory reporting, etc.
         *
         */
        class OrgOrgRole extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OrgOrgRole;
                if (null == bucket)
                   cim_data.OrgOrgRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OrgOrgRole[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "OrgOrgRole";
                base.parse_element (/<cim:OrgOrgRole.clientID>([\s\S]*?)<\/cim:OrgOrgRole.clientID>/g, obj, "clientID", base.to_string, sub, context);
                var bucket = context.parsed.OrgOrgRole;
                if (null == bucket)
                   context.parsed.OrgOrgRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_element (obj, "OrgOrgRole", "clientID", "clientID",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OrgOrgRole_collapse" aria-expanded="true" aria-controls="OrgOrgRole_collapse" style="margin-left: 10px;">OrgOrgRole</a></legend>
                    <div id="OrgOrgRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#clientID}}<div><b>clientID</b>: {{clientID}}</div>{{/clientID}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OrgOrgRole_collapse" aria-expanded="true" aria-controls="{{id}}_OrgOrgRole_collapse" style="margin-left: 10px;">OrgOrgRole</a></legend>
                    <div id="{{id}}_OrgOrgRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_clientID'>clientID: </label><div class='col-sm-8'><input id='{{id}}_clientID' class='form-control' type='text'{{#clientID}} value='{{clientID}}'{{/clientID}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OrgOrgRole" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_clientID").value; if ("" != temp) obj.clientID = temp;

                return (obj);
            }
        }

        /**
         * Proficiency level of a craft, which is required to operate or maintain a particular type of asset and/or perform certain types of work.
         *
         */
        class Skill extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Skill;
                if (null == bucket)
                   cim_data.Skill = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Skill[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Skill";
                base.parse_element (/<cim:Skill.certificationPeriod>([\s\S]*?)<\/cim:Skill.certificationPeriod>/g, obj, "certificationPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:Skill.effectiveDateTime>([\s\S]*?)<\/cim:Skill.effectiveDateTime>/g, obj, "effectiveDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Skill.level\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "level", sub, context);
                base.parse_attribute (/<cim:Skill.ErpPerson\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPerson", sub, context);
                base.parse_attributes (/<cim:Skill.Crafts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crafts", sub, context);
                base.parse_attributes (/<cim:Skill.QualificationRequirements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "QualificationRequirements", sub, context);
                var bucket = context.parsed.Skill;
                if (null == bucket)
                   context.parsed.Skill = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Skill", "certificationPeriod", "certificationPeriod",  base.from_string, fields);
                base.export_element (obj, "Skill", "effectiveDateTime", "effectiveDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "Skill", "level", "level", fields);
                base.export_attribute (obj, "Skill", "ErpPerson", "ErpPerson", fields);
                base.export_attributes (obj, "Skill", "Crafts", "Crafts", fields);
                base.export_attributes (obj, "Skill", "QualificationRequirements", "QualificationRequirements", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Skill_collapse" aria-expanded="true" aria-controls="Skill_collapse" style="margin-left: 10px;">Skill</a></legend>
                    <div id="Skill_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#certificationPeriod}}<div><b>certificationPeriod</b>: {{certificationPeriod}}</div>{{/certificationPeriod}}
                    {{#effectiveDateTime}}<div><b>effectiveDateTime</b>: {{effectiveDateTime}}</div>{{/effectiveDateTime}}
                    {{#level}}<div><b>level</b>: {{level}}</div>{{/level}}
                    {{#ErpPerson}}<div><b>ErpPerson</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpPerson}}&quot;);})'>{{ErpPerson}}</a></div>{{/ErpPerson}}
                    {{#Crafts}}<div><b>Crafts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Crafts}}
                    {{#QualificationRequirements}}<div><b>QualificationRequirements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/QualificationRequirements}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.SkillLevelKind = []; if (!obj.level) obj.SkillLevelKind.push ({ id: '', selected: true}); for (var property in SkillLevelKind) obj.SkillLevelKind.push ({ id: property, selected: obj.level && obj.level.endsWith ('.' + property)});
                if (obj.Crafts) obj.Crafts_string = obj.Crafts.join ();
                if (obj.QualificationRequirements) obj.QualificationRequirements_string = obj.QualificationRequirements.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SkillLevelKind;
                delete obj.Crafts_string;
                delete obj.QualificationRequirements_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Skill_collapse" aria-expanded="true" aria-controls="{{id}}_Skill_collapse" style="margin-left: 10px;">Skill</a></legend>
                    <div id="{{id}}_Skill_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_certificationPeriod'>certificationPeriod: </label><div class='col-sm-8'><input id='{{id}}_certificationPeriod' class='form-control' type='text'{{#certificationPeriod}} value='{{certificationPeriod}}'{{/certificationPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_effectiveDateTime'>effectiveDateTime: </label><div class='col-sm-8'><input id='{{id}}_effectiveDateTime' class='form-control' type='text'{{#effectiveDateTime}} value='{{effectiveDateTime}}'{{/effectiveDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_level'>level: </label><div class='col-sm-8'><select id='{{id}}_level' class='form-control'>{{#SkillLevelKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SkillLevelKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPerson'>ErpPerson: </label><div class='col-sm-8'><input id='{{id}}_ErpPerson' class='form-control' type='text'{{#ErpPerson}} value='{{ErpPerson}}'{{/ErpPerson}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crafts'>Crafts: </label><div class='col-sm-8'><input id='{{id}}_Crafts' class='form-control' type='text'{{#Crafts}} value='{{Crafts}}_string'{{/Crafts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_QualificationRequirements'>QualificationRequirements: </label><div class='col-sm-8'><input id='{{id}}_QualificationRequirements' class='form-control' type='text'{{#QualificationRequirements}} value='{{QualificationRequirements}}_string'{{/QualificationRequirements}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Skill" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_certificationPeriod").value; if ("" != temp) obj.certificationPeriod = temp;
                temp = document.getElementById (id + "_effectiveDateTime").value; if ("" != temp) obj.effectiveDateTime = temp;
                temp = document.getElementById (id + "_level").value; if ("" != temp) { temp = SkillLevelKind[temp]; if ("undefined" != typeof (temp)) obj.level = "http://iec.ch/TC57/2013/CIM-schema-cim16#SkillLevelKind." + temp; }
                temp = document.getElementById (id + "_ErpPerson").value; if ("" != temp) obj.ErpPerson = temp;
                temp = document.getElementById (id + "_Crafts").value; if ("" != temp) obj.Crafts = temp.split (",");
                temp = document.getElementById (id + "_QualificationRequirements").value; if ("" != temp) obj.QualificationRequirements = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpPerson", "0..1", "0..*", "OldPerson", "Skills"],
                            ["Crafts", "0..*", "0..*", "Craft", "Skills"],
                            ["QualificationRequirements", "0..*", "0..*", "QualificationRequirement", "Skills"]
                        ]
                    )
                );
            }
        }

        /**
         * A BusinessPlan is an organized sequence of predetermined actions required to complete a future organizational objective.
         *
         * It is a type of document that typically references a schedule, physical and/or logical resources (assets and/or PowerSystemResources), locations, etc.
         *
         */
        class BusinessPlan extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.BusinessPlan;
                if (null == bucket)
                   cim_data.BusinessPlan = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BusinessPlan[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "BusinessPlan";
                var bucket = context.parsed.BusinessPlan;
                if (null == bucket)
                   context.parsed.BusinessPlan = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BusinessPlan_collapse" aria-expanded="true" aria-controls="BusinessPlan_collapse" style="margin-left: 10px;">BusinessPlan</a></legend>
                    <div id="BusinessPlan_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BusinessPlan_collapse" aria-expanded="true" aria-controls="{{id}}_BusinessPlan_collapse" style="margin-left: 10px;">BusinessPlan</a></legend>
                    <div id="{{id}}_BusinessPlan_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "BusinessPlan" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Enumeration of potential roles that might be played by one object relative to another.
         *
         */
        class Role extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Role;
                if (null == bucket)
                   cim_data.Role = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Role[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Role";
                base.parse_element (/<cim:Role.status>([\s\S]*?)<\/cim:Role.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:Role.type>([\s\S]*?)<\/cim:Role.type>/g, obj, "type", base.to_string, sub, context);
                var bucket = context.parsed.Role;
                if (null == bucket)
                   context.parsed.Role = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Role", "status", "status",  base.from_string, fields);
                base.export_element (obj, "Role", "type", "type",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Role_collapse" aria-expanded="true" aria-controls="Role_collapse" style="margin-left: 10px;">Role</a></legend>
                    <div id="Role_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Role_collapse" aria-expanded="true" aria-controls="{{id}}_Role_collapse" style="margin-left: 10px;">Role</a></legend>
                    <div id="{{id}}_Role_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Role" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;

                return (obj);
            }
        }

        /**
         * Role an organisation plays with respect to documents.
         *
         */
        class DocumentOrganisationRole extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DocumentOrganisationRole;
                if (null == bucket)
                   cim_data.DocumentOrganisationRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DocumentOrganisationRole[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "DocumentOrganisationRole";
                var bucket = context.parsed.DocumentOrganisationRole;
                if (null == bucket)
                   context.parsed.DocumentOrganisationRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DocumentOrganisationRole_collapse" aria-expanded="true" aria-controls="DocumentOrganisationRole_collapse" style="margin-left: 10px;">DocumentOrganisationRole</a></legend>
                    <div id="DocumentOrganisationRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DocumentOrganisationRole_collapse" aria-expanded="true" aria-controls="{{id}}_DocumentOrganisationRole_collapse" style="margin-left: 10px;">DocumentOrganisationRole</a></legend>
                    <div id="{{id}}_DocumentOrganisationRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "DocumentOrganisationRole" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Fraction specified explicitly with a numerator and denominator, which can be used to calculate the quotient.
         *
         */
        class Ratio extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Ratio;
                if (null == bucket)
                   cim_data.Ratio = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Ratio[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Ratio";
                base.parse_element (/<cim:Ratio.denominator>([\s\S]*?)<\/cim:Ratio.denominator>/g, obj, "denominator", base.to_float, sub, context);
                base.parse_element (/<cim:Ratio.numerator>([\s\S]*?)<\/cim:Ratio.numerator>/g, obj, "numerator", base.to_float, sub, context);
                var bucket = context.parsed.Ratio;
                if (null == bucket)
                   context.parsed.Ratio = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Ratio", "denominator", "denominator",  base.from_float, fields);
                base.export_element (obj, "Ratio", "numerator", "numerator",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Ratio_collapse" aria-expanded="true" aria-controls="Ratio_collapse" style="margin-left: 10px;">Ratio</a></legend>
                    <div id="Ratio_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominator}}<div><b>denominator</b>: {{denominator}}</div>{{/denominator}}
                    {{#numerator}}<div><b>numerator</b>: {{numerator}}</div>{{/numerator}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Ratio_collapse" aria-expanded="true" aria-controls="{{id}}_Ratio_collapse" style="margin-left: 10px;">Ratio</a></legend>
                    <div id="{{id}}_Ratio_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominator'>denominator: </label><div class='col-sm-8'><input id='{{id}}_denominator' class='form-control' type='text'{{#denominator}} value='{{denominator}}'{{/denominator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_numerator'>numerator: </label><div class='col-sm-8'><input id='{{id}}_numerator' class='form-control' type='text'{{#numerator}} value='{{numerator}}'{{/numerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Ratio" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominator").value; if ("" != temp) obj.denominator = temp;
                temp = document.getElementById (id + "_numerator").value; if ("" != temp) obj.numerator = temp;

                return (obj);
            }
        }

        /**
         * Craft of a person or a crew.
         *
         * Examples include overhead electric, underground electric, high pressure gas, etc. This ensures necessary knowledge and skills before being allowed to perform certain types of work.
         *
         */
        class Craft extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Craft;
                if (null == bucket)
                   cim_data.Craft = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Craft[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Craft";
                base.parse_element (/<cim:Craft.status>([\s\S]*?)<\/cim:Craft.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:Craft.type>([\s\S]*?)<\/cim:Craft.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:Craft.Capabilities\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Capabilities", sub, context);
                base.parse_attributes (/<cim:Craft.Skills\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Skills", sub, context);
                base.parse_attributes (/<cim:Craft.ErpPersons\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersons", sub, context);
                var bucket = context.parsed.Craft;
                if (null == bucket)
                   context.parsed.Craft = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Craft", "status", "status",  base.from_string, fields);
                base.export_element (obj, "Craft", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "Craft", "Capabilities", "Capabilities", fields);
                base.export_attributes (obj, "Craft", "Skills", "Skills", fields);
                base.export_attributes (obj, "Craft", "ErpPersons", "ErpPersons", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Craft_collapse" aria-expanded="true" aria-controls="Craft_collapse" style="margin-left: 10px;">Craft</a></legend>
                    <div id="Craft_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#Capabilities}}<div><b>Capabilities</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Capabilities}}
                    {{#Skills}}<div><b>Skills</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Skills}}
                    {{#ErpPersons}}<div><b>ErpPersons</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpPersons}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Capabilities) obj.Capabilities_string = obj.Capabilities.join ();
                if (obj.Skills) obj.Skills_string = obj.Skills.join ();
                if (obj.ErpPersons) obj.ErpPersons_string = obj.ErpPersons.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Capabilities_string;
                delete obj.Skills_string;
                delete obj.ErpPersons_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Craft_collapse" aria-expanded="true" aria-controls="{{id}}_Craft_collapse" style="margin-left: 10px;">Craft</a></legend>
                    <div id="{{id}}_Craft_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Capabilities'>Capabilities: </label><div class='col-sm-8'><input id='{{id}}_Capabilities' class='form-control' type='text'{{#Capabilities}} value='{{Capabilities}}_string'{{/Capabilities}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Skills'>Skills: </label><div class='col-sm-8'><input id='{{id}}_Skills' class='form-control' type='text'{{#Skills}} value='{{Skills}}_string'{{/Skills}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPersons'>ErpPersons: </label><div class='col-sm-8'><input id='{{id}}_ErpPersons' class='form-control' type='text'{{#ErpPersons}} value='{{ErpPersons}}_string'{{/ErpPersons}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Craft" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_Capabilities").value; if ("" != temp) obj.Capabilities = temp.split (",");
                temp = document.getElementById (id + "_Skills").value; if ("" != temp) obj.Skills = temp.split (",");
                temp = document.getElementById (id + "_ErpPersons").value; if ("" != temp) obj.ErpPersons = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Capabilities", "0..*", "0..*", "Capability", "Crafts"],
                            ["Skills", "0..*", "0..*", "Skill", "Crafts"],
                            ["ErpPersons", "0..*", "0..*", "OldPerson", "Crafts"]
                        ]
                    )
                );
            }
        }

        /**
         * General purpose information for name and other information to contact people.
         *
         */
        class OldPerson extends Common.Person
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OldPerson;
                if (null == bucket)
                   cim_data.OldPerson = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OldPerson[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Person.prototype.parse.call (this, context, sub);
                obj.cls = "OldPerson";
                base.parse_element (/<cim:OldPerson.status>([\s\S]*?)<\/cim:OldPerson.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:OldPerson.type>([\s\S]*?)<\/cim:OldPerson.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:OldPerson.Skills\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Skills", sub, context);
                base.parse_attribute (/<cim:OldPerson.CustomerData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerData", sub, context);
                base.parse_attribute (/<cim:OldPerson.ErpPersonnel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersonnel", sub, context);
                base.parse_attributes (/<cim:OldPerson.DocumentRoles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DocumentRoles", sub, context);
                base.parse_attributes (/<cim:OldPerson.MeasurementValues\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValues", sub, context);
                base.parse_attribute (/<cim:OldPerson.ErpCompetency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpCompetency", sub, context);
                base.parse_attributes (/<cim:OldPerson.LaborItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LaborItems", sub, context);
                base.parse_attributes (/<cim:OldPerson.Crafts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crafts", sub, context);
                base.parse_attributes (/<cim:OldPerson.OrganisationRoles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OrganisationRoles", sub, context);
                base.parse_attributes (/<cim:OldPerson.LandPropertyRoles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LandPropertyRoles", sub, context);
                var bucket = context.parsed.OldPerson;
                if (null == bucket)
                   context.parsed.OldPerson = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Person.prototype.export.call (this, obj, false);

                base.export_element (obj, "OldPerson", "status", "status",  base.from_string, fields);
                base.export_element (obj, "OldPerson", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "OldPerson", "Skills", "Skills", fields);
                base.export_attribute (obj, "OldPerson", "CustomerData", "CustomerData", fields);
                base.export_attribute (obj, "OldPerson", "ErpPersonnel", "ErpPersonnel", fields);
                base.export_attributes (obj, "OldPerson", "DocumentRoles", "DocumentRoles", fields);
                base.export_attributes (obj, "OldPerson", "MeasurementValues", "MeasurementValues", fields);
                base.export_attribute (obj, "OldPerson", "ErpCompetency", "ErpCompetency", fields);
                base.export_attributes (obj, "OldPerson", "LaborItems", "LaborItems", fields);
                base.export_attributes (obj, "OldPerson", "Crafts", "Crafts", fields);
                base.export_attributes (obj, "OldPerson", "OrganisationRoles", "OrganisationRoles", fields);
                base.export_attributes (obj, "OldPerson", "LandPropertyRoles", "LandPropertyRoles", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OldPerson_collapse" aria-expanded="true" aria-controls="OldPerson_collapse" style="margin-left: 10px;">OldPerson</a></legend>
                    <div id="OldPerson_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Person.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#Skills}}<div><b>Skills</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Skills}}
                    {{#CustomerData}}<div><b>CustomerData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerData}}&quot;);})'>{{CustomerData}}</a></div>{{/CustomerData}}
                    {{#ErpPersonnel}}<div><b>ErpPersonnel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpPersonnel}}&quot;);})'>{{ErpPersonnel}}</a></div>{{/ErpPersonnel}}
                    {{#DocumentRoles}}<div><b>DocumentRoles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DocumentRoles}}
                    {{#MeasurementValues}}<div><b>MeasurementValues</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MeasurementValues}}
                    {{#ErpCompetency}}<div><b>ErpCompetency</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpCompetency}}&quot;);})'>{{ErpCompetency}}</a></div>{{/ErpCompetency}}
                    {{#LaborItems}}<div><b>LaborItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LaborItems}}
                    {{#Crafts}}<div><b>Crafts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Crafts}}
                    {{#OrganisationRoles}}<div><b>OrganisationRoles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/OrganisationRoles}}
                    {{#LandPropertyRoles}}<div><b>LandPropertyRoles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LandPropertyRoles}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Skills) obj.Skills_string = obj.Skills.join ();
                if (obj.DocumentRoles) obj.DocumentRoles_string = obj.DocumentRoles.join ();
                if (obj.MeasurementValues) obj.MeasurementValues_string = obj.MeasurementValues.join ();
                if (obj.LaborItems) obj.LaborItems_string = obj.LaborItems.join ();
                if (obj.Crafts) obj.Crafts_string = obj.Crafts.join ();
                if (obj.OrganisationRoles) obj.OrganisationRoles_string = obj.OrganisationRoles.join ();
                if (obj.LandPropertyRoles) obj.LandPropertyRoles_string = obj.LandPropertyRoles.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Skills_string;
                delete obj.DocumentRoles_string;
                delete obj.MeasurementValues_string;
                delete obj.LaborItems_string;
                delete obj.Crafts_string;
                delete obj.OrganisationRoles_string;
                delete obj.LandPropertyRoles_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OldPerson_collapse" aria-expanded="true" aria-controls="{{id}}_OldPerson_collapse" style="margin-left: 10px;">OldPerson</a></legend>
                    <div id="{{id}}_OldPerson_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Person.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CustomerData'>CustomerData: </label><div class='col-sm-8'><input id='{{id}}_CustomerData' class='form-control' type='text'{{#CustomerData}} value='{{CustomerData}}'{{/CustomerData}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPersonnel'>ErpPersonnel: </label><div class='col-sm-8'><input id='{{id}}_ErpPersonnel' class='form-control' type='text'{{#ErpPersonnel}} value='{{ErpPersonnel}}'{{/ErpPersonnel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpCompetency'>ErpCompetency: </label><div class='col-sm-8'><input id='{{id}}_ErpCompetency' class='form-control' type='text'{{#ErpCompetency}} value='{{ErpCompetency}}'{{/ErpCompetency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LaborItems'>LaborItems: </label><div class='col-sm-8'><input id='{{id}}_LaborItems' class='form-control' type='text'{{#LaborItems}} value='{{LaborItems}}_string'{{/LaborItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crafts'>Crafts: </label><div class='col-sm-8'><input id='{{id}}_Crafts' class='form-control' type='text'{{#Crafts}} value='{{Crafts}}_string'{{/Crafts}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OldPerson" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_CustomerData").value; if ("" != temp) obj.CustomerData = temp;
                temp = document.getElementById (id + "_ErpPersonnel").value; if ("" != temp) obj.ErpPersonnel = temp;
                temp = document.getElementById (id + "_ErpCompetency").value; if ("" != temp) obj.ErpCompetency = temp;
                temp = document.getElementById (id + "_LaborItems").value; if ("" != temp) obj.LaborItems = temp.split (",");
                temp = document.getElementById (id + "_Crafts").value; if ("" != temp) obj.Crafts = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Skills", "0..*", "0..1", "Skill", "ErpPerson"],
                            ["CustomerData", "0..1", "0..*", "Customer", "ErpPersons"],
                            ["ErpPersonnel", "0..1", "0..*", "ErpPersonnel", "ErpPersons"],
                            ["DocumentRoles", "0..*", "1", "PersonDocumentRole", "Person"],
                            ["MeasurementValues", "0..*", "0..1", "MeasurementValue", "ErpPerson"],
                            ["ErpCompetency", "0..1", "0..*", "ErpCompetency", "ErpPersons"],
                            ["LaborItems", "0..*", "0..*", "LaborItem", "ErpPersons"],
                            ["Crafts", "0..*", "0..*", "Craft", "ErpPersons"],
                            ["OrganisationRoles", "0..*", "1", "PersonOrganisationRole", "ErpPerson"],
                            ["LandPropertyRoles", "0..*", "1", "PersonPropertyRole", "Person"]
                        ]
                    )
                );
            }
        }

        /**
         * Role an organisation plays with respect to persons.
         *
         */
        class PersonOrganisationRole extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PersonOrganisationRole;
                if (null == bucket)
                   cim_data.PersonOrganisationRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PersonOrganisationRole[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "PersonOrganisationRole";
                base.parse_element (/<cim:PersonOrganisationRole.clientID>([\s\S]*?)<\/cim:PersonOrganisationRole.clientID>/g, obj, "clientID", base.to_string, sub, context);
                base.parse_attribute (/<cim:PersonOrganisationRole.ErpPerson\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPerson", sub, context);
                var bucket = context.parsed.PersonOrganisationRole;
                if (null == bucket)
                   context.parsed.PersonOrganisationRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_element (obj, "PersonOrganisationRole", "clientID", "clientID",  base.from_string, fields);
                base.export_attribute (obj, "PersonOrganisationRole", "ErpPerson", "ErpPerson", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PersonOrganisationRole_collapse" aria-expanded="true" aria-controls="PersonOrganisationRole_collapse" style="margin-left: 10px;">PersonOrganisationRole</a></legend>
                    <div id="PersonOrganisationRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#clientID}}<div><b>clientID</b>: {{clientID}}</div>{{/clientID}}
                    {{#ErpPerson}}<div><b>ErpPerson</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpPerson}}&quot;);})'>{{ErpPerson}}</a></div>{{/ErpPerson}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PersonOrganisationRole_collapse" aria-expanded="true" aria-controls="{{id}}_PersonOrganisationRole_collapse" style="margin-left: 10px;">PersonOrganisationRole</a></legend>
                    <div id="{{id}}_PersonOrganisationRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_clientID'>clientID: </label><div class='col-sm-8'><input id='{{id}}_clientID' class='form-control' type='text'{{#clientID}} value='{{clientID}}'{{/clientID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpPerson'>ErpPerson: </label><div class='col-sm-8'><input id='{{id}}_ErpPerson' class='form-control' type='text'{{#ErpPerson}} value='{{ErpPerson}}'{{/ErpPerson}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PersonOrganisationRole" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_clientID").value; if ("" != temp) obj.clientID = temp;
                temp = document.getElementById (id + "_ErpPerson").value; if ("" != temp) obj.ErpPerson = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpPerson", "1", "0..*", "OldPerson", "OrganisationRoles"]
                        ]
                    )
                );
            }
        }

        /**
         * Bank account.
         *
         */
        class BankAccount extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.BankAccount;
                if (null == bucket)
                   cim_data.BankAccount = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BankAccount[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "BankAccount";
                base.parse_element (/<cim:BankAccount.accountNumber>([\s\S]*?)<\/cim:BankAccount.accountNumber>/g, obj, "accountNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:BankAccount.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceSupplier", sub, context);
                base.parse_attribute (/<cim:BankAccount.Bank\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bank", sub, context);
                var bucket = context.parsed.BankAccount;
                if (null == bucket)
                   context.parsed.BankAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "BankAccount", "accountNumber", "accountNumber",  base.from_string, fields);
                base.export_attribute (obj, "BankAccount", "ServiceSupplier", "ServiceSupplier", fields);
                base.export_attribute (obj, "BankAccount", "Bank", "Bank", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BankAccount_collapse" aria-expanded="true" aria-controls="BankAccount_collapse" style="margin-left: 10px;">BankAccount</a></legend>
                    <div id="BankAccount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#accountNumber}}<div><b>accountNumber</b>: {{accountNumber}}</div>{{/accountNumber}}
                    {{#ServiceSupplier}}<div><b>ServiceSupplier</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ServiceSupplier}}&quot;);})'>{{ServiceSupplier}}</a></div>{{/ServiceSupplier}}
                    {{#Bank}}<div><b>Bank</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Bank}}&quot;);})'>{{Bank}}</a></div>{{/Bank}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BankAccount_collapse" aria-expanded="true" aria-controls="{{id}}_BankAccount_collapse" style="margin-left: 10px;">BankAccount</a></legend>
                    <div id="{{id}}_BankAccount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accountNumber'>accountNumber: </label><div class='col-sm-8'><input id='{{id}}_accountNumber' class='form-control' type='text'{{#accountNumber}} value='{{accountNumber}}'{{/accountNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ServiceSupplier'>ServiceSupplier: </label><div class='col-sm-8'><input id='{{id}}_ServiceSupplier' class='form-control' type='text'{{#ServiceSupplier}} value='{{ServiceSupplier}}'{{/ServiceSupplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Bank'>Bank: </label><div class='col-sm-8'><input id='{{id}}_Bank' class='form-control' type='text'{{#Bank}} value='{{Bank}}'{{/Bank}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "BankAccount" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_accountNumber").value; if ("" != temp) obj.accountNumber = temp;
                temp = document.getElementById (id + "_ServiceSupplier").value; if ("" != temp) obj.ServiceSupplier = temp;
                temp = document.getElementById (id + "_Bank").value; if ("" != temp) obj.Bank = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ServiceSupplier", "0..1", "0..*", "ServiceSupplier", "BankAccounts"],
                            ["Bank", "0..1", "0..*", "Bank", "BankAccounts"]
                        ]
                    )
                );
            }
        }

        /**
         * Roles played between Persons and Documents.
         *
         */
        class PersonDocumentRole extends Role
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PersonDocumentRole;
                if (null == bucket)
                   cim_data.PersonDocumentRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PersonDocumentRole[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Role.prototype.parse.call (this, context, sub);
                obj.cls = "PersonDocumentRole";
                base.parse_attribute (/<cim:PersonDocumentRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Person", sub, context);
                var bucket = context.parsed.PersonDocumentRole;
                if (null == bucket)
                   context.parsed.PersonDocumentRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Role.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PersonDocumentRole", "Person", "Person", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PersonDocumentRole_collapse" aria-expanded="true" aria-controls="PersonDocumentRole_collapse" style="margin-left: 10px;">PersonDocumentRole</a></legend>
                    <div id="PersonDocumentRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Role.prototype.template.call (this) +
                    `
                    {{#Person}}<div><b>Person</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Person}}&quot;);})'>{{Person}}</a></div>{{/Person}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PersonDocumentRole_collapse" aria-expanded="true" aria-controls="{{id}}_PersonDocumentRole_collapse" style="margin-left: 10px;">PersonDocumentRole</a></legend>
                    <div id="{{id}}_PersonDocumentRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Role.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Person'>Person: </label><div class='col-sm-8'><input id='{{id}}_Person' class='form-control' type='text'{{#Person}} value='{{Person}}'{{/Person}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PersonDocumentRole" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Person").value; if ("" != temp) obj.Person = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Person", "1", "0..*", "OldPerson", "DocumentRoles"]
                        ]
                    )
                );
            }
        }

        /**
         * The role of a person relative to a given piece of property.
         *
         * Examples of roles include: owner, renter, contractor, etc.
         *
         */
        class PersonPropertyRole extends Role
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PersonPropertyRole;
                if (null == bucket)
                   cim_data.PersonPropertyRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PersonPropertyRole[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Role.prototype.parse.call (this, context, sub);
                obj.cls = "PersonPropertyRole";
                base.parse_attribute (/<cim:PersonPropertyRole.LandProperty\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LandProperty", sub, context);
                base.parse_attribute (/<cim:PersonPropertyRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Person", sub, context);
                var bucket = context.parsed.PersonPropertyRole;
                if (null == bucket)
                   context.parsed.PersonPropertyRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Role.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PersonPropertyRole", "LandProperty", "LandProperty", fields);
                base.export_attribute (obj, "PersonPropertyRole", "Person", "Person", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PersonPropertyRole_collapse" aria-expanded="true" aria-controls="PersonPropertyRole_collapse" style="margin-left: 10px;">PersonPropertyRole</a></legend>
                    <div id="PersonPropertyRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Role.prototype.template.call (this) +
                    `
                    {{#LandProperty}}<div><b>LandProperty</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LandProperty}}&quot;);})'>{{LandProperty}}</a></div>{{/LandProperty}}
                    {{#Person}}<div><b>Person</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Person}}&quot;);})'>{{Person}}</a></div>{{/Person}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PersonPropertyRole_collapse" aria-expanded="true" aria-controls="{{id}}_PersonPropertyRole_collapse" style="margin-left: 10px;">PersonPropertyRole</a></legend>
                    <div id="{{id}}_PersonPropertyRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Role.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LandProperty'>LandProperty: </label><div class='col-sm-8'><input id='{{id}}_LandProperty' class='form-control' type='text'{{#LandProperty}} value='{{LandProperty}}'{{/LandProperty}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Person'>Person: </label><div class='col-sm-8'><input id='{{id}}_Person' class='form-control' type='text'{{#Person}} value='{{Person}}'{{/Person}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PersonPropertyRole" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_LandProperty").value; if ("" != temp) obj.LandProperty = temp;
                temp = document.getElementById (id + "_Person").value; if ("" != temp) obj.Person = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LandProperty", "1", "0..*", "LandProperty", "ErpPersonRoles"],
                            ["Person", "1", "0..*", "OldPerson", "LandPropertyRoles"]
                        ]
                    )
                );
            }
        }

        return (
            {
                Role: Role,
                BusinessPlan: BusinessPlan,
                Skill: Skill,
                OldPerson: OldPerson,
                PropertyOrganisationRole: PropertyOrganisationRole,
                Craft: Craft,
                PersonPropertyRole: PersonPropertyRole,
                PersonOrganisationRole: PersonOrganisationRole,
                PersonDocumentRole: PersonDocumentRole,
                BankAccount: BankAccount,
                Bank: Bank,
                Ratio: Ratio,
                BusinessRole: BusinessRole,
                OldCrew: OldCrew,
                DocumentOrganisationRole: DocumentOrganisationRole,
                OrgOrgRole: OrgOrgRole
            }
        );
    }
);