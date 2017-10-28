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
            /**
             * Form is YYYY-MM-DD for example for January 5, 2009 it is 2009-01-05.
             *
             */
            base.parse_element (/<cim:IEC61968CIMVersion.date>([\s\S]*?)<\/cim:IEC61968CIMVersion.date>/g, obj, "date", base.to_string, sub, context);

            /**
             * Form is IEC61968CIMXXvYY where XX is the major CIM package version and the YY is the minor version.
             *
             * For example IEC61968CIM10v17.
             *
             */
            base.parse_element (/<cim:IEC61968CIMVersion.version>([\s\S]*?)<\/cim:IEC61968CIMVersion.version>/g, obj, "version", base.to_string, sub, context);

            bucket = context.parsed.IEC61968CIMVersion;
            if (null == bucket)
                context.parsed.IEC61968CIMVersion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_IEC61968CIMVersion: parse_IEC61968CIMVersion
            }
        );
    }
);