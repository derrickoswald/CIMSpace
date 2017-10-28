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
            /**
             * Form is YYYY-MM-DD for example for January 5, 2009 it is 2009-01-05.
             *
             */
            base.parse_element (/<cim:IEC62325CIMVersion.date>([\s\S]*?)<\/cim:IEC62325CIMVersion.date>/g, obj, "date", base.to_string, sub, context);

            /**
             * Form is IEC62325CIMXXvYY where XX is the major CIM package version and the YY is the minor version.
             *
             * For example IEC62325CIM10v03.
             *
             */
            base.parse_element (/<cim:IEC62325CIMVersion.version>([\s\S]*?)<\/cim:IEC62325CIMVersion.version>/g, obj, "version", base.to_string, sub, context);

            bucket = context.parsed.IEC62325CIMVersion;
            if (null == bucket)
                context.parsed.IEC62325CIMVersion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_IEC62325CIMVersion: parse_IEC62325CIMVersion
            }
        );
    }
);