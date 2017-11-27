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
        class URI extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.URI;
                if (null == bucket)
                   cim_data.URI = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.URI[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "URI";

                var bucket = context.parsed.URI;
                if (null == bucket)
                   context.parsed.URI = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ModelDescriptionCIMVersion extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ModelDescriptionCIMVersion;
                if (null == bucket)
                   cim_data.ModelDescriptionCIMVersion = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ModelDescriptionCIMVersion[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ModelDescriptionCIMVersion";
                base.parse_element (/<cim:ModelDescriptionCIMVersion.date>([\s\S]*?)<\/cim:ModelDescriptionCIMVersion.date>/g, obj, "date", base.to_string, sub, context);
                base.parse_element (/<cim:ModelDescriptionCIMVersion.version>([\s\S]*?)<\/cim:ModelDescriptionCIMVersion.version>/g, obj, "version", base.to_string, sub, context);

                var bucket = context.parsed.ModelDescriptionCIMVersion;
                if (null == bucket)
                   context.parsed.ModelDescriptionCIMVersion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ModelDescriptionCIMVersion", "date", base.from_string, fields);
                base.export_element (obj, "ModelDescriptionCIMVersion", "version", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class FullModelDocumentElement extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FullModelDocumentElement;
                if (null == bucket)
                   cim_data.FullModelDocumentElement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FullModelDocumentElement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FullModelDocumentElement";

                var bucket = context.parsed.FullModelDocumentElement;
                if (null == bucket)
                   context.parsed.FullModelDocumentElement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Identity contain comon descriptive information.
         *
         */
        class Description extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Description;
                if (null == bucket)
                   cim_data.Description = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Description[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Description";
                base.parse_element (/<cim:Description.description>([\s\S]*?)<\/cim:Description.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:Description.name>([\s\S]*?)<\/cim:Description.name>/g, obj, "name", base.to_string, sub, context);
                base.parse_element (/<cim:Description.version>([\s\S]*?)<\/cim:Description.version>/g, obj, "version", base.to_string, sub, context);

                var bucket = context.parsed.Description;
                if (null == bucket)
                   context.parsed.Description = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Description", "description", base.from_string, fields);
                base.export_element (obj, "Description", "name", base.from_string, fields);
                base.export_element (obj, "Description", "version", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class Model extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Model;
                if (null == bucket)
                   cim_data.Model = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Model[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Model";
                base.parse_element (/<cim:Model.created>([\s\S]*?)<\/cim:Model.created>/g, obj, "created", base.to_datetime, sub, context);
                base.parse_element (/<cim:Model.scenarioTime>([\s\S]*?)<\/cim:Model.scenarioTime>/g, obj, "scenarioTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Model.description>([\s\S]*?)<\/cim:Model.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:Model.modelingAuthoritySet>([\s\S]*?)<\/cim:Model.modelingAuthoritySet>/g, obj, "modelingAuthoritySet", base.to_string, sub, context);
                base.parse_element (/<cim:Model.profile>([\s\S]*?)<\/cim:Model.profile>/g, obj, "profile", base.to_string, sub, context);
                base.parse_element (/<cim:Model.version>([\s\S]*?)<\/cim:Model.version>/g, obj, "version", base.to_string, sub, context);

                var bucket = context.parsed.Model;
                if (null == bucket)
                   context.parsed.Model = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Model", "created", base.from_datetime, fields);
                base.export_element (obj, "Model", "scenarioTime", base.from_datetime, fields);
                base.export_element (obj, "Model", "description", base.from_string, fields);
                base.export_element (obj, "Model", "modelingAuthoritySet", base.from_string, fields);
                base.export_element (obj, "Model", "profile", base.from_string, fields);
                base.export_element (obj, "Model", "version", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class FullModel extends FullModelDocumentElement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FullModel;
                if (null == bucket)
                   cim_data.FullModel = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FullModel[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = FullModelDocumentElement.prototype.parse.call (this, context, sub);
                obj.cls = "FullModel";

                var bucket = context.parsed.FullModel;
                if (null == bucket)
                   context.parsed.FullModel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = FullModelDocumentElement.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class Statements extends FullModelDocumentElement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Statements;
                if (null == bucket)
                   cim_data.Statements = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Statements[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = FullModelDocumentElement.prototype.parse.call (this, context, sub);
                obj.cls = "Statements";

                var bucket = context.parsed.Statements;
                if (null == bucket)
                   context.parsed.Statements = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = FullModelDocumentElement.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class DescriptionID extends Description
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DescriptionID;
                if (null == bucket)
                   cim_data.DescriptionID = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DescriptionID[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Description.prototype.parse.call (this, context, sub);
                obj.cls = "DescriptionID";
                base.parse_element (/<cim:DescriptionID.uri>([\s\S]*?)<\/cim:DescriptionID.uri>/g, obj, "uri", base.to_string, sub, context);

                var bucket = context.parsed.DescriptionID;
                if (null == bucket)
                   context.parsed.DescriptionID = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Description.prototype.export.call (this, obj, false);

                base.export_element (obj, "DescriptionID", "uri", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class DifferenceModel extends Model
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DifferenceModel;
                if (null == bucket)
                   cim_data.DifferenceModel = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DifferenceModel[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Model.prototype.parse.call (this, context, sub);
                obj.cls = "DifferenceModel";
                base.parse_attribute (/<cim:DifferenceModel.forwardDifferences\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "forwardDifferences", sub, context);
                base.parse_attribute (/<cim:DifferenceModel.reverseDifferences\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "reverseDifferences", sub, context);

                var bucket = context.parsed.DifferenceModel;
                if (null == bucket)
                   context.parsed.DifferenceModel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Model.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DifferenceModel", "forwardDifferences", fields);
                base.export_attribute (obj, "DifferenceModel", "reverseDifferences", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                Statements: Statements,
                ModelDescriptionCIMVersion: ModelDescriptionCIMVersion,
                DescriptionID: DescriptionID,
                DifferenceModel: DifferenceModel,
                Description: Description,
                URI: URI,
                FullModel: FullModel,
                FullModelDocumentElement: FullModelDocumentElement,
                Model: Model
            }
        );
    }
);