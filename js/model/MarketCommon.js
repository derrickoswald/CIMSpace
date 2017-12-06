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
         * Kind of market role an organisation can have.
         *
         */
        var MarketRoleKind =
        {
            energyServiceConsumer: "energyServiceConsumer",
            generatorOwner: "generatorOwner",
            generatorOperator: "generatorOperator",
            transmissionServiceProvider: "transmissionServiceProvider",
            transmissionOwner: "transmissionOwner",
            transmissionOperator: "transmissionOperator",
            distributionProvider: "distributionProvider",
            loadServingEntity: "loadServingEntity",
            purchasingSellingEntity: "purchasingSellingEntity",
            competitiveRetailer: "competitiveRetailer",
            reliabilityAuthority: "reliabilityAuthority",
            planningAuthority: "planningAuthority",
            balancingAuthority: "balancingAuthority",
            interchangeAuthority: "interchangeAuthority",
            transmissionPlanner: "transmissionPlanner",
            resourcePlanner: "resourcePlanner",
            standardsDeveloper: "standardsDeveloper",
            complianceMonitor: "complianceMonitor",
            BalanceResponsibleParty: "BalanceResponsibleParty",
            BalanceSupplier: "BalanceSupplier",
            BillingAgent: "BillingAgent",
            BlockEnergyTrader: "BlockEnergyTrader",
            CapacityCoordinator: "CapacityCoordinator",
            CapacityTrader: "CapacityTrader",
            Consumer: "Consumer",
            ConsumptionResponsibleParty: "ConsumptionResponsibleParty",
            ControlAreaOperator: "ControlAreaOperator",
            ControlBlockOperator: "ControlBlockOperator",
            CoordinationCenterOperator: "CoordinationCenterOperator",
            GridAccessProvider: "GridAccessProvider",
            GridOperator: "GridOperator",
            ImbalanceSettlementResponsible: "ImbalanceSettlementResponsible",
            InterconnectionTradeResponsible: "InterconnectionTradeResponsible",
            MarketInformationAggregator: "MarketInformationAggregator",
            MarketOperator: "MarketOperator",
            MeterAdministrator: "MeterAdministrator",
            MeterOperator: "MeterOperator",
            MeteredDataCollector: "MeteredDataCollector",
            MeteredDataResponsible: "MeteredDataResponsible",
            MeteredDataAggregator: "MeteredDataAggregator",
            MeteringPointAdministrator: "MeteringPointAdministrator",
            MOLResponsible: "MOLResponsible",
            NominationValidator: "NominationValidator",
            PartyConnectedToTheGrid: "PartyConnectedToTheGrid",
            Producer: "Producer",
            ProductionResponsibleParty: "ProductionResponsibleParty",
            ReconciliationAccountable: "ReconciliationAccountable",
            ReconciliationResponsible: "ReconciliationResponsible",
            ReserveAllocator: "ReserveAllocator",
            ResourceProvider: "ResourceProvider",
            SchedulingCoordinator: "SchedulingCoordinator",
            SystemOperator: "SystemOperator",
            TradeResponsibleParty: "TradeResponsibleParty",
            TransmissionCapacityAllocator: "TransmissionCapacityAllocator"
        };
        Object.freeze (MarketRoleKind);

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
                base.parse_attribute (/<cim:MarketRole.roleType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "roleType", sub, context);
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketRole_collapse" aria-expanded="true" aria-controls="MarketRole_collapse" style="margin-left: 10px;">MarketRole</a></legend>
                    <div id="MarketRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#roleType}}<div><b>roleType</b>: {{roleType}}</div>{{/roleType}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.MarketRoleKind = []; if (!obj.roleType) obj.MarketRoleKind.push ({ id: '', selected: true}); for (var property in MarketRoleKind) obj.MarketRoleKind.push ({ id: property, selected: obj.roleType && obj.roleType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MarketRoleKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketRole_collapse" aria-expanded="true" aria-controls="MarketRole_collapse" style="margin-left: 10px;">MarketRole</a></legend>
                    <div id="MarketRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='roleType'>roleType: </label><div class='col-sm-8'><select id='roleType' class='form-control'>{{#MarketRoleKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/MarketRoleKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegisteredResource_collapse" aria-expanded="true" aria-controls="RegisteredResource_collapse" style="margin-left: 10px;">RegisteredResource</a></legend>
                    <div id="RegisteredResource_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#ACAFlag}}<div><b>ACAFlag</b>: {{ACAFlag}}</div>{{/ACAFlag}}
                    {{#ASSPOptimizationFlag}}<div><b>ASSPOptimizationFlag</b>: {{ASSPOptimizationFlag}}</div>{{/ASSPOptimizationFlag}}
                    {{#commercialOpDate}}<div><b>commercialOpDate</b>: {{commercialOpDate}}</div>{{/commercialOpDate}}
                    {{#contingencyAvailFlag}}<div><b>contingencyAvailFlag</b>: {{contingencyAvailFlag}}</div>{{/contingencyAvailFlag}}
                    {{#dispatchFlag}}<div><b>dispatchFlag</b>: {{dispatchFlag}}</div>{{/dispatchFlag}}
                    {{#ECAFlag}}<div><b>ECAFlag</b>: {{ECAFlag}}</div>{{/ECAFlag}}
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#flexibleOfferFlag}}<div><b>flexibleOfferFlag</b>: {{flexibleOfferFlag}}</div>{{/flexibleOfferFlag}}
                    {{#hourlyPredispatch}}<div><b>hourlyPredispatch</b>: {{hourlyPredispatch}}</div>{{/hourlyPredispatch}}
                    {{#isAggregatedRes}}<div><b>isAggregatedRes</b>: {{isAggregatedRes}}</div>{{/isAggregatedRes}}
                    {{#lastModified}}<div><b>lastModified</b>: {{lastModified}}</div>{{/lastModified}}
                    {{#LMPMFlag}}<div><b>LMPMFlag</b>: {{LMPMFlag}}</div>{{/LMPMFlag}}
                    {{#marketParticipationFlag}}<div><b>marketParticipationFlag</b>: {{marketParticipationFlag}}</div>{{/marketParticipationFlag}}
                    {{#maxBaseSelfSchedQty }}<div><b>maxBaseSelfSchedQty </b>: {{maxBaseSelfSchedQty }}</div>{{/maxBaseSelfSchedQty }}
                    {{#maxOnTime}}<div><b>maxOnTime</b>: {{maxOnTime}}</div>{{/maxOnTime}}
                    {{#minDispatchTime}}<div><b>minDispatchTime</b>: {{minDispatchTime}}</div>{{/minDispatchTime}}
                    {{#minOffTime}}<div><b>minOffTime</b>: {{minOffTime}}</div>{{/minOffTime}}
                    {{#minOnTime}}<div><b>minOnTime</b>: {{minOnTime}}</div>{{/minOnTime}}
                    {{#mustOfferFlag}}<div><b>mustOfferFlag</b>: {{mustOfferFlag}}</div>{{/mustOfferFlag}}
                    {{#nonMarket}}<div><b>nonMarket</b>: {{nonMarket}}</div>{{/nonMarket}}
                    {{#pointOfDeliveryFlag}}<div><b>pointOfDeliveryFlag</b>: {{pointOfDeliveryFlag}}</div>{{/pointOfDeliveryFlag}}
                    {{#priceSetFlagDA}}<div><b>priceSetFlagDA</b>: {{priceSetFlagDA}}</div>{{/priceSetFlagDA}}
                    {{#priceSetFlagRT}}<div><b>priceSetFlagRT</b>: {{priceSetFlagRT}}</div>{{/priceSetFlagRT}}
                    {{#registrationStatus}}<div><b>registrationStatus</b>: {{registrationStatus}}</div>{{/registrationStatus}}
                    {{#resourceAdequacyFlag}}<div><b>resourceAdequacyFlag</b>: {{resourceAdequacyFlag}}</div>{{/resourceAdequacyFlag}}
                    {{#SMPMFlag}}<div><b>SMPMFlag</b>: {{SMPMFlag}}</div>{{/SMPMFlag}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#AdjacentCASet}}<div><b>AdjacentCASet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AdjacentCASet}}&quot;);})'>{{AdjacentCASet}}</a></div>{{/AdjacentCASet}}
                    {{#MktConnectivityNode}}<div><b>MktConnectivityNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktConnectivityNode}}&quot;);})'>{{MktConnectivityNode}}</a></div>{{/MktConnectivityNode}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HostControlArea}}&quot;);})'>{{HostControlArea}}</a></div>{{/HostControlArea}}
                    {{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Pnode}}&quot;);})'>{{Pnode}}</a></div>{{/Pnode}}
                    {{#DefaultBid}}<div><b>DefaultBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DefaultBid}}&quot;);})'>{{DefaultBid}}</a></div>{{/DefaultBid}}
                    {{#ResourceVerifiableCosts}}<div><b>ResourceVerifiableCosts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ResourceVerifiableCosts}}&quot;);})'>{{ResourceVerifiableCosts}}</a></div>{{/ResourceVerifiableCosts}}
                    {{#MktOrganisation}}<div><b>MktOrganisation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktOrganisation}}&quot;);})'>{{MktOrganisation}}</a></div>{{/MktOrganisation}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegisteredResource_collapse" aria-expanded="true" aria-controls="RegisteredResource_collapse" style="margin-left: 10px;">RegisteredResource</a></legend>
                    <div id="RegisteredResource_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ACAFlag'>ACAFlag: </label><div class='col-sm-8'><input id='ACAFlag' class='form-control' type='text'{{#ACAFlag}} value='{{ACAFlag}}'{{/ACAFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ASSPOptimizationFlag'>ASSPOptimizationFlag: </label><div class='col-sm-8'><input id='ASSPOptimizationFlag' class='form-control' type='text'{{#ASSPOptimizationFlag}} value='{{ASSPOptimizationFlag}}'{{/ASSPOptimizationFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='commercialOpDate'>commercialOpDate: </label><div class='col-sm-8'><input id='commercialOpDate' class='form-control' type='text'{{#commercialOpDate}} value='{{commercialOpDate}}'{{/commercialOpDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contingencyAvailFlag'>contingencyAvailFlag: </label><div class='col-sm-8'><input id='contingencyAvailFlag' class='form-control' type='text'{{#contingencyAvailFlag}} value='{{contingencyAvailFlag}}'{{/contingencyAvailFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dispatchFlag'>dispatchFlag: </label><div class='col-sm-8'><input id='dispatchFlag' class='form-control' type='text'{{#dispatchFlag}} value='{{dispatchFlag}}'{{/dispatchFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ECAFlag'>ECAFlag: </label><div class='col-sm-8'><input id='ECAFlag' class='form-control' type='text'{{#ECAFlag}} value='{{ECAFlag}}'{{/ECAFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='flexibleOfferFlag'>flexibleOfferFlag: </label><div class='col-sm-8'><input id='flexibleOfferFlag' class='form-control' type='text'{{#flexibleOfferFlag}} value='{{flexibleOfferFlag}}'{{/flexibleOfferFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hourlyPredispatch'>hourlyPredispatch: </label><div class='col-sm-8'><input id='hourlyPredispatch' class='form-control' type='text'{{#hourlyPredispatch}} value='{{hourlyPredispatch}}'{{/hourlyPredispatch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='isAggregatedRes'>isAggregatedRes: </label><div class='col-sm-8'><input id='isAggregatedRes' class='form-control' type='text'{{#isAggregatedRes}} value='{{isAggregatedRes}}'{{/isAggregatedRes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lastModified'>lastModified: </label><div class='col-sm-8'><input id='lastModified' class='form-control' type='text'{{#lastModified}} value='{{lastModified}}'{{/lastModified}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LMPMFlag'>LMPMFlag: </label><div class='col-sm-8'><input id='LMPMFlag' class='form-control' type='text'{{#LMPMFlag}} value='{{LMPMFlag}}'{{/LMPMFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marketParticipationFlag'>marketParticipationFlag: </label><div class='col-sm-8'><input id='marketParticipationFlag' class='form-control' type='text'{{#marketParticipationFlag}} value='{{marketParticipationFlag}}'{{/marketParticipationFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxBaseSelfSchedQty '>maxBaseSelfSchedQty : </label><div class='col-sm-8'><input id='maxBaseSelfSchedQty ' class='form-control' type='text'{{#maxBaseSelfSchedQty }} value='{{maxBaseSelfSchedQty }}'{{/maxBaseSelfSchedQty }}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxOnTime'>maxOnTime: </label><div class='col-sm-8'><input id='maxOnTime' class='form-control' type='text'{{#maxOnTime}} value='{{maxOnTime}}'{{/maxOnTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minDispatchTime'>minDispatchTime: </label><div class='col-sm-8'><input id='minDispatchTime' class='form-control' type='text'{{#minDispatchTime}} value='{{minDispatchTime}}'{{/minDispatchTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minOffTime'>minOffTime: </label><div class='col-sm-8'><input id='minOffTime' class='form-control' type='text'{{#minOffTime}} value='{{minOffTime}}'{{/minOffTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minOnTime'>minOnTime: </label><div class='col-sm-8'><input id='minOnTime' class='form-control' type='text'{{#minOnTime}} value='{{minOnTime}}'{{/minOnTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mustOfferFlag'>mustOfferFlag: </label><div class='col-sm-8'><input id='mustOfferFlag' class='form-control' type='text'{{#mustOfferFlag}} value='{{mustOfferFlag}}'{{/mustOfferFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='nonMarket'>nonMarket: </label><div class='col-sm-8'><input id='nonMarket' class='form-control' type='text'{{#nonMarket}} value='{{nonMarket}}'{{/nonMarket}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pointOfDeliveryFlag'>pointOfDeliveryFlag: </label><div class='col-sm-8'><input id='pointOfDeliveryFlag' class='form-control' type='text'{{#pointOfDeliveryFlag}} value='{{pointOfDeliveryFlag}}'{{/pointOfDeliveryFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priceSetFlagDA'>priceSetFlagDA: </label><div class='col-sm-8'><input id='priceSetFlagDA' class='form-control' type='text'{{#priceSetFlagDA}} value='{{priceSetFlagDA}}'{{/priceSetFlagDA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priceSetFlagRT'>priceSetFlagRT: </label><div class='col-sm-8'><input id='priceSetFlagRT' class='form-control' type='text'{{#priceSetFlagRT}} value='{{priceSetFlagRT}}'{{/priceSetFlagRT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='registrationStatus'>registrationStatus: </label><div class='col-sm-8'><input id='registrationStatus' class='form-control' type='text'{{#registrationStatus}} value='{{registrationStatus}}'{{/registrationStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='resourceAdequacyFlag'>resourceAdequacyFlag: </label><div class='col-sm-8'><input id='resourceAdequacyFlag' class='form-control' type='text'{{#resourceAdequacyFlag}} value='{{resourceAdequacyFlag}}'{{/resourceAdequacyFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SMPMFlag'>SMPMFlag: </label><div class='col-sm-8'><input id='SMPMFlag' class='form-control' type='text'{{#SMPMFlag}} value='{{SMPMFlag}}'{{/SMPMFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AdjacentCASet'>AdjacentCASet: </label><div class='col-sm-8'><input id='AdjacentCASet' class='form-control' type='text'{{#AdjacentCASet}} value='{{AdjacentCASet}}'{{/AdjacentCASet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Pnode'>Pnode: </label><div class='col-sm-8'><input id='Pnode' class='form-control' type='text'{{#Pnode}} value='{{Pnode}}'{{/Pnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DefaultBid'>DefaultBid: </label><div class='col-sm-8'><input id='DefaultBid' class='form-control' type='text'{{#DefaultBid}} value='{{DefaultBid}}'{{/DefaultBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ResourceVerifiableCosts'>ResourceVerifiableCosts: </label><div class='col-sm-8'><input id='ResourceVerifiableCosts' class='form-control' type='text'{{#ResourceVerifiableCosts}} value='{{ResourceVerifiableCosts}}'{{/ResourceVerifiableCosts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktOrganisation'>MktOrganisation: </label><div class='col-sm-8'><input id='MktOrganisation' class='form-control' type='text'{{#MktOrganisation}} value='{{MktOrganisation}}'{{/MktOrganisation}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketParticipant_collapse" aria-expanded="true" aria-controls="MarketParticipant_collapse" style="margin-left: 10px;">MarketParticipant</a></legend>
                    <div id="MarketParticipant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.template.call (this) +
                    `
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketParticipant_collapse" aria-expanded="true" aria-controls="MarketParticipant_collapse" style="margin-left: 10px;">MarketParticipant</a></legend>
                    <div id="MarketParticipant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        return (
            {
                RegisteredResource: RegisteredResource,
                MarketRole: MarketRole,
                MarketParticipant: MarketParticipant
            }
        );
    }
);