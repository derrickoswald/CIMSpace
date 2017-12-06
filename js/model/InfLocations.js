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
                this._id = template.id;
                var bucket = cim_data.RedLine;
                if (null == bucket)
                   cim_data.RedLine = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RedLine[this._id];
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

                base.export_element (obj, "RedLine", "status", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RedLine_collapse" aria-expanded="true" aria-controls="RedLine_collapse" style="margin-left: 10px;">RedLine</a></legend>
                    <div id="RedLine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.Zone;
                if (null == bucket)
                   cim_data.Zone = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Zone[this._id];
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

                base.export_element (obj, "Zone", "kind", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Zone_collapse" aria-expanded="true" aria-controls="Zone_collapse" style="margin-left: 10px;">Zone</a></legend>
                    <div id="Zone_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#ZoneKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ZoneKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.LocationGrant;
                if (null == bucket)
                   cim_data.LocationGrant = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LocationGrant[this._id];
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

                base.export_element (obj, "LocationGrant", "propertyData", base.from_string, fields);
                base.export_attribute (obj, "LocationGrant", "LandProperty", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LocationGrant_collapse" aria-expanded="true" aria-controls="LocationGrant_collapse" style="margin-left: 10px;">LocationGrant</a></legend>
                    <div id="LocationGrant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='propertyData'>propertyData: </label><div class='col-sm-8'><input id='propertyData' class='form-control' type='text'{{#propertyData}} value='{{propertyData}}'{{/propertyData}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LandProperty'>LandProperty: </label><div class='col-sm-8'><input id='LandProperty' class='form-control' type='text'{{#LandProperty}} value='{{LandProperty}}'{{/LandProperty}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.Route;
                if (null == bucket)
                   cim_data.Route = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Route[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Route";
                base.parse_element (/<cim:Route.status>([\s\S]*?)<\/cim:Route.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:Route.type>([\s\S]*?)<\/cim:Route.type>/g, obj, "type", base.to_string, sub, context);

                var bucket = context.parsed.Route;
                if (null == bucket)
                   context.parsed.Route = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Route", "status", base.from_string, fields);
                base.export_element (obj, "Route", "type", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Route_collapse" aria-expanded="true" aria-controls="Route_collapse" style="margin-left: 10px;">Route</a></legend>
                    <div id="Route_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.LandProperty;
                if (null == bucket)
                   cim_data.LandProperty = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LandProperty[this._id];
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

                var bucket = context.parsed.LandProperty;
                if (null == bucket)
                   context.parsed.LandProperty = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "LandProperty", "demographicKind", base.from_string, fields);
                base.export_element (obj, "LandProperty", "externalRecordReference", base.from_string, fields);
                base.export_element (obj, "LandProperty", "kind", base.from_string, fields);
                base.export_element (obj, "LandProperty", "status", base.from_string, fields);
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
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DemographicKind;
                delete obj.LandPropertyKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LandProperty_collapse" aria-expanded="true" aria-controls="LandProperty_collapse" style="margin-left: 10px;">LandProperty</a></legend>
                    <div id="LandProperty_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='demographicKind'>demographicKind: </label><div class='col-sm-8'><select id='demographicKind' class='form-control'>{{#DemographicKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/DemographicKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='externalRecordReference'>externalRecordReference: </label><div class='col-sm-8'><input id='externalRecordReference' class='form-control' type='text'{{#externalRecordReference}} value='{{externalRecordReference}}'{{/externalRecordReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#LandPropertyKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/LandPropertyKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.RightOfWay;
                if (null == bucket)
                   cim_data.RightOfWay = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RightOfWay[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "RightOfWay";
                base.parse_element (/<cim:RightOfWay.propertyData>([\s\S]*?)<\/cim:RightOfWay.propertyData>/g, obj, "propertyData", base.to_string, sub, context);

                var bucket = context.parsed.RightOfWay;
                if (null == bucket)
                   context.parsed.RightOfWay = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "RightOfWay", "propertyData", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RightOfWay_collapse" aria-expanded="true" aria-controls="RightOfWay_collapse" style="margin-left: 10px;">RightOfWay</a></legend>
                    <div id="RightOfWay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='propertyData'>propertyData: </label><div class='col-sm-8'><input id='propertyData' class='form-control' type='text'{{#propertyData}} value='{{propertyData}}'{{/propertyData}}></div></div>
                    </div>
                    <fieldset>
                    `
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