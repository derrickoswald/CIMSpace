define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * Congestion rent is a major, highly volatile charge currently faced by many participants in the LMP-based electrical energy markets.
     *
     * For this reason, the ISOs offer congestion revenue rights (CRR), also known as financial transmission rights or transmission congestion contracts. These are financial instruments that allow market participants to hedge against congestion charges when they schedule their generation, load and bilateral energy transactions.
     *
     */
    function (base, Common, Core)
    {

        /**
         * CRRSegment represents a segment of a CRR in a particular time frame.
         *
         * The segment class contains CRR kind, type, quantity, hedger type, time of use flag, and segment period.
         *
         */
        function parse_CRRSegment (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "CRRSegment";
            base.parse_element (/<cim:CRRSegment.amount>([\s\S]*?)<\/cim:CRRSegment.amount>/g, obj, "amount", base.to_string, sub, context);
            base.parse_element (/<cim:CRRSegment.clearingPrice>([\s\S]*?)<\/cim:CRRSegment.clearingPrice>/g, obj, "clearingPrice", base.to_string, sub, context);
            base.parse_element (/<cim:CRRSegment.endDateTime>([\s\S]*?)<\/cim:CRRSegment.endDateTime>/g, obj, "endDateTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:CRRSegment.quantity>([\s\S]*?)<\/cim:CRRSegment.quantity>/g, obj, "quantity", base.to_float, sub, context);
            base.parse_element (/<cim:CRRSegment.startDateTime>([\s\S]*?)<\/cim:CRRSegment.startDateTime>/g, obj, "startDateTime", base.to_datetime, sub, context);
            base.parse_attribute (/<cim:CRRSegment.CRR\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CRR", sub, context);
            bucket = context.parsed.CRRSegment;
            if (null == bucket)
                context.parsed.CRRSegment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CRRSegment (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "CRRSegment", "amount", base.from_string, fields);
            base.export_element (obj, "CRRSegment", "clearingPrice", base.from_string, fields);
            base.export_element (obj, "CRRSegment", "endDateTime", base.from_datetime, fields);
            base.export_element (obj, "CRRSegment", "quantity", base.from_float, fields);
            base.export_element (obj, "CRRSegment", "startDateTime", base.from_datetime, fields);
            base.export_attribute (obj, "CRRSegment", "CRR", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Congestion Revenue Rights (CRR) class that is inherited from a Document class.
         *
         * A CRR is a financial concept that is used to hedge congestion charges.
         *
         */
        function parse_CRR (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "CRR";
            base.parse_element (/<cim:CRR.cRRcategory>([\s\S]*?)<\/cim:CRR.cRRcategory>/g, obj, "cRRcategory", base.to_string, sub, context);
            base.parse_element (/<cim:CRR.cRRtype>([\s\S]*?)<\/cim:CRR.cRRtype>/g, obj, "cRRtype", base.to_string, sub, context);
            base.parse_element (/<cim:CRR.hedgeType>([\s\S]*?)<\/cim:CRR.hedgeType>/g, obj, "hedgeType", base.to_string, sub, context);
            base.parse_element (/<cim:CRR.timeOfUse>([\s\S]*?)<\/cim:CRR.timeOfUse>/g, obj, "timeOfUse", base.to_string, sub, context);
            base.parse_element (/<cim:CRR.tradeSliceID>([\s\S]*?)<\/cim:CRR.tradeSliceID>/g, obj, "tradeSliceID", base.to_string, sub, context);
            base.parse_attribute (/<cim:CRR.CRRMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CRRMarket", sub, context);
            base.parse_attribute (/<cim:CRR.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
            bucket = context.parsed.CRR;
            if (null == bucket)
                context.parsed.CRR = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CRR (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            base.export_element (obj, "CRR", "cRRcategory", base.from_string, fields);
            base.export_element (obj, "CRR", "cRRtype", base.from_string, fields);
            base.export_element (obj, "CRR", "hedgeType", base.from_string, fields);
            base.export_element (obj, "CRR", "timeOfUse", base.from_string, fields);
            base.export_element (obj, "CRR", "tradeSliceID", base.from_string, fields);
            base.export_attribute (obj, "CRR", "CRRMarket", fields);
            base.export_attribute (obj, "CRR", "Flowgate", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Identifies a way in which an organisation may participate with a defined Congestion Revenue Right (CRR).
         *
         */
        function parse_CRROrgRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_OrganisationRole (context, sub);
            obj.cls = "CRROrgRole";
            base.parse_element (/<cim:CRROrgRole.kind>([\s\S]*?)<\/cim:CRROrgRole.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_element (/<cim:CRROrgRole.status>([\s\S]*?)<\/cim:CRROrgRole.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_attribute (/<cim:CRROrgRole.CRR\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CRR", sub, context);
            base.parse_attribute (/<cim:CRROrgRole.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktOrganisation", sub, context);
            bucket = context.parsed.CRROrgRole;
            if (null == bucket)
                context.parsed.CRROrgRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_CRROrgRole (obj, exporters, full)
        {
            var fields = exporters["OrganisationRole"](obj, exporters, false);

            base.export_element (obj, "CRROrgRole", "kind", base.from_string, fields);
            base.export_element (obj, "CRROrgRole", "status", base.from_string, fields);
            base.export_attribute (obj, "CRROrgRole", "CRR", fields);
            base.export_attribute (obj, "CRROrgRole", "MktOrganisation", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_CRR: parse_CRR,
                export_CRRSegment: export_CRRSegment,
                export_CRR: export_CRR,
                export_CRROrgRole: export_CRROrgRole,
                parse_CRRSegment: parse_CRRSegment,
                parse_CRROrgRole: parse_CRROrgRole
            }
        );
    }
);