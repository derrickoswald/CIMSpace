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

            export (obj, exporters, full)
            {
                var fields = exporters["OrganisationRole"](obj, exporters, false);

                base.export_element (obj, "Bank", "bic", base.from_string, fields);
                base.export_element (obj, "Bank", "iban", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Kind of skill level.
         *
         */
        class SkillLevelKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SkillLevelKind;
                if (null == bucket)
                   cim_data.SkillLevelKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SkillLevelKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SkillLevelKind";
                base.parse_element (/<cim:SkillLevelKind.master>([\s\S]*?)<\/cim:SkillLevelKind.master>/g, obj, "master", base.to_string, sub, context);
                base.parse_element (/<cim:SkillLevelKind.standard>([\s\S]*?)<\/cim:SkillLevelKind.standard>/g, obj, "standard", base.to_string, sub, context);
                base.parse_element (/<cim:SkillLevelKind.apprentice>([\s\S]*?)<\/cim:SkillLevelKind.apprentice>/g, obj, "apprentice", base.to_string, sub, context);
                base.parse_element (/<cim:SkillLevelKind.other>([\s\S]*?)<\/cim:SkillLevelKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.SkillLevelKind;
                if (null == bucket)
                   context.parsed.SkillLevelKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "SkillLevelKind", "master", base.from_string, fields);
                base.export_element (obj, "SkillLevelKind", "standard", base.from_string, fields);
                base.export_element (obj, "SkillLevelKind", "apprentice", base.from_string, fields);
                base.export_element (obj, "SkillLevelKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["OrganisationRole"](obj, exporters, false);

                base.export_element (obj, "BusinessRole", "status", base.from_string, fields);
                base.export_element (obj, "BusinessRole", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["OrganisationRole"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["Crew"](obj, exporters, false);

                base.export_element (obj, "OldCrew", "type", base.from_string, fields);
                base.export_attribute (obj, "OldCrew", "Route", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["OrganisationRole"](obj, exporters, false);

                base.export_element (obj, "OrgOrgRole", "clientID", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_element (/<cim:Skill.level>([\s\S]*?)<\/cim:Skill.level>/g, obj, "level", base.to_string, sub, context);
                base.parse_attribute (/<cim:Skill.ErpPerson\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPerson", sub, context);

                var bucket = context.parsed.Skill;
                if (null == bucket)
                   context.parsed.Skill = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_element (obj, "Skill", "certificationPeriod", base.from_string, fields);
                base.export_element (obj, "Skill", "effectiveDateTime", base.from_datetime, fields);
                base.export_element (obj, "Skill", "level", base.from_string, fields);
                base.export_attribute (obj, "Skill", "ErpPerson", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "Role", "status", base.from_string, fields);
                base.export_element (obj, "Role", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["OrganisationRole"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "Ratio", "denominator", base.from_float, fields);
                base.export_element (obj, "Ratio", "numerator", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "Craft", "status", base.from_string, fields);
                base.export_element (obj, "Craft", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["Person"](obj, exporters, false);

                base.export_element (obj, "OldPerson", "status", base.from_string, fields);
                base.export_element (obj, "OldPerson", "type", base.from_string, fields);
                base.export_attribute (obj, "OldPerson", "CustomerData", fields);
                base.export_attribute (obj, "OldPerson", "ErpPersonnel", fields);
                base.export_attribute (obj, "OldPerson", "ErpCompetency", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["OrganisationRole"](obj, exporters, false);

                base.export_element (obj, "PersonOrganisationRole", "clientID", base.from_string, fields);
                base.export_attribute (obj, "PersonOrganisationRole", "ErpPerson", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_element (obj, "BankAccount", "accountNumber", base.from_string, fields);
                base.export_attribute (obj, "BankAccount", "ServiceSupplier", fields);
                base.export_attribute (obj, "BankAccount", "Bank", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["Role"](obj, exporters, false);

                base.export_attribute (obj, "PersonDocumentRole", "Person", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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

            export (obj, exporters, full)
            {
                var fields = exporters["Role"](obj, exporters, false);

                base.export_attribute (obj, "PersonPropertyRole", "LandProperty", fields);
                base.export_attribute (obj, "PersonPropertyRole", "Person", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                SkillLevelKind: SkillLevelKind,
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