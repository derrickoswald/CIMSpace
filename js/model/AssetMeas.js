define
(
    ["model/base", "model/Core", "model/Meas"],
    function (base, Core, Meas)
    {
        /**
         * Possible calculation techniques.
         *
         */
        let CalculationTechniqueKind =
        {
            "trueRMS": "trueRMS",
            "minimum": "minimum",
            "maximum": "maximum",
            "average": "average"
        };
        Object.freeze (CalculationTechniqueKind);

        /**
         * Analogs representing oil metals and elements analysis result.
         *
         */
        let OilAnalysisMetalsAnalogKind =
        {
            "aluminum": "aluminum",
            "aluminumParticulate": "aluminumParticulate",
            "barium": "barium",
            "boron": "boron",
            "calcium": "calcium",
            "cadmium": "cadmium",
            "chromium": "chromium",
            "copper": "copper",
            "copperParticulate": "copperParticulate",
            "iron": "iron",
            "ironParticulate": "ironParticulate",
            "lead": "lead",
            "leadParticulate": "leadParticulate",
            "lithium": "lithium",
            "molybdenum": "molybdenum",
            "magnesium": "magnesium",
            "nickel": "nickel",
            "phosphorus": "phosphorus",
            "silicon": "silicon",
            "silver": "silver",
            "silverParticulate": "silverParticulate",
            "sodium": "sodium",
            "tin": "tin",
            "titanium": "titanium",
            "tungsten": "tungsten",
            "vanadium": "vanadium",
            "zinc": "zinc",
            "zincParticulate": "zincParticulate"
        };
        Object.freeze (OilAnalysisMetalsAnalogKind);

        /**
         * Discretes representing oil fluid test analysis result.
         *
         */
        let OilAnalysisFluidDiscreteKind =
        {
            "colorNumber": "colorNumber",
            "colorNumberPlatinumCobaltScale": "colorNumberPlatinumCobaltScale",
            "corrosiveSulphurByD1275": "corrosiveSulphurByD1275",
            "corrosiveSulphurBy62535": "corrosiveSulphurBy62535",
            "corrosiveSulphurBy51353": "corrosiveSulphurBy51353",
            "tarnishLevel": "tarnishLevel",
            "sludgePrecipitation": "sludgePrecipitation"
        };
        Object.freeze (OilAnalysisFluidDiscreteKind);

        /**
         * Analogs representing oil moisture analysis result.
         *
         */
        let OilAnalysisMoistureAnalogKind =
        {
            "waterContent": "waterContent",
            "waterContentMonitoredViaInfrared": "waterContentMonitoredViaInfrared",
            "waterContentMonitoredViaCapacitance": "waterContentMonitoredViaCapacitance",
            "waterContentMonitoredViaAluminumOxide": "waterContentMonitoredViaAluminumOxide",
            "waterContentMonitoredViaOther": "waterContentMonitoredViaOther",
            "relativeSaturation": "relativeSaturation",
            "relativeSaturationCalculated": "relativeSaturationCalculated",
            "dewPoint": "dewPoint"
        };
        Object.freeze (OilAnalysisMoistureAnalogKind);

        /**
         * Discretes representing oil PCB test analysis result.
         *
         */
        let OilAnalysisPCBDiscreteKind =
        {
            "testKitPCB": "testKitPCB"
        };
        Object.freeze (OilAnalysisPCBDiscreteKind);

        /**
         * Analogs typically recorded during a field inspection.
         *
         */
        let InspectionAnalogKind =
        {
            "SF6PressureReading": "SF6PressureReading",
            "AirPressureReading": "AirPressureReading",
            "airPressureHPSystemReading": "airPressureHPSystemReading",
            "compressorHourMeterReading": "compressorHourMeterReading",
            "airPressureLPSystemReading": "airPressureLPSystemReading"
        };
        Object.freeze (InspectionAnalogKind);

        /**
         * Units in which calculation interval period is defined.
         *
         */
        let CalculationIntervalUnitKind =
        {
            "milliSecond": "milliSecond",
            "perCycle": "perCycle",
            "cycle": "cycle",
            "second": "second",
            "minute": "minute",
            "day": "day",
            "hour": "hour",
            "week": "week",
            "month": "month",
            "year": "year",
            "season": "season"
        };
        Object.freeze (CalculationIntervalUnitKind);

        /**
         * Analogs representing oil PCB analysis result.
         *
         */
        let OilAnalysisPCBAnalogKind =
        {
            "aroclor1221": "aroclor1221",
            "aroclor1242": "aroclor1242",
            "aroclor1254": "aroclor1254",
            "aroclor1260": "aroclor1260",
            "aroclor1016": "aroclor1016",
            "totalPCB": "totalPCB"
        };
        Object.freeze (OilAnalysisPCBAnalogKind);

        /**
         * Discretes representing oil particulate analysis result.
         *
         */
        let OilAnalysisParticleDiscreteKind =
        {
            "opacity": "opacity"
        };
        Object.freeze (OilAnalysisParticleDiscreteKind);

        /**
         * Definition of type of string useful in asset domain.
         *
         */
        let AssetStringKind =
        {
            "visualExamRemarks": "visualExamRemarks"
        };
        Object.freeze (AssetStringKind);

        /**
         * Discretes representing breaker inspection result.
         *
         */
        let InspectionDiscreteKind =
        {
            "visibleDamageOrLeaks": "visibleDamageOrLeaks",
            "controlCabinetHeaterOn": "controlCabinetHeaterOn",
            "bushingOilLevelsOK": "bushingOilLevelsOK",
            "oilTankLevelsOK": "oilTankLevelsOK",
            "springPressureReadingOK": "springPressureReadingOK",
            "gasIndicatorNormal": "gasIndicatorNormal",
            "hydraulicOilLevelOK": "hydraulicOilLevelOK",
            "hydraulicFluidLevelOK": "hydraulicFluidLevelOK",
            "checkOilLevelOK": "checkOilLevelOK",
            "operationCount": "operationCount",
            "motorOperationsCount": "motorOperationsCount",
            "pumpMotorOperationCount": "pumpMotorOperationCount",
            "lowToHighPressureCount": "lowToHighPressureCount"
        };
        Object.freeze (InspectionDiscreteKind);

        /**
         * Analogs representing temperatures or pressures related to assets.
         *
         */
        let AssetTemperaturePressureAnalogKind =
        {
            "oilTemperatureAtValve": "oilTemperatureAtValve",
            "oilPressureAtValve": "oilPressureAtValve"
        };
        Object.freeze (AssetTemperaturePressureAnalogKind);

        /**
         * Analogs representing oil particulate analysis result.
         *
         */
        let OilAnalysisParticleAnalogKind =
        {
            "count2Plus": "count2Plus",
            "count4Plus": "count4Plus",
            "count5Plus": "count5Plus",
            "count6Plus": "count6Plus",
            "count10Plus": "count10Plus",
            "count14Plus": "count14Plus",
            "count15Plus": "count15Plus",
            "count21Plus": "count21Plus",
            "count25Plus": "count25Plus",
            "count38Plus": "count38Plus",
            "count50Plus": "count50Plus",
            "count70Plus": "count70Plus",
            "count100Plus": "count100Plus",
            "fibrePercent": "fibrePercent",
            "metalPercent": "metalPercent",
            "carbonPercent": "carbonPercent",
            "otherPercent": "otherPercent"
        };
        Object.freeze (OilAnalysisParticleAnalogKind);

        /**
         * The mode of the calculation (total, periodic, sliding).
         *
         */
        let CalculationModeKind =
        {
            "total": "total",
            "period": "period",
            "sliding": "sliding"
        };
        Object.freeze (CalculationModeKind);

        /**
         * Analogs representing oil fluid test analysis result.
         *
         */
        let OilAnalysisFluidAnalogKind =
        {
            "acidNumber": "acidNumber",
            "interfacialTension": "interfacialTension",
            "dielectricBreakdown": "dielectricBreakdown",
            "powerFactorPercent": "powerFactorPercent",
            "dissipationFactor": "dissipationFactor",
            "dissipationFactorPercent": "dissipationFactorPercent",
            "oxidationInhibitorDBP": "oxidationInhibitorDBP",
            "oxidationInhibitorDBPC": "oxidationInhibitorDBPC",
            "oxidationInhibitorD2668": "oxidationInhibitorD2668",
            "additiveDBDS": "additiveDBDS",
            "specificGravity": "specificGravity",
            "density": "density",
            "firePoint": "firePoint",
            "flashPointOpenCup": "flashPointOpenCup",
            "flashPointClosedCup": "flashPointClosedCup",
            "pourPoint": "pourPoint",
            "pourPointAutomatic": "pourPointAutomatic",
            "kinematicViscosity": "kinematicViscosity",
            "staticElectrification": "staticElectrification",
            "resistivity": "resistivity",
            "passivatorContent": "passivatorContent",
            "passivatorIrgamet39": "passivatorIrgamet39",
            "passivatorTTA": "passivatorTTA",
            "passivatorBTA": "passivatorBTA",
            "sedimentAndSludgePercent": "sedimentAndSludgePercent",
            "carbonyl": "carbonyl",
            "aromatics": "aromatics",
            "oxidation": "oxidation",
            "sludge": "sludge",
            "solubleAcids": "solubleAcids",
            "volatileAcids": "volatileAcids",
            "totalAcids": "totalAcids",
            "inductionTime": "inductionTime",
            "inhibitor61125MethodC": "inhibitor61125MethodC",
            "duration61125MethodC": "duration61125MethodC",
            "petroleumOrigin": "petroleumOrigin"
        };
        Object.freeze (OilAnalysisFluidAnalogKind);

        /**
         * Analogs representing oil dissolved gas analysis result.
         *
         */
        let OilAnalysisGasAnalogKind =
        {
            "hydrogen": "hydrogen",
            "methane": "methane",
            "ethane": "ethane",
            "ethylene": "ethylene",
            "acetylene": "acetylene",
            "carbonMonoxide": "carbonMonoxide",
            "propane": "propane",
            "propene": "propene",
            "carbonDioxide": "carbonDioxide",
            "oxygen": "oxygen",
            "nitrogen": "nitrogen",
            "totalDissolvedGasPercent": "totalDissolvedGasPercent",
            "totalCombustibleGasPercent": "totalCombustibleGasPercent",
            "butane": "butane",
            "carbon": "carbon",
            "carbon3": "carbon3",
            "carbon4": "carbon4",
            "isobutane": "isobutane",
            "equivalentTCGPercent": "equivalentTCGPercent",
            "totalHeatGas": "totalHeatGas",
            "totalDissolvedCombustibleGas": "totalDissolvedCombustibleGas",
            "totalPartialPressure": "totalPartialPressure",
            "estimatedSafeHandlingLimit": "estimatedSafeHandlingLimit",
            "hydran": "hydran",
            "hydranPredicted": "hydranPredicted"
        };
        Object.freeze (OilAnalysisGasAnalogKind);

        /**
         * Analogs representing oil paper degradation analysis result.
         *
         */
        let OilAnalysisPaperAnalogKind =
        {
            "hydroxymethylfurfural": "hydroxymethylfurfural",
            "furfurylAlcohol": "furfurylAlcohol",
            "furfural": "furfural",
            "methylfurfural": "methylfurfural",
            "totalFuran": "totalFuran",
            "degreeOfPolymerization": "degreeOfPolymerization",
            "degreeOfPolymerizationCalculated": "degreeOfPolymerizationCalculated",
            "methanol": "methanol",
            "ethanol": "ethanol",
            "tensileStrength": "tensileStrength",
            "solidInsulationDielectricStrength": "solidInsulationDielectricStrength",
            "acetylfuran": "acetylfuran"
        };
        Object.freeze (OilAnalysisPaperAnalogKind);

        /**
         * The hierarchy of calculation methods used to derive this measurement.
         *
         */
        class CalculationMethodHierarchy extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CalculationMethodHierarchy;
                if (null == bucket)
                   cim_data.CalculationMethodHierarchy = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CalculationMethodHierarchy[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CalculationMethodHierarchy";
                base.parse_attributes (/<cim:CalculationMethodHierarchy.CalculationMethodOrder\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CalculationMethodOrder", sub, context);
                base.parse_attribute (/<cim:CalculationMethodHierarchy.MeasurementValue\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MeasurementValue", sub, context);
                base.parse_attributes (/<cim:CalculationMethodHierarchy.Measurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Measurement", sub, context);
                let bucket = context.parsed.CalculationMethodHierarchy;
                if (null == bucket)
                   context.parsed.CalculationMethodHierarchy = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "CalculationMethodHierarchy", "CalculationMethodOrder", "CalculationMethodOrder", fields);
                base.export_attribute (obj, "CalculationMethodHierarchy", "MeasurementValue", "MeasurementValue", fields);
                base.export_attributes (obj, "CalculationMethodHierarchy", "Measurement", "Measurement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CalculationMethodHierarchy_collapse" aria-expanded="true" aria-controls="CalculationMethodHierarchy_collapse" style="margin-left: 10px;">CalculationMethodHierarchy</a></legend>
                    <div id="CalculationMethodHierarchy_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#CalculationMethodOrder}}<div><b>CalculationMethodOrder</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CalculationMethodOrder}}
                    {{#MeasurementValue}}<div><b>MeasurementValue</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MeasurementValue}}");}); return false;'>{{MeasurementValue}}</a></div>{{/MeasurementValue}}
                    {{#Measurement}}<div><b>Measurement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Measurement}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["CalculationMethodOrder"]) obj["CalculationMethodOrder_string"] = obj["CalculationMethodOrder"].join ();
                if (obj["Measurement"]) obj["Measurement_string"] = obj["Measurement"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["CalculationMethodOrder_string"];
                delete obj["Measurement_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CalculationMethodHierarchy_collapse" aria-expanded="true" aria-controls="{{id}}_CalculationMethodHierarchy_collapse" style="margin-left: 10px;">CalculationMethodHierarchy</a></legend>
                    <div id="{{id}}_CalculationMethodHierarchy_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MeasurementValue'>MeasurementValue: </label><div class='col-sm-8'><input id='{{id}}_MeasurementValue' class='form-control' type='text'{{#MeasurementValue}} value='{{MeasurementValue}}'{{/MeasurementValue}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CalculationMethodHierarchy" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MeasurementValue").value; if ("" !== temp) obj["MeasurementValue"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CalculationMethodOrder", "0..*", "1", "CalculationMethodOrder", "CalculationMethodHierarchy"],
                            ["MeasurementValue", "0..1", "0..1", "MeasurementValue", "CalculationMethodHierarchy"],
                            ["Measurement", "0..*", "0..1", "Measurement", "CalculationMethodHierarchy"]
                        ]
                    )
                );
            }
        }

        /**
         * The order of this calculation method in a hierarchy of calculation methods.
         *
         */
        class CalculationMethodOrder extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CalculationMethodOrder;
                if (null == bucket)
                   cim_data.CalculationMethodOrder = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CalculationMethodOrder[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CalculationMethodOrder";
                base.parse_element (/<cim:CalculationMethodOrder.order>([\s\S]*?)<\/cim:CalculationMethodOrder.order>/g, obj, "order", base.to_string, sub, context);
                base.parse_attribute (/<cim:CalculationMethodOrder.CalculationMethodHierarchy\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CalculationMethodHierarchy", sub, context);
                base.parse_attribute (/<cim:CalculationMethodOrder.StatisicalCalculation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StatisicalCalculation", sub, context);
                let bucket = context.parsed.CalculationMethodOrder;
                if (null == bucket)
                   context.parsed.CalculationMethodOrder = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "CalculationMethodOrder", "order", "order",  base.from_string, fields);
                base.export_attribute (obj, "CalculationMethodOrder", "CalculationMethodHierarchy", "CalculationMethodHierarchy", fields);
                base.export_attribute (obj, "CalculationMethodOrder", "StatisicalCalculation", "StatisicalCalculation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CalculationMethodOrder_collapse" aria-expanded="true" aria-controls="CalculationMethodOrder_collapse" style="margin-left: 10px;">CalculationMethodOrder</a></legend>
                    <div id="CalculationMethodOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#order}}<div><b>order</b>: {{order}}</div>{{/order}}
                    {{#CalculationMethodHierarchy}}<div><b>CalculationMethodHierarchy</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CalculationMethodHierarchy}}");}); return false;'>{{CalculationMethodHierarchy}}</a></div>{{/CalculationMethodHierarchy}}
                    {{#StatisicalCalculation}}<div><b>StatisicalCalculation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{StatisicalCalculation}}");}); return false;'>{{StatisicalCalculation}}</a></div>{{/StatisicalCalculation}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CalculationMethodOrder_collapse" aria-expanded="true" aria-controls="{{id}}_CalculationMethodOrder_collapse" style="margin-left: 10px;">CalculationMethodOrder</a></legend>
                    <div id="{{id}}_CalculationMethodOrder_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_order'>order: </label><div class='col-sm-8'><input id='{{id}}_order' class='form-control' type='text'{{#order}} value='{{order}}'{{/order}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CalculationMethodHierarchy'>CalculationMethodHierarchy: </label><div class='col-sm-8'><input id='{{id}}_CalculationMethodHierarchy' class='form-control' type='text'{{#CalculationMethodHierarchy}} value='{{CalculationMethodHierarchy}}'{{/CalculationMethodHierarchy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StatisicalCalculation'>StatisicalCalculation: </label><div class='col-sm-8'><input id='{{id}}_StatisicalCalculation' class='form-control' type='text'{{#StatisicalCalculation}} value='{{StatisicalCalculation}}'{{/StatisicalCalculation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CalculationMethodOrder" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_order").value; if ("" !== temp) obj["order"] = temp;
                temp = document.getElementById (id + "_CalculationMethodHierarchy").value; if ("" !== temp) obj["CalculationMethodHierarchy"] = temp;
                temp = document.getElementById (id + "_StatisicalCalculation").value; if ("" !== temp) obj["StatisicalCalculation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CalculationMethodHierarchy", "1", "0..*", "CalculationMethodHierarchy", "CalculationMethodOrder"],
                            ["StatisicalCalculation", "1", "0..*", "StatisticalCalculation", "CalculationMethodOrder"]
                        ]
                    )
                );
            }
        }

        /**
         * Definition of type of analog useful in asset domain.
         *
         */
        class AssetAnalog extends Meas.Analog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetAnalog;
                if (null == bucket)
                   cim_data.AssetAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = Meas.Analog.prototype.parse.call (this, context, sub);
                obj.cls = "AssetAnalog";
                base.parse_element (/<cim:AssetAnalog.detectionLimit>([\s\S]*?)<\/cim:AssetAnalog.detectionLimit>/g, obj, "detectionLimit", base.to_float, sub, context);
                base.parse_element (/<cim:AssetAnalog.precision>([\s\S]*?)<\/cim:AssetAnalog.precision>/g, obj, "precision", base.to_float, sub, context);
                base.parse_element (/<cim:AssetAnalog.reportingTemperature>([\s\S]*?)<\/cim:AssetAnalog.reportingTemperature>/g, obj, "reportingTemperature", base.to_string, sub, context);
                base.parse_attribute (/<cim:AssetAnalog.TestStandard\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TestStandard", sub, context);
                let bucket = context.parsed.AssetAnalog;
                if (null == bucket)
                   context.parsed.AssetAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Meas.Analog.prototype.export.call (this, obj, false);

                base.export_element (obj, "AssetAnalog", "detectionLimit", "detectionLimit",  base.from_float, fields);
                base.export_element (obj, "AssetAnalog", "precision", "precision",  base.from_float, fields);
                base.export_element (obj, "AssetAnalog", "reportingTemperature", "reportingTemperature",  base.from_string, fields);
                base.export_attribute (obj, "AssetAnalog", "TestStandard", "TestStandard", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetAnalog_collapse" aria-expanded="true" aria-controls="AssetAnalog_collapse" style="margin-left: 10px;">AssetAnalog</a></legend>
                    <div id="AssetAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.Analog.prototype.template.call (this) +
                    `
                    {{#detectionLimit}}<div><b>detectionLimit</b>: {{detectionLimit}}</div>{{/detectionLimit}}
                    {{#precision}}<div><b>precision</b>: {{precision}}</div>{{/precision}}
                    {{#reportingTemperature}}<div><b>reportingTemperature</b>: {{reportingTemperature}}</div>{{/reportingTemperature}}
                    {{#TestStandard}}<div><b>TestStandard</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TestStandard}}");}); return false;'>{{TestStandard}}</a></div>{{/TestStandard}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_AssetAnalog_collapse" style="margin-left: 10px;">AssetAnalog</a></legend>
                    <div id="{{id}}_AssetAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.Analog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_detectionLimit'>detectionLimit: </label><div class='col-sm-8'><input id='{{id}}_detectionLimit' class='form-control' type='text'{{#detectionLimit}} value='{{detectionLimit}}'{{/detectionLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_precision'>precision: </label><div class='col-sm-8'><input id='{{id}}_precision' class='form-control' type='text'{{#precision}} value='{{precision}}'{{/precision}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reportingTemperature'>reportingTemperature: </label><div class='col-sm-8'><input id='{{id}}_reportingTemperature' class='form-control' type='text'{{#reportingTemperature}} value='{{reportingTemperature}}'{{/reportingTemperature}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TestStandard'>TestStandard: </label><div class='col-sm-8'><input id='{{id}}_TestStandard' class='form-control' type='text'{{#TestStandard}} value='{{TestStandard}}'{{/TestStandard}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetAnalog" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_detectionLimit").value; if ("" !== temp) obj["detectionLimit"] = temp;
                temp = document.getElementById (id + "_precision").value; if ("" !== temp) obj["precision"] = temp;
                temp = document.getElementById (id + "_reportingTemperature").value; if ("" !== temp) obj["reportingTemperature"] = temp;
                temp = document.getElementById (id + "_TestStandard").value; if ("" !== temp) obj["TestStandard"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TestStandard", "0..1", "0..*", "TestStandard", "AssetAnalog"]
                        ]
                    )
                );
            }
        }

        /**
         * Description of statistical calculation performed.
         *
         */
        class StatisticalCalculation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.StatisticalCalculation;
                if (null == bucket)
                   cim_data.StatisticalCalculation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StatisticalCalculation[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "StatisticalCalculation";
                base.parse_attribute (/<cim:StatisticalCalculation.calculationMode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "calculationMode", sub, context);
                base.parse_attribute (/<cim:StatisticalCalculation.calculationTechnique\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "calculationTechnique", sub, context);
                base.parse_attributes (/<cim:StatisticalCalculation.CalculationMethodOrder\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CalculationMethodOrder", sub, context);
                let bucket = context.parsed.StatisticalCalculation;
                if (null == bucket)
                   context.parsed.StatisticalCalculation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "StatisticalCalculation", "calculationMode", "calculationMode", fields);
                base.export_attribute (obj, "StatisticalCalculation", "calculationTechnique", "calculationTechnique", fields);
                base.export_attributes (obj, "StatisticalCalculation", "CalculationMethodOrder", "CalculationMethodOrder", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StatisticalCalculation_collapse" aria-expanded="true" aria-controls="StatisticalCalculation_collapse" style="margin-left: 10px;">StatisticalCalculation</a></legend>
                    <div id="StatisticalCalculation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#calculationMode}}<div><b>calculationMode</b>: {{calculationMode}}</div>{{/calculationMode}}
                    {{#calculationTechnique}}<div><b>calculationTechnique</b>: {{calculationTechnique}}</div>{{/calculationTechnique}}
                    {{#CalculationMethodOrder}}<div><b>CalculationMethodOrder</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/CalculationMethodOrder}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["calculationModeCalculationModeKind"] = [{ id: '', selected: (!obj["calculationMode"])}]; for (let property in CalculationModeKind) obj["calculationModeCalculationModeKind"].push ({ id: property, selected: obj["calculationMode"] && obj["calculationMode"].endsWith ('.' + property)});
                obj["calculationTechniqueCalculationTechniqueKind"] = [{ id: '', selected: (!obj["calculationTechnique"])}]; for (let property in CalculationTechniqueKind) obj["calculationTechniqueCalculationTechniqueKind"].push ({ id: property, selected: obj["calculationTechnique"] && obj["calculationTechnique"].endsWith ('.' + property)});
                if (obj["CalculationMethodOrder"]) obj["CalculationMethodOrder_string"] = obj["CalculationMethodOrder"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["calculationModeCalculationModeKind"];
                delete obj["calculationTechniqueCalculationTechniqueKind"];
                delete obj["CalculationMethodOrder_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StatisticalCalculation_collapse" aria-expanded="true" aria-controls="{{id}}_StatisticalCalculation_collapse" style="margin-left: 10px;">StatisticalCalculation</a></legend>
                    <div id="{{id}}_StatisticalCalculation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_calculationMode'>calculationMode: </label><div class='col-sm-8'><select id='{{id}}_calculationMode' class='form-control custom-select'>{{#calculationModeCalculationModeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/calculationModeCalculationModeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_calculationTechnique'>calculationTechnique: </label><div class='col-sm-8'><select id='{{id}}_calculationTechnique' class='form-control custom-select'>{{#calculationTechniqueCalculationTechniqueKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/calculationTechniqueCalculationTechniqueKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "StatisticalCalculation" };
                super.submit (id, obj);
                temp = CalculationModeKind[document.getElementById (id + "_calculationMode").value]; if (temp) obj["calculationMode"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#CalculationModeKind." + temp; else delete obj["calculationMode"];
                temp = CalculationTechniqueKind[document.getElementById (id + "_calculationTechnique").value]; if (temp) obj["calculationTechnique"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#CalculationTechniqueKind." + temp; else delete obj["calculationTechnique"];

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CalculationMethodOrder", "0..*", "1", "CalculationMethodOrder", "StatisicalCalculation"]
                        ]
                    )
                );
            }
        }

        /**
         * Definition of type of string measurement useful in asset domain.
         *
         */
        class AssetStringMeasurement extends Meas.StringMeasurement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetStringMeasurement;
                if (null == bucket)
                   cim_data.AssetStringMeasurement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetStringMeasurement[obj.id];
            }

            parse (context, sub)
            {
                let obj = Meas.StringMeasurement.prototype.parse.call (this, context, sub);
                obj.cls = "AssetStringMeasurement";
                base.parse_attribute (/<cim:AssetStringMeasurement.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:AssetStringMeasurement.TestStandard\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TestStandard", sub, context);
                let bucket = context.parsed.AssetStringMeasurement;
                if (null == bucket)
                   context.parsed.AssetStringMeasurement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Meas.StringMeasurement.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AssetStringMeasurement", "kind", "kind", fields);
                base.export_attribute (obj, "AssetStringMeasurement", "TestStandard", "TestStandard", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetStringMeasurement_collapse" aria-expanded="true" aria-controls="AssetStringMeasurement_collapse" style="margin-left: 10px;">AssetStringMeasurement</a></legend>
                    <div id="AssetStringMeasurement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.StringMeasurement.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#TestStandard}}<div><b>TestStandard</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TestStandard}}");}); return false;'>{{TestStandard}}</a></div>{{/TestStandard}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindAssetStringKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in AssetStringKind) obj["kindAssetStringKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindAssetStringKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetStringMeasurement_collapse" aria-expanded="true" aria-controls="{{id}}_AssetStringMeasurement_collapse" style="margin-left: 10px;">AssetStringMeasurement</a></legend>
                    <div id="{{id}}_AssetStringMeasurement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.StringMeasurement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindAssetStringKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindAssetStringKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TestStandard'>TestStandard: </label><div class='col-sm-8'><input id='{{id}}_TestStandard' class='form-control' type='text'{{#TestStandard}} value='{{TestStandard}}'{{/TestStandard}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetStringMeasurement" };
                super.submit (id, obj);
                temp = AssetStringKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#AssetStringKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_TestStandard").value; if ("" !== temp) obj["TestStandard"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TestStandard", "0..1", "0..*", "TestStandard", "AssetString"]
                        ]
                    )
                );
            }
        }

        /**
         * Definition of type of discrete useful in asset domain.
         *
         */
        class AssetDiscrete extends Meas.Discrete
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetDiscrete;
                if (null == bucket)
                   cim_data.AssetDiscrete = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetDiscrete[obj.id];
            }

            parse (context, sub)
            {
                let obj = Meas.Discrete.prototype.parse.call (this, context, sub);
                obj.cls = "AssetDiscrete";
                base.parse_attribute (/<cim:AssetDiscrete.TestStandard\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TestStandard", sub, context);
                let bucket = context.parsed.AssetDiscrete;
                if (null == bucket)
                   context.parsed.AssetDiscrete = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Meas.Discrete.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AssetDiscrete", "TestStandard", "TestStandard", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetDiscrete_collapse" aria-expanded="true" aria-controls="AssetDiscrete_collapse" style="margin-left: 10px;">AssetDiscrete</a></legend>
                    <div id="AssetDiscrete_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.Discrete.prototype.template.call (this) +
                    `
                    {{#TestStandard}}<div><b>TestStandard</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TestStandard}}");}); return false;'>{{TestStandard}}</a></div>{{/TestStandard}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetDiscrete_collapse" aria-expanded="true" aria-controls="{{id}}_AssetDiscrete_collapse" style="margin-left: 10px;">AssetDiscrete</a></legend>
                    <div id="{{id}}_AssetDiscrete_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.Discrete.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TestStandard'>TestStandard: </label><div class='col-sm-8'><input id='{{id}}_TestStandard' class='form-control' type='text'{{#TestStandard}} value='{{TestStandard}}'{{/TestStandard}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetDiscrete" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_TestStandard").value; if ("" !== temp) obj["TestStandard"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TestStandard", "0..1", "0..*", "TestStandard", "AssetDiscrete"]
                        ]
                    )
                );
            }
        }

        /**
         * Asset oil analysis metals type of analog.
         *
         */
        class OilAnalysisMetalsAnalog extends AssetAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OilAnalysisMetalsAnalog;
                if (null == bucket)
                   cim_data.OilAnalysisMetalsAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OilAnalysisMetalsAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "OilAnalysisMetalsAnalog";
                base.parse_attribute (/<cim:OilAnalysisMetalsAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.OilAnalysisMetalsAnalog;
                if (null == bucket)
                   context.parsed.OilAnalysisMetalsAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OilAnalysisMetalsAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OilAnalysisMetalsAnalog_collapse" aria-expanded="true" aria-controls="OilAnalysisMetalsAnalog_collapse" style="margin-left: 10px;">OilAnalysisMetalsAnalog</a></legend>
                    <div id="OilAnalysisMetalsAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindOilAnalysisMetalsAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in OilAnalysisMetalsAnalogKind) obj["kindOilAnalysisMetalsAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindOilAnalysisMetalsAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OilAnalysisMetalsAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_OilAnalysisMetalsAnalog_collapse" style="margin-left: 10px;">OilAnalysisMetalsAnalog</a></legend>
                    <div id="{{id}}_OilAnalysisMetalsAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindOilAnalysisMetalsAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindOilAnalysisMetalsAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OilAnalysisMetalsAnalog" };
                super.submit (id, obj);
                temp = OilAnalysisMetalsAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#OilAnalysisMetalsAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Temperature or pressure type of asset analog.
         *
         */
        class AssetTemperaturePressureAnalog extends AssetAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AssetTemperaturePressureAnalog;
                if (null == bucket)
                   cim_data.AssetTemperaturePressureAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AssetTemperaturePressureAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "AssetTemperaturePressureAnalog";
                base.parse_attribute (/<cim:AssetTemperaturePressureAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.AssetTemperaturePressureAnalog;
                if (null == bucket)
                   context.parsed.AssetTemperaturePressureAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AssetTemperaturePressureAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AssetTemperaturePressureAnalog_collapse" aria-expanded="true" aria-controls="AssetTemperaturePressureAnalog_collapse" style="margin-left: 10px;">AssetTemperaturePressureAnalog</a></legend>
                    <div id="AssetTemperaturePressureAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindAssetTemperaturePressureAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in AssetTemperaturePressureAnalogKind) obj["kindAssetTemperaturePressureAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindAssetTemperaturePressureAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AssetTemperaturePressureAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_AssetTemperaturePressureAnalog_collapse" style="margin-left: 10px;">AssetTemperaturePressureAnalog</a></legend>
                    <div id="{{id}}_AssetTemperaturePressureAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindAssetTemperaturePressureAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindAssetTemperaturePressureAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AssetTemperaturePressureAnalog" };
                super.submit (id, obj);
                temp = AssetTemperaturePressureAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#AssetTemperaturePressureAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Asset oil analysis fluid test type of analog.
         *
         */
        class OilAnalysisFluidAnalog extends AssetAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OilAnalysisFluidAnalog;
                if (null == bucket)
                   cim_data.OilAnalysisFluidAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OilAnalysisFluidAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "OilAnalysisFluidAnalog";
                base.parse_attribute (/<cim:OilAnalysisFluidAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.OilAnalysisFluidAnalog;
                if (null == bucket)
                   context.parsed.OilAnalysisFluidAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OilAnalysisFluidAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OilAnalysisFluidAnalog_collapse" aria-expanded="true" aria-controls="OilAnalysisFluidAnalog_collapse" style="margin-left: 10px;">OilAnalysisFluidAnalog</a></legend>
                    <div id="OilAnalysisFluidAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindOilAnalysisFluidAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in OilAnalysisFluidAnalogKind) obj["kindOilAnalysisFluidAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindOilAnalysisFluidAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OilAnalysisFluidAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_OilAnalysisFluidAnalog_collapse" style="margin-left: 10px;">OilAnalysisFluidAnalog</a></legend>
                    <div id="{{id}}_OilAnalysisFluidAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindOilAnalysisFluidAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindOilAnalysisFluidAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OilAnalysisFluidAnalog" };
                super.submit (id, obj);
                temp = OilAnalysisFluidAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#OilAnalysisFluidAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Asset oil analysis moisture type of analog.
         *
         */
        class OilAnalysisMoistureAnalog extends AssetAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OilAnalysisMoistureAnalog;
                if (null == bucket)
                   cim_data.OilAnalysisMoistureAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OilAnalysisMoistureAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "OilAnalysisMoistureAnalog";
                base.parse_attribute (/<cim:OilAnalysisMoistureAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.OilAnalysisMoistureAnalog;
                if (null == bucket)
                   context.parsed.OilAnalysisMoistureAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OilAnalysisMoistureAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OilAnalysisMoistureAnalog_collapse" aria-expanded="true" aria-controls="OilAnalysisMoistureAnalog_collapse" style="margin-left: 10px;">OilAnalysisMoistureAnalog</a></legend>
                    <div id="OilAnalysisMoistureAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindOilAnalysisMoistureAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in OilAnalysisMoistureAnalogKind) obj["kindOilAnalysisMoistureAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindOilAnalysisMoistureAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OilAnalysisMoistureAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_OilAnalysisMoistureAnalog_collapse" style="margin-left: 10px;">OilAnalysisMoistureAnalog</a></legend>
                    <div id="{{id}}_OilAnalysisMoistureAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindOilAnalysisMoistureAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindOilAnalysisMoistureAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OilAnalysisMoistureAnalog" };
                super.submit (id, obj);
                temp = OilAnalysisMoistureAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#OilAnalysisMoistureAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Asset oil inspection paper type of analog.
         *
         */
        class OilAnalysisPaperAnalog extends AssetAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OilAnalysisPaperAnalog;
                if (null == bucket)
                   cim_data.OilAnalysisPaperAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OilAnalysisPaperAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "OilAnalysisPaperAnalog";
                base.parse_attribute (/<cim:OilAnalysisPaperAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.OilAnalysisPaperAnalog;
                if (null == bucket)
                   context.parsed.OilAnalysisPaperAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OilAnalysisPaperAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OilAnalysisPaperAnalog_collapse" aria-expanded="true" aria-controls="OilAnalysisPaperAnalog_collapse" style="margin-left: 10px;">OilAnalysisPaperAnalog</a></legend>
                    <div id="OilAnalysisPaperAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindOilAnalysisPaperAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in OilAnalysisPaperAnalogKind) obj["kindOilAnalysisPaperAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindOilAnalysisPaperAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OilAnalysisPaperAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_OilAnalysisPaperAnalog_collapse" style="margin-left: 10px;">OilAnalysisPaperAnalog</a></legend>
                    <div id="{{id}}_OilAnalysisPaperAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindOilAnalysisPaperAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindOilAnalysisPaperAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OilAnalysisPaperAnalog" };
                super.submit (id, obj);
                temp = OilAnalysisPaperAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#OilAnalysisPaperAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Asset oil analysis PCB type of analog.
         *
         */
        class OilAnalysisPCBAnalog extends AssetAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OilAnalysisPCBAnalog;
                if (null == bucket)
                   cim_data.OilAnalysisPCBAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OilAnalysisPCBAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "OilAnalysisPCBAnalog";
                base.parse_attribute (/<cim:OilAnalysisPCBAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.OilAnalysisPCBAnalog;
                if (null == bucket)
                   context.parsed.OilAnalysisPCBAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OilAnalysisPCBAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OilAnalysisPCBAnalog_collapse" aria-expanded="true" aria-controls="OilAnalysisPCBAnalog_collapse" style="margin-left: 10px;">OilAnalysisPCBAnalog</a></legend>
                    <div id="OilAnalysisPCBAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindOilAnalysisPCBAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in OilAnalysisPCBAnalogKind) obj["kindOilAnalysisPCBAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindOilAnalysisPCBAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OilAnalysisPCBAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_OilAnalysisPCBAnalog_collapse" style="margin-left: 10px;">OilAnalysisPCBAnalog</a></legend>
                    <div id="{{id}}_OilAnalysisPCBAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindOilAnalysisPCBAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindOilAnalysisPCBAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OilAnalysisPCBAnalog" };
                super.submit (id, obj);
                temp = OilAnalysisPCBAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#OilAnalysisPCBAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Asset inspection type of analog.
         *
         */
        class InspectionAnalog extends AssetAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.InspectionAnalog;
                if (null == bucket)
                   cim_data.InspectionAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InspectionAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "InspectionAnalog";
                base.parse_attribute (/<cim:InspectionAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.InspectionAnalog;
                if (null == bucket)
                   context.parsed.InspectionAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "InspectionAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InspectionAnalog_collapse" aria-expanded="true" aria-controls="InspectionAnalog_collapse" style="margin-left: 10px;">InspectionAnalog</a></legend>
                    <div id="InspectionAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindInspectionAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in InspectionAnalogKind) obj["kindInspectionAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindInspectionAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InspectionAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_InspectionAnalog_collapse" style="margin-left: 10px;">InspectionAnalog</a></legend>
                    <div id="{{id}}_InspectionAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindInspectionAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindInspectionAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "InspectionAnalog" };
                super.submit (id, obj);
                temp = InspectionAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#InspectionAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Asset oil analysis particle type of analog.
         *
         */
        class OilAnalysisParticleAnalog extends AssetAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OilAnalysisParticleAnalog;
                if (null == bucket)
                   cim_data.OilAnalysisParticleAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OilAnalysisParticleAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "OilAnalysisParticleAnalog";
                base.parse_attribute (/<cim:OilAnalysisParticleAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.OilAnalysisParticleAnalog;
                if (null == bucket)
                   context.parsed.OilAnalysisParticleAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OilAnalysisParticleAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OilAnalysisParticleAnalog_collapse" aria-expanded="true" aria-controls="OilAnalysisParticleAnalog_collapse" style="margin-left: 10px;">OilAnalysisParticleAnalog</a></legend>
                    <div id="OilAnalysisParticleAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindOilAnalysisParticleAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in OilAnalysisParticleAnalogKind) obj["kindOilAnalysisParticleAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindOilAnalysisParticleAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OilAnalysisParticleAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_OilAnalysisParticleAnalog_collapse" style="margin-left: 10px;">OilAnalysisParticleAnalog</a></legend>
                    <div id="{{id}}_OilAnalysisParticleAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindOilAnalysisParticleAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindOilAnalysisParticleAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OilAnalysisParticleAnalog" };
                super.submit (id, obj);
                temp = OilAnalysisParticleAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#OilAnalysisParticleAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Asset oil analysis gas type of analog.
         *
         */
        class OilAnalysisGasAnalog extends AssetAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OilAnalysisGasAnalog;
                if (null == bucket)
                   cim_data.OilAnalysisGasAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OilAnalysisGasAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "OilAnalysisGasAnalog";
                base.parse_attribute (/<cim:OilAnalysisGasAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.OilAnalysisGasAnalog;
                if (null == bucket)
                   context.parsed.OilAnalysisGasAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OilAnalysisGasAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OilAnalysisGasAnalog_collapse" aria-expanded="true" aria-controls="OilAnalysisGasAnalog_collapse" style="margin-left: 10px;">OilAnalysisGasAnalog</a></legend>
                    <div id="OilAnalysisGasAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindOilAnalysisGasAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in OilAnalysisGasAnalogKind) obj["kindOilAnalysisGasAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindOilAnalysisGasAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OilAnalysisGasAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_OilAnalysisGasAnalog_collapse" style="margin-left: 10px;">OilAnalysisGasAnalog</a></legend>
                    <div id="{{id}}_OilAnalysisGasAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindOilAnalysisGasAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindOilAnalysisGasAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OilAnalysisGasAnalog" };
                super.submit (id, obj);
                temp = OilAnalysisGasAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#OilAnalysisGasAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Description of period for which calculation is performed.
         *
         * Conditions:
         * F:
         * {Not sure where these came from… delete from UML?}
         *
         */
        class PeriodicStatisticalCalculation extends StatisticalCalculation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PeriodicStatisticalCalculation;
                if (null == bucket)
                   cim_data.PeriodicStatisticalCalculation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PeriodicStatisticalCalculation[obj.id];
            }

            parse (context, sub)
            {
                let obj = StatisticalCalculation.prototype.parse.call (this, context, sub);
                obj.cls = "PeriodicStatisticalCalculation";
                base.parse_element (/<cim:PeriodicStatisticalCalculation.calculationIntervalMagnitude>([\s\S]*?)<\/cim:PeriodicStatisticalCalculation.calculationIntervalMagnitude>/g, obj, "calculationIntervalMagnitude", base.to_string, sub, context);
                base.parse_attribute (/<cim:PeriodicStatisticalCalculation.calculationIntervalUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "calculationIntervalUnit", sub, context);
                let bucket = context.parsed.PeriodicStatisticalCalculation;
                if (null == bucket)
                   context.parsed.PeriodicStatisticalCalculation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = StatisticalCalculation.prototype.export.call (this, obj, false);

                base.export_element (obj, "PeriodicStatisticalCalculation", "calculationIntervalMagnitude", "calculationIntervalMagnitude",  base.from_string, fields);
                base.export_attribute (obj, "PeriodicStatisticalCalculation", "calculationIntervalUnit", "calculationIntervalUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PeriodicStatisticalCalculation_collapse" aria-expanded="true" aria-controls="PeriodicStatisticalCalculation_collapse" style="margin-left: 10px;">PeriodicStatisticalCalculation</a></legend>
                    <div id="PeriodicStatisticalCalculation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StatisticalCalculation.prototype.template.call (this) +
                    `
                    {{#calculationIntervalMagnitude}}<div><b>calculationIntervalMagnitude</b>: {{calculationIntervalMagnitude}}</div>{{/calculationIntervalMagnitude}}
                    {{#calculationIntervalUnit}}<div><b>calculationIntervalUnit</b>: {{calculationIntervalUnit}}</div>{{/calculationIntervalUnit}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["calculationIntervalUnitCalculationIntervalUnitKind"] = [{ id: '', selected: (!obj["calculationIntervalUnit"])}]; for (let property in CalculationIntervalUnitKind) obj["calculationIntervalUnitCalculationIntervalUnitKind"].push ({ id: property, selected: obj["calculationIntervalUnit"] && obj["calculationIntervalUnit"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["calculationIntervalUnitCalculationIntervalUnitKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PeriodicStatisticalCalculation_collapse" aria-expanded="true" aria-controls="{{id}}_PeriodicStatisticalCalculation_collapse" style="margin-left: 10px;">PeriodicStatisticalCalculation</a></legend>
                    <div id="{{id}}_PeriodicStatisticalCalculation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StatisticalCalculation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_calculationIntervalMagnitude'>calculationIntervalMagnitude: </label><div class='col-sm-8'><input id='{{id}}_calculationIntervalMagnitude' class='form-control' type='text'{{#calculationIntervalMagnitude}} value='{{calculationIntervalMagnitude}}'{{/calculationIntervalMagnitude}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_calculationIntervalUnit'>calculationIntervalUnit: </label><div class='col-sm-8'><select id='{{id}}_calculationIntervalUnit' class='form-control custom-select'>{{#calculationIntervalUnitCalculationIntervalUnitKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/calculationIntervalUnitCalculationIntervalUnitKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PeriodicStatisticalCalculation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_calculationIntervalMagnitude").value; if ("" !== temp) obj["calculationIntervalMagnitude"] = temp;
                temp = CalculationIntervalUnitKind[document.getElementById (id + "_calculationIntervalUnit").value]; if (temp) obj["calculationIntervalUnit"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#CalculationIntervalUnitKind." + temp; else delete obj["calculationIntervalUnit"];

                return (obj);
            }
        }

        /**
         * Asset oil analysis particle type of discrete.
         *
         */
        class OilAnalysisParticleDiscrete extends AssetDiscrete
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OilAnalysisParticleDiscrete;
                if (null == bucket)
                   cim_data.OilAnalysisParticleDiscrete = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OilAnalysisParticleDiscrete[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetDiscrete.prototype.parse.call (this, context, sub);
                obj.cls = "OilAnalysisParticleDiscrete";
                base.parse_attribute (/<cim:OilAnalysisParticleDiscrete.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.OilAnalysisParticleDiscrete;
                if (null == bucket)
                   context.parsed.OilAnalysisParticleDiscrete = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetDiscrete.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OilAnalysisParticleDiscrete", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OilAnalysisParticleDiscrete_collapse" aria-expanded="true" aria-controls="OilAnalysisParticleDiscrete_collapse" style="margin-left: 10px;">OilAnalysisParticleDiscrete</a></legend>
                    <div id="OilAnalysisParticleDiscrete_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetDiscrete.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindOilAnalysisParticleDiscreteKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in OilAnalysisParticleDiscreteKind) obj["kindOilAnalysisParticleDiscreteKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindOilAnalysisParticleDiscreteKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OilAnalysisParticleDiscrete_collapse" aria-expanded="true" aria-controls="{{id}}_OilAnalysisParticleDiscrete_collapse" style="margin-left: 10px;">OilAnalysisParticleDiscrete</a></legend>
                    <div id="{{id}}_OilAnalysisParticleDiscrete_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetDiscrete.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindOilAnalysisParticleDiscreteKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindOilAnalysisParticleDiscreteKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OilAnalysisParticleDiscrete" };
                super.submit (id, obj);
                temp = OilAnalysisParticleDiscreteKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#OilAnalysisParticleDiscreteKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Asset inspection type of discrete.
         *
         */
        class InspectionDiscrete extends AssetDiscrete
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.InspectionDiscrete;
                if (null == bucket)
                   cim_data.InspectionDiscrete = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InspectionDiscrete[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetDiscrete.prototype.parse.call (this, context, sub);
                obj.cls = "InspectionDiscrete";
                base.parse_attribute (/<cim:InspectionDiscrete.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.InspectionDiscrete;
                if (null == bucket)
                   context.parsed.InspectionDiscrete = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetDiscrete.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "InspectionDiscrete", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InspectionDiscrete_collapse" aria-expanded="true" aria-controls="InspectionDiscrete_collapse" style="margin-left: 10px;">InspectionDiscrete</a></legend>
                    <div id="InspectionDiscrete_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetDiscrete.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindInspectionDiscreteKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in InspectionDiscreteKind) obj["kindInspectionDiscreteKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindInspectionDiscreteKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InspectionDiscrete_collapse" aria-expanded="true" aria-controls="{{id}}_InspectionDiscrete_collapse" style="margin-left: 10px;">InspectionDiscrete</a></legend>
                    <div id="{{id}}_InspectionDiscrete_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetDiscrete.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindInspectionDiscreteKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindInspectionDiscreteKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "InspectionDiscrete" };
                super.submit (id, obj);
                temp = InspectionDiscreteKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#InspectionDiscreteKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Asset oil analysis PCB type of discrete.
         *
         */
        class OilAnalysisPCBDiscrete extends AssetDiscrete
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OilAnalysisPCBDiscrete;
                if (null == bucket)
                   cim_data.OilAnalysisPCBDiscrete = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OilAnalysisPCBDiscrete[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetDiscrete.prototype.parse.call (this, context, sub);
                obj.cls = "OilAnalysisPCBDiscrete";
                base.parse_attribute (/<cim:OilAnalysisPCBDiscrete.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.OilAnalysisPCBDiscrete;
                if (null == bucket)
                   context.parsed.OilAnalysisPCBDiscrete = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetDiscrete.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OilAnalysisPCBDiscrete", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OilAnalysisPCBDiscrete_collapse" aria-expanded="true" aria-controls="OilAnalysisPCBDiscrete_collapse" style="margin-left: 10px;">OilAnalysisPCBDiscrete</a></legend>
                    <div id="OilAnalysisPCBDiscrete_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetDiscrete.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindOilAnalysisPCBDiscreteKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in OilAnalysisPCBDiscreteKind) obj["kindOilAnalysisPCBDiscreteKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindOilAnalysisPCBDiscreteKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OilAnalysisPCBDiscrete_collapse" aria-expanded="true" aria-controls="{{id}}_OilAnalysisPCBDiscrete_collapse" style="margin-left: 10px;">OilAnalysisPCBDiscrete</a></legend>
                    <div id="{{id}}_OilAnalysisPCBDiscrete_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetDiscrete.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindOilAnalysisPCBDiscreteKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindOilAnalysisPCBDiscreteKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OilAnalysisPCBDiscrete" };
                super.submit (id, obj);
                temp = OilAnalysisPCBDiscreteKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#OilAnalysisPCBDiscreteKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Asset oil analysis fluid type of discrete.
         *
         */
        class OilAnalysisFluidDiscrete extends AssetDiscrete
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OilAnalysisFluidDiscrete;
                if (null == bucket)
                   cim_data.OilAnalysisFluidDiscrete = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OilAnalysisFluidDiscrete[obj.id];
            }

            parse (context, sub)
            {
                let obj = AssetDiscrete.prototype.parse.call (this, context, sub);
                obj.cls = "OilAnalysisFluidDiscrete";
                base.parse_attribute (/<cim:OilAnalysisFluidDiscrete.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.OilAnalysisFluidDiscrete;
                if (null == bucket)
                   context.parsed.OilAnalysisFluidDiscrete = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AssetDiscrete.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OilAnalysisFluidDiscrete", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OilAnalysisFluidDiscrete_collapse" aria-expanded="true" aria-controls="OilAnalysisFluidDiscrete_collapse" style="margin-left: 10px;">OilAnalysisFluidDiscrete</a></legend>
                    <div id="OilAnalysisFluidDiscrete_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetDiscrete.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindOilAnalysisFluidDiscreteKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in OilAnalysisFluidDiscreteKind) obj["kindOilAnalysisFluidDiscreteKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindOilAnalysisFluidDiscreteKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OilAnalysisFluidDiscrete_collapse" aria-expanded="true" aria-controls="{{id}}_OilAnalysisFluidDiscrete_collapse" style="margin-left: 10px;">OilAnalysisFluidDiscrete</a></legend>
                    <div id="{{id}}_OilAnalysisFluidDiscrete_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AssetDiscrete.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindOilAnalysisFluidDiscreteKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindOilAnalysisFluidDiscreteKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OilAnalysisFluidDiscrete" };
                super.submit (id, obj);
                temp = OilAnalysisFluidDiscreteKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#OilAnalysisFluidDiscreteKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        return (
            {
                OilAnalysisMetalsAnalogKind: OilAnalysisMetalsAnalogKind,
                OilAnalysisPaperAnalogKind: OilAnalysisPaperAnalogKind,
                CalculationMethodOrder: CalculationMethodOrder,
                AssetDiscrete: AssetDiscrete,
                OilAnalysisFluidAnalog: OilAnalysisFluidAnalog,
                OilAnalysisParticleAnalogKind: OilAnalysisParticleAnalogKind,
                OilAnalysisFluidAnalogKind: OilAnalysisFluidAnalogKind,
                AssetStringMeasurement: AssetStringMeasurement,
                OilAnalysisFluidDiscreteKind: OilAnalysisFluidDiscreteKind,
                OilAnalysisPCBDiscrete: OilAnalysisPCBDiscrete,
                CalculationIntervalUnitKind: CalculationIntervalUnitKind,
                OilAnalysisParticleDiscrete: OilAnalysisParticleDiscrete,
                AssetTemperaturePressureAnalogKind: AssetTemperaturePressureAnalogKind,
                InspectionAnalogKind: InspectionAnalogKind,
                InspectionDiscreteKind: InspectionDiscreteKind,
                OilAnalysisGasAnalog: OilAnalysisGasAnalog,
                PeriodicStatisticalCalculation: PeriodicStatisticalCalculation,
                InspectionDiscrete: InspectionDiscrete,
                OilAnalysisMetalsAnalog: OilAnalysisMetalsAnalog,
                OilAnalysisPCBAnalogKind: OilAnalysisPCBAnalogKind,
                OilAnalysisParticleDiscreteKind: OilAnalysisParticleDiscreteKind,
                OilAnalysisFluidDiscrete: OilAnalysisFluidDiscrete,
                AssetTemperaturePressureAnalog: AssetTemperaturePressureAnalog,
                OilAnalysisPaperAnalog: OilAnalysisPaperAnalog,
                CalculationModeKind: CalculationModeKind,
                InspectionAnalog: InspectionAnalog,
                StatisticalCalculation: StatisticalCalculation,
                OilAnalysisMoistureAnalogKind: OilAnalysisMoistureAnalogKind,
                AssetAnalog: AssetAnalog,
                OilAnalysisMoistureAnalog: OilAnalysisMoistureAnalog,
                OilAnalysisPCBAnalog: OilAnalysisPCBAnalog,
                CalculationTechniqueKind: CalculationTechniqueKind,
                OilAnalysisParticleAnalog: OilAnalysisParticleAnalog,
                OilAnalysisPCBDiscreteKind: OilAnalysisPCBDiscreteKind,
                OilAnalysisGasAnalogKind: OilAnalysisGasAnalogKind,
                CalculationMethodHierarchy: CalculationMethodHierarchy,
                AssetStringKind: AssetStringKind
            }
        );
    }
);