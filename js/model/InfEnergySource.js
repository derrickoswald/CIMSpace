define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * Used to define the type of generation for scheduling purposes.
         *
         */
        class EnergySchedulingType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergySchedulingType;
                if (null == bucket)
                   cim_data.EnergySchedulingType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergySchedulingType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EnergySchedulingType";

                var bucket = context.parsed.EnergySchedulingType;
                if (null == bucket)
                   context.parsed.EnergySchedulingType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergySchedulingType_collapse" aria-expanded="true" aria-controls="EnergySchedulingType_collapse" style="margin-left: 10px;">EnergySchedulingType</a></legend>
                    <div id="EnergySchedulingType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergySchedulingType_collapse" aria-expanded="true" aria-controls="EnergySchedulingType_collapse" style="margin-left: 10px;">EnergySchedulingType</a></legend>
                    <div id="EnergySchedulingType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        return (
            {
                EnergySchedulingType: EnergySchedulingType
            }
        );
    }
);