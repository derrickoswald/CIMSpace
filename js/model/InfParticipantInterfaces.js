define
(
    ["model/base", "model/ParticipantInterfaces"],
    function (base, ParticipantInterfaces)
    {

        /**
         * A unique identifier of a wheeling transaction.
         *
         * A wheeling transaction is a balanced Energy exchange among Supply and Demand Resources.
         *
         */
        function parse_WheelingReferenceSchedule (context, sub)
        {
            var obj;
            var bucket;

            obj = ParticipantInterfaces.parse_BidHourlySchedule (context, sub);
            obj.cls = "WheelingReferenceSchedule";
            base.parse_element (/<cim:WheelingReferenceSchedule.value>([\s\S]*?)<\/cim:WheelingReferenceSchedule.value>/g, obj, "value", base.to_string, sub, context);
            bucket = context.parsed.WheelingReferenceSchedule;
            if (null == bucket)
                context.parsed.WheelingReferenceSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_WheelingReferenceSchedule (obj, exporters, full)
        {
            var fields = exporters["BidHourlySchedule"](obj, exporters, false);

            base.export_element (obj, "WheelingReferenceSchedule", "value", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_WheelingReferenceSchedule: parse_WheelingReferenceSchedule,
                export_WheelingReferenceSchedule: export_WheelingReferenceSchedule
            }
        );
    }
);