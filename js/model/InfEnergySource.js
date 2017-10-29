define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * Used to define the type of generation for scheduling purposes.
         *
         */
        function parse_EnergySchedulingType (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "EnergySchedulingType";
            bucket = context.parsed.EnergySchedulingType;
            if (null == bucket)
                context.parsed.EnergySchedulingType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_EnergySchedulingType (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_EnergySchedulingType: parse_EnergySchedulingType,
                export_EnergySchedulingType: export_EnergySchedulingType
            }
        );
    }
);