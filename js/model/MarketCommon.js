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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketRole_collapse" aria-expanded="true" aria-controls="MarketRole_collapse">MarketRole</a>
<div id="MarketRole_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#roleType}}<div><b>roleType</b>: {{roleType}}</div>{{/roleType}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#RegisteredResource_collapse" aria-expanded="true" aria-controls="RegisteredResource_collapse">RegisteredResource</a>
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
{{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HostControlArea}}&quot;);})'>{{HostControlArea}}</a></div>{{/HostControlArea}}
{{#DefaultBid}}<div><b>DefaultBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DefaultBid}}&quot;);})'>{{DefaultBid}}</a></div>{{/DefaultBid}}
{{#MktOrganisation}}<div><b>MktOrganisation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktOrganisation}}&quot;);})'>{{MktOrganisation}}</a></div>{{/MktOrganisation}}
{{#MktConnectivityNode}}<div><b>MktConnectivityNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktConnectivityNode}}&quot;);})'>{{MktConnectivityNode}}</a></div>{{/MktConnectivityNode}}
{{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Pnode}}&quot;);})'>{{Pnode}}</a></div>{{/Pnode}}
{{#AdjacentCASet}}<div><b>AdjacentCASet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AdjacentCASet}}&quot;);})'>{{AdjacentCASet}}</a></div>{{/AdjacentCASet}}
{{#ResourceVerifiableCosts}}<div><b>ResourceVerifiableCosts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ResourceVerifiableCosts}}&quot;);})'>{{ResourceVerifiableCosts}}</a></div>{{/ResourceVerifiableCosts}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MarketRoleKind_collapse" aria-expanded="true" aria-controls="MarketRoleKind_collapse">MarketRoleKind</a>
<div id="MarketRoleKind_collapse" class="collapse in" style="margin-left: 10px;">
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#MarketParticipant_collapse" aria-expanded="true" aria-controls="MarketParticipant_collapse">MarketParticipant</a>
<div id="MarketParticipant_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Organisation.prototype.template.call (this) +
`
</div>
`
                );
           }        }

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