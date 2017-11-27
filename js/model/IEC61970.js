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
        class IEC61970CIMVersion extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IEC61970CIMVersion;
                if (null == bucket)
                   cim_data.IEC61970CIMVersion = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IEC61970CIMVersion[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IEC61970CIMVersion";
                base.parse_element (/<cim:IEC61970CIMVersion.date>([\s\S]*?)<\/cim:IEC61970CIMVersion.date>/g, obj, "date", base.to_string, sub, context);
                base.parse_element (/<cim:IEC61970CIMVersion.version>([\s\S]*?)<\/cim:IEC61970CIMVersion.version>/g, obj, "version", base.to_string, sub, context);

                var bucket = context.parsed.IEC61970CIMVersion;
                if (null == bucket)
                   context.parsed.IEC61970CIMVersion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "IEC61970CIMVersion", "date", base.from_string, fields);
                base.export_element (obj, "IEC61970CIMVersion", "version", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                IEC61970CIMVersion: IEC61970CIMVersion
            }
        );
    }
);