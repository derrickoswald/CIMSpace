define
(
    ["model/base", "model/AssetInfo", "model/Assets", "model/Common", "model/Core"],
    function (base, AssetInfo, Assets, Common, Core)
    {

        /**
         * Kind of transformer construction.
         *
         */
        var TransformerCoreKind =
        {
            core: "core",
            shell: "shell"
        };
        Object.freeze (TransformerCoreKind);

        /**
         * Kind of control for shunt impedance.
         *
         */
        var ShuntImpedanceControlKind =
        {
            fixed: "fixed",
            localOnly: "localOnly",
            remoteOnly: "remoteOnly",
            remoteWithLocalOverride: "remoteWithLocalOverride"
        };
        Object.freeze (ShuntImpedanceControlKind);

        /**
         * Kind of composite switch.
         *
         */
        var CompositeSwitchKind =
        {
            throwOver: "throwOver",
            escoThrowOver: "escoThrowOver",
            ral: "ral",
            gral: "gral",
            regulatorBypass: "regulatorBypass",
            ugMultiSwitch: "ugMultiSwitch",
            other: "other"
        };
        Object.freeze (CompositeSwitchKind);

        /**
         * Kind of transformer construction.
         *
         */
        var TransformerConstructionKind =
        {
            onePhase: "onePhase",
            threePhase: "threePhase",
            aerial: "aerial",
            overhead: "overhead",
            dryType: "dryType",
            network: "network",
            padmountDeadFront: "padmountDeadFront",
            padmountFeedThrough: "padmountFeedThrough",
            padmountLiveFront: "padmountLiveFront",
            padmountLoopThrough: "padmountLoopThrough",
            padmounted: "padmounted",
            subway: "subway",
            underground: "underground",
            vault: "vault",
            vaultThreePhase: "vaultThreePhase",
            unknown: "unknown"
        };
        Object.freeze (TransformerConstructionKind);

        /**
         * Insulation kind for windings.
         *
         */
        var WindingInsulationKind =
        {
            paper: "paper",
            thermallyUpgradedPaper: "thermallyUpgradedPaper",
            nomex: "nomex",
            other: "other"
        };
        Object.freeze (WindingInsulationKind);

        /**
         * Kind of local control for shunt impedance.
         *
         */
        var ShuntImpedanceLocalControlKind =
        {
            none: "none",
            powerFactor: "powerFactor",
            time: "time",
            temperature: "temperature",
            reactivePower: "reactivePower",
            current: "current",
            voltage: "voltage"
        };
        Object.freeze (ShuntImpedanceLocalControlKind);

        /**
         * Kind of resetting the fault indicators.
         *
         */
        var FaultIndicatorResetKind =
        {
            automatic: "automatic",
            manual: "manual",
            remote: "remote",
            other: "other"
        };
        Object.freeze (FaultIndicatorResetKind);

        /**
         * Function of a transformer.
         *
         */
        var TransformerFunctionKind =
        {
            powerTransformer: "powerTransformer",
            voltageRegulator: "voltageRegulator",
            autotransformer: "autotransformer",
            secondaryTransformer: "secondaryTransformer",
            other: "other"
        };
        Object.freeze (TransformerFunctionKind);

        /**
         * Kind of regulation branch for shunt impedance.
         *
         */
        var RegulationBranchKind =
        {
            line: "line",
            transformer: "transformer",
            switch: "switch",
            breaker: "breaker",
            recloser: "recloser",
            fuse: "fuse",
            sectionner: "sectionner",
            other: "other"
        };
        Object.freeze (RegulationBranchKind);

        /**
         * Kind of oil preservation.
         *
         */
        var OilPreservationKind =
        {
            freeBreathing: "freeBreathing",
            nitrogenBlanket: "nitrogenBlanket",
            conservator: "conservator",
            other: "other"
        };
        Object.freeze (OilPreservationKind);

        /**
         * Parameters of fault indicator asset.
         *
         */
        class FaultIndicatorInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.FaultIndicatorInfo;
                if (null == bucket)
                   cim_data.FaultIndicatorInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FaultIndicatorInfo[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "FaultIndicatorInfo";
                base.parse_attribute (/<cim:FaultIndicatorInfo.resetKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "resetKind", sub, context);
                var bucket = context.parsed.FaultIndicatorInfo;
                if (null == bucket)
                   context.parsed.FaultIndicatorInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "FaultIndicatorInfo", "resetKind", "resetKind",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FaultIndicatorInfo_collapse" aria-expanded="true" aria-controls="FaultIndicatorInfo_collapse" style="margin-left: 10px;">FaultIndicatorInfo</a></legend>
                    <div id="FaultIndicatorInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#resetKind}}<div><b>resetKind</b>: {{resetKind}}</div>{{/resetKind}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.FaultIndicatorResetKind = []; if (!obj.resetKind) obj.FaultIndicatorResetKind.push ({ id: '', selected: true}); for (var property in FaultIndicatorResetKind) obj.FaultIndicatorResetKind.push ({ id: property, selected: obj.resetKind && obj.resetKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.FaultIndicatorResetKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FaultIndicatorInfo_collapse" aria-expanded="true" aria-controls="FaultIndicatorInfo_collapse" style="margin-left: 10px;">FaultIndicatorInfo</a></legend>
                    <div id="FaultIndicatorInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='resetKind'>resetKind: </label><div class='col-sm-8'><select id='resetKind' class='form-control'>{{#FaultIndicatorResetKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/FaultIndicatorResetKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "FaultIndicatorInfo" };
                super.submit (obj);
                temp = document.getElementById ("resetKind").value; if ("" != temp) { temp = FaultIndicatorResetKind[temp]; if ("undefined" != typeof (temp)) obj.resetKind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#FaultIndicatorResetKind." + temp; }

                return (obj);
            }
        }

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
                var bucket = cim_data.AssetModelCatalogueItem;
                if (null == bucket)
                   cim_data.AssetModelCatalogueItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetModelCatalogueItem[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "AssetModelCatalogueItem";
                base.parse_element (/<cim:AssetModelCatalogueItem.unitCost>([\s\S]*?)<\/cim:AssetModelCatalogueItem.unitCost>/g, obj, "unitCost", base.to_string, sub, context);
                base.parse_attribute (/<cim:AssetModelCatalogueItem.AssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModel", sub, context);
                base.parse_attributes (/<cim:AssetModelCatalogueItem.ErpPOLineItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPOLineItems", sub, context);
                base.parse_attributes (/<cim:AssetModelCatalogueItem.ErpQuoteLineItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpQuoteLineItems", sub, context);
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

                base.export_element (obj, "AssetModelCatalogueItem", "unitCost", "unitCost",  base.from_string, fields);
                base.export_attribute (obj, "AssetModelCatalogueItem", "AssetModel", "AssetModel", fields);
                base.export_attributes (obj, "AssetModelCatalogueItem", "ErpPOLineItems", "ErpPOLineItems", fields);
                base.export_attributes (obj, "AssetModelCatalogueItem", "ErpQuoteLineItems", "ErpQuoteLineItems", fields);
                base.export_attribute (obj, "AssetModelCatalogueItem", "AssetModelCatalogue", "AssetModelCatalogue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetModelCatalogueItem_collapse" aria-expanded="true" aria-controls="AssetModelCatalogueItem_collapse" style="margin-left: 10px;">AssetModelCatalogueItem</a></legend>
                    <div id="AssetModelCatalogueItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#unitCost}}<div><b>unitCost</b>: {{unitCost}}</div>{{/unitCost}}
                    {{#AssetModel}}<div><b>AssetModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetModel}}&quot;);})'>{{AssetModel}}</a></div>{{/AssetModel}}
                    {{#ErpPOLineItems}}<div><b>ErpPOLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpPOLineItems}}
                    {{#ErpQuoteLineItems}}<div><b>ErpQuoteLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpQuoteLineItems}}
                    {{#AssetModelCatalogue}}<div><b>AssetModelCatalogue</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetModelCatalogue}}&quot;);})'>{{AssetModelCatalogue}}</a></div>{{/AssetModelCatalogue}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ErpPOLineItems) obj.ErpPOLineItems_string = obj.ErpPOLineItems.join ();
                if (obj.ErpQuoteLineItems) obj.ErpQuoteLineItems_string = obj.ErpQuoteLineItems.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ErpPOLineItems_string;
                delete obj.ErpQuoteLineItems_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetModelCatalogueItem_collapse" aria-expanded="true" aria-controls="AssetModelCatalogueItem_collapse" style="margin-left: 10px;">AssetModelCatalogueItem</a></legend>
                    <div id="AssetModelCatalogueItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unitCost'>unitCost: </label><div class='col-sm-8'><input id='unitCost' class='form-control' type='text'{{#unitCost}} value='{{unitCost}}'{{/unitCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AssetModel'>AssetModel: </label><div class='col-sm-8'><input id='AssetModel' class='form-control' type='text'{{#AssetModel}} value='{{AssetModel}}'{{/AssetModel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AssetModelCatalogue'>AssetModelCatalogue: </label><div class='col-sm-8'><input id='AssetModelCatalogue' class='form-control' type='text'{{#AssetModelCatalogue}} value='{{AssetModelCatalogue}}'{{/AssetModelCatalogue}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "AssetModelCatalogueItem" };
                super.submit (obj);
                temp = document.getElementById ("unitCost").value; if ("" != temp) obj.unitCost = temp;
                temp = document.getElementById ("AssetModel").value; if ("" != temp) obj.AssetModel = temp;
                temp = document.getElementById ("AssetModelCatalogue").value; if ("" != temp) obj.AssetModelCatalogue = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AssetModel", "ProductAssetModel", "0..1", "0..*"],
                        ["ErpPOLineItems", "ErpPOLineItem", "0..*", "0..1"],
                        ["ErpQuoteLineItems", "ErpQuoteLineItem", "0..*", "0..1"],
                        ["AssetModelCatalogue", "AssetModelCatalogue", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Properties of switch assets.
         *
         */
        class OldSwitchInfo extends AssetInfo.SwitchInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OldSwitchInfo;
                if (null == bucket)
                   cim_data.OldSwitchInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OldSwitchInfo[obj.id];
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

                base.export_element (obj, "OldSwitchInfo", "dielectricStrength", "dielectricStrength",  base.from_string, fields);
                base.export_element (obj, "OldSwitchInfo", "loadBreak", "loadBreak",  base.from_boolean, fields);
                base.export_element (obj, "OldSwitchInfo", "makingCapacity", "makingCapacity",  base.from_string, fields);
                base.export_element (obj, "OldSwitchInfo", "minimumCurrent", "minimumCurrent",  base.from_string, fields);
                base.export_element (obj, "OldSwitchInfo", "poleCount", "poleCount",  base.from_string, fields);
                base.export_element (obj, "OldSwitchInfo", "remote", "remote",  base.from_boolean, fields);
                base.export_element (obj, "OldSwitchInfo", "withstandCurrent", "withstandCurrent",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OldSwitchInfo_collapse" aria-expanded="true" aria-controls="OldSwitchInfo_collapse" style="margin-left: 10px;">OldSwitchInfo</a></legend>
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OldSwitchInfo_collapse" aria-expanded="true" aria-controls="OldSwitchInfo_collapse" style="margin-left: 10px;">OldSwitchInfo</a></legend>
                    <div id="OldSwitchInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AssetInfo.SwitchInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dielectricStrength'>dielectricStrength: </label><div class='col-sm-8'><input id='dielectricStrength' class='form-control' type='text'{{#dielectricStrength}} value='{{dielectricStrength}}'{{/dielectricStrength}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='loadBreak'>loadBreak: </label><div class='col-sm-8'><input id='loadBreak' class='form-check-input' type='checkbox'{{#loadBreak}} checked{{/loadBreak}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='makingCapacity'>makingCapacity: </label><div class='col-sm-8'><input id='makingCapacity' class='form-control' type='text'{{#makingCapacity}} value='{{makingCapacity}}'{{/makingCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumCurrent'>minimumCurrent: </label><div class='col-sm-8'><input id='minimumCurrent' class='form-control' type='text'{{#minimumCurrent}} value='{{minimumCurrent}}'{{/minimumCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='poleCount'>poleCount: </label><div class='col-sm-8'><input id='poleCount' class='form-control' type='text'{{#poleCount}} value='{{poleCount}}'{{/poleCount}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='remote'>remote: </label><div class='col-sm-8'><input id='remote' class='form-check-input' type='checkbox'{{#remote}} checked{{/remote}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='withstandCurrent'>withstandCurrent: </label><div class='col-sm-8'><input id='withstandCurrent' class='form-control' type='text'{{#withstandCurrent}} value='{{withstandCurrent}}'{{/withstandCurrent}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "OldSwitchInfo" };
                super.submit (obj);
                temp = document.getElementById ("dielectricStrength").value; if ("" != temp) obj.dielectricStrength = temp;
                temp = document.getElementById ("loadBreak").checked; if (temp) obj.loadBreak = true;
                temp = document.getElementById ("makingCapacity").value; if ("" != temp) obj.makingCapacity = temp;
                temp = document.getElementById ("minimumCurrent").value; if ("" != temp) obj.minimumCurrent = temp;
                temp = document.getElementById ("poleCount").value; if ("" != temp) obj.poleCount = temp;
                temp = document.getElementById ("remote").checked; if (temp) obj.remote = true;
                temp = document.getElementById ("withstandCurrent").value; if ("" != temp) obj.withstandCurrent = temp;

                return (obj);
            }
        }

        /**
         * Properties of current transformer asset.
         *
         */
        class CurrentTransformerInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.CurrentTransformerInfo;
                if (null == bucket)
                   cim_data.CurrentTransformerInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CurrentTransformerInfo[obj.id];
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

                base.export_element (obj, "CurrentTransformerInfo", "accuracyClass", "accuracyClass",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "accuracyLimit", "accuracyLimit",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "coreCount", "coreCount",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "ctClass", "ctClass",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "kneePointCurrent", "kneePointCurrent",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "kneePointVoltage", "kneePointVoltage",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "maxRatio", "maxRatio",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "nominalRatio", "nominalRatio",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "primaryFlsRating", "primaryFlsRating",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "primaryRatio", "primaryRatio",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "ratedCurrent", "ratedCurrent",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "secondaryFlsRating", "secondaryFlsRating",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "secondaryRatio", "secondaryRatio",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "tertiaryFlsRating", "tertiaryFlsRating",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "tertiaryRatio", "tertiaryRatio",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "usage", "usage",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurrentTransformerInfo_collapse" aria-expanded="true" aria-controls="CurrentTransformerInfo_collapse" style="margin-left: 10px;">CurrentTransformerInfo</a></legend>
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurrentTransformerInfo_collapse" aria-expanded="true" aria-controls="CurrentTransformerInfo_collapse" style="margin-left: 10px;">CurrentTransformerInfo</a></legend>
                    <div id="CurrentTransformerInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='accuracyClass'>accuracyClass: </label><div class='col-sm-8'><input id='accuracyClass' class='form-control' type='text'{{#accuracyClass}} value='{{accuracyClass}}'{{/accuracyClass}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='accuracyLimit'>accuracyLimit: </label><div class='col-sm-8'><input id='accuracyLimit' class='form-control' type='text'{{#accuracyLimit}} value='{{accuracyLimit}}'{{/accuracyLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coreCount'>coreCount: </label><div class='col-sm-8'><input id='coreCount' class='form-control' type='text'{{#coreCount}} value='{{coreCount}}'{{/coreCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ctClass'>ctClass: </label><div class='col-sm-8'><input id='ctClass' class='form-control' type='text'{{#ctClass}} value='{{ctClass}}'{{/ctClass}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kneePointCurrent'>kneePointCurrent: </label><div class='col-sm-8'><input id='kneePointCurrent' class='form-control' type='text'{{#kneePointCurrent}} value='{{kneePointCurrent}}'{{/kneePointCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kneePointVoltage'>kneePointVoltage: </label><div class='col-sm-8'><input id='kneePointVoltage' class='form-control' type='text'{{#kneePointVoltage}} value='{{kneePointVoltage}}'{{/kneePointVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxRatio'>maxRatio: </label><div class='col-sm-8'><input id='maxRatio' class='form-control' type='text'{{#maxRatio}} value='{{maxRatio}}'{{/maxRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='nominalRatio'>nominalRatio: </label><div class='col-sm-8'><input id='nominalRatio' class='form-control' type='text'{{#nominalRatio}} value='{{nominalRatio}}'{{/nominalRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='primaryFlsRating'>primaryFlsRating: </label><div class='col-sm-8'><input id='primaryFlsRating' class='form-control' type='text'{{#primaryFlsRating}} value='{{primaryFlsRating}}'{{/primaryFlsRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='primaryRatio'>primaryRatio: </label><div class='col-sm-8'><input id='primaryRatio' class='form-control' type='text'{{#primaryRatio}} value='{{primaryRatio}}'{{/primaryRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='secondaryFlsRating'>secondaryFlsRating: </label><div class='col-sm-8'><input id='secondaryFlsRating' class='form-control' type='text'{{#secondaryFlsRating}} value='{{secondaryFlsRating}}'{{/secondaryFlsRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='secondaryRatio'>secondaryRatio: </label><div class='col-sm-8'><input id='secondaryRatio' class='form-control' type='text'{{#secondaryRatio}} value='{{secondaryRatio}}'{{/secondaryRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tertiaryFlsRating'>tertiaryFlsRating: </label><div class='col-sm-8'><input id='tertiaryFlsRating' class='form-control' type='text'{{#tertiaryFlsRating}} value='{{tertiaryFlsRating}}'{{/tertiaryFlsRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tertiaryRatio'>tertiaryRatio: </label><div class='col-sm-8'><input id='tertiaryRatio' class='form-control' type='text'{{#tertiaryRatio}} value='{{tertiaryRatio}}'{{/tertiaryRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='usage'>usage: </label><div class='col-sm-8'><input id='usage' class='form-control' type='text'{{#usage}} value='{{usage}}'{{/usage}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CurrentTransformerInfo" };
                super.submit (obj);
                temp = document.getElementById ("accuracyClass").value; if ("" != temp) obj.accuracyClass = temp;
                temp = document.getElementById ("accuracyLimit").value; if ("" != temp) obj.accuracyLimit = temp;
                temp = document.getElementById ("coreCount").value; if ("" != temp) obj.coreCount = temp;
                temp = document.getElementById ("ctClass").value; if ("" != temp) obj.ctClass = temp;
                temp = document.getElementById ("kneePointCurrent").value; if ("" != temp) obj.kneePointCurrent = temp;
                temp = document.getElementById ("kneePointVoltage").value; if ("" != temp) obj.kneePointVoltage = temp;
                temp = document.getElementById ("maxRatio").value; if ("" != temp) obj.maxRatio = temp;
                temp = document.getElementById ("nominalRatio").value; if ("" != temp) obj.nominalRatio = temp;
                temp = document.getElementById ("primaryFlsRating").value; if ("" != temp) obj.primaryFlsRating = temp;
                temp = document.getElementById ("primaryRatio").value; if ("" != temp) obj.primaryRatio = temp;
                temp = document.getElementById ("ratedCurrent").value; if ("" != temp) obj.ratedCurrent = temp;
                temp = document.getElementById ("secondaryFlsRating").value; if ("" != temp) obj.secondaryFlsRating = temp;
                temp = document.getElementById ("secondaryRatio").value; if ("" != temp) obj.secondaryRatio = temp;
                temp = document.getElementById ("tertiaryFlsRating").value; if ("" != temp) obj.tertiaryFlsRating = temp;
                temp = document.getElementById ("tertiaryRatio").value; if ("" != temp) obj.tertiaryRatio = temp;
                temp = document.getElementById ("usage").value; if ("" != temp) obj.usage = temp;

                return (obj);
            }
        }

        /**
         * Properties of surge arrester.
         *
         */
        class SurgeArresterInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SurgeArresterInfo;
                if (null == bucket)
                   cim_data.SurgeArresterInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SurgeArresterInfo[obj.id];
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

                base.export_element (obj, "SurgeArresterInfo", "continuousOperatingVoltage", "continuousOperatingVoltage",  base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "isPolymer", "isPolymer",  base.from_boolean, fields);
                base.export_element (obj, "SurgeArresterInfo", "lightningImpulseDischargeVoltage", "lightningImpulseDischargeVoltage",  base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "lineDischargeClass", "lineDischargeClass",  base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "nominalDischargeCurrent", "nominalDischargeCurrent",  base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "pressureReliefClass", "pressureReliefClass",  base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "ratedVoltage", "ratedVoltage",  base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "steepFrontDischargeVoltage", "steepFrontDischargeVoltage",  base.from_string, fields);
                base.export_element (obj, "SurgeArresterInfo", "switchingImpulseDischargeVoltage", "switchingImpulseDischargeVoltage",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SurgeArresterInfo_collapse" aria-expanded="true" aria-controls="SurgeArresterInfo_collapse" style="margin-left: 10px;">SurgeArresterInfo</a></legend>
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SurgeArresterInfo_collapse" aria-expanded="true" aria-controls="SurgeArresterInfo_collapse" style="margin-left: 10px;">SurgeArresterInfo</a></legend>
                    <div id="SurgeArresterInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='continuousOperatingVoltage'>continuousOperatingVoltage: </label><div class='col-sm-8'><input id='continuousOperatingVoltage' class='form-control' type='text'{{#continuousOperatingVoltage}} value='{{continuousOperatingVoltage}}'{{/continuousOperatingVoltage}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isPolymer'>isPolymer: </label><div class='col-sm-8'><input id='isPolymer' class='form-check-input' type='checkbox'{{#isPolymer}} checked{{/isPolymer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lightningImpulseDischargeVoltage'>lightningImpulseDischargeVoltage: </label><div class='col-sm-8'><input id='lightningImpulseDischargeVoltage' class='form-control' type='text'{{#lightningImpulseDischargeVoltage}} value='{{lightningImpulseDischargeVoltage}}'{{/lightningImpulseDischargeVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lineDischargeClass'>lineDischargeClass: </label><div class='col-sm-8'><input id='lineDischargeClass' class='form-control' type='text'{{#lineDischargeClass}} value='{{lineDischargeClass}}'{{/lineDischargeClass}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='nominalDischargeCurrent'>nominalDischargeCurrent: </label><div class='col-sm-8'><input id='nominalDischargeCurrent' class='form-control' type='text'{{#nominalDischargeCurrent}} value='{{nominalDischargeCurrent}}'{{/nominalDischargeCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pressureReliefClass'>pressureReliefClass: </label><div class='col-sm-8'><input id='pressureReliefClass' class='form-control' type='text'{{#pressureReliefClass}} value='{{pressureReliefClass}}'{{/pressureReliefClass}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='steepFrontDischargeVoltage'>steepFrontDischargeVoltage: </label><div class='col-sm-8'><input id='steepFrontDischargeVoltage' class='form-control' type='text'{{#steepFrontDischargeVoltage}} value='{{steepFrontDischargeVoltage}}'{{/steepFrontDischargeVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='switchingImpulseDischargeVoltage'>switchingImpulseDischargeVoltage: </label><div class='col-sm-8'><input id='switchingImpulseDischargeVoltage' class='form-control' type='text'{{#switchingImpulseDischargeVoltage}} value='{{switchingImpulseDischargeVoltage}}'{{/switchingImpulseDischargeVoltage}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "SurgeArresterInfo" };
                super.submit (obj);
                temp = document.getElementById ("continuousOperatingVoltage").value; if ("" != temp) obj.continuousOperatingVoltage = temp;
                temp = document.getElementById ("isPolymer").checked; if (temp) obj.isPolymer = true;
                temp = document.getElementById ("lightningImpulseDischargeVoltage").value; if ("" != temp) obj.lightningImpulseDischargeVoltage = temp;
                temp = document.getElementById ("lineDischargeClass").value; if ("" != temp) obj.lineDischargeClass = temp;
                temp = document.getElementById ("nominalDischargeCurrent").value; if ("" != temp) obj.nominalDischargeCurrent = temp;
                temp = document.getElementById ("pressureReliefClass").value; if ("" != temp) obj.pressureReliefClass = temp;
                temp = document.getElementById ("ratedVoltage").value; if ("" != temp) obj.ratedVoltage = temp;
                temp = document.getElementById ("steepFrontDischargeVoltage").value; if ("" != temp) obj.steepFrontDischargeVoltage = temp;
                temp = document.getElementById ("switchingImpulseDischargeVoltage").value; if ("" != temp) obj.switchingImpulseDischargeVoltage = temp;

                return (obj);
            }
        }

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
                var bucket = cim_data.AssetModelCatalogue;
                if (null == bucket)
                   cim_data.AssetModelCatalogue = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetModelCatalogue[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AssetModelCatalogue";
                base.parse_element (/<cim:AssetModelCatalogue.status>([\s\S]*?)<\/cim:AssetModelCatalogue.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:AssetModelCatalogue.AssetModelCatalogueItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModelCatalogueItems", sub, context);
                var bucket = context.parsed.AssetModelCatalogue;
                if (null == bucket)
                   context.parsed.AssetModelCatalogue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "AssetModelCatalogue", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "AssetModelCatalogue", "AssetModelCatalogueItems", "AssetModelCatalogueItems", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetModelCatalogue_collapse" aria-expanded="true" aria-controls="AssetModelCatalogue_collapse" style="margin-left: 10px;">AssetModelCatalogue</a></legend>
                    <div id="AssetModelCatalogue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#AssetModelCatalogueItems}}<div><b>AssetModelCatalogueItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AssetModelCatalogueItems}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.AssetModelCatalogueItems) obj.AssetModelCatalogueItems_string = obj.AssetModelCatalogueItems.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AssetModelCatalogueItems_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetModelCatalogue_collapse" aria-expanded="true" aria-controls="AssetModelCatalogue_collapse" style="margin-left: 10px;">AssetModelCatalogue</a></legend>
                    <div id="AssetModelCatalogue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "AssetModelCatalogue" };
                super.submit (obj);
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AssetModelCatalogueItems", "AssetModelCatalogueItem", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * Properties of protection equipment asset.
         *
         */
        class ProtectionEquipmentInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ProtectionEquipmentInfo;
                if (null == bucket)
                   cim_data.ProtectionEquipmentInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProtectionEquipmentInfo[obj.id];
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

                base.export_element (obj, "ProtectionEquipmentInfo", "groundTrip", "groundTrip",  base.from_string, fields);
                base.export_element (obj, "ProtectionEquipmentInfo", "phaseTrip", "phaseTrip",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectionEquipmentInfo_collapse" aria-expanded="true" aria-controls="ProtectionEquipmentInfo_collapse" style="margin-left: 10px;">ProtectionEquipmentInfo</a></legend>
                    <div id="ProtectionEquipmentInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#groundTrip}}<div><b>groundTrip</b>: {{groundTrip}}</div>{{/groundTrip}}
                    {{#phaseTrip}}<div><b>phaseTrip</b>: {{phaseTrip}}</div>{{/phaseTrip}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectionEquipmentInfo_collapse" aria-expanded="true" aria-controls="ProtectionEquipmentInfo_collapse" style="margin-left: 10px;">ProtectionEquipmentInfo</a></legend>
                    <div id="ProtectionEquipmentInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='groundTrip'>groundTrip: </label><div class='col-sm-8'><input id='groundTrip' class='form-control' type='text'{{#groundTrip}} value='{{groundTrip}}'{{/groundTrip}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phaseTrip'>phaseTrip: </label><div class='col-sm-8'><input id='phaseTrip' class='form-control' type='text'{{#phaseTrip}} value='{{phaseTrip}}'{{/phaseTrip}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ProtectionEquipmentInfo" };
                super.submit (obj);
                temp = document.getElementById ("groundTrip").value; if ("" != temp) obj.groundTrip = temp;
                temp = document.getElementById ("phaseTrip").value; if ("" != temp) obj.phaseTrip = temp;

                return (obj);
            }
        }

        class OldTransformerTankInfo extends AssetInfo.TransformerTankInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OldTransformerTankInfo;
                if (null == bucket)
                   cim_data.OldTransformerTankInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OldTransformerTankInfo[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AssetInfo.TransformerTankInfo.prototype.parse.call (this, context, sub);
                obj.cls = "OldTransformerTankInfo";
                base.parse_attribute (/<cim:OldTransformerTankInfo.constructionKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "constructionKind", sub, context);
                base.parse_element (/<cim:OldTransformerTankInfo.coreCoilsWeight>([\s\S]*?)<\/cim:OldTransformerTankInfo.coreCoilsWeight>/g, obj, "coreCoilsWeight", base.to_string, sub, context);
                base.parse_attribute (/<cim:OldTransformerTankInfo.coreKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "coreKind", sub, context);
                base.parse_attribute (/<cim:OldTransformerTankInfo.function\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "function", sub, context);
                base.parse_element (/<cim:OldTransformerTankInfo.neutralBIL>([\s\S]*?)<\/cim:OldTransformerTankInfo.neutralBIL>/g, obj, "neutralBIL", base.to_string, sub, context);
                base.parse_attribute (/<cim:OldTransformerTankInfo.oilPreservationKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "oilPreservationKind", sub, context);
                var bucket = context.parsed.OldTransformerTankInfo;
                if (null == bucket)
                   context.parsed.OldTransformerTankInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AssetInfo.TransformerTankInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "OldTransformerTankInfo", "constructionKind", "constructionKind",  base.from_string, fields);
                base.export_element (obj, "OldTransformerTankInfo", "coreCoilsWeight", "coreCoilsWeight",  base.from_string, fields);
                base.export_element (obj, "OldTransformerTankInfo", "coreKind", "coreKind",  base.from_string, fields);
                base.export_element (obj, "OldTransformerTankInfo", "function", "function",  base.from_string, fields);
                base.export_element (obj, "OldTransformerTankInfo", "neutralBIL", "neutralBIL",  base.from_string, fields);
                base.export_element (obj, "OldTransformerTankInfo", "oilPreservationKind", "oilPreservationKind",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OldTransformerTankInfo_collapse" aria-expanded="true" aria-controls="OldTransformerTankInfo_collapse" style="margin-left: 10px;">OldTransformerTankInfo</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TransformerConstructionKind = []; if (!obj.constructionKind) obj.TransformerConstructionKind.push ({ id: '', selected: true}); for (var property in TransformerConstructionKind) obj.TransformerConstructionKind.push ({ id: property, selected: obj.constructionKind && obj.constructionKind.endsWith ('.' + property)});
                obj.TransformerCoreKind = []; if (!obj.coreKind) obj.TransformerCoreKind.push ({ id: '', selected: true}); for (var property in TransformerCoreKind) obj.TransformerCoreKind.push ({ id: property, selected: obj.coreKind && obj.coreKind.endsWith ('.' + property)});
                obj.TransformerFunctionKind = []; if (!obj.function) obj.TransformerFunctionKind.push ({ id: '', selected: true}); for (var property in TransformerFunctionKind) obj.TransformerFunctionKind.push ({ id: property, selected: obj.function && obj.function.endsWith ('.' + property)});
                obj.OilPreservationKind = []; if (!obj.oilPreservationKind) obj.OilPreservationKind.push ({ id: '', selected: true}); for (var property in OilPreservationKind) obj.OilPreservationKind.push ({ id: property, selected: obj.oilPreservationKind && obj.oilPreservationKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TransformerConstructionKind;
                delete obj.TransformerCoreKind;
                delete obj.TransformerFunctionKind;
                delete obj.OilPreservationKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OldTransformerTankInfo_collapse" aria-expanded="true" aria-controls="OldTransformerTankInfo_collapse" style="margin-left: 10px;">OldTransformerTankInfo</a></legend>
                    <div id="OldTransformerTankInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AssetInfo.TransformerTankInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='constructionKind'>constructionKind: </label><div class='col-sm-8'><select id='constructionKind' class='form-control'>{{#TransformerConstructionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TransformerConstructionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coreCoilsWeight'>coreCoilsWeight: </label><div class='col-sm-8'><input id='coreCoilsWeight' class='form-control' type='text'{{#coreCoilsWeight}} value='{{coreCoilsWeight}}'{{/coreCoilsWeight}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coreKind'>coreKind: </label><div class='col-sm-8'><select id='coreKind' class='form-control'>{{#TransformerCoreKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TransformerCoreKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='function'>function: </label><div class='col-sm-8'><select id='function' class='form-control'>{{#TransformerFunctionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TransformerFunctionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='neutralBIL'>neutralBIL: </label><div class='col-sm-8'><input id='neutralBIL' class='form-control' type='text'{{#neutralBIL}} value='{{neutralBIL}}'{{/neutralBIL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oilPreservationKind'>oilPreservationKind: </label><div class='col-sm-8'><select id='oilPreservationKind' class='form-control'>{{#OilPreservationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/OilPreservationKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "OldTransformerTankInfo" };
                super.submit (obj);
                temp = document.getElementById ("constructionKind").value; if ("" != temp) { temp = TransformerConstructionKind[temp]; if ("undefined" != typeof (temp)) obj.constructionKind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#TransformerConstructionKind." + temp; }
                temp = document.getElementById ("coreCoilsWeight").value; if ("" != temp) obj.coreCoilsWeight = temp;
                temp = document.getElementById ("coreKind").value; if ("" != temp) { temp = TransformerCoreKind[temp]; if ("undefined" != typeof (temp)) obj.coreKind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#TransformerCoreKind." + temp; }
                temp = document.getElementById ("function").value; if ("" != temp) { temp = TransformerFunctionKind[temp]; if ("undefined" != typeof (temp)) obj.function = "#http://iec.ch/TC57/2013/CIM-schema-cim16#TransformerFunctionKind." + temp; }
                temp = document.getElementById ("neutralBIL").value; if ("" != temp) obj.neutralBIL = temp;
                temp = document.getElementById ("oilPreservationKind").value; if ("" != temp) { temp = OilPreservationKind[temp]; if ("undefined" != typeof (temp)) obj.oilPreservationKind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#OilPreservationKind." + temp; }

                return (obj);
            }
        }

        /**
         * Properties of a composite switch.
         *
         */
        class CompositeSwitchInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.CompositeSwitchInfo;
                if (null == bucket)
                   cim_data.CompositeSwitchInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CompositeSwitchInfo[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "CompositeSwitchInfo";
                base.parse_element (/<cim:CompositeSwitchInfo.ganged>([\s\S]*?)<\/cim:CompositeSwitchInfo.ganged>/g, obj, "ganged", base.to_boolean, sub, context);
                base.parse_element (/<cim:CompositeSwitchInfo.initOpMode>([\s\S]*?)<\/cim:CompositeSwitchInfo.initOpMode>/g, obj, "initOpMode", base.to_string, sub, context);
                base.parse_element (/<cim:CompositeSwitchInfo.interruptingRating>([\s\S]*?)<\/cim:CompositeSwitchInfo.interruptingRating>/g, obj, "interruptingRating", base.to_string, sub, context);
                base.parse_attribute (/<cim:CompositeSwitchInfo.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
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

                base.export_element (obj, "CompositeSwitchInfo", "ganged", "ganged",  base.from_boolean, fields);
                base.export_element (obj, "CompositeSwitchInfo", "initOpMode", "initOpMode",  base.from_string, fields);
                base.export_element (obj, "CompositeSwitchInfo", "interruptingRating", "interruptingRating",  base.from_string, fields);
                base.export_element (obj, "CompositeSwitchInfo", "kind", "kind",  base.from_string, fields);
                base.export_element (obj, "CompositeSwitchInfo", "phaseCode", "phaseCode",  base.from_string, fields);
                base.export_element (obj, "CompositeSwitchInfo", "phaseCount", "phaseCount",  base.from_string, fields);
                base.export_element (obj, "CompositeSwitchInfo", "ratedVoltage", "ratedVoltage",  base.from_string, fields);
                base.export_element (obj, "CompositeSwitchInfo", "remote", "remote",  base.from_boolean, fields);
                base.export_element (obj, "CompositeSwitchInfo", "switchStateCount", "switchStateCount",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CompositeSwitchInfo_collapse" aria-expanded="true" aria-controls="CompositeSwitchInfo_collapse" style="margin-left: 10px;">CompositeSwitchInfo</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.CompositeSwitchKind = []; if (!obj.kind) obj.CompositeSwitchKind.push ({ id: '', selected: true}); for (var property in CompositeSwitchKind) obj.CompositeSwitchKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CompositeSwitchKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CompositeSwitchInfo_collapse" aria-expanded="true" aria-controls="CompositeSwitchInfo_collapse" style="margin-left: 10px;">CompositeSwitchInfo</a></legend>
                    <div id="CompositeSwitchInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='ganged'>ganged: </label><div class='col-sm-8'><input id='ganged' class='form-check-input' type='checkbox'{{#ganged}} checked{{/ganged}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='initOpMode'>initOpMode: </label><div class='col-sm-8'><input id='initOpMode' class='form-control' type='text'{{#initOpMode}} value='{{initOpMode}}'{{/initOpMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='interruptingRating'>interruptingRating: </label><div class='col-sm-8'><input id='interruptingRating' class='form-control' type='text'{{#interruptingRating}} value='{{interruptingRating}}'{{/interruptingRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#CompositeSwitchKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/CompositeSwitchKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phaseCode'>phaseCode: </label><div class='col-sm-8'><input id='phaseCode' class='form-control' type='text'{{#phaseCode}} value='{{phaseCode}}'{{/phaseCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phaseCount'>phaseCount: </label><div class='col-sm-8'><input id='phaseCount' class='form-control' type='text'{{#phaseCount}} value='{{phaseCount}}'{{/phaseCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='remote'>remote: </label><div class='col-sm-8'><input id='remote' class='form-check-input' type='checkbox'{{#remote}} checked{{/remote}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='switchStateCount'>switchStateCount: </label><div class='col-sm-8'><input id='switchStateCount' class='form-control' type='text'{{#switchStateCount}} value='{{switchStateCount}}'{{/switchStateCount}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CompositeSwitchInfo" };
                super.submit (obj);
                temp = document.getElementById ("ganged").checked; if (temp) obj.ganged = true;
                temp = document.getElementById ("initOpMode").value; if ("" != temp) obj.initOpMode = temp;
                temp = document.getElementById ("interruptingRating").value; if ("" != temp) obj.interruptingRating = temp;
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = CompositeSwitchKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#CompositeSwitchKind." + temp; }
                temp = document.getElementById ("phaseCode").value; if ("" != temp) obj.phaseCode = temp;
                temp = document.getElementById ("phaseCount").value; if ("" != temp) obj.phaseCount = temp;
                temp = document.getElementById ("ratedVoltage").value; if ("" != temp) obj.ratedVoltage = temp;
                temp = document.getElementById ("remote").checked; if (temp) obj.remote = true;
                temp = document.getElementById ("switchStateCount").value; if ("" != temp) obj.switchStateCount = temp;

                return (obj);
            }
        }

        /**
         * Properties of potential transformer asset.
         *
         */
        class PotentialTransformerInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PotentialTransformerInfo;
                if (null == bucket)
                   cim_data.PotentialTransformerInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PotentialTransformerInfo[obj.id];
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

                base.export_element (obj, "PotentialTransformerInfo", "accuracyClass", "accuracyClass",  base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "nominalRatio", "nominalRatio",  base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "primaryRatio", "primaryRatio",  base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "ptClass", "ptClass",  base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "ratedVoltage", "ratedVoltage",  base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "secondaryRatio", "secondaryRatio",  base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "tertiaryRatio", "tertiaryRatio",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PotentialTransformerInfo_collapse" aria-expanded="true" aria-controls="PotentialTransformerInfo_collapse" style="margin-left: 10px;">PotentialTransformerInfo</a></legend>
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PotentialTransformerInfo_collapse" aria-expanded="true" aria-controls="PotentialTransformerInfo_collapse" style="margin-left: 10px;">PotentialTransformerInfo</a></legend>
                    <div id="PotentialTransformerInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='accuracyClass'>accuracyClass: </label><div class='col-sm-8'><input id='accuracyClass' class='form-control' type='text'{{#accuracyClass}} value='{{accuracyClass}}'{{/accuracyClass}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='nominalRatio'>nominalRatio: </label><div class='col-sm-8'><input id='nominalRatio' class='form-control' type='text'{{#nominalRatio}} value='{{nominalRatio}}'{{/nominalRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='primaryRatio'>primaryRatio: </label><div class='col-sm-8'><input id='primaryRatio' class='form-control' type='text'{{#primaryRatio}} value='{{primaryRatio}}'{{/primaryRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ptClass'>ptClass: </label><div class='col-sm-8'><input id='ptClass' class='form-control' type='text'{{#ptClass}} value='{{ptClass}}'{{/ptClass}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='secondaryRatio'>secondaryRatio: </label><div class='col-sm-8'><input id='secondaryRatio' class='form-control' type='text'{{#secondaryRatio}} value='{{secondaryRatio}}'{{/secondaryRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tertiaryRatio'>tertiaryRatio: </label><div class='col-sm-8'><input id='tertiaryRatio' class='form-control' type='text'{{#tertiaryRatio}} value='{{tertiaryRatio}}'{{/tertiaryRatio}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PotentialTransformerInfo" };
                super.submit (obj);
                temp = document.getElementById ("accuracyClass").value; if ("" != temp) obj.accuracyClass = temp;
                temp = document.getElementById ("nominalRatio").value; if ("" != temp) obj.nominalRatio = temp;
                temp = document.getElementById ("primaryRatio").value; if ("" != temp) obj.primaryRatio = temp;
                temp = document.getElementById ("ptClass").value; if ("" != temp) obj.ptClass = temp;
                temp = document.getElementById ("ratedVoltage").value; if ("" != temp) obj.ratedVoltage = temp;
                temp = document.getElementById ("secondaryRatio").value; if ("" != temp) obj.secondaryRatio = temp;
                temp = document.getElementById ("tertiaryRatio").value; if ("" != temp) obj.tertiaryRatio = temp;

                return (obj);
            }
        }

        class OldTransformerEndInfo extends AssetInfo.TransformerEndInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OldTransformerEndInfo;
                if (null == bucket)
                   cim_data.OldTransformerEndInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OldTransformerEndInfo[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AssetInfo.TransformerEndInfo.prototype.parse.call (this, context, sub);
                obj.cls = "OldTransformerEndInfo";
                base.parse_element (/<cim:OldTransformerEndInfo.dayOverLoadRating>([\s\S]*?)<\/cim:OldTransformerEndInfo.dayOverLoadRating>/g, obj, "dayOverLoadRating", base.to_string, sub, context);
                base.parse_element (/<cim:OldTransformerEndInfo.hourOverLoadRating>([\s\S]*?)<\/cim:OldTransformerEndInfo.hourOverLoadRating>/g, obj, "hourOverLoadRating", base.to_string, sub, context);
                base.parse_element (/<cim:OldTransformerEndInfo.solidInsulationWeight>([\s\S]*?)<\/cim:OldTransformerEndInfo.solidInsulationWeight>/g, obj, "solidInsulationWeight", base.to_string, sub, context);
                base.parse_attribute (/<cim:OldTransformerEndInfo.windingInsulationKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "windingInsulationKind", sub, context);
                var bucket = context.parsed.OldTransformerEndInfo;
                if (null == bucket)
                   context.parsed.OldTransformerEndInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AssetInfo.TransformerEndInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "OldTransformerEndInfo", "dayOverLoadRating", "dayOverLoadRating",  base.from_string, fields);
                base.export_element (obj, "OldTransformerEndInfo", "hourOverLoadRating", "hourOverLoadRating",  base.from_string, fields);
                base.export_element (obj, "OldTransformerEndInfo", "solidInsulationWeight", "solidInsulationWeight",  base.from_string, fields);
                base.export_element (obj, "OldTransformerEndInfo", "windingInsulationKind", "windingInsulationKind",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OldTransformerEndInfo_collapse" aria-expanded="true" aria-controls="OldTransformerEndInfo_collapse" style="margin-left: 10px;">OldTransformerEndInfo</a></legend>
                    <div id="OldTransformerEndInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AssetInfo.TransformerEndInfo.prototype.template.call (this) +
                    `
                    {{#dayOverLoadRating}}<div><b>dayOverLoadRating</b>: {{dayOverLoadRating}}</div>{{/dayOverLoadRating}}
                    {{#hourOverLoadRating}}<div><b>hourOverLoadRating</b>: {{hourOverLoadRating}}</div>{{/hourOverLoadRating}}
                    {{#solidInsulationWeight}}<div><b>solidInsulationWeight</b>: {{solidInsulationWeight}}</div>{{/solidInsulationWeight}}
                    {{#windingInsulationKind}}<div><b>windingInsulationKind</b>: {{windingInsulationKind}}</div>{{/windingInsulationKind}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WindingInsulationKind = []; if (!obj.windingInsulationKind) obj.WindingInsulationKind.push ({ id: '', selected: true}); for (var property in WindingInsulationKind) obj.WindingInsulationKind.push ({ id: property, selected: obj.windingInsulationKind && obj.windingInsulationKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindingInsulationKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OldTransformerEndInfo_collapse" aria-expanded="true" aria-controls="OldTransformerEndInfo_collapse" style="margin-left: 10px;">OldTransformerEndInfo</a></legend>
                    <div id="OldTransformerEndInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AssetInfo.TransformerEndInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dayOverLoadRating'>dayOverLoadRating: </label><div class='col-sm-8'><input id='dayOverLoadRating' class='form-control' type='text'{{#dayOverLoadRating}} value='{{dayOverLoadRating}}'{{/dayOverLoadRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hourOverLoadRating'>hourOverLoadRating: </label><div class='col-sm-8'><input id='hourOverLoadRating' class='form-control' type='text'{{#hourOverLoadRating}} value='{{hourOverLoadRating}}'{{/hourOverLoadRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='solidInsulationWeight'>solidInsulationWeight: </label><div class='col-sm-8'><input id='solidInsulationWeight' class='form-control' type='text'{{#solidInsulationWeight}} value='{{solidInsulationWeight}}'{{/solidInsulationWeight}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='windingInsulationKind'>windingInsulationKind: </label><div class='col-sm-8'><select id='windingInsulationKind' class='form-control'>{{#WindingInsulationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WindingInsulationKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "OldTransformerEndInfo" };
                super.submit (obj);
                temp = document.getElementById ("dayOverLoadRating").value; if ("" != temp) obj.dayOverLoadRating = temp;
                temp = document.getElementById ("hourOverLoadRating").value; if ("" != temp) obj.hourOverLoadRating = temp;
                temp = document.getElementById ("solidInsulationWeight").value; if ("" != temp) obj.solidInsulationWeight = temp;
                temp = document.getElementById ("windingInsulationKind").value; if ("" != temp) { temp = WindingInsulationKind[temp]; if ("undefined" != typeof (temp)) obj.windingInsulationKind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#WindingInsulationKind." + temp; }

                return (obj);
            }
        }

        /**
         * Properties of recloser assets.
         *
         */
        class RecloserInfo extends OldSwitchInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RecloserInfo;
                if (null == bucket)
                   cim_data.RecloserInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RecloserInfo[obj.id];
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

                base.export_element (obj, "RecloserInfo", "groundTripCapable", "groundTripCapable",  base.from_boolean, fields);
                base.export_element (obj, "RecloserInfo", "groundTripNormalEnabled", "groundTripNormalEnabled",  base.from_boolean, fields);
                base.export_element (obj, "RecloserInfo", "groundTripRating", "groundTripRating",  base.from_string, fields);
                base.export_element (obj, "RecloserInfo", "phaseTripRating", "phaseTripRating",  base.from_string, fields);
                base.export_element (obj, "RecloserInfo", "recloseLockoutCount", "recloseLockoutCount",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RecloserInfo_collapse" aria-expanded="true" aria-controls="RecloserInfo_collapse" style="margin-left: 10px;">RecloserInfo</a></legend>
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RecloserInfo_collapse" aria-expanded="true" aria-controls="RecloserInfo_collapse" style="margin-left: 10px;">RecloserInfo</a></legend>
                    <div id="RecloserInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OldSwitchInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='groundTripCapable'>groundTripCapable: </label><div class='col-sm-8'><input id='groundTripCapable' class='form-check-input' type='checkbox'{{#groundTripCapable}} checked{{/groundTripCapable}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='groundTripNormalEnabled'>groundTripNormalEnabled: </label><div class='col-sm-8'><input id='groundTripNormalEnabled' class='form-check-input' type='checkbox'{{#groundTripNormalEnabled}} checked{{/groundTripNormalEnabled}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='groundTripRating'>groundTripRating: </label><div class='col-sm-8'><input id='groundTripRating' class='form-control' type='text'{{#groundTripRating}} value='{{groundTripRating}}'{{/groundTripRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phaseTripRating'>phaseTripRating: </label><div class='col-sm-8'><input id='phaseTripRating' class='form-control' type='text'{{#phaseTripRating}} value='{{phaseTripRating}}'{{/phaseTripRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='recloseLockoutCount'>recloseLockoutCount: </label><div class='col-sm-8'><input id='recloseLockoutCount' class='form-control' type='text'{{#recloseLockoutCount}} value='{{recloseLockoutCount}}'{{/recloseLockoutCount}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "RecloserInfo" };
                super.submit (obj);
                temp = document.getElementById ("groundTripCapable").checked; if (temp) obj.groundTripCapable = true;
                temp = document.getElementById ("groundTripNormalEnabled").checked; if (temp) obj.groundTripNormalEnabled = true;
                temp = document.getElementById ("groundTripRating").value; if ("" != temp) obj.groundTripRating = temp;
                temp = document.getElementById ("phaseTripRating").value; if ("" != temp) obj.phaseTripRating = temp;
                temp = document.getElementById ("recloseLockoutCount").value; if ("" != temp) obj.recloseLockoutCount = temp;

                return (obj);
            }
        }

        /**
         * Properties of breaker assets.
         *
         */
        class BreakerInfo extends OldSwitchInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.BreakerInfo;
                if (null == bucket)
                   cim_data.BreakerInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BreakerInfo[obj.id];
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

                base.export_element (obj, "BreakerInfo", "phaseTrip", "phaseTrip",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BreakerInfo_collapse" aria-expanded="true" aria-controls="BreakerInfo_collapse" style="margin-left: 10px;">BreakerInfo</a></legend>
                    <div id="BreakerInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OldSwitchInfo.prototype.template.call (this) +
                    `
                    {{#phaseTrip}}<div><b>phaseTrip</b>: {{phaseTrip}}</div>{{/phaseTrip}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BreakerInfo_collapse" aria-expanded="true" aria-controls="BreakerInfo_collapse" style="margin-left: 10px;">BreakerInfo</a></legend>
                    <div id="BreakerInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OldSwitchInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phaseTrip'>phaseTrip: </label><div class='col-sm-8'><input id='phaseTrip' class='form-control' type='text'{{#phaseTrip}} value='{{phaseTrip}}'{{/phaseTrip}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "BreakerInfo" };
                super.submit (obj);
                temp = document.getElementById ("phaseTrip").value; if ("" != temp) obj.phaseTrip = temp;

                return (obj);
            }
        }

        return (
            {
                OldTransformerTankInfo: OldTransformerTankInfo,
                PotentialTransformerInfo: PotentialTransformerInfo,
                OldSwitchInfo: OldSwitchInfo,
                AssetModelCatalogue: AssetModelCatalogue,
                FaultIndicatorInfo: FaultIndicatorInfo,
                AssetModelCatalogueItem: AssetModelCatalogueItem,
                ProtectionEquipmentInfo: ProtectionEquipmentInfo,
                SurgeArresterInfo: SurgeArresterInfo,
                CurrentTransformerInfo: CurrentTransformerInfo,
                BreakerInfo: BreakerInfo,
                CompositeSwitchInfo: CompositeSwitchInfo,
                OldTransformerEndInfo: OldTransformerEndInfo,
                RecloserInfo: RecloserInfo
            }
        );
    }
);