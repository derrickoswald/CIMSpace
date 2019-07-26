define
(
    ["model/base", "model/Common", "model/Core"],
    function (base, Common, Core)
    {

        /**
         * Kind of (land) property.
         *
         */
        let LandPropertyKind =
        {
            "building": "building",
            "customerPremise": "customerPremise",
            "depot": "depot",
            "store": "store",
            "substation": "substation",
            "gridSupplyPoint": "gridSupplyPoint",
            "external": "external"
        };
        Object.freeze (LandPropertyKind);

        /**
         * Demographic kind of a land property.
         *
         */
        let DemographicKind =
        {
            "urban": "urban",
            "rural": "rural",
            "other": "other"
        };
        Object.freeze (DemographicKind);

        /**
         * Kind of zone.
         *
         */
        let ZoneKind =
        {
            "specialRestrictionLand": "specialRestrictionLand",
            "weatherZone": "weatherZone",
            "other": "other",
            "electricalNetwork": "electricalNetwork"
        };
        Object.freeze (ZoneKind);

        /**
         * A grant provides a right, as defined by type, for a parcel of land.
         *
         * Note that the association to Location, Asset, Organisation, etc. for the Grant is inherited from Agreement, a type of Document.
         *
         */
        class LocationGrant extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LocationGrant;
                if (null == bucket)
                   cim_data.LocationGrant = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LocationGrant[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "LocationGrant";
                base.parse_element (/<cim:LocationGrant.propertyData>([\s\S]*?)<\/cim:LocationGrant.propertyData>/g, obj, "propertyData", base.to_string, sub, context);
                base.parse_attribute (/<cim:LocationGrant.LandProperty\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LandProperty", sub, context);
                let bucket = context.parsed.LocationGrant;
                if (null == bucket)
                   context.parsed.LocationGrant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "LocationGrant", "propertyData", "propertyData",  base.from_string, fields);
                base.export_attribute (obj, "LocationGrant", "LandProperty", "LandProperty", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LocationGrant_collapse" aria-expanded="true" aria-controls="LocationGrant_collapse" style="margin-left: 10px;">LocationGrant</a></legend>
                    <div id="LocationGrant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#propertyData}}<div><b>propertyData</b>: {{propertyData}}</div>{{/propertyData}}
                    {{#LandProperty}}<div><b>LandProperty</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LandProperty}}&quot;);}); return false;'>{{LandProperty}}</a></div>{{/LandProperty}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LocationGrant_collapse" aria-expanded="true" aria-controls="{{id}}_LocationGrant_collapse" style="margin-left: 10px;">LocationGrant</a></legend>
                    <div id="{{id}}_LocationGrant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_propertyData'>propertyData: </label><div class='col-sm-8'><input id='{{id}}_propertyData' class='form-control' type='text'{{#propertyData}} value='{{propertyData}}'{{/propertyData}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LandProperty'>LandProperty: </label><div class='col-sm-8'><input id='{{id}}_LandProperty' class='form-control' type='text'{{#LandProperty}} value='{{LandProperty}}'{{/LandProperty}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LocationGrant" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_propertyData").value; if ("" !== temp) obj["propertyData"] = temp;
                temp = document.getElementById (id + "_LandProperty").value; if ("" !== temp) obj["LandProperty"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LandProperty", "0..1", "0..*", "LandProperty", "LocationGrants"]
                        ]
                    )
                );
            }
        }

        /**
         * This class is used for handling the accompanying annotations, time stamp, author, etc. of designs, drawings and maps.
         *
         * A red line can be associated with any Location object.
         *
         */
        class RedLine extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RedLine;
                if (null == bucket)
                   cim_data.RedLine = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RedLine[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "RedLine";
                base.parse_attribute (/<cim:RedLine.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                let bucket = context.parsed.RedLine;
                if (null == bucket)
                   context.parsed.RedLine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RedLine", "status", "status", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RedLine_collapse" aria-expanded="true" aria-controls="RedLine_collapse" style="margin-left: 10px;">RedLine</a></legend>
                    <div id="RedLine_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    </div>
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RedLine_collapse" aria-expanded="true" aria-controls="{{id}}_RedLine_collapse" style="margin-left: 10px;">RedLine</a></legend>
                    <div id="{{id}}_RedLine_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RedLine" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;

                return (obj);
            }
        }

        /**
         * A right-of-way (ROW) is for land where it is lawful to use for a public road, an electric power line, etc.
         *
         * Note that the association to Location, Asset, Organisation, etc. for the Grant is inherited from Agreement, a type of Document.
         *
         */
        class RightOfWay extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RightOfWay;
                if (null == bucket)
                   cim_data.RightOfWay = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RightOfWay[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "RightOfWay";
                base.parse_element (/<cim:RightOfWay.propertyData>([\s\S]*?)<\/cim:RightOfWay.propertyData>/g, obj, "propertyData", base.to_string, sub, context);
                base.parse_attributes (/<cim:RightOfWay.LandProperties\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LandProperties", sub, context);
                let bucket = context.parsed.RightOfWay;
                if (null == bucket)
                   context.parsed.RightOfWay = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "RightOfWay", "propertyData", "propertyData",  base.from_string, fields);
                base.export_attributes (obj, "RightOfWay", "LandProperties", "LandProperties", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RightOfWay_collapse" aria-expanded="true" aria-controls="RightOfWay_collapse" style="margin-left: 10px;">RightOfWay</a></legend>
                    <div id="RightOfWay_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#propertyData}}<div><b>propertyData</b>: {{propertyData}}</div>{{/propertyData}}
                    {{#LandProperties}}<div><b>LandProperties</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/LandProperties}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["LandProperties"]) obj["LandProperties_string"] = obj["LandProperties"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["LandProperties_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RightOfWay_collapse" aria-expanded="true" aria-controls="{{id}}_RightOfWay_collapse" style="margin-left: 10px;">RightOfWay</a></legend>
                    <div id="{{id}}_RightOfWay_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_propertyData'>propertyData: </label><div class='col-sm-8'><input id='{{id}}_propertyData' class='form-control' type='text'{{#propertyData}} value='{{propertyData}}'{{/propertyData}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LandProperties'>LandProperties: </label><div class='col-sm-8'><input id='{{id}}_LandProperties' class='form-control' type='text'{{#LandProperties}} value='{{LandProperties_string}}'{{/LandProperties}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RightOfWay" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_propertyData").value; if ("" !== temp) obj["propertyData"] = temp;
                temp = document.getElementById (id + "_LandProperties").value; if ("" !== temp) obj["LandProperties"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LandProperties", "0..*", "0..*", "LandProperty", "RightOfWays"]
                        ]
                    )
                );
            }
        }

        /**
         * Information about a particular piece of (land) property such as its use.
         *
         * Ownership of the property may be determined through associations to Organisations and/or ErpPersons.
         *
         */
        class LandProperty extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LandProperty;
                if (null == bucket)
                   cim_data.LandProperty = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LandProperty[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LandProperty";
                base.parse_attribute (/<cim:LandProperty.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:LandProperty.demographicKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "demographicKind", sub, context);
                base.parse_element (/<cim:LandProperty.externalRecordReference>([\s\S]*?)<\/cim:LandProperty.externalRecordReference>/g, obj, "externalRecordReference", base.to_string, sub, context);
                base.parse_attribute (/<cim:LandProperty.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:LandProperty.LocationGrants\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LocationGrants", sub, context);
                base.parse_attributes (/<cim:LandProperty.RightOfWays\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RightOfWays", sub, context);
                base.parse_attributes (/<cim:LandProperty.ErpOrganisationRoles\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpOrganisationRoles", sub, context);
                base.parse_attributes (/<cim:LandProperty.Locations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Locations", sub, context);
                base.parse_attributes (/<cim:LandProperty.ErpPersonRoles\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersonRoles", sub, context);
                base.parse_attributes (/<cim:LandProperty.ErpSiteLevelDatas\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpSiteLevelDatas", sub, context);
                base.parse_attributes (/<cim:LandProperty.AssetContainers\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AssetContainers", sub, context);
                let bucket = context.parsed.LandProperty;
                if (null == bucket)
                   context.parsed.LandProperty = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "LandProperty", "kind", "kind", fields);
                base.export_attribute (obj, "LandProperty", "demographicKind", "demographicKind", fields);
                base.export_element (obj, "LandProperty", "externalRecordReference", "externalRecordReference",  base.from_string, fields);
                base.export_attribute (obj, "LandProperty", "status", "status", fields);
                base.export_attributes (obj, "LandProperty", "LocationGrants", "LocationGrants", fields);
                base.export_attributes (obj, "LandProperty", "RightOfWays", "RightOfWays", fields);
                base.export_attributes (obj, "LandProperty", "ErpOrganisationRoles", "ErpOrganisationRoles", fields);
                base.export_attributes (obj, "LandProperty", "Locations", "Locations", fields);
                base.export_attributes (obj, "LandProperty", "ErpPersonRoles", "ErpPersonRoles", fields);
                base.export_attributes (obj, "LandProperty", "ErpSiteLevelDatas", "ErpSiteLevelDatas", fields);
                base.export_attributes (obj, "LandProperty", "AssetContainers", "AssetContainers", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LandProperty_collapse" aria-expanded="true" aria-controls="LandProperty_collapse" style="margin-left: 10px;">LandProperty</a></legend>
                    <div id="LandProperty_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#demographicKind}}<div><b>demographicKind</b>: {{demographicKind}}</div>{{/demographicKind}}
                    {{#externalRecordReference}}<div><b>externalRecordReference</b>: {{externalRecordReference}}</div>{{/externalRecordReference}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#LocationGrants}}<div><b>LocationGrants</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/LocationGrants}}
                    {{#RightOfWays}}<div><b>RightOfWays</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/RightOfWays}}
                    {{#ErpOrganisationRoles}}<div><b>ErpOrganisationRoles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpOrganisationRoles}}
                    {{#Locations}}<div><b>Locations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Locations}}
                    {{#ErpPersonRoles}}<div><b>ErpPersonRoles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpPersonRoles}}
                    {{#ErpSiteLevelDatas}}<div><b>ErpSiteLevelDatas</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ErpSiteLevelDatas}}
                    {{#AssetContainers}}<div><b>AssetContainers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/AssetContainers}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindLandPropertyKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in LandPropertyKind) obj["kindLandPropertyKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                obj["demographicKindDemographicKind"] = [{ id: '', selected: (!obj["demographicKind"])}]; for (let property in DemographicKind) obj["demographicKindDemographicKind"].push ({ id: property, selected: obj["demographicKind"] && obj["demographicKind"].endsWith ('.' + property)});
                if (obj["LocationGrants"]) obj["LocationGrants_string"] = obj["LocationGrants"].join ();
                if (obj["RightOfWays"]) obj["RightOfWays_string"] = obj["RightOfWays"].join ();
                if (obj["ErpOrganisationRoles"]) obj["ErpOrganisationRoles_string"] = obj["ErpOrganisationRoles"].join ();
                if (obj["Locations"]) obj["Locations_string"] = obj["Locations"].join ();
                if (obj["ErpPersonRoles"]) obj["ErpPersonRoles_string"] = obj["ErpPersonRoles"].join ();
                if (obj["ErpSiteLevelDatas"]) obj["ErpSiteLevelDatas_string"] = obj["ErpSiteLevelDatas"].join ();
                if (obj["AssetContainers"]) obj["AssetContainers_string"] = obj["AssetContainers"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindLandPropertyKind"];
                delete obj["demographicKindDemographicKind"];
                delete obj["LocationGrants_string"];
                delete obj["RightOfWays_string"];
                delete obj["ErpOrganisationRoles_string"];
                delete obj["Locations_string"];
                delete obj["ErpPersonRoles_string"];
                delete obj["ErpSiteLevelDatas_string"];
                delete obj["AssetContainers_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LandProperty_collapse" aria-expanded="true" aria-controls="{{id}}_LandProperty_collapse" style="margin-left: 10px;">LandProperty</a></legend>
                    <div id="{{id}}_LandProperty_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindLandPropertyKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindLandPropertyKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_demographicKind'>demographicKind: </label><div class='col-sm-8'><select id='{{id}}_demographicKind' class='form-control custom-select'>{{#demographicKindDemographicKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/demographicKindDemographicKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_externalRecordReference'>externalRecordReference: </label><div class='col-sm-8'><input id='{{id}}_externalRecordReference' class='form-control' type='text'{{#externalRecordReference}} value='{{externalRecordReference}}'{{/externalRecordReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RightOfWays'>RightOfWays: </label><div class='col-sm-8'><input id='{{id}}_RightOfWays' class='form-control' type='text'{{#RightOfWays}} value='{{RightOfWays_string}}'{{/RightOfWays}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Locations'>Locations: </label><div class='col-sm-8'><input id='{{id}}_Locations' class='form-control' type='text'{{#Locations}} value='{{Locations_string}}'{{/Locations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetContainers'>AssetContainers: </label><div class='col-sm-8'><input id='{{id}}_AssetContainers' class='form-control' type='text'{{#AssetContainers}} value='{{AssetContainers_string}}'{{/AssetContainers}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LandProperty" };
                super.submit (id, obj);
                temp = LandPropertyKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#LandPropertyKind." + temp; else delete obj["kind"];
                temp = DemographicKind[document.getElementById (id + "_demographicKind").value]; if (temp) obj["demographicKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#DemographicKind." + temp; else delete obj["demographicKind"];
                temp = document.getElementById (id + "_externalRecordReference").value; if ("" !== temp) obj["externalRecordReference"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_RightOfWays").value; if ("" !== temp) obj["RightOfWays"] = temp.split (",");
                temp = document.getElementById (id + "_Locations").value; if ("" !== temp) obj["Locations"] = temp.split (",");
                temp = document.getElementById (id + "_AssetContainers").value; if ("" !== temp) obj["AssetContainers"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LocationGrants", "0..*", "0..1", "LocationGrant", "LandProperty"],
                            ["RightOfWays", "0..*", "0..*", "RightOfWay", "LandProperties"],
                            ["ErpOrganisationRoles", "0..*", "1..", "PropertyOrganisationRole", "LandProperty"],
                            ["Locations", "0..*", "0..*", "Location", "LandProperties"],
                            ["ErpPersonRoles", "0..*", "1", "PersonPropertyRole", "LandProperty"],
                            ["ErpSiteLevelDatas", "0..*", "0..1", "ErpSiteLevelData", "LandProperty"],
                            ["AssetContainers", "0..*", "0..*", "AssetContainer", "LandProperties"]
                        ]
                    )
                );
            }
        }

        /**
         * Route that is followed, for example by service crews.
         *
         */
        class Route extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Route;
                if (null == bucket)
                   cim_data.Route = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Route[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Route";
                base.parse_element (/<cim:Route.type>([\s\S]*?)<\/cim:Route.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attribute (/<cim:Route.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:Route.Locations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Locations", sub, context);
                base.parse_attributes (/<cim:Route.Crews\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Crews", sub, context);
                let bucket = context.parsed.Route;
                if (null == bucket)
                   context.parsed.Route = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Route", "type", "type",  base.from_string, fields);
                base.export_attribute (obj, "Route", "status", "status", fields);
                base.export_attributes (obj, "Route", "Locations", "Locations", fields);
                base.export_attributes (obj, "Route", "Crews", "Crews", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Route_collapse" aria-expanded="true" aria-controls="Route_collapse" style="margin-left: 10px;">Route</a></legend>
                    <div id="Route_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#Locations}}<div><b>Locations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Locations}}
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Crews}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Locations"]) obj["Locations_string"] = obj["Locations"].join ();
                if (obj["Crews"]) obj["Crews_string"] = obj["Crews"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Locations_string"];
                delete obj["Crews_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Route_collapse" aria-expanded="true" aria-controls="{{id}}_Route_collapse" style="margin-left: 10px;">Route</a></legend>
                    <div id="{{id}}_Route_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Locations'>Locations: </label><div class='col-sm-8'><input id='{{id}}_Locations' class='form-control' type='text'{{#Locations}} value='{{Locations_string}}'{{/Locations}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Route" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" !== temp) obj["type"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_Locations").value; if ("" !== temp) obj["Locations"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Locations", "0..*", "0..*", "Location", "Routes"],
                            ["Crews", "0..*", "0..1", "OldCrew", "Route"]
                        ]
                    )
                );
            }
        }

        /**
         * Area divided off from other areas.
         *
         * It may be part of the electrical network, a land area where special restrictions apply, weather areas, etc. For weather, it is an area where a set of relatively homogenous weather measurements apply.
         *
         */
        class Zone extends Common.Location
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Zone;
                if (null == bucket)
                   cim_data.Zone = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Zone[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Location.prototype.parse.call (this, context, sub);
                obj.cls = "Zone";
                base.parse_attribute (/<cim:Zone.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.Zone;
                if (null == bucket)
                   context.parsed.Zone = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Location.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Zone", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Zone_collapse" aria-expanded="true" aria-controls="Zone_collapse" style="margin-left: 10px;">Zone</a></legend>
                    <div id="Zone_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindZoneKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in ZoneKind) obj["kindZoneKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindZoneKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Zone_collapse" aria-expanded="true" aria-controls="{{id}}_Zone_collapse" style="margin-left: 10px;">Zone</a></legend>
                    <div id="{{id}}_Zone_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindZoneKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindZoneKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Zone" };
                super.submit (id, obj);
                temp = ZoneKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ZoneKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        return (
            {
                RightOfWay: RightOfWay,
                DemographicKind: DemographicKind,
                ZoneKind: ZoneKind,
                Zone: Zone,
                LandProperty: LandProperty,
                LandPropertyKind: LandPropertyKind,
                RedLine: RedLine,
                LocationGrant: LocationGrant,
                Route: Route
            }
        );
    }
);