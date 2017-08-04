define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * This package contains all core CIM Market Extensions required for market management systems.
     */
    function (base, Common, Core)
    {

        /**
         * An identification of a set of values beeing adressed within a specific interval of time.
         */
        function parse_Point (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Point";
            /**
             * A sequential value representing the relative position within a given time interval.
             */
            obj["position"] = base.parse_element (/<cim:Point.position>([\s\S]*?)<\/cim:Point.position>/g, sub, context, true);
            /**
             * The quality of the information being provided.
             * This quality may be estimated, not available, as provided, etc.
             */
            obj["quality"] = base.parse_element (/<cim:Point.quality>([\s\S]*?)<\/cim:Point.quality>/g, sub, context, true);
            /**
             * Principal quantity identified for a point.
             */
            obj["quantity"] = base.parse_element (/<cim:Point.quantity>([\s\S]*?)<\/cim:Point.quantity>/g, sub, context, true);
            /**
             * Secondary quantity identified for a point.
             */
            obj["secondaryQuantity"] = base.parse_element (/<cim:Point.secondaryQuantity>([\s\S]*?)<\/cim:Point.secondaryQuantity>/g, sub, context, true);
            obj["Period"] = base.parse_attribute (/<cim:Point.Period\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Point;
            if (null == bucket)
                context.parsed.Point = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The motivation of an act.
         */
        function parse_Reason (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Reason";
            /**
             * The motivation of an act in coded form.
             */
            obj["code"] = base.parse_element (/<cim:Reason.code>([\s\S]*?)<\/cim:Reason.code>/g, sub, context, true);
            /**
             * The textual explanation corresponding to the reason code.
             */
            obj["text"] = base.parse_element (/<cim:Reason.text>([\s\S]*?)<\/cim:Reason.text>/g, sub, context, true);
            bucket = context.parsed.Reason;
            if (null == bucket)
                context.parsed.Reason = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The identification of the unit name for the time series quantities.
         */
        function parse_Unit (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Unit";
            /**
             * The coded representation of the unit.
             */
            obj["name"] = base.parse_element (/<cim:Unit.name>([\s\S]*?)<\/cim:Unit.name>/g, sub, context, true);
            bucket = context.parsed.Unit;
            if (null == bucket)
                context.parsed.Unit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The date and or the time.
         */
        function parse_DateAndOrTime (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DateAndOrTime";
            /**
             * Date as "yyyy-mm-dd", which conforms with ISO 8601
             */
            obj["date"] = base.parse_element (/<cim:DateAndOrTime.date>([\s\S]*?)<\/cim:DateAndOrTime.date>/g, sub, context, true);
            /**
             * Time as "hh:mm:ss.sssZ", which conforms with ISO 8601.
             */
            obj["time"] = base.parse_element (/<cim:DateAndOrTime.time>([\s\S]*?)<\/cim:DateAndOrTime.time>/g, sub, context, true);
            bucket = context.parsed.DateAndOrTime;
            if (null == bucket)
                context.parsed.DateAndOrTime = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The type of a power system resource.
         */
        function parse_MktPSRType (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PSRType (context, sub);
            obj.cls = "MktPSRType";
            /**
             * The coded type of a power system resource.
             */
            obj["psrType"] = base.parse_element (/<cim:MktPSRType.psrType>([\s\S]*?)<\/cim:MktPSRType.psrType>/g, sub, context, true);
            bucket = context.parsed.MktPSRType;
            if (null == bucket)
                context.parsed.MktPSRType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The Area Control Error tariff type that is applied or used.
         */
        function parse_AceTariffType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AceTariffType";
            /**
             * The coded type of an ACE tariff.
             */
            obj["type"] = base.parse_element (/<cim:AceTariffType.type>([\s\S]*?)<\/cim:AceTariffType.type>/g, sub, context, true);
            bucket = context.parsed.AceTariffType;
            if (null == bucket)
                context.parsed.AceTariffType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Electronic document containing the information necessary to satisfy a given business process set of requirements.
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

        /**
         * An area of activity defined within the energy market.
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

        /**
         * The identification of an entity where energy products are measured or computed.
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

        /**
         * An identification  or eventually the contents of an agreement between two or more parties.
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

        /**
         * An identification of a time interval that may have a given resolution.
         */
        function parse_Period (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Period";
            /**
             * The number of units of time that compose an individual step within a period.
             */
            obj["resolution"] = base.parse_element (/<cim:Period.resolution>([\s\S]*?)<\/cim:Period.resolution>/g, sub, context, true);
            /**
             * The start and end date and time for a given interval.
             */
            obj["timeInterval"] = base.parse_element (/<cim:Period.timeInterval>([\s\S]*?)<\/cim:Period.timeInterval>/g, sub, context, true);
            bucket = context.parsed.Period;
            if (null == bucket)
                context.parsed.Period = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The condition or position of an object with regard to its standing.
         */
        function parse_MarketObjectStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketObjectStatus";
            /**
             * The coded condition or position of an object with regard to its standing.
             */
            obj["status"] = base.parse_element (/<cim:MarketObjectStatus.status>([\s\S]*?)<\/cim:MarketObjectStatus.status>/g, sub, context, true);
            bucket = context.parsed.MarketObjectStatus;
            if (null == bucket)
                context.parsed.MarketObjectStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A class used to provide information about an attribute.
         */
        function parse_AttributeInstanceComponent (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AttributeInstanceComponent";
            /**
             * The identification of the formal name of an attribute.
             */
            obj["attribute"] = base.parse_element (/<cim:AttributeInstanceComponent.attribute>([\s\S]*?)<\/cim:AttributeInstanceComponent.attribute>/g, sub, context, true);
            /**
             * The instance value of the attribute.
             */
            obj["attributeValue"] = base.parse_element (/<cim:AttributeInstanceComponent.attributeValue>([\s\S]*?)<\/cim:AttributeInstanceComponent.attributeValue>/g, sub, context, true);
            /**
             * A sequential value representing a relative sequence number.
             */
            obj["position"] = base.parse_element (/<cim:AttributeInstanceComponent.position>([\s\S]*?)<\/cim:AttributeInstanceComponent.position>/g, sub, context, true);
            bucket = context.parsed.AttributeInstanceComponent;
            if (null == bucket)
                context.parsed.AttributeInstanceComponent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A class providing the identification and type of an auction.
         */
        function parse_Auction (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Auction";
            /**
             * Identification of the method of allocation in an auction.
             */
            obj["allocationMode"] = base.parse_element (/<cim:Auction.allocationMode>([\s\S]*?)<\/cim:Auction.allocationMode>/g, sub, context, true);
            /**
             * An indicator that signifies that the auction has been cancelled.
             */
            obj["cancelled"] = base.parse_element (/<cim:Auction.cancelled>([\s\S]*?)<\/cim:Auction.cancelled>/g, sub, context, true);
            /**
             * The product category of an auction.
             */
            obj["category"] = base.parse_element (/<cim:Auction.category>([\s\S]*?)<\/cim:Auction.category>/g, sub, context, true);
            /**
             * The terms which dictate the determination of the bid payment price.
             */
            obj["paymentTerms"] = base.parse_element (/<cim:Auction.paymentTerms>([\s\S]*?)<\/cim:Auction.paymentTerms>/g, sub, context, true);
            /**
             * The rights of use the transmission capacity acquired in an auction.
             */
            obj["rights"] = base.parse_element (/<cim:Auction.rights>([\s\S]*?)<\/cim:Auction.rights>/g, sub, context, true);
            /**
             * The kind of the Auction (e.g. implicit, explicit ...).
             */
            obj["type"] = base.parse_element (/<cim:Auction.type>([\s\S]*?)<\/cim:Auction.type>/g, sub, context, true);
            bucket = context.parsed.Auction;
            if (null == bucket)
                context.parsed.Auction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The cost corresponding to a specific measure and expressed in a currency.
         */
        function parse_Price (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Price";
            /**
             * A number of monetary units specified in a unit of currency.
             */
            obj["amount"] = base.parse_element (/<cim:Price.amount>([\s\S]*?)<\/cim:Price.amount>/g, sub, context, true);
            /**
             * The category of a price to be used in a price calculation.
             * The price category is mutually agreed between System Operators.
             */
            obj["category"] = base.parse_element (/<cim:Price.category>([\s\S]*?)<\/cim:Price.category>/g, sub, context, true);
            /**
             * The direction indicates whether a System Operator pays the Market Parties or inverse.
             */
            obj["direction"] = base.parse_element (/<cim:Price.direction>([\s\S]*?)<\/cim:Price.direction>/g, sub, context, true);
            obj["Point"] = base.parse_attribute (/<cim:Price.Point\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Price;
            if (null == bucket)
                context.parsed.Price = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The formal specification of a set of business transactions having the same business goal.
         */
        function parse_Process (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Process";
            /**
             * The classification mechanism used to group a set of objects together within a business process.
             * The grouping may be of a detailed or a summary nature.
             */
            obj["classificationType"] = base.parse_element (/<cim:Process.classificationType>([\s\S]*?)<\/cim:Process.classificationType>/g, sub, context, true);
            /**
             * The kind of business process.
             */
            obj["processType"] = base.parse_element (/<cim:Process.processType>([\s\S]*?)<\/cim:Process.processType>/g, sub, context, true);
            bucket = context.parsed.Process;
            if (null == bucket)
                context.parsed.Process = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A set of regular time-ordered measurements or values of quantitative nature of an individual or collective phenomenon taken at successive, in most cases equidistant, periods / points of time.
         */
        function parse_TimeSeries (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TimeSeries";
            /**
             * The identification of the nature of the time series.
             */
            obj["businessType"] = base.parse_element (/<cim:TimeSeries.businessType>([\s\S]*?)<\/cim:TimeSeries.businessType>/g, sub, context, true);
            /**
             * An indicator stating that the TimeSeries, identified by the mRID, is cancelled as well as all the values sent in a previous version of the TimeSeries in a previous document.
             */
            obj["cancelledTS"] = base.parse_element (/<cim:TimeSeries.cancelledTS>([\s\S]*?)<\/cim:TimeSeries.cancelledTS>/g, sub, context, true);
            /**
             * The coded representation of the type of curve being described.
             */
            obj["curveType"] = base.parse_element (/<cim:TimeSeries.curveType>([\s\S]*?)<\/cim:TimeSeries.curveType>/g, sub, context, true);
            /**
             * Identification of the object that is the common dominator used to aggregate a time series.
             */
            obj["objectAggregation"] = base.parse_element (/<cim:TimeSeries.objectAggregation>([\s\S]*?)<\/cim:TimeSeries.objectAggregation>/g, sub, context, true);
            /**
             * The type of the product such as Power, energy, reactive power, transport capacity that is the subject of the time series.
             */
            obj["product"] = base.parse_element (/<cim:TimeSeries.product>([\s\S]*?)<\/cim:TimeSeries.product>/g, sub, context, true);
            /**
             * Version of the time series.
             */
            obj["version"] = base.parse_element (/<cim:TimeSeries.version>([\s\S]*?)<\/cim:TimeSeries.version>/g, sub, context, true);
            bucket = context.parsed.TimeSeries;
            if (null == bucket)
                context.parsed.TimeSeries = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The coded identification of the direction of energy flow.
         */
        function parse_FlowDirection (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FlowDirection";
            /**
             * The coded identification of the direction of energy flow.
             */
            obj["direction"] = base.parse_element (/<cim:FlowDirection.direction>([\s\S]*?)<\/cim:FlowDirection.direction>/g, sub, context, true);
            bucket = context.parsed.FlowDirection;
            if (null == bucket)
                context.parsed.FlowDirection = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The formal specification of specific characteristics related to a bid.
         */
        function parse_BidTimeSeries (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TimeSeries (context, sub);
            obj.cls = "BidTimeSeries";
            /**
             * Indication that  the values in the period are considered as a whole.
             * They cannot be changed or subdivided.
             */
            obj["blockBid"] = base.parse_element (/<cim:BidTimeSeries.blockBid>([\s\S]*?)<\/cim:BidTimeSeries.blockBid>/g, sub, context, true);
            /**
             * The coded identification of the energy flow.
             */
            obj["direction"] = base.parse_element (/<cim:BidTimeSeries.direction>([\s\S]*?)<\/cim:BidTimeSeries.direction>/g, sub, context, true);
            /**
             * An indication whether or not each element of the bid may be partially accepted or not.
             */
            obj["divisible"] = base.parse_element (/<cim:BidTimeSeries.divisible>([\s\S]*?)<\/cim:BidTimeSeries.divisible>/g, sub, context, true);
            /**
             * Unique identification associated with all linked bids.
             */
            obj["linkedBidsIdentification"] = base.parse_element (/<cim:BidTimeSeries.linkedBidsIdentification>([\s\S]*?)<\/cim:BidTimeSeries.linkedBidsIdentification>/g, sub, context, true);
            /**
             * The minimum quantity of energy that can be activated at a given time interval.
             */
            obj["minimumActivationQuantity"] = base.parse_element (/<cim:BidTimeSeries.minimumActivationQuantity>([\s\S]*?)<\/cim:BidTimeSeries.minimumActivationQuantity>/g, sub, context, true);
            /**
             * The minimum increment that can be applied for an increase in an activation request.
             */
            obj["stepIncrementQuantity"] = base.parse_element (/<cim:BidTimeSeries.stepIncrementQuantity>([\s\S]*?)<\/cim:BidTimeSeries.stepIncrementQuantity>/g, sub, context, true);
            bucket = context.parsed.BidTimeSeries;
            if (null == bucket)
                context.parsed.BidTimeSeries = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_AttributeInstanceComponent: parse_AttributeInstanceComponent,
                parse_Price: parse_Price,
                parse_Point: parse_Point,
                parse_Auction: parse_Auction,
                parse_Reason: parse_Reason,
                parse_BidTimeSeries: parse_BidTimeSeries,
                parse_MarketAgreement: parse_MarketAgreement,
                parse_FlowDirection: parse_FlowDirection,
                parse_Unit: parse_Unit,
                parse_MarketObjectStatus: parse_MarketObjectStatus,
                parse_Period: parse_Period,
                parse_MarketDocument: parse_MarketDocument,
                parse_MarketEvaluationPoint: parse_MarketEvaluationPoint,
                parse_DateAndOrTime: parse_DateAndOrTime,
                parse_AceTariffType: parse_AceTariffType,
                parse_TimeSeries: parse_TimeSeries,
                parse_Domain: parse_Domain,
                parse_Process: parse_Process,
                parse_MktPSRType: parse_MktPSRType
            }
        );
    }
);