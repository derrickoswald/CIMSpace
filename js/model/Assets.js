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
                var bucket = cim_data.Asset;
                if (null == bucket)
                   cim_data.Asset = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Asset[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Asset";
                base.parse_attribute (/<cim:Asset.acceptanceTest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "acceptanceTest", sub, context);
                base.parse_element (/<cim:Asset.critical>([\s\S]*?)<\/cim:Asset.critical>/g, obj, "critical", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:Asset.electronicAddress\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "electronicAddress", sub, context);
                base.parse_element (/<cim:Asset.initialCondition>([\s\S]*?)<\/cim:Asset.initialCondition>/g, obj, "initialCondition", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.initialLossOfLife>([\s\S]*?)<\/cim:Asset.initialLossOfLife>/g, obj, "initialLossOfLife", base.to_string, sub, context);
                base.parse_attribute (/<cim:Asset.lifecycle\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "lifecycle", sub, context);
                base.parse_element (/<cim:Asset.lotNumber>([\s\S]*?)<\/cim:Asset.lotNumber>/g, obj, "lotNumber", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.purchasePrice>([\s\S]*?)<\/cim:Asset.purchasePrice>/g, obj, "purchasePrice", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.serialNumber>([\s\S]*?)<\/cim:Asset.serialNumber>/g, obj, "serialNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:Asset.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_element (/<cim:Asset.type>([\s\S]*?)<\/cim:Asset.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:Asset.utcNumber>([\s\S]*?)<\/cim:Asset.utcNumber>/g, obj, "utcNumber", base.to_string, sub, context);
                base.parse_attributes (/<cim:Asset.OperationTags\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationTags", sub, context);
                base.parse_attributes (/<cim:Asset.ActivityRecords\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ActivityRecords", sub, context);
                base.parse_attribute (/<cim:Asset.FinancialInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FinancialInfo", sub, context);
                base.parse_attribute (/<cim:Asset.ErpItemMaster\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpItemMaster", sub, context);
                base.parse_attribute (/<cim:Asset.AssetContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetContainer", sub, context);
                base.parse_attributes (/<cim:Asset.Mediums\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Mediums", sub, context);
                base.parse_attributes (/<cim:Asset.ScheduledEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ScheduledEvents", sub, context);
                base.parse_attributes (/<cim:Asset.OrganisationRoles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OrganisationRoles", sub, context);
                base.parse_attributes (/<cim:Asset.WorkTasks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attributes (/<cim:Asset.Procedures\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Procedures", sub, context);
                base.parse_attributes (/<cim:Asset.Reconditionings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reconditionings", sub, context);
                base.parse_attributes (/<cim:Asset.PowerSystemResources\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResources", sub, context);
                base.parse_attribute (/<cim:Asset.Location\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
                base.parse_attributes (/<cim:Asset.AssetPropertyCurves\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetPropertyCurves", sub, context);
                base.parse_attributes (/<cim:Asset.ConfigurationEvents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConfigurationEvents", sub, context);
                base.parse_attribute (/<cim:Asset.ErpInventory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInventory", sub, context);
                base.parse_attributes (/<cim:Asset.ErpRecDeliveryItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpRecDeliveryItems", sub, context);
                base.parse_attributes (/<cim:Asset.ReliabilityInfos\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReliabilityInfos", sub, context);
                base.parse_attributes (/<cim:Asset.Measurements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Measurements", sub, context);
                base.parse_attribute (/<cim:Asset.AssetInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetInfo", sub, context);
                base.parse_attributes (/<cim:Asset.Ownerships\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Ownerships", sub, context);
                base.parse_attributes (/<cim:Asset.ReplacementWorkTasks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReplacementWorkTasks", sub, context);
                var bucket = context.parsed.Asset;
                if (null == bucket)
                   context.parsed.Asset = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Asset", "acceptanceTest", "acceptanceTest", fields);
                base.export_element (obj, "Asset", "critical", "critical",  base.from_boolean, fields);
                base.export_attribute (obj, "Asset", "electronicAddress", "electronicAddress", fields);
                base.export_element (obj, "Asset", "initialCondition", "initialCondition",  base.from_string, fields);
                base.export_element (obj, "Asset", "initialLossOfLife", "initialLossOfLife",  base.from_string, fields);
                base.export_attribute (obj, "Asset", "lifecycle", "lifecycle", fields);
                base.export_element (obj, "Asset", "lotNumber", "lotNumber",  base.from_string, fields);
                base.export_element (obj, "Asset", "purchasePrice", "purchasePrice",  base.from_string, fields);
                base.export_element (obj, "Asset", "serialNumber", "serialNumber",  base.from_string, fields);
                base.export_attribute (obj, "Asset", "status", "status", fields);
                base.export_element (obj, "Asset", "type", "type",  base.from_string, fields);
                base.export_element (obj, "Asset", "utcNumber", "utcNumber",  base.from_string, fields);
                base.export_attributes (obj, "Asset", "OperationTags", "OperationTags", fields);
                base.export_attributes (obj, "Asset", "ActivityRecords", "ActivityRecords", fields);
                base.export_attribute (obj, "Asset", "FinancialInfo", "FinancialInfo", fields);
                base.export_attribute (obj, "Asset", "ErpItemMaster", "ErpItemMaster", fields);
                base.export_attribute (obj, "Asset", "AssetContainer", "AssetContainer", fields);
                base.export_attributes (obj, "Asset", "Mediums", "Mediums", fields);
                base.export_attributes (obj, "Asset", "ScheduledEvents", "ScheduledEvents", fields);
                base.export_attributes (obj, "Asset", "OrganisationRoles", "OrganisationRoles", fields);
                base.export_attributes (obj, "Asset", "WorkTasks", "WorkTasks", fields);
                base.export_attributes (obj, "Asset", "Procedures", "Procedures", fields);
                base.export_attributes (obj, "Asset", "Reconditionings", "Reconditionings", fields);
                base.export_attributes (obj, "Asset", "PowerSystemResources", "PowerSystemResources", fields);
                base.export_attribute (obj, "Asset", "Location", "Location", fields);
                base.export_attributes (obj, "Asset", "AssetPropertyCurves", "AssetPropertyCurves", fields);
                base.export_attributes (obj, "Asset", "ConfigurationEvents", "ConfigurationEvents", fields);
                base.export_attribute (obj, "Asset", "ErpInventory", "ErpInventory", fields);
                base.export_attributes (obj, "Asset", "ErpRecDeliveryItems", "ErpRecDeliveryItems", fields);
                base.export_attributes (obj, "Asset", "ReliabilityInfos", "ReliabilityInfos", fields);
                base.export_attributes (obj, "Asset", "Measurements", "Measurements", fields);
                base.export_attribute (obj, "Asset", "AssetInfo", "AssetInfo", fields);
                base.export_attributes (obj, "Asset", "Ownerships", "Ownerships", fields);
                base.export_attributes (obj, "Asset", "ReplacementWorkTasks", "ReplacementWorkTasks", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Asset_collapse" aria-expanded="true" aria-controls="Asset_collapse" style="margin-left: 10px;">Asset</a></legend>
                    <div id="Asset_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#acceptanceTest}}<div><b>acceptanceTest</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{acceptanceTest}}&quot;);}); return false;'>{{acceptanceTest}}</a></div>{{/acceptanceTest}}\n                    {{#critical}}<div><b>critical</b>: {{critical}}</div>{{/critical}}
                    {{#electronicAddress}}<div><b>electronicAddress</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{electronicAddress}}&quot;);}); return false;'>{{electronicAddress}}</a></div>{{/electronicAddress}}\n                    {{#initialCondition}}<div><b>initialCondition</b>: {{initialCondition}}</div>{{/initialCondition}}
                    {{#initialLossOfLife}}<div><b>initialLossOfLife</b>: {{initialLossOfLife}}</div>{{/initialLossOfLife}}
                    {{#lifecycle}}<div><b>lifecycle</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{lifecycle}}&quot;);}); return false;'>{{lifecycle}}</a></div>{{/lifecycle}}\n                    {{#lotNumber}}<div><b>lotNumber</b>: {{lotNumber}}</div>{{/lotNumber}}
                    {{#purchasePrice}}<div><b>purchasePrice</b>: {{purchasePrice}}</div>{{/purchasePrice}}
                    {{#serialNumber}}<div><b>serialNumber</b>: {{serialNumber}}</div>{{/serialNumber}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#utcNumber}}<div><b>utcNumber</b>: {{utcNumber}}</div>{{/utcNumber}}
                    {{#OperationTags}}<div><b>OperationTags</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/OperationTags}}
                    {{#ActivityRecords}}<div><b>ActivityRecords</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ActivityRecords}}
                    {{#FinancialInfo}}<div><b>FinancialInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FinancialInfo}}&quot;);}); return false;'>{{FinancialInfo}}</a></div>{{/FinancialInfo}}
                    {{#ErpItemMaster}}<div><b>ErpItemMaster</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpItemMaster}}&quot;);}); return false;'>{{ErpItemMaster}}</a></div>{{/ErpItemMaster}}
                    {{#AssetContainer}}<div><b>AssetContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetContainer}}&quot;);}); return false;'>{{AssetContainer}}</a></div>{{/AssetContainer}}
                    {{#Mediums}}<div><b>Mediums</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Mediums}}
                    {{#ScheduledEvents}}<div><b>ScheduledEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ScheduledEvents}}
                    {{#OrganisationRoles}}<div><b>OrganisationRoles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/OrganisationRoles}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    {{#Procedures}}<div><b>Procedures</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Procedures}}
                    {{#Reconditionings}}<div><b>Reconditionings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Reconditionings}}
                    {{#PowerSystemResources}}<div><b>PowerSystemResources</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PowerSystemResources}}
                    {{#Location}}<div><b>Location</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Location}}&quot;);}); return false;'>{{Location}}</a></div>{{/Location}}
                    {{#AssetPropertyCurves}}<div><b>AssetPropertyCurves</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/AssetPropertyCurves}}
                    {{#ConfigurationEvents}}<div><b>ConfigurationEvents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ConfigurationEvents}}
                    {{#ErpInventory}}<div><b>ErpInventory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpInventory}}&quot;);}); return false;'>{{ErpInventory}}</a></div>{{/ErpInventory}}
                    {{#ErpRecDeliveryItems}}<div><b>ErpRecDeliveryItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpRecDeliveryItems}}
                    {{#ReliabilityInfos}}<div><b>ReliabilityInfos</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ReliabilityInfos}}
                    {{#Measurements}}<div><b>Measurements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Measurements}}
                    {{#AssetInfo}}<div><b>AssetInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetInfo}}&quot;);}); return false;'>{{AssetInfo}}</a></div>{{/AssetInfo}}
                    {{#Ownerships}}<div><b>Ownerships</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Ownerships}}
                    {{#ReplacementWorkTasks}}<div><b>ReplacementWorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ReplacementWorkTasks}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.OperationTags) obj.OperationTags_string = obj.OperationTags.join ();
                if (obj.ActivityRecords) obj.ActivityRecords_string = obj.ActivityRecords.join ();
                if (obj.Mediums) obj.Mediums_string = obj.Mediums.join ();
                if (obj.ScheduledEvents) obj.ScheduledEvents_string = obj.ScheduledEvents.join ();
                if (obj.OrganisationRoles) obj.OrganisationRoles_string = obj.OrganisationRoles.join ();
                if (obj.WorkTasks) obj.WorkTasks_string = obj.WorkTasks.join ();
                if (obj.Procedures) obj.Procedures_string = obj.Procedures.join ();
                if (obj.Reconditionings) obj.Reconditionings_string = obj.Reconditionings.join ();
                if (obj.PowerSystemResources) obj.PowerSystemResources_string = obj.PowerSystemResources.join ();
                if (obj.AssetPropertyCurves) obj.AssetPropertyCurves_string = obj.AssetPropertyCurves.join ();
                if (obj.ConfigurationEvents) obj.ConfigurationEvents_string = obj.ConfigurationEvents.join ();
                if (obj.ErpRecDeliveryItems) obj.ErpRecDeliveryItems_string = obj.ErpRecDeliveryItems.join ();
                if (obj.ReliabilityInfos) obj.ReliabilityInfos_string = obj.ReliabilityInfos.join ();
                if (obj.Measurements) obj.Measurements_string = obj.Measurements.join ();
                if (obj.Ownerships) obj.Ownerships_string = obj.Ownerships.join ();
                if (obj.ReplacementWorkTasks) obj.ReplacementWorkTasks_string = obj.ReplacementWorkTasks.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.OperationTags_string;
                delete obj.ActivityRecords_string;
                delete obj.Mediums_string;
                delete obj.ScheduledEvents_string;
                delete obj.OrganisationRoles_string;
                delete obj.WorkTasks_string;
                delete obj.Procedures_string;
                delete obj.Reconditionings_string;
                delete obj.PowerSystemResources_string;
                delete obj.AssetPropertyCurves_string;
                delete obj.ConfigurationEvents_string;
                delete obj.ErpRecDeliveryItems_string;
                delete obj.ReliabilityInfos_string;
                delete obj.Measurements_string;
                delete obj.Ownerships_string;
                delete obj.ReplacementWorkTasks_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Asset_collapse" aria-expanded="true" aria-controls="{{id}}_Asset_collapse" style="margin-left: 10px;">Asset</a></legend>
                    <div id="{{id}}_Asset_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_acceptanceTest'>acceptanceTest: </label><div class='col-sm-8'><input id='{{id}}_acceptanceTest' class='form-control' type='text'{{#acceptanceTest}} value='{{acceptanceTest}}'{{/acceptanceTest}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_critical'>critical: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_critical' class='form-check-input' type='checkbox'{{#critical}} checked{{/critical}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_electronicAddress'>electronicAddress: </label><div class='col-sm-8'><input id='{{id}}_electronicAddress' class='form-control' type='text'{{#electronicAddress}} value='{{electronicAddress}}'{{/electronicAddress}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_initialCondition'>initialCondition: </label><div class='col-sm-8'><input id='{{id}}_initialCondition' class='form-control' type='text'{{#initialCondition}} value='{{initialCondition}}'{{/initialCondition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_initialLossOfLife'>initialLossOfLife: </label><div class='col-sm-8'><input id='{{id}}_initialLossOfLife' class='form-control' type='text'{{#initialLossOfLife}} value='{{initialLossOfLife}}'{{/initialLossOfLife}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lifecycle'>lifecycle: </label><div class='col-sm-8'><input id='{{id}}_lifecycle' class='form-control' type='text'{{#lifecycle}} value='{{lifecycle}}'{{/lifecycle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lotNumber'>lotNumber: </label><div class='col-sm-8'><input id='{{id}}_lotNumber' class='form-control' type='text'{{#lotNumber}} value='{{lotNumber}}'{{/lotNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purchasePrice'>purchasePrice: </label><div class='col-sm-8'><input id='{{id}}_purchasePrice' class='form-control' type='text'{{#purchasePrice}} value='{{purchasePrice}}'{{/purchasePrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_serialNumber'>serialNumber: </label><div class='col-sm-8'><input id='{{id}}_serialNumber' class='form-control' type='text'{{#serialNumber}} value='{{serialNumber}}'{{/serialNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_utcNumber'>utcNumber: </label><div class='col-sm-8'><input id='{{id}}_utcNumber' class='form-control' type='text'{{#utcNumber}} value='{{utcNumber}}'{{/utcNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ActivityRecords'>ActivityRecords: </label><div class='col-sm-8'><input id='{{id}}_ActivityRecords' class='form-control' type='text'{{#ActivityRecords}} value='{{ActivityRecords_string}}'{{/ActivityRecords}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FinancialInfo'>FinancialInfo: </label><div class='col-sm-8'><input id='{{id}}_FinancialInfo' class='form-control' type='text'{{#FinancialInfo}} value='{{FinancialInfo}}'{{/FinancialInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpItemMaster'>ErpItemMaster: </label><div class='col-sm-8'><input id='{{id}}_ErpItemMaster' class='form-control' type='text'{{#ErpItemMaster}} value='{{ErpItemMaster}}'{{/ErpItemMaster}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetContainer'>AssetContainer: </label><div class='col-sm-8'><input id='{{id}}_AssetContainer' class='form-control' type='text'{{#AssetContainer}} value='{{AssetContainer}}'{{/AssetContainer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Mediums'>Mediums: </label><div class='col-sm-8'><input id='{{id}}_Mediums' class='form-control' type='text'{{#Mediums}} value='{{Mediums_string}}'{{/Mediums}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ScheduledEvents'>ScheduledEvents: </label><div class='col-sm-8'><input id='{{id}}_ScheduledEvents' class='form-control' type='text'{{#ScheduledEvents}} value='{{ScheduledEvents_string}}'{{/ScheduledEvents}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OrganisationRoles'>OrganisationRoles: </label><div class='col-sm-8'><input id='{{id}}_OrganisationRoles' class='form-control' type='text'{{#OrganisationRoles}} value='{{OrganisationRoles_string}}'{{/OrganisationRoles}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTasks'>WorkTasks: </label><div class='col-sm-8'><input id='{{id}}_WorkTasks' class='form-control' type='text'{{#WorkTasks}} value='{{WorkTasks_string}}'{{/WorkTasks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Procedures'>Procedures: </label><div class='col-sm-8'><input id='{{id}}_Procedures' class='form-control' type='text'{{#Procedures}} value='{{Procedures_string}}'{{/Procedures}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerSystemResources'>PowerSystemResources: </label><div class='col-sm-8'><input id='{{id}}_PowerSystemResources' class='form-control' type='text'{{#PowerSystemResources}} value='{{PowerSystemResources_string}}'{{/PowerSystemResources}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Location'>Location: </label><div class='col-sm-8'><input id='{{id}}_Location' class='form-control' type='text'{{#Location}} value='{{Location}}'{{/Location}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetPropertyCurves'>AssetPropertyCurves: </label><div class='col-sm-8'><input id='{{id}}_AssetPropertyCurves' class='form-control' type='text'{{#AssetPropertyCurves}} value='{{AssetPropertyCurves_string}}'{{/AssetPropertyCurves}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpInventory'>ErpInventory: </label><div class='col-sm-8'><input id='{{id}}_ErpInventory' class='form-control' type='text'{{#ErpInventory}} value='{{ErpInventory}}'{{/ErpInventory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpRecDeliveryItems'>ErpRecDeliveryItems: </label><div class='col-sm-8'><input id='{{id}}_ErpRecDeliveryItems' class='form-control' type='text'{{#ErpRecDeliveryItems}} value='{{ErpRecDeliveryItems_string}}'{{/ErpRecDeliveryItems}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReliabilityInfos'>ReliabilityInfos: </label><div class='col-sm-8'><input id='{{id}}_ReliabilityInfos' class='form-control' type='text'{{#ReliabilityInfos}} value='{{ReliabilityInfos_string}}'{{/ReliabilityInfos}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetInfo'>AssetInfo: </label><div class='col-sm-8'><input id='{{id}}_AssetInfo' class='form-control' type='text'{{#AssetInfo}} value='{{AssetInfo}}'{{/AssetInfo}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Asset" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_acceptanceTest").value; if ("" != temp) obj.acceptanceTest = temp;
                temp = document.getElementById (id + "_critical").checked; if (temp) obj.critical = true;
                temp = document.getElementById (id + "_electronicAddress").value; if ("" != temp) obj.electronicAddress = temp;
                temp = document.getElementById (id + "_initialCondition").value; if ("" != temp) obj.initialCondition = temp;
                temp = document.getElementById (id + "_initialLossOfLife").value; if ("" != temp) obj.initialLossOfLife = temp;
                temp = document.getElementById (id + "_lifecycle").value; if ("" != temp) obj.lifecycle = temp;
                temp = document.getElementById (id + "_lotNumber").value; if ("" != temp) obj.lotNumber = temp;
                temp = document.getElementById (id + "_purchasePrice").value; if ("" != temp) obj.purchasePrice = temp;
                temp = document.getElementById (id + "_serialNumber").value; if ("" != temp) obj.serialNumber = temp;
                temp = document.getElementById (id + "_status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_utcNumber").value; if ("" != temp) obj.utcNumber = temp;
                temp = document.getElementById (id + "_ActivityRecords").value; if ("" != temp) obj.ActivityRecords = temp.split (",");
                temp = document.getElementById (id + "_FinancialInfo").value; if ("" != temp) obj.FinancialInfo = temp;
                temp = document.getElementById (id + "_ErpItemMaster").value; if ("" != temp) obj.ErpItemMaster = temp;
                temp = document.getElementById (id + "_AssetContainer").value; if ("" != temp) obj.AssetContainer = temp;
                temp = document.getElementById (id + "_Mediums").value; if ("" != temp) obj.Mediums = temp.split (",");
                temp = document.getElementById (id + "_ScheduledEvents").value; if ("" != temp) obj.ScheduledEvents = temp.split (",");
                temp = document.getElementById (id + "_OrganisationRoles").value; if ("" != temp) obj.OrganisationRoles = temp.split (",");
                temp = document.getElementById (id + "_WorkTasks").value; if ("" != temp) obj.WorkTasks = temp.split (",");
                temp = document.getElementById (id + "_Procedures").value; if ("" != temp) obj.Procedures = temp.split (",");
                temp = document.getElementById (id + "_PowerSystemResources").value; if ("" != temp) obj.PowerSystemResources = temp.split (",");
                temp = document.getElementById (id + "_Location").value; if ("" != temp) obj.Location = temp;
                temp = document.getElementById (id + "_AssetPropertyCurves").value; if ("" != temp) obj.AssetPropertyCurves = temp.split (",");
                temp = document.getElementById (id + "_ErpInventory").value; if ("" != temp) obj.ErpInventory = temp;
                temp = document.getElementById (id + "_ErpRecDeliveryItems").value; if ("" != temp) obj.ErpRecDeliveryItems = temp.split (",");
                temp = document.getElementById (id + "_ReliabilityInfos").value; if ("" != temp) obj.ReliabilityInfos = temp.split (",");
                temp = document.getElementById (id + "_AssetInfo").value; if ("" != temp) obj.AssetInfo = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperationTags", "0..*", "0..1", "OperationTag", "Asset"],
                            ["ActivityRecords", "0..*", "0..*", "ActivityRecord", "Assets"],
                            ["FinancialInfo", "0..1", "0..1", "FinancialInfo", "Asset"],
                            ["ErpItemMaster", "0..1", "0..1", "ErpItemMaster", "Asset"],
                            ["AssetContainer", "0..1", "0..*", "AssetContainer", "Assets"],
                            ["Mediums", "0..*", "0..*", "Medium", "Assets"],
                            ["ScheduledEvents", "0..*", "0..*", "ScheduledEvent", "Assets"],
                            ["OrganisationRoles", "0..*", "0..*", "AssetOrganisationRole", "Assets"],
                            ["WorkTasks", "0..*", "0..*", "WorkTask", "Assets"],
                            ["Procedures", "0..*", "0..*", "Procedure", "Assets"],
                            ["Reconditionings", "0..*", "0..1", "Reconditioning", "Asset"],
                            ["PowerSystemResources", "0..*", "0..*", "PowerSystemResource", "Assets"],
                            ["Location", "0..1", "0..*", "Location", "Assets"],
                            ["AssetPropertyCurves", "0..*", "0..*", "AssetPropertyCurve", "Assets"],
                            ["ConfigurationEvents", "0..*", "0..1", "ConfigurationEvent", "ChangedAsset"],
                            ["ErpInventory", "0..1", "0..1", "ErpInventory", "Asset"],
                            ["ErpRecDeliveryItems", "0..*", "0..*", "ErpRecDelvLineItem", "Assets"],
                            ["ReliabilityInfos", "0..*", "0..*", "ReliabilityInfo", "Assets"],
                            ["Measurements", "0..*", "0..1", "Measurement", "Asset"],
                            ["AssetInfo", "0..1", "0..*", "AssetInfo", "Assets"],
                            ["Ownerships", "0..*", "0..1", "Ownership", "Asset"],
                            ["ReplacementWorkTasks", "0..*", "0..1", "WorkTask", "OldAsset"]
                        ]
                    )
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
                var bucket = cim_data.AcceptanceTest;
                if (null == bucket)
                   cim_data.AcceptanceTest = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AcceptanceTest[obj.id];
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

                base.export_element (obj, "AcceptanceTest", "dateTime", "dateTime",  base.from_datetime, fields);
                base.export_element (obj, "AcceptanceTest", "success", "success",  base.from_boolean, fields);
                base.export_element (obj, "AcceptanceTest", "type", "type",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AcceptanceTest_collapse" aria-expanded="true" aria-controls="AcceptanceTest_collapse" style="margin-left: 10px;">AcceptanceTest</a></legend>
                    <div id="AcceptanceTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
                    {{#success}}<div><b>success</b>: {{success}}</div>{{/success}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AcceptanceTest_collapse" aria-expanded="true" aria-controls="{{id}}_AcceptanceTest_collapse" style="margin-left: 10px;">AcceptanceTest</a></legend>
                    <div id="{{id}}_AcceptanceTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dateTime'>dateTime: </label><div class='col-sm-8'><input id='{{id}}_dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_success'>success: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_success' class='form-check-input' type='checkbox'{{#success}} checked{{/success}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AcceptanceTest" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dateTime").value; if ("" != temp) obj.dateTime = temp;
                temp = document.getElementById (id + "_success").checked; if (temp) obj.success = true;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;

                return (obj);
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
                var bucket = cim_data.AssetInfo;
                if (null == bucket)
                   cim_data.AssetInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetInfo[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AssetInfo";
                base.parse_attributes (/<cim:AssetInfo.PowerSystemResources\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResources", sub, context);
                base.parse_attribute (/<cim:AssetInfo.AssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModel", sub, context);
                base.parse_attributes (/<cim:AssetInfo.Assets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                var bucket = context.parsed.AssetInfo;
                if (null == bucket)
                   context.parsed.AssetInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AssetInfo", "PowerSystemResources", "PowerSystemResources", fields);
                base.export_attribute (obj, "AssetInfo", "AssetModel", "AssetModel", fields);
                base.export_attributes (obj, "AssetInfo", "Assets", "Assets", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetInfo_collapse" aria-expanded="true" aria-controls="AssetInfo_collapse" style="margin-left: 10px;">AssetInfo</a></legend>
                    <div id="AssetInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#PowerSystemResources}}<div><b>PowerSystemResources</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PowerSystemResources}}
                    {{#AssetModel}}<div><b>AssetModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetModel}}&quot;);}); return false;'>{{AssetModel}}</a></div>{{/AssetModel}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Assets}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PowerSystemResources) obj.PowerSystemResources_string = obj.PowerSystemResources.join ();
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PowerSystemResources_string;
                delete obj.Assets_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetInfo_collapse" aria-expanded="true" aria-controls="{{id}}_AssetInfo_collapse" style="margin-left: 10px;">AssetInfo</a></legend>
                    <div id="{{id}}_AssetInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetModel'>AssetModel: </label><div class='col-sm-8'><input id='{{id}}_AssetModel' class='form-control' type='text'{{#AssetModel}} value='{{AssetModel}}'{{/AssetModel}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AssetInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_AssetModel").value; if ("" != temp) obj.AssetModel = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerSystemResources", "0..*", "0..1", "PowerSystemResource", "AssetDatasheet"],
                            ["AssetModel", "0..1", "0..1", "AssetModel", "AssetInfo"],
                            ["Assets", "0..*", "0..1", "Asset", "AssetInfo"]
                        ]
                    )
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
                var bucket = cim_data.AssetOrganisationRole;
                if (null == bucket)
                   cim_data.AssetOrganisationRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetOrganisationRole[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "AssetOrganisationRole";
                base.parse_attributes (/<cim:AssetOrganisationRole.Assets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                var bucket = context.parsed.AssetOrganisationRole;
                if (null == bucket)
                   context.parsed.AssetOrganisationRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AssetOrganisationRole", "Assets", "Assets", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetOrganisationRole_collapse" aria-expanded="true" aria-controls="AssetOrganisationRole_collapse" style="margin-left: 10px;">AssetOrganisationRole</a></legend>
                    <div id="AssetOrganisationRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Assets}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Assets_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetOrganisationRole_collapse" aria-expanded="true" aria-controls="{{id}}_AssetOrganisationRole_collapse" style="margin-left: 10px;">AssetOrganisationRole</a></legend>
                    <div id="{{id}}_AssetOrganisationRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assets'>Assets: </label><div class='col-sm-8'><input id='{{id}}_Assets' class='form-control' type='text'{{#Assets}} value='{{Assets_string}}'{{/Assets}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AssetOrganisationRole" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Assets").value; if ("" != temp) obj.Assets = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Assets", "0..*", "0..*", "Asset", "OrganisationRoles"]
                        ]
                    )
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
                var bucket = cim_data.Manufacturer;
                if (null == bucket)
                   cim_data.Manufacturer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Manufacturer[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "Manufacturer";
                base.parse_attributes (/<cim:Manufacturer.ProductAssetModels\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductAssetModels", sub, context);
                var bucket = context.parsed.Manufacturer;
                if (null == bucket)
                   context.parsed.Manufacturer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Manufacturer", "ProductAssetModels", "ProductAssetModels", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Manufacturer_collapse" aria-expanded="true" aria-controls="Manufacturer_collapse" style="margin-left: 10px;">Manufacturer</a></legend>
                    <div id="Manufacturer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#ProductAssetModels}}<div><b>ProductAssetModels</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ProductAssetModels}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProductAssetModels) obj.ProductAssetModels_string = obj.ProductAssetModels.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProductAssetModels_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Manufacturer_collapse" aria-expanded="true" aria-controls="{{id}}_Manufacturer_collapse" style="margin-left: 10px;">Manufacturer</a></legend>
                    <div id="{{id}}_Manufacturer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Manufacturer" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ProductAssetModels", "0..*", "0..1", "ProductAssetModel", "Manufacturer"]
                        ]
                    )
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
                var bucket = cim_data.ProcedureDataSet;
                if (null == bucket)
                   cim_data.ProcedureDataSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProcedureDataSet[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "ProcedureDataSet";
                base.parse_element (/<cim:ProcedureDataSet.completedDateTime>([\s\S]*?)<\/cim:ProcedureDataSet.completedDateTime>/g, obj, "completedDateTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:ProcedureDataSet.TransformerObservations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservations", sub, context);
                base.parse_attributes (/<cim:ProcedureDataSet.MeasurementValues\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValues", sub, context);
                base.parse_attributes (/<cim:ProcedureDataSet.Properties\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Properties", sub, context);
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

                base.export_element (obj, "ProcedureDataSet", "completedDateTime", "completedDateTime",  base.from_datetime, fields);
                base.export_attributes (obj, "ProcedureDataSet", "TransformerObservations", "TransformerObservations", fields);
                base.export_attributes (obj, "ProcedureDataSet", "MeasurementValues", "MeasurementValues", fields);
                base.export_attributes (obj, "ProcedureDataSet", "Properties", "Properties", fields);
                base.export_attribute (obj, "ProcedureDataSet", "Procedure", "Procedure", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProcedureDataSet_collapse" aria-expanded="true" aria-controls="ProcedureDataSet_collapse" style="margin-left: 10px;">ProcedureDataSet</a></legend>
                    <div id="ProcedureDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#completedDateTime}}<div><b>completedDateTime</b>: {{completedDateTime}}</div>{{/completedDateTime}}
                    {{#TransformerObservations}}<div><b>TransformerObservations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TransformerObservations}}
                    {{#MeasurementValues}}<div><b>MeasurementValues</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/MeasurementValues}}
                    {{#Properties}}<div><b>Properties</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Properties}}
                    {{#Procedure}}<div><b>Procedure</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Procedure}}&quot;);}); return false;'>{{Procedure}}</a></div>{{/Procedure}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TransformerObservations) obj.TransformerObservations_string = obj.TransformerObservations.join ();
                if (obj.MeasurementValues) obj.MeasurementValues_string = obj.MeasurementValues.join ();
                if (obj.Properties) obj.Properties_string = obj.Properties.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TransformerObservations_string;
                delete obj.MeasurementValues_string;
                delete obj.Properties_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProcedureDataSet_collapse" aria-expanded="true" aria-controls="{{id}}_ProcedureDataSet_collapse" style="margin-left: 10px;">ProcedureDataSet</a></legend>
                    <div id="{{id}}_ProcedureDataSet_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_completedDateTime'>completedDateTime: </label><div class='col-sm-8'><input id='{{id}}_completedDateTime' class='form-control' type='text'{{#completedDateTime}} value='{{completedDateTime}}'{{/completedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransformerObservations'>TransformerObservations: </label><div class='col-sm-8'><input id='{{id}}_TransformerObservations' class='form-control' type='text'{{#TransformerObservations}} value='{{TransformerObservations_string}}'{{/TransformerObservations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeasurementValues'>MeasurementValues: </label><div class='col-sm-8'><input id='{{id}}_MeasurementValues' class='form-control' type='text'{{#MeasurementValues}} value='{{MeasurementValues_string}}'{{/MeasurementValues}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Properties'>Properties: </label><div class='col-sm-8'><input id='{{id}}_Properties' class='form-control' type='text'{{#Properties}} value='{{Properties_string}}'{{/Properties}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Procedure'>Procedure: </label><div class='col-sm-8'><input id='{{id}}_Procedure' class='form-control' type='text'{{#Procedure}} value='{{Procedure}}'{{/Procedure}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ProcedureDataSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_completedDateTime").value; if ("" != temp) obj.completedDateTime = temp;
                temp = document.getElementById (id + "_TransformerObservations").value; if ("" != temp) obj.TransformerObservations = temp.split (",");
                temp = document.getElementById (id + "_MeasurementValues").value; if ("" != temp) obj.MeasurementValues = temp.split (",");
                temp = document.getElementById (id + "_Properties").value; if ("" != temp) obj.Properties = temp.split (",");
                temp = document.getElementById (id + "_Procedure").value; if ("" != temp) obj.Procedure = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransformerObservations", "0..*", "0..*", "TransformerObservation", "ProcedureDataSets"],
                            ["MeasurementValues", "0..*", "0..*", "MeasurementValue", "ProcedureDataSets"],
                            ["Properties", "0..*", "0..*", "UserAttribute", "ProcedureDataSets"],
                            ["Procedure", "0..1", "0..*", "Procedure", "ProcedureDataSets"]
                        ]
                    )
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
                var bucket = cim_data.AssetFunction;
                if (null == bucket)
                   cim_data.AssetFunction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetFunction[obj.id];
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

                base.export_element (obj, "AssetFunction", "configID", "configID",  base.from_string, fields);
                base.export_element (obj, "AssetFunction", "firmwareID", "firmwareID",  base.from_string, fields);
                base.export_element (obj, "AssetFunction", "hardwareID", "hardwareID",  base.from_string, fields);
                base.export_element (obj, "AssetFunction", "password", "password",  base.from_string, fields);
                base.export_element (obj, "AssetFunction", "programID", "programID",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetFunction_collapse" aria-expanded="true" aria-controls="AssetFunction_collapse" style="margin-left: 10px;">AssetFunction</a></legend>
                    <div id="AssetFunction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#configID}}<div><b>configID</b>: {{configID}}</div>{{/configID}}
                    {{#firmwareID}}<div><b>firmwareID</b>: {{firmwareID}}</div>{{/firmwareID}}
                    {{#hardwareID}}<div><b>hardwareID</b>: {{hardwareID}}</div>{{/hardwareID}}
                    {{#password}}<div><b>password</b>: {{password}}</div>{{/password}}
                    {{#programID}}<div><b>programID</b>: {{programID}}</div>{{/programID}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetFunction_collapse" aria-expanded="true" aria-controls="{{id}}_AssetFunction_collapse" style="margin-left: 10px;">AssetFunction</a></legend>
                    <div id="{{id}}_AssetFunction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_configID'>configID: </label><div class='col-sm-8'><input id='{{id}}_configID' class='form-control' type='text'{{#configID}} value='{{configID}}'{{/configID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_firmwareID'>firmwareID: </label><div class='col-sm-8'><input id='{{id}}_firmwareID' class='form-control' type='text'{{#firmwareID}} value='{{firmwareID}}'{{/firmwareID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hardwareID'>hardwareID: </label><div class='col-sm-8'><input id='{{id}}_hardwareID' class='form-control' type='text'{{#hardwareID}} value='{{hardwareID}}'{{/hardwareID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_password'>password: </label><div class='col-sm-8'><input id='{{id}}_password' class='form-control' type='text'{{#password}} value='{{password}}'{{/password}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_programID'>programID: </label><div class='col-sm-8'><input id='{{id}}_programID' class='form-control' type='text'{{#programID}} value='{{programID}}'{{/programID}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AssetFunction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_configID").value; if ("" != temp) obj.configID = temp;
                temp = document.getElementById (id + "_firmwareID").value; if ("" != temp) obj.firmwareID = temp;
                temp = document.getElementById (id + "_hardwareID").value; if ("" != temp) obj.hardwareID = temp;
                temp = document.getElementById (id + "_password").value; if ("" != temp) obj.password = temp;
                temp = document.getElementById (id + "_programID").value; if ("" != temp) obj.programID = temp;

                return (obj);
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
                var bucket = cim_data.Seal;
                if (null == bucket)
                   cim_data.Seal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Seal[obj.id];
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

                base.export_element (obj, "Seal", "appliedDateTime", "appliedDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "Seal", "condition", "condition", fields);
                base.export_attribute (obj, "Seal", "kind", "kind", fields);
                base.export_element (obj, "Seal", "sealNumber", "sealNumber",  base.from_string, fields);
                base.export_attribute (obj, "Seal", "AssetContainer", "AssetContainer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Seal_collapse" aria-expanded="true" aria-controls="Seal_collapse" style="margin-left: 10px;">Seal</a></legend>
                    <div id="Seal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#appliedDateTime}}<div><b>appliedDateTime</b>: {{appliedDateTime}}</div>{{/appliedDateTime}}
                    {{#condition}}<div><b>condition</b>: {{condition}}</div>{{/condition}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#sealNumber}}<div><b>sealNumber</b>: {{sealNumber}}</div>{{/sealNumber}}
                    {{#AssetContainer}}<div><b>AssetContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetContainer}}&quot;);}); return false;'>{{AssetContainer}}</a></div>{{/AssetContainer}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.conditionSealConditionKind = [{ id: '', selected: (!obj.condition)}]; for (var property in SealConditionKind) obj.conditionSealConditionKind.push ({ id: property, selected: obj.condition && obj.condition.endsWith ('.' + property)});
                obj.kindSealKind = [{ id: '', selected: (!obj.kind)}]; for (var property in SealKind) obj.kindSealKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.conditionSealConditionKind;
                delete obj.kindSealKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Seal_collapse" aria-expanded="true" aria-controls="{{id}}_Seal_collapse" style="margin-left: 10px;">Seal</a></legend>
                    <div id="{{id}}_Seal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_appliedDateTime'>appliedDateTime: </label><div class='col-sm-8'><input id='{{id}}_appliedDateTime' class='form-control' type='text'{{#appliedDateTime}} value='{{appliedDateTime}}'{{/appliedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_condition'>condition: </label><div class='col-sm-8'><select id='{{id}}_condition' class='form-control custom-select'>{{#conditionSealConditionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/conditionSealConditionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindSealKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindSealKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sealNumber'>sealNumber: </label><div class='col-sm-8'><input id='{{id}}_sealNumber' class='form-control' type='text'{{#sealNumber}} value='{{sealNumber}}'{{/sealNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetContainer'>AssetContainer: </label><div class='col-sm-8'><input id='{{id}}_AssetContainer' class='form-control' type='text'{{#AssetContainer}} value='{{AssetContainer}}'{{/AssetContainer}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Seal" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_appliedDateTime").value; if ("" != temp) obj.appliedDateTime = temp;
                temp = SealConditionKind[document.getElementById (id + "_condition").value]; if (temp) obj.condition = "http://iec.ch/TC57/2013/CIM-schema-cim16#SealConditionKind." + temp; else delete obj.condition;
                temp = SealKind[document.getElementById (id + "_kind").value]; if (temp) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#SealKind." + temp; else delete obj.kind;
                temp = document.getElementById (id + "_sealNumber").value; if ("" != temp) obj.sealNumber = temp;
                temp = document.getElementById (id + "_AssetContainer").value; if ("" != temp) obj.AssetContainer = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AssetContainer", "0..1", "0..*", "AssetContainer", "Seals"]
                        ]
                    )
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
                var bucket = cim_data.AssetLocationHazard;
                if (null == bucket)
                   cim_data.AssetLocationHazard = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetLocationHazard[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Hazard.prototype.parse.call (this, context, sub);
                obj.cls = "AssetLocationHazard";
                base.parse_attributes (/<cim:AssetLocationHazard.Locations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Locations", sub, context);
                var bucket = context.parsed.AssetLocationHazard;
                if (null == bucket)
                   context.parsed.AssetLocationHazard = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Hazard.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AssetLocationHazard", "Locations", "Locations", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetLocationHazard_collapse" aria-expanded="true" aria-controls="AssetLocationHazard_collapse" style="margin-left: 10px;">AssetLocationHazard</a></legend>
                    <div id="AssetLocationHazard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Hazard.prototype.template.call (this) +
                    `
                    {{#Locations}}<div><b>Locations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Locations}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Locations) obj.Locations_string = obj.Locations.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Locations_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetLocationHazard_collapse" aria-expanded="true" aria-controls="{{id}}_AssetLocationHazard_collapse" style="margin-left: 10px;">AssetLocationHazard</a></legend>
                    <div id="{{id}}_AssetLocationHazard_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Hazard.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Locations'>Locations: </label><div class='col-sm-8'><input id='{{id}}_Locations' class='form-control' type='text'{{#Locations}} value='{{Locations_string}}'{{/Locations}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AssetLocationHazard" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Locations").value; if ("" != temp) obj.Locations = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Locations", "0..*", "0..*", "Location", "Hazards"]
                        ]
                    )
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
                var bucket = cim_data.LifecycleDate;
                if (null == bucket)
                   cim_data.LifecycleDate = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LifecycleDate[obj.id];
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

                base.export_element (obj, "LifecycleDate", "installationDate", "installationDate",  base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "manufacturedDate", "manufacturedDate",  base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "purchaseDate", "purchaseDate",  base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "receivedDate", "receivedDate",  base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "removalDate", "removalDate",  base.from_string, fields);
                base.export_element (obj, "LifecycleDate", "retiredDate", "retiredDate",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LifecycleDate_collapse" aria-expanded="true" aria-controls="LifecycleDate_collapse" style="margin-left: 10px;">LifecycleDate</a></legend>
                    <div id="LifecycleDate_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LifecycleDate_collapse" aria-expanded="true" aria-controls="{{id}}_LifecycleDate_collapse" style="margin-left: 10px;">LifecycleDate</a></legend>
                    <div id="{{id}}_LifecycleDate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_installationDate'>installationDate: </label><div class='col-sm-8'><input id='{{id}}_installationDate' class='form-control' type='text'{{#installationDate}} value='{{installationDate}}'{{/installationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_manufacturedDate'>manufacturedDate: </label><div class='col-sm-8'><input id='{{id}}_manufacturedDate' class='form-control' type='text'{{#manufacturedDate}} value='{{manufacturedDate}}'{{/manufacturedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purchaseDate'>purchaseDate: </label><div class='col-sm-8'><input id='{{id}}_purchaseDate' class='form-control' type='text'{{#purchaseDate}} value='{{purchaseDate}}'{{/purchaseDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_receivedDate'>receivedDate: </label><div class='col-sm-8'><input id='{{id}}_receivedDate' class='form-control' type='text'{{#receivedDate}} value='{{receivedDate}}'{{/receivedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_removalDate'>removalDate: </label><div class='col-sm-8'><input id='{{id}}_removalDate' class='form-control' type='text'{{#removalDate}} value='{{removalDate}}'{{/removalDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_retiredDate'>retiredDate: </label><div class='col-sm-8'><input id='{{id}}_retiredDate' class='form-control' type='text'{{#retiredDate}} value='{{retiredDate}}'{{/retiredDate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "LifecycleDate" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_installationDate").value; if ("" != temp) obj.installationDate = temp;
                temp = document.getElementById (id + "_manufacturedDate").value; if ("" != temp) obj.manufacturedDate = temp;
                temp = document.getElementById (id + "_purchaseDate").value; if ("" != temp) obj.purchaseDate = temp;
                temp = document.getElementById (id + "_receivedDate").value; if ("" != temp) obj.receivedDate = temp;
                temp = document.getElementById (id + "_removalDate").value; if ("" != temp) obj.removalDate = temp;
                temp = document.getElementById (id + "_retiredDate").value; if ("" != temp) obj.retiredDate = temp;

                return (obj);
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
                var bucket = cim_data.AssetModel;
                if (null == bucket)
                   cim_data.AssetModel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetModel[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AssetModel";
                base.parse_attributes (/<cim:AssetModel.ErpInventoryCounts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInventoryCounts", sub, context);
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

                base.export_attributes (obj, "AssetModel", "ErpInventoryCounts", "ErpInventoryCounts", fields);
                base.export_attribute (obj, "AssetModel", "AssetInfo", "AssetInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetModel_collapse" aria-expanded="true" aria-controls="AssetModel_collapse" style="margin-left: 10px;">AssetModel</a></legend>
                    <div id="AssetModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ErpInventoryCounts}}<div><b>ErpInventoryCounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpInventoryCounts}}
                    {{#AssetInfo}}<div><b>AssetInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AssetInfo}}&quot;);}); return false;'>{{AssetInfo}}</a></div>{{/AssetInfo}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ErpInventoryCounts) obj.ErpInventoryCounts_string = obj.ErpInventoryCounts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ErpInventoryCounts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetModel_collapse" aria-expanded="true" aria-controls="{{id}}_AssetModel_collapse" style="margin-left: 10px;">AssetModel</a></legend>
                    <div id="{{id}}_AssetModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetInfo'>AssetInfo: </label><div class='col-sm-8'><input id='{{id}}_AssetInfo' class='form-control' type='text'{{#AssetInfo}} value='{{AssetInfo}}'{{/AssetInfo}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AssetModel" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_AssetInfo").value; if ("" != temp) obj.AssetInfo = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpInventoryCounts", "0..*", "0..1", "ErpInventoryCount", "AssetModel"],
                            ["AssetInfo", "0..1", "0..1", "AssetInfo", "AssetModel"]
                        ]
                    )
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
                var bucket = cim_data.Procedure;
                if (null == bucket)
                   cim_data.Procedure = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Procedure[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Procedure";
                base.parse_element (/<cim:Procedure.instruction>([\s\S]*?)<\/cim:Procedure.instruction>/g, obj, "instruction", base.to_string, sub, context);
                base.parse_attribute (/<cim:Procedure.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Procedure.sequenceNumber>([\s\S]*?)<\/cim:Procedure.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attributes (/<cim:Procedure.Measurements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Measurements", sub, context);
                base.parse_attributes (/<cim:Procedure.Limits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Limits", sub, context);
                base.parse_attributes (/<cim:Procedure.Assets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attributes (/<cim:Procedure.ProcedureDataSets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProcedureDataSets", sub, context);
                base.parse_attributes (/<cim:Procedure.CompatibleUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompatibleUnits", sub, context);
                var bucket = context.parsed.Procedure;
                if (null == bucket)
                   context.parsed.Procedure = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Procedure", "instruction", "instruction",  base.from_string, fields);
                base.export_attribute (obj, "Procedure", "kind", "kind", fields);
                base.export_element (obj, "Procedure", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_attributes (obj, "Procedure", "Measurements", "Measurements", fields);
                base.export_attributes (obj, "Procedure", "Limits", "Limits", fields);
                base.export_attributes (obj, "Procedure", "Assets", "Assets", fields);
                base.export_attributes (obj, "Procedure", "ProcedureDataSets", "ProcedureDataSets", fields);
                base.export_attributes (obj, "Procedure", "CompatibleUnits", "CompatibleUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Procedure_collapse" aria-expanded="true" aria-controls="Procedure_collapse" style="margin-left: 10px;">Procedure</a></legend>
                    <div id="Procedure_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#instruction}}<div><b>instruction</b>: {{instruction}}</div>{{/instruction}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#Measurements}}<div><b>Measurements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Measurements}}
                    {{#Limits}}<div><b>Limits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Limits}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#ProcedureDataSets}}<div><b>ProcedureDataSets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ProcedureDataSets}}
                    {{#CompatibleUnits}}<div><b>CompatibleUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CompatibleUnits}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.kindProcedureKind = [{ id: '', selected: (!obj.kind)}]; for (var property in ProcedureKind) obj.kindProcedureKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.Measurements) obj.Measurements_string = obj.Measurements.join ();
                if (obj.Limits) obj.Limits_string = obj.Limits.join ();
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
                if (obj.ProcedureDataSets) obj.ProcedureDataSets_string = obj.ProcedureDataSets.join ();
                if (obj.CompatibleUnits) obj.CompatibleUnits_string = obj.CompatibleUnits.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.kindProcedureKind;
                delete obj.Measurements_string;
                delete obj.Limits_string;
                delete obj.Assets_string;
                delete obj.ProcedureDataSets_string;
                delete obj.CompatibleUnits_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Procedure_collapse" aria-expanded="true" aria-controls="{{id}}_Procedure_collapse" style="margin-left: 10px;">Procedure</a></legend>
                    <div id="{{id}}_Procedure_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_instruction'>instruction: </label><div class='col-sm-8'><input id='{{id}}_instruction' class='form-control' type='text'{{#instruction}} value='{{instruction}}'{{/instruction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindProcedureKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindProcedureKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Measurements'>Measurements: </label><div class='col-sm-8'><input id='{{id}}_Measurements' class='form-control' type='text'{{#Measurements}} value='{{Measurements_string}}'{{/Measurements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Limits'>Limits: </label><div class='col-sm-8'><input id='{{id}}_Limits' class='form-control' type='text'{{#Limits}} value='{{Limits_string}}'{{/Limits}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assets'>Assets: </label><div class='col-sm-8'><input id='{{id}}_Assets' class='form-control' type='text'{{#Assets}} value='{{Assets_string}}'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CompatibleUnits'>CompatibleUnits: </label><div class='col-sm-8'><input id='{{id}}_CompatibleUnits' class='form-control' type='text'{{#CompatibleUnits}} value='{{CompatibleUnits_string}}'{{/CompatibleUnits}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Procedure" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_instruction").value; if ("" != temp) obj.instruction = temp;
                temp = ProcedureKind[document.getElementById (id + "_kind").value]; if (temp) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#ProcedureKind." + temp; else delete obj.kind;
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById (id + "_Measurements").value; if ("" != temp) obj.Measurements = temp.split (",");
                temp = document.getElementById (id + "_Limits").value; if ("" != temp) obj.Limits = temp.split (",");
                temp = document.getElementById (id + "_Assets").value; if ("" != temp) obj.Assets = temp.split (",");
                temp = document.getElementById (id + "_CompatibleUnits").value; if ("" != temp) obj.CompatibleUnits = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Measurements", "0..*", "0..*", "Measurement", "Procedures"],
                            ["Limits", "0..*", "0..*", "Limit", "Procedures"],
                            ["Assets", "0..*", "0..*", "Asset", "Procedures"],
                            ["ProcedureDataSets", "0..*", "0..1", "ProcedureDataSet", "Procedure"],
                            ["CompatibleUnits", "0..*", "0..*", "CompatibleUnit", "Procedures"]
                        ]
                    )
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
                var bucket = cim_data.AssetContainer;
                if (null == bucket)
                   cim_data.AssetContainer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetContainer[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Asset.prototype.parse.call (this, context, sub);
                obj.cls = "AssetContainer";
                base.parse_attributes (/<cim:AssetContainer.Seals\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Seals", sub, context);
                base.parse_attributes (/<cim:AssetContainer.Assets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attributes (/<cim:AssetContainer.LandProperties\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LandProperties", sub, context);
                var bucket = context.parsed.AssetContainer;
                if (null == bucket)
                   context.parsed.AssetContainer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Asset.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AssetContainer", "Seals", "Seals", fields);
                base.export_attributes (obj, "AssetContainer", "Assets", "Assets", fields);
                base.export_attributes (obj, "AssetContainer", "LandProperties", "LandProperties", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetContainer_collapse" aria-expanded="true" aria-controls="AssetContainer_collapse" style="margin-left: 10px;">AssetContainer</a></legend>
                    <div id="AssetContainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
                    `
                    {{#Seals}}<div><b>Seals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Seals}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#LandProperties}}<div><b>LandProperties</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/LandProperties}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Seals) obj.Seals_string = obj.Seals.join ();
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
                if (obj.LandProperties) obj.LandProperties_string = obj.LandProperties.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Seals_string;
                delete obj.Assets_string;
                delete obj.LandProperties_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetContainer_collapse" aria-expanded="true" aria-controls="{{id}}_AssetContainer_collapse" style="margin-left: 10px;">AssetContainer</a></legend>
                    <div id="{{id}}_AssetContainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LandProperties'>LandProperties: </label><div class='col-sm-8'><input id='{{id}}_LandProperties' class='form-control' type='text'{{#LandProperties}} value='{{LandProperties_string}}'{{/LandProperties}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AssetContainer" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_LandProperties").value; if ("" != temp) obj.LandProperties = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Seals", "0..*", "0..1", "Seal", "AssetContainer"],
                            ["Assets", "0..*", "0..1", "Asset", "AssetContainer"],
                            ["LandProperties", "0..*", "0..*", "LandProperty", "AssetContainers"]
                        ]
                    )
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
                var bucket = cim_data.ComMedia;
                if (null == bucket)
                   cim_data.ComMedia = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ComMedia[obj.id];
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ComMedia_collapse" aria-expanded="true" aria-controls="ComMedia_collapse" style="margin-left: 10px;">ComMedia</a></legend>
                    <div id="ComMedia_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ComMedia_collapse" aria-expanded="true" aria-controls="{{id}}_ComMedia_collapse" style="margin-left: 10px;">ComMedia</a></legend>
                    <div id="{{id}}_ComMedia_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Asset.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "ComMedia" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.AssetUser;
                if (null == bucket)
                   cim_data.AssetUser = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetUser[obj.id];
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetUser_collapse" aria-expanded="true" aria-controls="AssetUser_collapse" style="margin-left: 10px;">AssetUser</a></legend>
                    <div id="AssetUser_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetUser_collapse" aria-expanded="true" aria-controls="{{id}}_AssetUser_collapse" style="margin-left: 10px;">AssetUser</a></legend>
                    <div id="{{id}}_AssetUser_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "AssetUser" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.AssetOwner;
                if (null == bucket)
                   cim_data.AssetOwner = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetOwner[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AssetOrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "AssetOwner";
                base.parse_attributes (/<cim:AssetOwner.Ownerships\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Ownerships", sub, context);
                var bucket = context.parsed.AssetOwner;
                if (null == bucket)
                   context.parsed.AssetOwner = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AssetOrganisationRole.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AssetOwner", "Ownerships", "Ownerships", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetOwner_collapse" aria-expanded="true" aria-controls="AssetOwner_collapse" style="margin-left: 10px;">AssetOwner</a></legend>
                    <div id="AssetOwner_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.template.call (this) +
                    `
                    {{#Ownerships}}<div><b>Ownerships</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Ownerships}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Ownerships) obj.Ownerships_string = obj.Ownerships.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Ownerships_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetOwner_collapse" aria-expanded="true" aria-controls="{{id}}_AssetOwner_collapse" style="margin-left: 10px;">AssetOwner</a></legend>
                    <div id="{{id}}_AssetOwner_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "AssetOwner" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Ownerships", "0..*", "0..1", "Ownership", "AssetOwner"]
                        ]
                    )
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
                var bucket = cim_data.Maintainer;
                if (null == bucket)
                   cim_data.Maintainer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Maintainer[obj.id];
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Maintainer_collapse" aria-expanded="true" aria-controls="Maintainer_collapse" style="margin-left: 10px;">Maintainer</a></legend>
                    <div id="Maintainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Maintainer_collapse" aria-expanded="true" aria-controls="{{id}}_Maintainer_collapse" style="margin-left: 10px;">Maintainer</a></legend>
                    <div id="{{id}}_Maintainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetOrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Maintainer" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.ProductAssetModel;
                if (null == bucket)
                   cim_data.ProductAssetModel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProductAssetModel[obj.id];
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
                base.parse_attributes (/<cim:ProductAssetModel.AssetModelCatalogueItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetModelCatalogueItems", sub, context);
                base.parse_attribute (/<cim:ProductAssetModel.GenericAssetModelOrMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenericAssetModelOrMaterial", sub, context);
                base.parse_attribute (/<cim:ProductAssetModel.Manufacturer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Manufacturer", sub, context);
                base.parse_attributes (/<cim:ProductAssetModel.OperationalRestrictions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationalRestrictions", sub, context);
                var bucket = context.parsed.ProductAssetModel;
                if (null == bucket)
                   context.parsed.ProductAssetModel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AssetModel.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ProductAssetModel", "corporateStandardKind", "corporateStandardKind", fields);
                base.export_element (obj, "ProductAssetModel", "modelNumber", "modelNumber",  base.from_string, fields);
                base.export_element (obj, "ProductAssetModel", "modelVersion", "modelVersion",  base.from_string, fields);
                base.export_attribute (obj, "ProductAssetModel", "usageKind", "usageKind", fields);
                base.export_element (obj, "ProductAssetModel", "weightTotal", "weightTotal",  base.from_string, fields);
                base.export_attributes (obj, "ProductAssetModel", "AssetModelCatalogueItems", "AssetModelCatalogueItems", fields);
                base.export_attribute (obj, "ProductAssetModel", "GenericAssetModelOrMaterial", "GenericAssetModelOrMaterial", fields);
                base.export_attribute (obj, "ProductAssetModel", "Manufacturer", "Manufacturer", fields);
                base.export_attributes (obj, "ProductAssetModel", "OperationalRestrictions", "OperationalRestrictions", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProductAssetModel_collapse" aria-expanded="true" aria-controls="ProductAssetModel_collapse" style="margin-left: 10px;">ProductAssetModel</a></legend>
                    <div id="ProductAssetModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetModel.prototype.template.call (this) +
                    `
                    {{#corporateStandardKind}}<div><b>corporateStandardKind</b>: {{corporateStandardKind}}</div>{{/corporateStandardKind}}
                    {{#modelNumber}}<div><b>modelNumber</b>: {{modelNumber}}</div>{{/modelNumber}}
                    {{#modelVersion}}<div><b>modelVersion</b>: {{modelVersion}}</div>{{/modelVersion}}
                    {{#usageKind}}<div><b>usageKind</b>: {{usageKind}}</div>{{/usageKind}}
                    {{#weightTotal}}<div><b>weightTotal</b>: {{weightTotal}}</div>{{/weightTotal}}
                    {{#AssetModelCatalogueItems}}<div><b>AssetModelCatalogueItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/AssetModelCatalogueItems}}
                    {{#GenericAssetModelOrMaterial}}<div><b>GenericAssetModelOrMaterial</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GenericAssetModelOrMaterial}}&quot;);}); return false;'>{{GenericAssetModelOrMaterial}}</a></div>{{/GenericAssetModelOrMaterial}}
                    {{#Manufacturer}}<div><b>Manufacturer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Manufacturer}}&quot;);}); return false;'>{{Manufacturer}}</a></div>{{/Manufacturer}}
                    {{#OperationalRestrictions}}<div><b>OperationalRestrictions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/OperationalRestrictions}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.corporateStandardKindCorporateStandardKind = [{ id: '', selected: (!obj.corporateStandardKind)}]; for (var property in CorporateStandardKind) obj.corporateStandardKindCorporateStandardKind.push ({ id: property, selected: obj.corporateStandardKind && obj.corporateStandardKind.endsWith ('.' + property)});
                obj.usageKindAssetModelUsageKind = [{ id: '', selected: (!obj.usageKind)}]; for (var property in AssetModelUsageKind) obj.usageKindAssetModelUsageKind.push ({ id: property, selected: obj.usageKind && obj.usageKind.endsWith ('.' + property)});
                if (obj.AssetModelCatalogueItems) obj.AssetModelCatalogueItems_string = obj.AssetModelCatalogueItems.join ();
                if (obj.OperationalRestrictions) obj.OperationalRestrictions_string = obj.OperationalRestrictions.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.corporateStandardKindCorporateStandardKind;
                delete obj.usageKindAssetModelUsageKind;
                delete obj.AssetModelCatalogueItems_string;
                delete obj.OperationalRestrictions_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProductAssetModel_collapse" aria-expanded="true" aria-controls="{{id}}_ProductAssetModel_collapse" style="margin-left: 10px;">ProductAssetModel</a></legend>
                    <div id="{{id}}_ProductAssetModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetModel.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_corporateStandardKind'>corporateStandardKind: </label><div class='col-sm-8'><select id='{{id}}_corporateStandardKind' class='form-control custom-select'>{{#corporateStandardKindCorporateStandardKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/corporateStandardKindCorporateStandardKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_modelNumber'>modelNumber: </label><div class='col-sm-8'><input id='{{id}}_modelNumber' class='form-control' type='text'{{#modelNumber}} value='{{modelNumber}}'{{/modelNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_modelVersion'>modelVersion: </label><div class='col-sm-8'><input id='{{id}}_modelVersion' class='form-control' type='text'{{#modelVersion}} value='{{modelVersion}}'{{/modelVersion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_usageKind'>usageKind: </label><div class='col-sm-8'><select id='{{id}}_usageKind' class='form-control custom-select'>{{#usageKindAssetModelUsageKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/usageKindAssetModelUsageKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_weightTotal'>weightTotal: </label><div class='col-sm-8'><input id='{{id}}_weightTotal' class='form-control' type='text'{{#weightTotal}} value='{{weightTotal}}'{{/weightTotal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GenericAssetModelOrMaterial'>GenericAssetModelOrMaterial: </label><div class='col-sm-8'><input id='{{id}}_GenericAssetModelOrMaterial' class='form-control' type='text'{{#GenericAssetModelOrMaterial}} value='{{GenericAssetModelOrMaterial}}'{{/GenericAssetModelOrMaterial}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Manufacturer'>Manufacturer: </label><div class='col-sm-8'><input id='{{id}}_Manufacturer' class='form-control' type='text'{{#Manufacturer}} value='{{Manufacturer}}'{{/Manufacturer}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ProductAssetModel" };
                super.submit (id, obj);
                temp = CorporateStandardKind[document.getElementById (id + "_corporateStandardKind").value]; if (temp) obj.corporateStandardKind = "http://iec.ch/TC57/2013/CIM-schema-cim16#CorporateStandardKind." + temp; else delete obj.corporateStandardKind;
                temp = document.getElementById (id + "_modelNumber").value; if ("" != temp) obj.modelNumber = temp;
                temp = document.getElementById (id + "_modelVersion").value; if ("" != temp) obj.modelVersion = temp;
                temp = AssetModelUsageKind[document.getElementById (id + "_usageKind").value]; if (temp) obj.usageKind = "http://iec.ch/TC57/2013/CIM-schema-cim16#AssetModelUsageKind." + temp; else delete obj.usageKind;
                temp = document.getElementById (id + "_weightTotal").value; if ("" != temp) obj.weightTotal = temp;
                temp = document.getElementById (id + "_GenericAssetModelOrMaterial").value; if ("" != temp) obj.GenericAssetModelOrMaterial = temp;
                temp = document.getElementById (id + "_Manufacturer").value; if ("" != temp) obj.Manufacturer = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AssetModelCatalogueItems", "0..*", "0..1", "AssetModelCatalogueItem", "AssetModel"],
                            ["GenericAssetModelOrMaterial", "0..1", "0..*", "GenericAssetModelOrMaterial", "ProductAssetModels"],
                            ["Manufacturer", "0..1", "0..*", "Manufacturer", "ProductAssetModels"],
                            ["OperationalRestrictions", "0..*", "0..1", "OperationalRestriction", "ProductAssetModel"]
                        ]
                    )
                );
            }
        }

        return (
            {
                Maintainer: Maintainer,
                ProcedureKind: ProcedureKind,
                AssetOwner: AssetOwner,
                LifecycleDate: LifecycleDate,
                Asset: Asset,
                AssetModel: AssetModel,
                ProductAssetModel: ProductAssetModel,
                SealKind: SealKind,
                ProcedureDataSet: ProcedureDataSet,
                AssetOrganisationRole: AssetOrganisationRole,
                AssetFunction: AssetFunction,
                Seal: Seal,
                AcceptanceTest: AcceptanceTest,
                AssetInfo: AssetInfo,
                AssetUser: AssetUser,
                AssetModelUsageKind: AssetModelUsageKind,
                AssetContainer: AssetContainer,
                SealConditionKind: SealConditionKind,
                CorporateStandardKind: CorporateStandardKind,
                AssetLocationHazard: AssetLocationHazard,
                ComMedia: ComMedia,
                Manufacturer: Manufacturer,
                Procedure: Procedure
            }
        );
    }
);