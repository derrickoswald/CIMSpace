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
                var bucket = cim_data.WheelingReferenceSchedule;
                if (null == bucket)
                   cim_data.WheelingReferenceSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WheelingReferenceSchedule[obj.id];
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

                base.export_element (obj, "WheelingReferenceSchedule", "value", "value",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WheelingReferenceSchedule_collapse" aria-expanded="true" aria-controls="WheelingReferenceSchedule_collapse" style="margin-left: 10px;">WheelingReferenceSchedule</a></legend>
                    <div id="WheelingReferenceSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ParticipantInterfaces.BidHourlySchedule.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WheelingReferenceSchedule_collapse" aria-expanded="true" aria-controls="WheelingReferenceSchedule_collapse" style="margin-left: 10px;">WheelingReferenceSchedule</a></legend>
                    <div id="WheelingReferenceSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ParticipantInterfaces.BidHourlySchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "WheelingReferenceSchedule" };
                super.submit (obj);
                temp = document.getElementById ("value").value; if ("" != temp) obj.value = temp;

                return (obj);
            }
        }

        return (
            {
                WheelingReferenceSchedule: WheelingReferenceSchedule
            }
        );
    }
);