define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * This package contains the core information classes that support asset management applications that deal with the physical and lifecycle aspects of various network resources (as opposed to power system resource models defined in IEC61970::Wires package, which support network applications).
     *
     */
    function (base, Common, Core)
    {

        /**
         * Kind of corporate standard.
         *
         */
        var CorporateStandardKind =
        {
            standard: "standard",
            experimental: "experimental",
            underEvaluation: "underEvaluation",
            other: "other"
        };
        Object.freeze (CorporateStandardKind);

        /**
         * Kind of procedure.
         *
         */
        var ProcedureKind =
        {
            inspection: "inspection",
            diagnosis: "diagnosis",
            maintenance: "maintenance",
            test: "test",
            other: "other"
        };
        Object.freeze (ProcedureKind);

        /**
         * Usage for an asset model.
         *
         */
        var AssetModelUsageKind =
        {
            distributionOverhead: "distributionOverhead",
            distributionUnderground: "distributionUnderground",
            transmission: "transmission",
            substation: "substation",
            streetlight: "streetlight",
            customerSubstation: "customerSubstation",
            unknown: "unknown",
            other: "other"
        };
        Object.freeze (AssetModelUsageKind);

        /**
         * Kind of seal.
         *
         */
        var SealKind =
        {
            steel: "steel",
            lead: "lead",
            lock: "lock",
            other: "other"
        };
        Object.freeze (SealKind);

        /**
         * Kind of seal condition.
         *
         */
        var SealConditionKind =
        {
            locked: "locked",
            open: "open",
            broken: "broken",
            missing: "missing",
            other: "other"
        };
        Object.freeze (SealConditionKind);

        /**
         * Tangible resource of the utility, including power system equipment, various end devices, cabinets, buildings, etc.
         *
         * For electrical network equipment, the role of the asset is defined through PowerSystemResource and its subclasses, defined mainly in the Wires model (refer to IEC61970-301 and model package IEC61970::Wires). Asset description places emphasis on the physical characteristics of the equipment fulfilling that role.
         *
         */
        class Asset extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Asset;
                if (null == bucket)
                   cim_data.Asset = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Asset[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Asset";
                base.parse_element (/<cim:Asset.acceptanceTest>([\s\S]*?)<\/cim:Asset.acceptanceTest>/g, obj, "acceptanceTest", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.critical>([\s\S]*?)<\/cim:Asset.critical>/g, obj, "critical", base.to_boolean, sub, context);
                base.parse_element (/<cim:Asset.electronicAddress>([\s\S]*?)<\/cim:Asset.electronicAddress>/g, obj, "electronicAddress", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.initialCondition>([\s\S]*?)<\/cim:Asset.initialCondition>/g, obj, "initialCondition", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.initialLossOfLife>([\s\S]*?)<\/cim:Asset.initialLossOfLife>/g, obj, "initialLossOfLife", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.lifecycle>([\s\S]*?)<\/cim:Asset.lifecycle>/g, obj, "lifecycle", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.lotNumber>([\s\S]*?)<\/cim:Asset.lotNumber>/g, obj, "lotNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.purchasePrice>([\s\S]*?)<\/cim:Asset.purchasePrice>/g, obj, "purchasePrice", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.serialNumber>([\s\S]*?)<\/cim:Asset.serialNumber>/g, obj, "serialNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.status>([\s\S]*?)<\/cim:Asset.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.type>([\s\S]*?)<\/cim:Asset.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.utcNumber>([\s\S]*?)<\/cim:Asset.utcNumber>/g, obj, "utcNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:Asset.FinancialInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FinancialInfo", sub, context);
                base.parse_attribute (/<cim:Asset.ErpItemMaster\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpItemMaster", sub, context);
                base.parse_attribute (/<cim:Asset.AssetContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetContainer", sub, context);
                base.parse_attribute (/<cim:Asset.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
                base.parse_attribute (/<cim:Asset.ErpInventory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInventory", sub, context);
                base.parse_attribute (/<cim:Asset.AssetInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetInfo", sub, context);

                var bucket = context.parsed.Asset;
                if (null == bucket)
                   context.parsed.Asset = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Asset", "acceptanceTest", base.from_string, fields);
                base.export_element (obj, "Asset", "critical", base.from_boolean, fields);
                base.export_element (obj, "Asset", "electronicAddress", base.from_string, fields);
                base.export_element (obj, "Asset", "initialCondition", base.from_string, fields);
                base.export_element (obj, "Asset", "initialLossOfLife", base.from_string, fields);
                base.export_element (obj, "Asset", "lifecycle", base.from_string, fields);
                base.export_element (obj, "Asset", "lotNumber", base.from_string, fields);
                base.export_element (obj, "Asset", "purchasePrice", base.from_string, fields);
                base.export_element (obj, "Asset", "serialNumber", base.from_string, fields);
                base.export_element (obj, "Asset", "status", base.from_string, fields);
                base.export_element (obj, "Asset", "type", base.from_string, fields);
                base.export_element (obj, "Asset", "utcNumber", base.from_string, fields);
                base.export_attribute (obj, "Asset", "FinancialInfo", fields);
                base.export_attribute (obj, "Asset", "ErpItemMaster", fields);
                base.export_attribute (obj, "Asset", "AssetContainer", fields);
                base.export_attribute (obj, "Asset", "Location", fields);
                base.export_attribute (obj, "Asset", "ErpInventory", fields);
                base.export_attribute (obj, "Asset", "AssetInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Asset_collapse" aria-expanded="true" aria-controls="Asset_collapse" style="margin-left: 10px;">Asset</a></legend>
                    <div id="Asset_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#acceptanceTest}}<div><b>acceptanceTest</b>: {{acceptanceTest}}</div>{{/acceptanceTest}}
                    {{#critical}}<div><b>critical</b>: {{critical}}</div>{{/critical}}
                    {{#electronicAddress}}<div><b>electronicAddress</b>: {{electronicAddress}}</div>{{/electronicAddress}}
                    {{#initialCondition}}<div><b>initialCondition</b>: {{initialCondition}}</div>{{/initialCondition}}
                    {{#initialLossOfLife}}<div><b>initialLossOfLife</b>: {{initialLossOfLife}}</div>{{/initialLossOfLife}}
                    {{#lifecycle}}<div><b>lifecycle</b>: {{lifecycle}}</div>{{/lifecycle}}
                    {{#lotNumber}}<div><b>lotNumber</b>: {{lotNumber}}</div>{{/lotNumber}}
                    {{#purchasePrice}}<div><b>purchasePrice</b>: {{purchasePrice}}</div>{{/purchasePrice}}
                    {{#serialNumber}}<div><b>serialNumber</b>: {{serialNumber}}</div>{{/serialNumber}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#utcNumber}}<div><b>utcNumber</b>: {{utcNumber}}</div>{{/utcNumber}}
                    {{#Location}}<div><b>Location</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Location}}&quot;);})'>{{Location}}</a></div>{{/Location}}
                    {{#FinancialInfo}}<div><b>FinancialInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FinancialInfo}}&quot;);})'>{{FinancialInfo}}</a></div>{{/FinancialInfo}}
                    {{#ErpItemMaster}}<div><b>ErpItemMaster</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpItemMaster}}&quot;);})'>{{ErpItemMaster}}</a></div>{{/ErpItemMaster}}
                    {{#AssetContainer}}<div><b>AssetContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetContainer}}&quot;);})'>{{AssetContainer}}</a></div>{{/AssetContainer}}
                    {{#ErpInventory}}<div><b>ErpInventory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpInventory}}&quot;);})'>{{ErpInventory}}</a></div>{{/ErpInventory}}
                    {{#AssetInfo}}<div><b>AssetInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetInfo}}&quot;);})'>{{AssetInfo}}</a></div>{{/AssetInfo}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Asset_collapse" aria-expanded="true" aria-controls="Asset_collapse" style="margin-left: 10px;">Asset</a></legend>
                    <div id="Asset_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='acceptanceTest'>acceptanceTest: </label><div class='col-sm-8'><input id='acceptanceTest' class='form-control' type='text'{{#acceptanceTest}} value='{{acceptanceTest}}'{{/acceptanceTest}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='critical'>critical: </label><div class='col-sm-8'><input id='critical' class='form-check-input' type='checkbox'{{#critical}} checked{{/critical}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='electronicAddress'>electronicAddress: </label><div class='col-sm-8'><input id='electronicAddress' class='form-control' type='text'{{#electronicAddress}} value='{{electronicAddress}}'{{/electronicAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='initialCondition'>initialCondition: </label><div class='col-sm-8'><input id='initialCondition' class='form-control' type='text'{{#initialCondition}} value='{{initialCondition}}'{{/initialCondition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='initialLossOfLife'>initialLossOfLife: </label><div class='col-sm-8'><input id='initialLossOfLife' class='form-control' type='text'{{#initialLossOfLife}} value='{{initialLossOfLife}}'{{/initialLossOfLife}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lifecycle'>lifecycle: </label><div class='col-sm-8'><input id='lifecycle' class='form-control' type='text'{{#lifecycle}} value='{{lifecycle}}'{{/lifecycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lotNumber'>lotNumber: </label><div class='col-sm-8'><input id='lotNumber' class='form-control' type='text'{{#lotNumber}} value='{{lotNumber}}'{{/lotNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='purchasePrice'>purchasePrice: </label><div class='col-sm-8'><input id='purchasePrice' class='form-control' type='text'{{#purchasePrice}} value='{{purchasePrice}}'{{/purchasePrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='serialNumber'>serialNumber: </label><div class='col-sm-8'><input id='serialNumber' class='form-control' type='text'{{#serialNumber}} value='{{serialNumber}}'{{/serialNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='utcNumber'>utcNumber: </label><div class='col-sm-8'><input id='utcNumber' class='form-control' type='text'{{#utcNumber}} value='{{utcNumber}}'{{/utcNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Location'>Location: </label><div class='col-sm-8'><input id='Location' class='form-control' type='text'{{#Location}} value='{{Location}}'{{/Location}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='FinancialInfo'>FinancialInfo: </label><div class='col-sm-8'><input id='FinancialInfo' class='form-control' type='text'{{#FinancialInfo}} value='{{FinancialInfo}}'{{/FinancialInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpItemMaster'>ErpItemMaster: </label><div class='col-sm-8'><input id='ErpItemMaster' class='form-control' type='text'{{#ErpItemMaster}} value='{{ErpItemMaster}}'{{/ErpItemMaster}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AssetContainer'>AssetContainer: </label><div class='col-sm-8'><input id='AssetContainer' class='form-control' type='text'{{#AssetContainer}} value='{{AssetContainer}}'{{/AssetContainer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpInventory'>ErpInventory: </label><div class='col-sm-8'><input id='ErpInventory' class='form-control' type='text'{{#ErpInventory}} value='{{ErpInventory}}'{{/ErpInventory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AssetInfo'>AssetInfo: </label><div class='col-sm-8'><input id='AssetInfo' class='form-control' type='text'{{#AssetInfo}} value='{{AssetInfo}}'{{/AssetInfo}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Acceptance test for assets.
         *
         */
        class AcceptanceTest extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AcceptanceTest;
                if (null == bucket)
                   cim_data.AcceptanceTest = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AcceptanceTest[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AcceptanceTest";
                base.parse_element (/<cim:AcceptanceTest.dateTime>([\s\S]*?)<\/cim:AcceptanceTest.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:AcceptanceTest.success>([\s\S]*?)<\/cim:AcceptanceTest.success>/g, obj, "success", base.to_boolean, sub, context);
                base.parse_element (/<cim:AcceptanceTest.type>([\s\S]*?)<\/cim:AcceptanceTest.type>/g, obj, "type", base.to_string, sub, context);

                var bucket = context.parsed.AcceptanceTest;
                if (null == bucket)
                   context.parsed.AcceptanceTest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AcceptanceTest", "dateTime", base.from_datetime, fields);
                base.export_element (obj, "AcceptanceTest", "success", base.from_boolean, fields);
                base.export_element (obj, "AcceptanceTest", "type", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AcceptanceTest_collapse" aria-expanded="true" aria-controls="AcceptanceTest_collapse" style="margin-left: 10px;">AcceptanceTest</a></legend>
                    <div id="AcceptanceTest_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
                    {{#success}}<div><b>success</b>: {{success}}</div>{{/success}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AcceptanceTest_collapse" aria-expanded="true" aria-controls="AcceptanceTest_collapse" style="margin-left: 10px;">AcceptanceTest</a></legend>
                    <div id="AcceptanceTest_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dateTime'>dateTime: </label><div class='col-sm-8'><input id='dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='success'>success: </label><div class='col-sm-8'><input id='success' class='form-check-input' type='checkbox'{{#success}} checked{{/success}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Set of attributes of an asset, representing typical datasheet information of a physical device that can be instantiated and shared in different data exchange contexts:
         * - as attributes of an asset instance (installed or in stock)
         * - as attributes of an asset model (product by a manufacturer)
         *
         * - as attributes of a type asset (generic type of an asset as used in designs/extension planning).
         *
         */
        class AssetInfo extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AssetInfo;
                if (null == bucket)
                   cim_data.AssetInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AssetInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AssetInfo";
                base.parse_attribute (/<cim:AssetInfo.AssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModel", sub, context);

                var bucket = context.parsed.AssetInfo;
                if (null == bucket)
                   context.parsed.AssetInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AssetInfo", "AssetModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetInfo_collapse" aria-expanded="true" aria-controls="AssetInfo_collapse" style="margin-left: 10px;">AssetInfo</a></legend>
                    <div id="AssetInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#AssetModel}}<div><b>AssetModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetModel}}&quot;);})'>{{AssetModel}}</a></div>{{/AssetModel}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetInfo_collapse" aria-expanded="true" aria-controls="AssetInfo_collapse" style="margin-left: 10px;">AssetInfo</a></legend>
                    <div id="AssetInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AssetModel'>AssetModel: </label><div class='col-sm-8'><input id='AssetModel' class='form-control' type='text'{{#AssetModel}} value='{{AssetModel}}'{{/AssetModel}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Role an organisation plays with respect to asset.
         *
         */
        class AssetOrganisationRole extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AssetOrganisationRole;
                if (null == bucket)
                   cim_data.AssetOrganisationRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AssetOrganisationRole[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "AssetOrganisationRole";

                var bucket = context.parsed.AssetOrganisationRole;
                if (null == bucket)
                   context.parsed.AssetOrganisationRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetOrganisationRole_collapse" aria-expanded="true" aria-controls="AssetOrganisationRole_collapse" style="margin-left: 10px;">AssetOrganisationRole</a></legend>
                    <div id="AssetOrganisationRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetOrganisationRole_collapse" aria-expanded="true" aria-controls="AssetOrganisationRole_collapse" style="margin-left: 10px;">AssetOrganisationRole</a></legend>
                    <div id="AssetOrganisationRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Organisation that manufactures asset products.
         *
         */
        class Manufacturer extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Manufacturer;
                if (null == bucket)
                   cim_data.Manufacturer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Manufacturer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "Manufacturer";

                var bucket = context.parsed.Manufacturer;
                if (null == bucket)
                   context.parsed.Manufacturer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Manufacturer_collapse" aria-expanded="true" aria-controls="Manufacturer_collapse" style="margin-left: 10px;">Manufacturer</a></legend>
                    <div id="Manufacturer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Manufacturer_collapse" aria-expanded="true" aria-controls="Manufacturer_collapse" style="margin-left: 10px;">Manufacturer</a></legend>
                    <div id="Manufacturer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A data set recorded each time a procedure is executed.
         *
         * Observed results are captured in associated measurement values and/or values for properties relevant to the type of procedure performed.
         *
         */
        class ProcedureDataSet extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ProcedureDataSet;
                if (null == bucket)
                   cim_data.ProcedureDataSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProcedureDataSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "ProcedureDataSet";
                base.parse_element (/<cim:ProcedureDataSet.completedDateTime>([\s\S]*?)<\/cim:ProcedureDataSet.completedDateTime>/g, obj, "completedDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:ProcedureDataSet.Procedure\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Procedure", sub, context);

                var bucket = context.parsed.ProcedureDataSet;
                if (null == bucket)
                   context.parsed.ProcedureDataSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProcedureDataSet", "completedDateTime", base.from_datetime, fields);
                base.export_attribute (obj, "ProcedureDataSet", "Procedure", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProcedureDataSet_collapse" aria-expanded="true" aria-controls="ProcedureDataSet_collapse" style="margin-left: 10px;">ProcedureDataSet</a></legend>
                    <div id="ProcedureDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#completedDateTime}}<div><b>completedDateTime</b>: {{completedDateTime}}</div>{{/completedDateTime}}
                    {{#Procedure}}<div><b>Procedure</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Procedure}}&quot;);})'>{{Procedure}}</a></div>{{/Procedure}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProcedureDataSet_collapse" aria-expanded="true" aria-controls="ProcedureDataSet_collapse" style="margin-left: 10px;">ProcedureDataSet</a></legend>
                    <div id="ProcedureDataSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='completedDateTime'>completedDateTime: </label><div class='col-sm-8'><input id='completedDateTime' class='form-control' type='text'{{#completedDateTime}} value='{{completedDateTime}}'{{/completedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Procedure'>Procedure: </label><div class='col-sm-8'><input id='Procedure' class='form-control' type='text'{{#Procedure}} value='{{Procedure}}'{{/Procedure}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Function performed by an asset.
         *
         */
        class AssetFunction extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AssetFunction;
                if (null == bucket)
                   cim_data.AssetFunction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AssetFunction[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AssetFunction";
                base.parse_element (/<cim:AssetFunction.configID>([\s\S]*?)<\/cim:AssetFunction.configID>/g, obj, "configID", base.to_string, sub, context);
                base.parse_element (/<cim:AssetFunction.firmwareID>([\s\S]*?)<\/cim:AssetFunction.firmwareID>/g, obj, "firmwareID", base.to_string, sub, context);
                base.parse_element (/<cim:AssetFunction.hardwareID>([\s\S]*?)<\/cim:AssetFunction.hardwareID>/g, obj, "hardwareID", base.to_string, sub, context);
                base.parse_element (/<cim:AssetFunction.password>([\s\S]*?)<\/cim:AssetFunction.password>/g, obj, "password", base.to_string, sub, context);
                base.parse_element (/<cim:AssetFunction.programID>([\s\S]*?)<\/cim:AssetFunction.programID>/g, obj, "programID", base.to_string, sub, context);

                var bucket = context.parsed.AssetFunction;
                if (null == bucket)
                   context.parsed.AssetFunction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "AssetFunction", "configID", base.from_string, fields);
                base.export_element (obj, "AssetFunction", "firmwareID", base.from_string, fields);
                base.export_element (obj, "AssetFunction", "hardwareID", base.from_string, fields);
                base.export_element (obj, "AssetFunction", "password", base.from_string, fields);
                base.export_element (obj, "AssetFunction", "programID", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetFunction_collapse" aria-expanded="true" aria-controls="AssetFunction_collapse" style="margin-left: 10px;">AssetFunction</a></legend>
                    <div id="AssetFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#configID}}<div><b>configID</b>: {{configID}}</div>{{/configID}}
                    {{#firmwareID}}<div><b>firmwareID</b>: {{firmwareID}}</div>{{/firmwareID}}
                    {{#hardwareID}}<div><b>hardwareID</b>: {{hardwareID}}</div>{{/hardwareID}}
                    {{#password}}<div><b>password</b>: {{password}}</div>{{/password}}
                    {{#programID}}<div><b>programID</b>: {{programID}}</div>{{/programID}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetFunction_collapse" aria-expanded="true" aria-controls="AssetFunction_collapse" style="margin-left: 10px;">AssetFunction</a></legend>
                    <div id="AssetFunction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='configID'>configID: </label><div class='col-sm-8'><input id='configID' class='form-control' type='text'{{#configID}} value='{{configID}}'{{/configID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='firmwareID'>firmwareID: </label><div class='col-sm-8'><input id='firmwareID' class='form-control' type='text'{{#firmwareID}} value='{{firmwareID}}'{{/firmwareID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hardwareID'>hardwareID: </label><div class='col-sm-8'><input id='hardwareID' class='form-control' type='text'{{#hardwareID}} value='{{hardwareID}}'{{/hardwareID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='password'>password: </label><div class='col-sm-8'><input id='password' class='form-control' type='text'{{#password}} value='{{password}}'{{/password}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='programID'>programID: </label><div class='col-sm-8'><input id='programID' class='form-control' type='text'{{#programID}} value='{{programID}}'{{/programID}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Physically controls access to AssetContainers.
         *
         */
        class Seal extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Seal;
                if (null == bucket)
                   cim_data.Seal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Seal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Seal";
                base.parse_element (/<cim:Seal.appliedDateTime>([\s\S]*?)<\/cim:Seal.appliedDateTime>/g, obj, "appliedDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Seal.condition\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "condition", sub, context);
                base.parse_attribute (/<cim:Seal.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Seal.sealNumber>([\s\S]*?)<\/cim:Seal.sealNumber>/g, obj, "sealNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:Seal.AssetContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetContainer", sub, context);

                var bucket = context.parsed.Seal;
                if (null == bucket)
                   context.parsed.Seal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Seal", "appliedDateTime", base.from_datetime, fields);
                base.export_element (obj, "Seal", "condition", base.from_string, fields);
                base.export_element (obj, "Seal", "kind", base.from_string, fields);
                base.export_element (obj, "Seal", "sealNumber", base.from_string, fields);
                base.export_attribute (obj, "Seal", "AssetContainer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Seal_collapse" aria-expanded="true" aria-controls="Seal_collapse" style="margin-left: 10px;">Seal</a></legend>
                    <div id="Seal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#appliedDateTime}}<div><b>appliedDateTime</b>: {{appliedDateTime}}</div>{{/appliedDateTime}}
                    {{#condition}}<div><b>condition</b>: {{condition}}</div>{{/condition}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#sealNumber}}<div><b>sealNumber</b>: {{sealNumber}}</div>{{/sealNumber}}
                    {{#AssetContainer}}<div><b>AssetContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetContainer}}&quot;);})'>{{AssetContainer}}</a></div>{{/AssetContainer}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.SealConditionKind = []; if (!obj.condition) obj.SealConditionKind.push ({ id: '', selected: true}); for (var property in SealConditionKind) obj.SealConditionKind.push ({ id: property, selected: obj.condition && obj.condition.endsWith ('.' + property)});
                obj.SealKind = []; if (!obj.kind) obj.SealKind.push ({ id: '', selected: true}); for (var property in SealKind) obj.SealKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SealConditionKind;
                delete obj.SealKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Seal_collapse" aria-expanded="true" aria-controls="Seal_collapse" style="margin-left: 10px;">Seal</a></legend>
                    <div id="Seal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='appliedDateTime'>appliedDateTime: </label><div class='col-sm-8'><input id='appliedDateTime' class='form-control' type='text'{{#appliedDateTime}} value='{{appliedDateTime}}'{{/appliedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='condition'>condition: </label><div class='col-sm-8'><select id='condition' class='form-control'>{{#SealConditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SealConditionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#SealKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SealKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sealNumber'>sealNumber: </label><div class='col-sm-8'><input id='sealNumber' class='form-control' type='text'{{#sealNumber}} value='{{sealNumber}}'{{/sealNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AssetContainer'>AssetContainer: </label><div class='col-sm-8'><input id='AssetContainer' class='form-control' type='text'{{#AssetContainer}} value='{{AssetContainer}}'{{/AssetContainer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Potential hazard related to the location of an asset.
         *
         * Examples are trees growing under overhead power lines, a park being located by a substation (i.e., children climb fence to recover a ball), a lake near an overhead distribution line (fishing pole/line contacting power lines), dangerous neighbour, etc.
         *
         */
        class AssetLocationHazard extends Common.Hazard
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AssetLocationHazard;
                if (null == bucket)
                   cim_data.AssetLocationHazard = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AssetLocationHazard[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Hazard.prototype.parse.call (this, context, sub);
                obj.cls = "AssetLocationHazard";

                var bucket = context.parsed.AssetLocationHazard;
                if (null == bucket)
                   context.parsed.AssetLocationHazard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Hazard.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetLocationHazard_collapse" aria-expanded="true" aria-controls="AssetLocationHazard_collapse" style="margin-left: 10px;">AssetLocationHazard</a></legend>
                    <div id="AssetLocationHazard_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Hazard.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetLocationHazard_collapse" aria-expanded="true" aria-controls="AssetLocationHazard_collapse" style="margin-left: 10px;">AssetLocationHazard</a></legend>
                    <div id="AssetLocationHazard_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Hazard.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Dates for lifecycle events of an asset.
         *
         */
        class LifecycleDate extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LifecycleDate;
                if (null == bucket)
                   cim_data.LifecycleDate = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LifecycleDate[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LifecycleDate";
                base.parse_element (/<cim:LifecycleDate.installationDate>([\s\S]*?)<\/cim:LifecycleDate.installationDate>/g, obj, "installationDate", base.to_string, sub, context);
                base.parse_element (/<cim:LifecycleDate.manufacturedDate>([\s\S]*?)<\/cim:LifecycleDate.manufacturedDate>/g, obj, "manufacturedDate", base.to_string, sub, context);
                base.parse_element (/<cim:LifecycleDate.purchaseDate>([\s\S]*?)<\/cim:LifecycleDate.purchaseDate>/g, obj, "purchaseDate", base.to_string, sub, context);
                base.parse_element (/<cim:LifecycleDate.receivedDate>([\s\S]*?)<\/cim:LifecycleDate.receivedDate>/g, obj, "receivedDate", base.to_string, sub, context);
                base.parse_element (/<cim:LifecycleDate.removalDate>([\s\S]*?)<\/cim:LifecycleDate.removalDate>/g, obj, "removalDate", base.to_string, sub, context);
                base.parse_element (/<cim:LifecycleDate.retiredDate>([\s\S]*?)<\/cim:LifecycleDate.retiredDate>/g, obj, "retiredDate", base.to_string, sub, context);

                var bucket = context.parsed.LifecycleDate;
                if (null == bucket)
                   context.parsed.LifecycleDate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "LifecycleDate", "installationDate", base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "manufacturedDate", base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "purchaseDate", base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "receivedDate", base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "removalDate", base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "retiredDate", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LifecycleDate_collapse" aria-expanded="true" aria-controls="LifecycleDate_collapse" style="margin-left: 10px;">LifecycleDate</a></legend>
                    <div id="LifecycleDate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#installationDate}}<div><b>installationDate</b>: {{installationDate}}</div>{{/installationDate}}
                    {{#manufacturedDate}}<div><b>manufacturedDate</b>: {{manufacturedDate}}</div>{{/manufacturedDate}}
                    {{#purchaseDate}}<div><b>purchaseDate</b>: {{purchaseDate}}</div>{{/purchaseDate}}
                    {{#receivedDate}}<div><b>receivedDate</b>: {{receivedDate}}</div>{{/receivedDate}}
                    {{#removalDate}}<div><b>removalDate</b>: {{removalDate}}</div>{{/removalDate}}
                    {{#retiredDate}}<div><b>retiredDate</b>: {{retiredDate}}</div>{{/retiredDate}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LifecycleDate_collapse" aria-expanded="true" aria-controls="LifecycleDate_collapse" style="margin-left: 10px;">LifecycleDate</a></legend>
                    <div id="LifecycleDate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='installationDate'>installationDate: </label><div class='col-sm-8'><input id='installationDate' class='form-control' type='text'{{#installationDate}} value='{{installationDate}}'{{/installationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='manufacturedDate'>manufacturedDate: </label><div class='col-sm-8'><input id='manufacturedDate' class='form-control' type='text'{{#manufacturedDate}} value='{{manufacturedDate}}'{{/manufacturedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='purchaseDate'>purchaseDate: </label><div class='col-sm-8'><input id='purchaseDate' class='form-control' type='text'{{#purchaseDate}} value='{{purchaseDate}}'{{/purchaseDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='receivedDate'>receivedDate: </label><div class='col-sm-8'><input id='receivedDate' class='form-control' type='text'{{#receivedDate}} value='{{receivedDate}}'{{/receivedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='removalDate'>removalDate: </label><div class='col-sm-8'><input id='removalDate' class='form-control' type='text'{{#removalDate}} value='{{removalDate}}'{{/removalDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='retiredDate'>retiredDate: </label><div class='col-sm-8'><input id='retiredDate' class='form-control' type='text'{{#retiredDate}} value='{{retiredDate}}'{{/retiredDate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Model of an asset, either a product of a specific manufacturer or a generic asset model or material item.
         *
         * Datasheet characteristics are available through the associated AssetInfo subclass and can be shared with asset or power system resource instances.
         *
         */
        class AssetModel extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AssetModel;
                if (null == bucket)
                   cim_data.AssetModel = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AssetModel[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AssetModel";
                base.parse_attribute (/<cim:AssetModel.AssetInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetInfo", sub, context);

                var bucket = context.parsed.AssetModel;
                if (null == bucket)
                   context.parsed.AssetModel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AssetModel", "AssetInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetModel_collapse" aria-expanded="true" aria-controls="AssetModel_collapse" style="margin-left: 10px;">AssetModel</a></legend>
                    <div id="AssetModel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#AssetInfo}}<div><b>AssetInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetInfo}}&quot;);})'>{{AssetInfo}}</a></div>{{/AssetInfo}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetModel_collapse" aria-expanded="true" aria-controls="AssetModel_collapse" style="margin-left: 10px;">AssetModel</a></legend>
                    <div id="AssetModel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AssetInfo'>AssetInfo: </label><div class='col-sm-8'><input id='AssetInfo' class='form-control' type='text'{{#AssetInfo}} value='{{AssetInfo}}'{{/AssetInfo}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Documented procedure for various types of work or work tasks on assets.
         *
         */
        class Procedure extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Procedure;
                if (null == bucket)
                   cim_data.Procedure = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Procedure[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Procedure";
                base.parse_element (/<cim:Procedure.instruction>([\s\S]*?)<\/cim:Procedure.instruction>/g, obj, "instruction", base.to_string, sub, context);
                base.parse_attribute (/<cim:Procedure.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Procedure.sequenceNumber>([\s\S]*?)<\/cim:Procedure.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);

                var bucket = context.parsed.Procedure;
                if (null == bucket)
                   context.parsed.Procedure = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Procedure", "instruction", base.from_string, fields);
                base.export_element (obj, "Procedure", "kind", base.from_string, fields);
                base.export_element (obj, "Procedure", "sequenceNumber", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Procedure_collapse" aria-expanded="true" aria-controls="Procedure_collapse" style="margin-left: 10px;">Procedure</a></legend>
                    <div id="Procedure_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#instruction}}<div><b>instruction</b>: {{instruction}}</div>{{/instruction}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ProcedureKind = []; if (!obj.kind) obj.ProcedureKind.push ({ id: '', selected: true}); for (var property in ProcedureKind) obj.ProcedureKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProcedureKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Procedure_collapse" aria-expanded="true" aria-controls="Procedure_collapse" style="margin-left: 10px;">Procedure</a></legend>
                    <div id="Procedure_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='instruction'>instruction: </label><div class='col-sm-8'><input id='instruction' class='form-control' type='text'{{#instruction}} value='{{instruction}}'{{/instruction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#ProcedureKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ProcedureKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Asset that is aggregation of other assets such as conductors, transformers, switchgear, land, fences, buildings, equipment, vehicles, etc.
         *
         */
        class AssetContainer extends Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AssetContainer;
                if (null == bucket)
                   cim_data.AssetContainer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AssetContainer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Asset.prototype.parse.call (this, context, sub);
                obj.cls = "AssetContainer";

                var bucket = context.parsed.AssetContainer;
                if (null == bucket)
                   context.parsed.AssetContainer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Asset.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetContainer_collapse" aria-expanded="true" aria-controls="AssetContainer_collapse" style="margin-left: 10px;">AssetContainer</a></legend>
                    <div id="AssetContainer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetContainer_collapse" aria-expanded="true" aria-controls="AssetContainer_collapse" style="margin-left: 10px;">AssetContainer</a></legend>
                    <div id="AssetContainer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Communication media such as fibre optic cable, power-line, telephone, etc.
         *
         */
        class ComMedia extends Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ComMedia;
                if (null == bucket)
                   cim_data.ComMedia = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ComMedia[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Asset.prototype.parse.call (this, context, sub);
                obj.cls = "ComMedia";

                var bucket = context.parsed.ComMedia;
                if (null == bucket)
                   context.parsed.ComMedia = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Asset.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ComMedia_collapse" aria-expanded="true" aria-controls="ComMedia_collapse" style="margin-left: 10px;">ComMedia</a></legend>
                    <div id="ComMedia_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ComMedia_collapse" aria-expanded="true" aria-controls="ComMedia_collapse" style="margin-left: 10px;">ComMedia</a></legend>
                    <div id="ComMedia_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Organisation that is a user of the asset.
         *
         */
        class AssetUser extends AssetOrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AssetUser;
                if (null == bucket)
                   cim_data.AssetUser = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AssetUser[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AssetOrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "AssetUser";

                var bucket = context.parsed.AssetUser;
                if (null == bucket)
                   context.parsed.AssetUser = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AssetOrganisationRole.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetUser_collapse" aria-expanded="true" aria-controls="AssetUser_collapse" style="margin-left: 10px;">AssetUser</a></legend>
                    <div id="AssetUser_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetUser_collapse" aria-expanded="true" aria-controls="AssetUser_collapse" style="margin-left: 10px;">AssetUser</a></legend>
                    <div id="AssetUser_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Owner of the asset.
         *
         */
        class AssetOwner extends AssetOrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AssetOwner;
                if (null == bucket)
                   cim_data.AssetOwner = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AssetOwner[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AssetOrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "AssetOwner";

                var bucket = context.parsed.AssetOwner;
                if (null == bucket)
                   context.parsed.AssetOwner = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AssetOrganisationRole.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetOwner_collapse" aria-expanded="true" aria-controls="AssetOwner_collapse" style="margin-left: 10px;">AssetOwner</a></legend>
                    <div id="AssetOwner_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetOwner_collapse" aria-expanded="true" aria-controls="AssetOwner_collapse" style="margin-left: 10px;">AssetOwner</a></legend>
                    <div id="AssetOwner_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Organisation that maintains assets.
         *
         */
        class Maintainer extends AssetOrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Maintainer;
                if (null == bucket)
                   cim_data.Maintainer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Maintainer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AssetOrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "Maintainer";

                var bucket = context.parsed.Maintainer;
                if (null == bucket)
                   context.parsed.Maintainer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AssetOrganisationRole.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Maintainer_collapse" aria-expanded="true" aria-controls="Maintainer_collapse" style="margin-left: 10px;">Maintainer</a></legend>
                    <div id="Maintainer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Maintainer_collapse" aria-expanded="true" aria-controls="Maintainer_collapse" style="margin-left: 10px;">Maintainer</a></legend>
                    <div id="Maintainer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Asset model by a specific manufacturer.
         *
         */
        class ProductAssetModel extends AssetModel
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ProductAssetModel;
                if (null == bucket)
                   cim_data.ProductAssetModel = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProductAssetModel[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AssetModel.prototype.parse.call (this, context, sub);
                obj.cls = "ProductAssetModel";
                base.parse_attribute (/<cim:ProductAssetModel.corporateStandardKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "corporateStandardKind", sub, context);
                base.parse_element (/<cim:ProductAssetModel.modelNumber>([\s\S]*?)<\/cim:ProductAssetModel.modelNumber>/g, obj, "modelNumber", base.to_string, sub, context);
                base.parse_element (/<cim:ProductAssetModel.modelVersion>([\s\S]*?)<\/cim:ProductAssetModel.modelVersion>/g, obj, "modelVersion", base.to_string, sub, context);
                base.parse_attribute (/<cim:ProductAssetModel.usageKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "usageKind", sub, context);
                base.parse_element (/<cim:ProductAssetModel.weightTotal>([\s\S]*?)<\/cim:ProductAssetModel.weightTotal>/g, obj, "weightTotal", base.to_string, sub, context);
                base.parse_attribute (/<cim:ProductAssetModel.GenericAssetModelOrMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenericAssetModelOrMaterial", sub, context);
                base.parse_attribute (/<cim:ProductAssetModel.Manufacturer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Manufacturer", sub, context);

                var bucket = context.parsed.ProductAssetModel;
                if (null == bucket)
                   context.parsed.ProductAssetModel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AssetModel.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProductAssetModel", "corporateStandardKind", base.from_string, fields);
                base.export_element (obj, "ProductAssetModel", "modelNumber", base.from_string, fields);
                base.export_element (obj, "ProductAssetModel", "modelVersion", base.from_string, fields);
                base.export_element (obj, "ProductAssetModel", "usageKind", base.from_string, fields);
                base.export_element (obj, "ProductAssetModel", "weightTotal", base.from_string, fields);
                base.export_attribute (obj, "ProductAssetModel", "GenericAssetModelOrMaterial", fields);
                base.export_attribute (obj, "ProductAssetModel", "Manufacturer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProductAssetModel_collapse" aria-expanded="true" aria-controls="ProductAssetModel_collapse" style="margin-left: 10px;">ProductAssetModel</a></legend>
                    <div id="ProductAssetModel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AssetModel.prototype.template.call (this) +
                    `
                    {{#corporateStandardKind}}<div><b>corporateStandardKind</b>: {{corporateStandardKind}}</div>{{/corporateStandardKind}}
                    {{#modelNumber}}<div><b>modelNumber</b>: {{modelNumber}}</div>{{/modelNumber}}
                    {{#modelVersion}}<div><b>modelVersion</b>: {{modelVersion}}</div>{{/modelVersion}}
                    {{#usageKind}}<div><b>usageKind</b>: {{usageKind}}</div>{{/usageKind}}
                    {{#weightTotal}}<div><b>weightTotal</b>: {{weightTotal}}</div>{{/weightTotal}}
                    {{#GenericAssetModelOrMaterial}}<div><b>GenericAssetModelOrMaterial</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GenericAssetModelOrMaterial}}&quot;);})'>{{GenericAssetModelOrMaterial}}</a></div>{{/GenericAssetModelOrMaterial}}
                    {{#Manufacturer}}<div><b>Manufacturer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Manufacturer}}&quot;);})'>{{Manufacturer}}</a></div>{{/Manufacturer}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.CorporateStandardKind = []; if (!obj.corporateStandardKind) obj.CorporateStandardKind.push ({ id: '', selected: true}); for (var property in CorporateStandardKind) obj.CorporateStandardKind.push ({ id: property, selected: obj.corporateStandardKind && obj.corporateStandardKind.endsWith ('.' + property)});
                obj.AssetModelUsageKind = []; if (!obj.usageKind) obj.AssetModelUsageKind.push ({ id: '', selected: true}); for (var property in AssetModelUsageKind) obj.AssetModelUsageKind.push ({ id: property, selected: obj.usageKind && obj.usageKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CorporateStandardKind;
                delete obj.AssetModelUsageKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProductAssetModel_collapse" aria-expanded="true" aria-controls="ProductAssetModel_collapse" style="margin-left: 10px;">ProductAssetModel</a></legend>
                    <div id="ProductAssetModel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + AssetModel.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='corporateStandardKind'>corporateStandardKind: </label><div class='col-sm-8'><select id='corporateStandardKind' class='form-control'>{{#CorporateStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/CorporateStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='modelNumber'>modelNumber: </label><div class='col-sm-8'><input id='modelNumber' class='form-control' type='text'{{#modelNumber}} value='{{modelNumber}}'{{/modelNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='modelVersion'>modelVersion: </label><div class='col-sm-8'><input id='modelVersion' class='form-control' type='text'{{#modelVersion}} value='{{modelVersion}}'{{/modelVersion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='usageKind'>usageKind: </label><div class='col-sm-8'><select id='usageKind' class='form-control'>{{#AssetModelUsageKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/AssetModelUsageKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='weightTotal'>weightTotal: </label><div class='col-sm-8'><input id='weightTotal' class='form-control' type='text'{{#weightTotal}} value='{{weightTotal}}'{{/weightTotal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GenericAssetModelOrMaterial'>GenericAssetModelOrMaterial: </label><div class='col-sm-8'><input id='GenericAssetModelOrMaterial' class='form-control' type='text'{{#GenericAssetModelOrMaterial}} value='{{GenericAssetModelOrMaterial}}'{{/GenericAssetModelOrMaterial}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Manufacturer'>Manufacturer: </label><div class='col-sm-8'><input id='Manufacturer' class='form-control' type='text'{{#Manufacturer}} value='{{Manufacturer}}'{{/Manufacturer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        return (
            {
                Maintainer: Maintainer,
                AssetOwner: AssetOwner,
                LifecycleDate: LifecycleDate,
                Asset: Asset,
                ProductAssetModel: ProductAssetModel,
                AssetModel: AssetModel,
                ProcedureDataSet: ProcedureDataSet,
                AssetOrganisationRole: AssetOrganisationRole,
                AssetFunction: AssetFunction,
                Seal: Seal,
                AcceptanceTest: AcceptanceTest,
                AssetInfo: AssetInfo,
                AssetUser: AssetUser,
                AssetContainer: AssetContainer,
                AssetLocationHazard: AssetLocationHazard,
                ComMedia: ComMedia,
                Manufacturer: Manufacturer,
                Procedure: Procedure
            }
        );
    }
);