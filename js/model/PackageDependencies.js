define
(
    ["model/base"],
    /**
     * This package shows all the root level subpackage dependencies of the combined CIM model.
     *
     */
    function (base)
    {

        /**
         * The version of dependencies description among top level subpackages of the combined CIM model.
         *
         * This is not the same as the combined packages version.
         *
         */
        function parse_PackageDependenciesCIMVersion (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PackageDependenciesCIMVersion";
            base.parse_element (/<cim:PackageDependenciesCIMVersion.date>([\s\S]*?)<\/cim:PackageDependenciesCIMVersion.date>/g, obj, "date", base.to_string, sub, context);
            base.parse_element (/<cim:PackageDependenciesCIMVersion.version>([\s\S]*?)<\/cim:PackageDependenciesCIMVersion.version>/g, obj, "version", base.to_string, sub, context);
            bucket = context.parsed.PackageDependenciesCIMVersion;
            if (null == bucket)
                context.parsed.PackageDependenciesCIMVersion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_PackageDependenciesCIMVersion (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "PackageDependenciesCIMVersion", "date", base.from_string, fields);
            base.export_element (obj, "PackageDependenciesCIMVersion", "version", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_PackageDependenciesCIMVersion: export_PackageDependenciesCIMVersion,
                parse_PackageDependenciesCIMVersion: parse_PackageDependenciesCIMVersion
            }
        );
    }
);