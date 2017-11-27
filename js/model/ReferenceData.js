define
(
    ["model/base", "model/Common", "model/Contingency", "model/Core", "model/MarketCommon", "model/MarketOpCommon", "model/Production"],
    /**
     * Market static reference data.
     *
     */
    function (base, Common, Contingency, Core, MarketCommon, MarketOpCommon, Production)
    {

        /**
         * This class model the various capacities of a resource.
         *
         * A resource may have numbers of capacities related to operating, ancillary services, energy trade and so forth. The types are but not limited to:
         *
         */
        class ResourceCapacity extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ResourceCapacity;
                if (null == bucket)
                   cim_data.ResourceCapacity = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceCapacity[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceCapacity";
                base.parse_element (/<cim:ResourceCapacity.capacityType>([\s\S]*?)<\/cim:ResourceCapacity.capacityType>/g, obj, "capacityType", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCapacity.maximumCapacity>([\s\S]*?)<\/cim:ResourceCapacity.maximumCapacity>/g, obj, "maximumCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCapacity.minimumCapacity>([\s\S]*?)<\/cim:ResourceCapacity.minimumCapacity>/g, obj, "minimumCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCapacity.defaultCapacity>([\s\S]*?)<\/cim:ResourceCapacity.defaultCapacity>/g, obj, "defaultCapacity", base.to_string, sub, context);

                var bucket = context.parsed.ResourceCapacity;
                if (null == bucket)
                   context.parsed.ResourceCapacity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ResourceCapacity", "capacityType", base.from_string, fields);
                base.export_element (obj, "ResourceCapacity", "maximumCapacity", base.from_string, fields);
                base.export_element (obj, "ResourceCapacity", "minimumCapacity", base.from_string, fields);
                base.export_element (obj, "ResourceCapacity", "defaultCapacity", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Ancillary Services that a resource is qualified to provide.
         *
         */
        class ResourceAncillaryServiceQualification extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ResourceAncillaryServiceQualification;
                if (null == bucket)
                   cim_data.ResourceAncillaryServiceQualification = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceAncillaryServiceQualification[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceAncillaryServiceQualification";
                base.parse_element (/<cim:ResourceAncillaryServiceQualification.certifiedCapacity>([\s\S]*?)<\/cim:ResourceAncillaryServiceQualification.certifiedCapacity>/g, obj, "certifiedCapacity", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAncillaryServiceQualification.endEffectiveDate>([\s\S]*?)<\/cim:ResourceAncillaryServiceQualification.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ResourceAncillaryServiceQualification.market>([\s\S]*?)<\/cim:ResourceAncillaryServiceQualification.market>/g, obj, "market", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceAncillaryServiceQualification.qualificationFlag>([\s\S]*?)<\/cim:ResourceAncillaryServiceQualification.qualificationFlag>/g, obj, "qualificationFlag", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceAncillaryServiceQualification.startEffectiveDate>([\s\S]*?)<\/cim:ResourceAncillaryServiceQualification.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ResourceAncillaryServiceQualification.type>([\s\S]*?)<\/cim:ResourceAncillaryServiceQualification.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attribute (/<cim:ResourceAncillaryServiceQualification.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.ResourceAncillaryServiceQualification;
                if (null == bucket)
                   context.parsed.ResourceAncillaryServiceQualification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ResourceAncillaryServiceQualification", "certifiedCapacity", base.from_float, fields);
                base.export_element (obj, "ResourceAncillaryServiceQualification", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "ResourceAncillaryServiceQualification", "market", base.from_string, fields);
                base.export_element (obj, "ResourceAncillaryServiceQualification", "qualificationFlag", base.from_string, fields);
                base.export_element (obj, "ResourceAncillaryServiceQualification", "startEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "ResourceAncillaryServiceQualification", "type", base.from_string, fields);
                base.export_attribute (obj, "ResourceAncillaryServiceQualification", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Contingency
         *
         */
        class MktContingency extends Contingency.Contingency
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktContingency;
                if (null == bucket)
                   cim_data.MktContingency = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktContingency[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Contingency.Contingency.prototype.parse.call (this, context, sub);
                obj.cls = "MktContingency";
                base.parse_element (/<cim:MktContingency.loadRolloverFlag>([\s\S]*?)<\/cim:MktContingency.loadRolloverFlag>/g, obj, "loadRolloverFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:MktContingency.ltcControlFlag>([\s\S]*?)<\/cim:MktContingency.ltcControlFlag>/g, obj, "ltcControlFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:MktContingency.participationFactorSet>([\s\S]*?)<\/cim:MktContingency.participationFactorSet>/g, obj, "participationFactorSet", base.to_string, sub, context);
                base.parse_element (/<cim:MktContingency.screeningFlag>([\s\S]*?)<\/cim:MktContingency.screeningFlag>/g, obj, "screeningFlag", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:MktContingency.TransferInterfaceSolutionB\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterfaceSolutionB", sub, context);
                base.parse_attribute (/<cim:MktContingency.TransferInterfaceSolutionA\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransferInterfaceSolutionA", sub, context);

                var bucket = context.parsed.MktContingency;
                if (null == bucket)
                   context.parsed.MktContingency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Contingency"](obj, exporters, false);

                base.export_element (obj, "MktContingency", "loadRolloverFlag", base.from_boolean, fields);
                base.export_element (obj, "MktContingency", "ltcControlFlag", base.from_boolean, fields);
                base.export_element (obj, "MktContingency", "participationFactorSet", base.from_string, fields);
                base.export_element (obj, "MktContingency", "screeningFlag", base.from_boolean, fields);
                base.export_attribute (obj, "MktContingency", "TransferInterfaceSolutionB", fields);
                base.export_attribute (obj, "MktContingency", "TransferInterfaceSolutionA", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Model to support processing of reliability must run units.
         *
         */
        class RMRStartUpCostCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RMRStartUpCostCurve;
                if (null == bucket)
                   cim_data.RMRStartUpCostCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RMRStartUpCostCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "RMRStartUpCostCurve";
                base.parse_attribute (/<cim:RMRStartUpCostCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.RMRStartUpCostCurve;
                if (null == bucket)
                   context.parsed.RMRStartUpCostCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_attribute (obj, "RMRStartUpCostCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class allows SC to input different distribution factors for pricing node
         *
         */
        class PnodeDistributionFactor extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PnodeDistributionFactor;
                if (null == bucket)
                   cim_data.PnodeDistributionFactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PnodeDistributionFactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PnodeDistributionFactor";
                base.parse_element (/<cim:PnodeDistributionFactor.factor>([\s\S]*?)<\/cim:PnodeDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
                base.parse_element (/<cim:PnodeDistributionFactor.offPeak>([\s\S]*?)<\/cim:PnodeDistributionFactor.offPeak>/g, obj, "offPeak", base.to_string, sub, context);
                base.parse_element (/<cim:PnodeDistributionFactor.onPeak>([\s\S]*?)<\/cim:PnodeDistributionFactor.onPeak>/g, obj, "onPeak", base.to_string, sub, context);
                base.parse_element (/<cim:PnodeDistributionFactor.podLossFactor>([\s\S]*?)<\/cim:PnodeDistributionFactor.podLossFactor>/g, obj, "podLossFactor", base.to_float, sub, context);
                base.parse_attribute (/<cim:PnodeDistributionFactor.IndividualPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IndividualPnode", sub, context);
                base.parse_attribute (/<cim:PnodeDistributionFactor.BidDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BidDistributionFactor", sub, context);

                var bucket = context.parsed.PnodeDistributionFactor;
                if (null == bucket)
                   context.parsed.PnodeDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "PnodeDistributionFactor", "factor", base.from_float, fields);
                base.export_element (obj, "PnodeDistributionFactor", "offPeak", base.from_string, fields);
                base.export_element (obj, "PnodeDistributionFactor", "onPeak", base.from_string, fields);
                base.export_element (obj, "PnodeDistributionFactor", "podLossFactor", base.from_float, fields);
                base.export_attribute (obj, "PnodeDistributionFactor", "IndividualPnode", fields);
                base.export_attribute (obj, "PnodeDistributionFactor", "BidDistributionFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Regional transmission operator.
         *
         */
        class RTO extends MarketOpCommon.MktOrganisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RTO;
                if (null == bucket)
                   cim_data.RTO = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RTO[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketOpCommon.MktOrganisation.prototype.parse.call (this, context, sub);
                obj.cls = "RTO";

                var bucket = context.parsed.RTO;
                if (null == bucket)
                   context.parsed.RTO = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MktOrganisation"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Describing users of a Scheduling Coordinator
         *
         */
        class SchedulingCoordinatorUser extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SchedulingCoordinatorUser;
                if (null == bucket)
                   cim_data.SchedulingCoordinatorUser = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SchedulingCoordinatorUser[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SchedulingCoordinatorUser";
                base.parse_element (/<cim:SchedulingCoordinatorUser.startEffectiveDate>([\s\S]*?)<\/cim:SchedulingCoordinatorUser.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:SchedulingCoordinatorUser.endEffectiveDate>([\s\S]*?)<\/cim:SchedulingCoordinatorUser.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:SchedulingCoordinatorUser.loginID>([\s\S]*?)<\/cim:SchedulingCoordinatorUser.loginID>/g, obj, "loginID", base.to_string, sub, context);
                base.parse_element (/<cim:SchedulingCoordinatorUser.loginRole>([\s\S]*?)<\/cim:SchedulingCoordinatorUser.loginRole>/g, obj, "loginRole", base.to_string, sub, context);
                base.parse_attribute (/<cim:SchedulingCoordinatorUser.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);

                var bucket = context.parsed.SchedulingCoordinatorUser;
                if (null == bucket)
                   context.parsed.SchedulingCoordinatorUser = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "SchedulingCoordinatorUser", "startEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "SchedulingCoordinatorUser", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "SchedulingCoordinatorUser", "loginID", base.from_string, fields);
                base.export_element (obj, "SchedulingCoordinatorUser", "loginRole", base.from_string, fields);
                base.export_attribute (obj, "SchedulingCoordinatorUser", "", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Day Ahead,  Network Native Load, Economic Dispatch, values used for calculation of Network Native Load (NNL) Determinator process.
         *
         */
        class FlowgateValue extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FlowgateValue;
                if (null == bucket)
                   cim_data.FlowgateValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FlowgateValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FlowgateValue";
                base.parse_element (/<cim:FlowgateValue.economicDispatchLimit>([\s\S]*?)<\/cim:FlowgateValue.economicDispatchLimit>/g, obj, "economicDispatchLimit", base.to_string, sub, context);
                base.parse_element (/<cim:FlowgateValue.effectiveDate>([\s\S]*?)<\/cim:FlowgateValue.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:FlowgateValue.firmNetworkLimit>([\s\S]*?)<\/cim:FlowgateValue.firmNetworkLimit>/g, obj, "firmNetworkLimit", base.to_string, sub, context);
                base.parse_element (/<cim:FlowgateValue.flowDirectionFlag>([\s\S]*?)<\/cim:FlowgateValue.flowDirectionFlag>/g, obj, "flowDirectionFlag", base.to_string, sub, context);
                base.parse_element (/<cim:FlowgateValue.mktFlow>([\s\S]*?)<\/cim:FlowgateValue.mktFlow>/g, obj, "mktFlow", base.to_string, sub, context);
                base.parse_element (/<cim:FlowgateValue.netFirmNetworkLimit>([\s\S]*?)<\/cim:FlowgateValue.netFirmNetworkLimit>/g, obj, "netFirmNetworkLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:FlowgateValue.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:FlowgateValue.FlowgatePartner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FlowgatePartner", sub, context);

                var bucket = context.parsed.FlowgateValue;
                if (null == bucket)
                   context.parsed.FlowgateValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "FlowgateValue", "economicDispatchLimit", base.from_string, fields);
                base.export_element (obj, "FlowgateValue", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "FlowgateValue", "firmNetworkLimit", base.from_string, fields);
                base.export_element (obj, "FlowgateValue", "flowDirectionFlag", base.from_string, fields);
                base.export_element (obj, "FlowgateValue", "mktFlow", base.from_string, fields);
                base.export_element (obj, "FlowgateValue", "netFirmNetworkLimit", base.from_string, fields);
                base.export_attribute (obj, "FlowgateValue", "Flowgate", fields);
                base.export_attribute (obj, "FlowgateValue", "FlowgatePartner", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class is defined to describe the verifiable costs associated with a generation resource.
         *
         */
        class ResourceVerifiableCosts extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ResourceVerifiableCosts;
                if (null == bucket)
                   cim_data.ResourceVerifiableCosts = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceVerifiableCosts[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceVerifiableCosts";
                base.parse_attribute (/<cim:ResourceVerifiableCosts.ResourceOperationMaintenanceCost\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceOperationMaintenanceCost", sub, context);
                base.parse_attribute (/<cim:ResourceVerifiableCosts.MktHeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktHeatRateCurve", sub, context);
                base.parse_attribute (/<cim:ResourceVerifiableCosts.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.ResourceVerifiableCosts;
                if (null == bucket)
                   context.parsed.ResourceVerifiableCosts = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_attribute (obj, "ResourceVerifiableCosts", "ResourceOperationMaintenanceCost", fields);
                base.export_attribute (obj, "ResourceVerifiableCosts", "MktHeatRateCurve", fields);
                base.export_attribute (obj, "ResourceVerifiableCosts", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The fuel consumption of a Generating Resource to complete a Start-Up.(x=cooling time) Form Startup Fuel Curve. xAxisData -&gt; cooling time, y1AxisData -&gt; MBtu
         *
         */
        class StartUpFuelCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StartUpFuelCurve;
                if (null == bucket)
                   cim_data.StartUpFuelCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StartUpFuelCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartUpFuelCurve";
                base.parse_attribute (/<cim:StartUpFuelCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.StartUpFuelCurve;
                if (null == bucket)
                   context.parsed.StartUpFuelCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_attribute (obj, "StartUpFuelCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Proficiency level of a craft, which is required to operate or maintain a particular type of asset and/or perform certain types of work.
         *
         */
        class MarketSkill extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketSkill;
                if (null == bucket)
                   cim_data.MarketSkill = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketSkill[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "MarketSkill";
                base.parse_element (/<cim:MarketSkill.certificationPeriod>([\s\S]*?)<\/cim:MarketSkill.certificationPeriod>/g, obj, "certificationPeriod", base.to_string, sub, context);
                base.parse_element (/<cim:MarketSkill.effectiveDateTime>([\s\S]*?)<\/cim:MarketSkill.effectiveDateTime>/g, obj, "effectiveDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketSkill.level>([\s\S]*?)<\/cim:MarketSkill.level>/g, obj, "level", base.to_string, sub, context);
                base.parse_attribute (/<cim:MarketSkill.MarketPerson\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketPerson", sub, context);

                var bucket = context.parsed.MarketSkill;
                if (null == bucket)
                   context.parsed.MarketSkill = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_element (obj, "MarketSkill", "certificationPeriod", base.from_string, fields);
                base.export_element (obj, "MarketSkill", "effectiveDateTime", base.from_datetime, fields);
                base.export_element (obj, "MarketSkill", "level", base.from_string, fields);
                base.export_attribute (obj, "MarketSkill", "MarketPerson", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A metered subsystem
         *
         */
        class MeteredSubSystem extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MeteredSubSystem;
                if (null == bucket)
                   cim_data.MeteredSubSystem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MeteredSubSystem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MeteredSubSystem";
                base.parse_attribute (/<cim:MeteredSubSystem.MSSAggregation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MSSAggregation", sub, context);

                var bucket = context.parsed.MeteredSubSystem;
                if (null == bucket)
                   context.parsed.MeteredSubSystem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "MeteredSubSystem", "MSSAggregation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of ThermalGeneratingUnit from Production Package in IEC61970.
         *
         */
        class MktThermalGeneratingUnit extends Production.ThermalGeneratingUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktThermalGeneratingUnit;
                if (null == bucket)
                   cim_data.MktThermalGeneratingUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktThermalGeneratingUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Production.ThermalGeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "MktThermalGeneratingUnit";

                var bucket = context.parsed.MktThermalGeneratingUnit;
                if (null == bucket)
                   context.parsed.MktThermalGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ThermalGeneratingUnit"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Indication of region for fuel inventory purposes
         *
         */
        class FuelRegion extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FuelRegion;
                if (null == bucket)
                   cim_data.FuelRegion = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FuelRegion[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "FuelRegion";
                base.parse_element (/<cim:FuelRegion.endEffectiveDate>([\s\S]*?)<\/cim:FuelRegion.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:FuelRegion.fuelRegionType>([\s\S]*?)<\/cim:FuelRegion.fuelRegionType>/g, obj, "fuelRegionType", base.to_string, sub, context);
                base.parse_element (/<cim:FuelRegion.lastModified>([\s\S]*?)<\/cim:FuelRegion.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);
                base.parse_element (/<cim:FuelRegion.startEffectiveDate>([\s\S]*?)<\/cim:FuelRegion.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:FuelRegion.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attribute (/<cim:FuelRegion.GasPrice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GasPrice", sub, context);
                base.parse_attribute (/<cim:FuelRegion.OilPrice\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OilPrice", sub, context);

                var bucket = context.parsed.FuelRegion;
                if (null == bucket)
                   context.parsed.FuelRegion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "FuelRegion", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "FuelRegion", "fuelRegionType", base.from_string, fields);
                base.export_element (obj, "FuelRegion", "lastModified", base.from_datetime, fields);
                base.export_element (obj, "FuelRegion", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "FuelRegion", "RTO", fields);
                base.export_attribute (obj, "FuelRegion", "GasPrice", fields);
                base.export_attribute (obj, "FuelRegion", "OilPrice", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Model to support processing of reliability must run units.
         *
         */
        class RMRHeatRateCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RMRHeatRateCurve;
                if (null == bucket)
                   cim_data.RMRHeatRateCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RMRHeatRateCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "RMRHeatRateCurve";
                base.parse_attribute (/<cim:RMRHeatRateCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.RMRHeatRateCurve;
                if (null == bucket)
                   context.parsed.RMRHeatRateCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_attribute (obj, "RMRHeatRateCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Metered Sub-System aggregation of MSS Zones.
         *
         */
        class MSSAggregation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MSSAggregation;
                if (null == bucket)
                   cim_data.MSSAggregation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MSSAggregation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MSSAggregation";
                base.parse_element (/<cim:MSSAggregation.costRecovery>([\s\S]*?)<\/cim:MSSAggregation.costRecovery>/g, obj, "costRecovery", base.to_string, sub, context);
                base.parse_element (/<cim:MSSAggregation.endEffectiveDate>([\s\S]*?)<\/cim:MSSAggregation.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MSSAggregation.grossSettlement>([\s\S]*?)<\/cim:MSSAggregation.grossSettlement>/g, obj, "grossSettlement", base.to_string, sub, context);
                base.parse_element (/<cim:MSSAggregation.ignoreLosses>([\s\S]*?)<\/cim:MSSAggregation.ignoreLosses>/g, obj, "ignoreLosses", base.to_string, sub, context);
                base.parse_element (/<cim:MSSAggregation.ignoreMarginalLosses>([\s\S]*?)<\/cim:MSSAggregation.ignoreMarginalLosses>/g, obj, "ignoreMarginalLosses", base.to_string, sub, context);
                base.parse_element (/<cim:MSSAggregation.loadFollowing>([\s\S]*?)<\/cim:MSSAggregation.loadFollowing>/g, obj, "loadFollowing", base.to_string, sub, context);
                base.parse_element (/<cim:MSSAggregation.rucProcurement>([\s\S]*?)<\/cim:MSSAggregation.rucProcurement>/g, obj, "rucProcurement", base.to_string, sub, context);
                base.parse_element (/<cim:MSSAggregation.startEffectiveDate>([\s\S]*?)<\/cim:MSSAggregation.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:MSSAggregation.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);

                var bucket = context.parsed.MSSAggregation;
                if (null == bucket)
                   context.parsed.MSSAggregation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "MSSAggregation", "costRecovery", base.from_string, fields);
                base.export_element (obj, "MSSAggregation", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "MSSAggregation", "grossSettlement", base.from_string, fields);
                base.export_element (obj, "MSSAggregation", "ignoreLosses", base.from_string, fields);
                base.export_element (obj, "MSSAggregation", "ignoreMarginalLosses", base.from_string, fields);
                base.export_element (obj, "MSSAggregation", "loadFollowing", base.from_string, fields);
                base.export_element (obj, "MSSAggregation", "rucProcurement", base.from_string, fields);
                base.export_element (obj, "MSSAggregation", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "MSSAggregation", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Market Power Mitigation (MPM) test thresholds for resource as well as designated congestion areas (DCAs)
         *
         */
        class MPMTestThreshold extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MPMTestThreshold;
                if (null == bucket)
                   cim_data.MPMTestThreshold = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MPMTestThreshold[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MPMTestThreshold";
                base.parse_element (/<cim:MPMTestThreshold.price>([\s\S]*?)<\/cim:MPMTestThreshold.price>/g, obj, "price", base.to_string, sub, context);
                base.parse_element (/<cim:MPMTestThreshold.percent>([\s\S]*?)<\/cim:MPMTestThreshold.percent>/g, obj, "percent", base.to_string, sub, context);
                base.parse_element (/<cim:MPMTestThreshold.marketType>([\s\S]*?)<\/cim:MPMTestThreshold.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_attribute (/<cim:MPMTestThreshold.MPMTestCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MPMTestCategory", sub, context);

                var bucket = context.parsed.MPMTestThreshold;
                if (null == bucket)
                   context.parsed.MPMTestThreshold = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "MPMTestThreshold", "price", base.from_string, fields);
                base.export_element (obj, "MPMTestThreshold", "percent", base.from_string, fields);
                base.export_element (obj, "MPMTestThreshold", "marketType", base.from_string, fields);
                base.export_attribute (obj, "MPMTestThreshold", "MPMTestCategory", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Used to indicate former references to the same piece of equipment.
         *
         * The ID, name, and effectivity dates are utilized.
         *
         */
        class FormerReference extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FormerReference;
                if (null == bucket)
                   cim_data.FormerReference = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FormerReference[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "FormerReference";
                base.parse_attribute (/<cim:FormerReference.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.FormerReference;
                if (null == bucket)
                   context.parsed.FormerReference = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "FormerReference", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * General purpose information for name and other information to contact people.
         *
         */
        class MarketPerson extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketPerson;
                if (null == bucket)
                   cim_data.MarketPerson = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketPerson[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketPerson";
                base.parse_element (/<cim:MarketPerson.category>([\s\S]*?)<\/cim:MarketPerson.category>/g, obj, "category", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.electronicAddressAlternate>([\s\S]*?)<\/cim:MarketPerson.electronicAddressAlternate>/g, obj, "electronicAddressAlternate", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.electronicAddressPrimary>([\s\S]*?)<\/cim:MarketPerson.electronicAddressPrimary>/g, obj, "electronicAddressPrimary", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.firstName>([\s\S]*?)<\/cim:MarketPerson.firstName>/g, obj, "firstName", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.governmentID>([\s\S]*?)<\/cim:MarketPerson.governmentID>/g, obj, "governmentID", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.landlinePhone>([\s\S]*?)<\/cim:MarketPerson.landlinePhone>/g, obj, "landlinePhone", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.lastName>([\s\S]*?)<\/cim:MarketPerson.lastName>/g, obj, "lastName", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.mName>([\s\S]*?)<\/cim:MarketPerson.mName>/g, obj, "mName", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.mobilePhone>([\s\S]*?)<\/cim:MarketPerson.mobilePhone>/g, obj, "mobilePhone", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.prefix>([\s\S]*?)<\/cim:MarketPerson.prefix>/g, obj, "prefix", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.specialNeed>([\s\S]*?)<\/cim:MarketPerson.specialNeed>/g, obj, "specialNeed", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.status>([\s\S]*?)<\/cim:MarketPerson.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.suffix>([\s\S]*?)<\/cim:MarketPerson.suffix>/g, obj, "suffix", base.to_string, sub, context);
                base.parse_element (/<cim:MarketPerson.userID>([\s\S]*?)<\/cim:MarketPerson.userID>/g, obj, "userID", base.to_string, sub, context);

                var bucket = context.parsed.MarketPerson;
                if (null == bucket)
                   context.parsed.MarketPerson = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "MarketPerson", "category", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "electronicAddressAlternate", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "electronicAddressPrimary", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "firstName", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "governmentID", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "landlinePhone", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "lastName", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "mName", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "mobilePhone", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "prefix", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "specialNeed", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "status", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "suffix", base.from_string, fields);
                base.export_element (obj, "MarketPerson", "userID", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Allows chaining of TransmissionContractRights.
         *
         * Many individual contract rights can be included in the definition of a TransmissionRightChain. A TransmissionRightChain is also defined as a TransmissionContractRight itself.
         *
         */
        class TransmissionRightChain extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionRightChain;
                if (null == bucket)
                   cim_data.TransmissionRightChain = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionRightChain[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionRightChain";
                base.parse_element (/<cim:TransmissionRightChain.endEffectiveDate>([\s\S]*?)<\/cim:TransmissionRightChain.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:TransmissionRightChain.startEffectiveDate>([\s\S]*?)<\/cim:TransmissionRightChain.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:TransmissionRightChain.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attribute (/<cim:TransmissionRightChain.Chain_ContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Chain_ContractRight", sub, context);

                var bucket = context.parsed.TransmissionRightChain;
                if (null == bucket)
                   context.parsed.TransmissionRightChain = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "TransmissionRightChain", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "TransmissionRightChain", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "TransmissionRightChain", "RTO", fields);
                base.export_attribute (obj, "TransmissionRightChain", "Chain_ContractRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Market participants could be represented by Scheduling Coordinators (SCs) that are registered with the RTO/ISO.
         *
         * One participant could register multiple SCs with the RTO/ISO. Many market participants can do business with the RTO/ISO using a single SC. One SC could schedule multiple generators. A load scheduling point could be used by multiple SCs. Each SC could schedule load at multiple scheduling points. An inter-tie scheduling point can be used by multiple SCs. Each SC can schedule interchange at multiple inter-tie scheduling points.
         *
         */
        class SchedulingCoordinator extends MarketOpCommon.MktOrganisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SchedulingCoordinator;
                if (null == bucket)
                   cim_data.SchedulingCoordinator = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SchedulingCoordinator[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketOpCommon.MktOrganisation.prototype.parse.call (this, context, sub);
                obj.cls = "SchedulingCoordinator";
                base.parse_element (/<cim:SchedulingCoordinator.scid>([\s\S]*?)<\/cim:SchedulingCoordinator.scid>/g, obj, "scid", base.to_string, sub, context);
                base.parse_attribute (/<cim:SchedulingCoordinator.LoadRatio\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadRatio", sub, context);
                base.parse_attribute (/<cim:SchedulingCoordinator.MktOrgansation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktOrgansation", sub, context);

                var bucket = context.parsed.SchedulingCoordinator;
                if (null == bucket)
                   context.parsed.SchedulingCoordinator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MktOrganisation"](obj, exporters, false);

                base.export_element (obj, "SchedulingCoordinator", "scid", base.from_string, fields);
                base.export_attribute (obj, "SchedulingCoordinator", "LoadRatio", fields);
                base.export_attribute (obj, "SchedulingCoordinator", "MktOrgansation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Model of a generator  that is registered to participate in the market
         *
         */
        class RegisteredGenerator extends MarketCommon.RegisteredResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RegisteredGenerator;
                if (null == bucket)
                   cim_data.RegisteredGenerator = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RegisteredGenerator[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketCommon.RegisteredResource.prototype.parse.call (this, context, sub);
                obj.cls = "RegisteredGenerator";
                base.parse_element (/<cim:RegisteredGenerator.capacityFactor>([\s\S]*?)<\/cim:RegisteredGenerator.capacityFactor>/g, obj, "capacityFactor", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.coldStartTime>([\s\S]*?)<\/cim:RegisteredGenerator.coldStartTime>/g, obj, "coldStartTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.combinedCyclePlantName>([\s\S]*?)<\/cim:RegisteredGenerator.combinedCyclePlantName>/g, obj, "combinedCyclePlantName", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.commericialOperationDate>([\s\S]*?)<\/cim:RegisteredGenerator.commericialOperationDate>/g, obj, "commericialOperationDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.constrainedOutputFlag>([\s\S]*?)<\/cim:RegisteredGenerator.constrainedOutputFlag>/g, obj, "constrainedOutputFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.costBasis>([\s\S]*?)<\/cim:RegisteredGenerator.costBasis>/g, obj, "costBasis", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.extremeLongStart>([\s\S]*?)<\/cim:RegisteredGenerator.extremeLongStart>/g, obj, "extremeLongStart", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.fuelSource>([\s\S]*?)<\/cim:RegisteredGenerator.fuelSource>/g, obj, "fuelSource", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.highControlLimit>([\s\S]*?)<\/cim:RegisteredGenerator.highControlLimit>/g, obj, "highControlLimit", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.hotIntTime>([\s\S]*?)<\/cim:RegisteredGenerator.hotIntTime>/g, obj, "hotIntTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.hotStartTime>([\s\S]*?)<\/cim:RegisteredGenerator.hotStartTime>/g, obj, "hotStartTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.intColdTime>([\s\S]*?)<\/cim:RegisteredGenerator.intColdTime>/g, obj, "intColdTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.intendedPIRP>([\s\S]*?)<\/cim:RegisteredGenerator.intendedPIRP>/g, obj, "intendedPIRP", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.intStartTime>([\s\S]*?)<\/cim:RegisteredGenerator.intStartTime>/g, obj, "intStartTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.loadFollowingDownMSS>([\s\S]*?)<\/cim:RegisteredGenerator.loadFollowingDownMSS>/g, obj, "loadFollowingDownMSS", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.loadFollowingUpMSS>([\s\S]*?)<\/cim:RegisteredGenerator.loadFollowingUpMSS>/g, obj, "loadFollowingUpMSS", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.lowControlLImit>([\s\S]*?)<\/cim:RegisteredGenerator.lowControlLImit>/g, obj, "lowControlLImit", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.lowerControlRate>([\s\S]*?)<\/cim:RegisteredGenerator.lowerControlRate>/g, obj, "lowerControlRate", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.lowerRampRate>([\s\S]*?)<\/cim:RegisteredGenerator.lowerRampRate>/g, obj, "lowerRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxDependableCap>([\s\S]*?)<\/cim:RegisteredGenerator.maxDependableCap>/g, obj, "maxDependableCap", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maximumAllowableSpinningReserve>([\s\S]*?)<\/cim:RegisteredGenerator.maximumAllowableSpinningReserve>/g, obj, "maximumAllowableSpinningReserve", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maximumOperatingMW>([\s\S]*?)<\/cim:RegisteredGenerator.maximumOperatingMW>/g, obj, "maximumOperatingMW", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxLayOffSelfSchedQty>([\s\S]*?)<\/cim:RegisteredGenerator.maxLayOffSelfSchedQty>/g, obj, "maxLayOffSelfSchedQty", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxMinLoadCost>([\s\S]*?)<\/cim:RegisteredGenerator.maxMinLoadCost>/g, obj, "maxMinLoadCost", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxPumpingLevel>([\s\S]*?)<\/cim:RegisteredGenerator.maxPumpingLevel>/g, obj, "maxPumpingLevel", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxShutdownTime>([\s\S]*?)<\/cim:RegisteredGenerator.maxShutdownTime>/g, obj, "maxShutdownTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxStartUpsPerDay>([\s\S]*?)<\/cim:RegisteredGenerator.maxStartUpsPerDay>/g, obj, "maxStartUpsPerDay", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxWeeklyEnergy>([\s\S]*?)<\/cim:RegisteredGenerator.maxWeeklyEnergy>/g, obj, "maxWeeklyEnergy", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.maxWeeklyStarts>([\s\S]*?)<\/cim:RegisteredGenerator.maxWeeklyStarts>/g, obj, "maxWeeklyStarts", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.minimumLoadFuelCost>([\s\S]*?)<\/cim:RegisteredGenerator.minimumLoadFuelCost>/g, obj, "minimumLoadFuelCost", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.minimumOperatingMW>([\s\S]*?)<\/cim:RegisteredGenerator.minimumOperatingMW>/g, obj, "minimumOperatingMW", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.minLoadCost>([\s\S]*?)<\/cim:RegisteredGenerator.minLoadCost>/g, obj, "minLoadCost", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.mustOfferRA>([\s\S]*?)<\/cim:RegisteredGenerator.mustOfferRA>/g, obj, "mustOfferRA", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.nameplateCapacity>([\s\S]*?)<\/cim:RegisteredGenerator.nameplateCapacity>/g, obj, "nameplateCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.operatingMaintenanceCost>([\s\S]*?)<\/cim:RegisteredGenerator.operatingMaintenanceCost>/g, obj, "operatingMaintenanceCost", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.operatingMode>([\s\S]*?)<\/cim:RegisteredGenerator.operatingMode>/g, obj, "operatingMode", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.proxyFlag>([\s\S]*?)<\/cim:RegisteredGenerator.proxyFlag>/g, obj, "proxyFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.pumpingCost>([\s\S]*?)<\/cim:RegisteredGenerator.pumpingCost>/g, obj, "pumpingCost", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.pumpingFactor>([\s\S]*?)<\/cim:RegisteredGenerator.pumpingFactor>/g, obj, "pumpingFactor", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.pumpMinDownTime>([\s\S]*?)<\/cim:RegisteredGenerator.pumpMinDownTime>/g, obj, "pumpMinDownTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.pumpMinUpTime>([\s\S]*?)<\/cim:RegisteredGenerator.pumpMinUpTime>/g, obj, "pumpMinUpTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.pumpShutdownCost>([\s\S]*?)<\/cim:RegisteredGenerator.pumpShutdownCost>/g, obj, "pumpShutdownCost", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.pumpShutdownTime>([\s\S]*?)<\/cim:RegisteredGenerator.pumpShutdownTime>/g, obj, "pumpShutdownTime", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.qualifyingFacilityOwner>([\s\S]*?)<\/cim:RegisteredGenerator.qualifyingFacilityOwner>/g, obj, "qualifyingFacilityOwner", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.quickStartFlag>([\s\S]*?)<\/cim:RegisteredGenerator.quickStartFlag>/g, obj, "quickStartFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.raiseControlRate>([\s\S]*?)<\/cim:RegisteredGenerator.raiseControlRate>/g, obj, "raiseControlRate", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.raiseRampRate>([\s\S]*?)<\/cim:RegisteredGenerator.raiseRampRate>/g, obj, "raiseRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.rampCurveType>([\s\S]*?)<\/cim:RegisteredGenerator.rampCurveType>/g, obj, "rampCurveType", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.rampMode>([\s\S]*?)<\/cim:RegisteredGenerator.rampMode>/g, obj, "rampMode", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.regulationFlag>([\s\S]*?)<\/cim:RegisteredGenerator.regulationFlag>/g, obj, "regulationFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.regulationRampRate>([\s\S]*?)<\/cim:RegisteredGenerator.regulationRampRate>/g, obj, "regulationRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.resourceSubType>([\s\S]*?)<\/cim:RegisteredGenerator.resourceSubType>/g, obj, "resourceSubType", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.riverSystem>([\s\S]*?)<\/cim:RegisteredGenerator.riverSystem>/g, obj, "riverSystem", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.RMNRFlag>([\s\S]*?)<\/cim:RegisteredGenerator.RMNRFlag>/g, obj, "RMNRFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.RMRFlag>([\s\S]*?)<\/cim:RegisteredGenerator.RMRFlag>/g, obj, "RMRFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.RMRManualIndicator>([\s\S]*?)<\/cim:RegisteredGenerator.RMRManualIndicator>/g, obj, "RMRManualIndicator", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.RMTFlag>([\s\S]*?)<\/cim:RegisteredGenerator.RMTFlag>/g, obj, "RMTFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.spinReserveRamp>([\s\S]*?)<\/cim:RegisteredGenerator.spinReserveRamp>/g, obj, "spinReserveRamp", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.syncCondCapable>([\s\S]*?)<\/cim:RegisteredGenerator.syncCondCapable>/g, obj, "syncCondCapable", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.unitType>([\s\S]*?)<\/cim:RegisteredGenerator.unitType>/g, obj, "unitType", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredGenerator.useLimitFlag>([\s\S]*?)<\/cim:RegisteredGenerator.useLimitFlag>/g, obj, "useLimitFlag", base.to_string, sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMRHeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RMRHeatRateCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.StartUpTimeCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartUpTimeCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.FuelCostCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FuelCostCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMRStartUpCostCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RMRStartUpCostCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMRStartUpTimeCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RMRStartUpTimeCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.StartUpFuelCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartUpFuelCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.EnergyPriceIndex\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyPriceIndex", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMRStartUpFuelCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RMRStartUpFuelCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.MktHeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktHeatRateCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.LocalReliabilityArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LocalReliabilityArea", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RMRStartUpEnergyCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RMRStartUpEnergyCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.FuelRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FuelRegion", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.StartUpEnergyCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartUpEnergyCurve", sub, context);
                base.parse_attribute (/<cim:RegisteredGenerator.RegulatingLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegulatingLimit", sub, context);

                var bucket = context.parsed.RegisteredGenerator;
                if (null == bucket)
                   context.parsed.RegisteredGenerator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["RegisteredResource"](obj, exporters, false);

                base.export_element (obj, "RegisteredGenerator", "capacityFactor", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "coldStartTime", base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "combinedCyclePlantName", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "commericialOperationDate", base.from_datetime, fields);
                base.export_element (obj, "RegisteredGenerator", "constrainedOutputFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "costBasis", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "extremeLongStart", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "fuelSource", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "highControlLimit", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "hotIntTime", base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "hotStartTime", base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "intColdTime", base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "intendedPIRP", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "intStartTime", base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "loadFollowingDownMSS", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "loadFollowingUpMSS", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "lowControlLImit", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "lowerControlRate", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "lowerRampRate", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maxDependableCap", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maximumAllowableSpinningReserve", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maximumOperatingMW", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maxLayOffSelfSchedQty", base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "maxMinLoadCost", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maxPumpingLevel", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maxShutdownTime", base.from_datetime, fields);
                base.export_element (obj, "RegisteredGenerator", "maxStartUpsPerDay", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "maxWeeklyEnergy", base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "maxWeeklyStarts", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "minimumLoadFuelCost", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "minimumOperatingMW", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "minLoadCost", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "mustOfferRA", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "nameplateCapacity", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "operatingMaintenanceCost", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "operatingMode", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "proxyFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "pumpingCost", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "pumpingFactor", base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "pumpMinDownTime", base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "pumpMinUpTime", base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "pumpShutdownCost", base.from_float, fields);
                base.export_element (obj, "RegisteredGenerator", "pumpShutdownTime", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "qualifyingFacilityOwner", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "quickStartFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "raiseControlRate", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "raiseRampRate", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "rampCurveType", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "rampMode", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "regulationFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "regulationRampRate", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "resourceSubType", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "riverSystem", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "RMNRFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "RMRFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "RMRManualIndicator", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "RMTFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "spinReserveRamp", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "syncCondCapable", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "unitType", base.from_string, fields);
                base.export_element (obj, "RegisteredGenerator", "useLimitFlag", base.from_string, fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMRHeatRateCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "StartUpTimeCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "FuelCostCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMRStartUpCostCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMRStartUpTimeCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "StartUpFuelCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "EnergyPriceIndex", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMRStartUpFuelCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "MktHeatRateCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "LocalReliabilityArea", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RMRStartUpEnergyCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "FuelRegion", fields);
                base.export_attribute (obj, "RegisteredGenerator", "StartUpEnergyCurve", fields);
                base.export_attribute (obj, "RegisteredGenerator", "RegulatingLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A flowgate, is single or group of transmission elements intended to model MW flow impact relating to transmission limitations and transmission service usage.
         *
         */
        class Flowgate extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Flowgate;
                if (null == bucket)
                   cim_data.Flowgate = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Flowgate[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "Flowgate";
                base.parse_element (/<cim:Flowgate.direction>([\s\S]*?)<\/cim:Flowgate.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_element (/<cim:Flowgate.endEffectiveDate>([\s\S]*?)<\/cim:Flowgate.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:Flowgate.exportMWRating>([\s\S]*?)<\/cim:Flowgate.exportMWRating>/g, obj, "exportMWRating", base.to_string, sub, context);
                base.parse_element (/<cim:Flowgate.importMWRating>([\s\S]*?)<\/cim:Flowgate.importMWRating>/g, obj, "importMWRating", base.to_string, sub, context);
                base.parse_element (/<cim:Flowgate.startEffectiveDate>([\s\S]*?)<\/cim:Flowgate.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Flowgate.To_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "To_SubControlArea", sub, context);
                base.parse_attribute (/<cim:Flowgate.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attribute (/<cim:Flowgate.SecurityConstraints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecurityConstraints", sub, context);
                base.parse_attribute (/<cim:Flowgate.CRR\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CRR", sub, context);
                base.parse_attribute (/<cim:Flowgate.From_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "From_SubControlArea", sub, context);
                base.parse_attribute (/<cim:Flowgate.GenericConstraints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenericConstraints", sub, context);

                var bucket = context.parsed.Flowgate;
                if (null == bucket)
                   context.parsed.Flowgate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["PowerSystemResource"](obj, exporters, false);

                base.export_element (obj, "Flowgate", "direction", base.from_string, fields);
                base.export_element (obj, "Flowgate", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "Flowgate", "exportMWRating", base.from_string, fields);
                base.export_element (obj, "Flowgate", "importMWRating", base.from_string, fields);
                base.export_element (obj, "Flowgate", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "Flowgate", "To_SubControlArea", fields);
                base.export_attribute (obj, "Flowgate", "HostControlArea", fields);
                base.export_attribute (obj, "Flowgate", "SecurityConstraints", fields);
                base.export_attribute (obj, "Flowgate", "CRR", fields);
                base.export_attribute (obj, "Flowgate", "From_SubControlArea", fields);
                base.export_attribute (obj, "Flowgate", "GenericConstraints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Flowgate defined partner
         *
         */
        class FlowgatePartner extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FlowgatePartner;
                if (null == bucket)
                   cim_data.FlowgatePartner = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FlowgatePartner[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "FlowgatePartner";
                base.parse_attribute (/<cim:FlowgatePartner.FlowgateValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FlowgateValue", sub, context);

                var bucket = context.parsed.FlowgatePartner;
                if (null == bucket)
                   context.parsed.FlowgatePartner = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "FlowgatePartner", "FlowgateValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * To model the startup costs of a generation resource.
         *
         */
        class ResourceStartupCost extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ResourceStartupCost;
                if (null == bucket)
                   cim_data.ResourceStartupCost = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceStartupCost[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceStartupCost";
                base.parse_element (/<cim:ResourceStartupCost.fuelColdStartup>([\s\S]*?)<\/cim:ResourceStartupCost.fuelColdStartup>/g, obj, "fuelColdStartup", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.fuelHotStartup>([\s\S]*?)<\/cim:ResourceStartupCost.fuelHotStartup>/g, obj, "fuelHotStartup", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.fuelIntermediateStartup>([\s\S]*?)<\/cim:ResourceStartupCost.fuelIntermediateStartup>/g, obj, "fuelIntermediateStartup", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.fuelLowSustainedLimit>([\s\S]*?)<\/cim:ResourceStartupCost.fuelLowSustainedLimit>/g, obj, "fuelLowSustainedLimit", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.gasPercentColdStartup>([\s\S]*?)<\/cim:ResourceStartupCost.gasPercentColdStartup>/g, obj, "gasPercentColdStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.gasPercentHotStartup>([\s\S]*?)<\/cim:ResourceStartupCost.gasPercentHotStartup>/g, obj, "gasPercentHotStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.gasPercentIntermediateStartup>([\s\S]*?)<\/cim:ResourceStartupCost.gasPercentIntermediateStartup>/g, obj, "gasPercentIntermediateStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.gasPercentLowSustainedLimit>([\s\S]*?)<\/cim:ResourceStartupCost.gasPercentLowSustainedLimit>/g, obj, "gasPercentLowSustainedLimit", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.oilPercentColdStartup>([\s\S]*?)<\/cim:ResourceStartupCost.oilPercentColdStartup>/g, obj, "oilPercentColdStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.oilPercentHotStartup>([\s\S]*?)<\/cim:ResourceStartupCost.oilPercentHotStartup>/g, obj, "oilPercentHotStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.oilPercentIntermediateStartup>([\s\S]*?)<\/cim:ResourceStartupCost.oilPercentIntermediateStartup>/g, obj, "oilPercentIntermediateStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.oilPercentLowSustainedLimit>([\s\S]*?)<\/cim:ResourceStartupCost.oilPercentLowSustainedLimit>/g, obj, "oilPercentLowSustainedLimit", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.solidfuelPercentColdStartup>([\s\S]*?)<\/cim:ResourceStartupCost.solidfuelPercentColdStartup>/g, obj, "solidfuelPercentColdStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.solidfuelPercentHotStartup>([\s\S]*?)<\/cim:ResourceStartupCost.solidfuelPercentHotStartup>/g, obj, "solidfuelPercentHotStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.solidfuelPercentIntermediateStartup>([\s\S]*?)<\/cim:ResourceStartupCost.solidfuelPercentIntermediateStartup>/g, obj, "solidfuelPercentIntermediateStartup", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceStartupCost.solidfuelPercentLowSustainedLimit>([\s\S]*?)<\/cim:ResourceStartupCost.solidfuelPercentLowSustainedLimit>/g, obj, "solidfuelPercentLowSustainedLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:ResourceStartupCost.ResourceVerifiableCosts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceVerifiableCosts", sub, context);

                var bucket = context.parsed.ResourceStartupCost;
                if (null == bucket)
                   context.parsed.ResourceStartupCost = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ResourceStartupCost", "fuelColdStartup", base.from_float, fields);
                base.export_element (obj, "ResourceStartupCost", "fuelHotStartup", base.from_float, fields);
                base.export_element (obj, "ResourceStartupCost", "fuelIntermediateStartup", base.from_float, fields);
                base.export_element (obj, "ResourceStartupCost", "fuelLowSustainedLimit", base.from_float, fields);
                base.export_element (obj, "ResourceStartupCost", "gasPercentColdStartup", base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "gasPercentHotStartup", base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "gasPercentIntermediateStartup", base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "gasPercentLowSustainedLimit", base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "oilPercentColdStartup", base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "oilPercentHotStartup", base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "oilPercentIntermediateStartup", base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "oilPercentLowSustainedLimit", base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "solidfuelPercentColdStartup", base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "solidfuelPercentHotStartup", base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "solidfuelPercentIntermediateStartup", base.from_string, fields);
                base.export_element (obj, "ResourceStartupCost", "solidfuelPercentLowSustainedLimit", base.from_string, fields);
                base.export_attribute (obj, "ResourceStartupCost", "ResourceVerifiableCosts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Price of gas in monetary units
         *
         */
        class GasPrice extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GasPrice;
                if (null == bucket)
                   cim_data.GasPrice = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GasPrice[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GasPrice";
                base.parse_element (/<cim:GasPrice.gasPriceIndex>([\s\S]*?)<\/cim:GasPrice.gasPriceIndex>/g, obj, "gasPriceIndex", base.to_float, sub, context);
                base.parse_attribute (/<cim:GasPrice.FuelRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FuelRegion", sub, context);

                var bucket = context.parsed.GasPrice;
                if (null == bucket)
                   context.parsed.GasPrice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "GasPrice", "gasPriceIndex", base.from_float, fields);
                base.export_attribute (obj, "GasPrice", "FuelRegion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Representing the ratio of the load share for the associated SC.
         *
         */
        class LoadRatio extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadRatio;
                if (null == bucket)
                   cim_data.LoadRatio = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadRatio[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LoadRatio";
                base.parse_element (/<cim:LoadRatio.intervalStartTime>([\s\S]*?)<\/cim:LoadRatio.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:LoadRatio.intervalEndTime>([\s\S]*?)<\/cim:LoadRatio.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:LoadRatio.share>([\s\S]*?)<\/cim:LoadRatio.share>/g, obj, "share", base.to_string, sub, context);
                base.parse_attribute (/<cim:LoadRatio.SchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SchedulingCoordinator", sub, context);

                var bucket = context.parsed.LoadRatio;
                if (null == bucket)
                   context.parsed.LoadRatio = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "LoadRatio", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "LoadRatio", "intervalEndTime", base.from_datetime, fields);
                base.export_element (obj, "LoadRatio", "share", base.from_string, fields);
                base.export_attribute (obj, "LoadRatio", "SchedulingCoordinator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class represents the inter tie resource.
         *
         */
        class RegisteredInterTie extends MarketCommon.RegisteredResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RegisteredInterTie;
                if (null == bucket)
                   cim_data.RegisteredInterTie = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RegisteredInterTie[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketCommon.RegisteredResource.prototype.parse.call (this, context, sub);
                obj.cls = "RegisteredInterTie";
                base.parse_element (/<cim:RegisteredInterTie.direction>([\s\S]*?)<\/cim:RegisteredInterTie.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredInterTie.energyProductType>([\s\S]*?)<\/cim:RegisteredInterTie.energyProductType>/g, obj, "energyProductType", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredInterTie.isDCTie>([\s\S]*?)<\/cim:RegisteredInterTie.isDCTie>/g, obj, "isDCTie", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredInterTie.isDynamicInterchange>([\s\S]*?)<\/cim:RegisteredInterTie.isDynamicInterchange>/g, obj, "isDynamicInterchange", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredInterTie.minHourlyBlockLimit>([\s\S]*?)<\/cim:RegisteredInterTie.minHourlyBlockLimit>/g, obj, "minHourlyBlockLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:RegisteredInterTie.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:RegisteredInterTie.InterTieBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InterTieBid", sub, context);

                var bucket = context.parsed.RegisteredInterTie;
                if (null == bucket)
                   context.parsed.RegisteredInterTie = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["RegisteredResource"](obj, exporters, false);

                base.export_element (obj, "RegisteredInterTie", "direction", base.from_string, fields);
                base.export_element (obj, "RegisteredInterTie", "energyProductType", base.from_string, fields);
                base.export_element (obj, "RegisteredInterTie", "isDCTie", base.from_string, fields);
                base.export_element (obj, "RegisteredInterTie", "isDynamicInterchange", base.from_string, fields);
                base.export_element (obj, "RegisteredInterTie", "minHourlyBlockLimit", base.from_string, fields);
                base.export_attribute (obj, "RegisteredInterTie", "Flowgate", fields);
                base.export_attribute (obj, "RegisteredInterTie", "InterTieBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Model of a load that is registered to participate in the market (demand reduction)
         *
         */
        class RegisteredLoad extends MarketCommon.RegisteredResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RegisteredLoad;
                if (null == bucket)
                   cim_data.RegisteredLoad = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RegisteredLoad[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketCommon.RegisteredResource.prototype.parse.call (this, context, sub);
                obj.cls = "RegisteredLoad";
                base.parse_element (/<cim:RegisteredLoad.blockLoadTransferFlag>([\s\S]*?)<\/cim:RegisteredLoad.blockLoadTransferFlag>/g, obj, "blockLoadTransferFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredLoad.dynamicallyScheduledLoadResourceFlag>([\s\S]*?)<\/cim:RegisteredLoad.dynamicallyScheduledLoadResourceFlag>/g, obj, "dynamicallyScheduledLoadResourceFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredLoad.dynamicallyScheduledQualificationFlag>([\s\S]*?)<\/cim:RegisteredLoad.dynamicallyScheduledQualificationFlag>/g, obj, "dynamicallyScheduledQualificationFlag", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredLoad.loadRegistryMSS>([\s\S]*?)<\/cim:RegisteredLoad.loadRegistryMSS>/g, obj, "loadRegistryMSS", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredLoad.maxBaseLoad>([\s\S]*?)<\/cim:RegisteredLoad.maxBaseLoad>/g, obj, "maxBaseLoad", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredLoad.maxDeploymentTime>([\s\S]*?)<\/cim:RegisteredLoad.maxDeploymentTime>/g, obj, "maxDeploymentTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredLoad.maxLoadRedTimesPerDay>([\s\S]*?)<\/cim:RegisteredLoad.maxLoadRedTimesPerDay>/g, obj, "maxLoadRedTimesPerDay", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredLoad.maxLoadReduction>([\s\S]*?)<\/cim:RegisteredLoad.maxLoadReduction>/g, obj, "maxLoadReduction", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredLoad.maxReductionTime>([\s\S]*?)<\/cim:RegisteredLoad.maxReductionTime>/g, obj, "maxReductionTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredLoad.maxWeeklyDeployment>([\s\S]*?)<\/cim:RegisteredLoad.maxWeeklyDeployment>/g, obj, "maxWeeklyDeployment", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredLoad.minLoadReduction>([\s\S]*?)<\/cim:RegisteredLoad.minLoadReduction>/g, obj, "minLoadReduction", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredLoad.minLoadReductionCost>([\s\S]*?)<\/cim:RegisteredLoad.minLoadReductionCost>/g, obj, "minLoadReductionCost", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredLoad.minLoadReductionInterval>([\s\S]*?)<\/cim:RegisteredLoad.minLoadReductionInterval>/g, obj, "minLoadReductionInterval", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredLoad.minReductionTime>([\s\S]*?)<\/cim:RegisteredLoad.minReductionTime>/g, obj, "minReductionTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredLoad.minTimeBetLoadRed>([\s\S]*?)<\/cim:RegisteredLoad.minTimeBetLoadRed>/g, obj, "minTimeBetLoadRed", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredLoad.NPLCustomLoadAggregation>([\s\S]*?)<\/cim:RegisteredLoad.NPLCustomLoadAggregation>/g, obj, "NPLCustomLoadAggregation", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredLoad.participatingLoad>([\s\S]*?)<\/cim:RegisteredLoad.participatingLoad>/g, obj, "participatingLoad", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredLoad.reqNoticeTime>([\s\S]*?)<\/cim:RegisteredLoad.reqNoticeTime>/g, obj, "reqNoticeTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredLoad.resourceSubType>([\s\S]*?)<\/cim:RegisteredLoad.resourceSubType>/g, obj, "resourceSubType", base.to_string, sub, context);
                base.parse_attribute (/<cim:RegisteredLoad.MktLoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktLoadArea", sub, context);

                var bucket = context.parsed.RegisteredLoad;
                if (null == bucket)
                   context.parsed.RegisteredLoad = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["RegisteredResource"](obj, exporters, false);

                base.export_element (obj, "RegisteredLoad", "blockLoadTransferFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredLoad", "dynamicallyScheduledLoadResourceFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredLoad", "dynamicallyScheduledQualificationFlag", base.from_string, fields);
                base.export_element (obj, "RegisteredLoad", "loadRegistryMSS", base.from_string, fields);
                base.export_element (obj, "RegisteredLoad", "maxBaseLoad", base.from_string, fields);
                base.export_element (obj, "RegisteredLoad", "maxDeploymentTime", base.from_float, fields);
                base.export_element (obj, "RegisteredLoad", "maxLoadRedTimesPerDay", base.from_string, fields);
                base.export_element (obj, "RegisteredLoad", "maxLoadReduction", base.from_string, fields);
                base.export_element (obj, "RegisteredLoad", "maxReductionTime", base.from_float, fields);
                base.export_element (obj, "RegisteredLoad", "maxWeeklyDeployment", base.from_string, fields);
                base.export_element (obj, "RegisteredLoad", "minLoadReduction", base.from_string, fields);
                base.export_element (obj, "RegisteredLoad", "minLoadReductionCost", base.from_string, fields);
                base.export_element (obj, "RegisteredLoad", "minLoadReductionInterval", base.from_float, fields);
                base.export_element (obj, "RegisteredLoad", "minReductionTime", base.from_float, fields);
                base.export_element (obj, "RegisteredLoad", "minTimeBetLoadRed", base.from_float, fields);
                base.export_element (obj, "RegisteredLoad", "NPLCustomLoadAggregation", base.from_string, fields);
                base.export_element (obj, "RegisteredLoad", "participatingLoad", base.from_string, fields);
                base.export_element (obj, "RegisteredLoad", "reqNoticeTime", base.from_float, fields);
                base.export_element (obj, "RegisteredLoad", "resourceSubType", base.from_string, fields);
                base.export_attribute (obj, "RegisteredLoad", "MktLoadArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An aggregated node can define a typed grouping further defined by the AnodeType enumeratuion.
         *
         * Types range from System Zone/Regions to Market Energy Regions to Aggregated Loads and Aggregated Generators.
         *
         */
        class AggregateNode extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AggregateNode;
                if (null == bucket)
                   cim_data.AggregateNode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AggregateNode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AggregateNode";
                base.parse_element (/<cim:AggregateNode.anodeType>([\s\S]*?)<\/cim:AggregateNode.anodeType>/g, obj, "anodeType", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateNode.endEffectiveDate>([\s\S]*?)<\/cim:AggregateNode.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:AggregateNode.qualifASOrder>([\s\S]*?)<\/cim:AggregateNode.qualifASOrder>/g, obj, "qualifASOrder", base.to_string, sub, context);
                base.parse_element (/<cim:AggregateNode.startEffectiveDate>([\s\S]*?)<\/cim:AggregateNode.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:AggregateNode.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);

                var bucket = context.parsed.AggregateNode;
                if (null == bucket)
                   context.parsed.AggregateNode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "AggregateNode", "anodeType", base.from_string, fields);
                base.export_element (obj, "AggregateNode", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "AggregateNode", "qualifASOrder", base.from_string, fields);
                base.export_element (obj, "AggregateNode", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "AggregateNode", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of Production: CombinedCyclePlant from IEC61970 package.
         *
         * A set of combustion turbines and steam turbines where the exhaust heat from the combustion turbines is recovered to make steam for the steam turbines, resulting in greater overall plant efficiency
         *
         */
        class MktCombinedCyclePlant extends Production.CombinedCyclePlant
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktCombinedCyclePlant;
                if (null == bucket)
                   cim_data.MktCombinedCyclePlant = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktCombinedCyclePlant[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Production.CombinedCyclePlant.prototype.parse.call (this, context, sub);
                obj.cls = "MktCombinedCyclePlant";
                base.parse_attribute (/<cim:MktCombinedCyclePlant.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);

                var bucket = context.parsed.MktCombinedCyclePlant;
                if (null == bucket)
                   context.parsed.MktCombinedCyclePlant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["CombinedCyclePlant"](obj, exporters, false);

                base.export_attribute (obj, "MktCombinedCyclePlant", "AggregatedPnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Logical Configuration of a Combined Cycle plant.
         *
         * Operating Combined Cycle Plant (CCP) configurations are represented as Logical CCP Resources. Logical representation shall be used for Market applications to optimize and control Market Operations. Logical representation is also necessary for controlling the number of CCP configurations and to temper performance issues that may otherwise occur.
         *
         */
        class CombinedCycleLogicalConfiguration extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CombinedCycleLogicalConfiguration;
                if (null == bucket)
                   cim_data.CombinedCycleLogicalConfiguration = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CombinedCycleLogicalConfiguration[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CombinedCycleLogicalConfiguration";
                base.parse_attribute (/<cim:CombinedCycleLogicalConfiguration.MktCombinedCyclePlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktCombinedCyclePlant", sub, context);

                var bucket = context.parsed.CombinedCycleLogicalConfiguration;
                if (null == bucket)
                   context.parsed.CombinedCycleLogicalConfiguration = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "CombinedCycleLogicalConfiguration", "MktCombinedCyclePlant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Counter party in a wheeling transaction.
         *
         */
        class WheelingCounterParty extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WheelingCounterParty;
                if (null == bucket)
                   cim_data.WheelingCounterParty = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WheelingCounterParty[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WheelingCounterParty";

                var bucket = context.parsed.WheelingCounterParty;
                if (null == bucket)
                   context.parsed.WheelingCounterParty = bucket = {};
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
         * Defines the available from and to Transition States for the Combine Cycle Configurations.
         *
         */
        class CombinedCycleTransitionState extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CombinedCycleTransitionState;
                if (null == bucket)
                   cim_data.CombinedCycleTransitionState = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CombinedCycleTransitionState[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CombinedCycleTransitionState";
                base.parse_element (/<cim:CombinedCycleTransitionState.upTransition>([\s\S]*?)<\/cim:CombinedCycleTransitionState.upTransition>/g, obj, "upTransition", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:CombinedCycleTransitionState.FromConfiguration\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FromConfiguration", sub, context);
                base.parse_attribute (/<cim:CombinedCycleTransitionState.ToConfiguration\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ToConfiguration", sub, context);

                var bucket = context.parsed.CombinedCycleTransitionState;
                if (null == bucket)
                   context.parsed.CombinedCycleTransitionState = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "CombinedCycleTransitionState", "upTransition", base.from_boolean, fields);
                base.export_attribute (obj, "CombinedCycleTransitionState", "FromConfiguration", fields);
                base.export_attribute (obj, "CombinedCycleTransitionState", "ToConfiguration", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class model the ownership percent and type of ownership between resource and organisation
         *
         */
        class OrgResOwnership extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OrgResOwnership;
                if (null == bucket)
                   cim_data.OrgResOwnership = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OrgResOwnership[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OrgResOwnership";
                base.parse_element (/<cim:OrgResOwnership.asscType>([\s\S]*?)<\/cim:OrgResOwnership.asscType>/g, obj, "asscType", base.to_string, sub, context);
                base.parse_element (/<cim:OrgResOwnership.endEffectiveDate>([\s\S]*?)<\/cim:OrgResOwnership.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:OrgResOwnership.masterSchedulingCoordinatorFlag>([\s\S]*?)<\/cim:OrgResOwnership.masterSchedulingCoordinatorFlag>/g, obj, "masterSchedulingCoordinatorFlag", base.to_string, sub, context);
                base.parse_element (/<cim:OrgResOwnership.ownershipPercent>([\s\S]*?)<\/cim:OrgResOwnership.ownershipPercent>/g, obj, "ownershipPercent", base.to_string, sub, context);
                base.parse_element (/<cim:OrgResOwnership.startEffectiveDate>([\s\S]*?)<\/cim:OrgResOwnership.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:OrgResOwnership.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:OrgResOwnership.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktOrganisation", sub, context);

                var bucket = context.parsed.OrgResOwnership;
                if (null == bucket)
                   context.parsed.OrgResOwnership = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "OrgResOwnership", "asscType", base.from_string, fields);
                base.export_element (obj, "OrgResOwnership", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "OrgResOwnership", "masterSchedulingCoordinatorFlag", base.from_string, fields);
                base.export_element (obj, "OrgResOwnership", "ownershipPercent", base.from_string, fields);
                base.export_element (obj, "OrgResOwnership", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "OrgResOwnership", "RegisteredResource", fields);
                base.export_attribute (obj, "OrgResOwnership", "MktOrganisation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Provides definition of Transmission Ownership Right and Existing Transmission Contract identifiers for use by SCUC.
         *
         * RMR contract hosting: Startup lead time, Contract Service Limits, Max Service Hours, Max MWhs, Max Start-ups, Ramp Rate, Max Net Dependable Capacity, Min Capacity and Unit Substitution for DAM/RTM to retrieve;
         *
         */
        class ContractRight extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ContractRight;
                if (null == bucket)
                   cim_data.ContractRight = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ContractRight[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ContractRight";
                base.parse_element (/<cim:ContractRight.chainOrder>([\s\S]*?)<\/cim:ContractRight.chainOrder>/g, obj, "chainOrder", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.contractMW>([\s\S]*?)<\/cim:ContractRight.contractMW>/g, obj, "contractMW", base.to_float, sub, context);
                base.parse_element (/<cim:ContractRight.contractPrice>([\s\S]*?)<\/cim:ContractRight.contractPrice>/g, obj, "contractPrice", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.contractPriority>([\s\S]*?)<\/cim:ContractRight.contractPriority>/g, obj, "contractPriority", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.contractStatus>([\s\S]*?)<\/cim:ContractRight.contractStatus>/g, obj, "contractStatus", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.contractType>([\s\S]*?)<\/cim:ContractRight.contractType>/g, obj, "contractType", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.endEffectiveDate>([\s\S]*?)<\/cim:ContractRight.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ContractRight.financialLocation>([\s\S]*?)<\/cim:ContractRight.financialLocation>/g, obj, "financialLocation", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.financialRightsDAM>([\s\S]*?)<\/cim:ContractRight.financialRightsDAM>/g, obj, "financialRightsDAM", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.financialRightsRTM>([\s\S]*?)<\/cim:ContractRight.financialRightsRTM>/g, obj, "financialRightsRTM", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.fuelAdder>([\s\S]*?)<\/cim:ContractRight.fuelAdder>/g, obj, "fuelAdder", base.to_float, sub, context);
                base.parse_element (/<cim:ContractRight.latestSchedMinutes>([\s\S]*?)<\/cim:ContractRight.latestSchedMinutes>/g, obj, "latestSchedMinutes", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.latestSchedMktType>([\s\S]*?)<\/cim:ContractRight.latestSchedMktType>/g, obj, "latestSchedMktType", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.maximumScheduleQuantity>([\s\S]*?)<\/cim:ContractRight.maximumScheduleQuantity>/g, obj, "maximumScheduleQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:ContractRight.maximumServiceHours>([\s\S]*?)<\/cim:ContractRight.maximumServiceHours>/g, obj, "maximumServiceHours", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.maximumStartups>([\s\S]*?)<\/cim:ContractRight.maximumStartups>/g, obj, "maximumStartups", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.maxNetDependableCapacity>([\s\S]*?)<\/cim:ContractRight.maxNetDependableCapacity>/g, obj, "maxNetDependableCapacity", base.to_float, sub, context);
                base.parse_element (/<cim:ContractRight.minimumLoad>([\s\S]*?)<\/cim:ContractRight.minimumLoad>/g, obj, "minimumLoad", base.to_float, sub, context);
                base.parse_element (/<cim:ContractRight.minimumScheduleQuantity>([\s\S]*?)<\/cim:ContractRight.minimumScheduleQuantity>/g, obj, "minimumScheduleQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:ContractRight.physicalRightsDAM>([\s\S]*?)<\/cim:ContractRight.physicalRightsDAM>/g, obj, "physicalRightsDAM", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.physicalRightsRTM>([\s\S]*?)<\/cim:ContractRight.physicalRightsRTM>/g, obj, "physicalRightsRTM", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.startEffectiveDate>([\s\S]*?)<\/cim:ContractRight.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ContractRight.startupLeadTime>([\s\S]*?)<\/cim:ContractRight.startupLeadTime>/g, obj, "startupLeadTime", base.to_string, sub, context);
                base.parse_element (/<cim:ContractRight.TRType>([\s\S]*?)<\/cim:ContractRight.TRType>/g, obj, "TRType", base.to_string, sub, context);
                base.parse_attribute (/<cim:ContractRight.SchedulingCoordinator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SchedulingCoordinator", sub, context);
                base.parse_attribute (/<cim:ContractRight.Ind_TransmissionRightChain\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Ind_TransmissionRightChain", sub, context);
                base.parse_attribute (/<cim:ContractRight.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                base.parse_attribute (/<cim:ContractRight.Chain_TransmissionRightChain\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Chain_TransmissionRightChain", sub, context);

                var bucket = context.parsed.ContractRight;
                if (null == bucket)
                   context.parsed.ContractRight = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "ContractRight", "chainOrder", base.from_string, fields);
                base.export_element (obj, "ContractRight", "contractMW", base.from_float, fields);
                base.export_element (obj, "ContractRight", "contractPrice", base.from_string, fields);
                base.export_element (obj, "ContractRight", "contractPriority", base.from_string, fields);
                base.export_element (obj, "ContractRight", "contractStatus", base.from_string, fields);
                base.export_element (obj, "ContractRight", "contractType", base.from_string, fields);
                base.export_element (obj, "ContractRight", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "ContractRight", "financialLocation", base.from_string, fields);
                base.export_element (obj, "ContractRight", "financialRightsDAM", base.from_string, fields);
                base.export_element (obj, "ContractRight", "financialRightsRTM", base.from_string, fields);
                base.export_element (obj, "ContractRight", "fuelAdder", base.from_float, fields);
                base.export_element (obj, "ContractRight", "latestSchedMinutes", base.from_string, fields);
                base.export_element (obj, "ContractRight", "latestSchedMktType", base.from_string, fields);
                base.export_element (obj, "ContractRight", "maximumScheduleQuantity", base.from_float, fields);
                base.export_element (obj, "ContractRight", "maximumServiceHours", base.from_string, fields);
                base.export_element (obj, "ContractRight", "maximumStartups", base.from_string, fields);
                base.export_element (obj, "ContractRight", "maxNetDependableCapacity", base.from_float, fields);
                base.export_element (obj, "ContractRight", "minimumLoad", base.from_float, fields);
                base.export_element (obj, "ContractRight", "minimumScheduleQuantity", base.from_float, fields);
                base.export_element (obj, "ContractRight", "physicalRightsDAM", base.from_string, fields);
                base.export_element (obj, "ContractRight", "physicalRightsRTM", base.from_string, fields);
                base.export_element (obj, "ContractRight", "startEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "ContractRight", "startupLeadTime", base.from_string, fields);
                base.export_element (obj, "ContractRight", "TRType", base.from_string, fields);
                base.export_attribute (obj, "ContractRight", "SchedulingCoordinator", fields);
                base.export_attribute (obj, "ContractRight", "Ind_TransmissionRightChain", fields);
                base.export_attribute (obj, "ContractRight", "RTO", fields);
                base.export_attribute (obj, "ContractRight", "Chain_TransmissionRightChain", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Goups Adjacent Control Areas
         *
         */
        class AdjacentCASet extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AdjacentCASet;
                if (null == bucket)
                   cim_data.AdjacentCASet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AdjacentCASet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AdjacentCASet";
                base.parse_element (/<cim:AdjacentCASet.endEffectiveDate>([\s\S]*?)<\/cim:AdjacentCASet.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:AdjacentCASet.lossPercentage >([\s\S]*?)<\/cim:AdjacentCASet.lossPercentage >/g, obj, "lossPercentage ", base.to_float, sub, context);
                base.parse_element (/<cim:AdjacentCASet.startEffectiveDate>([\s\S]*?)<\/cim:AdjacentCASet.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:AdjacentCASet.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attribute (/<cim:AdjacentCASet.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);

                var bucket = context.parsed.AdjacentCASet;
                if (null == bucket)
                   context.parsed.AdjacentCASet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "AdjacentCASet", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "AdjacentCASet", "lossPercentage ", base.from_float, fields);
                base.export_element (obj, "AdjacentCASet", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "AdjacentCASet", "HostControlArea", fields);
                base.export_attribute (obj, "AdjacentCASet", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Connection to other organizations at the boundary of the ISO/RTO.
         *
         */
        class SchedulingPoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SchedulingPoint;
                if (null == bucket)
                   cim_data.SchedulingPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SchedulingPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "SchedulingPoint";
                base.parse_element (/<cim:SchedulingPoint.endEffectiveDate>([\s\S]*?)<\/cim:SchedulingPoint.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:SchedulingPoint.startEffectiveDate>([\s\S]*?)<\/cim:SchedulingPoint.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:SchedulingPoint.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);

                var bucket = context.parsed.SchedulingPoint;
                if (null == bucket)
                   context.parsed.SchedulingPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "SchedulingPoint", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "SchedulingPoint", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "SchedulingPoint", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class models the allocation between asset owners and pricing nodes
         *
         */
        class OrgPnodeAllocation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OrgPnodeAllocation;
                if (null == bucket)
                   cim_data.OrgPnodeAllocation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OrgPnodeAllocation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OrgPnodeAllocation";
                base.parse_element (/<cim:OrgPnodeAllocation.endEffectiveDate>([\s\S]*?)<\/cim:OrgPnodeAllocation.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:OrgPnodeAllocation.maxMWAllocation>([\s\S]*?)<\/cim:OrgPnodeAllocation.maxMWAllocation>/g, obj, "maxMWAllocation", base.to_string, sub, context);
                base.parse_element (/<cim:OrgPnodeAllocation.startEffectiveDate>([\s\S]*?)<\/cim:OrgPnodeAllocation.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:OrgPnodeAllocation.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                base.parse_attribute (/<cim:OrgPnodeAllocation.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktOrganisation", sub, context);

                var bucket = context.parsed.OrgPnodeAllocation;
                if (null == bucket)
                   context.parsed.OrgPnodeAllocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "OrgPnodeAllocation", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "OrgPnodeAllocation", "maxMWAllocation", base.from_string, fields);
                base.export_element (obj, "OrgPnodeAllocation", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "OrgPnodeAllocation", "Pnode", fields);
                base.export_attribute (obj, "OrgPnodeAllocation", "MktOrganisation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * To model the Operation and Maintenance (O and M) costs of a generation resource.
         *
         */
        class ResourceOperationMaintenanceCost extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ResourceOperationMaintenanceCost;
                if (null == bucket)
                   cim_data.ResourceOperationMaintenanceCost = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceOperationMaintenanceCost[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceOperationMaintenanceCost";
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.gasPercentAboveLowSustainedLimit>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.gasPercentAboveLowSustainedLimit>/g, obj, "gasPercentAboveLowSustainedLimit", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.oilPercentAboveLowSustainedLimit>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.oilPercentAboveLowSustainedLimit>/g, obj, "oilPercentAboveLowSustainedLimit", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.omCostColdStartup>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.omCostColdStartup>/g, obj, "omCostColdStartup", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.omCostHotStartup>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.omCostHotStartup>/g, obj, "omCostHotStartup", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.omCostIntermediateStartup>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.omCostIntermediateStartup>/g, obj, "omCostIntermediateStartup", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.omCostLowSustainedLimit>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.omCostLowSustainedLimit>/g, obj, "omCostLowSustainedLimit", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceOperationMaintenanceCost.solidfuelPercentAboveLowSustainedLimit>([\s\S]*?)<\/cim:ResourceOperationMaintenanceCost.solidfuelPercentAboveLowSustainedLimit>/g, obj, "solidfuelPercentAboveLowSustainedLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:ResourceOperationMaintenanceCost.ResourceVerifiableCosts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceVerifiableCosts", sub, context);

                var bucket = context.parsed.ResourceOperationMaintenanceCost;
                if (null == bucket)
                   context.parsed.ResourceOperationMaintenanceCost = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_element (obj, "ResourceOperationMaintenanceCost", "gasPercentAboveLowSustainedLimit", base.from_string, fields);
                base.export_element (obj, "ResourceOperationMaintenanceCost", "oilPercentAboveLowSustainedLimit", base.from_string, fields);
                base.export_element (obj, "ResourceOperationMaintenanceCost", "omCostColdStartup", base.from_float, fields);
                base.export_element (obj, "ResourceOperationMaintenanceCost", "omCostHotStartup", base.from_float, fields);
                base.export_element (obj, "ResourceOperationMaintenanceCost", "omCostIntermediateStartup", base.from_float, fields);
                base.export_element (obj, "ResourceOperationMaintenanceCost", "omCostLowSustainedLimit", base.from_float, fields);
                base.export_element (obj, "ResourceOperationMaintenanceCost", "solidfuelPercentAboveLowSustainedLimit", base.from_string, fields);
                base.export_attribute (obj, "ResourceOperationMaintenanceCost", "ResourceVerifiableCosts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A pricing node is directly associated with a connectivity node.
         *
         * It is a pricing location for which market participants submit their bids, offers, buy/sell CRRs, and settle.
         *
         */
        class Pnode extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Pnode;
                if (null == bucket)
                   cim_data.Pnode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Pnode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Pnode";
                base.parse_element (/<cim:Pnode.endEffectiveDate>([\s\S]*?)<\/cim:Pnode.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:Pnode.isPublic>([\s\S]*?)<\/cim:Pnode.isPublic>/g, obj, "isPublic", base.to_boolean, sub, context);
                base.parse_element (/<cim:Pnode.startEffectiveDate>([\s\S]*?)<\/cim:Pnode.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:Pnode.type>([\s\S]*?)<\/cim:Pnode.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:Pnode.usage>([\s\S]*?)<\/cim:Pnode.usage>/g, obj, "usage", base.to_string, sub, context);
                base.parse_attribute (/<cim:Pnode.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                base.parse_attribute (/<cim:Pnode.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);

                var bucket = context.parsed.Pnode;
                if (null == bucket)
                   context.parsed.Pnode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "Pnode", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "Pnode", "isPublic", base.from_boolean, fields);
                base.export_element (obj, "Pnode", "startEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "Pnode", "type", base.from_string, fields);
                base.export_element (obj, "Pnode", "usage", base.from_string, fields);
                base.export_attribute (obj, "Pnode", "SubControlArea", fields);
                base.export_attribute (obj, "Pnode", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The energy consumption of a generating resource to complete a start-up from the StartUpEnergyCurve.
         *
         * Definition of the StartUpEnergyCurve includes, xvalue as the cooling time and y1value as the MW value.
         *
         */
        class StartUpEnergyCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StartUpEnergyCurve;
                if (null == bucket)
                   cim_data.StartUpEnergyCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StartUpEnergyCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartUpEnergyCurve";
                base.parse_attribute (/<cim:StartUpEnergyCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.StartUpEnergyCurve;
                if (null == bucket)
                   context.parsed.StartUpEnergyCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_attribute (obj, "StartUpEnergyCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This is the cureve that describes the load reduction time.
         *
         * Relationship between time (Y1-axis) vs. MW (X-axis).
         *
         */
        class LoadReductionTimeCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadReductionTimeCurve;
                if (null == bucket)
                   cim_data.LoadReductionTimeCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadReductionTimeCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "LoadReductionTimeCurve";
                base.parse_element (/<cim:LoadReductionTimeCurve.loadReductionTimeCurveType>([\s\S]*?)<\/cim:LoadReductionTimeCurve.loadReductionTimeCurveType>/g, obj, "loadReductionTimeCurveType", base.to_string, sub, context);

                var bucket = context.parsed.LoadReductionTimeCurve;
                if (null == bucket)
                   context.parsed.LoadReductionTimeCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_element (obj, "LoadReductionTimeCurve", "loadReductionTimeCurveType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970: Generation: Production:HeatRateCurve
         *
         */
        class MktHeatRateCurve extends Production.HeatRateCurve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktHeatRateCurve;
                if (null == bucket)
                   cim_data.MktHeatRateCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktHeatRateCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Production.HeatRateCurve.prototype.parse.call (this, context, sub);
                obj.cls = "MktHeatRateCurve";
                base.parse_attribute (/<cim:MktHeatRateCurve.ResourceVerifiableCosts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceVerifiableCosts", sub, context);
                base.parse_attribute (/<cim:MktHeatRateCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.MktHeatRateCurve;
                if (null == bucket)
                   context.parsed.MktHeatRateCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["HeatRateCurve"](obj, exporters, false);

                base.export_attribute (obj, "MktHeatRateCurve", "ResourceVerifiableCosts", fields);
                base.export_attribute (obj, "MktHeatRateCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A HostControlArea has a set of tie points and a set of generator controls (i.e., AGC).
         *
         * It also has a total load, including transmission and distribution losses.
         *
         */
        class HostControlArea extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HostControlArea;
                if (null == bucket)
                   cim_data.HostControlArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HostControlArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "HostControlArea";
                base.parse_element (/<cim:HostControlArea.areaControlMode>([\s\S]*?)<\/cim:HostControlArea.areaControlMode>/g, obj, "areaControlMode", base.to_string, sub, context);
                base.parse_element (/<cim:HostControlArea.endEffectiveDate>([\s\S]*?)<\/cim:HostControlArea.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:HostControlArea.freqSetPoint>([\s\S]*?)<\/cim:HostControlArea.freqSetPoint>/g, obj, "freqSetPoint", base.to_string, sub, context);
                base.parse_element (/<cim:HostControlArea.frequencyBiasFactor>([\s\S]*?)<\/cim:HostControlArea.frequencyBiasFactor>/g, obj, "frequencyBiasFactor", base.to_float, sub, context);
                base.parse_element (/<cim:HostControlArea.startEffectiveDate>([\s\S]*?)<\/cim:HostControlArea.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:HostControlArea.Controls\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Controls", sub, context);
                base.parse_attribute (/<cim:HostControlArea.AdjacentCASet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AdjacentCASet", sub, context);
                base.parse_attribute (/<cim:HostControlArea.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);

                var bucket = context.parsed.HostControlArea;
                if (null == bucket)
                   context.parsed.HostControlArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["PowerSystemResource"](obj, exporters, false);

                base.export_element (obj, "HostControlArea", "areaControlMode", base.from_string, fields);
                base.export_element (obj, "HostControlArea", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "HostControlArea", "freqSetPoint", base.from_string, fields);
                base.export_element (obj, "HostControlArea", "frequencyBiasFactor", base.from_float, fields);
                base.export_element (obj, "HostControlArea", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "HostControlArea", "Controls", fields);
                base.export_attribute (obj, "HostControlArea", "AdjacentCASet", fields);
                base.export_attribute (obj, "HostControlArea", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Model to support processing of reliability must run units.
         *
         */
        class RMRStartUpEnergyCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RMRStartUpEnergyCurve;
                if (null == bucket)
                   cim_data.RMRStartUpEnergyCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RMRStartUpEnergyCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "RMRStartUpEnergyCurve";
                base.parse_attribute (/<cim:RMRStartUpEnergyCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.RMRStartUpEnergyCurve;
                if (null == bucket)
                   context.parsed.RMRStartUpEnergyCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_attribute (obj, "RMRStartUpEnergyCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Transmission Access Charge Area.
         *
         * Charges assessed, on behalf of the Participating Transmission Owner, to parties who require access to the controlled grid.
         *
         */
        class TACArea extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TACArea;
                if (null == bucket)
                   cim_data.TACArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TACArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TACArea";
                base.parse_element (/<cim:TACArea.endEffectiveDate>([\s\S]*?)<\/cim:TACArea.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:TACArea.startEffectiveDate>([\s\S]*?)<\/cim:TACArea.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);

                var bucket = context.parsed.TACArea;
                if (null == bucket)
                   context.parsed.TACArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "TACArea", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "TACArea", "startEffectiveDate", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Allows definition of reliablity areas (eg load pockets) within the ISO/RTO
         *
         */
        class LocalReliabilityArea extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LocalReliabilityArea;
                if (null == bucket)
                   cim_data.LocalReliabilityArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LocalReliabilityArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LocalReliabilityArea";
                base.parse_attribute (/<cim:LocalReliabilityArea.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);

                var bucket = context.parsed.LocalReliabilityArea;
                if (null == bucket)
                   context.parsed.LocalReliabilityArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "LocalReliabilityArea", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Model to support processing of reliability must run units.
         *
         */
        class RMRStartUpTimeCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RMRStartUpTimeCurve;
                if (null == bucket)
                   cim_data.RMRStartUpTimeCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RMRStartUpTimeCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "RMRStartUpTimeCurve";
                base.parse_attribute (/<cim:RMRStartUpTimeCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.RMRStartUpTimeCurve;
                if (null == bucket)
                   context.parsed.RMRStartUpTimeCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_attribute (obj, "RMRStartUpTimeCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class represents the physical characteristc of a generator regarding the regulating limit
         *
         */
        class RegulatingLimit extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RegulatingLimit;
                if (null == bucket)
                   cim_data.RegulatingLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RegulatingLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "RegulatingLimit";
                base.parse_element (/<cim:RegulatingLimit.highLimit>([\s\S]*?)<\/cim:RegulatingLimit.highLimit>/g, obj, "highLimit", base.to_string, sub, context);
                base.parse_element (/<cim:RegulatingLimit.lowLimit>([\s\S]*?)<\/cim:RegulatingLimit.lowLimit>/g, obj, "lowLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:RegulatingLimit.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.RegulatingLimit;
                if (null == bucket)
                   context.parsed.RegulatingLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "RegulatingLimit", "highLimit", base.from_string, fields);
                base.export_element (obj, "RegulatingLimit", "lowLimit", base.from_string, fields);
                base.export_attribute (obj, "RegulatingLimit", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Indicates Control Area associated with self-schedule.
         *
         */
        class ControlAreaDesignation extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ControlAreaDesignation;
                if (null == bucket)
                   cim_data.ControlAreaDesignation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ControlAreaDesignation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ControlAreaDesignation";
                base.parse_element (/<cim:ControlAreaDesignation.attained>([\s\S]*?)<\/cim:ControlAreaDesignation.attained>/g, obj, "attained", base.to_string, sub, context);
                base.parse_element (/<cim:ControlAreaDesignation.native>([\s\S]*?)<\/cim:ControlAreaDesignation.native>/g, obj, "native", base.to_string, sub, context);

                var bucket = context.parsed.ControlAreaDesignation;
                if (null == bucket)
                   context.parsed.ControlAreaDesignation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ControlAreaDesignation", "attained", base.from_string, fields);
                base.export_element (obj, "ControlAreaDesignation", "native", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The maximum Startup costs and time as a function of down time.
         *
         * Relationship between unit startup cost (Y1-axis) vs. unit elapsed down time (X-axis). This is used to validate the information provided in the Bid.
         *
         */
        class MaxStartUpCostCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MaxStartUpCostCurve;
                if (null == bucket)
                   cim_data.MaxStartUpCostCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MaxStartUpCostCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "MaxStartUpCostCurve";

                var bucket = context.parsed.MaxStartUpCostCurve;
                if (null == bucket)
                   context.parsed.MaxStartUpCostCurve = bucket = {};
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
         * Participation factors per Cnode.
         *
         * Used to calculate "participation" of Cnode in an AggregateNode. Each Cnode associated to an AggregateNode would be assigned a participation factor for its participation within the AggregateNode.
         *
         */
        class CnodeDistributionFactor extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CnodeDistributionFactor;
                if (null == bucket)
                   cim_data.CnodeDistributionFactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CnodeDistributionFactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CnodeDistributionFactor";
                base.parse_element (/<cim:CnodeDistributionFactor.factor>([\s\S]*?)<\/cim:CnodeDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
                base.parse_element (/<cim:CnodeDistributionFactor.podLossFactor>([\s\S]*?)<\/cim:CnodeDistributionFactor.podLossFactor>/g, obj, "podLossFactor", base.to_float, sub, context);
                base.parse_attribute (/<cim:CnodeDistributionFactor.AggregateNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregateNode", sub, context);
                base.parse_attribute (/<cim:CnodeDistributionFactor.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);
                base.parse_attribute (/<cim:CnodeDistributionFactor.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attribute (/<cim:CnodeDistributionFactor.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);

                var bucket = context.parsed.CnodeDistributionFactor;
                if (null == bucket)
                   context.parsed.CnodeDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "CnodeDistributionFactor", "factor", base.from_float, fields);
                base.export_element (obj, "CnodeDistributionFactor", "podLossFactor", base.from_float, fields);
                base.export_attribute (obj, "CnodeDistributionFactor", "AggregateNode", fields);
                base.export_attribute (obj, "CnodeDistributionFactor", "MktConnectivityNode", fields);
                base.export_attribute (obj, "CnodeDistributionFactor", "HostControlArea", fields);
                base.export_attribute (obj, "CnodeDistributionFactor", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Provides a reference to the Market Power Mitigation test identifiers and methods for the results of the DA or RT markets.
         *
         * Specific data is the test identifier (Price, Conduct, or Impact) and the test method (System MPM, Local MPM, Alternate System MPM, or Alternate Local MPM).
         *
         */
        class MPMTestCategory extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MPMTestCategory;
                if (null == bucket)
                   cim_data.MPMTestCategory = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MPMTestCategory[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MPMTestCategory";
                base.parse_element (/<cim:MPMTestCategory.testIdentifier>([\s\S]*?)<\/cim:MPMTestCategory.testIdentifier>/g, obj, "testIdentifier", base.to_string, sub, context);
                base.parse_element (/<cim:MPMTestCategory.testMethod>([\s\S]*?)<\/cim:MPMTestCategory.testMethod>/g, obj, "testMethod", base.to_string, sub, context);
                base.parse_element (/<cim:MPMTestCategory.purposeFlag>([\s\S]*?)<\/cim:MPMTestCategory.purposeFlag>/g, obj, "purposeFlag", base.to_string, sub, context);

                var bucket = context.parsed.MPMTestCategory;
                if (null == bucket)
                   context.parsed.MPMTestCategory = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "MPMTestCategory", "testIdentifier", base.from_string, fields);
                base.export_element (obj, "MPMTestCategory", "testMethod", base.from_string, fields);
                base.export_element (obj, "MPMTestCategory", "purposeFlag", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Price of oil in monetary units
         *
         */
        class OilPrice extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OilPrice;
                if (null == bucket)
                   cim_data.OilPrice = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OilPrice[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OilPrice";
                base.parse_element (/<cim:OilPrice.oilPriceIndex>([\s\S]*?)<\/cim:OilPrice.oilPriceIndex>/g, obj, "oilPriceIndex", base.to_float, sub, context);
                base.parse_attribute (/<cim:OilPrice.FuelRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FuelRegion", sub, context);

                var bucket = context.parsed.OilPrice;
                if (null == bucket)
                   context.parsed.OilPrice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "OilPrice", "oilPriceIndex", base.from_float, fields);
                base.export_attribute (obj, "OilPrice", "FuelRegion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Configuration Member of CCP Configuration.
         *
         */
        class CombinedCycleConfigurationMember extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CombinedCycleConfigurationMember;
                if (null == bucket)
                   cim_data.CombinedCycleConfigurationMember = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CombinedCycleConfigurationMember[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CombinedCycleConfigurationMember";
                base.parse_element (/<cim:CombinedCycleConfigurationMember.primary>([\s\S]*?)<\/cim:CombinedCycleConfigurationMember.primary>/g, obj, "primary", base.to_boolean, sub, context);
                base.parse_element (/<cim:CombinedCycleConfigurationMember.steam>([\s\S]*?)<\/cim:CombinedCycleConfigurationMember.steam>/g, obj, "steam", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:CombinedCycleConfigurationMember.MktThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktThermalGeneratingUnit", sub, context);
                base.parse_attribute (/<cim:CombinedCycleConfigurationMember.CombinedCycleConfiguration\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCycleConfiguration", sub, context);

                var bucket = context.parsed.CombinedCycleConfigurationMember;
                if (null == bucket)
                   context.parsed.CombinedCycleConfigurationMember = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "CombinedCycleConfigurationMember", "primary", base.from_boolean, fields);
                base.export_element (obj, "CombinedCycleConfigurationMember", "steam", base.from_boolean, fields);
                base.export_attribute (obj, "CombinedCycleConfigurationMember", "MktThermalGeneratingUnit", fields);
                base.export_attribute (obj, "CombinedCycleConfigurationMember", "CombinedCycleConfiguration", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class represent the bid price cap.
         *
         */
        class BidPriceCap extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BidPriceCap;
                if (null == bucket)
                   cim_data.BidPriceCap = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BidPriceCap[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BidPriceCap";
                base.parse_element (/<cim:BidPriceCap.marketType>([\s\S]*?)<\/cim:BidPriceCap.marketType>/g, obj, "marketType", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceCap.bidFloor>([\s\S]*?)<\/cim:BidPriceCap.bidFloor>/g, obj, "bidFloor", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceCap.bidCeiling>([\s\S]*?)<\/cim:BidPriceCap.bidCeiling>/g, obj, "bidCeiling", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceCap.defaultPrice>([\s\S]*?)<\/cim:BidPriceCap.defaultPrice>/g, obj, "defaultPrice", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceCap.bidFloorAS>([\s\S]*?)<\/cim:BidPriceCap.bidFloorAS>/g, obj, "bidFloorAS", base.to_string, sub, context);
                base.parse_element (/<cim:BidPriceCap.bidCeilingAS>([\s\S]*?)<\/cim:BidPriceCap.bidCeilingAS>/g, obj, "bidCeilingAS", base.to_string, sub, context);
                base.parse_attribute (/<cim:BidPriceCap.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);

                var bucket = context.parsed.BidPriceCap;
                if (null == bucket)
                   context.parsed.BidPriceCap = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "BidPriceCap", "marketType", base.from_string, fields);
                base.export_element (obj, "BidPriceCap", "bidFloor", base.from_string, fields);
                base.export_element (obj, "BidPriceCap", "bidCeiling", base.from_string, fields);
                base.export_element (obj, "BidPriceCap", "defaultPrice", base.from_string, fields);
                base.export_element (obj, "BidPriceCap", "bidFloorAS", base.from_string, fields);
                base.export_element (obj, "BidPriceCap", "bidCeilingAS", base.from_string, fields);
                base.export_attribute (obj, "BidPriceCap", "MarketProduct", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * IDC (Interchange Distribution Calulator) sends data for a TLR (Transmission Loading Relief).
         *
         */
        class FlowgateRelief extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FlowgateRelief;
                if (null == bucket)
                   cim_data.FlowgateRelief = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FlowgateRelief[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FlowgateRelief";
                base.parse_element (/<cim:FlowgateRelief.effectiveDate>([\s\S]*?)<\/cim:FlowgateRelief.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:FlowgateRelief.terminateDate>([\s\S]*?)<\/cim:FlowgateRelief.terminateDate>/g, obj, "terminateDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:FlowgateRelief.idcTargetMktFlow>([\s\S]*?)<\/cim:FlowgateRelief.idcTargetMktFlow>/g, obj, "idcTargetMktFlow", base.to_string, sub, context);
                base.parse_attribute (/<cim:FlowgateRelief.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);

                var bucket = context.parsed.FlowgateRelief;
                if (null == bucket)
                   context.parsed.FlowgateRelief = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "FlowgateRelief", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "FlowgateRelief", "terminateDate", base.from_datetime, fields);
                base.export_element (obj, "FlowgateRelief", "idcTargetMktFlow", base.from_string, fields);
                base.export_attribute (obj, "FlowgateRelief", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Forbbiden region is operating ranges where the units are unable to maintain steady operation without causing equipment damage.
         *
         * The four attributes that define a forbidden region are the low MW, the High MW, the crossing time, and the crossing cost.
         *
         */
        class ForbiddenRegion extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ForbiddenRegion;
                if (null == bucket)
                   cim_data.ForbiddenRegion = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ForbiddenRegion[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ForbiddenRegion";
                base.parse_element (/<cim:ForbiddenRegion.crossingCost>([\s\S]*?)<\/cim:ForbiddenRegion.crossingCost>/g, obj, "crossingCost", base.to_float, sub, context);
                base.parse_element (/<cim:ForbiddenRegion.crossTime>([\s\S]*?)<\/cim:ForbiddenRegion.crossTime>/g, obj, "crossTime", base.to_string, sub, context);
                base.parse_element (/<cim:ForbiddenRegion.highMW>([\s\S]*?)<\/cim:ForbiddenRegion.highMW>/g, obj, "highMW", base.to_float, sub, context);
                base.parse_element (/<cim:ForbiddenRegion.lowMW>([\s\S]*?)<\/cim:ForbiddenRegion.lowMW>/g, obj, "lowMW", base.to_float, sub, context);

                var bucket = context.parsed.ForbiddenRegion;
                if (null == bucket)
                   context.parsed.ForbiddenRegion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "ForbiddenRegion", "crossingCost", base.from_float, fields);
                base.export_element (obj, "ForbiddenRegion", "crossTime", base.from_string, fields);
                base.export_element (obj, "ForbiddenRegion", "highMW", base.from_float, fields);
                base.export_element (obj, "ForbiddenRegion", "lowMW", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Certain skills are required and shall be certified in order for a person (typically a member of a crew) to be qualified to work on types of equipment.
         *
         */
        class MarketQualificationRequirement extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketQualificationRequirement;
                if (null == bucket)
                   cim_data.MarketQualificationRequirement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketQualificationRequirement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketQualificationRequirement";
                base.parse_element (/<cim:MarketQualificationRequirement.effectiveDate>([\s\S]*?)<\/cim:MarketQualificationRequirement.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketQualificationRequirement.expirationDate>([\s\S]*?)<\/cim:MarketQualificationRequirement.expirationDate>/g, obj, "expirationDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketQualificationRequirement.qualificationID>([\s\S]*?)<\/cim:MarketQualificationRequirement.qualificationID>/g, obj, "qualificationID", base.to_string, sub, context);
                base.parse_element (/<cim:MarketQualificationRequirement.status>([\s\S]*?)<\/cim:MarketQualificationRequirement.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:MarketQualificationRequirement.statusType>([\s\S]*?)<\/cim:MarketQualificationRequirement.statusType>/g, obj, "statusType", base.to_string, sub, context);

                var bucket = context.parsed.MarketQualificationRequirement;
                if (null == bucket)
                   context.parsed.MarketQualificationRequirement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "MarketQualificationRequirement", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "MarketQualificationRequirement", "expirationDate", base.from_datetime, fields);
                base.export_element (obj, "MarketQualificationRequirement", "qualificationID", base.from_string, fields);
                base.export_element (obj, "MarketQualificationRequirement", "status", base.from_string, fields);
                base.export_element (obj, "MarketQualificationRequirement", "statusType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * List of resources that can be substituted for within the bounds of a Contract definition.
         *
         * This class has a precedence and a resource.
         *
         */
        class SubstitutionResourceList extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SubstitutionResourceList;
                if (null == bucket)
                   cim_data.SubstitutionResourceList = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SubstitutionResourceList[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SubstitutionResourceList";
                base.parse_element (/<cim:SubstitutionResourceList.precedence>([\s\S]*?)<\/cim:SubstitutionResourceList.precedence>/g, obj, "precedence", base.to_string, sub, context);
                base.parse_attribute (/<cim:SubstitutionResourceList.TransmissionContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context);
                base.parse_attribute (/<cim:SubstitutionResourceList.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.SubstitutionResourceList;
                if (null == bucket)
                   context.parsed.SubstitutionResourceList = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "SubstitutionResourceList", "precedence", base.from_string, fields);
                base.export_attribute (obj, "SubstitutionResourceList", "TransmissionContractRight", fields);
                base.export_attribute (obj, "SubstitutionResourceList", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Distribution amoung resources at the sink point or source point
         *
         */
        class ContractDistributionFactor extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ContractDistributionFactor;
                if (null == bucket)
                   cim_data.ContractDistributionFactor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ContractDistributionFactor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ContractDistributionFactor";
                base.parse_element (/<cim:ContractDistributionFactor.factor>([\s\S]*?)<\/cim:ContractDistributionFactor.factor>/g, obj, "factor", base.to_float, sub, context);
                base.parse_element (/<cim:ContractDistributionFactor.sourceFlag>([\s\S]*?)<\/cim:ContractDistributionFactor.sourceFlag>/g, obj, "sourceFlag", base.to_string, sub, context);
                base.parse_element (/<cim:ContractDistributionFactor.sinkFlag>([\s\S]*?)<\/cim:ContractDistributionFactor.sinkFlag>/g, obj, "sinkFlag", base.to_string, sub, context);
                base.parse_attribute (/<cim:ContractDistributionFactor.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:ContractDistributionFactor.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:ContractDistributionFactor.TransmissionContractRight\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionContractRight", sub, context);

                var bucket = context.parsed.ContractDistributionFactor;
                if (null == bucket)
                   context.parsed.ContractDistributionFactor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ContractDistributionFactor", "factor", base.from_float, fields);
                base.export_element (obj, "ContractDistributionFactor", "sourceFlag", base.from_string, fields);
                base.export_element (obj, "ContractDistributionFactor", "sinkFlag", base.from_string, fields);
                base.export_attribute (obj, "ContractDistributionFactor", "RegisteredResource", fields);
                base.export_attribute (obj, "ContractDistributionFactor", "Flowgate", fields);
                base.export_attribute (obj, "ContractDistributionFactor", "TransmissionContractRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Model to support processing of reliability must run units.
         *
         */
        class RMRStartUpFuelCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RMRStartUpFuelCurve;
                if (null == bucket)
                   cim_data.RMRStartUpFuelCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RMRStartUpFuelCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "RMRStartUpFuelCurve";
                base.parse_attribute (/<cim:RMRStartUpFuelCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.RMRStartUpFuelCurve;
                if (null == bucket)
                   context.parsed.RMRStartUpFuelCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_attribute (obj, "RMRStartUpFuelCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Relationship between unit fuel cost in \$/kWh(Y-axis) and  unit output in MW (X-axis).
         *
         */
        class FuelCostCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FuelCostCurve;
                if (null == bucket)
                   cim_data.FuelCostCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FuelCostCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "FuelCostCurve";
                base.parse_attribute (/<cim:FuelCostCurve.RegisteredGenerator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredGenerator", sub, context);

                var bucket = context.parsed.FuelCostCurve;
                if (null == bucket)
                   context.parsed.FuelCostCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Curve"](obj, exporters, false);

                base.export_attribute (obj, "FuelCostCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An area defined for the purpose of tracking interchange with surrounding areas via tie points; may or may not serve as a control area.
         *
         */
        class SubControlArea extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SubControlArea;
                if (null == bucket)
                   cim_data.SubControlArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SubControlArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "SubControlArea";
                base.parse_element (/<cim:SubControlArea.areaShortName>([\s\S]*?)<\/cim:SubControlArea.areaShortName>/g, obj, "areaShortName", base.to_string, sub, context);
                base.parse_element (/<cim:SubControlArea.constantCoefficient>([\s\S]*?)<\/cim:SubControlArea.constantCoefficient>/g, obj, "constantCoefficient", base.to_float, sub, context);
                base.parse_element (/<cim:SubControlArea.embeddedControlArea>([\s\S]*?)<\/cim:SubControlArea.embeddedControlArea>/g, obj, "embeddedControlArea", base.to_string, sub, context);
                base.parse_element (/<cim:SubControlArea.endEffectiveDate>([\s\S]*?)<\/cim:SubControlArea.endEffectiveDate>/g, obj, "endEffectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:SubControlArea.internalCA>([\s\S]*?)<\/cim:SubControlArea.internalCA>/g, obj, "internalCA", base.to_string, sub, context);
                base.parse_element (/<cim:SubControlArea.linearCoefficient>([\s\S]*?)<\/cim:SubControlArea.linearCoefficient>/g, obj, "linearCoefficient", base.to_float, sub, context);
                base.parse_element (/<cim:SubControlArea.localCA>([\s\S]*?)<\/cim:SubControlArea.localCA>/g, obj, "localCA", base.to_string, sub, context);
                base.parse_element (/<cim:SubControlArea.maxSelfSchedMW>([\s\S]*?)<\/cim:SubControlArea.maxSelfSchedMW>/g, obj, "maxSelfSchedMW", base.to_float, sub, context);
                base.parse_element (/<cim:SubControlArea.minSelfSchedMW>([\s\S]*?)<\/cim:SubControlArea.minSelfSchedMW>/g, obj, "minSelfSchedMW", base.to_float, sub, context);
                base.parse_element (/<cim:SubControlArea.quadraticCoefficient>([\s\S]*?)<\/cim:SubControlArea.quadraticCoefficient>/g, obj, "quadraticCoefficient", base.to_float, sub, context);
                base.parse_element (/<cim:SubControlArea.startEffectiveDate>([\s\S]*?)<\/cim:SubControlArea.startEffectiveDate>/g, obj, "startEffectiveDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:SubControlArea.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attribute (/<cim:SubControlArea.AdjacentCASet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AdjacentCASet", sub, context);
                base.parse_attribute (/<cim:SubControlArea.AreaReserveSpecification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AreaReserveSpecification", sub, context);
                base.parse_attribute (/<cim:SubControlArea.RTO\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);

                var bucket = context.parsed.SubControlArea;
                if (null == bucket)
                   context.parsed.SubControlArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["PowerSystemResource"](obj, exporters, false);

                base.export_element (obj, "SubControlArea", "areaShortName", base.from_string, fields);
                base.export_element (obj, "SubControlArea", "constantCoefficient", base.from_float, fields);
                base.export_element (obj, "SubControlArea", "embeddedControlArea", base.from_string, fields);
                base.export_element (obj, "SubControlArea", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "SubControlArea", "internalCA", base.from_string, fields);
                base.export_element (obj, "SubControlArea", "linearCoefficient", base.from_float, fields);
                base.export_element (obj, "SubControlArea", "localCA", base.from_string, fields);
                base.export_element (obj, "SubControlArea", "maxSelfSchedMW", base.from_float, fields);
                base.export_element (obj, "SubControlArea", "minSelfSchedMW", base.from_float, fields);
                base.export_element (obj, "SubControlArea", "quadraticCoefficient", base.from_float, fields);
                base.export_element (obj, "SubControlArea", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "SubControlArea", "HostControlArea", fields);
                base.export_attribute (obj, "SubControlArea", "AdjacentCASet", fields);
                base.export_attribute (obj, "SubControlArea", "AreaReserveSpecification", fields);
                base.export_attribute (obj, "SubControlArea", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Subclass of IEC61970:Core:ConductingEquipment
         *
         */
        class MktConductingEquipment extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MktConductingEquipment;
                if (null == bucket)
                   cim_data.MktConductingEquipment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MktConductingEquipment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "MktConductingEquipment";

                var bucket = context.parsed.MktConductingEquipment;
                if (null == bucket)
                   context.parsed.MktConductingEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ConductingEquipment"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Configuration options for combined cycle units.
         *
         * For example, a Combined Cycle with (CT1, CT2, ST1) will have (CT1, ST1) and (CT2, ST1) configurations as part of(1CT + 1STlogicalconfiguration).
         *
         */
        class CombinedCycleConfiguration extends RegisteredGenerator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CombinedCycleConfiguration;
                if (null == bucket)
                   cim_data.CombinedCycleConfiguration = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CombinedCycleConfiguration[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = RegisteredGenerator.prototype.parse.call (this, context, sub);
                obj.cls = "CombinedCycleConfiguration";
                base.parse_element (/<cim:CombinedCycleConfiguration.primaryConfiguration>([\s\S]*?)<\/cim:CombinedCycleConfiguration.primaryConfiguration>/g, obj, "primaryConfiguration", base.to_boolean, sub, context);
                base.parse_element (/<cim:CombinedCycleConfiguration.ShutdownFlag>([\s\S]*?)<\/cim:CombinedCycleConfiguration.ShutdownFlag>/g, obj, "ShutdownFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:CombinedCycleConfiguration.StartupFlag>([\s\S]*?)<\/cim:CombinedCycleConfiguration.StartupFlag>/g, obj, "StartupFlag", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:CombinedCycleConfiguration.CombinedCycleLogicalConfiguration\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCycleLogicalConfiguration", sub, context);

                var bucket = context.parsed.CombinedCycleConfiguration;
                if (null == bucket)
                   context.parsed.CombinedCycleConfiguration = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["RegisteredGenerator"](obj, exporters, false);

                base.export_element (obj, "CombinedCycleConfiguration", "primaryConfiguration", base.from_boolean, fields);
                base.export_element (obj, "CombinedCycleConfiguration", "ShutdownFlag", base.from_boolean, fields);
                base.export_element (obj, "CombinedCycleConfiguration", "StartupFlag", base.from_boolean, fields);
                base.export_attribute (obj, "CombinedCycleConfiguration", "CombinedCycleLogicalConfiguration", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A specialized class of type AggregatedNode type.
         *
         * Defines Load Aggregation Points.
         *
         */
        class LoadAggregationPoint extends AggregateNode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadAggregationPoint;
                if (null == bucket)
                   cim_data.LoadAggregationPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadAggregationPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AggregateNode.prototype.parse.call (this, context, sub);
                obj.cls = "LoadAggregationPoint";

                var bucket = context.parsed.LoadAggregationPoint;
                if (null == bucket)
                   context.parsed.LoadAggregationPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["AggregateNode"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A specialized class of AggregatedNode type.
         *
         * Defines the MarketRegions. Regions could be system Market Regions, Energy Regions or Ancillary Service Regions.
         *
         */
        class MarketRegion extends AggregateNode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MarketRegion;
                if (null == bucket)
                   cim_data.MarketRegion = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketRegion[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AggregateNode.prototype.parse.call (this, context, sub);
                obj.cls = "MarketRegion";

                var bucket = context.parsed.MarketRegion;
                if (null == bucket)
                   context.parsed.MarketRegion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["AggregateNode"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Model to define a zone within a Metered Sub System
         *
         */
        class MSSZone extends AggregateNode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MSSZone;
                if (null == bucket)
                   cim_data.MSSZone = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MSSZone[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AggregateNode.prototype.parse.call (this, context, sub);
                obj.cls = "MSSZone";
                base.parse_element (/<cim:MSSZone.ignoreLosses>([\s\S]*?)<\/cim:MSSZone.ignoreLosses>/g, obj, "ignoreLosses", base.to_string, sub, context);
                base.parse_element (/<cim:MSSZone.lossFactor>([\s\S]*?)<\/cim:MSSZone.lossFactor>/g, obj, "lossFactor", base.to_float, sub, context);
                base.parse_element (/<cim:MSSZone.rucGrossSettlement>([\s\S]*?)<\/cim:MSSZone.rucGrossSettlement>/g, obj, "rucGrossSettlement", base.to_string, sub, context);
                base.parse_attribute (/<cim:MSSZone.MeteredSubSystem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeteredSubSystem", sub, context);

                var bucket = context.parsed.MSSZone;
                if (null == bucket)
                   context.parsed.MSSZone = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["AggregateNode"](obj, exporters, false);

                base.export_element (obj, "MSSZone", "ignoreLosses", base.from_string, fields);
                base.export_element (obj, "MSSZone", "lossFactor", base.from_float, fields);
                base.export_element (obj, "MSSZone", "rucGrossSettlement", base.from_string, fields);
                base.export_attribute (obj, "MSSZone", "MeteredSubSystem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A specialized class of type AggregatedNode type.
         *
         * Defines RUC Zones. A forecast region represents a collection of Nodes for which the Market operator has developed sufficient historical demand and relevant weather data to perform a demand forecast for such area. The Market Operator may further adjust this forecast to ensure that the Reliability Unit Commitment produces adequate local capacity procurement.
         *
         */
        class RUCZone extends AggregateNode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RUCZone;
                if (null == bucket)
                   cim_data.RUCZone = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RUCZone[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AggregateNode.prototype.parse.call (this, context, sub);
                obj.cls = "RUCZone";

                var bucket = context.parsed.RUCZone;
                if (null == bucket)
                   context.parsed.RUCZone = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["AggregateNode"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Individual pricing node based on Pnode
         *
         */
        class IndividualPnode extends Pnode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IndividualPnode;
                if (null == bucket)
                   cim_data.IndividualPnode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IndividualPnode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Pnode.prototype.parse.call (this, context, sub);
                obj.cls = "IndividualPnode";
                base.parse_attribute (/<cim:IndividualPnode.MktConnectivityNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);
                base.parse_attribute (/<cim:IndividualPnode.GenDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenDistributionFactor", sub, context);
                base.parse_attribute (/<cim:IndividualPnode.LoadDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadDistributionFactor", sub, context);

                var bucket = context.parsed.IndividualPnode;
                if (null == bucket)
                   context.parsed.IndividualPnode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Pnode"](obj, exporters, false);

                base.export_attribute (obj, "IndividualPnode", "MktConnectivityNode", fields);
                base.export_attribute (obj, "IndividualPnode", "GenDistributionFactor", fields);
                base.export_attribute (obj, "IndividualPnode", "LoadDistributionFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An aggregated pricing node is a specialized type of pricing node used to model items such as System Zone, Default Price Zone, Custom Price Zone, Control Area, Aggregated Generation, Aggregated Particpating Load, Aggregated Non-Participating Load, Trading Hub, Designated Control Area(DCA) Zone
         *
         */
        class AggregatedPnode extends Pnode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AggregatedPnode;
                if (null == bucket)
                   cim_data.AggregatedPnode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AggregatedPnode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Pnode.prototype.parse.call (this, context, sub);
                obj.cls = "AggregatedPnode";
                base.parse_element (/<cim:AggregatedPnode.apnodeType>([\s\S]*?)<\/cim:AggregatedPnode.apnodeType>/g, obj, "apnodeType", base.to_string, sub, context);
                base.parse_element (/<cim:AggregatedPnode.participationCategory>([\s\S]*?)<\/cim:AggregatedPnode.participationCategory>/g, obj, "participationCategory", base.to_string, sub, context);
                base.parse_attribute (/<cim:AggregatedPnode.PnodeDistributionFactor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PnodeDistributionFactor", sub, context);

                var bucket = context.parsed.AggregatedPnode;
                if (null == bucket)
                   context.parsed.AggregatedPnode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Pnode"](obj, exporters, false);

                base.export_element (obj, "AggregatedPnode", "apnodeType", base.from_string, fields);
                base.export_element (obj, "AggregatedPnode", "participationCategory", base.from_string, fields);
                base.export_attribute (obj, "AggregatedPnode", "PnodeDistributionFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Designated Congestion Area Definition (DCA)
         *
         */
        class CongestionArea extends AggregatedPnode
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CongestionArea;
                if (null == bucket)
                   cim_data.CongestionArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CongestionArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AggregatedPnode.prototype.parse.call (this, context, sub);
                obj.cls = "CongestionArea";

                var bucket = context.parsed.CongestionArea;
                if (null == bucket)
                   context.parsed.CongestionArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["AggregatedPnode"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                ResourceOperationMaintenanceCost: ResourceOperationMaintenanceCost,
                FlowgateValue: FlowgateValue,
                LoadReductionTimeCurve: LoadReductionTimeCurve,
                MarketRegion: MarketRegion,
                RMRStartUpFuelCurve: RMRStartUpFuelCurve,
                MaxStartUpCostCurve: MaxStartUpCostCurve,
                SubstitutionResourceList: SubstitutionResourceList,
                RegulatingLimit: RegulatingLimit,
                AggregateNode: AggregateNode,
                MktContingency: MktContingency,
                FlowgateRelief: FlowgateRelief,
                MktCombinedCyclePlant: MktCombinedCyclePlant,
                LoadAggregationPoint: LoadAggregationPoint,
                TACArea: TACArea,
                MPMTestThreshold: MPMTestThreshold,
                SchedulingPoint: SchedulingPoint,
                ContractDistributionFactor: ContractDistributionFactor,
                MktThermalGeneratingUnit: MktThermalGeneratingUnit,
                OilPrice: OilPrice,
                RMRStartUpEnergyCurve: RMRStartUpEnergyCurve,
                ResourceVerifiableCosts: ResourceVerifiableCosts,
                MarketPerson: MarketPerson,
                LoadRatio: LoadRatio,
                IndividualPnode: IndividualPnode,
                ResourceAncillaryServiceQualification: ResourceAncillaryServiceQualification,
                FormerReference: FormerReference,
                FuelRegion: FuelRegion,
                RUCZone: RUCZone,
                ControlAreaDesignation: ControlAreaDesignation,
                PnodeDistributionFactor: PnodeDistributionFactor,
                SchedulingCoordinatorUser: SchedulingCoordinatorUser,
                CongestionArea: CongestionArea,
                ResourceCapacity: ResourceCapacity,
                MktConductingEquipment: MktConductingEquipment,
                LocalReliabilityArea: LocalReliabilityArea,
                SchedulingCoordinator: SchedulingCoordinator,
                Flowgate: Flowgate,
                RMRHeatRateCurve: RMRHeatRateCurve,
                TransmissionRightChain: TransmissionRightChain,
                MktHeatRateCurve: MktHeatRateCurve,
                MarketQualificationRequirement: MarketQualificationRequirement,
                StartUpEnergyCurve: StartUpEnergyCurve,
                WheelingCounterParty: WheelingCounterParty,
                FuelCostCurve: FuelCostCurve,
                ContractRight: ContractRight,
                CombinedCycleLogicalConfiguration: CombinedCycleLogicalConfiguration,
                FlowgatePartner: FlowgatePartner,
                OrgPnodeAllocation: OrgPnodeAllocation,
                MarketSkill: MarketSkill,
                AggregatedPnode: AggregatedPnode,
                RegisteredInterTie: RegisteredInterTie,
                RTO: RTO,
                RegisteredGenerator: RegisteredGenerator,
                MPMTestCategory: MPMTestCategory,
                RMRStartUpCostCurve: RMRStartUpCostCurve,
                CombinedCycleConfigurationMember: CombinedCycleConfigurationMember,
                CombinedCycleConfiguration: CombinedCycleConfiguration,
                Pnode: Pnode,
                RegisteredLoad: RegisteredLoad,
                RMRStartUpTimeCurve: RMRStartUpTimeCurve,
                CombinedCycleTransitionState: CombinedCycleTransitionState,
                ResourceStartupCost: ResourceStartupCost,
                AdjacentCASet: AdjacentCASet,
                ForbiddenRegion: ForbiddenRegion,
                SubControlArea: SubControlArea,
                MeteredSubSystem: MeteredSubSystem,
                GasPrice: GasPrice,
                StartUpFuelCurve: StartUpFuelCurve,
                BidPriceCap: BidPriceCap,
                MSSZone: MSSZone,
                OrgResOwnership: OrgResOwnership,
                HostControlArea: HostControlArea,
                CnodeDistributionFactor: CnodeDistributionFactor,
                MSSAggregation: MSSAggregation
            }
        );
    }
);