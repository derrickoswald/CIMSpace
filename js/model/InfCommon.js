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
                this._id = template.id;
                var bucket = cim_data.Bank;
                if (null == bucket)
                   cim_data.Bank = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Bank[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "Bank";
                base.parse_element (/<cim:Bank.bic>([\s\S]*?)<\/cim:Bank.bic>/g, obj, "bic", base.to_string, sub, context);
                base.parse_element (/<cim:Bank.iban>([\s\S]*?)<\/cim:Bank.iban>/g, obj, "iban", base.to_string, sub, context);

                var bucket = context.parsed.Bank;
                if (null == bucket)
                   context.parsed.Bank = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_element (obj, "Bank", "bic", base.from_string, fields);
                base.export_element (obj, "Bank", "iban", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Bank_collapse" aria-expanded="true" aria-controls="Bank_collapse" style="margin-left: 10px;">Bank</a></legend>
                    <div id="Bank_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#bic}}<div><b>bic</b>: {{bic}}</div>{{/bic}}
                    {{#iban}}<div><b>iban</b>: {{iban}}</div>{{/iban}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Bank_collapse" aria-expanded="true" aria-controls="Bank_collapse" style="margin-left: 10px;">Bank</a></legend>
                    <div id="Bank_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bic'>bic: </label><div class='col-sm-8'><input id='bic' class='form-control' type='text'{{#bic}} value='{{bic}}'{{/bic}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='iban'>iban: </label><div class='col-sm-8'><input id='iban' class='form-control' type='text'{{#iban}} value='{{iban}}'{{/iban}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.BusinessRole;
                if (null == bucket)
                   cim_data.BusinessRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BusinessRole[this._id];
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

                base.export_element (obj, "BusinessRole", "status", base.from_string, fields);
                base.export_element (obj, "BusinessRole", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BusinessRole_collapse" aria-expanded="true" aria-controls="BusinessRole_collapse" style="margin-left: 10px;">BusinessRole</a></legend>
                    <div id="BusinessRole_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BusinessRole_collapse" aria-expanded="true" aria-controls="BusinessRole_collapse" style="margin-left: 10px;">BusinessRole</a></legend>
                    <div id="BusinessRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.PropertyOrganisationRole;
                if (null == bucket)
                   cim_data.PropertyOrganisationRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PropertyOrganisationRole[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "PropertyOrganisationRole";

                var bucket = context.parsed.PropertyOrganisationRole;
                if (null == bucket)
                   context.parsed.PropertyOrganisationRole = bucket = {};
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PropertyOrganisationRole_collapse" aria-expanded="true" aria-controls="PropertyOrganisationRole_collapse" style="margin-left: 10px;">PropertyOrganisationRole</a></legend>
                    <div id="PropertyOrganisationRole_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PropertyOrganisationRole_collapse" aria-expanded="true" aria-controls="PropertyOrganisationRole_collapse" style="margin-left: 10px;">PropertyOrganisationRole</a></legend>
                    <div id="PropertyOrganisationRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.OldCrew;
                if (null == bucket)
                   cim_data.OldCrew = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OldCrew[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Crew.prototype.parse.call (this, context, sub);
                obj.cls = "OldCrew";
                base.parse_element (/<cim:OldCrew.type>([\s\S]*?)<\/cim:OldCrew.type>/g, obj, "type", base.to_string, sub, context);
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

                base.export_element (obj, "OldCrew", "type", base.from_string, fields);
                base.export_attribute (obj, "OldCrew", "Route", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OldCrew_collapse" aria-expanded="true" aria-controls="OldCrew_collapse" style="margin-left: 10px;">OldCrew</a></legend>
                    <div id="OldCrew_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Crew.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#Route}}<div><b>Route</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Route}}&quot;);})'>{{Route}}</a></div>{{/Route}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OldCrew_collapse" aria-expanded="true" aria-controls="OldCrew_collapse" style="margin-left: 10px;">OldCrew</a></legend>
                    <div id="OldCrew_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Crew.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Route'>Route: </label><div class='col-sm-8'><input id='Route' class='form-control' type='text'{{#Route}} value='{{Route}}'{{/Route}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.OrgOrgRole;
                if (null == bucket)
                   cim_data.OrgOrgRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OrgOrgRole[this._id];
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

                base.export_element (obj, "OrgOrgRole", "clientID", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OrgOrgRole_collapse" aria-expanded="true" aria-controls="OrgOrgRole_collapse" style="margin-left: 10px;">OrgOrgRole</a></legend>
                    <div id="OrgOrgRole_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OrgOrgRole_collapse" aria-expanded="true" aria-controls="OrgOrgRole_collapse" style="margin-left: 10px;">OrgOrgRole</a></legend>
                    <div id="OrgOrgRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clientID'>clientID: </label><div class='col-sm-8'><input id='clientID' class='form-control' type='text'{{#clientID}} value='{{clientID}}'{{/clientID}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.Skill;
                if (null == bucket)
                   cim_data.Skill = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Skill[this._id];
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

                var bucket = context.parsed.Skill;
                if (null == bucket)
                   context.parsed.Skill = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Skill", "certificationPeriod", base.from_string, fields);
                base.export_element (obj, "Skill", "effectiveDateTime", base.from_datetime, fields);
                base.export_element (obj, "Skill", "level", base.from_string, fields);
                base.export_attribute (obj, "Skill", "ErpPerson", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Skill_collapse" aria-expanded="true" aria-controls="Skill_collapse" style="margin-left: 10px;">Skill</a></legend>
                    <div id="Skill_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#certificationPeriod}}<div><b>certificationPeriod</b>: {{certificationPeriod}}</div>{{/certificationPeriod}}
                    {{#effectiveDateTime}}<div><b>effectiveDateTime</b>: {{effectiveDateTime}}</div>{{/effectiveDateTime}}
                    {{#level}}<div><b>level</b>: {{level}}</div>{{/level}}
                    {{#ErpPerson}}<div><b>ErpPerson</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpPerson}}&quot;);})'>{{ErpPerson}}</a></div>{{/ErpPerson}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.SkillLevelKind = []; if (!obj.level) obj.SkillLevelKind.push ({ id: '', selected: true}); for (var property in SkillLevelKind) obj.SkillLevelKind.push ({ id: property, selected: obj.level && obj.level.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SkillLevelKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Skill_collapse" aria-expanded="true" aria-controls="Skill_collapse" style="margin-left: 10px;">Skill</a></legend>
                    <div id="Skill_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='certificationPeriod'>certificationPeriod: </label><div class='col-sm-8'><input id='certificationPeriod' class='form-control' type='text'{{#certificationPeriod}} value='{{certificationPeriod}}'{{/certificationPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDateTime'>effectiveDateTime: </label><div class='col-sm-8'><input id='effectiveDateTime' class='form-control' type='text'{{#effectiveDateTime}} value='{{effectiveDateTime}}'{{/effectiveDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='level'>level: </label><div class='col-sm-8'><select id='level' class='form-control'>{{#SkillLevelKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SkillLevelKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpPerson'>ErpPerson: </label><div class='col-sm-8'><input id='ErpPerson' class='form-control' type='text'{{#ErpPerson}} value='{{ErpPerson}}'{{/ErpPerson}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.BusinessPlan;
                if (null == bucket)
                   cim_data.BusinessPlan = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BusinessPlan[this._id];
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BusinessPlan_collapse" aria-expanded="true" aria-controls="BusinessPlan_collapse" style="margin-left: 10px;">BusinessPlan</a></legend>
                    <div id="BusinessPlan_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BusinessPlan_collapse" aria-expanded="true" aria-controls="BusinessPlan_collapse" style="margin-left: 10px;">BusinessPlan</a></legend>
                    <div id="BusinessPlan_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.Role;
                if (null == bucket)
                   cim_data.Role = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Role[this._id];
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

                base.export_element (obj, "Role", "status", base.from_string, fields);
                base.export_element (obj, "Role", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Role_collapse" aria-expanded="true" aria-controls="Role_collapse" style="margin-left: 10px;">Role</a></legend>
                    <div id="Role_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Role_collapse" aria-expanded="true" aria-controls="Role_collapse" style="margin-left: 10px;">Role</a></legend>
                    <div id="Role_collapse" class="collapse in" style="margin-left: 10px;">
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
                this._id = template.id;
                var bucket = cim_data.DocumentOrganisationRole;
                if (null == bucket)
                   cim_data.DocumentOrganisationRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DocumentOrganisationRole[this._id];
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DocumentOrganisationRole_collapse" aria-expanded="true" aria-controls="DocumentOrganisationRole_collapse" style="margin-left: 10px;">DocumentOrganisationRole</a></legend>
                    <div id="DocumentOrganisationRole_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DocumentOrganisationRole_collapse" aria-expanded="true" aria-controls="DocumentOrganisationRole_collapse" style="margin-left: 10px;">DocumentOrganisationRole</a></legend>
                    <div id="DocumentOrganisationRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.Ratio;
                if (null == bucket)
                   cim_data.Ratio = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Ratio[this._id];
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

                base.export_element (obj, "Ratio", "denominator", base.from_float, fields);
                base.export_element (obj, "Ratio", "numerator", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Ratio_collapse" aria-expanded="true" aria-controls="Ratio_collapse" style="margin-left: 10px;">Ratio</a></legend>
                    <div id="Ratio_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Ratio_collapse" aria-expanded="true" aria-controls="Ratio_collapse" style="margin-left: 10px;">Ratio</a></legend>
                    <div id="Ratio_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='denominator'>denominator: </label><div class='col-sm-8'><input id='denominator' class='form-control' type='text'{{#denominator}} value='{{denominator}}'{{/denominator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='numerator'>numerator: </label><div class='col-sm-8'><input id='numerator' class='form-control' type='text'{{#numerator}} value='{{numerator}}'{{/numerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.Craft;
                if (null == bucket)
                   cim_data.Craft = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Craft[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Craft";
                base.parse_element (/<cim:Craft.status>([\s\S]*?)<\/cim:Craft.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:Craft.type>([\s\S]*?)<\/cim:Craft.type>/g, obj, "type", base.to_string, sub, context);

                var bucket = context.parsed.Craft;
                if (null == bucket)
                   context.parsed.Craft = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Craft", "status", base.from_string, fields);
                base.export_element (obj, "Craft", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Craft_collapse" aria-expanded="true" aria-controls="Craft_collapse" style="margin-left: 10px;">Craft</a></legend>
                    <div id="Craft_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Craft_collapse" aria-expanded="true" aria-controls="Craft_collapse" style="margin-left: 10px;">Craft</a></legend>
                    <div id="Craft_collapse" class="collapse in" style="margin-left: 10px;">
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
                this._id = template.id;
                var bucket = cim_data.OldPerson;
                if (null == bucket)
                   cim_data.OldPerson = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OldPerson[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Person.prototype.parse.call (this, context, sub);
                obj.cls = "OldPerson";
                base.parse_element (/<cim:OldPerson.status>([\s\S]*?)<\/cim:OldPerson.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:OldPerson.type>([\s\S]*?)<\/cim:OldPerson.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attribute (/<cim:OldPerson.CustomerData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerData", sub, context);
                base.parse_attribute (/<cim:OldPerson.ErpPersonnel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersonnel", sub, context);
                base.parse_attribute (/<cim:OldPerson.ErpCompetency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpCompetency", sub, context);

                var bucket = context.parsed.OldPerson;
                if (null == bucket)
                   context.parsed.OldPerson = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Person.prototype.export.call (this, obj, false);

                base.export_element (obj, "OldPerson", "status", base.from_string, fields);
                base.export_element (obj, "OldPerson", "type", base.from_string, fields);
                base.export_attribute (obj, "OldPerson", "CustomerData", fields);
                base.export_attribute (obj, "OldPerson", "ErpPersonnel", fields);
                base.export_attribute (obj, "OldPerson", "ErpCompetency", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OldPerson_collapse" aria-expanded="true" aria-controls="OldPerson_collapse" style="margin-left: 10px;">OldPerson</a></legend>
                    <div id="OldPerson_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Person.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#CustomerData}}<div><b>CustomerData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CustomerData}}&quot;);})'>{{CustomerData}}</a></div>{{/CustomerData}}
                    {{#ErpPersonnel}}<div><b>ErpPersonnel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpPersonnel}}&quot;);})'>{{ErpPersonnel}}</a></div>{{/ErpPersonnel}}
                    {{#ErpCompetency}}<div><b>ErpCompetency</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpCompetency}}&quot;);})'>{{ErpCompetency}}</a></div>{{/ErpCompetency}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OldPerson_collapse" aria-expanded="true" aria-controls="OldPerson_collapse" style="margin-left: 10px;">OldPerson</a></legend>
                    <div id="OldPerson_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Person.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CustomerData'>CustomerData: </label><div class='col-sm-8'><input id='CustomerData' class='form-control' type='text'{{#CustomerData}} value='{{CustomerData}}'{{/CustomerData}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpPersonnel'>ErpPersonnel: </label><div class='col-sm-8'><input id='ErpPersonnel' class='form-control' type='text'{{#ErpPersonnel}} value='{{ErpPersonnel}}'{{/ErpPersonnel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpCompetency'>ErpCompetency: </label><div class='col-sm-8'><input id='ErpCompetency' class='form-control' type='text'{{#ErpCompetency}} value='{{ErpCompetency}}'{{/ErpCompetency}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.PersonOrganisationRole;
                if (null == bucket)
                   cim_data.PersonOrganisationRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PersonOrganisationRole[this._id];
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

                base.export_element (obj, "PersonOrganisationRole", "clientID", base.from_string, fields);
                base.export_attribute (obj, "PersonOrganisationRole", "ErpPerson", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PersonOrganisationRole_collapse" aria-expanded="true" aria-controls="PersonOrganisationRole_collapse" style="margin-left: 10px;">PersonOrganisationRole</a></legend>
                    <div id="PersonOrganisationRole_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PersonOrganisationRole_collapse" aria-expanded="true" aria-controls="PersonOrganisationRole_collapse" style="margin-left: 10px;">PersonOrganisationRole</a></legend>
                    <div id="PersonOrganisationRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clientID'>clientID: </label><div class='col-sm-8'><input id='clientID' class='form-control' type='text'{{#clientID}} value='{{clientID}}'{{/clientID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpPerson'>ErpPerson: </label><div class='col-sm-8'><input id='ErpPerson' class='form-control' type='text'{{#ErpPerson}} value='{{ErpPerson}}'{{/ErpPerson}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.BankAccount;
                if (null == bucket)
                   cim_data.BankAccount = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BankAccount[this._id];
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

                base.export_element (obj, "BankAccount", "accountNumber", base.from_string, fields);
                base.export_attribute (obj, "BankAccount", "ServiceSupplier", fields);
                base.export_attribute (obj, "BankAccount", "Bank", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BankAccount_collapse" aria-expanded="true" aria-controls="BankAccount_collapse" style="margin-left: 10px;">BankAccount</a></legend>
                    <div id="BankAccount_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BankAccount_collapse" aria-expanded="true" aria-controls="BankAccount_collapse" style="margin-left: 10px;">BankAccount</a></legend>
                    <div id="BankAccount_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='accountNumber'>accountNumber: </label><div class='col-sm-8'><input id='accountNumber' class='form-control' type='text'{{#accountNumber}} value='{{accountNumber}}'{{/accountNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ServiceSupplier'>ServiceSupplier: </label><div class='col-sm-8'><input id='ServiceSupplier' class='form-control' type='text'{{#ServiceSupplier}} value='{{ServiceSupplier}}'{{/ServiceSupplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Bank'>Bank: </label><div class='col-sm-8'><input id='Bank' class='form-control' type='text'{{#Bank}} value='{{Bank}}'{{/Bank}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.PersonDocumentRole;
                if (null == bucket)
                   cim_data.PersonDocumentRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PersonDocumentRole[this._id];
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

                base.export_attribute (obj, "PersonDocumentRole", "Person", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PersonDocumentRole_collapse" aria-expanded="true" aria-controls="PersonDocumentRole_collapse" style="margin-left: 10px;">PersonDocumentRole</a></legend>
                    <div id="PersonDocumentRole_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PersonDocumentRole_collapse" aria-expanded="true" aria-controls="PersonDocumentRole_collapse" style="margin-left: 10px;">PersonDocumentRole</a></legend>
                    <div id="PersonDocumentRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Role.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Person'>Person: </label><div class='col-sm-8'><input id='Person' class='form-control' type='text'{{#Person}} value='{{Person}}'{{/Person}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.PersonPropertyRole;
                if (null == bucket)
                   cim_data.PersonPropertyRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PersonPropertyRole[this._id];
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

                base.export_attribute (obj, "PersonPropertyRole", "LandProperty", fields);
                base.export_attribute (obj, "PersonPropertyRole", "Person", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PersonPropertyRole_collapse" aria-expanded="true" aria-controls="PersonPropertyRole_collapse" style="margin-left: 10px;">PersonPropertyRole</a></legend>
                    <div id="PersonPropertyRole_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PersonPropertyRole_collapse" aria-expanded="true" aria-controls="PersonPropertyRole_collapse" style="margin-left: 10px;">PersonPropertyRole</a></legend>
                    <div id="PersonPropertyRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Role.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LandProperty'>LandProperty: </label><div class='col-sm-8'><input id='LandProperty' class='form-control' type='text'{{#LandProperty}} value='{{LandProperty}}'{{/LandProperty}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Person'>Person: </label><div class='col-sm-8'><input id='Person' class='form-control' type='text'{{#Person}} value='{{Person}}'{{/Person}}></div></div>
                    </div>
                    <fieldset>
                    `
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