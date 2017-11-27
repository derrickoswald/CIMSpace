define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * Market participant interfaces for bids and trades.
     *
     */
    function (base, Common, Core)
    {

        /**
         * Charge Group is the grouping of Charge Types for settlement invoicing purpose.
         *
         * Examples such as Ancillary Services, Interests, etc.
         *
         */
        class ChargeGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ChargeGroup;
                if (null == bucket)
                   cim_data.ChargeGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ChargeGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ChargeGroup";
                base.parse_element (/<cim:ChargeGroup.marketCode>([\s\S]*?)<\/cim:ChargeGroup.marketCode>/g, obj, "marketCode", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeGroup.effectiveDate>([\s\S]*?)<\/cim:ChargeGroup.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ChargeGroup.terminationDate>([\s\S]*?)<\/cim:ChargeGroup.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:ChargeGroup.ChargeGroupParent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeGroupParent", sub, context);

                var bucket = context.parsed.ChargeGroup;
                if (null == bucket)
                   context.parsed.ChargeGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "ChargeGroup", "marketCode", base.from_string, fields);
                base.export_element (obj, "ChargeGroup", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "ChargeGroup", "terminationDate", base.from_datetime, fields);
                base.export_attribute (obj, "ChargeGroup", "ChargeGroupParent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Component of a bid that pertains to one market product.
         *
         */
        class ProductBid extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ProductBid;
                if (null == bucket)
                   cim_data.ProductBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProductBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ProductBid";
                base.parse_attribute (/<cim:ProductBid.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);
                base.parse_attribute (/<cim:ProductBid.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);

                var bucket = context.parsed.ProductBid;
                if (null == bucket)
                   context.parsed.ProductBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "ProductBid", "MarketProduct", fields);
                base.export_attribute (obj, "ProductBid", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Metered SubSystem Load Following Instruction
         *
         */
        class LoadFollowingInst extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadFollowingInst;
                if (null == bucket)
                   cim_data.LoadFollowingInst = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadFollowingInst[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LoadFollowingInst";
                base.parse_element (/<cim:LoadFollowingInst.mssInstructionID>([\s\S]*?)<\/cim:LoadFollowingInst.mssInstructionID>/g, obj, "mssInstructionID", base.to_string, sub, context);
                base.parse_element (/<cim:LoadFollowingInst.startTime>([\s\S]*?)<\/cim:LoadFollowingInst.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:LoadFollowingInst.endTime>([\s\S]*?)<\/cim:LoadFollowingInst.endTime>/g, obj, "endTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:LoadFollowingInst.loadFollowingMW>([\s\S]*?)<\/cim:LoadFollowingInst.loadFollowingMW>/g, obj, "loadFollowingMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:LoadFollowingInst.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.LoadFollowingInst;
                if (null == bucket)
                   context.parsed.LoadFollowingInst = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "LoadFollowingInst", "mssInstructionID", base.from_string, fields);
                base.export_element (obj, "LoadFollowingInst", "startTime", base.from_datetime, fields);
                base.export_element (obj, "LoadFollowingInst", "endTime", base.from_datetime, fields);
                base.export_element (obj, "LoadFollowingInst", "loadFollowingMW", base.from_float, fields);
                base.export_attribute (obj, "LoadFollowingInst", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Property for a particular attribute that contains name and value
         *
         */
        class AttributeProperty extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AttributeProperty;
                if (null == bucket)
                   cim_data.AttributeProperty = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AttributeProperty[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AttributeProperty";
                base.parse_element (/<cim:AttributeProperty.sequence>([\s\S]*?)<\/cim:AttributeProperty.sequence>/g, obj, "sequence", base.to_string, sub, context);
                base.parse_element (/<cim:AttributeProperty.propertyName>([\s\S]*?)<\/cim:AttributeProperty.propertyName>/g, obj, "propertyName", base.to_string, sub, context);
                base.parse_element (/<cim:AttributeProperty.propertyValue>([\s\S]*?)<\/cim:AttributeProperty.propertyValue>/g, obj, "propertyValue", base.to_string, sub, context);
                base.parse_attribute (/<cim:AttributeProperty.MktUserAttribute\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktUserAttribute", sub, context);

                var bucket = context.parsed.AttributeProperty;
                if (null == bucket)
                   context.parsed.AttributeProperty = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "AttributeProperty", "sequence", base.from_string, fields);
                base.export_element (obj, "AttributeProperty", "propertyName", base.from_string, fields);
                base.export_element (obj, "AttributeProperty", "propertyValue", base.from_string, fields);
                base.export_attribute (obj, "AttributeProperty", "MktUserAttribute", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This is the price sensitivity that bidder expresses for allowing market load interruption.
         *
         * Relationship between price (Y1-axis) vs. MW (X-axis).
         *
         */
        class LoadReductionPriceCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadReductionPriceCurve;
                if (null == bucket)
                   cim_data.LoadReductionPriceCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadReductionPriceCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "LoadReductionPriceCurve";
                base.parse_attribute (/<cim:LoadReductionPriceCurve.LoadBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadBid", sub, context);

                var bucket = context.parsed.LoadReductionPriceCurve;
                if (null == bucket)
                   context.parsed.LoadReductionPriceCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_attribute (obj, "LoadReductionPriceCurve", "LoadBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Containment for bid parameters that are dependent on a market product type.
         *
         */
        class BidHourlyProductSchedule extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidHourlyProductSchedule;
                if (null == bucket)
                   cim_data.BidHourlyProductSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidHourlyProductSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "BidHourlyProductSchedule";
                base.parse_attribute (/<cim:BidHourlyProductSchedule.ProductBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBid", sub, context);

                var bucket = context.parsed.BidHourlyProductSchedule;
                if (null == bucket)
                   context.parsed.BidHourlyProductSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["RegularIntervalSchedule"](obj, exporters, false);

                base.export_attribute (obj, "BidHourlyProductSchedule", "ProductBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Startup time curve as a function of down time, where time is specified in minutes.
         *
         * Relationship between unit startup time (Y1-axis) vs. unit elapsed down time (X-axis).
         *
         */
        class StartUpTimeCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StartUpTimeCurve;
                if (null == bucket)
                   cim_data.StartUpTimeCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StartUpTimeCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartUpTimeCurve";
                base.parse_attribute (/<cim:StartUpTimeCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.StartUpTimeCurve;
                if (null == bucket)
                   context.parsed.StartUpTimeCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_attribute (obj, "StartUpTimeCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Relationship between a price in \$(or other monetary unit) /hour (Y-axis) and a MW value (X-axis).
         *
         */
        class EnergyPriceCurve extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyPriceCurve;
                if (null == bucket)
                   cim_data.EnergyPriceCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyPriceCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyPriceCurve";

                var bucket = context.parsed.EnergyPriceCurve;
                if (null == bucket)
                   context.parsed.EnergyPriceCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Defines self schedule values to be used for specified time intervals.
         *
         */
        class BidSelfSched extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidSelfSched;
                if (null == bucket)
                   cim_data.BidSelfSched = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidSelfSched[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "BidSelfSched";
                base.parse_element (/<cim:BidSelfSched.balancingFlag>([\s\S]*?)<\/cim:BidSelfSched.balancingFlag>/g, obj, "balancingFlag", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.bidType>([\s\S]*?)<\/cim:BidSelfSched.bidType>/g, obj, "bidType", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.priorityFlag>([\s\S]*?)<\/cim:BidSelfSched.priorityFlag>/g, obj, "priorityFlag", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.pumpSelfSchedMw>([\s\S]*?)<\/cim:BidSelfSched.pumpSelfSchedMw>/g, obj, "pumpSelfSchedMw", base.to_float, sub, context);
                base.parse_element (/<cim:BidSelfSched.referenceType>([\s\S]*?)<\/cim:BidSelfSched.referenceType>/g, obj, "referenceType", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.selfSchedMw>([\s\S]*?)<\/cim:BidSelfSched.selfSchedMw>/g, obj, "selfSchedMw", base.to_float, sub, context);
                base.parse_element (/<cim:BidSelfSched.selfSchedSptResource>([\s\S]*?)<\/cim:BidSelfSched.selfSchedSptResource>/g, obj, "selfSchedSptResource", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.selfSchedType>([\s\S]*?)<\/cim:BidSelfSched.selfSchedType>/g, obj, "selfSchedType", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.updateType>([\s\S]*?)<\/cim:BidSelfSched.updateType>/g, obj, "updateType", base.to_string, sub, context);
                base.parse_element (/<cim:BidSelfSched.wheelingTransactionReference>([\s\S]*?)<\/cim:BidSelfSched.wheelingTransactionReference>/g, obj, "wheelingTransactionReference", base.to_string, sub, context);
                base.parse_attribute (/<cim:BidSelfSched.ProductBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBid", sub, context);
                base.parse_attribute (/<cim:BidSelfSched.TransmissionContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context);
                base.parse_attribute (/<cim:BidSelfSched.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attribute (/<cim:BidSelfSched.AdjacentCASet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AdjacentCASet", sub, context);
                base.parse_attribute (/<cim:BidSelfSched.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);

                var bucket = context.parsed.BidSelfSched;
                if (null == bucket)
                   context.parsed.BidSelfSched = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["RegularIntervalSchedule"](obj, exporters, false);

                base.export_element (obj, "BidSelfSched", "balancingFlag", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "bidType", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "priorityFlag", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "pumpSelfSchedMw", base.from_float, fields);
                base.export_element (obj, "BidSelfSched", "referenceType", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "selfSchedMw", base.from_float, fields);
                base.export_element (obj, "BidSelfSched", "selfSchedSptResource", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "selfSchedType", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "updateType", base.from_string, fields);
                base.export_element (obj, "BidSelfSched", "wheelingTransactionReference", base.from_string, fields);
                base.export_attribute (obj, "BidSelfSched", "ProductBid", fields);
                base.export_attribute (obj, "BidSelfSched", "TransmissionContractRight", fields);
                base.export_attribute (obj, "BidSelfSched", "HostControlArea", fields);
                base.export_attribute (obj, "BidSelfSched", "AdjacentCASet", fields);
                base.export_attribute (obj, "BidSelfSched", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Defines bid schedules to allow a product bid to use specified bid price curves for different time intervals.
         *
         */
        class BidPriceSchedule extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidPriceSchedule;
                if (null == bucket)
                   cim_data.BidPriceSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidPriceSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "BidPriceSchedule";
                base.parse_element (/<cim:BidPriceSchedule.bidType>([\s\S]*?)<\/cim:BidPriceSchedule.bidType>/g, obj, "bidType", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceSchedule.mitigationStatus>([\s\S]*?)<\/cim:BidPriceSchedule.mitigationStatus>/g, obj, "mitigationStatus", base.to_string, sub, context);
                base.parse_attribute (/<cim:BidPriceSchedule.BidPriceCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidPriceCurve", sub, context);
                base.parse_attribute (/<cim:BidPriceSchedule.ProductBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBid", sub, context);

                var bucket = context.parsed.BidPriceSchedule;
                if (null == bucket)
                   context.parsed.BidPriceSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["RegularIntervalSchedule"](obj, exporters, false);

                base.export_element (obj, "BidPriceSchedule", "bidType", base.from_string, fields);
                base.export_element (obj, "BidPriceSchedule", "mitigationStatus", base.from_string, fields);
                base.export_attribute (obj, "BidPriceSchedule", "BidPriceCurve", fields);
                base.export_attribute (obj, "BidPriceSchedule", "ProductBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A Charge Component is a list of configurable charge quality items to feed into settlement calculation and/or bill determinants.
         *
         */
        class ChargeComponent extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ChargeComponent;
                if (null == bucket)
                   cim_data.ChargeComponent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ChargeComponent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ChargeComponent";
                base.parse_element (/<cim:ChargeComponent.deleteStatus>([\s\S]*?)<\/cim:ChargeComponent.deleteStatus>/g, obj, "deleteStatus", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeComponent.effectiveDate>([\s\S]*?)<\/cim:ChargeComponent.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ChargeComponent.terminationDate>([\s\S]*?)<\/cim:ChargeComponent.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ChargeComponent.message>([\s\S]*?)<\/cim:ChargeComponent.message>/g, obj, "message", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeComponent.type>([\s\S]*?)<\/cim:ChargeComponent.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeComponent.sum>([\s\S]*?)<\/cim:ChargeComponent.sum>/g, obj, "sum", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeComponent.roundOff>([\s\S]*?)<\/cim:ChargeComponent.roundOff>/g, obj, "roundOff", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeComponent.equation>([\s\S]*?)<\/cim:ChargeComponent.equation>/g, obj, "equation", base.to_string, sub, context);

                var bucket = context.parsed.ChargeComponent;
                if (null == bucket)
                   context.parsed.ChargeComponent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "ChargeComponent", "deleteStatus", base.from_string, fields);
                base.export_element (obj, "ChargeComponent", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "ChargeComponent", "terminationDate", base.from_datetime, fields);
                base.export_element (obj, "ChargeComponent", "message", base.from_string, fields);
                base.export_element (obj, "ChargeComponent", "type", base.from_string, fields);
                base.export_element (obj, "ChargeComponent", "sum", base.from_string, fields);
                base.export_element (obj, "ChargeComponent", "roundOff", base.from_string, fields);
                base.export_element (obj, "ChargeComponent", "equation", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A Major Charge Group is the same as Invocie Type which provides the highest level of grouping for charge types configration.
         *
         * Examples as Market, FERC, RMR,
         *
         */
        class MajorChargeGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MajorChargeGroup;
                if (null == bucket)
                   cim_data.MajorChargeGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MajorChargeGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MajorChargeGroup";
                base.parse_element (/<cim:MajorChargeGroup.runType>([\s\S]*?)<\/cim:MajorChargeGroup.runType>/g, obj, "runType", base.to_string, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.runVersion>([\s\S]*?)<\/cim:MajorChargeGroup.runVersion>/g, obj, "runVersion", base.to_string, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.frequencyType>([\s\S]*?)<\/cim:MajorChargeGroup.frequencyType>/g, obj, "frequencyType", base.to_string, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.invoiceType>([\s\S]*?)<\/cim:MajorChargeGroup.invoiceType>/g, obj, "invoiceType", base.to_string, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.effectiveDate>([\s\S]*?)<\/cim:MajorChargeGroup.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.terminationDate>([\s\S]*?)<\/cim:MajorChargeGroup.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.requireAutorun>([\s\S]*?)<\/cim:MajorChargeGroup.requireAutorun>/g, obj, "requireAutorun", base.to_string, sub, context);
                base.parse_element (/<cim:MajorChargeGroup.revisionNumber>([\s\S]*?)<\/cim:MajorChargeGroup.revisionNumber>/g, obj, "revisionNumber", base.to_string, sub, context);

                var bucket = context.parsed.MajorChargeGroup;
                if (null == bucket)
                   context.parsed.MajorChargeGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "MajorChargeGroup", "runType", base.from_string, fields);
                base.export_element (obj, "MajorChargeGroup", "runVersion", base.from_string, fields);
                base.export_element (obj, "MajorChargeGroup", "frequencyType", base.from_string, fields);
                base.export_element (obj, "MajorChargeGroup", "invoiceType", base.from_string, fields);
                base.export_element (obj, "MajorChargeGroup", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "MajorChargeGroup", "terminationDate", base.from_datetime, fields);
                base.export_element (obj, "MajorChargeGroup", "requireAutorun", base.from_string, fields);
                base.export_element (obj, "MajorChargeGroup", "revisionNumber", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Charge Type is the basic level configuration for settlement to process specific charges for invoicing purpose.
         *
         * Examples such as: Day Ahead Spinning Reserve Default Invoice Interest Charge, etc.
         *
         */
        class ChargeType extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ChargeType;
                if (null == bucket)
                   cim_data.ChargeType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ChargeType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "ChargeType";
                base.parse_element (/<cim:ChargeType.effectiveDate>([\s\S]*?)<\/cim:ChargeType.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ChargeType.terminationDate>([\s\S]*?)<\/cim:ChargeType.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ChargeType.factor>([\s\S]*?)<\/cim:ChargeType.factor>/g, obj, "factor", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeType.chargeOrder>([\s\S]*?)<\/cim:ChargeType.chargeOrder>/g, obj, "chargeOrder", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeType.frequencyType>([\s\S]*?)<\/cim:ChargeType.frequencyType>/g, obj, "frequencyType", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeType.chargeVersion>([\s\S]*?)<\/cim:ChargeType.chargeVersion>/g, obj, "chargeVersion", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeType.totalInterval>([\s\S]*?)<\/cim:ChargeType.totalInterval>/g, obj, "totalInterval", base.to_string, sub, context);

                var bucket = context.parsed.ChargeType;
                if (null == bucket)
                   context.parsed.ChargeType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_element (obj, "ChargeType", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "ChargeType", "terminationDate", base.from_datetime, fields);
                base.export_element (obj, "ChargeType", "factor", base.from_string, fields);
                base.export_element (obj, "ChargeType", "chargeOrder", base.from_string, fields);
                base.export_element (obj, "ChargeType", "frequencyType", base.from_string, fields);
                base.export_element (obj, "ChargeType", "chargeVersion", base.from_string, fields);
                base.export_element (obj, "ChargeType", "totalInterval", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Startup costs and time as a function of down time.
         *
         * Relationship between unit startup cost (Y1-axis) vs. unit elapsed down time (X-axis).
         *
         */
        class StartUpCostCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StartUpCostCurve;
                if (null == bucket)
                   cim_data.StartUpCostCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StartUpCostCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartUpCostCurve";

                var bucket = context.parsed.StartUpCostCurve;
                if (null == bucket)
                   context.parsed.StartUpCostCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class allows SC to input different time intervals for distribution factors
         *
         */
        class BidDistributionFactor extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidDistributionFactor;
                if (null == bucket)
                   cim_data.BidDistributionFactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidDistributionFactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BidDistributionFactor";
                base.parse_element (/<cim:BidDistributionFactor.timeIntervalStart>([\s\S]*?)<\/cim:BidDistributionFactor.timeIntervalStart>/g, obj, "timeIntervalStart", base.to_datetime, sub, context);
                base.parse_element (/<cim:BidDistributionFactor.timeIntervalEnd>([\s\S]*?)<\/cim:BidDistributionFactor.timeIntervalEnd>/g, obj, "timeIntervalEnd", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:BidDistributionFactor.ProductBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBid", sub, context);

                var bucket = context.parsed.BidDistributionFactor;
                if (null == bucket)
                   context.parsed.BidDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "BidDistributionFactor", "timeIntervalStart", base.from_datetime, fields);
                base.export_element (obj, "BidDistributionFactor", "timeIntervalEnd", base.from_datetime, fields);
                base.export_attribute (obj, "BidDistributionFactor", "ProductBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * <b>TradeType</b>                                        <b>TradeProduct</b>
         * IST  (InterSC Trade)                          PHY (Physical Energy Trade)
         * IST                                                  APN (Energy Trades at Aggregated Pricing Nodes)
         * IST                                                  CPT (Converted Physical Energy Trade)
         * AST (Ancilliary Services Trade)             RUT (Regulation Up Trade)
         * AST                                                 RDT (Regulation Down Trade)
         * AST                                                 SRT (Spinning Reserve Trade)
         * AST                                                 NRT (Non-Spinning Reserve Trade)
         *
         * UCT (Unit Commitment Trade)            null
         *
         */
        class TradeProduct extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TradeProduct;
                if (null == bucket)
                   cim_data.TradeProduct = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TradeProduct[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TradeProduct";
                base.parse_element (/<cim:TradeProduct.tradeType>([\s\S]*?)<\/cim:TradeProduct.tradeType>/g, obj, "tradeType", base.to_string, sub, context);
                base.parse_element (/<cim:TradeProduct.tradeProductType>([\s\S]*?)<\/cim:TradeProduct.tradeProductType>/g, obj, "tradeProductType", base.to_string, sub, context);

                var bucket = context.parsed.TradeProduct;
                if (null == bucket)
                   context.parsed.TradeProduct = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "TradeProduct", "tradeType", base.from_string, fields);
                base.export_element (obj, "TradeProduct", "tradeProductType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Trade error and warning messages associated with the rule engine processing of the submitted trade.
         *
         */
        class TradeError extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TradeError;
                if (null == bucket)
                   cim_data.TradeError = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TradeError[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TradeError";
                base.parse_element (/<cim:TradeError.errPriority>([\s\S]*?)<\/cim:TradeError.errPriority>/g, obj, "errPriority", base.to_string, sub, context);
                base.parse_element (/<cim:TradeError.errMessage>([\s\S]*?)<\/cim:TradeError.errMessage>/g, obj, "errMessage", base.to_string, sub, context);
                base.parse_element (/<cim:TradeError.ruleID>([\s\S]*?)<\/cim:TradeError.ruleID>/g, obj, "ruleID", base.to_string, sub, context);
                base.parse_element (/<cim:TradeError.startTime>([\s\S]*?)<\/cim:TradeError.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:TradeError.endTime>([\s\S]*?)<\/cim:TradeError.endTime>/g, obj, "endTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:TradeError.logTimeStamp>([\s\S]*?)<\/cim:TradeError.logTimeStamp>/g, obj, "logTimeStamp", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:TradeError.Trade\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Trade", sub, context);

                var bucket = context.parsed.TradeError;
                if (null == bucket)
                   context.parsed.TradeError = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "TradeError", "errPriority", base.from_string, fields);
                base.export_element (obj, "TradeError", "errMessage", base.from_string, fields);
                base.export_element (obj, "TradeError", "ruleID", base.from_string, fields);
                base.export_element (obj, "TradeError", "startTime", base.from_datetime, fields);
                base.export_element (obj, "TradeError", "endTime", base.from_datetime, fields);
                base.export_element (obj, "TradeError", "logTimeStamp", base.from_datetime, fields);
                base.export_attribute (obj, "TradeError", "Trade", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Represents both bids to purchase and offers to sell energy or ancillary services in an RTO-sponsored market.
         *
         */
        class Bid extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Bid;
                if (null == bucket)
                   cim_data.Bid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Bid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Bid";
                base.parse_element (/<cim:Bid.startTime>([\s\S]*?)<\/cim:Bid.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Bid.stopTime>([\s\S]*?)<\/cim:Bid.stopTime>/g, obj, "stopTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Bid.marketType>([\s\S]*?)<\/cim:Bid.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_attribute (/<cim:Bid.ActionRequest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ActionRequest", sub, context);
                base.parse_attribute (/<cim:Bid.MarketParticipant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketParticipant", sub, context);
                base.parse_attribute (/<cim:Bid.EnergyMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyMarket", sub, context);
                base.parse_attribute (/<cim:Bid.SchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SchedulingCoordinator", sub, context);

                var bucket = context.parsed.Bid;
                if (null == bucket)
                   context.parsed.Bid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_element (obj, "Bid", "startTime", base.from_datetime, fields);
                base.export_element (obj, "Bid", "stopTime", base.from_datetime, fields);
                base.export_element (obj, "Bid", "marketType", base.from_string, fields);
                base.export_attribute (obj, "Bid", "ActionRequest", fields);
                base.export_attribute (obj, "Bid", "MarketParticipant", fields);
                base.export_attribute (obj, "Bid", "EnergyMarket", fields);
                base.export_attribute (obj, "Bid", "SchedulingCoordinator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Inter Scheduling Coordinator Trades to model financial trades which may impact settlement
         *
         */
        class Trade extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Trade;
                if (null == bucket)
                   cim_data.Trade = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Trade[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Trade";
                base.parse_element (/<cim:Trade.adjustedTradeQuantity>([\s\S]*?)<\/cim:Trade.adjustedTradeQuantity>/g, obj, "adjustedTradeQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:Trade.counterTradeQuantity>([\s\S]*?)<\/cim:Trade.counterTradeQuantity>/g, obj, "counterTradeQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:Trade.dependOnTradeName>([\s\S]*?)<\/cim:Trade.dependOnTradeName>/g, obj, "dependOnTradeName", base.to_string, sub, context);
                base.parse_element (/<cim:Trade.lastModified>([\s\S]*?)<\/cim:Trade.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);
                base.parse_element (/<cim:Trade.marketType>([\s\S]*?)<\/cim:Trade.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_element (/<cim:Trade.startTime>([\s\S]*?)<\/cim:Trade.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Trade.stopTime>([\s\S]*?)<\/cim:Trade.stopTime>/g, obj, "stopTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Trade.submitFromTimeStamp>([\s\S]*?)<\/cim:Trade.submitFromTimeStamp>/g, obj, "submitFromTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:Trade.submitFromUser>([\s\S]*?)<\/cim:Trade.submitFromUser>/g, obj, "submitFromUser", base.to_string, sub, context);
                base.parse_element (/<cim:Trade.submitToTimeStamp>([\s\S]*?)<\/cim:Trade.submitToTimeStamp>/g, obj, "submitToTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:Trade.submitToUser >([\s\S]*?)<\/cim:Trade.submitToUser >/g, obj, "submitToUser ", base.to_string, sub, context);
                base.parse_element (/<cim:Trade.tradeQuantity>([\s\S]*?)<\/cim:Trade.tradeQuantity>/g, obj, "tradeQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:Trade.tradeStatus>([\s\S]*?)<\/cim:Trade.tradeStatus>/g, obj, "tradeStatus", base.to_string, sub, context);
                base.parse_element (/<cim:Trade.updateTimeStamp>([\s\S]*?)<\/cim:Trade.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:Trade.updateUser>([\s\S]*?)<\/cim:Trade.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_attribute (/<cim:Trade.TradeProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TradeProduct", sub, context);
                base.parse_attribute (/<cim:Trade.submitFromSchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "submitFromSchedulingCoordinator", sub, context);
                base.parse_attribute (/<cim:Trade.ActionRequest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ActionRequest", sub, context);
                base.parse_attribute (/<cim:Trade.To_SC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "To_SC", sub, context);
                base.parse_attribute (/<cim:Trade.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                base.parse_attribute (/<cim:Trade.submitToSchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "submitToSchedulingCoordinator", sub, context);
                base.parse_attribute (/<cim:Trade.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                base.parse_attribute (/<cim:Trade.From_SC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "From_SC", sub, context);

                var bucket = context.parsed.Trade;
                if (null == bucket)
                   context.parsed.Trade = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "Trade", "adjustedTradeQuantity", base.from_float, fields);
                base.export_element (obj, "Trade", "counterTradeQuantity", base.from_float, fields);
                base.export_element (obj, "Trade", "dependOnTradeName", base.from_string, fields);
                base.export_element (obj, "Trade", "lastModified", base.from_datetime, fields);
                base.export_element (obj, "Trade", "marketType", base.from_string, fields);
                base.export_element (obj, "Trade", "startTime", base.from_datetime, fields);
                base.export_element (obj, "Trade", "stopTime", base.from_datetime, fields);
                base.export_element (obj, "Trade", "submitFromTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "Trade", "submitFromUser", base.from_string, fields);
                base.export_element (obj, "Trade", "submitToTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "Trade", "submitToUser ", base.from_string, fields);
                base.export_element (obj, "Trade", "tradeQuantity", base.from_float, fields);
                base.export_element (obj, "Trade", "tradeStatus", base.from_string, fields);
                base.export_element (obj, "Trade", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "Trade", "updateUser", base.from_string, fields);
                base.export_attribute (obj, "Trade", "TradeProduct", fields);
                base.export_attribute (obj, "Trade", "submitFromSchedulingCoordinator", fields);
                base.export_attribute (obj, "Trade", "ActionRequest", fields);
                base.export_attribute (obj, "Trade", "To_SC", fields);
                base.export_attribute (obj, "Trade", "Pnode", fields);
                base.export_attribute (obj, "Trade", "submitToSchedulingCoordinator", fields);
                base.export_attribute (obj, "Trade", "RegisteredGenerator", fields);
                base.export_attribute (obj, "Trade", "From_SC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class represent the error information for a bid that is detected during bid validation
         *
         */
        class BidError extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidError;
                if (null == bucket)
                   cim_data.BidError = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidError[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BidError";
                base.parse_element (/<cim:BidError.errPriority>([\s\S]*?)<\/cim:BidError.errPriority>/g, obj, "errPriority", base.to_string, sub, context);
                base.parse_element (/<cim:BidError.errMessage>([\s\S]*?)<\/cim:BidError.errMessage>/g, obj, "errMessage", base.to_string, sub, context);
                base.parse_element (/<cim:BidError.ruleID>([\s\S]*?)<\/cim:BidError.ruleID>/g, obj, "ruleID", base.to_string, sub, context);
                base.parse_element (/<cim:BidError.startTime>([\s\S]*?)<\/cim:BidError.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:BidError.endTime>([\s\S]*?)<\/cim:BidError.endTime>/g, obj, "endTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:BidError.logTimeStamp>([\s\S]*?)<\/cim:BidError.logTimeStamp>/g, obj, "logTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:BidError.componentType>([\s\S]*?)<\/cim:BidError.componentType>/g, obj, "componentType", base.to_string, sub, context);
                base.parse_element (/<cim:BidError.msgLevel>([\s\S]*?)<\/cim:BidError.msgLevel>/g, obj, "msgLevel", base.to_string, sub, context);
                base.parse_attribute (/<cim:BidError.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);

                var bucket = context.parsed.BidError;
                if (null == bucket)
                   context.parsed.BidError = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "BidError", "errPriority", base.from_string, fields);
                base.export_element (obj, "BidError", "errMessage", base.from_string, fields);
                base.export_element (obj, "BidError", "ruleID", base.from_string, fields);
                base.export_element (obj, "BidError", "startTime", base.from_datetime, fields);
                base.export_element (obj, "BidError", "endTime", base.from_datetime, fields);
                base.export_element (obj, "BidError", "logTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "BidError", "componentType", base.from_string, fields);
                base.export_element (obj, "BidError", "msgLevel", base.from_string, fields);
                base.export_attribute (obj, "BidError", "MarketProduct", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Action request against an existing Trade.
         *
         */
        class ActionRequest extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ActionRequest;
                if (null == bucket)
                   cim_data.ActionRequest = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ActionRequest[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ActionRequest";
                base.parse_element (/<cim:ActionRequest.actionName>([\s\S]*?)<\/cim:ActionRequest.actionName>/g, obj, "actionName", base.to_string, sub, context);

                var bucket = context.parsed.ActionRequest;
                if (null == bucket)
                   context.parsed.ActionRequest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ActionRequest", "actionName", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Response from an intertie resource acknowleging receipt of dispatch instructions
         *
         */
        class InterTieDispatchResponse extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InterTieDispatchResponse;
                if (null == bucket)
                   cim_data.InterTieDispatchResponse = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InterTieDispatchResponse[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "InterTieDispatchResponse";
                base.parse_element (/<cim:InterTieDispatchResponse.acceptStatus>([\s\S]*?)<\/cim:InterTieDispatchResponse.acceptStatus>/g, obj, "acceptStatus", base.to_string, sub, context);
                base.parse_element (/<cim:InterTieDispatchResponse.acceptMW>([\s\S]*?)<\/cim:InterTieDispatchResponse.acceptMW>/g, obj, "acceptMW", base.to_float, sub, context);
                base.parse_element (/<cim:InterTieDispatchResponse.clearedMW>([\s\S]*?)<\/cim:InterTieDispatchResponse.clearedMW>/g, obj, "clearedMW", base.to_float, sub, context);
                base.parse_element (/<cim:InterTieDispatchResponse.startTime>([\s\S]*?)<\/cim:InterTieDispatchResponse.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:InterTieDispatchResponse.passIndicator>([\s\S]*?)<\/cim:InterTieDispatchResponse.passIndicator>/g, obj, "passIndicator", base.to_string, sub, context);
                base.parse_attribute (/<cim:InterTieDispatchResponse.RegisteredInterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredInterTie", sub, context);

                var bucket = context.parsed.InterTieDispatchResponse;
                if (null == bucket)
                   context.parsed.InterTieDispatchResponse = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "InterTieDispatchResponse", "acceptStatus", base.from_string, fields);
                base.export_element (obj, "InterTieDispatchResponse", "acceptMW", base.from_float, fields);
                base.export_element (obj, "InterTieDispatchResponse", "clearedMW", base.from_float, fields);
                base.export_element (obj, "InterTieDispatchResponse", "startTime", base.from_datetime, fields);
                base.export_element (obj, "InterTieDispatchResponse", "passIndicator", base.from_string, fields);
                base.export_attribute (obj, "InterTieDispatchResponse", "RegisteredInterTie", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * As set of mutually exclusive bids for which a maximum of one may be scheduled.
         *
         * Of these generating bids, only one generating bid can be scheduled at a time.
         *
         */
        class BidSet extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidSet;
                if (null == bucket)
                   cim_data.BidSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BidSet";

                var bucket = context.parsed.BidSet;
                if (null == bucket)
                   context.parsed.BidSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Ramp rate as a function of resource MW output
         *
         */
        class RampRateCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RampRateCurve;
                if (null == bucket)
                   cim_data.RampRateCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RampRateCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "RampRateCurve";
                base.parse_element (/<cim:RampRateCurve.condition>([\s\S]*?)<\/cim:RampRateCurve.condition>/g, obj, "condition", base.to_string, sub, context);
                base.parse_element (/<cim:RampRateCurve.constraintRampType>([\s\S]*?)<\/cim:RampRateCurve.constraintRampType>/g, obj, "constraintRampType", base.to_string, sub, context);
                base.parse_element (/<cim:RampRateCurve.rampRateType>([\s\S]*?)<\/cim:RampRateCurve.rampRateType>/g, obj, "rampRateType", base.to_string, sub, context);
                base.parse_attribute (/<cim:RampRateCurve.GeneratingBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingBid", sub, context);
                base.parse_attribute (/<cim:RampRateCurve.LoadBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadBid", sub, context);
                base.parse_attribute (/<cim:RampRateCurve.InterTieBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterTieBid", sub, context);

                var bucket = context.parsed.RampRateCurve;
                if (null == bucket)
                   context.parsed.RampRateCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_element (obj, "RampRateCurve", "condition", base.from_string, fields);
                base.export_element (obj, "RampRateCurve", "constraintRampType", base.from_string, fields);
                base.export_element (obj, "RampRateCurve", "rampRateType", base.from_string, fields);
                base.export_attribute (obj, "RampRateCurve", "GeneratingBid", fields);
                base.export_attribute (obj, "RampRateCurve", "LoadBid", fields);
                base.export_attribute (obj, "RampRateCurve", "InterTieBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Response from registered resource acknowleging receipt of dispatch instructions
         *
         */
        class DispatchInstReply extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DispatchInstReply;
                if (null == bucket)
                   cim_data.DispatchInstReply = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DispatchInstReply[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DispatchInstReply";
                base.parse_element (/<cim:DispatchInstReply.acceptMW>([\s\S]*?)<\/cim:DispatchInstReply.acceptMW>/g, obj, "acceptMW", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchInstReply.acceptStatus>([\s\S]*?)<\/cim:DispatchInstReply.acceptStatus>/g, obj, "acceptStatus", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchInstReply.certificationName>([\s\S]*?)<\/cim:DispatchInstReply.certificationName>/g, obj, "certificationName", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchInstReply.clearedMW>([\s\S]*?)<\/cim:DispatchInstReply.clearedMW>/g, obj, "clearedMW", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchInstReply.instructionTime>([\s\S]*?)<\/cim:DispatchInstReply.instructionTime>/g, obj, "instructionTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DispatchInstReply.instructionType>([\s\S]*?)<\/cim:DispatchInstReply.instructionType>/g, obj, "instructionType", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchInstReply.passIndicator>([\s\S]*?)<\/cim:DispatchInstReply.passIndicator>/g, obj, "passIndicator", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchInstReply.receivedTime>([\s\S]*?)<\/cim:DispatchInstReply.receivedTime>/g, obj, "receivedTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DispatchInstReply.startTime>([\s\S]*?)<\/cim:DispatchInstReply.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:DispatchInstReply.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.DispatchInstReply;
                if (null == bucket)
                   context.parsed.DispatchInstReply = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "DispatchInstReply", "acceptMW", base.from_string, fields);
                base.export_element (obj, "DispatchInstReply", "acceptStatus", base.from_string, fields);
                base.export_element (obj, "DispatchInstReply", "certificationName", base.from_string, fields);
                base.export_element (obj, "DispatchInstReply", "clearedMW", base.from_string, fields);
                base.export_element (obj, "DispatchInstReply", "instructionTime", base.from_datetime, fields);
                base.export_element (obj, "DispatchInstReply", "instructionType", base.from_string, fields);
                base.export_element (obj, "DispatchInstReply", "passIndicator", base.from_string, fields);
                base.export_element (obj, "DispatchInstReply", "receivedTime", base.from_datetime, fields);
                base.export_element (obj, "DispatchInstReply", "startTime", base.from_datetime, fields);
                base.export_attribute (obj, "DispatchInstReply", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Notification time curve as a function of down time.
         *
         * Relationship between crew notification time (Y1-axis) and unit startup time (Y2-axis) vs. unit elapsed down time (X-axis).
         *
         */
        class NotificationTimeCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NotificationTimeCurve;
                if (null == bucket)
                   cim_data.NotificationTimeCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NotificationTimeCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "NotificationTimeCurve";

                var bucket = context.parsed.NotificationTimeCurve;
                if (null == bucket)
                   context.parsed.NotificationTimeCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Signifies an event to trigger one or more activities, such as reading a meter, recalculating a bill, requesting work, when generating units shall be scheduled for maintenance, when a transformer is scheduled to be refurbished, etc.
         *
         */
        class MarketScheduledEvent extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketScheduledEvent;
                if (null == bucket)
                   cim_data.MarketScheduledEvent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketScheduledEvent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketScheduledEvent";
                base.parse_element (/<cim:MarketScheduledEvent.category>([\s\S]*?)<\/cim:MarketScheduledEvent.category>/g, obj, "category", base.to_string, sub, context);
                base.parse_element (/<cim:MarketScheduledEvent.duration>([\s\S]*?)<\/cim:MarketScheduledEvent.duration>/g, obj, "duration", base.to_string, sub, context);
                base.parse_element (/<cim:MarketScheduledEvent.status>([\s\S]*?)<\/cim:MarketScheduledEvent.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:MarketScheduledEvent.MajorChargeGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MajorChargeGroup", sub, context);

                var bucket = context.parsed.MarketScheduledEvent;
                if (null == bucket)
                   context.parsed.MarketScheduledEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "MarketScheduledEvent", "category", base.from_string, fields);
                base.export_element (obj, "MarketScheduledEvent", "duration", base.from_string, fields);
                base.export_element (obj, "MarketScheduledEvent", "status", base.from_string, fields);
                base.export_attribute (obj, "MarketScheduledEvent", "MajorChargeGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Relationship between unit operating price in \$/hour (Y-axis) and unit output in MW (X-axis).
         *
         */
        class BidPriceCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidPriceCurve;
                if (null == bucket)
                   cim_data.BidPriceCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidPriceCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "BidPriceCurve";

                var bucket = context.parsed.BidPriceCurve;
                if (null == bucket)
                   context.parsed.BidPriceCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Containment for bid hourly parameters that are not product dependent.
         *
         */
        class BidHourlySchedule extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidHourlySchedule;
                if (null == bucket)
                   cim_data.BidHourlySchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidHourlySchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "BidHourlySchedule";
                base.parse_attribute (/<cim:BidHourlySchedule.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);

                var bucket = context.parsed.BidHourlySchedule;
                if (null == bucket)
                   context.parsed.BidHourlySchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["RegularIntervalSchedule"](obj, exporters, false);

                base.export_attribute (obj, "BidHourlySchedule", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The fixed operating level of a Pump Storage Hydro Unit operating as a hydro pump.
         *
         * Associated with the energy market product type.
         *
         */
        class PumpingLevelSchedule extends BidHourlyProductSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PumpingLevelSchedule;
                if (null == bucket)
                   cim_data.PumpingLevelSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PumpingLevelSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BidHourlyProductSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "PumpingLevelSchedule";
                base.parse_element (/<cim:PumpingLevelSchedule.value>([\s\S]*?)<\/cim:PumpingLevelSchedule.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.PumpingLevelSchedule;
                if (null == bucket)
                   context.parsed.PumpingLevelSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["BidHourlyProductSchedule"](obj, exporters, false);

                base.export_element (obj, "PumpingLevelSchedule", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The operating cost of a Pump Storage Hydro Unit operating as a hydro pump.
         *
         * This schedule is assocated with the hourly parameters in a resource bid associated with a specific product within the bid.
         *
         */
        class PumpingCostSchedule extends BidHourlyProductSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PumpingCostSchedule;
                if (null == bucket)
                   cim_data.PumpingCostSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PumpingCostSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BidHourlyProductSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "PumpingCostSchedule";
                base.parse_element (/<cim:PumpingCostSchedule.value>([\s\S]*?)<\/cim:PumpingCostSchedule.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.PumpingCostSchedule;
                if (null == bucket)
                   context.parsed.PumpingCostSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["BidHourlyProductSchedule"](obj, exporters, false);

                base.export_element (obj, "PumpingCostSchedule", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The cost to shutdown a Pump Storage Hydro Unit (in pump mode) or a pump.
         *
         * This schedule is assocated with the hourly parameters in a resource bid associated with a specific product within the bid.
         *
         */
        class PumpingShutDownCostSchedule extends BidHourlyProductSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PumpingShutDownCostSchedule;
                if (null == bucket)
                   cim_data.PumpingShutDownCostSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PumpingShutDownCostSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BidHourlyProductSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "PumpingShutDownCostSchedule";
                base.parse_element (/<cim:PumpingShutDownCostSchedule.value>([\s\S]*?)<\/cim:PumpingShutDownCostSchedule.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.PumpingShutDownCostSchedule;
                if (null == bucket)
                   context.parsed.PumpingShutDownCostSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["BidHourlyProductSchedule"](obj, exporters, false);

                base.export_element (obj, "PumpingShutDownCostSchedule", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Energy bid for generation, load, or virtual type for the whole of the market-trading period (i.e., one day in day ahead market or one hour in the real time market)
         *
         */
        class ResourceBid extends Bid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ResourceBid;
                if (null == bucket)
                   cim_data.ResourceBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Bid.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceBid";
                base.parse_element (/<cim:ResourceBid.aggregationFlag>([\s\S]*?)<\/cim:ResourceBid.aggregationFlag>/g, obj, "aggregationFlag", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.bidStatus>([\s\S]*?)<\/cim:ResourceBid.bidStatus>/g, obj, "bidStatus", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.commodityType>([\s\S]*?)<\/cim:ResourceBid.commodityType>/g, obj, "commodityType", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.contingencyAvailFlag>([\s\S]*?)<\/cim:ResourceBid.contingencyAvailFlag>/g, obj, "contingencyAvailFlag", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.createdISO>([\s\S]*?)<\/cim:ResourceBid.createdISO>/g, obj, "createdISO", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.energyMaxDay>([\s\S]*?)<\/cim:ResourceBid.energyMaxDay>/g, obj, "energyMaxDay", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceBid.energyMinDay>([\s\S]*?)<\/cim:ResourceBid.energyMinDay>/g, obj, "energyMinDay", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceBid.marketSepFlag>([\s\S]*?)<\/cim:ResourceBid.marketSepFlag>/g, obj, "marketSepFlag", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.minDispatchTime>([\s\S]*?)<\/cim:ResourceBid.minDispatchTime>/g, obj, "minDispatchTime", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.resourceLoadingType>([\s\S]*?)<\/cim:ResourceBid.resourceLoadingType>/g, obj, "resourceLoadingType", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.shutDownsMaxDay>([\s\S]*?)<\/cim:ResourceBid.shutDownsMaxDay>/g, obj, "shutDownsMaxDay", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.shutDownsMaxWeek>([\s\S]*?)<\/cim:ResourceBid.shutDownsMaxWeek>/g, obj, "shutDownsMaxWeek", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.startUpsMaxDay>([\s\S]*?)<\/cim:ResourceBid.startUpsMaxDay>/g, obj, "startUpsMaxDay", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.startUpsMaxWeek>([\s\S]*?)<\/cim:ResourceBid.startUpsMaxWeek>/g, obj, "startUpsMaxWeek", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceBid.virtual>([\s\S]*?)<\/cim:ResourceBid.virtual>/g, obj, "virtual", base.to_boolean, sub, context);

                var bucket = context.parsed.ResourceBid;
                if (null == bucket)
                   context.parsed.ResourceBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Bid"](obj, exporters, false);

                base.export_element (obj, "ResourceBid", "aggregationFlag", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "bidStatus", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "commodityType", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "contingencyAvailFlag", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "createdISO", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "energyMaxDay", base.from_float, fields);
                base.export_element (obj, "ResourceBid", "energyMinDay", base.from_float, fields);
                base.export_element (obj, "ResourceBid", "marketSepFlag", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "minDispatchTime", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "resourceLoadingType", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "shutDownsMaxDay", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "shutDownsMaxWeek", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "startUpsMaxDay", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "startUpsMaxWeek", base.from_string, fields);
                base.export_element (obj, "ResourceBid", "virtual", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class represents the inter tie bid
         *
         */
        class InterTieBid extends ResourceBid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InterTieBid;
                if (null == bucket)
                   cim_data.InterTieBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InterTieBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ResourceBid.prototype.parse.call (this, context, sub);
                obj.cls = "InterTieBid";
                base.parse_element (/<cim:InterTieBid.minHourlyBlock >([\s\S]*?)<\/cim:InterTieBid.minHourlyBlock >/g, obj, "minHourlyBlock ", base.to_string, sub, context);
                base.parse_attribute (/<cim:InterTieBid.RegisteredInterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredInterTie", sub, context);

                var bucket = context.parsed.InterTieBid;
                if (null == bucket)
                   context.parsed.InterTieBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ResourceBid"](obj, exporters, false);

                base.export_element (obj, "InterTieBid", "minHourlyBlock ", base.from_string, fields);
                base.export_attribute (obj, "InterTieBid", "RegisteredInterTie", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Bilateral or scheduled transactions for energy and ancillary services considered by market clearing process
         *
         */
        class TransactionBid extends Bid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransactionBid;
                if (null == bucket)
                   cim_data.TransactionBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransactionBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Bid.prototype.parse.call (this, context, sub);
                obj.cls = "TransactionBid";
                base.parse_element (/<cim:TransactionBid.demandTransaction>([\s\S]*?)<\/cim:TransactionBid.demandTransaction>/g, obj, "demandTransaction", base.to_boolean, sub, context);
                base.parse_element (/<cim:TransactionBid.dispatchable>([\s\S]*?)<\/cim:TransactionBid.dispatchable>/g, obj, "dispatchable", base.to_boolean, sub, context);
                base.parse_element (/<cim:TransactionBid.payCongestion>([\s\S]*?)<\/cim:TransactionBid.payCongestion>/g, obj, "payCongestion", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:TransactionBid.Receipt_Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Receipt_Pnode", sub, context);
                base.parse_attribute (/<cim:TransactionBid.Delivery_Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Delivery_Pnode", sub, context);
                base.parse_attribute (/<cim:TransactionBid.TransmissionReservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionReservation", sub, context);

                var bucket = context.parsed.TransactionBid;
                if (null == bucket)
                   context.parsed.TransactionBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Bid"](obj, exporters, false);

                base.export_element (obj, "TransactionBid", "demandTransaction", base.from_boolean, fields);
                base.export_element (obj, "TransactionBid", "dispatchable", base.from_boolean, fields);
                base.export_element (obj, "TransactionBid", "payCongestion", base.from_boolean, fields);
                base.export_attribute (obj, "TransactionBid", "Receipt_Pnode", fields);
                base.export_attribute (obj, "TransactionBid", "Delivery_Pnode", fields);
                base.export_attribute (obj, "TransactionBid", "TransmissionReservation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * AreaLoadBid is not submitted by a market participant into the Markets.
         *
         * Instead, it is simply an aggregation of all LoadBids contained wtihin a specific SubControlArea. This entity should inherit from Bid for representation of the timeframe (startTime, stopTime) and the market type.
         *
         */
        class AreaLoadBid extends Bid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AreaLoadBid;
                if (null == bucket)
                   cim_data.AreaLoadBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AreaLoadBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Bid.prototype.parse.call (this, context, sub);
                obj.cls = "AreaLoadBid";
                base.parse_element (/<cim:AreaLoadBid.demandBidMW>([\s\S]*?)<\/cim:AreaLoadBid.demandBidMW>/g, obj, "demandBidMW", base.to_float, sub, context);

                var bucket = context.parsed.AreaLoadBid;
                if (null == bucket)
                   context.parsed.AreaLoadBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Bid"](obj, exporters, false);

                base.export_element (obj, "AreaLoadBid", "demandBidMW", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Offer to supply energy/ancillary services from a load resource (participating load reduces consumption)
         *
         */
        class LoadBid extends ResourceBid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadBid;
                if (null == bucket)
                   cim_data.LoadBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ResourceBid.prototype.parse.call (this, context, sub);
                obj.cls = "LoadBid";
                base.parse_element (/<cim:LoadBid.dropRampRate>([\s\S]*?)<\/cim:LoadBid.dropRampRate>/g, obj, "dropRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:LoadBid.loadRedInitiationCost>([\s\S]*?)<\/cim:LoadBid.loadRedInitiationCost>/g, obj, "loadRedInitiationCost", base.to_string, sub, context);
                base.parse_element (/<cim:LoadBid.loadRedInitiationTime>([\s\S]*?)<\/cim:LoadBid.loadRedInitiationTime>/g, obj, "loadRedInitiationTime", base.to_float, sub, context);
                base.parse_element (/<cim:LoadBid.marketDate>([\s\S]*?)<\/cim:LoadBid.marketDate>/g, obj, "marketDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:LoadBid.meteredValue>([\s\S]*?)<\/cim:LoadBid.meteredValue>/g, obj, "meteredValue", base.to_boolean, sub, context);
                base.parse_element (/<cim:LoadBid.minLoad>([\s\S]*?)<\/cim:LoadBid.minLoad>/g, obj, "minLoad", base.to_string, sub, context);
                base.parse_element (/<cim:LoadBid.minLoadReduction>([\s\S]*?)<\/cim:LoadBid.minLoadReduction>/g, obj, "minLoadReduction", base.to_string, sub, context);
                base.parse_element (/<cim:LoadBid.minLoadReductionCost>([\s\S]*?)<\/cim:LoadBid.minLoadReductionCost>/g, obj, "minLoadReductionCost", base.to_string, sub, context);
                base.parse_element (/<cim:LoadBid.minLoadReductionInterval>([\s\S]*?)<\/cim:LoadBid.minLoadReductionInterval>/g, obj, "minLoadReductionInterval", base.to_float, sub, context);
                base.parse_element (/<cim:LoadBid.minTimeBetLoadRed>([\s\S]*?)<\/cim:LoadBid.minTimeBetLoadRed>/g, obj, "minTimeBetLoadRed", base.to_float, sub, context);
                base.parse_element (/<cim:LoadBid.pickUpRampRate>([\s\S]*?)<\/cim:LoadBid.pickUpRampRate>/g, obj, "pickUpRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:LoadBid.priceSetting>([\s\S]*?)<\/cim:LoadBid.priceSetting>/g, obj, "priceSetting", base.to_boolean, sub, context);
                base.parse_element (/<cim:LoadBid.reqNoticeTime>([\s\S]*?)<\/cim:LoadBid.reqNoticeTime>/g, obj, "reqNoticeTime", base.to_float, sub, context);
                base.parse_element (/<cim:LoadBid.shutdownCost>([\s\S]*?)<\/cim:LoadBid.shutdownCost>/g, obj, "shutdownCost", base.to_string, sub, context);
                base.parse_attribute (/<cim:LoadBid.AreaLoadBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AreaLoadBid", sub, context);
                base.parse_attribute (/<cim:LoadBid.RegisteredLoad\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredLoad", sub, context);

                var bucket = context.parsed.LoadBid;
                if (null == bucket)
                   context.parsed.LoadBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ResourceBid"](obj, exporters, false);

                base.export_element (obj, "LoadBid", "dropRampRate", base.from_string, fields);
                base.export_element (obj, "LoadBid", "loadRedInitiationCost", base.from_string, fields);
                base.export_element (obj, "LoadBid", "loadRedInitiationTime", base.from_float, fields);
                base.export_element (obj, "LoadBid", "marketDate", base.from_datetime, fields);
                base.export_element (obj, "LoadBid", "meteredValue", base.from_boolean, fields);
                base.export_element (obj, "LoadBid", "minLoad", base.from_string, fields);
                base.export_element (obj, "LoadBid", "minLoadReduction", base.from_string, fields);
                base.export_element (obj, "LoadBid", "minLoadReductionCost", base.from_string, fields);
                base.export_element (obj, "LoadBid", "minLoadReductionInterval", base.from_float, fields);
                base.export_element (obj, "LoadBid", "minTimeBetLoadRed", base.from_float, fields);
                base.export_element (obj, "LoadBid", "pickUpRampRate", base.from_string, fields);
                base.export_element (obj, "LoadBid", "priceSetting", base.from_boolean, fields);
                base.export_element (obj, "LoadBid", "reqNoticeTime", base.from_float, fields);
                base.export_element (obj, "LoadBid", "shutdownCost", base.from_string, fields);
                base.export_attribute (obj, "LoadBid", "AreaLoadBid", fields);
                base.export_attribute (obj, "LoadBid", "RegisteredLoad", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Offer to supply energy/ancillary services from a generating unit or resource
         *
         */
        class GeneratingBid extends ResourceBid
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GeneratingBid;
                if (null == bucket)
                   cim_data.GeneratingBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GeneratingBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ResourceBid.prototype.parse.call (this, context, sub);
                obj.cls = "GeneratingBid";
                base.parse_element (/<cim:GeneratingBid.combinedCycleUnitOffer>([\s\S]*?)<\/cim:GeneratingBid.combinedCycleUnitOffer>/g, obj, "combinedCycleUnitOffer", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.downTimeMax>([\s\S]*?)<\/cim:GeneratingBid.downTimeMax>/g, obj, "downTimeMax", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.installedCapacity>([\s\S]*?)<\/cim:GeneratingBid.installedCapacity>/g, obj, "installedCapacity", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.lowerRampRate>([\s\S]*?)<\/cim:GeneratingBid.lowerRampRate>/g, obj, "lowerRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.maxEmergencyMW>([\s\S]*?)<\/cim:GeneratingBid.maxEmergencyMW>/g, obj, "maxEmergencyMW", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.maximumEconomicMW>([\s\S]*?)<\/cim:GeneratingBid.maximumEconomicMW>/g, obj, "maximumEconomicMW", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.minEmergencyMW>([\s\S]*?)<\/cim:GeneratingBid.minEmergencyMW>/g, obj, "minEmergencyMW", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.minimumEconomicMW>([\s\S]*?)<\/cim:GeneratingBid.minimumEconomicMW>/g, obj, "minimumEconomicMW", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.noLoadCost>([\s\S]*?)<\/cim:GeneratingBid.noLoadCost>/g, obj, "noLoadCost", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.notificationTime>([\s\S]*?)<\/cim:GeneratingBid.notificationTime>/g, obj, "notificationTime", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.operatingMode>([\s\S]*?)<\/cim:GeneratingBid.operatingMode>/g, obj, "operatingMode", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.raiseRampRate>([\s\S]*?)<\/cim:GeneratingBid.raiseRampRate>/g, obj, "raiseRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.rampCurveType>([\s\S]*?)<\/cim:GeneratingBid.rampCurveType>/g, obj, "rampCurveType", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.startupCost>([\s\S]*?)<\/cim:GeneratingBid.startupCost>/g, obj, "startupCost", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingBid.startUpRampRate>([\s\S]*?)<\/cim:GeneratingBid.startUpRampRate>/g, obj, "startUpRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.startUpType>([\s\S]*?)<\/cim:GeneratingBid.startUpType>/g, obj, "startUpType", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingBid.upTimeMax>([\s\S]*?)<\/cim:GeneratingBid.upTimeMax>/g, obj, "upTimeMax", base.to_float, sub, context);
                base.parse_attribute (/<cim:GeneratingBid.NotificationTimeCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NotificationTimeCurve", sub, context);
                base.parse_attribute (/<cim:GeneratingBid.StartUpCostCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartUpCostCurve", sub, context);
                base.parse_attribute (/<cim:GeneratingBid.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);
                base.parse_attribute (/<cim:GeneratingBid.StartUpTimeCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartUpTimeCurve", sub, context);
                base.parse_attribute (/<cim:GeneratingBid.BidSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidSet", sub, context);

                var bucket = context.parsed.GeneratingBid;
                if (null == bucket)
                   context.parsed.GeneratingBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ResourceBid"](obj, exporters, false);

                base.export_element (obj, "GeneratingBid", "combinedCycleUnitOffer", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "downTimeMax", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "installedCapacity", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "lowerRampRate", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "maxEmergencyMW", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "maximumEconomicMW", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "minEmergencyMW", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "minimumEconomicMW", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "noLoadCost", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "notificationTime", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "operatingMode", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "raiseRampRate", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "rampCurveType", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "startupCost", base.from_float, fields);
                base.export_element (obj, "GeneratingBid", "startUpRampRate", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "startUpType", base.from_string, fields);
                base.export_element (obj, "GeneratingBid", "upTimeMax", base.from_float, fields);
                base.export_attribute (obj, "GeneratingBid", "NotificationTimeCurve", fields);
                base.export_attribute (obj, "GeneratingBid", "StartUpCostCurve", fields);
                base.export_attribute (obj, "GeneratingBid", "RegisteredGenerator", fields);
                base.export_attribute (obj, "GeneratingBid", "StartUpTimeCurve", fields);
                base.export_attribute (obj, "GeneratingBid", "BidSet", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Result of bid validation against conditions that may exist on an interchange that becomes disconnected or is heavily discounted with respect the MW flow.
         *
         * This schedule is assocated with the hourly parameters in a resource bid.
         *
         */
        class OpenTieSchedule extends BidHourlySchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OpenTieSchedule;
                if (null == bucket)
                   cim_data.OpenTieSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OpenTieSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BidHourlySchedule.prototype.parse.call (this, context, sub);
                obj.cls = "OpenTieSchedule";
                base.parse_element (/<cim:OpenTieSchedule.value>([\s\S]*?)<\/cim:OpenTieSchedule.value>/g, obj, "value", base.to_boolean, sub, context);

                var bucket = context.parsed.OpenTieSchedule;
                if (null == bucket)
                   context.parsed.OpenTieSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["BidHourlySchedule"](obj, exporters, false);

                base.export_element (obj, "OpenTieSchedule", "value", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An indicator specifying that a resource shall have an Hourly Pre-Dispatch.
         *
         * The resource could be a RegisteredGenerator or a RegisteredInterTie.
         *
         */
        class HourlyPreDispatchSchedule extends BidHourlySchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HourlyPreDispatchSchedule;
                if (null == bucket)
                   cim_data.HourlyPreDispatchSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HourlyPreDispatchSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BidHourlySchedule.prototype.parse.call (this, context, sub);
                obj.cls = "HourlyPreDispatchSchedule";
                base.parse_element (/<cim:HourlyPreDispatchSchedule.value>([\s\S]*?)<\/cim:HourlyPreDispatchSchedule.value>/g, obj, "value", base.to_boolean, sub, context);

                var bucket = context.parsed.HourlyPreDispatchSchedule;
                if (null == bucket)
                   context.parsed.HourlyPreDispatchSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["BidHourlySchedule"](obj, exporters, false);

                base.export_element (obj, "HourlyPreDispatchSchedule", "value", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                BidHourlySchedule: BidHourlySchedule,
                ChargeComponent: ChargeComponent,
                BidSet: BidSet,
                MarketScheduledEvent: MarketScheduledEvent,
                LoadBid: LoadBid,
                OpenTieSchedule: OpenTieSchedule,
                BidError: BidError,
                PumpingShutDownCostSchedule: PumpingShutDownCostSchedule,
                BidHourlyProductSchedule: BidHourlyProductSchedule,
                HourlyPreDispatchSchedule: HourlyPreDispatchSchedule,
                InterTieDispatchResponse: InterTieDispatchResponse,
                LoadReductionPriceCurve: LoadReductionPriceCurve,
                LoadFollowingInst: LoadFollowingInst,
                BidPriceSchedule: BidPriceSchedule,
                PumpingLevelSchedule: PumpingLevelSchedule,
                StartUpCostCurve: StartUpCostCurve,
                BidDistributionFactor: BidDistributionFactor,
                EnergyPriceCurve: EnergyPriceCurve,
                AreaLoadBid: AreaLoadBid,
                ProductBid: ProductBid,
                DispatchInstReply: DispatchInstReply,
                BidPriceCurve: BidPriceCurve,
                ResourceBid: ResourceBid,
                Bid: Bid,
                RampRateCurve: RampRateCurve,
                NotificationTimeCurve: NotificationTimeCurve,
                BidSelfSched: BidSelfSched,
                ActionRequest: ActionRequest,
                MajorChargeGroup: MajorChargeGroup,
                PumpingCostSchedule: PumpingCostSchedule,
                GeneratingBid: GeneratingBid,
                TransactionBid: TransactionBid,
                ChargeGroup: ChargeGroup,
                TradeProduct: TradeProduct,
                StartUpTimeCurve: StartUpTimeCurve,
                Trade: Trade,
                InterTieBid: InterTieBid,
                AttributeProperty: AttributeProperty,
                ChargeType: ChargeType,
                TradeError: TradeError
            }
        );
    }
);