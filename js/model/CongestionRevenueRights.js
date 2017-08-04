define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * Congestion rent is a major, highly volatile charge currently faced by many participants in the LMP-based electrical energy markets.
     * For this reason, the ISOs offer congestion revenue rights (CRR), also known as financial transmission rights or transmission congestion contracts. These are financial instruments that allow market participants to hedge against congestion charges when they schedule their generation, load and bilateral energy transactions.
     */
    function (base, Common, Core)
    {

        /**
         * CRRSegment represents a segment of a CRR in a particular time frame.
         * The segment class contains CRR kind, type, quantity, hedger type, time of use flag, and segment period.
         */
        function parse_CRRSegment (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "CRRSegment";
            /**
             * Dollar amount = quantity x clearingPrice
             */
            obj["amount"] = base.parse_element (/<cim:CRRSegment.amount>([\s\S]*?)<\/cim:CRRSegment.amount>/g, sub, context, true);
            /**
             * Clearing price of a CRR
             */
            obj["clearingPrice"] = base.parse_element (/<cim:CRRSegment.clearingPrice>([\s\S]*?)<\/cim:CRRSegment.clearingPrice>/g, sub, context, true);
            /**
             * segment end date time
             */
            obj["endDateTime"] = base.to_datetime (base.parse_element (/<cim:CRRSegment.endDateTime>([\s\S]*?)<\/cim:CRRSegment.endDateTime>/g, sub, context, true));
            /**
             * The MW amount associated with the CRR
             */
            obj["quantity"] = base.to_float (base.parse_element (/<cim:CRRSegment.quantity>([\s\S]*?)<\/cim:CRRSegment.quantity>/g, sub, context, true));
            /**
             * segment start date time
             */
            obj["startDateTime"] = base.to_datetime (base.parse_element (/<cim:CRRSegment.startDateTime>([\s\S]*?)<\/cim:CRRSegment.startDateTime>/g, sub, context, true));
            obj["CRR"] = base.parse_attribute (/<cim:CRRSegment.CRR\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CRRSegment;
            if (null == bucket)
                context.parsed.CRRSegment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Congestion Revenue Rights (CRR) class that is inherited from a Document class.
         * A CRR is a financial concept that is used to hedge congestion charges.
         */
        function parse_CRR (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "CRR";
            /**
             * CRR category represents 'PTP' for a point-to-point CRR, or 'NSR' for a Network Service Right .
             * If CRR category is 'PTP', both Source ID and Sink ID fields are required. If CRR category is 'NSR' only one field, either Source ID or Sink ID, shall be not null and the other shall be null. However, the 'NSR' category will include at least three records
             */
            obj["cRRcategory"] = base.parse_element (/<cim:CRR.cRRcategory>([\s\S]*?)<\/cim:CRR.cRRcategory>/g, sub, context, true);
            /**
             * Type of the CRR, from the possible type definitions in the CRR System (e.g. 'LSE', 'ETC').
             */
            obj["cRRtype"] = base.parse_element (/<cim:CRR.cRRtype>([\s\S]*?)<\/cim:CRR.cRRtype>/g, sub, context, true);
            /**
             * hedger type Obligation or Option
             */
            obj["hedgeType"] = base.parse_element (/<cim:CRR.hedgeType>([\s\S]*?)<\/cim:CRR.hedgeType>/g, sub, context, true);
            /**
             * Time of Use flag of the CRR - Peak (ON), Offpeak (OFF) or all 24 hours (24HR).
             */
            obj["timeOfUse"] = base.parse_element (/<cim:CRR.timeOfUse>([\s\S]*?)<\/cim:CRR.timeOfUse>/g, sub, context, true);
            /**
             * Segment of the CRR described in the current record
             */
            obj["tradeSliceID"] = base.parse_element (/<cim:CRR.tradeSliceID>([\s\S]*?)<\/cim:CRR.tradeSliceID>/g, sub, context, true);
            obj["CRRMarket"] = base.parse_attribute (/<cim:CRR.CRRMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["Flowgate"] = base.parse_attribute (/<cim:CRR.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CRR;
            if (null == bucket)
                context.parsed.CRR = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Identifies a way in which an organisation may participate with a defined Congestion Revenue Right (CRR).
         */
        function parse_CRROrgRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_OrganisationRole (context, sub);
            obj.cls = "CRROrgRole";
            /**
             * Kind of role the organisation is with regards to the congestion revenue rights.
             */
            obj["kind"] = base.parse_element (/<cim:CRROrgRole.kind>([\s\S]*?)<\/cim:CRROrgRole.kind>/g, sub, context, true);
            /**
             * Status of congestion revenue rights organisation role.
             */
            obj["status"] = base.parse_element (/<cim:CRROrgRole.status>([\s\S]*?)<\/cim:CRROrgRole.status>/g, sub, context, true);
            obj["CRR"] = base.parse_attribute (/<cim:CRROrgRole.CRR\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["MktOrganisation"] = base.parse_attribute (/<cim:CRROrgRole.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CRROrgRole;
            if (null == bucket)
                context.parsed.CRROrgRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_CRR: parse_CRR,
                parse_CRRSegment: parse_CRRSegment,
                parse_CRROrgRole: parse_CRROrgRole
            }
        );
    }
);