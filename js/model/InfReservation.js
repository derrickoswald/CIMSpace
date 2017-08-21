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
            /**
             * The MW rating of the tie point.
             *
             */
            obj["tiePointMWRating"] = base.parse_element (/<cim:TiePoint.tiePointMWRating>([\s\S]*?)<\/cim:TiePoint.tiePointMWRating>/g, sub, context, true);
            bucket = context.parsed.TiePoint;
            if (null == bucket)
                context.parsed.TiePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_TiePoint: parse_TiePoint
            }
        );
    }
);