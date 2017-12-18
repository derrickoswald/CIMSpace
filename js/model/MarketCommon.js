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
                var bucket = cim_data.MarketRole;
                if (null == bucket)
                   cim_data.MarketRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketRole[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketRole";
                base.parse_attribute (/<cim:MarketRole.roleType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "roleType", sub, context);
                base.parse_element (/<cim:MarketRole.status>([\s\S]*?)<\/cim:MarketRole.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRole.type>([\s\S]*?)<\/cim:MarketRole.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:MarketRole.MarketParticipant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketParticipant", sub, context);
                var bucket = context.parsed.MarketRole;
                if (null == bucket)
                   context.parsed.MarketRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MarketRole", "roleType", "roleType", fields);
                base.export_element (obj, "MarketRole", "status", "status",  base.from_string, fields);
                base.export_element (obj, "MarketRole", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "MarketRole", "MarketParticipant", "MarketParticipant", fields);
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
                    {{#MarketParticipant}}<div><b>MarketParticipant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketParticipant}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.MarketRoleKind = []; if (!obj.roleType) obj.MarketRoleKind.push ({ id: '', selected: true}); for (var property in MarketRoleKind) obj.MarketRoleKind.push ({ id: property, selected: obj.roleType && obj.roleType.endsWith ('.' + property)});
                if (obj.MarketParticipant) obj.MarketParticipant_string = obj.MarketParticipant.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MarketRoleKind;
                delete obj.MarketParticipant_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MarketRole_collapse" aria-expanded="true" aria-controls="{{id}}_MarketRole_collapse" style="margin-left: 10px;">MarketRole</a></legend>
                    <div id="{{id}}_MarketRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_roleType'>roleType: </label><div class='col-sm-8'><select id='{{id}}_roleType' class='form-control'>{{#MarketRoleKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/MarketRoleKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketParticipant'>MarketParticipant: </label><div class='col-sm-8'><input id='{{id}}_MarketParticipant' class='form-control' type='text'{{#MarketParticipant}} value='{{MarketParticipant}}_string'{{/MarketParticipant}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MarketRole" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_roleType").value; if ("" != temp) { temp = MarketRoleKind[temp]; if ("undefined" != typeof (temp)) obj.roleType = "http://iec.ch/TC57/2013/CIM-schema-cim16#MarketRoleKind." + temp; }
                temp = document.getElementById (id + "_status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_MarketParticipant").value; if ("" != temp) obj.MarketParticipant = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketParticipant", "0..*", "0..*", "MarketParticipant", "MarketRole"]
                        ]
                    )
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
                var bucket = cim_data.RegisteredResource;
                if (null == bucket)
                   cim_data.RegisteredResource = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegisteredResource[obj.id];
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
                base.parse_attributes (/<cim:RegisteredResource.ResourceDispatchResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceDispatchResults", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.DefaultBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DefaultBid", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.AllocationResultValues\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AllocationResultValues", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceAncillaryServiceQualification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceAncillaryServiceQualification", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.InterTie\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterTie", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.Commitments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Commitments", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.AggregateNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregateNode", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceAwardInstruction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceAwardInstruction", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.LoadFollowingOperatorInput\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadFollowingOperatorInput", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ControlAreaDesignation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlAreaDesignation", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceLoadFollowingInst\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceLoadFollowingInst", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.DotInstruction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DotInstruction", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.OrgResOwnership\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OrgResOwnership", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.Instructions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Instructions", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.DopInstruction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DopInstruction", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.TimeSeries\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceGroups", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktOrganisation", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ExpectedEnergyValues\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExpectedEnergyValues", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceCertification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceCertification", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.FormerReference\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FormerReference", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.SubstitutionResourceList\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubstitutionResourceList", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.RUCAwardInstruction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RUCAwardInstruction", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.RMROperatorInput\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RMROperatorInput", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.MPMTestThreshold\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MPMTestThreshold", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.DispatchInstReply\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DispatchInstReply", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.IntermittentResourceEligibility\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IntermittentResourceEligibility", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.EnergyMarkets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyMarkets", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceCapacity\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceCapacity", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ExPostResourceResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExPostResourceResults", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.LoadFollowingInst\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadFollowingInst", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.AdjacentCASet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AdjacentCASet", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ForbiddenRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ForbiddenRegion", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ContractDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContractDistributionFactor", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.MPMResourceStatus\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MPMResourceStatus", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.RampRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RampRateCurve", sub, context);
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

                base.export_element (obj, "RegisteredResource", "ACAFlag", "ACAFlag",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "ASSPOptimizationFlag", "ASSPOptimizationFlag",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "commercialOpDate", "commercialOpDate",  base.from_datetime, fields);
                base.export_element (obj, "RegisteredResource", "contingencyAvailFlag", "contingencyAvailFlag",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "dispatchFlag", "dispatchFlag",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "ECAFlag", "ECAFlag",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "endEffectiveDate", "endEffectiveDate",  base.from_datetime, fields);
                base.export_element (obj, "RegisteredResource", "flexibleOfferFlag", "flexibleOfferFlag",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "hourlyPredispatch", "hourlyPredispatch",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "isAggregatedRes", "isAggregatedRes",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "lastModified", "lastModified",  base.from_datetime, fields);
                base.export_element (obj, "RegisteredResource", "LMPMFlag", "LMPMFlag",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "marketParticipationFlag", "marketParticipationFlag",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "maxBaseSelfSchedQty ", "maxBaseSelfSchedQty ",  base.from_float, fields);
                base.export_element (obj, "RegisteredResource", "maxOnTime", "maxOnTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredResource", "minDispatchTime", "minDispatchTime",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "minOffTime", "minOffTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredResource", "minOnTime", "minOnTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredResource", "mustOfferFlag", "mustOfferFlag",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "nonMarket", "nonMarket",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "pointOfDeliveryFlag", "pointOfDeliveryFlag",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "priceSetFlagDA", "priceSetFlagDA",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "priceSetFlagRT", "priceSetFlagRT",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "registrationStatus", "registrationStatus",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "resourceAdequacyFlag", "resourceAdequacyFlag",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "SMPMFlag", "SMPMFlag",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "startEffectiveDate", "startEffectiveDate",  base.from_datetime, fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceDispatchResults", "ResourceDispatchResults", fields);
                base.export_attribute (obj, "RegisteredResource", "HostControlArea", "HostControlArea", fields);
                base.export_attribute (obj, "RegisteredResource", "DefaultBid", "DefaultBid", fields);
                base.export_attributes (obj, "RegisteredResource", "AllocationResultValues", "AllocationResultValues", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceAncillaryServiceQualification", "ResourceAncillaryServiceQualification", fields);
                base.export_attributes (obj, "RegisteredResource", "InterTie", "InterTie", fields);
                base.export_attributes (obj, "RegisteredResource", "Commitments", "Commitments", fields);
                base.export_attributes (obj, "RegisteredResource", "AggregateNode", "AggregateNode", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceAwardInstruction", "ResourceAwardInstruction", fields);
                base.export_attributes (obj, "RegisteredResource", "LoadFollowingOperatorInput", "LoadFollowingOperatorInput", fields);
                base.export_attributes (obj, "RegisteredResource", "ControlAreaDesignation", "ControlAreaDesignation", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceLoadFollowingInst", "ResourceLoadFollowingInst", fields);
                base.export_attributes (obj, "RegisteredResource", "DotInstruction", "DotInstruction", fields);
                base.export_attributes (obj, "RegisteredResource", "OrgResOwnership", "OrgResOwnership", fields);
                base.export_attributes (obj, "RegisteredResource", "Instructions", "Instructions", fields);
                base.export_attributes (obj, "RegisteredResource", "DopInstruction", "DopInstruction", fields);
                base.export_attributes (obj, "RegisteredResource", "TimeSeries", "TimeSeries", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceGroups", "ResourceGroups", fields);
                base.export_attribute (obj, "RegisteredResource", "MktOrganisation", "MktOrganisation", fields);
                base.export_attributes (obj, "RegisteredResource", "ExpectedEnergyValues", "ExpectedEnergyValues", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceCertification", "ResourceCertification", fields);
                base.export_attribute (obj, "RegisteredResource", "MktConnectivityNode", "MktConnectivityNode", fields);
                base.export_attribute (obj, "RegisteredResource", "Pnode", "Pnode", fields);
                base.export_attributes (obj, "RegisteredResource", "FormerReference", "FormerReference", fields);
                base.export_attributes (obj, "RegisteredResource", "SubstitutionResourceList", "SubstitutionResourceList", fields);
                base.export_attributes (obj, "RegisteredResource", "RUCAwardInstruction", "RUCAwardInstruction", fields);
                base.export_attributes (obj, "RegisteredResource", "RMROperatorInput", "RMROperatorInput", fields);
                base.export_attributes (obj, "RegisteredResource", "MPMTestThreshold", "MPMTestThreshold", fields);
                base.export_attributes (obj, "RegisteredResource", "DispatchInstReply", "DispatchInstReply", fields);
                base.export_attributes (obj, "RegisteredResource", "IntermittentResourceEligibility", "IntermittentResourceEligibility", fields);
                base.export_attributes (obj, "RegisteredResource", "EnergyMarkets", "EnergyMarkets", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceCapacity", "ResourceCapacity", fields);
                base.export_attributes (obj, "RegisteredResource", "ExPostResourceResults", "ExPostResourceResults", fields);
                base.export_attributes (obj, "RegisteredResource", "LoadFollowingInst", "LoadFollowingInst", fields);
                base.export_attribute (obj, "RegisteredResource", "AdjacentCASet", "AdjacentCASet", fields);
                base.export_attributes (obj, "RegisteredResource", "ForbiddenRegion", "ForbiddenRegion", fields);
                base.export_attributes (obj, "RegisteredResource", "ContractDistributionFactor", "ContractDistributionFactor", fields);
                base.export_attributes (obj, "RegisteredResource", "MPMResourceStatus", "MPMResourceStatus", fields);
                base.export_attributes (obj, "RegisteredResource", "SubControlArea", "SubControlArea", fields);
                base.export_attributes (obj, "RegisteredResource", "RampRateCurve", "RampRateCurve", fields);
                base.export_attribute (obj, "RegisteredResource", "ResourceVerifiableCosts", "ResourceVerifiableCosts", fields);
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
                    {{#ResourceDispatchResults}}<div><b>ResourceDispatchResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResourceDispatchResults}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HostControlArea}}&quot;);})'>{{HostControlArea}}</a></div>{{/HostControlArea}}
                    {{#DefaultBid}}<div><b>DefaultBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DefaultBid}}&quot;);})'>{{DefaultBid}}</a></div>{{/DefaultBid}}
                    {{#AllocationResultValues}}<div><b>AllocationResultValues</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AllocationResultValues}}
                    {{#ResourceAncillaryServiceQualification}}<div><b>ResourceAncillaryServiceQualification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResourceAncillaryServiceQualification}}
                    {{#InterTie}}<div><b>InterTie</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/InterTie}}
                    {{#Commitments}}<div><b>Commitments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Commitments}}
                    {{#AggregateNode}}<div><b>AggregateNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AggregateNode}}
                    {{#ResourceAwardInstruction}}<div><b>ResourceAwardInstruction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResourceAwardInstruction}}
                    {{#LoadFollowingOperatorInput}}<div><b>LoadFollowingOperatorInput</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LoadFollowingOperatorInput}}
                    {{#ControlAreaDesignation}}<div><b>ControlAreaDesignation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ControlAreaDesignation}}
                    {{#ResourceLoadFollowingInst}}<div><b>ResourceLoadFollowingInst</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResourceLoadFollowingInst}}
                    {{#DotInstruction}}<div><b>DotInstruction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DotInstruction}}
                    {{#OrgResOwnership}}<div><b>OrgResOwnership</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/OrgResOwnership}}
                    {{#Instructions}}<div><b>Instructions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Instructions}}
                    {{#DopInstruction}}<div><b>DopInstruction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DopInstruction}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TimeSeries}}
                    {{#ResourceGroups}}<div><b>ResourceGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResourceGroups}}
                    {{#MktOrganisation}}<div><b>MktOrganisation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktOrganisation}}&quot;);})'>{{MktOrganisation}}</a></div>{{/MktOrganisation}}
                    {{#ExpectedEnergyValues}}<div><b>ExpectedEnergyValues</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ExpectedEnergyValues}}
                    {{#ResourceCertification}}<div><b>ResourceCertification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResourceCertification}}
                    {{#MktConnectivityNode}}<div><b>MktConnectivityNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktConnectivityNode}}&quot;);})'>{{MktConnectivityNode}}</a></div>{{/MktConnectivityNode}}
                    {{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Pnode}}&quot;);})'>{{Pnode}}</a></div>{{/Pnode}}
                    {{#FormerReference}}<div><b>FormerReference</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/FormerReference}}
                    {{#SubstitutionResourceList}}<div><b>SubstitutionResourceList</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SubstitutionResourceList}}
                    {{#RUCAwardInstruction}}<div><b>RUCAwardInstruction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RUCAwardInstruction}}
                    {{#RMROperatorInput}}<div><b>RMROperatorInput</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RMROperatorInput}}
                    {{#MPMTestThreshold}}<div><b>MPMTestThreshold</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MPMTestThreshold}}
                    {{#DispatchInstReply}}<div><b>DispatchInstReply</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DispatchInstReply}}
                    {{#IntermittentResourceEligibility}}<div><b>IntermittentResourceEligibility</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/IntermittentResourceEligibility}}
                    {{#EnergyMarkets}}<div><b>EnergyMarkets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EnergyMarkets}}
                    {{#ResourceCapacity}}<div><b>ResourceCapacity</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResourceCapacity}}
                    {{#ExPostResourceResults}}<div><b>ExPostResourceResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ExPostResourceResults}}
                    {{#LoadFollowingInst}}<div><b>LoadFollowingInst</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LoadFollowingInst}}
                    {{#AdjacentCASet}}<div><b>AdjacentCASet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AdjacentCASet}}&quot;);})'>{{AdjacentCASet}}</a></div>{{/AdjacentCASet}}
                    {{#ForbiddenRegion}}<div><b>ForbiddenRegion</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ForbiddenRegion}}
                    {{#ContractDistributionFactor}}<div><b>ContractDistributionFactor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ContractDistributionFactor}}
                    {{#MPMResourceStatus}}<div><b>MPMResourceStatus</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MPMResourceStatus}}
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SubControlArea}}
                    {{#RampRateCurve}}<div><b>RampRateCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RampRateCurve}}
                    {{#ResourceVerifiableCosts}}<div><b>ResourceVerifiableCosts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ResourceVerifiableCosts}}&quot;);})'>{{ResourceVerifiableCosts}}</a></div>{{/ResourceVerifiableCosts}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ResourceDispatchResults) obj.ResourceDispatchResults_string = obj.ResourceDispatchResults.join ();
                if (obj.AllocationResultValues) obj.AllocationResultValues_string = obj.AllocationResultValues.join ();
                if (obj.ResourceAncillaryServiceQualification) obj.ResourceAncillaryServiceQualification_string = obj.ResourceAncillaryServiceQualification.join ();
                if (obj.InterTie) obj.InterTie_string = obj.InterTie.join ();
                if (obj.Commitments) obj.Commitments_string = obj.Commitments.join ();
                if (obj.AggregateNode) obj.AggregateNode_string = obj.AggregateNode.join ();
                if (obj.ResourceAwardInstruction) obj.ResourceAwardInstruction_string = obj.ResourceAwardInstruction.join ();
                if (obj.LoadFollowingOperatorInput) obj.LoadFollowingOperatorInput_string = obj.LoadFollowingOperatorInput.join ();
                if (obj.ControlAreaDesignation) obj.ControlAreaDesignation_string = obj.ControlAreaDesignation.join ();
                if (obj.ResourceLoadFollowingInst) obj.ResourceLoadFollowingInst_string = obj.ResourceLoadFollowingInst.join ();
                if (obj.DotInstruction) obj.DotInstruction_string = obj.DotInstruction.join ();
                if (obj.OrgResOwnership) obj.OrgResOwnership_string = obj.OrgResOwnership.join ();
                if (obj.Instructions) obj.Instructions_string = obj.Instructions.join ();
                if (obj.DopInstruction) obj.DopInstruction_string = obj.DopInstruction.join ();
                if (obj.TimeSeries) obj.TimeSeries_string = obj.TimeSeries.join ();
                if (obj.ResourceGroups) obj.ResourceGroups_string = obj.ResourceGroups.join ();
                if (obj.ExpectedEnergyValues) obj.ExpectedEnergyValues_string = obj.ExpectedEnergyValues.join ();
                if (obj.ResourceCertification) obj.ResourceCertification_string = obj.ResourceCertification.join ();
                if (obj.FormerReference) obj.FormerReference_string = obj.FormerReference.join ();
                if (obj.SubstitutionResourceList) obj.SubstitutionResourceList_string = obj.SubstitutionResourceList.join ();
                if (obj.RUCAwardInstruction) obj.RUCAwardInstruction_string = obj.RUCAwardInstruction.join ();
                if (obj.RMROperatorInput) obj.RMROperatorInput_string = obj.RMROperatorInput.join ();
                if (obj.MPMTestThreshold) obj.MPMTestThreshold_string = obj.MPMTestThreshold.join ();
                if (obj.DispatchInstReply) obj.DispatchInstReply_string = obj.DispatchInstReply.join ();
                if (obj.IntermittentResourceEligibility) obj.IntermittentResourceEligibility_string = obj.IntermittentResourceEligibility.join ();
                if (obj.EnergyMarkets) obj.EnergyMarkets_string = obj.EnergyMarkets.join ();
                if (obj.ResourceCapacity) obj.ResourceCapacity_string = obj.ResourceCapacity.join ();
                if (obj.ExPostResourceResults) obj.ExPostResourceResults_string = obj.ExPostResourceResults.join ();
                if (obj.LoadFollowingInst) obj.LoadFollowingInst_string = obj.LoadFollowingInst.join ();
                if (obj.ForbiddenRegion) obj.ForbiddenRegion_string = obj.ForbiddenRegion.join ();
                if (obj.ContractDistributionFactor) obj.ContractDistributionFactor_string = obj.ContractDistributionFactor.join ();
                if (obj.MPMResourceStatus) obj.MPMResourceStatus_string = obj.MPMResourceStatus.join ();
                if (obj.SubControlArea) obj.SubControlArea_string = obj.SubControlArea.join ();
                if (obj.RampRateCurve) obj.RampRateCurve_string = obj.RampRateCurve.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ResourceDispatchResults_string;
                delete obj.AllocationResultValues_string;
                delete obj.ResourceAncillaryServiceQualification_string;
                delete obj.InterTie_string;
                delete obj.Commitments_string;
                delete obj.AggregateNode_string;
                delete obj.ResourceAwardInstruction_string;
                delete obj.LoadFollowingOperatorInput_string;
                delete obj.ControlAreaDesignation_string;
                delete obj.ResourceLoadFollowingInst_string;
                delete obj.DotInstruction_string;
                delete obj.OrgResOwnership_string;
                delete obj.Instructions_string;
                delete obj.DopInstruction_string;
                delete obj.TimeSeries_string;
                delete obj.ResourceGroups_string;
                delete obj.ExpectedEnergyValues_string;
                delete obj.ResourceCertification_string;
                delete obj.FormerReference_string;
                delete obj.SubstitutionResourceList_string;
                delete obj.RUCAwardInstruction_string;
                delete obj.RMROperatorInput_string;
                delete obj.MPMTestThreshold_string;
                delete obj.DispatchInstReply_string;
                delete obj.IntermittentResourceEligibility_string;
                delete obj.EnergyMarkets_string;
                delete obj.ResourceCapacity_string;
                delete obj.ExPostResourceResults_string;
                delete obj.LoadFollowingInst_string;
                delete obj.ForbiddenRegion_string;
                delete obj.ContractDistributionFactor_string;
                delete obj.MPMResourceStatus_string;
                delete obj.SubControlArea_string;
                delete obj.RampRateCurve_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_RegisteredResource_collapse" aria-expanded="true" aria-controls="{{id}}_RegisteredResource_collapse" style="margin-left: 10px;">RegisteredResource</a></legend>
                    <div id="{{id}}_RegisteredResource_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ACAFlag'>ACAFlag: </label><div class='col-sm-8'><input id='{{id}}_ACAFlag' class='form-control' type='text'{{#ACAFlag}} value='{{ACAFlag}}'{{/ACAFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ASSPOptimizationFlag'>ASSPOptimizationFlag: </label><div class='col-sm-8'><input id='{{id}}_ASSPOptimizationFlag' class='form-control' type='text'{{#ASSPOptimizationFlag}} value='{{ASSPOptimizationFlag}}'{{/ASSPOptimizationFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_commercialOpDate'>commercialOpDate: </label><div class='col-sm-8'><input id='{{id}}_commercialOpDate' class='form-control' type='text'{{#commercialOpDate}} value='{{commercialOpDate}}'{{/commercialOpDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_contingencyAvailFlag'>contingencyAvailFlag: </label><div class='col-sm-8'><input id='{{id}}_contingencyAvailFlag' class='form-control' type='text'{{#contingencyAvailFlag}} value='{{contingencyAvailFlag}}'{{/contingencyAvailFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dispatchFlag'>dispatchFlag: </label><div class='col-sm-8'><input id='{{id}}_dispatchFlag' class='form-control' type='text'{{#dispatchFlag}} value='{{dispatchFlag}}'{{/dispatchFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ECAFlag'>ECAFlag: </label><div class='col-sm-8'><input id='{{id}}_ECAFlag' class='form-control' type='text'{{#ECAFlag}} value='{{ECAFlag}}'{{/ECAFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='{{id}}_endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flexibleOfferFlag'>flexibleOfferFlag: </label><div class='col-sm-8'><input id='{{id}}_flexibleOfferFlag' class='form-control' type='text'{{#flexibleOfferFlag}} value='{{flexibleOfferFlag}}'{{/flexibleOfferFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hourlyPredispatch'>hourlyPredispatch: </label><div class='col-sm-8'><input id='{{id}}_hourlyPredispatch' class='form-control' type='text'{{#hourlyPredispatch}} value='{{hourlyPredispatch}}'{{/hourlyPredispatch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_isAggregatedRes'>isAggregatedRes: </label><div class='col-sm-8'><input id='{{id}}_isAggregatedRes' class='form-control' type='text'{{#isAggregatedRes}} value='{{isAggregatedRes}}'{{/isAggregatedRes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastModified'>lastModified: </label><div class='col-sm-8'><input id='{{id}}_lastModified' class='form-control' type='text'{{#lastModified}} value='{{lastModified}}'{{/lastModified}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LMPMFlag'>LMPMFlag: </label><div class='col-sm-8'><input id='{{id}}_LMPMFlag' class='form-control' type='text'{{#LMPMFlag}} value='{{LMPMFlag}}'{{/LMPMFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketParticipationFlag'>marketParticipationFlag: </label><div class='col-sm-8'><input id='{{id}}_marketParticipationFlag' class='form-control' type='text'{{#marketParticipationFlag}} value='{{marketParticipationFlag}}'{{/marketParticipationFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxBaseSelfSchedQty '>maxBaseSelfSchedQty : </label><div class='col-sm-8'><input id='{{id}}_maxBaseSelfSchedQty ' class='form-control' type='text'{{#maxBaseSelfSchedQty }} value='{{maxBaseSelfSchedQty }}'{{/maxBaseSelfSchedQty }}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxOnTime'>maxOnTime: </label><div class='col-sm-8'><input id='{{id}}_maxOnTime' class='form-control' type='text'{{#maxOnTime}} value='{{maxOnTime}}'{{/maxOnTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minDispatchTime'>minDispatchTime: </label><div class='col-sm-8'><input id='{{id}}_minDispatchTime' class='form-control' type='text'{{#minDispatchTime}} value='{{minDispatchTime}}'{{/minDispatchTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minOffTime'>minOffTime: </label><div class='col-sm-8'><input id='{{id}}_minOffTime' class='form-control' type='text'{{#minOffTime}} value='{{minOffTime}}'{{/minOffTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minOnTime'>minOnTime: </label><div class='col-sm-8'><input id='{{id}}_minOnTime' class='form-control' type='text'{{#minOnTime}} value='{{minOnTime}}'{{/minOnTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mustOfferFlag'>mustOfferFlag: </label><div class='col-sm-8'><input id='{{id}}_mustOfferFlag' class='form-control' type='text'{{#mustOfferFlag}} value='{{mustOfferFlag}}'{{/mustOfferFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nonMarket'>nonMarket: </label><div class='col-sm-8'><input id='{{id}}_nonMarket' class='form-control' type='text'{{#nonMarket}} value='{{nonMarket}}'{{/nonMarket}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pointOfDeliveryFlag'>pointOfDeliveryFlag: </label><div class='col-sm-8'><input id='{{id}}_pointOfDeliveryFlag' class='form-control' type='text'{{#pointOfDeliveryFlag}} value='{{pointOfDeliveryFlag}}'{{/pointOfDeliveryFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priceSetFlagDA'>priceSetFlagDA: </label><div class='col-sm-8'><input id='{{id}}_priceSetFlagDA' class='form-control' type='text'{{#priceSetFlagDA}} value='{{priceSetFlagDA}}'{{/priceSetFlagDA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priceSetFlagRT'>priceSetFlagRT: </label><div class='col-sm-8'><input id='{{id}}_priceSetFlagRT' class='form-control' type='text'{{#priceSetFlagRT}} value='{{priceSetFlagRT}}'{{/priceSetFlagRT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_registrationStatus'>registrationStatus: </label><div class='col-sm-8'><input id='{{id}}_registrationStatus' class='form-control' type='text'{{#registrationStatus}} value='{{registrationStatus}}'{{/registrationStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resourceAdequacyFlag'>resourceAdequacyFlag: </label><div class='col-sm-8'><input id='{{id}}_resourceAdequacyFlag' class='form-control' type='text'{{#resourceAdequacyFlag}} value='{{resourceAdequacyFlag}}'{{/resourceAdequacyFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SMPMFlag'>SMPMFlag: </label><div class='col-sm-8'><input id='{{id}}_SMPMFlag' class='form-control' type='text'{{#SMPMFlag}} value='{{SMPMFlag}}'{{/SMPMFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='{{id}}_startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='{{id}}_HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DefaultBid'>DefaultBid: </label><div class='col-sm-8'><input id='{{id}}_DefaultBid' class='form-control' type='text'{{#DefaultBid}} value='{{DefaultBid}}'{{/DefaultBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_InterTie'>InterTie: </label><div class='col-sm-8'><input id='{{id}}_InterTie' class='form-control' type='text'{{#InterTie}} value='{{InterTie}}_string'{{/InterTie}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregateNode'>AggregateNode: </label><div class='col-sm-8'><input id='{{id}}_AggregateNode' class='form-control' type='text'{{#AggregateNode}} value='{{AggregateNode}}_string'{{/AggregateNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ControlAreaDesignation'>ControlAreaDesignation: </label><div class='col-sm-8'><input id='{{id}}_ControlAreaDesignation' class='form-control' type='text'{{#ControlAreaDesignation}} value='{{ControlAreaDesignation}}_string'{{/ControlAreaDesignation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries}}_string'{{/TimeSeries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceGroups'>ResourceGroups: </label><div class='col-sm-8'><input id='{{id}}_ResourceGroups' class='form-control' type='text'{{#ResourceGroups}} value='{{ResourceGroups}}_string'{{/ResourceGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktOrganisation'>MktOrganisation: </label><div class='col-sm-8'><input id='{{id}}_MktOrganisation' class='form-control' type='text'{{#MktOrganisation}} value='{{MktOrganisation}}'{{/MktOrganisation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceCertification'>ResourceCertification: </label><div class='col-sm-8'><input id='{{id}}_ResourceCertification' class='form-control' type='text'{{#ResourceCertification}} value='{{ResourceCertification}}_string'{{/ResourceCertification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='{{id}}_MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Pnode'>Pnode: </label><div class='col-sm-8'><input id='{{id}}_Pnode' class='form-control' type='text'{{#Pnode}} value='{{Pnode}}'{{/Pnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MPMTestThreshold'>MPMTestThreshold: </label><div class='col-sm-8'><input id='{{id}}_MPMTestThreshold' class='form-control' type='text'{{#MPMTestThreshold}} value='{{MPMTestThreshold}}_string'{{/MPMTestThreshold}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergyMarkets'>EnergyMarkets: </label><div class='col-sm-8'><input id='{{id}}_EnergyMarkets' class='form-control' type='text'{{#EnergyMarkets}} value='{{EnergyMarkets}}_string'{{/EnergyMarkets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceCapacity'>ResourceCapacity: </label><div class='col-sm-8'><input id='{{id}}_ResourceCapacity' class='form-control' type='text'{{#ResourceCapacity}} value='{{ResourceCapacity}}_string'{{/ResourceCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AdjacentCASet'>AdjacentCASet: </label><div class='col-sm-8'><input id='{{id}}_AdjacentCASet' class='form-control' type='text'{{#AdjacentCASet}} value='{{AdjacentCASet}}'{{/AdjacentCASet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ForbiddenRegion'>ForbiddenRegion: </label><div class='col-sm-8'><input id='{{id}}_ForbiddenRegion' class='form-control' type='text'{{#ForbiddenRegion}} value='{{ForbiddenRegion}}_string'{{/ForbiddenRegion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='{{id}}_SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea}}_string'{{/SubControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RampRateCurve'>RampRateCurve: </label><div class='col-sm-8'><input id='{{id}}_RampRateCurve' class='form-control' type='text'{{#RampRateCurve}} value='{{RampRateCurve}}_string'{{/RampRateCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceVerifiableCosts'>ResourceVerifiableCosts: </label><div class='col-sm-8'><input id='{{id}}_ResourceVerifiableCosts' class='form-control' type='text'{{#ResourceVerifiableCosts}} value='{{ResourceVerifiableCosts}}'{{/ResourceVerifiableCosts}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RegisteredResource" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ACAFlag").value; if ("" != temp) obj.ACAFlag = temp;
                temp = document.getElementById (id + "_ASSPOptimizationFlag").value; if ("" != temp) obj.ASSPOptimizationFlag = temp;
                temp = document.getElementById (id + "_commercialOpDate").value; if ("" != temp) obj.commercialOpDate = temp;
                temp = document.getElementById (id + "_contingencyAvailFlag").value; if ("" != temp) obj.contingencyAvailFlag = temp;
                temp = document.getElementById (id + "_dispatchFlag").value; if ("" != temp) obj.dispatchFlag = temp;
                temp = document.getElementById (id + "_ECAFlag").value; if ("" != temp) obj.ECAFlag = temp;
                temp = document.getElementById (id + "_endEffectiveDate").value; if ("" != temp) obj.endEffectiveDate = temp;
                temp = document.getElementById (id + "_flexibleOfferFlag").value; if ("" != temp) obj.flexibleOfferFlag = temp;
                temp = document.getElementById (id + "_hourlyPredispatch").value; if ("" != temp) obj.hourlyPredispatch = temp;
                temp = document.getElementById (id + "_isAggregatedRes").value; if ("" != temp) obj.isAggregatedRes = temp;
                temp = document.getElementById (id + "_lastModified").value; if ("" != temp) obj.lastModified = temp;
                temp = document.getElementById (id + "_LMPMFlag").value; if ("" != temp) obj.LMPMFlag = temp;
                temp = document.getElementById (id + "_marketParticipationFlag").value; if ("" != temp) obj.marketParticipationFlag = temp;
                temp = document.getElementById (id + "_maxBaseSelfSchedQty ").value; if ("" != temp) obj.maxBaseSelfSchedQty  = temp;
                temp = document.getElementById (id + "_maxOnTime").value; if ("" != temp) obj.maxOnTime = temp;
                temp = document.getElementById (id + "_minDispatchTime").value; if ("" != temp) obj.minDispatchTime = temp;
                temp = document.getElementById (id + "_minOffTime").value; if ("" != temp) obj.minOffTime = temp;
                temp = document.getElementById (id + "_minOnTime").value; if ("" != temp) obj.minOnTime = temp;
                temp = document.getElementById (id + "_mustOfferFlag").value; if ("" != temp) obj.mustOfferFlag = temp;
                temp = document.getElementById (id + "_nonMarket").value; if ("" != temp) obj.nonMarket = temp;
                temp = document.getElementById (id + "_pointOfDeliveryFlag").value; if ("" != temp) obj.pointOfDeliveryFlag = temp;
                temp = document.getElementById (id + "_priceSetFlagDA").value; if ("" != temp) obj.priceSetFlagDA = temp;
                temp = document.getElementById (id + "_priceSetFlagRT").value; if ("" != temp) obj.priceSetFlagRT = temp;
                temp = document.getElementById (id + "_registrationStatus").value; if ("" != temp) obj.registrationStatus = temp;
                temp = document.getElementById (id + "_resourceAdequacyFlag").value; if ("" != temp) obj.resourceAdequacyFlag = temp;
                temp = document.getElementById (id + "_SMPMFlag").value; if ("" != temp) obj.SMPMFlag = temp;
                temp = document.getElementById (id + "_startEffectiveDate").value; if ("" != temp) obj.startEffectiveDate = temp;
                temp = document.getElementById (id + "_HostControlArea").value; if ("" != temp) obj.HostControlArea = temp;
                temp = document.getElementById (id + "_DefaultBid").value; if ("" != temp) obj.DefaultBid = temp;
                temp = document.getElementById (id + "_InterTie").value; if ("" != temp) obj.InterTie = temp.split (",");
                temp = document.getElementById (id + "_AggregateNode").value; if ("" != temp) obj.AggregateNode = temp.split (",");
                temp = document.getElementById (id + "_ControlAreaDesignation").value; if ("" != temp) obj.ControlAreaDesignation = temp.split (",");
                temp = document.getElementById (id + "_TimeSeries").value; if ("" != temp) obj.TimeSeries = temp.split (",");
                temp = document.getElementById (id + "_ResourceGroups").value; if ("" != temp) obj.ResourceGroups = temp.split (",");
                temp = document.getElementById (id + "_MktOrganisation").value; if ("" != temp) obj.MktOrganisation = temp;
                temp = document.getElementById (id + "_ResourceCertification").value; if ("" != temp) obj.ResourceCertification = temp.split (",");
                temp = document.getElementById (id + "_MktConnectivityNode").value; if ("" != temp) obj.MktConnectivityNode = temp;
                temp = document.getElementById (id + "_Pnode").value; if ("" != temp) obj.Pnode = temp;
                temp = document.getElementById (id + "_MPMTestThreshold").value; if ("" != temp) obj.MPMTestThreshold = temp.split (",");
                temp = document.getElementById (id + "_EnergyMarkets").value; if ("" != temp) obj.EnergyMarkets = temp.split (",");
                temp = document.getElementById (id + "_ResourceCapacity").value; if ("" != temp) obj.ResourceCapacity = temp.split (",");
                temp = document.getElementById (id + "_AdjacentCASet").value; if ("" != temp) obj.AdjacentCASet = temp;
                temp = document.getElementById (id + "_ForbiddenRegion").value; if ("" != temp) obj.ForbiddenRegion = temp.split (",");
                temp = document.getElementById (id + "_SubControlArea").value; if ("" != temp) obj.SubControlArea = temp.split (",");
                temp = document.getElementById (id + "_RampRateCurve").value; if ("" != temp) obj.RampRateCurve = temp.split (",");
                temp = document.getElementById (id + "_ResourceVerifiableCosts").value; if ("" != temp) obj.ResourceVerifiableCosts = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ResourceDispatchResults", "0..*", "0..1", "ResourceDispatchResults", "RegisteredResource"],
                            ["HostControlArea", "0..1", "0..*", "HostControlArea", "RegisteredResource"],
                            ["DefaultBid", "0..1", "1", "DefaultBid", "RegisteredResource"],
                            ["AllocationResultValues", "0..*", "0..1", "AllocationResultValues", "RegisteredResource"],
                            ["ResourceAncillaryServiceQualification", "0..*", "1", "ResourceAncillaryServiceQualification", "RegisteredResource"],
                            ["InterTie", "0..*", "0..*", "SchedulingPoint", "RegisteredResource"],
                            ["Commitments", "0..*", "1", "Commitments", "RegisteredResource"],
                            ["AggregateNode", "0..*", "0..*", "AggregateNode", "RegisteredResource"],
                            ["ResourceAwardInstruction", "0..*", "0..1", "ResourceAwardInstruction", "RegisteredResource"],
                            ["LoadFollowingOperatorInput", "0..*", "0..1", "LoadFollowingOperatorInput", "RegisteredResource"],
                            ["ControlAreaDesignation", "0..*", "0..*", "ControlAreaDesignation", "RegisteredResource"],
                            ["ResourceLoadFollowingInst", "0..*", "0..1", "ResourceLoadFollowingInst", "RegisteredResource"],
                            ["DotInstruction", "0..*", "0..1", "DotInstruction", "RegisteredResource"],
                            ["OrgResOwnership", "0..*", "1", "OrgResOwnership", "RegisteredResource"],
                            ["Instructions", "0..*", "1", "Instructions", "RegisteredResource"],
                            ["DopInstruction", "0..*", "0..1", "DopInstruction", "RegisteredResouce"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "RegisteredResource"],
                            ["ResourceGroups", "0..*", "1..*", "ResourceGroup", "RegisteredResources"],
                            ["MktOrganisation", "0..1", "0..*", "MktOrganisation", "RegisteredResource"],
                            ["ExpectedEnergyValues", "0..*", "0..1", "ExpectedEnergyValues", "RegisteredResource"],
                            ["ResourceCertification", "0..*", "0..*", "ResourceCertification", "RegisteredResource"],
                            ["MktConnectivityNode", "0..1", "0..*", "MktConnectivityNode", "RegisteredResource"],
                            ["Pnode", "0..1", "0..*", "Pnode", "RegisteredResources"],
                            ["FormerReference", "0..*", "1", "FormerReference", "RegisteredResource"],
                            ["SubstitutionResourceList", "0..*", "0..1", "SubstitutionResourceList", "RegisteredResource"],
                            ["RUCAwardInstruction", "0..*", "0..1", "RUCAwardInstruction", "RegisteredResource"],
                            ["RMROperatorInput", "0..*", "0..1", "RMROperatorInput", "RegisteredResource"],
                            ["MPMTestThreshold", "0..*", "0..*", "MPMTestThreshold", "RegisteredResource"],
                            ["DispatchInstReply", "0..*", "1", "DispatchInstReply", "RegisteredResource"],
                            ["IntermittentResourceEligibility", "0..*", "1", "IntermittentResourceEligibility", "RegisteredResource"],
                            ["EnergyMarkets", "0..*", "0..*", "EnergyMarket", "RegisteredResources"],
                            ["ResourceCapacity", "0..*", "0..*", "ResourceCapacity", "RegisteredResource"],
                            ["ExPostResourceResults", "0..*", "0..1", "ExPostResourceResults", "RegisteredResource"],
                            ["LoadFollowingInst", "0..*", "1", "LoadFollowingInst", "RegisteredResource"],
                            ["AdjacentCASet", "0..1", "0..*", "AdjacentCASet", "RegisteredResource"],
                            ["ForbiddenRegion", "0..*", "0..*", "ForbiddenRegion", "RegisteredResource"],
                            ["ContractDistributionFactor", "0..*", "0..1", "ContractDistributionFactor", "RegisteredResource"],
                            ["MPMResourceStatus", "0..*", "0..1", "MPMResourceStatus", "RegisteredResource"],
                            ["SubControlArea", "0..*", "0..*", "SubControlArea", "RegisteredResource"],
                            ["RampRateCurve", "0..*", "0..*", "RampRateCurve", "RegisteredResource"],
                            ["ResourceVerifiableCosts", "0..1", "1", "ResourceVerifiableCosts", "RegisteredResource"]
                        ]
                    )
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
                var bucket = cim_data.MarketParticipant;
                if (null == bucket)
                   cim_data.MarketParticipant = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketParticipant[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "MarketParticipant";
                base.parse_attributes (/<cim:MarketParticipant.MarketRole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRole", sub, context);
                base.parse_attributes (/<cim:MarketParticipant.TimeSeries\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                base.parse_attributes (/<cim:MarketParticipant.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);
                base.parse_attributes (/<cim:MarketParticipant.MarketDocument\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketDocument", sub, context);
                var bucket = context.parsed.MarketParticipant;
                if (null == bucket)
                   context.parsed.MarketParticipant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MarketParticipant", "MarketRole", "MarketRole", fields);
                base.export_attributes (obj, "MarketParticipant", "TimeSeries", "TimeSeries", fields);
                base.export_attributes (obj, "MarketParticipant", "Bid", "Bid", fields);
                base.export_attributes (obj, "MarketParticipant", "MarketDocument", "MarketDocument", fields);
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
                    {{#MarketRole}}<div><b>MarketRole</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketRole}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TimeSeries}}
                    {{#Bid}}<div><b>Bid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Bid}}
                    {{#MarketDocument}}<div><b>MarketDocument</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketDocument}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MarketRole) obj.MarketRole_string = obj.MarketRole.join ();
                if (obj.TimeSeries) obj.TimeSeries_string = obj.TimeSeries.join ();
                if (obj.Bid) obj.Bid_string = obj.Bid.join ();
                if (obj.MarketDocument) obj.MarketDocument_string = obj.MarketDocument.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MarketRole_string;
                delete obj.TimeSeries_string;
                delete obj.Bid_string;
                delete obj.MarketDocument_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MarketParticipant_collapse" aria-expanded="true" aria-controls="{{id}}_MarketParticipant_collapse" style="margin-left: 10px;">MarketParticipant</a></legend>
                    <div id="{{id}}_MarketParticipant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketRole'>MarketRole: </label><div class='col-sm-8'><input id='{{id}}_MarketRole' class='form-control' type='text'{{#MarketRole}} value='{{MarketRole}}_string'{{/MarketRole}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries}}_string'{{/TimeSeries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketDocument'>MarketDocument: </label><div class='col-sm-8'><input id='{{id}}_MarketDocument' class='form-control' type='text'{{#MarketDocument}} value='{{MarketDocument}}_string'{{/MarketDocument}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MarketParticipant" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MarketRole").value; if ("" != temp) obj.MarketRole = temp.split (",");
                temp = document.getElementById (id + "_TimeSeries").value; if ("" != temp) obj.TimeSeries = temp.split (",");
                temp = document.getElementById (id + "_MarketDocument").value; if ("" != temp) obj.MarketDocument = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketRole", "0..*", "0..*", "MarketRole", "MarketParticipant"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "MarketParticipant"],
                            ["Bid", "0..*", "0..1", "Bid", "MarketParticipant"],
                            ["MarketDocument", "0..*", "0..*", "MarketDocument", "MarketParticipant"]
                        ]
                    )
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