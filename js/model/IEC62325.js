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
        class IEC62325CIMVersion extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IEC62325CIMVersion;
                if (null == bucket)
                   cim_data.IEC62325CIMVersion = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IEC62325CIMVersion[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IEC62325CIMVersion";
                base.parse_element (/<cim:IEC62325CIMVersion.date>([\s\S]*?)<\/cim:IEC62325CIMVersion.date>/g, obj, "date", base.to_string, sub, context);
                base.parse_element (/<cim:IEC62325CIMVersion.version>([\s\S]*?)<\/cim:IEC62325CIMVersion.version>/g, obj, "version", base.to_string, sub, context);

                var bucket = context.parsed.IEC62325CIMVersion;
                if (null == bucket)
                   context.parsed.IEC62325CIMVersion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "IEC62325CIMVersion", "date", base.from_string, fields);
                base.export_element (obj, "IEC62325CIMVersion", "version", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                IEC62325CIMVersion: IEC62325CIMVersion
            }
        );
    }
);