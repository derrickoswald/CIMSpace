define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * Site of an interface between interchange areas.
         *
         * The tie point can be a network branch (e.g., transmission line or transformer) or a switching device. For transmission lines, the interchange area boundary is usually at a designated point such as the middle of the line. Line end metering is then corrected for line losses.
         *
         */
        class TiePoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TiePoint;
                if (null == bucket)
                   cim_data.TiePoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TiePoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TiePoint";
                base.parse_element (/<cim:TiePoint.tiePointMWRating>([\s\S]*?)<\/cim:TiePoint.tiePointMWRating>/g, obj, "tiePointMWRating", base.to_string, sub, context);

                var bucket = context.parsed.TiePoint;
                if (null == bucket)
                   context.parsed.TiePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TiePoint", "tiePointMWRating", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                TiePoint: TiePoint
            }
        );
    }
);