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
        class MarketRole extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketRole;
                if (null == bucket)
                   cim_data.MarketRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketRole[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketRole";
                base.parse_element (/<cim:MarketRole.roleType>([\s\S]*?)<\/cim:MarketRole.roleType>/g, obj, "roleType", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRole.status>([\s\S]*?)<\/cim:MarketRole.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRole.type>([\s\S]*?)<\/cim:MarketRole.type>/g, obj, "type", base.to_string, sub, context);

                var bucket = context.parsed.MarketRole;
                if (null == bucket)
                   context.parsed.MarketRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketRole", "roleType", base.from_string, fields);
                base.export_element (obj, "MarketRole", "status", base.from_string, fields);
                base.export_element (obj, "MarketRole", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A resource that is registered through the market participant registration system.
         *
         * Examples include generating unit, load, and non-physical generator or load.
         *
         */
        class RegisteredResource extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RegisteredResource;
                if (null == bucket)
                   cim_data.RegisteredResource = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RegisteredResource[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "RegisteredResource";
                base.parse_element (/<cim:RegisteredResource.ACAFlag>([\s\S]*?)<\/cim:RegisteredResource.ACAFlag>/g, obj, "ACAFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.ASSPOptimizationFlag>([\s\S]*?)<\/cim:RegisteredResource.ASSPOptimizationFlag>/g, obj, "ASSPOptimizationFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.commercialOpDate>([\s\S]*?)<\/cim:RegisteredResource.commercialOpDate>/g, obj, "commercialOpDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:RegisteredResource.contingencyAvailFlag>([\s\S]*?)<\/cim:RegisteredResource.contingencyAvailFlag>/g, obj, "contingencyAvailFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.dispatchFlag>([\s\S]*?)<\/cim:RegisteredResource.dispatchFlag>/g, obj, "dispatchFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.ECAFlag>([\s\S]*?)<\/cim:RegisteredResource.ECAFlag>/g, obj, "ECAFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.endEffectiveDate>([\s\S]*?)<\/cim:RegisteredResource.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:RegisteredResource.flexibleOfferFlag>([\s\S]*?)<\/cim:RegisteredResource.flexibleOfferFlag>/g, obj, "flexibleOfferFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.hourlyPredispatch>([\s\S]*?)<\/cim:RegisteredResource.hourlyPredispatch>/g, obj, "hourlyPredispatch", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.isAggregatedRes>([\s\S]*?)<\/cim:RegisteredResource.isAggregatedRes>/g, obj, "isAggregatedRes", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.lastModified>([\s\S]*?)<\/cim:RegisteredResource.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);
                base.parse_element (/<cim:RegisteredResource.LMPMFlag>([\s\S]*?)<\/cim:RegisteredResource.LMPMFlag>/g, obj, "LMPMFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.marketParticipationFlag>([\s\S]*?)<\/cim:RegisteredResource.marketParticipationFlag>/g, obj, "marketParticipationFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.maxBaseSelfSchedQty >([\s\S]*?)<\/cim:RegisteredResource.maxBaseSelfSchedQty >/g, obj, "maxBaseSelfSchedQty ", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredResource.maxOnTime>([\s\S]*?)<\/cim:RegisteredResource.maxOnTime>/g, obj, "maxOnTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredResource.minDispatchTime>([\s\S]*?)<\/cim:RegisteredResource.minDispatchTime>/g, obj, "minDispatchTime", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.minOffTime>([\s\S]*?)<\/cim:RegisteredResource.minOffTime>/g, obj, "minOffTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredResource.minOnTime>([\s\S]*?)<\/cim:RegisteredResource.minOnTime>/g, obj, "minOnTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredResource.mustOfferFlag>([\s\S]*?)<\/cim:RegisteredResource.mustOfferFlag>/g, obj, "mustOfferFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.nonMarket>([\s\S]*?)<\/cim:RegisteredResource.nonMarket>/g, obj, "nonMarket", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.pointOfDeliveryFlag>([\s\S]*?)<\/cim:RegisteredResource.pointOfDeliveryFlag>/g, obj, "pointOfDeliveryFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.priceSetFlagDA>([\s\S]*?)<\/cim:RegisteredResource.priceSetFlagDA>/g, obj, "priceSetFlagDA", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.priceSetFlagRT>([\s\S]*?)<\/cim:RegisteredResource.priceSetFlagRT>/g, obj, "priceSetFlagRT", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.registrationStatus>([\s\S]*?)<\/cim:RegisteredResource.registrationStatus>/g, obj, "registrationStatus", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.resourceAdequacyFlag>([\s\S]*?)<\/cim:RegisteredResource.resourceAdequacyFlag>/g, obj, "resourceAdequacyFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.SMPMFlag>([\s\S]*?)<\/cim:RegisteredResource.SMPMFlag>/g, obj, "SMPMFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.startEffectiveDate>([\s\S]*?)<\/cim:RegisteredResource.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:RegisteredResource.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.DefaultBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultBid", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktOrganisation", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.AdjacentCASet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AdjacentCASet", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.ResourceVerifiableCosts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceVerifiableCosts", sub, context);

                var bucket = context.parsed.RegisteredResource;
                if (null == bucket)
                   context.parsed.RegisteredResource = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "RegisteredResource", "ACAFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "ASSPOptimizationFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "commercialOpDate", base.from_datetime, fields);
                base.export_element (obj, "RegisteredResource", "contingencyAvailFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "dispatchFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "ECAFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "RegisteredResource", "flexibleOfferFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "hourlyPredispatch", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "isAggregatedRes", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "lastModified", base.from_datetime, fields);
                base.export_element (obj, "RegisteredResource", "LMPMFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "marketParticipationFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "maxBaseSelfSchedQty ", base.from_float, fields);
                base.export_element (obj, "RegisteredResource", "maxOnTime", base.from_float, fields);
                base.export_element (obj, "RegisteredResource", "minDispatchTime", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "minOffTime", base.from_float, fields);
                base.export_element (obj, "RegisteredResource", "minOnTime", base.from_float, fields);
                base.export_element (obj, "RegisteredResource", "mustOfferFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "nonMarket", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "pointOfDeliveryFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "priceSetFlagDA", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "priceSetFlagRT", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "registrationStatus", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "resourceAdequacyFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "SMPMFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "RegisteredResource", "HostControlArea", fields);
                base.export_attribute (obj, "RegisteredResource", "DefaultBid", fields);
                base.export_attribute (obj, "RegisteredResource", "MktOrganisation", fields);
                base.export_attribute (obj, "RegisteredResource", "MktConnectivityNode", fields);
                base.export_attribute (obj, "RegisteredResource", "Pnode", fields);
                base.export_attribute (obj, "RegisteredResource", "AdjacentCASet", fields);
                base.export_attribute (obj, "RegisteredResource", "ResourceVerifiableCosts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Kind of market role an organisation can have.
         *
         */
        class MarketRoleKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketRoleKind;
                if (null == bucket)
                   cim_data.MarketRoleKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketRoleKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketRoleKind";
                base.parse_element (/<cim:MarketRoleKind.energyServiceConsumer>([\s\S]*?)<\/cim:MarketRoleKind.energyServiceConsumer>/g, obj, "energyServiceConsumer", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.generatorOwner>([\s\S]*?)<\/cim:MarketRoleKind.generatorOwner>/g, obj, "generatorOwner", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.generatorOperator>([\s\S]*?)<\/cim:MarketRoleKind.generatorOperator>/g, obj, "generatorOperator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.transmissionServiceProvider>([\s\S]*?)<\/cim:MarketRoleKind.transmissionServiceProvider>/g, obj, "transmissionServiceProvider", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.transmissionOwner>([\s\S]*?)<\/cim:MarketRoleKind.transmissionOwner>/g, obj, "transmissionOwner", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.transmissionOperator>([\s\S]*?)<\/cim:MarketRoleKind.transmissionOperator>/g, obj, "transmissionOperator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.distributionProvider>([\s\S]*?)<\/cim:MarketRoleKind.distributionProvider>/g, obj, "distributionProvider", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.loadServingEntity>([\s\S]*?)<\/cim:MarketRoleKind.loadServingEntity>/g, obj, "loadServingEntity", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.purchasingSellingEntity>([\s\S]*?)<\/cim:MarketRoleKind.purchasingSellingEntity>/g, obj, "purchasingSellingEntity", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.competitiveRetailer>([\s\S]*?)<\/cim:MarketRoleKind.competitiveRetailer>/g, obj, "competitiveRetailer", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.reliabilityAuthority>([\s\S]*?)<\/cim:MarketRoleKind.reliabilityAuthority>/g, obj, "reliabilityAuthority", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.planningAuthority>([\s\S]*?)<\/cim:MarketRoleKind.planningAuthority>/g, obj, "planningAuthority", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.balancingAuthority>([\s\S]*?)<\/cim:MarketRoleKind.balancingAuthority>/g, obj, "balancingAuthority", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.interchangeAuthority>([\s\S]*?)<\/cim:MarketRoleKind.interchangeAuthority>/g, obj, "interchangeAuthority", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.transmissionPlanner>([\s\S]*?)<\/cim:MarketRoleKind.transmissionPlanner>/g, obj, "transmissionPlanner", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.resourcePlanner>([\s\S]*?)<\/cim:MarketRoleKind.resourcePlanner>/g, obj, "resourcePlanner", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.standardsDeveloper>([\s\S]*?)<\/cim:MarketRoleKind.standardsDeveloper>/g, obj, "standardsDeveloper", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.complianceMonitor>([\s\S]*?)<\/cim:MarketRoleKind.complianceMonitor>/g, obj, "complianceMonitor", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.BalanceResponsibleParty>([\s\S]*?)<\/cim:MarketRoleKind.BalanceResponsibleParty>/g, obj, "BalanceResponsibleParty", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.BalanceSupplier>([\s\S]*?)<\/cim:MarketRoleKind.BalanceSupplier>/g, obj, "BalanceSupplier", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.BillingAgent>([\s\S]*?)<\/cim:MarketRoleKind.BillingAgent>/g, obj, "BillingAgent", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.BlockEnergyTrader>([\s\S]*?)<\/cim:MarketRoleKind.BlockEnergyTrader>/g, obj, "BlockEnergyTrader", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.CapacityCoordinator>([\s\S]*?)<\/cim:MarketRoleKind.CapacityCoordinator>/g, obj, "CapacityCoordinator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.CapacityTrader>([\s\S]*?)<\/cim:MarketRoleKind.CapacityTrader>/g, obj, "CapacityTrader", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.Consumer>([\s\S]*?)<\/cim:MarketRoleKind.Consumer>/g, obj, "Consumer", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.ConsumptionResponsibleParty>([\s\S]*?)<\/cim:MarketRoleKind.ConsumptionResponsibleParty>/g, obj, "ConsumptionResponsibleParty", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.ControlAreaOperator>([\s\S]*?)<\/cim:MarketRoleKind.ControlAreaOperator>/g, obj, "ControlAreaOperator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.ControlBlockOperator>([\s\S]*?)<\/cim:MarketRoleKind.ControlBlockOperator>/g, obj, "ControlBlockOperator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.CoordinationCenterOperator>([\s\S]*?)<\/cim:MarketRoleKind.CoordinationCenterOperator>/g, obj, "CoordinationCenterOperator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.GridAccessProvider>([\s\S]*?)<\/cim:MarketRoleKind.GridAccessProvider>/g, obj, "GridAccessProvider", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.GridOperator>([\s\S]*?)<\/cim:MarketRoleKind.GridOperator>/g, obj, "GridOperator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.ImbalanceSettlementResponsible>([\s\S]*?)<\/cim:MarketRoleKind.ImbalanceSettlementResponsible>/g, obj, "ImbalanceSettlementResponsible", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.InterconnectionTradeResponsible>([\s\S]*?)<\/cim:MarketRoleKind.InterconnectionTradeResponsible>/g, obj, "InterconnectionTradeResponsible", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.MarketInformationAggregator>([\s\S]*?)<\/cim:MarketRoleKind.MarketInformationAggregator>/g, obj, "MarketInformationAggregator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.MarketOperator>([\s\S]*?)<\/cim:MarketRoleKind.MarketOperator>/g, obj, "MarketOperator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.MeterAdministrator>([\s\S]*?)<\/cim:MarketRoleKind.MeterAdministrator>/g, obj, "MeterAdministrator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.MeterOperator>([\s\S]*?)<\/cim:MarketRoleKind.MeterOperator>/g, obj, "MeterOperator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.MeteredDataCollector>([\s\S]*?)<\/cim:MarketRoleKind.MeteredDataCollector>/g, obj, "MeteredDataCollector", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.MeteredDataResponsible>([\s\S]*?)<\/cim:MarketRoleKind.MeteredDataResponsible>/g, obj, "MeteredDataResponsible", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.MeteredDataAggregator>([\s\S]*?)<\/cim:MarketRoleKind.MeteredDataAggregator>/g, obj, "MeteredDataAggregator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.MeteringPointAdministrator>([\s\S]*?)<\/cim:MarketRoleKind.MeteringPointAdministrator>/g, obj, "MeteringPointAdministrator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.MOLResponsible>([\s\S]*?)<\/cim:MarketRoleKind.MOLResponsible>/g, obj, "MOLResponsible", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.NominationValidator>([\s\S]*?)<\/cim:MarketRoleKind.NominationValidator>/g, obj, "NominationValidator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.PartyConnectedToTheGrid>([\s\S]*?)<\/cim:MarketRoleKind.PartyConnectedToTheGrid>/g, obj, "PartyConnectedToTheGrid", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.Producer>([\s\S]*?)<\/cim:MarketRoleKind.Producer>/g, obj, "Producer", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.ProductionResponsibleParty>([\s\S]*?)<\/cim:MarketRoleKind.ProductionResponsibleParty>/g, obj, "ProductionResponsibleParty", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.ReconciliationAccountable>([\s\S]*?)<\/cim:MarketRoleKind.ReconciliationAccountable>/g, obj, "ReconciliationAccountable", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.ReconciliationResponsible>([\s\S]*?)<\/cim:MarketRoleKind.ReconciliationResponsible>/g, obj, "ReconciliationResponsible", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.ReserveAllocator>([\s\S]*?)<\/cim:MarketRoleKind.ReserveAllocator>/g, obj, "ReserveAllocator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.ResourceProvider>([\s\S]*?)<\/cim:MarketRoleKind.ResourceProvider>/g, obj, "ResourceProvider", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.SchedulingCoordinator>([\s\S]*?)<\/cim:MarketRoleKind.SchedulingCoordinator>/g, obj, "SchedulingCoordinator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.SystemOperator>([\s\S]*?)<\/cim:MarketRoleKind.SystemOperator>/g, obj, "SystemOperator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.TradeResponsibleParty>([\s\S]*?)<\/cim:MarketRoleKind.TradeResponsibleParty>/g, obj, "TradeResponsibleParty", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRoleKind.TransmissionCapacityAllocator>([\s\S]*?)<\/cim:MarketRoleKind.TransmissionCapacityAllocator>/g, obj, "TransmissionCapacityAllocator", base.to_string, sub, context);

                var bucket = context.parsed.MarketRoleKind;
                if (null == bucket)
                   context.parsed.MarketRoleKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketRoleKind", "energyServiceConsumer", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "generatorOwner", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "generatorOperator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "transmissionServiceProvider", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "transmissionOwner", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "transmissionOperator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "distributionProvider", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "loadServingEntity", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "purchasingSellingEntity", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "competitiveRetailer", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "reliabilityAuthority", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "planningAuthority", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "balancingAuthority", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "interchangeAuthority", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "transmissionPlanner", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "resourcePlanner", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "standardsDeveloper", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "complianceMonitor", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "BalanceResponsibleParty", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "BalanceSupplier", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "BillingAgent", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "BlockEnergyTrader", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "CapacityCoordinator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "CapacityTrader", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "Consumer", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "ConsumptionResponsibleParty", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "ControlAreaOperator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "ControlBlockOperator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "CoordinationCenterOperator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "GridAccessProvider", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "GridOperator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "ImbalanceSettlementResponsible", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "InterconnectionTradeResponsible", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "MarketInformationAggregator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "MarketOperator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "MeterAdministrator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "MeterOperator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "MeteredDataCollector", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "MeteredDataResponsible", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "MeteredDataAggregator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "MeteringPointAdministrator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "MOLResponsible", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "NominationValidator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "PartyConnectedToTheGrid", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "Producer", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "ProductionResponsibleParty", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "ReconciliationAccountable", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "ReconciliationResponsible", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "ReserveAllocator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "ResourceProvider", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "SchedulingCoordinator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "SystemOperator", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "TradeResponsibleParty", base.from_string, fields);
                base.export_element (obj, "MarketRoleKind", "TransmissionCapacityAllocator", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An identification of a party acting in a electricity market business process.
         *
         * This class is used to identify organizations that can participate in market management and/or market operations.
         *
         */
        class MarketParticipant extends Common.Organisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketParticipant;
                if (null == bucket)
                   cim_data.MarketParticipant = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketParticipant[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "MarketParticipant";

                var bucket = context.parsed.MarketParticipant;
                if (null == bucket)
                   context.parsed.MarketParticipant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                RegisteredResource: RegisteredResource,
                MarketRoleKind: MarketRoleKind,
                MarketRole: MarketRole,
                MarketParticipant: MarketParticipant
            }
        );
    }
);