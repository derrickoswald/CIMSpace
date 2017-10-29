define
(
    ["model/base"],
    /**
     * The IEC 62325 subpackages of the CIM are developed, standardized and maintained by IEC TC57 Working Group 16.
     *
     */
    function (base)
    {

        /**
         * IEC 62325 version number assigned to this UML model.
         *
         */
        function parse_IEC62325CIMVersion (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "IEC62325CIMVersion";
            base.parse_element (/<cim:IEC62325CIMVersion.date>([\s\S]*?)<\/cim:IEC62325CIMVersion.date>/g, obj, "date", base.to_string, sub, context);
            base.parse_element (/<cim:IEC62325CIMVersion.version>([\s\S]*?)<\/cim:IEC62325CIMVersion.version>/g, obj, "version", base.to_string, sub, context);
            bucket = context.parsed.IEC62325CIMVersion;
            if (null == bucket)
                context.parsed.IEC62325CIMVersion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_IEC62325CIMVersion (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "IEC62325CIMVersion", "date", base.from_string, fields);
            base.export_element (obj, "IEC62325CIMVersion", "version", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_IEC62325CIMVersion: export_IEC62325CIMVersion,
                parse_IEC62325CIMVersion: parse_IEC62325CIMVersion
            }
        );
    }
);