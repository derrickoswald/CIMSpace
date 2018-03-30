define
(
    ["model/base", "model/AssetInfo", "model/Assets", "model/Common", "model/Core", "model/InfCommon"],
    function (base, AssetInfo, Assets, Common, Core, InfCommon)
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

                base.export_attribute (obj, "FaultIndicatorInfo", "resetKind", "resetKind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FaultIndicatorInfo_collapse" aria-expanded="true" aria-controls="FaultIndicatorInfo_collapse" style="margin-left: 10px;">FaultIndicatorInfo</a></legend>
                    <div id="FaultIndicatorInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#resetKind}}<div><b>resetKind</b>: {{resetKind}}</div>{{/resetKind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.resetKindFaultIndicatorResetKind = [{ id: '', selected: (!obj.resetKind)}]; for (var property in FaultIndicatorResetKind) obj.resetKindFaultIndicatorResetKind.push ({ id: property, selected: obj.resetKind && obj.resetKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.resetKindFaultIndicatorResetKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FaultIndicatorInfo_collapse" aria-expanded="true" aria-controls="{{id}}_FaultIndicatorInfo_collapse" style="margin-left: 10px;">FaultIndicatorInfo</a></legend>
                    <div id="{{id}}_FaultIndicatorInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resetKind'>resetKind: </label><div class='col-sm-8'><select id='{{id}}_resetKind' class='form-control custom-select'>{{#resetKindFaultIndicatorResetKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/resetKindFaultIndicatorResetKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "FaultIndicatorInfo" };
                super.submit (id, obj);
                temp = FaultIndicatorResetKind[document.getElementById (id + "_resetKind").value]; if (temp) obj.resetKind = "http://iec.ch/TC57/2013/CIM-schema-cim16#FaultIndicatorResetKind." + temp; else delete obj.resetKind;

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetModelCatalogueItem_collapse" aria-expanded="true" aria-controls="AssetModelCatalogueItem_collapse" style="margin-left: 10px;">AssetModelCatalogueItem</a></legend>
                    <div id="AssetModelCatalogueItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#unitCost}}<div><b>unitCost</b>: {{unitCost}}</div>{{/unitCost}}
                    {{#AssetModel}}<div><b>AssetModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetModel}}&quot;);}); return false;'>{{AssetModel}}</a></div>{{/AssetModel}}
                    {{#ErpPOLineItems}}<div><b>ErpPOLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpPOLineItems}}
                    {{#ErpQuoteLineItems}}<div><b>ErpQuoteLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpQuoteLineItems}}
                    {{#AssetModelCatalogue}}<div><b>AssetModelCatalogue</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetModelCatalogue}}&quot;);}); return false;'>{{AssetModelCatalogue}}</a></div>{{/AssetModelCatalogue}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetModelCatalogueItem_collapse" aria-expanded="true" aria-controls="{{id}}_AssetModelCatalogueItem_collapse" style="margin-left: 10px;">AssetModelCatalogueItem</a></legend>
                    <div id="{{id}}_AssetModelCatalogueItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unitCost'>unitCost: </label><div class='col-sm-8'><input id='{{id}}_unitCost' class='form-control' type='text'{{#unitCost}} value='{{unitCost}}'{{/unitCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetModel'>AssetModel: </label><div class='col-sm-8'><input id='{{id}}_AssetModel' class='form-control' type='text'{{#AssetModel}} value='{{AssetModel}}'{{/AssetModel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetModelCatalogue'>AssetModelCatalogue: </label><div class='col-sm-8'><input id='{{id}}_AssetModelCatalogue' class='form-control' type='text'{{#AssetModelCatalogue}} value='{{AssetModelCatalogue}}'{{/AssetModelCatalogue}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AssetModelCatalogueItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_unitCost").value; if ("" != temp) obj.unitCost = temp;
                temp = document.getElementById (id + "_AssetModel").value; if ("" != temp) obj.AssetModel = temp;
                temp = document.getElementById (id + "_AssetModelCatalogue").value; if ("" != temp) obj.AssetModelCatalogue = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AssetModel", "0..1", "0..*", "ProductAssetModel", "AssetModelCatalogueItems"],
                            ["ErpPOLineItems", "0..*", "0..1", "ErpPOLineItem", "AssetModelCatalogueItem"],
                            ["ErpQuoteLineItems", "0..*", "0..1", "ErpQuoteLineItem", "AssetModelCatalogueItem"],
                            ["AssetModelCatalogue", "1", "0..*", "AssetModelCatalogue", "AssetModelCatalogueItems"]
                        ]
                    )
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OldSwitchInfo_collapse" aria-expanded="true" aria-controls="OldSwitchInfo_collapse" style="margin-left: 10px;">OldSwitchInfo</a></legend>
                    <div id="OldSwitchInfo_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OldSwitchInfo_collapse" aria-expanded="true" aria-controls="{{id}}_OldSwitchInfo_collapse" style="margin-left: 10px;">OldSwitchInfo</a></legend>
                    <div id="{{id}}_OldSwitchInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetInfo.SwitchInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dielectricStrength'>dielectricStrength: </label><div class='col-sm-8'><input id='{{id}}_dielectricStrength' class='form-control' type='text'{{#dielectricStrength}} value='{{dielectricStrength}}'{{/dielectricStrength}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_loadBreak'>loadBreak: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_loadBreak' class='form-check-input' type='checkbox'{{#loadBreak}} checked{{/loadBreak}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_makingCapacity'>makingCapacity: </label><div class='col-sm-8'><input id='{{id}}_makingCapacity' class='form-control' type='text'{{#makingCapacity}} value='{{makingCapacity}}'{{/makingCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumCurrent'>minimumCurrent: </label><div class='col-sm-8'><input id='{{id}}_minimumCurrent' class='form-control' type='text'{{#minimumCurrent}} value='{{minimumCurrent}}'{{/minimumCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_poleCount'>poleCount: </label><div class='col-sm-8'><input id='{{id}}_poleCount' class='form-control' type='text'{{#poleCount}} value='{{poleCount}}'{{/poleCount}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_remote'>remote: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_remote' class='form-check-input' type='checkbox'{{#remote}} checked{{/remote}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_withstandCurrent'>withstandCurrent: </label><div class='col-sm-8'><input id='{{id}}_withstandCurrent' class='form-control' type='text'{{#withstandCurrent}} value='{{withstandCurrent}}'{{/withstandCurrent}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OldSwitchInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dielectricStrength").value; if ("" != temp) obj.dielectricStrength = temp;
                temp = document.getElementById (id + "_loadBreak").checked; if (temp) obj.loadBreak = true;
                temp = document.getElementById (id + "_makingCapacity").value; if ("" != temp) obj.makingCapacity = temp;
                temp = document.getElementById (id + "_minimumCurrent").value; if ("" != temp) obj.minimumCurrent = temp;
                temp = document.getElementById (id + "_poleCount").value; if ("" != temp) obj.poleCount = temp;
                temp = document.getElementById (id + "_remote").checked; if (temp) obj.remote = true;
                temp = document.getElementById (id + "_withstandCurrent").value; if ("" != temp) obj.withstandCurrent = temp;

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
                base.parse_attribute (/<cim:CurrentTransformerInfo.maxRatio\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "maxRatio", sub, context);
                base.parse_attribute (/<cim:CurrentTransformerInfo.nominalRatio\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "nominalRatio", sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.primaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.primaryFlsRating>/g, obj, "primaryFlsRating", base.to_string, sub, context);
                base.parse_attribute (/<cim:CurrentTransformerInfo.primaryRatio\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "primaryRatio", sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.ratedCurrent>([\s\S]*?)<\/cim:CurrentTransformerInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.secondaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.secondaryFlsRating>/g, obj, "secondaryFlsRating", base.to_string, sub, context);
                base.parse_attribute (/<cim:CurrentTransformerInfo.secondaryRatio\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "secondaryRatio", sub, context);
                base.parse_element (/<cim:CurrentTransformerInfo.tertiaryFlsRating>([\s\S]*?)<\/cim:CurrentTransformerInfo.tertiaryFlsRating>/g, obj, "tertiaryFlsRating", base.to_string, sub, context);
                base.parse_attribute (/<cim:CurrentTransformerInfo.tertiaryRatio\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "tertiaryRatio", sub, context);
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
                base.export_attribute (obj, "CurrentTransformerInfo", "maxRatio", "maxRatio", fields);
                base.export_attribute (obj, "CurrentTransformerInfo", "nominalRatio", "nominalRatio", fields);
                base.export_element (obj, "CurrentTransformerInfo", "primaryFlsRating", "primaryFlsRating",  base.from_string, fields);
                base.export_attribute (obj, "CurrentTransformerInfo", "primaryRatio", "primaryRatio", fields);
                base.export_element (obj, "CurrentTransformerInfo", "ratedCurrent", "ratedCurrent",  base.from_string, fields);
                base.export_element (obj, "CurrentTransformerInfo", "secondaryFlsRating", "secondaryFlsRating",  base.from_string, fields);
                base.export_attribute (obj, "CurrentTransformerInfo", "secondaryRatio", "secondaryRatio", fields);
                base.export_element (obj, "CurrentTransformerInfo", "tertiaryFlsRating", "tertiaryFlsRating",  base.from_string, fields);
                base.export_attribute (obj, "CurrentTransformerInfo", "tertiaryRatio", "tertiaryRatio", fields);
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CurrentTransformerInfo_collapse" aria-expanded="true" aria-controls="CurrentTransformerInfo_collapse" style="margin-left: 10px;">CurrentTransformerInfo</a></legend>
                    <div id="CurrentTransformerInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#accuracyClass}}<div><b>accuracyClass</b>: {{accuracyClass}}</div>{{/accuracyClass}}
                    {{#accuracyLimit}}<div><b>accuracyLimit</b>: {{accuracyLimit}}</div>{{/accuracyLimit}}
                    {{#coreCount}}<div><b>coreCount</b>: {{coreCount}}</div>{{/coreCount}}
                    {{#ctClass}}<div><b>ctClass</b>: {{ctClass}}</div>{{/ctClass}}
                    {{#kneePointCurrent}}<div><b>kneePointCurrent</b>: {{kneePointCurrent}}</div>{{/kneePointCurrent}}
                    {{#kneePointVoltage}}<div><b>kneePointVoltage</b>: {{kneePointVoltage}}</div>{{/kneePointVoltage}}
                    {{#maxRatio}}<div><b>maxRatio</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{maxRatio}}&quot;);}); return false;'>{{maxRatio}}</a></div>{{/maxRatio}}\n                    {{#nominalRatio}}<div><b>nominalRatio</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{nominalRatio}}&quot;);}); return false;'>{{nominalRatio}}</a></div>{{/nominalRatio}}\n                    {{#primaryFlsRating}}<div><b>primaryFlsRating</b>: {{primaryFlsRating}}</div>{{/primaryFlsRating}}
                    {{#primaryRatio}}<div><b>primaryRatio</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{primaryRatio}}&quot;);}); return false;'>{{primaryRatio}}</a></div>{{/primaryRatio}}\n                    {{#ratedCurrent}}<div><b>ratedCurrent</b>: {{ratedCurrent}}</div>{{/ratedCurrent}}
                    {{#secondaryFlsRating}}<div><b>secondaryFlsRating</b>: {{secondaryFlsRating}}</div>{{/secondaryFlsRating}}
                    {{#secondaryRatio}}<div><b>secondaryRatio</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{secondaryRatio}}&quot;);}); return false;'>{{secondaryRatio}}</a></div>{{/secondaryRatio}}\n                    {{#tertiaryFlsRating}}<div><b>tertiaryFlsRating</b>: {{tertiaryFlsRating}}</div>{{/tertiaryFlsRating}}
                    {{#tertiaryRatio}}<div><b>tertiaryRatio</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{tertiaryRatio}}&quot;);}); return false;'>{{tertiaryRatio}}</a></div>{{/tertiaryRatio}}\n                    {{#usage}}<div><b>usage</b>: {{usage}}</div>{{/usage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.maxRatioRatio = [{ id: '', selected: (!obj.maxRatio)}]; for (var property in InfCommon.Ratio) obj.maxRatioRatio.push ({ id: property, selected: obj.maxRatio && obj.maxRatio.endsWith ('.' + property)});
                obj.nominalRatioRatio = [{ id: '', selected: (!obj.nominalRatio)}]; for (var property in InfCommon.Ratio) obj.nominalRatioRatio.push ({ id: property, selected: obj.nominalRatio && obj.nominalRatio.endsWith ('.' + property)});
                obj.primaryRatioRatio = [{ id: '', selected: (!obj.primaryRatio)}]; for (var property in InfCommon.Ratio) obj.primaryRatioRatio.push ({ id: property, selected: obj.primaryRatio && obj.primaryRatio.endsWith ('.' + property)});
                obj.secondaryRatioRatio = [{ id: '', selected: (!obj.secondaryRatio)}]; for (var property in InfCommon.Ratio) obj.secondaryRatioRatio.push ({ id: property, selected: obj.secondaryRatio && obj.secondaryRatio.endsWith ('.' + property)});
                obj.tertiaryRatioRatio = [{ id: '', selected: (!obj.tertiaryRatio)}]; for (var property in InfCommon.Ratio) obj.tertiaryRatioRatio.push ({ id: property, selected: obj.tertiaryRatio && obj.tertiaryRatio.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.maxRatioRatio;
                delete obj.nominalRatioRatio;
                delete obj.primaryRatioRatio;
                delete obj.secondaryRatioRatio;
                delete obj.tertiaryRatioRatio;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CurrentTransformerInfo_collapse" aria-expanded="true" aria-controls="{{id}}_CurrentTransformerInfo_collapse" style="margin-left: 10px;">CurrentTransformerInfo</a></legend>
                    <div id="{{id}}_CurrentTransformerInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accuracyClass'>accuracyClass: </label><div class='col-sm-8'><input id='{{id}}_accuracyClass' class='form-control' type='text'{{#accuracyClass}} value='{{accuracyClass}}'{{/accuracyClass}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accuracyLimit'>accuracyLimit: </label><div class='col-sm-8'><input id='{{id}}_accuracyLimit' class='form-control' type='text'{{#accuracyLimit}} value='{{accuracyLimit}}'{{/accuracyLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coreCount'>coreCount: </label><div class='col-sm-8'><input id='{{id}}_coreCount' class='form-control' type='text'{{#coreCount}} value='{{coreCount}}'{{/coreCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ctClass'>ctClass: </label><div class='col-sm-8'><input id='{{id}}_ctClass' class='form-control' type='text'{{#ctClass}} value='{{ctClass}}'{{/ctClass}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kneePointCurrent'>kneePointCurrent: </label><div class='col-sm-8'><input id='{{id}}_kneePointCurrent' class='form-control' type='text'{{#kneePointCurrent}} value='{{kneePointCurrent}}'{{/kneePointCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kneePointVoltage'>kneePointVoltage: </label><div class='col-sm-8'><input id='{{id}}_kneePointVoltage' class='form-control' type='text'{{#kneePointVoltage}} value='{{kneePointVoltage}}'{{/kneePointVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxRatio'>maxRatio: </label><div class='col-sm-8'><select id='{{id}}_maxRatio' class='form-control custom-select'>{{#maxRatioRatio}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/maxRatioRatio}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nominalRatio'>nominalRatio: </label><div class='col-sm-8'><select id='{{id}}_nominalRatio' class='form-control custom-select'>{{#nominalRatioRatio}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/nominalRatioRatio}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_primaryFlsRating'>primaryFlsRating: </label><div class='col-sm-8'><input id='{{id}}_primaryFlsRating' class='form-control' type='text'{{#primaryFlsRating}} value='{{primaryFlsRating}}'{{/primaryFlsRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_primaryRatio'>primaryRatio: </label><div class='col-sm-8'><select id='{{id}}_primaryRatio' class='form-control custom-select'>{{#primaryRatioRatio}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/primaryRatioRatio}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='{{id}}_ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_secondaryFlsRating'>secondaryFlsRating: </label><div class='col-sm-8'><input id='{{id}}_secondaryFlsRating' class='form-control' type='text'{{#secondaryFlsRating}} value='{{secondaryFlsRating}}'{{/secondaryFlsRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_secondaryRatio'>secondaryRatio: </label><div class='col-sm-8'><select id='{{id}}_secondaryRatio' class='form-control custom-select'>{{#secondaryRatioRatio}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/secondaryRatioRatio}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tertiaryFlsRating'>tertiaryFlsRating: </label><div class='col-sm-8'><input id='{{id}}_tertiaryFlsRating' class='form-control' type='text'{{#tertiaryFlsRating}} value='{{tertiaryFlsRating}}'{{/tertiaryFlsRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tertiaryRatio'>tertiaryRatio: </label><div class='col-sm-8'><select id='{{id}}_tertiaryRatio' class='form-control custom-select'>{{#tertiaryRatioRatio}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/tertiaryRatioRatio}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_usage'>usage: </label><div class='col-sm-8'><input id='{{id}}_usage' class='form-control' type='text'{{#usage}} value='{{usage}}'{{/usage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CurrentTransformerInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_accuracyClass").value; if ("" != temp) obj.accuracyClass = temp;
                temp = document.getElementById (id + "_accuracyLimit").value; if ("" != temp) obj.accuracyLimit = temp;
                temp = document.getElementById (id + "_coreCount").value; if ("" != temp) obj.coreCount = temp;
                temp = document.getElementById (id + "_ctClass").value; if ("" != temp) obj.ctClass = temp;
                temp = document.getElementById (id + "_kneePointCurrent").value; if ("" != temp) obj.kneePointCurrent = temp;
                temp = document.getElementById (id + "_kneePointVoltage").value; if ("" != temp) obj.kneePointVoltage = temp;
                temp = InfCommon.Ratio[document.getElementById (id + "_maxRatio").value]; if (temp) obj.maxRatio = "http://iec.ch/TC57/2013/CIM-schema-cim16#Ratio." + temp; else delete obj.maxRatio;
                temp = InfCommon.Ratio[document.getElementById (id + "_nominalRatio").value]; if (temp) obj.nominalRatio = "http://iec.ch/TC57/2013/CIM-schema-cim16#Ratio." + temp; else delete obj.nominalRatio;
                temp = document.getElementById (id + "_primaryFlsRating").value; if ("" != temp) obj.primaryFlsRating = temp;
                temp = InfCommon.Ratio[document.getElementById (id + "_primaryRatio").value]; if (temp) obj.primaryRatio = "http://iec.ch/TC57/2013/CIM-schema-cim16#Ratio." + temp; else delete obj.primaryRatio;
                temp = document.getElementById (id + "_ratedCurrent").value; if ("" != temp) obj.ratedCurrent = temp;
                temp = document.getElementById (id + "_secondaryFlsRating").value; if ("" != temp) obj.secondaryFlsRating = temp;
                temp = InfCommon.Ratio[document.getElementById (id + "_secondaryRatio").value]; if (temp) obj.secondaryRatio = "http://iec.ch/TC57/2013/CIM-schema-cim16#Ratio." + temp; else delete obj.secondaryRatio;
                temp = document.getElementById (id + "_tertiaryFlsRating").value; if ("" != temp) obj.tertiaryFlsRating = temp;
                temp = InfCommon.Ratio[document.getElementById (id + "_tertiaryRatio").value]; if (temp) obj.tertiaryRatio = "http://iec.ch/TC57/2013/CIM-schema-cim16#Ratio." + temp; else delete obj.tertiaryRatio;
                temp = document.getElementById (id + "_usage").value; if ("" != temp) obj.usage = temp;

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SurgeArresterInfo_collapse" aria-expanded="true" aria-controls="SurgeArresterInfo_collapse" style="margin-left: 10px;">SurgeArresterInfo</a></legend>
                    <div id="SurgeArresterInfo_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SurgeArresterInfo_collapse" aria-expanded="true" aria-controls="{{id}}_SurgeArresterInfo_collapse" style="margin-left: 10px;">SurgeArresterInfo</a></legend>
                    <div id="{{id}}_SurgeArresterInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_continuousOperatingVoltage'>continuousOperatingVoltage: </label><div class='col-sm-8'><input id='{{id}}_continuousOperatingVoltage' class='form-control' type='text'{{#continuousOperatingVoltage}} value='{{continuousOperatingVoltage}}'{{/continuousOperatingVoltage}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isPolymer'>isPolymer: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isPolymer' class='form-check-input' type='checkbox'{{#isPolymer}} checked{{/isPolymer}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lightningImpulseDischargeVoltage'>lightningImpulseDischargeVoltage: </label><div class='col-sm-8'><input id='{{id}}_lightningImpulseDischargeVoltage' class='form-control' type='text'{{#lightningImpulseDischargeVoltage}} value='{{lightningImpulseDischargeVoltage}}'{{/lightningImpulseDischargeVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lineDischargeClass'>lineDischargeClass: </label><div class='col-sm-8'><input id='{{id}}_lineDischargeClass' class='form-control' type='text'{{#lineDischargeClass}} value='{{lineDischargeClass}}'{{/lineDischargeClass}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nominalDischargeCurrent'>nominalDischargeCurrent: </label><div class='col-sm-8'><input id='{{id}}_nominalDischargeCurrent' class='form-control' type='text'{{#nominalDischargeCurrent}} value='{{nominalDischargeCurrent}}'{{/nominalDischargeCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pressureReliefClass'>pressureReliefClass: </label><div class='col-sm-8'><input id='{{id}}_pressureReliefClass' class='form-control' type='text'{{#pressureReliefClass}} value='{{pressureReliefClass}}'{{/pressureReliefClass}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_steepFrontDischargeVoltage'>steepFrontDischargeVoltage: </label><div class='col-sm-8'><input id='{{id}}_steepFrontDischargeVoltage' class='form-control' type='text'{{#steepFrontDischargeVoltage}} value='{{steepFrontDischargeVoltage}}'{{/steepFrontDischargeVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_switchingImpulseDischargeVoltage'>switchingImpulseDischargeVoltage: </label><div class='col-sm-8'><input id='{{id}}_switchingImpulseDischargeVoltage' class='form-control' type='text'{{#switchingImpulseDischargeVoltage}} value='{{switchingImpulseDischargeVoltage}}'{{/switchingImpulseDischargeVoltage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SurgeArresterInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_continuousOperatingVoltage").value; if ("" != temp) obj.continuousOperatingVoltage = temp;
                temp = document.getElementById (id + "_isPolymer").checked; if (temp) obj.isPolymer = true;
                temp = document.getElementById (id + "_lightningImpulseDischargeVoltage").value; if ("" != temp) obj.lightningImpulseDischargeVoltage = temp;
                temp = document.getElementById (id + "_lineDischargeClass").value; if ("" != temp) obj.lineDischargeClass = temp;
                temp = document.getElementById (id + "_nominalDischargeCurrent").value; if ("" != temp) obj.nominalDischargeCurrent = temp;
                temp = document.getElementById (id + "_pressureReliefClass").value; if ("" != temp) obj.pressureReliefClass = temp;
                temp = document.getElementById (id + "_ratedVoltage").value; if ("" != temp) obj.ratedVoltage = temp;
                temp = document.getElementById (id + "_steepFrontDischargeVoltage").value; if ("" != temp) obj.steepFrontDischargeVoltage = temp;
                temp = document.getElementById (id + "_switchingImpulseDischargeVoltage").value; if ("" != temp) obj.switchingImpulseDischargeVoltage = temp;

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
                base.parse_attribute (/<cim:AssetModelCatalogue.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
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

                base.export_attribute (obj, "AssetModelCatalogue", "status", "status", fields);
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetModelCatalogue_collapse" aria-expanded="true" aria-controls="AssetModelCatalogue_collapse" style="margin-left: 10px;">AssetModelCatalogue</a></legend>
                    <div id="AssetModelCatalogue_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#AssetModelCatalogueItems}}<div><b>AssetModelCatalogueItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/AssetModelCatalogueItems}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.statusStatus = [{ id: '', selected: (!obj.status)}]; for (var property in Common.Status) obj.statusStatus.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
                if (obj.AssetModelCatalogueItems) obj.AssetModelCatalogueItems_string = obj.AssetModelCatalogueItems.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.statusStatus;
                delete obj.AssetModelCatalogueItems_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetModelCatalogue_collapse" aria-expanded="true" aria-controls="{{id}}_AssetModelCatalogue_collapse" style="margin-left: 10px;">AssetModelCatalogue</a></legend>
                    <div id="{{id}}_AssetModelCatalogue_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control custom-select'>{{#statusStatus}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/statusStatus}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AssetModelCatalogue" };
                super.submit (id, obj);
                temp = Common.Status[document.getElementById (id + "_status").value]; if (temp) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#Status." + temp; else delete obj.status;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AssetModelCatalogueItems", "0..*", "1", "AssetModelCatalogueItem", "AssetModelCatalogue"]
                        ]
                    )
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProtectionEquipmentInfo_collapse" aria-expanded="true" aria-controls="ProtectionEquipmentInfo_collapse" style="margin-left: 10px;">ProtectionEquipmentInfo</a></legend>
                    <div id="ProtectionEquipmentInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#groundTrip}}<div><b>groundTrip</b>: {{groundTrip}}</div>{{/groundTrip}}
                    {{#phaseTrip}}<div><b>phaseTrip</b>: {{phaseTrip}}</div>{{/phaseTrip}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProtectionEquipmentInfo_collapse" aria-expanded="true" aria-controls="{{id}}_ProtectionEquipmentInfo_collapse" style="margin-left: 10px;">ProtectionEquipmentInfo</a></legend>
                    <div id="{{id}}_ProtectionEquipmentInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_groundTrip'>groundTrip: </label><div class='col-sm-8'><input id='{{id}}_groundTrip' class='form-control' type='text'{{#groundTrip}} value='{{groundTrip}}'{{/groundTrip}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseTrip'>phaseTrip: </label><div class='col-sm-8'><input id='{{id}}_phaseTrip' class='form-control' type='text'{{#phaseTrip}} value='{{phaseTrip}}'{{/phaseTrip}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ProtectionEquipmentInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_groundTrip").value; if ("" != temp) obj.groundTrip = temp;
                temp = document.getElementById (id + "_phaseTrip").value; if ("" != temp) obj.phaseTrip = temp;

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

                base.export_attribute (obj, "OldTransformerTankInfo", "constructionKind", "constructionKind", fields);
                base.export_element (obj, "OldTransformerTankInfo", "coreCoilsWeight", "coreCoilsWeight",  base.from_string, fields);
                base.export_attribute (obj, "OldTransformerTankInfo", "coreKind", "coreKind", fields);
                base.export_attribute (obj, "OldTransformerTankInfo", "function", "function", fields);
                base.export_element (obj, "OldTransformerTankInfo", "neutralBIL", "neutralBIL",  base.from_string, fields);
                base.export_attribute (obj, "OldTransformerTankInfo", "oilPreservationKind", "oilPreservationKind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OldTransformerTankInfo_collapse" aria-expanded="true" aria-controls="OldTransformerTankInfo_collapse" style="margin-left: 10px;">OldTransformerTankInfo</a></legend>
                    <div id="OldTransformerTankInfo_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.constructionKindTransformerConstructionKind = [{ id: '', selected: (!obj.constructionKind)}]; for (var property in TransformerConstructionKind) obj.constructionKindTransformerConstructionKind.push ({ id: property, selected: obj.constructionKind && obj.constructionKind.endsWith ('.' + property)});
                obj.coreKindTransformerCoreKind = [{ id: '', selected: (!obj.coreKind)}]; for (var property in TransformerCoreKind) obj.coreKindTransformerCoreKind.push ({ id: property, selected: obj.coreKind && obj.coreKind.endsWith ('.' + property)});
                obj.functionTransformerFunctionKind = [{ id: '', selected: (!obj.function)}]; for (var property in TransformerFunctionKind) obj.functionTransformerFunctionKind.push ({ id: property, selected: obj.function && obj.function.endsWith ('.' + property)});
                obj.oilPreservationKindOilPreservationKind = [{ id: '', selected: (!obj.oilPreservationKind)}]; for (var property in OilPreservationKind) obj.oilPreservationKindOilPreservationKind.push ({ id: property, selected: obj.oilPreservationKind && obj.oilPreservationKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.constructionKindTransformerConstructionKind;
                delete obj.coreKindTransformerCoreKind;
                delete obj.functionTransformerFunctionKind;
                delete obj.oilPreservationKindOilPreservationKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OldTransformerTankInfo_collapse" aria-expanded="true" aria-controls="{{id}}_OldTransformerTankInfo_collapse" style="margin-left: 10px;">OldTransformerTankInfo</a></legend>
                    <div id="{{id}}_OldTransformerTankInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetInfo.TransformerTankInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_constructionKind'>constructionKind: </label><div class='col-sm-8'><select id='{{id}}_constructionKind' class='form-control custom-select'>{{#constructionKindTransformerConstructionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/constructionKindTransformerConstructionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coreCoilsWeight'>coreCoilsWeight: </label><div class='col-sm-8'><input id='{{id}}_coreCoilsWeight' class='form-control' type='text'{{#coreCoilsWeight}} value='{{coreCoilsWeight}}'{{/coreCoilsWeight}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coreKind'>coreKind: </label><div class='col-sm-8'><select id='{{id}}_coreKind' class='form-control custom-select'>{{#coreKindTransformerCoreKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/coreKindTransformerCoreKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_function'>function: </label><div class='col-sm-8'><select id='{{id}}_function' class='form-control custom-select'>{{#functionTransformerFunctionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/functionTransformerFunctionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_neutralBIL'>neutralBIL: </label><div class='col-sm-8'><input id='{{id}}_neutralBIL' class='form-control' type='text'{{#neutralBIL}} value='{{neutralBIL}}'{{/neutralBIL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilPreservationKind'>oilPreservationKind: </label><div class='col-sm-8'><select id='{{id}}_oilPreservationKind' class='form-control custom-select'>{{#oilPreservationKindOilPreservationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/oilPreservationKindOilPreservationKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OldTransformerTankInfo" };
                super.submit (id, obj);
                temp = TransformerConstructionKind[document.getElementById (id + "_constructionKind").value]; if (temp) obj.constructionKind = "http://iec.ch/TC57/2013/CIM-schema-cim16#TransformerConstructionKind." + temp; else delete obj.constructionKind;
                temp = document.getElementById (id + "_coreCoilsWeight").value; if ("" != temp) obj.coreCoilsWeight = temp;
                temp = TransformerCoreKind[document.getElementById (id + "_coreKind").value]; if (temp) obj.coreKind = "http://iec.ch/TC57/2013/CIM-schema-cim16#TransformerCoreKind." + temp; else delete obj.coreKind;
                temp = TransformerFunctionKind[document.getElementById (id + "_function").value]; if (temp) obj.function = "http://iec.ch/TC57/2013/CIM-schema-cim16#TransformerFunctionKind." + temp; else delete obj.function;
                temp = document.getElementById (id + "_neutralBIL").value; if ("" != temp) obj.neutralBIL = temp;
                temp = OilPreservationKind[document.getElementById (id + "_oilPreservationKind").value]; if (temp) obj.oilPreservationKind = "http://iec.ch/TC57/2013/CIM-schema-cim16#OilPreservationKind." + temp; else delete obj.oilPreservationKind;

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
                base.parse_attribute (/<cim:CompositeSwitchInfo.phaseCode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phaseCode", sub, context);
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
                base.export_attribute (obj, "CompositeSwitchInfo", "kind", "kind", fields);
                base.export_attribute (obj, "CompositeSwitchInfo", "phaseCode", "phaseCode", fields);
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CompositeSwitchInfo_collapse" aria-expanded="true" aria-controls="CompositeSwitchInfo_collapse" style="margin-left: 10px;">CompositeSwitchInfo</a></legend>
                    <div id="CompositeSwitchInfo_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.kindCompositeSwitchKind = [{ id: '', selected: (!obj.kind)}]; for (var property in CompositeSwitchKind) obj.kindCompositeSwitchKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                obj.phaseCodePhaseCode = [{ id: '', selected: (!obj.phaseCode)}]; for (var property in Core.PhaseCode) obj.phaseCodePhaseCode.push ({ id: property, selected: obj.phaseCode && obj.phaseCode.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.kindCompositeSwitchKind;
                delete obj.phaseCodePhaseCode;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CompositeSwitchInfo_collapse" aria-expanded="true" aria-controls="{{id}}_CompositeSwitchInfo_collapse" style="margin-left: 10px;">CompositeSwitchInfo</a></legend>
                    <div id="{{id}}_CompositeSwitchInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_ganged'>ganged: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_ganged' class='form-check-input' type='checkbox'{{#ganged}} checked{{/ganged}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_initOpMode'>initOpMode: </label><div class='col-sm-8'><input id='{{id}}_initOpMode' class='form-control' type='text'{{#initOpMode}} value='{{initOpMode}}'{{/initOpMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_interruptingRating'>interruptingRating: </label><div class='col-sm-8'><input id='{{id}}_interruptingRating' class='form-control' type='text'{{#interruptingRating}} value='{{interruptingRating}}'{{/interruptingRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindCompositeSwitchKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindCompositeSwitchKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseCode'>phaseCode: </label><div class='col-sm-8'><select id='{{id}}_phaseCode' class='form-control custom-select'>{{#phaseCodePhaseCode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/phaseCodePhaseCode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseCount'>phaseCount: </label><div class='col-sm-8'><input id='{{id}}_phaseCount' class='form-control' type='text'{{#phaseCount}} value='{{phaseCount}}'{{/phaseCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_remote'>remote: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_remote' class='form-check-input' type='checkbox'{{#remote}} checked{{/remote}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_switchStateCount'>switchStateCount: </label><div class='col-sm-8'><input id='{{id}}_switchStateCount' class='form-control' type='text'{{#switchStateCount}} value='{{switchStateCount}}'{{/switchStateCount}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CompositeSwitchInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ganged").checked; if (temp) obj.ganged = true;
                temp = document.getElementById (id + "_initOpMode").value; if ("" != temp) obj.initOpMode = temp;
                temp = document.getElementById (id + "_interruptingRating").value; if ("" != temp) obj.interruptingRating = temp;
                temp = CompositeSwitchKind[document.getElementById (id + "_kind").value]; if (temp) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#CompositeSwitchKind." + temp; else delete obj.kind;
                temp = Core.PhaseCode[document.getElementById (id + "_phaseCode").value]; if (temp) obj.phaseCode = "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode." + temp; else delete obj.phaseCode;
                temp = document.getElementById (id + "_phaseCount").value; if ("" != temp) obj.phaseCount = temp;
                temp = document.getElementById (id + "_ratedVoltage").value; if ("" != temp) obj.ratedVoltage = temp;
                temp = document.getElementById (id + "_remote").checked; if (temp) obj.remote = true;
                temp = document.getElementById (id + "_switchStateCount").value; if ("" != temp) obj.switchStateCount = temp;

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
                base.parse_attribute (/<cim:PotentialTransformerInfo.nominalRatio\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "nominalRatio", sub, context);
                base.parse_attribute (/<cim:PotentialTransformerInfo.primaryRatio\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "primaryRatio", sub, context);
                base.parse_element (/<cim:PotentialTransformerInfo.ptClass>([\s\S]*?)<\/cim:PotentialTransformerInfo.ptClass>/g, obj, "ptClass", base.to_string, sub, context);
                base.parse_element (/<cim:PotentialTransformerInfo.ratedVoltage>([\s\S]*?)<\/cim:PotentialTransformerInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
                base.parse_attribute (/<cim:PotentialTransformerInfo.secondaryRatio\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "secondaryRatio", sub, context);
                base.parse_attribute (/<cim:PotentialTransformerInfo.tertiaryRatio\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "tertiaryRatio", sub, context);
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
                base.export_attribute (obj, "PotentialTransformerInfo", "nominalRatio", "nominalRatio", fields);
                base.export_attribute (obj, "PotentialTransformerInfo", "primaryRatio", "primaryRatio", fields);
                base.export_element (obj, "PotentialTransformerInfo", "ptClass", "ptClass",  base.from_string, fields);
                base.export_element (obj, "PotentialTransformerInfo", "ratedVoltage", "ratedVoltage",  base.from_string, fields);
                base.export_attribute (obj, "PotentialTransformerInfo", "secondaryRatio", "secondaryRatio", fields);
                base.export_attribute (obj, "PotentialTransformerInfo", "tertiaryRatio", "tertiaryRatio", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PotentialTransformerInfo_collapse" aria-expanded="true" aria-controls="PotentialTransformerInfo_collapse" style="margin-left: 10px;">PotentialTransformerInfo</a></legend>
                    <div id="PotentialTransformerInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#accuracyClass}}<div><b>accuracyClass</b>: {{accuracyClass}}</div>{{/accuracyClass}}
                    {{#nominalRatio}}<div><b>nominalRatio</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{nominalRatio}}&quot;);}); return false;'>{{nominalRatio}}</a></div>{{/nominalRatio}}\n                    {{#primaryRatio}}<div><b>primaryRatio</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{primaryRatio}}&quot;);}); return false;'>{{primaryRatio}}</a></div>{{/primaryRatio}}\n                    {{#ptClass}}<div><b>ptClass</b>: {{ptClass}}</div>{{/ptClass}}
                    {{#ratedVoltage}}<div><b>ratedVoltage</b>: {{ratedVoltage}}</div>{{/ratedVoltage}}
                    {{#secondaryRatio}}<div><b>secondaryRatio</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{secondaryRatio}}&quot;);}); return false;'>{{secondaryRatio}}</a></div>{{/secondaryRatio}}\n                    {{#tertiaryRatio}}<div><b>tertiaryRatio</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{tertiaryRatio}}&quot;);}); return false;'>{{tertiaryRatio}}</a></div>{{/tertiaryRatio}}\n                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.nominalRatioRatio = [{ id: '', selected: (!obj.nominalRatio)}]; for (var property in InfCommon.Ratio) obj.nominalRatioRatio.push ({ id: property, selected: obj.nominalRatio && obj.nominalRatio.endsWith ('.' + property)});
                obj.primaryRatioRatio = [{ id: '', selected: (!obj.primaryRatio)}]; for (var property in InfCommon.Ratio) obj.primaryRatioRatio.push ({ id: property, selected: obj.primaryRatio && obj.primaryRatio.endsWith ('.' + property)});
                obj.secondaryRatioRatio = [{ id: '', selected: (!obj.secondaryRatio)}]; for (var property in InfCommon.Ratio) obj.secondaryRatioRatio.push ({ id: property, selected: obj.secondaryRatio && obj.secondaryRatio.endsWith ('.' + property)});
                obj.tertiaryRatioRatio = [{ id: '', selected: (!obj.tertiaryRatio)}]; for (var property in InfCommon.Ratio) obj.tertiaryRatioRatio.push ({ id: property, selected: obj.tertiaryRatio && obj.tertiaryRatio.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.nominalRatioRatio;
                delete obj.primaryRatioRatio;
                delete obj.secondaryRatioRatio;
                delete obj.tertiaryRatioRatio;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PotentialTransformerInfo_collapse" aria-expanded="true" aria-controls="{{id}}_PotentialTransformerInfo_collapse" style="margin-left: 10px;">PotentialTransformerInfo</a></legend>
                    <div id="{{id}}_PotentialTransformerInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accuracyClass'>accuracyClass: </label><div class='col-sm-8'><input id='{{id}}_accuracyClass' class='form-control' type='text'{{#accuracyClass}} value='{{accuracyClass}}'{{/accuracyClass}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nominalRatio'>nominalRatio: </label><div class='col-sm-8'><select id='{{id}}_nominalRatio' class='form-control custom-select'>{{#nominalRatioRatio}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/nominalRatioRatio}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_primaryRatio'>primaryRatio: </label><div class='col-sm-8'><select id='{{id}}_primaryRatio' class='form-control custom-select'>{{#primaryRatioRatio}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/primaryRatioRatio}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ptClass'>ptClass: </label><div class='col-sm-8'><input id='{{id}}_ptClass' class='form-control' type='text'{{#ptClass}} value='{{ptClass}}'{{/ptClass}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_secondaryRatio'>secondaryRatio: </label><div class='col-sm-8'><select id='{{id}}_secondaryRatio' class='form-control custom-select'>{{#secondaryRatioRatio}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/secondaryRatioRatio}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tertiaryRatio'>tertiaryRatio: </label><div class='col-sm-8'><select id='{{id}}_tertiaryRatio' class='form-control custom-select'>{{#tertiaryRatioRatio}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/tertiaryRatioRatio}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PotentialTransformerInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_accuracyClass").value; if ("" != temp) obj.accuracyClass = temp;
                temp = InfCommon.Ratio[document.getElementById (id + "_nominalRatio").value]; if (temp) obj.nominalRatio = "http://iec.ch/TC57/2013/CIM-schema-cim16#Ratio." + temp; else delete obj.nominalRatio;
                temp = InfCommon.Ratio[document.getElementById (id + "_primaryRatio").value]; if (temp) obj.primaryRatio = "http://iec.ch/TC57/2013/CIM-schema-cim16#Ratio." + temp; else delete obj.primaryRatio;
                temp = document.getElementById (id + "_ptClass").value; if ("" != temp) obj.ptClass = temp;
                temp = document.getElementById (id + "_ratedVoltage").value; if ("" != temp) obj.ratedVoltage = temp;
                temp = InfCommon.Ratio[document.getElementById (id + "_secondaryRatio").value]; if (temp) obj.secondaryRatio = "http://iec.ch/TC57/2013/CIM-schema-cim16#Ratio." + temp; else delete obj.secondaryRatio;
                temp = InfCommon.Ratio[document.getElementById (id + "_tertiaryRatio").value]; if (temp) obj.tertiaryRatio = "http://iec.ch/TC57/2013/CIM-schema-cim16#Ratio." + temp; else delete obj.tertiaryRatio;

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
                base.export_attribute (obj, "OldTransformerEndInfo", "windingInsulationKind", "windingInsulationKind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OldTransformerEndInfo_collapse" aria-expanded="true" aria-controls="OldTransformerEndInfo_collapse" style="margin-left: 10px;">OldTransformerEndInfo</a></legend>
                    <div id="OldTransformerEndInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetInfo.TransformerEndInfo.prototype.template.call (this) +
                    `
                    {{#dayOverLoadRating}}<div><b>dayOverLoadRating</b>: {{dayOverLoadRating}}</div>{{/dayOverLoadRating}}
                    {{#hourOverLoadRating}}<div><b>hourOverLoadRating</b>: {{hourOverLoadRating}}</div>{{/hourOverLoadRating}}
                    {{#solidInsulationWeight}}<div><b>solidInsulationWeight</b>: {{solidInsulationWeight}}</div>{{/solidInsulationWeight}}
                    {{#windingInsulationKind}}<div><b>windingInsulationKind</b>: {{windingInsulationKind}}</div>{{/windingInsulationKind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.windingInsulationKindWindingInsulationKind = [{ id: '', selected: (!obj.windingInsulationKind)}]; for (var property in WindingInsulationKind) obj.windingInsulationKindWindingInsulationKind.push ({ id: property, selected: obj.windingInsulationKind && obj.windingInsulationKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.windingInsulationKindWindingInsulationKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OldTransformerEndInfo_collapse" aria-expanded="true" aria-controls="{{id}}_OldTransformerEndInfo_collapse" style="margin-left: 10px;">OldTransformerEndInfo</a></legend>
                    <div id="{{id}}_OldTransformerEndInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetInfo.TransformerEndInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dayOverLoadRating'>dayOverLoadRating: </label><div class='col-sm-8'><input id='{{id}}_dayOverLoadRating' class='form-control' type='text'{{#dayOverLoadRating}} value='{{dayOverLoadRating}}'{{/dayOverLoadRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hourOverLoadRating'>hourOverLoadRating: </label><div class='col-sm-8'><input id='{{id}}_hourOverLoadRating' class='form-control' type='text'{{#hourOverLoadRating}} value='{{hourOverLoadRating}}'{{/hourOverLoadRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_solidInsulationWeight'>solidInsulationWeight: </label><div class='col-sm-8'><input id='{{id}}_solidInsulationWeight' class='form-control' type='text'{{#solidInsulationWeight}} value='{{solidInsulationWeight}}'{{/solidInsulationWeight}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_windingInsulationKind'>windingInsulationKind: </label><div class='col-sm-8'><select id='{{id}}_windingInsulationKind' class='form-control custom-select'>{{#windingInsulationKindWindingInsulationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/windingInsulationKindWindingInsulationKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OldTransformerEndInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dayOverLoadRating").value; if ("" != temp) obj.dayOverLoadRating = temp;
                temp = document.getElementById (id + "_hourOverLoadRating").value; if ("" != temp) obj.hourOverLoadRating = temp;
                temp = document.getElementById (id + "_solidInsulationWeight").value; if ("" != temp) obj.solidInsulationWeight = temp;
                temp = WindingInsulationKind[document.getElementById (id + "_windingInsulationKind").value]; if (temp) obj.windingInsulationKind = "http://iec.ch/TC57/2013/CIM-schema-cim16#WindingInsulationKind." + temp; else delete obj.windingInsulationKind;

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RecloserInfo_collapse" aria-expanded="true" aria-controls="RecloserInfo_collapse" style="margin-left: 10px;">RecloserInfo</a></legend>
                    <div id="RecloserInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + OldSwitchInfo.prototype.template.call (this) +
                    `
                    {{#groundTripCapable}}<div><b>groundTripCapable</b>: {{groundTripCapable}}</div>{{/groundTripCapable}}
                    {{#groundTripNormalEnabled}}<div><b>groundTripNormalEnabled</b>: {{groundTripNormalEnabled}}</div>{{/groundTripNormalEnabled}}
                    {{#groundTripRating}}<div><b>groundTripRating</b>: {{groundTripRating}}</div>{{/groundTripRating}}
                    {{#phaseTripRating}}<div><b>phaseTripRating</b>: {{phaseTripRating}}</div>{{/phaseTripRating}}
                    {{#recloseLockoutCount}}<div><b>recloseLockoutCount</b>: {{recloseLockoutCount}}</div>{{/recloseLockoutCount}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RecloserInfo_collapse" aria-expanded="true" aria-controls="{{id}}_RecloserInfo_collapse" style="margin-left: 10px;">RecloserInfo</a></legend>
                    <div id="{{id}}_RecloserInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + OldSwitchInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_groundTripCapable'>groundTripCapable: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_groundTripCapable' class='form-check-input' type='checkbox'{{#groundTripCapable}} checked{{/groundTripCapable}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_groundTripNormalEnabled'>groundTripNormalEnabled: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_groundTripNormalEnabled' class='form-check-input' type='checkbox'{{#groundTripNormalEnabled}} checked{{/groundTripNormalEnabled}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_groundTripRating'>groundTripRating: </label><div class='col-sm-8'><input id='{{id}}_groundTripRating' class='form-control' type='text'{{#groundTripRating}} value='{{groundTripRating}}'{{/groundTripRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseTripRating'>phaseTripRating: </label><div class='col-sm-8'><input id='{{id}}_phaseTripRating' class='form-control' type='text'{{#phaseTripRating}} value='{{phaseTripRating}}'{{/phaseTripRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_recloseLockoutCount'>recloseLockoutCount: </label><div class='col-sm-8'><input id='{{id}}_recloseLockoutCount' class='form-control' type='text'{{#recloseLockoutCount}} value='{{recloseLockoutCount}}'{{/recloseLockoutCount}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RecloserInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_groundTripCapable").checked; if (temp) obj.groundTripCapable = true;
                temp = document.getElementById (id + "_groundTripNormalEnabled").checked; if (temp) obj.groundTripNormalEnabled = true;
                temp = document.getElementById (id + "_groundTripRating").value; if ("" != temp) obj.groundTripRating = temp;
                temp = document.getElementById (id + "_phaseTripRating").value; if ("" != temp) obj.phaseTripRating = temp;
                temp = document.getElementById (id + "_recloseLockoutCount").value; if ("" != temp) obj.recloseLockoutCount = temp;

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BreakerInfo_collapse" aria-expanded="true" aria-controls="BreakerInfo_collapse" style="margin-left: 10px;">BreakerInfo</a></legend>
                    <div id="BreakerInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + OldSwitchInfo.prototype.template.call (this) +
                    `
                    {{#phaseTrip}}<div><b>phaseTrip</b>: {{phaseTrip}}</div>{{/phaseTrip}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BreakerInfo_collapse" aria-expanded="true" aria-controls="{{id}}_BreakerInfo_collapse" style="margin-left: 10px;">BreakerInfo</a></legend>
                    <div id="{{id}}_BreakerInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + OldSwitchInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseTrip'>phaseTrip: </label><div class='col-sm-8'><input id='{{id}}_phaseTrip' class='form-control' type='text'{{#phaseTrip}} value='{{phaseTrip}}'{{/phaseTrip}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "BreakerInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_phaseTrip").value; if ("" != temp) obj.phaseTrip = temp;

                return (obj);
            }
        }

        return (
            {
                OldTransformerTankInfo: OldTransformerTankInfo,
                PotentialTransformerInfo: PotentialTransformerInfo,
                OldSwitchInfo: OldSwitchInfo,
                FaultIndicatorInfo: FaultIndicatorInfo,
                AssetModelCatalogue: AssetModelCatalogue,
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