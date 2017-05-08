define
(
    ["model/base", "model/Common", "model/Contingency", "model/Core", "model/MarketCommon", "model/MarketOpCommon", "model/Production"],
    /**
     * Market static reference data.
     */
    function (base, Common, Contingency, Core, MarketCommon, MarketOpCommon, Production)
    {

        /**
         * This class model the various capacities of a resource.
         * A resource may have numbers of capacities related to operating, ancillary services, energy trade and so forth. The types are but not limited to:
         */
        function parse_ResourceCapacity (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceCapacity";
            /**
             * capacity type
            
            The types are but not limited to:
            
            Regulation Up
            Regulation Dn
            Spinning Reserve
            Non-Spinning Reserve
            FOO capacity
             * MOO capacity
             */
            obj["capacityType"] = base.parse_element (/<cim:ResourceCapacity.capacityType>([\s\S]*?)<\/cim:ResourceCapacity.capacityType>/g, sub, context, true);
            /**
             * maximum capacity
             */
            obj["maximumCapacity"] = base.parse_element (/<cim:ResourceCapacity.maximumCapacity>([\s\S]*?)<\/cim:ResourceCapacity.maximumCapacity>/g, sub, context, true);
            /**
             * minimum capacity
             */
            obj["minimumCapacity"] = base.parse_element (/<cim:ResourceCapacity.minimumCapacity>([\s\S]*?)<\/cim:ResourceCapacity.minimumCapacity>/g, sub, context, true);
            /**
             * default capacity
             */
            obj["defaultCapacity"] = base.parse_element (/<cim:ResourceCapacity.defaultCapacity>([\s\S]*?)<\/cim:ResourceCapacity.defaultCapacity>/g, sub, context, true);
            bucket = context.parsed.ResourceCapacity;
            if (null == bucket)
                context.parsed.ResourceCapacity = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Ancillary Services that a resource is qualified to provide.
         */
        function parse_ResourceAncillaryServiceQualification (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceAncillaryServiceQualification";
            /**
             * Certified capacity for associated resource and market type and ancillary service type product
             */
            obj["certifiedCapacity"] = base.to_float (base.parse_element (/<cim:ResourceAncillaryServiceQualification.certifiedCapacity>([\s\S]*?)<\/cim:ResourceAncillaryServiceQualification.certifiedCapacity>/g, sub, context, true));
            /**
             * Ancillary Service Qualification end date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:ResourceAncillaryServiceQualification.endEffectiveDate>([\s\S]*?)<\/cim:ResourceAncillaryServiceQualification.endEffectiveDate>/g, sub, context, true));
            /**
             * market type
             */
            obj["market"] = base.parse_element (/<cim:ResourceAncillaryServiceQualification.market>([\s\S]*?)<\/cim:ResourceAncillaryServiceQualification.market>/g, sub, context, true);
            /**
             * Status of the qualification ('Y' = Active, 'N' = Inactive)
             */
            obj["qualificationFlag"] = base.parse_element (/<cim:ResourceAncillaryServiceQualification.qualificationFlag>([\s\S]*?)<\/cim:ResourceAncillaryServiceQualification.qualificationFlag>/g, sub, context, true);
            /**
             * Ancillary Service Qualification effective from date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:ResourceAncillaryServiceQualification.startEffectiveDate>([\s\S]*?)<\/cim:ResourceAncillaryServiceQualification.startEffectiveDate>/g, sub, context, true));
            /**
             * Type of service based on ResourceAncillaryServiceType enumeration
             */
            obj["type"] = base.parse_element (/<cim:ResourceAncillaryServiceQualification.type>([\s\S]*?)<\/cim:ResourceAncillaryServiceQualification.type>/g, sub, context, true);
            /**
             * RegisteredResources are qualified for resource ancillary service types (which include market product types as well as other types such as BlackStart) by the association to the class ResourceAncillaryServiceQualification.
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:ResourceAncillaryServiceQualification.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ResourceAncillaryServiceQualification;
            if (null == bucket)
                context.parsed.ResourceAncillaryServiceQualification = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Contingency
         */
        function parse_MktContingency (context, sub)
        {
            var obj;
            var bucket;

            obj = Contingency.parse_Contingency (context, sub);
            obj.cls = "MktContingency";
            /**
             * load change flag
             * Flag that indicates whether load rollover and load pickup should be processed for this contingency
             */
            obj["loadRolloverFlag"] = base.to_boolean (base.parse_element (/<cim:MktContingency.loadRolloverFlag>([\s\S]*?)<\/cim:MktContingency.loadRolloverFlag>/g, sub, context, true));
            /**
             * ltc enable flag
             * Flag that indicates if LTCs regulate voltage during the solution of the contingency
             */
            obj["ltcControlFlag"] = base.to_boolean (base.parse_element (/<cim:MktContingency.ltcControlFlag>([\s\S]*?)<\/cim:MktContingency.ltcControlFlag>/g, sub, context, true));
            /**
             * Participation Factor flag
             * An indication which set of generator participation factors should be used to re-allocate generation in this contingency
             */
            obj["participationFactorSet"] = base.parse_element (/<cim:MktContingency.participationFactorSet>([\s\S]*?)<\/cim:MktContingency.participationFactorSet>/g, sub, context, true);
            /**
             * sceening flag for outage
             * Flag that indicated whether screening is bypassed for the contingency
             */
            obj["screeningFlag"] = base.to_boolean (base.parse_element (/<cim:MktContingency.screeningFlag>([\s\S]*?)<\/cim:MktContingency.screeningFlag>/g, sub, context, true));
            /**
             * 
             */
            obj["TransferInterfaceSolutionB"] = base.parse_attribute (/<cim:MktContingency.TransferInterfaceSolutionB\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["TransferInterfaceSolutionA"] = base.parse_attribute (/<cim:MktContingency.TransferInterfaceSolutionA\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MktContingency;
            if (null == bucket)
                context.parsed.MktContingency = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model to support processing of reliability must run units.
         */
        function parse_RMRStartUpCostCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "RMRStartUpCostCurve";
            /**
             * 
             */
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:RMRStartUpCostCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RMRStartUpCostCurve;
            if (null == bucket)
                context.parsed.RMRStartUpCostCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class allows SC to input different distribution factors for pricing node
         */
        function parse_PnodeDistributionFactor (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PnodeDistributionFactor";
            /**
             * Used to calculate "participation" of Pnode in an AggregatePnode.
             * For example, for regulation region this factor is 1 and total sum of all factors for a specific regulation region does not have to be 1. For pricing zone the total sum of all factors has to be 1.
             */
            obj["factor"] = base.to_float (base.parse_element (/<cim:PnodeDistributionFactor.factor>([\s\S]*?)<\/cim:PnodeDistributionFactor.factor>/g, sub, context, true));
            /**
             * Indication that this distribution factor is to apply during off peak.
             */
            obj["offPeak"] = base.parse_element (/<cim:PnodeDistributionFactor.offPeak>([\s\S]*?)<\/cim:PnodeDistributionFactor.offPeak>/g, sub, context, true);
            /**
             * Indication that this factor is to apply during Peak periods.
             */
            obj["onPeak"] = base.parse_element (/<cim:PnodeDistributionFactor.onPeak>([\s\S]*?)<\/cim:PnodeDistributionFactor.onPeak>/g, sub, context, true);
            /**
             * Point of delivery loss factor
             */
            obj["podLossFactor"] = base.to_float (base.parse_element (/<cim:PnodeDistributionFactor.podLossFactor>([\s\S]*?)<\/cim:PnodeDistributionFactor.podLossFactor>/g, sub, context, true));
            /**
             * 
             */
            obj["IndividualPnode"] = base.parse_attribute (/<cim:PnodeDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["BidDistributionFactor"] = base.parse_attribute (/<cim:PnodeDistributionFactor.BidDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PnodeDistributionFactor;
            if (null == bucket)
                context.parsed.PnodeDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Regional transmission operator.
         */
        function parse_RTO (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketOpCommon.parse_MktOrganisation (context, sub);
            obj.cls = "RTO";
            bucket = context.parsed.RTO;
            if (null == bucket)
                context.parsed.RTO = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model to define a zone within a Metered Sub System
         */
        function parse_MSSZone (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AggregateNode (context, sub);
            obj.cls = "MSSZone";
            /**
             * Provides an indication if losses are to be ignored for this metered subsystem zone.
             */
            obj["ignoreLosses"] = base.parse_element (/<cim:MSSZone.ignoreLosses>([\s\S]*?)<\/cim:MSSZone.ignoreLosses>/g, sub, context, true);
            /**
             * This is the default loss factor for the Metered Sub-System (MSS) zone.
             * The actual losses are calculated during the RT market.
             */
            obj["lossFactor"] = base.to_float (base.parse_element (/<cim:MSSZone.lossFactor>([\s\S]*?)<\/cim:MSSZone.lossFactor>/g, sub, context, true));
            /**
             * Metered Sub-System (MSS) Load Following may select Net vs.
             * Gross settlement.  Net Settlement requires the net Demand settled at the Metered Sub-Sustem (MSS) Load Aggregation Point (LAP) and Net Supply needs to settle at the equivalent to the weighted average price of the MSS generation.  Gross load will be settled at the System LAP and the Gross supply will be settled at the LMP.  MSS Aggregation that elects gross settlement shall have to identify if its resources are Load Following or not.
             */
            obj["rucGrossSettlement"] = base.parse_element (/<cim:MSSZone.rucGrossSettlement>([\s\S]*?)<\/cim:MSSZone.rucGrossSettlement>/g, sub, context, true);
            /**
             * 
             */
            obj["MeteredSubSystem"] = base.parse_attribute (/<cim:MSSZone.MeteredSubSystem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MSSZone;
            if (null == bucket)
                context.parsed.MSSZone = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Describing users of a Scheduling Coordinator
         */
        function parse_SchedulingCoordinatorUser (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SchedulingCoordinatorUser";
            /**
             * Login ID Effective Date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:SchedulingCoordinatorUser.startEffectiveDate>([\s\S]*?)<\/cim:SchedulingCoordinatorUser.startEffectiveDate>/g, sub, context, true));
            /**
             * Login ID Expiration Date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:SchedulingCoordinatorUser.endEffectiveDate>([\s\S]*?)<\/cim:SchedulingCoordinatorUser.endEffectiveDate>/g, sub, context, true));
            /**
             * Login ID
             */
            obj["loginID"] = base.parse_element (/<cim:SchedulingCoordinatorUser.loginID>([\s\S]*?)<\/cim:SchedulingCoordinatorUser.loginID>/g, sub, context, true);
            /**
             * Assigned roles (these are roles with either Read or Read/Write privileges on different Market Systems)
             */
            obj["loginRole"] = base.parse_element (/<cim:SchedulingCoordinatorUser.loginRole>([\s\S]*?)<\/cim:SchedulingCoordinatorUser.loginRole>/g, sub, context, true);
            bucket = context.parsed.SchedulingCoordinatorUser;
            if (null == bucket)
                context.parsed.SchedulingCoordinatorUser = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Day Ahead,  Network Native Load, Economic Dispatch, values used for calculation of Network Native Load (NNL) Determinator process.
         */
        function parse_FlowgateValue (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FlowgateValue";
            /**
             * Limit for Economic Dispatch priority 6 energy flow on the specified flowgate for the specified time period.
             */
            obj["economicDispatchLimit"] = base.parse_element (/<cim:FlowgateValue.economicDispatchLimit>([\s\S]*?)<\/cim:FlowgateValue.economicDispatchLimit>/g, sub, context, true);
            /**
             * Date/Time when record becomes effective
             * Used to determine when a record becomes effective
             */
            obj["effectiveDate"] = base.to_datetime (base.parse_element (/<cim:FlowgateValue.effectiveDate>([\s\S]*?)<\/cim:FlowgateValue.effectiveDate>/g, sub, context, true));
            /**
             * Limit for firm flow on the specified flowgate for the specified time period.
             * The amount of energy flow over a specifed flowgate due to generation in the market which can be classified as Firm Network priority.
             */
            obj["firmNetworkLimit"] = base.parse_element (/<cim:FlowgateValue.firmNetworkLimit>([\s\S]*?)<\/cim:FlowgateValue.firmNetworkLimit>/g, sub, context, true);
            /**
             * Specifies the direction of energy flow in the flowgate
             */
            obj["flowDirectionFlag"] = base.parse_element (/<cim:FlowgateValue.flowDirectionFlag>([\s\S]*?)<\/cim:FlowgateValue.flowDirectionFlag>/g, sub, context, true);
            /**
             * The amount of energy flow over a specifed flowgate due to generation in the market.
             */
            obj["mktFlow"] = base.parse_element (/<cim:FlowgateValue.mktFlow>([\s\S]*?)<\/cim:FlowgateValue.mktFlow>/g, sub, context, true);
            /**
             * Net Energy flow in flowgate for the associated FlowgatePartner
             */
            obj["netFirmNetworkLimit"] = base.parse_element (/<cim:FlowgateValue.netFirmNetworkLimit>([\s\S]*?)<\/cim:FlowgateValue.netFirmNetworkLimit>/g, sub, context, true);
            /**
             * 
             */
            obj["Flowgate"] = base.parse_attribute (/<cim:FlowgateValue.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["FlowgatePartner"] = base.parse_attribute (/<cim:FlowgateValue.FlowgatePartner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.FlowgateValue;
            if (null == bucket)
                context.parsed.FlowgateValue = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class is defined to describe the verifiable costs associated with a generation resource.
         */
        function parse_ResourceVerifiableCosts (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceVerifiableCosts";
            /**
             * 
             */
            obj["ResourceOperationMaintenanceCost"] = base.parse_attribute (/<cim:ResourceVerifiableCosts.ResourceOperationMaintenanceCost\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["MktHeatRateCurve"] = base.parse_attribute (/<cim:ResourceVerifiableCosts.MktHeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:ResourceVerifiableCosts.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ResourceVerifiableCosts;
            if (null == bucket)
                context.parsed.ResourceVerifiableCosts = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The fuel consumption of a Generating Resource to complete a Start-Up.(x=cooling time) Form Startup Fuel Curve. xAxisData -&gt; cooling time, y1AxisData -&gt; MBtu
         */
        function parse_StartUpFuelCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "StartUpFuelCurve";
            /**
             * 
             */
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:StartUpFuelCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.StartUpFuelCurve;
            if (null == bucket)
                context.parsed.StartUpFuelCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Proficiency level of a craft, which is required to operate or maintain a particular type of asset and/or perform certain types of work.
         */
        function parse_MarketSkill (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "MarketSkill";
            /**
             * Interval between the certification and its expiry.
             */
            obj["certificationPeriod"] = base.parse_element (/<cim:MarketSkill.certificationPeriod>([\s\S]*?)<\/cim:MarketSkill.certificationPeriod>/g, sub, context, true);
            /**
             * Date and time the skill became effective.
             */
            obj["effectiveDateTime"] = base.to_datetime (base.parse_element (/<cim:MarketSkill.effectiveDateTime>([\s\S]*?)<\/cim:MarketSkill.effectiveDateTime>/g, sub, context, true));
            /**
             * Level of skill for a Craft.
             */
            obj["level"] = base.parse_element (/<cim:MarketSkill.level>([\s\S]*?)<\/cim:MarketSkill.level>/g, sub, context, true);
            /**
             * 
             */
            obj["MarketPerson"] = base.parse_attribute (/<cim:MarketSkill.MarketPerson\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MarketSkill;
            if (null == bucket)
                context.parsed.MarketSkill = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A metered subsystem
         */
        function parse_MeteredSubSystem (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MeteredSubSystem";
            /**
             * 
             */
            obj["MSSAggregation"] = base.parse_attribute (/<cim:MeteredSubSystem.MSSAggregation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MeteredSubSystem;
            if (null == bucket)
                context.parsed.MeteredSubSystem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of ThermalGeneratingUnit from Production Package in IEC61970.
         */
        function parse_MktThermalGeneratingUnit (context, sub)
        {
            var obj;
            var bucket;

            obj = Production.parse_ThermalGeneratingUnit (context, sub);
            obj.cls = "MktThermalGeneratingUnit";
            bucket = context.parsed.MktThermalGeneratingUnit;
            if (null == bucket)
                context.parsed.MktThermalGeneratingUnit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Indication of region for fuel inventory purposes
         */
        function parse_FuelRegion (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "FuelRegion";
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:FuelRegion.endEffectiveDate>([\s\S]*?)<\/cim:FuelRegion.endEffectiveDate>/g, sub, context, true));
            /**
             * The type of fuel region
             */
            obj["fuelRegionType"] = base.parse_element (/<cim:FuelRegion.fuelRegionType>([\s\S]*?)<\/cim:FuelRegion.fuelRegionType>/g, sub, context, true);
            /**
             * Time of last update
             */
            obj["lastModified"] = base.to_datetime (base.parse_element (/<cim:FuelRegion.lastModified>([\s\S]*?)<\/cim:FuelRegion.lastModified>/g, sub, context, true));
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:FuelRegion.startEffectiveDate>([\s\S]*?)<\/cim:FuelRegion.startEffectiveDate>/g, sub, context, true));
            /**
             * 
             */
            obj["RTO"] = base.parse_attribute (/<cim:FuelRegion.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["GasPrice"] = base.parse_attribute (/<cim:FuelRegion.GasPrice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["OilPrice"] = base.parse_attribute (/<cim:FuelRegion.OilPrice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.FuelRegion;
            if (null == bucket)
                context.parsed.FuelRegion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model to support processing of reliability must run units.
         */
        function parse_RMRHeatRateCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "RMRHeatRateCurve";
            /**
             * 
             */
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:RMRHeatRateCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RMRHeatRateCurve;
            if (null == bucket)
                context.parsed.RMRHeatRateCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Metered Sub-System aggregation of MSS Zones.
         */
        function parse_MSSAggregation (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MSSAggregation";
            /**
             * Charge for Emission Costs, Start Up Costs, or Minimum Load Costs.
             */
            obj["costRecovery"] = base.parse_element (/<cim:MSSAggregation.costRecovery>([\s\S]*?)<\/cim:MSSAggregation.costRecovery>/g, sub, context, true);
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:MSSAggregation.endEffectiveDate>([\s\S]*?)<\/cim:MSSAggregation.endEffectiveDate>/g, sub, context, true));
            /**
             * MSS Load Following may select Net vs.
             * Gross settlement.  Net Settlement requires the net Demand settled at the MSS LAP and Net Supply needs to settle at the equivalent to the weighted average price of the MSS generation.  Gross load will be settled at the System LAP and the Gross supply will be settled at the LMP.  MSS Aggregation that elects gross settlement shall have to identify if its resources are Load Following or not.
             */
            obj["grossSettlement"] = base.parse_element (/<cim:MSSAggregation.grossSettlement>([\s\S]*?)<\/cim:MSSAggregation.grossSettlement>/g, sub, context, true);
            /**
             * Provides an indication if losses are to be ignored for this zone.
             * Also refered to as Exclude Marginal Losses.
             */
            obj["ignoreLosses"] = base.parse_element (/<cim:MSSAggregation.ignoreLosses>([\s\S]*?)<\/cim:MSSAggregation.ignoreLosses>/g, sub, context, true);
            /**
             * Provides an indication if marginal losses are to be ignored for this zone.
             */
            obj["ignoreMarginalLosses"] = base.parse_element (/<cim:MSSAggregation.ignoreMarginalLosses>([\s\S]*?)<\/cim:MSSAggregation.ignoreMarginalLosses>/g, sub, context, true);
            /**
             * Indication that this particular MSSA participates in the Load Following function.
             */
            obj["loadFollowing"] = base.parse_element (/<cim:MSSAggregation.loadFollowing>([\s\S]*?)<\/cim:MSSAggregation.loadFollowing>/g, sub, context, true);
            /**
             * Indicates that RUC will be procured by the ISO or self provided.
             */
            obj["rucProcurement"] = base.parse_element (/<cim:MSSAggregation.rucProcurement>([\s\S]*?)<\/cim:MSSAggregation.rucProcurement>/g, sub, context, true);
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:MSSAggregation.startEffectiveDate>([\s\S]*?)<\/cim:MSSAggregation.startEffectiveDate>/g, sub, context, true));
            /**
             * 
             */
            obj["RTO"] = base.parse_attribute (/<cim:MSSAggregation.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MSSAggregation;
            if (null == bucket)
                context.parsed.MSSAggregation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market Power Mitigation (MPM) test thresholds for resource as well as designated congestion areas (DCAs)
         */
        function parse_MPMTestThreshold (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MPMTestThreshold";
            /**
             * Price Threshold in $/MW
             */
            obj["price"] = base.parse_element (/<cim:MPMTestThreshold.price>([\s\S]*?)<\/cim:MPMTestThreshold.price>/g, sub, context, true);
            /**
             * Price Threshold in %
             */
            obj["percent"] = base.parse_element (/<cim:MPMTestThreshold.percent>([\s\S]*?)<\/cim:MPMTestThreshold.percent>/g, sub, context, true);
            /**
             * Market Type (DAM, RTM)
             */
            obj["marketType"] = base.parse_element (/<cim:MPMTestThreshold.marketType>([\s\S]*?)<\/cim:MPMTestThreshold.marketType>/g, sub, context, true);
            /**
             * 
             */
            obj["MPMTestCategory"] = base.parse_attribute (/<cim:MPMTestThreshold.MPMTestCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MPMTestThreshold;
            if (null == bucket)
                context.parsed.MPMTestThreshold = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Used to indicate former references to the same piece of equipment.
         * The ID, name, and effectivity dates are utilized.
         */
        function parse_FormerReference (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "FormerReference";
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:FormerReference.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.FormerReference;
            if (null == bucket)
                context.parsed.FormerReference = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * General purpose information for name and other information to contact people.
         */
        function parse_MarketPerson (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MarketPerson";
            /**
             * Category of this person relative to utility operations, classified according to the utility's corporate standards and practices.
             * Examples include employee, contractor, agent, not affiliated, etc.
             */
            obj["category"] = base.parse_element (/<cim:MarketPerson.category>([\s\S]*?)<\/cim:MarketPerson.category>/g, sub, context, true);
            /**
             * Alternate Electronic address.
             */
            obj["electronicAddressAlternate"] = base.parse_element (/<cim:MarketPerson.electronicAddressAlternate>([\s\S]*?)<\/cim:MarketPerson.electronicAddressAlternate>/g, sub, context, true);
            /**
             * Primary Electronic address.
             */
            obj["electronicAddressPrimary"] = base.parse_element (/<cim:MarketPerson.electronicAddressPrimary>([\s\S]*?)<\/cim:MarketPerson.electronicAddressPrimary>/g, sub, context, true);
            /**
             * Person's first name.
             */
            obj["firstName"] = base.parse_element (/<cim:MarketPerson.firstName>([\s\S]*?)<\/cim:MarketPerson.firstName>/g, sub, context, true);
            /**
             * Unique identifier for person relative to its governing authority, for example a federal tax identifier (such as a Social Security number in the United States).
             */
            obj["governmentID"] = base.parse_element (/<cim:MarketPerson.governmentID>([\s\S]*?)<\/cim:MarketPerson.governmentID>/g, sub, context, true);
            /**
             * Landline phone number.
             */
            obj["landlinePhone"] = base.parse_element (/<cim:MarketPerson.landlinePhone>([\s\S]*?)<\/cim:MarketPerson.landlinePhone>/g, sub, context, true);
            /**
             * Person's last (family, sir) name.
             */
            obj["lastName"] = base.parse_element (/<cim:MarketPerson.lastName>([\s\S]*?)<\/cim:MarketPerson.lastName>/g, sub, context, true);
            /**
             * Middle name(s) or initial(s).
             */
            obj["mName"] = base.parse_element (/<cim:MarketPerson.mName>([\s\S]*?)<\/cim:MarketPerson.mName>/g, sub, context, true);
            /**
             * Mobile phone number.
             */
            obj["mobilePhone"] = base.parse_element (/<cim:MarketPerson.mobilePhone>([\s\S]*?)<\/cim:MarketPerson.mobilePhone>/g, sub, context, true);
            /**
             * A prefix or title for the person's name, such as Miss, Mister, Doctor, etc.
             */
            obj["prefix"] = base.parse_element (/<cim:MarketPerson.prefix>([\s\S]*?)<\/cim:MarketPerson.prefix>/g, sub, context, true);
            /**
             * Special service needs for the person (contact) are described; examples include life support, etc.
             */
            obj["specialNeed"] = base.parse_element (/<cim:MarketPerson.specialNeed>([\s\S]*?)<\/cim:MarketPerson.specialNeed>/g, sub, context, true);
            obj["status"] = base.parse_element (/<cim:MarketPerson.status>([\s\S]*?)<\/cim:MarketPerson.status>/g, sub, context, true);
            /**
             * A suffix for the person's name, such as II, III, etc.
             */
            obj["suffix"] = base.parse_element (/<cim:MarketPerson.suffix>([\s\S]*?)<\/cim:MarketPerson.suffix>/g, sub, context, true);
            /**
             * The user name for the person; required to log in.
             */
            obj["userID"] = base.parse_element (/<cim:MarketPerson.userID>([\s\S]*?)<\/cim:MarketPerson.userID>/g, sub, context, true);
            bucket = context.parsed.MarketPerson;
            if (null == bucket)
                context.parsed.MarketPerson = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Allows chaining of TransmissionContractRights.
         * Many individual contract rights can be included in the definition of a TransmissionRightChain. A TransmissionRightChain is also defined as a TransmissionContractRight itself.
         */
        function parse_TransmissionRightChain (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransmissionRightChain";
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:TransmissionRightChain.endEffectiveDate>([\s\S]*?)<\/cim:TransmissionRightChain.endEffectiveDate>/g, sub, context, true));
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:TransmissionRightChain.startEffectiveDate>([\s\S]*?)<\/cim:TransmissionRightChain.startEffectiveDate>/g, sub, context, true));
            /**
             * 
             */
            obj["RTO"] = base.parse_attribute (/<cim:TransmissionRightChain.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["Chain_ContractRight"] = base.parse_attribute (/<cim:TransmissionRightChain.Chain_ContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransmissionRightChain;
            if (null == bucket)
                context.parsed.TransmissionRightChain = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Market participants could be represented by Scheduling Coordinators (SCs) that are registered with the RTO/ISO.
         * One participant could register multiple SCs with the RTO/ISO. Many market participants can do business with the RTO/ISO using a single SC. One SC could schedule multiple generators. A load scheduling point could be used by multiple SCs. Each SC could schedule load at multiple scheduling points. An inter-tie scheduling point can be used by multiple SCs. Each SC can schedule interchange at multiple inter-tie scheduling points.
         */
        function parse_SchedulingCoordinator (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketOpCommon.parse_MktOrganisation (context, sub);
            obj.cls = "SchedulingCoordinator";
            /**
             * This is the short name or Scheduling Coordinator ID field.
             */
            obj["scid"] = base.parse_element (/<cim:SchedulingCoordinator.scid>([\s\S]*?)<\/cim:SchedulingCoordinator.scid>/g, sub, context, true);
            /**
             * 
             */
            obj["LoadRatio"] = base.parse_attribute (/<cim:SchedulingCoordinator.LoadRatio\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["MktOrgansation"] = base.parse_attribute (/<cim:SchedulingCoordinator.MktOrgansation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SchedulingCoordinator;
            if (null == bucket)
                context.parsed.SchedulingCoordinator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A specialized class of type AggregatedNode type.
         * Defines RUC Zones. A forecast region represents a collection of Nodes for which the Market operator has developed sufficient historical demand and relevant weather data to perform a demand forecast for such area. The Market Operator may further adjust this forecast to ensure that the Reliability Unit Commitment produces adequate local capacity procurement.
         */
        function parse_RUCZone (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AggregateNode (context, sub);
            obj.cls = "RUCZone";
            bucket = context.parsed.RUCZone;
            if (null == bucket)
                context.parsed.RUCZone = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of a generator  that is registered to participate in the market
         */
        function parse_RegisteredGenerator (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketCommon.parse_RegisteredResource (context, sub);
            obj.cls = "RegisteredGenerator";
            /**
             * Capacity Factor
             */
            obj["capacityFactor"] = base.parse_element (/<cim:RegisteredGenerator.capacityFactor>([\s\S]*?)<\/cim:RegisteredGenerator.capacityFactor>/g, sub, context, true);
            /**
             * Cold start time.
             */
            obj["coldStartTime"] = base.to_float (base.parse_element (/<cim:RegisteredGenerator.coldStartTime>([\s\S]*?)<\/cim:RegisteredGenerator.coldStartTime>/g, sub, context, true));
            /**
             * Name of the Combined Cycle Plant (valid for Combined Cyle modes or configurations)
             */
            obj["combinedCyclePlantName"] = base.parse_element (/<cim:RegisteredGenerator.combinedCyclePlantName>([\s\S]*?)<\/cim:RegisteredGenerator.combinedCyclePlantName>/g, sub, context, true);
            obj["commericialOperationDate"] = base.to_datetime (base.parse_element (/<cim:RegisteredGenerator.commericialOperationDate>([\s\S]*?)<\/cim:RegisteredGenerator.commericialOperationDate>/g, sub, context, true));
            /**
             * Constrained Output Generator (COG) Indicator (Yes/No), per Generating Resource
             */
            obj["constrainedOutputFlag"] = base.parse_element (/<cim:RegisteredGenerator.constrainedOutputFlag>([\s\S]*?)<\/cim:RegisteredGenerator.constrainedOutputFlag>/g, sub, context, true);
            obj["costBasis"] = base.parse_element (/<cim:RegisteredGenerator.costBasis>([\s\S]*?)<\/cim:RegisteredGenerator.costBasis>/g, sub, context, true);
            /**
             * Some long-start up time units may need to receive start up instruction before DA market results are available.
             * Long-Start resources may be either physical resources within the control with start-up times greater than 18 hours or the long-start contractual inter-tie commitment that shall be completed by 6 am one-day ahead.  Therefore, there is a need for a process to determine the commitment of such resources before the DA market.
             */
            obj["extremeLongStart"] = base.parse_element (/<cim:RegisteredGenerator.extremeLongStart>([\s\S]*?)<\/cim:RegisteredGenerator.extremeLongStart>/g, sub, context, true);
            /**
             * Values: Natural Gas Based Resource, Non Natural Gas Based Resource
            "NG" - Natural-Gas-Based Resource - a Resource that is powered by Natural Gas
             * "NNG" - Non-Natural-Gas-Based Resource - a Resouce that is powered by some other fuel than Natural Gas
             */
            obj["fuelSource"] = base.parse_element (/<cim:RegisteredGenerator.fuelSource>([\s\S]*?)<\/cim:RegisteredGenerator.fuelSource>/g, sub, context, true);
            /**
             * High limit for secondary (AGC) control
             */
            obj["highControlLimit"] = base.parse_element (/<cim:RegisteredGenerator.highControlLimit>([\s\S]*?)<\/cim:RegisteredGenerator.highControlLimit>/g, sub, context, true);
            /**
             * Hot-to-intermediate time (Seasonal)
             */
            obj["hotIntTime"] = base.to_float (base.parse_element (/<cim:RegisteredGenerator.hotIntTime>([\s\S]*?)<\/cim:RegisteredGenerator.hotIntTime>/g, sub, context, true));
            /**
             * Hot start time.
             */
            obj["hotStartTime"] = base.to_float (base.parse_element (/<cim:RegisteredGenerator.hotStartTime>([\s\S]*?)<\/cim:RegisteredGenerator.hotStartTime>/g, sub, context, true));
            /**
             * Intermediate-to-cold time (Seasonal)
             */
            obj["intColdTime"] = base.to_float (base.parse_element (/<cim:RegisteredGenerator.intColdTime>([\s\S]*?)<\/cim:RegisteredGenerator.intColdTime>/g, sub, context, true));
            /**
             * Provides an indication that this resource is intending to participate in the intermittent resource program.
             */
            obj["intendedPIRP"] = base.parse_element (/<cim:RegisteredGenerator.intendedPIRP>([\s\S]*?)<\/cim:RegisteredGenerator.intendedPIRP>/g, sub, context, true);
            /**
             * Intermediate start time.
             */
            obj["intStartTime"] = base.to_float (base.parse_element (/<cim:RegisteredGenerator.intStartTime>([\s\S]*?)<\/cim:RegisteredGenerator.intStartTime>/g, sub, context, true));
            /**
             * Certifies resources for use in MSS Load Following Down
             */
            obj["loadFollowingDownMSS"] = base.parse_element (/<cim:RegisteredGenerator.loadFollowingDownMSS>([\s\S]*?)<\/cim:RegisteredGenerator.loadFollowingDownMSS>/g, sub, context, true);
            /**
             * Certifies resources for use in MSS Load Following Up
             */
            obj["loadFollowingUpMSS"] = base.parse_element (/<cim:RegisteredGenerator.loadFollowingUpMSS>([\s\S]*?)<\/cim:RegisteredGenerator.loadFollowingUpMSS>/g, sub, context, true);
            /**
             * Low limit for secondary (AGC) control
             */
            obj["lowControlLImit"] = base.parse_element (/<cim:RegisteredGenerator.lowControlLImit>([\s\S]*?)<\/cim:RegisteredGenerator.lowControlLImit>/g, sub, context, true);
            /**
             * Regulation down response rate in MW per minute
             */
            obj["lowerControlRate"] = base.parse_element (/<cim:RegisteredGenerator.lowerControlRate>([\s\S]*?)<\/cim:RegisteredGenerator.lowerControlRate>/g, sub, context, true);
            obj["lowerRampRate"] = base.parse_element (/<cim:RegisteredGenerator.lowerRampRate>([\s\S]*?)<\/cim:RegisteredGenerator.lowerRampRate>/g, sub, context, true);
            /**
             * Maximum Dependable Capacity (MNDC).
             */
            obj["maxDependableCap"] = base.parse_element (/<cim:RegisteredGenerator.maxDependableCap>([\s\S]*?)<\/cim:RegisteredGenerator.maxDependableCap>/g, sub, context, true);
            /**
             * Maximum allowable spinning reserve.
             * Spinning reserve will never be considered greater than this value regardless of the current operating point.
             */
            obj["maximumAllowableSpinningReserve"] = base.parse_element (/<cim:RegisteredGenerator.maximumAllowableSpinningReserve>([\s\S]*?)<\/cim:RegisteredGenerator.maximumAllowableSpinningReserve>/g, sub, context, true);
            /**
             * This is the maximum operating MW limit the dispatcher can enter for this unit
             */
            obj["maximumOperatingMW"] = base.parse_element (/<cim:RegisteredGenerator.maximumOperatingMW>([\s\S]*?)<\/cim:RegisteredGenerator.maximumOperatingMW>/g, sub, context, true);
            obj["maxLayOffSelfSchedQty"] = base.to_float (base.parse_element (/<cim:RegisteredGenerator.maxLayOffSelfSchedQty>([\s\S]*?)<\/cim:RegisteredGenerator.maxLayOffSelfSchedQty>/g, sub, context, true));
            /**
             * The registered maximum Minimum Load Cost of a Generating Resource registered with a Cost Basis of "Bid Cost".
             */
            obj["maxMinLoadCost"] = base.parse_element (/<cim:RegisteredGenerator.maxMinLoadCost>([\s\S]*?)<\/cim:RegisteredGenerator.maxMinLoadCost>/g, sub, context, true);
            /**
             * max pumping level of a hydro pump unit
             */
            obj["maxPumpingLevel"] = base.parse_element (/<cim:RegisteredGenerator.maxPumpingLevel>([\s\S]*?)<\/cim:RegisteredGenerator.maxPumpingLevel>/g, sub, context, true);
            /**
             * Maximum time this device can be shut down.
             */
            obj["maxShutdownTime"] = base.to_datetime (base.parse_element (/<cim:RegisteredGenerator.maxShutdownTime>([\s\S]*?)<\/cim:RegisteredGenerator.maxShutdownTime>/g, sub, context, true));
            /**
             * maximum start ups per day
             */
            obj["maxStartUpsPerDay"] = base.parse_element (/<cim:RegisteredGenerator.maxStartUpsPerDay>([\s\S]*?)<\/cim:RegisteredGenerator.maxStartUpsPerDay>/g, sub, context, true);
            /**
             * Maximum weekly Energy (Seasonal)
             */
            obj["maxWeeklyEnergy"] = base.to_float (base.parse_element (/<cim:RegisteredGenerator.maxWeeklyEnergy>([\s\S]*?)<\/cim:RegisteredGenerator.maxWeeklyEnergy>/g, sub, context, true));
            /**
             * Maximum weekly starts (seasonal parameter)
             */
            obj["maxWeeklyStarts"] = base.parse_element (/<cim:RegisteredGenerator.maxWeeklyStarts>([\s\S]*?)<\/cim:RegisteredGenerator.maxWeeklyStarts>/g, sub, context, true);
            /**
             * The cost for the fuel required to get a Generating Resource to operate at the minimum load level
             */
            obj["minimumLoadFuelCost"] = base.parse_element (/<cim:RegisteredGenerator.minimumLoadFuelCost>([\s\S]*?)<\/cim:RegisteredGenerator.minimumLoadFuelCost>/g, sub, context, true);
            /**
             * This is the minimum operating MW limit the dispatcher can enter for this unit.
             */
            obj["minimumOperatingMW"] = base.parse_element (/<cim:RegisteredGenerator.minimumOperatingMW>([\s\S]*?)<\/cim:RegisteredGenerator.minimumOperatingMW>/g, sub, context, true);
            /**
             * minimum load cost.
             * Value is (currency/hr)
             */
            obj["minLoadCost"] = base.parse_element (/<cim:RegisteredGenerator.minLoadCost>([\s\S]*?)<\/cim:RegisteredGenerator.minLoadCost>/g, sub, context, true);
            /**
             * Flag to indicate that this unit is a resource adequacy resource and must offer.
             */
            obj["mustOfferRA"] = base.parse_element (/<cim:RegisteredGenerator.mustOfferRA>([\s\S]*?)<\/cim:RegisteredGenerator.mustOfferRA>/g, sub, context, true);
            /**
             * MW value stated on the nameplate of the Generator -- the value it potentially could provide.
             */
            obj["nameplateCapacity"] = base.parse_element (/<cim:RegisteredGenerator.nameplateCapacity>([\s\S]*?)<\/cim:RegisteredGenerator.nameplateCapacity>/g, sub, context, true);
            /**
             * The portion of the Operating Cost of a Generating Resource that is not related to fuel cost.
             */
            obj["operatingMaintenanceCost"] = base.parse_element (/<cim:RegisteredGenerator.operatingMaintenanceCost>([\s\S]*?)<\/cim:RegisteredGenerator.operatingMaintenanceCost>/g, sub, context, true);
            /**
             * Combined Cycle operating mode.
             */
            obj["operatingMode"] = base.parse_element (/<cim:RegisteredGenerator.operatingMode>([\s\S]*?)<\/cim:RegisteredGenerator.operatingMode>/g, sub, context, true);
            obj["proxyFlag"] = base.parse_element (/<cim:RegisteredGenerator.proxyFlag>([\s\S]*?)<\/cim:RegisteredGenerator.proxyFlag>/g, sub, context, true);
            obj["pumpingCost"] = base.parse_element (/<cim:RegisteredGenerator.pumpingCost>([\s\S]*?)<\/cim:RegisteredGenerator.pumpingCost>/g, sub, context, true);
            /**
             * Pumping factor for pump storage units, conversion factor between generating and pumping.
             */
            obj["pumpingFactor"] = base.to_float (base.parse_element (/<cim:RegisteredGenerator.pumpingFactor>([\s\S]*?)<\/cim:RegisteredGenerator.pumpingFactor>/g, sub, context, true));
            /**
             * The minimum down time for the pump in a pump storage unit.
             */
            obj["pumpMinDownTime"] = base.to_float (base.parse_element (/<cim:RegisteredGenerator.pumpMinDownTime>([\s\S]*?)<\/cim:RegisteredGenerator.pumpMinDownTime>/g, sub, context, true));
            /**
             * The minimum up time aspect for the pump in a pump storage unit
             */
            obj["pumpMinUpTime"] = base.to_float (base.parse_element (/<cim:RegisteredGenerator.pumpMinUpTime>([\s\S]*?)<\/cim:RegisteredGenerator.pumpMinUpTime>/g, sub, context, true));
            /**
             * The cost to shutdown a pump during the pump aspect of a pump storage unit.
             */
            obj["pumpShutdownCost"] = base.to_float (base.parse_element (/<cim:RegisteredGenerator.pumpShutdownCost>([\s\S]*?)<\/cim:RegisteredGenerator.pumpShutdownCost>/g, sub, context, true));
            /**
             * The shutdown time (minutes) of the pump aspect of a pump storage unit.
             */
            obj["pumpShutdownTime"] = base.parse_element (/<cim:RegisteredGenerator.pumpShutdownTime>([\s\S]*?)<\/cim:RegisteredGenerator.pumpShutdownTime>/g, sub, context, true);
            obj["qualifyingFacilityOwner"] = base.parse_element (/<cim:RegisteredGenerator.qualifyingFacilityOwner>([\s\S]*?)<\/cim:RegisteredGenerator.qualifyingFacilityOwner>/g, sub, context, true);
            /**
             * Quick start flag (Yes/No)
             */
            obj["quickStartFlag"] = base.parse_element (/<cim:RegisteredGenerator.quickStartFlag>([\s\S]*?)<\/cim:RegisteredGenerator.quickStartFlag>/g, sub, context, true);
            /**
             * Regulation up response rate in MW per minute
             */
            obj["raiseControlRate"] = base.parse_element (/<cim:RegisteredGenerator.raiseControlRate>([\s\S]*?)<\/cim:RegisteredGenerator.raiseControlRate>/g, sub, context, true);
            obj["raiseRampRate"] = base.parse_element (/<cim:RegisteredGenerator.raiseRampRate>([\s\S]*?)<\/cim:RegisteredGenerator.raiseRampRate>/g, sub, context, true);
            /**
             * Ramp curve type:
            0 - Fixed ramp rate independent of rate function unit MW output
            1 - Static ramp rates as a function of unit MW output only
             * 2 - Dynamic ramp rates as a function of unit MW output and ramping time
             */
            obj["rampCurveType"] = base.parse_element (/<cim:RegisteredGenerator.rampCurveType>([\s\S]*?)<\/cim:RegisteredGenerator.rampCurveType>/g, sub, context, true);
            /**
             * Ramping mode
            0: ignore ramping limits
            1: 20-minute ramping rule
             * 2: 60-minute ramping rule
             */
            obj["rampMode"] = base.parse_element (/<cim:RegisteredGenerator.rampMode>([\s\S]*?)<\/cim:RegisteredGenerator.rampMode>/g, sub, context, true);
            /**
             * 0 = Unit is not on regulation
            1 = Unit is on AGC and regulating
             * 2 = Unit is suppose to be on regulation but it is not under regulation now
             */
            obj["regulationFlag"] = base.parse_element (/<cim:RegisteredGenerator.regulationFlag>([\s\S]*?)<\/cim:RegisteredGenerator.regulationFlag>/g, sub, context, true);
            /**
             * For the outage scheduling services
             */
            obj["regulationRampRate"] = base.parse_element (/<cim:RegisteredGenerator.regulationRampRate>([\s\S]*?)<\/cim:RegisteredGenerator.regulationRampRate>/g, sub, context, true);
            /**
             * CCGT90	Combined Cycle greater than 90 MW
            CCLE90	Combined Cycle less than or equal to 90 MW
            CLLIG	Coal and Lignite
            DSL	Diesel
            GASSTM	Gas-Steam
            GSNONR	Gas Steam Non-Reheat Boiler
            GSREH	Gas Steam Reheat Boiler
            GSSUP	Gas Steam Supercritical Boiler
            HYDRO	Hydro
            NUC	Nuclear
            RENEW	Renewable
            SCGT90	Simple Cycle greater than 90 MW
            SCLE90	Simple Cycle less than or equal to 90 MW
            WIND	Wind
             * PS         Pumped Storage
             */
            obj["resourceSubType"] = base.parse_element (/<cim:RegisteredGenerator.resourceSubType>([\s\S]*?)<\/cim:RegisteredGenerator.resourceSubType>/g, sub, context, true);
            /**
             * River System the Resource is tied to.
             */
            obj["riverSystem"] = base.parse_element (/<cim:RegisteredGenerator.riverSystem>([\s\S]*?)<\/cim:RegisteredGenerator.riverSystem>/g, sub, context, true);
            /**
             * Reliability must not run (RMNR) flag: indicated whether the RMR unit is set as an RMNR in the current market
             */
            obj["RMNRFlag"] = base.parse_element (/<cim:RegisteredGenerator.RMNRFlag>([\s\S]*?)<\/cim:RegisteredGenerator.RMNRFlag>/g, sub, context, true);
            /**
             * Reliability must run (RMR) flag: indicates whether the unit is RMR; Indicates whether the unit is RMR:
            N' - not an RMR unit
            '1' - RMR Condition 1 unit
             * '2' - RMR Condition 2 unit
             */
            obj["RMRFlag"] = base.parse_element (/<cim:RegisteredGenerator.RMRFlag>([\s\S]*?)<\/cim:RegisteredGenerator.RMRFlag>/g, sub, context, true);
            /**
             * Indicates the RMR Manual pre-determination status [Y/N]
             */
            obj["RMRManualIndicator"] = base.parse_element (/<cim:RegisteredGenerator.RMRManualIndicator>([\s\S]*?)<\/cim:RegisteredGenerator.RMRManualIndicator>/g, sub, context, true);
            /**
             * Reliability must take (RMT) flag (Yes/No): indicates whether the unit is RMT
             */
            obj["RMTFlag"] = base.parse_element (/<cim:RegisteredGenerator.RMTFlag>([\s\S]*?)<\/cim:RegisteredGenerator.RMTFlag>/g, sub, context, true);
            obj["spinReserveRamp"] = base.parse_element (/<cim:RegisteredGenerator.spinReserveRamp>([\s\S]*?)<\/cim:RegisteredGenerator.spinReserveRamp>/g, sub, context, true);
            /**
             * Is the Resource Synchronous Condenser capable Resource?
             */
            obj["syncCondCapable"] = base.parse_element (/<cim:RegisteredGenerator.syncCondCapable>([\s\S]*?)<\/cim:RegisteredGenerator.syncCondCapable>/g, sub, context, true);
            /**
             * Generating unit type: Combined Cycle, Gas Turbine, Hydro Turbine, Other, Photovoltaic, Hydro Pump-Turbine, Reciprocating Engine, Steam Turbine, Synchronous Condenser, Wind Turbine
             */
            obj["unitType"] = base.parse_element (/<cim:RegisteredGenerator.unitType>([\s\S]*?)<\/cim:RegisteredGenerator.unitType>/g, sub, context, true);
            /**
             * Use limit flag: indicates if the use-limited resource is fully scheduled (or has some slack for real-time dispatch) (Y/N)
             */
            obj["useLimitFlag"] = base.parse_element (/<cim:RegisteredGenerator.useLimitFlag>([\s\S]*?)<\/cim:RegisteredGenerator.useLimitFlag>/g, sub, context, true);
            /**
             * 
             */
            obj["RMRHeatRateCurve"] = base.parse_attribute (/<cim:RegisteredGenerator.RMRHeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["StartUpTimeCurve"] = base.parse_attribute (/<cim:RegisteredGenerator.StartUpTimeCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["FuelCostCurve"] = base.parse_attribute (/<cim:RegisteredGenerator.FuelCostCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RMRStartUpCostCurve"] = base.parse_attribute (/<cim:RegisteredGenerator.RMRStartUpCostCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RMRStartUpTimeCurve"] = base.parse_attribute (/<cim:RegisteredGenerator.RMRStartUpTimeCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["StartUpFuelCurve"] = base.parse_attribute (/<cim:RegisteredGenerator.StartUpFuelCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["EnergyPriceIndex"] = base.parse_attribute (/<cim:RegisteredGenerator.EnergyPriceIndex\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RMRStartUpFuelCurve"] = base.parse_attribute (/<cim:RegisteredGenerator.RMRStartUpFuelCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["MktHeatRateCurve"] = base.parse_attribute (/<cim:RegisteredGenerator.MktHeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["LocalReliabilityArea"] = base.parse_attribute (/<cim:RegisteredGenerator.LocalReliabilityArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RMRStartUpEnergyCurve"] = base.parse_attribute (/<cim:RegisteredGenerator.RMRStartUpEnergyCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["FuelRegion"] = base.parse_attribute (/<cim:RegisteredGenerator.FuelRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["StartUpEnergyCurve"] = base.parse_attribute (/<cim:RegisteredGenerator.StartUpEnergyCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RegulatingLimit"] = base.parse_attribute (/<cim:RegisteredGenerator.RegulatingLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RegisteredGenerator;
            if (null == bucket)
                context.parsed.RegisteredGenerator = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A flowgate, is single or group of transmission elements intended to model MW flow impact relating to transmission limitations and transmission service usage.
         */
        function parse_Flowgate (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "Flowgate";
            /**
             * The direction of the flowgate, export or import
             */
            obj["direction"] = base.parse_element (/<cim:Flowgate.direction>([\s\S]*?)<\/cim:Flowgate.direction>/g, sub, context, true);
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:Flowgate.endEffectiveDate>([\s\S]*?)<\/cim:Flowgate.endEffectiveDate>/g, sub, context, true));
            /**
             * Export MW rating
             */
            obj["exportMWRating"] = base.parse_element (/<cim:Flowgate.exportMWRating>([\s\S]*?)<\/cim:Flowgate.exportMWRating>/g, sub, context, true);
            /**
             * Import MW rating
             */
            obj["importMWRating"] = base.parse_element (/<cim:Flowgate.importMWRating>([\s\S]*?)<\/cim:Flowgate.importMWRating>/g, sub, context, true);
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:Flowgate.startEffectiveDate>([\s\S]*?)<\/cim:Flowgate.startEffectiveDate>/g, sub, context, true));
            /**
             * 
             */
            obj["To_SubControlArea"] = base.parse_attribute (/<cim:Flowgate.To_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["HostControlArea"] = base.parse_attribute (/<cim:Flowgate.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["SecurityConstraints"] = base.parse_attribute (/<cim:Flowgate.SecurityConstraints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["CRR"] = base.parse_attribute (/<cim:Flowgate.CRR\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["From_SubControlArea"] = base.parse_attribute (/<cim:Flowgate.From_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["GenericConstraints"] = base.parse_attribute (/<cim:Flowgate.GenericConstraints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Flowgate;
            if (null == bucket)
                context.parsed.Flowgate = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Flowgate defined partner
         */
        function parse_FlowgatePartner (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "FlowgatePartner";
            /**
             * 
             */
            obj["FlowgateValue"] = base.parse_attribute (/<cim:FlowgatePartner.FlowgateValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.FlowgatePartner;
            if (null == bucket)
                context.parsed.FlowgatePartner = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Configuration options for combined cycle units.
         * For example, a Combined Cycle with (CT1, CT2, ST1) will have (CT1, ST1) and (CT2, ST1) configurations as part of(1CT + 1STlogicalconfiguration).
         */
        function parse_CombinedCycleConfiguration (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_RegisteredGenerator (context, sub);
            obj.cls = "CombinedCycleConfiguration";
            /**
             * Whether this CombinedCycleConfiguration is the primary configuration in the associated Logical configuration?
             */
            obj["primaryConfiguration"] = base.to_boolean (base.parse_element (/<cim:CombinedCycleConfiguration.primaryConfiguration>([\s\S]*?)<\/cim:CombinedCycleConfiguration.primaryConfiguration>/g, sub, context, true));
            /**
             * Whether Combined Cycle Plant can be shut-down in this Configuration?
             */
            obj["ShutdownFlag"] = base.to_boolean (base.parse_element (/<cim:CombinedCycleConfiguration.ShutdownFlag>([\s\S]*?)<\/cim:CombinedCycleConfiguration.ShutdownFlag>/g, sub, context, true));
            /**
             * Whether Combined Cycle Plant can be started in this Logical Configuration?
             */
            obj["StartupFlag"] = base.to_boolean (base.parse_element (/<cim:CombinedCycleConfiguration.StartupFlag>([\s\S]*?)<\/cim:CombinedCycleConfiguration.StartupFlag>/g, sub, context, true));
            /**
             * 
             */
            obj["CombinedCycleLogicalConfiguration"] = base.parse_attribute (/<cim:CombinedCycleConfiguration.CombinedCycleLogicalConfiguration\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CombinedCycleConfiguration;
            if (null == bucket)
                context.parsed.CombinedCycleConfiguration = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * To model the startup costs of a generation resource.
         */
        function parse_ResourceStartupCost (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceStartupCost";
            /**
             * Verifiable Cold Start Up Fuel (MMBtu per start)
             */
            obj["fuelColdStartup"] = base.to_float (base.parse_element (/<cim:ResourceStartupCost.fuelColdStartup>([\s\S]*?)<\/cim:ResourceStartupCost.fuelColdStartup>/g, sub, context, true));
            /**
             * Verifiable Hot Start Up Fuel (MMBtu per start)
             */
            obj["fuelHotStartup"] = base.to_float (base.parse_element (/<cim:ResourceStartupCost.fuelHotStartup>([\s\S]*?)<\/cim:ResourceStartupCost.fuelHotStartup>/g, sub, context, true));
            /**
             * Verifiable Intermediate Start Up Fuel (MMBtu per start)
             */
            obj["fuelIntermediateStartup"] = base.to_float (base.parse_element (/<cim:ResourceStartupCost.fuelIntermediateStartup>([\s\S]*?)<\/cim:ResourceStartupCost.fuelIntermediateStartup>/g, sub, context, true));
            /**
             * Minimum-Energy fuel, MMBtu/MWh
             */
            obj["fuelLowSustainedLimit"] = base.to_float (base.parse_element (/<cim:ResourceStartupCost.fuelLowSustainedLimit>([\s\S]*?)<\/cim:ResourceStartupCost.fuelLowSustainedLimit>/g, sub, context, true));
            /**
             * Percentage of Fuel Index Price (gas) for cold startup
             */
            obj["gasPercentColdStartup"] = base.parse_element (/<cim:ResourceStartupCost.gasPercentColdStartup>([\s\S]*?)<\/cim:ResourceStartupCost.gasPercentColdStartup>/g, sub, context, true);
            /**
             * Percentage of Fuel Index Price (gas) for hot startup
             */
            obj["gasPercentHotStartup"] = base.parse_element (/<cim:ResourceStartupCost.gasPercentHotStartup>([\s\S]*?)<\/cim:ResourceStartupCost.gasPercentHotStartup>/g, sub, context, true);
            /**
             * Percentage of Fuel Index Price (gas) for intermediate startup
             */
            obj["gasPercentIntermediateStartup"] = base.parse_element (/<cim:ResourceStartupCost.gasPercentIntermediateStartup>([\s\S]*?)<\/cim:ResourceStartupCost.gasPercentIntermediateStartup>/g, sub, context, true);
            /**
             * Percentage of FIP (gas) for operating at LSL
             */
            obj["gasPercentLowSustainedLimit"] = base.parse_element (/<cim:ResourceStartupCost.gasPercentLowSustainedLimit>([\s\S]*?)<\/cim:ResourceStartupCost.gasPercentLowSustainedLimit>/g, sub, context, true);
            /**
             * Percentage of Fuel Oil Price (FOP) for cold startup
             */
            obj["oilPercentColdStartup"] = base.parse_element (/<cim:ResourceStartupCost.oilPercentColdStartup>([\s\S]*?)<\/cim:ResourceStartupCost.oilPercentColdStartup>/g, sub, context, true);
            /**
             * Percentage of Fuel Oil Price (FOP) for hot startup
             */
            obj["oilPercentHotStartup"] = base.parse_element (/<cim:ResourceStartupCost.oilPercentHotStartup>([\s\S]*?)<\/cim:ResourceStartupCost.oilPercentHotStartup>/g, sub, context, true);
            /**
             * Percentage of Fuel Oil Price (FOP) for intermediate startup
             */
            obj["oilPercentIntermediateStartup"] = base.parse_element (/<cim:ResourceStartupCost.oilPercentIntermediateStartup>([\s\S]*?)<\/cim:ResourceStartupCost.oilPercentIntermediateStartup>/g, sub, context, true);
            /**
             * Percentage of FOP (oil) for operating at LSL
             */
            obj["oilPercentLowSustainedLimit"] = base.parse_element (/<cim:ResourceStartupCost.oilPercentLowSustainedLimit>([\s\S]*?)<\/cim:ResourceStartupCost.oilPercentLowSustainedLimit>/g, sub, context, true);
            /**
             * Percentage of Solid Fuel for cold startup
             */
            obj["solidfuelPercentColdStartup"] = base.parse_element (/<cim:ResourceStartupCost.solidfuelPercentColdStartup>([\s\S]*?)<\/cim:ResourceStartupCost.solidfuelPercentColdStartup>/g, sub, context, true);
            /**
             * Percentage of Solid Fuel for hot startup
             */
            obj["solidfuelPercentHotStartup"] = base.parse_element (/<cim:ResourceStartupCost.solidfuelPercentHotStartup>([\s\S]*?)<\/cim:ResourceStartupCost.solidfuelPercentHotStartup>/g, sub, context, true);
            /**
             * Percentage of Solid Fuel for intermedite startup
             */
            obj["solidfuelPercentIntermediateStartup"] = base.parse_element (/<cim:ResourceStartupCost.solidfuelPercentIntermediateStartup>([\s\S]*?)<\/cim:ResourceStartupCost.solidfuelPercentIntermediateStartup>/g, sub, context, true);
            /**
             * Percentage of Solid Fuel for operating at LSL
             */
            obj["solidfuelPercentLowSustainedLimit"] = base.parse_element (/<cim:ResourceStartupCost.solidfuelPercentLowSustainedLimit>([\s\S]*?)<\/cim:ResourceStartupCost.solidfuelPercentLowSustainedLimit>/g, sub, context, true);
            bucket = context.parsed.ResourceStartupCost;
            if (null == bucket)
                context.parsed.ResourceStartupCost = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Price of gas in monetary units
         */
        function parse_GasPrice (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GasPrice";
            /**
             * The average natural gas price at a defined fuel region.
             */
            obj["gasPriceIndex"] = base.to_float (base.parse_element (/<cim:GasPrice.gasPriceIndex>([\s\S]*?)<\/cim:GasPrice.gasPriceIndex>/g, sub, context, true));
            /**
             * 
             */
            obj["FuelRegion"] = base.parse_attribute (/<cim:GasPrice.FuelRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.GasPrice;
            if (null == bucket)
                context.parsed.GasPrice = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Representing the ratio of the load share for the associated SC.
         */
        function parse_LoadRatio (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LoadRatio";
            /**
             * Interval Start Time
             */
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:LoadRatio.intervalStartTime>([\s\S]*?)<\/cim:LoadRatio.intervalStartTime>/g, sub, context, true));
            /**
             * Interval End Time
             */
            obj["intervalEndTime"] = base.to_datetime (base.parse_element (/<cim:LoadRatio.intervalEndTime>([\s\S]*?)<\/cim:LoadRatio.intervalEndTime>/g, sub, context, true));
            /**
             * Share in percentage of total Market load for the selected time interval.
             */
            obj["share"] = base.parse_element (/<cim:LoadRatio.share>([\s\S]*?)<\/cim:LoadRatio.share>/g, sub, context, true);
            /**
             * 
             */
            obj["SchedulingCoordinator"] = base.parse_attribute (/<cim:LoadRatio.SchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.LoadRatio;
            if (null == bucket)
                context.parsed.LoadRatio = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class represents the inter tie resource.
         */
        function parse_RegisteredInterTie (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketCommon.parse_RegisteredResource (context, sub);
            obj.cls = "RegisteredInterTie";
            /**
             * indicate the direction (export/import) of an intertie resource
             */
            obj["direction"] = base.parse_element (/<cim:RegisteredInterTie.direction>([\s\S]*?)<\/cim:RegisteredInterTie.direction>/g, sub, context, true);
            /**
             * Under each major product type, the commodity type can be applied to further specify the type.
             */
            obj["energyProductType"] = base.parse_element (/<cim:RegisteredInterTie.energyProductType>([\s\S]*?)<\/cim:RegisteredInterTie.energyProductType>/g, sub, context, true);
            /**
             * Flag to indicated whether this Inter-tie is a DC Tie.
             */
            obj["isDCTie"] = base.parse_element (/<cim:RegisteredInterTie.isDCTie>([\s\S]*?)<\/cim:RegisteredInterTie.isDCTie>/g, sub, context, true);
            /**
             * check if the inter-tie resource is registered for the dynamic interchange..
             */
            obj["isDynamicInterchange"] = base.parse_element (/<cim:RegisteredInterTie.isDynamicInterchange>([\s\S]*?)<\/cim:RegisteredInterTie.isDynamicInterchange>/g, sub, context, true);
            /**
             * The registered upper bound of minimum hourly block for an Inter-Tie Resource
             */
            obj["minHourlyBlockLimit"] = base.parse_element (/<cim:RegisteredInterTie.minHourlyBlockLimit>([\s\S]*?)<\/cim:RegisteredInterTie.minHourlyBlockLimit>/g, sub, context, true);
            /**
             * 
             */
            obj["Flowgate"] = base.parse_attribute (/<cim:RegisteredInterTie.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["InterTieBid"] = base.parse_attribute (/<cim:RegisteredInterTie.InterTieBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RegisteredInterTie;
            if (null == bucket)
                context.parsed.RegisteredInterTie = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of a load that is registered to participate in the market (demand reduction)
         */
        function parse_RegisteredLoad (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketCommon.parse_RegisteredResource (context, sub);
            obj.cls = "RegisteredLoad";
            /**
             * Flag to indicate that the Resource is Block Load pseudo resource (&lsquo;Y&rsquo;, &lsquo; N&rsquo;)
             */
            obj["blockLoadTransferFlag"] = base.parse_element (/<cim:RegisteredLoad.blockLoadTransferFlag>([\s\S]*?)<\/cim:RegisteredLoad.blockLoadTransferFlag>/g, sub, context, true);
            /**
             * Flag to indicate that a Load Resource is part of a DSR Load
             */
            obj["dynamicallyScheduledLoadResourceFlag"] = base.parse_element (/<cim:RegisteredLoad.dynamicallyScheduledLoadResourceFlag>([\s\S]*?)<\/cim:RegisteredLoad.dynamicallyScheduledLoadResourceFlag>/g, sub, context, true);
            /**
             * Qualification status (used for DSR qualification)
             */
            obj["dynamicallyScheduledQualificationFlag"] = base.parse_element (/<cim:RegisteredLoad.dynamicallyScheduledQualificationFlag>([\s\S]*?)<\/cim:RegisteredLoad.dynamicallyScheduledQualificationFlag>/g, sub, context, true);
            /**
             * Non-participating load registry as a MSS load
             */
            obj["loadRegistryMSS"] = base.parse_element (/<cim:RegisteredLoad.loadRegistryMSS>([\s\S]*?)<\/cim:RegisteredLoad.loadRegistryMSS>/g, sub, context, true);
            /**
             * Maximum Base Load (MW), per Participating Load Resource
             */
            obj["maxBaseLoad"] = base.parse_element (/<cim:RegisteredLoad.maxBaseLoad>([\s\S]*?)<\/cim:RegisteredLoad.maxBaseLoad>/g, sub, context, true);
            /**
             * Maximum Deployment time (seconds)
             */
            obj["maxDeploymentTime"] = base.to_float (base.parse_element (/<cim:RegisteredLoad.maxDeploymentTime>([\s\S]*?)<\/cim:RegisteredLoad.maxDeploymentTime>/g, sub, context, true));
            /**
             * Maximum Number of Daily Load Curtailments
             */
            obj["maxLoadRedTimesPerDay"] = base.parse_element (/<cim:RegisteredLoad.maxLoadRedTimesPerDay>([\s\S]*?)<\/cim:RegisteredLoad.maxLoadRedTimesPerDay>/g, sub, context, true);
            /**
             * maximum load reduction
             */
            obj["maxLoadReduction"] = base.parse_element (/<cim:RegisteredLoad.maxLoadReduction>([\s\S]*?)<\/cim:RegisteredLoad.maxLoadReduction>/g, sub, context, true);
            /**
             * Maxiimum Load Reduction Time (min), per Participating Load Resource
             */
            obj["maxReductionTime"] = base.to_float (base.parse_element (/<cim:RegisteredLoad.maxReductionTime>([\s\S]*?)<\/cim:RegisteredLoad.maxReductionTime>/g, sub, context, true));
            /**
             * Maximum weekly deployments
             */
            obj["maxWeeklyDeployment"] = base.parse_element (/<cim:RegisteredLoad.maxWeeklyDeployment>([\s\S]*?)<\/cim:RegisteredLoad.maxWeeklyDeployment>/g, sub, context, true);
            /**
             * Minimum MW for a load reduction (e.g., MW rating of a discrete pump.
             * This attribute may be used also in the LoadBid class. The reason that the attribute is also modeled in this class is that it is resource attribute and needs to be persistently stored.
             */
            obj["minLoadReduction"] = base.parse_element (/<cim:RegisteredLoad.minLoadReduction>([\s\S]*?)<\/cim:RegisteredLoad.minLoadReduction>/g, sub, context, true);
            /**
             * minimum load reduction cost.
             * Single number for the load
             */
            obj["minLoadReductionCost"] = base.parse_element (/<cim:RegisteredLoad.minLoadReductionCost>([\s\S]*?)<\/cim:RegisteredLoad.minLoadReductionCost>/g, sub, context, true);
            /**
             * Shortest period load reduction shall be maintained before load can be restored to normal levels.
             * This attribute may be used also in the LoadBid class. The reason that the attribute is also modeled in this class is that it is resource attribute and needs to be persistently stored.
             */
            obj["minLoadReductionInterval"] = base.to_float (base.parse_element (/<cim:RegisteredLoad.minLoadReductionInterval>([\s\S]*?)<\/cim:RegisteredLoad.minLoadReductionInterval>/g, sub, context, true));
            /**
             * Minimum Load Reduction Time (min), per Participating Load Resource
             */
            obj["minReductionTime"] = base.to_float (base.parse_element (/<cim:RegisteredLoad.minReductionTime>([\s\S]*?)<\/cim:RegisteredLoad.minReductionTime>/g, sub, context, true));
            /**
             * Shortest time that load shall be left at normal levels before a new load reduction.
             * This attribute may be used also in the LoadBid class. The reason that the attribute is also modeled in this class is that it is resource attribute and needs to be persistently stored.
             */
            obj["minTimeBetLoadRed"] = base.to_float (base.parse_element (/<cim:RegisteredLoad.minTimeBetLoadRed>([\s\S]*?)<\/cim:RegisteredLoad.minTimeBetLoadRed>/g, sub, context, true));
            /**
             * A Non-Participating Load Resource aggregation scheme with resource-specific Distribution Factors that are submitted with the Bid and for which the distributed Energy is settled at the relevant Distribution Location marginal prices.
             */
            obj["NPLCustomLoadAggregation"] = base.parse_element (/<cim:RegisteredLoad.NPLCustomLoadAggregation>([\s\S]*?)<\/cim:RegisteredLoad.NPLCustomLoadAggregation>/g, sub, context, true);
            /**
             * Participating Load flag: indicates whether the load resource is participates in load reduction actions.
             */
            obj["participatingLoad"] = base.parse_element (/<cim:RegisteredLoad.participatingLoad>([\s\S]*?)<\/cim:RegisteredLoad.participatingLoad>/g, sub, context, true);
            /**
             * Time period that is required from an order to reduce a load to the time that it takes to get to the minimum load reduction.
             * This attribute may be used also in the LoadBid class. The reason that the attribute is also modeled in this class is that it is resource attribute and needs to be persistently stored.
             */
            obj["reqNoticeTime"] = base.to_float (base.parse_element (/<cim:RegisteredLoad.reqNoticeTime>([\s\S]*?)<\/cim:RegisteredLoad.reqNoticeTime>/g, sub, context, true));
            /**
             * CLR	Controllable Load
             * NCLR	Non-Controllable Load
             */
            obj["resourceSubType"] = base.parse_element (/<cim:RegisteredLoad.resourceSubType>([\s\S]*?)<\/cim:RegisteredLoad.resourceSubType>/g, sub, context, true);
            /**
             * 
             */
            obj["MktLoadArea"] = base.parse_attribute (/<cim:RegisteredLoad.MktLoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RegisteredLoad;
            if (null == bucket)
                context.parsed.RegisteredLoad = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An aggregated node can define a typed grouping further defined by the AnodeType enumeratuion.
         * Types range from System Zone/Regions to Market Energy Regions to Aggregated Loads and Aggregated Generators.
         */
        function parse_AggregateNode (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "AggregateNode";
            /**
             * Type of aggregated node
             */
            obj["anodeType"] = base.parse_element (/<cim:AggregateNode.anodeType>([\s\S]*?)<\/cim:AggregateNode.anodeType>/g, sub, context, true);
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:AggregateNode.endEffectiveDate>([\s\S]*?)<\/cim:AggregateNode.endEffectiveDate>/g, sub, context, true));
            /**
             * Processing Order for AS self-provisions for this region.
             * The priority of this attribute directs the awards of any resource that resides in overlapping regions. The regions are processed in priority manner.
             */
            obj["qualifASOrder"] = base.parse_element (/<cim:AggregateNode.qualifASOrder>([\s\S]*?)<\/cim:AggregateNode.qualifASOrder>/g, sub, context, true);
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:AggregateNode.startEffectiveDate>([\s\S]*?)<\/cim:AggregateNode.startEffectiveDate>/g, sub, context, true));
            /**
             * 
             */
            obj["RTO"] = base.parse_attribute (/<cim:AggregateNode.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AggregateNode;
            if (null == bucket)
                context.parsed.AggregateNode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of Production: CombinedCyclePlant from IEC61970 package.
         * A set of combustion turbines and steam turbines where the exhaust heat from the combustion turbines is recovered to make steam for the steam turbines, resulting in greater overall plant efficiency
         */
        function parse_MktCombinedCyclePlant (context, sub)
        {
            var obj;
            var bucket;

            obj = Production.parse_CombinedCyclePlant (context, sub);
            obj.cls = "MktCombinedCyclePlant";
            /**
             * 
             */
            obj["AggregatedPnode"] = base.parse_attribute (/<cim:MktCombinedCyclePlant.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MktCombinedCyclePlant;
            if (null == bucket)
                context.parsed.MktCombinedCyclePlant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Logical Configuration of a Combined Cycle plant.
         * Operating Combined Cycle Plant (CCP) configurations are represented as Logical CCP Resources. Logical representation shall be used for Market applications to optimize and control Market Operations. Logical representation is also necessary for controlling the number of CCP configurations and to temper performance issues that may otherwise occur.
         */
        function parse_CombinedCycleLogicalConfiguration (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "CombinedCycleLogicalConfiguration";
            /**
             * 
             */
            obj["MktCombinedCyclePlant"] = base.parse_attribute (/<cim:CombinedCycleLogicalConfiguration.MktCombinedCyclePlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CombinedCycleLogicalConfiguration;
            if (null == bucket)
                context.parsed.CombinedCycleLogicalConfiguration = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Counter party in a wheeling transaction.
         */
        function parse_WheelingCounterParty (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WheelingCounterParty";
            bucket = context.parsed.WheelingCounterParty;
            if (null == bucket)
                context.parsed.WheelingCounterParty = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Defines the available from and to Transition States for the Combine Cycle Configurations.
         */
        function parse_CombinedCycleTransitionState (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "CombinedCycleTransitionState";
            /**
             * Flag indicating whether this is an UP transition.
             * If not, it is a DOWN transition.
             */
            obj["upTransition"] = base.to_boolean (base.parse_element (/<cim:CombinedCycleTransitionState.upTransition>([\s\S]*?)<\/cim:CombinedCycleTransitionState.upTransition>/g, sub, context, true));
            /**
             * 
             */
            obj["FromConfiguration"] = base.parse_attribute (/<cim:CombinedCycleTransitionState.FromConfiguration\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["ToConfiguration"] = base.parse_attribute (/<cim:CombinedCycleTransitionState.ToConfiguration\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CombinedCycleTransitionState;
            if (null == bucket)
                context.parsed.CombinedCycleTransitionState = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class model the ownership percent and type of ownership between resource and organisation
         */
        function parse_OrgResOwnership (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "OrgResOwnership";
            /**
             * association type for the association between Organisation and Resource:
             */
            obj["asscType"] = base.parse_element (/<cim:OrgResOwnership.asscType>([\s\S]*?)<\/cim:OrgResOwnership.asscType>/g, sub, context, true);
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:OrgResOwnership.endEffectiveDate>([\s\S]*?)<\/cim:OrgResOwnership.endEffectiveDate>/g, sub, context, true));
            /**
             * Flag to indicate that the SC representing the Resource is the Master SC.
             */
            obj["masterSchedulingCoordinatorFlag"] = base.parse_element (/<cim:OrgResOwnership.masterSchedulingCoordinatorFlag>([\s\S]*?)<\/cim:OrgResOwnership.masterSchedulingCoordinatorFlag>/g, sub, context, true);
            /**
             * ownership percentage for each resource
             */
            obj["ownershipPercent"] = base.parse_element (/<cim:OrgResOwnership.ownershipPercent>([\s\S]*?)<\/cim:OrgResOwnership.ownershipPercent>/g, sub, context, true);
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:OrgResOwnership.startEffectiveDate>([\s\S]*?)<\/cim:OrgResOwnership.startEffectiveDate>/g, sub, context, true));
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:OrgResOwnership.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["MktOrganisation"] = base.parse_attribute (/<cim:OrgResOwnership.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.OrgResOwnership;
            if (null == bucket)
                context.parsed.OrgResOwnership = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides definition of Transmission Ownership Right and Existing Transmission Contract identifiers for use by SCUC.
         * RMR contract hosting: Startup lead time, Contract Service Limits, Max Service Hours, Max MWhs, Max Start-ups, Ramp Rate, Max Net Dependable Capacity, Min Capacity and Unit Substitution for DAM/RTM to retrieve;
         */
        function parse_ContractRight (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ContractRight";
            /**
             * When used in conjunction with a Transmission Right contract chain, this is the precedence for the contracts.
             */
            obj["chainOrder"] = base.parse_element (/<cim:ContractRight.chainOrder>([\s\S]*?)<\/cim:ContractRight.chainOrder>/g, sub, context, true);
            /**
             * MW value of the contract
             */
            obj["contractMW"] = base.to_float (base.parse_element (/<cim:ContractRight.contractMW>([\s\S]*?)<\/cim:ContractRight.contractMW>/g, sub, context, true));
            /**
             * Financial value of the contract
             */
            obj["contractPrice"] = base.parse_element (/<cim:ContractRight.contractPrice>([\s\S]*?)<\/cim:ContractRight.contractPrice>/g, sub, context, true);
            /**
             * Priority for the contract.
             * This should be unique amoung all contracts for a specific resource. This value is the directive for the SCUC algorithm on the order to satisfy/cut contracts.
             */
            obj["contractPriority"] = base.parse_element (/<cim:ContractRight.contractPriority>([\s\S]*?)<\/cim:ContractRight.contractPriority>/g, sub, context, true);
            /**
             * Contract status
             */
            obj["contractStatus"] = base.parse_element (/<cim:ContractRight.contractStatus>([\s\S]*?)<\/cim:ContractRight.contractStatus>/g, sub, context, true);
            /**
             * type of the contract.
             * Possible values are but not limited by:
             */
            obj["contractType"] = base.parse_element (/<cim:ContractRight.contractType>([\s\S]*?)<\/cim:ContractRight.contractType>/g, sub, context, true);
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:ContractRight.endEffectiveDate>([\s\S]*?)<\/cim:ContractRight.endEffectiveDate>/g, sub, context, true));
            /**
             * Indicator if the location associated with this contract is financial (e.g. pricing nodes) or physical (e.g. connectivity nodes).
             */
            obj["financialLocation"] = base.parse_element (/<cim:ContractRight.financialLocation>([\s\S]*?)<\/cim:ContractRight.financialLocation>/g, sub, context, true);
            /**
             * Flag to indicate this contract provides financial rights in the DA Market
             */
            obj["financialRightsDAM"] = base.parse_element (/<cim:ContractRight.financialRightsDAM>([\s\S]*?)<\/cim:ContractRight.financialRightsDAM>/g, sub, context, true);
            /**
             * Flag to indicate this contract provides financial rights in the RT Market
             */
            obj["financialRightsRTM"] = base.parse_element (/<cim:ContractRight.financialRightsRTM>([\s\S]*?)<\/cim:ContractRight.financialRightsRTM>/g, sub, context, true);
            /**
             * Estimated Fuel Adder
             */
            obj["fuelAdder"] = base.to_float (base.parse_element (/<cim:ContractRight.fuelAdder>([\s\S]*?)<\/cim:ContractRight.fuelAdder>/g, sub, context, true));
            /**
             * This indicates the latest schedule minutes (e.g. t - xx) that this resource can be notified to respond.
             * This attribute is only used if the market type is not supplied.
             */
            obj["latestSchedMinutes"] = base.parse_element (/<cim:ContractRight.latestSchedMinutes>([\s\S]*?)<\/cim:ContractRight.latestSchedMinutes>/g, sub, context, true);
            /**
             * This indicates the latest schedule market type a contract can be applied to.
             * This is used in conjunction with the latestSchedMinutes attribute to determine the latest time this contract can be called in. The possible values for this attribute are: DAM, RTM or it can be omitted. If omitted, the latestSchedMinutes attribute defines the value.
             */
            obj["latestSchedMktType"] = base.parse_element (/<cim:ContractRight.latestSchedMktType>([\s\S]*?)<\/cim:ContractRight.latestSchedMktType>/g, sub, context, true);
            /**
             * Maximum schedule MW quantity
             */
            obj["maximumScheduleQuantity"] = base.to_float (base.parse_element (/<cim:ContractRight.maximumScheduleQuantity>([\s\S]*?)<\/cim:ContractRight.maximumScheduleQuantity>/g, sub, context, true));
            /**
             * Maximum service hours
             */
            obj["maximumServiceHours"] = base.parse_element (/<cim:ContractRight.maximumServiceHours>([\s\S]*?)<\/cim:ContractRight.maximumServiceHours>/g, sub, context, true);
            /**
             * Maximum startups
             */
            obj["maximumStartups"] = base.parse_element (/<cim:ContractRight.maximumStartups>([\s\S]*?)<\/cim:ContractRight.maximumStartups>/g, sub, context, true);
            /**
             * Maximum Net Dependable Capacity
             */
            obj["maxNetDependableCapacity"] = base.to_float (base.parse_element (/<cim:ContractRight.maxNetDependableCapacity>([\s\S]*?)<\/cim:ContractRight.maxNetDependableCapacity>/g, sub, context, true));
            /**
             * Minimum Load
             */
            obj["minimumLoad"] = base.to_float (base.parse_element (/<cim:ContractRight.minimumLoad>([\s\S]*?)<\/cim:ContractRight.minimumLoad>/g, sub, context, true));
            /**
             * Minimum schedule quanity
             */
            obj["minimumScheduleQuantity"] = base.to_float (base.parse_element (/<cim:ContractRight.minimumScheduleQuantity>([\s\S]*?)<\/cim:ContractRight.minimumScheduleQuantity>/g, sub, context, true));
            /**
             * Flag to indicate this contract provides physical rights in the DA Market
             */
            obj["physicalRightsDAM"] = base.parse_element (/<cim:ContractRight.physicalRightsDAM>([\s\S]*?)<\/cim:ContractRight.physicalRightsDAM>/g, sub, context, true);
            /**
             * Flag to indicate this contract provides physical rights in the RT Market
             */
            obj["physicalRightsRTM"] = base.parse_element (/<cim:ContractRight.physicalRightsRTM>([\s\S]*?)<\/cim:ContractRight.physicalRightsRTM>/g, sub, context, true);
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:ContractRight.startEffectiveDate>([\s\S]*?)<\/cim:ContractRight.startEffectiveDate>/g, sub, context, true));
            /**
             * Start up lead time
             */
            obj["startupLeadTime"] = base.parse_element (/<cim:ContractRight.startupLeadTime>([\s\S]*?)<\/cim:ContractRight.startupLeadTime>/g, sub, context, true);
            /**
             * Transmission Right type - is this an individual contract right or a chain contract right.
             * Types = CHAIN or INDIVIDUAL
             */
            obj["TRType"] = base.parse_element (/<cim:ContractRight.TRType>([\s\S]*?)<\/cim:ContractRight.TRType>/g, sub, context, true);
            /**
             * 
             */
            obj["SchedulingCoordinator"] = base.parse_attribute (/<cim:ContractRight.SchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["Ind_TransmissionRightChain"] = base.parse_attribute (/<cim:ContractRight.Ind_TransmissionRightChain\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RTO"] = base.parse_attribute (/<cim:ContractRight.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["Chain_TransmissionRightChain"] = base.parse_attribute (/<cim:ContractRight.Chain_TransmissionRightChain\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ContractRight;
            if (null == bucket)
                context.parsed.ContractRight = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Goups Adjacent Control Areas
         */
        function parse_AdjacentCASet (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "AdjacentCASet";
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:AdjacentCASet.endEffectiveDate>([\s\S]*?)<\/cim:AdjacentCASet.endEffectiveDate>/g, sub, context, true));
            /**
             * Loss percentage
             */
            obj["lossPercentage "] = base.to_float (base.parse_element (/<cim:AdjacentCASet.lossPercentage >([\s\S]*?)<\/cim:AdjacentCASet.lossPercentage >/g, sub, context, true));
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:AdjacentCASet.startEffectiveDate>([\s\S]*?)<\/cim:AdjacentCASet.startEffectiveDate>/g, sub, context, true));
            /**
             * 
             */
            obj["HostControlArea"] = base.parse_attribute (/<cim:AdjacentCASet.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RTO"] = base.parse_attribute (/<cim:AdjacentCASet.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AdjacentCASet;
            if (null == bucket)
                context.parsed.AdjacentCASet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Connection to other organizations at the boundary of the ISO/RTO.
         */
        function parse_SchedulingPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "SchedulingPoint";
            /**
             * End effective date.
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:SchedulingPoint.endEffectiveDate>([\s\S]*?)<\/cim:SchedulingPoint.endEffectiveDate>/g, sub, context, true));
            /**
             * Start effective date.
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:SchedulingPoint.startEffectiveDate>([\s\S]*?)<\/cim:SchedulingPoint.startEffectiveDate>/g, sub, context, true));
            /**
             * 
             */
            obj["Flowgate"] = base.parse_attribute (/<cim:SchedulingPoint.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SchedulingPoint;
            if (null == bucket)
                context.parsed.SchedulingPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class models the allocation between asset owners and pricing nodes
         */
        function parse_OrgPnodeAllocation (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "OrgPnodeAllocation";
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:OrgPnodeAllocation.endEffectiveDate>([\s\S]*?)<\/cim:OrgPnodeAllocation.endEffectiveDate>/g, sub, context, true));
            /**
             * Maximum MW for the Source/Sink for the Allocation
             */
            obj["maxMWAllocation"] = base.parse_element (/<cim:OrgPnodeAllocation.maxMWAllocation>([\s\S]*?)<\/cim:OrgPnodeAllocation.maxMWAllocation>/g, sub, context, true);
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:OrgPnodeAllocation.startEffectiveDate>([\s\S]*?)<\/cim:OrgPnodeAllocation.startEffectiveDate>/g, sub, context, true));
            /**
             * 
             */
            obj["Pnode"] = base.parse_attribute (/<cim:OrgPnodeAllocation.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["MktOrganisation"] = base.parse_attribute (/<cim:OrgPnodeAllocation.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.OrgPnodeAllocation;
            if (null == bucket)
                context.parsed.OrgPnodeAllocation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * To model the Operation and Maintenance (O and M) costs of a generation resource.
         */
        function parse_ResourceOperationMaintenanceCost (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "ResourceOperationMaintenanceCost";
            /**
             * Percentage of Fuel Index Price (gas) for operating above Low Sustained Limit (LSL)
             */
            obj["gasPercentAboveLowSustainedLimit"] = base.parse_element (/<cim:ResourceOperationMaintenanceCost.gasPercentAboveLowSustainedLimit>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.gasPercentAboveLowSustainedLimit>/g, sub, context, true);
            /**
             * Percentage of Fuel Oil Price (FOP) for operating above Low Sustained Limit (LSL)
             */
            obj["oilPercentAboveLowSustainedLimit"] = base.parse_element (/<cim:ResourceOperationMaintenanceCost.oilPercentAboveLowSustainedLimit>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.oilPercentAboveLowSustainedLimit>/g, sub, context, true);
            /**
             * Verifiable O&amp;M Cost ($), Cold Startup
             */
            obj["omCostColdStartup"] = base.to_float (base.parse_element (/<cim:ResourceOperationMaintenanceCost.omCostColdStartup>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.omCostColdStartup>/g, sub, context, true));
            /**
             * Verifiable O&amp;M Cost ($), Hot Startup
             */
            obj["omCostHotStartup"] = base.to_float (base.parse_element (/<cim:ResourceOperationMaintenanceCost.omCostHotStartup>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.omCostHotStartup>/g, sub, context, true));
            /**
             * Verifiable O&amp;M Cost ($), Intermediate Startup
             */
            obj["omCostIntermediateStartup"] = base.to_float (base.parse_element (/<cim:ResourceOperationMaintenanceCost.omCostIntermediateStartup>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.omCostIntermediateStartup>/g, sub, context, true));
            /**
             * Verifiable O&amp;M Cost ($/MWh), LSL
             */
            obj["omCostLowSustainedLimit"] = base.to_float (base.parse_element (/<cim:ResourceOperationMaintenanceCost.omCostLowSustainedLimit>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.omCostLowSustainedLimit>/g, sub, context, true));
            /**
             * Percentage of Solid Fuel for operating above Low Sustained Limit (LSL)
             */
            obj["solidfuelPercentAboveLowSustainedLimit"] = base.parse_element (/<cim:ResourceOperationMaintenanceCost.solidfuelPercentAboveLowSustainedLimit>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.solidfuelPercentAboveLowSustainedLimit>/g, sub, context, true);
            /**
             * 
             */
            obj["ResourceVerifiableCosts"] = base.parse_attribute (/<cim:ResourceOperationMaintenanceCost.ResourceVerifiableCosts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ResourceOperationMaintenanceCost;
            if (null == bucket)
                context.parsed.ResourceOperationMaintenanceCost = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A pricing node is directly associated with a connectivity node.
         * It is a pricing location for which market participants submit their bids, offers, buy/sell CRRs, and settle.
         */
        function parse_Pnode (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Pnode";
            /**
             * End effective date of the period in which the price node definition is valid.
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:Pnode.endEffectiveDate>([\s\S]*?)<\/cim:Pnode.endEffectiveDate>/g, sub, context, true));
            /**
             * If true, this Pnode is public (prices are published for DA/RT and FTR markets), otherwise it is private (location is not usable by market for bidding/FTRs/transactions).
             */
            obj["isPublic"] = base.to_boolean (base.parse_element (/<cim:Pnode.isPublic>([\s\S]*?)<\/cim:Pnode.isPublic>/g, sub, context, true));
            /**
             * Start effective date of the period in which the price node definition is valid.
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:Pnode.startEffectiveDate>([\s\S]*?)<\/cim:Pnode.startEffectiveDate>/g, sub, context, true));
            /**
             * Pnode type
             */
            obj["type"] = base.parse_element (/<cim:Pnode.type>([\s\S]*?)<\/cim:Pnode.type>/g, sub, context, true);
            /**
             * Price node usage: 
            'Control Area'
            'Regulation Region'
            'Price Zone'
            'Spin Region'
            'Non-Spin Region'
             * 'Price Hub'
             */
            obj["usage"] = base.parse_element (/<cim:Pnode.usage>([\s\S]*?)<\/cim:Pnode.usage>/g, sub, context, true);
            /**
             * 
             */
            obj["SubControlArea"] = base.parse_attribute (/<cim:Pnode.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RTO"] = base.parse_attribute (/<cim:Pnode.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Pnode;
            if (null == bucket)
                context.parsed.Pnode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Individual pricing node based on Pnode
         */
        function parse_IndividualPnode (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Pnode (context, sub);
            obj.cls = "IndividualPnode";
            /**
             * 
             */
            obj["MktConnectivityNode"] = base.parse_attribute (/<cim:IndividualPnode.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["GenDistributionFactor"] = base.parse_attribute (/<cim:IndividualPnode.GenDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["LoadDistributionFactor"] = base.parse_attribute (/<cim:IndividualPnode.LoadDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.IndividualPnode;
            if (null == bucket)
                context.parsed.IndividualPnode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The energy consumption of a generating resource to complete a start-up from the StartUpEnergyCurve.
         * Definition of the StartUpEnergyCurve includes, xvalue as the cooling time and y1value as the MW value.
         */
        function parse_StartUpEnergyCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "StartUpEnergyCurve";
            /**
             * 
             */
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:StartUpEnergyCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.StartUpEnergyCurve;
            if (null == bucket)
                context.parsed.StartUpEnergyCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This is the cureve that describes the load reduction time.
         * Relationship between time (Y1-axis) vs. MW (X-axis).
         */
        function parse_LoadReductionTimeCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "LoadReductionTimeCurve";
            /**
             * type of the curve: Possible values are but not limited to:
             * Max, Min,
             */
            obj["loadReductionTimeCurveType"] = base.parse_element (/<cim:LoadReductionTimeCurve.loadReductionTimeCurveType>([\s\S]*?)<\/cim:LoadReductionTimeCurve.loadReductionTimeCurveType>/g, sub, context, true);
            bucket = context.parsed.LoadReductionTimeCurve;
            if (null == bucket)
                context.parsed.LoadReductionTimeCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970: Generation: Production:HeatRateCurve
         */
        function parse_MktHeatRateCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Production.parse_HeatRateCurve (context, sub);
            obj.cls = "MktHeatRateCurve";
            /**
             * 
             */
            obj["ResourceVerifiableCosts"] = base.parse_attribute (/<cim:MktHeatRateCurve.ResourceVerifiableCosts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:MktHeatRateCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MktHeatRateCurve;
            if (null == bucket)
                context.parsed.MktHeatRateCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A HostControlArea has a set of tie points and a set of generator controls (i.e., AGC).
         * It also has a total load, including transmission and distribution losses.
         */
        function parse_HostControlArea (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "HostControlArea";
            /**
             * The area's present control mode: (CF = constant frequency) or (CTL = constant tie-line) or (TLB = tie-line bias) or (OFF = off control)
             */
            obj["areaControlMode"] = base.parse_element (/<cim:HostControlArea.areaControlMode>([\s\S]*?)<\/cim:HostControlArea.areaControlMode>/g, sub, context, true);
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:HostControlArea.endEffectiveDate>([\s\S]*?)<\/cim:HostControlArea.endEffectiveDate>/g, sub, context, true));
            /**
             * The present power system frequency set point for automatic generation control
             */
            obj["freqSetPoint"] = base.parse_element (/<cim:HostControlArea.freqSetPoint>([\s\S]*?)<\/cim:HostControlArea.freqSetPoint>/g, sub, context, true);
            /**
             * The control area's frequency bias factor, in MW/0.1 Hz, for automatic generation control (AGC)
             */
            obj["frequencyBiasFactor"] = base.to_float (base.parse_element (/<cim:HostControlArea.frequencyBiasFactor>([\s\S]*?)<\/cim:HostControlArea.frequencyBiasFactor>/g, sub, context, true));
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:HostControlArea.startEffectiveDate>([\s\S]*?)<\/cim:HostControlArea.startEffectiveDate>/g, sub, context, true));
            /**
             * A ControlAreaCompany controls a ControlArea.
             */
            obj["Controls"] = base.parse_attribute (/<cim:HostControlArea.Controls\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["AdjacentCASet"] = base.parse_attribute (/<cim:HostControlArea.AdjacentCASet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RTO"] = base.parse_attribute (/<cim:HostControlArea.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.HostControlArea;
            if (null == bucket)
                context.parsed.HostControlArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model to support processing of reliability must run units.
         */
        function parse_RMRStartUpEnergyCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "RMRStartUpEnergyCurve";
            /**
             * 
             */
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:RMRStartUpEnergyCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RMRStartUpEnergyCurve;
            if (null == bucket)
                context.parsed.RMRStartUpEnergyCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Transmission Access Charge Area.
         * Charges assessed, on behalf of the Participating Transmission Owner, to parties who require access to the controlled grid.
         */
        function parse_TACArea (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TACArea";
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:TACArea.endEffectiveDate>([\s\S]*?)<\/cim:TACArea.endEffectiveDate>/g, sub, context, true));
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:TACArea.startEffectiveDate>([\s\S]*?)<\/cim:TACArea.startEffectiveDate>/g, sub, context, true));
            bucket = context.parsed.TACArea;
            if (null == bucket)
                context.parsed.TACArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Allows definition of reliablity areas (eg load pockets) within the ISO/RTO
         */
        function parse_LocalReliabilityArea (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "LocalReliabilityArea";
            /**
             * 
             */
            obj["RTO"] = base.parse_attribute (/<cim:LocalReliabilityArea.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.LocalReliabilityArea;
            if (null == bucket)
                context.parsed.LocalReliabilityArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model to support processing of reliability must run units.
         */
        function parse_RMRStartUpTimeCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "RMRStartUpTimeCurve";
            /**
             * 
             */
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:RMRStartUpTimeCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RMRStartUpTimeCurve;
            if (null == bucket)
                context.parsed.RMRStartUpTimeCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class represents the physical characteristc of a generator regarding the regulating limit
         */
        function parse_RegulatingLimit (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "RegulatingLimit";
            obj["highLimit"] = base.parse_element (/<cim:RegulatingLimit.highLimit>([\s\S]*?)<\/cim:RegulatingLimit.highLimit>/g, sub, context, true);
            obj["lowLimit"] = base.parse_element (/<cim:RegulatingLimit.lowLimit>([\s\S]*?)<\/cim:RegulatingLimit.lowLimit>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:RegulatingLimit.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RegulatingLimit;
            if (null == bucket)
                context.parsed.RegulatingLimit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Indicates Control Area associated with self-schedule.
         */
        function parse_ControlAreaDesignation (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ControlAreaDesignation";
            /**
             * Attained.
             */
            obj["attained"] = base.parse_element (/<cim:ControlAreaDesignation.attained>([\s\S]*?)<\/cim:ControlAreaDesignation.attained>/g, sub, context, true);
            /**
             * Native.
             */
            obj["native"] = base.parse_element (/<cim:ControlAreaDesignation.native>([\s\S]*?)<\/cim:ControlAreaDesignation.native>/g, sub, context, true);
            bucket = context.parsed.ControlAreaDesignation;
            if (null == bucket)
                context.parsed.ControlAreaDesignation = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The maximum Startup costs and time as a function of down time.
         * Relationship between unit startup cost (Y1-axis) vs. unit elapsed down time (X-axis). This is used to validate the information provided in the Bid.
         */
        function parse_MaxStartUpCostCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "MaxStartUpCostCurve";
            bucket = context.parsed.MaxStartUpCostCurve;
            if (null == bucket)
                context.parsed.MaxStartUpCostCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An aggregated pricing node is a specialized type of pricing node used to model items such as System Zone, Default Price Zone, Custom Price Zone, Control Area, Aggregated Generation, Aggregated Particpating Load, Aggregated Non-Participating Load, Trading Hub, Designated Control Area(DCA) Zone
         */
        function parse_AggregatedPnode (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Pnode (context, sub);
            obj.cls = "AggregatedPnode";
            /**
             * Aggregate Price Node Types
             */
            obj["apnodeType"] = base.parse_element (/<cim:AggregatedPnode.apnodeType>([\s\S]*?)<\/cim:AggregatedPnode.apnodeType>/g, sub, context, true);
            /**
             * Designated Control Area participation in LMP price measurement
            
            'Y' - Participates in both Local Market Power Mitigation (LMPM) and System Market Power Mitigation (SMPM)
            'N' - Not included in LMP price measures
            'S' - Participatesin SMPM price measures
             * 'L' - Participatesin LMPM price measures
             */
            obj["participationCategory"] = base.parse_element (/<cim:AggregatedPnode.participationCategory>([\s\S]*?)<\/cim:AggregatedPnode.participationCategory>/g, sub, context, true);
            /**
             * 
             */
            obj["PnodeDistributionFactor"] = base.parse_attribute (/<cim:AggregatedPnode.PnodeDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AggregatedPnode;
            if (null == bucket)
                context.parsed.AggregatedPnode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Participation factors per Cnode.
         * Used to calculate "participation" of Cnode in an AggregateNode. Each Cnode associated to an AggregateNode would be assigned a participation factor for its participation within the AggregateNode.
         */
        function parse_CnodeDistributionFactor (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "CnodeDistributionFactor";
            /**
             * Used to calculate "participation" of Cnode in an AggregateNode
             */
            obj["factor"] = base.to_float (base.parse_element (/<cim:CnodeDistributionFactor.factor>([\s\S]*?)<\/cim:CnodeDistributionFactor.factor>/g, sub, context, true));
            /**
             * Point of delivery loss factor
             */
            obj["podLossFactor"] = base.to_float (base.parse_element (/<cim:CnodeDistributionFactor.podLossFactor>([\s\S]*?)<\/cim:CnodeDistributionFactor.podLossFactor>/g, sub, context, true));
            /**
             * 
             */
            obj["AggregateNode"] = base.parse_attribute (/<cim:CnodeDistributionFactor.AggregateNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["MktConnectivityNode"] = base.parse_attribute (/<cim:CnodeDistributionFactor.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["HostControlArea"] = base.parse_attribute (/<cim:CnodeDistributionFactor.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["SubControlArea"] = base.parse_attribute (/<cim:CnodeDistributionFactor.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CnodeDistributionFactor;
            if (null == bucket)
                context.parsed.CnodeDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Designated Congestion Area Definition (DCA)
         */
        function parse_CongestionArea (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AggregatedPnode (context, sub);
            obj.cls = "CongestionArea";
            bucket = context.parsed.CongestionArea;
            if (null == bucket)
                context.parsed.CongestionArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides a reference to the Market Power Mitigation test identifiers and methods for the results of the DA or RT markets.
         * Specific data is the test identifier (Price, Conduct, or Impact) and the test method (System MPM, Local MPM, Alternate System MPM, or Alternate Local MPM).
         */
        function parse_MPMTestCategory (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MPMTestCategory";
            /**
             * 1 - Global Price Test
            2 - Global Conduct Test
            3 - Global Impact Test
            4 - Local Price Test
            5 - Local Conduct Test
             * 6 - Local Impact Test
             */
            obj["testIdentifier"] = base.parse_element (/<cim:MPMTestCategory.testIdentifier>([\s\S]*?)<\/cim:MPMTestCategory.testIdentifier>/g, sub, context, true);
            /**
             * The method of performing the market power monitoring.
             * Examples are Normal (default) thresholds or Alternate thresholds.
             */
            obj["testMethod"] = base.parse_element (/<cim:MPMTestCategory.testMethod>([\s\S]*?)<\/cim:MPMTestCategory.testMethod>/g, sub, context, true);
            /**
             * Nature of threshold data:
            'M' - Mitigation threshold
             * 'R' - Reporting threshold
             */
            obj["purposeFlag"] = base.parse_element (/<cim:MPMTestCategory.purposeFlag>([\s\S]*?)<\/cim:MPMTestCategory.purposeFlag>/g, sub, context, true);
            bucket = context.parsed.MPMTestCategory;
            if (null == bucket)
                context.parsed.MPMTestCategory = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A specialized class of type AggregatedNode type.
         * Defines Load Aggregation Points.
         */
        function parse_LoadAggregationPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AggregateNode (context, sub);
            obj.cls = "LoadAggregationPoint";
            bucket = context.parsed.LoadAggregationPoint;
            if (null == bucket)
                context.parsed.LoadAggregationPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Price of oil in monetary units
         */
        function parse_OilPrice (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OilPrice";
            /**
             * The average oil price at a defined fuel region.
             */
            obj["oilPriceIndex"] = base.to_float (base.parse_element (/<cim:OilPrice.oilPriceIndex>([\s\S]*?)<\/cim:OilPrice.oilPriceIndex>/g, sub, context, true));
            /**
             * 
             */
            obj["FuelRegion"] = base.parse_attribute (/<cim:OilPrice.FuelRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.OilPrice;
            if (null == bucket)
                context.parsed.OilPrice = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Configuration Member of CCP Configuration.
         */
        function parse_CombinedCycleConfigurationMember (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "CombinedCycleConfigurationMember";
            /**
             * primary configuration.
             */
            obj["primary"] = base.to_boolean (base.parse_element (/<cim:CombinedCycleConfigurationMember.primary>([\s\S]*?)<\/cim:CombinedCycleConfigurationMember.primary>/g, sub, context, true));
            /**
             * Steam plant.
             */
            obj["steam"] = base.to_boolean (base.parse_element (/<cim:CombinedCycleConfigurationMember.steam>([\s\S]*?)<\/cim:CombinedCycleConfigurationMember.steam>/g, sub, context, true));
            /**
             * 
             */
            obj["MktThermalGeneratingUnit"] = base.parse_attribute (/<cim:CombinedCycleConfigurationMember.MktThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["CombinedCycleConfiguration"] = base.parse_attribute (/<cim:CombinedCycleConfigurationMember.CombinedCycleConfiguration\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.CombinedCycleConfigurationMember;
            if (null == bucket)
                context.parsed.CombinedCycleConfigurationMember = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class represent the bid price cap.
         */
        function parse_BidPriceCap (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "BidPriceCap";
            /**
             * Market Type of the cap (DAM or RTM)
             */
            obj["marketType"] = base.parse_element (/<cim:BidPriceCap.marketType>([\s\S]*?)<\/cim:BidPriceCap.marketType>/g, sub, context, true);
            /**
             * Bid Floor, ($/MWH)
             */
            obj["bidFloor"] = base.parse_element (/<cim:BidPriceCap.bidFloor>([\s\S]*?)<\/cim:BidPriceCap.bidFloor>/g, sub, context, true);
            /**
             * Bid Ceiling ($/MWH)
             */
            obj["bidCeiling"] = base.parse_element (/<cim:BidPriceCap.bidCeiling>([\s\S]*?)<\/cim:BidPriceCap.bidCeiling>/g, sub, context, true);
            /**
             * Bid Default Price($/MWH)
             */
            obj["defaultPrice"] = base.parse_element (/<cim:BidPriceCap.defaultPrice>([\s\S]*?)<\/cim:BidPriceCap.defaultPrice>/g, sub, context, true);
            /**
             * Bid Floor ($/MWH) for generic AS versus a specific market product
             */
            obj["bidFloorAS"] = base.parse_element (/<cim:BidPriceCap.bidFloorAS>([\s\S]*?)<\/cim:BidPriceCap.bidFloorAS>/g, sub, context, true);
            /**
             * Bid Ceiling ($/MWH) for generic AS versus a specific market product
             */
            obj["bidCeilingAS"] = base.parse_element (/<cim:BidPriceCap.bidCeilingAS>([\s\S]*?)<\/cim:BidPriceCap.bidCeilingAS>/g, sub, context, true);
            /**
             * 
             */
            obj["MarketProduct"] = base.parse_attribute (/<cim:BidPriceCap.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.BidPriceCap;
            if (null == bucket)
                context.parsed.BidPriceCap = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * IDC (Interchange Distribution Calulator) sends data for a TLR (Transmission Loading Relief).
         */
        function parse_FlowgateRelief (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FlowgateRelief";
            /**
             * Date/Time when record becomes effective
             * Used to determine when a record becomes effective.
             */
            obj["effectiveDate"] = base.to_datetime (base.parse_element (/<cim:FlowgateRelief.effectiveDate>([\s\S]*?)<\/cim:FlowgateRelief.effectiveDate>/g, sub, context, true));
            /**
             * Date/Time when record is no longer effective
             * Used to determine when a record is no longer effective
             */
            obj["terminateDate"] = base.to_datetime (base.parse_element (/<cim:FlowgateRelief.terminateDate>([\s\S]*?)<\/cim:FlowgateRelief.terminateDate>/g, sub, context, true));
            /**
             * Energy Flow level that should be maintained according to the TLR rules as specified by the IDC.
             * For Realtime Markets use in dispatch to control constraints under TLR and calculate unconstrained market flows
             */
            obj["idcTargetMktFlow"] = base.parse_element (/<cim:FlowgateRelief.idcTargetMktFlow>([\s\S]*?)<\/cim:FlowgateRelief.idcTargetMktFlow>/g, sub, context, true);
            /**
             * 
             */
            obj["Flowgate"] = base.parse_attribute (/<cim:FlowgateRelief.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.FlowgateRelief;
            if (null == bucket)
                context.parsed.FlowgateRelief = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Forbbiden region is operating ranges where the units are unable to maintain steady operation without causing equipment damage.
         * The four attributes that define a forbidden region are the low MW, the High MW, the crossing time, and the crossing cost.
         */
        function parse_ForbiddenRegion (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ForbiddenRegion";
            /**
             * Cost associated with crossing the forbidden region
             */
            obj["crossingCost"] = base.to_float (base.parse_element (/<cim:ForbiddenRegion.crossingCost>([\s\S]*?)<\/cim:ForbiddenRegion.crossingCost>/g, sub, context, true));
            /**
             * Time to cross the forbidden region in minutes.
             */
            obj["crossTime"] = base.parse_element (/<cim:ForbiddenRegion.crossTime>([\s\S]*?)<\/cim:ForbiddenRegion.crossTime>/g, sub, context, true);
            /**
             * High end of the region definition
             */
            obj["highMW"] = base.to_float (base.parse_element (/<cim:ForbiddenRegion.highMW>([\s\S]*?)<\/cim:ForbiddenRegion.highMW>/g, sub, context, true));
            /**
             * Low end of the region definition.
             */
            obj["lowMW"] = base.to_float (base.parse_element (/<cim:ForbiddenRegion.lowMW>([\s\S]*?)<\/cim:ForbiddenRegion.lowMW>/g, sub, context, true));
            bucket = context.parsed.ForbiddenRegion;
            if (null == bucket)
                context.parsed.ForbiddenRegion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Certain skills are required and shall be certified in order for a person (typically a member of a crew) to be qualified to work on types of equipment.
         */
        function parse_MarketQualificationRequirement (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MarketQualificationRequirement";
            /**
             * Effective date of the privilege, terminate date of the privilege, or effective date of the application for the organization
             */
            obj["effectiveDate"] = base.to_datetime (base.parse_element (/<cim:MarketQualificationRequirement.effectiveDate>([\s\S]*?)<\/cim:MarketQualificationRequirement.effectiveDate>/g, sub, context, true));
            /**
             * This is the terminate date of the application for the organization
             * The specific organization can no longer access the application as of the terminate date
             */
            obj["expirationDate"] = base.to_datetime (base.parse_element (/<cim:MarketQualificationRequirement.expirationDate>([\s\S]*?)<\/cim:MarketQualificationRequirement.expirationDate>/g, sub, context, true));
            /**
             * Qualification identifier.
             */
            obj["qualificationID"] = base.parse_element (/<cim:MarketQualificationRequirement.qualificationID>([\s\S]*?)<\/cim:MarketQualificationRequirement.qualificationID>/g, sub, context, true);
            /**
             * The status of the privilege.
             * Shows the status of the user�s qualification.
             */
            obj["status"] = base.parse_element (/<cim:MarketQualificationRequirement.status>([\s\S]*?)<\/cim:MarketQualificationRequirement.status>/g, sub, context, true);
            /**
             * This is the name of the status of the qualification and is used to display the status of the user's or organization's status.
             */
            obj["statusType"] = base.parse_element (/<cim:MarketQualificationRequirement.statusType>([\s\S]*?)<\/cim:MarketQualificationRequirement.statusType>/g, sub, context, true);
            bucket = context.parsed.MarketQualificationRequirement;
            if (null == bucket)
                context.parsed.MarketQualificationRequirement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * List of resources that can be substituted for within the bounds of a Contract definition.
         * This class has a precedence and a resource.
         */
        function parse_SubstitutionResourceList (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SubstitutionResourceList";
            /**
             * An indicator of the order a resource should be substituted.
             * The lower the number the higher the precedence.
             */
            obj["precedence"] = base.parse_element (/<cim:SubstitutionResourceList.precedence>([\s\S]*?)<\/cim:SubstitutionResourceList.precedence>/g, sub, context, true);
            /**
             * 
             */
            obj["TransmissionContractRight"] = base.parse_attribute (/<cim:SubstitutionResourceList.TransmissionContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:SubstitutionResourceList.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SubstitutionResourceList;
            if (null == bucket)
                context.parsed.SubstitutionResourceList = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Distribution amoung resources at the sink point or source point
         */
        function parse_ContractDistributionFactor (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ContractDistributionFactor";
            /**
             * MW value that this resource provides to the overall contract.
             */
            obj["factor"] = base.to_float (base.parse_element (/<cim:ContractDistributionFactor.factor>([\s\S]*?)<\/cim:ContractDistributionFactor.factor>/g, sub, context, true));
            /**
             * This value will be set to YES if the referenced Cnode is defined as the source point in the contract.
             */
            obj["sourceFlag"] = base.parse_element (/<cim:ContractDistributionFactor.sourceFlag>([\s\S]*?)<\/cim:ContractDistributionFactor.sourceFlag>/g, sub, context, true);
            /**
             * This value will be set to YES if the referenced Cnode is defined as the sink point in the contract.
             */
            obj["sinkFlag"] = base.parse_element (/<cim:ContractDistributionFactor.sinkFlag>([\s\S]*?)<\/cim:ContractDistributionFactor.sinkFlag>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:ContractDistributionFactor.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["Flowgate"] = base.parse_attribute (/<cim:ContractDistributionFactor.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["TransmissionContractRight"] = base.parse_attribute (/<cim:ContractDistributionFactor.TransmissionContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ContractDistributionFactor;
            if (null == bucket)
                context.parsed.ContractDistributionFactor = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model to support processing of reliability must run units.
         */
        function parse_RMRStartUpFuelCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "RMRStartUpFuelCurve";
            /**
             * 
             */
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:RMRStartUpFuelCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RMRStartUpFuelCurve;
            if (null == bucket)
                context.parsed.RMRStartUpFuelCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A specialized class of AggregatedNode type.
         * Defines the MarketRegions. Regions could be system Market Regions, Energy Regions or Ancillary Service Regions.
         */
        function parse_MarketRegion (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AggregateNode (context, sub);
            obj.cls = "MarketRegion";
            bucket = context.parsed.MarketRegion;
            if (null == bucket)
                context.parsed.MarketRegion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Relationship between unit fuel cost in $/kWh(Y-axis) and  unit output in MW (X-axis).
         */
        function parse_FuelCostCurve (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_Curve (context, sub);
            obj.cls = "FuelCostCurve";
            /**
             * 
             */
            obj["RegisteredGenerator"] = base.parse_attribute (/<cim:FuelCostCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.FuelCostCurve;
            if (null == bucket)
                context.parsed.FuelCostCurve = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An area defined for the purpose of tracking interchange with surrounding areas via tie points; may or may not serve as a control area.
         */
        function parse_SubControlArea (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_PowerSystemResource (context, sub);
            obj.cls = "SubControlArea";
            /**
             * Market area short name, which is the regulation zone.
             * It references AGC regulation zone name.
             */
            obj["areaShortName"] = base.parse_element (/<cim:SubControlArea.areaShortName>([\s\S]*?)<\/cim:SubControlArea.areaShortName>/g, sub, context, true);
            /**
             * Loss estimate constant coefficient
             */
            obj["constantCoefficient"] = base.to_float (base.parse_element (/<cim:SubControlArea.constantCoefficient>([\s\S]*?)<\/cim:SubControlArea.constantCoefficient>/g, sub, context, true));
            /**
             * Used in conjunction with the InternalCA flag.
             * If the InternalCA flag is YES, this flag does not apply. If the InternaCA flag is NO, this flag provides an indication of AdjacentCA (NO) or Embedded CA (YES).
             */
            obj["embeddedControlArea"] = base.parse_element (/<cim:SubControlArea.embeddedControlArea>([\s\S]*?)<\/cim:SubControlArea.embeddedControlArea>/g, sub, context, true);
            /**
             * end effective date
             */
            obj["endEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:SubControlArea.endEffectiveDate>([\s\S]*?)<\/cim:SubControlArea.endEffectiveDate>/g, sub, context, true));
            /**
             * A Yes/No indication that this control area is contained internal to the system.
             */
            obj["internalCA"] = base.parse_element (/<cim:SubControlArea.internalCA>([\s\S]*?)<\/cim:SubControlArea.internalCA>/g, sub, context, true);
            /**
             * Loss estimate linear coefficient
             */
            obj["linearCoefficient"] = base.to_float (base.parse_element (/<cim:SubControlArea.linearCoefficient>([\s\S]*?)<\/cim:SubControlArea.linearCoefficient>/g, sub, context, true));
            /**
             * Indication that this control area is the local control area.
             */
            obj["localCA"] = base.parse_element (/<cim:SubControlArea.localCA>([\s\S]*?)<\/cim:SubControlArea.localCA>/g, sub, context, true);
            /**
             * Maximum amount of self schedule MWs allowed for an embedded control area.
             */
            obj["maxSelfSchedMW"] = base.to_float (base.parse_element (/<cim:SubControlArea.maxSelfSchedMW>([\s\S]*?)<\/cim:SubControlArea.maxSelfSchedMW>/g, sub, context, true));
            /**
             * Minimum amount of self schedule MW allowed for an embedded control area.
             */
            obj["minSelfSchedMW"] = base.to_float (base.parse_element (/<cim:SubControlArea.minSelfSchedMW>([\s\S]*?)<\/cim:SubControlArea.minSelfSchedMW>/g, sub, context, true));
            /**
             * Loss estimate quadratic coefficient
             */
            obj["quadraticCoefficient"] = base.to_float (base.parse_element (/<cim:SubControlArea.quadraticCoefficient>([\s\S]*?)<\/cim:SubControlArea.quadraticCoefficient>/g, sub, context, true));
            /**
             * start effective date
             */
            obj["startEffectiveDate"] = base.to_datetime (base.parse_element (/<cim:SubControlArea.startEffectiveDate>([\s\S]*?)<\/cim:SubControlArea.startEffectiveDate>/g, sub, context, true));
            /**
             * The interchange area  may operate as a control area
             */
            obj["HostControlArea"] = base.parse_attribute (/<cim:SubControlArea.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["AdjacentCASet"] = base.parse_attribute (/<cim:SubControlArea.AdjacentCASet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["AreaReserveSpecification"] = base.parse_attribute (/<cim:SubControlArea.AreaReserveSpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RTO"] = base.parse_attribute (/<cim:SubControlArea.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SubControlArea;
            if (null == bucket)
                context.parsed.SubControlArea = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Subclass of IEC61970:Core:ConductingEquipment
         */
        function parse_MktConductingEquipment (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_ConductingEquipment (context, sub);
            obj.cls = "MktConductingEquipment";
            bucket = context.parsed.MktConductingEquipment;
            if (null == bucket)
                context.parsed.MktConductingEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ContractDistributionFactor: parse_ContractDistributionFactor,
                parse_OrgResOwnership: parse_OrgResOwnership,
                parse_CombinedCycleTransitionState: parse_CombinedCycleTransitionState,
                parse_TACArea: parse_TACArea,
                parse_ResourceStartupCost: parse_ResourceStartupCost,
                parse_MktContingency: parse_MktContingency,
                parse_RUCZone: parse_RUCZone,
                parse_FuelRegion: parse_FuelRegion,
                parse_HostControlArea: parse_HostControlArea,
                parse_AggregatedPnode: parse_AggregatedPnode,
                parse_MSSAggregation: parse_MSSAggregation,
                parse_OrgPnodeAllocation: parse_OrgPnodeAllocation,
                parse_AdjacentCASet: parse_AdjacentCASet,
                parse_CombinedCycleConfigurationMember: parse_CombinedCycleConfigurationMember,
                parse_Flowgate: parse_Flowgate,
                parse_ResourceOperationMaintenanceCost: parse_ResourceOperationMaintenanceCost,
                parse_MarketPerson: parse_MarketPerson,
                parse_LocalReliabilityArea: parse_LocalReliabilityArea,
                parse_RMRHeatRateCurve: parse_RMRHeatRateCurve,
                parse_MPMTestCategory: parse_MPMTestCategory,
                parse_FlowgatePartner: parse_FlowgatePartner,
                parse_FuelCostCurve: parse_FuelCostCurve,
                parse_MSSZone: parse_MSSZone,
                parse_RTO: parse_RTO,
                parse_StartUpFuelCurve: parse_StartUpFuelCurve,
                parse_CombinedCycleLogicalConfiguration: parse_CombinedCycleLogicalConfiguration,
                parse_RegisteredGenerator: parse_RegisteredGenerator,
                parse_PnodeDistributionFactor: parse_PnodeDistributionFactor,
                parse_GasPrice: parse_GasPrice,
                parse_ContractRight: parse_ContractRight,
                parse_LoadRatio: parse_LoadRatio,
                parse_CombinedCycleConfiguration: parse_CombinedCycleConfiguration,
                parse_SchedulingPoint: parse_SchedulingPoint,
                parse_MktHeatRateCurve: parse_MktHeatRateCurve,
                parse_StartUpEnergyCurve: parse_StartUpEnergyCurve,
                parse_FlowgateRelief: parse_FlowgateRelief,
                parse_ResourceVerifiableCosts: parse_ResourceVerifiableCosts,
                parse_TransmissionRightChain: parse_TransmissionRightChain,
                parse_RMRStartUpCostCurve: parse_RMRStartUpCostCurve,
                parse_ControlAreaDesignation: parse_ControlAreaDesignation,
                parse_LoadReductionTimeCurve: parse_LoadReductionTimeCurve,
                parse_MeteredSubSystem: parse_MeteredSubSystem,
                parse_MaxStartUpCostCurve: parse_MaxStartUpCostCurve,
                parse_MktCombinedCyclePlant: parse_MktCombinedCyclePlant,
                parse_SubstitutionResourceList: parse_SubstitutionResourceList,
                parse_RegisteredLoad: parse_RegisteredLoad,
                parse_SubControlArea: parse_SubControlArea,
                parse_AggregateNode: parse_AggregateNode,
                parse_FormerReference: parse_FormerReference,
                parse_MPMTestThreshold: parse_MPMTestThreshold,
                parse_Pnode: parse_Pnode,
                parse_MarketRegion: parse_MarketRegion,
                parse_RMRStartUpTimeCurve: parse_RMRStartUpTimeCurve,
                parse_WheelingCounterParty: parse_WheelingCounterParty,
                parse_IndividualPnode: parse_IndividualPnode,
                parse_ForbiddenRegion: parse_ForbiddenRegion,
                parse_SchedulingCoordinator: parse_SchedulingCoordinator,
                parse_RegulatingLimit: parse_RegulatingLimit,
                parse_MarketSkill: parse_MarketSkill,
                parse_ResourceCapacity: parse_ResourceCapacity,
                parse_LoadAggregationPoint: parse_LoadAggregationPoint,
                parse_MarketQualificationRequirement: parse_MarketQualificationRequirement,
                parse_OilPrice: parse_OilPrice,
                parse_MktThermalGeneratingUnit: parse_MktThermalGeneratingUnit,
                parse_CnodeDistributionFactor: parse_CnodeDistributionFactor,
                parse_MktConductingEquipment: parse_MktConductingEquipment,
                parse_RMRStartUpFuelCurve: parse_RMRStartUpFuelCurve,
                parse_RegisteredInterTie: parse_RegisteredInterTie,
                parse_RMRStartUpEnergyCurve: parse_RMRStartUpEnergyCurve,
                parse_SchedulingCoordinatorUser: parse_SchedulingCoordinatorUser,
                parse_BidPriceCap: parse_BidPriceCap,
                parse_FlowgateValue: parse_FlowgateValue,
                parse_ResourceAncillaryServiceQualification: parse_ResourceAncillaryServiceQualification,
                parse_CongestionArea: parse_CongestionArea
            }
        );
    }
);