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
        function parse_ChargeGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ChargeGroup";
            base.parse_element (/<cim:ChargeGroup.marketCode>([\s\S]*?)<\/cim:ChargeGroup.marketCode>/g, obj, "marketCode", base.to_string, sub, context);

            base.parse_element (/<cim:ChargeGroup.effectiveDate>([\s\S]*?)<\/cim:ChargeGroup.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);

            base.parse_element (/<cim:ChargeGroup.terminationDate>([\s\S]*?)<\/cim:ChargeGroup.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);

            /**
             * A ChargeGroup instance can have relationships with other ChargeGroup instances.
             *
             */
            base.parse_attribute (/<cim:ChargeGroup.ChargeGroupParent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeGroupParent", sub, context, true);

            bucket = context.parsed.ChargeGroup;
            if (null == bucket)
                context.parsed.ChargeGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Component of a bid that pertains to one market product.
         *
         */
        function parse_ProductBid (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ProductBid";
            base.parse_attribute (/<cim:ProductBid.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context, true);

            /**
             * A bid comprises one or more product bids of market products
             *
             */
            base.parse_attribute (/<cim:ProductBid.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context, true);

            bucket = context.parsed.ProductBid;
            if (null == bucket)
                context.parsed.ProductBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Metered SubSystem Load Following Instruction
         *
         */
        function parse_LoadFollowingInst (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LoadFollowingInst";
            /**
             * Unique instruction id per instruction, assigned by the SC and provided to ADS.
             *
             * ADS passes through.
             *
             */
            base.parse_element (/<cim:LoadFollowingInst.mssInstructionID>([\s\S]*?)<\/cim:LoadFollowingInst.mssInstructionID>/g, obj, "mssInstructionID", base.to_string, sub, context);

            /**
             * Instruction Start Time
             *
             */
            base.parse_element (/<cim:LoadFollowingInst.startTime>([\s\S]*?)<\/cim:LoadFollowingInst.startTime>/g, obj, "startTime", base.to_datetime, sub, context);

            /**
             * Instruction End Time
             *
             */
            base.parse_element (/<cim:LoadFollowingInst.endTime>([\s\S]*?)<\/cim:LoadFollowingInst.endTime>/g, obj, "endTime", base.to_datetime, sub, context);

            /**
             * Load Following MW Positive for follow-up and negative for follow-down
             *
             */
            base.parse_element (/<cim:LoadFollowingInst.loadFollowingMW>([\s\S]*?)<\/cim:LoadFollowingInst.loadFollowingMW>/g, obj, "loadFollowingMW", base.to_float, sub, context);

            base.parse_attribute (/<cim:LoadFollowingInst.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context, true);

            bucket = context.parsed.LoadFollowingInst;
            if (null == bucket)
                context.parsed.LoadFollowingInst = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Property for a particular attribute that contains name and value
         *
         */
        function parse_AttributeProperty (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "AttributeProperty";
            base.parse_element (/<cim:AttributeProperty.sequence>([\s\S]*?)<\/cim:AttributeProperty.sequence>/g, obj, "sequence", base.to_string, sub, context);

            base.parse_element (/<cim:AttributeProperty.propertyName>([\s\S]*?)<\/cim:AttributeProperty.propertyName>/g, obj, "propertyName", base.to_string, sub, context);

            base.parse_element (/<cim:AttributeProperty.propertyValue>([\s\S]*?)<\/cim:AttributeProperty.propertyValue>/g, obj, "propertyValue", base.to_string, sub, context);

            base.parse_attribute (/<cim:AttributeProperty.MktUserAttribute\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktUserAttribute", sub, context, true);

            bucket = context.parsed.AttributeProperty;
            if (null == bucket)
                context.parsed.AttributeProperty = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * AreaLoadBid is not submitted by a market participant into the Markets.
         *
         * Instead, it is simply an aggregation of all LoadBids contained wtihin a specific SubControlArea. This entity should inherit from Bid for representation of the timeframe (startTime, stopTime) and the market type.
         *
         */
        function parse_AreaLoadBid (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Bid (context, sub);
            obj.cls = "AreaLoadBid";
            /**
             * The Demand Bid Megawatt for the area case.
             *
             * Attribute Usage: This is Scheduled demand MW in Day Ahead
             *
             */
            base.parse_element (/<cim:AreaLoadBid.demandBidMW>([\s\S]*?)<\/cim:AreaLoadBid.demandBidMW>/g, obj, "demandBidMW", base.to_float, sub, context);

            bucket = context.parsed.AreaLoadBid;
            if (null == bucket)
                context.parsed.AreaLoadBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This is the price sensitivity that bidder expresses for allowing market load interruption.
         *
         * Relationship between price (Y1-axis) vs. MW (X-axis).
         *
         */
        function parse_LoadReductionPriceCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "LoadReductionPriceCurve";
            base.parse_attribute (/<cim:LoadReductionPriceCurve.LoadBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadBid", sub, context, true);

            bucket = context.parsed.LoadReductionPriceCurve;
            if (null == bucket)
                context.parsed.LoadReductionPriceCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Containment for bid parameters that are dependent on a market product type.
         *
         */
        function parse_BidHourlyProductSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "BidHourlyProductSchedule";
            base.parse_attribute (/<cim:BidHourlyProductSchedule.ProductBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBid", sub, context, true);

            bucket = context.parsed.BidHourlyProductSchedule;
            if (null == bucket)
                context.parsed.BidHourlyProductSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Startup time curve as a function of down time, where time is specified in minutes.
         *
         * Relationship between unit startup time (Y1-axis) vs. unit elapsed down time (X-axis).
         *
         */
        function parse_StartUpTimeCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "StartUpTimeCurve";
            base.parse_attribute (/<cim:StartUpTimeCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context, true);

            bucket = context.parsed.StartUpTimeCurve;
            if (null == bucket)
                context.parsed.StartUpTimeCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Offer to supply energy/ancillary services from a load resource (participating load reduces consumption)
         *
         */
        function parse_LoadBid (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ResourceBid (context, sub);
            obj.cls = "LoadBid";
            /**
             * Maximum rate that load can be reduced (MW/minute)
             *
             */
            base.parse_element (/<cim:LoadBid.dropRampRate>([\s\S]*?)<\/cim:LoadBid.dropRampRate>/g, obj, "dropRampRate", base.to_string, sub, context);

            /**
             * load reduction initiation cost
             *
             */
            base.parse_element (/<cim:LoadBid.loadRedInitiationCost>([\s\S]*?)<\/cim:LoadBid.loadRedInitiationCost>/g, obj, "loadRedInitiationCost", base.to_string, sub, context);

            /**
             * load reduction initiation time
             *
             */
            base.parse_element (/<cim:LoadBid.loadRedInitiationTime>([\s\S]*?)<\/cim:LoadBid.loadRedInitiationTime>/g, obj, "loadRedInitiationTime", base.to_float, sub, context);

            /**
             * The date represents the NextMarketDate for which the load response bids apply to.
             *
             */
            base.parse_element (/<cim:LoadBid.marketDate>([\s\S]*?)<\/cim:LoadBid.marketDate>/g, obj, "marketDate", base.to_datetime, sub, context);

            /**
             * Flag indicated that the load reduction is metered. (See above)
             *
             * If priceSetting and meteredValue both equal 1, then the facility is eligible to set LMP in the real time market.
             *
             */
            base.parse_element (/<cim:LoadBid.meteredValue>([\s\S]*?)<\/cim:LoadBid.meteredValue>/g, obj, "meteredValue", base.to_boolean, sub, context);

            /**
             * Minimum MW load below which it may not be reduced.
             *
             */
            base.parse_element (/<cim:LoadBid.minLoad>([\s\S]*?)<\/cim:LoadBid.minLoad>/g, obj, "minLoad", base.to_string, sub, context);

            /**
             * Minimum MW for a load reduction (e.g.
             *
             * MW rating of a discrete pump.
             *
             */
            base.parse_element (/<cim:LoadBid.minLoadReduction>([\s\S]*?)<\/cim:LoadBid.minLoadReduction>/g, obj, "minLoadReduction", base.to_string, sub, context);

            /**
             * Cost in \$ at the minimum reduced load
             *
             */
            base.parse_element (/<cim:LoadBid.minLoadReductionCost>([\s\S]*?)<\/cim:LoadBid.minLoadReductionCost>/g, obj, "minLoadReductionCost", base.to_string, sub, context);

            /**
             * Shortest period load reduction shall be maintained before load can be restored to normal levels.
             *
             */
            base.parse_element (/<cim:LoadBid.minLoadReductionInterval>([\s\S]*?)<\/cim:LoadBid.minLoadReductionInterval>/g, obj, "minLoadReductionInterval", base.to_float, sub, context);

            /**
             * Shortest time that load shall be left at normal levels before a new load reduction.
             *
             */
            base.parse_element (/<cim:LoadBid.minTimeBetLoadRed>([\s\S]*?)<\/cim:LoadBid.minTimeBetLoadRed>/g, obj, "minTimeBetLoadRed", base.to_float, sub, context);

            /**
             * Maximum rate load may be restored (MW/minute)
             *
             */
            base.parse_element (/<cim:LoadBid.pickUpRampRate>([\s\S]*?)<\/cim:LoadBid.pickUpRampRate>/g, obj, "pickUpRampRate", base.to_string, sub, context);

            /**
             * Flag to indicate that the facility can set LMP Works in tandem with Metered Value.
             *
             * Greater chance of this being dynamic than the Metered Value, however, it is requested that Price Setting and Metered Value stay at the same source.  Currently no customers have implemented the metering capability, but if this option is implemented, then Price Setting could become dynamic.  However, Metered Value will remain static.
             *
             */
            base.parse_element (/<cim:LoadBid.priceSetting>([\s\S]*?)<\/cim:LoadBid.priceSetting>/g, obj, "priceSetting", base.to_boolean, sub, context);

            /**
             * Time period that is required from an order to reduce a load to the time that it takes to get to the minimum load reduction.
             *
             */
            base.parse_element (/<cim:LoadBid.reqNoticeTime>([\s\S]*?)<\/cim:LoadBid.reqNoticeTime>/g, obj, "reqNoticeTime", base.to_float, sub, context);

            /**
             * The fixed cost associated with committing a load reduction.
             *
             */
            base.parse_element (/<cim:LoadBid.shutdownCost>([\s\S]*?)<\/cim:LoadBid.shutdownCost>/g, obj, "shutdownCost", base.to_string, sub, context);

            base.parse_attribute (/<cim:LoadBid.AreaLoadBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AreaLoadBid", sub, context, true);

            base.parse_attribute (/<cim:LoadBid.RegisteredLoad\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredLoad", sub, context, true);

            bucket = context.parsed.LoadBid;
            if (null == bucket)
                context.parsed.LoadBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between a price in \$(or other monetary unit) /hour (Y-axis) and a MW value (X-axis).
         *
         */
        function parse_EnergyPriceCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "EnergyPriceCurve";
            bucket = context.parsed.EnergyPriceCurve;
            if (null == bucket)
                context.parsed.EnergyPriceCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Defines self schedule values to be used for specified time intervals.
         *
         */
        function parse_BidSelfSched (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "BidSelfSched";
            /**
             * This is a Y/N flag for a self-schedule of a resource per market per date and hour, using a specific TR ID.
             *
             * It indicates whether a self-schedule using a TR is balanced with another self-schedule using the same TR ID.
             *
             */
            base.parse_element (/<cim:BidSelfSched.balancingFlag>([\s\S]*?)<\/cim:BidSelfSched.balancingFlag>/g, obj, "balancingFlag", base.to_string, sub, context);

            /**
             * bidType has two types as the required output of requirements and qualified pre-dispatch.
             *
             */
            base.parse_element (/<cim:BidSelfSched.bidType>([\s\S]*?)<\/cim:BidSelfSched.bidType>/g, obj, "bidType", base.to_string, sub, context);

            /**
             * This is a Y/N flag for a self-schedule of a resource per market per date and hour, using a specific TR ID.
             *
             * It indicates whether a self-schedule using a TR has scheduling priority in DAM/RTM.
             *
             */
            base.parse_element (/<cim:BidSelfSched.priorityFlag>([\s\S]*?)<\/cim:BidSelfSched.priorityFlag>/g, obj, "priorityFlag", base.to_string, sub, context);

            /**
             * Contains the PriceTaker, ExistingTransmissionContract, TransmissionOwnershipRights pumping self schedule quantity.
             *
             * If this value is not null, then the unit is in pumping mode.
             *
             */
            base.parse_element (/<cim:BidSelfSched.pumpSelfSchedMw>([\s\S]*?)<\/cim:BidSelfSched.pumpSelfSchedMw>/g, obj, "pumpSelfSchedMw", base.to_float, sub, context);

            /**
             * Indication of which type of self schedule is being referenced.
             *
             */
            base.parse_element (/<cim:BidSelfSched.referenceType>([\s\S]*?)<\/cim:BidSelfSched.referenceType>/g, obj, "referenceType", base.to_string, sub, context);

            /**
             * Self scheduled value
             *
             */
            base.parse_element (/<cim:BidSelfSched.selfSchedMw>([\s\S]*?)<\/cim:BidSelfSched.selfSchedMw>/g, obj, "selfSchedMw", base.to_float, sub, context);

            /**
             * Price Taker Export Self Sched Support Resource
             *
             */
            base.parse_element (/<cim:BidSelfSched.selfSchedSptResource>([\s\S]*?)<\/cim:BidSelfSched.selfSchedSptResource>/g, obj, "selfSchedSptResource", base.to_string, sub, context);

            /**
             * This attribute is used to specify if a bid includes a self sched bid.
             *
             * If so what self sched type is it. The possible values are shown as follow but not limited to:
             *
             */
            base.parse_element (/<cim:BidSelfSched.selfSchedType>([\s\S]*?)<\/cim:BidSelfSched.selfSchedType>/g, obj, "selfSchedType", base.to_string, sub, context);

            base.parse_element (/<cim:BidSelfSched.updateType>([\s\S]*?)<\/cim:BidSelfSched.updateType>/g, obj, "updateType", base.to_string, sub, context);

            /**
             * A unique identifier of a wheeling transaction.
             *
             * A wheeling transaction is a balanced Energy exchange among Supply and Demand Resources.
             *
             */
            base.parse_element (/<cim:BidSelfSched.wheelingTransactionReference>([\s\S]*?)<\/cim:BidSelfSched.wheelingTransactionReference>/g, obj, "wheelingTransactionReference", base.to_string, sub, context);

            base.parse_attribute (/<cim:BidSelfSched.ProductBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBid", sub, context, true);

            base.parse_attribute (/<cim:BidSelfSched.TransmissionContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context, true);

            base.parse_attribute (/<cim:BidSelfSched.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context, true);

            base.parse_attribute (/<cim:BidSelfSched.AdjacentCASet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AdjacentCASet", sub, context, true);

            base.parse_attribute (/<cim:BidSelfSched.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context, true);

            bucket = context.parsed.BidSelfSched;
            if (null == bucket)
                context.parsed.BidSelfSched = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Defines bid schedules to allow a product bid to use specified bid price curves for different time intervals.
         *
         */
        function parse_BidPriceSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "BidPriceSchedule";
            /**
             * BID Type:
             * 
             * I - Initial Bid;
             *
             * F - Final Bid
             *
             */
            base.parse_element (/<cim:BidPriceSchedule.bidType>([\s\S]*?)<\/cim:BidPriceSchedule.bidType>/g, obj, "bidType", base.to_string, sub, context);

            /**
             * Mitigation Status:
             * 
             * 'S' - Mitigated by SMPM because of "misconduct"
             * 'L; - Mitigated by LMPM because of "misconduct"
             * 'R' - Modified by LMPM because of RMR rules
             * 'M' - Mitigated because of "misconduct" both by SMPM and LMPM
             * 'B' - Mitigated because of "misconduct" both by SMPM and modified by LMLM because of RMR rules
             *
             * 'O' - original
             *
             */
            base.parse_element (/<cim:BidPriceSchedule.mitigationStatus>([\s\S]*?)<\/cim:BidPriceSchedule.mitigationStatus>/g, obj, "mitigationStatus", base.to_string, sub, context);

            base.parse_attribute (/<cim:BidPriceSchedule.BidPriceCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidPriceCurve", sub, context, true);

            base.parse_attribute (/<cim:BidPriceSchedule.ProductBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBid", sub, context, true);

            bucket = context.parsed.BidPriceSchedule;
            if (null == bucket)
                context.parsed.BidPriceSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The fixed operating level of a Pump Storage Hydro Unit operating as a hydro pump.
         *
         * Associated with the energy market product type.
         *
         */
        function parse_PumpingLevelSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_BidHourlyProductSchedule (context, sub);
            obj.cls = "PumpingLevelSchedule";
            base.parse_element (/<cim:PumpingLevelSchedule.value>([\s\S]*?)<\/cim:PumpingLevelSchedule.value>/g, obj, "value", base.to_float, sub, context);

            bucket = context.parsed.PumpingLevelSchedule;
            if (null == bucket)
                context.parsed.PumpingLevelSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A Charge Component is a list of configurable charge quality items to feed into settlement calculation and/or bill determinants.
         *
         */
        function parse_ChargeComponent (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ChargeComponent";
            base.parse_element (/<cim:ChargeComponent.deleteStatus>([\s\S]*?)<\/cim:ChargeComponent.deleteStatus>/g, obj, "deleteStatus", base.to_string, sub, context);

            base.parse_element (/<cim:ChargeComponent.effectiveDate>([\s\S]*?)<\/cim:ChargeComponent.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);

            base.parse_element (/<cim:ChargeComponent.terminationDate>([\s\S]*?)<\/cim:ChargeComponent.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);

            base.parse_element (/<cim:ChargeComponent.message>([\s\S]*?)<\/cim:ChargeComponent.message>/g, obj, "message", base.to_string, sub, context);

            base.parse_element (/<cim:ChargeComponent.type>([\s\S]*?)<\/cim:ChargeComponent.type>/g, obj, "type", base.to_string, sub, context);

            base.parse_element (/<cim:ChargeComponent.sum>([\s\S]*?)<\/cim:ChargeComponent.sum>/g, obj, "sum", base.to_string, sub, context);

            base.parse_element (/<cim:ChargeComponent.roundOff>([\s\S]*?)<\/cim:ChargeComponent.roundOff>/g, obj, "roundOff", base.to_string, sub, context);

            base.parse_element (/<cim:ChargeComponent.equation>([\s\S]*?)<\/cim:ChargeComponent.equation>/g, obj, "equation", base.to_string, sub, context);

            bucket = context.parsed.ChargeComponent;
            if (null == bucket)
                context.parsed.ChargeComponent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Result of bid validation against conditions that may exist on an interchange that becomes disconnected or is heavily discounted with respect the MW flow.
         *
         * This schedule is assocated with the hourly parameters in a resource bid.
         *
         */
        function parse_OpenTieSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_BidHourlySchedule (context, sub);
            obj.cls = "OpenTieSchedule";
            base.parse_element (/<cim:OpenTieSchedule.value>([\s\S]*?)<\/cim:OpenTieSchedule.value>/g, obj, "value", base.to_boolean, sub, context);

            bucket = context.parsed.OpenTieSchedule;
            if (null == bucket)
                context.parsed.OpenTieSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A Major Charge Group is the same as Invocie Type which provides the highest level of grouping for charge types configration.
         *
         * Examples as Market, FERC, RMR,
         *
         */
        function parse_MajorChargeGroup (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MajorChargeGroup";
            base.parse_element (/<cim:MajorChargeGroup.runType>([\s\S]*?)<\/cim:MajorChargeGroup.runType>/g, obj, "runType", base.to_string, sub, context);

            base.parse_element (/<cim:MajorChargeGroup.runVersion>([\s\S]*?)<\/cim:MajorChargeGroup.runVersion>/g, obj, "runVersion", base.to_string, sub, context);

            base.parse_element (/<cim:MajorChargeGroup.frequencyType>([\s\S]*?)<\/cim:MajorChargeGroup.frequencyType>/g, obj, "frequencyType", base.to_string, sub, context);

            base.parse_element (/<cim:MajorChargeGroup.invoiceType>([\s\S]*?)<\/cim:MajorChargeGroup.invoiceType>/g, obj, "invoiceType", base.to_string, sub, context);

            base.parse_element (/<cim:MajorChargeGroup.effectiveDate>([\s\S]*?)<\/cim:MajorChargeGroup.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);

            base.parse_element (/<cim:MajorChargeGroup.terminationDate>([\s\S]*?)<\/cim:MajorChargeGroup.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);

            base.parse_element (/<cim:MajorChargeGroup.requireAutorun>([\s\S]*?)<\/cim:MajorChargeGroup.requireAutorun>/g, obj, "requireAutorun", base.to_string, sub, context);

            /**
             * Revision number for the major charge group
             *
             */
            base.parse_element (/<cim:MajorChargeGroup.revisionNumber>([\s\S]*?)<\/cim:MajorChargeGroup.revisionNumber>/g, obj, "revisionNumber", base.to_string, sub, context);

            bucket = context.parsed.MajorChargeGroup;
            if (null == bucket)
                context.parsed.MajorChargeGroup = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Charge Type is the basic level configuration for settlement to process specific charges for invoicing purpose.
         *
         * Examples such as: Day Ahead Spinning Reserve Default Invoice Interest Charge, etc.
         *
         */
        function parse_ChargeType (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "ChargeType";
            base.parse_element (/<cim:ChargeType.effectiveDate>([\s\S]*?)<\/cim:ChargeType.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);

            base.parse_element (/<cim:ChargeType.terminationDate>([\s\S]*?)<\/cim:ChargeType.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);

            base.parse_element (/<cim:ChargeType.factor>([\s\S]*?)<\/cim:ChargeType.factor>/g, obj, "factor", base.to_string, sub, context);

            base.parse_element (/<cim:ChargeType.chargeOrder>([\s\S]*?)<\/cim:ChargeType.chargeOrder>/g, obj, "chargeOrder", base.to_string, sub, context);

            base.parse_element (/<cim:ChargeType.frequencyType>([\s\S]*?)<\/cim:ChargeType.frequencyType>/g, obj, "frequencyType", base.to_string, sub, context);

            base.parse_element (/<cim:ChargeType.chargeVersion>([\s\S]*?)<\/cim:ChargeType.chargeVersion>/g, obj, "chargeVersion", base.to_string, sub, context);

            base.parse_element (/<cim:ChargeType.totalInterval>([\s\S]*?)<\/cim:ChargeType.totalInterval>/g, obj, "totalInterval", base.to_string, sub, context);

            bucket = context.parsed.ChargeType;
            if (null == bucket)
                context.parsed.ChargeType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Startup costs and time as a function of down time.
         *
         * Relationship between unit startup cost (Y1-axis) vs. unit elapsed down time (X-axis).
         *
         */
        function parse_StartUpCostCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "StartUpCostCurve";
            bucket = context.parsed.StartUpCostCurve;
            if (null == bucket)
                context.parsed.StartUpCostCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class allows SC to input different time intervals for distribution factors
         *
         */
        function parse_BidDistributionFactor (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidDistributionFactor";
            /**
             * Start of the time interval in which bid is valid (yyyy-mm-dd hh24: mi: ss).
             *
             */
            base.parse_element (/<cim:BidDistributionFactor.timeIntervalStart>([\s\S]*?)<\/cim:BidDistributionFactor.timeIntervalStart>/g, obj, "timeIntervalStart", base.to_datetime, sub, context);

            /**
             * End of the time interval n which bid is valid (yyyy-mm-dd hh24: mi: ss)
             *
             */
            base.parse_element (/<cim:BidDistributionFactor.timeIntervalEnd>([\s\S]*?)<\/cim:BidDistributionFactor.timeIntervalEnd>/g, obj, "timeIntervalEnd", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:BidDistributionFactor.ProductBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductBid", sub, context, true);

            bucket = context.parsed.BidDistributionFactor;
            if (null == bucket)
                context.parsed.BidDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
        function parse_TradeProduct (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "TradeProduct";
            /**
             * IST  - InterSC Trade;
             * AST - Ancilliary Services Trade;
             *
             * UCT - Unit Commitment Trade
             *
             */
            base.parse_element (/<cim:TradeProduct.tradeType>([\s\S]*?)<\/cim:TradeProduct.tradeType>/g, obj, "tradeType", base.to_string, sub, context);

            /**
             * PHY (Physical Energy Trade);
             * APN (Energy Trades at Aggregated Pricing Nodes);
             * CPT (Converted Physical Energy Trade);
             * RUT (Regulation Up Trade);
             * RDT (Regulation Down Trade);
             * SRT (Spinning Reserve Trade);
             *
             * NRT (Non-Spinning Reserve Trade)
             *
             */
            base.parse_element (/<cim:TradeProduct.tradeProductType>([\s\S]*?)<\/cim:TradeProduct.tradeProductType>/g, obj, "tradeProductType", base.to_string, sub, context);

            bucket = context.parsed.TradeProduct;
            if (null == bucket)
                context.parsed.TradeProduct = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Trade error and warning messages associated with the rule engine processing of the submitted trade.
         *
         */
        function parse_TradeError (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TradeError";
            /**
             * Priority number for the error message
             *
             */
            base.parse_element (/<cim:TradeError.errPriority>([\s\S]*?)<\/cim:TradeError.errPriority>/g, obj, "errPriority", base.to_string, sub, context);

            /**
             * error message
             *
             */
            base.parse_element (/<cim:TradeError.errMessage>([\s\S]*?)<\/cim:TradeError.errMessage>/g, obj, "errMessage", base.to_string, sub, context);

            /**
             * Rule identifier which triggered the error/warning message
             *
             */
            base.parse_element (/<cim:TradeError.ruleID>([\s\S]*?)<\/cim:TradeError.ruleID>/g, obj, "ruleID", base.to_string, sub, context);

            /**
             * hour wihthin the trade for which the error applies
             *
             */
            base.parse_element (/<cim:TradeError.startTime>([\s\S]*?)<\/cim:TradeError.startTime>/g, obj, "startTime", base.to_datetime, sub, context);

            /**
             * hour wihthin the trade for which the error applies
             *
             */
            base.parse_element (/<cim:TradeError.endTime>([\s\S]*?)<\/cim:TradeError.endTime>/g, obj, "endTime", base.to_datetime, sub, context);

            /**
             * Timestamp of logged error/warning message
             *
             */
            base.parse_element (/<cim:TradeError.logTimeStamp>([\s\S]*?)<\/cim:TradeError.logTimeStamp>/g, obj, "logTimeStamp", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:TradeError.Trade\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Trade", sub, context, true);

            bucket = context.parsed.TradeError;
            if (null == bucket)
                context.parsed.TradeError = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An indicator specifying that a resource shall have an Hourly Pre-Dispatch.
         *
         * The resource could be a RegisteredGenerator or a RegisteredInterTie.
         *
         */
        function parse_HourlyPreDispatchSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_BidHourlySchedule (context, sub);
            obj.cls = "HourlyPreDispatchSchedule";
            /**
             * Flag defining that for this hour in the resource bid the resource shall have an hourly pre-dispatch.
             *
             */
            base.parse_element (/<cim:HourlyPreDispatchSchedule.value>([\s\S]*?)<\/cim:HourlyPreDispatchSchedule.value>/g, obj, "value", base.to_boolean, sub, context);

            bucket = context.parsed.HourlyPreDispatchSchedule;
            if (null == bucket)
                context.parsed.HourlyPreDispatchSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The operating cost of a Pump Storage Hydro Unit operating as a hydro pump.
         *
         * This schedule is assocated with the hourly parameters in a resource bid associated with a specific product within the bid.
         *
         */
        function parse_PumpingCostSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_BidHourlyProductSchedule (context, sub);
            obj.cls = "PumpingCostSchedule";
            base.parse_element (/<cim:PumpingCostSchedule.value>([\s\S]*?)<\/cim:PumpingCostSchedule.value>/g, obj, "value", base.to_float, sub, context);

            bucket = context.parsed.PumpingCostSchedule;
            if (null == bucket)
                context.parsed.PumpingCostSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The cost to shutdown a Pump Storage Hydro Unit (in pump mode) or a pump.
         *
         * This schedule is assocated with the hourly parameters in a resource bid associated with a specific product within the bid.
         *
         */
        function parse_PumpingShutDownCostSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_BidHourlyProductSchedule (context, sub);
            obj.cls = "PumpingShutDownCostSchedule";
            base.parse_element (/<cim:PumpingShutDownCostSchedule.value>([\s\S]*?)<\/cim:PumpingShutDownCostSchedule.value>/g, obj, "value", base.to_float, sub, context);

            bucket = context.parsed.PumpingShutDownCostSchedule;
            if (null == bucket)
                context.parsed.PumpingShutDownCostSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Represents both bids to purchase and offers to sell energy or ancillary services in an RTO-sponsored market.
         *
         */
        function parse_Bid (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "Bid";
            /**
             * Start time and date for which bid applies.
             *
             */
            base.parse_element (/<cim:Bid.startTime>([\s\S]*?)<\/cim:Bid.startTime>/g, obj, "startTime", base.to_datetime, sub, context);

            /**
             * Stop time and date for which bid is applicable.
             *
             */
            base.parse_element (/<cim:Bid.stopTime>([\s\S]*?)<\/cim:Bid.stopTime>/g, obj, "stopTime", base.to_datetime, sub, context);

            /**
             * The market type, DAM or RTM.
             *
             */
            base.parse_element (/<cim:Bid.marketType>([\s\S]*?)<\/cim:Bid.marketType>/g, obj, "marketType", base.to_string, sub, context);

            base.parse_attribute (/<cim:Bid.ActionRequest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ActionRequest", sub, context, true);

            base.parse_attribute (/<cim:Bid.MarketParticipant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketParticipant", sub, context, true);

            base.parse_attribute (/<cim:Bid.EnergyMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyMarket", sub, context, true);

            base.parse_attribute (/<cim:Bid.SchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SchedulingCoordinator", sub, context, true);

            bucket = context.parsed.Bid;
            if (null == bucket)
                context.parsed.Bid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Inter Scheduling Coordinator Trades to model financial trades which may impact settlement
         *
         */
        function parse_Trade (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Trade";
            /**
             * The validated and current market accepted trade amount of a physical energy trade.
             *
             */
            base.parse_element (/<cim:Trade.adjustedTradeQuantity>([\s\S]*?)<\/cim:Trade.adjustedTradeQuantity>/g, obj, "adjustedTradeQuantity", base.to_float, sub, context);

            /**
             * MW quantity submitted by counter SC for the same trade
             *
             */
            base.parse_element (/<cim:Trade.counterTradeQuantity>([\s\S]*?)<\/cim:Trade.counterTradeQuantity>/g, obj, "counterTradeQuantity", base.to_float, sub, context);

            /**
             * The Depend On IST Name points to the unique IST Name in the chain of physical energy trades.
             *
             */
            base.parse_element (/<cim:Trade.dependOnTradeName>([\s\S]*?)<\/cim:Trade.dependOnTradeName>/g, obj, "dependOnTradeName", base.to_string, sub, context);

            /**
             * Time and date the trade was last modified.
             *
             */
            base.parse_element (/<cim:Trade.lastModified>([\s\S]*?)<\/cim:Trade.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);

            base.parse_element (/<cim:Trade.marketType>([\s\S]*?)<\/cim:Trade.marketType>/g, obj, "marketType", base.to_string, sub, context);

            /**
             * Start time and date for which trade applies.
             *
             */
            base.parse_element (/<cim:Trade.startTime>([\s\S]*?)<\/cim:Trade.startTime>/g, obj, "startTime", base.to_datetime, sub, context);

            /**
             * Stop time and date for which trade is applicable.
             *
             */
            base.parse_element (/<cim:Trade.stopTime>([\s\S]*?)<\/cim:Trade.stopTime>/g, obj, "stopTime", base.to_datetime, sub, context);

            /**
             * Timestamp of submittal of submit From Scheduling Coordinator Trade to Market Participant Bid Submittal
             *
             */
            base.parse_element (/<cim:Trade.submitFromTimeStamp>([\s\S]*?)<\/cim:Trade.submitFromTimeStamp>/g, obj, "submitFromTimeStamp", base.to_datetime, sub, context);

            /**
             * Userid of the submit From Scheduling Coordinator trade
             *
             */
            base.parse_element (/<cim:Trade.submitFromUser>([\s\S]*?)<\/cim:Trade.submitFromUser>/g, obj, "submitFromUser", base.to_string, sub, context);

            /**
             * Timestamp of submittal of submit To Scheduling Coordinator Trade to Market Participant Bid Submittal
             *
             */
            base.parse_element (/<cim:Trade.submitToTimeStamp>([\s\S]*?)<\/cim:Trade.submitToTimeStamp>/g, obj, "submitToTimeStamp", base.to_datetime, sub, context);

            /**
             * Userid of the submit To Scheduling Coordinator trade
             *
             */
            base.parse_element (/<cim:Trade.submitToUser >([\s\S]*?)<\/cim:Trade.submitToUser >/g, obj, "submitToUser ", base.to_string, sub, context);

            /**
             * tradeQuantity:
             * If tradeType = IST, The amount of an Energy Trade.
             *
             * If tradeType = AST, The amount of an Ancillary Service Obligation Trade.
             *
             */
            base.parse_element (/<cim:Trade.tradeQuantity>([\s\S]*?)<\/cim:Trade.tradeQuantity>/g, obj, "tradeQuantity", base.to_float, sub, context);

            /**
             * Resulting status of the trade following the rule engine processing.
             *
             */
            base.parse_element (/<cim:Trade.tradeStatus>([\s\S]*?)<\/cim:Trade.tradeStatus>/g, obj, "tradeStatus", base.to_string, sub, context);

            base.parse_element (/<cim:Trade.updateTimeStamp>([\s\S]*?)<\/cim:Trade.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);

            base.parse_element (/<cim:Trade.updateUser>([\s\S]*?)<\/cim:Trade.updateUser>/g, obj, "updateUser", base.to_string, sub, context);

            base.parse_attribute (/<cim:Trade.TradeProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TradeProduct", sub, context, true);

            base.parse_attribute (/<cim:Trade.submitFromSchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "submitFromSchedulingCoordinator", sub, context, true);

            base.parse_attribute (/<cim:Trade.ActionRequest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ActionRequest", sub, context, true);

            base.parse_attribute (/<cim:Trade.To_SC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "To_SC", sub, context, true);

            base.parse_attribute (/<cim:Trade.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context, true);

            base.parse_attribute (/<cim:Trade.submitToSchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "submitToSchedulingCoordinator", sub, context, true);

            base.parse_attribute (/<cim:Trade.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context, true);

            base.parse_attribute (/<cim:Trade.From_SC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "From_SC", sub, context, true);

            bucket = context.parsed.Trade;
            if (null == bucket)
                context.parsed.Trade = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class represent the error information for a bid that is detected during bid validation
         *
         */
        function parse_BidError (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "BidError";
            /**
             * Priority number for the error message
             *
             */
            base.parse_element (/<cim:BidError.errPriority>([\s\S]*?)<\/cim:BidError.errPriority>/g, obj, "errPriority", base.to_string, sub, context);

            /**
             * error message
             *
             */
            base.parse_element (/<cim:BidError.errMessage>([\s\S]*?)<\/cim:BidError.errMessage>/g, obj, "errMessage", base.to_string, sub, context);

            base.parse_element (/<cim:BidError.ruleID>([\s\S]*?)<\/cim:BidError.ruleID>/g, obj, "ruleID", base.to_string, sub, context);

            /**
             * hour wihthin the bid for which the error applies
             *
             */
            base.parse_element (/<cim:BidError.startTime>([\s\S]*?)<\/cim:BidError.startTime>/g, obj, "startTime", base.to_datetime, sub, context);

            /**
             * hour wihthin the bid for which the error applies
             *
             */
            base.parse_element (/<cim:BidError.endTime>([\s\S]*?)<\/cim:BidError.endTime>/g, obj, "endTime", base.to_datetime, sub, context);

            base.parse_element (/<cim:BidError.logTimeStamp>([\s\S]*?)<\/cim:BidError.logTimeStamp>/g, obj, "logTimeStamp", base.to_datetime, sub, context);

            base.parse_element (/<cim:BidError.componentType>([\s\S]*?)<\/cim:BidError.componentType>/g, obj, "componentType", base.to_string, sub, context);

            base.parse_element (/<cim:BidError.msgLevel>([\s\S]*?)<\/cim:BidError.msgLevel>/g, obj, "msgLevel", base.to_string, sub, context);

            base.parse_attribute (/<cim:BidError.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context, true);

            bucket = context.parsed.BidError;
            if (null == bucket)
                context.parsed.BidError = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Action request against an existing Trade.
         *
         */
        function parse_ActionRequest (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ActionRequest";
            /**
             * Action name type for the action request.
             *
             */
            base.parse_element (/<cim:ActionRequest.actionName>([\s\S]*?)<\/cim:ActionRequest.actionName>/g, obj, "actionName", base.to_string, sub, context);

            bucket = context.parsed.ActionRequest;
            if (null == bucket)
                context.parsed.ActionRequest = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Response from an intertie resource acknowleging receipt of dispatch instructions
         *
         */
        function parse_InterTieDispatchResponse (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "InterTieDispatchResponse";
            /**
             * The accept status submitted by the responder.
             *
             * Valid values are NON-RESPONSE, ACCEPT, DECLINE, PARTIAL.
             *
             */
            base.parse_element (/<cim:InterTieDispatchResponse.acceptStatus>([\s\S]*?)<\/cim:InterTieDispatchResponse.acceptStatus>/g, obj, "acceptStatus", base.to_string, sub, context);

            /**
             * The accepted mw amount by the responder. aka response mw.
             *
             */
            base.parse_element (/<cim:InterTieDispatchResponse.acceptMW>([\s\S]*?)<\/cim:InterTieDispatchResponse.acceptMW>/g, obj, "acceptMW", base.to_float, sub, context);

            /**
             * MW amount associated with instruction.
             *
             * For 5 minute binding dispatches, this is the Goto MW or DOT
             *
             */
            base.parse_element (/<cim:InterTieDispatchResponse.clearedMW>([\s\S]*?)<\/cim:InterTieDispatchResponse.clearedMW>/g, obj, "clearedMW", base.to_float, sub, context);

            /**
             * Part of the Composite key that downstream app uses to match the instruction
             *
             */
            base.parse_element (/<cim:InterTieDispatchResponse.startTime>([\s\S]*?)<\/cim:InterTieDispatchResponse.startTime>/g, obj, "startTime", base.to_datetime, sub, context);

            /**
             * Part of the Composite key that downstream app uses to match the instruction
             *
             */
            base.parse_element (/<cim:InterTieDispatchResponse.passIndicator>([\s\S]*?)<\/cim:InterTieDispatchResponse.passIndicator>/g, obj, "passIndicator", base.to_string, sub, context);

            base.parse_attribute (/<cim:InterTieDispatchResponse.RegisteredInterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredInterTie", sub, context, true);

            bucket = context.parsed.InterTieDispatchResponse;
            if (null == bucket)
                context.parsed.InterTieDispatchResponse = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * As set of mutually exclusive bids for which a maximum of one may be scheduled.
         *
         * Of these generating bids, only one generating bid can be scheduled at a time.
         *
         */
        function parse_BidSet (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "BidSet";
            bucket = context.parsed.BidSet;
            if (null == bucket)
                context.parsed.BidSet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Offer to supply energy/ancillary services from a generating unit or resource
         *
         */
        function parse_GeneratingBid (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ResourceBid (context, sub);
            obj.cls = "GeneratingBid";
            /**
             * Will indicate if the unit is part of a CC offer or not
             *
             */
            base.parse_element (/<cim:GeneratingBid.combinedCycleUnitOffer>([\s\S]*?)<\/cim:GeneratingBid.combinedCycleUnitOffer>/g, obj, "combinedCycleUnitOffer", base.to_string, sub, context);

            /**
             * Maximum down time.
             *
             */
            base.parse_element (/<cim:GeneratingBid.downTimeMax>([\s\S]*?)<\/cim:GeneratingBid.downTimeMax>/g, obj, "downTimeMax", base.to_float, sub, context);

            /**
             * Installed Capacity value
             *
             */
            base.parse_element (/<cim:GeneratingBid.installedCapacity>([\s\S]*?)<\/cim:GeneratingBid.installedCapacity>/g, obj, "installedCapacity", base.to_float, sub, context);

            /**
             * Maximum Dn ramp rate in MW/min
             *
             */
            base.parse_element (/<cim:GeneratingBid.lowerRampRate>([\s\S]*?)<\/cim:GeneratingBid.lowerRampRate>/g, obj, "lowerRampRate", base.to_string, sub, context);

            /**
             * Power rating available for unit under emergency conditions greater than or equal to maximum economic limit.
             *
             */
            base.parse_element (/<cim:GeneratingBid.maxEmergencyMW>([\s\S]*?)<\/cim:GeneratingBid.maxEmergencyMW>/g, obj, "maxEmergencyMW", base.to_string, sub, context);

            /**
             * Maximum high economic MW limit, that should not exceed the maximum operating MW limit
             *
             */
            base.parse_element (/<cim:GeneratingBid.maximumEconomicMW>([\s\S]*?)<\/cim:GeneratingBid.maximumEconomicMW>/g, obj, "maximumEconomicMW", base.to_float, sub, context);

            /**
             * Minimum power rating for unit under emergency conditions, which is less than or equal to the economic minimum.
             *
             */
            base.parse_element (/<cim:GeneratingBid.minEmergencyMW>([\s\S]*?)<\/cim:GeneratingBid.minEmergencyMW>/g, obj, "minEmergencyMW", base.to_string, sub, context);

            /**
             * Low economic MW limit that shall be greater than or equal to the minimum operating MW limit
             *
             */
            base.parse_element (/<cim:GeneratingBid.minimumEconomicMW>([\s\S]*?)<\/cim:GeneratingBid.minimumEconomicMW>/g, obj, "minimumEconomicMW", base.to_float, sub, context);

            /**
             * Resource fixed no load cost.
             *
             */
            base.parse_element (/<cim:GeneratingBid.noLoadCost>([\s\S]*?)<\/cim:GeneratingBid.noLoadCost>/g, obj, "noLoadCost", base.to_float, sub, context);

            /**
             * Time required for crew notification prior to start up of the unit.
             *
             */
            base.parse_element (/<cim:GeneratingBid.notificationTime>([\s\S]*?)<\/cim:GeneratingBid.notificationTime>/g, obj, "notificationTime", base.to_float, sub, context);

            /**
             * Bid operating mode ('C' - cycling, 'F' - fixed, 'M' - must run, 'U' - unavailable)
             *
             */
            base.parse_element (/<cim:GeneratingBid.operatingMode>([\s\S]*?)<\/cim:GeneratingBid.operatingMode>/g, obj, "operatingMode", base.to_string, sub, context);

            /**
             * Maximum Up ramp rate in MW/min
             *
             */
            base.parse_element (/<cim:GeneratingBid.raiseRampRate>([\s\S]*?)<\/cim:GeneratingBid.raiseRampRate>/g, obj, "raiseRampRate", base.to_string, sub, context);

            /**
             * Ramp curve type:
             * 0 - Fixed ramp rate independent of rate function unit MW output
             * 1 - Static ramp rates as a function of unit MW output only
             *
             * 2 - Dynamic ramp rates as a function of unit MW output and ramping time
             *
             */
            base.parse_element (/<cim:GeneratingBid.rampCurveType>([\s\S]*?)<\/cim:GeneratingBid.rampCurveType>/g, obj, "rampCurveType", base.to_string, sub, context);

            /**
             * Startup cost/price
             *
             */
            base.parse_element (/<cim:GeneratingBid.startupCost>([\s\S]*?)<\/cim:GeneratingBid.startupCost>/g, obj, "startupCost", base.to_float, sub, context);

            /**
             * Resource startup ramp rate (MW/minute)
             *
             */
            base.parse_element (/<cim:GeneratingBid.startUpRampRate>([\s\S]*?)<\/cim:GeneratingBid.startUpRampRate>/g, obj, "startUpRampRate", base.to_string, sub, context);

            /**
             * Resource startup type:
             * 1 - Fixed startup time and fixed startup cost
             * 2 - Startup time as a function of down time and fixed startup cost
             *
             * 3 - Startup cost as a function of down time
             *
             */
            base.parse_element (/<cim:GeneratingBid.startUpType>([\s\S]*?)<\/cim:GeneratingBid.startUpType>/g, obj, "startUpType", base.to_string, sub, context);

            /**
             * Maximum up time.
             *
             */
            base.parse_element (/<cim:GeneratingBid.upTimeMax>([\s\S]*?)<\/cim:GeneratingBid.upTimeMax>/g, obj, "upTimeMax", base.to_float, sub, context);

            base.parse_attribute (/<cim:GeneratingBid.NotificationTimeCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NotificationTimeCurve", sub, context, true);

            base.parse_attribute (/<cim:GeneratingBid.StartUpCostCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartUpCostCurve", sub, context, true);

            base.parse_attribute (/<cim:GeneratingBid.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context, true);

            base.parse_attribute (/<cim:GeneratingBid.StartUpTimeCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartUpTimeCurve", sub, context, true);

            base.parse_attribute (/<cim:GeneratingBid.BidSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidSet", sub, context, true);

            bucket = context.parsed.GeneratingBid;
            if (null == bucket)
                context.parsed.GeneratingBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Energy bid for generation, load, or virtual type for the whole of the market-trading period (i.e., one day in day ahead market or one hour in the real time market)
         *
         */
        function parse_ResourceBid (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Bid (context, sub);
            obj.cls = "ResourceBid";
            /**
             * Aggregation flag
             * 0: individual resource level
             * 1: Aggregated node location
             *
             * 2: Aggregated price location)
             *
             */
            base.parse_element (/<cim:ResourceBid.aggregationFlag>([\s\S]*?)<\/cim:ResourceBid.aggregationFlag>/g, obj, "aggregationFlag", base.to_string, sub, context);

            base.parse_element (/<cim:ResourceBid.bidStatus>([\s\S]*?)<\/cim:ResourceBid.bidStatus>/g, obj, "bidStatus", base.to_string, sub, context);

            /**
             * Energy product (commodity) type:
             * 'En' - Energy
             * 'Ru' - Regulation Up
             * 'Rd' - Regulation Dn
             * 'Sr' - Spinning Reserve
             * 'Nr' - Non-Spinning Reserve
             *
             * 'Or' - Operating Reserve
             *
             */
            base.parse_element (/<cim:ResourceBid.commodityType>([\s\S]*?)<\/cim:ResourceBid.commodityType>/g, obj, "commodityType", base.to_string, sub, context);

            /**
             * contingent operating reserve availiability (Yes/No).
             *
             * Resource is availiable to participate with capacity only in contingency dispatch.
             *
             */
            base.parse_element (/<cim:ResourceBid.contingencyAvailFlag>([\s\S]*?)<\/cim:ResourceBid.contingencyAvailFlag>/g, obj, "contingencyAvailFlag", base.to_string, sub, context);

            /**
             * A Yes indicates that this bid was created by the ISO.
             *
             */
            base.parse_element (/<cim:ResourceBid.createdISO>([\s\S]*?)<\/cim:ResourceBid.createdISO>/g, obj, "createdISO", base.to_string, sub, context);

            /**
             * Maximum amount of energy per day which can be produced during the trading period in MWh
             *
             */
            base.parse_element (/<cim:ResourceBid.energyMaxDay>([\s\S]*?)<\/cim:ResourceBid.energyMaxDay>/g, obj, "energyMaxDay", base.to_float, sub, context);

            /**
             * Minimum amount of energy per day which has to be produced during the trading period in MWh
             *
             */
            base.parse_element (/<cim:ResourceBid.energyMinDay>([\s\S]*?)<\/cim:ResourceBid.energyMinDay>/g, obj, "energyMinDay", base.to_float, sub, context);

            /**
             * Market Separation Flag
             * 
             * 'Y' - Enforce market separation constraints for this bid
             *
             * 'N' - Don't enforce market separation constraints for this bid.
             *
             */
            base.parse_element (/<cim:ResourceBid.marketSepFlag>([\s\S]*?)<\/cim:ResourceBid.marketSepFlag>/g, obj, "marketSepFlag", base.to_string, sub, context);

            /**
             * minimum number of consecutive hours a resource shall be dispatched if bid is accepted
             *
             */
            base.parse_element (/<cim:ResourceBid.minDispatchTime>([\s\S]*?)<\/cim:ResourceBid.minDispatchTime>/g, obj, "minDispatchTime", base.to_string, sub, context);

            /**
             * Resource loading curve type
             * 1 - step-wise continuous loading
             * 2 - piece-wise linear continuous loading
             *
             * 3 - block loading
             *
             */
            base.parse_element (/<cim:ResourceBid.resourceLoadingType>([\s\S]*?)<\/cim:ResourceBid.resourceLoadingType>/g, obj, "resourceLoadingType", base.to_string, sub, context);

            /**
             * Maximum number of shutdowns per day.
             *
             */
            base.parse_element (/<cim:ResourceBid.shutDownsMaxDay>([\s\S]*?)<\/cim:ResourceBid.shutDownsMaxDay>/g, obj, "shutDownsMaxDay", base.to_string, sub, context);

            /**
             * Maximum number of shutdowns per week.
             *
             */
            base.parse_element (/<cim:ResourceBid.shutDownsMaxWeek>([\s\S]*?)<\/cim:ResourceBid.shutDownsMaxWeek>/g, obj, "shutDownsMaxWeek", base.to_string, sub, context);

            /**
             * Maximum number of startups per day.
             *
             */
            base.parse_element (/<cim:ResourceBid.startUpsMaxDay>([\s\S]*?)<\/cim:ResourceBid.startUpsMaxDay>/g, obj, "startUpsMaxDay", base.to_string, sub, context);

            /**
             * Maximum number of startups per week.
             *
             */
            base.parse_element (/<cim:ResourceBid.startUpsMaxWeek>([\s\S]*?)<\/cim:ResourceBid.startUpsMaxWeek>/g, obj, "startUpsMaxWeek", base.to_string, sub, context);

            /**
             * True if bid is virtual.
             *
             * Bid is assumed to be non-virtual if attribute is absent
             *
             */
            base.parse_element (/<cim:ResourceBid.virtual>([\s\S]*?)<\/cim:ResourceBid.virtual>/g, obj, "virtual", base.to_boolean, sub, context);

            bucket = context.parsed.ResourceBid;
            if (null == bucket)
                context.parsed.ResourceBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Ramp rate as a function of resource MW output
         *
         */
        function parse_RampRateCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "RampRateCurve";
            /**
             * condition for the ramp rate
             *
             */
            base.parse_element (/<cim:RampRateCurve.condition>([\s\S]*?)<\/cim:RampRateCurve.condition>/g, obj, "condition", base.to_string, sub, context);

            /**
             * The condition that identifies whether a Generating Resource should be constrained from Ancillary Service provision if its Schedule or Dispatch change across Trading Hours or Trading Intervals requires more than a specified fraction of the duration of the Trading Hour or Trading Interval.
             *
             * Valid values are Fast/Slow
             *
             */
            base.parse_element (/<cim:RampRateCurve.constraintRampType>([\s\S]*?)<\/cim:RampRateCurve.constraintRampType>/g, obj, "constraintRampType", base.to_string, sub, context);

            /**
             * How ramp rate is applied (e.g. raise or lower, as when applied to a generation resource)
             *
             */
            base.parse_element (/<cim:RampRateCurve.rampRateType>([\s\S]*?)<\/cim:RampRateCurve.rampRateType>/g, obj, "rampRateType", base.to_string, sub, context);

            base.parse_attribute (/<cim:RampRateCurve.GeneratingBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingBid", sub, context, true);

            base.parse_attribute (/<cim:RampRateCurve.LoadBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadBid", sub, context, true);

            base.parse_attribute (/<cim:RampRateCurve.InterTieBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterTieBid", sub, context, true);

            bucket = context.parsed.RampRateCurve;
            if (null == bucket)
                context.parsed.RampRateCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Response from registered resource acknowleging receipt of dispatch instructions
         *
         */
        function parse_DispatchInstReply (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DispatchInstReply";
            /**
             * The accepted mw amount by the responder. aka response mw.
             *
             */
            base.parse_element (/<cim:DispatchInstReply.acceptMW>([\s\S]*?)<\/cim:DispatchInstReply.acceptMW>/g, obj, "acceptMW", base.to_string, sub, context);

            /**
             * The accept status submitted by the responder. enumeration type needs to be defined
             *
             */
            base.parse_element (/<cim:DispatchInstReply.acceptStatus>([\s\S]*?)<\/cim:DispatchInstReply.acceptStatus>/g, obj, "acceptStatus", base.to_string, sub, context);

            /**
             * The Subject DN is the X509 Certificate Subject DN.
             *
             * This is the essentially the certificate name presented by the client. In the case of ADS Certificates, this will be the user name. It may be from an API Client or the MP Client (GUI).
             *
             */
            base.parse_element (/<cim:DispatchInstReply.certificationName>([\s\S]*?)<\/cim:DispatchInstReply.certificationName>/g, obj, "certificationName", base.to_string, sub, context);

            /**
             * MW amount associated with instruction.
             *
             * For 5 minute binding dispatches, this is the Goto MW or DOT
             *
             */
            base.parse_element (/<cim:DispatchInstReply.clearedMW>([\s\S]*?)<\/cim:DispatchInstReply.clearedMW>/g, obj, "clearedMW", base.to_string, sub, context);

            /**
             * The target date/time for the received instruction.
             *
             */
            base.parse_element (/<cim:DispatchInstReply.instructionTime>([\s\S]*?)<\/cim:DispatchInstReply.instructionTime>/g, obj, "instructionTime", base.to_datetime, sub, context);

            /**
             * instruction type:
             * 
             * commitment
             * out of sequence
             *
             * dispatch
             *
             */
            base.parse_element (/<cim:DispatchInstReply.instructionType>([\s\S]*?)<\/cim:DispatchInstReply.instructionType>/g, obj, "instructionType", base.to_string, sub, context);

            /**
             * The type of run for the market clearing.
             *
             */
            base.parse_element (/<cim:DispatchInstReply.passIndicator>([\s\S]*?)<\/cim:DispatchInstReply.passIndicator>/g, obj, "passIndicator", base.to_string, sub, context);

            /**
             * Timestamp indicating the time at which the instruction was received.
             *
             */
            base.parse_element (/<cim:DispatchInstReply.receivedTime>([\s\S]*?)<\/cim:DispatchInstReply.receivedTime>/g, obj, "receivedTime", base.to_datetime, sub, context);

            /**
             * start time
             *
             */
            base.parse_element (/<cim:DispatchInstReply.startTime>([\s\S]*?)<\/cim:DispatchInstReply.startTime>/g, obj, "startTime", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:DispatchInstReply.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context, true);

            bucket = context.parsed.DispatchInstReply;
            if (null == bucket)
                context.parsed.DispatchInstReply = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Notification time curve as a function of down time.
         *
         * Relationship between crew notification time (Y1-axis) and unit startup time (Y2-axis) vs. unit elapsed down time (X-axis).
         *
         */
        function parse_NotificationTimeCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "NotificationTimeCurve";
            bucket = context.parsed.NotificationTimeCurve;
            if (null == bucket)
                context.parsed.NotificationTimeCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Signifies an event to trigger one or more activities, such as reading a meter, recalculating a bill, requesting work, when generating units shall be scheduled for maintenance, when a transformer is scheduled to be refurbished, etc.
         *
         */
        function parse_MarketScheduledEvent (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MarketScheduledEvent";
            /**
             * Category of scheduled event.
             *
             */
            base.parse_element (/<cim:MarketScheduledEvent.category>([\s\S]*?)<\/cim:MarketScheduledEvent.category>/g, obj, "category", base.to_string, sub, context);

            /**
             * Duration of the scheduled event, for example, the time to ramp between values.
             *
             */
            base.parse_element (/<cim:MarketScheduledEvent.duration>([\s\S]*?)<\/cim:MarketScheduledEvent.duration>/g, obj, "duration", base.to_string, sub, context);

            base.parse_element (/<cim:MarketScheduledEvent.status>([\s\S]*?)<\/cim:MarketScheduledEvent.status>/g, obj, "status", base.to_string, sub, context);

            base.parse_attribute (/<cim:MarketScheduledEvent.MajorChargeGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MajorChargeGroup", sub, context, true);

            bucket = context.parsed.MarketScheduledEvent;
            if (null == bucket)
                context.parsed.MarketScheduledEvent = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class represents the inter tie bid
         *
         */
        function parse_InterTieBid (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ResourceBid (context, sub);
            obj.cls = "InterTieBid";
            /**
             * The minimum hourly block for an Inter-Tie Resource supplied within the bid.
             *
             */
            base.parse_element (/<cim:InterTieBid.minHourlyBlock >([\s\S]*?)<\/cim:InterTieBid.minHourlyBlock >/g, obj, "minHourlyBlock ", base.to_string, sub, context);

            base.parse_attribute (/<cim:InterTieBid.RegisteredInterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredInterTie", sub, context, true);

            bucket = context.parsed.InterTieBid;
            if (null == bucket)
                context.parsed.InterTieBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between unit operating price in \$/hour (Y-axis) and unit output in MW (X-axis).
         *
         */
        function parse_BidPriceCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "BidPriceCurve";
            bucket = context.parsed.BidPriceCurve;
            if (null == bucket)
                context.parsed.BidPriceCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Containment for bid hourly parameters that are not product dependent.
         *
         */
        function parse_BidHourlySchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_RegularIntervalSchedule (context, sub);
            obj.cls = "BidHourlySchedule";
            base.parse_attribute (/<cim:BidHourlySchedule.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context, true);

            bucket = context.parsed.BidHourlySchedule;
            if (null == bucket)
                context.parsed.BidHourlySchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Bilateral or scheduled transactions for energy and ancillary services considered by market clearing process
         *
         */
        function parse_TransactionBid (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Bid (context, sub);
            obj.cls = "TransactionBid";
            /**
             * Set true if this is a demand transaction.
             *
             */
            base.parse_element (/<cim:TransactionBid.demandTransaction>([\s\S]*?)<\/cim:TransactionBid.demandTransaction>/g, obj, "demandTransaction", base.to_boolean, sub, context);

            /**
             * Set true if this is a dispatchable transaction.
             *
             */
            base.parse_element (/<cim:TransactionBid.dispatchable>([\s\S]*?)<\/cim:TransactionBid.dispatchable>/g, obj, "dispatchable", base.to_boolean, sub, context);

            /**
             * Set true if this is a willing to pay transaction.
             *
             * This flag is used to determine whether a schedule is willing-to-pay-congestion or not.
             *
             */
            base.parse_element (/<cim:TransactionBid.payCongestion>([\s\S]*?)<\/cim:TransactionBid.payCongestion>/g, obj, "payCongestion", base.to_boolean, sub, context);

            base.parse_attribute (/<cim:TransactionBid.Receipt_Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Receipt_Pnode", sub, context, true);

            base.parse_attribute (/<cim:TransactionBid.Delivery_Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Delivery_Pnode", sub, context, true);

            base.parse_attribute (/<cim:TransactionBid.TransmissionReservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionReservation", sub, context, true);

            bucket = context.parsed.TransactionBid;
            if (null == bucket)
                context.parsed.TransactionBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_EnergyPriceCurve: parse_EnergyPriceCurve,
                parse_BidDistributionFactor: parse_BidDistributionFactor,
                parse_BidSelfSched: parse_BidSelfSched,
                parse_BidHourlyProductSchedule: parse_BidHourlyProductSchedule,
                parse_InterTieDispatchResponse: parse_InterTieDispatchResponse,
                parse_HourlyPreDispatchSchedule: parse_HourlyPreDispatchSchedule,
                parse_MarketScheduledEvent: parse_MarketScheduledEvent,
                parse_LoadBid: parse_LoadBid,
                parse_BidError: parse_BidError,
                parse_OpenTieSchedule: parse_OpenTieSchedule,
                parse_ResourceBid: parse_ResourceBid,
                parse_TransactionBid: parse_TransactionBid,
                parse_Trade: parse_Trade,
                parse_ChargeType: parse_ChargeType,
                parse_TradeProduct: parse_TradeProduct,
                parse_AttributeProperty: parse_AttributeProperty,
                parse_ChargeGroup: parse_ChargeGroup,
                parse_Bid: parse_Bid,
                parse_MajorChargeGroup: parse_MajorChargeGroup,
                parse_AreaLoadBid: parse_AreaLoadBid,
                parse_StartUpCostCurve: parse_StartUpCostCurve,
                parse_ChargeComponent: parse_ChargeComponent,
                parse_ProductBid: parse_ProductBid,
                parse_PumpingShutDownCostSchedule: parse_PumpingShutDownCostSchedule,
                parse_PumpingLevelSchedule: parse_PumpingLevelSchedule,
                parse_InterTieBid: parse_InterTieBid,
                parse_BidPriceSchedule: parse_BidPriceSchedule,
                parse_TradeError: parse_TradeError,
                parse_DispatchInstReply: parse_DispatchInstReply,
                parse_BidHourlySchedule: parse_BidHourlySchedule,
                parse_BidPriceCurve: parse_BidPriceCurve,
                parse_StartUpTimeCurve: parse_StartUpTimeCurve,
                parse_NotificationTimeCurve: parse_NotificationTimeCurve,
                parse_LoadReductionPriceCurve: parse_LoadReductionPriceCurve,
                parse_LoadFollowingInst: parse_LoadFollowingInst,
                parse_RampRateCurve: parse_RampRateCurve,
                parse_BidSet: parse_BidSet,
                parse_GeneratingBid: parse_GeneratingBid,
                parse_ActionRequest: parse_ActionRequest,
                parse_PumpingCostSchedule: parse_PumpingCostSchedule
            }
        );
    }
);