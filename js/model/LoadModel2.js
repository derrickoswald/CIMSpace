define
(
    ["model/base", "model/Wires"],
    /**
     * This package is responsible for modelling the energy consumers and the system load as curves and associated curve data.
     *
     * Special circumstances that may affect the load, such as seasons and day types, are also included here.
     *
     * This information is used by Load Forecasting and Load Management.
     *
     */
    function (base, Wires)
    {
        /**
         * ConformLoad represent loads that follow a daily load change pattern where the pattern can be used to scale the load with a system load.
         *
         */
        class ConformLoad extends Wires.EnergyConsumer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ConformLoad;
                if (null == bucket)
                   cim_data.ConformLoad = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConformLoad[obj.id];
            }

            parse (context, sub)
            {
                let obj = Wires.EnergyConsumer.prototype.parse.call (this, context, sub);
                obj.cls = "ConformLoad";
                base.parse_attribute (/<cim:ConformLoad.LoadGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LoadGroup", sub, context);
                let bucket = context.parsed.ConformLoad;
                if (null == bucket)
                   context.parsed.ConformLoad = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Wires.EnergyConsumer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ConformLoad", "LoadGroup", "LoadGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ConformLoad_collapse" aria-expanded="true" aria-controls="ConformLoad_collapse" style="margin-left: 10px;">ConformLoad</a></legend>
                    <div id="ConformLoad_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.EnergyConsumer.prototype.template.call (this) +
                    `
                    {{#LoadGroup}}<div><b>LoadGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{LoadGroup}}");}); return false;'>{{LoadGroup}}</a></div>{{/LoadGroup}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ConformLoad_collapse" aria-expanded="true" aria-controls="{{id}}_ConformLoad_collapse" style="margin-left: 10px;">ConformLoad</a></legend>
                    <div id="{{id}}_ConformLoad_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.EnergyConsumer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LoadGroup'>LoadGroup: </label><div class='col-sm-8'><input id='{{id}}_LoadGroup' class='form-control' type='text'{{#LoadGroup}} value='{{LoadGroup}}'{{/LoadGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ConformLoad" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_LoadGroup").value; if ("" !== temp) obj["LoadGroup"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LoadGroup", "0..1", "0..*", "ConformLoadGroup", "EnergyConsumers"]
                        ]
                    )
                );
            }
        }

        /**
         * NonConformLoad represents loads that do not follow a daily load change pattern and whose changes are not correlated with the daily load change pattern.
         *
         */
        class NonConformLoad extends Wires.EnergyConsumer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NonConformLoad;
                if (null == bucket)
                   cim_data.NonConformLoad = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NonConformLoad[obj.id];
            }

            parse (context, sub)
            {
                let obj = Wires.EnergyConsumer.prototype.parse.call (this, context, sub);
                obj.cls = "NonConformLoad";
                base.parse_attribute (/<cim:NonConformLoad.LoadGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LoadGroup", sub, context);
                let bucket = context.parsed.NonConformLoad;
                if (null == bucket)
                   context.parsed.NonConformLoad = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Wires.EnergyConsumer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "NonConformLoad", "LoadGroup", "LoadGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NonConformLoad_collapse" aria-expanded="true" aria-controls="NonConformLoad_collapse" style="margin-left: 10px;">NonConformLoad</a></legend>
                    <div id="NonConformLoad_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.EnergyConsumer.prototype.template.call (this) +
                    `
                    {{#LoadGroup}}<div><b>LoadGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{LoadGroup}}");}); return false;'>{{LoadGroup}}</a></div>{{/LoadGroup}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NonConformLoad_collapse" aria-expanded="true" aria-controls="{{id}}_NonConformLoad_collapse" style="margin-left: 10px;">NonConformLoad</a></legend>
                    <div id="{{id}}_NonConformLoad_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.EnergyConsumer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LoadGroup'>LoadGroup: </label><div class='col-sm-8'><input id='{{id}}_LoadGroup' class='form-control' type='text'{{#LoadGroup}} value='{{LoadGroup}}'{{/LoadGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "NonConformLoad" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_LoadGroup").value; if ("" !== temp) obj["LoadGroup"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LoadGroup", "0..1", "0..*", "NonConformLoadGroup", "EnergyConsumers"]
                        ]
                    )
                );
            }
        }

        /**
         * Station supply with load derived from the station output.
         *
         */
        class StationSupply extends Wires.EnergyConsumer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.StationSupply;
                if (null == bucket)
                   cim_data.StationSupply = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StationSupply[obj.id];
            }

            parse (context, sub)
            {
                let obj = Wires.EnergyConsumer.prototype.parse.call (this, context, sub);
                obj.cls = "StationSupply";
                let bucket = context.parsed.StationSupply;
                if (null == bucket)
                   context.parsed.StationSupply = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Wires.EnergyConsumer.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StationSupply_collapse" aria-expanded="true" aria-controls="StationSupply_collapse" style="margin-left: 10px;">StationSupply</a></legend>
                    <div id="StationSupply_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.EnergyConsumer.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StationSupply_collapse" aria-expanded="true" aria-controls="{{id}}_StationSupply_collapse" style="margin-left: 10px;">StationSupply</a></legend>
                    <div id="{{id}}_StationSupply_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.EnergyConsumer.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "StationSupply" };
                super.submit (id, obj);

                return (obj);
            }
        }

        return (
            {
                NonConformLoad: NonConformLoad,
                StationSupply: StationSupply,
                ConformLoad: ConformLoad
            }
        );
    }
);