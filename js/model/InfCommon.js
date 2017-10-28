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
            /**
             * Bank identifier code as defined in ISO 9362; for use in countries wher IBAN is not yet in operation.
             *
             */
            base.parse_element (/<cim:Bank.bic>([\s\S]*?)<\/cim:Bank.bic>/g, obj, "bic", base.to_string, sub, context);

            /**
             * International bank account number defined in ISO 13616; for countries where IBAN is not in operation, the existing BIC or SWIFT codes may be used instead (see ISO 9362).
             *
             */
            base.parse_element (/<cim:Bank.iban>([\s\S]*?)<\/cim:Bank.iban>/g, obj, "iban", base.to_string, sub, context);

            bucket = context.parsed.Bank;
            if (null == bucket)
                context.parsed.Bank = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:PersonDocumentRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Person", sub, context, true);

            bucket = context.parsed.PersonDocumentRole;
            if (null == bucket)
                context.parsed.PersonDocumentRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

            /**
             * Classification by utility's corporate standards and practices.
             *
             */
            base.parse_element (/<cim:BusinessRole.type>([\s\S]*?)<\/cim:BusinessRole.type>/g, obj, "type", base.to_string, sub, context);

            bucket = context.parsed.BusinessRole;
            if (null == bucket)
                context.parsed.BusinessRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Classification by utility's work management standards and practices.
             *
             */
            base.parse_element (/<cim:OldCrew.type>([\s\S]*?)<\/cim:OldCrew.type>/g, obj, "type", base.to_string, sub, context);

            base.parse_attribute (/<cim:OldCrew.Route\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Route", sub, context, true);

            bucket = context.parsed.OldCrew;
            if (null == bucket)
                context.parsed.OldCrew = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Identifiers of the organisation held by another organisation, such as a government agency (federal, state, province, city, county), financial institution (Dun and Bradstreet), etc.
             *
             */
            base.parse_element (/<cim:OrgOrgRole.clientID>([\s\S]*?)<\/cim:OrgOrgRole.clientID>/g, obj, "clientID", base.to_string, sub, context);

            bucket = context.parsed.OrgOrgRole;
            if (null == bucket)
                context.parsed.OrgOrgRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Interval between the certification and its expiry.
             *
             */
            base.parse_element (/<cim:Skill.certificationPeriod>([\s\S]*?)<\/cim:Skill.certificationPeriod>/g, obj, "certificationPeriod", base.to_string, sub, context);

            /**
             * Date and time the skill became effective.
             *
             */
            base.parse_element (/<cim:Skill.effectiveDateTime>([\s\S]*?)<\/cim:Skill.effectiveDateTime>/g, obj, "effectiveDateTime", base.to_datetime, sub, context);

            /**
             * Level of skill for a Craft.
             *
             */
            base.parse_element (/<cim:Skill.level>([\s\S]*?)<\/cim:Skill.level>/g, obj, "level", base.to_string, sub, context);

            base.parse_attribute (/<cim:Skill.ErpPerson\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPerson", sub, context, true);

            bucket = context.parsed.Skill;
            if (null == bucket)
                context.parsed.Skill = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            base.parse_attribute (/<cim:PersonPropertyRole.LandProperty\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LandProperty", sub, context, true);

            base.parse_attribute (/<cim:PersonPropertyRole.Person\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Person", sub, context, true);

            bucket = context.parsed.PersonPropertyRole;
            if (null == bucket)
                context.parsed.PersonPropertyRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

            /**
             * Type of role.
             *
             */
            base.parse_element (/<cim:Role.type>([\s\S]*?)<\/cim:Role.type>/g, obj, "type", base.to_string, sub, context);

            bucket = context.parsed.Role;
            if (null == bucket)
                context.parsed.Role = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The part of a fraction that is below the line and that functions as the divisor of the numerator.
             *
             */
            base.parse_element (/<cim:Ratio.denominator>([\s\S]*?)<\/cim:Ratio.denominator>/g, obj, "denominator", base.to_float, sub, context);

            /**
             * The part of a fraction that is above the line and signifies the number to be divided by the denominator.
             *
             */
            base.parse_element (/<cim:Ratio.numerator>([\s\S]*?)<\/cim:Ratio.numerator>/g, obj, "numerator", base.to_float, sub, context);

            bucket = context.parsed.Ratio;
            if (null == bucket)
                context.parsed.Ratio = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

            /**
             * Classification by utility's work mangement standards and practices.
             *
             */
            base.parse_element (/<cim:Craft.type>([\s\S]*?)<\/cim:Craft.type>/g, obj, "type", base.to_string, sub, context);

            bucket = context.parsed.Craft;
            if (null == bucket)
                context.parsed.Craft = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

            /**
             * Utility-specific classification for this person, according to the utility's corporate standards and practices.
             *
             * Examples include employee, contractor, agent, not affiliated, etc.
             *
             */
            base.parse_element (/<cim:OldPerson.type>([\s\S]*?)<\/cim:OldPerson.type>/g, obj, "type", base.to_string, sub, context);

            base.parse_attribute (/<cim:OldPerson.CustomerData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerData", sub, context, true);

            base.parse_attribute (/<cim:OldPerson.ErpPersonnel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersonnel", sub, context, true);

            base.parse_attribute (/<cim:OldPerson.ErpCompetency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpCompetency", sub, context, true);

            bucket = context.parsed.OldPerson;
            if (null == bucket)
                context.parsed.OldPerson = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Identifiers of the person held by an organisation, such as a government agency (federal, state, province, city, county), financial institutions, etc.
             *
             */
            base.parse_element (/<cim:PersonOrganisationRole.clientID>([\s\S]*?)<\/cim:PersonOrganisationRole.clientID>/g, obj, "clientID", base.to_string, sub, context);

            base.parse_attribute (/<cim:PersonOrganisationRole.ErpPerson\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPerson", sub, context, true);

            bucket = context.parsed.PersonOrganisationRole;
            if (null == bucket)
                context.parsed.PersonOrganisationRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Account reference number.
             *
             */
            base.parse_element (/<cim:BankAccount.accountNumber>([\s\S]*?)<\/cim:BankAccount.accountNumber>/g, obj, "accountNumber", base.to_string, sub, context);

            /**
             * ServiceSupplier that is owner of this BankAccount.
             *
             */
            base.parse_attribute (/<cim:BankAccount.ServiceSupplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ServiceSupplier", sub, context, true);

            /**
             * Bank that provides this BankAccount.
             *
             */
            base.parse_attribute (/<cim:BankAccount.Bank\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bank", sub, context, true);

            bucket = context.parsed.BankAccount;
            if (null == bucket)
                context.parsed.BankAccount = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_PersonOrganisationRole: parse_PersonOrganisationRole,
                parse_Skill: parse_Skill,
                parse_BusinessRole: parse_BusinessRole,
                parse_OldCrew: parse_OldCrew,
                parse_PersonDocumentRole: parse_PersonDocumentRole,
                parse_PersonPropertyRole: parse_PersonPropertyRole,
                parse_SkillLevelKind: parse_SkillLevelKind,
                parse_DocumentOrganisationRole: parse_DocumentOrganisationRole,
                parse_OrgOrgRole: parse_OrgOrgRole,
                parse_BusinessPlan: parse_BusinessPlan,
                parse_Bank: parse_Bank,
                parse_Craft: parse_Craft,
                parse_BankAccount: parse_BankAccount,
                parse_PropertyOrganisationRole: parse_PropertyOrganisationRole,
                parse_OldPerson: parse_OldPerson,
                parse_Ratio: parse_Ratio,
                parse_Role: parse_Role
            }
        );
    }
);