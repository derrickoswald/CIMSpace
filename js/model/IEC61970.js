define
(
    ["model/base"],
    /**
     * Top package for IEC 61970.
     *
     */
    function (base)
    {

        /**
         * This is the IEC 61970 CIM version number assigned to this UML model.
         *
         */
        function parse_IEC61970CIMVersion (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "IEC61970CIMVersion";
            base.parse_element (/<cim:IEC61970CIMVersion.date>([\s\S]*?)<\/cim:IEC61970CIMVersion.date>/g, obj, "date", base.to_string, sub, context);
            base.parse_element (/<cim:IEC61970CIMVersion.version>([\s\S]*?)<\/cim:IEC61970CIMVersion.version>/g, obj, "version", base.to_string, sub, context);
            bucket = context.parsed.IEC61970CIMVersion;
            if (null == bucket)
                context.parsed.IEC61970CIMVersion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_IEC61970CIMVersion (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "IEC61970CIMVersion", "date", base.from_string, fields);
            base.export_element (obj, "IEC61970CIMVersion", "version", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_IEC61970CIMVersion: export_IEC61970CIMVersion,
                parse_IEC61970CIMVersion: parse_IEC61970CIMVersion
            }
        );
    }
);