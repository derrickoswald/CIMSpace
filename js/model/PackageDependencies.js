define
(
    ["model/base"],
    /**
     * This package shows all the root level subpackage dependencies of the combined CIM model.
     */
    function (base)
    {

        /**
         * The version of dependencies description among top level subpackages of the combined CIM model.
         * This is not the same as the combined packages version.
         */
        function parse_PackageDependenciesCIMVersion (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PackageDependenciesCIMVersion";
            /**
             * Date of last change to the main package dependencies in format YYYY-MM-DD.
             * This is updated when the version attribute is updated.
             */
            obj["date"] = base.parse_element (/<cim:PackageDependenciesCIMVersion.date>([\s\S]*?)<\/cim:PackageDependenciesCIMVersion.date>/g, sub, context, true);
            /**
             * The version of the main subpackages of the combined CIM model.
             * The format is simply an integer.  The version (and date) initial values should be updated any time the dependencies in the model change and require an actual change to the diagrams within this package.
             */
            obj["version"] = base.parse_element (/<cim:PackageDependenciesCIMVersion.version>([\s\S]*?)<\/cim:PackageDependenciesCIMVersion.version>/g, sub, context, true);
            bucket = context.parsed.PackageDependenciesCIMVersion;
            if (null == bucket)
                context.parsed.PackageDependenciesCIMVersion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_PackageDependenciesCIMVersion: parse_PackageDependenciesCIMVersion
            }
        );
    }
);