define
(
    ["model/base", "model/Core", "model/Domain", "model/Metering"],
    function (base, Core, Domain, Metering)
    {

        let TimeIntervalKind =
        {
            "Y": "Y",
            "M": "M",
            "D": "D",
            "h": "h",
            "m": "m",
            "s": "s"
        };
        Object.freeze (TimeIntervalKind);

        let DERParameterKind =
        {
            "apparentPower": "apparentPower",
            "activePower": "activePower",
            "reactivePower": "reactivePower",
            "highFilterBiDirectionalRegulation": "highFilterBiDirectionalRegulation",
            "lowFilterBiDirectionalRegulation": "lowFilterBiDirectionalRegulation",
            "highFilterUpRegulation": "highFilterUpRegulation",
            "lowFilterUpRegulation": "lowFilterUpRegulation",
            "highFilterDownRegulation": "highFilterDownRegulation",
            "lowFilterDownRegulation": "lowFilterDownRegulation",
            "increasingRampRate": "increasingRampRate",
            "decreasingRampRate": "decreasingRampRate",
            "voltage": "voltage"
        };
        Object.freeze (DERParameterKind);

        /**
         * The units defined for usage in the CIM.
         *
         */
        let DERUnitSymbol =
        {
            "s": "s",
            "A": "A",
            "deg": "deg",
            "degC": "degC",
            "V": "V",
            "ohm": "ohm",
            "Hz": "Hz",
            "W": "W",
            "VA": "VA",
            "VAr": "VAr",
            "Vs": "Vs",
            "As": "As",
            "VAh": "VAh",
            "Wh": "Wh",
            "VArh": "VArh",
            "WPers": "WPers",
            "h": "h",
            "min": "min",
            "Q": "Q",
            "Qh": "Qh",
            "ohmm": "ohmm",
            "Ah": "Ah",
            "Btu": "Btu",
            "VPerVA": "VPerVA",
            "therm": "therm",
            "Vh": "Vh",
            "WPerA": "WPerA",
            "onePerHz": "onePerHz",
            "VPerVAr": "VPerVAr",
            "ohmPerm": "ohmPerm"
        };
        Object.freeze (DERUnitSymbol);

        class DERCurveData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DERCurveData;
                if (null == bucket)
                   cim_data.DERCurveData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DERCurveData[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DERCurveData";
                base.parse_element (/<cim:DERCurveData.timeStamp>([\s\S]*?)<\/cim:DERCurveData.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:DERCurveData.nominalYValue>([\s\S]*?)<\/cim:DERCurveData.nominalYValue>/g, obj, "nominalYValue", base.to_float, sub, context);
                base.parse_element (/<cim:DERCurveData.minYValue>([\s\S]*?)<\/cim:DERCurveData.minYValue>/g, obj, "minYValue", base.to_float, sub, context);
                base.parse_element (/<cim:DERCurveData.maxYValue>([\s\S]*?)<\/cim:DERCurveData.maxYValue>/g, obj, "maxYValue", base.to_float, sub, context);
                base.parse_element (/<cim:DERCurveData.intervalNumber>([\s\S]*?)<\/cim:DERCurveData.intervalNumber>/g, obj, "intervalNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:DERCurveData.DispatchSchedule\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DispatchSchedule", sub, context);
                base.parse_attribute (/<cim:DERCurveData.DERMonitorableParameter\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DERMonitorableParameter", sub, context);
                let bucket = context.parsed.DERCurveData;
                if (null == bucket)
                   context.parsed.DERCurveData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "DERCurveData", "timeStamp", "timeStamp",  base.from_datetime, fields);
                base.export_element (obj, "DERCurveData", "nominalYValue", "nominalYValue",  base.from_float, fields);
                base.export_element (obj, "DERCurveData", "minYValue", "minYValue",  base.from_float, fields);
                base.export_element (obj, "DERCurveData", "maxYValue", "maxYValue",  base.from_float, fields);
                base.export_element (obj, "DERCurveData", "intervalNumber", "intervalNumber",  base.from_string, fields);
                base.export_attribute (obj, "DERCurveData", "DispatchSchedule", "DispatchSchedule", fields);
                base.export_attribute (obj, "DERCurveData", "DERMonitorableParameter", "DERMonitorableParameter", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DERCurveData_collapse" aria-expanded="true" aria-controls="DERCurveData_collapse" style="margin-left: 10px;">DERCurveData</a></legend>
                    <div id="DERCurveData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#timeStamp}}<div><b>timeStamp</b>: {{timeStamp}}</div>{{/timeStamp}}
                    {{#nominalYValue}}<div><b>nominalYValue</b>: {{nominalYValue}}</div>{{/nominalYValue}}
                    {{#minYValue}}<div><b>minYValue</b>: {{minYValue}}</div>{{/minYValue}}
                    {{#maxYValue}}<div><b>maxYValue</b>: {{maxYValue}}</div>{{/maxYValue}}
                    {{#intervalNumber}}<div><b>intervalNumber</b>: {{intervalNumber}}</div>{{/intervalNumber}}
                    {{#DispatchSchedule}}<div><b>DispatchSchedule</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DispatchSchedule}}");}); return false;'>{{DispatchSchedule}}</a></div>{{/DispatchSchedule}}
                    {{#DERMonitorableParameter}}<div><b>DERMonitorableParameter</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DERMonitorableParameter}}");}); return false;'>{{DERMonitorableParameter}}</a></div>{{/DERMonitorableParameter}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DERCurveData_collapse" aria-expanded="true" aria-controls="{{id}}_DERCurveData_collapse" style="margin-left: 10px;">DERCurveData</a></legend>
                    <div id="{{id}}_DERCurveData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeStamp'>timeStamp: </label><div class='col-sm-8'><input id='{{id}}_timeStamp' class='form-control' type='text'{{#timeStamp}} value='{{timeStamp}}'{{/timeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nominalYValue'>nominalYValue: </label><div class='col-sm-8'><input id='{{id}}_nominalYValue' class='form-control' type='text'{{#nominalYValue}} value='{{nominalYValue}}'{{/nominalYValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minYValue'>minYValue: </label><div class='col-sm-8'><input id='{{id}}_minYValue' class='form-control' type='text'{{#minYValue}} value='{{minYValue}}'{{/minYValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxYValue'>maxYValue: </label><div class='col-sm-8'><input id='{{id}}_maxYValue' class='form-control' type='text'{{#maxYValue}} value='{{maxYValue}}'{{/maxYValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intervalNumber'>intervalNumber: </label><div class='col-sm-8'><input id='{{id}}_intervalNumber' class='form-control' type='text'{{#intervalNumber}} value='{{intervalNumber}}'{{/intervalNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DispatchSchedule'>DispatchSchedule: </label><div class='col-sm-8'><input id='{{id}}_DispatchSchedule' class='form-control' type='text'{{#DispatchSchedule}} value='{{DispatchSchedule}}'{{/DispatchSchedule}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DERMonitorableParameter'>DERMonitorableParameter: </label><div class='col-sm-8'><input id='{{id}}_DERMonitorableParameter' class='form-control' type='text'{{#DERMonitorableParameter}} value='{{DERMonitorableParameter}}'{{/DERMonitorableParameter}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DERCurveData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_timeStamp").value; if ("" !== temp) obj["timeStamp"] = temp;
                temp = document.getElementById (id + "_nominalYValue").value; if ("" !== temp) obj["nominalYValue"] = temp;
                temp = document.getElementById (id + "_minYValue").value; if ("" !== temp) obj["minYValue"] = temp;
                temp = document.getElementById (id + "_maxYValue").value; if ("" !== temp) obj["maxYValue"] = temp;
                temp = document.getElementById (id + "_intervalNumber").value; if ("" !== temp) obj["intervalNumber"] = temp;
                temp = document.getElementById (id + "_DispatchSchedule").value; if ("" !== temp) obj["DispatchSchedule"] = temp;
                temp = document.getElementById (id + "_DERMonitorableParameter").value; if ("" !== temp) obj["DERMonitorableParameter"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DispatchSchedule", "0..1", "0..*", "DispatchSchedule", "DERCurveData"],
                            ["DERMonitorableParameter", "1", "0..1", "DERMonitorableParameter", "DERCurveData"]
                        ]
                    )
                );
            }
        }

        class DERMonitorableParameter extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DERMonitorableParameter;
                if (null == bucket)
                   cim_data.DERMonitorableParameter = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DERMonitorableParameter[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DERMonitorableParameter";
                base.parse_attribute (/<cim:DERMonitorableParameter.DERParameter\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DERParameter", sub, context);
                base.parse_attribute (/<cim:DERMonitorableParameter.yMultiplier\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "yMultiplier", sub, context);
                base.parse_attribute (/<cim:DERMonitorableParameter.yUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "yUnit", sub, context);
                base.parse_element (/<cim:DERMonitorableParameter.yUnitInstalledMax>([\s\S]*?)<\/cim:DERMonitorableParameter.yUnitInstalledMax>/g, obj, "yUnitInstalledMax", base.to_float, sub, context);
                base.parse_attribute (/<cim:DERMonitorableParameter.flowDirection\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "flowDirection", sub, context);
                base.parse_element (/<cim:DERMonitorableParameter.yUnitInstalledMin>([\s\S]*?)<\/cim:DERMonitorableParameter.yUnitInstalledMin>/g, obj, "yUnitInstalledMin", base.to_float, sub, context);
                base.parse_attributes (/<cim:DERMonitorableParameter.DispatchSchedule\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DispatchSchedule", sub, context);
                base.parse_attribute (/<cim:DERMonitorableParameter.DERCurveData\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DERCurveData", sub, context);
                base.parse_attributes (/<cim:DERMonitorableParameter.EndDeviceGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceGroup", sub, context);
                let bucket = context.parsed.DERMonitorableParameter;
                if (null == bucket)
                   context.parsed.DERMonitorableParameter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "DERMonitorableParameter", "DERParameter", "DERParameter", fields);
                base.export_attribute (obj, "DERMonitorableParameter", "yMultiplier", "yMultiplier", fields);
                base.export_attribute (obj, "DERMonitorableParameter", "yUnit", "yUnit", fields);
                base.export_element (obj, "DERMonitorableParameter", "yUnitInstalledMax", "yUnitInstalledMax",  base.from_float, fields);
                base.export_attribute (obj, "DERMonitorableParameter", "flowDirection", "flowDirection", fields);
                base.export_element (obj, "DERMonitorableParameter", "yUnitInstalledMin", "yUnitInstalledMin",  base.from_float, fields);
                base.export_attributes (obj, "DERMonitorableParameter", "DispatchSchedule", "DispatchSchedule", fields);
                base.export_attribute (obj, "DERMonitorableParameter", "DERCurveData", "DERCurveData", fields);
                base.export_attributes (obj, "DERMonitorableParameter", "EndDeviceGroup", "EndDeviceGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DERMonitorableParameter_collapse" aria-expanded="true" aria-controls="DERMonitorableParameter_collapse" style="margin-left: 10px;">DERMonitorableParameter</a></legend>
                    <div id="DERMonitorableParameter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#DERParameter}}<div><b>DERParameter</b>: {{DERParameter}}</div>{{/DERParameter}}
                    {{#yMultiplier}}<div><b>yMultiplier</b>: {{yMultiplier}}</div>{{/yMultiplier}}
                    {{#yUnit}}<div><b>yUnit</b>: {{yUnit}}</div>{{/yUnit}}
                    {{#yUnitInstalledMax}}<div><b>yUnitInstalledMax</b>: {{yUnitInstalledMax}}</div>{{/yUnitInstalledMax}}
                    {{#flowDirection}}<div><b>flowDirection</b>: {{flowDirection}}</div>{{/flowDirection}}
                    {{#yUnitInstalledMin}}<div><b>yUnitInstalledMin</b>: {{yUnitInstalledMin}}</div>{{/yUnitInstalledMin}}
                    {{#DispatchSchedule}}<div><b>DispatchSchedule</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DispatchSchedule}}
                    {{#DERCurveData}}<div><b>DERCurveData</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DERCurveData}}");}); return false;'>{{DERCurveData}}</a></div>{{/DERCurveData}}
                    {{#EndDeviceGroup}}<div><b>EndDeviceGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EndDeviceGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["DERParameterDERParameterKind"] = [{ id: '', selected: (!obj["DERParameter"])}]; for (let property in DERParameterKind) obj["DERParameterDERParameterKind"].push ({ id: property, selected: obj["DERParameter"] && obj["DERParameter"].endsWith ('.' + property)});
                obj["yMultiplierUnitMultiplier"] = [{ id: '', selected: (!obj["yMultiplier"])}]; for (let property in Domain.UnitMultiplier) obj["yMultiplierUnitMultiplier"].push ({ id: property, selected: obj["yMultiplier"] && obj["yMultiplier"].endsWith ('.' + property)});
                obj["yUnitDERUnitSymbol"] = [{ id: '', selected: (!obj["yUnit"])}]; for (let property in DERUnitSymbol) obj["yUnitDERUnitSymbol"].push ({ id: property, selected: obj["yUnit"] && obj["yUnit"].endsWith ('.' + property)});
                obj["flowDirectionFlowDirectionKind"] = [{ id: '', selected: (!obj["flowDirection"])}]; for (let property in Metering.FlowDirectionKind) obj["flowDirectionFlowDirectionKind"].push ({ id: property, selected: obj["flowDirection"] && obj["flowDirection"].endsWith ('.' + property)});
                if (obj["DispatchSchedule"]) obj["DispatchSchedule_string"] = obj["DispatchSchedule"].join ();
                if (obj["EndDeviceGroup"]) obj["EndDeviceGroup_string"] = obj["EndDeviceGroup"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["DERParameterDERParameterKind"];
                delete obj["yMultiplierUnitMultiplier"];
                delete obj["yUnitDERUnitSymbol"];
                delete obj["flowDirectionFlowDirectionKind"];
                delete obj["DispatchSchedule_string"];
                delete obj["EndDeviceGroup_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DERMonitorableParameter_collapse" aria-expanded="true" aria-controls="{{id}}_DERMonitorableParameter_collapse" style="margin-left: 10px;">DERMonitorableParameter</a></legend>
                    <div id="{{id}}_DERMonitorableParameter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DERParameter'>DERParameter: </label><div class='col-sm-8'><select id='{{id}}_DERParameter' class='form-control custom-select'>{{#DERParameterDERParameterKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/DERParameterDERParameterKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_yMultiplier'>yMultiplier: </label><div class='col-sm-8'><select id='{{id}}_yMultiplier' class='form-control custom-select'>{{#yMultiplierUnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/yMultiplierUnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_yUnit'>yUnit: </label><div class='col-sm-8'><select id='{{id}}_yUnit' class='form-control custom-select'>{{#yUnitDERUnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/yUnitDERUnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_yUnitInstalledMax'>yUnitInstalledMax: </label><div class='col-sm-8'><input id='{{id}}_yUnitInstalledMax' class='form-control' type='text'{{#yUnitInstalledMax}} value='{{yUnitInstalledMax}}'{{/yUnitInstalledMax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flowDirection'>flowDirection: </label><div class='col-sm-8'><select id='{{id}}_flowDirection' class='form-control custom-select'>{{#flowDirectionFlowDirectionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/flowDirectionFlowDirectionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_yUnitInstalledMin'>yUnitInstalledMin: </label><div class='col-sm-8'><input id='{{id}}_yUnitInstalledMin' class='form-control' type='text'{{#yUnitInstalledMin}} value='{{yUnitInstalledMin}}'{{/yUnitInstalledMin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DERCurveData'>DERCurveData: </label><div class='col-sm-8'><input id='{{id}}_DERCurveData' class='form-control' type='text'{{#DERCurveData}} value='{{DERCurveData}}'{{/DERCurveData}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceGroup'>EndDeviceGroup: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceGroup' class='form-control' type='text'{{#EndDeviceGroup}} value='{{EndDeviceGroup_string}}'{{/EndDeviceGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DERMonitorableParameter" };
                super.submit (id, obj);
                temp = DERParameterKind[document.getElementById (id + "_DERParameter").value]; if (temp) obj["DERParameter"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#DERParameterKind." + temp; else delete obj["DERParameter"];
                temp = Domain.UnitMultiplier[document.getElementById (id + "_yMultiplier").value]; if (temp) obj["yMultiplier"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; else delete obj["yMultiplier"];
                temp = DERUnitSymbol[document.getElementById (id + "_yUnit").value]; if (temp) obj["yUnit"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#DERUnitSymbol." + temp; else delete obj["yUnit"];
                temp = document.getElementById (id + "_yUnitInstalledMax").value; if ("" !== temp) obj["yUnitInstalledMax"] = temp;
                temp = Metering.FlowDirectionKind[document.getElementById (id + "_flowDirection").value]; if (temp) obj["flowDirection"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#FlowDirectionKind." + temp; else delete obj["flowDirection"];
                temp = document.getElementById (id + "_yUnitInstalledMin").value; if ("" !== temp) obj["yUnitInstalledMin"] = temp;
                temp = document.getElementById (id + "_DERCurveData").value; if ("" !== temp) obj["DERCurveData"] = temp;
                temp = document.getElementById (id + "_EndDeviceGroup").value; if ("" !== temp) obj["EndDeviceGroup"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DispatchSchedule", "0..*", "1", "DispatchSchedule", "DERMonitorableParameter"],
                            ["DERCurveData", "0..1", "1", "DERCurveData", "DERMonitorableParameter"],
                            ["EndDeviceGroup", "0..*", "0..*", "EndDeviceGroup", "DERMonitorableParameter"]
                        ]
                    )
                );
            }
        }

        class DERFunction extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DERFunction;
                if (null == bucket)
                   cim_data.DERFunction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DERFunction[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DERFunction";
                base.parse_element (/<cim:DERFunction.realPowerDispatch>([\s\S]*?)<\/cim:DERFunction.realPowerDispatch>/g, obj, "realPowerDispatch", base.to_boolean, sub, context);
                base.parse_element (/<cim:DERFunction.reactivePowerDispatch>([\s\S]*?)<\/cim:DERFunction.reactivePowerDispatch>/g, obj, "reactivePowerDispatch", base.to_boolean, sub, context);
                base.parse_element (/<cim:DERFunction.maxRealPowerLimiting>([\s\S]*?)<\/cim:DERFunction.maxRealPowerLimiting>/g, obj, "maxRealPowerLimiting", base.to_boolean, sub, context);
                base.parse_element (/<cim:DERFunction.rampRateControl>([\s\S]*?)<\/cim:DERFunction.rampRateControl>/g, obj, "rampRateControl", base.to_boolean, sub, context);
                base.parse_element (/<cim:DERFunction.voltageRegulation>([\s\S]*?)<\/cim:DERFunction.voltageRegulation>/g, obj, "voltageRegulation", base.to_boolean, sub, context);
                base.parse_element (/<cim:DERFunction.voltVarCurveFunction>([\s\S]*?)<\/cim:DERFunction.voltVarCurveFunction>/g, obj, "voltVarCurveFunction", base.to_boolean, sub, context);
                base.parse_element (/<cim:DERFunction.voltWattCurveFunction>([\s\S]*?)<\/cim:DERFunction.voltWattCurveFunction>/g, obj, "voltWattCurveFunction", base.to_boolean, sub, context);
                base.parse_element (/<cim:DERFunction.frequencyWattCurveFunction>([\s\S]*?)<\/cim:DERFunction.frequencyWattCurveFunction>/g, obj, "frequencyWattCurveFunction", base.to_boolean, sub, context);
                base.parse_element (/<cim:DERFunction.connectDisconnect>([\s\S]*?)<\/cim:DERFunction.connectDisconnect>/g, obj, "connectDisconnect", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:DERFunction.EndDeviceGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceGroup", sub, context);
                let bucket = context.parsed.DERFunction;
                if (null == bucket)
                   context.parsed.DERFunction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "DERFunction", "realPowerDispatch", "realPowerDispatch",  base.from_boolean, fields);
                base.export_element (obj, "DERFunction", "reactivePowerDispatch", "reactivePowerDispatch",  base.from_boolean, fields);
                base.export_element (obj, "DERFunction", "maxRealPowerLimiting", "maxRealPowerLimiting",  base.from_boolean, fields);
                base.export_element (obj, "DERFunction", "rampRateControl", "rampRateControl",  base.from_boolean, fields);
                base.export_element (obj, "DERFunction", "voltageRegulation", "voltageRegulation",  base.from_boolean, fields);
                base.export_element (obj, "DERFunction", "voltVarCurveFunction", "voltVarCurveFunction",  base.from_boolean, fields);
                base.export_element (obj, "DERFunction", "voltWattCurveFunction", "voltWattCurveFunction",  base.from_boolean, fields);
                base.export_element (obj, "DERFunction", "frequencyWattCurveFunction", "frequencyWattCurveFunction",  base.from_boolean, fields);
                base.export_element (obj, "DERFunction", "connectDisconnect", "connectDisconnect",  base.from_boolean, fields);
                base.export_attributes (obj, "DERFunction", "EndDeviceGroup", "EndDeviceGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DERFunction_collapse" aria-expanded="true" aria-controls="DERFunction_collapse" style="margin-left: 10px;">DERFunction</a></legend>
                    <div id="DERFunction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#realPowerDispatch}}<div><b>realPowerDispatch</b>: {{realPowerDispatch}}</div>{{/realPowerDispatch}}
                    {{#reactivePowerDispatch}}<div><b>reactivePowerDispatch</b>: {{reactivePowerDispatch}}</div>{{/reactivePowerDispatch}}
                    {{#maxRealPowerLimiting}}<div><b>maxRealPowerLimiting</b>: {{maxRealPowerLimiting}}</div>{{/maxRealPowerLimiting}}
                    {{#rampRateControl}}<div><b>rampRateControl</b>: {{rampRateControl}}</div>{{/rampRateControl}}
                    {{#voltageRegulation}}<div><b>voltageRegulation</b>: {{voltageRegulation}}</div>{{/voltageRegulation}}
                    {{#voltVarCurveFunction}}<div><b>voltVarCurveFunction</b>: {{voltVarCurveFunction}}</div>{{/voltVarCurveFunction}}
                    {{#voltWattCurveFunction}}<div><b>voltWattCurveFunction</b>: {{voltWattCurveFunction}}</div>{{/voltWattCurveFunction}}
                    {{#frequencyWattCurveFunction}}<div><b>frequencyWattCurveFunction</b>: {{frequencyWattCurveFunction}}</div>{{/frequencyWattCurveFunction}}
                    {{#connectDisconnect}}<div><b>connectDisconnect</b>: {{connectDisconnect}}</div>{{/connectDisconnect}}
                    {{#EndDeviceGroup}}<div><b>EndDeviceGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EndDeviceGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EndDeviceGroup"]) obj["EndDeviceGroup_string"] = obj["EndDeviceGroup"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EndDeviceGroup_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DERFunction_collapse" aria-expanded="true" aria-controls="{{id}}_DERFunction_collapse" style="margin-left: 10px;">DERFunction</a></legend>
                    <div id="{{id}}_DERFunction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_realPowerDispatch'>realPowerDispatch: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_realPowerDispatch' class='form-check-input' type='checkbox'{{#realPowerDispatch}} checked{{/realPowerDispatch}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_reactivePowerDispatch'>reactivePowerDispatch: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_reactivePowerDispatch' class='form-check-input' type='checkbox'{{#reactivePowerDispatch}} checked{{/reactivePowerDispatch}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_maxRealPowerLimiting'>maxRealPowerLimiting: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_maxRealPowerLimiting' class='form-check-input' type='checkbox'{{#maxRealPowerLimiting}} checked{{/maxRealPowerLimiting}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_rampRateControl'>rampRateControl: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_rampRateControl' class='form-check-input' type='checkbox'{{#rampRateControl}} checked{{/rampRateControl}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_voltageRegulation'>voltageRegulation: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_voltageRegulation' class='form-check-input' type='checkbox'{{#voltageRegulation}} checked{{/voltageRegulation}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_voltVarCurveFunction'>voltVarCurveFunction: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_voltVarCurveFunction' class='form-check-input' type='checkbox'{{#voltVarCurveFunction}} checked{{/voltVarCurveFunction}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_voltWattCurveFunction'>voltWattCurveFunction: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_voltWattCurveFunction' class='form-check-input' type='checkbox'{{#voltWattCurveFunction}} checked{{/voltWattCurveFunction}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_frequencyWattCurveFunction'>frequencyWattCurveFunction: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_frequencyWattCurveFunction' class='form-check-input' type='checkbox'{{#frequencyWattCurveFunction}} checked{{/frequencyWattCurveFunction}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_connectDisconnect'>connectDisconnect: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_connectDisconnect' class='form-check-input' type='checkbox'{{#connectDisconnect}} checked{{/connectDisconnect}}></div></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DERFunction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_realPowerDispatch").checked; if (temp) obj["realPowerDispatch"] = true;
                temp = document.getElementById (id + "_reactivePowerDispatch").checked; if (temp) obj["reactivePowerDispatch"] = true;
                temp = document.getElementById (id + "_maxRealPowerLimiting").checked; if (temp) obj["maxRealPowerLimiting"] = true;
                temp = document.getElementById (id + "_rampRateControl").checked; if (temp) obj["rampRateControl"] = true;
                temp = document.getElementById (id + "_voltageRegulation").checked; if (temp) obj["voltageRegulation"] = true;
                temp = document.getElementById (id + "_voltVarCurveFunction").checked; if (temp) obj["voltVarCurveFunction"] = true;
                temp = document.getElementById (id + "_voltWattCurveFunction").checked; if (temp) obj["voltWattCurveFunction"] = true;
                temp = document.getElementById (id + "_frequencyWattCurveFunction").checked; if (temp) obj["frequencyWattCurveFunction"] = true;
                temp = document.getElementById (id + "_connectDisconnect").checked; if (temp) obj["connectDisconnect"] = true;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDeviceGroup", "0..*", "0..1", "EndDeviceGroup", "DERFunction"]
                        ]
                    )
                );
            }
        }

        class DERGroupDispatch extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DERGroupDispatch;
                if (null == bucket)
                   cim_data.DERGroupDispatch = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DERGroupDispatch[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DERGroupDispatch";
                base.parse_attributes (/<cim:DERGroupDispatch.EndDeviceGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceGroup", sub, context);
                let bucket = context.parsed.DERGroupDispatch;
                if (null == bucket)
                   context.parsed.DERGroupDispatch = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "DERGroupDispatch", "EndDeviceGroup", "EndDeviceGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DERGroupDispatch_collapse" aria-expanded="true" aria-controls="DERGroupDispatch_collapse" style="margin-left: 10px;">DERGroupDispatch</a></legend>
                    <div id="DERGroupDispatch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#EndDeviceGroup}}<div><b>EndDeviceGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EndDeviceGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EndDeviceGroup"]) obj["EndDeviceGroup_string"] = obj["EndDeviceGroup"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EndDeviceGroup_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DERGroupDispatch_collapse" aria-expanded="true" aria-controls="{{id}}_DERGroupDispatch_collapse" style="margin-left: 10px;">DERGroupDispatch</a></legend>
                    <div id="{{id}}_DERGroupDispatch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceGroup'>EndDeviceGroup: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceGroup' class='form-control' type='text'{{#EndDeviceGroup}} value='{{EndDeviceGroup_string}}'{{/EndDeviceGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DERGroupDispatch" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EndDeviceGroup").value; if ("" !== temp) obj["EndDeviceGroup"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDeviceGroup", "0..*", "0..*", "EndDeviceGroup", "DERGroupDispatch"]
                        ]
                    )
                );
            }
        }

        class DispatchablePowerCapability extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DispatchablePowerCapability;
                if (null == bucket)
                   cim_data.DispatchablePowerCapability = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DispatchablePowerCapability[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DispatchablePowerCapability";
                base.parse_element (/<cim:DispatchablePowerCapability.currentActivePower>([\s\S]*?)<\/cim:DispatchablePowerCapability.currentActivePower>/g, obj, "currentActivePower", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchablePowerCapability.currentApparentPower>([\s\S]*?)<\/cim:DispatchablePowerCapability.currentApparentPower>/g, obj, "currentApparentPower", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchablePowerCapability.currentReactivePower>([\s\S]*?)<\/cim:DispatchablePowerCapability.currentReactivePower>/g, obj, "currentReactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchablePowerCapability.maxActivePower>([\s\S]*?)<\/cim:DispatchablePowerCapability.maxActivePower>/g, obj, "maxActivePower", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchablePowerCapability.maxApparentPower>([\s\S]*?)<\/cim:DispatchablePowerCapability.maxApparentPower>/g, obj, "maxApparentPower", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchablePowerCapability.maxReactivePower>([\s\S]*?)<\/cim:DispatchablePowerCapability.maxReactivePower>/g, obj, "maxReactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchablePowerCapability.minActivePower>([\s\S]*?)<\/cim:DispatchablePowerCapability.minActivePower>/g, obj, "minActivePower", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchablePowerCapability.minApparentPower>([\s\S]*?)<\/cim:DispatchablePowerCapability.minApparentPower>/g, obj, "minApparentPower", base.to_string, sub, context);
                base.parse_element (/<cim:DispatchablePowerCapability.minReactivePower>([\s\S]*?)<\/cim:DispatchablePowerCapability.minReactivePower>/g, obj, "minReactivePower", base.to_string, sub, context);
                base.parse_attribute (/<cim:DispatchablePowerCapability.EndDevice\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EndDevice", sub, context);
                base.parse_attribute (/<cim:DispatchablePowerCapability.EndDeviceGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceGroup", sub, context);
                let bucket = context.parsed.DispatchablePowerCapability;
                if (null == bucket)
                   context.parsed.DispatchablePowerCapability = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "DispatchablePowerCapability", "currentActivePower", "currentActivePower",  base.from_string, fields);
                base.export_element (obj, "DispatchablePowerCapability", "currentApparentPower", "currentApparentPower",  base.from_string, fields);
                base.export_element (obj, "DispatchablePowerCapability", "currentReactivePower", "currentReactivePower",  base.from_string, fields);
                base.export_element (obj, "DispatchablePowerCapability", "maxActivePower", "maxActivePower",  base.from_string, fields);
                base.export_element (obj, "DispatchablePowerCapability", "maxApparentPower", "maxApparentPower",  base.from_string, fields);
                base.export_element (obj, "DispatchablePowerCapability", "maxReactivePower", "maxReactivePower",  base.from_string, fields);
                base.export_element (obj, "DispatchablePowerCapability", "minActivePower", "minActivePower",  base.from_string, fields);
                base.export_element (obj, "DispatchablePowerCapability", "minApparentPower", "minApparentPower",  base.from_string, fields);
                base.export_element (obj, "DispatchablePowerCapability", "minReactivePower", "minReactivePower",  base.from_string, fields);
                base.export_attribute (obj, "DispatchablePowerCapability", "EndDevice", "EndDevice", fields);
                base.export_attribute (obj, "DispatchablePowerCapability", "EndDeviceGroup", "EndDeviceGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DispatchablePowerCapability_collapse" aria-expanded="true" aria-controls="DispatchablePowerCapability_collapse" style="margin-left: 10px;">DispatchablePowerCapability</a></legend>
                    <div id="DispatchablePowerCapability_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#currentActivePower}}<div><b>currentActivePower</b>: {{currentActivePower}}</div>{{/currentActivePower}}
                    {{#currentApparentPower}}<div><b>currentApparentPower</b>: {{currentApparentPower}}</div>{{/currentApparentPower}}
                    {{#currentReactivePower}}<div><b>currentReactivePower</b>: {{currentReactivePower}}</div>{{/currentReactivePower}}
                    {{#maxActivePower}}<div><b>maxActivePower</b>: {{maxActivePower}}</div>{{/maxActivePower}}
                    {{#maxApparentPower}}<div><b>maxApparentPower</b>: {{maxApparentPower}}</div>{{/maxApparentPower}}
                    {{#maxReactivePower}}<div><b>maxReactivePower</b>: {{maxReactivePower}}</div>{{/maxReactivePower}}
                    {{#minActivePower}}<div><b>minActivePower</b>: {{minActivePower}}</div>{{/minActivePower}}
                    {{#minApparentPower}}<div><b>minApparentPower</b>: {{minApparentPower}}</div>{{/minApparentPower}}
                    {{#minReactivePower}}<div><b>minReactivePower</b>: {{minReactivePower}}</div>{{/minReactivePower}}
                    {{#EndDevice}}<div><b>EndDevice</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EndDevice}}");}); return false;'>{{EndDevice}}</a></div>{{/EndDevice}}
                    {{#EndDeviceGroup}}<div><b>EndDeviceGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EndDeviceGroup}}");}); return false;'>{{EndDeviceGroup}}</a></div>{{/EndDeviceGroup}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DispatchablePowerCapability_collapse" aria-expanded="true" aria-controls="{{id}}_DispatchablePowerCapability_collapse" style="margin-left: 10px;">DispatchablePowerCapability</a></legend>
                    <div id="{{id}}_DispatchablePowerCapability_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_currentActivePower'>currentActivePower: </label><div class='col-sm-8'><input id='{{id}}_currentActivePower' class='form-control' type='text'{{#currentActivePower}} value='{{currentActivePower}}'{{/currentActivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_currentApparentPower'>currentApparentPower: </label><div class='col-sm-8'><input id='{{id}}_currentApparentPower' class='form-control' type='text'{{#currentApparentPower}} value='{{currentApparentPower}}'{{/currentApparentPower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_currentReactivePower'>currentReactivePower: </label><div class='col-sm-8'><input id='{{id}}_currentReactivePower' class='form-control' type='text'{{#currentReactivePower}} value='{{currentReactivePower}}'{{/currentReactivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxActivePower'>maxActivePower: </label><div class='col-sm-8'><input id='{{id}}_maxActivePower' class='form-control' type='text'{{#maxActivePower}} value='{{maxActivePower}}'{{/maxActivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxApparentPower'>maxApparentPower: </label><div class='col-sm-8'><input id='{{id}}_maxApparentPower' class='form-control' type='text'{{#maxApparentPower}} value='{{maxApparentPower}}'{{/maxApparentPower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxReactivePower'>maxReactivePower: </label><div class='col-sm-8'><input id='{{id}}_maxReactivePower' class='form-control' type='text'{{#maxReactivePower}} value='{{maxReactivePower}}'{{/maxReactivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minActivePower'>minActivePower: </label><div class='col-sm-8'><input id='{{id}}_minActivePower' class='form-control' type='text'{{#minActivePower}} value='{{minActivePower}}'{{/minActivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minApparentPower'>minApparentPower: </label><div class='col-sm-8'><input id='{{id}}_minApparentPower' class='form-control' type='text'{{#minApparentPower}} value='{{minApparentPower}}'{{/minApparentPower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minReactivePower'>minReactivePower: </label><div class='col-sm-8'><input id='{{id}}_minReactivePower' class='form-control' type='text'{{#minReactivePower}} value='{{minReactivePower}}'{{/minReactivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDevice'>EndDevice: </label><div class='col-sm-8'><input id='{{id}}_EndDevice' class='form-control' type='text'{{#EndDevice}} value='{{EndDevice}}'{{/EndDevice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceGroup'>EndDeviceGroup: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceGroup' class='form-control' type='text'{{#EndDeviceGroup}} value='{{EndDeviceGroup}}'{{/EndDeviceGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DispatchablePowerCapability" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_currentActivePower").value; if ("" !== temp) obj["currentActivePower"] = temp;
                temp = document.getElementById (id + "_currentApparentPower").value; if ("" !== temp) obj["currentApparentPower"] = temp;
                temp = document.getElementById (id + "_currentReactivePower").value; if ("" !== temp) obj["currentReactivePower"] = temp;
                temp = document.getElementById (id + "_maxActivePower").value; if ("" !== temp) obj["maxActivePower"] = temp;
                temp = document.getElementById (id + "_maxApparentPower").value; if ("" !== temp) obj["maxApparentPower"] = temp;
                temp = document.getElementById (id + "_maxReactivePower").value; if ("" !== temp) obj["maxReactivePower"] = temp;
                temp = document.getElementById (id + "_minActivePower").value; if ("" !== temp) obj["minActivePower"] = temp;
                temp = document.getElementById (id + "_minApparentPower").value; if ("" !== temp) obj["minApparentPower"] = temp;
                temp = document.getElementById (id + "_minReactivePower").value; if ("" !== temp) obj["minReactivePower"] = temp;
                temp = document.getElementById (id + "_EndDevice").value; if ("" !== temp) obj["EndDevice"] = temp;
                temp = document.getElementById (id + "_EndDeviceGroup").value; if ("" !== temp) obj["EndDeviceGroup"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDevice", "0..1", "0..*", "EndDevice", "DispatchablePowerCapability"],
                            ["EndDeviceGroup", "0..1", "0..1", "EndDeviceGroup", "DispatchablePowerCapability"]
                        ]
                    )
                );
            }
        }

        class DispatchSchedule extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DispatchSchedule;
                if (null == bucket)
                   cim_data.DispatchSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DispatchSchedule[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DispatchSchedule";
                base.parse_element (/<cim:DispatchSchedule.confidence>([\s\S]*?)<\/cim:DispatchSchedule.confidence>/g, obj, "confidence", base.to_string, sub, context);
                base.parse_attribute (/<cim:DispatchSchedule.curveStyleKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "curveStyleKind", sub, context);
                base.parse_element (/<cim:DispatchSchedule.startTime>([\s\S]*?)<\/cim:DispatchSchedule.startTime>/g, obj, "startTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DispatchSchedule.numberOfIntervals>([\s\S]*?)<\/cim:DispatchSchedule.numberOfIntervals>/g, obj, "numberOfIntervals", base.to_string, sub, context);
                base.parse_attribute (/<cim:DispatchSchedule.timeIntervalUnit\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "timeIntervalUnit", sub, context);
                base.parse_element (/<cim:DispatchSchedule.timeIntervalDuration>([\s\S]*?)<\/cim:DispatchSchedule.timeIntervalDuration>/g, obj, "timeIntervalDuration", base.to_string, sub, context);
                base.parse_attribute (/<cim:DispatchSchedule.DERMonitorableParameter\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DERMonitorableParameter", sub, context);
                base.parse_attributes (/<cim:DispatchSchedule.DERCurveData\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DERCurveData", sub, context);
                let bucket = context.parsed.DispatchSchedule;
                if (null == bucket)
                   context.parsed.DispatchSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "DispatchSchedule", "confidence", "confidence",  base.from_string, fields);
                base.export_attribute (obj, "DispatchSchedule", "curveStyleKind", "curveStyleKind", fields);
                base.export_element (obj, "DispatchSchedule", "startTime", "startTime",  base.from_datetime, fields);
                base.export_element (obj, "DispatchSchedule", "numberOfIntervals", "numberOfIntervals",  base.from_string, fields);
                base.export_attribute (obj, "DispatchSchedule", "timeIntervalUnit", "timeIntervalUnit", fields);
                base.export_element (obj, "DispatchSchedule", "timeIntervalDuration", "timeIntervalDuration",  base.from_string, fields);
                base.export_attribute (obj, "DispatchSchedule", "DERMonitorableParameter", "DERMonitorableParameter", fields);
                base.export_attributes (obj, "DispatchSchedule", "DERCurveData", "DERCurveData", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DispatchSchedule_collapse" aria-expanded="true" aria-controls="DispatchSchedule_collapse" style="margin-left: 10px;">DispatchSchedule</a></legend>
                    <div id="DispatchSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#confidence}}<div><b>confidence</b>: {{confidence}}</div>{{/confidence}}
                    {{#curveStyleKind}}<div><b>curveStyleKind</b>: {{curveStyleKind}}</div>{{/curveStyleKind}}
                    {{#startTime}}<div><b>startTime</b>: {{startTime}}</div>{{/startTime}}
                    {{#numberOfIntervals}}<div><b>numberOfIntervals</b>: {{numberOfIntervals}}</div>{{/numberOfIntervals}}
                    {{#timeIntervalUnit}}<div><b>timeIntervalUnit</b>: {{timeIntervalUnit}}</div>{{/timeIntervalUnit}}
                    {{#timeIntervalDuration}}<div><b>timeIntervalDuration</b>: {{timeIntervalDuration}}</div>{{/timeIntervalDuration}}
                    {{#DERMonitorableParameter}}<div><b>DERMonitorableParameter</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DERMonitorableParameter}}");}); return false;'>{{DERMonitorableParameter}}</a></div>{{/DERMonitorableParameter}}
                    {{#DERCurveData}}<div><b>DERCurveData</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DERCurveData}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["curveStyleKindCurveStyle"] = [{ id: '', selected: (!obj["curveStyleKind"])}]; for (let property in Core.CurveStyle) obj["curveStyleKindCurveStyle"].push ({ id: property, selected: obj["curveStyleKind"] && obj["curveStyleKind"].endsWith ('.' + property)});
                obj["timeIntervalUnitTimeIntervalKind"] = [{ id: '', selected: (!obj["timeIntervalUnit"])}]; for (let property in TimeIntervalKind) obj["timeIntervalUnitTimeIntervalKind"].push ({ id: property, selected: obj["timeIntervalUnit"] && obj["timeIntervalUnit"].endsWith ('.' + property)});
                if (obj["DERCurveData"]) obj["DERCurveData_string"] = obj["DERCurveData"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["curveStyleKindCurveStyle"];
                delete obj["timeIntervalUnitTimeIntervalKind"];
                delete obj["DERCurveData_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DispatchSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_DispatchSchedule_collapse" style="margin-left: 10px;">DispatchSchedule</a></legend>
                    <div id="{{id}}_DispatchSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_confidence'>confidence: </label><div class='col-sm-8'><input id='{{id}}_confidence' class='form-control' type='text'{{#confidence}} value='{{confidence}}'{{/confidence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_curveStyleKind'>curveStyleKind: </label><div class='col-sm-8'><select id='{{id}}_curveStyleKind' class='form-control custom-select'>{{#curveStyleKindCurveStyle}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/curveStyleKindCurveStyle}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startTime'>startTime: </label><div class='col-sm-8'><input id='{{id}}_startTime' class='form-control' type='text'{{#startTime}} value='{{startTime}}'{{/startTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_numberOfIntervals'>numberOfIntervals: </label><div class='col-sm-8'><input id='{{id}}_numberOfIntervals' class='form-control' type='text'{{#numberOfIntervals}} value='{{numberOfIntervals}}'{{/numberOfIntervals}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeIntervalUnit'>timeIntervalUnit: </label><div class='col-sm-8'><select id='{{id}}_timeIntervalUnit' class='form-control custom-select'>{{#timeIntervalUnitTimeIntervalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/timeIntervalUnitTimeIntervalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeIntervalDuration'>timeIntervalDuration: </label><div class='col-sm-8'><input id='{{id}}_timeIntervalDuration' class='form-control' type='text'{{#timeIntervalDuration}} value='{{timeIntervalDuration}}'{{/timeIntervalDuration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DERMonitorableParameter'>DERMonitorableParameter: </label><div class='col-sm-8'><input id='{{id}}_DERMonitorableParameter' class='form-control' type='text'{{#DERMonitorableParameter}} value='{{DERMonitorableParameter}}'{{/DERMonitorableParameter}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DispatchSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_confidence").value; if ("" !== temp) obj["confidence"] = temp;
                temp = Core.CurveStyle[document.getElementById (id + "_curveStyleKind").value]; if (temp) obj["curveStyleKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CurveStyle." + temp; else delete obj["curveStyleKind"];
                temp = document.getElementById (id + "_startTime").value; if ("" !== temp) obj["startTime"] = temp;
                temp = document.getElementById (id + "_numberOfIntervals").value; if ("" !== temp) obj["numberOfIntervals"] = temp;
                temp = TimeIntervalKind[document.getElementById (id + "_timeIntervalUnit").value]; if (temp) obj["timeIntervalUnit"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#TimeIntervalKind." + temp; else delete obj["timeIntervalUnit"];
                temp = document.getElementById (id + "_timeIntervalDuration").value; if ("" !== temp) obj["timeIntervalDuration"] = temp;
                temp = document.getElementById (id + "_DERMonitorableParameter").value; if ("" !== temp) obj["DERMonitorableParameter"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DERMonitorableParameter", "1", "0..*", "DERMonitorableParameter", "DispatchSchedule"],
                            ["DERCurveData", "0..*", "0..1", "DERCurveData", "DispatchSchedule"]
                        ]
                    )
                );
            }
        }

        class DERGroupForecast extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DERGroupForecast;
                if (null == bucket)
                   cim_data.DERGroupForecast = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DERGroupForecast[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DERGroupForecast";
                base.parse_element (/<cim:DERGroupForecast.predictionCreationDate>([\s\S]*?)<\/cim:DERGroupForecast.predictionCreationDate>/g, obj, "predictionCreationDate", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:DERGroupForecast.EndDeviceGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EndDeviceGroup", sub, context);
                let bucket = context.parsed.DERGroupForecast;
                if (null == bucket)
                   context.parsed.DERGroupForecast = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "DERGroupForecast", "predictionCreationDate", "predictionCreationDate",  base.from_datetime, fields);
                base.export_attributes (obj, "DERGroupForecast", "EndDeviceGroup", "EndDeviceGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DERGroupForecast_collapse" aria-expanded="true" aria-controls="DERGroupForecast_collapse" style="margin-left: 10px;">DERGroupForecast</a></legend>
                    <div id="DERGroupForecast_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#predictionCreationDate}}<div><b>predictionCreationDate</b>: {{predictionCreationDate}}</div>{{/predictionCreationDate}}
                    {{#EndDeviceGroup}}<div><b>EndDeviceGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EndDeviceGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EndDeviceGroup"]) obj["EndDeviceGroup_string"] = obj["EndDeviceGroup"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EndDeviceGroup_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DERGroupForecast_collapse" aria-expanded="true" aria-controls="{{id}}_DERGroupForecast_collapse" style="margin-left: 10px;">DERGroupForecast</a></legend>
                    <div id="{{id}}_DERGroupForecast_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_predictionCreationDate'>predictionCreationDate: </label><div class='col-sm-8'><input id='{{id}}_predictionCreationDate' class='form-control' type='text'{{#predictionCreationDate}} value='{{predictionCreationDate}}'{{/predictionCreationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EndDeviceGroup'>EndDeviceGroup: </label><div class='col-sm-8'><input id='{{id}}_EndDeviceGroup' class='form-control' type='text'{{#EndDeviceGroup}} value='{{EndDeviceGroup_string}}'{{/EndDeviceGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DERGroupForecast" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_predictionCreationDate").value; if ("" !== temp) obj["predictionCreationDate"] = temp;
                temp = document.getElementById (id + "_EndDeviceGroup").value; if ("" !== temp) obj["EndDeviceGroup"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EndDeviceGroup", "1..*", "1..*", "EndDeviceGroup", "DERGroupForecast"]
                        ]
                    )
                );
            }
        }

        return (
            {
                DERUnitSymbol: DERUnitSymbol,
                DERParameterKind: DERParameterKind,
                DERFunction: DERFunction,
                DERGroupDispatch: DERGroupDispatch,
                TimeIntervalKind: TimeIntervalKind,
                DispatchablePowerCapability: DispatchablePowerCapability,
                DERGroupForecast: DERGroupForecast,
                DERCurveData: DERCurveData,
                DERMonitorableParameter: DERMonitorableParameter,
                DispatchSchedule: DispatchSchedule
            }
        );
    }
);