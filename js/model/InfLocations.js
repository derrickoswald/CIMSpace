define
(
    ["model/base", "model/Common", "model/Core"],
    function (base, Common, Core)
    {

        /**
         * Kind of zone.
         *
         */
        var ZoneKind =
        {
            electricalNetwork: "electricalNetwork",
            specialRestrictionLand: "specialRestrictionLand",
            weatherZone: "weatherZone",
            other: "other"
        };
        Object.freeze (ZoneKind);

        /**
         * Kind of (land) property.
         *
         */
        var LandPropertyKind =
        {
            building: "building",
            customerPremise: "customerPremise",
            depot: "depot",
            store: "store",
            substation: "substation",
            gridSupplyPoint: "gridSupplyPoint",
            external: "external"
        };
        Object.freeze (LandPropertyKind);

        /**
         * Demographic kind of a land property.
         *
         */
        var DemographicKind =
        {
            urban: "urban",
            rural: "rural",
            other: "other"
        };
        Object.freeze (DemographicKind);

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
                var bucket = cim_data.RedLine;
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
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "RedLine";
                base.parse_element (/<cim:RedLine.status>([\s\S]*?)<\/cim:RedLine.status>/g, obj, "status", base.to_string, sub, context);
                var bucket = context.parsed.RedLine;
                if (null == bucket)
                   context.parsed.RedLine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "RedLine", "status", "status",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RedLine_collapse" aria-expanded="true" aria-controls="RedLine_collapse" style="margin-left: 10px;">RedLine</a></legend>
                    <div id="RedLine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_RedLine_collapse" aria-expanded="true" aria-controls="{{id}}_RedLine_collapse" style="margin-left: 10px;">RedLine</a></legend>
                    <div id="{{id}}_RedLine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RedLine" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" != temp) obj.status = temp;

                return (obj);
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
                var bucket = cim_data.Zone;
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
                var obj;

                obj = Common.Location.prototype.parse.call (this, context, sub);
                obj.cls = "Zone";
                base.parse_attribute (/<cim:Zone.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                var bucket = context.parsed.Zone;
                if (null == bucket)
                   context.parsed.Zone = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Location.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Zone", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Zone_collapse" aria-expanded="true" aria-controls="Zone_collapse" style="margin-left: 10px;">Zone</a></legend>
                    <div id="Zone_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ZoneKind = []; if (!obj.kind) obj.ZoneKind.push ({ id: '', selected: true}); for (var property in ZoneKind) obj.ZoneKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ZoneKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Zone_collapse" aria-expanded="true" aria-controls="{{id}}_Zone_collapse" style="margin-left: 10px;">Zone</a></legend>
                    <div id="{{id}}_Zone_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control'>{{#ZoneKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ZoneKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Zone" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kind").value; if ("" != temp) { temp = ZoneKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#ZoneKind." + temp; }

                return (obj);
            }
        }

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
                var bucket = cim_data.LocationGrant;
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
                var obj;

                obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "LocationGrant";
                base.parse_element (/<cim:LocationGrant.propertyData>([\s\S]*?)<\/cim:LocationGrant.propertyData>/g, obj, "propertyData", base.to_string, sub, context);
                base.parse_attribute (/<cim:LocationGrant.LandProperty\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LandProperty", sub, context);
                var bucket = context.parsed.LocationGrant;
                if (null == bucket)
                   context.parsed.LocationGrant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "LocationGrant", "propertyData", "propertyData",  base.from_string, fields);
                base.export_attribute (obj, "LocationGrant", "LandProperty", "LandProperty", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LocationGrant_collapse" aria-expanded="true" aria-controls="LocationGrant_collapse" style="margin-left: 10px;">LocationGrant</a></legend>
                    <div id="LocationGrant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#propertyData}}<div><b>propertyData</b>: {{propertyData}}</div>{{/propertyData}}
                    {{#LandProperty}}<div><b>LandProperty</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LandProperty}}&quot;);})'>{{LandProperty}}</a></div>{{/LandProperty}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_LocationGrant_collapse" aria-expanded="true" aria-controls="{{id}}_LocationGrant_collapse" style="margin-left: 10px;">LocationGrant</a></legend>
                    <div id="{{id}}_LocationGrant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_propertyData'>propertyData: </label><div class='col-sm-8'><input id='{{id}}_propertyData' class='form-control' type='text'{{#propertyData}} value='{{propertyData}}'{{/propertyData}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LandProperty'>LandProperty: </label><div class='col-sm-8'><input id='{{id}}_LandProperty' class='form-control' type='text'{{#LandProperty}} value='{{LandProperty}}'{{/LandProperty}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "LocationGrant" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_propertyData").value; if ("" != temp) obj.propertyData = temp;
                temp = document.getElementById (id + "_LandProperty").value; if ("" != temp) obj.LandProperty = temp;

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
         * Route that is followed, for example by service crews.
         *
         */
        class Route extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Route;
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
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Route";
                base.parse_element (/<cim:Route.status>([\s\S]*?)<\/cim:Route.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:Route.type>([\s\S]*?)<\/cim:Route.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:Route.Locations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Locations", sub, context);
                base.parse_attributes (/<cim:Route.Crews\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crews", sub, context);
                var bucket = context.parsed.Route;
                if (null == bucket)
                   context.parsed.Route = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Route", "status", "status",  base.from_string, fields);
                base.export_element (obj, "Route", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "Route", "Locations", "Locations", fields);
                base.export_attributes (obj, "Route", "Crews", "Crews", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Route_collapse" aria-expanded="true" aria-controls="Route_collapse" style="margin-left: 10px;">Route</a></legend>
                    <div id="Route_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#Locations}}<div><b>Locations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Locations}}
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Crews}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Locations) obj.Locations_string = obj.Locations.join ();
                if (obj.Crews) obj.Crews_string = obj.Crews.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Locations_string;
                delete obj.Crews_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Route_collapse" aria-expanded="true" aria-controls="{{id}}_Route_collapse" style="margin-left: 10px;">Route</a></legend>
                    <div id="{{id}}_Route_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Locations'>Locations: </label><div class='col-sm-8'><input id='{{id}}_Locations' class='form-control' type='text'{{#Locations}} value='{{Locations}}_string'{{/Locations}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Route" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById (id + "_Locations").value; if ("" != temp) obj.Locations = temp.split (",");

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
                var bucket = cim_data.LandProperty;
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
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LandProperty";
                base.parse_attribute (/<cim:LandProperty.demographicKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "demographicKind", sub, context);
                base.parse_element (/<cim:LandProperty.externalRecordReference>([\s\S]*?)<\/cim:LandProperty.externalRecordReference>/g, obj, "externalRecordReference", base.to_string, sub, context);
                base.parse_attribute (/<cim:LandProperty.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:LandProperty.status>([\s\S]*?)<\/cim:LandProperty.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attributes (/<cim:LandProperty.ErpOrganisationRoles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpOrganisationRoles", sub, context);
                base.parse_attributes (/<cim:LandProperty.LocationGrants\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LocationGrants", sub, context);
                base.parse_attributes (/<cim:LandProperty.RightOfWays\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RightOfWays", sub, context);
                base.parse_attributes (/<cim:LandProperty.Locations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Locations", sub, context);
                base.parse_attributes (/<cim:LandProperty.AssetContainers\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetContainers", sub, context);
                base.parse_attributes (/<cim:LandProperty.ErpSiteLevelDatas\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpSiteLevelDatas", sub, context);
                base.parse_attributes (/<cim:LandProperty.ErpPersonRoles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpPersonRoles", sub, context);
                var bucket = context.parsed.LandProperty;
                if (null == bucket)
                   context.parsed.LandProperty = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "LandProperty", "demographicKind", "demographicKind", fields);
                base.export_element (obj, "LandProperty", "externalRecordReference", "externalRecordReference",  base.from_string, fields);
                base.export_attribute (obj, "LandProperty", "kind", "kind", fields);
                base.export_element (obj, "LandProperty", "status", "status",  base.from_string, fields);
                base.export_attributes (obj, "LandProperty", "ErpOrganisationRoles", "ErpOrganisationRoles", fields);
                base.export_attributes (obj, "LandProperty", "LocationGrants", "LocationGrants", fields);
                base.export_attributes (obj, "LandProperty", "RightOfWays", "RightOfWays", fields);
                base.export_attributes (obj, "LandProperty", "Locations", "Locations", fields);
                base.export_attributes (obj, "LandProperty", "AssetContainers", "AssetContainers", fields);
                base.export_attributes (obj, "LandProperty", "ErpSiteLevelDatas", "ErpSiteLevelDatas", fields);
                base.export_attributes (obj, "LandProperty", "ErpPersonRoles", "ErpPersonRoles", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LandProperty_collapse" aria-expanded="true" aria-controls="LandProperty_collapse" style="margin-left: 10px;">LandProperty</a></legend>
                    <div id="LandProperty_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#demographicKind}}<div><b>demographicKind</b>: {{demographicKind}}</div>{{/demographicKind}}
                    {{#externalRecordReference}}<div><b>externalRecordReference</b>: {{externalRecordReference}}</div>{{/externalRecordReference}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#ErpOrganisationRoles}}<div><b>ErpOrganisationRoles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpOrganisationRoles}}
                    {{#LocationGrants}}<div><b>LocationGrants</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LocationGrants}}
                    {{#RightOfWays}}<div><b>RightOfWays</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RightOfWays}}
                    {{#Locations}}<div><b>Locations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Locations}}
                    {{#AssetContainers}}<div><b>AssetContainers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AssetContainers}}
                    {{#ErpSiteLevelDatas}}<div><b>ErpSiteLevelDatas</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpSiteLevelDatas}}
                    {{#ErpPersonRoles}}<div><b>ErpPersonRoles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpPersonRoles}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.DemographicKind = []; if (!obj.demographicKind) obj.DemographicKind.push ({ id: '', selected: true}); for (var property in DemographicKind) obj.DemographicKind.push ({ id: property, selected: obj.demographicKind && obj.demographicKind.endsWith ('.' + property)});
                obj.LandPropertyKind = []; if (!obj.kind) obj.LandPropertyKind.push ({ id: '', selected: true}); for (var property in LandPropertyKind) obj.LandPropertyKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.ErpOrganisationRoles) obj.ErpOrganisationRoles_string = obj.ErpOrganisationRoles.join ();
                if (obj.LocationGrants) obj.LocationGrants_string = obj.LocationGrants.join ();
                if (obj.RightOfWays) obj.RightOfWays_string = obj.RightOfWays.join ();
                if (obj.Locations) obj.Locations_string = obj.Locations.join ();
                if (obj.AssetContainers) obj.AssetContainers_string = obj.AssetContainers.join ();
                if (obj.ErpSiteLevelDatas) obj.ErpSiteLevelDatas_string = obj.ErpSiteLevelDatas.join ();
                if (obj.ErpPersonRoles) obj.ErpPersonRoles_string = obj.ErpPersonRoles.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DemographicKind;
                delete obj.LandPropertyKind;
                delete obj.ErpOrganisationRoles_string;
                delete obj.LocationGrants_string;
                delete obj.RightOfWays_string;
                delete obj.Locations_string;
                delete obj.AssetContainers_string;
                delete obj.ErpSiteLevelDatas_string;
                delete obj.ErpPersonRoles_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_LandProperty_collapse" aria-expanded="true" aria-controls="{{id}}_LandProperty_collapse" style="margin-left: 10px;">LandProperty</a></legend>
                    <div id="{{id}}_LandProperty_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_demographicKind'>demographicKind: </label><div class='col-sm-8'><select id='{{id}}_demographicKind' class='form-control'>{{#DemographicKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/DemographicKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_externalRecordReference'>externalRecordReference: </label><div class='col-sm-8'><input id='{{id}}_externalRecordReference' class='form-control' type='text'{{#externalRecordReference}} value='{{externalRecordReference}}'{{/externalRecordReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control'>{{#LandPropertyKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/LandPropertyKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RightOfWays'>RightOfWays: </label><div class='col-sm-8'><input id='{{id}}_RightOfWays' class='form-control' type='text'{{#RightOfWays}} value='{{RightOfWays}}_string'{{/RightOfWays}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Locations'>Locations: </label><div class='col-sm-8'><input id='{{id}}_Locations' class='form-control' type='text'{{#Locations}} value='{{Locations}}_string'{{/Locations}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AssetContainers'>AssetContainers: </label><div class='col-sm-8'><input id='{{id}}_AssetContainers' class='form-control' type='text'{{#AssetContainers}} value='{{AssetContainers}}_string'{{/AssetContainers}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "LandProperty" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_demographicKind").value; if ("" != temp) { temp = DemographicKind[temp]; if ("undefined" != typeof (temp)) obj.demographicKind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#DemographicKind." + temp; }
                temp = document.getElementById (id + "_externalRecordReference").value; if ("" != temp) obj.externalRecordReference = temp;
                temp = document.getElementById (id + "_kind").value; if ("" != temp) { temp = LandPropertyKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#LandPropertyKind." + temp; }
                temp = document.getElementById (id + "_status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById (id + "_RightOfWays").value; if ("" != temp) obj.RightOfWays = temp.split (",");
                temp = document.getElementById (id + "_Locations").value; if ("" != temp) obj.Locations = temp.split (",");
                temp = document.getElementById (id + "_AssetContainers").value; if ("" != temp) obj.AssetContainers = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ErpOrganisationRoles", "0..*", "1..", "PropertyOrganisationRole", "LandProperty"],
                            ["LocationGrants", "0..*", "0..1", "LocationGrant", "LandProperty"],
                            ["RightOfWays", "0..*", "0..*", "RightOfWay", "LandProperties"],
                            ["Locations", "0..*", "0..*", "Location", "LandProperties"],
                            ["AssetContainers", "0..*", "0..*", "AssetContainer", "LandProperties"],
                            ["ErpSiteLevelDatas", "0..*", "0..1", "ErpSiteLevelData", "LandProperty"],
                            ["ErpPersonRoles", "0..*", "1", "PersonPropertyRole", "LandProperty"]
                        ]
                    )
                );
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
                var bucket = cim_data.RightOfWay;
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
                var obj;

                obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "RightOfWay";
                base.parse_element (/<cim:RightOfWay.propertyData>([\s\S]*?)<\/cim:RightOfWay.propertyData>/g, obj, "propertyData", base.to_string, sub, context);
                base.parse_attributes (/<cim:RightOfWay.LandProperties\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LandProperties", sub, context);
                var bucket = context.parsed.RightOfWay;
                if (null == bucket)
                   context.parsed.RightOfWay = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "RightOfWay", "propertyData", "propertyData",  base.from_string, fields);
                base.export_attributes (obj, "RightOfWay", "LandProperties", "LandProperties", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RightOfWay_collapse" aria-expanded="true" aria-controls="RightOfWay_collapse" style="margin-left: 10px;">RightOfWay</a></legend>
                    <div id="RightOfWay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#propertyData}}<div><b>propertyData</b>: {{propertyData}}</div>{{/propertyData}}
                    {{#LandProperties}}<div><b>LandProperties</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LandProperties}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.LandProperties) obj.LandProperties_string = obj.LandProperties.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.LandProperties_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_RightOfWay_collapse" aria-expanded="true" aria-controls="{{id}}_RightOfWay_collapse" style="margin-left: 10px;">RightOfWay</a></legend>
                    <div id="{{id}}_RightOfWay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_propertyData'>propertyData: </label><div class='col-sm-8'><input id='{{id}}_propertyData' class='form-control' type='text'{{#propertyData}} value='{{propertyData}}'{{/propertyData}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LandProperties'>LandProperties: </label><div class='col-sm-8'><input id='{{id}}_LandProperties' class='form-control' type='text'{{#LandProperties}} value='{{LandProperties}}_string'{{/LandProperties}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RightOfWay" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_propertyData").value; if ("" != temp) obj.propertyData = temp;
                temp = document.getElementById (id + "_LandProperties").value; if ("" != temp) obj.LandProperties = temp.split (",");

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

        return (
            {
                RightOfWay: RightOfWay,
                Zone: Zone,
                LandProperty: LandProperty,
                RedLine: RedLine,
                LocationGrant: LocationGrant,
                Route: Route
            }
        );
    }
);