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

        function parse_DifferenceModel (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Model (context, sub);
            obj.cls = "DifferenceModel";
            obj["forwardDifferences"] = base.parse_attribute (/<cim:DifferenceModel.forwardDifferences\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            obj["reverseDifferences"] = base.parse_attribute (/<cim:DifferenceModel.reverseDifferences\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DifferenceModel;
            if (null == bucket)
                context.parsed.DifferenceModel = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_ModelDescriptionCIMVersion (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ModelDescriptionCIMVersion";
            obj["date"] = base.parse_element (/<cim:ModelDescriptionCIMVersion.date>([\s\S]*?)<\/cim:ModelDescriptionCIMVersion.date>/g, sub, context, true);
            obj["version"] = base.parse_element (/<cim:ModelDescriptionCIMVersion.version>([\s\S]*?)<\/cim:ModelDescriptionCIMVersion.version>/g, sub, context, true);
            bucket = context.parsed.ModelDescriptionCIMVersion;
            if (null == bucket)
                context.parsed.ModelDescriptionCIMVersion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            obj["description"] = base.parse_element (/<cim:Description.description>([\s\S]*?)<\/cim:Description.description>/g, sub, context, true);
            obj["name"] = base.parse_element (/<cim:Description.name>([\s\S]*?)<\/cim:Description.name>/g, sub, context, true);
            obj["version"] = base.parse_element (/<cim:Description.version>([\s\S]*?)<\/cim:Description.version>/g, sub, context, true);
            bucket = context.parsed.Description;
            if (null == bucket)
                context.parsed.Description = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_DescriptionID (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_Description (context, sub);
            obj.cls = "DescriptionID";
            obj["uri"] = base.parse_element (/<cim:DescriptionID.uri>([\s\S]*?)<\/cim:DescriptionID.uri>/g, sub, context, true);
            bucket = context.parsed.DescriptionID;
            if (null == bucket)
                context.parsed.DescriptionID = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

        function parse_Model (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Model";
            obj["created"] = base.to_datetime (base.parse_element (/<cim:Model.created>([\s\S]*?)<\/cim:Model.created>/g, sub, context, true));
            obj["scenarioTime"] = base.to_datetime (base.parse_element (/<cim:Model.scenarioTime>([\s\S]*?)<\/cim:Model.scenarioTime>/g, sub, context, true));
            obj["description"] = base.parse_element (/<cim:Model.description>([\s\S]*?)<\/cim:Model.description>/g, sub, context, true);
            obj["modelingAuthoritySet"] = base.parse_element (/<cim:Model.modelingAuthoritySet>([\s\S]*?)<\/cim:Model.modelingAuthoritySet>/g, sub, context, true);
            obj["profile"] = base.parse_element (/<cim:Model.profile>([\s\S]*?)<\/cim:Model.profile>/g, sub, context, true);
            obj["version"] = base.parse_element (/<cim:Model.version>([\s\S]*?)<\/cim:Model.version>/g, sub, context, true);
            bucket = context.parsed.Model;
            if (null == bucket)
                context.parsed.Model = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_Description: parse_Description,
                parse_Statements: parse_Statements,
                parse_FullModelDocumentElement: parse_FullModelDocumentElement,
                parse_Model: parse_Model,
                parse_ModelDescriptionCIMVersion: parse_ModelDescriptionCIMVersion,
                parse_DifferenceModel: parse_DifferenceModel,
                parse_FullModel: parse_FullModel,
                parse_URI: parse_URI,
                parse_DescriptionID: parse_DescriptionID
            }
        );
    }
);