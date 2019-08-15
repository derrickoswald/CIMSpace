define
(
    ["model/base", "model/Assets", "model/Core", "model/Wires"],
    /**
     * This package is an extension of Assets package and contains the core information classes that support asset management and different network and work planning applications with specialized AssetInfo subclasses.
     *
     * They hold attributes that can be referenced by not only Asset-s or AssetModel-s but also by ConductingEquipment-s.
     *
     */
    function (base, Assets, Core, Wires)
    {

        /**
         * Kinds of interrupting mediums.
         *
         */
        let InterruptingMediumKind =
        {
            "airBlast": "airBlast",
            "airMagnetic": "airMagnetic",
            "gasTwoPressure": "gasTwoPressure",
            "gasSinglePressure": "gasSinglePressure",
            "bulkOil": "bulkOil",
            "minimumOil": "minimumOil",
            "vacuum": "vacuum"
        };
        Object.freeze (InterruptingMediumKind);

        /**
         * Kind of wire insulation.
         *
         */
        let WireInsulationKind =
        {
            "asbestosAndVarnishedCambric": "asbestosAndVarnishedCambric",
            "butyl": "butyl",
            "ethylenePropyleneRubber": "ethylenePropyleneRubber",
            "highMolecularWeightPolyethylene": "highMolecularWeightPolyethylene",
            "treeResistantHighMolecularWeightPolyethylene": "treeResistantHighMolecularWeightPolyethylene",
            "lowCapacitanceRubber": "lowCapacitanceRubber",
            "oilPaper": "oilPaper",
            "ozoneResistantRubber": "ozoneResistantRubber",
            "beltedPilc": "beltedPilc",
            "unbeltedPilc": "unbeltedPilc",
            "rubber": "rubber",
            "siliconRubber": "siliconRubber",
            "varnishedCambricCloth": "varnishedCambricCloth",
            "varnishedDacronGlass": "varnishedDacronGlass",
            "crosslinkedPolyethylene": "crosslinkedPolyethylene",
            "treeRetardantCrosslinkedPolyethylene": "treeRetardantCrosslinkedPolyethylene",
            "highPressureFluidFilled": "highPressureFluidFilled",
            "other": "other"
        };
        Object.freeze (WireInsulationKind);

        /**
         * Insulation kind for bushings.
         *
         */
        let BushingInsulationKind =
        {
            "oilImpregnatedPaper": "oilImpregnatedPaper",
            "compound": "compound",
            "resinBondedPaper": "resinBondedPaper",
            "resinImpregnatedPaper": "resinImpregnatedPaper",
            "solidPorcelain": "solidPorcelain",
            "other": "other"
        };
        Object.freeze (BushingInsulationKind);

        /**
         * Kind of cable construction.
         *
         */
        let CableConstructionKind =
        {
            "compacted": "compacted",
            "compressed": "compressed",
            "sector": "sector",
            "segmental": "segmental",
            "solid": "solid",
            "stranded": "stranded",
            "other": "other"
        };
        Object.freeze (CableConstructionKind);

        /**
         * Kinds of operating mechanisms.
         *
         */
        let OperatingMechanismKind =
        {
            "capacitorTrip": "capacitorTrip",
            "hydraulic": "hydraulic",
            "pneudraulic": "pneudraulic",
            "pneumatic": "pneumatic",
            "solenoid": "solenoid",
            "spring": "spring",
            "springHandCrank": "springHandCrank",
            "springHydraulic": "springHydraulic",
            "springMotor": "springMotor"
        };
        Object.freeze (OperatingMechanismKind);

        /**
         * Kind of cable outer jacket.
         *
         */
        let CableOuterJacketKind =
        {
            "none": "none",
            "linearLowDensityPolyethylene": "linearLowDensityPolyethylene",
            "pvc": "pvc",
            "polyethylene": "polyethylene",
            "insulating": "insulating",
            "semiconducting": "semiconducting",
            "other": "other"
        };
        Object.freeze (CableOuterJacketKind);

        /**
         * Kind of wire usage.
         *
         */
        let WireUsageKind =
        {
            "transmission": "transmission",
            "distribution": "distribution",
            "secondary": "secondary",
            "other": "other"
        };
        Object.freeze (WireUsageKind);

        /**
         * Kind of wire material.
         *
         */
        let WireMaterialKind =
        {
            "copper": "copper",
            "steel": "steel",
            "aluminum": "aluminum",
            "aluminumSteel": "aluminumSteel",
            "acsr": "acsr",
            "aluminumAlloy": "aluminumAlloy",
            "aluminumAlloySteel": "aluminumAlloySteel",
            "aaac": "aaac",
            "other": "other"
        };
        Object.freeze (WireMaterialKind);

        /**
         * Kind of cable shield material.
         *
         */
        let CableShieldMaterialKind =
        {
            "lead": "lead",
            "copper": "copper",
            "steel": "steel",
            "aluminum": "aluminum",
            "other": "other"
        };
        Object.freeze (CableShieldMaterialKind);

        /**
         * Information on a wire carrying a single phase.
         *
         */
        class WirePhaseInfo extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WirePhaseInfo;
                if (null == bucket)
                   cim_data.WirePhaseInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WirePhaseInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WirePhaseInfo";
                base.parse_attribute (/<cim:WirePhaseInfo.phaseInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "phaseInfo", sub, context);
                base.parse_attribute (/<cim:WirePhaseInfo.WireAssemblyInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WireAssemblyInfo", sub, context);
                base.parse_attribute (/<cim:WirePhaseInfo.WireInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WireInfo", sub, context);
                base.parse_attribute (/<cim:WirePhaseInfo.WirePosition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WirePosition", sub, context);
                let bucket = context.parsed.WirePhaseInfo;
                if (null == bucket)
                   context.parsed.WirePhaseInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "WirePhaseInfo", "phaseInfo", "phaseInfo", fields);
                base.export_attribute (obj, "WirePhaseInfo", "WireAssemblyInfo", "WireAssemblyInfo", fields);
                base.export_attribute (obj, "WirePhaseInfo", "WireInfo", "WireInfo", fields);
                base.export_attribute (obj, "WirePhaseInfo", "WirePosition", "WirePosition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WirePhaseInfo_collapse" aria-expanded="true" aria-controls="WirePhaseInfo_collapse" style="margin-left: 10px;">WirePhaseInfo</a></legend>
                    <div id="WirePhaseInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#phaseInfo}}<div><b>phaseInfo</b>: {{phaseInfo}}</div>{{/phaseInfo}}
                    {{#WireAssemblyInfo}}<div><b>WireAssemblyInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WireAssemblyInfo}}");}); return false;'>{{WireAssemblyInfo}}</a></div>{{/WireAssemblyInfo}}
                    {{#WireInfo}}<div><b>WireInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WireInfo}}");}); return false;'>{{WireInfo}}</a></div>{{/WireInfo}}
                    {{#WirePosition}}<div><b>WirePosition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WirePosition}}");}); return false;'>{{WirePosition}}</a></div>{{/WirePosition}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["phaseInfoSinglePhaseKind"] = [{ id: '', selected: (!obj["phaseInfo"])}]; for (let property in Wires.SinglePhaseKind) obj["phaseInfoSinglePhaseKind"].push ({ id: property, selected: obj["phaseInfo"] && obj["phaseInfo"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["phaseInfoSinglePhaseKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WirePhaseInfo_collapse" aria-expanded="true" aria-controls="{{id}}_WirePhaseInfo_collapse" style="margin-left: 10px;">WirePhaseInfo</a></legend>
                    <div id="{{id}}_WirePhaseInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseInfo'>phaseInfo: </label><div class='col-sm-8'><select id='{{id}}_phaseInfo' class='form-control custom-select'>{{#phaseInfoSinglePhaseKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/phaseInfoSinglePhaseKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WireAssemblyInfo'>WireAssemblyInfo: </label><div class='col-sm-8'><input id='{{id}}_WireAssemblyInfo' class='form-control' type='text'{{#WireAssemblyInfo}} value='{{WireAssemblyInfo}}'{{/WireAssemblyInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WireInfo'>WireInfo: </label><div class='col-sm-8'><input id='{{id}}_WireInfo' class='form-control' type='text'{{#WireInfo}} value='{{WireInfo}}'{{/WireInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WirePosition'>WirePosition: </label><div class='col-sm-8'><input id='{{id}}_WirePosition' class='form-control' type='text'{{#WirePosition}} value='{{WirePosition}}'{{/WirePosition}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WirePhaseInfo" };
                super.submit (id, obj);
                temp = Wires.SinglePhaseKind[document.getElementById (id + "_phaseInfo").value]; if (temp) obj["phaseInfo"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#SinglePhaseKind." + temp; else delete obj["phaseInfo"];
                temp = document.getElementById (id + "_WireAssemblyInfo").value; if ("" !== temp) obj["WireAssemblyInfo"] = temp;
                temp = document.getElementById (id + "_WireInfo").value; if ("" !== temp) obj["WireInfo"] = temp;
                temp = document.getElementById (id + "_WirePosition").value; if ("" !== temp) obj["WirePosition"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WireAssemblyInfo", "1", "0..*", "WireAssemblyInfo", "WirePhaseInfo"],
                            ["WireInfo", "0..1", "0..*", "WireInfo", "WirePhaseInfo"],
                            ["WirePosition", "0..1", "0..*", "WirePosition", "WirePhaseInfo"]
                        ]
                    )
                );
            }
        }

        /**
         * Breaker operating mechanism datasheet information.
         *
         */
        class OperatingMechanismInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OperatingMechanismInfo;
                if (null == bucket)
                   cim_data.OperatingMechanismInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperatingMechanismInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "OperatingMechanismInfo";
                base.parse_element (/<cim:OperatingMechanismInfo.closeVoltage>([\s\S]*?)<\/cim:OperatingMechanismInfo.closeVoltage>/g, obj, "closeVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:OperatingMechanismInfo.tripVoltage>([\s\S]*?)<\/cim:OperatingMechanismInfo.tripVoltage>/g, obj, "tripVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:OperatingMechanismInfo.closeAmps>([\s\S]*?)<\/cim:OperatingMechanismInfo.closeAmps>/g, obj, "closeAmps", base.to_string, sub, context);
                base.parse_element (/<cim:OperatingMechanismInfo.tripAmps>([\s\S]*?)<\/cim:OperatingMechanismInfo.tripAmps>/g, obj, "tripAmps", base.to_string, sub, context);
                base.parse_element (/<cim:OperatingMechanismInfo.motorStartCurrent>([\s\S]*?)<\/cim:OperatingMechanismInfo.motorStartCurrent>/g, obj, "motorStartCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:OperatingMechanismInfo.motorRunCurrent>([\s\S]*?)<\/cim:OperatingMechanismInfo.motorRunCurrent>/g, obj, "motorRunCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:OperatingMechanismInfo.motorVoltage>([\s\S]*?)<\/cim:OperatingMechanismInfo.motorVoltage>/g, obj, "motorVoltage", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperatingMechanismInfo.mechanismKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "mechanismKind", sub, context);
                let bucket = context.parsed.OperatingMechanismInfo;
                if (null == bucket)
                   context.parsed.OperatingMechanismInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "OperatingMechanismInfo", "closeVoltage", "closeVoltage",  base.from_string, fields);
                base.export_element (obj, "OperatingMechanismInfo", "tripVoltage", "tripVoltage",  base.from_string, fields);
                base.export_element (obj, "OperatingMechanismInfo", "closeAmps", "closeAmps",  base.from_string, fields);
                base.export_element (obj, "OperatingMechanismInfo", "tripAmps", "tripAmps",  base.from_string, fields);
                base.export_element (obj, "OperatingMechanismInfo", "motorStartCurrent", "motorStartCurrent",  base.from_string, fields);
                base.export_element (obj, "OperatingMechanismInfo", "motorRunCurrent", "motorRunCurrent",  base.from_string, fields);
                base.export_element (obj, "OperatingMechanismInfo", "motorVoltage", "motorVoltage",  base.from_string, fields);
                base.export_attribute (obj, "OperatingMechanismInfo", "mechanismKind", "mechanismKind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OperatingMechanismInfo_collapse" aria-expanded="true" aria-controls="OperatingMechanismInfo_collapse" style="margin-left: 10px;">OperatingMechanismInfo</a></legend>
                    <div id="OperatingMechanismInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#closeVoltage}}<div><b>closeVoltage</b>: {{closeVoltage}}</div>{{/closeVoltage}}
                    {{#tripVoltage}}<div><b>tripVoltage</b>: {{tripVoltage}}</div>{{/tripVoltage}}
                    {{#closeAmps}}<div><b>closeAmps</b>: {{closeAmps}}</div>{{/closeAmps}}
                    {{#tripAmps}}<div><b>tripAmps</b>: {{tripAmps}}</div>{{/tripAmps}}
                    {{#motorStartCurrent}}<div><b>motorStartCurrent</b>: {{motorStartCurrent}}</div>{{/motorStartCurrent}}
                    {{#motorRunCurrent}}<div><b>motorRunCurrent</b>: {{motorRunCurrent}}</div>{{/motorRunCurrent}}
                    {{#motorVoltage}}<div><b>motorVoltage</b>: {{motorVoltage}}</div>{{/motorVoltage}}
                    {{#mechanismKind}}<div><b>mechanismKind</b>: {{mechanismKind}}</div>{{/mechanismKind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["mechanismKindOperatingMechanismKind"] = [{ id: '', selected: (!obj["mechanismKind"])}]; for (let property in OperatingMechanismKind) obj["mechanismKindOperatingMechanismKind"].push ({ id: property, selected: obj["mechanismKind"] && obj["mechanismKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["mechanismKindOperatingMechanismKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OperatingMechanismInfo_collapse" aria-expanded="true" aria-controls="{{id}}_OperatingMechanismInfo_collapse" style="margin-left: 10px;">OperatingMechanismInfo</a></legend>
                    <div id="{{id}}_OperatingMechanismInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_closeVoltage'>closeVoltage: </label><div class='col-sm-8'><input id='{{id}}_closeVoltage' class='form-control' type='text'{{#closeVoltage}} value='{{closeVoltage}}'{{/closeVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tripVoltage'>tripVoltage: </label><div class='col-sm-8'><input id='{{id}}_tripVoltage' class='form-control' type='text'{{#tripVoltage}} value='{{tripVoltage}}'{{/tripVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_closeAmps'>closeAmps: </label><div class='col-sm-8'><input id='{{id}}_closeAmps' class='form-control' type='text'{{#closeAmps}} value='{{closeAmps}}'{{/closeAmps}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tripAmps'>tripAmps: </label><div class='col-sm-8'><input id='{{id}}_tripAmps' class='form-control' type='text'{{#tripAmps}} value='{{tripAmps}}'{{/tripAmps}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_motorStartCurrent'>motorStartCurrent: </label><div class='col-sm-8'><input id='{{id}}_motorStartCurrent' class='form-control' type='text'{{#motorStartCurrent}} value='{{motorStartCurrent}}'{{/motorStartCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_motorRunCurrent'>motorRunCurrent: </label><div class='col-sm-8'><input id='{{id}}_motorRunCurrent' class='form-control' type='text'{{#motorRunCurrent}} value='{{motorRunCurrent}}'{{/motorRunCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_motorVoltage'>motorVoltage: </label><div class='col-sm-8'><input id='{{id}}_motorVoltage' class='form-control' type='text'{{#motorVoltage}} value='{{motorVoltage}}'{{/motorVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mechanismKind'>mechanismKind: </label><div class='col-sm-8'><select id='{{id}}_mechanismKind' class='form-control custom-select'>{{#mechanismKindOperatingMechanismKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/mechanismKindOperatingMechanismKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OperatingMechanismInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_closeVoltage").value; if ("" !== temp) obj["closeVoltage"] = temp;
                temp = document.getElementById (id + "_tripVoltage").value; if ("" !== temp) obj["tripVoltage"] = temp;
                temp = document.getElementById (id + "_closeAmps").value; if ("" !== temp) obj["closeAmps"] = temp;
                temp = document.getElementById (id + "_tripAmps").value; if ("" !== temp) obj["tripAmps"] = temp;
                temp = document.getElementById (id + "_motorStartCurrent").value; if ("" !== temp) obj["motorStartCurrent"] = temp;
                temp = document.getElementById (id + "_motorRunCurrent").value; if ("" !== temp) obj["motorRunCurrent"] = temp;
                temp = document.getElementById (id + "_motorVoltage").value; if ("" !== temp) obj["motorVoltage"] = temp;
                temp = OperatingMechanismKind[document.getElementById (id + "_mechanismKind").value]; if (temp) obj["mechanismKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#OperatingMechanismKind." + temp; else delete obj["mechanismKind"];

                return (obj);
            }
        }

        /**
         * Identification, spacing and configuration of the wires of a conductor with respect to a structure.
         *
         */
        class WirePosition extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WirePosition;
                if (null == bucket)
                   cim_data.WirePosition = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WirePosition[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WirePosition";
                base.parse_element (/<cim:WirePosition.xCoord>([\s\S]*?)<\/cim:WirePosition.xCoord>/g, obj, "xCoord", base.to_string, sub, context);
                base.parse_element (/<cim:WirePosition.yCoord>([\s\S]*?)<\/cim:WirePosition.yCoord>/g, obj, "yCoord", base.to_string, sub, context);
                base.parse_attribute (/<cim:WirePosition.WireSpacingInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WireSpacingInfo", sub, context);
                base.parse_attributes (/<cim:WirePosition.WirePhaseInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WirePhaseInfo", sub, context);
                let bucket = context.parsed.WirePosition;
                if (null == bucket)
                   context.parsed.WirePosition = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WirePosition", "xCoord", "xCoord",  base.from_string, fields);
                base.export_element (obj, "WirePosition", "yCoord", "yCoord",  base.from_string, fields);
                base.export_attribute (obj, "WirePosition", "WireSpacingInfo", "WireSpacingInfo", fields);
                base.export_attributes (obj, "WirePosition", "WirePhaseInfo", "WirePhaseInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WirePosition_collapse" aria-expanded="true" aria-controls="WirePosition_collapse" style="margin-left: 10px;">WirePosition</a></legend>
                    <div id="WirePosition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#xCoord}}<div><b>xCoord</b>: {{xCoord}}</div>{{/xCoord}}
                    {{#yCoord}}<div><b>yCoord</b>: {{yCoord}}</div>{{/yCoord}}
                    {{#WireSpacingInfo}}<div><b>WireSpacingInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WireSpacingInfo}}");}); return false;'>{{WireSpacingInfo}}</a></div>{{/WireSpacingInfo}}
                    {{#WirePhaseInfo}}<div><b>WirePhaseInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WirePhaseInfo}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["WirePhaseInfo"]) obj["WirePhaseInfo_string"] = obj["WirePhaseInfo"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["WirePhaseInfo_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WirePosition_collapse" aria-expanded="true" aria-controls="{{id}}_WirePosition_collapse" style="margin-left: 10px;">WirePosition</a></legend>
                    <div id="{{id}}_WirePosition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xCoord'>xCoord: </label><div class='col-sm-8'><input id='{{id}}_xCoord' class='form-control' type='text'{{#xCoord}} value='{{xCoord}}'{{/xCoord}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_yCoord'>yCoord: </label><div class='col-sm-8'><input id='{{id}}_yCoord' class='form-control' type='text'{{#yCoord}} value='{{yCoord}}'{{/yCoord}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WireSpacingInfo'>WireSpacingInfo: </label><div class='col-sm-8'><input id='{{id}}_WireSpacingInfo' class='form-control' type='text'{{#WireSpacingInfo}} value='{{WireSpacingInfo}}'{{/WireSpacingInfo}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WirePosition" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_xCoord").value; if ("" !== temp) obj["xCoord"] = temp;
                temp = document.getElementById (id + "_yCoord").value; if ("" !== temp) obj["yCoord"] = temp;
                temp = document.getElementById (id + "_WireSpacingInfo").value; if ("" !== temp) obj["WireSpacingInfo"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WireSpacingInfo", "0..1", "1..*", "WireSpacing", "WirePositions"],
                            ["WirePhaseInfo", "0..*", "0..1", "WirePhaseInfo", "WirePosition"]
                        ]
                    )
                );
            }
        }

        /**
         * Interrupter datasheet information.
         *
         */
        class InterrupterUnitInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.InterrupterUnitInfo;
                if (null == bucket)
                   cim_data.InterrupterUnitInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InterrupterUnitInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "InterrupterUnitInfo";
                base.parse_attribute (/<cim:InterrupterUnitInfo.interruptingMedium\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "interruptingMedium", sub, context);
                let bucket = context.parsed.InterrupterUnitInfo;
                if (null == bucket)
                   context.parsed.InterrupterUnitInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "InterrupterUnitInfo", "interruptingMedium", "interruptingMedium", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InterrupterUnitInfo_collapse" aria-expanded="true" aria-controls="InterrupterUnitInfo_collapse" style="margin-left: 10px;">InterrupterUnitInfo</a></legend>
                    <div id="InterrupterUnitInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#interruptingMedium}}<div><b>interruptingMedium</b>: {{interruptingMedium}}</div>{{/interruptingMedium}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["interruptingMediumInterruptingMediumKind"] = [{ id: '', selected: (!obj["interruptingMedium"])}]; for (let property in InterruptingMediumKind) obj["interruptingMediumInterruptingMediumKind"].push ({ id: property, selected: obj["interruptingMedium"] && obj["interruptingMedium"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["interruptingMediumInterruptingMediumKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InterrupterUnitInfo_collapse" aria-expanded="true" aria-controls="{{id}}_InterrupterUnitInfo_collapse" style="margin-left: 10px;">InterrupterUnitInfo</a></legend>
                    <div id="{{id}}_InterrupterUnitInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_interruptingMedium'>interruptingMedium: </label><div class='col-sm-8'><select id='{{id}}_interruptingMedium' class='form-control custom-select'>{{#interruptingMediumInterruptingMediumKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/interruptingMediumInterruptingMediumKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "InterrupterUnitInfo" };
                super.submit (id, obj);
                temp = InterruptingMediumKind[document.getElementById (id + "_interruptingMedium").value]; if (temp) obj["interruptingMedium"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#InterruptingMediumKind." + temp; else delete obj["interruptingMedium"];

                return (obj);
            }
        }

        /**
         * Tap changer data.
         *
         */
        class TapChangerInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TapChangerInfo;
                if (null == bucket)
                   cim_data.TapChangerInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TapChangerInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "TapChangerInfo";
                base.parse_element (/<cim:TapChangerInfo.isTcul>([\s\S]*?)<\/cim:TapChangerInfo.isTcul>/g, obj, "isTcul", base.to_boolean, sub, context);
                base.parse_element (/<cim:TapChangerInfo.ptRatio>([\s\S]*?)<\/cim:TapChangerInfo.ptRatio>/g, obj, "ptRatio", base.to_float, sub, context);
                base.parse_element (/<cim:TapChangerInfo.ctRatio>([\s\S]*?)<\/cim:TapChangerInfo.ctRatio>/g, obj, "ctRatio", base.to_float, sub, context);
                base.parse_element (/<cim:TapChangerInfo.ctRating>([\s\S]*?)<\/cim:TapChangerInfo.ctRating>/g, obj, "ctRating", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerInfo.neutralU>([\s\S]*?)<\/cim:TapChangerInfo.neutralU>/g, obj, "neutralU", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerInfo.neutralStep>([\s\S]*?)<\/cim:TapChangerInfo.neutralStep>/g, obj, "neutralStep", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerInfo.highStep>([\s\S]*?)<\/cim:TapChangerInfo.highStep>/g, obj, "highStep", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerInfo.lowStep>([\s\S]*?)<\/cim:TapChangerInfo.lowStep>/g, obj, "lowStep", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerInfo.stepVoltageIncrement>([\s\S]*?)<\/cim:TapChangerInfo.stepVoltageIncrement>/g, obj, "stepVoltageIncrement", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerInfo.stepPhaseIncrement>([\s\S]*?)<\/cim:TapChangerInfo.stepPhaseIncrement>/g, obj, "stepPhaseIncrement", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerInfo.ratedVoltage>([\s\S]*?)<\/cim:TapChangerInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerInfo.ratedApparentPower>([\s\S]*?)<\/cim:TapChangerInfo.ratedApparentPower>/g, obj, "ratedApparentPower", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerInfo.ratedCurrent>([\s\S]*?)<\/cim:TapChangerInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerInfo.bil>([\s\S]*?)<\/cim:TapChangerInfo.bil>/g, obj, "bil", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerInfo.frequency>([\s\S]*?)<\/cim:TapChangerInfo.frequency>/g, obj, "frequency", base.to_string, sub, context);
                let bucket = context.parsed.TapChangerInfo;
                if (null == bucket)
                   context.parsed.TapChangerInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "TapChangerInfo", "isTcul", "isTcul",  base.from_boolean, fields);
                base.export_element (obj, "TapChangerInfo", "ptRatio", "ptRatio",  base.from_float, fields);
                base.export_element (obj, "TapChangerInfo", "ctRatio", "ctRatio",  base.from_float, fields);
                base.export_element (obj, "TapChangerInfo", "ctRating", "ctRating",  base.from_string, fields);
                base.export_element (obj, "TapChangerInfo", "neutralU", "neutralU",  base.from_string, fields);
                base.export_element (obj, "TapChangerInfo", "neutralStep", "neutralStep",  base.from_string, fields);
                base.export_element (obj, "TapChangerInfo", "highStep", "highStep",  base.from_string, fields);
                base.export_element (obj, "TapChangerInfo", "lowStep", "lowStep",  base.from_string, fields);
                base.export_element (obj, "TapChangerInfo", "stepVoltageIncrement", "stepVoltageIncrement",  base.from_string, fields);
                base.export_element (obj, "TapChangerInfo", "stepPhaseIncrement", "stepPhaseIncrement",  base.from_string, fields);
                base.export_element (obj, "TapChangerInfo", "ratedVoltage", "ratedVoltage",  base.from_string, fields);
                base.export_element (obj, "TapChangerInfo", "ratedApparentPower", "ratedApparentPower",  base.from_string, fields);
                base.export_element (obj, "TapChangerInfo", "ratedCurrent", "ratedCurrent",  base.from_string, fields);
                base.export_element (obj, "TapChangerInfo", "bil", "bil",  base.from_string, fields);
                base.export_element (obj, "TapChangerInfo", "frequency", "frequency",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TapChangerInfo_collapse" aria-expanded="true" aria-controls="TapChangerInfo_collapse" style="margin-left: 10px;">TapChangerInfo</a></legend>
                    <div id="TapChangerInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#isTcul}}<div><b>isTcul</b>: {{isTcul}}</div>{{/isTcul}}
                    {{#ptRatio}}<div><b>ptRatio</b>: {{ptRatio}}</div>{{/ptRatio}}
                    {{#ctRatio}}<div><b>ctRatio</b>: {{ctRatio}}</div>{{/ctRatio}}
                    {{#ctRating}}<div><b>ctRating</b>: {{ctRating}}</div>{{/ctRating}}
                    {{#neutralU}}<div><b>neutralU</b>: {{neutralU}}</div>{{/neutralU}}
                    {{#neutralStep}}<div><b>neutralStep</b>: {{neutralStep}}</div>{{/neutralStep}}
                    {{#highStep}}<div><b>highStep</b>: {{highStep}}</div>{{/highStep}}
                    {{#lowStep}}<div><b>lowStep</b>: {{lowStep}}</div>{{/lowStep}}
                    {{#stepVoltageIncrement}}<div><b>stepVoltageIncrement</b>: {{stepVoltageIncrement}}</div>{{/stepVoltageIncrement}}
                    {{#stepPhaseIncrement}}<div><b>stepPhaseIncrement</b>: {{stepPhaseIncrement}}</div>{{/stepPhaseIncrement}}
                    {{#ratedVoltage}}<div><b>ratedVoltage</b>: {{ratedVoltage}}</div>{{/ratedVoltage}}
                    {{#ratedApparentPower}}<div><b>ratedApparentPower</b>: {{ratedApparentPower}}</div>{{/ratedApparentPower}}
                    {{#ratedCurrent}}<div><b>ratedCurrent</b>: {{ratedCurrent}}</div>{{/ratedCurrent}}
                    {{#bil}}<div><b>bil</b>: {{bil}}</div>{{/bil}}
                    {{#frequency}}<div><b>frequency</b>: {{frequency}}</div>{{/frequency}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TapChangerInfo_collapse" aria-expanded="true" aria-controls="{{id}}_TapChangerInfo_collapse" style="margin-left: 10px;">TapChangerInfo</a></legend>
                    <div id="{{id}}_TapChangerInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isTcul'>isTcul: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isTcul' class='form-check-input' type='checkbox'{{#isTcul}} checked{{/isTcul}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ptRatio'>ptRatio: </label><div class='col-sm-8'><input id='{{id}}_ptRatio' class='form-control' type='text'{{#ptRatio}} value='{{ptRatio}}'{{/ptRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ctRatio'>ctRatio: </label><div class='col-sm-8'><input id='{{id}}_ctRatio' class='form-control' type='text'{{#ctRatio}} value='{{ctRatio}}'{{/ctRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ctRating'>ctRating: </label><div class='col-sm-8'><input id='{{id}}_ctRating' class='form-control' type='text'{{#ctRating}} value='{{ctRating}}'{{/ctRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_neutralU'>neutralU: </label><div class='col-sm-8'><input id='{{id}}_neutralU' class='form-control' type='text'{{#neutralU}} value='{{neutralU}}'{{/neutralU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_neutralStep'>neutralStep: </label><div class='col-sm-8'><input id='{{id}}_neutralStep' class='form-control' type='text'{{#neutralStep}} value='{{neutralStep}}'{{/neutralStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highStep'>highStep: </label><div class='col-sm-8'><input id='{{id}}_highStep' class='form-control' type='text'{{#highStep}} value='{{highStep}}'{{/highStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowStep'>lowStep: </label><div class='col-sm-8'><input id='{{id}}_lowStep' class='form-control' type='text'{{#lowStep}} value='{{lowStep}}'{{/lowStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stepVoltageIncrement'>stepVoltageIncrement: </label><div class='col-sm-8'><input id='{{id}}_stepVoltageIncrement' class='form-control' type='text'{{#stepVoltageIncrement}} value='{{stepVoltageIncrement}}'{{/stepVoltageIncrement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stepPhaseIncrement'>stepPhaseIncrement: </label><div class='col-sm-8'><input id='{{id}}_stepPhaseIncrement' class='form-control' type='text'{{#stepPhaseIncrement}} value='{{stepPhaseIncrement}}'{{/stepPhaseIncrement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedApparentPower'>ratedApparentPower: </label><div class='col-sm-8'><input id='{{id}}_ratedApparentPower' class='form-control' type='text'{{#ratedApparentPower}} value='{{ratedApparentPower}}'{{/ratedApparentPower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='{{id}}_ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bil'>bil: </label><div class='col-sm-8'><input id='{{id}}_bil' class='form-control' type='text'{{#bil}} value='{{bil}}'{{/bil}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_frequency'>frequency: </label><div class='col-sm-8'><input id='{{id}}_frequency' class='form-control' type='text'{{#frequency}} value='{{frequency}}'{{/frequency}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TapChangerInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isTcul").checked; if (temp) obj["isTcul"] = true;
                temp = document.getElementById (id + "_ptRatio").value; if ("" !== temp) obj["ptRatio"] = temp;
                temp = document.getElementById (id + "_ctRatio").value; if ("" !== temp) obj["ctRatio"] = temp;
                temp = document.getElementById (id + "_ctRating").value; if ("" !== temp) obj["ctRating"] = temp;
                temp = document.getElementById (id + "_neutralU").value; if ("" !== temp) obj["neutralU"] = temp;
                temp = document.getElementById (id + "_neutralStep").value; if ("" !== temp) obj["neutralStep"] = temp;
                temp = document.getElementById (id + "_highStep").value; if ("" !== temp) obj["highStep"] = temp;
                temp = document.getElementById (id + "_lowStep").value; if ("" !== temp) obj["lowStep"] = temp;
                temp = document.getElementById (id + "_stepVoltageIncrement").value; if ("" !== temp) obj["stepVoltageIncrement"] = temp;
                temp = document.getElementById (id + "_stepPhaseIncrement").value; if ("" !== temp) obj["stepPhaseIncrement"] = temp;
                temp = document.getElementById (id + "_ratedVoltage").value; if ("" !== temp) obj["ratedVoltage"] = temp;
                temp = document.getElementById (id + "_ratedApparentPower").value; if ("" !== temp) obj["ratedApparentPower"] = temp;
                temp = document.getElementById (id + "_ratedCurrent").value; if ("" !== temp) obj["ratedCurrent"] = temp;
                temp = document.getElementById (id + "_bil").value; if ("" !== temp) obj["bil"] = temp;
                temp = document.getElementById (id + "_frequency").value; if ("" !== temp) obj["frequency"] = temp;

                return (obj);
            }
        }

        /**
         * Set of power transformer data, from an equipment library.
         *
         */
        class PowerTransformerInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PowerTransformerInfo;
                if (null == bucket)
                   cim_data.PowerTransformerInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerTransformerInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "PowerTransformerInfo";
                base.parse_attributes (/<cim:PowerTransformerInfo.TransformerTankInfos\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransformerTankInfos", sub, context);
                let bucket = context.parsed.PowerTransformerInfo;
                if (null == bucket)
                   context.parsed.PowerTransformerInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "PowerTransformerInfo", "TransformerTankInfos", "TransformerTankInfos", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PowerTransformerInfo_collapse" aria-expanded="true" aria-controls="PowerTransformerInfo_collapse" style="margin-left: 10px;">PowerTransformerInfo</a></legend>
                    <div id="PowerTransformerInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#TransformerTankInfos}}<div><b>TransformerTankInfos</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TransformerTankInfos}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TransformerTankInfos"]) obj["TransformerTankInfos_string"] = obj["TransformerTankInfos"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TransformerTankInfos_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PowerTransformerInfo_collapse" aria-expanded="true" aria-controls="{{id}}_PowerTransformerInfo_collapse" style="margin-left: 10px;">PowerTransformerInfo</a></legend>
                    <div id="{{id}}_PowerTransformerInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "PowerTransformerInfo" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransformerTankInfos", "1..*", "1", "TransformerTankInfo", "PowerTransformerInfo"]
                        ]
                    )
                );
            }
        }

        /**
         * Wire spacing data that associates multiple wire positions with the line segment, and allows to calculate line segment impedances.
         *
         * Number of phases can be derived from the number of associated wire positions whose phase is not neutral.
         *
         */
        class WireSpacing extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WireSpacing;
                if (null == bucket)
                   cim_data.WireSpacing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WireSpacing[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WireSpacing";
                base.parse_element (/<cim:WireSpacing.isCable>([\s\S]*?)<\/cim:WireSpacing.isCable>/g, obj, "isCable", base.to_boolean, sub, context);
                base.parse_element (/<cim:WireSpacing.phaseWireCount>([\s\S]*?)<\/cim:WireSpacing.phaseWireCount>/g, obj, "phaseWireCount", base.to_string, sub, context);
                base.parse_element (/<cim:WireSpacing.phaseWireSpacing>([\s\S]*?)<\/cim:WireSpacing.phaseWireSpacing>/g, obj, "phaseWireSpacing", base.to_string, sub, context);
                base.parse_attribute (/<cim:WireSpacing.usage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "usage", sub, context);
                base.parse_attribute (/<cim:WireSpacing.DuctBank\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DuctBank", sub, context);
                base.parse_attributes (/<cim:WireSpacing.Structures\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Structures", sub, context);
                base.parse_attributes (/<cim:WireSpacing.WirePositions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WirePositions", sub, context);
                let bucket = context.parsed.WireSpacing;
                if (null == bucket)
                   context.parsed.WireSpacing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WireSpacing", "isCable", "isCable",  base.from_boolean, fields);
                base.export_element (obj, "WireSpacing", "phaseWireCount", "phaseWireCount",  base.from_string, fields);
                base.export_element (obj, "WireSpacing", "phaseWireSpacing", "phaseWireSpacing",  base.from_string, fields);
                base.export_attribute (obj, "WireSpacing", "usage", "usage", fields);
                base.export_attribute (obj, "WireSpacing", "DuctBank", "DuctBank", fields);
                base.export_attributes (obj, "WireSpacing", "Structures", "Structures", fields);
                base.export_attributes (obj, "WireSpacing", "WirePositions", "WirePositions", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WireSpacing_collapse" aria-expanded="true" aria-controls="WireSpacing_collapse" style="margin-left: 10px;">WireSpacing</a></legend>
                    <div id="WireSpacing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#isCable}}<div><b>isCable</b>: {{isCable}}</div>{{/isCable}}
                    {{#phaseWireCount}}<div><b>phaseWireCount</b>: {{phaseWireCount}}</div>{{/phaseWireCount}}
                    {{#phaseWireSpacing}}<div><b>phaseWireSpacing</b>: {{phaseWireSpacing}}</div>{{/phaseWireSpacing}}
                    {{#usage}}<div><b>usage</b>: {{usage}}</div>{{/usage}}
                    {{#DuctBank}}<div><b>DuctBank</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DuctBank}}");}); return false;'>{{DuctBank}}</a></div>{{/DuctBank}}
                    {{#Structures}}<div><b>Structures</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Structures}}
                    {{#WirePositions}}<div><b>WirePositions</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WirePositions}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["usageWireUsageKind"] = [{ id: '', selected: (!obj["usage"])}]; for (let property in WireUsageKind) obj["usageWireUsageKind"].push ({ id: property, selected: obj["usage"] && obj["usage"].endsWith ('.' + property)});
                if (obj["Structures"]) obj["Structures_string"] = obj["Structures"].join ();
                if (obj["WirePositions"]) obj["WirePositions_string"] = obj["WirePositions"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["usageWireUsageKind"];
                delete obj["Structures_string"];
                delete obj["WirePositions_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WireSpacing_collapse" aria-expanded="true" aria-controls="{{id}}_WireSpacing_collapse" style="margin-left: 10px;">WireSpacing</a></legend>
                    <div id="{{id}}_WireSpacing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isCable'>isCable: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isCable' class='form-check-input' type='checkbox'{{#isCable}} checked{{/isCable}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseWireCount'>phaseWireCount: </label><div class='col-sm-8'><input id='{{id}}_phaseWireCount' class='form-control' type='text'{{#phaseWireCount}} value='{{phaseWireCount}}'{{/phaseWireCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseWireSpacing'>phaseWireSpacing: </label><div class='col-sm-8'><input id='{{id}}_phaseWireSpacing' class='form-control' type='text'{{#phaseWireSpacing}} value='{{phaseWireSpacing}}'{{/phaseWireSpacing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_usage'>usage: </label><div class='col-sm-8'><select id='{{id}}_usage' class='form-control custom-select'>{{#usageWireUsageKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/usageWireUsageKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DuctBank'>DuctBank: </label><div class='col-sm-8'><input id='{{id}}_DuctBank' class='form-control' type='text'{{#DuctBank}} value='{{DuctBank}}'{{/DuctBank}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Structures'>Structures: </label><div class='col-sm-8'><input id='{{id}}_Structures' class='form-control' type='text'{{#Structures}} value='{{Structures_string}}'{{/Structures}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WireSpacing" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isCable").checked; if (temp) obj["isCable"] = true;
                temp = document.getElementById (id + "_phaseWireCount").value; if ("" !== temp) obj["phaseWireCount"] = temp;
                temp = document.getElementById (id + "_phaseWireSpacing").value; if ("" !== temp) obj["phaseWireSpacing"] = temp;
                temp = WireUsageKind[document.getElementById (id + "_usage").value]; if (temp) obj["usage"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#WireUsageKind." + temp; else delete obj["usage"];
                temp = document.getElementById (id + "_DuctBank").value; if ("" !== temp) obj["DuctBank"] = temp;
                temp = document.getElementById (id + "_Structures").value; if ("" !== temp) obj["Structures"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DuctBank", "0..1", "0..*", "DuctBank", "WireSpacingInfos"],
                            ["Structures", "0..*", "0..*", "Structure", "WireSpacingInfos"],
                            ["WirePositions", "1..*", "0..1", "WirePosition", "WireSpacingInfo"]
                        ]
                    )
                );
            }
        }

        /**
         * Set of transformer tank data, from an equipment library.
         *
         */
        class TransformerTankInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TransformerTankInfo;
                if (null == bucket)
                   cim_data.TransformerTankInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransformerTankInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerTankInfo";
                base.parse_attributes (/<cim:TransformerTankInfo.TransformerEndInfos\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEndInfos", sub, context);
                base.parse_attribute (/<cim:TransformerTankInfo.PowerTransformerInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PowerTransformerInfo", sub, context);
                let bucket = context.parsed.TransformerTankInfo;
                if (null == bucket)
                   context.parsed.TransformerTankInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "TransformerTankInfo", "TransformerEndInfos", "TransformerEndInfos", fields);
                base.export_attribute (obj, "TransformerTankInfo", "PowerTransformerInfo", "PowerTransformerInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransformerTankInfo_collapse" aria-expanded="true" aria-controls="TransformerTankInfo_collapse" style="margin-left: 10px;">TransformerTankInfo</a></legend>
                    <div id="TransformerTankInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#TransformerEndInfos}}<div><b>TransformerEndInfos</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TransformerEndInfos}}
                    {{#PowerTransformerInfo}}<div><b>PowerTransformerInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PowerTransformerInfo}}");}); return false;'>{{PowerTransformerInfo}}</a></div>{{/PowerTransformerInfo}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TransformerEndInfos"]) obj["TransformerEndInfos_string"] = obj["TransformerEndInfos"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TransformerEndInfos_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransformerTankInfo_collapse" aria-expanded="true" aria-controls="{{id}}_TransformerTankInfo_collapse" style="margin-left: 10px;">TransformerTankInfo</a></legend>
                    <div id="{{id}}_TransformerTankInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerTransformerInfo'>PowerTransformerInfo: </label><div class='col-sm-8'><input id='{{id}}_PowerTransformerInfo' class='form-control' type='text'{{#PowerTransformerInfo}} value='{{PowerTransformerInfo}}'{{/PowerTransformerInfo}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TransformerTankInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PowerTransformerInfo").value; if ("" !== temp) obj["PowerTransformerInfo"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransformerEndInfos", "1..*", "1", "TransformerEndInfo", "TransformerTankInfo"],
                            ["PowerTransformerInfo", "1", "1..*", "PowerTransformerInfo", "TransformerTankInfos"]
                        ]
                    )
                );
            }
        }

        /**
         * <was Switch data.>
         *
         * Switch datasheet information.
         *
         */
        class SwitchInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SwitchInfo;
                if (null == bucket)
                   cim_data.SwitchInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchInfo";
                base.parse_element (/<cim:SwitchInfo.ratedVoltage>([\s\S]*?)<\/cim:SwitchInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchInfo.ratedCurrent>([\s\S]*?)<\/cim:SwitchInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchInfo.breakingCapacity>([\s\S]*?)<\/cim:SwitchInfo.breakingCapacity>/g, obj, "breakingCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchInfo.isSinglePhase>([\s\S]*?)<\/cim:SwitchInfo.isSinglePhase>/g, obj, "isSinglePhase", base.to_boolean, sub, context);
                base.parse_element (/<cim:SwitchInfo.isUnganged>([\s\S]*?)<\/cim:SwitchInfo.isUnganged>/g, obj, "isUnganged", base.to_boolean, sub, context);
                base.parse_element (/<cim:SwitchInfo.ratedImpulseWithstandVoltage>([\s\S]*?)<\/cim:SwitchInfo.ratedImpulseWithstandVoltage>/g, obj, "ratedImpulseWithstandVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchInfo.ratedFrequency>([\s\S]*?)<\/cim:SwitchInfo.ratedFrequency>/g, obj, "ratedFrequency", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchInfo.ratedInterruptingTime>([\s\S]*?)<\/cim:SwitchInfo.ratedInterruptingTime>/g, obj, "ratedInterruptingTime", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchInfo.lowPressureAlarm>([\s\S]*?)<\/cim:SwitchInfo.lowPressureAlarm>/g, obj, "lowPressureAlarm", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchInfo.lowPressureLockOut>([\s\S]*?)<\/cim:SwitchInfo.lowPressureLockOut>/g, obj, "lowPressureLockOut", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchInfo.oilVolumePerTank>([\s\S]*?)<\/cim:SwitchInfo.oilVolumePerTank>/g, obj, "oilVolumePerTank", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchInfo.gasWeightPerTank>([\s\S]*?)<\/cim:SwitchInfo.gasWeightPerTank>/g, obj, "gasWeightPerTank", base.to_string, sub, context);
                let bucket = context.parsed.SwitchInfo;
                if (null == bucket)
                   context.parsed.SwitchInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "SwitchInfo", "ratedVoltage", "ratedVoltage",  base.from_string, fields);
                base.export_element (obj, "SwitchInfo", "ratedCurrent", "ratedCurrent",  base.from_string, fields);
                base.export_element (obj, "SwitchInfo", "breakingCapacity", "breakingCapacity",  base.from_string, fields);
                base.export_element (obj, "SwitchInfo", "isSinglePhase", "isSinglePhase",  base.from_boolean, fields);
                base.export_element (obj, "SwitchInfo", "isUnganged", "isUnganged",  base.from_boolean, fields);
                base.export_element (obj, "SwitchInfo", "ratedImpulseWithstandVoltage", "ratedImpulseWithstandVoltage",  base.from_string, fields);
                base.export_element (obj, "SwitchInfo", "ratedFrequency", "ratedFrequency",  base.from_string, fields);
                base.export_element (obj, "SwitchInfo", "ratedInterruptingTime", "ratedInterruptingTime",  base.from_string, fields);
                base.export_element (obj, "SwitchInfo", "lowPressureAlarm", "lowPressureAlarm",  base.from_string, fields);
                base.export_element (obj, "SwitchInfo", "lowPressureLockOut", "lowPressureLockOut",  base.from_string, fields);
                base.export_element (obj, "SwitchInfo", "oilVolumePerTank", "oilVolumePerTank",  base.from_string, fields);
                base.export_element (obj, "SwitchInfo", "gasWeightPerTank", "gasWeightPerTank",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchInfo_collapse" aria-expanded="true" aria-controls="SwitchInfo_collapse" style="margin-left: 10px;">SwitchInfo</a></legend>
                    <div id="SwitchInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#ratedVoltage}}<div><b>ratedVoltage</b>: {{ratedVoltage}}</div>{{/ratedVoltage}}
                    {{#ratedCurrent}}<div><b>ratedCurrent</b>: {{ratedCurrent}}</div>{{/ratedCurrent}}
                    {{#breakingCapacity}}<div><b>breakingCapacity</b>: {{breakingCapacity}}</div>{{/breakingCapacity}}
                    {{#isSinglePhase}}<div><b>isSinglePhase</b>: {{isSinglePhase}}</div>{{/isSinglePhase}}
                    {{#isUnganged}}<div><b>isUnganged</b>: {{isUnganged}}</div>{{/isUnganged}}
                    {{#ratedImpulseWithstandVoltage}}<div><b>ratedImpulseWithstandVoltage</b>: {{ratedImpulseWithstandVoltage}}</div>{{/ratedImpulseWithstandVoltage}}
                    {{#ratedFrequency}}<div><b>ratedFrequency</b>: {{ratedFrequency}}</div>{{/ratedFrequency}}
                    {{#ratedInterruptingTime}}<div><b>ratedInterruptingTime</b>: {{ratedInterruptingTime}}</div>{{/ratedInterruptingTime}}
                    {{#lowPressureAlarm}}<div><b>lowPressureAlarm</b>: {{lowPressureAlarm}}</div>{{/lowPressureAlarm}}
                    {{#lowPressureLockOut}}<div><b>lowPressureLockOut</b>: {{lowPressureLockOut}}</div>{{/lowPressureLockOut}}
                    {{#oilVolumePerTank}}<div><b>oilVolumePerTank</b>: {{oilVolumePerTank}}</div>{{/oilVolumePerTank}}
                    {{#gasWeightPerTank}}<div><b>gasWeightPerTank</b>: {{gasWeightPerTank}}</div>{{/gasWeightPerTank}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchInfo_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchInfo_collapse" style="margin-left: 10px;">SwitchInfo</a></legend>
                    <div id="{{id}}_SwitchInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='{{id}}_ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_breakingCapacity'>breakingCapacity: </label><div class='col-sm-8'><input id='{{id}}_breakingCapacity' class='form-control' type='text'{{#breakingCapacity}} value='{{breakingCapacity}}'{{/breakingCapacity}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isSinglePhase'>isSinglePhase: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isSinglePhase' class='form-check-input' type='checkbox'{{#isSinglePhase}} checked{{/isSinglePhase}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isUnganged'>isUnganged: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isUnganged' class='form-check-input' type='checkbox'{{#isUnganged}} checked{{/isUnganged}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedImpulseWithstandVoltage'>ratedImpulseWithstandVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedImpulseWithstandVoltage' class='form-control' type='text'{{#ratedImpulseWithstandVoltage}} value='{{ratedImpulseWithstandVoltage}}'{{/ratedImpulseWithstandVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedFrequency'>ratedFrequency: </label><div class='col-sm-8'><input id='{{id}}_ratedFrequency' class='form-control' type='text'{{#ratedFrequency}} value='{{ratedFrequency}}'{{/ratedFrequency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedInterruptingTime'>ratedInterruptingTime: </label><div class='col-sm-8'><input id='{{id}}_ratedInterruptingTime' class='form-control' type='text'{{#ratedInterruptingTime}} value='{{ratedInterruptingTime}}'{{/ratedInterruptingTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowPressureAlarm'>lowPressureAlarm: </label><div class='col-sm-8'><input id='{{id}}_lowPressureAlarm' class='form-control' type='text'{{#lowPressureAlarm}} value='{{lowPressureAlarm}}'{{/lowPressureAlarm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowPressureLockOut'>lowPressureLockOut: </label><div class='col-sm-8'><input id='{{id}}_lowPressureLockOut' class='form-control' type='text'{{#lowPressureLockOut}} value='{{lowPressureLockOut}}'{{/lowPressureLockOut}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oilVolumePerTank'>oilVolumePerTank: </label><div class='col-sm-8'><input id='{{id}}_oilVolumePerTank' class='form-control' type='text'{{#oilVolumePerTank}} value='{{oilVolumePerTank}}'{{/oilVolumePerTank}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gasWeightPerTank'>gasWeightPerTank: </label><div class='col-sm-8'><input id='{{id}}_gasWeightPerTank' class='form-control' type='text'{{#gasWeightPerTank}} value='{{gasWeightPerTank}}'{{/gasWeightPerTank}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SwitchInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ratedVoltage").value; if ("" !== temp) obj["ratedVoltage"] = temp;
                temp = document.getElementById (id + "_ratedCurrent").value; if ("" !== temp) obj["ratedCurrent"] = temp;
                temp = document.getElementById (id + "_breakingCapacity").value; if ("" !== temp) obj["breakingCapacity"] = temp;
                temp = document.getElementById (id + "_isSinglePhase").checked; if (temp) obj["isSinglePhase"] = true;
                temp = document.getElementById (id + "_isUnganged").checked; if (temp) obj["isUnganged"] = true;
                temp = document.getElementById (id + "_ratedImpulseWithstandVoltage").value; if ("" !== temp) obj["ratedImpulseWithstandVoltage"] = temp;
                temp = document.getElementById (id + "_ratedFrequency").value; if ("" !== temp) obj["ratedFrequency"] = temp;
                temp = document.getElementById (id + "_ratedInterruptingTime").value; if ("" !== temp) obj["ratedInterruptingTime"] = temp;
                temp = document.getElementById (id + "_lowPressureAlarm").value; if ("" !== temp) obj["lowPressureAlarm"] = temp;
                temp = document.getElementById (id + "_lowPressureLockOut").value; if ("" !== temp) obj["lowPressureLockOut"] = temp;
                temp = document.getElementById (id + "_oilVolumePerTank").value; if ("" !== temp) obj["oilVolumePerTank"] = temp;
                temp = document.getElementById (id + "_gasWeightPerTank").value; if ("" !== temp) obj["gasWeightPerTank"] = temp;

                return (obj);
            }
        }

        /**
         * Test result for transformer ends, such as short-circuit, open-circuit (excitation) or no-load test.
         *
         */
        class TransformerTest extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TransformerTest;
                if (null == bucket)
                   cim_data.TransformerTest = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransformerTest[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerTest";
                base.parse_element (/<cim:TransformerTest.basePower>([\s\S]*?)<\/cim:TransformerTest.basePower>/g, obj, "basePower", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerTest.temperature>([\s\S]*?)<\/cim:TransformerTest.temperature>/g, obj, "temperature", base.to_string, sub, context);
                let bucket = context.parsed.TransformerTest;
                if (null == bucket)
                   context.parsed.TransformerTest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransformerTest", "basePower", "basePower",  base.from_string, fields);
                base.export_element (obj, "TransformerTest", "temperature", "temperature",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransformerTest_collapse" aria-expanded="true" aria-controls="TransformerTest_collapse" style="margin-left: 10px;">TransformerTest</a></legend>
                    <div id="TransformerTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#basePower}}<div><b>basePower</b>: {{basePower}}</div>{{/basePower}}
                    {{#temperature}}<div><b>temperature</b>: {{temperature}}</div>{{/temperature}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransformerTest_collapse" aria-expanded="true" aria-controls="{{id}}_TransformerTest_collapse" style="margin-left: 10px;">TransformerTest</a></legend>
                    <div id="{{id}}_TransformerTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_basePower'>basePower: </label><div class='col-sm-8'><input id='{{id}}_basePower' class='form-control' type='text'{{#basePower}} value='{{basePower}}'{{/basePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_temperature'>temperature: </label><div class='col-sm-8'><input id='{{id}}_temperature' class='form-control' type='text'{{#temperature}} value='{{temperature}}'{{/temperature}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TransformerTest" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_basePower").value; if ("" !== temp) obj["basePower"] = temp;
                temp = document.getElementById (id + "_temperature").value; if ("" !== temp) obj["temperature"] = temp;

                return (obj);
            }
        }

        /**
         * Properties of shunt capacitor, shunt reactor or switchable bank of shunt capacitor or reactor assets.
         *
         */
        class ShuntCompensatorInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ShuntCompensatorInfo;
                if (null == bucket)
                   cim_data.ShuntCompensatorInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ShuntCompensatorInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "ShuntCompensatorInfo";
                base.parse_element (/<cim:ShuntCompensatorInfo.ratedVoltage>([\s\S]*?)<\/cim:ShuntCompensatorInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorInfo.ratedCurrent>([\s\S]*?)<\/cim:ShuntCompensatorInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorInfo.ratedReactivePower>([\s\S]*?)<\/cim:ShuntCompensatorInfo.ratedReactivePower>/g, obj, "ratedReactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorInfo.maxPowerLoss>([\s\S]*?)<\/cim:ShuntCompensatorInfo.maxPowerLoss>/g, obj, "maxPowerLoss", base.to_string, sub, context);
                base.parse_attribute (/<cim:ShuntCompensatorInfo.ShuntCompensatorControl\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensatorControl", sub, context);
                let bucket = context.parsed.ShuntCompensatorInfo;
                if (null == bucket)
                   context.parsed.ShuntCompensatorInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "ShuntCompensatorInfo", "ratedVoltage", "ratedVoltage",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorInfo", "ratedCurrent", "ratedCurrent",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorInfo", "ratedReactivePower", "ratedReactivePower",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorInfo", "maxPowerLoss", "maxPowerLoss",  base.from_string, fields);
                base.export_attribute (obj, "ShuntCompensatorInfo", "ShuntCompensatorControl", "ShuntCompensatorControl", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ShuntCompensatorInfo_collapse" aria-expanded="true" aria-controls="ShuntCompensatorInfo_collapse" style="margin-left: 10px;">ShuntCompensatorInfo</a></legend>
                    <div id="ShuntCompensatorInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#ratedVoltage}}<div><b>ratedVoltage</b>: {{ratedVoltage}}</div>{{/ratedVoltage}}
                    {{#ratedCurrent}}<div><b>ratedCurrent</b>: {{ratedCurrent}}</div>{{/ratedCurrent}}
                    {{#ratedReactivePower}}<div><b>ratedReactivePower</b>: {{ratedReactivePower}}</div>{{/ratedReactivePower}}
                    {{#maxPowerLoss}}<div><b>maxPowerLoss</b>: {{maxPowerLoss}}</div>{{/maxPowerLoss}}
                    {{#ShuntCompensatorControl}}<div><b>ShuntCompensatorControl</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ShuntCompensatorControl}}");}); return false;'>{{ShuntCompensatorControl}}</a></div>{{/ShuntCompensatorControl}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ShuntCompensatorInfo_collapse" aria-expanded="true" aria-controls="{{id}}_ShuntCompensatorInfo_collapse" style="margin-left: 10px;">ShuntCompensatorInfo</a></legend>
                    <div id="{{id}}_ShuntCompensatorInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='{{id}}_ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedReactivePower'>ratedReactivePower: </label><div class='col-sm-8'><input id='{{id}}_ratedReactivePower' class='form-control' type='text'{{#ratedReactivePower}} value='{{ratedReactivePower}}'{{/ratedReactivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxPowerLoss'>maxPowerLoss: </label><div class='col-sm-8'><input id='{{id}}_maxPowerLoss' class='form-control' type='text'{{#maxPowerLoss}} value='{{maxPowerLoss}}'{{/maxPowerLoss}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ShuntCompensatorControl'>ShuntCompensatorControl: </label><div class='col-sm-8'><input id='{{id}}_ShuntCompensatorControl' class='form-control' type='text'{{#ShuntCompensatorControl}} value='{{ShuntCompensatorControl}}'{{/ShuntCompensatorControl}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ShuntCompensatorInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ratedVoltage").value; if ("" !== temp) obj["ratedVoltage"] = temp;
                temp = document.getElementById (id + "_ratedCurrent").value; if ("" !== temp) obj["ratedCurrent"] = temp;
                temp = document.getElementById (id + "_ratedReactivePower").value; if ("" !== temp) obj["ratedReactivePower"] = temp;
                temp = document.getElementById (id + "_maxPowerLoss").value; if ("" !== temp) obj["maxPowerLoss"] = temp;
                temp = document.getElementById (id + "_ShuntCompensatorControl").value; if ("" !== temp) obj["ShuntCompensatorControl"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ShuntCompensatorControl", "0..1", "0..1", "ShuntCompensatorControl", "ShuntCompensatorInfo"]
                        ]
                    )
                );
            }
        }

        /**
         * Describes the construction of a multi-conductor wire.<-NOTE: period missing.
         *
         */
        class WireAssemblyInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WireAssemblyInfo;
                if (null == bucket)
                   cim_data.WireAssemblyInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WireAssemblyInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "WireAssemblyInfo";
                base.parse_attributes (/<cim:WireAssemblyInfo.WirePhaseInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WirePhaseInfo", sub, context);
                base.parse_attributes (/<cim:WireAssemblyInfo.PerLengthLineParameter\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PerLengthLineParameter", sub, context);
                let bucket = context.parsed.WireAssemblyInfo;
                if (null == bucket)
                   context.parsed.WireAssemblyInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "WireAssemblyInfo", "WirePhaseInfo", "WirePhaseInfo", fields);
                base.export_attributes (obj, "WireAssemblyInfo", "PerLengthLineParameter", "PerLengthLineParameter", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WireAssemblyInfo_collapse" aria-expanded="true" aria-controls="WireAssemblyInfo_collapse" style="margin-left: 10px;">WireAssemblyInfo</a></legend>
                    <div id="WireAssemblyInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#WirePhaseInfo}}<div><b>WirePhaseInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WirePhaseInfo}}
                    {{#PerLengthLineParameter}}<div><b>PerLengthLineParameter</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PerLengthLineParameter}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["WirePhaseInfo"]) obj["WirePhaseInfo_string"] = obj["WirePhaseInfo"].join ();
                if (obj["PerLengthLineParameter"]) obj["PerLengthLineParameter_string"] = obj["PerLengthLineParameter"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["WirePhaseInfo_string"];
                delete obj["PerLengthLineParameter_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WireAssemblyInfo_collapse" aria-expanded="true" aria-controls="{{id}}_WireAssemblyInfo_collapse" style="margin-left: 10px;">WireAssemblyInfo</a></legend>
                    <div id="{{id}}_WireAssemblyInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "WireAssemblyInfo" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WirePhaseInfo", "0..*", "1", "WirePhaseInfo", "WireAssemblyInfo"],
                            ["PerLengthLineParameter", "0..*", "0..1", "PerLengthLineParameter", "WireAssemblyInfo"]
                        ]
                    )
                );
            }
        }

        /**
         * Busbar section data.
         *
         */
        class BusbarSectionInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BusbarSectionInfo;
                if (null == bucket)
                   cim_data.BusbarSectionInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BusbarSectionInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "BusbarSectionInfo";
                base.parse_element (/<cim:BusbarSectionInfo.ratedVoltage>([\s\S]*?)<\/cim:BusbarSectionInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:BusbarSectionInfo.ratedCurrent>([\s\S]*?)<\/cim:BusbarSectionInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
                let bucket = context.parsed.BusbarSectionInfo;
                if (null == bucket)
                   context.parsed.BusbarSectionInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "BusbarSectionInfo", "ratedVoltage", "ratedVoltage",  base.from_string, fields);
                base.export_element (obj, "BusbarSectionInfo", "ratedCurrent", "ratedCurrent",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BusbarSectionInfo_collapse" aria-expanded="true" aria-controls="BusbarSectionInfo_collapse" style="margin-left: 10px;">BusbarSectionInfo</a></legend>
                    <div id="BusbarSectionInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#ratedVoltage}}<div><b>ratedVoltage</b>: {{ratedVoltage}}</div>{{/ratedVoltage}}
                    {{#ratedCurrent}}<div><b>ratedCurrent</b>: {{ratedCurrent}}</div>{{/ratedCurrent}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BusbarSectionInfo_collapse" aria-expanded="true" aria-controls="{{id}}_BusbarSectionInfo_collapse" style="margin-left: 10px;">BusbarSectionInfo</a></legend>
                    <div id="{{id}}_BusbarSectionInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='{{id}}_ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BusbarSectionInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ratedVoltage").value; if ("" !== temp) obj["ratedVoltage"] = temp;
                temp = document.getElementById (id + "_ratedCurrent").value; if ("" !== temp) obj["ratedCurrent"] = temp;

                return (obj);
            }
        }

        /**
         * Transformer end data.
         *
         */
        class TransformerEndInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TransformerEndInfo;
                if (null == bucket)
                   cim_data.TransformerEndInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransformerEndInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerEndInfo";
                base.parse_element (/<cim:TransformerEndInfo.endNumber>([\s\S]*?)<\/cim:TransformerEndInfo.endNumber>/g, obj, "endNumber", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerEndInfo.phaseAngleClock>([\s\S]*?)<\/cim:TransformerEndInfo.phaseAngleClock>/g, obj, "phaseAngleClock", base.to_string, sub, context);
                base.parse_attribute (/<cim:TransformerEndInfo.connectionKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "connectionKind", sub, context);
                base.parse_element (/<cim:TransformerEndInfo.r>([\s\S]*?)<\/cim:TransformerEndInfo.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerEndInfo.ratedU>([\s\S]*?)<\/cim:TransformerEndInfo.ratedU>/g, obj, "ratedU", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerEndInfo.insulationU>([\s\S]*?)<\/cim:TransformerEndInfo.insulationU>/g, obj, "insulationU", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerEndInfo.ratedS>([\s\S]*?)<\/cim:TransformerEndInfo.ratedS>/g, obj, "ratedS", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerEndInfo.emergencyS>([\s\S]*?)<\/cim:TransformerEndInfo.emergencyS>/g, obj, "emergencyS", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerEndInfo.shortTermS>([\s\S]*?)<\/cim:TransformerEndInfo.shortTermS>/g, obj, "shortTermS", base.to_string, sub, context);
                base.parse_attributes (/<cim:TransformerEndInfo.FromMeshImpedances\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FromMeshImpedances", sub, context);
                base.parse_attributes (/<cim:TransformerEndInfo.OpenEndOpenCircuitTests\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OpenEndOpenCircuitTests", sub, context);
                base.parse_attribute (/<cim:TransformerEndInfo.CoreAdmittance\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CoreAdmittance", sub, context);
                base.parse_attributes (/<cim:TransformerEndInfo.ToMeshImpedances\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ToMeshImpedances", sub, context);
                base.parse_attribute (/<cim:TransformerEndInfo.TransformerStarImpedance\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransformerStarImpedance", sub, context);
                base.parse_attribute (/<cim:TransformerEndInfo.TransformerTankInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TransformerTankInfo", sub, context);
                base.parse_attributes (/<cim:TransformerEndInfo.EnergisedEndOpenCircuitTests\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergisedEndOpenCircuitTests", sub, context);
                base.parse_attributes (/<cim:TransformerEndInfo.EnergisedEndShortCircuitTests\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergisedEndShortCircuitTests", sub, context);
                base.parse_attributes (/<cim:TransformerEndInfo.EnergisedEndNoLoadTests\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergisedEndNoLoadTests", sub, context);
                base.parse_attributes (/<cim:TransformerEndInfo.GroundedEndShortCircuitTests\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GroundedEndShortCircuitTests", sub, context);
                let bucket = context.parsed.TransformerEndInfo;
                if (null == bucket)
                   context.parsed.TransformerEndInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransformerEndInfo", "endNumber", "endNumber",  base.from_string, fields);
                base.export_element (obj, "TransformerEndInfo", "phaseAngleClock", "phaseAngleClock",  base.from_string, fields);
                base.export_attribute (obj, "TransformerEndInfo", "connectionKind", "connectionKind", fields);
                base.export_element (obj, "TransformerEndInfo", "r", "r",  base.from_string, fields);
                base.export_element (obj, "TransformerEndInfo", "ratedU", "ratedU",  base.from_string, fields);
                base.export_element (obj, "TransformerEndInfo", "insulationU", "insulationU",  base.from_string, fields);
                base.export_element (obj, "TransformerEndInfo", "ratedS", "ratedS",  base.from_string, fields);
                base.export_element (obj, "TransformerEndInfo", "emergencyS", "emergencyS",  base.from_string, fields);
                base.export_element (obj, "TransformerEndInfo", "shortTermS", "shortTermS",  base.from_string, fields);
                base.export_attributes (obj, "TransformerEndInfo", "FromMeshImpedances", "FromMeshImpedances", fields);
                base.export_attributes (obj, "TransformerEndInfo", "OpenEndOpenCircuitTests", "OpenEndOpenCircuitTests", fields);
                base.export_attribute (obj, "TransformerEndInfo", "CoreAdmittance", "CoreAdmittance", fields);
                base.export_attributes (obj, "TransformerEndInfo", "ToMeshImpedances", "ToMeshImpedances", fields);
                base.export_attribute (obj, "TransformerEndInfo", "TransformerStarImpedance", "TransformerStarImpedance", fields);
                base.export_attribute (obj, "TransformerEndInfo", "TransformerTankInfo", "TransformerTankInfo", fields);
                base.export_attributes (obj, "TransformerEndInfo", "EnergisedEndOpenCircuitTests", "EnergisedEndOpenCircuitTests", fields);
                base.export_attributes (obj, "TransformerEndInfo", "EnergisedEndShortCircuitTests", "EnergisedEndShortCircuitTests", fields);
                base.export_attributes (obj, "TransformerEndInfo", "EnergisedEndNoLoadTests", "EnergisedEndNoLoadTests", fields);
                base.export_attributes (obj, "TransformerEndInfo", "GroundedEndShortCircuitTests", "GroundedEndShortCircuitTests", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransformerEndInfo_collapse" aria-expanded="true" aria-controls="TransformerEndInfo_collapse" style="margin-left: 10px;">TransformerEndInfo</a></legend>
                    <div id="TransformerEndInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#endNumber}}<div><b>endNumber</b>: {{endNumber}}</div>{{/endNumber}}
                    {{#phaseAngleClock}}<div><b>phaseAngleClock</b>: {{phaseAngleClock}}</div>{{/phaseAngleClock}}
                    {{#connectionKind}}<div><b>connectionKind</b>: {{connectionKind}}</div>{{/connectionKind}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#ratedU}}<div><b>ratedU</b>: {{ratedU}}</div>{{/ratedU}}
                    {{#insulationU}}<div><b>insulationU</b>: {{insulationU}}</div>{{/insulationU}}
                    {{#ratedS}}<div><b>ratedS</b>: {{ratedS}}</div>{{/ratedS}}
                    {{#emergencyS}}<div><b>emergencyS</b>: {{emergencyS}}</div>{{/emergencyS}}
                    {{#shortTermS}}<div><b>shortTermS</b>: {{shortTermS}}</div>{{/shortTermS}}
                    {{#FromMeshImpedances}}<div><b>FromMeshImpedances</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FromMeshImpedances}}
                    {{#OpenEndOpenCircuitTests}}<div><b>OpenEndOpenCircuitTests</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OpenEndOpenCircuitTests}}
                    {{#CoreAdmittance}}<div><b>CoreAdmittance</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CoreAdmittance}}");}); return false;'>{{CoreAdmittance}}</a></div>{{/CoreAdmittance}}
                    {{#ToMeshImpedances}}<div><b>ToMeshImpedances</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ToMeshImpedances}}
                    {{#TransformerStarImpedance}}<div><b>TransformerStarImpedance</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TransformerStarImpedance}}");}); return false;'>{{TransformerStarImpedance}}</a></div>{{/TransformerStarImpedance}}
                    {{#TransformerTankInfo}}<div><b>TransformerTankInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TransformerTankInfo}}");}); return false;'>{{TransformerTankInfo}}</a></div>{{/TransformerTankInfo}}
                    {{#EnergisedEndOpenCircuitTests}}<div><b>EnergisedEndOpenCircuitTests</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnergisedEndOpenCircuitTests}}
                    {{#EnergisedEndShortCircuitTests}}<div><b>EnergisedEndShortCircuitTests</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnergisedEndShortCircuitTests}}
                    {{#EnergisedEndNoLoadTests}}<div><b>EnergisedEndNoLoadTests</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnergisedEndNoLoadTests}}
                    {{#GroundedEndShortCircuitTests}}<div><b>GroundedEndShortCircuitTests</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/GroundedEndShortCircuitTests}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["connectionKindWindingConnection"] = [{ id: '', selected: (!obj["connectionKind"])}]; for (let property in Wires.WindingConnection) obj["connectionKindWindingConnection"].push ({ id: property, selected: obj["connectionKind"] && obj["connectionKind"].endsWith ('.' + property)});
                if (obj["FromMeshImpedances"]) obj["FromMeshImpedances_string"] = obj["FromMeshImpedances"].join ();
                if (obj["OpenEndOpenCircuitTests"]) obj["OpenEndOpenCircuitTests_string"] = obj["OpenEndOpenCircuitTests"].join ();
                if (obj["ToMeshImpedances"]) obj["ToMeshImpedances_string"] = obj["ToMeshImpedances"].join ();
                if (obj["EnergisedEndOpenCircuitTests"]) obj["EnergisedEndOpenCircuitTests_string"] = obj["EnergisedEndOpenCircuitTests"].join ();
                if (obj["EnergisedEndShortCircuitTests"]) obj["EnergisedEndShortCircuitTests_string"] = obj["EnergisedEndShortCircuitTests"].join ();
                if (obj["EnergisedEndNoLoadTests"]) obj["EnergisedEndNoLoadTests_string"] = obj["EnergisedEndNoLoadTests"].join ();
                if (obj["GroundedEndShortCircuitTests"]) obj["GroundedEndShortCircuitTests_string"] = obj["GroundedEndShortCircuitTests"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["connectionKindWindingConnection"];
                delete obj["FromMeshImpedances_string"];
                delete obj["OpenEndOpenCircuitTests_string"];
                delete obj["ToMeshImpedances_string"];
                delete obj["EnergisedEndOpenCircuitTests_string"];
                delete obj["EnergisedEndShortCircuitTests_string"];
                delete obj["EnergisedEndNoLoadTests_string"];
                delete obj["GroundedEndShortCircuitTests_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransformerEndInfo_collapse" aria-expanded="true" aria-controls="{{id}}_TransformerEndInfo_collapse" style="margin-left: 10px;">TransformerEndInfo</a></legend>
                    <div id="{{id}}_TransformerEndInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_endNumber'>endNumber: </label><div class='col-sm-8'><input id='{{id}}_endNumber' class='form-control' type='text'{{#endNumber}} value='{{endNumber}}'{{/endNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseAngleClock'>phaseAngleClock: </label><div class='col-sm-8'><input id='{{id}}_phaseAngleClock' class='form-control' type='text'{{#phaseAngleClock}} value='{{phaseAngleClock}}'{{/phaseAngleClock}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_connectionKind'>connectionKind: </label><div class='col-sm-8'><select id='{{id}}_connectionKind' class='form-control custom-select'>{{#connectionKindWindingConnection}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/connectionKindWindingConnection}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedU'>ratedU: </label><div class='col-sm-8'><input id='{{id}}_ratedU' class='form-control' type='text'{{#ratedU}} value='{{ratedU}}'{{/ratedU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_insulationU'>insulationU: </label><div class='col-sm-8'><input id='{{id}}_insulationU' class='form-control' type='text'{{#insulationU}} value='{{insulationU}}'{{/insulationU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedS'>ratedS: </label><div class='col-sm-8'><input id='{{id}}_ratedS' class='form-control' type='text'{{#ratedS}} value='{{ratedS}}'{{/ratedS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emergencyS'>emergencyS: </label><div class='col-sm-8'><input id='{{id}}_emergencyS' class='form-control' type='text'{{#emergencyS}} value='{{emergencyS}}'{{/emergencyS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shortTermS'>shortTermS: </label><div class='col-sm-8'><input id='{{id}}_shortTermS' class='form-control' type='text'{{#shortTermS}} value='{{shortTermS}}'{{/shortTermS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CoreAdmittance'>CoreAdmittance: </label><div class='col-sm-8'><input id='{{id}}_CoreAdmittance' class='form-control' type='text'{{#CoreAdmittance}} value='{{CoreAdmittance}}'{{/CoreAdmittance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ToMeshImpedances'>ToMeshImpedances: </label><div class='col-sm-8'><input id='{{id}}_ToMeshImpedances' class='form-control' type='text'{{#ToMeshImpedances}} value='{{ToMeshImpedances_string}}'{{/ToMeshImpedances}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransformerStarImpedance'>TransformerStarImpedance: </label><div class='col-sm-8'><input id='{{id}}_TransformerStarImpedance' class='form-control' type='text'{{#TransformerStarImpedance}} value='{{TransformerStarImpedance}}'{{/TransformerStarImpedance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransformerTankInfo'>TransformerTankInfo: </label><div class='col-sm-8'><input id='{{id}}_TransformerTankInfo' class='form-control' type='text'{{#TransformerTankInfo}} value='{{TransformerTankInfo}}'{{/TransformerTankInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GroundedEndShortCircuitTests'>GroundedEndShortCircuitTests: </label><div class='col-sm-8'><input id='{{id}}_GroundedEndShortCircuitTests' class='form-control' type='text'{{#GroundedEndShortCircuitTests}} value='{{GroundedEndShortCircuitTests_string}}'{{/GroundedEndShortCircuitTests}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TransformerEndInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_endNumber").value; if ("" !== temp) obj["endNumber"] = temp;
                temp = document.getElementById (id + "_phaseAngleClock").value; if ("" !== temp) obj["phaseAngleClock"] = temp;
                temp = Wires.WindingConnection[document.getElementById (id + "_connectionKind").value]; if (temp) obj["connectionKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#WindingConnection." + temp; else delete obj["connectionKind"];
                temp = document.getElementById (id + "_r").value; if ("" !== temp) obj["r"] = temp;
                temp = document.getElementById (id + "_ratedU").value; if ("" !== temp) obj["ratedU"] = temp;
                temp = document.getElementById (id + "_insulationU").value; if ("" !== temp) obj["insulationU"] = temp;
                temp = document.getElementById (id + "_ratedS").value; if ("" !== temp) obj["ratedS"] = temp;
                temp = document.getElementById (id + "_emergencyS").value; if ("" !== temp) obj["emergencyS"] = temp;
                temp = document.getElementById (id + "_shortTermS").value; if ("" !== temp) obj["shortTermS"] = temp;
                temp = document.getElementById (id + "_CoreAdmittance").value; if ("" !== temp) obj["CoreAdmittance"] = temp;
                temp = document.getElementById (id + "_ToMeshImpedances").value; if ("" !== temp) obj["ToMeshImpedances"] = temp.split (",");
                temp = document.getElementById (id + "_TransformerStarImpedance").value; if ("" !== temp) obj["TransformerStarImpedance"] = temp;
                temp = document.getElementById (id + "_TransformerTankInfo").value; if ("" !== temp) obj["TransformerTankInfo"] = temp;
                temp = document.getElementById (id + "_GroundedEndShortCircuitTests").value; if ("" !== temp) obj["GroundedEndShortCircuitTests"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["FromMeshImpedances", "0..*", "0..1", "TransformerMeshImpedance", "FromTransformerEndInfo"],
                            ["OpenEndOpenCircuitTests", "0..*", "1", "OpenCircuitTest", "OpenEnd"],
                            ["CoreAdmittance", "0..1", "0..1", "TransformerCoreAdmittance", "TransformerEndInfo"],
                            ["ToMeshImpedances", "0..*", "0..*", "TransformerMeshImpedance", "ToTransformerEndInfos"],
                            ["TransformerStarImpedance", "0..1", "0..1", "TransformerStarImpedance", "TransformerEndInfo"],
                            ["TransformerTankInfo", "1", "1..*", "TransformerTankInfo", "TransformerEndInfos"],
                            ["EnergisedEndOpenCircuitTests", "0..*", "1", "OpenCircuitTest", "EnergisedEnd"],
                            ["EnergisedEndShortCircuitTests", "0..*", "1", "ShortCircuitTest", "EnergisedEnd"],
                            ["EnergisedEndNoLoadTests", "0..*", "0..1", "NoLoadTest", "EnergisedEnd"],
                            ["GroundedEndShortCircuitTests", "0..*", "1..*", "ShortCircuitTest", "GroundedEnds"]
                        ]
                    )
                );
            }
        }

        /**
         * Bushing datasheet information.
         *
         */
        class BushingInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BushingInfo;
                if (null == bucket)
                   cim_data.BushingInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BushingInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "BushingInfo";
                base.parse_attribute (/<cim:BushingInfo.insulationKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "insulationKind", sub, context);
                base.parse_element (/<cim:BushingInfo.c1PowerFactor>([\s\S]*?)<\/cim:BushingInfo.c1PowerFactor>/g, obj, "c1PowerFactor", base.to_string, sub, context);
                base.parse_element (/<cim:BushingInfo.c2PowerFactor>([\s\S]*?)<\/cim:BushingInfo.c2PowerFactor>/g, obj, "c2PowerFactor", base.to_string, sub, context);
                base.parse_element (/<cim:BushingInfo.c1Capacitance>([\s\S]*?)<\/cim:BushingInfo.c1Capacitance>/g, obj, "c1Capacitance", base.to_string, sub, context);
                base.parse_element (/<cim:BushingInfo.c2Capacitance>([\s\S]*?)<\/cim:BushingInfo.c2Capacitance>/g, obj, "c2Capacitance", base.to_string, sub, context);
                base.parse_element (/<cim:BushingInfo.ratedVoltage>([\s\S]*?)<\/cim:BushingInfo.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:BushingInfo.ratedImpulseWithstandVoltage>([\s\S]*?)<\/cim:BushingInfo.ratedImpulseWithstandVoltage>/g, obj, "ratedImpulseWithstandVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:BushingInfo.ratedLineToGroundVoltage>([\s\S]*?)<\/cim:BushingInfo.ratedLineToGroundVoltage>/g, obj, "ratedLineToGroundVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:BushingInfo.ratedCurrent>([\s\S]*?)<\/cim:BushingInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
                let bucket = context.parsed.BushingInfo;
                if (null == bucket)
                   context.parsed.BushingInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "BushingInfo", "insulationKind", "insulationKind", fields);
                base.export_element (obj, "BushingInfo", "c1PowerFactor", "c1PowerFactor",  base.from_string, fields);
                base.export_element (obj, "BushingInfo", "c2PowerFactor", "c2PowerFactor",  base.from_string, fields);
                base.export_element (obj, "BushingInfo", "c1Capacitance", "c1Capacitance",  base.from_string, fields);
                base.export_element (obj, "BushingInfo", "c2Capacitance", "c2Capacitance",  base.from_string, fields);
                base.export_element (obj, "BushingInfo", "ratedVoltage", "ratedVoltage",  base.from_string, fields);
                base.export_element (obj, "BushingInfo", "ratedImpulseWithstandVoltage", "ratedImpulseWithstandVoltage",  base.from_string, fields);
                base.export_element (obj, "BushingInfo", "ratedLineToGroundVoltage", "ratedLineToGroundVoltage",  base.from_string, fields);
                base.export_element (obj, "BushingInfo", "ratedCurrent", "ratedCurrent",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BushingInfo_collapse" aria-expanded="true" aria-controls="BushingInfo_collapse" style="margin-left: 10px;">BushingInfo</a></legend>
                    <div id="BushingInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#insulationKind}}<div><b>insulationKind</b>: {{insulationKind}}</div>{{/insulationKind}}
                    {{#c1PowerFactor}}<div><b>c1PowerFactor</b>: {{c1PowerFactor}}</div>{{/c1PowerFactor}}
                    {{#c2PowerFactor}}<div><b>c2PowerFactor</b>: {{c2PowerFactor}}</div>{{/c2PowerFactor}}
                    {{#c1Capacitance}}<div><b>c1Capacitance</b>: {{c1Capacitance}}</div>{{/c1Capacitance}}
                    {{#c2Capacitance}}<div><b>c2Capacitance</b>: {{c2Capacitance}}</div>{{/c2Capacitance}}
                    {{#ratedVoltage}}<div><b>ratedVoltage</b>: {{ratedVoltage}}</div>{{/ratedVoltage}}
                    {{#ratedImpulseWithstandVoltage}}<div><b>ratedImpulseWithstandVoltage</b>: {{ratedImpulseWithstandVoltage}}</div>{{/ratedImpulseWithstandVoltage}}
                    {{#ratedLineToGroundVoltage}}<div><b>ratedLineToGroundVoltage</b>: {{ratedLineToGroundVoltage}}</div>{{/ratedLineToGroundVoltage}}
                    {{#ratedCurrent}}<div><b>ratedCurrent</b>: {{ratedCurrent}}</div>{{/ratedCurrent}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["insulationKindBushingInsulationKind"] = [{ id: '', selected: (!obj["insulationKind"])}]; for (let property in BushingInsulationKind) obj["insulationKindBushingInsulationKind"].push ({ id: property, selected: obj["insulationKind"] && obj["insulationKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["insulationKindBushingInsulationKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BushingInfo_collapse" aria-expanded="true" aria-controls="{{id}}_BushingInfo_collapse" style="margin-left: 10px;">BushingInfo</a></legend>
                    <div id="{{id}}_BushingInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_insulationKind'>insulationKind: </label><div class='col-sm-8'><select id='{{id}}_insulationKind' class='form-control custom-select'>{{#insulationKindBushingInsulationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/insulationKindBushingInsulationKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_c1PowerFactor'>c1PowerFactor: </label><div class='col-sm-8'><input id='{{id}}_c1PowerFactor' class='form-control' type='text'{{#c1PowerFactor}} value='{{c1PowerFactor}}'{{/c1PowerFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_c2PowerFactor'>c2PowerFactor: </label><div class='col-sm-8'><input id='{{id}}_c2PowerFactor' class='form-control' type='text'{{#c2PowerFactor}} value='{{c2PowerFactor}}'{{/c2PowerFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_c1Capacitance'>c1Capacitance: </label><div class='col-sm-8'><input id='{{id}}_c1Capacitance' class='form-control' type='text'{{#c1Capacitance}} value='{{c1Capacitance}}'{{/c1Capacitance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_c2Capacitance'>c2Capacitance: </label><div class='col-sm-8'><input id='{{id}}_c2Capacitance' class='form-control' type='text'{{#c2Capacitance}} value='{{c2Capacitance}}'{{/c2Capacitance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedImpulseWithstandVoltage'>ratedImpulseWithstandVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedImpulseWithstandVoltage' class='form-control' type='text'{{#ratedImpulseWithstandVoltage}} value='{{ratedImpulseWithstandVoltage}}'{{/ratedImpulseWithstandVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedLineToGroundVoltage'>ratedLineToGroundVoltage: </label><div class='col-sm-8'><input id='{{id}}_ratedLineToGroundVoltage' class='form-control' type='text'{{#ratedLineToGroundVoltage}} value='{{ratedLineToGroundVoltage}}'{{/ratedLineToGroundVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='{{id}}_ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BushingInfo" };
                super.submit (id, obj);
                temp = BushingInsulationKind[document.getElementById (id + "_insulationKind").value]; if (temp) obj["insulationKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#BushingInsulationKind." + temp; else delete obj["insulationKind"];
                temp = document.getElementById (id + "_c1PowerFactor").value; if ("" !== temp) obj["c1PowerFactor"] = temp;
                temp = document.getElementById (id + "_c2PowerFactor").value; if ("" !== temp) obj["c2PowerFactor"] = temp;
                temp = document.getElementById (id + "_c1Capacitance").value; if ("" !== temp) obj["c1Capacitance"] = temp;
                temp = document.getElementById (id + "_c2Capacitance").value; if ("" !== temp) obj["c2Capacitance"] = temp;
                temp = document.getElementById (id + "_ratedVoltage").value; if ("" !== temp) obj["ratedVoltage"] = temp;
                temp = document.getElementById (id + "_ratedImpulseWithstandVoltage").value; if ("" !== temp) obj["ratedImpulseWithstandVoltage"] = temp;
                temp = document.getElementById (id + "_ratedLineToGroundVoltage").value; if ("" !== temp) obj["ratedLineToGroundVoltage"] = temp;
                temp = document.getElementById (id + "_ratedCurrent").value; if ("" !== temp) obj["ratedCurrent"] = temp;

                return (obj);
            }
        }

        /**
         * Wire data that can be specified per line segment phase, or for the line segment as a whole in case its phases all have the same wire characteristics.
         *
         */
        class WireInfo extends Assets.AssetInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WireInfo;
                if (null == bucket)
                   cim_data.WireInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WireInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.AssetInfo.prototype.parse.call (this, context, sub);
                obj.cls = "WireInfo";
                base.parse_element (/<cim:WireInfo.insulated>([\s\S]*?)<\/cim:WireInfo.insulated>/g, obj, "insulated", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:WireInfo.insulationMaterial\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "insulationMaterial", sub, context);
                base.parse_element (/<cim:WireInfo.insulationThickness>([\s\S]*?)<\/cim:WireInfo.insulationThickness>/g, obj, "insulationThickness", base.to_string, sub, context);
                base.parse_attribute (/<cim:WireInfo.material\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "material", sub, context);
                base.parse_element (/<cim:WireInfo.sizeDescription>([\s\S]*?)<\/cim:WireInfo.sizeDescription>/g, obj, "sizeDescription", base.to_string, sub, context);
                base.parse_element (/<cim:WireInfo.radius>([\s\S]*?)<\/cim:WireInfo.radius>/g, obj, "radius", base.to_string, sub, context);
                base.parse_element (/<cim:WireInfo.strandCount>([\s\S]*?)<\/cim:WireInfo.strandCount>/g, obj, "strandCount", base.to_string, sub, context);
                base.parse_element (/<cim:WireInfo.coreRadius>([\s\S]*?)<\/cim:WireInfo.coreRadius>/g, obj, "coreRadius", base.to_string, sub, context);
                base.parse_element (/<cim:WireInfo.coreStrandCount>([\s\S]*?)<\/cim:WireInfo.coreStrandCount>/g, obj, "coreStrandCount", base.to_string, sub, context);
                base.parse_element (/<cim:WireInfo.gmr>([\s\S]*?)<\/cim:WireInfo.gmr>/g, obj, "gmr", base.to_string, sub, context);
                base.parse_element (/<cim:WireInfo.ratedCurrent>([\s\S]*?)<\/cim:WireInfo.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:WireInfo.rAC25>([\s\S]*?)<\/cim:WireInfo.rAC25>/g, obj, "rAC25", base.to_string, sub, context);
                base.parse_element (/<cim:WireInfo.rAC50>([\s\S]*?)<\/cim:WireInfo.rAC50>/g, obj, "rAC50", base.to_string, sub, context);
                base.parse_element (/<cim:WireInfo.rAC75>([\s\S]*?)<\/cim:WireInfo.rAC75>/g, obj, "rAC75", base.to_string, sub, context);
                base.parse_element (/<cim:WireInfo.rDC20>([\s\S]*?)<\/cim:WireInfo.rDC20>/g, obj, "rDC20", base.to_string, sub, context);
                base.parse_attributes (/<cim:WireInfo.WirePhaseInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WirePhaseInfo", sub, context);
                let bucket = context.parsed.WireInfo;
                if (null == bucket)
                   context.parsed.WireInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.AssetInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "WireInfo", "insulated", "insulated",  base.from_boolean, fields);
                base.export_attribute (obj, "WireInfo", "insulationMaterial", "insulationMaterial", fields);
                base.export_element (obj, "WireInfo", "insulationThickness", "insulationThickness",  base.from_string, fields);
                base.export_attribute (obj, "WireInfo", "material", "material", fields);
                base.export_element (obj, "WireInfo", "sizeDescription", "sizeDescription",  base.from_string, fields);
                base.export_element (obj, "WireInfo", "radius", "radius",  base.from_string, fields);
                base.export_element (obj, "WireInfo", "strandCount", "strandCount",  base.from_string, fields);
                base.export_element (obj, "WireInfo", "coreRadius", "coreRadius",  base.from_string, fields);
                base.export_element (obj, "WireInfo", "coreStrandCount", "coreStrandCount",  base.from_string, fields);
                base.export_element (obj, "WireInfo", "gmr", "gmr",  base.from_string, fields);
                base.export_element (obj, "WireInfo", "ratedCurrent", "ratedCurrent",  base.from_string, fields);
                base.export_element (obj, "WireInfo", "rAC25", "rAC25",  base.from_string, fields);
                base.export_element (obj, "WireInfo", "rAC50", "rAC50",  base.from_string, fields);
                base.export_element (obj, "WireInfo", "rAC75", "rAC75",  base.from_string, fields);
                base.export_element (obj, "WireInfo", "rDC20", "rDC20",  base.from_string, fields);
                base.export_attributes (obj, "WireInfo", "WirePhaseInfo", "WirePhaseInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WireInfo_collapse" aria-expanded="true" aria-controls="WireInfo_collapse" style="margin-left: 10px;">WireInfo</a></legend>
                    <div id="WireInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.template.call (this) +
                    `
                    {{#insulated}}<div><b>insulated</b>: {{insulated}}</div>{{/insulated}}
                    {{#insulationMaterial}}<div><b>insulationMaterial</b>: {{insulationMaterial}}</div>{{/insulationMaterial}}
                    {{#insulationThickness}}<div><b>insulationThickness</b>: {{insulationThickness}}</div>{{/insulationThickness}}
                    {{#material}}<div><b>material</b>: {{material}}</div>{{/material}}
                    {{#sizeDescription}}<div><b>sizeDescription</b>: {{sizeDescription}}</div>{{/sizeDescription}}
                    {{#radius}}<div><b>radius</b>: {{radius}}</div>{{/radius}}
                    {{#strandCount}}<div><b>strandCount</b>: {{strandCount}}</div>{{/strandCount}}
                    {{#coreRadius}}<div><b>coreRadius</b>: {{coreRadius}}</div>{{/coreRadius}}
                    {{#coreStrandCount}}<div><b>coreStrandCount</b>: {{coreStrandCount}}</div>{{/coreStrandCount}}
                    {{#gmr}}<div><b>gmr</b>: {{gmr}}</div>{{/gmr}}
                    {{#ratedCurrent}}<div><b>ratedCurrent</b>: {{ratedCurrent}}</div>{{/ratedCurrent}}
                    {{#rAC25}}<div><b>rAC25</b>: {{rAC25}}</div>{{/rAC25}}
                    {{#rAC50}}<div><b>rAC50</b>: {{rAC50}}</div>{{/rAC50}}
                    {{#rAC75}}<div><b>rAC75</b>: {{rAC75}}</div>{{/rAC75}}
                    {{#rDC20}}<div><b>rDC20</b>: {{rDC20}}</div>{{/rDC20}}
                    {{#WirePhaseInfo}}<div><b>WirePhaseInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WirePhaseInfo}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["insulationMaterialWireInsulationKind"] = [{ id: '', selected: (!obj["insulationMaterial"])}]; for (let property in WireInsulationKind) obj["insulationMaterialWireInsulationKind"].push ({ id: property, selected: obj["insulationMaterial"] && obj["insulationMaterial"].endsWith ('.' + property)});
                obj["materialWireMaterialKind"] = [{ id: '', selected: (!obj["material"])}]; for (let property in WireMaterialKind) obj["materialWireMaterialKind"].push ({ id: property, selected: obj["material"] && obj["material"].endsWith ('.' + property)});
                if (obj["WirePhaseInfo"]) obj["WirePhaseInfo_string"] = obj["WirePhaseInfo"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["insulationMaterialWireInsulationKind"];
                delete obj["materialWireMaterialKind"];
                delete obj["WirePhaseInfo_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WireInfo_collapse" aria-expanded="true" aria-controls="{{id}}_WireInfo_collapse" style="margin-left: 10px;">WireInfo</a></legend>
                    <div id="{{id}}_WireInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.AssetInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_insulated'>insulated: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_insulated' class='form-check-input' type='checkbox'{{#insulated}} checked{{/insulated}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_insulationMaterial'>insulationMaterial: </label><div class='col-sm-8'><select id='{{id}}_insulationMaterial' class='form-control custom-select'>{{#insulationMaterialWireInsulationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/insulationMaterialWireInsulationKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_insulationThickness'>insulationThickness: </label><div class='col-sm-8'><input id='{{id}}_insulationThickness' class='form-control' type='text'{{#insulationThickness}} value='{{insulationThickness}}'{{/insulationThickness}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_material'>material: </label><div class='col-sm-8'><select id='{{id}}_material' class='form-control custom-select'>{{#materialWireMaterialKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/materialWireMaterialKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sizeDescription'>sizeDescription: </label><div class='col-sm-8'><input id='{{id}}_sizeDescription' class='form-control' type='text'{{#sizeDescription}} value='{{sizeDescription}}'{{/sizeDescription}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_radius'>radius: </label><div class='col-sm-8'><input id='{{id}}_radius' class='form-control' type='text'{{#radius}} value='{{radius}}'{{/radius}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_strandCount'>strandCount: </label><div class='col-sm-8'><input id='{{id}}_strandCount' class='form-control' type='text'{{#strandCount}} value='{{strandCount}}'{{/strandCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coreRadius'>coreRadius: </label><div class='col-sm-8'><input id='{{id}}_coreRadius' class='form-control' type='text'{{#coreRadius}} value='{{coreRadius}}'{{/coreRadius}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coreStrandCount'>coreStrandCount: </label><div class='col-sm-8'><input id='{{id}}_coreStrandCount' class='form-control' type='text'{{#coreStrandCount}} value='{{coreStrandCount}}'{{/coreStrandCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gmr'>gmr: </label><div class='col-sm-8'><input id='{{id}}_gmr' class='form-control' type='text'{{#gmr}} value='{{gmr}}'{{/gmr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='{{id}}_ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rAC25'>rAC25: </label><div class='col-sm-8'><input id='{{id}}_rAC25' class='form-control' type='text'{{#rAC25}} value='{{rAC25}}'{{/rAC25}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rAC50'>rAC50: </label><div class='col-sm-8'><input id='{{id}}_rAC50' class='form-control' type='text'{{#rAC50}} value='{{rAC50}}'{{/rAC50}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rAC75'>rAC75: </label><div class='col-sm-8'><input id='{{id}}_rAC75' class='form-control' type='text'{{#rAC75}} value='{{rAC75}}'{{/rAC75}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rDC20'>rDC20: </label><div class='col-sm-8'><input id='{{id}}_rDC20' class='form-control' type='text'{{#rDC20}} value='{{rDC20}}'{{/rDC20}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WireInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_insulated").checked; if (temp) obj["insulated"] = true;
                temp = WireInsulationKind[document.getElementById (id + "_insulationMaterial").value]; if (temp) obj["insulationMaterial"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#WireInsulationKind." + temp; else delete obj["insulationMaterial"];
                temp = document.getElementById (id + "_insulationThickness").value; if ("" !== temp) obj["insulationThickness"] = temp;
                temp = WireMaterialKind[document.getElementById (id + "_material").value]; if (temp) obj["material"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#WireMaterialKind." + temp; else delete obj["material"];
                temp = document.getElementById (id + "_sizeDescription").value; if ("" !== temp) obj["sizeDescription"] = temp;
                temp = document.getElementById (id + "_radius").value; if ("" !== temp) obj["radius"] = temp;
                temp = document.getElementById (id + "_strandCount").value; if ("" !== temp) obj["strandCount"] = temp;
                temp = document.getElementById (id + "_coreRadius").value; if ("" !== temp) obj["coreRadius"] = temp;
                temp = document.getElementById (id + "_coreStrandCount").value; if ("" !== temp) obj["coreStrandCount"] = temp;
                temp = document.getElementById (id + "_gmr").value; if ("" !== temp) obj["gmr"] = temp;
                temp = document.getElementById (id + "_ratedCurrent").value; if ("" !== temp) obj["ratedCurrent"] = temp;
                temp = document.getElementById (id + "_rAC25").value; if ("" !== temp) obj["rAC25"] = temp;
                temp = document.getElementById (id + "_rAC50").value; if ("" !== temp) obj["rAC50"] = temp;
                temp = document.getElementById (id + "_rAC75").value; if ("" !== temp) obj["rAC75"] = temp;
                temp = document.getElementById (id + "_rDC20").value; if ("" !== temp) obj["rDC20"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WirePhaseInfo", "0..*", "0..1", "WirePhaseInfo", "WireInfo"]
                        ]
                    )
                );
            }
        }

        /**
         * No-load test results determine core admittance parameters.
         *
         * They include exciting current and core loss measurements from applying voltage to one winding. The excitation may be positive sequence or zero sequence. The test may be repeated at different voltages to measure saturation.
         *
         */
        class NoLoadTest extends TransformerTest
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.NoLoadTest;
                if (null == bucket)
                   cim_data.NoLoadTest = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NoLoadTest[obj.id];
            }

            parse (context, sub)
            {
                let obj = TransformerTest.prototype.parse.call (this, context, sub);
                obj.cls = "NoLoadTest";
                base.parse_element (/<cim:NoLoadTest.excitingCurrent>([\s\S]*?)<\/cim:NoLoadTest.excitingCurrent>/g, obj, "excitingCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:NoLoadTest.excitingCurrentZero>([\s\S]*?)<\/cim:NoLoadTest.excitingCurrentZero>/g, obj, "excitingCurrentZero", base.to_string, sub, context);
                base.parse_element (/<cim:NoLoadTest.loss>([\s\S]*?)<\/cim:NoLoadTest.loss>/g, obj, "loss", base.to_string, sub, context);
                base.parse_element (/<cim:NoLoadTest.lossZero>([\s\S]*?)<\/cim:NoLoadTest.lossZero>/g, obj, "lossZero", base.to_string, sub, context);
                base.parse_element (/<cim:NoLoadTest.energisedEndVoltage>([\s\S]*?)<\/cim:NoLoadTest.energisedEndVoltage>/g, obj, "energisedEndVoltage", base.to_string, sub, context);
                base.parse_attribute (/<cim:NoLoadTest.EnergisedEnd\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergisedEnd", sub, context);
                let bucket = context.parsed.NoLoadTest;
                if (null == bucket)
                   context.parsed.NoLoadTest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = TransformerTest.prototype.export.call (this, obj, false);

                base.export_element (obj, "NoLoadTest", "excitingCurrent", "excitingCurrent",  base.from_string, fields);
                base.export_element (obj, "NoLoadTest", "excitingCurrentZero", "excitingCurrentZero",  base.from_string, fields);
                base.export_element (obj, "NoLoadTest", "loss", "loss",  base.from_string, fields);
                base.export_element (obj, "NoLoadTest", "lossZero", "lossZero",  base.from_string, fields);
                base.export_element (obj, "NoLoadTest", "energisedEndVoltage", "energisedEndVoltage",  base.from_string, fields);
                base.export_attribute (obj, "NoLoadTest", "EnergisedEnd", "EnergisedEnd", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NoLoadTest_collapse" aria-expanded="true" aria-controls="NoLoadTest_collapse" style="margin-left: 10px;">NoLoadTest</a></legend>
                    <div id="NoLoadTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TransformerTest.prototype.template.call (this) +
                    `
                    {{#excitingCurrent}}<div><b>excitingCurrent</b>: {{excitingCurrent}}</div>{{/excitingCurrent}}
                    {{#excitingCurrentZero}}<div><b>excitingCurrentZero</b>: {{excitingCurrentZero}}</div>{{/excitingCurrentZero}}
                    {{#loss}}<div><b>loss</b>: {{loss}}</div>{{/loss}}
                    {{#lossZero}}<div><b>lossZero</b>: {{lossZero}}</div>{{/lossZero}}
                    {{#energisedEndVoltage}}<div><b>energisedEndVoltage</b>: {{energisedEndVoltage}}</div>{{/energisedEndVoltage}}
                    {{#EnergisedEnd}}<div><b>EnergisedEnd</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnergisedEnd}}");}); return false;'>{{EnergisedEnd}}</a></div>{{/EnergisedEnd}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NoLoadTest_collapse" aria-expanded="true" aria-controls="{{id}}_NoLoadTest_collapse" style="margin-left: 10px;">NoLoadTest</a></legend>
                    <div id="{{id}}_NoLoadTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TransformerTest.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_excitingCurrent'>excitingCurrent: </label><div class='col-sm-8'><input id='{{id}}_excitingCurrent' class='form-control' type='text'{{#excitingCurrent}} value='{{excitingCurrent}}'{{/excitingCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_excitingCurrentZero'>excitingCurrentZero: </label><div class='col-sm-8'><input id='{{id}}_excitingCurrentZero' class='form-control' type='text'{{#excitingCurrentZero}} value='{{excitingCurrentZero}}'{{/excitingCurrentZero}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loss'>loss: </label><div class='col-sm-8'><input id='{{id}}_loss' class='form-control' type='text'{{#loss}} value='{{loss}}'{{/loss}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lossZero'>lossZero: </label><div class='col-sm-8'><input id='{{id}}_lossZero' class='form-control' type='text'{{#lossZero}} value='{{lossZero}}'{{/lossZero}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energisedEndVoltage'>energisedEndVoltage: </label><div class='col-sm-8'><input id='{{id}}_energisedEndVoltage' class='form-control' type='text'{{#energisedEndVoltage}} value='{{energisedEndVoltage}}'{{/energisedEndVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergisedEnd'>EnergisedEnd: </label><div class='col-sm-8'><input id='{{id}}_EnergisedEnd' class='form-control' type='text'{{#EnergisedEnd}} value='{{EnergisedEnd}}'{{/EnergisedEnd}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "NoLoadTest" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_excitingCurrent").value; if ("" !== temp) obj["excitingCurrent"] = temp;
                temp = document.getElementById (id + "_excitingCurrentZero").value; if ("" !== temp) obj["excitingCurrentZero"] = temp;
                temp = document.getElementById (id + "_loss").value; if ("" !== temp) obj["loss"] = temp;
                temp = document.getElementById (id + "_lossZero").value; if ("" !== temp) obj["lossZero"] = temp;
                temp = document.getElementById (id + "_energisedEndVoltage").value; if ("" !== temp) obj["energisedEndVoltage"] = temp;
                temp = document.getElementById (id + "_EnergisedEnd").value; if ("" !== temp) obj["EnergisedEnd"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergisedEnd", "0..1", "0..*", "TransformerEndInfo", "EnergisedEndNoLoadTests"]
                        ]
                    )
                );
            }
        }

        /**
         * Short-circuit test results determine mesh impedance parameters.
         *
         * They include load losses and leakage impedances. For three-phase windings, the excitation can be a positive sequence (the default) or a zero sequence. There shall be at least one grounded winding.
         *
         */
        class ShortCircuitTest extends TransformerTest
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ShortCircuitTest;
                if (null == bucket)
                   cim_data.ShortCircuitTest = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ShortCircuitTest[obj.id];
            }

            parse (context, sub)
            {
                let obj = TransformerTest.prototype.parse.call (this, context, sub);
                obj.cls = "ShortCircuitTest";
                base.parse_element (/<cim:ShortCircuitTest.energisedEndStep>([\s\S]*?)<\/cim:ShortCircuitTest.energisedEndStep>/g, obj, "energisedEndStep", base.to_string, sub, context);
                base.parse_element (/<cim:ShortCircuitTest.groundedEndStep>([\s\S]*?)<\/cim:ShortCircuitTest.groundedEndStep>/g, obj, "groundedEndStep", base.to_string, sub, context);
                base.parse_element (/<cim:ShortCircuitTest.leakageImpedance>([\s\S]*?)<\/cim:ShortCircuitTest.leakageImpedance>/g, obj, "leakageImpedance", base.to_string, sub, context);
                base.parse_element (/<cim:ShortCircuitTest.leakageImpedanceZero>([\s\S]*?)<\/cim:ShortCircuitTest.leakageImpedanceZero>/g, obj, "leakageImpedanceZero", base.to_string, sub, context);
                base.parse_element (/<cim:ShortCircuitTest.loss>([\s\S]*?)<\/cim:ShortCircuitTest.loss>/g, obj, "loss", base.to_string, sub, context);
                base.parse_element (/<cim:ShortCircuitTest.lossZero>([\s\S]*?)<\/cim:ShortCircuitTest.lossZero>/g, obj, "lossZero", base.to_string, sub, context);
                base.parse_element (/<cim:ShortCircuitTest.voltage>([\s\S]*?)<\/cim:ShortCircuitTest.voltage>/g, obj, "voltage", base.to_string, sub, context);
                base.parse_element (/<cim:ShortCircuitTest.current>([\s\S]*?)<\/cim:ShortCircuitTest.current>/g, obj, "current", base.to_string, sub, context);
                base.parse_element (/<cim:ShortCircuitTest.power>([\s\S]*?)<\/cim:ShortCircuitTest.power>/g, obj, "power", base.to_string, sub, context);
                base.parse_attribute (/<cim:ShortCircuitTest.EnergisedEnd\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergisedEnd", sub, context);
                base.parse_attributes (/<cim:ShortCircuitTest.GroundedEnds\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GroundedEnds", sub, context);
                let bucket = context.parsed.ShortCircuitTest;
                if (null == bucket)
                   context.parsed.ShortCircuitTest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = TransformerTest.prototype.export.call (this, obj, false);

                base.export_element (obj, "ShortCircuitTest", "energisedEndStep", "energisedEndStep",  base.from_string, fields);
                base.export_element (obj, "ShortCircuitTest", "groundedEndStep", "groundedEndStep",  base.from_string, fields);
                base.export_element (obj, "ShortCircuitTest", "leakageImpedance", "leakageImpedance",  base.from_string, fields);
                base.export_element (obj, "ShortCircuitTest", "leakageImpedanceZero", "leakageImpedanceZero",  base.from_string, fields);
                base.export_element (obj, "ShortCircuitTest", "loss", "loss",  base.from_string, fields);
                base.export_element (obj, "ShortCircuitTest", "lossZero", "lossZero",  base.from_string, fields);
                base.export_element (obj, "ShortCircuitTest", "voltage", "voltage",  base.from_string, fields);
                base.export_element (obj, "ShortCircuitTest", "current", "current",  base.from_string, fields);
                base.export_element (obj, "ShortCircuitTest", "power", "power",  base.from_string, fields);
                base.export_attribute (obj, "ShortCircuitTest", "EnergisedEnd", "EnergisedEnd", fields);
                base.export_attributes (obj, "ShortCircuitTest", "GroundedEnds", "GroundedEnds", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ShortCircuitTest_collapse" aria-expanded="true" aria-controls="ShortCircuitTest_collapse" style="margin-left: 10px;">ShortCircuitTest</a></legend>
                    <div id="ShortCircuitTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TransformerTest.prototype.template.call (this) +
                    `
                    {{#energisedEndStep}}<div><b>energisedEndStep</b>: {{energisedEndStep}}</div>{{/energisedEndStep}}
                    {{#groundedEndStep}}<div><b>groundedEndStep</b>: {{groundedEndStep}}</div>{{/groundedEndStep}}
                    {{#leakageImpedance}}<div><b>leakageImpedance</b>: {{leakageImpedance}}</div>{{/leakageImpedance}}
                    {{#leakageImpedanceZero}}<div><b>leakageImpedanceZero</b>: {{leakageImpedanceZero}}</div>{{/leakageImpedanceZero}}
                    {{#loss}}<div><b>loss</b>: {{loss}}</div>{{/loss}}
                    {{#lossZero}}<div><b>lossZero</b>: {{lossZero}}</div>{{/lossZero}}
                    {{#voltage}}<div><b>voltage</b>: {{voltage}}</div>{{/voltage}}
                    {{#current}}<div><b>current</b>: {{current}}</div>{{/current}}
                    {{#power}}<div><b>power</b>: {{power}}</div>{{/power}}
                    {{#EnergisedEnd}}<div><b>EnergisedEnd</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnergisedEnd}}");}); return false;'>{{EnergisedEnd}}</a></div>{{/EnergisedEnd}}
                    {{#GroundedEnds}}<div><b>GroundedEnds</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/GroundedEnds}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["GroundedEnds"]) obj["GroundedEnds_string"] = obj["GroundedEnds"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["GroundedEnds_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ShortCircuitTest_collapse" aria-expanded="true" aria-controls="{{id}}_ShortCircuitTest_collapse" style="margin-left: 10px;">ShortCircuitTest</a></legend>
                    <div id="{{id}}_ShortCircuitTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TransformerTest.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energisedEndStep'>energisedEndStep: </label><div class='col-sm-8'><input id='{{id}}_energisedEndStep' class='form-control' type='text'{{#energisedEndStep}} value='{{energisedEndStep}}'{{/energisedEndStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_groundedEndStep'>groundedEndStep: </label><div class='col-sm-8'><input id='{{id}}_groundedEndStep' class='form-control' type='text'{{#groundedEndStep}} value='{{groundedEndStep}}'{{/groundedEndStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_leakageImpedance'>leakageImpedance: </label><div class='col-sm-8'><input id='{{id}}_leakageImpedance' class='form-control' type='text'{{#leakageImpedance}} value='{{leakageImpedance}}'{{/leakageImpedance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_leakageImpedanceZero'>leakageImpedanceZero: </label><div class='col-sm-8'><input id='{{id}}_leakageImpedanceZero' class='form-control' type='text'{{#leakageImpedanceZero}} value='{{leakageImpedanceZero}}'{{/leakageImpedanceZero}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loss'>loss: </label><div class='col-sm-8'><input id='{{id}}_loss' class='form-control' type='text'{{#loss}} value='{{loss}}'{{/loss}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lossZero'>lossZero: </label><div class='col-sm-8'><input id='{{id}}_lossZero' class='form-control' type='text'{{#lossZero}} value='{{lossZero}}'{{/lossZero}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_voltage'>voltage: </label><div class='col-sm-8'><input id='{{id}}_voltage' class='form-control' type='text'{{#voltage}} value='{{voltage}}'{{/voltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_current'>current: </label><div class='col-sm-8'><input id='{{id}}_current' class='form-control' type='text'{{#current}} value='{{current}}'{{/current}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_power'>power: </label><div class='col-sm-8'><input id='{{id}}_power' class='form-control' type='text'{{#power}} value='{{power}}'{{/power}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergisedEnd'>EnergisedEnd: </label><div class='col-sm-8'><input id='{{id}}_EnergisedEnd' class='form-control' type='text'{{#EnergisedEnd}} value='{{EnergisedEnd}}'{{/EnergisedEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GroundedEnds'>GroundedEnds: </label><div class='col-sm-8'><input id='{{id}}_GroundedEnds' class='form-control' type='text'{{#GroundedEnds}} value='{{GroundedEnds_string}}'{{/GroundedEnds}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ShortCircuitTest" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_energisedEndStep").value; if ("" !== temp) obj["energisedEndStep"] = temp;
                temp = document.getElementById (id + "_groundedEndStep").value; if ("" !== temp) obj["groundedEndStep"] = temp;
                temp = document.getElementById (id + "_leakageImpedance").value; if ("" !== temp) obj["leakageImpedance"] = temp;
                temp = document.getElementById (id + "_leakageImpedanceZero").value; if ("" !== temp) obj["leakageImpedanceZero"] = temp;
                temp = document.getElementById (id + "_loss").value; if ("" !== temp) obj["loss"] = temp;
                temp = document.getElementById (id + "_lossZero").value; if ("" !== temp) obj["lossZero"] = temp;
                temp = document.getElementById (id + "_voltage").value; if ("" !== temp) obj["voltage"] = temp;
                temp = document.getElementById (id + "_current").value; if ("" !== temp) obj["current"] = temp;
                temp = document.getElementById (id + "_power").value; if ("" !== temp) obj["power"] = temp;
                temp = document.getElementById (id + "_EnergisedEnd").value; if ("" !== temp) obj["EnergisedEnd"] = temp;
                temp = document.getElementById (id + "_GroundedEnds").value; if ("" !== temp) obj["GroundedEnds"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergisedEnd", "1", "0..*", "TransformerEndInfo", "EnergisedEndShortCircuitTests"],
                            ["GroundedEnds", "1..*", "0..*", "TransformerEndInfo", "GroundedEndShortCircuitTests"]
                        ]
                    )
                );
            }
        }

        /**
         * Open-circuit test results verify winding turn ratios and phase shifts.
         *
         * They include induced voltage and phase shift measurements on open-circuit windings, with voltage applied to the energised end. For three-phase windings, the excitation can be a positive sequence (the default) or a zero sequence.
         *
         */
        class OpenCircuitTest extends TransformerTest
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OpenCircuitTest;
                if (null == bucket)
                   cim_data.OpenCircuitTest = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OpenCircuitTest[obj.id];
            }

            parse (context, sub)
            {
                let obj = TransformerTest.prototype.parse.call (this, context, sub);
                obj.cls = "OpenCircuitTest";
                base.parse_element (/<cim:OpenCircuitTest.energisedEndStep>([\s\S]*?)<\/cim:OpenCircuitTest.energisedEndStep>/g, obj, "energisedEndStep", base.to_string, sub, context);
                base.parse_element (/<cim:OpenCircuitTest.openEndStep>([\s\S]*?)<\/cim:OpenCircuitTest.openEndStep>/g, obj, "openEndStep", base.to_string, sub, context);
                base.parse_element (/<cim:OpenCircuitTest.energisedEndVoltage>([\s\S]*?)<\/cim:OpenCircuitTest.energisedEndVoltage>/g, obj, "energisedEndVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:OpenCircuitTest.openEndVoltage>([\s\S]*?)<\/cim:OpenCircuitTest.openEndVoltage>/g, obj, "openEndVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:OpenCircuitTest.phaseShift>([\s\S]*?)<\/cim:OpenCircuitTest.phaseShift>/g, obj, "phaseShift", base.to_string, sub, context);
                base.parse_attribute (/<cim:OpenCircuitTest.OpenEnd\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OpenEnd", sub, context);
                base.parse_attribute (/<cim:OpenCircuitTest.EnergisedEnd\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergisedEnd", sub, context);
                let bucket = context.parsed.OpenCircuitTest;
                if (null == bucket)
                   context.parsed.OpenCircuitTest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = TransformerTest.prototype.export.call (this, obj, false);

                base.export_element (obj, "OpenCircuitTest", "energisedEndStep", "energisedEndStep",  base.from_string, fields);
                base.export_element (obj, "OpenCircuitTest", "openEndStep", "openEndStep",  base.from_string, fields);
                base.export_element (obj, "OpenCircuitTest", "energisedEndVoltage", "energisedEndVoltage",  base.from_string, fields);
                base.export_element (obj, "OpenCircuitTest", "openEndVoltage", "openEndVoltage",  base.from_string, fields);
                base.export_element (obj, "OpenCircuitTest", "phaseShift", "phaseShift",  base.from_string, fields);
                base.export_attribute (obj, "OpenCircuitTest", "OpenEnd", "OpenEnd", fields);
                base.export_attribute (obj, "OpenCircuitTest", "EnergisedEnd", "EnergisedEnd", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OpenCircuitTest_collapse" aria-expanded="true" aria-controls="OpenCircuitTest_collapse" style="margin-left: 10px;">OpenCircuitTest</a></legend>
                    <div id="OpenCircuitTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TransformerTest.prototype.template.call (this) +
                    `
                    {{#energisedEndStep}}<div><b>energisedEndStep</b>: {{energisedEndStep}}</div>{{/energisedEndStep}}
                    {{#openEndStep}}<div><b>openEndStep</b>: {{openEndStep}}</div>{{/openEndStep}}
                    {{#energisedEndVoltage}}<div><b>energisedEndVoltage</b>: {{energisedEndVoltage}}</div>{{/energisedEndVoltage}}
                    {{#openEndVoltage}}<div><b>openEndVoltage</b>: {{openEndVoltage}}</div>{{/openEndVoltage}}
                    {{#phaseShift}}<div><b>phaseShift</b>: {{phaseShift}}</div>{{/phaseShift}}
                    {{#OpenEnd}}<div><b>OpenEnd</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OpenEnd}}");}); return false;'>{{OpenEnd}}</a></div>{{/OpenEnd}}
                    {{#EnergisedEnd}}<div><b>EnergisedEnd</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnergisedEnd}}");}); return false;'>{{EnergisedEnd}}</a></div>{{/EnergisedEnd}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OpenCircuitTest_collapse" aria-expanded="true" aria-controls="{{id}}_OpenCircuitTest_collapse" style="margin-left: 10px;">OpenCircuitTest</a></legend>
                    <div id="{{id}}_OpenCircuitTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TransformerTest.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energisedEndStep'>energisedEndStep: </label><div class='col-sm-8'><input id='{{id}}_energisedEndStep' class='form-control' type='text'{{#energisedEndStep}} value='{{energisedEndStep}}'{{/energisedEndStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_openEndStep'>openEndStep: </label><div class='col-sm-8'><input id='{{id}}_openEndStep' class='form-control' type='text'{{#openEndStep}} value='{{openEndStep}}'{{/openEndStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_energisedEndVoltage'>energisedEndVoltage: </label><div class='col-sm-8'><input id='{{id}}_energisedEndVoltage' class='form-control' type='text'{{#energisedEndVoltage}} value='{{energisedEndVoltage}}'{{/energisedEndVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_openEndVoltage'>openEndVoltage: </label><div class='col-sm-8'><input id='{{id}}_openEndVoltage' class='form-control' type='text'{{#openEndVoltage}} value='{{openEndVoltage}}'{{/openEndVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseShift'>phaseShift: </label><div class='col-sm-8'><input id='{{id}}_phaseShift' class='form-control' type='text'{{#phaseShift}} value='{{phaseShift}}'{{/phaseShift}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OpenEnd'>OpenEnd: </label><div class='col-sm-8'><input id='{{id}}_OpenEnd' class='form-control' type='text'{{#OpenEnd}} value='{{OpenEnd}}'{{/OpenEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergisedEnd'>EnergisedEnd: </label><div class='col-sm-8'><input id='{{id}}_EnergisedEnd' class='form-control' type='text'{{#EnergisedEnd}} value='{{EnergisedEnd}}'{{/EnergisedEnd}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OpenCircuitTest" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_energisedEndStep").value; if ("" !== temp) obj["energisedEndStep"] = temp;
                temp = document.getElementById (id + "_openEndStep").value; if ("" !== temp) obj["openEndStep"] = temp;
                temp = document.getElementById (id + "_energisedEndVoltage").value; if ("" !== temp) obj["energisedEndVoltage"] = temp;
                temp = document.getElementById (id + "_openEndVoltage").value; if ("" !== temp) obj["openEndVoltage"] = temp;
                temp = document.getElementById (id + "_phaseShift").value; if ("" !== temp) obj["phaseShift"] = temp;
                temp = document.getElementById (id + "_OpenEnd").value; if ("" !== temp) obj["OpenEnd"] = temp;
                temp = document.getElementById (id + "_EnergisedEnd").value; if ("" !== temp) obj["EnergisedEnd"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OpenEnd", "1", "0..*", "TransformerEndInfo", "OpenEndOpenCircuitTests"],
                            ["EnergisedEnd", "1", "0..*", "TransformerEndInfo", "EnergisedEndOpenCircuitTests"]
                        ]
                    )
                );
            }
        }

        /**
         * Cable data.
         *
         */
        class CableInfo extends WireInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CableInfo;
                if (null == bucket)
                   cim_data.CableInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CableInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = WireInfo.prototype.parse.call (this, context, sub);
                obj.cls = "CableInfo";
                base.parse_attribute (/<cim:CableInfo.constructionKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "constructionKind", sub, context);
                base.parse_element (/<cim:CableInfo.diameterOverCore>([\s\S]*?)<\/cim:CableInfo.diameterOverCore>/g, obj, "diameterOverCore", base.to_string, sub, context);
                base.parse_element (/<cim:CableInfo.diameterOverInsulation>([\s\S]*?)<\/cim:CableInfo.diameterOverInsulation>/g, obj, "diameterOverInsulation", base.to_string, sub, context);
                base.parse_element (/<cim:CableInfo.diameterOverJacket>([\s\S]*?)<\/cim:CableInfo.diameterOverJacket>/g, obj, "diameterOverJacket", base.to_string, sub, context);
                base.parse_element (/<cim:CableInfo.diameterOverScreen>([\s\S]*?)<\/cim:CableInfo.diameterOverScreen>/g, obj, "diameterOverScreen", base.to_string, sub, context);
                base.parse_element (/<cim:CableInfo.nominalTemperature>([\s\S]*?)<\/cim:CableInfo.nominalTemperature>/g, obj, "nominalTemperature", base.to_string, sub, context);
                base.parse_attribute (/<cim:CableInfo.outerJacketKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "outerJacketKind", sub, context);
                base.parse_element (/<cim:CableInfo.sheathAsNeutral>([\s\S]*?)<\/cim:CableInfo.sheathAsNeutral>/g, obj, "sheathAsNeutral", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:CableInfo.shieldMaterial\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "shieldMaterial", sub, context);
                base.parse_element (/<cim:CableInfo.isStrandFill>([\s\S]*?)<\/cim:CableInfo.isStrandFill>/g, obj, "isStrandFill", base.to_boolean, sub, context);
                let bucket = context.parsed.CableInfo;
                if (null == bucket)
                   context.parsed.CableInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WireInfo.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CableInfo", "constructionKind", "constructionKind", fields);
                base.export_element (obj, "CableInfo", "diameterOverCore", "diameterOverCore",  base.from_string, fields);
                base.export_element (obj, "CableInfo", "diameterOverInsulation", "diameterOverInsulation",  base.from_string, fields);
                base.export_element (obj, "CableInfo", "diameterOverJacket", "diameterOverJacket",  base.from_string, fields);
                base.export_element (obj, "CableInfo", "diameterOverScreen", "diameterOverScreen",  base.from_string, fields);
                base.export_element (obj, "CableInfo", "nominalTemperature", "nominalTemperature",  base.from_string, fields);
                base.export_attribute (obj, "CableInfo", "outerJacketKind", "outerJacketKind", fields);
                base.export_element (obj, "CableInfo", "sheathAsNeutral", "sheathAsNeutral",  base.from_boolean, fields);
                base.export_attribute (obj, "CableInfo", "shieldMaterial", "shieldMaterial", fields);
                base.export_element (obj, "CableInfo", "isStrandFill", "isStrandFill",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CableInfo_collapse" aria-expanded="true" aria-controls="CableInfo_collapse" style="margin-left: 10px;">CableInfo</a></legend>
                    <div id="CableInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WireInfo.prototype.template.call (this) +
                    `
                    {{#constructionKind}}<div><b>constructionKind</b>: {{constructionKind}}</div>{{/constructionKind}}
                    {{#diameterOverCore}}<div><b>diameterOverCore</b>: {{diameterOverCore}}</div>{{/diameterOverCore}}
                    {{#diameterOverInsulation}}<div><b>diameterOverInsulation</b>: {{diameterOverInsulation}}</div>{{/diameterOverInsulation}}
                    {{#diameterOverJacket}}<div><b>diameterOverJacket</b>: {{diameterOverJacket}}</div>{{/diameterOverJacket}}
                    {{#diameterOverScreen}}<div><b>diameterOverScreen</b>: {{diameterOverScreen}}</div>{{/diameterOverScreen}}
                    {{#nominalTemperature}}<div><b>nominalTemperature</b>: {{nominalTemperature}}</div>{{/nominalTemperature}}
                    {{#outerJacketKind}}<div><b>outerJacketKind</b>: {{outerJacketKind}}</div>{{/outerJacketKind}}
                    {{#sheathAsNeutral}}<div><b>sheathAsNeutral</b>: {{sheathAsNeutral}}</div>{{/sheathAsNeutral}}
                    {{#shieldMaterial}}<div><b>shieldMaterial</b>: {{shieldMaterial}}</div>{{/shieldMaterial}}
                    {{#isStrandFill}}<div><b>isStrandFill</b>: {{isStrandFill}}</div>{{/isStrandFill}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["constructionKindCableConstructionKind"] = [{ id: '', selected: (!obj["constructionKind"])}]; for (let property in CableConstructionKind) obj["constructionKindCableConstructionKind"].push ({ id: property, selected: obj["constructionKind"] && obj["constructionKind"].endsWith ('.' + property)});
                obj["outerJacketKindCableOuterJacketKind"] = [{ id: '', selected: (!obj["outerJacketKind"])}]; for (let property in CableOuterJacketKind) obj["outerJacketKindCableOuterJacketKind"].push ({ id: property, selected: obj["outerJacketKind"] && obj["outerJacketKind"].endsWith ('.' + property)});
                obj["shieldMaterialCableShieldMaterialKind"] = [{ id: '', selected: (!obj["shieldMaterial"])}]; for (let property in CableShieldMaterialKind) obj["shieldMaterialCableShieldMaterialKind"].push ({ id: property, selected: obj["shieldMaterial"] && obj["shieldMaterial"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["constructionKindCableConstructionKind"];
                delete obj["outerJacketKindCableOuterJacketKind"];
                delete obj["shieldMaterialCableShieldMaterialKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CableInfo_collapse" aria-expanded="true" aria-controls="{{id}}_CableInfo_collapse" style="margin-left: 10px;">CableInfo</a></legend>
                    <div id="{{id}}_CableInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WireInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_constructionKind'>constructionKind: </label><div class='col-sm-8'><select id='{{id}}_constructionKind' class='form-control custom-select'>{{#constructionKindCableConstructionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/constructionKindCableConstructionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_diameterOverCore'>diameterOverCore: </label><div class='col-sm-8'><input id='{{id}}_diameterOverCore' class='form-control' type='text'{{#diameterOverCore}} value='{{diameterOverCore}}'{{/diameterOverCore}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_diameterOverInsulation'>diameterOverInsulation: </label><div class='col-sm-8'><input id='{{id}}_diameterOverInsulation' class='form-control' type='text'{{#diameterOverInsulation}} value='{{diameterOverInsulation}}'{{/diameterOverInsulation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_diameterOverJacket'>diameterOverJacket: </label><div class='col-sm-8'><input id='{{id}}_diameterOverJacket' class='form-control' type='text'{{#diameterOverJacket}} value='{{diameterOverJacket}}'{{/diameterOverJacket}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_diameterOverScreen'>diameterOverScreen: </label><div class='col-sm-8'><input id='{{id}}_diameterOverScreen' class='form-control' type='text'{{#diameterOverScreen}} value='{{diameterOverScreen}}'{{/diameterOverScreen}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nominalTemperature'>nominalTemperature: </label><div class='col-sm-8'><input id='{{id}}_nominalTemperature' class='form-control' type='text'{{#nominalTemperature}} value='{{nominalTemperature}}'{{/nominalTemperature}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_outerJacketKind'>outerJacketKind: </label><div class='col-sm-8'><select id='{{id}}_outerJacketKind' class='form-control custom-select'>{{#outerJacketKindCableOuterJacketKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/outerJacketKindCableOuterJacketKind}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_sheathAsNeutral'>sheathAsNeutral: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_sheathAsNeutral' class='form-check-input' type='checkbox'{{#sheathAsNeutral}} checked{{/sheathAsNeutral}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shieldMaterial'>shieldMaterial: </label><div class='col-sm-8'><select id='{{id}}_shieldMaterial' class='form-control custom-select'>{{#shieldMaterialCableShieldMaterialKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/shieldMaterialCableShieldMaterialKind}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isStrandFill'>isStrandFill: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isStrandFill' class='form-check-input' type='checkbox'{{#isStrandFill}} checked{{/isStrandFill}}></div></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CableInfo" };
                super.submit (id, obj);
                temp = CableConstructionKind[document.getElementById (id + "_constructionKind").value]; if (temp) obj["constructionKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CableConstructionKind." + temp; else delete obj["constructionKind"];
                temp = document.getElementById (id + "_diameterOverCore").value; if ("" !== temp) obj["diameterOverCore"] = temp;
                temp = document.getElementById (id + "_diameterOverInsulation").value; if ("" !== temp) obj["diameterOverInsulation"] = temp;
                temp = document.getElementById (id + "_diameterOverJacket").value; if ("" !== temp) obj["diameterOverJacket"] = temp;
                temp = document.getElementById (id + "_diameterOverScreen").value; if ("" !== temp) obj["diameterOverScreen"] = temp;
                temp = document.getElementById (id + "_nominalTemperature").value; if ("" !== temp) obj["nominalTemperature"] = temp;
                temp = CableOuterJacketKind[document.getElementById (id + "_outerJacketKind").value]; if (temp) obj["outerJacketKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CableOuterJacketKind." + temp; else delete obj["outerJacketKind"];
                temp = document.getElementById (id + "_sheathAsNeutral").checked; if (temp) obj["sheathAsNeutral"] = true;
                temp = CableShieldMaterialKind[document.getElementById (id + "_shieldMaterial").value]; if (temp) obj["shieldMaterial"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CableShieldMaterialKind." + temp; else delete obj["shieldMaterial"];
                temp = document.getElementById (id + "_isStrandFill").checked; if (temp) obj["isStrandFill"] = true;

                return (obj);
            }
        }

        /**
         * Overhead wire data.
         *
         */
        class OverheadWireInfo extends WireInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OverheadWireInfo;
                if (null == bucket)
                   cim_data.OverheadWireInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OverheadWireInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = WireInfo.prototype.parse.call (this, context, sub);
                obj.cls = "OverheadWireInfo";
                let bucket = context.parsed.OverheadWireInfo;
                if (null == bucket)
                   context.parsed.OverheadWireInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WireInfo.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OverheadWireInfo_collapse" aria-expanded="true" aria-controls="OverheadWireInfo_collapse" style="margin-left: 10px;">OverheadWireInfo</a></legend>
                    <div id="OverheadWireInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WireInfo.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OverheadWireInfo_collapse" aria-expanded="true" aria-controls="{{id}}_OverheadWireInfo_collapse" style="margin-left: 10px;">OverheadWireInfo</a></legend>
                    <div id="{{id}}_OverheadWireInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WireInfo.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "OverheadWireInfo" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Concentric neutral cable data.
         *
         */
        class ConcentricNeutralCableInfo extends CableInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ConcentricNeutralCableInfo;
                if (null == bucket)
                   cim_data.ConcentricNeutralCableInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConcentricNeutralCableInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = CableInfo.prototype.parse.call (this, context, sub);
                obj.cls = "ConcentricNeutralCableInfo";
                base.parse_element (/<cim:ConcentricNeutralCableInfo.diameterOverNeutral>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.diameterOverNeutral>/g, obj, "diameterOverNeutral", base.to_string, sub, context);
                base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandCount>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandCount>/g, obj, "neutralStrandCount", base.to_string, sub, context);
                base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandRadius>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandRadius>/g, obj, "neutralStrandRadius", base.to_string, sub, context);
                base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandGmr>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandGmr>/g, obj, "neutralStrandGmr", base.to_string, sub, context);
                base.parse_element (/<cim:ConcentricNeutralCableInfo.neutralStrandRDC20>([\s\S]*?)<\/cim:ConcentricNeutralCableInfo.neutralStrandRDC20>/g, obj, "neutralStrandRDC20", base.to_string, sub, context);
                let bucket = context.parsed.ConcentricNeutralCableInfo;
                if (null == bucket)
                   context.parsed.ConcentricNeutralCableInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = CableInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "ConcentricNeutralCableInfo", "diameterOverNeutral", "diameterOverNeutral",  base.from_string, fields);
                base.export_element (obj, "ConcentricNeutralCableInfo", "neutralStrandCount", "neutralStrandCount",  base.from_string, fields);
                base.export_element (obj, "ConcentricNeutralCableInfo", "neutralStrandRadius", "neutralStrandRadius",  base.from_string, fields);
                base.export_element (obj, "ConcentricNeutralCableInfo", "neutralStrandGmr", "neutralStrandGmr",  base.from_string, fields);
                base.export_element (obj, "ConcentricNeutralCableInfo", "neutralStrandRDC20", "neutralStrandRDC20",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ConcentricNeutralCableInfo_collapse" aria-expanded="true" aria-controls="ConcentricNeutralCableInfo_collapse" style="margin-left: 10px;">ConcentricNeutralCableInfo</a></legend>
                    <div id="ConcentricNeutralCableInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + CableInfo.prototype.template.call (this) +
                    `
                    {{#diameterOverNeutral}}<div><b>diameterOverNeutral</b>: {{diameterOverNeutral}}</div>{{/diameterOverNeutral}}
                    {{#neutralStrandCount}}<div><b>neutralStrandCount</b>: {{neutralStrandCount}}</div>{{/neutralStrandCount}}
                    {{#neutralStrandRadius}}<div><b>neutralStrandRadius</b>: {{neutralStrandRadius}}</div>{{/neutralStrandRadius}}
                    {{#neutralStrandGmr}}<div><b>neutralStrandGmr</b>: {{neutralStrandGmr}}</div>{{/neutralStrandGmr}}
                    {{#neutralStrandRDC20}}<div><b>neutralStrandRDC20</b>: {{neutralStrandRDC20}}</div>{{/neutralStrandRDC20}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ConcentricNeutralCableInfo_collapse" aria-expanded="true" aria-controls="{{id}}_ConcentricNeutralCableInfo_collapse" style="margin-left: 10px;">ConcentricNeutralCableInfo</a></legend>
                    <div id="{{id}}_ConcentricNeutralCableInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + CableInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_diameterOverNeutral'>diameterOverNeutral: </label><div class='col-sm-8'><input id='{{id}}_diameterOverNeutral' class='form-control' type='text'{{#diameterOverNeutral}} value='{{diameterOverNeutral}}'{{/diameterOverNeutral}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_neutralStrandCount'>neutralStrandCount: </label><div class='col-sm-8'><input id='{{id}}_neutralStrandCount' class='form-control' type='text'{{#neutralStrandCount}} value='{{neutralStrandCount}}'{{/neutralStrandCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_neutralStrandRadius'>neutralStrandRadius: </label><div class='col-sm-8'><input id='{{id}}_neutralStrandRadius' class='form-control' type='text'{{#neutralStrandRadius}} value='{{neutralStrandRadius}}'{{/neutralStrandRadius}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_neutralStrandGmr'>neutralStrandGmr: </label><div class='col-sm-8'><input id='{{id}}_neutralStrandGmr' class='form-control' type='text'{{#neutralStrandGmr}} value='{{neutralStrandGmr}}'{{/neutralStrandGmr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_neutralStrandRDC20'>neutralStrandRDC20: </label><div class='col-sm-8'><input id='{{id}}_neutralStrandRDC20' class='form-control' type='text'{{#neutralStrandRDC20}} value='{{neutralStrandRDC20}}'{{/neutralStrandRDC20}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ConcentricNeutralCableInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_diameterOverNeutral").value; if ("" !== temp) obj["diameterOverNeutral"] = temp;
                temp = document.getElementById (id + "_neutralStrandCount").value; if ("" !== temp) obj["neutralStrandCount"] = temp;
                temp = document.getElementById (id + "_neutralStrandRadius").value; if ("" !== temp) obj["neutralStrandRadius"] = temp;
                temp = document.getElementById (id + "_neutralStrandGmr").value; if ("" !== temp) obj["neutralStrandGmr"] = temp;
                temp = document.getElementById (id + "_neutralStrandRDC20").value; if ("" !== temp) obj["neutralStrandRDC20"] = temp;

                return (obj);
            }
        }

        /**
         * Tape shield cable data.
         *
         */
        class TapeShieldCableInfo extends CableInfo
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TapeShieldCableInfo;
                if (null == bucket)
                   cim_data.TapeShieldCableInfo = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TapeShieldCableInfo[obj.id];
            }

            parse (context, sub)
            {
                let obj = CableInfo.prototype.parse.call (this, context, sub);
                obj.cls = "TapeShieldCableInfo";
                base.parse_element (/<cim:TapeShieldCableInfo.tapeLap>([\s\S]*?)<\/cim:TapeShieldCableInfo.tapeLap>/g, obj, "tapeLap", base.to_string, sub, context);
                base.parse_element (/<cim:TapeShieldCableInfo.tapeThickness>([\s\S]*?)<\/cim:TapeShieldCableInfo.tapeThickness>/g, obj, "tapeThickness", base.to_string, sub, context);
                let bucket = context.parsed.TapeShieldCableInfo;
                if (null == bucket)
                   context.parsed.TapeShieldCableInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = CableInfo.prototype.export.call (this, obj, false);

                base.export_element (obj, "TapeShieldCableInfo", "tapeLap", "tapeLap",  base.from_string, fields);
                base.export_element (obj, "TapeShieldCableInfo", "tapeThickness", "tapeThickness",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TapeShieldCableInfo_collapse" aria-expanded="true" aria-controls="TapeShieldCableInfo_collapse" style="margin-left: 10px;">TapeShieldCableInfo</a></legend>
                    <div id="TapeShieldCableInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + CableInfo.prototype.template.call (this) +
                    `
                    {{#tapeLap}}<div><b>tapeLap</b>: {{tapeLap}}</div>{{/tapeLap}}
                    {{#tapeThickness}}<div><b>tapeThickness</b>: {{tapeThickness}}</div>{{/tapeThickness}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TapeShieldCableInfo_collapse" aria-expanded="true" aria-controls="{{id}}_TapeShieldCableInfo_collapse" style="margin-left: 10px;">TapeShieldCableInfo</a></legend>
                    <div id="{{id}}_TapeShieldCableInfo_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + CableInfo.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tapeLap'>tapeLap: </label><div class='col-sm-8'><input id='{{id}}_tapeLap' class='form-control' type='text'{{#tapeLap}} value='{{tapeLap}}'{{/tapeLap}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tapeThickness'>tapeThickness: </label><div class='col-sm-8'><input id='{{id}}_tapeThickness' class='form-control' type='text'{{#tapeThickness}} value='{{tapeThickness}}'{{/tapeThickness}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TapeShieldCableInfo" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_tapeLap").value; if ("" !== temp) obj["tapeLap"] = temp;
                temp = document.getElementById (id + "_tapeThickness").value; if ("" !== temp) obj["tapeThickness"] = temp;

                return (obj);
            }
        }

        return (
            {
                ShuntCompensatorInfo: ShuntCompensatorInfo,
                TapeShieldCableInfo: TapeShieldCableInfo,
                CableOuterJacketKind: CableOuterJacketKind,
                InterrupterUnitInfo: InterrupterUnitInfo,
                WireSpacing: WireSpacing,
                TransformerTest: TransformerTest,
                ShortCircuitTest: ShortCircuitTest,
                InterruptingMediumKind: InterruptingMediumKind,
                OperatingMechanismKind: OperatingMechanismKind,
                WireInsulationKind: WireInsulationKind,
                BusbarSectionInfo: BusbarSectionInfo,
                CableConstructionKind: CableConstructionKind,
                OverheadWireInfo: OverheadWireInfo,
                WireInfo: WireInfo,
                WireMaterialKind: WireMaterialKind,
                ConcentricNeutralCableInfo: ConcentricNeutralCableInfo,
                TapChangerInfo: TapChangerInfo,
                CableShieldMaterialKind: CableShieldMaterialKind,
                SwitchInfo: SwitchInfo,
                WirePhaseInfo: WirePhaseInfo,
                TransformerTankInfo: TransformerTankInfo,
                PowerTransformerInfo: PowerTransformerInfo,
                BushingInfo: BushingInfo,
                TransformerEndInfo: TransformerEndInfo,
                BushingInsulationKind: BushingInsulationKind,
                CableInfo: CableInfo,
                WireUsageKind: WireUsageKind,
                NoLoadTest: NoLoadTest,
                OperatingMechanismInfo: OperatingMechanismInfo,
                OpenCircuitTest: OpenCircuitTest,
                WirePosition: WirePosition,
                WireAssemblyInfo: WireAssemblyInfo
            }
        );
    }
);