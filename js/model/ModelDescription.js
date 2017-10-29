define
(
    ["model/base"],
    /**
     * The package describes meta data for the exchange of power system model data.
     *
     */
    function (base)
    {

        /**
         * URI is a string following the rules defined by the W3C/IETF URI Planning Interest Group in a set of RFCs of which one is RFC 3305.
         *
         */
        function parse_URI (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "URI";
            bucket = context.parsed.URI;
            if (null == bucket)
                context.parsed.URI = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_URI (obj, exporters, full)
        {
            var fields = [];

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_Statements (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_FullModelDocumentElement (context, sub);
            obj.cls = "Statements";
            bucket = context.parsed.Statements;
            if (null == bucket)
                context.parsed.Statements = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Statements (obj, exporters, full)
        {
            var fields = exporters["FullModelDocumentElement"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_DifferenceModel (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Model (context, sub);
            obj.cls = "DifferenceModel";
            base.parse_attribute (/<cim:DifferenceModel.forwardDifferences\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "forwardDifferences", sub, context);
            base.parse_attribute (/<cim:DifferenceModel.reverseDifferences\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "reverseDifferences", sub, context);
            bucket = context.parsed.DifferenceModel;
            if (null == bucket)
                context.parsed.DifferenceModel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DifferenceModel (obj, exporters, full)
        {
            var fields = exporters["Model"](obj, exporters, false);

            base.export_attribute (obj, "DifferenceModel", "forwardDifferences", fields);
            base.export_attribute (obj, "DifferenceModel", "reverseDifferences", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ModelDescriptionCIMVersion (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ModelDescriptionCIMVersion";
            base.parse_element (/<cim:ModelDescriptionCIMVersion.date>([\s\S]*?)<\/cim:ModelDescriptionCIMVersion.date>/g, obj, "date", base.to_string, sub, context);
            base.parse_element (/<cim:ModelDescriptionCIMVersion.version>([\s\S]*?)<\/cim:ModelDescriptionCIMVersion.version>/g, obj, "version", base.to_string, sub, context);
            bucket = context.parsed.ModelDescriptionCIMVersion;
            if (null == bucket)
                context.parsed.ModelDescriptionCIMVersion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ModelDescriptionCIMVersion (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ModelDescriptionCIMVersion", "date", base.from_string, fields);
            base.export_element (obj, "ModelDescriptionCIMVersion", "version", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_FullModelDocumentElement (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "FullModelDocumentElement";
            bucket = context.parsed.FullModelDocumentElement;
            if (null == bucket)
                context.parsed.FullModelDocumentElement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FullModelDocumentElement (obj, exporters, full)
        {
            var fields = [];

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Identity contain comon descriptive information.
         *
         */
        function parse_Description (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Description";
            base.parse_element (/<cim:Description.description>([\s\S]*?)<\/cim:Description.description>/g, obj, "description", base.to_string, sub, context);
            base.parse_element (/<cim:Description.name>([\s\S]*?)<\/cim:Description.name>/g, obj, "name", base.to_string, sub, context);
            base.parse_element (/<cim:Description.version>([\s\S]*?)<\/cim:Description.version>/g, obj, "version", base.to_string, sub, context);
            bucket = context.parsed.Description;
            if (null == bucket)
                context.parsed.Description = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Description (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Description", "description", base.from_string, fields);
            base.export_element (obj, "Description", "name", base.from_string, fields);
            base.export_element (obj, "Description", "version", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_DescriptionID (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Description (context, sub);
            obj.cls = "DescriptionID";
            base.parse_element (/<cim:DescriptionID.uri>([\s\S]*?)<\/cim:DescriptionID.uri>/g, obj, "uri", base.to_string, sub, context);
            bucket = context.parsed.DescriptionID;
            if (null == bucket)
                context.parsed.DescriptionID = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DescriptionID (obj, exporters, full)
        {
            var fields = exporters["Description"](obj, exporters, false);

            base.export_element (obj, "DescriptionID", "uri", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_FullModel (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_FullModelDocumentElement (context, sub);
            obj.cls = "FullModel";
            bucket = context.parsed.FullModel;
            if (null == bucket)
                context.parsed.FullModel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_FullModel (obj, exporters, full)
        {
            var fields = exporters["FullModelDocumentElement"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_Model (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Model";
            base.parse_element (/<cim:Model.created>([\s\S]*?)<\/cim:Model.created>/g, obj, "created", base.to_datetime, sub, context);
            base.parse_element (/<cim:Model.scenarioTime>([\s\S]*?)<\/cim:Model.scenarioTime>/g, obj, "scenarioTime", base.to_datetime, sub, context);
            base.parse_element (/<cim:Model.description>([\s\S]*?)<\/cim:Model.description>/g, obj, "description", base.to_string, sub, context);
            base.parse_element (/<cim:Model.modelingAuthoritySet>([\s\S]*?)<\/cim:Model.modelingAuthoritySet>/g, obj, "modelingAuthoritySet", base.to_string, sub, context);
            base.parse_element (/<cim:Model.profile>([\s\S]*?)<\/cim:Model.profile>/g, obj, "profile", base.to_string, sub, context);
            base.parse_element (/<cim:Model.version>([\s\S]*?)<\/cim:Model.version>/g, obj, "version", base.to_string, sub, context);
            bucket = context.parsed.Model;
            if (null == bucket)
                context.parsed.Model = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Model (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "Model", "created", base.from_datetime, fields);
            base.export_element (obj, "Model", "scenarioTime", base.from_datetime, fields);
            base.export_element (obj, "Model", "description", base.from_string, fields);
            base.export_element (obj, "Model", "modelingAuthoritySet", base.from_string, fields);
            base.export_element (obj, "Model", "profile", base.from_string, fields);
            base.export_element (obj, "Model", "version", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_DescriptionID: export_DescriptionID,
                parse_Statements: parse_Statements,
                parse_FullModelDocumentElement: parse_FullModelDocumentElement,
                export_FullModelDocumentElement: export_FullModelDocumentElement,
                parse_FullModel: parse_FullModel,
                export_DifferenceModel: export_DifferenceModel,
                export_Model: export_Model,
                parse_DescriptionID: parse_DescriptionID,
                parse_Description: parse_Description,
                export_Statements: export_Statements,
                parse_Model: parse_Model,
                parse_ModelDescriptionCIMVersion: parse_ModelDescriptionCIMVersion,
                export_ModelDescriptionCIMVersion: export_ModelDescriptionCIMVersion,
                parse_DifferenceModel: parse_DifferenceModel,
                parse_URI: parse_URI,
                export_URI: export_URI,
                export_Description: export_Description,
                export_FullModel: export_FullModel
            }
        );
    }
);