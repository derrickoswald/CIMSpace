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
        class WheelingReferenceSchedule extends ParticipantInterfaces.BidHourlySchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WheelingReferenceSchedule;
                if (null == bucket)
                   cim_data.WheelingReferenceSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WheelingReferenceSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ParticipantInterfaces.BidHourlySchedule.prototype.parse.call (this, context, sub);
                obj.cls = "WheelingReferenceSchedule";
                base.parse_element (/<cim:WheelingReferenceSchedule.value>([\s\S]*?)<\/cim:WheelingReferenceSchedule.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.WheelingReferenceSchedule;
                if (null == bucket)
                   context.parsed.WheelingReferenceSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ParticipantInterfaces.BidHourlySchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "WheelingReferenceSchedule", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                WheelingReferenceSchedule: WheelingReferenceSchedule
            }
        );
    }
);