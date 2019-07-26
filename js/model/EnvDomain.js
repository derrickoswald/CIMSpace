define
(
    ["model/base", "model/Domain"],
    function (base, Domain)
    {

        /**
         * Method by which information is gathered from station.
         *
         */
        let ReportingMethodKind =
        {
            "automated": "automated",
            "queried": "queried",
            "manual": "manual"
        };
        Object.freeze (ReportingMethodKind);

        /**
         * Kinds of weather conditions.
         *
         */
        let WeatherCodeKind =
        {
            "hail": "hail",
            "blowingDust": "blowingDust",
            "blowingSand": "blowingSand",
            "mist": "mist",
            "blowingSnow": "blowingSnow",
            "fog": "fog",
            "frost": "frost",
            "haze": "haze",
            "iceCrystals": "iceCrystals",
            "iceFog": "iceFog",
            "sleet": "sleet",
            "smoke": "smoke",
            "drizzle": "drizzle",
            "rain": "rain",
            "rainShowers": "rainShowers",
            "rainSnowMix": "rainSnowMix",
            "snowSleetMix": "snowSleetMix",
            "wintryMix": "wintryMix",
            "snow": "snow",
            "snowShowers": "snowShowers",
            "thunderStorms": "thunderStorms",
            "volcanicAsh": "volcanicAsh",
            "waterSpouts": "waterSpouts",
            "freezingSpray": "freezingSpray",
            "freezingDrizzle": "freezingDrizzle",
            "freezingRain": "freezingRain",
            "cloudy": "cloudy",
            "sunny": "sunny"
        };
        Object.freeze (WeatherCodeKind);

        /**
         * The types of relative displacement
         *
         */
        let RelativeDisplacementKind =
        {
            "seaLevel": "seaLevel",
            "ground": "ground",
            "centreEarth": "centreEarth"
        };
        Object.freeze (RelativeDisplacementKind);

        /**
         * Kinds of analogs (floats) measuring a hydrospheric condition.
         *
         */
        let HydrosphericAnalogKind =
        {
            "floodLevel": "floodLevel",
            "stormSurgeHeight": "stormSurgeHeight",
            "waveHeight": "waveHeight",
            "surfaceTemperature": "surfaceTemperature",
            "waterTemperature": "waterTemperature"
        };
        Object.freeze (HydrosphericAnalogKind);

        /**
         * Kind of cloud.
         *
         */
        let CloudKind =
        {
            "altoCumulus": "altoCumulus",
            "altoStratus": "altoStratus",
            "cirroCumulus": "cirroCumulus",
            "cirroStratus": "cirroStratus",
            "cirrus": "cirrus",
            "cumuloNimbus": "cumuloNimbus",
            "cumulus": "cumulus",
            "nimboStratus": "nimboStratus",
            "stratoCumulus": "stratoCumulus",
            "stratus": "stratus",
            "toweringCumulus": "toweringCumulus",
            "other": "other"
        };
        Object.freeze (CloudKind);

        /**
         * Discrete (integer) measuring an environmental condition.
         *
         */
        let EnvironmentalDiscreteKind =
        {
            "cloudCover": "cloudCover"
        };
        Object.freeze (EnvironmentalDiscreteKind);

        /**
         * Kinds of weather condition intensity.
         *
         */
        let IntensityCodeKind =
        {
            "heavy": "heavy",
            "light": "light",
            "veryHeavy": "veryHeavy",
            "veryLight": "veryLight"
        };
        Object.freeze (IntensityCodeKind);

        /**
         * Kinds of weather condition coverage.
         *
         */
        let CoverageCodeKind =
        {
            "brief": "brief",
            "frequent": "frequent",
            "intermittant": "intermittant",
            "isolated": "isolated",
            "numerous": "numerous",
            "occasional": "occasional",
            "partly": "partly",
            "patchy": "patchy",
            "periodsOf": "periodsOf",
            "scattered": "scattered",
            "widespread": "widespread"
        };
        Object.freeze (CoverageCodeKind);

        /**
         * Units in which reporting frequency is specified.
         *
         */
        let TimePeriodUnit =
        {
            "seconds": "seconds",
            "minutes": "minutes",
            "hours": "hours",
            "days": "days",
            "weeks": "weeks",
            "months": "months"
        };
        Object.freeze (TimePeriodUnit);

        /**
         * Fujita scale (referred to as EF-scale starting in 2007) for tornado damage.
         *
         * A set of wind estimates (not measurements) based on damage. It uses three-second gusts estimated at the point of damage based on a judgment of 8 levels of damage to 28 indicators. These estimates vary with height and exposure.
         * The 3 second gust is not the same wind as in standard surface observations.
         * Enumerations based on NOAA conventions.
         *
         */
        let FScale =
        {
            "zero": "zero",
            "one": "one",
            "two": "two",
            "three": "three",
            "four": "four",
            "five": "five",
            "minusNine": "minusNine"
        };
        Object.freeze (FScale);

        /**
         * The nature of the location being defined for an environmental entity.
         *
         * Possible values are center, perimeter, primary, secondary.
         *
         */
        let LocationKind =
        {
            "center": "center",
            "extent": "extent",
            "primary": "primary",
            "secondary": "secondary"
        };
        Object.freeze (LocationKind);

        /**
         * The test applied to determine if the condition is met.
         *
         */
        let TestKind =
        {
            "equalTo": "equalTo",
            "greaterThan": "greaterThan",
            "lessThan": "lessThan",
            "greaterThanOrEqualTo": "greaterThanOrEqualTo",
            "lessThanOrEqualTo": "lessThanOrEqualTo"
        };
        Object.freeze (TestKind);

        /**
         * The type of uncertainty for a reading.
         *
         */
        let UncertaintyKind =
        {
            "standard": "standard",
            "interpolated": "interpolated",
            "estimated": "estimated",
            "unknown": "unknown"
        };
        Object.freeze (UncertaintyKind);

        /**
         * Kinds of analogs (floats) measuring a space condition.
         *
         */
        let SpaceAnalogKind =
        {
            "magneticFieldDirection": "magneticFieldDirection",
            "magneticFieldStrength": "magneticFieldStrength"
        };
        Object.freeze (SpaceAnalogKind);

        /**
         * Kinds of analogs (floats) measuring a geospheric condition.
         *
         */
        let GeosphericAnalogKind =
        {
            "lightningDensity": "lightningDensity",
            "seismicEastWest": "seismicEastWest",
            "seismicNorthSouth": "seismicNorthSouth",
            "seismicVertical": "seismicVertical",
            "snowPackDepth": "snowPackDepth",
            "temperature": "temperature"
        };
        Object.freeze (GeosphericAnalogKind);

        /**
         * Kinds of analogs (floats)  measuring an atmospheric condition.
         *
         */
        let AtmosphericAnalogKind =
        {
            "albedo": "albedo",
            "ambientTemperature": "ambientTemperature",
            "atmosphericPressure": "atmosphericPressure",
            "ceiling": "ceiling",
            "dewPoint": "dewPoint",
            "heatIndex": "heatIndex",
            "horizontalVisibility": "horizontalVisibility",
            "humidity": "humidity",
            "ice": "ice",
            "illuminanceDiffuseHorizontal": "illuminanceDiffuseHorizontal",
            "illuminanceDirectNormal": "illuminanceDirectNormal",
            "illuminanceGlobalHorizontal": "illuminanceGlobalHorizontal",
            "irradianceDiffuseHorizonal": "irradianceDiffuseHorizonal",
            "irradianceDirectNormal": "irradianceDirectNormal",
            "irradianceExtraTerrestrialHorizontal": "irradianceExtraTerrestrialHorizontal",
            "irradianceExtraTerrestrialVertical": "irradianceExtraTerrestrialVertical",
            "irradianceGlobalHorizontal": "irradianceGlobalHorizontal",
            "luminanceZenith": "luminanceZenith",
            "precipitation": "precipitation",
            "rain": "rain",
            "skyCoverageOpaque": "skyCoverageOpaque",
            "skyCoverageTotal": "skyCoverageTotal",
            "snow": "snow",
            "windChill": "windChill",
            "windSpeedGust": "windSpeedGust",
            "windSpeedInstantaneous": "windSpeedInstantaneous",
            "windSpeedPeak": "windSpeedPeak",
            "windSpeedSustained": "windSpeedSustained",
            "verticalVisibility": "verticalVisibility"
        };
        Object.freeze (AtmosphericAnalogKind);

        /**
         * Particulate density as kg/m<sup>3</sup>.
         *
         */
        class ParticulateDensity extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ParticulateDensity;
                if (null == bucket)
                   cim_data.ParticulateDensity = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ParticulateDensity[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ParticulateDensity";
                base.parse_attribute (/<cim:ParticulateDensity.multiplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:ParticulateDensity.unit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
                base.parse_element (/<cim:ParticulateDensity.value>([\s\S]*?)<\/cim:ParticulateDensity.value>/g, obj, "value", base.to_float, sub, context);
                let bucket = context.parsed.ParticulateDensity;
                if (null == bucket)
                   context.parsed.ParticulateDensity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ParticulateDensity", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "ParticulateDensity", "unit", "unit", fields);
                base.export_element (obj, "ParticulateDensity", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ParticulateDensity_collapse" aria-expanded="true" aria-controls="ParticulateDensity_collapse" style="margin-left: 10px;">ParticulateDensity</a></legend>
                    <div id="ParticulateDensity_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["multiplierUnitMultiplier"] = [{ id: '', selected: (!obj["multiplier"])}]; for (let property in Domain.UnitMultiplier) obj["multiplierUnitMultiplier"].push ({ id: property, selected: obj["multiplier"] && obj["multiplier"].endsWith ('.' + property)});
                obj["unitUnitSymbol"] = [{ id: '', selected: (!obj["unit"])}]; for (let property in Domain.UnitSymbol) obj["unitUnitSymbol"].push ({ id: property, selected: obj["unit"] && obj["unit"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["multiplierUnitMultiplier"];
                delete obj["unitUnitSymbol"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ParticulateDensity_collapse" aria-expanded="true" aria-controls="{{id}}_ParticulateDensity_collapse" style="margin-left: 10px;">ParticulateDensity</a></legend>
                    <div id="{{id}}_ParticulateDensity_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control custom-select'>{{#multiplierUnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/multiplierUnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control custom-select'>{{#unitUnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/unitUnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ParticulateDensity" };
                super.submit (id, obj);
                temp = Domain.UnitMultiplier[document.getElementById (id + "_multiplier").value]; if (temp) obj["multiplier"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; else delete obj["multiplier"];
                temp = Domain.UnitSymbol[document.getElementById (id + "_unit").value]; if (temp) obj["unit"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; else delete obj["unit"];
                temp = document.getElementById (id + "_value").value; if ("" !== temp) obj["value"] = temp;

                return (obj);
            }
        }

        /**
         * Vertical displacement relative to either sealevel, ground or the center of the earth.
         *
         */
        class RelativeDisplacement extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RelativeDisplacement;
                if (null == bucket)
                   cim_data.RelativeDisplacement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RelativeDisplacement[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RelativeDisplacement";
                base.parse_element (/<cim:RelativeDisplacement.displacement>([\s\S]*?)<\/cim:RelativeDisplacement.displacement>/g, obj, "displacement", base.to_string, sub, context);
                base.parse_attribute (/<cim:RelativeDisplacement.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.RelativeDisplacement;
                if (null == bucket)
                   context.parsed.RelativeDisplacement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "RelativeDisplacement", "displacement", "displacement",  base.from_string, fields);
                base.export_attribute (obj, "RelativeDisplacement", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RelativeDisplacement_collapse" aria-expanded="true" aria-controls="RelativeDisplacement_collapse" style="margin-left: 10px;">RelativeDisplacement</a></legend>
                    <div id="RelativeDisplacement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#displacement}}<div><b>displacement</b>: {{displacement}}</div>{{/displacement}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindRelativeDisplacementKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in RelativeDisplacementKind) obj["kindRelativeDisplacementKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindRelativeDisplacementKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RelativeDisplacement_collapse" aria-expanded="true" aria-controls="{{id}}_RelativeDisplacement_collapse" style="margin-left: 10px;">RelativeDisplacement</a></legend>
                    <div id="{{id}}_RelativeDisplacement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_displacement'>displacement: </label><div class='col-sm-8'><input id='{{id}}_displacement' class='form-control' type='text'{{#displacement}} value='{{displacement}}'{{/displacement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindRelativeDisplacementKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindRelativeDisplacementKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RelativeDisplacement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_displacement").value; if ("" !== temp) obj["displacement"] = temp;
                temp = RelativeDisplacementKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#RelativeDisplacementKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * The bearing in degrees (with 360 degrees being True North).
         *
         * Measured in degrees clockwise from True North.  0 degrees indicates no direction being given.
         *
         */
        class Bearing extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Bearing;
                if (null == bucket)
                   cim_data.Bearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Bearing[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Bearing";
                base.parse_attribute (/<cim:Bearing.multiplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Bearing.unit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
                base.parse_element (/<cim:Bearing.value>([\s\S]*?)<\/cim:Bearing.value>/g, obj, "value", base.to_float, sub, context);
                let bucket = context.parsed.Bearing;
                if (null == bucket)
                   context.parsed.Bearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "Bearing", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Bearing", "unit", "unit", fields);
                base.export_element (obj, "Bearing", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Bearing_collapse" aria-expanded="true" aria-controls="Bearing_collapse" style="margin-left: 10px;">Bearing</a></legend>
                    <div id="Bearing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["multiplierUnitMultiplier"] = [{ id: '', selected: (!obj["multiplier"])}]; for (let property in Domain.UnitMultiplier) obj["multiplierUnitMultiplier"].push ({ id: property, selected: obj["multiplier"] && obj["multiplier"].endsWith ('.' + property)});
                obj["unitUnitSymbol"] = [{ id: '', selected: (!obj["unit"])}]; for (let property in Domain.UnitSymbol) obj["unitUnitSymbol"].push ({ id: property, selected: obj["unit"] && obj["unit"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["multiplierUnitMultiplier"];
                delete obj["unitUnitSymbol"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Bearing_collapse" aria-expanded="true" aria-controls="{{id}}_Bearing_collapse" style="margin-left: 10px;">Bearing</a></legend>
                    <div id="{{id}}_Bearing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control custom-select'>{{#multiplierUnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/multiplierUnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control custom-select'>{{#unitUnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/unitUnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Bearing" };
                super.submit (id, obj);
                temp = Domain.UnitMultiplier[document.getElementById (id + "_multiplier").value]; if (temp) obj["multiplier"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; else delete obj["multiplier"];
                temp = Domain.UnitSymbol[document.getElementById (id + "_unit").value]; if (temp) obj["unit"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; else delete obj["unit"];
                temp = document.getElementById (id + "_value").value; if ("" !== temp) obj["value"] = temp;

                return (obj);
            }
        }

        /**
         * Magnetic field in nanotesla.
         *
         */
        class MagneticField extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MagneticField;
                if (null == bucket)
                   cim_data.MagneticField = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MagneticField[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MagneticField";
                base.parse_attribute (/<cim:MagneticField.multiplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:MagneticField.unit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
                base.parse_element (/<cim:MagneticField.value>([\s\S]*?)<\/cim:MagneticField.value>/g, obj, "value", base.to_float, sub, context);
                let bucket = context.parsed.MagneticField;
                if (null == bucket)
                   context.parsed.MagneticField = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MagneticField", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "MagneticField", "unit", "unit", fields);
                base.export_element (obj, "MagneticField", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MagneticField_collapse" aria-expanded="true" aria-controls="MagneticField_collapse" style="margin-left: 10px;">MagneticField</a></legend>
                    <div id="MagneticField_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["multiplierUnitMultiplier"] = [{ id: '', selected: (!obj["multiplier"])}]; for (let property in Domain.UnitMultiplier) obj["multiplierUnitMultiplier"].push ({ id: property, selected: obj["multiplier"] && obj["multiplier"].endsWith ('.' + property)});
                obj["unitUnitSymbol"] = [{ id: '', selected: (!obj["unit"])}]; for (let property in Domain.UnitSymbol) obj["unitUnitSymbol"].push ({ id: property, selected: obj["unit"] && obj["unit"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["multiplierUnitMultiplier"];
                delete obj["unitUnitSymbol"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MagneticField_collapse" aria-expanded="true" aria-controls="{{id}}_MagneticField_collapse" style="margin-left: 10px;">MagneticField</a></legend>
                    <div id="{{id}}_MagneticField_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control custom-select'>{{#multiplierUnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/multiplierUnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control custom-select'>{{#unitUnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/unitUnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MagneticField" };
                super.submit (id, obj);
                temp = Domain.UnitMultiplier[document.getElementById (id + "_multiplier").value]; if (temp) obj["multiplier"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; else delete obj["multiplier"];
                temp = Domain.UnitSymbol[document.getElementById (id + "_unit").value]; if (temp) obj["unit"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; else delete obj["unit"];
                temp = document.getElementById (id + "_value").value; if ("" !== temp) obj["value"] = temp;

                return (obj);
            }
        }

        return (
            {
                IntensityCodeKind: IntensityCodeKind,
                TestKind: TestKind,
                CloudKind: CloudKind,
                MagneticField: MagneticField,
                LocationKind: LocationKind,
                GeosphericAnalogKind: GeosphericAnalogKind,
                FScale: FScale,
                HydrosphericAnalogKind: HydrosphericAnalogKind,
                ReportingMethodKind: ReportingMethodKind,
                SpaceAnalogKind: SpaceAnalogKind,
                EnvironmentalDiscreteKind: EnvironmentalDiscreteKind,
                WeatherCodeKind: WeatherCodeKind,
                RelativeDisplacement: RelativeDisplacement,
                CoverageCodeKind: CoverageCodeKind,
                Bearing: Bearing,
                TimePeriodUnit: TimePeriodUnit,
                UncertaintyKind: UncertaintyKind,
                ParticulateDensity: ParticulateDensity,
                RelativeDisplacementKind: RelativeDisplacementKind,
                AtmosphericAnalogKind: AtmosphericAnalogKind
            }
        );
    }
);