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
        function parse_TiePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TiePoint";
            base.parse_element (/<cim:TiePoint.tiePointMWRating>([\s\S]*?)<\/cim:TiePoint.tiePointMWRating>/g, obj, "tiePointMWRating", base.to_string, sub, context);
            bucket = context.parsed.TiePoint;
            if (null == bucket)
                context.parsed.TiePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TiePoint (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "TiePoint", "tiePointMWRating", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_TiePoint: export_TiePoint,
                parse_TiePoint: parse_TiePoint
            }
        );
    }
);