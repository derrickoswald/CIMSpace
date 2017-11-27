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
        class Point extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Point;
                if (null == bucket)
                   cim_data.Point = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Point[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Point";
                base.parse_element (/<cim:Point.position>([\s\S]*?)<\/cim:Point.position>/g, obj, "position", base.to_string, sub, context);
                base.parse_element (/<cim:Point.quality>([\s\S]*?)<\/cim:Point.quality>/g, obj, "quality", base.to_string, sub, context);
                base.parse_element (/<cim:Point.quantity>([\s\S]*?)<\/cim:Point.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:Point.secondaryQuantity>([\s\S]*?)<\/cim:Point.secondaryQuantity>/g, obj, "secondaryQuantity", base.to_string, sub, context);
                base.parse_attribute (/<cim:Point.Period\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Period", sub, context);

                var bucket = context.parsed.Point;
                if (null == bucket)
                   context.parsed.Point = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Point", "position", base.from_string, fields);
                base.export_element (obj, "Point", "quality", base.from_string, fields);
                base.export_element (obj, "Point", "quantity", base.from_string, fields);
                base.export_element (obj, "Point", "secondaryQuantity", base.from_string, fields);
                base.export_attribute (obj, "Point", "Period", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The motivation of an act.
         *
         */
        class Reason extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Reason;
                if (null == bucket)
                   cim_data.Reason = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Reason[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Reason";
                base.parse_element (/<cim:Reason.code>([\s\S]*?)<\/cim:Reason.code>/g, obj, "code", base.to_string, sub, context);
                base.parse_element (/<cim:Reason.text>([\s\S]*?)<\/cim:Reason.text>/g, obj, "text", base.to_string, sub, context);

                var bucket = context.parsed.Reason;
                if (null == bucket)
                   context.parsed.Reason = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Reason", "code", base.from_string, fields);
                base.export_element (obj, "Reason", "text", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The identification of the unit name for the time series quantities.
         *
         */
        class Unit extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Unit;
                if (null == bucket)
                   cim_data.Unit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Unit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Unit";
                base.parse_element (/<cim:Unit.name>([\s\S]*?)<\/cim:Unit.name>/g, obj, "name", base.to_string, sub, context);

                var bucket = context.parsed.Unit;
                if (null == bucket)
                   context.parsed.Unit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Unit", "name", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The date and or the time.
         *
         */
        class DateAndOrTime extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DateAndOrTime;
                if (null == bucket)
                   cim_data.DateAndOrTime = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DateAndOrTime[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DateAndOrTime";
                base.parse_element (/<cim:DateAndOrTime.date>([\s\S]*?)<\/cim:DateAndOrTime.date>/g, obj, "date", base.to_string, sub, context);
                base.parse_element (/<cim:DateAndOrTime.time>([\s\S]*?)<\/cim:DateAndOrTime.time>/g, obj, "time", base.to_string, sub, context);

                var bucket = context.parsed.DateAndOrTime;
                if (null == bucket)
                   context.parsed.DateAndOrTime = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DateAndOrTime", "date", base.from_string, fields);
                base.export_element (obj, "DateAndOrTime", "time", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The type of a power system resource.
         *
         */
        class MktPSRType extends Core.PSRType
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktPSRType;
                if (null == bucket)
                   cim_data.MktPSRType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktPSRType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PSRType.prototype.parse.call (this, context, sub);
                obj.cls = "MktPSRType";
                base.parse_element (/<cim:MktPSRType.psrType>([\s\S]*?)<\/cim:MktPSRType.psrType>/g, obj, "psrType", base.to_string, sub, context);

                var bucket = context.parsed.MktPSRType;
                if (null == bucket)
                   context.parsed.MktPSRType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PSRType.prototype.export.call (this, obj, false);

                base.export_element (obj, "MktPSRType", "psrType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The Area Control Error tariff type that is applied or used.
         *
         */
        class AceTariffType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AceTariffType;
                if (null == bucket)
                   cim_data.AceTariffType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AceTariffType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AceTariffType";
                base.parse_element (/<cim:AceTariffType.type>([\s\S]*?)<\/cim:AceTariffType.type>/g, obj, "type", base.to_string, sub, context);

                var bucket = context.parsed.AceTariffType;
                if (null == bucket)
                   context.parsed.AceTariffType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AceTariffType", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Electronic document containing the information necessary to satisfy a given business process set of requirements.
         *
         */
        class MarketDocument extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketDocument;
                if (null == bucket)
                   cim_data.MarketDocument = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketDocument[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "MarketDocument";

                var bucket = context.parsed.MarketDocument;
                if (null == bucket)
                   context.parsed.MarketDocument = bucket = {};
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
        }

        /**
         * An area of activity defined within the energy market.
         *
         */
        class Domain extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Domain;
                if (null == bucket)
                   cim_data.Domain = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Domain[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Domain";

                var bucket = context.parsed.Domain;
                if (null == bucket)
                   context.parsed.Domain = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The identification of an entity where energy products are measured or computed.
         *
         */
        class MarketEvaluationPoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketEvaluationPoint;
                if (null == bucket)
                   cim_data.MarketEvaluationPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketEvaluationPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketEvaluationPoint";

                var bucket = context.parsed.MarketEvaluationPoint;
                if (null == bucket)
                   context.parsed.MarketEvaluationPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An identification of a time interval that may have a given resolution.
         *
         */
        class Period extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Period;
                if (null == bucket)
                   cim_data.Period = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Period[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Period";
                base.parse_element (/<cim:Period.resolution>([\s\S]*?)<\/cim:Period.resolution>/g, obj, "resolution", base.to_string, sub, context);
                base.parse_element (/<cim:Period.timeInterval>([\s\S]*?)<\/cim:Period.timeInterval>/g, obj, "timeInterval", base.to_string, sub, context);

                var bucket = context.parsed.Period;
                if (null == bucket)
                   context.parsed.Period = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Period", "resolution", base.from_string, fields);
                base.export_element (obj, "Period", "timeInterval", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The condition or position of an object with regard to its standing.
         *
         */
        class MarketObjectStatus extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketObjectStatus;
                if (null == bucket)
                   cim_data.MarketObjectStatus = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketObjectStatus[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketObjectStatus";
                base.parse_element (/<cim:MarketObjectStatus.status>([\s\S]*?)<\/cim:MarketObjectStatus.status>/g, obj, "status", base.to_string, sub, context);

                var bucket = context.parsed.MarketObjectStatus;
                if (null == bucket)
                   context.parsed.MarketObjectStatus = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketObjectStatus", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A class used to provide information about an attribute.
         *
         */
        class AttributeInstanceComponent extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AttributeInstanceComponent;
                if (null == bucket)
                   cim_data.AttributeInstanceComponent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AttributeInstanceComponent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AttributeInstanceComponent";
                base.parse_element (/<cim:AttributeInstanceComponent.attribute>([\s\S]*?)<\/cim:AttributeInstanceComponent.attribute>/g, obj, "attribute", base.to_string, sub, context);
                base.parse_element (/<cim:AttributeInstanceComponent.attributeValue>([\s\S]*?)<\/cim:AttributeInstanceComponent.attributeValue>/g, obj, "attributeValue", base.to_string, sub, context);
                base.parse_element (/<cim:AttributeInstanceComponent.position>([\s\S]*?)<\/cim:AttributeInstanceComponent.position>/g, obj, "position", base.to_string, sub, context);

                var bucket = context.parsed.AttributeInstanceComponent;
                if (null == bucket)
                   context.parsed.AttributeInstanceComponent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AttributeInstanceComponent", "attribute", base.from_string, fields);
                base.export_element (obj, "AttributeInstanceComponent", "attributeValue", base.from_string, fields);
                base.export_element (obj, "AttributeInstanceComponent", "position", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A class providing the identification and type of an auction.
         *
         */
        class Auction extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Auction;
                if (null == bucket)
                   cim_data.Auction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Auction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Auction";
                base.parse_element (/<cim:Auction.allocationMode>([\s\S]*?)<\/cim:Auction.allocationMode>/g, obj, "allocationMode", base.to_string, sub, context);
                base.parse_element (/<cim:Auction.cancelled>([\s\S]*?)<\/cim:Auction.cancelled>/g, obj, "cancelled", base.to_string, sub, context);
                base.parse_element (/<cim:Auction.category>([\s\S]*?)<\/cim:Auction.category>/g, obj, "category", base.to_string, sub, context);
                base.parse_element (/<cim:Auction.paymentTerms>([\s\S]*?)<\/cim:Auction.paymentTerms>/g, obj, "paymentTerms", base.to_string, sub, context);
                base.parse_element (/<cim:Auction.rights>([\s\S]*?)<\/cim:Auction.rights>/g, obj, "rights", base.to_string, sub, context);
                base.parse_element (/<cim:Auction.type>([\s\S]*?)<\/cim:Auction.type>/g, obj, "type", base.to_string, sub, context);

                var bucket = context.parsed.Auction;
                if (null == bucket)
                   context.parsed.Auction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Auction", "allocationMode", base.from_string, fields);
                base.export_element (obj, "Auction", "cancelled", base.from_string, fields);
                base.export_element (obj, "Auction", "category", base.from_string, fields);
                base.export_element (obj, "Auction", "paymentTerms", base.from_string, fields);
                base.export_element (obj, "Auction", "rights", base.from_string, fields);
                base.export_element (obj, "Auction", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The cost corresponding to a specific measure and expressed in a currency.
         *
         */
        class Price extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Price;
                if (null == bucket)
                   cim_data.Price = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Price[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Price";
                base.parse_element (/<cim:Price.amount>([\s\S]*?)<\/cim:Price.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:Price.category>([\s\S]*?)<\/cim:Price.category>/g, obj, "category", base.to_string, sub, context);
                base.parse_element (/<cim:Price.direction>([\s\S]*?)<\/cim:Price.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_attribute (/<cim:Price.Point\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Point", sub, context);

                var bucket = context.parsed.Price;
                if (null == bucket)
                   context.parsed.Price = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Price", "amount", base.from_string, fields);
                base.export_element (obj, "Price", "category", base.from_string, fields);
                base.export_element (obj, "Price", "direction", base.from_string, fields);
                base.export_attribute (obj, "Price", "Point", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The formal specification of a set of business transactions having the same business goal.
         *
         */
        class Process extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Process;
                if (null == bucket)
                   cim_data.Process = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Process[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Process";
                base.parse_element (/<cim:Process.classificationType>([\s\S]*?)<\/cim:Process.classificationType>/g, obj, "classificationType", base.to_string, sub, context);
                base.parse_element (/<cim:Process.processType>([\s\S]*?)<\/cim:Process.processType>/g, obj, "processType", base.to_string, sub, context);

                var bucket = context.parsed.Process;
                if (null == bucket)
                   context.parsed.Process = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Process", "classificationType", base.from_string, fields);
                base.export_element (obj, "Process", "processType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A set of regular time-ordered measurements or values of quantitative nature of an individual or collective phenomenon taken at successive, in most cases equidistant, periods / points of time.
         *
         */
        class TimeSeries extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TimeSeries;
                if (null == bucket)
                   cim_data.TimeSeries = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TimeSeries[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TimeSeries";
                base.parse_element (/<cim:TimeSeries.businessType>([\s\S]*?)<\/cim:TimeSeries.businessType>/g, obj, "businessType", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSeries.cancelledTS>([\s\S]*?)<\/cim:TimeSeries.cancelledTS>/g, obj, "cancelledTS", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSeries.curveType>([\s\S]*?)<\/cim:TimeSeries.curveType>/g, obj, "curveType", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSeries.objectAggregation>([\s\S]*?)<\/cim:TimeSeries.objectAggregation>/g, obj, "objectAggregation", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSeries.product>([\s\S]*?)<\/cim:TimeSeries.product>/g, obj, "product", base.to_string, sub, context);
                base.parse_element (/<cim:TimeSeries.version>([\s\S]*?)<\/cim:TimeSeries.version>/g, obj, "version", base.to_string, sub, context);

                var bucket = context.parsed.TimeSeries;
                if (null == bucket)
                   context.parsed.TimeSeries = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TimeSeries", "businessType", base.from_string, fields);
                base.export_element (obj, "TimeSeries", "cancelledTS", base.from_string, fields);
                base.export_element (obj, "TimeSeries", "curveType", base.from_string, fields);
                base.export_element (obj, "TimeSeries", "objectAggregation", base.from_string, fields);
                base.export_element (obj, "TimeSeries", "product", base.from_string, fields);
                base.export_element (obj, "TimeSeries", "version", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The coded identification of the direction of energy flow.
         *
         */
        class FlowDirection extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FlowDirection;
                if (null == bucket)
                   cim_data.FlowDirection = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FlowDirection[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FlowDirection";
                base.parse_element (/<cim:FlowDirection.direction>([\s\S]*?)<\/cim:FlowDirection.direction>/g, obj, "direction", base.to_string, sub, context);

                var bucket = context.parsed.FlowDirection;
                if (null == bucket)
                   context.parsed.FlowDirection = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "FlowDirection", "direction", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An identification  or eventually the contents of an agreement between two or more parties.
         *
         */
        class MarketAgreement extends MarketDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketAgreement;
                if (null == bucket)
                   cim_data.MarketAgreement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketAgreement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketDocument.prototype.parse.call (this, context, sub);
                obj.cls = "MarketAgreement";

                var bucket = context.parsed.MarketAgreement;
                if (null == bucket)
                   context.parsed.MarketAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketDocument.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The formal specification of specific characteristics related to a bid.
         *
         */
        class BidTimeSeries extends TimeSeries
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidTimeSeries;
                if (null == bucket)
                   cim_data.BidTimeSeries = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidTimeSeries[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TimeSeries.prototype.parse.call (this, context, sub);
                obj.cls = "BidTimeSeries";
                base.parse_element (/<cim:BidTimeSeries.blockBid>([\s\S]*?)<\/cim:BidTimeSeries.blockBid>/g, obj, "blockBid", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.direction>([\s\S]*?)<\/cim:BidTimeSeries.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.divisible>([\s\S]*?)<\/cim:BidTimeSeries.divisible>/g, obj, "divisible", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.linkedBidsIdentification>([\s\S]*?)<\/cim:BidTimeSeries.linkedBidsIdentification>/g, obj, "linkedBidsIdentification", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.minimumActivationQuantity>([\s\S]*?)<\/cim:BidTimeSeries.minimumActivationQuantity>/g, obj, "minimumActivationQuantity", base.to_string, sub, context);
                base.parse_element (/<cim:BidTimeSeries.stepIncrementQuantity>([\s\S]*?)<\/cim:BidTimeSeries.stepIncrementQuantity>/g, obj, "stepIncrementQuantity", base.to_string, sub, context);

                var bucket = context.parsed.BidTimeSeries;
                if (null == bucket)
                   context.parsed.BidTimeSeries = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TimeSeries.prototype.export.call (this, obj, false);

                base.export_element (obj, "BidTimeSeries", "blockBid", base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "direction", base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "divisible", base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "linkedBidsIdentification", base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "minimumActivationQuantity", base.from_string, fields);
                base.export_element (obj, "BidTimeSeries", "stepIncrementQuantity", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                AttributeInstanceComponent: AttributeInstanceComponent,
                FlowDirection: FlowDirection,
                Reason: Reason,
                TimeSeries: TimeSeries,
                MarketObjectStatus: MarketObjectStatus,
                MarketAgreement: MarketAgreement,
                AceTariffType: AceTariffType,
                Domain: Domain,
                MarketEvaluationPoint: MarketEvaluationPoint,
                MktPSRType: MktPSRType,
                Unit: Unit,
                Point: Point,
                Process: Process,
                Price: Price,
                Auction: Auction,
                BidTimeSeries: BidTimeSeries,
                Period: Period,
                DateAndOrTime: DateAndOrTime,
                MarketDocument: MarketDocument
            }
        );
    }
);