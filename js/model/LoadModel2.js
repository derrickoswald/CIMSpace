define
(
    ["model/base", "model/Wires"],
    /**
     * This package is responsible for modeling the energy consumers and the system load as curves and associated curve data.
     *
     * Special circumstances that may affect the load, such as seasons and daytypes, are also included here.
     *
     */
    function (base, Wires)
    {

        /**
         * NonConformLoad represent loads that do not follow a daily load change pattern and changes are not correlated with the daily load change pattern.
         *
         */
        class NonConformLoad extends Wires.EnergyConsumer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NonConformLoad;
                if (null == bucket)
                   cim_data.NonConformLoad = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NonConformLoad[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.EnergyConsumer.prototype.parse.call (this, context, sub);
                obj.cls = "NonConformLoad";
                base.parse_attribute (/<cim:NonConformLoad.LoadGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadGroup", sub, context);
                var bucket = context.parsed.NonConformLoad;
                if (null == bucket)
                   context.parsed.NonConformLoad = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.EnergyConsumer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "NonConformLoad", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NonConformLoad_collapse" aria-expanded="true" aria-controls="NonConformLoad_collapse" style="margin-left: 10px;">NonConformLoad</a></legend>
                    <div id="NonConformLoad_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.EnergyConsumer.prototype.template.call (this) +
                    `
                    {{#LoadGroup}}<div><b>LoadGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadGroup}}&quot;);})'>{{LoadGroup}}</a></div>{{/LoadGroup}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NonConformLoad_collapse" aria-expanded="true" aria-controls="NonConformLoad_collapse" style="margin-left: 10px;">NonConformLoad</a></legend>
                    <div id="NonConformLoad_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.EnergyConsumer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LoadGroup'>LoadGroup: </label><div class='col-sm-8'><input id='LoadGroup' class='form-control' type='text'{{#LoadGroup}} value='{{LoadGroup}}'{{/LoadGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["LoadGroup", "NonConformLoadGroup", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * ConformLoad represent loads that follow a daily load change pattern where the pattern can be used to scale the load with a system load.
         *
         */
        class ConformLoad extends Wires.EnergyConsumer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConformLoad;
                if (null == bucket)
                   cim_data.ConformLoad = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConformLoad[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.EnergyConsumer.prototype.parse.call (this, context, sub);
                obj.cls = "ConformLoad";
                base.parse_attribute (/<cim:ConformLoad.LoadGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadGroup", sub, context);
                var bucket = context.parsed.ConformLoad;
                if (null == bucket)
                   context.parsed.ConformLoad = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.EnergyConsumer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "ConformLoad", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConformLoad_collapse" aria-expanded="true" aria-controls="ConformLoad_collapse" style="margin-left: 10px;">ConformLoad</a></legend>
                    <div id="ConformLoad_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.EnergyConsumer.prototype.template.call (this) +
                    `
                    {{#LoadGroup}}<div><b>LoadGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadGroup}}&quot;);})'>{{LoadGroup}}</a></div>{{/LoadGroup}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConformLoad_collapse" aria-expanded="true" aria-controls="ConformLoad_collapse" style="margin-left: 10px;">ConformLoad</a></legend>
                    <div id="ConformLoad_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.EnergyConsumer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LoadGroup'>LoadGroup: </label><div class='col-sm-8'><input id='LoadGroup' class='form-control' type='text'{{#LoadGroup}} value='{{LoadGroup}}'{{/LoadGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["LoadGroup", "ConformLoadGroup", "0..1", "0..*"]
                    ]
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
                this._id = template.id;
                var bucket = cim_data.StationSupply;
                if (null == bucket)
                   cim_data.StationSupply = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StationSupply[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.EnergyConsumer.prototype.parse.call (this, context, sub);
                obj.cls = "StationSupply";
                var bucket = context.parsed.StationSupply;
                if (null == bucket)
                   context.parsed.StationSupply = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.EnergyConsumer.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StationSupply_collapse" aria-expanded="true" aria-controls="StationSupply_collapse" style="margin-left: 10px;">StationSupply</a></legend>
                    <div id="StationSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.EnergyConsumer.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StationSupply_collapse" aria-expanded="true" aria-controls="StationSupply_collapse" style="margin-left: 10px;">StationSupply</a></legend>
                    <div id="StationSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.EnergyConsumer.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
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