define
(
    ["model/base", "model/Core"],
    /**
     * The production package is responsible for classes which describe various kinds of generators.
     *
     * These classes also provide production costing information which is used to economically allocate demand among committed units and calculate reserve quantities.
     *
     */
    function (base, Core)
    {

        /**
         * Specifies the capability of the hydro generating unit to convert energy as a generator or pump.
         *
         */
        var HydroEnergyConversionKind =
        {
            generator: "generator",
            pumpAndGenerator: "pumpAndGenerator"
        };
        Object.freeze (HydroEnergyConversionKind);

        /**
         * Kind of wind generating unit.
         *
         */
        var WindGenUnitKind =
        {
            offshore: "offshore",
            onshore: "onshore"
        };
        Object.freeze (WindGenUnitKind);

        /**
         * The type of hydro power plant.
         *
         */
        var HydroPlantStorageKind =
        {
            runOfRiver: "runOfRiver",
            pumpedStorage: "pumpedStorage",
            storage: "storage"
        };
        Object.freeze (HydroPlantStorageKind);

        /**
         * The source of controls for a generating unit.
         *
         */
        var GeneratorControlSource =
        {
            unavailable: "unavailable",
            offAGC: "offAGC",
            onAGC: "onAGC",
            plantControl: "plantControl"
        };
        Object.freeze (GeneratorControlSource);

        /**
         * The type of emission.
         *
         */
        var EmissionType =
        {
            sulfurDioxide: "sulfurDioxide",
            carbonDioxide: "carbonDioxide",
            nitrogenOxide: "nitrogenOxide",
            hydrogenSulfide: "hydrogenSulfide",
            chlorine: "chlorine",
            carbonDisulfide: "carbonDisulfide"
        };
        Object.freeze (EmissionType);

        /**
         * Type of fuel.
         *
         */
        var FuelType =
        {
            coal: "coal",
            oil: "oil",
            gas: "gas",
            lignite: "lignite",
            hardCoal: "hardCoal",
            oilShale: "oilShale"
        };
        Object.freeze (FuelType);

        /**
         * The source of the emission value.
         *
         */
        var EmissionValueSource =
        {
            measured: "measured",
            calculated: "calculated"
        };
        Object.freeze (EmissionValueSource);

        /**
         * Unit control modes.
         *
         */
        var GeneratorControlMode =
        {
            setpoint: "setpoint",
            pulse: "pulse"
        };
        Object.freeze (GeneratorControlMode);

        /**
         * Quantity of emission per fuel heat content.
         *
         */
        class Emission extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Emission;
                if (null == bucket)
                   cim_data.Emission = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Emission[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Emission";
                base.parse_element (/<cim:Emission.denominatorMultiplier>([\s\S]*?)<\/cim:Emission.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Emission.denominatorUnit>([\s\S]*?)<\/cim:Emission.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:Emission.multiplier>([\s\S]*?)<\/cim:Emission.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Emission.unit>([\s\S]*?)<\/cim:Emission.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Emission.value>([\s\S]*?)<\/cim:Emission.value>/g, obj, "value", base.to_float, sub, context);
                var bucket = context.parsed.Emission;
                if (null == bucket)
                   context.parsed.Emission = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Emission", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "Emission", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "Emission", "multiplier", base.from_string, fields);
                base.export_element (obj, "Emission", "unit", base.from_string, fields);
                base.export_element (obj, "Emission", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Emission_collapse" aria-expanded="true" aria-controls="Emission_collapse" style="margin-left: 10px;">Emission</a></legend>
                    <div id="Emission_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Emission_collapse" aria-expanded="true" aria-controls="Emission_collapse" style="margin-left: 10px;">Emission</a></legend>
                    <div id="Emission_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><input id='denominatorMultiplier' class='form-control' type='text'{{#denominatorMultiplier}} value='{{denominatorMultiplier}}'{{/denominatorMultiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><input id='denominatorUnit' class='form-control' type='text'{{#denominatorUnit}} value='{{denominatorUnit}}'{{/denominatorUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='multiplier'>multiplier: </label><div class='col-sm-8'><input id='multiplier' class='form-control' type='text'{{#multiplier}} value='{{multiplier}}'{{/multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unit'>unit: </label><div class='col-sm-8'><input id='unit' class='form-control' type='text'{{#unit}} value='{{unit}}'{{/unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * A synchronous motor-driven pump, typically associated with a pumped storage plant.
         *
         */
        class HydroPump extends Core.Equipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HydroPump;
                if (null == bucket)
                   cim_data.HydroPump = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HydroPump[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "HydroPump";
                base.parse_element (/<cim:HydroPump.pumpDischAtMaxHead>([\s\S]*?)<\/cim:HydroPump.pumpDischAtMaxHead>/g, obj, "pumpDischAtMaxHead", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPump.pumpDischAtMinHead>([\s\S]*?)<\/cim:HydroPump.pumpDischAtMinHead>/g, obj, "pumpDischAtMinHead", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPump.pumpPowerAtMaxHead>([\s\S]*?)<\/cim:HydroPump.pumpPowerAtMaxHead>/g, obj, "pumpPowerAtMaxHead", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPump.pumpPowerAtMinHead>([\s\S]*?)<\/cim:HydroPump.pumpPowerAtMinHead>/g, obj, "pumpPowerAtMinHead", base.to_string, sub, context);
                base.parse_attribute (/<cim:HydroPump.RotatingMachine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RotatingMachine", sub, context);
                base.parse_attribute (/<cim:HydroPump.HydroPumpOpSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPumpOpSchedule", sub, context);
                base.parse_attribute (/<cim:HydroPump.HydroPowerPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPowerPlant", sub, context);
                var bucket = context.parsed.HydroPump;
                if (null == bucket)
                   context.parsed.HydroPump = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Equipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "HydroPump", "pumpDischAtMaxHead", base.from_string, fields);
                base.export_element (obj, "HydroPump", "pumpDischAtMinHead", base.from_string, fields);
                base.export_element (obj, "HydroPump", "pumpPowerAtMaxHead", base.from_string, fields);
                base.export_element (obj, "HydroPump", "pumpPowerAtMinHead", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "HydroPump", fields);
                base.export_attribute (obj, "export_attribute", "HydroPump", fields);
                base.export_attribute (obj, "export_attribute", "HydroPump", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HydroPump_collapse" aria-expanded="true" aria-controls="HydroPump_collapse" style="margin-left: 10px;">HydroPump</a></legend>
                    <div id="HydroPump_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.template.call (this) +
                    `
                    {{#pumpDischAtMaxHead}}<div><b>pumpDischAtMaxHead</b>: {{pumpDischAtMaxHead}}</div>{{/pumpDischAtMaxHead}}
                    {{#pumpDischAtMinHead}}<div><b>pumpDischAtMinHead</b>: {{pumpDischAtMinHead}}</div>{{/pumpDischAtMinHead}}
                    {{#pumpPowerAtMaxHead}}<div><b>pumpPowerAtMaxHead</b>: {{pumpPowerAtMaxHead}}</div>{{/pumpPowerAtMaxHead}}
                    {{#pumpPowerAtMinHead}}<div><b>pumpPowerAtMinHead</b>: {{pumpPowerAtMinHead}}</div>{{/pumpPowerAtMinHead}}
                    {{#RotatingMachine}}<div><b>RotatingMachine</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RotatingMachine}}&quot;);})'>{{RotatingMachine}}</a></div>{{/RotatingMachine}}
                    {{#HydroPumpOpSchedule}}<div><b>HydroPumpOpSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroPumpOpSchedule}}&quot;);})'>{{HydroPumpOpSchedule}}</a></div>{{/HydroPumpOpSchedule}}
                    {{#HydroPowerPlant}}<div><b>HydroPowerPlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroPowerPlant}}&quot;);})'>{{HydroPowerPlant}}</a></div>{{/HydroPowerPlant}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HydroPump_collapse" aria-expanded="true" aria-controls="HydroPump_collapse" style="margin-left: 10px;">HydroPump</a></legend>
                    <div id="HydroPump_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpDischAtMaxHead'>pumpDischAtMaxHead: </label><div class='col-sm-8'><input id='pumpDischAtMaxHead' class='form-control' type='text'{{#pumpDischAtMaxHead}} value='{{pumpDischAtMaxHead}}'{{/pumpDischAtMaxHead}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpDischAtMinHead'>pumpDischAtMinHead: </label><div class='col-sm-8'><input id='pumpDischAtMinHead' class='form-control' type='text'{{#pumpDischAtMinHead}} value='{{pumpDischAtMinHead}}'{{/pumpDischAtMinHead}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpPowerAtMaxHead'>pumpPowerAtMaxHead: </label><div class='col-sm-8'><input id='pumpPowerAtMaxHead' class='form-control' type='text'{{#pumpPowerAtMaxHead}} value='{{pumpPowerAtMaxHead}}'{{/pumpPowerAtMaxHead}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpPowerAtMinHead'>pumpPowerAtMinHead: </label><div class='col-sm-8'><input id='pumpPowerAtMinHead' class='form-control' type='text'{{#pumpPowerAtMinHead}} value='{{pumpPowerAtMinHead}}'{{/pumpPowerAtMinHead}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RotatingMachine'>RotatingMachine: </label><div class='col-sm-8'><input id='RotatingMachine' class='form-control' type='text'{{#RotatingMachine}} value='{{RotatingMachine}}'{{/RotatingMachine}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HydroPumpOpSchedule'>HydroPumpOpSchedule: </label><div class='col-sm-8'><input id='HydroPumpOpSchedule' class='form-control' type='text'{{#HydroPumpOpSchedule}} value='{{HydroPumpOpSchedule}}'{{/HydroPumpOpSchedule}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HydroPowerPlant'>HydroPowerPlant: </label><div class='col-sm-8'><input id='HydroPowerPlant' class='form-control' type='text'{{#HydroPowerPlant}} value='{{HydroPowerPlant}}'{{/HydroPowerPlant}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["RotatingMachine", "RotatingMachine", "1", "0..1"],
                        ["HydroPumpOpSchedule", "HydroPumpOpSchedule", "0..1", "1"],
                        ["HydroPowerPlant", "HydroPowerPlant", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Relationship between penstock head loss (in meters) and  total discharge through the penstock (in cubic meters per second).
         *
         * One or more turbines may be connected to the same penstock.
         *
         */
        class PenstockLossCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PenstockLossCurve;
                if (null == bucket)
                   cim_data.PenstockLossCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PenstockLossCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "PenstockLossCurve";
                base.parse_attribute (/<cim:PenstockLossCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnit", sub, context);
                var bucket = context.parsed.PenstockLossCurve;
                if (null == bucket)
                   context.parsed.PenstockLossCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "PenstockLossCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PenstockLossCurve_collapse" aria-expanded="true" aria-controls="PenstockLossCurve_collapse" style="margin-left: 10px;">PenstockLossCurve</a></legend>
                    <div id="PenstockLossCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#HydroGeneratingUnit}}<div><b>HydroGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroGeneratingUnit}}&quot;);})'>{{HydroGeneratingUnit}}</a></div>{{/HydroGeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PenstockLossCurve_collapse" aria-expanded="true" aria-controls="PenstockLossCurve_collapse" style="margin-left: 10px;">PenstockLossCurve</a></legend>
                    <div id="PenstockLossCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HydroGeneratingUnit'>HydroGeneratingUnit: </label><div class='col-sm-8'><input id='HydroGeneratingUnit' class='form-control' type='text'{{#HydroGeneratingUnit}} value='{{HydroGeneratingUnit}}'{{/HydroGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["HydroGeneratingUnit", "HydroGeneratingUnit", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * A set of thermal generating units for the production of electrical energy and process steam (usually from the output of the steam turbines).
         *
         * The steam sendout is typically used for industrial purposes or for municipal heating and cooling.
         *
         */
        class CogenerationPlant extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CogenerationPlant;
                if (null == bucket)
                   cim_data.CogenerationPlant = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CogenerationPlant[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "CogenerationPlant";
                base.parse_element (/<cim:CogenerationPlant.cogenHPSendoutRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenHPSendoutRating>/g, obj, "cogenHPSendoutRating", base.to_float, sub, context);
                base.parse_element (/<cim:CogenerationPlant.cogenHPSteamRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenHPSteamRating>/g, obj, "cogenHPSteamRating", base.to_float, sub, context);
                base.parse_element (/<cim:CogenerationPlant.cogenLPSendoutRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenLPSendoutRating>/g, obj, "cogenLPSendoutRating", base.to_float, sub, context);
                base.parse_element (/<cim:CogenerationPlant.cogenLPSteamRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenLPSteamRating>/g, obj, "cogenLPSteamRating", base.to_float, sub, context);
                base.parse_element (/<cim:CogenerationPlant.ratedP>([\s\S]*?)<\/cim:CogenerationPlant.ratedP>/g, obj, "ratedP", base.to_string, sub, context);
                base.parse_attributes (/<cim:CogenerationPlant.ThermalGeneratingUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnits", sub, context);
                base.parse_attribute (/<cim:CogenerationPlant.SteamSendoutSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SteamSendoutSchedule", sub, context);
                var bucket = context.parsed.CogenerationPlant;
                if (null == bucket)
                   context.parsed.CogenerationPlant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "CogenerationPlant", "cogenHPSendoutRating", base.from_float, fields);
                base.export_element (obj, "CogenerationPlant", "cogenHPSteamRating", base.from_float, fields);
                base.export_element (obj, "CogenerationPlant", "cogenLPSendoutRating", base.from_float, fields);
                base.export_element (obj, "CogenerationPlant", "cogenLPSteamRating", base.from_float, fields);
                base.export_element (obj, "CogenerationPlant", "ratedP", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "CogenerationPlant", fields);
                base.export_attribute (obj, "export_attribute", "CogenerationPlant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CogenerationPlant_collapse" aria-expanded="true" aria-controls="CogenerationPlant_collapse" style="margin-left: 10px;">CogenerationPlant</a></legend>
                    <div id="CogenerationPlant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#cogenHPSendoutRating}}<div><b>cogenHPSendoutRating</b>: {{cogenHPSendoutRating}}</div>{{/cogenHPSendoutRating}}
                    {{#cogenHPSteamRating}}<div><b>cogenHPSteamRating</b>: {{cogenHPSteamRating}}</div>{{/cogenHPSteamRating}}
                    {{#cogenLPSendoutRating}}<div><b>cogenLPSendoutRating</b>: {{cogenLPSendoutRating}}</div>{{/cogenLPSendoutRating}}
                    {{#cogenLPSteamRating}}<div><b>cogenLPSteamRating</b>: {{cogenLPSteamRating}}</div>{{/cogenLPSteamRating}}
                    {{#ratedP}}<div><b>ratedP</b>: {{ratedP}}</div>{{/ratedP}}
                    {{#ThermalGeneratingUnits}}<div><b>ThermalGeneratingUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ThermalGeneratingUnits}}
                    {{#SteamSendoutSchedule}}<div><b>SteamSendoutSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SteamSendoutSchedule}}&quot;);})'>{{SteamSendoutSchedule}}</a></div>{{/SteamSendoutSchedule}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ThermalGeneratingUnits) obj.ThermalGeneratingUnits_string = obj.ThermalGeneratingUnits.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ThermalGeneratingUnits_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CogenerationPlant_collapse" aria-expanded="true" aria-controls="CogenerationPlant_collapse" style="margin-left: 10px;">CogenerationPlant</a></legend>
                    <div id="CogenerationPlant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cogenHPSendoutRating'>cogenHPSendoutRating: </label><div class='col-sm-8'><input id='cogenHPSendoutRating' class='form-control' type='text'{{#cogenHPSendoutRating}} value='{{cogenHPSendoutRating}}'{{/cogenHPSendoutRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cogenHPSteamRating'>cogenHPSteamRating: </label><div class='col-sm-8'><input id='cogenHPSteamRating' class='form-control' type='text'{{#cogenHPSteamRating}} value='{{cogenHPSteamRating}}'{{/cogenHPSteamRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cogenLPSendoutRating'>cogenLPSendoutRating: </label><div class='col-sm-8'><input id='cogenLPSendoutRating' class='form-control' type='text'{{#cogenLPSendoutRating}} value='{{cogenLPSendoutRating}}'{{/cogenLPSendoutRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cogenLPSteamRating'>cogenLPSteamRating: </label><div class='col-sm-8'><input id='cogenLPSteamRating' class='form-control' type='text'{{#cogenLPSteamRating}} value='{{cogenLPSteamRating}}'{{/cogenLPSteamRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedP'>ratedP: </label><div class='col-sm-8'><input id='ratedP' class='form-control' type='text'{{#ratedP}} value='{{ratedP}}'{{/ratedP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SteamSendoutSchedule'>SteamSendoutSchedule: </label><div class='col-sm-8'><input id='SteamSendoutSchedule' class='form-control' type='text'{{#SteamSendoutSchedule}} value='{{SteamSendoutSchedule}}'{{/SteamSendoutSchedule}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ThermalGeneratingUnits", "ThermalGeneratingUnit", "0..*", "0..1"],
                        ["SteamSendoutSchedule", "SteamSendoutSchedule", "1", "1"]
                    ]
                );
            }
        }

        /**
         * Relationship between unit incremental heat rate in (delta energy/time) per (delta active power) and unit output in active power.
         *
         * The IHR curve represents the slope of the HeatInputCurve. Note that the "incremental heat rate" and the "heat rate" have the same engineering units.
         *
         */
        class IncrementalHeatRateCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IncrementalHeatRateCurve;
                if (null == bucket)
                   cim_data.IncrementalHeatRateCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IncrementalHeatRateCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "IncrementalHeatRateCurve";
                base.parse_element (/<cim:IncrementalHeatRateCurve.isNetGrossP>([\s\S]*?)<\/cim:IncrementalHeatRateCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:IncrementalHeatRateCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                var bucket = context.parsed.IncrementalHeatRateCurve;
                if (null == bucket)
                   context.parsed.IncrementalHeatRateCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "IncrementalHeatRateCurve", "isNetGrossP", base.from_boolean, fields);
                base.export_attribute (obj, "export_attribute", "IncrementalHeatRateCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IncrementalHeatRateCurve_collapse" aria-expanded="true" aria-controls="IncrementalHeatRateCurve_collapse" style="margin-left: 10px;">IncrementalHeatRateCurve</a></legend>
                    <div id="IncrementalHeatRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IncrementalHeatRateCurve_collapse" aria-expanded="true" aria-controls="IncrementalHeatRateCurve_collapse" style="margin-left: 10px;">IncrementalHeatRateCurve</a></legend>
                    <div id="IncrementalHeatRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isNetGrossP'>isNetGrossP: </label><div class='col-sm-8'><input id='isNetGrossP' class='form-check-input' type='checkbox'{{#isNetGrossP}} checked{{/isNetGrossP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ThermalGeneratingUnit", "ThermalGeneratingUnit", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * A water storage facility within a hydro system, including: ponds, lakes, lagoons, and rivers.
         *
         * The storage is usually behind some type of dam.
         *
         */
        class Reservoir extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Reservoir;
                if (null == bucket)
                   cim_data.Reservoir = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Reservoir[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "Reservoir";
                base.parse_element (/<cim:Reservoir.activeStorageCapacity>([\s\S]*?)<\/cim:Reservoir.activeStorageCapacity>/g, obj, "activeStorageCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:Reservoir.energyStorageRating>([\s\S]*?)<\/cim:Reservoir.energyStorageRating>/g, obj, "energyStorageRating", base.to_float, sub, context);
                base.parse_element (/<cim:Reservoir.fullSupplyLevel>([\s\S]*?)<\/cim:Reservoir.fullSupplyLevel>/g, obj, "fullSupplyLevel", base.to_string, sub, context);
                base.parse_element (/<cim:Reservoir.grossCapacity>([\s\S]*?)<\/cim:Reservoir.grossCapacity>/g, obj, "grossCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:Reservoir.normalMinOperateLevel>([\s\S]*?)<\/cim:Reservoir.normalMinOperateLevel>/g, obj, "normalMinOperateLevel", base.to_string, sub, context);
                base.parse_element (/<cim:Reservoir.riverOutletWorks>([\s\S]*?)<\/cim:Reservoir.riverOutletWorks>/g, obj, "riverOutletWorks", base.to_string, sub, context);
                base.parse_element (/<cim:Reservoir.spillTravelDelay>([\s\S]*?)<\/cim:Reservoir.spillTravelDelay>/g, obj, "spillTravelDelay", base.to_string, sub, context);
                base.parse_element (/<cim:Reservoir.spillwayCapacity>([\s\S]*?)<\/cim:Reservoir.spillwayCapacity>/g, obj, "spillwayCapacity", base.to_float, sub, context);
                base.parse_element (/<cim:Reservoir.spillwayCrestLength>([\s\S]*?)<\/cim:Reservoir.spillwayCrestLength>/g, obj, "spillwayCrestLength", base.to_string, sub, context);
                base.parse_element (/<cim:Reservoir.spillwayCrestLevel>([\s\S]*?)<\/cim:Reservoir.spillwayCrestLevel>/g, obj, "spillwayCrestLevel", base.to_string, sub, context);
                base.parse_element (/<cim:Reservoir.spillWayGateType>([\s\S]*?)<\/cim:Reservoir.spillWayGateType>/g, obj, "spillWayGateType", base.to_string, sub, context);
                base.parse_attribute (/<cim:Reservoir.TargetLevelSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TargetLevelSchedule", sub, context);
                base.parse_attributes (/<cim:Reservoir.LevelVsVolumeCurves\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LevelVsVolumeCurves", sub, context);
                base.parse_attributes (/<cim:Reservoir.SpillsIntoReservoirs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SpillsIntoReservoirs", sub, context);
                base.parse_attribute (/<cim:Reservoir.SpillsFromReservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SpillsFromReservoir", sub, context);
                base.parse_attributes (/<cim:Reservoir.HydroPowerPlants\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPowerPlants", sub, context);
                base.parse_attributes (/<cim:Reservoir.UpstreamFromHydroPowerPlants\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UpstreamFromHydroPowerPlants", sub, context);
                base.parse_attributes (/<cim:Reservoir.InflowForecasts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InflowForecasts", sub, context);
                var bucket = context.parsed.Reservoir;
                if (null == bucket)
                   context.parsed.Reservoir = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "Reservoir", "activeStorageCapacity", base.from_string, fields);
                base.export_element (obj, "Reservoir", "energyStorageRating", base.from_float, fields);
                base.export_element (obj, "Reservoir", "fullSupplyLevel", base.from_string, fields);
                base.export_element (obj, "Reservoir", "grossCapacity", base.from_string, fields);
                base.export_element (obj, "Reservoir", "normalMinOperateLevel", base.from_string, fields);
                base.export_element (obj, "Reservoir", "riverOutletWorks", base.from_string, fields);
                base.export_element (obj, "Reservoir", "spillTravelDelay", base.from_string, fields);
                base.export_element (obj, "Reservoir", "spillwayCapacity", base.from_float, fields);
                base.export_element (obj, "Reservoir", "spillwayCrestLength", base.from_string, fields);
                base.export_element (obj, "Reservoir", "spillwayCrestLevel", base.from_string, fields);
                base.export_element (obj, "Reservoir", "spillWayGateType", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "Reservoir", fields);
                base.export_attribute (obj, "export_attributes", "Reservoir", fields);
                base.export_attribute (obj, "export_attributes", "Reservoir", fields);
                base.export_attribute (obj, "export_attribute", "Reservoir", fields);
                base.export_attribute (obj, "export_attributes", "Reservoir", fields);
                base.export_attribute (obj, "export_attributes", "Reservoir", fields);
                base.export_attribute (obj, "export_attributes", "Reservoir", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Reservoir_collapse" aria-expanded="true" aria-controls="Reservoir_collapse" style="margin-left: 10px;">Reservoir</a></legend>
                    <div id="Reservoir_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#activeStorageCapacity}}<div><b>activeStorageCapacity</b>: {{activeStorageCapacity}}</div>{{/activeStorageCapacity}}
                    {{#energyStorageRating}}<div><b>energyStorageRating</b>: {{energyStorageRating}}</div>{{/energyStorageRating}}
                    {{#fullSupplyLevel}}<div><b>fullSupplyLevel</b>: {{fullSupplyLevel}}</div>{{/fullSupplyLevel}}
                    {{#grossCapacity}}<div><b>grossCapacity</b>: {{grossCapacity}}</div>{{/grossCapacity}}
                    {{#normalMinOperateLevel}}<div><b>normalMinOperateLevel</b>: {{normalMinOperateLevel}}</div>{{/normalMinOperateLevel}}
                    {{#riverOutletWorks}}<div><b>riverOutletWorks</b>: {{riverOutletWorks}}</div>{{/riverOutletWorks}}
                    {{#spillTravelDelay}}<div><b>spillTravelDelay</b>: {{spillTravelDelay}}</div>{{/spillTravelDelay}}
                    {{#spillwayCapacity}}<div><b>spillwayCapacity</b>: {{spillwayCapacity}}</div>{{/spillwayCapacity}}
                    {{#spillwayCrestLength}}<div><b>spillwayCrestLength</b>: {{spillwayCrestLength}}</div>{{/spillwayCrestLength}}
                    {{#spillwayCrestLevel}}<div><b>spillwayCrestLevel</b>: {{spillwayCrestLevel}}</div>{{/spillwayCrestLevel}}
                    {{#spillWayGateType}}<div><b>spillWayGateType</b>: {{spillWayGateType}}</div>{{/spillWayGateType}}
                    {{#TargetLevelSchedule}}<div><b>TargetLevelSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TargetLevelSchedule}}&quot;);})'>{{TargetLevelSchedule}}</a></div>{{/TargetLevelSchedule}}
                    {{#LevelVsVolumeCurves}}<div><b>LevelVsVolumeCurves</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LevelVsVolumeCurves}}
                    {{#SpillsIntoReservoirs}}<div><b>SpillsIntoReservoirs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SpillsIntoReservoirs}}
                    {{#SpillsFromReservoir}}<div><b>SpillsFromReservoir</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SpillsFromReservoir}}&quot;);})'>{{SpillsFromReservoir}}</a></div>{{/SpillsFromReservoir}}
                    {{#HydroPowerPlants}}<div><b>HydroPowerPlants</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/HydroPowerPlants}}
                    {{#UpstreamFromHydroPowerPlants}}<div><b>UpstreamFromHydroPowerPlants</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/UpstreamFromHydroPowerPlants}}
                    {{#InflowForecasts}}<div><b>InflowForecasts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/InflowForecasts}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.LevelVsVolumeCurves) obj.LevelVsVolumeCurves_string = obj.LevelVsVolumeCurves.join ();
                if (obj.SpillsIntoReservoirs) obj.SpillsIntoReservoirs_string = obj.SpillsIntoReservoirs.join ();
                if (obj.HydroPowerPlants) obj.HydroPowerPlants_string = obj.HydroPowerPlants.join ();
                if (obj.UpstreamFromHydroPowerPlants) obj.UpstreamFromHydroPowerPlants_string = obj.UpstreamFromHydroPowerPlants.join ();
                if (obj.InflowForecasts) obj.InflowForecasts_string = obj.InflowForecasts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.LevelVsVolumeCurves_string;
                delete obj.SpillsIntoReservoirs_string;
                delete obj.HydroPowerPlants_string;
                delete obj.UpstreamFromHydroPowerPlants_string;
                delete obj.InflowForecasts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Reservoir_collapse" aria-expanded="true" aria-controls="Reservoir_collapse" style="margin-left: 10px;">Reservoir</a></legend>
                    <div id="Reservoir_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='activeStorageCapacity'>activeStorageCapacity: </label><div class='col-sm-8'><input id='activeStorageCapacity' class='form-control' type='text'{{#activeStorageCapacity}} value='{{activeStorageCapacity}}'{{/activeStorageCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyStorageRating'>energyStorageRating: </label><div class='col-sm-8'><input id='energyStorageRating' class='form-control' type='text'{{#energyStorageRating}} value='{{energyStorageRating}}'{{/energyStorageRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fullSupplyLevel'>fullSupplyLevel: </label><div class='col-sm-8'><input id='fullSupplyLevel' class='form-control' type='text'{{#fullSupplyLevel}} value='{{fullSupplyLevel}}'{{/fullSupplyLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='grossCapacity'>grossCapacity: </label><div class='col-sm-8'><input id='grossCapacity' class='form-control' type='text'{{#grossCapacity}} value='{{grossCapacity}}'{{/grossCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='normalMinOperateLevel'>normalMinOperateLevel: </label><div class='col-sm-8'><input id='normalMinOperateLevel' class='form-control' type='text'{{#normalMinOperateLevel}} value='{{normalMinOperateLevel}}'{{/normalMinOperateLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='riverOutletWorks'>riverOutletWorks: </label><div class='col-sm-8'><input id='riverOutletWorks' class='form-control' type='text'{{#riverOutletWorks}} value='{{riverOutletWorks}}'{{/riverOutletWorks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='spillTravelDelay'>spillTravelDelay: </label><div class='col-sm-8'><input id='spillTravelDelay' class='form-control' type='text'{{#spillTravelDelay}} value='{{spillTravelDelay}}'{{/spillTravelDelay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='spillwayCapacity'>spillwayCapacity: </label><div class='col-sm-8'><input id='spillwayCapacity' class='form-control' type='text'{{#spillwayCapacity}} value='{{spillwayCapacity}}'{{/spillwayCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='spillwayCrestLength'>spillwayCrestLength: </label><div class='col-sm-8'><input id='spillwayCrestLength' class='form-control' type='text'{{#spillwayCrestLength}} value='{{spillwayCrestLength}}'{{/spillwayCrestLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='spillwayCrestLevel'>spillwayCrestLevel: </label><div class='col-sm-8'><input id='spillwayCrestLevel' class='form-control' type='text'{{#spillwayCrestLevel}} value='{{spillwayCrestLevel}}'{{/spillwayCrestLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='spillWayGateType'>spillWayGateType: </label><div class='col-sm-8'><input id='spillWayGateType' class='form-control' type='text'{{#spillWayGateType}} value='{{spillWayGateType}}'{{/spillWayGateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TargetLevelSchedule'>TargetLevelSchedule: </label><div class='col-sm-8'><input id='TargetLevelSchedule' class='form-control' type='text'{{#TargetLevelSchedule}} value='{{TargetLevelSchedule}}'{{/TargetLevelSchedule}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SpillsFromReservoir'>SpillsFromReservoir: </label><div class='col-sm-8'><input id='SpillsFromReservoir' class='form-control' type='text'{{#SpillsFromReservoir}} value='{{SpillsFromReservoir}}'{{/SpillsFromReservoir}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["TargetLevelSchedule", "TargetLevelSchedule", "0..1", "1"],
                        ["LevelVsVolumeCurves", "LevelVsVolumeCurve", "0..*", "1"],
                        ["SpillsIntoReservoirs", "Reservoir", "0..*", "0..1"],
                        ["SpillsFromReservoir", "Reservoir", "0..1", "0..*"],
                        ["HydroPowerPlants", "HydroPowerPlant", "0..*", "0..1"],
                        ["UpstreamFromHydroPowerPlants", "HydroPowerPlant", "0..*", "1"],
                        ["InflowForecasts", "InflowForecast", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * Classification of level.
         *
         * Specify as 1..n, with 1 being the most detailed, highest priority, etc as described on the attribue using this data type.
         *
         */
        class Classification extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Classification;
                if (null == bucket)
                   cim_data.Classification = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Classification[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Classification";
                base.parse_element (/<cim:Classification.multiplier>([\s\S]*?)<\/cim:Classification.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Classification.unit>([\s\S]*?)<\/cim:Classification.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Classification.value>([\s\S]*?)<\/cim:Classification.value>/g, obj, "value", base.to_string, sub, context);
                var bucket = context.parsed.Classification;
                if (null == bucket)
                   context.parsed.Classification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Classification", "multiplier", base.from_string, fields);
                base.export_element (obj, "Classification", "unit", base.from_string, fields);
                base.export_element (obj, "Classification", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Classification_collapse" aria-expanded="true" aria-controls="Classification_collapse" style="margin-left: 10px;">Classification</a></legend>
                    <div id="Classification_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Classification_collapse" aria-expanded="true" aria-controls="Classification_collapse" style="margin-left: 10px;">Classification</a></legend>
                    <div id="Classification_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='multiplier'>multiplier: </label><div class='col-sm-8'><input id='multiplier' class='form-control' type='text'{{#multiplier}} value='{{multiplier}}'{{/multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unit'>unit: </label><div class='col-sm-8'><input id='unit' class='form-control' type='text'{{#unit}} value='{{unit}}'{{/unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * The quantity of ignition fuel (Y-axis) used to restart and repay the auxiliary power consumed versus the number of hours (X-axis) the unit was off line.
         *
         */
        class StartIgnFuelCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StartIgnFuelCurve;
                if (null == bucket)
                   cim_data.StartIgnFuelCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StartIgnFuelCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartIgnFuelCurve";
                base.parse_attribute (/<cim:StartIgnFuelCurve.ignitionFuelType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ignitionFuelType", sub, context);
                base.parse_attribute (/<cim:StartIgnFuelCurve.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
                var bucket = context.parsed.StartIgnFuelCurve;
                if (null == bucket)
                   context.parsed.StartIgnFuelCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "StartIgnFuelCurve", "ignitionFuelType", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "StartIgnFuelCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartIgnFuelCurve_collapse" aria-expanded="true" aria-controls="StartIgnFuelCurve_collapse" style="margin-left: 10px;">StartIgnFuelCurve</a></legend>
                    <div id="StartIgnFuelCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#ignitionFuelType}}<div><b>ignitionFuelType</b>: {{ignitionFuelType}}</div>{{/ignitionFuelType}}
                    {{#StartupModel}}<div><b>StartupModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartupModel}}&quot;);})'>{{StartupModel}}</a></div>{{/StartupModel}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.FuelType = []; if (!obj.ignitionFuelType) obj.FuelType.push ({ id: '', selected: true}); for (var property in FuelType) obj.FuelType.push ({ id: property, selected: obj.ignitionFuelType && obj.ignitionFuelType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.FuelType;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartIgnFuelCurve_collapse" aria-expanded="true" aria-controls="StartIgnFuelCurve_collapse" style="margin-left: 10px;">StartIgnFuelCurve</a></legend>
                    <div id="StartIgnFuelCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ignitionFuelType'>ignitionFuelType: </label><div class='col-sm-8'><select id='ignitionFuelType' class='form-control'>{{#FuelType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/FuelType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StartupModel'>StartupModel: </label><div class='col-sm-8'><input id='StartupModel' class='form-control' type='text'{{#StartupModel}} value='{{StartupModel}}'{{/StartupModel}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["StartupModel", "StartupModel", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Relationship between reservoir volume and reservoir level.
         *
         * The  volume is at the y-axis and the reservoir level at the x-axis.
         *
         */
        class LevelVsVolumeCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LevelVsVolumeCurve;
                if (null == bucket)
                   cim_data.LevelVsVolumeCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LevelVsVolumeCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "LevelVsVolumeCurve";
                base.parse_attribute (/<cim:LevelVsVolumeCurve.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
                var bucket = context.parsed.LevelVsVolumeCurve;
                if (null == bucket)
                   context.parsed.LevelVsVolumeCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "LevelVsVolumeCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LevelVsVolumeCurve_collapse" aria-expanded="true" aria-controls="LevelVsVolumeCurve_collapse" style="margin-left: 10px;">LevelVsVolumeCurve</a></legend>
                    <div id="LevelVsVolumeCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#Reservoir}}<div><b>Reservoir</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Reservoir}}&quot;);})'>{{Reservoir}}</a></div>{{/Reservoir}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LevelVsVolumeCurve_collapse" aria-expanded="true" aria-controls="LevelVsVolumeCurve_collapse" style="margin-left: 10px;">LevelVsVolumeCurve</a></legend>
                    <div id="LevelVsVolumeCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Reservoir'>Reservoir: </label><div class='col-sm-8'><input id='Reservoir' class='form-control' type='text'{{#Reservoir}} value='{{Reservoir}}'{{/Reservoir}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Reservoir", "Reservoir", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Relationship between the generating unit's gross active power output on the X-axis (measured at the terminals of the machine(s)) and the generating unit's net active power output on the Y-axis (based on utility-defined measurements at the power station).
         *
         * Station service loads, when modeled, should be treated as non-conforming bus loads. There may be more than one curve, depending on the auxiliary equipment that is in service.
         *
         */
        class GrossToNetActivePowerCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GrossToNetActivePowerCurve;
                if (null == bucket)
                   cim_data.GrossToNetActivePowerCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GrossToNetActivePowerCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "GrossToNetActivePowerCurve";
                base.parse_attribute (/<cim:GrossToNetActivePowerCurve.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
                var bucket = context.parsed.GrossToNetActivePowerCurve;
                if (null == bucket)
                   context.parsed.GrossToNetActivePowerCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "GrossToNetActivePowerCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GrossToNetActivePowerCurve_collapse" aria-expanded="true" aria-controls="GrossToNetActivePowerCurve_collapse" style="margin-left: 10px;">GrossToNetActivePowerCurve</a></legend>
                    <div id="GrossToNetActivePowerCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingUnit}}&quot;);})'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GrossToNetActivePowerCurve_collapse" aria-expanded="true" aria-controls="GrossToNetActivePowerCurve_collapse" style="margin-left: 10px;">GrossToNetActivePowerCurve</a></legend>
                    <div id="GrossToNetActivePowerCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GeneratingUnit'>GeneratingUnit: </label><div class='col-sm-8'><input id='GeneratingUnit' class='form-control' type='text'{{#GeneratingUnit}} value='{{GeneratingUnit}}'{{/GeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["GeneratingUnit", "GeneratingUnit", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Combustion turbine air compressor which is an integral part of a compressed air energy storage (CAES) plant.
         *
         */
        class AirCompressor extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AirCompressor;
                if (null == bucket)
                   cim_data.AirCompressor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AirCompressor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "AirCompressor";
                base.parse_element (/<cim:AirCompressor.airCompressorRating>([\s\S]*?)<\/cim:AirCompressor.airCompressorRating>/g, obj, "airCompressorRating", base.to_float, sub, context);
                base.parse_attribute (/<cim:AirCompressor.CombustionTurbine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CombustionTurbine", sub, context);
                base.parse_attribute (/<cim:AirCompressor.CAESPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CAESPlant", sub, context);
                var bucket = context.parsed.AirCompressor;
                if (null == bucket)
                   context.parsed.AirCompressor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "AirCompressor", "airCompressorRating", base.from_float, fields);
                base.export_attribute (obj, "export_attribute", "AirCompressor", fields);
                base.export_attribute (obj, "export_attribute", "AirCompressor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AirCompressor_collapse" aria-expanded="true" aria-controls="AirCompressor_collapse" style="margin-left: 10px;">AirCompressor</a></legend>
                    <div id="AirCompressor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#airCompressorRating}}<div><b>airCompressorRating</b>: {{airCompressorRating}}</div>{{/airCompressorRating}}
                    {{#CombustionTurbine}}<div><b>CombustionTurbine</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CombustionTurbine}}&quot;);})'>{{CombustionTurbine}}</a></div>{{/CombustionTurbine}}
                    {{#CAESPlant}}<div><b>CAESPlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CAESPlant}}&quot;);})'>{{CAESPlant}}</a></div>{{/CAESPlant}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AirCompressor_collapse" aria-expanded="true" aria-controls="AirCompressor_collapse" style="margin-left: 10px;">AirCompressor</a></legend>
                    <div id="AirCompressor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='airCompressorRating'>airCompressorRating: </label><div class='col-sm-8'><input id='airCompressorRating' class='form-control' type='text'{{#airCompressorRating}} value='{{airCompressorRating}}'{{/airCompressorRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CombustionTurbine'>CombustionTurbine: </label><div class='col-sm-8'><input id='CombustionTurbine' class='form-control' type='text'{{#CombustionTurbine}} value='{{CombustionTurbine}}'{{/CombustionTurbine}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CAESPlant'>CAESPlant: </label><div class='col-sm-8'><input id='CAESPlant' class='form-control' type='text'{{#CAESPlant}} value='{{CAESPlant}}'{{/CAESPlant}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["CombustionTurbine", "CombustionTurbine", "1", "0..1"],
                        ["CAESPlant", "CAESPlant", "1", "1"]
                    ]
                );
            }
        }

        /**
         * Heat generated, in energy pertime unit of elapsed time.
         *
         */
        class HeatRate extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HeatRate;
                if (null == bucket)
                   cim_data.HeatRate = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HeatRate[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "HeatRate";
                base.parse_element (/<cim:HeatRate.denominatorMultiplier>([\s\S]*?)<\/cim:HeatRate.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:HeatRate.denominatorUnit>([\s\S]*?)<\/cim:HeatRate.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:HeatRate.multiplier>([\s\S]*?)<\/cim:HeatRate.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:HeatRate.unit>([\s\S]*?)<\/cim:HeatRate.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:HeatRate.value>([\s\S]*?)<\/cim:HeatRate.value>/g, obj, "value", base.to_float, sub, context);
                var bucket = context.parsed.HeatRate;
                if (null == bucket)
                   context.parsed.HeatRate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "HeatRate", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "HeatRate", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "HeatRate", "multiplier", base.from_string, fields);
                base.export_element (obj, "HeatRate", "unit", base.from_string, fields);
                base.export_element (obj, "HeatRate", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HeatRate_collapse" aria-expanded="true" aria-controls="HeatRate_collapse" style="margin-left: 10px;">HeatRate</a></legend>
                    <div id="HeatRate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HeatRate_collapse" aria-expanded="true" aria-controls="HeatRate_collapse" style="margin-left: 10px;">HeatRate</a></legend>
                    <div id="HeatRate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><input id='denominatorMultiplier' class='form-control' type='text'{{#denominatorMultiplier}} value='{{denominatorMultiplier}}'{{/denominatorMultiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><input id='denominatorUnit' class='form-control' type='text'{{#denominatorUnit}} value='{{denominatorUnit}}'{{/denominatorUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='multiplier'>multiplier: </label><div class='col-sm-8'><input id='multiplier' class='form-control' type='text'{{#multiplier}} value='{{multiplier}}'{{/multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unit'>unit: </label><div class='col-sm-8'><input id='unit' class='form-control' type='text'{{#unit}} value='{{unit}}'{{/unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * The amount of fuel of a given type which is allocated for consumption over a specified period of time.
         *
         */
        class FuelAllocationSchedule extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FuelAllocationSchedule;
                if (null == bucket)
                   cim_data.FuelAllocationSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FuelAllocationSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "FuelAllocationSchedule";
                base.parse_element (/<cim:FuelAllocationSchedule.fuelAllocationEndDate>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelAllocationEndDate>/g, obj, "fuelAllocationEndDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:FuelAllocationSchedule.fuelAllocationStartDate>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelAllocationStartDate>/g, obj, "fuelAllocationStartDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:FuelAllocationSchedule.fuelType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "fuelType", sub, context);
                base.parse_element (/<cim:FuelAllocationSchedule.maxFuelAllocation>([\s\S]*?)<\/cim:FuelAllocationSchedule.maxFuelAllocation>/g, obj, "maxFuelAllocation", base.to_float, sub, context);
                base.parse_element (/<cim:FuelAllocationSchedule.minFuelAllocation>([\s\S]*?)<\/cim:FuelAllocationSchedule.minFuelAllocation>/g, obj, "minFuelAllocation", base.to_float, sub, context);
                base.parse_attribute (/<cim:FuelAllocationSchedule.FossilFuel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FossilFuel", sub, context);
                base.parse_attribute (/<cim:FuelAllocationSchedule.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                var bucket = context.parsed.FuelAllocationSchedule;
                if (null == bucket)
                   context.parsed.FuelAllocationSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "FuelAllocationSchedule", "fuelAllocationEndDate", base.from_datetime, fields);
                base.export_element (obj, "FuelAllocationSchedule", "fuelAllocationStartDate", base.from_datetime, fields);
                base.export_element (obj, "FuelAllocationSchedule", "fuelType", base.from_string, fields);
                base.export_element (obj, "FuelAllocationSchedule", "maxFuelAllocation", base.from_float, fields);
                base.export_element (obj, "FuelAllocationSchedule", "minFuelAllocation", base.from_float, fields);
                base.export_attribute (obj, "export_attribute", "FuelAllocationSchedule", fields);
                base.export_attribute (obj, "export_attribute", "FuelAllocationSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FuelAllocationSchedule_collapse" aria-expanded="true" aria-controls="FuelAllocationSchedule_collapse" style="margin-left: 10px;">FuelAllocationSchedule</a></legend>
                    <div id="FuelAllocationSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#fuelAllocationEndDate}}<div><b>fuelAllocationEndDate</b>: {{fuelAllocationEndDate}}</div>{{/fuelAllocationEndDate}}
                    {{#fuelAllocationStartDate}}<div><b>fuelAllocationStartDate</b>: {{fuelAllocationStartDate}}</div>{{/fuelAllocationStartDate}}
                    {{#fuelType}}<div><b>fuelType</b>: {{fuelType}}</div>{{/fuelType}}
                    {{#maxFuelAllocation}}<div><b>maxFuelAllocation</b>: {{maxFuelAllocation}}</div>{{/maxFuelAllocation}}
                    {{#minFuelAllocation}}<div><b>minFuelAllocation</b>: {{minFuelAllocation}}</div>{{/minFuelAllocation}}
                    {{#FossilFuel}}<div><b>FossilFuel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FossilFuel}}&quot;);})'>{{FossilFuel}}</a></div>{{/FossilFuel}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.FuelType = []; if (!obj.fuelType) obj.FuelType.push ({ id: '', selected: true}); for (var property in FuelType) obj.FuelType.push ({ id: property, selected: obj.fuelType && obj.fuelType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.FuelType;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FuelAllocationSchedule_collapse" aria-expanded="true" aria-controls="FuelAllocationSchedule_collapse" style="margin-left: 10px;">FuelAllocationSchedule</a></legend>
                    <div id="FuelAllocationSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelAllocationEndDate'>fuelAllocationEndDate: </label><div class='col-sm-8'><input id='fuelAllocationEndDate' class='form-control' type='text'{{#fuelAllocationEndDate}} value='{{fuelAllocationEndDate}}'{{/fuelAllocationEndDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelAllocationStartDate'>fuelAllocationStartDate: </label><div class='col-sm-8'><input id='fuelAllocationStartDate' class='form-control' type='text'{{#fuelAllocationStartDate}} value='{{fuelAllocationStartDate}}'{{/fuelAllocationStartDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelType'>fuelType: </label><div class='col-sm-8'><select id='fuelType' class='form-control'>{{#FuelType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/FuelType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxFuelAllocation'>maxFuelAllocation: </label><div class='col-sm-8'><input id='maxFuelAllocation' class='form-control' type='text'{{#maxFuelAllocation}} value='{{maxFuelAllocation}}'{{/maxFuelAllocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minFuelAllocation'>minFuelAllocation: </label><div class='col-sm-8'><input id='minFuelAllocation' class='form-control' type='text'{{#minFuelAllocation}} value='{{minFuelAllocation}}'{{/minFuelAllocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='FossilFuel'>FossilFuel: </label><div class='col-sm-8'><input id='FossilFuel' class='form-control' type='text'{{#FossilFuel}} value='{{FossilFuel}}'{{/FossilFuel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["FossilFuel", "FossilFuel", "1", "0..*"],
                        ["ThermalGeneratingUnit", "ThermalGeneratingUnit", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Relationship between unit efficiency in percent and unit output active power for a given net head in meters.
         *
         * The relationship between efficiency, discharge, head, and power output is expressed as follows:   E =KP/HQ
         *
         */
        class HydroGeneratingEfficiencyCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HydroGeneratingEfficiencyCurve;
                if (null == bucket)
                   cim_data.HydroGeneratingEfficiencyCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HydroGeneratingEfficiencyCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "HydroGeneratingEfficiencyCurve";
                base.parse_attribute (/<cim:HydroGeneratingEfficiencyCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnit", sub, context);
                var bucket = context.parsed.HydroGeneratingEfficiencyCurve;
                if (null == bucket)
                   context.parsed.HydroGeneratingEfficiencyCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "HydroGeneratingEfficiencyCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HydroGeneratingEfficiencyCurve_collapse" aria-expanded="true" aria-controls="HydroGeneratingEfficiencyCurve_collapse" style="margin-left: 10px;">HydroGeneratingEfficiencyCurve</a></legend>
                    <div id="HydroGeneratingEfficiencyCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#HydroGeneratingUnit}}<div><b>HydroGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroGeneratingUnit}}&quot;);})'>{{HydroGeneratingUnit}}</a></div>{{/HydroGeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HydroGeneratingEfficiencyCurve_collapse" aria-expanded="true" aria-controls="HydroGeneratingEfficiencyCurve_collapse" style="margin-left: 10px;">HydroGeneratingEfficiencyCurve</a></legend>
                    <div id="HydroGeneratingEfficiencyCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HydroGeneratingUnit'>HydroGeneratingUnit: </label><div class='col-sm-8'><input id='HydroGeneratingUnit' class='form-control' type='text'{{#HydroGeneratingUnit}} value='{{HydroGeneratingUnit}}'{{/HydroGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["HydroGeneratingUnit", "HydroGeneratingUnit", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * The generating unit's Operator-approved current operating schedule (or plan), typically produced with the aid of unit commitment type analyses.
         *
         * The X-axis represents absolute time. The Y1-axis represents the status (0=off-line and unavailable: 1=available: 2=must run: 3=must run at fixed power value: etc.). The Y2-axis represents the must run fixed power value where required.
         *
         */
        class GenUnitOpSchedule extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GenUnitOpSchedule;
                if (null == bucket)
                   cim_data.GenUnitOpSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GenUnitOpSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "GenUnitOpSchedule";
                base.parse_attribute (/<cim:GenUnitOpSchedule.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
                var bucket = context.parsed.GenUnitOpSchedule;
                if (null == bucket)
                   context.parsed.GenUnitOpSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "GenUnitOpSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenUnitOpSchedule_collapse" aria-expanded="true" aria-controls="GenUnitOpSchedule_collapse" style="margin-left: 10px;">GenUnitOpSchedule</a></legend>
                    <div id="GenUnitOpSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingUnit}}&quot;);})'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenUnitOpSchedule_collapse" aria-expanded="true" aria-controls="GenUnitOpSchedule_collapse" style="margin-left: 10px;">GenUnitOpSchedule</a></legend>
                    <div id="GenUnitOpSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GeneratingUnit'>GeneratingUnit: </label><div class='col-sm-8'><input id='GeneratingUnit' class='form-control' type='text'{{#GeneratingUnit}} value='{{GeneratingUnit}}'{{/GeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["GeneratingUnit", "GeneratingUnit", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Relationship between unit heat rate per active power (Y-axis) and  unit output (X-axis).
         *
         * The heat input is from all fuels.
         *
         */
        class HeatRateCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HeatRateCurve;
                if (null == bucket)
                   cim_data.HeatRateCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HeatRateCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "HeatRateCurve";
                base.parse_element (/<cim:HeatRateCurve.isNetGrossP>([\s\S]*?)<\/cim:HeatRateCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:HeatRateCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                var bucket = context.parsed.HeatRateCurve;
                if (null == bucket)
                   context.parsed.HeatRateCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "HeatRateCurve", "isNetGrossP", base.from_boolean, fields);
                base.export_attribute (obj, "export_attribute", "HeatRateCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HeatRateCurve_collapse" aria-expanded="true" aria-controls="HeatRateCurve_collapse" style="margin-left: 10px;">HeatRateCurve</a></legend>
                    <div id="HeatRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HeatRateCurve_collapse" aria-expanded="true" aria-controls="HeatRateCurve_collapse" style="margin-left: 10px;">HeatRateCurve</a></legend>
                    <div id="HeatRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isNetGrossP'>isNetGrossP: </label><div class='col-sm-8'><input id='isNetGrossP' class='form-check-input' type='checkbox'{{#isNetGrossP}} checked{{/isNetGrossP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ThermalGeneratingUnit", "ThermalGeneratingUnit", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Relationship between unit operating cost (Y-axis) and unit output active power (X-axis).
         *
         * The operating cost curve for thermal units is derived from heat input and fuel costs. The operating cost curve for hydro units is derived from water flow rates and equivalent water costs.
         *
         */
        class GenUnitOpCostCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GenUnitOpCostCurve;
                if (null == bucket)
                   cim_data.GenUnitOpCostCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GenUnitOpCostCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "GenUnitOpCostCurve";
                base.parse_element (/<cim:GenUnitOpCostCurve.isNetGrossP>([\s\S]*?)<\/cim:GenUnitOpCostCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:GenUnitOpCostCurve.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
                var bucket = context.parsed.GenUnitOpCostCurve;
                if (null == bucket)
                   context.parsed.GenUnitOpCostCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "GenUnitOpCostCurve", "isNetGrossP", base.from_boolean, fields);
                base.export_attribute (obj, "export_attribute", "GenUnitOpCostCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenUnitOpCostCurve_collapse" aria-expanded="true" aria-controls="GenUnitOpCostCurve_collapse" style="margin-left: 10px;">GenUnitOpCostCurve</a></legend>
                    <div id="GenUnitOpCostCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
                    {{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingUnit}}&quot;);})'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenUnitOpCostCurve_collapse" aria-expanded="true" aria-controls="GenUnitOpCostCurve_collapse" style="margin-left: 10px;">GenUnitOpCostCurve</a></legend>
                    <div id="GenUnitOpCostCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isNetGrossP'>isNetGrossP: </label><div class='col-sm-8'><input id='isNetGrossP' class='form-check-input' type='checkbox'{{#isNetGrossP}} checked{{/isNetGrossP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GeneratingUnit'>GeneratingUnit: </label><div class='col-sm-8'><input id='GeneratingUnit' class='form-control' type='text'{{#GeneratingUnit}} value='{{GeneratingUnit}}'{{/GeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["GeneratingUnit", "GeneratingUnit", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * The cogeneration plant's steam sendout schedule in volume per time unit.
         *
         */
        class SteamSendoutSchedule extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SteamSendoutSchedule;
                if (null == bucket)
                   cim_data.SteamSendoutSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SteamSendoutSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "SteamSendoutSchedule";
                base.parse_attribute (/<cim:SteamSendoutSchedule.CogenerationPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CogenerationPlant", sub, context);
                var bucket = context.parsed.SteamSendoutSchedule;
                if (null == bucket)
                   context.parsed.SteamSendoutSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "SteamSendoutSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SteamSendoutSchedule_collapse" aria-expanded="true" aria-controls="SteamSendoutSchedule_collapse" style="margin-left: 10px;">SteamSendoutSchedule</a></legend>
                    <div id="SteamSendoutSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#CogenerationPlant}}<div><b>CogenerationPlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CogenerationPlant}}&quot;);})'>{{CogenerationPlant}}</a></div>{{/CogenerationPlant}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SteamSendoutSchedule_collapse" aria-expanded="true" aria-controls="SteamSendoutSchedule_collapse" style="margin-left: 10px;">SteamSendoutSchedule</a></legend>
                    <div id="SteamSendoutSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CogenerationPlant'>CogenerationPlant: </label><div class='col-sm-8'><input id='CogenerationPlant' class='form-control' type='text'{{#CogenerationPlant}} value='{{CogenerationPlant}}'{{/CogenerationPlant}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["CogenerationPlant", "CogenerationPlant", "1", "1"]
                    ]
                );
            }
        }

        /**
         * Relationship between tailbay head loss hight (y-axis) and the total discharge into the power station's tailbay volume per time unit (x-axis) .
         *
         * There could be more than one curve depending on the level of the tailbay reservoir or river level.
         *
         */
        class TailbayLossCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TailbayLossCurve;
                if (null == bucket)
                   cim_data.TailbayLossCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TailbayLossCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "TailbayLossCurve";
                base.parse_attribute (/<cim:TailbayLossCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnit", sub, context);
                var bucket = context.parsed.TailbayLossCurve;
                if (null == bucket)
                   context.parsed.TailbayLossCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "TailbayLossCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TailbayLossCurve_collapse" aria-expanded="true" aria-controls="TailbayLossCurve_collapse" style="margin-left: 10px;">TailbayLossCurve</a></legend>
                    <div id="TailbayLossCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#HydroGeneratingUnit}}<div><b>HydroGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroGeneratingUnit}}&quot;);})'>{{HydroGeneratingUnit}}</a></div>{{/HydroGeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TailbayLossCurve_collapse" aria-expanded="true" aria-controls="TailbayLossCurve_collapse" style="margin-left: 10px;">TailbayLossCurve</a></legend>
                    <div id="TailbayLossCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HydroGeneratingUnit'>HydroGeneratingUnit: </label><div class='col-sm-8'><input id='HydroGeneratingUnit' class='form-control' type='text'{{#HydroGeneratingUnit}} value='{{HydroGeneratingUnit}}'{{/HydroGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["HydroGeneratingUnit", "HydroGeneratingUnit", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Compressed air energy storage plant.
         *
         */
        class CAESPlant extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CAESPlant;
                if (null == bucket)
                   cim_data.CAESPlant = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CAESPlant[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "CAESPlant";
                base.parse_element (/<cim:CAESPlant.energyStorageCapacity>([\s\S]*?)<\/cim:CAESPlant.energyStorageCapacity>/g, obj, "energyStorageCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:CAESPlant.ratedCapacityP>([\s\S]*?)<\/cim:CAESPlant.ratedCapacityP>/g, obj, "ratedCapacityP", base.to_string, sub, context);
                base.parse_attribute (/<cim:CAESPlant.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                base.parse_attribute (/<cim:CAESPlant.AirCompressor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AirCompressor", sub, context);
                var bucket = context.parsed.CAESPlant;
                if (null == bucket)
                   context.parsed.CAESPlant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "CAESPlant", "energyStorageCapacity", base.from_string, fields);
                base.export_element (obj, "CAESPlant", "ratedCapacityP", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "CAESPlant", fields);
                base.export_attribute (obj, "export_attribute", "CAESPlant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CAESPlant_collapse" aria-expanded="true" aria-controls="CAESPlant_collapse" style="margin-left: 10px;">CAESPlant</a></legend>
                    <div id="CAESPlant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#energyStorageCapacity}}<div><b>energyStorageCapacity</b>: {{energyStorageCapacity}}</div>{{/energyStorageCapacity}}
                    {{#ratedCapacityP}}<div><b>ratedCapacityP</b>: {{ratedCapacityP}}</div>{{/ratedCapacityP}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
                    {{#AirCompressor}}<div><b>AirCompressor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AirCompressor}}&quot;);})'>{{AirCompressor}}</a></div>{{/AirCompressor}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CAESPlant_collapse" aria-expanded="true" aria-controls="CAESPlant_collapse" style="margin-left: 10px;">CAESPlant</a></legend>
                    <div id="CAESPlant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyStorageCapacity'>energyStorageCapacity: </label><div class='col-sm-8'><input id='energyStorageCapacity' class='form-control' type='text'{{#energyStorageCapacity}} value='{{energyStorageCapacity}}'{{/energyStorageCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedCapacityP'>ratedCapacityP: </label><div class='col-sm-8'><input id='ratedCapacityP' class='form-control' type='text'{{#ratedCapacityP}} value='{{ratedCapacityP}}'{{/ratedCapacityP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AirCompressor'>AirCompressor: </label><div class='col-sm-8'><input id='AirCompressor' class='form-control' type='text'{{#AirCompressor}} value='{{AirCompressor}}'{{/AirCompressor}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ThermalGeneratingUnit", "ThermalGeneratingUnit", "0..1", "0..1"],
                        ["AirCompressor", "AirCompressor", "1", "1"]
                    ]
                );
            }
        }

        /**
         * Relationship between the unit's emission rate in units of mass per hour (Y-axis) and output active power (X-axis) for a given type of emission.
         *
         * This curve applies when only one type of fuel is being burned.
         *
         */
        class EmissionCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EmissionCurve;
                if (null == bucket)
                   cim_data.EmissionCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EmissionCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "EmissionCurve";
                base.parse_element (/<cim:EmissionCurve.emissionContent>([\s\S]*?)<\/cim:EmissionCurve.emissionContent>/g, obj, "emissionContent", base.to_string, sub, context);
                base.parse_attribute (/<cim:EmissionCurve.emissionType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "emissionType", sub, context);
                base.parse_element (/<cim:EmissionCurve.isNetGrossP>([\s\S]*?)<\/cim:EmissionCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:EmissionCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                var bucket = context.parsed.EmissionCurve;
                if (null == bucket)
                   context.parsed.EmissionCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "EmissionCurve", "emissionContent", base.from_string, fields);
                base.export_element (obj, "EmissionCurve", "emissionType", base.from_string, fields);
                base.export_element (obj, "EmissionCurve", "isNetGrossP", base.from_boolean, fields);
                base.export_attribute (obj, "export_attribute", "EmissionCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EmissionCurve_collapse" aria-expanded="true" aria-controls="EmissionCurve_collapse" style="margin-left: 10px;">EmissionCurve</a></legend>
                    <div id="EmissionCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#emissionContent}}<div><b>emissionContent</b>: {{emissionContent}}</div>{{/emissionContent}}
                    {{#emissionType}}<div><b>emissionType</b>: {{emissionType}}</div>{{/emissionType}}
                    {{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.EmissionType = []; if (!obj.emissionType) obj.EmissionType.push ({ id: '', selected: true}); for (var property in EmissionType) obj.EmissionType.push ({ id: property, selected: obj.emissionType && obj.emissionType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EmissionType;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EmissionCurve_collapse" aria-expanded="true" aria-controls="EmissionCurve_collapse" style="margin-left: 10px;">EmissionCurve</a></legend>
                    <div id="EmissionCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='emissionContent'>emissionContent: </label><div class='col-sm-8'><input id='emissionContent' class='form-control' type='text'{{#emissionContent}} value='{{emissionContent}}'{{/emissionContent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='emissionType'>emissionType: </label><div class='col-sm-8'><select id='emissionType' class='form-control'>{{#EmissionType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/EmissionType}}</select></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isNetGrossP'>isNetGrossP: </label><div class='col-sm-8'><input id='isNetGrossP' class='form-check-input' type='checkbox'{{#isNetGrossP}} checked{{/isNetGrossP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ThermalGeneratingUnit", "ThermalGeneratingUnit", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * The quantity of main fuel (Y-axis) used to restart and repay the auxiliary power consumed versus the number of hours (X-axis) the unit was off line.
         *
         */
        class StartMainFuelCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StartMainFuelCurve;
                if (null == bucket)
                   cim_data.StartMainFuelCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StartMainFuelCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartMainFuelCurve";
                base.parse_attribute (/<cim:StartMainFuelCurve.mainFuelType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "mainFuelType", sub, context);
                base.parse_attribute (/<cim:StartMainFuelCurve.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
                var bucket = context.parsed.StartMainFuelCurve;
                if (null == bucket)
                   context.parsed.StartMainFuelCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "StartMainFuelCurve", "mainFuelType", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "StartMainFuelCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartMainFuelCurve_collapse" aria-expanded="true" aria-controls="StartMainFuelCurve_collapse" style="margin-left: 10px;">StartMainFuelCurve</a></legend>
                    <div id="StartMainFuelCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#mainFuelType}}<div><b>mainFuelType</b>: {{mainFuelType}}</div>{{/mainFuelType}}
                    {{#StartupModel}}<div><b>StartupModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartupModel}}&quot;);})'>{{StartupModel}}</a></div>{{/StartupModel}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.FuelType = []; if (!obj.mainFuelType) obj.FuelType.push ({ id: '', selected: true}); for (var property in FuelType) obj.FuelType.push ({ id: property, selected: obj.mainFuelType && obj.mainFuelType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.FuelType;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartMainFuelCurve_collapse" aria-expanded="true" aria-controls="StartMainFuelCurve_collapse" style="margin-left: 10px;">StartMainFuelCurve</a></legend>
                    <div id="StartMainFuelCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mainFuelType'>mainFuelType: </label><div class='col-sm-8'><select id='mainFuelType' class='form-control'>{{#FuelType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/FuelType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StartupModel'>StartupModel: </label><div class='col-sm-8'><input id='StartupModel' class='form-control' type='text'{{#StartupModel}} value='{{StartupModel}}'{{/StartupModel}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["StartupModel", "StartupModel", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Rate in gross active power/minute (Y-axis) at which a unit can be loaded versus the number of hours (X-axis) the unit was off line.
         *
         */
        class StartRampCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StartRampCurve;
                if (null == bucket)
                   cim_data.StartRampCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StartRampCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartRampCurve";
                base.parse_element (/<cim:StartRampCurve.hotStandbyRamp>([\s\S]*?)<\/cim:StartRampCurve.hotStandbyRamp>/g, obj, "hotStandbyRamp", base.to_string, sub, context);
                base.parse_attribute (/<cim:StartRampCurve.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
                var bucket = context.parsed.StartRampCurve;
                if (null == bucket)
                   context.parsed.StartRampCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "StartRampCurve", "hotStandbyRamp", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "StartRampCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartRampCurve_collapse" aria-expanded="true" aria-controls="StartRampCurve_collapse" style="margin-left: 10px;">StartRampCurve</a></legend>
                    <div id="StartRampCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#hotStandbyRamp}}<div><b>hotStandbyRamp</b>: {{hotStandbyRamp}}</div>{{/hotStandbyRamp}}
                    {{#StartupModel}}<div><b>StartupModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartupModel}}&quot;);})'>{{StartupModel}}</a></div>{{/StartupModel}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartRampCurve_collapse" aria-expanded="true" aria-controls="StartRampCurve_collapse" style="margin-left: 10px;">StartRampCurve</a></legend>
                    <div id="StartRampCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hotStandbyRamp'>hotStandbyRamp: </label><div class='col-sm-8'><input id='hotStandbyRamp' class='form-control' type='text'{{#hotStandbyRamp}} value='{{hotStandbyRamp}}'{{/hotStandbyRamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StartupModel'>StartupModel: </label><div class='col-sm-8'><input id='StartupModel' class='form-control' type='text'{{#StartupModel}} value='{{StartupModel}}'{{/StartupModel}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["StartupModel", "StartupModel", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * The fossil fuel consumed by the non-nuclear thermal generating unit.
         *
         * For example, coal, oil, gas, etc.   This a the specific fuels that the generating unit can consume.
         *
         */
        class FossilFuel extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FossilFuel;
                if (null == bucket)
                   cim_data.FossilFuel = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FossilFuel[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "FossilFuel";
                base.parse_attribute (/<cim:FossilFuel.fossilFuelType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "fossilFuelType", sub, context);
                base.parse_element (/<cim:FossilFuel.fuelCost>([\s\S]*?)<\/cim:FossilFuel.fuelCost>/g, obj, "fuelCost", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelDispatchCost>([\s\S]*?)<\/cim:FossilFuel.fuelDispatchCost>/g, obj, "fuelDispatchCost", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelEffFactor>([\s\S]*?)<\/cim:FossilFuel.fuelEffFactor>/g, obj, "fuelEffFactor", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelHandlingCost>([\s\S]*?)<\/cim:FossilFuel.fuelHandlingCost>/g, obj, "fuelHandlingCost", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelHeatContent>([\s\S]*?)<\/cim:FossilFuel.fuelHeatContent>/g, obj, "fuelHeatContent", base.to_float, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelMixture>([\s\S]*?)<\/cim:FossilFuel.fuelMixture>/g, obj, "fuelMixture", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelSulfur>([\s\S]*?)<\/cim:FossilFuel.fuelSulfur>/g, obj, "fuelSulfur", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.highBreakpointP>([\s\S]*?)<\/cim:FossilFuel.highBreakpointP>/g, obj, "highBreakpointP", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.lowBreakpointP>([\s\S]*?)<\/cim:FossilFuel.lowBreakpointP>/g, obj, "lowBreakpointP", base.to_string, sub, context);
                base.parse_attributes (/<cim:FossilFuel.FuelAllocationSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FuelAllocationSchedules", sub, context);
                base.parse_attribute (/<cim:FossilFuel.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                var bucket = context.parsed.FossilFuel;
                if (null == bucket)
                   context.parsed.FossilFuel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "FossilFuel", "fossilFuelType", base.from_string, fields);
                base.export_element (obj, "FossilFuel", "fuelCost", base.from_string, fields);
                base.export_element (obj, "FossilFuel", "fuelDispatchCost", base.from_string, fields);
                base.export_element (obj, "FossilFuel", "fuelEffFactor", base.from_string, fields);
                base.export_element (obj, "FossilFuel", "fuelHandlingCost", base.from_string, fields);
                base.export_element (obj, "FossilFuel", "fuelHeatContent", base.from_float, fields);
                base.export_element (obj, "FossilFuel", "fuelMixture", base.from_string, fields);
                base.export_element (obj, "FossilFuel", "fuelSulfur", base.from_string, fields);
                base.export_element (obj, "FossilFuel", "highBreakpointP", base.from_string, fields);
                base.export_element (obj, "FossilFuel", "lowBreakpointP", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "FossilFuel", fields);
                base.export_attribute (obj, "export_attribute", "FossilFuel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FossilFuel_collapse" aria-expanded="true" aria-controls="FossilFuel_collapse" style="margin-left: 10px;">FossilFuel</a></legend>
                    <div id="FossilFuel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#fossilFuelType}}<div><b>fossilFuelType</b>: {{fossilFuelType}}</div>{{/fossilFuelType}}
                    {{#fuelCost}}<div><b>fuelCost</b>: {{fuelCost}}</div>{{/fuelCost}}
                    {{#fuelDispatchCost}}<div><b>fuelDispatchCost</b>: {{fuelDispatchCost}}</div>{{/fuelDispatchCost}}
                    {{#fuelEffFactor}}<div><b>fuelEffFactor</b>: {{fuelEffFactor}}</div>{{/fuelEffFactor}}
                    {{#fuelHandlingCost}}<div><b>fuelHandlingCost</b>: {{fuelHandlingCost}}</div>{{/fuelHandlingCost}}
                    {{#fuelHeatContent}}<div><b>fuelHeatContent</b>: {{fuelHeatContent}}</div>{{/fuelHeatContent}}
                    {{#fuelMixture}}<div><b>fuelMixture</b>: {{fuelMixture}}</div>{{/fuelMixture}}
                    {{#fuelSulfur}}<div><b>fuelSulfur</b>: {{fuelSulfur}}</div>{{/fuelSulfur}}
                    {{#highBreakpointP}}<div><b>highBreakpointP</b>: {{highBreakpointP}}</div>{{/highBreakpointP}}
                    {{#lowBreakpointP}}<div><b>lowBreakpointP</b>: {{lowBreakpointP}}</div>{{/lowBreakpointP}}
                    {{#FuelAllocationSchedules}}<div><b>FuelAllocationSchedules</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/FuelAllocationSchedules}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.FuelType = []; if (!obj.fossilFuelType) obj.FuelType.push ({ id: '', selected: true}); for (var property in FuelType) obj.FuelType.push ({ id: property, selected: obj.fossilFuelType && obj.fossilFuelType.endsWith ('.' + property)});
                if (obj.FuelAllocationSchedules) obj.FuelAllocationSchedules_string = obj.FuelAllocationSchedules.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.FuelType;
                delete obj.FuelAllocationSchedules_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FossilFuel_collapse" aria-expanded="true" aria-controls="FossilFuel_collapse" style="margin-left: 10px;">FossilFuel</a></legend>
                    <div id="FossilFuel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fossilFuelType'>fossilFuelType: </label><div class='col-sm-8'><select id='fossilFuelType' class='form-control'>{{#FuelType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/FuelType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelCost'>fuelCost: </label><div class='col-sm-8'><input id='fuelCost' class='form-control' type='text'{{#fuelCost}} value='{{fuelCost}}'{{/fuelCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelDispatchCost'>fuelDispatchCost: </label><div class='col-sm-8'><input id='fuelDispatchCost' class='form-control' type='text'{{#fuelDispatchCost}} value='{{fuelDispatchCost}}'{{/fuelDispatchCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelEffFactor'>fuelEffFactor: </label><div class='col-sm-8'><input id='fuelEffFactor' class='form-control' type='text'{{#fuelEffFactor}} value='{{fuelEffFactor}}'{{/fuelEffFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelHandlingCost'>fuelHandlingCost: </label><div class='col-sm-8'><input id='fuelHandlingCost' class='form-control' type='text'{{#fuelHandlingCost}} value='{{fuelHandlingCost}}'{{/fuelHandlingCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelHeatContent'>fuelHeatContent: </label><div class='col-sm-8'><input id='fuelHeatContent' class='form-control' type='text'{{#fuelHeatContent}} value='{{fuelHeatContent}}'{{/fuelHeatContent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelMixture'>fuelMixture: </label><div class='col-sm-8'><input id='fuelMixture' class='form-control' type='text'{{#fuelMixture}} value='{{fuelMixture}}'{{/fuelMixture}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fuelSulfur'>fuelSulfur: </label><div class='col-sm-8'><input id='fuelSulfur' class='form-control' type='text'{{#fuelSulfur}} value='{{fuelSulfur}}'{{/fuelSulfur}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='highBreakpointP'>highBreakpointP: </label><div class='col-sm-8'><input id='highBreakpointP' class='form-control' type='text'{{#highBreakpointP}} value='{{highBreakpointP}}'{{/highBreakpointP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowBreakpointP'>lowBreakpointP: </label><div class='col-sm-8'><input id='lowBreakpointP' class='form-control' type='text'{{#lowBreakpointP}} value='{{lowBreakpointP}}'{{/lowBreakpointP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["FuelAllocationSchedules", "FuelAllocationSchedule", "0..*", "1"],
                        ["ThermalGeneratingUnit", "ThermalGeneratingUnit", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A single or set of synchronous machines for converting mechanical power into alternating-current power.
         *
         * For example, individual machines within a set may be defined for scheduling purposes while a single control signal is derived for the set. In this case there would be a GeneratingUnit for each member of the set and an additional GeneratingUnit corresponding to the set.
         *
         */
        class GeneratingUnit extends Core.Equipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GeneratingUnit;
                if (null == bucket)
                   cim_data.GeneratingUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GeneratingUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "GeneratingUnit";
                base.parse_element (/<cim:GeneratingUnit.allocSpinResP>([\s\S]*?)<\/cim:GeneratingUnit.allocSpinResP>/g, obj, "allocSpinResP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.autoCntrlMarginP>([\s\S]*?)<\/cim:GeneratingUnit.autoCntrlMarginP>/g, obj, "autoCntrlMarginP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.baseP>([\s\S]*?)<\/cim:GeneratingUnit.baseP>/g, obj, "baseP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.controlDeadband>([\s\S]*?)<\/cim:GeneratingUnit.controlDeadband>/g, obj, "controlDeadband", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.controlPulseHigh>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseHigh>/g, obj, "controlPulseHigh", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.controlPulseLow>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseLow>/g, obj, "controlPulseLow", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.controlResponseRate>([\s\S]*?)<\/cim:GeneratingUnit.controlResponseRate>/g, obj, "controlResponseRate", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.efficiency>([\s\S]*?)<\/cim:GeneratingUnit.efficiency>/g, obj, "efficiency", base.to_string, sub, context);
                base.parse_attribute (/<cim:GeneratingUnit.genControlMode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "genControlMode", sub, context);
                base.parse_attribute (/<cim:GeneratingUnit.genControlSource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "genControlSource", sub, context);
                base.parse_element (/<cim:GeneratingUnit.governorMPL>([\s\S]*?)<\/cim:GeneratingUnit.governorMPL>/g, obj, "governorMPL", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.governorSCD>([\s\S]*?)<\/cim:GeneratingUnit.governorSCD>/g, obj, "governorSCD", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.highControlLimit>([\s\S]*?)<\/cim:GeneratingUnit.highControlLimit>/g, obj, "highControlLimit", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.initialP>([\s\S]*?)<\/cim:GeneratingUnit.initialP>/g, obj, "initialP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.longPF>([\s\S]*?)<\/cim:GeneratingUnit.longPF>/g, obj, "longPF", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnit.lowControlLimit>([\s\S]*?)<\/cim:GeneratingUnit.lowControlLimit>/g, obj, "lowControlLimit", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.lowerRampRate>([\s\S]*?)<\/cim:GeneratingUnit.lowerRampRate>/g, obj, "lowerRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.maxEconomicP>([\s\S]*?)<\/cim:GeneratingUnit.maxEconomicP>/g, obj, "maxEconomicP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.maximumAllowableSpinningReserve>([\s\S]*?)<\/cim:GeneratingUnit.maximumAllowableSpinningReserve>/g, obj, "maximumAllowableSpinningReserve", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.maxOperatingP>([\s\S]*?)<\/cim:GeneratingUnit.maxOperatingP>/g, obj, "maxOperatingP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.minEconomicP>([\s\S]*?)<\/cim:GeneratingUnit.minEconomicP>/g, obj, "minEconomicP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.minimumOffTime>([\s\S]*?)<\/cim:GeneratingUnit.minimumOffTime>/g, obj, "minimumOffTime", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.minOperatingP>([\s\S]*?)<\/cim:GeneratingUnit.minOperatingP>/g, obj, "minOperatingP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.modelDetail>([\s\S]*?)<\/cim:GeneratingUnit.modelDetail>/g, obj, "modelDetail", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.nominalP>([\s\S]*?)<\/cim:GeneratingUnit.nominalP>/g, obj, "nominalP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.normalPF>([\s\S]*?)<\/cim:GeneratingUnit.normalPF>/g, obj, "normalPF", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnit.penaltyFactor>([\s\S]*?)<\/cim:GeneratingUnit.penaltyFactor>/g, obj, "penaltyFactor", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnit.raiseRampRate>([\s\S]*?)<\/cim:GeneratingUnit.raiseRampRate>/g, obj, "raiseRampRate", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.ratedGrossMaxP>([\s\S]*?)<\/cim:GeneratingUnit.ratedGrossMaxP>/g, obj, "ratedGrossMaxP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.ratedGrossMinP>([\s\S]*?)<\/cim:GeneratingUnit.ratedGrossMinP>/g, obj, "ratedGrossMinP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.ratedNetMaxP>([\s\S]*?)<\/cim:GeneratingUnit.ratedNetMaxP>/g, obj, "ratedNetMaxP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.shortPF>([\s\S]*?)<\/cim:GeneratingUnit.shortPF>/g, obj, "shortPF", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnit.startupCost>([\s\S]*?)<\/cim:GeneratingUnit.startupCost>/g, obj, "startupCost", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.startupTime>([\s\S]*?)<\/cim:GeneratingUnit.startupTime>/g, obj, "startupTime", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.tieLinePF>([\s\S]*?)<\/cim:GeneratingUnit.tieLinePF>/g, obj, "tieLinePF", base.to_float, sub, context);
                base.parse_element (/<cim:GeneratingUnit.variableCost>([\s\S]*?)<\/cim:GeneratingUnit.variableCost>/g, obj, "variableCost", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.totalEfficiency>([\s\S]*?)<\/cim:GeneratingUnit.totalEfficiency>/g, obj, "totalEfficiency", base.to_string, sub, context);
                base.parse_attributes (/<cim:GeneratingUnit.RotatingMachine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RotatingMachine", sub, context);
                base.parse_attribute (/<cim:GeneratingUnit.GenUnitOpSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenUnitOpSchedule", sub, context);
                base.parse_attributes (/<cim:GeneratingUnit.GenUnitOpCostCurves\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenUnitOpCostCurves", sub, context);
                base.parse_attributes (/<cim:GeneratingUnit.ControlAreaGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlAreaGeneratingUnit", sub, context);
                base.parse_attributes (/<cim:GeneratingUnit.GrossToNetActivePowerCurves\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GrossToNetActivePowerCurves", sub, context);
                var bucket = context.parsed.GeneratingUnit;
                if (null == bucket)
                   context.parsed.GeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Equipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "GeneratingUnit", "allocSpinResP", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "autoCntrlMarginP", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "baseP", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "controlDeadband", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "controlPulseHigh", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "controlPulseLow", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "controlResponseRate", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "efficiency", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "genControlMode", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "genControlSource", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "governorMPL", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "governorSCD", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "highControlLimit", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "initialP", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "longPF", base.from_float, fields);
                base.export_element (obj, "GeneratingUnit", "lowControlLimit", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "lowerRampRate", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "maxEconomicP", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "maximumAllowableSpinningReserve", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "maxOperatingP", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "minEconomicP", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "minimumOffTime", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "minOperatingP", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "modelDetail", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "nominalP", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "normalPF", base.from_float, fields);
                base.export_element (obj, "GeneratingUnit", "penaltyFactor", base.from_float, fields);
                base.export_element (obj, "GeneratingUnit", "raiseRampRate", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "ratedGrossMaxP", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "ratedGrossMinP", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "ratedNetMaxP", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "shortPF", base.from_float, fields);
                base.export_element (obj, "GeneratingUnit", "startupCost", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "startupTime", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "tieLinePF", base.from_float, fields);
                base.export_element (obj, "GeneratingUnit", "variableCost", base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "totalEfficiency", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "GeneratingUnit", fields);
                base.export_attribute (obj, "export_attribute", "GeneratingUnit", fields);
                base.export_attribute (obj, "export_attributes", "GeneratingUnit", fields);
                base.export_attribute (obj, "export_attributes", "GeneratingUnit", fields);
                base.export_attribute (obj, "export_attributes", "GeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeneratingUnit_collapse" aria-expanded="true" aria-controls="GeneratingUnit_collapse" style="margin-left: 10px;">GeneratingUnit</a></legend>
                    <div id="GeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.template.call (this) +
                    `
                    {{#allocSpinResP}}<div><b>allocSpinResP</b>: {{allocSpinResP}}</div>{{/allocSpinResP}}
                    {{#autoCntrlMarginP}}<div><b>autoCntrlMarginP</b>: {{autoCntrlMarginP}}</div>{{/autoCntrlMarginP}}
                    {{#baseP}}<div><b>baseP</b>: {{baseP}}</div>{{/baseP}}
                    {{#controlDeadband}}<div><b>controlDeadband</b>: {{controlDeadband}}</div>{{/controlDeadband}}
                    {{#controlPulseHigh}}<div><b>controlPulseHigh</b>: {{controlPulseHigh}}</div>{{/controlPulseHigh}}
                    {{#controlPulseLow}}<div><b>controlPulseLow</b>: {{controlPulseLow}}</div>{{/controlPulseLow}}
                    {{#controlResponseRate}}<div><b>controlResponseRate</b>: {{controlResponseRate}}</div>{{/controlResponseRate}}
                    {{#efficiency}}<div><b>efficiency</b>: {{efficiency}}</div>{{/efficiency}}
                    {{#genControlMode}}<div><b>genControlMode</b>: {{genControlMode}}</div>{{/genControlMode}}
                    {{#genControlSource}}<div><b>genControlSource</b>: {{genControlSource}}</div>{{/genControlSource}}
                    {{#governorMPL}}<div><b>governorMPL</b>: {{governorMPL}}</div>{{/governorMPL}}
                    {{#governorSCD}}<div><b>governorSCD</b>: {{governorSCD}}</div>{{/governorSCD}}
                    {{#highControlLimit}}<div><b>highControlLimit</b>: {{highControlLimit}}</div>{{/highControlLimit}}
                    {{#initialP}}<div><b>initialP</b>: {{initialP}}</div>{{/initialP}}
                    {{#longPF}}<div><b>longPF</b>: {{longPF}}</div>{{/longPF}}
                    {{#lowControlLimit}}<div><b>lowControlLimit</b>: {{lowControlLimit}}</div>{{/lowControlLimit}}
                    {{#lowerRampRate}}<div><b>lowerRampRate</b>: {{lowerRampRate}}</div>{{/lowerRampRate}}
                    {{#maxEconomicP}}<div><b>maxEconomicP</b>: {{maxEconomicP}}</div>{{/maxEconomicP}}
                    {{#maximumAllowableSpinningReserve}}<div><b>maximumAllowableSpinningReserve</b>: {{maximumAllowableSpinningReserve}}</div>{{/maximumAllowableSpinningReserve}}
                    {{#maxOperatingP}}<div><b>maxOperatingP</b>: {{maxOperatingP}}</div>{{/maxOperatingP}}
                    {{#minEconomicP}}<div><b>minEconomicP</b>: {{minEconomicP}}</div>{{/minEconomicP}}
                    {{#minimumOffTime}}<div><b>minimumOffTime</b>: {{minimumOffTime}}</div>{{/minimumOffTime}}
                    {{#minOperatingP}}<div><b>minOperatingP</b>: {{minOperatingP}}</div>{{/minOperatingP}}
                    {{#modelDetail}}<div><b>modelDetail</b>: {{modelDetail}}</div>{{/modelDetail}}
                    {{#nominalP}}<div><b>nominalP</b>: {{nominalP}}</div>{{/nominalP}}
                    {{#normalPF}}<div><b>normalPF</b>: {{normalPF}}</div>{{/normalPF}}
                    {{#penaltyFactor}}<div><b>penaltyFactor</b>: {{penaltyFactor}}</div>{{/penaltyFactor}}
                    {{#raiseRampRate}}<div><b>raiseRampRate</b>: {{raiseRampRate}}</div>{{/raiseRampRate}}
                    {{#ratedGrossMaxP}}<div><b>ratedGrossMaxP</b>: {{ratedGrossMaxP}}</div>{{/ratedGrossMaxP}}
                    {{#ratedGrossMinP}}<div><b>ratedGrossMinP</b>: {{ratedGrossMinP}}</div>{{/ratedGrossMinP}}
                    {{#ratedNetMaxP}}<div><b>ratedNetMaxP</b>: {{ratedNetMaxP}}</div>{{/ratedNetMaxP}}
                    {{#shortPF}}<div><b>shortPF</b>: {{shortPF}}</div>{{/shortPF}}
                    {{#startupCost}}<div><b>startupCost</b>: {{startupCost}}</div>{{/startupCost}}
                    {{#startupTime}}<div><b>startupTime</b>: {{startupTime}}</div>{{/startupTime}}
                    {{#tieLinePF}}<div><b>tieLinePF</b>: {{tieLinePF}}</div>{{/tieLinePF}}
                    {{#variableCost}}<div><b>variableCost</b>: {{variableCost}}</div>{{/variableCost}}
                    {{#totalEfficiency}}<div><b>totalEfficiency</b>: {{totalEfficiency}}</div>{{/totalEfficiency}}
                    {{#RotatingMachine}}<div><b>RotatingMachine</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RotatingMachine}}
                    {{#GenUnitOpSchedule}}<div><b>GenUnitOpSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GenUnitOpSchedule}}&quot;);})'>{{GenUnitOpSchedule}}</a></div>{{/GenUnitOpSchedule}}
                    {{#GenUnitOpCostCurves}}<div><b>GenUnitOpCostCurves</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GenUnitOpCostCurves}}
                    {{#ControlAreaGeneratingUnit}}<div><b>ControlAreaGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ControlAreaGeneratingUnit}}
                    {{#GrossToNetActivePowerCurves}}<div><b>GrossToNetActivePowerCurves</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GrossToNetActivePowerCurves}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.GeneratorControlMode = []; if (!obj.genControlMode) obj.GeneratorControlMode.push ({ id: '', selected: true}); for (var property in GeneratorControlMode) obj.GeneratorControlMode.push ({ id: property, selected: obj.genControlMode && obj.genControlMode.endsWith ('.' + property)});
                obj.GeneratorControlSource = []; if (!obj.genControlSource) obj.GeneratorControlSource.push ({ id: '', selected: true}); for (var property in GeneratorControlSource) obj.GeneratorControlSource.push ({ id: property, selected: obj.genControlSource && obj.genControlSource.endsWith ('.' + property)});
                if (obj.RotatingMachine) obj.RotatingMachine_string = obj.RotatingMachine.join ();
                if (obj.GenUnitOpCostCurves) obj.GenUnitOpCostCurves_string = obj.GenUnitOpCostCurves.join ();
                if (obj.ControlAreaGeneratingUnit) obj.ControlAreaGeneratingUnit_string = obj.ControlAreaGeneratingUnit.join ();
                if (obj.GrossToNetActivePowerCurves) obj.GrossToNetActivePowerCurves_string = obj.GrossToNetActivePowerCurves.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.GeneratorControlMode;
                delete obj.GeneratorControlSource;
                delete obj.RotatingMachine_string;
                delete obj.GenUnitOpCostCurves_string;
                delete obj.ControlAreaGeneratingUnit_string;
                delete obj.GrossToNetActivePowerCurves_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeneratingUnit_collapse" aria-expanded="true" aria-controls="GeneratingUnit_collapse" style="margin-left: 10px;">GeneratingUnit</a></legend>
                    <div id="GeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='allocSpinResP'>allocSpinResP: </label><div class='col-sm-8'><input id='allocSpinResP' class='form-control' type='text'{{#allocSpinResP}} value='{{allocSpinResP}}'{{/allocSpinResP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='autoCntrlMarginP'>autoCntrlMarginP: </label><div class='col-sm-8'><input id='autoCntrlMarginP' class='form-control' type='text'{{#autoCntrlMarginP}} value='{{autoCntrlMarginP}}'{{/autoCntrlMarginP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='baseP'>baseP: </label><div class='col-sm-8'><input id='baseP' class='form-control' type='text'{{#baseP}} value='{{baseP}}'{{/baseP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='controlDeadband'>controlDeadband: </label><div class='col-sm-8'><input id='controlDeadband' class='form-control' type='text'{{#controlDeadband}} value='{{controlDeadband}}'{{/controlDeadband}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='controlPulseHigh'>controlPulseHigh: </label><div class='col-sm-8'><input id='controlPulseHigh' class='form-control' type='text'{{#controlPulseHigh}} value='{{controlPulseHigh}}'{{/controlPulseHigh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='controlPulseLow'>controlPulseLow: </label><div class='col-sm-8'><input id='controlPulseLow' class='form-control' type='text'{{#controlPulseLow}} value='{{controlPulseLow}}'{{/controlPulseLow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='controlResponseRate'>controlResponseRate: </label><div class='col-sm-8'><input id='controlResponseRate' class='form-control' type='text'{{#controlResponseRate}} value='{{controlResponseRate}}'{{/controlResponseRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='efficiency'>efficiency: </label><div class='col-sm-8'><input id='efficiency' class='form-control' type='text'{{#efficiency}} value='{{efficiency}}'{{/efficiency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='genControlMode'>genControlMode: </label><div class='col-sm-8'><select id='genControlMode' class='form-control'>{{#GeneratorControlMode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/GeneratorControlMode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='genControlSource'>genControlSource: </label><div class='col-sm-8'><select id='genControlSource' class='form-control'>{{#GeneratorControlSource}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/GeneratorControlSource}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='governorMPL'>governorMPL: </label><div class='col-sm-8'><input id='governorMPL' class='form-control' type='text'{{#governorMPL}} value='{{governorMPL}}'{{/governorMPL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='governorSCD'>governorSCD: </label><div class='col-sm-8'><input id='governorSCD' class='form-control' type='text'{{#governorSCD}} value='{{governorSCD}}'{{/governorSCD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='highControlLimit'>highControlLimit: </label><div class='col-sm-8'><input id='highControlLimit' class='form-control' type='text'{{#highControlLimit}} value='{{highControlLimit}}'{{/highControlLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='initialP'>initialP: </label><div class='col-sm-8'><input id='initialP' class='form-control' type='text'{{#initialP}} value='{{initialP}}'{{/initialP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='longPF'>longPF: </label><div class='col-sm-8'><input id='longPF' class='form-control' type='text'{{#longPF}} value='{{longPF}}'{{/longPF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowControlLimit'>lowControlLimit: </label><div class='col-sm-8'><input id='lowControlLimit' class='form-control' type='text'{{#lowControlLimit}} value='{{lowControlLimit}}'{{/lowControlLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowerRampRate'>lowerRampRate: </label><div class='col-sm-8'><input id='lowerRampRate' class='form-control' type='text'{{#lowerRampRate}} value='{{lowerRampRate}}'{{/lowerRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxEconomicP'>maxEconomicP: </label><div class='col-sm-8'><input id='maxEconomicP' class='form-control' type='text'{{#maxEconomicP}} value='{{maxEconomicP}}'{{/maxEconomicP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maximumAllowableSpinningReserve'>maximumAllowableSpinningReserve: </label><div class='col-sm-8'><input id='maximumAllowableSpinningReserve' class='form-control' type='text'{{#maximumAllowableSpinningReserve}} value='{{maximumAllowableSpinningReserve}}'{{/maximumAllowableSpinningReserve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxOperatingP'>maxOperatingP: </label><div class='col-sm-8'><input id='maxOperatingP' class='form-control' type='text'{{#maxOperatingP}} value='{{maxOperatingP}}'{{/maxOperatingP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minEconomicP'>minEconomicP: </label><div class='col-sm-8'><input id='minEconomicP' class='form-control' type='text'{{#minEconomicP}} value='{{minEconomicP}}'{{/minEconomicP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumOffTime'>minimumOffTime: </label><div class='col-sm-8'><input id='minimumOffTime' class='form-control' type='text'{{#minimumOffTime}} value='{{minimumOffTime}}'{{/minimumOffTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minOperatingP'>minOperatingP: </label><div class='col-sm-8'><input id='minOperatingP' class='form-control' type='text'{{#minOperatingP}} value='{{minOperatingP}}'{{/minOperatingP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='modelDetail'>modelDetail: </label><div class='col-sm-8'><input id='modelDetail' class='form-control' type='text'{{#modelDetail}} value='{{modelDetail}}'{{/modelDetail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='nominalP'>nominalP: </label><div class='col-sm-8'><input id='nominalP' class='form-control' type='text'{{#nominalP}} value='{{nominalP}}'{{/nominalP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='normalPF'>normalPF: </label><div class='col-sm-8'><input id='normalPF' class='form-control' type='text'{{#normalPF}} value='{{normalPF}}'{{/normalPF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='penaltyFactor'>penaltyFactor: </label><div class='col-sm-8'><input id='penaltyFactor' class='form-control' type='text'{{#penaltyFactor}} value='{{penaltyFactor}}'{{/penaltyFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='raiseRampRate'>raiseRampRate: </label><div class='col-sm-8'><input id='raiseRampRate' class='form-control' type='text'{{#raiseRampRate}} value='{{raiseRampRate}}'{{/raiseRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedGrossMaxP'>ratedGrossMaxP: </label><div class='col-sm-8'><input id='ratedGrossMaxP' class='form-control' type='text'{{#ratedGrossMaxP}} value='{{ratedGrossMaxP}}'{{/ratedGrossMaxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedGrossMinP'>ratedGrossMinP: </label><div class='col-sm-8'><input id='ratedGrossMinP' class='form-control' type='text'{{#ratedGrossMinP}} value='{{ratedGrossMinP}}'{{/ratedGrossMinP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedNetMaxP'>ratedNetMaxP: </label><div class='col-sm-8'><input id='ratedNetMaxP' class='form-control' type='text'{{#ratedNetMaxP}} value='{{ratedNetMaxP}}'{{/ratedNetMaxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shortPF'>shortPF: </label><div class='col-sm-8'><input id='shortPF' class='form-control' type='text'{{#shortPF}} value='{{shortPF}}'{{/shortPF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startupCost'>startupCost: </label><div class='col-sm-8'><input id='startupCost' class='form-control' type='text'{{#startupCost}} value='{{startupCost}}'{{/startupCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startupTime'>startupTime: </label><div class='col-sm-8'><input id='startupTime' class='form-control' type='text'{{#startupTime}} value='{{startupTime}}'{{/startupTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tieLinePF'>tieLinePF: </label><div class='col-sm-8'><input id='tieLinePF' class='form-control' type='text'{{#tieLinePF}} value='{{tieLinePF}}'{{/tieLinePF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='variableCost'>variableCost: </label><div class='col-sm-8'><input id='variableCost' class='form-control' type='text'{{#variableCost}} value='{{variableCost}}'{{/variableCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='totalEfficiency'>totalEfficiency: </label><div class='col-sm-8'><input id='totalEfficiency' class='form-control' type='text'{{#totalEfficiency}} value='{{totalEfficiency}}'{{/totalEfficiency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GenUnitOpSchedule'>GenUnitOpSchedule: </label><div class='col-sm-8'><input id='GenUnitOpSchedule' class='form-control' type='text'{{#GenUnitOpSchedule}} value='{{GenUnitOpSchedule}}'{{/GenUnitOpSchedule}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["RotatingMachine", "RotatingMachine", "1..*", "0..1"],
                        ["GenUnitOpSchedule", "GenUnitOpSchedule", "0..1", "1"],
                        ["GenUnitOpCostCurves", "GenUnitOpCostCurve", "0..*", "1"],
                        ["ControlAreaGeneratingUnit", "ControlAreaGeneratingUnit", "0..*", "1"],
                        ["GrossToNetActivePowerCurves", "GrossToNetActivePowerCurve", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * A hydro power station which can generate or pump.
         *
         * When generating, the generator turbines receive water from an upper reservoir. When pumping, the pumps receive their water from a lower reservoir.
         *
         */
        class HydroPowerPlant extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HydroPowerPlant;
                if (null == bucket)
                   cim_data.HydroPowerPlant = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HydroPowerPlant[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "HydroPowerPlant";
                base.parse_element (/<cim:HydroPowerPlant.dischargeTravelDelay>([\s\S]*?)<\/cim:HydroPowerPlant.dischargeTravelDelay>/g, obj, "dischargeTravelDelay", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.genRatedP>([\s\S]*?)<\/cim:HydroPowerPlant.genRatedP>/g, obj, "genRatedP", base.to_string, sub, context);
                base.parse_attribute (/<cim:HydroPowerPlant.hydroPlantStorageType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "hydroPlantStorageType", sub, context);
                base.parse_element (/<cim:HydroPowerPlant.penstockType>([\s\S]*?)<\/cim:HydroPowerPlant.penstockType>/g, obj, "penstockType", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.plantDischargeCapacity>([\s\S]*?)<\/cim:HydroPowerPlant.plantDischargeCapacity>/g, obj, "plantDischargeCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.plantRatedHead>([\s\S]*?)<\/cim:HydroPowerPlant.plantRatedHead>/g, obj, "plantRatedHead", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.pumpRatedP>([\s\S]*?)<\/cim:HydroPowerPlant.pumpRatedP>/g, obj, "pumpRatedP", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.surgeTankCode>([\s\S]*?)<\/cim:HydroPowerPlant.surgeTankCode>/g, obj, "surgeTankCode", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.surgeTankCrestLevel>([\s\S]*?)<\/cim:HydroPowerPlant.surgeTankCrestLevel>/g, obj, "surgeTankCrestLevel", base.to_string, sub, context);
                base.parse_attributes (/<cim:HydroPowerPlant.HydroPumps\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPumps", sub, context);
                base.parse_attribute (/<cim:HydroPowerPlant.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
                base.parse_attribute (/<cim:HydroPowerPlant.GenSourcePumpDischargeReservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenSourcePumpDischargeReservoir", sub, context);
                base.parse_attributes (/<cim:HydroPowerPlant.HydroGeneratingUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnits", sub, context);
                var bucket = context.parsed.HydroPowerPlant;
                if (null == bucket)
                   context.parsed.HydroPowerPlant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "HydroPowerPlant", "dischargeTravelDelay", base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "genRatedP", base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "hydroPlantStorageType", base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "penstockType", base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "plantDischargeCapacity", base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "plantRatedHead", base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "pumpRatedP", base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "surgeTankCode", base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "surgeTankCrestLevel", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "HydroPowerPlant", fields);
                base.export_attribute (obj, "export_attribute", "HydroPowerPlant", fields);
                base.export_attribute (obj, "export_attribute", "HydroPowerPlant", fields);
                base.export_attribute (obj, "export_attributes", "HydroPowerPlant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HydroPowerPlant_collapse" aria-expanded="true" aria-controls="HydroPowerPlant_collapse" style="margin-left: 10px;">HydroPowerPlant</a></legend>
                    <div id="HydroPowerPlant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#dischargeTravelDelay}}<div><b>dischargeTravelDelay</b>: {{dischargeTravelDelay}}</div>{{/dischargeTravelDelay}}
                    {{#genRatedP}}<div><b>genRatedP</b>: {{genRatedP}}</div>{{/genRatedP}}
                    {{#hydroPlantStorageType}}<div><b>hydroPlantStorageType</b>: {{hydroPlantStorageType}}</div>{{/hydroPlantStorageType}}
                    {{#penstockType}}<div><b>penstockType</b>: {{penstockType}}</div>{{/penstockType}}
                    {{#plantDischargeCapacity}}<div><b>plantDischargeCapacity</b>: {{plantDischargeCapacity}}</div>{{/plantDischargeCapacity}}
                    {{#plantRatedHead}}<div><b>plantRatedHead</b>: {{plantRatedHead}}</div>{{/plantRatedHead}}
                    {{#pumpRatedP}}<div><b>pumpRatedP</b>: {{pumpRatedP}}</div>{{/pumpRatedP}}
                    {{#surgeTankCode}}<div><b>surgeTankCode</b>: {{surgeTankCode}}</div>{{/surgeTankCode}}
                    {{#surgeTankCrestLevel}}<div><b>surgeTankCrestLevel</b>: {{surgeTankCrestLevel}}</div>{{/surgeTankCrestLevel}}
                    {{#HydroPumps}}<div><b>HydroPumps</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/HydroPumps}}
                    {{#Reservoir}}<div><b>Reservoir</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Reservoir}}&quot;);})'>{{Reservoir}}</a></div>{{/Reservoir}}
                    {{#GenSourcePumpDischargeReservoir}}<div><b>GenSourcePumpDischargeReservoir</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GenSourcePumpDischargeReservoir}}&quot;);})'>{{GenSourcePumpDischargeReservoir}}</a></div>{{/GenSourcePumpDischargeReservoir}}
                    {{#HydroGeneratingUnits}}<div><b>HydroGeneratingUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/HydroGeneratingUnits}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.HydroPlantStorageKind = []; if (!obj.hydroPlantStorageType) obj.HydroPlantStorageKind.push ({ id: '', selected: true}); for (var property in HydroPlantStorageKind) obj.HydroPlantStorageKind.push ({ id: property, selected: obj.hydroPlantStorageType && obj.hydroPlantStorageType.endsWith ('.' + property)});
                if (obj.HydroPumps) obj.HydroPumps_string = obj.HydroPumps.join ();
                if (obj.HydroGeneratingUnits) obj.HydroGeneratingUnits_string = obj.HydroGeneratingUnits.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.HydroPlantStorageKind;
                delete obj.HydroPumps_string;
                delete obj.HydroGeneratingUnits_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HydroPowerPlant_collapse" aria-expanded="true" aria-controls="HydroPowerPlant_collapse" style="margin-left: 10px;">HydroPowerPlant</a></legend>
                    <div id="HydroPowerPlant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dischargeTravelDelay'>dischargeTravelDelay: </label><div class='col-sm-8'><input id='dischargeTravelDelay' class='form-control' type='text'{{#dischargeTravelDelay}} value='{{dischargeTravelDelay}}'{{/dischargeTravelDelay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='genRatedP'>genRatedP: </label><div class='col-sm-8'><input id='genRatedP' class='form-control' type='text'{{#genRatedP}} value='{{genRatedP}}'{{/genRatedP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hydroPlantStorageType'>hydroPlantStorageType: </label><div class='col-sm-8'><select id='hydroPlantStorageType' class='form-control'>{{#HydroPlantStorageKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/HydroPlantStorageKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='penstockType'>penstockType: </label><div class='col-sm-8'><input id='penstockType' class='form-control' type='text'{{#penstockType}} value='{{penstockType}}'{{/penstockType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='plantDischargeCapacity'>plantDischargeCapacity: </label><div class='col-sm-8'><input id='plantDischargeCapacity' class='form-control' type='text'{{#plantDischargeCapacity}} value='{{plantDischargeCapacity}}'{{/plantDischargeCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='plantRatedHead'>plantRatedHead: </label><div class='col-sm-8'><input id='plantRatedHead' class='form-control' type='text'{{#plantRatedHead}} value='{{plantRatedHead}}'{{/plantRatedHead}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpRatedP'>pumpRatedP: </label><div class='col-sm-8'><input id='pumpRatedP' class='form-control' type='text'{{#pumpRatedP}} value='{{pumpRatedP}}'{{/pumpRatedP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='surgeTankCode'>surgeTankCode: </label><div class='col-sm-8'><input id='surgeTankCode' class='form-control' type='text'{{#surgeTankCode}} value='{{surgeTankCode}}'{{/surgeTankCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='surgeTankCrestLevel'>surgeTankCrestLevel: </label><div class='col-sm-8'><input id='surgeTankCrestLevel' class='form-control' type='text'{{#surgeTankCrestLevel}} value='{{surgeTankCrestLevel}}'{{/surgeTankCrestLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Reservoir'>Reservoir: </label><div class='col-sm-8'><input id='Reservoir' class='form-control' type='text'{{#Reservoir}} value='{{Reservoir}}'{{/Reservoir}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GenSourcePumpDischargeReservoir'>GenSourcePumpDischargeReservoir: </label><div class='col-sm-8'><input id='GenSourcePumpDischargeReservoir' class='form-control' type='text'{{#GenSourcePumpDischargeReservoir}} value='{{GenSourcePumpDischargeReservoir}}'{{/GenSourcePumpDischargeReservoir}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["HydroPumps", "HydroPump", "0..*", "0..1"],
                        ["Reservoir", "Reservoir", "0..1", "0..*"],
                        ["GenSourcePumpDischargeReservoir", "Reservoir", "1", "0..*"],
                        ["HydroGeneratingUnits", "HydroGeneratingUnit", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * The hydro pump's Operator-approved current operating schedule (or plan), typically produced with the aid of unit commitment type analyses.
         *
         * The unit's operating schedule status is typically given as: (0=unavailable) (1=avilable to startup or shutdown)  (2=must pump).
         *
         */
        class HydroPumpOpSchedule extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HydroPumpOpSchedule;
                if (null == bucket)
                   cim_data.HydroPumpOpSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HydroPumpOpSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "HydroPumpOpSchedule";
                base.parse_attribute (/<cim:HydroPumpOpSchedule.HydroPump\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPump", sub, context);
                var bucket = context.parsed.HydroPumpOpSchedule;
                if (null == bucket)
                   context.parsed.HydroPumpOpSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "HydroPumpOpSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HydroPumpOpSchedule_collapse" aria-expanded="true" aria-controls="HydroPumpOpSchedule_collapse" style="margin-left: 10px;">HydroPumpOpSchedule</a></legend>
                    <div id="HydroPumpOpSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#HydroPump}}<div><b>HydroPump</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroPump}}&quot;);})'>{{HydroPump}}</a></div>{{/HydroPump}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HydroPumpOpSchedule_collapse" aria-expanded="true" aria-controls="HydroPumpOpSchedule_collapse" style="margin-left: 10px;">HydroPumpOpSchedule</a></legend>
                    <div id="HydroPumpOpSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HydroPump'>HydroPump: </label><div class='col-sm-8'><input id='HydroPump' class='form-control' type='text'{{#HydroPump}} value='{{HydroPump}}'{{/HydroPump}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["HydroPump", "HydroPump", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Relationship between the rate in gross active power/minute (Y-axis) at which a unit should be shutdown and its present gross MW output (X-axis).
         *
         */
        class ShutdownCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ShutdownCurve;
                if (null == bucket)
                   cim_data.ShutdownCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ShutdownCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "ShutdownCurve";
                base.parse_element (/<cim:ShutdownCurve.shutdownCost>([\s\S]*?)<\/cim:ShutdownCurve.shutdownCost>/g, obj, "shutdownCost", base.to_string, sub, context);
                base.parse_element (/<cim:ShutdownCurve.shutdownDate>([\s\S]*?)<\/cim:ShutdownCurve.shutdownDate>/g, obj, "shutdownDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:ShutdownCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                var bucket = context.parsed.ShutdownCurve;
                if (null == bucket)
                   context.parsed.ShutdownCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "ShutdownCurve", "shutdownCost", base.from_string, fields);
                base.export_element (obj, "ShutdownCurve", "shutdownDate", base.from_datetime, fields);
                base.export_attribute (obj, "export_attribute", "ShutdownCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ShutdownCurve_collapse" aria-expanded="true" aria-controls="ShutdownCurve_collapse" style="margin-left: 10px;">ShutdownCurve</a></legend>
                    <div id="ShutdownCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#shutdownCost}}<div><b>shutdownCost</b>: {{shutdownCost}}</div>{{/shutdownCost}}
                    {{#shutdownDate}}<div><b>shutdownDate</b>: {{shutdownDate}}</div>{{/shutdownDate}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ShutdownCurve_collapse" aria-expanded="true" aria-controls="ShutdownCurve_collapse" style="margin-left: 10px;">ShutdownCurve</a></legend>
                    <div id="ShutdownCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shutdownCost'>shutdownCost: </label><div class='col-sm-8'><input id='shutdownCost' class='form-control' type='text'{{#shutdownCost}} value='{{shutdownCost}}'{{/shutdownCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shutdownDate'>shutdownDate: </label><div class='col-sm-8'><input id='shutdownDate' class='form-control' type='text'{{#shutdownDate}} value='{{shutdownDate}}'{{/shutdownDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ThermalGeneratingUnit", "ThermalGeneratingUnit", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Accounts for tracking emissions usage and credits for thermal generating units.
         *
         * A unit may have zero or more emission accounts, and will typically have one for tracking usage and one for tracking credits.
         *
         */
        class EmissionAccount extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EmissionAccount;
                if (null == bucket)
                   cim_data.EmissionAccount = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EmissionAccount[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "EmissionAccount";
                base.parse_attribute (/<cim:EmissionAccount.emissionType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "emissionType", sub, context);
                base.parse_attribute (/<cim:EmissionAccount.emissionValueSource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "emissionValueSource", sub, context);
                base.parse_attribute (/<cim:EmissionAccount.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                var bucket = context.parsed.EmissionAccount;
                if (null == bucket)
                   context.parsed.EmissionAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "EmissionAccount", "emissionType", base.from_string, fields);
                base.export_element (obj, "EmissionAccount", "emissionValueSource", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "EmissionAccount", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EmissionAccount_collapse" aria-expanded="true" aria-controls="EmissionAccount_collapse" style="margin-left: 10px;">EmissionAccount</a></legend>
                    <div id="EmissionAccount_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#emissionType}}<div><b>emissionType</b>: {{emissionType}}</div>{{/emissionType}}
                    {{#emissionValueSource}}<div><b>emissionValueSource</b>: {{emissionValueSource}}</div>{{/emissionValueSource}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.EmissionType = []; if (!obj.emissionType) obj.EmissionType.push ({ id: '', selected: true}); for (var property in EmissionType) obj.EmissionType.push ({ id: property, selected: obj.emissionType && obj.emissionType.endsWith ('.' + property)});
                obj.EmissionValueSource = []; if (!obj.emissionValueSource) obj.EmissionValueSource.push ({ id: '', selected: true}); for (var property in EmissionValueSource) obj.EmissionValueSource.push ({ id: property, selected: obj.emissionValueSource && obj.emissionValueSource.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EmissionType;
                delete obj.EmissionValueSource;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EmissionAccount_collapse" aria-expanded="true" aria-controls="EmissionAccount_collapse" style="margin-left: 10px;">EmissionAccount</a></legend>
                    <div id="EmissionAccount_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='emissionType'>emissionType: </label><div class='col-sm-8'><select id='emissionType' class='form-control'>{{#EmissionType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/EmissionType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='emissionValueSource'>emissionValueSource: </label><div class='col-sm-8'><select id='emissionValueSource' class='form-control'>{{#EmissionValueSource}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/EmissionValueSource}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ThermalGeneratingUnit", "ThermalGeneratingUnit", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Relationship between unit heat input in energy per time for main fuel (Y1-axis) and supplemental fuel (Y2-axis) versus unit output in active power (X-axis).
         *
         * The quantity of main fuel used to sustain generation at this output level is prorated for throttling between definition points. The quantity of supplemental fuel used at this output level is fixed and not prorated.
         *
         */
        class HeatInputCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HeatInputCurve;
                if (null == bucket)
                   cim_data.HeatInputCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HeatInputCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "HeatInputCurve";
                base.parse_element (/<cim:HeatInputCurve.auxPowerMult>([\s\S]*?)<\/cim:HeatInputCurve.auxPowerMult>/g, obj, "auxPowerMult", base.to_string, sub, context);
                base.parse_element (/<cim:HeatInputCurve.auxPowerOffset>([\s\S]*?)<\/cim:HeatInputCurve.auxPowerOffset>/g, obj, "auxPowerOffset", base.to_string, sub, context);
                base.parse_element (/<cim:HeatInputCurve.heatInputEff>([\s\S]*?)<\/cim:HeatInputCurve.heatInputEff>/g, obj, "heatInputEff", base.to_string, sub, context);
                base.parse_element (/<cim:HeatInputCurve.heatInputOffset>([\s\S]*?)<\/cim:HeatInputCurve.heatInputOffset>/g, obj, "heatInputOffset", base.to_string, sub, context);
                base.parse_element (/<cim:HeatInputCurve.isNetGrossP>([\s\S]*?)<\/cim:HeatInputCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:HeatInputCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                var bucket = context.parsed.HeatInputCurve;
                if (null == bucket)
                   context.parsed.HeatInputCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "HeatInputCurve", "auxPowerMult", base.from_string, fields);
                base.export_element (obj, "HeatInputCurve", "auxPowerOffset", base.from_string, fields);
                base.export_element (obj, "HeatInputCurve", "heatInputEff", base.from_string, fields);
                base.export_element (obj, "HeatInputCurve", "heatInputOffset", base.from_string, fields);
                base.export_element (obj, "HeatInputCurve", "isNetGrossP", base.from_boolean, fields);
                base.export_attribute (obj, "export_attribute", "HeatInputCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HeatInputCurve_collapse" aria-expanded="true" aria-controls="HeatInputCurve_collapse" style="margin-left: 10px;">HeatInputCurve</a></legend>
                    <div id="HeatInputCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#auxPowerMult}}<div><b>auxPowerMult</b>: {{auxPowerMult}}</div>{{/auxPowerMult}}
                    {{#auxPowerOffset}}<div><b>auxPowerOffset</b>: {{auxPowerOffset}}</div>{{/auxPowerOffset}}
                    {{#heatInputEff}}<div><b>heatInputEff</b>: {{heatInputEff}}</div>{{/heatInputEff}}
                    {{#heatInputOffset}}<div><b>heatInputOffset</b>: {{heatInputOffset}}</div>{{/heatInputOffset}}
                    {{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HeatInputCurve_collapse" aria-expanded="true" aria-controls="HeatInputCurve_collapse" style="margin-left: 10px;">HeatInputCurve</a></legend>
                    <div id="HeatInputCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='auxPowerMult'>auxPowerMult: </label><div class='col-sm-8'><input id='auxPowerMult' class='form-control' type='text'{{#auxPowerMult}} value='{{auxPowerMult}}'{{/auxPowerMult}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='auxPowerOffset'>auxPowerOffset: </label><div class='col-sm-8'><input id='auxPowerOffset' class='form-control' type='text'{{#auxPowerOffset}} value='{{auxPowerOffset}}'{{/auxPowerOffset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='heatInputEff'>heatInputEff: </label><div class='col-sm-8'><input id='heatInputEff' class='form-control' type='text'{{#heatInputEff}} value='{{heatInputEff}}'{{/heatInputEff}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='heatInputOffset'>heatInputOffset: </label><div class='col-sm-8'><input id='heatInputOffset' class='form-control' type='text'{{#heatInputOffset}} value='{{heatInputOffset}}'{{/heatInputOffset}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isNetGrossP'>isNetGrossP: </label><div class='col-sm-8'><input id='isNetGrossP' class='form-check-input' type='checkbox'{{#isNetGrossP}} checked{{/isNetGrossP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ThermalGeneratingUnit", "ThermalGeneratingUnit", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Unit start up characteristics depending on how long the unit has been off line.
         *
         */
        class StartupModel extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StartupModel;
                if (null == bucket)
                   cim_data.StartupModel = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StartupModel[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "StartupModel";
                base.parse_element (/<cim:StartupModel.fixedMaintCost>([\s\S]*?)<\/cim:StartupModel.fixedMaintCost>/g, obj, "fixedMaintCost", base.to_string, sub, context);
                base.parse_element (/<cim:StartupModel.hotStandbyHeat>([\s\S]*?)<\/cim:StartupModel.hotStandbyHeat>/g, obj, "hotStandbyHeat", base.to_string, sub, context);
                base.parse_element (/<cim:StartupModel.incrementalMaintCost>([\s\S]*?)<\/cim:StartupModel.incrementalMaintCost>/g, obj, "incrementalMaintCost", base.to_string, sub, context);
                base.parse_element (/<cim:StartupModel.minimumDownTime>([\s\S]*?)<\/cim:StartupModel.minimumDownTime>/g, obj, "minimumDownTime", base.to_string, sub, context);
                base.parse_element (/<cim:StartupModel.minimumRunTime>([\s\S]*?)<\/cim:StartupModel.minimumRunTime>/g, obj, "minimumRunTime", base.to_string, sub, context);
                base.parse_element (/<cim:StartupModel.riskFactorCost>([\s\S]*?)<\/cim:StartupModel.riskFactorCost>/g, obj, "riskFactorCost", base.to_string, sub, context);
                base.parse_element (/<cim:StartupModel.startupCost>([\s\S]*?)<\/cim:StartupModel.startupCost>/g, obj, "startupCost", base.to_string, sub, context);
                base.parse_element (/<cim:StartupModel.startupDate>([\s\S]*?)<\/cim:StartupModel.startupDate>/g, obj, "startupDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:StartupModel.startupPriority>([\s\S]*?)<\/cim:StartupModel.startupPriority>/g, obj, "startupPriority", base.to_string, sub, context);
                base.parse_element (/<cim:StartupModel.stbyAuxP>([\s\S]*?)<\/cim:StartupModel.stbyAuxP>/g, obj, "stbyAuxP", base.to_string, sub, context);
                base.parse_attribute (/<cim:StartupModel.StartIgnFuelCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartIgnFuelCurve", sub, context);
                base.parse_attribute (/<cim:StartupModel.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                base.parse_attribute (/<cim:StartupModel.StartMainFuelCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartMainFuelCurve", sub, context);
                base.parse_attribute (/<cim:StartupModel.StartRampCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartRampCurve", sub, context);
                var bucket = context.parsed.StartupModel;
                if (null == bucket)
                   context.parsed.StartupModel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "StartupModel", "fixedMaintCost", base.from_string, fields);
                base.export_element (obj, "StartupModel", "hotStandbyHeat", base.from_string, fields);
                base.export_element (obj, "StartupModel", "incrementalMaintCost", base.from_string, fields);
                base.export_element (obj, "StartupModel", "minimumDownTime", base.from_string, fields);
                base.export_element (obj, "StartupModel", "minimumRunTime", base.from_string, fields);
                base.export_element (obj, "StartupModel", "riskFactorCost", base.from_string, fields);
                base.export_element (obj, "StartupModel", "startupCost", base.from_string, fields);
                base.export_element (obj, "StartupModel", "startupDate", base.from_datetime, fields);
                base.export_element (obj, "StartupModel", "startupPriority", base.from_string, fields);
                base.export_element (obj, "StartupModel", "stbyAuxP", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "StartupModel", fields);
                base.export_attribute (obj, "export_attribute", "StartupModel", fields);
                base.export_attribute (obj, "export_attribute", "StartupModel", fields);
                base.export_attribute (obj, "export_attribute", "StartupModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartupModel_collapse" aria-expanded="true" aria-controls="StartupModel_collapse" style="margin-left: 10px;">StartupModel</a></legend>
                    <div id="StartupModel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#fixedMaintCost}}<div><b>fixedMaintCost</b>: {{fixedMaintCost}}</div>{{/fixedMaintCost}}
                    {{#hotStandbyHeat}}<div><b>hotStandbyHeat</b>: {{hotStandbyHeat}}</div>{{/hotStandbyHeat}}
                    {{#incrementalMaintCost}}<div><b>incrementalMaintCost</b>: {{incrementalMaintCost}}</div>{{/incrementalMaintCost}}
                    {{#minimumDownTime}}<div><b>minimumDownTime</b>: {{minimumDownTime}}</div>{{/minimumDownTime}}
                    {{#minimumRunTime}}<div><b>minimumRunTime</b>: {{minimumRunTime}}</div>{{/minimumRunTime}}
                    {{#riskFactorCost}}<div><b>riskFactorCost</b>: {{riskFactorCost}}</div>{{/riskFactorCost}}
                    {{#startupCost}}<div><b>startupCost</b>: {{startupCost}}</div>{{/startupCost}}
                    {{#startupDate}}<div><b>startupDate</b>: {{startupDate}}</div>{{/startupDate}}
                    {{#startupPriority}}<div><b>startupPriority</b>: {{startupPriority}}</div>{{/startupPriority}}
                    {{#stbyAuxP}}<div><b>stbyAuxP</b>: {{stbyAuxP}}</div>{{/stbyAuxP}}
                    {{#StartIgnFuelCurve}}<div><b>StartIgnFuelCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartIgnFuelCurve}}&quot;);})'>{{StartIgnFuelCurve}}</a></div>{{/StartIgnFuelCurve}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
                    {{#StartMainFuelCurve}}<div><b>StartMainFuelCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartMainFuelCurve}}&quot;);})'>{{StartMainFuelCurve}}</a></div>{{/StartMainFuelCurve}}
                    {{#StartRampCurve}}<div><b>StartRampCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartRampCurve}}&quot;);})'>{{StartRampCurve}}</a></div>{{/StartRampCurve}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StartupModel_collapse" aria-expanded="true" aria-controls="StartupModel_collapse" style="margin-left: 10px;">StartupModel</a></legend>
                    <div id="StartupModel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fixedMaintCost'>fixedMaintCost: </label><div class='col-sm-8'><input id='fixedMaintCost' class='form-control' type='text'{{#fixedMaintCost}} value='{{fixedMaintCost}}'{{/fixedMaintCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hotStandbyHeat'>hotStandbyHeat: </label><div class='col-sm-8'><input id='hotStandbyHeat' class='form-control' type='text'{{#hotStandbyHeat}} value='{{hotStandbyHeat}}'{{/hotStandbyHeat}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='incrementalMaintCost'>incrementalMaintCost: </label><div class='col-sm-8'><input id='incrementalMaintCost' class='form-control' type='text'{{#incrementalMaintCost}} value='{{incrementalMaintCost}}'{{/incrementalMaintCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumDownTime'>minimumDownTime: </label><div class='col-sm-8'><input id='minimumDownTime' class='form-control' type='text'{{#minimumDownTime}} value='{{minimumDownTime}}'{{/minimumDownTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumRunTime'>minimumRunTime: </label><div class='col-sm-8'><input id='minimumRunTime' class='form-control' type='text'{{#minimumRunTime}} value='{{minimumRunTime}}'{{/minimumRunTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='riskFactorCost'>riskFactorCost: </label><div class='col-sm-8'><input id='riskFactorCost' class='form-control' type='text'{{#riskFactorCost}} value='{{riskFactorCost}}'{{/riskFactorCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startupCost'>startupCost: </label><div class='col-sm-8'><input id='startupCost' class='form-control' type='text'{{#startupCost}} value='{{startupCost}}'{{/startupCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startupDate'>startupDate: </label><div class='col-sm-8'><input id='startupDate' class='form-control' type='text'{{#startupDate}} value='{{startupDate}}'{{/startupDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startupPriority'>startupPriority: </label><div class='col-sm-8'><input id='startupPriority' class='form-control' type='text'{{#startupPriority}} value='{{startupPriority}}'{{/startupPriority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='stbyAuxP'>stbyAuxP: </label><div class='col-sm-8'><input id='stbyAuxP' class='form-control' type='text'{{#stbyAuxP}} value='{{stbyAuxP}}'{{/stbyAuxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StartIgnFuelCurve'>StartIgnFuelCurve: </label><div class='col-sm-8'><input id='StartIgnFuelCurve' class='form-control' type='text'{{#StartIgnFuelCurve}} value='{{StartIgnFuelCurve}}'{{/StartIgnFuelCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StartMainFuelCurve'>StartMainFuelCurve: </label><div class='col-sm-8'><input id='StartMainFuelCurve' class='form-control' type='text'{{#StartMainFuelCurve}} value='{{StartMainFuelCurve}}'{{/StartMainFuelCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StartRampCurve'>StartRampCurve: </label><div class='col-sm-8'><input id='StartRampCurve' class='form-control' type='text'{{#StartRampCurve}} value='{{StartRampCurve}}'{{/StartRampCurve}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["StartIgnFuelCurve", "StartIgnFuelCurve", "0..1", "1"],
                        ["ThermalGeneratingUnit", "ThermalGeneratingUnit", "1", "0..1"],
                        ["StartMainFuelCurve", "StartMainFuelCurve", "0..1", "1"],
                        ["StartRampCurve", "StartRampCurve", "0..1", "1"]
                    ]
                );
            }
        }

        /**
         * Cost, in units of currency, per quantity of heat generated.
         *
         */
        class CostPerHeatUnit extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CostPerHeatUnit;
                if (null == bucket)
                   cim_data.CostPerHeatUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CostPerHeatUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CostPerHeatUnit";
                base.parse_element (/<cim:CostPerHeatUnit.denominatorMultiplier>([\s\S]*?)<\/cim:CostPerHeatUnit.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:CostPerHeatUnit.denominatorUnit>([\s\S]*?)<\/cim:CostPerHeatUnit.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:CostPerHeatUnit.multiplier>([\s\S]*?)<\/cim:CostPerHeatUnit.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:CostPerHeatUnit.unit>([\s\S]*?)<\/cim:CostPerHeatUnit.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:CostPerHeatUnit.value>([\s\S]*?)<\/cim:CostPerHeatUnit.value>/g, obj, "value", base.to_float, sub, context);
                var bucket = context.parsed.CostPerHeatUnit;
                if (null == bucket)
                   context.parsed.CostPerHeatUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CostPerHeatUnit", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "CostPerHeatUnit", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "CostPerHeatUnit", "multiplier", base.from_string, fields);
                base.export_element (obj, "CostPerHeatUnit", "unit", base.from_string, fields);
                base.export_element (obj, "CostPerHeatUnit", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CostPerHeatUnit_collapse" aria-expanded="true" aria-controls="CostPerHeatUnit_collapse" style="margin-left: 10px;">CostPerHeatUnit</a></legend>
                    <div id="CostPerHeatUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CostPerHeatUnit_collapse" aria-expanded="true" aria-controls="CostPerHeatUnit_collapse" style="margin-left: 10px;">CostPerHeatUnit</a></legend>
                    <div id="CostPerHeatUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><input id='denominatorMultiplier' class='form-control' type='text'{{#denominatorMultiplier}} value='{{denominatorMultiplier}}'{{/denominatorMultiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><input id='denominatorUnit' class='form-control' type='text'{{#denominatorUnit}} value='{{denominatorUnit}}'{{/denominatorUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='multiplier'>multiplier: </label><div class='col-sm-8'><input id='multiplier' class='form-control' type='text'{{#multiplier}} value='{{multiplier}}'{{/multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unit'>unit: </label><div class='col-sm-8'><input id='unit' class='form-control' type='text'{{#unit}} value='{{unit}}'{{/unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * A set of combustion turbines and steam turbines where the exhaust heat from the combustion turbines is recovered to make steam for the steam turbines, resulting in greater overall plant efficiency.
         *
         */
        class CombinedCyclePlant extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CombinedCyclePlant;
                if (null == bucket)
                   cim_data.CombinedCyclePlant = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CombinedCyclePlant[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "CombinedCyclePlant";
                base.parse_element (/<cim:CombinedCyclePlant.combCyclePlantRating>([\s\S]*?)<\/cim:CombinedCyclePlant.combCyclePlantRating>/g, obj, "combCyclePlantRating", base.to_string, sub, context);
                base.parse_attributes (/<cim:CombinedCyclePlant.ThermalGeneratingUnits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnits", sub, context);
                var bucket = context.parsed.CombinedCyclePlant;
                if (null == bucket)
                   context.parsed.CombinedCyclePlant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "CombinedCyclePlant", "combCyclePlantRating", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "CombinedCyclePlant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CombinedCyclePlant_collapse" aria-expanded="true" aria-controls="CombinedCyclePlant_collapse" style="margin-left: 10px;">CombinedCyclePlant</a></legend>
                    <div id="CombinedCyclePlant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#combCyclePlantRating}}<div><b>combCyclePlantRating</b>: {{combCyclePlantRating}}</div>{{/combCyclePlantRating}}
                    {{#ThermalGeneratingUnits}}<div><b>ThermalGeneratingUnits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ThermalGeneratingUnits}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ThermalGeneratingUnits) obj.ThermalGeneratingUnits_string = obj.ThermalGeneratingUnits.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ThermalGeneratingUnits_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CombinedCyclePlant_collapse" aria-expanded="true" aria-controls="CombinedCyclePlant_collapse" style="margin-left: 10px;">CombinedCyclePlant</a></legend>
                    <div id="CombinedCyclePlant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='combCyclePlantRating'>combCyclePlantRating: </label><div class='col-sm-8'><input id='combCyclePlantRating' class='form-control' type='text'{{#combCyclePlantRating}} value='{{combCyclePlantRating}}'{{/combCyclePlantRating}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ThermalGeneratingUnits", "ThermalGeneratingUnit", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Reservoir water level targets from advanced studies or "rule curves".
         *
         * Typically in one hour increments for up to 10 days.
         *
         */
        class TargetLevelSchedule extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TargetLevelSchedule;
                if (null == bucket)
                   cim_data.TargetLevelSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TargetLevelSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "TargetLevelSchedule";
                base.parse_element (/<cim:TargetLevelSchedule.highLevelLimit>([\s\S]*?)<\/cim:TargetLevelSchedule.highLevelLimit>/g, obj, "highLevelLimit", base.to_string, sub, context);
                base.parse_element (/<cim:TargetLevelSchedule.lowLevelLimit>([\s\S]*?)<\/cim:TargetLevelSchedule.lowLevelLimit>/g, obj, "lowLevelLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:TargetLevelSchedule.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
                var bucket = context.parsed.TargetLevelSchedule;
                if (null == bucket)
                   context.parsed.TargetLevelSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "TargetLevelSchedule", "highLevelLimit", base.from_string, fields);
                base.export_element (obj, "TargetLevelSchedule", "lowLevelLimit", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "TargetLevelSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TargetLevelSchedule_collapse" aria-expanded="true" aria-controls="TargetLevelSchedule_collapse" style="margin-left: 10px;">TargetLevelSchedule</a></legend>
                    <div id="TargetLevelSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#highLevelLimit}}<div><b>highLevelLimit</b>: {{highLevelLimit}}</div>{{/highLevelLimit}}
                    {{#lowLevelLimit}}<div><b>lowLevelLimit</b>: {{lowLevelLimit}}</div>{{/lowLevelLimit}}
                    {{#Reservoir}}<div><b>Reservoir</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Reservoir}}&quot;);})'>{{Reservoir}}</a></div>{{/Reservoir}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TargetLevelSchedule_collapse" aria-expanded="true" aria-controls="TargetLevelSchedule_collapse" style="margin-left: 10px;">TargetLevelSchedule</a></legend>
                    <div id="TargetLevelSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='highLevelLimit'>highLevelLimit: </label><div class='col-sm-8'><input id='highLevelLimit' class='form-control' type='text'{{#highLevelLimit}} value='{{highLevelLimit}}'{{/highLevelLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowLevelLimit'>lowLevelLimit: </label><div class='col-sm-8'><input id='lowLevelLimit' class='form-control' type='text'{{#lowLevelLimit}} value='{{lowLevelLimit}}'{{/lowLevelLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Reservoir'>Reservoir: </label><div class='col-sm-8'><input id='Reservoir' class='form-control' type='text'{{#Reservoir}} value='{{Reservoir}}'{{/Reservoir}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Reservoir", "Reservoir", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Natural water inflow to a reservoir, usually forecasted from predicted rain and snowmelt.
         *
         * Typically in one hour increments for up to 10 days. The forecast is given in average cubic meters per second over the time increment.
         *
         */
        class InflowForecast extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InflowForecast;
                if (null == bucket)
                   cim_data.InflowForecast = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InflowForecast[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "InflowForecast";
                base.parse_attribute (/<cim:InflowForecast.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
                var bucket = context.parsed.InflowForecast;
                if (null == bucket)
                   context.parsed.InflowForecast = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "InflowForecast", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InflowForecast_collapse" aria-expanded="true" aria-controls="InflowForecast_collapse" style="margin-left: 10px;">InflowForecast</a></legend>
                    <div id="InflowForecast_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#Reservoir}}<div><b>Reservoir</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Reservoir}}&quot;);})'>{{Reservoir}}</a></div>{{/Reservoir}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InflowForecast_collapse" aria-expanded="true" aria-controls="InflowForecast_collapse" style="margin-left: 10px;">InflowForecast</a></legend>
                    <div id="InflowForecast_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Reservoir'>Reservoir: </label><div class='col-sm-8'><input id='Reservoir' class='form-control' type='text'{{#Reservoir}} value='{{Reservoir}}'{{/Reservoir}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Reservoir", "Reservoir", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A generating unit whose prime mover could be a steam turbine, combustion turbine, or diesel engine.
         *
         */
        class ThermalGeneratingUnit extends GeneratingUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ThermalGeneratingUnit;
                if (null == bucket)
                   cim_data.ThermalGeneratingUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ThermalGeneratingUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "ThermalGeneratingUnit";
                base.parse_element (/<cim:ThermalGeneratingUnit.oMCost>([\s\S]*?)<\/cim:ThermalGeneratingUnit.oMCost>/g, obj, "oMCost", base.to_string, sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.ShutdownCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShutdownCurve", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.CogenerationPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CogenerationPlant", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.HeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HeatRateCurve", sub, context);
                base.parse_attributes (/<cim:ThermalGeneratingUnit.EmissionCurves\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EmissionCurves", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.CAESPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CAESPlant", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
                base.parse_attributes (/<cim:ThermalGeneratingUnit.EmmissionAccounts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EmmissionAccounts", sub, context);
                base.parse_attributes (/<cim:ThermalGeneratingUnit.FuelAllocationSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FuelAllocationSchedules", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.CombinedCyclePlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCyclePlant", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.IncrementalHeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IncrementalHeatRateCurve", sub, context);
                base.parse_attributes (/<cim:ThermalGeneratingUnit.FossilFuels\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FossilFuels", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.HeatInputCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HeatInputCurve", sub, context);
                var bucket = context.parsed.ThermalGeneratingUnit;
                if (null == bucket)
                   context.parsed.ThermalGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = GeneratingUnit.prototype.export.call (this, obj, false);

                base.export_element (obj, "ThermalGeneratingUnit", "oMCost", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "export_attribute", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "export_attribute", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "export_attributes", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "export_attribute", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "export_attribute", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "export_attributes", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "export_attributes", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "export_attribute", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "export_attribute", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "export_attributes", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "export_attribute", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ThermalGeneratingUnit_collapse" aria-expanded="true" aria-controls="ThermalGeneratingUnit_collapse" style="margin-left: 10px;">ThermalGeneratingUnit</a></legend>
                    <div id="ThermalGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.template.call (this) +
                    `
                    {{#oMCost}}<div><b>oMCost</b>: {{oMCost}}</div>{{/oMCost}}
                    {{#ShutdownCurve}}<div><b>ShutdownCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ShutdownCurve}}&quot;);})'>{{ShutdownCurve}}</a></div>{{/ShutdownCurve}}
                    {{#CogenerationPlant}}<div><b>CogenerationPlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CogenerationPlant}}&quot;);})'>{{CogenerationPlant}}</a></div>{{/CogenerationPlant}}
                    {{#HeatRateCurve}}<div><b>HeatRateCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HeatRateCurve}}&quot;);})'>{{HeatRateCurve}}</a></div>{{/HeatRateCurve}}
                    {{#EmissionCurves}}<div><b>EmissionCurves</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EmissionCurves}}
                    {{#CAESPlant}}<div><b>CAESPlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CAESPlant}}&quot;);})'>{{CAESPlant}}</a></div>{{/CAESPlant}}
                    {{#StartupModel}}<div><b>StartupModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartupModel}}&quot;);})'>{{StartupModel}}</a></div>{{/StartupModel}}
                    {{#EmmissionAccounts}}<div><b>EmmissionAccounts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EmmissionAccounts}}
                    {{#FuelAllocationSchedules}}<div><b>FuelAllocationSchedules</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/FuelAllocationSchedules}}
                    {{#CombinedCyclePlant}}<div><b>CombinedCyclePlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CombinedCyclePlant}}&quot;);})'>{{CombinedCyclePlant}}</a></div>{{/CombinedCyclePlant}}
                    {{#IncrementalHeatRateCurve}}<div><b>IncrementalHeatRateCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IncrementalHeatRateCurve}}&quot;);})'>{{IncrementalHeatRateCurve}}</a></div>{{/IncrementalHeatRateCurve}}
                    {{#FossilFuels}}<div><b>FossilFuels</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/FossilFuels}}
                    {{#HeatInputCurve}}<div><b>HeatInputCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HeatInputCurve}}&quot;);})'>{{HeatInputCurve}}</a></div>{{/HeatInputCurve}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EmissionCurves) obj.EmissionCurves_string = obj.EmissionCurves.join ();
                if (obj.EmmissionAccounts) obj.EmmissionAccounts_string = obj.EmmissionAccounts.join ();
                if (obj.FuelAllocationSchedules) obj.FuelAllocationSchedules_string = obj.FuelAllocationSchedules.join ();
                if (obj.FossilFuels) obj.FossilFuels_string = obj.FossilFuels.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EmissionCurves_string;
                delete obj.EmmissionAccounts_string;
                delete obj.FuelAllocationSchedules_string;
                delete obj.FossilFuels_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ThermalGeneratingUnit_collapse" aria-expanded="true" aria-controls="ThermalGeneratingUnit_collapse" style="margin-left: 10px;">ThermalGeneratingUnit</a></legend>
                    <div id="ThermalGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oMCost'>oMCost: </label><div class='col-sm-8'><input id='oMCost' class='form-control' type='text'{{#oMCost}} value='{{oMCost}}'{{/oMCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ShutdownCurve'>ShutdownCurve: </label><div class='col-sm-8'><input id='ShutdownCurve' class='form-control' type='text'{{#ShutdownCurve}} value='{{ShutdownCurve}}'{{/ShutdownCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CogenerationPlant'>CogenerationPlant: </label><div class='col-sm-8'><input id='CogenerationPlant' class='form-control' type='text'{{#CogenerationPlant}} value='{{CogenerationPlant}}'{{/CogenerationPlant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HeatRateCurve'>HeatRateCurve: </label><div class='col-sm-8'><input id='HeatRateCurve' class='form-control' type='text'{{#HeatRateCurve}} value='{{HeatRateCurve}}'{{/HeatRateCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CAESPlant'>CAESPlant: </label><div class='col-sm-8'><input id='CAESPlant' class='form-control' type='text'{{#CAESPlant}} value='{{CAESPlant}}'{{/CAESPlant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='StartupModel'>StartupModel: </label><div class='col-sm-8'><input id='StartupModel' class='form-control' type='text'{{#StartupModel}} value='{{StartupModel}}'{{/StartupModel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CombinedCyclePlant'>CombinedCyclePlant: </label><div class='col-sm-8'><input id='CombinedCyclePlant' class='form-control' type='text'{{#CombinedCyclePlant}} value='{{CombinedCyclePlant}}'{{/CombinedCyclePlant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='IncrementalHeatRateCurve'>IncrementalHeatRateCurve: </label><div class='col-sm-8'><input id='IncrementalHeatRateCurve' class='form-control' type='text'{{#IncrementalHeatRateCurve}} value='{{IncrementalHeatRateCurve}}'{{/IncrementalHeatRateCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HeatInputCurve'>HeatInputCurve: </label><div class='col-sm-8'><input id='HeatInputCurve' class='form-control' type='text'{{#HeatInputCurve}} value='{{HeatInputCurve}}'{{/HeatInputCurve}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ShutdownCurve", "ShutdownCurve", "0..1", "1"],
                        ["CogenerationPlant", "CogenerationPlant", "0..1", "0..*"],
                        ["HeatRateCurve", "HeatRateCurve", "0..1", "1"],
                        ["EmissionCurves", "EmissionCurve", "0..*", "1"],
                        ["CAESPlant", "CAESPlant", "0..1", "0..1"],
                        ["StartupModel", "StartupModel", "0..1", "1"],
                        ["EmmissionAccounts", "EmissionAccount", "0..*", "1"],
                        ["FuelAllocationSchedules", "FuelAllocationSchedule", "0..*", "1"],
                        ["CombinedCyclePlant", "CombinedCyclePlant", "0..1", "0..*"],
                        ["IncrementalHeatRateCurve", "IncrementalHeatRateCurve", "0..1", "1"],
                        ["FossilFuels", "FossilFuel", "0..*", "1"],
                        ["HeatInputCurve", "HeatInputCurve", "0..1", "1"]
                    ]
                );
            }
        }

        /**
         * A generating unit whose prime mover is a hydraulic turbine (e.g., Francis, Pelton, Kaplan).
         *
         */
        class HydroGeneratingUnit extends GeneratingUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HydroGeneratingUnit;
                if (null == bucket)
                   cim_data.HydroGeneratingUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HydroGeneratingUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "HydroGeneratingUnit";
                base.parse_attribute (/<cim:HydroGeneratingUnit.energyConversionCapability\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "energyConversionCapability", sub, context);
                base.parse_element (/<cim:HydroGeneratingUnit.hydroUnitWaterCost>([\s\S]*?)<\/cim:HydroGeneratingUnit.hydroUnitWaterCost>/g, obj, "hydroUnitWaterCost", base.to_string, sub, context);
                base.parse_attributes (/<cim:HydroGeneratingUnit.TailbayLossCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TailbayLossCurve", sub, context);
                base.parse_attributes (/<cim:HydroGeneratingUnit.HydroGeneratingEfficiencyCurves\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingEfficiencyCurves", sub, context);
                base.parse_attribute (/<cim:HydroGeneratingUnit.PenstockLossCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PenstockLossCurve", sub, context);
                base.parse_attribute (/<cim:HydroGeneratingUnit.HydroPowerPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPowerPlant", sub, context);
                var bucket = context.parsed.HydroGeneratingUnit;
                if (null == bucket)
                   context.parsed.HydroGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = GeneratingUnit.prototype.export.call (this, obj, false);

                base.export_element (obj, "HydroGeneratingUnit", "energyConversionCapability", base.from_string, fields);
                base.export_element (obj, "HydroGeneratingUnit", "hydroUnitWaterCost", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "HydroGeneratingUnit", fields);
                base.export_attribute (obj, "export_attributes", "HydroGeneratingUnit", fields);
                base.export_attribute (obj, "export_attribute", "HydroGeneratingUnit", fields);
                base.export_attribute (obj, "export_attribute", "HydroGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HydroGeneratingUnit_collapse" aria-expanded="true" aria-controls="HydroGeneratingUnit_collapse" style="margin-left: 10px;">HydroGeneratingUnit</a></legend>
                    <div id="HydroGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.template.call (this) +
                    `
                    {{#energyConversionCapability}}<div><b>energyConversionCapability</b>: {{energyConversionCapability}}</div>{{/energyConversionCapability}}
                    {{#hydroUnitWaterCost}}<div><b>hydroUnitWaterCost</b>: {{hydroUnitWaterCost}}</div>{{/hydroUnitWaterCost}}
                    {{#TailbayLossCurve}}<div><b>TailbayLossCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TailbayLossCurve}}
                    {{#HydroGeneratingEfficiencyCurves}}<div><b>HydroGeneratingEfficiencyCurves</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/HydroGeneratingEfficiencyCurves}}
                    {{#PenstockLossCurve}}<div><b>PenstockLossCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PenstockLossCurve}}&quot;);})'>{{PenstockLossCurve}}</a></div>{{/PenstockLossCurve}}
                    {{#HydroPowerPlant}}<div><b>HydroPowerPlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroPowerPlant}}&quot;);})'>{{HydroPowerPlant}}</a></div>{{/HydroPowerPlant}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.HydroEnergyConversionKind = []; if (!obj.energyConversionCapability) obj.HydroEnergyConversionKind.push ({ id: '', selected: true}); for (var property in HydroEnergyConversionKind) obj.HydroEnergyConversionKind.push ({ id: property, selected: obj.energyConversionCapability && obj.energyConversionCapability.endsWith ('.' + property)});
                if (obj.TailbayLossCurve) obj.TailbayLossCurve_string = obj.TailbayLossCurve.join ();
                if (obj.HydroGeneratingEfficiencyCurves) obj.HydroGeneratingEfficiencyCurves_string = obj.HydroGeneratingEfficiencyCurves.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.HydroEnergyConversionKind;
                delete obj.TailbayLossCurve_string;
                delete obj.HydroGeneratingEfficiencyCurves_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#HydroGeneratingUnit_collapse" aria-expanded="true" aria-controls="HydroGeneratingUnit_collapse" style="margin-left: 10px;">HydroGeneratingUnit</a></legend>
                    <div id="HydroGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyConversionCapability'>energyConversionCapability: </label><div class='col-sm-8'><select id='energyConversionCapability' class='form-control'>{{#HydroEnergyConversionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/HydroEnergyConversionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hydroUnitWaterCost'>hydroUnitWaterCost: </label><div class='col-sm-8'><input id='hydroUnitWaterCost' class='form-control' type='text'{{#hydroUnitWaterCost}} value='{{hydroUnitWaterCost}}'{{/hydroUnitWaterCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PenstockLossCurve'>PenstockLossCurve: </label><div class='col-sm-8'><input id='PenstockLossCurve' class='form-control' type='text'{{#PenstockLossCurve}} value='{{PenstockLossCurve}}'{{/PenstockLossCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HydroPowerPlant'>HydroPowerPlant: </label><div class='col-sm-8'><input id='HydroPowerPlant' class='form-control' type='text'{{#HydroPowerPlant}} value='{{HydroPowerPlant}}'{{/HydroPowerPlant}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["TailbayLossCurve", "TailbayLossCurve", "0..*", "1"],
                        ["HydroGeneratingEfficiencyCurves", "HydroGeneratingEfficiencyCurve", "0..*", "1"],
                        ["PenstockLossCurve", "PenstockLossCurve", "0..1", "1"],
                        ["HydroPowerPlant", "HydroPowerPlant", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A wind driven generating unit.
         *
         * May be used to represent a single turbine or an aggregation.
         *
         */
        class WindGeneratingUnit extends GeneratingUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindGeneratingUnit;
                if (null == bucket)
                   cim_data.WindGeneratingUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindGeneratingUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "WindGeneratingUnit";
                base.parse_attribute (/<cim:WindGeneratingUnit.windGenUnitType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "windGenUnitType", sub, context);
                var bucket = context.parsed.WindGeneratingUnit;
                if (null == bucket)
                   context.parsed.WindGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = GeneratingUnit.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindGeneratingUnit", "windGenUnitType", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindGeneratingUnit_collapse" aria-expanded="true" aria-controls="WindGeneratingUnit_collapse" style="margin-left: 10px;">WindGeneratingUnit</a></legend>
                    <div id="WindGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.template.call (this) +
                    `
                    {{#windGenUnitType}}<div><b>windGenUnitType</b>: {{windGenUnitType}}</div>{{/windGenUnitType}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WindGenUnitKind = []; if (!obj.windGenUnitType) obj.WindGenUnitKind.push ({ id: '', selected: true}); for (var property in WindGenUnitKind) obj.WindGenUnitKind.push ({ id: property, selected: obj.windGenUnitType && obj.windGenUnitType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindGenUnitKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindGeneratingUnit_collapse" aria-expanded="true" aria-controls="WindGeneratingUnit_collapse" style="margin-left: 10px;">WindGeneratingUnit</a></legend>
                    <div id="WindGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='windGenUnitType'>windGenUnitType: </label><div class='col-sm-8'><select id='windGenUnitType' class='form-control'>{{#WindGenUnitKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WindGenUnitKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * A nuclear generating unit.
         *
         */
        class NuclearGeneratingUnit extends GeneratingUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NuclearGeneratingUnit;
                if (null == bucket)
                   cim_data.NuclearGeneratingUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NuclearGeneratingUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "NuclearGeneratingUnit";
                var bucket = context.parsed.NuclearGeneratingUnit;
                if (null == bucket)
                   context.parsed.NuclearGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = GeneratingUnit.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NuclearGeneratingUnit_collapse" aria-expanded="true" aria-controls="NuclearGeneratingUnit_collapse" style="margin-left: 10px;">NuclearGeneratingUnit</a></legend>
                    <div id="NuclearGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NuclearGeneratingUnit_collapse" aria-expanded="true" aria-controls="NuclearGeneratingUnit_collapse" style="margin-left: 10px;">NuclearGeneratingUnit</a></legend>
                    <div id="NuclearGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * A solar thermal generating unit.
         *
         */
        class SolarGeneratingUnit extends GeneratingUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SolarGeneratingUnit;
                if (null == bucket)
                   cim_data.SolarGeneratingUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SolarGeneratingUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = GeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "SolarGeneratingUnit";
                var bucket = context.parsed.SolarGeneratingUnit;
                if (null == bucket)
                   context.parsed.SolarGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = GeneratingUnit.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SolarGeneratingUnit_collapse" aria-expanded="true" aria-controls="SolarGeneratingUnit_collapse" style="margin-left: 10px;">SolarGeneratingUnit</a></legend>
                    <div id="SolarGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SolarGeneratingUnit_collapse" aria-expanded="true" aria-controls="SolarGeneratingUnit_collapse" style="margin-left: 10px;">SolarGeneratingUnit</a></legend>
                    <div id="SolarGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        return (
            {
                HydroGeneratingUnit: HydroGeneratingUnit,
                EmissionCurve: EmissionCurve,
                Classification: Classification,
                InflowForecast: InflowForecast,
                GenUnitOpSchedule: GenUnitOpSchedule,
                GrossToNetActivePowerCurve: GrossToNetActivePowerCurve,
                StartIgnFuelCurve: StartIgnFuelCurve,
                HeatRate: HeatRate,
                StartMainFuelCurve: StartMainFuelCurve,
                GenUnitOpCostCurve: GenUnitOpCostCurve,
                GeneratingUnit: GeneratingUnit,
                ShutdownCurve: ShutdownCurve,
                WindGeneratingUnit: WindGeneratingUnit,
                TargetLevelSchedule: TargetLevelSchedule,
                FuelAllocationSchedule: FuelAllocationSchedule,
                Reservoir: Reservoir,
                HeatRateCurve: HeatRateCurve,
                IncrementalHeatRateCurve: IncrementalHeatRateCurve,
                EmissionAccount: EmissionAccount,
                CombinedCyclePlant: CombinedCyclePlant,
                SteamSendoutSchedule: SteamSendoutSchedule,
                TailbayLossCurve: TailbayLossCurve,
                Emission: Emission,
                CAESPlant: CAESPlant,
                ThermalGeneratingUnit: ThermalGeneratingUnit,
                LevelVsVolumeCurve: LevelVsVolumeCurve,
                CogenerationPlant: CogenerationPlant,
                AirCompressor: AirCompressor,
                StartupModel: StartupModel,
                HeatInputCurve: HeatInputCurve,
                NuclearGeneratingUnit: NuclearGeneratingUnit,
                SolarGeneratingUnit: SolarGeneratingUnit,
                HydroPump: HydroPump,
                StartRampCurve: StartRampCurve,
                PenstockLossCurve: PenstockLossCurve,
                FossilFuel: FossilFuel,
                CostPerHeatUnit: CostPerHeatUnit,
                HydroPumpOpSchedule: HydroPumpOpSchedule,
                HydroGeneratingEfficiencyCurve: HydroGeneratingEfficiencyCurve,
                HydroPowerPlant: HydroPowerPlant
            }
        );
    }
);