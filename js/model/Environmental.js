define
(
    ["model/base", "model/AssetMeas", "model/Common", "model/Core", "model/EnvDomain", "model/Meas"],
    function (base, AssetMeas, Common, Core, EnvDomain, Meas)
    {
        /**
         * An environmental value described using a coded value.
         *
         * A triplicate of enumerated values representing intensity, coverage, type of weather is used. These may be concatenated into the string value.
         *
         */
        class EnvironmentalCodedValue extends Meas.StringMeasurementValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnvironmentalCodedValue;
                if (null == bucket)
                   cim_data.EnvironmentalCodedValue = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnvironmentalCodedValue[obj.id];
            }

            parse (context, sub)
            {
                let obj = Meas.StringMeasurementValue.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalCodedValue";
                base.parse_attribute (/<cim:EnvironmentalCodedValue.coverageKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "coverageKind", sub, context);
                base.parse_attribute (/<cim:EnvironmentalCodedValue.intensityKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "intensityKind", sub, context);
                base.parse_element (/<cim:EnvironmentalCodedValue.probabilityPercent>([\s\S]*?)<\/cim:EnvironmentalCodedValue.probabilityPercent>/g, obj, "probabilityPercent", base.to_string, sub, context);
                base.parse_attribute (/<cim:EnvironmentalCodedValue.weatherKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "weatherKind", sub, context);
                let bucket = context.parsed.EnvironmentalCodedValue;
                if (null == bucket)
                   context.parsed.EnvironmentalCodedValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Meas.StringMeasurementValue.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnvironmentalCodedValue", "coverageKind", "coverageKind", fields);
                base.export_attribute (obj, "EnvironmentalCodedValue", "intensityKind", "intensityKind", fields);
                base.export_element (obj, "EnvironmentalCodedValue", "probabilityPercent", "probabilityPercent",  base.from_string, fields);
                base.export_attribute (obj, "EnvironmentalCodedValue", "weatherKind", "weatherKind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnvironmentalCodedValue_collapse" aria-expanded="true" aria-controls="EnvironmentalCodedValue_collapse" style="margin-left: 10px;">EnvironmentalCodedValue</a></legend>
                    <div id="EnvironmentalCodedValue_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.StringMeasurementValue.prototype.template.call (this) +
                    `
                    {{#coverageKind}}<div><b>coverageKind</b>: {{coverageKind}}</div>{{/coverageKind}}
                    {{#intensityKind}}<div><b>intensityKind</b>: {{intensityKind}}</div>{{/intensityKind}}
                    {{#probabilityPercent}}<div><b>probabilityPercent</b>: {{probabilityPercent}}</div>{{/probabilityPercent}}
                    {{#weatherKind}}<div><b>weatherKind</b>: {{weatherKind}}</div>{{/weatherKind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["coverageKindCoverageCodeKind"] = [{ id: '', selected: (!obj["coverageKind"])}]; for (let property in EnvDomain.CoverageCodeKind) obj["coverageKindCoverageCodeKind"].push ({ id: property, selected: obj["coverageKind"] && obj["coverageKind"].endsWith ('.' + property)});
                obj["intensityKindIntensityCodeKind"] = [{ id: '', selected: (!obj["intensityKind"])}]; for (let property in EnvDomain.IntensityCodeKind) obj["intensityKindIntensityCodeKind"].push ({ id: property, selected: obj["intensityKind"] && obj["intensityKind"].endsWith ('.' + property)});
                obj["weatherKindWeatherCodeKind"] = [{ id: '', selected: (!obj["weatherKind"])}]; for (let property in EnvDomain.WeatherCodeKind) obj["weatherKindWeatherCodeKind"].push ({ id: property, selected: obj["weatherKind"] && obj["weatherKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["coverageKindCoverageCodeKind"];
                delete obj["intensityKindIntensityCodeKind"];
                delete obj["weatherKindWeatherCodeKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnvironmentalCodedValue_collapse" aria-expanded="true" aria-controls="{{id}}_EnvironmentalCodedValue_collapse" style="margin-left: 10px;">EnvironmentalCodedValue</a></legend>
                    <div id="{{id}}_EnvironmentalCodedValue_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.StringMeasurementValue.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coverageKind'>coverageKind: </label><div class='col-sm-8'><select id='{{id}}_coverageKind' class='form-control custom-select'>{{#coverageKindCoverageCodeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/coverageKindCoverageCodeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intensityKind'>intensityKind: </label><div class='col-sm-8'><select id='{{id}}_intensityKind' class='form-control custom-select'>{{#intensityKindIntensityCodeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/intensityKindIntensityCodeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_probabilityPercent'>probabilityPercent: </label><div class='col-sm-8'><input id='{{id}}_probabilityPercent' class='form-control' type='text'{{#probabilityPercent}} value='{{probabilityPercent}}'{{/probabilityPercent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_weatherKind'>weatherKind: </label><div class='col-sm-8'><select id='{{id}}_weatherKind' class='form-control custom-select'>{{#weatherKindWeatherCodeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/weatherKindWeatherCodeKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnvironmentalCodedValue" };
                super.submit (id, obj);
                temp = EnvDomain.CoverageCodeKind[document.getElementById (id + "_coverageKind").value]; if (temp) obj["coverageKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#CoverageCodeKind." + temp; else delete obj["coverageKind"];
                temp = EnvDomain.IntensityCodeKind[document.getElementById (id + "_intensityKind").value]; if (temp) obj["intensityKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#IntensityCodeKind." + temp; else delete obj["intensityKind"];
                temp = document.getElementById (id + "_probabilityPercent").value; if ("" !== temp) obj["probabilityPercent"] = temp;
                temp = EnvDomain.WeatherCodeKind[document.getElementById (id + "_weatherKind").value]; if (temp) obj["weatherKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#WeatherCodeKind." + temp; else delete obj["weatherKind"];

                return (obj);
            }
        }

        /**
         * A named list of alert types.
         *
         * Note:  the name of the list is reflected in the .name attribute (inherited from IdentifiedObject).
         *
         */
        class AlertTypeList extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AlertTypeList;
                if (null == bucket)
                   cim_data.AlertTypeList = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AlertTypeList[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AlertTypeList";
                base.parse_element (/<cim:AlertTypeList.version>([\s\S]*?)<\/cim:AlertTypeList.version>/g, obj, "version", base.to_string, sub, context);
                base.parse_attributes (/<cim:AlertTypeList.EnvironmentalAlert\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalAlert", sub, context);
                base.parse_attribute (/<cim:AlertTypeList.EnvironmentalDataAuthority\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalDataAuthority", sub, context);
                let bucket = context.parsed.AlertTypeList;
                if (null == bucket)
                   context.parsed.AlertTypeList = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "AlertTypeList", "version", "version",  base.from_string, fields);
                base.export_attributes (obj, "AlertTypeList", "EnvironmentalAlert", "EnvironmentalAlert", fields);
                base.export_attribute (obj, "AlertTypeList", "EnvironmentalDataAuthority", "EnvironmentalDataAuthority", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AlertTypeList_collapse" aria-expanded="true" aria-controls="AlertTypeList_collapse" style="margin-left: 10px;">AlertTypeList</a></legend>
                    <div id="AlertTypeList_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#version}}<div><b>version</b>: {{version}}</div>{{/version}}
                    {{#EnvironmentalAlert}}<div><b>EnvironmentalAlert</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalAlert}}
                    {{#EnvironmentalDataAuthority}}<div><b>EnvironmentalDataAuthority</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnvironmentalDataAuthority}}");}); return false;'>{{EnvironmentalDataAuthority}}</a></div>{{/EnvironmentalDataAuthority}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EnvironmentalAlert"]) obj["EnvironmentalAlert_string"] = obj["EnvironmentalAlert"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EnvironmentalAlert_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AlertTypeList_collapse" aria-expanded="true" aria-controls="{{id}}_AlertTypeList_collapse" style="margin-left: 10px;">AlertTypeList</a></legend>
                    <div id="{{id}}_AlertTypeList_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_version'>version: </label><div class='col-sm-8'><input id='{{id}}_version' class='form-control' type='text'{{#version}} value='{{version}}'{{/version}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalDataAuthority'>EnvironmentalDataAuthority: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalDataAuthority' class='form-control' type='text'{{#EnvironmentalDataAuthority}} value='{{EnvironmentalDataAuthority}}'{{/EnvironmentalDataAuthority}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AlertTypeList" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_version").value; if ("" !== temp) obj["version"] = temp;
                temp = document.getElementById (id + "_EnvironmentalDataAuthority").value; if ("" !== temp) obj["EnvironmentalDataAuthority"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnvironmentalAlert", "0..*", "1", "EnvironmentalAlert", "AlertTypeList"],
                            ["EnvironmentalDataAuthority", "0..1", "0..*", "EnvironmentalDataAuthority", "AlertTypeList"]
                        ]
                    )
                );
            }
        }

        /**
         * <font color="#0f0f0f">Definition of one set of reporting capabilities for this monitoring station.
         *
         * The associated EnvironmentalValueSets describe the maximum range of possible environmental values the station is capable of returning.  This attribute is intended primarily to assist a utility in managing its stations. </font>
         *
         */
        class ReportingCapability extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ReportingCapability;
                if (null == bucket)
                   cim_data.ReportingCapability = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReportingCapability[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ReportingCapability";
                base.parse_element (/<cim:ReportingCapability.reportingIntervalPeriod>([\s\S]*?)<\/cim:ReportingCapability.reportingIntervalPeriod>/g, obj, "reportingIntervalPeriod", base.to_string, sub, context);
                base.parse_attribute (/<cim:ReportingCapability.reportingIntervalType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "reportingIntervalType", sub, context);
                base.parse_attribute (/<cim:ReportingCapability.reportingMethod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "reportingMethod", sub, context);
                base.parse_attributes (/<cim:ReportingCapability.EnvironmentalAnalog\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalAnalog", sub, context);
                base.parse_attribute (/<cim:ReportingCapability.EnvironmentalMonitoringStation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalMonitoringStation", sub, context);
                let bucket = context.parsed.ReportingCapability;
                if (null == bucket)
                   context.parsed.ReportingCapability = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "ReportingCapability", "reportingIntervalPeriod", "reportingIntervalPeriod",  base.from_string, fields);
                base.export_attribute (obj, "ReportingCapability", "reportingIntervalType", "reportingIntervalType", fields);
                base.export_attribute (obj, "ReportingCapability", "reportingMethod", "reportingMethod", fields);
                base.export_attributes (obj, "ReportingCapability", "EnvironmentalAnalog", "EnvironmentalAnalog", fields);
                base.export_attribute (obj, "ReportingCapability", "EnvironmentalMonitoringStation", "EnvironmentalMonitoringStation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ReportingCapability_collapse" aria-expanded="true" aria-controls="ReportingCapability_collapse" style="margin-left: 10px;">ReportingCapability</a></legend>
                    <div id="ReportingCapability_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#reportingIntervalPeriod}}<div><b>reportingIntervalPeriod</b>: {{reportingIntervalPeriod}}</div>{{/reportingIntervalPeriod}}
                    {{#reportingIntervalType}}<div><b>reportingIntervalType</b>: {{reportingIntervalType}}</div>{{/reportingIntervalType}}
                    {{#reportingMethod}}<div><b>reportingMethod</b>: {{reportingMethod}}</div>{{/reportingMethod}}
                    {{#EnvironmentalAnalog}}<div><b>EnvironmentalAnalog</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalAnalog}}
                    {{#EnvironmentalMonitoringStation}}<div><b>EnvironmentalMonitoringStation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnvironmentalMonitoringStation}}");}); return false;'>{{EnvironmentalMonitoringStation}}</a></div>{{/EnvironmentalMonitoringStation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["reportingIntervalTypeCalculationIntervalUnitKind"] = [{ id: '', selected: (!obj["reportingIntervalType"])}]; for (let property in AssetMeas.CalculationIntervalUnitKind) obj["reportingIntervalTypeCalculationIntervalUnitKind"].push ({ id: property, selected: obj["reportingIntervalType"] && obj["reportingIntervalType"].endsWith ('.' + property)});
                obj["reportingMethodReportingMethodKind"] = [{ id: '', selected: (!obj["reportingMethod"])}]; for (let property in EnvDomain.ReportingMethodKind) obj["reportingMethodReportingMethodKind"].push ({ id: property, selected: obj["reportingMethod"] && obj["reportingMethod"].endsWith ('.' + property)});
                if (obj["EnvironmentalAnalog"]) obj["EnvironmentalAnalog_string"] = obj["EnvironmentalAnalog"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["reportingIntervalTypeCalculationIntervalUnitKind"];
                delete obj["reportingMethodReportingMethodKind"];
                delete obj["EnvironmentalAnalog_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ReportingCapability_collapse" aria-expanded="true" aria-controls="{{id}}_ReportingCapability_collapse" style="margin-left: 10px;">ReportingCapability</a></legend>
                    <div id="{{id}}_ReportingCapability_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reportingIntervalPeriod'>reportingIntervalPeriod: </label><div class='col-sm-8'><input id='{{id}}_reportingIntervalPeriod' class='form-control' type='text'{{#reportingIntervalPeriod}} value='{{reportingIntervalPeriod}}'{{/reportingIntervalPeriod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reportingIntervalType'>reportingIntervalType: </label><div class='col-sm-8'><select id='{{id}}_reportingIntervalType' class='form-control custom-select'>{{#reportingIntervalTypeCalculationIntervalUnitKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/reportingIntervalTypeCalculationIntervalUnitKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reportingMethod'>reportingMethod: </label><div class='col-sm-8'><select id='{{id}}_reportingMethod' class='form-control custom-select'>{{#reportingMethodReportingMethodKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/reportingMethodReportingMethodKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalMonitoringStation'>EnvironmentalMonitoringStation: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalMonitoringStation' class='form-control' type='text'{{#EnvironmentalMonitoringStation}} value='{{EnvironmentalMonitoringStation}}'{{/EnvironmentalMonitoringStation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ReportingCapability" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_reportingIntervalPeriod").value; if ("" !== temp) obj["reportingIntervalPeriod"] = temp;
                temp = AssetMeas.CalculationIntervalUnitKind[document.getElementById (id + "_reportingIntervalType").value]; if (temp) obj["reportingIntervalType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#CalculationIntervalUnitKind." + temp; else delete obj["reportingIntervalType"];
                temp = EnvDomain.ReportingMethodKind[document.getElementById (id + "_reportingMethod").value]; if (temp) obj["reportingMethod"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#ReportingMethodKind." + temp; else delete obj["reportingMethod"];
                temp = document.getElementById (id + "_EnvironmentalMonitoringStation").value; if ("" !== temp) obj["EnvironmentalMonitoringStation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnvironmentalAnalog", "0..*", "0..1", "EnvironmentalAnalog", "ReportingCapability"],
                            ["EnvironmentalMonitoringStation", "1", "0..*", "EnvironmentalMonitoringStation", "ReportingCapability"]
                        ]
                    )
                );
            }
        }

        /**
         * An environmental event to which one or more forecasts or observations may be tied and which may relate to or affect one or more assets.
         *
         * This class is intended to be used as a means of grouping forecasts and/or observations and could be used for a variety of purposes, including:
         * <ul>
         * <li>to define a 'named' event like Hurricane Katrina and allow the historic (or forecast) values for phenomena and measurements (precipitation, temperature) across time to be  associated with it</li>
         * <li>to identify assets that were (or are forecast to be) affected by a phenomenon or set of measurements</li>
         * </ul>
         *
         */
        class EnvironmentalEvent extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnvironmentalEvent;
                if (null == bucket)
                   cim_data.EnvironmentalEvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnvironmentalEvent[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalEvent";
                base.parse_attributes (/<cim:EnvironmentalEvent.EnvironmentalInformation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalInformation", sub, context);
                let bucket = context.parsed.EnvironmentalEvent;
                if (null == bucket)
                   context.parsed.EnvironmentalEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "EnvironmentalEvent", "EnvironmentalInformation", "EnvironmentalInformation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnvironmentalEvent_collapse" aria-expanded="true" aria-controls="EnvironmentalEvent_collapse" style="margin-left: 10px;">EnvironmentalEvent</a></legend>
                    <div id="EnvironmentalEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#EnvironmentalInformation}}<div><b>EnvironmentalInformation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalInformation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EnvironmentalInformation"]) obj["EnvironmentalInformation_string"] = obj["EnvironmentalInformation"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EnvironmentalInformation_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnvironmentalEvent_collapse" aria-expanded="true" aria-controls="{{id}}_EnvironmentalEvent_collapse" style="margin-left: 10px;">EnvironmentalEvent</a></legend>
                    <div id="{{id}}_EnvironmentalEvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalInformation'>EnvironmentalInformation: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalInformation' class='form-control' type='text'{{#EnvironmentalInformation}} value='{{EnvironmentalInformation_string}}'{{/EnvironmentalInformation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnvironmentalEvent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EnvironmentalInformation").value; if ("" !== temp) obj["EnvironmentalInformation"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnvironmentalInformation", "0..*", "0..*", "EnvironmentalInformation", "EnvironmentalEvent"]
                        ]
                    )
                );
            }
        }

        /**
         * An environmental alert issued by a provider or system.
         *
         */
        class EnvironmentalAlert extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnvironmentalAlert;
                if (null == bucket)
                   cim_data.EnvironmentalAlert = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnvironmentalAlert[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalAlert";
                base.parse_element (/<cim:EnvironmentalAlert.alertType>([\s\S]*?)<\/cim:EnvironmentalAlert.alertType>/g, obj, "alertType", base.to_string, sub, context);
                base.parse_element (/<cim:EnvironmentalAlert.cancelledDateTime>([\s\S]*?)<\/cim:EnvironmentalAlert.cancelledDateTime>/g, obj, "cancelledDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:EnvironmentalAlert.headline>([\s\S]*?)<\/cim:EnvironmentalAlert.headline>/g, obj, "headline", base.to_string, sub, context);
                base.parse_attribute (/<cim:EnvironmentalAlert.inEffect\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "inEffect", sub, context);
                base.parse_attribute (/<cim:EnvironmentalAlert.AlertTypeList\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AlertTypeList", sub, context);
                base.parse_attribute (/<cim:EnvironmentalAlert.EnvironmentalDataProvider\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalDataProvider", sub, context);
                base.parse_attributes (/<cim:EnvironmentalAlert.EnvironmentalLocationKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalLocationKind", sub, context);
                let bucket = context.parsed.EnvironmentalAlert;
                if (null == bucket)
                   context.parsed.EnvironmentalAlert = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_element (obj, "EnvironmentalAlert", "alertType", "alertType",  base.from_string, fields);
                base.export_element (obj, "EnvironmentalAlert", "cancelledDateTime", "cancelledDateTime",  base.from_datetime, fields);
                base.export_element (obj, "EnvironmentalAlert", "headline", "headline",  base.from_string, fields);
                base.export_attribute (obj, "EnvironmentalAlert", "inEffect", "inEffect", fields);
                base.export_attribute (obj, "EnvironmentalAlert", "AlertTypeList", "AlertTypeList", fields);
                base.export_attribute (obj, "EnvironmentalAlert", "EnvironmentalDataProvider", "EnvironmentalDataProvider", fields);
                base.export_attributes (obj, "EnvironmentalAlert", "EnvironmentalLocationKind", "EnvironmentalLocationKind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnvironmentalAlert_collapse" aria-expanded="true" aria-controls="EnvironmentalAlert_collapse" style="margin-left: 10px;">EnvironmentalAlert</a></legend>
                    <div id="EnvironmentalAlert_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#alertType}}<div><b>alertType</b>: {{alertType}}</div>{{/alertType}}
                    {{#cancelledDateTime}}<div><b>cancelledDateTime</b>: {{cancelledDateTime}}</div>{{/cancelledDateTime}}
                    {{#headline}}<div><b>headline</b>: {{headline}}</div>{{/headline}}
                    {{#inEffect}}<div><b>inEffect</b>: {{inEffect}}</div>{{/inEffect}}
                    {{#AlertTypeList}}<div><b>AlertTypeList</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AlertTypeList}}");}); return false;'>{{AlertTypeList}}</a></div>{{/AlertTypeList}}
                    {{#EnvironmentalDataProvider}}<div><b>EnvironmentalDataProvider</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnvironmentalDataProvider}}");}); return false;'>{{EnvironmentalDataProvider}}</a></div>{{/EnvironmentalDataProvider}}
                    {{#EnvironmentalLocationKind}}<div><b>EnvironmentalLocationKind</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalLocationKind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EnvironmentalLocationKind"]) obj["EnvironmentalLocationKind_string"] = obj["EnvironmentalLocationKind"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EnvironmentalLocationKind_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnvironmentalAlert_collapse" aria-expanded="true" aria-controls="{{id}}_EnvironmentalAlert_collapse" style="margin-left: 10px;">EnvironmentalAlert</a></legend>
                    <div id="{{id}}_EnvironmentalAlert_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_alertType'>alertType: </label><div class='col-sm-8'><input id='{{id}}_alertType' class='form-control' type='text'{{#alertType}} value='{{alertType}}'{{/alertType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cancelledDateTime'>cancelledDateTime: </label><div class='col-sm-8'><input id='{{id}}_cancelledDateTime' class='form-control' type='text'{{#cancelledDateTime}} value='{{cancelledDateTime}}'{{/cancelledDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_headline'>headline: </label><div class='col-sm-8'><input id='{{id}}_headline' class='form-control' type='text'{{#headline}} value='{{headline}}'{{/headline}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inEffect'>inEffect: </label><div class='col-sm-8'><input id='{{id}}_inEffect' class='form-control' type='text'{{#inEffect}} value='{{inEffect}}'{{/inEffect}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AlertTypeList'>AlertTypeList: </label><div class='col-sm-8'><input id='{{id}}_AlertTypeList' class='form-control' type='text'{{#AlertTypeList}} value='{{AlertTypeList}}'{{/AlertTypeList}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalDataProvider'>EnvironmentalDataProvider: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalDataProvider' class='form-control' type='text'{{#EnvironmentalDataProvider}} value='{{EnvironmentalDataProvider}}'{{/EnvironmentalDataProvider}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalLocationKind'>EnvironmentalLocationKind: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalLocationKind' class='form-control' type='text'{{#EnvironmentalLocationKind}} value='{{EnvironmentalLocationKind_string}}'{{/EnvironmentalLocationKind}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnvironmentalAlert" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_alertType").value; if ("" !== temp) obj["alertType"] = temp;
                temp = document.getElementById (id + "_cancelledDateTime").value; if ("" !== temp) obj["cancelledDateTime"] = temp;
                temp = document.getElementById (id + "_headline").value; if ("" !== temp) obj["headline"] = temp;
                temp = document.getElementById (id + "_inEffect").value; if ("" !== temp) obj["inEffect"] = temp;
                temp = document.getElementById (id + "_AlertTypeList").value; if ("" !== temp) obj["AlertTypeList"] = temp;
                temp = document.getElementById (id + "_EnvironmentalDataProvider").value; if ("" !== temp) obj["EnvironmentalDataProvider"] = temp;
                temp = document.getElementById (id + "_EnvironmentalLocationKind").value; if ("" !== temp) obj["EnvironmentalLocationKind"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AlertTypeList", "1", "0..*", "AlertTypeList", "EnvironmentalAlert"],
                            ["EnvironmentalDataProvider", "0..1", "0..*", "EnvironmentalDataProvider", "EnvironmentalAlert"],
                            ["EnvironmentalLocationKind", "1..*", "0..*", "EnvironmentalLocationType", "EnvironmentalAlert"]
                        ]
                    )
                );
            }
        }

        /**
         * Discrete (integer) measurement of relevance in the environmental domain.
         *
         */
        class EnvironmentalDiscrete extends Meas.Discrete
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnvironmentalDiscrete;
                if (null == bucket)
                   cim_data.EnvironmentalDiscrete = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnvironmentalDiscrete[obj.id];
            }

            parse (context, sub)
            {
                let obj = Meas.Discrete.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalDiscrete";
                base.parse_attribute (/<cim:EnvironmentalDiscrete.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:EnvironmentalDiscrete.EnvironmentalInformation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalInformation", sub, context);
                let bucket = context.parsed.EnvironmentalDiscrete;
                if (null == bucket)
                   context.parsed.EnvironmentalDiscrete = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Meas.Discrete.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnvironmentalDiscrete", "kind", "kind", fields);
                base.export_attribute (obj, "EnvironmentalDiscrete", "EnvironmentalInformation", "EnvironmentalInformation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnvironmentalDiscrete_collapse" aria-expanded="true" aria-controls="EnvironmentalDiscrete_collapse" style="margin-left: 10px;">EnvironmentalDiscrete</a></legend>
                    <div id="EnvironmentalDiscrete_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.Discrete.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#EnvironmentalInformation}}<div><b>EnvironmentalInformation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnvironmentalInformation}}");}); return false;'>{{EnvironmentalInformation}}</a></div>{{/EnvironmentalInformation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindEnvironmentalDiscreteKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in EnvDomain.EnvironmentalDiscreteKind) obj["kindEnvironmentalDiscreteKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindEnvironmentalDiscreteKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnvironmentalDiscrete_collapse" aria-expanded="true" aria-controls="{{id}}_EnvironmentalDiscrete_collapse" style="margin-left: 10px;">EnvironmentalDiscrete</a></legend>
                    <div id="{{id}}_EnvironmentalDiscrete_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.Discrete.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindEnvironmentalDiscreteKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindEnvironmentalDiscreteKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalInformation'>EnvironmentalInformation: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalInformation' class='form-control' type='text'{{#EnvironmentalInformation}} value='{{EnvironmentalInformation}}'{{/EnvironmentalInformation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnvironmentalDiscrete" };
                super.submit (id, obj);
                temp = EnvDomain.EnvironmentalDiscreteKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#EnvironmentalDiscreteKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_EnvironmentalInformation").value; if ("" !== temp) obj["EnvironmentalInformation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnvironmentalInformation", "0..1", "0..*", "EnvironmentalInformation", "EnvironmentalDiscrete"]
                        ]
                    )
                );
            }
        }

        /**
         * Entity providing environmental data.
         *
         * Could be an observed weather data provider, an entity providing forecasts, an authority providing alerts, etc.
         *
         */
        class EnvironmentalDataProvider extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnvironmentalDataProvider;
                if (null == bucket)
                   cim_data.EnvironmentalDataProvider = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnvironmentalDataProvider[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalDataProvider";
                base.parse_attributes (/<cim:EnvironmentalDataProvider.EnvironmentalAlert\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalAlert", sub, context);
                base.parse_attributes (/<cim:EnvironmentalDataProvider.EnvironmentalInformation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalInformation", sub, context);
                let bucket = context.parsed.EnvironmentalDataProvider;
                if (null == bucket)
                   context.parsed.EnvironmentalDataProvider = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "EnvironmentalDataProvider", "EnvironmentalAlert", "EnvironmentalAlert", fields);
                base.export_attributes (obj, "EnvironmentalDataProvider", "EnvironmentalInformation", "EnvironmentalInformation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnvironmentalDataProvider_collapse" aria-expanded="true" aria-controls="EnvironmentalDataProvider_collapse" style="margin-left: 10px;">EnvironmentalDataProvider</a></legend>
                    <div id="EnvironmentalDataProvider_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#EnvironmentalAlert}}<div><b>EnvironmentalAlert</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalAlert}}
                    {{#EnvironmentalInformation}}<div><b>EnvironmentalInformation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalInformation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EnvironmentalAlert"]) obj["EnvironmentalAlert_string"] = obj["EnvironmentalAlert"].join ();
                if (obj["EnvironmentalInformation"]) obj["EnvironmentalInformation_string"] = obj["EnvironmentalInformation"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EnvironmentalAlert_string"];
                delete obj["EnvironmentalInformation_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnvironmentalDataProvider_collapse" aria-expanded="true" aria-controls="{{id}}_EnvironmentalDataProvider_collapse" style="margin-left: 10px;">EnvironmentalDataProvider</a></legend>
                    <div id="{{id}}_EnvironmentalDataProvider_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "EnvironmentalDataProvider" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnvironmentalAlert", "0..*", "0..1", "EnvironmentalAlert", "EnvironmentalDataProvider"],
                            ["EnvironmentalInformation", "0..*", "0..1", "EnvironmentalInformation", "EnvironmentalDataProvider"]
                        ]
                    )
                );
            }
        }

        /**
         * The actual or forecast characteristics of an environmental phenomenon at a specific point in time (or during a specific time interval) that may have both a center and area/line location.
         *
         */
        class EnvironmentalPhenomenon extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnvironmentalPhenomenon;
                if (null == bucket)
                   cim_data.EnvironmentalPhenomenon = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnvironmentalPhenomenon[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalPhenomenon";
                base.parse_attribute (/<cim:EnvironmentalPhenomenon.timeInterval\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "timeInterval", sub, context);
                base.parse_attribute (/<cim:EnvironmentalPhenomenon.PhenomenonClassification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PhenomenonClassification", sub, context);
                base.parse_attributes (/<cim:EnvironmentalPhenomenon.EnvironmentalLocationKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalLocationKind", sub, context);
                base.parse_attribute (/<cim:EnvironmentalPhenomenon.EnvironmentalInformation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalInformation", sub, context);
                let bucket = context.parsed.EnvironmentalPhenomenon;
                if (null == bucket)
                   context.parsed.EnvironmentalPhenomenon = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "EnvironmentalPhenomenon", "timeInterval", "timeInterval", fields);
                base.export_attribute (obj, "EnvironmentalPhenomenon", "PhenomenonClassification", "PhenomenonClassification", fields);
                base.export_attributes (obj, "EnvironmentalPhenomenon", "EnvironmentalLocationKind", "EnvironmentalLocationKind", fields);
                base.export_attribute (obj, "EnvironmentalPhenomenon", "EnvironmentalInformation", "EnvironmentalInformation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnvironmentalPhenomenon_collapse" aria-expanded="true" aria-controls="EnvironmentalPhenomenon_collapse" style="margin-left: 10px;">EnvironmentalPhenomenon</a></legend>
                    <div id="EnvironmentalPhenomenon_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#timeInterval}}<div><b>timeInterval</b>: {{timeInterval}}</div>{{/timeInterval}}
                    {{#PhenomenonClassification}}<div><b>PhenomenonClassification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PhenomenonClassification}}");}); return false;'>{{PhenomenonClassification}}</a></div>{{/PhenomenonClassification}}
                    {{#EnvironmentalLocationKind}}<div><b>EnvironmentalLocationKind</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalLocationKind}}
                    {{#EnvironmentalInformation}}<div><b>EnvironmentalInformation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnvironmentalInformation}}");}); return false;'>{{EnvironmentalInformation}}</a></div>{{/EnvironmentalInformation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EnvironmentalLocationKind"]) obj["EnvironmentalLocationKind_string"] = obj["EnvironmentalLocationKind"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EnvironmentalLocationKind_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnvironmentalPhenomenon_collapse" aria-expanded="true" aria-controls="{{id}}_EnvironmentalPhenomenon_collapse" style="margin-left: 10px;">EnvironmentalPhenomenon</a></legend>
                    <div id="{{id}}_EnvironmentalPhenomenon_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeInterval'>timeInterval: </label><div class='col-sm-8'><input id='{{id}}_timeInterval' class='form-control' type='text'{{#timeInterval}} value='{{timeInterval}}'{{/timeInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PhenomenonClassification'>PhenomenonClassification: </label><div class='col-sm-8'><input id='{{id}}_PhenomenonClassification' class='form-control' type='text'{{#PhenomenonClassification}} value='{{PhenomenonClassification}}'{{/PhenomenonClassification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalLocationKind'>EnvironmentalLocationKind: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalLocationKind' class='form-control' type='text'{{#EnvironmentalLocationKind}} value='{{EnvironmentalLocationKind_string}}'{{/EnvironmentalLocationKind}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalInformation'>EnvironmentalInformation: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalInformation' class='form-control' type='text'{{#EnvironmentalInformation}} value='{{EnvironmentalInformation}}'{{/EnvironmentalInformation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnvironmentalPhenomenon" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_timeInterval").value; if ("" !== temp) obj["timeInterval"] = temp;
                temp = document.getElementById (id + "_PhenomenonClassification").value; if ("" !== temp) obj["PhenomenonClassification"] = temp;
                temp = document.getElementById (id + "_EnvironmentalLocationKind").value; if ("" !== temp) obj["EnvironmentalLocationKind"] = temp.split (",");
                temp = document.getElementById (id + "_EnvironmentalInformation").value; if ("" !== temp) obj["EnvironmentalInformation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PhenomenonClassification", "0..1", "0..*", "PhenomenonClassification", "EnvironmentalPhenomenon"],
                            ["EnvironmentalLocationKind", "0..*", "0..*", "EnvironmentalLocationType", "EnvironmentalPhenomenon"],
                            ["EnvironmentalInformation", "0..1", "0..*", "EnvironmentalInformation", "EnvironmentalPhenomenon"]
                        ]
                    )
                );
            }
        }

        /**
         * Type of environmental location.
         *
         * Used when an environmental alert or phenomenon has multiple locations associated with it.
         *
         */
        class EnvironmentalLocationType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnvironmentalLocationType;
                if (null == bucket)
                   cim_data.EnvironmentalLocationType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnvironmentalLocationType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalLocationType";
                base.parse_attribute (/<cim:EnvironmentalLocationType.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:EnvironmentalLocationType.Location\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
                base.parse_attributes (/<cim:EnvironmentalLocationType.EnvironmentalPhenomenon\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalPhenomenon", sub, context);
                base.parse_attributes (/<cim:EnvironmentalLocationType.EnvironmentalAlert\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalAlert", sub, context);
                let bucket = context.parsed.EnvironmentalLocationType;
                if (null == bucket)
                   context.parsed.EnvironmentalLocationType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "EnvironmentalLocationType", "kind", "kind", fields);
                base.export_attribute (obj, "EnvironmentalLocationType", "Location", "Location", fields);
                base.export_attributes (obj, "EnvironmentalLocationType", "EnvironmentalPhenomenon", "EnvironmentalPhenomenon", fields);
                base.export_attributes (obj, "EnvironmentalLocationType", "EnvironmentalAlert", "EnvironmentalAlert", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnvironmentalLocationType_collapse" aria-expanded="true" aria-controls="EnvironmentalLocationType_collapse" style="margin-left: 10px;">EnvironmentalLocationType</a></legend>
                    <div id="EnvironmentalLocationType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Location}}<div><b>Location</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Location}}");}); return false;'>{{Location}}</a></div>{{/Location}}
                    {{#EnvironmentalPhenomenon}}<div><b>EnvironmentalPhenomenon</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalPhenomenon}}
                    {{#EnvironmentalAlert}}<div><b>EnvironmentalAlert</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalAlert}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindLocationKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in EnvDomain.LocationKind) obj["kindLocationKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                if (obj["EnvironmentalPhenomenon"]) obj["EnvironmentalPhenomenon_string"] = obj["EnvironmentalPhenomenon"].join ();
                if (obj["EnvironmentalAlert"]) obj["EnvironmentalAlert_string"] = obj["EnvironmentalAlert"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindLocationKind"];
                delete obj["EnvironmentalPhenomenon_string"];
                delete obj["EnvironmentalAlert_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnvironmentalLocationType_collapse" aria-expanded="true" aria-controls="{{id}}_EnvironmentalLocationType_collapse" style="margin-left: 10px;">EnvironmentalLocationType</a></legend>
                    <div id="{{id}}_EnvironmentalLocationType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindLocationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindLocationKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Location'>Location: </label><div class='col-sm-8'><input id='{{id}}_Location' class='form-control' type='text'{{#Location}} value='{{Location}}'{{/Location}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalPhenomenon'>EnvironmentalPhenomenon: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalPhenomenon' class='form-control' type='text'{{#EnvironmentalPhenomenon}} value='{{EnvironmentalPhenomenon_string}}'{{/EnvironmentalPhenomenon}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalAlert'>EnvironmentalAlert: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalAlert' class='form-control' type='text'{{#EnvironmentalAlert}} value='{{EnvironmentalAlert_string}}'{{/EnvironmentalAlert}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnvironmentalLocationType" };
                super.submit (id, obj);
                temp = EnvDomain.LocationKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#LocationKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_Location").value; if ("" !== temp) obj["Location"] = temp;
                temp = document.getElementById (id + "_EnvironmentalPhenomenon").value; if ("" !== temp) obj["EnvironmentalPhenomenon"] = temp.split (",");
                temp = document.getElementById (id + "_EnvironmentalAlert").value; if ("" !== temp) obj["EnvironmentalAlert"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Location", "0..1", "0..*", "Location", "EnvironmentalLocationKind"],
                            ["EnvironmentalPhenomenon", "0..*", "0..*", "EnvironmentalPhenomenon", "EnvironmentalLocationKind"],
                            ["EnvironmentalAlert", "0..*", "1..*", "EnvironmentalAlert", "EnvironmentalLocationKind"]
                        ]
                    )
                );
            }
        }

        /**
         * An entity defining classifications or categories of environmental information, like phenomena or alerts.
         *
         */
        class EnvironmentalDataAuthority extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnvironmentalDataAuthority;
                if (null == bucket)
                   cim_data.EnvironmentalDataAuthority = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnvironmentalDataAuthority[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalDataAuthority";
                base.parse_attributes (/<cim:EnvironmentalDataAuthority.AlertTypeList\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AlertTypeList", sub, context);
                base.parse_attributes (/<cim:EnvironmentalDataAuthority.PhenomenonClassification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PhenomenonClassification", sub, context);
                let bucket = context.parsed.EnvironmentalDataAuthority;
                if (null == bucket)
                   context.parsed.EnvironmentalDataAuthority = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "EnvironmentalDataAuthority", "AlertTypeList", "AlertTypeList", fields);
                base.export_attributes (obj, "EnvironmentalDataAuthority", "PhenomenonClassification", "PhenomenonClassification", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnvironmentalDataAuthority_collapse" aria-expanded="true" aria-controls="EnvironmentalDataAuthority_collapse" style="margin-left: 10px;">EnvironmentalDataAuthority</a></legend>
                    <div id="EnvironmentalDataAuthority_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#AlertTypeList}}<div><b>AlertTypeList</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AlertTypeList}}
                    {{#PhenomenonClassification}}<div><b>PhenomenonClassification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/PhenomenonClassification}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["AlertTypeList"]) obj["AlertTypeList_string"] = obj["AlertTypeList"].join ();
                if (obj["PhenomenonClassification"]) obj["PhenomenonClassification_string"] = obj["PhenomenonClassification"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["AlertTypeList_string"];
                delete obj["PhenomenonClassification_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnvironmentalDataAuthority_collapse" aria-expanded="true" aria-controls="{{id}}_EnvironmentalDataAuthority_collapse" style="margin-left: 10px;">EnvironmentalDataAuthority</a></legend>
                    <div id="{{id}}_EnvironmentalDataAuthority_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "EnvironmentalDataAuthority" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AlertTypeList", "0..*", "0..1", "AlertTypeList", "EnvironmentalDataAuthority"],
                            ["PhenomenonClassification", "0..*", "0..1", "PhenomenonClassification", "EnvironmentalDataAuthority"]
                        ]
                    )
                );
            }
        }

        /**
         * A classification condition used to define preconditions that must be met by a phenomena classification.
         *
         */
        class ClassificationCondition extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ClassificationCondition;
                if (null == bucket)
                   cim_data.ClassificationCondition = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ClassificationCondition[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ClassificationCondition";
                base.parse_element (/<cim:ClassificationCondition.duration>([\s\S]*?)<\/cim:ClassificationCondition.duration>/g, obj, "duration", base.to_string, sub, context);
                base.parse_attribute (/<cim:ClassificationCondition.test\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "test", sub, context);
                base.parse_attributes (/<cim:ClassificationCondition.EnvironmentalAnalog\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalAnalog", sub, context);
                base.parse_attribute (/<cim:ClassificationCondition.PhenomenonClassification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PhenomenonClassification", sub, context);
                base.parse_attributes (/<cim:ClassificationCondition.EnvironmentalStringMeasurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalStringMeasurement", sub, context);
                let bucket = context.parsed.ClassificationCondition;
                if (null == bucket)
                   context.parsed.ClassificationCondition = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ClassificationCondition", "duration", "duration",  base.from_string, fields);
                base.export_attribute (obj, "ClassificationCondition", "test", "test", fields);
                base.export_attributes (obj, "ClassificationCondition", "EnvironmentalAnalog", "EnvironmentalAnalog", fields);
                base.export_attribute (obj, "ClassificationCondition", "PhenomenonClassification", "PhenomenonClassification", fields);
                base.export_attributes (obj, "ClassificationCondition", "EnvironmentalStringMeasurement", "EnvironmentalStringMeasurement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ClassificationCondition_collapse" aria-expanded="true" aria-controls="ClassificationCondition_collapse" style="margin-left: 10px;">ClassificationCondition</a></legend>
                    <div id="ClassificationCondition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#duration}}<div><b>duration</b>: {{duration}}</div>{{/duration}}
                    {{#test}}<div><b>test</b>: {{test}}</div>{{/test}}
                    {{#EnvironmentalAnalog}}<div><b>EnvironmentalAnalog</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalAnalog}}
                    {{#PhenomenonClassification}}<div><b>PhenomenonClassification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PhenomenonClassification}}");}); return false;'>{{PhenomenonClassification}}</a></div>{{/PhenomenonClassification}}
                    {{#EnvironmentalStringMeasurement}}<div><b>EnvironmentalStringMeasurement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalStringMeasurement}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["testTestKind"] = [{ id: '', selected: (!obj["test"])}]; for (let property in EnvDomain.TestKind) obj["testTestKind"].push ({ id: property, selected: obj["test"] && obj["test"].endsWith ('.' + property)});
                if (obj["EnvironmentalAnalog"]) obj["EnvironmentalAnalog_string"] = obj["EnvironmentalAnalog"].join ();
                if (obj["EnvironmentalStringMeasurement"]) obj["EnvironmentalStringMeasurement_string"] = obj["EnvironmentalStringMeasurement"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["testTestKind"];
                delete obj["EnvironmentalAnalog_string"];
                delete obj["EnvironmentalStringMeasurement_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ClassificationCondition_collapse" aria-expanded="true" aria-controls="{{id}}_ClassificationCondition_collapse" style="margin-left: 10px;">ClassificationCondition</a></legend>
                    <div id="{{id}}_ClassificationCondition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_duration'>duration: </label><div class='col-sm-8'><input id='{{id}}_duration' class='form-control' type='text'{{#duration}} value='{{duration}}'{{/duration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_test'>test: </label><div class='col-sm-8'><select id='{{id}}_test' class='form-control custom-select'>{{#testTestKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/testTestKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PhenomenonClassification'>PhenomenonClassification: </label><div class='col-sm-8'><input id='{{id}}_PhenomenonClassification' class='form-control' type='text'{{#PhenomenonClassification}} value='{{PhenomenonClassification}}'{{/PhenomenonClassification}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ClassificationCondition" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_duration").value; if ("" !== temp) obj["duration"] = temp;
                temp = EnvDomain.TestKind[document.getElementById (id + "_test").value]; if (temp) obj["test"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#TestKind." + temp; else delete obj["test"];
                temp = document.getElementById (id + "_PhenomenonClassification").value; if ("" !== temp) obj["PhenomenonClassification"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnvironmentalAnalog", "0..*", "0..1", "EnvironmentalAnalog", "ClassificationCondition"],
                            ["PhenomenonClassification", "0..1", "0..*", "PhenomenonClassification", "ClassificationCondition"],
                            ["EnvironmentalStringMeasurement", "0..*", "0..1", "EnvironmentalStringMeasurement", "ClassificationCondition"]
                        ]
                    )
                );
            }
        }

        /**
         * A pre-defined phenomenon classification as defined by a particular authority.
         *
         */
        class PhenomenonClassification extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PhenomenonClassification;
                if (null == bucket)
                   cim_data.PhenomenonClassification = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PhenomenonClassification[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PhenomenonClassification";
                base.parse_attributes (/<cim:PhenomenonClassification.EnvironmentalPhenomenon\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalPhenomenon", sub, context);
                base.parse_attributes (/<cim:PhenomenonClassification.ClassificationCondition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ClassificationCondition", sub, context);
                base.parse_attribute (/<cim:PhenomenonClassification.EnvironmentalDataAuthority\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalDataAuthority", sub, context);
                let bucket = context.parsed.PhenomenonClassification;
                if (null == bucket)
                   context.parsed.PhenomenonClassification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "PhenomenonClassification", "EnvironmentalPhenomenon", "EnvironmentalPhenomenon", fields);
                base.export_attributes (obj, "PhenomenonClassification", "ClassificationCondition", "ClassificationCondition", fields);
                base.export_attribute (obj, "PhenomenonClassification", "EnvironmentalDataAuthority", "EnvironmentalDataAuthority", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PhenomenonClassification_collapse" aria-expanded="true" aria-controls="PhenomenonClassification_collapse" style="margin-left: 10px;">PhenomenonClassification</a></legend>
                    <div id="PhenomenonClassification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#EnvironmentalPhenomenon}}<div><b>EnvironmentalPhenomenon</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalPhenomenon}}
                    {{#ClassificationCondition}}<div><b>ClassificationCondition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ClassificationCondition}}
                    {{#EnvironmentalDataAuthority}}<div><b>EnvironmentalDataAuthority</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnvironmentalDataAuthority}}");}); return false;'>{{EnvironmentalDataAuthority}}</a></div>{{/EnvironmentalDataAuthority}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EnvironmentalPhenomenon"]) obj["EnvironmentalPhenomenon_string"] = obj["EnvironmentalPhenomenon"].join ();
                if (obj["ClassificationCondition"]) obj["ClassificationCondition_string"] = obj["ClassificationCondition"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EnvironmentalPhenomenon_string"];
                delete obj["ClassificationCondition_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PhenomenonClassification_collapse" aria-expanded="true" aria-controls="{{id}}_PhenomenonClassification_collapse" style="margin-left: 10px;">PhenomenonClassification</a></legend>
                    <div id="{{id}}_PhenomenonClassification_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalDataAuthority'>EnvironmentalDataAuthority: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalDataAuthority' class='form-control' type='text'{{#EnvironmentalDataAuthority}} value='{{EnvironmentalDataAuthority}}'{{/EnvironmentalDataAuthority}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PhenomenonClassification" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EnvironmentalDataAuthority").value; if ("" !== temp) obj["EnvironmentalDataAuthority"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnvironmentalPhenomenon", "0..*", "0..1", "EnvironmentalPhenomenon", "PhenomenonClassification"],
                            ["ClassificationCondition", "0..*", "0..1", "ClassificationCondition", "PhenomenonClassification"],
                            ["EnvironmentalDataAuthority", "0..1", "0..*", "EnvironmentalDataAuthority", "PhenomenonClassification"]
                        ]
                    )
                );
            }
        }

        /**
         * String measurement of relevance in the environmental domain.
         *
         */
        class EnvironmentalStringMeasurement extends Meas.StringMeasurement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnvironmentalStringMeasurement;
                if (null == bucket)
                   cim_data.EnvironmentalStringMeasurement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnvironmentalStringMeasurement[obj.id];
            }

            parse (context, sub)
            {
                let obj = Meas.StringMeasurement.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalStringMeasurement";
                base.parse_attribute (/<cim:EnvironmentalStringMeasurement.EnvironmentalInformation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalInformation", sub, context);
                base.parse_attribute (/<cim:EnvironmentalStringMeasurement.ClassificationCondition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ClassificationCondition", sub, context);
                let bucket = context.parsed.EnvironmentalStringMeasurement;
                if (null == bucket)
                   context.parsed.EnvironmentalStringMeasurement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Meas.StringMeasurement.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnvironmentalStringMeasurement", "EnvironmentalInformation", "EnvironmentalInformation", fields);
                base.export_attribute (obj, "EnvironmentalStringMeasurement", "ClassificationCondition", "ClassificationCondition", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnvironmentalStringMeasurement_collapse" aria-expanded="true" aria-controls="EnvironmentalStringMeasurement_collapse" style="margin-left: 10px;">EnvironmentalStringMeasurement</a></legend>
                    <div id="EnvironmentalStringMeasurement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.StringMeasurement.prototype.template.call (this) +
                    `
                    {{#EnvironmentalInformation}}<div><b>EnvironmentalInformation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnvironmentalInformation}}");}); return false;'>{{EnvironmentalInformation}}</a></div>{{/EnvironmentalInformation}}
                    {{#ClassificationCondition}}<div><b>ClassificationCondition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ClassificationCondition}}");}); return false;'>{{ClassificationCondition}}</a></div>{{/ClassificationCondition}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnvironmentalStringMeasurement_collapse" aria-expanded="true" aria-controls="{{id}}_EnvironmentalStringMeasurement_collapse" style="margin-left: 10px;">EnvironmentalStringMeasurement</a></legend>
                    <div id="{{id}}_EnvironmentalStringMeasurement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.StringMeasurement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalInformation'>EnvironmentalInformation: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalInformation' class='form-control' type='text'{{#EnvironmentalInformation}} value='{{EnvironmentalInformation}}'{{/EnvironmentalInformation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ClassificationCondition'>ClassificationCondition: </label><div class='col-sm-8'><input id='{{id}}_ClassificationCondition' class='form-control' type='text'{{#ClassificationCondition}} value='{{ClassificationCondition}}'{{/ClassificationCondition}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnvironmentalStringMeasurement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EnvironmentalInformation").value; if ("" !== temp) obj["EnvironmentalInformation"] = temp;
                temp = document.getElementById (id + "_ClassificationCondition").value; if ("" !== temp) obj["ClassificationCondition"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnvironmentalInformation", "0..1", "0..*", "EnvironmentalInformation", "EnvironmentalStringMeasurement"],
                            ["ClassificationCondition", "0..1", "0..*", "ClassificationCondition", "EnvironmentalStringMeasurement"]
                        ]
                    )
                );
            }
        }

        /**
         * Analog (float) measurement of relevance in the environmental domain.
         *
         */
        class EnvironmentalAnalog extends Meas.Analog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnvironmentalAnalog;
                if (null == bucket)
                   cim_data.EnvironmentalAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnvironmentalAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = Meas.Analog.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalAnalog";
                base.parse_attribute (/<cim:EnvironmentalAnalog.EnvironmentalInformation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalInformation", sub, context);
                base.parse_attribute (/<cim:EnvironmentalAnalog.ClassificationCondition\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ClassificationCondition", sub, context);
                base.parse_attribute (/<cim:EnvironmentalAnalog.ReportingCapability\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReportingCapability", sub, context);
                base.parse_attribute (/<cim:EnvironmentalAnalog.EnvironmentalMonitoringStation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalMonitoringStation", sub, context);
                let bucket = context.parsed.EnvironmentalAnalog;
                if (null == bucket)
                   context.parsed.EnvironmentalAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Meas.Analog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnvironmentalAnalog", "EnvironmentalInformation", "EnvironmentalInformation", fields);
                base.export_attribute (obj, "EnvironmentalAnalog", "ClassificationCondition", "ClassificationCondition", fields);
                base.export_attribute (obj, "EnvironmentalAnalog", "ReportingCapability", "ReportingCapability", fields);
                base.export_attribute (obj, "EnvironmentalAnalog", "EnvironmentalMonitoringStation", "EnvironmentalMonitoringStation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnvironmentalAnalog_collapse" aria-expanded="true" aria-controls="EnvironmentalAnalog_collapse" style="margin-left: 10px;">EnvironmentalAnalog</a></legend>
                    <div id="EnvironmentalAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.Analog.prototype.template.call (this) +
                    `
                    {{#EnvironmentalInformation}}<div><b>EnvironmentalInformation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnvironmentalInformation}}");}); return false;'>{{EnvironmentalInformation}}</a></div>{{/EnvironmentalInformation}}
                    {{#ClassificationCondition}}<div><b>ClassificationCondition</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ClassificationCondition}}");}); return false;'>{{ClassificationCondition}}</a></div>{{/ClassificationCondition}}
                    {{#ReportingCapability}}<div><b>ReportingCapability</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ReportingCapability}}");}); return false;'>{{ReportingCapability}}</a></div>{{/ReportingCapability}}
                    {{#EnvironmentalMonitoringStation}}<div><b>EnvironmentalMonitoringStation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnvironmentalMonitoringStation}}");}); return false;'>{{EnvironmentalMonitoringStation}}</a></div>{{/EnvironmentalMonitoringStation}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnvironmentalAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_EnvironmentalAnalog_collapse" style="margin-left: 10px;">EnvironmentalAnalog</a></legend>
                    <div id="{{id}}_EnvironmentalAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.Analog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalInformation'>EnvironmentalInformation: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalInformation' class='form-control' type='text'{{#EnvironmentalInformation}} value='{{EnvironmentalInformation}}'{{/EnvironmentalInformation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ClassificationCondition'>ClassificationCondition: </label><div class='col-sm-8'><input id='{{id}}_ClassificationCondition' class='form-control' type='text'{{#ClassificationCondition}} value='{{ClassificationCondition}}'{{/ClassificationCondition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReportingCapability'>ReportingCapability: </label><div class='col-sm-8'><input id='{{id}}_ReportingCapability' class='form-control' type='text'{{#ReportingCapability}} value='{{ReportingCapability}}'{{/ReportingCapability}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalMonitoringStation'>EnvironmentalMonitoringStation: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalMonitoringStation' class='form-control' type='text'{{#EnvironmentalMonitoringStation}} value='{{EnvironmentalMonitoringStation}}'{{/EnvironmentalMonitoringStation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnvironmentalAnalog" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EnvironmentalInformation").value; if ("" !== temp) obj["EnvironmentalInformation"] = temp;
                temp = document.getElementById (id + "_ClassificationCondition").value; if ("" !== temp) obj["ClassificationCondition"] = temp;
                temp = document.getElementById (id + "_ReportingCapability").value; if ("" !== temp) obj["ReportingCapability"] = temp;
                temp = document.getElementById (id + "_EnvironmentalMonitoringStation").value; if ("" !== temp) obj["EnvironmentalMonitoringStation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnvironmentalInformation", "0..1", "0..*", "EnvironmentalInformation", "EnvironmentalAnalog"],
                            ["ClassificationCondition", "0..1", "0..*", "ClassificationCondition", "EnvironmentalAnalog"],
                            ["ReportingCapability", "0..1", "0..*", "ReportingCapability", "EnvironmentalAnalog"],
                            ["EnvironmentalMonitoringStation", "0..1", "0..*", "EnvironmentalMonitoringStation", "EnvironmentalAnalog"]
                        ]
                    )
                );
            }
        }

        /**
         * Abstract class (with concrete child classes of Observation and Forecast) that groups phenomenon and/or environmental value sets.
         *
         */
        class EnvironmentalInformation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnvironmentalInformation;
                if (null == bucket)
                   cim_data.EnvironmentalInformation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnvironmentalInformation[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalInformation";
                base.parse_element (/<cim:EnvironmentalInformation.created>([\s\S]*?)<\/cim:EnvironmentalInformation.created>/g, obj, "created", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:EnvironmentalInformation.EnvironmentalAnalog\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalAnalog", sub, context);
                base.parse_attributes (/<cim:EnvironmentalInformation.EnvironmentalStringMeasurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalStringMeasurement", sub, context);
                base.parse_attributes (/<cim:EnvironmentalInformation.EnvironmentalDiscrete\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalDiscrete", sub, context);
                base.parse_attributes (/<cim:EnvironmentalInformation.EnvironmentalEvent\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalEvent", sub, context);
                base.parse_attributes (/<cim:EnvironmentalInformation.EnvironmentalPhenomenon\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalPhenomenon", sub, context);
                base.parse_attribute (/<cim:EnvironmentalInformation.EnvironmentalDataProvider\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalDataProvider", sub, context);
                let bucket = context.parsed.EnvironmentalInformation;
                if (null == bucket)
                   context.parsed.EnvironmentalInformation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "EnvironmentalInformation", "created", "created",  base.from_datetime, fields);
                base.export_attributes (obj, "EnvironmentalInformation", "EnvironmentalAnalog", "EnvironmentalAnalog", fields);
                base.export_attributes (obj, "EnvironmentalInformation", "EnvironmentalStringMeasurement", "EnvironmentalStringMeasurement", fields);
                base.export_attributes (obj, "EnvironmentalInformation", "EnvironmentalDiscrete", "EnvironmentalDiscrete", fields);
                base.export_attributes (obj, "EnvironmentalInformation", "EnvironmentalEvent", "EnvironmentalEvent", fields);
                base.export_attributes (obj, "EnvironmentalInformation", "EnvironmentalPhenomenon", "EnvironmentalPhenomenon", fields);
                base.export_attribute (obj, "EnvironmentalInformation", "EnvironmentalDataProvider", "EnvironmentalDataProvider", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnvironmentalInformation_collapse" aria-expanded="true" aria-controls="EnvironmentalInformation_collapse" style="margin-left: 10px;">EnvironmentalInformation</a></legend>
                    <div id="EnvironmentalInformation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#created}}<div><b>created</b>: {{created}}</div>{{/created}}
                    {{#EnvironmentalAnalog}}<div><b>EnvironmentalAnalog</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalAnalog}}
                    {{#EnvironmentalStringMeasurement}}<div><b>EnvironmentalStringMeasurement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalStringMeasurement}}
                    {{#EnvironmentalDiscrete}}<div><b>EnvironmentalDiscrete</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalDiscrete}}
                    {{#EnvironmentalEvent}}<div><b>EnvironmentalEvent</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalEvent}}
                    {{#EnvironmentalPhenomenon}}<div><b>EnvironmentalPhenomenon</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalPhenomenon}}
                    {{#EnvironmentalDataProvider}}<div><b>EnvironmentalDataProvider</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnvironmentalDataProvider}}");}); return false;'>{{EnvironmentalDataProvider}}</a></div>{{/EnvironmentalDataProvider}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EnvironmentalAnalog"]) obj["EnvironmentalAnalog_string"] = obj["EnvironmentalAnalog"].join ();
                if (obj["EnvironmentalStringMeasurement"]) obj["EnvironmentalStringMeasurement_string"] = obj["EnvironmentalStringMeasurement"].join ();
                if (obj["EnvironmentalDiscrete"]) obj["EnvironmentalDiscrete_string"] = obj["EnvironmentalDiscrete"].join ();
                if (obj["EnvironmentalEvent"]) obj["EnvironmentalEvent_string"] = obj["EnvironmentalEvent"].join ();
                if (obj["EnvironmentalPhenomenon"]) obj["EnvironmentalPhenomenon_string"] = obj["EnvironmentalPhenomenon"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EnvironmentalAnalog_string"];
                delete obj["EnvironmentalStringMeasurement_string"];
                delete obj["EnvironmentalDiscrete_string"];
                delete obj["EnvironmentalEvent_string"];
                delete obj["EnvironmentalPhenomenon_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnvironmentalInformation_collapse" aria-expanded="true" aria-controls="{{id}}_EnvironmentalInformation_collapse" style="margin-left: 10px;">EnvironmentalInformation</a></legend>
                    <div id="{{id}}_EnvironmentalInformation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_created'>created: </label><div class='col-sm-8'><input id='{{id}}_created' class='form-control' type='text'{{#created}} value='{{created}}'{{/created}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalEvent'>EnvironmentalEvent: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalEvent' class='form-control' type='text'{{#EnvironmentalEvent}} value='{{EnvironmentalEvent_string}}'{{/EnvironmentalEvent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnvironmentalDataProvider'>EnvironmentalDataProvider: </label><div class='col-sm-8'><input id='{{id}}_EnvironmentalDataProvider' class='form-control' type='text'{{#EnvironmentalDataProvider}} value='{{EnvironmentalDataProvider}}'{{/EnvironmentalDataProvider}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnvironmentalInformation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_created").value; if ("" !== temp) obj["created"] = temp;
                temp = document.getElementById (id + "_EnvironmentalEvent").value; if ("" !== temp) obj["EnvironmentalEvent"] = temp.split (",");
                temp = document.getElementById (id + "_EnvironmentalDataProvider").value; if ("" !== temp) obj["EnvironmentalDataProvider"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnvironmentalAnalog", "0..*", "0..1", "EnvironmentalAnalog", "EnvironmentalInformation"],
                            ["EnvironmentalStringMeasurement", "0..*", "0..1", "EnvironmentalStringMeasurement", "EnvironmentalInformation"],
                            ["EnvironmentalDiscrete", "0..*", "0..1", "EnvironmentalDiscrete", "EnvironmentalInformation"],
                            ["EnvironmentalEvent", "0..*", "0..*", "EnvironmentalEvent", "EnvironmentalInformation"],
                            ["EnvironmentalPhenomenon", "0..*", "0..1", "EnvironmentalPhenomenon", "EnvironmentalInformation"],
                            ["EnvironmentalDataProvider", "0..1", "0..*", "EnvironmentalDataProvider", "EnvironmentalInformation"]
                        ]
                    )
                );
            }
        }

        /**
         * A hydrospheric phenomenon.
         *
         */
        class HydrosphericPhenomenon extends EnvironmentalPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.HydrosphericPhenomenon;
                if (null == bucket)
                   cim_data.HydrosphericPhenomenon = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HydrosphericPhenomenon[obj.id];
            }

            parse (context, sub)
            {
                let obj = EnvironmentalPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "HydrosphericPhenomenon";
                let bucket = context.parsed.HydrosphericPhenomenon;
                if (null == bucket)
                   context.parsed.HydrosphericPhenomenon = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EnvironmentalPhenomenon.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HydrosphericPhenomenon_collapse" aria-expanded="true" aria-controls="HydrosphericPhenomenon_collapse" style="margin-left: 10px;">HydrosphericPhenomenon</a></legend>
                    <div id="HydrosphericPhenomenon_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalPhenomenon.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HydrosphericPhenomenon_collapse" aria-expanded="true" aria-controls="{{id}}_HydrosphericPhenomenon_collapse" style="margin-left: 10px;">HydrosphericPhenomenon</a></legend>
                    <div id="{{id}}_HydrosphericPhenomenon_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalPhenomenon.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "HydrosphericPhenomenon" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * An atmospheric phenomenon with a base and altitude providing the vertical coverage (combined with the Location to provide three dimensional space).
         *
         */
        class AtmosphericPhenomenon extends EnvironmentalPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AtmosphericPhenomenon;
                if (null == bucket)
                   cim_data.AtmosphericPhenomenon = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AtmosphericPhenomenon[obj.id];
            }

            parse (context, sub)
            {
                let obj = EnvironmentalPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "AtmosphericPhenomenon";
                base.parse_attribute (/<cim:AtmosphericPhenomenon.altitude\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "altitude", sub, context);
                base.parse_attribute (/<cim:AtmosphericPhenomenon.base\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "base", sub, context);
                base.parse_element (/<cim:AtmosphericPhenomenon.direction>([\s\S]*?)<\/cim:AtmosphericPhenomenon.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_element (/<cim:AtmosphericPhenomenon.maxCoverage>([\s\S]*?)<\/cim:AtmosphericPhenomenon.maxCoverage>/g, obj, "maxCoverage", base.to_string, sub, context);
                base.parse_element (/<cim:AtmosphericPhenomenon.minCoverage>([\s\S]*?)<\/cim:AtmosphericPhenomenon.minCoverage>/g, obj, "minCoverage", base.to_string, sub, context);
                base.parse_element (/<cim:AtmosphericPhenomenon.speed>([\s\S]*?)<\/cim:AtmosphericPhenomenon.speed>/g, obj, "speed", base.to_string, sub, context);
                let bucket = context.parsed.AtmosphericPhenomenon;
                if (null == bucket)
                   context.parsed.AtmosphericPhenomenon = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EnvironmentalPhenomenon.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AtmosphericPhenomenon", "altitude", "altitude", fields);
                base.export_attribute (obj, "AtmosphericPhenomenon", "base", "base", fields);
                base.export_element (obj, "AtmosphericPhenomenon", "direction", "direction",  base.from_string, fields);
                base.export_element (obj, "AtmosphericPhenomenon", "maxCoverage", "maxCoverage",  base.from_string, fields);
                base.export_element (obj, "AtmosphericPhenomenon", "minCoverage", "minCoverage",  base.from_string, fields);
                base.export_element (obj, "AtmosphericPhenomenon", "speed", "speed",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AtmosphericPhenomenon_collapse" aria-expanded="true" aria-controls="AtmosphericPhenomenon_collapse" style="margin-left: 10px;">AtmosphericPhenomenon</a></legend>
                    <div id="AtmosphericPhenomenon_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalPhenomenon.prototype.template.call (this) +
                    `
                    {{#altitude}}<div><b>altitude</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{altitude}}");}); return false;'>{{altitude}}</a></div>{{/altitude}}
                    {{#base}}<div><b>base</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{base}}");}); return false;'>{{base}}</a></div>{{/base}}
                    {{#direction}}<div><b>direction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{direction}}");}); return false;'>{{direction}}</a></div>{{/direction}}
                    {{#maxCoverage}}<div><b>maxCoverage</b>: {{maxCoverage}}</div>{{/maxCoverage}}
                    {{#minCoverage}}<div><b>minCoverage</b>: {{minCoverage}}</div>{{/minCoverage}}
                    {{#speed}}<div><b>speed</b>: {{speed}}</div>{{/speed}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AtmosphericPhenomenon_collapse" aria-expanded="true" aria-controls="{{id}}_AtmosphericPhenomenon_collapse" style="margin-left: 10px;">AtmosphericPhenomenon</a></legend>
                    <div id="{{id}}_AtmosphericPhenomenon_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalPhenomenon.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_altitude'>altitude: </label><div class='col-sm-8'><input id='{{id}}_altitude' class='form-control' type='text'{{#altitude}} value='{{altitude}}'{{/altitude}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_base'>base: </label><div class='col-sm-8'><input id='{{id}}_base' class='form-control' type='text'{{#base}} value='{{base}}'{{/base}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_direction'>direction: </label><div class='col-sm-8'><input id='{{id}}_direction' class='form-control' type='text'{{#direction}} value='{{direction}}'{{/direction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxCoverage'>maxCoverage: </label><div class='col-sm-8'><input id='{{id}}_maxCoverage' class='form-control' type='text'{{#maxCoverage}} value='{{maxCoverage}}'{{/maxCoverage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minCoverage'>minCoverage: </label><div class='col-sm-8'><input id='{{id}}_minCoverage' class='form-control' type='text'{{#minCoverage}} value='{{minCoverage}}'{{/minCoverage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_speed'>speed: </label><div class='col-sm-8'><input id='{{id}}_speed' class='form-control' type='text'{{#speed}} value='{{speed}}'{{/speed}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AtmosphericPhenomenon" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_altitude").value; if ("" !== temp) obj["altitude"] = temp;
                temp = document.getElementById (id + "_base").value; if ("" !== temp) obj["base"] = temp;
                temp = document.getElementById (id + "_direction").value; if ("" !== temp) obj["direction"] = temp;
                temp = document.getElementById (id + "_maxCoverage").value; if ("" !== temp) obj["maxCoverage"] = temp;
                temp = document.getElementById (id + "_minCoverage").value; if ("" !== temp) obj["minCoverage"] = temp;
                temp = document.getElementById (id + "_speed").value; if ("" !== temp) obj["speed"] = temp;

                return (obj);
            }
        }

        /**
         * A geospheric phenomenon.
         *
         */
        class GeosphericPhenomenon extends EnvironmentalPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.GeosphericPhenomenon;
                if (null == bucket)
                   cim_data.GeosphericPhenomenon = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GeosphericPhenomenon[obj.id];
            }

            parse (context, sub)
            {
                let obj = EnvironmentalPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "GeosphericPhenomenon";
                let bucket = context.parsed.GeosphericPhenomenon;
                if (null == bucket)
                   context.parsed.GeosphericPhenomenon = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EnvironmentalPhenomenon.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GeosphericPhenomenon_collapse" aria-expanded="true" aria-controls="GeosphericPhenomenon_collapse" style="margin-left: 10px;">GeosphericPhenomenon</a></legend>
                    <div id="GeosphericPhenomenon_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalPhenomenon.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GeosphericPhenomenon_collapse" aria-expanded="true" aria-controls="{{id}}_GeosphericPhenomenon_collapse" style="margin-left: 10px;">GeosphericPhenomenon</a></legend>
                    <div id="{{id}}_GeosphericPhenomenon_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalPhenomenon.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "GeosphericPhenomenon" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A tornado, a violent destructive whirling wind accompanied by a funnel-shaped cloud that progresses in a narrow path over the land.
         *
         */
        class Tornado extends AtmosphericPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Tornado;
                if (null == bucket)
                   cim_data.Tornado = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Tornado[obj.id];
            }

            parse (context, sub)
            {
                let obj = AtmosphericPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "Tornado";
                base.parse_attribute (/<cim:Tornado.fScale\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "fScale", sub, context);
                base.parse_element (/<cim:Tornado.width>([\s\S]*?)<\/cim:Tornado.width>/g, obj, "width", base.to_string, sub, context);
                let bucket = context.parsed.Tornado;
                if (null == bucket)
                   context.parsed.Tornado = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AtmosphericPhenomenon.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Tornado", "fScale", "fScale", fields);
                base.export_element (obj, "Tornado", "width", "width",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Tornado_collapse" aria-expanded="true" aria-controls="Tornado_collapse" style="margin-left: 10px;">Tornado</a></legend>
                    <div id="Tornado_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AtmosphericPhenomenon.prototype.template.call (this) +
                    `
                    {{#fScale}}<div><b>fScale</b>: {{fScale}}</div>{{/fScale}}
                    {{#width}}<div><b>width</b>: {{width}}</div>{{/width}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["fScaleFScale"] = [{ id: '', selected: (!obj["fScale"])}]; for (let property in EnvDomain.FScale) obj["fScaleFScale"].push ({ id: property, selected: obj["fScale"] && obj["fScale"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["fScaleFScale"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Tornado_collapse" aria-expanded="true" aria-controls="{{id}}_Tornado_collapse" style="margin-left: 10px;">Tornado</a></legend>
                    <div id="{{id}}_Tornado_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AtmosphericPhenomenon.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fScale'>fScale: </label><div class='col-sm-8'><select id='{{id}}_fScale' class='form-control custom-select'>{{#fScaleFScale}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/fScaleFScale}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_width'>width: </label><div class='col-sm-8'><input id='{{id}}_width' class='form-control' type='text'{{#width}} value='{{width}}'{{/width}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Tornado" };
                super.submit (id, obj);
                temp = EnvDomain.FScale[document.getElementById (id + "_fScale").value]; if (temp) obj["fScale"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#FScale." + temp; else delete obj["fScale"];
                temp = document.getElementById (id + "_width").value; if ("" !== temp) obj["width"] = temp;

                return (obj);
            }
        }

        /**
         * A flood, an overflowing of a large amount of water beyond its normal confines, esp. over what is normally dry land.
         *
         */
        class Flood extends HydrosphericPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Flood;
                if (null == bucket)
                   cim_data.Flood = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Flood[obj.id];
            }

            parse (context, sub)
            {
                let obj = HydrosphericPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "Flood";
                let bucket = context.parsed.Flood;
                if (null == bucket)
                   context.parsed.Flood = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = HydrosphericPhenomenon.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Flood_collapse" aria-expanded="true" aria-controls="Flood_collapse" style="margin-left: 10px;">Flood</a></legend>
                    <div id="Flood_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HydrosphericPhenomenon.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Flood_collapse" aria-expanded="true" aria-controls="{{id}}_Flood_collapse" style="margin-left: 10px;">Flood</a></legend>
                    <div id="{{id}}_Flood_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HydrosphericPhenomenon.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "Flood" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A cyclone (or tropical cyclone), a rapidly-rotating storm system characterized by a low-pressure center, strong winds, and a spiral arrangement of thunderstorms that produce heavy rain.
         *
         */
        class Cyclone extends AtmosphericPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Cyclone;
                if (null == bucket)
                   cim_data.Cyclone = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Cyclone[obj.id];
            }

            parse (context, sub)
            {
                let obj = AtmosphericPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "Cyclone";
                base.parse_element (/<cim:Cyclone.centralPressure>([\s\S]*?)<\/cim:Cyclone.centralPressure>/g, obj, "centralPressure", base.to_string, sub, context);
                base.parse_element (/<cim:Cyclone.maxSurfaceWindSpeed>([\s\S]*?)<\/cim:Cyclone.maxSurfaceWindSpeed>/g, obj, "maxSurfaceWindSpeed", base.to_string, sub, context);
                base.parse_element (/<cim:Cyclone.windForce>([\s\S]*?)<\/cim:Cyclone.windForce>/g, obj, "windForce", base.to_string, sub, context);
                let bucket = context.parsed.Cyclone;
                if (null == bucket)
                   context.parsed.Cyclone = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AtmosphericPhenomenon.prototype.export.call (this, obj, false);

                base.export_element (obj, "Cyclone", "centralPressure", "centralPressure",  base.from_string, fields);
                base.export_element (obj, "Cyclone", "maxSurfaceWindSpeed", "maxSurfaceWindSpeed",  base.from_string, fields);
                base.export_element (obj, "Cyclone", "windForce", "windForce",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Cyclone_collapse" aria-expanded="true" aria-controls="Cyclone_collapse" style="margin-left: 10px;">Cyclone</a></legend>
                    <div id="Cyclone_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AtmosphericPhenomenon.prototype.template.call (this) +
                    `
                    {{#centralPressure}}<div><b>centralPressure</b>: {{centralPressure}}</div>{{/centralPressure}}
                    {{#maxSurfaceWindSpeed}}<div><b>maxSurfaceWindSpeed</b>: {{maxSurfaceWindSpeed}}</div>{{/maxSurfaceWindSpeed}}
                    {{#windForce}}<div><b>windForce</b>: {{windForce}}</div>{{/windForce}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Cyclone_collapse" aria-expanded="true" aria-controls="{{id}}_Cyclone_collapse" style="margin-left: 10px;">Cyclone</a></legend>
                    <div id="{{id}}_Cyclone_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AtmosphericPhenomenon.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_centralPressure'>centralPressure: </label><div class='col-sm-8'><input id='{{id}}_centralPressure' class='form-control' type='text'{{#centralPressure}} value='{{centralPressure}}'{{/centralPressure}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxSurfaceWindSpeed'>maxSurfaceWindSpeed: </label><div class='col-sm-8'><input id='{{id}}_maxSurfaceWindSpeed' class='form-control' type='text'{{#maxSurfaceWindSpeed}} value='{{maxSurfaceWindSpeed}}'{{/maxSurfaceWindSpeed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_windForce'>windForce: </label><div class='col-sm-8'><input id='{{id}}_windForce' class='form-control' type='text'{{#windForce}} value='{{windForce}}'{{/windForce}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Cyclone" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_centralPressure").value; if ("" !== temp) obj["centralPressure"] = temp;
                temp = document.getElementById (id + "_maxSurfaceWindSpeed").value; if ("" !== temp) obj["maxSurfaceWindSpeed"] = temp;
                temp = document.getElementById (id + "_windForce").value; if ("" !== temp) obj["windForce"] = temp;

                return (obj);
            }
        }

        /**
         * An ash cloud formed as a result of a volcanic eruption.
         *
         */
        class VolcanicAshCloud extends AtmosphericPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.VolcanicAshCloud;
                if (null == bucket)
                   cim_data.VolcanicAshCloud = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VolcanicAshCloud[obj.id];
            }

            parse (context, sub)
            {
                let obj = AtmosphericPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "VolcanicAshCloud";
                base.parse_element (/<cim:VolcanicAshCloud.density>([\s\S]*?)<\/cim:VolcanicAshCloud.density>/g, obj, "density", base.to_string, sub, context);
                base.parse_element (/<cim:VolcanicAshCloud.particleSize>([\s\S]*?)<\/cim:VolcanicAshCloud.particleSize>/g, obj, "particleSize", base.to_string, sub, context);
                let bucket = context.parsed.VolcanicAshCloud;
                if (null == bucket)
                   context.parsed.VolcanicAshCloud = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AtmosphericPhenomenon.prototype.export.call (this, obj, false);

                base.export_element (obj, "VolcanicAshCloud", "density", "density",  base.from_string, fields);
                base.export_element (obj, "VolcanicAshCloud", "particleSize", "particleSize",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#VolcanicAshCloud_collapse" aria-expanded="true" aria-controls="VolcanicAshCloud_collapse" style="margin-left: 10px;">VolcanicAshCloud</a></legend>
                    <div id="VolcanicAshCloud_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AtmosphericPhenomenon.prototype.template.call (this) +
                    `
                    {{#density}}<div><b>density</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{density}}");}); return false;'>{{density}}</a></div>{{/density}}
                    {{#particleSize}}<div><b>particleSize</b>: {{particleSize}}</div>{{/particleSize}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_VolcanicAshCloud_collapse" aria-expanded="true" aria-controls="{{id}}_VolcanicAshCloud_collapse" style="margin-left: 10px;">VolcanicAshCloud</a></legend>
                    <div id="{{id}}_VolcanicAshCloud_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AtmosphericPhenomenon.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_density'>density: </label><div class='col-sm-8'><input id='{{id}}_density' class='form-control' type='text'{{#density}} value='{{density}}'{{/density}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_particleSize'>particleSize: </label><div class='col-sm-8'><input id='{{id}}_particleSize' class='form-control' type='text'{{#particleSize}} value='{{particleSize}}'{{/particleSize}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "VolcanicAshCloud" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_density").value; if ("" !== temp) obj["density"] = temp;
                temp = document.getElementById (id + "_particleSize").value; if ("" !== temp) obj["particleSize"] = temp;

                return (obj);
            }
        }

        /**
         * A classified cloud phenomenon with a type.
         *
         */
        class CloudCondition extends AtmosphericPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CloudCondition;
                if (null == bucket)
                   cim_data.CloudCondition = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CloudCondition[obj.id];
            }

            parse (context, sub)
            {
                let obj = AtmosphericPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "CloudCondition";
                base.parse_attribute (/<cim:CloudCondition.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.CloudCondition;
                if (null == bucket)
                   context.parsed.CloudCondition = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = AtmosphericPhenomenon.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CloudCondition", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CloudCondition_collapse" aria-expanded="true" aria-controls="CloudCondition_collapse" style="margin-left: 10px;">CloudCondition</a></legend>
                    <div id="CloudCondition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AtmosphericPhenomenon.prototype.template.call (this) +
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
                obj["kindCloudKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in EnvDomain.CloudKind) obj["kindCloudKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindCloudKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CloudCondition_collapse" aria-expanded="true" aria-controls="{{id}}_CloudCondition_collapse" style="margin-left: 10px;">CloudCondition</a></legend>
                    <div id="{{id}}_CloudCondition_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AtmosphericPhenomenon.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindCloudKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindCloudKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CloudCondition" };
                super.submit (id, obj);
                temp = EnvDomain.CloudKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#CloudKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * A landslide, a large mass of rocks and earth that suddenly and quickly moves down the side of a mountain or hill.
         *
         */
        class Landslide extends GeosphericPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Landslide;
                if (null == bucket)
                   cim_data.Landslide = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Landslide[obj.id];
            }

            parse (context, sub)
            {
                let obj = GeosphericPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "Landslide";
                let bucket = context.parsed.Landslide;
                if (null == bucket)
                   context.parsed.Landslide = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GeosphericPhenomenon.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Landslide_collapse" aria-expanded="true" aria-controls="Landslide_collapse" style="margin-left: 10px;">Landslide</a></legend>
                    <div id="Landslide_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeosphericPhenomenon.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Landslide_collapse" aria-expanded="true" aria-controls="{{id}}_Landslide_collapse" style="margin-left: 10px;">Landslide</a></legend>
                    <div id="{{id}}_Landslide_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeosphericPhenomenon.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "Landslide" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A whirlpool, a rapidly rotating mass of water in a river or sea into which objects may be drawn, typically caused by the meeting of conflicting currents.
         *
         */
        class Whirlpool extends HydrosphericPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Whirlpool;
                if (null == bucket)
                   cim_data.Whirlpool = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Whirlpool[obj.id];
            }

            parse (context, sub)
            {
                let obj = HydrosphericPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "Whirlpool";
                let bucket = context.parsed.Whirlpool;
                if (null == bucket)
                   context.parsed.Whirlpool = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = HydrosphericPhenomenon.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Whirlpool_collapse" aria-expanded="true" aria-controls="Whirlpool_collapse" style="margin-left: 10px;">Whirlpool</a></legend>
                    <div id="Whirlpool_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HydrosphericPhenomenon.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Whirlpool_collapse" aria-expanded="true" aria-controls="{{id}}_Whirlpool_collapse" style="margin-left: 10px;">Whirlpool</a></legend>
                    <div id="{{id}}_Whirlpool_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HydrosphericPhenomenon.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "Whirlpool" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * An extra-terrestrial phenomenon.
         *
         */
        class SpacePhenomenon extends EnvironmentalPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SpacePhenomenon;
                if (null == bucket)
                   cim_data.SpacePhenomenon = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SpacePhenomenon[obj.id];
            }

            parse (context, sub)
            {
                let obj = EnvironmentalPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "SpacePhenomenon";
                let bucket = context.parsed.SpacePhenomenon;
                if (null == bucket)
                   context.parsed.SpacePhenomenon = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EnvironmentalPhenomenon.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SpacePhenomenon_collapse" aria-expanded="true" aria-controls="SpacePhenomenon_collapse" style="margin-left: 10px;">SpacePhenomenon</a></legend>
                    <div id="SpacePhenomenon_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalPhenomenon.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SpacePhenomenon_collapse" aria-expanded="true" aria-controls="{{id}}_SpacePhenomenon_collapse" style="margin-left: 10px;">SpacePhenomenon</a></legend>
                    <div id="{{id}}_SpacePhenomenon_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalPhenomenon.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "SpacePhenomenon" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A tsunami (tidal wave), a long high sea wave caused by an earthquake, submarine landslide, or other disturbance.
         *
         */
        class Tsunami extends HydrosphericPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Tsunami;
                if (null == bucket)
                   cim_data.Tsunami = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Tsunami[obj.id];
            }

            parse (context, sub)
            {
                let obj = HydrosphericPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "Tsunami";
                base.parse_element (/<cim:Tsunami.intensity>([\s\S]*?)<\/cim:Tsunami.intensity>/g, obj, "intensity", base.to_string, sub, context);
                base.parse_element (/<cim:Tsunami.magnitude>([\s\S]*?)<\/cim:Tsunami.magnitude>/g, obj, "magnitude", base.to_float, sub, context);
                let bucket = context.parsed.Tsunami;
                if (null == bucket)
                   context.parsed.Tsunami = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = HydrosphericPhenomenon.prototype.export.call (this, obj, false);

                base.export_element (obj, "Tsunami", "intensity", "intensity",  base.from_string, fields);
                base.export_element (obj, "Tsunami", "magnitude", "magnitude",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Tsunami_collapse" aria-expanded="true" aria-controls="Tsunami_collapse" style="margin-left: 10px;">Tsunami</a></legend>
                    <div id="Tsunami_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HydrosphericPhenomenon.prototype.template.call (this) +
                    `
                    {{#intensity}}<div><b>intensity</b>: {{intensity}}</div>{{/intensity}}
                    {{#magnitude}}<div><b>magnitude</b>: {{magnitude}}</div>{{/magnitude}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Tsunami_collapse" aria-expanded="true" aria-controls="{{id}}_Tsunami_collapse" style="margin-left: 10px;">Tsunami</a></legend>
                    <div id="{{id}}_Tsunami_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HydrosphericPhenomenon.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intensity'>intensity: </label><div class='col-sm-8'><input id='{{id}}_intensity' class='form-control' type='text'{{#intensity}} value='{{intensity}}'{{/intensity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_magnitude'>magnitude: </label><div class='col-sm-8'><input id='{{id}}_magnitude' class='form-control' type='text'{{#magnitude}} value='{{magnitude}}'{{/magnitude}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Tsunami" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_intensity").value; if ("" !== temp) obj["intensity"] = temp;
                temp = document.getElementById (id + "_magnitude").value; if ("" !== temp) obj["magnitude"] = temp;

                return (obj);
            }
        }

        /**
         * A cloud-to-ground lightning strike at a particular location.
         *
         */
        class LightningStrike extends GeosphericPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LightningStrike;
                if (null == bucket)
                   cim_data.LightningStrike = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LightningStrike[obj.id];
            }

            parse (context, sub)
            {
                let obj = GeosphericPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "LightningStrike";
                base.parse_element (/<cim:LightningStrike.errorEllipseConfidence>([\s\S]*?)<\/cim:LightningStrike.errorEllipseConfidence>/g, obj, "errorEllipseConfidence", base.to_string, sub, context);
                base.parse_element (/<cim:LightningStrike.errorEllipseMajorSemiAxis>([\s\S]*?)<\/cim:LightningStrike.errorEllipseMajorSemiAxis>/g, obj, "errorEllipseMajorSemiAxis", base.to_string, sub, context);
                base.parse_element (/<cim:LightningStrike.errorEllipseMinorSemiAxis>([\s\S]*?)<\/cim:LightningStrike.errorEllipseMinorSemiAxis>/g, obj, "errorEllipseMinorSemiAxis", base.to_string, sub, context);
                base.parse_element (/<cim:LightningStrike.errorEllipseOrientation>([\s\S]*?)<\/cim:LightningStrike.errorEllipseOrientation>/g, obj, "errorEllipseOrientation", base.to_string, sub, context);
                base.parse_element (/<cim:LightningStrike.negativePolarity>([\s\S]*?)<\/cim:LightningStrike.negativePolarity>/g, obj, "negativePolarity", base.to_boolean, sub, context);
                base.parse_element (/<cim:LightningStrike.peakAmplitude>([\s\S]*?)<\/cim:LightningStrike.peakAmplitude>/g, obj, "peakAmplitude", base.to_string, sub, context);
                let bucket = context.parsed.LightningStrike;
                if (null == bucket)
                   context.parsed.LightningStrike = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GeosphericPhenomenon.prototype.export.call (this, obj, false);

                base.export_element (obj, "LightningStrike", "errorEllipseConfidence", "errorEllipseConfidence",  base.from_string, fields);
                base.export_element (obj, "LightningStrike", "errorEllipseMajorSemiAxis", "errorEllipseMajorSemiAxis",  base.from_string, fields);
                base.export_element (obj, "LightningStrike", "errorEllipseMinorSemiAxis", "errorEllipseMinorSemiAxis",  base.from_string, fields);
                base.export_element (obj, "LightningStrike", "errorEllipseOrientation", "errorEllipseOrientation",  base.from_string, fields);
                base.export_element (obj, "LightningStrike", "negativePolarity", "negativePolarity",  base.from_boolean, fields);
                base.export_element (obj, "LightningStrike", "peakAmplitude", "peakAmplitude",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LightningStrike_collapse" aria-expanded="true" aria-controls="LightningStrike_collapse" style="margin-left: 10px;">LightningStrike</a></legend>
                    <div id="LightningStrike_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeosphericPhenomenon.prototype.template.call (this) +
                    `
                    {{#errorEllipseConfidence}}<div><b>errorEllipseConfidence</b>: {{errorEllipseConfidence}}</div>{{/errorEllipseConfidence}}
                    {{#errorEllipseMajorSemiAxis}}<div><b>errorEllipseMajorSemiAxis</b>: {{errorEllipseMajorSemiAxis}}</div>{{/errorEllipseMajorSemiAxis}}
                    {{#errorEllipseMinorSemiAxis}}<div><b>errorEllipseMinorSemiAxis</b>: {{errorEllipseMinorSemiAxis}}</div>{{/errorEllipseMinorSemiAxis}}
                    {{#errorEllipseOrientation}}<div><b>errorEllipseOrientation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{errorEllipseOrientation}}");}); return false;'>{{errorEllipseOrientation}}</a></div>{{/errorEllipseOrientation}}
                    {{#negativePolarity}}<div><b>negativePolarity</b>: {{negativePolarity}}</div>{{/negativePolarity}}
                    {{#peakAmplitude}}<div><b>peakAmplitude</b>: {{peakAmplitude}}</div>{{/peakAmplitude}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LightningStrike_collapse" aria-expanded="true" aria-controls="{{id}}_LightningStrike_collapse" style="margin-left: 10px;">LightningStrike</a></legend>
                    <div id="{{id}}_LightningStrike_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeosphericPhenomenon.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_errorEllipseConfidence'>errorEllipseConfidence: </label><div class='col-sm-8'><input id='{{id}}_errorEllipseConfidence' class='form-control' type='text'{{#errorEllipseConfidence}} value='{{errorEllipseConfidence}}'{{/errorEllipseConfidence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_errorEllipseMajorSemiAxis'>errorEllipseMajorSemiAxis: </label><div class='col-sm-8'><input id='{{id}}_errorEllipseMajorSemiAxis' class='form-control' type='text'{{#errorEllipseMajorSemiAxis}} value='{{errorEllipseMajorSemiAxis}}'{{/errorEllipseMajorSemiAxis}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_errorEllipseMinorSemiAxis'>errorEllipseMinorSemiAxis: </label><div class='col-sm-8'><input id='{{id}}_errorEllipseMinorSemiAxis' class='form-control' type='text'{{#errorEllipseMinorSemiAxis}} value='{{errorEllipseMinorSemiAxis}}'{{/errorEllipseMinorSemiAxis}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_errorEllipseOrientation'>errorEllipseOrientation: </label><div class='col-sm-8'><input id='{{id}}_errorEllipseOrientation' class='form-control' type='text'{{#errorEllipseOrientation}} value='{{errorEllipseOrientation}}'{{/errorEllipseOrientation}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_negativePolarity'>negativePolarity: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_negativePolarity' class='form-check-input' type='checkbox'{{#negativePolarity}} checked{{/negativePolarity}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_peakAmplitude'>peakAmplitude: </label><div class='col-sm-8'><input id='{{id}}_peakAmplitude' class='form-control' type='text'{{#peakAmplitude}} value='{{peakAmplitude}}'{{/peakAmplitude}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LightningStrike" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_errorEllipseConfidence").value; if ("" !== temp) obj["errorEllipseConfidence"] = temp;
                temp = document.getElementById (id + "_errorEllipseMajorSemiAxis").value; if ("" !== temp) obj["errorEllipseMajorSemiAxis"] = temp;
                temp = document.getElementById (id + "_errorEllipseMinorSemiAxis").value; if ("" !== temp) obj["errorEllipseMinorSemiAxis"] = temp;
                temp = document.getElementById (id + "_errorEllipseOrientation").value; if ("" !== temp) obj["errorEllipseOrientation"] = temp;
                temp = document.getElementById (id + "_negativePolarity").checked; if (temp) obj["negativePolarity"] = true;
                temp = document.getElementById (id + "_peakAmplitude").value; if ("" !== temp) obj["peakAmplitude"] = temp;

                return (obj);
            }
        }

        /**
         * A tropical cyclone, a subtype of cyclone that forms to the east of 90°E in the Southern Hemisphere whose intensity is measured by the Australian tropical cyclone intensity scale.
         *
         */
        class TropicalCycloneAustralia extends Cyclone
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TropicalCycloneAustralia;
                if (null == bucket)
                   cim_data.TropicalCycloneAustralia = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TropicalCycloneAustralia[obj.id];
            }

            parse (context, sub)
            {
                let obj = Cyclone.prototype.parse.call (this, context, sub);
                obj.cls = "TropicalCycloneAustralia";
                base.parse_element (/<cim:TropicalCycloneAustralia.category>([\s\S]*?)<\/cim:TropicalCycloneAustralia.category>/g, obj, "category", base.to_string, sub, context);
                let bucket = context.parsed.TropicalCycloneAustralia;
                if (null == bucket)
                   context.parsed.TropicalCycloneAustralia = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Cyclone.prototype.export.call (this, obj, false);

                base.export_element (obj, "TropicalCycloneAustralia", "category", "category",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TropicalCycloneAustralia_collapse" aria-expanded="true" aria-controls="TropicalCycloneAustralia_collapse" style="margin-left: 10px;">TropicalCycloneAustralia</a></legend>
                    <div id="TropicalCycloneAustralia_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Cyclone.prototype.template.call (this) +
                    `
                    {{#category}}<div><b>category</b>: {{category}}</div>{{/category}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TropicalCycloneAustralia_collapse" aria-expanded="true" aria-controls="{{id}}_TropicalCycloneAustralia_collapse" style="margin-left: 10px;">TropicalCycloneAustralia</a></legend>
                    <div id="{{id}}_TropicalCycloneAustralia_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Cyclone.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_category'>category: </label><div class='col-sm-8'><input id='{{id}}_category' class='form-control' type='text'{{#category}} value='{{category}}'{{/category}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TropicalCycloneAustralia" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_category").value; if ("" !== temp) obj["category"] = temp;

                return (obj);
            }
        }

        /**
         * A fire, often uncontrolled, covering an area of land which typically contains combustible vegetation.
         *
         * Associated location information is assumed to describe the total area burned as of a specified time.
         *
         */
        class Fire extends GeosphericPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Fire;
                if (null == bucket)
                   cim_data.Fire = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Fire[obj.id];
            }

            parse (context, sub)
            {
                let obj = GeosphericPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "Fire";
                let bucket = context.parsed.Fire;
                if (null == bucket)
                   context.parsed.Fire = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GeosphericPhenomenon.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Fire_collapse" aria-expanded="true" aria-controls="Fire_collapse" style="margin-left: 10px;">Fire</a></legend>
                    <div id="Fire_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeosphericPhenomenon.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Fire_collapse" aria-expanded="true" aria-controls="{{id}}_Fire_collapse" style="margin-left: 10px;">Fire</a></legend>
                    <div id="{{id}}_Fire_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeosphericPhenomenon.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "Fire" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * An earthquake.
         *
         */
        class Earthquake extends GeosphericPhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Earthquake;
                if (null == bucket)
                   cim_data.Earthquake = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Earthquake[obj.id];
            }

            parse (context, sub)
            {
                let obj = GeosphericPhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "Earthquake";
                base.parse_attribute (/<cim:Earthquake.focalDepth\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "focalDepth", sub, context);
                base.parse_element (/<cim:Earthquake.intensity>([\s\S]*?)<\/cim:Earthquake.intensity>/g, obj, "intensity", base.to_string, sub, context);
                base.parse_element (/<cim:Earthquake.magnitude>([\s\S]*?)<\/cim:Earthquake.magnitude>/g, obj, "magnitude", base.to_float, sub, context);
                let bucket = context.parsed.Earthquake;
                if (null == bucket)
                   context.parsed.Earthquake = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = GeosphericPhenomenon.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Earthquake", "focalDepth", "focalDepth", fields);
                base.export_element (obj, "Earthquake", "intensity", "intensity",  base.from_string, fields);
                base.export_element (obj, "Earthquake", "magnitude", "magnitude",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Earthquake_collapse" aria-expanded="true" aria-controls="Earthquake_collapse" style="margin-left: 10px;">Earthquake</a></legend>
                    <div id="Earthquake_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeosphericPhenomenon.prototype.template.call (this) +
                    `
                    {{#focalDepth}}<div><b>focalDepth</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{focalDepth}}");}); return false;'>{{focalDepth}}</a></div>{{/focalDepth}}
                    {{#intensity}}<div><b>intensity</b>: {{intensity}}</div>{{/intensity}}
                    {{#magnitude}}<div><b>magnitude</b>: {{magnitude}}</div>{{/magnitude}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Earthquake_collapse" aria-expanded="true" aria-controls="{{id}}_Earthquake_collapse" style="margin-left: 10px;">Earthquake</a></legend>
                    <div id="{{id}}_Earthquake_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + GeosphericPhenomenon.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_focalDepth'>focalDepth: </label><div class='col-sm-8'><input id='{{id}}_focalDepth' class='form-control' type='text'{{#focalDepth}} value='{{focalDepth}}'{{/focalDepth}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_intensity'>intensity: </label><div class='col-sm-8'><input id='{{id}}_intensity' class='form-control' type='text'{{#intensity}} value='{{intensity}}'{{/intensity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_magnitude'>magnitude: </label><div class='col-sm-8'><input id='{{id}}_magnitude' class='form-control' type='text'{{#magnitude}} value='{{magnitude}}'{{/magnitude}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Earthquake" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_focalDepth").value; if ("" !== temp) obj["focalDepth"] = temp;
                temp = document.getElementById (id + "_intensity").value; if ("" !== temp) obj["intensity"] = temp;
                temp = document.getElementById (id + "_magnitude").value; if ("" !== temp) obj["magnitude"] = temp;

                return (obj);
            }
        }

        /**
         * A magnetic storm, a temporary disturbance of the earth's magnetic field, induced by radiation and streams of charged particles from the sun.
         *
         */
        class MagneticStorm extends SpacePhenomenon
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MagneticStorm;
                if (null == bucket)
                   cim_data.MagneticStorm = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MagneticStorm[obj.id];
            }

            parse (context, sub)
            {
                let obj = SpacePhenomenon.prototype.parse.call (this, context, sub);
                obj.cls = "MagneticStorm";
                base.parse_element (/<cim:MagneticStorm.changeDst>([\s\S]*?)<\/cim:MagneticStorm.changeDst>/g, obj, "changeDst", base.to_string, sub, context);
                let bucket = context.parsed.MagneticStorm;
                if (null == bucket)
                   context.parsed.MagneticStorm = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SpacePhenomenon.prototype.export.call (this, obj, false);

                base.export_element (obj, "MagneticStorm", "changeDst", "changeDst",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MagneticStorm_collapse" aria-expanded="true" aria-controls="MagneticStorm_collapse" style="margin-left: 10px;">MagneticStorm</a></legend>
                    <div id="MagneticStorm_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SpacePhenomenon.prototype.template.call (this) +
                    `
                    {{#changeDst}}<div><b>changeDst</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{changeDst}}");}); return false;'>{{changeDst}}</a></div>{{/changeDst}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MagneticStorm_collapse" aria-expanded="true" aria-controls="{{id}}_MagneticStorm_collapse" style="margin-left: 10px;">MagneticStorm</a></legend>
                    <div id="{{id}}_MagneticStorm_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SpacePhenomenon.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_changeDst'>changeDst: </label><div class='col-sm-8'><input id='{{id}}_changeDst' class='form-control' type='text'{{#changeDst}} value='{{changeDst}}'{{/changeDst}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MagneticStorm" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_changeDst").value; if ("" !== temp) obj["changeDst"] = temp;

                return (obj);
            }
        }

        /**
         * A hurricane, a subtype of cyclone occurring in the North Atlantic Ocean or North-eastern Pacific Ocean whose intensity is measured using the Saffir-Simpson Hurricane Scale.
         *
         */
        class Hurricane extends Cyclone
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Hurricane;
                if (null == bucket)
                   cim_data.Hurricane = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Hurricane[obj.id];
            }

            parse (context, sub)
            {
                let obj = Cyclone.prototype.parse.call (this, context, sub);
                obj.cls = "Hurricane";
                base.parse_element (/<cim:Hurricane.category>([\s\S]*?)<\/cim:Hurricane.category>/g, obj, "category", base.to_string, sub, context);
                let bucket = context.parsed.Hurricane;
                if (null == bucket)
                   context.parsed.Hurricane = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Cyclone.prototype.export.call (this, obj, false);

                base.export_element (obj, "Hurricane", "category", "category",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Hurricane_collapse" aria-expanded="true" aria-controls="Hurricane_collapse" style="margin-left: 10px;">Hurricane</a></legend>
                    <div id="Hurricane_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Cyclone.prototype.template.call (this) +
                    `
                    {{#category}}<div><b>category</b>: {{category}}</div>{{/category}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Hurricane_collapse" aria-expanded="true" aria-controls="{{id}}_Hurricane_collapse" style="margin-left: 10px;">Hurricane</a></legend>
                    <div id="{{id}}_Hurricane_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Cyclone.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_category'>category: </label><div class='col-sm-8'><input id='{{id}}_category' class='form-control' type='text'{{#category}} value='{{category}}'{{/category}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Hurricane" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_category").value; if ("" !== temp) obj["category"] = temp;

                return (obj);
            }
        }

        /**
         * Analog (float) measuring a hydrospheric condition.
         *
         */
        class HydrosphericAnalog extends EnvironmentalAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.HydrosphericAnalog;
                if (null == bucket)
                   cim_data.HydrosphericAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HydrosphericAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = EnvironmentalAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "HydrosphericAnalog";
                base.parse_attribute (/<cim:HydrosphericAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.HydrosphericAnalog;
                if (null == bucket)
                   context.parsed.HydrosphericAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EnvironmentalAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "HydrosphericAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HydrosphericAnalog_collapse" aria-expanded="true" aria-controls="HydrosphericAnalog_collapse" style="margin-left: 10px;">HydrosphericAnalog</a></legend>
                    <div id="HydrosphericAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalAnalog.prototype.template.call (this) +
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
                obj["kindHydrosphericAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in EnvDomain.HydrosphericAnalogKind) obj["kindHydrosphericAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindHydrosphericAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HydrosphericAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_HydrosphericAnalog_collapse" style="margin-left: 10px;">HydrosphericAnalog</a></legend>
                    <div id="{{id}}_HydrosphericAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindHydrosphericAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindHydrosphericAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "HydrosphericAnalog" };
                super.submit (id, obj);
                temp = EnvDomain.HydrosphericAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#HydrosphericAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Analog (float) measuring an atmospheric condition.
         *
         */
        class AtmosphericAnalog extends EnvironmentalAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AtmosphericAnalog;
                if (null == bucket)
                   cim_data.AtmosphericAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AtmosphericAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = EnvironmentalAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "AtmosphericAnalog";
                base.parse_attribute (/<cim:AtmosphericAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.AtmosphericAnalog;
                if (null == bucket)
                   context.parsed.AtmosphericAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EnvironmentalAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AtmosphericAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AtmosphericAnalog_collapse" aria-expanded="true" aria-controls="AtmosphericAnalog_collapse" style="margin-left: 10px;">AtmosphericAnalog</a></legend>
                    <div id="AtmosphericAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalAnalog.prototype.template.call (this) +
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
                obj["kindAtmosphericAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in EnvDomain.AtmosphericAnalogKind) obj["kindAtmosphericAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindAtmosphericAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AtmosphericAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_AtmosphericAnalog_collapse" style="margin-left: 10px;">AtmosphericAnalog</a></legend>
                    <div id="{{id}}_AtmosphericAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindAtmosphericAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindAtmosphericAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AtmosphericAnalog" };
                super.submit (id, obj);
                temp = EnvDomain.AtmosphericAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#AtmosphericAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Analog (float) measuring a space (extra-terrestrial) condition.
         *
         */
        class SpaceAnalog extends EnvironmentalAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SpaceAnalog;
                if (null == bucket)
                   cim_data.SpaceAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SpaceAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = EnvironmentalAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "SpaceAnalog";
                base.parse_attribute (/<cim:SpaceAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.SpaceAnalog;
                if (null == bucket)
                   context.parsed.SpaceAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EnvironmentalAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SpaceAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SpaceAnalog_collapse" aria-expanded="true" aria-controls="SpaceAnalog_collapse" style="margin-left: 10px;">SpaceAnalog</a></legend>
                    <div id="SpaceAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalAnalog.prototype.template.call (this) +
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
                obj["kindSpaceAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in EnvDomain.SpaceAnalogKind) obj["kindSpaceAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindSpaceAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SpaceAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_SpaceAnalog_collapse" style="margin-left: 10px;">SpaceAnalog</a></legend>
                    <div id="{{id}}_SpaceAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindSpaceAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindSpaceAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SpaceAnalog" };
                super.submit (id, obj);
                temp = EnvDomain.SpaceAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#SpaceAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Analog (float) measuring a geospheric condition.
         *
         */
        class GeosphericAnalog extends EnvironmentalAnalog
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.GeosphericAnalog;
                if (null == bucket)
                   cim_data.GeosphericAnalog = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GeosphericAnalog[obj.id];
            }

            parse (context, sub)
            {
                let obj = EnvironmentalAnalog.prototype.parse.call (this, context, sub);
                obj.cls = "GeosphericAnalog";
                base.parse_attribute (/<cim:GeosphericAnalog.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                let bucket = context.parsed.GeosphericAnalog;
                if (null == bucket)
                   context.parsed.GeosphericAnalog = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EnvironmentalAnalog.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "GeosphericAnalog", "kind", "kind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GeosphericAnalog_collapse" aria-expanded="true" aria-controls="GeosphericAnalog_collapse" style="margin-left: 10px;">GeosphericAnalog</a></legend>
                    <div id="GeosphericAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalAnalog.prototype.template.call (this) +
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
                obj["kindGeosphericAnalogKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in EnvDomain.GeosphericAnalogKind) obj["kindGeosphericAnalogKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindGeosphericAnalogKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GeosphericAnalog_collapse" aria-expanded="true" aria-controls="{{id}}_GeosphericAnalog_collapse" style="margin-left: 10px;">GeosphericAnalog</a></legend>
                    <div id="{{id}}_GeosphericAnalog_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalAnalog.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindGeosphericAnalogKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindGeosphericAnalogKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "GeosphericAnalog" };
                super.submit (id, obj);
                temp = EnvDomain.GeosphericAnalogKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#GeosphericAnalogKind." + temp; else delete obj["kind"];

                return (obj);
            }
        }

        /**
         * Observed (actual non-forecast) values sets and/or phenomena characteristics.
         *
         */
        class Observation extends EnvironmentalInformation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Observation;
                if (null == bucket)
                   cim_data.Observation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Observation[obj.id];
            }

            parse (context, sub)
            {
                let obj = EnvironmentalInformation.prototype.parse.call (this, context, sub);
                obj.cls = "Observation";
                let bucket = context.parsed.Observation;
                if (null == bucket)
                   context.parsed.Observation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EnvironmentalInformation.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Observation_collapse" aria-expanded="true" aria-controls="Observation_collapse" style="margin-left: 10px;">Observation</a></legend>
                    <div id="Observation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalInformation.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Observation_collapse" aria-expanded="true" aria-controls="{{id}}_Observation_collapse" style="margin-left: 10px;">Observation</a></legend>
                    <div id="{{id}}_Observation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalInformation.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "Observation" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A forecast group of value sets and/or phenomena characteristics.
         *
         */
        class Forecast extends EnvironmentalInformation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Forecast;
                if (null == bucket)
                   cim_data.Forecast = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Forecast[obj.id];
            }

            parse (context, sub)
            {
                let obj = EnvironmentalInformation.prototype.parse.call (this, context, sub);
                obj.cls = "Forecast";
                base.parse_attribute (/<cim:Forecast.validFor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "validFor", sub, context);
                let bucket = context.parsed.Forecast;
                if (null == bucket)
                   context.parsed.Forecast = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = EnvironmentalInformation.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Forecast", "validFor", "validFor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Forecast_collapse" aria-expanded="true" aria-controls="Forecast_collapse" style="margin-left: 10px;">Forecast</a></legend>
                    <div id="Forecast_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalInformation.prototype.template.call (this) +
                    `
                    {{#validFor}}<div><b>validFor</b>: {{validFor}}</div>{{/validFor}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Forecast_collapse" aria-expanded="true" aria-controls="{{id}}_Forecast_collapse" style="margin-left: 10px;">Forecast</a></legend>
                    <div id="{{id}}_Forecast_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EnvironmentalInformation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_validFor'>validFor: </label><div class='col-sm-8'><input id='{{id}}_validFor' class='form-control' type='text'{{#validFor}} value='{{validFor}}'{{/validFor}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Forecast" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_validFor").value; if ("" !== temp) obj["validFor"] = temp;

                return (obj);
            }
        }

        return (
            {
                Flood: Flood,
                PhenomenonClassification: PhenomenonClassification,
                ClassificationCondition: ClassificationCondition,
                LightningStrike: LightningStrike,
                ReportingCapability: ReportingCapability,
                AtmosphericAnalog: AtmosphericAnalog,
                Cyclone: Cyclone,
                TropicalCycloneAustralia: TropicalCycloneAustralia,
                EnvironmentalAlert: EnvironmentalAlert,
                Hurricane: Hurricane,
                EnvironmentalPhenomenon: EnvironmentalPhenomenon,
                SpacePhenomenon: SpacePhenomenon,
                EnvironmentalAnalog: EnvironmentalAnalog,
                EnvironmentalEvent: EnvironmentalEvent,
                GeosphericPhenomenon: GeosphericPhenomenon,
                SpaceAnalog: SpaceAnalog,
                Observation: Observation,
                EnvironmentalDataProvider: EnvironmentalDataProvider,
                EnvironmentalDataAuthority: EnvironmentalDataAuthority,
                Tornado: Tornado,
                EnvironmentalCodedValue: EnvironmentalCodedValue,
                EnvironmentalInformation: EnvironmentalInformation,
                GeosphericAnalog: GeosphericAnalog,
                AlertTypeList: AlertTypeList,
                Fire: Fire,
                VolcanicAshCloud: VolcanicAshCloud,
                EnvironmentalDiscrete: EnvironmentalDiscrete,
                Forecast: Forecast,
                HydrosphericAnalog: HydrosphericAnalog,
                EnvironmentalLocationType: EnvironmentalLocationType,
                HydrosphericPhenomenon: HydrosphericPhenomenon,
                CloudCondition: CloudCondition,
                Earthquake: Earthquake,
                Whirlpool: Whirlpool,
                AtmosphericPhenomenon: AtmosphericPhenomenon,
                MagneticStorm: MagneticStorm,
                EnvironmentalStringMeasurement: EnvironmentalStringMeasurement,
                Landslide: Landslide,
                Tsunami: Tsunami
            }
        );
    }
);