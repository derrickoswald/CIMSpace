define
(
    ["model/base"],
    /**
     * The package describes meta data for partitioning  power system models into non overlapping subsets of objects managed by a model authority.
     *
     */
    function (base)
    {

        /**
         * A Modeling Authority is an entity responsible for supplying and maintaining the data defining a specific set of objects in a network model.
         *
         */
        class ModelingAuthority extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ModelingAuthority;
                if (null == bucket)
                   cim_data.ModelingAuthority = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ModelingAuthority[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ModelingAuthority";

                var bucket = context.parsed.ModelingAuthority;
                if (null == bucket)
                   context.parsed.ModelingAuthority = bucket = {};
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
         * A Modeling Authority Set is a group of objects in a network model where the data is supplied and maintained by the same Modeling Authority.
         *
         * This class is typically not included in instance data exchange as this information is tracked by other mechanisms in the exchange.
         *
         */
        class ModelingAuthoritySet extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ModelingAuthoritySet;
                if (null == bucket)
                   cim_data.ModelingAuthoritySet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ModelingAuthoritySet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ModelingAuthoritySet";
                base.parse_attribute (/<cim:ModelingAuthoritySet.ModelingAuthority\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ModelingAuthority", sub, context);

                var bucket = context.parsed.ModelingAuthoritySet;
                if (null == bucket)
                   context.parsed.ModelingAuthoritySet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "ModelingAuthoritySet", "ModelingAuthority", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                ModelingAuthority: ModelingAuthority,
                ModelingAuthoritySet: ModelingAuthoritySet
            }
        );
    }
);