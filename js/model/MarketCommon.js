define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * This package contains the common objects shared by both MarketManagement and MarketOperations packages.
     *
     */
    function (base, Common, Core)
    {

        /**
         * The external intended behaviour played by a party within the electricity market.
         *
         */
        function parse_MarketRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MarketRole";
            /**
             * Defined using an enumerated list of types of market roles for use when a finite list of types are desired.
             *
             */
            base.parse_element (/<cim:MarketRole.roleType>([\s\S]*?)<\/cim:MarketRole.roleType>/g, obj, "roleType", base.to_string, sub, context);

            /**
             * Status of the market role.
             *
             */
            base.parse_element (/<cim:MarketRole.status>([\s\S]*?)<\/cim:MarketRole.status>/g, obj, "status", base.to_string, sub, context);

            /**
             * The kind of market roles that can be played by parties for given domains within the electricity market.
             *
             * Types are flexible using dataType of string for free-entry of role types.
             *
             */
            base.parse_element (/<cim:MarketRole.type>([\s\S]*?)<\/cim:MarketRole.type>/g, obj, "type", base.to_string, sub, context);

            bucket = context.parsed.MarketRole;
            if (null == bucket)
                context.parsed.MarketRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A resource that is registered through the market participant registration system.
         *
         * Examples include generating unit, load, and non-physical generator or load.
         *
         */
        function parse_RegisteredResource (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "RegisteredResource";
            /**
             * Indication that this resource is associated with an Adjacent Control Area
             *
             */
            base.parse_element (/<cim:RegisteredResource.ACAFlag>([\s\S]*?)<\/cim:RegisteredResource.ACAFlag>/g, obj, "ACAFlag", base.to_string, sub, context);

            /**
             * Indication that the resource participates in the optimization process by default.
             *
             */
            base.parse_element (/<cim:RegisteredResource.ASSPOptimizationFlag>([\s\S]*?)<\/cim:RegisteredResource.ASSPOptimizationFlag>/g, obj, "ASSPOptimizationFlag", base.to_string, sub, context);

            /**
             * Resource Commercial Operation Date.
             *
             */
            base.parse_element (/<cim:RegisteredResource.commercialOpDate>([\s\S]*?)<\/cim:RegisteredResource.commercialOpDate>/g, obj, "commercialOpDate", base.to_datetime, sub, context);

            /**
             * contingent operating reserve availiability (Yes/No).
             *
             * Resource is availiable to participate with capacity in contingency dispatch.
             *
             */
            base.parse_element (/<cim:RegisteredResource.contingencyAvailFlag>([\s\S]*?)<\/cim:RegisteredResource.contingencyAvailFlag>/g, obj, "contingencyAvailFlag", base.to_string, sub, context);

            /**
             * Dispatch flag: indicates whether the resource is dispatchable (Y/N)
             *
             * It is move to the RegisteredResource class for the participating load dispatch purpose
             *
             */
            base.parse_element (/<cim:RegisteredResource.dispatchFlag>([\s\S]*?)<\/cim:RegisteredResource.dispatchFlag>/g, obj, "dispatchFlag", base.to_string, sub, context);

            /**
             * Indication that this resource is associated with an Embedded Control area
             *
             */
            base.parse_element (/<cim:RegisteredResource.ECAFlag>([\s\S]*?)<\/cim:RegisteredResource.ECAFlag>/g, obj, "ECAFlag", base.to_string, sub, context);

            /**
             * end effective date
             *
             */
            base.parse_element (/<cim:RegisteredResource.endEffectiveDate>([\s\S]*?)<\/cim:RegisteredResource.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);

            /**
             * flexible offer flag (Y/N)
             *
             */
            base.parse_element (/<cim:RegisteredResource.flexibleOfferFlag>([\s\S]*?)<\/cim:RegisteredResource.flexibleOfferFlag>/g, obj, "flexibleOfferFlag", base.to_string, sub, context);

            /**
             * Indicates need to dispatch before the start of the operating hour.
             *
             * Only relevent in Real-Time Market. Applies to generation, intertie and participating load resource. Value (Y/N)
             *
             */
            base.parse_element (/<cim:RegisteredResource.hourlyPredispatch>([\s\S]*?)<\/cim:RegisteredResource.hourlyPredispatch>/g, obj, "hourlyPredispatch", base.to_string, sub, context);

            /**
             * a flag to indicate if a resource is an aggregated resource
             *
             */
            base.parse_element (/<cim:RegisteredResource.isAggregatedRes>([\s\S]*?)<\/cim:RegisteredResource.isAggregatedRes>/g, obj, "isAggregatedRes", base.to_string, sub, context);

            /**
             * Indication of the last time this item was modified/versioned.
             *
             */
            base.parse_element (/<cim:RegisteredResource.lastModified>([\s\S]*?)<\/cim:RegisteredResource.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);

            /**
             * LMPM flag: indicates whether the resource is subject to the LMPM test (Yes/No)
             *
             */
            base.parse_element (/<cim:RegisteredResource.LMPMFlag>([\s\S]*?)<\/cim:RegisteredResource.LMPMFlag>/g, obj, "LMPMFlag", base.to_string, sub, context);

            /**
             * Market Participation flag: indicates whether the resource participate in the market (Y/N)
             *
             */
            base.parse_element (/<cim:RegisteredResource.marketParticipationFlag>([\s\S]*?)<\/cim:RegisteredResource.marketParticipationFlag>/g, obj, "marketParticipationFlag", base.to_string, sub, context);

            /**
             * maximum base self schedule quantity
             *
             */
            base.parse_element (/<cim:RegisteredResource.maxBaseSelfSchedQty >([\s\S]*?)<\/cim:RegisteredResource.maxBaseSelfSchedQty >/g, obj, "maxBaseSelfSchedQty ", base.to_float, sub, context);

            /**
             * maximum on time after start up
             *
             */
            base.parse_element (/<cim:RegisteredResource.maxOnTime>([\s\S]*?)<\/cim:RegisteredResource.maxOnTime>/g, obj, "maxOnTime", base.to_float, sub, context);

            /**
             * minimum number of consecutive hours a resource shall be dispatched if bid is accepted
             *
             */
            base.parse_element (/<cim:RegisteredResource.minDispatchTime>([\s\S]*?)<\/cim:RegisteredResource.minDispatchTime>/g, obj, "minDispatchTime", base.to_string, sub, context);

            /**
             * minimum off time after shut  down
             *
             */
            base.parse_element (/<cim:RegisteredResource.minOffTime>([\s\S]*?)<\/cim:RegisteredResource.minOffTime>/g, obj, "minOffTime", base.to_float, sub, context);

            /**
             * minimum on time after start up
             *
             */
            base.parse_element (/<cim:RegisteredResource.minOnTime>([\s\S]*?)<\/cim:RegisteredResource.minOnTime>/g, obj, "minOnTime", base.to_float, sub, context);

            /**
             * Must offer flag: indicates whether the unit is subject to the must offer provisions (Y/N)
             *
             */
            base.parse_element (/<cim:RegisteredResource.mustOfferFlag>([\s\S]*?)<\/cim:RegisteredResource.mustOfferFlag>/g, obj, "mustOfferFlag", base.to_string, sub, context);

            /**
             * Flag to indicate that the Resource is not participating in the Market Operations.
             *
             */
            base.parse_element (/<cim:RegisteredResource.nonMarket>([\s\S]*?)<\/cim:RegisteredResource.nonMarket>/g, obj, "nonMarket", base.to_string, sub, context);

            /**
             * Indication that the registered resource is a Point of Delivery (YES) resource which implies there is a POD Loss Factor.
             *
             */
            base.parse_element (/<cim:RegisteredResource.pointOfDeliveryFlag>([\s\S]*?)<\/cim:RegisteredResource.pointOfDeliveryFlag>/g, obj, "pointOfDeliveryFlag", base.to_string, sub, context);

            /**
             * Price setting flag: indicates whether a resource is capable of setting the Market Clearing Price (Y) for the DA market, and if not, indicates whether the resource shall submit bids for energy at \$ 0 (S) or not (N)
             * 
             * Initially in the RegisteredGenerator class.
             *
             * It wasmove to the RegisteredResource class for the participating load dispatch purpose
             *
             */
            base.parse_element (/<cim:RegisteredResource.priceSetFlagDA>([\s\S]*?)<\/cim:RegisteredResource.priceSetFlagDA>/g, obj, "priceSetFlagDA", base.to_string, sub, context);

            /**
             * Price setting flag: indicates whether a resource is capable of setting the Market Clearing Price (Y) for the RT market, and if not, indicates whether the resource shall submit bids for energy at \$ 0 (S) or not (N)
             * 
             * Initially in the RegisteredGenerator class.
             *
             * It wasmove to the RegisteredResource class for the participating load dispatch purpose
             *
             */
            base.parse_element (/<cim:RegisteredResource.priceSetFlagRT>([\s\S]*?)<\/cim:RegisteredResource.priceSetFlagRT>/g, obj, "priceSetFlagRT", base.to_string, sub, context);

            /**
             * Registration Status of resource - Active, Mothballed, Planned, or Decommissioned.
             *
             */
            base.parse_element (/<cim:RegisteredResource.registrationStatus>([\s\S]*?)<\/cim:RegisteredResource.registrationStatus>/g, obj, "registrationStatus", base.to_string, sub, context);

            /**
             * Indication that this resource participates inthe resource adequacy function.
             *
             */
            base.parse_element (/<cim:RegisteredResource.resourceAdequacyFlag>([\s\S]*?)<\/cim:RegisteredResource.resourceAdequacyFlag>/g, obj, "resourceAdequacyFlag", base.to_string, sub, context);

            /**
             * SMPM flag: indicates whether the resource is subject to the SMPM test (Yes/No)
             *
             */
            base.parse_element (/<cim:RegisteredResource.SMPMFlag>([\s\S]*?)<\/cim:RegisteredResource.SMPMFlag>/g, obj, "SMPMFlag", base.to_string, sub, context);

            /**
             * start effective date
             *
             */
            base.parse_element (/<cim:RegisteredResource.startEffectiveDate>([\s\S]*?)<\/cim:RegisteredResource.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);

            base.parse_attribute (/<cim:RegisteredResource.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context, true);

            base.parse_attribute (/<cim:RegisteredResource.DefaultBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultBid", sub, context, true);

            base.parse_attribute (/<cim:RegisteredResource.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktOrganisation", sub, context, true);

            base.parse_attribute (/<cim:RegisteredResource.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context, true);

            /**
             * A registered resource injects power at one or more connectivity nodes related to a pnode
             *
             */
            base.parse_attribute (/<cim:RegisteredResource.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context, true);

            base.parse_attribute (/<cim:RegisteredResource.AdjacentCASet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AdjacentCASet", sub, context, true);

            base.parse_attribute (/<cim:RegisteredResource.ResourceVerifiableCosts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceVerifiableCosts", sub, context, true);

            bucket = context.parsed.RegisteredResource;
            if (null == bucket)
                context.parsed.RegisteredResource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of market role an organisation can have.
         *
         */
        function parse_MarketRoleKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketRoleKind";
            /**
             * Energy service consumer.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.energyServiceConsumer>([\s\S]*?)<\/cim:MarketRoleKind.energyServiceConsumer>/g, obj, "energyServiceConsumer", base.to_string, sub, context);

            /**
             * Generator merchant owner.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.generatorOwner>([\s\S]*?)<\/cim:MarketRoleKind.generatorOwner>/g, obj, "generatorOwner", base.to_string, sub, context);

            /**
             * Generator merchant operator.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.generatorOperator>([\s\S]*?)<\/cim:MarketRoleKind.generatorOperator>/g, obj, "generatorOperator", base.to_string, sub, context);

            /**
             * Transmission service provider.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.transmissionServiceProvider>([\s\S]*?)<\/cim:MarketRoleKind.transmissionServiceProvider>/g, obj, "transmissionServiceProvider", base.to_string, sub, context);

            /**
             * Transmission owner.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.transmissionOwner>([\s\S]*?)<\/cim:MarketRoleKind.transmissionOwner>/g, obj, "transmissionOwner", base.to_string, sub, context);

            /**
             * Transmission operator.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.transmissionOperator>([\s\S]*?)<\/cim:MarketRoleKind.transmissionOperator>/g, obj, "transmissionOperator", base.to_string, sub, context);

            /**
             * Distribution provider.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.distributionProvider>([\s\S]*?)<\/cim:MarketRoleKind.distributionProvider>/g, obj, "distributionProvider", base.to_string, sub, context);

            /**
             * Load serving entity.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.loadServingEntity>([\s\S]*?)<\/cim:MarketRoleKind.loadServingEntity>/g, obj, "loadServingEntity", base.to_string, sub, context);

            /**
             * Purchasing selling entity.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.purchasingSellingEntity>([\s\S]*?)<\/cim:MarketRoleKind.purchasingSellingEntity>/g, obj, "purchasingSellingEntity", base.to_string, sub, context);

            /**
             * Competitive retailer.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.competitiveRetailer>([\s\S]*?)<\/cim:MarketRoleKind.competitiveRetailer>/g, obj, "competitiveRetailer", base.to_string, sub, context);

            /**
             * Reliability authority.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.reliabilityAuthority>([\s\S]*?)<\/cim:MarketRoleKind.reliabilityAuthority>/g, obj, "reliabilityAuthority", base.to_string, sub, context);

            /**
             * Planning authority.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.planningAuthority>([\s\S]*?)<\/cim:MarketRoleKind.planningAuthority>/g, obj, "planningAuthority", base.to_string, sub, context);

            /**
             * Balancing authority.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.balancingAuthority>([\s\S]*?)<\/cim:MarketRoleKind.balancingAuthority>/g, obj, "balancingAuthority", base.to_string, sub, context);

            /**
             * Interchange authority.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.interchangeAuthority>([\s\S]*?)<\/cim:MarketRoleKind.interchangeAuthority>/g, obj, "interchangeAuthority", base.to_string, sub, context);

            /**
             * Transmission planner.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.transmissionPlanner>([\s\S]*?)<\/cim:MarketRoleKind.transmissionPlanner>/g, obj, "transmissionPlanner", base.to_string, sub, context);

            /**
             * Resource planner.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.resourcePlanner>([\s\S]*?)<\/cim:MarketRoleKind.resourcePlanner>/g, obj, "resourcePlanner", base.to_string, sub, context);

            /**
             * Standards developer.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.standardsDeveloper>([\s\S]*?)<\/cim:MarketRoleKind.standardsDeveloper>/g, obj, "standardsDeveloper", base.to_string, sub, context);

            /**
             * Compliance monitor.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.complianceMonitor>([\s\S]*?)<\/cim:MarketRoleKind.complianceMonitor>/g, obj, "complianceMonitor", base.to_string, sub, context);

            /**
             * A party that has a contract proving financial security and identifying balance responsibility with the Imbalance Settlement Responsible of the Market Balance Area entitling the party to operate in the market.
             *
             * This is the only role allowing a party to nominate energy on a wholesale level.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.BalanceResponsibleParty>([\s\S]*?)<\/cim:MarketRoleKind.BalanceResponsibleParty>/g, obj, "BalanceResponsibleParty", base.to_string, sub, context);

            /**
             * A party that markets the difference between actual metered energy consumption and the energy bought with firm energy contracts by the Party Connected to the Grid.
             *
             * In addition the Balance Supplier markets any difference with the firm energy contract (of the Party Connected to the Grid) and the metered production.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.BalanceSupplier>([\s\S]*?)<\/cim:MarketRoleKind.BalanceSupplier>/g, obj, "BalanceSupplier", base.to_string, sub, context);

            /**
             * The party responsible for invoicing a concerned party.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.BillingAgent>([\s\S]*?)<\/cim:MarketRoleKind.BillingAgent>/g, obj, "BillingAgent", base.to_string, sub, context);

            /**
             * A party that is selling or buying energy on a firm basis (a fixed volume per market time period).
             *
             */
            base.parse_element (/<cim:MarketRoleKind.BlockEnergyTrader>([\s\S]*?)<\/cim:MarketRoleKind.BlockEnergyTrader>/g, obj, "BlockEnergyTrader", base.to_string, sub, context);

            /**
             * A party, acting on behalf of the System Operators involved, responsible for establishing a coordinated Offered Capacity and/or Net Transfer Capacity (NTC) and/or Available Transfer Capacity (ATC) between several Market Balance Areas.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.CapacityCoordinator>([\s\S]*?)<\/cim:MarketRoleKind.CapacityCoordinator>/g, obj, "CapacityCoordinator", base.to_string, sub, context);

            /**
             * A party that has a contract to participate in the Capacity Market to acquire capacity through a Transmission Capacity Allocator.
             *
             * The capacity may be acquired on behalf of an Interconnection Trade Responsible or for sale on secondary capacity markets.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.CapacityTrader>([\s\S]*?)<\/cim:MarketRoleKind.CapacityTrader>/g, obj, "CapacityTrader", base.to_string, sub, context);

            /**
             * A party that consumes electricity.
             * <b><i>Additional information:</i></b>
             *
             * This is a Type of Party Connected to the Grid.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.Consumer>([\s\S]*?)<\/cim:MarketRoleKind.Consumer>/g, obj, "Consumer", base.to_string, sub, context);

            /**
             * A party who can be brought to rights, legally and financially, for any imbalance between enegry nominated and consumed for all associated Accounting Points.
             * <b><i>Additional information:</i></b>
             *
             * This is a type of Balance Responsible Party.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.ConsumptionResponsibleParty>([\s\S]*?)<\/cim:MarketRoleKind.ConsumptionResponsibleParty>/g, obj, "ConsumptionResponsibleParty", base.to_string, sub, context);

            /**
             * Responsible for :
             * 1.
             *
             * The coordination of exchange programs between its related Market Balance Areas and for the exchanges between its associated Control Areas.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.ControlAreaOperator>([\s\S]*?)<\/cim:MarketRoleKind.ControlAreaOperator>/g, obj, "ControlAreaOperator", base.to_string, sub, context);

            /**
             * Responsible for :
             * 1.
             *
             * The coordination of exchanges between its associated Control Blocks and the organisation of the coordination of exchange programs between its related Control Areas.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.ControlBlockOperator>([\s\S]*?)<\/cim:MarketRoleKind.ControlBlockOperator>/g, obj, "ControlBlockOperator", base.to_string, sub, context);

            /**
             * Responsible for :
             * 1.
             *
             * The coordination of exchange programs between its related Control Blocks and for the exchanges between its associated Coordination Center Zones.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.CoordinationCenterOperator>([\s\S]*?)<\/cim:MarketRoleKind.CoordinationCenterOperator>/g, obj, "CoordinationCenterOperator", base.to_string, sub, context);

            /**
             * A party responsible for providing access to the grid through an Accounting Point and its use for energy consumption or production to the Party Connected to the Grid.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.GridAccessProvider>([\s\S]*?)<\/cim:MarketRoleKind.GridAccessProvider>/g, obj, "GridAccessProvider", base.to_string, sub, context);

            /**
             * A party that operates one or more grids.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.GridOperator>([\s\S]*?)<\/cim:MarketRoleKind.GridOperator>/g, obj, "GridOperator", base.to_string, sub, context);

            /**
             * A party that is responsible for settlement of the difference between the contracted quantities and the realised quantities of energy products for the Balance Responsible Parties in a Market Balance Area.
             *
             * Note:
             *
             */
            base.parse_element (/<cim:MarketRoleKind.ImbalanceSettlementResponsible>([\s\S]*?)<\/cim:MarketRoleKind.ImbalanceSettlementResponsible>/g, obj, "ImbalanceSettlementResponsible", base.to_string, sub, context);

            /**
             * Is a Balance Responsible Party or depends on one.
             *
             * They are recognized by the Nomination Validator for the nomination of already allocated capacity.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.InterconnectionTradeResponsible>([\s\S]*?)<\/cim:MarketRoleKind.InterconnectionTradeResponsible>/g, obj, "InterconnectionTradeResponsible", base.to_string, sub, context);

            /**
             * Market Information Aggregator, A party that provides market related information that has been compiled from the figures supplied by different actors in the market.
             *
             * This information may also be published or distributed for general use.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.MarketInformationAggregator>([\s\S]*?)<\/cim:MarketRoleKind.MarketInformationAggregator>/g, obj, "MarketInformationAggregator", base.to_string, sub, context);

            /**
             * The unique power exchange of trades for the actual delivery of energy that receives the bids from the Balance Responsible Parties that have a contract to bid.
             *
             * The Market Operator determines the market energy price for the Market Balance Area after applying technical constraints from the System Operator. It may also establish the price for the reconciliation within a Metering Grid Area.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.MarketOperator>([\s\S]*?)<\/cim:MarketRoleKind.MarketOperator>/g, obj, "MarketOperator", base.to_string, sub, context);

            /**
             * A party responsible for keeping a database of meters.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.MeterAdministrator>([\s\S]*?)<\/cim:MarketRoleKind.MeterAdministrator>/g, obj, "MeterAdministrator", base.to_string, sub, context);

            /**
             * A party responsible for installing, maintaining, testing, certifying and decommissioning physical meters.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.MeterOperator>([\s\S]*?)<\/cim:MarketRoleKind.MeterOperator>/g, obj, "MeterOperator", base.to_string, sub, context);

            /**
             * A party responsible for meter reading and quality control of the reading.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.MeteredDataCollector>([\s\S]*?)<\/cim:MarketRoleKind.MeteredDataCollector>/g, obj, "MeteredDataCollector", base.to_string, sub, context);

            /**
             * A party responsible for the establishment and validation of metered data based on the collected data received from the Metered Data Collector.
             *
             * The party is responsible for the history of metered data for a Metering Point.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.MeteredDataResponsible>([\s\S]*?)<\/cim:MarketRoleKind.MeteredDataResponsible>/g, obj, "MeteredDataResponsible", base.to_string, sub, context);

            /**
             * A party responsible for the establishment and qualification of metered data from the Metered Data Responsible.
             *
             * This data is aggregated according to a defined set of market rules.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.MeteredDataAggregator>([\s\S]*?)<\/cim:MarketRoleKind.MeteredDataAggregator>/g, obj, "MeteredDataAggregator", base.to_string, sub, context);

            /**
             * A party responsible for registering the parties linked to the metering points in a Metering Grid Area.
             *
             * They are also responsible for maintaining the Metering Point technical specifications. They are responsible for creating and terminating metering points.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.MeteringPointAdministrator>([\s\S]*?)<\/cim:MarketRoleKind.MeteringPointAdministrator>/g, obj, "MeteringPointAdministrator", base.to_string, sub, context);

            /**
             * Responsible for the management of the available tenders for all Acquiring System Operators to establish the order of the reserve capacity that can be activated.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.MOLResponsible>([\s\S]*?)<\/cim:MarketRoleKind.MOLResponsible>/g, obj, "MOLResponsible", base.to_string, sub, context);

            /**
             * Has the responsibility of ensuring that all capacity nominated is within the allowed limits and confirming all valid nominations to all involved parties.
             *
             * They inform the Interconnection Trade Responsible of the maximum nominated capacity allowed. Depending on market rules for a given interconnection the corresponding System Operators may appoint one Nomination Validator.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.NominationValidator>([\s\S]*?)<\/cim:MarketRoleKind.NominationValidator>/g, obj, "NominationValidator", base.to_string, sub, context);

            /**
             * A party that contracts for the right to consume or produce electricity at an Accounting Point.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.PartyConnectedToTheGrid>([\s\S]*?)<\/cim:MarketRoleKind.PartyConnectedToTheGrid>/g, obj, "PartyConnectedToTheGrid", base.to_string, sub, context);

            /**
             * A party that produces electricity.
             * <b><i>Additional information:</i></b>
             *
             * This is a type of Party Connected to the Grid.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.Producer>([\s\S]*?)<\/cim:MarketRoleKind.Producer>/g, obj, "Producer", base.to_string, sub, context);

            /**
             * A party who can be brought to rights, legally and financially, for any imbalance between energy nominated and produced for all associated Accounting Points.
             * <b><i>Additional information:</i></b>
             *
             * This is a type of Balance Responsible Party.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.ProductionResponsibleParty>([\s\S]*?)<\/cim:MarketRoleKind.ProductionResponsibleParty>/g, obj, "ProductionResponsibleParty", base.to_string, sub, context);

            /**
             * A party that is financially accountable for the reconciled volume of energy products for a profiled Accounting Point.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.ReconciliationAccountable>([\s\S]*?)<\/cim:MarketRoleKind.ReconciliationAccountable>/g, obj, "ReconciliationAccountable", base.to_string, sub, context);

            /**
             * A party that is responsible for reconciling, within a Metering Grid Area, the volumes used in the imbalance settlement process for profiled Accounting Points and the actual metered quantities.
             *
             * Note:
             *
             */
            base.parse_element (/<cim:MarketRoleKind.ReconciliationResponsible>([\s\S]*?)<\/cim:MarketRoleKind.ReconciliationResponsible>/g, obj, "ReconciliationResponsible", base.to_string, sub, context);

            /**
             * Informs the market of reserve requirements, receives tenders against the requirements and in compliance with the prequalification criteria, determines what tenders meet requirements and assigns tenders.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.ReserveAllocator>([\s\S]*?)<\/cim:MarketRoleKind.ReserveAllocator>/g, obj, "ReserveAllocator", base.to_string, sub, context);

            /**
             * A role that manages a resource object and provides the schedules for it
             *
             */
            base.parse_element (/<cim:MarketRoleKind.ResourceProvider>([\s\S]*?)<\/cim:MarketRoleKind.ResourceProvider>/g, obj, "ResourceProvider", base.to_string, sub, context);

            /**
             * A party that is responsible for the schedule information and its exchange on behalf of a Balance Responsible Party.
             *
             * For example in the Polish market a Scheduling Coordinator is responsible for information interchange for scheduling and settlement.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.SchedulingCoordinator>([\s\S]*?)<\/cim:MarketRoleKind.SchedulingCoordinator>/g, obj, "SchedulingCoordinator", base.to_string, sub, context);

            /**
             * A party that is responsible for a stable power system operation
             * (including the organisation of physical balance) through a transmission grid in a geographical area.
             *
             * The System Operator will also determine and be responsible for cross border capacity and exchanges. If necessary they may reduce allocated capacity to ensure operational stability. Transmission as mentioned above means "the transport of electricity on the extra high or high voltage network with a view to its delivery to final customers or to distributors. Operation of transmission includes as well the tasks of system operation concerning its management of energy flows, reliability of the system and availability of all necessary system services." (definition taken from the ENTSO-E RGCE Operation handbook Glossary).
             *
             */
            base.parse_element (/<cim:MarketRoleKind.SystemOperator>([\s\S]*?)<\/cim:MarketRoleKind.SystemOperator>/g, obj, "SystemOperator", base.to_string, sub, context);

            /**
             * A party who can be brought to rights, legally and financially, for any imbalance between energy nominated and consumed for all associated Accounting Points.
             * <b><i>Note:</i></b>
             * A power exchange without any privileged responsibilities acts as a Trade Responsible Party.
             * <b><i>Additional information:</i></b>
             *
             * This is a type of Balance Responsible Party.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.TradeResponsibleParty>([\s\S]*?)<\/cim:MarketRoleKind.TradeResponsibleParty>/g, obj, "TradeResponsibleParty", base.to_string, sub, context);

            /**
             * Manages the allocation of transmission capacity for an Allocated Capacity Area.
             * <b><i>For explicit auctions:</i></b>
             * The Transmission Capacity Allocator manages, on behalf of the System Operators, the allocation of available transmission capacity for an Allocated capacity Area.
             *
             * They offer the available transmission capacity to the market, allocates the available transmission capacity to individual Capacity Traders and calculates the billing amount of already allocated capacities to the Capacity Traders.
             *
             */
            base.parse_element (/<cim:MarketRoleKind.TransmissionCapacityAllocator>([\s\S]*?)<\/cim:MarketRoleKind.TransmissionCapacityAllocator>/g, obj, "TransmissionCapacityAllocator", base.to_string, sub, context);

            bucket = context.parsed.MarketRoleKind;
            if (null == bucket)
                context.parsed.MarketRoleKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An identification of a party acting in a electricity market business process.
         *
         * This class is used to identify organizations that can participate in market management and/or market operations.
         *
         */
        function parse_MarketParticipant (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Organisation (context, sub);
            obj.cls = "MarketParticipant";
            bucket = context.parsed.MarketParticipant;
            if (null == bucket)
                context.parsed.MarketParticipant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_MarketRole: parse_MarketRole,
                parse_MarketRoleKind: parse_MarketRoleKind,
                parse_MarketParticipant: parse_MarketParticipant,
                parse_RegisteredResource: parse_RegisteredResource
            }
        );
    }
);