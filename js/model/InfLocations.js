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
        function parse_RedLine (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "RedLine";
            base.parse_element (/<cim:RedLine.status>([\s\S]*?)<\/cim:RedLine.status>/g, obj, "status", base.to_string, sub, context);
            bucket = context.parsed.RedLine;
            if (null == bucket)
                context.parsed.RedLine = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RedLine (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "RedLine", "status", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Area divided off from other areas.
         *
         * It may be part of the electrical network, a land area where special restrictions apply, weather areas, etc. For weather, it is an area where a set of relatively homogenous weather measurements apply.
         *
         */
        function parse_Zone (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Location (context, sub);
            obj.cls = "Zone";
            base.parse_element (/<cim:Zone.kind>([\s\S]*?)<\/cim:Zone.kind>/g, obj, "kind", base.to_string, sub, context);
            bucket = context.parsed.Zone;
            if (null == bucket)
                context.parsed.Zone = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Zone (obj, exporters, full)
        {
            var fields = exporters["Location"](obj, exporters, false);

            base.export_element (obj, "Zone", "kind", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of zone.
         *
         */
        function parse_ZoneKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ZoneKind";
            base.parse_element (/<cim:ZoneKind.electricalNetwork>([\s\S]*?)<\/cim:ZoneKind.electricalNetwork>/g, obj, "electricalNetwork", base.to_string, sub, context);
            base.parse_element (/<cim:ZoneKind.specialRestrictionLand>([\s\S]*?)<\/cim:ZoneKind.specialRestrictionLand>/g, obj, "specialRestrictionLand", base.to_string, sub, context);
            base.parse_element (/<cim:ZoneKind.weatherZone>([\s\S]*?)<\/cim:ZoneKind.weatherZone>/g, obj, "weatherZone", base.to_string, sub, context);
            base.parse_element (/<cim:ZoneKind.other>([\s\S]*?)<\/cim:ZoneKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.ZoneKind;
            if (null == bucket)
                context.parsed.ZoneKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ZoneKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ZoneKind", "electricalNetwork", base.from_string, fields);
            base.export_element (obj, "ZoneKind", "specialRestrictionLand", base.from_string, fields);
            base.export_element (obj, "ZoneKind", "weatherZone", base.from_string, fields);
            base.export_element (obj, "ZoneKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A grant provides a right, as defined by type, for a parcel of land.
         *
         * Note that the association to Location, Asset, Organisation, etc. for the Grant is inherited from Agreement, a type of Document.
         *
         */
        function parse_LocationGrant (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Agreement (context, sub);
            obj.cls = "LocationGrant";
            base.parse_element (/<cim:LocationGrant.propertyData>([\s\S]*?)<\/cim:LocationGrant.propertyData>/g, obj, "propertyData", base.to_string, sub, context);
            base.parse_attribute (/<cim:LocationGrant.LandProperty\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LandProperty", sub, context);
            bucket = context.parsed.LocationGrant;
            if (null == bucket)
                context.parsed.LocationGrant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LocationGrant (obj, exporters, full)
        {
            var fields = exporters["Agreement"](obj, exporters, false);

            base.export_element (obj, "LocationGrant", "propertyData", base.from_string, fields);
            base.export_attribute (obj, "LocationGrant", "LandProperty", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Route that is followed, for example by service crews.
         *
         */
        function parse_Route (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Route";
            base.parse_element (/<cim:Route.status>([\s\S]*?)<\/cim:Route.status>/g, obj, "status", base.to_string, sub, context);
            base.parse_element (/<cim:Route.type>([\s\S]*?)<\/cim:Route.type>/g, obj, "type", base.to_string, sub, context);
            bucket = context.parsed.Route;
            if (null == bucket)
                context.parsed.Route = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Route (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Route", "status", base.from_string, fields);
            base.export_element (obj, "Route", "type", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Kind of (land) property.
         *
         */
        function parse_LandPropertyKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LandPropertyKind";
            base.parse_element (/<cim:LandPropertyKind.building>([\s\S]*?)<\/cim:LandPropertyKind.building>/g, obj, "building", base.to_string, sub, context);
            base.parse_element (/<cim:LandPropertyKind.customerPremise>([\s\S]*?)<\/cim:LandPropertyKind.customerPremise>/g, obj, "customerPremise", base.to_string, sub, context);
            base.parse_element (/<cim:LandPropertyKind.depot>([\s\S]*?)<\/cim:LandPropertyKind.depot>/g, obj, "depot", base.to_string, sub, context);
            base.parse_element (/<cim:LandPropertyKind.store>([\s\S]*?)<\/cim:LandPropertyKind.store>/g, obj, "store", base.to_string, sub, context);
            base.parse_element (/<cim:LandPropertyKind.substation>([\s\S]*?)<\/cim:LandPropertyKind.substation>/g, obj, "substation", base.to_string, sub, context);
            base.parse_element (/<cim:LandPropertyKind.gridSupplyPoint>([\s\S]*?)<\/cim:LandPropertyKind.gridSupplyPoint>/g, obj, "gridSupplyPoint", base.to_string, sub, context);
            base.parse_element (/<cim:LandPropertyKind.external>([\s\S]*?)<\/cim:LandPropertyKind.external>/g, obj, "external", base.to_string, sub, context);
            bucket = context.parsed.LandPropertyKind;
            if (null == bucket)
                context.parsed.LandPropertyKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LandPropertyKind (obj, exporters, full)
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
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Demographic kind of a land property.
         *
         */
        function parse_DemographicKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DemographicKind";
            base.parse_element (/<cim:DemographicKind.urban>([\s\S]*?)<\/cim:DemographicKind.urban>/g, obj, "urban", base.to_string, sub, context);
            base.parse_element (/<cim:DemographicKind.rural>([\s\S]*?)<\/cim:DemographicKind.rural>/g, obj, "rural", base.to_string, sub, context);
            base.parse_element (/<cim:DemographicKind.other>([\s\S]*?)<\/cim:DemographicKind.other>/g, obj, "other", base.to_string, sub, context);
            bucket = context.parsed.DemographicKind;
            if (null == bucket)
                context.parsed.DemographicKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DemographicKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "DemographicKind", "urban", base.from_string, fields);
            base.export_element (obj, "DemographicKind", "rural", base.from_string, fields);
            base.export_element (obj, "DemographicKind", "other", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Information about a particular piece of (land) property such as its use.
         *
         * Ownership of the property may be determined through associations to Organisations and/or ErpPersons.
         *
         */
        function parse_LandProperty (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "LandProperty";
            base.parse_element (/<cim:LandProperty.demographicKind>([\s\S]*?)<\/cim:LandProperty.demographicKind>/g, obj, "demographicKind", base.to_string, sub, context);
            base.parse_element (/<cim:LandProperty.externalRecordReference>([\s\S]*?)<\/cim:LandProperty.externalRecordReference>/g, obj, "externalRecordReference", base.to_string, sub, context);
            base.parse_element (/<cim:LandProperty.kind>([\s\S]*?)<\/cim:LandProperty.kind>/g, obj, "kind", base.to_string, sub, context);
            base.parse_element (/<cim:LandProperty.status>([\s\S]*?)<\/cim:LandProperty.status>/g, obj, "status", base.to_string, sub, context);
            bucket = context.parsed.LandProperty;
            if (null == bucket)
                context.parsed.LandProperty = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_LandProperty (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "LandProperty", "demographicKind", base.from_string, fields);
            base.export_element (obj, "LandProperty", "externalRecordReference", base.from_string, fields);
            base.export_element (obj, "LandProperty", "kind", base.from_string, fields);
            base.export_element (obj, "LandProperty", "status", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A right-of-way (ROW) is for land where it is lawful to use for a public road, an electric power line, etc.
         *
         * Note that the association to Location, Asset, Organisation, etc. for the Grant is inherited from Agreement, a type of Document.
         *
         */
        function parse_RightOfWay (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Agreement (context, sub);
            obj.cls = "RightOfWay";
            base.parse_element (/<cim:RightOfWay.propertyData>([\s\S]*?)<\/cim:RightOfWay.propertyData>/g, obj, "propertyData", base.to_string, sub, context);
            bucket = context.parsed.RightOfWay;
            if (null == bucket)
                context.parsed.RightOfWay = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_RightOfWay (obj, exporters, full)
        {
            var fields = exporters["Agreement"](obj, exporters, false);

            base.export_element (obj, "RightOfWay", "propertyData", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_LandPropertyKind: parse_LandPropertyKind,
                export_LandProperty: export_LandProperty,
                export_DemographicKind: export_DemographicKind,
                parse_RightOfWay: parse_RightOfWay,
                parse_RedLine: parse_RedLine,
                parse_Zone: parse_Zone,
                export_Route: export_Route,
                export_RedLine: export_RedLine,
                export_LocationGrant: export_LocationGrant,
                parse_LocationGrant: parse_LocationGrant,
                export_Zone: export_Zone,
                parse_Route: parse_Route,
                parse_ZoneKind: parse_ZoneKind,
                parse_LandProperty: parse_LandProperty,
                parse_DemographicKind: parse_DemographicKind,
                export_LandPropertyKind: export_LandPropertyKind,
                export_ZoneKind: export_ZoneKind,
                export_RightOfWay: export_RightOfWay
            }
        );
    }
);