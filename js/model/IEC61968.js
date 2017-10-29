define
(
    ["model/base"],
    /**
     * The IEC 61968 subpackages of the CIM are developed, standardized and maintained by IEC TC57 Working Group 14: interfaces for distribution management (WG14).
     *
     * Currently, normative parts of the model support the needs of information exchange defined in IEC 61968-3, IEC 61968-4, IEC 61968-9 and in IEC 61968-13.
     *
     */
    function (base)
    {

        /**
         * IEC 61968 version number assigned to this UML model.
         *
         */
        function parse_IEC61968CIMVersion (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "IEC61968CIMVersion";
            base.parse_element (/<cim:IEC61968CIMVersion.date>([\s\S]*?)<\/cim:IEC61968CIMVersion.date>/g, obj, "date", base.to_string, sub, context);
            base.parse_element (/<cim:IEC61968CIMVersion.version>([\s\S]*?)<\/cim:IEC61968CIMVersion.version>/g, obj, "version", base.to_string, sub, context);
            bucket = context.parsed.IEC61968CIMVersion;
            if (null == bucket)
                context.parsed.IEC61968CIMVersion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_IEC61968CIMVersion (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "IEC61968CIMVersion", "date", base.from_string, fields);
            base.export_element (obj, "IEC61968CIMVersion", "version", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_IEC61968CIMVersion: export_IEC61968CIMVersion,
                parse_IEC61968CIMVersion: parse_IEC61968CIMVersion
            }
        );
    }
);