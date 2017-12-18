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
                var bucket = cim_data.CTTempActivePowerCurve;
                if (null == bucket)
                   cim_data.CTTempActivePowerCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CTTempActivePowerCurve[obj.id];
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

                base.export_attribute (obj, "CTTempActivePowerCurve", "CombustionTurbine", "CombustionTurbine", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_CTTempActivePowerCurve_collapse" aria-expanded="true" aria-controls="{{id}}_CTTempActivePowerCurve_collapse" style="margin-left: 10px;">CTTempActivePowerCurve</a></legend>
                    <div id="{{id}}_CTTempActivePowerCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CombustionTurbine'>CombustionTurbine: </label><div class='col-sm-8'><input id='{{id}}_CombustionTurbine' class='form-control' type='text'{{#CombustionTurbine}} value='{{CombustionTurbine}}'{{/CombustionTurbine}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CTTempActivePowerCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_CombustionTurbine").value; if ("" != temp) obj.CombustionTurbine = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CombustionTurbine", "1", "0..1", "CombustionTurbine", "CTTempActivePowerCurve"]
                        ]
                    )
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
                var bucket = cim_data.SteamSupply;
                if (null == bucket)
                   cim_data.SteamSupply = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SteamSupply[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "SteamSupply";
                base.parse_element (/<cim:SteamSupply.steamSupplyRating>([\s\S]*?)<\/cim:SteamSupply.steamSupplyRating>/g, obj, "steamSupplyRating", base.to_float, sub, context);
                base.parse_attributes (/<cim:SteamSupply.SteamTurbines\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SteamTurbines", sub, context);
                var bucket = context.parsed.SteamSupply;
                if (null == bucket)
                   context.parsed.SteamSupply = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "SteamSupply", "steamSupplyRating", "steamSupplyRating",  base.from_float, fields);
                base.export_attributes (obj, "SteamSupply", "SteamTurbines", "SteamTurbines", fields);
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
                    {{#SteamTurbines}}<div><b>SteamTurbines</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SteamTurbines}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SteamTurbines) obj.SteamTurbines_string = obj.SteamTurbines.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SteamTurbines_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_SteamSupply_collapse" aria-expanded="true" aria-controls="{{id}}_SteamSupply_collapse" style="margin-left: 10px;">SteamSupply</a></legend>
                    <div id="{{id}}_SteamSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_steamSupplyRating'>steamSupplyRating: </label><div class='col-sm-8'><input id='{{id}}_steamSupplyRating' class='form-control' type='text'{{#steamSupplyRating}} value='{{steamSupplyRating}}'{{/steamSupplyRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SteamTurbines'>SteamTurbines: </label><div class='col-sm-8'><input id='{{id}}_SteamTurbines' class='form-control' type='text'{{#SteamTurbines}} value='{{SteamTurbines}}_string'{{/SteamTurbines}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SteamSupply" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_steamSupplyRating").value; if ("" != temp) obj.steamSupplyRating = temp;
                temp = document.getElementById (id + "_SteamTurbines").value; if ("" != temp) obj.SteamTurbines = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SteamTurbines", "0..*", "0..*", "SteamTurbine", "SteamSupplys"]
                        ]
                    )
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
                var bucket = cim_data.PrimeMover;
                if (null == bucket)
                   cim_data.PrimeMover = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PrimeMover[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "PrimeMover";
                base.parse_element (/<cim:PrimeMover.primeMoverRating>([\s\S]*?)<\/cim:PrimeMover.primeMoverRating>/g, obj, "primeMoverRating", base.to_float, sub, context);
                base.parse_attributes (/<cim:PrimeMover.SynchronousMachines\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachines", sub, context);
                var bucket = context.parsed.PrimeMover;
                if (null == bucket)
                   context.parsed.PrimeMover = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "PrimeMover", "primeMoverRating", "primeMoverRating",  base.from_float, fields);
                base.export_attributes (obj, "PrimeMover", "SynchronousMachines", "SynchronousMachines", fields);
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
                    {{#SynchronousMachines}}<div><b>SynchronousMachines</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SynchronousMachines}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SynchronousMachines) obj.SynchronousMachines_string = obj.SynchronousMachines.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SynchronousMachines_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PrimeMover_collapse" aria-expanded="true" aria-controls="{{id}}_PrimeMover_collapse" style="margin-left: 10px;">PrimeMover</a></legend>
                    <div id="{{id}}_PrimeMover_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_primeMoverRating'>primeMoverRating: </label><div class='col-sm-8'><input id='{{id}}_primeMoverRating' class='form-control' type='text'{{#primeMoverRating}} value='{{primeMoverRating}}'{{/primeMoverRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SynchronousMachines'>SynchronousMachines: </label><div class='col-sm-8'><input id='{{id}}_SynchronousMachines' class='form-control' type='text'{{#SynchronousMachines}} value='{{SynchronousMachines}}_string'{{/SynchronousMachines}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PrimeMover" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_primeMoverRating").value; if ("" != temp) obj.primeMoverRating = temp;
                temp = document.getElementById (id + "_SynchronousMachines").value; if ("" != temp) obj.SynchronousMachines = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SynchronousMachines", "0..*", "0..*", "SynchronousMachine", "PrimeMovers"]
                        ]
                    )
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
                var bucket = cim_data.BWRSteamSupply;
                if (null == bucket)
                   cim_data.BWRSteamSupply = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BWRSteamSupply[obj.id];
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

                base.export_element (obj, "BWRSteamSupply", "highPowerLimit", "highPowerLimit",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "inCoreThermalTC", "inCoreThermalTC",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "integralGain", "integralGain",  base.from_float, fields);
                base.export_element (obj, "BWRSteamSupply", "lowerLimit", "lowerLimit",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "lowPowerLimit", "lowPowerLimit",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "pressureLimit", "pressureLimit",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "pressureSetpointGA", "pressureSetpointGA",  base.from_float, fields);
                base.export_element (obj, "BWRSteamSupply", "pressureSetpointTC1", "pressureSetpointTC1",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "pressureSetpointTC2", "pressureSetpointTC2",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "proportionalGain", "proportionalGain",  base.from_float, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux1", "rfAux1",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux2", "rfAux2",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux3", "rfAux3",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux4", "rfAux4",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux5", "rfAux5",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux6", "rfAux6",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux7", "rfAux7",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rfAux8", "rfAux8",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rodPattern", "rodPattern",  base.from_string, fields);
                base.export_element (obj, "BWRSteamSupply", "rodPatternConstant", "rodPatternConstant",  base.from_float, fields);
                base.export_element (obj, "BWRSteamSupply", "upperLimit", "upperLimit",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_BWRSteamSupply_collapse" aria-expanded="true" aria-controls="{{id}}_BWRSteamSupply_collapse" style="margin-left: 10px;">BWRSteamSupply</a></legend>
                    <div id="{{id}}_BWRSteamSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SteamSupply.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highPowerLimit'>highPowerLimit: </label><div class='col-sm-8'><input id='{{id}}_highPowerLimit' class='form-control' type='text'{{#highPowerLimit}} value='{{highPowerLimit}}'{{/highPowerLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inCoreThermalTC'>inCoreThermalTC: </label><div class='col-sm-8'><input id='{{id}}_inCoreThermalTC' class='form-control' type='text'{{#inCoreThermalTC}} value='{{inCoreThermalTC}}'{{/inCoreThermalTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_integralGain'>integralGain: </label><div class='col-sm-8'><input id='{{id}}_integralGain' class='form-control' type='text'{{#integralGain}} value='{{integralGain}}'{{/integralGain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowerLimit'>lowerLimit: </label><div class='col-sm-8'><input id='{{id}}_lowerLimit' class='form-control' type='text'{{#lowerLimit}} value='{{lowerLimit}}'{{/lowerLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowPowerLimit'>lowPowerLimit: </label><div class='col-sm-8'><input id='{{id}}_lowPowerLimit' class='form-control' type='text'{{#lowPowerLimit}} value='{{lowPowerLimit}}'{{/lowPowerLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pressureLimit'>pressureLimit: </label><div class='col-sm-8'><input id='{{id}}_pressureLimit' class='form-control' type='text'{{#pressureLimit}} value='{{pressureLimit}}'{{/pressureLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pressureSetpointGA'>pressureSetpointGA: </label><div class='col-sm-8'><input id='{{id}}_pressureSetpointGA' class='form-control' type='text'{{#pressureSetpointGA}} value='{{pressureSetpointGA}}'{{/pressureSetpointGA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pressureSetpointTC1'>pressureSetpointTC1: </label><div class='col-sm-8'><input id='{{id}}_pressureSetpointTC1' class='form-control' type='text'{{#pressureSetpointTC1}} value='{{pressureSetpointTC1}}'{{/pressureSetpointTC1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pressureSetpointTC2'>pressureSetpointTC2: </label><div class='col-sm-8'><input id='{{id}}_pressureSetpointTC2' class='form-control' type='text'{{#pressureSetpointTC2}} value='{{pressureSetpointTC2}}'{{/pressureSetpointTC2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_proportionalGain'>proportionalGain: </label><div class='col-sm-8'><input id='{{id}}_proportionalGain' class='form-control' type='text'{{#proportionalGain}} value='{{proportionalGain}}'{{/proportionalGain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rfAux1'>rfAux1: </label><div class='col-sm-8'><input id='{{id}}_rfAux1' class='form-control' type='text'{{#rfAux1}} value='{{rfAux1}}'{{/rfAux1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rfAux2'>rfAux2: </label><div class='col-sm-8'><input id='{{id}}_rfAux2' class='form-control' type='text'{{#rfAux2}} value='{{rfAux2}}'{{/rfAux2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rfAux3'>rfAux3: </label><div class='col-sm-8'><input id='{{id}}_rfAux3' class='form-control' type='text'{{#rfAux3}} value='{{rfAux3}}'{{/rfAux3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rfAux4'>rfAux4: </label><div class='col-sm-8'><input id='{{id}}_rfAux4' class='form-control' type='text'{{#rfAux4}} value='{{rfAux4}}'{{/rfAux4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rfAux5'>rfAux5: </label><div class='col-sm-8'><input id='{{id}}_rfAux5' class='form-control' type='text'{{#rfAux5}} value='{{rfAux5}}'{{/rfAux5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rfAux6'>rfAux6: </label><div class='col-sm-8'><input id='{{id}}_rfAux6' class='form-control' type='text'{{#rfAux6}} value='{{rfAux6}}'{{/rfAux6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rfAux7'>rfAux7: </label><div class='col-sm-8'><input id='{{id}}_rfAux7' class='form-control' type='text'{{#rfAux7}} value='{{rfAux7}}'{{/rfAux7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rfAux8'>rfAux8: </label><div class='col-sm-8'><input id='{{id}}_rfAux8' class='form-control' type='text'{{#rfAux8}} value='{{rfAux8}}'{{/rfAux8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rodPattern'>rodPattern: </label><div class='col-sm-8'><input id='{{id}}_rodPattern' class='form-control' type='text'{{#rodPattern}} value='{{rodPattern}}'{{/rodPattern}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rodPatternConstant'>rodPatternConstant: </label><div class='col-sm-8'><input id='{{id}}_rodPatternConstant' class='form-control' type='text'{{#rodPatternConstant}} value='{{rodPatternConstant}}'{{/rodPatternConstant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_upperLimit'>upperLimit: </label><div class='col-sm-8'><input id='{{id}}_upperLimit' class='form-control' type='text'{{#upperLimit}} value='{{upperLimit}}'{{/upperLimit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "BWRSteamSupply" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_highPowerLimit").value; if ("" != temp) obj.highPowerLimit = temp;
                temp = document.getElementById (id + "_inCoreThermalTC").value; if ("" != temp) obj.inCoreThermalTC = temp;
                temp = document.getElementById (id + "_integralGain").value; if ("" != temp) obj.integralGain = temp;
                temp = document.getElementById (id + "_lowerLimit").value; if ("" != temp) obj.lowerLimit = temp;
                temp = document.getElementById (id + "_lowPowerLimit").value; if ("" != temp) obj.lowPowerLimit = temp;
                temp = document.getElementById (id + "_pressureLimit").value; if ("" != temp) obj.pressureLimit = temp;
                temp = document.getElementById (id + "_pressureSetpointGA").value; if ("" != temp) obj.pressureSetpointGA = temp;
                temp = document.getElementById (id + "_pressureSetpointTC1").value; if ("" != temp) obj.pressureSetpointTC1 = temp;
                temp = document.getElementById (id + "_pressureSetpointTC2").value; if ("" != temp) obj.pressureSetpointTC2 = temp;
                temp = document.getElementById (id + "_proportionalGain").value; if ("" != temp) obj.proportionalGain = temp;
                temp = document.getElementById (id + "_rfAux1").value; if ("" != temp) obj.rfAux1 = temp;
                temp = document.getElementById (id + "_rfAux2").value; if ("" != temp) obj.rfAux2 = temp;
                temp = document.getElementById (id + "_rfAux3").value; if ("" != temp) obj.rfAux3 = temp;
                temp = document.getElementById (id + "_rfAux4").value; if ("" != temp) obj.rfAux4 = temp;
                temp = document.getElementById (id + "_rfAux5").value; if ("" != temp) obj.rfAux5 = temp;
                temp = document.getElementById (id + "_rfAux6").value; if ("" != temp) obj.rfAux6 = temp;
                temp = document.getElementById (id + "_rfAux7").value; if ("" != temp) obj.rfAux7 = temp;
                temp = document.getElementById (id + "_rfAux8").value; if ("" != temp) obj.rfAux8 = temp;
                temp = document.getElementById (id + "_rodPattern").value; if ("" != temp) obj.rodPattern = temp;
                temp = document.getElementById (id + "_rodPatternConstant").value; if ("" != temp) obj.rodPatternConstant = temp;
                temp = document.getElementById (id + "_upperLimit").value; if ("" != temp) obj.upperLimit = temp;

                return (obj);
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
                var bucket = cim_data.FossilSteamSupply;
                if (null == bucket)
                   cim_data.FossilSteamSupply = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FossilSteamSupply[obj.id];
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

                base.export_element (obj, "FossilSteamSupply", "auxPowerVersusFrequency", "auxPowerVersusFrequency",  base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "auxPowerVersusVoltage", "auxPowerVersusVoltage",  base.from_string, fields);
                base.export_attribute (obj, "FossilSteamSupply", "boilerControlMode", "boilerControlMode", fields);
                base.export_element (obj, "FossilSteamSupply", "controlErrorBiasP", "controlErrorBiasP",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "controlIC", "controlIC",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "controlPC", "controlPC",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "controlPEB", "controlPEB",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "controlPED", "controlPED",  base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "controlTC", "controlTC",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "feedWaterIG", "feedWaterIG",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "feedWaterPG", "feedWaterPG",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "feedWaterTC", "feedWaterTC",  base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "fuelDemandLimit", "fuelDemandLimit",  base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "fuelSupplyDelay", "fuelSupplyDelay",  base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "fuelSupplyTC", "fuelSupplyTC",  base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "maxErrorRateP", "maxErrorRateP",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "mechPowerSensorLag", "mechPowerSensorLag",  base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "minErrorRateP", "minErrorRateP",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "pressureCtrlDG", "pressureCtrlDG",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "pressureCtrlIG", "pressureCtrlIG",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "pressureCtrlPG", "pressureCtrlPG",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "pressureFeedback", "pressureFeedback",  base.from_string, fields);
                base.export_element (obj, "FossilSteamSupply", "superHeater1Capacity", "superHeater1Capacity",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "superHeater2Capacity", "superHeater2Capacity",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "superHeaterPipePD", "superHeaterPipePD",  base.from_float, fields);
                base.export_element (obj, "FossilSteamSupply", "throttlePressureSP", "throttlePressureSP",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_FossilSteamSupply_collapse" aria-expanded="true" aria-controls="{{id}}_FossilSteamSupply_collapse" style="margin-left: 10px;">FossilSteamSupply</a></legend>
                    <div id="{{id}}_FossilSteamSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SteamSupply.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_auxPowerVersusFrequency'>auxPowerVersusFrequency: </label><div class='col-sm-8'><input id='{{id}}_auxPowerVersusFrequency' class='form-control' type='text'{{#auxPowerVersusFrequency}} value='{{auxPowerVersusFrequency}}'{{/auxPowerVersusFrequency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_auxPowerVersusVoltage'>auxPowerVersusVoltage: </label><div class='col-sm-8'><input id='{{id}}_auxPowerVersusVoltage' class='form-control' type='text'{{#auxPowerVersusVoltage}} value='{{auxPowerVersusVoltage}}'{{/auxPowerVersusVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_boilerControlMode'>boilerControlMode: </label><div class='col-sm-8'><select id='{{id}}_boilerControlMode' class='form-control'>{{#BoilerControlMode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/BoilerControlMode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_controlErrorBiasP'>controlErrorBiasP: </label><div class='col-sm-8'><input id='{{id}}_controlErrorBiasP' class='form-control' type='text'{{#controlErrorBiasP}} value='{{controlErrorBiasP}}'{{/controlErrorBiasP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_controlIC'>controlIC: </label><div class='col-sm-8'><input id='{{id}}_controlIC' class='form-control' type='text'{{#controlIC}} value='{{controlIC}}'{{/controlIC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_controlPC'>controlPC: </label><div class='col-sm-8'><input id='{{id}}_controlPC' class='form-control' type='text'{{#controlPC}} value='{{controlPC}}'{{/controlPC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_controlPEB'>controlPEB: </label><div class='col-sm-8'><input id='{{id}}_controlPEB' class='form-control' type='text'{{#controlPEB}} value='{{controlPEB}}'{{/controlPEB}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_controlPED'>controlPED: </label><div class='col-sm-8'><input id='{{id}}_controlPED' class='form-control' type='text'{{#controlPED}} value='{{controlPED}}'{{/controlPED}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_controlTC'>controlTC: </label><div class='col-sm-8'><input id='{{id}}_controlTC' class='form-control' type='text'{{#controlTC}} value='{{controlTC}}'{{/controlTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_feedWaterIG'>feedWaterIG: </label><div class='col-sm-8'><input id='{{id}}_feedWaterIG' class='form-control' type='text'{{#feedWaterIG}} value='{{feedWaterIG}}'{{/feedWaterIG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_feedWaterPG'>feedWaterPG: </label><div class='col-sm-8'><input id='{{id}}_feedWaterPG' class='form-control' type='text'{{#feedWaterPG}} value='{{feedWaterPG}}'{{/feedWaterPG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_feedWaterTC'>feedWaterTC: </label><div class='col-sm-8'><input id='{{id}}_feedWaterTC' class='form-control' type='text'{{#feedWaterTC}} value='{{feedWaterTC}}'{{/feedWaterTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelDemandLimit'>fuelDemandLimit: </label><div class='col-sm-8'><input id='{{id}}_fuelDemandLimit' class='form-control' type='text'{{#fuelDemandLimit}} value='{{fuelDemandLimit}}'{{/fuelDemandLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelSupplyDelay'>fuelSupplyDelay: </label><div class='col-sm-8'><input id='{{id}}_fuelSupplyDelay' class='form-control' type='text'{{#fuelSupplyDelay}} value='{{fuelSupplyDelay}}'{{/fuelSupplyDelay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelSupplyTC'>fuelSupplyTC: </label><div class='col-sm-8'><input id='{{id}}_fuelSupplyTC' class='form-control' type='text'{{#fuelSupplyTC}} value='{{fuelSupplyTC}}'{{/fuelSupplyTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxErrorRateP'>maxErrorRateP: </label><div class='col-sm-8'><input id='{{id}}_maxErrorRateP' class='form-control' type='text'{{#maxErrorRateP}} value='{{maxErrorRateP}}'{{/maxErrorRateP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mechPowerSensorLag'>mechPowerSensorLag: </label><div class='col-sm-8'><input id='{{id}}_mechPowerSensorLag' class='form-control' type='text'{{#mechPowerSensorLag}} value='{{mechPowerSensorLag}}'{{/mechPowerSensorLag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minErrorRateP'>minErrorRateP: </label><div class='col-sm-8'><input id='{{id}}_minErrorRateP' class='form-control' type='text'{{#minErrorRateP}} value='{{minErrorRateP}}'{{/minErrorRateP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pressureCtrlDG'>pressureCtrlDG: </label><div class='col-sm-8'><input id='{{id}}_pressureCtrlDG' class='form-control' type='text'{{#pressureCtrlDG}} value='{{pressureCtrlDG}}'{{/pressureCtrlDG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pressureCtrlIG'>pressureCtrlIG: </label><div class='col-sm-8'><input id='{{id}}_pressureCtrlIG' class='form-control' type='text'{{#pressureCtrlIG}} value='{{pressureCtrlIG}}'{{/pressureCtrlIG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pressureCtrlPG'>pressureCtrlPG: </label><div class='col-sm-8'><input id='{{id}}_pressureCtrlPG' class='form-control' type='text'{{#pressureCtrlPG}} value='{{pressureCtrlPG}}'{{/pressureCtrlPG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pressureFeedback'>pressureFeedback: </label><div class='col-sm-8'><input id='{{id}}_pressureFeedback' class='form-control' type='text'{{#pressureFeedback}} value='{{pressureFeedback}}'{{/pressureFeedback}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_superHeater1Capacity'>superHeater1Capacity: </label><div class='col-sm-8'><input id='{{id}}_superHeater1Capacity' class='form-control' type='text'{{#superHeater1Capacity}} value='{{superHeater1Capacity}}'{{/superHeater1Capacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_superHeater2Capacity'>superHeater2Capacity: </label><div class='col-sm-8'><input id='{{id}}_superHeater2Capacity' class='form-control' type='text'{{#superHeater2Capacity}} value='{{superHeater2Capacity}}'{{/superHeater2Capacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_superHeaterPipePD'>superHeaterPipePD: </label><div class='col-sm-8'><input id='{{id}}_superHeaterPipePD' class='form-control' type='text'{{#superHeaterPipePD}} value='{{superHeaterPipePD}}'{{/superHeaterPipePD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_throttlePressureSP'>throttlePressureSP: </label><div class='col-sm-8'><input id='{{id}}_throttlePressureSP' class='form-control' type='text'{{#throttlePressureSP}} value='{{throttlePressureSP}}'{{/throttlePressureSP}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "FossilSteamSupply" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_auxPowerVersusFrequency").value; if ("" != temp) obj.auxPowerVersusFrequency = temp;
                temp = document.getElementById (id + "_auxPowerVersusVoltage").value; if ("" != temp) obj.auxPowerVersusVoltage = temp;
                temp = document.getElementById (id + "_boilerControlMode").value; if ("" != temp) { temp = BoilerControlMode[temp]; if ("undefined" != typeof (temp)) obj.boilerControlMode = "http://iec.ch/TC57/2013/CIM-schema-cim16#BoilerControlMode." + temp; }
                temp = document.getElementById (id + "_controlErrorBiasP").value; if ("" != temp) obj.controlErrorBiasP = temp;
                temp = document.getElementById (id + "_controlIC").value; if ("" != temp) obj.controlIC = temp;
                temp = document.getElementById (id + "_controlPC").value; if ("" != temp) obj.controlPC = temp;
                temp = document.getElementById (id + "_controlPEB").value; if ("" != temp) obj.controlPEB = temp;
                temp = document.getElementById (id + "_controlPED").value; if ("" != temp) obj.controlPED = temp;
                temp = document.getElementById (id + "_controlTC").value; if ("" != temp) obj.controlTC = temp;
                temp = document.getElementById (id + "_feedWaterIG").value; if ("" != temp) obj.feedWaterIG = temp;
                temp = document.getElementById (id + "_feedWaterPG").value; if ("" != temp) obj.feedWaterPG = temp;
                temp = document.getElementById (id + "_feedWaterTC").value; if ("" != temp) obj.feedWaterTC = temp;
                temp = document.getElementById (id + "_fuelDemandLimit").value; if ("" != temp) obj.fuelDemandLimit = temp;
                temp = document.getElementById (id + "_fuelSupplyDelay").value; if ("" != temp) obj.fuelSupplyDelay = temp;
                temp = document.getElementById (id + "_fuelSupplyTC").value; if ("" != temp) obj.fuelSupplyTC = temp;
                temp = document.getElementById (id + "_maxErrorRateP").value; if ("" != temp) obj.maxErrorRateP = temp;
                temp = document.getElementById (id + "_mechPowerSensorLag").value; if ("" != temp) obj.mechPowerSensorLag = temp;
                temp = document.getElementById (id + "_minErrorRateP").value; if ("" != temp) obj.minErrorRateP = temp;
                temp = document.getElementById (id + "_pressureCtrlDG").value; if ("" != temp) obj.pressureCtrlDG = temp;
                temp = document.getElementById (id + "_pressureCtrlIG").value; if ("" != temp) obj.pressureCtrlIG = temp;
                temp = document.getElementById (id + "_pressureCtrlPG").value; if ("" != temp) obj.pressureCtrlPG = temp;
                temp = document.getElementById (id + "_pressureFeedback").value; if ("" != temp) obj.pressureFeedback = temp;
                temp = document.getElementById (id + "_superHeater1Capacity").value; if ("" != temp) obj.superHeater1Capacity = temp;
                temp = document.getElementById (id + "_superHeater2Capacity").value; if ("" != temp) obj.superHeater2Capacity = temp;
                temp = document.getElementById (id + "_superHeaterPipePD").value; if ("" != temp) obj.superHeaterPipePD = temp;
                temp = document.getElementById (id + "_throttlePressureSP").value; if ("" != temp) obj.throttlePressureSP = temp;

                return (obj);
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
                var bucket = cim_data.Supercritical;
                if (null == bucket)
                   cim_data.Supercritical = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Supercritical[obj.id];
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Supercritical_collapse" aria-expanded="true" aria-controls="{{id}}_Supercritical_collapse" style="margin-left: 10px;">Supercritical</a></legend>
                    <div id="{{id}}_Supercritical_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FossilSteamSupply.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Supercritical" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.PWRSteamSupply;
                if (null == bucket)
                   cim_data.PWRSteamSupply = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PWRSteamSupply[obj.id];
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

                base.export_element (obj, "PWRSteamSupply", "coldLegFBLagTC", "coldLegFBLagTC",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coldLegFBLeadTC1", "coldLegFBLeadTC1",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coldLegFBLeadTC2", "coldLegFBLeadTC2",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coldLegFG1", "coldLegFG1",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coldLegFG2", "coldLegFG2",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coldLegLagTC", "coldLegLagTC",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coreHTLagTC1", "coreHTLagTC1",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coreHTLagTC2", "coreHTLagTC2",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coreNeutronicsEffTC", "coreNeutronicsEffTC",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "coreNeutronicsHT", "coreNeutronicsHT",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "feedbackFactor", "feedbackFactor",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "hotLegLagTC", "hotLegLagTC",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "hotLegSteamGain", "hotLegSteamGain",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "hotLegToColdLegGain", "hotLegToColdLegGain",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "pressureCG", "pressureCG",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "steamFlowFG", "steamFlowFG",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "steamPressureDropLagTC", "steamPressureDropLagTC",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "steamPressureFG", "steamPressureFG",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "throttlePressureFactor", "throttlePressureFactor",  base.from_string, fields);
                base.export_element (obj, "PWRSteamSupply", "throttlePressureSP", "throttlePressureSP",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PWRSteamSupply_collapse" aria-expanded="true" aria-controls="{{id}}_PWRSteamSupply_collapse" style="margin-left: 10px;">PWRSteamSupply</a></legend>
                    <div id="{{id}}_PWRSteamSupply_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SteamSupply.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coldLegFBLagTC'>coldLegFBLagTC: </label><div class='col-sm-8'><input id='{{id}}_coldLegFBLagTC' class='form-control' type='text'{{#coldLegFBLagTC}} value='{{coldLegFBLagTC}}'{{/coldLegFBLagTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coldLegFBLeadTC1'>coldLegFBLeadTC1: </label><div class='col-sm-8'><input id='{{id}}_coldLegFBLeadTC1' class='form-control' type='text'{{#coldLegFBLeadTC1}} value='{{coldLegFBLeadTC1}}'{{/coldLegFBLeadTC1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coldLegFBLeadTC2'>coldLegFBLeadTC2: </label><div class='col-sm-8'><input id='{{id}}_coldLegFBLeadTC2' class='form-control' type='text'{{#coldLegFBLeadTC2}} value='{{coldLegFBLeadTC2}}'{{/coldLegFBLeadTC2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coldLegFG1'>coldLegFG1: </label><div class='col-sm-8'><input id='{{id}}_coldLegFG1' class='form-control' type='text'{{#coldLegFG1}} value='{{coldLegFG1}}'{{/coldLegFG1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coldLegFG2'>coldLegFG2: </label><div class='col-sm-8'><input id='{{id}}_coldLegFG2' class='form-control' type='text'{{#coldLegFG2}} value='{{coldLegFG2}}'{{/coldLegFG2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coldLegLagTC'>coldLegLagTC: </label><div class='col-sm-8'><input id='{{id}}_coldLegLagTC' class='form-control' type='text'{{#coldLegLagTC}} value='{{coldLegLagTC}}'{{/coldLegLagTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coreHTLagTC1'>coreHTLagTC1: </label><div class='col-sm-8'><input id='{{id}}_coreHTLagTC1' class='form-control' type='text'{{#coreHTLagTC1}} value='{{coreHTLagTC1}}'{{/coreHTLagTC1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coreHTLagTC2'>coreHTLagTC2: </label><div class='col-sm-8'><input id='{{id}}_coreHTLagTC2' class='form-control' type='text'{{#coreHTLagTC2}} value='{{coreHTLagTC2}}'{{/coreHTLagTC2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coreNeutronicsEffTC'>coreNeutronicsEffTC: </label><div class='col-sm-8'><input id='{{id}}_coreNeutronicsEffTC' class='form-control' type='text'{{#coreNeutronicsEffTC}} value='{{coreNeutronicsEffTC}}'{{/coreNeutronicsEffTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coreNeutronicsHT'>coreNeutronicsHT: </label><div class='col-sm-8'><input id='{{id}}_coreNeutronicsHT' class='form-control' type='text'{{#coreNeutronicsHT}} value='{{coreNeutronicsHT}}'{{/coreNeutronicsHT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_feedbackFactor'>feedbackFactor: </label><div class='col-sm-8'><input id='{{id}}_feedbackFactor' class='form-control' type='text'{{#feedbackFactor}} value='{{feedbackFactor}}'{{/feedbackFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hotLegLagTC'>hotLegLagTC: </label><div class='col-sm-8'><input id='{{id}}_hotLegLagTC' class='form-control' type='text'{{#hotLegLagTC}} value='{{hotLegLagTC}}'{{/hotLegLagTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hotLegSteamGain'>hotLegSteamGain: </label><div class='col-sm-8'><input id='{{id}}_hotLegSteamGain' class='form-control' type='text'{{#hotLegSteamGain}} value='{{hotLegSteamGain}}'{{/hotLegSteamGain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hotLegToColdLegGain'>hotLegToColdLegGain: </label><div class='col-sm-8'><input id='{{id}}_hotLegToColdLegGain' class='form-control' type='text'{{#hotLegToColdLegGain}} value='{{hotLegToColdLegGain}}'{{/hotLegToColdLegGain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pressureCG'>pressureCG: </label><div class='col-sm-8'><input id='{{id}}_pressureCG' class='form-control' type='text'{{#pressureCG}} value='{{pressureCG}}'{{/pressureCG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_steamFlowFG'>steamFlowFG: </label><div class='col-sm-8'><input id='{{id}}_steamFlowFG' class='form-control' type='text'{{#steamFlowFG}} value='{{steamFlowFG}}'{{/steamFlowFG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_steamPressureDropLagTC'>steamPressureDropLagTC: </label><div class='col-sm-8'><input id='{{id}}_steamPressureDropLagTC' class='form-control' type='text'{{#steamPressureDropLagTC}} value='{{steamPressureDropLagTC}}'{{/steamPressureDropLagTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_steamPressureFG'>steamPressureFG: </label><div class='col-sm-8'><input id='{{id}}_steamPressureFG' class='form-control' type='text'{{#steamPressureFG}} value='{{steamPressureFG}}'{{/steamPressureFG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_throttlePressureFactor'>throttlePressureFactor: </label><div class='col-sm-8'><input id='{{id}}_throttlePressureFactor' class='form-control' type='text'{{#throttlePressureFactor}} value='{{throttlePressureFactor}}'{{/throttlePressureFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_throttlePressureSP'>throttlePressureSP: </label><div class='col-sm-8'><input id='{{id}}_throttlePressureSP' class='form-control' type='text'{{#throttlePressureSP}} value='{{throttlePressureSP}}'{{/throttlePressureSP}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PWRSteamSupply" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_coldLegFBLagTC").value; if ("" != temp) obj.coldLegFBLagTC = temp;
                temp = document.getElementById (id + "_coldLegFBLeadTC1").value; if ("" != temp) obj.coldLegFBLeadTC1 = temp;
                temp = document.getElementById (id + "_coldLegFBLeadTC2").value; if ("" != temp) obj.coldLegFBLeadTC2 = temp;
                temp = document.getElementById (id + "_coldLegFG1").value; if ("" != temp) obj.coldLegFG1 = temp;
                temp = document.getElementById (id + "_coldLegFG2").value; if ("" != temp) obj.coldLegFG2 = temp;
                temp = document.getElementById (id + "_coldLegLagTC").value; if ("" != temp) obj.coldLegLagTC = temp;
                temp = document.getElementById (id + "_coreHTLagTC1").value; if ("" != temp) obj.coreHTLagTC1 = temp;
                temp = document.getElementById (id + "_coreHTLagTC2").value; if ("" != temp) obj.coreHTLagTC2 = temp;
                temp = document.getElementById (id + "_coreNeutronicsEffTC").value; if ("" != temp) obj.coreNeutronicsEffTC = temp;
                temp = document.getElementById (id + "_coreNeutronicsHT").value; if ("" != temp) obj.coreNeutronicsHT = temp;
                temp = document.getElementById (id + "_feedbackFactor").value; if ("" != temp) obj.feedbackFactor = temp;
                temp = document.getElementById (id + "_hotLegLagTC").value; if ("" != temp) obj.hotLegLagTC = temp;
                temp = document.getElementById (id + "_hotLegSteamGain").value; if ("" != temp) obj.hotLegSteamGain = temp;
                temp = document.getElementById (id + "_hotLegToColdLegGain").value; if ("" != temp) obj.hotLegToColdLegGain = temp;
                temp = document.getElementById (id + "_pressureCG").value; if ("" != temp) obj.pressureCG = temp;
                temp = document.getElementById (id + "_steamFlowFG").value; if ("" != temp) obj.steamFlowFG = temp;
                temp = document.getElementById (id + "_steamPressureDropLagTC").value; if ("" != temp) obj.steamPressureDropLagTC = temp;
                temp = document.getElementById (id + "_steamPressureFG").value; if ("" != temp) obj.steamPressureFG = temp;
                temp = document.getElementById (id + "_throttlePressureFactor").value; if ("" != temp) obj.throttlePressureFactor = temp;
                temp = document.getElementById (id + "_throttlePressureSP").value; if ("" != temp) obj.throttlePressureSP = temp;

                return (obj);
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
                var bucket = cim_data.HeatRecoveryBoiler;
                if (null == bucket)
                   cim_data.HeatRecoveryBoiler = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HeatRecoveryBoiler[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = FossilSteamSupply.prototype.parse.call (this, context, sub);
                obj.cls = "HeatRecoveryBoiler";
                base.parse_element (/<cim:HeatRecoveryBoiler.steamSupplyRating2>([\s\S]*?)<\/cim:HeatRecoveryBoiler.steamSupplyRating2>/g, obj, "steamSupplyRating2", base.to_float, sub, context);
                base.parse_attributes (/<cim:HeatRecoveryBoiler.CombustionTurbines\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CombustionTurbines", sub, context);
                var bucket = context.parsed.HeatRecoveryBoiler;
                if (null == bucket)
                   context.parsed.HeatRecoveryBoiler = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = FossilSteamSupply.prototype.export.call (this, obj, false);

                base.export_element (obj, "HeatRecoveryBoiler", "steamSupplyRating2", "steamSupplyRating2",  base.from_float, fields);
                base.export_attributes (obj, "HeatRecoveryBoiler", "CombustionTurbines", "CombustionTurbines", fields);
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
                    {{#CombustionTurbines}}<div><b>CombustionTurbines</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CombustionTurbines}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CombustionTurbines) obj.CombustionTurbines_string = obj.CombustionTurbines.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CombustionTurbines_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_HeatRecoveryBoiler_collapse" aria-expanded="true" aria-controls="{{id}}_HeatRecoveryBoiler_collapse" style="margin-left: 10px;">HeatRecoveryBoiler</a></legend>
                    <div id="{{id}}_HeatRecoveryBoiler_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FossilSteamSupply.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_steamSupplyRating2'>steamSupplyRating2: </label><div class='col-sm-8'><input id='{{id}}_steamSupplyRating2' class='form-control' type='text'{{#steamSupplyRating2}} value='{{steamSupplyRating2}}'{{/steamSupplyRating2}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "HeatRecoveryBoiler" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_steamSupplyRating2").value; if ("" != temp) obj.steamSupplyRating2 = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CombustionTurbines", "0..*", "0..1", "CombustionTurbine", "HeatRecoveryBoiler"]
                        ]
                    )
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
                var bucket = cim_data.DrumBoiler;
                if (null == bucket)
                   cim_data.DrumBoiler = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DrumBoiler[obj.id];
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

                base.export_element (obj, "DrumBoiler", "drumBoilerRating", "drumBoilerRating",  base.from_float, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_DrumBoiler_collapse" aria-expanded="true" aria-controls="{{id}}_DrumBoiler_collapse" style="margin-left: 10px;">DrumBoiler</a></legend>
                    <div id="{{id}}_DrumBoiler_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FossilSteamSupply.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_drumBoilerRating'>drumBoilerRating: </label><div class='col-sm-8'><input id='{{id}}_drumBoilerRating' class='form-control' type='text'{{#drumBoilerRating}} value='{{drumBoilerRating}}'{{/drumBoilerRating}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DrumBoiler" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_drumBoilerRating").value; if ("" != temp) obj.drumBoilerRating = temp;

                return (obj);
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
                var bucket = cim_data.Subcritical;
                if (null == bucket)
                   cim_data.Subcritical = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Subcritical[obj.id];
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Subcritical_collapse" aria-expanded="true" aria-controls="{{id}}_Subcritical_collapse" style="margin-left: 10px;">Subcritical</a></legend>
                    <div id="{{id}}_Subcritical_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + FossilSteamSupply.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Subcritical" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.HydroTurbine;
                if (null == bucket)
                   cim_data.HydroTurbine = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HydroTurbine[obj.id];
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

                base.export_element (obj, "HydroTurbine", "gateRateLimit", "gateRateLimit",  base.from_float, fields);
                base.export_element (obj, "HydroTurbine", "gateUpperLimit", "gateUpperLimit",  base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "maxHeadMaxP", "maxHeadMaxP",  base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "minHeadMaxP", "minHeadMaxP",  base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "speedRating", "speedRating",  base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "speedRegulation", "speedRegulation",  base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "transientDroopTime", "transientDroopTime",  base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "transientRegulation", "transientRegulation",  base.from_string, fields);
                base.export_element (obj, "HydroTurbine", "turbineRating", "turbineRating",  base.from_string, fields);
                base.export_attribute (obj, "HydroTurbine", "turbineType", "turbineType", fields);
                base.export_element (obj, "HydroTurbine", "waterStartingTime", "waterStartingTime",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_HydroTurbine_collapse" aria-expanded="true" aria-controls="{{id}}_HydroTurbine_collapse" style="margin-left: 10px;">HydroTurbine</a></legend>
                    <div id="{{id}}_HydroTurbine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PrimeMover.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gateRateLimit'>gateRateLimit: </label><div class='col-sm-8'><input id='{{id}}_gateRateLimit' class='form-control' type='text'{{#gateRateLimit}} value='{{gateRateLimit}}'{{/gateRateLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gateUpperLimit'>gateUpperLimit: </label><div class='col-sm-8'><input id='{{id}}_gateUpperLimit' class='form-control' type='text'{{#gateUpperLimit}} value='{{gateUpperLimit}}'{{/gateUpperLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxHeadMaxP'>maxHeadMaxP: </label><div class='col-sm-8'><input id='{{id}}_maxHeadMaxP' class='form-control' type='text'{{#maxHeadMaxP}} value='{{maxHeadMaxP}}'{{/maxHeadMaxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minHeadMaxP'>minHeadMaxP: </label><div class='col-sm-8'><input id='{{id}}_minHeadMaxP' class='form-control' type='text'{{#minHeadMaxP}} value='{{minHeadMaxP}}'{{/minHeadMaxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_speedRating'>speedRating: </label><div class='col-sm-8'><input id='{{id}}_speedRating' class='form-control' type='text'{{#speedRating}} value='{{speedRating}}'{{/speedRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_speedRegulation'>speedRegulation: </label><div class='col-sm-8'><input id='{{id}}_speedRegulation' class='form-control' type='text'{{#speedRegulation}} value='{{speedRegulation}}'{{/speedRegulation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transientDroopTime'>transientDroopTime: </label><div class='col-sm-8'><input id='{{id}}_transientDroopTime' class='form-control' type='text'{{#transientDroopTime}} value='{{transientDroopTime}}'{{/transientDroopTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transientRegulation'>transientRegulation: </label><div class='col-sm-8'><input id='{{id}}_transientRegulation' class='form-control' type='text'{{#transientRegulation}} value='{{transientRegulation}}'{{/transientRegulation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_turbineRating'>turbineRating: </label><div class='col-sm-8'><input id='{{id}}_turbineRating' class='form-control' type='text'{{#turbineRating}} value='{{turbineRating}}'{{/turbineRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_turbineType'>turbineType: </label><div class='col-sm-8'><select id='{{id}}_turbineType' class='form-control'>{{#TurbineType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TurbineType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_waterStartingTime'>waterStartingTime: </label><div class='col-sm-8'><input id='{{id}}_waterStartingTime' class='form-control' type='text'{{#waterStartingTime}} value='{{waterStartingTime}}'{{/waterStartingTime}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "HydroTurbine" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_gateRateLimit").value; if ("" != temp) obj.gateRateLimit = temp;
                temp = document.getElementById (id + "_gateUpperLimit").value; if ("" != temp) obj.gateUpperLimit = temp;
                temp = document.getElementById (id + "_maxHeadMaxP").value; if ("" != temp) obj.maxHeadMaxP = temp;
                temp = document.getElementById (id + "_minHeadMaxP").value; if ("" != temp) obj.minHeadMaxP = temp;
                temp = document.getElementById (id + "_speedRating").value; if ("" != temp) obj.speedRating = temp;
                temp = document.getElementById (id + "_speedRegulation").value; if ("" != temp) obj.speedRegulation = temp;
                temp = document.getElementById (id + "_transientDroopTime").value; if ("" != temp) obj.transientDroopTime = temp;
                temp = document.getElementById (id + "_transientRegulation").value; if ("" != temp) obj.transientRegulation = temp;
                temp = document.getElementById (id + "_turbineRating").value; if ("" != temp) obj.turbineRating = temp;
                temp = document.getElementById (id + "_turbineType").value; if ("" != temp) { temp = TurbineType[temp]; if ("undefined" != typeof (temp)) obj.turbineType = "http://iec.ch/TC57/2013/CIM-schema-cim16#TurbineType." + temp; }
                temp = document.getElementById (id + "_waterStartingTime").value; if ("" != temp) obj.waterStartingTime = temp;

                return (obj);
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
                var bucket = cim_data.SteamTurbine;
                if (null == bucket)
                   cim_data.SteamTurbine = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SteamTurbine[obj.id];
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
                base.parse_attributes (/<cim:SteamTurbine.SteamSupplys\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SteamSupplys", sub, context);
                var bucket = context.parsed.SteamTurbine;
                if (null == bucket)
                   context.parsed.SteamTurbine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PrimeMover.prototype.export.call (this, obj, false);

                base.export_element (obj, "SteamTurbine", "crossoverTC", "crossoverTC",  base.from_string, fields);
                base.export_element (obj, "SteamTurbine", "reheater1TC", "reheater1TC",  base.from_string, fields);
                base.export_element (obj, "SteamTurbine", "reheater2TC", "reheater2TC",  base.from_string, fields);
                base.export_element (obj, "SteamTurbine", "shaft1PowerHP", "shaft1PowerHP",  base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft1PowerIP", "shaft1PowerIP",  base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft1PowerLP1", "shaft1PowerLP1",  base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft1PowerLP2", "shaft1PowerLP2",  base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft2PowerHP", "shaft2PowerHP",  base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft2PowerIP", "shaft2PowerIP",  base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft2PowerLP1", "shaft2PowerLP1",  base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "shaft2PowerLP2", "shaft2PowerLP2",  base.from_float, fields);
                base.export_element (obj, "SteamTurbine", "steamChestTC", "steamChestTC",  base.from_string, fields);
                base.export_attributes (obj, "SteamTurbine", "SteamSupplys", "SteamSupplys", fields);
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
                    {{#SteamSupplys}}<div><b>SteamSupplys</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SteamSupplys}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SteamSupplys) obj.SteamSupplys_string = obj.SteamSupplys.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SteamSupplys_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_SteamTurbine_collapse" aria-expanded="true" aria-controls="{{id}}_SteamTurbine_collapse" style="margin-left: 10px;">SteamTurbine</a></legend>
                    <div id="{{id}}_SteamTurbine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PrimeMover.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_crossoverTC'>crossoverTC: </label><div class='col-sm-8'><input id='{{id}}_crossoverTC' class='form-control' type='text'{{#crossoverTC}} value='{{crossoverTC}}'{{/crossoverTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reheater1TC'>reheater1TC: </label><div class='col-sm-8'><input id='{{id}}_reheater1TC' class='form-control' type='text'{{#reheater1TC}} value='{{reheater1TC}}'{{/reheater1TC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reheater2TC'>reheater2TC: </label><div class='col-sm-8'><input id='{{id}}_reheater2TC' class='form-control' type='text'{{#reheater2TC}} value='{{reheater2TC}}'{{/reheater2TC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shaft1PowerHP'>shaft1PowerHP: </label><div class='col-sm-8'><input id='{{id}}_shaft1PowerHP' class='form-control' type='text'{{#shaft1PowerHP}} value='{{shaft1PowerHP}}'{{/shaft1PowerHP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shaft1PowerIP'>shaft1PowerIP: </label><div class='col-sm-8'><input id='{{id}}_shaft1PowerIP' class='form-control' type='text'{{#shaft1PowerIP}} value='{{shaft1PowerIP}}'{{/shaft1PowerIP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shaft1PowerLP1'>shaft1PowerLP1: </label><div class='col-sm-8'><input id='{{id}}_shaft1PowerLP1' class='form-control' type='text'{{#shaft1PowerLP1}} value='{{shaft1PowerLP1}}'{{/shaft1PowerLP1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shaft1PowerLP2'>shaft1PowerLP2: </label><div class='col-sm-8'><input id='{{id}}_shaft1PowerLP2' class='form-control' type='text'{{#shaft1PowerLP2}} value='{{shaft1PowerLP2}}'{{/shaft1PowerLP2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shaft2PowerHP'>shaft2PowerHP: </label><div class='col-sm-8'><input id='{{id}}_shaft2PowerHP' class='form-control' type='text'{{#shaft2PowerHP}} value='{{shaft2PowerHP}}'{{/shaft2PowerHP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shaft2PowerIP'>shaft2PowerIP: </label><div class='col-sm-8'><input id='{{id}}_shaft2PowerIP' class='form-control' type='text'{{#shaft2PowerIP}} value='{{shaft2PowerIP}}'{{/shaft2PowerIP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shaft2PowerLP1'>shaft2PowerLP1: </label><div class='col-sm-8'><input id='{{id}}_shaft2PowerLP1' class='form-control' type='text'{{#shaft2PowerLP1}} value='{{shaft2PowerLP1}}'{{/shaft2PowerLP1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shaft2PowerLP2'>shaft2PowerLP2: </label><div class='col-sm-8'><input id='{{id}}_shaft2PowerLP2' class='form-control' type='text'{{#shaft2PowerLP2}} value='{{shaft2PowerLP2}}'{{/shaft2PowerLP2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_steamChestTC'>steamChestTC: </label><div class='col-sm-8'><input id='{{id}}_steamChestTC' class='form-control' type='text'{{#steamChestTC}} value='{{steamChestTC}}'{{/steamChestTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SteamSupplys'>SteamSupplys: </label><div class='col-sm-8'><input id='{{id}}_SteamSupplys' class='form-control' type='text'{{#SteamSupplys}} value='{{SteamSupplys}}_string'{{/SteamSupplys}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SteamTurbine" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_crossoverTC").value; if ("" != temp) obj.crossoverTC = temp;
                temp = document.getElementById (id + "_reheater1TC").value; if ("" != temp) obj.reheater1TC = temp;
                temp = document.getElementById (id + "_reheater2TC").value; if ("" != temp) obj.reheater2TC = temp;
                temp = document.getElementById (id + "_shaft1PowerHP").value; if ("" != temp) obj.shaft1PowerHP = temp;
                temp = document.getElementById (id + "_shaft1PowerIP").value; if ("" != temp) obj.shaft1PowerIP = temp;
                temp = document.getElementById (id + "_shaft1PowerLP1").value; if ("" != temp) obj.shaft1PowerLP1 = temp;
                temp = document.getElementById (id + "_shaft1PowerLP2").value; if ("" != temp) obj.shaft1PowerLP2 = temp;
                temp = document.getElementById (id + "_shaft2PowerHP").value; if ("" != temp) obj.shaft2PowerHP = temp;
                temp = document.getElementById (id + "_shaft2PowerIP").value; if ("" != temp) obj.shaft2PowerIP = temp;
                temp = document.getElementById (id + "_shaft2PowerLP1").value; if ("" != temp) obj.shaft2PowerLP1 = temp;
                temp = document.getElementById (id + "_shaft2PowerLP2").value; if ("" != temp) obj.shaft2PowerLP2 = temp;
                temp = document.getElementById (id + "_steamChestTC").value; if ("" != temp) obj.steamChestTC = temp;
                temp = document.getElementById (id + "_SteamSupplys").value; if ("" != temp) obj.SteamSupplys = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SteamSupplys", "0..*", "0..*", "SteamSupply", "SteamTurbines"]
                        ]
                    )
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
                var bucket = cim_data.CombustionTurbine;
                if (null == bucket)
                   cim_data.CombustionTurbine = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CombustionTurbine[obj.id];
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

                base.export_element (obj, "CombustionTurbine", "ambientTemp", "ambientTemp",  base.from_string, fields);
                base.export_element (obj, "CombustionTurbine", "auxPowerVersusFrequency", "auxPowerVersusFrequency",  base.from_string, fields);
                base.export_element (obj, "CombustionTurbine", "auxPowerVersusVoltage", "auxPowerVersusVoltage",  base.from_string, fields);
                base.export_element (obj, "CombustionTurbine", "capabilityVersusFrequency", "capabilityVersusFrequency",  base.from_string, fields);
                base.export_element (obj, "CombustionTurbine", "heatRecoveryFlag", "heatRecoveryFlag",  base.from_boolean, fields);
                base.export_element (obj, "CombustionTurbine", "powerVariationByTemp", "powerVariationByTemp",  base.from_string, fields);
                base.export_element (obj, "CombustionTurbine", "referenceTemp", "referenceTemp",  base.from_string, fields);
                base.export_element (obj, "CombustionTurbine", "timeConstant", "timeConstant",  base.from_string, fields);
                base.export_attribute (obj, "CombustionTurbine", "AirCompressor", "AirCompressor", fields);
                base.export_attribute (obj, "CombustionTurbine", "HeatRecoveryBoiler", "HeatRecoveryBoiler", fields);
                base.export_attribute (obj, "CombustionTurbine", "CTTempActivePowerCurve", "CTTempActivePowerCurve", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_CombustionTurbine_collapse" aria-expanded="true" aria-controls="{{id}}_CombustionTurbine_collapse" style="margin-left: 10px;">CombustionTurbine</a></legend>
                    <div id="{{id}}_CombustionTurbine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + PrimeMover.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ambientTemp'>ambientTemp: </label><div class='col-sm-8'><input id='{{id}}_ambientTemp' class='form-control' type='text'{{#ambientTemp}} value='{{ambientTemp}}'{{/ambientTemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_auxPowerVersusFrequency'>auxPowerVersusFrequency: </label><div class='col-sm-8'><input id='{{id}}_auxPowerVersusFrequency' class='form-control' type='text'{{#auxPowerVersusFrequency}} value='{{auxPowerVersusFrequency}}'{{/auxPowerVersusFrequency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_auxPowerVersusVoltage'>auxPowerVersusVoltage: </label><div class='col-sm-8'><input id='{{id}}_auxPowerVersusVoltage' class='form-control' type='text'{{#auxPowerVersusVoltage}} value='{{auxPowerVersusVoltage}}'{{/auxPowerVersusVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_capabilityVersusFrequency'>capabilityVersusFrequency: </label><div class='col-sm-8'><input id='{{id}}_capabilityVersusFrequency' class='form-control' type='text'{{#capabilityVersusFrequency}} value='{{capabilityVersusFrequency}}'{{/capabilityVersusFrequency}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_heatRecoveryFlag'>heatRecoveryFlag: </label><div class='col-sm-8'><input id='{{id}}_heatRecoveryFlag' class='form-check-input' type='checkbox'{{#heatRecoveryFlag}} checked{{/heatRecoveryFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_powerVariationByTemp'>powerVariationByTemp: </label><div class='col-sm-8'><input id='{{id}}_powerVariationByTemp' class='form-control' type='text'{{#powerVariationByTemp}} value='{{powerVariationByTemp}}'{{/powerVariationByTemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_referenceTemp'>referenceTemp: </label><div class='col-sm-8'><input id='{{id}}_referenceTemp' class='form-control' type='text'{{#referenceTemp}} value='{{referenceTemp}}'{{/referenceTemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeConstant'>timeConstant: </label><div class='col-sm-8'><input id='{{id}}_timeConstant' class='form-control' type='text'{{#timeConstant}} value='{{timeConstant}}'{{/timeConstant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AirCompressor'>AirCompressor: </label><div class='col-sm-8'><input id='{{id}}_AirCompressor' class='form-control' type='text'{{#AirCompressor}} value='{{AirCompressor}}'{{/AirCompressor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HeatRecoveryBoiler'>HeatRecoveryBoiler: </label><div class='col-sm-8'><input id='{{id}}_HeatRecoveryBoiler' class='form-control' type='text'{{#HeatRecoveryBoiler}} value='{{HeatRecoveryBoiler}}'{{/HeatRecoveryBoiler}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CTTempActivePowerCurve'>CTTempActivePowerCurve: </label><div class='col-sm-8'><input id='{{id}}_CTTempActivePowerCurve' class='form-control' type='text'{{#CTTempActivePowerCurve}} value='{{CTTempActivePowerCurve}}'{{/CTTempActivePowerCurve}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CombustionTurbine" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ambientTemp").value; if ("" != temp) obj.ambientTemp = temp;
                temp = document.getElementById (id + "_auxPowerVersusFrequency").value; if ("" != temp) obj.auxPowerVersusFrequency = temp;
                temp = document.getElementById (id + "_auxPowerVersusVoltage").value; if ("" != temp) obj.auxPowerVersusVoltage = temp;
                temp = document.getElementById (id + "_capabilityVersusFrequency").value; if ("" != temp) obj.capabilityVersusFrequency = temp;
                temp = document.getElementById (id + "_heatRecoveryFlag").checked; if (temp) obj.heatRecoveryFlag = true;
                temp = document.getElementById (id + "_powerVariationByTemp").value; if ("" != temp) obj.powerVariationByTemp = temp;
                temp = document.getElementById (id + "_referenceTemp").value; if ("" != temp) obj.referenceTemp = temp;
                temp = document.getElementById (id + "_timeConstant").value; if ("" != temp) obj.timeConstant = temp;
                temp = document.getElementById (id + "_AirCompressor").value; if ("" != temp) obj.AirCompressor = temp;
                temp = document.getElementById (id + "_HeatRecoveryBoiler").value; if ("" != temp) obj.HeatRecoveryBoiler = temp;
                temp = document.getElementById (id + "_CTTempActivePowerCurve").value; if ("" != temp) obj.CTTempActivePowerCurve = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AirCompressor", "0..1", "1", "AirCompressor", "CombustionTurbine"],
                            ["HeatRecoveryBoiler", "0..1", "0..*", "HeatRecoveryBoiler", "CombustionTurbines"],
                            ["CTTempActivePowerCurve", "0..1", "1", "CTTempActivePowerCurve", "CombustionTurbine"]
                        ]
                    )
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