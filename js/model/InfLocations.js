define
(
    ["model/base", "model/Common", "model/Core"],
    function (base, Common, Core)
    {

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
<a data-toggle="collapse" href="#RedLine_collapse" aria-expanded="true" aria-controls="RedLine_collapse">RedLine</a>
<div id="RedLine_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:Zone.kind>([\s\S]*?)<\/cim:Zone.kind>/g, obj, "kind", base.to_string, sub, context);

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
<a data-toggle="collapse" href="#Zone_collapse" aria-expanded="true" aria-controls="Zone_collapse">Zone</a>
<div id="Zone_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Location.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
</div>
`
                );
           }        }

        /**
         * Kind of zone.
         *
         */
        class ZoneKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ZoneKind;
                if (null == bucket)
                   cim_data.ZoneKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ZoneKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ZoneKind";
                base.parse_element (/<cim:ZoneKind.electricalNetwork>([\s\S]*?)<\/cim:ZoneKind.electricalNetwork>/g, obj, "electricalNetwork", base.to_string, sub, context);
                base.parse_element (/<cim:ZoneKind.specialRestrictionLand>([\s\S]*?)<\/cim:ZoneKind.specialRestrictionLand>/g, obj, "specialRestrictionLand", base.to_string, sub, context);
                base.parse_element (/<cim:ZoneKind.weatherZone>([\s\S]*?)<\/cim:ZoneKind.weatherZone>/g, obj, "weatherZone", base.to_string, sub, context);
                base.parse_element (/<cim:ZoneKind.other>([\s\S]*?)<\/cim:ZoneKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.ZoneKind;
                if (null == bucket)
                   context.parsed.ZoneKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ZoneKind", "electricalNetwork", base.from_string, fields);
                base.export_element (obj, "ZoneKind", "specialRestrictionLand", base.from_string, fields);
                base.export_element (obj, "ZoneKind", "weatherZone", base.from_string, fields);
                base.export_element (obj, "ZoneKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ZoneKind_collapse" aria-expanded="true" aria-controls="ZoneKind_collapse">ZoneKind</a>
<div id="ZoneKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#electricalNetwork}}<div><b>electricalNetwork</b>: {{electricalNetwork}}</div>{{/electricalNetwork}}
{{#specialRestrictionLand}}<div><b>specialRestrictionLand</b>: {{specialRestrictionLand}}</div>{{/specialRestrictionLand}}
{{#weatherZone}}<div><b>weatherZone</b>: {{weatherZone}}</div>{{/weatherZone}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#LocationGrant_collapse" aria-expanded="true" aria-controls="LocationGrant_collapse">LocationGrant</a>
<div id="LocationGrant_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Agreement.prototype.template.call (this) +
`
{{#propertyData}}<div><b>propertyData</b>: {{propertyData}}</div>{{/propertyData}}
{{#LandProperty}}<div><b>LandProperty</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LandProperty}}&quot;);})'>{{LandProperty}}</a></div>{{/LandProperty}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#Route_collapse" aria-expanded="true" aria-controls="Route_collapse">Route</a>
<div id="Route_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
</div>
`
                );
           }        }

        /**
         * Kind of (land) property.
         *
         */
        class LandPropertyKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LandPropertyKind;
                if (null == bucket)
                   cim_data.LandPropertyKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LandPropertyKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LandPropertyKind";
                base.parse_element (/<cim:LandPropertyKind.building>([\s\S]*?)<\/cim:LandPropertyKind.building>/g, obj, "building", base.to_string, sub, context);
                base.parse_element (/<cim:LandPropertyKind.customerPremise>([\s\S]*?)<\/cim:LandPropertyKind.customerPremise>/g, obj, "customerPremise", base.to_string, sub, context);
                base.parse_element (/<cim:LandPropertyKind.depot>([\s\S]*?)<\/cim:LandPropertyKind.depot>/g, obj, "depot", base.to_string, sub, context);
                base.parse_element (/<cim:LandPropertyKind.store>([\s\S]*?)<\/cim:LandPropertyKind.store>/g, obj, "store", base.to_string, sub, context);
                base.parse_element (/<cim:LandPropertyKind.substation>([\s\S]*?)<\/cim:LandPropertyKind.substation>/g, obj, "substation", base.to_string, sub, context);
                base.parse_element (/<cim:LandPropertyKind.gridSupplyPoint>([\s\S]*?)<\/cim:LandPropertyKind.gridSupplyPoint>/g, obj, "gridSupplyPoint", base.to_string, sub, context);
                base.parse_element (/<cim:LandPropertyKind.external>([\s\S]*?)<\/cim:LandPropertyKind.external>/g, obj, "external", base.to_string, sub, context);

                var bucket = context.parsed.LandPropertyKind;
                if (null == bucket)
                   context.parsed.LandPropertyKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "LandPropertyKind", "building", base.from_string, fields);
                base.export_element (obj, "LandPropertyKind", "customerPremise", base.from_string, fields);
                base.export_element (obj, "LandPropertyKind", "depot", base.from_string, fields);
                base.export_element (obj, "LandPropertyKind", "store", base.from_string, fields);
                base.export_element (obj, "LandPropertyKind", "substation", base.from_string, fields);
                base.export_element (obj, "LandPropertyKind", "gridSupplyPoint", base.from_string, fields);
                base.export_element (obj, "LandPropertyKind", "external", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LandPropertyKind_collapse" aria-expanded="true" aria-controls="LandPropertyKind_collapse">LandPropertyKind</a>
<div id="LandPropertyKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#building}}<div><b>building</b>: {{building}}</div>{{/building}}
{{#customerPremise}}<div><b>customerPremise</b>: {{customerPremise}}</div>{{/customerPremise}}
{{#depot}}<div><b>depot</b>: {{depot}}</div>{{/depot}}
{{#store}}<div><b>store</b>: {{store}}</div>{{/store}}
{{#substation}}<div><b>substation</b>: {{substation}}</div>{{/substation}}
{{#gridSupplyPoint}}<div><b>gridSupplyPoint</b>: {{gridSupplyPoint}}</div>{{/gridSupplyPoint}}
{{#external}}<div><b>external</b>: {{external}}</div>{{/external}}
</div>
`
                );
           }        }

        /**
         * Demographic kind of a land property.
         *
         */
        class DemographicKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DemographicKind;
                if (null == bucket)
                   cim_data.DemographicKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DemographicKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DemographicKind";
                base.parse_element (/<cim:DemographicKind.urban>([\s\S]*?)<\/cim:DemographicKind.urban>/g, obj, "urban", base.to_string, sub, context);
                base.parse_element (/<cim:DemographicKind.rural>([\s\S]*?)<\/cim:DemographicKind.rural>/g, obj, "rural", base.to_string, sub, context);
                base.parse_element (/<cim:DemographicKind.other>([\s\S]*?)<\/cim:DemographicKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.DemographicKind;
                if (null == bucket)
                   context.parsed.DemographicKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DemographicKind", "urban", base.from_string, fields);
                base.export_element (obj, "DemographicKind", "rural", base.from_string, fields);
                base.export_element (obj, "DemographicKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#DemographicKind_collapse" aria-expanded="true" aria-controls="DemographicKind_collapse">DemographicKind</a>
<div id="DemographicKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#urban}}<div><b>urban</b>: {{urban}}</div>{{/urban}}
{{#rural}}<div><b>rural</b>: {{rural}}</div>{{/rural}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:LandProperty.demographicKind>([\s\S]*?)<\/cim:LandProperty.demographicKind>/g, obj, "demographicKind", base.to_string, sub, context);
                base.parse_element (/<cim:LandProperty.externalRecordReference>([\s\S]*?)<\/cim:LandProperty.externalRecordReference>/g, obj, "externalRecordReference", base.to_string, sub, context);
                base.parse_element (/<cim:LandProperty.kind>([\s\S]*?)<\/cim:LandProperty.kind>/g, obj, "kind", base.to_string, sub, context);
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
<a data-toggle="collapse" href="#LandProperty_collapse" aria-expanded="true" aria-controls="LandProperty_collapse">LandProperty</a>
<div id="LandProperty_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#demographicKind}}<div><b>demographicKind</b>: {{demographicKind}}</div>{{/demographicKind}}
{{#externalRecordReference}}<div><b>externalRecordReference</b>: {{externalRecordReference}}</div>{{/externalRecordReference}}
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#RightOfWay_collapse" aria-expanded="true" aria-controls="RightOfWay_collapse">RightOfWay</a>
<div id="RightOfWay_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Agreement.prototype.template.call (this) +
`
{{#propertyData}}<div><b>propertyData</b>: {{propertyData}}</div>{{/propertyData}}
</div>
`
                );
           }        }

        return (
            {
                RightOfWay: RightOfWay,
                DemographicKind: DemographicKind,
                ZoneKind: ZoneKind,
                Zone: Zone,
                LandProperty: LandProperty,
                RedLine: RedLine,
                LandPropertyKind: LandPropertyKind,
                LocationGrant: LocationGrant,
                Route: Route
            }
        );
    }
);