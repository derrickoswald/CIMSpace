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
        class IEC61968CIMVersion extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IEC61968CIMVersion;
                if (null == bucket)
                   cim_data.IEC61968CIMVersion = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IEC61968CIMVersion[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IEC61968CIMVersion";
                base.parse_element (/<cim:IEC61968CIMVersion.date>([\s\S]*?)<\/cim:IEC61968CIMVersion.date>/g, obj, "date", base.to_string, sub, context);
                base.parse_element (/<cim:IEC61968CIMVersion.version>([\s\S]*?)<\/cim:IEC61968CIMVersion.version>/g, obj, "version", base.to_string, sub, context);

                var bucket = context.parsed.IEC61968CIMVersion;
                if (null == bucket)
                   context.parsed.IEC61968CIMVersion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "IEC61968CIMVersion", "date", base.from_string, fields);
                base.export_element (obj, "IEC61968CIMVersion", "version", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                IEC61968CIMVersion: IEC61968CIMVersion
            }
        );
    }
);