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

            export (obj, full)
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceCapacity_collapse" aria-expanded="true" aria-controls="ResourceCapacity_collapse" style="margin-left: 10px;">ResourceCapacity</a></legend>
                    <div id="ResourceCapacity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#capacityType}}<div><b>capacityType</b>: {{capacityType}}</div>{{/capacityType}}
                    {{#maximumCapacity}}<div><b>maximumCapacity</b>: {{maximumCapacity}}</div>{{/maximumCapacity}}
                    {{#minimumCapacity}}<div><b>minimumCapacity</b>: {{minimumCapacity}}</div>{{/minimumCapacity}}
                    {{#defaultCapacity}}<div><b>defaultCapacity</b>: {{defaultCapacity}}</div>{{/defaultCapacity}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceCapacity_collapse" aria-expanded="true" aria-controls="ResourceCapacity_collapse" style="margin-left: 10px;">ResourceCapacity</a></legend>
                    <div id="ResourceCapacity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='capacityType'>capacityType: </label><div class='col-sm-8'><input id='capacityType' class='form-control' type='text'{{#capacityType}} value='{{capacityType}}'{{/capacityType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maximumCapacity'>maximumCapacity: </label><div class='col-sm-8'><input id='maximumCapacity' class='form-control' type='text'{{#maximumCapacity}} value='{{maximumCapacity}}'{{/maximumCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumCapacity'>minimumCapacity: </label><div class='col-sm-8'><input id='minimumCapacity' class='form-control' type='text'{{#minimumCapacity}} value='{{minimumCapacity}}'{{/minimumCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='defaultCapacity'>defaultCapacity: </label><div class='col-sm-8'><input id='defaultCapacity' class='form-control' type='text'{{#defaultCapacity}} value='{{defaultCapacity}}'{{/defaultCapacity}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceAncillaryServiceQualification_collapse" aria-expanded="true" aria-controls="ResourceAncillaryServiceQualification_collapse" style="margin-left: 10px;">ResourceAncillaryServiceQualification</a></legend>
                    <div id="ResourceAncillaryServiceQualification_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#certifiedCapacity}}<div><b>certifiedCapacity</b>: {{certifiedCapacity}}</div>{{/certifiedCapacity}}
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#market}}<div><b>market</b>: {{market}}</div>{{/market}}
                    {{#qualificationFlag}}<div><b>qualificationFlag</b>: {{qualificationFlag}}</div>{{/qualificationFlag}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceAncillaryServiceQualification_collapse" aria-expanded="true" aria-controls="ResourceAncillaryServiceQualification_collapse" style="margin-left: 10px;">ResourceAncillaryServiceQualification</a></legend>
                    <div id="ResourceAncillaryServiceQualification_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='certifiedCapacity'>certifiedCapacity: </label><div class='col-sm-8'><input id='certifiedCapacity' class='form-control' type='text'{{#certifiedCapacity}} value='{{certifiedCapacity}}'{{/certifiedCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='market'>market: </label><div class='col-sm-8'><input id='market' class='form-control' type='text'{{#market}} value='{{market}}'{{/market}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qualificationFlag'>qualificationFlag: </label><div class='col-sm-8'><input id='qualificationFlag' class='form-control' type='text'{{#qualificationFlag}} value='{{qualificationFlag}}'{{/qualificationFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Contingency.Contingency.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktContingency_collapse" aria-expanded="true" aria-controls="MktContingency_collapse" style="margin-left: 10px;">MktContingency</a></legend>
                    <div id="MktContingency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Contingency.Contingency.prototype.template.call (this) +
                    `
                    {{#loadRolloverFlag}}<div><b>loadRolloverFlag</b>: {{loadRolloverFlag}}</div>{{/loadRolloverFlag}}
                    {{#ltcControlFlag}}<div><b>ltcControlFlag</b>: {{ltcControlFlag}}</div>{{/ltcControlFlag}}
                    {{#participationFactorSet}}<div><b>participationFactorSet</b>: {{participationFactorSet}}</div>{{/participationFactorSet}}
                    {{#screeningFlag}}<div><b>screeningFlag</b>: {{screeningFlag}}</div>{{/screeningFlag}}
                    {{#TransferInterfaceSolutionB}}<div><b>TransferInterfaceSolutionB</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransferInterfaceSolutionB}}&quot;);})'>{{TransferInterfaceSolutionB}}</a></div>{{/TransferInterfaceSolutionB}}
                    {{#TransferInterfaceSolutionA}}<div><b>TransferInterfaceSolutionA</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransferInterfaceSolutionA}}&quot;);})'>{{TransferInterfaceSolutionA}}</a></div>{{/TransferInterfaceSolutionA}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktContingency_collapse" aria-expanded="true" aria-controls="MktContingency_collapse" style="margin-left: 10px;">MktContingency</a></legend>
                    <div id="MktContingency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Contingency.Contingency.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='loadRolloverFlag'>loadRolloverFlag: </label><div class='col-sm-8'><input id='loadRolloverFlag' class='form-check-input' type='checkbox'{{#loadRolloverFlag}} checked{{/loadRolloverFlag}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='ltcControlFlag'>ltcControlFlag: </label><div class='col-sm-8'><input id='ltcControlFlag' class='form-check-input' type='checkbox'{{#ltcControlFlag}} checked{{/ltcControlFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='participationFactorSet'>participationFactorSet: </label><div class='col-sm-8'><input id='participationFactorSet' class='form-control' type='text'{{#participationFactorSet}} value='{{participationFactorSet}}'{{/participationFactorSet}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='screeningFlag'>screeningFlag: </label><div class='col-sm-8'><input id='screeningFlag' class='form-check-input' type='checkbox'{{#screeningFlag}} checked{{/screeningFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransferInterfaceSolutionB'>TransferInterfaceSolutionB: </label><div class='col-sm-8'><input id='TransferInterfaceSolutionB' class='form-control' type='text'{{#TransferInterfaceSolutionB}} value='{{TransferInterfaceSolutionB}}'{{/TransferInterfaceSolutionB}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransferInterfaceSolutionA'>TransferInterfaceSolutionA: </label><div class='col-sm-8'><input id='TransferInterfaceSolutionA' class='form-control' type='text'{{#TransferInterfaceSolutionA}} value='{{TransferInterfaceSolutionA}}'{{/TransferInterfaceSolutionA}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RMRStartUpCostCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMRStartUpCostCurve_collapse" aria-expanded="true" aria-controls="RMRStartUpCostCurve_collapse" style="margin-left: 10px;">RMRStartUpCostCurve</a></legend>
                    <div id="RMRStartUpCostCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMRStartUpCostCurve_collapse" aria-expanded="true" aria-controls="RMRStartUpCostCurve_collapse" style="margin-left: 10px;">RMRStartUpCostCurve</a></legend>
                    <div id="RMRStartUpCostCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PnodeDistributionFactor_collapse" aria-expanded="true" aria-controls="PnodeDistributionFactor_collapse" style="margin-left: 10px;">PnodeDistributionFactor</a></legend>
                    <div id="PnodeDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
                    {{#offPeak}}<div><b>offPeak</b>: {{offPeak}}</div>{{/offPeak}}
                    {{#onPeak}}<div><b>onPeak</b>: {{onPeak}}</div>{{/onPeak}}
                    {{#podLossFactor}}<div><b>podLossFactor</b>: {{podLossFactor}}</div>{{/podLossFactor}}
                    {{#IndividualPnode}}<div><b>IndividualPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IndividualPnode}}&quot;);})'>{{IndividualPnode}}</a></div>{{/IndividualPnode}}
                    {{#BidDistributionFactor}}<div><b>BidDistributionFactor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BidDistributionFactor}}&quot;);})'>{{BidDistributionFactor}}</a></div>{{/BidDistributionFactor}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PnodeDistributionFactor_collapse" aria-expanded="true" aria-controls="PnodeDistributionFactor_collapse" style="margin-left: 10px;">PnodeDistributionFactor</a></legend>
                    <div id="PnodeDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='factor'>factor: </label><div class='col-sm-8'><input id='factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='offPeak'>offPeak: </label><div class='col-sm-8'><input id='offPeak' class='form-control' type='text'{{#offPeak}} value='{{offPeak}}'{{/offPeak}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='onPeak'>onPeak: </label><div class='col-sm-8'><input id='onPeak' class='form-control' type='text'{{#onPeak}} value='{{onPeak}}'{{/onPeak}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='podLossFactor'>podLossFactor: </label><div class='col-sm-8'><input id='podLossFactor' class='form-control' type='text'{{#podLossFactor}} value='{{podLossFactor}}'{{/podLossFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='IndividualPnode'>IndividualPnode: </label><div class='col-sm-8'><input id='IndividualPnode' class='form-control' type='text'{{#IndividualPnode}} value='{{IndividualPnode}}'{{/IndividualPnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BidDistributionFactor'>BidDistributionFactor: </label><div class='col-sm-8'><input id='BidDistributionFactor' class='form-control' type='text'{{#BidDistributionFactor}} value='{{BidDistributionFactor}}'{{/BidDistributionFactor}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = MarketOpCommon.MktOrganisation.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RTO_collapse" aria-expanded="true" aria-controls="RTO_collapse" style="margin-left: 10px;">RTO</a></legend>
                    <div id="RTO_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketOpCommon.MktOrganisation.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RTO_collapse" aria-expanded="true" aria-controls="RTO_collapse" style="margin-left: 10px;">RTO</a></legend>
                    <div id="RTO_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketOpCommon.MktOrganisation.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SchedulingCoordinatorUser_collapse" aria-expanded="true" aria-controls="SchedulingCoordinatorUser_collapse" style="margin-left: 10px;">SchedulingCoordinatorUser</a></legend>
                    <div id="SchedulingCoordinatorUser_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#loginID}}<div><b>loginID</b>: {{loginID}}</div>{{/loginID}}
                    {{#loginRole}}<div><b>loginRole</b>: {{loginRole}}</div>{{/loginRole}}
                    {{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SchedulingCoordinatorUser_collapse" aria-expanded="true" aria-controls="SchedulingCoordinatorUser_collapse" style="margin-left: 10px;">SchedulingCoordinatorUser</a></legend>
                    <div id="SchedulingCoordinatorUser_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loginID'>loginID: </label><div class='col-sm-8'><input id='loginID' class='form-control' type='text'{{#loginID}} value='{{loginID}}'{{/loginID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loginRole'>loginRole: </label><div class='col-sm-8'><input id='loginRole' class='form-control' type='text'{{#loginRole}} value='{{loginRole}}'{{/loginRole}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for=''>: </label><div class='col-sm-8'><input id='' class='form-control' type='text'{{#}} value='{{}}'{{/}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FlowgateValue_collapse" aria-expanded="true" aria-controls="FlowgateValue_collapse" style="margin-left: 10px;">FlowgateValue</a></legend>
                    <div id="FlowgateValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#economicDispatchLimit}}<div><b>economicDispatchLimit</b>: {{economicDispatchLimit}}</div>{{/economicDispatchLimit}}
                    {{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
                    {{#firmNetworkLimit}}<div><b>firmNetworkLimit</b>: {{firmNetworkLimit}}</div>{{/firmNetworkLimit}}
                    {{#flowDirectionFlag}}<div><b>flowDirectionFlag</b>: {{flowDirectionFlag}}</div>{{/flowDirectionFlag}}
                    {{#mktFlow}}<div><b>mktFlow</b>: {{mktFlow}}</div>{{/mktFlow}}
                    {{#netFirmNetworkLimit}}<div><b>netFirmNetworkLimit</b>: {{netFirmNetworkLimit}}</div>{{/netFirmNetworkLimit}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#FlowgatePartner}}<div><b>FlowgatePartner</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FlowgatePartner}}&quot;);})'>{{FlowgatePartner}}</a></div>{{/FlowgatePartner}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FlowgateValue_collapse" aria-expanded="true" aria-controls="FlowgateValue_collapse" style="margin-left: 10px;">FlowgateValue</a></legend>
                    <div id="FlowgateValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='economicDispatchLimit'>economicDispatchLimit: </label><div class='col-sm-8'><input id='economicDispatchLimit' class='form-control' type='text'{{#economicDispatchLimit}} value='{{economicDispatchLimit}}'{{/economicDispatchLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='firmNetworkLimit'>firmNetworkLimit: </label><div class='col-sm-8'><input id='firmNetworkLimit' class='form-control' type='text'{{#firmNetworkLimit}} value='{{firmNetworkLimit}}'{{/firmNetworkLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='flowDirectionFlag'>flowDirectionFlag: </label><div class='col-sm-8'><input id='flowDirectionFlag' class='form-control' type='text'{{#flowDirectionFlag}} value='{{flowDirectionFlag}}'{{/flowDirectionFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mktFlow'>mktFlow: </label><div class='col-sm-8'><input id='mktFlow' class='form-control' type='text'{{#mktFlow}} value='{{mktFlow}}'{{/mktFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='netFirmNetworkLimit'>netFirmNetworkLimit: </label><div class='col-sm-8'><input id='netFirmNetworkLimit' class='form-control' type='text'{{#netFirmNetworkLimit}} value='{{netFirmNetworkLimit}}'{{/netFirmNetworkLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='FlowgatePartner'>FlowgatePartner: </label><div class='col-sm-8'><input id='FlowgatePartner' class='form-control' type='text'{{#FlowgatePartner}} value='{{FlowgatePartner}}'{{/FlowgatePartner}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "ResourceVerifiableCosts", "ResourceOperationMaintenanceCost", fields);
                base.export_attribute (obj, "ResourceVerifiableCosts", "MktHeatRateCurve", fields);
                base.export_attribute (obj, "ResourceVerifiableCosts", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceVerifiableCosts_collapse" aria-expanded="true" aria-controls="ResourceVerifiableCosts_collapse" style="margin-left: 10px;">ResourceVerifiableCosts</a></legend>
                    <div id="ResourceVerifiableCosts_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#ResourceOperationMaintenanceCost}}<div><b>ResourceOperationMaintenanceCost</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ResourceOperationMaintenanceCost}}&quot;);})'>{{ResourceOperationMaintenanceCost}}</a></div>{{/ResourceOperationMaintenanceCost}}
                    {{#MktHeatRateCurve}}<div><b>MktHeatRateCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktHeatRateCurve}}&quot;);})'>{{MktHeatRateCurve}}</a></div>{{/MktHeatRateCurve}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceVerifiableCosts_collapse" aria-expanded="true" aria-controls="ResourceVerifiableCosts_collapse" style="margin-left: 10px;">ResourceVerifiableCosts</a></legend>
                    <div id="ResourceVerifiableCosts_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ResourceOperationMaintenanceCost'>ResourceOperationMaintenanceCost: </label><div class='col-sm-8'><input id='ResourceOperationMaintenanceCost' class='form-control' type='text'{{#ResourceOperationMaintenanceCost}} value='{{ResourceOperationMaintenanceCost}}'{{/ResourceOperationMaintenanceCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktHeatRateCurve'>MktHeatRateCurve: </label><div class='col-sm-8'><input id='MktHeatRateCurve' class='form-control' type='text'{{#MktHeatRateCurve}} value='{{MktHeatRateCurve}}'{{/MktHeatRateCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "StartUpFuelCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartUpFuelCurve_collapse" aria-expanded="true" aria-controls="StartUpFuelCurve_collapse" style="margin-left: 10px;">StartUpFuelCurve</a></legend>
                    <div id="StartUpFuelCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartUpFuelCurve_collapse" aria-expanded="true" aria-controls="StartUpFuelCurve_collapse" style="margin-left: 10px;">StartUpFuelCurve</a></legend>
                    <div id="StartUpFuelCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketSkill", "certificationPeriod", base.from_string, fields);
                base.export_element (obj, "MarketSkill", "effectiveDateTime", base.from_datetime, fields);
                base.export_element (obj, "MarketSkill", "level", base.from_string, fields);
                base.export_attribute (obj, "MarketSkill", "MarketPerson", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketSkill_collapse" aria-expanded="true" aria-controls="MarketSkill_collapse" style="margin-left: 10px;">MarketSkill</a></legend>
                    <div id="MarketSkill_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#certificationPeriod}}<div><b>certificationPeriod</b>: {{certificationPeriod}}</div>{{/certificationPeriod}}
                    {{#effectiveDateTime}}<div><b>effectiveDateTime</b>: {{effectiveDateTime}}</div>{{/effectiveDateTime}}
                    {{#level}}<div><b>level</b>: {{level}}</div>{{/level}}
                    {{#MarketPerson}}<div><b>MarketPerson</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketPerson}}&quot;);})'>{{MarketPerson}}</a></div>{{/MarketPerson}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketSkill_collapse" aria-expanded="true" aria-controls="MarketSkill_collapse" style="margin-left: 10px;">MarketSkill</a></legend>
                    <div id="MarketSkill_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='certificationPeriod'>certificationPeriod: </label><div class='col-sm-8'><input id='certificationPeriod' class='form-control' type='text'{{#certificationPeriod}} value='{{certificationPeriod}}'{{/certificationPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDateTime'>effectiveDateTime: </label><div class='col-sm-8'><input id='effectiveDateTime' class='form-control' type='text'{{#effectiveDateTime}} value='{{effectiveDateTime}}'{{/effectiveDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='level'>level: </label><div class='col-sm-8'><input id='level' class='form-control' type='text'{{#level}} value='{{level}}'{{/level}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketPerson'>MarketPerson: </label><div class='col-sm-8'><input id='MarketPerson' class='form-control' type='text'{{#MarketPerson}} value='{{MarketPerson}}'{{/MarketPerson}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MeteredSubSystem", "MSSAggregation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MeteredSubSystem_collapse" aria-expanded="true" aria-controls="MeteredSubSystem_collapse" style="margin-left: 10px;">MeteredSubSystem</a></legend>
                    <div id="MeteredSubSystem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#MSSAggregation}}<div><b>MSSAggregation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MSSAggregation}}&quot;);})'>{{MSSAggregation}}</a></div>{{/MSSAggregation}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MeteredSubSystem_collapse" aria-expanded="true" aria-controls="MeteredSubSystem_collapse" style="margin-left: 10px;">MeteredSubSystem</a></legend>
                    <div id="MeteredSubSystem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MSSAggregation'>MSSAggregation: </label><div class='col-sm-8'><input id='MSSAggregation' class='form-control' type='text'{{#MSSAggregation}} value='{{MSSAggregation}}'{{/MSSAggregation}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Production.ThermalGeneratingUnit.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktThermalGeneratingUnit_collapse" aria-expanded="true" aria-controls="MktThermalGeneratingUnit_collapse" style="margin-left: 10px;">MktThermalGeneratingUnit</a></legend>
                    <div id="MktThermalGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Production.ThermalGeneratingUnit.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktThermalGeneratingUnit_collapse" aria-expanded="true" aria-controls="MktThermalGeneratingUnit_collapse" style="margin-left: 10px;">MktThermalGeneratingUnit</a></legend>
                    <div id="MktThermalGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Production.ThermalGeneratingUnit.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FuelRegion_collapse" aria-expanded="true" aria-controls="FuelRegion_collapse" style="margin-left: 10px;">FuelRegion</a></legend>
                    <div id="FuelRegion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#fuelRegionType}}<div><b>fuelRegionType</b>: {{fuelRegionType}}</div>{{/fuelRegionType}}
                    {{#lastModified}}<div><b>lastModified</b>: {{lastModified}}</div>{{/lastModified}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
                    {{#GasPrice}}<div><b>GasPrice</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GasPrice}}&quot;);})'>{{GasPrice}}</a></div>{{/GasPrice}}
                    {{#OilPrice}}<div><b>OilPrice</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OilPrice}}&quot;);})'>{{OilPrice}}</a></div>{{/OilPrice}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FuelRegion_collapse" aria-expanded="true" aria-controls="FuelRegion_collapse" style="margin-left: 10px;">FuelRegion</a></legend>
                    <div id="FuelRegion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelRegionType'>fuelRegionType: </label><div class='col-sm-8'><input id='fuelRegionType' class='form-control' type='text'{{#fuelRegionType}} value='{{fuelRegionType}}'{{/fuelRegionType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lastModified'>lastModified: </label><div class='col-sm-8'><input id='lastModified' class='form-control' type='text'{{#lastModified}} value='{{lastModified}}'{{/lastModified}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RTO'>RTO: </label><div class='col-sm-8'><input id='RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GasPrice'>GasPrice: </label><div class='col-sm-8'><input id='GasPrice' class='form-control' type='text'{{#GasPrice}} value='{{GasPrice}}'{{/GasPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OilPrice'>OilPrice: </label><div class='col-sm-8'><input id='OilPrice' class='form-control' type='text'{{#OilPrice}} value='{{OilPrice}}'{{/OilPrice}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RMRHeatRateCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMRHeatRateCurve_collapse" aria-expanded="true" aria-controls="RMRHeatRateCurve_collapse" style="margin-left: 10px;">RMRHeatRateCurve</a></legend>
                    <div id="RMRHeatRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMRHeatRateCurve_collapse" aria-expanded="true" aria-controls="RMRHeatRateCurve_collapse" style="margin-left: 10px;">RMRHeatRateCurve</a></legend>
                    <div id="RMRHeatRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MSSAggregation_collapse" aria-expanded="true" aria-controls="MSSAggregation_collapse" style="margin-left: 10px;">MSSAggregation</a></legend>
                    <div id="MSSAggregation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#costRecovery}}<div><b>costRecovery</b>: {{costRecovery}}</div>{{/costRecovery}}
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#grossSettlement}}<div><b>grossSettlement</b>: {{grossSettlement}}</div>{{/grossSettlement}}
                    {{#ignoreLosses}}<div><b>ignoreLosses</b>: {{ignoreLosses}}</div>{{/ignoreLosses}}
                    {{#ignoreMarginalLosses}}<div><b>ignoreMarginalLosses</b>: {{ignoreMarginalLosses}}</div>{{/ignoreMarginalLosses}}
                    {{#loadFollowing}}<div><b>loadFollowing</b>: {{loadFollowing}}</div>{{/loadFollowing}}
                    {{#rucProcurement}}<div><b>rucProcurement</b>: {{rucProcurement}}</div>{{/rucProcurement}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MSSAggregation_collapse" aria-expanded="true" aria-controls="MSSAggregation_collapse" style="margin-left: 10px;">MSSAggregation</a></legend>
                    <div id="MSSAggregation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='costRecovery'>costRecovery: </label><div class='col-sm-8'><input id='costRecovery' class='form-control' type='text'{{#costRecovery}} value='{{costRecovery}}'{{/costRecovery}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='grossSettlement'>grossSettlement: </label><div class='col-sm-8'><input id='grossSettlement' class='form-control' type='text'{{#grossSettlement}} value='{{grossSettlement}}'{{/grossSettlement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ignoreLosses'>ignoreLosses: </label><div class='col-sm-8'><input id='ignoreLosses' class='form-control' type='text'{{#ignoreLosses}} value='{{ignoreLosses}}'{{/ignoreLosses}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ignoreMarginalLosses'>ignoreMarginalLosses: </label><div class='col-sm-8'><input id='ignoreMarginalLosses' class='form-control' type='text'{{#ignoreMarginalLosses}} value='{{ignoreMarginalLosses}}'{{/ignoreMarginalLosses}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadFollowing'>loadFollowing: </label><div class='col-sm-8'><input id='loadFollowing' class='form-control' type='text'{{#loadFollowing}} value='{{loadFollowing}}'{{/loadFollowing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rucProcurement'>rucProcurement: </label><div class='col-sm-8'><input id='rucProcurement' class='form-control' type='text'{{#rucProcurement}} value='{{rucProcurement}}'{{/rucProcurement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RTO'>RTO: </label><div class='col-sm-8'><input id='RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MPMTestThreshold_collapse" aria-expanded="true" aria-controls="MPMTestThreshold_collapse" style="margin-left: 10px;">MPMTestThreshold</a></legend>
                    <div id="MPMTestThreshold_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#price}}<div><b>price</b>: {{price}}</div>{{/price}}
                    {{#percent}}<div><b>percent</b>: {{percent}}</div>{{/percent}}
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#MPMTestCategory}}<div><b>MPMTestCategory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MPMTestCategory}}&quot;);})'>{{MPMTestCategory}}</a></div>{{/MPMTestCategory}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MPMTestThreshold_collapse" aria-expanded="true" aria-controls="MPMTestThreshold_collapse" style="margin-left: 10px;">MPMTestThreshold</a></legend>
                    <div id="MPMTestThreshold_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='price'>price: </label><div class='col-sm-8'><input id='price' class='form-control' type='text'{{#price}} value='{{price}}'{{/price}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='percent'>percent: </label><div class='col-sm-8'><input id='percent' class='form-control' type='text'{{#percent}} value='{{percent}}'{{/percent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marketType'>marketType: </label><div class='col-sm-8'><input id='marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MPMTestCategory'>MPMTestCategory: </label><div class='col-sm-8'><input id='MPMTestCategory' class='form-control' type='text'{{#MPMTestCategory}} value='{{MPMTestCategory}}'{{/MPMTestCategory}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "FormerReference", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FormerReference_collapse" aria-expanded="true" aria-controls="FormerReference_collapse" style="margin-left: 10px;">FormerReference</a></legend>
                    <div id="FormerReference_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FormerReference_collapse" aria-expanded="true" aria-controls="FormerReference_collapse" style="margin-left: 10px;">FormerReference</a></legend>
                    <div id="FormerReference_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketPerson_collapse" aria-expanded="true" aria-controls="MarketPerson_collapse" style="margin-left: 10px;">MarketPerson</a></legend>
                    <div id="MarketPerson_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#category}}<div><b>category</b>: {{category}}</div>{{/category}}
                    {{#electronicAddressAlternate}}<div><b>electronicAddressAlternate</b>: {{electronicAddressAlternate}}</div>{{/electronicAddressAlternate}}
                    {{#electronicAddressPrimary}}<div><b>electronicAddressPrimary</b>: {{electronicAddressPrimary}}</div>{{/electronicAddressPrimary}}
                    {{#firstName}}<div><b>firstName</b>: {{firstName}}</div>{{/firstName}}
                    {{#governmentID}}<div><b>governmentID</b>: {{governmentID}}</div>{{/governmentID}}
                    {{#landlinePhone}}<div><b>landlinePhone</b>: {{landlinePhone}}</div>{{/landlinePhone}}
                    {{#lastName}}<div><b>lastName</b>: {{lastName}}</div>{{/lastName}}
                    {{#mName}}<div><b>mName</b>: {{mName}}</div>{{/mName}}
                    {{#mobilePhone}}<div><b>mobilePhone</b>: {{mobilePhone}}</div>{{/mobilePhone}}
                    {{#prefix}}<div><b>prefix</b>: {{prefix}}</div>{{/prefix}}
                    {{#specialNeed}}<div><b>specialNeed</b>: {{specialNeed}}</div>{{/specialNeed}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#suffix}}<div><b>suffix</b>: {{suffix}}</div>{{/suffix}}
                    {{#userID}}<div><b>userID</b>: {{userID}}</div>{{/userID}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketPerson_collapse" aria-expanded="true" aria-controls="MarketPerson_collapse" style="margin-left: 10px;">MarketPerson</a></legend>
                    <div id="MarketPerson_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='category'>category: </label><div class='col-sm-8'><input id='category' class='form-control' type='text'{{#category}} value='{{category}}'{{/category}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='electronicAddressAlternate'>electronicAddressAlternate: </label><div class='col-sm-8'><input id='electronicAddressAlternate' class='form-control' type='text'{{#electronicAddressAlternate}} value='{{electronicAddressAlternate}}'{{/electronicAddressAlternate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='electronicAddressPrimary'>electronicAddressPrimary: </label><div class='col-sm-8'><input id='electronicAddressPrimary' class='form-control' type='text'{{#electronicAddressPrimary}} value='{{electronicAddressPrimary}}'{{/electronicAddressPrimary}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='firstName'>firstName: </label><div class='col-sm-8'><input id='firstName' class='form-control' type='text'{{#firstName}} value='{{firstName}}'{{/firstName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='governmentID'>governmentID: </label><div class='col-sm-8'><input id='governmentID' class='form-control' type='text'{{#governmentID}} value='{{governmentID}}'{{/governmentID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='landlinePhone'>landlinePhone: </label><div class='col-sm-8'><input id='landlinePhone' class='form-control' type='text'{{#landlinePhone}} value='{{landlinePhone}}'{{/landlinePhone}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lastName'>lastName: </label><div class='col-sm-8'><input id='lastName' class='form-control' type='text'{{#lastName}} value='{{lastName}}'{{/lastName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mName'>mName: </label><div class='col-sm-8'><input id='mName' class='form-control' type='text'{{#mName}} value='{{mName}}'{{/mName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mobilePhone'>mobilePhone: </label><div class='col-sm-8'><input id='mobilePhone' class='form-control' type='text'{{#mobilePhone}} value='{{mobilePhone}}'{{/mobilePhone}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='prefix'>prefix: </label><div class='col-sm-8'><input id='prefix' class='form-control' type='text'{{#prefix}} value='{{prefix}}'{{/prefix}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='specialNeed'>specialNeed: </label><div class='col-sm-8'><input id='specialNeed' class='form-control' type='text'{{#specialNeed}} value='{{specialNeed}}'{{/specialNeed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='suffix'>suffix: </label><div class='col-sm-8'><input id='suffix' class='form-control' type='text'{{#suffix}} value='{{suffix}}'{{/suffix}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='userID'>userID: </label><div class='col-sm-8'><input id='userID' class='form-control' type='text'{{#userID}} value='{{userID}}'{{/userID}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransmissionRightChain", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "TransmissionRightChain", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "TransmissionRightChain", "RTO", fields);
                base.export_attribute (obj, "TransmissionRightChain", "Chain_ContractRight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionRightChain_collapse" aria-expanded="true" aria-controls="TransmissionRightChain_collapse" style="margin-left: 10px;">TransmissionRightChain</a></legend>
                    <div id="TransmissionRightChain_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
                    {{#Chain_ContractRight}}<div><b>Chain_ContractRight</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Chain_ContractRight}}&quot;);})'>{{Chain_ContractRight}}</a></div>{{/Chain_ContractRight}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionRightChain_collapse" aria-expanded="true" aria-controls="TransmissionRightChain_collapse" style="margin-left: 10px;">TransmissionRightChain</a></legend>
                    <div id="TransmissionRightChain_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RTO'>RTO: </label><div class='col-sm-8'><input id='RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Chain_ContractRight'>Chain_ContractRight: </label><div class='col-sm-8'><input id='Chain_ContractRight' class='form-control' type='text'{{#Chain_ContractRight}} value='{{Chain_ContractRight}}'{{/Chain_ContractRight}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = MarketOpCommon.MktOrganisation.prototype.export.call (this, obj, false);

                base.export_element (obj, "SchedulingCoordinator", "scid", base.from_string, fields);
                base.export_attribute (obj, "SchedulingCoordinator", "LoadRatio", fields);
                base.export_attribute (obj, "SchedulingCoordinator", "MktOrgansation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SchedulingCoordinator_collapse" aria-expanded="true" aria-controls="SchedulingCoordinator_collapse" style="margin-left: 10px;">SchedulingCoordinator</a></legend>
                    <div id="SchedulingCoordinator_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketOpCommon.MktOrganisation.prototype.template.call (this) +
                    `
                    {{#scid}}<div><b>scid</b>: {{scid}}</div>{{/scid}}
                    {{#LoadRatio}}<div><b>LoadRatio</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadRatio}}&quot;);})'>{{LoadRatio}}</a></div>{{/LoadRatio}}
                    {{#MktOrgansation}}<div><b>MktOrgansation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktOrgansation}}&quot;);})'>{{MktOrgansation}}</a></div>{{/MktOrgansation}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SchedulingCoordinator_collapse" aria-expanded="true" aria-controls="SchedulingCoordinator_collapse" style="margin-left: 10px;">SchedulingCoordinator</a></legend>
                    <div id="SchedulingCoordinator_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketOpCommon.MktOrganisation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scid'>scid: </label><div class='col-sm-8'><input id='scid' class='form-control' type='text'{{#scid}} value='{{scid}}'{{/scid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LoadRatio'>LoadRatio: </label><div class='col-sm-8'><input id='LoadRatio' class='form-control' type='text'{{#LoadRatio}} value='{{LoadRatio}}'{{/LoadRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktOrgansation'>MktOrgansation: </label><div class='col-sm-8'><input id='MktOrgansation' class='form-control' type='text'{{#MktOrgansation}} value='{{MktOrgansation}}'{{/MktOrgansation}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = MarketCommon.RegisteredResource.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegisteredGenerator_collapse" aria-expanded="true" aria-controls="RegisteredGenerator_collapse" style="margin-left: 10px;">RegisteredGenerator</a></legend>
                    <div id="RegisteredGenerator_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.template.call (this) +
                    `
                    {{#capacityFactor}}<div><b>capacityFactor</b>: {{capacityFactor}}</div>{{/capacityFactor}}
                    {{#coldStartTime}}<div><b>coldStartTime</b>: {{coldStartTime}}</div>{{/coldStartTime}}
                    {{#combinedCyclePlantName}}<div><b>combinedCyclePlantName</b>: {{combinedCyclePlantName}}</div>{{/combinedCyclePlantName}}
                    {{#commericialOperationDate}}<div><b>commericialOperationDate</b>: {{commericialOperationDate}}</div>{{/commericialOperationDate}}
                    {{#constrainedOutputFlag}}<div><b>constrainedOutputFlag</b>: {{constrainedOutputFlag}}</div>{{/constrainedOutputFlag}}
                    {{#costBasis}}<div><b>costBasis</b>: {{costBasis}}</div>{{/costBasis}}
                    {{#extremeLongStart}}<div><b>extremeLongStart</b>: {{extremeLongStart}}</div>{{/extremeLongStart}}
                    {{#fuelSource}}<div><b>fuelSource</b>: {{fuelSource}}</div>{{/fuelSource}}
                    {{#highControlLimit}}<div><b>highControlLimit</b>: {{highControlLimit}}</div>{{/highControlLimit}}
                    {{#hotIntTime}}<div><b>hotIntTime</b>: {{hotIntTime}}</div>{{/hotIntTime}}
                    {{#hotStartTime}}<div><b>hotStartTime</b>: {{hotStartTime}}</div>{{/hotStartTime}}
                    {{#intColdTime}}<div><b>intColdTime</b>: {{intColdTime}}</div>{{/intColdTime}}
                    {{#intendedPIRP}}<div><b>intendedPIRP</b>: {{intendedPIRP}}</div>{{/intendedPIRP}}
                    {{#intStartTime}}<div><b>intStartTime</b>: {{intStartTime}}</div>{{/intStartTime}}
                    {{#loadFollowingDownMSS}}<div><b>loadFollowingDownMSS</b>: {{loadFollowingDownMSS}}</div>{{/loadFollowingDownMSS}}
                    {{#loadFollowingUpMSS}}<div><b>loadFollowingUpMSS</b>: {{loadFollowingUpMSS}}</div>{{/loadFollowingUpMSS}}
                    {{#lowControlLImit}}<div><b>lowControlLImit</b>: {{lowControlLImit}}</div>{{/lowControlLImit}}
                    {{#lowerControlRate}}<div><b>lowerControlRate</b>: {{lowerControlRate}}</div>{{/lowerControlRate}}
                    {{#lowerRampRate}}<div><b>lowerRampRate</b>: {{lowerRampRate}}</div>{{/lowerRampRate}}
                    {{#maxDependableCap}}<div><b>maxDependableCap</b>: {{maxDependableCap}}</div>{{/maxDependableCap}}
                    {{#maximumAllowableSpinningReserve}}<div><b>maximumAllowableSpinningReserve</b>: {{maximumAllowableSpinningReserve}}</div>{{/maximumAllowableSpinningReserve}}
                    {{#maximumOperatingMW}}<div><b>maximumOperatingMW</b>: {{maximumOperatingMW}}</div>{{/maximumOperatingMW}}
                    {{#maxLayOffSelfSchedQty}}<div><b>maxLayOffSelfSchedQty</b>: {{maxLayOffSelfSchedQty}}</div>{{/maxLayOffSelfSchedQty}}
                    {{#maxMinLoadCost}}<div><b>maxMinLoadCost</b>: {{maxMinLoadCost}}</div>{{/maxMinLoadCost}}
                    {{#maxPumpingLevel}}<div><b>maxPumpingLevel</b>: {{maxPumpingLevel}}</div>{{/maxPumpingLevel}}
                    {{#maxShutdownTime}}<div><b>maxShutdownTime</b>: {{maxShutdownTime}}</div>{{/maxShutdownTime}}
                    {{#maxStartUpsPerDay}}<div><b>maxStartUpsPerDay</b>: {{maxStartUpsPerDay}}</div>{{/maxStartUpsPerDay}}
                    {{#maxWeeklyEnergy}}<div><b>maxWeeklyEnergy</b>: {{maxWeeklyEnergy}}</div>{{/maxWeeklyEnergy}}
                    {{#maxWeeklyStarts}}<div><b>maxWeeklyStarts</b>: {{maxWeeklyStarts}}</div>{{/maxWeeklyStarts}}
                    {{#minimumLoadFuelCost}}<div><b>minimumLoadFuelCost</b>: {{minimumLoadFuelCost}}</div>{{/minimumLoadFuelCost}}
                    {{#minimumOperatingMW}}<div><b>minimumOperatingMW</b>: {{minimumOperatingMW}}</div>{{/minimumOperatingMW}}
                    {{#minLoadCost}}<div><b>minLoadCost</b>: {{minLoadCost}}</div>{{/minLoadCost}}
                    {{#mustOfferRA}}<div><b>mustOfferRA</b>: {{mustOfferRA}}</div>{{/mustOfferRA}}
                    {{#nameplateCapacity}}<div><b>nameplateCapacity</b>: {{nameplateCapacity}}</div>{{/nameplateCapacity}}
                    {{#operatingMaintenanceCost}}<div><b>operatingMaintenanceCost</b>: {{operatingMaintenanceCost}}</div>{{/operatingMaintenanceCost}}
                    {{#operatingMode}}<div><b>operatingMode</b>: {{operatingMode}}</div>{{/operatingMode}}
                    {{#proxyFlag}}<div><b>proxyFlag</b>: {{proxyFlag}}</div>{{/proxyFlag}}
                    {{#pumpingCost}}<div><b>pumpingCost</b>: {{pumpingCost}}</div>{{/pumpingCost}}
                    {{#pumpingFactor}}<div><b>pumpingFactor</b>: {{pumpingFactor}}</div>{{/pumpingFactor}}
                    {{#pumpMinDownTime}}<div><b>pumpMinDownTime</b>: {{pumpMinDownTime}}</div>{{/pumpMinDownTime}}
                    {{#pumpMinUpTime}}<div><b>pumpMinUpTime</b>: {{pumpMinUpTime}}</div>{{/pumpMinUpTime}}
                    {{#pumpShutdownCost}}<div><b>pumpShutdownCost</b>: {{pumpShutdownCost}}</div>{{/pumpShutdownCost}}
                    {{#pumpShutdownTime}}<div><b>pumpShutdownTime</b>: {{pumpShutdownTime}}</div>{{/pumpShutdownTime}}
                    {{#qualifyingFacilityOwner}}<div><b>qualifyingFacilityOwner</b>: {{qualifyingFacilityOwner}}</div>{{/qualifyingFacilityOwner}}
                    {{#quickStartFlag}}<div><b>quickStartFlag</b>: {{quickStartFlag}}</div>{{/quickStartFlag}}
                    {{#raiseControlRate}}<div><b>raiseControlRate</b>: {{raiseControlRate}}</div>{{/raiseControlRate}}
                    {{#raiseRampRate}}<div><b>raiseRampRate</b>: {{raiseRampRate}}</div>{{/raiseRampRate}}
                    {{#rampCurveType}}<div><b>rampCurveType</b>: {{rampCurveType}}</div>{{/rampCurveType}}
                    {{#rampMode}}<div><b>rampMode</b>: {{rampMode}}</div>{{/rampMode}}
                    {{#regulationFlag}}<div><b>regulationFlag</b>: {{regulationFlag}}</div>{{/regulationFlag}}
                    {{#regulationRampRate}}<div><b>regulationRampRate</b>: {{regulationRampRate}}</div>{{/regulationRampRate}}
                    {{#resourceSubType}}<div><b>resourceSubType</b>: {{resourceSubType}}</div>{{/resourceSubType}}
                    {{#riverSystem}}<div><b>riverSystem</b>: {{riverSystem}}</div>{{/riverSystem}}
                    {{#RMNRFlag}}<div><b>RMNRFlag</b>: {{RMNRFlag}}</div>{{/RMNRFlag}}
                    {{#RMRFlag}}<div><b>RMRFlag</b>: {{RMRFlag}}</div>{{/RMRFlag}}
                    {{#RMRManualIndicator}}<div><b>RMRManualIndicator</b>: {{RMRManualIndicator}}</div>{{/RMRManualIndicator}}
                    {{#RMTFlag}}<div><b>RMTFlag</b>: {{RMTFlag}}</div>{{/RMTFlag}}
                    {{#spinReserveRamp}}<div><b>spinReserveRamp</b>: {{spinReserveRamp}}</div>{{/spinReserveRamp}}
                    {{#syncCondCapable}}<div><b>syncCondCapable</b>: {{syncCondCapable}}</div>{{/syncCondCapable}}
                    {{#unitType}}<div><b>unitType</b>: {{unitType}}</div>{{/unitType}}
                    {{#useLimitFlag}}<div><b>useLimitFlag</b>: {{useLimitFlag}}</div>{{/useLimitFlag}}
                    {{#RMRHeatRateCurve}}<div><b>RMRHeatRateCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RMRHeatRateCurve}}&quot;);})'>{{RMRHeatRateCurve}}</a></div>{{/RMRHeatRateCurve}}
                    {{#StartUpTimeCurve}}<div><b>StartUpTimeCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartUpTimeCurve}}&quot;);})'>{{StartUpTimeCurve}}</a></div>{{/StartUpTimeCurve}}
                    {{#FuelCostCurve}}<div><b>FuelCostCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FuelCostCurve}}&quot;);})'>{{FuelCostCurve}}</a></div>{{/FuelCostCurve}}
                    {{#RMRStartUpCostCurve}}<div><b>RMRStartUpCostCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RMRStartUpCostCurve}}&quot;);})'>{{RMRStartUpCostCurve}}</a></div>{{/RMRStartUpCostCurve}}
                    {{#RMRStartUpTimeCurve}}<div><b>RMRStartUpTimeCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RMRStartUpTimeCurve}}&quot;);})'>{{RMRStartUpTimeCurve}}</a></div>{{/RMRStartUpTimeCurve}}
                    {{#StartUpFuelCurve}}<div><b>StartUpFuelCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartUpFuelCurve}}&quot;);})'>{{StartUpFuelCurve}}</a></div>{{/StartUpFuelCurve}}
                    {{#EnergyPriceIndex}}<div><b>EnergyPriceIndex</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyPriceIndex}}&quot;);})'>{{EnergyPriceIndex}}</a></div>{{/EnergyPriceIndex}}
                    {{#RMRStartUpFuelCurve}}<div><b>RMRStartUpFuelCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RMRStartUpFuelCurve}}&quot;);})'>{{RMRStartUpFuelCurve}}</a></div>{{/RMRStartUpFuelCurve}}
                    {{#MktHeatRateCurve}}<div><b>MktHeatRateCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktHeatRateCurve}}&quot;);})'>{{MktHeatRateCurve}}</a></div>{{/MktHeatRateCurve}}
                    {{#RMRStartUpEnergyCurve}}<div><b>RMRStartUpEnergyCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RMRStartUpEnergyCurve}}&quot;);})'>{{RMRStartUpEnergyCurve}}</a></div>{{/RMRStartUpEnergyCurve}}
                    {{#LocalReliabilityArea}}<div><b>LocalReliabilityArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LocalReliabilityArea}}&quot;);})'>{{LocalReliabilityArea}}</a></div>{{/LocalReliabilityArea}}
                    {{#FuelRegion}}<div><b>FuelRegion</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FuelRegion}}&quot;);})'>{{FuelRegion}}</a></div>{{/FuelRegion}}
                    {{#StartUpEnergyCurve}}<div><b>StartUpEnergyCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartUpEnergyCurve}}&quot;);})'>{{StartUpEnergyCurve}}</a></div>{{/StartUpEnergyCurve}}
                    {{#RegulatingLimit}}<div><b>RegulatingLimit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegulatingLimit}}&quot;);})'>{{RegulatingLimit}}</a></div>{{/RegulatingLimit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegisteredGenerator_collapse" aria-expanded="true" aria-controls="RegisteredGenerator_collapse" style="margin-left: 10px;">RegisteredGenerator</a></legend>
                    <div id="RegisteredGenerator_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='capacityFactor'>capacityFactor: </label><div class='col-sm-8'><input id='capacityFactor' class='form-control' type='text'{{#capacityFactor}} value='{{capacityFactor}}'{{/capacityFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coldStartTime'>coldStartTime: </label><div class='col-sm-8'><input id='coldStartTime' class='form-control' type='text'{{#coldStartTime}} value='{{coldStartTime}}'{{/coldStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='combinedCyclePlantName'>combinedCyclePlantName: </label><div class='col-sm-8'><input id='combinedCyclePlantName' class='form-control' type='text'{{#combinedCyclePlantName}} value='{{combinedCyclePlantName}}'{{/combinedCyclePlantName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='commericialOperationDate'>commericialOperationDate: </label><div class='col-sm-8'><input id='commericialOperationDate' class='form-control' type='text'{{#commericialOperationDate}} value='{{commericialOperationDate}}'{{/commericialOperationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='constrainedOutputFlag'>constrainedOutputFlag: </label><div class='col-sm-8'><input id='constrainedOutputFlag' class='form-control' type='text'{{#constrainedOutputFlag}} value='{{constrainedOutputFlag}}'{{/constrainedOutputFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='costBasis'>costBasis: </label><div class='col-sm-8'><input id='costBasis' class='form-control' type='text'{{#costBasis}} value='{{costBasis}}'{{/costBasis}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='extremeLongStart'>extremeLongStart: </label><div class='col-sm-8'><input id='extremeLongStart' class='form-control' type='text'{{#extremeLongStart}} value='{{extremeLongStart}}'{{/extremeLongStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelSource'>fuelSource: </label><div class='col-sm-8'><input id='fuelSource' class='form-control' type='text'{{#fuelSource}} value='{{fuelSource}}'{{/fuelSource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='highControlLimit'>highControlLimit: </label><div class='col-sm-8'><input id='highControlLimit' class='form-control' type='text'{{#highControlLimit}} value='{{highControlLimit}}'{{/highControlLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hotIntTime'>hotIntTime: </label><div class='col-sm-8'><input id='hotIntTime' class='form-control' type='text'{{#hotIntTime}} value='{{hotIntTime}}'{{/hotIntTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hotStartTime'>hotStartTime: </label><div class='col-sm-8'><input id='hotStartTime' class='form-control' type='text'{{#hotStartTime}} value='{{hotStartTime}}'{{/hotStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intColdTime'>intColdTime: </label><div class='col-sm-8'><input id='intColdTime' class='form-control' type='text'{{#intColdTime}} value='{{intColdTime}}'{{/intColdTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intendedPIRP'>intendedPIRP: </label><div class='col-sm-8'><input id='intendedPIRP' class='form-control' type='text'{{#intendedPIRP}} value='{{intendedPIRP}}'{{/intendedPIRP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intStartTime'>intStartTime: </label><div class='col-sm-8'><input id='intStartTime' class='form-control' type='text'{{#intStartTime}} value='{{intStartTime}}'{{/intStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadFollowingDownMSS'>loadFollowingDownMSS: </label><div class='col-sm-8'><input id='loadFollowingDownMSS' class='form-control' type='text'{{#loadFollowingDownMSS}} value='{{loadFollowingDownMSS}}'{{/loadFollowingDownMSS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadFollowingUpMSS'>loadFollowingUpMSS: </label><div class='col-sm-8'><input id='loadFollowingUpMSS' class='form-control' type='text'{{#loadFollowingUpMSS}} value='{{loadFollowingUpMSS}}'{{/loadFollowingUpMSS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowControlLImit'>lowControlLImit: </label><div class='col-sm-8'><input id='lowControlLImit' class='form-control' type='text'{{#lowControlLImit}} value='{{lowControlLImit}}'{{/lowControlLImit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowerControlRate'>lowerControlRate: </label><div class='col-sm-8'><input id='lowerControlRate' class='form-control' type='text'{{#lowerControlRate}} value='{{lowerControlRate}}'{{/lowerControlRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowerRampRate'>lowerRampRate: </label><div class='col-sm-8'><input id='lowerRampRate' class='form-control' type='text'{{#lowerRampRate}} value='{{lowerRampRate}}'{{/lowerRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxDependableCap'>maxDependableCap: </label><div class='col-sm-8'><input id='maxDependableCap' class='form-control' type='text'{{#maxDependableCap}} value='{{maxDependableCap}}'{{/maxDependableCap}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maximumAllowableSpinningReserve'>maximumAllowableSpinningReserve: </label><div class='col-sm-8'><input id='maximumAllowableSpinningReserve' class='form-control' type='text'{{#maximumAllowableSpinningReserve}} value='{{maximumAllowableSpinningReserve}}'{{/maximumAllowableSpinningReserve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maximumOperatingMW'>maximumOperatingMW: </label><div class='col-sm-8'><input id='maximumOperatingMW' class='form-control' type='text'{{#maximumOperatingMW}} value='{{maximumOperatingMW}}'{{/maximumOperatingMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxLayOffSelfSchedQty'>maxLayOffSelfSchedQty: </label><div class='col-sm-8'><input id='maxLayOffSelfSchedQty' class='form-control' type='text'{{#maxLayOffSelfSchedQty}} value='{{maxLayOffSelfSchedQty}}'{{/maxLayOffSelfSchedQty}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxMinLoadCost'>maxMinLoadCost: </label><div class='col-sm-8'><input id='maxMinLoadCost' class='form-control' type='text'{{#maxMinLoadCost}} value='{{maxMinLoadCost}}'{{/maxMinLoadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxPumpingLevel'>maxPumpingLevel: </label><div class='col-sm-8'><input id='maxPumpingLevel' class='form-control' type='text'{{#maxPumpingLevel}} value='{{maxPumpingLevel}}'{{/maxPumpingLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxShutdownTime'>maxShutdownTime: </label><div class='col-sm-8'><input id='maxShutdownTime' class='form-control' type='text'{{#maxShutdownTime}} value='{{maxShutdownTime}}'{{/maxShutdownTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxStartUpsPerDay'>maxStartUpsPerDay: </label><div class='col-sm-8'><input id='maxStartUpsPerDay' class='form-control' type='text'{{#maxStartUpsPerDay}} value='{{maxStartUpsPerDay}}'{{/maxStartUpsPerDay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxWeeklyEnergy'>maxWeeklyEnergy: </label><div class='col-sm-8'><input id='maxWeeklyEnergy' class='form-control' type='text'{{#maxWeeklyEnergy}} value='{{maxWeeklyEnergy}}'{{/maxWeeklyEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxWeeklyStarts'>maxWeeklyStarts: </label><div class='col-sm-8'><input id='maxWeeklyStarts' class='form-control' type='text'{{#maxWeeklyStarts}} value='{{maxWeeklyStarts}}'{{/maxWeeklyStarts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumLoadFuelCost'>minimumLoadFuelCost: </label><div class='col-sm-8'><input id='minimumLoadFuelCost' class='form-control' type='text'{{#minimumLoadFuelCost}} value='{{minimumLoadFuelCost}}'{{/minimumLoadFuelCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumOperatingMW'>minimumOperatingMW: </label><div class='col-sm-8'><input id='minimumOperatingMW' class='form-control' type='text'{{#minimumOperatingMW}} value='{{minimumOperatingMW}}'{{/minimumOperatingMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minLoadCost'>minLoadCost: </label><div class='col-sm-8'><input id='minLoadCost' class='form-control' type='text'{{#minLoadCost}} value='{{minLoadCost}}'{{/minLoadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mustOfferRA'>mustOfferRA: </label><div class='col-sm-8'><input id='mustOfferRA' class='form-control' type='text'{{#mustOfferRA}} value='{{mustOfferRA}}'{{/mustOfferRA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='nameplateCapacity'>nameplateCapacity: </label><div class='col-sm-8'><input id='nameplateCapacity' class='form-control' type='text'{{#nameplateCapacity}} value='{{nameplateCapacity}}'{{/nameplateCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='operatingMaintenanceCost'>operatingMaintenanceCost: </label><div class='col-sm-8'><input id='operatingMaintenanceCost' class='form-control' type='text'{{#operatingMaintenanceCost}} value='{{operatingMaintenanceCost}}'{{/operatingMaintenanceCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='operatingMode'>operatingMode: </label><div class='col-sm-8'><input id='operatingMode' class='form-control' type='text'{{#operatingMode}} value='{{operatingMode}}'{{/operatingMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='proxyFlag'>proxyFlag: </label><div class='col-sm-8'><input id='proxyFlag' class='form-control' type='text'{{#proxyFlag}} value='{{proxyFlag}}'{{/proxyFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpingCost'>pumpingCost: </label><div class='col-sm-8'><input id='pumpingCost' class='form-control' type='text'{{#pumpingCost}} value='{{pumpingCost}}'{{/pumpingCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpingFactor'>pumpingFactor: </label><div class='col-sm-8'><input id='pumpingFactor' class='form-control' type='text'{{#pumpingFactor}} value='{{pumpingFactor}}'{{/pumpingFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpMinDownTime'>pumpMinDownTime: </label><div class='col-sm-8'><input id='pumpMinDownTime' class='form-control' type='text'{{#pumpMinDownTime}} value='{{pumpMinDownTime}}'{{/pumpMinDownTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpMinUpTime'>pumpMinUpTime: </label><div class='col-sm-8'><input id='pumpMinUpTime' class='form-control' type='text'{{#pumpMinUpTime}} value='{{pumpMinUpTime}}'{{/pumpMinUpTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpShutdownCost'>pumpShutdownCost: </label><div class='col-sm-8'><input id='pumpShutdownCost' class='form-control' type='text'{{#pumpShutdownCost}} value='{{pumpShutdownCost}}'{{/pumpShutdownCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpShutdownTime'>pumpShutdownTime: </label><div class='col-sm-8'><input id='pumpShutdownTime' class='form-control' type='text'{{#pumpShutdownTime}} value='{{pumpShutdownTime}}'{{/pumpShutdownTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qualifyingFacilityOwner'>qualifyingFacilityOwner: </label><div class='col-sm-8'><input id='qualifyingFacilityOwner' class='form-control' type='text'{{#qualifyingFacilityOwner}} value='{{qualifyingFacilityOwner}}'{{/qualifyingFacilityOwner}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quickStartFlag'>quickStartFlag: </label><div class='col-sm-8'><input id='quickStartFlag' class='form-control' type='text'{{#quickStartFlag}} value='{{quickStartFlag}}'{{/quickStartFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='raiseControlRate'>raiseControlRate: </label><div class='col-sm-8'><input id='raiseControlRate' class='form-control' type='text'{{#raiseControlRate}} value='{{raiseControlRate}}'{{/raiseControlRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='raiseRampRate'>raiseRampRate: </label><div class='col-sm-8'><input id='raiseRampRate' class='form-control' type='text'{{#raiseRampRate}} value='{{raiseRampRate}}'{{/raiseRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rampCurveType'>rampCurveType: </label><div class='col-sm-8'><input id='rampCurveType' class='form-control' type='text'{{#rampCurveType}} value='{{rampCurveType}}'{{/rampCurveType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rampMode'>rampMode: </label><div class='col-sm-8'><input id='rampMode' class='form-control' type='text'{{#rampMode}} value='{{rampMode}}'{{/rampMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='regulationFlag'>regulationFlag: </label><div class='col-sm-8'><input id='regulationFlag' class='form-control' type='text'{{#regulationFlag}} value='{{regulationFlag}}'{{/regulationFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='regulationRampRate'>regulationRampRate: </label><div class='col-sm-8'><input id='regulationRampRate' class='form-control' type='text'{{#regulationRampRate}} value='{{regulationRampRate}}'{{/regulationRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='resourceSubType'>resourceSubType: </label><div class='col-sm-8'><input id='resourceSubType' class='form-control' type='text'{{#resourceSubType}} value='{{resourceSubType}}'{{/resourceSubType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='riverSystem'>riverSystem: </label><div class='col-sm-8'><input id='riverSystem' class='form-control' type='text'{{#riverSystem}} value='{{riverSystem}}'{{/riverSystem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RMNRFlag'>RMNRFlag: </label><div class='col-sm-8'><input id='RMNRFlag' class='form-control' type='text'{{#RMNRFlag}} value='{{RMNRFlag}}'{{/RMNRFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RMRFlag'>RMRFlag: </label><div class='col-sm-8'><input id='RMRFlag' class='form-control' type='text'{{#RMRFlag}} value='{{RMRFlag}}'{{/RMRFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RMRManualIndicator'>RMRManualIndicator: </label><div class='col-sm-8'><input id='RMRManualIndicator' class='form-control' type='text'{{#RMRManualIndicator}} value='{{RMRManualIndicator}}'{{/RMRManualIndicator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RMTFlag'>RMTFlag: </label><div class='col-sm-8'><input id='RMTFlag' class='form-control' type='text'{{#RMTFlag}} value='{{RMTFlag}}'{{/RMTFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='spinReserveRamp'>spinReserveRamp: </label><div class='col-sm-8'><input id='spinReserveRamp' class='form-control' type='text'{{#spinReserveRamp}} value='{{spinReserveRamp}}'{{/spinReserveRamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='syncCondCapable'>syncCondCapable: </label><div class='col-sm-8'><input id='syncCondCapable' class='form-control' type='text'{{#syncCondCapable}} value='{{syncCondCapable}}'{{/syncCondCapable}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unitType'>unitType: </label><div class='col-sm-8'><input id='unitType' class='form-control' type='text'{{#unitType}} value='{{unitType}}'{{/unitType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='useLimitFlag'>useLimitFlag: </label><div class='col-sm-8'><input id='useLimitFlag' class='form-control' type='text'{{#useLimitFlag}} value='{{useLimitFlag}}'{{/useLimitFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RMRHeatRateCurve'>RMRHeatRateCurve: </label><div class='col-sm-8'><input id='RMRHeatRateCurve' class='form-control' type='text'{{#RMRHeatRateCurve}} value='{{RMRHeatRateCurve}}'{{/RMRHeatRateCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StartUpTimeCurve'>StartUpTimeCurve: </label><div class='col-sm-8'><input id='StartUpTimeCurve' class='form-control' type='text'{{#StartUpTimeCurve}} value='{{StartUpTimeCurve}}'{{/StartUpTimeCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='FuelCostCurve'>FuelCostCurve: </label><div class='col-sm-8'><input id='FuelCostCurve' class='form-control' type='text'{{#FuelCostCurve}} value='{{FuelCostCurve}}'{{/FuelCostCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RMRStartUpCostCurve'>RMRStartUpCostCurve: </label><div class='col-sm-8'><input id='RMRStartUpCostCurve' class='form-control' type='text'{{#RMRStartUpCostCurve}} value='{{RMRStartUpCostCurve}}'{{/RMRStartUpCostCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RMRStartUpTimeCurve'>RMRStartUpTimeCurve: </label><div class='col-sm-8'><input id='RMRStartUpTimeCurve' class='form-control' type='text'{{#RMRStartUpTimeCurve}} value='{{RMRStartUpTimeCurve}}'{{/RMRStartUpTimeCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StartUpFuelCurve'>StartUpFuelCurve: </label><div class='col-sm-8'><input id='StartUpFuelCurve' class='form-control' type='text'{{#StartUpFuelCurve}} value='{{StartUpFuelCurve}}'{{/StartUpFuelCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyPriceIndex'>EnergyPriceIndex: </label><div class='col-sm-8'><input id='EnergyPriceIndex' class='form-control' type='text'{{#EnergyPriceIndex}} value='{{EnergyPriceIndex}}'{{/EnergyPriceIndex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RMRStartUpFuelCurve'>RMRStartUpFuelCurve: </label><div class='col-sm-8'><input id='RMRStartUpFuelCurve' class='form-control' type='text'{{#RMRStartUpFuelCurve}} value='{{RMRStartUpFuelCurve}}'{{/RMRStartUpFuelCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktHeatRateCurve'>MktHeatRateCurve: </label><div class='col-sm-8'><input id='MktHeatRateCurve' class='form-control' type='text'{{#MktHeatRateCurve}} value='{{MktHeatRateCurve}}'{{/MktHeatRateCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RMRStartUpEnergyCurve'>RMRStartUpEnergyCurve: </label><div class='col-sm-8'><input id='RMRStartUpEnergyCurve' class='form-control' type='text'{{#RMRStartUpEnergyCurve}} value='{{RMRStartUpEnergyCurve}}'{{/RMRStartUpEnergyCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LocalReliabilityArea'>LocalReliabilityArea: </label><div class='col-sm-8'><input id='LocalReliabilityArea' class='form-control' type='text'{{#LocalReliabilityArea}} value='{{LocalReliabilityArea}}'{{/LocalReliabilityArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='FuelRegion'>FuelRegion: </label><div class='col-sm-8'><input id='FuelRegion' class='form-control' type='text'{{#FuelRegion}} value='{{FuelRegion}}'{{/FuelRegion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StartUpEnergyCurve'>StartUpEnergyCurve: </label><div class='col-sm-8'><input id='StartUpEnergyCurve' class='form-control' type='text'{{#StartUpEnergyCurve}} value='{{StartUpEnergyCurve}}'{{/StartUpEnergyCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegulatingLimit'>RegulatingLimit: </label><div class='col-sm-8'><input id='RegulatingLimit' class='form-control' type='text'{{#RegulatingLimit}} value='{{RegulatingLimit}}'{{/RegulatingLimit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Flowgate_collapse" aria-expanded="true" aria-controls="Flowgate_collapse" style="margin-left: 10px;">Flowgate</a></legend>
                    <div id="Flowgate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#exportMWRating}}<div><b>exportMWRating</b>: {{exportMWRating}}</div>{{/exportMWRating}}
                    {{#importMWRating}}<div><b>importMWRating</b>: {{importMWRating}}</div>{{/importMWRating}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#To_SubControlArea}}<div><b>To_SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{To_SubControlArea}}&quot;);})'>{{To_SubControlArea}}</a></div>{{/To_SubControlArea}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HostControlArea}}&quot;);})'>{{HostControlArea}}</a></div>{{/HostControlArea}}
                    {{#SecurityConstraints}}<div><b>SecurityConstraints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SecurityConstraints}}&quot;);})'>{{SecurityConstraints}}</a></div>{{/SecurityConstraints}}
                    {{#GenericConstraints}}<div><b>GenericConstraints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GenericConstraints}}&quot;);})'>{{GenericConstraints}}</a></div>{{/GenericConstraints}}
                    {{#From_SubControlArea}}<div><b>From_SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{From_SubControlArea}}&quot;);})'>{{From_SubControlArea}}</a></div>{{/From_SubControlArea}}
                    {{#CRR}}<div><b>CRR</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CRR}}&quot;);})'>{{CRR}}</a></div>{{/CRR}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Flowgate_collapse" aria-expanded="true" aria-controls="Flowgate_collapse" style="margin-left: 10px;">Flowgate</a></legend>
                    <div id="Flowgate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='direction'>direction: </label><div class='col-sm-8'><input id='direction' class='form-control' type='text'{{#direction}} value='{{direction}}'{{/direction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='exportMWRating'>exportMWRating: </label><div class='col-sm-8'><input id='exportMWRating' class='form-control' type='text'{{#exportMWRating}} value='{{exportMWRating}}'{{/exportMWRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='importMWRating'>importMWRating: </label><div class='col-sm-8'><input id='importMWRating' class='form-control' type='text'{{#importMWRating}} value='{{importMWRating}}'{{/importMWRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='To_SubControlArea'>To_SubControlArea: </label><div class='col-sm-8'><input id='To_SubControlArea' class='form-control' type='text'{{#To_SubControlArea}} value='{{To_SubControlArea}}'{{/To_SubControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SecurityConstraints'>SecurityConstraints: </label><div class='col-sm-8'><input id='SecurityConstraints' class='form-control' type='text'{{#SecurityConstraints}} value='{{SecurityConstraints}}'{{/SecurityConstraints}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GenericConstraints'>GenericConstraints: </label><div class='col-sm-8'><input id='GenericConstraints' class='form-control' type='text'{{#GenericConstraints}} value='{{GenericConstraints}}'{{/GenericConstraints}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='From_SubControlArea'>From_SubControlArea: </label><div class='col-sm-8'><input id='From_SubControlArea' class='form-control' type='text'{{#From_SubControlArea}} value='{{From_SubControlArea}}'{{/From_SubControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CRR'>CRR: </label><div class='col-sm-8'><input id='CRR' class='form-control' type='text'{{#CRR}} value='{{CRR}}'{{/CRR}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "FlowgatePartner", "FlowgateValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FlowgatePartner_collapse" aria-expanded="true" aria-controls="FlowgatePartner_collapse" style="margin-left: 10px;">FlowgatePartner</a></legend>
                    <div id="FlowgatePartner_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#FlowgateValue}}<div><b>FlowgateValue</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FlowgateValue}}&quot;);})'>{{FlowgateValue}}</a></div>{{/FlowgateValue}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FlowgatePartner_collapse" aria-expanded="true" aria-controls="FlowgatePartner_collapse" style="margin-left: 10px;">FlowgatePartner</a></legend>
                    <div id="FlowgatePartner_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='FlowgateValue'>FlowgateValue: </label><div class='col-sm-8'><input id='FlowgateValue' class='form-control' type='text'{{#FlowgateValue}} value='{{FlowgateValue}}'{{/FlowgateValue}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceStartupCost_collapse" aria-expanded="true" aria-controls="ResourceStartupCost_collapse" style="margin-left: 10px;">ResourceStartupCost</a></legend>
                    <div id="ResourceStartupCost_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#fuelColdStartup}}<div><b>fuelColdStartup</b>: {{fuelColdStartup}}</div>{{/fuelColdStartup}}
                    {{#fuelHotStartup}}<div><b>fuelHotStartup</b>: {{fuelHotStartup}}</div>{{/fuelHotStartup}}
                    {{#fuelIntermediateStartup}}<div><b>fuelIntermediateStartup</b>: {{fuelIntermediateStartup}}</div>{{/fuelIntermediateStartup}}
                    {{#fuelLowSustainedLimit}}<div><b>fuelLowSustainedLimit</b>: {{fuelLowSustainedLimit}}</div>{{/fuelLowSustainedLimit}}
                    {{#gasPercentColdStartup}}<div><b>gasPercentColdStartup</b>: {{gasPercentColdStartup}}</div>{{/gasPercentColdStartup}}
                    {{#gasPercentHotStartup}}<div><b>gasPercentHotStartup</b>: {{gasPercentHotStartup}}</div>{{/gasPercentHotStartup}}
                    {{#gasPercentIntermediateStartup}}<div><b>gasPercentIntermediateStartup</b>: {{gasPercentIntermediateStartup}}</div>{{/gasPercentIntermediateStartup}}
                    {{#gasPercentLowSustainedLimit}}<div><b>gasPercentLowSustainedLimit</b>: {{gasPercentLowSustainedLimit}}</div>{{/gasPercentLowSustainedLimit}}
                    {{#oilPercentColdStartup}}<div><b>oilPercentColdStartup</b>: {{oilPercentColdStartup}}</div>{{/oilPercentColdStartup}}
                    {{#oilPercentHotStartup}}<div><b>oilPercentHotStartup</b>: {{oilPercentHotStartup}}</div>{{/oilPercentHotStartup}}
                    {{#oilPercentIntermediateStartup}}<div><b>oilPercentIntermediateStartup</b>: {{oilPercentIntermediateStartup}}</div>{{/oilPercentIntermediateStartup}}
                    {{#oilPercentLowSustainedLimit}}<div><b>oilPercentLowSustainedLimit</b>: {{oilPercentLowSustainedLimit}}</div>{{/oilPercentLowSustainedLimit}}
                    {{#solidfuelPercentColdStartup}}<div><b>solidfuelPercentColdStartup</b>: {{solidfuelPercentColdStartup}}</div>{{/solidfuelPercentColdStartup}}
                    {{#solidfuelPercentHotStartup}}<div><b>solidfuelPercentHotStartup</b>: {{solidfuelPercentHotStartup}}</div>{{/solidfuelPercentHotStartup}}
                    {{#solidfuelPercentIntermediateStartup}}<div><b>solidfuelPercentIntermediateStartup</b>: {{solidfuelPercentIntermediateStartup}}</div>{{/solidfuelPercentIntermediateStartup}}
                    {{#solidfuelPercentLowSustainedLimit}}<div><b>solidfuelPercentLowSustainedLimit</b>: {{solidfuelPercentLowSustainedLimit}}</div>{{/solidfuelPercentLowSustainedLimit}}
                    {{#ResourceVerifiableCosts}}<div><b>ResourceVerifiableCosts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ResourceVerifiableCosts}}&quot;);})'>{{ResourceVerifiableCosts}}</a></div>{{/ResourceVerifiableCosts}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceStartupCost_collapse" aria-expanded="true" aria-controls="ResourceStartupCost_collapse" style="margin-left: 10px;">ResourceStartupCost</a></legend>
                    <div id="ResourceStartupCost_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelColdStartup'>fuelColdStartup: </label><div class='col-sm-8'><input id='fuelColdStartup' class='form-control' type='text'{{#fuelColdStartup}} value='{{fuelColdStartup}}'{{/fuelColdStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelHotStartup'>fuelHotStartup: </label><div class='col-sm-8'><input id='fuelHotStartup' class='form-control' type='text'{{#fuelHotStartup}} value='{{fuelHotStartup}}'{{/fuelHotStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelIntermediateStartup'>fuelIntermediateStartup: </label><div class='col-sm-8'><input id='fuelIntermediateStartup' class='form-control' type='text'{{#fuelIntermediateStartup}} value='{{fuelIntermediateStartup}}'{{/fuelIntermediateStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelLowSustainedLimit'>fuelLowSustainedLimit: </label><div class='col-sm-8'><input id='fuelLowSustainedLimit' class='form-control' type='text'{{#fuelLowSustainedLimit}} value='{{fuelLowSustainedLimit}}'{{/fuelLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='gasPercentColdStartup'>gasPercentColdStartup: </label><div class='col-sm-8'><input id='gasPercentColdStartup' class='form-control' type='text'{{#gasPercentColdStartup}} value='{{gasPercentColdStartup}}'{{/gasPercentColdStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='gasPercentHotStartup'>gasPercentHotStartup: </label><div class='col-sm-8'><input id='gasPercentHotStartup' class='form-control' type='text'{{#gasPercentHotStartup}} value='{{gasPercentHotStartup}}'{{/gasPercentHotStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='gasPercentIntermediateStartup'>gasPercentIntermediateStartup: </label><div class='col-sm-8'><input id='gasPercentIntermediateStartup' class='form-control' type='text'{{#gasPercentIntermediateStartup}} value='{{gasPercentIntermediateStartup}}'{{/gasPercentIntermediateStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='gasPercentLowSustainedLimit'>gasPercentLowSustainedLimit: </label><div class='col-sm-8'><input id='gasPercentLowSustainedLimit' class='form-control' type='text'{{#gasPercentLowSustainedLimit}} value='{{gasPercentLowSustainedLimit}}'{{/gasPercentLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oilPercentColdStartup'>oilPercentColdStartup: </label><div class='col-sm-8'><input id='oilPercentColdStartup' class='form-control' type='text'{{#oilPercentColdStartup}} value='{{oilPercentColdStartup}}'{{/oilPercentColdStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oilPercentHotStartup'>oilPercentHotStartup: </label><div class='col-sm-8'><input id='oilPercentHotStartup' class='form-control' type='text'{{#oilPercentHotStartup}} value='{{oilPercentHotStartup}}'{{/oilPercentHotStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oilPercentIntermediateStartup'>oilPercentIntermediateStartup: </label><div class='col-sm-8'><input id='oilPercentIntermediateStartup' class='form-control' type='text'{{#oilPercentIntermediateStartup}} value='{{oilPercentIntermediateStartup}}'{{/oilPercentIntermediateStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oilPercentLowSustainedLimit'>oilPercentLowSustainedLimit: </label><div class='col-sm-8'><input id='oilPercentLowSustainedLimit' class='form-control' type='text'{{#oilPercentLowSustainedLimit}} value='{{oilPercentLowSustainedLimit}}'{{/oilPercentLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='solidfuelPercentColdStartup'>solidfuelPercentColdStartup: </label><div class='col-sm-8'><input id='solidfuelPercentColdStartup' class='form-control' type='text'{{#solidfuelPercentColdStartup}} value='{{solidfuelPercentColdStartup}}'{{/solidfuelPercentColdStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='solidfuelPercentHotStartup'>solidfuelPercentHotStartup: </label><div class='col-sm-8'><input id='solidfuelPercentHotStartup' class='form-control' type='text'{{#solidfuelPercentHotStartup}} value='{{solidfuelPercentHotStartup}}'{{/solidfuelPercentHotStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='solidfuelPercentIntermediateStartup'>solidfuelPercentIntermediateStartup: </label><div class='col-sm-8'><input id='solidfuelPercentIntermediateStartup' class='form-control' type='text'{{#solidfuelPercentIntermediateStartup}} value='{{solidfuelPercentIntermediateStartup}}'{{/solidfuelPercentIntermediateStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='solidfuelPercentLowSustainedLimit'>solidfuelPercentLowSustainedLimit: </label><div class='col-sm-8'><input id='solidfuelPercentLowSustainedLimit' class='form-control' type='text'{{#solidfuelPercentLowSustainedLimit}} value='{{solidfuelPercentLowSustainedLimit}}'{{/solidfuelPercentLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ResourceVerifiableCosts'>ResourceVerifiableCosts: </label><div class='col-sm-8'><input id='ResourceVerifiableCosts' class='form-control' type='text'{{#ResourceVerifiableCosts}} value='{{ResourceVerifiableCosts}}'{{/ResourceVerifiableCosts}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "GasPrice", "gasPriceIndex", base.from_float, fields);
                base.export_attribute (obj, "GasPrice", "FuelRegion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GasPrice_collapse" aria-expanded="true" aria-controls="GasPrice_collapse" style="margin-left: 10px;">GasPrice</a></legend>
                    <div id="GasPrice_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#gasPriceIndex}}<div><b>gasPriceIndex</b>: {{gasPriceIndex}}</div>{{/gasPriceIndex}}
                    {{#FuelRegion}}<div><b>FuelRegion</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FuelRegion}}&quot;);})'>{{FuelRegion}}</a></div>{{/FuelRegion}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GasPrice_collapse" aria-expanded="true" aria-controls="GasPrice_collapse" style="margin-left: 10px;">GasPrice</a></legend>
                    <div id="GasPrice_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='gasPriceIndex'>gasPriceIndex: </label><div class='col-sm-8'><input id='gasPriceIndex' class='form-control' type='text'{{#gasPriceIndex}} value='{{gasPriceIndex}}'{{/gasPriceIndex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='FuelRegion'>FuelRegion: </label><div class='col-sm-8'><input id='FuelRegion' class='form-control' type='text'{{#FuelRegion}} value='{{FuelRegion}}'{{/FuelRegion}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadRatio_collapse" aria-expanded="true" aria-controls="LoadRatio_collapse" style="margin-left: 10px;">LoadRatio</a></legend>
                    <div id="LoadRatio_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#intervalEndTime}}<div><b>intervalEndTime</b>: {{intervalEndTime}}</div>{{/intervalEndTime}}
                    {{#share}}<div><b>share</b>: {{share}}</div>{{/share}}
                    {{#SchedulingCoordinator}}<div><b>SchedulingCoordinator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SchedulingCoordinator}}&quot;);})'>{{SchedulingCoordinator}}</a></div>{{/SchedulingCoordinator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadRatio_collapse" aria-expanded="true" aria-controls="LoadRatio_collapse" style="margin-left: 10px;">LoadRatio</a></legend>
                    <div id="LoadRatio_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalEndTime'>intervalEndTime: </label><div class='col-sm-8'><input id='intervalEndTime' class='form-control' type='text'{{#intervalEndTime}} value='{{intervalEndTime}}'{{/intervalEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='share'>share: </label><div class='col-sm-8'><input id='share' class='form-control' type='text'{{#share}} value='{{share}}'{{/share}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SchedulingCoordinator'>SchedulingCoordinator: </label><div class='col-sm-8'><input id='SchedulingCoordinator' class='form-control' type='text'{{#SchedulingCoordinator}} value='{{SchedulingCoordinator}}'{{/SchedulingCoordinator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = MarketCommon.RegisteredResource.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegisteredInterTie_collapse" aria-expanded="true" aria-controls="RegisteredInterTie_collapse" style="margin-left: 10px;">RegisteredInterTie</a></legend>
                    <div id="RegisteredInterTie_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.template.call (this) +
                    `
                    {{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
                    {{#energyProductType}}<div><b>energyProductType</b>: {{energyProductType}}</div>{{/energyProductType}}
                    {{#isDCTie}}<div><b>isDCTie</b>: {{isDCTie}}</div>{{/isDCTie}}
                    {{#isDynamicInterchange}}<div><b>isDynamicInterchange</b>: {{isDynamicInterchange}}</div>{{/isDynamicInterchange}}
                    {{#minHourlyBlockLimit}}<div><b>minHourlyBlockLimit</b>: {{minHourlyBlockLimit}}</div>{{/minHourlyBlockLimit}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#InterTieBid}}<div><b>InterTieBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InterTieBid}}&quot;);})'>{{InterTieBid}}</a></div>{{/InterTieBid}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegisteredInterTie_collapse" aria-expanded="true" aria-controls="RegisteredInterTie_collapse" style="margin-left: 10px;">RegisteredInterTie</a></legend>
                    <div id="RegisteredInterTie_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='direction'>direction: </label><div class='col-sm-8'><input id='direction' class='form-control' type='text'{{#direction}} value='{{direction}}'{{/direction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyProductType'>energyProductType: </label><div class='col-sm-8'><input id='energyProductType' class='form-control' type='text'{{#energyProductType}} value='{{energyProductType}}'{{/energyProductType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='isDCTie'>isDCTie: </label><div class='col-sm-8'><input id='isDCTie' class='form-control' type='text'{{#isDCTie}} value='{{isDCTie}}'{{/isDCTie}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='isDynamicInterchange'>isDynamicInterchange: </label><div class='col-sm-8'><input id='isDynamicInterchange' class='form-control' type='text'{{#isDynamicInterchange}} value='{{isDynamicInterchange}}'{{/isDynamicInterchange}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minHourlyBlockLimit'>minHourlyBlockLimit: </label><div class='col-sm-8'><input id='minHourlyBlockLimit' class='form-control' type='text'{{#minHourlyBlockLimit}} value='{{minHourlyBlockLimit}}'{{/minHourlyBlockLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='InterTieBid'>InterTieBid: </label><div class='col-sm-8'><input id='InterTieBid' class='form-control' type='text'{{#InterTieBid}} value='{{InterTieBid}}'{{/InterTieBid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = MarketCommon.RegisteredResource.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegisteredLoad_collapse" aria-expanded="true" aria-controls="RegisteredLoad_collapse" style="margin-left: 10px;">RegisteredLoad</a></legend>
                    <div id="RegisteredLoad_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.template.call (this) +
                    `
                    {{#blockLoadTransferFlag}}<div><b>blockLoadTransferFlag</b>: {{blockLoadTransferFlag}}</div>{{/blockLoadTransferFlag}}
                    {{#dynamicallyScheduledLoadResourceFlag}}<div><b>dynamicallyScheduledLoadResourceFlag</b>: {{dynamicallyScheduledLoadResourceFlag}}</div>{{/dynamicallyScheduledLoadResourceFlag}}
                    {{#dynamicallyScheduledQualificationFlag}}<div><b>dynamicallyScheduledQualificationFlag</b>: {{dynamicallyScheduledQualificationFlag}}</div>{{/dynamicallyScheduledQualificationFlag}}
                    {{#loadRegistryMSS}}<div><b>loadRegistryMSS</b>: {{loadRegistryMSS}}</div>{{/loadRegistryMSS}}
                    {{#maxBaseLoad}}<div><b>maxBaseLoad</b>: {{maxBaseLoad}}</div>{{/maxBaseLoad}}
                    {{#maxDeploymentTime}}<div><b>maxDeploymentTime</b>: {{maxDeploymentTime}}</div>{{/maxDeploymentTime}}
                    {{#maxLoadRedTimesPerDay}}<div><b>maxLoadRedTimesPerDay</b>: {{maxLoadRedTimesPerDay}}</div>{{/maxLoadRedTimesPerDay}}
                    {{#maxLoadReduction}}<div><b>maxLoadReduction</b>: {{maxLoadReduction}}</div>{{/maxLoadReduction}}
                    {{#maxReductionTime}}<div><b>maxReductionTime</b>: {{maxReductionTime}}</div>{{/maxReductionTime}}
                    {{#maxWeeklyDeployment}}<div><b>maxWeeklyDeployment</b>: {{maxWeeklyDeployment}}</div>{{/maxWeeklyDeployment}}
                    {{#minLoadReduction}}<div><b>minLoadReduction</b>: {{minLoadReduction}}</div>{{/minLoadReduction}}
                    {{#minLoadReductionCost}}<div><b>minLoadReductionCost</b>: {{minLoadReductionCost}}</div>{{/minLoadReductionCost}}
                    {{#minLoadReductionInterval}}<div><b>minLoadReductionInterval</b>: {{minLoadReductionInterval}}</div>{{/minLoadReductionInterval}}
                    {{#minReductionTime}}<div><b>minReductionTime</b>: {{minReductionTime}}</div>{{/minReductionTime}}
                    {{#minTimeBetLoadRed}}<div><b>minTimeBetLoadRed</b>: {{minTimeBetLoadRed}}</div>{{/minTimeBetLoadRed}}
                    {{#NPLCustomLoadAggregation}}<div><b>NPLCustomLoadAggregation</b>: {{NPLCustomLoadAggregation}}</div>{{/NPLCustomLoadAggregation}}
                    {{#participatingLoad}}<div><b>participatingLoad</b>: {{participatingLoad}}</div>{{/participatingLoad}}
                    {{#reqNoticeTime}}<div><b>reqNoticeTime</b>: {{reqNoticeTime}}</div>{{/reqNoticeTime}}
                    {{#resourceSubType}}<div><b>resourceSubType</b>: {{resourceSubType}}</div>{{/resourceSubType}}
                    {{#MktLoadArea}}<div><b>MktLoadArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktLoadArea}}&quot;);})'>{{MktLoadArea}}</a></div>{{/MktLoadArea}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegisteredLoad_collapse" aria-expanded="true" aria-controls="RegisteredLoad_collapse" style="margin-left: 10px;">RegisteredLoad</a></legend>
                    <div id="RegisteredLoad_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketCommon.RegisteredResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='blockLoadTransferFlag'>blockLoadTransferFlag: </label><div class='col-sm-8'><input id='blockLoadTransferFlag' class='form-control' type='text'{{#blockLoadTransferFlag}} value='{{blockLoadTransferFlag}}'{{/blockLoadTransferFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dynamicallyScheduledLoadResourceFlag'>dynamicallyScheduledLoadResourceFlag: </label><div class='col-sm-8'><input id='dynamicallyScheduledLoadResourceFlag' class='form-control' type='text'{{#dynamicallyScheduledLoadResourceFlag}} value='{{dynamicallyScheduledLoadResourceFlag}}'{{/dynamicallyScheduledLoadResourceFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dynamicallyScheduledQualificationFlag'>dynamicallyScheduledQualificationFlag: </label><div class='col-sm-8'><input id='dynamicallyScheduledQualificationFlag' class='form-control' type='text'{{#dynamicallyScheduledQualificationFlag}} value='{{dynamicallyScheduledQualificationFlag}}'{{/dynamicallyScheduledQualificationFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadRegistryMSS'>loadRegistryMSS: </label><div class='col-sm-8'><input id='loadRegistryMSS' class='form-control' type='text'{{#loadRegistryMSS}} value='{{loadRegistryMSS}}'{{/loadRegistryMSS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxBaseLoad'>maxBaseLoad: </label><div class='col-sm-8'><input id='maxBaseLoad' class='form-control' type='text'{{#maxBaseLoad}} value='{{maxBaseLoad}}'{{/maxBaseLoad}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxDeploymentTime'>maxDeploymentTime: </label><div class='col-sm-8'><input id='maxDeploymentTime' class='form-control' type='text'{{#maxDeploymentTime}} value='{{maxDeploymentTime}}'{{/maxDeploymentTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxLoadRedTimesPerDay'>maxLoadRedTimesPerDay: </label><div class='col-sm-8'><input id='maxLoadRedTimesPerDay' class='form-control' type='text'{{#maxLoadRedTimesPerDay}} value='{{maxLoadRedTimesPerDay}}'{{/maxLoadRedTimesPerDay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxLoadReduction'>maxLoadReduction: </label><div class='col-sm-8'><input id='maxLoadReduction' class='form-control' type='text'{{#maxLoadReduction}} value='{{maxLoadReduction}}'{{/maxLoadReduction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxReductionTime'>maxReductionTime: </label><div class='col-sm-8'><input id='maxReductionTime' class='form-control' type='text'{{#maxReductionTime}} value='{{maxReductionTime}}'{{/maxReductionTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxWeeklyDeployment'>maxWeeklyDeployment: </label><div class='col-sm-8'><input id='maxWeeklyDeployment' class='form-control' type='text'{{#maxWeeklyDeployment}} value='{{maxWeeklyDeployment}}'{{/maxWeeklyDeployment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minLoadReduction'>minLoadReduction: </label><div class='col-sm-8'><input id='minLoadReduction' class='form-control' type='text'{{#minLoadReduction}} value='{{minLoadReduction}}'{{/minLoadReduction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minLoadReductionCost'>minLoadReductionCost: </label><div class='col-sm-8'><input id='minLoadReductionCost' class='form-control' type='text'{{#minLoadReductionCost}} value='{{minLoadReductionCost}}'{{/minLoadReductionCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minLoadReductionInterval'>minLoadReductionInterval: </label><div class='col-sm-8'><input id='minLoadReductionInterval' class='form-control' type='text'{{#minLoadReductionInterval}} value='{{minLoadReductionInterval}}'{{/minLoadReductionInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minReductionTime'>minReductionTime: </label><div class='col-sm-8'><input id='minReductionTime' class='form-control' type='text'{{#minReductionTime}} value='{{minReductionTime}}'{{/minReductionTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minTimeBetLoadRed'>minTimeBetLoadRed: </label><div class='col-sm-8'><input id='minTimeBetLoadRed' class='form-control' type='text'{{#minTimeBetLoadRed}} value='{{minTimeBetLoadRed}}'{{/minTimeBetLoadRed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='NPLCustomLoadAggregation'>NPLCustomLoadAggregation: </label><div class='col-sm-8'><input id='NPLCustomLoadAggregation' class='form-control' type='text'{{#NPLCustomLoadAggregation}} value='{{NPLCustomLoadAggregation}}'{{/NPLCustomLoadAggregation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='participatingLoad'>participatingLoad: </label><div class='col-sm-8'><input id='participatingLoad' class='form-control' type='text'{{#participatingLoad}} value='{{participatingLoad}}'{{/participatingLoad}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reqNoticeTime'>reqNoticeTime: </label><div class='col-sm-8'><input id='reqNoticeTime' class='form-control' type='text'{{#reqNoticeTime}} value='{{reqNoticeTime}}'{{/reqNoticeTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='resourceSubType'>resourceSubType: </label><div class='col-sm-8'><input id='resourceSubType' class='form-control' type='text'{{#resourceSubType}} value='{{resourceSubType}}'{{/resourceSubType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktLoadArea'>MktLoadArea: </label><div class='col-sm-8'><input id='MktLoadArea' class='form-control' type='text'{{#MktLoadArea}} value='{{MktLoadArea}}'{{/MktLoadArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "AggregateNode", "anodeType", base.from_string, fields);
                base.export_element (obj, "AggregateNode", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "AggregateNode", "qualifASOrder", base.from_string, fields);
                base.export_element (obj, "AggregateNode", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "AggregateNode", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AggregateNode_collapse" aria-expanded="true" aria-controls="AggregateNode_collapse" style="margin-left: 10px;">AggregateNode</a></legend>
                    <div id="AggregateNode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#anodeType}}<div><b>anodeType</b>: {{anodeType}}</div>{{/anodeType}}
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#qualifASOrder}}<div><b>qualifASOrder</b>: {{qualifASOrder}}</div>{{/qualifASOrder}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AggregateNode_collapse" aria-expanded="true" aria-controls="AggregateNode_collapse" style="margin-left: 10px;">AggregateNode</a></legend>
                    <div id="AggregateNode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='anodeType'>anodeType: </label><div class='col-sm-8'><input id='anodeType' class='form-control' type='text'{{#anodeType}} value='{{anodeType}}'{{/anodeType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qualifASOrder'>qualifASOrder: </label><div class='col-sm-8'><input id='qualifASOrder' class='form-control' type='text'{{#qualifASOrder}} value='{{qualifASOrder}}'{{/qualifASOrder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RTO'>RTO: </label><div class='col-sm-8'><input id='RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Production.CombinedCyclePlant.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktCombinedCyclePlant", "AggregatedPnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktCombinedCyclePlant_collapse" aria-expanded="true" aria-controls="MktCombinedCyclePlant_collapse" style="margin-left: 10px;">MktCombinedCyclePlant</a></legend>
                    <div id="MktCombinedCyclePlant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Production.CombinedCyclePlant.prototype.template.call (this) +
                    `
                    {{#AggregatedPnode}}<div><b>AggregatedPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AggregatedPnode}}&quot;);})'>{{AggregatedPnode}}</a></div>{{/AggregatedPnode}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktCombinedCyclePlant_collapse" aria-expanded="true" aria-controls="MktCombinedCyclePlant_collapse" style="margin-left: 10px;">MktCombinedCyclePlant</a></legend>
                    <div id="MktCombinedCyclePlant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Production.CombinedCyclePlant.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AggregatedPnode'>AggregatedPnode: </label><div class='col-sm-8'><input id='AggregatedPnode' class='form-control' type='text'{{#AggregatedPnode}} value='{{AggregatedPnode}}'{{/AggregatedPnode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CombinedCycleLogicalConfiguration", "MktCombinedCyclePlant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CombinedCycleLogicalConfiguration_collapse" aria-expanded="true" aria-controls="CombinedCycleLogicalConfiguration_collapse" style="margin-left: 10px;">CombinedCycleLogicalConfiguration</a></legend>
                    <div id="CombinedCycleLogicalConfiguration_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#MktCombinedCyclePlant}}<div><b>MktCombinedCyclePlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktCombinedCyclePlant}}&quot;);})'>{{MktCombinedCyclePlant}}</a></div>{{/MktCombinedCyclePlant}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CombinedCycleLogicalConfiguration_collapse" aria-expanded="true" aria-controls="CombinedCycleLogicalConfiguration_collapse" style="margin-left: 10px;">CombinedCycleLogicalConfiguration</a></legend>
                    <div id="CombinedCycleLogicalConfiguration_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktCombinedCyclePlant'>MktCombinedCyclePlant: </label><div class='col-sm-8'><input id='MktCombinedCyclePlant' class='form-control' type='text'{{#MktCombinedCyclePlant}} value='{{MktCombinedCyclePlant}}'{{/MktCombinedCyclePlant}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WheelingCounterParty_collapse" aria-expanded="true" aria-controls="WheelingCounterParty_collapse" style="margin-left: 10px;">WheelingCounterParty</a></legend>
                    <div id="WheelingCounterParty_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WheelingCounterParty_collapse" aria-expanded="true" aria-controls="WheelingCounterParty_collapse" style="margin-left: 10px;">WheelingCounterParty</a></legend>
                    <div id="WheelingCounterParty_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CombinedCycleTransitionState", "upTransition", base.from_boolean, fields);
                base.export_attribute (obj, "CombinedCycleTransitionState", "FromConfiguration", fields);
                base.export_attribute (obj, "CombinedCycleTransitionState", "ToConfiguration", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CombinedCycleTransitionState_collapse" aria-expanded="true" aria-controls="CombinedCycleTransitionState_collapse" style="margin-left: 10px;">CombinedCycleTransitionState</a></legend>
                    <div id="CombinedCycleTransitionState_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#upTransition}}<div><b>upTransition</b>: {{upTransition}}</div>{{/upTransition}}
                    {{#FromConfiguration}}<div><b>FromConfiguration</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FromConfiguration}}&quot;);})'>{{FromConfiguration}}</a></div>{{/FromConfiguration}}
                    {{#ToConfiguration}}<div><b>ToConfiguration</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ToConfiguration}}&quot;);})'>{{ToConfiguration}}</a></div>{{/ToConfiguration}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CombinedCycleTransitionState_collapse" aria-expanded="true" aria-controls="CombinedCycleTransitionState_collapse" style="margin-left: 10px;">CombinedCycleTransitionState</a></legend>
                    <div id="CombinedCycleTransitionState_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='upTransition'>upTransition: </label><div class='col-sm-8'><input id='upTransition' class='form-check-input' type='checkbox'{{#upTransition}} checked{{/upTransition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='FromConfiguration'>FromConfiguration: </label><div class='col-sm-8'><input id='FromConfiguration' class='form-control' type='text'{{#FromConfiguration}} value='{{FromConfiguration}}'{{/FromConfiguration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ToConfiguration'>ToConfiguration: </label><div class='col-sm-8'><input id='ToConfiguration' class='form-control' type='text'{{#ToConfiguration}} value='{{ToConfiguration}}'{{/ToConfiguration}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OrgResOwnership_collapse" aria-expanded="true" aria-controls="OrgResOwnership_collapse" style="margin-left: 10px;">OrgResOwnership</a></legend>
                    <div id="OrgResOwnership_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#asscType}}<div><b>asscType</b>: {{asscType}}</div>{{/asscType}}
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#masterSchedulingCoordinatorFlag}}<div><b>masterSchedulingCoordinatorFlag</b>: {{masterSchedulingCoordinatorFlag}}</div>{{/masterSchedulingCoordinatorFlag}}
                    {{#ownershipPercent}}<div><b>ownershipPercent</b>: {{ownershipPercent}}</div>{{/ownershipPercent}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OrgResOwnership_collapse" aria-expanded="true" aria-controls="OrgResOwnership_collapse" style="margin-left: 10px;">OrgResOwnership</a></legend>
                    <div id="OrgResOwnership_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='asscType'>asscType: </label><div class='col-sm-8'><input id='asscType' class='form-control' type='text'{{#asscType}} value='{{asscType}}'{{/asscType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='masterSchedulingCoordinatorFlag'>masterSchedulingCoordinatorFlag: </label><div class='col-sm-8'><input id='masterSchedulingCoordinatorFlag' class='form-control' type='text'{{#masterSchedulingCoordinatorFlag}} value='{{masterSchedulingCoordinatorFlag}}'{{/masterSchedulingCoordinatorFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ownershipPercent'>ownershipPercent: </label><div class='col-sm-8'><input id='ownershipPercent' class='form-control' type='text'{{#ownershipPercent}} value='{{ownershipPercent}}'{{/ownershipPercent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktOrganisation'>MktOrganisation: </label><div class='col-sm-8'><input id='MktOrganisation' class='form-control' type='text'{{#MktOrganisation}} value='{{MktOrganisation}}'{{/MktOrganisation}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ContractRight_collapse" aria-expanded="true" aria-controls="ContractRight_collapse" style="margin-left: 10px;">ContractRight</a></legend>
                    <div id="ContractRight_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#chainOrder}}<div><b>chainOrder</b>: {{chainOrder}}</div>{{/chainOrder}}
                    {{#contractMW}}<div><b>contractMW</b>: {{contractMW}}</div>{{/contractMW}}
                    {{#contractPrice}}<div><b>contractPrice</b>: {{contractPrice}}</div>{{/contractPrice}}
                    {{#contractPriority}}<div><b>contractPriority</b>: {{contractPriority}}</div>{{/contractPriority}}
                    {{#contractStatus}}<div><b>contractStatus</b>: {{contractStatus}}</div>{{/contractStatus}}
                    {{#contractType}}<div><b>contractType</b>: {{contractType}}</div>{{/contractType}}
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#financialLocation}}<div><b>financialLocation</b>: {{financialLocation}}</div>{{/financialLocation}}
                    {{#financialRightsDAM}}<div><b>financialRightsDAM</b>: {{financialRightsDAM}}</div>{{/financialRightsDAM}}
                    {{#financialRightsRTM}}<div><b>financialRightsRTM</b>: {{financialRightsRTM}}</div>{{/financialRightsRTM}}
                    {{#fuelAdder}}<div><b>fuelAdder</b>: {{fuelAdder}}</div>{{/fuelAdder}}
                    {{#latestSchedMinutes}}<div><b>latestSchedMinutes</b>: {{latestSchedMinutes}}</div>{{/latestSchedMinutes}}
                    {{#latestSchedMktType}}<div><b>latestSchedMktType</b>: {{latestSchedMktType}}</div>{{/latestSchedMktType}}
                    {{#maximumScheduleQuantity}}<div><b>maximumScheduleQuantity</b>: {{maximumScheduleQuantity}}</div>{{/maximumScheduleQuantity}}
                    {{#maximumServiceHours}}<div><b>maximumServiceHours</b>: {{maximumServiceHours}}</div>{{/maximumServiceHours}}
                    {{#maximumStartups}}<div><b>maximumStartups</b>: {{maximumStartups}}</div>{{/maximumStartups}}
                    {{#maxNetDependableCapacity}}<div><b>maxNetDependableCapacity</b>: {{maxNetDependableCapacity}}</div>{{/maxNetDependableCapacity}}
                    {{#minimumLoad}}<div><b>minimumLoad</b>: {{minimumLoad}}</div>{{/minimumLoad}}
                    {{#minimumScheduleQuantity}}<div><b>minimumScheduleQuantity</b>: {{minimumScheduleQuantity}}</div>{{/minimumScheduleQuantity}}
                    {{#physicalRightsDAM}}<div><b>physicalRightsDAM</b>: {{physicalRightsDAM}}</div>{{/physicalRightsDAM}}
                    {{#physicalRightsRTM}}<div><b>physicalRightsRTM</b>: {{physicalRightsRTM}}</div>{{/physicalRightsRTM}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#startupLeadTime}}<div><b>startupLeadTime</b>: {{startupLeadTime}}</div>{{/startupLeadTime}}
                    {{#TRType}}<div><b>TRType</b>: {{TRType}}</div>{{/TRType}}
                    {{#SchedulingCoordinator}}<div><b>SchedulingCoordinator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SchedulingCoordinator}}&quot;);})'>{{SchedulingCoordinator}}</a></div>{{/SchedulingCoordinator}}
                    {{#Ind_TransmissionRightChain}}<div><b>Ind_TransmissionRightChain</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Ind_TransmissionRightChain}}&quot;);})'>{{Ind_TransmissionRightChain}}</a></div>{{/Ind_TransmissionRightChain}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
                    {{#Chain_TransmissionRightChain}}<div><b>Chain_TransmissionRightChain</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Chain_TransmissionRightChain}}&quot;);})'>{{Chain_TransmissionRightChain}}</a></div>{{/Chain_TransmissionRightChain}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ContractRight_collapse" aria-expanded="true" aria-controls="ContractRight_collapse" style="margin-left: 10px;">ContractRight</a></legend>
                    <div id="ContractRight_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='chainOrder'>chainOrder: </label><div class='col-sm-8'><input id='chainOrder' class='form-control' type='text'{{#chainOrder}} value='{{chainOrder}}'{{/chainOrder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contractMW'>contractMW: </label><div class='col-sm-8'><input id='contractMW' class='form-control' type='text'{{#contractMW}} value='{{contractMW}}'{{/contractMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contractPrice'>contractPrice: </label><div class='col-sm-8'><input id='contractPrice' class='form-control' type='text'{{#contractPrice}} value='{{contractPrice}}'{{/contractPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contractPriority'>contractPriority: </label><div class='col-sm-8'><input id='contractPriority' class='form-control' type='text'{{#contractPriority}} value='{{contractPriority}}'{{/contractPriority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contractStatus'>contractStatus: </label><div class='col-sm-8'><input id='contractStatus' class='form-control' type='text'{{#contractStatus}} value='{{contractStatus}}'{{/contractStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contractType'>contractType: </label><div class='col-sm-8'><input id='contractType' class='form-control' type='text'{{#contractType}} value='{{contractType}}'{{/contractType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='financialLocation'>financialLocation: </label><div class='col-sm-8'><input id='financialLocation' class='form-control' type='text'{{#financialLocation}} value='{{financialLocation}}'{{/financialLocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='financialRightsDAM'>financialRightsDAM: </label><div class='col-sm-8'><input id='financialRightsDAM' class='form-control' type='text'{{#financialRightsDAM}} value='{{financialRightsDAM}}'{{/financialRightsDAM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='financialRightsRTM'>financialRightsRTM: </label><div class='col-sm-8'><input id='financialRightsRTM' class='form-control' type='text'{{#financialRightsRTM}} value='{{financialRightsRTM}}'{{/financialRightsRTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelAdder'>fuelAdder: </label><div class='col-sm-8'><input id='fuelAdder' class='form-control' type='text'{{#fuelAdder}} value='{{fuelAdder}}'{{/fuelAdder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='latestSchedMinutes'>latestSchedMinutes: </label><div class='col-sm-8'><input id='latestSchedMinutes' class='form-control' type='text'{{#latestSchedMinutes}} value='{{latestSchedMinutes}}'{{/latestSchedMinutes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='latestSchedMktType'>latestSchedMktType: </label><div class='col-sm-8'><input id='latestSchedMktType' class='form-control' type='text'{{#latestSchedMktType}} value='{{latestSchedMktType}}'{{/latestSchedMktType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maximumScheduleQuantity'>maximumScheduleQuantity: </label><div class='col-sm-8'><input id='maximumScheduleQuantity' class='form-control' type='text'{{#maximumScheduleQuantity}} value='{{maximumScheduleQuantity}}'{{/maximumScheduleQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maximumServiceHours'>maximumServiceHours: </label><div class='col-sm-8'><input id='maximumServiceHours' class='form-control' type='text'{{#maximumServiceHours}} value='{{maximumServiceHours}}'{{/maximumServiceHours}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maximumStartups'>maximumStartups: </label><div class='col-sm-8'><input id='maximumStartups' class='form-control' type='text'{{#maximumStartups}} value='{{maximumStartups}}'{{/maximumStartups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxNetDependableCapacity'>maxNetDependableCapacity: </label><div class='col-sm-8'><input id='maxNetDependableCapacity' class='form-control' type='text'{{#maxNetDependableCapacity}} value='{{maxNetDependableCapacity}}'{{/maxNetDependableCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumLoad'>minimumLoad: </label><div class='col-sm-8'><input id='minimumLoad' class='form-control' type='text'{{#minimumLoad}} value='{{minimumLoad}}'{{/minimumLoad}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumScheduleQuantity'>minimumScheduleQuantity: </label><div class='col-sm-8'><input id='minimumScheduleQuantity' class='form-control' type='text'{{#minimumScheduleQuantity}} value='{{minimumScheduleQuantity}}'{{/minimumScheduleQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='physicalRightsDAM'>physicalRightsDAM: </label><div class='col-sm-8'><input id='physicalRightsDAM' class='form-control' type='text'{{#physicalRightsDAM}} value='{{physicalRightsDAM}}'{{/physicalRightsDAM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='physicalRightsRTM'>physicalRightsRTM: </label><div class='col-sm-8'><input id='physicalRightsRTM' class='form-control' type='text'{{#physicalRightsRTM}} value='{{physicalRightsRTM}}'{{/physicalRightsRTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startupLeadTime'>startupLeadTime: </label><div class='col-sm-8'><input id='startupLeadTime' class='form-control' type='text'{{#startupLeadTime}} value='{{startupLeadTime}}'{{/startupLeadTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TRType'>TRType: </label><div class='col-sm-8'><input id='TRType' class='form-control' type='text'{{#TRType}} value='{{TRType}}'{{/TRType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SchedulingCoordinator'>SchedulingCoordinator: </label><div class='col-sm-8'><input id='SchedulingCoordinator' class='form-control' type='text'{{#SchedulingCoordinator}} value='{{SchedulingCoordinator}}'{{/SchedulingCoordinator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Ind_TransmissionRightChain'>Ind_TransmissionRightChain: </label><div class='col-sm-8'><input id='Ind_TransmissionRightChain' class='form-control' type='text'{{#Ind_TransmissionRightChain}} value='{{Ind_TransmissionRightChain}}'{{/Ind_TransmissionRightChain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RTO'>RTO: </label><div class='col-sm-8'><input id='RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Chain_TransmissionRightChain'>Chain_TransmissionRightChain: </label><div class='col-sm-8'><input id='Chain_TransmissionRightChain' class='form-control' type='text'{{#Chain_TransmissionRightChain}} value='{{Chain_TransmissionRightChain}}'{{/Chain_TransmissionRightChain}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "AdjacentCASet", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "AdjacentCASet", "lossPercentage ", base.from_float, fields);
                base.export_element (obj, "AdjacentCASet", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "AdjacentCASet", "HostControlArea", fields);
                base.export_attribute (obj, "AdjacentCASet", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AdjacentCASet_collapse" aria-expanded="true" aria-controls="AdjacentCASet_collapse" style="margin-left: 10px;">AdjacentCASet</a></legend>
                    <div id="AdjacentCASet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#lossPercentage }}<div><b>lossPercentage </b>: {{lossPercentage }}</div>{{/lossPercentage }}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HostControlArea}}&quot;);})'>{{HostControlArea}}</a></div>{{/HostControlArea}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AdjacentCASet_collapse" aria-expanded="true" aria-controls="AdjacentCASet_collapse" style="margin-left: 10px;">AdjacentCASet</a></legend>
                    <div id="AdjacentCASet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lossPercentage '>lossPercentage : </label><div class='col-sm-8'><input id='lossPercentage ' class='form-control' type='text'{{#lossPercentage }} value='{{lossPercentage }}'{{/lossPercentage }}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RTO'>RTO: </label><div class='col-sm-8'><input id='RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "SchedulingPoint", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "SchedulingPoint", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "SchedulingPoint", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SchedulingPoint_collapse" aria-expanded="true" aria-controls="SchedulingPoint_collapse" style="margin-left: 10px;">SchedulingPoint</a></legend>
                    <div id="SchedulingPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SchedulingPoint_collapse" aria-expanded="true" aria-controls="SchedulingPoint_collapse" style="margin-left: 10px;">SchedulingPoint</a></legend>
                    <div id="SchedulingPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "OrgPnodeAllocation", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "OrgPnodeAllocation", "maxMWAllocation", base.from_string, fields);
                base.export_element (obj, "OrgPnodeAllocation", "startEffectiveDate", base.from_datetime, fields);
                base.export_attribute (obj, "OrgPnodeAllocation", "Pnode", fields);
                base.export_attribute (obj, "OrgPnodeAllocation", "MktOrganisation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OrgPnodeAllocation_collapse" aria-expanded="true" aria-controls="OrgPnodeAllocation_collapse" style="margin-left: 10px;">OrgPnodeAllocation</a></legend>
                    <div id="OrgPnodeAllocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#maxMWAllocation}}<div><b>maxMWAllocation</b>: {{maxMWAllocation}}</div>{{/maxMWAllocation}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Pnode}}&quot;);})'>{{Pnode}}</a></div>{{/Pnode}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OrgPnodeAllocation_collapse" aria-expanded="true" aria-controls="OrgPnodeAllocation_collapse" style="margin-left: 10px;">OrgPnodeAllocation</a></legend>
                    <div id="OrgPnodeAllocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxMWAllocation'>maxMWAllocation: </label><div class='col-sm-8'><input id='maxMWAllocation' class='form-control' type='text'{{#maxMWAllocation}} value='{{maxMWAllocation}}'{{/maxMWAllocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Pnode'>Pnode: </label><div class='col-sm-8'><input id='Pnode' class='form-control' type='text'{{#Pnode}} value='{{Pnode}}'{{/Pnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktOrganisation'>MktOrganisation: </label><div class='col-sm-8'><input id='MktOrganisation' class='form-control' type='text'{{#MktOrganisation}} value='{{MktOrganisation}}'{{/MktOrganisation}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceOperationMaintenanceCost_collapse" aria-expanded="true" aria-controls="ResourceOperationMaintenanceCost_collapse" style="margin-left: 10px;">ResourceOperationMaintenanceCost</a></legend>
                    <div id="ResourceOperationMaintenanceCost_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#gasPercentAboveLowSustainedLimit}}<div><b>gasPercentAboveLowSustainedLimit</b>: {{gasPercentAboveLowSustainedLimit}}</div>{{/gasPercentAboveLowSustainedLimit}}
                    {{#oilPercentAboveLowSustainedLimit}}<div><b>oilPercentAboveLowSustainedLimit</b>: {{oilPercentAboveLowSustainedLimit}}</div>{{/oilPercentAboveLowSustainedLimit}}
                    {{#omCostColdStartup}}<div><b>omCostColdStartup</b>: {{omCostColdStartup}}</div>{{/omCostColdStartup}}
                    {{#omCostHotStartup}}<div><b>omCostHotStartup</b>: {{omCostHotStartup}}</div>{{/omCostHotStartup}}
                    {{#omCostIntermediateStartup}}<div><b>omCostIntermediateStartup</b>: {{omCostIntermediateStartup}}</div>{{/omCostIntermediateStartup}}
                    {{#omCostLowSustainedLimit}}<div><b>omCostLowSustainedLimit</b>: {{omCostLowSustainedLimit}}</div>{{/omCostLowSustainedLimit}}
                    {{#solidfuelPercentAboveLowSustainedLimit}}<div><b>solidfuelPercentAboveLowSustainedLimit</b>: {{solidfuelPercentAboveLowSustainedLimit}}</div>{{/solidfuelPercentAboveLowSustainedLimit}}
                    {{#ResourceVerifiableCosts}}<div><b>ResourceVerifiableCosts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ResourceVerifiableCosts}}&quot;);})'>{{ResourceVerifiableCosts}}</a></div>{{/ResourceVerifiableCosts}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceOperationMaintenanceCost_collapse" aria-expanded="true" aria-controls="ResourceOperationMaintenanceCost_collapse" style="margin-left: 10px;">ResourceOperationMaintenanceCost</a></legend>
                    <div id="ResourceOperationMaintenanceCost_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='gasPercentAboveLowSustainedLimit'>gasPercentAboveLowSustainedLimit: </label><div class='col-sm-8'><input id='gasPercentAboveLowSustainedLimit' class='form-control' type='text'{{#gasPercentAboveLowSustainedLimit}} value='{{gasPercentAboveLowSustainedLimit}}'{{/gasPercentAboveLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oilPercentAboveLowSustainedLimit'>oilPercentAboveLowSustainedLimit: </label><div class='col-sm-8'><input id='oilPercentAboveLowSustainedLimit' class='form-control' type='text'{{#oilPercentAboveLowSustainedLimit}} value='{{oilPercentAboveLowSustainedLimit}}'{{/oilPercentAboveLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='omCostColdStartup'>omCostColdStartup: </label><div class='col-sm-8'><input id='omCostColdStartup' class='form-control' type='text'{{#omCostColdStartup}} value='{{omCostColdStartup}}'{{/omCostColdStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='omCostHotStartup'>omCostHotStartup: </label><div class='col-sm-8'><input id='omCostHotStartup' class='form-control' type='text'{{#omCostHotStartup}} value='{{omCostHotStartup}}'{{/omCostHotStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='omCostIntermediateStartup'>omCostIntermediateStartup: </label><div class='col-sm-8'><input id='omCostIntermediateStartup' class='form-control' type='text'{{#omCostIntermediateStartup}} value='{{omCostIntermediateStartup}}'{{/omCostIntermediateStartup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='omCostLowSustainedLimit'>omCostLowSustainedLimit: </label><div class='col-sm-8'><input id='omCostLowSustainedLimit' class='form-control' type='text'{{#omCostLowSustainedLimit}} value='{{omCostLowSustainedLimit}}'{{/omCostLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='solidfuelPercentAboveLowSustainedLimit'>solidfuelPercentAboveLowSustainedLimit: </label><div class='col-sm-8'><input id='solidfuelPercentAboveLowSustainedLimit' class='form-control' type='text'{{#solidfuelPercentAboveLowSustainedLimit}} value='{{solidfuelPercentAboveLowSustainedLimit}}'{{/solidfuelPercentAboveLowSustainedLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ResourceVerifiableCosts'>ResourceVerifiableCosts: </label><div class='col-sm-8'><input id='ResourceVerifiableCosts' class='form-control' type='text'{{#ResourceVerifiableCosts}} value='{{ResourceVerifiableCosts}}'{{/ResourceVerifiableCosts}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Pnode_collapse" aria-expanded="true" aria-controls="Pnode_collapse" style="margin-left: 10px;">Pnode</a></legend>
                    <div id="Pnode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#isPublic}}<div><b>isPublic</b>: {{isPublic}}</div>{{/isPublic}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#usage}}<div><b>usage</b>: {{usage}}</div>{{/usage}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SubControlArea}}&quot;);})'>{{SubControlArea}}</a></div>{{/SubControlArea}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Pnode_collapse" aria-expanded="true" aria-controls="Pnode_collapse" style="margin-left: 10px;">Pnode</a></legend>
                    <div id="Pnode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isPublic'>isPublic: </label><div class='col-sm-8'><input id='isPublic' class='form-check-input' type='checkbox'{{#isPublic}} checked{{/isPublic}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='usage'>usage: </label><div class='col-sm-8'><input id='usage' class='form-control' type='text'{{#usage}} value='{{usage}}'{{/usage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RTO'>RTO: </label><div class='col-sm-8'><input id='RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea}}'{{/SubControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "StartUpEnergyCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartUpEnergyCurve_collapse" aria-expanded="true" aria-controls="StartUpEnergyCurve_collapse" style="margin-left: 10px;">StartUpEnergyCurve</a></legend>
                    <div id="StartUpEnergyCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartUpEnergyCurve_collapse" aria-expanded="true" aria-controls="StartUpEnergyCurve_collapse" style="margin-left: 10px;">StartUpEnergyCurve</a></legend>
                    <div id="StartUpEnergyCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadReductionTimeCurve", "loadReductionTimeCurveType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadReductionTimeCurve_collapse" aria-expanded="true" aria-controls="LoadReductionTimeCurve_collapse" style="margin-left: 10px;">LoadReductionTimeCurve</a></legend>
                    <div id="LoadReductionTimeCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#loadReductionTimeCurveType}}<div><b>loadReductionTimeCurveType</b>: {{loadReductionTimeCurveType}}</div>{{/loadReductionTimeCurveType}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadReductionTimeCurve_collapse" aria-expanded="true" aria-controls="LoadReductionTimeCurve_collapse" style="margin-left: 10px;">LoadReductionTimeCurve</a></legend>
                    <div id="LoadReductionTimeCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadReductionTimeCurveType'>loadReductionTimeCurveType: </label><div class='col-sm-8'><input id='loadReductionTimeCurveType' class='form-control' type='text'{{#loadReductionTimeCurveType}} value='{{loadReductionTimeCurveType}}'{{/loadReductionTimeCurveType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Production.HeatRateCurve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MktHeatRateCurve", "ResourceVerifiableCosts", fields);
                base.export_attribute (obj, "MktHeatRateCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktHeatRateCurve_collapse" aria-expanded="true" aria-controls="MktHeatRateCurve_collapse" style="margin-left: 10px;">MktHeatRateCurve</a></legend>
                    <div id="MktHeatRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Production.HeatRateCurve.prototype.template.call (this) +
                    `
                    {{#ResourceVerifiableCosts}}<div><b>ResourceVerifiableCosts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ResourceVerifiableCosts}}&quot;);})'>{{ResourceVerifiableCosts}}</a></div>{{/ResourceVerifiableCosts}}
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktHeatRateCurve_collapse" aria-expanded="true" aria-controls="MktHeatRateCurve_collapse" style="margin-left: 10px;">MktHeatRateCurve</a></legend>
                    <div id="MktHeatRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Production.HeatRateCurve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ResourceVerifiableCosts'>ResourceVerifiableCosts: </label><div class='col-sm-8'><input id='ResourceVerifiableCosts' class='form-control' type='text'{{#ResourceVerifiableCosts}} value='{{ResourceVerifiableCosts}}'{{/ResourceVerifiableCosts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HostControlArea_collapse" aria-expanded="true" aria-controls="HostControlArea_collapse" style="margin-left: 10px;">HostControlArea</a></legend>
                    <div id="HostControlArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#areaControlMode}}<div><b>areaControlMode</b>: {{areaControlMode}}</div>{{/areaControlMode}}
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#freqSetPoint}}<div><b>freqSetPoint</b>: {{freqSetPoint}}</div>{{/freqSetPoint}}
                    {{#frequencyBiasFactor}}<div><b>frequencyBiasFactor</b>: {{frequencyBiasFactor}}</div>{{/frequencyBiasFactor}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#Controls}}<div><b>Controls</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Controls}}&quot;);})'>{{Controls}}</a></div>{{/Controls}}
                    {{#AdjacentCASet}}<div><b>AdjacentCASet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AdjacentCASet}}&quot;);})'>{{AdjacentCASet}}</a></div>{{/AdjacentCASet}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HostControlArea_collapse" aria-expanded="true" aria-controls="HostControlArea_collapse" style="margin-left: 10px;">HostControlArea</a></legend>
                    <div id="HostControlArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='areaControlMode'>areaControlMode: </label><div class='col-sm-8'><input id='areaControlMode' class='form-control' type='text'{{#areaControlMode}} value='{{areaControlMode}}'{{/areaControlMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='freqSetPoint'>freqSetPoint: </label><div class='col-sm-8'><input id='freqSetPoint' class='form-control' type='text'{{#freqSetPoint}} value='{{freqSetPoint}}'{{/freqSetPoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='frequencyBiasFactor'>frequencyBiasFactor: </label><div class='col-sm-8'><input id='frequencyBiasFactor' class='form-control' type='text'{{#frequencyBiasFactor}} value='{{frequencyBiasFactor}}'{{/frequencyBiasFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Controls'>Controls: </label><div class='col-sm-8'><input id='Controls' class='form-control' type='text'{{#Controls}} value='{{Controls}}'{{/Controls}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AdjacentCASet'>AdjacentCASet: </label><div class='col-sm-8'><input id='AdjacentCASet' class='form-control' type='text'{{#AdjacentCASet}} value='{{AdjacentCASet}}'{{/AdjacentCASet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RTO'>RTO: </label><div class='col-sm-8'><input id='RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RMRStartUpEnergyCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMRStartUpEnergyCurve_collapse" aria-expanded="true" aria-controls="RMRStartUpEnergyCurve_collapse" style="margin-left: 10px;">RMRStartUpEnergyCurve</a></legend>
                    <div id="RMRStartUpEnergyCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMRStartUpEnergyCurve_collapse" aria-expanded="true" aria-controls="RMRStartUpEnergyCurve_collapse" style="margin-left: 10px;">RMRStartUpEnergyCurve</a></legend>
                    <div id="RMRStartUpEnergyCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TACArea", "endEffectiveDate", base.from_datetime, fields);
                base.export_element (obj, "TACArea", "startEffectiveDate", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TACArea_collapse" aria-expanded="true" aria-controls="TACArea_collapse" style="margin-left: 10px;">TACArea</a></legend>
                    <div id="TACArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TACArea_collapse" aria-expanded="true" aria-controls="TACArea_collapse" style="margin-left: 10px;">TACArea</a></legend>
                    <div id="TACArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "LocalReliabilityArea", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LocalReliabilityArea_collapse" aria-expanded="true" aria-controls="LocalReliabilityArea_collapse" style="margin-left: 10px;">LocalReliabilityArea</a></legend>
                    <div id="LocalReliabilityArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LocalReliabilityArea_collapse" aria-expanded="true" aria-controls="LocalReliabilityArea_collapse" style="margin-left: 10px;">LocalReliabilityArea</a></legend>
                    <div id="LocalReliabilityArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RTO'>RTO: </label><div class='col-sm-8'><input id='RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RMRStartUpTimeCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMRStartUpTimeCurve_collapse" aria-expanded="true" aria-controls="RMRStartUpTimeCurve_collapse" style="margin-left: 10px;">RMRStartUpTimeCurve</a></legend>
                    <div id="RMRStartUpTimeCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMRStartUpTimeCurve_collapse" aria-expanded="true" aria-controls="RMRStartUpTimeCurve_collapse" style="margin-left: 10px;">RMRStartUpTimeCurve</a></legend>
                    <div id="RMRStartUpTimeCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "RegulatingLimit", "highLimit", base.from_string, fields);
                base.export_element (obj, "RegulatingLimit", "lowLimit", base.from_string, fields);
                base.export_attribute (obj, "RegulatingLimit", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegulatingLimit_collapse" aria-expanded="true" aria-controls="RegulatingLimit_collapse" style="margin-left: 10px;">RegulatingLimit</a></legend>
                    <div id="RegulatingLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#highLimit}}<div><b>highLimit</b>: {{highLimit}}</div>{{/highLimit}}
                    {{#lowLimit}}<div><b>lowLimit</b>: {{lowLimit}}</div>{{/lowLimit}}
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RegulatingLimit_collapse" aria-expanded="true" aria-controls="RegulatingLimit_collapse" style="margin-left: 10px;">RegulatingLimit</a></legend>
                    <div id="RegulatingLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='highLimit'>highLimit: </label><div class='col-sm-8'><input id='highLimit' class='form-control' type='text'{{#highLimit}} value='{{highLimit}}'{{/highLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowLimit'>lowLimit: </label><div class='col-sm-8'><input id='lowLimit' class='form-control' type='text'{{#lowLimit}} value='{{lowLimit}}'{{/lowLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ControlAreaDesignation", "attained", base.from_string, fields);
                base.export_element (obj, "ControlAreaDesignation", "native", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ControlAreaDesignation_collapse" aria-expanded="true" aria-controls="ControlAreaDesignation_collapse" style="margin-left: 10px;">ControlAreaDesignation</a></legend>
                    <div id="ControlAreaDesignation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#attained}}<div><b>attained</b>: {{attained}}</div>{{/attained}}
                    {{#native}}<div><b>native</b>: {{native}}</div>{{/native}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ControlAreaDesignation_collapse" aria-expanded="true" aria-controls="ControlAreaDesignation_collapse" style="margin-left: 10px;">ControlAreaDesignation</a></legend>
                    <div id="ControlAreaDesignation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='attained'>attained: </label><div class='col-sm-8'><input id='attained' class='form-control' type='text'{{#attained}} value='{{attained}}'{{/attained}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='native'>native: </label><div class='col-sm-8'><input id='native' class='form-control' type='text'{{#native}} value='{{native}}'{{/native}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MaxStartUpCostCurve_collapse" aria-expanded="true" aria-controls="MaxStartUpCostCurve_collapse" style="margin-left: 10px;">MaxStartUpCostCurve</a></legend>
                    <div id="MaxStartUpCostCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MaxStartUpCostCurve_collapse" aria-expanded="true" aria-controls="MaxStartUpCostCurve_collapse" style="margin-left: 10px;">MaxStartUpCostCurve</a></legend>
                    <div id="MaxStartUpCostCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CnodeDistributionFactor_collapse" aria-expanded="true" aria-controls="CnodeDistributionFactor_collapse" style="margin-left: 10px;">CnodeDistributionFactor</a></legend>
                    <div id="CnodeDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
                    {{#podLossFactor}}<div><b>podLossFactor</b>: {{podLossFactor}}</div>{{/podLossFactor}}
                    {{#AggregateNode}}<div><b>AggregateNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AggregateNode}}&quot;);})'>{{AggregateNode}}</a></div>{{/AggregateNode}}
                    {{#MktConnectivityNode}}<div><b>MktConnectivityNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktConnectivityNode}}&quot;);})'>{{MktConnectivityNode}}</a></div>{{/MktConnectivityNode}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HostControlArea}}&quot;);})'>{{HostControlArea}}</a></div>{{/HostControlArea}}
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SubControlArea}}&quot;);})'>{{SubControlArea}}</a></div>{{/SubControlArea}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CnodeDistributionFactor_collapse" aria-expanded="true" aria-controls="CnodeDistributionFactor_collapse" style="margin-left: 10px;">CnodeDistributionFactor</a></legend>
                    <div id="CnodeDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='factor'>factor: </label><div class='col-sm-8'><input id='factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='podLossFactor'>podLossFactor: </label><div class='col-sm-8'><input id='podLossFactor' class='form-control' type='text'{{#podLossFactor}} value='{{podLossFactor}}'{{/podLossFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AggregateNode'>AggregateNode: </label><div class='col-sm-8'><input id='AggregateNode' class='form-control' type='text'{{#AggregateNode}} value='{{AggregateNode}}'{{/AggregateNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea}}'{{/SubControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MPMTestCategory", "testIdentifier", base.from_string, fields);
                base.export_element (obj, "MPMTestCategory", "testMethod", base.from_string, fields);
                base.export_element (obj, "MPMTestCategory", "purposeFlag", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MPMTestCategory_collapse" aria-expanded="true" aria-controls="MPMTestCategory_collapse" style="margin-left: 10px;">MPMTestCategory</a></legend>
                    <div id="MPMTestCategory_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#testIdentifier}}<div><b>testIdentifier</b>: {{testIdentifier}}</div>{{/testIdentifier}}
                    {{#testMethod}}<div><b>testMethod</b>: {{testMethod}}</div>{{/testMethod}}
                    {{#purposeFlag}}<div><b>purposeFlag</b>: {{purposeFlag}}</div>{{/purposeFlag}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MPMTestCategory_collapse" aria-expanded="true" aria-controls="MPMTestCategory_collapse" style="margin-left: 10px;">MPMTestCategory</a></legend>
                    <div id="MPMTestCategory_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='testIdentifier'>testIdentifier: </label><div class='col-sm-8'><input id='testIdentifier' class='form-control' type='text'{{#testIdentifier}} value='{{testIdentifier}}'{{/testIdentifier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='testMethod'>testMethod: </label><div class='col-sm-8'><input id='testMethod' class='form-control' type='text'{{#testMethod}} value='{{testMethod}}'{{/testMethod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='purposeFlag'>purposeFlag: </label><div class='col-sm-8'><input id='purposeFlag' class='form-control' type='text'{{#purposeFlag}} value='{{purposeFlag}}'{{/purposeFlag}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "OilPrice", "oilPriceIndex", base.from_float, fields);
                base.export_attribute (obj, "OilPrice", "FuelRegion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OilPrice_collapse" aria-expanded="true" aria-controls="OilPrice_collapse" style="margin-left: 10px;">OilPrice</a></legend>
                    <div id="OilPrice_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#oilPriceIndex}}<div><b>oilPriceIndex</b>: {{oilPriceIndex}}</div>{{/oilPriceIndex}}
                    {{#FuelRegion}}<div><b>FuelRegion</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FuelRegion}}&quot;);})'>{{FuelRegion}}</a></div>{{/FuelRegion}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OilPrice_collapse" aria-expanded="true" aria-controls="OilPrice_collapse" style="margin-left: 10px;">OilPrice</a></legend>
                    <div id="OilPrice_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oilPriceIndex'>oilPriceIndex: </label><div class='col-sm-8'><input id='oilPriceIndex' class='form-control' type='text'{{#oilPriceIndex}} value='{{oilPriceIndex}}'{{/oilPriceIndex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='FuelRegion'>FuelRegion: </label><div class='col-sm-8'><input id='FuelRegion' class='form-control' type='text'{{#FuelRegion}} value='{{FuelRegion}}'{{/FuelRegion}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CombinedCycleConfigurationMember", "primary", base.from_boolean, fields);
                base.export_element (obj, "CombinedCycleConfigurationMember", "steam", base.from_boolean, fields);
                base.export_attribute (obj, "CombinedCycleConfigurationMember", "MktThermalGeneratingUnit", fields);
                base.export_attribute (obj, "CombinedCycleConfigurationMember", "CombinedCycleConfiguration", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CombinedCycleConfigurationMember_collapse" aria-expanded="true" aria-controls="CombinedCycleConfigurationMember_collapse" style="margin-left: 10px;">CombinedCycleConfigurationMember</a></legend>
                    <div id="CombinedCycleConfigurationMember_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#primary}}<div><b>primary</b>: {{primary}}</div>{{/primary}}
                    {{#steam}}<div><b>steam</b>: {{steam}}</div>{{/steam}}
                    {{#MktThermalGeneratingUnit}}<div><b>MktThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktThermalGeneratingUnit}}&quot;);})'>{{MktThermalGeneratingUnit}}</a></div>{{/MktThermalGeneratingUnit}}
                    {{#CombinedCycleConfiguration}}<div><b>CombinedCycleConfiguration</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CombinedCycleConfiguration}}&quot;);})'>{{CombinedCycleConfiguration}}</a></div>{{/CombinedCycleConfiguration}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CombinedCycleConfigurationMember_collapse" aria-expanded="true" aria-controls="CombinedCycleConfigurationMember_collapse" style="margin-left: 10px;">CombinedCycleConfigurationMember</a></legend>
                    <div id="CombinedCycleConfigurationMember_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='primary'>primary: </label><div class='col-sm-8'><input id='primary' class='form-check-input' type='checkbox'{{#primary}} checked{{/primary}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='steam'>steam: </label><div class='col-sm-8'><input id='steam' class='form-check-input' type='checkbox'{{#steam}} checked{{/steam}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktThermalGeneratingUnit'>MktThermalGeneratingUnit: </label><div class='col-sm-8'><input id='MktThermalGeneratingUnit' class='form-control' type='text'{{#MktThermalGeneratingUnit}} value='{{MktThermalGeneratingUnit}}'{{/MktThermalGeneratingUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CombinedCycleConfiguration'>CombinedCycleConfiguration: </label><div class='col-sm-8'><input id='CombinedCycleConfiguration' class='form-control' type='text'{{#CombinedCycleConfiguration}} value='{{CombinedCycleConfiguration}}'{{/CombinedCycleConfiguration}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidPriceCap_collapse" aria-expanded="true" aria-controls="BidPriceCap_collapse" style="margin-left: 10px;">BidPriceCap</a></legend>
                    <div id="BidPriceCap_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#marketType}}<div><b>marketType</b>: {{marketType}}</div>{{/marketType}}
                    {{#bidFloor}}<div><b>bidFloor</b>: {{bidFloor}}</div>{{/bidFloor}}
                    {{#bidCeiling}}<div><b>bidCeiling</b>: {{bidCeiling}}</div>{{/bidCeiling}}
                    {{#defaultPrice}}<div><b>defaultPrice</b>: {{defaultPrice}}</div>{{/defaultPrice}}
                    {{#bidFloorAS}}<div><b>bidFloorAS</b>: {{bidFloorAS}}</div>{{/bidFloorAS}}
                    {{#bidCeilingAS}}<div><b>bidCeilingAS</b>: {{bidCeilingAS}}</div>{{/bidCeilingAS}}
                    {{#MarketProduct}}<div><b>MarketProduct</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketProduct}}&quot;);})'>{{MarketProduct}}</a></div>{{/MarketProduct}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BidPriceCap_collapse" aria-expanded="true" aria-controls="BidPriceCap_collapse" style="margin-left: 10px;">BidPriceCap</a></legend>
                    <div id="BidPriceCap_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marketType'>marketType: </label><div class='col-sm-8'><input id='marketType' class='form-control' type='text'{{#marketType}} value='{{marketType}}'{{/marketType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bidFloor'>bidFloor: </label><div class='col-sm-8'><input id='bidFloor' class='form-control' type='text'{{#bidFloor}} value='{{bidFloor}}'{{/bidFloor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bidCeiling'>bidCeiling: </label><div class='col-sm-8'><input id='bidCeiling' class='form-control' type='text'{{#bidCeiling}} value='{{bidCeiling}}'{{/bidCeiling}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='defaultPrice'>defaultPrice: </label><div class='col-sm-8'><input id='defaultPrice' class='form-control' type='text'{{#defaultPrice}} value='{{defaultPrice}}'{{/defaultPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bidFloorAS'>bidFloorAS: </label><div class='col-sm-8'><input id='bidFloorAS' class='form-control' type='text'{{#bidFloorAS}} value='{{bidFloorAS}}'{{/bidFloorAS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bidCeilingAS'>bidCeilingAS: </label><div class='col-sm-8'><input id='bidCeilingAS' class='form-control' type='text'{{#bidCeilingAS}} value='{{bidCeilingAS}}'{{/bidCeilingAS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketProduct'>MarketProduct: </label><div class='col-sm-8'><input id='MarketProduct' class='form-control' type='text'{{#MarketProduct}} value='{{MarketProduct}}'{{/MarketProduct}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FlowgateRelief_collapse" aria-expanded="true" aria-controls="FlowgateRelief_collapse" style="margin-left: 10px;">FlowgateRelief</a></legend>
                    <div id="FlowgateRelief_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
                    {{#terminateDate}}<div><b>terminateDate</b>: {{terminateDate}}</div>{{/terminateDate}}
                    {{#idcTargetMktFlow}}<div><b>idcTargetMktFlow</b>: {{idcTargetMktFlow}}</div>{{/idcTargetMktFlow}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FlowgateRelief_collapse" aria-expanded="true" aria-controls="FlowgateRelief_collapse" style="margin-left: 10px;">FlowgateRelief</a></legend>
                    <div id="FlowgateRelief_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='terminateDate'>terminateDate: </label><div class='col-sm-8'><input id='terminateDate' class='form-control' type='text'{{#terminateDate}} value='{{terminateDate}}'{{/terminateDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='idcTargetMktFlow'>idcTargetMktFlow: </label><div class='col-sm-8'><input id='idcTargetMktFlow' class='form-control' type='text'{{#idcTargetMktFlow}} value='{{idcTargetMktFlow}}'{{/idcTargetMktFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ForbiddenRegion", "crossingCost", base.from_float, fields);
                base.export_element (obj, "ForbiddenRegion", "crossTime", base.from_string, fields);
                base.export_element (obj, "ForbiddenRegion", "highMW", base.from_float, fields);
                base.export_element (obj, "ForbiddenRegion", "lowMW", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ForbiddenRegion_collapse" aria-expanded="true" aria-controls="ForbiddenRegion_collapse" style="margin-left: 10px;">ForbiddenRegion</a></legend>
                    <div id="ForbiddenRegion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#crossingCost}}<div><b>crossingCost</b>: {{crossingCost}}</div>{{/crossingCost}}
                    {{#crossTime}}<div><b>crossTime</b>: {{crossTime}}</div>{{/crossTime}}
                    {{#highMW}}<div><b>highMW</b>: {{highMW}}</div>{{/highMW}}
                    {{#lowMW}}<div><b>lowMW</b>: {{lowMW}}</div>{{/lowMW}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ForbiddenRegion_collapse" aria-expanded="true" aria-controls="ForbiddenRegion_collapse" style="margin-left: 10px;">ForbiddenRegion</a></legend>
                    <div id="ForbiddenRegion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='crossingCost'>crossingCost: </label><div class='col-sm-8'><input id='crossingCost' class='form-control' type='text'{{#crossingCost}} value='{{crossingCost}}'{{/crossingCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='crossTime'>crossTime: </label><div class='col-sm-8'><input id='crossTime' class='form-control' type='text'{{#crossTime}} value='{{crossTime}}'{{/crossTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='highMW'>highMW: </label><div class='col-sm-8'><input id='highMW' class='form-control' type='text'{{#highMW}} value='{{highMW}}'{{/highMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowMW'>lowMW: </label><div class='col-sm-8'><input id='lowMW' class='form-control' type='text'{{#lowMW}} value='{{lowMW}}'{{/lowMW}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketQualificationRequirement", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "MarketQualificationRequirement", "expirationDate", base.from_datetime, fields);
                base.export_element (obj, "MarketQualificationRequirement", "qualificationID", base.from_string, fields);
                base.export_element (obj, "MarketQualificationRequirement", "status", base.from_string, fields);
                base.export_element (obj, "MarketQualificationRequirement", "statusType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketQualificationRequirement_collapse" aria-expanded="true" aria-controls="MarketQualificationRequirement_collapse" style="margin-left: 10px;">MarketQualificationRequirement</a></legend>
                    <div id="MarketQualificationRequirement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
                    {{#expirationDate}}<div><b>expirationDate</b>: {{expirationDate}}</div>{{/expirationDate}}
                    {{#qualificationID}}<div><b>qualificationID</b>: {{qualificationID}}</div>{{/qualificationID}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#statusType}}<div><b>statusType</b>: {{statusType}}</div>{{/statusType}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketQualificationRequirement_collapse" aria-expanded="true" aria-controls="MarketQualificationRequirement_collapse" style="margin-left: 10px;">MarketQualificationRequirement</a></legend>
                    <div id="MarketQualificationRequirement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='expirationDate'>expirationDate: </label><div class='col-sm-8'><input id='expirationDate' class='form-control' type='text'{{#expirationDate}} value='{{expirationDate}}'{{/expirationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qualificationID'>qualificationID: </label><div class='col-sm-8'><input id='qualificationID' class='form-control' type='text'{{#qualificationID}} value='{{qualificationID}}'{{/qualificationID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='statusType'>statusType: </label><div class='col-sm-8'><input id='statusType' class='form-control' type='text'{{#statusType}} value='{{statusType}}'{{/statusType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SubstitutionResourceList", "precedence", base.from_string, fields);
                base.export_attribute (obj, "SubstitutionResourceList", "TransmissionContractRight", fields);
                base.export_attribute (obj, "SubstitutionResourceList", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SubstitutionResourceList_collapse" aria-expanded="true" aria-controls="SubstitutionResourceList_collapse" style="margin-left: 10px;">SubstitutionResourceList</a></legend>
                    <div id="SubstitutionResourceList_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#precedence}}<div><b>precedence</b>: {{precedence}}</div>{{/precedence}}
                    {{#TransmissionContractRight}}<div><b>TransmissionContractRight</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionContractRight}}&quot;);})'>{{TransmissionContractRight}}</a></div>{{/TransmissionContractRight}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SubstitutionResourceList_collapse" aria-expanded="true" aria-controls="SubstitutionResourceList_collapse" style="margin-left: 10px;">SubstitutionResourceList</a></legend>
                    <div id="SubstitutionResourceList_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='precedence'>precedence: </label><div class='col-sm-8'><input id='precedence' class='form-control' type='text'{{#precedence}} value='{{precedence}}'{{/precedence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransmissionContractRight'>TransmissionContractRight: </label><div class='col-sm-8'><input id='TransmissionContractRight' class='form-control' type='text'{{#TransmissionContractRight}} value='{{TransmissionContractRight}}'{{/TransmissionContractRight}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ContractDistributionFactor_collapse" aria-expanded="true" aria-controls="ContractDistributionFactor_collapse" style="margin-left: 10px;">ContractDistributionFactor</a></legend>
                    <div id="ContractDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
                    {{#sourceFlag}}<div><b>sourceFlag</b>: {{sourceFlag}}</div>{{/sourceFlag}}
                    {{#sinkFlag}}<div><b>sinkFlag</b>: {{sinkFlag}}</div>{{/sinkFlag}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#TransmissionContractRight}}<div><b>TransmissionContractRight</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionContractRight}}&quot;);})'>{{TransmissionContractRight}}</a></div>{{/TransmissionContractRight}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ContractDistributionFactor_collapse" aria-expanded="true" aria-controls="ContractDistributionFactor_collapse" style="margin-left: 10px;">ContractDistributionFactor</a></legend>
                    <div id="ContractDistributionFactor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='factor'>factor: </label><div class='col-sm-8'><input id='factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sourceFlag'>sourceFlag: </label><div class='col-sm-8'><input id='sourceFlag' class='form-control' type='text'{{#sourceFlag}} value='{{sourceFlag}}'{{/sourceFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sinkFlag'>sinkFlag: </label><div class='col-sm-8'><input id='sinkFlag' class='form-control' type='text'{{#sinkFlag}} value='{{sinkFlag}}'{{/sinkFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransmissionContractRight'>TransmissionContractRight: </label><div class='col-sm-8'><input id='TransmissionContractRight' class='form-control' type='text'{{#TransmissionContractRight}} value='{{TransmissionContractRight}}'{{/TransmissionContractRight}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RMRStartUpFuelCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMRStartUpFuelCurve_collapse" aria-expanded="true" aria-controls="RMRStartUpFuelCurve_collapse" style="margin-left: 10px;">RMRStartUpFuelCurve</a></legend>
                    <div id="RMRStartUpFuelCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMRStartUpFuelCurve_collapse" aria-expanded="true" aria-controls="RMRStartUpFuelCurve_collapse" style="margin-left: 10px;">RMRStartUpFuelCurve</a></legend>
                    <div id="RMRStartUpFuelCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "FuelCostCurve", "RegisteredGenerator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FuelCostCurve_collapse" aria-expanded="true" aria-controls="FuelCostCurve_collapse" style="margin-left: 10px;">FuelCostCurve</a></legend>
                    <div id="FuelCostCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#RegisteredGenerator}}<div><b>RegisteredGenerator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredGenerator}}&quot;);})'>{{RegisteredGenerator}}</a></div>{{/RegisteredGenerator}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FuelCostCurve_collapse" aria-expanded="true" aria-controls="FuelCostCurve_collapse" style="margin-left: 10px;">FuelCostCurve</a></legend>
                    <div id="FuelCostCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredGenerator'>RegisteredGenerator: </label><div class='col-sm-8'><input id='RegisteredGenerator' class='form-control' type='text'{{#RegisteredGenerator}} value='{{RegisteredGenerator}}'{{/RegisteredGenerator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SubControlArea_collapse" aria-expanded="true" aria-controls="SubControlArea_collapse" style="margin-left: 10px;">SubControlArea</a></legend>
                    <div id="SubControlArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#areaShortName}}<div><b>areaShortName</b>: {{areaShortName}}</div>{{/areaShortName}}
                    {{#constantCoefficient}}<div><b>constantCoefficient</b>: {{constantCoefficient}}</div>{{/constantCoefficient}}
                    {{#embeddedControlArea}}<div><b>embeddedControlArea</b>: {{embeddedControlArea}}</div>{{/embeddedControlArea}}
                    {{#endEffectiveDate}}<div><b>endEffectiveDate</b>: {{endEffectiveDate}}</div>{{/endEffectiveDate}}
                    {{#internalCA}}<div><b>internalCA</b>: {{internalCA}}</div>{{/internalCA}}
                    {{#linearCoefficient}}<div><b>linearCoefficient</b>: {{linearCoefficient}}</div>{{/linearCoefficient}}
                    {{#localCA}}<div><b>localCA</b>: {{localCA}}</div>{{/localCA}}
                    {{#maxSelfSchedMW}}<div><b>maxSelfSchedMW</b>: {{maxSelfSchedMW}}</div>{{/maxSelfSchedMW}}
                    {{#minSelfSchedMW}}<div><b>minSelfSchedMW</b>: {{minSelfSchedMW}}</div>{{/minSelfSchedMW}}
                    {{#quadraticCoefficient}}<div><b>quadraticCoefficient</b>: {{quadraticCoefficient}}</div>{{/quadraticCoefficient}}
                    {{#startEffectiveDate}}<div><b>startEffectiveDate</b>: {{startEffectiveDate}}</div>{{/startEffectiveDate}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HostControlArea}}&quot;);})'>{{HostControlArea}}</a></div>{{/HostControlArea}}
                    {{#RTO}}<div><b>RTO</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RTO}}&quot;);})'>{{RTO}}</a></div>{{/RTO}}
                    {{#AdjacentCASet}}<div><b>AdjacentCASet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AdjacentCASet}}&quot;);})'>{{AdjacentCASet}}</a></div>{{/AdjacentCASet}}
                    {{#AreaReserveSpecification}}<div><b>AreaReserveSpecification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AreaReserveSpecification}}&quot;);})'>{{AreaReserveSpecification}}</a></div>{{/AreaReserveSpecification}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SubControlArea_collapse" aria-expanded="true" aria-controls="SubControlArea_collapse" style="margin-left: 10px;">SubControlArea</a></legend>
                    <div id="SubControlArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='areaShortName'>areaShortName: </label><div class='col-sm-8'><input id='areaShortName' class='form-control' type='text'{{#areaShortName}} value='{{areaShortName}}'{{/areaShortName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='constantCoefficient'>constantCoefficient: </label><div class='col-sm-8'><input id='constantCoefficient' class='form-control' type='text'{{#constantCoefficient}} value='{{constantCoefficient}}'{{/constantCoefficient}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='embeddedControlArea'>embeddedControlArea: </label><div class='col-sm-8'><input id='embeddedControlArea' class='form-control' type='text'{{#embeddedControlArea}} value='{{embeddedControlArea}}'{{/embeddedControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endEffectiveDate'>endEffectiveDate: </label><div class='col-sm-8'><input id='endEffectiveDate' class='form-control' type='text'{{#endEffectiveDate}} value='{{endEffectiveDate}}'{{/endEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='internalCA'>internalCA: </label><div class='col-sm-8'><input id='internalCA' class='form-control' type='text'{{#internalCA}} value='{{internalCA}}'{{/internalCA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='linearCoefficient'>linearCoefficient: </label><div class='col-sm-8'><input id='linearCoefficient' class='form-control' type='text'{{#linearCoefficient}} value='{{linearCoefficient}}'{{/linearCoefficient}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='localCA'>localCA: </label><div class='col-sm-8'><input id='localCA' class='form-control' type='text'{{#localCA}} value='{{localCA}}'{{/localCA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxSelfSchedMW'>maxSelfSchedMW: </label><div class='col-sm-8'><input id='maxSelfSchedMW' class='form-control' type='text'{{#maxSelfSchedMW}} value='{{maxSelfSchedMW}}'{{/maxSelfSchedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minSelfSchedMW'>minSelfSchedMW: </label><div class='col-sm-8'><input id='minSelfSchedMW' class='form-control' type='text'{{#minSelfSchedMW}} value='{{minSelfSchedMW}}'{{/minSelfSchedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quadraticCoefficient'>quadraticCoefficient: </label><div class='col-sm-8'><input id='quadraticCoefficient' class='form-control' type='text'{{#quadraticCoefficient}} value='{{quadraticCoefficient}}'{{/quadraticCoefficient}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startEffectiveDate'>startEffectiveDate: </label><div class='col-sm-8'><input id='startEffectiveDate' class='form-control' type='text'{{#startEffectiveDate}} value='{{startEffectiveDate}}'{{/startEffectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RTO'>RTO: </label><div class='col-sm-8'><input id='RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AdjacentCASet'>AdjacentCASet: </label><div class='col-sm-8'><input id='AdjacentCASet' class='form-control' type='text'{{#AdjacentCASet}} value='{{AdjacentCASet}}'{{/AdjacentCASet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AreaReserveSpecification'>AreaReserveSpecification: </label><div class='col-sm-8'><input id='AreaReserveSpecification' class='form-control' type='text'{{#AreaReserveSpecification}} value='{{AreaReserveSpecification}}'{{/AreaReserveSpecification}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktConductingEquipment_collapse" aria-expanded="true" aria-controls="MktConductingEquipment_collapse" style="margin-left: 10px;">MktConductingEquipment</a></legend>
                    <div id="MktConductingEquipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MktConductingEquipment_collapse" aria-expanded="true" aria-controls="MktConductingEquipment_collapse" style="margin-left: 10px;">MktConductingEquipment</a></legend>
                    <div id="MktConductingEquipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = RegisteredGenerator.prototype.export.call (this, obj, false);

                base.export_element (obj, "CombinedCycleConfiguration", "primaryConfiguration", base.from_boolean, fields);
                base.export_element (obj, "CombinedCycleConfiguration", "ShutdownFlag", base.from_boolean, fields);
                base.export_element (obj, "CombinedCycleConfiguration", "StartupFlag", base.from_boolean, fields);
                base.export_attribute (obj, "CombinedCycleConfiguration", "CombinedCycleLogicalConfiguration", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CombinedCycleConfiguration_collapse" aria-expanded="true" aria-controls="CombinedCycleConfiguration_collapse" style="margin-left: 10px;">CombinedCycleConfiguration</a></legend>
                    <div id="CombinedCycleConfiguration_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + RegisteredGenerator.prototype.template.call (this) +
                    `
                    {{#primaryConfiguration}}<div><b>primaryConfiguration</b>: {{primaryConfiguration}}</div>{{/primaryConfiguration}}
                    {{#ShutdownFlag}}<div><b>ShutdownFlag</b>: {{ShutdownFlag}}</div>{{/ShutdownFlag}}
                    {{#StartupFlag}}<div><b>StartupFlag</b>: {{StartupFlag}}</div>{{/StartupFlag}}
                    {{#CombinedCycleLogicalConfiguration}}<div><b>CombinedCycleLogicalConfiguration</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CombinedCycleLogicalConfiguration}}&quot;);})'>{{CombinedCycleLogicalConfiguration}}</a></div>{{/CombinedCycleLogicalConfiguration}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CombinedCycleConfiguration_collapse" aria-expanded="true" aria-controls="CombinedCycleConfiguration_collapse" style="margin-left: 10px;">CombinedCycleConfiguration</a></legend>
                    <div id="CombinedCycleConfiguration_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + RegisteredGenerator.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='primaryConfiguration'>primaryConfiguration: </label><div class='col-sm-8'><input id='primaryConfiguration' class='form-check-input' type='checkbox'{{#primaryConfiguration}} checked{{/primaryConfiguration}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='ShutdownFlag'>ShutdownFlag: </label><div class='col-sm-8'><input id='ShutdownFlag' class='form-check-input' type='checkbox'{{#ShutdownFlag}} checked{{/ShutdownFlag}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='StartupFlag'>StartupFlag: </label><div class='col-sm-8'><input id='StartupFlag' class='form-check-input' type='checkbox'{{#StartupFlag}} checked{{/StartupFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CombinedCycleLogicalConfiguration'>CombinedCycleLogicalConfiguration: </label><div class='col-sm-8'><input id='CombinedCycleLogicalConfiguration' class='form-control' type='text'{{#CombinedCycleLogicalConfiguration}} value='{{CombinedCycleLogicalConfiguration}}'{{/CombinedCycleLogicalConfiguration}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = AggregateNode.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadAggregationPoint_collapse" aria-expanded="true" aria-controls="LoadAggregationPoint_collapse" style="margin-left: 10px;">LoadAggregationPoint</a></legend>
                    <div id="LoadAggregationPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadAggregationPoint_collapse" aria-expanded="true" aria-controls="LoadAggregationPoint_collapse" style="margin-left: 10px;">LoadAggregationPoint</a></legend>
                    <div id="LoadAggregationPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = AggregateNode.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketRegion_collapse" aria-expanded="true" aria-controls="MarketRegion_collapse" style="margin-left: 10px;">MarketRegion</a></legend>
                    <div id="MarketRegion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketRegion_collapse" aria-expanded="true" aria-controls="MarketRegion_collapse" style="margin-left: 10px;">MarketRegion</a></legend>
                    <div id="MarketRegion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = AggregateNode.prototype.export.call (this, obj, false);

                base.export_element (obj, "MSSZone", "ignoreLosses", base.from_string, fields);
                base.export_element (obj, "MSSZone", "lossFactor", base.from_float, fields);
                base.export_element (obj, "MSSZone", "rucGrossSettlement", base.from_string, fields);
                base.export_attribute (obj, "MSSZone", "MeteredSubSystem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MSSZone_collapse" aria-expanded="true" aria-controls="MSSZone_collapse" style="margin-left: 10px;">MSSZone</a></legend>
                    <div id="MSSZone_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.template.call (this) +
                    `
                    {{#ignoreLosses}}<div><b>ignoreLosses</b>: {{ignoreLosses}}</div>{{/ignoreLosses}}
                    {{#lossFactor}}<div><b>lossFactor</b>: {{lossFactor}}</div>{{/lossFactor}}
                    {{#rucGrossSettlement}}<div><b>rucGrossSettlement</b>: {{rucGrossSettlement}}</div>{{/rucGrossSettlement}}
                    {{#MeteredSubSystem}}<div><b>MeteredSubSystem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MeteredSubSystem}}&quot;);})'>{{MeteredSubSystem}}</a></div>{{/MeteredSubSystem}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MSSZone_collapse" aria-expanded="true" aria-controls="MSSZone_collapse" style="margin-left: 10px;">MSSZone</a></legend>
                    <div id="MSSZone_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ignoreLosses'>ignoreLosses: </label><div class='col-sm-8'><input id='ignoreLosses' class='form-control' type='text'{{#ignoreLosses}} value='{{ignoreLosses}}'{{/ignoreLosses}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lossFactor'>lossFactor: </label><div class='col-sm-8'><input id='lossFactor' class='form-control' type='text'{{#lossFactor}} value='{{lossFactor}}'{{/lossFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rucGrossSettlement'>rucGrossSettlement: </label><div class='col-sm-8'><input id='rucGrossSettlement' class='form-control' type='text'{{#rucGrossSettlement}} value='{{rucGrossSettlement}}'{{/rucGrossSettlement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MeteredSubSystem'>MeteredSubSystem: </label><div class='col-sm-8'><input id='MeteredSubSystem' class='form-control' type='text'{{#MeteredSubSystem}} value='{{MeteredSubSystem}}'{{/MeteredSubSystem}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = AggregateNode.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RUCZone_collapse" aria-expanded="true" aria-controls="RUCZone_collapse" style="margin-left: 10px;">RUCZone</a></legend>
                    <div id="RUCZone_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RUCZone_collapse" aria-expanded="true" aria-controls="RUCZone_collapse" style="margin-left: 10px;">RUCZone</a></legend>
                    <div id="RUCZone_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AggregateNode.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Pnode.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "IndividualPnode", "MktConnectivityNode", fields);
                base.export_attribute (obj, "IndividualPnode", "GenDistributionFactor", fields);
                base.export_attribute (obj, "IndividualPnode", "LoadDistributionFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IndividualPnode_collapse" aria-expanded="true" aria-controls="IndividualPnode_collapse" style="margin-left: 10px;">IndividualPnode</a></legend>
                    <div id="IndividualPnode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Pnode.prototype.template.call (this) +
                    `
                    {{#MktConnectivityNode}}<div><b>MktConnectivityNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktConnectivityNode}}&quot;);})'>{{MktConnectivityNode}}</a></div>{{/MktConnectivityNode}}
                    {{#GenDistributionFactor}}<div><b>GenDistributionFactor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GenDistributionFactor}}&quot;);})'>{{GenDistributionFactor}}</a></div>{{/GenDistributionFactor}}
                    {{#LoadDistributionFactor}}<div><b>LoadDistributionFactor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadDistributionFactor}}&quot;);})'>{{LoadDistributionFactor}}</a></div>{{/LoadDistributionFactor}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IndividualPnode_collapse" aria-expanded="true" aria-controls="IndividualPnode_collapse" style="margin-left: 10px;">IndividualPnode</a></legend>
                    <div id="IndividualPnode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Pnode.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GenDistributionFactor'>GenDistributionFactor: </label><div class='col-sm-8'><input id='GenDistributionFactor' class='form-control' type='text'{{#GenDistributionFactor}} value='{{GenDistributionFactor}}'{{/GenDistributionFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LoadDistributionFactor'>LoadDistributionFactor: </label><div class='col-sm-8'><input id='LoadDistributionFactor' class='form-control' type='text'{{#LoadDistributionFactor}} value='{{LoadDistributionFactor}}'{{/LoadDistributionFactor}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = Pnode.prototype.export.call (this, obj, false);

                base.export_element (obj, "AggregatedPnode", "apnodeType", base.from_string, fields);
                base.export_element (obj, "AggregatedPnode", "participationCategory", base.from_string, fields);
                base.export_attribute (obj, "AggregatedPnode", "PnodeDistributionFactor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AggregatedPnode_collapse" aria-expanded="true" aria-controls="AggregatedPnode_collapse" style="margin-left: 10px;">AggregatedPnode</a></legend>
                    <div id="AggregatedPnode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Pnode.prototype.template.call (this) +
                    `
                    {{#apnodeType}}<div><b>apnodeType</b>: {{apnodeType}}</div>{{/apnodeType}}
                    {{#participationCategory}}<div><b>participationCategory</b>: {{participationCategory}}</div>{{/participationCategory}}
                    {{#PnodeDistributionFactor}}<div><b>PnodeDistributionFactor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PnodeDistributionFactor}}&quot;);})'>{{PnodeDistributionFactor}}</a></div>{{/PnodeDistributionFactor}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AggregatedPnode_collapse" aria-expanded="true" aria-controls="AggregatedPnode_collapse" style="margin-left: 10px;">AggregatedPnode</a></legend>
                    <div id="AggregatedPnode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Pnode.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='apnodeType'>apnodeType: </label><div class='col-sm-8'><input id='apnodeType' class='form-control' type='text'{{#apnodeType}} value='{{apnodeType}}'{{/apnodeType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='participationCategory'>participationCategory: </label><div class='col-sm-8'><input id='participationCategory' class='form-control' type='text'{{#participationCategory}} value='{{participationCategory}}'{{/participationCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PnodeDistributionFactor'>PnodeDistributionFactor: </label><div class='col-sm-8'><input id='PnodeDistributionFactor' class='form-control' type='text'{{#PnodeDistributionFactor}} value='{{PnodeDistributionFactor}}'{{/PnodeDistributionFactor}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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

            export (obj, full)
            {
                var fields = AggregatedPnode.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CongestionArea_collapse" aria-expanded="true" aria-controls="CongestionArea_collapse" style="margin-left: 10px;">CongestionArea</a></legend>
                    <div id="CongestionArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AggregatedPnode.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CongestionArea_collapse" aria-expanded="true" aria-controls="CongestionArea_collapse" style="margin-left: 10px;">CongestionArea</a></legend>
                    <div id="CongestionArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AggregatedPnode.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
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