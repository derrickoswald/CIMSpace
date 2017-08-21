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
            obj["value"] = base.parse_element (/<cim:WheelingReferenceSchedule.value>([\s\S]*?)<\/cim:WheelingReferenceSchedule.value>/g, sub, context, true);
            bucket = context.parsed.WheelingReferenceSchedule;
            if (null == bucket)
                context.parsed.WheelingReferenceSchedule = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_WheelingReferenceSchedule: parse_WheelingReferenceSchedule
            }
        );
    }
);