define
(
    ["model/base"],
    /**
     * Top package for IEC 61970.
     */
    function (base)
    {

        /**
         * This is the IEC 61970 CIM version number assigned to this UML model.
         */
        function parse_IEC61970CIMVersion (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "IEC61970CIMVersion";
            /**
             * Form is YYYY-MM-DD for example for January 5, 2009 it is 2009-01-05.
             */
            obj["date"] = base.parse_element (/<cim:IEC61970CIMVersion.date>([\s\S]*?)<\/cim:IEC61970CIMVersion.date>/g, sub, context, true);
            /**
             * Form is IEC61970CIMXXvYY where XX is the major CIM package version and the YY is the minor version.
             * For example IEC61970CIM13v18.
             */
            obj["version"] = base.parse_element (/<cim:IEC61970CIMVersion.version>([\s\S]*?)<\/cim:IEC61970CIMVersion.version>/g, sub, context, true);
            bucket = context.parsed.IEC61970CIMVersion;
            if (null == bucket)
                context.parsed.IEC61970CIMVersion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_IEC61970CIMVersion: parse_IEC61970CIMVersion
            }
        );
    }
);