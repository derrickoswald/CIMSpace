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
        function parse_Bank (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_OrganisationRole (context, sub);
            obj.cls = "Bank";
            base.parse_element (/<cim:Bank.bic>([\s\S]*?)<\/cim:Bank.bic>/g, obj, "bic", base.to_string, sub, context);
            base.parse_element (/<cim:Bank.iban>([\s\S]*?)<\/cim:Bank.iban>/g, obj, "iban", base.to_string, sub, context);
            bucket = context.parsed.Bank;
            if (null == bucket)
                context.parsed.Bank = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Bank (obj, exporters, full)
        {
            var fields = exporters["OrganisationRole"](obj, exporters, false);

            base.export_element (obj, "Bank", "bic", base.from_string, fields);
            base.export_element (obj, "Bank", "iban", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Roles played between Persons and Documents.
         *
         */
        function parse_PersonDocumentRole (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Role (context, sub);
            obj.cls = "PersonDocumentRole";
            base.parse_attribute (/<cim:PersonDocumentRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Person", sub, context);
            bucket = context.parsed.PersonDocumentRole;
            if (null == bucket)
                context.parsed.PersonDocumentRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PersonDocumentRole (obj, exporters, full)
        {
            var fields = exporters["Role"](obj, exporters, false);

            base.export_attribute (obj, "PersonDocumentRole", "Person", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of skill level.
         *
         */
        function parse_SkillLevelKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SkillLevelKind";
            base.parse_element (/<cim:SkillLevelKind.master>([\s\S]*?)<\/cim:SkillLevelKind.master>/g, obj, "master", base.to_string, sub, context);
            base.parse_element (/<cim:SkillLevelKind.standard>([\s\S]*?)<\/cim:SkillLevelKind.standard>/g, obj, "standard", base.to_string, sub, context);
            base.parse_element (/<cim:SkillLevelKind.apprentice>([\s\S]*?)<\/cim:SkillLevelKind.apprentice>/g, obj, "apprentice", base.to_string, sub, context);
            base.parse_element (/<cim:SkillLevelKind.other>([\s\S]*?)<\/cim:SkillLevelKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.SkillLevelKind;
            if (null == bucket)
                context.parsed.SkillLevelKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_SkillLevelKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "SkillLevelKind", "master", base.from_string, fields);
            base.export_element (obj, "SkillLevelKind", "standard", base.from_string, fields);
            base.export_element (obj, "SkillLevelKind", "apprentice", base.from_string, fields);
            base.export_element (obj, "SkillLevelKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A business role that this organisation plays.
         *
         * A single organisation typically performs many functions, each one described as a role.
         *
         */
        function parse_BusinessRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_OrganisationRole (context, sub);
            obj.cls = "BusinessRole";
            base.parse_element (/<cim:BusinessRole.status>([\s\S]*?)<\/cim:BusinessRole.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:BusinessRole.type>([\s\S]*?)<\/cim:BusinessRole.type>/g, obj, "type", base.to_string, sub, context);
            bucket = context.parsed.BusinessRole;
            if (null == bucket)
                context.parsed.BusinessRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BusinessRole (obj, exporters, full)
        {
            var fields = exporters["OrganisationRole"](obj, exporters, false);

            base.export_element (obj, "BusinessRole", "status", base.from_string, fields);
            base.export_element (obj, "BusinessRole", "type", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Role an organisation plays with respect to property (for example, the organisation may be the owner, renter, occupier, taxiing authority, etc.).
         *
         */
        function parse_PropertyOrganisationRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_OrganisationRole (context, sub);
            obj.cls = "PropertyOrganisationRole";
            bucket = context.parsed.PropertyOrganisationRole;
            if (null == bucket)
                context.parsed.PropertyOrganisationRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PropertyOrganisationRole (obj, exporters, full)
        {
            var fields = exporters["OrganisationRole"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A crew is a group of people with specific skills, tools, and vehicles.
         *
         */
        function parse_OldCrew (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Crew (context, sub);
            obj.cls = "OldCrew";
            base.parse_element (/<cim:OldCrew.type>([\s\S]*?)<\/cim:OldCrew.type>/g, obj, "type", base.to_string, sub, context);
            base.parse_attribute (/<cim:OldCrew.Route\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Route", sub, context);
            bucket = context.parsed.OldCrew;
            if (null == bucket)
                context.parsed.OldCrew = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OldCrew (obj, exporters, full)
        {
            var fields = exporters["Crew"](obj, exporters, false);

            base.export_element (obj, "OldCrew", "type", base.from_string, fields);
            base.export_attribute (obj, "OldCrew", "Route", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Roles played between Organisations and other Organisations.
         *
         * This includes role ups for ogranisations, cost centers, profit centers, regulatory reporting, etc.
         *
         */
        function parse_OrgOrgRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_OrganisationRole (context, sub);
            obj.cls = "OrgOrgRole";
            base.parse_element (/<cim:OrgOrgRole.clientID>([\s\S]*?)<\/cim:OrgOrgRole.clientID>/g, obj, "clientID", base.to_string, sub, context);
            bucket = context.parsed.OrgOrgRole;
            if (null == bucket)
                context.parsed.OrgOrgRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OrgOrgRole (obj, exporters, full)
        {
            var fields = exporters["OrganisationRole"](obj, exporters, false);

            base.export_element (obj, "OrgOrgRole", "clientID", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Proficiency level of a craft, which is required to operate or maintain a particular type of asset and/or perform certain types of work.
         *
         */
        function parse_Skill (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "Skill";
            base.parse_element (/<cim:Skill.certificationPeriod>([\s\S]*?)<\/cim:Skill.certificationPeriod>/g, obj, "certificationPeriod", base.to_string, sub, context);
            base.parse_element (/<cim:Skill.effectiveDateTime>([\s\S]*?)<\/cim:Skill.effectiveDateTime>/g, obj, "effectiveDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:Skill.level>([\s\S]*?)<\/cim:Skill.level>/g, obj, "level", base.to_string, sub, context);
            base.parse_attribute (/<cim:Skill.ErpPerson\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPerson", sub, context);
            bucket = context.parsed.Skill;
            if (null == bucket)
                context.parsed.Skill = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Skill (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "Skill", "certificationPeriod", base.from_string, fields);
            base.export_element (obj, "Skill", "effectiveDateTime", base.from_datetime, fields);
            base.export_element (obj, "Skill", "level", base.from_string, fields);
            base.export_attribute (obj, "Skill", "ErpPerson", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A BusinessPlan is an organized sequence of predetermined actions required to complete a future organizational objective.
         *
         * It is a type of document that typically references a schedule, physical and/or logical resources (assets and/or PowerSystemResources), locations, etc.
         *
         */
        function parse_BusinessPlan (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "BusinessPlan";
            bucket = context.parsed.BusinessPlan;
            if (null == bucket)
                context.parsed.BusinessPlan = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BusinessPlan (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The role of a person relative to a given piece of property.
         *
         * Examples of roles include: owner, renter, contractor, etc.
         *
         */
        function parse_PersonPropertyRole (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Role (context, sub);
            obj.cls = "PersonPropertyRole";
            base.parse_attribute (/<cim:PersonPropertyRole.LandProperty\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LandProperty", sub, context);
            base.parse_attribute (/<cim:PersonPropertyRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Person", sub, context);
            bucket = context.parsed.PersonPropertyRole;
            if (null == bucket)
                context.parsed.PersonPropertyRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PersonPropertyRole (obj, exporters, full)
        {
            var fields = exporters["Role"](obj, exporters, false);

            base.export_attribute (obj, "PersonPropertyRole", "LandProperty", fields);
            base.export_attribute (obj, "PersonPropertyRole", "Person", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Enumeration of potential roles that might be played by one object relative to another.
         *
         */
        function parse_Role (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Role";
            base.parse_element (/<cim:Role.status>([\s\S]*?)<\/cim:Role.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:Role.type>([\s\S]*?)<\/cim:Role.type>/g, obj, "type", base.to_string, sub, context);
            bucket = context.parsed.Role;
            if (null == bucket)
                context.parsed.Role = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Role (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Role", "status", base.from_string, fields);
            base.export_element (obj, "Role", "type", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Role an organisation plays with respect to documents.
         *
         */
        function parse_DocumentOrganisationRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_OrganisationRole (context, sub);
            obj.cls = "DocumentOrganisationRole";
            bucket = context.parsed.DocumentOrganisationRole;
            if (null == bucket)
                context.parsed.DocumentOrganisationRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DocumentOrganisationRole (obj, exporters, full)
        {
            var fields = exporters["OrganisationRole"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Fraction specified explicitly with a numerator and denominator, which can be used to calculate the quotient.
         *
         */
        function parse_Ratio (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Ratio";
            base.parse_element (/<cim:Ratio.denominator>([\s\S]*?)<\/cim:Ratio.denominator>/g, obj, "denominator", base.to_float, sub, context);
            base.parse_element (/<cim:Ratio.numerator>([\s\S]*?)<\/cim:Ratio.numerator>/g, obj, "numerator", base.to_float, sub, context);
            bucket = context.parsed.Ratio;
            if (null == bucket)
                context.parsed.Ratio = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Ratio (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Ratio", "denominator", base.from_float, fields);
            base.export_element (obj, "Ratio", "numerator", base.from_float, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Craft of a person or a crew.
         *
         * Examples include overhead electric, underground electric, high pressure gas, etc. This ensures necessary knowledge and skills before being allowed to perform certain types of work.
         *
         */
        function parse_Craft (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Craft";
            base.parse_element (/<cim:Craft.status>([\s\S]*?)<\/cim:Craft.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:Craft.type>([\s\S]*?)<\/cim:Craft.type>/g, obj, "type", base.to_string, sub, context);
            bucket = context.parsed.Craft;
            if (null == bucket)
                context.parsed.Craft = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Craft (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Craft", "status", base.from_string, fields);
            base.export_element (obj, "Craft", "type", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * General purpose information for name and other information to contact people.
         *
         */
        function parse_OldPerson (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Person (context, sub);
            obj.cls = "OldPerson";
            base.parse_element (/<cim:OldPerson.status>([\s\S]*?)<\/cim:OldPerson.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:OldPerson.type>([\s\S]*?)<\/cim:OldPerson.type>/g, obj, "type", base.to_string, sub, context);
            base.parse_attribute (/<cim:OldPerson.CustomerData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerData", sub, context);
            base.parse_attribute (/<cim:OldPerson.ErpPersonnel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersonnel", sub, context);
            base.parse_attribute (/<cim:OldPerson.ErpCompetency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpCompetency", sub, context);
            bucket = context.parsed.OldPerson;
            if (null == bucket)
                context.parsed.OldPerson = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OldPerson (obj, exporters, full)
        {
            var fields = exporters["Person"](obj, exporters, false);

            base.export_element (obj, "OldPerson", "status", base.from_string, fields);
            base.export_element (obj, "OldPerson", "type", base.from_string, fields);
            base.export_attribute (obj, "OldPerson", "CustomerData", fields);
            base.export_attribute (obj, "OldPerson", "ErpPersonnel", fields);
            base.export_attribute (obj, "OldPerson", "ErpCompetency", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Role an organisation plays with respect to persons.
         *
         */
        function parse_PersonOrganisationRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_OrganisationRole (context, sub);
            obj.cls = "PersonOrganisationRole";
            base.parse_element (/<cim:PersonOrganisationRole.clientID>([\s\S]*?)<\/cim:PersonOrganisationRole.clientID>/g, obj, "clientID", base.to_string, sub, context);
            base.parse_attribute (/<cim:PersonOrganisationRole.ErpPerson\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPerson", sub, context);
            bucket = context.parsed.PersonOrganisationRole;
            if (null == bucket)
                context.parsed.PersonOrganisationRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PersonOrganisationRole (obj, exporters, full)
        {
            var fields = exporters["OrganisationRole"](obj, exporters, false);

            base.export_element (obj, "PersonOrganisationRole", "clientID", base.from_string, fields);
            base.export_attribute (obj, "PersonOrganisationRole", "ErpPerson", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Bank account.
         *
         */
        function parse_BankAccount (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "BankAccount";
            base.parse_element (/<cim:BankAccount.accountNumber>([\s\S]*?)<\/cim:BankAccount.accountNumber>/g, obj, "accountNumber", base.to_string, sub, context);
            base.parse_attribute (/<cim:BankAccount.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceSupplier", sub, context);
            base.parse_attribute (/<cim:BankAccount.Bank\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bank", sub, context);
            bucket = context.parsed.BankAccount;
            if (null == bucket)
                context.parsed.BankAccount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BankAccount (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "BankAccount", "accountNumber", base.from_string, fields);
            base.export_attribute (obj, "BankAccount", "ServiceSupplier", fields);
            base.export_attribute (obj, "BankAccount", "Bank", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_PersonOrganisationRole: parse_PersonOrganisationRole,
                export_SkillLevelKind: export_SkillLevelKind,
                parse_OldCrew: parse_OldCrew,
                parse_DocumentOrganisationRole: parse_DocumentOrganisationRole,
                export_Ratio: export_Ratio,
                export_PropertyOrganisationRole: export_PropertyOrganisationRole,
                export_PersonDocumentRole: export_PersonDocumentRole,
                parse_BusinessPlan: parse_BusinessPlan,
                export_Bank: export_Bank,
                export_Skill: export_Skill,
                export_Role: export_Role,
                parse_BankAccount: parse_BankAccount,
                parse_OldPerson: parse_OldPerson,
                export_Craft: export_Craft,
                export_OldCrew: export_OldCrew,
                export_OrgOrgRole: export_OrgOrgRole,
                export_BusinessPlan: export_BusinessPlan,
                export_BankAccount: export_BankAccount,
                parse_Skill: parse_Skill,
                parse_BusinessRole: parse_BusinessRole,
                export_BusinessRole: export_BusinessRole,
                export_PersonPropertyRole: export_PersonPropertyRole,
                export_OldPerson: export_OldPerson,
                parse_PersonDocumentRole: parse_PersonDocumentRole,
                parse_SkillLevelKind: parse_SkillLevelKind,
                parse_PersonPropertyRole: parse_PersonPropertyRole,
                parse_OrgOrgRole: parse_OrgOrgRole,
                export_PersonOrganisationRole: export_PersonOrganisationRole,
                export_DocumentOrganisationRole: export_DocumentOrganisationRole,
                parse_Craft: parse_Craft,
                parse_Bank: parse_Bank,
                parse_PropertyOrganisationRole: parse_PropertyOrganisationRole,
                parse_Ratio: parse_Ratio,
                parse_Role: parse_Role
            }
        );
    }
);