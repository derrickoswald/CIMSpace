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
        class HydroEnergyConversionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HydroEnergyConversionKind;
                if (null == bucket)
                   cim_data.HydroEnergyConversionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HydroEnergyConversionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "HydroEnergyConversionKind";
                base.parse_element (/<cim:HydroEnergyConversionKind.generator>([\s\S]*?)<\/cim:HydroEnergyConversionKind.generator>/g, obj, "generator", base.to_string, sub, context);
                base.parse_element (/<cim:HydroEnergyConversionKind.pumpAndGenerator>([\s\S]*?)<\/cim:HydroEnergyConversionKind.pumpAndGenerator>/g, obj, "pumpAndGenerator", base.to_string, sub, context);

                var bucket = context.parsed.HydroEnergyConversionKind;
                if (null == bucket)
                   context.parsed.HydroEnergyConversionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "HydroEnergyConversionKind", "generator", base.from_string, fields);
                base.export_element (obj, "HydroEnergyConversionKind", "pumpAndGenerator", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#HydroEnergyConversionKind_collapse" aria-expanded="true" aria-controls="HydroEnergyConversionKind_collapse">HydroEnergyConversionKind</a>
<div id="HydroEnergyConversionKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#generator}}<div><b>generator</b>: {{generator}}</div>{{/generator}}
{{#pumpAndGenerator}}<div><b>pumpAndGenerator</b>: {{pumpAndGenerator}}</div>{{/pumpAndGenerator}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#Emission_collapse" aria-expanded="true" aria-controls="Emission_collapse">Emission</a>
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
`
                );
           }        }

        /**
         * Kind of wind generating unit.
         *
         */
        class WindGenUnitKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindGenUnitKind;
                if (null == bucket)
                   cim_data.WindGenUnitKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindGenUnitKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenUnitKind";
                base.parse_element (/<cim:WindGenUnitKind.offshore>([\s\S]*?)<\/cim:WindGenUnitKind.offshore>/g, obj, "offshore", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenUnitKind.onshore>([\s\S]*?)<\/cim:WindGenUnitKind.onshore>/g, obj, "onshore", base.to_string, sub, context);

                var bucket = context.parsed.WindGenUnitKind;
                if (null == bucket)
                   context.parsed.WindGenUnitKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "WindGenUnitKind", "offshore", base.from_string, fields);
                base.export_element (obj, "WindGenUnitKind", "onshore", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#WindGenUnitKind_collapse" aria-expanded="true" aria-controls="WindGenUnitKind_collapse">WindGenUnitKind</a>
<div id="WindGenUnitKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#offshore}}<div><b>offshore</b>: {{offshore}}</div>{{/offshore}}
{{#onshore}}<div><b>onshore</b>: {{onshore}}</div>{{/onshore}}
</div>
`
                );
           }        }

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
                base.export_attribute (obj, "HydroPump", "RotatingMachine", fields);
                base.export_attribute (obj, "HydroPump", "HydroPumpOpSchedule", fields);
                base.export_attribute (obj, "HydroPump", "HydroPowerPlant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#HydroPump_collapse" aria-expanded="true" aria-controls="HydroPump_collapse">HydroPump</a>
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
`
                );
           }        }

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

                base.export_attribute (obj, "PenstockLossCurve", "HydroGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#PenstockLossCurve_collapse" aria-expanded="true" aria-controls="PenstockLossCurve_collapse">PenstockLossCurve</a>
<div id="PenstockLossCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#HydroGeneratingUnit}}<div><b>HydroGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroGeneratingUnit}}&quot;);})'>{{HydroGeneratingUnit}}</a></div>{{/HydroGeneratingUnit}}
</div>
`
                );
           }        }

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
                base.export_attribute (obj, "CogenerationPlant", "SteamSendoutSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CogenerationPlant_collapse" aria-expanded="true" aria-controls="CogenerationPlant_collapse">CogenerationPlant</a>
<div id="CogenerationPlant_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.PowerSystemResource.prototype.template.call (this) +
`
{{#cogenHPSendoutRating}}<div><b>cogenHPSendoutRating</b>: {{cogenHPSendoutRating}}</div>{{/cogenHPSendoutRating}}
{{#cogenHPSteamRating}}<div><b>cogenHPSteamRating</b>: {{cogenHPSteamRating}}</div>{{/cogenHPSteamRating}}
{{#cogenLPSendoutRating}}<div><b>cogenLPSendoutRating</b>: {{cogenLPSendoutRating}}</div>{{/cogenLPSendoutRating}}
{{#cogenLPSteamRating}}<div><b>cogenLPSteamRating</b>: {{cogenLPSteamRating}}</div>{{/cogenLPSteamRating}}
{{#ratedP}}<div><b>ratedP</b>: {{ratedP}}</div>{{/ratedP}}
{{#SteamSendoutSchedule}}<div><b>SteamSendoutSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SteamSendoutSchedule}}&quot;);})'>{{SteamSendoutSchedule}}</a></div>{{/SteamSendoutSchedule}}
</div>
`
                );
           }        }

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
                base.export_attribute (obj, "IncrementalHeatRateCurve", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#IncrementalHeatRateCurve_collapse" aria-expanded="true" aria-controls="IncrementalHeatRateCurve_collapse">IncrementalHeatRateCurve</a>
<div id="IncrementalHeatRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
{{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
</div>
`
                );
           }        }

        /**
         * The type of hydro power plant.
         *
         */
        class HydroPlantStorageKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.HydroPlantStorageKind;
                if (null == bucket)
                   cim_data.HydroPlantStorageKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.HydroPlantStorageKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "HydroPlantStorageKind";
                base.parse_element (/<cim:HydroPlantStorageKind.runOfRiver>([\s\S]*?)<\/cim:HydroPlantStorageKind.runOfRiver>/g, obj, "runOfRiver", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPlantStorageKind.pumpedStorage>([\s\S]*?)<\/cim:HydroPlantStorageKind.pumpedStorage>/g, obj, "pumpedStorage", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPlantStorageKind.storage>([\s\S]*?)<\/cim:HydroPlantStorageKind.storage>/g, obj, "storage", base.to_string, sub, context);

                var bucket = context.parsed.HydroPlantStorageKind;
                if (null == bucket)
                   context.parsed.HydroPlantStorageKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "HydroPlantStorageKind", "runOfRiver", base.from_string, fields);
                base.export_element (obj, "HydroPlantStorageKind", "pumpedStorage", base.from_string, fields);
                base.export_element (obj, "HydroPlantStorageKind", "storage", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#HydroPlantStorageKind_collapse" aria-expanded="true" aria-controls="HydroPlantStorageKind_collapse">HydroPlantStorageKind</a>
<div id="HydroPlantStorageKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#runOfRiver}}<div><b>runOfRiver</b>: {{runOfRiver}}</div>{{/runOfRiver}}
{{#pumpedStorage}}<div><b>pumpedStorage</b>: {{pumpedStorage}}</div>{{/pumpedStorage}}
{{#storage}}<div><b>storage</b>: {{storage}}</div>{{/storage}}
</div>
`
                );
           }        }

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
                base.parse_attribute (/<cim:Reservoir.SpillsFromReservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SpillsFromReservoir", sub, context);

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
                base.export_attribute (obj, "Reservoir", "TargetLevelSchedule", fields);
                base.export_attribute (obj, "Reservoir", "SpillsFromReservoir", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Reservoir_collapse" aria-expanded="true" aria-controls="Reservoir_collapse">Reservoir</a>
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
{{#SpillsFromReservoir}}<div><b>SpillsFromReservoir</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SpillsFromReservoir}}&quot;);})'>{{SpillsFromReservoir}}</a></div>{{/SpillsFromReservoir}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#Classification_collapse" aria-expanded="true" aria-controls="Classification_collapse">Classification</a>
<div id="Classification_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
{{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:StartIgnFuelCurve.ignitionFuelType>([\s\S]*?)<\/cim:StartIgnFuelCurve.ignitionFuelType>/g, obj, "ignitionFuelType", base.to_string, sub, context);
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
                base.export_attribute (obj, "StartIgnFuelCurve", "StartupModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#StartIgnFuelCurve_collapse" aria-expanded="true" aria-controls="StartIgnFuelCurve_collapse">StartIgnFuelCurve</a>
<div id="StartIgnFuelCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#ignitionFuelType}}<div><b>ignitionFuelType</b>: {{ignitionFuelType}}</div>{{/ignitionFuelType}}
{{#StartupModel}}<div><b>StartupModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartupModel}}&quot;);})'>{{StartupModel}}</a></div>{{/StartupModel}}
</div>
`
                );
           }        }

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

                base.export_attribute (obj, "LevelVsVolumeCurve", "Reservoir", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LevelVsVolumeCurve_collapse" aria-expanded="true" aria-controls="LevelVsVolumeCurve_collapse">LevelVsVolumeCurve</a>
<div id="LevelVsVolumeCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#Reservoir}}<div><b>Reservoir</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Reservoir}}&quot;);})'>{{Reservoir}}</a></div>{{/Reservoir}}
</div>
`
                );
           }        }

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

                base.export_attribute (obj, "GrossToNetActivePowerCurve", "GeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GrossToNetActivePowerCurve_collapse" aria-expanded="true" aria-controls="GrossToNetActivePowerCurve_collapse">GrossToNetActivePowerCurve</a>
<div id="GrossToNetActivePowerCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingUnit}}&quot;);})'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
</div>
`
                );
           }        }

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
                base.export_attribute (obj, "AirCompressor", "CombustionTurbine", fields);
                base.export_attribute (obj, "AirCompressor", "CAESPlant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#AirCompressor_collapse" aria-expanded="true" aria-controls="AirCompressor_collapse">AirCompressor</a>
<div id="AirCompressor_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.PowerSystemResource.prototype.template.call (this) +
`
{{#airCompressorRating}}<div><b>airCompressorRating</b>: {{airCompressorRating}}</div>{{/airCompressorRating}}
{{#CombustionTurbine}}<div><b>CombustionTurbine</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CombustionTurbine}}&quot;);})'>{{CombustionTurbine}}</a></div>{{/CombustionTurbine}}
{{#CAESPlant}}<div><b>CAESPlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CAESPlant}}&quot;);})'>{{CAESPlant}}</a></div>{{/CAESPlant}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#HeatRate_collapse" aria-expanded="true" aria-controls="HeatRate_collapse">HeatRate</a>
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
`
                );
           }        }

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
                base.parse_element (/<cim:FuelAllocationSchedule.fuelType>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelType>/g, obj, "fuelType", base.to_string, sub, context);
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
                base.export_attribute (obj, "FuelAllocationSchedule", "FossilFuel", fields);
                base.export_attribute (obj, "FuelAllocationSchedule", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#FuelAllocationSchedule_collapse" aria-expanded="true" aria-controls="FuelAllocationSchedule_collapse">FuelAllocationSchedule</a>
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
`
                );
           }        }

        /**
         * The source of controls for a generating unit.
         *
         */
        class GeneratorControlSource extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GeneratorControlSource;
                if (null == bucket)
                   cim_data.GeneratorControlSource = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GeneratorControlSource[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GeneratorControlSource";
                base.parse_element (/<cim:GeneratorControlSource.unavailable>([\s\S]*?)<\/cim:GeneratorControlSource.unavailable>/g, obj, "unavailable", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorControlSource.offAGC>([\s\S]*?)<\/cim:GeneratorControlSource.offAGC>/g, obj, "offAGC", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorControlSource.onAGC>([\s\S]*?)<\/cim:GeneratorControlSource.onAGC>/g, obj, "onAGC", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorControlSource.plantControl>([\s\S]*?)<\/cim:GeneratorControlSource.plantControl>/g, obj, "plantControl", base.to_string, sub, context);

                var bucket = context.parsed.GeneratorControlSource;
                if (null == bucket)
                   context.parsed.GeneratorControlSource = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "GeneratorControlSource", "unavailable", base.from_string, fields);
                base.export_element (obj, "GeneratorControlSource", "offAGC", base.from_string, fields);
                base.export_element (obj, "GeneratorControlSource", "onAGC", base.from_string, fields);
                base.export_element (obj, "GeneratorControlSource", "plantControl", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GeneratorControlSource_collapse" aria-expanded="true" aria-controls="GeneratorControlSource_collapse">GeneratorControlSource</a>
<div id="GeneratorControlSource_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#unavailable}}<div><b>unavailable</b>: {{unavailable}}</div>{{/unavailable}}
{{#offAGC}}<div><b>offAGC</b>: {{offAGC}}</div>{{/offAGC}}
{{#onAGC}}<div><b>onAGC</b>: {{onAGC}}</div>{{/onAGC}}
{{#plantControl}}<div><b>plantControl</b>: {{plantControl}}</div>{{/plantControl}}
</div>
`
                );
           }        }

        /**
         * The type of emission.
         *
         */
        class EmissionType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EmissionType;
                if (null == bucket)
                   cim_data.EmissionType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EmissionType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EmissionType";
                base.parse_element (/<cim:EmissionType.sulfurDioxide>([\s\S]*?)<\/cim:EmissionType.sulfurDioxide>/g, obj, "sulfurDioxide", base.to_string, sub, context);
                base.parse_element (/<cim:EmissionType.carbonDioxide>([\s\S]*?)<\/cim:EmissionType.carbonDioxide>/g, obj, "carbonDioxide", base.to_string, sub, context);
                base.parse_element (/<cim:EmissionType.nitrogenOxide>([\s\S]*?)<\/cim:EmissionType.nitrogenOxide>/g, obj, "nitrogenOxide", base.to_string, sub, context);
                base.parse_element (/<cim:EmissionType.hydrogenSulfide>([\s\S]*?)<\/cim:EmissionType.hydrogenSulfide>/g, obj, "hydrogenSulfide", base.to_string, sub, context);
                base.parse_element (/<cim:EmissionType.chlorine>([\s\S]*?)<\/cim:EmissionType.chlorine>/g, obj, "chlorine", base.to_string, sub, context);
                base.parse_element (/<cim:EmissionType.carbonDisulfide>([\s\S]*?)<\/cim:EmissionType.carbonDisulfide>/g, obj, "carbonDisulfide", base.to_string, sub, context);

                var bucket = context.parsed.EmissionType;
                if (null == bucket)
                   context.parsed.EmissionType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "EmissionType", "sulfurDioxide", base.from_string, fields);
                base.export_element (obj, "EmissionType", "carbonDioxide", base.from_string, fields);
                base.export_element (obj, "EmissionType", "nitrogenOxide", base.from_string, fields);
                base.export_element (obj, "EmissionType", "hydrogenSulfide", base.from_string, fields);
                base.export_element (obj, "EmissionType", "chlorine", base.from_string, fields);
                base.export_element (obj, "EmissionType", "carbonDisulfide", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EmissionType_collapse" aria-expanded="true" aria-controls="EmissionType_collapse">EmissionType</a>
<div id="EmissionType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#sulfurDioxide}}<div><b>sulfurDioxide</b>: {{sulfurDioxide}}</div>{{/sulfurDioxide}}
{{#carbonDioxide}}<div><b>carbonDioxide</b>: {{carbonDioxide}}</div>{{/carbonDioxide}}
{{#nitrogenOxide}}<div><b>nitrogenOxide</b>: {{nitrogenOxide}}</div>{{/nitrogenOxide}}
{{#hydrogenSulfide}}<div><b>hydrogenSulfide</b>: {{hydrogenSulfide}}</div>{{/hydrogenSulfide}}
{{#chlorine}}<div><b>chlorine</b>: {{chlorine}}</div>{{/chlorine}}
{{#carbonDisulfide}}<div><b>carbonDisulfide</b>: {{carbonDisulfide}}</div>{{/carbonDisulfide}}
</div>
`
                );
           }        }

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

                base.export_attribute (obj, "HydroGeneratingEfficiencyCurve", "HydroGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#HydroGeneratingEfficiencyCurve_collapse" aria-expanded="true" aria-controls="HydroGeneratingEfficiencyCurve_collapse">HydroGeneratingEfficiencyCurve</a>
<div id="HydroGeneratingEfficiencyCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#HydroGeneratingUnit}}<div><b>HydroGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroGeneratingUnit}}&quot;);})'>{{HydroGeneratingUnit}}</a></div>{{/HydroGeneratingUnit}}
</div>
`
                );
           }        }

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

                base.export_attribute (obj, "GenUnitOpSchedule", "GeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GenUnitOpSchedule_collapse" aria-expanded="true" aria-controls="GenUnitOpSchedule_collapse">GenUnitOpSchedule</a>
<div id="GenUnitOpSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.RegularIntervalSchedule.prototype.template.call (this) +
`
{{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingUnit}}&quot;);})'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
</div>
`
                );
           }        }

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
                base.export_attribute (obj, "HeatRateCurve", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#HeatRateCurve_collapse" aria-expanded="true" aria-controls="HeatRateCurve_collapse">HeatRateCurve</a>
<div id="HeatRateCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
{{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
</div>
`
                );
           }        }

        /**
         * Type of fuel.
         *
         */
        class FuelType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FuelType;
                if (null == bucket)
                   cim_data.FuelType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FuelType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FuelType";
                base.parse_element (/<cim:FuelType.coal>([\s\S]*?)<\/cim:FuelType.coal>/g, obj, "coal", base.to_string, sub, context);
                base.parse_element (/<cim:FuelType.oil>([\s\S]*?)<\/cim:FuelType.oil>/g, obj, "oil", base.to_string, sub, context);
                base.parse_element (/<cim:FuelType.gas>([\s\S]*?)<\/cim:FuelType.gas>/g, obj, "gas", base.to_string, sub, context);
                base.parse_element (/<cim:FuelType.lignite>([\s\S]*?)<\/cim:FuelType.lignite>/g, obj, "lignite", base.to_string, sub, context);
                base.parse_element (/<cim:FuelType.hardCoal>([\s\S]*?)<\/cim:FuelType.hardCoal>/g, obj, "hardCoal", base.to_string, sub, context);
                base.parse_element (/<cim:FuelType.oilShale>([\s\S]*?)<\/cim:FuelType.oilShale>/g, obj, "oilShale", base.to_string, sub, context);

                var bucket = context.parsed.FuelType;
                if (null == bucket)
                   context.parsed.FuelType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "FuelType", "coal", base.from_string, fields);
                base.export_element (obj, "FuelType", "oil", base.from_string, fields);
                base.export_element (obj, "FuelType", "gas", base.from_string, fields);
                base.export_element (obj, "FuelType", "lignite", base.from_string, fields);
                base.export_element (obj, "FuelType", "hardCoal", base.from_string, fields);
                base.export_element (obj, "FuelType", "oilShale", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#FuelType_collapse" aria-expanded="true" aria-controls="FuelType_collapse">FuelType</a>
<div id="FuelType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#coal}}<div><b>coal</b>: {{coal}}</div>{{/coal}}
{{#oil}}<div><b>oil</b>: {{oil}}</div>{{/oil}}
{{#gas}}<div><b>gas</b>: {{gas}}</div>{{/gas}}
{{#lignite}}<div><b>lignite</b>: {{lignite}}</div>{{/lignite}}
{{#hardCoal}}<div><b>hardCoal</b>: {{hardCoal}}</div>{{/hardCoal}}
{{#oilShale}}<div><b>oilShale</b>: {{oilShale}}</div>{{/oilShale}}
</div>
`
                );
           }        }

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
                base.export_attribute (obj, "GenUnitOpCostCurve", "GeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GenUnitOpCostCurve_collapse" aria-expanded="true" aria-controls="GenUnitOpCostCurve_collapse">GenUnitOpCostCurve</a>
<div id="GenUnitOpCostCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
{{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingUnit}}&quot;);})'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
</div>
`
                );
           }        }

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

                base.export_attribute (obj, "SteamSendoutSchedule", "CogenerationPlant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SteamSendoutSchedule_collapse" aria-expanded="true" aria-controls="SteamSendoutSchedule_collapse">SteamSendoutSchedule</a>
<div id="SteamSendoutSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.RegularIntervalSchedule.prototype.template.call (this) +
`
{{#CogenerationPlant}}<div><b>CogenerationPlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CogenerationPlant}}&quot;);})'>{{CogenerationPlant}}</a></div>{{/CogenerationPlant}}
</div>
`
                );
           }        }

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

                base.export_attribute (obj, "TailbayLossCurve", "HydroGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TailbayLossCurve_collapse" aria-expanded="true" aria-controls="TailbayLossCurve_collapse">TailbayLossCurve</a>
<div id="TailbayLossCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#HydroGeneratingUnit}}<div><b>HydroGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroGeneratingUnit}}&quot;);})'>{{HydroGeneratingUnit}}</a></div>{{/HydroGeneratingUnit}}
</div>
`
                );
           }        }

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
                base.export_attribute (obj, "CAESPlant", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "CAESPlant", "AirCompressor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CAESPlant_collapse" aria-expanded="true" aria-controls="CAESPlant_collapse">CAESPlant</a>
<div id="CAESPlant_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.PowerSystemResource.prototype.template.call (this) +
`
{{#energyStorageCapacity}}<div><b>energyStorageCapacity</b>: {{energyStorageCapacity}}</div>{{/energyStorageCapacity}}
{{#ratedCapacityP}}<div><b>ratedCapacityP</b>: {{ratedCapacityP}}</div>{{/ratedCapacityP}}
{{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
{{#AirCompressor}}<div><b>AirCompressor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AirCompressor}}&quot;);})'>{{AirCompressor}}</a></div>{{/AirCompressor}}
</div>
`
                );
           }        }

        /**
         * The source of the emission value.
         *
         */
        class EmissionValueSource extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EmissionValueSource;
                if (null == bucket)
                   cim_data.EmissionValueSource = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EmissionValueSource[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EmissionValueSource";
                base.parse_element (/<cim:EmissionValueSource.measured>([\s\S]*?)<\/cim:EmissionValueSource.measured>/g, obj, "measured", base.to_string, sub, context);
                base.parse_element (/<cim:EmissionValueSource.calculated>([\s\S]*?)<\/cim:EmissionValueSource.calculated>/g, obj, "calculated", base.to_string, sub, context);

                var bucket = context.parsed.EmissionValueSource;
                if (null == bucket)
                   context.parsed.EmissionValueSource = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "EmissionValueSource", "measured", base.from_string, fields);
                base.export_element (obj, "EmissionValueSource", "calculated", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EmissionValueSource_collapse" aria-expanded="true" aria-controls="EmissionValueSource_collapse">EmissionValueSource</a>
<div id="EmissionValueSource_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#measured}}<div><b>measured</b>: {{measured}}</div>{{/measured}}
{{#calculated}}<div><b>calculated</b>: {{calculated}}</div>{{/calculated}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:EmissionCurve.emissionType>([\s\S]*?)<\/cim:EmissionCurve.emissionType>/g, obj, "emissionType", base.to_string, sub, context);
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
                base.export_attribute (obj, "EmissionCurve", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EmissionCurve_collapse" aria-expanded="true" aria-controls="EmissionCurve_collapse">EmissionCurve</a>
<div id="EmissionCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#emissionContent}}<div><b>emissionContent</b>: {{emissionContent}}</div>{{/emissionContent}}
{{#emissionType}}<div><b>emissionType</b>: {{emissionType}}</div>{{/emissionType}}
{{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
{{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
</div>
`
                );
           }        }

        /**
         * Unit control modes.
         *
         */
        class GeneratorControlMode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GeneratorControlMode;
                if (null == bucket)
                   cim_data.GeneratorControlMode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GeneratorControlMode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GeneratorControlMode";
                base.parse_element (/<cim:GeneratorControlMode.setpoint>([\s\S]*?)<\/cim:GeneratorControlMode.setpoint>/g, obj, "setpoint", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratorControlMode.pulse>([\s\S]*?)<\/cim:GeneratorControlMode.pulse>/g, obj, "pulse", base.to_string, sub, context);

                var bucket = context.parsed.GeneratorControlMode;
                if (null == bucket)
                   context.parsed.GeneratorControlMode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "GeneratorControlMode", "setpoint", base.from_string, fields);
                base.export_element (obj, "GeneratorControlMode", "pulse", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GeneratorControlMode_collapse" aria-expanded="true" aria-controls="GeneratorControlMode_collapse">GeneratorControlMode</a>
<div id="GeneratorControlMode_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#setpoint}}<div><b>setpoint</b>: {{setpoint}}</div>{{/setpoint}}
{{#pulse}}<div><b>pulse</b>: {{pulse}}</div>{{/pulse}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:StartMainFuelCurve.mainFuelType>([\s\S]*?)<\/cim:StartMainFuelCurve.mainFuelType>/g, obj, "mainFuelType", base.to_string, sub, context);
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
                base.export_attribute (obj, "StartMainFuelCurve", "StartupModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#StartMainFuelCurve_collapse" aria-expanded="true" aria-controls="StartMainFuelCurve_collapse">StartMainFuelCurve</a>
<div id="StartMainFuelCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#mainFuelType}}<div><b>mainFuelType</b>: {{mainFuelType}}</div>{{/mainFuelType}}
{{#StartupModel}}<div><b>StartupModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartupModel}}&quot;);})'>{{StartupModel}}</a></div>{{/StartupModel}}
</div>
`
                );
           }        }

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
                base.export_attribute (obj, "StartRampCurve", "StartupModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#StartRampCurve_collapse" aria-expanded="true" aria-controls="StartRampCurve_collapse">StartRampCurve</a>
<div id="StartRampCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#hotStandbyRamp}}<div><b>hotStandbyRamp</b>: {{hotStandbyRamp}}</div>{{/hotStandbyRamp}}
{{#StartupModel}}<div><b>StartupModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartupModel}}&quot;);})'>{{StartupModel}}</a></div>{{/StartupModel}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:FossilFuel.fossilFuelType>([\s\S]*?)<\/cim:FossilFuel.fossilFuelType>/g, obj, "fossilFuelType", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelCost>([\s\S]*?)<\/cim:FossilFuel.fuelCost>/g, obj, "fuelCost", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelDispatchCost>([\s\S]*?)<\/cim:FossilFuel.fuelDispatchCost>/g, obj, "fuelDispatchCost", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelEffFactor>([\s\S]*?)<\/cim:FossilFuel.fuelEffFactor>/g, obj, "fuelEffFactor", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelHandlingCost>([\s\S]*?)<\/cim:FossilFuel.fuelHandlingCost>/g, obj, "fuelHandlingCost", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelHeatContent>([\s\S]*?)<\/cim:FossilFuel.fuelHeatContent>/g, obj, "fuelHeatContent", base.to_float, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelMixture>([\s\S]*?)<\/cim:FossilFuel.fuelMixture>/g, obj, "fuelMixture", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelSulfur>([\s\S]*?)<\/cim:FossilFuel.fuelSulfur>/g, obj, "fuelSulfur", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.highBreakpointP>([\s\S]*?)<\/cim:FossilFuel.highBreakpointP>/g, obj, "highBreakpointP", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.lowBreakpointP>([\s\S]*?)<\/cim:FossilFuel.lowBreakpointP>/g, obj, "lowBreakpointP", base.to_string, sub, context);
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
                base.export_attribute (obj, "FossilFuel", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#FossilFuel_collapse" aria-expanded="true" aria-controls="FossilFuel_collapse">FossilFuel</a>
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
{{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:GeneratingUnit.genControlMode>([\s\S]*?)<\/cim:GeneratingUnit.genControlMode>/g, obj, "genControlMode", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.genControlSource>([\s\S]*?)<\/cim:GeneratingUnit.genControlSource>/g, obj, "genControlSource", base.to_string, sub, context);
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
                base.parse_attribute (/<cim:GeneratingUnit.GenUnitOpSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenUnitOpSchedule", sub, context);

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
                base.export_attribute (obj, "GeneratingUnit", "GenUnitOpSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GeneratingUnit_collapse" aria-expanded="true" aria-controls="GeneratingUnit_collapse">GeneratingUnit</a>
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
{{#GenUnitOpSchedule}}<div><b>GenUnitOpSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GenUnitOpSchedule}}&quot;);})'>{{GenUnitOpSchedule}}</a></div>{{/GenUnitOpSchedule}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:HydroPowerPlant.hydroPlantStorageType>([\s\S]*?)<\/cim:HydroPowerPlant.hydroPlantStorageType>/g, obj, "hydroPlantStorageType", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.penstockType>([\s\S]*?)<\/cim:HydroPowerPlant.penstockType>/g, obj, "penstockType", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.plantDischargeCapacity>([\s\S]*?)<\/cim:HydroPowerPlant.plantDischargeCapacity>/g, obj, "plantDischargeCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.plantRatedHead>([\s\S]*?)<\/cim:HydroPowerPlant.plantRatedHead>/g, obj, "plantRatedHead", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.pumpRatedP>([\s\S]*?)<\/cim:HydroPowerPlant.pumpRatedP>/g, obj, "pumpRatedP", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.surgeTankCode>([\s\S]*?)<\/cim:HydroPowerPlant.surgeTankCode>/g, obj, "surgeTankCode", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.surgeTankCrestLevel>([\s\S]*?)<\/cim:HydroPowerPlant.surgeTankCrestLevel>/g, obj, "surgeTankCrestLevel", base.to_string, sub, context);
                base.parse_attribute (/<cim:HydroPowerPlant.Reservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
                base.parse_attribute (/<cim:HydroPowerPlant.GenSourcePumpDischargeReservoir\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenSourcePumpDischargeReservoir", sub, context);

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
                base.export_attribute (obj, "HydroPowerPlant", "Reservoir", fields);
                base.export_attribute (obj, "HydroPowerPlant", "GenSourcePumpDischargeReservoir", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#HydroPowerPlant_collapse" aria-expanded="true" aria-controls="HydroPowerPlant_collapse">HydroPowerPlant</a>
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
{{#Reservoir}}<div><b>Reservoir</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Reservoir}}&quot;);})'>{{Reservoir}}</a></div>{{/Reservoir}}
{{#GenSourcePumpDischargeReservoir}}<div><b>GenSourcePumpDischargeReservoir</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GenSourcePumpDischargeReservoir}}&quot;);})'>{{GenSourcePumpDischargeReservoir}}</a></div>{{/GenSourcePumpDischargeReservoir}}
</div>
`
                );
           }        }

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

                base.export_attribute (obj, "HydroPumpOpSchedule", "HydroPump", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#HydroPumpOpSchedule_collapse" aria-expanded="true" aria-controls="HydroPumpOpSchedule_collapse">HydroPumpOpSchedule</a>
<div id="HydroPumpOpSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.RegularIntervalSchedule.prototype.template.call (this) +
`
{{#HydroPump}}<div><b>HydroPump</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroPump}}&quot;);})'>{{HydroPump}}</a></div>{{/HydroPump}}
</div>
`
                );
           }        }

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
                base.export_attribute (obj, "ShutdownCurve", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ShutdownCurve_collapse" aria-expanded="true" aria-controls="ShutdownCurve_collapse">ShutdownCurve</a>
<div id="ShutdownCurve_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#shutdownCost}}<div><b>shutdownCost</b>: {{shutdownCost}}</div>{{/shutdownCost}}
{{#shutdownDate}}<div><b>shutdownDate</b>: {{shutdownDate}}</div>{{/shutdownDate}}
{{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:EmissionAccount.emissionType>([\s\S]*?)<\/cim:EmissionAccount.emissionType>/g, obj, "emissionType", base.to_string, sub, context);
                base.parse_element (/<cim:EmissionAccount.emissionValueSource>([\s\S]*?)<\/cim:EmissionAccount.emissionValueSource>/g, obj, "emissionValueSource", base.to_string, sub, context);
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
                base.export_attribute (obj, "EmissionAccount", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EmissionAccount_collapse" aria-expanded="true" aria-controls="EmissionAccount_collapse">EmissionAccount</a>
<div id="EmissionAccount_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#emissionType}}<div><b>emissionType</b>: {{emissionType}}</div>{{/emissionType}}
{{#emissionValueSource}}<div><b>emissionValueSource</b>: {{emissionValueSource}}</div>{{/emissionValueSource}}
{{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ThermalGeneratingUnit}}&quot;);})'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
</div>
`
                );
           }        }

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
                base.export_attribute (obj, "HeatInputCurve", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#HeatInputCurve_collapse" aria-expanded="true" aria-controls="HeatInputCurve_collapse">HeatInputCurve</a>
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
`
                );
           }        }

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
                base.export_attribute (obj, "StartupModel", "StartIgnFuelCurve", fields);
                base.export_attribute (obj, "StartupModel", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "StartupModel", "StartMainFuelCurve", fields);
                base.export_attribute (obj, "StartupModel", "StartRampCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#StartupModel_collapse" aria-expanded="true" aria-controls="StartupModel_collapse">StartupModel</a>
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#CostPerHeatUnit_collapse" aria-expanded="true" aria-controls="CostPerHeatUnit_collapse">CostPerHeatUnit</a>
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
`
                );
           }        }

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
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CombinedCyclePlant_collapse" aria-expanded="true" aria-controls="CombinedCyclePlant_collapse">CombinedCyclePlant</a>
<div id="CombinedCyclePlant_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.PowerSystemResource.prototype.template.call (this) +
`
{{#combCyclePlantRating}}<div><b>combCyclePlantRating</b>: {{combCyclePlantRating}}</div>{{/combCyclePlantRating}}
</div>
`
                );
           }        }

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
                base.export_attribute (obj, "TargetLevelSchedule", "Reservoir", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TargetLevelSchedule_collapse" aria-expanded="true" aria-controls="TargetLevelSchedule_collapse">TargetLevelSchedule</a>
<div id="TargetLevelSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.Curve.prototype.template.call (this) +
`
{{#highLevelLimit}}<div><b>highLevelLimit</b>: {{highLevelLimit}}</div>{{/highLevelLimit}}
{{#lowLevelLimit}}<div><b>lowLevelLimit</b>: {{lowLevelLimit}}</div>{{/lowLevelLimit}}
{{#Reservoir}}<div><b>Reservoir</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Reservoir}}&quot;);})'>{{Reservoir}}</a></div>{{/Reservoir}}
</div>
`
                );
           }        }

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

                base.export_attribute (obj, "InflowForecast", "Reservoir", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#InflowForecast_collapse" aria-expanded="true" aria-controls="InflowForecast_collapse">InflowForecast</a>
<div id="InflowForecast_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.RegularIntervalSchedule.prototype.template.call (this) +
`
{{#Reservoir}}<div><b>Reservoir</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Reservoir}}&quot;);})'>{{Reservoir}}</a></div>{{/Reservoir}}
</div>
`
                );
           }        }

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
                base.parse_attribute (/<cim:ThermalGeneratingUnit.CAESPlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CAESPlant", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.StartupModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.CombinedCyclePlant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCyclePlant", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.IncrementalHeatRateCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IncrementalHeatRateCurve", sub, context);
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
                base.export_attribute (obj, "ThermalGeneratingUnit", "ShutdownCurve", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "CogenerationPlant", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "HeatRateCurve", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "CAESPlant", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "StartupModel", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "CombinedCyclePlant", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "IncrementalHeatRateCurve", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "HeatInputCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ThermalGeneratingUnit_collapse" aria-expanded="true" aria-controls="ThermalGeneratingUnit_collapse">ThermalGeneratingUnit</a>
<div id="ThermalGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
`
      + GeneratingUnit.prototype.template.call (this) +
`
{{#oMCost}}<div><b>oMCost</b>: {{oMCost}}</div>{{/oMCost}}
{{#ShutdownCurve}}<div><b>ShutdownCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ShutdownCurve}}&quot;);})'>{{ShutdownCurve}}</a></div>{{/ShutdownCurve}}
{{#CogenerationPlant}}<div><b>CogenerationPlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CogenerationPlant}}&quot;);})'>{{CogenerationPlant}}</a></div>{{/CogenerationPlant}}
{{#HeatRateCurve}}<div><b>HeatRateCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HeatRateCurve}}&quot;);})'>{{HeatRateCurve}}</a></div>{{/HeatRateCurve}}
{{#CAESPlant}}<div><b>CAESPlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CAESPlant}}&quot;);})'>{{CAESPlant}}</a></div>{{/CAESPlant}}
{{#StartupModel}}<div><b>StartupModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StartupModel}}&quot;);})'>{{StartupModel}}</a></div>{{/StartupModel}}
{{#CombinedCyclePlant}}<div><b>CombinedCyclePlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CombinedCyclePlant}}&quot;);})'>{{CombinedCyclePlant}}</a></div>{{/CombinedCyclePlant}}
{{#IncrementalHeatRateCurve}}<div><b>IncrementalHeatRateCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IncrementalHeatRateCurve}}&quot;);})'>{{IncrementalHeatRateCurve}}</a></div>{{/IncrementalHeatRateCurve}}
{{#HeatInputCurve}}<div><b>HeatInputCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HeatInputCurve}}&quot;);})'>{{HeatInputCurve}}</a></div>{{/HeatInputCurve}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:HydroGeneratingUnit.energyConversionCapability>([\s\S]*?)<\/cim:HydroGeneratingUnit.energyConversionCapability>/g, obj, "energyConversionCapability", base.to_string, sub, context);
                base.parse_element (/<cim:HydroGeneratingUnit.hydroUnitWaterCost>([\s\S]*?)<\/cim:HydroGeneratingUnit.hydroUnitWaterCost>/g, obj, "hydroUnitWaterCost", base.to_string, sub, context);
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
                base.export_attribute (obj, "HydroGeneratingUnit", "PenstockLossCurve", fields);
                base.export_attribute (obj, "HydroGeneratingUnit", "HydroPowerPlant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#HydroGeneratingUnit_collapse" aria-expanded="true" aria-controls="HydroGeneratingUnit_collapse">HydroGeneratingUnit</a>
<div id="HydroGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
`
      + GeneratingUnit.prototype.template.call (this) +
`
{{#energyConversionCapability}}<div><b>energyConversionCapability</b>: {{energyConversionCapability}}</div>{{/energyConversionCapability}}
{{#hydroUnitWaterCost}}<div><b>hydroUnitWaterCost</b>: {{hydroUnitWaterCost}}</div>{{/hydroUnitWaterCost}}
{{#PenstockLossCurve}}<div><b>PenstockLossCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PenstockLossCurve}}&quot;);})'>{{PenstockLossCurve}}</a></div>{{/PenstockLossCurve}}
{{#HydroPowerPlant}}<div><b>HydroPowerPlant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroPowerPlant}}&quot;);})'>{{HydroPowerPlant}}</a></div>{{/HydroPowerPlant}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:WindGeneratingUnit.windGenUnitType>([\s\S]*?)<\/cim:WindGeneratingUnit.windGenUnitType>/g, obj, "windGenUnitType", base.to_string, sub, context);

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
<a data-toggle="collapse" href="#WindGeneratingUnit_collapse" aria-expanded="true" aria-controls="WindGeneratingUnit_collapse">WindGeneratingUnit</a>
<div id="WindGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
`
      + GeneratingUnit.prototype.template.call (this) +
`
{{#windGenUnitType}}<div><b>windGenUnitType</b>: {{windGenUnitType}}</div>{{/windGenUnitType}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#NuclearGeneratingUnit_collapse" aria-expanded="true" aria-controls="NuclearGeneratingUnit_collapse">NuclearGeneratingUnit</a>
<div id="NuclearGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
`
      + GeneratingUnit.prototype.template.call (this) +
`
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#SolarGeneratingUnit_collapse" aria-expanded="true" aria-controls="SolarGeneratingUnit_collapse">SolarGeneratingUnit</a>
<div id="SolarGeneratingUnit_collapse" class="collapse in" style="margin-left: 10px;">
`
      + GeneratingUnit.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        return (
            {
                HydroEnergyConversionKind: HydroEnergyConversionKind,
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
                FuelType: FuelType,
                EmissionType: EmissionType,
                EmissionValueSource: EmissionValueSource,
                TargetLevelSchedule: TargetLevelSchedule,
                FuelAllocationSchedule: FuelAllocationSchedule,
                Reservoir: Reservoir,
                HeatRateCurve: HeatRateCurve,
                IncrementalHeatRateCurve: IncrementalHeatRateCurve,
                WindGenUnitKind: WindGenUnitKind,
                EmissionAccount: EmissionAccount,
                CombinedCyclePlant: CombinedCyclePlant,
                SteamSendoutSchedule: SteamSendoutSchedule,
                TailbayLossCurve: TailbayLossCurve,
                Emission: Emission,
                CAESPlant: CAESPlant,
                ThermalGeneratingUnit: ThermalGeneratingUnit,
                LevelVsVolumeCurve: LevelVsVolumeCurve,
                CogenerationPlant: CogenerationPlant,
                GeneratorControlMode: GeneratorControlMode,
                StartupModel: StartupModel,
                AirCompressor: AirCompressor,
                HeatInputCurve: HeatInputCurve,
                NuclearGeneratingUnit: NuclearGeneratingUnit,
                SolarGeneratingUnit: SolarGeneratingUnit,
                HydroPlantStorageKind: HydroPlantStorageKind,
                GeneratorControlSource: GeneratorControlSource,
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