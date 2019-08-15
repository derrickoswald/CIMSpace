define
(
    ["model/base", "model/Core", "model/GenerationTrainingSimulation"],
    /**
     * The production package is responsible for classes which describe various kinds of generators.
     *
     * These classes also provide production costing information which is used to economically allocate demand among committed units and calculate reserve quantities.
     *
     */
    function (base, Core, GenerationTrainingSimulation)
    {

        /**
         * The state of the battery unit.
         *
         */
        let BatteryStateKind =
        {
            "discharging": "discharging",
            "waiting": "waiting",
            "full": "full",
            "empty": "empty",
            "charging": "charging"
        };
        Object.freeze (BatteryStateKind);

        /**
         * The type of emission.
         *
         */
        let EmissionType =
        {
            "sulfurDioxide": "sulfurDioxide",
            "carbonDioxide": "carbonDioxide",
            "nitrogenOxide": "nitrogenOxide",
            "hydrogenSulfide": "hydrogenSulfide",
            "chlorine": "chlorine",
            "carbonDisulfide": "carbonDisulfide"
        };
        Object.freeze (EmissionType);

        /**
         * Kind of wind generating unit.
         *
         */
        let WindGenUnitKind =
        {
            "offshore": "offshore",
            "onshore": "onshore"
        };
        Object.freeze (WindGenUnitKind);

        /**
         * The type of hydro power plant.
         *
         */
        let HydroPlantStorageKind =
        {
            "runOfRiver": "runOfRiver",
            "pumpedStorage": "pumpedStorage",
            "storage": "storage"
        };
        Object.freeze (HydroPlantStorageKind);

        /**
         * Specifies the capability of the hydro generating unit to convert energy as a generator or pump.
         *
         */
        let HydroEnergyConversionKind =
        {
            "generator": "generator",
            "pumpAndGenerator": "pumpAndGenerator"
        };
        Object.freeze (HydroEnergyConversionKind);

        /**
         * The source of the emission value.
         *
         */
        let EmissionValueSource =
        {
            "measured": "measured",
            "calculated": "calculated"
        };
        Object.freeze (EmissionValueSource);

        /**
         * The source of controls for a generating unit.
         *
         */
        let GeneratorControlSource =
        {
            "unavailable": "unavailable",
            "offAGC": "offAGC",
            "onAGC": "onAGC",
            "plantControl": "plantControl"
        };
        Object.freeze (GeneratorControlSource);

        /**
         * Type of fuel.
         *
         */
        let FuelType =
        {
            "oil": "oil",
            "gas": "gas",
            "lignite": "lignite",
            "coal": "coal",
            "hardCoal": "hardCoal",
            "oilShale": "oilShale",
            "brownCoalLignite": "brownCoalLignite",
            "coalDerivedGas": "coalDerivedGas",
            "peat": "peat",
            "other": "other"
        };
        Object.freeze (FuelType);

        /**
         * Unit control modes.
         *
         */
        let GeneratorControlMode =
        {
            "setpoint": "setpoint",
            "pulse": "pulse"
        };
        Object.freeze (GeneratorControlMode);

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
                let bucket = cim_data.HeatRateCurve;
                if (null == bucket)
                   cim_data.HeatRateCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HeatRateCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "HeatRateCurve";
                base.parse_element (/<cim:HeatRateCurve.isNetGrossP>([\s\S]*?)<\/cim:HeatRateCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:HeatRateCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                let bucket = context.parsed.HeatRateCurve;
                if (null == bucket)
                   context.parsed.HeatRateCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "HeatRateCurve", "isNetGrossP", "isNetGrossP",  base.from_boolean, fields);
                base.export_attribute (obj, "HeatRateCurve", "ThermalGeneratingUnit", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HeatRateCurve_collapse" aria-expanded="true" aria-controls="HeatRateCurve_collapse" style="margin-left: 10px;">HeatRateCurve</a></legend>
                    <div id="HeatRateCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ThermalGeneratingUnit}}");}); return false;'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HeatRateCurve_collapse" aria-expanded="true" aria-controls="{{id}}_HeatRateCurve_collapse" style="margin-left: 10px;">HeatRateCurve</a></legend>
                    <div id="{{id}}_HeatRateCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isNetGrossP'>isNetGrossP: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isNetGrossP' class='form-check-input' type='checkbox'{{#isNetGrossP}} checked{{/isNetGrossP}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "HeatRateCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isNetGrossP").checked; if (temp) obj["isNetGrossP"] = true;
                temp = document.getElementById (id + "_ThermalGeneratingUnit").value; if ("" !== temp) obj["ThermalGeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ThermalGeneratingUnit", "1", "0..1", "ThermalGeneratingUnit", "HeatRateCurve"]
                        ]
                    )
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
                let bucket = cim_data.HydroPowerPlant;
                if (null == bucket)
                   cim_data.HydroPowerPlant = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HydroPowerPlant[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "HydroPowerPlant";
                base.parse_element (/<cim:HydroPowerPlant.dischargeTravelDelay>([\s\S]*?)<\/cim:HydroPowerPlant.dischargeTravelDelay>/g, obj, "dischargeTravelDelay", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.genRatedP>([\s\S]*?)<\/cim:HydroPowerPlant.genRatedP>/g, obj, "genRatedP", base.to_string, sub, context);
                base.parse_attribute (/<cim:HydroPowerPlant.hydroPlantStorageType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "hydroPlantStorageType", sub, context);
                base.parse_element (/<cim:HydroPowerPlant.penstockType>([\s\S]*?)<\/cim:HydroPowerPlant.penstockType>/g, obj, "penstockType", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.plantDischargeCapacity>([\s\S]*?)<\/cim:HydroPowerPlant.plantDischargeCapacity>/g, obj, "plantDischargeCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.plantRatedHead>([\s\S]*?)<\/cim:HydroPowerPlant.plantRatedHead>/g, obj, "plantRatedHead", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.pumpRatedP>([\s\S]*?)<\/cim:HydroPowerPlant.pumpRatedP>/g, obj, "pumpRatedP", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.surgeTankCode>([\s\S]*?)<\/cim:HydroPowerPlant.surgeTankCode>/g, obj, "surgeTankCode", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPowerPlant.surgeTankCrestLevel>([\s\S]*?)<\/cim:HydroPowerPlant.surgeTankCrestLevel>/g, obj, "surgeTankCrestLevel", base.to_string, sub, context);
                base.parse_attributes (/<cim:HydroPowerPlant.HydroPumps\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HydroPumps", sub, context);
                base.parse_attribute (/<cim:HydroPowerPlant.Reservoir\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
                base.parse_attributes (/<cim:HydroPowerPlant.HydroGeneratingUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnits", sub, context);
                base.parse_attribute (/<cim:HydroPowerPlant.GenSourcePumpDischargeReservoir\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GenSourcePumpDischargeReservoir", sub, context);
                let bucket = context.parsed.HydroPowerPlant;
                if (null == bucket)
                   context.parsed.HydroPowerPlant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "HydroPowerPlant", "dischargeTravelDelay", "dischargeTravelDelay",  base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "genRatedP", "genRatedP",  base.from_string, fields);
                base.export_attribute (obj, "HydroPowerPlant", "hydroPlantStorageType", "hydroPlantStorageType", fields);
                base.export_element (obj, "HydroPowerPlant", "penstockType", "penstockType",  base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "plantDischargeCapacity", "plantDischargeCapacity",  base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "plantRatedHead", "plantRatedHead",  base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "pumpRatedP", "pumpRatedP",  base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "surgeTankCode", "surgeTankCode",  base.from_string, fields);
                base.export_element (obj, "HydroPowerPlant", "surgeTankCrestLevel", "surgeTankCrestLevel",  base.from_string, fields);
                base.export_attributes (obj, "HydroPowerPlant", "HydroPumps", "HydroPumps", fields);
                base.export_attribute (obj, "HydroPowerPlant", "Reservoir", "Reservoir", fields);
                base.export_attributes (obj, "HydroPowerPlant", "HydroGeneratingUnits", "HydroGeneratingUnits", fields);
                base.export_attribute (obj, "HydroPowerPlant", "GenSourcePumpDischargeReservoir", "GenSourcePumpDischargeReservoir", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HydroPowerPlant_collapse" aria-expanded="true" aria-controls="HydroPowerPlant_collapse" style="margin-left: 10px;">HydroPowerPlant</a></legend>
                    <div id="HydroPowerPlant_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    {{#HydroPumps}}<div><b>HydroPumps</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/HydroPumps}}
                    {{#Reservoir}}<div><b>Reservoir</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Reservoir}}");}); return false;'>{{Reservoir}}</a></div>{{/Reservoir}}
                    {{#HydroGeneratingUnits}}<div><b>HydroGeneratingUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/HydroGeneratingUnits}}
                    {{#GenSourcePumpDischargeReservoir}}<div><b>GenSourcePumpDischargeReservoir</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GenSourcePumpDischargeReservoir}}");}); return false;'>{{GenSourcePumpDischargeReservoir}}</a></div>{{/GenSourcePumpDischargeReservoir}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["hydroPlantStorageTypeHydroPlantStorageKind"] = [{ id: '', selected: (!obj["hydroPlantStorageType"])}]; for (let property in HydroPlantStorageKind) obj["hydroPlantStorageTypeHydroPlantStorageKind"].push ({ id: property, selected: obj["hydroPlantStorageType"] && obj["hydroPlantStorageType"].endsWith ('.' + property)});
                if (obj["HydroPumps"]) obj["HydroPumps_string"] = obj["HydroPumps"].join ();
                if (obj["HydroGeneratingUnits"]) obj["HydroGeneratingUnits_string"] = obj["HydroGeneratingUnits"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["hydroPlantStorageTypeHydroPlantStorageKind"];
                delete obj["HydroPumps_string"];
                delete obj["HydroGeneratingUnits_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HydroPowerPlant_collapse" aria-expanded="true" aria-controls="{{id}}_HydroPowerPlant_collapse" style="margin-left: 10px;">HydroPowerPlant</a></legend>
                    <div id="{{id}}_HydroPowerPlant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dischargeTravelDelay'>dischargeTravelDelay: </label><div class='col-sm-8'><input id='{{id}}_dischargeTravelDelay' class='form-control' type='text'{{#dischargeTravelDelay}} value='{{dischargeTravelDelay}}'{{/dischargeTravelDelay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_genRatedP'>genRatedP: </label><div class='col-sm-8'><input id='{{id}}_genRatedP' class='form-control' type='text'{{#genRatedP}} value='{{genRatedP}}'{{/genRatedP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hydroPlantStorageType'>hydroPlantStorageType: </label><div class='col-sm-8'><select id='{{id}}_hydroPlantStorageType' class='form-control custom-select'>{{#hydroPlantStorageTypeHydroPlantStorageKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/hydroPlantStorageTypeHydroPlantStorageKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_penstockType'>penstockType: </label><div class='col-sm-8'><input id='{{id}}_penstockType' class='form-control' type='text'{{#penstockType}} value='{{penstockType}}'{{/penstockType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plantDischargeCapacity'>plantDischargeCapacity: </label><div class='col-sm-8'><input id='{{id}}_plantDischargeCapacity' class='form-control' type='text'{{#plantDischargeCapacity}} value='{{plantDischargeCapacity}}'{{/plantDischargeCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plantRatedHead'>plantRatedHead: </label><div class='col-sm-8'><input id='{{id}}_plantRatedHead' class='form-control' type='text'{{#plantRatedHead}} value='{{plantRatedHead}}'{{/plantRatedHead}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pumpRatedP'>pumpRatedP: </label><div class='col-sm-8'><input id='{{id}}_pumpRatedP' class='form-control' type='text'{{#pumpRatedP}} value='{{pumpRatedP}}'{{/pumpRatedP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_surgeTankCode'>surgeTankCode: </label><div class='col-sm-8'><input id='{{id}}_surgeTankCode' class='form-control' type='text'{{#surgeTankCode}} value='{{surgeTankCode}}'{{/surgeTankCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_surgeTankCrestLevel'>surgeTankCrestLevel: </label><div class='col-sm-8'><input id='{{id}}_surgeTankCrestLevel' class='form-control' type='text'{{#surgeTankCrestLevel}} value='{{surgeTankCrestLevel}}'{{/surgeTankCrestLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Reservoir'>Reservoir: </label><div class='col-sm-8'><input id='{{id}}_Reservoir' class='form-control' type='text'{{#Reservoir}} value='{{Reservoir}}'{{/Reservoir}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GenSourcePumpDischargeReservoir'>GenSourcePumpDischargeReservoir: </label><div class='col-sm-8'><input id='{{id}}_GenSourcePumpDischargeReservoir' class='form-control' type='text'{{#GenSourcePumpDischargeReservoir}} value='{{GenSourcePumpDischargeReservoir}}'{{/GenSourcePumpDischargeReservoir}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "HydroPowerPlant" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dischargeTravelDelay").value; if ("" !== temp) obj["dischargeTravelDelay"] = temp;
                temp = document.getElementById (id + "_genRatedP").value; if ("" !== temp) obj["genRatedP"] = temp;
                temp = HydroPlantStorageKind[document.getElementById (id + "_hydroPlantStorageType").value]; if (temp) obj["hydroPlantStorageType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#HydroPlantStorageKind." + temp; else delete obj["hydroPlantStorageType"];
                temp = document.getElementById (id + "_penstockType").value; if ("" !== temp) obj["penstockType"] = temp;
                temp = document.getElementById (id + "_plantDischargeCapacity").value; if ("" !== temp) obj["plantDischargeCapacity"] = temp;
                temp = document.getElementById (id + "_plantRatedHead").value; if ("" !== temp) obj["plantRatedHead"] = temp;
                temp = document.getElementById (id + "_pumpRatedP").value; if ("" !== temp) obj["pumpRatedP"] = temp;
                temp = document.getElementById (id + "_surgeTankCode").value; if ("" !== temp) obj["surgeTankCode"] = temp;
                temp = document.getElementById (id + "_surgeTankCrestLevel").value; if ("" !== temp) obj["surgeTankCrestLevel"] = temp;
                temp = document.getElementById (id + "_Reservoir").value; if ("" !== temp) obj["Reservoir"] = temp;
                temp = document.getElementById (id + "_GenSourcePumpDischargeReservoir").value; if ("" !== temp) obj["GenSourcePumpDischargeReservoir"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["HydroPumps", "0..*", "0..1", "HydroPump", "HydroPowerPlant"],
                            ["Reservoir", "0..1", "0..*", "Reservoir", "HydroPowerPlants"],
                            ["HydroGeneratingUnits", "0..*", "0..1", "HydroGeneratingUnit", "HydroPowerPlant"],
                            ["GenSourcePumpDischargeReservoir", "1", "0..*", "Reservoir", "UpstreamFromHydroPowerPlants"]
                        ]
                    )
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
                let bucket = cim_data.PenstockLossCurve;
                if (null == bucket)
                   cim_data.PenstockLossCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PenstockLossCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "PenstockLossCurve";
                base.parse_attribute (/<cim:PenstockLossCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnit", sub, context);
                let bucket = context.parsed.PenstockLossCurve;
                if (null == bucket)
                   context.parsed.PenstockLossCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PenstockLossCurve", "HydroGeneratingUnit", "HydroGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PenstockLossCurve_collapse" aria-expanded="true" aria-controls="PenstockLossCurve_collapse" style="margin-left: 10px;">PenstockLossCurve</a></legend>
                    <div id="PenstockLossCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#HydroGeneratingUnit}}<div><b>HydroGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HydroGeneratingUnit}}");}); return false;'>{{HydroGeneratingUnit}}</a></div>{{/HydroGeneratingUnit}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PenstockLossCurve_collapse" aria-expanded="true" aria-controls="{{id}}_PenstockLossCurve_collapse" style="margin-left: 10px;">PenstockLossCurve</a></legend>
                    <div id="{{id}}_PenstockLossCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HydroGeneratingUnit'>HydroGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_HydroGeneratingUnit' class='form-control' type='text'{{#HydroGeneratingUnit}} value='{{HydroGeneratingUnit}}'{{/HydroGeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PenstockLossCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_HydroGeneratingUnit").value; if ("" !== temp) obj["HydroGeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["HydroGeneratingUnit", "1", "0..1", "HydroGeneratingUnit", "PenstockLossCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * Relationship between reservoir volume and reservoir level.
         *
         * The  volume is at the Y-axis and the reservoir level at the X-axis.
         *
         */
        class LevelVsVolumeCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LevelVsVolumeCurve;
                if (null == bucket)
                   cim_data.LevelVsVolumeCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LevelVsVolumeCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "LevelVsVolumeCurve";
                base.parse_attribute (/<cim:LevelVsVolumeCurve.Reservoir\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
                let bucket = context.parsed.LevelVsVolumeCurve;
                if (null == bucket)
                   context.parsed.LevelVsVolumeCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "LevelVsVolumeCurve", "Reservoir", "Reservoir", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LevelVsVolumeCurve_collapse" aria-expanded="true" aria-controls="LevelVsVolumeCurve_collapse" style="margin-left: 10px;">LevelVsVolumeCurve</a></legend>
                    <div id="LevelVsVolumeCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#Reservoir}}<div><b>Reservoir</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Reservoir}}");}); return false;'>{{Reservoir}}</a></div>{{/Reservoir}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LevelVsVolumeCurve_collapse" aria-expanded="true" aria-controls="{{id}}_LevelVsVolumeCurve_collapse" style="margin-left: 10px;">LevelVsVolumeCurve</a></legend>
                    <div id="{{id}}_LevelVsVolumeCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Reservoir'>Reservoir: </label><div class='col-sm-8'><input id='{{id}}_Reservoir' class='form-control' type='text'{{#Reservoir}} value='{{Reservoir}}'{{/Reservoir}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LevelVsVolumeCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Reservoir").value; if ("" !== temp) obj["Reservoir"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Reservoir", "1", "0..*", "Reservoir", "LevelVsVolumeCurves"]
                        ]
                    )
                );
            }
        }

        /**
         * A generating unit or battery or aggregation that connects to the AC network using power electronics rather than rotating machines.
         *
         */
        class PowerElectronicsUnit extends Core.Equipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PowerElectronicsUnit;
                if (null == bucket)
                   cim_data.PowerElectronicsUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerElectronicsUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "PowerElectronicsUnit";
                base.parse_element (/<cim:PowerElectronicsUnit.maxP>([\s\S]*?)<\/cim:PowerElectronicsUnit.maxP>/g, obj, "maxP", base.to_string, sub, context);
                base.parse_element (/<cim:PowerElectronicsUnit.minP>([\s\S]*?)<\/cim:PowerElectronicsUnit.minP>/g, obj, "minP", base.to_string, sub, context);
                base.parse_attribute (/<cim:PowerElectronicsUnit.PowerElectronicsConnection\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerElectronicsConnection", sub, context);
                let bucket = context.parsed.PowerElectronicsUnit;
                if (null == bucket)
                   context.parsed.PowerElectronicsUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Equipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "PowerElectronicsUnit", "maxP", "maxP",  base.from_string, fields);
                base.export_element (obj, "PowerElectronicsUnit", "minP", "minP",  base.from_string, fields);
                base.export_attribute (obj, "PowerElectronicsUnit", "PowerElectronicsConnection", "PowerElectronicsConnection", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PowerElectronicsUnit_collapse" aria-expanded="true" aria-controls="PowerElectronicsUnit_collapse" style="margin-left: 10px;">PowerElectronicsUnit</a></legend>
                    <div id="PowerElectronicsUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.template.call (this) +
                    `
                    {{#maxP}}<div><b>maxP</b>: {{maxP}}</div>{{/maxP}}
                    {{#minP}}<div><b>minP</b>: {{minP}}</div>{{/minP}}
                    {{#PowerElectronicsConnection}}<div><b>PowerElectronicsConnection</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PowerElectronicsConnection}}");}); return false;'>{{PowerElectronicsConnection}}</a></div>{{/PowerElectronicsConnection}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PowerElectronicsUnit_collapse" aria-expanded="true" aria-controls="{{id}}_PowerElectronicsUnit_collapse" style="margin-left: 10px;">PowerElectronicsUnit</a></legend>
                    <div id="{{id}}_PowerElectronicsUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxP'>maxP: </label><div class='col-sm-8'><input id='{{id}}_maxP' class='form-control' type='text'{{#maxP}} value='{{maxP}}'{{/maxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minP'>minP: </label><div class='col-sm-8'><input id='{{id}}_minP' class='form-control' type='text'{{#minP}} value='{{minP}}'{{/minP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerElectronicsConnection'>PowerElectronicsConnection: </label><div class='col-sm-8'><input id='{{id}}_PowerElectronicsConnection' class='form-control' type='text'{{#PowerElectronicsConnection}} value='{{PowerElectronicsConnection}}'{{/PowerElectronicsConnection}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PowerElectronicsUnit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_maxP").value; if ("" !== temp) obj["maxP"] = temp;
                temp = document.getElementById (id + "_minP").value; if ("" !== temp) obj["minP"] = temp;
                temp = document.getElementById (id + "_PowerElectronicsConnection").value; if ("" !== temp) obj["PowerElectronicsConnection"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerElectronicsConnection", "1", "0..*", "PowerElectronicsConnection", "PowerElectronicsUnit"]
                        ]
                    )
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
                let bucket = cim_data.HydroPump;
                if (null == bucket)
                   cim_data.HydroPump = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HydroPump[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "HydroPump";
                base.parse_element (/<cim:HydroPump.pumpDischAtMaxHead>([\s\S]*?)<\/cim:HydroPump.pumpDischAtMaxHead>/g, obj, "pumpDischAtMaxHead", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPump.pumpDischAtMinHead>([\s\S]*?)<\/cim:HydroPump.pumpDischAtMinHead>/g, obj, "pumpDischAtMinHead", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPump.pumpPowerAtMaxHead>([\s\S]*?)<\/cim:HydroPump.pumpPowerAtMaxHead>/g, obj, "pumpPowerAtMaxHead", base.to_string, sub, context);
                base.parse_element (/<cim:HydroPump.pumpPowerAtMinHead>([\s\S]*?)<\/cim:HydroPump.pumpPowerAtMinHead>/g, obj, "pumpPowerAtMinHead", base.to_string, sub, context);
                base.parse_attribute (/<cim:HydroPump.HydroPowerPlant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HydroPowerPlant", sub, context);
                base.parse_attribute (/<cim:HydroPump.RotatingMachine\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RotatingMachine", sub, context);
                base.parse_attribute (/<cim:HydroPump.HydroPumpOpSchedule\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HydroPumpOpSchedule", sub, context);
                let bucket = context.parsed.HydroPump;
                if (null == bucket)
                   context.parsed.HydroPump = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Equipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "HydroPump", "pumpDischAtMaxHead", "pumpDischAtMaxHead",  base.from_string, fields);
                base.export_element (obj, "HydroPump", "pumpDischAtMinHead", "pumpDischAtMinHead",  base.from_string, fields);
                base.export_element (obj, "HydroPump", "pumpPowerAtMaxHead", "pumpPowerAtMaxHead",  base.from_string, fields);
                base.export_element (obj, "HydroPump", "pumpPowerAtMinHead", "pumpPowerAtMinHead",  base.from_string, fields);
                base.export_attribute (obj, "HydroPump", "HydroPowerPlant", "HydroPowerPlant", fields);
                base.export_attribute (obj, "HydroPump", "RotatingMachine", "RotatingMachine", fields);
                base.export_attribute (obj, "HydroPump", "HydroPumpOpSchedule", "HydroPumpOpSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HydroPump_collapse" aria-expanded="true" aria-controls="HydroPump_collapse" style="margin-left: 10px;">HydroPump</a></legend>
                    <div id="HydroPump_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.template.call (this) +
                    `
                    {{#pumpDischAtMaxHead}}<div><b>pumpDischAtMaxHead</b>: {{pumpDischAtMaxHead}}</div>{{/pumpDischAtMaxHead}}
                    {{#pumpDischAtMinHead}}<div><b>pumpDischAtMinHead</b>: {{pumpDischAtMinHead}}</div>{{/pumpDischAtMinHead}}
                    {{#pumpPowerAtMaxHead}}<div><b>pumpPowerAtMaxHead</b>: {{pumpPowerAtMaxHead}}</div>{{/pumpPowerAtMaxHead}}
                    {{#pumpPowerAtMinHead}}<div><b>pumpPowerAtMinHead</b>: {{pumpPowerAtMinHead}}</div>{{/pumpPowerAtMinHead}}
                    {{#HydroPowerPlant}}<div><b>HydroPowerPlant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HydroPowerPlant}}");}); return false;'>{{HydroPowerPlant}}</a></div>{{/HydroPowerPlant}}
                    {{#RotatingMachine}}<div><b>RotatingMachine</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RotatingMachine}}");}); return false;'>{{RotatingMachine}}</a></div>{{/RotatingMachine}}
                    {{#HydroPumpOpSchedule}}<div><b>HydroPumpOpSchedule</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HydroPumpOpSchedule}}");}); return false;'>{{HydroPumpOpSchedule}}</a></div>{{/HydroPumpOpSchedule}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HydroPump_collapse" aria-expanded="true" aria-controls="{{id}}_HydroPump_collapse" style="margin-left: 10px;">HydroPump</a></legend>
                    <div id="{{id}}_HydroPump_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pumpDischAtMaxHead'>pumpDischAtMaxHead: </label><div class='col-sm-8'><input id='{{id}}_pumpDischAtMaxHead' class='form-control' type='text'{{#pumpDischAtMaxHead}} value='{{pumpDischAtMaxHead}}'{{/pumpDischAtMaxHead}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pumpDischAtMinHead'>pumpDischAtMinHead: </label><div class='col-sm-8'><input id='{{id}}_pumpDischAtMinHead' class='form-control' type='text'{{#pumpDischAtMinHead}} value='{{pumpDischAtMinHead}}'{{/pumpDischAtMinHead}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pumpPowerAtMaxHead'>pumpPowerAtMaxHead: </label><div class='col-sm-8'><input id='{{id}}_pumpPowerAtMaxHead' class='form-control' type='text'{{#pumpPowerAtMaxHead}} value='{{pumpPowerAtMaxHead}}'{{/pumpPowerAtMaxHead}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pumpPowerAtMinHead'>pumpPowerAtMinHead: </label><div class='col-sm-8'><input id='{{id}}_pumpPowerAtMinHead' class='form-control' type='text'{{#pumpPowerAtMinHead}} value='{{pumpPowerAtMinHead}}'{{/pumpPowerAtMinHead}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HydroPowerPlant'>HydroPowerPlant: </label><div class='col-sm-8'><input id='{{id}}_HydroPowerPlant' class='form-control' type='text'{{#HydroPowerPlant}} value='{{HydroPowerPlant}}'{{/HydroPowerPlant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RotatingMachine'>RotatingMachine: </label><div class='col-sm-8'><input id='{{id}}_RotatingMachine' class='form-control' type='text'{{#RotatingMachine}} value='{{RotatingMachine}}'{{/RotatingMachine}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HydroPumpOpSchedule'>HydroPumpOpSchedule: </label><div class='col-sm-8'><input id='{{id}}_HydroPumpOpSchedule' class='form-control' type='text'{{#HydroPumpOpSchedule}} value='{{HydroPumpOpSchedule}}'{{/HydroPumpOpSchedule}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "HydroPump" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_pumpDischAtMaxHead").value; if ("" !== temp) obj["pumpDischAtMaxHead"] = temp;
                temp = document.getElementById (id + "_pumpDischAtMinHead").value; if ("" !== temp) obj["pumpDischAtMinHead"] = temp;
                temp = document.getElementById (id + "_pumpPowerAtMaxHead").value; if ("" !== temp) obj["pumpPowerAtMaxHead"] = temp;
                temp = document.getElementById (id + "_pumpPowerAtMinHead").value; if ("" !== temp) obj["pumpPowerAtMinHead"] = temp;
                temp = document.getElementById (id + "_HydroPowerPlant").value; if ("" !== temp) obj["HydroPowerPlant"] = temp;
                temp = document.getElementById (id + "_RotatingMachine").value; if ("" !== temp) obj["RotatingMachine"] = temp;
                temp = document.getElementById (id + "_HydroPumpOpSchedule").value; if ("" !== temp) obj["HydroPumpOpSchedule"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["HydroPowerPlant", "0..1", "0..*", "HydroPowerPlant", "HydroPumps"],
                            ["RotatingMachine", "1", "0..1", "RotatingMachine", "HydroPump"],
                            ["HydroPumpOpSchedule", "0..1", "1", "HydroPumpOpSchedule", "HydroPump"]
                        ]
                    )
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
                let bucket = cim_data.CombinedCyclePlant;
                if (null == bucket)
                   cim_data.CombinedCyclePlant = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CombinedCyclePlant[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "CombinedCyclePlant";
                base.parse_element (/<cim:CombinedCyclePlant.combCyclePlantRating>([\s\S]*?)<\/cim:CombinedCyclePlant.combCyclePlantRating>/g, obj, "combCyclePlantRating", base.to_string, sub, context);
                base.parse_attributes (/<cim:CombinedCyclePlant.ThermalGeneratingUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnits", sub, context);
                let bucket = context.parsed.CombinedCyclePlant;
                if (null == bucket)
                   context.parsed.CombinedCyclePlant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "CombinedCyclePlant", "combCyclePlantRating", "combCyclePlantRating",  base.from_string, fields);
                base.export_attributes (obj, "CombinedCyclePlant", "ThermalGeneratingUnits", "ThermalGeneratingUnits", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CombinedCyclePlant_collapse" aria-expanded="true" aria-controls="CombinedCyclePlant_collapse" style="margin-left: 10px;">CombinedCyclePlant</a></legend>
                    <div id="CombinedCyclePlant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#combCyclePlantRating}}<div><b>combCyclePlantRating</b>: {{combCyclePlantRating}}</div>{{/combCyclePlantRating}}
                    {{#ThermalGeneratingUnits}}<div><b>ThermalGeneratingUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ThermalGeneratingUnits}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ThermalGeneratingUnits"]) obj["ThermalGeneratingUnits_string"] = obj["ThermalGeneratingUnits"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ThermalGeneratingUnits_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CombinedCyclePlant_collapse" aria-expanded="true" aria-controls="{{id}}_CombinedCyclePlant_collapse" style="margin-left: 10px;">CombinedCyclePlant</a></legend>
                    <div id="{{id}}_CombinedCyclePlant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_combCyclePlantRating'>combCyclePlantRating: </label><div class='col-sm-8'><input id='{{id}}_combCyclePlantRating' class='form-control' type='text'{{#combCyclePlantRating}} value='{{combCyclePlantRating}}'{{/combCyclePlantRating}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CombinedCyclePlant" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_combCyclePlantRating").value; if ("" !== temp) obj["combCyclePlantRating"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ThermalGeneratingUnits", "0..*", "0..1", "ThermalGeneratingUnit", "CombinedCyclePlant"]
                        ]
                    )
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
                let bucket = cim_data.GenUnitOpCostCurve;
                if (null == bucket)
                   cim_data.GenUnitOpCostCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GenUnitOpCostCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "GenUnitOpCostCurve";
                base.parse_element (/<cim:GenUnitOpCostCurve.isNetGrossP>([\s\S]*?)<\/cim:GenUnitOpCostCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:GenUnitOpCostCurve.GeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
                let bucket = context.parsed.GenUnitOpCostCurve;
                if (null == bucket)
                   context.parsed.GenUnitOpCostCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "GenUnitOpCostCurve", "isNetGrossP", "isNetGrossP",  base.from_boolean, fields);
                base.export_attribute (obj, "GenUnitOpCostCurve", "GeneratingUnit", "GeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GenUnitOpCostCurve_collapse" aria-expanded="true" aria-controls="GenUnitOpCostCurve_collapse" style="margin-left: 10px;">GenUnitOpCostCurve</a></legend>
                    <div id="GenUnitOpCostCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
                    {{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GeneratingUnit}}");}); return false;'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GenUnitOpCostCurve_collapse" aria-expanded="true" aria-controls="{{id}}_GenUnitOpCostCurve_collapse" style="margin-left: 10px;">GenUnitOpCostCurve</a></legend>
                    <div id="{{id}}_GenUnitOpCostCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isNetGrossP'>isNetGrossP: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isNetGrossP' class='form-check-input' type='checkbox'{{#isNetGrossP}} checked{{/isNetGrossP}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GeneratingUnit'>GeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_GeneratingUnit' class='form-control' type='text'{{#GeneratingUnit}} value='{{GeneratingUnit}}'{{/GeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "GenUnitOpCostCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isNetGrossP").checked; if (temp) obj["isNetGrossP"] = true;
                temp = document.getElementById (id + "_GeneratingUnit").value; if ("" !== temp) obj["GeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["GeneratingUnit", "1", "0..*", "GeneratingUnit", "GenUnitOpCostCurves"]
                        ]
                    )
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
                let bucket = cim_data.InflowForecast;
                if (null == bucket)
                   cim_data.InflowForecast = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InflowForecast[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "InflowForecast";
                base.parse_attribute (/<cim:InflowForecast.Reservoir\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
                let bucket = context.parsed.InflowForecast;
                if (null == bucket)
                   context.parsed.InflowForecast = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "InflowForecast", "Reservoir", "Reservoir", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InflowForecast_collapse" aria-expanded="true" aria-controls="InflowForecast_collapse" style="margin-left: 10px;">InflowForecast</a></legend>
                    <div id="InflowForecast_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#Reservoir}}<div><b>Reservoir</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Reservoir}}");}); return false;'>{{Reservoir}}</a></div>{{/Reservoir}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InflowForecast_collapse" aria-expanded="true" aria-controls="{{id}}_InflowForecast_collapse" style="margin-left: 10px;">InflowForecast</a></legend>
                    <div id="{{id}}_InflowForecast_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Reservoir'>Reservoir: </label><div class='col-sm-8'><input id='{{id}}_Reservoir' class='form-control' type='text'{{#Reservoir}} value='{{Reservoir}}'{{/Reservoir}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "InflowForecast" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Reservoir").value; if ("" !== temp) obj["Reservoir"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Reservoir", "1", "0..*", "Reservoir", "InflowForecasts"]
                        ]
                    )
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
                let bucket = cim_data.StartIgnFuelCurve;
                if (null == bucket)
                   cim_data.StartIgnFuelCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StartIgnFuelCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartIgnFuelCurve";
                base.parse_attribute (/<cim:StartIgnFuelCurve.ignitionFuelType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ignitionFuelType", sub, context);
                base.parse_attribute (/<cim:StartIgnFuelCurve.StartupModel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
                let bucket = context.parsed.StartIgnFuelCurve;
                if (null == bucket)
                   context.parsed.StartIgnFuelCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "StartIgnFuelCurve", "ignitionFuelType", "ignitionFuelType", fields);
                base.export_attribute (obj, "StartIgnFuelCurve", "StartupModel", "StartupModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StartIgnFuelCurve_collapse" aria-expanded="true" aria-controls="StartIgnFuelCurve_collapse" style="margin-left: 10px;">StartIgnFuelCurve</a></legend>
                    <div id="StartIgnFuelCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#ignitionFuelType}}<div><b>ignitionFuelType</b>: {{ignitionFuelType}}</div>{{/ignitionFuelType}}
                    {{#StartupModel}}<div><b>StartupModel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{StartupModel}}");}); return false;'>{{StartupModel}}</a></div>{{/StartupModel}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["ignitionFuelTypeFuelType"] = [{ id: '', selected: (!obj["ignitionFuelType"])}]; for (let property in FuelType) obj["ignitionFuelTypeFuelType"].push ({ id: property, selected: obj["ignitionFuelType"] && obj["ignitionFuelType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ignitionFuelTypeFuelType"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StartIgnFuelCurve_collapse" aria-expanded="true" aria-controls="{{id}}_StartIgnFuelCurve_collapse" style="margin-left: 10px;">StartIgnFuelCurve</a></legend>
                    <div id="{{id}}_StartIgnFuelCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ignitionFuelType'>ignitionFuelType: </label><div class='col-sm-8'><select id='{{id}}_ignitionFuelType' class='form-control custom-select'>{{#ignitionFuelTypeFuelType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ignitionFuelTypeFuelType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StartupModel'>StartupModel: </label><div class='col-sm-8'><input id='{{id}}_StartupModel' class='form-control' type='text'{{#StartupModel}} value='{{StartupModel}}'{{/StartupModel}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "StartIgnFuelCurve" };
                super.submit (id, obj);
                temp = FuelType[document.getElementById (id + "_ignitionFuelType").value]; if (temp) obj["ignitionFuelType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#FuelType." + temp; else delete obj["ignitionFuelType"];
                temp = document.getElementById (id + "_StartupModel").value; if ("" !== temp) obj["StartupModel"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["StartupModel", "1", "0..1", "StartupModel", "StartIgnFuelCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * The fossil fuel consumed by the non-nuclear thermal generating unit.
         *
         * For example, coal, oil, gas, etc.   These are the specific fuels that the generating unit can consume.
         *
         */
        class FossilFuel extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FossilFuel;
                if (null == bucket)
                   cim_data.FossilFuel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FossilFuel[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "FossilFuel";
                base.parse_attribute (/<cim:FossilFuel.fossilFuelType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "fossilFuelType", sub, context);
                base.parse_element (/<cim:FossilFuel.fuelCost>([\s\S]*?)<\/cim:FossilFuel.fuelCost>/g, obj, "fuelCost", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelDispatchCost>([\s\S]*?)<\/cim:FossilFuel.fuelDispatchCost>/g, obj, "fuelDispatchCost", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelEffFactor>([\s\S]*?)<\/cim:FossilFuel.fuelEffFactor>/g, obj, "fuelEffFactor", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelHandlingCost>([\s\S]*?)<\/cim:FossilFuel.fuelHandlingCost>/g, obj, "fuelHandlingCost", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelHeatContent>([\s\S]*?)<\/cim:FossilFuel.fuelHeatContent>/g, obj, "fuelHeatContent", base.to_float, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelMixture>([\s\S]*?)<\/cim:FossilFuel.fuelMixture>/g, obj, "fuelMixture", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.fuelSulfur>([\s\S]*?)<\/cim:FossilFuel.fuelSulfur>/g, obj, "fuelSulfur", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.highBreakpointP>([\s\S]*?)<\/cim:FossilFuel.highBreakpointP>/g, obj, "highBreakpointP", base.to_string, sub, context);
                base.parse_element (/<cim:FossilFuel.lowBreakpointP>([\s\S]*?)<\/cim:FossilFuel.lowBreakpointP>/g, obj, "lowBreakpointP", base.to_string, sub, context);
                base.parse_attributes (/<cim:FossilFuel.FuelAllocationSchedules\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FuelAllocationSchedules", sub, context);
                base.parse_attribute (/<cim:FossilFuel.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                let bucket = context.parsed.FossilFuel;
                if (null == bucket)
                   context.parsed.FossilFuel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "FossilFuel", "fossilFuelType", "fossilFuelType", fields);
                base.export_element (obj, "FossilFuel", "fuelCost", "fuelCost",  base.from_string, fields);
                base.export_element (obj, "FossilFuel", "fuelDispatchCost", "fuelDispatchCost",  base.from_string, fields);
                base.export_element (obj, "FossilFuel", "fuelEffFactor", "fuelEffFactor",  base.from_string, fields);
                base.export_element (obj, "FossilFuel", "fuelHandlingCost", "fuelHandlingCost",  base.from_string, fields);
                base.export_element (obj, "FossilFuel", "fuelHeatContent", "fuelHeatContent",  base.from_float, fields);
                base.export_element (obj, "FossilFuel", "fuelMixture", "fuelMixture",  base.from_string, fields);
                base.export_element (obj, "FossilFuel", "fuelSulfur", "fuelSulfur",  base.from_string, fields);
                base.export_element (obj, "FossilFuel", "highBreakpointP", "highBreakpointP",  base.from_string, fields);
                base.export_element (obj, "FossilFuel", "lowBreakpointP", "lowBreakpointP",  base.from_string, fields);
                base.export_attributes (obj, "FossilFuel", "FuelAllocationSchedules", "FuelAllocationSchedules", fields);
                base.export_attribute (obj, "FossilFuel", "ThermalGeneratingUnit", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FossilFuel_collapse" aria-expanded="true" aria-controls="FossilFuel_collapse" style="margin-left: 10px;">FossilFuel</a></legend>
                    <div id="FossilFuel_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    {{#FuelAllocationSchedules}}<div><b>FuelAllocationSchedules</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FuelAllocationSchedules}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ThermalGeneratingUnit}}");}); return false;'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["fossilFuelTypeFuelType"] = [{ id: '', selected: (!obj["fossilFuelType"])}]; for (let property in FuelType) obj["fossilFuelTypeFuelType"].push ({ id: property, selected: obj["fossilFuelType"] && obj["fossilFuelType"].endsWith ('.' + property)});
                if (obj["FuelAllocationSchedules"]) obj["FuelAllocationSchedules_string"] = obj["FuelAllocationSchedules"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["fossilFuelTypeFuelType"];
                delete obj["FuelAllocationSchedules_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FossilFuel_collapse" aria-expanded="true" aria-controls="{{id}}_FossilFuel_collapse" style="margin-left: 10px;">FossilFuel</a></legend>
                    <div id="{{id}}_FossilFuel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fossilFuelType'>fossilFuelType: </label><div class='col-sm-8'><select id='{{id}}_fossilFuelType' class='form-control custom-select'>{{#fossilFuelTypeFuelType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/fossilFuelTypeFuelType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelCost'>fuelCost: </label><div class='col-sm-8'><input id='{{id}}_fuelCost' class='form-control' type='text'{{#fuelCost}} value='{{fuelCost}}'{{/fuelCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelDispatchCost'>fuelDispatchCost: </label><div class='col-sm-8'><input id='{{id}}_fuelDispatchCost' class='form-control' type='text'{{#fuelDispatchCost}} value='{{fuelDispatchCost}}'{{/fuelDispatchCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelEffFactor'>fuelEffFactor: </label><div class='col-sm-8'><input id='{{id}}_fuelEffFactor' class='form-control' type='text'{{#fuelEffFactor}} value='{{fuelEffFactor}}'{{/fuelEffFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelHandlingCost'>fuelHandlingCost: </label><div class='col-sm-8'><input id='{{id}}_fuelHandlingCost' class='form-control' type='text'{{#fuelHandlingCost}} value='{{fuelHandlingCost}}'{{/fuelHandlingCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelHeatContent'>fuelHeatContent: </label><div class='col-sm-8'><input id='{{id}}_fuelHeatContent' class='form-control' type='text'{{#fuelHeatContent}} value='{{fuelHeatContent}}'{{/fuelHeatContent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelMixture'>fuelMixture: </label><div class='col-sm-8'><input id='{{id}}_fuelMixture' class='form-control' type='text'{{#fuelMixture}} value='{{fuelMixture}}'{{/fuelMixture}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelSulfur'>fuelSulfur: </label><div class='col-sm-8'><input id='{{id}}_fuelSulfur' class='form-control' type='text'{{#fuelSulfur}} value='{{fuelSulfur}}'{{/fuelSulfur}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highBreakpointP'>highBreakpointP: </label><div class='col-sm-8'><input id='{{id}}_highBreakpointP' class='form-control' type='text'{{#highBreakpointP}} value='{{highBreakpointP}}'{{/highBreakpointP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowBreakpointP'>lowBreakpointP: </label><div class='col-sm-8'><input id='{{id}}_lowBreakpointP' class='form-control' type='text'{{#lowBreakpointP}} value='{{lowBreakpointP}}'{{/lowBreakpointP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FossilFuel" };
                super.submit (id, obj);
                temp = FuelType[document.getElementById (id + "_fossilFuelType").value]; if (temp) obj["fossilFuelType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#FuelType." + temp; else delete obj["fossilFuelType"];
                temp = document.getElementById (id + "_fuelCost").value; if ("" !== temp) obj["fuelCost"] = temp;
                temp = document.getElementById (id + "_fuelDispatchCost").value; if ("" !== temp) obj["fuelDispatchCost"] = temp;
                temp = document.getElementById (id + "_fuelEffFactor").value; if ("" !== temp) obj["fuelEffFactor"] = temp;
                temp = document.getElementById (id + "_fuelHandlingCost").value; if ("" !== temp) obj["fuelHandlingCost"] = temp;
                temp = document.getElementById (id + "_fuelHeatContent").value; if ("" !== temp) obj["fuelHeatContent"] = temp;
                temp = document.getElementById (id + "_fuelMixture").value; if ("" !== temp) obj["fuelMixture"] = temp;
                temp = document.getElementById (id + "_fuelSulfur").value; if ("" !== temp) obj["fuelSulfur"] = temp;
                temp = document.getElementById (id + "_highBreakpointP").value; if ("" !== temp) obj["highBreakpointP"] = temp;
                temp = document.getElementById (id + "_lowBreakpointP").value; if ("" !== temp) obj["lowBreakpointP"] = temp;
                temp = document.getElementById (id + "_ThermalGeneratingUnit").value; if ("" !== temp) obj["ThermalGeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["FuelAllocationSchedules", "0..*", "1", "FuelAllocationSchedule", "FossilFuel"],
                            ["ThermalGeneratingUnit", "1", "0..*", "ThermalGeneratingUnit", "FossilFuels"]
                        ]
                    )
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
                let bucket = cim_data.AirCompressor;
                if (null == bucket)
                   cim_data.AirCompressor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AirCompressor[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "AirCompressor";
                base.parse_element (/<cim:AirCompressor.airCompressorRating>([\s\S]*?)<\/cim:AirCompressor.airCompressorRating>/g, obj, "airCompressorRating", base.to_float, sub, context);
                base.parse_attribute (/<cim:AirCompressor.CombustionTurbine\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CombustionTurbine", sub, context);
                base.parse_attribute (/<cim:AirCompressor.CAESPlant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CAESPlant", sub, context);
                let bucket = context.parsed.AirCompressor;
                if (null == bucket)
                   context.parsed.AirCompressor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "AirCompressor", "airCompressorRating", "airCompressorRating",  base.from_float, fields);
                base.export_attribute (obj, "AirCompressor", "CombustionTurbine", "CombustionTurbine", fields);
                base.export_attribute (obj, "AirCompressor", "CAESPlant", "CAESPlant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AirCompressor_collapse" aria-expanded="true" aria-controls="AirCompressor_collapse" style="margin-left: 10px;">AirCompressor</a></legend>
                    <div id="AirCompressor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#airCompressorRating}}<div><b>airCompressorRating</b>: {{airCompressorRating}}</div>{{/airCompressorRating}}
                    {{#CombustionTurbine}}<div><b>CombustionTurbine</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CombustionTurbine}}");}); return false;'>{{CombustionTurbine}}</a></div>{{/CombustionTurbine}}
                    {{#CAESPlant}}<div><b>CAESPlant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CAESPlant}}");}); return false;'>{{CAESPlant}}</a></div>{{/CAESPlant}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AirCompressor_collapse" aria-expanded="true" aria-controls="{{id}}_AirCompressor_collapse" style="margin-left: 10px;">AirCompressor</a></legend>
                    <div id="{{id}}_AirCompressor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_airCompressorRating'>airCompressorRating: </label><div class='col-sm-8'><input id='{{id}}_airCompressorRating' class='form-control' type='text'{{#airCompressorRating}} value='{{airCompressorRating}}'{{/airCompressorRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CombustionTurbine'>CombustionTurbine: </label><div class='col-sm-8'><input id='{{id}}_CombustionTurbine' class='form-control' type='text'{{#CombustionTurbine}} value='{{CombustionTurbine}}'{{/CombustionTurbine}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CAESPlant'>CAESPlant: </label><div class='col-sm-8'><input id='{{id}}_CAESPlant' class='form-control' type='text'{{#CAESPlant}} value='{{CAESPlant}}'{{/CAESPlant}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AirCompressor" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_airCompressorRating").value; if ("" !== temp) obj["airCompressorRating"] = temp;
                temp = document.getElementById (id + "_CombustionTurbine").value; if ("" !== temp) obj["CombustionTurbine"] = temp;
                temp = document.getElementById (id + "_CAESPlant").value; if ("" !== temp) obj["CAESPlant"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CombustionTurbine", "1", "0..1", "CombustionTurbine", "AirCompressor"],
                            ["CAESPlant", "1", "1", "CAESPlant", "AirCompressor"]
                        ]
                    )
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
                let bucket = cim_data.StartupModel;
                if (null == bucket)
                   cim_data.StartupModel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StartupModel[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
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
                base.parse_attribute (/<cim:StartupModel.StartIgnFuelCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StartIgnFuelCurve", sub, context);
                base.parse_attribute (/<cim:StartupModel.StartMainFuelCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StartMainFuelCurve", sub, context);
                base.parse_attribute (/<cim:StartupModel.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                base.parse_attribute (/<cim:StartupModel.StartRampCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StartRampCurve", sub, context);
                let bucket = context.parsed.StartupModel;
                if (null == bucket)
                   context.parsed.StartupModel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "StartupModel", "fixedMaintCost", "fixedMaintCost",  base.from_string, fields);
                base.export_element (obj, "StartupModel", "hotStandbyHeat", "hotStandbyHeat",  base.from_string, fields);
                base.export_element (obj, "StartupModel", "incrementalMaintCost", "incrementalMaintCost",  base.from_string, fields);
                base.export_element (obj, "StartupModel", "minimumDownTime", "minimumDownTime",  base.from_string, fields);
                base.export_element (obj, "StartupModel", "minimumRunTime", "minimumRunTime",  base.from_string, fields);
                base.export_element (obj, "StartupModel", "riskFactorCost", "riskFactorCost",  base.from_string, fields);
                base.export_element (obj, "StartupModel", "startupCost", "startupCost",  base.from_string, fields);
                base.export_element (obj, "StartupModel", "startupDate", "startupDate",  base.from_datetime, fields);
                base.export_element (obj, "StartupModel", "startupPriority", "startupPriority",  base.from_string, fields);
                base.export_element (obj, "StartupModel", "stbyAuxP", "stbyAuxP",  base.from_string, fields);
                base.export_attribute (obj, "StartupModel", "StartIgnFuelCurve", "StartIgnFuelCurve", fields);
                base.export_attribute (obj, "StartupModel", "StartMainFuelCurve", "StartMainFuelCurve", fields);
                base.export_attribute (obj, "StartupModel", "ThermalGeneratingUnit", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "StartupModel", "StartRampCurve", "StartRampCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StartupModel_collapse" aria-expanded="true" aria-controls="StartupModel_collapse" style="margin-left: 10px;">StartupModel</a></legend>
                    <div id="StartupModel_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    {{#StartIgnFuelCurve}}<div><b>StartIgnFuelCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{StartIgnFuelCurve}}");}); return false;'>{{StartIgnFuelCurve}}</a></div>{{/StartIgnFuelCurve}}
                    {{#StartMainFuelCurve}}<div><b>StartMainFuelCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{StartMainFuelCurve}}");}); return false;'>{{StartMainFuelCurve}}</a></div>{{/StartMainFuelCurve}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ThermalGeneratingUnit}}");}); return false;'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
                    {{#StartRampCurve}}<div><b>StartRampCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{StartRampCurve}}");}); return false;'>{{StartRampCurve}}</a></div>{{/StartRampCurve}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StartupModel_collapse" aria-expanded="true" aria-controls="{{id}}_StartupModel_collapse" style="margin-left: 10px;">StartupModel</a></legend>
                    <div id="{{id}}_StartupModel_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fixedMaintCost'>fixedMaintCost: </label><div class='col-sm-8'><input id='{{id}}_fixedMaintCost' class='form-control' type='text'{{#fixedMaintCost}} value='{{fixedMaintCost}}'{{/fixedMaintCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hotStandbyHeat'>hotStandbyHeat: </label><div class='col-sm-8'><input id='{{id}}_hotStandbyHeat' class='form-control' type='text'{{#hotStandbyHeat}} value='{{hotStandbyHeat}}'{{/hotStandbyHeat}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_incrementalMaintCost'>incrementalMaintCost: </label><div class='col-sm-8'><input id='{{id}}_incrementalMaintCost' class='form-control' type='text'{{#incrementalMaintCost}} value='{{incrementalMaintCost}}'{{/incrementalMaintCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumDownTime'>minimumDownTime: </label><div class='col-sm-8'><input id='{{id}}_minimumDownTime' class='form-control' type='text'{{#minimumDownTime}} value='{{minimumDownTime}}'{{/minimumDownTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumRunTime'>minimumRunTime: </label><div class='col-sm-8'><input id='{{id}}_minimumRunTime' class='form-control' type='text'{{#minimumRunTime}} value='{{minimumRunTime}}'{{/minimumRunTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_riskFactorCost'>riskFactorCost: </label><div class='col-sm-8'><input id='{{id}}_riskFactorCost' class='form-control' type='text'{{#riskFactorCost}} value='{{riskFactorCost}}'{{/riskFactorCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startupCost'>startupCost: </label><div class='col-sm-8'><input id='{{id}}_startupCost' class='form-control' type='text'{{#startupCost}} value='{{startupCost}}'{{/startupCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startupDate'>startupDate: </label><div class='col-sm-8'><input id='{{id}}_startupDate' class='form-control' type='text'{{#startupDate}} value='{{startupDate}}'{{/startupDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startupPriority'>startupPriority: </label><div class='col-sm-8'><input id='{{id}}_startupPriority' class='form-control' type='text'{{#startupPriority}} value='{{startupPriority}}'{{/startupPriority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stbyAuxP'>stbyAuxP: </label><div class='col-sm-8'><input id='{{id}}_stbyAuxP' class='form-control' type='text'{{#stbyAuxP}} value='{{stbyAuxP}}'{{/stbyAuxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StartIgnFuelCurve'>StartIgnFuelCurve: </label><div class='col-sm-8'><input id='{{id}}_StartIgnFuelCurve' class='form-control' type='text'{{#StartIgnFuelCurve}} value='{{StartIgnFuelCurve}}'{{/StartIgnFuelCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StartMainFuelCurve'>StartMainFuelCurve: </label><div class='col-sm-8'><input id='{{id}}_StartMainFuelCurve' class='form-control' type='text'{{#StartMainFuelCurve}} value='{{StartMainFuelCurve}}'{{/StartMainFuelCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StartRampCurve'>StartRampCurve: </label><div class='col-sm-8'><input id='{{id}}_StartRampCurve' class='form-control' type='text'{{#StartRampCurve}} value='{{StartRampCurve}}'{{/StartRampCurve}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "StartupModel" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_fixedMaintCost").value; if ("" !== temp) obj["fixedMaintCost"] = temp;
                temp = document.getElementById (id + "_hotStandbyHeat").value; if ("" !== temp) obj["hotStandbyHeat"] = temp;
                temp = document.getElementById (id + "_incrementalMaintCost").value; if ("" !== temp) obj["incrementalMaintCost"] = temp;
                temp = document.getElementById (id + "_minimumDownTime").value; if ("" !== temp) obj["minimumDownTime"] = temp;
                temp = document.getElementById (id + "_minimumRunTime").value; if ("" !== temp) obj["minimumRunTime"] = temp;
                temp = document.getElementById (id + "_riskFactorCost").value; if ("" !== temp) obj["riskFactorCost"] = temp;
                temp = document.getElementById (id + "_startupCost").value; if ("" !== temp) obj["startupCost"] = temp;
                temp = document.getElementById (id + "_startupDate").value; if ("" !== temp) obj["startupDate"] = temp;
                temp = document.getElementById (id + "_startupPriority").value; if ("" !== temp) obj["startupPriority"] = temp;
                temp = document.getElementById (id + "_stbyAuxP").value; if ("" !== temp) obj["stbyAuxP"] = temp;
                temp = document.getElementById (id + "_StartIgnFuelCurve").value; if ("" !== temp) obj["StartIgnFuelCurve"] = temp;
                temp = document.getElementById (id + "_StartMainFuelCurve").value; if ("" !== temp) obj["StartMainFuelCurve"] = temp;
                temp = document.getElementById (id + "_ThermalGeneratingUnit").value; if ("" !== temp) obj["ThermalGeneratingUnit"] = temp;
                temp = document.getElementById (id + "_StartRampCurve").value; if ("" !== temp) obj["StartRampCurve"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["StartIgnFuelCurve", "0..1", "1", "StartIgnFuelCurve", "StartupModel"],
                            ["StartMainFuelCurve", "0..1", "1", "StartMainFuelCurve", "StartupModel"],
                            ["ThermalGeneratingUnit", "1", "0..1", "ThermalGeneratingUnit", "StartupModel"],
                            ["StartRampCurve", "0..1", "1", "StartRampCurve", "StartupModel"]
                        ]
                    )
                );
            }
        }

        /**
         * Rate in gross active power per minute (Y-axis) at which a unit can be loaded versus the number of hours (X-axis) the unit was off line.
         *
         */
        class StartRampCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.StartRampCurve;
                if (null == bucket)
                   cim_data.StartRampCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StartRampCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartRampCurve";
                base.parse_element (/<cim:StartRampCurve.hotStandbyRamp>([\s\S]*?)<\/cim:StartRampCurve.hotStandbyRamp>/g, obj, "hotStandbyRamp", base.to_string, sub, context);
                base.parse_attribute (/<cim:StartRampCurve.StartupModel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
                let bucket = context.parsed.StartRampCurve;
                if (null == bucket)
                   context.parsed.StartRampCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "StartRampCurve", "hotStandbyRamp", "hotStandbyRamp",  base.from_string, fields);
                base.export_attribute (obj, "StartRampCurve", "StartupModel", "StartupModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StartRampCurve_collapse" aria-expanded="true" aria-controls="StartRampCurve_collapse" style="margin-left: 10px;">StartRampCurve</a></legend>
                    <div id="StartRampCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#hotStandbyRamp}}<div><b>hotStandbyRamp</b>: {{hotStandbyRamp}}</div>{{/hotStandbyRamp}}
                    {{#StartupModel}}<div><b>StartupModel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{StartupModel}}");}); return false;'>{{StartupModel}}</a></div>{{/StartupModel}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StartRampCurve_collapse" aria-expanded="true" aria-controls="{{id}}_StartRampCurve_collapse" style="margin-left: 10px;">StartRampCurve</a></legend>
                    <div id="{{id}}_StartRampCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hotStandbyRamp'>hotStandbyRamp: </label><div class='col-sm-8'><input id='{{id}}_hotStandbyRamp' class='form-control' type='text'{{#hotStandbyRamp}} value='{{hotStandbyRamp}}'{{/hotStandbyRamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StartupModel'>StartupModel: </label><div class='col-sm-8'><input id='{{id}}_StartupModel' class='form-control' type='text'{{#StartupModel}} value='{{StartupModel}}'{{/StartupModel}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "StartRampCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_hotStandbyRamp").value; if ("" !== temp) obj["hotStandbyRamp"] = temp;
                temp = document.getElementById (id + "_StartupModel").value; if ("" !== temp) obj["StartupModel"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["StartupModel", "1", "0..1", "StartupModel", "StartRampCurve"]
                        ]
                    )
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
                let bucket = cim_data.Reservoir;
                if (null == bucket)
                   cim_data.Reservoir = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Reservoir[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
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
                base.parse_attributes (/<cim:Reservoir.HydroPowerPlants\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HydroPowerPlants", sub, context);
                base.parse_attribute (/<cim:Reservoir.TargetLevelSchedule\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TargetLevelSchedule", sub, context);
                base.parse_attributes (/<cim:Reservoir.UpstreamFromHydroPowerPlants\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UpstreamFromHydroPowerPlants", sub, context);
                base.parse_attribute (/<cim:Reservoir.SpillsFromReservoir\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SpillsFromReservoir", sub, context);
                base.parse_attributes (/<cim:Reservoir.SpillsIntoReservoirs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SpillsIntoReservoirs", sub, context);
                base.parse_attributes (/<cim:Reservoir.InflowForecasts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InflowForecasts", sub, context);
                base.parse_attributes (/<cim:Reservoir.LevelVsVolumeCurves\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LevelVsVolumeCurves", sub, context);
                let bucket = context.parsed.Reservoir;
                if (null == bucket)
                   context.parsed.Reservoir = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "Reservoir", "activeStorageCapacity", "activeStorageCapacity",  base.from_string, fields);
                base.export_element (obj, "Reservoir", "energyStorageRating", "energyStorageRating",  base.from_float, fields);
                base.export_element (obj, "Reservoir", "fullSupplyLevel", "fullSupplyLevel",  base.from_string, fields);
                base.export_element (obj, "Reservoir", "grossCapacity", "grossCapacity",  base.from_string, fields);
                base.export_element (obj, "Reservoir", "normalMinOperateLevel", "normalMinOperateLevel",  base.from_string, fields);
                base.export_element (obj, "Reservoir", "riverOutletWorks", "riverOutletWorks",  base.from_string, fields);
                base.export_element (obj, "Reservoir", "spillTravelDelay", "spillTravelDelay",  base.from_string, fields);
                base.export_element (obj, "Reservoir", "spillwayCapacity", "spillwayCapacity",  base.from_float, fields);
                base.export_element (obj, "Reservoir", "spillwayCrestLength", "spillwayCrestLength",  base.from_string, fields);
                base.export_element (obj, "Reservoir", "spillwayCrestLevel", "spillwayCrestLevel",  base.from_string, fields);
                base.export_element (obj, "Reservoir", "spillWayGateType", "spillWayGateType",  base.from_string, fields);
                base.export_attributes (obj, "Reservoir", "HydroPowerPlants", "HydroPowerPlants", fields);
                base.export_attribute (obj, "Reservoir", "TargetLevelSchedule", "TargetLevelSchedule", fields);
                base.export_attributes (obj, "Reservoir", "UpstreamFromHydroPowerPlants", "UpstreamFromHydroPowerPlants", fields);
                base.export_attribute (obj, "Reservoir", "SpillsFromReservoir", "SpillsFromReservoir", fields);
                base.export_attributes (obj, "Reservoir", "SpillsIntoReservoirs", "SpillsIntoReservoirs", fields);
                base.export_attributes (obj, "Reservoir", "InflowForecasts", "InflowForecasts", fields);
                base.export_attributes (obj, "Reservoir", "LevelVsVolumeCurves", "LevelVsVolumeCurves", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Reservoir_collapse" aria-expanded="true" aria-controls="Reservoir_collapse" style="margin-left: 10px;">Reservoir</a></legend>
                    <div id="Reservoir_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    {{#HydroPowerPlants}}<div><b>HydroPowerPlants</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/HydroPowerPlants}}
                    {{#TargetLevelSchedule}}<div><b>TargetLevelSchedule</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TargetLevelSchedule}}");}); return false;'>{{TargetLevelSchedule}}</a></div>{{/TargetLevelSchedule}}
                    {{#UpstreamFromHydroPowerPlants}}<div><b>UpstreamFromHydroPowerPlants</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/UpstreamFromHydroPowerPlants}}
                    {{#SpillsFromReservoir}}<div><b>SpillsFromReservoir</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SpillsFromReservoir}}");}); return false;'>{{SpillsFromReservoir}}</a></div>{{/SpillsFromReservoir}}
                    {{#SpillsIntoReservoirs}}<div><b>SpillsIntoReservoirs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SpillsIntoReservoirs}}
                    {{#InflowForecasts}}<div><b>InflowForecasts</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InflowForecasts}}
                    {{#LevelVsVolumeCurves}}<div><b>LevelVsVolumeCurves</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LevelVsVolumeCurves}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["HydroPowerPlants"]) obj["HydroPowerPlants_string"] = obj["HydroPowerPlants"].join ();
                if (obj["UpstreamFromHydroPowerPlants"]) obj["UpstreamFromHydroPowerPlants_string"] = obj["UpstreamFromHydroPowerPlants"].join ();
                if (obj["SpillsIntoReservoirs"]) obj["SpillsIntoReservoirs_string"] = obj["SpillsIntoReservoirs"].join ();
                if (obj["InflowForecasts"]) obj["InflowForecasts_string"] = obj["InflowForecasts"].join ();
                if (obj["LevelVsVolumeCurves"]) obj["LevelVsVolumeCurves_string"] = obj["LevelVsVolumeCurves"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["HydroPowerPlants_string"];
                delete obj["UpstreamFromHydroPowerPlants_string"];
                delete obj["SpillsIntoReservoirs_string"];
                delete obj["InflowForecasts_string"];
                delete obj["LevelVsVolumeCurves_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Reservoir_collapse" aria-expanded="true" aria-controls="{{id}}_Reservoir_collapse" style="margin-left: 10px;">Reservoir</a></legend>
                    <div id="{{id}}_Reservoir_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_activeStorageCapacity'>activeStorageCapacity: </label><div class='col-sm-8'><input id='{{id}}_activeStorageCapacity' class='form-control' type='text'{{#activeStorageCapacity}} value='{{activeStorageCapacity}}'{{/activeStorageCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyStorageRating'>energyStorageRating: </label><div class='col-sm-8'><input id='{{id}}_energyStorageRating' class='form-control' type='text'{{#energyStorageRating}} value='{{energyStorageRating}}'{{/energyStorageRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fullSupplyLevel'>fullSupplyLevel: </label><div class='col-sm-8'><input id='{{id}}_fullSupplyLevel' class='form-control' type='text'{{#fullSupplyLevel}} value='{{fullSupplyLevel}}'{{/fullSupplyLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_grossCapacity'>grossCapacity: </label><div class='col-sm-8'><input id='{{id}}_grossCapacity' class='form-control' type='text'{{#grossCapacity}} value='{{grossCapacity}}'{{/grossCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_normalMinOperateLevel'>normalMinOperateLevel: </label><div class='col-sm-8'><input id='{{id}}_normalMinOperateLevel' class='form-control' type='text'{{#normalMinOperateLevel}} value='{{normalMinOperateLevel}}'{{/normalMinOperateLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_riverOutletWorks'>riverOutletWorks: </label><div class='col-sm-8'><input id='{{id}}_riverOutletWorks' class='form-control' type='text'{{#riverOutletWorks}} value='{{riverOutletWorks}}'{{/riverOutletWorks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_spillTravelDelay'>spillTravelDelay: </label><div class='col-sm-8'><input id='{{id}}_spillTravelDelay' class='form-control' type='text'{{#spillTravelDelay}} value='{{spillTravelDelay}}'{{/spillTravelDelay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_spillwayCapacity'>spillwayCapacity: </label><div class='col-sm-8'><input id='{{id}}_spillwayCapacity' class='form-control' type='text'{{#spillwayCapacity}} value='{{spillwayCapacity}}'{{/spillwayCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_spillwayCrestLength'>spillwayCrestLength: </label><div class='col-sm-8'><input id='{{id}}_spillwayCrestLength' class='form-control' type='text'{{#spillwayCrestLength}} value='{{spillwayCrestLength}}'{{/spillwayCrestLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_spillwayCrestLevel'>spillwayCrestLevel: </label><div class='col-sm-8'><input id='{{id}}_spillwayCrestLevel' class='form-control' type='text'{{#spillwayCrestLevel}} value='{{spillwayCrestLevel}}'{{/spillwayCrestLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_spillWayGateType'>spillWayGateType: </label><div class='col-sm-8'><input id='{{id}}_spillWayGateType' class='form-control' type='text'{{#spillWayGateType}} value='{{spillWayGateType}}'{{/spillWayGateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TargetLevelSchedule'>TargetLevelSchedule: </label><div class='col-sm-8'><input id='{{id}}_TargetLevelSchedule' class='form-control' type='text'{{#TargetLevelSchedule}} value='{{TargetLevelSchedule}}'{{/TargetLevelSchedule}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SpillsFromReservoir'>SpillsFromReservoir: </label><div class='col-sm-8'><input id='{{id}}_SpillsFromReservoir' class='form-control' type='text'{{#SpillsFromReservoir}} value='{{SpillsFromReservoir}}'{{/SpillsFromReservoir}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Reservoir" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_activeStorageCapacity").value; if ("" !== temp) obj["activeStorageCapacity"] = temp;
                temp = document.getElementById (id + "_energyStorageRating").value; if ("" !== temp) obj["energyStorageRating"] = temp;
                temp = document.getElementById (id + "_fullSupplyLevel").value; if ("" !== temp) obj["fullSupplyLevel"] = temp;
                temp = document.getElementById (id + "_grossCapacity").value; if ("" !== temp) obj["grossCapacity"] = temp;
                temp = document.getElementById (id + "_normalMinOperateLevel").value; if ("" !== temp) obj["normalMinOperateLevel"] = temp;
                temp = document.getElementById (id + "_riverOutletWorks").value; if ("" !== temp) obj["riverOutletWorks"] = temp;
                temp = document.getElementById (id + "_spillTravelDelay").value; if ("" !== temp) obj["spillTravelDelay"] = temp;
                temp = document.getElementById (id + "_spillwayCapacity").value; if ("" !== temp) obj["spillwayCapacity"] = temp;
                temp = document.getElementById (id + "_spillwayCrestLength").value; if ("" !== temp) obj["spillwayCrestLength"] = temp;
                temp = document.getElementById (id + "_spillwayCrestLevel").value; if ("" !== temp) obj["spillwayCrestLevel"] = temp;
                temp = document.getElementById (id + "_spillWayGateType").value; if ("" !== temp) obj["spillWayGateType"] = temp;
                temp = document.getElementById (id + "_TargetLevelSchedule").value; if ("" !== temp) obj["TargetLevelSchedule"] = temp;
                temp = document.getElementById (id + "_SpillsFromReservoir").value; if ("" !== temp) obj["SpillsFromReservoir"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["HydroPowerPlants", "0..*", "0..1", "HydroPowerPlant", "Reservoir"],
                            ["TargetLevelSchedule", "0..1", "1", "TargetLevelSchedule", "Reservoir"],
                            ["UpstreamFromHydroPowerPlants", "0..*", "1", "HydroPowerPlant", "GenSourcePumpDischargeReservoir"],
                            ["SpillsFromReservoir", "0..1", "0..*", "Reservoir", "SpillsIntoReservoirs"],
                            ["SpillsIntoReservoirs", "0..*", "0..1", "Reservoir", "SpillsFromReservoir"],
                            ["InflowForecasts", "0..*", "1", "InflowForecast", "Reservoir"],
                            ["LevelVsVolumeCurves", "0..*", "1", "LevelVsVolumeCurve", "Reservoir"]
                        ]
                    )
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
                let bucket = cim_data.GeneratingUnit;
                if (null == bucket)
                   cim_data.GeneratingUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GeneratingUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "GeneratingUnit";
                base.parse_element (/<cim:GeneratingUnit.allocSpinResP>([\s\S]*?)<\/cim:GeneratingUnit.allocSpinResP>/g, obj, "allocSpinResP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.autoCntrlMarginP>([\s\S]*?)<\/cim:GeneratingUnit.autoCntrlMarginP>/g, obj, "autoCntrlMarginP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.baseP>([\s\S]*?)<\/cim:GeneratingUnit.baseP>/g, obj, "baseP", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.controlDeadband>([\s\S]*?)<\/cim:GeneratingUnit.controlDeadband>/g, obj, "controlDeadband", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.controlPulseHigh>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseHigh>/g, obj, "controlPulseHigh", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.controlPulseLow>([\s\S]*?)<\/cim:GeneratingUnit.controlPulseLow>/g, obj, "controlPulseLow", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.controlResponseRate>([\s\S]*?)<\/cim:GeneratingUnit.controlResponseRate>/g, obj, "controlResponseRate", base.to_string, sub, context);
                base.parse_element (/<cim:GeneratingUnit.efficiency>([\s\S]*?)<\/cim:GeneratingUnit.efficiency>/g, obj, "efficiency", base.to_string, sub, context);
                base.parse_attribute (/<cim:GeneratingUnit.genControlMode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "genControlMode", sub, context);
                base.parse_attribute (/<cim:GeneratingUnit.genControlSource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "genControlSource", sub, context);
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
                base.parse_attribute (/<cim:GeneratingUnit.GenUnitOpSchedule\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GenUnitOpSchedule", sub, context);
                base.parse_attributes (/<cim:GeneratingUnit.GrossToNetActivePowerCurves\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GrossToNetActivePowerCurves", sub, context);
                base.parse_attributes (/<cim:GeneratingUnit.RotatingMachine\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RotatingMachine", sub, context);
                base.parse_attributes (/<cim:GeneratingUnit.GenUnitOpCostCurves\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GenUnitOpCostCurves", sub, context);
                base.parse_attributes (/<cim:GeneratingUnit.ControlAreaGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ControlAreaGeneratingUnit", sub, context);
                let bucket = context.parsed.GeneratingUnit;
                if (null == bucket)
                   context.parsed.GeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Equipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "GeneratingUnit", "allocSpinResP", "allocSpinResP",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "autoCntrlMarginP", "autoCntrlMarginP",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "baseP", "baseP",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "controlDeadband", "controlDeadband",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "controlPulseHigh", "controlPulseHigh",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "controlPulseLow", "controlPulseLow",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "controlResponseRate", "controlResponseRate",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "efficiency", "efficiency",  base.from_string, fields);
                base.export_attribute (obj, "GeneratingUnit", "genControlMode", "genControlMode", fields);
                base.export_attribute (obj, "GeneratingUnit", "genControlSource", "genControlSource", fields);
                base.export_element (obj, "GeneratingUnit", "governorMPL", "governorMPL",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "governorSCD", "governorSCD",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "highControlLimit", "highControlLimit",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "initialP", "initialP",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "longPF", "longPF",  base.from_float, fields);
                base.export_element (obj, "GeneratingUnit", "lowControlLimit", "lowControlLimit",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "lowerRampRate", "lowerRampRate",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "maxEconomicP", "maxEconomicP",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "maximumAllowableSpinningReserve", "maximumAllowableSpinningReserve",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "maxOperatingP", "maxOperatingP",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "minEconomicP", "minEconomicP",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "minimumOffTime", "minimumOffTime",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "minOperatingP", "minOperatingP",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "modelDetail", "modelDetail",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "nominalP", "nominalP",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "normalPF", "normalPF",  base.from_float, fields);
                base.export_element (obj, "GeneratingUnit", "penaltyFactor", "penaltyFactor",  base.from_float, fields);
                base.export_element (obj, "GeneratingUnit", "raiseRampRate", "raiseRampRate",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "ratedGrossMaxP", "ratedGrossMaxP",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "ratedGrossMinP", "ratedGrossMinP",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "ratedNetMaxP", "ratedNetMaxP",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "shortPF", "shortPF",  base.from_float, fields);
                base.export_element (obj, "GeneratingUnit", "startupCost", "startupCost",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "startupTime", "startupTime",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "tieLinePF", "tieLinePF",  base.from_float, fields);
                base.export_element (obj, "GeneratingUnit", "variableCost", "variableCost",  base.from_string, fields);
                base.export_element (obj, "GeneratingUnit", "totalEfficiency", "totalEfficiency",  base.from_string, fields);
                base.export_attribute (obj, "GeneratingUnit", "GenUnitOpSchedule", "GenUnitOpSchedule", fields);
                base.export_attributes (obj, "GeneratingUnit", "GrossToNetActivePowerCurves", "GrossToNetActivePowerCurves", fields);
                base.export_attributes (obj, "GeneratingUnit", "RotatingMachine", "RotatingMachine", fields);
                base.export_attributes (obj, "GeneratingUnit", "GenUnitOpCostCurves", "GenUnitOpCostCurves", fields);
                base.export_attributes (obj, "GeneratingUnit", "ControlAreaGeneratingUnit", "ControlAreaGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GeneratingUnit_collapse" aria-expanded="true" aria-controls="GeneratingUnit_collapse" style="margin-left: 10px;">GeneratingUnit</a></legend>
                    <div id="GeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    {{#GenUnitOpSchedule}}<div><b>GenUnitOpSchedule</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GenUnitOpSchedule}}");}); return false;'>{{GenUnitOpSchedule}}</a></div>{{/GenUnitOpSchedule}}
                    {{#GrossToNetActivePowerCurves}}<div><b>GrossToNetActivePowerCurves</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/GrossToNetActivePowerCurves}}
                    {{#RotatingMachine}}<div><b>RotatingMachine</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RotatingMachine}}
                    {{#GenUnitOpCostCurves}}<div><b>GenUnitOpCostCurves</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/GenUnitOpCostCurves}}
                    {{#ControlAreaGeneratingUnit}}<div><b>ControlAreaGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ControlAreaGeneratingUnit}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["genControlModeGeneratorControlMode"] = [{ id: '', selected: (!obj["genControlMode"])}]; for (let property in GeneratorControlMode) obj["genControlModeGeneratorControlMode"].push ({ id: property, selected: obj["genControlMode"] && obj["genControlMode"].endsWith ('.' + property)});
                obj["genControlSourceGeneratorControlSource"] = [{ id: '', selected: (!obj["genControlSource"])}]; for (let property in GeneratorControlSource) obj["genControlSourceGeneratorControlSource"].push ({ id: property, selected: obj["genControlSource"] && obj["genControlSource"].endsWith ('.' + property)});
                if (obj["GrossToNetActivePowerCurves"]) obj["GrossToNetActivePowerCurves_string"] = obj["GrossToNetActivePowerCurves"].join ();
                if (obj["RotatingMachine"]) obj["RotatingMachine_string"] = obj["RotatingMachine"].join ();
                if (obj["GenUnitOpCostCurves"]) obj["GenUnitOpCostCurves_string"] = obj["GenUnitOpCostCurves"].join ();
                if (obj["ControlAreaGeneratingUnit"]) obj["ControlAreaGeneratingUnit_string"] = obj["ControlAreaGeneratingUnit"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["genControlModeGeneratorControlMode"];
                delete obj["genControlSourceGeneratorControlSource"];
                delete obj["GrossToNetActivePowerCurves_string"];
                delete obj["RotatingMachine_string"];
                delete obj["GenUnitOpCostCurves_string"];
                delete obj["ControlAreaGeneratingUnit_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GeneratingUnit_collapse" aria-expanded="true" aria-controls="{{id}}_GeneratingUnit_collapse" style="margin-left: 10px;">GeneratingUnit</a></legend>
                    <div id="{{id}}_GeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_allocSpinResP'>allocSpinResP: </label><div class='col-sm-8'><input id='{{id}}_allocSpinResP' class='form-control' type='text'{{#allocSpinResP}} value='{{allocSpinResP}}'{{/allocSpinResP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_autoCntrlMarginP'>autoCntrlMarginP: </label><div class='col-sm-8'><input id='{{id}}_autoCntrlMarginP' class='form-control' type='text'{{#autoCntrlMarginP}} value='{{autoCntrlMarginP}}'{{/autoCntrlMarginP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_baseP'>baseP: </label><div class='col-sm-8'><input id='{{id}}_baseP' class='form-control' type='text'{{#baseP}} value='{{baseP}}'{{/baseP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_controlDeadband'>controlDeadband: </label><div class='col-sm-8'><input id='{{id}}_controlDeadband' class='form-control' type='text'{{#controlDeadband}} value='{{controlDeadband}}'{{/controlDeadband}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_controlPulseHigh'>controlPulseHigh: </label><div class='col-sm-8'><input id='{{id}}_controlPulseHigh' class='form-control' type='text'{{#controlPulseHigh}} value='{{controlPulseHigh}}'{{/controlPulseHigh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_controlPulseLow'>controlPulseLow: </label><div class='col-sm-8'><input id='{{id}}_controlPulseLow' class='form-control' type='text'{{#controlPulseLow}} value='{{controlPulseLow}}'{{/controlPulseLow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_controlResponseRate'>controlResponseRate: </label><div class='col-sm-8'><input id='{{id}}_controlResponseRate' class='form-control' type='text'{{#controlResponseRate}} value='{{controlResponseRate}}'{{/controlResponseRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efficiency'>efficiency: </label><div class='col-sm-8'><input id='{{id}}_efficiency' class='form-control' type='text'{{#efficiency}} value='{{efficiency}}'{{/efficiency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_genControlMode'>genControlMode: </label><div class='col-sm-8'><select id='{{id}}_genControlMode' class='form-control custom-select'>{{#genControlModeGeneratorControlMode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/genControlModeGeneratorControlMode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_genControlSource'>genControlSource: </label><div class='col-sm-8'><select id='{{id}}_genControlSource' class='form-control custom-select'>{{#genControlSourceGeneratorControlSource}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/genControlSourceGeneratorControlSource}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_governorMPL'>governorMPL: </label><div class='col-sm-8'><input id='{{id}}_governorMPL' class='form-control' type='text'{{#governorMPL}} value='{{governorMPL}}'{{/governorMPL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_governorSCD'>governorSCD: </label><div class='col-sm-8'><input id='{{id}}_governorSCD' class='form-control' type='text'{{#governorSCD}} value='{{governorSCD}}'{{/governorSCD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highControlLimit'>highControlLimit: </label><div class='col-sm-8'><input id='{{id}}_highControlLimit' class='form-control' type='text'{{#highControlLimit}} value='{{highControlLimit}}'{{/highControlLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_initialP'>initialP: </label><div class='col-sm-8'><input id='{{id}}_initialP' class='form-control' type='text'{{#initialP}} value='{{initialP}}'{{/initialP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_longPF'>longPF: </label><div class='col-sm-8'><input id='{{id}}_longPF' class='form-control' type='text'{{#longPF}} value='{{longPF}}'{{/longPF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowControlLimit'>lowControlLimit: </label><div class='col-sm-8'><input id='{{id}}_lowControlLimit' class='form-control' type='text'{{#lowControlLimit}} value='{{lowControlLimit}}'{{/lowControlLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowerRampRate'>lowerRampRate: </label><div class='col-sm-8'><input id='{{id}}_lowerRampRate' class='form-control' type='text'{{#lowerRampRate}} value='{{lowerRampRate}}'{{/lowerRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxEconomicP'>maxEconomicP: </label><div class='col-sm-8'><input id='{{id}}_maxEconomicP' class='form-control' type='text'{{#maxEconomicP}} value='{{maxEconomicP}}'{{/maxEconomicP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumAllowableSpinningReserve'>maximumAllowableSpinningReserve: </label><div class='col-sm-8'><input id='{{id}}_maximumAllowableSpinningReserve' class='form-control' type='text'{{#maximumAllowableSpinningReserve}} value='{{maximumAllowableSpinningReserve}}'{{/maximumAllowableSpinningReserve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxOperatingP'>maxOperatingP: </label><div class='col-sm-8'><input id='{{id}}_maxOperatingP' class='form-control' type='text'{{#maxOperatingP}} value='{{maxOperatingP}}'{{/maxOperatingP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minEconomicP'>minEconomicP: </label><div class='col-sm-8'><input id='{{id}}_minEconomicP' class='form-control' type='text'{{#minEconomicP}} value='{{minEconomicP}}'{{/minEconomicP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumOffTime'>minimumOffTime: </label><div class='col-sm-8'><input id='{{id}}_minimumOffTime' class='form-control' type='text'{{#minimumOffTime}} value='{{minimumOffTime}}'{{/minimumOffTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minOperatingP'>minOperatingP: </label><div class='col-sm-8'><input id='{{id}}_minOperatingP' class='form-control' type='text'{{#minOperatingP}} value='{{minOperatingP}}'{{/minOperatingP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_modelDetail'>modelDetail: </label><div class='col-sm-8'><input id='{{id}}_modelDetail' class='form-control' type='text'{{#modelDetail}} value='{{modelDetail}}'{{/modelDetail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nominalP'>nominalP: </label><div class='col-sm-8'><input id='{{id}}_nominalP' class='form-control' type='text'{{#nominalP}} value='{{nominalP}}'{{/nominalP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_normalPF'>normalPF: </label><div class='col-sm-8'><input id='{{id}}_normalPF' class='form-control' type='text'{{#normalPF}} value='{{normalPF}}'{{/normalPF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_penaltyFactor'>penaltyFactor: </label><div class='col-sm-8'><input id='{{id}}_penaltyFactor' class='form-control' type='text'{{#penaltyFactor}} value='{{penaltyFactor}}'{{/penaltyFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_raiseRampRate'>raiseRampRate: </label><div class='col-sm-8'><input id='{{id}}_raiseRampRate' class='form-control' type='text'{{#raiseRampRate}} value='{{raiseRampRate}}'{{/raiseRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedGrossMaxP'>ratedGrossMaxP: </label><div class='col-sm-8'><input id='{{id}}_ratedGrossMaxP' class='form-control' type='text'{{#ratedGrossMaxP}} value='{{ratedGrossMaxP}}'{{/ratedGrossMaxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedGrossMinP'>ratedGrossMinP: </label><div class='col-sm-8'><input id='{{id}}_ratedGrossMinP' class='form-control' type='text'{{#ratedGrossMinP}} value='{{ratedGrossMinP}}'{{/ratedGrossMinP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedNetMaxP'>ratedNetMaxP: </label><div class='col-sm-8'><input id='{{id}}_ratedNetMaxP' class='form-control' type='text'{{#ratedNetMaxP}} value='{{ratedNetMaxP}}'{{/ratedNetMaxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shortPF'>shortPF: </label><div class='col-sm-8'><input id='{{id}}_shortPF' class='form-control' type='text'{{#shortPF}} value='{{shortPF}}'{{/shortPF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startupCost'>startupCost: </label><div class='col-sm-8'><input id='{{id}}_startupCost' class='form-control' type='text'{{#startupCost}} value='{{startupCost}}'{{/startupCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startupTime'>startupTime: </label><div class='col-sm-8'><input id='{{id}}_startupTime' class='form-control' type='text'{{#startupTime}} value='{{startupTime}}'{{/startupTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tieLinePF'>tieLinePF: </label><div class='col-sm-8'><input id='{{id}}_tieLinePF' class='form-control' type='text'{{#tieLinePF}} value='{{tieLinePF}}'{{/tieLinePF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_variableCost'>variableCost: </label><div class='col-sm-8'><input id='{{id}}_variableCost' class='form-control' type='text'{{#variableCost}} value='{{variableCost}}'{{/variableCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_totalEfficiency'>totalEfficiency: </label><div class='col-sm-8'><input id='{{id}}_totalEfficiency' class='form-control' type='text'{{#totalEfficiency}} value='{{totalEfficiency}}'{{/totalEfficiency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GenUnitOpSchedule'>GenUnitOpSchedule: </label><div class='col-sm-8'><input id='{{id}}_GenUnitOpSchedule' class='form-control' type='text'{{#GenUnitOpSchedule}} value='{{GenUnitOpSchedule}}'{{/GenUnitOpSchedule}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "GeneratingUnit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_allocSpinResP").value; if ("" !== temp) obj["allocSpinResP"] = temp;
                temp = document.getElementById (id + "_autoCntrlMarginP").value; if ("" !== temp) obj["autoCntrlMarginP"] = temp;
                temp = document.getElementById (id + "_baseP").value; if ("" !== temp) obj["baseP"] = temp;
                temp = document.getElementById (id + "_controlDeadband").value; if ("" !== temp) obj["controlDeadband"] = temp;
                temp = document.getElementById (id + "_controlPulseHigh").value; if ("" !== temp) obj["controlPulseHigh"] = temp;
                temp = document.getElementById (id + "_controlPulseLow").value; if ("" !== temp) obj["controlPulseLow"] = temp;
                temp = document.getElementById (id + "_controlResponseRate").value; if ("" !== temp) obj["controlResponseRate"] = temp;
                temp = document.getElementById (id + "_efficiency").value; if ("" !== temp) obj["efficiency"] = temp;
                temp = GeneratorControlMode[document.getElementById (id + "_genControlMode").value]; if (temp) obj["genControlMode"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#GeneratorControlMode." + temp; else delete obj["genControlMode"];
                temp = GeneratorControlSource[document.getElementById (id + "_genControlSource").value]; if (temp) obj["genControlSource"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#GeneratorControlSource." + temp; else delete obj["genControlSource"];
                temp = document.getElementById (id + "_governorMPL").value; if ("" !== temp) obj["governorMPL"] = temp;
                temp = document.getElementById (id + "_governorSCD").value; if ("" !== temp) obj["governorSCD"] = temp;
                temp = document.getElementById (id + "_highControlLimit").value; if ("" !== temp) obj["highControlLimit"] = temp;
                temp = document.getElementById (id + "_initialP").value; if ("" !== temp) obj["initialP"] = temp;
                temp = document.getElementById (id + "_longPF").value; if ("" !== temp) obj["longPF"] = temp;
                temp = document.getElementById (id + "_lowControlLimit").value; if ("" !== temp) obj["lowControlLimit"] = temp;
                temp = document.getElementById (id + "_lowerRampRate").value; if ("" !== temp) obj["lowerRampRate"] = temp;
                temp = document.getElementById (id + "_maxEconomicP").value; if ("" !== temp) obj["maxEconomicP"] = temp;
                temp = document.getElementById (id + "_maximumAllowableSpinningReserve").value; if ("" !== temp) obj["maximumAllowableSpinningReserve"] = temp;
                temp = document.getElementById (id + "_maxOperatingP").value; if ("" !== temp) obj["maxOperatingP"] = temp;
                temp = document.getElementById (id + "_minEconomicP").value; if ("" !== temp) obj["minEconomicP"] = temp;
                temp = document.getElementById (id + "_minimumOffTime").value; if ("" !== temp) obj["minimumOffTime"] = temp;
                temp = document.getElementById (id + "_minOperatingP").value; if ("" !== temp) obj["minOperatingP"] = temp;
                temp = document.getElementById (id + "_modelDetail").value; if ("" !== temp) obj["modelDetail"] = temp;
                temp = document.getElementById (id + "_nominalP").value; if ("" !== temp) obj["nominalP"] = temp;
                temp = document.getElementById (id + "_normalPF").value; if ("" !== temp) obj["normalPF"] = temp;
                temp = document.getElementById (id + "_penaltyFactor").value; if ("" !== temp) obj["penaltyFactor"] = temp;
                temp = document.getElementById (id + "_raiseRampRate").value; if ("" !== temp) obj["raiseRampRate"] = temp;
                temp = document.getElementById (id + "_ratedGrossMaxP").value; if ("" !== temp) obj["ratedGrossMaxP"] = temp;
                temp = document.getElementById (id + "_ratedGrossMinP").value; if ("" !== temp) obj["ratedGrossMinP"] = temp;
                temp = document.getElementById (id + "_ratedNetMaxP").value; if ("" !== temp) obj["ratedNetMaxP"] = temp;
                temp = document.getElementById (id + "_shortPF").value; if ("" !== temp) obj["shortPF"] = temp;
                temp = document.getElementById (id + "_startupCost").value; if ("" !== temp) obj["startupCost"] = temp;
                temp = document.getElementById (id + "_startupTime").value; if ("" !== temp) obj["startupTime"] = temp;
                temp = document.getElementById (id + "_tieLinePF").value; if ("" !== temp) obj["tieLinePF"] = temp;
                temp = document.getElementById (id + "_variableCost").value; if ("" !== temp) obj["variableCost"] = temp;
                temp = document.getElementById (id + "_totalEfficiency").value; if ("" !== temp) obj["totalEfficiency"] = temp;
                temp = document.getElementById (id + "_GenUnitOpSchedule").value; if ("" !== temp) obj["GenUnitOpSchedule"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["GenUnitOpSchedule", "0..1", "1", "GenUnitOpSchedule", "GeneratingUnit"],
                            ["GrossToNetActivePowerCurves", "0..*", "1", "GrossToNetActivePowerCurve", "GeneratingUnit"],
                            ["RotatingMachine", "0..*", "0..1", "RotatingMachine", "GeneratingUnit"],
                            ["GenUnitOpCostCurves", "0..*", "1", "GenUnitOpCostCurve", "GeneratingUnit"],
                            ["ControlAreaGeneratingUnit", "0..*", "1", "ControlAreaGeneratingUnit", "GeneratingUnit"]
                        ]
                    )
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
                let bucket = cim_data.FuelAllocationSchedule;
                if (null == bucket)
                   cim_data.FuelAllocationSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FuelAllocationSchedule[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "FuelAllocationSchedule";
                base.parse_element (/<cim:FuelAllocationSchedule.fuelAllocationEndDate>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelAllocationEndDate>/g, obj, "fuelAllocationEndDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:FuelAllocationSchedule.fuelAllocationStartDate>([\s\S]*?)<\/cim:FuelAllocationSchedule.fuelAllocationStartDate>/g, obj, "fuelAllocationStartDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:FuelAllocationSchedule.fuelType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "fuelType", sub, context);
                base.parse_element (/<cim:FuelAllocationSchedule.maxFuelAllocation>([\s\S]*?)<\/cim:FuelAllocationSchedule.maxFuelAllocation>/g, obj, "maxFuelAllocation", base.to_float, sub, context);
                base.parse_element (/<cim:FuelAllocationSchedule.minFuelAllocation>([\s\S]*?)<\/cim:FuelAllocationSchedule.minFuelAllocation>/g, obj, "minFuelAllocation", base.to_float, sub, context);
                base.parse_attribute (/<cim:FuelAllocationSchedule.FossilFuel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FossilFuel", sub, context);
                base.parse_attribute (/<cim:FuelAllocationSchedule.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                let bucket = context.parsed.FuelAllocationSchedule;
                if (null == bucket)
                   context.parsed.FuelAllocationSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "FuelAllocationSchedule", "fuelAllocationEndDate", "fuelAllocationEndDate",  base.from_datetime, fields);
                base.export_element (obj, "FuelAllocationSchedule", "fuelAllocationStartDate", "fuelAllocationStartDate",  base.from_datetime, fields);
                base.export_attribute (obj, "FuelAllocationSchedule", "fuelType", "fuelType", fields);
                base.export_element (obj, "FuelAllocationSchedule", "maxFuelAllocation", "maxFuelAllocation",  base.from_float, fields);
                base.export_element (obj, "FuelAllocationSchedule", "minFuelAllocation", "minFuelAllocation",  base.from_float, fields);
                base.export_attribute (obj, "FuelAllocationSchedule", "FossilFuel", "FossilFuel", fields);
                base.export_attribute (obj, "FuelAllocationSchedule", "ThermalGeneratingUnit", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FuelAllocationSchedule_collapse" aria-expanded="true" aria-controls="FuelAllocationSchedule_collapse" style="margin-left: 10px;">FuelAllocationSchedule</a></legend>
                    <div id="FuelAllocationSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#fuelAllocationEndDate}}<div><b>fuelAllocationEndDate</b>: {{fuelAllocationEndDate}}</div>{{/fuelAllocationEndDate}}
                    {{#fuelAllocationStartDate}}<div><b>fuelAllocationStartDate</b>: {{fuelAllocationStartDate}}</div>{{/fuelAllocationStartDate}}
                    {{#fuelType}}<div><b>fuelType</b>: {{fuelType}}</div>{{/fuelType}}
                    {{#maxFuelAllocation}}<div><b>maxFuelAllocation</b>: {{maxFuelAllocation}}</div>{{/maxFuelAllocation}}
                    {{#minFuelAllocation}}<div><b>minFuelAllocation</b>: {{minFuelAllocation}}</div>{{/minFuelAllocation}}
                    {{#FossilFuel}}<div><b>FossilFuel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{FossilFuel}}");}); return false;'>{{FossilFuel}}</a></div>{{/FossilFuel}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ThermalGeneratingUnit}}");}); return false;'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["fuelTypeFuelType"] = [{ id: '', selected: (!obj["fuelType"])}]; for (let property in FuelType) obj["fuelTypeFuelType"].push ({ id: property, selected: obj["fuelType"] && obj["fuelType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["fuelTypeFuelType"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FuelAllocationSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_FuelAllocationSchedule_collapse" style="margin-left: 10px;">FuelAllocationSchedule</a></legend>
                    <div id="{{id}}_FuelAllocationSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelAllocationEndDate'>fuelAllocationEndDate: </label><div class='col-sm-8'><input id='{{id}}_fuelAllocationEndDate' class='form-control' type='text'{{#fuelAllocationEndDate}} value='{{fuelAllocationEndDate}}'{{/fuelAllocationEndDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelAllocationStartDate'>fuelAllocationStartDate: </label><div class='col-sm-8'><input id='{{id}}_fuelAllocationStartDate' class='form-control' type='text'{{#fuelAllocationStartDate}} value='{{fuelAllocationStartDate}}'{{/fuelAllocationStartDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fuelType'>fuelType: </label><div class='col-sm-8'><select id='{{id}}_fuelType' class='form-control custom-select'>{{#fuelTypeFuelType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/fuelTypeFuelType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxFuelAllocation'>maxFuelAllocation: </label><div class='col-sm-8'><input id='{{id}}_maxFuelAllocation' class='form-control' type='text'{{#maxFuelAllocation}} value='{{maxFuelAllocation}}'{{/maxFuelAllocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minFuelAllocation'>minFuelAllocation: </label><div class='col-sm-8'><input id='{{id}}_minFuelAllocation' class='form-control' type='text'{{#minFuelAllocation}} value='{{minFuelAllocation}}'{{/minFuelAllocation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FossilFuel'>FossilFuel: </label><div class='col-sm-8'><input id='{{id}}_FossilFuel' class='form-control' type='text'{{#FossilFuel}} value='{{FossilFuel}}'{{/FossilFuel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FuelAllocationSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_fuelAllocationEndDate").value; if ("" !== temp) obj["fuelAllocationEndDate"] = temp;
                temp = document.getElementById (id + "_fuelAllocationStartDate").value; if ("" !== temp) obj["fuelAllocationStartDate"] = temp;
                temp = FuelType[document.getElementById (id + "_fuelType").value]; if (temp) obj["fuelType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#FuelType." + temp; else delete obj["fuelType"];
                temp = document.getElementById (id + "_maxFuelAllocation").value; if ("" !== temp) obj["maxFuelAllocation"] = temp;
                temp = document.getElementById (id + "_minFuelAllocation").value; if ("" !== temp) obj["minFuelAllocation"] = temp;
                temp = document.getElementById (id + "_FossilFuel").value; if ("" !== temp) obj["FossilFuel"] = temp;
                temp = document.getElementById (id + "_ThermalGeneratingUnit").value; if ("" !== temp) obj["ThermalGeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["FossilFuel", "1", "0..*", "FossilFuel", "FuelAllocationSchedules"],
                            ["ThermalGeneratingUnit", "1", "0..*", "ThermalGeneratingUnit", "FuelAllocationSchedules"]
                        ]
                    )
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
                let bucket = cim_data.TargetLevelSchedule;
                if (null == bucket)
                   cim_data.TargetLevelSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TargetLevelSchedule[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "TargetLevelSchedule";
                base.parse_element (/<cim:TargetLevelSchedule.highLevelLimit>([\s\S]*?)<\/cim:TargetLevelSchedule.highLevelLimit>/g, obj, "highLevelLimit", base.to_string, sub, context);
                base.parse_element (/<cim:TargetLevelSchedule.lowLevelLimit>([\s\S]*?)<\/cim:TargetLevelSchedule.lowLevelLimit>/g, obj, "lowLevelLimit", base.to_string, sub, context);
                base.parse_attribute (/<cim:TargetLevelSchedule.Reservoir\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Reservoir", sub, context);
                let bucket = context.parsed.TargetLevelSchedule;
                if (null == bucket)
                   context.parsed.TargetLevelSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "TargetLevelSchedule", "highLevelLimit", "highLevelLimit",  base.from_string, fields);
                base.export_element (obj, "TargetLevelSchedule", "lowLevelLimit", "lowLevelLimit",  base.from_string, fields);
                base.export_attribute (obj, "TargetLevelSchedule", "Reservoir", "Reservoir", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TargetLevelSchedule_collapse" aria-expanded="true" aria-controls="TargetLevelSchedule_collapse" style="margin-left: 10px;">TargetLevelSchedule</a></legend>
                    <div id="TargetLevelSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#highLevelLimit}}<div><b>highLevelLimit</b>: {{highLevelLimit}}</div>{{/highLevelLimit}}
                    {{#lowLevelLimit}}<div><b>lowLevelLimit</b>: {{lowLevelLimit}}</div>{{/lowLevelLimit}}
                    {{#Reservoir}}<div><b>Reservoir</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Reservoir}}");}); return false;'>{{Reservoir}}</a></div>{{/Reservoir}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TargetLevelSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_TargetLevelSchedule_collapse" style="margin-left: 10px;">TargetLevelSchedule</a></legend>
                    <div id="{{id}}_TargetLevelSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highLevelLimit'>highLevelLimit: </label><div class='col-sm-8'><input id='{{id}}_highLevelLimit' class='form-control' type='text'{{#highLevelLimit}} value='{{highLevelLimit}}'{{/highLevelLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowLevelLimit'>lowLevelLimit: </label><div class='col-sm-8'><input id='{{id}}_lowLevelLimit' class='form-control' type='text'{{#lowLevelLimit}} value='{{lowLevelLimit}}'{{/lowLevelLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Reservoir'>Reservoir: </label><div class='col-sm-8'><input id='{{id}}_Reservoir' class='form-control' type='text'{{#Reservoir}} value='{{Reservoir}}'{{/Reservoir}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TargetLevelSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_highLevelLimit").value; if ("" !== temp) obj["highLevelLimit"] = temp;
                temp = document.getElementById (id + "_lowLevelLimit").value; if ("" !== temp) obj["lowLevelLimit"] = temp;
                temp = document.getElementById (id + "_Reservoir").value; if ("" !== temp) obj["Reservoir"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Reservoir", "1", "0..1", "Reservoir", "TargetLevelSchedule"]
                        ]
                    )
                );
            }
        }

        /**
         * The hydro pump's Operator-approved current operating schedule (or plan), typically produced with the aid of unit commitment type analyses.
         *
         * The unit's operating schedule status is typically given as: (0=unavailable) (1=available to startup or shutdown)  (2=must pump).
         *
         */
        class HydroPumpOpSchedule extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.HydroPumpOpSchedule;
                if (null == bucket)
                   cim_data.HydroPumpOpSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HydroPumpOpSchedule[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "HydroPumpOpSchedule";
                base.parse_attribute (/<cim:HydroPumpOpSchedule.HydroPump\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HydroPump", sub, context);
                let bucket = context.parsed.HydroPumpOpSchedule;
                if (null == bucket)
                   context.parsed.HydroPumpOpSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "HydroPumpOpSchedule", "HydroPump", "HydroPump", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HydroPumpOpSchedule_collapse" aria-expanded="true" aria-controls="HydroPumpOpSchedule_collapse" style="margin-left: 10px;">HydroPumpOpSchedule</a></legend>
                    <div id="HydroPumpOpSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#HydroPump}}<div><b>HydroPump</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HydroPump}}");}); return false;'>{{HydroPump}}</a></div>{{/HydroPump}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HydroPumpOpSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_HydroPumpOpSchedule_collapse" style="margin-left: 10px;">HydroPumpOpSchedule</a></legend>
                    <div id="{{id}}_HydroPumpOpSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HydroPump'>HydroPump: </label><div class='col-sm-8'><input id='{{id}}_HydroPump' class='form-control' type='text'{{#HydroPump}} value='{{HydroPump}}'{{/HydroPump}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "HydroPumpOpSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_HydroPump").value; if ("" !== temp) obj["HydroPump"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["HydroPump", "1", "0..1", "HydroPump", "HydroPumpOpSchedule"]
                        ]
                    )
                );
            }
        }

        /**
         * Relationship between the generating unit's gross active power output on the X-axis (measured at the terminals of the machine(s)) and the generating unit's net active power output on the Y-axis (based on utility-defined measurements at the power station).
         *
         * Station service loads, when modelled, should be treated as non-conforming bus loads. There may be more than one curve, depending on the auxiliary equipment that is in service.
         *
         */
        class GrossToNetActivePowerCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.GrossToNetActivePowerCurve;
                if (null == bucket)
                   cim_data.GrossToNetActivePowerCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GrossToNetActivePowerCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "GrossToNetActivePowerCurve";
                base.parse_attribute (/<cim:GrossToNetActivePowerCurve.GeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
                let bucket = context.parsed.GrossToNetActivePowerCurve;
                if (null == bucket)
                   context.parsed.GrossToNetActivePowerCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "GrossToNetActivePowerCurve", "GeneratingUnit", "GeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GrossToNetActivePowerCurve_collapse" aria-expanded="true" aria-controls="GrossToNetActivePowerCurve_collapse" style="margin-left: 10px;">GrossToNetActivePowerCurve</a></legend>
                    <div id="GrossToNetActivePowerCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GeneratingUnit}}");}); return false;'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GrossToNetActivePowerCurve_collapse" aria-expanded="true" aria-controls="{{id}}_GrossToNetActivePowerCurve_collapse" style="margin-left: 10px;">GrossToNetActivePowerCurve</a></legend>
                    <div id="{{id}}_GrossToNetActivePowerCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GeneratingUnit'>GeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_GeneratingUnit' class='form-control' type='text'{{#GeneratingUnit}} value='{{GeneratingUnit}}'{{/GeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "GrossToNetActivePowerCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_GeneratingUnit").value; if ("" !== temp) obj["GeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["GeneratingUnit", "1", "0..*", "GeneratingUnit", "GrossToNetActivePowerCurves"]
                        ]
                    )
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
                let bucket = cim_data.CogenerationPlant;
                if (null == bucket)
                   cim_data.CogenerationPlant = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CogenerationPlant[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "CogenerationPlant";
                base.parse_element (/<cim:CogenerationPlant.cogenHPSendoutRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenHPSendoutRating>/g, obj, "cogenHPSendoutRating", base.to_float, sub, context);
                base.parse_element (/<cim:CogenerationPlant.cogenHPSteamRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenHPSteamRating>/g, obj, "cogenHPSteamRating", base.to_float, sub, context);
                base.parse_element (/<cim:CogenerationPlant.cogenLPSendoutRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenLPSendoutRating>/g, obj, "cogenLPSendoutRating", base.to_float, sub, context);
                base.parse_element (/<cim:CogenerationPlant.cogenLPSteamRating>([\s\S]*?)<\/cim:CogenerationPlant.cogenLPSteamRating>/g, obj, "cogenLPSteamRating", base.to_float, sub, context);
                base.parse_element (/<cim:CogenerationPlant.ratedP>([\s\S]*?)<\/cim:CogenerationPlant.ratedP>/g, obj, "ratedP", base.to_string, sub, context);
                base.parse_attributes (/<cim:CogenerationPlant.ThermalGeneratingUnits\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnits", sub, context);
                base.parse_attribute (/<cim:CogenerationPlant.SteamSendoutSchedule\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SteamSendoutSchedule", sub, context);
                let bucket = context.parsed.CogenerationPlant;
                if (null == bucket)
                   context.parsed.CogenerationPlant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "CogenerationPlant", "cogenHPSendoutRating", "cogenHPSendoutRating",  base.from_float, fields);
                base.export_element (obj, "CogenerationPlant", "cogenHPSteamRating", "cogenHPSteamRating",  base.from_float, fields);
                base.export_element (obj, "CogenerationPlant", "cogenLPSendoutRating", "cogenLPSendoutRating",  base.from_float, fields);
                base.export_element (obj, "CogenerationPlant", "cogenLPSteamRating", "cogenLPSteamRating",  base.from_float, fields);
                base.export_element (obj, "CogenerationPlant", "ratedP", "ratedP",  base.from_string, fields);
                base.export_attributes (obj, "CogenerationPlant", "ThermalGeneratingUnits", "ThermalGeneratingUnits", fields);
                base.export_attribute (obj, "CogenerationPlant", "SteamSendoutSchedule", "SteamSendoutSchedule", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CogenerationPlant_collapse" aria-expanded="true" aria-controls="CogenerationPlant_collapse" style="margin-left: 10px;">CogenerationPlant</a></legend>
                    <div id="CogenerationPlant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#cogenHPSendoutRating}}<div><b>cogenHPSendoutRating</b>: {{cogenHPSendoutRating}}</div>{{/cogenHPSendoutRating}}
                    {{#cogenHPSteamRating}}<div><b>cogenHPSteamRating</b>: {{cogenHPSteamRating}}</div>{{/cogenHPSteamRating}}
                    {{#cogenLPSendoutRating}}<div><b>cogenLPSendoutRating</b>: {{cogenLPSendoutRating}}</div>{{/cogenLPSendoutRating}}
                    {{#cogenLPSteamRating}}<div><b>cogenLPSteamRating</b>: {{cogenLPSteamRating}}</div>{{/cogenLPSteamRating}}
                    {{#ratedP}}<div><b>ratedP</b>: {{ratedP}}</div>{{/ratedP}}
                    {{#ThermalGeneratingUnits}}<div><b>ThermalGeneratingUnits</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ThermalGeneratingUnits}}
                    {{#SteamSendoutSchedule}}<div><b>SteamSendoutSchedule</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SteamSendoutSchedule}}");}); return false;'>{{SteamSendoutSchedule}}</a></div>{{/SteamSendoutSchedule}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ThermalGeneratingUnits"]) obj["ThermalGeneratingUnits_string"] = obj["ThermalGeneratingUnits"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ThermalGeneratingUnits_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CogenerationPlant_collapse" aria-expanded="true" aria-controls="{{id}}_CogenerationPlant_collapse" style="margin-left: 10px;">CogenerationPlant</a></legend>
                    <div id="{{id}}_CogenerationPlant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cogenHPSendoutRating'>cogenHPSendoutRating: </label><div class='col-sm-8'><input id='{{id}}_cogenHPSendoutRating' class='form-control' type='text'{{#cogenHPSendoutRating}} value='{{cogenHPSendoutRating}}'{{/cogenHPSendoutRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cogenHPSteamRating'>cogenHPSteamRating: </label><div class='col-sm-8'><input id='{{id}}_cogenHPSteamRating' class='form-control' type='text'{{#cogenHPSteamRating}} value='{{cogenHPSteamRating}}'{{/cogenHPSteamRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cogenLPSendoutRating'>cogenLPSendoutRating: </label><div class='col-sm-8'><input id='{{id}}_cogenLPSendoutRating' class='form-control' type='text'{{#cogenLPSendoutRating}} value='{{cogenLPSendoutRating}}'{{/cogenLPSendoutRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cogenLPSteamRating'>cogenLPSteamRating: </label><div class='col-sm-8'><input id='{{id}}_cogenLPSteamRating' class='form-control' type='text'{{#cogenLPSteamRating}} value='{{cogenLPSteamRating}}'{{/cogenLPSteamRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedP'>ratedP: </label><div class='col-sm-8'><input id='{{id}}_ratedP' class='form-control' type='text'{{#ratedP}} value='{{ratedP}}'{{/ratedP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SteamSendoutSchedule'>SteamSendoutSchedule: </label><div class='col-sm-8'><input id='{{id}}_SteamSendoutSchedule' class='form-control' type='text'{{#SteamSendoutSchedule}} value='{{SteamSendoutSchedule}}'{{/SteamSendoutSchedule}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CogenerationPlant" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cogenHPSendoutRating").value; if ("" !== temp) obj["cogenHPSendoutRating"] = temp;
                temp = document.getElementById (id + "_cogenHPSteamRating").value; if ("" !== temp) obj["cogenHPSteamRating"] = temp;
                temp = document.getElementById (id + "_cogenLPSendoutRating").value; if ("" !== temp) obj["cogenLPSendoutRating"] = temp;
                temp = document.getElementById (id + "_cogenLPSteamRating").value; if ("" !== temp) obj["cogenLPSteamRating"] = temp;
                temp = document.getElementById (id + "_ratedP").value; if ("" !== temp) obj["ratedP"] = temp;
                temp = document.getElementById (id + "_SteamSendoutSchedule").value; if ("" !== temp) obj["SteamSendoutSchedule"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ThermalGeneratingUnits", "0..*", "0..1", "ThermalGeneratingUnit", "CogenerationPlant"],
                            ["SteamSendoutSchedule", "1", "1", "SteamSendoutSchedule", "CogenerationPlant"]
                        ]
                    )
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
                let bucket = cim_data.IncrementalHeatRateCurve;
                if (null == bucket)
                   cim_data.IncrementalHeatRateCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IncrementalHeatRateCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "IncrementalHeatRateCurve";
                base.parse_element (/<cim:IncrementalHeatRateCurve.isNetGrossP>([\s\S]*?)<\/cim:IncrementalHeatRateCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:IncrementalHeatRateCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                let bucket = context.parsed.IncrementalHeatRateCurve;
                if (null == bucket)
                   context.parsed.IncrementalHeatRateCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "IncrementalHeatRateCurve", "isNetGrossP", "isNetGrossP",  base.from_boolean, fields);
                base.export_attribute (obj, "IncrementalHeatRateCurve", "ThermalGeneratingUnit", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IncrementalHeatRateCurve_collapse" aria-expanded="true" aria-controls="IncrementalHeatRateCurve_collapse" style="margin-left: 10px;">IncrementalHeatRateCurve</a></legend>
                    <div id="IncrementalHeatRateCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ThermalGeneratingUnit}}");}); return false;'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IncrementalHeatRateCurve_collapse" aria-expanded="true" aria-controls="{{id}}_IncrementalHeatRateCurve_collapse" style="margin-left: 10px;">IncrementalHeatRateCurve</a></legend>
                    <div id="{{id}}_IncrementalHeatRateCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isNetGrossP'>isNetGrossP: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isNetGrossP' class='form-check-input' type='checkbox'{{#isNetGrossP}} checked{{/isNetGrossP}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "IncrementalHeatRateCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isNetGrossP").checked; if (temp) obj["isNetGrossP"] = true;
                temp = document.getElementById (id + "_ThermalGeneratingUnit").value; if ("" !== temp) obj["ThermalGeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ThermalGeneratingUnit", "1", "0..1", "ThermalGeneratingUnit", "IncrementalHeatRateCurve"]
                        ]
                    )
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
                let bucket = cim_data.GenUnitOpSchedule;
                if (null == bucket)
                   cim_data.GenUnitOpSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GenUnitOpSchedule[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "GenUnitOpSchedule";
                base.parse_attribute (/<cim:GenUnitOpSchedule.GeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
                let bucket = context.parsed.GenUnitOpSchedule;
                if (null == bucket)
                   context.parsed.GenUnitOpSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "GenUnitOpSchedule", "GeneratingUnit", "GeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GenUnitOpSchedule_collapse" aria-expanded="true" aria-controls="GenUnitOpSchedule_collapse" style="margin-left: 10px;">GenUnitOpSchedule</a></legend>
                    <div id="GenUnitOpSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{GeneratingUnit}}");}); return false;'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GenUnitOpSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_GenUnitOpSchedule_collapse" style="margin-left: 10px;">GenUnitOpSchedule</a></legend>
                    <div id="{{id}}_GenUnitOpSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GeneratingUnit'>GeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_GeneratingUnit' class='form-control' type='text'{{#GeneratingUnit}} value='{{GeneratingUnit}}'{{/GeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "GenUnitOpSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_GeneratingUnit").value; if ("" !== temp) obj["GeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["GeneratingUnit", "1", "0..1", "GeneratingUnit", "GenUnitOpSchedule"]
                        ]
                    )
                );
            }
        }

        /**
         * Relationship between unit efficiency as percentage and unit output active power for a given net head in meters.
         *
         * The relationship between efficiency, discharge, head, and power output is expressed as follows:   E =KP/HQ
         * where:  E is the efficiency, as a percentage; P is the active power; H is the height; Q is the discharge, volume/time unit; K is a constant.
         * For example, a curve instance for a given net head could show efficiency (Y-axis) versus active power output (X-axis) or versus discharge on the X-axis.
         *
         */
        class HydroGeneratingEfficiencyCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.HydroGeneratingEfficiencyCurve;
                if (null == bucket)
                   cim_data.HydroGeneratingEfficiencyCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HydroGeneratingEfficiencyCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "HydroGeneratingEfficiencyCurve";
                base.parse_attribute (/<cim:HydroGeneratingEfficiencyCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnit", sub, context);
                let bucket = context.parsed.HydroGeneratingEfficiencyCurve;
                if (null == bucket)
                   context.parsed.HydroGeneratingEfficiencyCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "HydroGeneratingEfficiencyCurve", "HydroGeneratingUnit", "HydroGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HydroGeneratingEfficiencyCurve_collapse" aria-expanded="true" aria-controls="HydroGeneratingEfficiencyCurve_collapse" style="margin-left: 10px;">HydroGeneratingEfficiencyCurve</a></legend>
                    <div id="HydroGeneratingEfficiencyCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#HydroGeneratingUnit}}<div><b>HydroGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HydroGeneratingUnit}}");}); return false;'>{{HydroGeneratingUnit}}</a></div>{{/HydroGeneratingUnit}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HydroGeneratingEfficiencyCurve_collapse" aria-expanded="true" aria-controls="{{id}}_HydroGeneratingEfficiencyCurve_collapse" style="margin-left: 10px;">HydroGeneratingEfficiencyCurve</a></legend>
                    <div id="{{id}}_HydroGeneratingEfficiencyCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HydroGeneratingUnit'>HydroGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_HydroGeneratingUnit' class='form-control' type='text'{{#HydroGeneratingUnit}} value='{{HydroGeneratingUnit}}'{{/HydroGeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "HydroGeneratingEfficiencyCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_HydroGeneratingUnit").value; if ("" !== temp) obj["HydroGeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["HydroGeneratingUnit", "1", "0..*", "HydroGeneratingUnit", "HydroGeneratingEfficiencyCurves"]
                        ]
                    )
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
                let bucket = cim_data.EmissionCurve;
                if (null == bucket)
                   cim_data.EmissionCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EmissionCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "EmissionCurve";
                base.parse_element (/<cim:EmissionCurve.emissionContent>([\s\S]*?)<\/cim:EmissionCurve.emissionContent>/g, obj, "emissionContent", base.to_string, sub, context);
                base.parse_attribute (/<cim:EmissionCurve.emissionType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "emissionType", sub, context);
                base.parse_element (/<cim:EmissionCurve.isNetGrossP>([\s\S]*?)<\/cim:EmissionCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:EmissionCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                let bucket = context.parsed.EmissionCurve;
                if (null == bucket)
                   context.parsed.EmissionCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "EmissionCurve", "emissionContent", "emissionContent",  base.from_string, fields);
                base.export_attribute (obj, "EmissionCurve", "emissionType", "emissionType", fields);
                base.export_element (obj, "EmissionCurve", "isNetGrossP", "isNetGrossP",  base.from_boolean, fields);
                base.export_attribute (obj, "EmissionCurve", "ThermalGeneratingUnit", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EmissionCurve_collapse" aria-expanded="true" aria-controls="EmissionCurve_collapse" style="margin-left: 10px;">EmissionCurve</a></legend>
                    <div id="EmissionCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#emissionContent}}<div><b>emissionContent</b>: {{emissionContent}}</div>{{/emissionContent}}
                    {{#emissionType}}<div><b>emissionType</b>: {{emissionType}}</div>{{/emissionType}}
                    {{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ThermalGeneratingUnit}}");}); return false;'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["emissionTypeEmissionType"] = [{ id: '', selected: (!obj["emissionType"])}]; for (let property in EmissionType) obj["emissionTypeEmissionType"].push ({ id: property, selected: obj["emissionType"] && obj["emissionType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["emissionTypeEmissionType"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EmissionCurve_collapse" aria-expanded="true" aria-controls="{{id}}_EmissionCurve_collapse" style="margin-left: 10px;">EmissionCurve</a></legend>
                    <div id="{{id}}_EmissionCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emissionContent'>emissionContent: </label><div class='col-sm-8'><input id='{{id}}_emissionContent' class='form-control' type='text'{{#emissionContent}} value='{{emissionContent}}'{{/emissionContent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emissionType'>emissionType: </label><div class='col-sm-8'><select id='{{id}}_emissionType' class='form-control custom-select'>{{#emissionTypeEmissionType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/emissionTypeEmissionType}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isNetGrossP'>isNetGrossP: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isNetGrossP' class='form-check-input' type='checkbox'{{#isNetGrossP}} checked{{/isNetGrossP}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EmissionCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_emissionContent").value; if ("" !== temp) obj["emissionContent"] = temp;
                temp = EmissionType[document.getElementById (id + "_emissionType").value]; if (temp) obj["emissionType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#EmissionType." + temp; else delete obj["emissionType"];
                temp = document.getElementById (id + "_isNetGrossP").checked; if (temp) obj["isNetGrossP"] = true;
                temp = document.getElementById (id + "_ThermalGeneratingUnit").value; if ("" !== temp) obj["ThermalGeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ThermalGeneratingUnit", "1", "0..*", "ThermalGeneratingUnit", "EmissionCurves"]
                        ]
                    )
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
                let bucket = cim_data.EmissionAccount;
                if (null == bucket)
                   cim_data.EmissionAccount = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EmissionAccount[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "EmissionAccount";
                base.parse_attribute (/<cim:EmissionAccount.emissionType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "emissionType", sub, context);
                base.parse_attribute (/<cim:EmissionAccount.emissionValueSource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "emissionValueSource", sub, context);
                base.parse_attribute (/<cim:EmissionAccount.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                let bucket = context.parsed.EmissionAccount;
                if (null == bucket)
                   context.parsed.EmissionAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EmissionAccount", "emissionType", "emissionType", fields);
                base.export_attribute (obj, "EmissionAccount", "emissionValueSource", "emissionValueSource", fields);
                base.export_attribute (obj, "EmissionAccount", "ThermalGeneratingUnit", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EmissionAccount_collapse" aria-expanded="true" aria-controls="EmissionAccount_collapse" style="margin-left: 10px;">EmissionAccount</a></legend>
                    <div id="EmissionAccount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#emissionType}}<div><b>emissionType</b>: {{emissionType}}</div>{{/emissionType}}
                    {{#emissionValueSource}}<div><b>emissionValueSource</b>: {{emissionValueSource}}</div>{{/emissionValueSource}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ThermalGeneratingUnit}}");}); return false;'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["emissionTypeEmissionType"] = [{ id: '', selected: (!obj["emissionType"])}]; for (let property in EmissionType) obj["emissionTypeEmissionType"].push ({ id: property, selected: obj["emissionType"] && obj["emissionType"].endsWith ('.' + property)});
                obj["emissionValueSourceEmissionValueSource"] = [{ id: '', selected: (!obj["emissionValueSource"])}]; for (let property in EmissionValueSource) obj["emissionValueSourceEmissionValueSource"].push ({ id: property, selected: obj["emissionValueSource"] && obj["emissionValueSource"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["emissionTypeEmissionType"];
                delete obj["emissionValueSourceEmissionValueSource"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EmissionAccount_collapse" aria-expanded="true" aria-controls="{{id}}_EmissionAccount_collapse" style="margin-left: 10px;">EmissionAccount</a></legend>
                    <div id="{{id}}_EmissionAccount_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emissionType'>emissionType: </label><div class='col-sm-8'><select id='{{id}}_emissionType' class='form-control custom-select'>{{#emissionTypeEmissionType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/emissionTypeEmissionType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emissionValueSource'>emissionValueSource: </label><div class='col-sm-8'><select id='{{id}}_emissionValueSource' class='form-control custom-select'>{{#emissionValueSourceEmissionValueSource}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/emissionValueSourceEmissionValueSource}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EmissionAccount" };
                super.submit (id, obj);
                temp = EmissionType[document.getElementById (id + "_emissionType").value]; if (temp) obj["emissionType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#EmissionType." + temp; else delete obj["emissionType"];
                temp = EmissionValueSource[document.getElementById (id + "_emissionValueSource").value]; if (temp) obj["emissionValueSource"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#EmissionValueSource." + temp; else delete obj["emissionValueSource"];
                temp = document.getElementById (id + "_ThermalGeneratingUnit").value; if ("" !== temp) obj["ThermalGeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ThermalGeneratingUnit", "1", "0..*", "ThermalGeneratingUnit", "EmmissionAccounts"]
                        ]
                    )
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
                let bucket = cim_data.CAESPlant;
                if (null == bucket)
                   cim_data.CAESPlant = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CAESPlant[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "CAESPlant";
                base.parse_element (/<cim:CAESPlant.energyStorageCapacity>([\s\S]*?)<\/cim:CAESPlant.energyStorageCapacity>/g, obj, "energyStorageCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:CAESPlant.ratedCapacityP>([\s\S]*?)<\/cim:CAESPlant.ratedCapacityP>/g, obj, "ratedCapacityP", base.to_string, sub, context);
                base.parse_attribute (/<cim:CAESPlant.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                base.parse_attribute (/<cim:CAESPlant.AirCompressor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AirCompressor", sub, context);
                let bucket = context.parsed.CAESPlant;
                if (null == bucket)
                   context.parsed.CAESPlant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "CAESPlant", "energyStorageCapacity", "energyStorageCapacity",  base.from_string, fields);
                base.export_element (obj, "CAESPlant", "ratedCapacityP", "ratedCapacityP",  base.from_string, fields);
                base.export_attribute (obj, "CAESPlant", "ThermalGeneratingUnit", "ThermalGeneratingUnit", fields);
                base.export_attribute (obj, "CAESPlant", "AirCompressor", "AirCompressor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CAESPlant_collapse" aria-expanded="true" aria-controls="CAESPlant_collapse" style="margin-left: 10px;">CAESPlant</a></legend>
                    <div id="CAESPlant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#energyStorageCapacity}}<div><b>energyStorageCapacity</b>: {{energyStorageCapacity}}</div>{{/energyStorageCapacity}}
                    {{#ratedCapacityP}}<div><b>ratedCapacityP</b>: {{ratedCapacityP}}</div>{{/ratedCapacityP}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ThermalGeneratingUnit}}");}); return false;'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
                    {{#AirCompressor}}<div><b>AirCompressor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AirCompressor}}");}); return false;'>{{AirCompressor}}</a></div>{{/AirCompressor}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CAESPlant_collapse" aria-expanded="true" aria-controls="{{id}}_CAESPlant_collapse" style="margin-left: 10px;">CAESPlant</a></legend>
                    <div id="{{id}}_CAESPlant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyStorageCapacity'>energyStorageCapacity: </label><div class='col-sm-8'><input id='{{id}}_energyStorageCapacity' class='form-control' type='text'{{#energyStorageCapacity}} value='{{energyStorageCapacity}}'{{/energyStorageCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedCapacityP'>ratedCapacityP: </label><div class='col-sm-8'><input id='{{id}}_ratedCapacityP' class='form-control' type='text'{{#ratedCapacityP}} value='{{ratedCapacityP}}'{{/ratedCapacityP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AirCompressor'>AirCompressor: </label><div class='col-sm-8'><input id='{{id}}_AirCompressor' class='form-control' type='text'{{#AirCompressor}} value='{{AirCompressor}}'{{/AirCompressor}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CAESPlant" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_energyStorageCapacity").value; if ("" !== temp) obj["energyStorageCapacity"] = temp;
                temp = document.getElementById (id + "_ratedCapacityP").value; if ("" !== temp) obj["ratedCapacityP"] = temp;
                temp = document.getElementById (id + "_ThermalGeneratingUnit").value; if ("" !== temp) obj["ThermalGeneratingUnit"] = temp;
                temp = document.getElementById (id + "_AirCompressor").value; if ("" !== temp) obj["AirCompressor"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ThermalGeneratingUnit", "0..1", "0..1", "ThermalGeneratingUnit", "CAESPlant"],
                            ["AirCompressor", "1", "1", "AirCompressor", "CAESPlant"]
                        ]
                    )
                );
            }
        }

        /**
         * Relationship between tailbay head loss height (Y-axis) and the total discharge into the power station's tailbay volume per time unit (X-axis) .
         *
         * There could be more than one curve depending on the level of the tailbay reservoir or river level.
         *
         */
        class TailbayLossCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TailbayLossCurve;
                if (null == bucket)
                   cim_data.TailbayLossCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TailbayLossCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "TailbayLossCurve";
                base.parse_attribute (/<cim:TailbayLossCurve.HydroGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingUnit", sub, context);
                let bucket = context.parsed.TailbayLossCurve;
                if (null == bucket)
                   context.parsed.TailbayLossCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TailbayLossCurve", "HydroGeneratingUnit", "HydroGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TailbayLossCurve_collapse" aria-expanded="true" aria-controls="TailbayLossCurve_collapse" style="margin-left: 10px;">TailbayLossCurve</a></legend>
                    <div id="TailbayLossCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#HydroGeneratingUnit}}<div><b>HydroGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HydroGeneratingUnit}}");}); return false;'>{{HydroGeneratingUnit}}</a></div>{{/HydroGeneratingUnit}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TailbayLossCurve_collapse" aria-expanded="true" aria-controls="{{id}}_TailbayLossCurve_collapse" style="margin-left: 10px;">TailbayLossCurve</a></legend>
                    <div id="{{id}}_TailbayLossCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HydroGeneratingUnit'>HydroGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_HydroGeneratingUnit' class='form-control' type='text'{{#HydroGeneratingUnit}} value='{{HydroGeneratingUnit}}'{{/HydroGeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TailbayLossCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_HydroGeneratingUnit").value; if ("" !== temp) obj["HydroGeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["HydroGeneratingUnit", "1", "0..*", "HydroGeneratingUnit", "TailbayLossCurve"]
                        ]
                    )
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
                let bucket = cim_data.StartMainFuelCurve;
                if (null == bucket)
                   cim_data.StartMainFuelCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StartMainFuelCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "StartMainFuelCurve";
                base.parse_attribute (/<cim:StartMainFuelCurve.mainFuelType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "mainFuelType", sub, context);
                base.parse_attribute (/<cim:StartMainFuelCurve.StartupModel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
                let bucket = context.parsed.StartMainFuelCurve;
                if (null == bucket)
                   context.parsed.StartMainFuelCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "StartMainFuelCurve", "mainFuelType", "mainFuelType", fields);
                base.export_attribute (obj, "StartMainFuelCurve", "StartupModel", "StartupModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StartMainFuelCurve_collapse" aria-expanded="true" aria-controls="StartMainFuelCurve_collapse" style="margin-left: 10px;">StartMainFuelCurve</a></legend>
                    <div id="StartMainFuelCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#mainFuelType}}<div><b>mainFuelType</b>: {{mainFuelType}}</div>{{/mainFuelType}}
                    {{#StartupModel}}<div><b>StartupModel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{StartupModel}}");}); return false;'>{{StartupModel}}</a></div>{{/StartupModel}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["mainFuelTypeFuelType"] = [{ id: '', selected: (!obj["mainFuelType"])}]; for (let property in FuelType) obj["mainFuelTypeFuelType"].push ({ id: property, selected: obj["mainFuelType"] && obj["mainFuelType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["mainFuelTypeFuelType"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StartMainFuelCurve_collapse" aria-expanded="true" aria-controls="{{id}}_StartMainFuelCurve_collapse" style="margin-left: 10px;">StartMainFuelCurve</a></legend>
                    <div id="{{id}}_StartMainFuelCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mainFuelType'>mainFuelType: </label><div class='col-sm-8'><select id='{{id}}_mainFuelType' class='form-control custom-select'>{{#mainFuelTypeFuelType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/mainFuelTypeFuelType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StartupModel'>StartupModel: </label><div class='col-sm-8'><input id='{{id}}_StartupModel' class='form-control' type='text'{{#StartupModel}} value='{{StartupModel}}'{{/StartupModel}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "StartMainFuelCurve" };
                super.submit (id, obj);
                temp = FuelType[document.getElementById (id + "_mainFuelType").value]; if (temp) obj["mainFuelType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#FuelType." + temp; else delete obj["mainFuelType"];
                temp = document.getElementById (id + "_StartupModel").value; if ("" !== temp) obj["StartupModel"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["StartupModel", "1", "0..1", "StartupModel", "StartMainFuelCurve"]
                        ]
                    )
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
                let bucket = cim_data.ShutdownCurve;
                if (null == bucket)
                   cim_data.ShutdownCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ShutdownCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "ShutdownCurve";
                base.parse_element (/<cim:ShutdownCurve.shutdownCost>([\s\S]*?)<\/cim:ShutdownCurve.shutdownCost>/g, obj, "shutdownCost", base.to_string, sub, context);
                base.parse_element (/<cim:ShutdownCurve.shutdownDate>([\s\S]*?)<\/cim:ShutdownCurve.shutdownDate>/g, obj, "shutdownDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:ShutdownCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                let bucket = context.parsed.ShutdownCurve;
                if (null == bucket)
                   context.parsed.ShutdownCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "ShutdownCurve", "shutdownCost", "shutdownCost",  base.from_string, fields);
                base.export_element (obj, "ShutdownCurve", "shutdownDate", "shutdownDate",  base.from_datetime, fields);
                base.export_attribute (obj, "ShutdownCurve", "ThermalGeneratingUnit", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ShutdownCurve_collapse" aria-expanded="true" aria-controls="ShutdownCurve_collapse" style="margin-left: 10px;">ShutdownCurve</a></legend>
                    <div id="ShutdownCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#shutdownCost}}<div><b>shutdownCost</b>: {{shutdownCost}}</div>{{/shutdownCost}}
                    {{#shutdownDate}}<div><b>shutdownDate</b>: {{shutdownDate}}</div>{{/shutdownDate}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ThermalGeneratingUnit}}");}); return false;'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ShutdownCurve_collapse" aria-expanded="true" aria-controls="{{id}}_ShutdownCurve_collapse" style="margin-left: 10px;">ShutdownCurve</a></legend>
                    <div id="{{id}}_ShutdownCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shutdownCost'>shutdownCost: </label><div class='col-sm-8'><input id='{{id}}_shutdownCost' class='form-control' type='text'{{#shutdownCost}} value='{{shutdownCost}}'{{/shutdownCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shutdownDate'>shutdownDate: </label><div class='col-sm-8'><input id='{{id}}_shutdownDate' class='form-control' type='text'{{#shutdownDate}} value='{{shutdownDate}}'{{/shutdownDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ShutdownCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_shutdownCost").value; if ("" !== temp) obj["shutdownCost"] = temp;
                temp = document.getElementById (id + "_shutdownDate").value; if ("" !== temp) obj["shutdownDate"] = temp;
                temp = document.getElementById (id + "_ThermalGeneratingUnit").value; if ("" !== temp) obj["ThermalGeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ThermalGeneratingUnit", "1", "0..1", "ThermalGeneratingUnit", "ShutdownCurve"]
                        ]
                    )
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
                let bucket = cim_data.SteamSendoutSchedule;
                if (null == bucket)
                   cim_data.SteamSendoutSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SteamSendoutSchedule[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "SteamSendoutSchedule";
                base.parse_attribute (/<cim:SteamSendoutSchedule.CogenerationPlant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CogenerationPlant", sub, context);
                let bucket = context.parsed.SteamSendoutSchedule;
                if (null == bucket)
                   context.parsed.SteamSendoutSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SteamSendoutSchedule", "CogenerationPlant", "CogenerationPlant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SteamSendoutSchedule_collapse" aria-expanded="true" aria-controls="SteamSendoutSchedule_collapse" style="margin-left: 10px;">SteamSendoutSchedule</a></legend>
                    <div id="SteamSendoutSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#CogenerationPlant}}<div><b>CogenerationPlant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CogenerationPlant}}");}); return false;'>{{CogenerationPlant}}</a></div>{{/CogenerationPlant}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SteamSendoutSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_SteamSendoutSchedule_collapse" style="margin-left: 10px;">SteamSendoutSchedule</a></legend>
                    <div id="{{id}}_SteamSendoutSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CogenerationPlant'>CogenerationPlant: </label><div class='col-sm-8'><input id='{{id}}_CogenerationPlant' class='form-control' type='text'{{#CogenerationPlant}} value='{{CogenerationPlant}}'{{/CogenerationPlant}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SteamSendoutSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_CogenerationPlant").value; if ("" !== temp) obj["CogenerationPlant"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CogenerationPlant", "1", "1", "CogenerationPlant", "SteamSendoutSchedule"]
                        ]
                    )
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
                let bucket = cim_data.HeatInputCurve;
                if (null == bucket)
                   cim_data.HeatInputCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HeatInputCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "HeatInputCurve";
                base.parse_element (/<cim:HeatInputCurve.auxPowerMult>([\s\S]*?)<\/cim:HeatInputCurve.auxPowerMult>/g, obj, "auxPowerMult", base.to_string, sub, context);
                base.parse_element (/<cim:HeatInputCurve.auxPowerOffset>([\s\S]*?)<\/cim:HeatInputCurve.auxPowerOffset>/g, obj, "auxPowerOffset", base.to_string, sub, context);
                base.parse_element (/<cim:HeatInputCurve.heatInputEff>([\s\S]*?)<\/cim:HeatInputCurve.heatInputEff>/g, obj, "heatInputEff", base.to_string, sub, context);
                base.parse_element (/<cim:HeatInputCurve.heatInputOffset>([\s\S]*?)<\/cim:HeatInputCurve.heatInputOffset>/g, obj, "heatInputOffset", base.to_string, sub, context);
                base.parse_element (/<cim:HeatInputCurve.isNetGrossP>([\s\S]*?)<\/cim:HeatInputCurve.isNetGrossP>/g, obj, "isNetGrossP", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:HeatInputCurve.ThermalGeneratingUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ThermalGeneratingUnit", sub, context);
                let bucket = context.parsed.HeatInputCurve;
                if (null == bucket)
                   context.parsed.HeatInputCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "HeatInputCurve", "auxPowerMult", "auxPowerMult",  base.from_string, fields);
                base.export_element (obj, "HeatInputCurve", "auxPowerOffset", "auxPowerOffset",  base.from_string, fields);
                base.export_element (obj, "HeatInputCurve", "heatInputEff", "heatInputEff",  base.from_string, fields);
                base.export_element (obj, "HeatInputCurve", "heatInputOffset", "heatInputOffset",  base.from_string, fields);
                base.export_element (obj, "HeatInputCurve", "isNetGrossP", "isNetGrossP",  base.from_boolean, fields);
                base.export_attribute (obj, "HeatInputCurve", "ThermalGeneratingUnit", "ThermalGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HeatInputCurve_collapse" aria-expanded="true" aria-controls="HeatInputCurve_collapse" style="margin-left: 10px;">HeatInputCurve</a></legend>
                    <div id="HeatInputCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#auxPowerMult}}<div><b>auxPowerMult</b>: {{auxPowerMult}}</div>{{/auxPowerMult}}
                    {{#auxPowerOffset}}<div><b>auxPowerOffset</b>: {{auxPowerOffset}}</div>{{/auxPowerOffset}}
                    {{#heatInputEff}}<div><b>heatInputEff</b>: {{heatInputEff}}</div>{{/heatInputEff}}
                    {{#heatInputOffset}}<div><b>heatInputOffset</b>: {{heatInputOffset}}</div>{{/heatInputOffset}}
                    {{#isNetGrossP}}<div><b>isNetGrossP</b>: {{isNetGrossP}}</div>{{/isNetGrossP}}
                    {{#ThermalGeneratingUnit}}<div><b>ThermalGeneratingUnit</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ThermalGeneratingUnit}}");}); return false;'>{{ThermalGeneratingUnit}}</a></div>{{/ThermalGeneratingUnit}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HeatInputCurve_collapse" aria-expanded="true" aria-controls="{{id}}_HeatInputCurve_collapse" style="margin-left: 10px;">HeatInputCurve</a></legend>
                    <div id="{{id}}_HeatInputCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_auxPowerMult'>auxPowerMult: </label><div class='col-sm-8'><input id='{{id}}_auxPowerMult' class='form-control' type='text'{{#auxPowerMult}} value='{{auxPowerMult}}'{{/auxPowerMult}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_auxPowerOffset'>auxPowerOffset: </label><div class='col-sm-8'><input id='{{id}}_auxPowerOffset' class='form-control' type='text'{{#auxPowerOffset}} value='{{auxPowerOffset}}'{{/auxPowerOffset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_heatInputEff'>heatInputEff: </label><div class='col-sm-8'><input id='{{id}}_heatInputEff' class='form-control' type='text'{{#heatInputEff}} value='{{heatInputEff}}'{{/heatInputEff}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_heatInputOffset'>heatInputOffset: </label><div class='col-sm-8'><input id='{{id}}_heatInputOffset' class='form-control' type='text'{{#heatInputOffset}} value='{{heatInputOffset}}'{{/heatInputOffset}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isNetGrossP'>isNetGrossP: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isNetGrossP' class='form-check-input' type='checkbox'{{#isNetGrossP}} checked{{/isNetGrossP}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ThermalGeneratingUnit'>ThermalGeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_ThermalGeneratingUnit' class='form-control' type='text'{{#ThermalGeneratingUnit}} value='{{ThermalGeneratingUnit}}'{{/ThermalGeneratingUnit}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "HeatInputCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_auxPowerMult").value; if ("" !== temp) obj["auxPowerMult"] = temp;
                temp = document.getElementById (id + "_auxPowerOffset").value; if ("" !== temp) obj["auxPowerOffset"] = temp;
                temp = document.getElementById (id + "_heatInputEff").value; if ("" !== temp) obj["heatInputEff"] = temp;
                temp = document.getElementById (id + "_heatInputOffset").value; if ("" !== temp) obj["heatInputOffset"] = temp;
                temp = document.getElementById (id + "_isNetGrossP").checked; if (temp) obj["isNetGrossP"] = true;
                temp = document.getElementById (id + "_ThermalGeneratingUnit").value; if ("" !== temp) obj["ThermalGeneratingUnit"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ThermalGeneratingUnit", "1", "0..1", "ThermalGeneratingUnit", "HeatInputCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * An electrochemical energy storage device.
         *
         */
        class BatteryUnit extends PowerElectronicsUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BatteryUnit;
                if (null == bucket)
                   cim_data.BatteryUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BatteryUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerElectronicsUnit.prototype.parse.call (this, context, sub);
                obj.cls = "BatteryUnit";
                base.parse_element (/<cim:BatteryUnit.ratedE>([\s\S]*?)<\/cim:BatteryUnit.ratedE>/g, obj, "ratedE", base.to_string, sub, context);
                base.parse_element (/<cim:BatteryUnit.storedE>([\s\S]*?)<\/cim:BatteryUnit.storedE>/g, obj, "storedE", base.to_string, sub, context);
                base.parse_attribute (/<cim:BatteryUnit.batteryState\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "batteryState", sub, context);
                let bucket = context.parsed.BatteryUnit;
                if (null == bucket)
                   context.parsed.BatteryUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerElectronicsUnit.prototype.export.call (this, obj, false);

                base.export_element (obj, "BatteryUnit", "ratedE", "ratedE",  base.from_string, fields);
                base.export_element (obj, "BatteryUnit", "storedE", "storedE",  base.from_string, fields);
                base.export_attribute (obj, "BatteryUnit", "batteryState", "batteryState", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BatteryUnit_collapse" aria-expanded="true" aria-controls="BatteryUnit_collapse" style="margin-left: 10px;">BatteryUnit</a></legend>
                    <div id="BatteryUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerElectronicsUnit.prototype.template.call (this) +
                    `
                    {{#ratedE}}<div><b>ratedE</b>: {{ratedE}}</div>{{/ratedE}}
                    {{#storedE}}<div><b>storedE</b>: {{storedE}}</div>{{/storedE}}
                    {{#batteryState}}<div><b>batteryState</b>: {{batteryState}}</div>{{/batteryState}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["batteryStateBatteryStateKind"] = [{ id: '', selected: (!obj["batteryState"])}]; for (let property in BatteryStateKind) obj["batteryStateBatteryStateKind"].push ({ id: property, selected: obj["batteryState"] && obj["batteryState"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["batteryStateBatteryStateKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BatteryUnit_collapse" aria-expanded="true" aria-controls="{{id}}_BatteryUnit_collapse" style="margin-left: 10px;">BatteryUnit</a></legend>
                    <div id="{{id}}_BatteryUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerElectronicsUnit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedE'>ratedE: </label><div class='col-sm-8'><input id='{{id}}_ratedE' class='form-control' type='text'{{#ratedE}} value='{{ratedE}}'{{/ratedE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_storedE'>storedE: </label><div class='col-sm-8'><input id='{{id}}_storedE' class='form-control' type='text'{{#storedE}} value='{{storedE}}'{{/storedE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_batteryState'>batteryState: </label><div class='col-sm-8'><select id='{{id}}_batteryState' class='form-control custom-select'>{{#batteryStateBatteryStateKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/batteryStateBatteryStateKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BatteryUnit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ratedE").value; if ("" !== temp) obj["ratedE"] = temp;
                temp = document.getElementById (id + "_storedE").value; if ("" !== temp) obj["storedE"] = temp;
                temp = BatteryStateKind[document.getElementById (id + "_batteryState").value]; if (temp) obj["batteryState"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#BatteryStateKind." + temp; else delete obj["batteryState"];

                return (obj);
            }
        }

        /**
         * A wind generating unit that connects to the AC network with power electronics rather than rotating machines or an aggregation of such units.
         *
         */
        class PowerElectronicsWindUnit extends PowerElectronicsUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PowerElectronicsWindUnit;
                if (null == bucket)
                   cim_data.PowerElectronicsWindUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerElectronicsWindUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerElectronicsUnit.prototype.parse.call (this, context, sub);
                obj.cls = "PowerElectronicsWindUnit";
                let bucket = context.parsed.PowerElectronicsWindUnit;
                if (null == bucket)
                   context.parsed.PowerElectronicsWindUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerElectronicsUnit.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PowerElectronicsWindUnit_collapse" aria-expanded="true" aria-controls="PowerElectronicsWindUnit_collapse" style="margin-left: 10px;">PowerElectronicsWindUnit</a></legend>
                    <div id="PowerElectronicsWindUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerElectronicsUnit.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PowerElectronicsWindUnit_collapse" aria-expanded="true" aria-controls="{{id}}_PowerElectronicsWindUnit_collapse" style="margin-left: 10px;">PowerElectronicsWindUnit</a></legend>
                    <div id="{{id}}_PowerElectronicsWindUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerElectronicsUnit.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "PowerElectronicsWindUnit" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A photovoltaic device or an aggregation of such devices.
         *
         */
        class PhotoVoltaicUnit extends PowerElectronicsUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PhotoVoltaicUnit;
                if (null == bucket)
                   cim_data.PhotoVoltaicUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PhotoVoltaicUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerElectronicsUnit.prototype.parse.call (this, context, sub);
                obj.cls = "PhotoVoltaicUnit";
                let bucket = context.parsed.PhotoVoltaicUnit;
                if (null == bucket)
                   context.parsed.PhotoVoltaicUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerElectronicsUnit.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PhotoVoltaicUnit_collapse" aria-expanded="true" aria-controls="PhotoVoltaicUnit_collapse" style="margin-left: 10px;">PhotoVoltaicUnit</a></legend>
                    <div id="PhotoVoltaicUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerElectronicsUnit.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PhotoVoltaicUnit_collapse" aria-expanded="true" aria-controls="{{id}}_PhotoVoltaicUnit_collapse" style="margin-left: 10px;">PhotoVoltaicUnit</a></legend>
                    <div id="{{id}}_PhotoVoltaicUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerElectronicsUnit.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "PhotoVoltaicUnit" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A solar thermal generating unit, connected to the grid by means of a rotating machine.
         *
         * This class does not represent photovoltaic (PV) generation.
         *
         */
        class SolarGeneratingUnit extends GeneratingUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SolarGeneratingUnit;
                if (null == bucket)
                   cim_data.SolarGeneratingUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SolarGeneratingUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = GeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "SolarGeneratingUnit";
                let bucket = context.parsed.SolarGeneratingUnit;
                if (null == bucket)
                   context.parsed.SolarGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GeneratingUnit.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SolarGeneratingUnit_collapse" aria-expanded="true" aria-controls="SolarGeneratingUnit_collapse" style="margin-left: 10px;">SolarGeneratingUnit</a></legend>
                    <div id="SolarGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SolarGeneratingUnit_collapse" aria-expanded="true" aria-controls="{{id}}_SolarGeneratingUnit_collapse" style="margin-left: 10px;">SolarGeneratingUnit</a></legend>
                    <div id="{{id}}_SolarGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "SolarGeneratingUnit" };
                super.submit (id, obj);

                return (obj);
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
                let bucket = cim_data.NuclearGeneratingUnit;
                if (null == bucket)
                   cim_data.NuclearGeneratingUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NuclearGeneratingUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = GeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "NuclearGeneratingUnit";
                let bucket = context.parsed.NuclearGeneratingUnit;
                if (null == bucket)
                   context.parsed.NuclearGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GeneratingUnit.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NuclearGeneratingUnit_collapse" aria-expanded="true" aria-controls="NuclearGeneratingUnit_collapse" style="margin-left: 10px;">NuclearGeneratingUnit</a></legend>
                    <div id="NuclearGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NuclearGeneratingUnit_collapse" aria-expanded="true" aria-controls="{{id}}_NuclearGeneratingUnit_collapse" style="margin-left: 10px;">NuclearGeneratingUnit</a></legend>
                    <div id="{{id}}_NuclearGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "NuclearGeneratingUnit" };
                super.submit (id, obj);

                return (obj);
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
                let bucket = cim_data.HydroGeneratingUnit;
                if (null == bucket)
                   cim_data.HydroGeneratingUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HydroGeneratingUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = GeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "HydroGeneratingUnit";
                base.parse_attribute (/<cim:HydroGeneratingUnit.energyConversionCapability\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "energyConversionCapability", sub, context);
                base.parse_element (/<cim:HydroGeneratingUnit.hydroUnitWaterCost>([\s\S]*?)<\/cim:HydroGeneratingUnit.hydroUnitWaterCost>/g, obj, "hydroUnitWaterCost", base.to_string, sub, context);
                base.parse_attribute (/<cim:HydroGeneratingUnit.turbineType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "turbineType", sub, context);
                base.parse_element (/<cim:HydroGeneratingUnit.dropHeight>([\s\S]*?)<\/cim:HydroGeneratingUnit.dropHeight>/g, obj, "dropHeight", base.to_string, sub, context);
                base.parse_attribute (/<cim:HydroGeneratingUnit.HydroPowerPlant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HydroPowerPlant", sub, context);
                base.parse_attribute (/<cim:HydroGeneratingUnit.PenstockLossCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PenstockLossCurve", sub, context);
                base.parse_attributes (/<cim:HydroGeneratingUnit.TailbayLossCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TailbayLossCurve", sub, context);
                base.parse_attributes (/<cim:HydroGeneratingUnit.HydroGeneratingEfficiencyCurves\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HydroGeneratingEfficiencyCurves", sub, context);
                let bucket = context.parsed.HydroGeneratingUnit;
                if (null == bucket)
                   context.parsed.HydroGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GeneratingUnit.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "HydroGeneratingUnit", "energyConversionCapability", "energyConversionCapability", fields);
                base.export_element (obj, "HydroGeneratingUnit", "hydroUnitWaterCost", "hydroUnitWaterCost",  base.from_string, fields);
                base.export_attribute (obj, "HydroGeneratingUnit", "turbineType", "turbineType", fields);
                base.export_element (obj, "HydroGeneratingUnit", "dropHeight", "dropHeight",  base.from_string, fields);
                base.export_attribute (obj, "HydroGeneratingUnit", "HydroPowerPlant", "HydroPowerPlant", fields);
                base.export_attribute (obj, "HydroGeneratingUnit", "PenstockLossCurve", "PenstockLossCurve", fields);
                base.export_attributes (obj, "HydroGeneratingUnit", "TailbayLossCurve", "TailbayLossCurve", fields);
                base.export_attributes (obj, "HydroGeneratingUnit", "HydroGeneratingEfficiencyCurves", "HydroGeneratingEfficiencyCurves", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HydroGeneratingUnit_collapse" aria-expanded="true" aria-controls="HydroGeneratingUnit_collapse" style="margin-left: 10px;">HydroGeneratingUnit</a></legend>
                    <div id="HydroGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.template.call (this) +
                    `
                    {{#energyConversionCapability}}<div><b>energyConversionCapability</b>: {{energyConversionCapability}}</div>{{/energyConversionCapability}}
                    {{#hydroUnitWaterCost}}<div><b>hydroUnitWaterCost</b>: {{hydroUnitWaterCost}}</div>{{/hydroUnitWaterCost}}
                    {{#turbineType}}<div><b>turbineType</b>: {{turbineType}}</div>{{/turbineType}}
                    {{#dropHeight}}<div><b>dropHeight</b>: {{dropHeight}}</div>{{/dropHeight}}
                    {{#HydroPowerPlant}}<div><b>HydroPowerPlant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HydroPowerPlant}}");}); return false;'>{{HydroPowerPlant}}</a></div>{{/HydroPowerPlant}}
                    {{#PenstockLossCurve}}<div><b>PenstockLossCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PenstockLossCurve}}");}); return false;'>{{PenstockLossCurve}}</a></div>{{/PenstockLossCurve}}
                    {{#TailbayLossCurve}}<div><b>TailbayLossCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TailbayLossCurve}}
                    {{#HydroGeneratingEfficiencyCurves}}<div><b>HydroGeneratingEfficiencyCurves</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/HydroGeneratingEfficiencyCurves}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["energyConversionCapabilityHydroEnergyConversionKind"] = [{ id: '', selected: (!obj["energyConversionCapability"])}]; for (let property in HydroEnergyConversionKind) obj["energyConversionCapabilityHydroEnergyConversionKind"].push ({ id: property, selected: obj["energyConversionCapability"] && obj["energyConversionCapability"].endsWith ('.' + property)});
                obj["turbineTypeHydroTurbineKind"] = [{ id: '', selected: (!obj["turbineType"])}]; for (let property in GenerationTrainingSimulation.HydroTurbineKind) obj["turbineTypeHydroTurbineKind"].push ({ id: property, selected: obj["turbineType"] && obj["turbineType"].endsWith ('.' + property)});
                if (obj["TailbayLossCurve"]) obj["TailbayLossCurve_string"] = obj["TailbayLossCurve"].join ();
                if (obj["HydroGeneratingEfficiencyCurves"]) obj["HydroGeneratingEfficiencyCurves_string"] = obj["HydroGeneratingEfficiencyCurves"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["energyConversionCapabilityHydroEnergyConversionKind"];
                delete obj["turbineTypeHydroTurbineKind"];
                delete obj["TailbayLossCurve_string"];
                delete obj["HydroGeneratingEfficiencyCurves_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HydroGeneratingUnit_collapse" aria-expanded="true" aria-controls="{{id}}_HydroGeneratingUnit_collapse" style="margin-left: 10px;">HydroGeneratingUnit</a></legend>
                    <div id="{{id}}_HydroGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energyConversionCapability'>energyConversionCapability: </label><div class='col-sm-8'><select id='{{id}}_energyConversionCapability' class='form-control custom-select'>{{#energyConversionCapabilityHydroEnergyConversionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/energyConversionCapabilityHydroEnergyConversionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hydroUnitWaterCost'>hydroUnitWaterCost: </label><div class='col-sm-8'><input id='{{id}}_hydroUnitWaterCost' class='form-control' type='text'{{#hydroUnitWaterCost}} value='{{hydroUnitWaterCost}}'{{/hydroUnitWaterCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_turbineType'>turbineType: </label><div class='col-sm-8'><select id='{{id}}_turbineType' class='form-control custom-select'>{{#turbineTypeHydroTurbineKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/turbineTypeHydroTurbineKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dropHeight'>dropHeight: </label><div class='col-sm-8'><input id='{{id}}_dropHeight' class='form-control' type='text'{{#dropHeight}} value='{{dropHeight}}'{{/dropHeight}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HydroPowerPlant'>HydroPowerPlant: </label><div class='col-sm-8'><input id='{{id}}_HydroPowerPlant' class='form-control' type='text'{{#HydroPowerPlant}} value='{{HydroPowerPlant}}'{{/HydroPowerPlant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PenstockLossCurve'>PenstockLossCurve: </label><div class='col-sm-8'><input id='{{id}}_PenstockLossCurve' class='form-control' type='text'{{#PenstockLossCurve}} value='{{PenstockLossCurve}}'{{/PenstockLossCurve}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "HydroGeneratingUnit" };
                super.submit (id, obj);
                temp = HydroEnergyConversionKind[document.getElementById (id + "_energyConversionCapability").value]; if (temp) obj["energyConversionCapability"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#HydroEnergyConversionKind." + temp; else delete obj["energyConversionCapability"];
                temp = document.getElementById (id + "_hydroUnitWaterCost").value; if ("" !== temp) obj["hydroUnitWaterCost"] = temp;
                temp = GenerationTrainingSimulation.HydroTurbineKind[document.getElementById (id + "_turbineType").value]; if (temp) obj["turbineType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#HydroTurbineKind." + temp; else delete obj["turbineType"];
                temp = document.getElementById (id + "_dropHeight").value; if ("" !== temp) obj["dropHeight"] = temp;
                temp = document.getElementById (id + "_HydroPowerPlant").value; if ("" !== temp) obj["HydroPowerPlant"] = temp;
                temp = document.getElementById (id + "_PenstockLossCurve").value; if ("" !== temp) obj["PenstockLossCurve"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["HydroPowerPlant", "0..1", "0..*", "HydroPowerPlant", "HydroGeneratingUnits"],
                            ["PenstockLossCurve", "0..1", "1", "PenstockLossCurve", "HydroGeneratingUnit"],
                            ["TailbayLossCurve", "0..*", "1", "TailbayLossCurve", "HydroGeneratingUnit"],
                            ["HydroGeneratingEfficiencyCurves", "0..*", "1", "HydroGeneratingEfficiencyCurve", "HydroGeneratingUnit"]
                        ]
                    )
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
                let bucket = cim_data.ThermalGeneratingUnit;
                if (null == bucket)
                   cim_data.ThermalGeneratingUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ThermalGeneratingUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = GeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "ThermalGeneratingUnit";
                base.parse_element (/<cim:ThermalGeneratingUnit.oMCost>([\s\S]*?)<\/cim:ThermalGeneratingUnit.oMCost>/g, obj, "oMCost", base.to_string, sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.CAESPlant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CAESPlant", sub, context);
                base.parse_attributes (/<cim:ThermalGeneratingUnit.EmmissionAccounts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EmmissionAccounts", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.CogenerationPlant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CogenerationPlant", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.HeatRateCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HeatRateCurve", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.HeatInputCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HeatInputCurve", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.StartupModel\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "StartupModel", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.ShutdownCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ShutdownCurve", sub, context);
                base.parse_attributes (/<cim:ThermalGeneratingUnit.FuelAllocationSchedules\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FuelAllocationSchedules", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.CombinedCyclePlant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CombinedCyclePlant", sub, context);
                base.parse_attributes (/<cim:ThermalGeneratingUnit.EmissionCurves\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EmissionCurves", sub, context);
                base.parse_attributes (/<cim:ThermalGeneratingUnit.FossilFuels\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FossilFuels", sub, context);
                base.parse_attribute (/<cim:ThermalGeneratingUnit.IncrementalHeatRateCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IncrementalHeatRateCurve", sub, context);
                let bucket = context.parsed.ThermalGeneratingUnit;
                if (null == bucket)
                   context.parsed.ThermalGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GeneratingUnit.prototype.export.call (this, obj, false);

                base.export_element (obj, "ThermalGeneratingUnit", "oMCost", "oMCost",  base.from_string, fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "CAESPlant", "CAESPlant", fields);
                base.export_attributes (obj, "ThermalGeneratingUnit", "EmmissionAccounts", "EmmissionAccounts", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "CogenerationPlant", "CogenerationPlant", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "HeatRateCurve", "HeatRateCurve", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "HeatInputCurve", "HeatInputCurve", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "StartupModel", "StartupModel", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "ShutdownCurve", "ShutdownCurve", fields);
                base.export_attributes (obj, "ThermalGeneratingUnit", "FuelAllocationSchedules", "FuelAllocationSchedules", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "CombinedCyclePlant", "CombinedCyclePlant", fields);
                base.export_attributes (obj, "ThermalGeneratingUnit", "EmissionCurves", "EmissionCurves", fields);
                base.export_attributes (obj, "ThermalGeneratingUnit", "FossilFuels", "FossilFuels", fields);
                base.export_attribute (obj, "ThermalGeneratingUnit", "IncrementalHeatRateCurve", "IncrementalHeatRateCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ThermalGeneratingUnit_collapse" aria-expanded="true" aria-controls="ThermalGeneratingUnit_collapse" style="margin-left: 10px;">ThermalGeneratingUnit</a></legend>
                    <div id="ThermalGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.template.call (this) +
                    `
                    {{#oMCost}}<div><b>oMCost</b>: {{oMCost}}</div>{{/oMCost}}
                    {{#CAESPlant}}<div><b>CAESPlant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CAESPlant}}");}); return false;'>{{CAESPlant}}</a></div>{{/CAESPlant}}
                    {{#EmmissionAccounts}}<div><b>EmmissionAccounts</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EmmissionAccounts}}
                    {{#CogenerationPlant}}<div><b>CogenerationPlant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CogenerationPlant}}");}); return false;'>{{CogenerationPlant}}</a></div>{{/CogenerationPlant}}
                    {{#HeatRateCurve}}<div><b>HeatRateCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HeatRateCurve}}");}); return false;'>{{HeatRateCurve}}</a></div>{{/HeatRateCurve}}
                    {{#HeatInputCurve}}<div><b>HeatInputCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HeatInputCurve}}");}); return false;'>{{HeatInputCurve}}</a></div>{{/HeatInputCurve}}
                    {{#StartupModel}}<div><b>StartupModel</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{StartupModel}}");}); return false;'>{{StartupModel}}</a></div>{{/StartupModel}}
                    {{#ShutdownCurve}}<div><b>ShutdownCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ShutdownCurve}}");}); return false;'>{{ShutdownCurve}}</a></div>{{/ShutdownCurve}}
                    {{#FuelAllocationSchedules}}<div><b>FuelAllocationSchedules</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FuelAllocationSchedules}}
                    {{#CombinedCyclePlant}}<div><b>CombinedCyclePlant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CombinedCyclePlant}}");}); return false;'>{{CombinedCyclePlant}}</a></div>{{/CombinedCyclePlant}}
                    {{#EmissionCurves}}<div><b>EmissionCurves</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EmissionCurves}}
                    {{#FossilFuels}}<div><b>FossilFuels</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FossilFuels}}
                    {{#IncrementalHeatRateCurve}}<div><b>IncrementalHeatRateCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{IncrementalHeatRateCurve}}");}); return false;'>{{IncrementalHeatRateCurve}}</a></div>{{/IncrementalHeatRateCurve}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EmmissionAccounts"]) obj["EmmissionAccounts_string"] = obj["EmmissionAccounts"].join ();
                if (obj["FuelAllocationSchedules"]) obj["FuelAllocationSchedules_string"] = obj["FuelAllocationSchedules"].join ();
                if (obj["EmissionCurves"]) obj["EmissionCurves_string"] = obj["EmissionCurves"].join ();
                if (obj["FossilFuels"]) obj["FossilFuels_string"] = obj["FossilFuels"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EmmissionAccounts_string"];
                delete obj["FuelAllocationSchedules_string"];
                delete obj["EmissionCurves_string"];
                delete obj["FossilFuels_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ThermalGeneratingUnit_collapse" aria-expanded="true" aria-controls="{{id}}_ThermalGeneratingUnit_collapse" style="margin-left: 10px;">ThermalGeneratingUnit</a></legend>
                    <div id="{{id}}_ThermalGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oMCost'>oMCost: </label><div class='col-sm-8'><input id='{{id}}_oMCost' class='form-control' type='text'{{#oMCost}} value='{{oMCost}}'{{/oMCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CAESPlant'>CAESPlant: </label><div class='col-sm-8'><input id='{{id}}_CAESPlant' class='form-control' type='text'{{#CAESPlant}} value='{{CAESPlant}}'{{/CAESPlant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CogenerationPlant'>CogenerationPlant: </label><div class='col-sm-8'><input id='{{id}}_CogenerationPlant' class='form-control' type='text'{{#CogenerationPlant}} value='{{CogenerationPlant}}'{{/CogenerationPlant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HeatRateCurve'>HeatRateCurve: </label><div class='col-sm-8'><input id='{{id}}_HeatRateCurve' class='form-control' type='text'{{#HeatRateCurve}} value='{{HeatRateCurve}}'{{/HeatRateCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HeatInputCurve'>HeatInputCurve: </label><div class='col-sm-8'><input id='{{id}}_HeatInputCurve' class='form-control' type='text'{{#HeatInputCurve}} value='{{HeatInputCurve}}'{{/HeatInputCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StartupModel'>StartupModel: </label><div class='col-sm-8'><input id='{{id}}_StartupModel' class='form-control' type='text'{{#StartupModel}} value='{{StartupModel}}'{{/StartupModel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ShutdownCurve'>ShutdownCurve: </label><div class='col-sm-8'><input id='{{id}}_ShutdownCurve' class='form-control' type='text'{{#ShutdownCurve}} value='{{ShutdownCurve}}'{{/ShutdownCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CombinedCyclePlant'>CombinedCyclePlant: </label><div class='col-sm-8'><input id='{{id}}_CombinedCyclePlant' class='form-control' type='text'{{#CombinedCyclePlant}} value='{{CombinedCyclePlant}}'{{/CombinedCyclePlant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IncrementalHeatRateCurve'>IncrementalHeatRateCurve: </label><div class='col-sm-8'><input id='{{id}}_IncrementalHeatRateCurve' class='form-control' type='text'{{#IncrementalHeatRateCurve}} value='{{IncrementalHeatRateCurve}}'{{/IncrementalHeatRateCurve}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ThermalGeneratingUnit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_oMCost").value; if ("" !== temp) obj["oMCost"] = temp;
                temp = document.getElementById (id + "_CAESPlant").value; if ("" !== temp) obj["CAESPlant"] = temp;
                temp = document.getElementById (id + "_CogenerationPlant").value; if ("" !== temp) obj["CogenerationPlant"] = temp;
                temp = document.getElementById (id + "_HeatRateCurve").value; if ("" !== temp) obj["HeatRateCurve"] = temp;
                temp = document.getElementById (id + "_HeatInputCurve").value; if ("" !== temp) obj["HeatInputCurve"] = temp;
                temp = document.getElementById (id + "_StartupModel").value; if ("" !== temp) obj["StartupModel"] = temp;
                temp = document.getElementById (id + "_ShutdownCurve").value; if ("" !== temp) obj["ShutdownCurve"] = temp;
                temp = document.getElementById (id + "_CombinedCyclePlant").value; if ("" !== temp) obj["CombinedCyclePlant"] = temp;
                temp = document.getElementById (id + "_IncrementalHeatRateCurve").value; if ("" !== temp) obj["IncrementalHeatRateCurve"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CAESPlant", "0..1", "0..1", "CAESPlant", "ThermalGeneratingUnit"],
                            ["EmmissionAccounts", "0..*", "1", "EmissionAccount", "ThermalGeneratingUnit"],
                            ["CogenerationPlant", "0..1", "0..*", "CogenerationPlant", "ThermalGeneratingUnits"],
                            ["HeatRateCurve", "0..1", "1", "HeatRateCurve", "ThermalGeneratingUnit"],
                            ["HeatInputCurve", "0..1", "1", "HeatInputCurve", "ThermalGeneratingUnit"],
                            ["StartupModel", "0..1", "1", "StartupModel", "ThermalGeneratingUnit"],
                            ["ShutdownCurve", "0..1", "1", "ShutdownCurve", "ThermalGeneratingUnit"],
                            ["FuelAllocationSchedules", "0..*", "1", "FuelAllocationSchedule", "ThermalGeneratingUnit"],
                            ["CombinedCyclePlant", "0..1", "0..*", "CombinedCyclePlant", "ThermalGeneratingUnits"],
                            ["EmissionCurves", "0..*", "1", "EmissionCurve", "ThermalGeneratingUnit"],
                            ["FossilFuels", "0..*", "1", "FossilFuel", "ThermalGeneratingUnit"],
                            ["IncrementalHeatRateCurve", "0..1", "1", "IncrementalHeatRateCurve", "ThermalGeneratingUnit"]
                        ]
                    )
                );
            }
        }

        /**
         * A wind driven generating unit, connected to the grid by means of a rotating machine.
         *
         * May be used to represent a single turbine or an aggregation.
         *
         */
        class WindGeneratingUnit extends GeneratingUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WindGeneratingUnit;
                if (null == bucket)
                   cim_data.WindGeneratingUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindGeneratingUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = GeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "WindGeneratingUnit";
                base.parse_attribute (/<cim:WindGeneratingUnit.windGenUnitType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "windGenUnitType", sub, context);
                let bucket = context.parsed.WindGeneratingUnit;
                if (null == bucket)
                   context.parsed.WindGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GeneratingUnit.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindGeneratingUnit", "windGenUnitType", "windGenUnitType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WindGeneratingUnit_collapse" aria-expanded="true" aria-controls="WindGeneratingUnit_collapse" style="margin-left: 10px;">WindGeneratingUnit</a></legend>
                    <div id="WindGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.template.call (this) +
                    `
                    {{#windGenUnitType}}<div><b>windGenUnitType</b>: {{windGenUnitType}}</div>{{/windGenUnitType}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["windGenUnitTypeWindGenUnitKind"] = [{ id: '', selected: (!obj["windGenUnitType"])}]; for (let property in WindGenUnitKind) obj["windGenUnitTypeWindGenUnitKind"].push ({ id: property, selected: obj["windGenUnitType"] && obj["windGenUnitType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["windGenUnitTypeWindGenUnitKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WindGeneratingUnit_collapse" aria-expanded="true" aria-controls="{{id}}_WindGeneratingUnit_collapse" style="margin-left: 10px;">WindGeneratingUnit</a></legend>
                    <div id="{{id}}_WindGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeneratingUnit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_windGenUnitType'>windGenUnitType: </label><div class='col-sm-8'><select id='{{id}}_windGenUnitType' class='form-control custom-select'>{{#windGenUnitTypeWindGenUnitKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/windGenUnitTypeWindGenUnitKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WindGeneratingUnit" };
                super.submit (id, obj);
                temp = WindGenUnitKind[document.getElementById (id + "_windGenUnitType").value]; if (temp) obj["windGenUnitType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#WindGenUnitKind." + temp; else delete obj["windGenUnitType"];

                return (obj);
            }
        }

        return (
            {
                HydroGeneratingUnit: HydroGeneratingUnit,
                HydroEnergyConversionKind: HydroEnergyConversionKind,
                EmissionCurve: EmissionCurve,
                InflowForecast: InflowForecast,
                GenUnitOpSchedule: GenUnitOpSchedule,
                GrossToNetActivePowerCurve: GrossToNetActivePowerCurve,
                StartIgnFuelCurve: StartIgnFuelCurve,
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
                HeatRateCurve: HeatRateCurve,
                Reservoir: Reservoir,
                IncrementalHeatRateCurve: IncrementalHeatRateCurve,
                EmissionAccount: EmissionAccount,
                WindGenUnitKind: WindGenUnitKind,
                CombinedCyclePlant: CombinedCyclePlant,
                SteamSendoutSchedule: SteamSendoutSchedule,
                TailbayLossCurve: TailbayLossCurve,
                BatteryUnit: BatteryUnit,
                CAESPlant: CAESPlant,
                ThermalGeneratingUnit: ThermalGeneratingUnit,
                PowerElectronicsWindUnit: PowerElectronicsWindUnit,
                LevelVsVolumeCurve: LevelVsVolumeCurve,
                CogenerationPlant: CogenerationPlant,
                HeatInputCurve: HeatInputCurve,
                StartupModel: StartupModel,
                GeneratorControlMode: GeneratorControlMode,
                AirCompressor: AirCompressor,
                PowerElectronicsUnit: PowerElectronicsUnit,
                NuclearGeneratingUnit: NuclearGeneratingUnit,
                SolarGeneratingUnit: SolarGeneratingUnit,
                PhotoVoltaicUnit: PhotoVoltaicUnit,
                BatteryStateKind: BatteryStateKind,
                GeneratorControlSource: GeneratorControlSource,
                HydroPlantStorageKind: HydroPlantStorageKind,
                HydroPump: HydroPump,
                StartRampCurve: StartRampCurve,
                FossilFuel: FossilFuel,
                PenstockLossCurve: PenstockLossCurve,
                HydroPumpOpSchedule: HydroPumpOpSchedule,
                HydroGeneratingEfficiencyCurve: HydroGeneratingEfficiencyCurve,
                HydroPowerPlant: HydroPowerPlant
            }
        );
    }
);