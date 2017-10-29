define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * This package contains all core CIM Market Extensions required for market management systems.
     *
     */
    function (base, Common, Core)
    {

        /**
         * An identification of a set of values beeing adressed within a specific interval of time.
         *
         */
        function parse_Point (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Point";
            base.parse_element (/<cim:Point.position>([\s\S]*?)<\/cim:Point.position>/g, obj, "position", base.to_string, sub, context);
            base.parse_element (/<cim:Point.quality>([\s\S]*?)<\/cim:Point.quality>/g, obj, "quality", base.to_string, sub, context);
            base.parse_element (/<cim:Point.quantity>([\s\S]*?)<\/cim:Point.quantity>/g, obj, "quantity", base.to_string, sub, context);
            base.parse_element (/<cim:Point.secondaryQuantity>([\s\S]*?)<\/cim:Point.secondaryQuantity>/g, obj, "secondaryQuantity", base.to_string, sub, context);
            base.parse_attribute (/<cim:Point.Period\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Period", sub, context);
            bucket = context.parsed.Point;
            if (null == bucket)
                context.parsed.Point = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Point (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Point", "position", base.from_string, fields);
            base.export_element (obj, "Point", "quality", base.from_string, fields);
            base.export_element (obj, "Point", "quantity", base.from_string, fields);
            base.export_element (obj, "Point", "secondaryQuantity", base.from_string, fields);
            base.export_attribute (obj, "Point", "Period", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The motivation of an act.
         *
         */
        function parse_Reason (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Reason";
            base.parse_element (/<cim:Reason.code>([\s\S]*?)<\/cim:Reason.code>/g, obj, "code", base.to_string, sub, context);
            base.parse_element (/<cim:Reason.text>([\s\S]*?)<\/cim:Reason.text>/g, obj, "text", base.to_string, sub, context);
            bucket = context.parsed.Reason;
            if (null == bucket)
                context.parsed.Reason = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Reason (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Reason", "code", base.from_string, fields);
            base.export_element (obj, "Reason", "text", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The identification of the unit name for the time series quantities.
         *
         */
        function parse_Unit (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Unit";
            base.parse_element (/<cim:Unit.name>([\s\S]*?)<\/cim:Unit.name>/g, obj, "name", base.to_string, sub, context);
            bucket = context.parsed.Unit;
            if (null == bucket)
                context.parsed.Unit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Unit (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Unit", "name", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The date and or the time.
         *
         */
        function parse_DateAndOrTime (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DateAndOrTime";
            base.parse_element (/<cim:DateAndOrTime.date>([\s\S]*?)<\/cim:DateAndOrTime.date>/g, obj, "date", base.to_string, sub, context);
            base.parse_element (/<cim:DateAndOrTime.time>([\s\S]*?)<\/cim:DateAndOrTime.time>/g, obj, "time", base.to_string, sub, context);
            bucket = context.parsed.DateAndOrTime;
            if (null == bucket)
                context.parsed.DateAndOrTime = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DateAndOrTime (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "DateAndOrTime", "date", base.from_string, fields);
            base.export_element (obj, "DateAndOrTime", "time", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The type of a power system resource.
         *
         */
        function parse_MktPSRType (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PSRType (context, sub);
            obj.cls = "MktPSRType";
            base.parse_element (/<cim:MktPSRType.psrType>([\s\S]*?)<\/cim:MktPSRType.psrType>/g, obj, "psrType", base.to_string, sub, context);
            bucket = context.parsed.MktPSRType;
            if (null == bucket)
                context.parsed.MktPSRType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MktPSRType (obj, exporters, full)
        {
            var fields = exporters["PSRType"](obj, exporters, false);

            base.export_element (obj, "MktPSRType", "psrType", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The Area Control Error tariff type that is applied or used.
         *
         */
        function parse_AceTariffType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AceTariffType";
            base.parse_element (/<cim:AceTariffType.type>([\s\S]*?)<\/cim:AceTariffType.type>/g, obj, "type", base.to_string, sub, context);
            bucket = context.parsed.AceTariffType;
            if (null == bucket)
                context.parsed.AceTariffType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AceTariffType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AceTariffType", "type", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Electronic document containing the information necessary to satisfy a given business process set of requirements.
         *
         */
        function parse_MarketDocument (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "MarketDocument";
            bucket = context.parsed.MarketDocument;
            if (null == bucket)
                context.parsed.MarketDocument = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketDocument (obj, exporters, full)
        {
            var fields = exporters["Document"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An area of activity defined within the energy market.
         *
         */
        function parse_Domain (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Domain";
            bucket = context.parsed.Domain;
            if (null == bucket)
                context.parsed.Domain = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Domain (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The identification of an entity where energy products are measured or computed.
         *
         */
        function parse_MarketEvaluationPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MarketEvaluationPoint";
            bucket = context.parsed.MarketEvaluationPoint;
            if (null == bucket)
                context.parsed.MarketEvaluationPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketEvaluationPoint (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An identification  or eventually the contents of an agreement between two or more parties.
         *
         */
        function parse_MarketAgreement (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_MarketDocument (context, sub);
            obj.cls = "MarketAgreement";
            bucket = context.parsed.MarketAgreement;
            if (null == bucket)
                context.parsed.MarketAgreement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketAgreement (obj, exporters, full)
        {
            var fields = exporters["MarketDocument"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An identification of a time interval that may have a given resolution.
         *
         */
        function parse_Period (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Period";
            base.parse_element (/<cim:Period.resolution>([\s\S]*?)<\/cim:Period.resolution>/g, obj, "resolution", base.to_string, sub, context);
            base.parse_element (/<cim:Period.timeInterval>([\s\S]*?)<\/cim:Period.timeInterval>/g, obj, "timeInterval", base.to_string, sub, context);
            bucket = context.parsed.Period;
            if (null == bucket)
                context.parsed.Period = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Period (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Period", "resolution", base.from_string, fields);
            base.export_element (obj, "Period", "timeInterval", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The condition or position of an object with regard to its standing.
         *
         */
        function parse_MarketObjectStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketObjectStatus";
            base.parse_element (/<cim:MarketObjectStatus.status>([\s\S]*?)<\/cim:MarketObjectStatus.status>/g, obj, "status", base.to_string, sub, context);
            bucket = context.parsed.MarketObjectStatus;
            if (null == bucket)
                context.parsed.MarketObjectStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_MarketObjectStatus (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "MarketObjectStatus", "status", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A class used to provide information about an attribute.
         *
         */
        function parse_AttributeInstanceComponent (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AttributeInstanceComponent";
            base.parse_element (/<cim:AttributeInstanceComponent.attribute>([\s\S]*?)<\/cim:AttributeInstanceComponent.attribute>/g, obj, "attribute", base.to_string, sub, context);
            base.parse_element (/<cim:AttributeInstanceComponent.attributeValue>([\s\S]*?)<\/cim:AttributeInstanceComponent.attributeValue>/g, obj, "attributeValue", base.to_string, sub, context);
            base.parse_element (/<cim:AttributeInstanceComponent.position>([\s\S]*?)<\/cim:AttributeInstanceComponent.position>/g, obj, "position", base.to_string, sub, context);
            bucket = context.parsed.AttributeInstanceComponent;
            if (null == bucket)
                context.parsed.AttributeInstanceComponent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AttributeInstanceComponent (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "AttributeInstanceComponent", "attribute", base.from_string, fields);
            base.export_element (obj, "AttributeInstanceComponent", "attributeValue", base.from_string, fields);
            base.export_element (obj, "AttributeInstanceComponent", "position", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A class providing the identification and type of an auction.
         *
         */
        function parse_Auction (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Auction";
            base.parse_element (/<cim:Auction.allocationMode>([\s\S]*?)<\/cim:Auction.allocationMode>/g, obj, "allocationMode", base.to_string, sub, context);
            base.parse_element (/<cim:Auction.cancelled>([\s\S]*?)<\/cim:Auction.cancelled>/g, obj, "cancelled", base.to_string, sub, context);
            base.parse_element (/<cim:Auction.category>([\s\S]*?)<\/cim:Auction.category>/g, obj, "category", base.to_string, sub, context);
            base.parse_element (/<cim:Auction.paymentTerms>([\s\S]*?)<\/cim:Auction.paymentTerms>/g, obj, "paymentTerms", base.to_string, sub, context);
            base.parse_element (/<cim:Auction.rights>([\s\S]*?)<\/cim:Auction.rights>/g, obj, "rights", base.to_string, sub, context);
            base.parse_element (/<cim:Auction.type>([\s\S]*?)<\/cim:Auction.type>/g, obj, "type", base.to_string, sub, context);
            bucket = context.parsed.Auction;
            if (null == bucket)
                context.parsed.Auction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Auction (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Auction", "allocationMode", base.from_string, fields);
            base.export_element (obj, "Auction", "cancelled", base.from_string, fields);
            base.export_element (obj, "Auction", "category", base.from_string, fields);
            base.export_element (obj, "Auction", "paymentTerms", base.from_string, fields);
            base.export_element (obj, "Auction", "rights", base.from_string, fields);
            base.export_element (obj, "Auction", "type", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The cost corresponding to a specific measure and expressed in a currency.
         *
         */
        function parse_Price (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Price";
            base.parse_element (/<cim:Price.amount>([\s\S]*?)<\/cim:Price.amount>/g, obj, "amount", base.to_string, sub, context);
            base.parse_element (/<cim:Price.category>([\s\S]*?)<\/cim:Price.category>/g, obj, "category", base.to_string, sub, context);
            base.parse_element (/<cim:Price.direction>([\s\S]*?)<\/cim:Price.direction>/g, obj, "direction", base.to_string, sub, context);
            base.parse_attribute (/<cim:Price.Point\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Point", sub, context);
            bucket = context.parsed.Price;
            if (null == bucket)
                context.parsed.Price = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Price (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Price", "amount", base.from_string, fields);
            base.export_element (obj, "Price", "category", base.from_string, fields);
            base.export_element (obj, "Price", "direction", base.from_string, fields);
            base.export_attribute (obj, "Price", "Point", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The formal specification of a set of business transactions having the same business goal.
         *
         */
        function parse_Process (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Process";
            base.parse_element (/<cim:Process.classificationType>([\s\S]*?)<\/cim:Process.classificationType>/g, obj, "classificationType", base.to_string, sub, context);
            base.parse_element (/<cim:Process.processType>([\s\S]*?)<\/cim:Process.processType>/g, obj, "processType", base.to_string, sub, context);
            bucket = context.parsed.Process;
            if (null == bucket)
                context.parsed.Process = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Process (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Process", "classificationType", base.from_string, fields);
            base.export_element (obj, "Process", "processType", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A set of regular time-ordered measurements or values of quantitative nature of an individual or collective phenomenon taken at successive, in most cases equidistant, periods / points of time.
         *
         */
        function parse_TimeSeries (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TimeSeries";
            base.parse_element (/<cim:TimeSeries.businessType>([\s\S]*?)<\/cim:TimeSeries.businessType>/g, obj, "businessType", base.to_string, sub, context);
            base.parse_element (/<cim:TimeSeries.cancelledTS>([\s\S]*?)<\/cim:TimeSeries.cancelledTS>/g, obj, "cancelledTS", base.to_string, sub, context);
            base.parse_element (/<cim:TimeSeries.curveType>([\s\S]*?)<\/cim:TimeSeries.curveType>/g, obj, "curveType", base.to_string, sub, context);
            base.parse_element (/<cim:TimeSeries.objectAggregation>([\s\S]*?)<\/cim:TimeSeries.objectAggregation>/g, obj, "objectAggregation", base.to_string, sub, context);
            base.parse_element (/<cim:TimeSeries.product>([\s\S]*?)<\/cim:TimeSeries.product>/g, obj, "product", base.to_string, sub, context);
            base.parse_element (/<cim:TimeSeries.version>([\s\S]*?)<\/cim:TimeSeries.version>/g, obj, "version", base.to_string, sub, context);
            bucket = context.parsed.TimeSeries;
            if (null == bucket)
                context.parsed.TimeSeries = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TimeSeries (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "TimeSeries", "businessType", base.from_string, fields);
            base.export_element (obj, "TimeSeries", "cancelledTS", base.from_string, fields);
            base.export_element (obj, "TimeSeries", "curveType", base.from_string, fields);
            base.export_element (obj, "TimeSeries", "objectAggregation", base.from_string, fields);
            base.export_element (obj, "TimeSeries", "product", base.from_string, fields);
            base.export_element (obj, "TimeSeries", "version", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The coded identification of the direction of energy flow.
         *
         */
        function parse_FlowDirection (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FlowDirection";
            base.parse_element (/<cim:FlowDirection.direction>([\s\S]*?)<\/cim:FlowDirection.direction>/g, obj, "direction", base.to_string, sub, context);
            bucket = context.parsed.FlowDirection;
            if (null == bucket)
                context.parsed.FlowDirection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FlowDirection (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "FlowDirection", "direction", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The formal specification of specific characteristics related to a bid.
         *
         */
        function parse_BidTimeSeries (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TimeSeries (context, sub);
            obj.cls = "BidTimeSeries";
            base.parse_element (/<cim:BidTimeSeries.blockBid>([\s\S]*?)<\/cim:BidTimeSeries.blockBid>/g, obj, "blockBid", base.to_string, sub, context);
            base.parse_element (/<cim:BidTimeSeries.direction>([\s\S]*?)<\/cim:BidTimeSeries.direction>/g, obj, "direction", base.to_string, sub, context);
            base.parse_element (/<cim:BidTimeSeries.divisible>([\s\S]*?)<\/cim:BidTimeSeries.divisible>/g, obj, "divisible", base.to_string, sub, context);
            base.parse_element (/<cim:BidTimeSeries.linkedBidsIdentification>([\s\S]*?)<\/cim:BidTimeSeries.linkedBidsIdentification>/g, obj, "linkedBidsIdentification", base.to_string, sub, context);
            base.parse_element (/<cim:BidTimeSeries.minimumActivationQuantity>([\s\S]*?)<\/cim:BidTimeSeries.minimumActivationQuantity>/g, obj, "minimumActivationQuantity", base.to_string, sub, context);
            base.parse_element (/<cim:BidTimeSeries.stepIncrementQuantity>([\s\S]*?)<\/cim:BidTimeSeries.stepIncrementQuantity>/g, obj, "stepIncrementQuantity", base.to_string, sub, context);
            bucket = context.parsed.BidTimeSeries;
            if (null == bucket)
                context.parsed.BidTimeSeries = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_BidTimeSeries (obj, exporters, full)
        {
            var fields = exporters["TimeSeries"](obj, exporters, false);

            base.export_element (obj, "BidTimeSeries", "blockBid", base.from_string, fields);
            base.export_element (obj, "BidTimeSeries", "direction", base.from_string, fields);
            base.export_element (obj, "BidTimeSeries", "divisible", base.from_string, fields);
            base.export_element (obj, "BidTimeSeries", "linkedBidsIdentification", base.from_string, fields);
            base.export_element (obj, "BidTimeSeries", "minimumActivationQuantity", base.from_string, fields);
            base.export_element (obj, "BidTimeSeries", "stepIncrementQuantity", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_Price: parse_Price,
                parse_Point: parse_Point,
                parse_Auction: parse_Auction,
                parse_Reason: parse_Reason,
                parse_BidTimeSeries: parse_BidTimeSeries,
                export_BidTimeSeries: export_BidTimeSeries,
                export_Domain: export_Domain,
                export_MarketAgreement: export_MarketAgreement,
                export_Unit: export_Unit,
                export_FlowDirection: export_FlowDirection,
                export_AceTariffType: export_AceTariffType,
                export_MarketDocument: export_MarketDocument,
                export_Process: export_Process,
                export_Reason: export_Reason,
                parse_MarketEvaluationPoint: parse_MarketEvaluationPoint,
                export_DateAndOrTime: export_DateAndOrTime,
                parse_DateAndOrTime: parse_DateAndOrTime,
                export_MarketObjectStatus: export_MarketObjectStatus,
                export_Auction: export_Auction,
                export_Period: export_Period,
                parse_TimeSeries: parse_TimeSeries,
                parse_Domain: parse_Domain,
                parse_Process: parse_Process,
                parse_MktPSRType: parse_MktPSRType,
                export_MarketEvaluationPoint: export_MarketEvaluationPoint,
                parse_AttributeInstanceComponent: parse_AttributeInstanceComponent,
                export_AttributeInstanceComponent: export_AttributeInstanceComponent,
                export_MktPSRType: export_MktPSRType,
                parse_MarketAgreement: parse_MarketAgreement,
                parse_FlowDirection: parse_FlowDirection,
                parse_Unit: parse_Unit,
                parse_MarketObjectStatus: parse_MarketObjectStatus,
                parse_Period: parse_Period,
                parse_MarketDocument: parse_MarketDocument,
                export_Price: export_Price,
                parse_AceTariffType: parse_AceTariffType,
                export_TimeSeries: export_TimeSeries,
                export_Point: export_Point
            }
        );
    }
);