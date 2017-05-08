define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * This package contains the common objects shared by both MarketManagement and MarketOperations packages.
     */
    function (base, Common, Core)
    {

        /**
         * The external intended behaviour played by a party within the electricity market.
         */
        function parse_MarketRole (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MarketRole";
            /**
             * Defined using an enumerated list of types of market roles for use when a finite list of types are desired.
             */
            obj["roleType"] = base.parse_element (/<cim:MarketRole.roleType>([\s\S]*?)<\/cim:MarketRole.roleType>/g, sub, context, true);
            /**
             * Status of the market role.
             */
            obj["status"] = base.parse_element (/<cim:MarketRole.status>([\s\S]*?)<\/cim:MarketRole.status>/g, sub, context, true);
            /**
             * The kind of market roles that can be played by parties for given domains within the electricity market.
             * Types are flexible using dataType of string for free-entry of role types.
             */
            obj["type"] = base.parse_element (/<cim:MarketRole.type>([\s\S]*?)<\/cim:MarketRole.type>/g, sub, context, true);
            bucket = context.parsed.MarketRole;
            if (null == bucket)
                context.parsed.MarketRole = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A resource that is registered through the market participant registration system.
         * Examples include generating unit, load, and non-physical generator or load.
         */
        function parse_RegisteredResource (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "RegisteredResource";
            /**
             * Indication that this resource is associated with an Adjacent Control Area
             */
            obj["ACAFlag"] = base.parse_element (/<cim:RegisteredResource.ACAFlag>([\s\S]*?)<\/cim:RegisteredResource.ACAFlag>/g, sub, context, true);
            /**
             * Indication that the resource participates in the optimization process by default.
             */
            obj["ASSPOptimizationFlag"] = base.parse_element (/<cim:RegisteredResource.ASSPOptimizationFlag>([\s\S]*?)<\/cim:RegisteredResource.ASSPOptimizationFlag>/g, sub, context, true);
            /**
             * Resource Commercial Operation Date.
             */
            obj["commercialOpDate"] = base.to_datetime (base.parse_element (/<cim:RegisteredResource.commercialOpDate>([\s\S]*?)<\/cim:RegisteredResource.commercialOpDate>/g, sub, context, true));
            /**
             * contingent operating reserve availiability (Yes/No).
             * Resource is availiable to participate with capacity in contingency dispatch.
             */
            obj["contingencyAvailFlag"] = base.parse_element (/<cim:RegisteredResource.contingencyAvailFlag>([\s\S]*?)<\/cim:RegisteredResource.contingencyAvailFlag>/g, sub, context, true);
            /**
             * Dispatch flag: indicates whether the resource is dispatchable (Y/N)
             * It is move to the RegisteredResource class for the participating load dispatch purpose
             */
            obj["dispatchFlag"] = base.parse_element (/<cim:RegisteredResource.dispatchFlag>([\s\S]*?)<\/cim:RegisteredResource.dispatchFlag>/g, sub, context, true);
            /**
             * Indication that this resource is associated with an Embedded Control area
             */
            obj["ECAFlag"] = base.parse_element (/<cim:RegisteredResource.ECAFlag>([\s\S]*?)<\/cim:RegisteredResource.ECAFlag>/g, sub, context, true);
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:RegisteredResource.endEffectiveDate>([\s\S]*?)<\/cim:RegisteredResource.endEffectiveDate>/g, sub, context, true));
            /**
             * flexible offer flag (Y/N)
             */
            obj["flexibleOfferFlag"] = base.parse_element (/<cim:RegisteredResource.flexibleOfferFlag>([\s\S]*?)<\/cim:RegisteredResource.flexibleOfferFlag>/g, sub, context, true);
            /**
             * Indicates need to dispatch before the start of the operating hour.
             * Only relevent in Real-Time Market. Applies to generation, intertie and participating load resource. Value (Y/N)
             */
            obj["hourlyPredispatch"] = base.parse_element (/<cim:RegisteredResource.hourlyPredispatch>([\s\S]*?)<\/cim:RegisteredResource.hourlyPredispatch>/g, sub, context, true);
            /**
             * a flag to indicate if a resource is an aggregated resource
             */
            obj["isAggregatedRes"] = base.parse_element (/<cim:RegisteredResource.isAggregatedRes>([\s\S]*?)<\/cim:RegisteredResource.isAggregatedRes>/g, sub, context, true);
            /**
             * Indication of the last time this item was modified/versioned.
             */
            obj["lastModified"] = base.to_datetime (base.parse_element (/<cim:RegisteredResource.lastModified>([\s\S]*?)<\/cim:RegisteredResource.lastModified>/g, sub, context, true));
            /**
             * LMPM flag: indicates whether the resource is subject to the LMPM test (Yes/No)
             */
            obj["LMPMFlag"] = base.parse_element (/<cim:RegisteredResource.LMPMFlag>([\s\S]*?)<\/cim:RegisteredResource.LMPMFlag>/g, sub, context, true);
            /**
             * Market Participation flag: indicates whether the resource participate in the market (Y/N)
             */
            obj["marketParticipationFlag"] = base.parse_element (/<cim:RegisteredResource.marketParticipationFlag>([\s\S]*?)<\/cim:RegisteredResource.marketParticipationFlag>/g, sub, context, true);
            /**
             * maximum base self schedule quantity
             */
            obj["maxBaseSelfSchedQty "] = base.to_float (base.parse_element (/<cim:RegisteredResource.maxBaseSelfSchedQty >([\s\S]*?)<\/cim:RegisteredResource.maxBaseSelfSchedQty >/g, sub, context, true));
            /**
             * maximum on time after start up
             */
            obj["maxOnTime"] = base.to_float (base.parse_element (/<cim:RegisteredResource.maxOnTime>([\s\S]*?)<\/cim:RegisteredResource.maxOnTime>/g, sub, context, true));
            /**
             * minimum number of consecutive hours a resource shall be dispatched if bid is accepted
             */
            obj["minDispatchTime"] = base.parse_element (/<cim:RegisteredResource.minDispatchTime>([\s\S]*?)<\/cim:RegisteredResource.minDispatchTime>/g, sub, context, true);
            /**
             * minimum off time after shut  down
             */
            obj["minOffTime"] = base.to_float (base.parse_element (/<cim:RegisteredResource.minOffTime>([\s\S]*?)<\/cim:RegisteredResource.minOffTime>/g, sub, context, true));
            /**
             * minimum on time after start up
             */
            obj["minOnTime"] = base.to_float (base.parse_element (/<cim:RegisteredResource.minOnTime>([\s\S]*?)<\/cim:RegisteredResource.minOnTime>/g, sub, context, true));
            /**
             * Must offer flag: indicates whether the unit is subject to the must offer provisions (Y/N)
             */
            obj["mustOfferFlag"] = base.parse_element (/<cim:RegisteredResource.mustOfferFlag>([\s\S]*?)<\/cim:RegisteredResource.mustOfferFlag>/g, sub, context, true);
            /**
             * Flag to indicate that the Resource is not participating in the Market Operations.
             */
            obj["nonMarket"] = base.parse_element (/<cim:RegisteredResource.nonMarket>([\s\S]*?)<\/cim:RegisteredResource.nonMarket>/g, sub, context, true);
            /**
             * Indication that the registered resource is a Point of Delivery (YES) resource which implies there is a POD Loss Factor.
             */
            obj["pointOfDeliveryFlag"] = base.parse_element (/<cim:RegisteredResource.pointOfDeliveryFlag>([\s\S]*?)<\/cim:RegisteredResource.pointOfDeliveryFlag>/g, sub, context, true);
            /**
             * Price setting flag: indicates whether a resource is capable of setting the Market Clearing Price (Y) for the DA market, and if not, indicates whether the resource shall submit bids for energy at $ 0 (S) or not (N)
            
            Initially in the RegisteredGenerator class.
             * It wasmove to the RegisteredResource class for the participating load dispatch purpose
             */
            obj["priceSetFlagDA"] = base.parse_element (/<cim:RegisteredResource.priceSetFlagDA>([\s\S]*?)<\/cim:RegisteredResource.priceSetFlagDA>/g, sub, context, true);
            /**
             * Price setting flag: indicates whether a resource is capable of setting the Market Clearing Price (Y) for the RT market, and if not, indicates whether the resource shall submit bids for energy at $ 0 (S) or not (N)
            
            Initially in the RegisteredGenerator class.
             * It wasmove to the RegisteredResource class for the participating load dispatch purpose
             */
            obj["priceSetFlagRT"] = base.parse_element (/<cim:RegisteredResource.priceSetFlagRT>([\s\S]*?)<\/cim:RegisteredResource.priceSetFlagRT>/g, sub, context, true);
            /**
             * Registration Status of resource - Active, Mothballed, Planned, or Decommissioned.
             */
            obj["registrationStatus"] = base.parse_element (/<cim:RegisteredResource.registrationStatus>([\s\S]*?)<\/cim:RegisteredResource.registrationStatus>/g, sub, context, true);
            /**
             * Indication that this resource participates inthe resource adequacy function.
             */
            obj["resourceAdequacyFlag"] = base.parse_element (/<cim:RegisteredResource.resourceAdequacyFlag>([\s\S]*?)<\/cim:RegisteredResource.resourceAdequacyFlag>/g, sub, context, true);
            /**
             * SMPM flag: indicates whether the resource is subject to the SMPM test (Yes/No)
             */
            obj["SMPMFlag"] = base.parse_element (/<cim:RegisteredResource.SMPMFlag>([\s\S]*?)<\/cim:RegisteredResource.SMPMFlag>/g, sub, context, true);
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:RegisteredResource.startEffectiveDate>([\s\S]*?)<\/cim:RegisteredResource.startEffectiveDate>/g, sub, context, true));
            /**
             * 
             */
            obj["HostControlArea"] = base.parse_attribute (/<cim:RegisteredResource.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["DefaultBid"] = base.parse_attribute (/<cim:RegisteredResource.DefaultBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["MktOrganisation"] = base.parse_attribute (/<cim:RegisteredResource.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["MktConnectivityNode"] = base.parse_attribute (/<cim:RegisteredResource.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A registered resource injects power at one or more connectivity nodes related to a pnode
             */
            obj["Pnode"] = base.parse_attribute (/<cim:RegisteredResource.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["AdjacentCASet"] = base.parse_attribute (/<cim:RegisteredResource.AdjacentCASet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["ResourceVerifiableCosts"] = base.parse_attribute (/<cim:RegisteredResource.ResourceVerifiableCosts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RegisteredResource;
            if (null == bucket)
                context.parsed.RegisteredResource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Kind of market role an organisation can have.
         */
        function parse_MarketRoleKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketRoleKind";
            /**
             * Energy service consumer.
             */
            obj["energyServiceConsumer"] = base.parse_element (/<cim:MarketRoleKind.energyServiceConsumer>([\s\S]*?)<\/cim:MarketRoleKind.energyServiceConsumer>/g, sub, context, true);
            /**
             * Generator merchant owner.
             */
            obj["generatorOwner"] = base.parse_element (/<cim:MarketRoleKind.generatorOwner>([\s\S]*?)<\/cim:MarketRoleKind.generatorOwner>/g, sub, context, true);
            /**
             * Generator merchant operator.
             */
            obj["generatorOperator"] = base.parse_element (/<cim:MarketRoleKind.generatorOperator>([\s\S]*?)<\/cim:MarketRoleKind.generatorOperator>/g, sub, context, true);
            /**
             * Transmission service provider.
             */
            obj["transmissionServiceProvider"] = base.parse_element (/<cim:MarketRoleKind.transmissionServiceProvider>([\s\S]*?)<\/cim:MarketRoleKind.transmissionServiceProvider>/g, sub, context, true);
            /**
             * Transmission owner.
             */
            obj["transmissionOwner"] = base.parse_element (/<cim:MarketRoleKind.transmissionOwner>([\s\S]*?)<\/cim:MarketRoleKind.transmissionOwner>/g, sub, context, true);
            /**
             * Transmission operator.
             */
            obj["transmissionOperator"] = base.parse_element (/<cim:MarketRoleKind.transmissionOperator>([\s\S]*?)<\/cim:MarketRoleKind.transmissionOperator>/g, sub, context, true);
            /**
             * Distribution provider.
             */
            obj["distributionProvider"] = base.parse_element (/<cim:MarketRoleKind.distributionProvider>([\s\S]*?)<\/cim:MarketRoleKind.distributionProvider>/g, sub, context, true);
            /**
             * Load serving entity.
             */
            obj["loadServingEntity"] = base.parse_element (/<cim:MarketRoleKind.loadServingEntity>([\s\S]*?)<\/cim:MarketRoleKind.loadServingEntity>/g, sub, context, true);
            /**
             * Purchasing selling entity.
             */
            obj["purchasingSellingEntity"] = base.parse_element (/<cim:MarketRoleKind.purchasingSellingEntity>([\s\S]*?)<\/cim:MarketRoleKind.purchasingSellingEntity>/g, sub, context, true);
            /**
             * Competitive retailer.
             */
            obj["competitiveRetailer"] = base.parse_element (/<cim:MarketRoleKind.competitiveRetailer>([\s\S]*?)<\/cim:MarketRoleKind.competitiveRetailer>/g, sub, context, true);
            /**
             * Reliability authority.
             */
            obj["reliabilityAuthority"] = base.parse_element (/<cim:MarketRoleKind.reliabilityAuthority>([\s\S]*?)<\/cim:MarketRoleKind.reliabilityAuthority>/g, sub, context, true);
            /**
             * Planning authority.
             */
            obj["planningAuthority"] = base.parse_element (/<cim:MarketRoleKind.planningAuthority>([\s\S]*?)<\/cim:MarketRoleKind.planningAuthority>/g, sub, context, true);
            /**
             * Balancing authority.
             */
            obj["balancingAuthority"] = base.parse_element (/<cim:MarketRoleKind.balancingAuthority>([\s\S]*?)<\/cim:MarketRoleKind.balancingAuthority>/g, sub, context, true);
            /**
             * Interchange authority.
             */
            obj["interchangeAuthority"] = base.parse_element (/<cim:MarketRoleKind.interchangeAuthority>([\s\S]*?)<\/cim:MarketRoleKind.interchangeAuthority>/g, sub, context, true);
            /**
             * Transmission planner.
             */
            obj["transmissionPlanner"] = base.parse_element (/<cim:MarketRoleKind.transmissionPlanner>([\s\S]*?)<\/cim:MarketRoleKind.transmissionPlanner>/g, sub, context, true);
            /**
             * Resource planner.
             */
            obj["resourcePlanner"] = base.parse_element (/<cim:MarketRoleKind.resourcePlanner>([\s\S]*?)<\/cim:MarketRoleKind.resourcePlanner>/g, sub, context, true);
            /**
             * Standards developer.
             */
            obj["standardsDeveloper"] = base.parse_element (/<cim:MarketRoleKind.standardsDeveloper>([\s\S]*?)<\/cim:MarketRoleKind.standardsDeveloper>/g, sub, context, true);
            /**
             * Compliance monitor.
             */
            obj["complianceMonitor"] = base.parse_element (/<cim:MarketRoleKind.complianceMonitor>([\s\S]*?)<\/cim:MarketRoleKind.complianceMonitor>/g, sub, context, true);
            /**
             * A party that has a contract proving financial security and identifying balance responsibility with the Imbalance Settlement Responsible of the Market Balance Area entitling the party to operate in the market.
             * This is the only role allowing a party to nominate energy on a wholesale level.
             */
            obj["BalanceResponsibleParty"] = base.parse_element (/<cim:MarketRoleKind.BalanceResponsibleParty>([\s\S]*?)<\/cim:MarketRoleKind.BalanceResponsibleParty>/g, sub, context, true);
            /**
             * A party that markets the difference between actual metered energy consumption and the energy bought with firm energy contracts by the Party Connected to the Grid.
             * In addition the Balance Supplier markets any difference with the firm energy contract (of the Party Connected to the Grid) and the metered production.
             */
            obj["BalanceSupplier"] = base.parse_element (/<cim:MarketRoleKind.BalanceSupplier>([\s\S]*?)<\/cim:MarketRoleKind.BalanceSupplier>/g, sub, context, true);
            /**
             * The party responsible for invoicing a concerned party.
             */
            obj["BillingAgent"] = base.parse_element (/<cim:MarketRoleKind.BillingAgent>([\s\S]*?)<\/cim:MarketRoleKind.BillingAgent>/g, sub, context, true);
            /**
             * A party that is selling or buying energy on a firm basis (a fixed volume per market time period).
             */
            obj["BlockEnergyTrader"] = base.parse_element (/<cim:MarketRoleKind.BlockEnergyTrader>([\s\S]*?)<\/cim:MarketRoleKind.BlockEnergyTrader>/g, sub, context, true);
            /**
             * A party, acting on behalf of the System Operators involved, responsible for establishing a coordinated Offered Capacity and/or Net Transfer Capacity (NTC) and/or Available Transfer Capacity (ATC) between several Market Balance Areas.
             */
            obj["CapacityCoordinator"] = base.parse_element (/<cim:MarketRoleKind.CapacityCoordinator>([\s\S]*?)<\/cim:MarketRoleKind.CapacityCoordinator>/g, sub, context, true);
            /**
             * A party that has a contract to participate in the Capacity Market to acquire capacity through a Transmission Capacity Allocator.
             * The capacity may be acquired on behalf of an Interconnection Trade Responsible or for sale on secondary capacity markets.
             */
            obj["CapacityTrader"] = base.parse_element (/<cim:MarketRoleKind.CapacityTrader>([\s\S]*?)<\/cim:MarketRoleKind.CapacityTrader>/g, sub, context, true);
            /**
             * A party that consumes electricity.
            <b><i>Additional information:</i></b>
             * This is a Type of Party Connected to the Grid.
             */
            obj["Consumer"] = base.parse_element (/<cim:MarketRoleKind.Consumer>([\s\S]*?)<\/cim:MarketRoleKind.Consumer>/g, sub, context, true);
            /**
             * A party who can be brought to rights, legally and financially, for any imbalance between enegry nominated and consumed for all associated Accounting Points.
            <b><i>Additional information:</i></b>
             * This is a type of Balance Responsible Party.
             */
            obj["ConsumptionResponsibleParty"] = base.parse_element (/<cim:MarketRoleKind.ConsumptionResponsibleParty>([\s\S]*?)<\/cim:MarketRoleKind.ConsumptionResponsibleParty>/g, sub, context, true);
            /**
             * Responsible for :
            1.
             * The coordination of exchange programs between its related Market Balance Areas and for the exchanges between its associated Control Areas.
             */
            obj["ControlAreaOperator"] = base.parse_element (/<cim:MarketRoleKind.ControlAreaOperator>([\s\S]*?)<\/cim:MarketRoleKind.ControlAreaOperator>/g, sub, context, true);
            /**
             * Responsible for :
            1.
             * The coordination of exchanges between its associated Control Blocks and the organisation of the coordination of exchange programs between its related Control Areas.
             */
            obj["ControlBlockOperator"] = base.parse_element (/<cim:MarketRoleKind.ControlBlockOperator>([\s\S]*?)<\/cim:MarketRoleKind.ControlBlockOperator>/g, sub, context, true);
            /**
             * Responsible for :
            1.
             * The coordination of exchange programs between its related Control Blocks and for the exchanges between its associated Coordination Center Zones.
             */
            obj["CoordinationCenterOperator"] = base.parse_element (/<cim:MarketRoleKind.CoordinationCenterOperator>([\s\S]*?)<\/cim:MarketRoleKind.CoordinationCenterOperator>/g, sub, context, true);
            /**
             * A party responsible for providing access to the grid through an Accounting Point and its use for energy consumption or production to the Party Connected to the Grid.
             */
            obj["GridAccessProvider"] = base.parse_element (/<cim:MarketRoleKind.GridAccessProvider>([\s\S]*?)<\/cim:MarketRoleKind.GridAccessProvider>/g, sub, context, true);
            /**
             * A party that operates one or more grids.
             */
            obj["GridOperator"] = base.parse_element (/<cim:MarketRoleKind.GridOperator>([\s\S]*?)<\/cim:MarketRoleKind.GridOperator>/g, sub, context, true);
            /**
             * A party that is responsible for settlement of the difference between the contracted quantities and the realised quantities of energy products for the Balance Responsible Parties in a Market Balance Area.
             * Note:
             */
            obj["ImbalanceSettlementResponsible"] = base.parse_element (/<cim:MarketRoleKind.ImbalanceSettlementResponsible>([\s\S]*?)<\/cim:MarketRoleKind.ImbalanceSettlementResponsible>/g, sub, context, true);
            /**
             * Is a Balance Responsible Party or depends on one.
             * They are recognized by the Nomination Validator for the nomination of already allocated capacity.
             */
            obj["InterconnectionTradeResponsible"] = base.parse_element (/<cim:MarketRoleKind.InterconnectionTradeResponsible>([\s\S]*?)<\/cim:MarketRoleKind.InterconnectionTradeResponsible>/g, sub, context, true);
            /**
             * Market Information Aggregator, A party that provides market related information that has been compiled from the figures supplied by different actors in the market.
             * This information may also be published or distributed for general use.
             */
            obj["MarketInformationAggregator"] = base.parse_element (/<cim:MarketRoleKind.MarketInformationAggregator>([\s\S]*?)<\/cim:MarketRoleKind.MarketInformationAggregator>/g, sub, context, true);
            /**
             * The unique power exchange of trades for the actual delivery of energy that receives the bids from the Balance Responsible Parties that have a contract to bid.
             * The Market Operator determines the market energy price for the Market Balance Area after applying technical constraints from the System Operator. It may also establish the price for the reconciliation within a Metering Grid Area.
             */
            obj["MarketOperator"] = base.parse_element (/<cim:MarketRoleKind.MarketOperator>([\s\S]*?)<\/cim:MarketRoleKind.MarketOperator>/g, sub, context, true);
            /**
             * A party responsible for keeping a database of meters.
             */
            obj["MeterAdministrator"] = base.parse_element (/<cim:MarketRoleKind.MeterAdministrator>([\s\S]*?)<\/cim:MarketRoleKind.MeterAdministrator>/g, sub, context, true);
            /**
             * A party responsible for installing, maintaining, testing, certifying and decommissioning physical meters.
             */
            obj["MeterOperator"] = base.parse_element (/<cim:MarketRoleKind.MeterOperator>([\s\S]*?)<\/cim:MarketRoleKind.MeterOperator>/g, sub, context, true);
            /**
             * A party responsible for meter reading and quality control of the reading.
             */
            obj["MeteredDataCollector"] = base.parse_element (/<cim:MarketRoleKind.MeteredDataCollector>([\s\S]*?)<\/cim:MarketRoleKind.MeteredDataCollector>/g, sub, context, true);
            /**
             * A party responsible for the establishment and validation of metered data based on the collected data received from the Metered Data Collector.
             * The party is responsible for the history of metered data for a Metering Point.
             */
            obj["MeteredDataResponsible"] = base.parse_element (/<cim:MarketRoleKind.MeteredDataResponsible>([\s\S]*?)<\/cim:MarketRoleKind.MeteredDataResponsible>/g, sub, context, true);
            /**
             * A party responsible for the establishment and qualification of metered data from the Metered Data Responsible.
             * This data is aggregated according to a defined set of market rules.
             */
            obj["MeteredDataAggregator"] = base.parse_element (/<cim:MarketRoleKind.MeteredDataAggregator>([\s\S]*?)<\/cim:MarketRoleKind.MeteredDataAggregator>/g, sub, context, true);
            /**
             * A party responsible for registering the parties linked to the metering points in a Metering Grid Area.
             * They are also responsible for maintaining the Metering Point technical specifications. They are responsible for creating and terminating metering points.
             */
            obj["MeteringPointAdministrator"] = base.parse_element (/<cim:MarketRoleKind.MeteringPointAdministrator>([\s\S]*?)<\/cim:MarketRoleKind.MeteringPointAdministrator>/g, sub, context, true);
            /**
             * Responsible for the management of the available tenders for all Acquiring System Operators to establish the order of the reserve capacity that can be activated.
             */
            obj["MOLResponsible"] = base.parse_element (/<cim:MarketRoleKind.MOLResponsible>([\s\S]*?)<\/cim:MarketRoleKind.MOLResponsible>/g, sub, context, true);
            /**
             * Has the responsibility of ensuring that all capacity nominated is within the allowed limits and confirming all valid nominations to all involved parties.
             * They inform the Interconnection Trade Responsible of the maximum nominated capacity allowed. Depending on market rules for a given interconnection the corresponding System Operators may appoint one Nomination Validator.
             */
            obj["NominationValidator"] = base.parse_element (/<cim:MarketRoleKind.NominationValidator>([\s\S]*?)<\/cim:MarketRoleKind.NominationValidator>/g, sub, context, true);
            /**
             * A party that contracts for the right to consume or produce electricity at an Accounting Point.
             */
            obj["PartyConnectedToTheGrid"] = base.parse_element (/<cim:MarketRoleKind.PartyConnectedToTheGrid>([\s\S]*?)<\/cim:MarketRoleKind.PartyConnectedToTheGrid>/g, sub, context, true);
            /**
             * A party that produces electricity.
            <b><i>Additional information:</i></b>
             * This is a type of Party Connected to the Grid.
             */
            obj["Producer"] = base.parse_element (/<cim:MarketRoleKind.Producer>([\s\S]*?)<\/cim:MarketRoleKind.Producer>/g, sub, context, true);
            /**
             * A party who can be brought to rights, legally and financially, for any imbalance between energy nominated and produced for all associated Accounting Points.
            <b><i>Additional information:</i></b>
             * This is a type of Balance Responsible Party.
             */
            obj["ProductionResponsibleParty"] = base.parse_element (/<cim:MarketRoleKind.ProductionResponsibleParty>([\s\S]*?)<\/cim:MarketRoleKind.ProductionResponsibleParty>/g, sub, context, true);
            /**
             * A party that is financially accountable for the reconciled volume of energy products for a profiled Accounting Point.
             */
            obj["ReconciliationAccountable"] = base.parse_element (/<cim:MarketRoleKind.ReconciliationAccountable>([\s\S]*?)<\/cim:MarketRoleKind.ReconciliationAccountable>/g, sub, context, true);
            /**
             * A party that is responsible for reconciling, within a Metering Grid Area, the volumes used in the imbalance settlement process for profiled Accounting Points and the actual metered quantities.
             * Note:
             */
            obj["ReconciliationResponsible"] = base.parse_element (/<cim:MarketRoleKind.ReconciliationResponsible>([\s\S]*?)<\/cim:MarketRoleKind.ReconciliationResponsible>/g, sub, context, true);
            /**
             * Informs the market of reserve requirements, receives tenders against the requirements and in compliance with the prequalification criteria, determines what tenders meet requirements and assigns tenders.
             */
            obj["ReserveAllocator"] = base.parse_element (/<cim:MarketRoleKind.ReserveAllocator>([\s\S]*?)<\/cim:MarketRoleKind.ReserveAllocator>/g, sub, context, true);
            /**
             * A role that manages a resource object and provides the schedules for it
             */
            obj["ResourceProvider"] = base.parse_element (/<cim:MarketRoleKind.ResourceProvider>([\s\S]*?)<\/cim:MarketRoleKind.ResourceProvider>/g, sub, context, true);
            /**
             * A party that is responsible for the schedule information and its exchange on behalf of a Balance Responsible Party.
             * For example in the Polish market a Scheduling Coordinator is responsible for information interchange for scheduling and settlement.
             */
            obj["SchedulingCoordinator"] = base.parse_element (/<cim:MarketRoleKind.SchedulingCoordinator>([\s\S]*?)<\/cim:MarketRoleKind.SchedulingCoordinator>/g, sub, context, true);
            /**
             * A party that is responsible for a stable power system operation
            (including the organisation of physical balance) through a transmission grid in a geographical area.
             * The System Operator will also determine and be responsible for cross border capacity and exchanges. If necessary they may reduce allocated capacity to ensure operational stability. Transmission as mentioned above means "the transport of electricity on the extra high or high voltage network with a view to its delivery to final customers or to distributors. Operation of transmission includes as well the tasks of system operation concerning its management of energy flows, reliability of the system and availability of all necessary system services." (definition taken from the ENTSO-E RGCE Operation handbook Glossary).
             */
            obj["SystemOperator"] = base.parse_element (/<cim:MarketRoleKind.SystemOperator>([\s\S]*?)<\/cim:MarketRoleKind.SystemOperator>/g, sub, context, true);
            /**
             * A party who can be brought to rights, legally and financially, for any imbalance between energy nominated and consumed for all associated Accounting Points.
            <b><i>Note:</i></b>
            A power exchange without any privileged responsibilities acts as a Trade Responsible Party.
            <b><i>Additional information:</i></b>
             * This is a type of Balance Responsible Party.
             */
            obj["TradeResponsibleParty"] = base.parse_element (/<cim:MarketRoleKind.TradeResponsibleParty>([\s\S]*?)<\/cim:MarketRoleKind.TradeResponsibleParty>/g, sub, context, true);
            /**
             * Manages the allocation of transmission capacity for an Allocated Capacity Area.
            <b><i>For explicit auctions:</i></b>
            The Transmission Capacity Allocator manages, on behalf of the System Operators, the allocation of available transmission capacity for an Allocated capacity Area.
             * They offer the available transmission capacity to the market, allocates the available transmission capacity to individual Capacity Traders and calculates the billing amount of already allocated capacities to the Capacity Traders.
             */
            obj["TransmissionCapacityAllocator"] = base.parse_element (/<cim:MarketRoleKind.TransmissionCapacityAllocator>([\s\S]*?)<\/cim:MarketRoleKind.TransmissionCapacityAllocator>/g, sub, context, true);
            bucket = context.parsed.MarketRoleKind;
            if (null == bucket)
                context.parsed.MarketRoleKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An identification of a party acting in a electricity market business process.
         * This class is used to identify organizations that can participate in market management and/or market operations.
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