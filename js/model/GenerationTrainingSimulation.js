define
(
    ["model/base", "model/Core"],
    /**
     * The Generation Dynamics package contains prime movers, such as turbines and boilers, which are needed for simulation and educational purposes.
     *
     */
    function (base, Core)
    {

        /**
         * Type of turbine.
         *
         */
        var TurbineType =
        {
            francis: "francis",
            pelton: "pelton",
            kaplan: "kaplan"
        };
        Object.freeze (TurbineType);

        /**
         * Boiler control mode.
         *
         */
        var BoilerControlMode =
        {
            following: "following",
            coordinated: "coordinated"
        };
        Object.freeze (BoilerControlMode);

        /**
         * Relationship between the combustion turbine's power output rating in gross active power (X-axis) and the ambient air temperature (Y-axis).
         *
         */
        class CTTempActivePowerCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CTTempActivePowerCurve;
                if (null == bucket)
                   cim_data.CTTempActivePowerCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CTTempActivePowerCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "CTTempActivePowerCurve";
                base.parse_attribute (/<cim:CTTempActivePowerCurve.CombustionTurbine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CombustionTurbine", sub, context);

                var bucket = context.parsed.CTTempActivePowerCurve;
                if (null == bucket)
                   context.parsed.CTTempActivePowerCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CTTempActivePowerCurve", "CombustionTurbine", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CTTempActivePowerCurve_collapse" aria-expanded="true" aria-controls="CTTempActivePowerCurve_collapse" style="margin-left: 10px;">CTTempActivePowerCurve</a></legend>
                    <div id="CTTempActivePowerCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#CombustionTurbine}}<div><b>CombustionTurbine</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CombustionTurbine}}&quot;);})'>{{CombustionTurbine}}</a></div>{{/CombustionTurbine}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CTTempActivePowerCurve_collapse" aria-expanded="true" aria-controls="CTTempActivePowerCurve_collapse" style="margin-left: 10px;">CTTempActivePowerCurve</a></legend>
                    <div id="CTTempActivePowerCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CombustionTurbine'>CombustionTurbine: </label><div class='col-sm-8'><input id='CombustionTurbine' class='form-control' type='text'{{#CombustionTurbine}} value='{{CombustionTurbine}}'{{/CombustionTurbine}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Steam supply for steam turbine.
         *
         */
        class SteamSupply extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SteamSupply;
                if (null == bucket)
                   cim_data.SteamSupply = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SteamSupply[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "SteamSupply";
                base.parse_element (/<cim:SteamSupply.steamSupplyRating>([\s\S]*?)<\/cim:SteamSupply.steamSupplyRating>/g, obj, "steamSupplyRating", base.to_float, sub, context);

                var bucket = context.parsed.SteamSupply;
                if (null == bucket)
                   context.parsed.SteamSupply = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "SteamSupply", "steamSupplyRating", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SteamSupply_collapse" aria-expanded="true" aria-controls="SteamSupply_collapse" style="margin-left: 10px;">SteamSupply</a></legend>
                    <div id="SteamSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#steamSupplyRating}}<div><b>steamSupplyRating</b>: {{steamSupplyRating}}</div>{{/steamSupplyRating}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SteamSupply_collapse" aria-expanded="true" aria-controls="SteamSupply_collapse" style="margin-left: 10px;">SteamSupply</a></legend>
                    <div id="SteamSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='steamSupplyRating'>steamSupplyRating: </label><div class='col-sm-8'><input id='steamSupplyRating' class='form-control' type='text'{{#steamSupplyRating}} value='{{steamSupplyRating}}'{{/steamSupplyRating}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * The machine used to develop mechanical energy used to drive a generator.
         *
         */
        class PrimeMover extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PrimeMover;
                if (null == bucket)
                   cim_data.PrimeMover = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PrimeMover[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "PrimeMover";
                base.parse_element (/<cim:PrimeMover.primeMoverRating>([\s\S]*?)<\/cim:PrimeMover.primeMoverRating>/g, obj, "primeMoverRating", base.to_float, sub, context);

                var bucket = context.parsed.PrimeMover;
                if (null == bucket)
                   context.parsed.PrimeMover = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "PrimeMover", "primeMoverRating", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PrimeMover_collapse" aria-expanded="true" aria-controls="PrimeMover_collapse" style="margin-left: 10px;">PrimeMover</a></legend>
                    <div id="PrimeMover_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#primeMoverRating}}<div><b>primeMoverRating</b>: {{primeMoverRating}}</div>{{/primeMoverRating}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PrimeMover_collapse" aria-expanded="true" aria-controls="PrimeMover_collapse" style="margin-left: 10px;">PrimeMover</a></legend>
                    <div id="PrimeMover_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='primeMoverRating'>primeMoverRating: </label><div class='col-sm-8'><input id='primeMoverRating' class='form-control' type='text'{{#primeMoverRating}} value='{{primeMoverRating}}'{{/primeMoverRating}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Boiling water reactor used as a steam supply to a steam turbine.
         *
         */
        class BWRSteamSupply extends SteamSupply
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BWRSteamSupply;
                if (null == bucket)
                   cim_data.BWRSteamSupply = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BWRSteamSupply[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SteamSupply.prototype.parse.call (this, context, sub);
                obj.cls = "BWRSteamSupply";
                base.parse_element (/<cim:BWRSteamSupply.highPowerLimit>([\s\S]*?)<\/cim:BWRSteamSupply.highPowerLimit>/g, obj, "highPowerLimit", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.inCoreThermalTC>([\s\S]*?)<\/cim:BWRSteamSupply.inCoreThermalTC>/g, obj, "inCoreThermalTC", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.integralGain>([\s\S]*?)<\/cim:BWRSteamSupply.integralGain>/g, obj, "integralGain", base.to_float, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.lowerLimit>([\s\S]*?)<\/cim:BWRSteamSupply.lowerLimit>/g, obj, "lowerLimit", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.lowPowerLimit>([\s\S]*?)<\/cim:BWRSteamSupply.lowPowerLimit>/g, obj, "lowPowerLimit", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.pressureLimit>([\s\S]*?)<\/cim:BWRSteamSupply.pressureLimit>/g, obj, "pressureLimit", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.pressureSetpointGA>([\s\S]*?)<\/cim:BWRSteamSupply.pressureSetpointGA>/g, obj, "pressureSetpointGA", base.to_float, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.pressureSetpointTC1>([\s\S]*?)<\/cim:BWRSteamSupply.pressureSetpointTC1>/g, obj, "pressureSetpointTC1", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.pressureSetpointTC2>([\s\S]*?)<\/cim:BWRSteamSupply.pressureSetpointTC2>/g, obj, "pressureSetpointTC2", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.proportionalGain>([\s\S]*?)<\/cim:BWRSteamSupply.proportionalGain>/g, obj, "proportionalGain", base.to_float, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.rfAux1>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux1>/g, obj, "rfAux1", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.rfAux2>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux2>/g, obj, "rfAux2", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.rfAux3>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux3>/g, obj, "rfAux3", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.rfAux4>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux4>/g, obj, "rfAux4", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.rfAux5>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux5>/g, obj, "rfAux5", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.rfAux6>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux6>/g, obj, "rfAux6", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.rfAux7>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux7>/g, obj, "rfAux7", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.rfAux8>([\s\S]*?)<\/cim:BWRSteamSupply.rfAux8>/g, obj, "rfAux8", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.rodPattern>([\s\S]*?)<\/cim:BWRSteamSupply.rodPattern>/g, obj, "rodPattern", base.to_string, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.rodPatternConstant>([\s\S]*?)<\/cim:BWRSteamSupply.rodPatternConstant>/g, obj, "rodPatternConstant", base.to_float, sub, context);
                base.parse_element (/<cim:BWRSteamSupply.upperLimit>([\s\S]*?)<\/cim:BWRSteamSupply.upperLimit>/g, obj, "upperLimit", base.to_string, sub, context);

                var bucket = context.parsed.BWRSteamSupply;
                if (null == bucket)
                   context.parsed.BWRSteamSupply = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SteamSupply.prototype.export.call (this, obj, false);

                base.export_element (obj, "BWRSteamSupply", "highPowerLimit", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "inCoreThermalTC", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "integralGain", base.from_float, fields);
                base.export_element (obj, "BWRSteamSupply", "lowerLimit", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "lowPowerLimit", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "pressureLimit", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "pressureSetpointGA", base.from_float, fields);
                base.export_element (obj, "BWRSteamSupply", "pressureSetpointTC1", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "pressureSetpointTC2", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "proportionalGain", base.from_float, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux1", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux2", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux3", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux4", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux5", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux6", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux7", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux8", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rodPattern", base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rodPatternConstant", base.from_float, fields);
                base.export_element (obj, "BWRSteamSupply", "upperLimit", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BWRSteamSupply_collapse" aria-expanded="true" aria-controls="BWRSteamSupply_collapse" style="margin-left: 10px;">BWRSteamSupply</a></legend>
                    <div id="BWRSteamSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SteamSupply.prototype.template.call (this) +
                    `
                    {{#highPowerLimit}}<div><b>highPowerLimit</b>: {{highPowerLimit}}</div>{{/highPowerLimit}}
                    {{#inCoreThermalTC}}<div><b>inCoreThermalTC</b>: {{inCoreThermalTC}}</div>{{/inCoreThermalTC}}
                    {{#integralGain}}<div><b>integralGain</b>: {{integralGain}}</div>{{/integralGain}}
                    {{#lowerLimit}}<div><b>lowerLimit</b>: {{lowerLimit}}</div>{{/lowerLimit}}
                    {{#lowPowerLimit}}<div><b>lowPowerLimit</b>: {{lowPowerLimit}}</div>{{/lowPowerLimit}}
                    {{#pressureLimit}}<div><b>pressureLimit</b>: {{pressureLimit}}</div>{{/pressureLimit}}
                    {{#pressureSetpointGA}}<div><b>pressureSetpointGA</b>: {{pressureSetpointGA}}</div>{{/pressureSetpointGA}}
                    {{#pressureSetpointTC1}}<div><b>pressureSetpointTC1</b>: {{pressureSetpointTC1}}</div>{{/pressureSetpointTC1}}
                    {{#pressureSetpointTC2}}<div><b>pressureSetpointTC2</b>: {{pressureSetpointTC2}}</div>{{/pressureSetpointTC2}}
                    {{#proportionalGain}}<div><b>proportionalGain</b>: {{proportionalGain}}</div>{{/proportionalGain}}
                    {{#rfAux1}}<div><b>rfAux1</b>: {{rfAux1}}</div>{{/rfAux1}}
                    {{#rfAux2}}<div><b>rfAux2</b>: {{rfAux2}}</div>{{/rfAux2}}
                    {{#rfAux3}}<div><b>rfAux3</b>: {{rfAux3}}</div>{{/rfAux3}}
                    {{#rfAux4}}<div><b>rfAux4</b>: {{rfAux4}}</div>{{/rfAux4}}
                    {{#rfAux5}}<div><b>rfAux5</b>: {{rfAux5}}</div>{{/rfAux5}}
                    {{#rfAux6}}<div><b>rfAux6</b>: {{rfAux6}}</div>{{/rfAux6}}
                    {{#rfAux7}}<div><b>rfAux7</b>: {{rfAux7}}</div>{{/rfAux7}}
                    {{#rfAux8}}<div><b>rfAux8</b>: {{rfAux8}}</div>{{/rfAux8}}
                    {{#rodPattern}}<div><b>rodPattern</b>: {{rodPattern}}</div>{{/rodPattern}}
                    {{#rodPatternConstant}}<div><b>rodPatternConstant</b>: {{rodPatternConstant}}</div>{{/rodPatternConstant}}
                    {{#upperLimit}}<div><b>upperLimit</b>: {{upperLimit}}</div>{{/upperLimit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BWRSteamSupply_collapse" aria-expanded="true" aria-controls="BWRSteamSupply_collapse" style="margin-left: 10px;">BWRSteamSupply</a></legend>
                    <div id="BWRSteamSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SteamSupply.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='highPowerLimit'>highPowerLimit: </label><div class='col-sm-8'><input id='highPowerLimit' class='form-control' type='text'{{#highPowerLimit}} value='{{highPowerLimit}}'{{/highPowerLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='inCoreThermalTC'>inCoreThermalTC: </label><div class='col-sm-8'><input id='inCoreThermalTC' class='form-control' type='text'{{#inCoreThermalTC}} value='{{inCoreThermalTC}}'{{/inCoreThermalTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='integralGain'>integralGain: </label><div class='col-sm-8'><input id='integralGain' class='form-control' type='text'{{#integralGain}} value='{{integralGain}}'{{/integralGain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowerLimit'>lowerLimit: </label><div class='col-sm-8'><input id='lowerLimit' class='form-control' type='text'{{#lowerLimit}} value='{{lowerLimit}}'{{/lowerLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowPowerLimit'>lowPowerLimit: </label><div class='col-sm-8'><input id='lowPowerLimit' class='form-control' type='text'{{#lowPowerLimit}} value='{{lowPowerLimit}}'{{/lowPowerLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pressureLimit'>pressureLimit: </label><div class='col-sm-8'><input id='pressureLimit' class='form-control' type='text'{{#pressureLimit}} value='{{pressureLimit}}'{{/pressureLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pressureSetpointGA'>pressureSetpointGA: </label><div class='col-sm-8'><input id='pressureSetpointGA' class='form-control' type='text'{{#pressureSetpointGA}} value='{{pressureSetpointGA}}'{{/pressureSetpointGA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pressureSetpointTC1'>pressureSetpointTC1: </label><div class='col-sm-8'><input id='pressureSetpointTC1' class='form-control' type='text'{{#pressureSetpointTC1}} value='{{pressureSetpointTC1}}'{{/pressureSetpointTC1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pressureSetpointTC2'>pressureSetpointTC2: </label><div class='col-sm-8'><input id='pressureSetpointTC2' class='form-control' type='text'{{#pressureSetpointTC2}} value='{{pressureSetpointTC2}}'{{/pressureSetpointTC2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='proportionalGain'>proportionalGain: </label><div class='col-sm-8'><input id='proportionalGain' class='form-control' type='text'{{#proportionalGain}} value='{{proportionalGain}}'{{/proportionalGain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rfAux1'>rfAux1: </label><div class='col-sm-8'><input id='rfAux1' class='form-control' type='text'{{#rfAux1}} value='{{rfAux1}}'{{/rfAux1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rfAux2'>rfAux2: </label><div class='col-sm-8'><input id='rfAux2' class='form-control' type='text'{{#rfAux2}} value='{{rfAux2}}'{{/rfAux2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rfAux3'>rfAux3: </label><div class='col-sm-8'><input id='rfAux3' class='form-control' type='text'{{#rfAux3}} value='{{rfAux3}}'{{/rfAux3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rfAux4'>rfAux4: </label><div class='col-sm-8'><input id='rfAux4' class='form-control' type='text'{{#rfAux4}} value='{{rfAux4}}'{{/rfAux4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rfAux5'>rfAux5: </label><div class='col-sm-8'><input id='rfAux5' class='form-control' type='text'{{#rfAux5}} value='{{rfAux5}}'{{/rfAux5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rfAux6'>rfAux6: </label><div class='col-sm-8'><input id='rfAux6' class='form-control' type='text'{{#rfAux6}} value='{{rfAux6}}'{{/rfAux6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rfAux7'>rfAux7: </label><div class='col-sm-8'><input id='rfAux7' class='form-control' type='text'{{#rfAux7}} value='{{rfAux7}}'{{/rfAux7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rfAux8'>rfAux8: </label><div class='col-sm-8'><input id='rfAux8' class='form-control' type='text'{{#rfAux8}} value='{{rfAux8}}'{{/rfAux8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rodPattern'>rodPattern: </label><div class='col-sm-8'><input id='rodPattern' class='form-control' type='text'{{#rodPattern}} value='{{rodPattern}}'{{/rodPattern}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rodPatternConstant'>rodPatternConstant: </label><div class='col-sm-8'><input id='rodPatternConstant' class='form-control' type='text'{{#rodPatternConstant}} value='{{rodPatternConstant}}'{{/rodPatternConstant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='upperLimit'>upperLimit: </label><div class='col-sm-8'><input id='upperLimit' class='form-control' type='text'{{#upperLimit}} value='{{upperLimit}}'{{/upperLimit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Fossil fueled boiler (e.g., coal, oil, gas).
         *
         */
        class FossilSteamSupply extends SteamSupply
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FossilSteamSupply;
                if (null == bucket)
                   cim_data.FossilSteamSupply = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FossilSteamSupply[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SteamSupply.prototype.parse.call (this, context, sub);
                obj.cls = "FossilSteamSupply";
                base.parse_element (/<cim:FossilSteamSupply.auxPowerVersusFrequency>([\s\S]*?)<\/cim:FossilSteamSupply.auxPowerVersusFrequency>/g, obj, "auxPowerVersusFrequency", base.to_string, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.auxPowerVersusVoltage>([\s\S]*?)<\/cim:FossilSteamSupply.auxPowerVersusVoltage>/g, obj, "auxPowerVersusVoltage", base.to_string, sub, context);
                base.parse_attribute (/<cim:FossilSteamSupply.boilerControlMode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "boilerControlMode", sub, context);
                base.parse_element (/<cim:FossilSteamSupply.controlErrorBiasP>([\s\S]*?)<\/cim:FossilSteamSupply.controlErrorBiasP>/g, obj, "controlErrorBiasP", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.controlIC>([\s\S]*?)<\/cim:FossilSteamSupply.controlIC>/g, obj, "controlIC", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.controlPC>([\s\S]*?)<\/cim:FossilSteamSupply.controlPC>/g, obj, "controlPC", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.controlPEB>([\s\S]*?)<\/cim:FossilSteamSupply.controlPEB>/g, obj, "controlPEB", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.controlPED>([\s\S]*?)<\/cim:FossilSteamSupply.controlPED>/g, obj, "controlPED", base.to_string, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.controlTC>([\s\S]*?)<\/cim:FossilSteamSupply.controlTC>/g, obj, "controlTC", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.feedWaterIG>([\s\S]*?)<\/cim:FossilSteamSupply.feedWaterIG>/g, obj, "feedWaterIG", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.feedWaterPG>([\s\S]*?)<\/cim:FossilSteamSupply.feedWaterPG>/g, obj, "feedWaterPG", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.feedWaterTC>([\s\S]*?)<\/cim:FossilSteamSupply.feedWaterTC>/g, obj, "feedWaterTC", base.to_string, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.fuelDemandLimit>([\s\S]*?)<\/cim:FossilSteamSupply.fuelDemandLimit>/g, obj, "fuelDemandLimit", base.to_string, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.fuelSupplyDelay>([\s\S]*?)<\/cim:FossilSteamSupply.fuelSupplyDelay>/g, obj, "fuelSupplyDelay", base.to_string, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.fuelSupplyTC>([\s\S]*?)<\/cim:FossilSteamSupply.fuelSupplyTC>/g, obj, "fuelSupplyTC", base.to_string, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.maxErrorRateP>([\s\S]*?)<\/cim:FossilSteamSupply.maxErrorRateP>/g, obj, "maxErrorRateP", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.mechPowerSensorLag>([\s\S]*?)<\/cim:FossilSteamSupply.mechPowerSensorLag>/g, obj, "mechPowerSensorLag", base.to_string, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.minErrorRateP>([\s\S]*?)<\/cim:FossilSteamSupply.minErrorRateP>/g, obj, "minErrorRateP", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.pressureCtrlDG>([\s\S]*?)<\/cim:FossilSteamSupply.pressureCtrlDG>/g, obj, "pressureCtrlDG", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.pressureCtrlIG>([\s\S]*?)<\/cim:FossilSteamSupply.pressureCtrlIG>/g, obj, "pressureCtrlIG", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.pressureCtrlPG>([\s\S]*?)<\/cim:FossilSteamSupply.pressureCtrlPG>/g, obj, "pressureCtrlPG", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.pressureFeedback>([\s\S]*?)<\/cim:FossilSteamSupply.pressureFeedback>/g, obj, "pressureFeedback", base.to_string, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.superHeater1Capacity>([\s\S]*?)<\/cim:FossilSteamSupply.superHeater1Capacity>/g, obj, "superHeater1Capacity", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.superHeater2Capacity>([\s\S]*?)<\/cim:FossilSteamSupply.superHeater2Capacity>/g, obj, "superHeater2Capacity", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.superHeaterPipePD>([\s\S]*?)<\/cim:FossilSteamSupply.superHeaterPipePD>/g, obj, "superHeaterPipePD", base.to_float, sub, context);
                base.parse_element (/<cim:FossilSteamSupply.throttlePressureSP>([\s\S]*?)<\/cim:FossilSteamSupply.throttlePressureSP>/g, obj, "throttlePressureSP", base.to_string, sub, context);

                var bucket = context.parsed.FossilSteamSupply;
                if (null == bucket)
                   context.parsed.FossilSteamSupply = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SteamSupply.prototype.export.call (this, obj, false);

                base.export_element (obj, "FossilSteamSupply", "auxPowerVersusFrequency", base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "auxPowerVersusVoltage", base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "boilerControlMode", base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "controlErrorBiasP", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "controlIC", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "controlPC", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "controlPEB", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "controlPED", base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "controlTC", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "feedWaterIG", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "feedWaterPG", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "feedWaterTC", base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "fuelDemandLimit", base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "fuelSupplyDelay", base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "fuelSupplyTC", base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "maxErrorRateP", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "mechPowerSensorLag", base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "minErrorRateP", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "pressureCtrlDG", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "pressureCtrlIG", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "pressureCtrlPG", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "pressureFeedback", base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "superHeater1Capacity", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "superHeater2Capacity", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "superHeaterPipePD", base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "throttlePressureSP", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FossilSteamSupply_collapse" aria-expanded="true" aria-controls="FossilSteamSupply_collapse" style="margin-left: 10px;">FossilSteamSupply</a></legend>
                    <div id="FossilSteamSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SteamSupply.prototype.template.call (this) +
                    `
                    {{#auxPowerVersusFrequency}}<div><b>auxPowerVersusFrequency</b>: {{auxPowerVersusFrequency}}</div>{{/auxPowerVersusFrequency}}
                    {{#auxPowerVersusVoltage}}<div><b>auxPowerVersusVoltage</b>: {{auxPowerVersusVoltage}}</div>{{/auxPowerVersusVoltage}}
                    {{#boilerControlMode}}<div><b>boilerControlMode</b>: {{boilerControlMode}}</div>{{/boilerControlMode}}
                    {{#controlErrorBiasP}}<div><b>controlErrorBiasP</b>: {{controlErrorBiasP}}</div>{{/controlErrorBiasP}}
                    {{#controlIC}}<div><b>controlIC</b>: {{controlIC}}</div>{{/controlIC}}
                    {{#controlPC}}<div><b>controlPC</b>: {{controlPC}}</div>{{/controlPC}}
                    {{#controlPEB}}<div><b>controlPEB</b>: {{controlPEB}}</div>{{/controlPEB}}
                    {{#controlPED}}<div><b>controlPED</b>: {{controlPED}}</div>{{/controlPED}}
                    {{#controlTC}}<div><b>controlTC</b>: {{controlTC}}</div>{{/controlTC}}
                    {{#feedWaterIG}}<div><b>feedWaterIG</b>: {{feedWaterIG}}</div>{{/feedWaterIG}}
                    {{#feedWaterPG}}<div><b>feedWaterPG</b>: {{feedWaterPG}}</div>{{/feedWaterPG}}
                    {{#feedWaterTC}}<div><b>feedWaterTC</b>: {{feedWaterTC}}</div>{{/feedWaterTC}}
                    {{#fuelDemandLimit}}<div><b>fuelDemandLimit</b>: {{fuelDemandLimit}}</div>{{/fuelDemandLimit}}
                    {{#fuelSupplyDelay}}<div><b>fuelSupplyDelay</b>: {{fuelSupplyDelay}}</div>{{/fuelSupplyDelay}}
                    {{#fuelSupplyTC}}<div><b>fuelSupplyTC</b>: {{fuelSupplyTC}}</div>{{/fuelSupplyTC}}
                    {{#maxErrorRateP}}<div><b>maxErrorRateP</b>: {{maxErrorRateP}}</div>{{/maxErrorRateP}}
                    {{#mechPowerSensorLag}}<div><b>mechPowerSensorLag</b>: {{mechPowerSensorLag}}</div>{{/mechPowerSensorLag}}
                    {{#minErrorRateP}}<div><b>minErrorRateP</b>: {{minErrorRateP}}</div>{{/minErrorRateP}}
                    {{#pressureCtrlDG}}<div><b>pressureCtrlDG</b>: {{pressureCtrlDG}}</div>{{/pressureCtrlDG}}
                    {{#pressureCtrlIG}}<div><b>pressureCtrlIG</b>: {{pressureCtrlIG}}</div>{{/pressureCtrlIG}}
                    {{#pressureCtrlPG}}<div><b>pressureCtrlPG</b>: {{pressureCtrlPG}}</div>{{/pressureCtrlPG}}
                    {{#pressureFeedback}}<div><b>pressureFeedback</b>: {{pressureFeedback}}</div>{{/pressureFeedback}}
                    {{#superHeater1Capacity}}<div><b>superHeater1Capacity</b>: {{superHeater1Capacity}}</div>{{/superHeater1Capacity}}
                    {{#superHeater2Capacity}}<div><b>superHeater2Capacity</b>: {{superHeater2Capacity}}</div>{{/superHeater2Capacity}}
                    {{#superHeaterPipePD}}<div><b>superHeaterPipePD</b>: {{superHeaterPipePD}}</div>{{/superHeaterPipePD}}
                    {{#throttlePressureSP}}<div><b>throttlePressureSP</b>: {{throttlePressureSP}}</div>{{/throttlePressureSP}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.BoilerControlMode = []; if (!obj.boilerControlMode) obj.BoilerControlMode.push ({ id: '', selected: true}); for (var property in BoilerControlMode) obj.BoilerControlMode.push ({ id: property, selected: obj.boilerControlMode && obj.boilerControlMode.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.BoilerControlMode;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FossilSteamSupply_collapse" aria-expanded="true" aria-controls="FossilSteamSupply_collapse" style="margin-left: 10px;">FossilSteamSupply</a></legend>
                    <div id="FossilSteamSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SteamSupply.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='auxPowerVersusFrequency'>auxPowerVersusFrequency: </label><div class='col-sm-8'><input id='auxPowerVersusFrequency' class='form-control' type='text'{{#auxPowerVersusFrequency}} value='{{auxPowerVersusFrequency}}'{{/auxPowerVersusFrequency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='auxPowerVersusVoltage'>auxPowerVersusVoltage: </label><div class='col-sm-8'><input id='auxPowerVersusVoltage' class='form-control' type='text'{{#auxPowerVersusVoltage}} value='{{auxPowerVersusVoltage}}'{{/auxPowerVersusVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='boilerControlMode'>boilerControlMode: </label><div class='col-sm-8'><select id='boilerControlMode' class='form-control'>{{#BoilerControlMode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/BoilerControlMode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='controlErrorBiasP'>controlErrorBiasP: </label><div class='col-sm-8'><input id='controlErrorBiasP' class='form-control' type='text'{{#controlErrorBiasP}} value='{{controlErrorBiasP}}'{{/controlErrorBiasP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='controlIC'>controlIC: </label><div class='col-sm-8'><input id='controlIC' class='form-control' type='text'{{#controlIC}} value='{{controlIC}}'{{/controlIC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='controlPC'>controlPC: </label><div class='col-sm-8'><input id='controlPC' class='form-control' type='text'{{#controlPC}} value='{{controlPC}}'{{/controlPC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='controlPEB'>controlPEB: </label><div class='col-sm-8'><input id='controlPEB' class='form-control' type='text'{{#controlPEB}} value='{{controlPEB}}'{{/controlPEB}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='controlPED'>controlPED: </label><div class='col-sm-8'><input id='controlPED' class='form-control' type='text'{{#controlPED}} value='{{controlPED}}'{{/controlPED}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='controlTC'>controlTC: </label><div class='col-sm-8'><input id='controlTC' class='form-control' type='text'{{#controlTC}} value='{{controlTC}}'{{/controlTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='feedWaterIG'>feedWaterIG: </label><div class='col-sm-8'><input id='feedWaterIG' class='form-control' type='text'{{#feedWaterIG}} value='{{feedWaterIG}}'{{/feedWaterIG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='feedWaterPG'>feedWaterPG: </label><div class='col-sm-8'><input id='feedWaterPG' class='form-control' type='text'{{#feedWaterPG}} value='{{feedWaterPG}}'{{/feedWaterPG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='feedWaterTC'>feedWaterTC: </label><div class='col-sm-8'><input id='feedWaterTC' class='form-control' type='text'{{#feedWaterTC}} value='{{feedWaterTC}}'{{/feedWaterTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelDemandLimit'>fuelDemandLimit: </label><div class='col-sm-8'><input id='fuelDemandLimit' class='form-control' type='text'{{#fuelDemandLimit}} value='{{fuelDemandLimit}}'{{/fuelDemandLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelSupplyDelay'>fuelSupplyDelay: </label><div class='col-sm-8'><input id='fuelSupplyDelay' class='form-control' type='text'{{#fuelSupplyDelay}} value='{{fuelSupplyDelay}}'{{/fuelSupplyDelay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelSupplyTC'>fuelSupplyTC: </label><div class='col-sm-8'><input id='fuelSupplyTC' class='form-control' type='text'{{#fuelSupplyTC}} value='{{fuelSupplyTC}}'{{/fuelSupplyTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxErrorRateP'>maxErrorRateP: </label><div class='col-sm-8'><input id='maxErrorRateP' class='form-control' type='text'{{#maxErrorRateP}} value='{{maxErrorRateP}}'{{/maxErrorRateP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mechPowerSensorLag'>mechPowerSensorLag: </label><div class='col-sm-8'><input id='mechPowerSensorLag' class='form-control' type='text'{{#mechPowerSensorLag}} value='{{mechPowerSensorLag}}'{{/mechPowerSensorLag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minErrorRateP'>minErrorRateP: </label><div class='col-sm-8'><input id='minErrorRateP' class='form-control' type='text'{{#minErrorRateP}} value='{{minErrorRateP}}'{{/minErrorRateP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pressureCtrlDG'>pressureCtrlDG: </label><div class='col-sm-8'><input id='pressureCtrlDG' class='form-control' type='text'{{#pressureCtrlDG}} value='{{pressureCtrlDG}}'{{/pressureCtrlDG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pressureCtrlIG'>pressureCtrlIG: </label><div class='col-sm-8'><input id='pressureCtrlIG' class='form-control' type='text'{{#pressureCtrlIG}} value='{{pressureCtrlIG}}'{{/pressureCtrlIG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pressureCtrlPG'>pressureCtrlPG: </label><div class='col-sm-8'><input id='pressureCtrlPG' class='form-control' type='text'{{#pressureCtrlPG}} value='{{pressureCtrlPG}}'{{/pressureCtrlPG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pressureFeedback'>pressureFeedback: </label><div class='col-sm-8'><input id='pressureFeedback' class='form-control' type='text'{{#pressureFeedback}} value='{{pressureFeedback}}'{{/pressureFeedback}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='superHeater1Capacity'>superHeater1Capacity: </label><div class='col-sm-8'><input id='superHeater1Capacity' class='form-control' type='text'{{#superHeater1Capacity}} value='{{superHeater1Capacity}}'{{/superHeater1Capacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='superHeater2Capacity'>superHeater2Capacity: </label><div class='col-sm-8'><input id='superHeater2Capacity' class='form-control' type='text'{{#superHeater2Capacity}} value='{{superHeater2Capacity}}'{{/superHeater2Capacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='superHeaterPipePD'>superHeaterPipePD: </label><div class='col-sm-8'><input id='superHeaterPipePD' class='form-control' type='text'{{#superHeaterPipePD}} value='{{superHeaterPipePD}}'{{/superHeaterPipePD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='throttlePressureSP'>throttlePressureSP: </label><div class='col-sm-8'><input id='throttlePressureSP' class='form-control' type='text'{{#throttlePressureSP}} value='{{throttlePressureSP}}'{{/throttlePressureSP}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Once-through supercritical boiler.
         *
         */
        class Supercritical extends FossilSteamSupply
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Supercritical;
                if (null == bucket)
                   cim_data.Supercritical = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Supercritical[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = FossilSteamSupply.prototype.parse.call (this, context, sub);
                obj.cls = "Supercritical";

                var bucket = context.parsed.Supercritical;
                if (null == bucket)
                   context.parsed.Supercritical = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = FossilSteamSupply.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Supercritical_collapse" aria-expanded="true" aria-controls="Supercritical_collapse" style="margin-left: 10px;">Supercritical</a></legend>
                    <div id="Supercritical_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FossilSteamSupply.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Supercritical_collapse" aria-expanded="true" aria-controls="Supercritical_collapse" style="margin-left: 10px;">Supercritical</a></legend>
                    <div id="Supercritical_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FossilSteamSupply.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Pressurized water reactor used as a steam supply to a steam turbine.
         *
         */
        class PWRSteamSupply extends SteamSupply
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PWRSteamSupply;
                if (null == bucket)
                   cim_data.PWRSteamSupply = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PWRSteamSupply[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SteamSupply.prototype.parse.call (this, context, sub);
                obj.cls = "PWRSteamSupply";
                base.parse_element (/<cim:PWRSteamSupply.coldLegFBLagTC>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFBLagTC>/g, obj, "coldLegFBLagTC", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.coldLegFBLeadTC1>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFBLeadTC1>/g, obj, "coldLegFBLeadTC1", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.coldLegFBLeadTC2>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFBLeadTC2>/g, obj, "coldLegFBLeadTC2", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.coldLegFG1>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFG1>/g, obj, "coldLegFG1", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.coldLegFG2>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegFG2>/g, obj, "coldLegFG2", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.coldLegLagTC>([\s\S]*?)<\/cim:PWRSteamSupply.coldLegLagTC>/g, obj, "coldLegLagTC", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.coreHTLagTC1>([\s\S]*?)<\/cim:PWRSteamSupply.coreHTLagTC1>/g, obj, "coreHTLagTC1", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.coreHTLagTC2>([\s\S]*?)<\/cim:PWRSteamSupply.coreHTLagTC2>/g, obj, "coreHTLagTC2", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.coreNeutronicsEffTC>([\s\S]*?)<\/cim:PWRSteamSupply.coreNeutronicsEffTC>/g, obj, "coreNeutronicsEffTC", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.coreNeutronicsHT>([\s\S]*?)<\/cim:PWRSteamSupply.coreNeutronicsHT>/g, obj, "coreNeutronicsHT", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.feedbackFactor>([\s\S]*?)<\/cim:PWRSteamSupply.feedbackFactor>/g, obj, "feedbackFactor", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.hotLegLagTC>([\s\S]*?)<\/cim:PWRSteamSupply.hotLegLagTC>/g, obj, "hotLegLagTC", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.hotLegSteamGain>([\s\S]*?)<\/cim:PWRSteamSupply.hotLegSteamGain>/g, obj, "hotLegSteamGain", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.hotLegToColdLegGain>([\s\S]*?)<\/cim:PWRSteamSupply.hotLegToColdLegGain>/g, obj, "hotLegToColdLegGain", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.pressureCG>([\s\S]*?)<\/cim:PWRSteamSupply.pressureCG>/g, obj, "pressureCG", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.steamFlowFG>([\s\S]*?)<\/cim:PWRSteamSupply.steamFlowFG>/g, obj, "steamFlowFG", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.steamPressureDropLagTC>([\s\S]*?)<\/cim:PWRSteamSupply.steamPressureDropLagTC>/g, obj, "steamPressureDropLagTC", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.steamPressureFG>([\s\S]*?)<\/cim:PWRSteamSupply.steamPressureFG>/g, obj, "steamPressureFG", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.throttlePressureFactor>([\s\S]*?)<\/cim:PWRSteamSupply.throttlePressureFactor>/g, obj, "throttlePressureFactor", base.to_string, sub, context);
                base.parse_element (/<cim:PWRSteamSupply.throttlePressureSP>([\s\S]*?)<\/cim:PWRSteamSupply.throttlePressureSP>/g, obj, "throttlePressureSP", base.to_string, sub, context);

                var bucket = context.parsed.PWRSteamSupply;
                if (null == bucket)
                   context.parsed.PWRSteamSupply = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SteamSupply.prototype.export.call (this, obj, false);

                base.export_element (obj, "PWRSteamSupply", "coldLegFBLagTC", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coldLegFBLeadTC1", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coldLegFBLeadTC2", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coldLegFG1", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coldLegFG2", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coldLegLagTC", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coreHTLagTC1", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coreHTLagTC2", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coreNeutronicsEffTC", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coreNeutronicsHT", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "feedbackFactor", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "hotLegLagTC", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "hotLegSteamGain", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "hotLegToColdLegGain", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "pressureCG", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "steamFlowFG", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "steamPressureDropLagTC", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "steamPressureFG", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "throttlePressureFactor", base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "throttlePressureSP", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PWRSteamSupply_collapse" aria-expanded="true" aria-controls="PWRSteamSupply_collapse" style="margin-left: 10px;">PWRSteamSupply</a></legend>
                    <div id="PWRSteamSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SteamSupply.prototype.template.call (this) +
                    `
                    {{#coldLegFBLagTC}}<div><b>coldLegFBLagTC</b>: {{coldLegFBLagTC}}</div>{{/coldLegFBLagTC}}
                    {{#coldLegFBLeadTC1}}<div><b>coldLegFBLeadTC1</b>: {{coldLegFBLeadTC1}}</div>{{/coldLegFBLeadTC1}}
                    {{#coldLegFBLeadTC2}}<div><b>coldLegFBLeadTC2</b>: {{coldLegFBLeadTC2}}</div>{{/coldLegFBLeadTC2}}
                    {{#coldLegFG1}}<div><b>coldLegFG1</b>: {{coldLegFG1}}</div>{{/coldLegFG1}}
                    {{#coldLegFG2}}<div><b>coldLegFG2</b>: {{coldLegFG2}}</div>{{/coldLegFG2}}
                    {{#coldLegLagTC}}<div><b>coldLegLagTC</b>: {{coldLegLagTC}}</div>{{/coldLegLagTC}}
                    {{#coreHTLagTC1}}<div><b>coreHTLagTC1</b>: {{coreHTLagTC1}}</div>{{/coreHTLagTC1}}
                    {{#coreHTLagTC2}}<div><b>coreHTLagTC2</b>: {{coreHTLagTC2}}</div>{{/coreHTLagTC2}}
                    {{#coreNeutronicsEffTC}}<div><b>coreNeutronicsEffTC</b>: {{coreNeutronicsEffTC}}</div>{{/coreNeutronicsEffTC}}
                    {{#coreNeutronicsHT}}<div><b>coreNeutronicsHT</b>: {{coreNeutronicsHT}}</div>{{/coreNeutronicsHT}}
                    {{#feedbackFactor}}<div><b>feedbackFactor</b>: {{feedbackFactor}}</div>{{/feedbackFactor}}
                    {{#hotLegLagTC}}<div><b>hotLegLagTC</b>: {{hotLegLagTC}}</div>{{/hotLegLagTC}}
                    {{#hotLegSteamGain}}<div><b>hotLegSteamGain</b>: {{hotLegSteamGain}}</div>{{/hotLegSteamGain}}
                    {{#hotLegToColdLegGain}}<div><b>hotLegToColdLegGain</b>: {{hotLegToColdLegGain}}</div>{{/hotLegToColdLegGain}}
                    {{#pressureCG}}<div><b>pressureCG</b>: {{pressureCG}}</div>{{/pressureCG}}
                    {{#steamFlowFG}}<div><b>steamFlowFG</b>: {{steamFlowFG}}</div>{{/steamFlowFG}}
                    {{#steamPressureDropLagTC}}<div><b>steamPressureDropLagTC</b>: {{steamPressureDropLagTC}}</div>{{/steamPressureDropLagTC}}
                    {{#steamPressureFG}}<div><b>steamPressureFG</b>: {{steamPressureFG}}</div>{{/steamPressureFG}}
                    {{#throttlePressureFactor}}<div><b>throttlePressureFactor</b>: {{throttlePressureFactor}}</div>{{/throttlePressureFactor}}
                    {{#throttlePressureSP}}<div><b>throttlePressureSP</b>: {{throttlePressureSP}}</div>{{/throttlePressureSP}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PWRSteamSupply_collapse" aria-expanded="true" aria-controls="PWRSteamSupply_collapse" style="margin-left: 10px;">PWRSteamSupply</a></legend>
                    <div id="PWRSteamSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SteamSupply.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coldLegFBLagTC'>coldLegFBLagTC: </label><div class='col-sm-8'><input id='coldLegFBLagTC' class='form-control' type='text'{{#coldLegFBLagTC}} value='{{coldLegFBLagTC}}'{{/coldLegFBLagTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coldLegFBLeadTC1'>coldLegFBLeadTC1: </label><div class='col-sm-8'><input id='coldLegFBLeadTC1' class='form-control' type='text'{{#coldLegFBLeadTC1}} value='{{coldLegFBLeadTC1}}'{{/coldLegFBLeadTC1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coldLegFBLeadTC2'>coldLegFBLeadTC2: </label><div class='col-sm-8'><input id='coldLegFBLeadTC2' class='form-control' type='text'{{#coldLegFBLeadTC2}} value='{{coldLegFBLeadTC2}}'{{/coldLegFBLeadTC2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coldLegFG1'>coldLegFG1: </label><div class='col-sm-8'><input id='coldLegFG1' class='form-control' type='text'{{#coldLegFG1}} value='{{coldLegFG1}}'{{/coldLegFG1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coldLegFG2'>coldLegFG2: </label><div class='col-sm-8'><input id='coldLegFG2' class='form-control' type='text'{{#coldLegFG2}} value='{{coldLegFG2}}'{{/coldLegFG2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coldLegLagTC'>coldLegLagTC: </label><div class='col-sm-8'><input id='coldLegLagTC' class='form-control' type='text'{{#coldLegLagTC}} value='{{coldLegLagTC}}'{{/coldLegLagTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coreHTLagTC1'>coreHTLagTC1: </label><div class='col-sm-8'><input id='coreHTLagTC1' class='form-control' type='text'{{#coreHTLagTC1}} value='{{coreHTLagTC1}}'{{/coreHTLagTC1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coreHTLagTC2'>coreHTLagTC2: </label><div class='col-sm-8'><input id='coreHTLagTC2' class='form-control' type='text'{{#coreHTLagTC2}} value='{{coreHTLagTC2}}'{{/coreHTLagTC2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coreNeutronicsEffTC'>coreNeutronicsEffTC: </label><div class='col-sm-8'><input id='coreNeutronicsEffTC' class='form-control' type='text'{{#coreNeutronicsEffTC}} value='{{coreNeutronicsEffTC}}'{{/coreNeutronicsEffTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coreNeutronicsHT'>coreNeutronicsHT: </label><div class='col-sm-8'><input id='coreNeutronicsHT' class='form-control' type='text'{{#coreNeutronicsHT}} value='{{coreNeutronicsHT}}'{{/coreNeutronicsHT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='feedbackFactor'>feedbackFactor: </label><div class='col-sm-8'><input id='feedbackFactor' class='form-control' type='text'{{#feedbackFactor}} value='{{feedbackFactor}}'{{/feedbackFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hotLegLagTC'>hotLegLagTC: </label><div class='col-sm-8'><input id='hotLegLagTC' class='form-control' type='text'{{#hotLegLagTC}} value='{{hotLegLagTC}}'{{/hotLegLagTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hotLegSteamGain'>hotLegSteamGain: </label><div class='col-sm-8'><input id='hotLegSteamGain' class='form-control' type='text'{{#hotLegSteamGain}} value='{{hotLegSteamGain}}'{{/hotLegSteamGain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hotLegToColdLegGain'>hotLegToColdLegGain: </label><div class='col-sm-8'><input id='hotLegToColdLegGain' class='form-control' type='text'{{#hotLegToColdLegGain}} value='{{hotLegToColdLegGain}}'{{/hotLegToColdLegGain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pressureCG'>pressureCG: </label><div class='col-sm-8'><input id='pressureCG' class='form-control' type='text'{{#pressureCG}} value='{{pressureCG}}'{{/pressureCG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='steamFlowFG'>steamFlowFG: </label><div class='col-sm-8'><input id='steamFlowFG' class='form-control' type='text'{{#steamFlowFG}} value='{{steamFlowFG}}'{{/steamFlowFG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='steamPressureDropLagTC'>steamPressureDropLagTC: </label><div class='col-sm-8'><input id='steamPressureDropLagTC' class='form-control' type='text'{{#steamPressureDropLagTC}} value='{{steamPressureDropLagTC}}'{{/steamPressureDropLagTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='steamPressureFG'>steamPressureFG: </label><div class='col-sm-8'><input id='steamPressureFG' class='form-control' type='text'{{#steamPressureFG}} value='{{steamPressureFG}}'{{/steamPressureFG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='throttlePressureFactor'>throttlePressureFactor: </label><div class='col-sm-8'><input id='throttlePressureFactor' class='form-control' type='text'{{#throttlePressureFactor}} value='{{throttlePressureFactor}}'{{/throttlePressureFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='throttlePressureSP'>throttlePressureSP: </label><div class='col-sm-8'><input id='throttlePressureSP' class='form-control' type='text'{{#throttlePressureSP}} value='{{throttlePressureSP}}'{{/throttlePressureSP}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * The heat recovery system associated with combustion turbines in order to produce steam for combined cycle plants.
         *
         */
        class HeatRecoveryBoiler extends FossilSteamSupply
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HeatRecoveryBoiler;
                if (null == bucket)
                   cim_data.HeatRecoveryBoiler = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HeatRecoveryBoiler[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = FossilSteamSupply.prototype.parse.call (this, context, sub);
                obj.cls = "HeatRecoveryBoiler";
                base.parse_element (/<cim:HeatRecoveryBoiler.steamSupplyRating2>([\s\S]*?)<\/cim:HeatRecoveryBoiler.steamSupplyRating2>/g, obj, "steamSupplyRating2", base.to_float, sub, context);

                var bucket = context.parsed.HeatRecoveryBoiler;
                if (null == bucket)
                   context.parsed.HeatRecoveryBoiler = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = FossilSteamSupply.prototype.export.call (this, obj, false);

                base.export_element (obj, "HeatRecoveryBoiler", "steamSupplyRating2", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HeatRecoveryBoiler_collapse" aria-expanded="true" aria-controls="HeatRecoveryBoiler_collapse" style="margin-left: 10px;">HeatRecoveryBoiler</a></legend>
                    <div id="HeatRecoveryBoiler_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FossilSteamSupply.prototype.template.call (this) +
                    `
                    {{#steamSupplyRating2}}<div><b>steamSupplyRating2</b>: {{steamSupplyRating2}}</div>{{/steamSupplyRating2}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HeatRecoveryBoiler_collapse" aria-expanded="true" aria-controls="HeatRecoveryBoiler_collapse" style="margin-left: 10px;">HeatRecoveryBoiler</a></legend>
                    <div id="HeatRecoveryBoiler_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FossilSteamSupply.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='steamSupplyRating2'>steamSupplyRating2: </label><div class='col-sm-8'><input id='steamSupplyRating2' class='form-control' type='text'{{#steamSupplyRating2}} value='{{steamSupplyRating2}}'{{/steamSupplyRating2}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Drum boiler.
         *
         */
        class DrumBoiler extends FossilSteamSupply
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DrumBoiler;
                if (null == bucket)
                   cim_data.DrumBoiler = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DrumBoiler[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = FossilSteamSupply.prototype.parse.call (this, context, sub);
                obj.cls = "DrumBoiler";
                base.parse_element (/<cim:DrumBoiler.drumBoilerRating>([\s\S]*?)<\/cim:DrumBoiler.drumBoilerRating>/g, obj, "drumBoilerRating", base.to_float, sub, context);

                var bucket = context.parsed.DrumBoiler;
                if (null == bucket)
                   context.parsed.DrumBoiler = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = FossilSteamSupply.prototype.export.call (this, obj, false);

                base.export_element (obj, "DrumBoiler", "drumBoilerRating", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DrumBoiler_collapse" aria-expanded="true" aria-controls="DrumBoiler_collapse" style="margin-left: 10px;">DrumBoiler</a></legend>
                    <div id="DrumBoiler_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FossilSteamSupply.prototype.template.call (this) +
                    `
                    {{#drumBoilerRating}}<div><b>drumBoilerRating</b>: {{drumBoilerRating}}</div>{{/drumBoilerRating}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DrumBoiler_collapse" aria-expanded="true" aria-controls="DrumBoiler_collapse" style="margin-left: 10px;">DrumBoiler</a></legend>
                    <div id="DrumBoiler_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FossilSteamSupply.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='drumBoilerRating'>drumBoilerRating: </label><div class='col-sm-8'><input id='drumBoilerRating' class='form-control' type='text'{{#drumBoilerRating}} value='{{drumBoilerRating}}'{{/drumBoilerRating}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Once-through subcritical boiler.
         *
         */
        class Subcritical extends FossilSteamSupply
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Subcritical;
                if (null == bucket)
                   cim_data.Subcritical = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Subcritical[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = FossilSteamSupply.prototype.parse.call (this, context, sub);
                obj.cls = "Subcritical";

                var bucket = context.parsed.Subcritical;
                if (null == bucket)
                   context.parsed.Subcritical = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = FossilSteamSupply.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Subcritical_collapse" aria-expanded="true" aria-controls="Subcritical_collapse" style="margin-left: 10px;">Subcritical</a></legend>
                    <div id="Subcritical_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FossilSteamSupply.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Subcritical_collapse" aria-expanded="true" aria-controls="Subcritical_collapse" style="margin-left: 10px;">Subcritical</a></legend>
                    <div id="Subcritical_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FossilSteamSupply.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A water driven prime mover.
         *
         * Typical turbine types are: Francis, Kaplan, and Pelton.
         *
         */
        class HydroTurbine extends PrimeMover
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HydroTurbine;
                if (null == bucket)
                   cim_data.HydroTurbine = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HydroTurbine[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PrimeMover.prototype.parse.call (this, context, sub);
                obj.cls = "HydroTurbine";
                base.parse_element (/<cim:HydroTurbine.gateRateLimit>([\s\S]*?)<\/cim:HydroTurbine.gateRateLimit>/g, obj, "gateRateLimit", base.to_float, sub, context);
                base.parse_element (/<cim:HydroTurbine.gateUpperLimit>([\s\S]*?)<\/cim:HydroTurbine.gateUpperLimit>/g, obj, "gateUpperLimit", base.to_string, sub, context);
                base.parse_element (/<cim:HydroTurbine.maxHeadMaxP>([\s\S]*?)<\/cim:HydroTurbine.maxHeadMaxP>/g, obj, "maxHeadMaxP", base.to_string, sub, context);
                base.parse_element (/<cim:HydroTurbine.minHeadMaxP>([\s\S]*?)<\/cim:HydroTurbine.minHeadMaxP>/g, obj, "minHeadMaxP", base.to_string, sub, context);
                base.parse_element (/<cim:HydroTurbine.speedRating>([\s\S]*?)<\/cim:HydroTurbine.speedRating>/g, obj, "speedRating", base.to_string, sub, context);
                base.parse_element (/<cim:HydroTurbine.speedRegulation>([\s\S]*?)<\/cim:HydroTurbine.speedRegulation>/g, obj, "speedRegulation", base.to_string, sub, context);
                base.parse_element (/<cim:HydroTurbine.transientDroopTime>([\s\S]*?)<\/cim:HydroTurbine.transientDroopTime>/g, obj, "transientDroopTime", base.to_string, sub, context);
                base.parse_element (/<cim:HydroTurbine.transientRegulation>([\s\S]*?)<\/cim:HydroTurbine.transientRegulation>/g, obj, "transientRegulation", base.to_string, sub, context);
                base.parse_element (/<cim:HydroTurbine.turbineRating>([\s\S]*?)<\/cim:HydroTurbine.turbineRating>/g, obj, "turbineRating", base.to_string, sub, context);
                base.parse_attribute (/<cim:HydroTurbine.turbineType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "turbineType", sub, context);
                base.parse_element (/<cim:HydroTurbine.waterStartingTime>([\s\S]*?)<\/cim:HydroTurbine.waterStartingTime>/g, obj, "waterStartingTime", base.to_string, sub, context);

                var bucket = context.parsed.HydroTurbine;
                if (null == bucket)
                   context.parsed.HydroTurbine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PrimeMover.prototype.export.call (this, obj, false);

                base.export_element (obj, "HydroTurbine", "gateRateLimit", base.from_float, fields);
                base.export_element (obj, "HydroTurbine", "gateUpperLimit", base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "maxHeadMaxP", base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "minHeadMaxP", base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "speedRating", base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "speedRegulation", base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "transientDroopTime", base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "transientRegulation", base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "turbineRating", base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "turbineType", base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "waterStartingTime", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HydroTurbine_collapse" aria-expanded="true" aria-controls="HydroTurbine_collapse" style="margin-left: 10px;">HydroTurbine</a></legend>
                    <div id="HydroTurbine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PrimeMover.prototype.template.call (this) +
                    `
                    {{#gateRateLimit}}<div><b>gateRateLimit</b>: {{gateRateLimit}}</div>{{/gateRateLimit}}
                    {{#gateUpperLimit}}<div><b>gateUpperLimit</b>: {{gateUpperLimit}}</div>{{/gateUpperLimit}}
                    {{#maxHeadMaxP}}<div><b>maxHeadMaxP</b>: {{maxHeadMaxP}}</div>{{/maxHeadMaxP}}
                    {{#minHeadMaxP}}<div><b>minHeadMaxP</b>: {{minHeadMaxP}}</div>{{/minHeadMaxP}}
                    {{#speedRating}}<div><b>speedRating</b>: {{speedRating}}</div>{{/speedRating}}
                    {{#speedRegulation}}<div><b>speedRegulation</b>: {{speedRegulation}}</div>{{/speedRegulation}}
                    {{#transientDroopTime}}<div><b>transientDroopTime</b>: {{transientDroopTime}}</div>{{/transientDroopTime}}
                    {{#transientRegulation}}<div><b>transientRegulation</b>: {{transientRegulation}}</div>{{/transientRegulation}}
                    {{#turbineRating}}<div><b>turbineRating</b>: {{turbineRating}}</div>{{/turbineRating}}
                    {{#turbineType}}<div><b>turbineType</b>: {{turbineType}}</div>{{/turbineType}}
                    {{#waterStartingTime}}<div><b>waterStartingTime</b>: {{waterStartingTime}}</div>{{/waterStartingTime}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TurbineType = []; if (!obj.turbineType) obj.TurbineType.push ({ id: '', selected: true}); for (var property in TurbineType) obj.TurbineType.push ({ id: property, selected: obj.turbineType && obj.turbineType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TurbineType;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HydroTurbine_collapse" aria-expanded="true" aria-controls="HydroTurbine_collapse" style="margin-left: 10px;">HydroTurbine</a></legend>
                    <div id="HydroTurbine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PrimeMover.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='gateRateLimit'>gateRateLimit: </label><div class='col-sm-8'><input id='gateRateLimit' class='form-control' type='text'{{#gateRateLimit}} value='{{gateRateLimit}}'{{/gateRateLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='gateUpperLimit'>gateUpperLimit: </label><div class='col-sm-8'><input id='gateUpperLimit' class='form-control' type='text'{{#gateUpperLimit}} value='{{gateUpperLimit}}'{{/gateUpperLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxHeadMaxP'>maxHeadMaxP: </label><div class='col-sm-8'><input id='maxHeadMaxP' class='form-control' type='text'{{#maxHeadMaxP}} value='{{maxHeadMaxP}}'{{/maxHeadMaxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minHeadMaxP'>minHeadMaxP: </label><div class='col-sm-8'><input id='minHeadMaxP' class='form-control' type='text'{{#minHeadMaxP}} value='{{minHeadMaxP}}'{{/minHeadMaxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='speedRating'>speedRating: </label><div class='col-sm-8'><input id='speedRating' class='form-control' type='text'{{#speedRating}} value='{{speedRating}}'{{/speedRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='speedRegulation'>speedRegulation: </label><div class='col-sm-8'><input id='speedRegulation' class='form-control' type='text'{{#speedRegulation}} value='{{speedRegulation}}'{{/speedRegulation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='transientDroopTime'>transientDroopTime: </label><div class='col-sm-8'><input id='transientDroopTime' class='form-control' type='text'{{#transientDroopTime}} value='{{transientDroopTime}}'{{/transientDroopTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='transientRegulation'>transientRegulation: </label><div class='col-sm-8'><input id='transientRegulation' class='form-control' type='text'{{#transientRegulation}} value='{{transientRegulation}}'{{/transientRegulation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='turbineRating'>turbineRating: </label><div class='col-sm-8'><input id='turbineRating' class='form-control' type='text'{{#turbineRating}} value='{{turbineRating}}'{{/turbineRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='turbineType'>turbineType: </label><div class='col-sm-8'><select id='turbineType' class='form-control'>{{#TurbineType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TurbineType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='waterStartingTime'>waterStartingTime: </label><div class='col-sm-8'><input id='waterStartingTime' class='form-control' type='text'{{#waterStartingTime}} value='{{waterStartingTime}}'{{/waterStartingTime}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Steam turbine.
         *
         */
        class SteamTurbine extends PrimeMover
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SteamTurbine;
                if (null == bucket)
                   cim_data.SteamTurbine = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SteamTurbine[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PrimeMover.prototype.parse.call (this, context, sub);
                obj.cls = "SteamTurbine";
                base.parse_element (/<cim:SteamTurbine.crossoverTC>([\s\S]*?)<\/cim:SteamTurbine.crossoverTC>/g, obj, "crossoverTC", base.to_string, sub, context);
                base.parse_element (/<cim:SteamTurbine.reheater1TC>([\s\S]*?)<\/cim:SteamTurbine.reheater1TC>/g, obj, "reheater1TC", base.to_string, sub, context);
                base.parse_element (/<cim:SteamTurbine.reheater2TC>([\s\S]*?)<\/cim:SteamTurbine.reheater2TC>/g, obj, "reheater2TC", base.to_string, sub, context);
                base.parse_element (/<cim:SteamTurbine.shaft1PowerHP>([\s\S]*?)<\/cim:SteamTurbine.shaft1PowerHP>/g, obj, "shaft1PowerHP", base.to_float, sub, context);
                base.parse_element (/<cim:SteamTurbine.shaft1PowerIP>([\s\S]*?)<\/cim:SteamTurbine.shaft1PowerIP>/g, obj, "shaft1PowerIP", base.to_float, sub, context);
                base.parse_element (/<cim:SteamTurbine.shaft1PowerLP1>([\s\S]*?)<\/cim:SteamTurbine.shaft1PowerLP1>/g, obj, "shaft1PowerLP1", base.to_float, sub, context);
                base.parse_element (/<cim:SteamTurbine.shaft1PowerLP2>([\s\S]*?)<\/cim:SteamTurbine.shaft1PowerLP2>/g, obj, "shaft1PowerLP2", base.to_float, sub, context);
                base.parse_element (/<cim:SteamTurbine.shaft2PowerHP>([\s\S]*?)<\/cim:SteamTurbine.shaft2PowerHP>/g, obj, "shaft2PowerHP", base.to_float, sub, context);
                base.parse_element (/<cim:SteamTurbine.shaft2PowerIP>([\s\S]*?)<\/cim:SteamTurbine.shaft2PowerIP>/g, obj, "shaft2PowerIP", base.to_float, sub, context);
                base.parse_element (/<cim:SteamTurbine.shaft2PowerLP1>([\s\S]*?)<\/cim:SteamTurbine.shaft2PowerLP1>/g, obj, "shaft2PowerLP1", base.to_float, sub, context);
                base.parse_element (/<cim:SteamTurbine.shaft2PowerLP2>([\s\S]*?)<\/cim:SteamTurbine.shaft2PowerLP2>/g, obj, "shaft2PowerLP2", base.to_float, sub, context);
                base.parse_element (/<cim:SteamTurbine.steamChestTC>([\s\S]*?)<\/cim:SteamTurbine.steamChestTC>/g, obj, "steamChestTC", base.to_string, sub, context);

                var bucket = context.parsed.SteamTurbine;
                if (null == bucket)
                   context.parsed.SteamTurbine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PrimeMover.prototype.export.call (this, obj, false);

                base.export_element (obj, "SteamTurbine", "crossoverTC", base.from_string, fields);
                base.export_element (obj, "SteamTurbine", "reheater1TC", base.from_string, fields);
                base.export_element (obj, "SteamTurbine", "reheater2TC", base.from_string, fields);
                base.export_element (obj, "SteamTurbine", "shaft1PowerHP", base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft1PowerIP", base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft1PowerLP1", base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft1PowerLP2", base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft2PowerHP", base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft2PowerIP", base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft2PowerLP1", base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft2PowerLP2", base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "steamChestTC", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SteamTurbine_collapse" aria-expanded="true" aria-controls="SteamTurbine_collapse" style="margin-left: 10px;">SteamTurbine</a></legend>
                    <div id="SteamTurbine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PrimeMover.prototype.template.call (this) +
                    `
                    {{#crossoverTC}}<div><b>crossoverTC</b>: {{crossoverTC}}</div>{{/crossoverTC}}
                    {{#reheater1TC}}<div><b>reheater1TC</b>: {{reheater1TC}}</div>{{/reheater1TC}}
                    {{#reheater2TC}}<div><b>reheater2TC</b>: {{reheater2TC}}</div>{{/reheater2TC}}
                    {{#shaft1PowerHP}}<div><b>shaft1PowerHP</b>: {{shaft1PowerHP}}</div>{{/shaft1PowerHP}}
                    {{#shaft1PowerIP}}<div><b>shaft1PowerIP</b>: {{shaft1PowerIP}}</div>{{/shaft1PowerIP}}
                    {{#shaft1PowerLP1}}<div><b>shaft1PowerLP1</b>: {{shaft1PowerLP1}}</div>{{/shaft1PowerLP1}}
                    {{#shaft1PowerLP2}}<div><b>shaft1PowerLP2</b>: {{shaft1PowerLP2}}</div>{{/shaft1PowerLP2}}
                    {{#shaft2PowerHP}}<div><b>shaft2PowerHP</b>: {{shaft2PowerHP}}</div>{{/shaft2PowerHP}}
                    {{#shaft2PowerIP}}<div><b>shaft2PowerIP</b>: {{shaft2PowerIP}}</div>{{/shaft2PowerIP}}
                    {{#shaft2PowerLP1}}<div><b>shaft2PowerLP1</b>: {{shaft2PowerLP1}}</div>{{/shaft2PowerLP1}}
                    {{#shaft2PowerLP2}}<div><b>shaft2PowerLP2</b>: {{shaft2PowerLP2}}</div>{{/shaft2PowerLP2}}
                    {{#steamChestTC}}<div><b>steamChestTC</b>: {{steamChestTC}}</div>{{/steamChestTC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SteamTurbine_collapse" aria-expanded="true" aria-controls="SteamTurbine_collapse" style="margin-left: 10px;">SteamTurbine</a></legend>
                    <div id="SteamTurbine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PrimeMover.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='crossoverTC'>crossoverTC: </label><div class='col-sm-8'><input id='crossoverTC' class='form-control' type='text'{{#crossoverTC}} value='{{crossoverTC}}'{{/crossoverTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reheater1TC'>reheater1TC: </label><div class='col-sm-8'><input id='reheater1TC' class='form-control' type='text'{{#reheater1TC}} value='{{reheater1TC}}'{{/reheater1TC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reheater2TC'>reheater2TC: </label><div class='col-sm-8'><input id='reheater2TC' class='form-control' type='text'{{#reheater2TC}} value='{{reheater2TC}}'{{/reheater2TC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shaft1PowerHP'>shaft1PowerHP: </label><div class='col-sm-8'><input id='shaft1PowerHP' class='form-control' type='text'{{#shaft1PowerHP}} value='{{shaft1PowerHP}}'{{/shaft1PowerHP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shaft1PowerIP'>shaft1PowerIP: </label><div class='col-sm-8'><input id='shaft1PowerIP' class='form-control' type='text'{{#shaft1PowerIP}} value='{{shaft1PowerIP}}'{{/shaft1PowerIP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shaft1PowerLP1'>shaft1PowerLP1: </label><div class='col-sm-8'><input id='shaft1PowerLP1' class='form-control' type='text'{{#shaft1PowerLP1}} value='{{shaft1PowerLP1}}'{{/shaft1PowerLP1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shaft1PowerLP2'>shaft1PowerLP2: </label><div class='col-sm-8'><input id='shaft1PowerLP2' class='form-control' type='text'{{#shaft1PowerLP2}} value='{{shaft1PowerLP2}}'{{/shaft1PowerLP2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shaft2PowerHP'>shaft2PowerHP: </label><div class='col-sm-8'><input id='shaft2PowerHP' class='form-control' type='text'{{#shaft2PowerHP}} value='{{shaft2PowerHP}}'{{/shaft2PowerHP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shaft2PowerIP'>shaft2PowerIP: </label><div class='col-sm-8'><input id='shaft2PowerIP' class='form-control' type='text'{{#shaft2PowerIP}} value='{{shaft2PowerIP}}'{{/shaft2PowerIP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shaft2PowerLP1'>shaft2PowerLP1: </label><div class='col-sm-8'><input id='shaft2PowerLP1' class='form-control' type='text'{{#shaft2PowerLP1}} value='{{shaft2PowerLP1}}'{{/shaft2PowerLP1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shaft2PowerLP2'>shaft2PowerLP2: </label><div class='col-sm-8'><input id='shaft2PowerLP2' class='form-control' type='text'{{#shaft2PowerLP2}} value='{{shaft2PowerLP2}}'{{/shaft2PowerLP2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='steamChestTC'>steamChestTC: </label><div class='col-sm-8'><input id='steamChestTC' class='form-control' type='text'{{#steamChestTC}} value='{{steamChestTC}}'{{/steamChestTC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A prime mover that is typically fueled by gas or light oil.
         *
         */
        class CombustionTurbine extends PrimeMover
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CombustionTurbine;
                if (null == bucket)
                   cim_data.CombustionTurbine = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CombustionTurbine[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PrimeMover.prototype.parse.call (this, context, sub);
                obj.cls = "CombustionTurbine";
                base.parse_element (/<cim:CombustionTurbine.ambientTemp>([\s\S]*?)<\/cim:CombustionTurbine.ambientTemp>/g, obj, "ambientTemp", base.to_string, sub, context);
                base.parse_element (/<cim:CombustionTurbine.auxPowerVersusFrequency>([\s\S]*?)<\/cim:CombustionTurbine.auxPowerVersusFrequency>/g, obj, "auxPowerVersusFrequency", base.to_string, sub, context);
                base.parse_element (/<cim:CombustionTurbine.auxPowerVersusVoltage>([\s\S]*?)<\/cim:CombustionTurbine.auxPowerVersusVoltage>/g, obj, "auxPowerVersusVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:CombustionTurbine.capabilityVersusFrequency>([\s\S]*?)<\/cim:CombustionTurbine.capabilityVersusFrequency>/g, obj, "capabilityVersusFrequency", base.to_string, sub, context);
                base.parse_element (/<cim:CombustionTurbine.heatRecoveryFlag>([\s\S]*?)<\/cim:CombustionTurbine.heatRecoveryFlag>/g, obj, "heatRecoveryFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:CombustionTurbine.powerVariationByTemp>([\s\S]*?)<\/cim:CombustionTurbine.powerVariationByTemp>/g, obj, "powerVariationByTemp", base.to_string, sub, context);
                base.parse_element (/<cim:CombustionTurbine.referenceTemp>([\s\S]*?)<\/cim:CombustionTurbine.referenceTemp>/g, obj, "referenceTemp", base.to_string, sub, context);
                base.parse_element (/<cim:CombustionTurbine.timeConstant>([\s\S]*?)<\/cim:CombustionTurbine.timeConstant>/g, obj, "timeConstant", base.to_string, sub, context);
                base.parse_attribute (/<cim:CombustionTurbine.AirCompressor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AirCompressor", sub, context);
                base.parse_attribute (/<cim:CombustionTurbine.HeatRecoveryBoiler\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HeatRecoveryBoiler", sub, context);
                base.parse_attribute (/<cim:CombustionTurbine.CTTempActivePowerCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CTTempActivePowerCurve", sub, context);

                var bucket = context.parsed.CombustionTurbine;
                if (null == bucket)
                   context.parsed.CombustionTurbine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PrimeMover.prototype.export.call (this, obj, false);

                base.export_element (obj, "CombustionTurbine", "ambientTemp", base.from_string, fields);
                base.export_element (obj, "CombustionTurbine", "auxPowerVersusFrequency", base.from_string, fields);
                base.export_element (obj, "CombustionTurbine", "auxPowerVersusVoltage", base.from_string, fields);
                base.export_element (obj, "CombustionTurbine", "capabilityVersusFrequency", base.from_string, fields);
                base.export_element (obj, "CombustionTurbine", "heatRecoveryFlag", base.from_boolean, fields);
                base.export_element (obj, "CombustionTurbine", "powerVariationByTemp", base.from_string, fields);
                base.export_element (obj, "CombustionTurbine", "referenceTemp", base.from_string, fields);
                base.export_element (obj, "CombustionTurbine", "timeConstant", base.from_string, fields);
                base.export_attribute (obj, "CombustionTurbine", "AirCompressor", fields);
                base.export_attribute (obj, "CombustionTurbine", "HeatRecoveryBoiler", fields);
                base.export_attribute (obj, "CombustionTurbine", "CTTempActivePowerCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CombustionTurbine_collapse" aria-expanded="true" aria-controls="CombustionTurbine_collapse" style="margin-left: 10px;">CombustionTurbine</a></legend>
                    <div id="CombustionTurbine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PrimeMover.prototype.template.call (this) +
                    `
                    {{#ambientTemp}}<div><b>ambientTemp</b>: {{ambientTemp}}</div>{{/ambientTemp}}
                    {{#auxPowerVersusFrequency}}<div><b>auxPowerVersusFrequency</b>: {{auxPowerVersusFrequency}}</div>{{/auxPowerVersusFrequency}}
                    {{#auxPowerVersusVoltage}}<div><b>auxPowerVersusVoltage</b>: {{auxPowerVersusVoltage}}</div>{{/auxPowerVersusVoltage}}
                    {{#capabilityVersusFrequency}}<div><b>capabilityVersusFrequency</b>: {{capabilityVersusFrequency}}</div>{{/capabilityVersusFrequency}}
                    {{#heatRecoveryFlag}}<div><b>heatRecoveryFlag</b>: {{heatRecoveryFlag}}</div>{{/heatRecoveryFlag}}
                    {{#powerVariationByTemp}}<div><b>powerVariationByTemp</b>: {{powerVariationByTemp}}</div>{{/powerVariationByTemp}}
                    {{#referenceTemp}}<div><b>referenceTemp</b>: {{referenceTemp}}</div>{{/referenceTemp}}
                    {{#timeConstant}}<div><b>timeConstant</b>: {{timeConstant}}</div>{{/timeConstant}}
                    {{#AirCompressor}}<div><b>AirCompressor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AirCompressor}}&quot;);})'>{{AirCompressor}}</a></div>{{/AirCompressor}}
                    {{#HeatRecoveryBoiler}}<div><b>HeatRecoveryBoiler</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HeatRecoveryBoiler}}&quot;);})'>{{HeatRecoveryBoiler}}</a></div>{{/HeatRecoveryBoiler}}
                    {{#CTTempActivePowerCurve}}<div><b>CTTempActivePowerCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CTTempActivePowerCurve}}&quot;);})'>{{CTTempActivePowerCurve}}</a></div>{{/CTTempActivePowerCurve}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CombustionTurbine_collapse" aria-expanded="true" aria-controls="CombustionTurbine_collapse" style="margin-left: 10px;">CombustionTurbine</a></legend>
                    <div id="CombustionTurbine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PrimeMover.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ambientTemp'>ambientTemp: </label><div class='col-sm-8'><input id='ambientTemp' class='form-control' type='text'{{#ambientTemp}} value='{{ambientTemp}}'{{/ambientTemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='auxPowerVersusFrequency'>auxPowerVersusFrequency: </label><div class='col-sm-8'><input id='auxPowerVersusFrequency' class='form-control' type='text'{{#auxPowerVersusFrequency}} value='{{auxPowerVersusFrequency}}'{{/auxPowerVersusFrequency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='auxPowerVersusVoltage'>auxPowerVersusVoltage: </label><div class='col-sm-8'><input id='auxPowerVersusVoltage' class='form-control' type='text'{{#auxPowerVersusVoltage}} value='{{auxPowerVersusVoltage}}'{{/auxPowerVersusVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='capabilityVersusFrequency'>capabilityVersusFrequency: </label><div class='col-sm-8'><input id='capabilityVersusFrequency' class='form-control' type='text'{{#capabilityVersusFrequency}} value='{{capabilityVersusFrequency}}'{{/capabilityVersusFrequency}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='heatRecoveryFlag'>heatRecoveryFlag: </label><div class='col-sm-8'><input id='heatRecoveryFlag' class='form-check-input' type='checkbox'{{#heatRecoveryFlag}} checked{{/heatRecoveryFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='powerVariationByTemp'>powerVariationByTemp: </label><div class='col-sm-8'><input id='powerVariationByTemp' class='form-control' type='text'{{#powerVariationByTemp}} value='{{powerVariationByTemp}}'{{/powerVariationByTemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='referenceTemp'>referenceTemp: </label><div class='col-sm-8'><input id='referenceTemp' class='form-control' type='text'{{#referenceTemp}} value='{{referenceTemp}}'{{/referenceTemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeConstant'>timeConstant: </label><div class='col-sm-8'><input id='timeConstant' class='form-control' type='text'{{#timeConstant}} value='{{timeConstant}}'{{/timeConstant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AirCompressor'>AirCompressor: </label><div class='col-sm-8'><input id='AirCompressor' class='form-control' type='text'{{#AirCompressor}} value='{{AirCompressor}}'{{/AirCompressor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HeatRecoveryBoiler'>HeatRecoveryBoiler: </label><div class='col-sm-8'><input id='HeatRecoveryBoiler' class='form-control' type='text'{{#HeatRecoveryBoiler}} value='{{HeatRecoveryBoiler}}'{{/HeatRecoveryBoiler}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CTTempActivePowerCurve'>CTTempActivePowerCurve: </label><div class='col-sm-8'><input id='CTTempActivePowerCurve' class='form-control' type='text'{{#CTTempActivePowerCurve}} value='{{CTTempActivePowerCurve}}'{{/CTTempActivePowerCurve}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        return (
            {
                FossilSteamSupply: FossilSteamSupply,
                BWRSteamSupply: BWRSteamSupply,
                HeatRecoveryBoiler: HeatRecoveryBoiler,
                PWRSteamSupply: PWRSteamSupply,
                CTTempActivePowerCurve: CTTempActivePowerCurve,
                PrimeMover: PrimeMover,
                CombustionTurbine: CombustionTurbine,
                HydroTurbine: HydroTurbine,
                Subcritical: Subcritical,
                SteamSupply: SteamSupply,
                Supercritical: Supercritical,
                DrumBoiler: DrumBoiler,
                SteamTurbine: SteamTurbine
            }
        );
    }
);