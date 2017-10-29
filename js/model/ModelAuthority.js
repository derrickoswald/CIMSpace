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
        function parse_ModelingAuthority (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ModelingAuthority";
            bucket = context.parsed.ModelingAuthority;
            if (null == bucket)
                context.parsed.ModelingAuthority = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ModelingAuthority (obj, exporters, full)
        {
            var fields = [];

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A Modeling Authority Set is a group of objects in a network model where the data is supplied and maintained by the same Modeling Authority.
         *
         * This class is typically not included in instance data exchange as this information is tracked by other mechanisms in the exchange.
         *
         */
        function parse_ModelingAuthoritySet (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ModelingAuthoritySet";
            base.parse_attribute (/<cim:ModelingAuthoritySet.ModelingAuthority\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ModelingAuthority", sub, context);
            bucket = context.parsed.ModelingAuthoritySet;
            if (null == bucket)
                context.parsed.ModelingAuthoritySet = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ModelingAuthoritySet (obj, exporters, full)
        {
            var fields = [];

            base.export_attribute (obj, "ModelingAuthoritySet", "ModelingAuthority", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_ModelingAuthority: export_ModelingAuthority,
                export_ModelingAuthoritySet: export_ModelingAuthoritySet,
                parse_ModelingAuthority: parse_ModelingAuthority,
                parse_ModelingAuthoritySet: parse_ModelingAuthoritySet
            }
        );
    }
);