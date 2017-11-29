define
(
    ["model/base", "model/AssetInfo", "model/Assets", "model/Common", "model/Core"],
    function (base, AssetInfo, Assets, Common, Core)
    {

        /**
         * Kind of transformer construction.
         *
         */
        class TransformerCoreKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransformerCoreKind;
                if (null == bucket)
                   cim_data.TransformerCoreKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransformerCoreKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerCoreKind";
                base.parse_element (/<cim:TransformerCoreKind.core>([\s\S]*?)<\/cim:TransformerCoreKind.core>/g, obj, "core", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerCoreKind.shell>([\s\S]*?)<\/cim:TransformerCoreKind.shell>/g, obj, "shell", base.to_string, sub, context);

                var bucket = context.parsed.TransformerCoreKind;
                if (null == bucket)
                   context.parsed.TransformerCoreKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TransformerCoreKind", "core", base.from_string, fields);
                base.export_element (obj, "TransformerCoreKind", "shell", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TransformerCoreKind_collapse" aria-expanded="true" aria-controls="TransformerCoreKind_collapse">TransformerCoreKind</a>
<div id="TransformerCoreKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#core}}<div><b>core</b>: {{core}}</div>{{/core}}
{{#shell}}<div><b>shell</b>: {{shell}}</div>{{/shell}}
</div>
`
                );
           }        }

        /**
         * Kind of control for shunt impedance.
         *
         */
        class ShuntImpedanceControlKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ShuntImpedanceControlKind;
                if (null == bucket)
                   cim_data.ShuntImpedanceControlKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ShuntImpedanceControlKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ShuntImpedanceControlKind";
                base.parse_element (/<cim:ShuntImpedanceControlKind.fixed>([\s\S]*?)<\/cim:ShuntImpedanceControlKind.fixed>/g, obj, "fixed", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntImpedanceControlKind.localOnly>([\s\S]*?)<\/cim:ShuntImpedanceControlKind.localOnly>/g, obj, "localOnly", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntImpedanceControlKind.remoteOnly>([\s\S]*?)<\/cim:ShuntImpedanceControlKind.remoteOnly>/g, obj, "remoteOnly", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntImpedanceControlKind.remoteWithLocalOverride>([\s\S]*?)<\/cim:ShuntImpedanceControlKind.remoteWithLocalOverride>/g, obj, "remoteWithLocalOverride", base.to_string, sub, context);

                var bucket = context.parsed.ShuntImpedanceControlKind;
                if (null == bucket)
                   context.parsed.ShuntImpedanceControlKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ShuntImpedanceControlKind", "fixed", base.from_string, fields);
                base.export_element (obj, "ShuntImpedanceControlKind", "localOnly", base.from_string, fields);
                base.export_element (obj, "ShuntImpedanceControlKind", "remoteOnly", base.from_string, fields);
                base.export_element (obj, "ShuntImpedanceControlKind", "remoteWithLocalOverride", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ShuntImpedanceControlKind_collapse" aria-expanded="true" aria-controls="ShuntImpedanceControlKind_collapse">ShuntImpedanceControlKind</a>
<div id="ShuntImpedanceControlKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#fixed}}<div><b>fixed</b>: {{fixed}}</div>{{/fixed}}
{{#localOnly}}<div><b>localOnly</b>: {{localOnly}}</div>{{/localOnly}}
{{#remoteOnly}}<div><b>remoteOnly</b>: {{remoteOnly}}</div>{{/remoteOnly}}
{{#remoteWithLocalOverride}}<div><b>remoteWithLocalOverride</b>: {{remoteWithLocalOverride}}</div>{{/remoteWithLocalOverride}}
</div>
`
                );
           }        }

        /**
         * Parameters of fault indicator asset.
         *
         */
        class FaultIndicatorInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FaultIndicatorInfo;
                if (null == bucket)
                   cim_data.FaultIndicatorInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FaultIndicatorInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "FaultIndicatorInfo";
                base.parse_element (/<cim:FaultIndicatorInfo.resetKind>([\s\S]*?)<\/cim:FaultIndicatorInfo.resetKind>/g, obj, "resetKind", base.to_string, sub, context);

                var bucket = context.parsed.FaultIndicatorInfo;
                if (null == bucket)
                   context.parsed.FaultIndicatorInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "FaultIndicatorInfo", "resetKind", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#FaultIndicatorInfo_collapse" aria-expanded="true" aria-controls="FaultIndicatorInfo_collapse">FaultIndicatorInfo</a>
<div id="FaultIndicatorInfo_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Assets.AssetInfo.prototype.template.call (this) +
`
{{#resetKind}}<div><b>resetKind</b>: {{resetKind}}</div>{{/resetKind}}
</div>
`
                );
           }        }

        /**
         * Provides pricing and other relevant information about a specific manufacturer's product (i.e., AssetModel), and its price from a given supplier.
         *
         * A single AssetModel may be availble from multiple suppliers. Note that manufacturer and supplier are both types of organisation, which the association is inherited from Document.
         *
         */
        class AssetModelCatalogueItem extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AssetModelCatalogueItem;
                if (null == bucket)
                   cim_data.AssetModelCatalogueItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AssetModelCatalogueItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "AssetModelCatalogueItem";
                base.parse_element (/<cim:AssetModelCatalogueItem.unitCost>([\s\S]*?)<\/cim:AssetModelCatalogueItem.unitCost>/g, obj, "unitCost", base.to_string, sub, context);
                base.parse_attribute (/<cim:AssetModelCatalogueItem.AssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModel", sub, context);
                base.parse_attribute (/<cim:AssetModelCatalogueItem.AssetModelCatalogue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModelCatalogue", sub, context);

                var bucket = context.parsed.AssetModelCatalogueItem;
                if (null == bucket)
                   context.parsed.AssetModelCatalogueItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "AssetModelCatalogueItem", "unitCost", base.from_string, fields);
                base.export_attribute (obj, "AssetModelCatalogueItem", "AssetModel", fields);
                base.export_attribute (obj, "AssetModelCatalogueItem", "AssetModelCatalogue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AssetModelCatalogueItem_collapse" aria-expanded="true" aria-controls="AssetModelCatalogueItem_collapse">AssetModelCatalogueItem</a>
<div id="AssetModelCatalogueItem_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Document.prototype.template.call (this) +
`
{{#unitCost}}<div><b>unitCost</b>: {{unitCost}}</div>{{/unitCost}}
{{#AssetModel}}<div><b>AssetModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetModel}}&quot;);})'>{{AssetModel}}</a></div>{{/AssetModel}}
{{#AssetModelCatalogue}}<div><b>AssetModelCatalogue</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetModelCatalogue}}&quot;);})'>{{AssetModelCatalogue}}</a></div>{{/AssetModelCatalogue}}
</div>
`
                );
           }        }

        /**
         * Properties of switch assets.
         *
         */
        class OldSwitchInfo extends AssetInfo.SwitchInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OldSwitchInfo;
                if (null == bucket)
                   cim_data.OldSwitchInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OldSwitchInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AssetInfo.SwitchInfo.prototype.parse.call (this, context, sub);
                obj.cls = "OldSwitchInfo";
                base.parse_element (/<cim:OldSwitchInfo.dielectricStrength>([\s\S]*?)<\/cim:OldSwitchInfo.dielectricStrength>/g, obj, "dielectricStrength", base.to_string, sub, context);
                base.parse_element (/<cim:OldSwitchInfo.loadBreak>([\s\S]*?)<\/cim:OldSwitchInfo.loadBreak>/g, obj, "loadBreak", base.to_boolean, sub, context);
                base.parse_element (/<cim:OldSwitchInfo.makingCapacity>([\s\S]*?)<\/cim:OldSwitchInfo.makingCapacity>/g, obj, "makingCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:OldSwitchInfo.minimumCurrent>([\s\S]*?)<\/cim:OldSwitchInfo.minimumCurrent>/g, obj, "minimumCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:OldSwitchInfo.poleCount>([\s\S]*?)<\/cim:OldSwitchInfo.poleCount>/g, obj, "poleCount", base.to_string, sub, context);
                base.parse_element (/<cim:OldSwitchInfo.remote>([\s\S]*?)<\/cim:OldSwitchInfo.remote>/g, obj, "remote", base.to_boolean, sub, context);
                base.parse_element (/<cim:OldSwitchInfo.withstandCurrent>([\s\S]*?)<\/cim:OldSwitchInfo.withstandCurrent>/g, obj, "withstandCurrent", base.to_string, sub, context);

                var bucket = context.parsed.OldSwitchInfo;
                if (null == bucket)
                   context.parsed.OldSwitchInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AssetInfo.SwitchInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "OldSwitchInfo", "dielectricStrength", base.from_string, fields);
                base.export_element (obj, "OldSwitchInfo", "loadBreak", base.from_boolean, fields);
                base.export_element (obj, "OldSwitchInfo", "makingCapacity", base.from_string, fields);
                base.export_element (obj, "OldSwitchInfo", "minimumCurrent", base.from_string, fields);
                base.export_element (obj, "OldSwitchInfo", "poleCount", base.from_string, fields);
                base.export_element (obj, "OldSwitchInfo", "remote", base.from_boolean, fields);
                base.export_element (obj, "OldSwitchInfo", "withstandCurrent", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OldSwitchInfo_collapse" aria-expanded="true" aria-controls="OldSwitchInfo_collapse">OldSwitchInfo</a>
<div id="OldSwitchInfo_collapse" class="collapse in" style="margin-left: 10px;">
`
      + AssetInfo.SwitchInfo.prototype.template.call (this) +
`
{{#dielectricStrength}}<div><b>dielectricStrength</b>: {{dielectricStrength}}</div>{{/dielectricStrength}}
{{#loadBreak}}<div><b>loadBreak</b>: {{loadBreak}}</div>{{/loadBreak}}
{{#makingCapacity}}<div><b>makingCapacity</b>: {{makingCapacity}}</div>{{/makingCapacity}}
{{#minimumCurrent}}<div><b>minimumCurrent</b>: {{minimumCurrent}}</div>{{/minimumCurrent}}
{{#poleCount}}<div><b>poleCount</b>: {{poleCount}}</div>{{/poleCount}}
{{#remote}}<div><b>remote</b>: {{remote}}</div>{{/remote}}
{{#withstandCurrent}}<div><b>withstandCurrent</b>: {{withstandCurrent}}</div>{{/withstandCurrent}}
</div>
`
                );
           }        }

        /**
         * Properties of current transformer asset.
         *
         */
        class CurrentTransformerInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CurrentTransformerInfo;
                if (null == bucket)
                   cim_data.CurrentTransformerInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CurrentTransformerInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "CurrentTransformerInfo";
                base.parse_element (/<cim:CurrentTransformerInfo.accuracyClass>([\s\S]*?)<\/cim:CurrentTransformerInfo.accuracyClass>/g, obj, "accuracyClass", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.accuracyLimit>([\s\S]*?)<\/cim:CurrentTransformerInfo.accuracyLimit>/g, obj, "accuracyLimit", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.coreCount>([\s\S]*?)<\/cim:CurrentTransformerInfo.coreCount>/g, obj, "coreCount", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.ctClass>([\s\S]*?)<\/cim:CurrentTransformerInfo.ctClass>/g, obj, "ctClass", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.kneePointCurrent>([\s\S]*?)<\/cim:CurrentTransformerInfo.kneePointCurrent>/g, obj, "kneePointCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.kneePointVoltage>([\s\S]*?)<\/cim:CurrentTransformerInfo.kneePointVoltage>/g, obj, "kneePointVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.maxRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.maxRatio>/g, obj, "maxRatio", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.nominalRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.nominalRatio>/g, obj, "nominalRatio", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.primaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.primaryFlsRating>/g, obj, "primaryFlsRating", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.primaryRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.primaryRatio>/g, obj, "primaryRatio", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.ratedCurrent>([\s\S]*?)<\/cim:CurrentTransformerInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.secondaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.secondaryFlsRating>/g, obj, "secondaryFlsRating", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.secondaryRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.secondaryRatio>/g, obj, "secondaryRatio", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.tertiaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.tertiaryFlsRating>/g, obj, "tertiaryFlsRating", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.tertiaryRatio>([\s\S]*?)<\/cim:CurrentTransformerInfo.tertiaryRatio>/g, obj, "tertiaryRatio", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.usage>([\s\S]*?)<\/cim:CurrentTransformerInfo.usage>/g, obj, "usage", base.to_string, sub, context);

                var bucket = context.parsed.CurrentTransformerInfo;
                if (null == bucket)
                   context.parsed.CurrentTransformerInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "CurrentTransformerInfo", "accuracyClass", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "accuracyLimit", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "coreCount", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "ctClass", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "kneePointCurrent", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "kneePointVoltage", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "maxRatio", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "nominalRatio", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "primaryFlsRating", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "primaryRatio", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "ratedCurrent", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "secondaryFlsRating", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "secondaryRatio", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "tertiaryFlsRating", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "tertiaryRatio", base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "usage", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CurrentTransformerInfo_collapse" aria-expanded="true" aria-controls="CurrentTransformerInfo_collapse">CurrentTransformerInfo</a>
<div id="CurrentTransformerInfo_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Assets.AssetInfo.prototype.template.call (this) +
`
{{#accuracyClass}}<div><b>accuracyClass</b>: {{accuracyClass}}</div>{{/accuracyClass}}
{{#accuracyLimit}}<div><b>accuracyLimit</b>: {{accuracyLimit}}</div>{{/accuracyLimit}}
{{#coreCount}}<div><b>coreCount</b>: {{coreCount}}</div>{{/coreCount}}
{{#ctClass}}<div><b>ctClass</b>: {{ctClass}}</div>{{/ctClass}}
{{#kneePointCurrent}}<div><b>kneePointCurrent</b>: {{kneePointCurrent}}</div>{{/kneePointCurrent}}
{{#kneePointVoltage}}<div><b>kneePointVoltage</b>: {{kneePointVoltage}}</div>{{/kneePointVoltage}}
{{#maxRatio}}<div><b>maxRatio</b>: {{maxRatio}}</div>{{/maxRatio}}
{{#nominalRatio}}<div><b>nominalRatio</b>: {{nominalRatio}}</div>{{/nominalRatio}}
{{#primaryFlsRating}}<div><b>primaryFlsRating</b>: {{primaryFlsRating}}</div>{{/primaryFlsRating}}
{{#primaryRatio}}<div><b>primaryRatio</b>: {{primaryRatio}}</div>{{/primaryRatio}}
{{#ratedCurrent}}<div><b>ratedCurrent</b>: {{ratedCurrent}}</div>{{/ratedCurrent}}
{{#secondaryFlsRating}}<div><b>secondaryFlsRating</b>: {{secondaryFlsRating}}</div>{{/secondaryFlsRating}}
{{#secondaryRatio}}<div><b>secondaryRatio</b>: {{secondaryRatio}}</div>{{/secondaryRatio}}
{{#tertiaryFlsRating}}<div><b>tertiaryFlsRating</b>: {{tertiaryFlsRating}}</div>{{/tertiaryFlsRating}}
{{#tertiaryRatio}}<div><b>tertiaryRatio</b>: {{tertiaryRatio}}</div>{{/tertiaryRatio}}
{{#usage}}<div><b>usage</b>: {{usage}}</div>{{/usage}}
</div>
`
                );
           }        }

        /**
         * Properties of surge arrester.
         *
         */
        class SurgeArresterInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SurgeArresterInfo;
                if (null == bucket)
                   cim_data.SurgeArresterInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SurgeArresterInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "SurgeArresterInfo";
                base.parse_element (/<cim:SurgeArresterInfo.continuousOperatingVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.continuousOperatingVoltage>/g, obj, "continuousOperatingVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:SurgeArresterInfo.isPolymer>([\s\S]*?)<\/cim:SurgeArresterInfo.isPolymer>/g, obj, "isPolymer", base.to_boolean, sub, context);
                base.parse_element (/<cim:SurgeArresterInfo.lightningImpulseDischargeVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.lightningImpulseDischargeVoltage>/g, obj, "lightningImpulseDischargeVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:SurgeArresterInfo.lineDischargeClass>([\s\S]*?)<\/cim:SurgeArresterInfo.lineDischargeClass>/g, obj, "lineDischargeClass", base.to_string, sub, context);
                base.parse_element (/<cim:SurgeArresterInfo.nominalDischargeCurrent>([\s\S]*?)<\/cim:SurgeArresterInfo.nominalDischargeCurrent>/g, obj, "nominalDischargeCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:SurgeArresterInfo.pressureReliefClass>([\s\S]*?)<\/cim:SurgeArresterInfo.pressureReliefClass>/g, obj, "pressureReliefClass", base.to_string, sub, context);
                base.parse_element (/<cim:SurgeArresterInfo.ratedVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:SurgeArresterInfo.steepFrontDischargeVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.steepFrontDischargeVoltage>/g, obj, "steepFrontDischargeVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:SurgeArresterInfo.switchingImpulseDischargeVoltage>([\s\S]*?)<\/cim:SurgeArresterInfo.switchingImpulseDischargeVoltage>/g, obj, "switchingImpulseDischargeVoltage", base.to_string, sub, context);

                var bucket = context.parsed.SurgeArresterInfo;
                if (null == bucket)
                   context.parsed.SurgeArresterInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "SurgeArresterInfo", "continuousOperatingVoltage", base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "isPolymer", base.from_boolean, fields);
                base.export_element (obj, "SurgeArresterInfo", "lightningImpulseDischargeVoltage", base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "lineDischargeClass", base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "nominalDischargeCurrent", base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "pressureReliefClass", base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "ratedVoltage", base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "steepFrontDischargeVoltage", base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "switchingImpulseDischargeVoltage", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SurgeArresterInfo_collapse" aria-expanded="true" aria-controls="SurgeArresterInfo_collapse">SurgeArresterInfo</a>
<div id="SurgeArresterInfo_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Assets.AssetInfo.prototype.template.call (this) +
`
{{#continuousOperatingVoltage}}<div><b>continuousOperatingVoltage</b>: {{continuousOperatingVoltage}}</div>{{/continuousOperatingVoltage}}
{{#isPolymer}}<div><b>isPolymer</b>: {{isPolymer}}</div>{{/isPolymer}}
{{#lightningImpulseDischargeVoltage}}<div><b>lightningImpulseDischargeVoltage</b>: {{lightningImpulseDischargeVoltage}}</div>{{/lightningImpulseDischargeVoltage}}
{{#lineDischargeClass}}<div><b>lineDischargeClass</b>: {{lineDischargeClass}}</div>{{/lineDischargeClass}}
{{#nominalDischargeCurrent}}<div><b>nominalDischargeCurrent</b>: {{nominalDischargeCurrent}}</div>{{/nominalDischargeCurrent}}
{{#pressureReliefClass}}<div><b>pressureReliefClass</b>: {{pressureReliefClass}}</div>{{/pressureReliefClass}}
{{#ratedVoltage}}<div><b>ratedVoltage</b>: {{ratedVoltage}}</div>{{/ratedVoltage}}
{{#steepFrontDischargeVoltage}}<div><b>steepFrontDischargeVoltage</b>: {{steepFrontDischargeVoltage}}</div>{{/steepFrontDischargeVoltage}}
{{#switchingImpulseDischargeVoltage}}<div><b>switchingImpulseDischargeVoltage</b>: {{switchingImpulseDischargeVoltage}}</div>{{/switchingImpulseDischargeVoltage}}
</div>
`
                );
           }        }

        /**
         * Kind of composite switch.
         *
         */
        class CompositeSwitchKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CompositeSwitchKind;
                if (null == bucket)
                   cim_data.CompositeSwitchKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CompositeSwitchKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CompositeSwitchKind";
                base.parse_element (/<cim:CompositeSwitchKind.throwOver>([\s\S]*?)<\/cim:CompositeSwitchKind.throwOver>/g, obj, "throwOver", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchKind.escoThrowOver>([\s\S]*?)<\/cim:CompositeSwitchKind.escoThrowOver>/g, obj, "escoThrowOver", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchKind.ral>([\s\S]*?)<\/cim:CompositeSwitchKind.ral>/g, obj, "ral", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchKind.gral>([\s\S]*?)<\/cim:CompositeSwitchKind.gral>/g, obj, "gral", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchKind.regulatorBypass>([\s\S]*?)<\/cim:CompositeSwitchKind.regulatorBypass>/g, obj, "regulatorBypass", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchKind.ugMultiSwitch>([\s\S]*?)<\/cim:CompositeSwitchKind.ugMultiSwitch>/g, obj, "ugMultiSwitch", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchKind.other>([\s\S]*?)<\/cim:CompositeSwitchKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.CompositeSwitchKind;
                if (null == bucket)
                   context.parsed.CompositeSwitchKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CompositeSwitchKind", "throwOver", base.from_string, fields);
                base.export_element (obj, "CompositeSwitchKind", "escoThrowOver", base.from_string, fields);
                base.export_element (obj, "CompositeSwitchKind", "ral", base.from_string, fields);
                base.export_element (obj, "CompositeSwitchKind", "gral", base.from_string, fields);
                base.export_element (obj, "CompositeSwitchKind", "regulatorBypass", base.from_string, fields);
                base.export_element (obj, "CompositeSwitchKind", "ugMultiSwitch", base.from_string, fields);
                base.export_element (obj, "CompositeSwitchKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CompositeSwitchKind_collapse" aria-expanded="true" aria-controls="CompositeSwitchKind_collapse">CompositeSwitchKind</a>
<div id="CompositeSwitchKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#throwOver}}<div><b>throwOver</b>: {{throwOver}}</div>{{/throwOver}}
{{#escoThrowOver}}<div><b>escoThrowOver</b>: {{escoThrowOver}}</div>{{/escoThrowOver}}
{{#ral}}<div><b>ral</b>: {{ral}}</div>{{/ral}}
{{#gral}}<div><b>gral</b>: {{gral}}</div>{{/gral}}
{{#regulatorBypass}}<div><b>regulatorBypass</b>: {{regulatorBypass}}</div>{{/regulatorBypass}}
{{#ugMultiSwitch}}<div><b>ugMultiSwitch</b>: {{ugMultiSwitch}}</div>{{/ugMultiSwitch}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

        /**
         * Catalogue of available types of products and materials that are used to build or install, maintain or operate an Asset.
         *
         * Each catalogue item is for a specific product (AssetModel) available from a specific supplier.
         *
         */
        class AssetModelCatalogue extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AssetModelCatalogue;
                if (null == bucket)
                   cim_data.AssetModelCatalogue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AssetModelCatalogue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AssetModelCatalogue";
                base.parse_element (/<cim:AssetModelCatalogue.status>([\s\S]*?)<\/cim:AssetModelCatalogue.status>/g, obj, "status", base.to_string, sub, context);

                var bucket = context.parsed.AssetModelCatalogue;
                if (null == bucket)
                   context.parsed.AssetModelCatalogue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "AssetModelCatalogue", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AssetModelCatalogue_collapse" aria-expanded="true" aria-controls="AssetModelCatalogue_collapse">AssetModelCatalogue</a>
<div id="AssetModelCatalogue_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
</div>
`
                );
           }        }

        /**
         * Properties of protection equipment asset.
         *
         */
        class ProtectionEquipmentInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ProtectionEquipmentInfo;
                if (null == bucket)
                   cim_data.ProtectionEquipmentInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProtectionEquipmentInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectionEquipmentInfo";
                base.parse_element (/<cim:ProtectionEquipmentInfo.groundTrip>([\s\S]*?)<\/cim:ProtectionEquipmentInfo.groundTrip>/g, obj, "groundTrip", base.to_string, sub, context);
                base.parse_element (/<cim:ProtectionEquipmentInfo.phaseTrip>([\s\S]*?)<\/cim:ProtectionEquipmentInfo.phaseTrip>/g, obj, "phaseTrip", base.to_string, sub, context);

                var bucket = context.parsed.ProtectionEquipmentInfo;
                if (null == bucket)
                   context.parsed.ProtectionEquipmentInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProtectionEquipmentInfo", "groundTrip", base.from_string, fields);
                base.export_element (obj, "ProtectionEquipmentInfo", "phaseTrip", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ProtectionEquipmentInfo_collapse" aria-expanded="true" aria-controls="ProtectionEquipmentInfo_collapse">ProtectionEquipmentInfo</a>
<div id="ProtectionEquipmentInfo_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Assets.AssetInfo.prototype.template.call (this) +
`
{{#groundTrip}}<div><b>groundTrip</b>: {{groundTrip}}</div>{{/groundTrip}}
{{#phaseTrip}}<div><b>phaseTrip</b>: {{phaseTrip}}</div>{{/phaseTrip}}
</div>
`
                );
           }        }

        /**
         * Kind of transformer construction.
         *
         */
        class TransformerConstructionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransformerConstructionKind;
                if (null == bucket)
                   cim_data.TransformerConstructionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransformerConstructionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerConstructionKind";
                base.parse_element (/<cim:TransformerConstructionKind.onePhase>([\s\S]*?)<\/cim:TransformerConstructionKind.onePhase>/g, obj, "onePhase", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.threePhase>([\s\S]*?)<\/cim:TransformerConstructionKind.threePhase>/g, obj, "threePhase", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.aerial>([\s\S]*?)<\/cim:TransformerConstructionKind.aerial>/g, obj, "aerial", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.overhead>([\s\S]*?)<\/cim:TransformerConstructionKind.overhead>/g, obj, "overhead", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.dryType>([\s\S]*?)<\/cim:TransformerConstructionKind.dryType>/g, obj, "dryType", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.network>([\s\S]*?)<\/cim:TransformerConstructionKind.network>/g, obj, "network", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.padmountDeadFront>([\s\S]*?)<\/cim:TransformerConstructionKind.padmountDeadFront>/g, obj, "padmountDeadFront", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.padmountFeedThrough>([\s\S]*?)<\/cim:TransformerConstructionKind.padmountFeedThrough>/g, obj, "padmountFeedThrough", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.padmountLiveFront>([\s\S]*?)<\/cim:TransformerConstructionKind.padmountLiveFront>/g, obj, "padmountLiveFront", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.padmountLoopThrough>([\s\S]*?)<\/cim:TransformerConstructionKind.padmountLoopThrough>/g, obj, "padmountLoopThrough", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.padmounted>([\s\S]*?)<\/cim:TransformerConstructionKind.padmounted>/g, obj, "padmounted", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.subway>([\s\S]*?)<\/cim:TransformerConstructionKind.subway>/g, obj, "subway", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.underground>([\s\S]*?)<\/cim:TransformerConstructionKind.underground>/g, obj, "underground", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.vault>([\s\S]*?)<\/cim:TransformerConstructionKind.vault>/g, obj, "vault", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.vaultThreePhase>([\s\S]*?)<\/cim:TransformerConstructionKind.vaultThreePhase>/g, obj, "vaultThreePhase", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerConstructionKind.unknown>([\s\S]*?)<\/cim:TransformerConstructionKind.unknown>/g, obj, "unknown", base.to_string, sub, context);

                var bucket = context.parsed.TransformerConstructionKind;
                if (null == bucket)
                   context.parsed.TransformerConstructionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TransformerConstructionKind", "onePhase", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "threePhase", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "aerial", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "overhead", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "dryType", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "network", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "padmountDeadFront", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "padmountFeedThrough", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "padmountLiveFront", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "padmountLoopThrough", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "padmounted", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "subway", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "underground", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "vault", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "vaultThreePhase", base.from_string, fields);
                base.export_element (obj, "TransformerConstructionKind", "unknown", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TransformerConstructionKind_collapse" aria-expanded="true" aria-controls="TransformerConstructionKind_collapse">TransformerConstructionKind</a>
<div id="TransformerConstructionKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#onePhase}}<div><b>onePhase</b>: {{onePhase}}</div>{{/onePhase}}
{{#threePhase}}<div><b>threePhase</b>: {{threePhase}}</div>{{/threePhase}}
{{#aerial}}<div><b>aerial</b>: {{aerial}}</div>{{/aerial}}
{{#overhead}}<div><b>overhead</b>: {{overhead}}</div>{{/overhead}}
{{#dryType}}<div><b>dryType</b>: {{dryType}}</div>{{/dryType}}
{{#network}}<div><b>network</b>: {{network}}</div>{{/network}}
{{#padmountDeadFront}}<div><b>padmountDeadFront</b>: {{padmountDeadFront}}</div>{{/padmountDeadFront}}
{{#padmountFeedThrough}}<div><b>padmountFeedThrough</b>: {{padmountFeedThrough}}</div>{{/padmountFeedThrough}}
{{#padmountLiveFront}}<div><b>padmountLiveFront</b>: {{padmountLiveFront}}</div>{{/padmountLiveFront}}
{{#padmountLoopThrough}}<div><b>padmountLoopThrough</b>: {{padmountLoopThrough}}</div>{{/padmountLoopThrough}}
{{#padmounted}}<div><b>padmounted</b>: {{padmounted}}</div>{{/padmounted}}
{{#subway}}<div><b>subway</b>: {{subway}}</div>{{/subway}}
{{#underground}}<div><b>underground</b>: {{underground}}</div>{{/underground}}
{{#vault}}<div><b>vault</b>: {{vault}}</div>{{/vault}}
{{#vaultThreePhase}}<div><b>vaultThreePhase</b>: {{vaultThreePhase}}</div>{{/vaultThreePhase}}
{{#unknown}}<div><b>unknown</b>: {{unknown}}</div>{{/unknown}}
</div>
`
                );
           }        }

        /**
         * Insulation kind for windings.
         *
         */
        class WindingInsulationKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindingInsulationKind;
                if (null == bucket)
                   cim_data.WindingInsulationKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindingInsulationKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WindingInsulationKind";
                base.parse_element (/<cim:WindingInsulationKind.paper>([\s\S]*?)<\/cim:WindingInsulationKind.paper>/g, obj, "paper", base.to_string, sub, context);
                base.parse_element (/<cim:WindingInsulationKind.thermallyUpgradedPaper>([\s\S]*?)<\/cim:WindingInsulationKind.thermallyUpgradedPaper>/g, obj, "thermallyUpgradedPaper", base.to_string, sub, context);
                base.parse_element (/<cim:WindingInsulationKind.nomex>([\s\S]*?)<\/cim:WindingInsulationKind.nomex>/g, obj, "nomex", base.to_string, sub, context);
                base.parse_element (/<cim:WindingInsulationKind.other>([\s\S]*?)<\/cim:WindingInsulationKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.WindingInsulationKind;
                if (null == bucket)
                   context.parsed.WindingInsulationKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "WindingInsulationKind", "paper", base.from_string, fields);
                base.export_element (obj, "WindingInsulationKind", "thermallyUpgradedPaper", base.from_string, fields);
                base.export_element (obj, "WindingInsulationKind", "nomex", base.from_string, fields);
                base.export_element (obj, "WindingInsulationKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#WindingInsulationKind_collapse" aria-expanded="true" aria-controls="WindingInsulationKind_collapse">WindingInsulationKind</a>
<div id="WindingInsulationKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#paper}}<div><b>paper</b>: {{paper}}</div>{{/paper}}
{{#thermallyUpgradedPaper}}<div><b>thermallyUpgradedPaper</b>: {{thermallyUpgradedPaper}}</div>{{/thermallyUpgradedPaper}}
{{#nomex}}<div><b>nomex</b>: {{nomex}}</div>{{/nomex}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

        class OldTransformerTankInfo extends AssetInfo.TransformerTankInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OldTransformerTankInfo;
                if (null == bucket)
                   cim_data.OldTransformerTankInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OldTransformerTankInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AssetInfo.TransformerTankInfo.prototype.parse.call (this, context, sub);
                obj.cls = "OldTransformerTankInfo";
                base.parse_element (/<cim:OldTransformerTankInfo.constructionKind>([\s\S]*?)<\/cim:OldTransformerTankInfo.constructionKind>/g, obj, "constructionKind", base.to_string, sub, context);
                base.parse_element (/<cim:OldTransformerTankInfo.coreCoilsWeight>([\s\S]*?)<\/cim:OldTransformerTankInfo.coreCoilsWeight>/g, obj, "coreCoilsWeight", base.to_string, sub, context);
                base.parse_element (/<cim:OldTransformerTankInfo.coreKind>([\s\S]*?)<\/cim:OldTransformerTankInfo.coreKind>/g, obj, "coreKind", base.to_string, sub, context);
                base.parse_element (/<cim:OldTransformerTankInfo.function>([\s\S]*?)<\/cim:OldTransformerTankInfo.function>/g, obj, "function", base.to_string, sub, context);
                base.parse_element (/<cim:OldTransformerTankInfo.neutralBIL>([\s\S]*?)<\/cim:OldTransformerTankInfo.neutralBIL>/g, obj, "neutralBIL", base.to_string, sub, context);
                base.parse_element (/<cim:OldTransformerTankInfo.oilPreservationKind>([\s\S]*?)<\/cim:OldTransformerTankInfo.oilPreservationKind>/g, obj, "oilPreservationKind", base.to_string, sub, context);

                var bucket = context.parsed.OldTransformerTankInfo;
                if (null == bucket)
                   context.parsed.OldTransformerTankInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AssetInfo.TransformerTankInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "OldTransformerTankInfo", "constructionKind", base.from_string, fields);
                base.export_element (obj, "OldTransformerTankInfo", "coreCoilsWeight", base.from_string, fields);
                base.export_element (obj, "OldTransformerTankInfo", "coreKind", base.from_string, fields);
                base.export_element (obj, "OldTransformerTankInfo", "function", base.from_string, fields);
                base.export_element (obj, "OldTransformerTankInfo", "neutralBIL", base.from_string, fields);
                base.export_element (obj, "OldTransformerTankInfo", "oilPreservationKind", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OldTransformerTankInfo_collapse" aria-expanded="true" aria-controls="OldTransformerTankInfo_collapse">OldTransformerTankInfo</a>
<div id="OldTransformerTankInfo_collapse" class="collapse in" style="margin-left: 10px;">
`
      + AssetInfo.TransformerTankInfo.prototype.template.call (this) +
`
{{#constructionKind}}<div><b>constructionKind</b>: {{constructionKind}}</div>{{/constructionKind}}
{{#coreCoilsWeight}}<div><b>coreCoilsWeight</b>: {{coreCoilsWeight}}</div>{{/coreCoilsWeight}}
{{#coreKind}}<div><b>coreKind</b>: {{coreKind}}</div>{{/coreKind}}
{{#function}}<div><b>function</b>: {{function}}</div>{{/function}}
{{#neutralBIL}}<div><b>neutralBIL</b>: {{neutralBIL}}</div>{{/neutralBIL}}
{{#oilPreservationKind}}<div><b>oilPreservationKind</b>: {{oilPreservationKind}}</div>{{/oilPreservationKind}}
</div>
`
                );
           }        }

        /**
         * Properties of a composite switch.
         *
         */
        class CompositeSwitchInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CompositeSwitchInfo;
                if (null == bucket)
                   cim_data.CompositeSwitchInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CompositeSwitchInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "CompositeSwitchInfo";
                base.parse_element (/<cim:CompositeSwitchInfo.ganged>([\s\S]*?)<\/cim:CompositeSwitchInfo.ganged>/g, obj, "ganged", base.to_boolean, sub, context);
                base.parse_element (/<cim:CompositeSwitchInfo.initOpMode>([\s\S]*?)<\/cim:CompositeSwitchInfo.initOpMode>/g, obj, "initOpMode", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchInfo.interruptingRating>([\s\S]*?)<\/cim:CompositeSwitchInfo.interruptingRating>/g, obj, "interruptingRating", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchInfo.kind>([\s\S]*?)<\/cim:CompositeSwitchInfo.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchInfo.phaseCode>([\s\S]*?)<\/cim:CompositeSwitchInfo.phaseCode>/g, obj, "phaseCode", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchInfo.phaseCount>([\s\S]*?)<\/cim:CompositeSwitchInfo.phaseCount>/g, obj, "phaseCount", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchInfo.ratedVoltage>([\s\S]*?)<\/cim:CompositeSwitchInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchInfo.remote>([\s\S]*?)<\/cim:CompositeSwitchInfo.remote>/g, obj, "remote", base.to_boolean, sub, context);
                base.parse_element (/<cim:CompositeSwitchInfo.switchStateCount>([\s\S]*?)<\/cim:CompositeSwitchInfo.switchStateCount>/g, obj, "switchStateCount", base.to_string, sub, context);

                var bucket = context.parsed.CompositeSwitchInfo;
                if (null == bucket)
                   context.parsed.CompositeSwitchInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "CompositeSwitchInfo", "ganged", base.from_boolean, fields);
                base.export_element (obj, "CompositeSwitchInfo", "initOpMode", base.from_string, fields);
                base.export_element (obj, "CompositeSwitchInfo", "interruptingRating", base.from_string, fields);
                base.export_element (obj, "CompositeSwitchInfo", "kind", base.from_string, fields);
                base.export_element (obj, "CompositeSwitchInfo", "phaseCode", base.from_string, fields);
                base.export_element (obj, "CompositeSwitchInfo", "phaseCount", base.from_string, fields);
                base.export_element (obj, "CompositeSwitchInfo", "ratedVoltage", base.from_string, fields);
                base.export_element (obj, "CompositeSwitchInfo", "remote", base.from_boolean, fields);
                base.export_element (obj, "CompositeSwitchInfo", "switchStateCount", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CompositeSwitchInfo_collapse" aria-expanded="true" aria-controls="CompositeSwitchInfo_collapse">CompositeSwitchInfo</a>
<div id="CompositeSwitchInfo_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Assets.AssetInfo.prototype.template.call (this) +
`
{{#ganged}}<div><b>ganged</b>: {{ganged}}</div>{{/ganged}}
{{#initOpMode}}<div><b>initOpMode</b>: {{initOpMode}}</div>{{/initOpMode}}
{{#interruptingRating}}<div><b>interruptingRating</b>: {{interruptingRating}}</div>{{/interruptingRating}}
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#phaseCode}}<div><b>phaseCode</b>: {{phaseCode}}</div>{{/phaseCode}}
{{#phaseCount}}<div><b>phaseCount</b>: {{phaseCount}}</div>{{/phaseCount}}
{{#ratedVoltage}}<div><b>ratedVoltage</b>: {{ratedVoltage}}</div>{{/ratedVoltage}}
{{#remote}}<div><b>remote</b>: {{remote}}</div>{{/remote}}
{{#switchStateCount}}<div><b>switchStateCount</b>: {{switchStateCount}}</div>{{/switchStateCount}}
</div>
`
                );
           }        }

        /**
         * Kind of local control for shunt impedance.
         *
         */
        class ShuntImpedanceLocalControlKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ShuntImpedanceLocalControlKind;
                if (null == bucket)
                   cim_data.ShuntImpedanceLocalControlKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ShuntImpedanceLocalControlKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ShuntImpedanceLocalControlKind";
                base.parse_element (/<cim:ShuntImpedanceLocalControlKind.none>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntImpedanceLocalControlKind.powerFactor>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.powerFactor>/g, obj, "powerFactor", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntImpedanceLocalControlKind.time>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.time>/g, obj, "time", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntImpedanceLocalControlKind.temperature>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.temperature>/g, obj, "temperature", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntImpedanceLocalControlKind.reactivePower>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntImpedanceLocalControlKind.current>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.current>/g, obj, "current", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntImpedanceLocalControlKind.voltage>([\s\S]*?)<\/cim:ShuntImpedanceLocalControlKind.voltage>/g, obj, "voltage", base.to_string, sub, context);

                var bucket = context.parsed.ShuntImpedanceLocalControlKind;
                if (null == bucket)
                   context.parsed.ShuntImpedanceLocalControlKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ShuntImpedanceLocalControlKind", "none", base.from_string, fields);
                base.export_element (obj, "ShuntImpedanceLocalControlKind", "powerFactor", base.from_string, fields);
                base.export_element (obj, "ShuntImpedanceLocalControlKind", "time", base.from_string, fields);
                base.export_element (obj, "ShuntImpedanceLocalControlKind", "temperature", base.from_string, fields);
                base.export_element (obj, "ShuntImpedanceLocalControlKind", "reactivePower", base.from_string, fields);
                base.export_element (obj, "ShuntImpedanceLocalControlKind", "current", base.from_string, fields);
                base.export_element (obj, "ShuntImpedanceLocalControlKind", "voltage", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ShuntImpedanceLocalControlKind_collapse" aria-expanded="true" aria-controls="ShuntImpedanceLocalControlKind_collapse">ShuntImpedanceLocalControlKind</a>
<div id="ShuntImpedanceLocalControlKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#none}}<div><b>none</b>: {{none}}</div>{{/none}}
{{#powerFactor}}<div><b>powerFactor</b>: {{powerFactor}}</div>{{/powerFactor}}
{{#time}}<div><b>time</b>: {{time}}</div>{{/time}}
{{#temperature}}<div><b>temperature</b>: {{temperature}}</div>{{/temperature}}
{{#reactivePower}}<div><b>reactivePower</b>: {{reactivePower}}</div>{{/reactivePower}}
{{#current}}<div><b>current</b>: {{current}}</div>{{/current}}
{{#voltage}}<div><b>voltage</b>: {{voltage}}</div>{{/voltage}}
</div>
`
                );
           }        }

        /**
         * Kind of resetting the fault indicators.
         *
         */
        class FaultIndicatorResetKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FaultIndicatorResetKind;
                if (null == bucket)
                   cim_data.FaultIndicatorResetKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FaultIndicatorResetKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FaultIndicatorResetKind";
                base.parse_element (/<cim:FaultIndicatorResetKind.automatic>([\s\S]*?)<\/cim:FaultIndicatorResetKind.automatic>/g, obj, "automatic", base.to_string, sub, context);
                base.parse_element (/<cim:FaultIndicatorResetKind.manual>([\s\S]*?)<\/cim:FaultIndicatorResetKind.manual>/g, obj, "manual", base.to_string, sub, context);
                base.parse_element (/<cim:FaultIndicatorResetKind.remote>([\s\S]*?)<\/cim:FaultIndicatorResetKind.remote>/g, obj, "remote", base.to_string, sub, context);
                base.parse_element (/<cim:FaultIndicatorResetKind.other>([\s\S]*?)<\/cim:FaultIndicatorResetKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.FaultIndicatorResetKind;
                if (null == bucket)
                   context.parsed.FaultIndicatorResetKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "FaultIndicatorResetKind", "automatic", base.from_string, fields);
                base.export_element (obj, "FaultIndicatorResetKind", "manual", base.from_string, fields);
                base.export_element (obj, "FaultIndicatorResetKind", "remote", base.from_string, fields);
                base.export_element (obj, "FaultIndicatorResetKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#FaultIndicatorResetKind_collapse" aria-expanded="true" aria-controls="FaultIndicatorResetKind_collapse">FaultIndicatorResetKind</a>
<div id="FaultIndicatorResetKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#automatic}}<div><b>automatic</b>: {{automatic}}</div>{{/automatic}}
{{#manual}}<div><b>manual</b>: {{manual}}</div>{{/manual}}
{{#remote}}<div><b>remote</b>: {{remote}}</div>{{/remote}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

        /**
         * Properties of potential transformer asset.
         *
         */
        class PotentialTransformerInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PotentialTransformerInfo;
                if (null == bucket)
                   cim_data.PotentialTransformerInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PotentialTransformerInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "PotentialTransformerInfo";
                base.parse_element (/<cim:PotentialTransformerInfo.accuracyClass>([\s\S]*?)<\/cim:PotentialTransformerInfo.accuracyClass>/g, obj, "accuracyClass", base.to_string, sub, context);
                base.parse_element (/<cim:PotentialTransformerInfo.nominalRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.nominalRatio>/g, obj, "nominalRatio", base.to_string, sub, context);
                base.parse_element (/<cim:PotentialTransformerInfo.primaryRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.primaryRatio>/g, obj, "primaryRatio", base.to_string, sub, context);
                base.parse_element (/<cim:PotentialTransformerInfo.ptClass>([\s\S]*?)<\/cim:PotentialTransformerInfo.ptClass>/g, obj, "ptClass", base.to_string, sub, context);
                base.parse_element (/<cim:PotentialTransformerInfo.ratedVoltage>([\s\S]*?)<\/cim:PotentialTransformerInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:PotentialTransformerInfo.secondaryRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.secondaryRatio>/g, obj, "secondaryRatio", base.to_string, sub, context);
                base.parse_element (/<cim:PotentialTransformerInfo.tertiaryRatio>([\s\S]*?)<\/cim:PotentialTransformerInfo.tertiaryRatio>/g, obj, "tertiaryRatio", base.to_string, sub, context);

                var bucket = context.parsed.PotentialTransformerInfo;
                if (null == bucket)
                   context.parsed.PotentialTransformerInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "PotentialTransformerInfo", "accuracyClass", base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "nominalRatio", base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "primaryRatio", base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "ptClass", base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "ratedVoltage", base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "secondaryRatio", base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "tertiaryRatio", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PotentialTransformerInfo_collapse" aria-expanded="true" aria-controls="PotentialTransformerInfo_collapse">PotentialTransformerInfo</a>
<div id="PotentialTransformerInfo_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Assets.AssetInfo.prototype.template.call (this) +
`
{{#accuracyClass}}<div><b>accuracyClass</b>: {{accuracyClass}}</div>{{/accuracyClass}}
{{#nominalRatio}}<div><b>nominalRatio</b>: {{nominalRatio}}</div>{{/nominalRatio}}
{{#primaryRatio}}<div><b>primaryRatio</b>: {{primaryRatio}}</div>{{/primaryRatio}}
{{#ptClass}}<div><b>ptClass</b>: {{ptClass}}</div>{{/ptClass}}
{{#ratedVoltage}}<div><b>ratedVoltage</b>: {{ratedVoltage}}</div>{{/ratedVoltage}}
{{#secondaryRatio}}<div><b>secondaryRatio</b>: {{secondaryRatio}}</div>{{/secondaryRatio}}
{{#tertiaryRatio}}<div><b>tertiaryRatio</b>: {{tertiaryRatio}}</div>{{/tertiaryRatio}}
</div>
`
                );
           }        }

        /**
         * Function of a transformer.
         *
         */
        class TransformerFunctionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransformerFunctionKind;
                if (null == bucket)
                   cim_data.TransformerFunctionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransformerFunctionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerFunctionKind";
                base.parse_element (/<cim:TransformerFunctionKind.powerTransformer>([\s\S]*?)<\/cim:TransformerFunctionKind.powerTransformer>/g, obj, "powerTransformer", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerFunctionKind.voltageRegulator>([\s\S]*?)<\/cim:TransformerFunctionKind.voltageRegulator>/g, obj, "voltageRegulator", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerFunctionKind.autotransformer>([\s\S]*?)<\/cim:TransformerFunctionKind.autotransformer>/g, obj, "autotransformer", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerFunctionKind.secondaryTransformer>([\s\S]*?)<\/cim:TransformerFunctionKind.secondaryTransformer>/g, obj, "secondaryTransformer", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerFunctionKind.other>([\s\S]*?)<\/cim:TransformerFunctionKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.TransformerFunctionKind;
                if (null == bucket)
                   context.parsed.TransformerFunctionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TransformerFunctionKind", "powerTransformer", base.from_string, fields);
                base.export_element (obj, "TransformerFunctionKind", "voltageRegulator", base.from_string, fields);
                base.export_element (obj, "TransformerFunctionKind", "autotransformer", base.from_string, fields);
                base.export_element (obj, "TransformerFunctionKind", "secondaryTransformer", base.from_string, fields);
                base.export_element (obj, "TransformerFunctionKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TransformerFunctionKind_collapse" aria-expanded="true" aria-controls="TransformerFunctionKind_collapse">TransformerFunctionKind</a>
<div id="TransformerFunctionKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#powerTransformer}}<div><b>powerTransformer</b>: {{powerTransformer}}</div>{{/powerTransformer}}
{{#voltageRegulator}}<div><b>voltageRegulator</b>: {{voltageRegulator}}</div>{{/voltageRegulator}}
{{#autotransformer}}<div><b>autotransformer</b>: {{autotransformer}}</div>{{/autotransformer}}
{{#secondaryTransformer}}<div><b>secondaryTransformer</b>: {{secondaryTransformer}}</div>{{/secondaryTransformer}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

        class OldTransformerEndInfo extends AssetInfo.TransformerEndInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OldTransformerEndInfo;
                if (null == bucket)
                   cim_data.OldTransformerEndInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OldTransformerEndInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AssetInfo.TransformerEndInfo.prototype.parse.call (this, context, sub);
                obj.cls = "OldTransformerEndInfo";
                base.parse_element (/<cim:OldTransformerEndInfo.dayOverLoadRating>([\s\S]*?)<\/cim:OldTransformerEndInfo.dayOverLoadRating>/g, obj, "dayOverLoadRating", base.to_string, sub, context);
                base.parse_element (/<cim:OldTransformerEndInfo.hourOverLoadRating>([\s\S]*?)<\/cim:OldTransformerEndInfo.hourOverLoadRating>/g, obj, "hourOverLoadRating", base.to_string, sub, context);
                base.parse_element (/<cim:OldTransformerEndInfo.solidInsulationWeight>([\s\S]*?)<\/cim:OldTransformerEndInfo.solidInsulationWeight>/g, obj, "solidInsulationWeight", base.to_string, sub, context);
                base.parse_element (/<cim:OldTransformerEndInfo.windingInsulationKind>([\s\S]*?)<\/cim:OldTransformerEndInfo.windingInsulationKind>/g, obj, "windingInsulationKind", base.to_string, sub, context);

                var bucket = context.parsed.OldTransformerEndInfo;
                if (null == bucket)
                   context.parsed.OldTransformerEndInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AssetInfo.TransformerEndInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "OldTransformerEndInfo", "dayOverLoadRating", base.from_string, fields);
                base.export_element (obj, "OldTransformerEndInfo", "hourOverLoadRating", base.from_string, fields);
                base.export_element (obj, "OldTransformerEndInfo", "solidInsulationWeight", base.from_string, fields);
                base.export_element (obj, "OldTransformerEndInfo", "windingInsulationKind", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OldTransformerEndInfo_collapse" aria-expanded="true" aria-controls="OldTransformerEndInfo_collapse">OldTransformerEndInfo</a>
<div id="OldTransformerEndInfo_collapse" class="collapse in" style="margin-left: 10px;">
`
      + AssetInfo.TransformerEndInfo.prototype.template.call (this) +
`
{{#dayOverLoadRating}}<div><b>dayOverLoadRating</b>: {{dayOverLoadRating}}</div>{{/dayOverLoadRating}}
{{#hourOverLoadRating}}<div><b>hourOverLoadRating</b>: {{hourOverLoadRating}}</div>{{/hourOverLoadRating}}
{{#solidInsulationWeight}}<div><b>solidInsulationWeight</b>: {{solidInsulationWeight}}</div>{{/solidInsulationWeight}}
{{#windingInsulationKind}}<div><b>windingInsulationKind</b>: {{windingInsulationKind}}</div>{{/windingInsulationKind}}
</div>
`
                );
           }        }

        /**
         * Kind of regulation branch for shunt impedance.
         *
         */
        class RegulationBranchKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RegulationBranchKind;
                if (null == bucket)
                   cim_data.RegulationBranchKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RegulationBranchKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RegulationBranchKind";
                base.parse_element (/<cim:RegulationBranchKind.line>([\s\S]*?)<\/cim:RegulationBranchKind.line>/g, obj, "line", base.to_string, sub, context);
                base.parse_element (/<cim:RegulationBranchKind.transformer>([\s\S]*?)<\/cim:RegulationBranchKind.transformer>/g, obj, "transformer", base.to_string, sub, context);
                base.parse_element (/<cim:RegulationBranchKind.switch>([\s\S]*?)<\/cim:RegulationBranchKind.switch>/g, obj, "switch", base.to_string, sub, context);
                base.parse_element (/<cim:RegulationBranchKind.breaker>([\s\S]*?)<\/cim:RegulationBranchKind.breaker>/g, obj, "breaker", base.to_string, sub, context);
                base.parse_element (/<cim:RegulationBranchKind.recloser>([\s\S]*?)<\/cim:RegulationBranchKind.recloser>/g, obj, "recloser", base.to_string, sub, context);
                base.parse_element (/<cim:RegulationBranchKind.fuse>([\s\S]*?)<\/cim:RegulationBranchKind.fuse>/g, obj, "fuse", base.to_string, sub, context);
                base.parse_element (/<cim:RegulationBranchKind.sectionner>([\s\S]*?)<\/cim:RegulationBranchKind.sectionner>/g, obj, "sectionner", base.to_string, sub, context);
                base.parse_element (/<cim:RegulationBranchKind.other>([\s\S]*?)<\/cim:RegulationBranchKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.RegulationBranchKind;
                if (null == bucket)
                   context.parsed.RegulationBranchKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RegulationBranchKind", "line", base.from_string, fields);
                base.export_element (obj, "RegulationBranchKind", "transformer", base.from_string, fields);
                base.export_element (obj, "RegulationBranchKind", "switch", base.from_string, fields);
                base.export_element (obj, "RegulationBranchKind", "breaker", base.from_string, fields);
                base.export_element (obj, "RegulationBranchKind", "recloser", base.from_string, fields);
                base.export_element (obj, "RegulationBranchKind", "fuse", base.from_string, fields);
                base.export_element (obj, "RegulationBranchKind", "sectionner", base.from_string, fields);
                base.export_element (obj, "RegulationBranchKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RegulationBranchKind_collapse" aria-expanded="true" aria-controls="RegulationBranchKind_collapse">RegulationBranchKind</a>
<div id="RegulationBranchKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#line}}<div><b>line</b>: {{line}}</div>{{/line}}
{{#transformer}}<div><b>transformer</b>: {{transformer}}</div>{{/transformer}}
{{#switch}}<div><b>switch</b>: {{switch}}</div>{{/switch}}
{{#breaker}}<div><b>breaker</b>: {{breaker}}</div>{{/breaker}}
{{#recloser}}<div><b>recloser</b>: {{recloser}}</div>{{/recloser}}
{{#fuse}}<div><b>fuse</b>: {{fuse}}</div>{{/fuse}}
{{#sectionner}}<div><b>sectionner</b>: {{sectionner}}</div>{{/sectionner}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

        /**
         * Kind of oil preservation.
         *
         */
        class OilPreservationKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OilPreservationKind;
                if (null == bucket)
                   cim_data.OilPreservationKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OilPreservationKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OilPreservationKind";
                base.parse_element (/<cim:OilPreservationKind.freeBreathing>([\s\S]*?)<\/cim:OilPreservationKind.freeBreathing>/g, obj, "freeBreathing", base.to_string, sub, context);
                base.parse_element (/<cim:OilPreservationKind.nitrogenBlanket>([\s\S]*?)<\/cim:OilPreservationKind.nitrogenBlanket>/g, obj, "nitrogenBlanket", base.to_string, sub, context);
                base.parse_element (/<cim:OilPreservationKind.conservator>([\s\S]*?)<\/cim:OilPreservationKind.conservator>/g, obj, "conservator", base.to_string, sub, context);
                base.parse_element (/<cim:OilPreservationKind.other>([\s\S]*?)<\/cim:OilPreservationKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.OilPreservationKind;
                if (null == bucket)
                   context.parsed.OilPreservationKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "OilPreservationKind", "freeBreathing", base.from_string, fields);
                base.export_element (obj, "OilPreservationKind", "nitrogenBlanket", base.from_string, fields);
                base.export_element (obj, "OilPreservationKind", "conservator", base.from_string, fields);
                base.export_element (obj, "OilPreservationKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OilPreservationKind_collapse" aria-expanded="true" aria-controls="OilPreservationKind_collapse">OilPreservationKind</a>
<div id="OilPreservationKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#freeBreathing}}<div><b>freeBreathing</b>: {{freeBreathing}}</div>{{/freeBreathing}}
{{#nitrogenBlanket}}<div><b>nitrogenBlanket</b>: {{nitrogenBlanket}}</div>{{/nitrogenBlanket}}
{{#conservator}}<div><b>conservator</b>: {{conservator}}</div>{{/conservator}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

        /**
         * Properties of recloser assets.
         *
         */
        class RecloserInfo extends OldSwitchInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RecloserInfo;
                if (null == bucket)
                   cim_data.RecloserInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RecloserInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OldSwitchInfo.prototype.parse.call (this, context, sub);
                obj.cls = "RecloserInfo";
                base.parse_element (/<cim:RecloserInfo.groundTripCapable>([\s\S]*?)<\/cim:RecloserInfo.groundTripCapable>/g, obj, "groundTripCapable", base.to_boolean, sub, context);
                base.parse_element (/<cim:RecloserInfo.groundTripNormalEnabled>([\s\S]*?)<\/cim:RecloserInfo.groundTripNormalEnabled>/g, obj, "groundTripNormalEnabled", base.to_boolean, sub, context);
                base.parse_element (/<cim:RecloserInfo.groundTripRating>([\s\S]*?)<\/cim:RecloserInfo.groundTripRating>/g, obj, "groundTripRating", base.to_string, sub, context);
                base.parse_element (/<cim:RecloserInfo.phaseTripRating>([\s\S]*?)<\/cim:RecloserInfo.phaseTripRating>/g, obj, "phaseTripRating", base.to_string, sub, context);
                base.parse_element (/<cim:RecloserInfo.recloseLockoutCount>([\s\S]*?)<\/cim:RecloserInfo.recloseLockoutCount>/g, obj, "recloseLockoutCount", base.to_string, sub, context);

                var bucket = context.parsed.RecloserInfo;
                if (null == bucket)
                   context.parsed.RecloserInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OldSwitchInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "RecloserInfo", "groundTripCapable", base.from_boolean, fields);
                base.export_element (obj, "RecloserInfo", "groundTripNormalEnabled", base.from_boolean, fields);
                base.export_element (obj, "RecloserInfo", "groundTripRating", base.from_string, fields);
                base.export_element (obj, "RecloserInfo", "phaseTripRating", base.from_string, fields);
                base.export_element (obj, "RecloserInfo", "recloseLockoutCount", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RecloserInfo_collapse" aria-expanded="true" aria-controls="RecloserInfo_collapse">RecloserInfo</a>
<div id="RecloserInfo_collapse" class="collapse in" style="margin-left: 10px;">
`
      + OldSwitchInfo.prototype.template.call (this) +
`
{{#groundTripCapable}}<div><b>groundTripCapable</b>: {{groundTripCapable}}</div>{{/groundTripCapable}}
{{#groundTripNormalEnabled}}<div><b>groundTripNormalEnabled</b>: {{groundTripNormalEnabled}}</div>{{/groundTripNormalEnabled}}
{{#groundTripRating}}<div><b>groundTripRating</b>: {{groundTripRating}}</div>{{/groundTripRating}}
{{#phaseTripRating}}<div><b>phaseTripRating</b>: {{phaseTripRating}}</div>{{/phaseTripRating}}
{{#recloseLockoutCount}}<div><b>recloseLockoutCount</b>: {{recloseLockoutCount}}</div>{{/recloseLockoutCount}}
</div>
`
                );
           }        }

        /**
         * Properties of breaker assets.
         *
         */
        class BreakerInfo extends OldSwitchInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BreakerInfo;
                if (null == bucket)
                   cim_data.BreakerInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BreakerInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OldSwitchInfo.prototype.parse.call (this, context, sub);
                obj.cls = "BreakerInfo";
                base.parse_element (/<cim:BreakerInfo.phaseTrip>([\s\S]*?)<\/cim:BreakerInfo.phaseTrip>/g, obj, "phaseTrip", base.to_string, sub, context);

                var bucket = context.parsed.BreakerInfo;
                if (null == bucket)
                   context.parsed.BreakerInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OldSwitchInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "BreakerInfo", "phaseTrip", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#BreakerInfo_collapse" aria-expanded="true" aria-controls="BreakerInfo_collapse">BreakerInfo</a>
<div id="BreakerInfo_collapse" class="collapse in" style="margin-left: 10px;">
`
      + OldSwitchInfo.prototype.template.call (this) +
`
{{#phaseTrip}}<div><b>phaseTrip</b>: {{phaseTrip}}</div>{{/phaseTrip}}
</div>
`
                );
           }        }

        return (
            {
                OldTransformerTankInfo: OldTransformerTankInfo,
                PotentialTransformerInfo: PotentialTransformerInfo,
                OldSwitchInfo: OldSwitchInfo,
                AssetModelCatalogue: AssetModelCatalogue,
                FaultIndicatorInfo: FaultIndicatorInfo,
                ProtectionEquipmentInfo: ProtectionEquipmentInfo,
                TransformerCoreKind: TransformerCoreKind,
                CompositeSwitchKind: CompositeSwitchKind,
                TransformerFunctionKind: TransformerFunctionKind,
                CurrentTransformerInfo: CurrentTransformerInfo,
                ShuntImpedanceControlKind: ShuntImpedanceControlKind,
                ShuntImpedanceLocalControlKind: ShuntImpedanceLocalControlKind,
                OldTransformerEndInfo: OldTransformerEndInfo,
                OilPreservationKind: OilPreservationKind,
                TransformerConstructionKind: TransformerConstructionKind,
                WindingInsulationKind: WindingInsulationKind,
                AssetModelCatalogueItem: AssetModelCatalogueItem,
                RegulationBranchKind: RegulationBranchKind,
                SurgeArresterInfo: SurgeArresterInfo,
                BreakerInfo: BreakerInfo,
                CompositeSwitchInfo: CompositeSwitchInfo,
                FaultIndicatorResetKind: FaultIndicatorResetKind,
                RecloserInfo: RecloserInfo
            }
        );
    }
);