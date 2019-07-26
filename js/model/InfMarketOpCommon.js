define
(
    ["model/base"],
    function (base)
    {

        /**
         * Kind of market role an organisation can have.
         *
         * This list is not exhausted, as other roles may exist.
         *
         */
        class MarketRoleKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketRoleKind;
                if (null == bucket)
                   cim_data.MarketRoleKind = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketRoleKind[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketRoleKind";
                base.parse_attribute (/<cim:MarketRoleKind.energyServiceConsumer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "energyServiceConsumer", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.generatorOwner\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "generatorOwner", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.generatorOperator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "generatorOperator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.transmissionServiceProvider\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "transmissionServiceProvider", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.transmissionOwner\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "transmissionOwner", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.transmissionOperator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "transmissionOperator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.distributionProvider\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "distributionProvider", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.loadServingEntity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "loadServingEntity", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.purchasingSellingEntity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "purchasingSellingEntity", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.competitiveRetailer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "competitiveRetailer", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.reliabilityAuthority\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "reliabilityAuthority", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.planningAuthority\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "planningAuthority", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.balancingAuthority\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "balancingAuthority", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.interchangeAuthority\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "interchangeAuthority", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.transmissionPlanner\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "transmissionPlanner", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.resourcePlanner\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "resourcePlanner", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.standardsDeveloper\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "standardsDeveloper", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.complianceMonitor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "complianceMonitor", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.BalanceResponsibleParty\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BalanceResponsibleParty", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.BalanceSupplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BalanceSupplier", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.BillingAgent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BillingAgent", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.BlockEnergyTrader\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BlockEnergyTrader", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.CapacityCoordinator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CapacityCoordinator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.CapacityTrader\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CapacityTrader", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.Consumer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Consumer", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.ConsumptionResponsibleParty\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConsumptionResponsibleParty", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.ControlAreaOperator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ControlAreaOperator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.ControlBlockOperator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ControlBlockOperator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.CoordinationCenterOperator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CoordinationCenterOperator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.GridAccessProvider\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GridAccessProvider", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.GridOperator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GridOperator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.ImbalanceSettlementResponsible\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ImbalanceSettlementResponsible", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.InterconnectionTradeResponsible\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InterconnectionTradeResponsible", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.MarketInformationAggregator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketInformationAggregator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.MarketOperator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketOperator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.MeterAdministrator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeterAdministrator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.MeterOperator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeterOperator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.MeteredDataCollector\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeteredDataCollector", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.MeteredDataResponsible\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeteredDataResponsible", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.MeteredDataAggregator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeteredDataAggregator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.MeteringPointAdministrator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeteringPointAdministrator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.MOLResponsible\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MOLResponsible", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.NominationValidator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NominationValidator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.PartyConnectedToTheGrid\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PartyConnectedToTheGrid", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.Producer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Producer", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.ProductionResponsibleParty\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProductionResponsibleParty", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.ReconciliationAccountable\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReconciliationAccountable", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.ReconciliationResponsible\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReconciliationResponsible", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.ReserveAllocator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReserveAllocator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.ResourceProvider\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceProvider", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.SchedulingCoordinator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SchedulingCoordinator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.SystemOperator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SystemOperator", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.TradeResponsibleParty\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TradeResponsibleParty", sub, context);
                base.parse_attribute (/<cim:MarketRoleKind.TransmissionCapacityAllocator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionCapacityAllocator", sub, context);
                let bucket = context.parsed.MarketRoleKind;
                if (null == bucket)
                   context.parsed.MarketRoleKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MarketRoleKind", "energyServiceConsumer", "energyServiceConsumer", fields);
                base.export_attribute (obj, "MarketRoleKind", "generatorOwner", "generatorOwner", fields);
                base.export_attribute (obj, "MarketRoleKind", "generatorOperator", "generatorOperator", fields);
                base.export_attribute (obj, "MarketRoleKind", "transmissionServiceProvider", "transmissionServiceProvider", fields);
                base.export_attribute (obj, "MarketRoleKind", "transmissionOwner", "transmissionOwner", fields);
                base.export_attribute (obj, "MarketRoleKind", "transmissionOperator", "transmissionOperator", fields);
                base.export_attribute (obj, "MarketRoleKind", "distributionProvider", "distributionProvider", fields);
                base.export_attribute (obj, "MarketRoleKind", "loadServingEntity", "loadServingEntity", fields);
                base.export_attribute (obj, "MarketRoleKind", "purchasingSellingEntity", "purchasingSellingEntity", fields);
                base.export_attribute (obj, "MarketRoleKind", "competitiveRetailer", "competitiveRetailer", fields);
                base.export_attribute (obj, "MarketRoleKind", "reliabilityAuthority", "reliabilityAuthority", fields);
                base.export_attribute (obj, "MarketRoleKind", "planningAuthority", "planningAuthority", fields);
                base.export_attribute (obj, "MarketRoleKind", "balancingAuthority", "balancingAuthority", fields);
                base.export_attribute (obj, "MarketRoleKind", "interchangeAuthority", "interchangeAuthority", fields);
                base.export_attribute (obj, "MarketRoleKind", "transmissionPlanner", "transmissionPlanner", fields);
                base.export_attribute (obj, "MarketRoleKind", "resourcePlanner", "resourcePlanner", fields);
                base.export_attribute (obj, "MarketRoleKind", "standardsDeveloper", "standardsDeveloper", fields);
                base.export_attribute (obj, "MarketRoleKind", "complianceMonitor", "complianceMonitor", fields);
                base.export_attribute (obj, "MarketRoleKind", "BalanceResponsibleParty", "BalanceResponsibleParty", fields);
                base.export_attribute (obj, "MarketRoleKind", "BalanceSupplier", "BalanceSupplier", fields);
                base.export_attribute (obj, "MarketRoleKind", "BillingAgent", "BillingAgent", fields);
                base.export_attribute (obj, "MarketRoleKind", "BlockEnergyTrader", "BlockEnergyTrader", fields);
                base.export_attribute (obj, "MarketRoleKind", "CapacityCoordinator", "CapacityCoordinator", fields);
                base.export_attribute (obj, "MarketRoleKind", "CapacityTrader", "CapacityTrader", fields);
                base.export_attribute (obj, "MarketRoleKind", "Consumer", "Consumer", fields);
                base.export_attribute (obj, "MarketRoleKind", "ConsumptionResponsibleParty", "ConsumptionResponsibleParty", fields);
                base.export_attribute (obj, "MarketRoleKind", "ControlAreaOperator", "ControlAreaOperator", fields);
                base.export_attribute (obj, "MarketRoleKind", "ControlBlockOperator", "ControlBlockOperator", fields);
                base.export_attribute (obj, "MarketRoleKind", "CoordinationCenterOperator", "CoordinationCenterOperator", fields);
                base.export_attribute (obj, "MarketRoleKind", "GridAccessProvider", "GridAccessProvider", fields);
                base.export_attribute (obj, "MarketRoleKind", "GridOperator", "GridOperator", fields);
                base.export_attribute (obj, "MarketRoleKind", "ImbalanceSettlementResponsible", "ImbalanceSettlementResponsible", fields);
                base.export_attribute (obj, "MarketRoleKind", "InterconnectionTradeResponsible", "InterconnectionTradeResponsible", fields);
                base.export_attribute (obj, "MarketRoleKind", "MarketInformationAggregator", "MarketInformationAggregator", fields);
                base.export_attribute (obj, "MarketRoleKind", "MarketOperator", "MarketOperator", fields);
                base.export_attribute (obj, "MarketRoleKind", "MeterAdministrator", "MeterAdministrator", fields);
                base.export_attribute (obj, "MarketRoleKind", "MeterOperator", "MeterOperator", fields);
                base.export_attribute (obj, "MarketRoleKind", "MeteredDataCollector", "MeteredDataCollector", fields);
                base.export_attribute (obj, "MarketRoleKind", "MeteredDataResponsible", "MeteredDataResponsible", fields);
                base.export_attribute (obj, "MarketRoleKind", "MeteredDataAggregator", "MeteredDataAggregator", fields);
                base.export_attribute (obj, "MarketRoleKind", "MeteringPointAdministrator", "MeteringPointAdministrator", fields);
                base.export_attribute (obj, "MarketRoleKind", "MOLResponsible", "MOLResponsible", fields);
                base.export_attribute (obj, "MarketRoleKind", "NominationValidator", "NominationValidator", fields);
                base.export_attribute (obj, "MarketRoleKind", "PartyConnectedToTheGrid", "PartyConnectedToTheGrid", fields);
                base.export_attribute (obj, "MarketRoleKind", "Producer", "Producer", fields);
                base.export_attribute (obj, "MarketRoleKind", "ProductionResponsibleParty", "ProductionResponsibleParty", fields);
                base.export_attribute (obj, "MarketRoleKind", "ReconciliationAccountable", "ReconciliationAccountable", fields);
                base.export_attribute (obj, "MarketRoleKind", "ReconciliationResponsible", "ReconciliationResponsible", fields);
                base.export_attribute (obj, "MarketRoleKind", "ReserveAllocator", "ReserveAllocator", fields);
                base.export_attribute (obj, "MarketRoleKind", "ResourceProvider", "ResourceProvider", fields);
                base.export_attribute (obj, "MarketRoleKind", "SchedulingCoordinator", "SchedulingCoordinator", fields);
                base.export_attribute (obj, "MarketRoleKind", "SystemOperator", "SystemOperator", fields);
                base.export_attribute (obj, "MarketRoleKind", "TradeResponsibleParty", "TradeResponsibleParty", fields);
                base.export_attribute (obj, "MarketRoleKind", "TransmissionCapacityAllocator", "TransmissionCapacityAllocator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketRoleKind_collapse" aria-expanded="true" aria-controls="MarketRoleKind_collapse" style="margin-left: 10px;">MarketRoleKind</a></legend>
                    <div id="MarketRoleKind_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#energyServiceConsumer}}<div><b>energyServiceConsumer</b>: {{energyServiceConsumer}}</div>{{/energyServiceConsumer}}
                    {{#generatorOwner}}<div><b>generatorOwner</b>: {{generatorOwner}}</div>{{/generatorOwner}}
                    {{#generatorOperator}}<div><b>generatorOperator</b>: {{generatorOperator}}</div>{{/generatorOperator}}
                    {{#transmissionServiceProvider}}<div><b>transmissionServiceProvider</b>: {{transmissionServiceProvider}}</div>{{/transmissionServiceProvider}}
                    {{#transmissionOwner}}<div><b>transmissionOwner</b>: {{transmissionOwner}}</div>{{/transmissionOwner}}
                    {{#transmissionOperator}}<div><b>transmissionOperator</b>: {{transmissionOperator}}</div>{{/transmissionOperator}}
                    {{#distributionProvider}}<div><b>distributionProvider</b>: {{distributionProvider}}</div>{{/distributionProvider}}
                    {{#loadServingEntity}}<div><b>loadServingEntity</b>: {{loadServingEntity}}</div>{{/loadServingEntity}}
                    {{#purchasingSellingEntity}}<div><b>purchasingSellingEntity</b>: {{purchasingSellingEntity}}</div>{{/purchasingSellingEntity}}
                    {{#competitiveRetailer}}<div><b>competitiveRetailer</b>: {{competitiveRetailer}}</div>{{/competitiveRetailer}}
                    {{#reliabilityAuthority}}<div><b>reliabilityAuthority</b>: {{reliabilityAuthority}}</div>{{/reliabilityAuthority}}
                    {{#planningAuthority}}<div><b>planningAuthority</b>: {{planningAuthority}}</div>{{/planningAuthority}}
                    {{#balancingAuthority}}<div><b>balancingAuthority</b>: {{balancingAuthority}}</div>{{/balancingAuthority}}
                    {{#interchangeAuthority}}<div><b>interchangeAuthority</b>: {{interchangeAuthority}}</div>{{/interchangeAuthority}}
                    {{#transmissionPlanner}}<div><b>transmissionPlanner</b>: {{transmissionPlanner}}</div>{{/transmissionPlanner}}
                    {{#resourcePlanner}}<div><b>resourcePlanner</b>: {{resourcePlanner}}</div>{{/resourcePlanner}}
                    {{#standardsDeveloper}}<div><b>standardsDeveloper</b>: {{standardsDeveloper}}</div>{{/standardsDeveloper}}
                    {{#complianceMonitor}}<div><b>complianceMonitor</b>: {{complianceMonitor}}</div>{{/complianceMonitor}}
                    {{#BalanceResponsibleParty}}<div><b>BalanceResponsibleParty</b>: {{BalanceResponsibleParty}}</div>{{/BalanceResponsibleParty}}
                    {{#BalanceSupplier}}<div><b>BalanceSupplier</b>: {{BalanceSupplier}}</div>{{/BalanceSupplier}}
                    {{#BillingAgent}}<div><b>BillingAgent</b>: {{BillingAgent}}</div>{{/BillingAgent}}
                    {{#BlockEnergyTrader}}<div><b>BlockEnergyTrader</b>: {{BlockEnergyTrader}}</div>{{/BlockEnergyTrader}}
                    {{#CapacityCoordinator}}<div><b>CapacityCoordinator</b>: {{CapacityCoordinator}}</div>{{/CapacityCoordinator}}
                    {{#CapacityTrader}}<div><b>CapacityTrader</b>: {{CapacityTrader}}</div>{{/CapacityTrader}}
                    {{#Consumer}}<div><b>Consumer</b>: {{Consumer}}</div>{{/Consumer}}
                    {{#ConsumptionResponsibleParty}}<div><b>ConsumptionResponsibleParty</b>: {{ConsumptionResponsibleParty}}</div>{{/ConsumptionResponsibleParty}}
                    {{#ControlAreaOperator}}<div><b>ControlAreaOperator</b>: {{ControlAreaOperator}}</div>{{/ControlAreaOperator}}
                    {{#ControlBlockOperator}}<div><b>ControlBlockOperator</b>: {{ControlBlockOperator}}</div>{{/ControlBlockOperator}}
                    {{#CoordinationCenterOperator}}<div><b>CoordinationCenterOperator</b>: {{CoordinationCenterOperator}}</div>{{/CoordinationCenterOperator}}
                    {{#GridAccessProvider}}<div><b>GridAccessProvider</b>: {{GridAccessProvider}}</div>{{/GridAccessProvider}}
                    {{#GridOperator}}<div><b>GridOperator</b>: {{GridOperator}}</div>{{/GridOperator}}
                    {{#ImbalanceSettlementResponsible}}<div><b>ImbalanceSettlementResponsible</b>: {{ImbalanceSettlementResponsible}}</div>{{/ImbalanceSettlementResponsible}}
                    {{#InterconnectionTradeResponsible}}<div><b>InterconnectionTradeResponsible</b>: {{InterconnectionTradeResponsible}}</div>{{/InterconnectionTradeResponsible}}
                    {{#MarketInformationAggregator}}<div><b>MarketInformationAggregator</b>: {{MarketInformationAggregator}}</div>{{/MarketInformationAggregator}}
                    {{#MarketOperator}}<div><b>MarketOperator</b>: {{MarketOperator}}</div>{{/MarketOperator}}
                    {{#MeterAdministrator}}<div><b>MeterAdministrator</b>: {{MeterAdministrator}}</div>{{/MeterAdministrator}}
                    {{#MeterOperator}}<div><b>MeterOperator</b>: {{MeterOperator}}</div>{{/MeterOperator}}
                    {{#MeteredDataCollector}}<div><b>MeteredDataCollector</b>: {{MeteredDataCollector}}</div>{{/MeteredDataCollector}}
                    {{#MeteredDataResponsible}}<div><b>MeteredDataResponsible</b>: {{MeteredDataResponsible}}</div>{{/MeteredDataResponsible}}
                    {{#MeteredDataAggregator}}<div><b>MeteredDataAggregator</b>: {{MeteredDataAggregator}}</div>{{/MeteredDataAggregator}}
                    {{#MeteringPointAdministrator}}<div><b>MeteringPointAdministrator</b>: {{MeteringPointAdministrator}}</div>{{/MeteringPointAdministrator}}
                    {{#MOLResponsible}}<div><b>MOLResponsible</b>: {{MOLResponsible}}</div>{{/MOLResponsible}}
                    {{#NominationValidator}}<div><b>NominationValidator</b>: {{NominationValidator}}</div>{{/NominationValidator}}
                    {{#PartyConnectedToTheGrid}}<div><b>PartyConnectedToTheGrid</b>: {{PartyConnectedToTheGrid}}</div>{{/PartyConnectedToTheGrid}}
                    {{#Producer}}<div><b>Producer</b>: {{Producer}}</div>{{/Producer}}
                    {{#ProductionResponsibleParty}}<div><b>ProductionResponsibleParty</b>: {{ProductionResponsibleParty}}</div>{{/ProductionResponsibleParty}}
                    {{#ReconciliationAccountable}}<div><b>ReconciliationAccountable</b>: {{ReconciliationAccountable}}</div>{{/ReconciliationAccountable}}
                    {{#ReconciliationResponsible}}<div><b>ReconciliationResponsible</b>: {{ReconciliationResponsible}}</div>{{/ReconciliationResponsible}}
                    {{#ReserveAllocator}}<div><b>ReserveAllocator</b>: {{ReserveAllocator}}</div>{{/ReserveAllocator}}
                    {{#ResourceProvider}}<div><b>ResourceProvider</b>: {{ResourceProvider}}</div>{{/ResourceProvider}}
                    {{#SchedulingCoordinator}}<div><b>SchedulingCoordinator</b>: {{SchedulingCoordinator}}</div>{{/SchedulingCoordinator}}
                    {{#SystemOperator}}<div><b>SystemOperator</b>: {{SystemOperator}}</div>{{/SystemOperator}}
                    {{#TradeResponsibleParty}}<div><b>TradeResponsibleParty</b>: {{TradeResponsibleParty}}</div>{{/TradeResponsibleParty}}
                    {{#TransmissionCapacityAllocator}}<div><b>TransmissionCapacityAllocator</b>: {{TransmissionCapacityAllocator}}</div>{{/TransmissionCapacityAllocator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketRoleKind_collapse" aria-expanded="true" aria-controls="{{id}}_MarketRoleKind_collapse" style="margin-left: 10px;">MarketRoleKind</a></legend>
                    <div id="{{id}}_MarketRoleKind_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyServiceConsumer'>energyServiceConsumer: </label><div class='col-sm-8'><input id='{{id}}_energyServiceConsumer' class='form-control' type='text'{{#energyServiceConsumer}} value='{{energyServiceConsumer}}'{{/energyServiceConsumer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_generatorOwner'>generatorOwner: </label><div class='col-sm-8'><input id='{{id}}_generatorOwner' class='form-control' type='text'{{#generatorOwner}} value='{{generatorOwner}}'{{/generatorOwner}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_generatorOperator'>generatorOperator: </label><div class='col-sm-8'><input id='{{id}}_generatorOperator' class='form-control' type='text'{{#generatorOperator}} value='{{generatorOperator}}'{{/generatorOperator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transmissionServiceProvider'>transmissionServiceProvider: </label><div class='col-sm-8'><input id='{{id}}_transmissionServiceProvider' class='form-control' type='text'{{#transmissionServiceProvider}} value='{{transmissionServiceProvider}}'{{/transmissionServiceProvider}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transmissionOwner'>transmissionOwner: </label><div class='col-sm-8'><input id='{{id}}_transmissionOwner' class='form-control' type='text'{{#transmissionOwner}} value='{{transmissionOwner}}'{{/transmissionOwner}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transmissionOperator'>transmissionOperator: </label><div class='col-sm-8'><input id='{{id}}_transmissionOperator' class='form-control' type='text'{{#transmissionOperator}} value='{{transmissionOperator}}'{{/transmissionOperator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_distributionProvider'>distributionProvider: </label><div class='col-sm-8'><input id='{{id}}_distributionProvider' class='form-control' type='text'{{#distributionProvider}} value='{{distributionProvider}}'{{/distributionProvider}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loadServingEntity'>loadServingEntity: </label><div class='col-sm-8'><input id='{{id}}_loadServingEntity' class='form-control' type='text'{{#loadServingEntity}} value='{{loadServingEntity}}'{{/loadServingEntity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purchasingSellingEntity'>purchasingSellingEntity: </label><div class='col-sm-8'><input id='{{id}}_purchasingSellingEntity' class='form-control' type='text'{{#purchasingSellingEntity}} value='{{purchasingSellingEntity}}'{{/purchasingSellingEntity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_competitiveRetailer'>competitiveRetailer: </label><div class='col-sm-8'><input id='{{id}}_competitiveRetailer' class='form-control' type='text'{{#competitiveRetailer}} value='{{competitiveRetailer}}'{{/competitiveRetailer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reliabilityAuthority'>reliabilityAuthority: </label><div class='col-sm-8'><input id='{{id}}_reliabilityAuthority' class='form-control' type='text'{{#reliabilityAuthority}} value='{{reliabilityAuthority}}'{{/reliabilityAuthority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_planningAuthority'>planningAuthority: </label><div class='col-sm-8'><input id='{{id}}_planningAuthority' class='form-control' type='text'{{#planningAuthority}} value='{{planningAuthority}}'{{/planningAuthority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_balancingAuthority'>balancingAuthority: </label><div class='col-sm-8'><input id='{{id}}_balancingAuthority' class='form-control' type='text'{{#balancingAuthority}} value='{{balancingAuthority}}'{{/balancingAuthority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_interchangeAuthority'>interchangeAuthority: </label><div class='col-sm-8'><input id='{{id}}_interchangeAuthority' class='form-control' type='text'{{#interchangeAuthority}} value='{{interchangeAuthority}}'{{/interchangeAuthority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transmissionPlanner'>transmissionPlanner: </label><div class='col-sm-8'><input id='{{id}}_transmissionPlanner' class='form-control' type='text'{{#transmissionPlanner}} value='{{transmissionPlanner}}'{{/transmissionPlanner}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resourcePlanner'>resourcePlanner: </label><div class='col-sm-8'><input id='{{id}}_resourcePlanner' class='form-control' type='text'{{#resourcePlanner}} value='{{resourcePlanner}}'{{/resourcePlanner}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_standardsDeveloper'>standardsDeveloper: </label><div class='col-sm-8'><input id='{{id}}_standardsDeveloper' class='form-control' type='text'{{#standardsDeveloper}} value='{{standardsDeveloper}}'{{/standardsDeveloper}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_complianceMonitor'>complianceMonitor: </label><div class='col-sm-8'><input id='{{id}}_complianceMonitor' class='form-control' type='text'{{#complianceMonitor}} value='{{complianceMonitor}}'{{/complianceMonitor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BalanceResponsibleParty'>BalanceResponsibleParty: </label><div class='col-sm-8'><input id='{{id}}_BalanceResponsibleParty' class='form-control' type='text'{{#BalanceResponsibleParty}} value='{{BalanceResponsibleParty}}'{{/BalanceResponsibleParty}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BalanceSupplier'>BalanceSupplier: </label><div class='col-sm-8'><input id='{{id}}_BalanceSupplier' class='form-control' type='text'{{#BalanceSupplier}} value='{{BalanceSupplier}}'{{/BalanceSupplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BillingAgent'>BillingAgent: </label><div class='col-sm-8'><input id='{{id}}_BillingAgent' class='form-control' type='text'{{#BillingAgent}} value='{{BillingAgent}}'{{/BillingAgent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BlockEnergyTrader'>BlockEnergyTrader: </label><div class='col-sm-8'><input id='{{id}}_BlockEnergyTrader' class='form-control' type='text'{{#BlockEnergyTrader}} value='{{BlockEnergyTrader}}'{{/BlockEnergyTrader}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CapacityCoordinator'>CapacityCoordinator: </label><div class='col-sm-8'><input id='{{id}}_CapacityCoordinator' class='form-control' type='text'{{#CapacityCoordinator}} value='{{CapacityCoordinator}}'{{/CapacityCoordinator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CapacityTrader'>CapacityTrader: </label><div class='col-sm-8'><input id='{{id}}_CapacityTrader' class='form-control' type='text'{{#CapacityTrader}} value='{{CapacityTrader}}'{{/CapacityTrader}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Consumer'>Consumer: </label><div class='col-sm-8'><input id='{{id}}_Consumer' class='form-control' type='text'{{#Consumer}} value='{{Consumer}}'{{/Consumer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConsumptionResponsibleParty'>ConsumptionResponsibleParty: </label><div class='col-sm-8'><input id='{{id}}_ConsumptionResponsibleParty' class='form-control' type='text'{{#ConsumptionResponsibleParty}} value='{{ConsumptionResponsibleParty}}'{{/ConsumptionResponsibleParty}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ControlAreaOperator'>ControlAreaOperator: </label><div class='col-sm-8'><input id='{{id}}_ControlAreaOperator' class='form-control' type='text'{{#ControlAreaOperator}} value='{{ControlAreaOperator}}'{{/ControlAreaOperator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ControlBlockOperator'>ControlBlockOperator: </label><div class='col-sm-8'><input id='{{id}}_ControlBlockOperator' class='form-control' type='text'{{#ControlBlockOperator}} value='{{ControlBlockOperator}}'{{/ControlBlockOperator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CoordinationCenterOperator'>CoordinationCenterOperator: </label><div class='col-sm-8'><input id='{{id}}_CoordinationCenterOperator' class='form-control' type='text'{{#CoordinationCenterOperator}} value='{{CoordinationCenterOperator}}'{{/CoordinationCenterOperator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GridAccessProvider'>GridAccessProvider: </label><div class='col-sm-8'><input id='{{id}}_GridAccessProvider' class='form-control' type='text'{{#GridAccessProvider}} value='{{GridAccessProvider}}'{{/GridAccessProvider}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GridOperator'>GridOperator: </label><div class='col-sm-8'><input id='{{id}}_GridOperator' class='form-control' type='text'{{#GridOperator}} value='{{GridOperator}}'{{/GridOperator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ImbalanceSettlementResponsible'>ImbalanceSettlementResponsible: </label><div class='col-sm-8'><input id='{{id}}_ImbalanceSettlementResponsible' class='form-control' type='text'{{#ImbalanceSettlementResponsible}} value='{{ImbalanceSettlementResponsible}}'{{/ImbalanceSettlementResponsible}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_InterconnectionTradeResponsible'>InterconnectionTradeResponsible: </label><div class='col-sm-8'><input id='{{id}}_InterconnectionTradeResponsible' class='form-control' type='text'{{#InterconnectionTradeResponsible}} value='{{InterconnectionTradeResponsible}}'{{/InterconnectionTradeResponsible}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketInformationAggregator'>MarketInformationAggregator: </label><div class='col-sm-8'><input id='{{id}}_MarketInformationAggregator' class='form-control' type='text'{{#MarketInformationAggregator}} value='{{MarketInformationAggregator}}'{{/MarketInformationAggregator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketOperator'>MarketOperator: </label><div class='col-sm-8'><input id='{{id}}_MarketOperator' class='form-control' type='text'{{#MarketOperator}} value='{{MarketOperator}}'{{/MarketOperator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeterAdministrator'>MeterAdministrator: </label><div class='col-sm-8'><input id='{{id}}_MeterAdministrator' class='form-control' type='text'{{#MeterAdministrator}} value='{{MeterAdministrator}}'{{/MeterAdministrator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeterOperator'>MeterOperator: </label><div class='col-sm-8'><input id='{{id}}_MeterOperator' class='form-control' type='text'{{#MeterOperator}} value='{{MeterOperator}}'{{/MeterOperator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeteredDataCollector'>MeteredDataCollector: </label><div class='col-sm-8'><input id='{{id}}_MeteredDataCollector' class='form-control' type='text'{{#MeteredDataCollector}} value='{{MeteredDataCollector}}'{{/MeteredDataCollector}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeteredDataResponsible'>MeteredDataResponsible: </label><div class='col-sm-8'><input id='{{id}}_MeteredDataResponsible' class='form-control' type='text'{{#MeteredDataResponsible}} value='{{MeteredDataResponsible}}'{{/MeteredDataResponsible}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeteredDataAggregator'>MeteredDataAggregator: </label><div class='col-sm-8'><input id='{{id}}_MeteredDataAggregator' class='form-control' type='text'{{#MeteredDataAggregator}} value='{{MeteredDataAggregator}}'{{/MeteredDataAggregator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeteringPointAdministrator'>MeteringPointAdministrator: </label><div class='col-sm-8'><input id='{{id}}_MeteringPointAdministrator' class='form-control' type='text'{{#MeteringPointAdministrator}} value='{{MeteringPointAdministrator}}'{{/MeteringPointAdministrator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MOLResponsible'>MOLResponsible: </label><div class='col-sm-8'><input id='{{id}}_MOLResponsible' class='form-control' type='text'{{#MOLResponsible}} value='{{MOLResponsible}}'{{/MOLResponsible}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NominationValidator'>NominationValidator: </label><div class='col-sm-8'><input id='{{id}}_NominationValidator' class='form-control' type='text'{{#NominationValidator}} value='{{NominationValidator}}'{{/NominationValidator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PartyConnectedToTheGrid'>PartyConnectedToTheGrid: </label><div class='col-sm-8'><input id='{{id}}_PartyConnectedToTheGrid' class='form-control' type='text'{{#PartyConnectedToTheGrid}} value='{{PartyConnectedToTheGrid}}'{{/PartyConnectedToTheGrid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Producer'>Producer: </label><div class='col-sm-8'><input id='{{id}}_Producer' class='form-control' type='text'{{#Producer}} value='{{Producer}}'{{/Producer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProductionResponsibleParty'>ProductionResponsibleParty: </label><div class='col-sm-8'><input id='{{id}}_ProductionResponsibleParty' class='form-control' type='text'{{#ProductionResponsibleParty}} value='{{ProductionResponsibleParty}}'{{/ProductionResponsibleParty}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReconciliationAccountable'>ReconciliationAccountable: </label><div class='col-sm-8'><input id='{{id}}_ReconciliationAccountable' class='form-control' type='text'{{#ReconciliationAccountable}} value='{{ReconciliationAccountable}}'{{/ReconciliationAccountable}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReconciliationResponsible'>ReconciliationResponsible: </label><div class='col-sm-8'><input id='{{id}}_ReconciliationResponsible' class='form-control' type='text'{{#ReconciliationResponsible}} value='{{ReconciliationResponsible}}'{{/ReconciliationResponsible}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReserveAllocator'>ReserveAllocator: </label><div class='col-sm-8'><input id='{{id}}_ReserveAllocator' class='form-control' type='text'{{#ReserveAllocator}} value='{{ReserveAllocator}}'{{/ReserveAllocator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceProvider'>ResourceProvider: </label><div class='col-sm-8'><input id='{{id}}_ResourceProvider' class='form-control' type='text'{{#ResourceProvider}} value='{{ResourceProvider}}'{{/ResourceProvider}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SchedulingCoordinator'>SchedulingCoordinator: </label><div class='col-sm-8'><input id='{{id}}_SchedulingCoordinator' class='form-control' type='text'{{#SchedulingCoordinator}} value='{{SchedulingCoordinator}}'{{/SchedulingCoordinator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SystemOperator'>SystemOperator: </label><div class='col-sm-8'><input id='{{id}}_SystemOperator' class='form-control' type='text'{{#SystemOperator}} value='{{SystemOperator}}'{{/SystemOperator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TradeResponsibleParty'>TradeResponsibleParty: </label><div class='col-sm-8'><input id='{{id}}_TradeResponsibleParty' class='form-control' type='text'{{#TradeResponsibleParty}} value='{{TradeResponsibleParty}}'{{/TradeResponsibleParty}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransmissionCapacityAllocator'>TransmissionCapacityAllocator: </label><div class='col-sm-8'><input id='{{id}}_TransmissionCapacityAllocator' class='form-control' type='text'{{#TransmissionCapacityAllocator}} value='{{TransmissionCapacityAllocator}}'{{/TransmissionCapacityAllocator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketRoleKind" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_energyServiceConsumer").value; if ("" !== temp) obj["energyServiceConsumer"] = temp;
                temp = document.getElementById (id + "_generatorOwner").value; if ("" !== temp) obj["generatorOwner"] = temp;
                temp = document.getElementById (id + "_generatorOperator").value; if ("" !== temp) obj["generatorOperator"] = temp;
                temp = document.getElementById (id + "_transmissionServiceProvider").value; if ("" !== temp) obj["transmissionServiceProvider"] = temp;
                temp = document.getElementById (id + "_transmissionOwner").value; if ("" !== temp) obj["transmissionOwner"] = temp;
                temp = document.getElementById (id + "_transmissionOperator").value; if ("" !== temp) obj["transmissionOperator"] = temp;
                temp = document.getElementById (id + "_distributionProvider").value; if ("" !== temp) obj["distributionProvider"] = temp;
                temp = document.getElementById (id + "_loadServingEntity").value; if ("" !== temp) obj["loadServingEntity"] = temp;
                temp = document.getElementById (id + "_purchasingSellingEntity").value; if ("" !== temp) obj["purchasingSellingEntity"] = temp;
                temp = document.getElementById (id + "_competitiveRetailer").value; if ("" !== temp) obj["competitiveRetailer"] = temp;
                temp = document.getElementById (id + "_reliabilityAuthority").value; if ("" !== temp) obj["reliabilityAuthority"] = temp;
                temp = document.getElementById (id + "_planningAuthority").value; if ("" !== temp) obj["planningAuthority"] = temp;
                temp = document.getElementById (id + "_balancingAuthority").value; if ("" !== temp) obj["balancingAuthority"] = temp;
                temp = document.getElementById (id + "_interchangeAuthority").value; if ("" !== temp) obj["interchangeAuthority"] = temp;
                temp = document.getElementById (id + "_transmissionPlanner").value; if ("" !== temp) obj["transmissionPlanner"] = temp;
                temp = document.getElementById (id + "_resourcePlanner").value; if ("" !== temp) obj["resourcePlanner"] = temp;
                temp = document.getElementById (id + "_standardsDeveloper").value; if ("" !== temp) obj["standardsDeveloper"] = temp;
                temp = document.getElementById (id + "_complianceMonitor").value; if ("" !== temp) obj["complianceMonitor"] = temp;
                temp = document.getElementById (id + "_BalanceResponsibleParty").value; if ("" !== temp) obj["BalanceResponsibleParty"] = temp;
                temp = document.getElementById (id + "_BalanceSupplier").value; if ("" !== temp) obj["BalanceSupplier"] = temp;
                temp = document.getElementById (id + "_BillingAgent").value; if ("" !== temp) obj["BillingAgent"] = temp;
                temp = document.getElementById (id + "_BlockEnergyTrader").value; if ("" !== temp) obj["BlockEnergyTrader"] = temp;
                temp = document.getElementById (id + "_CapacityCoordinator").value; if ("" !== temp) obj["CapacityCoordinator"] = temp;
                temp = document.getElementById (id + "_CapacityTrader").value; if ("" !== temp) obj["CapacityTrader"] = temp;
                temp = document.getElementById (id + "_Consumer").value; if ("" !== temp) obj["Consumer"] = temp;
                temp = document.getElementById (id + "_ConsumptionResponsibleParty").value; if ("" !== temp) obj["ConsumptionResponsibleParty"] = temp;
                temp = document.getElementById (id + "_ControlAreaOperator").value; if ("" !== temp) obj["ControlAreaOperator"] = temp;
                temp = document.getElementById (id + "_ControlBlockOperator").value; if ("" !== temp) obj["ControlBlockOperator"] = temp;
                temp = document.getElementById (id + "_CoordinationCenterOperator").value; if ("" !== temp) obj["CoordinationCenterOperator"] = temp;
                temp = document.getElementById (id + "_GridAccessProvider").value; if ("" !== temp) obj["GridAccessProvider"] = temp;
                temp = document.getElementById (id + "_GridOperator").value; if ("" !== temp) obj["GridOperator"] = temp;
                temp = document.getElementById (id + "_ImbalanceSettlementResponsible").value; if ("" !== temp) obj["ImbalanceSettlementResponsible"] = temp;
                temp = document.getElementById (id + "_InterconnectionTradeResponsible").value; if ("" !== temp) obj["InterconnectionTradeResponsible"] = temp;
                temp = document.getElementById (id + "_MarketInformationAggregator").value; if ("" !== temp) obj["MarketInformationAggregator"] = temp;
                temp = document.getElementById (id + "_MarketOperator").value; if ("" !== temp) obj["MarketOperator"] = temp;
                temp = document.getElementById (id + "_MeterAdministrator").value; if ("" !== temp) obj["MeterAdministrator"] = temp;
                temp = document.getElementById (id + "_MeterOperator").value; if ("" !== temp) obj["MeterOperator"] = temp;
                temp = document.getElementById (id + "_MeteredDataCollector").value; if ("" !== temp) obj["MeteredDataCollector"] = temp;
                temp = document.getElementById (id + "_MeteredDataResponsible").value; if ("" !== temp) obj["MeteredDataResponsible"] = temp;
                temp = document.getElementById (id + "_MeteredDataAggregator").value; if ("" !== temp) obj["MeteredDataAggregator"] = temp;
                temp = document.getElementById (id + "_MeteringPointAdministrator").value; if ("" !== temp) obj["MeteringPointAdministrator"] = temp;
                temp = document.getElementById (id + "_MOLResponsible").value; if ("" !== temp) obj["MOLResponsible"] = temp;
                temp = document.getElementById (id + "_NominationValidator").value; if ("" !== temp) obj["NominationValidator"] = temp;
                temp = document.getElementById (id + "_PartyConnectedToTheGrid").value; if ("" !== temp) obj["PartyConnectedToTheGrid"] = temp;
                temp = document.getElementById (id + "_Producer").value; if ("" !== temp) obj["Producer"] = temp;
                temp = document.getElementById (id + "_ProductionResponsibleParty").value; if ("" !== temp) obj["ProductionResponsibleParty"] = temp;
                temp = document.getElementById (id + "_ReconciliationAccountable").value; if ("" !== temp) obj["ReconciliationAccountable"] = temp;
                temp = document.getElementById (id + "_ReconciliationResponsible").value; if ("" !== temp) obj["ReconciliationResponsible"] = temp;
                temp = document.getElementById (id + "_ReserveAllocator").value; if ("" !== temp) obj["ReserveAllocator"] = temp;
                temp = document.getElementById (id + "_ResourceProvider").value; if ("" !== temp) obj["ResourceProvider"] = temp;
                temp = document.getElementById (id + "_SchedulingCoordinator").value; if ("" !== temp) obj["SchedulingCoordinator"] = temp;
                temp = document.getElementById (id + "_SystemOperator").value; if ("" !== temp) obj["SystemOperator"] = temp;
                temp = document.getElementById (id + "_TradeResponsibleParty").value; if ("" !== temp) obj["TradeResponsibleParty"] = temp;
                temp = document.getElementById (id + "_TransmissionCapacityAllocator").value; if ("" !== temp) obj["TransmissionCapacityAllocator"] = temp;

                return (obj);
            }
        }

        return (
            {
                MarketRoleKind: MarketRoleKind
            }
        );
    }
);